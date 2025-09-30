#version 300 es
precision highp float;
out vec4 fragColor;
uniform float u_time;
uniform vec2 u_resolution;
uniform sampler2D u_texture_1; // ../swcp/texture.png
uniform vec2 u_texture_1Resolution;
const float PI = 3.1415926;

vec2 rot(vec2 st,float t){
  mat2 rotate=mat2(cos(.5+t),sin(.5+t),-sin(.5+t),cos(.5+t));
  return st*rotate;
}

#include "../../../node_modules/glsl-noise/simplex/2d.glsl"

float random (in vec2 st) {
  // return sin(sin(st.x + t * 1.0)* cos(st.y + t * -4.0));
    return fract((abs(1.0 - length(st) * length(st)) ));
    // return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

float noise (in vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);

  float a = random(i);
  float b = random(i + vec2(1.0, 0.0));
  float c = random(i + vec2(0.0, 1.0));
  float d = random(i + vec2(1.0, 1.0));

  vec2 u = smoothstep(0.,1.,f);

  u = vec2(sqrt(1.0 - u.x * u.x), sqrt(1.0 - u.y * u.y));

  // return smin(mix(a, b, u[0]), mix(c, d, u[0]), u.x);
  return mix(mix(a, b, u[0]), mix(c, d, u[0]), u[1]);
}

float line(float x) {
  // return sqrt(1.0 - x * x);
  return smoothstep(0.98, 1.0, fract(x));
  return max(0.0, 1.0 - abs(0.0 * x*x));
}
float tri(float x) {
  return abs(x - .5) * 2.0;
}


mat3 translate(float x, float y) {
  return mat3(
    1.0, 0.0, .0,    //scaleX
    0.0, 1.0, .0,    //scaleY
    x, y, 1.0    //translate
  );
}
mat3 rot(float r) {
  return mat3(
    cos(r), -sin(r), 0.0,
    sin(r), cos(r), 0.0,
    0.0, 0.0, 1.0
  );
}
float draw_sin( vec2 st, float freq, float phase, float weight, float amp, float modulator){
  return abs(weight/st.y);
}

void main(){


  float aspect = u_resolution.y/u_resolution.x;
  vec2 st = (2.0 * gl_FragCoord.xy -u_resolution.xy)/ min(u_resolution.x, u_resolution.y);

  // st = rot(st, 0.01 * u_time * length(st));
  vec3 stm = vec3(st.x * .80, st.y, .80);

  // mat3 translate = mat3(
  //   1.0, 0.0, .0,    //scaleX
  //   0.0, 1.0, .0,    //scaleY
  //   0.0, 0.0, 1.0    //translate
  // );

float lines = 0.0;

  // float r = 0.0;
  // mat3 rot4 = mat3(
  //   cos(r), -sin(r), 0.0,
  //   sin(r), cos(r), 0.0,
  //   0.0, 0.0, 1.0
  // );

  // stm = translate(cos(r) - u_time, 0.0) * stm;
  // lines += line(stm.x);

  for(int i = 0; i < 5; i++) {
    float fi = float(i);
    float r = PI * .5 * fi + u_time * 0.2;
    vec3 stm = rot(r) * translate(cos(r), random(vec2(u_time * .004 + fi))) * stm;
    lines += line(cos(stm.y * 32.0) * cos(stm.x * 12.10) ) ;

// float draw_sin( vec2 st, float freq, float phase, float weight, float amp, float modulator){
    // lines += (draw_sin(stm.xy, 2.0, 1.0, 1.0, 1.0, 0.0));

  }
  
  


  // co = noise_1 + noise_2;;

  fragColor = vec4(vec3(step(0.99,lines)),  1.0);
}