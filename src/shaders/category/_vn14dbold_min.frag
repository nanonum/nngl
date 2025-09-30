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

float noise (in vec2 p, in float bias) {
  vec2 i = floor(p);
  vec2 f = fract(p);

  // float bias = .8;
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
  return (gl_FragCoord.xy -u_resolution.xy)/ min(u_resolution.x, u_resolution.y) / aspect;
}
void main(){


  float aspect = u_resolution.y/u_resolution.x;
  vec2 st = centeredST();

  // Use the noise function
  // n += step(.95,fract(noise(st) * 16.0)) * .02;

  st = rot(st, noise((st * .40), .5));
  st *=280.12;
  vec3 co = vec3(

    pow(sin(st.x + u_time * 50.0 + cos(u_time + 3.01) * 10.0 ), .5) *
    pow(cos(st.y + u_time * 50.0 + sin(u_time + 3.01) * 10.0),  .5) 
    
  );

    // getpartphasor(fract(st.x / weight * u_resolution.x), 3.0, 0.0, .50),
    // getpartphasor(fract(st.x / weight * u_resolution.x), 3.0, 1.0, .50),
    // getpartphasor(fract(st.x / weight * u_resolution.x), 3.0, 2.0, .50) * 1.20
  fragColor = vec4(step(.5,co),  1.0);
}