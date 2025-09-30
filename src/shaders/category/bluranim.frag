#version 300 es
precision highp float;
out vec4 fragColor;
uniform float u_time;
uniform vec2 u_resolution;
uniform sampler2D u_texture_0; // ../../../public/txt.png
uniform vec2 u_texture_0Resolution;
const float PI = 3.1415926;

vec2 rot(vec2 uv,float a){
    return vec2(uv.x*cos(a)-uv.y*sin(a),uv.y*cos(a)+uv.x*sin(a));
}

vec3 rot3(vec3 uv,float a){
	return vec3(uv.x*cos(a)-uv.y*sin(a) * tan(a),uv.y*cos(a)+uv.x*sin(a),uv.y*cos(a)+uv.x*sin(a));
}


float draw_sin( vec2 st, float freq, float phase, float weight, float amp, float modulator){
  return abs(weight/st.y);
}

float tri(float x) {
  return abs(x - .5) * 2.0;
}

// 2D Random
float random (in vec2 st) {
  // return sqrt(1.0 - pow(2.0 * st.x - 1.0, 2.0)) * 0.5;
  // return sin(sin(st.x + t * 1.0)* cos(st.y + t * -4.0));
    // return sin(dot(st.xy, vec2(92. + u_time)) * 391.0);
    // return fract(sin(dot(st.xy, st.yx)));
    return fract(sin(dot(st.xy, vec2(0.01,0.049))) * 58.5453123 );
}

// float _sinWave(vec2 st, float freq, float phase, float weight, float amp, float modulator ){
//   float r = draw_sin(
//     st ,
//     freq,
//     fract(u_time * 0.1 + phase),
//     amp,
//     modulator
//   );
//   return abs(weight/r);
// }

float asin01(in float f) {
  return asin(2.0 * f - 1.0) / PI + 0.5;
}

float noise (in vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);

  float bias = .5;
  float a = random(i + vec2(-bias, -bias));
  float b = random(i + vec2(bias, -bias));
  float c = random(i + vec2(-bias, bias));
  float d = random(i + vec2(bias, bias));

  vec2 u = smoothstep(0.,1.,f);

  // return mix(mix(a, b, asin01(u[0])), mix(c, d, asin01(u[0])), asin01(u[1]));
  return mix(mix(a, b, u[0]), mix(c, d, u[0]), u[1]);
}

float getpart(float x, float n, float i) {
  float modi = mod(i, n);
  return 
    step(modi / n, x)     // left
    *
    (1.0 - step((modi + 1.0) / n, x));    //right
}

float getpartphasor(float x, float n, float i, float strength) {
  float phase = fract(x * n);
  float part = getpart(x, n, i);
  // return phase;
  // return  part;
  return pow(1.0 - tri(phase), strength) * part;
}
vec4 moz (in vec2 p) {
  float bit = 400.0;
  vec2 i = fract(floor(p * bit) / bit) ;
  vec2 f = fract(p * bit);

  float bias = .001 / bit / 2.0;
  float s = 2.0;
  vec4 a = texture(u_texture_0, i + vec2(- bias * s, -bias * s), 1.0);
  vec4 b = texture(u_texture_0, i + vec2(+ bias * s, -bias * s), 1.0);
  vec4 c = texture(u_texture_0, i + vec2(- bias * s, +bias * s), 1.0);
  vec4 d = texture(u_texture_0, i + vec2(+ bias * s, +bias * s), 1.0);
  // vec4 b = texture(u_texture_0,i + vec2(bias, -bias), 1.0);
  // vec4 c = texture(u_texture_0,i + vec2(-bias, bias), 0.0);
  // vec4 d = texture(u_texture_0,i + vec2(bias, bias), 0.0);

  // a = texture(u_texture_0, (i) + vec2(bias, 0.0), 0.0);
  // b = texture(u_texture_0, (i) + vec2(0.0, 0.0), 0.0);
  // c = texture(u_texture_0, (i) + vec2(0.0, bias), 0.0);
  // d = texture(u_texture_0, (i) + vec2(bias, bias), 0.0);
  // return a;
  vec2 u = smoothstep(0.,1.,f);

  //  u = f * f * (3.0 - (2.0) * f);
  // return c;

  vec4 rgb = mix(mix(a, b, u[0]), mix(c, d, u[0]), u[1]);

  f = rot(f, i.x + rgb.r * PI + u_time * 5.0 + cos( i.x * 214.0) + cos(i.y * 21.0)) ;

  rgb.rgb = step(0.52,vec3(sin(length(rgb.rgb) * PI * .50 * f.x * f.y) ));



  // return a;
  // return smin(mix(a, b, u[0]), mix(c, d, u[0]), u.x);
  // return min(max(a, b), max(c, d));
  return rgb;
}

vec2 centeredST() {
  float aspect = u_resolution.y/u_resolution.x;
  return (2.0 * gl_FragCoord.xy -u_resolution.xy)/ min(u_resolution.x, u_resolution.y) / aspect;
}
void main(){


  float aspect = u_resolution.y/u_resolution.x;
  vec2 st = (1.0 * gl_FragCoord.xy -u_resolution.xy)/ min(u_resolution.x, u_resolution.y);
  vec2 st2 = centeredST();

  // Use the moz function
  // n += step(.95,fract(moz(st) * 16.0)) * .02;

  // st = rot(st, PI + moz(abs(st * 1.24)) + u_time * .01);
  // st *= .50;
  // vec4 texcel = texture(u_texture_0, vec2(moz(st), moz(st)), 0.0);

  // st = rot(st, noise(abs(st * 2.)) + u_time * 0.11);
  vec4 texcel = moz(st);


  vec3 crt = vec3(
    getpartphasor(fract(st.y * .12 * u_resolution.x), 3.2, 0.0, .50) * getpartphasor(fract(st.x * 1.0), 1.0, 1.0, .50),
    getpartphasor(fract(st.y * .12 * u_resolution.x), 3.2, 1.0, .50) * getpartphasor(fract(st.x * 1.0), 1.0, 1.0, .50),
    getpartphasor(fract(st.y * .12 * u_resolution.x), 3.2, 2.0, .50) * getpartphasor(fract(st.x * 1.0), 1.0, 1.0, .50)
  );
  vec3 co = vec3(
// texcel.xyz
    smoothstep(0.0, .5, texcel.xyz)
  );

  fragColor = vec4(co,  1.0);
}