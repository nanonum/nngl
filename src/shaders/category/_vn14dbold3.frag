#version 300 es
precision highp float;
out vec4 fragColor;
uniform float u_time;
uniform vec2 u_resolution;
const float PI = 3.1415926;

vec2 rot(vec2 uv,float a){
    return vec2(uv.x*cos(a)-uv.y*sin(a),uv.y*cos(a)+uv.x*sin(a));
}

vec3 rot3(vec3 uv,float a){
	return vec3(uv.x*cos(a)-uv.y*sin(a) * tan(a),uv.y*cos(a)+uv.x*sin(a),uv.y*cos(a)+uv.x*sin(a));
}
#include "../../../node_modules/glsl-noise/simplex/2d.glsl"

// 2D Random
float random (in vec2 st) {
  // return sin(sin(st.x + t * 1.0)* cos(st.y + t * -4.0));
    return fract((abs(1.0 - length(st) * length(st)) ));
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

float noise (in vec2 p, in float v) {
  vec2 i = floor(p);
  vec2 f = fract(p);

  i = rot(i, u_time);
  // f = rot(f,u_time);

  float bias = .5 * v;
  float pw = .50 * v;
  float a = mod(length(i + vec2(-bias, -bias)), pw);
  float b = mod(length(i + vec2(bias, -bias)), pw);
  float c = mod(length(i + vec2(-bias, bias)), pw);
  float d = mod(length(i + vec2(bias, bias)), pw);

  vec2 u = smoothstep(0.,1.,f);


  // return smin(mix(a, b, u[0]), mix(c, d, u[0]), u.x);
  return mix(mix(a, b, u[0]), mix(c, d, u[0]), u[1]);
}

vec2 centeredST() {
  float aspect = u_resolution.y/u_resolution.x;
  return (2.0 * gl_FragCoord.xy -u_resolution.xy)/ min(u_resolution.x, u_resolution.y) / aspect;
}
void main(){


  float aspect = u_resolution.y/u_resolution.x;
  vec2 st = centeredST();
  vec2 st2 = centeredST();

  // Use the noise function
  // n += step(.95,fract(noise(st) * 16.0)) * .02;

  // st = rot(st, noise(abs(st * 32.1)));
  vec3 co = vec3(0.0);
  for(int i =0; i < 1; i++) {
    float fi = float(i) * 1.0 + 12.0;

    vec2 sti = st * 2.0 * fi + 250.0;
    sti = rot(sti, fi * PI);
    co += vec3(

      // pow(cos(st.x + u_time * 20.0), .18 + length(st2) * 2.0) 
      step(0.99, sin(noise((sti * 1.0 * .202), fi)))
      // +
      // fract(sin(noise((sti  * 2.0 * .041))))
      // +
      // fract(sin(noise((sti * .041))))
      
    );
  }

  fragColor = vec4(co,  1.0);
}