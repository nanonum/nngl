#version 300 es
precision highp float;
precision highp int;
out vec4 fragColor;
uniform sampler2D u_texture_0; // ../../../public/txt.png
uniform float u_time;
uniform vec2 u_resolution;
const float PI = 3.14159265359;
float circle(vec2 p, vec2 c, float r){
  float d = 0.5;
  return pow(dot(p - c, p - c), d) - r;
}
vec2 rot(vec2 st, float deg) {
  return vec2(st.x * cos(deg) - st.y * sin(deg), st.x * sin(deg) + st.y * cos(deg));
}
vec3 contour(float v, float interval){
    return 
    mod(v, interval) < 0.04 ? vec3(1.0):
    mix(vec3(0, 0, 1), vec3(1, 0, 0), atan(v) / PI + 0.5);
}
float contourf(float v, float interval){
    return 
    mod(v, interval) < 0.5 ? 1.0: 0.0 ;
}
void main(){
    vec2 pos = (2.0 * gl_FragCoord.xy -u_resolution.xy)/ min(u_resolution.x, u_resolution.y);
  float aspect = u_resolution.y/u_resolution.x;
  vec2 st = (1.0 * gl_FragCoord.xy -u_resolution.xy)/ min(u_resolution.x, u_resolution.y);
    float interval = 0.2;
    fragColor.rgb = vec3(contour(circle(pos, vec2(0.0), 1.0), interval));


    fragColor.a = 1.0;


    vec4 texcel = texture(u_texture_0, vec2(
       (circle(st * 1.50, vec2(-1.10), 0.10 + sin(u_time)) * 1.51),
       (circle(st * 1.50, vec2(-1.0), 0.0) * 1.51)
    ), 0.0);

    // st.y += .01;
    // vec4 texcel2 = texture(u_texture_0, vec2(
    //   st.x + contourf(1.0 - circle(st * 1.0, vec2(0.0), 1.0) * 1.2, interval),
    //   st.y + contourf(1.0 - circle(st * 1.0, vec2(0.0), 1.0) * 1.2, interval)
    // ), 0.0);
    fragColor = texcel ;

    // fragColor.r = fract(circle(pos * 1.0, vec2(0.0), 1.0) * 4.0);
// contour(circle(pos, vec2(0.0), 1.0), interval)
}
