#version 300 es
precision highp float;
precision highp int;

uniform float u_time;
uniform vec2 u_resolution;

vec3 color0 = vec3(255.0 / 255.0, 140.0 / 255.0, 80.0 / 255.0);
vec3 color1 = vec3(80.0 / 255.0, 190.0 / 255.0, 255.0 / 255.0);
vec3 color2 = vec3(140.0 / 255.0, 80.0 / 255.0, 255.0 / 255.0);

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

#define NUM_OCTAVES 2
float fbm ( in vec2 _st, in float rad, in float rot_time) {
    float v = 0.0;
    float a = 1.5;
    vec2 shift = vec2(0.0);
    mat2 rot = mat2(cos(0.5 + rot_time), sin(0.5+ rot_time), -sin(0.5+ rot_time), cos(0.50+ rot_time));
    for (int i = 0; i < NUM_OCTAVES; ++i) {
        v += a * snoise(_st);
        _st =  rot* _st * 99.53998 + shift;
        a *= 1.38 / rad / 7.2;
    }
    return ((v + 1.0) * 0.5);
}
float gate(in float center, in float threshold){
    float range =.05822482;
    return (smoothstep(center - range, center, threshold) - smoothstep(center, center + range, threshold));

//    return 1.0;
}

void main(void)
{

        float aspect = u_resolution.y/u_resolution.x;


        float u_time_sp = u_time * .12 + 1000.0;

        vec2 st = vec2(gl_FragCoord.x/u_resolution.x, gl_FragCoord.y/u_resolution.y * aspect);
        
        float rad = distance(vec2(.5, .5 * aspect), st);


        vec2 q = vec2(0.);
        q.x = fbm( st + u_time_sp* -0.204, rad, .22) * 1.1;
        q.y = fbm( st + vec2(-0.00,-0.0), rad, 1.1)  * 0.01;
        
//        q = pow(q.x, 2.20 + sin(time) * 5) * q;


        float circle = step(rad, .02 + fbm(st * 1.2, rad  + sin(u_time_sp * .2) * .1, .2 * u_time_sp) * .2);
        float circle_g = step(rad, .02 + fbm(st * 1.2, rad  + sin(u_time_sp * .32) * .1, .12 * u_time_sp) * .3) - circle;
        float circle_b = step(rad, .02 + fbm(st * 2.2, rad  + sin(u_time_sp * .32) * .1, .132 * u_time_sp) * .43) - max(circle, circle_g);
        vec4 c1 = vec4(vec3(
          1.0 * circle * (1.0 - rad * 4.0),
          1.0 * circle_g * ( 1.0 - rad * 4.0),
          1.0 * circle_b * ( 1.0 - rad * 2.0)
        ), 1.0);
        

        fragColor = vec4(
          mix(color0 * circle, color1 * circle_g, fbm(st * 1.04, rad  + sin(u_time_sp * .2) * .25, .32 * u_time_sp))
        , 1.0);

}