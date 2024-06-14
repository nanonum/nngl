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

#include "../../node_modules/glsl-noise/simplex/2d.glsl"

float nco(vec2 st, float seed) {

  vec2 st_f = vec2(floor(st.x * 2.0), floor(st.y * 3.0));
  float noise_1 = snoise(st_f + u_time * 0.02 + seed);
  
  vec2 st_f2 = floor(st * .10);
  float noise_2 = snoise(st_f2 + u_time * 0.01 + seed);


  vec2 st_m = mod(st * .40, 1.0);

  return
     cos(0.98 * noise_1 * snoise(vec2(st_m.x, st_m.x)) * 390.0)
   * cos(0.98 * noise_2 * snoise(vec2(st_m.x, st_m.y)) * 390.0);
}

void main(){


  float aspect = u_resolution.y/u_resolution.x;
  vec2 st = (2.0 * gl_FragCoord.xy -u_resolution.xy)/ min(u_resolution.x, u_resolution.y);

  // st = rot(st, 0.01 * u_time * length(st));
  

  vec3 co = vec3(
    pow(nco(st, .11) + abs(snoise(st)), .88)
    ,
    pow(nco(st, .1) + abs(snoise(st)), .88)
    ,
    pow(nco(st, .14) + abs(snoise(st)), .88)
  );


  // co = noise_1 + noise_2;;

  fragColor = vec4(co,  1.0);
}