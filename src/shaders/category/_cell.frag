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

float noise (in vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);

  float bias = .5;
  float a = length(i + vec2(-bias, -bias));
  float b = length(i + vec2(bias, -bias));
  float c = length(i + vec2(-bias, bias));
  float d = length(i + vec2(bias, bias));

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

  // Use the noise function
  // n += step(.95,fract(noise(st) * 16.0)) * .02;

  vec3 co = vec3(0.0);
  for(int i = 0; i < 42; i++) {
    float fi = float(i) * 0.1;
    vec2 temp = rot(st, noise((st * 3.5 + fi)));
    temp *= 80.12 + fi;
    co += vec3(
      sin(temp.x + u_time * fi) *
      cos(temp.y + u_time * fi) 
    );
  }

  // co = rot3(co, 32.42314);

  fragColor = vec4( (smoothstep(0.0, 6.0 ,rot3(co, .4 * co.z))),  1.0);
}