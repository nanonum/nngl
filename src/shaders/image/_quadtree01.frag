#version 300 es
precision highp float;
out vec4 fragColor;
uniform float u_time;
uniform vec2 u_resolution;
uniform sampler2D u_texture_0; // ../../../public/SDIM2391.jpg
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
  // return sqrt(1.0 - pow(2.0 * st.x - 1.0, 2.0)) * 0.5;
  // return sin(sin(st.x + t * 1.0)* cos(st.y + t * -4.0));
    // return sin(dot(st.xy, vec2(92. + u_time)) * 1.0);
    return fract(sin(dot(st.xy, st.yx)) * 322.90930);
    // return fract(sin(dot(st.xy, vec2(0.01,0.5))) * 58.5453123 + sin(u_time * 0.06 * st.x) * cos(u_time * 0.06 * st.y));
}

vec4 sd (in vec2 p, in float div) {

  vec2 i = p + hash22(p + u_time * .0000001) * .001;
  float bias = 1.0 / div ;
  vec4 textureA = texture(u_texture_0, i + vec2(0.0, 0.0), 0.0);
  vec4 textureB = texture(u_texture_0, i + vec2(bias, 0.0), 0.0);
  vec4 textureC = texture(u_texture_0, i + vec2(0.0, +bias), 0.0);
  vec4 textureD = texture(u_texture_0, i + vec2(bias, +bias), 0.0);
  float a = (textureA.r + textureA.g + textureA.b) / 3.0;
  float b = (textureB.r + textureB.g + textureB.b) / 3.0;
  float c = (textureC.r + textureC.g + textureC.b) / 3.0;
  float d = (textureD.r + textureD.g + textureD.b) / 3.0;
  // vec4 b = texture(u_texture_0,i + vec2(bias, 0.0), 0.0);
  // vec4 c = texture(u_texture_0,i + vec2(-bias, bias), 0.0);
  // vec4 d = texture(u_texture_0,i + vec2(bias, bias), 0.0);

  // vec4 test = texture(u_texture_0, f, 0.0);
  // b = texture(u_texture_0, (i) + vec2(0.0, 0.0), 0.0);
  // c = texture(u_texture_0, (i) + vec2(0.0, bias), 0.0);
  // d = texture(u_texture_0, (i) + vec2(bias, bias), 0.0);
  // return a;
  // vec2 u = smoothstep(0.,1.,f);

  // return c;

  float avr = a+b+c+d/4.0;

  float sig = (a-avr)*(a-avr)+(b-avr)*(b-avr)+(c-avr)*(c-avr)+(d-avr)*(d-avr) * .25;

  // sig += tri(fract(u_time * .1)) * .5;
  // sig += fract(u_time * .002);
  // return test.r;
  // return sig;

  return vec4(
    vec3(textureA.rgb),
    sig
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

float sd(vec4 img) {
  
  return 0.5;
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

  float div = 24.0;
  vec2 divst = st;
  
  
  // vec2 divst = floor(st * div) / div;
  // float img = sd(divst);

  for(int i = 0; i < 4; i++) {

    divst = floor(st * div) / div;
    vec4 img = sd(divst, div);


    texcel.rgb = img.rgb;
    if( img.a >= 3.0 ) {
      break;
    } else {
      div *= 3.0;
      // texcel += 1.0;
      // texcel += img;

      // texcel += texture(u_texture_0, st, 0.0);
    // texcel += img;
    }

  }

  vec3 co = vec3(

    divst.x
  );

  fragColor = vec4(co,  1.0);
  // fragColor.rgb = vec3(fract(divst.x * divst.y * div));
  fragColor.rgb = vec3((texcel));
}