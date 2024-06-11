#version 300 es
precision highp float;
precision highp int;
out vec4 fragColor;
uniform float u_time;
uniform vec2 u_resolution;


vec3 color0 = vec3(255.0 / 255.0, 1.0 / 255.0, 120.0 / 255.0);
vec3 color1 = vec3(0.0 /255.0, 247.0 / 255.0, 35.0 / 255.0);


vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }
float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187,  0.366025403784439, -0.577350269189626, 0.024390243902439);vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx); vec2 i1;i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz; x12.xy -= i1; i = mod289(i); vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);m = m*m ;    m = m*m ;vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;vec3 ox = floor(x + 0.5); vec3 a0 = x - ox; m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    vec3 g; g.x  = a0.x  * x0.x  + h.x  * x0.y; g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
}

#define NUM_OCTAVES 3

float fbm ( in vec2 _st, in float rad, in float rot_time) {
    float v = 0.0;
    float a = .5;
    vec2 shift = vec2(0.0);
    // Rotate to reduce axial bias
//    float rot_time = time * 0.2;
    mat2 rot = mat2(cos(0.5 + rot_time), sin(0.5+ rot_time), -sin(0.5+ rot_time), cos(0.50+ rot_time));
    for (int i = 0; i < NUM_OCTAVES; ++i) {
        v += a * snoise(_st);
        _st =  rot* _st * 1.53998 + shift;
        a *= 1.38 / rad / 7.2;
    }
    return ((v + 1.0) * 0.5);
}
vec3 lines ( in vec2 st, in vec2 q, in float rad){
    vec3 c = vec3(0.0, 0, 0);
    vec3 l = vec3(1.0, 1.0, 1.0);
    
    for ( int i = 0; i < 20 ; i++ ){
      float f = float(i);
      float il = float(i) * 0.12;
      float min = 0.002 ;
      float start = il * .03 + min * snoise(vec2(1.0 - il * 3.2, fract(rad * u_time * 0.00))); // + ((sin(u_time * 0.2) + 1.0) * 0.041);
      float width = 0.0034 + sin( float(NUM_OCTAVES - i ) * 21.8) * 0.031;
      
      
      l.x *= .923 + snoise(vec2(f * .6, st.y + u_time * 0.12)) * st.y * rad ;
      l.y -= 0.0523 + snoise(vec2(f * 3.4, st.y + u_time * 0.12)) * st.y * rad;
      l.z -= 0.03923 + snoise(vec2(f * .224, st.y + u_time * 0.0884));
      
//        float n =  2 + 1.0* 1.92 + 5.5;
      float w = width + (snoise(vec2(2.0 * st.x * q.y * u_time * .13 , 2.0)) + 1.0) * .9;
      float r = (rad * 1.0) + 0.0;

      float edge = smoothstep(start, start + w , r);
      edge -= smoothstep(start - 0.02, start  , r);
      edge = pow(edge, .20);
      c+= l * edge;
    }
    

    return c;
}

float blobs(in vec2 st, in float aspect, in float seed){
    float circle = 0.0;

    for(int i = 0; i < 4; i++){
      float f = float(i);
        float prev = circle;
        float rand_x = snoise(vec2(f * 2.15, f + seed)) * .8;
        float rand_y = snoise(vec2(f * .15, f * 1.323 + seed)) * .4;
        float rad = distance(vec2(.5 + rand_x + cos(u_time + f * 1.2) * .215, (.5 + rand_y + sin(u_time + f * 1.2) * .4) * aspect), st);
        float steped = step(rad, .06 + abs(fbm(st * 2.150 + f * .2, rad, u_time * .1 + f * .2)) * .45);
        
        circle = max(steped * fbm(st * f * .43, .28, sin(u_time * .1) * 1.2), prev);
    }

    return circle;
}

void main(void) {
  float aspect = u_resolution.y/u_resolution.x;
  float u_time_sp = u_time * .2 + 1000.0;
  vec2 st = vec2(gl_FragCoord.x/u_resolution.x, gl_FragCoord.y/u_resolution.y * aspect);
  float blob = blobs(st, aspect, 2.0);
  vec3 c0 = color0 * 1.0 * blob;
  float mask = clamp(blobs(st, aspect, 8.0) - blob, 0.0, 1.0);
  float rad = distance(vec2(.5, .5 * aspect), st);
  vec3 c1 = color1 * 1.0 * mask * 15. * pow(rad, 2.0228);
  fragColor = vec4(c0 + c1, 1.0);
}