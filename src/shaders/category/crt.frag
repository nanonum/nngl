#version 300 es
precision highp float;
out vec4 fragColor;
uniform float u_time;
uniform vec2 u_resolution;
const float PI = 3.1415926;

vec2 rot(vec2 uv,float a){
    return vec2(uv.x*cos(a)-uv.y*sin(a),uv.y*cos(a)+uv.x*sin(a));
}
float sin_plus(float r) {
  return (sin(r) + 1.0) * 0.5;
}
float getpart(float x, float n, float i) {
  float modi = mod(i, n);
  return 
    step(modi / n, x)     // left
    *
    (1.0 - step((modi + 1.0) / n, x));    //right
}

float tri(float x) {
  return abs(x - .5) * 2.0;
}

float getpartphasor(float x, float n, float i, float strength) {
  float phase = fract(x * n);
  float part = getpart(x, n, i);
  // return phase;
  // return  part;
  return pow(1.0 - tri(phase), strength) * part;
}

vec3 rot3(vec3 uv,float a){
	return vec3(uv.x*cos(a)-uv.y*sin(a) * tan(a),uv.y*cos(a)+uv.x*sin(a),uv.y*cos(a)+uv.x*sin(a));
}
float smin(float a, float b, float k){
  float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
  return mix(b, a, h) - k * h * (1.0 - h); 
}
#include "../../../node_modules/glsl-noise/simplex/2d.glsl"

// 2D Random
float random (in vec2 st) {
  // return sin(sin(st.x + t * 1.0)* cos(st.y + t * -4.0));
    float a = fract((cos(st.x * PI * 0.5) + 3.0) * (sin(st.y * PI * 0.5) + 3.0) + (u_time * 0.05) * 4.0);

    float b = mod((cos(st.x * PI * 0.5) + 3.0) * (sin(st.y * PI * 0.5) + 3.0) + (u_time * 0.05) * 4.0, PI);

    // b *= 0.0;


    return mix(a, b, step(0.5, fract(u_time * .10)));
    // return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

float noise (in vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);

  float a = random(i);
  float b = random(i + vec2(1.0, 0.0) + PI);
  float c = random(i + vec2(0.0, 1.0) + PI);
  float d = random(i + vec2(1.0, 1.0) + PI);

  vec2 u = smoothstep(0.,1.,f);

  u = vec2(pow(u.x, 1.0), pow(u.y, 1.0));

  // return smin(mix(a, b, u[0]), mix(c, d, u[0]), u.x);
  return mix(mix(a, b, u[0]), mix(c, d, u[0]), u[1]);
}

void main(){


  float aspect = u_resolution.y/u_resolution.x;

  vec2 st = ((gl_FragCoord.xy) -u_resolution.xy)/ min(u_resolution.x, u_resolution.y);
  vec2 uv = st * 14.0;
  st *= 1.5;
  st.y += u_time * -0.01;
  st = rot(st,  PI  * .75);


  // Use the noise function
  // n += step(.95,fract(noise(st) * 16.0)) * .02;
  vec3 co = vec3(
    (noise(st * 12.0) * .852),
    .1,
    smin(step(.2,fract(noise(st * 12.0) * 4.0)), smoothstep(0.2, 1.0,(noise(st * 12.0 * 4.14) * 1.0)) , 2.8)
  );
  // co = noise_1 + noise_2;;

  co = vec3(pow(mix(co.x, co.y, co.z * 4.0), 14.0)) ;

  co = rot3(co, 2.2);

   vec3 crt = vec3(
      co.r * getpartphasor(fract(uv.y * 8.0), 4.0, 0.0, .40) * getpartphasor(fract(uv.x * 4.10), .10, fract(u_time* 0.05) + 4.11, .4),
      co.g * getpartphasor(fract(uv.y * 8.0), 4.0, 1.0, .40) * getpartphasor(fract(uv.x * 4.10), .10, fract(u_time* 0.05) + 4.11, .4),
      co.b * getpartphasor(fract(uv.y * 8.0), 4.0, 2.0, .40) * getpartphasor(fract(uv.x * 4.10), .10, fract(u_time* 0.05) + 4.11, .4)
    );

  // co = smoothstep(1.0, .0001, clamp(co, 0.0, 1.0));

  fragColor = vec4(crt,  1.0);
}