#version 300 es
precision highp float;
precision highp int;


uniform float u_time;
uniform vec2 u_resolution;


out vec4 fragColor;

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

#define NUM_OCTAVES 2
float fbm ( in vec2 _st, in float rad, in float rot_time) {
    float v = 0.0;
    float a = .5;
    vec2 shift = vec2(0.0);
    // Rotate to reduce axial bias
//    float rot_time = u_time * 0.2;
    mat2 rot = mat2(cos(0.5 + rot_time), sin(0.5+ rot_time), -sin(0.5+ rot_time), cos(0.50+ rot_time));
    for (int i = 0; i < NUM_OCTAVES; ++i) {
        v += a * snoise(_st);
        _st =  rot* _st * 1.53998 + shift;
        a *= 1.38 / rad / 2.2;
    }
    return ((v + 1.0) * 0.5);
}

float blobs(in vec2 st, in float aspect, in float seed){
  float circle = 0.0;
  float max_loops = fract((u_time * 0.12) + sin(u_time * .122) * 3.0) * 15.0 + fract((u_time * 0.02)) * 2.0 + 3.0;
  for(int i = 1; i < int(max_loops); i++){
    float fi = float(i);
    float prev = circle;
    float rand_x = fract(fi * u_time * .02 + 299.0) - 0.5;
    float rand_y = snoise(vec2(u_time * .38 + fi * .5, fi * 3.3 + seed)) * .4;
    float rad = distance(vec2(.5 + rand_x, (.5 +  + rand_y) * aspect), st);

    float index = fi /90.0 * 0.2;
    float a = fract(u_time* 0.102) * .321 + 10.0;
    a = fract(u_time * 0.04 + fi * 0.2) *  2.2 + 3.5;
    float b = fract( u_time * .001003028) + .29;
    float c = step(fract( u_time * .4  * st.x + fi * st.y * .5 + fract(u_time * .18)), .05 ) * 1.0;

    
    float step_min = fbm(st, rad, fi * u_time * .5);
    float step_threshold = sin(fi * .4 * u_time) * .2;
    
    float e = floor(sin(st.x / b * u_time * .100) / a);
    float f = floor(sin(st.x*  b * u_time) * a);

    float blink =  mix(e + f, 1.0, step(fract(abs(sin(sin(u_time * .32) * 3.14))), .5));
    
    
    float current = step(step_min, step_threshold ) * blink * c;


    circle = max(current, prev) * fi /max_loops * 3.0;

  }

  return circle;
}

vec3 color0 = vec3(255.0 / 255.0, 1.0 / 255.0, 120.0 / 255.0);
vec3 color1 = vec3(0.0 /255.0, 247.0 / 255.0, 35.0 / 255.0);

void main(void) {

  float aspect = u_resolution.y/u_resolution.x;
  float u_time_sp = u_time * .2 + 1000.0;
  
  vec2 st = vec2(gl_FragCoord.x/u_resolution.x, gl_FragCoord.y/u_resolution.y * aspect);
  float blob = blobs(st, aspect, 2.0);
  
  vec3 c0 = color0 * blob;
  float mask = clamp(blobs(st, aspect, 8.0) - blob, 0.0, 1.0);
  float rad = distance(vec2(.5, .5 * aspect), st);
  vec3 c1 = color1 * 23.0 * mask * 20.0;

  fragColor = vec4(c0 + c1, 1.0);

}


