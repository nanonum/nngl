#version 300 es
precision highp float;
out vec4 fragColor;
uniform float u_time;
uniform vec2 u_resolution;
const float PI = 3.1415926;

#define PI 3.1415926535897932384626433832795
#define TWO_PI 6.28318530718


float smin(float a, float b, float k){
  float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
  return mix(b, a, h) - k * h * (1.0 - h); 
}

#include "../../../node_modules/glsl-noise/simplex/2d.glsl"
float random (in vec2 st) {
  return sin( sin(st.y + u_time * .002));
}
vec3 bgc_from = vec3(0.99607843, 0.89803922, 0.92156863);
vec3 bgc_to = vec3(0.81960784, 0.60392157, 0.68235294);

// vec3 bgc_from = vec3(1.0, 0.0, 0.0);
// vec3 bgc_to = vec3(0.0, 0.0, 1.0);

float sin_plus(float r) {
  return (sin(r) + 1.0) * 0.5;
}
vec2 rot(vec2 uv,float a){
    return vec2(uv.x*cos(a)-uv.y*sin(a),uv.y*cos(a)+uv.x*sin(a));
}
vec3 rot3(vec3 uv,float a){
	return vec3(uv.x*cos(a)-uv.y*sin(a) * tan(a),uv.y*cos(a)+uv.x*sin(a),uv.y*cos(a)+uv.x*sin(a));
}

float tri(float x) {
  return 1.0 - abs((x) - .5) * 2.0;
}
float line(float x) {
  return step(0.995, fract(x));
  return max(0.0, 1.0 - abs(11110.0 * x*x));
}

float draw_sin( vec2 st, float freq, float phase, float weight, float amp, float modulator){
  return abs(weight/st.y);
}
vec2 centeredST() {
  float aspect = u_resolution.y/u_resolution.x;
  return (2.0 * gl_FragCoord.xy -u_resolution.xy)/ min(u_resolution.x, u_resolution.y) / aspect;
}

// float _sinWave(vec2 st, float freq, float phase, float weight, float amp, float modulator ){
//   float r = draw_sin(
//     st ,
//     freq,
//     fract(u_time * 0.1 + phase),
//     amp,
//     modulator
//   );
//   return abs(weight/r);
// }

float getpart(float x, float n, float i) {
  float modi = mod(i, n);
  return 
    step(modi / n, x)     // left
    *
    (1.0 - step((modi + 1.0) / n, x));    //right
  // float p = 
  // return p / n;
}

void main(void){
    vec2 st = centeredST();
    vec2 uv = st * 2.0 - 1.0;
    
    vec3 crt = vec3(.0);

    float time = (u_time * .51);
    int il = 2;
    float fl = float(il);
    
    float phi =  0.5;
    st = rot(st, phi );
    float t = 0.0;

    for(int i = 0; i <1; i ++ ) {
      float fi = float(i) ;
      st = rot(st, 0.25 + (PI * fi));


      float shift = 1.0 / tan(0.25 + (PI * fi));
      // float r = sqrt(shift * shift + 1.0);
      // t += clamp(0.0, 1.0, 1.0 - pow(tri(fract(st.x)), .3));
      t = t + line(st.x - shift);

      st.y += .5;
      st.x += shift;
      
      // t = t + pow(tri(fract(st.x + shift)), .4);
    }

    // t /= 5.0;

    t = pow(t, 1.2);

    fragColor = vec4(
      vec3(t),
    1.0);
}