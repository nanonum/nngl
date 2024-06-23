const __vite__fileDeps=["assets/browserAll-D-vzOOkU.js","assets/webworkerAll-DCqbVkKz.js","assets/colorToUniform-DST8CN-V.js","assets/getBatchSamplersUniformGroup-CM2oUomR.js","assets/WebGPURenderer-D4wWwnc0.js","assets/SharedSystems-eJsiGKoh.js","assets/WebGLRenderer-BZUK74NY.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function no(e,t){const n=new Set(e.split(","));return r=>n.has(r)}const dt={},_n=[],Yt=()=>{},wf=()=>!1,os=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),ro=e=>e.startsWith("onUpdate:"),At=Object.assign,so=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Cf=Object.prototype.hasOwnProperty,st=(e,t)=>Cf.call(e,t),q=Array.isArray,yn=e=>as(e)==="[object Map]",Ul=e=>as(e)==="[object Set]",J=e=>typeof e=="function",bt=e=>typeof e=="string",hn=e=>typeof e=="symbol",ft=e=>e!==null&&typeof e=="object",Dl=e=>(ft(e)||J(e))&&J(e.then)&&J(e.catch),Gl=Object.prototype.toString,as=e=>Gl.call(e),Af=e=>as(e).slice(8,-1),Wl=e=>as(e)==="[object Object]",io=e=>bt(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Yn=no(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ls=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Sf=/-(\w)/g,Sn=ls(e=>e.replace(Sf,(t,n)=>n?n.toUpperCase():"")),Pf=/\B([A-Z])/g,In=ls(e=>e.replace(Pf,"-$1").toLowerCase()),Hl=ls(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ps=ls(e=>e?`on${Hl(e)}`:""),Ge=(e,t)=>!Object.is(e,t),Ms=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},$l=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},Mf=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Tf=e=>{const t=bt(e)?Number(e):NaN;return isNaN(t)?e:t};let Jo;const Vl=()=>Jo||(Jo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function oo(e){if(q(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=bt(r)?Ef(r):oo(r);if(s)for(const i in s)t[i]=s[i]}return t}else if(bt(e)||ft(e))return e}const kf=/;(?![^(]*\))/g,If=/:([^]+)/,zf=/\/\*[^]*?\*\//g;function Ef(e){const t={};return e.replace(zf,"").split(kf).forEach(n=>{if(n){const r=n.split(If);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function _r(e){let t="";if(bt(e))t=e;else if(q(e))for(let n=0;n<e.length;n++){const r=_r(e[n]);r&&(t+=r+" ")}else if(ft(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ff="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Of=no(Ff);function ql(e){return!!e||e===""}const Dr=e=>bt(e)?e:e==null?"":q(e)||ft(e)&&(e.toString===Gl||!J(e.toString))?JSON.stringify(e,Xl,2):String(e),Xl=(e,t)=>t&&t.__v_isRef?Xl(e,t.value):yn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],i)=>(n[Ts(r,i)+" =>"]=s,n),{})}:Ul(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Ts(n))}:hn(t)?Ts(t):ft(t)&&!q(t)&&!Wl(t)?String(t):t,Ts=(e,t="")=>{var n;return hn(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Wt;class Bf{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Wt,!t&&Wt&&(this.index=(Wt.scopes||(Wt.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Wt;try{return Wt=this,t()}finally{Wt=n}}}on(){Wt=this}off(){Wt=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Rf(e,t=Wt){t&&t.active&&t.effects.push(e)}function Yl(){return Wt}function Lf(e){Wt&&Wt.cleanups.push(e)}let cn;class ao{constructor(t,n,r,s){this.fn=t,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Rf(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,He();for(let t=0;t<this._depsLength;t++){const n=this.deps[t];if(n.computed&&(jf(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),$e()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=Ue,n=cn;try{return Ue=!0,cn=this,this._runnings++,ta(this),this.fn()}finally{ea(this),this._runnings--,cn=n,Ue=t}}stop(){this.active&&(ta(this),ea(this),this.onStop&&this.onStop(),this.active=!1)}}function jf(e){return e.value}function ta(e){e._trackId++,e._depsLength=0}function ea(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)Kl(e.deps[t],e);e.deps.length=e._depsLength}}function Kl(e,t){const n=e.get(t);n!==void 0&&t._trackId!==n&&(e.delete(t),e.size===0&&e.cleanup())}let Ue=!0,mi=0;const Zl=[];function He(){Zl.push(Ue),Ue=!1}function $e(){const e=Zl.pop();Ue=e===void 0?!0:e}function lo(){mi++}function co(){for(mi--;!mi&&vi.length;)vi.shift()()}function Ql(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const r=e.deps[e._depsLength];r!==t?(r&&Kl(r,e),e.deps[e._depsLength++]=t):e._depsLength++}}const vi=[];function Jl(e,t,n){lo();for(const r of e.keys()){let s;r._dirtyLevel<t&&(s??(s=e.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=t),r._shouldSchedule&&(s??(s=e.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&vi.push(r.scheduler)))}co()}const tc=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},gi=new WeakMap,un=Symbol(""),_i=Symbol("");function Nt(e,t,n){if(Ue&&cn){let r=gi.get(e);r||gi.set(e,r=new Map);let s=r.get(n);s||r.set(n,s=tc(()=>r.delete(n))),Ql(cn,s)}}function Ce(e,t,n,r,s,i){const o=gi.get(e);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(n==="length"&&q(e)){const l=Number(r);o.forEach((u,c)=>{(c==="length"||!hn(c)&&c>=l)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),t){case"add":q(e)?io(n)&&a.push(o.get("length")):(a.push(o.get(un)),yn(e)&&a.push(o.get(_i)));break;case"delete":q(e)||(a.push(o.get(un)),yn(e)&&a.push(o.get(_i)));break;case"set":yn(e)&&a.push(o.get(un));break}lo();for(const l of a)l&&Jl(l,4);co()}const Nf=no("__proto__,__v_isRef,__isVue"),ec=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(hn)),na=Uf();function Uf(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=ot(this);for(let i=0,o=this.length;i<o;i++)Nt(r,"get",i+"");const s=r[t](...n);return s===-1||s===!1?r[t](...n.map(ot)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){He(),lo();const r=ot(this)[t].apply(this,n);return co(),$e(),r}}),e}function Df(e){hn(e)||(e=String(e));const t=ot(this);return Nt(t,"has",e),t.hasOwnProperty(e)}class nc{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?th:oc:i?ic:sc).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=q(t);if(!s){if(o&&st(na,n))return Reflect.get(na,n,r);if(n==="hasOwnProperty")return Df}const a=Reflect.get(t,n,r);return(hn(n)?ec.has(n):Nf(n))||(s||Nt(t,"get",n),i)?a:Ut(a)?o&&io(n)?a:a.value:ft(a)?s?ac(a):ir(a):a}}class rc extends nc{constructor(t=!1){super(!1,t)}set(t,n,r,s){let i=t[n];if(!this._isShallow){const l=or(i);if(!Kr(r)&&!or(r)&&(i=ot(i),r=ot(r)),!q(t)&&Ut(i)&&!Ut(r))return l?!1:(i.value=r,!0)}const o=q(t)&&io(n)?Number(n)<t.length:st(t,n),a=Reflect.set(t,n,r,s);return t===ot(s)&&(o?Ge(r,i)&&Ce(t,"set",n,r):Ce(t,"add",n,r)),a}deleteProperty(t,n){const r=st(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&Ce(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!hn(n)||!ec.has(n))&&Nt(t,"has",n),r}ownKeys(t){return Nt(t,"iterate",q(t)?"length":un),Reflect.ownKeys(t)}}class Gf extends nc{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Wf=new rc,Hf=new Gf,$f=new rc(!0);const uo=e=>e,cs=e=>Reflect.getPrototypeOf(e);function br(e,t,n=!1,r=!1){e=e.__v_raw;const s=ot(e),i=ot(t);n||(Ge(t,i)&&Nt(s,"get",t),Nt(s,"get",i));const{has:o}=cs(s),a=r?uo:n?po:ar;if(o.call(s,t))return a(e.get(t));if(o.call(s,i))return a(e.get(i));e!==s&&e.get(t)}function wr(e,t=!1){const n=this.__v_raw,r=ot(n),s=ot(e);return t||(Ge(e,s)&&Nt(r,"has",e),Nt(r,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function Cr(e,t=!1){return e=e.__v_raw,!t&&Nt(ot(e),"iterate",un),Reflect.get(e,"size",e)}function ra(e){e=ot(e);const t=ot(this);return cs(t).has.call(t,e)||(t.add(e),Ce(t,"add",e,e)),this}function sa(e,t){t=ot(t);const n=ot(this),{has:r,get:s}=cs(n);let i=r.call(n,e);i||(e=ot(e),i=r.call(n,e));const o=s.call(n,e);return n.set(e,t),i?Ge(t,o)&&Ce(n,"set",e,t):Ce(n,"add",e,t),this}function ia(e){const t=ot(this),{has:n,get:r}=cs(t);let s=n.call(t,e);s||(e=ot(e),s=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return s&&Ce(t,"delete",e,void 0),i}function oa(){const e=ot(this),t=e.size!==0,n=e.clear();return t&&Ce(e,"clear",void 0,void 0),n}function Ar(e,t){return function(r,s){const i=this,o=i.__v_raw,a=ot(o),l=t?uo:e?po:ar;return!e&&Nt(a,"iterate",un),o.forEach((u,c)=>r.call(s,l(u),l(c),i))}}function Sr(e,t,n){return function(...r){const s=this.__v_raw,i=ot(s),o=yn(i),a=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,u=s[e](...r),c=n?uo:t?po:ar;return!t&&Nt(i,"iterate",l?_i:un),{next(){const{value:f,done:h}=u.next();return h?{value:f,done:h}:{value:a?[c(f[0]),c(f[1])]:c(f),done:h}},[Symbol.iterator](){return this}}}}function ze(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Vf(){const e={get(i){return br(this,i)},get size(){return Cr(this)},has:wr,add:ra,set:sa,delete:ia,clear:oa,forEach:Ar(!1,!1)},t={get(i){return br(this,i,!1,!0)},get size(){return Cr(this)},has:wr,add:ra,set:sa,delete:ia,clear:oa,forEach:Ar(!1,!0)},n={get(i){return br(this,i,!0)},get size(){return Cr(this,!0)},has(i){return wr.call(this,i,!0)},add:ze("add"),set:ze("set"),delete:ze("delete"),clear:ze("clear"),forEach:Ar(!0,!1)},r={get(i){return br(this,i,!0,!0)},get size(){return Cr(this,!0)},has(i){return wr.call(this,i,!0)},add:ze("add"),set:ze("set"),delete:ze("delete"),clear:ze("clear"),forEach:Ar(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Sr(i,!1,!1),n[i]=Sr(i,!0,!1),t[i]=Sr(i,!1,!0),r[i]=Sr(i,!0,!0)}),[e,n,t,r]}const[qf,Xf,Yf,Kf]=Vf();function fo(e,t){const n=t?e?Kf:Yf:e?Xf:qf;return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(st(n,s)&&s in r?n:r,s,i)}const Zf={get:fo(!1,!1)},Qf={get:fo(!1,!0)},Jf={get:fo(!0,!1)};const sc=new WeakMap,ic=new WeakMap,oc=new WeakMap,th=new WeakMap;function eh(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function nh(e){return e.__v_skip||!Object.isExtensible(e)?0:eh(Af(e))}function ir(e){return or(e)?e:ho(e,!1,Wf,Zf,sc)}function rh(e){return ho(e,!1,$f,Qf,ic)}function ac(e){return ho(e,!0,Hf,Jf,oc)}function ho(e,t,n,r,s){if(!ft(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=s.get(e);if(i)return i;const o=nh(e);if(o===0)return e;const a=new Proxy(e,o===2?r:n);return s.set(e,a),a}function Kn(e){return or(e)?Kn(e.__v_raw):!!(e&&e.__v_isReactive)}function or(e){return!!(e&&e.__v_isReadonly)}function Kr(e){return!!(e&&e.__v_isShallow)}function lc(e){return e?!!e.__v_raw:!1}function ot(e){const t=e&&e.__v_raw;return t?ot(t):e}function sh(e){return Object.isExtensible(e)&&$l(e,"__v_skip",!0),e}const ar=e=>ft(e)?ir(e):e,po=e=>ft(e)?ac(e):e;class cc{constructor(t,n,r,s){this.getter=t,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new ao(()=>t(this._value),()=>Gr(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const t=ot(this);return(!t._cacheable||t.effect.dirty)&&Ge(t._value,t._value=t.effect.run())&&Gr(t,4),uc(t),t.effect._dirtyLevel>=2&&Gr(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function ih(e,t,n=!1){let r,s;const i=J(e);return i?(r=e,s=Yt):(r=e.get,s=e.set),new cc(r,s,i||!s,n)}function uc(e){var t;Ue&&cn&&(e=ot(e),Ql(cn,(t=e.dep)!=null?t:e.dep=tc(()=>e.dep=void 0,e instanceof cc?e:void 0)))}function Gr(e,t=4,n){e=ot(e);const r=e.dep;r&&Jl(r,t)}function Ut(e){return!!(e&&e.__v_isRef===!0)}function re(e){return oh(e,!1)}function oh(e,t){return Ut(e)?e:new ah(e,t)}class ah{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:ot(t),this._value=n?t:ar(t)}get value(){return uc(this),this._value}set value(t){const n=this.__v_isShallow||Kr(t)||or(t);t=n?t:ot(t),Ge(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:ar(t),Gr(this,4))}}function Be(e){return Ut(e)?e.value:e}const lh={get:(e,t,n)=>Be(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return Ut(s)&&!Ut(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function fc(e){return Kn(e)?e:new Proxy(e,lh)}/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function De(e,t,n,r){try{return r?e(...r):e()}catch(s){us(s,t,n)}}function Qt(e,t,n,r){if(J(e)){const s=De(e,t,n,r);return s&&Dl(s)&&s.catch(i=>{us(i,t,n)}),s}if(q(e)){const s=[];for(let i=0;i<e.length;i++)s.push(Qt(e[i],t,n,r));return s}}function us(e,t,n,r=!0){const s=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const u=i.ec;if(u){for(let c=0;c<u.length;c++)if(u[c](e,o,a)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){He(),De(l,null,10,[e,o,a]),$e();return}}ch(e,n,s,r)}function ch(e,t,n,r=!0){console.error(e)}let lr=!1,yi=!1;const Et=[];let ge=0;const bn=[];let Re=null,on=0;const hc=Promise.resolve();let xo=null;function dc(e){const t=xo||hc;return e?t.then(this?e.bind(this):e):t}function uh(e){let t=ge+1,n=Et.length;for(;t<n;){const r=t+n>>>1,s=Et[r],i=cr(s);i<e||i===e&&s.pre?t=r+1:n=r}return t}function mo(e){(!Et.length||!Et.includes(e,lr&&e.allowRecurse?ge+1:ge))&&(e.id==null?Et.push(e):Et.splice(uh(e.id),0,e),pc())}function pc(){!lr&&!yi&&(yi=!0,xo=hc.then(mc))}function fh(e){const t=Et.indexOf(e);t>ge&&Et.splice(t,1)}function hh(e){q(e)?bn.push(...e):(!Re||!Re.includes(e,e.allowRecurse?on+1:on))&&bn.push(e),pc()}function aa(e,t,n=lr?ge+1:0){for(;n<Et.length;n++){const r=Et[n];if(r&&r.pre){if(e&&r.id!==e.uid)continue;Et.splice(n,1),n--,r()}}}function xc(e){if(bn.length){const t=[...new Set(bn)].sort((n,r)=>cr(n)-cr(r));if(bn.length=0,Re){Re.push(...t);return}for(Re=t,on=0;on<Re.length;on++)Re[on]();Re=null,on=0}}const cr=e=>e.id==null?1/0:e.id,dh=(e,t)=>{const n=cr(e)-cr(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function mc(e){yi=!1,lr=!0,Et.sort(dh);try{for(ge=0;ge<Et.length;ge++){const t=Et[ge];t&&t.active!==!1&&De(t,null,14)}}finally{ge=0,Et.length=0,xc(),lr=!1,xo=null,(Et.length||bn.length)&&mc()}}function ph(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||dt;let s=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const c=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=r[c]||dt;h&&(s=n.map(d=>bt(d)?d.trim():d)),f&&(s=n.map(Mf))}let a,l=r[a=Ps(t)]||r[a=Ps(Sn(t))];!l&&i&&(l=r[a=Ps(In(t))]),l&&Qt(l,e,6,s);const u=r[a+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Qt(u,e,6,s)}}function vc(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let o={},a=!1;if(!J(e)){const l=u=>{const c=vc(u,t,!0);c&&(a=!0,At(o,c))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!a?(ft(e)&&r.set(e,null),null):(q(i)?i.forEach(l=>o[l]=null):At(o,i),ft(e)&&r.set(e,o),o)}function fs(e,t){return!e||!os(t)?!1:(t=t.slice(2).replace(/Once$/,""),st(e,t[0].toLowerCase()+t.slice(1))||st(e,In(t))||st(e,t))}let ae=null,gc=null;function Zr(e){const t=ae;return ae=e,gc=e&&e.type.__scopeId||null,t}function Wr(e,t=ae,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&ga(-1);const i=Zr(t);let o;try{o=e(...s)}finally{Zr(i),r._d&&ga(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ks(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:l,render:u,renderCache:c,props:f,data:h,setupState:d,ctx:p,inheritAttrs:m}=e,x=Zr(e);let y,g;try{if(n.shapeFlag&4){const b=s||r,k=b;y=ve(u.call(k,b,c,f,d,h,p)),g=a}else{const b=t;y=ve(b.length>1?b(f,{attrs:a,slots:o,emit:l}):b(f,null)),g=t.props?a:xh(a)}}catch(b){Jn.length=0,us(b,e,1),y=zt(Kt)}let v=y;if(g&&m!==!1){const b=Object.keys(g),{shapeFlag:k}=v;b.length&&k&7&&(i&&b.some(ro)&&(g=mh(g,i)),v=We(v,g,!1,!0))}return n.dirs&&(v=We(v,null,!1,!0),v.dirs=v.dirs?v.dirs.concat(n.dirs):n.dirs),n.transition&&(v.transition=n.transition),y=v,Zr(x),y}const xh=e=>{let t;for(const n in e)(n==="class"||n==="style"||os(n))&&((t||(t={}))[n]=e[n]);return t},mh=(e,t)=>{const n={};for(const r in e)(!ro(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function vh(e,t,n){const{props:r,children:s,component:i}=e,{props:o,children:a,patchFlag:l}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?la(r,o,u):!!o;if(l&8){const c=t.dynamicProps;for(let f=0;f<c.length;f++){const h=c[f];if(o[h]!==r[h]&&!fs(u,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?la(r,o,u):!0:!!o;return!1}function la(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!fs(n,i))return!0}return!1}function gh({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const _h=Symbol.for("v-ndc"),yh=e=>e.__isSuspense;function bh(e,t){t&&t.pendingBranch?q(e)?t.effects.push(...e):t.effects.push(e):hh(e)}const wh=Symbol.for("v-scx"),Ch=()=>$r(wh);function Ah(e,t){return vo(e,null,t)}const Pr={};function wn(e,t,n){return vo(e,t,n)}function vo(e,t,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:a}=dt){if(t&&i){const P=t;t=(...O)=>{P(...O),k()}}const l=Ft,u=P=>r===!0?P:vn(P,r===!1?1:void 0);let c,f=!1,h=!1;if(Ut(e)?(c=()=>e.value,f=Kr(e)):Kn(e)?(c=()=>u(e),f=!0):q(e)?(h=!0,f=e.some(P=>Kn(P)||Kr(P)),c=()=>e.map(P=>{if(Ut(P))return P.value;if(Kn(P))return u(P);if(J(P))return De(P,l,2)})):J(e)?t?c=()=>De(e,l,2):c=()=>(d&&d(),Qt(e,l,3,[p])):c=Yt,t&&r){const P=c;c=()=>vn(P())}let d,p=P=>{d=v.onStop=()=>{De(P,l,4),d=v.onStop=void 0}},m;if(vs)if(p=Yt,t?n&&Qt(t,l,3,[c(),h?[]:void 0,p]):c(),s==="sync"){const P=Ch();m=P.__watcherHandles||(P.__watcherHandles=[])}else return Yt;let x=h?new Array(e.length).fill(Pr):Pr;const y=()=>{if(!(!v.active||!v.dirty))if(t){const P=v.run();(r||f||(h?P.some((O,I)=>Ge(O,x[I])):Ge(P,x)))&&(d&&d(),Qt(t,l,3,[P,x===Pr?void 0:h&&x[0]===Pr?[]:x,p]),x=P)}else v.run()};y.allowRecurse=!!t;let g;s==="sync"?g=y:s==="post"?g=()=>Rt(y,l&&l.suspense):(y.pre=!0,l&&(y.id=l.uid),g=()=>mo(y));const v=new ao(c,Yt,g),b=Yl(),k=()=>{v.stop(),b&&so(b.effects,v)};return t?n?y():x=v.run():s==="post"?Rt(v.run.bind(v),l&&l.suspense):v.run(),m&&m.push(k),k}function Sh(e,t,n){const r=this.proxy,s=bt(e)?e.includes(".")?_c(r,e):()=>r[e]:e.bind(r,r);let i;J(t)?i=t:(i=t.handler,n=t);const o=yr(this),a=vo(s,i.bind(r),n);return o(),a}function _c(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function vn(e,t=1/0,n){if(t<=0||!ft(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,Ut(e))vn(e.value,t,n);else if(q(e))for(let r=0;r<e.length;r++)vn(e[r],t,n);else if(Ul(e)||yn(e))e.forEach(r=>{vn(r,t,n)});else if(Wl(e))for(const r in e)vn(e[r],t,n);return e}function Ke(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(He(),Qt(l,n,8,[e.el,a,e,t]),$e())}}const Le=Symbol("_leaveCb"),Mr=Symbol("_enterCb");function Ph(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return zn(()=>{e.isMounted=!0}),ps(()=>{e.isUnmounting=!0}),e}const qt=[Function,Array],yc={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:qt,onEnter:qt,onAfterEnter:qt,onEnterCancelled:qt,onBeforeLeave:qt,onLeave:qt,onAfterLeave:qt,onLeaveCancelled:qt,onBeforeAppear:qt,onAppear:qt,onAfterAppear:qt,onAppearCancelled:qt},Mh={name:"BaseTransition",props:yc,setup(e,{slots:t}){const n=Nc(),r=Ph();return()=>{const s=t.default&&wc(t.default(),!0);if(!s||!s.length)return;let i=s[0];if(s.length>1){for(const h of s)if(h.type!==Kt){i=h;break}}const o=ot(e),{mode:a}=o;if(r.isLeaving)return Is(i);const l=ca(i);if(!l)return Is(i);const u=bi(l,o,r,n);wi(l,u);const c=n.subTree,f=c&&ca(c);if(f&&f.type!==Kt&&!an(l,f)){const h=bi(f,o,r,n);if(wi(f,h),a==="out-in"&&l.type!==Kt)return r.isLeaving=!0,h.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},Is(i);a==="in-out"&&l.type!==Kt&&(h.delayLeave=(d,p,m)=>{const x=bc(r,f);x[String(f.key)]=f,d[Le]=()=>{p(),d[Le]=void 0,delete u.delayedLeave},u.delayedLeave=m})}return i}}},Th=Mh;function bc(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function bi(e,t,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:u,onEnterCancelled:c,onBeforeLeave:f,onLeave:h,onAfterLeave:d,onLeaveCancelled:p,onBeforeAppear:m,onAppear:x,onAfterAppear:y,onAppearCancelled:g}=t,v=String(e.key),b=bc(n,e),k=(I,S)=>{I&&Qt(I,r,9,S)},P=(I,S)=>{const A=S[1];k(I,S),q(I)?I.every(X=>X.length<=1)&&A():I.length<=1&&A()},O={mode:i,persisted:o,beforeEnter(I){let S=a;if(!n.isMounted)if(s)S=m||a;else return;I[Le]&&I[Le](!0);const A=b[v];A&&an(e,A)&&A.el[Le]&&A.el[Le](),k(S,[I])},enter(I){let S=l,A=u,X=c;if(!n.isMounted)if(s)S=x||l,A=y||u,X=g||c;else return;let j=!1;const R=I[Mr]=U=>{j||(j=!0,U?k(X,[I]):k(A,[I]),O.delayedLeave&&O.delayedLeave(),I[Mr]=void 0)};S?P(S,[I,R]):R()},leave(I,S){const A=String(e.key);if(I[Mr]&&I[Mr](!0),n.isUnmounting)return S();k(f,[I]);let X=!1;const j=I[Le]=R=>{X||(X=!0,S(),R?k(p,[I]):k(d,[I]),I[Le]=void 0,b[A]===e&&delete b[A])};b[A]=e,h?P(h,[I,j]):j()},clone(I){return bi(I,t,n,r)}};return O}function Is(e){if(hs(e))return e=We(e),e.children=null,e}function ca(e){if(!hs(e))return e;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&J(n.default))return n.default()}}function wi(e,t){e.shapeFlag&6&&e.component?wi(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function wc(e,t=!1,n){let r=[],s=0;for(let i=0;i<e.length;i++){let o=e[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Lt?(o.patchFlag&128&&s++,r=r.concat(wc(o.children,t,a))):(t||o.type!==Kt)&&r.push(a!=null?We(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}const Hr=e=>!!e.type.__asyncLoader,hs=e=>e.type.__isKeepAlive;function kh(e,t){Cc(e,"a",t)}function Ih(e,t){Cc(e,"da",t)}function Cc(e,t,n=Ft){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(ds(t,r,n),n){let s=n.parent;for(;s&&s.parent;)hs(s.parent.vnode)&&zh(r,t,n,s),s=s.parent}}function zh(e,t,n,r){const s=ds(t,e,r,!0);xs(()=>{so(r[t],s)},n)}function ds(e,t,n=Ft,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;He();const a=yr(n),l=Qt(t,n,e,o);return a(),$e(),l});return r?s.unshift(i):s.push(i),i}}const Me=e=>(t,n=Ft)=>(!vs||e==="sp")&&ds(e,(...r)=>t(...r),n),Eh=Me("bm"),zn=Me("m"),Fh=Me("bu"),Oh=Me("u"),ps=Me("bum"),xs=Me("um"),Bh=Me("sp"),Rh=Me("rtg"),Lh=Me("rtc");function jh(e,t=Ft){ds("ec",e,t)}function Nh(e,t,n,r){let s;const i=n;if(q(e)||bt(e)){s=new Array(e.length);for(let o=0,a=e.length;o<a;o++)s[o]=t(e[o],o,void 0,i)}else if(typeof e=="number"){s=new Array(e);for(let o=0;o<e;o++)s[o]=t(o+1,o,void 0,i)}else if(ft(e))if(e[Symbol.iterator])s=Array.from(e,(o,a)=>t(o,a,void 0,i));else{const o=Object.keys(e);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const u=o[a];s[a]=t(e[u],u,a,i)}}else s=[];return s}const Ci=e=>e?Uc(e)?bo(e)||e.proxy:Ci(e.parent):null,Zn=At(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ci(e.parent),$root:e=>Ci(e.root),$emit:e=>e.emit,$options:e=>go(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,mo(e.update)}),$nextTick:e=>e.n||(e.n=dc.bind(e.proxy)),$watch:e=>Sh.bind(e)}),zs=(e,t)=>e!==dt&&!e.__isScriptSetup&&st(e,t),Uh={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=e;let u;if(t[0]!=="$"){const d=o[t];if(d!==void 0)switch(d){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(zs(r,t))return o[t]=1,r[t];if(s!==dt&&st(s,t))return o[t]=2,s[t];if((u=e.propsOptions[0])&&st(u,t))return o[t]=3,i[t];if(n!==dt&&st(n,t))return o[t]=4,n[t];Ai&&(o[t]=0)}}const c=Zn[t];let f,h;if(c)return t==="$attrs"&&Nt(e.attrs,"get",""),c(e);if((f=a.__cssModules)&&(f=f[t]))return f;if(n!==dt&&st(n,t))return o[t]=4,n[t];if(h=l.config.globalProperties,st(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return zs(s,t)?(s[t]=n,!0):r!==dt&&st(r,t)?(r[t]=n,!0):st(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||e!==dt&&st(e,o)||zs(t,o)||(a=i[0])&&st(a,o)||st(r,o)||st(Zn,o)||st(s.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:st(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function ua(e){return q(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Ai=!0;function Dh(e){const t=go(e),n=e.proxy,r=e.ctx;Ai=!1,t.beforeCreate&&fa(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:u,created:c,beforeMount:f,mounted:h,beforeUpdate:d,updated:p,activated:m,deactivated:x,beforeDestroy:y,beforeUnmount:g,destroyed:v,unmounted:b,render:k,renderTracked:P,renderTriggered:O,errorCaptured:I,serverPrefetch:S,expose:A,inheritAttrs:X,components:j,directives:R,filters:U}=t;if(u&&Gh(u,r,null),o)for(const Z in o){const nt=o[Z];J(nt)&&(r[Z]=nt.bind(n))}if(s){const Z=s.call(n,n);ft(Z)&&(e.data=ir(Z))}if(Ai=!0,i)for(const Z in i){const nt=i[Z],D=J(nt)?nt.bind(n,n):J(nt.get)?nt.get.bind(n,n):Yt,V=!J(nt)&&J(nt.set)?nt.set.bind(n):Yt,Vt=wo({get:D,set:V});Object.defineProperty(r,Z,{enumerable:!0,configurable:!0,get:()=>Vt.value,set:tt=>Vt.value=tt})}if(a)for(const Z in a)Ac(a[Z],r,n,Z);if(l){const Z=J(l)?l.call(n):l;Reflect.ownKeys(Z).forEach(nt=>{Xh(nt,Z[nt])})}c&&fa(c,e,"c");function Q(Z,nt){q(nt)?nt.forEach(D=>Z(D.bind(n))):nt&&Z(nt.bind(n))}if(Q(Eh,f),Q(zn,h),Q(Fh,d),Q(Oh,p),Q(kh,m),Q(Ih,x),Q(jh,I),Q(Lh,P),Q(Rh,O),Q(ps,g),Q(xs,b),Q(Bh,S),q(A))if(A.length){const Z=e.exposed||(e.exposed={});A.forEach(nt=>{Object.defineProperty(Z,nt,{get:()=>n[nt],set:D=>n[nt]=D})})}else e.exposed||(e.exposed={});k&&e.render===Yt&&(e.render=k),X!=null&&(e.inheritAttrs=X),j&&(e.components=j),R&&(e.directives=R)}function Gh(e,t,n=Yt){q(e)&&(e=Si(e));for(const r in e){const s=e[r];let i;ft(s)?"default"in s?i=$r(s.from||r,s.default,!0):i=$r(s.from||r):i=$r(s),Ut(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function fa(e,t,n){Qt(q(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Ac(e,t,n,r){const s=r.includes(".")?_c(n,r):()=>n[r];if(bt(e)){const i=t[e];J(i)&&wn(s,i)}else if(J(e))wn(s,e.bind(n));else if(ft(e))if(q(e))e.forEach(i=>Ac(i,t,n,r));else{const i=J(e.handler)?e.handler.bind(n):t[e.handler];J(i)&&wn(s,i,e)}}function go(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t);let l;return a?l=a:!s.length&&!n&&!r?l=t:(l={},s.length&&s.forEach(u=>Qr(l,u,o,!0)),Qr(l,t,o)),ft(t)&&i.set(t,l),l}function Qr(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&Qr(e,i,n,!0),s&&s.forEach(o=>Qr(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const a=Wh[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const Wh={data:ha,props:da,emits:da,methods:Hn,computed:Hn,beforeCreate:Ot,created:Ot,beforeMount:Ot,mounted:Ot,beforeUpdate:Ot,updated:Ot,beforeDestroy:Ot,beforeUnmount:Ot,destroyed:Ot,unmounted:Ot,activated:Ot,deactivated:Ot,errorCaptured:Ot,serverPrefetch:Ot,components:Hn,directives:Hn,watch:$h,provide:ha,inject:Hh};function ha(e,t){return t?e?function(){return At(J(e)?e.call(this,this):e,J(t)?t.call(this,this):t)}:t:e}function Hh(e,t){return Hn(Si(e),Si(t))}function Si(e){if(q(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ot(e,t){return e?[...new Set([].concat(e,t))]:t}function Hn(e,t){return e?At(Object.create(null),e,t):t}function da(e,t){return e?q(e)&&q(t)?[...new Set([...e,...t])]:At(Object.create(null),ua(e),ua(t??{})):t}function $h(e,t){if(!e)return t;if(!t)return e;const n=At(Object.create(null),e);for(const r in t)n[r]=Ot(e[r],t[r]);return n}function Sc(){return{app:null,config:{isNativeTag:wf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Vh=0;function qh(e,t){return function(r,s=null){J(r)||(r=At({},r)),s!=null&&!ft(s)&&(s=null);const i=Sc(),o=new WeakSet;let a=!1;const l=i.app={_uid:Vh++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:_d,get config(){return i.config},set config(u){},use(u,...c){return o.has(u)||(u&&J(u.install)?(o.add(u),u.install(l,...c)):J(u)&&(o.add(u),u(l,...c))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,c){return c?(i.components[u]=c,l):i.components[u]},directive(u,c){return c?(i.directives[u]=c,l):i.directives[u]},mount(u,c,f){if(!a){const h=zt(r,s);return h.appContext=i,f===!0?f="svg":f===!1&&(f=void 0),c&&t?t(h,u):e(h,u,f),a=!0,l._container=u,u.__vue_app__=l,bo(h.component)||h.component.proxy}},unmount(){a&&(e(null,l._container),delete l._container.__vue_app__)},provide(u,c){return i.provides[u]=c,l},runWithContext(u){const c=Qn;Qn=l;try{return u()}finally{Qn=c}}};return l}}let Qn=null;function Xh(e,t){if(Ft){let n=Ft.provides;const r=Ft.parent&&Ft.parent.provides;r===n&&(n=Ft.provides=Object.create(r)),n[e]=t}}function $r(e,t,n=!1){const r=Ft||ae;if(r||Qn){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Qn._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&J(t)?t.call(r&&r.proxy):t}}const Pc={},Mc=()=>Object.create(Pc),Tc=e=>Object.getPrototypeOf(e)===Pc;function Yh(e,t,n,r=!1){const s={},i=Mc();e.propsDefaults=Object.create(null),kc(e,t,s,i);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=r?s:rh(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function Kh(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=e,a=ot(s),[l]=e.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const c=e.vnode.dynamicProps;for(let f=0;f<c.length;f++){let h=c[f];if(fs(e.emitsOptions,h))continue;const d=t[h];if(l)if(st(i,h))d!==i[h]&&(i[h]=d,u=!0);else{const p=Sn(h);s[p]=Pi(l,a,p,d,e,!1)}else d!==i[h]&&(i[h]=d,u=!0)}}}else{kc(e,t,s,i)&&(u=!0);let c;for(const f in a)(!t||!st(t,f)&&((c=In(f))===f||!st(t,c)))&&(l?n&&(n[f]!==void 0||n[c]!==void 0)&&(s[f]=Pi(l,a,f,void 0,e,!0)):delete s[f]);if(i!==a)for(const f in i)(!t||!st(t,f))&&(delete i[f],u=!0)}u&&Ce(e.attrs,"set","")}function kc(e,t,n,r){const[s,i]=e.propsOptions;let o=!1,a;if(t)for(let l in t){if(Yn(l))continue;const u=t[l];let c;s&&st(s,c=Sn(l))?!i||!i.includes(c)?n[c]=u:(a||(a={}))[c]=u:fs(e.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=ot(n),u=a||dt;for(let c=0;c<i.length;c++){const f=i[c];n[f]=Pi(s,l,f,u[f],e,!st(u,f))}}return o}function Pi(e,t,n,r,s,i){const o=e[n];if(o!=null){const a=st(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&J(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const c=yr(s);r=u[n]=l.call(null,t),c()}}else r=l}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===In(n))&&(r=!0))}return r}function Ic(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const i=e.props,o={},a=[];let l=!1;if(!J(e)){const c=f=>{l=!0;const[h,d]=Ic(f,t,!0);At(o,h),d&&a.push(...d)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!i&&!l)return ft(e)&&r.set(e,_n),_n;if(q(i))for(let c=0;c<i.length;c++){const f=Sn(i[c]);pa(f)&&(o[f]=dt)}else if(i)for(const c in i){const f=Sn(c);if(pa(f)){const h=i[c],d=o[f]=q(h)||J(h)?{type:h}:At({},h);if(d){const p=va(Boolean,d.type),m=va(String,d.type);d[0]=p>-1,d[1]=m<0||p<m,(p>-1||st(d,"default"))&&a.push(f)}}}const u=[o,a];return ft(e)&&r.set(e,u),u}function pa(e){return e[0]!=="$"&&!Yn(e)}function xa(e){return e===null?"null":typeof e=="function"?e.name||"":typeof e=="object"&&e.constructor&&e.constructor.name||""}function ma(e,t){return xa(e)===xa(t)}function va(e,t){return q(t)?t.findIndex(n=>ma(n,e)):J(t)&&ma(t,e)?0:-1}const zc=e=>e[0]==="_"||e==="$stable",_o=e=>q(e)?e.map(ve):[ve(e)],Zh=(e,t,n)=>{if(t._n)return t;const r=Wr((...s)=>_o(t(...s)),n);return r._c=!1,r},Ec=(e,t,n)=>{const r=e._ctx;for(const s in e){if(zc(s))continue;const i=e[s];if(J(i))t[s]=Zh(s,i,r);else if(i!=null){const o=_o(i);t[s]=()=>o}}},Fc=(e,t)=>{const n=_o(t);e.slots.default=()=>n},Qh=(e,t)=>{const n=e.slots=Mc();if(e.vnode.shapeFlag&32){const r=t._;r?(At(n,t),$l(n,"_",r,!0)):Ec(t,n)}else t&&Fc(e,t)},Jh=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,o=dt;if(r.shapeFlag&32){const a=t._;a?n&&a===1?i=!1:(At(s,t),!n&&a===1&&delete s._):(i=!t.$stable,Ec(t,s)),o=t}else t&&(Fc(e,t),o={default:1});if(i)for(const a in s)!zc(a)&&o[a]==null&&delete s[a]};function Mi(e,t,n,r,s=!1){if(q(e)){e.forEach((h,d)=>Mi(h,t&&(q(t)?t[d]:t),n,r,s));return}if(Hr(r)&&!s)return;const i=r.shapeFlag&4?bo(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:l}=e,u=t&&t.r,c=a.refs===dt?a.refs={}:a.refs,f=a.setupState;if(u!=null&&u!==l&&(bt(u)?(c[u]=null,st(f,u)&&(f[u]=null)):Ut(u)&&(u.value=null)),J(l))De(l,a,12,[o,c]);else{const h=bt(l),d=Ut(l);if(h||d){const p=()=>{if(e.f){const m=h?st(f,l)?f[l]:c[l]:l.value;s?q(m)&&so(m,i):q(m)?m.includes(i)||m.push(i):h?(c[l]=[i],st(f,l)&&(f[l]=c[l])):(l.value=[i],e.k&&(c[e.k]=l.value))}else h?(c[l]=o,st(f,l)&&(f[l]=o)):d&&(l.value=o,e.k&&(c[e.k]=o))};o?(p.id=-1,Rt(p,n)):p()}}}const Rt=bh;function td(e){return ed(e)}function ed(e,t){const n=Vl();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:u,setElementText:c,parentNode:f,nextSibling:h,setScopeId:d=Yt,insertStaticContent:p}=e,m=(_,w,C,M=null,T=null,E=null,L=void 0,F=null,B=!!w.dynamicChildren)=>{if(_===w)return;_&&!an(_,w)&&(M=Xe(_),tt(_,T,E,!0),_=null),w.patchFlag===-2&&(B=!1,w.dynamicChildren=null);const{type:z,ref:N,shapeFlag:$}=w;switch(z){case ms:x(_,w,C,M);break;case Kt:y(_,w,C,M);break;case Fs:_==null&&g(w,C,M,L);break;case Lt:j(_,w,C,M,T,E,L,F,B);break;default:$&1?k(_,w,C,M,T,E,L,F,B):$&6?R(_,w,C,M,T,E,L,F,B):($&64||$&128)&&z.process(_,w,C,M,T,E,L,F,B,Ie)}N!=null&&T&&Mi(N,_&&_.ref,E,w||_,!w)},x=(_,w,C,M)=>{if(_==null)r(w.el=a(w.children),C,M);else{const T=w.el=_.el;w.children!==_.children&&u(T,w.children)}},y=(_,w,C,M)=>{_==null?r(w.el=l(w.children||""),C,M):w.el=_.el},g=(_,w,C,M)=>{[_.el,_.anchor]=p(_.children,w,C,M,_.el,_.anchor)},v=({el:_,anchor:w},C,M)=>{let T;for(;_&&_!==w;)T=h(_),r(_,C,M),_=T;r(w,C,M)},b=({el:_,anchor:w})=>{let C;for(;_&&_!==w;)C=h(_),s(_),_=C;s(w)},k=(_,w,C,M,T,E,L,F,B)=>{w.type==="svg"?L="svg":w.type==="math"&&(L="mathml"),_==null?P(w,C,M,T,E,L,F,B):S(_,w,T,E,L,F,B)},P=(_,w,C,M,T,E,L,F)=>{let B,z;const{props:N,shapeFlag:$,transition:H,dirs:K}=_;if(B=_.el=o(_.type,E,N&&N.is,N),$&8?c(B,_.children):$&16&&I(_.children,B,null,M,T,Es(_,E),L,F),K&&Ke(_,null,M,"created"),O(B,_,_.scopeId,L,M),N){for(const lt in N)lt!=="value"&&!Yn(lt)&&i(B,lt,null,N[lt],E,_.children,M,T,It);"value"in N&&i(B,"value",null,N.value,E),(z=N.onVnodeBeforeMount)&&de(z,M,_)}K&&Ke(_,null,M,"beforeMount");const et=nd(T,H);et&&H.beforeEnter(B),r(B,w,C),((z=N&&N.onVnodeMounted)||et||K)&&Rt(()=>{z&&de(z,M,_),et&&H.enter(B),K&&Ke(_,null,M,"mounted")},T)},O=(_,w,C,M,T)=>{if(C&&d(_,C),M)for(let E=0;E<M.length;E++)d(_,M[E]);if(T){let E=T.subTree;if(w===E){const L=T.vnode;O(_,L,L.scopeId,L.slotScopeIds,T.parent)}}},I=(_,w,C,M,T,E,L,F,B=0)=>{for(let z=B;z<_.length;z++){const N=_[z]=F?je(_[z]):ve(_[z]);m(null,N,w,C,M,T,E,L,F)}},S=(_,w,C,M,T,E,L)=>{const F=w.el=_.el;let{patchFlag:B,dynamicChildren:z,dirs:N}=w;B|=_.patchFlag&16;const $=_.props||dt,H=w.props||dt;let K;if(C&&Ze(C,!1),(K=H.onVnodeBeforeUpdate)&&de(K,C,w,_),N&&Ke(w,_,C,"beforeUpdate"),C&&Ze(C,!0),z?A(_.dynamicChildren,z,F,C,M,Es(w,T),E):L||nt(_,w,F,null,C,M,Es(w,T),E,!1),B>0){if(B&16)X(F,w,$,H,C,M,T);else if(B&2&&$.class!==H.class&&i(F,"class",null,H.class,T),B&4&&i(F,"style",$.style,H.style,T),B&8){const et=w.dynamicProps;for(let lt=0;lt<et.length;lt++){const ht=et[lt],St=$[ht],ee=H[ht];(ee!==St||ht==="value")&&i(F,ht,St,ee,T,_.children,C,M,It)}}B&1&&_.children!==w.children&&c(F,w.children)}else!L&&z==null&&X(F,w,$,H,C,M,T);((K=H.onVnodeUpdated)||N)&&Rt(()=>{K&&de(K,C,w,_),N&&Ke(w,_,C,"updated")},M)},A=(_,w,C,M,T,E,L)=>{for(let F=0;F<w.length;F++){const B=_[F],z=w[F],N=B.el&&(B.type===Lt||!an(B,z)||B.shapeFlag&70)?f(B.el):C;m(B,z,N,null,M,T,E,L,!0)}},X=(_,w,C,M,T,E,L)=>{if(C!==M){if(C!==dt)for(const F in C)!Yn(F)&&!(F in M)&&i(_,F,C[F],null,L,w.children,T,E,It);for(const F in M){if(Yn(F))continue;const B=M[F],z=C[F];B!==z&&F!=="value"&&i(_,F,z,B,L,w.children,T,E,It)}"value"in M&&i(_,"value",C.value,M.value,L)}},j=(_,w,C,M,T,E,L,F,B)=>{const z=w.el=_?_.el:a(""),N=w.anchor=_?_.anchor:a("");let{patchFlag:$,dynamicChildren:H,slotScopeIds:K}=w;K&&(F=F?F.concat(K):K),_==null?(r(z,C,M),r(N,C,M),I(w.children||[],C,N,T,E,L,F,B)):$>0&&$&64&&H&&_.dynamicChildren?(A(_.dynamicChildren,H,C,T,E,L,F),(w.key!=null||T&&w===T.subTree)&&Oc(_,w,!0)):nt(_,w,C,N,T,E,L,F,B)},R=(_,w,C,M,T,E,L,F,B)=>{w.slotScopeIds=F,_==null?w.shapeFlag&512?T.ctx.activate(w,C,M,L,B):U(w,C,M,T,E,L,B):rt(_,w,B)},U=(_,w,C,M,T,E,L)=>{const F=_.component=hd(_,M,T);if(hs(_)&&(F.ctx.renderer=Ie),dd(F),F.asyncDep){if(T&&T.registerDep(F,Q),!_.el){const B=F.subTree=zt(Kt);y(null,B,w,C)}}else Q(F,_,w,C,T,E,L)},rt=(_,w,C)=>{const M=w.component=_.component;if(vh(_,w,C))if(M.asyncDep&&!M.asyncResolved){Z(M,w,C);return}else M.next=w,fh(M.update),M.effect.dirty=!0,M.update();else w.el=_.el,M.vnode=w},Q=(_,w,C,M,T,E,L)=>{const F=()=>{if(_.isMounted){let{next:N,bu:$,u:H,parent:K,vnode:et}=_;{const dn=Bc(_);if(dn){N&&(N.el=et.el,Z(_,N,L)),dn.asyncDep.then(()=>{_.isUnmounted||F()});return}}let lt=N,ht;Ze(_,!1),N?(N.el=et.el,Z(_,N,L)):N=et,$&&Ms($),(ht=N.props&&N.props.onVnodeBeforeUpdate)&&de(ht,K,N,et),Ze(_,!0);const St=ks(_),ee=_.subTree;_.subTree=St,m(ee,St,f(ee.el),Xe(ee),_,T,E),N.el=St.el,lt===null&&gh(_,St.el),H&&Rt(H,T),(ht=N.props&&N.props.onVnodeUpdated)&&Rt(()=>de(ht,K,N,et),T)}else{let N;const{el:$,props:H}=w,{bm:K,m:et,parent:lt}=_,ht=Hr(w);if(Ze(_,!1),K&&Ms(K),!ht&&(N=H&&H.onVnodeBeforeMount)&&de(N,lt,w),Ze(_,!0),$&&Ye){const St=()=>{_.subTree=ks(_),Ye($,_.subTree,_,T,null)};ht?w.type.__asyncLoader().then(()=>!_.isUnmounted&&St()):St()}else{const St=_.subTree=ks(_);m(null,St,C,M,_,T,E),w.el=St.el}if(et&&Rt(et,T),!ht&&(N=H&&H.onVnodeMounted)){const St=w;Rt(()=>de(N,lt,St),T)}(w.shapeFlag&256||lt&&Hr(lt.vnode)&&lt.vnode.shapeFlag&256)&&_.a&&Rt(_.a,T),_.isMounted=!0,w=C=M=null}},B=_.effect=new ao(F,Yt,()=>mo(z),_.scope),z=_.update=()=>{B.dirty&&B.run()};z.id=_.uid,Ze(_,!0),z()},Z=(_,w,C)=>{w.component=_;const M=_.vnode.props;_.vnode=w,_.next=null,Kh(_,w.props,M,C),Jh(_,w.children,C),He(),aa(_),$e()},nt=(_,w,C,M,T,E,L,F,B=!1)=>{const z=_&&_.children,N=_?_.shapeFlag:0,$=w.children,{patchFlag:H,shapeFlag:K}=w;if(H>0){if(H&128){V(z,$,C,M,T,E,L,F,B);return}else if(H&256){D(z,$,C,M,T,E,L,F,B);return}}K&8?(N&16&&It(z,T,E),$!==z&&c(C,$)):N&16?K&16?V(z,$,C,M,T,E,L,F,B):It(z,T,E,!0):(N&8&&c(C,""),K&16&&I($,C,M,T,E,L,F,B))},D=(_,w,C,M,T,E,L,F,B)=>{_=_||_n,w=w||_n;const z=_.length,N=w.length,$=Math.min(z,N);let H;for(H=0;H<$;H++){const K=w[H]=B?je(w[H]):ve(w[H]);m(_[H],K,C,null,T,E,L,F,B)}z>N?It(_,T,E,!0,!1,$):I(w,C,M,T,E,L,F,B,$)},V=(_,w,C,M,T,E,L,F,B)=>{let z=0;const N=w.length;let $=_.length-1,H=N-1;for(;z<=$&&z<=H;){const K=_[z],et=w[z]=B?je(w[z]):ve(w[z]);if(an(K,et))m(K,et,C,null,T,E,L,F,B);else break;z++}for(;z<=$&&z<=H;){const K=_[$],et=w[H]=B?je(w[H]):ve(w[H]);if(an(K,et))m(K,et,C,null,T,E,L,F,B);else break;$--,H--}if(z>$){if(z<=H){const K=H+1,et=K<N?w[K].el:M;for(;z<=H;)m(null,w[z]=B?je(w[z]):ve(w[z]),C,et,T,E,L,F,B),z++}}else if(z>H)for(;z<=$;)tt(_[z],T,E,!0),z++;else{const K=z,et=z,lt=new Map;for(z=et;z<=H;z++){const Dt=w[z]=B?je(w[z]):ve(w[z]);Dt.key!=null&&lt.set(Dt.key,z)}let ht,St=0;const ee=H-et+1;let dn=!1,Ko=0;const Ln=new Array(ee);for(z=0;z<ee;z++)Ln[z]=0;for(z=K;z<=$;z++){const Dt=_[z];if(St>=ee){tt(Dt,T,E,!0);continue}let he;if(Dt.key!=null)he=lt.get(Dt.key);else for(ht=et;ht<=H;ht++)if(Ln[ht-et]===0&&an(Dt,w[ht])){he=ht;break}he===void 0?tt(Dt,T,E,!0):(Ln[he-et]=z+1,he>=Ko?Ko=he:dn=!0,m(Dt,w[he],C,null,T,E,L,F,B),St++)}const Zo=dn?rd(Ln):_n;for(ht=Zo.length-1,z=ee-1;z>=0;z--){const Dt=et+z,he=w[Dt],Qo=Dt+1<N?w[Dt+1].el:M;Ln[z]===0?m(null,he,C,Qo,T,E,L,F,B):dn&&(ht<0||z!==Zo[ht]?Vt(he,C,Qo,2):ht--)}}},Vt=(_,w,C,M,T=null)=>{const{el:E,type:L,transition:F,children:B,shapeFlag:z}=_;if(z&6){Vt(_.component.subTree,w,C,M);return}if(z&128){_.suspense.move(w,C,M);return}if(z&64){L.move(_,w,C,Ie);return}if(L===Lt){r(E,w,C);for(let $=0;$<B.length;$++)Vt(B[$],w,C,M);r(_.anchor,w,C);return}if(L===Fs){v(_,w,C);return}if(M!==2&&z&1&&F)if(M===0)F.beforeEnter(E),r(E,w,C),Rt(()=>F.enter(E),T);else{const{leave:$,delayLeave:H,afterLeave:K}=F,et=()=>r(E,w,C),lt=()=>{$(E,()=>{et(),K&&K()})};H?H(E,et,lt):lt()}else r(E,w,C)},tt=(_,w,C,M=!1,T=!1)=>{const{type:E,props:L,ref:F,children:B,dynamicChildren:z,shapeFlag:N,patchFlag:$,dirs:H}=_;if(F!=null&&Mi(F,null,C,_,!0),N&256){w.ctx.deactivate(_);return}const K=N&1&&H,et=!Hr(_);let lt;if(et&&(lt=L&&L.onVnodeBeforeUnmount)&&de(lt,w,_),N&6)te(_.component,C,M);else{if(N&128){_.suspense.unmount(C,M);return}K&&Ke(_,null,w,"beforeUnmount"),N&64?_.type.remove(_,w,C,T,Ie,M):z&&(E!==Lt||$>0&&$&64)?It(z,w,C,!1,!0):(E===Lt&&$&384||!T&&N&16)&&It(B,w,C),M&&kt(_)}(et&&(lt=L&&L.onVnodeUnmounted)||K)&&Rt(()=>{lt&&de(lt,w,_),K&&Ke(_,null,w,"unmounted")},C)},kt=_=>{const{type:w,el:C,anchor:M,transition:T}=_;if(w===Lt){fe(C,M);return}if(w===Fs){b(_);return}const E=()=>{s(C),T&&!T.persisted&&T.afterLeave&&T.afterLeave()};if(_.shapeFlag&1&&T&&!T.persisted){const{leave:L,delayLeave:F}=T,B=()=>L(C,E);F?F(_.el,E,B):B()}else E()},fe=(_,w)=>{let C;for(;_!==w;)C=h(_),s(_),_=C;s(w)},te=(_,w,C)=>{const{bum:M,scope:T,update:E,subTree:L,um:F}=_;M&&Ms(M),T.stop(),E&&(E.active=!1,tt(L,_,w,C)),F&&Rt(F,w),Rt(()=>{_.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve())},It=(_,w,C,M=!1,T=!1,E=0)=>{for(let L=E;L<_.length;L++)tt(_[L],w,C,M,T)},Xe=_=>_.shapeFlag&6?Xe(_.component.subTree):_.shapeFlag&128?_.suspense.next():h(_.anchor||_.el);let Te=!1;const ke=(_,w,C)=>{_==null?w._vnode&&tt(w._vnode,null,null,!0):m(w._vnode||null,_,w,null,null,null,C),Te||(Te=!0,aa(),xc(),Te=!1),w._vnode=_},Ie={p:m,um:tt,m:Vt,r:kt,mt:U,mc:I,pc:nt,pbc:A,n:Xe,o:e};let Rn,Ye;return{render:ke,hydrate:Rn,createApp:qh(ke,Rn)}}function Es({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Ze({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function nd(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Oc(e,t,n=!1){const r=e.children,s=t.children;if(q(r)&&q(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=je(s[i]),a.el=o.el),n||Oc(o,a)),a.type===ms&&(a.el=o.el)}}function rd(e){const t=e.slice(),n=[0];let r,s,i,o,a;const l=e.length;for(r=0;r<l;r++){const u=e[r];if(u!==0){if(s=n[n.length-1],e[s]<u){t[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,e[n[a]]<u?i=a+1:o=a;u<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}function Bc(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Bc(t)}const sd=e=>e.__isTeleport,Lt=Symbol.for("v-fgt"),ms=Symbol.for("v-txt"),Kt=Symbol.for("v-cmt"),Fs=Symbol.for("v-stc"),Jn=[];let le=null;function me(e=!1){Jn.push(le=e?null:[])}function id(){Jn.pop(),le=Jn[Jn.length-1]||null}let ur=1;function ga(e){ur+=e}function Rc(e){return e.dynamicChildren=ur>0?le||_n:null,id(),ur>0&&le&&le.push(e),e}function Oe(e,t,n,r,s,i){return Rc(se(e,t,n,r,s,i,!0))}function Lc(e,t,n,r,s){return Rc(zt(e,t,n,r,s,!0))}function Ti(e){return e?e.__v_isVNode===!0:!1}function an(e,t){return e.type===t.type&&e.key===t.key}const jc=({key:e})=>e??null,Vr=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?bt(e)||Ut(e)||J(e)?{i:ae,r:e,k:t,f:!!n}:e:null);function se(e,t=null,n=null,r=0,s=null,i=e===Lt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&jc(t),ref:t&&Vr(t),scopeId:gc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ae};return a?(yo(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=bt(n)?8:16),ur>0&&!o&&le&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&le.push(l),l}const zt=od;function od(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===_h)&&(e=Kt),Ti(e)){const a=We(e,t,!0);return n&&yo(a,n),ur>0&&!i&&le&&(a.shapeFlag&6?le[le.indexOf(e)]=a:le.push(a)),a.patchFlag|=-2,a}if(vd(e)&&(e=e.__vccOpts),t){t=ad(t);let{class:a,style:l}=t;a&&!bt(a)&&(t.class=_r(a)),ft(l)&&(lc(l)&&!q(l)&&(l=At({},l)),t.style=oo(l))}const o=bt(e)?1:yh(e)?128:sd(e)?64:ft(e)?4:J(e)?2:0;return se(e,t,n,r,s,o,i,!0)}function ad(e){return e?lc(e)||Tc(e)?At({},e):e:null}function We(e,t,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:l}=e,u=t?cd(s||{},t):s,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&jc(u),ref:t&&t.ref?n&&i?q(i)?i.concat(Vr(t)):[i,Vr(t)]:Vr(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Lt?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&We(e.ssContent),ssFallback:e.ssFallback&&We(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&r&&(c.transition=l.clone(c)),c}function ld(e=" ",t=0){return zt(ms,null,e,t)}function pn(e="",t=!1){return t?(me(),Lc(Kt,null,e)):zt(Kt,null,e)}function ve(e){return e==null||typeof e=="boolean"?zt(Kt):q(e)?zt(Lt,null,e.slice()):typeof e=="object"?je(e):zt(ms,null,String(e))}function je(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:We(e)}function yo(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(q(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),yo(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!Tc(t)?t._ctx=ae:s===3&&ae&&(ae.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else J(t)?(t={default:t,_ctx:ae},n=32):(t=String(t),r&64?(n=16,t=[ld(t)]):n=8);e.children=t,e.shapeFlag|=n}function cd(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=_r([t.class,r.class]));else if(s==="style")t.style=oo([t.style,r.style]);else if(os(s)){const i=t[s],o=r[s];o&&i!==o&&!(q(i)&&i.includes(o))&&(t[s]=i?[].concat(i,o):o)}else s!==""&&(t[s]=r[s])}return t}function de(e,t,n,r=null){Qt(e,t,7,[n,r])}const ud=Sc();let fd=0;function hd(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||ud,i={uid:fd++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Bf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ic(r,s),emitsOptions:vc(r,s),emit:null,emitted:null,propsDefaults:dt,inheritAttrs:r.inheritAttrs,ctx:dt,data:dt,props:dt,attrs:dt,slots:dt,refs:dt,setupState:dt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=ph.bind(null,i),e.ce&&e.ce(i),i}let Ft=null;const Nc=()=>Ft||ae;let Jr,ki;{const e=Vl(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Jr=t("__VUE_INSTANCE_SETTERS__",n=>Ft=n),ki=t("__VUE_SSR_SETTERS__",n=>vs=n)}const yr=e=>{const t=Ft;return Jr(e),e.scope.on(),()=>{e.scope.off(),Jr(t)}},_a=()=>{Ft&&Ft.scope.off(),Jr(null)};function Uc(e){return e.vnode.shapeFlag&4}let vs=!1;function dd(e,t=!1){t&&ki(t);const{props:n,children:r}=e.vnode,s=Uc(e);Yh(e,n,s,t),Qh(e,r);const i=s?pd(e,t):void 0;return t&&ki(!1),i}function pd(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Uh);const{setup:r}=n;if(r){const s=e.setupContext=r.length>1?md(e):null,i=yr(e);He();const o=De(r,e,0,[e.props,s]);if($e(),i(),Dl(o)){if(o.then(_a,_a),t)return o.then(a=>{ya(e,a,t)}).catch(a=>{us(a,e,0)});e.asyncDep=o}else ya(e,o,t)}else Dc(e,t)}function ya(e,t,n){J(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ft(t)&&(e.setupState=fc(t)),Dc(e,n)}let ba;function Dc(e,t,n){const r=e.type;if(!e.render){if(!t&&ba&&!r.render){const s=r.template||go(e).template;if(s){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:l}=r,u=At(At({isCustomElement:i,delimiters:a},o),l);r.render=ba(s,u)}}e.render=r.render||Yt}{const s=yr(e);He();try{Dh(e)}finally{$e(),s()}}}const xd={get(e,t){return Nt(e,"get",""),e[t]}};function md(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,xd),slots:e.slots,emit:e.emit,expose:t}}function bo(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(fc(sh(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Zn)return Zn[n](e)},has(t,n){return n in t||n in Zn}}))}function vd(e){return J(e)&&"__vccOpts"in e}const wo=(e,t)=>ih(e,t,vs);function gd(e,t,n){const r=arguments.length;return r===2?ft(t)&&!q(t)?Ti(t)?zt(e,null,[t]):zt(e,t):zt(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ti(n)&&(n=[n]),zt(e,t,n))}const _d="3.4.27";/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const yd="http://www.w3.org/2000/svg",bd="http://www.w3.org/1998/Math/MathML",Ne=typeof document<"u"?document:null,wa=Ne&&Ne.createElement("template"),wd={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?Ne.createElementNS(yd,e):t==="mathml"?Ne.createElementNS(bd,e):Ne.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>Ne.createTextNode(e),createComment:e=>Ne.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ne.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const o=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{wa.innerHTML=r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e;const a=wa.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Ee="transition",jn="animation",fr=Symbol("_vtc"),tr=(e,{slots:t})=>gd(Th,Cd(e),t);tr.displayName="Transition";const Gc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};tr.props=At({},yc,Gc);const Qe=(e,t=[])=>{q(e)?e.forEach(n=>n(...t)):e&&e(...t)},Ca=e=>e?q(e)?e.some(t=>t.length>1):e.length>1:!1;function Cd(e){const t={};for(const j in e)j in Gc||(t[j]=e[j]);if(e.css===!1)return t;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:u=o,appearToClass:c=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:d=`${n}-leave-to`}=e,p=Ad(s),m=p&&p[0],x=p&&p[1],{onBeforeEnter:y,onEnter:g,onEnterCancelled:v,onLeave:b,onLeaveCancelled:k,onBeforeAppear:P=y,onAppear:O=g,onAppearCancelled:I=v}=t,S=(j,R,U)=>{Je(j,R?c:a),Je(j,R?u:o),U&&U()},A=(j,R)=>{j._isLeaving=!1,Je(j,f),Je(j,d),Je(j,h),R&&R()},X=j=>(R,U)=>{const rt=j?O:g,Q=()=>S(R,j,U);Qe(rt,[R,Q]),Aa(()=>{Je(R,j?l:i),Fe(R,j?c:a),Ca(rt)||Sa(R,r,m,Q)})};return At(t,{onBeforeEnter(j){Qe(y,[j]),Fe(j,i),Fe(j,o)},onBeforeAppear(j){Qe(P,[j]),Fe(j,l),Fe(j,u)},onEnter:X(!1),onAppear:X(!0),onLeave(j,R){j._isLeaving=!0;const U=()=>A(j,R);Fe(j,f),Fe(j,h),Md(),Aa(()=>{j._isLeaving&&(Je(j,f),Fe(j,d),Ca(b)||Sa(j,r,x,U))}),Qe(b,[j,U])},onEnterCancelled(j){S(j,!1),Qe(v,[j])},onAppearCancelled(j){S(j,!0),Qe(I,[j])},onLeaveCancelled(j){A(j),Qe(k,[j])}})}function Ad(e){if(e==null)return null;if(ft(e))return[Os(e.enter),Os(e.leave)];{const t=Os(e);return[t,t]}}function Os(e){return Tf(e)}function Fe(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[fr]||(e[fr]=new Set)).add(t)}function Je(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const n=e[fr];n&&(n.delete(t),n.size||(e[fr]=void 0))}function Aa(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Sd=0;function Sa(e,t,n,r){const s=e._endId=++Sd,i=()=>{s===e._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:l}=Pd(e,t);if(!o)return r();const u=o+"end";let c=0;const f=()=>{e.removeEventListener(u,h),i()},h=d=>{d.target===e&&++c>=l&&f()};setTimeout(()=>{c<l&&f()},a+1),e.addEventListener(u,h)}function Pd(e,t){const n=window.getComputedStyle(e),r=p=>(n[p]||"").split(", "),s=r(`${Ee}Delay`),i=r(`${Ee}Duration`),o=Pa(s,i),a=r(`${jn}Delay`),l=r(`${jn}Duration`),u=Pa(a,l);let c=null,f=0,h=0;t===Ee?o>0&&(c=Ee,f=o,h=i.length):t===jn?u>0&&(c=jn,f=u,h=l.length):(f=Math.max(o,u),c=f>0?o>u?Ee:jn:null,h=c?c===Ee?i.length:l.length:0);const d=c===Ee&&/\b(transform|all)(,|$)/.test(r(`${Ee}Property`).toString());return{type:c,timeout:f,propCount:h,hasTransform:d}}function Pa(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>Ma(n)+Ma(e[r])))}function Ma(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Md(){return document.body.offsetHeight}function Td(e,t,n){const r=e[fr];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Ta=Symbol("_vod"),kd=Symbol("_vsh"),Id=Symbol(""),zd=/(^|;)\s*display\s*:/;function Ed(e,t,n){const r=e.style,s=bt(n);let i=!1;if(n&&!s){if(t)if(bt(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&qr(r,a,"")}else for(const o in t)n[o]==null&&qr(r,o,"");for(const o in n)o==="display"&&(i=!0),qr(r,o,n[o])}else if(s){if(t!==n){const o=r[Id];o&&(n+=";"+o),r.cssText=n,i=zd.test(n)}}else t&&e.removeAttribute("style");Ta in e&&(e[Ta]=i?r.display:"",e[kd]&&(r.display="none"))}const ka=/\s*!important$/;function qr(e,t,n){if(q(n))n.forEach(r=>qr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Fd(e,t);ka.test(n)?e.setProperty(In(r),n.replace(ka,""),"important"):e[r]=n}}const Ia=["Webkit","Moz","ms"],Bs={};function Fd(e,t){const n=Bs[t];if(n)return n;let r=Sn(t);if(r!=="filter"&&r in e)return Bs[t]=r;r=Hl(r);for(let s=0;s<Ia.length;s++){const i=Ia[s]+r;if(i in e)return Bs[t]=i}return t}const za="http://www.w3.org/1999/xlink";function Od(e,t,n,r,s){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(za,t.slice(6,t.length)):e.setAttributeNS(za,t,n);else{const i=Of(t);n==null||i&&!ql(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Bd(e,t,n,r,s,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,s,i),e[t]=n??"";return}const a=e.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){const u=a==="OPTION"?e.getAttribute("value")||"":e.value,c=n??"";(u!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let l=!1;if(n===""||n==null){const u=typeof e[t];u==="boolean"?n=ql(n):n==null&&u==="string"?(n="",l=!0):u==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function Rd(e,t,n,r){e.addEventListener(t,n,r)}function Ld(e,t,n,r){e.removeEventListener(t,n,r)}const Ea=Symbol("_vei");function jd(e,t,n,r,s=null){const i=e[Ea]||(e[Ea]={}),o=i[t];if(r&&o)o.value=r;else{const[a,l]=Nd(t);if(r){const u=i[t]=Gd(r,s);Rd(e,a,u,l)}else o&&(Ld(e,a,o,l),i[t]=void 0)}}const Fa=/(?:Once|Passive|Capture)$/;function Nd(e){let t;if(Fa.test(e)){t={};let r;for(;r=e.match(Fa);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):In(e.slice(2)),t]}let Rs=0;const Ud=Promise.resolve(),Dd=()=>Rs||(Ud.then(()=>Rs=0),Rs=Date.now());function Gd(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Qt(Wd(r,n.value),t,5,[r])};return n.value=e,n.attached=Dd(),n}function Wd(e,t){if(q(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const Oa=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Hd=(e,t,n,r,s,i,o,a,l)=>{const u=s==="svg";t==="class"?Td(e,r,u):t==="style"?Ed(e,n,r):os(t)?ro(t)||jd(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):$d(e,t,r,u))?Bd(e,t,r,i,o,a,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Od(e,t,r,u))};function $d(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&Oa(t)&&J(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Oa(t)&&bt(n)?!1:t in e}const Vd=At({patchProp:Hd},wd);let Ba;function qd(){return Ba||(Ba=td(Vd))}const Xd=(...e)=>{const t=qd().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=Kd(r);if(!s)return;const i=t._component;!J(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,Yd(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function Yd(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Kd(e){return bt(e)?document.querySelector(e):e}var Zd=`#version 300 es
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
}`;const Qd=Object.freeze(Object.defineProperty({__proto__:null,default:Zd},Symbol.toStringTag,{value:"Module"}));var Jd=`#version 300 es
precision highp float;
out vec4 fragColor;
uniform float u_time;
uniform vec2 u_resolution;
uniform sampler2D u_texture_1; 
uniform vec2 u_texture_1Resolution;
const float PI = 3.1415926;

vec2 rot(vec2 st,float t){
  mat2 rotate=mat2(cos(.5+t),sin(.5+t),-sin(.5+t),cos(.5+t));
  return st*rotate;
}

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec2 mod289(vec2 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec3 permute(vec3 x) {
  return mod289(((x*34.0)+1.0)*x);
}

float snoise(vec2 v)
  {
  const vec4 C = vec4(0.211324865405187,  
                      0.366025403784439,  
                     -0.577350269189626,  
                      0.024390243902439); 

  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);

  vec2 i1;
  
  
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  
  
  
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;

  i = mod289(i); 
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));

  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;

  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );

  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

#pragma glslify: export(snoise)

float nco(vec2 st, float seed) {

  vec2 st_f = vec2(floor(st.x * 2.0), floor(st.y * 3.0));
  float noise_1 = snoise(st_f + u_time * 0.02 + seed);
  
  vec2 st_f2 = floor(st * .10);
  float noise_2 = snoise(st_f2 + u_time * 0.01 + seed);

  vec2 st_m = mod(st * .40, 1.0);

  return
     cos(0.98 * noise_1 * snoise(vec2(st_m.x, st_m.x)) * 390.0)
   * cos(0.98 * noise_2 * snoise(vec2(st_m.x, st_m.y)) * 390.0);
}

void main(){

  float aspect = u_resolution.y/u_resolution.x;
  vec2 st = (2.0 * gl_FragCoord.xy -u_resolution.xy)/ min(u_resolution.x, u_resolution.y);

  
  

  vec3 co = vec3(
    pow(nco(st, .11) + abs(snoise(st)), .88)
    ,
    pow(nco(st, .1) + abs(snoise(st)), .88)
    ,
    pow(nco(st, .14) + abs(snoise(st)), .88)
  );

  

  fragColor = vec4(co,  1.0);
}`;const t0=Object.freeze(Object.defineProperty({__proto__:null,default:Jd},Symbol.toStringTag,{value:"Module"}));var e0=`#version 300 es
precision highp float;
out vec4 fragColor;
uniform float u_time;
uniform vec2 u_mouse;
uniform vec2 u_resolution;
uniform sampler2D u_texture_1; 
uniform vec2 u_texture_1Resolution;
const float PI = 3.1415926;

vec2 rot(vec2 st,float t){
  mat2 rotate=mat2(cos(.5+t),sin(.5+t),-sin(.5+t),cos(.5+t));
  return st*rotate;
}

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec2 mod289(vec2 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec3 permute(vec3 x) {
  return mod289(((x*34.0)+1.0)*x);
}

float snoise(vec2 v)
  {
  const vec4 C = vec4(0.211324865405187,  
                      0.366025403784439,  
                     -0.577350269189626,  
                      0.024390243902439); 

  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);

  vec2 i1;
  
  
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  
  
  
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;

  i = mod289(i); 
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));

  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;

  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );

  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

#pragma glslify: export(snoise)

float nco(vec2 st, float seed, float freq1, float freq2) {

  vec2 st_f = vec2(floor(st.x * freq1), floor(st.y * freq1));
  float noise_1 = snoise(st_f + u_time * 0.03 + seed);
  
  
  vec2 st_f2 = vec2(floor(st.x * freq2), floor(st.y * freq2));
  float noise_2 = snoise(st_f2 + u_time * 0.03 + seed);

  vec2 st_m = mod(st * 2.0, 1.0);

  return
     cos(noise_1 * snoise(vec2(st_m.x, st_m.x)) * 8.0 +  u_mouse.x / u_resolution.x)
   * cos(noise_2 * snoise(vec2(st_m.x, st_m.y)) * 8.0 +  u_mouse.y / u_resolution.y);
}

void main(){

  float aspect = u_resolution.y/u_resolution.x;
  vec2 st = (2.0 * gl_FragCoord.xy -u_resolution.xy)/ min(u_resolution.x, u_resolution.y);

  
  
  vec3 rgb = vec3(.0);

  
  
  
  
  
  
  

  for(int i = 0; i < 4; i++) {
    rgb.r += nco(st, .08, 2.0 + float(i), 16.0 + float(i) * 8.0);
    rgb.g += nco(st, .12, 2.0 + float(i), 16.0 + float(i) * 8.0) * 0.8;
    rgb.b += nco(st, .14, 2.0 + float(i), 16.0 + float(i) * 8.0) * .8;
  }

  

  fragColor = vec4(smoothstep(0.0, 2.0, rgb),  1.0);
}`;const n0=Object.freeze(Object.defineProperty({__proto__:null,default:e0},Symbol.toStringTag,{value:"Module"}));var r0=`#version 300 es
precision highp float;
precision highp int;

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

float smin(float a, float b, float k){
    float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
return mix(b, a, h) - k * h * (1.0 - h); 
}

const float PI = 3.1415926;
float atan2(float y, float x){
    if (x == 0.0){
        return sign(y) * PI / 2.0;
    } else {
        return atan(y, x);
    }
    
    
}
vec2 xy2pol(vec2 xy){
    return vec2(atan2(xy.y, xy.x), length(xy));
}
vec2 pol2xy(vec2 pol){
    return pol.y * vec2(cos(pol.x), sin(pol.x));
}

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

float gtable2(vec2 lattice, vec2 p){
    uvec2 n = floatBitsToUint(lattice);
    uint ind = uhash22(n).x >> 29;
    float u = 0.92387953 * (ind < 4u ? p.x : p.y);  
    float v = 0.38268343 * (ind < 4u ? p.y : p.x);  
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

        
        
        
        
        

        float texture = gnoise(vec3(st.x * 380.0, st.y * 380.0 - u_time * 3.20, 1.0));

        float mask = gnoise(vec3((st_oval) * 3.0, u_time_sp)) * 4.0;
        
        float mask_vec = smoothstep(.50, 2.9, mask * length(st * .820)) + texture;

        float th = 0.2;
        
        
        
        
        

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
          
          
          
          
          
          
          
        }
        
        
        

        
        
        
        
        
        
        
        
        

}`;const s0=Object.freeze(Object.defineProperty({__proto__:null,default:r0},Symbol.toStringTag,{value:"Module"}));var i0=`#version 300 es
precision highp float;
out vec4 fragColor;
uniform float u_time;
uniform vec2 u_resolution;
uniform sampler2D u_texture_1; 
uniform vec2 u_texture_1Resolution;
const float PI = 3.1415926;

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

float gtable2(vec2 lattice, vec2 p){
    uvec2 n = floatBitsToUint(lattice);
    uint ind = uhash22(n).x >> 29;
    float u = 0.92387953 * (ind < 4u ? p.x : p.y);  
    float v = 0.38268343 * (ind < 4u ? p.y : p.x);  
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
  
  
	float blob = smoothstep(
		.00001 + blur,  
		.0,
		smin(
			pow(periodicNoise21(t_pos, NUM_POLYGONS * 2.0 ), 1.0),
			pos.y,
			2.5
		)
	);
	fragColor = min(blur, blur2) * vec4(grad(pos + (smoothstep(.15, .96, pow(pos.y, waveform * 8.0) + .2)) * .4) * blob + noise.x + (1.0 - blob), 1.0);

  

  fragColor.rgb = 
    vec3(
      pow(min(blur, blur2), 3.5 * pos.y * pnoise31(vec3(st, 3.5))) + pnoise31(vec3(st, 4.3))
      
    ) * 5.0
    
    ;
  
}`;const o0=Object.freeze(Object.defineProperty({__proto__:null,default:i0},Symbol.toStringTag,{value:"Module"}));var a0=`#version 300 es
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

  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;

  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  
  
  
  
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy; 
  vec3 x3 = x0 - D.yyy;      

  i = mod289(i);
  vec4 p = permute( permute( permute(
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

  float n_ = 0.142857142857; 
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );    

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  
  
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                dot(p2,x2), dot(p3,x3) ) );
  }

#define NUM_OCTAVES 2
float fbm ( in vec2 _st, in float rad, in float rot_time) {
    float v = 0.0;
    float a = .5;
    vec2 shift = vec2(0.0);
    mat2 rot = mat2(cos(0.5 + rot_time), sin(0.5+ rot_time), -sin(0.5+ rot_time), cos(0.50+ rot_time));
    for (int i = 0; i < NUM_OCTAVES; ++i) {
        v += a * snoise(_st);
        _st =  rot* _st * 1.5 + shift;
        a *= 1.38 / rad / 7.2;
    }
    return ((v + 1.0) * 0.5);
}
float gate(in float center, in float threshold){
    float range =.05822482;
    return (smoothstep(center - range, center, threshold) - smoothstep(center, center + range, threshold));

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
        

        float circle = smoothstep(.0, rad, .02 + fbm(st * 1.2, rad  + sin(u_time_sp * .2) * .1, .2 * u_time_sp) * .2);
        float circle_g = smoothstep(.0, rad, .02 + fbm(st * 1.2, rad  + sin(u_time_sp * .32) * .1, .12 * u_time_sp) * .3) - circle;
        float circle_b = smoothstep(.1,rad, .02 + fbm(st * 2.2, rad  + sin(u_time_sp * .32) * .1, .132 * u_time_sp) * .43) - max(circle, circle_g);
        vec4 c1 = vec4(vec3(
          1.0 * circle * (1.0 - rad * 4.0),
          1.0 * circle_g * ( 1.0 - rad * 4.0),
          1.0 * circle_b * ( 1.0 - rad * 2.0)
        ), 1.0);
        

        fragColor = vec4(
          1.0 - mix(color0 * circle, color1 * circle_g, fbm(st * 1.04, rad  + sin(u_time_sp * .2) * .25, .32 * u_time_sp))
        , 1.0);

}`;const l0=Object.freeze(Object.defineProperty({__proto__:null,default:a0},Symbol.toStringTag,{value:"Module"}));var c0=`#version 300 es
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
  
  
  
  float angle=angle(st,center)/360.0;
  angle=fract(angle+u_time*.2);
  
  float red=1.;
  red=red*step(angle,.75);
  
  
  float size = 0.2;
  float min = .3;
  float width = 0.03;
  float arc=smoothstep(min*size,(min+.005)*size,rad)*smoothstep((min+width+.005)*size,(min+width)*size,rad);
  float notch=step(angle,.75);
  
  vec4 c1=vec4(vec3(color1*fract(q.x*angle+u_time*.42)+color0*fract(q.y*angle+u_time*.42))*arc*notch,1.);
  
  fragColor=c1;
  
  
}`;const u0=Object.freeze(Object.defineProperty({__proto__:null,default:c0},Symbol.toStringTag,{value:"Module"}));var f0=`#version 300 es
precision highp float;
precision highp int;

uniform float u_time;
uniform vec2 u_resolution;

vec3 color0 = vec3(255.0 / 255.0, 140.0 / 255.0, 80.0 / 255.0);
vec3 color1 = vec3(80.0 / 255.0, 190.0 / 255.0, 255.0 / 255.0);
vec3 color2 = vec3(140.0 / 255.0, 80.0 / 255.0, 255.0 / 255.0);

out vec4 fragColor;

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec2 mod289(vec2 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec3 permute(vec3 x) {
  return mod289(((x*34.0)+1.0)*x);
}

float snoise(vec2 v)
  {
  const vec4 C = vec4(0.211324865405187,  
                      0.366025403784439,  
                     -0.577350269189626,  
                      0.024390243902439); 

  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);

  vec2 i1;
  
  
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  
  
  
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;

  i = mod289(i); 
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));

  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;

  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );

  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

#pragma glslify: export(snoise)

#define NUM_OCTAVES 2
float fbm ( in vec2 _st, in float rad, in float rot_time) {
    float v = 0.0;
    float a = 1.5;
    vec2 shift = vec2(0.0);
    mat2 rot = mat2(cos(0.5 + rot_time), sin(0.5+ rot_time), -sin(0.5+ rot_time), cos(0.50+ rot_time));
    for (int i = 0; i < NUM_OCTAVES; ++i) {
        v += a * snoise(_st);
        _st =  rot * _st * 244.0 + shift;
        a *= 1.10 / rad / 4.2;
    }
    return ((v + 1.0) * 0.5);
}
float gate(in float center, in float threshold){
    float range =.05822482;
    return (smoothstep(center - range, center, threshold) - smoothstep(center, center + range, threshold));

}

void main(void)
{

        float aspect = u_resolution.y/u_resolution.x;
        float u_time_sp = u_time * .12 + 1000.0;
        vec2 st = vec2(gl_FragCoord.x/u_resolution.x, gl_FragCoord.y/u_resolution.y * aspect);
        
        float rad = distance(vec2(.5, .5 * aspect), st);

        float circle = step(rad, .2 + fbm(st * 1.2, rad  + sin(u_time_sp * .2) * .1, .2 * u_time_sp) * .22);
        float circle_g = step(rad, .08 + fbm(st * 1.2, rad  + sin(u_time_sp * .32) * .1, .12 * u_time_sp) * .43) - circle;

        fragColor = vec4(
          mix(
            color0 * circle,
            color1 * circle_g,
            fbm(st * .0, rad  + sin(u_time_sp * 3.2) * .1, 1.0)
          )
        , 1.0);

}`;const h0=Object.freeze(Object.defineProperty({__proto__:null,default:f0},Symbol.toStringTag,{value:"Module"}));var d0=`#version 300 es
precision highp float;
out vec4 fragColor;
uniform float u_time;
uniform vec2 u_resolution;
uniform sampler2D u_texture_1; 
uniform vec2 u_texture_1Resolution;
const float PI = 3.1415926;

vec2 rot(vec2 st,float t){
  mat2 rotate=mat2(cos(.5+t),sin(.5+t),-sin(.5+t),cos(.5+t));
  return st*rotate;
}

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec2 mod289(vec2 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec3 permute(vec3 x) {
  return mod289(((x*34.0)+1.0)*x);
}

float snoise(vec2 v)
  {
  const vec4 C = vec4(0.211324865405187,  
                      0.366025403784439,  
                     -0.577350269189626,  
                      0.024390243902439); 

  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);

  vec2 i1;
  
  
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  
  
  
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;

  i = mod289(i); 
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));

  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;

  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );

  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

#pragma glslify: export(snoise)

float nco(vec2 st, float seed) {

  vec2 st_f = vec2(floor(st.x * 2.0), floor(st.y * 3.0));
  float noise_1 = snoise(st_f + u_time * 0.02 + seed);
  
  vec2 st_f2 = floor(st * .10);
  float noise_2 = snoise(st_f2 + u_time * 0.01 + seed);

  vec2 st_m = mod(st * .40, 1.0);

  return
     cos(0.98 * noise_1 * snoise(vec2(st_m.x, st_m.x)) * 30.0)
   * cos(0.98 * noise_2 * snoise(vec2(st_m.x, st_m.y)) * 30.0);
}

void main(){

  float aspect = u_resolution.y/u_resolution.x;
  vec2 st = (2.0 * gl_FragCoord.xy -u_resolution.xy)/ min(u_resolution.x, u_resolution.y);

  
  

  vec3 co = vec3(
    pow(nco(st, .11) + abs(snoise(st)), .88)
    ,
    pow(nco(st, .1) + abs(snoise(st)), .88)
    ,
    pow(nco(st, .14) + abs(snoise(st)), .88)
  );

  

  fragColor = vec4(co,  1.0);
}`;const p0=Object.freeze(Object.defineProperty({__proto__:null,default:d0},Symbol.toStringTag,{value:"Module"}));var x0=`#version 300 es
precision highp float;
out vec4 fragColor;
uniform float u_time;
uniform vec2 u_resolution;
const float PI = 3.1415926;

#define PI 3.1415926535897932384626433832795
#define TWO_PI 6.28318530718

float smin(float a, float b, float k){
  float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
  return mix(b, a, h) - k * h * (1.0 - h); 
}

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec2 mod289(vec2 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec3 permute(vec3 x) {
  return mod289(((x*34.0)+1.0)*x);
}

float snoise(vec2 v)
  {
  const vec4 C = vec4(0.211324865405187,  
                      0.366025403784439,  
                     -0.577350269189626,  
                      0.024390243902439); 

  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);

  vec2 i1;
  
  
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  
  
  
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;

  i = mod289(i); 
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));

  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;

  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );

  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

#pragma glslify: export(snoise)
float random (in vec2 st) {
  return sin( sin(st.y + u_time * .002));
}
vec3 bgc_from = vec3(0.99607843, 0.89803922, 0.92156863);
vec3 bgc_to = vec3(0.81960784, 0.60392157, 0.68235294);

float sin_plus(float r) {
  return (sin(r) + 1.0) * 0.5;
}
vec2 rot(vec2 uv,float a){
    return vec2(uv.x*cos(a)-uv.y*sin(a),uv.y*cos(a)+uv.x*sin(a));
}
vec3 rot3(vec3 uv,float a){
	return vec3(uv.x*cos(a)-uv.y*sin(a) * tan(a),uv.y*cos(a)+uv.x*sin(a),uv.y*cos(a)+uv.x*sin(a));
}

float draw_sin( vec2 st, float freq, float phase, float weight, float amp, float modulator){
  return abs(weight/st.y);
}

float getpart(float x, float n, float i) {
  float modi = mod(i, n);
  return 
    step(modi / n, x)     
    *
    (1.0 - step((modi + 1.0) / n, x));    
}

float tri(float x) {
  return abs(x - .5) * 2.0;
}

float getpartphasor(float x, float n, float i, float strength) {
  float phase = fract(x * n);
  float part = getpart(x, n, i);
  
  
  return pow(1.0 - tri(phase), strength) * part;
}

void main(void){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec2 uv = st * 2.0 - 1.0;
    
    vec3 crt = vec3(.0);

    float time = (u_time * .241);

    vec2 stu = vec2(st.x, st.y);

    crt = vec3(
      getpartphasor(fract(stu.y * 55.0), 3.0, 0.0, 1.0) * getpartphasor(fract(stu.x * 102.0), 1.0, 1.0, 1.0),
      getpartphasor(fract(stu.y * 55.0), 3.0, 1.0, 1.0) * getpartphasor(fract(stu.x * 102.0), 1.0, 1.0, 1.0),
      getpartphasor(fract(stu.y * 55.0), 3.0, 2.0, 1.0) * getpartphasor(fract(stu.x * 102.0), 1.0, 1.0, 1.0) * sin_plus(time * 30.1)
    );

    crt.rg = rot(crt.rg, (time));

    fragColor = vec4(
      vec3(crt
      ),
    1.0);
}`;const m0=Object.freeze(Object.defineProperty({__proto__:null,default:x0},Symbol.toStringTag,{value:"Module"}));var v0=`#version 300 es
precision highp float;
out vec4 fragColor;
uniform float u_time;
uniform vec2 u_resolution;
const float PI = 3.1415926;

#define PI 3.1415926535897932384626433832795
#define TWO_PI 6.28318530718

float smin(float a, float b, float k){
  float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
  return mix(b, a, h) - k * h * (1.0 - h); 
}

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec2 mod289(vec2 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec3 permute(vec3 x) {
  return mod289(((x*34.0)+1.0)*x);
}

float snoise(vec2 v)
  {
  const vec4 C = vec4(0.211324865405187,  
                      0.366025403784439,  
                     -0.577350269189626,  
                      0.024390243902439); 

  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);

  vec2 i1;
  
  
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  
  
  
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;

  i = mod289(i); 
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));

  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;

  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );

  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

#pragma glslify: export(snoise)
float random (in vec2 st) {
  return sin( sin(st.y + u_time * .002));
}
vec3 bgc_from = vec3(0.99607843, 0.89803922, 0.92156863);
vec3 bgc_to = vec3(0.81960784, 0.60392157, 0.68235294);

float sin_plus(float r) {
  return (sin(r) + 1.0) * 0.5;
}
vec2 rot(vec2 uv,float a){
    return vec2(uv.x*cos(a)-uv.y*sin(a),uv.y*cos(a)+uv.x*sin(a));
}
vec3 rot3(vec3 uv,float a){
	return vec3(uv.x*cos(a)-uv.y*sin(a) * tan(a),uv.y*cos(a)+uv.x*sin(a),uv.y*cos(a)+uv.x*sin(a));
}

float draw_sin( vec2 st, float freq, float phase, float weight, float amp, float modulator){
  return abs(weight/st.y);
}

float getpart(float x, float n, float i) {
  float modi = mod(i, n);
  return 
    step(modi / n, x)     
    *
    (1.0 - step((modi + 1.0) / n, x));    
}

float tri(float x) {
  return abs(x - .5) * 2.0;
}

float getpartphasor(float x, float n, float i, float strength) {
  float phase = fract(x * n);
  float part = getpart(x, n, i);
  
  
  return pow(1.0 - tri(phase), strength) * part;
}

void main(void){
  vec2 st = gl_FragCoord.xy/u_resolution.xy;
  vec2 uv = st * 2.0 - 1.0;

  vec3 crt = vec3(
    getpartphasor(fract(st.y * .07 * u_resolution.x), 3.0, 0.0, .50) * getpartphasor(fract(st.x * 1.0), 1.0, 1.0, .40),
    getpartphasor(fract(st.y * .07 * u_resolution.x), 3.0, 1.0, .50) * getpartphasor(fract(st.x * 1.0), 1.0, 1.0, .40),
    getpartphasor(fract(st.y * .07 * u_resolution.x), 3.0, 2.0, .50) * getpartphasor(fract(st.x * 1.0), 1.0, 1.0, .40)
  );

  

  fragColor = vec4(
    vec3(crt
    ),
  1.0);
}`;const g0=Object.freeze(Object.defineProperty({__proto__:null,default:v0},Symbol.toStringTag,{value:"Module"}));var _0=`#version 300 es
precision highp float;
out vec4 fragColor;
uniform float u_time;
uniform vec2 u_resolution;
const float PI = 3.1415926;

#define PI 3.1415926535897932384626433832795
#define TWO_PI 6.28318530718

float smin(float a, float b, float k){
  float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
  return mix(b, a, h) - k * h * (1.0 - h); 
}

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec2 mod289(vec2 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec3 permute(vec3 x) {
  return mod289(((x*34.0)+1.0)*x);
}

float snoise(vec2 v)
  {
  const vec4 C = vec4(0.211324865405187,  
                      0.366025403784439,  
                     -0.577350269189626,  
                      0.024390243902439); 

  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);

  vec2 i1;
  
  
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  
  
  
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;

  i = mod289(i); 
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));

  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;

  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );

  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

#pragma glslify: export(snoise)
float random (in vec2 st) {
  return sin( sin(st.y + u_time * .002));
}
vec3 bgc_from = vec3(0.99607843, 0.89803922, 0.92156863);
vec3 bgc_to = vec3(0.81960784, 0.60392157, 0.68235294);

float sin_plus(float r) {
  return (sin(r) + 1.0) * 0.5;
}
vec2 rot(vec2 uv,float a){
    return vec2(uv.x*cos(a)-uv.y*sin(a),uv.y*cos(a)+uv.x*sin(a));
}
vec3 rot3(vec3 uv,float a){
	return vec3(uv.x*cos(a)-uv.y*sin(a) * tan(a),uv.y*cos(a)+uv.x*sin(a),uv.y*cos(a)+uv.x*sin(a));
}

float draw_sin( vec2 st, float freq, float phase, float weight, float amp, float modulator){
  return abs(weight/st.y);
}

float getpart(float x, float n, float i) {
  float modi = mod(i, n);
  return 
    step(modi / n, x)     
    *
    (1.0 - step((modi + 1.0) / n, x));    
}

float tri(float x) {
  return abs(x - .5) * 2.0;
}

float getpartphasor(float x, float n, float i, float strength) {
  float phase = fract(x * n);
  float part = getpart(x, n, i);
  
  
  return pow(1.0 - tri(phase), strength) * part;
}

void main(void){
  vec2 st = gl_FragCoord.xy/u_resolution.xy;
  vec2 uv = st * 2.0 - 1.0;

  vec3 crt = vec3(
    getpartphasor(fract(st.y * .07 * u_resolution.x), 2.50 + sin(u_time * .2), 0.0, .50) * getpartphasor(fract(st.x * 1.0), 1.0, 1.0, .40),
    getpartphasor(fract(st.y * .07 * u_resolution.x), 2.50 + sin(u_time * .2), 1.0, .50) * getpartphasor(fract(st.x * 1.0), 1.0, 1.0, .40),
    getpartphasor(fract(st.y * .07 * u_resolution.x), 2.50 + sin(u_time * .2), 2.0, .50) * getpartphasor(fract(st.x * 1.0), 1.0, 1.0, .40)
  );

  

  fragColor = vec4(
    vec3(crt
    ),
  1.0);
}`;const y0=Object.freeze(Object.defineProperty({__proto__:null,default:_0},Symbol.toStringTag,{value:"Module"}));var b0=`#version 300 es
precision highp float;
out vec4 fragColor;
uniform float u_time;
uniform vec2 u_resolution;
const float PI = 3.1415926;

#define PI 3.1415926535897932384626433832795
#define TWO_PI 6.28318530718

float smin(float a, float b, float k){
  float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
  return mix(b, a, h) - k * h * (1.0 - h); 
}

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec2 mod289(vec2 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec3 permute(vec3 x) {
  return mod289(((x*34.0)+1.0)*x);
}

float snoise(vec2 v)
  {
  const vec4 C = vec4(0.211324865405187,  
                      0.366025403784439,  
                     -0.577350269189626,  
                      0.024390243902439); 

  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);

  vec2 i1;
  
  
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  
  
  
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;

  i = mod289(i); 
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));

  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;

  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );

  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

#pragma glslify: export(snoise)
float random (in vec2 st) {
  return sin( sin(st.y + u_time * .002));
}
vec3 bgc_from = vec3(0.99607843, 0.89803922, 0.92156863);
vec3 bgc_to = vec3(0.81960784, 0.60392157, 0.68235294);

float sin_plus(float r) {
  return (sin(r) + 1.0) * 0.5;
}
vec2 rot(vec2 uv,float a){
    return vec2(uv.x*cos(a)-uv.y*sin(a),uv.y*cos(a)+uv.x*sin(a));
}
vec3 rot3(vec3 uv,float a){
	return vec3(uv.x*cos(a)-uv.y*sin(a) * tan(a),uv.y*cos(a)+uv.x*sin(a),uv.y*cos(a)+uv.x*sin(a));
}

float draw_sin( vec2 st, float freq, float phase, float weight, float amp, float modulator){
  return abs(weight/st.y);
}

float getpart(float x, float n, float i) {
  float modi = mod(i, n);
  return 
    step(modi / n, x)     
    *
    (1.0 - step((modi + 1.0) / n, x));    
}

float tri(float x) {
  return abs(x - .5) * 2.0;
}

float getpartphasor(float x, float n, float i) {
  float phase = fract(x * n);
  float part = getpart(x, n, i);
  
  
  return pow(1.0 - tri(phase), .04) * part;
}

void main(void){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec2 uv = st * 2.0 - 1.0;
    
    vec3 crt = vec3(.0);

    float time = (u_time * .08);

    vec2 stu = rot(st, -0.74) +  3.20 + fract(u_time * 0.211) * .42;

    crt = vec3(
      .2* snoise(st + time) + getpartphasor(fract(stu.y * 139.0), 3.0, 0.0 + (fract(time) * 3.0)) * getpartphasor(fract(stu.x * 90.0), 3.0, 0.0 + (fract(time) * 3.0)),
      .2* snoise(st + time * 0.233) + getpartphasor(fract(stu.y * 139.0), 3.0, 1.0 + (fract(time) * 3.0)) * getpartphasor(fract(stu.x * 90.0), 3.0, 1.0 + (fract(time) * 3.0)) * 0.5 + sin(u_time * .8) * .31,
      .42* snoise(st + time * 0.1) + getpartphasor(fract(stu.y * 139.0), 3.0, 2.0 + (fract(time) * 3.0)) * getpartphasor(fract(stu.x * 90.0), 3.0, 2.0 + (fract(time) * 3.0)) * 32.1 + sin(u_time * 1.0) * .52
    );

    crt.rg = rot(crt.rg, (time));

    fragColor = vec4(
      vec3(crt
      ),
    1.0);
}`;const w0=Object.freeze(Object.defineProperty({__proto__:null,default:b0},Symbol.toStringTag,{value:"Module"}));var C0=`#version 300 es
precision highp float;
out vec4 fragColor;
uniform float u_time;
uniform vec2 u_resolution;
const float PI = 3.1415926;

vec2 rot(vec2 st,float t){
  mat2 rotate=mat2(cos(.5+t),sin(.5+t),-sin(.5+t),cos(.5+t));
  return st*rotate;
}

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec2 mod289(vec2 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec3 permute(vec3 x) {
  return mod289(((x*34.0)+1.0)*x);
}

float snoise(vec2 v)
  {
  const vec4 C = vec4(0.211324865405187,  
                      0.366025403784439,  
                     -0.577350269189626,  
                      0.024390243902439); 

  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);

  vec2 i1;
  
  
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  
  
  
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;

  i = mod289(i); 
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));

  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;

  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );

  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

#pragma glslify: export(snoise)

float random (in vec2 st) {
  return sin( snoise(st) * sin(st.y + u_time * 1.0));
}

float smin(float a, float b, float k){
  float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
  return mix(b, a, h) - k * h * (1.0 - h); 
}

float noise (in vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    

    
    vec2 u = f*f*(3.0-2.0*f);
    u = smoothstep(0.,1.,f);
    u = step(fract(st.x + a * 0.4) + (0.1),f);

    
    return mix(a, b, u.x) +
            (c - a)* u.y * (1.0 - u.x) +
            (d - b) * u.x * u.y;
}

void main(){

  float aspect = u_resolution.y/u_resolution.x;
  vec2 st = (2.0 * gl_FragCoord.xy -u_resolution.xy)/ min(u_resolution.x, u_resolution.y);

  
  float n = noise(st * 2.0);
  float n2 = noise(st * 4.0);
  float n3 = noise(st * 8.0) * pow(fract(1.0 + dot(st.x, st.y)), 4.2);
  n3 += noise(st * 16.0) * pow(abs(1.0 *  dot(st.x, st.y)), 1.52);
  n3 += noise(st * 32.0) * pow(abs(1.0 *  dot(st.x, st.y)), .12) * .50;

  vec2 i = floor(st);
  vec2 f = fract(st);

  
  float a = random(i);
  float b = random(i + vec2(1.0, 0.0));
  float c = random(i + vec2(0.0, 1.0));
  float d = random(i + vec2(1.0, 1.0));

  

  
  vec2 u = f*f*(3.0-2.0*f);

  vec3 co = vec3( tan(smin( dot(st.x, st.y),n, n2 + n3) * .80)
  );
  

  fragColor = vec4(co,  1.0);
}`;const A0=Object.freeze(Object.defineProperty({__proto__:null,default:C0},Symbol.toStringTag,{value:"Module"}));var S0=`#version 300 es
precision highp float;
out vec4 fragColor;
uniform float u_time;
uniform vec2 u_resolution;
const float PI = 3.1415926;

vec2 rot(vec2 st,float t){
  mat2 rotate=mat2(cos(.5+t),sin(.5+t),-sin(.5+t),cos(.5+t));
  return st*rotate;
}

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec2 mod289(vec2 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec3 permute(vec3 x) {
  return mod289(((x*34.0)+1.0)*x);
}

float snoise(vec2 v)
  {
  const vec4 C = vec4(0.211324865405187,  
                      0.366025403784439,  
                     -0.577350269189626,  
                      0.024390243902439); 

  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);

  vec2 i1;
  
  
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  
  
  
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;

  i = mod289(i); 
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));

  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;

  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );

  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

#pragma glslify: export(snoise)

float random (in vec2 st) {
  float t = u_time * 0.25;
  return sin(sin(st.x + t * 1.0)* cos(st.y + t * -4.0));
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))
                 * 43758.5453123);
}

float noise (in vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    

    
    vec2 u = f*f*(3.0-2.0*f);
    
    u = step(fract(st.x * a * d ), f);

    
    return mix(a, b, u.x) +
            (c - a)* u.y * (1.0 - u.x) +
            (d - b) * u.x * u.y;
}

void main(){

  float aspect = u_resolution.y/u_resolution.x;
  vec2 st = (2.0 * gl_FragCoord.xy -u_resolution.xy)/ min(u_resolution.x, u_resolution.y);

  
  float n = noise(st * 1.0);
  float n2 = noise(st * 4.0 );

  vec2 i = floor(st);
  vec2 f = fract(st);

  
  float a = random(i);
  float b = random(i + vec2(1.0, 0.0));
  float c = random(i + vec2(0.0, 1.0));
  float d = random(i + vec2(1.0, 1.0));

  

  
  vec2 u = f*f*(3.0-2.0*f);

  vec3 co = vec3( step(n * 2.0, n2) * .9
  );
  

  fragColor = vec4(co,  1.0);
}`;const P0=Object.freeze(Object.defineProperty({__proto__:null,default:S0},Symbol.toStringTag,{value:"Module"}));var M0=`#version 300 es
precision highp float;
out vec4 fragColor;
uniform float u_time;
uniform vec2 u_resolution;
const float PI = 3.1415926;

vec2 rot(vec2 st,float t){
  mat2 rotate=mat2(cos(.5+t),sin(.5+t),-sin(.5+t),cos(.5+t));
  return st*rotate;
}

float smin(float a, float b, float k){
  float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
  return mix(b, a, h) - k * h * (1.0 - h); 
}
vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec2 mod289(vec2 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec3 permute(vec3 x) {
  return mod289(((x*34.0)+1.0)*x);
}

float snoise(vec2 v)
  {
  const vec4 C = vec4(0.211324865405187,  
                      0.366025403784439,  
                     -0.577350269189626,  
                      0.024390243902439); 

  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);

  vec2 i1;
  
  
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  
  
  
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;

  i = mod289(i); 
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));

  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;

  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );

  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

#pragma glslify: export(snoise)

float random (in vec2 st) {
  
    return fract((cos(st.x) + 3.0) * (sin(st.y) + 3.0) + fract(u_time * 0.05) * 4.0);
    
}

float noise (in vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);

  float a = random(i);
  float b = random(i + vec2(1.0, 0.0) * 0.12);
  float c = random(i + vec2(0.0, 1.0) * 0.12);
  float d = random(i + vec2(1.0, 1.0) * 0.12);

  vec2 u = smoothstep(0.,1.,f);

  u = vec2(pow(u.x, 1.0), pow(u.y, 1.0));

  
  return mix(mix(a, b, u[0]), mix(c, d, u[0]), u[1]);
}

void main(){

  float aspect = u_resolution.y/u_resolution.x;
  vec2 st = (20.0 * gl_FragCoord.xy -u_resolution.xy)/ min(u_resolution.x, u_resolution.y);

  
  
  vec3 co = vec3(
    fract(noise(st) * 3.0),
    smin(step(.2,fract(noise(st) * 4.0)), smoothstep(0.0, 1.0,fract(noise(st * .40) * 34.0)) , .3),
    smoothstep(.10, .95,fract(noise(st) * 1.0)) 
  );
  

  co = vec3(pow(mix(co.x, co.y, co.z * 3.0), 12.0));

  fragColor = vec4(co,  1.0);
}`;const T0=Object.freeze(Object.defineProperty({__proto__:null,default:M0},Symbol.toStringTag,{value:"Module"}));var k0=`#version 300 es
precision highp float;
out vec4 fragColor;
uniform float u_time;
uniform vec2 u_resolution;
const float PI = 3.1415926;

vec2 rot(vec2 st,float t){
  mat2 rotate=mat2(cos(.5+t),sin(.5+t),-sin(.5+t),cos(.5+t));
  return st*rotate;
}

vec3 rot3(vec3 uv,float a){
	return vec3(uv.x*cos(a)-uv.y*sin(a) * tan(a),uv.y*cos(a)+uv.x*sin(a),uv.y*cos(a)+uv.x*sin(a));
}
float smin(float a, float b, float k){
  float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
  return mix(b, a, h) - k * h * (1.0 - h); 
}
vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec2 mod289(vec2 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec3 permute(vec3 x) {
  return mod289(((x*34.0)+1.0)*x);
}

float snoise(vec2 v)
  {
  const vec4 C = vec4(0.211324865405187,  
                      0.366025403784439,  
                     -0.577350269189626,  
                      0.024390243902439); 

  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);

  vec2 i1;
  
  
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  
  
  
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;

  i = mod289(i); 
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));

  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;

  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );

  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

#pragma glslify: export(snoise)

float random (in vec2 st) {
  
    return fract((cos(st.x) + 3.0) * (sin(st.y) + 3.0) + fract(u_time * 0.05) * 4.0);
    
}

float noise (in vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);

  float a = random(i);
  float b = random(i + vec2(1.0, 0.0) * 0.12);
  float c = random(i + vec2(0.0, 1.0) * 0.12);
  float d = random(i + vec2(1.0, 1.0) * 0.12);

  vec2 u = smoothstep(0.,1.,f);

  u = vec2(pow(u.x, 1.0), pow(u.y, 1.0));

  
  return mix(mix(a, b, u[0]), mix(c, d, u[0]), u[1]);
}

void main(){

  float aspect = u_resolution.y/u_resolution.x;
  vec2 st = (44.0 * gl_FragCoord.xy -u_resolution.xy)/ min(u_resolution.x, u_resolution.y);

  
  
  vec3 co = vec3(
    fract(noise(st) * .20),
    smin(step(.2,fract(noise(st) * 4.0)), smoothstep(0.1, .90,fract(noise(st * .2) * 1.0)) , 2.3),
    smoothstep(.10, .95,fract(noise(st) * 1.0)) 
  );
  

  co = vec3(pow(mix(co.x, co.y, co.z * 3.0), 14.0)) * rot3(co, 7.6 + sin(u_time) * 0.01);

  fragColor = vec4(co,  1.0);
}`;const I0=Object.freeze(Object.defineProperty({__proto__:null,default:k0},Symbol.toStringTag,{value:"Module"}));var z0=`#version 300 es
precision highp float;
out vec4 fragColor;
uniform float u_time;
uniform vec2 u_resolution;
const float PI = 3.1415926;

vec2 rot(vec2 uv,float a){
    return vec2(uv.x*cos(a)-uv.y*sin(a),uv.y*cos(a)+uv.x*sin(a));
}

float sin_plus(float r) {
  return (sin(r) + 1.0) * 0.5;
}
float getpart(float x, float n, float i) {
  float modi = mod(i, n);
  return 
    step(modi / n, x)     
    *
    (1.0 - step((modi + 1.0) / n, x));    
}

float tri(float x) {
  return abs(x - .5) * 2.0;
}

float getpartphasor(float x, float n, float i, float strength) {
  float phase = fract(x * n);
  float part = getpart(x, n, i);
  
  
  return pow(1.0 - tri(phase), strength) * part;
}

vec3 rot3(vec3 uv,float a){
	return vec3(uv.x*cos(a)-uv.y*sin(a) * tan(a),uv.y*cos(a)+uv.x*sin(a),uv.y*cos(a)+uv.x*sin(a));
}
float smin(float a, float b, float k){
  float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
  return mix(b, a, h) - k * h * (1.0 - h); 
}
vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec2 mod289(vec2 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec3 permute(vec3 x) {
  return mod289(((x*34.0)+1.0)*x);
}

float snoise(vec2 v)
  {
  const vec4 C = vec4(0.211324865405187,  
                      0.366025403784439,  
                     -0.577350269189626,  
                      0.024390243902439); 

  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);

  vec2 i1;
  
  
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  
  
  
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;

  i = mod289(i); 
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));

  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;

  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );

  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

#pragma glslify: export(snoise)

float random (in vec2 st) {
  
    float a = fract((cos(st.x * PI * 0.5) + 3.0) * (sin(st.y * PI * 0.5) + 3.0) + (u_time * 0.05) * 4.0);

    float b = mod((cos(st.x * PI * 0.5) + 3.0) * (sin(st.y * PI * 0.5) + 3.0) + (u_time * 0.05) * 4.0, PI);

    

    return mix(a, b, step(0.5, fract(u_time * .10)));
    
}

float noise (in vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);

  float a = random(i);
  float b = random(i + vec2(1.0, 0.0) + PI);
  float c = random(i + vec2(0.0, 1.0) + PI);
  float d = random(i + vec2(1.0, 1.0) + PI);

  vec2 u = smoothstep(0.,1.,f);

  u = vec2(pow(u.x, 1.0), pow(u.y, 1.0));

  
  return mix(mix(a, b, u[0]), mix(c, d, u[0]), u[1]);
}

void main(){

  float aspect = u_resolution.y/u_resolution.x;

  vec2 st = ((10.0 * gl_FragCoord.xy) -u_resolution.xy)/ min(u_resolution.x, u_resolution.y);

  st = rot(st, .75 * PI);

  
  
  vec3 co = vec3(
    (noise(st) * .75),
    .1,
    smin(step(.2,fract(noise(st) * 4.0)), smoothstep(0.2, 1.0,(noise(st * 4.14) * 1.0)) , 2.8)
  );
  

  co = vec3(pow(mix(co.x, co.y, co.z * 4.0), 14.0)) ;

   vec3 crt = vec3(
      co.r * getpartphasor(fract(st.y * 1.0), 3.0, 0.0, 1.0) * getpartphasor(fract(st.x * 44.0), 1.0, 1.0, 1.0),
      co.g * getpartphasor(fract(st.y * 1.0), 3.0, 1.0, 1.0) * getpartphasor(fract(st.x * 44.0), 1.0, 1.0, 1.0),
      co.b * getpartphasor(fract(st.y * 1.0), 3.0, 2.0, 1.0) * getpartphasor(fract(st.x * 44.0), 1.0, 1.0, 1.0) * sin_plus(u_time * 30.1)
    );
  

  crt = rot3(crt, .11);
  

  fragColor = vec4(crt,  1.0);
}`;const E0=Object.freeze(Object.defineProperty({__proto__:null,default:z0},Symbol.toStringTag,{value:"Module"}));var F0=`#version 300 es
precision highp float;
out vec4 fragColor;
uniform float u_time;
uniform vec2 u_resolution;
const float PI = 3.1415926;

vec2 rot(vec2 uv,float a){
    return vec2(uv.x*cos(a)-uv.y*sin(a),uv.y*cos(a)+uv.x*sin(a));
}
float sin_plus(float r) {
  return (sin(r) + 1.0) * 0.5;
}
float getpart(float x, float n, float i) {
  float modi = mod(i, n);
  return 
    step(modi / n, x)     
    *
    (1.0 - step((modi + 1.0) / n, x));    
}

float tri(float x) {
  return abs(x - .5) * 2.0;
}

float getpartphasor(float x, float n, float i, float strength) {
  float phase = fract(x * n);
  float part = getpart(x, n, i);
  
  
  return pow(1.0 - tri(phase), strength) * part;
}

vec3 rot3(vec3 uv,float a){
	return vec3(uv.x*cos(a)-uv.y*sin(a) * tan(a),uv.y*cos(a)+uv.x*sin(a),uv.y*cos(a)+uv.x*sin(a));
}
float smin(float a, float b, float k){
  float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
  return mix(b, a, h) - k * h * (1.0 - h); 
}
vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec2 mod289(vec2 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec3 permute(vec3 x) {
  return mod289(((x*34.0)+1.0)*x);
}

float snoise(vec2 v)
  {
  const vec4 C = vec4(0.211324865405187,  
                      0.366025403784439,  
                     -0.577350269189626,  
                      0.024390243902439); 

  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);

  vec2 i1;
  
  
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  
  
  
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;

  i = mod289(i); 
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));

  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;

  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );

  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

#pragma glslify: export(snoise)

float random (in vec2 st) {
  
    float a = fract((cos(st.x * PI * 0.5) + 3.0) * (sin(st.y * PI * 0.5) + 3.0) + (u_time * 0.05) * 4.0);

    float b = mod((cos(st.x * PI * 0.5) + 3.0) * (sin(st.y * PI * 0.5) + 3.0) + (u_time * 0.05) * 4.0, PI);

    

    return mix(a, b, step(0.5, fract(u_time * .10)));
    
}

float noise (in vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);

  float a = random(i);
  float b = random(i + vec2(1.0, 0.0) + PI);
  float c = random(i + vec2(0.0, 1.0) + PI);
  float d = random(i + vec2(1.0, 1.0) + PI);

  vec2 u = smoothstep(0.,1.,f);

  u = vec2(pow(u.x, 1.0), pow(u.y, 1.0));

  
  return mix(mix(a, b, u[0]), mix(c, d, u[0]), u[1]);
}

void main(){

  float aspect = u_resolution.y/u_resolution.x;

  vec2 st = ((gl_FragCoord.xy) -u_resolution.xy)/ min(u_resolution.x, u_resolution.y);
  vec2 uv = st * 20.0;
  st = rot(st,  PI  * .75);

  
  
  vec3 co = vec3(
    (noise(st * 20.0) * .852),
    .1,
    smin(step(.2,fract(noise(st * 20.0) * 4.0)), smoothstep(0.2, 1.0,(noise(st * 20.0 * 4.14) * 1.0)) , 2.8)
  );
  

  co = vec3(pow(mix(co.x, co.y, co.z * 4.0), 14.0)) ;

  co = rot3(co, 2.2);

   vec3 crt = vec3(
      co.r * getpartphasor(fract(uv.y * 15.0), 3.0, 0.0, 1.0) * getpartphasor(fract(uv.x * 1.10), 1.0, 1.0, 1.0),
      co.g * getpartphasor(fract(uv.y * 15.0), 3.0, 1.0, 1.0) * getpartphasor(fract(uv.x * 1.10), 1.0, 1.0, 1.0),
      co.b * getpartphasor(fract(uv.y * 15.0), 3.0, 2.0, 1.0) * getpartphasor(fract(uv.x * 1.10), 1.0, 1.0, 1.0) * sin_plus(u_time * 1.1)
    );
  

  fragColor = vec4(crt,  1.0);
}`;const O0=Object.freeze(Object.defineProperty({__proto__:null,default:F0},Symbol.toStringTag,{value:"Module"}));var B0=`#version 300 es
precision highp float;
out vec4 fragColor;
uniform float u_time;
uniform vec2 u_resolution;
const float PI = 3.1415926;

vec2 rot(vec2 st,float t){
  mat2 rotate=mat2(cos(.5+t),sin(.5+t),-sin(.5+t),cos(.5+t));
  return st*rotate;
}

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec2 mod289(vec2 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec3 permute(vec3 x) {
  return mod289(((x*34.0)+1.0)*x);
}

float snoise(vec2 v)
  {
  const vec4 C = vec4(0.211324865405187,  
                      0.366025403784439,  
                     -0.577350269189626,  
                      0.024390243902439); 

  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);

  vec2 i1;
  
  
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  
  
  
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;

  i = mod289(i); 
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));

  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;

  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );

  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

#pragma glslify: export(snoise)

float random (in vec2 st) {
  return sin(tan(st.x + u_time * 0.04)* tan(st.y + u_time * 0.04));
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))
                 * 43758.5453123);
}

float noise (in vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    

    
    vec2 u = f*f*(3.0-2.0*f);
    
    u = step(fract(st.x * a + d ) + (.51), f);

    
    return mix(a, b, u.x) +
            (c - a)* u.y * (1.0 - u.x) +
            (d - b) * u.x * u.y;
}

void main(){

  float aspect = u_resolution.y/u_resolution.x;
  vec2 st = (2.0 * gl_FragCoord.xy -u_resolution.xy)/ min(u_resolution.x, u_resolution.y);

  
  float n = noise(st * .940 * 2.0);
  float n2 = noise(st * 2.30 );

  vec2 i = floor(st);
  vec2 f = fract(st);

  
  float a = random(i);
  float b = random(i + vec2(1.0, 0.0));
  float c = random(i + vec2(0.0, 1.0));
  float d = random(i + vec2(1.0, 1.0));

  

  
  vec2 u = f*f*(3.0-2.0*f);

  vec3 co = vec3( step(n * 2.0, n2)
  );
  

  fragColor = vec4(co,  1.0);
}`;const R0=Object.freeze(Object.defineProperty({__proto__:null,default:B0},Symbol.toStringTag,{value:"Module"}));var L0=`#version 300 es
precision highp float;
out vec4 fragColor;
uniform float u_time;
uniform vec2 u_resolution;
const float PI = 3.1415926;

vec2 rot(vec2 st,float t){
  mat2 rotate=mat2(cos(.5+t),sin(.5+t),-sin(.5+t),cos(.5+t));
  return st*rotate;
}

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec2 mod289(vec2 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec3 permute(vec3 x) {
  return mod289(((x*34.0)+1.0)*x);
}

float snoise(vec2 v)
  {
  const vec4 C = vec4(0.211324865405187,  
                      0.366025403784439,  
                     -0.577350269189626,  
                      0.024390243902439); 

  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);

  vec2 i1;
  
  
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  
  
  
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;

  i = mod289(i); 
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));

  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;

  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );

  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

#pragma glslify: export(snoise)

float random (in vec2 st) {
  return sin( snoise(st) * sin(st.y + u_time * .002));
}

float smin(float a, float b, float k){
  float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
  return mix(b, a, h) - k * h * (1.0 - h); 
}

float noise (in vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    

    
    vec2 u = f*f*(3.0-2.0*f);
    u = smoothstep(0.,1.,f);
    u = step(fract(st.x + a) + fract(0.5 * u_time),f);

    
    return mix(a, b, u.x) +
            (c - a)* u.y * (1.0 - u.x) +
            (d - b) * u.x * u.y;
}

void main(){

  float aspect = u_resolution.y/u_resolution.x;
  vec2 st = (2.0 * gl_FragCoord.xy -u_resolution.xy)/ min(u_resolution.x, u_resolution.y);

  
  float n = noise(st * 2.0);
  float n2 = noise(st * 4.0);
  float n3 = noise(st * 8.0);
  
  

  vec2 i = floor(st);
  vec2 f = fract(st);

  
  float a = random(i);
  float b = random(i + vec2(1.0, 0.0));
  float c = random(i + vec2(0.0, 1.0));
  float d = random(i + vec2(1.0, 1.0));

  

  
  vec2 u = f*f*(3.0-2.0*f);

  vec3 co = vec3( tan(smin( dot(st.x, st.y),n, n2 + n3) * .80)
  );

  co = sin(co*10000.0);
  

  fragColor = vec4(co,  1.0);
}`;const j0=Object.freeze(Object.defineProperty({__proto__:null,default:L0},Symbol.toStringTag,{value:"Module"}));var N0=`#version 300 es
precision highp float;
out vec4 fragColor;
uniform float u_time;
uniform vec2 u_resolution;
const float PI = 3.1415926;

vec2 rot(vec2 st,float t){
  mat2 rotate=mat2(cos(.5+t),sin(.5+t),-sin(.5+t),cos(.5+t));
  return st*rotate;
}

float smin(float a, float b, float k){
  float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
  return mix(b, a, h) - k * h * (1.0 - h); 
}
vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec2 mod289(vec2 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec3 permute(vec3 x) {
  return mod289(((x*34.0)+1.0)*x);
}

float snoise(vec2 v)
  {
  const vec4 C = vec4(0.211324865405187,  
                      0.366025403784439,  
                     -0.577350269189626,  
                      0.024390243902439); 

  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);

  vec2 i1;
  
  
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  
  
  
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;

  i = mod289(i); 
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));

  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;

  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );

  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

#pragma glslify: export(snoise)

float random (in vec2 st) {
  
    return fract((cos(st.x) + 3.0) * (sin(st.y) + 3.0) + fract(u_time * 0.05) * 4.0);
    
}

float noise (in vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);

  float a = random(i);
  float b = random(i + vec2(1.0, 0.0) * 0.12);
  float c = random(i + vec2(0.0, 1.0) * 0.12);
  float d = random(i + vec2(1.0, 1.0) * 0.12);

  vec2 u = smoothstep(0.,1.,f);

  u = vec2(pow(u.x, 1.0), pow(u.y, 1.0));

  
  return mix(mix(a, b, u[0]), mix(c, d, u[0]), u[1]);
}

void main(){

  float aspect = u_resolution.y/u_resolution.x;
  vec2 st = (20.0 * gl_FragCoord.xy -u_resolution.xy)/ min(u_resolution.x, u_resolution.y);

  
  
  vec3 co = vec3(
    fract(noise(st) * 3.0),
    1.0/smin(step(.2,fract(noise(st) * 4.0)), smoothstep(0.0, 1.0,fract(noise(st * .40) * 34.0)) , .3),
    1.0/smoothstep(.10, .95,fract(noise(st) * 1.0)) 
  );
  
  co = fract(co * 2.144);

  fragColor = vec4(co,  1.0);
}`;const U0=Object.freeze(Object.defineProperty({__proto__:null,default:N0},Symbol.toStringTag,{value:"Module"}));var D0=`#version 300 es
precision highp float;
out vec4 fragColor;
uniform float u_time;
uniform vec2 u_resolution;
const float PI = 3.1415926;

#define PI 3.1415926535897932384626433832795
#define TWO_PI 6.28318530718

float smin(float a, float b, float k){
  float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
  return mix(b, a, h) - k * h * (1.0 - h); 
}

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec2 mod289(vec2 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec3 permute(vec3 x) {
  return mod289(((x*34.0)+1.0)*x);
}

float snoise(vec2 v)
  {
  const vec4 C = vec4(0.211324865405187,  
                      0.366025403784439,  
                     -0.577350269189626,  
                      0.024390243902439); 

  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);

  vec2 i1;
  
  
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  
  
  
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;

  i = mod289(i); 
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));

  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;

  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );

  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

#pragma glslify: export(snoise)
float random (in vec2 st) {
  return sin( sin(st.y + u_time * .002));
}
vec3 bgc_from = vec3(0.99607843, 0.89803922, 0.92156863);
vec3 bgc_to = vec3(0.81960784, 0.60392157, 0.68235294);

float sin_plus(float r) {
  return (sin(r) + 1.0) * 0.5;
}
vec2 rot(vec2 uv,float a){
    return vec2(uv.x*cos(a)-uv.y*sin(a),uv.y*cos(a)+uv.x*sin(a));
}
vec3 rot3(vec3 uv,float a){
	return vec3(uv.x*cos(a)-uv.y*sin(a) * tan(a),uv.y*cos(a)+uv.x*sin(a),uv.y*cos(a)+uv.x*sin(a));
}

float draw_sin( vec2 st, float freq, float phase, float weight, float amp, float modulator){
  return abs(weight/st.y);
}

float getpart(float x, float n, float i) {
  float modi = mod(i, n);
  return 
    step(modi / n, x)     
    *
    (1.0 - step((modi + 1.0) / n, x));    
  
  
}

void main(void){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec2 uv = st * 2.0 - 1.0;
    
    float tri = (abs( fract(st.y * 112.0) - 0.5) - 0.25 )* 4.0;
    float tri_odd = max(0.0, tri);
    float tri_even = min(0.0, tri) * -1.0;

    vec3 crt = vec3(.0);

    float time = (u_time * .51);
    int il = 2;
    float fl = float(il);
    for(int i = 1; i < il; i++ ) {
      float fi = float(i);
      float loi = fi * .25;
      crt += 
        getpart(st.x, loi, time * 1.0 * (snoise(floor(st * loi * 40.0))))
        * 
        getpart(st.y, loi, time * .40 * (snoise(floor(st * loi * 20.0))));
    }

    fragColor = vec4(
      vec3(crt
      ),
    1.0);
}`;const G0=Object.freeze(Object.defineProperty({__proto__:null,default:D0},Symbol.toStringTag,{value:"Module"}));var W0=`#version 300 es
precision highp float;
out vec4 fragColor;
uniform float u_time;
uniform vec2 u_resolution;
const float PI = 3.1415926;

#define PI 3.1415926535897932384626433832795
#define TWO_PI 6.28318530718

float smin(float a, float b, float k){
  float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
  return mix(b, a, h) - k * h * (1.0 - h); 
}

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec2 mod289(vec2 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec3 permute(vec3 x) {
  return mod289(((x*34.0)+1.0)*x);
}

float snoise(vec2 v)
  {
  const vec4 C = vec4(0.211324865405187,  
                      0.366025403784439,  
                     -0.577350269189626,  
                      0.024390243902439); 

  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);

  vec2 i1;
  
  
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  
  
  
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;

  i = mod289(i); 
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));

  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;

  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );

  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

#pragma glslify: export(snoise)
float random (in vec2 st) {
  return sin( sin(st.y + u_time * .002));
}
vec3 bgc_from = vec3(0.99607843, 0.89803922, 0.92156863);
vec3 bgc_to = vec3(0.81960784, 0.60392157, 0.68235294);

float sin_plus(float r) {
  return (sin(r) + 1.0) * 0.5;
}
vec2 rot(vec2 uv,float a){
    return vec2(uv.x*cos(a)-uv.y*sin(a),uv.y*cos(a)+uv.x*sin(a));
}
vec3 rot3(vec3 uv,float a){
	return vec3(uv.x*cos(a)-uv.y*sin(a) * tan(a),uv.y*cos(a)+uv.x*sin(a),uv.y*cos(a)+uv.x*sin(a));
}

float draw_sin( vec2 st, float freq, float phase, float weight, float amp, float modulator){
  return abs(weight/st.y);
}

float getpart(float x, float n, float i) {
  float modi = mod(i, n);
  return 
    step(modi / n, x)     
    *
    (1.0 - step((modi + 1.0) / n, x));    
}

float tri(float x) {
  return abs(x - .5) * 2.0;
}

float getpartphasor(float x, float n, float i) {
  float phase = fract(x * n);
  float part = getpart(x, n, i);
  
  return pow(1.0 - tri(phase), .2) * part;
}

void main(void){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec2 uv = st * 2.0 - 1.0;
    
    float tri = (abs( fract(st.y * 112.0) - 0.5) - 0.25 )* 4.0;
    float tri_odd = max(0.0, tri);
    float tri_even = min(0.0, tri) * -1.0;

    vec3 crt = vec3(.0);

    float time = (u_time * .048);
    int il = 32;
    float fl = float(il);
    for(int i = 0 + int(fract(u_time * 24.0)); i < il * 2; i++ ) {
      float fi = float(i);
      crt += getpartphasor(st.x, fl, floor(time * fi * 1.0)) * getpartphasor(st.y, fl, fi * 1.0);
      crt += getpartphasor(st.x, fl, floor(time * fi * 2.0)) * getpartphasor(st.y, fl, fi * 4.0);
      crt += getpartphasor(st.x, fl, floor(time * fi * 4.0)) * getpartphasor(st.y, fl, fi * 8.0);
      crt += getpartphasor(st.x, fl, floor(time * fi * 23.0)) * getpartphasor(st.y, fl, fi * 3.0);
    }

    fragColor = vec4(
      vec3(crt
      ),
    1.0);
}`;const H0=Object.freeze(Object.defineProperty({__proto__:null,default:W0},Symbol.toStringTag,{value:"Module"}));var $0=`#version 300 es
precision highp float;
out vec4 fragColor;
uniform float u_time;
uniform vec2 u_resolution;
const float PI = 3.1415926;

#define PI 3.1415926535897932384626433832795
#define TWO_PI 6.28318530718

float smin(float a, float b, float k){
  float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
  return mix(b, a, h) - k * h * (1.0 - h); 
}

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec2 mod289(vec2 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec3 permute(vec3 x) {
  return mod289(((x*34.0)+1.0)*x);
}

float snoise(vec2 v)
  {
  const vec4 C = vec4(0.211324865405187,  
                      0.366025403784439,  
                     -0.577350269189626,  
                      0.024390243902439); 

  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);

  vec2 i1;
  
  
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  
  
  
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;

  i = mod289(i); 
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));

  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;

  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );

  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

#pragma glslify: export(snoise)
float random (in vec2 st) {
  return sin( sin(st.y + u_time * .002));
}
vec3 bgc_from = vec3(0.99607843, 0.89803922, 0.92156863);
vec3 bgc_to = vec3(0.81960784, 0.60392157, 0.68235294);

float sin_plus(float r) {
  return (sin(r) + 1.0) * 0.5;
}
vec2 rot(vec2 uv,float a){
    return vec2(uv.x*cos(a)-uv.y*sin(a),uv.y*cos(a)+uv.x*sin(a));
}
vec3 rot3(vec3 uv,float a){
	return vec3(uv.x*cos(a)-uv.y*sin(a) * tan(a),uv.y*cos(a)+uv.x*sin(a),uv.y*cos(a)+uv.x*sin(a));
}

float draw_sin( vec2 st, float freq, float phase, float weight, float amp, float modulator){
  return abs(weight/st.y);
}

float getpart(float x, float n, float i) {
  float modi = mod(i, n);
  return 
    step(modi / n, x)     
    *
    (1.0 - step((modi + 1.0) / n, x));    
}

float tri(float x) {
  return abs(x - .5) * 2.0;
}

float getpartphasor(float x, float n, float i) {
  float phase = fract(x * n);
  float part = getpart(x, n, i);
  
  return pow(1.0 - tri(phase), 1.0) * part;
}

void main(void){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec2 uv = st * 2.0 - 1.0;
    
    float tri = (abs( fract(st.y * 112.0) - 0.5) - 0.25 )* 4.0;
    float tri_odd = max(0.0, tri);
    float tri_even = min(0.0, tri) * -1.0;

    vec3 crt = vec3(.0);

    float time = (u_time * .8);
    int il = 3;
    float fl = float(il);

    crt = vec3(
      getpartphasor(fract(st.y * 3.0), 10.0, floor(fract(time) * 10.0)),
      getpartphasor(fract(st.y * 3.0), 10.0, 1.0 + floor(fract(time) * 10.0)),
      getpartphasor(fract(st.y * 3.0), 10.0, 2.0 + floor(fract(time) * 10.0))
    );

    fragColor = vec4(
      vec3(crt
      ),
    1.0);
}`;const V0=Object.freeze(Object.defineProperty({__proto__:null,default:$0},Symbol.toStringTag,{value:"Module"}));var q0=`#version 300 es
precision highp float;
out vec4 fragColor;
uniform float u_time;
uniform vec2 u_resolution;
const float PI = 3.1415926;

vec2 rot(vec2 uv,float a){
    return vec2(uv.x*cos(a)-uv.y*sin(a),uv.y*cos(a)+uv.x*sin(a));
}
float sin_plus(float r) {
  return (sin(r) + 1.0) * 0.5;
}
float getpart(float x, float n, float i) {
  float modi = mod(i, n);
  return 
    step(modi / n, x)     
    *
    (1.0 - step((modi + 1.0) / n, x));    
}

float tri(float x) {
  return abs(x - .5) * 2.0;
}

float getpartphasor(float x, float n, float i, float strength) {
  float phase = fract(x * n);
  float part = getpart(x, n, i);
  
  
  return pow(1.0 - tri(phase), strength) * part;
}

vec3 rot3(vec3 uv,float a){
	return vec3(uv.x*cos(a)-uv.y*sin(a) * tan(a),uv.y*cos(a)+uv.x*sin(a),uv.y*cos(a)+uv.x*sin(a));
}
float smin(float a, float b, float k){
  float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
  return mix(b, a, h) - k * h * (1.0 - h); 
}
vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec2 mod289(vec2 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec3 permute(vec3 x) {
  return mod289(((x*34.0)+1.0)*x);
}

float snoise(vec2 v)
  {
  const vec4 C = vec4(0.211324865405187,  
                      0.366025403784439,  
                     -0.577350269189626,  
                      0.024390243902439); 

  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);

  vec2 i1;
  
  
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  
  
  
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;

  i = mod289(i); 
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));

  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;

  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );

  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

#pragma glslify: export(snoise)

float random (in vec2 st) {
  
    float a = fract((cos(st.x * PI * 0.5) + 3.0) * (sin(st.y * PI * 0.5) + 3.0) + (u_time * 0.05) * 4.0);

    float b = mod((cos(st.x * PI * 0.5) + 3.0) * (sin(st.y * PI * 0.5) + 3.0) + (u_time * 0.05) * 4.0, PI);

    

    return mix(a, b, step(0.5, fract(u_time * .10)));
    
}

float noise (in vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);

  float a = random(i);
  float b = random(i + vec2(1.0, 0.0) + PI);
  float c = random(i + vec2(0.0, 1.0) + PI);
  float d = random(i + vec2(1.0, 1.0) + PI);

  vec2 u = smoothstep(0.,1.,f);

  u = vec2(pow(u.x, 1.0), pow(u.y, 1.0));

  
  return mix(mix(a, b, u[0]), mix(c, d, u[0]), u[1]);
}

void main(){

  float aspect = u_resolution.y/u_resolution.x;

  vec2 st = ((gl_FragCoord.xy) -u_resolution.xy)/ min(u_resolution.x, u_resolution.y);
  vec2 uv = st * 14.0;
  st *= 1.5;
  st.y += u_time * -0.01;
  st = rot(st,  PI  * .75);

  
  
  vec3 co = vec3(
    (noise(st * 12.0) * .852),
    .1,
    smin(step(.2,fract(noise(st * 12.0) * 4.0)), smoothstep(0.2, 1.0,(noise(st * 12.0 * 4.14) * 1.0)) , 2.8)
  );
  

  co = vec3(pow(mix(co.x, co.y, co.z * 4.0), 14.0)) ;

  co = rot3(co, 2.2);

   vec3 crt = vec3(
      co.r * getpartphasor(fract(uv.y * 8.0), 4.0, 0.0, .40) * getpartphasor(fract(uv.x * 4.10), .10, fract(u_time* 0.05) + 4.11, .4),
      co.g * getpartphasor(fract(uv.y * 8.0), 4.0, 1.0, .40) * getpartphasor(fract(uv.x * 4.10), .10, fract(u_time* 0.05) + 4.11, .4),
      co.b * getpartphasor(fract(uv.y * 8.0), 4.0, 2.0, .40) * getpartphasor(fract(uv.x * 4.10), .10, fract(u_time* 0.05) + 4.11, .4)
    );

  

  fragColor = vec4(crt,  1.0);
}`;const X0=Object.freeze(Object.defineProperty({__proto__:null,default:q0},Symbol.toStringTag,{value:"Module"}));var Y0=`#version 300 es
precision highp float;
out vec4 fragColor;
uniform float u_time;
uniform vec2 u_resolution;
const float PI = 3.1415926;

vec2 rot(vec2 st,float t){
  mat2 rotate=mat2(cos(.5+t),sin(.5+t),-sin(.5+t),cos(.5+t));
  return st*rotate;
}

float smin(float a, float b, float k){
  float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
  return mix(b, a, h) - k * h * (1.0 - h); 
}
vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec2 mod289(vec2 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec3 permute(vec3 x) {
  return mod289(((x*34.0)+1.0)*x);
}

float snoise(vec2 v)
  {
  const vec4 C = vec4(0.211324865405187,  
                      0.366025403784439,  
                     -0.577350269189626,  
                      0.024390243902439); 

  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);

  vec2 i1;
  
  
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  
  
  
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;

  i = mod289(i); 
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));

  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;

  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );

  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

#pragma glslify: export(snoise)

float random (in vec2 st) {
  
    return fract(cos(st.x) * sin(st.y) + fract(u_time * 0.05) * 4.0);
    
}

float noise (in vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);

  float a = random(i);
  float b = random(i + vec2(1.0, 0.0) * 0.12);
  float c = random(i + vec2(0.0, 1.0) * 0.12);
  float d = random(i + vec2(1.0, 1.0) * 0.12);

  vec2 u = smoothstep(0.,1.,f);

  u = vec2(pow(u.x, 1.90), pow(u.y, 1.90));

  
  return mix(mix(a, b, u[0]), mix(c, d, u[0]), u[1]);
}

void main(){

  float aspect = u_resolution.y/u_resolution.x;
  vec2 st = (14.0 * gl_FragCoord.xy -u_resolution.xy)/ min(u_resolution.x, u_resolution.y);

  
  float n = step(.985,fract(noise(st) * 8.0));
  n += step(.9995,fract(noise(st) * 4.0));
  n += step(.95,fract(noise(st) * 8.0));
  n += step(.95,fract(noise(st) * 16.0)) * .02;
  vec3 co = vec3(n * 1.0);
  

  fragColor = vec4(co,  1.0);
}`;const K0=Object.freeze(Object.defineProperty({__proto__:null,default:Y0},Symbol.toStringTag,{value:"Module"}));var Z0=`#version 300 es
precision highp float;
out vec4 fragColor;
uniform float u_time;
uniform vec2 u_resolution;
const float PI = 3.1415926;

vec2 rot(vec2 st,float t){
  mat2 rotate=mat2(cos(.5+t),sin(.5+t),-sin(.5+t),cos(.5+t));
  return st*rotate;
}

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec2 mod289(vec2 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec3 permute(vec3 x) {
  return mod289(((x*34.0)+1.0)*x);
}

float snoise(vec2 v)
  {
  const vec4 C = vec4(0.211324865405187,  
                      0.366025403784439,  
                     -0.577350269189626,  
                      0.024390243902439); 

  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);

  vec2 i1;
  
  
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  
  
  
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;

  i = mod289(i); 
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));

  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;

  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );

  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

#pragma glslify: export(snoise)

float random (in vec2 st) {
  return sin( snoise(st) * sin(st.y + u_time * .002));
}

float smin(float a, float b, float k){
  float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
  return mix(b, a, h) - k * h * (1.0 - h); 
}

float noise (in vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    

    
    vec2 u = f*f*(3.0-2.0*f);
    u = smoothstep(0.,1.,f);
    u = step(fract(st.x + a) + fract(0.5 * u_time),f);

    
    return mix(a, b, u.x) +
            (c - a)* u.y * (1.0 - u.x) +
            (d - b) * u.x * u.y;
}

void main(){

  float aspect = u_resolution.y/u_resolution.x;
  vec2 st = (2.0 * gl_FragCoord.xy -u_resolution.xy)/ min(u_resolution.x, u_resolution.y);

  
  float n = noise(st * 2.0);
  float n2 = noise(st * 4.0);
  float n3 = noise(st * 8.0);
  
  

  vec2 i = floor(st);
  vec2 f = fract(st);

  
  float a = random(i);
  float b = random(i + vec2(1.0, 0.0));
  float c = random(i + vec2(0.0, 1.0));
  float d = random(i + vec2(1.0, 1.0));

  

  
  vec2 u = f*f*(3.0-2.0*f);

  vec3 co = vec3( tan(smin( dot(st.x, st.y),n, n2 + n3) * .80)
  );

  co = sin(co*10000.0);
  

  fragColor = vec4(co,  1.0);
}`;const Q0=Object.freeze(Object.defineProperty({__proto__:null,default:Z0},Symbol.toStringTag,{value:"Module"}));var J0=`#version 300 es
precision highp float;
out vec4 fragColor;
uniform float u_time;
uniform vec2 u_resolution;
const float PI = 3.1415926;

vec2 rot(vec2 st,float t){
  mat2 rotate=mat2(cos(.5+t),sin(.5+t),-sin(.5+t),cos(.5+t));
  return st*rotate;
}

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec2 mod289(vec2 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec3 permute(vec3 x) {
  return mod289(((x*34.0)+1.0)*x);
}

float snoise(vec2 v)
  {
  const vec4 C = vec4(0.211324865405187,  
                      0.366025403784439,  
                     -0.577350269189626,  
                      0.024390243902439); 

  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);

  vec2 i1;
  
  
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  
  
  
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;

  i = mod289(i); 
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));

  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;

  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );

  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

#pragma glslify: export(snoise)

float random (in vec2 st) {
  return sin( snoise(st) * sin(st.y + u_time * .002));
}

float smin(float a, float b, float k){
  float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
  return mix(b, a, h) - k * h * (1.0 - h); 
}

float noise (in vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    

    
    vec2 u = f*f*(3.0-2.0*f);
    u = smoothstep(0.,1.,f);
    u = step(fract(st.x + a) + fract(0.5 * u_time),f);

    
    return mix(a, b, u.x) +
            (c - a)* u.y * (1.0 - u.x) +
            (d - b) * u.x * u.y;
}

void main(){

  float aspect = u_resolution.y/u_resolution.x;
  vec2 st = (2.0 * gl_FragCoord.xy -u_resolution.xy)/ min(u_resolution.x, u_resolution.y);

  
  float n = noise(st * 2.0);
  float n2 = noise(st * 122.0);
  float n3 = noise(st * 18.0);
  
  n3 += noise(st * 23.0) * pow(abs(1.0 *  dot(st.x, st.y)), 1.0) * .810;

  vec2 i = floor(st);
  vec2 f = fract(st);

  
  float a = random(i);
  float b = random(i + vec2(1.0, 0.0));
  float c = random(i + vec2(0.0, 1.0));
  float d = random(i + vec2(1.0, 1.0));

  

  
  vec2 u = f*f*(3.0-2.0*f);

  vec3 co = vec3( tan(smin( dot(st.x, st.y),n, n2 + n3) * .80)
  );

  co = sin(co*40000.0);
  

  fragColor = vec4(co,  1.0);
}`;const tp=Object.freeze(Object.defineProperty({__proto__:null,default:J0},Symbol.toStringTag,{value:"Module"}));var ep=`#version 300 es
precision highp float;
out vec4 fragColor;
uniform float u_time;
uniform vec2 u_mouse;
uniform vec2 u_resolution;
uniform sampler2D u_texture_1; 
uniform vec2 u_texture_1Resolution;
const float PI = 3.1415926;

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec2 mod289(vec2 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec3 permute(vec3 x) {
  return mod289(((x*34.0)+1.0)*x);
}

float snoise(vec2 v)
  {
  const vec4 C = vec4(0.211324865405187,  
                      0.366025403784439,  
                     -0.577350269189626,  
                      0.024390243902439); 

  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);

  vec2 i1;
  
  
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  
  
  
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;

  i = mod289(i); 
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));

  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;

  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );

  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

#pragma glslify: export(snoise)

float nco(vec2 st, float seed, float freq1, float freq2) {

  vec2 st_f = vec2(floor(st.x * freq1), floor(st.y * freq1));
  float noise_1 = snoise(st_f + u_time * .04 + seed + sin(u_time * .3) * 0.3);
  
  
  vec2 st_f2 = vec2(floor(st.x * freq2), floor(st.y * freq2));
  float noise_2 = snoise(st_f2 + u_time * .04 + seed + sin(u_time * .3) * 0.3);

  vec2 st_m = mod(st * 4.0, 1.0);

  return
     cos(noise_1 * snoise(vec2(st_m.x, st_m.x)) * 8.0 + 2.0 + u_mouse.x * .001)
   * cos(noise_2 * snoise(vec2(st_m.x, st_m.y)) * 8.0 + 2.0 + u_mouse.y * .001);
}

void main(){

  float aspect = u_resolution.y/u_resolution.x;
  vec2 st = (2.0 * gl_FragCoord.xy -u_resolution.xy)/ min(u_resolution.x, u_resolution.y);

  
  
  vec3 rgb = vec3(.0);

  
  
  
  
  
  
  

  for(int i = 0; i < 3; i++) {
    rgb.r += nco(st, .11, float(i), .0 + float(i) * 3.0);
    rgb.g += nco(st, .12, float(i), .0 + float(i) * 3.0) * 0.8;
    rgb.b += nco(st, .14, float(i), .0 + float(i) * 3.0) * .8;
  }

  

  fragColor = vec4(smoothstep(0.0, 1.0, rgb),  1.0);
}`;const np=Object.freeze(Object.defineProperty({__proto__:null,default:ep},Symbol.toStringTag,{value:"Module"}));var rp=`#version 300 es
precision highp float;
out vec4 fragColor;
uniform float u_time;
uniform vec2 u_mouse;
uniform vec2 u_resolution;
uniform sampler2D u_texture_1; 
uniform vec2 u_texture_1Resolution;
const float PI = 3.1415926;

vec2 skew(vec2 st,float deg){
  st.x=st.x+st.y*tan(deg*PI);
  return st;
}
vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec2 mod289(vec2 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec3 permute(vec3 x) {
  return mod289(((x*34.0)+1.0)*x);
}

float snoise(vec2 v)
  {
  const vec4 C = vec4(0.211324865405187,  
                      0.366025403784439,  
                     -0.577350269189626,  
                      0.024390243902439); 

  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);

  vec2 i1;
  
  
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  
  
  
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;

  i = mod289(i); 
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));

  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;

  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );

  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

#pragma glslify: export(snoise)

float nco(vec2 st, float seed, float freq1, float freq2) {

  
  vec2 st_f = vec2(
    floor(st.x * freq1 + sin(st.x * 4.0) * 20.0 + u_time ),
    floor(st.y * freq1 + cos(st.y * 4.0) * 20.0 + u_time )
  );

  
  float noise_1 = snoise(st_f + u_time * 1.01 + seed + sin(u_time * .1) * 0.3) * 
  
  snoise(st_f * 3.0 + u_time * .04 + seed + sin(u_time * 1.3) * 1.3);
  
  
  
  vec2 st_f2 = vec2(floor(st.x * freq2), floor(st.y * freq2));
  float noise_2 = snoise(st_f2 + u_time * .01 + seed + sin(u_time * .3) * 0.1);

  vec2 st_m = mod(st*freq1, 3.10 );
  st_m.y += u_time * -0.3;

  

  

  return
     cos(noise_1 * snoise(vec2(st_m.x, st_m.x)) * 7.0 + 2.0)
   * cos(noise_2 * snoise(vec2(st_m.x, st_m.y)) * 7.0 + 2.0);
}

void main(){

  float aspect = u_resolution.y/u_resolution.x;
  vec2 st = ( gl_FragCoord.xy)/ min(u_resolution.x, u_resolution.y);
  

  
  
  vec3 rgb = vec3(.0);

  
  
  
  
  
  
  

  for(int i = 0; i < 3; i++) {
    rgb.r += nco(st, .11, 1.0 + float(i), 8.0 + float(i) * 2.0);
    rgb.g += nco(st, .13, 1.0 + float(i), 8.0 + float(i) * 2.0);
    rgb.b += nco(st, .14, 1.0 + float(i), 8.0 + float(i) * 2.0);
  }

  

  
  
  

  
  
  

  fragColor = vec4(rgb,  1.0);
}`;const sp=Object.freeze(Object.defineProperty({__proto__:null,default:rp},Symbol.toStringTag,{value:"Module"}));var ip=`#version 300 es
precision highp float;
precision highp int;

uniform float u_time;
uniform vec2 u_resolution;

out vec4 fragColor;

vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }
float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187,  0.366025403784439, -0.577350269189626, 0.024390243902439);vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx); vec2 i1;i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz; x12.xy -= i1; i = mod289(i); vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);m = m*m ;    m = m*m ;vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;vec3 ox = floor(x + 0.5); vec3 a0 = x - ox; m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    vec3 g; g.x  = a0.x  * x0.x  + h.x  * x0.y; g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
}

#define NUM_OCTAVES 5

float fbm ( in vec2 _st, in float rad) {
    float v = 0.0;
    float a = .5;
    vec2 shift = vec2(0.0);
    
    mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.50));
    for (int i = 0; i < NUM_OCTAVES; ++i) {
        v += a * snoise(_st);
        _st =  rot* _st * 1.53998 + shift;
        a *= 1.38 / rad / 7.2;
    }
    return ((v + 1.0) * 0.5);
}
vec3 lines ( in vec2 st, in vec2 q, in float rad){
    vec3 c = vec3(0.0, 0, 0);
    vec3 l = vec3(1.0, 1.0, 1.0);
    
    for ( int i = 0; i < 10 ; i++ ){
      float fi = float(i);
        float il = fi * 0.5;
        float min = 0.02 ;
        float start = il * .31 + min; 
        float width = 0.1;
        
        
        l.x *= .9923 + snoise(vec2(fi * 0.4, .2 + u_time * 0.2)) * st.y * rad ;
        l.y -= 0.00023 + snoise(vec2(fi * .24, .2 + u_time * 0.12)) * st.y * rad;
        l.z -= 0.113923 + snoise(vec2(fi * .224, .2 + u_time * 0.0884)) * st.y * rad;
        
        float n = sin(il * 10.0 + 20.0);

        float edge = smoothstep(width, start + width + abs(snoise(st * q * n ) + 1.0) * .03 , rad);
        edge -= smoothstep(width + .03, start + abs(snoise(st * q * n) + 1.0 ) * .03 , rad);
        c+= l * edge;
    }
    

    return c;
}

void main(void)
{

        float aspect = u_resolution.y/u_resolution.x;

        float u_time_sp = u_time * .2 + 1000.0;

        vec2 st = vec2(gl_FragCoord.x/u_resolution.x, gl_FragCoord.y/u_resolution.y * aspect);
        
        float rad = distance(vec2(.5, .5 * aspect), st);

        vec2 q = vec2(0.);
        q.x = fbm( st + u_time* -0.04, rad);
        q.y = fbm( st + vec2(-0.004,-30.0), rad);

        float alpha = 1.0;
        float edge = step(rad, .075 + abs(snoise(st * q ) + 1.0 ) * .03 );
         edge -= step(rad, .073 + abs(snoise(st * q ) + 1.0) * .03 ) ;

        vec3 color = lines(st, q, rad);
         
         
        vec4 c1 = vec4(color, alpha);
        

        fragColor = c1;

}`;const op=Object.freeze(Object.defineProperty({__proto__:null,default:ip},Symbol.toStringTag,{value:"Module"}));var ap=`#version 300 es
precision highp float;
precision highp int;

uniform float u_time;
uniform vec2 u_resolution;

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

#define NUM_OCTAVES 3

float fbm ( in vec2 _st) {
  float v = 0.0;
  float a = 1.55;
  vec2 shift = vec2(0.0);
  mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.50));
  for (int i = 0; i < NUM_OCTAVES; ++i) {
      v += a * snoise(_st);
      _st = rot* _st * 3.1 + shift;
      a *= .25;
  }
  return ((v + 1.0) * 0.5);
}

void main(void) {
vec3 color0 = vec3(2.0 / 255.0, 2.0 / 255.0, 215.0 / 255.0);
vec3 color1 = vec3(146.0 /255.0, 5.0 / 255.0, 27.0 / 255.0);

float aspect = u_resolution.y/u_resolution.x;

float u_time_sp = u_time * .2 + 1000.0;

vec2 st = vec2(gl_FragCoord.x/u_resolution.x, gl_FragCoord.y/u_resolution.y * aspect);

float rad = distance(vec2(.5, .5 * aspect * fbm(st * 1.2 + u_time * .141)), st) * .8;
float rad2 = distance(vec2(.5, .5 * aspect) * fbm(st * 4.2 + u_time * .041), st);

vec2 q = vec2(0.);
q.x = fbm( st + u_time* -0.02);
q.y = fbm( st + vec2(-1.004,-0.0));

float alpha = 0.5;

vec4 c0 = vec4(color0 + (snoise(vec2(rad * 5.2, rad2 * .4)) + 1.0) * 0.5, alpha);
vec4 c1 = vec4(color1 + (snoise(vec2(rad * 2.2, rad2 * .4)) + 1.0) * 0.5, alpha);

fragColor = (c1 * (fbm(st + 2.0 *q + u_time * 0.01) + 1.0) * 0.5) + (c0 * fbm(st * q + u_time * 0.03));

  fragColor.rgb = min(fragColor.rgb, vec3(1.0));
fragColor.a = 1.0;

}`;const lp=Object.freeze(Object.defineProperty({__proto__:null,default:ap},Symbol.toStringTag,{value:"Module"}));var cp=`#version 300 es
precision highp float;
out vec4 fragColor;
uniform float u_time;
uniform vec2 u_resolution;
uniform sampler2D u_texture_noise;
uniform vec2 u_texture_noiseResolution;
const float PI=3.1415926;
const float E=2.71828182846;

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

float gtable2(vec2 lattice,vec2 p){
  uvec2 n=floatBitsToUint(lattice);
  uint ind=uhash22(n).x>>29;
  float u=.92387953*(ind<4u?p.x:p.y);
  float v=.38268343*(ind<4u?p.y:p.x);
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

float wave(vec2 pos,float scale,float size,float phase){
  return pos.y+(sin(pos.x*scale+phase)*size);
}
vec2 rot(vec2 st,float t){
  mat2 rotate=mat2(cos(.5+t),sin(.5+t),-sin(.5+t),cos(.5+t));
  return st*rotate;
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

  

vec2 move(vec2 st,float val,float r){
  st.x+=sin(val)*r;
  st.y+=cos(val)*r;
  return st;
}

float NUM_POLYGONS=4.;

void main(){
  fragColor.a=1.;
  float texture_repeats=u_resolution.x/512.;
  
  
  float aspect=u_resolution.y/u_resolution.x;
  float offset=(((u_resolution.x-u_resolution.y)/u_resolution.x)*.5);
  float w=gl_FragCoord.x/u_resolution.x;
  float h=gl_FragCoord.y/u_resolution.y*aspect+offset;
  vec2 pos=vec2(w,h);
  float size=sin(u_time*2.2)*.5+1.293;
  
  vec2 st=(1.+size)*pos.xy-vec2(.5+(size*.5));
  float len=length(st.xy);
  float invl=1.-len;
  
  
  float balls=0.;
  float balls2=0.;
  float blur=pow(pnoise31(vec3(.75*st,u_time*1.1))*2.15*(invl+1.3)-.41,.40);
  for(int i=0;i<5;++i){
    float fi=float(i)+3.20;
    vec2 centeredST=pos*2.-1.;
    float ball=smoothstep(
      .0+blur*.5,
      .0,
      pnoise21(vec2(pos.x*5.5,pos.y*5.5-(u_time*fi*1.41)-fi*.10))*
      pnoise21(vec2(pos.x*.15,pos.y*.15-(u_time*fi*.1)-fi*.30))*1.40
    ) * (fi * 0.3) - length(st) * .1;
    balls+=ball+smin(ball*2.4,balls,.12);
  }
    
  vec3 colors=(grad(pos*2.+sin(u_time*.2)*.40));
  fragColor=vec4(
    colors+(2.-balls)+smoothstep(0.,.31*balls,pow(sigmoid(balls2),82.21))*.15,
    1.0
  );
  
  
  fragColor.rgb=min(fragColor.rgb,vec3(1.));
}`;const up=Object.freeze(Object.defineProperty({__proto__:null,default:cp},Symbol.toStringTag,{value:"Module"}));var fp=`#version 300 es

precision highp float;
out vec4 fragColor;
uniform float u_time;
uniform vec2 u_resolution;

const float PI = 3.1415926;
const float E = 2.71828182846;
float atan2(float y, float x){
    if (x == 0.0){
        return sign(y) * PI / 2.0;
    } else {
        return atan(y, x);
    }
    
    
}
vec2 xy2pol(vec2 xy){
    return vec2(atan2(xy.y, xy.x), length(xy));
}
vec2 pol2xy(vec2 pol){
    return pol.y * vec2(cos(pol.x), sin(pol.x));
}
float sigmoid(float val) {
  return 1.0 / (1.0 + pow(E, -val));
}
vec3 tex(vec2 st){
    vec3[3] col3 = vec3[](
        vec3(255.0 / 255.0, 140.0 / 255.0, 80.0 / 255.0),
        vec3(80.0 / 255.0, 190.0 / 255.0, 255.0 / 255.0),
        vec3(140.0 / 255.0, 80.0 / 255.0, 255.0 / 255.0)
    );
    st.s = st.s / PI + 1.0;
    int ind = int(st.s) ;
    vec3 col = mix(col3[ind % 2], col3[(ind + 1) % 2], fract(st.s));
    return mix(col3[2], col, st.t);
}

vec2 skew(vec2 st, float deg) {
  st.x = st.x + st.y * tan(deg * PI);
  return st;
}
vec2 rot(vec2 st, float deg) {
  return vec2(st.x * cos(deg) - st.y * sin(deg), st.x * sin(deg) + st.y * cos(deg));
}
vec2 move(vec2 st, float val, float r) {
  st.x += sin(val) * r;
  st.y += cos(val) * r;
  return st;

}

float smin(float a, float b, float k){
  float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
  return mix(b, a, h) - k * h * (1.0 - h); 
}
void main(){

    fragColor.a = 1.0;
    
    
    float aspect = u_resolution.y/u_resolution.x;
    float offset = (((u_resolution.x - u_resolution.y ) /u_resolution.x)  * .5);
    float w = gl_FragCoord.x/u_resolution.x;
    float h = gl_FragCoord.y/u_resolution.y * aspect + offset;
    vec2 pos = vec2( w, h);
    
    
    
    
    
    
    
    
    

    
    

    

    float balls = 0.0;

    for (int i = 0; i < 128; ++i) {
        float fi = float(i) + 1.0;
        vec2 centeredST = pos * 2.0 - 1.0;
        float ball = smoothstep(
            .2+ 0.1,
            .01 ,
            length(

              
              move(
                rot(centeredST * .40 + fi * .04, fi * 1.1),
                u_time + fi * 13.015 + (PI / fi / 2.0),
                sin(u_time * fi * 1.02 ) * .4+ fi * .0015
              )
            )
        );
        balls += ball + smin(ball, balls, .505) ;
        balls = balls;
        
        
      
    }

    fragColor.rgb = vec3( balls);
    
    
    
    
}`;const hp=Object.freeze(Object.defineProperty({__proto__:null,default:fp},Symbol.toStringTag,{value:"Module"}));var dp=`#version 300 es

precision highp float;
out vec4 fragColor;
uniform float u_time;
uniform vec2 u_resolution;
uniform sampler2D u_texture_1; 
uniform vec2 u_texture_1Resolution;

const float PI = 3.1415926;
const float E = 2.71828182846;
float atan2(float y, float x){
    if (x == 0.0){
        return sign(y) * PI / 2.0;
    } else {
        return atan(y, x);
    }
    
    
}
vec2 xy2pol(vec2 xy){
    return vec2(atan2(xy.y, xy.x), length(xy));
}
vec2 pol2xy(vec2 pol){
    return pol.y * vec2(cos(pol.x), sin(pol.x));
}
float sigmoid(float val) {
  return 1.0 / (1.0 + pow(E, -val));
}
vec3 tex(vec2 st){
    vec3[3] col3 = vec3[](
        vec3(255.0 / 255.0, 140.0 / 255.0, 80.0 / 255.0),
        vec3(80.0 / 255.0, 190.0 / 255.0, 255.0 / 255.0),
        vec3(140.0 / 255.0, 80.0 / 255.0, 255.0 / 255.0)
    );
    st.s = st.s / PI + 1.0;
    int ind = int(st.s) ;
    vec3 col = mix(col3[ind % 2], col3[(ind + 1) % 2], fract(st.s));
    return mix(col3[2], col, st.t);
}

vec2 skew(vec2 st, float deg) {
  st.x = st.x + st.y * tan(deg * PI);
  return st;
}
vec2 rot(vec2 st, float deg) {
  return vec2(st.x * cos(deg) - st.y * sin(deg), st.x * sin(deg) + st.y * cos(deg));
}
vec2 move(vec2 st, float val, float r) {
  st.x += sin(val) * r;
  st.y += cos(val) * r;
  return st;

}

float smin(float a, float b, float k){
  float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
  return mix(b, a, h) - k * h * (1.0 - h); 
}
void main(){

    fragColor.a = 1.0;
    
    
    float aspect = u_resolution.y/u_resolution.x;
    float offset = (((u_resolution.x - u_resolution.y ) /u_resolution.x)  * .5);
    float w = gl_FragCoord.x/u_resolution.x;
    float h = gl_FragCoord.y/u_resolution.y * aspect + offset;
    vec2 pos = vec2( w, h);
    
    
    
    
    
    
    
    
    

    
    

    

    float balls = 0.0;

    for (int i = 0; i < 128; ++i) {
        float fi = float(i) + 1.0;
        vec2 centeredST = pos * 2.0 - 1.0;
        float ball = smoothstep(
            .3,
            .02 ,
            length(

              
              move(
                rot(centeredST * .650 + fi * .02, fi * 2.1),
                u_time + fi * .0115 + (PI / fi / 2.0),
                sin(u_time * fi * .402 ) * .684+ fi * .015
              )
            )
        );
        balls += ball + smin(ball, balls, .15) ;
        balls = balls;
        
        
      
    }

    fragColor.rgb = vec3( balls);
    
    
    
    
}`;const pp=Object.freeze(Object.defineProperty({__proto__:null,default:dp},Symbol.toStringTag,{value:"Module"}));var xp=`#version 300 es
precision highp float;
out vec4 fragColor;
uniform float u_time;
uniform vec2 u_resolution;
const float PI=3.1415926;
const float E=2.71828182846;

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

float gtable2(vec2 lattice,vec2 p){
  uvec2 n=floatBitsToUint(lattice);
  uint ind=uhash22(n).x>>29;
  float u=.92387953*(ind<4u?p.x:p.y);
  float v=.38268343*(ind<4u?p.y:p.x);
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

void main(){
  float aspect=u_resolution.y/u_resolution.x;
  float w=gl_FragCoord.x/u_resolution.x;
  float h=gl_FragCoord.y/u_resolution.y*aspect;
  vec2 pos=vec2(w,h);
  float size=sin(u_time*.2)*.2+1.293;
  vec2 st=(.5+size)*pos.xy-vec2(.5+(size*.5));
  float len=length(st.xy);
  
  
  float balls=0.;
  float blur=pow(pnoise31(vec3(.75*st,u_time*.1))*3.0,.40);
  for(int i=0;i<5;++i){
    float fi=float(i)+.20;
    vec2 centeredST=pos*2.-1.;
    float ball=smoothstep(
      .0+blur*.5,
      .0,
      pnoise21(vec2(pos.x*5.5,pos.y*5.5-(u_time*fi*.1)-fi*3.10))*
      pnoise21(vec2(pos.x*.15,pos.y*.15-(u_time*fi*.1)-fi*3.30))
    ) - length(st) * .1;
    balls+=ball+smin(ball*2.4,balls,.12);
  }
    
  vec3 colors=(grad(pos*2.+sin(u_time*.2)*.40));
  fragColor=vec4(
    colors+(2.-balls),
    1.0
  );

  fragColor.rgb = mod(fragColor.rgb, .1) * 10.0;
  
  fragColor.rgb=min(fragColor.rgb,vec3(1.));
}`;const mp=Object.freeze(Object.defineProperty({__proto__:null,default:xp},Symbol.toStringTag,{value:"Module"}));var vp=`#version 300 es
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

  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;

  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  
  
  
  
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy; 
  vec3 x3 = x0 - D.yyy;      

  i = mod289(i);
  vec4 p = permute( permute( permute(
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

  float n_ = 0.142857142857; 
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );    

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  
  
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                dot(p2,x2), dot(p3,x3) ) );
  }

float fbm ( in vec2 _st, in int NUM_OCTAVES) {
    float v = 0.0;
    float a = .955;
    vec2 shift = vec2(0.0);
    
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
        

        
        color_a.x += snoise(st) * rad;

        float threshold = pow(snoise(vec2(st * q)), .84);
        
        vec3 cliped_a = vec3(color_a * gate( 0.1, threshold - pow(rad + 0.12, 2.15)) );
        vec3 cliped_b = vec3(color_b * gate( 0.8, threshold + pow(rad * 10.0, 1.05))); 
        vec3 cliped_c = vec3(color_c * gate( 0.2, threshold * pow(rad, 1.0325))); 
        
            fragColor = vec4(cliped_a + cliped_b + cliped_c, alpha);

}`;const gp=Object.freeze(Object.defineProperty({__proto__:null,default:vp},Symbol.toStringTag,{value:"Module"}));var _p=`#version 300 es
precision highp float;
out vec4 fragColor;
uniform vec2 u_resolution;
uniform float u_time;

#define M_PI 3.1415926535897932384626433832795

float norm(float x) {
    return x > 1.0 ? 0.0 : clamp(x, 0.0, 1.0);
}
float saturate(float a) {
    return clamp(a, 0.0, 1.0);
}

vec2 skew(vec2 st,float deg){
  st.x=st.x+st.y*tan(deg*M_PI);
  return st;
}
vec2 rot(vec2 st, float deg) {
  return vec2(st.x * cos(deg) - st.y * sin(deg), st.x * sin(deg) + st.y * cos(deg));
}
float slice3(float x, float i) {
  float m = 3.0 ;
  return norm( i - mod(x + u_time, 1.0 ) * m );
}
void main(){
  vec2 pos = gl_FragCoord.xy / u_resolution.xy;
  vec2 st = (gl_FragCoord.xy-u_resolution.xy)/ min(u_resolution.x, u_resolution.y) ;

  st = rot(st, M_PI * 0.25);

  vec3[3] col3 = vec3[](
      vec3(1.0, 0.0, 0.0) * slice3(1.0 *pos.x, 1.0),
      vec3(0.0, 0.0, 1.0) * slice3(1.0 *pos.x, 2.0),
      vec3(0.0, 1.0, 0.0 * slice3(1.0 *pos.x, 3.0))
      );
  int ind = int(pos.x );
  vec3 col = mix(col3[ind], col3[ind + 1], fract(pos.x));
  fragColor = vec4(col, 1.0);

  float x = sin(60.0 * st.x - 3.0 * u_time) * cos(st.y * 60.0 + 3.0 * u_time);
  
  fragColor.rgb = vec3(
      pow(

      smoothstep(0.80, 0.8,slice3(x, 1.0)) +
      step(.15,slice3(x, 2.0)) +
      step(.85, slice3(x, 3.0))
      , .40
      )
  );

    
}`;const yp=Object.freeze(Object.defineProperty({__proto__:null,default:_p},Symbol.toStringTag,{value:"Module"}));var bp=`#version 300 es
precision highp float;
out vec4 fragColor;
uniform float u_time;
uniform vec2 u_resolution;
const float PI = 3.1415926;

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
    
    
}
vec2 xy2pol(vec2 xy){
    return vec2(atan2(xy.y, xy.x), length(xy));
}
vec2 pol2xy(vec2 pol){
    return pol.y * vec2(cos(pol.x), sin(pol.x));
}
vec3 tex(vec2 st){
    vec3[3] col3 = vec3[](
        vec3(255.0 / 255.0, 140.0 / 255.0, 80.0 / 255.0),
        vec3(80.0 / 255.0, 190.0 / 255.0, 255.0 / 255.0),
        vec3(140.0 / 255.0, 80.0 / 255.0, 255.0 / 255.0)
    );
    st.s = st.s / PI + 1.0;
    int ind = int(st.s) ;
    vec3 col = mix(col3[ind % 2], col3[(ind + 1) % 2], fract(st.s));
    return mix(col3[2], col, st.t);
}

uint uhash11(uint n){
    n ^= (n << 1u);
    n ^= (n >> 1u);
    n *= 0x456789abu;
    n ^= (n << 1u);
    return n * 0x456789abu;
}
float gtable2(vec2 lattice, vec2 p){
    uvec2 n = floatBitsToUint(lattice);
    uint ind = (uhash11(uhash11(n.x) + n.y) >> 29);
    float u = 0.92387953 * (ind < 4u ? p.x : p.y);  
    float v = 0.38268343 * (ind < 4u ? p.y : p.x);  
    return ((ind & 1u) == 0u ? u : -u) + ((ind & 2u) == 0u? v : -v);
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
float gtable3(vec3 lattice, vec3 p){
    uvec3 n = floatBitsToUint(lattice);
    uint ind = (uhash11(uhash11(uhash11(n.x) + n.y) + n.z) >> 28);
    float u = ind < 8u ? p.x : p.y;
    float v = ind < 4u ? p.y : ind == 12u || ind == 14u ? p.x : p.z;
    return ((ind & 1u) == 0u? u: -u) + ((ind & 2u) == 0u? v : -v);
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

void main(){
  
  float aspect = u_resolution.y/u_resolution.x;
  float offset = (((u_resolution.x - u_resolution.y ) /u_resolution.x)  * .5);
  float w = gl_FragCoord.x/u_resolution.x;
  float h = gl_FragCoord.y/u_resolution.y * aspect + offset;
  vec2 pos = vec2( w, h);
    pos = 2.0 * pos.xy - vec2(1.0);
    pos = xy2pol(pos);
  float base = ceil(fract(pos.y * pos.y * 3.0) * 2.3);
    vec2 t_pos = vec2(base / PI, 1.80) * pos + u_time * .2;
    fragColor = vec4(vec3( 
      mod(smoothstep(
        0.0, 
        smin(
        pow(periodicNoise21(t_pos, base * 2.0 ), 1.0),
        pow(pos.y,1.5 + cos(u_time * -1.0) * .9),
        3.0

      ), -.02

      ) * 80.0, pos.y * pow(pos.y, .20))
    ), 1.0);
}`;const wp=Object.freeze(Object.defineProperty({__proto__:null,default:bp},Symbol.toStringTag,{value:"Module"}));var Cp=`#version 300 es
precision highp float;
out vec4 fragColor;
uniform float u_time;
uniform vec2 u_resolution;
const float PI = 3.1415926;

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
    
    
}
vec2 xy2pol(vec2 xy){
    return vec2(atan2(xy.y, xy.x), length(xy));
}
vec2 pol2xy(vec2 pol){
    return pol.y * vec2(cos(pol.x), sin(pol.x));
}
vec3 tex(vec2 st){
    vec3[3] col3 = vec3[](
        vec3(255.0 / 255.0, 140.0 / 255.0, 80.0 / 255.0),
        vec3(80.0 / 255.0, 190.0 / 255.0, 255.0 / 255.0),
        vec3(140.0 / 255.0, 80.0 / 255.0, 255.0 / 255.0)
    );
    st.s = st.s / PI + 1.0;
    int ind = int(st.s) ;
    vec3 col = mix(col3[ind % 2], col3[(ind + 1) % 2], fract(st.s));
    return mix(col3[2], col, st.t);
}

uint uhash11(uint n){
    n ^= (n << 1u);
    n ^= (n >> 1u);
    n *= 0x456789abu;
    n ^= (n << 1u);
    return n * 0x456789abu;
}
float gtable2(vec2 lattice, vec2 p){
    uvec2 n = floatBitsToUint(lattice);
    uint ind = (uhash11(uhash11(n.x) + n.y) >> 29);
    float u = 0.92387953 * (ind < 4u ? p.x : p.y);  
    float v = 0.38268343 * (ind < 4u ? p.y : p.x);  
    return ((ind & 1u) == 0u ? u : -u) + ((ind & 2u) == 0u? v : -v);
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
float gtable3(vec3 lattice, vec3 p){
    uvec3 n = floatBitsToUint(lattice);
    uint ind = (uhash11(uhash11(uhash11(n.x) + n.y) + n.z) >> 28);
    float u = ind < 8u ? p.x : p.y;
    float v = ind < 4u ? p.y : ind == 12u || ind == 14u ? p.x : p.z;
    return ((ind & 1u) == 0u? u: -u) + ((ind & 2u) == 0u? v : -v);
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

void main(){
  
  float aspect = u_resolution.y/u_resolution.x;
  float offset = (((u_resolution.x - u_resolution.y ) /u_resolution.x)  * .5);
  float w = gl_FragCoord.x/u_resolution.x;
  float h = gl_FragCoord.y/u_resolution.y * aspect + offset;
  vec2 pos = vec2( w, h);
    pos = 2.0 * pos.xy - vec2(1.0);
    pos = xy2pol(pos) * 1.5;
  float base = ceil(fract(pos.y * pos.y * 3.0) * 2.3);
    vec2 t_pos = vec2(base / PI, 1.80) * pos + u_time * .12;
    fragColor = vec4(vec3( 
      mod(smoothstep(
        .0, 
        smin(
        pow(periodicNoise21(t_pos, base * 2.0 ), 1.0),
        pow(pos.y, .5 + cos(u_time * -.30) * .19),
        3.0

      ), -.02

      ) * 80.0, pos.y * pow(pos.y, .20))
    ), 1.0);

    fragColor.r = fragColor.r * t_pos.y;
    fragColor.g = smin(fragColor.r * t_pos.y, t_pos.y, 3.5);
    fragColor.b = smin(fragColor.b * t_pos.x, t_pos.y, 1.5);
    
    fragColor.b = pow(fract(fragColor.b *2.50), length(pos.xy));
    fragColor.g = pow(fract(fragColor.g *1.50), pow(length(pos.xy), 4.3));
    

}`;const Ap=Object.freeze(Object.defineProperty({__proto__:null,default:Cp},Symbol.toStringTag,{value:"Module"}));var Sp=`#version 300 es
precision highp float;
precision highp int;

uniform float u_time;
uniform vec2 u_resolution;

out vec4 fragColor;

vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }
float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187,  0.366025403784439, -0.577350269189626, 0.024390243902439);vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx); vec2 i1;i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz; x12.xy -= i1; i = mod289(i); vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);m = m*m ;    m = m*m ;vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;vec3 ox = floor(x + 0.5); vec3 a0 = x - ox; m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    vec3 g; g.x  = a0.x  * x0.x  + h.x  * x0.y; g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
}

#define NUM_OCTAVES 2
float fbm ( in vec2 _st, in float rad, in float rot_time) {
    float v = 0.0;
    float a = .5;
    vec2 shift = vec2(0.0);
    

    mat2 rot = mat2(cos(0.5 + rot_time), sin(0.5+ rot_time), -sin(0.5+ rot_time), cos(0.50+ rot_time));
    for (int i = 0; i < NUM_OCTAVES; ++i) {
        v += a * snoise(_st);
        _st =  rot* _st * 1.53998 + shift;
        a *= 1.38 / rad / 2.2;
    }
    return ((v + 1.0) * 0.5);
}

float blobs(in vec2 st, in float aspect, in float seed){
  float circle = 0.0;
  float max_loops = fract((u_time * 0.12) + sin(u_time * .122) * 3.0) * 15.0 + fract((u_time * 0.02)) * 2.0 + 3.0;
  for(int i = 1; i < int(max_loops); i++){
    float fi = float(i);
    float prev = circle;
    float rand_x = fract(fi * u_time * .02 + 299.0) - 0.5;
    float rand_y = snoise(vec2(u_time * .38 + fi * .5, fi * 3.3 + seed)) * .4;
    float rad = distance(vec2(.5 + rand_x, (.5 +  + rand_y) * aspect), st);

    float index = fi /90.0 * 0.2;
    float a = fract(u_time* 0.102) * .321 + 10.0;
    a = fract(u_time * 0.04 + fi * 0.2) *  2.2 + 3.5;
    float b = fract( u_time * .001003028) + .29;
    float c = step(fract( u_time * .4  * st.x + fi * st.y * .5 + fract(u_time * .18)), .05 ) * 1.0;

    
    float step_min = fbm(st, rad, fi * u_time * .5);
    float step_threshold = sin(fi * .4 * u_time) * .2;
    
    float e = floor(sin(st.x / b * u_time * .100) / a);
    float f = floor(sin(st.x*  b * u_time) * a);

    float blink =  mix(e + f, 1.0, step(fract(abs(sin(sin(u_time * .32) * 3.14))), .5));
    
    
    float current = step(step_min, step_threshold ) * blink * c;

    circle = max(current, prev) * fi /max_loops * 3.0;

  }

  return circle;
}

vec3 color0 = vec3(255.0 / 255.0, 1.0 / 255.0, 120.0 / 255.0);
vec3 color1 = vec3(0.0 /255.0, 247.0 / 255.0, 35.0 / 255.0);

void main(void) {

  float aspect = u_resolution.y/u_resolution.x;
  float u_time_sp = u_time * .2 + 1000.0;
  
  vec2 st = vec2(gl_FragCoord.x/u_resolution.x, gl_FragCoord.y/u_resolution.y * aspect);
  float blob = blobs(st, aspect, 2.0);
  
  vec3 c0 = color0 * blob;
  float mask = clamp(blobs(st, aspect, 8.0) - blob, 0.0, 1.0);
  float rad = distance(vec2(.5, .5 * aspect), st);
  vec3 c1 = color1 * 23.0 * mask * 20.0;

  fragColor = vec4(c0 + c1, 1.0);

}`;const Pp=Object.freeze(Object.defineProperty({__proto__:null,default:Sp},Symbol.toStringTag,{value:"Module"}));var Mp=`#version 300 es
precision highp float;
precision highp int;
out vec4 fragColor;
uniform float u_time;
uniform vec2 u_resolution;

vec3 color0 = vec3(255.0 / 255.0, 1.0 / 255.0, 120.0 / 255.0);
vec3 color1 = vec3(0.0 /255.0, 247.0 / 255.0, 35.0 / 255.0);

vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }
float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187,  0.366025403784439, -0.577350269189626, 0.024390243902439);vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx); vec2 i1;i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz; x12.xy -= i1; i = mod289(i); vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);m = m*m ;    m = m*m ;vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;vec3 ox = floor(x + 0.5); vec3 a0 = x - ox; m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    vec3 g; g.x  = a0.x  * x0.x  + h.x  * x0.y; g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
}

#define NUM_OCTAVES 3

float fbm ( in vec2 _st, in float rad, in float rot_time) {
    float v = 0.0;
    float a = .5;
    vec2 shift = vec2(0.0);
    

    mat2 rot = mat2(cos(0.5 + rot_time), sin(0.5+ rot_time), -sin(0.5+ rot_time), cos(0.50+ rot_time));
    for (int i = 0; i < NUM_OCTAVES; ++i) {
        v += a * snoise(_st);
        _st =  rot* _st * 1.53998 + shift;
        a *= 1.38 / rad / 7.2;
    }
    return ((v + 1.0) * 0.5);
}
vec3 lines ( in vec2 st, in vec2 q, in float rad){
    vec3 c = vec3(0.0, 0, 0);
    vec3 l = vec3(1.0, 1.0, 1.0);
    
    for ( int i = 0; i < 20 ; i++ ){
      float f = float(i);
      float il = float(i) * 0.12;
      float min = 0.002 ;
      float start = il * .03 + min * snoise(vec2(1.0 - il * 3.2, fract(rad * u_time * 0.00))); 
      float width = 0.0034 + sin( float(NUM_OCTAVES - i ) * 21.8) * 0.031;
      
      
      l.x *= .923 + snoise(vec2(f * .6, st.y + u_time * 0.12)) * st.y * rad ;
      l.y -= 0.0523 + snoise(vec2(f * 3.4, st.y + u_time * 0.12)) * st.y * rad;
      l.z -= 0.03923 + snoise(vec2(f * .224, st.y + u_time * 0.0884));
      

      float w = width + (snoise(vec2(2.0 * st.x * q.y * u_time * .13 , 2.0)) + 1.0) * .9;
      float r = (rad * 1.0) + 0.0;

      float edge = smoothstep(start, start + w , r);
      edge -= smoothstep(start - 0.02, start  , r);
      edge = pow(edge, .20);
      c+= l * edge;
    }
    

    return c;
}

float blobs(in vec2 st, in float aspect, in float seed){
    float circle = 0.0;

    for(int i = 0; i < 4; i++){
      float f = float(i);
        float prev = circle;
        float rand_x = snoise(vec2(f * 2.15, f + seed)) * .8;
        float rand_y = snoise(vec2(f * .15, f * 1.323 + seed)) * .4;
        float rad = distance(vec2(.5 + rand_x + cos(u_time + f * 1.2) * .215, (.5 + rand_y + sin(u_time + f * 1.2) * .4) * aspect), st);
        float steped = step(rad, .06 + abs(fbm(st * 2.150 + f * .2, rad, u_time * .1 + f * .2)) * .45);
        
        circle = max(steped * fbm(st * f * .43, .28, sin(u_time * .1) * 1.2), prev);
    }

    return circle;
}

void main(void) {
  float aspect = u_resolution.y/u_resolution.x;
  float u_time_sp = u_time * .2 + 1000.0;
  vec2 st = vec2(gl_FragCoord.x/u_resolution.x, gl_FragCoord.y/u_resolution.y * aspect);
  float blob = blobs(st, aspect, 2.0);
  vec3 c0 = color0 * 1.0 * blob;
  float mask = clamp(blobs(st, aspect, 8.0) - blob, 0.0, 1.0);
  float rad = distance(vec2(.5, .5 * aspect), st);
  vec3 c1 = color1 * 1.0 * mask * 15. * pow(rad, 2.0228);
  fragColor = vec4(c0 + c1, 1.0);
}`;const Tp=Object.freeze(Object.defineProperty({__proto__:null,default:Mp},Symbol.toStringTag,{value:"Module"}));var kp=`#version 300 es
precision highp float;
out vec4 fragColor;
uniform float u_time;
uniform vec2 u_resolution;
uniform sampler2D u_texture_noise; 
uniform vec2 u_texture_noiseResolution;
const float PI = 3.1415926;
const float E = 2.71828182846;

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

float gtable2(vec2 lattice, vec2 p){
    uvec2 n = floatBitsToUint(lattice);
    uint ind = uhash22(n).x >> 29;
    float u = 0.92387953 * (ind < 4u ? p.x : p.y);  
    float v = 0.38268343 * (ind < 4u ? p.y : p.x);  
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
    st.s = st.s / PI + 2.0;
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

float sigmoid(float val) {
  return 1.0 / (1.0 + pow(E, -val));
}
float saturate(float v) {
  return sigmoid(v) * 4.0 - 2.0;
}
vec2 skew(vec2 st, float deg) {
  st.x = st.x + st.y * tan(deg * PI);
  return st;
}

vec2 move(vec2 st, float val, float r) {
  st.x += sin(val) * r;
  st.y += cos(val) * r;
  return st;
}

vec3 rgb2hsv(vec3 c)
{
    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
    vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
    vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));

    float d = q.x - min(q.w, q.y);
    float e = 1.0e-10;
    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}

vec3 hsv2rgb(vec3 c)
{
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

 

float NUM_POLYGONS = 4.0;

void main(void) {
  fragColor.a = 1.0;
  float texture_repeats = u_resolution.x / 512.0;

  
  float aspect = u_resolution.y/u_resolution.x;
  float offset = (((u_resolution.x - u_resolution.y ) /u_resolution.x)  * .5);
  float w = gl_FragCoord.x/u_resolution.x;
  float h = gl_FragCoord.y/u_resolution.y * aspect + offset;
  vec2 pos = vec2( w, h);
  

  

  
  vec4 noise = (texture(u_texture_noise, fract(vec2(pos.x * .5, pos.y - u_time * .012) * texture_repeats)) + texture(u_texture_noise, fract(pos * texture_repeats)));
  float size = sin(u_time * 1.2) * .2 + 1.293;

  vec2 st = (1.0 + size) * pos.xy - vec2(.5 + (size * 0.5));
  
  float len = length(st.xy);
  float invl = 1.0 - len;

  
  float balls = 0.0;
  float balls2 = 0.0;
  float blur = pow(pnoise31(vec3( .75 * st, u_time * 1.1)) *  1.5 * (invl + 1.050) - 0.1, .40);
  for (int i = 0; i < 5; ++i) {
      float fi = float(i) + 1.0;
      vec2 centeredST = pos * 2.0 - 1.0;
      
      
      
      

      
      
      
      
      
      
      
      
      float ball = smoothstep(
        .0 + blur * .5,
        .0,
        pnoise21(vec2(pos.x * 4.5, pos.y * 4.5 - (u_time * fi * 1.41) - fi * .10)) *
        pnoise21(vec2(pos.x * .15, pos.y * .15 - (u_time * fi * .1) - fi * .30)) * 1.40
      );
      balls += ball + smin(ball * 32.0, balls, 4.12) ;
      
      
      
      
    
  }
  

  float pn = pnoise21(vec2(pos.x * 2.0, pos.y * 2.0 - u_time));
  pn = pow(pn * 2.0 - 1.0, 1.0);

  
  float waveform = wave(rot(st, 1.40 * pos.y), .50, 1.0,  u_time * .20);
  waveform = waveform + (step(waveform, .52) * .801);
  

  float hpos = st.x - 1.5;
  float grad1 = (hpos) + (sin(st.y * 1.20 + (u_time * 1.150) ) * 1.8);
  float curve = grad1 * pow(1.0-(hpos),.10);
  float highlight = clamp(curve, -.10, .50);
  
  
  
  
  
  
  
  
  
  float cyclo = smoothstep(invl * .1, .96, pos.y / waveform) * .2053;
  float edgeX = smoothstep(0.4, 1.0, dFdx(balls2) * 40.0) * .15;
  float edgeY = smoothstep(0.40, .42, dFdy(balls2) * 40.0) * .15;

  vec3 colors = (grad(pos * 2.0+ sin(u_time * .2) * .40 ));
  
  fragColor = vec4(
    
    colors + (1.0-balls) + (noise.x * .16) + smoothstep(0., .31 * balls, pow(sigmoid(balls2), 82.21) ) * .15,
    
    
    1.0 
  );

  vec3 grayscale = vec3( saturate(fragColor.x * fragColor.y * fragColor.z * 2.50) * .8 );
  float noiseparam = .6;
  float blur2 = 1.0 - smoothstep(noiseparam  *(invl), noiseparam, pnoise31(vec3( 1.25 * st, u_time * .01)) );

  fragColor.rgb = vec3(dFdx(balls * pn * 40.0) * dFdy(balls * pn * 399.0));
  fragColor.rg *= .7904 + pn * .5;
  

  
  
  fragColor.a = 1.0; 

  fragColor.rgb = min(fragColor.rgb, vec3(1.0));

}`;const Ip=Object.freeze(Object.defineProperty({__proto__:null,default:kp},Symbol.toStringTag,{value:"Module"}));var zp=`#version 300 es
precision highp float;
precision highp int;

uniform float u_time;
uniform vec2 u_resolution;

vec3 color0 = vec3(255.0 / 255.0, 140.0 / 255.0, 80.0 / 255.0);
vec3 color1 = vec3(80.0 / 255.0, 190.0 / 255.0, 255.0 / 255.0);
vec3 color2 = vec3(140.0 / 255.0, 80.0 / 255.0, 255.0 / 255.0);

out vec4 fragColor;

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec2 mod289(vec2 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec3 permute(vec3 x) {
  return mod289(((x*34.0)+1.0)*x);
}

float snoise(vec2 v)
  {
  const vec4 C = vec4(0.211324865405187,  
                      0.366025403784439,  
                     -0.577350269189626,  
                      0.024390243902439); 

  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);

  vec2 i1;
  
  
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  
  
  
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;

  i = mod289(i); 
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));

  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;

  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );

  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

#pragma glslify: export(snoise)

#define NUM_OCTAVES 2
float fbm ( in vec2 _st, in float rad, in float rot_time) {
    float v = 0.0;
    float a = 1.5;
    vec2 shift = vec2(0.0);
    mat2 rot = mat2(cos(0.5 + rot_time), sin(0.5+ rot_time), -sin(0.5+ rot_time), cos(0.50+ rot_time));
    for (int i = 0; i < NUM_OCTAVES; ++i) {
        v += a * snoise(_st);
        _st =  rot * _st * 244.0 + shift;
        a *= 1.10 / rad / 4.2;
    }
    return ((v + 1.0) * 0.5);
}
float gate(in float center, in float threshold){
    float range =.05822482;
    return (smoothstep(center - range, center, threshold) - smoothstep(center, center + range, threshold));

}

void main(void)
{

        float aspect = u_resolution.y/u_resolution.x;
        float u_time_sp = u_time * .12 + 1000.0;
        vec2 st = vec2(gl_FragCoord.x/u_resolution.x, gl_FragCoord.y/u_resolution.y * aspect);
        
        float rad = distance(vec2(.5, .5 * aspect), st);

        float circle = step(rad, .2 + fbm(st * 1.2, rad  + sin(u_time_sp * .2) * .1, .2 * u_time_sp) * .22);
        float circle_g = step(rad, .08 + fbm(st * 1.2, rad  + sin(u_time_sp * .32) * .1, .12 * u_time_sp) * .43) - circle;

        fragColor = vec4(
          mix(
            color0 * circle,
            color1 * circle_g,
            fbm(st * 1.01, rad  + sin(u_time_sp * 1.2) * .125, 1.0)
          )
        , 1.0);

}`;const Ep=Object.freeze(Object.defineProperty({__proto__:null,default:zp},Symbol.toStringTag,{value:"Module"})),Fp="modulepreload",Op=function(e){return"/nngl/"+e},Ra={},ts=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),o=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));s=Promise.all(n.map(a=>{if(a=Op(a),a in Ra)return;Ra[a]=!0;const l=a.endsWith(".css"),u=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${u}`))return;const c=document.createElement("link");if(c.rel=l?"stylesheet":Fp,l||(c.as="script",c.crossOrigin=""),c.href=a,o&&c.setAttribute("nonce",o),document.head.appendChild(c),l)return new Promise((f,h)=>{c.addEventListener("load",f),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${a}`)))})}))}return s.then(()=>t()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};var Y=(e=>(e.Application="application",e.WebGLPipes="webgl-pipes",e.WebGLPipesAdaptor="webgl-pipes-adaptor",e.WebGLSystem="webgl-system",e.WebGPUPipes="webgpu-pipes",e.WebGPUPipesAdaptor="webgpu-pipes-adaptor",e.WebGPUSystem="webgpu-system",e.CanvasSystem="canvas-system",e.CanvasPipesAdaptor="canvas-pipes-adaptor",e.CanvasPipes="canvas-pipes",e.Asset="asset",e.LoadParser="load-parser",e.ResolveParser="resolve-parser",e.CacheParser="cache-parser",e.DetectionParser="detection-parser",e.MaskEffect="mask-effect",e.BlendMode="blend-mode",e.TextureSource="texture-source",e.Environment="environment",e))(Y||{});const Ii=e=>{if(typeof e=="function"||typeof e=="object"&&e.extension){if(!e.extension)throw new Error("Extension class must have an extension object");e={...typeof e.extension!="object"?{type:e.extension}:e.extension,ref:e}}if(typeof e=="object")e={...e};else throw new Error("Invalid extension type");return typeof e.type=="string"&&(e.type=[e.type]),e},Tr=(e,t)=>Ii(e).priority??t,Jt={_addHandlers:{},_removeHandlers:{},_queue:{},remove(...e){return e.map(Ii).forEach(t=>{t.type.forEach(n=>{var r,s;return(s=(r=this._removeHandlers)[n])==null?void 0:s.call(r,t)})}),this},add(...e){return e.map(Ii).forEach(t=>{t.type.forEach(n=>{var i,o;const r=this._addHandlers,s=this._queue;r[n]?(o=r[n])==null||o.call(r,t):(s[n]=s[n]||[],(i=s[n])==null||i.push(t))})}),this},handle(e,t,n){var o;const r=this._addHandlers,s=this._removeHandlers;if(r[e]||s[e])throw new Error(`Extension type ${e} already has a handler`);r[e]=t,s[e]=n;const i=this._queue;return i[e]&&((o=i[e])==null||o.forEach(a=>t(a)),delete i[e]),this},handleByMap(e,t){return this.handle(e,n=>{n.name&&(t[n.name]=n.ref)},n=>{n.name&&delete t[n.name]})},handleByNamedList(e,t,n=-1){return this.handle(e,r=>{t.findIndex(i=>i.name===r.name)>=0||(t.push({name:r.name,value:r.ref}),t.sort((i,o)=>Tr(o.value,n)-Tr(i.value,n)))},r=>{const s=t.findIndex(i=>i.name===r.name);s!==-1&&t.splice(s,1)})},handleByList(e,t,n=-1){return this.handle(e,r=>{t.includes(r.ref)||(t.push(r.ref),t.sort((s,i)=>Tr(i,n)-Tr(s,n)))},r=>{const s=t.indexOf(r.ref);s!==-1&&t.splice(s,1)})}},Bp={extension:{type:Y.Environment,name:"browser",priority:-1},test:()=>!0,load:async()=>{await ts(()=>import("./browserAll-D-vzOOkU.js"),__vite__mapDeps([0,1,2,3]))}},Rp={extension:{type:Y.Environment,name:"webworker",priority:0},test:()=>typeof self<"u"&&self.WorkerGlobalScope!==void 0,load:async()=>{await ts(()=>import("./webworkerAll-DCqbVkKz.js"),__vite__mapDeps([1,2,3]))}};class Ht{constructor(t,n,r){this._x=n||0,this._y=r||0,this._observer=t}clone(t){return new Ht(t??this._observer,this._x,this._y)}set(t=0,n=t){return(this._x!==t||this._y!==n)&&(this._x=t,this._y=n,this._observer._onUpdate(this)),this}copyFrom(t){return(this._x!==t.x||this._y!==t.y)&&(this._x=t.x,this._y=t.y,this._observer._onUpdate(this)),this}copyTo(t){return t.set(this._x,this._y),t}equals(t){return t.x===this._x&&t.y===this._y}toString(){return`[pixi.js/math:ObservablePoint x=0 y=0 scope=${this._observer}]`}get x(){return this._x}set x(t){this._x!==t&&(this._x=t,this._observer._onUpdate(this))}get y(){return this._y}set y(t){this._y!==t&&(this._y=t,this._observer._onUpdate(this))}}function Co(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Wc={exports:{}};(function(e){var t=Object.prototype.hasOwnProperty,n="~";function r(){}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(n=!1));function s(l,u,c){this.fn=l,this.context=u,this.once=c||!1}function i(l,u,c,f,h){if(typeof c!="function")throw new TypeError("The listener must be a function");var d=new s(c,f||l,h),p=n?n+u:u;return l._events[p]?l._events[p].fn?l._events[p]=[l._events[p],d]:l._events[p].push(d):(l._events[p]=d,l._eventsCount++),l}function o(l,u){--l._eventsCount===0?l._events=new r:delete l._events[u]}function a(){this._events=new r,this._eventsCount=0}a.prototype.eventNames=function(){var u=[],c,f;if(this._eventsCount===0)return u;for(f in c=this._events)t.call(c,f)&&u.push(n?f.slice(1):f);return Object.getOwnPropertySymbols?u.concat(Object.getOwnPropertySymbols(c)):u},a.prototype.listeners=function(u){var c=n?n+u:u,f=this._events[c];if(!f)return[];if(f.fn)return[f.fn];for(var h=0,d=f.length,p=new Array(d);h<d;h++)p[h]=f[h].fn;return p},a.prototype.listenerCount=function(u){var c=n?n+u:u,f=this._events[c];return f?f.fn?1:f.length:0},a.prototype.emit=function(u,c,f,h,d,p){var m=n?n+u:u;if(!this._events[m])return!1;var x=this._events[m],y=arguments.length,g,v;if(x.fn){switch(x.once&&this.removeListener(u,x.fn,void 0,!0),y){case 1:return x.fn.call(x.context),!0;case 2:return x.fn.call(x.context,c),!0;case 3:return x.fn.call(x.context,c,f),!0;case 4:return x.fn.call(x.context,c,f,h),!0;case 5:return x.fn.call(x.context,c,f,h,d),!0;case 6:return x.fn.call(x.context,c,f,h,d,p),!0}for(v=1,g=new Array(y-1);v<y;v++)g[v-1]=arguments[v];x.fn.apply(x.context,g)}else{var b=x.length,k;for(v=0;v<b;v++)switch(x[v].once&&this.removeListener(u,x[v].fn,void 0,!0),y){case 1:x[v].fn.call(x[v].context);break;case 2:x[v].fn.call(x[v].context,c);break;case 3:x[v].fn.call(x[v].context,c,f);break;case 4:x[v].fn.call(x[v].context,c,f,h);break;default:if(!g)for(k=1,g=new Array(y-1);k<y;k++)g[k-1]=arguments[k];x[v].fn.apply(x[v].context,g)}}return!0},a.prototype.on=function(u,c,f){return i(this,u,c,f,!1)},a.prototype.once=function(u,c,f){return i(this,u,c,f,!0)},a.prototype.removeListener=function(u,c,f,h){var d=n?n+u:u;if(!this._events[d])return this;if(!c)return o(this,d),this;var p=this._events[d];if(p.fn)p.fn===c&&(!h||p.once)&&(!f||p.context===f)&&o(this,d);else{for(var m=0,x=[],y=p.length;m<y;m++)(p[m].fn!==c||h&&!p[m].once||f&&p[m].context!==f)&&x.push(p[m]);x.length?this._events[d]=x.length===1?x[0]:x:o(this,d)}return this},a.prototype.removeAllListeners=function(u){var c;return u?(c=n?n+u:u,this._events[c]&&o(this,c)):(this._events=new r,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=n,a.EventEmitter=a,e.exports=a})(Wc);var Lp=Wc.exports;const ce=Co(Lp),jp=Math.PI*2,Np=180/Math.PI,Up=Math.PI/180;class vt{constructor(t=0,n=0){this.x=0,this.y=0,this.x=t,this.y=n}clone(){return new vt(this.x,this.y)}copyFrom(t){return this.set(t.x,t.y),this}copyTo(t){return t.set(this.x,this.y),t}equals(t){return t.x===this.x&&t.y===this.y}set(t=0,n=t){return this.x=t,this.y=n,this}toString(){return`[pixi.js/math:Point x=${this.x} y=${this.y}]`}static get shared(){return Ls.x=0,Ls.y=0,Ls}}const Ls=new vt;class at{constructor(t=1,n=0,r=0,s=1,i=0,o=0){this.array=null,this.a=t,this.b=n,this.c=r,this.d=s,this.tx=i,this.ty=o}fromArray(t){this.a=t[0],this.b=t[1],this.c=t[3],this.d=t[4],this.tx=t[2],this.ty=t[5]}set(t,n,r,s,i,o){return this.a=t,this.b=n,this.c=r,this.d=s,this.tx=i,this.ty=o,this}toArray(t,n){this.array||(this.array=new Float32Array(9));const r=n||this.array;return t?(r[0]=this.a,r[1]=this.b,r[2]=0,r[3]=this.c,r[4]=this.d,r[5]=0,r[6]=this.tx,r[7]=this.ty,r[8]=1):(r[0]=this.a,r[1]=this.c,r[2]=this.tx,r[3]=this.b,r[4]=this.d,r[5]=this.ty,r[6]=0,r[7]=0,r[8]=1),r}apply(t,n){n=n||new vt;const r=t.x,s=t.y;return n.x=this.a*r+this.c*s+this.tx,n.y=this.b*r+this.d*s+this.ty,n}applyInverse(t,n){n=n||new vt;const r=this.a,s=this.b,i=this.c,o=this.d,a=this.tx,l=this.ty,u=1/(r*o+i*-s),c=t.x,f=t.y;return n.x=o*u*c+-i*u*f+(l*i-a*o)*u,n.y=r*u*f+-s*u*c+(-l*r+a*s)*u,n}translate(t,n){return this.tx+=t,this.ty+=n,this}scale(t,n){return this.a*=t,this.d*=n,this.c*=t,this.b*=n,this.tx*=t,this.ty*=n,this}rotate(t){const n=Math.cos(t),r=Math.sin(t),s=this.a,i=this.c,o=this.tx;return this.a=s*n-this.b*r,this.b=s*r+this.b*n,this.c=i*n-this.d*r,this.d=i*r+this.d*n,this.tx=o*n-this.ty*r,this.ty=o*r+this.ty*n,this}append(t){const n=this.a,r=this.b,s=this.c,i=this.d;return this.a=t.a*n+t.b*s,this.b=t.a*r+t.b*i,this.c=t.c*n+t.d*s,this.d=t.c*r+t.d*i,this.tx=t.tx*n+t.ty*s+this.tx,this.ty=t.tx*r+t.ty*i+this.ty,this}appendFrom(t,n){const r=t.a,s=t.b,i=t.c,o=t.d,a=t.tx,l=t.ty,u=n.a,c=n.b,f=n.c,h=n.d;return this.a=r*u+s*f,this.b=r*c+s*h,this.c=i*u+o*f,this.d=i*c+o*h,this.tx=a*u+l*f+n.tx,this.ty=a*c+l*h+n.ty,this}setTransform(t,n,r,s,i,o,a,l,u){return this.a=Math.cos(a+u)*i,this.b=Math.sin(a+u)*i,this.c=-Math.sin(a-l)*o,this.d=Math.cos(a-l)*o,this.tx=t-(r*this.a+s*this.c),this.ty=n-(r*this.b+s*this.d),this}prepend(t){const n=this.tx;if(t.a!==1||t.b!==0||t.c!==0||t.d!==1){const r=this.a,s=this.c;this.a=r*t.a+this.b*t.c,this.b=r*t.b+this.b*t.d,this.c=s*t.a+this.d*t.c,this.d=s*t.b+this.d*t.d}return this.tx=n*t.a+this.ty*t.c+t.tx,this.ty=n*t.b+this.ty*t.d+t.ty,this}decompose(t){const n=this.a,r=this.b,s=this.c,i=this.d,o=t.pivot,a=-Math.atan2(-s,i),l=Math.atan2(r,n),u=Math.abs(a+l);return u<1e-5||Math.abs(jp-u)<1e-5?(t.rotation=l,t.skew.x=t.skew.y=0):(t.rotation=0,t.skew.x=a,t.skew.y=l),t.scale.x=Math.sqrt(n*n+r*r),t.scale.y=Math.sqrt(s*s+i*i),t.position.x=this.tx+(o.x*n+o.y*s),t.position.y=this.ty+(o.x*r+o.y*i),t}invert(){const t=this.a,n=this.b,r=this.c,s=this.d,i=this.tx,o=t*s-n*r;return this.a=s/o,this.b=-n/o,this.c=-r/o,this.d=t/o,this.tx=(r*this.ty-s*i)/o,this.ty=-(t*this.ty-n*i)/o,this}isIdentity(){return this.a===1&&this.b===0&&this.c===0&&this.d===1&&this.tx===0&&this.ty===0}identity(){return this.a=1,this.b=0,this.c=0,this.d=1,this.tx=0,this.ty=0,this}clone(){const t=new at;return t.a=this.a,t.b=this.b,t.c=this.c,t.d=this.d,t.tx=this.tx,t.ty=this.ty,t}copyTo(t){return t.a=this.a,t.b=this.b,t.c=this.c,t.d=this.d,t.tx=this.tx,t.ty=this.ty,t}copyFrom(t){return this.a=t.a,this.b=t.b,this.c=t.c,this.d=t.d,this.tx=t.tx,this.ty=t.ty,this}equals(t){return t.a===this.a&&t.b===this.b&&t.c===this.c&&t.d===this.d&&t.tx===this.tx&&t.ty===this.ty}toString(){return`[pixi.js:Matrix a=${this.a} b=${this.b} c=${this.c} d=${this.d} tx=${this.tx} ty=${this.ty}]`}static get IDENTITY(){return Gp.identity()}static get shared(){return Dp.identity()}}const Dp=new at,Gp=new at,en=[1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1,0,1],nn=[0,1,1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1],rn=[0,-1,-1,-1,0,1,1,1,0,1,1,1,0,-1,-1,-1],sn=[1,1,0,-1,-1,-1,0,1,-1,-1,0,1,1,1,0,-1],zi=[],Hc=[],kr=Math.sign;function Wp(){for(let e=0;e<16;e++){const t=[];zi.push(t);for(let n=0;n<16;n++){const r=kr(en[e]*en[n]+rn[e]*nn[n]),s=kr(nn[e]*en[n]+sn[e]*nn[n]),i=kr(en[e]*rn[n]+rn[e]*sn[n]),o=kr(nn[e]*rn[n]+sn[e]*sn[n]);for(let a=0;a<16;a++)if(en[a]===r&&nn[a]===s&&rn[a]===i&&sn[a]===o){t.push(a);break}}}for(let e=0;e<16;e++){const t=new at;t.set(en[e],nn[e],rn[e],sn[e],0,0),Hc.push(t)}}Wp();const pt={E:0,SE:1,S:2,SW:3,W:4,NW:5,N:6,NE:7,MIRROR_VERTICAL:8,MAIN_DIAGONAL:10,MIRROR_HORIZONTAL:12,REVERSE_DIAGONAL:14,uX:e=>en[e],uY:e=>nn[e],vX:e=>rn[e],vY:e=>sn[e],inv:e=>e&8?e&15:-e&7,add:(e,t)=>zi[e][t],sub:(e,t)=>zi[e][pt.inv(t)],rotate180:e=>e^4,isVertical:e=>(e&3)===2,byDirection:(e,t)=>Math.abs(e)*2<=Math.abs(t)?t>=0?pt.S:pt.N:Math.abs(t)*2<=Math.abs(e)?e>0?pt.E:pt.W:t>0?e>0?pt.SE:pt.SW:e>0?pt.NE:pt.NW,matrixAppendRotationInv:(e,t,n=0,r=0)=>{const s=Hc[pt.inv(t)];s.tx=n,s.ty=r,e.append(s)}},Ir=[new vt,new vt,new vt,new vt];class wt{constructor(t=0,n=0,r=0,s=0){this.type="rectangle",this.x=Number(t),this.y=Number(n),this.width=Number(r),this.height=Number(s)}get left(){return this.x}get right(){return this.x+this.width}get top(){return this.y}get bottom(){return this.y+this.height}isEmpty(){return this.left===this.right||this.top===this.bottom}static get EMPTY(){return new wt(0,0,0,0)}clone(){return new wt(this.x,this.y,this.width,this.height)}copyFromBounds(t){return this.x=t.minX,this.y=t.minY,this.width=t.maxX-t.minX,this.height=t.maxY-t.minY,this}copyFrom(t){return this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height,this}copyTo(t){return t.copyFrom(this),t}contains(t,n){return this.width<=0||this.height<=0?!1:t>=this.x&&t<this.x+this.width&&n>=this.y&&n<this.y+this.height}strokeContains(t,n,r){const{width:s,height:i}=this;if(s<=0||i<=0)return!1;const o=this.x,a=this.y,l=o-r/2,u=o+s+r/2,c=a-r/2,f=a+i+r/2,h=o+r/2,d=o+s-r/2,p=a+r/2,m=a+i-r/2;return t>=l&&t<=u&&n>=c&&n<=f&&!(t>h&&t<d&&n>p&&n<m)}intersects(t,n){if(!n){const I=this.x<t.x?t.x:this.x;if((this.right>t.right?t.right:this.right)<=I)return!1;const A=this.y<t.y?t.y:this.y;return(this.bottom>t.bottom?t.bottom:this.bottom)>A}const r=this.left,s=this.right,i=this.top,o=this.bottom;if(s<=r||o<=i)return!1;const a=Ir[0].set(t.left,t.top),l=Ir[1].set(t.left,t.bottom),u=Ir[2].set(t.right,t.top),c=Ir[3].set(t.right,t.bottom);if(u.x<=a.x||l.y<=a.y)return!1;const f=Math.sign(n.a*n.d-n.b*n.c);if(f===0||(n.apply(a,a),n.apply(l,l),n.apply(u,u),n.apply(c,c),Math.max(a.x,l.x,u.x,c.x)<=r||Math.min(a.x,l.x,u.x,c.x)>=s||Math.max(a.y,l.y,u.y,c.y)<=i||Math.min(a.y,l.y,u.y,c.y)>=o))return!1;const h=f*(l.y-a.y),d=f*(a.x-l.x),p=h*r+d*i,m=h*s+d*i,x=h*r+d*o,y=h*s+d*o;if(Math.max(p,m,x,y)<=h*a.x+d*a.y||Math.min(p,m,x,y)>=h*c.x+d*c.y)return!1;const g=f*(a.y-u.y),v=f*(u.x-a.x),b=g*r+v*i,k=g*s+v*i,P=g*r+v*o,O=g*s+v*o;return!(Math.max(b,k,P,O)<=g*a.x+v*a.y||Math.min(b,k,P,O)>=g*c.x+v*c.y)}pad(t=0,n=t){return this.x-=t,this.y-=n,this.width+=t*2,this.height+=n*2,this}fit(t){const n=Math.max(this.x,t.x),r=Math.min(this.x+this.width,t.x+t.width),s=Math.max(this.y,t.y),i=Math.min(this.y+this.height,t.y+t.height);return this.x=n,this.width=Math.max(r-n,0),this.y=s,this.height=Math.max(i-s,0),this}ceil(t=1,n=.001){const r=Math.ceil((this.x+this.width-n)*t)/t,s=Math.ceil((this.y+this.height-n)*t)/t;return this.x=Math.floor((this.x+n)*t)/t,this.y=Math.floor((this.y+n)*t)/t,this.width=r-this.x,this.height=s-this.y,this}enlarge(t){const n=Math.min(this.x,t.x),r=Math.max(this.x+this.width,t.x+t.width),s=Math.min(this.y,t.y),i=Math.max(this.y+this.height,t.y+t.height);return this.x=n,this.width=r-n,this.y=s,this.height=i-s,this}getBounds(t){return t=t||new wt,t.copyFrom(this),t}toString(){return`[pixi.js/math:Rectangle x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`}}const js={default:-1};function Ct(e="default"){return js[e]===void 0&&(js[e]=-1),++js[e]}const La={},ct="8.0.0";function ut(e,t,n=3){if(La[t])return;let r=new Error().stack;typeof r>"u"?console.warn("PixiJS Deprecation Warning: ",`${t}
Deprecated since v${e}`):(r=r.split(`
`).splice(n).join(`
`),console.groupCollapsed?(console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s","color:#614108;background:#fffbe6","font-weight:normal;color:#614108;background:#fffbe6",`${t}
Deprecated since v${e}`),console.warn(r),console.groupEnd()):(console.warn("PixiJS Deprecation Warning: ",`${t}
Deprecated since v${e}`),console.warn(r))),La[t]=!0}const $c=()=>{};function ja(e){return e+=e===0?1:0,--e,e|=e>>>1,e|=e>>>2,e|=e>>>4,e|=e>>>8,e|=e>>>16,e+1}function Na(e){return!(e&e-1)&&!!e}function Hp(e){const t={};for(const n in e)e[n]!==void 0&&(t[n]=e[n]);return t}const Ua=Object.create(null);function $p(e){const t=Ua[e];return t===void 0&&(Ua[e]=Ct("resource")),t}const Vc=class qc extends ce{constructor(t={}){super(),this._resourceType="textureSampler",this._touched=0,this._maxAnisotropy=1,this.destroyed=!1,t={...qc.defaultOptions,...t},this.addressMode=t.addressMode,this.addressModeU=t.addressModeU??this.addressModeU,this.addressModeV=t.addressModeV??this.addressModeV,this.addressModeW=t.addressModeW??this.addressModeW,this.scaleMode=t.scaleMode,this.magFilter=t.magFilter??this.magFilter,this.minFilter=t.minFilter??this.minFilter,this.mipmapFilter=t.mipmapFilter??this.mipmapFilter,this.lodMinClamp=t.lodMinClamp,this.lodMaxClamp=t.lodMaxClamp,this.compare=t.compare,this.maxAnisotropy=t.maxAnisotropy??1}set addressMode(t){this.addressModeU=t,this.addressModeV=t,this.addressModeW=t}get addressMode(){return this.addressModeU}set wrapMode(t){ut(ct,"TextureStyle.wrapMode is now TextureStyle.addressMode"),this.addressMode=t}get wrapMode(){return this.addressMode}set scaleMode(t){this.magFilter=t,this.minFilter=t,this.mipmapFilter=t}get scaleMode(){return this.magFilter}set maxAnisotropy(t){this._maxAnisotropy=Math.min(t,16),this._maxAnisotropy>1&&(this.scaleMode="linear")}get maxAnisotropy(){return this._maxAnisotropy}get _resourceId(){return this._sharedResourceId||this._generateResourceId()}update(){this.emit("change",this),this._sharedResourceId=null}_generateResourceId(){const t=`${this.addressModeU}-${this.addressModeV}-${this.addressModeW}-${this.magFilter}-${this.minFilter}-${this.mipmapFilter}-${this.lodMinClamp}-${this.lodMaxClamp}-${this.compare}-${this._maxAnisotropy}`;return this._sharedResourceId=$p(t),this._resourceId}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this.removeAllListeners()}};Vc.defaultOptions={addressMode:"clamp-to-edge",scaleMode:"linear"};let Vp=Vc;const Xc=class Yc extends ce{constructor(t={}){super(),this.options=t,this.uid=Ct("textureSource"),this._resourceType="textureSource",this._resourceId=Ct("resource"),this.uploadMethodId="unknown",this._resolution=1,this.pixelWidth=1,this.pixelHeight=1,this.width=1,this.height=1,this.sampleCount=1,this.mipLevelCount=1,this.autoGenerateMipmaps=!1,this.format="rgba8unorm",this.dimension="2d",this.antialias=!1,this._touched=0,this._batchTick=-1,this._textureBindLocation=-1,t={...Yc.defaultOptions,...t},this.label=t.label??"",this.resource=t.resource,this.autoGarbageCollect=t.autoGarbageCollect,this._resolution=t.resolution,t.width?this.pixelWidth=t.width*this._resolution:this.pixelWidth=this.resource?this.resourceWidth??1:1,t.height?this.pixelHeight=t.height*this._resolution:this.pixelHeight=this.resource?this.resourceHeight??1:1,this.width=this.pixelWidth/this._resolution,this.height=this.pixelHeight/this._resolution,this.format=t.format,this.dimension=t.dimensions,this.mipLevelCount=t.mipLevelCount,this.autoGenerateMipmaps=t.autoGenerateMipmaps,this.sampleCount=t.sampleCount,this.antialias=t.antialias,this.alphaMode=t.alphaMode,this.style=new Vp(Hp(t)),this.destroyed=!1,this._refreshPOT()}get source(){return this}get style(){return this._style}set style(t){var n,r;this.style!==t&&((n=this._style)==null||n.off("change",this._onStyleChange,this),this._style=t,(r=this._style)==null||r.on("change",this._onStyleChange,this),this._onStyleChange())}get addressMode(){return this._style.addressMode}set addressMode(t){this._style.addressMode=t}get repeatMode(){return this._style.addressMode}set repeatMode(t){this._style.addressMode=t}get magFilter(){return this._style.magFilter}set magFilter(t){this._style.magFilter=t}get minFilter(){return this._style.minFilter}set minFilter(t){this._style.minFilter=t}get mipmapFilter(){return this._style.mipmapFilter}set mipmapFilter(t){this._style.mipmapFilter=t}get lodMinClamp(){return this._style.lodMinClamp}set lodMinClamp(t){this._style.lodMinClamp=t}get lodMaxClamp(){return this._style.lodMaxClamp}set lodMaxClamp(t){this._style.lodMaxClamp=t}_onStyleChange(){this.emit("styleChange",this)}update(){if(this.resource){const t=this._resolution;if(this.resize(this.resourceWidth/t,this.resourceHeight/t))return}this.emit("update",this)}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this._style&&(this._style.destroy(),this._style=null),this.uploadMethodId=null,this.resource=null,this.removeAllListeners()}unload(){this._resourceId=Ct("resource"),this.emit("change",this),this.emit("unload",this)}get resourceWidth(){const{resource:t}=this;return t.naturalWidth||t.videoWidth||t.displayWidth||t.width}get resourceHeight(){const{resource:t}=this;return t.naturalHeight||t.videoHeight||t.displayHeight||t.height}get resolution(){return this._resolution}set resolution(t){this._resolution!==t&&(this._resolution=t,this.width=this.pixelWidth/t,this.height=this.pixelHeight/t)}resize(t,n,r){r=r||this._resolution,t=t||this.width,n=n||this.height;const s=Math.round(t*r),i=Math.round(n*r);return this.width=s/r,this.height=i/r,this._resolution=r,this.pixelWidth===s&&this.pixelHeight===i?!1:(this._refreshPOT(),this.pixelWidth=s,this.pixelHeight=i,this.emit("resize",this),this._resourceId=Ct("resource"),this.emit("change",this),!0)}updateMipmaps(){this.autoGenerateMipmaps&&this.mipLevelCount>1&&this.emit("updateMipmaps",this)}set wrapMode(t){this._style.wrapMode=t}get wrapMode(){return this._style.wrapMode}set scaleMode(t){this._style.scaleMode=t}get scaleMode(){return this._style.scaleMode}_refreshPOT(){this.isPowerOfTwo=Na(this.pixelWidth)&&Na(this.pixelHeight)}static test(t){throw new Error("Unimplemented")}};Xc.defaultOptions={resolution:1,format:"bgra8unorm",alphaMode:"premultiply-alpha-on-upload",dimensions:"2d",mipLevelCount:1,autoGenerateMipmaps:!1,sampleCount:1,antialias:!1,autoGarbageCollect:!1};let Ve=Xc;class Ao extends Ve{constructor(t){const n=t.resource||new Float32Array(t.width*t.height*4);let r=t.format;r||(n instanceof Float32Array?r="rgba32float":n instanceof Int32Array||n instanceof Uint32Array?r="rgba32uint":n instanceof Int16Array||n instanceof Uint16Array?r="rgba16uint":(n instanceof Int8Array,r="bgra8unorm")),super({...t,resource:n,format:r}),this.uploadMethodId="buffer"}static test(t){return t instanceof Int8Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Int16Array||t instanceof Uint16Array||t instanceof Int32Array||t instanceof Uint32Array||t instanceof Float32Array}}Ao.extension=Y.TextureSource;const Da=new at;class qp{constructor(t,n){this.mapCoord=new at,this.uClampFrame=new Float32Array(4),this.uClampOffset=new Float32Array(2),this._textureID=-1,this._updateID=0,this.clampOffset=0,typeof n>"u"?this.clampMargin=t.width<10?0:.5:this.clampMargin=n,this.isSimple=!1,this.texture=t}get texture(){return this._texture}set texture(t){var n;this.texture!==t&&((n=this._texture)==null||n.removeListener("update",this.update,this),this._texture=t,this._texture.addListener("update",this.update,this),this.update())}multiplyUvs(t,n){n===void 0&&(n=t);const r=this.mapCoord;for(let s=0;s<t.length;s+=2){const i=t[s],o=t[s+1];n[s]=i*r.a+o*r.c+r.tx,n[s+1]=i*r.b+o*r.d+r.ty}return n}update(){const t=this._texture;this._updateID++;const n=t.uvs;this.mapCoord.set(n.x1-n.x0,n.y1-n.y0,n.x3-n.x0,n.y3-n.y0,n.x0,n.y0);const r=t.orig,s=t.trim;s&&(Da.set(r.width/s.width,0,0,r.height/s.height,-s.x/s.width,-s.y/s.height),this.mapCoord.append(Da));const i=t.source,o=this.uClampFrame,a=this.clampMargin/i._resolution,l=this.clampOffset;return o[0]=(t.frame.x+a+l)/i.width,o[1]=(t.frame.y+a+l)/i.height,o[2]=(t.frame.x+t.frame.width-a+l)/i.width,o[3]=(t.frame.y+t.frame.height-a+l)/i.height,this.uClampOffset[0]=l/i.pixelWidth,this.uClampOffset[1]=l/i.pixelHeight,this.isSimple=t.frame.width===i.width&&t.frame.height===i.height&&t.rotate===0,!0}}class it extends ce{constructor({source:t,label:n,frame:r,orig:s,trim:i,defaultAnchor:o,defaultBorders:a,rotate:l,dynamic:u}={}){if(super(),this.uid=Ct("texture"),this.uvs={x0:0,y0:0,x1:0,y1:0,x2:0,y2:0,x3:0,y3:0},this.frame=new wt,this.noFrame=!1,this.dynamic=!1,this.isTexture=!0,this.label=n,this.source=(t==null?void 0:t.source)??new Ve,this.noFrame=!r,r)this.frame.copyFrom(r);else{const{width:c,height:f}=this._source;this.frame.width=c,this.frame.height=f}this.orig=s||this.frame,this.trim=i,this.rotate=l??0,this.defaultAnchor=o,this.defaultBorders=a,this.destroyed=!1,this.dynamic=u||!1,this.updateUvs()}set source(t){this._source&&this._source.off("resize",this.update,this),this._source=t,t.on("resize",this.update,this),this.emit("update",this)}get source(){return this._source}get textureMatrix(){return this._textureMatrix||(this._textureMatrix=new qp(this)),this._textureMatrix}get width(){return this.orig.width}get height(){return this.orig.height}updateUvs(){const{uvs:t,frame:n}=this,{width:r,height:s}=this._source,i=n.x/r,o=n.y/s,a=n.width/r,l=n.height/s;let u=this.rotate;if(u){const c=a/2,f=l/2,h=i+c,d=o+f;u=pt.add(u,pt.NW),t.x0=h+c*pt.uX(u),t.y0=d+f*pt.uY(u),u=pt.add(u,2),t.x1=h+c*pt.uX(u),t.y1=d+f*pt.uY(u),u=pt.add(u,2),t.x2=h+c*pt.uX(u),t.y2=d+f*pt.uY(u),u=pt.add(u,2),t.x3=h+c*pt.uX(u),t.y3=d+f*pt.uY(u)}else t.x0=i,t.y0=o,t.x1=i+a,t.y1=o,t.x2=i+a,t.y2=o+l,t.x3=i,t.y3=o+l}destroy(t=!1){this._source&&t&&(this._source.destroy(),this._source=null),this._textureMatrix=null,this.destroyed=!0,this.emit("destroy",this),this.removeAllListeners()}update(){this.noFrame&&(this.frame.width=this._source.width,this.frame.height=this._source.height),this.updateUvs(),this.emit("update",this)}get baseTexture(){return ut(ct,"Texture.baseTexture is now Texture.source"),this._source}}it.EMPTY=new it({label:"EMPTY",source:new Ve({label:"EMPTY"})});it.EMPTY.destroy=$c;it.WHITE=new it({source:new Ao({resource:new Uint8Array([255,255,255,255]),width:1,height:1,alphaMode:"premultiply-alpha-on-upload",label:"WHITE"}),label:"WHITE"});it.WHITE.destroy=$c;function Xp(e,t,n,r){const{width:s,height:i}=n.orig,o=n.trim;if(o){const a=o.width,l=o.height;e.minX=o.x-t._x*s-r,e.maxX=e.minX+a,e.minY=o.y-t._y*i-r,e.maxY=e.minY+l}else e.minX=-t._x*s-r,e.maxX=e.minX+s,e.minY=-t._y*i-r,e.maxY=e.minY+i}var Yp={grad:.9,turn:360,rad:360/(2*Math.PI)},be=function(e){return typeof e=="string"?e.length>0:typeof e=="number"},Mt=function(e,t,n){return t===void 0&&(t=0),n===void 0&&(n=Math.pow(10,t)),Math.round(n*e)/n+0},Zt=function(e,t,n){return t===void 0&&(t=0),n===void 0&&(n=1),e>n?n:e>t?e:t},Kc=function(e){return(e=isFinite(e)?e%360:0)>0?e:e+360},Ga=function(e){return{r:Zt(e.r,0,255),g:Zt(e.g,0,255),b:Zt(e.b,0,255),a:Zt(e.a)}},Ns=function(e){return{r:Mt(e.r),g:Mt(e.g),b:Mt(e.b),a:Mt(e.a,3)}},Kp=/^#([0-9a-f]{3,8})$/i,zr=function(e){var t=e.toString(16);return t.length<2?"0"+t:t},Zc=function(e){var t=e.r,n=e.g,r=e.b,s=e.a,i=Math.max(t,n,r),o=i-Math.min(t,n,r),a=o?i===t?(n-r)/o:i===n?2+(r-t)/o:4+(t-n)/o:0;return{h:60*(a<0?a+6:a),s:i?o/i*100:0,v:i/255*100,a:s}},Qc=function(e){var t=e.h,n=e.s,r=e.v,s=e.a;t=t/360*6,n/=100,r/=100;var i=Math.floor(t),o=r*(1-n),a=r*(1-(t-i)*n),l=r*(1-(1-t+i)*n),u=i%6;return{r:255*[r,a,o,o,l,r][u],g:255*[l,r,r,a,o,o][u],b:255*[o,o,l,r,r,a][u],a:s}},Wa=function(e){return{h:Kc(e.h),s:Zt(e.s,0,100),l:Zt(e.l,0,100),a:Zt(e.a)}},Ha=function(e){return{h:Mt(e.h),s:Mt(e.s),l:Mt(e.l),a:Mt(e.a,3)}},$a=function(e){return Qc((n=(t=e).s,{h:t.h,s:(n*=((r=t.l)<50?r:100-r)/100)>0?2*n/(r+n)*100:0,v:r+n,a:t.a}));var t,n,r},er=function(e){return{h:(t=Zc(e)).h,s:(s=(200-(n=t.s))*(r=t.v)/100)>0&&s<200?n*r/100/(s<=100?s:200-s)*100:0,l:s/2,a:t.a};var t,n,r,s},Zp=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Qp=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Jp=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,tx=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Ei={string:[[function(e){var t=Kp.exec(e);return t?(e=t[1]).length<=4?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:e.length===4?Mt(parseInt(e[3]+e[3],16)/255,2):1}:e.length===6||e.length===8?{r:parseInt(e.substr(0,2),16),g:parseInt(e.substr(2,2),16),b:parseInt(e.substr(4,2),16),a:e.length===8?Mt(parseInt(e.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(e){var t=Jp.exec(e)||tx.exec(e);return t?t[2]!==t[4]||t[4]!==t[6]?null:Ga({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:t[7]===void 0?1:Number(t[7])/(t[8]?100:1)}):null},"rgb"],[function(e){var t=Zp.exec(e)||Qp.exec(e);if(!t)return null;var n,r,s=Wa({h:(n=t[1],r=t[2],r===void 0&&(r="deg"),Number(n)*(Yp[r]||1)),s:Number(t[3]),l:Number(t[4]),a:t[5]===void 0?1:Number(t[5])/(t[6]?100:1)});return $a(s)},"hsl"]],object:[[function(e){var t=e.r,n=e.g,r=e.b,s=e.a,i=s===void 0?1:s;return be(t)&&be(n)&&be(r)?Ga({r:Number(t),g:Number(n),b:Number(r),a:Number(i)}):null},"rgb"],[function(e){var t=e.h,n=e.s,r=e.l,s=e.a,i=s===void 0?1:s;if(!be(t)||!be(n)||!be(r))return null;var o=Wa({h:Number(t),s:Number(n),l:Number(r),a:Number(i)});return $a(o)},"hsl"],[function(e){var t=e.h,n=e.s,r=e.v,s=e.a,i=s===void 0?1:s;if(!be(t)||!be(n)||!be(r))return null;var o=function(a){return{h:Kc(a.h),s:Zt(a.s,0,100),v:Zt(a.v,0,100),a:Zt(a.a)}}({h:Number(t),s:Number(n),v:Number(r),a:Number(i)});return Qc(o)},"hsv"]]},Va=function(e,t){for(var n=0;n<t.length;n++){var r=t[n][0](e);if(r)return[r,t[n][1]]}return[null,void 0]},ex=function(e){return typeof e=="string"?Va(e.trim(),Ei.string):typeof e=="object"&&e!==null?Va(e,Ei.object):[null,void 0]},Us=function(e,t){var n=er(e);return{h:n.h,s:Zt(n.s+100*t,0,100),l:n.l,a:n.a}},Ds=function(e){return(299*e.r+587*e.g+114*e.b)/1e3/255},qa=function(e,t){var n=er(e);return{h:n.h,s:n.s,l:Zt(n.l+100*t,0,100),a:n.a}},Fi=function(){function e(t){this.parsed=ex(t)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return e.prototype.isValid=function(){return this.parsed!==null},e.prototype.brightness=function(){return Mt(Ds(this.rgba),2)},e.prototype.isDark=function(){return Ds(this.rgba)<.5},e.prototype.isLight=function(){return Ds(this.rgba)>=.5},e.prototype.toHex=function(){return t=Ns(this.rgba),n=t.r,r=t.g,s=t.b,o=(i=t.a)<1?zr(Mt(255*i)):"","#"+zr(n)+zr(r)+zr(s)+o;var t,n,r,s,i,o},e.prototype.toRgb=function(){return Ns(this.rgba)},e.prototype.toRgbString=function(){return t=Ns(this.rgba),n=t.r,r=t.g,s=t.b,(i=t.a)<1?"rgba("+n+", "+r+", "+s+", "+i+")":"rgb("+n+", "+r+", "+s+")";var t,n,r,s,i},e.prototype.toHsl=function(){return Ha(er(this.rgba))},e.prototype.toHslString=function(){return t=Ha(er(this.rgba)),n=t.h,r=t.s,s=t.l,(i=t.a)<1?"hsla("+n+", "+r+"%, "+s+"%, "+i+")":"hsl("+n+", "+r+"%, "+s+"%)";var t,n,r,s,i},e.prototype.toHsv=function(){return t=Zc(this.rgba),{h:Mt(t.h),s:Mt(t.s),v:Mt(t.v),a:Mt(t.a,3)};var t},e.prototype.invert=function(){return pe({r:255-(t=this.rgba).r,g:255-t.g,b:255-t.b,a:t.a});var t},e.prototype.saturate=function(t){return t===void 0&&(t=.1),pe(Us(this.rgba,t))},e.prototype.desaturate=function(t){return t===void 0&&(t=.1),pe(Us(this.rgba,-t))},e.prototype.grayscale=function(){return pe(Us(this.rgba,-1))},e.prototype.lighten=function(t){return t===void 0&&(t=.1),pe(qa(this.rgba,t))},e.prototype.darken=function(t){return t===void 0&&(t=.1),pe(qa(this.rgba,-t))},e.prototype.rotate=function(t){return t===void 0&&(t=15),this.hue(this.hue()+t)},e.prototype.alpha=function(t){return typeof t=="number"?pe({r:(n=this.rgba).r,g:n.g,b:n.b,a:t}):Mt(this.rgba.a,3);var n},e.prototype.hue=function(t){var n=er(this.rgba);return typeof t=="number"?pe({h:t,s:n.s,l:n.l,a:n.a}):Mt(n.h)},e.prototype.isEqual=function(t){return this.toHex()===pe(t).toHex()},e}(),pe=function(e){return e instanceof Fi?e:new Fi(e)},Xa=[],nx=function(e){e.forEach(function(t){Xa.indexOf(t)<0&&(t(Fi,Ei),Xa.push(t))})};function rx(e,t){var n={white:"#ffffff",bisque:"#ffe4c4",blue:"#0000ff",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",antiquewhite:"#faebd7",aqua:"#00ffff",azure:"#f0ffff",whitesmoke:"#f5f5f5",papayawhip:"#ffefd5",plum:"#dda0dd",blanchedalmond:"#ffebcd",black:"#000000",gold:"#ffd700",goldenrod:"#daa520",gainsboro:"#dcdcdc",cornsilk:"#fff8dc",cornflowerblue:"#6495ed",burlywood:"#deb887",aquamarine:"#7fffd4",beige:"#f5f5dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkkhaki:"#bdb76b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",peachpuff:"#ffdab9",darkmagenta:"#8b008b",darkred:"#8b0000",darkorchid:"#9932cc",darkorange:"#ff8c00",darkslateblue:"#483d8b",gray:"#808080",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",deeppink:"#ff1493",deepskyblue:"#00bfff",wheat:"#f5deb3",firebrick:"#b22222",floralwhite:"#fffaf0",ghostwhite:"#f8f8ff",darkviolet:"#9400d3",magenta:"#ff00ff",green:"#008000",dodgerblue:"#1e90ff",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",blueviolet:"#8a2be2",forestgreen:"#228b22",lawngreen:"#7cfc00",indianred:"#cd5c5c",indigo:"#4b0082",fuchsia:"#ff00ff",brown:"#a52a2a",maroon:"#800000",mediumblue:"#0000cd",lightcoral:"#f08080",darkturquoise:"#00ced1",lightcyan:"#e0ffff",ivory:"#fffff0",lightyellow:"#ffffe0",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",linen:"#faf0e6",mediumaquamarine:"#66cdaa",lemonchiffon:"#fffacd",lime:"#00ff00",khaki:"#f0e68c",mediumseagreen:"#3cb371",limegreen:"#32cd32",mediumspringgreen:"#00fa9a",lightskyblue:"#87cefa",lightblue:"#add8e6",midnightblue:"#191970",lightpink:"#ffb6c1",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",mintcream:"#f5fffa",lightslategray:"#778899",lightslategrey:"#778899",navajowhite:"#ffdead",navy:"#000080",mediumvioletred:"#c71585",powderblue:"#b0e0e6",palegoldenrod:"#eee8aa",oldlace:"#fdf5e6",paleturquoise:"#afeeee",mediumturquoise:"#48d1cc",mediumorchid:"#ba55d3",rebeccapurple:"#663399",lightsteelblue:"#b0c4de",mediumslateblue:"#7b68ee",thistle:"#d8bfd8",tan:"#d2b48c",orchid:"#da70d6",mediumpurple:"#9370db",purple:"#800080",pink:"#ffc0cb",skyblue:"#87ceeb",springgreen:"#00ff7f",palegreen:"#98fb98",red:"#ff0000",yellow:"#ffff00",slateblue:"#6a5acd",lavenderblush:"#fff0f5",peru:"#cd853f",palevioletred:"#db7093",violet:"#ee82ee",teal:"#008080",slategray:"#708090",slategrey:"#708090",aliceblue:"#f0f8ff",darkseagreen:"#8fbc8f",darkolivegreen:"#556b2f",greenyellow:"#adff2f",seagreen:"#2e8b57",seashell:"#fff5ee",tomato:"#ff6347",silver:"#c0c0c0",sienna:"#a0522d",lavender:"#e6e6fa",lightgreen:"#90ee90",orange:"#ffa500",orangered:"#ff4500",steelblue:"#4682b4",royalblue:"#4169e1",turquoise:"#40e0d0",yellowgreen:"#9acd32",salmon:"#fa8072",saddlebrown:"#8b4513",sandybrown:"#f4a460",rosybrown:"#bc8f8f",darksalmon:"#e9967a",lightgoldenrodyellow:"#fafad2",snow:"#fffafa",lightgrey:"#d3d3d3",lightgray:"#d3d3d3",dimgray:"#696969",dimgrey:"#696969",olivedrab:"#6b8e23",olive:"#808000"},r={};for(var s in n)r[n[s]]=s;var i={};e.prototype.toName=function(o){if(!(this.rgba.a||this.rgba.r||this.rgba.g||this.rgba.b))return"transparent";var a,l,u=r[this.toHex()];if(u)return u;if(o!=null&&o.closest){var c=this.toRgb(),f=1/0,h="black";if(!i.length)for(var d in n)i[d]=new e(n[d]).toRgb();for(var p in n){var m=(a=c,l=i[p],Math.pow(a.r-l.r,2)+Math.pow(a.g-l.g,2)+Math.pow(a.b-l.b,2));m<f&&(f=m,h=p)}return h}},t.string.push([function(o){var a=o.toLowerCase(),l=a==="transparent"?"#0000":n[a];return l?new e(l).toRgb():null},"name"])}nx([rx]);const Pn=class $n{constructor(t=16777215){this._value=null,this._components=new Float32Array(4),this._components.fill(1),this._int=16777215,this.value=t}get red(){return this._components[0]}get green(){return this._components[1]}get blue(){return this._components[2]}get alpha(){return this._components[3]}setValue(t){return this.value=t,this}set value(t){if(t instanceof $n)this._value=this._cloneSource(t._value),this._int=t._int,this._components.set(t._components);else{if(t===null)throw new Error("Cannot set Color#value to null");(this._value===null||!this._isSourceEqual(this._value,t))&&(this._normalize(t),this._value=this._cloneSource(t))}}get value(){return this._value}_cloneSource(t){return typeof t=="string"||typeof t=="number"||t instanceof Number||t===null?t:Array.isArray(t)||ArrayBuffer.isView(t)?t.slice(0):typeof t=="object"&&t!==null?{...t}:t}_isSourceEqual(t,n){const r=typeof t;if(r!==typeof n)return!1;if(r==="number"||r==="string"||t instanceof Number)return t===n;if(Array.isArray(t)&&Array.isArray(n)||ArrayBuffer.isView(t)&&ArrayBuffer.isView(n))return t.length!==n.length?!1:t.every((i,o)=>i===n[o]);if(t!==null&&n!==null){const i=Object.keys(t),o=Object.keys(n);return i.length!==o.length?!1:i.every(a=>t[a]===n[a])}return t===n}toRgba(){const[t,n,r,s]=this._components;return{r:t,g:n,b:r,a:s}}toRgb(){const[t,n,r]=this._components;return{r:t,g:n,b:r}}toRgbaString(){const[t,n,r]=this.toUint8RgbArray();return`rgba(${t},${n},${r},${this.alpha})`}toUint8RgbArray(t){const[n,r,s]=this._components;return this._arrayRgb||(this._arrayRgb=[]),t=t||this._arrayRgb,t[0]=Math.round(n*255),t[1]=Math.round(r*255),t[2]=Math.round(s*255),t}toArray(t){this._arrayRgba||(this._arrayRgba=[]),t=t||this._arrayRgba;const[n,r,s,i]=this._components;return t[0]=n,t[1]=r,t[2]=s,t[3]=i,t}toRgbArray(t){this._arrayRgb||(this._arrayRgb=[]),t=t||this._arrayRgb;const[n,r,s]=this._components;return t[0]=n,t[1]=r,t[2]=s,t}toNumber(){return this._int}toBgrNumber(){const[t,n,r]=this.toUint8RgbArray();return(r<<16)+(n<<8)+t}toLittleEndianNumber(){const t=this._int;return(t>>16)+(t&65280)+((t&255)<<16)}multiply(t){const[n,r,s,i]=$n._temp.setValue(t)._components;return this._components[0]*=n,this._components[1]*=r,this._components[2]*=s,this._components[3]*=i,this._refreshInt(),this._value=null,this}premultiply(t,n=!0){return n&&(this._components[0]*=t,this._components[1]*=t,this._components[2]*=t),this._components[3]=t,this._refreshInt(),this._value=null,this}toPremultiplied(t,n=!0){if(t===1)return(255<<24)+this._int;if(t===0)return n?0:this._int;let r=this._int>>16&255,s=this._int>>8&255,i=this._int&255;return n&&(r=r*t+.5|0,s=s*t+.5|0,i=i*t+.5|0),(t*255<<24)+(r<<16)+(s<<8)+i}toHex(){const t=this._int.toString(16);return`#${"000000".substring(0,6-t.length)+t}`}toHexa(){const n=Math.round(this._components[3]*255).toString(16);return this.toHex()+"00".substring(0,2-n.length)+n}setAlpha(t){return this._components[3]=this._clamp(t),this}_normalize(t){let n,r,s,i;if((typeof t=="number"||t instanceof Number)&&t>=0&&t<=16777215){const o=t;n=(o>>16&255)/255,r=(o>>8&255)/255,s=(o&255)/255,i=1}else if((Array.isArray(t)||t instanceof Float32Array)&&t.length>=3&&t.length<=4)t=this._clamp(t),[n,r,s,i=1]=t;else if((t instanceof Uint8Array||t instanceof Uint8ClampedArray)&&t.length>=3&&t.length<=4)t=this._clamp(t,0,255),[n,r,s,i=255]=t,n/=255,r/=255,s/=255,i/=255;else if(typeof t=="string"||typeof t=="object"){if(typeof t=="string"){const a=$n.HEX_PATTERN.exec(t);a&&(t=`#${a[2]}`)}const o=pe(t);o.isValid()&&({r:n,g:r,b:s,a:i}=o.rgba,n/=255,r/=255,s/=255)}if(n!==void 0)this._components[0]=n,this._components[1]=r,this._components[2]=s,this._components[3]=i,this._refreshInt();else throw new Error(`Unable to convert color ${t}`)}_refreshInt(){this._clamp(this._components);const[t,n,r]=this._components;this._int=(t*255<<16)+(n*255<<8)+(r*255|0)}_clamp(t,n=0,r=1){return typeof t=="number"?Math.min(Math.max(t,n),r):(t.forEach((s,i)=>{t[i]=Math.min(Math.max(s,n),r)}),t)}static isColorLike(t){return typeof t=="number"||typeof t=="string"||t instanceof Number||t instanceof $n||Array.isArray(t)||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Float32Array||t.r!==void 0&&t.g!==void 0&&t.b!==void 0||t.r!==void 0&&t.g!==void 0&&t.b!==void 0&&t.a!==void 0||t.h!==void 0&&t.s!==void 0&&t.l!==void 0||t.h!==void 0&&t.s!==void 0&&t.l!==void 0&&t.a!==void 0||t.h!==void 0&&t.s!==void 0&&t.v!==void 0||t.h!==void 0&&t.s!==void 0&&t.v!==void 0&&t.a!==void 0}};Pn.shared=new Pn;Pn._temp=new Pn;Pn.HEX_PATTERN=/^(#|0x)?(([a-f0-9]{3}){1,2}([a-f0-9]{2})?)$/i;let yt=Pn;const sx={cullArea:null,cullable:!1,cullableChildren:!0};function ix(e,t,n){const r=e.length;let s;if(t>=r||n===0)return;n=t+n>r?r-t:n;const i=r-n;for(s=t;s<i;++s)e[s]=e[s+n];e.length=i}const ox={allowChildren:!0,removeChildren(e=0,t){const n=t??this.children.length,r=n-e,s=[];if(r>0&&r<=n){for(let o=n-1;o>=e;o--){const a=this.children[o];a&&(s.push(a),a.parent=null)}ix(this.children,e,n);const i=this.renderGroup||this.parentRenderGroup;i&&i.removeChildren(s);for(let o=0;o<s.length;++o)this.emit("childRemoved",s[o],this,o),s[o].emit("removed",this);return s}else if(r===0&&this.children.length===0)return s;throw new RangeError("removeChildren: numeric values are outside the acceptable range.")},removeChildAt(e){const t=this.getChildAt(e);return this.removeChild(t)},getChildAt(e){if(e<0||e>=this.children.length)throw new Error(`getChildAt: Index (${e}) does not exist.`);return this.children[e]},setChildIndex(e,t){if(t<0||t>=this.children.length)throw new Error(`The index ${t} supplied is out of bounds ${this.children.length}`);this.getChildIndex(e),this.addChildAt(e,t)},getChildIndex(e){const t=this.children.indexOf(e);if(t===-1)throw new Error("The supplied Container must be a child of the caller");return t},addChildAt(e,t){this.allowChildren||ut(ct,"addChildAt: Only Containers will be allowed to add children in v8.0.0");const{children:n}=this;if(t<0||t>n.length)throw new Error(`${e}addChildAt: The index ${t} supplied is out of bounds ${n.length}`);if(e.parent){const s=e.parent.children.indexOf(e);if(e.parent===this&&s===t)return e;s!==-1&&e.parent.children.splice(s,1)}t===n.length?n.push(e):n.splice(t,0,e),e.parent=this,e.didChange=!0,e.didViewUpdate=!1,e._updateFlags=15;const r=this.renderGroup||this.parentRenderGroup;return r&&r.addChild(e),this.sortableChildren&&(this.sortDirty=!0),this.emit("childAdded",e,this,t),e.emit("added",this),e},swapChildren(e,t){if(e===t)return;const n=this.getChildIndex(e),r=this.getChildIndex(t);this.children[n]=t,this.children[r]=e},removeFromParent(){var e;(e=this.parent)==null||e.removeChild(this)}};class Ya{constructor(){this.pipe="filter",this.priority=1}destroy(){for(let t=0;t<this.filters.length;t++)this.filters[t].destroy();this.filters=null,this.filterArea=null}}class So{constructor(t,n){this._pool=[],this._count=0,this._index=0,this._classType=t,n&&this.prepopulate(n)}prepopulate(t){for(let n=0;n<t;n++)this._pool[this._index++]=new this._classType;this._count+=t}get(t){var r;let n;return this._index>0?n=this._pool[--this._index]:n=new this._classType,(r=n.init)==null||r.call(n,t),n}return(t){var n;(n=t.reset)==null||n.call(t),this._pool[this._index++]=t}get totalSize(){return this._count}get totalFree(){return this._index}get totalUsed(){return this._count-this._index}}class ax{constructor(){this._poolsByClass=new Map}prepopulate(t,n){this.getPool(t).prepopulate(n)}get(t,n){return this.getPool(t).get(n)}return(t){this.getPool(t.constructor).return(t)}getPool(t){return this._poolsByClass.has(t)||this._poolsByClass.set(t,new So(t)),this._poolsByClass.get(t)}stats(){const t={};return this._poolsByClass.forEach(n=>{const r=t[n._classType.name]?n._classType.name+n._classType.ID:n._classType.name;t[r]={free:n.totalFree,used:n.totalUsed,size:n.totalSize}}),t}}const we=new ax;class lx{constructor(){this._effectClasses=[],this._tests=[],this._initialized=!1}init(){this._initialized||(this._initialized=!0,this._effectClasses.forEach(t=>{this.add({test:t.test,maskClass:t})}))}add(t){this._tests.push(t)}getMaskEffect(t){this._initialized||this.init();for(let n=0;n<this._tests.length;n++){const r=this._tests[n];if(r.test(t))return we.get(r.maskClass,t)}return t}returnMaskEffect(t){we.return(t)}}const Oi=new lx;Jt.handleByList(Y.MaskEffect,Oi._effectClasses);const cx={_maskEffect:null,_filterEffect:null,effects:[],addEffect(e){if(this.effects.indexOf(e)!==-1)return;this.effects.push(e),this.effects.sort((r,s)=>r.priority-s.priority);const n=this.renderGroup||this.parentRenderGroup;n&&(n.structureDidChange=!0),this._updateIsSimple()},removeEffect(e){const t=this.effects.indexOf(e);t!==-1&&(this.effects.splice(t,1),this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateIsSimple())},set mask(e){const t=this._maskEffect;(t==null?void 0:t.mask)!==e&&(t&&(this.removeEffect(t),Oi.returnMaskEffect(t),this._maskEffect=null),e!=null&&(this._maskEffect=Oi.getMaskEffect(e),this.addEffect(this._maskEffect)))},get mask(){var e;return(e=this._maskEffect)==null?void 0:e.mask},set filters(e){var i;!Array.isArray(e)&&e&&(e=[e]);const t=this._filterEffect||(this._filterEffect=new Ya);e=e;const n=(e==null?void 0:e.length)>0,r=((i=t.filters)==null?void 0:i.length)>0,s=n!==r;e=Array.isArray(e)?e.slice(0):e,t.filters=Object.freeze(e),s&&(n?this.addEffect(t):(this.removeEffect(t),t.filters=e??null))},get filters(){var e;return(e=this._filterEffect)==null?void 0:e.filters},set filterArea(e){this._filterEffect||(this._filterEffect=new Ya),this._filterEffect.filterArea=e},get filterArea(){var e;return(e=this._filterEffect)==null?void 0:e.filterArea}},ux={label:null,get name(){return ut(ct,"Container.name property has been removed, use Container.label instead"),this.label},set name(e){ut(ct,"Container.name property has been removed, use Container.label instead"),this.label=e},getChildByName(e,t=!1){return this.getChildByLabel(e,t)},getChildByLabel(e,t=!1){const n=this.children;for(let r=0;r<n.length;r++){const s=n[r];if(s.label===e||e instanceof RegExp&&e.test(s.label))return s}if(t)for(let r=0;r<n.length;r++){const i=n[r].getChildByLabel(e,!0);if(i)return i}return null},getChildrenByLabel(e,t=!1,n=[]){const r=this.children;for(let s=0;s<r.length;s++){const i=r[s];(i.label===e||e instanceof RegExp&&e.test(i.label))&&n.push(i)}if(t)for(let s=0;s<r.length;s++)r[s].getChildrenByLabel(e,!0,n);return n}},Ka=new at;class Pe{constructor(t=1/0,n=1/0,r=-1/0,s=-1/0){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.matrix=Ka,this.minX=t,this.minY=n,this.maxX=r,this.maxY=s}isEmpty(){return this.minX>this.maxX||this.minY>this.maxY}get rectangle(){this._rectangle||(this._rectangle=new wt);const t=this._rectangle;return this.minX>this.maxX||this.minY>this.maxY?(t.x=0,t.y=0,t.width=0,t.height=0):t.copyFromBounds(this),t}clear(){return this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.matrix=Ka,this}set(t,n,r,s){this.minX=t,this.minY=n,this.maxX=r,this.maxY=s}addFrame(t,n,r,s,i){i||(i=this.matrix);const o=i.a,a=i.b,l=i.c,u=i.d,c=i.tx,f=i.ty;let h=this.minX,d=this.minY,p=this.maxX,m=this.maxY,x=o*t+l*n+c,y=a*t+u*n+f;x<h&&(h=x),y<d&&(d=y),x>p&&(p=x),y>m&&(m=y),x=o*r+l*n+c,y=a*r+u*n+f,x<h&&(h=x),y<d&&(d=y),x>p&&(p=x),y>m&&(m=y),x=o*t+l*s+c,y=a*t+u*s+f,x<h&&(h=x),y<d&&(d=y),x>p&&(p=x),y>m&&(m=y),x=o*r+l*s+c,y=a*r+u*s+f,x<h&&(h=x),y<d&&(d=y),x>p&&(p=x),y>m&&(m=y),this.minX=h,this.minY=d,this.maxX=p,this.maxY=m}addRect(t,n){this.addFrame(t.x,t.y,t.x+t.width,t.y+t.height,n)}addBounds(t,n){this.addFrame(t.minX,t.minY,t.maxX,t.maxY,n)}addBoundsMask(t){this.minX=this.minX>t.minX?this.minX:t.minX,this.minY=this.minY>t.minY?this.minY:t.minY,this.maxX=this.maxX<t.maxX?this.maxX:t.maxX,this.maxY=this.maxY<t.maxY?this.maxY:t.maxY}applyMatrix(t){const n=this.minX,r=this.minY,s=this.maxX,i=this.maxY,{a:o,b:a,c:l,d:u,tx:c,ty:f}=t;let h=o*n+l*r+c,d=a*n+u*r+f;this.minX=h,this.minY=d,this.maxX=h,this.maxY=d,h=o*s+l*r+c,d=a*s+u*r+f,this.minX=h<this.minX?h:this.minX,this.minY=d<this.minY?d:this.minY,this.maxX=h>this.maxX?h:this.maxX,this.maxY=d>this.maxY?d:this.maxY,h=o*n+l*i+c,d=a*n+u*i+f,this.minX=h<this.minX?h:this.minX,this.minY=d<this.minY?d:this.minY,this.maxX=h>this.maxX?h:this.maxX,this.maxY=d>this.maxY?d:this.maxY,h=o*s+l*i+c,d=a*s+u*i+f,this.minX=h<this.minX?h:this.minX,this.minY=d<this.minY?d:this.minY,this.maxX=h>this.maxX?h:this.maxX,this.maxY=d>this.maxY?d:this.maxY}fit(t){return this.minX<t.left&&(this.minX=t.left),this.maxX>t.right&&(this.maxX=t.right),this.minY<t.top&&(this.minY=t.top),this.maxY>t.bottom&&(this.maxY=t.bottom),this}fitBounds(t,n,r,s){return this.minX<t&&(this.minX=t),this.maxX>n&&(this.maxX=n),this.minY<r&&(this.minY=r),this.maxY>s&&(this.maxY=s),this}pad(t,n=t){return this.minX-=t,this.maxX+=t,this.minY-=n,this.maxY+=n,this}ceil(){return this.minX=Math.floor(this.minX),this.minY=Math.floor(this.minY),this.maxX=Math.ceil(this.maxX),this.maxY=Math.ceil(this.maxY),this}clone(){return new Pe(this.minX,this.minY,this.maxX,this.maxY)}scale(t,n=t){return this.minX*=t,this.minY*=n,this.maxX*=t,this.maxY*=n,this}get x(){return this.minX}set x(t){const n=this.maxX-this.minX;this.minX=t,this.maxX=t+n}get y(){return this.minY}set y(t){const n=this.maxY-this.minY;this.minY=t,this.maxY=t+n}get width(){return this.maxX-this.minX}set width(t){this.maxX=this.minX+t}get height(){return this.maxY-this.minY}set height(t){this.maxY=this.minY+t}get left(){return this.minX}get right(){return this.maxX}get top(){return this.minY}get bottom(){return this.maxY}get isPositive(){return this.maxX-this.minX>0&&this.maxY-this.minY>0}get isValid(){return this.minX+this.minY!==1/0}addVertexData(t,n,r,s){let i=this.minX,o=this.minY,a=this.maxX,l=this.maxY;s||(s=this.matrix);const u=s.a,c=s.b,f=s.c,h=s.d,d=s.tx,p=s.ty;for(let m=n;m<r;m+=2){const x=t[m],y=t[m+1],g=u*x+f*y+d,v=c*x+h*y+p;i=g<i?g:i,o=v<o?v:o,a=g>a?g:a,l=v>l?v:l}this.minX=i,this.minY=o,this.maxX=a,this.maxY=l}containsPoint(t,n){return this.minX<=t&&this.minY<=n&&this.maxX>=t&&this.maxY>=n}toString(){return`[pixi.js:Bounds minX=${this.minX} minY=${this.minY} maxX=${this.maxX} maxY=${this.maxY} width=${this.width} height=${this.height}]`}}const Ae=new So(at),Mn=new So(Pe);function Jc(e,t,n){n.clear();let r,s;return e.parent?t?r=e.parent.worldTransform:(s=Ae.get().identity(),r=es(e,s)):r=at.IDENTITY,tu(e,n,r,t),s&&Ae.return(s),n.isValid||n.set(0,0,0,0),n}function tu(e,t,n,r){var a,l;if(!e.visible||!e.measurable)return;let s;r?s=e.worldTransform:(e.updateLocalTransform(),s=Ae.get(),s.appendFrom(e.localTransform,n));const i=t,o=!!e.effects.length;if(o&&(t=Mn.get().clear()),e.boundsArea)t.addRect(e.boundsArea,s);else{e.addBounds&&(t.matrix=s,e.addBounds(t));for(let u=0;u<e.children.length;u++)tu(e.children[u],t,s,r)}if(o){for(let u=0;u<e.effects.length;u++)(l=(a=e.effects[u]).addBounds)==null||l.call(a,t);i.addBounds(t,at.IDENTITY),Mn.return(t)}r||Ae.return(s)}function es(e,t){const n=e.parent;return n&&(es(n,t),n.updateLocalTransform(),t.append(n.localTransform)),t}let Gs=0;const Za=500;function Tt(...e){Gs!==Za&&(Gs++,Gs===Za?console.warn("PixiJS Warning: too many warnings, no more warnings will be reported to the console by PixiJS."):console.warn("PixiJS Warning: ",...e))}function eu(e,t,n){return t.clear(),n||(n=at.IDENTITY),nu(e,t,n,e,!0),t.isValid||t.set(0,0,0,0),t}function nu(e,t,n,r,s){var l,u;let i;if(s)i=Ae.get(),i=n.copyTo(i);else{if(!e.visible||!e.measurable)return;e.updateLocalTransform();const c=e.localTransform;i=Ae.get(),i.appendFrom(c,n)}const o=t,a=!!e.effects.length;if(a&&(t=Mn.get().clear()),e.boundsArea)t.addRect(e.boundsArea,i);else{e.renderPipeId&&(t.matrix=i,e.addBounds(t));const c=e.children;for(let f=0;f<c.length;f++)nu(c[f],t,i,r,!1)}if(a){for(let c=0;c<e.effects.length;c++)(u=(l=e.effects[c]).addLocalBounds)==null||u.call(l,t,r);o.addBounds(t,at.IDENTITY),Mn.return(t)}Ae.return(i)}function ru(e,t){const n=e.children;for(let r=0;r<n.length;r++){const s=n[r],i=(s.uid&255)<<24|s._didChangeId&16777215;t.data[t.index]!==i&&(t.data[t.index]=i,t.didChange=!0),t.index++,s.children.length&&ru(s,t)}return t.didChange}const fx=new at,hx={_localBoundsCacheId:-1,_localBoundsCacheData:null,_setWidth(e,t){const n=Math.sign(this.scale.x)||1;t!==0?this.scale.x=e/t*n:this.scale.x=n},_setHeight(e,t){const n=Math.sign(this.scale.y)||1;t!==0?this.scale.y=e/t*n:this.scale.y=n},getLocalBounds(){this._localBoundsCacheData||(this._localBoundsCacheData={data:[],index:1,didChange:!1,localBounds:new Pe});const e=this._localBoundsCacheData;return e.index=1,e.didChange=!1,e.data[0]!==this._didChangeId>>12&&(e.didChange=!0,e.data[0]=this._didChangeId>>12),ru(this,e),e.didChange&&eu(this,e.localBounds,fx),e.localBounds},getBounds(e,t){return Jc(this,e,t||new Pe)}},dx={_onRender:null,set onRender(e){const t=this.renderGroup||this.parentRenderGroup;if(!e){this._onRender&&(t==null||t.removeOnRender(this)),this._onRender=null;return}this._onRender||t==null||t.addOnRender(this),this._onRender=e},get onRender(){return this._onRender}},px={_zIndex:0,sortDirty:!1,sortableChildren:!1,get zIndex(){return this._zIndex},set zIndex(e){this._zIndex!==e&&(this._zIndex=e,this.depthOfChildModified())},depthOfChildModified(){this.parent&&(this.parent.sortableChildren=!0,this.parent.sortDirty=!0),this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0)},sortChildren(){this.sortDirty&&(this.sortDirty=!1,this.children.sort(xx))}};function xx(e,t){return e._zIndex-t._zIndex}const mx={getGlobalPosition(e=new vt,t=!1){return this.parent?this.parent.toGlobal(this._position,e,t):(e.x=this._position.x,e.y=this._position.y),e},toGlobal(e,t,n=!1){if(!n){this.updateLocalTransform();const r=es(this,new at);return r.append(this.localTransform),r.apply(e,t)}return this.worldTransform.apply(e,t)},toLocal(e,t,n,r){if(t&&(e=t.toGlobal(e,n,r)),!r){this.updateLocalTransform();const s=es(this,new at);return s.append(this.localTransform),s.applyInverse(e,n)}return this.worldTransform.applyInverse(e,n)}};class su{constructor(){this.uid=Ct("instructionSet"),this.instructions=[],this.instructionSize=0}reset(){this.instructionSize=0}add(t){this.instructions[this.instructionSize++]=t}log(){this.instructions.length=this.instructionSize,console.table(this.instructions,["type","action"])}}class vx{constructor(t){this.renderPipeId="renderGroup",this.root=null,this.canBundle=!1,this.renderGroupParent=null,this.renderGroupChildren=[],this.worldTransform=new at,this.worldColorAlpha=4294967295,this.worldColor=16777215,this.worldAlpha=1,this.childrenToUpdate=Object.create(null),this.updateTick=0,this.childrenRenderablesToUpdate={list:[],index:0},this.structureDidChange=!0,this.instructionSet=new su,this._onRenderContainers=[],this.root=t,t._onRender&&this.addOnRender(t),t.didChange=!0;const n=t.children;for(let r=0;r<n.length;r++)this.addChild(n[r])}get localTransform(){return this.root.localTransform}addRenderGroupChild(t){t.renderGroupParent&&t.renderGroupParent._removeRenderGroupChild(t),t.renderGroupParent=this,this.renderGroupChildren.push(t)}_removeRenderGroupChild(t){const n=this.renderGroupChildren.indexOf(t);n>-1&&this.renderGroupChildren.splice(n,1),t.renderGroupParent=null}addChild(t){if(this.structureDidChange=!0,t.parentRenderGroup=this,t.updateTick=-1,t.parent===this.root?t.relativeRenderGroupDepth=1:t.relativeRenderGroupDepth=t.parent.relativeRenderGroupDepth+1,t.didChange=!0,this.onChildUpdate(t),t.renderGroup){this.addRenderGroupChild(t.renderGroup);return}t._onRender&&this.addOnRender(t);const n=t.children;for(let r=0;r<n.length;r++)this.addChild(n[r])}removeChild(t){if(this.structureDidChange=!0,t._onRender&&(t.renderGroup||this.removeOnRender(t)),t.parentRenderGroup=null,t.renderGroup){this._removeRenderGroupChild(t.renderGroup);return}const n=t.children;for(let r=0;r<n.length;r++)this.removeChild(n[r])}removeChildren(t){for(let n=0;n<t.length;n++)this.removeChild(t[n])}onChildUpdate(t){let n=this.childrenToUpdate[t.relativeRenderGroupDepth];n||(n=this.childrenToUpdate[t.relativeRenderGroupDepth]={index:0,list:[]}),n.list[n.index++]=t}updateRenderable(t){t.globalDisplayStatus<7||(t.didViewUpdate=!1,this.instructionSet.renderPipes[t.renderPipeId].updateRenderable(t))}onChildViewUpdate(t){this.childrenRenderablesToUpdate.list[this.childrenRenderablesToUpdate.index++]=t}get isRenderable(){return this.root.localDisplayStatus===7&&this.worldAlpha>0}addOnRender(t){this._onRenderContainers.push(t)}removeOnRender(t){this._onRenderContainers.splice(this._onRenderContainers.indexOf(t),1)}runOnRender(){for(let t=0;t<this._onRenderContainers.length;t++)this._onRenderContainers[t]._onRender()}destroy(){this.renderGroupParent=null,this.root=null,this.childrenRenderablesToUpdate=null,this.childrenToUpdate=null,this.renderGroupChildren=null,this._onRenderContainers=null,this.instructionSet=null}getChildren(t=[]){const n=this.root.children;for(let r=0;r<n.length;r++)this._getChildren(n[r],t);return t}_getChildren(t,n=[]){if(n.push(t),t.renderGroup)return n;const r=t.children;for(let s=0;s<r.length;s++)this._getChildren(r[s],n);return n}}function gx(e,t,n={}){for(const r in t)!n[r]&&t[r]!==void 0&&(e[r]=t[r])}const Ws=new Ht(null),Hs=new Ht(null),$s=new Ht(null,1,1),Qa=1,_x=2,Vs=4;class Bt extends ce{constructor(t={}){var n,r;super(),this.uid=Ct("renderable"),this._updateFlags=15,this.renderGroup=null,this.parentRenderGroup=null,this.parentRenderGroupIndex=0,this.didChange=!1,this.didViewUpdate=!1,this.relativeRenderGroupDepth=0,this.children=[],this.parent=null,this.includeInBuild=!0,this.measurable=!0,this.isSimple=!0,this.updateTick=-1,this.localTransform=new at,this.relativeGroupTransform=new at,this.groupTransform=this.relativeGroupTransform,this.destroyed=!1,this._position=new Ht(this,0,0),this._scale=$s,this._pivot=Hs,this._skew=Ws,this._cx=1,this._sx=0,this._cy=0,this._sy=1,this._rotation=0,this.localColor=16777215,this.localAlpha=1,this.groupAlpha=1,this.groupColor=16777215,this.groupColorAlpha=4294967295,this.localBlendMode="inherit",this.groupBlendMode="normal",this.localDisplayStatus=7,this.globalDisplayStatus=7,this._didChangeId=0,this._didLocalTransformChangeId=-1,gx(this,t,{children:!0,parent:!0,effects:!0}),(n=t.children)==null||n.forEach(s=>this.addChild(s)),this.effects=[],(r=t.parent)==null||r.addChild(this)}static mixin(t){Object.defineProperties(Bt.prototype,Object.getOwnPropertyDescriptors(t))}addChild(...t){if(this.allowChildren||ut(ct,"addChild: Only Containers will be allowed to add children in v8.0.0"),t.length>1){for(let s=0;s<t.length;s++)this.addChild(t[s]);return t[0]}const n=t[0];if(n.parent===this)return this.children.splice(this.children.indexOf(n),1),this.children.push(n),this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),n;n.parent&&n.parent.removeChild(n),this.children.push(n),this.sortableChildren&&(this.sortDirty=!0),n.parent=this,n.didChange=!0,n.didViewUpdate=!1,n._updateFlags=15;const r=this.renderGroup||this.parentRenderGroup;return r&&r.addChild(n),this.emit("childAdded",n,this,this.children.length-1),n.emit("added",this),this._didChangeId+=4096,n._zIndex!==0&&n.depthOfChildModified(),n}removeChild(...t){if(t.length>1){for(let s=0;s<t.length;s++)this.removeChild(t[s]);return t[0]}const n=t[0],r=this.children.indexOf(n);return r>-1&&(this._didChangeId+=4096,this.children.splice(r,1),this.renderGroup?this.renderGroup.removeChild(n):this.parentRenderGroup&&this.parentRenderGroup.removeChild(n),n.parent=null,this.emit("childRemoved",n,this,r),n.emit("removed",this)),n}_onUpdate(t){t&&t===this._skew&&this._updateSkew(),this._didChangeId++,!this.didChange&&(this.didChange=!0,this.parentRenderGroup&&this.parentRenderGroup.onChildUpdate(this))}set isRenderGroup(t){if(this.renderGroup&&t===!1)throw new Error("[Pixi] cannot undo a render group just yet");t&&this.enableRenderGroup()}get isRenderGroup(){return!!this.renderGroup}enableRenderGroup(){if(this.renderGroup)return;const t=this.parentRenderGroup;t&&t.removeChild(this),this.renderGroup=new vx(this),t&&t.addChild(this),this._updateIsSimple(),this.groupTransform=at.IDENTITY}_updateIsSimple(){this.isSimple=!this.renderGroup&&this.effects.length===0}get worldTransform(){return this._worldTransform||(this._worldTransform=new at),this.renderGroup?this._worldTransform.copyFrom(this.renderGroup.worldTransform):this.parentRenderGroup&&this._worldTransform.appendFrom(this.relativeGroupTransform,this.parentRenderGroup.worldTransform),this._worldTransform}get x(){return this._position.x}set x(t){this._position.x=t}get y(){return this._position.y}set y(t){this._position.y=t}get position(){return this._position}set position(t){this._position.copyFrom(t)}get rotation(){return this._rotation}set rotation(t){this._rotation!==t&&(this._rotation=t,this._onUpdate(this._skew))}get angle(){return this.rotation*Np}set angle(t){this.rotation=t*Up}get pivot(){return this._pivot===Hs&&(this._pivot=new Ht(this,0,0)),this._pivot}set pivot(t){this._pivot===Hs&&(this._pivot=new Ht(this,0,0)),typeof t=="number"?this._pivot.set(t):this._pivot.copyFrom(t)}get skew(){return this._skew===Ws&&(this._skew=new Ht(this,0,0)),this._skew}set skew(t){this._skew===Ws&&(this._skew=new Ht(this,0,0)),this._skew.copyFrom(t)}get scale(){return this._scale===$s&&(this._scale=new Ht(this,1,1)),this._scale}set scale(t){this._scale===$s&&(this._scale=new Ht(this,0,0)),typeof t=="number"?this._scale.set(t):this._scale.copyFrom(t)}get width(){return Math.abs(this.scale.x*this.getLocalBounds().width)}set width(t){const n=this.getLocalBounds().width;this._setWidth(t,n)}get height(){return Math.abs(this.scale.y*this.getLocalBounds().height)}set height(t){const n=this.getLocalBounds().height;this._setHeight(t,n)}getSize(t){t||(t={});const n=this.getLocalBounds();return t.width=Math.abs(this.scale.x*n.width),t.height=Math.abs(this.scale.y*n.height),t}setSize(t,n){const r=this.getLocalBounds();let s,i;typeof t!="object"?(s=t,i=n??t):(s=t.width,i=t.height??t.width),s!==void 0&&this._setWidth(s,r.width),i!==void 0&&this._setHeight(i,r.height)}_updateSkew(){const t=this._rotation,n=this._skew;this._cx=Math.cos(t+n._y),this._sx=Math.sin(t+n._y),this._cy=-Math.sin(t-n._x),this._sy=Math.cos(t-n._x)}updateTransform(t){return this.position.set(typeof t.x=="number"?t.x:this.position.x,typeof t.y=="number"?t.y:this.position.y),this.scale.set(typeof t.scaleX=="number"?t.scaleX||1:this.scale.x,typeof t.scaleY=="number"?t.scaleY||1:this.scale.y),this.rotation=typeof t.rotation=="number"?t.rotation:this.rotation,this.skew.set(typeof t.skewX=="number"?t.skewX:this.skew.x,typeof t.skewY=="number"?t.skewY:this.skew.y),this.pivot.set(typeof t.pivotX=="number"?t.pivotX:this.pivot.x,typeof t.pivotY=="number"?t.pivotY:this.pivot.y),this}setFromMatrix(t){t.decompose(this)}updateLocalTransform(){if((this._didLocalTransformChangeId&15)===this._didChangeId)return;this._didLocalTransformChangeId=this._didChangeId;const t=this.localTransform,n=this._scale,r=this._pivot,s=this._position,i=n._x,o=n._y,a=r._x,l=r._y;t.a=this._cx*i,t.b=this._sx*i,t.c=this._cy*o,t.d=this._sy*o,t.tx=s._x-(a*t.a+l*t.c),t.ty=s._y-(a*t.b+l*t.d)}set alpha(t){t!==this.localAlpha&&(this.localAlpha=t,this._updateFlags|=Qa,this._onUpdate())}get alpha(){return this.localAlpha}set tint(t){const r=yt.shared.setValue(t??16777215).toBgrNumber();r!==this.localColor&&(this.localColor=r,this._updateFlags|=Qa,this._onUpdate())}get tint(){const t=this.localColor;return((t&255)<<16)+(t&65280)+(t>>16&255)}set blendMode(t){this.localBlendMode!==t&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=_x,this.localBlendMode=t,this._onUpdate())}get blendMode(){return this.localBlendMode}get visible(){return!!(this.localDisplayStatus&2)}set visible(t){const n=t?1:0;(this.localDisplayStatus&2)>>1!==n&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=Vs,this.localDisplayStatus^=2,this._onUpdate())}get culled(){return!(this.localDisplayStatus&4)}set culled(t){const n=t?1:0;(this.localDisplayStatus&4)>>2!==n&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=Vs,this.localDisplayStatus^=4,this._onUpdate())}get renderable(){return!!(this.localDisplayStatus&1)}set renderable(t){const n=t?1:0;(this.localDisplayStatus&1)!==n&&(this._updateFlags|=Vs,this.localDisplayStatus^=1,this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._onUpdate())}get isRenderable(){return this.localDisplayStatus===7&&this.groupAlpha>0}destroy(t=!1){var s;if(this.destroyed)return;this.destroyed=!0;const n=this.removeChildren(0,this.children.length);if(this.removeFromParent(),this.parent=null,this._maskEffect=null,this._filterEffect=null,this.effects=null,this._position=null,this._scale=null,this._pivot=null,this._skew=null,this.emit("destroyed",this),this.removeAllListeners(),typeof t=="boolean"?t:t==null?void 0:t.children)for(let i=0;i<n.length;++i)n[i].destroy(t);(s=this.renderGroup)==null||s.destroy(),this.renderGroup=null}}Bt.mixin(ox);Bt.mixin(mx);Bt.mixin(dx);Bt.mixin(hx);Bt.mixin(cx);Bt.mixin(ux);Bt.mixin(px);Bt.mixin(sx);class Tn extends Bt{constructor(t=it.EMPTY){t instanceof it&&(t={texture:t});const{texture:n=it.EMPTY,anchor:r,roundPixels:s,width:i,height:o,...a}=t;super({label:"Sprite",...a}),this.renderPipeId="sprite",this.batched=!0,this._didSpriteUpdate=!1,this._bounds={minX:0,maxX:1,minY:0,maxY:0},this._sourceBounds={minX:0,maxX:1,minY:0,maxY:0},this._boundsDirty=!0,this._sourceBoundsDirty=!0,this._roundPixels=0,this._anchor=new Ht({_onUpdate:()=>{this.onViewUpdate()}}),r?this.anchor=r:n.defaultAnchor&&(this.anchor=n.defaultAnchor),this.texture=n,this.allowChildren=!1,this.roundPixels=s??!1,i&&(this.width=i),o&&(this.height=o)}static from(t,n=!1){return t instanceof it?new Tn(t):new Tn(it.from(t,n))}set texture(t){t||(t=it.EMPTY);const n=this._texture;n!==t&&(n&&n.dynamic&&n.off("update",this.onViewUpdate,this),t.dynamic&&t.on("update",this.onViewUpdate,this),this._texture=t,this._width&&this._setWidth(this._width,this._texture.orig.width),this._height&&this._setHeight(this._height,this._texture.orig.height),this.onViewUpdate())}get texture(){return this._texture}get bounds(){return this._boundsDirty&&(this._updateBounds(),this._boundsDirty=!1),this._bounds}get sourceBounds(){return this._sourceBoundsDirty&&(this._updateSourceBounds(),this._sourceBoundsDirty=!1),this._sourceBounds}containsPoint(t){const n=this.sourceBounds;return t.x>=n.maxX&&t.x<=n.minX&&t.y>=n.maxY&&t.y<=n.minY}addBounds(t){const n=this._texture.trim?this.sourceBounds:this.bounds;t.addFrame(n.minX,n.minY,n.maxX,n.maxY)}onViewUpdate(){if(this._didChangeId+=4096,this._didSpriteUpdate=!0,this._sourceBoundsDirty=this._boundsDirty=!0,this.didViewUpdate)return;this.didViewUpdate=!0;const t=this.renderGroup||this.parentRenderGroup;t&&t.onChildViewUpdate(this)}_updateBounds(){Xp(this._bounds,this._anchor,this._texture,0)}_updateSourceBounds(){const t=this._anchor,n=this._texture,r=this._sourceBounds,{width:s,height:i}=n.orig;r.maxX=-t._x*s,r.minX=r.maxX+s,r.maxY=-t._y*i,r.minY=r.maxY+i}destroy(t=!1){if(super.destroy(t),typeof t=="boolean"?t:t==null?void 0:t.texture){const r=typeof t=="boolean"?t:t==null?void 0:t.textureSource;this._texture.destroy(r)}this._texture=null,this._bounds=null,this._sourceBounds=null,this._anchor=null}get anchor(){return this._anchor}set anchor(t){typeof t=="number"?this._anchor.set(t):this._anchor.copyFrom(t)}get roundPixels(){return!!this._roundPixels}set roundPixels(t){this._roundPixels=t?1:0}get width(){return Math.abs(this.scale.x)*this._texture.orig.width}set width(t){this._setWidth(t,this._texture.orig.width),this._width=t}get height(){return Math.abs(this.scale.y)*this._texture.orig.height}set height(t){this._setHeight(t,this._texture.orig.height),this._height=t}getSize(t){return t||(t={}),t.width=Math.abs(this.scale.x)*this._texture.orig.width,t.height=Math.abs(this.scale.y)*this._texture.orig.height,t}setSize(t,n){let r,s;typeof t!="object"?(r=t,s=n??t):(r=t.width,s=t.height??t.width),r!==void 0&&this._setWidth(r,this._texture.orig.width),s!==void 0&&this._setHeight(s,this._texture.orig.height)}}const yx=new Pe;function iu(e,t,n){const r=yx;e.measurable=!0,Jc(e,n,r),t.addBoundsMask(r),e.measurable=!1}function ou(e,t,n){const r=Mn.get();e.measurable=!0;const s=Ae.get().identity(),i=au(e,n,s);eu(e,r,i),e.measurable=!1,t.addBoundsMask(r),Ae.return(s),Mn.return(r)}function au(e,t,n){return e?(e!==t&&(au(e.parent,t,n),e.updateLocalTransform(),n.append(e.localTransform)),n):(Tt("Mask bounds, renderable is not inside the root container"),n)}class lu{constructor(t){this.priority=0,this.pipe="alphaMask",t!=null&&t.mask&&this.init(t.mask)}init(t){this.mask=t,this.renderMaskToTexture=!(t instanceof Tn),this.mask.renderable=this.renderMaskToTexture,this.mask.includeInBuild=!this.renderMaskToTexture,this.mask.measurable=!1}reset(){this.mask.measurable=!0,this.mask=null}addBounds(t,n){iu(this.mask,t,n)}addLocalBounds(t,n){ou(this.mask,t,n)}containsPoint(t,n){const r=this.mask;return n(r,t)}destroy(){this.reset()}static test(t){return t instanceof Tn}}lu.extension=Y.MaskEffect;class cu{constructor(t){this.priority=0,this.pipe="colorMask",t!=null&&t.mask&&this.init(t.mask)}init(t){this.mask=t}destroy(){}static test(t){return typeof t=="number"}}cu.extension=Y.MaskEffect;class uu{constructor(t){this.priority=0,this.pipe="stencilMask",t!=null&&t.mask&&this.init(t.mask)}init(t){this.mask=t,this.mask.includeInBuild=!1,this.mask.measurable=!1}reset(){this.mask.measurable=!0,this.mask.includeInBuild=!0,this.mask=null}addBounds(t,n){iu(this.mask,t,n)}addLocalBounds(t,n){ou(this.mask,t,n)}containsPoint(t,n){const r=this.mask;return n(r,t)}destroy(){this.reset()}static test(t){return t instanceof Bt}}uu.extension=Y.MaskEffect;const bx={createCanvas:(e,t)=>{const n=document.createElement("canvas");return n.width=e,n.height=t,n},getCanvasRenderingContext2D:()=>CanvasRenderingContext2D,getWebGLRenderingContext:()=>WebGLRenderingContext,getNavigator:()=>navigator,getBaseUrl:()=>document.baseURI??window.location.href,getFontFaceSet:()=>document.fonts,fetch:(e,t)=>fetch(e,t),parseXML:e=>new DOMParser().parseFromString(e,"text/xml")};let Ja=bx;const gt={get(){return Ja},set(e){Ja=e}};class fu extends Ve{constructor(t){t.resource||(t.resource=gt.get().createCanvas()),t.width||(t.width=t.resource.width,t.autoDensity||(t.width/=t.resolution)),t.height||(t.height=t.resource.height,t.autoDensity||(t.height/=t.resolution)),super(t),this.uploadMethodId="image",this.autoDensity=t.autoDensity;const n=t.resource;(this.pixelWidth!==n.width||this.pixelWidth!==n.height)&&this.resizeCanvas(),this.transparent=!!t.transparent}resizeCanvas(){this.autoDensity&&(this.resource.style.width=`${this.width}px`,this.resource.style.height=`${this.height}px`),(this.resource.width!==this.pixelWidth||this.resource.height!==this.pixelHeight)&&(this.resource.width=this.pixelWidth,this.resource.height=this.pixelHeight)}resize(t=this.width,n=this.height,r=this._resolution){const s=super.resize(t,n,r);return s&&this.resizeCanvas(),s}static test(t){return globalThis.HTMLCanvasElement&&t instanceof HTMLCanvasElement||globalThis.OffscreenCanvas&&t instanceof OffscreenCanvas}}fu.extension=Y.TextureSource;class En extends Ve{constructor(t){if(t.resource&&globalThis.HTMLImageElement&&t.resource instanceof HTMLImageElement){const n=gt.get().createCanvas(t.resource.width,t.resource.height);n.getContext("2d").drawImage(t.resource,0,0),t.resource=n,Tt("ImageSource: Image element passed, converting to canvas. Use CanvasSource instead.")}super(t),this.uploadMethodId="image",this.autoGarbageCollect=!0}static test(t){return globalThis.HTMLImageElement&&t instanceof HTMLImageElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap}}En.extension=Y.TextureSource;var Bi=(e=>(e[e.INTERACTION=50]="INTERACTION",e[e.HIGH=25]="HIGH",e[e.NORMAL=0]="NORMAL",e[e.LOW=-25]="LOW",e[e.UTILITY=-50]="UTILITY",e))(Bi||{});class qs{constructor(t,n=null,r=0,s=!1){this.next=null,this.previous=null,this._destroyed=!1,this._fn=t,this._context=n,this.priority=r,this._once=s}match(t,n=null){return this._fn===t&&this._context===n}emit(t){this._fn&&(this._context?this._fn.call(this._context,t):this._fn(t));const n=this.next;return this._once&&this.destroy(!0),this._destroyed&&(this.next=null),n}connect(t){this.previous=t,t.next&&(t.next.previous=this),this.next=t.next,t.next=this}destroy(t=!1){this._destroyed=!0,this._fn=null,this._context=null,this.previous&&(this.previous.next=this.next),this.next&&(this.next.previous=this.previous);const n=this.next;return this.next=t?null:n,this.previous=null,n}}const hu=class Gt{constructor(){this.autoStart=!1,this.deltaTime=1,this.lastTime=-1,this.speed=1,this.started=!1,this._requestId=null,this._maxElapsedMS=100,this._minElapsedMS=0,this._protected=!1,this._lastFrame=-1,this._head=new qs(null,null,1/0),this.deltaMS=1/Gt.targetFPMS,this.elapsedMS=1/Gt.targetFPMS,this._tick=t=>{this._requestId=null,this.started&&(this.update(t),this.started&&this._requestId===null&&this._head.next&&(this._requestId=requestAnimationFrame(this._tick)))}}_requestIfNeeded(){this._requestId===null&&this._head.next&&(this.lastTime=performance.now(),this._lastFrame=this.lastTime,this._requestId=requestAnimationFrame(this._tick))}_cancelIfNeeded(){this._requestId!==null&&(cancelAnimationFrame(this._requestId),this._requestId=null)}_startIfPossible(){this.started?this._requestIfNeeded():this.autoStart&&this.start()}add(t,n,r=Bi.NORMAL){return this._addListener(new qs(t,n,r))}addOnce(t,n,r=Bi.NORMAL){return this._addListener(new qs(t,n,r,!0))}_addListener(t){let n=this._head.next,r=this._head;if(!n)t.connect(r);else{for(;n;){if(t.priority>n.priority){t.connect(r);break}r=n,n=n.next}t.previous||t.connect(r)}return this._startIfPossible(),this}remove(t,n){let r=this._head.next;for(;r;)r.match(t,n)?r=r.destroy():r=r.next;return this._head.next||this._cancelIfNeeded(),this}get count(){if(!this._head)return 0;let t=0,n=this._head;for(;n=n.next;)t++;return t}start(){this.started||(this.started=!0,this._requestIfNeeded())}stop(){this.started&&(this.started=!1,this._cancelIfNeeded())}destroy(){if(!this._protected){this.stop();let t=this._head.next;for(;t;)t=t.destroy(!0);this._head.destroy(),this._head=null}}update(t=performance.now()){let n;if(t>this.lastTime){if(n=this.elapsedMS=t-this.lastTime,n>this._maxElapsedMS&&(n=this._maxElapsedMS),n*=this.speed,this._minElapsedMS){const i=t-this._lastFrame|0;if(i<this._minElapsedMS)return;this._lastFrame=t-i%this._minElapsedMS}this.deltaMS=n,this.deltaTime=this.deltaMS*Gt.targetFPMS;const r=this._head;let s=r.next;for(;s;)s=s.emit(this);r.next||this._cancelIfNeeded()}else this.deltaTime=this.deltaMS=this.elapsedMS=0;this.lastTime=t}get FPS(){return 1e3/this.elapsedMS}get minFPS(){return 1e3/this._maxElapsedMS}set minFPS(t){const n=Math.min(this.maxFPS,t),r=Math.min(Math.max(0,n)/1e3,Gt.targetFPMS);this._maxElapsedMS=1/r}get maxFPS(){return this._minElapsedMS?Math.round(1e3/this._minElapsedMS):0}set maxFPS(t){if(t===0)this._minElapsedMS=0;else{const n=Math.max(this.minFPS,t);this._minElapsedMS=1/(n/1e3)}}static get shared(){if(!Gt._shared){const t=Gt._shared=new Gt;t.autoStart=!0,t._protected=!0}return Gt._shared}static get system(){if(!Gt._system){const t=Gt._system=new Gt;t.autoStart=!0,t._protected=!0}return Gt._system}};hu.targetFPMS=.06;let Er=hu,Xs;async function du(){return Xs??(Xs=(async()=>{var o;const t=document.createElement("canvas").getContext("webgl");if(!t)return"premultiply-alpha-on-upload";const n=await new Promise(a=>{const l=document.createElement("video");l.onloadeddata=()=>a(l),l.onerror=()=>a(null),l.autoplay=!1,l.crossOrigin="anonymous",l.preload="auto",l.src="data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQJChYECGFOAZwEAAAAAAAHTEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEXTbuMU6uEHFO7a1OsggG97AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBEAAAAAAAAFlSua8yuAQAAAAAAAEPXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhVZfVlA5g4EBI+ODhAJiWgDglLCBArqBApqBAlPAgQFVsIRVuYEBElTDZ9Vzc9JjwItjxYgAAAAAAAAAAWfInEWjh0VOQ09ERVJEh49MYXZjIGxpYnZweC12cDlnyKJFo4hEVVJBVElPTkSHlDAwOjAwOjAwLjA0MDAwMDAwMAAAH0O2dcfngQCgwqGggQAAAIJJg0IAABAAFgA4JBwYSgAAICAAEb///4r+AAB1oZ2mm+6BAaWWgkmDQgAAEAAWADgkHBhKAAAgIABIQBxTu2uRu4+zgQC3iveBAfGCAXHwgQM=",l.load()});if(!n)return"premultiply-alpha-on-upload";const r=t.createTexture();t.bindTexture(t.TEXTURE_2D,r);const s=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,s),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,r,0),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,n);const i=new Uint8Array(4);return t.readPixels(0,0,1,1,t.RGBA,t.UNSIGNED_BYTE,i),t.deleteFramebuffer(s),t.deleteTexture(r),(o=t.getExtension("WEBGL_lose_context"))==null||o.loseContext(),i[0]<=i[3]?"premultiplied-alpha":"premultiply-alpha-on-upload"})()),Xs}const gs=class pu extends Ve{constructor(t){super(t),this.isReady=!1,this.uploadMethodId="video",t={...pu.defaultOptions,...t},this._autoUpdate=!0,this._isConnectedToTicker=!1,this._updateFPS=t.updateFPS||0,this._msToNextUpdate=0,this.autoPlay=t.autoPlay!==!1,this.alphaMode=t.alphaMode??"premultiply-alpha-on-upload",this._videoFrameRequestCallback=this._videoFrameRequestCallback.bind(this),this._videoFrameRequestCallbackHandle=null,this._load=null,this._resolve=null,this._reject=null,this._onCanPlay=this._onCanPlay.bind(this),this._onCanPlayThrough=this._onCanPlayThrough.bind(this),this._onError=this._onError.bind(this),this._onPlayStart=this._onPlayStart.bind(this),this._onPlayStop=this._onPlayStop.bind(this),this._onSeeked=this._onSeeked.bind(this),t.autoLoad!==!1&&this.load()}updateFrame(){if(!this.destroyed){if(this._updateFPS){const t=Er.shared.elapsedMS*this.resource.playbackRate;this._msToNextUpdate=Math.floor(this._msToNextUpdate-t)}(!this._updateFPS||this._msToNextUpdate<=0)&&(this._msToNextUpdate=this._updateFPS?Math.floor(1e3/this._updateFPS):0),this.isValid&&this.update()}}_videoFrameRequestCallback(){this.updateFrame(),this.destroyed?this._videoFrameRequestCallbackHandle=null:this._videoFrameRequestCallbackHandle=this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback)}get isValid(){return!!this.resource.videoWidth&&!!this.resource.videoHeight}async load(){if(this._load)return this._load;const t=this.resource,n=this.options;return(t.readyState===t.HAVE_ENOUGH_DATA||t.readyState===t.HAVE_FUTURE_DATA)&&t.width&&t.height&&(t.complete=!0),t.addEventListener("play",this._onPlayStart),t.addEventListener("pause",this._onPlayStop),t.addEventListener("seeked",this._onSeeked),this._isSourceReady()?this._mediaReady():(n.preload||t.addEventListener("canplay",this._onCanPlay),t.addEventListener("canplaythrough",this._onCanPlayThrough),t.addEventListener("error",this._onError,!0)),this.alphaMode=await du(),this._load=new Promise((r,s)=>{this.isValid?r(this):(this._resolve=r,this._reject=s,n.preloadTimeoutMs!==void 0&&(this._preloadTimeout=setTimeout(()=>{this._onError(new ErrorEvent(`Preload exceeded timeout of ${n.preloadTimeoutMs}ms`))})),t.load())}),this._load}_onError(t){this.resource.removeEventListener("error",this._onError,!0),this.emit("error",t),this._reject&&(this._reject(t),this._reject=null,this._resolve=null)}_isSourcePlaying(){const t=this.resource;return!t.paused&&!t.ended}_isSourceReady(){return this.resource.readyState>2}_onPlayStart(){this.isValid||this._mediaReady(),this._configureAutoUpdate()}_onPlayStop(){this._configureAutoUpdate()}_onSeeked(){this._autoUpdate&&!this._isSourcePlaying()&&(this._msToNextUpdate=0,this.updateFrame(),this._msToNextUpdate=0)}_onCanPlay(){this.resource.removeEventListener("canplay",this._onCanPlay),this._mediaReady()}_onCanPlayThrough(){this.resource.removeEventListener("canplaythrough",this._onCanPlay),this._preloadTimeout&&(clearTimeout(this._preloadTimeout),this._preloadTimeout=void 0),this._mediaReady()}_mediaReady(){const t=this.resource;this.isValid&&(this.isReady=!0,this.resize(t.videoWidth,t.videoHeight)),this._msToNextUpdate=0,this.updateFrame(),this._msToNextUpdate=0,this._resolve&&(this._resolve(this),this._resolve=null,this._reject=null),this._isSourcePlaying()?this._onPlayStart():this.autoPlay&&this.resource.play()}destroy(){this._configureAutoUpdate();const t=this.resource;t&&(t.removeEventListener("play",this._onPlayStart),t.removeEventListener("pause",this._onPlayStop),t.removeEventListener("seeked",this._onSeeked),t.removeEventListener("canplay",this._onCanPlay),t.removeEventListener("canplaythrough",this._onCanPlayThrough),t.removeEventListener("error",this._onError,!0),t.pause(),t.src="",t.load()),super.destroy()}get autoUpdate(){return this._autoUpdate}set autoUpdate(t){t!==this._autoUpdate&&(this._autoUpdate=t,this._configureAutoUpdate())}get updateFPS(){return this._updateFPS}set updateFPS(t){t!==this._updateFPS&&(this._updateFPS=t,this._configureAutoUpdate())}_configureAutoUpdate(){this._autoUpdate&&this._isSourcePlaying()?!this._updateFPS&&this.resource.requestVideoFrameCallback?(this._isConnectedToTicker&&(Er.shared.remove(this.updateFrame,this),this._isConnectedToTicker=!1,this._msToNextUpdate=0),this._videoFrameRequestCallbackHandle===null&&(this._videoFrameRequestCallbackHandle=this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback))):(this._videoFrameRequestCallbackHandle!==null&&(this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),this._videoFrameRequestCallbackHandle=null),this._isConnectedToTicker||(Er.shared.add(this.updateFrame,this),this._isConnectedToTicker=!0,this._msToNextUpdate=0)):(this._videoFrameRequestCallbackHandle!==null&&(this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),this._videoFrameRequestCallbackHandle=null),this._isConnectedToTicker&&(Er.shared.remove(this.updateFrame,this),this._isConnectedToTicker=!1,this._msToNextUpdate=0))}static test(t){return globalThis.HTMLVideoElement&&t instanceof HTMLVideoElement||globalThis.VideoFrame&&t instanceof VideoFrame}};gs.extension=Y.TextureSource;gs.defaultOptions={...Ve.defaultOptions,autoLoad:!0,autoPlay:!0,updateFPS:0,crossorigin:!0,loop:!1,muted:!0,playsinline:!0,preload:!1};gs.MIME_TYPES={ogv:"video/ogg",mov:"video/quicktime",m4v:"video/mp4"};let Xr=gs;const ie=(e,t,n=!1)=>(Array.isArray(e)||(e=[e]),t?e.map(r=>typeof r=="string"||n?t(r):r):e);class wx{constructor(){this._parsers=[],this._cache=new Map,this._cacheMap=new Map}reset(){this._cacheMap.clear(),this._cache.clear()}has(t){return this._cache.has(t)}get(t){const n=this._cache.get(t);return n||Tt(`[Assets] Asset id ${t} was not found in the Cache`),n}set(t,n){const r=ie(t);let s;for(let l=0;l<this.parsers.length;l++){const u=this.parsers[l];if(u.test(n)){s=u.getCacheableAssets(r,n);break}}const i=new Map(Object.entries(s||{}));s||r.forEach(l=>{i.set(l,n)});const o=[...i.keys()],a={cacheKeys:o,keys:r};r.forEach(l=>{this._cacheMap.set(l,a)}),o.forEach(l=>{const u=s?s[l]:n;this._cache.has(l)&&this._cache.get(l)!==u&&Tt("[Cache] already has key:",l),this._cache.set(l,i.get(l))})}remove(t){if(!this._cacheMap.has(t)){Tt(`[Assets] Asset id ${t} was not found in the Cache`);return}const n=this._cacheMap.get(t);n.cacheKeys.forEach(s=>{this._cache.delete(s)}),n.keys.forEach(s=>{this._cacheMap.delete(s)})}get parsers(){return this._parsers}}const xt=new wx,Ri=[];Jt.handleByList(Y.TextureSource,Ri);function Cx(e={}){const t=e&&e.resource,n=t?e.resource:e,r=t?e:{resource:e};for(let s=0;s<Ri.length;s++){const i=Ri[s];if(i.test(n))return new i(r)}throw new Error(`Could not find a source type for resource: ${r.resource}`)}function Ax(e={},t=!1){const n=e&&e.resource,r=n?e.resource:e,s=n?e:{resource:e};if(!t&&xt.has(r))return xt.get(r);const i=new it({source:Cx(s)});return i.on("destroy",()=>{xt.has(r)&&xt.remove(r)}),t||xt.set(r,i),i}function Sx(e,t=!1){return typeof e=="string"?xt.get(e):e instanceof Ve?new it({source:e}):Ax(e,t)}it.from=Sx;Jt.add(lu,cu,uu,Xr,En,fu,Ao);var qe=(e=>(e[e.Low=0]="Low",e[e.Normal=1]="Normal",e[e.High=2]="High",e))(qe||{});function ne(e){if(typeof e!="string")throw new TypeError(`Path must be a string. Received ${JSON.stringify(e)}`)}function Nn(e){return e.split("?")[0].split("#")[0]}function Px(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Mx(e,t,n){return e.replace(new RegExp(Px(t),"g"),n)}function Tx(e,t){let n="",r=0,s=-1,i=0,o=-1;for(let a=0;a<=e.length;++a){if(a<e.length)o=e.charCodeAt(a);else{if(o===47)break;o=47}if(o===47){if(!(s===a-1||i===1))if(s!==a-1&&i===2){if(n.length<2||r!==2||n.charCodeAt(n.length-1)!==46||n.charCodeAt(n.length-2)!==46){if(n.length>2){const l=n.lastIndexOf("/");if(l!==n.length-1){l===-1?(n="",r=0):(n=n.slice(0,l),r=n.length-1-n.lastIndexOf("/")),s=a,i=0;continue}}else if(n.length===2||n.length===1){n="",r=0,s=a,i=0;continue}}}else n.length>0?n+=`/${e.slice(s+1,a)}`:n=e.slice(s+1,a),r=a-s-1;s=a,i=0}else o===46&&i!==-1?++i:i=-1}return n}const $t={toPosix(e){return Mx(e,"\\","/")},isUrl(e){return/^https?:/.test(this.toPosix(e))},isDataUrl(e){return/^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}()_|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s<>]*?)$/i.test(e)},isBlobUrl(e){return e.startsWith("blob:")},hasProtocol(e){return/^[^/:]+:/.test(this.toPosix(e))},getProtocol(e){ne(e),e=this.toPosix(e);const t=/^file:\/\/\//.exec(e);if(t)return t[0];const n=/^[^/:]+:\/{0,2}/.exec(e);return n?n[0]:""},toAbsolute(e,t,n){if(ne(e),this.isDataUrl(e)||this.isBlobUrl(e))return e;const r=Nn(this.toPosix(t??gt.get().getBaseUrl())),s=Nn(this.toPosix(n??this.rootname(r)));return e=this.toPosix(e),e.startsWith("/")?$t.join(s,e.slice(1)):this.isAbsolute(e)?e:this.join(r,e)},normalize(e){if(ne(e),e.length===0)return".";if(this.isDataUrl(e)||this.isBlobUrl(e))return e;e=this.toPosix(e);let t="";const n=e.startsWith("/");this.hasProtocol(e)&&(t=this.rootname(e),e=e.slice(t.length));const r=e.endsWith("/");return e=Tx(e),e.length>0&&r&&(e+="/"),n?`/${e}`:t+e},isAbsolute(e){return ne(e),e=this.toPosix(e),this.hasProtocol(e)?!0:e.startsWith("/")},join(...e){if(e.length===0)return".";let t;for(let n=0;n<e.length;++n){const r=e[n];if(ne(r),r.length>0)if(t===void 0)t=r;else{const s=e[n-1]??"";this.joinExtensions.includes(this.extname(s).toLowerCase())?t+=`/../${r}`:t+=`/${r}`}}return t===void 0?".":this.normalize(t)},dirname(e){if(ne(e),e.length===0)return".";e=this.toPosix(e);let t=e.charCodeAt(0);const n=t===47;let r=-1,s=!0;const i=this.getProtocol(e),o=e;e=e.slice(i.length);for(let a=e.length-1;a>=1;--a)if(t=e.charCodeAt(a),t===47){if(!s){r=a;break}}else s=!1;return r===-1?n?"/":this.isUrl(o)?i+e:i:n&&r===1?"//":i+e.slice(0,r)},rootname(e){ne(e),e=this.toPosix(e);let t="";if(e.startsWith("/")?t="/":t=this.getProtocol(e),this.isUrl(e)){const n=e.indexOf("/",t.length);n!==-1?t=e.slice(0,n):t=e,t.endsWith("/")||(t+="/")}return t},basename(e,t){ne(e),t&&ne(t),e=Nn(this.toPosix(e));let n=0,r=-1,s=!0,i;if(t!==void 0&&t.length>0&&t.length<=e.length){if(t.length===e.length&&t===e)return"";let o=t.length-1,a=-1;for(i=e.length-1;i>=0;--i){const l=e.charCodeAt(i);if(l===47){if(!s){n=i+1;break}}else a===-1&&(s=!1,a=i+1),o>=0&&(l===t.charCodeAt(o)?--o===-1&&(r=i):(o=-1,r=a))}return n===r?r=a:r===-1&&(r=e.length),e.slice(n,r)}for(i=e.length-1;i>=0;--i)if(e.charCodeAt(i)===47){if(!s){n=i+1;break}}else r===-1&&(s=!1,r=i+1);return r===-1?"":e.slice(n,r)},extname(e){ne(e),e=Nn(this.toPosix(e));let t=-1,n=0,r=-1,s=!0,i=0;for(let o=e.length-1;o>=0;--o){const a=e.charCodeAt(o);if(a===47){if(!s){n=o+1;break}continue}r===-1&&(s=!1,r=o+1),a===46?t===-1?t=o:i!==1&&(i=1):t!==-1&&(i=-1)}return t===-1||r===-1||i===0||i===1&&t===r-1&&t===n+1?"":e.slice(t,r)},parse(e){ne(e);const t={root:"",dir:"",base:"",ext:"",name:""};if(e.length===0)return t;e=Nn(this.toPosix(e));let n=e.charCodeAt(0);const r=this.isAbsolute(e);let s;t.root=this.rootname(e),r||this.hasProtocol(e)?s=1:s=0;let i=-1,o=0,a=-1,l=!0,u=e.length-1,c=0;for(;u>=s;--u){if(n=e.charCodeAt(u),n===47){if(!l){o=u+1;break}continue}a===-1&&(l=!1,a=u+1),n===46?i===-1?i=u:c!==1&&(c=1):i!==-1&&(c=-1)}return i===-1||a===-1||c===0||c===1&&i===a-1&&i===o+1?a!==-1&&(o===0&&r?t.base=t.name=e.slice(1,a):t.base=t.name=e.slice(o,a)):(o===0&&r?(t.name=e.slice(1,i),t.base=e.slice(1,a)):(t.name=e.slice(o,i),t.base=e.slice(o,a)),t.ext=e.slice(i,a)),t.dir=this.dirname(e),t},sep:"/",delimiter:":",joinExtensions:[".html"]};function xu(e,t,n,r,s){const i=t[n];for(let o=0;o<i.length;o++){const a=i[o];n<t.length-1?xu(e.replace(r[n],a),t,n+1,r,s):s.push(e.replace(r[n],a))}}function kx(e){const t=/\{(.*?)\}/g,n=e.match(t),r=[];if(n){const s=[];n.forEach(i=>{const o=i.substring(1,i.length-1).split(",");s.push(o)}),xu(e,s,0,n,r)}else r.push(e);return r}const ns=e=>!Array.isArray(e);class Fn{constructor(){this._defaultBundleIdentifierOptions={connector:"-",createBundleAssetId:(t,n)=>`${t}${this._bundleIdConnector}${n}`,extractAssetIdFromBundle:(t,n)=>n.replace(`${t}${this._bundleIdConnector}`,"")},this._bundleIdConnector=this._defaultBundleIdentifierOptions.connector,this._createBundleAssetId=this._defaultBundleIdentifierOptions.createBundleAssetId,this._extractAssetIdFromBundle=this._defaultBundleIdentifierOptions.extractAssetIdFromBundle,this._assetMap={},this._preferredOrder=[],this._parsers=[],this._resolverHash={},this._bundles={}}setBundleIdentifier(t){if(this._bundleIdConnector=t.connector??this._bundleIdConnector,this._createBundleAssetId=t.createBundleAssetId??this._createBundleAssetId,this._extractAssetIdFromBundle=t.extractAssetIdFromBundle??this._extractAssetIdFromBundle,this._extractAssetIdFromBundle("foo",this._createBundleAssetId("foo","bar"))!=="bar")throw new Error("[Resolver] GenerateBundleAssetId are not working correctly")}prefer(...t){t.forEach(n=>{this._preferredOrder.push(n),n.priority||(n.priority=Object.keys(n.params))}),this._resolverHash={}}set basePath(t){this._basePath=t}get basePath(){return this._basePath}set rootPath(t){this._rootPath=t}get rootPath(){return this._rootPath}get parsers(){return this._parsers}reset(){this.setBundleIdentifier(this._defaultBundleIdentifierOptions),this._assetMap={},this._preferredOrder=[],this._resolverHash={},this._rootPath=null,this._basePath=null,this._manifest=null,this._bundles={},this._defaultSearchParams=null}setDefaultSearchParams(t){if(typeof t=="string")this._defaultSearchParams=t;else{const n=t;this._defaultSearchParams=Object.keys(n).map(r=>`${encodeURIComponent(r)}=${encodeURIComponent(n[r])}`).join("&")}}getAlias(t){const{alias:n,src:r}=t;return ie(n||r,i=>typeof i=="string"?i:Array.isArray(i)?i.map(o=>(o==null?void 0:o.src)??o):i!=null&&i.src?i.src:i,!0)}addManifest(t){this._manifest&&Tt("[Resolver] Manifest already exists, this will be overwritten"),this._manifest=t,t.bundles.forEach(n=>{this.addBundle(n.name,n.assets)})}addBundle(t,n){const r=[];let s=n;Array.isArray(n)||(s=Object.entries(n).map(([i,o])=>typeof o=="string"||Array.isArray(o)?{alias:i,src:o}:{alias:i,...o})),s.forEach(i=>{const o=i.src,a=i.alias;let l;if(typeof a=="string"){const u=this._createBundleAssetId(t,a);r.push(u),l=[a,u]}else{const u=a.map(c=>this._createBundleAssetId(t,c));r.push(...u),l=[...a,...u]}this.add({...i,alias:l,src:o})}),this._bundles[t]=r}add(t){const n=[];Array.isArray(t)?n.push(...t):n.push(t);let r;r=i=>{this.hasKey(i)&&Tt(`[Resolver] already has key: ${i} overwriting`)},ie(n).forEach(i=>{const{src:o}=i;let{data:a,format:l,loadParser:u}=i;const c=ie(o).map(d=>typeof d=="string"?kx(d):Array.isArray(d)?d:[d]),f=this.getAlias(i);Array.isArray(f)?f.forEach(r):r(f);const h=[];c.forEach(d=>{d.forEach(p=>{let m={};if(typeof p!="object"){m.src=p;for(let x=0;x<this._parsers.length;x++){const y=this._parsers[x];if(y.test(p)){m=y.parse(p);break}}}else a=p.data??a,l=p.format??l,u=p.loadParser??u,m={...m,...p};if(!f)throw new Error(`[Resolver] alias is undefined for this asset: ${m.src}`);m=this._buildResolvedAsset(m,{aliases:f,data:a,format:l,loadParser:u}),h.push(m)})}),f.forEach(d=>{this._assetMap[d]=h})})}resolveBundle(t){const n=ns(t);t=ie(t);const r={};return t.forEach(s=>{const i=this._bundles[s];if(i){const o=this.resolve(i),a={};for(const l in o){const u=o[l];a[this._extractAssetIdFromBundle(s,l)]=u}r[s]=a}}),n?r[t[0]]:r}resolveUrl(t){const n=this.resolve(t);if(typeof t!="string"){const r={};for(const s in n)r[s]=n[s].src;return r}return n.src}resolve(t){const n=ns(t);t=ie(t);const r={};return t.forEach(s=>{if(!this._resolverHash[s])if(this._assetMap[s]){let i=this._assetMap[s];const o=this._getPreferredOrder(i);o==null||o.priority.forEach(a=>{o.params[a].forEach(l=>{const u=i.filter(c=>c[a]?c[a]===l:!1);u.length&&(i=u)})}),this._resolverHash[s]=i[0]}else this._resolverHash[s]=this._buildResolvedAsset({alias:[s],src:s},{});r[s]=this._resolverHash[s]}),n?r[t[0]]:r}hasKey(t){return!!this._assetMap[t]}hasBundle(t){return!!this._bundles[t]}_getPreferredOrder(t){for(let n=0;n<t.length;n++){const r=t[0],s=this._preferredOrder.find(i=>i.params.format.includes(r.format));if(s)return s}return this._preferredOrder[0]}_appendDefaultSearchParams(t){if(!this._defaultSearchParams)return t;const n=/\?/.test(t)?"&":"?";return`${t}${n}${this._defaultSearchParams}`}_buildResolvedAsset(t,n){const{aliases:r,data:s,loadParser:i,format:o}=n;return(this._basePath||this._rootPath)&&(t.src=$t.toAbsolute(t.src,this._basePath,this._rootPath)),t.alias=r??t.alias??[t.src],t.src=this._appendDefaultSearchParams(t.src),t.data={...s||{},...t.data},t.loadParser=i??t.loadParser,t.format=o??t.format??Ix(t.src),t}}Fn.RETINA_PREFIX=/@([0-9\.]+)x/;function Ix(e){return e.split(".").pop().split("?").shift().split("#").shift()}const Li=(e,t)=>{const n=t.split("?")[1];return n&&(e+=`?${n}`),e},mu=class Vn{constructor(t,n){this.linkedSheets=[],this._texture=t instanceof it?t:null,this.textureSource=t.source,this.textures={},this.animations={},this.data=n;const r=parseFloat(n.meta.scale);r?(this.resolution=r,t.source.resolution=this.resolution):this.resolution=t.source._resolution,this._frames=this.data.frames,this._frameKeys=Object.keys(this._frames),this._batchIndex=0,this._callback=null}parse(){return new Promise(t=>{this._callback=t,this._batchIndex=0,this._frameKeys.length<=Vn.BATCH_SIZE?(this._processFrames(0),this._processAnimations(),this._parseComplete()):this._nextBatch()})}_processFrames(t){let n=t;const r=Vn.BATCH_SIZE;for(;n-t<r&&n<this._frameKeys.length;){const s=this._frameKeys[n],i=this._frames[s],o=i.frame;if(o){let a=null,l=null;const u=i.trimmed!==!1&&i.sourceSize?i.sourceSize:i.frame,c=new wt(0,0,Math.floor(u.w)/this.resolution,Math.floor(u.h)/this.resolution);i.rotated?a=new wt(Math.floor(o.x)/this.resolution,Math.floor(o.y)/this.resolution,Math.floor(o.h)/this.resolution,Math.floor(o.w)/this.resolution):a=new wt(Math.floor(o.x)/this.resolution,Math.floor(o.y)/this.resolution,Math.floor(o.w)/this.resolution,Math.floor(o.h)/this.resolution),i.trimmed!==!1&&i.spriteSourceSize&&(l=new wt(Math.floor(i.spriteSourceSize.x)/this.resolution,Math.floor(i.spriteSourceSize.y)/this.resolution,Math.floor(o.w)/this.resolution,Math.floor(o.h)/this.resolution)),this.textures[s]=new it({source:this.textureSource,frame:a,orig:c,trim:l,rotate:i.rotated?2:0,defaultAnchor:i.anchor,defaultBorders:i.borders,label:s.toString()})}n++}}_processAnimations(){const t=this.data.animations||{};for(const n in t){this.animations[n]=[];for(let r=0;r<t[n].length;r++){const s=t[n][r];this.animations[n].push(this.textures[s])}}}_parseComplete(){const t=this._callback;this._callback=null,this._batchIndex=0,t.call(this,this.textures)}_nextBatch(){this._processFrames(this._batchIndex*Vn.BATCH_SIZE),this._batchIndex++,setTimeout(()=>{this._batchIndex*Vn.BATCH_SIZE<this._frameKeys.length?this._nextBatch():(this._processAnimations(),this._parseComplete())},0)}destroy(t=!1){var n;for(const r in this.textures)this.textures[r].destroy();this._frames=null,this._frameKeys=null,this.data=null,this.textures=null,t&&((n=this._texture)==null||n.destroy(),this.textureSource.destroy()),this._texture=null,this.textureSource=null,this.linkedSheets=[]}};mu.BATCH_SIZE=1e3;let tl=mu;const zx=["jpg","png","jpeg","avif","webp","basis","etc2","bc7","bc6h","bc5","bc4","bc3","bc2","bc1","eac","astc"];function vu(e,t,n){const r={};if(e.forEach(s=>{r[s]=t}),Object.keys(t.textures).forEach(s=>{r[s]=t.textures[s]}),!n){const s=$t.dirname(e[0]);t.linkedSheets.forEach((i,o)=>{const a=vu([`${s}/${t.data.meta.related_multi_packs[o]}`],i,!0);Object.assign(r,a)})}return r}const Ex={extension:Y.Asset,cache:{test:e=>e instanceof tl,getCacheableAssets:(e,t)=>vu(e,t,!1)},resolver:{extension:{type:Y.ResolveParser,name:"resolveSpritesheet"},test:e=>{const n=e.split("?")[0].split("."),r=n.pop(),s=n.pop();return r==="json"&&zx.includes(s)},parse:e=>{var n;const t=e.split(".");return{resolution:parseFloat(((n=Fn.RETINA_PREFIX.exec(e))==null?void 0:n[1])??"1"),format:t[t.length-2],src:e}}},loader:{name:"spritesheetLoader",extension:{type:Y.LoadParser,priority:qe.Normal,name:"spritesheetLoader"},async testParse(e,t){return $t.extname(t.src).toLowerCase()===".json"&&!!e.frames},async parse(e,t,n){var u,c;const{texture:r,imageFilename:s}=(t==null?void 0:t.data)??{};let i=$t.dirname(t.src);i&&i.lastIndexOf("/")!==i.length-1&&(i+="/");let o;if(r instanceof it)o=r;else{const f=Li(i+(s??e.meta.image),t.src);o=(await n.load([f]))[f]}const a=new tl(o.source,e);await a.parse();const l=(u=e==null?void 0:e.meta)==null?void 0:u.related_multi_packs;if(Array.isArray(l)){const f=[];for(const d of l){if(typeof d!="string")continue;let p=i+d;(c=t.data)!=null&&c.ignoreMultiPack||(p=Li(p,t.src),f.push(n.load({src:p,data:{ignoreMultiPack:!0}})))}const h=await Promise.all(f);a.linkedSheets=h,h.forEach(d=>{d.linkedSheets=[a].concat(a.linkedSheets.filter(p=>p!==d))})}return a},async unload(e,t,n){await n.unload(e.textureSource._sourceOrigin),e.destroy(!1)}}};Jt.add(Ex);const Ys=Object.create(null),el=Object.create(null);function Po(e,t){let n=el[e];return n===void 0&&(Ys[t]===void 0&&(Ys[t]=1),el[e]=n=Ys[t]++),n}let xn;function gu(){return(!xn||xn!=null&&xn.isContextLost())&&(xn=gt.get().createCanvas().getContext("webgl",{})),xn}let Fr;function Fx(){if(!Fr){Fr="mediump";const e=gu();e&&e.getShaderPrecisionFormat&&(Fr=e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision?"highp":"mediump")}return Fr}function Ox(e,t,n){return t?e:n?(e=e.replace("out vec4 finalColor;",""),`
        
        #ifdef GL_ES // This checks if it is WebGL1
        #define in varying
        #define finalColor gl_FragColor
        #define texture texture2D
        #endif
        ${e}
        `):`
        
        #ifdef GL_ES // This checks if it is WebGL1
        #define in attribute
        #define out varying
        #endif
        ${e}
        `}function Bx(e,t,n){const r=n?t.maxSupportedFragmentPrecision:t.maxSupportedVertexPrecision;if(e.substring(0,9)!=="precision"){let s=n?t.requestedFragmentPrecision:t.requestedVertexPrecision;return s==="highp"&&r!=="highp"&&(s="mediump"),`precision ${s} float;
${e}`}else if(r!=="highp"&&e.substring(0,15)==="precision highp")return e.replace("precision highp","precision mediump");return e}function Rx(e,t){return t?`#version 300 es
${e}`:e}const Lx={},jx={};function Nx(e,{name:t="pixi-program"},n=!0){t=t.replace(/\s+/g,"-"),t+=n?"-fragment":"-vertex";const r=n?Lx:jx;return r[t]?(r[t]++,t+=`-${r[t]}`):r[t]=1,e.indexOf("#define SHADER_NAME")!==-1?e:`${`#define SHADER_NAME ${t}`}
${e}`}function Ux(e,t){return t?e.replace("#version 300 es",""):e}const Ks={stripVersion:Ux,ensurePrecision:Bx,addProgramDefines:Ox,setProgramName:Nx,insertVersion:Rx},Zs=Object.create(null),_u=class ji{constructor(t){t={...ji.defaultOptions,...t};const n=t.fragment.indexOf("#version 300 es")!==-1,r={stripVersion:n,ensurePrecision:{requestedFragmentPrecision:t.preferredFragmentPrecision,requestedVertexPrecision:t.preferredVertexPrecision,maxSupportedVertexPrecision:"highp",maxSupportedFragmentPrecision:Fx()},setProgramName:{name:t.name},addProgramDefines:n,insertVersion:n};let s=t.fragment,i=t.vertex;Object.keys(Ks).forEach(o=>{const a=r[o];s=Ks[o](s,a,!0),i=Ks[o](i,a,!1)}),this.fragment=s,this.vertex=i,this._key=Po(`${this.vertex}:${this.fragment}`,"gl-program")}destroy(){this.fragment=null,this.vertex=null,this._attributeData=null,this._uniformData=null,this._uniformBlockData=null,this.transformFeedbackVaryings=null}static from(t){const n=`${t.vertex}:${t.fragment}`;return Zs[n]||(Zs[n]=new ji(t)),Zs[n]}};_u.defaultOptions={preferredVertexPrecision:"highp",preferredFragmentPrecision:"mediump"};let hr=_u;const nl={uint8x2:{size:2,stride:2,normalised:!1},uint8x4:{size:4,stride:4,normalised:!1},sint8x2:{size:2,stride:2,normalised:!1},sint8x4:{size:4,stride:4,normalised:!1},unorm8x2:{size:2,stride:2,normalised:!0},unorm8x4:{size:4,stride:4,normalised:!0},snorm8x2:{size:2,stride:2,normalised:!0},snorm8x4:{size:4,stride:4,normalised:!0},uint16x2:{size:2,stride:4,normalised:!1},uint16x4:{size:4,stride:8,normalised:!1},sint16x2:{size:2,stride:4,normalised:!1},sint16x4:{size:4,stride:8,normalised:!1},unorm16x2:{size:2,stride:4,normalised:!0},unorm16x4:{size:4,stride:8,normalised:!0},snorm16x2:{size:2,stride:4,normalised:!0},snorm16x4:{size:4,stride:8,normalised:!0},float16x2:{size:2,stride:4,normalised:!1},float16x4:{size:4,stride:8,normalised:!1},float32:{size:1,stride:4,normalised:!1},float32x2:{size:2,stride:8,normalised:!1},float32x3:{size:3,stride:12,normalised:!1},float32x4:{size:4,stride:16,normalised:!1},uint32:{size:1,stride:4,normalised:!1},uint32x2:{size:2,stride:8,normalised:!1},uint32x3:{size:3,stride:12,normalised:!1},uint32x4:{size:4,stride:16,normalised:!1},sint32:{size:1,stride:4,normalised:!1},sint32x2:{size:2,stride:8,normalised:!1},sint32x3:{size:3,stride:12,normalised:!1},sint32x4:{size:4,stride:16,normalised:!1}};function Dx(e){return nl[e]??nl.float32}const Gx={f32:"float32","vec2<f32>":"float32x2","vec3<f32>":"float32x3","vec4<f32>":"float32x4",vec2f:"float32x2",vec3f:"float32x3",vec4f:"float32x4",i32:"sint32","vec2<i32>":"sint32x2","vec3<i32>":"sint32x3","vec4<i32>":"sint32x4",u32:"uint32","vec2<u32>":"uint32x2","vec3<u32>":"uint32x3","vec4<u32>":"uint32x4",bool:"uint32","vec2<bool>":"uint32x2","vec3<bool>":"uint32x3","vec4<bool>":"uint32x4"};function Wx({source:e,entryPoint:t}){const n={},r=e.indexOf(`fn ${t}`);if(r!==-1){const s=e.indexOf("->",r);if(s!==-1){const i=e.substring(r,s),o=/@location\((\d+)\)\s+([a-zA-Z0-9_]+)\s*:\s*([a-zA-Z0-9_<>]+)(?:,|\s|$)/g;let a;for(;(a=o.exec(i))!==null;){const l=Gx[a[3]]??"float32";n[a[2]]={location:parseInt(a[1],10),format:l,stride:Dx(l).stride,offset:0,instance:!1,start:0}}}}return n}function Qs(e){var f,h;const t=/(^|[^/])@(group|binding)\(\d+\)[^;]+;/g,n=/@group\((\d+)\)/,r=/@binding\((\d+)\)/,s=/var(<[^>]+>)? (\w+)/,i=/:\s*(\w+)/,o=/struct\s+(\w+)\s*{([^}]+)}/g,a=/(\w+)\s*:\s*([\w\<\>]+)/g,l=/struct\s+(\w+)/,u=(f=e.match(t))==null?void 0:f.map(d=>({group:parseInt(d.match(n)[1],10),binding:parseInt(d.match(r)[1],10),name:d.match(s)[2],isUniform:d.match(s)[1]==="<uniform>",type:d.match(i)[1]}));if(!u)return{groups:[],structs:[]};const c=((h=e.match(o))==null?void 0:h.map(d=>{const p=d.match(l)[1],m=d.match(a).reduce((x,y)=>{const[g,v]=y.split(":");return x[g.trim()]=v.trim(),x},{});return m?{name:p,members:m}:null}).filter(({name:d})=>u.some(p=>p.type===d)))??[];return{groups:u,structs:c}}var qn=(e=>(e[e.VERTEX=1]="VERTEX",e[e.FRAGMENT=2]="FRAGMENT",e[e.COMPUTE=4]="COMPUTE",e))(qn||{});function Hx({groups:e}){const t=[];for(let n=0;n<e.length;n++){const r=e[n];t[r.group]||(t[r.group]=[]),r.isUniform?t[r.group].push({binding:r.binding,visibility:qn.VERTEX|qn.FRAGMENT,buffer:{type:"uniform"}}):r.type==="sampler"?t[r.group].push({binding:r.binding,visibility:qn.FRAGMENT,sampler:{type:"filtering"}}):r.type==="texture_2d"&&t[r.group].push({binding:r.binding,visibility:qn.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d",multisampled:!1}})}return t}function $x({groups:e}){const t=[];for(let n=0;n<e.length;n++){const r=e[n];t[r.group]||(t[r.group]={}),t[r.group][r.name]=r.binding}return t}function Vx(e,t){const n=new Set,r=new Set,s=[...e.structs,...t.structs].filter(o=>n.has(o.name)?!1:(n.add(o.name),!0)),i=[...e.groups,...t.groups].filter(o=>{const a=`${o.name}-${o.binding}`;return r.has(a)?!1:(r.add(a),!0)});return{structs:s,groups:i}}const Js=Object.create(null);class _s{constructor(t){var a,l;this._layoutKey=0;const{fragment:n,vertex:r,layout:s,gpuLayout:i,name:o}=t;if(this.name=o,this.fragment=n,this.vertex=r,n.source===r.source){const u=Qs(n.source);this.structsAndGroups=u}else{const u=Qs(r.source),c=Qs(n.source);this.structsAndGroups=Vx(u,c)}this.layout=s??$x(this.structsAndGroups),this.gpuLayout=i??Hx(this.structsAndGroups),this.autoAssignGlobalUniforms=((a=this.layout[0])==null?void 0:a.globalUniforms)!==void 0,this.autoAssignLocalUniforms=((l=this.layout[1])==null?void 0:l.localUniforms)!==void 0,this._generateProgramKey()}_generateProgramKey(){const{vertex:t,fragment:n}=this,r=t.source+n.source+t.entryPoint+n.entryPoint;this._layoutKey=Po(r,"program")}get attributeData(){return this._attributeData??(this._attributeData=Wx(this.vertex)),this._attributeData}destroy(){this.gpuLayout=null,this.layout=null,this.structsAndGroups=null,this.fragment=null,this.vertex=null}static from(t){const n=`${t.vertex.source}:${t.fragment.source}:${t.fragment.entryPoint}:${t.vertex.entryPoint}`;return Js[n]||(Js[n]=new _s(t)),Js[n]}}const yu=["f32","i32","vec2<f32>","vec3<f32>","vec4<f32>","mat2x2<f32>","mat3x3<f32>","mat4x4<f32>","mat3x2<f32>","mat4x2<f32>","mat2x3<f32>","mat4x3<f32>","mat2x4<f32>","mat3x4<f32>"],qx=yu.reduce((e,t)=>(e[t]=!0,e),{});function Xx(e,t){switch(e){case"f32":return 0;case"vec2<f32>":return new Float32Array(2*t);case"vec3<f32>":return new Float32Array(3*t);case"vec4<f32>":return new Float32Array(4*t);case"mat2x2<f32>":return new Float32Array([1,0,0,1]);case"mat3x3<f32>":return new Float32Array([1,0,0,0,1,0,0,0,1]);case"mat4x4<f32>":return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}return null}const bu=class wu{constructor(t,n){this._touched=0,this.uid=Ct("uniform"),this._resourceType="uniformGroup",this._resourceId=Ct("resource"),this.isUniformGroup=!0,this._dirtyId=0,this.destroyed=!1,n={...wu.defaultOptions,...n},this.uniformStructures=t;const r={};for(const s in t){const i=t[s];if(i.name=s,i.size=i.size??1,!qx[i.type])throw new Error(`Uniform type ${i.type} is not supported. Supported uniform types are: ${yu.join(", ")}`);i.value??(i.value=Xx(i.type,i.size)),r[s]=i.value}this.uniforms=r,this._dirtyId=1,this.ubo=n.ubo,this.isStatic=n.isStatic,this._signature=Po(Object.keys(r).map(s=>`${s}-${t[s].type}`).join("-"),"uniform-group")}update(){this._dirtyId++}};bu.defaultOptions={ubo:!1,isStatic:!1};let Yx=bu;class Yr{constructor(t){this.resources=Object.create(null),this._dirty=!0;let n=0;for(const r in t){const s=t[r];this.setResource(s,n++)}this._updateKey()}_updateKey(){if(!this._dirty)return;this._dirty=!1;const t=[];let n=0;for(const r in this.resources)t[n++]=this.resources[r]._resourceId;this._key=t.join("|")}setResource(t,n){var s,i;const r=this.resources[n];t!==r&&(r&&((s=t.off)==null||s.call(t,"change",this.onResourceChange,this)),(i=t.on)==null||i.call(t,"change",this.onResourceChange,this),this.resources[n]=t,this._dirty=!0)}getResource(t){return this.resources[t]}_touch(t){const n=this.resources;for(const r in n)n[r]._touched=t}destroy(){var n;const t=this.resources;for(const r in t){const s=t[r];(n=s.off)==null||n.call(s,"change",this.onResourceChange,this)}this.resources=null}onResourceChange(t){if(this._dirty=!0,t.destroyed){const n=this.resources;for(const r in n)n[r]===t&&(n[r]=null)}else this._updateKey()}}var Ni=(e=>(e[e.WEBGL=1]="WEBGL",e[e.WEBGPU=2]="WEBGPU",e[e.BOTH=3]="BOTH",e))(Ni||{});let Kx=class Cu extends ce{constructor(t){super(),this._uniformBindMap=Object.create(null),this._ownedBindGroups=[];let{gpuProgram:n,glProgram:r,groups:s,resources:i,compatibleRenderers:o,groupMap:a}=t;this.gpuProgram=n,this.glProgram=r,o===void 0&&(o=0,n&&(o|=Ni.WEBGPU),r&&(o|=Ni.WEBGL)),this.compatibleRenderers=o;const l={};if(!i&&!s&&(i={}),i&&s)throw new Error("[Shader] Cannot have both resources and groups");if(!n&&s&&!a)throw new Error("[Shader] No group map or WebGPU shader provided - consider using resources instead.");if(!n&&s&&a)for(const u in a)for(const c in a[u]){const f=a[u][c];l[f]={group:u,binding:c,name:f}}else if(n&&s&&!a){const u=n.structsAndGroups.groups;a={},u.forEach(c=>{a[c.group]=a[c.group]||{},a[c.group][c.binding]=c.name,l[c.name]=c})}else if(i){if(n){const u=n.structsAndGroups.groups;a={},u.forEach(c=>{a[c.group]=a[c.group]||{},a[c.group][c.binding]=c.name,l[c.name]=c})}else{a={},s={99:new Yr},this._ownedBindGroups.push(s[99]);let u=0;for(const c in i)l[c]={group:99,binding:u,name:c},a[99]=a[99]||{},a[99][u]=c,u++}s={};for(const u in i){const c=u;let f=i[u];!f.source&&!f._resourceType&&(f=new Yx(f));const h=l[c];h&&(s[h.group]||(s[h.group]=new Yr,this._ownedBindGroups.push(s[h.group])),s[h.group].setResource(f,h.binding))}}this.groups=s,this._uniformBindMap=a,this.resources=this._buildResourceAccessor(s,l)}addResource(t,n,r){var s,i;(s=this._uniformBindMap)[n]||(s[n]={}),(i=this._uniformBindMap[n])[r]||(i[r]=t),this.groups[n]||(this.groups[n]=new Yr,this._ownedBindGroups.push(this.groups[n]))}_buildResourceAccessor(t,n){const r={};for(const s in n){const i=n[s];Object.defineProperty(r,i.name,{get(){return t[i.group].getResource(i.binding)},set(o){t[i.group].setResource(o,i.binding)}})}return r}destroy(t=!1){var n,r;this.emit("destroy",this),t&&((n=this.gpuProgram)==null||n.destroy(),(r=this.glProgram)==null||r.destroy()),this.gpuProgram=null,this.glProgram=null,this.removeAllListeners(),this._uniformBindMap=null,this._ownedBindGroups.forEach(s=>{s.destroy()}),this._ownedBindGroups=null,this.resources=null,this.groups=null}static from(t){const{gpu:n,gl:r,...s}=t;let i,o;return n&&(i=_s.from(n)),r&&(o=hr.from(r)),new Cu({gpuProgram:i,glProgram:o,...s})}};const Zx={normal:0,add:1,multiply:2,screen:3,overlay:4,erase:5,"normal-npm":6,"add-npm":7,"screen-npm":8},ti=0,ei=1,ni=2,ri=3,si=4,ii=5,Ui=class Au{constructor(){this.data=0,this.blendMode="normal",this.polygonOffset=0,this.blend=!0,this.depthMask=!0}get blend(){return!!(this.data&1<<ti)}set blend(t){!!(this.data&1<<ti)!==t&&(this.data^=1<<ti)}get offsets(){return!!(this.data&1<<ei)}set offsets(t){!!(this.data&1<<ei)!==t&&(this.data^=1<<ei)}set cullMode(t){if(t==="none"){this.culling=!1;return}this.culling=!0,this.clockwiseFrontFace=t==="front"}get cullMode(){return this.culling?this.clockwiseFrontFace?"front":"back":"none"}get culling(){return!!(this.data&1<<ni)}set culling(t){!!(this.data&1<<ni)!==t&&(this.data^=1<<ni)}get depthTest(){return!!(this.data&1<<ri)}set depthTest(t){!!(this.data&1<<ri)!==t&&(this.data^=1<<ri)}get depthMask(){return!!(this.data&1<<ii)}set depthMask(t){!!(this.data&1<<ii)!==t&&(this.data^=1<<ii)}get clockwiseFrontFace(){return!!(this.data&1<<si)}set clockwiseFrontFace(t){!!(this.data&1<<si)!==t&&(this.data^=1<<si)}get blendMode(){return this._blendMode}set blendMode(t){this.blend=t!=="none",this._blendMode=t,this._blendModeId=Zx[t]||0}get polygonOffset(){return this._polygonOffset}set polygonOffset(t){this.offsets=!!t,this._polygonOffset=t}toString(){return`[pixi.js/core:State blendMode=${this.blendMode} clockwiseFrontFace=${this.clockwiseFrontFace} culling=${this.culling} depthMask=${this.depthMask} polygonOffset=${this.polygonOffset}]`}static for2d(){const t=new Au;return t.depthTest=!1,t.blend=!0,t}};Ui.default2d=Ui.for2d();let Qx=Ui;const Su=class Di extends Kx{constructor(t){t={...Di.defaultOptions,...t},super(t),this.enabled=!0,this._state=Qx.for2d(),this.padding=t.padding,typeof t.antialias=="boolean"?this.antialias=t.antialias?"on":"off":this.antialias=t.antialias,this.resolution=t.resolution,this.blendRequired=t.blendRequired,this.addResource("uTexture",0,1)}apply(t,n,r,s){t.applyFilter(this,n,r,s)}get blendMode(){return this._state.blendMode}set blendMode(t){this._state.blendMode=t}static from(t){const{gpu:n,gl:r,...s}=t;let i,o;return n&&(i=_s.from(n)),r&&(o=hr.from(r)),new Di({gpuProgram:i,glProgram:o,...s})}};Su.defaultOptions={blendMode:"normal",resolution:1,padding:0,antialias:"off",blendRequired:!1};let Pu=Su;const Gi=[];Jt.handleByNamedList(Y.Environment,Gi);async function Jx(e){if(!e)for(let t=0;t<Gi.length;t++){const n=Gi[t];if(n.value.test()){await n.value.load();return}}}let Un;function tm(){if(typeof Un=="boolean")return Un;try{Un=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{Un=!1}return Un}var Mo={exports:{}};Mo.exports=ys;Mo.exports.default=ys;function ys(e,t,n){n=n||2;var r=t&&t.length,s=r?t[0]*n:e.length,i=Mu(e,0,s,n,!0),o=[];if(!i||i.next===i.prev)return o;var a,l,u,c,f,h,d;if(r&&(i=im(e,t,i,n)),e.length>80*n){a=u=e[0],l=c=e[1];for(var p=n;p<s;p+=n)f=e[p],h=e[p+1],f<a&&(a=f),h<l&&(l=h),f>u&&(u=f),h>c&&(c=h);d=Math.max(u-a,c-l),d=d!==0?32767/d:0}return dr(i,o,n,a,l,d,0),o}function Mu(e,t,n,r,s){var i,o;if(s===$i(e,t,n,r)>0)for(i=t;i<n;i+=r)o=rl(i,e[i],e[i+1],o);else for(i=n-r;i>=t;i-=r)o=rl(i,e[i],e[i+1],o);return o&&bs(o,o.next)&&(xr(o),o=o.next),o}function fn(e,t){if(!e)return e;t||(t=e);var n=e,r;do if(r=!1,!n.steiner&&(bs(n,n.next)||mt(n.prev,n,n.next)===0)){if(xr(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function dr(e,t,n,r,s,i,o){if(e){!o&&i&&um(e,r,s,i);for(var a=e,l,u;e.prev!==e.next;){if(l=e.prev,u=e.next,i?nm(e,r,s,i):em(e)){t.push(l.i/n|0),t.push(e.i/n|0),t.push(u.i/n|0),xr(e),e=u.next,a=u.next;continue}if(e=u,e===a){o?o===1?(e=rm(fn(e),t,n),dr(e,t,n,r,s,i,2)):o===2&&sm(e,t,n,r,s,i):dr(fn(e),t,n,r,s,i,1);break}}}}function em(e){var t=e.prev,n=e,r=e.next;if(mt(t,n,r)>=0)return!1;for(var s=t.x,i=n.x,o=r.x,a=t.y,l=n.y,u=r.y,c=s<i?s<o?s:o:i<o?i:o,f=a<l?a<u?a:u:l<u?l:u,h=s>i?s>o?s:o:i>o?i:o,d=a>l?a>u?a:u:l>u?l:u,p=r.next;p!==t;){if(p.x>=c&&p.x<=h&&p.y>=f&&p.y<=d&&gn(s,a,i,l,o,u,p.x,p.y)&&mt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function nm(e,t,n,r){var s=e.prev,i=e,o=e.next;if(mt(s,i,o)>=0)return!1;for(var a=s.x,l=i.x,u=o.x,c=s.y,f=i.y,h=o.y,d=a<l?a<u?a:u:l<u?l:u,p=c<f?c<h?c:h:f<h?f:h,m=a>l?a>u?a:u:l>u?l:u,x=c>f?c>h?c:h:f>h?f:h,y=Wi(d,p,t,n,r),g=Wi(m,x,t,n,r),v=e.prevZ,b=e.nextZ;v&&v.z>=y&&b&&b.z<=g;){if(v.x>=d&&v.x<=m&&v.y>=p&&v.y<=x&&v!==s&&v!==o&&gn(a,c,l,f,u,h,v.x,v.y)&&mt(v.prev,v,v.next)>=0||(v=v.prevZ,b.x>=d&&b.x<=m&&b.y>=p&&b.y<=x&&b!==s&&b!==o&&gn(a,c,l,f,u,h,b.x,b.y)&&mt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;v&&v.z>=y;){if(v.x>=d&&v.x<=m&&v.y>=p&&v.y<=x&&v!==s&&v!==o&&gn(a,c,l,f,u,h,v.x,v.y)&&mt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;b&&b.z<=g;){if(b.x>=d&&b.x<=m&&b.y>=p&&b.y<=x&&b!==s&&b!==o&&gn(a,c,l,f,u,h,b.x,b.y)&&mt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function rm(e,t,n){var r=e;do{var s=r.prev,i=r.next.next;!bs(s,i)&&Tu(s,r,r.next,i)&&pr(s,i)&&pr(i,s)&&(t.push(s.i/n|0),t.push(r.i/n|0),t.push(i.i/n|0),xr(r),xr(r.next),r=e=i),r=r.next}while(r!==e);return fn(r)}function sm(e,t,n,r,s,i){var o=e;do{for(var a=o.next.next;a!==o.prev;){if(o.i!==a.i&&dm(o,a)){var l=ku(o,a);o=fn(o,o.next),l=fn(l,l.next),dr(o,t,n,r,s,i,0),dr(l,t,n,r,s,i,0);return}a=a.next}o=o.next}while(o!==e)}function im(e,t,n,r){var s=[],i,o,a,l,u;for(i=0,o=t.length;i<o;i++)a=t[i]*r,l=i<o-1?t[i+1]*r:e.length,u=Mu(e,a,l,r,!1),u===u.next&&(u.steiner=!0),s.push(hm(u));for(s.sort(om),i=0;i<s.length;i++)n=am(s[i],n);return n}function om(e,t){return e.x-t.x}function am(e,t){var n=lm(e,t);if(!n)return t;var r=ku(n,e);return fn(r,r.next),fn(n,n.next)}function lm(e,t){var n=t,r=e.x,s=e.y,i=-1/0,o;do{if(s<=n.y&&s>=n.next.y&&n.next.y!==n.y){var a=n.x+(s-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(a<=r&&a>i&&(i=a,o=n.x<n.next.x?n:n.next,a===r))return o}n=n.next}while(n!==t);if(!o)return null;var l=o,u=o.x,c=o.y,f=1/0,h;n=o;do r>=n.x&&n.x>=u&&r!==n.x&&gn(s<c?r:i,s,u,c,s<c?i:r,s,n.x,n.y)&&(h=Math.abs(s-n.y)/(r-n.x),pr(n,e)&&(h<f||h===f&&(n.x>o.x||n.x===o.x&&cm(o,n)))&&(o=n,f=h)),n=n.next;while(n!==l);return o}function cm(e,t){return mt(e.prev,e,t.prev)<0&&mt(t.next,e,e.next)<0}function um(e,t,n,r){var s=e;do s.z===0&&(s.z=Wi(s.x,s.y,t,n,r)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==e);s.prevZ.nextZ=null,s.prevZ=null,fm(s)}function fm(e){var t,n,r,s,i,o,a,l,u=1;do{for(n=e,e=null,i=null,o=0;n;){for(o++,r=n,a=0,t=0;t<u&&(a++,r=r.nextZ,!!r);t++);for(l=u;a>0||l>0&&r;)a!==0&&(l===0||!r||n.z<=r.z)?(s=n,n=n.nextZ,a--):(s=r,r=r.nextZ,l--),i?i.nextZ=s:e=s,s.prevZ=i,i=s;n=r}i.nextZ=null,u*=2}while(o>1);return e}function Wi(e,t,n,r,s){return e=(e-n)*s|0,t=(t-r)*s|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function hm(e){var t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function gn(e,t,n,r,s,i,o,a){return(s-o)*(t-a)>=(e-o)*(i-a)&&(e-o)*(r-a)>=(n-o)*(t-a)&&(n-o)*(i-a)>=(s-o)*(r-a)}function dm(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!pm(e,t)&&(pr(e,t)&&pr(t,e)&&xm(e,t)&&(mt(e.prev,e,t.prev)||mt(e,t.prev,t))||bs(e,t)&&mt(e.prev,e,e.next)>0&&mt(t.prev,t,t.next)>0)}function mt(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function bs(e,t){return e.x===t.x&&e.y===t.y}function Tu(e,t,n,r){var s=Br(mt(e,t,n)),i=Br(mt(e,t,r)),o=Br(mt(n,r,e)),a=Br(mt(n,r,t));return!!(s!==i&&o!==a||s===0&&Or(e,n,t)||i===0&&Or(e,r,t)||o===0&&Or(n,e,r)||a===0&&Or(n,t,r))}function Or(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Br(e){return e>0?1:e<0?-1:0}function pm(e,t){var n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&Tu(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function pr(e,t){return mt(e.prev,e,e.next)<0?mt(e,t,e.next)>=0&&mt(e,e.prev,t)>=0:mt(e,t,e.prev)<0||mt(e,e.next,t)<0}function xm(e,t){var n=e,r=!1,s=(e.x+t.x)/2,i=(e.y+t.y)/2;do n.y>i!=n.next.y>i&&n.next.y!==n.y&&s<(n.next.x-n.x)*(i-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function ku(e,t){var n=new Hi(e.i,e.x,e.y),r=new Hi(t.i,t.x,t.y),s=e.next,i=t.prev;return e.next=t,t.prev=e,n.next=s,s.prev=n,r.next=n,n.prev=r,i.next=r,r.prev=i,r}function rl(e,t,n,r){var s=new Hi(e,t,n);return r?(s.next=r.next,s.prev=r,r.next.prev=s,r.next=s):(s.prev=s,s.next=s),s}function xr(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Hi(e,t,n){this.i=e,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}ys.deviation=function(e,t,n,r){var s=t&&t.length,i=s?t[0]*n:e.length,o=Math.abs($i(e,0,i,n));if(s)for(var a=0,l=t.length;a<l;a++){var u=t[a]*n,c=a<l-1?t[a+1]*n:e.length;o-=Math.abs($i(e,u,c,n))}var f=0;for(a=0;a<r.length;a+=3){var h=r[a]*n,d=r[a+1]*n,p=r[a+2]*n;f+=Math.abs((e[h]-e[p])*(e[d+1]-e[h+1])-(e[h]-e[d])*(e[p+1]-e[h+1]))}return o===0&&f===0?0:Math.abs((f-o)/o)};function $i(e,t,n,r){for(var s=0,i=t,o=n-r;i<n;i+=r)s+=(e[o]-e[i])*(e[i+1]+e[o+1]),o=i;return s}ys.flatten=function(e){for(var t=e[0][0].length,n={vertices:[],holes:[],dimensions:t},r=0,s=0;s<e.length;s++){for(var i=0;i<e[s].length;i++)for(var o=0;o<t;o++)n.vertices.push(e[s][i][o]);s>0&&(r+=e[s-1].length,n.holes.push(r))}return n};var mm=Mo.exports;const vm=Co(mm);var Iu=(e=>(e[e.NONE=0]="NONE",e[e.COLOR=16384]="COLOR",e[e.STENCIL=1024]="STENCIL",e[e.DEPTH=256]="DEPTH",e[e.COLOR_DEPTH=16640]="COLOR_DEPTH",e[e.COLOR_STENCIL=17408]="COLOR_STENCIL",e[e.DEPTH_STENCIL=1280]="DEPTH_STENCIL",e[e.ALL=17664]="ALL",e))(Iu||{});class gm{constructor(t){this.items=[],this._name=t}emit(t,n,r,s,i,o,a,l){const{name:u,items:c}=this;for(let f=0,h=c.length;f<h;f++)c[f][u](t,n,r,s,i,o,a,l);return this}add(t){return t[this._name]&&(this.remove(t),this.items.push(t)),this}remove(t){const n=this.items.indexOf(t);return n!==-1&&this.items.splice(n,1),this}contains(t){return this.items.indexOf(t)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const _m=["init","destroy","contextChange","resolutionChange","reset","renderEnd","renderStart","render","update","postrender","prerender"],zu=class Eu extends ce{constructor(t){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=t.type,this.name=t.name,this.config=t;const n=[..._m,...this.config.runners??[]];this._addRunners(...n),this._unsafeEvalCheck()}async init(t={}){const n=t.skipExtensionImports===!0?!0:t.manageImports===!1;await Jx(n),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const r in this._systemsHash)t={...this._systemsHash[r].constructor.defaultOptions,...t};t={...Eu.defaultOptions,...t},this._roundPixels=t.roundPixels?1:0;for(let r=0;r<this.runners.init.items.length;r++)await this.runners.init.items[r].init(t);this._initOptions=t}render(t,n){let r=t;if(r instanceof Bt&&(r={container:r},n&&(ut(ct,"passing a second argument is deprecated, please use render options instead"),r.target=n.renderTexture)),r.target||(r.target=this.view.renderTarget),r.target===this.view.renderTarget&&(this._lastObjectRendered=r.container,r.clearColor=this.background.colorRgba),r.clearColor){const s=Array.isArray(r.clearColor)&&r.clearColor.length===4;r.clearColor=s?r.clearColor:yt.shared.setValue(r.clearColor).toArray()}r.transform||(r.container.updateLocalTransform(),r.transform=r.container.localTransform),this.runners.prerender.emit(r),this.runners.renderStart.emit(r),this.runners.render.emit(r),this.runners.renderEnd.emit(r),this.runners.postrender.emit(r)}resize(t,n,r){this.view.resize(t,n,r),this.emit("resize",this.view.screen.width,this.view.screen.height)}clear(t={}){const n=this;t.target||(t.target=n.renderTarget.renderTarget),t.clearColor||(t.clearColor=this.background.colorRgba),t.clear??(t.clear=Iu.ALL);const{clear:r,clearColor:s,target:i}=t;yt.shared.setValue(s??this.background.colorRgba),n.renderTarget.clear(i,r,yt.shared.toArray())}get resolution(){return this.view.resolution}set resolution(t){this.view.resolution=t,this.runners.resolutionChange.emit(t)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...t){t.forEach(n=>{this.runners[n]=new gm(n)})}_addSystems(t){let n;for(n in t){const r=t[n];this._addSystem(r.value,r.name)}}_addSystem(t,n){const r=new t(this);if(this[n])throw new Error(`Whoops! The name "${n}" is already in use`);this[n]=r,this._systemsHash[n]=r;for(const s in this.runners)this.runners[s].add(r);return this}_addPipes(t,n){const r=n.reduce((s,i)=>(s[i.name]=i.value,s),{});t.forEach(s=>{const i=s.value,o=s.name,a=r[o];this.renderPipes[o]=new i(this,a?new a:null)})}destroy(t=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(t),Object.values(this.runners).forEach(n=>{n.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(t){return this.textureGenerator.generateTexture(t)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!tm())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}};zu.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let Fu=zu,Rr;function ym(e){return Rr!==void 0||(Rr=(()=>{var n;const t={stencil:!0,failIfMajorPerformanceCaveat:e??Fu.defaultOptions.failIfMajorPerformanceCaveat};try{if(!gt.get().getWebGLRenderingContext())return!1;let s=gt.get().createCanvas().getContext("webgl",t);const i=!!((n=s==null?void 0:s.getContextAttributes())!=null&&n.stencil);if(s){const o=s.getExtension("WEBGL_lose_context");o&&o.loseContext()}return s=null,i}catch{return!1}})()),Rr}let Lr;async function bm(e={}){return Lr!==void 0||(Lr=await(async()=>{if(!gt.get().getNavigator().gpu)return!1;try{return await(await navigator.gpu.requestAdapter(e)).requestDevice(),!0}catch{return!1}})()),Lr}const sl=["webgl","webgpu","canvas"];async function wm(e){let t=[];e.preference?(t.push(e.preference),sl.forEach(i=>{i!==e.preference&&t.push(i)})):t=sl.slice();let n,r={};for(let i=0;i<t.length;i++){const o=t[i];if(o==="webgpu"&&await bm()){const{WebGPURenderer:a}=await ts(()=>import("./WebGPURenderer-D4wWwnc0.js"),__vite__mapDeps([4,2,5]));n=a,r={...e,...e.webgpu};break}else if(o==="webgl"&&ym(e.failIfMajorPerformanceCaveat??Fu.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:a}=await ts(()=>import("./WebGLRenderer-BZUK74NY.js"),__vite__mapDeps([6,2,3,5]));n=a,r={...e,...e.webgl};break}else if(o==="canvas")throw r={...e},new Error("CanvasRenderer is not yet implemented")}if(delete r.webgpu,delete r.webgl,!n)throw new Error("No available renderer for the current environment");const s=new n;return await s.init(r),s}const Ou=class Vi{constructor(...t){this.stage=new Bt,t[0]!==void 0&&ut(ct,"Application constructor options are deprecated, please use Application.init() instead.")}async init(t){t={...t},this.renderer=await wm(t),Vi._plugins.forEach(n=>{n.init.call(this,t)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return ut(ct,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(t=!1,n=!1){const r=Vi._plugins.slice(0);r.reverse(),r.forEach(s=>{s.destroy.call(this)}),this.stage.destroy(n),this.stage=null,this.renderer.destroy(t),this.renderer=null}};Ou._plugins=[];let To=Ou;Jt.handleByList(Y.Application,To._plugins);class Bu extends ce{constructor(){super(...arguments),this.chars=Object.create(null),this.lineHeight=0,this.fontFamily="",this.fontMetrics={fontSize:0,ascent:0,descent:0},this.baseLineOffset=0,this.distanceField={type:"none",range:0},this.pages=[],this.baseMeasurementFontSize=100,this.baseRenderedFontSize=100}get font(){return ut(ct,"BitmapFont.font is deprecated, please use BitmapFont.fontFamily instead."),this.fontFamily}get pageTextures(){return ut(ct,"BitmapFont.pageTextures is deprecated, please use BitmapFont.pages instead."),this.pages}get size(){return ut(ct,"BitmapFont.size is deprecated, please use BitmapFont.fontMetrics.fontSize instead."),this.fontMetrics.fontSize}get distanceFieldRange(){return ut(ct,"BitmapFont.distanceFieldRange is deprecated, please use BitmapFont.distanceField.range instead."),this.distanceField.range}get distanceFieldType(){return ut(ct,"BitmapFont.distanceFieldType is deprecated, please use BitmapFont.distanceField.type instead."),this.distanceField.type}destroy(t=!1){var n;this.emit("destroy",this),this.removeAllListeners();for(const r in this.chars)(n=this.chars[r].texture)==null||n.destroy();this.chars=null,t&&(this.pages.forEach(r=>r.texture.destroy(!0)),this.pages=null)}}const Ru=class qi{constructor(t,n,r,s){this.uid=Ct("fillGradient"),this.type="linear",this.gradientStops=[],this._styleKey=null,this.x0=t,this.y0=n,this.x1=r,this.y1=s}addColorStop(t,n){return this.gradientStops.push({offset:t,color:yt.shared.setValue(n).toHex()}),this._styleKey=null,this}buildLinearGradient(){const t=qi.defaultTextureSize,{gradientStops:n}=this,r=gt.get().createCanvas();r.width=t,r.height=t;const s=r.getContext("2d"),i=s.createLinearGradient(0,0,qi.defaultTextureSize,1);for(let m=0;m<n.length;m++){const x=n[m];i.addColorStop(x.offset,x.color)}s.fillStyle=i,s.fillRect(0,0,t,t),this.texture=new it({source:new En({resource:r,addressModeU:"clamp-to-edge",addressModeV:"repeat"})});const{x0:o,y0:a,x1:l,y1:u}=this,c=new at,f=l-o,h=u-a,d=Math.sqrt(f*f+h*h),p=Math.atan2(h,f);c.translate(-o,-a),c.scale(1/t,1/t),c.rotate(-p),c.scale(256/d,1),this.transform=c,this._styleKey=null}get styleKey(){if(this._styleKey)return this._styleKey;const t=this.gradientStops.map(s=>`${s.offset}-${s.color}`).join("-"),n=this.texture.uid,r=this.transform.toArray().join("-");return`fill-gradient-${this.uid}-${t}-${n}-${r}-${this.x0}-${this.y0}-${this.x1}-${this.y1}`}};Ru.defaultTextureSize=256;let mr=Ru;const il={repeat:{addressModeU:"repeat",addressModeV:"repeat"},"repeat-x":{addressModeU:"repeat",addressModeV:"clamp-to-edge"},"repeat-y":{addressModeU:"clamp-to-edge",addressModeV:"repeat"},"no-repeat":{addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}};class ws{constructor(t,n){this.uid=Ct("fillPattern"),this.transform=new at,this._styleKey=null,this.texture=t,this.transform.scale(1/t.frame.width,1/t.frame.height),n&&(t.source.style.addressModeU=il[n].addressModeU,t.source.style.addressModeV=il[n].addressModeV)}setTransform(t){const n=this.texture;this.transform.copyFrom(t),this.transform.invert(),this.transform.scale(1/n.frame.width,1/n.frame.height),this._styleKey=null}get styleKey(){return this._styleKey?this._styleKey:(this._styleKey=`fill-pattern-${this.uid}-${this.texture.uid}-${this.transform.toArray().join("-")}`,this._styleKey)}}var Cm=Sm,oi={a:7,c:6,h:1,l:2,m:2,q:4,s:4,t:2,v:1,z:0},Am=/([astvzqmhlc])([^astvzqmhlc]*)/ig;function Sm(e){var t=[];return e.replace(Am,function(n,r,s){var i=r.toLowerCase();for(s=Mm(s),i=="m"&&s.length>2&&(t.push([r].concat(s.splice(0,2))),i="l",r=r=="m"?"l":"L");;){if(s.length==oi[i])return s.unshift(r),t.push(s);if(s.length<oi[i])throw new Error("malformed path data");t.push([r].concat(s.splice(0,oi[i])))}}),t}var Pm=/-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/ig;function Mm(e){var t=e.match(Pm);return t?t.map(Number):[]}const Tm=Co(Cm);function km(e,t){const n=Tm(e),r=[];let s=null,i=0,o=0;for(let a=0;a<n.length;a++){const l=n[a],u=l[0],c=l;switch(u){case"M":i=c[1],o=c[2],t.moveTo(i,o);break;case"m":i+=c[1],o+=c[2],t.moveTo(i,o);break;case"H":i=c[1],t.lineTo(i,o);break;case"h":i+=c[1],t.lineTo(i,o);break;case"V":o=c[1],t.lineTo(i,o);break;case"v":o+=c[1],t.lineTo(i,o);break;case"L":i=c[1],o=c[2],t.lineTo(i,o);break;case"l":i+=c[1],o+=c[2],t.lineTo(i,o);break;case"C":i=c[5],o=c[6],t.bezierCurveTo(c[1],c[2],c[3],c[4],i,o);break;case"c":t.bezierCurveTo(i+c[1],o+c[2],i+c[3],o+c[4],i+c[5],o+c[6]),i+=c[5],o+=c[6];break;case"S":i=c[3],o=c[4],t.bezierCurveToShort(c[1],c[2],i,o);break;case"s":t.bezierCurveToShort(i+c[1],o+c[2],i+c[3],o+c[4]),i+=c[3],o+=c[4];break;case"Q":i=c[3],o=c[4],t.quadraticCurveTo(c[1],c[2],i,o);break;case"q":t.quadraticCurveTo(i+c[1],o+c[2],i+c[3],o+c[4]),i+=c[3],o+=c[4];break;case"T":i=c[1],o=c[2],t.quadraticCurveToShort(i,o);break;case"t":i+=c[1],o+=c[2],t.quadraticCurveToShort(i,o);break;case"A":i=c[6],o=c[7],t.arcToSvg(c[1],c[2],c[3],c[4],c[5],i,o);break;case"a":i+=c[6],o+=c[7],t.arcToSvg(c[1],c[2],c[3],c[4],c[5],i,o);break;case"Z":case"z":t.closePath(),r.length>0&&(s=r.pop(),s?(i=s.startX,o=s.startY):(i=0,o=0)),s=null;break;default:Tt(`Unknown SVG path command: ${u}`)}u!=="Z"&&u!=="z"&&s===null&&(s={startX:i,startY:o},r.push(s))}return t}class ko{constructor(t=0,n=0,r=0){this.type="circle",this.x=t,this.y=n,this.radius=r}clone(){return new ko(this.x,this.y,this.radius)}contains(t,n){if(this.radius<=0)return!1;const r=this.radius*this.radius;let s=this.x-t,i=this.y-n;return s*=s,i*=i,s+i<=r}strokeContains(t,n,r){if(this.radius===0)return!1;const s=this.x-t,i=this.y-n,o=this.radius,a=r/2,l=Math.sqrt(s*s+i*i);return l<o+a&&l>o-a}getBounds(t){return t=t||new wt,t.x=this.x-this.radius,t.y=this.y-this.radius,t.width=this.radius*2,t.height=this.radius*2,t}copyFrom(t){return this.x=t.x,this.y=t.y,this.radius=t.radius,this}copyTo(t){return t.copyFrom(this),t}toString(){return`[pixi.js/math:Circle x=${this.x} y=${this.y} radius=${this.radius}]`}}class Io{constructor(t=0,n=0,r=0,s=0){this.type="ellipse",this.x=t,this.y=n,this.halfWidth=r,this.halfHeight=s}clone(){return new Io(this.x,this.y,this.halfWidth,this.halfHeight)}contains(t,n){if(this.halfWidth<=0||this.halfHeight<=0)return!1;let r=(t-this.x)/this.halfWidth,s=(n-this.y)/this.halfHeight;return r*=r,s*=s,r+s<=1}strokeContains(t,n,r){const{halfWidth:s,halfHeight:i}=this;if(s<=0||i<=0)return!1;const o=r/2,a=s-o,l=i-o,u=s+o,c=i+o,f=t-this.x,h=n-this.y,d=f*f/(a*a)+h*h/(l*l),p=f*f/(u*u)+h*h/(c*c);return d>1&&p<=1}getBounds(){return new wt(this.x-this.halfWidth,this.y-this.halfHeight,this.halfWidth*2,this.halfHeight*2)}copyFrom(t){return this.x=t.x,this.y=t.y,this.halfWidth=t.halfWidth,this.halfHeight=t.halfHeight,this}copyTo(t){return t.copyFrom(this),t}toString(){return`[pixi.js/math:Ellipse x=${this.x} y=${this.y} halfWidth=${this.halfWidth} halfHeight=${this.halfHeight}]`}}function Im(e,t,n,r,s,i){const o=e-n,a=t-r,l=s-n,u=i-r,c=o*l+a*u,f=l*l+u*u;let h=-1;f!==0&&(h=c/f);let d,p;h<0?(d=n,p=r):h>1?(d=s,p=i):(d=n+h*l,p=r+h*u);const m=e-d,x=t-p;return m*m+x*x}class nr{constructor(...t){this.type="polygon";let n=Array.isArray(t[0])?t[0]:t;if(typeof n[0]!="number"){const r=[];for(let s=0,i=n.length;s<i;s++)r.push(n[s].x,n[s].y);n=r}this.points=n,this.closePath=!0}clone(){const t=this.points.slice(),n=new nr(t);return n.closePath=this.closePath,n}contains(t,n){let r=!1;const s=this.points.length/2;for(let i=0,o=s-1;i<s;o=i++){const a=this.points[i*2],l=this.points[i*2+1],u=this.points[o*2],c=this.points[o*2+1];l>n!=c>n&&t<(u-a)*((n-l)/(c-l))+a&&(r=!r)}return r}strokeContains(t,n,r){const s=r/2,i=s*s,{points:o}=this,a=o.length-(this.closePath?0:2);for(let l=0;l<a;l+=2){const u=o[l],c=o[l+1],f=o[(l+2)%o.length],h=o[(l+3)%o.length];if(Im(t,n,u,c,f,h)<=i)return!0}return!1}getBounds(t){t=t||new wt;const n=this.points;let r=1/0,s=-1/0,i=1/0,o=-1/0;for(let a=0,l=n.length;a<l;a+=2){const u=n[a],c=n[a+1];r=u<r?u:r,s=u>s?u:s,i=c<i?c:i,o=c>o?c:o}return t.x=r,t.width=s-r,t.y=i,t.height=o-i,t}copyFrom(t){return this.points=t.points.slice(),this.closePath=t.closePath,this}copyTo(t){return t.copyFrom(this),t}toString(){return`[pixi.js/math:PolygoncloseStroke=${this.closePath}points=${this.points.reduce((t,n)=>`${t}, ${n}`,"")}]`}get lastX(){return this.points[this.points.length-2]}get lastY(){return this.points[this.points.length-1]}get x(){return this.points[this.points.length-2]}get y(){return this.points[this.points.length-1]}}const jr=(e,t,n,r,s,i)=>{const o=e-n,a=t-r,l=Math.sqrt(o*o+a*a);return l>=s-i&&l<=s+i};class zo{constructor(t=0,n=0,r=0,s=0,i=20){this.type="roundedRectangle",this.x=t,this.y=n,this.width=r,this.height=s,this.radius=i}getBounds(t){return t=t||new wt,t.x=this.x,t.y=this.y,t.width=this.width,t.height=this.height,t}clone(){return new zo(this.x,this.y,this.width,this.height,this.radius)}copyFrom(t){return this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height,this}copyTo(t){return t.copyFrom(this),t}contains(t,n){if(this.width<=0||this.height<=0)return!1;if(t>=this.x&&t<=this.x+this.width&&n>=this.y&&n<=this.y+this.height){const r=Math.max(0,Math.min(this.radius,Math.min(this.width,this.height)/2));if(n>=this.y+r&&n<=this.y+this.height-r||t>=this.x+r&&t<=this.x+this.width-r)return!0;let s=t-(this.x+r),i=n-(this.y+r);const o=r*r;if(s*s+i*i<=o||(s=t-(this.x+this.width-r),s*s+i*i<=o)||(i=n-(this.y+this.height-r),s*s+i*i<=o)||(s=t-(this.x+r),s*s+i*i<=o))return!0}return!1}strokeContains(t,n,r){const{x:s,y:i,width:o,height:a,radius:l}=this,u=r/2,c=s+l,f=i+l,h=o-l*2,d=a-l*2,p=s+o,m=i+a;return(t>=s-u&&t<=s+u||t>=p-u&&t<=p+u)&&n>=f&&n<=f+d||(n>=i-u&&n<=i+u||n>=m-u&&n<=m+u)&&t>=c&&t<=c+h?!0:t<c&&n<f&&jr(t,n,c,f,l,u)||t>p-l&&n<f&&jr(t,n,p-l,f,l,u)||t>p-l&&n>m-l&&jr(t,n,p-l,m-l,l,u)||t<c&&n>m-l&&jr(t,n,c,m-l,l,u)}toString(){return`[pixi.js/math:RoundedRectangle x=${this.x} y=${this.y}width=${this.width} height=${this.height} radius=${this.radius}]`}}var jt=(e=>(e[e.MAP_READ=1]="MAP_READ",e[e.MAP_WRITE=2]="MAP_WRITE",e[e.COPY_SRC=4]="COPY_SRC",e[e.COPY_DST=8]="COPY_DST",e[e.INDEX=16]="INDEX",e[e.VERTEX=32]="VERTEX",e[e.UNIFORM=64]="UNIFORM",e[e.STORAGE=128]="STORAGE",e[e.INDIRECT=256]="INDIRECT",e[e.QUERY_RESOLVE=512]="QUERY_RESOLVE",e[e.STATIC=1024]="STATIC",e))(jt||{});class vr extends ce{constructor(t){let{data:n,size:r}=t;const{usage:s,label:i,shrinkToFit:o}=t;super(),this.uid=Ct("buffer"),this._resourceType="buffer",this._resourceId=Ct("resource"),this._touched=0,this._updateID=1,this.shrinkToFit=!0,this.destroyed=!1,n instanceof Array&&(n=new Float32Array(n)),this._data=n,r=r??(n==null?void 0:n.byteLength);const a=!!n;this.descriptor={size:r,usage:s,mappedAtCreation:a,label:i},this.shrinkToFit=o??!0}get data(){return this._data}set data(t){this.setDataWithSize(t,t.length,!0)}get static(){return!!(this.descriptor.usage&jt.STATIC)}set static(t){t?this.descriptor.usage|=jt.STATIC:this.descriptor.usage&=~jt.STATIC}setDataWithSize(t,n,r){if(this._updateID++,this._updateSize=n*t.BYTES_PER_ELEMENT,this._data===t){r&&this.emit("update",this);return}const s=this._data;if(this._data=t,s.length!==t.length){!this.shrinkToFit&&t.byteLength<s.byteLength?r&&this.emit("update",this):(this.descriptor.size=t.byteLength,this._resourceId=Ct("resource"),this.emit("change",this));return}r&&this.emit("update",this)}update(t){this._updateSize=t??this._updateSize,this._updateID++,this.emit("update",this)}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this._data=null,this.descriptor=null,this.removeAllListeners()}}function Lu(e,t){if(!(e instanceof vr)){let n=t?jt.INDEX:jt.VERTEX;e instanceof Array&&(t?(e=new Uint32Array(e),n=jt.INDEX|jt.COPY_DST):(e=new Float32Array(e),n=jt.VERTEX|jt.COPY_DST)),e=new vr({data:e,label:t?"index-mesh-buffer":"vertex-mesh-buffer",usage:n})}return e}function zm(e,t,n){const r=e.getAttribute(t);if(!r)return n.minX=0,n.minY=0,n.maxX=0,n.maxY=0,n;const s=r.buffer.data;let i=1/0,o=1/0,a=-1/0,l=-1/0;const u=s.BYTES_PER_ELEMENT,c=(r.offset||0)/u,f=(r.stride||2*4)/u;for(let h=c;h<s.length;h+=f){const d=s[h],p=s[h+1];d>a&&(a=d),p>l&&(l=p),d<i&&(i=d),p<o&&(o=p)}return n.minX=i,n.minY=o,n.maxX=a,n.maxY=l,n}function Em(e){return(e instanceof vr||Array.isArray(e)||e.BYTES_PER_ELEMENT)&&(e={buffer:e}),e.buffer=Lu(e.buffer,!1),e}class Fm extends ce{constructor(t){const{attributes:n,indexBuffer:r,topology:s}=t;super(),this.uid=Ct("geometry"),this._layoutKey=0,this.instanceCount=1,this._bounds=new Pe,this._boundsDirty=!0,this.attributes=n,this.buffers=[],this.instanceCount=t.instanceCount||1;for(const i in n){const o=n[i]=Em(n[i]);this.buffers.indexOf(o.buffer)===-1&&(this.buffers.push(o.buffer),o.buffer.on("update",this.onBufferUpdate,this),o.buffer.on("change",this.onBufferUpdate,this))}r&&(this.indexBuffer=Lu(r,!0),this.buffers.push(this.indexBuffer)),this.topology=s||"triangle-list"}onBufferUpdate(){this._boundsDirty=!0,this.emit("update",this)}getAttribute(t){return this.attributes[t]}getIndex(){return this.indexBuffer}getBuffer(t){return this.getAttribute(t).buffer}getSize(){for(const t in this.attributes){const n=this.attributes[t];return n.buffer.data.length/(n.stride/4||n.size)}return 0}get bounds(){return this._boundsDirty?(this._boundsDirty=!1,zm(this,"aPosition",this._bounds)):this._bounds}destroy(t=!1){this.emit("destroy",this),this.removeAllListeners(),t&&this.buffers.forEach(n=>n.destroy()),this.attributes=null,this.buffers=null,this.indexBuffer=null,this._bounds=null}}const Om=new Float32Array(1),Bm=new Uint32Array(1);class Rm extends Fm{constructor(){const n=new vr({data:Om,label:"attribute-batch-buffer",usage:jt.VERTEX|jt.COPY_DST,shrinkToFit:!1}),r=new vr({data:Bm,label:"index-batch-buffer",usage:jt.INDEX|jt.COPY_DST,shrinkToFit:!1}),s=6*4;super({attributes:{aPosition:{buffer:n,format:"float32x2",stride:s,offset:0,location:1},aUV:{buffer:n,format:"float32x2",stride:s,offset:2*4,location:3},aColor:{buffer:n,format:"unorm8x4",stride:s,offset:4*4,location:0},aTextureIdAndRound:{buffer:n,format:"uint16x2",stride:s,offset:5*4,location:2}},indexBuffer:r})}}let Nr=null;function ju(){if(Nr)return Nr;const e=gu();return Nr=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),Nr}const Nu={};function Lm(e,t){let n=0;for(let r=0;r<t;r++)n=n*31+e[r].uid>>>0;return Nu[n]||jm(e,n)}let ai=0;function jm(e,t){const n={};let r=0;ai||(ai=ju());for(let i=0;i<ai;i++){const o=i<e.length?e[i]:it.EMPTY.source;n[r++]=o.source,n[r++]=o.style}const s=new Yr(n);return Nu[t]=s,s}class ol{constructor(t){typeof t=="number"?this.rawBinaryData=new ArrayBuffer(t):t instanceof Uint8Array?this.rawBinaryData=t.buffer:this.rawBinaryData=t,this.uint32View=new Uint32Array(this.rawBinaryData),this.float32View=new Float32Array(this.rawBinaryData),this.size=this.rawBinaryData.byteLength}get int8View(){return this._int8View||(this._int8View=new Int8Array(this.rawBinaryData)),this._int8View}get uint8View(){return this._uint8View||(this._uint8View=new Uint8Array(this.rawBinaryData)),this._uint8View}get int16View(){return this._int16View||(this._int16View=new Int16Array(this.rawBinaryData)),this._int16View}get int32View(){return this._int32View||(this._int32View=new Int32Array(this.rawBinaryData)),this._int32View}get float64View(){return this._float64Array||(this._float64Array=new Float64Array(this.rawBinaryData)),this._float64Array}get bigUint64View(){return this._bigUint64Array||(this._bigUint64Array=new BigUint64Array(this.rawBinaryData)),this._bigUint64Array}view(t){return this[`${t}View`]}destroy(){this.rawBinaryData=null,this._int8View=null,this._uint8View=null,this._int16View=null,this.uint16View=null,this._int32View=null,this.uint32View=null,this.float32View=null}static sizeOf(t){switch(t){case"int8":case"uint8":return 1;case"int16":case"uint16":return 2;case"int32":case"uint32":case"float32":return 4;default:throw new Error(`${t} isn't a valid view type`)}}}function al(e,t){const n=e.byteLength/8|0,r=new Float64Array(e,0,n);new Float64Array(t,0,n).set(r);const i=e.byteLength-n*8;if(i>0){const o=new Uint8Array(e,n*8,i);new Uint8Array(t,n*8,i).set(o)}}const Nm={normal:"normal-npm",add:"add-npm",screen:"screen-npm"};var Um=(e=>(e[e.DISABLED=0]="DISABLED",e[e.RENDERING_MASK_ADD=1]="RENDERING_MASK_ADD",e[e.MASK_ACTIVE=2]="MASK_ACTIVE",e[e.RENDERING_MASK_REMOVE=3]="RENDERING_MASK_REMOVE",e[e.NONE=4]="NONE",e))(Um||{});function ll(e,t){return t.alphaMode==="no-premultiply-alpha"&&Nm[e]||e}class cl{constructor(){this.ids=Object.create(null),this.textures=[],this.count=0}clear(){for(let t=0;t<this.count;t++){const n=this.textures[t];this.textures[t]=null,this.ids[n.uid]=null}this.count=0}}class ul{constructor(){this.renderPipeId="batch",this.action="startBatch",this.start=0,this.size=0,this.blendMode="normal",this.canBundle=!0}destroy(){this.textures=null,this.gpuBindGroup=null,this.bindGroup=null,this.batcher=null}}let Dn=0;const Uu=class Du{constructor(t={}){this.uid=Ct("batcher"),this.dirty=!0,this.batchIndex=0,this.batches=[],this._vertexSize=6,this._elements=[],this._batchPool=[],this._batchPoolIndex=0,this._textureBatchPool=[],this._textureBatchPoolIndex=0,t={...Du.defaultOptions,...t};const{vertexSize:n,indexSize:r}=t;this.attributeBuffer=new ol(n*this._vertexSize*4),this.indexBuffer=new Uint16Array(r),this._maxTextures=ju()}begin(){this.batchIndex=0,this.elementSize=0,this.elementStart=0,this.indexSize=0,this.attributeSize=0,this._batchPoolIndex=0,this._textureBatchPoolIndex=0,this._batchIndexStart=0,this._batchIndexSize=0,this.dirty=!0}add(t){this._elements[this.elementSize++]=t,t.indexStart=this.indexSize,t.location=this.attributeSize,t.batcher=this,this.indexSize+=t.indexSize,this.attributeSize+=t.vertexSize*this._vertexSize}checkAndUpdateTexture(t,n){const r=t.batch.textures.ids[n._source.uid];return!r&&r!==0?!1:(t.textureId=r,t.texture=n,!0)}updateElement(t){this.dirty=!0,t.packAttributes(this.attributeBuffer.float32View,this.attributeBuffer.uint32View,t.location,t.textureId)}break(t){const n=this._elements;let r=this._textureBatchPool[this._textureBatchPoolIndex++]||new cl;if(r.clear(),!n[this.elementStart])return;const s=n[this.elementStart];let i=ll(s.blendMode,s.texture._source);this.attributeSize*4>this.attributeBuffer.size&&this._resizeAttributeBuffer(this.attributeSize*4),this.indexSize>this.indexBuffer.length&&this._resizeIndexBuffer(this.indexSize);const o=this.attributeBuffer.float32View,a=this.attributeBuffer.uint32View,l=this.indexBuffer;let u=this._batchIndexSize,c=this._batchIndexStart,f="startBatch",h=this._batchPool[this._batchPoolIndex++]||new ul;const d=this._maxTextures;for(let p=this.elementStart;p<this.elementSize;++p){const m=n[p];n[p]=null;const y=m.texture._source,g=ll(m.blendMode,y),v=i!==g;if(y._batchTick===Dn&&!v){m.textureId=y._textureBindLocation,u+=m.indexSize,m.packAttributes(o,a,m.location,m.textureId),m.packIndex(l,m.indexStart,m.location/this._vertexSize),m.batch=h;continue}y._batchTick=Dn,(r.count>=d||v)&&(this._finishBatch(h,c,u-c,r,i,t,f),f="renderBatch",c=u,i=g,r=this._textureBatchPool[this._textureBatchPoolIndex++]||new cl,r.clear(),h=this._batchPool[this._batchPoolIndex++]||new ul,++Dn),m.textureId=y._textureBindLocation=r.count,r.ids[y.uid]=r.count,r.textures[r.count++]=y,m.batch=h,u+=m.indexSize,m.packAttributes(o,a,m.location,m.textureId),m.packIndex(l,m.indexStart,m.location/this._vertexSize)}r.count>0&&(this._finishBatch(h,c,u-c,r,i,t,f),c=u,++Dn),this.elementStart=this.elementSize,this._batchIndexStart=c,this._batchIndexSize=u}_finishBatch(t,n,r,s,i,o,a){t.gpuBindGroup=null,t.action=a,t.batcher=this,t.textures=s,t.blendMode=i,t.start=n,t.size=r,++Dn,o.add(t)}finish(t){this.break(t)}ensureAttributeBuffer(t){t*4<=this.attributeBuffer.size||this._resizeAttributeBuffer(t*4)}ensureIndexBuffer(t){t<=this.indexBuffer.length||this._resizeIndexBuffer(t)}_resizeAttributeBuffer(t){const n=Math.max(t,this.attributeBuffer.size*2),r=new ol(n);al(this.attributeBuffer.rawBinaryData,r.rawBinaryData),this.attributeBuffer=r}_resizeIndexBuffer(t){const n=this.indexBuffer;let r=Math.max(t,n.length*1.5);r+=r%2;const s=r>65535?new Uint32Array(r):new Uint16Array(r);if(s.BYTES_PER_ELEMENT!==n.BYTES_PER_ELEMENT)for(let i=0;i<n.length;i++)s[i]=n[i];else al(n.buffer,s.buffer);this.indexBuffer=s}destroy(){for(let t=0;t<this.batches.length;t++)this.batches[t].destroy();this.batches=null;for(let t=0;t<this._elements.length;t++)this._elements[t].batch=null;this._elements=null,this.indexBuffer=null,this.attributeBuffer.destroy(),this.attributeBuffer=null}};Uu.defaultOptions={vertexSize:4,indexSize:6};let Dm=Uu;function Gm(e,t,n,r,s,i,o,a=null){let l=0;n*=t,s*=i;const u=a.a,c=a.b,f=a.c,h=a.d,d=a.tx,p=a.ty;for(;l<o;){const m=e[n],x=e[n+1];r[s]=u*m+f*x+d,r[s+1]=c*m+h*x+p,s+=i,n+=t,l++}}function Wm(e,t,n,r){let s=0;for(t*=n;s<r;)e[t]=0,e[t+1]=0,t+=n,s++}function Gu(e,t,n,r,s){const i=t.a,o=t.b,a=t.c,l=t.d,u=t.tx,c=t.ty;n=n||0,r=r||2,s=s||e.length/r-n;let f=n*r;for(let h=0;h<s;h++){const d=e[f],p=e[f+1];e[f]=i*d+a*p+u,e[f+1]=o*d+l*p+c,f+=r}}function Hm(e,t){if(e===16777215||!t)return t;if(t===16777215||!e)return e;const n=e>>16&255,r=e>>8&255,s=e&255,i=t>>16&255,o=t>>8&255,a=t&255,l=n*i/255,u=r*o/255,c=s*a/255;return(l<<16)+(u<<8)+c}class Wu{constructor(){this.batcher=null,this.batch=null,this.applyTransform=!0,this.roundPixels=0}get blendMode(){return this.applyTransform?this.renderable.groupBlendMode:"normal"}packIndex(t,n,r){const s=this.geometryData.indices;for(let i=0;i<this.indexSize;i++)t[n++]=s[i+this.indexOffset]+r-this.vertexOffset}packAttributes(t,n,r,s){const i=this.geometryData,o=this.renderable,a=i.vertices,l=i.uvs,u=this.vertexOffset*2,c=(this.vertexOffset+this.vertexSize)*2,f=this.color,h=f>>16|f&65280|(f&255)<<16;if(this.applyTransform){const d=Hm(h,o.groupColor)+(this.alpha*o.groupAlpha*255<<24),p=o.groupTransform,m=s<<16|this.roundPixels&65535,x=p.a,y=p.b,g=p.c,v=p.d,b=p.tx,k=p.ty;for(let P=u;P<c;P+=2){const O=a[P],I=a[P+1];t[r]=x*O+g*I+b,t[r+1]=y*O+v*I+k,t[r+2]=l[P],t[r+3]=l[P+1],n[r+4]=d,n[r+5]=m,r+=6}}else{const d=h+(this.alpha*255<<24);for(let p=u;p<c;p+=2)t[r]=a[p],t[r+1]=a[p+1],t[r+2]=l[p],t[r+3]=l[p+1],n[r+4]=d,n[r+5]=s<<16,r+=6}}get vertSize(){return this.vertexSize}copyTo(t){t.indexOffset=this.indexOffset,t.indexSize=this.indexSize,t.vertexOffset=this.vertexOffset,t.vertexSize=this.vertexSize,t.color=this.color,t.alpha=this.alpha,t.texture=this.texture,t.geometryData=this.geometryData}reset(){this.applyTransform=!0}}const li={build(e,t){let n,r,s,i,o,a;if(e.type==="circle"){const b=e;n=b.x,r=b.y,o=a=b.radius,s=i=0}else if(e.type==="ellipse"){const b=e;n=b.x,r=b.y,o=b.halfWidth,a=b.halfHeight,s=i=0}else{const b=e,k=b.width/2,P=b.height/2;n=b.x+k,r=b.y+P,o=a=Math.max(0,Math.min(b.radius,Math.min(k,P))),s=k-o,i=P-a}if(!(o>=0&&a>=0&&s>=0&&i>=0))return t;const l=Math.ceil(2.3*Math.sqrt(o+a)),u=l*8+(s?4:0)+(i?4:0);if(u===0)return t;if(l===0)return t[0]=t[6]=n+s,t[1]=t[3]=r+i,t[2]=t[4]=n-s,t[5]=t[7]=r-i,t;let c=0,f=l*4+(s?2:0)+2,h=f,d=u,p=s+o,m=i,x=n+p,y=n-p,g=r+m;if(t[c++]=x,t[c++]=g,t[--f]=g,t[--f]=y,i){const b=r-m;t[h++]=y,t[h++]=b,t[--d]=b,t[--d]=x}for(let b=1;b<l;b++){const k=Math.PI/2*(b/l),P=s+Math.cos(k)*o,O=i+Math.sin(k)*a,I=n+P,S=n-P,A=r+O,X=r-O;t[c++]=I,t[c++]=A,t[--f]=A,t[--f]=S,t[h++]=S,t[h++]=X,t[--d]=X,t[--d]=I}p=s,m=i+a,x=n+p,y=n-p,g=r+m;const v=r-m;return t[c++]=x,t[c++]=g,t[--d]=v,t[--d]=x,s&&(t[c++]=y,t[c++]=g,t[--d]=v,t[--d]=y),t},triangulate(e,t,n,r,s,i){if(e.length===0)return;let o=0,a=0;for(let c=0;c<e.length;c+=2)o+=e[c],a+=e[c+1];o/=e.length/2,a/=e.length/2;let l=r;t[l*n]=o,t[l*n+1]=a;const u=l++;for(let c=0;c<e.length;c+=2)t[l*n]=e[c],t[l*n+1]=e[c+1],c>0&&(s[i++]=l,s[i++]=u,s[i++]=l-1),l++;s[i++]=u+1,s[i++]=u,s[i++]=l-1}},$m=1e-4,fl=1e-4;function Vm(e){const t=e.length;if(t<6)return 1;let n=0;for(let r=0,s=e[t-2],i=e[t-1];r<t;r+=2){const o=e[r],a=e[r+1];n+=(o-s)*(a+i),s=o,i=a}return n<0?-1:1}function hl(e,t,n,r,s,i,o,a){const l=e-n*s,u=t-r*s,c=e+n*i,f=t+r*i;let h,d;o?(h=r,d=-n):(h=-r,d=n);const p=l+h,m=u+d,x=c+h,y=f+d;return a.push(p,m),a.push(x,y),2}function tn(e,t,n,r,s,i,o,a){const l=n-e,u=r-t;let c=Math.atan2(l,u),f=Math.atan2(s-e,i-t);a&&c<f?c+=Math.PI*2:!a&&c>f&&(f+=Math.PI*2);let h=c;const d=f-c,p=Math.abs(d),m=Math.sqrt(l*l+u*u),x=(15*p*Math.sqrt(m)/Math.PI>>0)+1,y=d/x;if(h+=y,a){o.push(e,t),o.push(n,r);for(let g=1,v=h;g<x;g++,v+=y)o.push(e,t),o.push(e+Math.sin(v)*m,t+Math.cos(v)*m);o.push(e,t),o.push(s,i)}else{o.push(n,r),o.push(e,t);for(let g=1,v=h;g<x;g++,v+=y)o.push(e+Math.sin(v)*m,t+Math.cos(v)*m),o.push(e,t);o.push(s,i),o.push(e,t)}return x*2}function qm(e,t,n,r,s,i,o,a,l){const u=$m;if(e.length===0)return;const c=t;let f=c.alignment;if(t.alignment!==.5){let tt=Vm(e);f=(f-.5)*tt+.5}const h=new vt(e[0],e[1]),d=new vt(e[e.length-2],e[e.length-1]),p=r,m=Math.abs(h.x-d.x)<u&&Math.abs(h.y-d.y)<u;if(p){e=e.slice(),m&&(e.pop(),e.pop(),d.set(e[e.length-2],e[e.length-1]));const tt=(h.x+d.x)*.5,kt=(d.y+h.y)*.5;e.unshift(tt,kt),e.push(tt,kt)}const x=s,y=e.length/2;let g=e.length;const v=x.length/2,b=c.width/2,k=b*b,P=c.miterLimit*c.miterLimit;let O=e[0],I=e[1],S=e[2],A=e[3],X=0,j=0,R=-(I-A),U=O-S,rt=0,Q=0,Z=Math.sqrt(R*R+U*U);R/=Z,U/=Z,R*=b,U*=b;const nt=f,D=(1-nt)*2,V=nt*2;p||(c.cap==="round"?g+=tn(O-R*(D-V)*.5,I-U*(D-V)*.5,O-R*D,I-U*D,O+R*V,I+U*V,x,!0)+2:c.cap==="square"&&(g+=hl(O,I,R,U,D,V,!0,x))),x.push(O-R*D,I-U*D),x.push(O+R*V,I+U*V);for(let tt=1;tt<y-1;++tt){O=e[(tt-1)*2],I=e[(tt-1)*2+1],S=e[tt*2],A=e[tt*2+1],X=e[(tt+1)*2],j=e[(tt+1)*2+1],R=-(I-A),U=O-S,Z=Math.sqrt(R*R+U*U),R/=Z,U/=Z,R*=b,U*=b,rt=-(A-j),Q=S-X,Z=Math.sqrt(rt*rt+Q*Q),rt/=Z,Q/=Z,rt*=b,Q*=b;const kt=S-O,fe=I-A,te=S-X,It=j-A,Xe=kt*te+fe*It,Te=fe*te-It*kt,ke=Te<0;if(Math.abs(Te)<.001*Math.abs(Xe)){x.push(S-R*D,A-U*D),x.push(S+R*V,A+U*V),Xe>=0&&(c.join==="round"?g+=tn(S,A,S-R*D,A-U*D,S-rt*D,A-Q*D,x,!1)+4:g+=2,x.push(S-rt*V,A-Q*V),x.push(S+rt*D,A+Q*D));continue}const Ie=(-R+O)*(-U+A)-(-R+S)*(-U+I),Rn=(-rt+X)*(-Q+A)-(-rt+S)*(-Q+j),Ye=(kt*Rn-te*Ie)/Te,_=(It*Ie-fe*Rn)/Te,w=(Ye-S)*(Ye-S)+(_-A)*(_-A),C=S+(Ye-S)*D,M=A+(_-A)*D,T=S-(Ye-S)*V,E=A-(_-A)*V,L=Math.min(kt*kt+fe*fe,te*te+It*It),F=ke?D:V,B=L+F*F*k;w<=B?c.join==="bevel"||w/k>P?(ke?(x.push(C,M),x.push(S+R*V,A+U*V),x.push(C,M),x.push(S+rt*V,A+Q*V)):(x.push(S-R*D,A-U*D),x.push(T,E),x.push(S-rt*D,A-Q*D),x.push(T,E)),g+=2):c.join==="round"?ke?(x.push(C,M),x.push(S+R*V,A+U*V),g+=tn(S,A,S+R*V,A+U*V,S+rt*V,A+Q*V,x,!0)+4,x.push(C,M),x.push(S+rt*V,A+Q*V)):(x.push(S-R*D,A-U*D),x.push(T,E),g+=tn(S,A,S-R*D,A-U*D,S-rt*D,A-Q*D,x,!1)+4,x.push(S-rt*D,A-Q*D),x.push(T,E)):(x.push(C,M),x.push(T,E)):(x.push(S-R*D,A-U*D),x.push(S+R*V,A+U*V),c.join==="round"?ke?g+=tn(S,A,S+R*V,A+U*V,S+rt*V,A+Q*V,x,!0)+2:g+=tn(S,A,S-R*D,A-U*D,S-rt*D,A-Q*D,x,!1)+2:c.join==="miter"&&w/k<=P&&(ke?(x.push(T,E),x.push(T,E)):(x.push(C,M),x.push(C,M)),g+=2),x.push(S-rt*D,A-Q*D),x.push(S+rt*V,A+Q*V),g+=2)}O=e[(y-2)*2],I=e[(y-2)*2+1],S=e[(y-1)*2],A=e[(y-1)*2+1],R=-(I-A),U=O-S,Z=Math.sqrt(R*R+U*U),R/=Z,U/=Z,R*=b,U*=b,x.push(S-R*D,A-U*D),x.push(S+R*V,A+U*V),p||(c.cap==="round"?g+=tn(S-R*(D-V)*.5,A-U*(D-V)*.5,S-R*D,A-U*D,S+R*V,A+U*V,x,!1)+2:c.cap==="square"&&(g+=hl(S,A,R,U,D,V,!1,x)));const Vt=fl*fl;for(let tt=v;tt<g+v-2;++tt)O=x[tt*2],I=x[tt*2+1],S=x[(tt+1)*2],A=x[(tt+1)*2+1],X=x[(tt+2)*2],j=x[(tt+2)*2+1],!(Math.abs(O*(A-j)+S*(j-I)+X*(I-A))<Vt)&&a.push(tt,tt+1,tt+2)}function Hu(e,t,n,r,s,i,o){const a=vm(e,t,2);if(!a)return;for(let u=0;u<a.length;u+=3)i[o++]=a[u]+s,i[o++]=a[u+1]+s,i[o++]=a[u+2]+s;let l=s*r;for(let u=0;u<e.length;u+=2)n[l]=e[u],n[l+1]=e[u+1],l+=r}const Xm=[],Ym={build(e,t){for(let n=0;n<e.points.length;n++)t[n]=e.points[n];return t},triangulate(e,t,n,r,s,i){Hu(e,Xm,t,n,r,s,i)}},Km={build(e,t){const n=e,r=n.x,s=n.y,i=n.width,o=n.height;return i>=0&&o>=0&&(t[0]=r,t[1]=s,t[2]=r+i,t[3]=s,t[4]=r+i,t[5]=s+o,t[6]=r,t[7]=s+o),t},triangulate(e,t,n,r,s,i){let o=0;r*=n,t[r+o]=e[0],t[r+o+1]=e[1],o+=n,t[r+o]=e[2],t[r+o+1]=e[3],o+=n,t[r+o]=e[6],t[r+o+1]=e[7],o+=n,t[r+o]=e[4],t[r+o+1]=e[5],o+=n;const a=r/n;s[i++]=a,s[i++]=a+1,s[i++]=a+2,s[i++]=a+1,s[i++]=a+3,s[i++]=a+2}},Zm={build(e,t){return t[0]=e.x,t[1]=e.y,t[2]=e.x2,t[3]=e.y2,t[4]=e.x3,t[5]=e.y3,t},triangulate(e,t,n,r,s,i){let o=0;r*=n,t[r+o]=e[0],t[r+o+1]=e[1],o+=n,t[r+o]=e[2],t[r+o+1]=e[3],o+=n,t[r+o]=e[4],t[r+o+1]=e[5];const a=r/n;s[i++]=a,s[i++]=a+1,s[i++]=a+2}},Eo={rectangle:Km,polygon:Ym,triangle:Zm,circle:li,ellipse:li,roundedRectangle:li},Qm=new wt;function Jm(e,t){const{geometryData:n,batches:r}=t;r.length=0,n.indices.length=0,n.vertices.length=0,n.uvs.length=0;for(let s=0;s<e.instructions.length;s++){const i=e.instructions[s];if(i.action==="texture")tv(i.data,r,n);else if(i.action==="fill"||i.action==="stroke"){const o=i.action==="stroke",a=i.data.path.shapePath,l=i.data.style,u=i.data.hole;o&&u&&dl(u.shapePath,l,null,!0,r,n),dl(a,l,u,o,r,n)}}}function tv(e,t,n){const{vertices:r,uvs:s,indices:i}=n,o=i.length,a=r.length/2,l=[],u=Eo.rectangle,c=Qm,f=e.image;c.x=e.dx,c.y=e.dy,c.width=e.dw,c.height=e.dh;const h=e.transform;u.build(c,l),h&&Gu(l,h),u.triangulate(l,r,2,a,i,o);const d=f.uvs;s.push(d.x0,d.y0,d.x1,d.y1,d.x3,d.y3,d.x2,d.y2);const p=we.get(Wu);p.indexOffset=o,p.indexSize=i.length-o,p.vertexOffset=a,p.vertexSize=r.length/2-a,p.color=e.style,p.alpha=e.alpha,p.texture=f,p.geometryData=n,t.push(p)}function dl(e,t,n,r,s,i){const{vertices:o,uvs:a,indices:l}=i,u=e.shapePrimitives.length-1;e.shapePrimitives.forEach(({shape:c,transform:f},h)=>{const d=l.length,p=o.length/2,m=[],x=Eo[c.type];if(x.build(c,m),f&&Gu(m,f),r){const b=c.closePath??!0;qm(m,t,!1,b,o,2,p,l)}else if(n&&u===h){u!==0&&console.warn("[Pixi Graphics] only the last shape have be cut out");const b=[],k=m.slice();ev(n.shapePath).forEach(O=>{b.push(k.length/2),k.push(...O)}),Hu(k,b,o,2,p,l,d)}else x.triangulate(m,o,2,p,l,d);const y=a.length/2,g=t.texture;if(g!==it.WHITE){const b=t.matrix;f&&b&&b.append(f.clone().invert()),Gm(o,2,p,a,y,2,o.length/2-p,b)}else Wm(a,y,2,o.length/2-p);const v=we.get(Wu);v.indexOffset=d,v.indexSize=l.length-d,v.vertexOffset=p,v.vertexSize=o.length/2-p,v.color=t.color,v.alpha=t.alpha,v.texture=g,v.geometryData=i,s.push(v)})}function ev(e){if(!e)return[];const t=e.shapePrimitives,n=[];for(let r=0;r<t.length;r++){const s=t[r].shape,i=[];Eo[s.type].build(s,i),n.push(i)}return n}class nv{constructor(){this.batches=[],this.geometryData={vertices:[],uvs:[],indices:[]}}}class rv{constructor(){this.geometry=new Rm,this.instructions=new su}init(){this.instructions.reset()}}const Fo=class Xi{constructor(){this._activeBatchers=[],this._gpuContextHash={},this._graphicsDataContextHash=Object.create(null)}init(t){Xi.defaultOptions.bezierSmoothness=(t==null?void 0:t.bezierSmoothness)??Xi.defaultOptions.bezierSmoothness}prerender(){this._returnActiveBatchers()}getContextRenderData(t){return this._graphicsDataContextHash[t.uid]||this._initContextRenderData(t)}updateGpuContext(t){let n=this._gpuContextHash[t.uid]||this._initContext(t);if(t.dirty){n?this._cleanGraphicsContextData(t):n=this._initContext(t),Jm(t,n);const r=t.batchMode;t.customShader||r==="no-batch"?n.isBatchable=!1:r==="auto"&&(n.isBatchable=n.geometryData.vertices.length<400),t.dirty=!1}return n}getGpuContext(t){return this._gpuContextHash[t.uid]||this._initContext(t)}_returnActiveBatchers(){for(let t=0;t<this._activeBatchers.length;t++)we.return(this._activeBatchers[t]);this._activeBatchers.length=0}_initContextRenderData(t){const n=we.get(rv),{batches:r,geometryData:s}=this._gpuContextHash[t.uid],i=s.vertices.length,o=s.indices.length;for(let c=0;c<r.length;c++)r[c].applyTransform=!1;const a=we.get(Dm);this._activeBatchers.push(a),a.ensureAttributeBuffer(i),a.ensureIndexBuffer(o),a.begin();for(let c=0;c<r.length;c++){const f=r[c];a.add(f)}a.finish(n.instructions);const l=n.geometry;l.indexBuffer.setDataWithSize(a.indexBuffer,a.indexSize,!0),l.buffers[0].setDataWithSize(a.attributeBuffer.float32View,a.attributeSize,!0);const u=a.batches;for(let c=0;c<u.length;c++){const f=u[c];f.bindGroup=Lm(f.textures.textures,f.textures.count)}return this._graphicsDataContextHash[t.uid]=n,n}_initContext(t){const n=new nv;return n.context=t,this._gpuContextHash[t.uid]=n,t.on("destroy",this.onGraphicsContextDestroy,this),this._gpuContextHash[t.uid]}onGraphicsContextDestroy(t){this._cleanGraphicsContextData(t),t.off("destroy",this.onGraphicsContextDestroy,this),this._gpuContextHash[t.uid]=null}_cleanGraphicsContextData(t){const n=this._gpuContextHash[t.uid];n.isBatchable||this._graphicsDataContextHash[t.uid]&&(we.return(this.getContextRenderData(t)),this._graphicsDataContextHash[t.uid]=null),n.batches&&n.batches.forEach(r=>{we.return(r)})}destroy(){for(const t in this._gpuContextHash)this._gpuContextHash[t]&&this.onGraphicsContextDestroy(this._gpuContextHash[t].context)}};Fo.extension={type:[Y.WebGLSystem,Y.WebGPUSystem,Y.CanvasSystem],name:"graphicsContext"};Fo.defaultOptions={bezierSmoothness:.5};let $u=Fo;const sv=8,Ur=11920929e-14,iv=1;function Vu(e,t,n,r,s,i,o,a,l,u){const f=Math.min(.99,Math.max(0,u??$u.defaultOptions.bezierSmoothness));let h=(iv-f)/1;return h*=h,ov(t,n,r,s,i,o,a,l,e,h),e}function ov(e,t,n,r,s,i,o,a,l,u){Yi(e,t,n,r,s,i,o,a,l,u,0),l.push(o,a)}function Yi(e,t,n,r,s,i,o,a,l,u,c){if(c>sv)return;const f=(e+n)/2,h=(t+r)/2,d=(n+s)/2,p=(r+i)/2,m=(s+o)/2,x=(i+a)/2,y=(f+d)/2,g=(h+p)/2,v=(d+m)/2,b=(p+x)/2,k=(y+v)/2,P=(g+b)/2;if(c>0){let O=o-e,I=a-t;const S=Math.abs((n-o)*I-(r-a)*O),A=Math.abs((s-o)*I-(i-a)*O);if(S>Ur&&A>Ur){if((S+A)*(S+A)<=u*(O*O+I*I)){l.push(k,P);return}}else if(S>Ur){if(S*S<=u*(O*O+I*I)){l.push(k,P);return}}else if(A>Ur){if(A*A<=u*(O*O+I*I)){l.push(k,P);return}}else if(O=k-(e+o)/2,I=P-(t+a)/2,O*O+I*I<=u){l.push(k,P);return}}Yi(e,t,f,h,y,g,k,P,l,u,c+1),Yi(k,P,v,b,m,x,o,a,l,u,c+1)}const av=8,lv=11920929e-14,cv=1;function uv(e,t,n,r,s,i,o,a){const u=Math.min(.99,Math.max(0,a??$u.defaultOptions.bezierSmoothness));let c=(cv-u)/1;return c*=c,fv(t,n,r,s,i,o,e,c),e}function fv(e,t,n,r,s,i,o,a){Ki(o,e,t,n,r,s,i,a,0),o.push(s,i)}function Ki(e,t,n,r,s,i,o,a,l){if(l>av)return;const u=(t+r)/2,c=(n+s)/2,f=(r+i)/2,h=(s+o)/2,d=(u+f)/2,p=(c+h)/2;let m=i-t,x=o-n;const y=Math.abs((r-i)*x-(s-o)*m);if(y>lv){if(y*y<=a*(m*m+x*x)){e.push(d,p);return}}else if(m=d-(t+i)/2,x=p-(n+o)/2,m*m+x*x<=a){e.push(d,p);return}Ki(e,t,n,u,c,d,p,a,l+1),Ki(e,d,p,f,h,i,o,a,l+1)}function qu(e,t,n,r,s,i,o,a){let l=Math.abs(s-i);(!o&&s>i||o&&i>s)&&(l=2*Math.PI-l),a=a||Math.max(6,Math.floor(6*Math.pow(r,1/3)*(l/Math.PI))),a=Math.max(a,3);let u=l/a,c=s;u*=o?-1:1;for(let f=0;f<a+1;f++){const h=Math.cos(c),d=Math.sin(c),p=t+h*r,m=n+d*r;e.push(p,m),c+=u}}function hv(e,t,n,r,s,i){const o=e[e.length-2],l=e[e.length-1]-n,u=o-t,c=s-n,f=r-t,h=Math.abs(l*f-u*c);if(h<1e-8||i===0){(e[e.length-2]!==t||e[e.length-1]!==n)&&e.push(t,n);return}const d=l*l+u*u,p=c*c+f*f,m=l*c+u*f,x=i*Math.sqrt(d)/h,y=i*Math.sqrt(p)/h,g=x*m/d,v=y*m/p,b=x*f+y*u,k=x*c+y*l,P=u*(y+g),O=l*(y+g),I=f*(x+v),S=c*(x+v),A=Math.atan2(O-k,P-b),X=Math.atan2(S-k,I-b);qu(e,b+t,k+n,i,A,X,u*c>f*l)}const rr=Math.PI*2,ci={centerX:0,centerY:0,ang1:0,ang2:0},ui=({x:e,y:t},n,r,s,i,o,a,l)=>{e*=n,t*=r;const u=s*e-i*t,c=i*e+s*t;return l.x=u+o,l.y=c+a,l};function dv(e,t){const n=t===-1.5707963267948966?-.551915024494:1.3333333333333333*Math.tan(t/4),r=t===1.5707963267948966?.551915024494:n,s=Math.cos(e),i=Math.sin(e),o=Math.cos(e+t),a=Math.sin(e+t);return[{x:s-i*r,y:i+s*r},{x:o+a*r,y:a-o*r},{x:o,y:a}]}const pl=(e,t,n,r)=>{const s=e*r-t*n<0?-1:1;let i=e*n+t*r;return i>1&&(i=1),i<-1&&(i=-1),s*Math.acos(i)},pv=(e,t,n,r,s,i,o,a,l,u,c,f,h)=>{const d=Math.pow(s,2),p=Math.pow(i,2),m=Math.pow(c,2),x=Math.pow(f,2);let y=d*p-d*x-p*m;y<0&&(y=0),y/=d*x+p*m,y=Math.sqrt(y)*(o===a?-1:1);const g=y*s/i*f,v=y*-i/s*c,b=u*g-l*v+(e+n)/2,k=l*g+u*v+(t+r)/2,P=(c-g)/s,O=(f-v)/i,I=(-c-g)/s,S=(-f-v)/i,A=pl(1,0,P,O);let X=pl(P,O,I,S);a===0&&X>0&&(X-=rr),a===1&&X<0&&(X+=rr),h.centerX=b,h.centerY=k,h.ang1=A,h.ang2=X};function xv(e,t,n,r,s,i,o,a=0,l=0,u=0){if(i===0||o===0)return;const c=Math.sin(a*rr/360),f=Math.cos(a*rr/360),h=f*(t-r)/2+c*(n-s)/2,d=-c*(t-r)/2+f*(n-s)/2;if(h===0&&d===0)return;i=Math.abs(i),o=Math.abs(o);const p=Math.pow(h,2)/Math.pow(i,2)+Math.pow(d,2)/Math.pow(o,2);p>1&&(i*=Math.sqrt(p),o*=Math.sqrt(p)),pv(t,n,r,s,i,o,l,u,c,f,h,d,ci);let{ang1:m,ang2:x}=ci;const{centerX:y,centerY:g}=ci;let v=Math.abs(x)/(rr/4);Math.abs(1-v)<1e-7&&(v=1);const b=Math.max(Math.ceil(v),1);x/=b;let k=e[e.length-2],P=e[e.length-1];const O={x:0,y:0};for(let I=0;I<b;I++){const S=dv(m,x),{x:A,y:X}=ui(S[0],i,o,f,c,y,g,O),{x:j,y:R}=ui(S[1],i,o,f,c,y,g,O),{x:U,y:rt}=ui(S[2],i,o,f,c,y,g,O);Vu(e,k,P,A,X,j,R,U,rt),k=U,P=rt,m+=x}}function mv(e,t,n){const r=(o,a)=>{const l=a.x-o.x,u=a.y-o.y,c=Math.sqrt(l*l+u*u),f=l/c,h=u/c;return{len:c,nx:f,ny:h}},s=(o,a)=>{o===0?e.moveTo(a.x,a.y):e.lineTo(a.x,a.y)};let i=t[t.length-1];for(let o=0;o<t.length;o++){const a=t[o%t.length],l=a.radius??n;if(l<=0){s(o,a),i=a;continue}const u=t[(o+1)%t.length],c=r(a,i),f=r(a,u);if(c.len<1e-4||f.len<1e-4){s(o,a),i=a;continue}let h=Math.asin(c.nx*f.ny-c.ny*f.nx),d=1,p=!1;c.nx*f.nx-c.ny*-f.ny<0?h<0?h=Math.PI+h:(h=Math.PI-h,d=-1,p=!0):h>0&&(d=-1,p=!0);const m=h/2;let x,y=Math.abs(Math.cos(m)*l/Math.sin(m));y>Math.min(c.len/2,f.len/2)?(y=Math.min(c.len/2,f.len/2),x=Math.abs(y*Math.sin(m)/Math.cos(m))):x=l;const g=a.x+f.nx*y+-f.ny*x*d,v=a.y+f.ny*y+f.nx*x*d,b=Math.atan2(c.ny,c.nx)+Math.PI/2*d,k=Math.atan2(f.ny,f.nx)-Math.PI/2*d;o===0&&e.moveTo(g+Math.cos(b)*x,v+Math.sin(b)*x),e.arc(g,v,x,b,k,p),i=a}}function vv(e,t,n,r){const s=(a,l)=>Math.sqrt((a.x-l.x)**2+(a.y-l.y)**2),i=(a,l,u)=>({x:a.x+(l.x-a.x)*u,y:a.y+(l.y-a.y)*u}),o=t.length;for(let a=0;a<o;a++){const l=t[(a+1)%o],u=l.radius??n;if(u<=0){a===0?e.moveTo(l.x,l.y):e.lineTo(l.x,l.y);continue}const c=t[a],f=t[(a+2)%o],h=s(c,l);let d;if(h<1e-4)d=l;else{const x=Math.min(h/2,u);d=i(l,c,x/h)}const p=s(f,l);let m;if(p<1e-4)m=l;else{const x=Math.min(p/2,u);m=i(l,f,x/p)}a===0?e.moveTo(d.x,d.y):e.lineTo(d.x,d.y),e.quadraticCurveTo(l.x,l.y,m.x,m.y,r)}}const gv=new wt;class _v{constructor(t){this.shapePrimitives=[],this._currentPoly=null,this._bounds=new Pe,this._graphicsPath2D=t}moveTo(t,n){return this.startPoly(t,n),this}lineTo(t,n){this._ensurePoly();const r=this._currentPoly.points,s=r[r.length-2],i=r[r.length-1];return(s!==t||i!==n)&&r.push(t,n),this}arc(t,n,r,s,i,o){this._ensurePoly(!1);const a=this._currentPoly.points;return qu(a,t,n,r,s,i,o),this}arcTo(t,n,r,s,i){this._ensurePoly();const o=this._currentPoly.points;return hv(o,t,n,r,s,i),this}arcToSvg(t,n,r,s,i,o,a){const l=this._currentPoly.points;return xv(l,this._currentPoly.lastX,this._currentPoly.lastY,o,a,t,n,r,s,i),this}bezierCurveTo(t,n,r,s,i,o,a){this._ensurePoly();const l=this._currentPoly;return Vu(this._currentPoly.points,l.lastX,l.lastY,t,n,r,s,i,o,a),this}quadraticCurveTo(t,n,r,s,i){this._ensurePoly();const o=this._currentPoly;return uv(this._currentPoly.points,o.lastX,o.lastY,t,n,r,s,i),this}closePath(){return this.endPoly(!0),this}addPath(t,n){this.endPoly(),n&&!n.isIdentity()&&(t=t.clone(!0),t.transform(n));for(let r=0;r<t.instructions.length;r++){const s=t.instructions[r];this[s.action](...s.data)}return this}finish(t=!1){this.endPoly(t)}rect(t,n,r,s,i){return this.drawShape(new wt(t,n,r,s),i),this}circle(t,n,r,s){return this.drawShape(new ko(t,n,r),s),this}poly(t,n,r){const s=new nr(t);return s.closePath=n,this.drawShape(s,r),this}regularPoly(t,n,r,s,i=0,o){s=Math.max(s|0,3);const a=-1*Math.PI/2+i,l=Math.PI*2/s,u=[];for(let c=0;c<s;c++){const f=c*l+a;u.push(t+r*Math.cos(f),n+r*Math.sin(f))}return this.poly(u,!0,o),this}roundPoly(t,n,r,s,i,o=0,a){if(s=Math.max(s|0,3),i<=0)return this.regularPoly(t,n,r,s,o);const l=r*Math.sin(Math.PI/s)-.001;i=Math.min(i,l);const u=-1*Math.PI/2+o,c=Math.PI*2/s,f=(s-2)*Math.PI/s/2;for(let h=0;h<s;h++){const d=h*c+u,p=t+r*Math.cos(d),m=n+r*Math.sin(d),x=d+Math.PI+f,y=d-Math.PI-f,g=p+i*Math.cos(x),v=m+i*Math.sin(x),b=p+i*Math.cos(y),k=m+i*Math.sin(y);h===0?this.moveTo(g,v):this.lineTo(g,v),this.quadraticCurveTo(p,m,b,k,a)}return this.closePath()}roundShape(t,n,r=!1,s){return t.length<3?this:(r?vv(this,t,n,s):mv(this,t,n),this.closePath())}filletRect(t,n,r,s,i){if(i===0)return this.rect(t,n,r,s);const o=Math.min(r,s)/2,a=Math.min(o,Math.max(-o,i)),l=t+r,u=n+s,c=a<0?-a:0,f=Math.abs(a);return this.moveTo(t,n+f).arcTo(t+c,n+c,t+f,n,f).lineTo(l-f,n).arcTo(l-c,n+c,l,n+f,f).lineTo(l,u-f).arcTo(l-c,u-c,t+r-f,u,f).lineTo(t+f,u).arcTo(t+c,u-c,t,u-f,f).closePath()}chamferRect(t,n,r,s,i,o){if(i<=0)return this.rect(t,n,r,s);const a=Math.min(i,Math.min(r,s)/2),l=t+r,u=n+s,c=[t+a,n,l-a,n,l,n+a,l,u-a,l-a,u,t+a,u,t,u-a,t,n+a];for(let f=c.length-1;f>=2;f-=2)c[f]===c[f-2]&&c[f-1]===c[f-3]&&c.splice(f-1,2);return this.poly(c,!0,o)}ellipse(t,n,r,s,i){return this.drawShape(new Io(t,n,r,s),i),this}roundRect(t,n,r,s,i,o){return this.drawShape(new zo(t,n,r,s,i),o),this}drawShape(t,n){return this.endPoly(),this.shapePrimitives.push({shape:t,transform:n}),this}startPoly(t,n){let r=this._currentPoly;return r&&this.endPoly(),r=new nr,r.points.push(t,n),this._currentPoly=r,this}endPoly(t=!1){const n=this._currentPoly;return n&&n.points.length>2&&(n.closePath=t,this.shapePrimitives.push({shape:n})),this._currentPoly=null,this}_ensurePoly(t=!0){if(!this._currentPoly&&(this._currentPoly=new nr,t)){const n=this.shapePrimitives[this.shapePrimitives.length-1];if(n){let r=n.shape.x,s=n.shape.y;if(!n.transform.isIdentity()){const i=n.transform,o=r;r=i.a*r+i.c*s+i.tx,s=i.b*o+i.d*s+i.ty}this._currentPoly.points.push(r,s)}else this._currentPoly.points.push(0,0)}}buildPath(){const t=this._graphicsPath2D;this.shapePrimitives.length=0,this._currentPoly=null;for(let n=0;n<t.instructions.length;n++){const r=t.instructions[n];this[r.action](...r.data)}this.finish()}get bounds(){const t=this._bounds;t.clear();const n=this.shapePrimitives;for(let r=0;r<n.length;r++){const s=n[r],i=s.shape.getBounds(gv);s.transform?t.addRect(i,s.transform):t.addRect(i)}return t}}class kn{constructor(t){this.instructions=[],this.uid=Ct("graphicsPath"),this._dirty=!0,typeof t=="string"?km(t,this):this.instructions=(t==null?void 0:t.slice())??[]}get shapePath(){return this._shapePath||(this._shapePath=new _v(this)),this._dirty&&(this._dirty=!1,this._shapePath.buildPath()),this._shapePath}addPath(t,n){return t=t.clone(),this.instructions.push({action:"addPath",data:[t,n]}),this._dirty=!0,this}arc(...t){return this.instructions.push({action:"arc",data:t}),this._dirty=!0,this}arcTo(...t){return this.instructions.push({action:"arcTo",data:t}),this._dirty=!0,this}arcToSvg(...t){return this.instructions.push({action:"arcToSvg",data:t}),this._dirty=!0,this}bezierCurveTo(...t){return this.instructions.push({action:"bezierCurveTo",data:t}),this._dirty=!0,this}bezierCurveToShort(t,n,r,s,i){const o=this.instructions[this.instructions.length-1],a=this.getLastPoint(vt.shared);let l=0,u=0;if(!o||o.action!=="bezierCurveTo")l=a.x,u=a.y;else{l=o.data[2],u=o.data[3];const c=a.x,f=a.y;l=c+(c-l),u=f+(f-u)}return this.instructions.push({action:"bezierCurveTo",data:[l,u,t,n,r,s,i]}),this._dirty=!0,this}closePath(){return this.instructions.push({action:"closePath",data:[]}),this._dirty=!0,this}ellipse(...t){return this.instructions.push({action:"ellipse",data:t}),this._dirty=!0,this}lineTo(...t){return this.instructions.push({action:"lineTo",data:t}),this._dirty=!0,this}moveTo(...t){return this.instructions.push({action:"moveTo",data:t}),this}quadraticCurveTo(...t){return this.instructions.push({action:"quadraticCurveTo",data:t}),this._dirty=!0,this}quadraticCurveToShort(t,n,r){const s=this.instructions[this.instructions.length-1],i=this.getLastPoint(vt.shared);let o=0,a=0;if(!s||s.action!=="quadraticCurveTo")o=i.x,a=i.y;else{o=s.data[0],a=s.data[1];const l=i.x,u=i.y;o=l+(l-o),a=u+(u-a)}return this.instructions.push({action:"quadraticCurveTo",data:[o,a,t,n,r]}),this._dirty=!0,this}rect(t,n,r,s,i){return this.instructions.push({action:"rect",data:[t,n,r,s,i]}),this._dirty=!0,this}circle(t,n,r,s){return this.instructions.push({action:"circle",data:[t,n,r,s]}),this._dirty=!0,this}roundRect(...t){return this.instructions.push({action:"roundRect",data:t}),this._dirty=!0,this}poly(...t){return this.instructions.push({action:"poly",data:t}),this._dirty=!0,this}regularPoly(...t){return this.instructions.push({action:"regularPoly",data:t}),this._dirty=!0,this}roundPoly(...t){return this.instructions.push({action:"roundPoly",data:t}),this._dirty=!0,this}roundShape(...t){return this.instructions.push({action:"roundShape",data:t}),this._dirty=!0,this}filletRect(...t){return this.instructions.push({action:"filletRect",data:t}),this._dirty=!0,this}chamferRect(...t){return this.instructions.push({action:"chamferRect",data:t}),this._dirty=!0,this}star(t,n,r,s,i,o,a){i=i||s/2;const l=-1*Math.PI/2+o,u=r*2,c=Math.PI*2/u,f=[];for(let h=0;h<u;h++){const d=h%2?i:s,p=h*c+l;f.push(t+d*Math.cos(p),n+d*Math.sin(p))}return this.poly(f,!0,a),this}clone(t=!1){const n=new kn;if(!t)n.instructions=this.instructions.slice();else for(let r=0;r<this.instructions.length;r++){const s=this.instructions[r];n.instructions.push({action:s.action,data:s.data.slice()})}return n}clear(){return this.instructions.length=0,this._dirty=!0,this}transform(t){if(t.isIdentity())return this;const n=t.a,r=t.b,s=t.c,i=t.d,o=t.tx,a=t.ty;let l=0,u=0,c=0,f=0,h=0,d=0,p=0,m=0;for(let x=0;x<this.instructions.length;x++){const y=this.instructions[x],g=y.data;switch(y.action){case"moveTo":case"lineTo":l=g[0],u=g[1],g[0]=n*l+s*u+o,g[1]=r*l+i*u+a;break;case"bezierCurveTo":c=g[0],f=g[1],h=g[2],d=g[3],l=g[4],u=g[5],g[0]=n*c+s*f+o,g[1]=r*c+i*f+a,g[2]=n*h+s*d+o,g[3]=r*h+i*d+a,g[4]=n*l+s*u+o,g[5]=r*l+i*u+a;break;case"quadraticCurveTo":c=g[0],f=g[1],l=g[2],u=g[3],g[0]=n*c+s*f+o,g[1]=r*c+i*f+a,g[2]=n*l+s*u+o,g[3]=r*l+i*u+a;break;case"arcToSvg":l=g[5],u=g[6],p=g[0],m=g[1],g[0]=n*p+s*m,g[1]=r*p+i*m,g[5]=n*l+s*u+o,g[6]=r*l+i*u+a;break;case"circle":g[4]=Gn(g[3],t);break;case"rect":g[4]=Gn(g[4],t);break;case"ellipse":g[8]=Gn(g[8],t);break;case"roundRect":g[5]=Gn(g[5],t);break;case"addPath":g[0].transform(t);break;case"poly":g[2]=Gn(g[2],t);break;default:Tt("unknown transform action",y.action);break}}return this._dirty=!0,this}get bounds(){return this.shapePath.bounds}getLastPoint(t){let n=this.instructions.length-1,r=this.instructions[n];if(!r)return t.x=0,t.y=0,t;for(;r.action==="closePath";){if(n--,n<0)return t.x=0,t.y=0,t;r=this.instructions[n]}switch(r.action){case"moveTo":case"lineTo":t.x=r.data[0],t.y=r.data[1];break;case"quadraticCurveTo":t.x=r.data[2],t.y=r.data[3];break;case"bezierCurveTo":t.x=r.data[4],t.y=r.data[5];break;case"arc":case"arcToSvg":t.x=r.data[5],t.y=r.data[6];break;case"addPath":r.data[0].getLastPoint(t);break}return t}}function Gn(e,t){return e?e.prepend(t):t.clone()}function yv(e,t){if(typeof e=="string"){const r=document.createElement("div");r.innerHTML=e.trim(),e=r.querySelector("svg")}const n={context:t,path:new kn};return Xu(e,n,null,null),t}function Xu(e,t,n,r){const s=e.children,{fillStyle:i,strokeStyle:o}=bv(e);i&&n?n={...n,...i}:i&&(n=i),o&&r?r={...r,...o}:o&&(r=o),t.context.fillStyle=n,t.context.strokeStyle=r;let a,l,u,c,f,h,d,p,m,x,y,g,v,b,k,P,O;switch(e.nodeName.toLowerCase()){case"path":b=e.getAttribute("d"),k=new kn(b),t.context.path(k),n&&t.context.fill(),r&&t.context.stroke();break;case"circle":d=Pt(e,"cx",0),p=Pt(e,"cy",0),m=Pt(e,"r",0),t.context.ellipse(d,p,m,m),n&&t.context.fill(),r&&t.context.stroke();break;case"rect":a=Pt(e,"x",0),l=Pt(e,"y",0),P=Pt(e,"width",0),O=Pt(e,"height",0),x=Pt(e,"rx",0),y=Pt(e,"ry",0),x||y?t.context.roundRect(a,l,P,O,x||y):t.context.rect(a,l,P,O),n&&t.context.fill(),r&&t.context.stroke();break;case"ellipse":d=Pt(e,"cx",0),p=Pt(e,"cy",0),x=Pt(e,"rx",0),y=Pt(e,"ry",0),t.context.beginPath(),t.context.ellipse(d,p,x,y),n&&t.context.fill(),r&&t.context.stroke();break;case"line":u=Pt(e,"x1",0),c=Pt(e,"y1",0),f=Pt(e,"x2",0),h=Pt(e,"y2",0),t.context.beginPath(),t.context.moveTo(u,c),t.context.lineTo(f,h),r&&t.context.stroke();break;case"polygon":v=e.getAttribute("points"),g=v.match(/\d+/g).map(I=>parseInt(I,10)),t.context.poly(g,!0),n&&t.context.fill(),r&&t.context.stroke();break;case"polyline":v=e.getAttribute("points"),g=v.match(/\d+/g).map(I=>parseInt(I,10)),t.context.poly(g,!1),r&&t.context.stroke();break;case"g":case"svg":break;default:{console.info(`[SVG parser] <${e.nodeName}> elements unsupported`);break}}for(let I=0;I<s.length;I++)Xu(s[I],t,n,r)}function Pt(e,t,n){const r=e.getAttribute(t);return r?Number(r):n}function bv(e){const t=e.getAttribute("style"),n={},r={};let s=!1,i=!1;if(t){const o=t.split(";");for(let a=0;a<o.length;a++){const l=o[a],[u,c]=l.split(":");switch(u){case"stroke":c!=="none"&&(n.color=yt.shared.setValue(c).toNumber(),i=!0);break;case"stroke-width":n.width=Number(c);break;case"fill":c!=="none"&&(s=!0,r.color=yt.shared.setValue(c).toNumber());break;case"fill-opacity":r.alpha=Number(c);break;case"stroke-opacity":n.alpha=Number(c);break;case"opacity":r.alpha=Number(c),n.alpha=Number(c);break}}}else{const o=e.getAttribute("stroke");o&&o!=="none"&&(i=!0,n.color=yt.shared.setValue(o).toNumber(),n.width=Pt(e,"stroke-width",1));const a=e.getAttribute("fill");a&&a!=="none"&&(s=!0,r.color=yt.shared.setValue(a).toNumber())}return{strokeStyle:i?n:null,fillStyle:s?r:null}}function wv(e){return yt.isColorLike(e)}function xl(e){return e instanceof ws}function ml(e){return e instanceof mr}function Cv(e,t,n){const r=yt.shared.setValue(t??0);return e.color=r.toNumber(),e.alpha=r.alpha===1?n.alpha:r.alpha,e.texture=it.WHITE,{...n,...e}}function vl(e,t,n){return e.fill=t,e.color=16777215,e.texture=t.texture,e.matrix=t.transform,{...n,...e}}function gl(e,t,n){return t.buildLinearGradient(),e.fill=t,e.color=16777215,e.texture=t.texture,e.matrix=t.transform,{...n,...e}}function Av(e,t){var s;const n={...t,...e};if(n.texture){if(n.texture!==it.WHITE){const o=((s=n.matrix)==null?void 0:s.invert())||new at;o.scale(1/n.texture.frame.width,1/n.texture.frame.height),n.matrix=o}const i=n.texture.source.style;i.addressMode==="clamp-to-edge"&&(i.addressMode="repeat")}const r=yt.shared.setValue(n.color);return n.alpha*=r.alpha,n.color=r.toNumber(),n.matrix=n.matrix?n.matrix.clone():null,n}function ln(e,t){if(e==null)return null;const n={},r=e;return wv(e)?Cv(n,e,t):xl(e)?vl(n,e,t):ml(e)?gl(n,e,t):r.fill&&xl(r.fill)?vl(r,r.fill,t):r.fill&&ml(r.fill)?gl(r,r.fill,t):Av(r,t)}function rs(e,t){const{width:n,alignment:r,miterLimit:s,cap:i,join:o,...a}=t,l=ln(e,a);return l?{width:n,alignment:r,miterLimit:s,cap:i,join:o,...l}:null}const Sv=new vt,_l=new at,Oo=class xe extends ce{constructor(){super(...arguments),this.uid=Ct("graphicsContext"),this.dirty=!0,this.batchMode="auto",this.instructions=[],this._activePath=new kn,this._transform=new at,this._fillStyle={...xe.defaultFillStyle},this._strokeStyle={...xe.defaultStrokeStyle},this._stateStack=[],this._tick=0,this._bounds=new Pe,this._boundsDirty=!0}clone(){const t=new xe;return t.batchMode=this.batchMode,t.instructions=this.instructions.slice(),t._activePath=this._activePath.clone(),t._transform=this._transform.clone(),t._fillStyle={...this._fillStyle},t._strokeStyle={...this._strokeStyle},t._stateStack=this._stateStack.slice(),t._bounds=this._bounds.clone(),t._boundsDirty=!0,t}get fillStyle(){return this._fillStyle}set fillStyle(t){this._fillStyle=ln(t,xe.defaultFillStyle)}get strokeStyle(){return this._strokeStyle}set strokeStyle(t){this._strokeStyle=rs(t,xe.defaultStrokeStyle)}setFillStyle(t){return this._fillStyle=ln(t,xe.defaultFillStyle),this}setStrokeStyle(t){return this._strokeStyle=ln(t,xe.defaultStrokeStyle),this}texture(t,n,r,s,i,o){return this.instructions.push({action:"texture",data:{image:t,dx:r||0,dy:s||0,dw:i||t.frame.width,dh:o||t.frame.height,transform:this._transform.clone(),alpha:this._fillStyle.alpha,style:n?yt.shared.setValue(n).toNumber():16777215}}),this.onUpdate(),this}beginPath(){return this._activePath=new kn,this}fill(t,n){let r;const s=this.instructions[this.instructions.length-1];return this._tick===0&&s&&s.action==="stroke"?r=s.data.path:r=this._activePath.clone(),r?(t!=null&&(n!==void 0&&typeof t=="number"&&(ut(ct,"GraphicsContext.fill(color, alpha) is deprecated, use GraphicsContext.fill({ color, alpha }) instead"),t={color:t,alpha:n}),this._fillStyle=ln(t,xe.defaultFillStyle)),this.instructions.push({action:"fill",data:{style:this.fillStyle,path:r}}),this.onUpdate(),this._initNextPathLocation(),this._tick=0,this):this}_initNextPathLocation(){const{x:t,y:n}=this._activePath.getLastPoint(vt.shared);this._activePath.clear(),this._activePath.moveTo(t,n)}stroke(t){let n;const r=this.instructions[this.instructions.length-1];return this._tick===0&&r&&r.action==="fill"?n=r.data.path:n=this._activePath.clone(),n?(t!=null&&(this._strokeStyle=rs(t,xe.defaultStrokeStyle)),this.instructions.push({action:"stroke",data:{style:this.strokeStyle,path:n}}),this.onUpdate(),this._initNextPathLocation(),this._tick=0,this):this}cut(){for(let t=0;t<2;t++){const n=this.instructions[this.instructions.length-1-t],r=this._activePath.clone();if(n&&(n.action==="stroke"||n.action==="fill"))if(n.data.hole)n.data.hole.addPath(r);else{n.data.hole=r;break}}return this._initNextPathLocation(),this}arc(t,n,r,s,i,o){this._tick++;const a=this._transform;return this._activePath.arc(a.a*t+a.c*n+a.tx,a.b*t+a.d*n+a.ty,r,s,i,o),this}arcTo(t,n,r,s,i){this._tick++;const o=this._transform;return this._activePath.arcTo(o.a*t+o.c*n+o.tx,o.b*t+o.d*n+o.ty,o.a*r+o.c*s+o.tx,o.b*r+o.d*s+o.ty,i),this}arcToSvg(t,n,r,s,i,o,a){this._tick++;const l=this._transform;return this._activePath.arcToSvg(t,n,r,s,i,l.a*o+l.c*a+l.tx,l.b*o+l.d*a+l.ty),this}bezierCurveTo(t,n,r,s,i,o,a){this._tick++;const l=this._transform;return this._activePath.bezierCurveTo(l.a*t+l.c*n+l.tx,l.b*t+l.d*n+l.ty,l.a*r+l.c*s+l.tx,l.b*r+l.d*s+l.ty,l.a*i+l.c*o+l.tx,l.b*i+l.d*o+l.ty,a),this}closePath(){var t;return this._tick++,(t=this._activePath)==null||t.closePath(),this}ellipse(t,n,r,s){return this._tick++,this._activePath.ellipse(t,n,r,s,this._transform.clone()),this}circle(t,n,r){return this._tick++,this._activePath.circle(t,n,r,this._transform.clone()),this}path(t){return this._tick++,this._activePath.addPath(t,this._transform.clone()),this}lineTo(t,n){this._tick++;const r=this._transform;return this._activePath.lineTo(r.a*t+r.c*n+r.tx,r.b*t+r.d*n+r.ty),this}moveTo(t,n){this._tick++;const r=this._transform,s=this._activePath.instructions,i=r.a*t+r.c*n+r.tx,o=r.b*t+r.d*n+r.ty;return s.length===1&&s[0].action==="moveTo"?(s[0].data[0]=i,s[0].data[1]=o,this):(this._activePath.moveTo(i,o),this)}quadraticCurveTo(t,n,r,s,i){this._tick++;const o=this._transform;return this._activePath.quadraticCurveTo(o.a*t+o.c*n+o.tx,o.b*t+o.d*n+o.ty,o.a*r+o.c*s+o.tx,o.b*r+o.d*s+o.ty,i),this}rect(t,n,r,s){return this._tick++,this._activePath.rect(t,n,r,s,this._transform.clone()),this}roundRect(t,n,r,s,i){return this._tick++,this._activePath.roundRect(t,n,r,s,i,this._transform.clone()),this}poly(t,n){return this._tick++,this._activePath.poly(t,n,this._transform.clone()),this}regularPoly(t,n,r,s,i=0,o){return this._tick++,this._activePath.regularPoly(t,n,r,s,i,o),this}roundPoly(t,n,r,s,i,o){return this._tick++,this._activePath.roundPoly(t,n,r,s,i,o),this}roundShape(t,n,r,s){return this._tick++,this._activePath.roundShape(t,n,r,s),this}filletRect(t,n,r,s,i){return this._tick++,this._activePath.filletRect(t,n,r,s,i),this}chamferRect(t,n,r,s,i,o){return this._tick++,this._activePath.chamferRect(t,n,r,s,i,o),this}star(t,n,r,s,i=0,o=0){return this._tick++,this._activePath.star(t,n,r,s,i,o,this._transform.clone()),this}svg(t){return this._tick++,yv(t,this),this}restore(){const t=this._stateStack.pop();return t&&(this._transform=t.transform,this._fillStyle=t.fillStyle,this._strokeStyle=t.strokeStyle),this}save(){return this._stateStack.push({transform:this._transform.clone(),fillStyle:{...this._fillStyle},strokeStyle:{...this._strokeStyle}}),this}getTransform(){return this._transform}resetTransform(){return this._transform.identity(),this}rotate(t){return this._transform.rotate(t),this}scale(t,n=t){return this._transform.scale(t,n),this}setTransform(t,n,r,s,i,o){return t instanceof at?(this._transform.set(t.a,t.b,t.c,t.d,t.tx,t.ty),this):(this._transform.set(t,n,r,s,i,o),this)}transform(t,n,r,s,i,o){return t instanceof at?(this._transform.append(t),this):(_l.set(t,n,r,s,i,o),this._transform.append(_l),this)}translate(t,n=t){return this._transform.translate(t,n),this}clear(){return this._activePath.clear(),this.instructions.length=0,this.resetTransform(),this.onUpdate(),this}onUpdate(){this.dirty||(this.emit("update",this,16),this.dirty=!0,this._boundsDirty=!0)}get bounds(){if(!this._boundsDirty)return this._bounds;const t=this._bounds;t.clear();for(let n=0;n<this.instructions.length;n++){const r=this.instructions[n],s=r.action;if(s==="fill"){const i=r.data;t.addBounds(i.path.bounds)}else if(s==="texture"){const i=r.data;t.addFrame(i.dx,i.dy,i.dx+i.dw,i.dy+i.dh,i.transform)}if(s==="stroke"){const i=r.data,o=i.style.width/2,a=i.path.bounds;t.addFrame(a.minX-o,a.minY-o,a.maxX+o,a.maxY+o)}}return t}containsPoint(t){var s;if(!this.bounds.containsPoint(t.x,t.y))return!1;const n=this.instructions;let r=!1;for(let i=0;i<n.length;i++){const o=n[i],a=o.data,l=a.path;if(!o.action||!l)continue;const u=a.style,c=l.shapePath.shapePrimitives;for(let f=0;f<c.length;f++){const h=c[f].shape;if(!u||!h)continue;const d=c[f].transform,p=d?d.applyInverse(t,Sv):t;o.action==="fill"?r=h.contains(p.x,p.y):r=h.strokeContains(p.x,p.y,u.width);const m=a.hole;if(m){const x=(s=m.shapePath)==null?void 0:s.shapePrimitives;if(x)for(let y=0;y<x.length;y++)x[y].shape.contains(p.x,p.y)&&(r=!1)}if(r)return!0}}return r}destroy(t=!1){if(this._stateStack.length=0,this._transform=null,this.emit("destroy",this),this.removeAllListeners(),typeof t=="boolean"?t:t==null?void 0:t.texture){const r=typeof t=="boolean"?t:t==null?void 0:t.textureSource;this._fillStyle.texture&&this._fillStyle.texture.destroy(r),this._strokeStyle.texture&&this._strokeStyle.texture.destroy(r)}this._fillStyle=null,this._strokeStyle=null,this.instructions=null,this._activePath=null,this._bounds=null,this._stateStack=null,this.customShader=null,this._transform=null}};Oo.defaultFillStyle={color:16777215,alpha:1,texture:it.WHITE,matrix:null,fill:null};Oo.defaultStrokeStyle={width:1,color:16777215,alpha:1,alignment:.5,miterLimit:10,cap:"butt",join:"miter",texture:it.WHITE,matrix:null,fill:null};let Xt=Oo;const yl=["align","breakWords","cssOverrides","fontFamily","fontSize","fontStyle","fontVariant","fontWeight","leading","letterSpacing","lineHeight","padding","textBaseline","trim","whiteSpace","wordWrap","wordWrapWidth"];function Pv(e){const t=[];let n=0;for(let r=0;r<yl.length;r++){const s=`_${yl[r]}`;t[n++]=e[s]}return n=Yu(e._fill,t,n),n=Mv(e._stroke,t,n),n=Tv(e.dropShadow,t,n),t.join("-")}function Yu(e,t,n){var r;return e&&(t[n++]=e.color,t[n++]=e.alpha,t[n++]=(r=e.fill)==null?void 0:r.styleKey),n}function Mv(e,t,n){return e&&(n=Yu(e,t,n),t[n++]=e.width,t[n++]=e.alignment,t[n++]=e.cap,t[n++]=e.join,t[n++]=e.miterLimit),n}function Tv(e,t,n){return e&&(t[n++]=e.alpha,t[n++]=e.angle,t[n++]=e.blur,t[n++]=e.distance,t[n++]=yt.shared.setValue(e.color).toNumber()),n}const Bo=class mn extends ce{constructor(t={}){super(),kv(t);const n={...mn.defaultTextStyle,...t};for(const r in n){const s=r;this[s]=n[r]}this.update()}get align(){return this._align}set align(t){this._align=t,this.update()}get breakWords(){return this._breakWords}set breakWords(t){this._breakWords=t,this.update()}get dropShadow(){return this._dropShadow}set dropShadow(t){t!==null&&typeof t=="object"?this._dropShadow=this._createProxy({...mn.defaultDropShadow,...t}):this._dropShadow=t?this._createProxy({...mn.defaultDropShadow}):null,this.update()}get fontFamily(){return this._fontFamily}set fontFamily(t){this._fontFamily=t,this.update()}get fontSize(){return this._fontSize}set fontSize(t){typeof t=="string"?this._fontSize=parseInt(t,10):this._fontSize=t,this.update()}get fontStyle(){return this._fontStyle}set fontStyle(t){this._fontStyle=t,this.update()}get fontVariant(){return this._fontVariant}set fontVariant(t){this._fontVariant=t,this.update()}get fontWeight(){return this._fontWeight}set fontWeight(t){this._fontWeight=t,this.update()}get leading(){return this._leading}set leading(t){this._leading=t,this.update()}get letterSpacing(){return this._letterSpacing}set letterSpacing(t){this._letterSpacing=t,this.update()}get lineHeight(){return this._lineHeight}set lineHeight(t){this._lineHeight=t,this.update()}get padding(){return this._padding}set padding(t){this._padding=t,this.update()}get trim(){return this._trim}set trim(t){this._trim=t,this.update()}get textBaseline(){return this._textBaseline}set textBaseline(t){this._textBaseline=t,this.update()}get whiteSpace(){return this._whiteSpace}set whiteSpace(t){this._whiteSpace=t,this.update()}get wordWrap(){return this._wordWrap}set wordWrap(t){this._wordWrap=t,this.update()}get wordWrapWidth(){return this._wordWrapWidth}set wordWrapWidth(t){this._wordWrapWidth=t,this.update()}get fill(){return this._originalFill}set fill(t){t!==this._originalFill&&(this._originalFill=t,this._isFillStyle(t)&&(this._originalFill=this._createProxy({...Xt.defaultFillStyle,...t},()=>{this._fill=ln({...this._originalFill},Xt.defaultFillStyle)})),this._fill=ln(t===0?"black":t,Xt.defaultFillStyle),this.update())}get stroke(){return this._originalStroke}set stroke(t){t!==this._originalStroke&&(this._originalStroke=t,this._isFillStyle(t)&&(this._originalStroke=this._createProxy({...Xt.defaultStrokeStyle,...t},()=>{this._stroke=rs({...this._originalStroke},Xt.defaultStrokeStyle)})),this._stroke=rs(t,Xt.defaultStrokeStyle),this.update())}_generateKey(){return this._styleKey=Pv(this),this._styleKey}update(){this._styleKey=null,this.emit("update",this)}reset(){const t=mn.defaultTextStyle;for(const n in t)this[n]=t[n]}get styleKey(){return this._styleKey||this._generateKey()}clone(){return new mn({align:this.align,breakWords:this.breakWords,dropShadow:this._dropShadow?{...this._dropShadow}:null,fill:this._fill,fontFamily:this.fontFamily,fontSize:this.fontSize,fontStyle:this.fontStyle,fontVariant:this.fontVariant,fontWeight:this.fontWeight,leading:this.leading,letterSpacing:this.letterSpacing,lineHeight:this.lineHeight,padding:this.padding,stroke:this._stroke,textBaseline:this.textBaseline,whiteSpace:this.whiteSpace,wordWrap:this.wordWrap,wordWrapWidth:this.wordWrapWidth})}destroy(t=!1){var r,s,i,o;if(this.removeAllListeners(),typeof t=="boolean"?t:t==null?void 0:t.texture){const a=typeof t=="boolean"?t:t==null?void 0:t.textureSource;(r=this._fill)!=null&&r.texture&&this._fill.texture.destroy(a),(s=this._originalFill)!=null&&s.texture&&this._originalFill.texture.destroy(a),(i=this._stroke)!=null&&i.texture&&this._stroke.texture.destroy(a),(o=this._originalStroke)!=null&&o.texture&&this._originalStroke.texture.destroy(a)}this._fill=null,this._stroke=null,this.dropShadow=null,this._originalStroke=null,this._originalFill=null}_createProxy(t,n){return new Proxy(t,{set:(r,s,i)=>(r[s]=i,n==null||n(s,i),this.update(),!0)})}_isFillStyle(t){return(t??null)!==null&&!(yt.isColorLike(t)||t instanceof mr||t instanceof ws)}};Bo.defaultDropShadow={alpha:1,angle:Math.PI/6,blur:0,color:"black",distance:5};Bo.defaultTextStyle={align:"left",breakWords:!1,dropShadow:null,fill:"black",fontFamily:"Arial",fontSize:26,fontStyle:"normal",fontVariant:"normal",fontWeight:"normal",leading:0,letterSpacing:0,lineHeight:0,padding:0,stroke:null,textBaseline:"alphabetic",trim:!1,whiteSpace:"pre",wordWrap:!1,wordWrapWidth:100};let ss=Bo;function kv(e){const t=e;if(typeof t.dropShadow=="boolean"&&t.dropShadow){const n=ss.defaultDropShadow;e.dropShadow={alpha:t.dropShadowAlpha??n.alpha,angle:t.dropShadowAngle??n.angle,blur:t.dropShadowBlur??n.blur,color:t.dropShadowColor??n.color,distance:t.dropShadowDistance??n.distance}}if(t.strokeThickness!==void 0){ut(ct,"strokeThickness is now a part of stroke");const n=t.stroke;let r={};if(yt.isColorLike(n))r.color=n;else if(n instanceof mr||n instanceof ws)r.fill=n;else if(Object.hasOwnProperty.call(n,"color")||Object.hasOwnProperty.call(n,"fill"))r=n;else throw new Error("Invalid stroke value.");e.stroke={...r,width:t.strokeThickness}}if(Array.isArray(t.fillGradientStops)){ut(ct,"gradient fill is now a fill pattern: `new FillGradient(...)`");let n;e.fontSize==null?e.fontSize=ss.defaultTextStyle.fontSize:typeof e.fontSize=="string"?n=parseInt(e.fontSize,10):n=e.fontSize;const r=new mr(0,0,0,n*1.7),s=t.fillGradientStops.map(i=>yt.shared.setValue(i).toNumber());s.forEach((i,o)=>{const a=o/(s.length-1);r.addColorStop(a,i)}),e.fill={fill:r}}}class Iv{constructor(t){this._canvasPool=Object.create(null),this.canvasOptions=t||{},this.enableFullScreen=!1}_createCanvasAndContext(t,n){const r=gt.get().createCanvas();r.width=t,r.height=n;const s=r.getContext("2d");return{canvas:r,context:s}}getOptimalCanvasAndContext(t,n,r=1){t=Math.ceil(t*r-1e-6),n=Math.ceil(n*r-1e-6),t=ja(t),n=ja(n);const s=(t<<17)+(n<<1);this._canvasPool[s]||(this._canvasPool[s]=[]);let i=this._canvasPool[s].pop();return i||(i=this._createCanvasAndContext(t,n)),i}returnCanvasAndContext(t){const{width:n,height:r}=t.canvas,s=(n<<17)+(r<<1);this._canvasPool[s].push(t)}clear(){this._canvasPool={}}}const bl=new Iv,zv=["serif","sans-serif","monospace","cursive","fantasy","system-ui"];function Zi(e){const t=typeof e.fontSize=="number"?`${e.fontSize}px`:e.fontSize;let n=e.fontFamily;Array.isArray(e.fontFamily)||(n=e.fontFamily.split(","));for(let r=n.length-1;r>=0;r--){let s=n[r].trim();!/([\"\'])[^\'\"]+\1/.test(s)&&!zv.includes(s)&&(s=`"${s}"`),n[r]=s}return`${e.fontStyle} ${e.fontVariant} ${e.fontWeight} ${t} ${n.join(",")}`}const fi={willReadFrequently:!0},ue=class G{static get experimentalLetterSpacingSupported(){let t=G._experimentalLetterSpacingSupported;if(t!==void 0){const n=gt.get().getCanvasRenderingContext2D().prototype;t=G._experimentalLetterSpacingSupported="letterSpacing"in n||"textLetterSpacing"in n}return t}constructor(t,n,r,s,i,o,a,l,u){this.text=t,this.style=n,this.width=r,this.height=s,this.lines=i,this.lineWidths=o,this.lineHeight=a,this.maxLineWidth=l,this.fontProperties=u}static measureText(t=" ",n,r=G._canvas,s=n.wordWrap){var g;const i=`${t}:${n.styleKey}`;if(G._measurementCache[i])return G._measurementCache[i];const o=Zi(n),a=G.measureFont(o);a.fontSize===0&&(a.fontSize=n.fontSize,a.ascent=n.fontSize);const l=G.__context;l.font=o;const c=(s?G._wordWrap(t,n,r):t).split(/(?:\r\n|\r|\n)/),f=new Array(c.length);let h=0;for(let v=0;v<c.length;v++){const b=G._measureText(c[v],n.letterSpacing,l);f[v]=b,h=Math.max(h,b)}const d=((g=n._stroke)==null?void 0:g.width)||0;let p=h+d;n.dropShadow&&(p+=n.dropShadow.distance);const m=n.lineHeight||a.fontSize+d;let x=Math.max(m,a.fontSize+d*2)+(c.length-1)*(m+n.leading);return n.dropShadow&&(x+=n.dropShadow.distance),new G(t,n,p,x,c,f,m+n.leading,h,a)}static _measureText(t,n,r){let s=!1;G.experimentalLetterSpacingSupported&&(G.experimentalLetterSpacing?(r.letterSpacing=`${n}px`,r.textLetterSpacing=`${n}px`,s=!0):(r.letterSpacing="0px",r.textLetterSpacing="0px"));let i=r.measureText(t).width;return i>0&&(s?i-=n:i+=(G.graphemeSegmenter(t).length-1)*n),i}static _wordWrap(t,n,r=G._canvas){const s=r.getContext("2d",fi);let i=0,o="",a="";const l=Object.create(null),{letterSpacing:u,whiteSpace:c}=n,f=G._collapseSpaces(c),h=G._collapseNewlines(c);let d=!f;const p=n.wordWrapWidth+u,m=G._tokenize(t);for(let x=0;x<m.length;x++){let y=m[x];if(G._isNewline(y)){if(!h){a+=G._addLine(o),d=!f,o="",i=0;continue}y=" "}if(f){const v=G.isBreakingSpace(y),b=G.isBreakingSpace(o[o.length-1]);if(v&&b)continue}const g=G._getFromCache(y,u,l,s);if(g>p)if(o!==""&&(a+=G._addLine(o),o="",i=0),G.canBreakWords(y,n.breakWords)){const v=G.wordWrapSplit(y);for(let b=0;b<v.length;b++){let k=v[b],P=k,O=1;for(;v[b+O];){const S=v[b+O];if(!G.canBreakChars(P,S,y,b,n.breakWords))k+=S;else break;P=S,O++}b+=O-1;const I=G._getFromCache(k,u,l,s);I+i>p&&(a+=G._addLine(o),d=!1,o="",i=0),o+=k,i+=I}}else{o.length>0&&(a+=G._addLine(o),o="",i=0);const v=x===m.length-1;a+=G._addLine(y,!v),d=!1,o="",i=0}else g+i>p&&(d=!1,a+=G._addLine(o),o="",i=0),(o.length>0||!G.isBreakingSpace(y)||d)&&(o+=y,i+=g)}return a+=G._addLine(o,!1),a}static _addLine(t,n=!0){return t=G._trimRight(t),t=n?`${t}
`:t,t}static _getFromCache(t,n,r,s){let i=r[t];return typeof i!="number"&&(i=G._measureText(t,n,s)+n,r[t]=i),i}static _collapseSpaces(t){return t==="normal"||t==="pre-line"}static _collapseNewlines(t){return t==="normal"}static _trimRight(t){if(typeof t!="string")return"";for(let n=t.length-1;n>=0;n--){const r=t[n];if(!G.isBreakingSpace(r))break;t=t.slice(0,-1)}return t}static _isNewline(t){return typeof t!="string"?!1:G._newlines.includes(t.charCodeAt(0))}static isBreakingSpace(t,n){return typeof t!="string"?!1:G._breakingSpaces.includes(t.charCodeAt(0))}static _tokenize(t){const n=[];let r="";if(typeof t!="string")return n;for(let s=0;s<t.length;s++){const i=t[s],o=t[s+1];if(G.isBreakingSpace(i,o)||G._isNewline(i)){r!==""&&(n.push(r),r=""),n.push(i);continue}r+=i}return r!==""&&n.push(r),n}static canBreakWords(t,n){return n}static canBreakChars(t,n,r,s,i){return!0}static wordWrapSplit(t){return G.graphemeSegmenter(t)}static measureFont(t){if(G._fonts[t])return G._fonts[t];const n=G._context;n.font=t;const r=n.measureText(G.METRICS_STRING+G.BASELINE_SYMBOL),s={ascent:r.actualBoundingBoxAscent,descent:r.actualBoundingBoxDescent,fontSize:r.actualBoundingBoxAscent+r.actualBoundingBoxDescent};return G._fonts[t]=s,s}static clearMetrics(t=""){t?delete G._fonts[t]:G._fonts={}}static get _canvas(){if(!G.__canvas){let t;try{const n=new OffscreenCanvas(0,0),r=n.getContext("2d",fi);if(r!=null&&r.measureText)return G.__canvas=n,n;t=gt.get().createCanvas()}catch{t=gt.get().createCanvas()}t.width=t.height=10,G.__canvas=t}return G.__canvas}static get _context(){return G.__context||(G.__context=G._canvas.getContext("2d",fi)),G.__context}};ue.METRICS_STRING="|ÉqÅ";ue.BASELINE_SYMBOL="M";ue.BASELINE_MULTIPLIER=1.4;ue.HEIGHT_MULTIPLIER=2;ue.graphemeSegmenter=(()=>{if(typeof(Intl==null?void 0:Intl.Segmenter)=="function"){const e=new Intl.Segmenter;return t=>[...e.segment(t)].map(n=>n.segment)}return e=>[...e]})();ue.experimentalLetterSpacing=!1;ue._fonts={};ue._newlines=[10,13];ue._breakingSpaces=[9,32,8192,8193,8194,8195,8196,8197,8198,8200,8201,8202,8287,12288];ue._measurementCache={};let wl=ue;function Cl(e,t){if(e.texture===it.WHITE&&!e.fill)return yt.shared.setValue(e.color).toHex();if(e.fill){if(e.fill instanceof ws){const n=e.fill,r=t.createPattern(n.texture.source.resource,"repeat"),s=n.transform.copyTo(at.shared);return s.scale(n.texture.frame.width,n.texture.frame.height),r.setTransform(s),r}else if(e.fill instanceof mr){const n=e.fill;if(n.type==="linear"){const r=t.createLinearGradient(n.x0,n.y0,n.x1,n.y1);return n.gradientStops.forEach(s=>{r.addColorStop(s.offset,yt.shared.setValue(s.color).toHex())}),r}}}else{const n=t.createPattern(e.texture.source.resource,"repeat"),r=e.matrix.copyTo(at.shared);return r.scale(e.texture.frame.width,e.texture.frame.height),n.setTransform(r),n}return Tt("FillStyle not recognised",e),"red"}function Ku(e){if(e==="")return[];typeof e=="string"&&(e=[e]);const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];if(Array.isArray(s)){if(s.length!==2)throw new Error(`[BitmapFont]: Invalid character range length, expecting 2 got ${s.length}.`);if(s[0].length===0||s[1].length===0)throw new Error("[BitmapFont]: Invalid character delimiter.");const i=s[0].charCodeAt(0),o=s[1].charCodeAt(0);if(o<i)throw new Error("[BitmapFont]: Invalid character range.");for(let a=i,l=o;a<=l;a++)t.push(String.fromCharCode(a))}else t.push(...Array.from(s))}if(t.length===0)throw new Error("[BitmapFont]: Empty set when resolving characters.");return t}class Al extends Bu{constructor(t){super(),this.resolution=1,this.pages=[],this._padding=4,this._measureCache=Object.create(null),this._currentChars=[],this._currentX=0,this._currentY=0,this._currentPageIndex=-1,this._skipKerning=!1;const n=t,r=n.style.clone();n.overrideFill&&(r._fill.color=16777215,r._fill.alpha=1,r._fill.texture=it.WHITE,r._fill.fill=null);const s=r.fontSize;r.fontSize=this.baseMeasurementFontSize;const i=Zi(r);n.overrideSize?r._stroke&&(r._stroke.width*=this.baseRenderedFontSize/s):r.fontSize=this.baseRenderedFontSize=s,this._style=r,this._skipKerning=n.skipKerning??!1,this.resolution=n.resolution??1,this._padding=n.padding??4,this.fontMetrics=wl.measureFont(i),this.lineHeight=r.lineHeight||this.fontMetrics.fontSize||r.fontSize}ensureCharacters(t){var m,x;const n=Ku(t).filter(y=>!this._currentChars.includes(y)).filter((y,g,v)=>v.indexOf(y)===g);if(!n.length)return;this._currentChars=[...this._currentChars,...n];let r;this._currentPageIndex===-1?r=this._nextPage():r=this.pages[this._currentPageIndex];let{canvas:s,context:i}=r.canvasAndContext,o=r.texture.source;const a=this._style;let l=this._currentX,u=this._currentY;const c=this.baseRenderedFontSize/this.baseMeasurementFontSize,f=this._padding*c,h=a.fontStyle==="italic"?2:1;let d=0,p=!1;for(let y=0;y<n.length;y++){const g=n[y],v=wl.measureText(g,a,s,!1);v.lineHeight=v.height;const b=h*v.width*c,k=v.height*c,P=b+f*2,O=k+f*2;if(p=!1,g!==`
`&&g!=="\r"&&g!=="	"&&g!==" "&&(p=!0,d=Math.ceil(Math.max(O,d))),l+P>512&&(u+=d,d=O,l=0,u+d>512)){o.update();const S=this._nextPage();s=S.canvasAndContext.canvas,i=S.canvasAndContext.context,o=S.texture.source,u=0}const I=b/c-(((m=a.dropShadow)==null?void 0:m.distance)??0)-(((x=a._stroke)==null?void 0:x.width)??0);if(this.chars[g]={id:g.codePointAt(0),xOffset:-this._padding,yOffset:-this._padding,xAdvance:I,kerning:{}},p){this._drawGlyph(i,v,l+f,u+f,c,a);const S=o.width*c,A=o.height*c,X=new wt(l/S*o.width,u/A*o.height,P/S*o.width,O/A*o.height);this.chars[g].texture=new it({source:o,frame:X}),l+=Math.ceil(P)}}o.update(),this._currentX=l,this._currentY=u,this._skipKerning&&this._applyKerning(n,i)}get pageTextures(){return ut(ct,"BitmapFont.pageTextures is deprecated, please use BitmapFont.pages instead."),this.pages}_applyKerning(t,n){const r=this._measureCache;for(let s=0;s<t.length;s++){const i=t[s];for(let o=0;o<this._currentChars.length;o++){const a=this._currentChars[o];let l=r[i];l||(l=r[i]=n.measureText(i).width);let u=r[a];u||(u=r[a]=n.measureText(a).width);let c=n.measureText(i+a).width,f=c-(l+u);f&&(this.chars[i].kerning[a]=f),c=n.measureText(i+a).width,f=c-(l+u),f&&(this.chars[a].kerning[i]=f)}}}_nextPage(){this._currentPageIndex++;const t=this.resolution,n=bl.getOptimalCanvasAndContext(512,512,t);this._setupContext(n.context,this._style,t);const r=t*(this.baseRenderedFontSize/this.baseMeasurementFontSize),s=new it({source:new En({resource:n.canvas,resolution:r,alphaMode:"premultiply-alpha-on-upload"})}),i={canvasAndContext:n,texture:s};return this.pages[this._currentPageIndex]=i,i}_setupContext(t,n,r){n.fontSize=this.baseRenderedFontSize,t.scale(r,r),t.font=Zi(n),n.fontSize=this.baseMeasurementFontSize,t.textBaseline=n.textBaseline;const s=n._stroke,i=(s==null?void 0:s.width)??0;if(s&&(t.lineWidth=i,t.lineJoin=s.join,t.miterLimit=s.miterLimit,t.strokeStyle=Cl(s,t)),n._fill&&(t.fillStyle=Cl(n._fill,t)),n.dropShadow){const o=n.dropShadow,a=yt.shared.setValue(o.color).toArray(),l=o.blur*r,u=o.distance*r;t.shadowColor=`rgba(${a[0]*255},${a[1]*255},${a[2]*255},${o.alpha})`,t.shadowBlur=l,t.shadowOffsetX=Math.cos(o.angle)*u,t.shadowOffsetY=Math.sin(o.angle)*u}else t.shadowColor="black",t.shadowBlur=0,t.shadowOffsetX=0,t.shadowOffsetY=0}_drawGlyph(t,n,r,s,i,o){const a=n.text,l=n.fontProperties,u=o._stroke,c=((u==null?void 0:u.width)??0)*i,f=r+c/2,h=s-c/2,d=l.descent*i,p=n.lineHeight*i;o.stroke&&c&&t.strokeText(a,f,h+p-d),o._fill&&t.fillText(a,f,h+p-d)}destroy(){super.destroy();for(let t=0;t<this.pages.length;t++){const{canvasAndContext:n,texture:r}=this.pages[t];bl.returnCanvasAndContext(n),r.destroy(!0)}this.pages=null}}function Ev(e,t,n){const r={width:0,height:0,offsetY:0,scale:t.fontSize/n.baseMeasurementFontSize,lines:[{width:0,charPositions:[],spaceWidth:0,spacesIndex:[],chars:[]}]};r.offsetY=n.baseLineOffset;let s=r.lines[0],i=null,o=!0;const a={spaceWord:!1,width:0,start:0,index:0,positions:[],chars:[]},l=d=>{const p=s.width;for(let m=0;m<a.index;m++){const x=d.positions[m];s.chars.push(d.chars[m]),s.charPositions.push(x+p)}s.width+=d.width,o=!1,a.width=0,a.index=0,a.chars.length=0},u=()=>{let d=s.chars.length-1,p=s.chars[d];for(;p===" ";)s.width-=n.chars[p].xAdvance,p=s.chars[--d];r.width=Math.max(r.width,s.width),s={width:0,charPositions:[],chars:[],spaceWidth:0,spacesIndex:[]},o=!0,r.lines.push(s),r.height+=n.lineHeight},c=n.baseMeasurementFontSize/t.fontSize,f=t.letterSpacing*c,h=t.wordWrapWidth*c;for(let d=0;d<e.length+1;d++){let p;const m=d===e.length;m||(p=e[d]);const x=n.chars[p]||n.chars[" "];if(/(?:\s)/.test(p)||p==="\r"||p===`
`||m){if(!o&&t.wordWrap&&s.width+a.width-f>h?(u(),l(a),m||s.charPositions.push(0)):(a.start=s.width,l(a),m||s.charPositions.push(0)),p==="\r"||p===`
`)s.width!==0&&u();else if(!m){const b=x.xAdvance+(x.kerning[i]||0)+f;s.width+=b,s.spaceWidth=b,s.spacesIndex.push(s.charPositions.length),s.chars.push(p)}}else{const v=x.kerning[i]||0,b=x.xAdvance+v+f;a.positions[a.index++]=a.width+v,a.chars.push(p),a.width+=b}i=p}return u(),t.align==="center"?Fv(r):t.align==="right"?Ov(r):t.align==="justify"&&Bv(r),r}function Fv(e){for(let t=0;t<e.lines.length;t++){const n=e.lines[t],r=e.width/2-n.width/2;for(let s=0;s<n.charPositions.length;s++)n.charPositions[s]+=r}}function Ov(e){for(let t=0;t<e.lines.length;t++){const n=e.lines[t],r=e.width-n.width;for(let s=0;s<n.charPositions.length;s++)n.charPositions[s]+=r}}function Bv(e){const t=e.width;for(let n=0;n<e.lines.length;n++){const r=e.lines[n];let s=0,i=r.spacesIndex[s++],o=0;const a=r.spacesIndex.length,u=(t-r.width)/a;for(let c=0;c<r.charPositions.length;c++)c===i&&(i=r.spacesIndex[s++],o+=u),r.charPositions[c]+=o}}class Rv{constructor(){this.ALPHA=[["a","z"],["A","Z"]," "],this.NUMERIC=[["0","9"]],this.ALPHANUMERIC=[["a","z"],["A","Z"],["0","9"]," "],this.ASCII=[[" ","~"]],this.defaultOptions={chars:this.ALPHANUMERIC,resolution:1,padding:4,skipKerning:!1}}getFont(t,n){var o;let r=`${n.fontFamily}-bitmap`,s=!0;if(n._fill.fill&&(r+=n._fill.fill.uid,s=!1),!xt.has(r)){const a=new Al({style:n,overrideFill:s,overrideSize:!0,...this.defaultOptions});a.once("destroy",()=>xt.remove(r)),xt.set(r,a)}const i=xt.get(r);return(o=i.ensureCharacters)==null||o.call(i,t),i}getLayout(t,n){const r=this.getFont(t,n);return Ev([...t],n,r)}measureText(t,n){return this.getLayout(t,n)}install(...t){var u,c,f,h;let n=t[0];typeof n=="string"&&(n={name:n,style:t[1],chars:(u=t[2])==null?void 0:u.chars,resolution:(c=t[2])==null?void 0:c.resolution,padding:(f=t[2])==null?void 0:f.padding,skipKerning:(h=t[2])==null?void 0:h.skipKerning},ut(ct,"BitmapFontManager.install(name, style, options) is deprecated, use BitmapFontManager.install({name, style, ...options})"));const r=n==null?void 0:n.name;if(!r)throw new Error("[BitmapFontManager] Property `name` is required.");n={...this.defaultOptions,...n};const s=n.style,i=s instanceof ss?s:new ss(s),o=i._fill.fill!==null&&i._fill.fill!==void 0,a=new Al({style:i,overrideFill:o,skipKerning:n.skipKerning,padding:n.padding,resolution:n.resolution,overrideSize:!1}),l=Ku(n.chars);return a.ensureCharacters(l.join("")),xt.set(`${r}-bitmap`,a),a.once("destroy",()=>xt.remove(`${r}-bitmap`)),a}uninstall(t){const n=`${t}-bitmap`,r=xt.get(n);r&&(xt.remove(n),r.destroy())}}const Sl=new Rv;class Zu extends Bu{constructor(t,n){super();const{textures:r,data:s}=t;Object.keys(s.pages).forEach(i=>{const o=s.pages[parseInt(i,10)],a=r[o.id];this.pages.push({texture:a})}),Object.keys(s.chars).forEach(i=>{const o=s.chars[i],{frame:a,source:l}=r[o.page],u=new wt(o.x+a.x,o.y+a.y,o.width,o.height),c=new it({source:l,frame:u});this.chars[i]={id:i.codePointAt(0),xOffset:o.xOffset,yOffset:o.yOffset,xAdvance:o.xAdvance,kerning:o.kerning??{},texture:c}}),this.baseRenderedFontSize=s.fontSize,this.baseMeasurementFontSize=s.fontSize,this.fontMetrics={ascent:0,descent:0,fontSize:s.fontSize},this.baseLineOffset=s.baseLineOffset,this.lineHeight=s.lineHeight,this.fontFamily=s.fontFamily,this.distanceField=s.distanceField??{type:"none",range:0},this.url=n}destroy(){super.destroy();for(let t=0;t<this.pages.length;t++){const{texture:n}=this.pages[t];n.destroy(!0)}this.pages=null}static install(t){Sl.install(t)}static uninstall(t){Sl.uninstall(t)}}const hi={test(e){return typeof e=="string"&&e.startsWith("info face=")},parse(e){const t=e.match(/^[a-z]+\s+.+$/gm),n={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(const f in t){const h=t[f].match(/^[a-z]+/gm)[0],d=t[f].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),p={};for(const m in d){const x=d[m].split("="),y=x[0],g=x[1].replace(/"/gm,""),v=parseFloat(g),b=isNaN(v)?g:v;p[y]=b}n[h].push(p)}const r={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[s]=n.info,[i]=n.common,[o]=n.distanceField??[];o&&(r.distanceField={range:parseInt(o.distanceRange,10),type:o.fieldType}),r.fontSize=parseInt(s.size,10),r.fontFamily=s.face,r.lineHeight=parseInt(i.lineHeight,10);const a=n.page;for(let f=0;f<a.length;f++)r.pages.push({id:parseInt(a[f].id,10)||0,file:a[f].file});const l={};r.baseLineOffset=r.lineHeight-parseInt(i.base,10);const u=n.char;for(let f=0;f<u.length;f++){const h=u[f],d=parseInt(h.id,10);let p=h.letter??h.char??String.fromCharCode(d);p==="space"&&(p=" "),l[d]=p,r.chars[p]={id:d,page:parseInt(h.page,10)||0,x:parseInt(h.x,10),y:parseInt(h.y,10),width:parseInt(h.width,10),height:parseInt(h.height,10),xOffset:parseInt(h.xoffset,10),yOffset:parseInt(h.yoffset,10),xAdvance:parseInt(h.xadvance,10),kerning:{}}}const c=n.kerning||[];for(let f=0;f<c.length;f++){const h=parseInt(c[f].first,10),d=parseInt(c[f].second,10),p=parseInt(c[f].amount,10);r.chars[l[d]].kerning[l[h]]=p}return r}},Pl={test(e){const t=e;return typeof t!="string"&&"getElementsByTagName"in t&&t.getElementsByTagName("page").length&&t.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(e){const t={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},n=e.getElementsByTagName("info")[0],r=e.getElementsByTagName("common")[0],s=e.getElementsByTagName("distanceField")[0];s&&(t.distanceField={type:s.getAttribute("fieldType"),range:parseInt(s.getAttribute("distanceRange"),10)});const i=e.getElementsByTagName("page"),o=e.getElementsByTagName("char"),a=e.getElementsByTagName("kerning");t.fontSize=parseInt(n.getAttribute("size"),10),t.fontFamily=n.getAttribute("face"),t.lineHeight=parseInt(r.getAttribute("lineHeight"),10);for(let u=0;u<i.length;u++)t.pages.push({id:parseInt(i[u].getAttribute("id"),10)||0,file:i[u].getAttribute("file")});const l={};t.baseLineOffset=t.lineHeight-parseInt(r.getAttribute("base"),10);for(let u=0;u<o.length;u++){const c=o[u],f=parseInt(c.getAttribute("id"),10);let h=c.getAttribute("letter")??c.getAttribute("char")??String.fromCharCode(f);h==="space"&&(h=" "),l[f]=h,t.chars[h]={id:f,page:parseInt(c.getAttribute("page"),10)||0,x:parseInt(c.getAttribute("x"),10),y:parseInt(c.getAttribute("y"),10),width:parseInt(c.getAttribute("width"),10),height:parseInt(c.getAttribute("height"),10),xOffset:parseInt(c.getAttribute("xoffset"),10),yOffset:parseInt(c.getAttribute("yoffset"),10),xAdvance:parseInt(c.getAttribute("xadvance"),10),kerning:{}}}for(let u=0;u<a.length;u++){const c=parseInt(a[u].getAttribute("first"),10),f=parseInt(a[u].getAttribute("second"),10),h=parseInt(a[u].getAttribute("amount"),10);t.chars[l[f]].kerning[l[c]]=h}return t}},Ml={test(e){return typeof e=="string"&&e.includes("<font>")?Pl.test(gt.get().parseXML(e)):!1},parse(e){return Pl.parse(gt.get().parseXML(e))}},Lv=[".xml",".fnt"],jv={extension:{type:Y.CacheParser,name:"cacheBitmapFont"},test:e=>e instanceof Zu,getCacheableAssets(e,t){const n={};return e.forEach(r=>{n[r]=t,n[`${r}-bitmap`]=t}),n[`${t.fontFamily}-bitmap`]=t,n}},Nv={extension:{type:Y.LoadParser,priority:qe.Normal},name:"loadBitmapFont",test(e){return Lv.includes($t.extname(e).toLowerCase())},async testParse(e){return hi.test(e)||Ml.test(e)},async parse(e,t,n){const r=hi.test(e)?hi.parse(e):Ml.parse(e),{src:s}=t,{pages:i}=r,o=[],a=r.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let f=0;f<i.length;++f){const h=i[f].file;let d=$t.join($t.dirname(s),h);d=Li(d,s),o.push({src:d,data:a})}const l=await n.load(o),u=o.map(f=>l[f.src]);return new Zu({data:r,textures:u},s)},async load(e,t){return await(await gt.get().fetch(e)).text()},async unload(e,t,n){await Promise.all(e.pages.map(r=>n.unload(r.texture.source._sourceOrigin))),e.destroy()}};class Uv{constructor(t,n=!1){this._loader=t,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=n}add(t){t.forEach(n=>{this._assetList.push(n)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;const t=[],n=Math.min(this._assetList.length,this._maxConcurrent);for(let r=0;r<n;r++)t.push(this._assetList.pop());await this._loader.load(t),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(t){this._isActive!==t&&(this._isActive=t,t&&!this._isLoading&&this._next())}}const Dv={extension:{type:Y.CacheParser,name:"cacheTextureArray"},test:e=>Array.isArray(e)&&e.every(t=>t instanceof it),getCacheableAssets:(e,t)=>{const n={};return e.forEach(r=>{t.forEach((s,i)=>{n[r+(i===0?"":i+1)]=s})}),n}};async function Qu(e){if("Image"in globalThis)return new Promise(t=>{const n=new Image;n.onload=()=>{t(!0)},n.onerror=()=>{t(!1)},n.src=e});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{const t=await(await fetch(e)).blob();await createImageBitmap(t)}catch{return!1}return!0}return!1}const Gv={extension:{type:Y.DetectionParser,priority:1},test:async()=>Qu("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async e=>[...e,"avif"],remove:async e=>e.filter(t=>t!=="avif")},Tl=["png","jpg","jpeg"],Wv={extension:{type:Y.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async e=>[...e,...Tl],remove:async e=>e.filter(t=>!Tl.includes(t))},Hv="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function Ro(e){return Hv?!1:document.createElement("video").canPlayType(e)!==""}const $v={extension:{type:Y.DetectionParser,priority:0},test:async()=>Ro("video/mp4"),add:async e=>[...e,"mp4","m4v"],remove:async e=>e.filter(t=>t!=="mp4"&&t!=="m4v")},Vv={extension:{type:Y.DetectionParser,priority:0},test:async()=>Ro("video/ogg"),add:async e=>[...e,"ogv"],remove:async e=>e.filter(t=>t!=="ogv")},qv={extension:{type:Y.DetectionParser,priority:0},test:async()=>Ro("video/webm"),add:async e=>[...e,"webm"],remove:async e=>e.filter(t=>t!=="webm")},Xv={extension:{type:Y.DetectionParser,priority:0},test:async()=>Qu("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async e=>[...e,"webp"],remove:async e=>e.filter(t=>t!=="webp")};class Yv{constructor(){this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(t,n,r)=>(this._parsersValidated=!1,t[n]=r,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(t,n){const r={promise:null,parser:null};return r.promise=(async()=>{var o,a;let s=null,i=null;if(n.loadParser&&(i=this._parserHash[n.loadParser],i||Tt(`[Assets] specified load parser "${n.loadParser}" not found while loading ${t}`)),!i){for(let l=0;l<this.parsers.length;l++){const u=this.parsers[l];if(u.load&&((o=u.test)!=null&&o.call(u,t,n,this))){i=u;break}}if(!i)return Tt(`[Assets] ${t} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}s=await i.load(t,n,this),r.parser=i;for(let l=0;l<this.parsers.length;l++){const u=this.parsers[l];u.parse&&u.parse&&await((a=u.testParse)==null?void 0:a.call(u,s,n,this))&&(s=await u.parse(s,n,this)||s,r.parser=u)}return s})(),r}async load(t,n){this._parsersValidated||this._validateParsers();let r=0;const s={},i=ns(t),o=ie(t,u=>({alias:[u],src:u})),a=o.length,l=o.map(async u=>{const c=$t.toAbsolute(u.src);if(!s[u.src])try{this.promiseCache[c]||(this.promiseCache[c]=this._getLoadPromiseAndParser(c,u)),s[u.src]=await this.promiseCache[c].promise,n&&n(++r/a)}catch(f){throw delete this.promiseCache[c],delete s[u.src],new Error(`[Loader.load] Failed to load ${c}.
${f}`)}});return await Promise.all(l),i?s[o[0].src]:s}async unload(t){const r=ie(t,s=>({alias:[s],src:s})).map(async s=>{var a,l;const i=$t.toAbsolute(s.src),o=this.promiseCache[i];if(o){const u=await o.promise;delete this.promiseCache[i],await((l=(a=o.parser)==null?void 0:a.unload)==null?void 0:l.call(a,u,s,this))}});await Promise.all(r)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(t=>t.name).reduce((t,n)=>(n.name?t[n.name]&&Tt(`[Assets] loadParser name conflict "${n.name}"`):Tt("[Assets] loadParser should have a name"),{...t,[n.name]:n}),{})}}function On(e,t){if(Array.isArray(t)){for(const n of t)if(e.startsWith(`data:${n}`))return!0;return!1}return e.startsWith(`data:${t}`)}function Bn(e,t){const n=e.split("?")[0],r=$t.extname(n).toLowerCase();return Array.isArray(t)?t.includes(r):r===t}const Kv=".json",Zv="application/json",Qv={extension:{type:Y.LoadParser,priority:qe.Low},name:"loadJson",test(e){return On(e,Zv)||Bn(e,Kv)},async load(e){return await(await gt.get().fetch(e)).json()}},Jv=".txt",tg="text/plain",eg={name:"loadTxt",extension:{type:Y.LoadParser,priority:qe.Low,name:"loadTxt"},test(e){return On(e,tg)||Bn(e,Jv)},async load(e){return await(await gt.get().fetch(e)).text()}},ng=["normal","bold","100","200","300","400","500","600","700","800","900"],rg=[".ttf",".otf",".woff",".woff2"],sg=["font/ttf","font/otf","font/woff","font/woff2"],ig=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function og(e){const t=$t.extname(e),s=$t.basename(e,t).replace(/(-|_)/g," ").toLowerCase().split(" ").map(a=>a.charAt(0).toUpperCase()+a.slice(1));let i=s.length>0;for(const a of s)if(!a.match(ig)){i=!1;break}let o=s.join(" ");return i||(o=`"${o.replace(/[\\"]/g,"\\$&")}"`),o}const ag=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function lg(e){return ag.test(e)?e:encodeURI(e)}const cg={extension:{type:Y.LoadParser,priority:qe.Low},name:"loadWebFont",test(e){return On(e,sg)||Bn(e,rg)},async load(e,t){var r,s,i;const n=gt.get().getFontFaceSet();if(n){const o=[],a=((r=t.data)==null?void 0:r.family)??og(e),l=((i=(s=t.data)==null?void 0:s.weights)==null?void 0:i.filter(c=>ng.includes(c)))??["normal"],u=t.data??{};for(let c=0;c<l.length;c++){const f=l[c],h=new FontFace(a,`url(${lg(e)})`,{...u,weight:f});await h.load(),n.add(h),o.push(h)}return xt.set(`${a}-and-url`,{url:e,fontFaces:o}),o.length===1?o[0]:o}return Tt("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(e){(Array.isArray(e)?e:[e]).forEach(t=>{xt.remove(t.family),gt.get().getFontFaceSet().delete(t)})}};function Lo(e,t=1){var r;const n=(r=Fn.RETINA_PREFIX)==null?void 0:r.exec(e);return n?parseFloat(n[1]):t}function jo(e,t,n){e.label=n,e._sourceOrigin=n;const r=new it({source:e,label:n}),s=()=>{delete t.promiseCache[n],xt.has(n)&&xt.remove(n)};return r.source.once("destroy",()=>{t.promiseCache[n]&&(Tt("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),s())}),r.once("destroy",()=>{e.destroyed||(Tt("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),s())}),r}const ug=".svg",fg="image/svg+xml",hg={extension:{type:Y.LoadParser,priority:qe.Low,name:"loadSVG"},name:"loadSVG",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(e){return On(e,fg)||Bn(e,ug)},async load(e,t,n){return t.data.parseAsGraphicsContext??this.config.parseAsGraphicsContext?pg(e):dg(e,t,n,this.config.crossOrigin)},unload(e){e.destroy(!0)}};async function dg(e,t,n,r){var x,y,g;const i=await(await gt.get().fetch(e)).blob(),o=URL.createObjectURL(i),a=new Image;a.src=o,a.crossOrigin=r,await a.decode(),URL.revokeObjectURL(o);const l=document.createElement("canvas"),u=l.getContext("2d"),c=((x=t.data)==null?void 0:x.resolution)||Lo(e),f=((y=t.data)==null?void 0:y.width)??a.width,h=((g=t.data)==null?void 0:g.height)??a.height;l.width=f*c,l.height=h*c,u.drawImage(a,0,0,f*c,h*c);const{parseAsGraphicsContext:d,...p}=t.data,m=new En({resource:l,alphaMode:"premultiply-alpha-on-upload",resolution:c,...p});return jo(m,n,e)}async function pg(e){const n=await(await gt.get().fetch(e)).text(),r=new Xt;return r.svg(n),r}const xg=`(function () {
    'use strict';

    const WHITE_PNG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=";
    async function checkImageBitmap() {
      try {
        if (typeof createImageBitmap !== "function")
          return false;
        const response = await fetch(WHITE_PNG);
        const imageBlob = await response.blob();
        const imageBitmap = await createImageBitmap(imageBlob);
        return imageBitmap.width === 1 && imageBitmap.height === 1;
      } catch (e) {
        return false;
      }
    }
    void checkImageBitmap().then((result) => {
      self.postMessage(result);
    });

})();
`;let Cn=null,Qi=class{constructor(){Cn||(Cn=URL.createObjectURL(new Blob([xg],{type:"application/javascript"}))),this.worker=new Worker(Cn)}};Qi.revokeObjectURL=function(){Cn&&(URL.revokeObjectURL(Cn),Cn=null)};const mg=`(function () {
    'use strict';

    async function loadImageBitmap(url) {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(\`[WorkerManager.loadImageBitmap] Failed to fetch \${url}: \${response.status} \${response.statusText}\`);
      }
      const imageBlob = await response.blob();
      const imageBitmap = await createImageBitmap(imageBlob);
      return imageBitmap;
    }
    self.onmessage = async (event) => {
      try {
        const imageBitmap = await loadImageBitmap(event.data.data[0]);
        self.postMessage({
          data: imageBitmap,
          uuid: event.data.uuid,
          id: event.data.id
        }, [imageBitmap]);
      } catch (e) {
        self.postMessage({
          error: e,
          uuid: event.data.uuid,
          id: event.data.id
        });
      }
    };

})();
`;let An=null;class Ju{constructor(){An||(An=URL.createObjectURL(new Blob([mg],{type:"application/javascript"}))),this.worker=new Worker(An)}}Ju.revokeObjectURL=function(){An&&(URL.revokeObjectURL(An),An=null)};let kl=0,di;class vg{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(t=>{const{worker:n}=new Qi;n.addEventListener("message",r=>{n.terminate(),Qi.revokeObjectURL(),t(r.data)})}),this._isImageBitmapSupported)}loadImageBitmap(t){return this._run("loadImageBitmap",[t])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){di===void 0&&(di=navigator.hardwareConcurrency||4);let t=this._workerPool.pop();return!t&&this._createdWorkers<di&&(this._createdWorkers++,t=new Ju().worker,t.addEventListener("message",n=>{this._complete(n.data),this._returnWorker(n.target),this._next()})),t}_returnWorker(t){this._workerPool.push(t)}_complete(t){t.error!==void 0?this._resolveHash[t.uuid].reject(t.error):this._resolveHash[t.uuid].resolve(t.data),this._resolveHash[t.uuid]=null}async _run(t,n){await this._initWorkers();const r=new Promise((s,i)=>{this._queue.push({id:t,arguments:n,resolve:s,reject:i})});return this._next(),r}_next(){if(!this._queue.length)return;const t=this._getWorker();if(!t)return;const n=this._queue.pop(),r=n.id;this._resolveHash[kl]={resolve:n.resolve,reject:n.reject},t.postMessage({data:n.arguments,uuid:kl++,id:r})}}const Il=new vg,gg=[".jpeg",".jpg",".png",".webp",".avif"],_g=["image/jpeg","image/png","image/webp","image/avif"];async function yg(e){const t=await gt.get().fetch(e);if(!t.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${e}: ${t.status} ${t.statusText}`);const n=await t.blob();return await createImageBitmap(n)}const tf={name:"loadTextures",extension:{type:Y.LoadParser,priority:qe.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(e){return On(e,_g)||Bn(e,gg)},async load(e,t,n){var i;let r=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await Il.isImageBitmapSupported()?r=await Il.loadImageBitmap(e):r=await yg(e):r=await new Promise(o=>{r=new Image,r.crossOrigin=this.config.crossOrigin,r.src=e,r.complete?o(r):r.onload=()=>{o(r)}});const s=new En({resource:r,alphaMode:"premultiply-alpha-on-upload",resolution:((i=t.data)==null?void 0:i.resolution)||Lo(e),...t.data});return jo(s,n,e)},unload(e){e.destroy(!0)}},ef=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],bg=ef.map(e=>`video/${e.substring(1)}`);function wg(e,t,n){n===void 0&&!t.startsWith("data:")?e.crossOrigin=Ag(t):n!==!1&&(e.crossOrigin=typeof n=="string"?n:"anonymous")}function Cg(e){return new Promise((t,n)=>{e.addEventListener("canplaythrough",r),e.addEventListener("error",s),e.load();function r(){i(),t()}function s(o){i(),n(o)}function i(){e.removeEventListener("canplaythrough",r),e.removeEventListener("error",s)}})}function Ag(e,t=globalThis.location){if(e.startsWith("data:"))return"";t=t||globalThis.location;const n=new URL(e,document.baseURI);return n.hostname!==t.hostname||n.port!==t.port||n.protocol!==t.protocol?"anonymous":""}const Sg={name:"loadVideo",extension:{type:Y.LoadParser,name:"loadVideo"},test(e){const t=On(e,bg),n=Bn(e,ef);return t||n},async load(e,t,n){var l,u;const r={...Xr.defaultOptions,resolution:((l=t.data)==null?void 0:l.resolution)||Lo(e),alphaMode:((u=t.data)==null?void 0:u.alphaMode)||await du(),...t.data},s=document.createElement("video"),i={preload:r.autoLoad!==!1?"auto":void 0,"webkit-playsinline":r.playsinline!==!1?"":void 0,playsinline:r.playsinline!==!1?"":void 0,muted:r.muted===!0?"":void 0,loop:r.loop===!0?"":void 0,autoplay:r.autoPlay!==!1?"":void 0};Object.keys(i).forEach(c=>{const f=i[c];f!==void 0&&s.setAttribute(c,f)}),r.muted===!0&&(s.muted=!0),wg(s,e,r.crossorigin);const o=document.createElement("source");let a;if(e.startsWith("data:"))a=e.slice(5,e.indexOf(";"));else if(!e.startsWith("blob:")){const c=e.split("?")[0].slice(e.lastIndexOf(".")+1).toLowerCase();a=Xr.MIME_TYPES[c]||`video/${c}`}return o.src=e,a&&(o.type=a),new Promise(c=>{const f=async()=>{const h=new Xr({...r,resource:s});s.removeEventListener("canplay",f),t.data.preload&&await Cg(s),c(jo(h,n,e))};s.addEventListener("canplay",f),s.appendChild(o)})},unload(e){e.destroy(!0)}},nf={extension:{type:Y.ResolveParser,name:"resolveTexture"},test:tf.test,parse:e=>{var t;return{resolution:parseFloat(((t=Fn.RETINA_PREFIX.exec(e))==null?void 0:t[1])??"1"),format:e.split(".").pop(),src:e}}},Pg={extension:{type:Y.ResolveParser,priority:-2,name:"resolveJson"},test:e=>Fn.RETINA_PREFIX.test(e)&&e.endsWith(".json"),parse:nf.parse};class Mg{constructor(){this._detections=[],this._initialized=!1,this.resolver=new Fn,this.loader=new Yv,this.cache=xt,this._backgroundLoader=new Uv(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(t={}){var i,o;if(this._initialized){Tt("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,t.defaultSearchParams&&this.resolver.setDefaultSearchParams(t.defaultSearchParams),t.basePath&&(this.resolver.basePath=t.basePath),t.bundleIdentifier&&this.resolver.setBundleIdentifier(t.bundleIdentifier),t.manifest){let a=t.manifest;typeof a=="string"&&(a=await this.load(a)),this.resolver.addManifest(a)}const n=((i=t.texturePreference)==null?void 0:i.resolution)??1,r=typeof n=="number"?[n]:n,s=await this._detectFormats({preferredFormats:(o=t.texturePreference)==null?void 0:o.format,skipDetections:t.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:s,resolution:r}}),t.preferences&&this.setPreferences(t.preferences)}add(t){this.resolver.add(t)}async load(t,n){this._initialized||await this.init();const r=ns(t),s=ie(t).map(a=>{if(typeof a!="string"){const l=this.resolver.getAlias(a);return l.some(u=>!this.resolver.hasKey(u))&&this.add(a),Array.isArray(l)?l[0]:l}return this.resolver.hasKey(a)||this.add({alias:a,src:a}),a}),i=this.resolver.resolve(s),o=await this._mapLoadToResolve(i,n);return r?o[s[0]]:o}addBundle(t,n){this.resolver.addBundle(t,n)}async loadBundle(t,n){this._initialized||await this.init();let r=!1;typeof t=="string"&&(r=!0,t=[t]);const s=this.resolver.resolveBundle(t),i={},o=Object.keys(s);let a=0,l=0;const u=()=>{n==null||n(++a/l)},c=o.map(f=>{const h=s[f];return l+=Object.keys(h).length,this._mapLoadToResolve(h,u).then(d=>{i[f]=d})});return await Promise.all(c),r?i[t[0]]:i}async backgroundLoad(t){this._initialized||await this.init(),typeof t=="string"&&(t=[t]);const n=this.resolver.resolve(t);this._backgroundLoader.add(Object.values(n))}async backgroundLoadBundle(t){this._initialized||await this.init(),typeof t=="string"&&(t=[t]);const n=this.resolver.resolveBundle(t);Object.values(n).forEach(r=>{this._backgroundLoader.add(Object.values(r))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(t){if(typeof t=="string")return xt.get(t);const n={};for(let r=0;r<t.length;r++)n[r]=xt.get(t[r]);return n}async _mapLoadToResolve(t,n){const r=[...new Set(Object.values(t))];this._backgroundLoader.active=!1;const s=await this.loader.load(r,n);this._backgroundLoader.active=!0;const i={};return r.forEach(o=>{const a=s[o.src],l=[o.src];o.alias&&l.push(...o.alias),l.forEach(u=>{i[u]=a}),xt.set(l,a)}),i}async unload(t){this._initialized||await this.init();const n=ie(t).map(s=>typeof s!="string"?s.src:s),r=this.resolver.resolve(n);await this._unloadFromResolved(r)}async unloadBundle(t){this._initialized||await this.init(),t=ie(t);const n=this.resolver.resolveBundle(t),r=Object.keys(n).map(s=>this._unloadFromResolved(n[s]));await Promise.all(r)}async _unloadFromResolved(t){const n=Object.values(t);n.forEach(r=>{xt.remove(r.src)}),await this.loader.unload(n)}async _detectFormats(t){let n=[];t.preferredFormats&&(n=Array.isArray(t.preferredFormats)?t.preferredFormats:[t.preferredFormats]);for(const r of t.detections)t.skipDetections||await r.test()?n=await r.add(n):t.skipDetections||(n=await r.remove(n));return n=n.filter((r,s)=>n.indexOf(r)===s),n}get detections(){return this._detections}setPreferences(t){this.loader.parsers.forEach(n=>{n.config&&Object.keys(n.config).filter(r=>r in t).forEach(r=>{n.config[r]=t[r]})})}}const Xn=new Mg;Jt.handleByList(Y.LoadParser,Xn.loader.parsers).handleByList(Y.ResolveParser,Xn.resolver.parsers).handleByList(Y.CacheParser,Xn.cache.parsers).handleByList(Y.DetectionParser,Xn.detections);Jt.add(Dv,Wv,Gv,Xv,$v,Vv,qv,Qv,eg,cg,hg,tf,Sg,Nv,jv,nf,Pg);const zl={loader:Y.LoadParser,resolver:Y.ResolveParser,cache:Y.CacheParser,detection:Y.DetectionParser};Jt.handle(Y.Asset,e=>{const t=e.ref;Object.entries(zl).filter(([n])=>!!t[n]).forEach(([n,r])=>Jt.add(Object.assign(t[n],{extension:t[n].extension??r})))},e=>{const t=e.ref;Object.keys(zl).filter(n=>!!t[n]).forEach(n=>Jt.remove(t[n]))});class gr extends Bt{constructor(t){t instanceof Xt&&(t={context:t});const{context:n,roundPixels:r,...s}=t||{};super({label:"Graphics",...s}),this.canBundle=!0,this.renderPipeId="graphics",this._roundPixels=0,n?this._context=n:this._context=this._ownedContext=new Xt,this._context.on("update",this.onViewUpdate,this),this.allowChildren=!1,this.roundPixels=r??!1}set context(t){t!==this._context&&(this._context.off("update",this.onViewUpdate,this),this._context=t,this._context.on("update",this.onViewUpdate,this),this.onViewUpdate())}get context(){return this._context}get bounds(){return this._context.bounds}addBounds(t){t.addBounds(this._context.bounds)}containsPoint(t){return this._context.containsPoint(t)}get roundPixels(){return!!this._roundPixels}set roundPixels(t){this._roundPixels=t?1:0}onViewUpdate(){if(this._didChangeId+=4096,this._didGraphicsUpdate=!0,this.didViewUpdate)return;this.didViewUpdate=!0;const t=this.renderGroup||this.parentRenderGroup;t&&t.onChildViewUpdate(this)}destroy(t){this._ownedContext&&!t?this._ownedContext.destroy(t):(t===!0||(t==null?void 0:t.context)===!0)&&this._context.destroy(t),this._ownedContext=null,this._context=null,super.destroy(t)}_callContextMethod(t,n){return this.context[t](...n),this}setFillStyle(...t){return this._callContextMethod("setFillStyle",t)}setStrokeStyle(...t){return this._callContextMethod("setStrokeStyle",t)}fill(...t){return this._callContextMethod("fill",t)}stroke(...t){return this._callContextMethod("stroke",t)}texture(...t){return this._callContextMethod("texture",t)}beginPath(){return this._callContextMethod("beginPath",[])}cut(){return this._callContextMethod("cut",[])}arc(...t){return this._callContextMethod("arc",t)}arcTo(...t){return this._callContextMethod("arcTo",t)}arcToSvg(...t){return this._callContextMethod("arcToSvg",t)}bezierCurveTo(...t){return this._callContextMethod("bezierCurveTo",t)}closePath(){return this._callContextMethod("closePath",[])}ellipse(...t){return this._callContextMethod("ellipse",t)}circle(...t){return this._callContextMethod("circle",t)}path(...t){return this._callContextMethod("path",t)}lineTo(...t){return this._callContextMethod("lineTo",t)}moveTo(...t){return this._callContextMethod("moveTo",t)}quadraticCurveTo(...t){return this._callContextMethod("quadraticCurveTo",t)}rect(...t){return this._callContextMethod("rect",t)}roundRect(...t){return this._callContextMethod("roundRect",t)}poly(...t){return this._callContextMethod("poly",t)}regularPoly(...t){return this._callContextMethod("regularPoly",t)}roundPoly(...t){return this._callContextMethod("roundPoly",t)}roundShape(...t){return this._callContextMethod("roundShape",t)}filletRect(...t){return this._callContextMethod("filletRect",t)}chamferRect(...t){return this._callContextMethod("chamferRect",t)}star(...t){return this._callContextMethod("star",t)}svg(...t){return this._callContextMethod("svg",t)}restore(...t){return this._callContextMethod("restore",t)}save(){return this._callContextMethod("save",[])}getTransform(){return this.context.getTransform()}resetTransform(){return this._callContextMethod("resetTransform",[])}rotateTransform(...t){return this._callContextMethod("rotate",t)}scaleTransform(...t){return this._callContextMethod("scale",t)}setTransform(...t){return this._callContextMethod("setTransform",t)}transform(...t){return this._callContextMethod("transform",t)}translateTransform(...t){return this._callContextMethod("translate",t)}clear(){return this._callContextMethod("clear",[])}get fillStyle(){return this._context.fillStyle}set fillStyle(t){this._context.fillStyle=t}get strokeStyle(){return this._context.strokeStyle}set strokeStyle(t){this._context.strokeStyle=t}clone(t=!1){return t?new gr(this._context.clone()):(this._ownedContext=null,new gr(this._context))}lineStyle(t,n,r){ut(ct,"Graphics#lineStyle is no longer needed. Use Graphics#setStrokeStyle to set the stroke style.");const s={};return t&&(s.width=t),n&&(s.color=n),r&&(s.alpha=r),this.context.strokeStyle=s,this}beginFill(t,n){ut(ct,"Graphics#beginFill is no longer needed. Use Graphics#fill to fill the shape with the desired style.");const r={};return t&&(r.color=t),n&&(r.alpha=n),this.context.fillStyle=r,this}endFill(){ut(ct,"Graphics#endFill is no longer needed. Use Graphics#fill to fill the shape with the desired style."),this.context.fill();const t=this.context.strokeStyle;return(t.width!==Xt.defaultStrokeStyle.width||t.color!==Xt.defaultStrokeStyle.color||t.alpha!==Xt.defaultStrokeStyle.alpha)&&this.context.stroke(),this}drawCircle(...t){return ut(ct,"Graphics#drawCircle has been renamed to Graphics#circle"),this._callContextMethod("circle",t)}drawEllipse(...t){return ut(ct,"Graphics#drawEllipse has been renamed to Graphics#ellipse"),this._callContextMethod("ellipse",t)}drawPolygon(...t){return ut(ct,"Graphics#drawPolygon has been renamed to Graphics#poly"),this._callContextMethod("poly",t)}drawRect(...t){return ut(ct,"Graphics#drawRect has been renamed to Graphics#rect"),this._callContextMethod("rect",t)}drawRoundedRect(...t){return ut(ct,"Graphics#drawRoundedRect has been renamed to Graphics#roundRect"),this._callContextMethod("roundRect",t)}drawStar(...t){return ut(ct,"Graphics#drawStar has been renamed to Graphics#star"),this._callContextMethod("star",t)}}Jt.add(Bp,Rp);function Tg(e,t,n){var r={},s=r.noTrailing,i=s===void 0?!1:s,o=r.noLeading,a=o===void 0?!1:o,l=r.debounceMode,u=l===void 0?void 0:l,c,f=!1,h=0;function d(){c&&clearTimeout(c)}function p(x){var y=x||{},g=y.upcomingOnly,v=g===void 0?!1:g;d(),f=!v}function m(){for(var x=arguments.length,y=new Array(x),g=0;g<x;g++)y[g]=arguments[g];var v=this,b=Date.now()-h;if(f)return;function k(){h=Date.now(),t.apply(v,y)}function P(){c=void 0}!a&&u&&!c&&k(),d(),u===void 0&&b>e?a?(h=Date.now(),i||(c=setTimeout(u?P:k,e))):k():i!==!0&&(c=setTimeout(u?P:k,u===void 0?e-b:e))}return m.cancel=p,m}let No=[],Ji=!1,pi=function(){Ji||(Ji=!0,window.requestAnimationFrame?window.requestAnimationFrame(El):setTimeout(El,66))},El=function(){No.forEach(function(e){e(this)}),Ji=!1},kg=function(e){e&&No.push(e)};class Ig{constructor(t,n){this.frameRate=n,No.length||window.addEventListener("resize",Tg(this.frameRate,pi)),kg(t)}init(){pi()}destroy(){window.removeEventListener("resize",pi)}}const Wn=window.devicePixelRatio;class zg{constructor(t){this.stage=t.stage,this.size=new vt(window.innerWidth*Wn,window.innerHeight*Wn),this.mouse=new vt(0,0),this.padding=new vt,this.vertex=t.vertex,this.init(t.fragment,this.vertex,t.uniforms||{}),this.fill(),this.resize(),this.bind()}init(t,n,r){const s=hr.from({fragment:t,vertex:n});this.filter=new Pu({glProgram:s,resolution:Wn,resources:{localUniforms:Object.assign({u_resolution:{value:this.size,type:"vec2<f32>"},u_mouse:{value:this.u_mouse,type:"vec2<f32>"}},r),timeUniforms:{u_time:{value:0,type:"f32"},u_frame:{value:0,type:"f32"}}}})}fill(){this.background=new gr,this.background.rect(0,0,window.innerWidth,window.innerHeight),this.background.fill({color:0}),this.stage.addChild(this.background)}bind(){this.ResizeHelper=new Ig(t=>{this.resize()})}setFragment(t){const n=hr.from({fragment:t,vertex:this.vertex});this.filter.glProgram=n}resize(){this.size.set(window.innerWidth*Wn,window.innerHeight*Wn),this.filter.resources.localUniforms.uniforms.u_resolution=this.size,this.background.width=this.size.x,this.background.height=this.size.y}getFilter(){return this.filter}destroy(){this.filter.destroy(),this.ResizeHelper.destroy()}}var Eg=`precision highp float;

in vec2 aPosition;
out vec2 uPosition;
out vec2 vTextureCoord;

out vec4 uSize;
out vec4 uOffset;

uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
    uPosition = aPosition;
    uSize = uInputSize;
    uOffset = uOutputFrame;
}`;const rf=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},Fg={__name:"Shader",props:{shader:String},setup(e){re("WEBGL.NANONUM.COM");const t=e,n=re(!1);let r;const s=a=>{r.getFilter().resources.timeUniforms.uniforms.u_time+=.01*a.deltaTime},i=a=>{r.getFilter().resources.localUniforms.uniforms.u_mouse=[a.clientX,a.clientY]};async function o(){window.background=new To,await window.background.init({id:"canvas_background",background:"#000",backgroundAlpha:0,resizeTo:window,resolution:window.devicePixelRatio});const a=t.shader??`#version 300 es
    precision highp float;
    uniform float u_time;// 0-1
    out vec4 fragColor;
    void main(){
      fragColor = vec4(0.0, 0.0, pow(sin(u_time * 4.41) * 0.5 + 0.5, .4), 1.0);
    }`;r=new zg({stage:window.background.stage,fragment:a,vertex:Eg,uniforms:{}}),window.background.stage.filters=[r.getFilter()],window.background.ticker.maxFPS=60,window.background.ticker.add(s),window.background.canvas.setAttribute("id","canvas_app"),document.body.appendChild(window.background.canvas),window.addEventListener("mousemove",i),n.value=!0}return zn(()=>{o(t.shader)}),ps(()=>{n.value=!1,window.background.ticker&&window.background.ticker.remove(s),window.background&&window.background.destroy({removeView:!0,stageOptions:{children:!0,texture:!0,baseTexture:!0}})}),xs(()=>{r.destroy(),window.background=null,window.removeEventListener("mousemove",i)}),wn(()=>t.shader,()=>{n.value&&r.setFragment(t.shader)}),(a,l)=>null}},Og=rf(Fg,[["__scopeId","data-v-858c7815"]]);var Bg=`precision highp float;

in vec2 aPosition;
out vec2 uPosition;
out vec2 vTextureCoord;

out vec4 uSize;
out vec4 uOffset;

uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
    uPosition = aPosition;
    uSize = uInputSize;
    uOffset = uOutputFrame;
}`;const Fl=(e,t)=>{e.x=t.x,e.y=t.y,e.width=t.width,e.height=t.height,e.top=t.top,e.right=t.right,e.bottom=t.bottom,e.left=t.left},Ol=e=>({x:e.x,y:e.y,width:e.width,height:e.height,top:e.top,right:e.right,bottom:e.bottom,left:e.left}),Rg={class:"dev"},Lg=["width","height"],jg={__name:"Thumbnail",props:{shader:String,alt:String,saturation:{type:Number,default:1},show:Boolean,selected:Boolean,active:Boolean,width:Number,height:Number,className:String},setup(e){const t=e,n=re();let r,s;const i={};let o;const a=new Tn,l=c=>{n.value&&(Fl(i,Ol(n.value.getBoundingClientRect())),r.x=i.x,r.y=i.y,a.x=i.x,a.y=i.y,a.width=i.width,a.height=i.height),(t.active===!0||!t.selected)&&(o.resources.timeUniforms.uniforms.u_time+=.01*c.deltaTime),o.resources.localUniforms.uniforms.u_position.y=i.y,o.resources.localUniforms.uniforms.u_position.x=i.x,o.resources.localUniforms.uniforms.u_posteffect_mix=!t.selected||t.active?1:t.saturation},u=c=>{const f=`
    vec2 aPosition = vec2(
      (gl_FragCoord.x - u_position.x) * u_resolution.x / u_posteffect_viewport.x  ,
      (gl_FragCoord.y - (u_resolution.y - u_position.y ) + u_posteffect_viewport.x) * u_resolution.y / u_posteffect_viewport.x  
    );`;let h=c;return h=h.replace(/gl_FragCoord/ig,"aPosition"),h=h.replace(/uniform[\s]*vec2[\s]*u_resolution;/ig,`
    uniform vec2 u_resolution;
    uniform vec2 u_position;
    uniform vec2 u_posteffect_viewport;
    uniform float u_posteffect_mix;
  `),h=h.replace(/void main\([void]*\)[\s]*{/ig,`void main(){${f}`),h=h.replace(/.*}$/,"fragColor.rgb=mix(vec3(min(1.0,fragColor.r+fragColor.g+fragColor.b))*0.3,fragColor.rgb,u_posteffect_mix);}"),h};return zn(async()=>{await Xn.load("./vite.svg"),Fl(i,Ol(n.value.getBoundingClientRect())),o=new Pu({glProgram:hr.from({fragment:u(t.shader),vertex:Bg}),resolution:1,resources:{localUniforms:{u_resolution:{value:new vt(window.innerHeight,window.innerHeight),type:"vec2<f32>"},u_position:{value:new vt(0,0),type:"vec2<f32>"},u_posteffect_viewport:{value:new vt(i.width,i.height),type:"vec2<f32>"},u_posteffect_mix:{value:0,type:"f32"}},timeUniforms:{u_time:{value:0,type:"f32"}}}}),a.x=i.x,a.y=i.y,a.width=i.width,a.height=i.height,r=new gr,s=r.circle(i.width/2,i.width/2,i.width/2),r.fill({color:0}),a.mask=r,a.filters=[o],window.ui.stage.addChild(a),window.ui.stage.addChild(r),o.resources.localUniforms.uniforms.u_position.y=i.y,o.resources.localUniforms.uniforms.u_position.x=i.x,window.ui.ticker&&window.ui.ticker.add(l),window.addEventListener("resize",c=>{o.resources.localUniforms.uniforms.u_resolution.x=window.innerHeight,o.resources.localUniforms.uniforms.u_resolution.y=window.innerHeight,s.x=i.width/2,s.y=i.width/2,s.width=i.width,s.height=i.height,a.width=i.width,a.height=i.height,console.log(i.width)})}),wn(()=>t.show,c=>{a.visible=c}),xs(()=>{window.ui.ticker&&window.ui.ticker.remove(l),a.destroy()}),(c,f)=>(me(),Oe(Lt,null,[se("div",Rg,Dr(e.active),1),se("div",{class:_r("js-nnfxline"),ref_key:"el",ref:n,width:e.width,height:e.height},null,8,Lg)],64))}},Ng=rf(jg,[["__scopeId","data-v-ddf272e1"]]);var sf={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},Uo={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},Ug=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],is={CSS:{},springs:{}};function _e(e,t,n){return Math.min(Math.max(e,t),n)}function sr(e,t){return e.indexOf(t)>-1}function xi(e,t){return e.apply(null,t)}var W={arr:function(e){return Array.isArray(e)},obj:function(e){return sr(Object.prototype.toString.call(e),"Object")},pth:function(e){return W.obj(e)&&e.hasOwnProperty("totalLength")},svg:function(e){return e instanceof SVGElement},inp:function(e){return e instanceof HTMLInputElement},dom:function(e){return e.nodeType||W.svg(e)},str:function(e){return typeof e=="string"},fnc:function(e){return typeof e=="function"},und:function(e){return typeof e>"u"},nil:function(e){return W.und(e)||e===null},hex:function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)},rgb:function(e){return/^rgb/.test(e)},hsl:function(e){return/^hsl/.test(e)},col:function(e){return W.hex(e)||W.rgb(e)||W.hsl(e)},key:function(e){return!sf.hasOwnProperty(e)&&!Uo.hasOwnProperty(e)&&e!=="targets"&&e!=="keyframes"}};function of(e){var t=/\(([^)]+)\)/.exec(e);return t?t[1].split(",").map(function(n){return parseFloat(n)}):[]}function af(e,t){var n=of(e),r=_e(W.und(n[0])?1:n[0],.1,100),s=_e(W.und(n[1])?100:n[1],.1,100),i=_e(W.und(n[2])?10:n[2],.1,100),o=_e(W.und(n[3])?0:n[3],.1,100),a=Math.sqrt(s/r),l=i/(2*Math.sqrt(s*r)),u=l<1?a*Math.sqrt(1-l*l):0,c=1,f=l<1?(l*a+-o)/u:-o+a;function h(p){var m=t?t*p/1e3:p;return l<1?m=Math.exp(-m*l*a)*(c*Math.cos(u*m)+f*Math.sin(u*m)):m=(c+f*m)*Math.exp(-m*a),p===0||p===1?p:1-m}function d(){var p=is.springs[e];if(p)return p;for(var m=1/6,x=0,y=0;;)if(x+=m,h(x)===1){if(y++,y>=16)break}else y=0;var g=x*m*1e3;return is.springs[e]=g,g}return t?h:d}function Dg(e){return e===void 0&&(e=10),function(t){return Math.ceil(_e(t,1e-6,1)*e)*(1/e)}}var Gg=function(){var e=11,t=1/(e-1);function n(c,f){return 1-3*f+3*c}function r(c,f){return 3*f-6*c}function s(c){return 3*c}function i(c,f,h){return((n(f,h)*c+r(f,h))*c+s(f))*c}function o(c,f,h){return 3*n(f,h)*c*c+2*r(f,h)*c+s(f)}function a(c,f,h,d,p){var m,x,y=0;do x=f+(h-f)/2,m=i(x,d,p)-c,m>0?h=x:f=x;while(Math.abs(m)>1e-7&&++y<10);return x}function l(c,f,h,d){for(var p=0;p<4;++p){var m=o(f,h,d);if(m===0)return f;var x=i(f,h,d)-c;f-=x/m}return f}function u(c,f,h,d){if(!(0<=c&&c<=1&&0<=h&&h<=1))return;var p=new Float32Array(e);if(c!==f||h!==d)for(var m=0;m<e;++m)p[m]=i(m*t,c,h);function x(y){for(var g=0,v=1,b=e-1;v!==b&&p[v]<=y;++v)g+=t;--v;var k=(y-p[v])/(p[v+1]-p[v]),P=g+k*t,O=o(P,c,h);return O>=.001?l(y,P,c,h):O===0?P:a(y,g,g+t,c,h)}return function(y){return c===f&&h===d||y===0||y===1?y:i(x(y),f,d)}}return u}(),lf=function(){var e={linear:function(){return function(r){return r}}},t={Sine:function(){return function(r){return 1-Math.cos(r*Math.PI/2)}},Expo:function(){return function(r){return r?Math.pow(2,10*r-10):0}},Circ:function(){return function(r){return 1-Math.sqrt(1-r*r)}},Back:function(){return function(r){return r*r*(3*r-2)}},Bounce:function(){return function(r){for(var s,i=4;r<((s=Math.pow(2,--i))-1)/11;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((s*3-2)/22-r,2)}},Elastic:function(r,s){r===void 0&&(r=1),s===void 0&&(s=.5);var i=_e(r,1,10),o=_e(s,.1,2);return function(a){return a===0||a===1?a:-i*Math.pow(2,10*(a-1))*Math.sin((a-1-o/(Math.PI*2)*Math.asin(1/i))*(Math.PI*2)/o)}}},n=["Quad","Cubic","Quart","Quint"];return n.forEach(function(r,s){t[r]=function(){return function(i){return Math.pow(i,s+2)}}}),Object.keys(t).forEach(function(r){var s=t[r];e["easeIn"+r]=s,e["easeOut"+r]=function(i,o){return function(a){return 1-s(i,o)(1-a)}},e["easeInOut"+r]=function(i,o){return function(a){return a<.5?s(i,o)(a*2)/2:1-s(i,o)(a*-2+2)/2}},e["easeOutIn"+r]=function(i,o){return function(a){return a<.5?(1-s(i,o)(1-a*2))/2:(s(i,o)(a*2-1)+1)/2}}}),e}();function Do(e,t){if(W.fnc(e))return e;var n=e.split("(")[0],r=lf[n],s=of(e);switch(n){case"spring":return af(e,t);case"cubicBezier":return xi(Gg,s);case"steps":return xi(Dg,s);default:return xi(r,s)}}function cf(e){try{var t=document.querySelectorAll(e);return t}catch{return}}function Cs(e,t){for(var n=e.length,r=arguments.length>=2?arguments[1]:void 0,s=[],i=0;i<n;i++)if(i in e){var o=e[i];t.call(r,o,i,e)&&s.push(o)}return s}function As(e){return e.reduce(function(t,n){return t.concat(W.arr(n)?As(n):n)},[])}function Bl(e){return W.arr(e)?e:(W.str(e)&&(e=cf(e)||e),e instanceof NodeList||e instanceof HTMLCollection?[].slice.call(e):[e])}function Go(e,t){return e.some(function(n){return n===t})}function Wo(e){var t={};for(var n in e)t[n]=e[n];return t}function to(e,t){var n=Wo(e);for(var r in e)n[r]=t.hasOwnProperty(r)?t[r]:e[r];return n}function Ss(e,t){var n=Wo(e);for(var r in t)n[r]=W.und(e[r])?t[r]:e[r];return n}function Wg(e){var t=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e);return t?"rgba("+t[1]+",1)":e}function Hg(e){var t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,n=e.replace(t,function(a,l,u,c){return l+l+u+u+c+c}),r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n),s=parseInt(r[1],16),i=parseInt(r[2],16),o=parseInt(r[3],16);return"rgba("+s+","+i+","+o+",1)"}function $g(e){var t=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),n=parseInt(t[1],10)/360,r=parseInt(t[2],10)/100,s=parseInt(t[3],10)/100,i=t[4]||1;function o(h,d,p){return p<0&&(p+=1),p>1&&(p-=1),p<1/6?h+(d-h)*6*p:p<1/2?d:p<2/3?h+(d-h)*(2/3-p)*6:h}var a,l,u;if(r==0)a=l=u=s;else{var c=s<.5?s*(1+r):s+r-s*r,f=2*s-c;a=o(f,c,n+1/3),l=o(f,c,n),u=o(f,c,n-1/3)}return"rgba("+a*255+","+l*255+","+u*255+","+i+")"}function Vg(e){if(W.rgb(e))return Wg(e);if(W.hex(e))return Hg(e);if(W.hsl(e))return $g(e)}function Se(e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);if(t)return t[1]}function qg(e){if(sr(e,"translate")||e==="perspective")return"px";if(sr(e,"rotate")||sr(e,"skew"))return"deg"}function eo(e,t){return W.fnc(e)?e(t.target,t.id,t.total):e}function ye(e,t){return e.getAttribute(t)}function Ho(e,t,n){var r=Se(t);if(Go([n,"deg","rad","turn"],r))return t;var s=is.CSS[t+n];if(!W.und(s))return s;var i=100,o=document.createElement(e.tagName),a=e.parentNode&&e.parentNode!==document?e.parentNode:document.body;a.appendChild(o),o.style.position="absolute",o.style.width=i+n;var l=i/o.offsetWidth;a.removeChild(o);var u=l*parseFloat(t);return is.CSS[t+n]=u,u}function uf(e,t,n){if(t in e.style){var r=t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),s=e.style[t]||getComputedStyle(e).getPropertyValue(r)||"0";return n?Ho(e,s,n):s}}function $o(e,t){if(W.dom(e)&&!W.inp(e)&&(!W.nil(ye(e,t))||W.svg(e)&&e[t]))return"attribute";if(W.dom(e)&&Go(Ug,t))return"transform";if(W.dom(e)&&t!=="transform"&&uf(e,t))return"css";if(e[t]!=null)return"object"}function ff(e){if(W.dom(e)){for(var t=e.style.transform||"",n=/(\w+)\(([^)]*)\)/g,r=new Map,s;s=n.exec(t);)r.set(s[1],s[2]);return r}}function Xg(e,t,n,r){var s=sr(t,"scale")?1:0+qg(t),i=ff(e).get(t)||s;return n&&(n.transforms.list.set(t,i),n.transforms.last=t),r?Ho(e,i,r):i}function Vo(e,t,n,r){switch($o(e,t)){case"transform":return Xg(e,t,r,n);case"css":return uf(e,t,n);case"attribute":return ye(e,t);default:return e[t]||0}}function qo(e,t){var n=/^(\*=|\+=|-=)/.exec(e);if(!n)return e;var r=Se(e)||0,s=parseFloat(t),i=parseFloat(e.replace(n[0],""));switch(n[0][0]){case"+":return s+i+r;case"-":return s-i+r;case"*":return s*i+r}}function hf(e,t){if(W.col(e))return Vg(e);if(/\s/g.test(e))return e;var n=Se(e),r=n?e.substr(0,e.length-n.length):e;return t?r+t:r}function Xo(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function Yg(e){return Math.PI*2*ye(e,"r")}function Kg(e){return ye(e,"width")*2+ye(e,"height")*2}function Zg(e){return Xo({x:ye(e,"x1"),y:ye(e,"y1")},{x:ye(e,"x2"),y:ye(e,"y2")})}function df(e){for(var t=e.points,n=0,r,s=0;s<t.numberOfItems;s++){var i=t.getItem(s);s>0&&(n+=Xo(r,i)),r=i}return n}function Qg(e){var t=e.points;return df(e)+Xo(t.getItem(t.numberOfItems-1),t.getItem(0))}function pf(e){if(e.getTotalLength)return e.getTotalLength();switch(e.tagName.toLowerCase()){case"circle":return Yg(e);case"rect":return Kg(e);case"line":return Zg(e);case"polyline":return df(e);case"polygon":return Qg(e)}}function Jg(e){var t=pf(e);return e.setAttribute("stroke-dasharray",t),t}function t2(e){for(var t=e.parentNode;W.svg(t)&&W.svg(t.parentNode);)t=t.parentNode;return t}function xf(e,t){var n=t||{},r=n.el||t2(e),s=r.getBoundingClientRect(),i=ye(r,"viewBox"),o=s.width,a=s.height,l=n.viewBox||(i?i.split(" "):[0,0,o,a]);return{el:r,viewBox:l,x:l[0]/1,y:l[1]/1,w:o,h:a,vW:l[2],vH:l[3]}}function e2(e,t){var n=W.str(e)?cf(e)[0]:e,r=t||100;return function(s){return{property:s,el:n,svg:xf(n),totalLength:pf(n)*(r/100)}}}function n2(e,t,n){function r(c){c===void 0&&(c=0);var f=t+c>=1?t+c:0;return e.el.getPointAtLength(f)}var s=xf(e.el,e.svg),i=r(),o=r(-1),a=r(1),l=n?1:s.w/s.vW,u=n?1:s.h/s.vH;switch(e.property){case"x":return(i.x-s.x)*l;case"y":return(i.y-s.y)*u;case"angle":return Math.atan2(a.y-o.y,a.x-o.x)*180/Math.PI}}function Rl(e,t){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,r=hf(W.pth(e)?e.totalLength:e,t)+"";return{original:r,numbers:r.match(n)?r.match(n).map(Number):[0],strings:W.str(e)||t?r.split(n):[]}}function Yo(e){var t=e?As(W.arr(e)?e.map(Bl):Bl(e)):[];return Cs(t,function(n,r,s){return s.indexOf(n)===r})}function mf(e){var t=Yo(e);return t.map(function(n,r){return{target:n,id:r,total:t.length,transforms:{list:ff(n)}}})}function r2(e,t){var n=Wo(t);if(/^spring/.test(n.easing)&&(n.duration=af(n.easing)),W.arr(e)){var r=e.length,s=r===2&&!W.obj(e[0]);s?e={value:e}:W.fnc(t.duration)||(n.duration=t.duration/r)}var i=W.arr(e)?e:[e];return i.map(function(o,a){var l=W.obj(o)&&!W.pth(o)?o:{value:o};return W.und(l.delay)&&(l.delay=a?0:t.delay),W.und(l.endDelay)&&(l.endDelay=a===i.length-1?t.endDelay:0),l}).map(function(o){return Ss(o,n)})}function s2(e){for(var t=Cs(As(e.map(function(i){return Object.keys(i)})),function(i){return W.key(i)}).reduce(function(i,o){return i.indexOf(o)<0&&i.push(o),i},[]),n={},r=function(i){var o=t[i];n[o]=e.map(function(a){var l={};for(var u in a)W.key(u)?u==o&&(l.value=a[u]):l[u]=a[u];return l})},s=0;s<t.length;s++)r(s);return n}function i2(e,t){var n=[],r=t.keyframes;r&&(t=Ss(s2(r),t));for(var s in t)W.key(s)&&n.push({name:s,tweens:r2(t[s],e)});return n}function o2(e,t){var n={};for(var r in e){var s=eo(e[r],t);W.arr(s)&&(s=s.map(function(i){return eo(i,t)}),s.length===1&&(s=s[0])),n[r]=s}return n.duration=parseFloat(n.duration),n.delay=parseFloat(n.delay),n}function a2(e,t){var n;return e.tweens.map(function(r){var s=o2(r,t),i=s.value,o=W.arr(i)?i[1]:i,a=Se(o),l=Vo(t.target,e.name,a,t),u=n?n.to.original:l,c=W.arr(i)?i[0]:u,f=Se(c)||Se(l),h=a||f;return W.und(o)&&(o=u),s.from=Rl(c,h),s.to=Rl(qo(o,c),h),s.start=n?n.end:0,s.end=s.start+s.delay+s.duration+s.endDelay,s.easing=Do(s.easing,s.duration),s.isPath=W.pth(i),s.isPathTargetInsideSVG=s.isPath&&W.svg(t.target),s.isColor=W.col(s.from.original),s.isColor&&(s.round=1),n=s,s})}var vf={css:function(e,t,n){return e.style[t]=n},attribute:function(e,t,n){return e.setAttribute(t,n)},object:function(e,t,n){return e[t]=n},transform:function(e,t,n,r,s){if(r.list.set(t,n),t===r.last||s){var i="";r.list.forEach(function(o,a){i+=a+"("+o+") "}),e.style.transform=i}}};function gf(e,t){var n=mf(e);n.forEach(function(r){for(var s in t){var i=eo(t[s],r),o=r.target,a=Se(i),l=Vo(o,s,a,r),u=a||Se(l),c=qo(hf(i,u),l),f=$o(o,s);vf[f](o,s,c,r.transforms,!0)}})}function l2(e,t){var n=$o(e.target,t.name);if(n){var r=a2(t,e),s=r[r.length-1];return{type:n,property:t.name,animatable:e,tweens:r,duration:s.end,delay:r[0].delay,endDelay:s.endDelay}}}function c2(e,t){return Cs(As(e.map(function(n){return t.map(function(r){return l2(n,r)})})),function(n){return!W.und(n)})}function _f(e,t){var n=e.length,r=function(i){return i.timelineOffset?i.timelineOffset:0},s={};return s.duration=n?Math.max.apply(Math,e.map(function(i){return r(i)+i.duration})):t.duration,s.delay=n?Math.min.apply(Math,e.map(function(i){return r(i)+i.delay})):t.delay,s.endDelay=n?s.duration-Math.max.apply(Math,e.map(function(i){return r(i)+i.duration-i.endDelay})):t.endDelay,s}var Ll=0;function u2(e){var t=to(sf,e),n=to(Uo,e),r=i2(n,e),s=mf(e.targets),i=c2(s,r),o=_f(i,n),a=Ll;return Ll++,Ss(t,{id:a,children:[],animatables:s,animations:i,duration:o.duration,delay:o.delay,endDelay:o.endDelay})}var oe=[],yf=function(){var e;function t(){!e&&(!jl()||!_t.suspendWhenDocumentHidden)&&oe.length>0&&(e=requestAnimationFrame(n))}function n(s){for(var i=oe.length,o=0;o<i;){var a=oe[o];a.paused?(oe.splice(o,1),i--):(a.tick(s),o++)}e=o>0?requestAnimationFrame(n):void 0}function r(){_t.suspendWhenDocumentHidden&&(jl()?e=cancelAnimationFrame(e):(oe.forEach(function(s){return s._onDocumentVisibility()}),yf()))}return typeof document<"u"&&document.addEventListener("visibilitychange",r),t}();function jl(){return!!document&&document.hidden}function _t(e){e===void 0&&(e={});var t=0,n=0,r=0,s,i=0,o=null;function a(g){var v=window.Promise&&new Promise(function(b){return o=b});return g.finished=v,v}var l=u2(e);a(l);function u(){var g=l.direction;g!=="alternate"&&(l.direction=g!=="normal"?"normal":"reverse"),l.reversed=!l.reversed,s.forEach(function(v){return v.reversed=l.reversed})}function c(g){return l.reversed?l.duration-g:g}function f(){t=0,n=c(l.currentTime)*(1/_t.speed)}function h(g,v){v&&v.seek(g-v.timelineOffset)}function d(g){if(l.reversePlayback)for(var b=i;b--;)h(g,s[b]);else for(var v=0;v<i;v++)h(g,s[v])}function p(g){for(var v=0,b=l.animations,k=b.length;v<k;){var P=b[v],O=P.animatable,I=P.tweens,S=I.length-1,A=I[S];S&&(A=Cs(I,function(It){return g<It.end})[0]||A);for(var X=_e(g-A.start-A.delay,0,A.duration)/A.duration,j=isNaN(X)?1:A.easing(X),R=A.to.strings,U=A.round,rt=[],Q=A.to.numbers.length,Z=void 0,nt=0;nt<Q;nt++){var D=void 0,V=A.to.numbers[nt],Vt=A.from.numbers[nt]||0;A.isPath?D=n2(A.value,j*V,A.isPathTargetInsideSVG):D=Vt+j*(V-Vt),U&&(A.isColor&&nt>2||(D=Math.round(D*U)/U)),rt.push(D)}var tt=R.length;if(!tt)Z=rt[0];else{Z=R[0];for(var kt=0;kt<tt;kt++){R[kt];var fe=R[kt+1],te=rt[kt];isNaN(te)||(fe?Z+=te+fe:Z+=te+" ")}}vf[P.type](O.target,P.property,Z,O.transforms),P.currentValue=Z,v++}}function m(g){l[g]&&!l.passThrough&&l[g](l)}function x(){l.remaining&&l.remaining!==!0&&l.remaining--}function y(g){var v=l.duration,b=l.delay,k=v-l.endDelay,P=c(g);l.progress=_e(P/v*100,0,100),l.reversePlayback=P<l.currentTime,s&&d(P),!l.began&&l.currentTime>0&&(l.began=!0,m("begin")),!l.loopBegan&&l.currentTime>0&&(l.loopBegan=!0,m("loopBegin")),P<=b&&l.currentTime!==0&&p(0),(P>=k&&l.currentTime!==v||!v)&&p(v),P>b&&P<k?(l.changeBegan||(l.changeBegan=!0,l.changeCompleted=!1,m("changeBegin")),m("change"),p(P)):l.changeBegan&&(l.changeCompleted=!0,l.changeBegan=!1,m("changeComplete")),l.currentTime=_e(P,0,v),l.began&&m("update"),g>=v&&(n=0,x(),l.remaining?(t=r,m("loopComplete"),l.loopBegan=!1,l.direction==="alternate"&&u()):(l.paused=!0,l.completed||(l.completed=!0,m("loopComplete"),m("complete"),!l.passThrough&&"Promise"in window&&(o(),a(l)))))}return l.reset=function(){var g=l.direction;l.passThrough=!1,l.currentTime=0,l.progress=0,l.paused=!0,l.began=!1,l.loopBegan=!1,l.changeBegan=!1,l.completed=!1,l.changeCompleted=!1,l.reversePlayback=!1,l.reversed=g==="reverse",l.remaining=l.loop,s=l.children,i=s.length;for(var v=i;v--;)l.children[v].reset();(l.reversed&&l.loop!==!0||g==="alternate"&&l.loop===1)&&l.remaining++,p(l.reversed?l.duration:0)},l._onDocumentVisibility=f,l.set=function(g,v){return gf(g,v),l},l.tick=function(g){r=g,t||(t=r),y((r+(n-t))*_t.speed)},l.seek=function(g){y(c(g))},l.pause=function(){l.paused=!0,f()},l.play=function(){l.paused&&(l.completed&&l.reset(),l.paused=!1,oe.push(l),f(),yf())},l.reverse=function(){u(),l.completed=!l.reversed,f()},l.restart=function(){l.reset(),l.play()},l.remove=function(g){var v=Yo(g);bf(v,l)},l.reset(),l.autoplay&&l.play(),l}function Nl(e,t){for(var n=t.length;n--;)Go(e,t[n].animatable.target)&&t.splice(n,1)}function bf(e,t){var n=t.animations,r=t.children;Nl(e,n);for(var s=r.length;s--;){var i=r[s],o=i.animations;Nl(e,o),!o.length&&!i.children.length&&r.splice(s,1)}!n.length&&!r.length&&t.pause()}function f2(e){for(var t=Yo(e),n=oe.length;n--;){var r=oe[n];bf(t,r)}}function h2(e,t){t===void 0&&(t={});var n=t.direction||"normal",r=t.easing?Do(t.easing):null,s=t.grid,i=t.axis,o=t.from||0,a=o==="first",l=o==="center",u=o==="last",c=W.arr(e),f=parseFloat(c?e[0]:e),h=c?parseFloat(e[1]):0,d=Se(c?e[1]:e)||0,p=t.start||0+(c?f:0),m=[],x=0;return function(y,g,v){if(a&&(o=0),l&&(o=(v-1)/2),u&&(o=v-1),!m.length){for(var b=0;b<v;b++){if(!s)m.push(Math.abs(o-b));else{var k=l?(s[0]-1)/2:o%s[0],P=l?(s[1]-1)/2:Math.floor(o/s[0]),O=b%s[0],I=Math.floor(b/s[0]),S=k-O,A=P-I,X=Math.sqrt(S*S+A*A);i==="x"&&(X=-S),i==="y"&&(X=-A),m.push(X)}x=Math.max.apply(Math,m)}r&&(m=m.map(function(R){return r(R/x)*x})),n==="reverse"&&(m=m.map(function(R){return i?R<0?R*-1:-R:Math.abs(x-R)}))}var j=c?(h-f)/x:f;return p+j*(Math.round(m[g]*100)/100)+d}}function d2(e){e===void 0&&(e={});var t=_t(e);return t.duration=0,t.add=function(n,r){var s=oe.indexOf(t),i=t.children;s>-1&&oe.splice(s,1);function o(h){h.passThrough=!0}for(var a=0;a<i.length;a++)o(i[a]);var l=Ss(n,to(Uo,e));l.targets=l.targets||e.targets;var u=t.duration;l.autoplay=!1,l.direction=t.direction,l.timelineOffset=W.und(r)?u:qo(r,u),o(t),t.seek(l.timelineOffset);var c=_t(l);o(c),i.push(c);var f=_f(i,e);return t.delay=f.delay,t.endDelay=f.endDelay,t.duration=f.duration,t.seek(0),t.reset(),t.autoplay&&t.play(),t},t}_t.version="3.2.1";_t.speed=1;_t.suspendWhenDocumentHidden=!0;_t.running=oe;_t.remove=f2;_t.get=Vo;_t.set=gf;_t.convertPx=Ho;_t.path=e2;_t.setDashoffset=Jg;_t.stagger=h2;_t.timeline=d2;_t.easing=Do;_t.penner=lf;_t.random=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};function p2(e){return Yl()?(Lf(e),!0):!1}function x2(e){return typeof e=="function"?e():Be(e)}const m2=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const v2=m2?window:void 0;function g2(){const e=re(!1),t=Nc();return t&&zn(()=>{e.value=!0},t),e}function _2(e){const t=g2();return wo(()=>(t.value,!!e()))}function y2(e,t={}){const{window:n=v2}=t,r=_2(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let s;const i=re(!1),o=u=>{i.value=u.matches},a=()=>{s&&("removeEventListener"in s?s.removeEventListener("change",o):s.removeListener(o))},l=Ah(()=>{r.value&&(a(),s=n.matchMedia(x2(e)),"addEventListener"in s?s.addEventListener("change",o):s.addListener(o),i.value=s.matches)});return p2(()=>{l(),a(),s=void 0}),i}const b2={class:"c-shader-title"},w2=se("h2",{class:"c-subtitle"},"SHADERS",-1),C2={key:0,class:"p-gallery"},A2=["onClick","onMouseenterPassiveCapture"],S2={class:"item__container"},P2=["value"],M2={class:"c-share"},T2={href:"mailto:nanonum@gmail.com"},k2={href:"https://linktr.ee/nanonum",target:"_blank"},I2={__name:"App",setup(e){const t=y2("(max-width: 860px)"),n=re(!1);re("shader");const r=re(!1),s=t?85/375*window.innerWidth:110,i=ir({saturation:1});re("");const o=re(),a=ir({selected:!1,stage:"shader",shader:null,title:null,path:null});let l=re();l.value=Object.assign({"/src/shaders/_adot.frag":Qd,"/src/shaders/_cos2.frag":t0,"/src/shaders/_cos3.frag":n0,"/src/shaders/_grad.frag":s0,"/src/shaders/_hole.frag":o0,"/src/shaders/_internet.frag":l0,"/src/shaders/_loading.frag":u0,"/src/shaders/_yu.frag":h0,"/src/shaders/category/_categorized.frag":p0,"/src/shaders/category/_crt.frag":m0,"/src/shaders/category/_crt2.frag":g0,"/src/shaders/category/_crt3.frag":y0,"/src/shaders/category/_crt4.frag":w0,"/src/shaders/category/_valuenoise.frag":A0,"/src/shaders/category/_valuenoise2.frag":P0,"/src/shaders/category/_vn10.frag":T0,"/src/shaders/category/_vn11.frag":I0,"/src/shaders/category/_vn12.frag":E0,"/src/shaders/category/_vn12crt.frag":O0,"/src/shaders/category/_vn3.frag":R0,"/src/shaders/category/_vn4.frag":j0,"/src/shaders/category/_vn9.frag":U0,"/src/shaders/category/_waiting.frag":G0,"/src/shaders/category/_waiting2.frag":H0,"/src/shaders/category/_waiting3.frag":V0,"/src/shaders/category/crt.frag":X0,"/src/shaders/category/pattern20240622.frag":K0,"/src/shaders/category/v4-2.frag":Q0,"/src/shaders/category/vn5.frag":tp,"/src/shaders/dct.frag":np,"/src/shaders/dct2.frag":sp,"/src/shaders/flare.frag":op,"/src/shaders/fog.frag":lp,"/src/shaders/line.frag":up,"/src/shaders/metaball.frag":hp,"/src/shaders/metaball2.frag":pp,"/src/shaders/moire.frag":mp,"/src/shaders/oil.frag":gp,"/src/shaders/pattern.frag":yp,"/src/shaders/ring.frag":wp,"/src/shaders/ring2.frag":Ap,"/src/shaders/shower.frag":Pp,"/src/shaders/splat.frag":Tp,"/src/shaders/up.frag":Ip,"/src/shaders/wip.frag":Ep});const u=g=>(new URL(g,location),g.split("/").pop());async function c(){if(window.ui=new To,await window.ui.init({backgroundAlpha:0,resizeTo:window,resolution:1}),window.ui.ticker.maxFPS=15,window.ui.canvas.setAttribute("id","canvas_ui"),document.body.appendChild(window.ui.canvas),await dc(),location.hash){const g=location.hash.split("#")[1]||null,v=location.hash.split("#/shader/")[1]||null;a.path=g,a.filename=v;const b=Object.keys(l.value).find(k=>k.slice(k.lastIndexOf("/")+1)===v);a.shader=l.value[b].default}n.value=!0}const f=wo(()=>location.href);zn(()=>{c()}),ps(()=>{window.ui&&window.ui.destroy({removeView:!0})});function h(){o.value.select()}const d=(g,v,b)=>{a.selected&&a.title===b?a.selected=null:Object.assign(a,{selected:!!b,shader:v,path:location.hash=`/${g}/${b}`,title:b,stage:g})},p=()=>{history.pushState("","","/nngl/"),a.selected=!1},m=()=>{r.value=!r.value,document.body.classList.toggle("--fullscreen")},x=(g,v,b)=>{console.log(n.value),!a.selected&&Object.assign(a,{shader:v,path:`/${g}/${b}`,title:b,stage:g})};wn(()=>a.shader,g=>{_t({targets:i,saturation:a.shader?0:1,easing:"easeOutExpo",duration:800})});const y=!1;return(g,v)=>(me(),Oe(Lt,null,[se("h1",b2,Dr(a.title||"NN.GL"),1),w2,n.value?(me(),Oe("ul",C2,[(me(!0),Oe(Lt,null,Nh(Be(l),(b,k)=>(me(),Oe(Lt,null,[Be(y)||u(k).indexOf("_")!==0?(me(),Oe("li",{key:0,class:_r(["p-gallery__item",{active:a.path===`/shader/${u(k)}`}]),onClick:P=>d("shader",b.default,u(k)),onMouseenterPassiveCapture:P=>x("shader",b.default,u(k))},[se("div",S2,[zt(Ng,{shader:b.default,saturation:i.saturation,width:Be(s),height:Be(s),alt:u(k),selected:a.selected,active:a.title===u(k),show:!r.value},null,8,["shader","saturation","width","height","alt","selected","active","show"])])],42,A2)):pn("",!0)],64))),256))])):pn("",!0),pn("",!0),n.value&&a.stage==="shader"?(me(),Lc(Og,{key:2,shader:a.shader},null,8,["shader"])):pn("",!0),zt(tr,{name:"closeButton"},{default:Wr(()=>[a.selected?(me(),Oe("nav",{key:0,onClick:v[1]||(v[1]=b=>p()),class:"c-close"})):pn("",!0)]),_:1}),zt(tr,{name:"fullscreenButton"},{default:Wr(()=>[se("nav",{onClick:v[2]||(v[2]=b=>m()),class:"c-fullscreen"})]),_:1}),zt(tr,{name:"permalink"},{default:Wr(()=>[n.value&&a.selected?(me(),Oe("input",{key:0,type:"text",value:f.value,class:"permalink",readonly:"",onClick:v[3]||(v[3]=b=>h()),ref_key:"input_permalink",ref:o},null,8,P2)):pn("",!0)]),_:1}),se("div",M2,[se("a",T2,Dr(Be(t)?"CONTACT":"nanonum@gmail.com"),1),se("a",k2,Dr(Be(t)?"MORE LINKS":"linktr.ee/nanonum"),1)])],64))}};Xd(I2).mount("#app");export{Fm as $,Fu as A,jt as B,Bt as C,gt as D,Y as E,Pu as F,_s as G,Ya as H,Tn as I,Dx as J,tm as K,Ct as L,at as M,wt as N,gm as O,vt as P,Qa as Q,Ni as R,Qx as S,Er as T,Yx as U,_x as V,Vs as W,yt as X,eu as Y,ut as Z,ct as _,Bi as a,Mn as a0,ss as a1,Pv as a2,wl as a3,Wu as a4,Sl as a5,Ev as a6,gr as a7,xt as a8,Xp as a9,Zi as aa,Cl as ab,$u as ac,ce as b,Ve as c,it as d,Jt as e,hr as f,Kx as g,Lm as h,al as i,Um as j,vr as k,Yr as l,ju as m,ja as n,Po as o,Iu as p,fu as q,ix as r,bl as s,qp as t,Dm as u,Rm as v,Tt as w,we as x,Jc as y,Pe as z};
