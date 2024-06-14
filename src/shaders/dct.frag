#version 300 es
precision highp float;
out vec4 fragColor;
uniform float u_time;
uniform vec2 u_mouse;
uniform vec2 u_resolution;
uniform sampler2D u_texture_1; // ../swcp/texture.png
uniform vec2 u_texture_1Resolution;
const float PI = 3.1415926;

#include "../../node_modules/glsl-noise/simplex/2d.glsl"

float nco(vec2 st, float seed, float freq1, float freq2) {

  vec2 st_f = vec2(floor(st.x * freq1), floor(st.y * freq1));
  float noise_1 = snoise(st_f + u_time * .04 + seed + sin(u_time * .3) * 0.3);
  
  // vec2 st_f2 = floor(st * .10);
  vec2 st_f2 = vec2(floor(st.x * freq2), floor(st.y * freq2));
  float noise_2 = snoise(st_f2 + u_time * .04 + seed + sin(u_time * .3) * 0.3);


  vec2 st_m = mod(st * 4.0, 1.0);

  return
     cos(noise_1 * snoise(vec2(st_m.x, st_m.x)) * 8.0 + 2.0 + u_mouse.x * .001)
   * cos(noise_2 * snoise(vec2(st_m.x, st_m.y)) * 8.0 + 2.0 + u_mouse.y * .001);
}

void main(){


  float aspect = u_resolution.y/u_resolution.x;
  vec2 st = (2.0 * gl_FragCoord.xy -u_resolution.xy)/ min(u_resolution.x, u_resolution.y);

  // st = rot(st, 0.01 * u_time * length(st));
  
  vec3 rgb = vec3(.0);

  // vec3 co = vec3(
  //   nco(st, .11, 1.10, 2.0)
  //   ,
  //   nco(st, .12, 1.0, 2.0)
  //   ,
  //   nco(st, .14, 1.0, 2.0)
  // );

  for(int i = 0; i < 3; i++) {
    rgb.r += nco(st, .11, float(i), .0 + float(i) * 3.0);
    rgb.g += nco(st, .12, float(i), .0 + float(i) * 3.0) * 0.8;
    rgb.b += nco(st, .14, float(i), .0 + float(i) * 3.0) * .8;
  }


  // co = noise_1 + noise_2;;

  fragColor = vec4(smoothstep(0.0, 1.0, rgb),  1.0);
}