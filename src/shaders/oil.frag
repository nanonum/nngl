#version 300 es
precision highp float;
precision highp int;

uniform float u_time;
uniform vec2 u_resolution;

vec3 color0 = vec3(255.0 / 255.0, 215.0 / 255.0, 122.0 / 255.0);
vec3 color1 = vec3(.2, .4, .14);
vec3 color2 = vec3(.1, .18, .04);

out vec4 fragColor;

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

//
// Description : Array and textureless GLSL 2D/3D/4D simplex
//               noise functions.
//      Author : Ian McEwan, Ashima Arts.
//  Maintainer : stegu
//     Lastmod : 20110822 (ijm)
//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.
//               Distributed under the MIT License. See LICENSE file.
//               https://github.com/ashima/webgl-noise
//               https://github.com/stegu/webgl-noise
//

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
     return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r){
  return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise(vec3 v){
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

// First corner
  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;

// Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  //   x0 = x0 - 0.0 + 0.0 * C.xxx;
  //   x1 = x0 - i1  + 1.0 * C.xxx;
  //   x2 = x0 - i2  + 2.0 * C.xxx;
  //   x3 = x0 - 1.0 + 3.0 * C.xxx;
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y

// Permutations
  i = mod289(i);
  vec4 p = permute( permute( permute(
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

// Gradients: 7x7 points over a square, mapped onto an octahedron.
// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
  float n_ = 0.142857142857; // 1.0/7.0
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

//Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

// Mix final noise value
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                dot(p2,x2), dot(p3,x3) ) );
  }
//#define NUM_OCTAVES 3

float fbm ( in vec2 _st, in int NUM_OCTAVES) {
    float v = 0.0;
    float a = .955;
    vec2 shift = vec2(0.0);
    // Rotate to reduce axial bias
    mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.50));
    for (int i = 0; i < NUM_OCTAVES; ++i) {
        v += a * snoise(vec3(_st.x, _st.y, u_time * 0.02));
        _st = rot * _st * 3.1 + shift;
        a *= (.33);
    }
    return ((v + .0) * 9.5);
}

float gate(in float center, in float threshold){
    float range =.05822482;
    return (smoothstep(center - range, center, threshold) - smoothstep(center, center + range, threshold));

//    return 1.0;
}

void main(void)
{

        float aspect = u_resolution.y/u_resolution.x;


        float u_u_time_sp = u_time * .2 + 1000.0;

        vec2 st = vec2(gl_FragCoord.x/u_resolution.x, gl_FragCoord.y/u_resolution.y * aspect);
        
        float rad = distance(vec2(.5, .5 * aspect), st);

        vec2 q = vec2(0.);
        q.x = fbm( st + u_time* -0.008, 2);
        q.y = fbm( st + u_time* -0.02, 4);


        float alpha = 1.0;
        vec3 c0 = vec3(color0 * (snoise(st * 4.0 + u_time * .30) + 1.0) * 0.5);
        vec3 c1 = vec3(color1 + (snoise(vec2(rad)) + 1.0) * 0.5);
        vec3 c2 = vec3(color2 + (snoise(vec2(rad)) + 1.0) * 0.5);


        vec3 color_a = vec3((c1  * (fbm(st + 2.0 *q, 1) + 1.0) * 0.4165));
        vec3 color_b = vec3((c0 * (fbm(st + 2.0 *q, 6) + 1.0) * 0.15));
        vec3 color_c = vec3((c2 * (fbm(st + 2.0 *q, 2) + 1.0) * 0.75));
        
//        color_a.x -= smoothstep(.3, .0, sin(snoise(st * 1.3 * fbm(q * 1.32)) - 3.4)) * 0.1 + st.y;
//        color_b.y -= smoothstep(.3, .0, sin(snoise(st * 1.3 * fbm(q * 1.32)) - 3.4)) * 0.1 - st.y;
//        color_a.y -= smoothstep(.3, .0, sin(snoise(st * 1.3 * fbm(q * 2.32)) - 3.4)) * 0.12;
//        color_a.z -= smoothstep(.3, .0, sin(snoise(st * 1.3 * fbm(q * .32)) - 3.4)) * 0.032;
        
        color_a.x += snoise(st) * rad;


        float threshold = pow(snoise(vec2(st * q)), .84);
        
        vec3 cliped_a = vec3(color_a * gate( 0.1, threshold - pow(rad + 0.12, 2.15)) );
        vec3 cliped_b = vec3(color_b * gate( 0.8, threshold + pow(rad * 10.0, 1.05))); //vec3(0.0); //vec3(color_b * smoothstep(.3, .6, threshold));
        vec3 cliped_c = vec3(color_c * gate( 0.2, threshold * pow(rad, 1.0325))); //vec3(0.0); //vec3(color_c * smoothstep(.6, .9, threshold));
        
            fragColor = vec4(cliped_a + cliped_b + cliped_c, alpha);
//float radt = rad * st.y * 5.1 + u_time * -5.5;
//            fragColor = vec4(color1  * fbm(vec2(rad, sin(radt))) , 1.0);
//            fragColor = vec4(c0, 1.0);
//
//        fragColor = (c0 + c1) * .5;
//            fragColor = c1 ;
//fragColor = mixed;

}