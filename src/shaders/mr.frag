#version 300 es
precision highp float;
out vec4 fragColor;
uniform float u_time;
uniform vec2 u_resolution;
uniform sampler2D u_texture_noise;// ../swcp/texture.png
uniform vec2 u_texture_noiseResolution;
const float PI=3.1415926;
const float E=2.71828182846;

//start hash
uvec3 k=uvec3(0x456789abu,0x6789ab45u,0x89ab4567u);
uvec3 u=uvec3(1,2,3);
const uint UINT_MAX=0xffffffffu;
uint uhash11(uint n){
  n^=(n<<u.x);
  n^=(n>>u.x);
  n*=k.x;
  n^=(n<<u.x);
  return n*k.x;
}
uvec2 uhash22(uvec2 n){
  n^=(n.yx<<u.xy);
  n^=(n.yx>>u.xy);
  n*=k.xy;
  n^=(n.yx<<u.xy);
  return n*k.xy;
}
uvec3 uhash33(uvec3 n){
  n^=(n.yzx<<u);
  n^=(n.yzx>>u);
  n*=k;
  n^=(n.yzx<<u);
  return n*k;
}
float hash11(float p){
  uint n=floatBitsToUint(p);
  return float(uhash11(n))/float(UINT_MAX);
}
float hash21(vec2 p){
  uvec2 n=floatBitsToUint(p);
  return float(uhash22(n).x)/float(UINT_MAX);
}
float hash31(vec3 p){
  uvec3 n=floatBitsToUint(p);
  return float(uhash33(n).x)/float(UINT_MAX);
}
vec2 hash22(vec2 p){
  uvec2 n=floatBitsToUint(p);
  return vec2(uhash22(n))/vec2(UINT_MAX);
}
vec3 hash33(vec3 p){
  uvec3 n=floatBitsToUint(p);
  return vec3(uhash33(n))/vec3(UINT_MAX);
}
//end hash

//start pnoise
float gtable2(vec2 lattice,vec2 p){
  uvec2 n=floatBitsToUint(lattice);
  uint ind=uhash22(n).x>>29;
  float u=.92387953*(ind<4u?p.x:p.y);//0.92387953 = cos(pi/8)
  float v=.38268343*(ind<4u?p.y:p.x);//0.38268343 = sin(pi/8)
  return((ind&1u)==0u?u:-u)+((ind&2u)==0u?v:-v);
}
float pnoise21(vec2 p){
  vec2 n=floor(p);
  vec2 f=fract(p);
  float[4]v;
  for(int j=0;j<2;j++){
    for(int i=0;i<2;i++){
      v[i+2*j]=gtable2(n+vec2(i,j),f-vec2(i,j));
    }
  }
  f=f*f*f*(10.-15.*f+6.*f*f);
  return .5*mix(mix(v[0],v[1],f[0]),mix(v[2],v[3],f[0]),f[1])+.5;
}
float gtable3(vec3 lattice,vec3 p){
  uvec3 n=floatBitsToUint(lattice);
  uint ind=uhash33(n).x>>28;
  float u=ind<8u?p.x:p.y;
  float v=ind<4u?p.y:ind==12u||ind==14u?p.x:p.z;
  return((ind&1u)==0u?u:-u)+((ind&2u)==0u?v:-v);
}
float pnoise31(vec3 p){
  vec3 n=floor(p);
  vec3 f=fract(p);
  float[8]v;
  for(int k=0;k<2;k++){
    for(int j=0;j<2;j++){
      for(int i=0;i<2;i++){
        v[i+2*j+4*k]=gtable3(n+vec3(i,j,k),f-vec3(i,j,k))*.70710678;
      }
      
    }
  }
  f=f*f*f*(10.-15.*f+6.*f*f);
  float[2]w;
  for(int i=0;i<2;i++){
    w[i]=mix(mix(v[4*i],v[4*i+1],f[0]),mix(v[4*i+2],v[4*i+3],f[0]),f[1]);
  }
  return .5*mix(w[0],w[1],f[2])+.5;
}
//end pnoise

// 9_3_smoothMin(mix a,b / k = thresh)
float smin(float a,float b,float k){
  float h=clamp(.5+.5*(b-a)/k,0.,1.);
  return mix(b,a,h)-k*h*(1.-h);
}

vec2 pol2xy(vec2 pol){
  return pol.y*vec2(cos(pol.x),sin(pol.x));
}
vec3 grad(vec2 st){
  float time=.2*u_time;
  vec3 circ=vec3(pol2xy(vec2(time,.5))+.5,1.);
  vec3[3]col3=vec3[](
    vec3(255./255.,140./255.,80./255.),
    vec3(80./255.,190./255.,255./255.),
    vec3(140./255.,80./255.,255./255.)
  );
  st.s=st.s/PI+2.;
  st.s+=time;
  int ind=int(st.s);
  vec3 col=mix(col3[ind%2],col3[(ind+1)%2],fract(st.s));
  return mix(col3[2],col,st.t);
}

float sigmoid(float val){
  return 1./(1.+pow(E,-val));
}
float saturate(float v){
  return sigmoid(v)*4.-2.;
}
vec2 skew(vec2 st,float deg){
  st.x=st.x+st.y*tan(deg*PI);
  return st;
}
// vec2 rot(vec2 st, float deg) {
  //   return vec2(st.x * cos(deg) - st.y * sin(deg), st.x * sin(deg) + st.y * cos(deg));
// }
vec2 move(vec2 st,float val,float r){
  st.x+=sin(val)*r;
  st.y+=cos(val)*r;
  return st;
}

// ------------------------------------------------------------------------------------

void main(){
  fragColor.a=1.;
  float texture_repeats=u_resolution.x/512.;
  
  // pos aspected
  float aspect=u_resolution.y/u_resolution.x;
  float offset=(((u_resolution.x-u_resolution.y)/u_resolution.x)*.5);
  float w=gl_FragCoord.x/u_resolution.x;
  float h=gl_FragCoord.y/u_resolution.y*aspect+offset;
  vec2 pos=vec2(w,h);
  
  // balls = smin(pn, balls, 2.2);
  
  // vec2 pos = gl_FragCoord.xy / u_resolution.xy;
  vec4 noise=(texture(u_texture_noise,fract(vec2(pos.x*.5,pos.y-u_time*.012)*texture_repeats))+texture(u_texture_noise,fract(pos*texture_repeats)));
  float size=sin(u_time*.2)*.2+1.293;
  
  vec2 st=(.5+size)*pos.xy-vec2(.5+(size*.5));
  // vec2 st = 2.4 * pos.xy - vec2(1.2);
  float len=length(st.xy);
  float invl=1.-len;
  
  // balls
  float balls=0.;
  float balls2=0.;
  float blur=pow(pnoise31(vec3(.75*st,u_time*.1))*2.15*(invl+1.3)-.41,.40);
  for(int i=0;i<5;++i){
    float fi=float(i)+.20;
    vec2 centeredST=pos*2.-1.;
    float ball=smoothstep(
      .0+blur*.5,
      .0,
      pnoise21(vec2(pos.x*5.5,pos.y*5.5-(u_time*fi*.1)-fi*3.10))*
      pnoise21(vec2(pos.x*.15,pos.y*.15-(u_time*fi*.1)-fi*3.30))*.80
    ) - length(st) * .1;
    balls+=ball+smin(ball*2.4,balls,.12);
  }
    
  vec3 colors=(grad(pos*2.+sin(u_time*.2)*.40));
  fragColor=vec4(
    colors+(2.-balls)+(noise.x*.16)+smoothstep(0.,.31*balls,pow(sigmoid(balls2),82.21))*.15,
    1.0// alpha
  );

  fragColor.rgb = mod(fragColor.rgb, .1) * 10.0;
  
  fragColor.rgb=min(fragColor.rgb,vec3(1.));
}