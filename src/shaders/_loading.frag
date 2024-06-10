#version 300 es
precision highp float;
uniform		float	u_time;
uniform		vec2	u_resolution;
#define M_PI 3.1415926535897932384626433832795
#define TWO_PI 6.28318531

out vec4 fragColor;

float atan2(in float y, in float x)
{
  return x == 0.0 ? sign(y)*M_PI/2.0 : atan(y, x);
}
float angle(in vec2 a, in vec2 b){
  float r = atan2(b.y - a.y, b.x - a.x);
  float cond = step(r, 0.0);
  
  if(r < 0.0) {
      r = r + TWO_PI;
  }
  return floor(r * 360.0 / (TWO_PI));
}

void main(void) {
  vec3 color0=vec3(2./255.,2./255.,215./255.);
  vec3 color1=vec3(146./255.,5./255.,27./255.);
  float aspect=u_resolution.y/u_resolution.x;
  vec2 center=vec2(.5,.5*aspect);
  
  float u_time_sp=u_time* 0.2 + 1000.0;
  
  vec2 st=vec2(gl_FragCoord.x/u_resolution.x,gl_FragCoord.y/u_resolution.y*aspect);
  
  float rad=distance(vec2(.5,.5*aspect),st);
  
  vec2 q=vec2(0.);
  // q.x=fbm(st+u_time*-.001);
  // q.y=fbm(st+vec2(-.04,-.30));
  
  float angle=angle(st,center)/360.0;
  angle=fract(angle+u_time*.2);
  
  float red=1.;
  red=red*step(angle,.75);
  //        float devide = 3;
  //        red = floor(red * devide) / devide;
  float size = 0.2;
  float min = .3;
  float width = 0.03;
  float arc=smoothstep(min*size,(min+.005)*size,rad)*smoothstep((min+width+.005)*size,(min+width)*size,rad);
  float notch=step(angle,.75);
  
  vec4 c1=vec4(vec3(color1*fract(q.x*angle+u_time*.42)+color0*fract(q.y*angle+u_time*.42))*arc*notch,1.);
  
  fragColor=c1;
  //        fragColor = vec4(color1, 1);
  
}

