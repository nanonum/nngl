import{c as W,d as k,n as y,w,G as D,f as O,m as I}from"./index-CQmNhTrF.js";let E=0;class L{constructor(t){this._poolKeyHash=Object.create(null),this._texturePool={},this.textureOptions=t||{},this.enableFullScreen=!1}createTexture(t,e,o){const n=new W({...this.textureOptions,width:t,height:e,resolution:1,antialias:o,autoGarbageCollect:!0});return new k({source:n,label:`texturePool_${E++}`})}getOptimalTexture(t,e,o=1,n){let u=Math.ceil(t*o-1e-6),i=Math.ceil(e*o-1e-6);u=y(u),i=y(i);const s=(u<<17)+(i<<1)+(n?1:0);this._texturePool[s]||(this._texturePool[s]=[]);let a=this._texturePool[s].pop();return a||(a=this.createTexture(u,i,n)),a.source._resolution=o,a.source.width=u/o,a.source.height=i/o,a.source.pixelWidth=u,a.source.pixelHeight=i,a.frame.x=0,a.frame.y=0,a.frame.width=t,a.frame.height=e,a.updateUvs(),this._poolKeyHash[a.uid]=s,a}getSameSizeTexture(t,e=!1){const o=t.source;return this.getOptimalTexture(t.width,t.height,o._resolution,e)}returnTexture(t){const e=this._poolKeyHash[t.uid];this._texturePool[e].push(t)}clear(t){if(t=t!==!1,t)for(const e in this._texturePool){const o=this._texturePool[e];if(o)for(let n=0;n<o.length;n++)o[n].destroy(!0)}this._texturePool={}}}const st=new L;function j(r,t,e){if(r)for(const o in r){const n=o.toLocaleLowerCase(),u=t[n];if(u){let i=r[o];o==="header"&&(i=i.replace(/@in\s+[^;]+;\s*/g,"").replace(/@out\s+[^;]+;\s*/g,"")),e&&u.push(`//----${e}----//`),u.push(i)}else w(`${o} placement hook does not exist in shader`)}}const F=/\{\{(.*?)\}\}/g;function G(r){var o;const t={};return(((o=r.match(F))==null?void 0:o.map(n=>n.replace(/[{()}]/g,"")))??[]).forEach(n=>{t[n]=[]}),t}function _(r,t){let e;const o=/@in\s+([^;]+);/g;for(;(e=o.exec(r))!==null;)t.push(e[1])}function R(r,t,e=!1){const o=[];_(t,o),r.forEach(s=>{s.header&&_(s.header,o)});const n=o;e&&n.sort();const u=n.map((s,a)=>`       @location(${a}) ${s},`).join(`
`);let i=t.replace(/@in\s+[^;]+;\s*/g,"");return i=i.replace("{{in}}",`
${u}
`),i}function B(r,t){let e;const o=/@out\s+([^;]+);/g;for(;(e=o.exec(r))!==null;)t.push(e[1])}function K(r){const e=/\b(\w+)\s*:/g.exec(r);return e?e[1]:""}function N(r){const t=/@.*?\s+/g;return r.replace(t,"")}function X(r,t){const e=[];B(t,e),r.forEach(a=>{a.header&&B(a.header,e)});let o=0;const n=e.sort().map(a=>a.indexOf("builtin")>-1?a:`@location(${o++}) ${a}`).join(`,
`),u=e.sort().map(a=>`       var ${N(a)};`).join(`
`),i=`return VSOutput(
                ${e.sort().map(a=>` ${K(a)}`).join(`,
`)});`;let s=t.replace(/@out\s+[^;]+;\s*/g,"");return s=s.replace("{{struct}}",`
${n}
`),s=s.replace("{{start}}",`
${u}
`),s=s.replace("{{return}}",`
${i}
`),s}function A(r,t){let e=r;for(const o in t){const n=t[o];n.join(`
`).length?e=e.replace(`{{${o}}}`,`//-----${o} START-----//
${n.join(`
`)}
//----${o} FINISH----//`):e=e.replace(`{{${o}}}`,"")}return e}const c=Object.create(null),U=new Map;let Y=0;function V({template:r,bits:t}){const e=H(r,t);if(c[e])return c[e];const{vertex:o,fragment:n}=J(r,t);return c[e]=z(o,n,t),c[e]}function q({template:r,bits:t}){const e=H(r,t);return c[e]||(c[e]=z(r.vertex,r.fragment,t)),c[e]}function J(r,t){const e=t.map(i=>i.vertex).filter(i=>!!i),o=t.map(i=>i.fragment).filter(i=>!!i);let n=R(e,r.vertex,!0);n=X(e,n);const u=R(o,r.fragment,!0);return{vertex:n,fragment:u}}function H(r,t){return t.map(e=>(U.has(e)||U.set(e,Y++),U.get(e))).sort((e,o)=>e-o).join("-")+r.vertex+r.fragment}function z(r,t,e){const o=G(r),n=G(t);return e.forEach(u=>{j(u.vertex,o,u.name),j(u.fragment,n,u.name)}),{vertex:A(r,o),fragment:A(t,n)}}const Q=`
    @in aPosition: vec2<f32>;
    @in aUV: vec2<f32>;

    @out @builtin(position) vPosition: vec4<f32>;
    @out vUV : vec2<f32>;
    @out vColor : vec4<f32>;

    {{header}}

    struct VSOutput {
        {{struct}}
    };

    @vertex
    fn main( {{in}} ) -> VSOutput {

        var worldTransformMatrix = globalUniforms.uWorldTransformMatrix;
        var modelMatrix = mat3x3<f32>(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0
          );
        var position = aPosition;
        var uv = aUV;

        {{start}}
        
        vColor = vec4<f32>(1., 1., 1., 1.);

        {{main}}

        vUV = uv;

        var modelViewProjectionMatrix = globalUniforms.uProjectionMatrix * worldTransformMatrix * modelMatrix;

        vPosition =  vec4<f32>((modelViewProjectionMatrix *  vec3<f32>(position, 1.0)).xy, 0.0, 1.0);
       
        vColor *= globalUniforms.uWorldColorAlpha;

        {{end}}

        {{return}}
    };
`,Z=`
    @in vUV : vec2<f32>;
    @in vColor : vec4<f32>;
   
    {{header}}

    @fragment
    fn main(
        {{in}}
      ) -> @location(0) vec4<f32> {
        
        {{start}}

        var outColor:vec4<f32>;
      
        {{main}}
        
        return outColor * vColor;
      };
`,tt=`
    in vec2 aPosition;
    in vec2 aUV;

    out vec4 vColor;
    out vec2 vUV;

    {{header}}

    void main(void){

        mat3 worldTransformMatrix = uWorldTransformMatrix;
        mat3 modelMatrix = mat3(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0
          );
        vec2 position = aPosition;
        vec2 uv = aUV;
        
        {{start}}
        
        vColor = vec4(1.);
        
        {{main}}
        
        vUV = uv;
        
        mat3 modelViewProjectionMatrix = uProjectionMatrix * worldTransformMatrix * modelMatrix;

        gl_Position = vec4((modelViewProjectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);

        vColor *= uWorldColorAlpha;

        {{end}}
    }
`,et=`
   
    in vec4 vColor;
    in vec2 vUV;

    out vec4 finalColor;

    {{header}}

    void main(void) {
        
        {{start}}

        vec4 outColor;
      
        {{main}}
        
        finalColor = outColor * vColor;
    }
`,ot={name:"global-uniforms-bit",vertex:{header:`
        struct GlobalUniforms {
            uProjectionMatrix:mat3x3<f32>,
            uWorldTransformMatrix:mat3x3<f32>,
            uWorldColorAlpha: vec4<f32>,
            uResolution: vec2<f32>,
        }

        @group(0) @binding(0) var<uniform> globalUniforms : GlobalUniforms;
        `}},rt={name:"global-uniforms-bit",vertex:{header:`
          uniform mat3 uProjectionMatrix;
          uniform mat3 uWorldTransformMatrix;
          uniform vec4 uWorldColorAlpha;
          uniform vec2 uResolution;
        `}};function lt({bits:r,name:t}){const e=V({template:{fragment:Z,vertex:Q},bits:[ot,...r]});return D.from({name:t,vertex:{source:e.vertex,entryPoint:"main"},fragment:{source:e.fragment,entryPoint:"main"}})}function ct({bits:r,name:t}){return new O({name:t,...q({template:{vertex:tt,fragment:et},bits:[rt,...r]})})}const mt={name:"color-bit",vertex:{header:`
            @in aColor: vec4<f32>;
        `,main:`
            vColor *= vec4<f32>(aColor.rgb * aColor.a, aColor.a);
        `}},vt={name:"color-bit",vertex:{header:`
            in vec4 aColor;
        `,main:`
            vColor *= vec4(aColor.rgb * aColor.a, aColor.a);
        `}},T={};function nt(r){const t=[];if(r===1)t.push("@group(1) @binding(0) var textureSource1: texture_2d<f32>;"),t.push("@group(1) @binding(1) var textureSampler1: sampler;");else{let e=0;for(let o=0;o<r;o++)t.push(`@group(1) @binding(${e++}) var textureSource${o+1}: texture_2d<f32>;`),t.push(`@group(1) @binding(${e++}) var textureSampler${o+1}: sampler;`)}return t.join(`
`)}function at(r){const t=[];if(r===1)t.push("outColor = textureSampleGrad(textureSource1, textureSampler1, vUV, uvDx, uvDy);");else{t.push("switch vTextureId {");for(let e=0;e<r;e++)e===r-1?t.push("  default:{"):t.push(`  case ${e}:{`),t.push(`      outColor = textureSampleGrad(textureSource${e+1}, textureSampler${e+1}, vUV, uvDx, uvDy);`),t.push("      break;}");t.push("}")}return t.join(`
`)}function ht(r){return T[r]||(T[r]={name:"texture-batch-bit",vertex:{header:`
                @in aTextureIdAndRound: vec2<u32>;
                @out @interpolate(flat) vTextureId : u32;
            `,main:`
                vTextureId = aTextureIdAndRound.y;
            `,end:`
                if(aTextureIdAndRound.x == 1)
                {
                    vPosition = vec4<f32>(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
                }
            `},fragment:{header:`
                @in @interpolate(flat) vTextureId: u32;
    
                ${nt(I())}
            `,main:`
                var uvDx = dpdx(vUV);
                var uvDy = dpdy(vUV);
    
                ${at(I())}
            `}}),T[r]}const M={};function it(r){const t=[];for(let e=0;e<r;e++)e>0&&t.push("else"),e<r-1&&t.push(`if(vTextureId < ${e}.5)`),t.push("{"),t.push(`	outColor = texture(uTextures[${e}], vUV);`),t.push("}");return t.join(`
`)}function pt(r){return M[r]||(M[r]={name:"texture-batch-bit",vertex:{header:`
                in vec2 aTextureIdAndRound;
                out float vTextureId;
              
            `,main:`
                vTextureId = aTextureIdAndRound.y;
            `,end:`
                if(aTextureIdAndRound.x == 1.)
                {
                    gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
                }
            `},fragment:{header:`
                in float vTextureId;
    
                uniform sampler2D uTextures[${r}];
              
            `,main:`
    
                ${it(I())}
            `}}),M[r]}const ft={name:"round-pixels-bit",vertex:{header:`
            fn roundPixels(position: vec2<f32>, targetSize: vec2<f32>) -> vec2<f32> 
            {
                return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
            }
        `}},xt={name:"round-pixels-bit",vertex:{header:`   
            vec2 roundPixels(vec2 position, vec2 targetSize)
            {       
                return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
            }
        `}},$={name:"local-uniform-bit",vertex:{header:`

            struct LocalUniforms {
                uTransformMatrix:mat3x3<f32>,
                uColor:vec4<f32>,
                uRound:f32,
            }

            @group(1) @binding(0) var<uniform> localUniforms : LocalUniforms;
        `,main:`
            vColor *= localUniforms.uColor;
            modelMatrix *= localUniforms.uTransformMatrix;
        `,end:`
            if(localUniforms.uRound == 1)
            {
                vPosition = vec4(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
            }
        `}},dt={...$,vertex:{...$.vertex,header:$.vertex.header.replace("group(1)","group(2)")}},gt={name:"local-uniform-bit",vertex:{header:`

            uniform mat3 uTransformMatrix;
            uniform vec4 uColor;
            uniform float uRound;
        `,main:`
            vColor *= uColor;
            modelMatrix = uTransformMatrix;
        `,end:`
            if(uRound == 1.)
            {
                gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
            }
        `}};class bt{constructor(){this.vertexSize=4,this.indexSize=6,this.location=0,this.batcher=null,this.batch=null,this.roundPixels=0}get blendMode(){return this.renderable.groupBlendMode}packAttributes(t,e,o,n){const u=this.renderable,i=this.texture,s=u.groupTransform,a=s.a,m=s.b,v=s.c,h=s.d,p=s.tx,f=s.ty,x=this.bounds,d=x.maxX,g=x.minX,b=x.maxY,P=x.minY,l=i.uvs,C=u.groupColorAlpha,S=n<<16|this.roundPixels&65535;t[o+0]=a*g+v*P+p,t[o+1]=h*P+m*g+f,t[o+2]=l.x0,t[o+3]=l.y0,e[o+4]=C,e[o+5]=S,t[o+6]=a*d+v*P+p,t[o+7]=h*P+m*d+f,t[o+8]=l.x1,t[o+9]=l.y1,e[o+10]=C,e[o+11]=S,t[o+12]=a*d+v*b+p,t[o+13]=h*b+m*d+f,t[o+14]=l.x2,t[o+15]=l.y2,e[o+16]=C,e[o+17]=S,t[o+18]=a*g+v*b+p,t[o+19]=h*b+m*g+f,t[o+20]=l.x3,t[o+21]=l.y3,e[o+22]=C,e[o+23]=S}packIndex(t,e,o){t[e]=o+0,t[e+1]=o+1,t[e+2]=o+2,t[e+3]=o+0,t[e+4]=o+2,t[e+5]=o+3}reset(){this.renderable=null,this.texture=null,this.batcher=null,this.batch=null,this.bounds=null}}function Pt(r,t,e){const o=(r>>24&255)/255;t[e++]=(r&255)/255*o,t[e++]=(r>>8&255)/255*o,t[e++]=(r>>16&255)/255*o,t[e++]=o}export{bt as B,st as T,mt as a,$ as b,lt as c,Pt as d,ct as e,vt as f,ht as g,pt as h,xt as i,gt as j,dt as l,ft as r};
