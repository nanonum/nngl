#version 300 es
precision highp float;
out vec4 fragColor;
uniform float u_time;
uniform vec2 u_resolution;
uniform sampler2D u_texture_0; // ../../../public/n.png
uniform vec2 u_texture_0Resolution;
const float PI = 3.1415926;
#define SAMPLES_SIZE 4

uvec3 k = uvec3(0x456789abu, 0x6789ab45u, 0x89ab4567u);
uvec3 u = uvec3(1, 2, 3);
const uint UINT_MAX = 0xffffffffu;
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
vec2 rot(vec2 st,float t){
  mat2 rotate=mat2(cos(.5+t),sin(.5+t),-sin(.5+t),cos(.5+t));
  return st*rotate;
}

vec4 sd (in vec2 p, in float div) {
  // vec2 st = p * div;
  vec2 st = rot(fract(floor((p) * div) / div) - 0.5, u_time * .5 ) + 0.5;
  // vec2 f = fract(p * div);
  
  // vec2(p.x + sin(u_time * .8) * .05, p.y + cos(u_time * .8) * .05);
  // st = p;  
  float sigma = 0.0;
  vec3 totalX = vec3(0.0);
  vec3 totalY = vec3(0.0);
  vec3 samplesX[SAMPLES_SIZE];
  vec3 samplesY[SAMPLES_SIZE];
  for(int i = 0; i < SAMPLES_SIZE; i++) {
    vec2 pointoffset = (hash22( st + float(i) ) / div );
    samplesX[i] = texture(u_texture_0, vec2(st.x + pointoffset.x, st.y), 0.0).rgb;
    samplesY[i] = texture(u_texture_0, vec2(st.x, st.y + pointoffset.y), 0.0).rgb;
    totalX += samplesX[i];
    totalY += samplesY[i];
  }

  vec3 avrX = totalX / float(SAMPLES_SIZE);
  vec3 avrY = totalY / float(SAMPLES_SIZE);
  vec3 dps = vec3(0.0);

  vec3 sdX = vec3(0.0);
  vec3 sdY = vec3(0.0);
  for(int i = 0; i < SAMPLES_SIZE; i++) {
    sdX += (samplesX[i] - avrX) * (samplesX[i] - avrX);
    sdY += (samplesY[i] - avrY) * (samplesY[i] - avrY);
    dps += samplesX[i] - avrX * samplesY[i] - avrY;
  }

  sdX = sqrt(sdX);
  sdY = sqrt(sdY);
  // sigma /= float(SAMPLES_SIZE);
  // float sd = sqrt(sigma) ;




  return vec4(
    // vec3(texture(u_texture_0, st, 0.0).rgb),
    dps / float(SAMPLES_SIZE - 1) / (sdX * sdY),
    1.0
  );
}

vec2 centeredST() {
  float aspect = u_resolution.y/u_resolution.x;
  return (gl_FragCoord.xy)/ u_resolution.xy;
}

void main(){

  float aspect = u_resolution.y/u_resolution.x;
  vec2 st = gl_FragCoord.xy/u_resolution.xy;

  // vec4 texcel = vec4(.0, .0, .0, 1.0);
  // float div = 2.0;
  // vec2 divst = (floor(st * div) ) / div;
  // int loop = 8;
  // for(int i = 0; i < loop; i++) {
  //   vec4 img = sd(divst, div);
  //   texcel.rgb = img.rgb;
    
  //   // if( img.a <= .0) {
  //   //   break;
  //   // }
  //   div *= 2.0;
  //   divst = (floor(st * div)) / div;
  // }

  vec4 img = sd(st, 32.0);

  // fragColor = vec4(vec3(0.0), 1.0);
  fragColor = img;
}