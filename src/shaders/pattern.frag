#version 300 es
precision highp float;
out vec4 fragColor;
uniform vec2 u_resolution;
uniform float u_time;


float norm(float x) {
    return x > 1.0 ? 0.0 : clamp(x, 0.0, 1.0);
}
float saturate(float a) {
    return clamp(a, 0.0, 1.0);
}

float slice3(float x, float i) {
    float m = 3.0 ;
    return norm( i - mod(x + u_time, 1.0 ) * m );
}
void main(){
    vec2 pos = gl_FragCoord.xy / u_resolution.xy;
    vec2 st = (gl_FragCoord.xy -u_resolution.xy)/ min(u_resolution.x, u_resolution.y);
    vec3[3] col3 = vec3[](
        vec3(1.0, 0.0, 0.0) * slice3(1.0 *pos.x, 1.0),
        vec3(0.0, 0.0, 1.0) * slice3(1.0 *pos.x, 2.0),
        vec3(0.0, 1.0, 0.0 * slice3(1.0 *pos.x, 3.0))
        );
    int ind = int(pos.x);
    vec3 col = mix(col3[ind], col3[ind + 1], fract(pos.x));
    fragColor = vec4(col, 1.0);

    float x = sin(60.0 * st.x) * cos(st.y * 60.0 + 3.0 * u_time);
    
    fragColor.rgb = vec3(
        pow(

        slice3(x, 1.0) +
        slice3(x, 2.0) +
        slice3(x, 3.0)
        , 4.0
        )
    );

    // fragColor.rgb = vec3(pow(fragColor.r + fragColor.g + fragColor.b, 3.2));
}