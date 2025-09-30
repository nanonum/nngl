#version 300 es
precision highp float;
out vec4 fragColor;
uniform float u_time;
uniform vec2 u_resolution;
uniform sampler2D u_texture_0; // ../../../public/SDIM3328.jpg
uniform vec2 u_texture_0Resolution;
const float PI = 3.1415926;
#define SAMPLES_SIZE 5

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

#include "../../../node_modules/glsl-noise/simplex/2d.glsl"

uvec3 k = uvec3(0x456789abu, 0x6789ab45u, 0x89ab4567u);
uvec3 u = uvec3(1, 2, 3);
const uint UINT_MAX = 0xffffffffu;
uint uhash11(uint n){
    n ^= (n << u.x);
    n ^= (n >> u.x);
    n *= k.x;
    n ^= (n << u.x);
    return n * k.x;
}
uvec2 uhash22(uvec2 n){
    n ^= (n.yx << u.xy);
    n ^= (n.yx >> u.xy);
    n *= k.xy;
    n ^= (n.yx << u.xy);
    return n * k.xy;
}
vec2 hash22(vec2 p){
    uvec2 n = floatBitsToUint(p);
    return vec2(uhash22(n)) / vec2(UINT_MAX);
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
  // return sin(sin(st.x + t * 1.0)* cos(st.y + t * -4.0));
    return fract((abs(1.0 - length(st) * length(st)) ));
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

vec4 sd (in vec2 p, in float div) {
  vec2 divst = (floor(p * div) ) / div;
  // p.y *= -2.;
  // p.x += u_time * .03;
  // p.y += u_time * .03;
  // p.x *= (cos(p.x * PI * 2.0) * cos(p.x * PI * 2.0));
  // p.y *= (cos(p.y * PI * 2.0) * cos(p.y * PI * 2.0));
  vec2 st = divst;
  // vec4 pointbuffer = vec4(0.0, 0.0, 0.0, 1.0);
  // vec2 index = p + (hash22(p + u_time * .0000001) * .001);
  vec4 textureA = texture(u_texture_0, st, 0.0);
  // vec4 textureB = texture(u_texture_0, index + vec2(bias, 0.0), 0.0);
  // vec4 textureC = texture(u_texture_0, index + vec2(0.0, +bias), 0.0);
  // vec4 textureD = texture(u_texture_0, index + vec2(bias, +bias), 0.0);
  // float a = (textureA.r * textureA.g * textureA.b) / 1.0;
  // float b = (textureB.r * textureB.g * textureB.b) / 1.0;
  // float c = (textureC.r * textureC.g * textureC.b) / 1.0;
  // float d = (textureD.r * textureD.g * textureD.b) / 1.0;

  float sigma = 0.0;
  float total = 0.0;
  

  float samples[SAMPLES_SIZE];
  float size = 1.0;
  for(int i = 0; i < SAMPLES_SIZE - 1; i++) {
    // randomsample += texture(u_texture_0, st + fract((random(st.xy * float(i)) + fract(u_time * 0.02)) / div), 0.0);

    vec2 pointoffset = vec2(
      floor(float(i) * 0.5) / div * size,
      float(i % 2) / div * size
    );
    vec4 randomsample = texture(u_texture_0, st + pointoffset, 0.0);

    // pointbuffer.rg += pointoffset;
    
    samples[i] = (length(randomsample.rgb));
    total += samples[i];
  }

  //addd center
  samples[4] = length(texture(u_texture_0, st + vec2(div * 0.5), 0.0).rgb);
  total += samples[4];



  float avr = total / float(SAMPLES_SIZE);

  for(int i = 0; i < SAMPLES_SIZE; i++) {
    // float diff = (samples[i] - avr);
    sigma += pow(samples[i] - avr, 2.0);
  }
  sigma /= float(SAMPLES_SIZE);

  float sd = sqrt(sigma) ;

  st.y = fract(st.y + pow(sd, .4) * u_time *.1);
  return vec4(
    vec3(texture(u_texture_0, st + p/div, 0.0).rgb),
    // vec3(sd),
    sd
  );
  // return sig > 0.5 ? fract(cos(2.0 * PI * texture(u_texture_0, p, 0.0).r) * cos(2.0 * PI * texture(u_texture_0, p, 0.0).g) * cos(2.0 * PI * texture(u_texture_0, p, 0.0).b)) : sig;


  // return a;
  // return smin(mix(a, b, u[0]), mix(c, d, u[0]), u.x);
  // return mix(mix(a, b, u[0]), mix(c, d, u[0]), u[1]);
}

vec2 centeredST() {
  float aspect = u_resolution.y/u_resolution.x;
  return (gl_FragCoord.xy)/ u_resolution.xy;
}

void main(){


  float aspect = u_resolution.y/u_resolution.x;
  vec2 st = gl_FragCoord.xy/u_resolution.xy;

  // Use the noise function
  // n += step(.95,fract(noise(st) * 16.0)) * .02;

  // st = rot(st, PI + noise(abs(st * 1.24)) + u_time * .01);
  // st *= 1.120;
  // vec4 texcel = texture(u_texture_0, vec2(noise(st), noise(st)), 0.0);

  vec4 texcel = vec4(.0, .0, .0, 1.0);

  float div = 2.0;
  
  
  // vec2 divst = floor(st * div) / div;
  // float img = sd(divst);
  int loop = 24;
  for(int i = 0; i < loop; i++) {

    vec4 img = sd(st, div);


    if( img.a <= .0) {
      break;
    }

    div *=  2.0;
    texcel.rgb = img.rgb;
  }


  fragColor = vec4(0.0, 0.0, 0.0, 1.0);
  // fragColor.rgb = vec3(fract(divst.x * divst.y * div));
  // fragColor.rgb = vec3(
  //   step(0.999, fract(divst.x - st.x)) + 
  //   step(0.999, fract(divst.y - st.y))
  // ) * .2 + fract(texcel.rgb * 2.0);

  // fragColor.rgb = vec3(fract(testA));
  fragColor.rgb = texcel.rgb;
  // fragColor.rgb = vec3((texcel - (dFdx(divst.x) + dFdy(divst.y))));
}