#version 300 es
precision highp float;
out vec4 fragColor;
uniform float u_time;
uniform vec2 u_resolution;
uniform sampler2D u_texture_0; // ../../../public/num.png
uniform vec2 u_texture_1Resolution;
const float PI = 3.1415926;

vec2 rot(vec2 uv,float a){
    return vec2(uv.x*cos(a)-uv.y*sin(a),uv.y*cos(a)+uv.x*sin(a));
}

vec3 rot3(vec3 uv,float a){
	return vec3(uv.x*cos(a)-uv.y*sin(a) * tan(a),uv.y*cos(a)+uv.x*sin(a),uv.y*cos(a)+uv.x*sin(a));
}

// 2D Random
float random (in vec2 st) {
  // return sqrt(1.0 - pow(2.0 * st.x - 1.0, 2.0)) * 0.5;
  // return sin(sin(st.x + t * 1.0)* cos(st.y + t * -4.0));
    // return sin(dot(st.xy, vec2(92. + u_time)) * 1.0);
    // return fract(sin(dot(st.xy, st.yx)) * 322.90930);
    return fract(sin(dot(st.xy, vec2(0.01,0.5))) * 58.5453123 + sin(u_time * 0.06 * st.x) * cos(u_time * 0.06 * st.y));
}

float noise (in vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);

  float bias = .5;
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
  return (2.0 * gl_FragCoord.xy -u_resolution.xy)/ min(u_resolution.x, u_resolution.y) / aspect;
}
void main(){


  float aspect = u_resolution.y/u_resolution.x;
  vec2 st = centeredST();
  vec2 st2 = centeredST();

  // Use the noise function
  // n += step(.95,fract(noise(st) * 16.0)) * .02;

  st = rot(st, PI + noise(abs(st * 1.24)) + u_time * .01);
  st *= 1.120;
  float posx = fract(pow(cos(st.x),15.5)) ;
  float posy = fract(pow(cos(st.y),15.5)) ;

  vec4 texcel = texture(u_texture_0,fract( u_time * .1 + fract(2.0 * vec2(posx, posy))), 0.0);
  vec3 co = vec3(

    texcel.xyz
    
  );

  fragColor = vec4(co,  1.0);
}