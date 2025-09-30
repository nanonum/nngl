#version 300 es
precision highp float;
out vec4 fragColor;
uniform float u_time;
uniform vec2 u_resolution;
uniform sampler2D u_texture_0; // ../../../public/SDIM0038.jpg
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

// 2D Random
float random (in vec2 st) {
  // return sqrt(1.0 - pow(2.0 * st.x - 1.0, 2.0)) * 0.5;
  // return sin(sin(st.x + t * 1.0)* cos(st.y + t * -4.0));
    // return sin(dot(st.xy, vec2(92. + u_time)) * 1.0);
    // return fract(sin(dot(st.xy, st.yx)) * 322.90930);
    return fract(sin(dot(st.xy, vec2(0.01,0.5))) * 58.5453123 + sin(u_time * 0.06 * st.x) * cos(u_time * 0.06 * st.y));
}

vec4 noise (in vec2 p) {
  vec2 i = fract(floor(p * 80.0) / 80.0) ;
  vec2 f = fract(p * 80.0);

  float bias = 10.0 / mod(u_texture_0Resolution.x,  u_texture_0Resolution.y);
  vec4 a = texture(u_texture_0, i + vec2(- bias, -bias), 0.0);
  vec4 b = texture(u_texture_0, i + vec2(+ bias, -bias), 0.0);
  vec4 c = texture(u_texture_0, i + vec2(- bias, +bias), 0.0);
  vec4 d = texture(u_texture_0, i + vec2(+ bias, +bias), 0.0);
  // vec4 b = texture(u_texture_0,i + vec2(bias, -bias), 0.0);
  // vec4 c = texture(u_texture_0,i + vec2(-bias, bias), 0.0);
  // vec4 d = texture(u_texture_0,i + vec2(bias, bias), 0.0);

  // a = texture(u_texture_0, (i) + vec2(bias, 0.0), 0.0);
  // b = texture(u_texture_0, (i) + vec2(0.0, 0.0), 0.0);
  // c = texture(u_texture_0, (i) + vec2(0.0, bias), 0.0);
  // d = texture(u_texture_0, (i) + vec2(bias, bias), 0.0);
  // return a;
  vec2 u = smoothstep(0.,1.,f);

  // return c;


  // return a;
  // return smin(mix(a, b, u[0]), mix(c, d, u[0]), u.x);
  vec4 rgba = mix(mix(a, b, u[0]), mix(c, d, u[0]), u[1]);
  return rgba * cos(length(rgba.xyz) * p.x * PI * 1.0) * cos(length(rgba.xyz * p.y * PI * 1.0));
  return mix(mix(a, b, u[0]), mix(c, d, u[0]), u[1]);
}

vec2 centeredST() {
  float aspect = u_resolution.y/u_resolution.x;
  return (gl_FragCoord.xy -u_resolution.xy)/ min(u_resolution.x, u_resolution.y) / aspect;
}
void main(){


  float aspect = u_resolution.y/u_resolution.x;
  vec2 st = centeredST();
  vec2 st2 = centeredST();

  // Use the noise function
  // n += step(.95,fract(noise(st) * 16.0)) * .02;

  // st *= 1.120;
  // vec4 texcel = texture(u_texture_0, vec2(noise(st), noise(st)), 0.0);

  vec4 texcel = noise(st * 1.0);


  vec3 crt = vec3(
    getpartphasor(fract(st.y * .5 * u_resolution.x), 2.0, 0.0, .10) * getpartphasor(fract(st.x * 1.0), 1.0, 1.0, .40),
    getpartphasor(fract(st.y * .5 * u_resolution.x), 2.0, 1.0, .10) * getpartphasor(fract(st.x * 1.0), 1.0, 1.0, .40),
    getpartphasor(fract(st.y * .5 * u_resolution.x), 2.0, 2.0, .10) * getpartphasor(fract(st.x * 1.0), 1.0, 1.0, .40)
  );
  vec3 co = vec3(

    texcel.xyz //;* crt * 4.0
    
  );

  fragColor = vec4(co,  1.0);
}