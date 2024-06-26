#version 300 es
precision highp float;
out vec4 fragColor;
uniform float u_time;
uniform vec2 u_resolution;
uniform sampler2D u_texture_1; // ../swcp/texture.png
uniform vec2 u_texture_1Resolution;
const float PI = 3.1415926;


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

//start pnoise
float gtable2(vec2 lattice, vec2 p){
    uvec2 n = floatBitsToUint(lattice);
    uint ind = uhash22(n).x >> 29;
    float u = 0.92387953 * (ind < 4u ? p.x : p.y);  //0.92387953 = cos(pi/8)
    float v = 0.38268343 * (ind < 4u ? p.y : p.x);  //0.38268343 = sin(pi/8)
    return ((ind & 1u) == 0u ? u : -u) + ((ind & 2u) == 0u? v : -v);
}
float pnoise21(vec2 p){
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
float gtable3(vec3 lattice, vec3 p){
    uvec3 n = floatBitsToUint(lattice);
    uint ind = uhash33(n).x >> 28;
    float u = ind < 8u ? p.x : p.y;
    float v = ind < 4u ? p.y : ind == 12u || ind == 14u ? p.x : p.z;
    return ((ind & 1u) == 0u? u: -u) + ((ind & 2u) == 0u? v : -v);
}
float pnoise31(vec3 p){
    vec3 n = floor(p);
    vec3 f = fract(p);
    float[8] v;
    for (int k = 0; k < 2; k++ ){
        for (int j = 0; j < 2; j++ ){
            for (int i = 0; i < 2; i++){
                v[i+2*j+4*k] = gtable3(n + vec3(i, j, k), f - vec3(i, j, k)) * 0.70710678;
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
//end pnoise

// 9_3_smoothMin(mix a,b / k = thresh)
float smin(float a, float b, float k){
	float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
return mix(b, a, h) - k * h * (1.0 - h); 
}

float atan2(float y, float x){
	if (x == 0.0){
		return sign(y) * PI / 2.0;
	} else {
		return atan(y, x);
	}
	// or use "?:" as follows:
	// return x == 0.0 ? sign(y) * PI / 2.0 : atan(y, x);
}
vec2 xy2pol(vec2 xy, float l){
	return vec2(atan2(xy.y, xy.x), l);
}
vec2 pol2xy(vec2 pol){
	return pol.y * vec2(cos(pol.x), sin(pol.x));
}
vec3 grad(vec2 st){
	float time = 0.2 * u_time;
	vec3 circ = vec3(pol2xy(vec2(time, 0.5)) + 0.5, 1.0);
	vec3[3] col3 = vec3[](
		vec3(255.0 / 255.0, 140.0 / 255.0, 80.0 / 255.0),
		vec3(80.0 / 255.0, 190.0 / 255.0, 255.0 / 255.0),
		vec3(140.0 / 255.0, 80.0 / 255.0, 255.0 / 255.0)
	);
	st.s = st.s / PI + 1.0;
	st.s += time;
	int ind = int(st.s) ;
	vec3 col = mix(col3[ind % 2], col3[(ind + 1) % 2], fract(st.s));
	return mix(col3[2], col, st.t);
}

float periodicNoise21(vec2 p, float period){
	vec2 n = floor(p);
	vec2 f = fract(p);
	float[4] v;
	for (int j = 0; j < 2; j ++){
		for (int i = 0; i < 2; i++){
			v[i+2*j] = gtable2(mod(n + vec2(i, j), period), f - vec2(i, j));
		}
	}
	f = f * f * f * (10.0 - 15.0 * f + 6.0 * f * f);
	return 0.5 * mix(mix(v[0], v[1], f[0]), mix(v[2], v[3], f[0]), f[1]) + 0.5;
}
float periodicNoise31(vec3 p, float period){
	vec3 n = floor(p);
	vec3 f = fract(p);
	float[8] v;
	for (int k = 0; k < 2; k++ ){
		for (int j = 0; j < 2; j++ ){
			for (int i = 0; i < 2; i++){
				v[i+2*j+4*k] = gtable3(mod(n + vec3(i, j, k), period), f - vec3(i, j, k)) * 0.70710678;
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
float wave(vec2 pos, float scale, float size, float phase) {
  return pos.y + ( sin(pos.x * scale + phase ) * size);
}
vec2 rot(vec2 st, float t) {
  mat2 rotate = mat2(cos(0.5 + t), sin(0.5 + t), -sin(0.5 + t), cos(0.5 + t));
  return st * rotate;
} 

float NUM_POLYGONS = 4.0;

void main(){
  float texture_repeats = u_resolution.x / 512.0 * .5;
  // pos aspected
  float aspect = u_resolution.y/u_resolution.x;
  float offset = (((u_resolution.x - u_resolution.y ) /u_resolution.x)  * .5);
  float w = gl_FragCoord.x/u_resolution.x;
  float h = gl_FragCoord.y/u_resolution.y * aspect + offset;
  vec2 pos = vec2( w, h);
  
  vec4 noise = (texture(u_texture_1, fract(vec2(pos.x * .5, pos.y - u_time * .012) * texture_repeats)) + texture(u_texture_1, fract(pos * texture_repeats))) * .06;


	vec2 st = 2.0 * pos.xy - vec2(1.0);
  float len = length(st.xy);
  float invl = 1.0 - len;
	pos = xy2pol(st, len);
	vec2 t_pos = vec2(NUM_POLYGONS / PI, .80) * pos + u_time * .1;

  float blur = pow(pnoise31(vec3( .75 * st, u_time * 1.1)) *  1.5 * (invl + 1.050) - 0.1, 10.40) * .1;
  float blur2 = pow(pnoise31(vec3( 1.5 * st, u_time * 1.1)) *  1.25 * (invl + 1.50) - 0.2, 10.30) * .1;
  float waveform = wave(rot(st, 3.0 * t_pos.y), 1.50, 1.0,  u_time * .20);
  waveform = waveform + (step(waveform, .2) * .01);
  // float highlight = pow(pnoise31(vec3( 1.4 * st, u_time * 2.1)) *  13.8 , .40) * .4;
  
	float blob = smoothstep(
		.00001 + blur,  // * pow(pos.y, 1.2 * sin(u_time)),
		.0,
		smin(
			pow(periodicNoise21(t_pos, NUM_POLYGONS * 2.0 ), 1.0),
			pos.y,
			2.5
		)
	);
	fragColor = min(blur, blur2) * vec4(grad(pos + (smoothstep(.15, .96, pow(pos.y, waveform * 8.0) + .2)) * .4) * blob + noise.x + (1.0 - blob), 1.0);

  // fragColor.xyz = reflect(fragColor.xyz, vec3(waveform, blur, blob));

  fragColor.rgb = 
    vec3(
      pow(min(blur, blur2), 3.5 * pos.y * pnoise31(vec3(st, 3.5))) + pnoise31(vec3(st, 4.3))
      
    ) * 5.0
    
    ;
  // fragColor.rgb = vec3(highlight);
}