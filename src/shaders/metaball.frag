#version 300 es

precision highp float;
out vec4 fragColor;
uniform float u_time;
uniform vec2 u_resolution;

const float PI = 3.1415926;
const float E = 2.71828182846;
float atan2(float y, float x){
    if (x == 0.0){
        return sign(y) * PI / 2.0;
    } else {
        return atan(y, x);
    }
    // or use "?:" as follows:
    // return x == 0.0 ? sign(y) * PI / 2.0 : atan(y, x);
}
vec2 xy2pol(vec2 xy){
    return vec2(atan2(xy.y, xy.x), length(xy));
}
vec2 pol2xy(vec2 pol){
    return pol.y * vec2(cos(pol.x), sin(pol.x));
}
float sigmoid(float val) {
  return 1.0 / (1.0 + pow(E, -val));
}
vec3 tex(vec2 st){
    vec3[3] col3 = vec3[](
        vec3(255.0 / 255.0, 140.0 / 255.0, 80.0 / 255.0),
        vec3(80.0 / 255.0, 190.0 / 255.0, 255.0 / 255.0),
        vec3(140.0 / 255.0, 80.0 / 255.0, 255.0 / 255.0)
    );
    st.s = st.s / PI + 1.0;
    int ind = int(st.s) ;
    vec3 col = mix(col3[ind % 2], col3[(ind + 1) % 2], fract(st.s));
    return mix(col3[2], col, st.t);
}

vec2 skew(vec2 st, float deg) {
  st.x = st.x + st.y * tan(deg * PI);
  return st;
}
vec2 rot(vec2 st, float deg) {
  return vec2(st.x * cos(deg) - st.y * sin(deg), st.x * sin(deg) + st.y * cos(deg));
}
vec2 move(vec2 st, float val, float r) {
  st.x += sin(val) * r;
  st.y += cos(val) * r;
  return st;

}
// float ball(vec2 pos, float size, float t) {
//   return smoothstep(size + 0.01, size , length( move(pos * 2.0 - 1.0 , t, t ) ));
// }
float smin(float a, float b, float k){
  float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
  return mix(b, a, h) - k * h * (1.0 - h); 
}
void main(){

    fragColor.a = 1.0;
    // vec2 pos = gl_FragCoord.xy / u_resolution.xy;
    // pos aspected
    float aspect = u_resolution.y/u_resolution.x;
    float offset = (((u_resolution.x - u_resolution.y ) /u_resolution.x)  * .5);
    float w = gl_FragCoord.x/u_resolution.x;
    float h = gl_FragCoord.y/u_resolution.y * aspect + offset;
    vec2 pos = vec2( w, h);
    
    
    // pos.x /= aspect;
    // pos = 2.0 * pos.xy - vec2(1.0);
    // pos = skew(pos, u_time  * .4);
    // pos = rot(pos, u_time * 5.0);
    // pos = vec2(pos.x + pos.y * tan(sin(u_time ) * .5), pos.y);
    // pos = xy2pol(pos);    
    // vec2 coord = gl_FragCoord.xy / u_resolution;

    // vec4 texcel_lead = texture2D(u_texture_0, pos, 0.0);
    // vec4 noise = texture(u_texture_1, fract(coord * 3.0));

    // noise = noise * .2;

    float balls = 0.0;

    for (int i = 0; i < 128; ++i) {
        float fi = float(i) + 1.0;
        vec2 centeredST = pos * 2.0 - 1.0;
        float ball = smoothstep(
            .2+ 0.1,
            .01 ,
            length(

              // vec2 move(vec2 st, float val, float r) {
              move(
                rot(centeredST * .40 + fi * .04, fi * 1.1),
                u_time + fi * 13.015 + (PI / fi / 2.0),
                sin(u_time * fi * 1.02 ) * .4+ fi * .0015
              )
            )
        );
        balls += ball + smin(ball, balls, .505) ;
        balls = balls;
        // balls += ball;
        // balls += ball(pos, .021, u_time + fi * .832 * sigmoid(sin(u_time * 2.0)) );
      // balls = smin(balls, ball(pos, .52, u_time + float(i) ), 3.0);
    }

    fragColor.rgb = vec3( balls);
    // fragColor.rgb = vec3( pos.x);
    // fragColor.rgb = vec3( ball(pos, .12, u_time) ) ;
    // fragColor = vec4(vec3( smoothstep(0.5, .51 , pos.y + (sin(pos.x * 1.0 + sin(u_time * 1.0) ) * .05)  ) ), 1.0);
    // fragColor.rgb = vec3( step(fract(pos.y * 10.0), .5) * step(fract(pos.x * 10.0), .5));
}