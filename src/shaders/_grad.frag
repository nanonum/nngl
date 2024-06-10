#version 300 es
precision highp float;
precision highp int;

// すりガラスエフェクト #glass

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

int channel;
vec3 color0 = vec3(255.0 / 255.0, 140.0 / 255.0, 80.0 / 255.0);
vec3 color1 = vec3(80.0 / 255.0, 190.0 / 255.0, 255.0 / 255.0);
vec3 color2 = vec3(140.0 / 255.0, 80.0 / 255.0, 255.0 / 255.0);

out vec4 fragColor;

float r(float x) {
    return (1.0 - (1.14705883 * x) + 0.460784315 * pow(x, 2.0));
}
float g(float x) {
    return (0.54901961 + (0.50980392 * x) - (0.31372549 * pow(x, 2.0)));
}
float b(float x) {
    return (0.31372549 + (1.02941177 * x) - (0.343137255 * pow(x, 2.0)));
}

vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }
float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187,  0.366025403784439, -0.577350269189626, 0.024390243902439);vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx); vec2 i1;i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz; x12.xy -= i1; i = mod289(i); vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);m = m*m ;    m = m*m ;vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;vec3 ox = floor(x + 0.5); vec3 a0 = x - ox; m *= 1.9284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    vec3 g; g.x  = a0.x  * x0.x  + h.x  * x0.y; g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
}

// 9_3_smoothMin(mix a,b / k = thresh)
float smin(float a, float b, float k){
    float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
return mix(b, a, h) - k * h * (1.0 - h); 
}
// 1_4_polar
const float PI = 3.1415926;
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

//start hash
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
uvec3 uhash33(uvec3 n){
    n ^= (n.yzx << u);
    n ^= (n.yzx >> u);
    n *= k;
    n ^= (n.yzx << u);
    return n * k;
}
float hash11(float p){
    uint n = floatBitsToUint(p);
    return float(uhash11(n)) / float(UINT_MAX);
}
float hash21(vec2 p){
    uvec2 n = floatBitsToUint(p);
    return float(uhash22(n).x) / float(UINT_MAX);
}
float hash31(vec3 p){
    uvec3 n = floatBitsToUint(p);
    return float(uhash33(n).x) / float(UINT_MAX);
}
vec2 hash22(vec2 p){
    uvec2 n = floatBitsToUint(p);
    return vec2(uhash22(n)) / vec2(UINT_MAX);
}
vec3 hash33(vec3 p){
    uvec3 n = floatBitsToUint(p);
    return vec3(uhash33(n)) / vec3(UINT_MAX);
}
//end hash

//start vnoise
float vnoise21(vec2 p){
    vec2 n = floor(p);
    float[4] v;
    for (int j = 0; j < 2; j ++){
        for (int i = 0; i < 2; i++){
            v[i+2*j] = hash21(n + vec2(i, j));
        }
    }
    vec2 f = fract(p);
    f = f * f * f * (10.0 - 15.0 * f + 6.0 * f * f);
    return mix(mix(v[0], v[1], f[0]), mix(v[2], v[3], f[0]), f[1]);
}
//end vnoise

//start pnoise
float gtable2(vec2 lattice, vec2 p){
    uvec2 n = floatBitsToUint(lattice);
    uint ind = uhash22(n).x >> 29;
    float u = 0.92387953 * (ind < 4u ? p.x : p.y);  //0.92387953 = cos(pi/8)
    float v = 0.38268343 * (ind < 4u ? p.y : p.x);  //0.38268343 = sin(pi/8)
    return ((ind & 1u) == 0u ? u : -u) + ((ind & 2u) == 0u? v : -v);
}
float pnoise(vec2 p){
    vec2 n = floor(p);
    vec2 f = fract(p);
    float[4] v;
    for (int j = 0; j < 2; j ++){
        for (int i = 0; i < 2; i++){
            v[i+2*j] = gtable2(n + vec2(i, j), f - vec2(i, j));
        }
    }
    f = f * f * f * (10.0 - 15.0 * f + 6.0 * f * f);
    return 0.5 * mix(mix(v[0], v[1], f[0]), mix(v[2], v[3], f[0]), f[1]) + 0.5;
}
//end pnoise

float base21(vec2 p){
    return channel == 0 ? vnoise21(p) - 0.5 : 
        pnoise(p) - 0.5;
}

float fbm(vec2 p, float g){
    float val = 0.0;
    float amp = 1.0;
    float freq = 1.0;
    for (int i = 0; i < 3; i++){
        val += amp * base21(freq * p);
        amp *= g;
        freq *= 3.01;
    }
    return 0.5 * val + 0.5;
}
float gate(in float center, in float threshold){
    float range =.05822482;
    return (smoothstep(center - range, center, threshold) - smoothstep(center, center + range, threshold));

//    return 1.0;
}

vec2 rot(vec2 st, float t) {
  mat2 rotate = mat2(cos(0.5 + t), sin(0.5 + t), -sin(0.5 + t), cos(0.5 + t));
  return st * rotate;
} 

float circle(vec2 p, vec2 c, float r){
  float d = 0.5 + u_mouse.x / u_resolution.x;
  float l = dot(p - c, p - c);
  float g = abs(mod(0.2 * u_time, 2.0) - 1.0);
  float f = fbm(p * .32, g) * 1.59;
  return (0.2 * f) + pow(l, 1.0) - r;
}
//start gnoise
float gnoise21(vec2 p){
    vec2 n = floor(p);
    vec2 f = fract(p);
    float[4] v;
    for (int j = 0; j < 2; j ++){
        for (int i = 0; i < 2; i++){
            vec2 g = normalize(hash22(n + vec2(i,j)) - vec2(0.5));
            v[i+2*j] = dot(g, f - vec2(i, j));
        }
    }
    f = f * f * f * (10.0 - 15.0 * f + 6.0 * f * f);
    return 0.5 * mix(mix(v[0], v[1], f[0]), mix(v[2], v[3], f[0]), f[1]) + 0.5;
}
float gnoise(vec3 p){
    vec3 n = floor(p);
    vec3 f = fract(p);
    float[8] v;
    for (int k = 0; k < 2; k++ ){
        for (int j = 0; j < 2; j++ ){
            for (int i = 0; i < 2; i++){
                vec3 g = normalize(hash33(n + vec3(i, j, k)) - vec3(0.5));
                v[i+2*j+4*k] = dot(g, f - vec3(i, j, k));
            }
        }
    }
    f = f * f * f * (10.0 - 15.0 * f + 6.0 * f * f);
    float[2] w;
    for (int i = 0; i < 2; i++){
        w[i] = mix(mix(v[4*i], v[4*i+1], f[0]), mix(v[4*i+2], v[4*i+3], f[0]), f[1]);
    }
    return 0.5 * mix(w[0], w[1], f[2]) + 0.5;
}
//end gnoise

float warp(vec2 p, float g){
    float val = 0.0;
    for (int i = 0; i < 3; i++){
        val = base21(p + g * vec2(cos(2.0 * PI * val), sin(2.0 * PI * val)));
    }
    return val;
}
float sig(float x) {
  return 1.0 / ( 1.0 + exp(-x) );
}

void main(void)
{

        float aspect = u_resolution.y/u_resolution.x;


        float u_time_sp = u_time * .5 + 1000.0;

        vec2 st_oval = vec2(gl_FragCoord.x/u_resolution.x, gl_FragCoord.y/u_resolution.y * .5);
        vec2 st = (2.0 * gl_FragCoord.xy -u_resolution.xy)/ min(u_resolution.x, u_resolution.y);
        
        float rad = circle(st, vec2(0.0), .045);
        float rad2 = circle(st, vec2(sin(u_time) * .1, cos(u_time) * .1), .45);
        // float rad2 = distance(vec2(.5 + cos(u_time) * 0.05, (.5 + sin(u_time) * 0.05) * aspect), st);


        float blob = float(
            smoothstep(
                0.0,
                2.2,
                smin(
                  rad * 2.5,
                  rad2 * 1.5,
                  .4
                )
            )
          );

        vec2 pol = gl_FragCoord.xy / u_resolution.xy;
        pol = xy2pol(st);



        float gn1 = pow(gnoise(vec3(st * 1.0, u_time_sp)), .5);
        float gn2 = pow(gnoise(vec3(st * .5, u_time_sp)), .5);
        float gn3 = pow(gnoise(vec3(st * 1.0, u_time_sp)), .5);

        // mat3 gns = (
        //   vec3(1.0),
        //   vec3(1.0),
        //   vec3(1.0),
        // );

        float texture = gnoise(vec3(st.x * 380.0, st.y * 380.0 - u_time * 3.20, 1.0));

        float mask = gnoise(vec3((st_oval) * 3.0, u_time_sp)) * 4.0;
        // mask = 1.0 + (sig(mask * 2.0) ) * rad;
        float mask_vec = smoothstep(.50, 2.9, mask * length(st * .820)) + texture;


        float th = 0.2;
        // fragColor = vec4(
        //   vec3(pnoise(
        //     vec2(st.x * mask_vec * 1.0, st.y * mask_vec * 1.0 + u_time)
        //   ) ) * mask_vec
        // , 1.0);

        fragColor.rgb = vec3(0.0);
        fragColor.a = mask;
        
        for (int i = 0; i < 3; i++){
          float x = float(i);
          vec2 st = 3.0 * x + (1.0 * gl_FragCoord.xy -u_resolution.xy)/ min(u_resolution.x, u_resolution.y);
          float m = gnoise(vec3((st ) * x, u_time_sp + x * 1.0)) * .50;
          fragColor.rgb = mix(
            fragColor.rgb, vec3(
              r(x),
              b(x),
              g(x)
            ), smoothstep(.2, .1999, (rad + x * .3) * m)
          );
          // fragColor.rgb = mix(
          //   fragColor.rgb, vec3(
          //     r(x),
          //     b(x),
          //     g(x)
          //   ), smoothstep(.2, .1999, (rad + x * .3) * m)
          // );
        }
        
        // fragColor.rgb *= mask_vec;
        // fragColor.gb *= rot(st * 1.0, u_time_sp * .9);

        // fragColor = vec4(
        //   vec3(
        //     min(1.0 - mix(
        //       color0 * smoothstep(0.60, 1.0, gn1),
        //       color1 * smoothstep(0.0, 1.0, gn2),
        //       rot(st, u_time_sp).x * fbm(st, smoothstep(.2, .4, gn3) * .3)
        //     ), 1.0)
        //   ) * mask_vec
        // , 1.0);

}