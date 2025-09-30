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

  i = rot(i, u_time);
  f = rot(f, u_time);

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
  vec2 st2 = centeredST();

  // Use the noise function
  vec3 co = vec3(0.0);

  for(int i = 10; i < 30; i++) {
    float fi = float(i);
    vec2 sti = rot(st, noise((st * 2.5 + fi * 42.114 + 3220.0 )));
    sti *= 2424.12;
    float x = (sti.x);
    float sq = sqrt(1.0 - x * x);
    co += vec3(
      isnan(sq) ? 0.0 : pow(sq, .2)
    );
  }


  fragColor = vec4(step(0.5,co),  1.0);
}