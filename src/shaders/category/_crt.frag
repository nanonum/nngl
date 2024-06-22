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


float draw_sin( vec2 st, float freq, float phase, float weight, float amp, float modulator){
  return abs(weight/st.y);
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
}

float tri(float x) {
  return abs(x - .5) * 2.0;
}

float getpartphasor(float x, float n, float i, float strength) {
  float phase = fract(x * n);
  float part = getpart(x, n, i);
  // return phase;
  // return  part;
  return pow(1.0 - tri(phase), strength) * part;
}

void main(void){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec2 uv = st * 2.0 - 1.0;
    
    vec3 crt = vec3(.0);

    float time = (u_time * .241);

    vec2 stu = vec2(st.x, st.y);

    crt = vec3(
      getpartphasor(fract(stu.y * 55.0), 3.0, 0.0, 1.0) * getpartphasor(fract(stu.x * 102.0), 1.0, 1.0, 1.0),
      getpartphasor(fract(stu.y * 55.0), 3.0, 1.0, 1.0) * getpartphasor(fract(stu.x * 102.0), 1.0, 1.0, 1.0),
      getpartphasor(fract(stu.y * 55.0), 3.0, 2.0, 1.0) * getpartphasor(fract(stu.x * 102.0), 1.0, 1.0, 1.0) * sin_plus(time * 30.1)
    );

    crt.rg = rot(crt.rg, (time));

    fragColor = vec4(
      vec3(crt
      ),
    1.0);
}