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

#define NUM_OCTAVES 5

float fbm ( in vec2 _st, in float rad) {
    float v = 0.0;
    float a = .5;
    vec2 shift = vec2(0.0);
    // Rotate to reduce axial bias
    mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.50));
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
    
    for ( int i = 0; i < 10 ; i++ ){
      float fi = float(i);
        float il = fi * 0.5;
        float min = 0.02 ;
        float start = il * .31 + min; // + ((sin(u_time * 0.2) + 1.0) * 0.041);
        float width = 0.1;
        
        
        l.x *= .9923 + snoise(vec2(fi * 0.4, .2 + u_time * 0.2)) * st.y * rad ;
        l.y -= 0.00023 + snoise(vec2(fi * .24, .2 + u_time * 0.12)) * st.y * rad;
        l.z -= 0.113923 + snoise(vec2(fi * .224, .2 + u_time * 0.0884)) * st.y * rad;
        
        float n = sin(il * 10.0 + 20.0);

        float edge = smoothstep(width, start + width + abs(snoise(st * q * n ) + 1.0) * .03 , rad);
        edge -= smoothstep(width + .03, start + abs(snoise(st * q * n) + 1.0 ) * .03 , rad);
        c+= l * edge;
    }
    

    return c;
}

void main(void)
{

        float aspect = u_resolution.y/u_resolution.x;


        float u_time_sp = u_time * .2 + 1000.0;

        vec2 st = vec2(gl_FragCoord.x/u_resolution.x, gl_FragCoord.y/u_resolution.y * aspect);
        
        float rad = distance(vec2(.5, .5 * aspect), st);


        vec2 q = vec2(0.);
        q.x = fbm( st + u_time* -0.04, rad);
        q.y = fbm( st + vec2(-0.004,-30.0), rad);


        float alpha = 1.0;
        float edge = step(rad, .075 + abs(snoise(st * q ) + 1.0 ) * .03 );
         edge -= step(rad, .073 + abs(snoise(st * q ) + 1.0) * .03 ) ;
//         vec3 color = color1 * (edge);
        vec3 color = lines(st, q, rad);
         
         
        vec4 c1 = vec4(color, alpha);
        

        fragColor = c1;

}


