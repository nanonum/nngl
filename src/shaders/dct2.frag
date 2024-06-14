#version 300 es
precision highp float;
out vec4 fragColor;
uniform float u_time;
uniform vec2 u_mouse;
uniform vec2 u_resolution;
uniform sampler2D u_texture_1; // ../swcp/texture.png
uniform vec2 u_texture_1Resolution;
const float PI = 3.1415926;

vec2 skew(vec2 st,float deg){
  st.x=st.x+st.y*tan(deg*PI);
  return st;
}
#include "../../node_modules/glsl-noise/simplex/2d.glsl"

float nco(vec2 st, float seed, float freq1, float freq2) {

  // st = abs(st);
  vec2 st_f = vec2(
    floor(st.x * freq1 + sin(st.x * 4.0) * 20.0 + u_time ),
    floor(st.y * freq1 + cos(st.y * 4.0) * 20.0 + u_time )
  );

  // st_f.y += u_time * 0.001;
  float noise_1 = snoise(st_f + u_time * 1.01 + seed + sin(u_time * .1) * 0.3) * 
  
  snoise(st_f * 3.0 + u_time * .04 + seed + sin(u_time * 1.3) * 1.3);
  // noise_1 = (noise_1 * 7.0) / 7.0;
  
  // vec2 st_f2 = floor(st * .10);
  vec2 st_f2 = vec2(floor(st.x * freq2), floor(st.y * freq2));
  float noise_2 = snoise(st_f2 + u_time * .01 + seed + sin(u_time * .3) * 0.1);


  vec2 st_m = mod(st*freq1, 3.10 );
  st_m.y += u_time * -0.3;

  // st_m = skew(st_m, st_f.x );

  // return (noise_1);

  return
     cos(noise_1 * snoise(vec2(st_m.x, st_m.x)) * 7.0 + 2.0)
   * cos(noise_2 * snoise(vec2(st_m.x, st_m.y)) * 7.0 + 2.0);
}

void main(){


  float aspect = u_resolution.y/u_resolution.x;
  vec2 st = ( gl_FragCoord.xy)/ min(u_resolution.x, u_resolution.y);
  //  st = (2.0 * gl_FragCoord.xy -u_resolution.xy)/ min(u_resolution.x, u_resolution.y);

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
    rgb.r += nco(st, .11, 1.0 + float(i), 8.0 + float(i) * 2.0);
    rgb.g += nco(st, .13, 1.0 + float(i), 8.0 + float(i) * 2.0);
    rgb.b += nco(st, .14, 1.0 + float(i), 8.0 + float(i) * 2.0);
  }

  // rgb = smoothstep(.0 ,.40, rgb);

  // rgb.r=step(1.-rgb.r,.81);
  // rgb.g=step(1.-rgb.r,.81);
  // rgb.b=step(1.-rgb.r,.81);



  // co = noise_1 + noise_2;;
  
  // rgb = vec3(nco(st, .11, 4.0, .0 + 3.0));

  fragColor = vec4(rgb,  1.0);
}