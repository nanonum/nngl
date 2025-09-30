#version 300 es
precision highp float;
out vec4 fragColor;
uniform float u_time;
uniform vec2 u_resolution;
uniform sampler2D u_texture_0; // ../../../public/bold.png?
uniform vec2 u_texture_0Resolution;
const float PI = 3.1415926;
#define SAMPLES_SIZE 20

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
vec4 sd (in vec2 p, in float div) {
  vec2 st = vec2(p.x + sin(u_time * .8) * .05, p.y + cos(u_time * .8) * .05);
  // st = p;  
  float sigma = 0.0;
  float total = 0.0;
  float samples[SAMPLES_SIZE];
  for(int i = 0; i < SAMPLES_SIZE; i++) {
    vec2 pointoffset = (hash22( st + float(i) + u_time * .001) / div );
    vec4 randomsample = texture(u_texture_0, st + pointoffset, 0.0);
    samples[i] = (length(randomsample.rgb));
    total += samples[i];
  }

  float avr = total / float(SAMPLES_SIZE);

  for(int i = 0; i < SAMPLES_SIZE; i++) {
    sigma += pow(samples[i] - avr, 2.0);
  }
  sigma /= float(SAMPLES_SIZE);

  float sd = sqrt(sigma) ;
  return vec4(
    vec3(texture(u_texture_0, st, 0.0).rgb),
    sd
  );
}

vec2 centeredST() {
  float aspect = u_resolution.y/u_resolution.x;
  return (gl_FragCoord.xy)/ u_resolution.xy;
}

void main(){

  float aspect = u_resolution.y/u_resolution.x;
  vec2 st = gl_FragCoord.xy/u_resolution.xy;

  vec4 texcel = vec4(.0, .0, .0, 1.0);
  float div = 2.0;
  vec2 divst = (floor(st * div) ) / div;
  int loop = 10;
  for(int i = 0; i < loop; i++) {
    vec4 img = sd(divst, div);
    texcel.rgb = img.rgb;
    
    if( img.a <= .0) {
      break;
    }
    div *= 2.0;
    divst = (floor(st * div)) / div;
  }

  fragColor = vec4(vec3(0.0), 1.0);
  fragColor.rgb = texcel.rgb + vec3(
    step(0.999, fract(divst.x - st.x)) + 
    step(0.999, fract(divst.y - st.y))
  ) ;
}