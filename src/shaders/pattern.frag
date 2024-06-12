#version 300 es
precision highp float;
out vec4 fragColor;
uniform vec2 u_resolution;
uniform float u_time;

#define M_PI 3.1415926535897932384626433832795

float norm(float x) {
    return x > 1.0 ? 0.0 : clamp(x, 0.0, 1.0);
}
float saturate(float a) {
    return clamp(a, 0.0, 1.0);
}

vec2 skew(vec2 st,float deg){
  st.x=st.x+st.y*tan(deg*M_PI);
  return st;
}
vec2 rot(vec2 st, float deg) {
  return vec2(st.x * cos(deg) - st.y * sin(deg), st.x * sin(deg) + st.y * cos(deg));
}
float slice3(float x, float i) {
  float m = 3.0 ;
  return norm( i - mod(x + u_time, 1.0 ) * m );
}
void main(){
  vec2 pos = gl_FragCoord.xy / u_resolution.xy;
  vec2 st = (gl_FragCoord.xy-u_resolution.xy)/ min(u_resolution.x, u_resolution.y) ;

  st = rot(st, M_PI * 0.25);

  vec3[3] col3 = vec3[](
      vec3(1.0, 0.0, 0.0) * slice3(1.0 *pos.x, 1.0),
      vec3(0.0, 0.0, 1.0) * slice3(1.0 *pos.x, 2.0),
      vec3(0.0, 1.0, 0.0 * slice3(1.0 *pos.x, 3.0))
      );
  int ind = int(pos.x );
  vec3 col = mix(col3[ind], col3[ind + 1], fract(pos.x));
  fragColor = vec4(col, 1.0);

  float x = sin(60.0 * st.x - 3.0 * u_time) * cos(st.y * 60.0 + 3.0 * u_time);
  
  fragColor.rgb = vec3(
      pow(

      smoothstep(0.80, 0.8,slice3(x, 1.0)) +
      step(.15,slice3(x, 2.0)) +
      step(.85, slice3(x, 3.0))
      , .40
      )
  );

    // fragColor.rgb = vec3(pow(fragColor.r + fragColor.g + fragColor.b, 3.2));
}