#version 300 es
precision highp float;
uniform		float	u_time;
uniform		vec2	u_resolution;
out vec4 fragColor;
float v_center = .5 / 1.0;
vec3 colorA = vec3(0.149,0.141,0.912);
vec3 colorB = vec3(1.000,0.833,0.224);
void main()
{
vec3 color = vec3(0.0);
vec3 mixed = vec3(0.0);
float aspect = u_resolution.y/u_resolution.x;
vec2 thisCoord = vec2(gl_FragCoord.x / aspect, gl_FragCoord.y );
float pct = abs(sin(u_time * .34));
vec2 st = (thisCoord/u_resolution) / 1.0;
float rad = distance(vec2((.5 / 1.0) / aspect, v_center), st);
color = mix(
  sin(colorA * u_time * 1.4) * 0.5 + .5, 
  cos(colorB * u_time * 0.5) * 0.5 + .5, 
  thisCoord.x / u_resolution.x
) / rad;
mixed = mix(2.50 - color, sin(color * 6.5) * .5 + .5, thisCoord.y/u_resolution.y);
float pct2 = 
  (2.20 - pow(mixed.r, .980) ) -
  (1.0 - pow(mixed.g, 4.90) * 4.41) - 
  (1.0 / pow(mixed.b, 1.20) * 4.04);
fragColor = vec4(
  vec3(sin(pow(pct2 * 1.3, 2.9)) * length(st), sin(pow(pct2, 3.9)), sin(pow(pct2, 4.9)))
,1.0);
}