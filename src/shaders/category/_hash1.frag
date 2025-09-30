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
  return fract(abs((1.0 - length(st) * length(st)) ));
    // return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

uint k = 0x456789abu;
const uint UINT_MAX = 0xffffffffu;
uint uhash11(uint n){
    n ^= (n << 1);
    n ^= (n >> 1);
    n *= k;
    n ^= (n << 1);
    return n * k;
}
float hash11(float p){
    uint n = floatBitsToUint(p);
    return float(uhash11(n)) / float(UINT_MAX);
}
float noise (in vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);

  float hash = 1.0;
  float a = random(i);
  float b = random(i + vec2(hash, 0.0));
  float c = random(i + vec2(0.0, hash));
  float d = random(i + vec2(hash, hash));

  vec2 u = smoothstep(0.,1.,f);

return fract( clamp(mix(mix(a, b, u[0]), mix(c, d, u[0]), u[1]), 0.2, .70) * 4.);
  // u = vec2(sqrt(1.0 - u.x * u.x), sqrt(1.0 - u.y * u.y));

  // return smin(mix(a, b, u[0]), mix(c, d, u[0]), u.x);
  return mix(mix(a, b, u[0]), mix(c, d, u[0]), u[1]);
}

void main(){


  float aspect = u_resolution.y/u_resolution.x;
  vec2 st = (150.0 * gl_FragCoord.xy -u_resolution.xy)/ min(u_resolution.x, u_resolution.y);

  // Use the noise function
  // n += step(.95,fract(noise(st) * 16.0)) * .02;
  vec3 co = vec3(
    noise(st)
  );
  // co = noise_1 + noise_2;;

  fragColor = vec4(1.0 - step(0.75, co),  1.0);
}