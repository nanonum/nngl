#version 300 es
precision highp float;
out vec4 fragColor;
uniform float u_time;
uniform vec2 u_resolution;
uniform sampler2D u_texture_0; // ../../../public/num.png
uniform vec2 u_texture_0Resolution;
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

vec2 centeredST() {
  float aspect = u_resolution.y/u_resolution.x;
  return (2.0 * gl_FragCoord.xy -u_resolution.xy)/ min(u_resolution.x, u_resolution.y) / aspect;
}

vec4 blocksample (in vec3 p, in float size) {

  vec3 stm = vec3(p.x, p.y, 1.0);


  vec2 i = (floor(stm.xy * size) / size) ;
  
  stm = translate(sin(i.x ), cos(i.x )) * p * rot(i.y * PI * .5);

  vec2 f = fract(stm.xy * size);

  f = rot(f, 1.0 * u_time);

  float bias = 1.0 / size * 4.5;

  vec4 a = texture(u_texture_0, i + vec2(-bias, -bias), 0.0);
  vec4 b = texture(u_texture_0, i + vec2(bias,-bias), 0.0);
  vec4 c = texture(u_texture_0, i + vec2(-bias, bias), 0.0);
  vec4 d = texture(u_texture_0, i + vec2(bias, bias), 0.0);
  // vec4 b = texture(u_texture_0,i + vec2(bias, -bias), 0.0);
  // vec4 c = texture(u_texture_0,i + vec2(-bias, bias), 0.0);
  // vec4 d = texture(u_texture_0,i + vec2(bias, bias), 0.0);

  // a = texture(u_texture_0, (i) + vec2(bias, 0.0), 0.0);
  // b = texture(u_texture_0, (i) + vec2(0.0, 0.0), 0.0);
  // c = texture(u_texture_0, (i) + vec2(0.0, bias), 0.0);
  // d = texture(u_texture_0, (i) + vec2(bias, bias), 0.0);
  // return a;
  vec2 u = smoothstep(0.,1.,f);

  // return c;


  // return a;
  // return smin(mix(a, b, u[0]), mix(c, d, u[0]), u.x);
  return mix(mix(a, b, u[0]), mix(c, d, u[0]), u[1]);
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
  return smoothstep(0., 1.0, fract(x));
  return max(0.0, 1.0 - abs(0.0 * x*x));
}
float tri(float x) {
  return abs(x - .5) * 2.0;
}

float draw_sin( vec2 st, float freq, float phase, float weight, float amp, float modulator){
  return abs(weight/st.y);
}

void main(){


  float aspect = u_resolution.y/u_resolution.x;
  vec2 st = gl_FragCoord.xy/u_resolution.x;

  // st = rot(st, 0.01 * u_time * length(st));
  vec3 stm = vec3(st.x * 1.0, st.y, 1.0);

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

  vec4 texcel = vec4(0.0, 0.0, 0.0, 1.0);
  for(int i = 0; i < 24; i++) {
    float fi = float(i);
    float r = PI * .5 * fi + u_time * 0.2;
    // vec3 stm = translate(cos(r), random(vec2(u_time * .00004))) * stm;
    // lines += line(stm.x ) ;

    texcel = blocksample(stm * 1.0, 3.0 + fi * 6.0);
// float draw_sin( vec2 st, float freq, float phase, float weight, float amp, float modulator){
    // lines += (draw_sin(stm.xy, 2.0, 1.0, 1.0, 1.0, 0.0));

  }
  
  


  // co = noise_1 + noise_2;;

  fragColor = vec4(vec3(step(0.99992,
    texcel
  )),  1.0);
}