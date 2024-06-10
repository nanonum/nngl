#version 300 es
    precision highp float;
    uniform float u_time;// 0-1
    out vec4 fragColor;
    void main(){
      fragColor = vec4(0.0, pow(sin(u_time * 0.41) * 0.5 + 0.5, .4), 0.0,  1.0);
    }