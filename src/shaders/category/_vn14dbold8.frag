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

float expcirc05(in float f) {
  return sqrt(1.0 - pow(2.0 * f - 1.0, 2.0)) * 0.5;
}
float expcirc11(in float f) {
  return sqrt(1.0 - f * f);
}

float asin01(in float f) {
  return asin(2.0 * f - 1.0) / PI + 0.5;
}

// 2D Random
float random (in vec2 st) {
  // return sqrt(1.0 - pow(2.0 * st.x - 1.0, 2.0)) * 0.5;
  // return sin(sin(st.x + t * 1.0)* cos(st.y + t * -4.0));
    // return sin(dot(st.xy, vec2(92. + u_time)) * 391.0);
    // return fract(sin(dot(st.xy, st.yx)) * .90930);
    return fract(sin(dot(st.xy, vec2(0.01,0.049))) * 58.5453123 + sin(u_time * 0.06 * st.x) * cos(u_time * 0.06 * st.y));
}
float noise (in vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);

  // i = rot(i, u_time);
  // f = rot(f,u_time);

  float biasX = 1.0; //sqrt(1.0 - pow(2.0 * f.x - 1.0, 2.0)) * 0.5;
  float biasY = 1.0; //sqrt(1.0 - pow(2.0 * f.y - 1.0, 2.0)) * 0.5;
  
  float a = random(i + vec2(0.0, 0.0));
  float b = random(i + vec2(biasX, 0.0));
  float c = random(i + vec2(0.0, biasY));
  float d = random(i + vec2(biasX, biasY));

  vec2 u = smoothstep(0.,1.,f);


  // return smin(mix(a, b, u[0]), mix(c, d, u[0]), u.x);

  return mix(mix(a, b, asin01(u[0])), mix(c, d, asin01(u[0])), asin01(u[1]));
  // return mix(mix(a, b, asin(2.0 * u[0] - 1.0) / PI + 0.5), mix(c, d, asin(2.0 * u[0] - 1.0) / PI + 0.5), asin(2.0 * u[1] - 1.0) / PI + 0.5);
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

  // st = rot(st, fract(1.0 * (noise(st + u_time * 0.2))));
  co += vec3(
    fract((noise(st * 11.0) * 5.490) * 1.50)
  );

  fragColor = vec4(step(0.86, co),  1.0);
}