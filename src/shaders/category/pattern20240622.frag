#version 300 es
precision highp float;
out vec4 fragColor;
uniform float u_time;
uniform vec2 u_resolution;
const float PI = 3.1415926;

vec2 rot(vec2 st,float t){
  mat2 rotate=mat2(cos(.5+t),sin(.5+t),-sin(.5+t),cos(.5+t));
  return st*rotate;
}

float smin(float a, float b, float k){
  float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
  return mix(b, a, h) - k * h * (1.0 - h); 
}
#include "../../../node_modules/glsl-noise/simplex/2d.glsl"

// 2D Random
float random (in vec2 st) {
  // return sin(sin(st.x + t * 1.0)* cos(st.y + t * -4.0));
    return fract(cos(st.x) * sin(st.y) + fract(u_time * 0.05) * 4.0);
    // return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

float noise (in vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);

  float a = random(i);
  float b = random(i + vec2(1.0, 0.0) * 0.12);
  float c = random(i + vec2(0.0, 1.0) * 0.12);
  float d = random(i + vec2(1.0, 1.0) * 0.12);

  vec2 u = smoothstep(0.,1.,f);

  u = vec2(pow(u.x, 1.90), pow(u.y, 1.90));

  // return smin(mix(a, b, u[0]), mix(c, d, u[0]), u.x);
  return mix(mix(a, b, u[0]), mix(c, d, u[0]), u[1]);
}

void main(){


  float aspect = u_resolution.y/u_resolution.x;
  vec2 st = (14.0 * gl_FragCoord.xy -u_resolution.xy)/ min(u_resolution.x, u_resolution.y);


  // Use the noise function
  float n = step(.985,fract(noise(st) * 8.0));
  n += step(.9995,fract(noise(st) * 4.0));
  n += step(.95,fract(noise(st) * 8.0));
  n += step(.95,fract(noise(st) * 16.0)) * .02;
  vec3 co = vec3(n * 1.0);
  // co = noise_1 + noise_2;;

  fragColor = vec4(co,  1.0);
}