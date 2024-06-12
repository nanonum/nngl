const __vite__fileDeps=["assets/browserAll-BctO8Pgq.js","assets/webworkerAll-CUpuMAV8.js","assets/colorToUniform-ygkq9lo4.js","assets/getBatchSamplersUniformGroup-j6QHmW5d.js","assets/WebGPURenderer-DReW_1Ec.js","assets/SharedSystems-CNVb7CeB.js","assets/WebGLRenderer-D6Wt8uwT.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function eo(e,t){const n=new Set(e.split(","));return s=>n.has(s)}const dt={},vn=[],Yt=()=>{},_h=()=>!1,si=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),no=e=>e.startsWith("onUpdate:"),Ct=Object.assign,so=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},yh=Object.prototype.hasOwnProperty,it=(e,t)=>yh.call(e,t),X=Array.isArray,_n=e=>ii(e)==="[object Map]",Ll=e=>ii(e)==="[object Set]",J=e=>typeof e=="function",bt=e=>typeof e=="string",hn=e=>typeof e=="symbol",ht=e=>e!==null&&typeof e=="object",jl=e=>(ht(e)||J(e))&&J(e.then)&&J(e.catch),Nl=Object.prototype.toString,ii=e=>Nl.call(e),bh=e=>ii(e).slice(8,-1),Ul=e=>ii(e)==="[object Object]",io=e=>bt(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Vn=eo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ri=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},wh=/-(\w)/g,An=ri(e=>e.replace(wh,(t,n)=>n?n.toUpperCase():"")),Ah=/\B([A-Z])/g,Tn=ri(e=>e.replace(Ah,"-$1").toLowerCase()),Dl=ri(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ci=ri(e=>e?`on${Dl(e)}`:""),De=(e,t)=>!Object.is(e,t),Si=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Gl=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},Ch=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Sh=e=>{const t=bt(e)?Number(e):NaN;return isNaN(t)?e:t};let Ko;const $l=()=>Ko||(Ko=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ro(e){if(X(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],i=bt(s)?kh(s):ro(s);if(i)for(const r in i)t[r]=i[r]}return t}else if(bt(e)||ht(e))return e}const Mh=/;(?![^(]*\))/g,Ph=/:([^]+)/,Th=/\/\*[^]*?\*\//g;function kh(e){const t={};return e.replace(Th,"").split(Mh).forEach(n=>{if(n){const s=n.split(Ph);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function gs(e){let t="";if(bt(e))t=e;else if(X(e))for(let n=0;n<e.length;n++){const s=gs(e[n]);s&&(t+=s+" ")}else if(ht(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Eh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ih=eo(Eh);function Hl(e){return!!e||e===""}const Wl=e=>bt(e)?e:e==null?"":X(e)||ht(e)&&(e.toString===Nl||!J(e.toString))?JSON.stringify(e,Vl,2):String(e),Vl=(e,t)=>t&&t.__v_isRef?Vl(e,t.value):_n(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,i],r)=>(n[Mi(s,r)+" =>"]=i,n),{})}:Ll(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Mi(n))}:hn(t)?Mi(t):ht(t)&&!X(t)&&!Ul(t)?String(t):t,Mi=(e,t="")=>{var n;return hn(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ne;class Fh{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ne,!t&&ne&&(this.index=(ne.scopes||(ne.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=ne;try{return ne=this,t()}finally{ne=n}}}on(){ne=this}off(){ne=this.parent}stop(t){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Bh(e,t=ne){t&&t.active&&t.effects.push(e)}function Rh(){return ne}let ln;class oo{constructor(t,n,s,i){this.fn=t,this.trigger=n,this.scheduler=s,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Bh(this,i)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,$e();for(let t=0;t<this._depsLength;t++){const n=this.deps[t];if(n.computed&&(zh(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),He()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=Ne,n=ln;try{return Ne=!0,ln=this,this._runnings++,Zo(this),this.fn()}finally{Qo(this),this._runnings--,ln=n,Ne=t}}stop(){this.active&&(Zo(this),Qo(this),this.onStop&&this.onStop(),this.active=!1)}}function zh(e){return e.value}function Zo(e){e._trackId++,e._depsLength=0}function Qo(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)Xl(e.deps[t],e);e.deps.length=e._depsLength}}function Xl(e,t){const n=e.get(t);n!==void 0&&t._trackId!==n&&(e.delete(t),e.size===0&&e.cleanup())}let Ne=!0,pr=0;const Yl=[];function $e(){Yl.push(Ne),Ne=!1}function He(){const e=Yl.pop();Ne=e===void 0?!0:e}function ao(){pr++}function lo(){for(pr--;!pr&&mr.length;)mr.shift()()}function ql(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const s=e.deps[e._depsLength];s!==t?(s&&Xl(s,e),e.deps[e._depsLength++]=t):e._depsLength++}}const mr=[];function Kl(e,t,n){ao();for(const s of e.keys()){let i;s._dirtyLevel<t&&(i??(i=e.get(s)===s._trackId))&&(s._shouldSchedule||(s._shouldSchedule=s._dirtyLevel===0),s._dirtyLevel=t),s._shouldSchedule&&(i??(i=e.get(s)===s._trackId))&&(s.trigger(),(!s._runnings||s.allowRecurse)&&s._dirtyLevel!==2&&(s._shouldSchedule=!1,s.scheduler&&mr.push(s.scheduler)))}lo()}const Zl=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},gr=new WeakMap,cn=Symbol(""),xr=Symbol("");function Nt(e,t,n){if(Ne&&ln){let s=gr.get(e);s||gr.set(e,s=new Map);let i=s.get(n);i||s.set(n,i=Zl(()=>s.delete(n))),ql(ln,i)}}function Ae(e,t,n,s,i,r){const o=gr.get(e);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(n==="length"&&X(e)){const l=Number(s);o.forEach((u,c)=>{(c==="length"||!hn(c)&&c>=l)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),t){case"add":X(e)?io(n)&&a.push(o.get("length")):(a.push(o.get(cn)),_n(e)&&a.push(o.get(xr)));break;case"delete":X(e)||(a.push(o.get(cn)),_n(e)&&a.push(o.get(xr)));break;case"set":_n(e)&&a.push(o.get(cn));break}ao();for(const l of a)l&&Kl(l,4);lo()}const Oh=eo("__proto__,__v_isRef,__isVue"),Ql=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(hn)),Jo=Lh();function Lh(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const s=ot(this);for(let r=0,o=this.length;r<o;r++)Nt(s,"get",r+"");const i=s[t](...n);return i===-1||i===!1?s[t](...n.map(ot)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){$e(),ao();const s=ot(this)[t].apply(this,n);return lo(),He(),s}}),e}function jh(e){hn(e)||(e=String(e));const t=ot(this);return Nt(t,"has",e),t.hasOwnProperty(e)}class Jl{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?Zh:sc:r?nc:ec).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const o=X(t);if(!i){if(o&&it(Jo,n))return Reflect.get(Jo,n,s);if(n==="hasOwnProperty")return jh}const a=Reflect.get(t,n,s);return(hn(n)?Ql.has(n):Oh(n))||(i||Nt(t,"get",n),r)?a:Ut(a)?o&&io(n)?a:a.value:ht(a)?i?ic(a):ns(a):a}}class tc extends Jl{constructor(t=!1){super(!1,t)}set(t,n,s,i){let r=t[n];if(!this._isShallow){const l=ss(r);if(!Vs(s)&&!ss(s)&&(r=ot(r),s=ot(s)),!X(t)&&Ut(r)&&!Ut(s))return l?!1:(r.value=s,!0)}const o=X(t)&&io(n)?Number(n)<t.length:it(t,n),a=Reflect.set(t,n,s,i);return t===ot(i)&&(o?De(s,r)&&Ae(t,"set",n,s):Ae(t,"add",n,s)),a}deleteProperty(t,n){const s=it(t,n);t[n];const i=Reflect.deleteProperty(t,n);return i&&s&&Ae(t,"delete",n,void 0),i}has(t,n){const s=Reflect.has(t,n);return(!hn(n)||!Ql.has(n))&&Nt(t,"has",n),s}ownKeys(t){return Nt(t,"iterate",X(t)?"length":cn),Reflect.ownKeys(t)}}class Nh extends Jl{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Uh=new tc,Dh=new Nh,Gh=new tc(!0);const co=e=>e,oi=e=>Reflect.getPrototypeOf(e);function _s(e,t,n=!1,s=!1){e=e.__v_raw;const i=ot(e),r=ot(t);n||(De(t,r)&&Nt(i,"get",t),Nt(i,"get",r));const{has:o}=oi(i),a=s?co:n?fo:is;if(o.call(i,t))return a(e.get(t));if(o.call(i,r))return a(e.get(r));e!==i&&e.get(t)}function ys(e,t=!1){const n=this.__v_raw,s=ot(n),i=ot(e);return t||(De(e,i)&&Nt(s,"has",e),Nt(s,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function bs(e,t=!1){return e=e.__v_raw,!t&&Nt(ot(e),"iterate",cn),Reflect.get(e,"size",e)}function ta(e){e=ot(e);const t=ot(this);return oi(t).has.call(t,e)||(t.add(e),Ae(t,"add",e,e)),this}function ea(e,t){t=ot(t);const n=ot(this),{has:s,get:i}=oi(n);let r=s.call(n,e);r||(e=ot(e),r=s.call(n,e));const o=i.call(n,e);return n.set(e,t),r?De(t,o)&&Ae(n,"set",e,t):Ae(n,"add",e,t),this}function na(e){const t=ot(this),{has:n,get:s}=oi(t);let i=n.call(t,e);i||(e=ot(e),i=n.call(t,e)),s&&s.call(t,e);const r=t.delete(e);return i&&Ae(t,"delete",e,void 0),r}function sa(){const e=ot(this),t=e.size!==0,n=e.clear();return t&&Ae(e,"clear",void 0,void 0),n}function ws(e,t){return function(s,i){const r=this,o=r.__v_raw,a=ot(o),l=t?co:e?fo:is;return!e&&Nt(a,"iterate",cn),o.forEach((u,c)=>s.call(i,l(u),l(c),r))}}function As(e,t,n){return function(...s){const i=this.__v_raw,r=ot(i),o=_n(r),a=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,u=i[e](...s),c=n?co:t?fo:is;return!t&&Nt(r,"iterate",l?xr:cn),{next(){const{value:h,done:f}=u.next();return f?{value:h,done:f}:{value:a?[c(h[0]),c(h[1])]:c(h),done:f}},[Symbol.iterator](){return this}}}}function Ie(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function $h(){const e={get(r){return _s(this,r)},get size(){return bs(this)},has:ys,add:ta,set:ea,delete:na,clear:sa,forEach:ws(!1,!1)},t={get(r){return _s(this,r,!1,!0)},get size(){return bs(this)},has:ys,add:ta,set:ea,delete:na,clear:sa,forEach:ws(!1,!0)},n={get(r){return _s(this,r,!0)},get size(){return bs(this,!0)},has(r){return ys.call(this,r,!0)},add:Ie("add"),set:Ie("set"),delete:Ie("delete"),clear:Ie("clear"),forEach:ws(!0,!1)},s={get(r){return _s(this,r,!0,!0)},get size(){return bs(this,!0)},has(r){return ys.call(this,r,!0)},add:Ie("add"),set:Ie("set"),delete:Ie("delete"),clear:Ie("clear"),forEach:ws(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=As(r,!1,!1),n[r]=As(r,!0,!1),t[r]=As(r,!1,!0),s[r]=As(r,!0,!0)}),[e,n,t,s]}const[Hh,Wh,Vh,Xh]=$h();function uo(e,t){const n=t?e?Xh:Vh:e?Wh:Hh;return(s,i,r)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?s:Reflect.get(it(n,i)&&i in s?n:s,i,r)}const Yh={get:uo(!1,!1)},qh={get:uo(!1,!0)},Kh={get:uo(!0,!1)};const ec=new WeakMap,nc=new WeakMap,sc=new WeakMap,Zh=new WeakMap;function Qh(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Jh(e){return e.__v_skip||!Object.isExtensible(e)?0:Qh(bh(e))}function ns(e){return ss(e)?e:ho(e,!1,Uh,Yh,ec)}function tf(e){return ho(e,!1,Gh,qh,nc)}function ic(e){return ho(e,!0,Dh,Kh,sc)}function ho(e,t,n,s,i){if(!ht(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=i.get(e);if(r)return r;const o=Jh(e);if(o===0)return e;const a=new Proxy(e,o===2?s:n);return i.set(e,a),a}function Xn(e){return ss(e)?Xn(e.__v_raw):!!(e&&e.__v_isReactive)}function ss(e){return!!(e&&e.__v_isReadonly)}function Vs(e){return!!(e&&e.__v_isShallow)}function rc(e){return e?!!e.__v_raw:!1}function ot(e){const t=e&&e.__v_raw;return t?ot(t):e}function ef(e){return Object.isExtensible(e)&&Gl(e,"__v_skip",!0),e}const is=e=>ht(e)?ns(e):e,fo=e=>ht(e)?ic(e):e;class oc{constructor(t,n,s,i){this.getter=t,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new oo(()=>t(this._value),()=>Ns(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const t=ot(this);return(!t._cacheable||t.effect.dirty)&&De(t._value,t._value=t.effect.run())&&Ns(t,4),ac(t),t.effect._dirtyLevel>=2&&Ns(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function nf(e,t,n=!1){let s,i;const r=J(e);return r?(s=e,i=Yt):(s=e.get,i=e.set),new oc(s,i,r||!i,n)}function ac(e){var t;Ne&&ln&&(e=ot(e),ql(ln,(t=e.dep)!=null?t:e.dep=Zl(()=>e.dep=void 0,e instanceof oc?e:void 0)))}function Ns(e,t=4,n){e=ot(e);const s=e.dep;s&&Kl(s,t)}function Ut(e){return!!(e&&e.__v_isRef===!0)}function je(e){return sf(e,!1)}function sf(e,t){return Ut(e)?e:new rf(e,t)}class rf{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:ot(t),this._value=n?t:is(t)}get value(){return ac(this),this._value}set value(t){const n=this.__v_isShallow||Vs(t)||ss(t);t=n?t:ot(t),De(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:is(t),Ns(this,4))}}function lc(e){return Ut(e)?e.value:e}const of={get:(e,t,n)=>lc(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const i=e[t];return Ut(i)&&!Ut(n)?(i.value=n,!0):Reflect.set(e,t,n,s)}};function cc(e){return Xn(e)?e:new Proxy(e,of)}/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ue(e,t,n,s){try{return s?e(...s):e()}catch(i){ai(i,t,n)}}function Zt(e,t,n,s){if(J(e)){const i=Ue(e,t,n,s);return i&&jl(i)&&i.catch(r=>{ai(r,t,n)}),i}if(X(e)){const i=[];for(let r=0;r<e.length;r++)i.push(Zt(e[r],t,n,s));return i}}function ai(e,t,n,s=!0){const i=t?t.vnode:null;if(t){let r=t.parent;const o=t.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){const u=r.ec;if(u){for(let c=0;c<u.length;c++)if(u[c](e,o,a)===!1)return}r=r.parent}const l=t.appContext.config.errorHandler;if(l){$e(),Ue(l,null,10,[e,o,a]),He();return}}af(e,n,i,s)}function af(e,t,n,s=!0){console.error(e)}let rs=!1,vr=!1;const It=[];let ge=0;const yn=[];let Re=null,rn=0;const uc=Promise.resolve();let po=null;function hc(e){const t=po||uc;return e?t.then(this?e.bind(this):e):t}function lf(e){let t=ge+1,n=It.length;for(;t<n;){const s=t+n>>>1,i=It[s],r=os(i);r<e||r===e&&i.pre?t=s+1:n=s}return t}function mo(e){(!It.length||!It.includes(e,rs&&e.allowRecurse?ge+1:ge))&&(e.id==null?It.push(e):It.splice(lf(e.id),0,e),fc())}function fc(){!rs&&!vr&&(vr=!0,po=uc.then(pc))}function cf(e){const t=It.indexOf(e);t>ge&&It.splice(t,1)}function uf(e){X(e)?yn.push(...e):(!Re||!Re.includes(e,e.allowRecurse?rn+1:rn))&&yn.push(e),fc()}function ia(e,t,n=rs?ge+1:0){for(;n<It.length;n++){const s=It[n];if(s&&s.pre){if(e&&s.id!==e.uid)continue;It.splice(n,1),n--,s()}}}function dc(e){if(yn.length){const t=[...new Set(yn)].sort((n,s)=>os(n)-os(s));if(yn.length=0,Re){Re.push(...t);return}for(Re=t,rn=0;rn<Re.length;rn++)Re[rn]();Re=null,rn=0}}const os=e=>e.id==null?1/0:e.id,hf=(e,t)=>{const n=os(e)-os(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function pc(e){vr=!1,rs=!0,It.sort(hf);try{for(ge=0;ge<It.length;ge++){const t=It[ge];t&&t.active!==!1&&Ue(t,null,14)}}finally{ge=0,It.length=0,dc(),rs=!1,po=null,(It.length||yn.length)&&pc()}}function ff(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||dt;let i=n;const r=t.startsWith("update:"),o=r&&t.slice(7);if(o&&o in s){const c=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[c]||dt;f&&(i=n.map(d=>bt(d)?d.trim():d)),h&&(i=n.map(Ch))}let a,l=s[a=Ci(t)]||s[a=Ci(An(t))];!l&&r&&(l=s[a=Ci(Tn(t))]),l&&Zt(l,e,6,i);const u=s[a+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Zt(u,e,6,i)}}function mc(e,t,n=!1){const s=t.emitsCache,i=s.get(e);if(i!==void 0)return i;const r=e.emits;let o={},a=!1;if(!J(e)){const l=u=>{const c=mc(u,t,!0);c&&(a=!0,Ct(o,c))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!r&&!a?(ht(e)&&s.set(e,null),null):(X(r)?r.forEach(l=>o[l]=null):Ct(o,r),ht(e)&&s.set(e,o),o)}function li(e,t){return!e||!si(t)?!1:(t=t.slice(2).replace(/Once$/,""),it(e,t[0].toLowerCase()+t.slice(1))||it(e,Tn(t))||it(e,t))}let oe=null,ci=null;function Xs(e){const t=oe;return oe=e,ci=e&&e.type.__scopeId||null,t}function df(e){ci=e}function pf(){ci=null}function _r(e,t=oe,n){if(!t||e._n)return e;const s=(...i)=>{s._d&&ma(-1);const r=Xs(t);let o;try{o=e(...i)}finally{Xs(r),s._d&&ma(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Pi(e){const{type:t,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:a,emit:l,render:u,renderCache:c,props:h,data:f,setupState:d,ctx:p,inheritAttrs:g}=e,m=Xs(e);let y,v;try{if(n.shapeFlag&4){const w=i||s,I=w;y=me(u.call(I,w,c,h,d,f,p)),v=a}else{const w=t;y=me(w.length>1?w(h,{attrs:a,slots:o,emit:l}):w(h,null)),v=t.props?a:mf(a)}}catch(w){Zn.length=0,ai(w,e,1),y=Bt(qt)}let x=y;if(v&&g!==!1){const w=Object.keys(v),{shapeFlag:I}=x;w.length&&I&7&&(r&&w.some(no)&&(v=gf(v,r)),x=Ge(x,v,!1,!0))}return n.dirs&&(x=Ge(x,null,!1,!0),x.dirs=x.dirs?x.dirs.concat(n.dirs):n.dirs),n.transition&&(x.transition=n.transition),y=x,Xs(m),y}const mf=e=>{let t;for(const n in e)(n==="class"||n==="style"||si(n))&&((t||(t={}))[n]=e[n]);return t},gf=(e,t)=>{const n={};for(const s in e)(!no(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function xf(e,t,n){const{props:s,children:i,component:r}=e,{props:o,children:a,patchFlag:l}=t,u=r.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?ra(s,o,u):!!o;if(l&8){const c=t.dynamicProps;for(let h=0;h<c.length;h++){const f=c[h];if(o[f]!==s[f]&&!li(u,f))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?ra(s,o,u):!0:!!o;return!1}function ra(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(t[r]!==e[r]&&!li(n,r))return!0}return!1}function vf({vnode:e,parent:t},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=n,t=t.parent;else break}}const _f=Symbol.for("v-ndc"),yf=e=>e.__isSuspense;function bf(e,t){t&&t.pendingBranch?X(e)?t.effects.push(...e):t.effects.push(e):uf(e)}const wf=Symbol.for("v-scx"),Af=()=>Ds(wf),Cs={};function Yn(e,t,n){return gc(e,t,n)}function gc(e,t,{immediate:n,deep:s,flush:i,once:r,onTrack:o,onTrigger:a}=dt){if(t&&r){const M=t;t=(...R)=>{M(...R),I()}}const l=Ft,u=M=>s===!0?M:gn(M,s===!1?1:void 0);let c,h=!1,f=!1;if(Ut(e)?(c=()=>e.value,h=Vs(e)):Xn(e)?(c=()=>u(e),h=!0):X(e)?(f=!0,h=e.some(M=>Xn(M)||Vs(M)),c=()=>e.map(M=>{if(Ut(M))return M.value;if(Xn(M))return u(M);if(J(M))return Ue(M,l,2)})):J(e)?t?c=()=>Ue(e,l,2):c=()=>(d&&d(),Zt(e,l,3,[p])):c=Yt,t&&s){const M=c;c=()=>gn(M())}let d,p=M=>{d=x.onStop=()=>{Ue(M,l,4),d=x.onStop=void 0}},g;if(mi)if(p=Yt,t?n&&Zt(t,l,3,[c(),f?[]:void 0,p]):c(),i==="sync"){const M=Af();g=M.__watcherHandles||(M.__watcherHandles=[])}else return Yt;let m=f?new Array(e.length).fill(Cs):Cs;const y=()=>{if(!(!x.active||!x.dirty))if(t){const M=x.run();(s||h||(f?M.some((R,k)=>De(R,m[k])):De(M,m)))&&(d&&d(),Zt(t,l,3,[M,m===Cs?void 0:f&&m[0]===Cs?[]:m,p]),m=M)}else x.run()};y.allowRecurse=!!t;let v;i==="sync"?v=y:i==="post"?v=()=>Ot(y,l&&l.suspense):(y.pre=!0,l&&(y.id=l.uid),v=()=>mo(y));const x=new oo(c,Yt,v),w=Rh(),I=()=>{x.stop(),w&&so(w.effects,x)};return t?n?y():m=x.run():i==="post"?Ot(x.run.bind(x),l&&l.suspense):x.run(),g&&g.push(I),I}function Cf(e,t,n){const s=this.proxy,i=bt(e)?e.includes(".")?xc(s,e):()=>s[e]:e.bind(s,s);let r;J(t)?r=t:(r=t.handler,n=t);const o=vs(this),a=gc(i,r.bind(s),n);return o(),a}function xc(e,t){const n=t.split(".");return()=>{let s=e;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function gn(e,t=1/0,n){if(t<=0||!ht(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,Ut(e))gn(e.value,t,n);else if(X(e))for(let s=0;s<e.length;s++)gn(e[s],t,n);else if(Ll(e)||_n(e))e.forEach(s=>{gn(s,t,n)});else if(Ul(e))for(const s in e)gn(e[s],t,n);return e}function qe(e,t,n,s){const i=e.dirs,r=t&&t.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&($e(),Zt(l,n,8,[e.el,a,e,t]),He())}}const ze=Symbol("_leaveCb"),Ss=Symbol("_enterCb");function Sf(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return xs(()=>{e.isMounted=!0}),fi(()=>{e.isUnmounting=!0}),e}const Vt=[Function,Array],vc={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Vt,onEnter:Vt,onAfterEnter:Vt,onEnterCancelled:Vt,onBeforeLeave:Vt,onLeave:Vt,onAfterLeave:Vt,onLeaveCancelled:Vt,onBeforeAppear:Vt,onAppear:Vt,onAfterAppear:Vt,onAppearCancelled:Vt},Mf={name:"BaseTransition",props:vc,setup(e,{slots:t}){const n=fd(),s=Sf();return()=>{const i=t.default&&yc(t.default(),!0);if(!i||!i.length)return;let r=i[0];if(i.length>1){for(const f of i)if(f.type!==qt){r=f;break}}const o=ot(e),{mode:a}=o;if(s.isLeaving)return Ti(r);const l=oa(r);if(!l)return Ti(r);const u=yr(l,o,s,n);br(l,u);const c=n.subTree,h=c&&oa(c);if(h&&h.type!==qt&&!on(l,h)){const f=yr(h,o,s,n);if(br(h,f),a==="out-in"&&l.type!==qt)return s.isLeaving=!0,f.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},Ti(r);a==="in-out"&&l.type!==qt&&(f.delayLeave=(d,p,g)=>{const m=_c(s,h);m[String(h.key)]=h,d[ze]=()=>{p(),d[ze]=void 0,delete u.delayedLeave},u.delayedLeave=g})}return r}}},Pf=Mf;function _c(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function yr(e,t,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:u,onEnterCancelled:c,onBeforeLeave:h,onLeave:f,onAfterLeave:d,onLeaveCancelled:p,onBeforeAppear:g,onAppear:m,onAfterAppear:y,onAppearCancelled:v}=t,x=String(e.key),w=_c(n,e),I=(k,S)=>{k&&Zt(k,s,9,S)},M=(k,S)=>{const C=S[1];I(k,S),X(k)?k.every(Y=>Y.length<=1)&&C():k.length<=1&&C()},R={mode:r,persisted:o,beforeEnter(k){let S=a;if(!n.isMounted)if(i)S=g||a;else return;k[ze]&&k[ze](!0);const C=w[x];C&&on(e,C)&&C.el[ze]&&C.el[ze](),I(S,[k])},enter(k){let S=l,C=u,Y=c;if(!n.isMounted)if(i)S=m||l,C=y||u,Y=v||c;else return;let j=!1;const O=k[Ss]=U=>{j||(j=!0,U?I(Y,[k]):I(C,[k]),R.delayedLeave&&R.delayedLeave(),k[Ss]=void 0)};S?M(S,[k,O]):O()},leave(k,S){const C=String(e.key);if(k[Ss]&&k[Ss](!0),n.isUnmounting)return S();I(h,[k]);let Y=!1;const j=k[ze]=O=>{Y||(Y=!0,S(),O?I(p,[k]):I(d,[k]),k[ze]=void 0,w[C]===e&&delete w[C])};w[C]=e,f?M(f,[k,j]):j()},clone(k){return yr(k,t,n,s)}};return R}function Ti(e){if(ui(e))return e=Ge(e),e.children=null,e}function oa(e){if(!ui(e))return e;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&J(n.default))return n.default()}}function br(e,t){e.shapeFlag&6&&e.component?br(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function yc(e,t=!1,n){let s=[],i=0;for(let r=0;r<e.length;r++){let o=e[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===Lt?(o.patchFlag&128&&i++,s=s.concat(yc(o.children,t,a))):(t||o.type!==qt)&&s.push(a!=null?Ge(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}const Us=e=>!!e.type.__asyncLoader,ui=e=>e.type.__isKeepAlive;function Tf(e,t){bc(e,"a",t)}function kf(e,t){bc(e,"da",t)}function bc(e,t,n=Ft){const s=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(hi(t,s,n),n){let i=n.parent;for(;i&&i.parent;)ui(i.parent.vnode)&&Ef(s,t,n,i),i=i.parent}}function Ef(e,t,n,s){const i=hi(t,e,s,!0);di(()=>{so(s[t],i)},n)}function hi(e,t,n=Ft,s=!1){if(n){const i=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;$e();const a=vs(n),l=Zt(t,n,e,o);return a(),He(),l});return s?i.unshift(r):i.push(r),r}}const Pe=e=>(t,n=Ft)=>(!mi||e==="sp")&&hi(e,(...s)=>t(...s),n),If=Pe("bm"),xs=Pe("m"),Ff=Pe("bu"),Bf=Pe("u"),fi=Pe("bum"),di=Pe("um"),Rf=Pe("sp"),zf=Pe("rtg"),Of=Pe("rtc");function Lf(e,t=Ft){hi("ec",e,t)}function jf(e,t,n,s){let i;const r=n;if(X(e)||bt(e)){i=new Array(e.length);for(let o=0,a=e.length;o<a;o++)i[o]=t(e[o],o,void 0,r)}else if(typeof e=="number"){i=new Array(e);for(let o=0;o<e;o++)i[o]=t(o+1,o,void 0,r)}else if(ht(e))if(e[Symbol.iterator])i=Array.from(e,(o,a)=>t(o,a,void 0,r));else{const o=Object.keys(e);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const u=o[a];i[a]=t(e[u],u,a,r)}}else i=[];return i}const wr=e=>e?Lc(e)?_o(e)||e.proxy:wr(e.parent):null,qn=Ct(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>wr(e.parent),$root:e=>wr(e.root),$emit:e=>e.emit,$options:e=>go(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,mo(e.update)}),$nextTick:e=>e.n||(e.n=hc.bind(e.proxy)),$watch:e=>Cf.bind(e)}),ki=(e,t)=>e!==dt&&!e.__isScriptSetup&&it(e,t),Nf={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=e;let u;if(t[0]!=="$"){const d=o[t];if(d!==void 0)switch(d){case 1:return s[t];case 2:return i[t];case 4:return n[t];case 3:return r[t]}else{if(ki(s,t))return o[t]=1,s[t];if(i!==dt&&it(i,t))return o[t]=2,i[t];if((u=e.propsOptions[0])&&it(u,t))return o[t]=3,r[t];if(n!==dt&&it(n,t))return o[t]=4,n[t];Ar&&(o[t]=0)}}const c=qn[t];let h,f;if(c)return t==="$attrs"&&Nt(e.attrs,"get",""),c(e);if((h=a.__cssModules)&&(h=h[t]))return h;if(n!==dt&&it(n,t))return o[t]=4,n[t];if(f=l.config.globalProperties,it(f,t))return f[t]},set({_:e},t,n){const{data:s,setupState:i,ctx:r}=e;return ki(i,t)?(i[t]=n,!0):s!==dt&&it(s,t)?(s[t]=n,!0):it(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||e!==dt&&it(e,o)||ki(t,o)||(a=r[0])&&it(a,o)||it(s,o)||it(qn,o)||it(i.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:it(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function aa(e){return X(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Ar=!0;function Uf(e){const t=go(e),n=e.proxy,s=e.ctx;Ar=!1,t.beforeCreate&&la(t.beforeCreate,e,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:u,created:c,beforeMount:h,mounted:f,beforeUpdate:d,updated:p,activated:g,deactivated:m,beforeDestroy:y,beforeUnmount:v,destroyed:x,unmounted:w,render:I,renderTracked:M,renderTriggered:R,errorCaptured:k,serverPrefetch:S,expose:C,inheritAttrs:Y,components:j,directives:O,filters:U}=t;if(u&&Df(u,s,null),o)for(const Z in o){const nt=o[Z];J(nt)&&(s[Z]=nt.bind(n))}if(i){const Z=i.call(n,n);ht(Z)&&(e.data=ns(Z))}if(Ar=!0,r)for(const Z in r){const nt=r[Z],D=J(nt)?nt.bind(n,n):J(nt.get)?nt.get.bind(n,n):Yt,V=!J(nt)&&J(nt.set)?nt.set.bind(n):Yt,Wt=Nc({get:D,set:V});Object.defineProperty(s,Z,{enumerable:!0,configurable:!0,get:()=>Wt.value,set:tt=>Wt.value=tt})}if(a)for(const Z in a)wc(a[Z],s,n,Z);if(l){const Z=J(l)?l.call(n):l;Reflect.ownKeys(Z).forEach(nt=>{Xf(nt,Z[nt])})}c&&la(c,e,"c");function Q(Z,nt){X(nt)?nt.forEach(D=>Z(D.bind(n))):nt&&Z(nt.bind(n))}if(Q(If,h),Q(xs,f),Q(Ff,d),Q(Bf,p),Q(Tf,g),Q(kf,m),Q(Lf,k),Q(Of,M),Q(zf,R),Q(fi,v),Q(di,w),Q(Rf,S),X(C))if(C.length){const Z=e.exposed||(e.exposed={});C.forEach(nt=>{Object.defineProperty(Z,nt,{get:()=>n[nt],set:D=>n[nt]=D})})}else e.exposed||(e.exposed={});I&&e.render===Yt&&(e.render=I),Y!=null&&(e.inheritAttrs=Y),j&&(e.components=j),O&&(e.directives=O)}function Df(e,t,n=Yt){X(e)&&(e=Cr(e));for(const s in e){const i=e[s];let r;ht(i)?"default"in i?r=Ds(i.from||s,i.default,!0):r=Ds(i.from||s):r=Ds(i),Ut(r)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[s]=r}}function la(e,t,n){Zt(X(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function wc(e,t,n,s){const i=s.includes(".")?xc(n,s):()=>n[s];if(bt(e)){const r=t[e];J(r)&&Yn(i,r)}else if(J(e))Yn(i,e.bind(n));else if(ht(e))if(X(e))e.forEach(r=>wc(r,t,n,s));else{const r=J(e.handler)?e.handler.bind(n):t[e.handler];J(r)&&Yn(i,r,e)}}function go(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=e.appContext,a=r.get(t);let l;return a?l=a:!i.length&&!n&&!s?l=t:(l={},i.length&&i.forEach(u=>Ys(l,u,o,!0)),Ys(l,t,o)),ht(t)&&r.set(t,l),l}function Ys(e,t,n,s=!1){const{mixins:i,extends:r}=t;r&&Ys(e,r,n,!0),i&&i.forEach(o=>Ys(e,o,n,!0));for(const o in t)if(!(s&&o==="expose")){const a=Gf[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const Gf={data:ca,props:ua,emits:ua,methods:Dn,computed:Dn,beforeCreate:Rt,created:Rt,beforeMount:Rt,mounted:Rt,beforeUpdate:Rt,updated:Rt,beforeDestroy:Rt,beforeUnmount:Rt,destroyed:Rt,unmounted:Rt,activated:Rt,deactivated:Rt,errorCaptured:Rt,serverPrefetch:Rt,components:Dn,directives:Dn,watch:Hf,provide:ca,inject:$f};function ca(e,t){return t?e?function(){return Ct(J(e)?e.call(this,this):e,J(t)?t.call(this,this):t)}:t:e}function $f(e,t){return Dn(Cr(e),Cr(t))}function Cr(e){if(X(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Rt(e,t){return e?[...new Set([].concat(e,t))]:t}function Dn(e,t){return e?Ct(Object.create(null),e,t):t}function ua(e,t){return e?X(e)&&X(t)?[...new Set([...e,...t])]:Ct(Object.create(null),aa(e),aa(t??{})):t}function Hf(e,t){if(!e)return t;if(!t)return e;const n=Ct(Object.create(null),e);for(const s in t)n[s]=Rt(e[s],t[s]);return n}function Ac(){return{app:null,config:{isNativeTag:_h,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Wf=0;function Vf(e,t){return function(s,i=null){J(s)||(s=Ct({},s)),i!=null&&!ht(i)&&(i=null);const r=Ac(),o=new WeakSet;let a=!1;const l=r.app={_uid:Wf++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:_d,get config(){return r.config},set config(u){},use(u,...c){return o.has(u)||(u&&J(u.install)?(o.add(u),u.install(l,...c)):J(u)&&(o.add(u),u(l,...c))),l},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),l},component(u,c){return c?(r.components[u]=c,l):r.components[u]},directive(u,c){return c?(r.directives[u]=c,l):r.directives[u]},mount(u,c,h){if(!a){const f=Bt(s,i);return f.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),c&&t?t(f,u):e(f,u,h),a=!0,l._container=u,u.__vue_app__=l,_o(f.component)||f.component.proxy}},unmount(){a&&(e(null,l._container),delete l._container.__vue_app__)},provide(u,c){return r.provides[u]=c,l},runWithContext(u){const c=Kn;Kn=l;try{return u()}finally{Kn=c}}};return l}}let Kn=null;function Xf(e,t){if(Ft){let n=Ft.provides;const s=Ft.parent&&Ft.parent.provides;s===n&&(n=Ft.provides=Object.create(s)),n[e]=t}}function Ds(e,t,n=!1){const s=Ft||oe;if(s||Kn){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Kn._context.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&J(t)?t.call(s&&s.proxy):t}}const Cc={},Sc=()=>Object.create(Cc),Mc=e=>Object.getPrototypeOf(e)===Cc;function Yf(e,t,n,s=!1){const i={},r=Sc();e.propsDefaults=Object.create(null),Pc(e,t,i,r);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);n?e.props=s?i:tf(i):e.type.props?e.props=i:e.props=r,e.attrs=r}function qf(e,t,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=e,a=ot(i),[l]=e.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const c=e.vnode.dynamicProps;for(let h=0;h<c.length;h++){let f=c[h];if(li(e.emitsOptions,f))continue;const d=t[f];if(l)if(it(r,f))d!==r[f]&&(r[f]=d,u=!0);else{const p=An(f);i[p]=Sr(l,a,p,d,e,!1)}else d!==r[f]&&(r[f]=d,u=!0)}}}else{Pc(e,t,i,r)&&(u=!0);let c;for(const h in a)(!t||!it(t,h)&&((c=Tn(h))===h||!it(t,c)))&&(l?n&&(n[h]!==void 0||n[c]!==void 0)&&(i[h]=Sr(l,a,h,void 0,e,!0)):delete i[h]);if(r!==a)for(const h in r)(!t||!it(t,h))&&(delete r[h],u=!0)}u&&Ae(e.attrs,"set","")}function Pc(e,t,n,s){const[i,r]=e.propsOptions;let o=!1,a;if(t)for(let l in t){if(Vn(l))continue;const u=t[l];let c;i&&it(i,c=An(l))?!r||!r.includes(c)?n[c]=u:(a||(a={}))[c]=u:li(e.emitsOptions,l)||(!(l in s)||u!==s[l])&&(s[l]=u,o=!0)}if(r){const l=ot(n),u=a||dt;for(let c=0;c<r.length;c++){const h=r[c];n[h]=Sr(i,l,h,u[h],e,!it(u,h))}}return o}function Sr(e,t,n,s,i,r){const o=e[n];if(o!=null){const a=it(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&J(l)){const{propsDefaults:u}=i;if(n in u)s=u[n];else{const c=vs(i);s=u[n]=l.call(null,t),c()}}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Tn(n))&&(s=!0))}return s}function Tc(e,t,n=!1){const s=t.propsCache,i=s.get(e);if(i)return i;const r=e.props,o={},a=[];let l=!1;if(!J(e)){const c=h=>{l=!0;const[f,d]=Tc(h,t,!0);Ct(o,f),d&&a.push(...d)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!r&&!l)return ht(e)&&s.set(e,vn),vn;if(X(r))for(let c=0;c<r.length;c++){const h=An(r[c]);ha(h)&&(o[h]=dt)}else if(r)for(const c in r){const h=An(c);if(ha(h)){const f=r[c],d=o[h]=X(f)||J(f)?{type:f}:Ct({},f);if(d){const p=pa(Boolean,d.type),g=pa(String,d.type);d[0]=p>-1,d[1]=g<0||p<g,(p>-1||it(d,"default"))&&a.push(h)}}}const u=[o,a];return ht(e)&&s.set(e,u),u}function ha(e){return e[0]!=="$"&&!Vn(e)}function fa(e){return e===null?"null":typeof e=="function"?e.name||"":typeof e=="object"&&e.constructor&&e.constructor.name||""}function da(e,t){return fa(e)===fa(t)}function pa(e,t){return X(t)?t.findIndex(n=>da(n,e)):J(t)&&da(t,e)?0:-1}const kc=e=>e[0]==="_"||e==="$stable",xo=e=>X(e)?e.map(me):[me(e)],Kf=(e,t,n)=>{if(t._n)return t;const s=_r((...i)=>xo(t(...i)),n);return s._c=!1,s},Ec=(e,t,n)=>{const s=e._ctx;for(const i in e){if(kc(i))continue;const r=e[i];if(J(r))t[i]=Kf(i,r,s);else if(r!=null){const o=xo(r);t[i]=()=>o}}},Ic=(e,t)=>{const n=xo(t);e.slots.default=()=>n},Zf=(e,t)=>{const n=e.slots=Sc();if(e.vnode.shapeFlag&32){const s=t._;s?(Ct(n,t),Gl(n,"_",s,!0)):Ec(t,n)}else t&&Ic(e,t)},Qf=(e,t,n)=>{const{vnode:s,slots:i}=e;let r=!0,o=dt;if(s.shapeFlag&32){const a=t._;a?n&&a===1?r=!1:(Ct(i,t),!n&&a===1&&delete i._):(r=!t.$stable,Ec(t,i)),o=t}else t&&(Ic(e,t),o={default:1});if(r)for(const a in i)!kc(a)&&o[a]==null&&delete i[a]};function Mr(e,t,n,s,i=!1){if(X(e)){e.forEach((f,d)=>Mr(f,t&&(X(t)?t[d]:t),n,s,i));return}if(Us(s)&&!i)return;const r=s.shapeFlag&4?_o(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=e,u=t&&t.r,c=a.refs===dt?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==l&&(bt(u)?(c[u]=null,it(h,u)&&(h[u]=null)):Ut(u)&&(u.value=null)),J(l))Ue(l,a,12,[o,c]);else{const f=bt(l),d=Ut(l);if(f||d){const p=()=>{if(e.f){const g=f?it(h,l)?h[l]:c[l]:l.value;i?X(g)&&so(g,r):X(g)?g.includes(r)||g.push(r):f?(c[l]=[r],it(h,l)&&(h[l]=c[l])):(l.value=[r],e.k&&(c[e.k]=l.value))}else f?(c[l]=o,it(h,l)&&(h[l]=o)):d&&(l.value=o,e.k&&(c[e.k]=o))};o?(p.id=-1,Ot(p,n)):p()}}}const Ot=bf;function Jf(e){return td(e)}function td(e,t){const n=$l();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:u,setElementText:c,parentNode:h,nextSibling:f,setScopeId:d=Yt,insertStaticContent:p}=e,g=(_,b,A,P=null,T=null,F=null,L=void 0,B=null,z=!!b.dynamicChildren)=>{if(_===b)return;_&&!on(_,b)&&(P=Xe(_),tt(_,T,F,!0),_=null),b.patchFlag===-2&&(z=!1,b.dynamicChildren=null);const{type:E,ref:N,shapeFlag:W}=b;switch(E){case pi:m(_,b,A,P);break;case qt:y(_,b,A,P);break;case Ii:_==null&&v(b,A,P,L);break;case Lt:j(_,b,A,P,T,F,L,B,z);break;default:W&1?I(_,b,A,P,T,F,L,B,z):W&6?O(_,b,A,P,T,F,L,B,z):(W&64||W&128)&&E.process(_,b,A,P,T,F,L,B,z,Ee)}N!=null&&T&&Mr(N,_&&_.ref,F,b||_,!b)},m=(_,b,A,P)=>{if(_==null)s(b.el=a(b.children),A,P);else{const T=b.el=_.el;b.children!==_.children&&u(T,b.children)}},y=(_,b,A,P)=>{_==null?s(b.el=l(b.children||""),A,P):b.el=_.el},v=(_,b,A,P)=>{[_.el,_.anchor]=p(_.children,b,A,P,_.el,_.anchor)},x=({el:_,anchor:b},A,P)=>{let T;for(;_&&_!==b;)T=f(_),s(_,A,P),_=T;s(b,A,P)},w=({el:_,anchor:b})=>{let A;for(;_&&_!==b;)A=f(_),i(_),_=A;i(b)},I=(_,b,A,P,T,F,L,B,z)=>{b.type==="svg"?L="svg":b.type==="math"&&(L="mathml"),_==null?M(b,A,P,T,F,L,B,z):S(_,b,T,F,L,B,z)},M=(_,b,A,P,T,F,L,B)=>{let z,E;const{props:N,shapeFlag:W,transition:H,dirs:K}=_;if(z=_.el=o(_.type,F,N&&N.is,N),W&8?c(z,_.children):W&16&&k(_.children,z,null,P,T,Ei(_,F),L,B),K&&qe(_,null,P,"created"),R(z,_,_.scopeId,L,P),N){for(const lt in N)lt!=="value"&&!Vn(lt)&&r(z,lt,null,N[lt],F,_.children,P,T,Et);"value"in N&&r(z,"value",null,N.value,F),(E=N.onVnodeBeforeMount)&&fe(E,P,_)}K&&qe(_,null,P,"beforeMount");const et=ed(T,H);et&&H.beforeEnter(z),s(z,b,A),((E=N&&N.onVnodeMounted)||et||K)&&Ot(()=>{E&&fe(E,P,_),et&&H.enter(z),K&&qe(_,null,P,"mounted")},T)},R=(_,b,A,P,T)=>{if(A&&d(_,A),P)for(let F=0;F<P.length;F++)d(_,P[F]);if(T){let F=T.subTree;if(b===F){const L=T.vnode;R(_,L,L.scopeId,L.slotScopeIds,T.parent)}}},k=(_,b,A,P,T,F,L,B,z=0)=>{for(let E=z;E<_.length;E++){const N=_[E]=B?Oe(_[E]):me(_[E]);g(null,N,b,A,P,T,F,L,B)}},S=(_,b,A,P,T,F,L)=>{const B=b.el=_.el;let{patchFlag:z,dynamicChildren:E,dirs:N}=b;z|=_.patchFlag&16;const W=_.props||dt,H=b.props||dt;let K;if(A&&Ke(A,!1),(K=H.onVnodeBeforeUpdate)&&fe(K,A,b,_),N&&qe(b,_,A,"beforeUpdate"),A&&Ke(A,!0),E?C(_.dynamicChildren,E,B,A,P,Ei(b,T),F):L||nt(_,b,B,null,A,P,Ei(b,T),F,!1),z>0){if(z&16)Y(B,b,W,H,A,P,T);else if(z&2&&W.class!==H.class&&r(B,"class",null,H.class,T),z&4&&r(B,"style",W.style,H.style,T),z&8){const et=b.dynamicProps;for(let lt=0;lt<et.length;lt++){const ft=et[lt],St=W[ft],te=H[ft];(te!==St||ft==="value")&&r(B,ft,St,te,T,_.children,A,P,Et)}}z&1&&_.children!==b.children&&c(B,b.children)}else!L&&E==null&&Y(B,b,W,H,A,P,T);((K=H.onVnodeUpdated)||N)&&Ot(()=>{K&&fe(K,A,b,_),N&&qe(b,_,A,"updated")},P)},C=(_,b,A,P,T,F,L)=>{for(let B=0;B<b.length;B++){const z=_[B],E=b[B],N=z.el&&(z.type===Lt||!on(z,E)||z.shapeFlag&70)?h(z.el):A;g(z,E,N,null,P,T,F,L,!0)}},Y=(_,b,A,P,T,F,L)=>{if(A!==P){if(A!==dt)for(const B in A)!Vn(B)&&!(B in P)&&r(_,B,A[B],null,L,b.children,T,F,Et);for(const B in P){if(Vn(B))continue;const z=P[B],E=A[B];z!==E&&B!=="value"&&r(_,B,E,z,L,b.children,T,F,Et)}"value"in P&&r(_,"value",A.value,P.value,L)}},j=(_,b,A,P,T,F,L,B,z)=>{const E=b.el=_?_.el:a(""),N=b.anchor=_?_.anchor:a("");let{patchFlag:W,dynamicChildren:H,slotScopeIds:K}=b;K&&(B=B?B.concat(K):K),_==null?(s(E,A,P),s(N,A,P),k(b.children||[],A,N,T,F,L,B,z)):W>0&&W&64&&H&&_.dynamicChildren?(C(_.dynamicChildren,H,A,T,F,L,B),(b.key!=null||T&&b===T.subTree)&&Fc(_,b,!0)):nt(_,b,A,N,T,F,L,B,z)},O=(_,b,A,P,T,F,L,B,z)=>{b.slotScopeIds=B,_==null?b.shapeFlag&512?T.ctx.activate(b,A,P,L,z):U(b,A,P,T,F,L,z):st(_,b,z)},U=(_,b,A,P,T,F,L)=>{const B=_.component=hd(_,P,T);if(ui(_)&&(B.ctx.renderer=Ee),dd(B),B.asyncDep){if(T&&T.registerDep(B,Q),!_.el){const z=B.subTree=Bt(qt);y(null,z,b,A)}}else Q(B,_,b,A,T,F,L)},st=(_,b,A)=>{const P=b.component=_.component;if(xf(_,b,A))if(P.asyncDep&&!P.asyncResolved){Z(P,b,A);return}else P.next=b,cf(P.update),P.effect.dirty=!0,P.update();else b.el=_.el,P.vnode=b},Q=(_,b,A,P,T,F,L)=>{const B=()=>{if(_.isMounted){let{next:N,bu:W,u:H,parent:K,vnode:et}=_;{const fn=Bc(_);if(fn){N&&(N.el=et.el,Z(_,N,L)),fn.asyncDep.then(()=>{_.isUnmounted||B()});return}}let lt=N,ft;Ke(_,!1),N?(N.el=et.el,Z(_,N,L)):N=et,W&&Si(W),(ft=N.props&&N.props.onVnodeBeforeUpdate)&&fe(ft,K,N,et),Ke(_,!0);const St=Pi(_),te=_.subTree;_.subTree=St,g(te,St,h(te.el),Xe(te),_,T,F),N.el=St.el,lt===null&&vf(_,St.el),H&&Ot(H,T),(ft=N.props&&N.props.onVnodeUpdated)&&Ot(()=>fe(ft,K,N,et),T)}else{let N;const{el:W,props:H}=b,{bm:K,m:et,parent:lt}=_,ft=Us(b);if(Ke(_,!1),K&&Si(K),!ft&&(N=H&&H.onVnodeBeforeMount)&&fe(N,lt,b),Ke(_,!0),W&&Ye){const St=()=>{_.subTree=Pi(_),Ye(W,_.subTree,_,T,null)};ft?b.type.__asyncLoader().then(()=>!_.isUnmounted&&St()):St()}else{const St=_.subTree=Pi(_);g(null,St,A,P,_,T,F),b.el=St.el}if(et&&Ot(et,T),!ft&&(N=H&&H.onVnodeMounted)){const St=b;Ot(()=>fe(N,lt,St),T)}(b.shapeFlag&256||lt&&Us(lt.vnode)&&lt.vnode.shapeFlag&256)&&_.a&&Ot(_.a,T),_.isMounted=!0,b=A=P=null}},z=_.effect=new oo(B,Yt,()=>mo(E),_.scope),E=_.update=()=>{z.dirty&&z.run()};E.id=_.uid,Ke(_,!0),E()},Z=(_,b,A)=>{b.component=_;const P=_.vnode.props;_.vnode=b,_.next=null,qf(_,b.props,P,A),Qf(_,b.children,A),$e(),ia(_),He()},nt=(_,b,A,P,T,F,L,B,z=!1)=>{const E=_&&_.children,N=_?_.shapeFlag:0,W=b.children,{patchFlag:H,shapeFlag:K}=b;if(H>0){if(H&128){V(E,W,A,P,T,F,L,B,z);return}else if(H&256){D(E,W,A,P,T,F,L,B,z);return}}K&8?(N&16&&Et(E,T,F),W!==E&&c(A,W)):N&16?K&16?V(E,W,A,P,T,F,L,B,z):Et(E,T,F,!0):(N&8&&c(A,""),K&16&&k(W,A,P,T,F,L,B,z))},D=(_,b,A,P,T,F,L,B,z)=>{_=_||vn,b=b||vn;const E=_.length,N=b.length,W=Math.min(E,N);let H;for(H=0;H<W;H++){const K=b[H]=z?Oe(b[H]):me(b[H]);g(_[H],K,A,null,T,F,L,B,z)}E>N?Et(_,T,F,!0,!1,W):k(b,A,P,T,F,L,B,z,W)},V=(_,b,A,P,T,F,L,B,z)=>{let E=0;const N=b.length;let W=_.length-1,H=N-1;for(;E<=W&&E<=H;){const K=_[E],et=b[E]=z?Oe(b[E]):me(b[E]);if(on(K,et))g(K,et,A,null,T,F,L,B,z);else break;E++}for(;E<=W&&E<=H;){const K=_[W],et=b[H]=z?Oe(b[H]):me(b[H]);if(on(K,et))g(K,et,A,null,T,F,L,B,z);else break;W--,H--}if(E>W){if(E<=H){const K=H+1,et=K<N?b[K].el:P;for(;E<=H;)g(null,b[E]=z?Oe(b[E]):me(b[E]),A,et,T,F,L,B,z),E++}}else if(E>H)for(;E<=W;)tt(_[E],T,F,!0),E++;else{const K=E,et=E,lt=new Map;for(E=et;E<=H;E++){const Dt=b[E]=z?Oe(b[E]):me(b[E]);Dt.key!=null&&lt.set(Dt.key,E)}let ft,St=0;const te=H-et+1;let fn=!1,Xo=0;const Rn=new Array(te);for(E=0;E<te;E++)Rn[E]=0;for(E=K;E<=W;E++){const Dt=_[E];if(St>=te){tt(Dt,T,F,!0);continue}let he;if(Dt.key!=null)he=lt.get(Dt.key);else for(ft=et;ft<=H;ft++)if(Rn[ft-et]===0&&on(Dt,b[ft])){he=ft;break}he===void 0?tt(Dt,T,F,!0):(Rn[he-et]=E+1,he>=Xo?Xo=he:fn=!0,g(Dt,b[he],A,null,T,F,L,B,z),St++)}const Yo=fn?nd(Rn):vn;for(ft=Yo.length-1,E=te-1;E>=0;E--){const Dt=et+E,he=b[Dt],qo=Dt+1<N?b[Dt+1].el:P;Rn[E]===0?g(null,he,A,qo,T,F,L,B,z):fn&&(ft<0||E!==Yo[ft]?Wt(he,A,qo,2):ft--)}}},Wt=(_,b,A,P,T=null)=>{const{el:F,type:L,transition:B,children:z,shapeFlag:E}=_;if(E&6){Wt(_.component.subTree,b,A,P);return}if(E&128){_.suspense.move(b,A,P);return}if(E&64){L.move(_,b,A,Ee);return}if(L===Lt){s(F,b,A);for(let W=0;W<z.length;W++)Wt(z[W],b,A,P);s(_.anchor,b,A);return}if(L===Ii){x(_,b,A);return}if(P!==2&&E&1&&B)if(P===0)B.beforeEnter(F),s(F,b,A),Ot(()=>B.enter(F),T);else{const{leave:W,delayLeave:H,afterLeave:K}=B,et=()=>s(F,b,A),lt=()=>{W(F,()=>{et(),K&&K()})};H?H(F,et,lt):lt()}else s(F,b,A)},tt=(_,b,A,P=!1,T=!1)=>{const{type:F,props:L,ref:B,children:z,dynamicChildren:E,shapeFlag:N,patchFlag:W,dirs:H}=_;if(B!=null&&Mr(B,null,A,_,!0),N&256){b.ctx.deactivate(_);return}const K=N&1&&H,et=!Us(_);let lt;if(et&&(lt=L&&L.onVnodeBeforeUnmount)&&fe(lt,b,_),N&6)Jt(_.component,A,P);else{if(N&128){_.suspense.unmount(A,P);return}K&&qe(_,null,b,"beforeUnmount"),N&64?_.type.remove(_,b,A,T,Ee,P):E&&(F!==Lt||W>0&&W&64)?Et(E,b,A,!1,!0):(F===Lt&&W&384||!T&&N&16)&&Et(z,b,A),P&&kt(_)}(et&&(lt=L&&L.onVnodeUnmounted)||K)&&Ot(()=>{lt&&fe(lt,b,_),K&&qe(_,null,b,"unmounted")},A)},kt=_=>{const{type:b,el:A,anchor:P,transition:T}=_;if(b===Lt){ue(A,P);return}if(b===Ii){w(_);return}const F=()=>{i(A),T&&!T.persisted&&T.afterLeave&&T.afterLeave()};if(_.shapeFlag&1&&T&&!T.persisted){const{leave:L,delayLeave:B}=T,z=()=>L(A,F);B?B(_.el,F,z):z()}else F()},ue=(_,b)=>{let A;for(;_!==b;)A=f(_),i(_),_=A;i(b)},Jt=(_,b,A)=>{const{bum:P,scope:T,update:F,subTree:L,um:B}=_;P&&Si(P),T.stop(),F&&(F.active=!1,tt(L,_,b,A)),B&&Ot(B,b),Ot(()=>{_.isUnmounted=!0},b),b&&b.pendingBranch&&!b.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===b.pendingId&&(b.deps--,b.deps===0&&b.resolve())},Et=(_,b,A,P=!1,T=!1,F=0)=>{for(let L=F;L<_.length;L++)tt(_[L],b,A,P,T)},Xe=_=>_.shapeFlag&6?Xe(_.component.subTree):_.shapeFlag&128?_.suspense.next():f(_.anchor||_.el);let Te=!1;const ke=(_,b,A)=>{_==null?b._vnode&&tt(b._vnode,null,null,!0):g(b._vnode||null,_,b,null,null,null,A),Te||(Te=!0,ia(),dc(),Te=!1),b._vnode=_},Ee={p:g,um:tt,m:Wt,r:kt,mt:U,mc:k,pc:nt,pbc:C,n:Xe,o:e};let Bn,Ye;return{render:ke,hydrate:Bn,createApp:Vf(ke,Bn)}}function Ei({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Ke({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function ed(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Fc(e,t,n=!1){const s=e.children,i=t.children;if(X(s)&&X(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Oe(i[r]),a.el=o.el),n||Fc(o,a)),a.type===pi&&(a.el=o.el)}}function nd(e){const t=e.slice(),n=[0];let s,i,r,o,a;const l=e.length;for(s=0;s<l;s++){const u=e[s];if(u!==0){if(i=n[n.length-1],e[i]<u){t[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,e[n[a]]<u?r=a+1:o=a;u<e[n[r]]&&(r>0&&(t[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=t[o];return n}function Bc(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Bc(t)}const sd=e=>e.__isTeleport,Lt=Symbol.for("v-fgt"),pi=Symbol.for("v-txt"),qt=Symbol.for("v-cmt"),Ii=Symbol.for("v-stc"),Zn=[];let ae=null;function se(e=!1){Zn.push(ae=e?null:[])}function id(){Zn.pop(),ae=Zn[Zn.length-1]||null}let as=1;function ma(e){as+=e}function Rc(e){return e.dynamicChildren=as>0?ae||vn:null,id(),as>0&&ae&&ae.push(e),e}function be(e,t,n,s,i,r){return Rc(_e(e,t,n,s,i,r,!0))}function zc(e,t,n,s,i){return Rc(Bt(e,t,n,s,i,!0))}function Pr(e){return e?e.__v_isVNode===!0:!1}function on(e,t){return e.type===t.type&&e.key===t.key}const Oc=({key:e})=>e??null,Gs=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?bt(e)||Ut(e)||J(e)?{i:oe,r:e,k:t,f:!!n}:e:null);function _e(e,t=null,n=null,s=0,i=null,r=e===Lt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Oc(t),ref:t&&Gs(t),scopeId:ci,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:oe};return a?(vo(l,n),r&128&&e.normalize(l)):n&&(l.shapeFlag|=bt(n)?8:16),as>0&&!o&&ae&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&ae.push(l),l}const Bt=rd;function rd(e,t=null,n=null,s=0,i=null,r=!1){if((!e||e===_f)&&(e=qt),Pr(e)){const a=Ge(e,t,!0);return n&&vo(a,n),as>0&&!r&&ae&&(a.shapeFlag&6?ae[ae.indexOf(e)]=a:ae.push(a)),a.patchFlag|=-2,a}if(xd(e)&&(e=e.__vccOpts),t){t=od(t);let{class:a,style:l}=t;a&&!bt(a)&&(t.class=gs(a)),ht(l)&&(rc(l)&&!X(l)&&(l=Ct({},l)),t.style=ro(l))}const o=bt(e)?1:yf(e)?128:sd(e)?64:ht(e)?4:J(e)?2:0;return _e(e,t,n,s,i,o,r,!0)}function od(e){return e?rc(e)||Mc(e)?Ct({},e):e:null}function Ge(e,t,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:a,transition:l}=e,u=t?ld(i||{},t):i,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&Oc(u),ref:t&&t.ref?n&&r?X(r)?r.concat(Gs(t)):[r,Gs(t)]:Gs(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Lt?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ge(e.ssContent),ssFallback:e.ssFallback&&Ge(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&s&&(c.transition=l.clone(c)),c}function ad(e=" ",t=0){return Bt(pi,null,e,t)}function dn(e="",t=!1){return t?(se(),zc(qt,null,e)):Bt(qt,null,e)}function me(e){return e==null||typeof e=="boolean"?Bt(qt):X(e)?Bt(Lt,null,e.slice()):typeof e=="object"?Oe(e):Bt(pi,null,String(e))}function Oe(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ge(e)}function vo(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(X(t))n=16;else if(typeof t=="object")if(s&65){const i=t.default;i&&(i._c&&(i._d=!1),vo(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!Mc(t)?t._ctx=oe:i===3&&oe&&(oe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else J(t)?(t={default:t,_ctx:oe},n=32):(t=String(t),s&64?(n=16,t=[ad(t)]):n=8);e.children=t,e.shapeFlag|=n}function ld(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const i in s)if(i==="class")t.class!==s.class&&(t.class=gs([t.class,s.class]));else if(i==="style")t.style=ro([t.style,s.style]);else if(si(i)){const r=t[i],o=s[i];o&&r!==o&&!(X(r)&&r.includes(o))&&(t[i]=r?[].concat(r,o):o)}else i!==""&&(t[i]=s[i])}return t}function fe(e,t,n,s=null){Zt(e,t,7,[n,s])}const cd=Ac();let ud=0;function hd(e,t,n){const s=e.type,i=(t?t.appContext:e.appContext)||cd,r={uid:ud++,vnode:e,type:s,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Fh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Tc(s,i),emitsOptions:mc(s,i),emit:null,emitted:null,propsDefaults:dt,inheritAttrs:s.inheritAttrs,ctx:dt,data:dt,props:dt,attrs:dt,slots:dt,refs:dt,setupState:dt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=ff.bind(null,r),e.ce&&e.ce(r),r}let Ft=null;const fd=()=>Ft||oe;let qs,Tr;{const e=$l(),t=(n,s)=>{let i;return(i=e[n])||(i=e[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};qs=t("__VUE_INSTANCE_SETTERS__",n=>Ft=n),Tr=t("__VUE_SSR_SETTERS__",n=>mi=n)}const vs=e=>{const t=Ft;return qs(e),e.scope.on(),()=>{e.scope.off(),qs(t)}},ga=()=>{Ft&&Ft.scope.off(),qs(null)};function Lc(e){return e.vnode.shapeFlag&4}let mi=!1;function dd(e,t=!1){t&&Tr(t);const{props:n,children:s}=e.vnode,i=Lc(e);Yf(e,n,i,t),Zf(e,s);const r=i?pd(e,t):void 0;return t&&Tr(!1),r}function pd(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Nf);const{setup:s}=n;if(s){const i=e.setupContext=s.length>1?gd(e):null,r=vs(e);$e();const o=Ue(s,e,0,[e.props,i]);if(He(),r(),jl(o)){if(o.then(ga,ga),t)return o.then(a=>{xa(e,a,t)}).catch(a=>{ai(a,e,0)});e.asyncDep=o}else xa(e,o,t)}else jc(e,t)}function xa(e,t,n){J(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ht(t)&&(e.setupState=cc(t)),jc(e,n)}let va;function jc(e,t,n){const s=e.type;if(!e.render){if(!t&&va&&!s.render){const i=s.template||go(e).template;if(i){const{isCustomElement:r,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:l}=s,u=Ct(Ct({isCustomElement:r,delimiters:a},o),l);s.render=va(i,u)}}e.render=s.render||Yt}{const i=vs(e);$e();try{Uf(e)}finally{He(),i()}}}const md={get(e,t){return Nt(e,"get",""),e[t]}};function gd(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,md),slots:e.slots,emit:e.emit,expose:t}}function _o(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(cc(ef(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in qn)return qn[n](e)},has(t,n){return n in t||n in qn}}))}function xd(e){return J(e)&&"__vccOpts"in e}const Nc=(e,t)=>nf(e,t,mi);function vd(e,t,n){const s=arguments.length;return s===2?ht(t)&&!X(t)?Pr(t)?Bt(e,null,[t]):Bt(e,t):Bt(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Pr(n)&&(n=[n]),Bt(e,t,n))}const _d="3.4.27";/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const yd="http://www.w3.org/2000/svg",bd="http://www.w3.org/1998/Math/MathML",Le=typeof document<"u"?document:null,_a=Le&&Le.createElement("template"),wd={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const i=t==="svg"?Le.createElementNS(yd,e):t==="mathml"?Le.createElementNS(bd,e):Le.createElement(e,n?{is:n}:void 0);return e==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:e=>Le.createTextNode(e),createComment:e=>Le.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Le.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,i,r){const o=n?n.previousSibling:t.lastChild;if(i&&(i===r||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{_a.innerHTML=s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e;const a=_a.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Fe="transition",zn="animation",ls=Symbol("_vtc"),Ks=(e,{slots:t})=>vd(Pf,Ad(e),t);Ks.displayName="Transition";const Uc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Ks.props=Ct({},vc,Uc);const Ze=(e,t=[])=>{X(e)?e.forEach(n=>n(...t)):e&&e(...t)},ya=e=>e?X(e)?e.some(t=>t.length>1):e.length>1:!1;function Ad(e){const t={};for(const j in e)j in Uc||(t[j]=e[j]);if(e.css===!1)return t;const{name:n="v",type:s,duration:i,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:u=o,appearToClass:c=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:d=`${n}-leave-to`}=e,p=Cd(i),g=p&&p[0],m=p&&p[1],{onBeforeEnter:y,onEnter:v,onEnterCancelled:x,onLeave:w,onLeaveCancelled:I,onBeforeAppear:M=y,onAppear:R=v,onAppearCancelled:k=x}=t,S=(j,O,U)=>{Qe(j,O?c:a),Qe(j,O?u:o),U&&U()},C=(j,O)=>{j._isLeaving=!1,Qe(j,h),Qe(j,d),Qe(j,f),O&&O()},Y=j=>(O,U)=>{const st=j?R:v,Q=()=>S(O,j,U);Ze(st,[O,Q]),ba(()=>{Qe(O,j?l:r),Be(O,j?c:a),ya(st)||wa(O,s,g,Q)})};return Ct(t,{onBeforeEnter(j){Ze(y,[j]),Be(j,r),Be(j,o)},onBeforeAppear(j){Ze(M,[j]),Be(j,l),Be(j,u)},onEnter:Y(!1),onAppear:Y(!0),onLeave(j,O){j._isLeaving=!0;const U=()=>C(j,O);Be(j,h),Be(j,f),Pd(),ba(()=>{j._isLeaving&&(Qe(j,h),Be(j,d),ya(w)||wa(j,s,m,U))}),Ze(w,[j,U])},onEnterCancelled(j){S(j,!1),Ze(x,[j])},onAppearCancelled(j){S(j,!0),Ze(k,[j])},onLeaveCancelled(j){C(j),Ze(I,[j])}})}function Cd(e){if(e==null)return null;if(ht(e))return[Fi(e.enter),Fi(e.leave)];{const t=Fi(e);return[t,t]}}function Fi(e){return Sh(e)}function Be(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[ls]||(e[ls]=new Set)).add(t)}function Qe(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const n=e[ls];n&&(n.delete(t),n.size||(e[ls]=void 0))}function ba(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Sd=0;function wa(e,t,n,s){const i=e._endId=++Sd,r=()=>{i===e._endId&&s()};if(n)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=Md(e,t);if(!o)return s();const u=o+"end";let c=0;const h=()=>{e.removeEventListener(u,f),r()},f=d=>{d.target===e&&++c>=l&&h()};setTimeout(()=>{c<l&&h()},a+1),e.addEventListener(u,f)}function Md(e,t){const n=window.getComputedStyle(e),s=p=>(n[p]||"").split(", "),i=s(`${Fe}Delay`),r=s(`${Fe}Duration`),o=Aa(i,r),a=s(`${zn}Delay`),l=s(`${zn}Duration`),u=Aa(a,l);let c=null,h=0,f=0;t===Fe?o>0&&(c=Fe,h=o,f=r.length):t===zn?u>0&&(c=zn,h=u,f=l.length):(h=Math.max(o,u),c=h>0?o>u?Fe:zn:null,f=c?c===Fe?r.length:l.length:0);const d=c===Fe&&/\b(transform|all)(,|$)/.test(s(`${Fe}Property`).toString());return{type:c,timeout:h,propCount:f,hasTransform:d}}function Aa(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,s)=>Ca(n)+Ca(e[s])))}function Ca(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Pd(){return document.body.offsetHeight}function Td(e,t,n){const s=e[ls];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Sa=Symbol("_vod"),kd=Symbol("_vsh"),Ed=Symbol(""),Id=/(^|;)\s*display\s*:/;function Fd(e,t,n){const s=e.style,i=bt(n);let r=!1;if(n&&!i){if(t)if(bt(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&$s(s,a,"")}else for(const o in t)n[o]==null&&$s(s,o,"");for(const o in n)o==="display"&&(r=!0),$s(s,o,n[o])}else if(i){if(t!==n){const o=s[Ed];o&&(n+=";"+o),s.cssText=n,r=Id.test(n)}}else t&&e.removeAttribute("style");Sa in e&&(e[Sa]=r?s.display:"",e[kd]&&(s.display="none"))}const Ma=/\s*!important$/;function $s(e,t,n){if(X(n))n.forEach(s=>$s(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=Bd(e,t);Ma.test(n)?e.setProperty(Tn(s),n.replace(Ma,""),"important"):e[s]=n}}const Pa=["Webkit","Moz","ms"],Bi={};function Bd(e,t){const n=Bi[t];if(n)return n;let s=An(t);if(s!=="filter"&&s in e)return Bi[t]=s;s=Dl(s);for(let i=0;i<Pa.length;i++){const r=Pa[i]+s;if(r in e)return Bi[t]=r}return t}const Ta="http://www.w3.org/1999/xlink";function Rd(e,t,n,s,i){if(s&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ta,t.slice(6,t.length)):e.setAttributeNS(Ta,t,n);else{const r=Ih(t);n==null||r&&!Hl(n)?e.removeAttribute(t):e.setAttribute(t,r?"":n)}}function zd(e,t,n,s,i,r,o){if(t==="innerHTML"||t==="textContent"){s&&o(s,i,r),e[t]=n??"";return}const a=e.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){const u=a==="OPTION"?e.getAttribute("value")||"":e.value,c=n??"";(u!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let l=!1;if(n===""||n==null){const u=typeof e[t];u==="boolean"?n=Hl(n):n==null&&u==="string"?(n="",l=!0):u==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function Od(e,t,n,s){e.addEventListener(t,n,s)}function Ld(e,t,n,s){e.removeEventListener(t,n,s)}const ka=Symbol("_vei");function jd(e,t,n,s,i=null){const r=e[ka]||(e[ka]={}),o=r[t];if(s&&o)o.value=s;else{const[a,l]=Nd(t);if(s){const u=r[t]=Gd(s,i);Od(e,a,u,l)}else o&&(Ld(e,a,o,l),r[t]=void 0)}}const Ea=/(?:Once|Passive|Capture)$/;function Nd(e){let t;if(Ea.test(e)){t={};let s;for(;s=e.match(Ea);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Tn(e.slice(2)),t]}let Ri=0;const Ud=Promise.resolve(),Dd=()=>Ri||(Ud.then(()=>Ri=0),Ri=Date.now());function Gd(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Zt($d(s,n.value),t,5,[s])};return n.value=e,n.attached=Dd(),n}function $d(e,t){if(X(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>i=>!i._stopped&&s&&s(i))}else return t}const Ia=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Hd=(e,t,n,s,i,r,o,a,l)=>{const u=i==="svg";t==="class"?Td(e,s,u):t==="style"?Fd(e,n,s):si(t)?no(t)||jd(e,t,n,s,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Wd(e,t,s,u))?zd(e,t,s,r,o,a,l):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),Rd(e,t,s,u))};function Wd(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&Ia(t)&&J(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Ia(t)&&bt(n)?!1:t in e}const Vd=Ct({patchProp:Hd},wd);let Fa;function Xd(){return Fa||(Fa=Jf(Vd))}const Yd=(...e)=>{const t=Xd().createApp(...e),{mount:n}=t;return t.mount=s=>{const i=Kd(s);if(!i)return;const r=t._component;!J(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,qd(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function qd(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Kd(e){return bt(e)?document.querySelector(e):e}var Zd=`#version 300 es
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
        
        
        

        
        
        
        
        
        
        
        
        

}`;const tp=Object.freeze(Object.defineProperty({__proto__:null,default:Jd},Symbol.toStringTag,{value:"Module"}));var ep=`#version 300 es
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
  
}`;const np=Object.freeze(Object.defineProperty({__proto__:null,default:ep},Symbol.toStringTag,{value:"Module"}));var sp=`#version 300 es
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
  
  
}`;const ip=Object.freeze(Object.defineProperty({__proto__:null,default:sp},Symbol.toStringTag,{value:"Module"}));var rp=`#version 300 es
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

}`;const op=Object.freeze(Object.defineProperty({__proto__:null,default:rp},Symbol.toStringTag,{value:"Module"}));var ap=`#version 300 es
    precision highp float;
    uniform float u_time;
    out vec4 fragColor;
    void main(){
      fragColor = vec4(0.0, pow(sin(u_time * 0.41) * 0.5 + 0.5, .4), 0.0,  1.0);
    }`;const lp=Object.freeze(Object.defineProperty({__proto__:null,default:ap},Symbol.toStringTag,{value:"Module"}));var cp=`#version 300 es
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

}`;const up=Object.freeze(Object.defineProperty({__proto__:null,default:cp},Symbol.toStringTag,{value:"Module"}));var hp=`#version 300 es
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

}`;const fp=Object.freeze(Object.defineProperty({__proto__:null,default:hp},Symbol.toStringTag,{value:"Module"}));var dp=`#version 300 es
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

}`;const pp=Object.freeze(Object.defineProperty({__proto__:null,default:dp},Symbol.toStringTag,{value:"Module"}));var mp=`#version 300 es
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
}`;const gp=Object.freeze(Object.defineProperty({__proto__:null,default:mp},Symbol.toStringTag,{value:"Module"}));var xp=`#version 300 es

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
    
    
    
    
}`;const vp=Object.freeze(Object.defineProperty({__proto__:null,default:xp},Symbol.toStringTag,{value:"Module"}));var _p=`#version 300 es

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
    
    
    
    
}`;const yp=Object.freeze(Object.defineProperty({__proto__:null,default:_p},Symbol.toStringTag,{value:"Module"}));var bp=`#version 300 es
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
}`;const wp=Object.freeze(Object.defineProperty({__proto__:null,default:bp},Symbol.toStringTag,{value:"Module"}));var Ap=`#version 300 es
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

}`;const Cp=Object.freeze(Object.defineProperty({__proto__:null,default:Ap},Symbol.toStringTag,{value:"Module"}));var Sp=`#version 300 es
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

    
}`;const Mp=Object.freeze(Object.defineProperty({__proto__:null,default:Sp},Symbol.toStringTag,{value:"Module"}));var Pp=`#version 300 es
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
}`;const Tp=Object.freeze(Object.defineProperty({__proto__:null,default:Pp},Symbol.toStringTag,{value:"Module"}));var kp=`#version 300 es
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
    

}`;const Ep=Object.freeze(Object.defineProperty({__proto__:null,default:kp},Symbol.toStringTag,{value:"Module"}));var Ip=`#version 300 es
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

}`;const Fp=Object.freeze(Object.defineProperty({__proto__:null,default:Ip},Symbol.toStringTag,{value:"Module"}));var Bp=`#version 300 es
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
}`;const Rp=Object.freeze(Object.defineProperty({__proto__:null,default:Bp},Symbol.toStringTag,{value:"Module"}));var zp=`#version 300 es
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

}`;const Op=Object.freeze(Object.defineProperty({__proto__:null,default:zp},Symbol.toStringTag,{value:"Module"}));var Lp=`#version 300 es
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

}`;const jp=Object.freeze(Object.defineProperty({__proto__:null,default:Lp},Symbol.toStringTag,{value:"Module"})),Np="modulepreload",Up=function(e){return"/nngl/"+e},Ba={},Zs=function(t,n,s){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),o=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));i=Promise.all(n.map(a=>{if(a=Up(a),a in Ba)return;Ba[a]=!0;const l=a.endsWith(".css"),u=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${u}`))return;const c=document.createElement("link");if(c.rel=l?"stylesheet":Np,l||(c.as="script",c.crossOrigin=""),c.href=a,o&&c.setAttribute("nonce",o),document.head.appendChild(c),l)return new Promise((h,f)=>{c.addEventListener("load",h),c.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${a}`)))})}))}return i.then(()=>t()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})};var q=(e=>(e.Application="application",e.WebGLPipes="webgl-pipes",e.WebGLPipesAdaptor="webgl-pipes-adaptor",e.WebGLSystem="webgl-system",e.WebGPUPipes="webgpu-pipes",e.WebGPUPipesAdaptor="webgpu-pipes-adaptor",e.WebGPUSystem="webgpu-system",e.CanvasSystem="canvas-system",e.CanvasPipesAdaptor="canvas-pipes-adaptor",e.CanvasPipes="canvas-pipes",e.Asset="asset",e.LoadParser="load-parser",e.ResolveParser="resolve-parser",e.CacheParser="cache-parser",e.DetectionParser="detection-parser",e.MaskEffect="mask-effect",e.BlendMode="blend-mode",e.TextureSource="texture-source",e.Environment="environment",e))(q||{});const kr=e=>{if(typeof e=="function"||typeof e=="object"&&e.extension){if(!e.extension)throw new Error("Extension class must have an extension object");e={...typeof e.extension!="object"?{type:e.extension}:e.extension,ref:e}}if(typeof e=="object")e={...e};else throw new Error("Invalid extension type");return typeof e.type=="string"&&(e.type=[e.type]),e},Ms=(e,t)=>kr(e).priority??t,Qt={_addHandlers:{},_removeHandlers:{},_queue:{},remove(...e){return e.map(kr).forEach(t=>{t.type.forEach(n=>{var s,i;return(i=(s=this._removeHandlers)[n])==null?void 0:i.call(s,t)})}),this},add(...e){return e.map(kr).forEach(t=>{t.type.forEach(n=>{var r,o;const s=this._addHandlers,i=this._queue;s[n]?(o=s[n])==null||o.call(s,t):(i[n]=i[n]||[],(r=i[n])==null||r.push(t))})}),this},handle(e,t,n){var o;const s=this._addHandlers,i=this._removeHandlers;if(s[e]||i[e])throw new Error(`Extension type ${e} already has a handler`);s[e]=t,i[e]=n;const r=this._queue;return r[e]&&((o=r[e])==null||o.forEach(a=>t(a)),delete r[e]),this},handleByMap(e,t){return this.handle(e,n=>{n.name&&(t[n.name]=n.ref)},n=>{n.name&&delete t[n.name]})},handleByNamedList(e,t,n=-1){return this.handle(e,s=>{t.findIndex(r=>r.name===s.name)>=0||(t.push({name:s.name,value:s.ref}),t.sort((r,o)=>Ms(o.value,n)-Ms(r.value,n)))},s=>{const i=t.findIndex(r=>r.name===s.name);i!==-1&&t.splice(i,1)})},handleByList(e,t,n=-1){return this.handle(e,s=>{t.includes(s.ref)||(t.push(s.ref),t.sort((i,r)=>Ms(r,n)-Ms(i,n)))},s=>{const i=t.indexOf(s.ref);i!==-1&&t.splice(i,1)})}},Dp={extension:{type:q.Environment,name:"browser",priority:-1},test:()=>!0,load:async()=>{await Zs(()=>import("./browserAll-BctO8Pgq.js"),__vite__mapDeps([0,1,2,3]))}},Gp={extension:{type:q.Environment,name:"webworker",priority:0},test:()=>typeof self<"u"&&self.WorkerGlobalScope!==void 0,load:async()=>{await Zs(()=>import("./webworkerAll-CUpuMAV8.js"),__vite__mapDeps([1,2,3]))}};class $t{constructor(t,n,s){this._x=n||0,this._y=s||0,this._observer=t}clone(t){return new $t(t??this._observer,this._x,this._y)}set(t=0,n=t){return(this._x!==t||this._y!==n)&&(this._x=t,this._y=n,this._observer._onUpdate(this)),this}copyFrom(t){return(this._x!==t.x||this._y!==t.y)&&(this._x=t.x,this._y=t.y,this._observer._onUpdate(this)),this}copyTo(t){return t.set(this._x,this._y),t}equals(t){return t.x===this._x&&t.y===this._y}toString(){return`[pixi.js/math:ObservablePoint x=0 y=0 scope=${this._observer}]`}get x(){return this._x}set x(t){this._x!==t&&(this._x=t,this._observer._onUpdate(this))}get y(){return this._y}set y(t){this._y!==t&&(this._y=t,this._observer._onUpdate(this))}}function yo(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Dc={exports:{}};(function(e){var t=Object.prototype.hasOwnProperty,n="~";function s(){}Object.create&&(s.prototype=Object.create(null),new s().__proto__||(n=!1));function i(l,u,c){this.fn=l,this.context=u,this.once=c||!1}function r(l,u,c,h,f){if(typeof c!="function")throw new TypeError("The listener must be a function");var d=new i(c,h||l,f),p=n?n+u:u;return l._events[p]?l._events[p].fn?l._events[p]=[l._events[p],d]:l._events[p].push(d):(l._events[p]=d,l._eventsCount++),l}function o(l,u){--l._eventsCount===0?l._events=new s:delete l._events[u]}function a(){this._events=new s,this._eventsCount=0}a.prototype.eventNames=function(){var u=[],c,h;if(this._eventsCount===0)return u;for(h in c=this._events)t.call(c,h)&&u.push(n?h.slice(1):h);return Object.getOwnPropertySymbols?u.concat(Object.getOwnPropertySymbols(c)):u},a.prototype.listeners=function(u){var c=n?n+u:u,h=this._events[c];if(!h)return[];if(h.fn)return[h.fn];for(var f=0,d=h.length,p=new Array(d);f<d;f++)p[f]=h[f].fn;return p},a.prototype.listenerCount=function(u){var c=n?n+u:u,h=this._events[c];return h?h.fn?1:h.length:0},a.prototype.emit=function(u,c,h,f,d,p){var g=n?n+u:u;if(!this._events[g])return!1;var m=this._events[g],y=arguments.length,v,x;if(m.fn){switch(m.once&&this.removeListener(u,m.fn,void 0,!0),y){case 1:return m.fn.call(m.context),!0;case 2:return m.fn.call(m.context,c),!0;case 3:return m.fn.call(m.context,c,h),!0;case 4:return m.fn.call(m.context,c,h,f),!0;case 5:return m.fn.call(m.context,c,h,f,d),!0;case 6:return m.fn.call(m.context,c,h,f,d,p),!0}for(x=1,v=new Array(y-1);x<y;x++)v[x-1]=arguments[x];m.fn.apply(m.context,v)}else{var w=m.length,I;for(x=0;x<w;x++)switch(m[x].once&&this.removeListener(u,m[x].fn,void 0,!0),y){case 1:m[x].fn.call(m[x].context);break;case 2:m[x].fn.call(m[x].context,c);break;case 3:m[x].fn.call(m[x].context,c,h);break;case 4:m[x].fn.call(m[x].context,c,h,f);break;default:if(!v)for(I=1,v=new Array(y-1);I<y;I++)v[I-1]=arguments[I];m[x].fn.apply(m[x].context,v)}}return!0},a.prototype.on=function(u,c,h){return r(this,u,c,h,!1)},a.prototype.once=function(u,c,h){return r(this,u,c,h,!0)},a.prototype.removeListener=function(u,c,h,f){var d=n?n+u:u;if(!this._events[d])return this;if(!c)return o(this,d),this;var p=this._events[d];if(p.fn)p.fn===c&&(!f||p.once)&&(!h||p.context===h)&&o(this,d);else{for(var g=0,m=[],y=p.length;g<y;g++)(p[g].fn!==c||f&&!p[g].once||h&&p[g].context!==h)&&m.push(p[g]);m.length?this._events[d]=m.length===1?m[0]:m:o(this,d)}return this},a.prototype.removeAllListeners=function(u){var c;return u?(c=n?n+u:u,this._events[c]&&o(this,c)):(this._events=new s,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=n,a.EventEmitter=a,e.exports=a})(Dc);var $p=Dc.exports;const le=yo($p),Hp=Math.PI*2,Wp=180/Math.PI,Vp=Math.PI/180;class _t{constructor(t=0,n=0){this.x=0,this.y=0,this.x=t,this.y=n}clone(){return new _t(this.x,this.y)}copyFrom(t){return this.set(t.x,t.y),this}copyTo(t){return t.set(this.x,this.y),t}equals(t){return t.x===this.x&&t.y===this.y}set(t=0,n=t){return this.x=t,this.y=n,this}toString(){return`[pixi.js/math:Point x=${this.x} y=${this.y}]`}static get shared(){return zi.x=0,zi.y=0,zi}}const zi=new _t;class at{constructor(t=1,n=0,s=0,i=1,r=0,o=0){this.array=null,this.a=t,this.b=n,this.c=s,this.d=i,this.tx=r,this.ty=o}fromArray(t){this.a=t[0],this.b=t[1],this.c=t[3],this.d=t[4],this.tx=t[2],this.ty=t[5]}set(t,n,s,i,r,o){return this.a=t,this.b=n,this.c=s,this.d=i,this.tx=r,this.ty=o,this}toArray(t,n){this.array||(this.array=new Float32Array(9));const s=n||this.array;return t?(s[0]=this.a,s[1]=this.b,s[2]=0,s[3]=this.c,s[4]=this.d,s[5]=0,s[6]=this.tx,s[7]=this.ty,s[8]=1):(s[0]=this.a,s[1]=this.c,s[2]=this.tx,s[3]=this.b,s[4]=this.d,s[5]=this.ty,s[6]=0,s[7]=0,s[8]=1),s}apply(t,n){n=n||new _t;const s=t.x,i=t.y;return n.x=this.a*s+this.c*i+this.tx,n.y=this.b*s+this.d*i+this.ty,n}applyInverse(t,n){n=n||new _t;const s=this.a,i=this.b,r=this.c,o=this.d,a=this.tx,l=this.ty,u=1/(s*o+r*-i),c=t.x,h=t.y;return n.x=o*u*c+-r*u*h+(l*r-a*o)*u,n.y=s*u*h+-i*u*c+(-l*s+a*i)*u,n}translate(t,n){return this.tx+=t,this.ty+=n,this}scale(t,n){return this.a*=t,this.d*=n,this.c*=t,this.b*=n,this.tx*=t,this.ty*=n,this}rotate(t){const n=Math.cos(t),s=Math.sin(t),i=this.a,r=this.c,o=this.tx;return this.a=i*n-this.b*s,this.b=i*s+this.b*n,this.c=r*n-this.d*s,this.d=r*s+this.d*n,this.tx=o*n-this.ty*s,this.ty=o*s+this.ty*n,this}append(t){const n=this.a,s=this.b,i=this.c,r=this.d;return this.a=t.a*n+t.b*i,this.b=t.a*s+t.b*r,this.c=t.c*n+t.d*i,this.d=t.c*s+t.d*r,this.tx=t.tx*n+t.ty*i+this.tx,this.ty=t.tx*s+t.ty*r+this.ty,this}appendFrom(t,n){const s=t.a,i=t.b,r=t.c,o=t.d,a=t.tx,l=t.ty,u=n.a,c=n.b,h=n.c,f=n.d;return this.a=s*u+i*h,this.b=s*c+i*f,this.c=r*u+o*h,this.d=r*c+o*f,this.tx=a*u+l*h+n.tx,this.ty=a*c+l*f+n.ty,this}setTransform(t,n,s,i,r,o,a,l,u){return this.a=Math.cos(a+u)*r,this.b=Math.sin(a+u)*r,this.c=-Math.sin(a-l)*o,this.d=Math.cos(a-l)*o,this.tx=t-(s*this.a+i*this.c),this.ty=n-(s*this.b+i*this.d),this}prepend(t){const n=this.tx;if(t.a!==1||t.b!==0||t.c!==0||t.d!==1){const s=this.a,i=this.c;this.a=s*t.a+this.b*t.c,this.b=s*t.b+this.b*t.d,this.c=i*t.a+this.d*t.c,this.d=i*t.b+this.d*t.d}return this.tx=n*t.a+this.ty*t.c+t.tx,this.ty=n*t.b+this.ty*t.d+t.ty,this}decompose(t){const n=this.a,s=this.b,i=this.c,r=this.d,o=t.pivot,a=-Math.atan2(-i,r),l=Math.atan2(s,n),u=Math.abs(a+l);return u<1e-5||Math.abs(Hp-u)<1e-5?(t.rotation=l,t.skew.x=t.skew.y=0):(t.rotation=0,t.skew.x=a,t.skew.y=l),t.scale.x=Math.sqrt(n*n+s*s),t.scale.y=Math.sqrt(i*i+r*r),t.position.x=this.tx+(o.x*n+o.y*i),t.position.y=this.ty+(o.x*s+o.y*r),t}invert(){const t=this.a,n=this.b,s=this.c,i=this.d,r=this.tx,o=t*i-n*s;return this.a=i/o,this.b=-n/o,this.c=-s/o,this.d=t/o,this.tx=(s*this.ty-i*r)/o,this.ty=-(t*this.ty-n*r)/o,this}isIdentity(){return this.a===1&&this.b===0&&this.c===0&&this.d===1&&this.tx===0&&this.ty===0}identity(){return this.a=1,this.b=0,this.c=0,this.d=1,this.tx=0,this.ty=0,this}clone(){const t=new at;return t.a=this.a,t.b=this.b,t.c=this.c,t.d=this.d,t.tx=this.tx,t.ty=this.ty,t}copyTo(t){return t.a=this.a,t.b=this.b,t.c=this.c,t.d=this.d,t.tx=this.tx,t.ty=this.ty,t}copyFrom(t){return this.a=t.a,this.b=t.b,this.c=t.c,this.d=t.d,this.tx=t.tx,this.ty=t.ty,this}equals(t){return t.a===this.a&&t.b===this.b&&t.c===this.c&&t.d===this.d&&t.tx===this.tx&&t.ty===this.ty}toString(){return`[pixi.js:Matrix a=${this.a} b=${this.b} c=${this.c} d=${this.d} tx=${this.tx} ty=${this.ty}]`}static get IDENTITY(){return Yp.identity()}static get shared(){return Xp.identity()}}const Xp=new at,Yp=new at,tn=[1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1,0,1],en=[0,1,1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1],nn=[0,-1,-1,-1,0,1,1,1,0,1,1,1,0,-1,-1,-1],sn=[1,1,0,-1,-1,-1,0,1,-1,-1,0,1,1,1,0,-1],Er=[],Gc=[],Ps=Math.sign;function qp(){for(let e=0;e<16;e++){const t=[];Er.push(t);for(let n=0;n<16;n++){const s=Ps(tn[e]*tn[n]+nn[e]*en[n]),i=Ps(en[e]*tn[n]+sn[e]*en[n]),r=Ps(tn[e]*nn[n]+nn[e]*sn[n]),o=Ps(en[e]*nn[n]+sn[e]*sn[n]);for(let a=0;a<16;a++)if(tn[a]===s&&en[a]===i&&nn[a]===r&&sn[a]===o){t.push(a);break}}}for(let e=0;e<16;e++){const t=new at;t.set(tn[e],en[e],nn[e],sn[e],0,0),Gc.push(t)}}qp();const pt={E:0,SE:1,S:2,SW:3,W:4,NW:5,N:6,NE:7,MIRROR_VERTICAL:8,MAIN_DIAGONAL:10,MIRROR_HORIZONTAL:12,REVERSE_DIAGONAL:14,uX:e=>tn[e],uY:e=>en[e],vX:e=>nn[e],vY:e=>sn[e],inv:e=>e&8?e&15:-e&7,add:(e,t)=>Er[e][t],sub:(e,t)=>Er[e][pt.inv(t)],rotate180:e=>e^4,isVertical:e=>(e&3)===2,byDirection:(e,t)=>Math.abs(e)*2<=Math.abs(t)?t>=0?pt.S:pt.N:Math.abs(t)*2<=Math.abs(e)?e>0?pt.E:pt.W:t>0?e>0?pt.SE:pt.SW:e>0?pt.NE:pt.NW,matrixAppendRotationInv:(e,t,n=0,s=0)=>{const i=Gc[pt.inv(t)];i.tx=n,i.ty=s,e.append(i)}},Ts=[new _t,new _t,new _t,new _t];class wt{constructor(t=0,n=0,s=0,i=0){this.type="rectangle",this.x=Number(t),this.y=Number(n),this.width=Number(s),this.height=Number(i)}get left(){return this.x}get right(){return this.x+this.width}get top(){return this.y}get bottom(){return this.y+this.height}isEmpty(){return this.left===this.right||this.top===this.bottom}static get EMPTY(){return new wt(0,0,0,0)}clone(){return new wt(this.x,this.y,this.width,this.height)}copyFromBounds(t){return this.x=t.minX,this.y=t.minY,this.width=t.maxX-t.minX,this.height=t.maxY-t.minY,this}copyFrom(t){return this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height,this}copyTo(t){return t.copyFrom(this),t}contains(t,n){return this.width<=0||this.height<=0?!1:t>=this.x&&t<this.x+this.width&&n>=this.y&&n<this.y+this.height}strokeContains(t,n,s){const{width:i,height:r}=this;if(i<=0||r<=0)return!1;const o=this.x,a=this.y,l=o-s/2,u=o+i+s/2,c=a-s/2,h=a+r+s/2,f=o+s/2,d=o+i-s/2,p=a+s/2,g=a+r-s/2;return t>=l&&t<=u&&n>=c&&n<=h&&!(t>f&&t<d&&n>p&&n<g)}intersects(t,n){if(!n){const k=this.x<t.x?t.x:this.x;if((this.right>t.right?t.right:this.right)<=k)return!1;const C=this.y<t.y?t.y:this.y;return(this.bottom>t.bottom?t.bottom:this.bottom)>C}const s=this.left,i=this.right,r=this.top,o=this.bottom;if(i<=s||o<=r)return!1;const a=Ts[0].set(t.left,t.top),l=Ts[1].set(t.left,t.bottom),u=Ts[2].set(t.right,t.top),c=Ts[3].set(t.right,t.bottom);if(u.x<=a.x||l.y<=a.y)return!1;const h=Math.sign(n.a*n.d-n.b*n.c);if(h===0||(n.apply(a,a),n.apply(l,l),n.apply(u,u),n.apply(c,c),Math.max(a.x,l.x,u.x,c.x)<=s||Math.min(a.x,l.x,u.x,c.x)>=i||Math.max(a.y,l.y,u.y,c.y)<=r||Math.min(a.y,l.y,u.y,c.y)>=o))return!1;const f=h*(l.y-a.y),d=h*(a.x-l.x),p=f*s+d*r,g=f*i+d*r,m=f*s+d*o,y=f*i+d*o;if(Math.max(p,g,m,y)<=f*a.x+d*a.y||Math.min(p,g,m,y)>=f*c.x+d*c.y)return!1;const v=h*(a.y-u.y),x=h*(u.x-a.x),w=v*s+x*r,I=v*i+x*r,M=v*s+x*o,R=v*i+x*o;return!(Math.max(w,I,M,R)<=v*a.x+x*a.y||Math.min(w,I,M,R)>=v*c.x+x*c.y)}pad(t=0,n=t){return this.x-=t,this.y-=n,this.width+=t*2,this.height+=n*2,this}fit(t){const n=Math.max(this.x,t.x),s=Math.min(this.x+this.width,t.x+t.width),i=Math.max(this.y,t.y),r=Math.min(this.y+this.height,t.y+t.height);return this.x=n,this.width=Math.max(s-n,0),this.y=i,this.height=Math.max(r-i,0),this}ceil(t=1,n=.001){const s=Math.ceil((this.x+this.width-n)*t)/t,i=Math.ceil((this.y+this.height-n)*t)/t;return this.x=Math.floor((this.x+n)*t)/t,this.y=Math.floor((this.y+n)*t)/t,this.width=s-this.x,this.height=i-this.y,this}enlarge(t){const n=Math.min(this.x,t.x),s=Math.max(this.x+this.width,t.x+t.width),i=Math.min(this.y,t.y),r=Math.max(this.y+this.height,t.y+t.height);return this.x=n,this.width=s-n,this.y=i,this.height=r-i,this}getBounds(t){return t=t||new wt,t.copyFrom(this),t}toString(){return`[pixi.js/math:Rectangle x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`}}const Oi={default:-1};function At(e="default"){return Oi[e]===void 0&&(Oi[e]=-1),++Oi[e]}const Ra={},ct="8.0.0";function ut(e,t,n=3){if(Ra[t])return;let s=new Error().stack;typeof s>"u"?console.warn("PixiJS Deprecation Warning: ",`${t}
Deprecated since v${e}`):(s=s.split(`
`).splice(n).join(`
`),console.groupCollapsed?(console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s","color:#614108;background:#fffbe6","font-weight:normal;color:#614108;background:#fffbe6",`${t}
Deprecated since v${e}`),console.warn(s),console.groupEnd()):(console.warn("PixiJS Deprecation Warning: ",`${t}
Deprecated since v${e}`),console.warn(s))),Ra[t]=!0}const $c=()=>{};function za(e){return e+=e===0?1:0,--e,e|=e>>>1,e|=e>>>2,e|=e>>>4,e|=e>>>8,e|=e>>>16,e+1}function Oa(e){return!(e&e-1)&&!!e}function Kp(e){const t={};for(const n in e)e[n]!==void 0&&(t[n]=e[n]);return t}const La=Object.create(null);function Zp(e){const t=La[e];return t===void 0&&(La[e]=At("resource")),t}const Hc=class Wc extends le{constructor(t={}){super(),this._resourceType="textureSampler",this._touched=0,this._maxAnisotropy=1,this.destroyed=!1,t={...Wc.defaultOptions,...t},this.addressMode=t.addressMode,this.addressModeU=t.addressModeU??this.addressModeU,this.addressModeV=t.addressModeV??this.addressModeV,this.addressModeW=t.addressModeW??this.addressModeW,this.scaleMode=t.scaleMode,this.magFilter=t.magFilter??this.magFilter,this.minFilter=t.minFilter??this.minFilter,this.mipmapFilter=t.mipmapFilter??this.mipmapFilter,this.lodMinClamp=t.lodMinClamp,this.lodMaxClamp=t.lodMaxClamp,this.compare=t.compare,this.maxAnisotropy=t.maxAnisotropy??1}set addressMode(t){this.addressModeU=t,this.addressModeV=t,this.addressModeW=t}get addressMode(){return this.addressModeU}set wrapMode(t){ut(ct,"TextureStyle.wrapMode is now TextureStyle.addressMode"),this.addressMode=t}get wrapMode(){return this.addressMode}set scaleMode(t){this.magFilter=t,this.minFilter=t,this.mipmapFilter=t}get scaleMode(){return this.magFilter}set maxAnisotropy(t){this._maxAnisotropy=Math.min(t,16),this._maxAnisotropy>1&&(this.scaleMode="linear")}get maxAnisotropy(){return this._maxAnisotropy}get _resourceId(){return this._sharedResourceId||this._generateResourceId()}update(){this.emit("change",this),this._sharedResourceId=null}_generateResourceId(){const t=`${this.addressModeU}-${this.addressModeV}-${this.addressModeW}-${this.magFilter}-${this.minFilter}-${this.mipmapFilter}-${this.lodMinClamp}-${this.lodMaxClamp}-${this.compare}-${this._maxAnisotropy}`;return this._sharedResourceId=Zp(t),this._resourceId}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this.removeAllListeners()}};Hc.defaultOptions={addressMode:"clamp-to-edge",scaleMode:"linear"};let Qp=Hc;const Vc=class Xc extends le{constructor(t={}){super(),this.options=t,this.uid=At("textureSource"),this._resourceType="textureSource",this._resourceId=At("resource"),this.uploadMethodId="unknown",this._resolution=1,this.pixelWidth=1,this.pixelHeight=1,this.width=1,this.height=1,this.sampleCount=1,this.mipLevelCount=1,this.autoGenerateMipmaps=!1,this.format="rgba8unorm",this.dimension="2d",this.antialias=!1,this._touched=0,this._batchTick=-1,this._textureBindLocation=-1,t={...Xc.defaultOptions,...t},this.label=t.label??"",this.resource=t.resource,this.autoGarbageCollect=t.autoGarbageCollect,this._resolution=t.resolution,t.width?this.pixelWidth=t.width*this._resolution:this.pixelWidth=this.resource?this.resourceWidth??1:1,t.height?this.pixelHeight=t.height*this._resolution:this.pixelHeight=this.resource?this.resourceHeight??1:1,this.width=this.pixelWidth/this._resolution,this.height=this.pixelHeight/this._resolution,this.format=t.format,this.dimension=t.dimensions,this.mipLevelCount=t.mipLevelCount,this.autoGenerateMipmaps=t.autoGenerateMipmaps,this.sampleCount=t.sampleCount,this.antialias=t.antialias,this.alphaMode=t.alphaMode,this.style=new Qp(Kp(t)),this.destroyed=!1,this._refreshPOT()}get source(){return this}get style(){return this._style}set style(t){var n,s;this.style!==t&&((n=this._style)==null||n.off("change",this._onStyleChange,this),this._style=t,(s=this._style)==null||s.on("change",this._onStyleChange,this),this._onStyleChange())}get addressMode(){return this._style.addressMode}set addressMode(t){this._style.addressMode=t}get repeatMode(){return this._style.addressMode}set repeatMode(t){this._style.addressMode=t}get magFilter(){return this._style.magFilter}set magFilter(t){this._style.magFilter=t}get minFilter(){return this._style.minFilter}set minFilter(t){this._style.minFilter=t}get mipmapFilter(){return this._style.mipmapFilter}set mipmapFilter(t){this._style.mipmapFilter=t}get lodMinClamp(){return this._style.lodMinClamp}set lodMinClamp(t){this._style.lodMinClamp=t}get lodMaxClamp(){return this._style.lodMaxClamp}set lodMaxClamp(t){this._style.lodMaxClamp=t}_onStyleChange(){this.emit("styleChange",this)}update(){if(this.resource){const t=this._resolution;if(this.resize(this.resourceWidth/t,this.resourceHeight/t))return}this.emit("update",this)}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this._style&&(this._style.destroy(),this._style=null),this.uploadMethodId=null,this.resource=null,this.removeAllListeners()}unload(){this._resourceId=At("resource"),this.emit("change",this),this.emit("unload",this)}get resourceWidth(){const{resource:t}=this;return t.naturalWidth||t.videoWidth||t.displayWidth||t.width}get resourceHeight(){const{resource:t}=this;return t.naturalHeight||t.videoHeight||t.displayHeight||t.height}get resolution(){return this._resolution}set resolution(t){this._resolution!==t&&(this._resolution=t,this.width=this.pixelWidth/t,this.height=this.pixelHeight/t)}resize(t,n,s){s=s||this._resolution,t=t||this.width,n=n||this.height;const i=Math.round(t*s),r=Math.round(n*s);return this.width=i/s,this.height=r/s,this._resolution=s,this.pixelWidth===i&&this.pixelHeight===r?!1:(this._refreshPOT(),this.pixelWidth=i,this.pixelHeight=r,this.emit("resize",this),this._resourceId=At("resource"),this.emit("change",this),!0)}updateMipmaps(){this.autoGenerateMipmaps&&this.mipLevelCount>1&&this.emit("updateMipmaps",this)}set wrapMode(t){this._style.wrapMode=t}get wrapMode(){return this._style.wrapMode}set scaleMode(t){this._style.scaleMode=t}get scaleMode(){return this._style.scaleMode}_refreshPOT(){this.isPowerOfTwo=Oa(this.pixelWidth)&&Oa(this.pixelHeight)}static test(t){throw new Error("Unimplemented")}};Vc.defaultOptions={resolution:1,format:"bgra8unorm",alphaMode:"premultiply-alpha-on-upload",dimensions:"2d",mipLevelCount:1,autoGenerateMipmaps:!1,sampleCount:1,antialias:!1,autoGarbageCollect:!1};let We=Vc;class bo extends We{constructor(t){const n=t.resource||new Float32Array(t.width*t.height*4);let s=t.format;s||(n instanceof Float32Array?s="rgba32float":n instanceof Int32Array||n instanceof Uint32Array?s="rgba32uint":n instanceof Int16Array||n instanceof Uint16Array?s="rgba16uint":(n instanceof Int8Array,s="bgra8unorm")),super({...t,resource:n,format:s}),this.uploadMethodId="buffer"}static test(t){return t instanceof Int8Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Int16Array||t instanceof Uint16Array||t instanceof Int32Array||t instanceof Uint32Array||t instanceof Float32Array}}bo.extension=q.TextureSource;const ja=new at;class Jp{constructor(t,n){this.mapCoord=new at,this.uClampFrame=new Float32Array(4),this.uClampOffset=new Float32Array(2),this._textureID=-1,this._updateID=0,this.clampOffset=0,typeof n>"u"?this.clampMargin=t.width<10?0:.5:this.clampMargin=n,this.isSimple=!1,this.texture=t}get texture(){return this._texture}set texture(t){var n;this.texture!==t&&((n=this._texture)==null||n.removeListener("update",this.update,this),this._texture=t,this._texture.addListener("update",this.update,this),this.update())}multiplyUvs(t,n){n===void 0&&(n=t);const s=this.mapCoord;for(let i=0;i<t.length;i+=2){const r=t[i],o=t[i+1];n[i]=r*s.a+o*s.c+s.tx,n[i+1]=r*s.b+o*s.d+s.ty}return n}update(){const t=this._texture;this._updateID++;const n=t.uvs;this.mapCoord.set(n.x1-n.x0,n.y1-n.y0,n.x3-n.x0,n.y3-n.y0,n.x0,n.y0);const s=t.orig,i=t.trim;i&&(ja.set(s.width/i.width,0,0,s.height/i.height,-i.x/i.width,-i.y/i.height),this.mapCoord.append(ja));const r=t.source,o=this.uClampFrame,a=this.clampMargin/r._resolution,l=this.clampOffset;return o[0]=(t.frame.x+a+l)/r.width,o[1]=(t.frame.y+a+l)/r.height,o[2]=(t.frame.x+t.frame.width-a+l)/r.width,o[3]=(t.frame.y+t.frame.height-a+l)/r.height,this.uClampOffset[0]=l/r.pixelWidth,this.uClampOffset[1]=l/r.pixelHeight,this.isSimple=t.frame.width===r.width&&t.frame.height===r.height&&t.rotate===0,!0}}class rt extends le{constructor({source:t,label:n,frame:s,orig:i,trim:r,defaultAnchor:o,defaultBorders:a,rotate:l,dynamic:u}={}){if(super(),this.uid=At("texture"),this.uvs={x0:0,y0:0,x1:0,y1:0,x2:0,y2:0,x3:0,y3:0},this.frame=new wt,this.noFrame=!1,this.dynamic=!1,this.isTexture=!0,this.label=n,this.source=(t==null?void 0:t.source)??new We,this.noFrame=!s,s)this.frame.copyFrom(s);else{const{width:c,height:h}=this._source;this.frame.width=c,this.frame.height=h}this.orig=i||this.frame,this.trim=r,this.rotate=l??0,this.defaultAnchor=o,this.defaultBorders=a,this.destroyed=!1,this.dynamic=u||!1,this.updateUvs()}set source(t){this._source&&this._source.off("resize",this.update,this),this._source=t,t.on("resize",this.update,this),this.emit("update",this)}get source(){return this._source}get textureMatrix(){return this._textureMatrix||(this._textureMatrix=new Jp(this)),this._textureMatrix}get width(){return this.orig.width}get height(){return this.orig.height}updateUvs(){const{uvs:t,frame:n}=this,{width:s,height:i}=this._source,r=n.x/s,o=n.y/i,a=n.width/s,l=n.height/i;let u=this.rotate;if(u){const c=a/2,h=l/2,f=r+c,d=o+h;u=pt.add(u,pt.NW),t.x0=f+c*pt.uX(u),t.y0=d+h*pt.uY(u),u=pt.add(u,2),t.x1=f+c*pt.uX(u),t.y1=d+h*pt.uY(u),u=pt.add(u,2),t.x2=f+c*pt.uX(u),t.y2=d+h*pt.uY(u),u=pt.add(u,2),t.x3=f+c*pt.uX(u),t.y3=d+h*pt.uY(u)}else t.x0=r,t.y0=o,t.x1=r+a,t.y1=o,t.x2=r+a,t.y2=o+l,t.x3=r,t.y3=o+l}destroy(t=!1){this._source&&t&&(this._source.destroy(),this._source=null),this._textureMatrix=null,this.destroyed=!0,this.emit("destroy",this),this.removeAllListeners()}update(){this.noFrame&&(this.frame.width=this._source.width,this.frame.height=this._source.height),this.updateUvs(),this.emit("update",this)}get baseTexture(){return ut(ct,"Texture.baseTexture is now Texture.source"),this._source}}rt.EMPTY=new rt({label:"EMPTY",source:new We({label:"EMPTY"})});rt.EMPTY.destroy=$c;rt.WHITE=new rt({source:new bo({resource:new Uint8Array([255,255,255,255]),width:1,height:1,alphaMode:"premultiply-alpha-on-upload",label:"WHITE"}),label:"WHITE"});rt.WHITE.destroy=$c;function t0(e,t,n,s){const{width:i,height:r}=n.orig,o=n.trim;if(o){const a=o.width,l=o.height;e.minX=o.x-t._x*i-s,e.maxX=e.minX+a,e.minY=o.y-t._y*r-s,e.maxY=e.minY+l}else e.minX=-t._x*i-s,e.maxX=e.minX+i,e.minY=-t._y*r-s,e.maxY=e.minY+r}var e0={grad:.9,turn:360,rad:360/(2*Math.PI)},ye=function(e){return typeof e=="string"?e.length>0:typeof e=="number"},Pt=function(e,t,n){return t===void 0&&(t=0),n===void 0&&(n=Math.pow(10,t)),Math.round(n*e)/n+0},Kt=function(e,t,n){return t===void 0&&(t=0),n===void 0&&(n=1),e>n?n:e>t?e:t},Yc=function(e){return(e=isFinite(e)?e%360:0)>0?e:e+360},Na=function(e){return{r:Kt(e.r,0,255),g:Kt(e.g,0,255),b:Kt(e.b,0,255),a:Kt(e.a)}},Li=function(e){return{r:Pt(e.r),g:Pt(e.g),b:Pt(e.b),a:Pt(e.a,3)}},n0=/^#([0-9a-f]{3,8})$/i,ks=function(e){var t=e.toString(16);return t.length<2?"0"+t:t},qc=function(e){var t=e.r,n=e.g,s=e.b,i=e.a,r=Math.max(t,n,s),o=r-Math.min(t,n,s),a=o?r===t?(n-s)/o:r===n?2+(s-t)/o:4+(t-n)/o:0;return{h:60*(a<0?a+6:a),s:r?o/r*100:0,v:r/255*100,a:i}},Kc=function(e){var t=e.h,n=e.s,s=e.v,i=e.a;t=t/360*6,n/=100,s/=100;var r=Math.floor(t),o=s*(1-n),a=s*(1-(t-r)*n),l=s*(1-(1-t+r)*n),u=r%6;return{r:255*[s,a,o,o,l,s][u],g:255*[l,s,s,a,o,o][u],b:255*[o,o,l,s,s,a][u],a:i}},Ua=function(e){return{h:Yc(e.h),s:Kt(e.s,0,100),l:Kt(e.l,0,100),a:Kt(e.a)}},Da=function(e){return{h:Pt(e.h),s:Pt(e.s),l:Pt(e.l),a:Pt(e.a,3)}},Ga=function(e){return Kc((n=(t=e).s,{h:t.h,s:(n*=((s=t.l)<50?s:100-s)/100)>0?2*n/(s+n)*100:0,v:s+n,a:t.a}));var t,n,s},Qn=function(e){return{h:(t=qc(e)).h,s:(i=(200-(n=t.s))*(s=t.v)/100)>0&&i<200?n*s/100/(i<=100?i:200-i)*100:0,l:i/2,a:t.a};var t,n,s,i},s0=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,i0=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,r0=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,o0=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Ir={string:[[function(e){var t=n0.exec(e);return t?(e=t[1]).length<=4?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:e.length===4?Pt(parseInt(e[3]+e[3],16)/255,2):1}:e.length===6||e.length===8?{r:parseInt(e.substr(0,2),16),g:parseInt(e.substr(2,2),16),b:parseInt(e.substr(4,2),16),a:e.length===8?Pt(parseInt(e.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(e){var t=r0.exec(e)||o0.exec(e);return t?t[2]!==t[4]||t[4]!==t[6]?null:Na({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:t[7]===void 0?1:Number(t[7])/(t[8]?100:1)}):null},"rgb"],[function(e){var t=s0.exec(e)||i0.exec(e);if(!t)return null;var n,s,i=Ua({h:(n=t[1],s=t[2],s===void 0&&(s="deg"),Number(n)*(e0[s]||1)),s:Number(t[3]),l:Number(t[4]),a:t[5]===void 0?1:Number(t[5])/(t[6]?100:1)});return Ga(i)},"hsl"]],object:[[function(e){var t=e.r,n=e.g,s=e.b,i=e.a,r=i===void 0?1:i;return ye(t)&&ye(n)&&ye(s)?Na({r:Number(t),g:Number(n),b:Number(s),a:Number(r)}):null},"rgb"],[function(e){var t=e.h,n=e.s,s=e.l,i=e.a,r=i===void 0?1:i;if(!ye(t)||!ye(n)||!ye(s))return null;var o=Ua({h:Number(t),s:Number(n),l:Number(s),a:Number(r)});return Ga(o)},"hsl"],[function(e){var t=e.h,n=e.s,s=e.v,i=e.a,r=i===void 0?1:i;if(!ye(t)||!ye(n)||!ye(s))return null;var o=function(a){return{h:Yc(a.h),s:Kt(a.s,0,100),v:Kt(a.v,0,100),a:Kt(a.a)}}({h:Number(t),s:Number(n),v:Number(s),a:Number(r)});return Kc(o)},"hsv"]]},$a=function(e,t){for(var n=0;n<t.length;n++){var s=t[n][0](e);if(s)return[s,t[n][1]]}return[null,void 0]},a0=function(e){return typeof e=="string"?$a(e.trim(),Ir.string):typeof e=="object"&&e!==null?$a(e,Ir.object):[null,void 0]},ji=function(e,t){var n=Qn(e);return{h:n.h,s:Kt(n.s+100*t,0,100),l:n.l,a:n.a}},Ni=function(e){return(299*e.r+587*e.g+114*e.b)/1e3/255},Ha=function(e,t){var n=Qn(e);return{h:n.h,s:n.s,l:Kt(n.l+100*t,0,100),a:n.a}},Fr=function(){function e(t){this.parsed=a0(t)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return e.prototype.isValid=function(){return this.parsed!==null},e.prototype.brightness=function(){return Pt(Ni(this.rgba),2)},e.prototype.isDark=function(){return Ni(this.rgba)<.5},e.prototype.isLight=function(){return Ni(this.rgba)>=.5},e.prototype.toHex=function(){return t=Li(this.rgba),n=t.r,s=t.g,i=t.b,o=(r=t.a)<1?ks(Pt(255*r)):"","#"+ks(n)+ks(s)+ks(i)+o;var t,n,s,i,r,o},e.prototype.toRgb=function(){return Li(this.rgba)},e.prototype.toRgbString=function(){return t=Li(this.rgba),n=t.r,s=t.g,i=t.b,(r=t.a)<1?"rgba("+n+", "+s+", "+i+", "+r+")":"rgb("+n+", "+s+", "+i+")";var t,n,s,i,r},e.prototype.toHsl=function(){return Da(Qn(this.rgba))},e.prototype.toHslString=function(){return t=Da(Qn(this.rgba)),n=t.h,s=t.s,i=t.l,(r=t.a)<1?"hsla("+n+", "+s+"%, "+i+"%, "+r+")":"hsl("+n+", "+s+"%, "+i+"%)";var t,n,s,i,r},e.prototype.toHsv=function(){return t=qc(this.rgba),{h:Pt(t.h),s:Pt(t.s),v:Pt(t.v),a:Pt(t.a,3)};var t},e.prototype.invert=function(){return de({r:255-(t=this.rgba).r,g:255-t.g,b:255-t.b,a:t.a});var t},e.prototype.saturate=function(t){return t===void 0&&(t=.1),de(ji(this.rgba,t))},e.prototype.desaturate=function(t){return t===void 0&&(t=.1),de(ji(this.rgba,-t))},e.prototype.grayscale=function(){return de(ji(this.rgba,-1))},e.prototype.lighten=function(t){return t===void 0&&(t=.1),de(Ha(this.rgba,t))},e.prototype.darken=function(t){return t===void 0&&(t=.1),de(Ha(this.rgba,-t))},e.prototype.rotate=function(t){return t===void 0&&(t=15),this.hue(this.hue()+t)},e.prototype.alpha=function(t){return typeof t=="number"?de({r:(n=this.rgba).r,g:n.g,b:n.b,a:t}):Pt(this.rgba.a,3);var n},e.prototype.hue=function(t){var n=Qn(this.rgba);return typeof t=="number"?de({h:t,s:n.s,l:n.l,a:n.a}):Pt(n.h)},e.prototype.isEqual=function(t){return this.toHex()===de(t).toHex()},e}(),de=function(e){return e instanceof Fr?e:new Fr(e)},Wa=[],l0=function(e){e.forEach(function(t){Wa.indexOf(t)<0&&(t(Fr,Ir),Wa.push(t))})};function c0(e,t){var n={white:"#ffffff",bisque:"#ffe4c4",blue:"#0000ff",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",antiquewhite:"#faebd7",aqua:"#00ffff",azure:"#f0ffff",whitesmoke:"#f5f5f5",papayawhip:"#ffefd5",plum:"#dda0dd",blanchedalmond:"#ffebcd",black:"#000000",gold:"#ffd700",goldenrod:"#daa520",gainsboro:"#dcdcdc",cornsilk:"#fff8dc",cornflowerblue:"#6495ed",burlywood:"#deb887",aquamarine:"#7fffd4",beige:"#f5f5dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkkhaki:"#bdb76b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",peachpuff:"#ffdab9",darkmagenta:"#8b008b",darkred:"#8b0000",darkorchid:"#9932cc",darkorange:"#ff8c00",darkslateblue:"#483d8b",gray:"#808080",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",deeppink:"#ff1493",deepskyblue:"#00bfff",wheat:"#f5deb3",firebrick:"#b22222",floralwhite:"#fffaf0",ghostwhite:"#f8f8ff",darkviolet:"#9400d3",magenta:"#ff00ff",green:"#008000",dodgerblue:"#1e90ff",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",blueviolet:"#8a2be2",forestgreen:"#228b22",lawngreen:"#7cfc00",indianred:"#cd5c5c",indigo:"#4b0082",fuchsia:"#ff00ff",brown:"#a52a2a",maroon:"#800000",mediumblue:"#0000cd",lightcoral:"#f08080",darkturquoise:"#00ced1",lightcyan:"#e0ffff",ivory:"#fffff0",lightyellow:"#ffffe0",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",linen:"#faf0e6",mediumaquamarine:"#66cdaa",lemonchiffon:"#fffacd",lime:"#00ff00",khaki:"#f0e68c",mediumseagreen:"#3cb371",limegreen:"#32cd32",mediumspringgreen:"#00fa9a",lightskyblue:"#87cefa",lightblue:"#add8e6",midnightblue:"#191970",lightpink:"#ffb6c1",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",mintcream:"#f5fffa",lightslategray:"#778899",lightslategrey:"#778899",navajowhite:"#ffdead",navy:"#000080",mediumvioletred:"#c71585",powderblue:"#b0e0e6",palegoldenrod:"#eee8aa",oldlace:"#fdf5e6",paleturquoise:"#afeeee",mediumturquoise:"#48d1cc",mediumorchid:"#ba55d3",rebeccapurple:"#663399",lightsteelblue:"#b0c4de",mediumslateblue:"#7b68ee",thistle:"#d8bfd8",tan:"#d2b48c",orchid:"#da70d6",mediumpurple:"#9370db",purple:"#800080",pink:"#ffc0cb",skyblue:"#87ceeb",springgreen:"#00ff7f",palegreen:"#98fb98",red:"#ff0000",yellow:"#ffff00",slateblue:"#6a5acd",lavenderblush:"#fff0f5",peru:"#cd853f",palevioletred:"#db7093",violet:"#ee82ee",teal:"#008080",slategray:"#708090",slategrey:"#708090",aliceblue:"#f0f8ff",darkseagreen:"#8fbc8f",darkolivegreen:"#556b2f",greenyellow:"#adff2f",seagreen:"#2e8b57",seashell:"#fff5ee",tomato:"#ff6347",silver:"#c0c0c0",sienna:"#a0522d",lavender:"#e6e6fa",lightgreen:"#90ee90",orange:"#ffa500",orangered:"#ff4500",steelblue:"#4682b4",royalblue:"#4169e1",turquoise:"#40e0d0",yellowgreen:"#9acd32",salmon:"#fa8072",saddlebrown:"#8b4513",sandybrown:"#f4a460",rosybrown:"#bc8f8f",darksalmon:"#e9967a",lightgoldenrodyellow:"#fafad2",snow:"#fffafa",lightgrey:"#d3d3d3",lightgray:"#d3d3d3",dimgray:"#696969",dimgrey:"#696969",olivedrab:"#6b8e23",olive:"#808000"},s={};for(var i in n)s[n[i]]=i;var r={};e.prototype.toName=function(o){if(!(this.rgba.a||this.rgba.r||this.rgba.g||this.rgba.b))return"transparent";var a,l,u=s[this.toHex()];if(u)return u;if(o!=null&&o.closest){var c=this.toRgb(),h=1/0,f="black";if(!r.length)for(var d in n)r[d]=new e(n[d]).toRgb();for(var p in n){var g=(a=c,l=r[p],Math.pow(a.r-l.r,2)+Math.pow(a.g-l.g,2)+Math.pow(a.b-l.b,2));g<h&&(h=g,f=p)}return f}},t.string.push([function(o){var a=o.toLowerCase(),l=a==="transparent"?"#0000":n[a];return l?new e(l).toRgb():null},"name"])}l0([c0]);const Cn=class Gn{constructor(t=16777215){this._value=null,this._components=new Float32Array(4),this._components.fill(1),this._int=16777215,this.value=t}get red(){return this._components[0]}get green(){return this._components[1]}get blue(){return this._components[2]}get alpha(){return this._components[3]}setValue(t){return this.value=t,this}set value(t){if(t instanceof Gn)this._value=this._cloneSource(t._value),this._int=t._int,this._components.set(t._components);else{if(t===null)throw new Error("Cannot set Color#value to null");(this._value===null||!this._isSourceEqual(this._value,t))&&(this._normalize(t),this._value=this._cloneSource(t))}}get value(){return this._value}_cloneSource(t){return typeof t=="string"||typeof t=="number"||t instanceof Number||t===null?t:Array.isArray(t)||ArrayBuffer.isView(t)?t.slice(0):typeof t=="object"&&t!==null?{...t}:t}_isSourceEqual(t,n){const s=typeof t;if(s!==typeof n)return!1;if(s==="number"||s==="string"||t instanceof Number)return t===n;if(Array.isArray(t)&&Array.isArray(n)||ArrayBuffer.isView(t)&&ArrayBuffer.isView(n))return t.length!==n.length?!1:t.every((r,o)=>r===n[o]);if(t!==null&&n!==null){const r=Object.keys(t),o=Object.keys(n);return r.length!==o.length?!1:r.every(a=>t[a]===n[a])}return t===n}toRgba(){const[t,n,s,i]=this._components;return{r:t,g:n,b:s,a:i}}toRgb(){const[t,n,s]=this._components;return{r:t,g:n,b:s}}toRgbaString(){const[t,n,s]=this.toUint8RgbArray();return`rgba(${t},${n},${s},${this.alpha})`}toUint8RgbArray(t){const[n,s,i]=this._components;return this._arrayRgb||(this._arrayRgb=[]),t=t||this._arrayRgb,t[0]=Math.round(n*255),t[1]=Math.round(s*255),t[2]=Math.round(i*255),t}toArray(t){this._arrayRgba||(this._arrayRgba=[]),t=t||this._arrayRgba;const[n,s,i,r]=this._components;return t[0]=n,t[1]=s,t[2]=i,t[3]=r,t}toRgbArray(t){this._arrayRgb||(this._arrayRgb=[]),t=t||this._arrayRgb;const[n,s,i]=this._components;return t[0]=n,t[1]=s,t[2]=i,t}toNumber(){return this._int}toBgrNumber(){const[t,n,s]=this.toUint8RgbArray();return(s<<16)+(n<<8)+t}toLittleEndianNumber(){const t=this._int;return(t>>16)+(t&65280)+((t&255)<<16)}multiply(t){const[n,s,i,r]=Gn._temp.setValue(t)._components;return this._components[0]*=n,this._components[1]*=s,this._components[2]*=i,this._components[3]*=r,this._refreshInt(),this._value=null,this}premultiply(t,n=!0){return n&&(this._components[0]*=t,this._components[1]*=t,this._components[2]*=t),this._components[3]=t,this._refreshInt(),this._value=null,this}toPremultiplied(t,n=!0){if(t===1)return(255<<24)+this._int;if(t===0)return n?0:this._int;let s=this._int>>16&255,i=this._int>>8&255,r=this._int&255;return n&&(s=s*t+.5|0,i=i*t+.5|0,r=r*t+.5|0),(t*255<<24)+(s<<16)+(i<<8)+r}toHex(){const t=this._int.toString(16);return`#${"000000".substring(0,6-t.length)+t}`}toHexa(){const n=Math.round(this._components[3]*255).toString(16);return this.toHex()+"00".substring(0,2-n.length)+n}setAlpha(t){return this._components[3]=this._clamp(t),this}_normalize(t){let n,s,i,r;if((typeof t=="number"||t instanceof Number)&&t>=0&&t<=16777215){const o=t;n=(o>>16&255)/255,s=(o>>8&255)/255,i=(o&255)/255,r=1}else if((Array.isArray(t)||t instanceof Float32Array)&&t.length>=3&&t.length<=4)t=this._clamp(t),[n,s,i,r=1]=t;else if((t instanceof Uint8Array||t instanceof Uint8ClampedArray)&&t.length>=3&&t.length<=4)t=this._clamp(t,0,255),[n,s,i,r=255]=t,n/=255,s/=255,i/=255,r/=255;else if(typeof t=="string"||typeof t=="object"){if(typeof t=="string"){const a=Gn.HEX_PATTERN.exec(t);a&&(t=`#${a[2]}`)}const o=de(t);o.isValid()&&({r:n,g:s,b:i,a:r}=o.rgba,n/=255,s/=255,i/=255)}if(n!==void 0)this._components[0]=n,this._components[1]=s,this._components[2]=i,this._components[3]=r,this._refreshInt();else throw new Error(`Unable to convert color ${t}`)}_refreshInt(){this._clamp(this._components);const[t,n,s]=this._components;this._int=(t*255<<16)+(n*255<<8)+(s*255|0)}_clamp(t,n=0,s=1){return typeof t=="number"?Math.min(Math.max(t,n),s):(t.forEach((i,r)=>{t[r]=Math.min(Math.max(i,n),s)}),t)}static isColorLike(t){return typeof t=="number"||typeof t=="string"||t instanceof Number||t instanceof Gn||Array.isArray(t)||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Float32Array||t.r!==void 0&&t.g!==void 0&&t.b!==void 0||t.r!==void 0&&t.g!==void 0&&t.b!==void 0&&t.a!==void 0||t.h!==void 0&&t.s!==void 0&&t.l!==void 0||t.h!==void 0&&t.s!==void 0&&t.l!==void 0&&t.a!==void 0||t.h!==void 0&&t.s!==void 0&&t.v!==void 0||t.h!==void 0&&t.s!==void 0&&t.v!==void 0&&t.a!==void 0}};Cn.shared=new Cn;Cn._temp=new Cn;Cn.HEX_PATTERN=/^(#|0x)?(([a-f0-9]{3}){1,2}([a-f0-9]{2})?)$/i;let yt=Cn;const u0={cullArea:null,cullable:!1,cullableChildren:!0};function h0(e,t,n){const s=e.length;let i;if(t>=s||n===0)return;n=t+n>s?s-t:n;const r=s-n;for(i=t;i<r;++i)e[i]=e[i+n];e.length=r}const f0={allowChildren:!0,removeChildren(e=0,t){const n=t??this.children.length,s=n-e,i=[];if(s>0&&s<=n){for(let o=n-1;o>=e;o--){const a=this.children[o];a&&(i.push(a),a.parent=null)}h0(this.children,e,n);const r=this.renderGroup||this.parentRenderGroup;r&&r.removeChildren(i);for(let o=0;o<i.length;++o)this.emit("childRemoved",i[o],this,o),i[o].emit("removed",this);return i}else if(s===0&&this.children.length===0)return i;throw new RangeError("removeChildren: numeric values are outside the acceptable range.")},removeChildAt(e){const t=this.getChildAt(e);return this.removeChild(t)},getChildAt(e){if(e<0||e>=this.children.length)throw new Error(`getChildAt: Index (${e}) does not exist.`);return this.children[e]},setChildIndex(e,t){if(t<0||t>=this.children.length)throw new Error(`The index ${t} supplied is out of bounds ${this.children.length}`);this.getChildIndex(e),this.addChildAt(e,t)},getChildIndex(e){const t=this.children.indexOf(e);if(t===-1)throw new Error("The supplied Container must be a child of the caller");return t},addChildAt(e,t){this.allowChildren||ut(ct,"addChildAt: Only Containers will be allowed to add children in v8.0.0");const{children:n}=this;if(t<0||t>n.length)throw new Error(`${e}addChildAt: The index ${t} supplied is out of bounds ${n.length}`);if(e.parent){const i=e.parent.children.indexOf(e);if(e.parent===this&&i===t)return e;i!==-1&&e.parent.children.splice(i,1)}t===n.length?n.push(e):n.splice(t,0,e),e.parent=this,e.didChange=!0,e.didViewUpdate=!1,e._updateFlags=15;const s=this.renderGroup||this.parentRenderGroup;return s&&s.addChild(e),this.sortableChildren&&(this.sortDirty=!0),this.emit("childAdded",e,this,t),e.emit("added",this),e},swapChildren(e,t){if(e===t)return;const n=this.getChildIndex(e),s=this.getChildIndex(t);this.children[n]=t,this.children[s]=e},removeFromParent(){var e;(e=this.parent)==null||e.removeChild(this)}};class Va{constructor(){this.pipe="filter",this.priority=1}destroy(){for(let t=0;t<this.filters.length;t++)this.filters[t].destroy();this.filters=null,this.filterArea=null}}class wo{constructor(t,n){this._pool=[],this._count=0,this._index=0,this._classType=t,n&&this.prepopulate(n)}prepopulate(t){for(let n=0;n<t;n++)this._pool[this._index++]=new this._classType;this._count+=t}get(t){var s;let n;return this._index>0?n=this._pool[--this._index]:n=new this._classType,(s=n.init)==null||s.call(n,t),n}return(t){var n;(n=t.reset)==null||n.call(t),this._pool[this._index++]=t}get totalSize(){return this._count}get totalFree(){return this._index}get totalUsed(){return this._count-this._index}}class d0{constructor(){this._poolsByClass=new Map}prepopulate(t,n){this.getPool(t).prepopulate(n)}get(t,n){return this.getPool(t).get(n)}return(t){this.getPool(t.constructor).return(t)}getPool(t){return this._poolsByClass.has(t)||this._poolsByClass.set(t,new wo(t)),this._poolsByClass.get(t)}stats(){const t={};return this._poolsByClass.forEach(n=>{const s=t[n._classType.name]?n._classType.name+n._classType.ID:n._classType.name;t[s]={free:n.totalFree,used:n.totalUsed,size:n.totalSize}}),t}}const we=new d0;class p0{constructor(){this._effectClasses=[],this._tests=[],this._initialized=!1}init(){this._initialized||(this._initialized=!0,this._effectClasses.forEach(t=>{this.add({test:t.test,maskClass:t})}))}add(t){this._tests.push(t)}getMaskEffect(t){this._initialized||this.init();for(let n=0;n<this._tests.length;n++){const s=this._tests[n];if(s.test(t))return we.get(s.maskClass,t)}return t}returnMaskEffect(t){we.return(t)}}const Br=new p0;Qt.handleByList(q.MaskEffect,Br._effectClasses);const m0={_maskEffect:null,_filterEffect:null,effects:[],addEffect(e){if(this.effects.indexOf(e)!==-1)return;this.effects.push(e),this.effects.sort((s,i)=>s.priority-i.priority);const n=this.renderGroup||this.parentRenderGroup;n&&(n.structureDidChange=!0),this._updateIsSimple()},removeEffect(e){const t=this.effects.indexOf(e);t!==-1&&(this.effects.splice(t,1),this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateIsSimple())},set mask(e){const t=this._maskEffect;(t==null?void 0:t.mask)!==e&&(t&&(this.removeEffect(t),Br.returnMaskEffect(t),this._maskEffect=null),e!=null&&(this._maskEffect=Br.getMaskEffect(e),this.addEffect(this._maskEffect)))},get mask(){var e;return(e=this._maskEffect)==null?void 0:e.mask},set filters(e){var r;!Array.isArray(e)&&e&&(e=[e]);const t=this._filterEffect||(this._filterEffect=new Va);e=e;const n=(e==null?void 0:e.length)>0,s=((r=t.filters)==null?void 0:r.length)>0,i=n!==s;e=Array.isArray(e)?e.slice(0):e,t.filters=Object.freeze(e),i&&(n?this.addEffect(t):(this.removeEffect(t),t.filters=e??null))},get filters(){var e;return(e=this._filterEffect)==null?void 0:e.filters},set filterArea(e){this._filterEffect||(this._filterEffect=new Va),this._filterEffect.filterArea=e},get filterArea(){var e;return(e=this._filterEffect)==null?void 0:e.filterArea}},g0={label:null,get name(){return ut(ct,"Container.name property has been removed, use Container.label instead"),this.label},set name(e){ut(ct,"Container.name property has been removed, use Container.label instead"),this.label=e},getChildByName(e,t=!1){return this.getChildByLabel(e,t)},getChildByLabel(e,t=!1){const n=this.children;for(let s=0;s<n.length;s++){const i=n[s];if(i.label===e||e instanceof RegExp&&e.test(i.label))return i}if(t)for(let s=0;s<n.length;s++){const r=n[s].getChildByLabel(e,!0);if(r)return r}return null},getChildrenByLabel(e,t=!1,n=[]){const s=this.children;for(let i=0;i<s.length;i++){const r=s[i];(r.label===e||e instanceof RegExp&&e.test(r.label))&&n.push(r)}if(t)for(let i=0;i<s.length;i++)s[i].getChildrenByLabel(e,!0,n);return n}},Xa=new at;class Me{constructor(t=1/0,n=1/0,s=-1/0,i=-1/0){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.matrix=Xa,this.minX=t,this.minY=n,this.maxX=s,this.maxY=i}isEmpty(){return this.minX>this.maxX||this.minY>this.maxY}get rectangle(){this._rectangle||(this._rectangle=new wt);const t=this._rectangle;return this.minX>this.maxX||this.minY>this.maxY?(t.x=0,t.y=0,t.width=0,t.height=0):t.copyFromBounds(this),t}clear(){return this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.matrix=Xa,this}set(t,n,s,i){this.minX=t,this.minY=n,this.maxX=s,this.maxY=i}addFrame(t,n,s,i,r){r||(r=this.matrix);const o=r.a,a=r.b,l=r.c,u=r.d,c=r.tx,h=r.ty;let f=this.minX,d=this.minY,p=this.maxX,g=this.maxY,m=o*t+l*n+c,y=a*t+u*n+h;m<f&&(f=m),y<d&&(d=y),m>p&&(p=m),y>g&&(g=y),m=o*s+l*n+c,y=a*s+u*n+h,m<f&&(f=m),y<d&&(d=y),m>p&&(p=m),y>g&&(g=y),m=o*t+l*i+c,y=a*t+u*i+h,m<f&&(f=m),y<d&&(d=y),m>p&&(p=m),y>g&&(g=y),m=o*s+l*i+c,y=a*s+u*i+h,m<f&&(f=m),y<d&&(d=y),m>p&&(p=m),y>g&&(g=y),this.minX=f,this.minY=d,this.maxX=p,this.maxY=g}addRect(t,n){this.addFrame(t.x,t.y,t.x+t.width,t.y+t.height,n)}addBounds(t,n){this.addFrame(t.minX,t.minY,t.maxX,t.maxY,n)}addBoundsMask(t){this.minX=this.minX>t.minX?this.minX:t.minX,this.minY=this.minY>t.minY?this.minY:t.minY,this.maxX=this.maxX<t.maxX?this.maxX:t.maxX,this.maxY=this.maxY<t.maxY?this.maxY:t.maxY}applyMatrix(t){const n=this.minX,s=this.minY,i=this.maxX,r=this.maxY,{a:o,b:a,c:l,d:u,tx:c,ty:h}=t;let f=o*n+l*s+c,d=a*n+u*s+h;this.minX=f,this.minY=d,this.maxX=f,this.maxY=d,f=o*i+l*s+c,d=a*i+u*s+h,this.minX=f<this.minX?f:this.minX,this.minY=d<this.minY?d:this.minY,this.maxX=f>this.maxX?f:this.maxX,this.maxY=d>this.maxY?d:this.maxY,f=o*n+l*r+c,d=a*n+u*r+h,this.minX=f<this.minX?f:this.minX,this.minY=d<this.minY?d:this.minY,this.maxX=f>this.maxX?f:this.maxX,this.maxY=d>this.maxY?d:this.maxY,f=o*i+l*r+c,d=a*i+u*r+h,this.minX=f<this.minX?f:this.minX,this.minY=d<this.minY?d:this.minY,this.maxX=f>this.maxX?f:this.maxX,this.maxY=d>this.maxY?d:this.maxY}fit(t){return this.minX<t.left&&(this.minX=t.left),this.maxX>t.right&&(this.maxX=t.right),this.minY<t.top&&(this.minY=t.top),this.maxY>t.bottom&&(this.maxY=t.bottom),this}fitBounds(t,n,s,i){return this.minX<t&&(this.minX=t),this.maxX>n&&(this.maxX=n),this.minY<s&&(this.minY=s),this.maxY>i&&(this.maxY=i),this}pad(t,n=t){return this.minX-=t,this.maxX+=t,this.minY-=n,this.maxY+=n,this}ceil(){return this.minX=Math.floor(this.minX),this.minY=Math.floor(this.minY),this.maxX=Math.ceil(this.maxX),this.maxY=Math.ceil(this.maxY),this}clone(){return new Me(this.minX,this.minY,this.maxX,this.maxY)}scale(t,n=t){return this.minX*=t,this.minY*=n,this.maxX*=t,this.maxY*=n,this}get x(){return this.minX}set x(t){const n=this.maxX-this.minX;this.minX=t,this.maxX=t+n}get y(){return this.minY}set y(t){const n=this.maxY-this.minY;this.minY=t,this.maxY=t+n}get width(){return this.maxX-this.minX}set width(t){this.maxX=this.minX+t}get height(){return this.maxY-this.minY}set height(t){this.maxY=this.minY+t}get left(){return this.minX}get right(){return this.maxX}get top(){return this.minY}get bottom(){return this.maxY}get isPositive(){return this.maxX-this.minX>0&&this.maxY-this.minY>0}get isValid(){return this.minX+this.minY!==1/0}addVertexData(t,n,s,i){let r=this.minX,o=this.minY,a=this.maxX,l=this.maxY;i||(i=this.matrix);const u=i.a,c=i.b,h=i.c,f=i.d,d=i.tx,p=i.ty;for(let g=n;g<s;g+=2){const m=t[g],y=t[g+1],v=u*m+h*y+d,x=c*m+f*y+p;r=v<r?v:r,o=x<o?x:o,a=v>a?v:a,l=x>l?x:l}this.minX=r,this.minY=o,this.maxX=a,this.maxY=l}containsPoint(t,n){return this.minX<=t&&this.minY<=n&&this.maxX>=t&&this.maxY>=n}toString(){return`[pixi.js:Bounds minX=${this.minX} minY=${this.minY} maxX=${this.maxX} maxY=${this.maxY} width=${this.width} height=${this.height}]`}}const Ce=new wo(at),Sn=new wo(Me);function Zc(e,t,n){n.clear();let s,i;return e.parent?t?s=e.parent.worldTransform:(i=Ce.get().identity(),s=Qs(e,i)):s=at.IDENTITY,Qc(e,n,s,t),i&&Ce.return(i),n.isValid||n.set(0,0,0,0),n}function Qc(e,t,n,s){var a,l;if(!e.visible||!e.measurable)return;let i;s?i=e.worldTransform:(e.updateLocalTransform(),i=Ce.get(),i.appendFrom(e.localTransform,n));const r=t,o=!!e.effects.length;if(o&&(t=Sn.get().clear()),e.boundsArea)t.addRect(e.boundsArea,i);else{e.addBounds&&(t.matrix=i,e.addBounds(t));for(let u=0;u<e.children.length;u++)Qc(e.children[u],t,i,s)}if(o){for(let u=0;u<e.effects.length;u++)(l=(a=e.effects[u]).addBounds)==null||l.call(a,t);r.addBounds(t,at.IDENTITY),Sn.return(t)}s||Ce.return(i)}function Qs(e,t){const n=e.parent;return n&&(Qs(n,t),n.updateLocalTransform(),t.append(n.localTransform)),t}let Ui=0;const Ya=500;function Tt(...e){Ui!==Ya&&(Ui++,Ui===Ya?console.warn("PixiJS Warning: too many warnings, no more warnings will be reported to the console by PixiJS."):console.warn("PixiJS Warning: ",...e))}function Jc(e,t,n){return t.clear(),n||(n=at.IDENTITY),tu(e,t,n,e,!0),t.isValid||t.set(0,0,0,0),t}function tu(e,t,n,s,i){var l,u;let r;if(i)r=Ce.get(),r=n.copyTo(r);else{if(!e.visible||!e.measurable)return;e.updateLocalTransform();const c=e.localTransform;r=Ce.get(),r.appendFrom(c,n)}const o=t,a=!!e.effects.length;if(a&&(t=Sn.get().clear()),e.boundsArea)t.addRect(e.boundsArea,r);else{e.renderPipeId&&(t.matrix=r,e.addBounds(t));const c=e.children;for(let h=0;h<c.length;h++)tu(c[h],t,r,s,!1)}if(a){for(let c=0;c<e.effects.length;c++)(u=(l=e.effects[c]).addLocalBounds)==null||u.call(l,t,s);o.addBounds(t,at.IDENTITY),Sn.return(t)}Ce.return(r)}function eu(e,t){const n=e.children;for(let s=0;s<n.length;s++){const i=n[s],r=(i.uid&255)<<24|i._didChangeId&16777215;t.data[t.index]!==r&&(t.data[t.index]=r,t.didChange=!0),t.index++,i.children.length&&eu(i,t)}return t.didChange}const x0=new at,v0={_localBoundsCacheId:-1,_localBoundsCacheData:null,_setWidth(e,t){const n=Math.sign(this.scale.x)||1;t!==0?this.scale.x=e/t*n:this.scale.x=n},_setHeight(e,t){const n=Math.sign(this.scale.y)||1;t!==0?this.scale.y=e/t*n:this.scale.y=n},getLocalBounds(){this._localBoundsCacheData||(this._localBoundsCacheData={data:[],index:1,didChange:!1,localBounds:new Me});const e=this._localBoundsCacheData;return e.index=1,e.didChange=!1,e.data[0]!==this._didChangeId>>12&&(e.didChange=!0,e.data[0]=this._didChangeId>>12),eu(this,e),e.didChange&&Jc(this,e.localBounds,x0),e.localBounds},getBounds(e,t){return Zc(this,e,t||new Me)}},_0={_onRender:null,set onRender(e){const t=this.renderGroup||this.parentRenderGroup;if(!e){this._onRender&&(t==null||t.removeOnRender(this)),this._onRender=null;return}this._onRender||t==null||t.addOnRender(this),this._onRender=e},get onRender(){return this._onRender}},y0={_zIndex:0,sortDirty:!1,sortableChildren:!1,get zIndex(){return this._zIndex},set zIndex(e){this._zIndex!==e&&(this._zIndex=e,this.depthOfChildModified())},depthOfChildModified(){this.parent&&(this.parent.sortableChildren=!0,this.parent.sortDirty=!0),this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0)},sortChildren(){this.sortDirty&&(this.sortDirty=!1,this.children.sort(b0))}};function b0(e,t){return e._zIndex-t._zIndex}const w0={getGlobalPosition(e=new _t,t=!1){return this.parent?this.parent.toGlobal(this._position,e,t):(e.x=this._position.x,e.y=this._position.y),e},toGlobal(e,t,n=!1){if(!n){this.updateLocalTransform();const s=Qs(this,new at);return s.append(this.localTransform),s.apply(e,t)}return this.worldTransform.apply(e,t)},toLocal(e,t,n,s){if(t&&(e=t.toGlobal(e,n,s)),!s){this.updateLocalTransform();const i=Qs(this,new at);return i.append(this.localTransform),i.applyInverse(e,n)}return this.worldTransform.applyInverse(e,n)}};class nu{constructor(){this.uid=At("instructionSet"),this.instructions=[],this.instructionSize=0}reset(){this.instructionSize=0}add(t){this.instructions[this.instructionSize++]=t}log(){this.instructions.length=this.instructionSize,console.table(this.instructions,["type","action"])}}class A0{constructor(t){this.renderPipeId="renderGroup",this.root=null,this.canBundle=!1,this.renderGroupParent=null,this.renderGroupChildren=[],this.worldTransform=new at,this.worldColorAlpha=4294967295,this.worldColor=16777215,this.worldAlpha=1,this.childrenToUpdate=Object.create(null),this.updateTick=0,this.childrenRenderablesToUpdate={list:[],index:0},this.structureDidChange=!0,this.instructionSet=new nu,this._onRenderContainers=[],this.root=t,t._onRender&&this.addOnRender(t),t.didChange=!0;const n=t.children;for(let s=0;s<n.length;s++)this.addChild(n[s])}get localTransform(){return this.root.localTransform}addRenderGroupChild(t){t.renderGroupParent&&t.renderGroupParent._removeRenderGroupChild(t),t.renderGroupParent=this,this.renderGroupChildren.push(t)}_removeRenderGroupChild(t){const n=this.renderGroupChildren.indexOf(t);n>-1&&this.renderGroupChildren.splice(n,1),t.renderGroupParent=null}addChild(t){if(this.structureDidChange=!0,t.parentRenderGroup=this,t.updateTick=-1,t.parent===this.root?t.relativeRenderGroupDepth=1:t.relativeRenderGroupDepth=t.parent.relativeRenderGroupDepth+1,t.didChange=!0,this.onChildUpdate(t),t.renderGroup){this.addRenderGroupChild(t.renderGroup);return}t._onRender&&this.addOnRender(t);const n=t.children;for(let s=0;s<n.length;s++)this.addChild(n[s])}removeChild(t){if(this.structureDidChange=!0,t._onRender&&(t.renderGroup||this.removeOnRender(t)),t.parentRenderGroup=null,t.renderGroup){this._removeRenderGroupChild(t.renderGroup);return}const n=t.children;for(let s=0;s<n.length;s++)this.removeChild(n[s])}removeChildren(t){for(let n=0;n<t.length;n++)this.removeChild(t[n])}onChildUpdate(t){let n=this.childrenToUpdate[t.relativeRenderGroupDepth];n||(n=this.childrenToUpdate[t.relativeRenderGroupDepth]={index:0,list:[]}),n.list[n.index++]=t}updateRenderable(t){t.globalDisplayStatus<7||(t.didViewUpdate=!1,this.instructionSet.renderPipes[t.renderPipeId].updateRenderable(t))}onChildViewUpdate(t){this.childrenRenderablesToUpdate.list[this.childrenRenderablesToUpdate.index++]=t}get isRenderable(){return this.root.localDisplayStatus===7&&this.worldAlpha>0}addOnRender(t){this._onRenderContainers.push(t)}removeOnRender(t){this._onRenderContainers.splice(this._onRenderContainers.indexOf(t),1)}runOnRender(){for(let t=0;t<this._onRenderContainers.length;t++)this._onRenderContainers[t]._onRender()}destroy(){this.renderGroupParent=null,this.root=null,this.childrenRenderablesToUpdate=null,this.childrenToUpdate=null,this.renderGroupChildren=null,this._onRenderContainers=null,this.instructionSet=null}getChildren(t=[]){const n=this.root.children;for(let s=0;s<n.length;s++)this._getChildren(n[s],t);return t}_getChildren(t,n=[]){if(n.push(t),t.renderGroup)return n;const s=t.children;for(let i=0;i<s.length;i++)this._getChildren(s[i],n);return n}}function C0(e,t,n={}){for(const s in t)!n[s]&&t[s]!==void 0&&(e[s]=t[s])}const Di=new $t(null),Gi=new $t(null),$i=new $t(null,1,1),qa=1,S0=2,Hi=4;class zt extends le{constructor(t={}){var n,s;super(),this.uid=At("renderable"),this._updateFlags=15,this.renderGroup=null,this.parentRenderGroup=null,this.parentRenderGroupIndex=0,this.didChange=!1,this.didViewUpdate=!1,this.relativeRenderGroupDepth=0,this.children=[],this.parent=null,this.includeInBuild=!0,this.measurable=!0,this.isSimple=!0,this.updateTick=-1,this.localTransform=new at,this.relativeGroupTransform=new at,this.groupTransform=this.relativeGroupTransform,this.destroyed=!1,this._position=new $t(this,0,0),this._scale=$i,this._pivot=Gi,this._skew=Di,this._cx=1,this._sx=0,this._cy=0,this._sy=1,this._rotation=0,this.localColor=16777215,this.localAlpha=1,this.groupAlpha=1,this.groupColor=16777215,this.groupColorAlpha=4294967295,this.localBlendMode="inherit",this.groupBlendMode="normal",this.localDisplayStatus=7,this.globalDisplayStatus=7,this._didChangeId=0,this._didLocalTransformChangeId=-1,C0(this,t,{children:!0,parent:!0,effects:!0}),(n=t.children)==null||n.forEach(i=>this.addChild(i)),this.effects=[],(s=t.parent)==null||s.addChild(this)}static mixin(t){Object.defineProperties(zt.prototype,Object.getOwnPropertyDescriptors(t))}addChild(...t){if(this.allowChildren||ut(ct,"addChild: Only Containers will be allowed to add children in v8.0.0"),t.length>1){for(let i=0;i<t.length;i++)this.addChild(t[i]);return t[0]}const n=t[0];if(n.parent===this)return this.children.splice(this.children.indexOf(n),1),this.children.push(n),this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),n;n.parent&&n.parent.removeChild(n),this.children.push(n),this.sortableChildren&&(this.sortDirty=!0),n.parent=this,n.didChange=!0,n.didViewUpdate=!1,n._updateFlags=15;const s=this.renderGroup||this.parentRenderGroup;return s&&s.addChild(n),this.emit("childAdded",n,this,this.children.length-1),n.emit("added",this),this._didChangeId+=4096,n._zIndex!==0&&n.depthOfChildModified(),n}removeChild(...t){if(t.length>1){for(let i=0;i<t.length;i++)this.removeChild(t[i]);return t[0]}const n=t[0],s=this.children.indexOf(n);return s>-1&&(this._didChangeId+=4096,this.children.splice(s,1),this.renderGroup?this.renderGroup.removeChild(n):this.parentRenderGroup&&this.parentRenderGroup.removeChild(n),n.parent=null,this.emit("childRemoved",n,this,s),n.emit("removed",this)),n}_onUpdate(t){t&&t===this._skew&&this._updateSkew(),this._didChangeId++,!this.didChange&&(this.didChange=!0,this.parentRenderGroup&&this.parentRenderGroup.onChildUpdate(this))}set isRenderGroup(t){if(this.renderGroup&&t===!1)throw new Error("[Pixi] cannot undo a render group just yet");t&&this.enableRenderGroup()}get isRenderGroup(){return!!this.renderGroup}enableRenderGroup(){if(this.renderGroup)return;const t=this.parentRenderGroup;t&&t.removeChild(this),this.renderGroup=new A0(this),t&&t.addChild(this),this._updateIsSimple(),this.groupTransform=at.IDENTITY}_updateIsSimple(){this.isSimple=!this.renderGroup&&this.effects.length===0}get worldTransform(){return this._worldTransform||(this._worldTransform=new at),this.renderGroup?this._worldTransform.copyFrom(this.renderGroup.worldTransform):this.parentRenderGroup&&this._worldTransform.appendFrom(this.relativeGroupTransform,this.parentRenderGroup.worldTransform),this._worldTransform}get x(){return this._position.x}set x(t){this._position.x=t}get y(){return this._position.y}set y(t){this._position.y=t}get position(){return this._position}set position(t){this._position.copyFrom(t)}get rotation(){return this._rotation}set rotation(t){this._rotation!==t&&(this._rotation=t,this._onUpdate(this._skew))}get angle(){return this.rotation*Wp}set angle(t){this.rotation=t*Vp}get pivot(){return this._pivot===Gi&&(this._pivot=new $t(this,0,0)),this._pivot}set pivot(t){this._pivot===Gi&&(this._pivot=new $t(this,0,0)),typeof t=="number"?this._pivot.set(t):this._pivot.copyFrom(t)}get skew(){return this._skew===Di&&(this._skew=new $t(this,0,0)),this._skew}set skew(t){this._skew===Di&&(this._skew=new $t(this,0,0)),this._skew.copyFrom(t)}get scale(){return this._scale===$i&&(this._scale=new $t(this,1,1)),this._scale}set scale(t){this._scale===$i&&(this._scale=new $t(this,0,0)),typeof t=="number"?this._scale.set(t):this._scale.copyFrom(t)}get width(){return Math.abs(this.scale.x*this.getLocalBounds().width)}set width(t){const n=this.getLocalBounds().width;this._setWidth(t,n)}get height(){return Math.abs(this.scale.y*this.getLocalBounds().height)}set height(t){const n=this.getLocalBounds().height;this._setHeight(t,n)}getSize(t){t||(t={});const n=this.getLocalBounds();return t.width=Math.abs(this.scale.x*n.width),t.height=Math.abs(this.scale.y*n.height),t}setSize(t,n){const s=this.getLocalBounds();let i,r;typeof t!="object"?(i=t,r=n??t):(i=t.width,r=t.height??t.width),i!==void 0&&this._setWidth(i,s.width),r!==void 0&&this._setHeight(r,s.height)}_updateSkew(){const t=this._rotation,n=this._skew;this._cx=Math.cos(t+n._y),this._sx=Math.sin(t+n._y),this._cy=-Math.sin(t-n._x),this._sy=Math.cos(t-n._x)}updateTransform(t){return this.position.set(typeof t.x=="number"?t.x:this.position.x,typeof t.y=="number"?t.y:this.position.y),this.scale.set(typeof t.scaleX=="number"?t.scaleX||1:this.scale.x,typeof t.scaleY=="number"?t.scaleY||1:this.scale.y),this.rotation=typeof t.rotation=="number"?t.rotation:this.rotation,this.skew.set(typeof t.skewX=="number"?t.skewX:this.skew.x,typeof t.skewY=="number"?t.skewY:this.skew.y),this.pivot.set(typeof t.pivotX=="number"?t.pivotX:this.pivot.x,typeof t.pivotY=="number"?t.pivotY:this.pivot.y),this}setFromMatrix(t){t.decompose(this)}updateLocalTransform(){if((this._didLocalTransformChangeId&15)===this._didChangeId)return;this._didLocalTransformChangeId=this._didChangeId;const t=this.localTransform,n=this._scale,s=this._pivot,i=this._position,r=n._x,o=n._y,a=s._x,l=s._y;t.a=this._cx*r,t.b=this._sx*r,t.c=this._cy*o,t.d=this._sy*o,t.tx=i._x-(a*t.a+l*t.c),t.ty=i._y-(a*t.b+l*t.d)}set alpha(t){t!==this.localAlpha&&(this.localAlpha=t,this._updateFlags|=qa,this._onUpdate())}get alpha(){return this.localAlpha}set tint(t){const s=yt.shared.setValue(t??16777215).toBgrNumber();s!==this.localColor&&(this.localColor=s,this._updateFlags|=qa,this._onUpdate())}get tint(){const t=this.localColor;return((t&255)<<16)+(t&65280)+(t>>16&255)}set blendMode(t){this.localBlendMode!==t&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=S0,this.localBlendMode=t,this._onUpdate())}get blendMode(){return this.localBlendMode}get visible(){return!!(this.localDisplayStatus&2)}set visible(t){const n=t?1:0;(this.localDisplayStatus&2)>>1!==n&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=Hi,this.localDisplayStatus^=2,this._onUpdate())}get culled(){return!(this.localDisplayStatus&4)}set culled(t){const n=t?1:0;(this.localDisplayStatus&4)>>2!==n&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=Hi,this.localDisplayStatus^=4,this._onUpdate())}get renderable(){return!!(this.localDisplayStatus&1)}set renderable(t){const n=t?1:0;(this.localDisplayStatus&1)!==n&&(this._updateFlags|=Hi,this.localDisplayStatus^=1,this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._onUpdate())}get isRenderable(){return this.localDisplayStatus===7&&this.groupAlpha>0}destroy(t=!1){var i;if(this.destroyed)return;this.destroyed=!0;const n=this.removeChildren(0,this.children.length);if(this.removeFromParent(),this.parent=null,this._maskEffect=null,this._filterEffect=null,this.effects=null,this._position=null,this._scale=null,this._pivot=null,this._skew=null,this.emit("destroyed",this),this.removeAllListeners(),typeof t=="boolean"?t:t==null?void 0:t.children)for(let r=0;r<n.length;++r)n[r].destroy(t);(i=this.renderGroup)==null||i.destroy(),this.renderGroup=null}}zt.mixin(f0);zt.mixin(w0);zt.mixin(_0);zt.mixin(v0);zt.mixin(m0);zt.mixin(g0);zt.mixin(y0);zt.mixin(u0);class Mn extends zt{constructor(t=rt.EMPTY){t instanceof rt&&(t={texture:t});const{texture:n=rt.EMPTY,anchor:s,roundPixels:i,width:r,height:o,...a}=t;super({label:"Sprite",...a}),this.renderPipeId="sprite",this.batched=!0,this._didSpriteUpdate=!1,this._bounds={minX:0,maxX:1,minY:0,maxY:0},this._sourceBounds={minX:0,maxX:1,minY:0,maxY:0},this._boundsDirty=!0,this._sourceBoundsDirty=!0,this._roundPixels=0,this._anchor=new $t({_onUpdate:()=>{this.onViewUpdate()}}),s?this.anchor=s:n.defaultAnchor&&(this.anchor=n.defaultAnchor),this.texture=n,this.allowChildren=!1,this.roundPixels=i??!1,r&&(this.width=r),o&&(this.height=o)}static from(t,n=!1){return t instanceof rt?new Mn(t):new Mn(rt.from(t,n))}set texture(t){t||(t=rt.EMPTY);const n=this._texture;n!==t&&(n&&n.dynamic&&n.off("update",this.onViewUpdate,this),t.dynamic&&t.on("update",this.onViewUpdate,this),this._texture=t,this._width&&this._setWidth(this._width,this._texture.orig.width),this._height&&this._setHeight(this._height,this._texture.orig.height),this.onViewUpdate())}get texture(){return this._texture}get bounds(){return this._boundsDirty&&(this._updateBounds(),this._boundsDirty=!1),this._bounds}get sourceBounds(){return this._sourceBoundsDirty&&(this._updateSourceBounds(),this._sourceBoundsDirty=!1),this._sourceBounds}containsPoint(t){const n=this.sourceBounds;return t.x>=n.maxX&&t.x<=n.minX&&t.y>=n.maxY&&t.y<=n.minY}addBounds(t){const n=this._texture.trim?this.sourceBounds:this.bounds;t.addFrame(n.minX,n.minY,n.maxX,n.maxY)}onViewUpdate(){if(this._didChangeId+=4096,this._didSpriteUpdate=!0,this._sourceBoundsDirty=this._boundsDirty=!0,this.didViewUpdate)return;this.didViewUpdate=!0;const t=this.renderGroup||this.parentRenderGroup;t&&t.onChildViewUpdate(this)}_updateBounds(){t0(this._bounds,this._anchor,this._texture,0)}_updateSourceBounds(){const t=this._anchor,n=this._texture,s=this._sourceBounds,{width:i,height:r}=n.orig;s.maxX=-t._x*i,s.minX=s.maxX+i,s.maxY=-t._y*r,s.minY=s.maxY+r}destroy(t=!1){if(super.destroy(t),typeof t=="boolean"?t:t==null?void 0:t.texture){const s=typeof t=="boolean"?t:t==null?void 0:t.textureSource;this._texture.destroy(s)}this._texture=null,this._bounds=null,this._sourceBounds=null,this._anchor=null}get anchor(){return this._anchor}set anchor(t){typeof t=="number"?this._anchor.set(t):this._anchor.copyFrom(t)}get roundPixels(){return!!this._roundPixels}set roundPixels(t){this._roundPixels=t?1:0}get width(){return Math.abs(this.scale.x)*this._texture.orig.width}set width(t){this._setWidth(t,this._texture.orig.width),this._width=t}get height(){return Math.abs(this.scale.y)*this._texture.orig.height}set height(t){this._setHeight(t,this._texture.orig.height),this._height=t}getSize(t){return t||(t={}),t.width=Math.abs(this.scale.x)*this._texture.orig.width,t.height=Math.abs(this.scale.y)*this._texture.orig.height,t}setSize(t,n){let s,i;typeof t!="object"?(s=t,i=n??t):(s=t.width,i=t.height??t.width),s!==void 0&&this._setWidth(s,this._texture.orig.width),i!==void 0&&this._setHeight(i,this._texture.orig.height)}}const M0=new Me;function su(e,t,n){const s=M0;e.measurable=!0,Zc(e,n,s),t.addBoundsMask(s),e.measurable=!1}function iu(e,t,n){const s=Sn.get();e.measurable=!0;const i=Ce.get().identity(),r=ru(e,n,i);Jc(e,s,r),e.measurable=!1,t.addBoundsMask(s),Ce.return(i),Sn.return(s)}function ru(e,t,n){return e?(e!==t&&(ru(e.parent,t,n),e.updateLocalTransform(),n.append(e.localTransform)),n):(Tt("Mask bounds, renderable is not inside the root container"),n)}class ou{constructor(t){this.priority=0,this.pipe="alphaMask",t!=null&&t.mask&&this.init(t.mask)}init(t){this.mask=t,this.renderMaskToTexture=!(t instanceof Mn),this.mask.renderable=this.renderMaskToTexture,this.mask.includeInBuild=!this.renderMaskToTexture,this.mask.measurable=!1}reset(){this.mask.measurable=!0,this.mask=null}addBounds(t,n){su(this.mask,t,n)}addLocalBounds(t,n){iu(this.mask,t,n)}containsPoint(t,n){const s=this.mask;return n(s,t)}destroy(){this.reset()}static test(t){return t instanceof Mn}}ou.extension=q.MaskEffect;class au{constructor(t){this.priority=0,this.pipe="colorMask",t!=null&&t.mask&&this.init(t.mask)}init(t){this.mask=t}destroy(){}static test(t){return typeof t=="number"}}au.extension=q.MaskEffect;class lu{constructor(t){this.priority=0,this.pipe="stencilMask",t!=null&&t.mask&&this.init(t.mask)}init(t){this.mask=t,this.mask.includeInBuild=!1,this.mask.measurable=!1}reset(){this.mask.measurable=!0,this.mask.includeInBuild=!0,this.mask=null}addBounds(t,n){su(this.mask,t,n)}addLocalBounds(t,n){iu(this.mask,t,n)}containsPoint(t,n){const s=this.mask;return n(s,t)}destroy(){this.reset()}static test(t){return t instanceof zt}}lu.extension=q.MaskEffect;const P0={createCanvas:(e,t)=>{const n=document.createElement("canvas");return n.width=e,n.height=t,n},getCanvasRenderingContext2D:()=>CanvasRenderingContext2D,getWebGLRenderingContext:()=>WebGLRenderingContext,getNavigator:()=>navigator,getBaseUrl:()=>document.baseURI??window.location.href,getFontFaceSet:()=>document.fonts,fetch:(e,t)=>fetch(e,t),parseXML:e=>new DOMParser().parseFromString(e,"text/xml")};let Ka=P0;const xt={get(){return Ka},set(e){Ka=e}};class cu extends We{constructor(t){t.resource||(t.resource=xt.get().createCanvas()),t.width||(t.width=t.resource.width,t.autoDensity||(t.width/=t.resolution)),t.height||(t.height=t.resource.height,t.autoDensity||(t.height/=t.resolution)),super(t),this.uploadMethodId="image",this.autoDensity=t.autoDensity;const n=t.resource;(this.pixelWidth!==n.width||this.pixelWidth!==n.height)&&this.resizeCanvas(),this.transparent=!!t.transparent}resizeCanvas(){this.autoDensity&&(this.resource.style.width=`${this.width}px`,this.resource.style.height=`${this.height}px`),(this.resource.width!==this.pixelWidth||this.resource.height!==this.pixelHeight)&&(this.resource.width=this.pixelWidth,this.resource.height=this.pixelHeight)}resize(t=this.width,n=this.height,s=this._resolution){const i=super.resize(t,n,s);return i&&this.resizeCanvas(),i}static test(t){return globalThis.HTMLCanvasElement&&t instanceof HTMLCanvasElement||globalThis.OffscreenCanvas&&t instanceof OffscreenCanvas}}cu.extension=q.TextureSource;class kn extends We{constructor(t){if(t.resource&&globalThis.HTMLImageElement&&t.resource instanceof HTMLImageElement){const n=xt.get().createCanvas(t.resource.width,t.resource.height);n.getContext("2d").drawImage(t.resource,0,0),t.resource=n,Tt("ImageSource: Image element passed, converting to canvas. Use CanvasSource instead.")}super(t),this.uploadMethodId="image",this.autoGarbageCollect=!0}static test(t){return globalThis.HTMLImageElement&&t instanceof HTMLImageElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap}}kn.extension=q.TextureSource;var Rr=(e=>(e[e.INTERACTION=50]="INTERACTION",e[e.HIGH=25]="HIGH",e[e.NORMAL=0]="NORMAL",e[e.LOW=-25]="LOW",e[e.UTILITY=-50]="UTILITY",e))(Rr||{});class Wi{constructor(t,n=null,s=0,i=!1){this.next=null,this.previous=null,this._destroyed=!1,this._fn=t,this._context=n,this.priority=s,this._once=i}match(t,n=null){return this._fn===t&&this._context===n}emit(t){this._fn&&(this._context?this._fn.call(this._context,t):this._fn(t));const n=this.next;return this._once&&this.destroy(!0),this._destroyed&&(this.next=null),n}connect(t){this.previous=t,t.next&&(t.next.previous=this),this.next=t.next,t.next=this}destroy(t=!1){this._destroyed=!0,this._fn=null,this._context=null,this.previous&&(this.previous.next=this.next),this.next&&(this.next.previous=this.previous);const n=this.next;return this.next=t?null:n,this.previous=null,n}}const uu=class Gt{constructor(){this.autoStart=!1,this.deltaTime=1,this.lastTime=-1,this.speed=1,this.started=!1,this._requestId=null,this._maxElapsedMS=100,this._minElapsedMS=0,this._protected=!1,this._lastFrame=-1,this._head=new Wi(null,null,1/0),this.deltaMS=1/Gt.targetFPMS,this.elapsedMS=1/Gt.targetFPMS,this._tick=t=>{this._requestId=null,this.started&&(this.update(t),this.started&&this._requestId===null&&this._head.next&&(this._requestId=requestAnimationFrame(this._tick)))}}_requestIfNeeded(){this._requestId===null&&this._head.next&&(this.lastTime=performance.now(),this._lastFrame=this.lastTime,this._requestId=requestAnimationFrame(this._tick))}_cancelIfNeeded(){this._requestId!==null&&(cancelAnimationFrame(this._requestId),this._requestId=null)}_startIfPossible(){this.started?this._requestIfNeeded():this.autoStart&&this.start()}add(t,n,s=Rr.NORMAL){return this._addListener(new Wi(t,n,s))}addOnce(t,n,s=Rr.NORMAL){return this._addListener(new Wi(t,n,s,!0))}_addListener(t){let n=this._head.next,s=this._head;if(!n)t.connect(s);else{for(;n;){if(t.priority>n.priority){t.connect(s);break}s=n,n=n.next}t.previous||t.connect(s)}return this._startIfPossible(),this}remove(t,n){let s=this._head.next;for(;s;)s.match(t,n)?s=s.destroy():s=s.next;return this._head.next||this._cancelIfNeeded(),this}get count(){if(!this._head)return 0;let t=0,n=this._head;for(;n=n.next;)t++;return t}start(){this.started||(this.started=!0,this._requestIfNeeded())}stop(){this.started&&(this.started=!1,this._cancelIfNeeded())}destroy(){if(!this._protected){this.stop();let t=this._head.next;for(;t;)t=t.destroy(!0);this._head.destroy(),this._head=null}}update(t=performance.now()){let n;if(t>this.lastTime){if(n=this.elapsedMS=t-this.lastTime,n>this._maxElapsedMS&&(n=this._maxElapsedMS),n*=this.speed,this._minElapsedMS){const r=t-this._lastFrame|0;if(r<this._minElapsedMS)return;this._lastFrame=t-r%this._minElapsedMS}this.deltaMS=n,this.deltaTime=this.deltaMS*Gt.targetFPMS;const s=this._head;let i=s.next;for(;i;)i=i.emit(this);s.next||this._cancelIfNeeded()}else this.deltaTime=this.deltaMS=this.elapsedMS=0;this.lastTime=t}get FPS(){return 1e3/this.elapsedMS}get minFPS(){return 1e3/this._maxElapsedMS}set minFPS(t){const n=Math.min(this.maxFPS,t),s=Math.min(Math.max(0,n)/1e3,Gt.targetFPMS);this._maxElapsedMS=1/s}get maxFPS(){return this._minElapsedMS?Math.round(1e3/this._minElapsedMS):0}set maxFPS(t){if(t===0)this._minElapsedMS=0;else{const n=Math.max(this.minFPS,t);this._minElapsedMS=1/(n/1e3)}}static get shared(){if(!Gt._shared){const t=Gt._shared=new Gt;t.autoStart=!0,t._protected=!0}return Gt._shared}static get system(){if(!Gt._system){const t=Gt._system=new Gt;t.autoStart=!0,t._protected=!0}return Gt._system}};uu.targetFPMS=.06;let Es=uu,Vi;async function hu(){return Vi??(Vi=(async()=>{var o;const t=document.createElement("canvas").getContext("webgl");if(!t)return"premultiply-alpha-on-upload";const n=await new Promise(a=>{const l=document.createElement("video");l.onloadeddata=()=>a(l),l.onerror=()=>a(null),l.autoplay=!1,l.crossOrigin="anonymous",l.preload="auto",l.src="data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQJChYECGFOAZwEAAAAAAAHTEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEXTbuMU6uEHFO7a1OsggG97AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBEAAAAAAAAFlSua8yuAQAAAAAAAEPXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhVZfVlA5g4EBI+ODhAJiWgDglLCBArqBApqBAlPAgQFVsIRVuYEBElTDZ9Vzc9JjwItjxYgAAAAAAAAAAWfInEWjh0VOQ09ERVJEh49MYXZjIGxpYnZweC12cDlnyKJFo4hEVVJBVElPTkSHlDAwOjAwOjAwLjA0MDAwMDAwMAAAH0O2dcfngQCgwqGggQAAAIJJg0IAABAAFgA4JBwYSgAAICAAEb///4r+AAB1oZ2mm+6BAaWWgkmDQgAAEAAWADgkHBhKAAAgIABIQBxTu2uRu4+zgQC3iveBAfGCAXHwgQM=",l.load()});if(!n)return"premultiply-alpha-on-upload";const s=t.createTexture();t.bindTexture(t.TEXTURE_2D,s);const i=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,i),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,s,0),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,n);const r=new Uint8Array(4);return t.readPixels(0,0,1,1,t.RGBA,t.UNSIGNED_BYTE,r),t.deleteFramebuffer(i),t.deleteTexture(s),(o=t.getExtension("WEBGL_lose_context"))==null||o.loseContext(),r[0]<=r[3]?"premultiplied-alpha":"premultiply-alpha-on-upload"})()),Vi}const gi=class fu extends We{constructor(t){super(t),this.isReady=!1,this.uploadMethodId="video",t={...fu.defaultOptions,...t},this._autoUpdate=!0,this._isConnectedToTicker=!1,this._updateFPS=t.updateFPS||0,this._msToNextUpdate=0,this.autoPlay=t.autoPlay!==!1,this.alphaMode=t.alphaMode??"premultiply-alpha-on-upload",this._videoFrameRequestCallback=this._videoFrameRequestCallback.bind(this),this._videoFrameRequestCallbackHandle=null,this._load=null,this._resolve=null,this._reject=null,this._onCanPlay=this._onCanPlay.bind(this),this._onCanPlayThrough=this._onCanPlayThrough.bind(this),this._onError=this._onError.bind(this),this._onPlayStart=this._onPlayStart.bind(this),this._onPlayStop=this._onPlayStop.bind(this),this._onSeeked=this._onSeeked.bind(this),t.autoLoad!==!1&&this.load()}updateFrame(){if(!this.destroyed){if(this._updateFPS){const t=Es.shared.elapsedMS*this.resource.playbackRate;this._msToNextUpdate=Math.floor(this._msToNextUpdate-t)}(!this._updateFPS||this._msToNextUpdate<=0)&&(this._msToNextUpdate=this._updateFPS?Math.floor(1e3/this._updateFPS):0),this.isValid&&this.update()}}_videoFrameRequestCallback(){this.updateFrame(),this.destroyed?this._videoFrameRequestCallbackHandle=null:this._videoFrameRequestCallbackHandle=this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback)}get isValid(){return!!this.resource.videoWidth&&!!this.resource.videoHeight}async load(){if(this._load)return this._load;const t=this.resource,n=this.options;return(t.readyState===t.HAVE_ENOUGH_DATA||t.readyState===t.HAVE_FUTURE_DATA)&&t.width&&t.height&&(t.complete=!0),t.addEventListener("play",this._onPlayStart),t.addEventListener("pause",this._onPlayStop),t.addEventListener("seeked",this._onSeeked),this._isSourceReady()?this._mediaReady():(n.preload||t.addEventListener("canplay",this._onCanPlay),t.addEventListener("canplaythrough",this._onCanPlayThrough),t.addEventListener("error",this._onError,!0)),this.alphaMode=await hu(),this._load=new Promise((s,i)=>{this.isValid?s(this):(this._resolve=s,this._reject=i,n.preloadTimeoutMs!==void 0&&(this._preloadTimeout=setTimeout(()=>{this._onError(new ErrorEvent(`Preload exceeded timeout of ${n.preloadTimeoutMs}ms`))})),t.load())}),this._load}_onError(t){this.resource.removeEventListener("error",this._onError,!0),this.emit("error",t),this._reject&&(this._reject(t),this._reject=null,this._resolve=null)}_isSourcePlaying(){const t=this.resource;return!t.paused&&!t.ended}_isSourceReady(){return this.resource.readyState>2}_onPlayStart(){this.isValid||this._mediaReady(),this._configureAutoUpdate()}_onPlayStop(){this._configureAutoUpdate()}_onSeeked(){this._autoUpdate&&!this._isSourcePlaying()&&(this._msToNextUpdate=0,this.updateFrame(),this._msToNextUpdate=0)}_onCanPlay(){this.resource.removeEventListener("canplay",this._onCanPlay),this._mediaReady()}_onCanPlayThrough(){this.resource.removeEventListener("canplaythrough",this._onCanPlay),this._preloadTimeout&&(clearTimeout(this._preloadTimeout),this._preloadTimeout=void 0),this._mediaReady()}_mediaReady(){const t=this.resource;this.isValid&&(this.isReady=!0,this.resize(t.videoWidth,t.videoHeight)),this._msToNextUpdate=0,this.updateFrame(),this._msToNextUpdate=0,this._resolve&&(this._resolve(this),this._resolve=null,this._reject=null),this._isSourcePlaying()?this._onPlayStart():this.autoPlay&&this.resource.play()}destroy(){this._configureAutoUpdate();const t=this.resource;t&&(t.removeEventListener("play",this._onPlayStart),t.removeEventListener("pause",this._onPlayStop),t.removeEventListener("seeked",this._onSeeked),t.removeEventListener("canplay",this._onCanPlay),t.removeEventListener("canplaythrough",this._onCanPlayThrough),t.removeEventListener("error",this._onError,!0),t.pause(),t.src="",t.load()),super.destroy()}get autoUpdate(){return this._autoUpdate}set autoUpdate(t){t!==this._autoUpdate&&(this._autoUpdate=t,this._configureAutoUpdate())}get updateFPS(){return this._updateFPS}set updateFPS(t){t!==this._updateFPS&&(this._updateFPS=t,this._configureAutoUpdate())}_configureAutoUpdate(){this._autoUpdate&&this._isSourcePlaying()?!this._updateFPS&&this.resource.requestVideoFrameCallback?(this._isConnectedToTicker&&(Es.shared.remove(this.updateFrame,this),this._isConnectedToTicker=!1,this._msToNextUpdate=0),this._videoFrameRequestCallbackHandle===null&&(this._videoFrameRequestCallbackHandle=this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback))):(this._videoFrameRequestCallbackHandle!==null&&(this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),this._videoFrameRequestCallbackHandle=null),this._isConnectedToTicker||(Es.shared.add(this.updateFrame,this),this._isConnectedToTicker=!0,this._msToNextUpdate=0)):(this._videoFrameRequestCallbackHandle!==null&&(this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),this._videoFrameRequestCallbackHandle=null),this._isConnectedToTicker&&(Es.shared.remove(this.updateFrame,this),this._isConnectedToTicker=!1,this._msToNextUpdate=0))}static test(t){return globalThis.HTMLVideoElement&&t instanceof HTMLVideoElement||globalThis.VideoFrame&&t instanceof VideoFrame}};gi.extension=q.TextureSource;gi.defaultOptions={...We.defaultOptions,autoLoad:!0,autoPlay:!0,updateFPS:0,crossorigin:!0,loop:!1,muted:!0,playsinline:!0,preload:!1};gi.MIME_TYPES={ogv:"video/ogg",mov:"video/quicktime",m4v:"video/mp4"};let Hs=gi;const ie=(e,t,n=!1)=>(Array.isArray(e)||(e=[e]),t?e.map(s=>typeof s=="string"||n?t(s):s):e);class T0{constructor(){this._parsers=[],this._cache=new Map,this._cacheMap=new Map}reset(){this._cacheMap.clear(),this._cache.clear()}has(t){return this._cache.has(t)}get(t){const n=this._cache.get(t);return n||Tt(`[Assets] Asset id ${t} was not found in the Cache`),n}set(t,n){const s=ie(t);let i;for(let l=0;l<this.parsers.length;l++){const u=this.parsers[l];if(u.test(n)){i=u.getCacheableAssets(s,n);break}}const r=new Map(Object.entries(i||{}));i||s.forEach(l=>{r.set(l,n)});const o=[...r.keys()],a={cacheKeys:o,keys:s};s.forEach(l=>{this._cacheMap.set(l,a)}),o.forEach(l=>{const u=i?i[l]:n;this._cache.has(l)&&this._cache.get(l)!==u&&Tt("[Cache] already has key:",l),this._cache.set(l,r.get(l))})}remove(t){if(!this._cacheMap.has(t)){Tt(`[Assets] Asset id ${t} was not found in the Cache`);return}const n=this._cacheMap.get(t);n.cacheKeys.forEach(i=>{this._cache.delete(i)}),n.keys.forEach(i=>{this._cacheMap.delete(i)})}get parsers(){return this._parsers}}const mt=new T0,zr=[];Qt.handleByList(q.TextureSource,zr);function k0(e={}){const t=e&&e.resource,n=t?e.resource:e,s=t?e:{resource:e};for(let i=0;i<zr.length;i++){const r=zr[i];if(r.test(n))return new r(s)}throw new Error(`Could not find a source type for resource: ${s.resource}`)}function E0(e={},t=!1){const n=e&&e.resource,s=n?e.resource:e,i=n?e:{resource:e};if(!t&&mt.has(s))return mt.get(s);const r=new rt({source:k0(i)});return r.on("destroy",()=>{mt.has(s)&&mt.remove(s)}),t||mt.set(s,r),r}function I0(e,t=!1){return typeof e=="string"?mt.get(e):e instanceof We?new rt({source:e}):E0(e,t)}rt.from=I0;Qt.add(ou,au,lu,Hs,kn,cu,bo);var Ve=(e=>(e[e.Low=0]="Low",e[e.Normal=1]="Normal",e[e.High=2]="High",e))(Ve||{});function ee(e){if(typeof e!="string")throw new TypeError(`Path must be a string. Received ${JSON.stringify(e)}`)}function On(e){return e.split("?")[0].split("#")[0]}function F0(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function B0(e,t,n){return e.replace(new RegExp(F0(t),"g"),n)}function R0(e,t){let n="",s=0,i=-1,r=0,o=-1;for(let a=0;a<=e.length;++a){if(a<e.length)o=e.charCodeAt(a);else{if(o===47)break;o=47}if(o===47){if(!(i===a-1||r===1))if(i!==a-1&&r===2){if(n.length<2||s!==2||n.charCodeAt(n.length-1)!==46||n.charCodeAt(n.length-2)!==46){if(n.length>2){const l=n.lastIndexOf("/");if(l!==n.length-1){l===-1?(n="",s=0):(n=n.slice(0,l),s=n.length-1-n.lastIndexOf("/")),i=a,r=0;continue}}else if(n.length===2||n.length===1){n="",s=0,i=a,r=0;continue}}}else n.length>0?n+=`/${e.slice(i+1,a)}`:n=e.slice(i+1,a),s=a-i-1;i=a,r=0}else o===46&&r!==-1?++r:r=-1}return n}const Ht={toPosix(e){return B0(e,"\\","/")},isUrl(e){return/^https?:/.test(this.toPosix(e))},isDataUrl(e){return/^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}()_|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s<>]*?)$/i.test(e)},isBlobUrl(e){return e.startsWith("blob:")},hasProtocol(e){return/^[^/:]+:/.test(this.toPosix(e))},getProtocol(e){ee(e),e=this.toPosix(e);const t=/^file:\/\/\//.exec(e);if(t)return t[0];const n=/^[^/:]+:\/{0,2}/.exec(e);return n?n[0]:""},toAbsolute(e,t,n){if(ee(e),this.isDataUrl(e)||this.isBlobUrl(e))return e;const s=On(this.toPosix(t??xt.get().getBaseUrl())),i=On(this.toPosix(n??this.rootname(s)));return e=this.toPosix(e),e.startsWith("/")?Ht.join(i,e.slice(1)):this.isAbsolute(e)?e:this.join(s,e)},normalize(e){if(ee(e),e.length===0)return".";if(this.isDataUrl(e)||this.isBlobUrl(e))return e;e=this.toPosix(e);let t="";const n=e.startsWith("/");this.hasProtocol(e)&&(t=this.rootname(e),e=e.slice(t.length));const s=e.endsWith("/");return e=R0(e),e.length>0&&s&&(e+="/"),n?`/${e}`:t+e},isAbsolute(e){return ee(e),e=this.toPosix(e),this.hasProtocol(e)?!0:e.startsWith("/")},join(...e){if(e.length===0)return".";let t;for(let n=0;n<e.length;++n){const s=e[n];if(ee(s),s.length>0)if(t===void 0)t=s;else{const i=e[n-1]??"";this.joinExtensions.includes(this.extname(i).toLowerCase())?t+=`/../${s}`:t+=`/${s}`}}return t===void 0?".":this.normalize(t)},dirname(e){if(ee(e),e.length===0)return".";e=this.toPosix(e);let t=e.charCodeAt(0);const n=t===47;let s=-1,i=!0;const r=this.getProtocol(e),o=e;e=e.slice(r.length);for(let a=e.length-1;a>=1;--a)if(t=e.charCodeAt(a),t===47){if(!i){s=a;break}}else i=!1;return s===-1?n?"/":this.isUrl(o)?r+e:r:n&&s===1?"//":r+e.slice(0,s)},rootname(e){ee(e),e=this.toPosix(e);let t="";if(e.startsWith("/")?t="/":t=this.getProtocol(e),this.isUrl(e)){const n=e.indexOf("/",t.length);n!==-1?t=e.slice(0,n):t=e,t.endsWith("/")||(t+="/")}return t},basename(e,t){ee(e),t&&ee(t),e=On(this.toPosix(e));let n=0,s=-1,i=!0,r;if(t!==void 0&&t.length>0&&t.length<=e.length){if(t.length===e.length&&t===e)return"";let o=t.length-1,a=-1;for(r=e.length-1;r>=0;--r){const l=e.charCodeAt(r);if(l===47){if(!i){n=r+1;break}}else a===-1&&(i=!1,a=r+1),o>=0&&(l===t.charCodeAt(o)?--o===-1&&(s=r):(o=-1,s=a))}return n===s?s=a:s===-1&&(s=e.length),e.slice(n,s)}for(r=e.length-1;r>=0;--r)if(e.charCodeAt(r)===47){if(!i){n=r+1;break}}else s===-1&&(i=!1,s=r+1);return s===-1?"":e.slice(n,s)},extname(e){ee(e),e=On(this.toPosix(e));let t=-1,n=0,s=-1,i=!0,r=0;for(let o=e.length-1;o>=0;--o){const a=e.charCodeAt(o);if(a===47){if(!i){n=o+1;break}continue}s===-1&&(i=!1,s=o+1),a===46?t===-1?t=o:r!==1&&(r=1):t!==-1&&(r=-1)}return t===-1||s===-1||r===0||r===1&&t===s-1&&t===n+1?"":e.slice(t,s)},parse(e){ee(e);const t={root:"",dir:"",base:"",ext:"",name:""};if(e.length===0)return t;e=On(this.toPosix(e));let n=e.charCodeAt(0);const s=this.isAbsolute(e);let i;t.root=this.rootname(e),s||this.hasProtocol(e)?i=1:i=0;let r=-1,o=0,a=-1,l=!0,u=e.length-1,c=0;for(;u>=i;--u){if(n=e.charCodeAt(u),n===47){if(!l){o=u+1;break}continue}a===-1&&(l=!1,a=u+1),n===46?r===-1?r=u:c!==1&&(c=1):r!==-1&&(c=-1)}return r===-1||a===-1||c===0||c===1&&r===a-1&&r===o+1?a!==-1&&(o===0&&s?t.base=t.name=e.slice(1,a):t.base=t.name=e.slice(o,a)):(o===0&&s?(t.name=e.slice(1,r),t.base=e.slice(1,a)):(t.name=e.slice(o,r),t.base=e.slice(o,a)),t.ext=e.slice(r,a)),t.dir=this.dirname(e),t},sep:"/",delimiter:":",joinExtensions:[".html"]};function du(e,t,n,s,i){const r=t[n];for(let o=0;o<r.length;o++){const a=r[o];n<t.length-1?du(e.replace(s[n],a),t,n+1,s,i):i.push(e.replace(s[n],a))}}function z0(e){const t=/\{(.*?)\}/g,n=e.match(t),s=[];if(n){const i=[];n.forEach(r=>{const o=r.substring(1,r.length-1).split(",");i.push(o)}),du(e,i,0,n,s)}else s.push(e);return s}const Js=e=>!Array.isArray(e);class En{constructor(){this._defaultBundleIdentifierOptions={connector:"-",createBundleAssetId:(t,n)=>`${t}${this._bundleIdConnector}${n}`,extractAssetIdFromBundle:(t,n)=>n.replace(`${t}${this._bundleIdConnector}`,"")},this._bundleIdConnector=this._defaultBundleIdentifierOptions.connector,this._createBundleAssetId=this._defaultBundleIdentifierOptions.createBundleAssetId,this._extractAssetIdFromBundle=this._defaultBundleIdentifierOptions.extractAssetIdFromBundle,this._assetMap={},this._preferredOrder=[],this._parsers=[],this._resolverHash={},this._bundles={}}setBundleIdentifier(t){if(this._bundleIdConnector=t.connector??this._bundleIdConnector,this._createBundleAssetId=t.createBundleAssetId??this._createBundleAssetId,this._extractAssetIdFromBundle=t.extractAssetIdFromBundle??this._extractAssetIdFromBundle,this._extractAssetIdFromBundle("foo",this._createBundleAssetId("foo","bar"))!=="bar")throw new Error("[Resolver] GenerateBundleAssetId are not working correctly")}prefer(...t){t.forEach(n=>{this._preferredOrder.push(n),n.priority||(n.priority=Object.keys(n.params))}),this._resolverHash={}}set basePath(t){this._basePath=t}get basePath(){return this._basePath}set rootPath(t){this._rootPath=t}get rootPath(){return this._rootPath}get parsers(){return this._parsers}reset(){this.setBundleIdentifier(this._defaultBundleIdentifierOptions),this._assetMap={},this._preferredOrder=[],this._resolverHash={},this._rootPath=null,this._basePath=null,this._manifest=null,this._bundles={},this._defaultSearchParams=null}setDefaultSearchParams(t){if(typeof t=="string")this._defaultSearchParams=t;else{const n=t;this._defaultSearchParams=Object.keys(n).map(s=>`${encodeURIComponent(s)}=${encodeURIComponent(n[s])}`).join("&")}}getAlias(t){const{alias:n,src:s}=t;return ie(n||s,r=>typeof r=="string"?r:Array.isArray(r)?r.map(o=>(o==null?void 0:o.src)??o):r!=null&&r.src?r.src:r,!0)}addManifest(t){this._manifest&&Tt("[Resolver] Manifest already exists, this will be overwritten"),this._manifest=t,t.bundles.forEach(n=>{this.addBundle(n.name,n.assets)})}addBundle(t,n){const s=[];let i=n;Array.isArray(n)||(i=Object.entries(n).map(([r,o])=>typeof o=="string"||Array.isArray(o)?{alias:r,src:o}:{alias:r,...o})),i.forEach(r=>{const o=r.src,a=r.alias;let l;if(typeof a=="string"){const u=this._createBundleAssetId(t,a);s.push(u),l=[a,u]}else{const u=a.map(c=>this._createBundleAssetId(t,c));s.push(...u),l=[...a,...u]}this.add({...r,alias:l,src:o})}),this._bundles[t]=s}add(t){const n=[];Array.isArray(t)?n.push(...t):n.push(t);let s;s=r=>{this.hasKey(r)&&Tt(`[Resolver] already has key: ${r} overwriting`)},ie(n).forEach(r=>{const{src:o}=r;let{data:a,format:l,loadParser:u}=r;const c=ie(o).map(d=>typeof d=="string"?z0(d):Array.isArray(d)?d:[d]),h=this.getAlias(r);Array.isArray(h)?h.forEach(s):s(h);const f=[];c.forEach(d=>{d.forEach(p=>{let g={};if(typeof p!="object"){g.src=p;for(let m=0;m<this._parsers.length;m++){const y=this._parsers[m];if(y.test(p)){g=y.parse(p);break}}}else a=p.data??a,l=p.format??l,u=p.loadParser??u,g={...g,...p};if(!h)throw new Error(`[Resolver] alias is undefined for this asset: ${g.src}`);g=this._buildResolvedAsset(g,{aliases:h,data:a,format:l,loadParser:u}),f.push(g)})}),h.forEach(d=>{this._assetMap[d]=f})})}resolveBundle(t){const n=Js(t);t=ie(t);const s={};return t.forEach(i=>{const r=this._bundles[i];if(r){const o=this.resolve(r),a={};for(const l in o){const u=o[l];a[this._extractAssetIdFromBundle(i,l)]=u}s[i]=a}}),n?s[t[0]]:s}resolveUrl(t){const n=this.resolve(t);if(typeof t!="string"){const s={};for(const i in n)s[i]=n[i].src;return s}return n.src}resolve(t){const n=Js(t);t=ie(t);const s={};return t.forEach(i=>{if(!this._resolverHash[i])if(this._assetMap[i]){let r=this._assetMap[i];const o=this._getPreferredOrder(r);o==null||o.priority.forEach(a=>{o.params[a].forEach(l=>{const u=r.filter(c=>c[a]?c[a]===l:!1);u.length&&(r=u)})}),this._resolverHash[i]=r[0]}else this._resolverHash[i]=this._buildResolvedAsset({alias:[i],src:i},{});s[i]=this._resolverHash[i]}),n?s[t[0]]:s}hasKey(t){return!!this._assetMap[t]}hasBundle(t){return!!this._bundles[t]}_getPreferredOrder(t){for(let n=0;n<t.length;n++){const s=t[0],i=this._preferredOrder.find(r=>r.params.format.includes(s.format));if(i)return i}return this._preferredOrder[0]}_appendDefaultSearchParams(t){if(!this._defaultSearchParams)return t;const n=/\?/.test(t)?"&":"?";return`${t}${n}${this._defaultSearchParams}`}_buildResolvedAsset(t,n){const{aliases:s,data:i,loadParser:r,format:o}=n;return(this._basePath||this._rootPath)&&(t.src=Ht.toAbsolute(t.src,this._basePath,this._rootPath)),t.alias=s??t.alias??[t.src],t.src=this._appendDefaultSearchParams(t.src),t.data={...i||{},...t.data},t.loadParser=r??t.loadParser,t.format=o??t.format??O0(t.src),t}}En.RETINA_PREFIX=/@([0-9\.]+)x/;function O0(e){return e.split(".").pop().split("?").shift().split("#").shift()}const Or=(e,t)=>{const n=t.split("?")[1];return n&&(e+=`?${n}`),e},pu=class $n{constructor(t,n){this.linkedSheets=[],this._texture=t instanceof rt?t:null,this.textureSource=t.source,this.textures={},this.animations={},this.data=n;const s=parseFloat(n.meta.scale);s?(this.resolution=s,t.source.resolution=this.resolution):this.resolution=t.source._resolution,this._frames=this.data.frames,this._frameKeys=Object.keys(this._frames),this._batchIndex=0,this._callback=null}parse(){return new Promise(t=>{this._callback=t,this._batchIndex=0,this._frameKeys.length<=$n.BATCH_SIZE?(this._processFrames(0),this._processAnimations(),this._parseComplete()):this._nextBatch()})}_processFrames(t){let n=t;const s=$n.BATCH_SIZE;for(;n-t<s&&n<this._frameKeys.length;){const i=this._frameKeys[n],r=this._frames[i],o=r.frame;if(o){let a=null,l=null;const u=r.trimmed!==!1&&r.sourceSize?r.sourceSize:r.frame,c=new wt(0,0,Math.floor(u.w)/this.resolution,Math.floor(u.h)/this.resolution);r.rotated?a=new wt(Math.floor(o.x)/this.resolution,Math.floor(o.y)/this.resolution,Math.floor(o.h)/this.resolution,Math.floor(o.w)/this.resolution):a=new wt(Math.floor(o.x)/this.resolution,Math.floor(o.y)/this.resolution,Math.floor(o.w)/this.resolution,Math.floor(o.h)/this.resolution),r.trimmed!==!1&&r.spriteSourceSize&&(l=new wt(Math.floor(r.spriteSourceSize.x)/this.resolution,Math.floor(r.spriteSourceSize.y)/this.resolution,Math.floor(o.w)/this.resolution,Math.floor(o.h)/this.resolution)),this.textures[i]=new rt({source:this.textureSource,frame:a,orig:c,trim:l,rotate:r.rotated?2:0,defaultAnchor:r.anchor,defaultBorders:r.borders,label:i.toString()})}n++}}_processAnimations(){const t=this.data.animations||{};for(const n in t){this.animations[n]=[];for(let s=0;s<t[n].length;s++){const i=t[n][s];this.animations[n].push(this.textures[i])}}}_parseComplete(){const t=this._callback;this._callback=null,this._batchIndex=0,t.call(this,this.textures)}_nextBatch(){this._processFrames(this._batchIndex*$n.BATCH_SIZE),this._batchIndex++,setTimeout(()=>{this._batchIndex*$n.BATCH_SIZE<this._frameKeys.length?this._nextBatch():(this._processAnimations(),this._parseComplete())},0)}destroy(t=!1){var n;for(const s in this.textures)this.textures[s].destroy();this._frames=null,this._frameKeys=null,this.data=null,this.textures=null,t&&((n=this._texture)==null||n.destroy(),this.textureSource.destroy()),this._texture=null,this.textureSource=null,this.linkedSheets=[]}};pu.BATCH_SIZE=1e3;let Za=pu;const L0=["jpg","png","jpeg","avif","webp","basis","etc2","bc7","bc6h","bc5","bc4","bc3","bc2","bc1","eac","astc"];function mu(e,t,n){const s={};if(e.forEach(i=>{s[i]=t}),Object.keys(t.textures).forEach(i=>{s[i]=t.textures[i]}),!n){const i=Ht.dirname(e[0]);t.linkedSheets.forEach((r,o)=>{const a=mu([`${i}/${t.data.meta.related_multi_packs[o]}`],r,!0);Object.assign(s,a)})}return s}const j0={extension:q.Asset,cache:{test:e=>e instanceof Za,getCacheableAssets:(e,t)=>mu(e,t,!1)},resolver:{extension:{type:q.ResolveParser,name:"resolveSpritesheet"},test:e=>{const n=e.split("?")[0].split("."),s=n.pop(),i=n.pop();return s==="json"&&L0.includes(i)},parse:e=>{var n;const t=e.split(".");return{resolution:parseFloat(((n=En.RETINA_PREFIX.exec(e))==null?void 0:n[1])??"1"),format:t[t.length-2],src:e}}},loader:{name:"spritesheetLoader",extension:{type:q.LoadParser,priority:Ve.Normal,name:"spritesheetLoader"},async testParse(e,t){return Ht.extname(t.src).toLowerCase()===".json"&&!!e.frames},async parse(e,t,n){var u,c;const{texture:s,imageFilename:i}=(t==null?void 0:t.data)??{};let r=Ht.dirname(t.src);r&&r.lastIndexOf("/")!==r.length-1&&(r+="/");let o;if(s instanceof rt)o=s;else{const h=Or(r+(i??e.meta.image),t.src);o=(await n.load([h]))[h]}const a=new Za(o.source,e);await a.parse();const l=(u=e==null?void 0:e.meta)==null?void 0:u.related_multi_packs;if(Array.isArray(l)){const h=[];for(const d of l){if(typeof d!="string")continue;let p=r+d;(c=t.data)!=null&&c.ignoreMultiPack||(p=Or(p,t.src),h.push(n.load({src:p,data:{ignoreMultiPack:!0}})))}const f=await Promise.all(h);a.linkedSheets=f,f.forEach(d=>{d.linkedSheets=[a].concat(a.linkedSheets.filter(p=>p!==d))})}return a},async unload(e,t,n){await n.unload(e.textureSource._sourceOrigin),e.destroy(!1)}}};Qt.add(j0);const Xi=Object.create(null),Qa=Object.create(null);function Ao(e,t){let n=Qa[e];return n===void 0&&(Xi[t]===void 0&&(Xi[t]=1),Qa[e]=n=Xi[t]++),n}let pn;function gu(){return(!pn||pn!=null&&pn.isContextLost())&&(pn=xt.get().createCanvas().getContext("webgl",{})),pn}let Is;function N0(){if(!Is){Is="mediump";const e=gu();e&&e.getShaderPrecisionFormat&&(Is=e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision?"highp":"mediump")}return Is}function U0(e,t,n){return t?e:n?(e=e.replace("out vec4 finalColor;",""),`
        
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
        `}function D0(e,t,n){const s=n?t.maxSupportedFragmentPrecision:t.maxSupportedVertexPrecision;if(e.substring(0,9)!=="precision"){let i=n?t.requestedFragmentPrecision:t.requestedVertexPrecision;return i==="highp"&&s!=="highp"&&(i="mediump"),`precision ${i} float;
${e}`}else if(s!=="highp"&&e.substring(0,15)==="precision highp")return e.replace("precision highp","precision mediump");return e}function G0(e,t){return t?`#version 300 es
${e}`:e}const $0={},H0={};function W0(e,{name:t="pixi-program"},n=!0){t=t.replace(/\s+/g,"-"),t+=n?"-fragment":"-vertex";const s=n?$0:H0;return s[t]?(s[t]++,t+=`-${s[t]}`):s[t]=1,e.indexOf("#define SHADER_NAME")!==-1?e:`${`#define SHADER_NAME ${t}`}
${e}`}function V0(e,t){return t?e.replace("#version 300 es",""):e}const Yi={stripVersion:V0,ensurePrecision:D0,addProgramDefines:U0,setProgramName:W0,insertVersion:G0},qi=Object.create(null),xu=class Lr{constructor(t){t={...Lr.defaultOptions,...t};const n=t.fragment.indexOf("#version 300 es")!==-1,s={stripVersion:n,ensurePrecision:{requestedFragmentPrecision:t.preferredFragmentPrecision,requestedVertexPrecision:t.preferredVertexPrecision,maxSupportedVertexPrecision:"highp",maxSupportedFragmentPrecision:N0()},setProgramName:{name:t.name},addProgramDefines:n,insertVersion:n};let i=t.fragment,r=t.vertex;Object.keys(Yi).forEach(o=>{const a=s[o];i=Yi[o](i,a,!0),r=Yi[o](r,a,!1)}),this.fragment=i,this.vertex=r,this._key=Ao(`${this.vertex}:${this.fragment}`,"gl-program")}destroy(){this.fragment=null,this.vertex=null,this._attributeData=null,this._uniformData=null,this._uniformBlockData=null,this.transformFeedbackVaryings=null}static from(t){const n=`${t.vertex}:${t.fragment}`;return qi[n]||(qi[n]=new Lr(t)),qi[n]}};xu.defaultOptions={preferredVertexPrecision:"highp",preferredFragmentPrecision:"mediump"};let cs=xu;const Ja={uint8x2:{size:2,stride:2,normalised:!1},uint8x4:{size:4,stride:4,normalised:!1},sint8x2:{size:2,stride:2,normalised:!1},sint8x4:{size:4,stride:4,normalised:!1},unorm8x2:{size:2,stride:2,normalised:!0},unorm8x4:{size:4,stride:4,normalised:!0},snorm8x2:{size:2,stride:2,normalised:!0},snorm8x4:{size:4,stride:4,normalised:!0},uint16x2:{size:2,stride:4,normalised:!1},uint16x4:{size:4,stride:8,normalised:!1},sint16x2:{size:2,stride:4,normalised:!1},sint16x4:{size:4,stride:8,normalised:!1},unorm16x2:{size:2,stride:4,normalised:!0},unorm16x4:{size:4,stride:8,normalised:!0},snorm16x2:{size:2,stride:4,normalised:!0},snorm16x4:{size:4,stride:8,normalised:!0},float16x2:{size:2,stride:4,normalised:!1},float16x4:{size:4,stride:8,normalised:!1},float32:{size:1,stride:4,normalised:!1},float32x2:{size:2,stride:8,normalised:!1},float32x3:{size:3,stride:12,normalised:!1},float32x4:{size:4,stride:16,normalised:!1},uint32:{size:1,stride:4,normalised:!1},uint32x2:{size:2,stride:8,normalised:!1},uint32x3:{size:3,stride:12,normalised:!1},uint32x4:{size:4,stride:16,normalised:!1},sint32:{size:1,stride:4,normalised:!1},sint32x2:{size:2,stride:8,normalised:!1},sint32x3:{size:3,stride:12,normalised:!1},sint32x4:{size:4,stride:16,normalised:!1}};function X0(e){return Ja[e]??Ja.float32}const Y0={f32:"float32","vec2<f32>":"float32x2","vec3<f32>":"float32x3","vec4<f32>":"float32x4",vec2f:"float32x2",vec3f:"float32x3",vec4f:"float32x4",i32:"sint32","vec2<i32>":"sint32x2","vec3<i32>":"sint32x3","vec4<i32>":"sint32x4",u32:"uint32","vec2<u32>":"uint32x2","vec3<u32>":"uint32x3","vec4<u32>":"uint32x4",bool:"uint32","vec2<bool>":"uint32x2","vec3<bool>":"uint32x3","vec4<bool>":"uint32x4"};function q0({source:e,entryPoint:t}){const n={},s=e.indexOf(`fn ${t}`);if(s!==-1){const i=e.indexOf("->",s);if(i!==-1){const r=e.substring(s,i),o=/@location\((\d+)\)\s+([a-zA-Z0-9_]+)\s*:\s*([a-zA-Z0-9_<>]+)(?:,|\s|$)/g;let a;for(;(a=o.exec(r))!==null;){const l=Y0[a[3]]??"float32";n[a[2]]={location:parseInt(a[1],10),format:l,stride:X0(l).stride,offset:0,instance:!1,start:0}}}}return n}function Ki(e){var h,f;const t=/(^|[^/])@(group|binding)\(\d+\)[^;]+;/g,n=/@group\((\d+)\)/,s=/@binding\((\d+)\)/,i=/var(<[^>]+>)? (\w+)/,r=/:\s*(\w+)/,o=/struct\s+(\w+)\s*{([^}]+)}/g,a=/(\w+)\s*:\s*([\w\<\>]+)/g,l=/struct\s+(\w+)/,u=(h=e.match(t))==null?void 0:h.map(d=>({group:parseInt(d.match(n)[1],10),binding:parseInt(d.match(s)[1],10),name:d.match(i)[2],isUniform:d.match(i)[1]==="<uniform>",type:d.match(r)[1]}));if(!u)return{groups:[],structs:[]};const c=((f=e.match(o))==null?void 0:f.map(d=>{const p=d.match(l)[1],g=d.match(a).reduce((m,y)=>{const[v,x]=y.split(":");return m[v.trim()]=x.trim(),m},{});return g?{name:p,members:g}:null}).filter(({name:d})=>u.some(p=>p.type===d)))??[];return{groups:u,structs:c}}var Hn=(e=>(e[e.VERTEX=1]="VERTEX",e[e.FRAGMENT=2]="FRAGMENT",e[e.COMPUTE=4]="COMPUTE",e))(Hn||{});function K0({groups:e}){const t=[];for(let n=0;n<e.length;n++){const s=e[n];t[s.group]||(t[s.group]=[]),s.isUniform?t[s.group].push({binding:s.binding,visibility:Hn.VERTEX|Hn.FRAGMENT,buffer:{type:"uniform"}}):s.type==="sampler"?t[s.group].push({binding:s.binding,visibility:Hn.FRAGMENT,sampler:{type:"filtering"}}):s.type==="texture_2d"&&t[s.group].push({binding:s.binding,visibility:Hn.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d",multisampled:!1}})}return t}function Z0({groups:e}){const t=[];for(let n=0;n<e.length;n++){const s=e[n];t[s.group]||(t[s.group]={}),t[s.group][s.name]=s.binding}return t}function Q0(e,t){const n=new Set,s=new Set,i=[...e.structs,...t.structs].filter(o=>n.has(o.name)?!1:(n.add(o.name),!0)),r=[...e.groups,...t.groups].filter(o=>{const a=`${o.name}-${o.binding}`;return s.has(a)?!1:(s.add(a),!0)});return{structs:i,groups:r}}const Zi=Object.create(null);class xi{constructor(t){var a,l;this._layoutKey=0;const{fragment:n,vertex:s,layout:i,gpuLayout:r,name:o}=t;if(this.name=o,this.fragment=n,this.vertex=s,n.source===s.source){const u=Ki(n.source);this.structsAndGroups=u}else{const u=Ki(s.source),c=Ki(n.source);this.structsAndGroups=Q0(u,c)}this.layout=i??Z0(this.structsAndGroups),this.gpuLayout=r??K0(this.structsAndGroups),this.autoAssignGlobalUniforms=((a=this.layout[0])==null?void 0:a.globalUniforms)!==void 0,this.autoAssignLocalUniforms=((l=this.layout[1])==null?void 0:l.localUniforms)!==void 0,this._generateProgramKey()}_generateProgramKey(){const{vertex:t,fragment:n}=this,s=t.source+n.source+t.entryPoint+n.entryPoint;this._layoutKey=Ao(s,"program")}get attributeData(){return this._attributeData??(this._attributeData=q0(this.vertex)),this._attributeData}destroy(){this.gpuLayout=null,this.layout=null,this.structsAndGroups=null,this.fragment=null,this.vertex=null}static from(t){const n=`${t.vertex.source}:${t.fragment.source}:${t.fragment.entryPoint}:${t.vertex.entryPoint}`;return Zi[n]||(Zi[n]=new xi(t)),Zi[n]}}const vu=["f32","i32","vec2<f32>","vec3<f32>","vec4<f32>","mat2x2<f32>","mat3x3<f32>","mat4x4<f32>","mat3x2<f32>","mat4x2<f32>","mat2x3<f32>","mat4x3<f32>","mat2x4<f32>","mat3x4<f32>"],J0=vu.reduce((e,t)=>(e[t]=!0,e),{});function tm(e,t){switch(e){case"f32":return 0;case"vec2<f32>":return new Float32Array(2*t);case"vec3<f32>":return new Float32Array(3*t);case"vec4<f32>":return new Float32Array(4*t);case"mat2x2<f32>":return new Float32Array([1,0,0,1]);case"mat3x3<f32>":return new Float32Array([1,0,0,0,1,0,0,0,1]);case"mat4x4<f32>":return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}return null}const _u=class yu{constructor(t,n){this._touched=0,this.uid=At("uniform"),this._resourceType="uniformGroup",this._resourceId=At("resource"),this.isUniformGroup=!0,this._dirtyId=0,this.destroyed=!1,n={...yu.defaultOptions,...n},this.uniformStructures=t;const s={};for(const i in t){const r=t[i];if(r.name=i,r.size=r.size??1,!J0[r.type])throw new Error(`Uniform type ${r.type} is not supported. Supported uniform types are: ${vu.join(", ")}`);r.value??(r.value=tm(r.type,r.size)),s[i]=r.value}this.uniforms=s,this._dirtyId=1,this.ubo=n.ubo,this.isStatic=n.isStatic,this._signature=Ao(Object.keys(s).map(i=>`${i}-${t[i].type}`).join("-"),"uniform-group")}update(){this._dirtyId++}};_u.defaultOptions={ubo:!1,isStatic:!1};let em=_u;class Ws{constructor(t){this.resources=Object.create(null),this._dirty=!0;let n=0;for(const s in t){const i=t[s];this.setResource(i,n++)}this._updateKey()}_updateKey(){if(!this._dirty)return;this._dirty=!1;const t=[];let n=0;for(const s in this.resources)t[n++]=this.resources[s]._resourceId;this._key=t.join("|")}setResource(t,n){var i,r;const s=this.resources[n];t!==s&&(s&&((i=t.off)==null||i.call(t,"change",this.onResourceChange,this)),(r=t.on)==null||r.call(t,"change",this.onResourceChange,this),this.resources[n]=t,this._dirty=!0)}getResource(t){return this.resources[t]}_touch(t){const n=this.resources;for(const s in n)n[s]._touched=t}destroy(){var n;const t=this.resources;for(const s in t){const i=t[s];(n=i.off)==null||n.call(i,"change",this.onResourceChange,this)}this.resources=null}onResourceChange(t){if(this._dirty=!0,t.destroyed){const n=this.resources;for(const s in n)n[s]===t&&(n[s]=null)}else this._updateKey()}}var jr=(e=>(e[e.WEBGL=1]="WEBGL",e[e.WEBGPU=2]="WEBGPU",e[e.BOTH=3]="BOTH",e))(jr||{});let nm=class bu extends le{constructor(t){super(),this._uniformBindMap=Object.create(null),this._ownedBindGroups=[];let{gpuProgram:n,glProgram:s,groups:i,resources:r,compatibleRenderers:o,groupMap:a}=t;this.gpuProgram=n,this.glProgram=s,o===void 0&&(o=0,n&&(o|=jr.WEBGPU),s&&(o|=jr.WEBGL)),this.compatibleRenderers=o;const l={};if(!r&&!i&&(r={}),r&&i)throw new Error("[Shader] Cannot have both resources and groups");if(!n&&i&&!a)throw new Error("[Shader] No group map or WebGPU shader provided - consider using resources instead.");if(!n&&i&&a)for(const u in a)for(const c in a[u]){const h=a[u][c];l[h]={group:u,binding:c,name:h}}else if(n&&i&&!a){const u=n.structsAndGroups.groups;a={},u.forEach(c=>{a[c.group]=a[c.group]||{},a[c.group][c.binding]=c.name,l[c.name]=c})}else if(r){if(n){const u=n.structsAndGroups.groups;a={},u.forEach(c=>{a[c.group]=a[c.group]||{},a[c.group][c.binding]=c.name,l[c.name]=c})}else{a={},i={99:new Ws},this._ownedBindGroups.push(i[99]);let u=0;for(const c in r)l[c]={group:99,binding:u,name:c},a[99]=a[99]||{},a[99][u]=c,u++}i={};for(const u in r){const c=u;let h=r[u];!h.source&&!h._resourceType&&(h=new em(h));const f=l[c];f&&(i[f.group]||(i[f.group]=new Ws,this._ownedBindGroups.push(i[f.group])),i[f.group].setResource(h,f.binding))}}this.groups=i,this._uniformBindMap=a,this.resources=this._buildResourceAccessor(i,l)}addResource(t,n,s){var i,r;(i=this._uniformBindMap)[n]||(i[n]={}),(r=this._uniformBindMap[n])[s]||(r[s]=t),this.groups[n]||(this.groups[n]=new Ws,this._ownedBindGroups.push(this.groups[n]))}_buildResourceAccessor(t,n){const s={};for(const i in n){const r=n[i];Object.defineProperty(s,r.name,{get(){return t[r.group].getResource(r.binding)},set(o){t[r.group].setResource(o,r.binding)}})}return s}destroy(t=!1){var n,s;this.emit("destroy",this),t&&((n=this.gpuProgram)==null||n.destroy(),(s=this.glProgram)==null||s.destroy()),this.gpuProgram=null,this.glProgram=null,this.removeAllListeners(),this._uniformBindMap=null,this._ownedBindGroups.forEach(i=>{i.destroy()}),this._ownedBindGroups=null,this.resources=null,this.groups=null}static from(t){const{gpu:n,gl:s,...i}=t;let r,o;return n&&(r=xi.from(n)),s&&(o=cs.from(s)),new bu({gpuProgram:r,glProgram:o,...i})}};const sm={normal:0,add:1,multiply:2,screen:3,overlay:4,erase:5,"normal-npm":6,"add-npm":7,"screen-npm":8},Qi=0,Ji=1,tr=2,er=3,nr=4,sr=5,Nr=class wu{constructor(){this.data=0,this.blendMode="normal",this.polygonOffset=0,this.blend=!0,this.depthMask=!0}get blend(){return!!(this.data&1<<Qi)}set blend(t){!!(this.data&1<<Qi)!==t&&(this.data^=1<<Qi)}get offsets(){return!!(this.data&1<<Ji)}set offsets(t){!!(this.data&1<<Ji)!==t&&(this.data^=1<<Ji)}set cullMode(t){if(t==="none"){this.culling=!1;return}this.culling=!0,this.clockwiseFrontFace=t==="front"}get cullMode(){return this.culling?this.clockwiseFrontFace?"front":"back":"none"}get culling(){return!!(this.data&1<<tr)}set culling(t){!!(this.data&1<<tr)!==t&&(this.data^=1<<tr)}get depthTest(){return!!(this.data&1<<er)}set depthTest(t){!!(this.data&1<<er)!==t&&(this.data^=1<<er)}get depthMask(){return!!(this.data&1<<sr)}set depthMask(t){!!(this.data&1<<sr)!==t&&(this.data^=1<<sr)}get clockwiseFrontFace(){return!!(this.data&1<<nr)}set clockwiseFrontFace(t){!!(this.data&1<<nr)!==t&&(this.data^=1<<nr)}get blendMode(){return this._blendMode}set blendMode(t){this.blend=t!=="none",this._blendMode=t,this._blendModeId=sm[t]||0}get polygonOffset(){return this._polygonOffset}set polygonOffset(t){this.offsets=!!t,this._polygonOffset=t}toString(){return`[pixi.js/core:State blendMode=${this.blendMode} clockwiseFrontFace=${this.clockwiseFrontFace} culling=${this.culling} depthMask=${this.depthMask} polygonOffset=${this.polygonOffset}]`}static for2d(){const t=new wu;return t.depthTest=!1,t.blend=!0,t}};Nr.default2d=Nr.for2d();let im=Nr;const Au=class Ur extends nm{constructor(t){t={...Ur.defaultOptions,...t},super(t),this.enabled=!0,this._state=im.for2d(),this.padding=t.padding,typeof t.antialias=="boolean"?this.antialias=t.antialias?"on":"off":this.antialias=t.antialias,this.resolution=t.resolution,this.blendRequired=t.blendRequired,this.addResource("uTexture",0,1)}apply(t,n,s,i){t.applyFilter(this,n,s,i)}get blendMode(){return this._state.blendMode}set blendMode(t){this._state.blendMode=t}static from(t){const{gpu:n,gl:s,...i}=t;let r,o;return n&&(r=xi.from(n)),s&&(o=cs.from(s)),new Ur({gpuProgram:r,glProgram:o,...i})}};Au.defaultOptions={blendMode:"normal",resolution:1,padding:0,antialias:"off",blendRequired:!1};let Cu=Au;const Dr=[];Qt.handleByNamedList(q.Environment,Dr);async function rm(e){if(!e)for(let t=0;t<Dr.length;t++){const n=Dr[t];if(n.value.test()){await n.value.load();return}}}let Ln;function om(){if(typeof Ln=="boolean")return Ln;try{Ln=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{Ln=!1}return Ln}var Co={exports:{}};Co.exports=vi;Co.exports.default=vi;function vi(e,t,n){n=n||2;var s=t&&t.length,i=s?t[0]*n:e.length,r=Su(e,0,i,n,!0),o=[];if(!r||r.next===r.prev)return o;var a,l,u,c,h,f,d;if(s&&(r=hm(e,t,r,n)),e.length>80*n){a=u=e[0],l=c=e[1];for(var p=n;p<i;p+=n)h=e[p],f=e[p+1],h<a&&(a=h),f<l&&(l=f),h>u&&(u=h),f>c&&(c=f);d=Math.max(u-a,c-l),d=d!==0?32767/d:0}return us(r,o,n,a,l,d,0),o}function Su(e,t,n,s,i){var r,o;if(i===Hr(e,t,n,s)>0)for(r=t;r<n;r+=s)o=tl(r,e[r],e[r+1],o);else for(r=n-s;r>=t;r-=s)o=tl(r,e[r],e[r+1],o);return o&&_i(o,o.next)&&(fs(o),o=o.next),o}function un(e,t){if(!e)return e;t||(t=e);var n=e,s;do if(s=!1,!n.steiner&&(_i(n,n.next)||gt(n.prev,n,n.next)===0)){if(fs(n),n=t=n.prev,n===n.next)break;s=!0}else n=n.next;while(s||n!==t);return t}function us(e,t,n,s,i,r,o){if(e){!o&&r&&gm(e,s,i,r);for(var a=e,l,u;e.prev!==e.next;){if(l=e.prev,u=e.next,r?lm(e,s,i,r):am(e)){t.push(l.i/n|0),t.push(e.i/n|0),t.push(u.i/n|0),fs(e),e=u.next,a=u.next;continue}if(e=u,e===a){o?o===1?(e=cm(un(e),t,n),us(e,t,n,s,i,r,2)):o===2&&um(e,t,n,s,i,r):us(un(e),t,n,s,i,r,1);break}}}}function am(e){var t=e.prev,n=e,s=e.next;if(gt(t,n,s)>=0)return!1;for(var i=t.x,r=n.x,o=s.x,a=t.y,l=n.y,u=s.y,c=i<r?i<o?i:o:r<o?r:o,h=a<l?a<u?a:u:l<u?l:u,f=i>r?i>o?i:o:r>o?r:o,d=a>l?a>u?a:u:l>u?l:u,p=s.next;p!==t;){if(p.x>=c&&p.x<=f&&p.y>=h&&p.y<=d&&xn(i,a,r,l,o,u,p.x,p.y)&&gt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function lm(e,t,n,s){var i=e.prev,r=e,o=e.next;if(gt(i,r,o)>=0)return!1;for(var a=i.x,l=r.x,u=o.x,c=i.y,h=r.y,f=o.y,d=a<l?a<u?a:u:l<u?l:u,p=c<h?c<f?c:f:h<f?h:f,g=a>l?a>u?a:u:l>u?l:u,m=c>h?c>f?c:f:h>f?h:f,y=Gr(d,p,t,n,s),v=Gr(g,m,t,n,s),x=e.prevZ,w=e.nextZ;x&&x.z>=y&&w&&w.z<=v;){if(x.x>=d&&x.x<=g&&x.y>=p&&x.y<=m&&x!==i&&x!==o&&xn(a,c,l,h,u,f,x.x,x.y)&&gt(x.prev,x,x.next)>=0||(x=x.prevZ,w.x>=d&&w.x<=g&&w.y>=p&&w.y<=m&&w!==i&&w!==o&&xn(a,c,l,h,u,f,w.x,w.y)&&gt(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;x&&x.z>=y;){if(x.x>=d&&x.x<=g&&x.y>=p&&x.y<=m&&x!==i&&x!==o&&xn(a,c,l,h,u,f,x.x,x.y)&&gt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;w&&w.z<=v;){if(w.x>=d&&w.x<=g&&w.y>=p&&w.y<=m&&w!==i&&w!==o&&xn(a,c,l,h,u,f,w.x,w.y)&&gt(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function cm(e,t,n){var s=e;do{var i=s.prev,r=s.next.next;!_i(i,r)&&Mu(i,s,s.next,r)&&hs(i,r)&&hs(r,i)&&(t.push(i.i/n|0),t.push(s.i/n|0),t.push(r.i/n|0),fs(s),fs(s.next),s=e=r),s=s.next}while(s!==e);return un(s)}function um(e,t,n,s,i,r){var o=e;do{for(var a=o.next.next;a!==o.prev;){if(o.i!==a.i&&_m(o,a)){var l=Pu(o,a);o=un(o,o.next),l=un(l,l.next),us(o,t,n,s,i,r,0),us(l,t,n,s,i,r,0);return}a=a.next}o=o.next}while(o!==e)}function hm(e,t,n,s){var i=[],r,o,a,l,u;for(r=0,o=t.length;r<o;r++)a=t[r]*s,l=r<o-1?t[r+1]*s:e.length,u=Su(e,a,l,s,!1),u===u.next&&(u.steiner=!0),i.push(vm(u));for(i.sort(fm),r=0;r<i.length;r++)n=dm(i[r],n);return n}function fm(e,t){return e.x-t.x}function dm(e,t){var n=pm(e,t);if(!n)return t;var s=Pu(n,e);return un(s,s.next),un(n,n.next)}function pm(e,t){var n=t,s=e.x,i=e.y,r=-1/0,o;do{if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){var a=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(a<=s&&a>r&&(r=a,o=n.x<n.next.x?n:n.next,a===s))return o}n=n.next}while(n!==t);if(!o)return null;var l=o,u=o.x,c=o.y,h=1/0,f;n=o;do s>=n.x&&n.x>=u&&s!==n.x&&xn(i<c?s:r,i,u,c,i<c?r:s,i,n.x,n.y)&&(f=Math.abs(i-n.y)/(s-n.x),hs(n,e)&&(f<h||f===h&&(n.x>o.x||n.x===o.x&&mm(o,n)))&&(o=n,h=f)),n=n.next;while(n!==l);return o}function mm(e,t){return gt(e.prev,e,t.prev)<0&&gt(t.next,e,e.next)<0}function gm(e,t,n,s){var i=e;do i.z===0&&(i.z=Gr(i.x,i.y,t,n,s)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,xm(i)}function xm(e){var t,n,s,i,r,o,a,l,u=1;do{for(n=e,e=null,r=null,o=0;n;){for(o++,s=n,a=0,t=0;t<u&&(a++,s=s.nextZ,!!s);t++);for(l=u;a>0||l>0&&s;)a!==0&&(l===0||!s||n.z<=s.z)?(i=n,n=n.nextZ,a--):(i=s,s=s.nextZ,l--),r?r.nextZ=i:e=i,i.prevZ=r,r=i;n=s}r.nextZ=null,u*=2}while(o>1);return e}function Gr(e,t,n,s,i){return e=(e-n)*i|0,t=(t-s)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function vm(e){var t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function xn(e,t,n,s,i,r,o,a){return(i-o)*(t-a)>=(e-o)*(r-a)&&(e-o)*(s-a)>=(n-o)*(t-a)&&(n-o)*(r-a)>=(i-o)*(s-a)}function _m(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!ym(e,t)&&(hs(e,t)&&hs(t,e)&&bm(e,t)&&(gt(e.prev,e,t.prev)||gt(e,t.prev,t))||_i(e,t)&&gt(e.prev,e,e.next)>0&&gt(t.prev,t,t.next)>0)}function gt(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function _i(e,t){return e.x===t.x&&e.y===t.y}function Mu(e,t,n,s){var i=Bs(gt(e,t,n)),r=Bs(gt(e,t,s)),o=Bs(gt(n,s,e)),a=Bs(gt(n,s,t));return!!(i!==r&&o!==a||i===0&&Fs(e,n,t)||r===0&&Fs(e,s,t)||o===0&&Fs(n,e,s)||a===0&&Fs(n,t,s))}function Fs(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Bs(e){return e>0?1:e<0?-1:0}function ym(e,t){var n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&Mu(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function hs(e,t){return gt(e.prev,e,e.next)<0?gt(e,t,e.next)>=0&&gt(e,e.prev,t)>=0:gt(e,t,e.prev)<0||gt(e,e.next,t)<0}function bm(e,t){var n=e,s=!1,i=(e.x+t.x)/2,r=(e.y+t.y)/2;do n.y>r!=n.next.y>r&&n.next.y!==n.y&&i<(n.next.x-n.x)*(r-n.y)/(n.next.y-n.y)+n.x&&(s=!s),n=n.next;while(n!==e);return s}function Pu(e,t){var n=new $r(e.i,e.x,e.y),s=new $r(t.i,t.x,t.y),i=e.next,r=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,s.next=n,n.prev=s,r.next=s,s.prev=r,s}function tl(e,t,n,s){var i=new $r(e,t,n);return s?(i.next=s.next,i.prev=s,s.next.prev=i,s.next=i):(i.prev=i,i.next=i),i}function fs(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function $r(e,t,n){this.i=e,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}vi.deviation=function(e,t,n,s){var i=t&&t.length,r=i?t[0]*n:e.length,o=Math.abs(Hr(e,0,r,n));if(i)for(var a=0,l=t.length;a<l;a++){var u=t[a]*n,c=a<l-1?t[a+1]*n:e.length;o-=Math.abs(Hr(e,u,c,n))}var h=0;for(a=0;a<s.length;a+=3){var f=s[a]*n,d=s[a+1]*n,p=s[a+2]*n;h+=Math.abs((e[f]-e[p])*(e[d+1]-e[f+1])-(e[f]-e[d])*(e[p+1]-e[f+1]))}return o===0&&h===0?0:Math.abs((h-o)/o)};function Hr(e,t,n,s){for(var i=0,r=t,o=n-s;r<n;r+=s)i+=(e[o]-e[r])*(e[r+1]+e[o+1]),o=r;return i}vi.flatten=function(e){for(var t=e[0][0].length,n={vertices:[],holes:[],dimensions:t},s=0,i=0;i<e.length;i++){for(var r=0;r<e[i].length;r++)for(var o=0;o<t;o++)n.vertices.push(e[i][r][o]);i>0&&(s+=e[i-1].length,n.holes.push(s))}return n};var wm=Co.exports;const Am=yo(wm);var Tu=(e=>(e[e.NONE=0]="NONE",e[e.COLOR=16384]="COLOR",e[e.STENCIL=1024]="STENCIL",e[e.DEPTH=256]="DEPTH",e[e.COLOR_DEPTH=16640]="COLOR_DEPTH",e[e.COLOR_STENCIL=17408]="COLOR_STENCIL",e[e.DEPTH_STENCIL=1280]="DEPTH_STENCIL",e[e.ALL=17664]="ALL",e))(Tu||{});class Cm{constructor(t){this.items=[],this._name=t}emit(t,n,s,i,r,o,a,l){const{name:u,items:c}=this;for(let h=0,f=c.length;h<f;h++)c[h][u](t,n,s,i,r,o,a,l);return this}add(t){return t[this._name]&&(this.remove(t),this.items.push(t)),this}remove(t){const n=this.items.indexOf(t);return n!==-1&&this.items.splice(n,1),this}contains(t){return this.items.indexOf(t)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const Sm=["init","destroy","contextChange","resolutionChange","reset","renderEnd","renderStart","render","update","postrender","prerender"],ku=class Eu extends le{constructor(t){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=t.type,this.name=t.name,this.config=t;const n=[...Sm,...this.config.runners??[]];this._addRunners(...n),this._unsafeEvalCheck()}async init(t={}){const n=t.skipExtensionImports===!0?!0:t.manageImports===!1;await rm(n),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const s in this._systemsHash)t={...this._systemsHash[s].constructor.defaultOptions,...t};t={...Eu.defaultOptions,...t},this._roundPixels=t.roundPixels?1:0;for(let s=0;s<this.runners.init.items.length;s++)await this.runners.init.items[s].init(t);this._initOptions=t}render(t,n){let s=t;if(s instanceof zt&&(s={container:s},n&&(ut(ct,"passing a second argument is deprecated, please use render options instead"),s.target=n.renderTexture)),s.target||(s.target=this.view.renderTarget),s.target===this.view.renderTarget&&(this._lastObjectRendered=s.container,s.clearColor=this.background.colorRgba),s.clearColor){const i=Array.isArray(s.clearColor)&&s.clearColor.length===4;s.clearColor=i?s.clearColor:yt.shared.setValue(s.clearColor).toArray()}s.transform||(s.container.updateLocalTransform(),s.transform=s.container.localTransform),this.runners.prerender.emit(s),this.runners.renderStart.emit(s),this.runners.render.emit(s),this.runners.renderEnd.emit(s),this.runners.postrender.emit(s)}resize(t,n,s){this.view.resize(t,n,s),this.emit("resize",this.view.screen.width,this.view.screen.height)}clear(t={}){const n=this;t.target||(t.target=n.renderTarget.renderTarget),t.clearColor||(t.clearColor=this.background.colorRgba),t.clear??(t.clear=Tu.ALL);const{clear:s,clearColor:i,target:r}=t;yt.shared.setValue(i??this.background.colorRgba),n.renderTarget.clear(r,s,yt.shared.toArray())}get resolution(){return this.view.resolution}set resolution(t){this.view.resolution=t,this.runners.resolutionChange.emit(t)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...t){t.forEach(n=>{this.runners[n]=new Cm(n)})}_addSystems(t){let n;for(n in t){const s=t[n];this._addSystem(s.value,s.name)}}_addSystem(t,n){const s=new t(this);if(this[n])throw new Error(`Whoops! The name "${n}" is already in use`);this[n]=s,this._systemsHash[n]=s;for(const i in this.runners)this.runners[i].add(s);return this}_addPipes(t,n){const s=n.reduce((i,r)=>(i[r.name]=r.value,i),{});t.forEach(i=>{const r=i.value,o=i.name,a=s[o];this.renderPipes[o]=new r(this,a?new a:null)})}destroy(t=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(t),Object.values(this.runners).forEach(n=>{n.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(t){return this.textureGenerator.generateTexture(t)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!om())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}};ku.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let Iu=ku,Rs;function Mm(e){return Rs!==void 0||(Rs=(()=>{var n;const t={stencil:!0,failIfMajorPerformanceCaveat:e??Iu.defaultOptions.failIfMajorPerformanceCaveat};try{if(!xt.get().getWebGLRenderingContext())return!1;let i=xt.get().createCanvas().getContext("webgl",t);const r=!!((n=i==null?void 0:i.getContextAttributes())!=null&&n.stencil);if(i){const o=i.getExtension("WEBGL_lose_context");o&&o.loseContext()}return i=null,r}catch{return!1}})()),Rs}let zs;async function Pm(e={}){return zs!==void 0||(zs=await(async()=>{if(!xt.get().getNavigator().gpu)return!1;try{return await(await navigator.gpu.requestAdapter(e)).requestDevice(),!0}catch{return!1}})()),zs}const el=["webgl","webgpu","canvas"];async function Tm(e){let t=[];e.preference?(t.push(e.preference),el.forEach(r=>{r!==e.preference&&t.push(r)})):t=el.slice();let n,s={};for(let r=0;r<t.length;r++){const o=t[r];if(o==="webgpu"&&await Pm()){const{WebGPURenderer:a}=await Zs(()=>import("./WebGPURenderer-DReW_1Ec.js"),__vite__mapDeps([4,2,5]));n=a,s={...e,...e.webgpu};break}else if(o==="webgl"&&Mm(e.failIfMajorPerformanceCaveat??Iu.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:a}=await Zs(()=>import("./WebGLRenderer-D6Wt8uwT.js"),__vite__mapDeps([6,2,3,5]));n=a,s={...e,...e.webgl};break}else if(o==="canvas")throw s={...e},new Error("CanvasRenderer is not yet implemented")}if(delete s.webgpu,delete s.webgl,!n)throw new Error("No available renderer for the current environment");const i=new n;return await i.init(s),i}const Fu=class Wr{constructor(...t){this.stage=new zt,t[0]!==void 0&&ut(ct,"Application constructor options are deprecated, please use Application.init() instead.")}async init(t){t={...t},this.renderer=await Tm(t),Wr._plugins.forEach(n=>{n.init.call(this,t)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return ut(ct,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(t=!1,n=!1){const s=Wr._plugins.slice(0);s.reverse(),s.forEach(i=>{i.destroy.call(this)}),this.stage.destroy(n),this.stage=null,this.renderer.destroy(t),this.renderer=null}};Fu._plugins=[];let So=Fu;Qt.handleByList(q.Application,So._plugins);class Bu extends le{constructor(){super(...arguments),this.chars=Object.create(null),this.lineHeight=0,this.fontFamily="",this.fontMetrics={fontSize:0,ascent:0,descent:0},this.baseLineOffset=0,this.distanceField={type:"none",range:0},this.pages=[],this.baseMeasurementFontSize=100,this.baseRenderedFontSize=100}get font(){return ut(ct,"BitmapFont.font is deprecated, please use BitmapFont.fontFamily instead."),this.fontFamily}get pageTextures(){return ut(ct,"BitmapFont.pageTextures is deprecated, please use BitmapFont.pages instead."),this.pages}get size(){return ut(ct,"BitmapFont.size is deprecated, please use BitmapFont.fontMetrics.fontSize instead."),this.fontMetrics.fontSize}get distanceFieldRange(){return ut(ct,"BitmapFont.distanceFieldRange is deprecated, please use BitmapFont.distanceField.range instead."),this.distanceField.range}get distanceFieldType(){return ut(ct,"BitmapFont.distanceFieldType is deprecated, please use BitmapFont.distanceField.type instead."),this.distanceField.type}destroy(t=!1){var n;this.emit("destroy",this),this.removeAllListeners();for(const s in this.chars)(n=this.chars[s].texture)==null||n.destroy();this.chars=null,t&&(this.pages.forEach(s=>s.texture.destroy(!0)),this.pages=null)}}const Ru=class Vr{constructor(t,n,s,i){this.uid=At("fillGradient"),this.type="linear",this.gradientStops=[],this._styleKey=null,this.x0=t,this.y0=n,this.x1=s,this.y1=i}addColorStop(t,n){return this.gradientStops.push({offset:t,color:yt.shared.setValue(n).toHex()}),this._styleKey=null,this}buildLinearGradient(){const t=Vr.defaultTextureSize,{gradientStops:n}=this,s=xt.get().createCanvas();s.width=t,s.height=t;const i=s.getContext("2d"),r=i.createLinearGradient(0,0,Vr.defaultTextureSize,1);for(let g=0;g<n.length;g++){const m=n[g];r.addColorStop(m.offset,m.color)}i.fillStyle=r,i.fillRect(0,0,t,t),this.texture=new rt({source:new kn({resource:s,addressModeU:"clamp-to-edge",addressModeV:"repeat"})});const{x0:o,y0:a,x1:l,y1:u}=this,c=new at,h=l-o,f=u-a,d=Math.sqrt(h*h+f*f),p=Math.atan2(f,h);c.translate(-o,-a),c.scale(1/t,1/t),c.rotate(-p),c.scale(256/d,1),this.transform=c,this._styleKey=null}get styleKey(){if(this._styleKey)return this._styleKey;const t=this.gradientStops.map(i=>`${i.offset}-${i.color}`).join("-"),n=this.texture.uid,s=this.transform.toArray().join("-");return`fill-gradient-${this.uid}-${t}-${n}-${s}-${this.x0}-${this.y0}-${this.x1}-${this.y1}`}};Ru.defaultTextureSize=256;let ds=Ru;const nl={repeat:{addressModeU:"repeat",addressModeV:"repeat"},"repeat-x":{addressModeU:"repeat",addressModeV:"clamp-to-edge"},"repeat-y":{addressModeU:"clamp-to-edge",addressModeV:"repeat"},"no-repeat":{addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}};class yi{constructor(t,n){this.uid=At("fillPattern"),this.transform=new at,this._styleKey=null,this.texture=t,this.transform.scale(1/t.frame.width,1/t.frame.height),n&&(t.source.style.addressModeU=nl[n].addressModeU,t.source.style.addressModeV=nl[n].addressModeV)}setTransform(t){const n=this.texture;this.transform.copyFrom(t),this.transform.invert(),this.transform.scale(1/n.frame.width,1/n.frame.height),this._styleKey=null}get styleKey(){return this._styleKey?this._styleKey:(this._styleKey=`fill-pattern-${this.uid}-${this.texture.uid}-${this.transform.toArray().join("-")}`,this._styleKey)}}var km=Im,ir={a:7,c:6,h:1,l:2,m:2,q:4,s:4,t:2,v:1,z:0},Em=/([astvzqmhlc])([^astvzqmhlc]*)/ig;function Im(e){var t=[];return e.replace(Em,function(n,s,i){var r=s.toLowerCase();for(i=Bm(i),r=="m"&&i.length>2&&(t.push([s].concat(i.splice(0,2))),r="l",s=s=="m"?"l":"L");;){if(i.length==ir[r])return i.unshift(s),t.push(i);if(i.length<ir[r])throw new Error("malformed path data");t.push([s].concat(i.splice(0,ir[r])))}}),t}var Fm=/-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/ig;function Bm(e){var t=e.match(Fm);return t?t.map(Number):[]}const Rm=yo(km);function zm(e,t){const n=Rm(e),s=[];let i=null,r=0,o=0;for(let a=0;a<n.length;a++){const l=n[a],u=l[0],c=l;switch(u){case"M":r=c[1],o=c[2],t.moveTo(r,o);break;case"m":r+=c[1],o+=c[2],t.moveTo(r,o);break;case"H":r=c[1],t.lineTo(r,o);break;case"h":r+=c[1],t.lineTo(r,o);break;case"V":o=c[1],t.lineTo(r,o);break;case"v":o+=c[1],t.lineTo(r,o);break;case"L":r=c[1],o=c[2],t.lineTo(r,o);break;case"l":r+=c[1],o+=c[2],t.lineTo(r,o);break;case"C":r=c[5],o=c[6],t.bezierCurveTo(c[1],c[2],c[3],c[4],r,o);break;case"c":t.bezierCurveTo(r+c[1],o+c[2],r+c[3],o+c[4],r+c[5],o+c[6]),r+=c[5],o+=c[6];break;case"S":r=c[3],o=c[4],t.bezierCurveToShort(c[1],c[2],r,o);break;case"s":t.bezierCurveToShort(r+c[1],o+c[2],r+c[3],o+c[4]),r+=c[3],o+=c[4];break;case"Q":r=c[3],o=c[4],t.quadraticCurveTo(c[1],c[2],r,o);break;case"q":t.quadraticCurveTo(r+c[1],o+c[2],r+c[3],o+c[4]),r+=c[3],o+=c[4];break;case"T":r=c[1],o=c[2],t.quadraticCurveToShort(r,o);break;case"t":r+=c[1],o+=c[2],t.quadraticCurveToShort(r,o);break;case"A":r=c[6],o=c[7],t.arcToSvg(c[1],c[2],c[3],c[4],c[5],r,o);break;case"a":r+=c[6],o+=c[7],t.arcToSvg(c[1],c[2],c[3],c[4],c[5],r,o);break;case"Z":case"z":t.closePath(),s.length>0&&(i=s.pop(),i?(r=i.startX,o=i.startY):(r=0,o=0)),i=null;break;default:Tt(`Unknown SVG path command: ${u}`)}u!=="Z"&&u!=="z"&&i===null&&(i={startX:r,startY:o},s.push(i))}return t}class Mo{constructor(t=0,n=0,s=0){this.type="circle",this.x=t,this.y=n,this.radius=s}clone(){return new Mo(this.x,this.y,this.radius)}contains(t,n){if(this.radius<=0)return!1;const s=this.radius*this.radius;let i=this.x-t,r=this.y-n;return i*=i,r*=r,i+r<=s}strokeContains(t,n,s){if(this.radius===0)return!1;const i=this.x-t,r=this.y-n,o=this.radius,a=s/2,l=Math.sqrt(i*i+r*r);return l<o+a&&l>o-a}getBounds(t){return t=t||new wt,t.x=this.x-this.radius,t.y=this.y-this.radius,t.width=this.radius*2,t.height=this.radius*2,t}copyFrom(t){return this.x=t.x,this.y=t.y,this.radius=t.radius,this}copyTo(t){return t.copyFrom(this),t}toString(){return`[pixi.js/math:Circle x=${this.x} y=${this.y} radius=${this.radius}]`}}class Po{constructor(t=0,n=0,s=0,i=0){this.type="ellipse",this.x=t,this.y=n,this.halfWidth=s,this.halfHeight=i}clone(){return new Po(this.x,this.y,this.halfWidth,this.halfHeight)}contains(t,n){if(this.halfWidth<=0||this.halfHeight<=0)return!1;let s=(t-this.x)/this.halfWidth,i=(n-this.y)/this.halfHeight;return s*=s,i*=i,s+i<=1}strokeContains(t,n,s){const{halfWidth:i,halfHeight:r}=this;if(i<=0||r<=0)return!1;const o=s/2,a=i-o,l=r-o,u=i+o,c=r+o,h=t-this.x,f=n-this.y,d=h*h/(a*a)+f*f/(l*l),p=h*h/(u*u)+f*f/(c*c);return d>1&&p<=1}getBounds(){return new wt(this.x-this.halfWidth,this.y-this.halfHeight,this.halfWidth*2,this.halfHeight*2)}copyFrom(t){return this.x=t.x,this.y=t.y,this.halfWidth=t.halfWidth,this.halfHeight=t.halfHeight,this}copyTo(t){return t.copyFrom(this),t}toString(){return`[pixi.js/math:Ellipse x=${this.x} y=${this.y} halfWidth=${this.halfWidth} halfHeight=${this.halfHeight}]`}}function Om(e,t,n,s,i,r){const o=e-n,a=t-s,l=i-n,u=r-s,c=o*l+a*u,h=l*l+u*u;let f=-1;h!==0&&(f=c/h);let d,p;f<0?(d=n,p=s):f>1?(d=i,p=r):(d=n+f*l,p=s+f*u);const g=e-d,m=t-p;return g*g+m*m}class Jn{constructor(...t){this.type="polygon";let n=Array.isArray(t[0])?t[0]:t;if(typeof n[0]!="number"){const s=[];for(let i=0,r=n.length;i<r;i++)s.push(n[i].x,n[i].y);n=s}this.points=n,this.closePath=!0}clone(){const t=this.points.slice(),n=new Jn(t);return n.closePath=this.closePath,n}contains(t,n){let s=!1;const i=this.points.length/2;for(let r=0,o=i-1;r<i;o=r++){const a=this.points[r*2],l=this.points[r*2+1],u=this.points[o*2],c=this.points[o*2+1];l>n!=c>n&&t<(u-a)*((n-l)/(c-l))+a&&(s=!s)}return s}strokeContains(t,n,s){const i=s/2,r=i*i,{points:o}=this,a=o.length-(this.closePath?0:2);for(let l=0;l<a;l+=2){const u=o[l],c=o[l+1],h=o[(l+2)%o.length],f=o[(l+3)%o.length];if(Om(t,n,u,c,h,f)<=r)return!0}return!1}getBounds(t){t=t||new wt;const n=this.points;let s=1/0,i=-1/0,r=1/0,o=-1/0;for(let a=0,l=n.length;a<l;a+=2){const u=n[a],c=n[a+1];s=u<s?u:s,i=u>i?u:i,r=c<r?c:r,o=c>o?c:o}return t.x=s,t.width=i-s,t.y=r,t.height=o-r,t}copyFrom(t){return this.points=t.points.slice(),this.closePath=t.closePath,this}copyTo(t){return t.copyFrom(this),t}toString(){return`[pixi.js/math:PolygoncloseStroke=${this.closePath}points=${this.points.reduce((t,n)=>`${t}, ${n}`,"")}]`}get lastX(){return this.points[this.points.length-2]}get lastY(){return this.points[this.points.length-1]}get x(){return this.points[this.points.length-2]}get y(){return this.points[this.points.length-1]}}const Os=(e,t,n,s,i,r)=>{const o=e-n,a=t-s,l=Math.sqrt(o*o+a*a);return l>=i-r&&l<=i+r};class To{constructor(t=0,n=0,s=0,i=0,r=20){this.type="roundedRectangle",this.x=t,this.y=n,this.width=s,this.height=i,this.radius=r}getBounds(t){return t=t||new wt,t.x=this.x,t.y=this.y,t.width=this.width,t.height=this.height,t}clone(){return new To(this.x,this.y,this.width,this.height,this.radius)}copyFrom(t){return this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height,this}copyTo(t){return t.copyFrom(this),t}contains(t,n){if(this.width<=0||this.height<=0)return!1;if(t>=this.x&&t<=this.x+this.width&&n>=this.y&&n<=this.y+this.height){const s=Math.max(0,Math.min(this.radius,Math.min(this.width,this.height)/2));if(n>=this.y+s&&n<=this.y+this.height-s||t>=this.x+s&&t<=this.x+this.width-s)return!0;let i=t-(this.x+s),r=n-(this.y+s);const o=s*s;if(i*i+r*r<=o||(i=t-(this.x+this.width-s),i*i+r*r<=o)||(r=n-(this.y+this.height-s),i*i+r*r<=o)||(i=t-(this.x+s),i*i+r*r<=o))return!0}return!1}strokeContains(t,n,s){const{x:i,y:r,width:o,height:a,radius:l}=this,u=s/2,c=i+l,h=r+l,f=o-l*2,d=a-l*2,p=i+o,g=r+a;return(t>=i-u&&t<=i+u||t>=p-u&&t<=p+u)&&n>=h&&n<=h+d||(n>=r-u&&n<=r+u||n>=g-u&&n<=g+u)&&t>=c&&t<=c+f?!0:t<c&&n<h&&Os(t,n,c,h,l,u)||t>p-l&&n<h&&Os(t,n,p-l,h,l,u)||t>p-l&&n>g-l&&Os(t,n,p-l,g-l,l,u)||t<c&&n>g-l&&Os(t,n,c,g-l,l,u)}toString(){return`[pixi.js/math:RoundedRectangle x=${this.x} y=${this.y}width=${this.width} height=${this.height} radius=${this.radius}]`}}var jt=(e=>(e[e.MAP_READ=1]="MAP_READ",e[e.MAP_WRITE=2]="MAP_WRITE",e[e.COPY_SRC=4]="COPY_SRC",e[e.COPY_DST=8]="COPY_DST",e[e.INDEX=16]="INDEX",e[e.VERTEX=32]="VERTEX",e[e.UNIFORM=64]="UNIFORM",e[e.STORAGE=128]="STORAGE",e[e.INDIRECT=256]="INDIRECT",e[e.QUERY_RESOLVE=512]="QUERY_RESOLVE",e[e.STATIC=1024]="STATIC",e))(jt||{});class ps extends le{constructor(t){let{data:n,size:s}=t;const{usage:i,label:r,shrinkToFit:o}=t;super(),this.uid=At("buffer"),this._resourceType="buffer",this._resourceId=At("resource"),this._touched=0,this._updateID=1,this.shrinkToFit=!0,this.destroyed=!1,n instanceof Array&&(n=new Float32Array(n)),this._data=n,s=s??(n==null?void 0:n.byteLength);const a=!!n;this.descriptor={size:s,usage:i,mappedAtCreation:a,label:r},this.shrinkToFit=o??!0}get data(){return this._data}set data(t){this.setDataWithSize(t,t.length,!0)}get static(){return!!(this.descriptor.usage&jt.STATIC)}set static(t){t?this.descriptor.usage|=jt.STATIC:this.descriptor.usage&=~jt.STATIC}setDataWithSize(t,n,s){if(this._updateID++,this._updateSize=n*t.BYTES_PER_ELEMENT,this._data===t){s&&this.emit("update",this);return}const i=this._data;if(this._data=t,i.length!==t.length){!this.shrinkToFit&&t.byteLength<i.byteLength?s&&this.emit("update",this):(this.descriptor.size=t.byteLength,this._resourceId=At("resource"),this.emit("change",this));return}s&&this.emit("update",this)}update(t){this._updateSize=t??this._updateSize,this._updateID++,this.emit("update",this)}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this._data=null,this.descriptor=null,this.removeAllListeners()}}function zu(e,t){if(!(e instanceof ps)){let n=t?jt.INDEX:jt.VERTEX;e instanceof Array&&(t?(e=new Uint32Array(e),n=jt.INDEX|jt.COPY_DST):(e=new Float32Array(e),n=jt.VERTEX|jt.COPY_DST)),e=new ps({data:e,label:t?"index-mesh-buffer":"vertex-mesh-buffer",usage:n})}return e}function Lm(e,t,n){const s=e.getAttribute(t);if(!s)return n.minX=0,n.minY=0,n.maxX=0,n.maxY=0,n;const i=s.buffer.data;let r=1/0,o=1/0,a=-1/0,l=-1/0;const u=i.BYTES_PER_ELEMENT,c=(s.offset||0)/u,h=(s.stride||2*4)/u;for(let f=c;f<i.length;f+=h){const d=i[f],p=i[f+1];d>a&&(a=d),p>l&&(l=p),d<r&&(r=d),p<o&&(o=p)}return n.minX=r,n.minY=o,n.maxX=a,n.maxY=l,n}function jm(e){return(e instanceof ps||Array.isArray(e)||e.BYTES_PER_ELEMENT)&&(e={buffer:e}),e.buffer=zu(e.buffer,!1),e}class Nm extends le{constructor(t){const{attributes:n,indexBuffer:s,topology:i}=t;super(),this.uid=At("geometry"),this._layoutKey=0,this.instanceCount=1,this._bounds=new Me,this._boundsDirty=!0,this.attributes=n,this.buffers=[],this.instanceCount=t.instanceCount||1;for(const r in n){const o=n[r]=jm(n[r]);this.buffers.indexOf(o.buffer)===-1&&(this.buffers.push(o.buffer),o.buffer.on("update",this.onBufferUpdate,this),o.buffer.on("change",this.onBufferUpdate,this))}s&&(this.indexBuffer=zu(s,!0),this.buffers.push(this.indexBuffer)),this.topology=i||"triangle-list"}onBufferUpdate(){this._boundsDirty=!0,this.emit("update",this)}getAttribute(t){return this.attributes[t]}getIndex(){return this.indexBuffer}getBuffer(t){return this.getAttribute(t).buffer}getSize(){for(const t in this.attributes){const n=this.attributes[t];return n.buffer.data.length/(n.stride/4||n.size)}return 0}get bounds(){return this._boundsDirty?(this._boundsDirty=!1,Lm(this,"aPosition",this._bounds)):this._bounds}destroy(t=!1){this.emit("destroy",this),this.removeAllListeners(),t&&this.buffers.forEach(n=>n.destroy()),this.attributes=null,this.buffers=null,this.indexBuffer=null,this._bounds=null}}const Um=new Float32Array(1),Dm=new Uint32Array(1);class Gm extends Nm{constructor(){const n=new ps({data:Um,label:"attribute-batch-buffer",usage:jt.VERTEX|jt.COPY_DST,shrinkToFit:!1}),s=new ps({data:Dm,label:"index-batch-buffer",usage:jt.INDEX|jt.COPY_DST,shrinkToFit:!1}),i=6*4;super({attributes:{aPosition:{buffer:n,format:"float32x2",stride:i,offset:0,location:1},aUV:{buffer:n,format:"float32x2",stride:i,offset:2*4,location:3},aColor:{buffer:n,format:"unorm8x4",stride:i,offset:4*4,location:0},aTextureIdAndRound:{buffer:n,format:"uint16x2",stride:i,offset:5*4,location:2}},indexBuffer:s})}}let Ls=null;function Ou(){if(Ls)return Ls;const e=gu();return Ls=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),Ls}const Lu={};function $m(e,t){let n=0;for(let s=0;s<t;s++)n=n*31+e[s].uid>>>0;return Lu[n]||Hm(e,n)}let rr=0;function Hm(e,t){const n={};let s=0;rr||(rr=Ou());for(let r=0;r<rr;r++){const o=r<e.length?e[r]:rt.EMPTY.source;n[s++]=o.source,n[s++]=o.style}const i=new Ws(n);return Lu[t]=i,i}class sl{constructor(t){typeof t=="number"?this.rawBinaryData=new ArrayBuffer(t):t instanceof Uint8Array?this.rawBinaryData=t.buffer:this.rawBinaryData=t,this.uint32View=new Uint32Array(this.rawBinaryData),this.float32View=new Float32Array(this.rawBinaryData),this.size=this.rawBinaryData.byteLength}get int8View(){return this._int8View||(this._int8View=new Int8Array(this.rawBinaryData)),this._int8View}get uint8View(){return this._uint8View||(this._uint8View=new Uint8Array(this.rawBinaryData)),this._uint8View}get int16View(){return this._int16View||(this._int16View=new Int16Array(this.rawBinaryData)),this._int16View}get int32View(){return this._int32View||(this._int32View=new Int32Array(this.rawBinaryData)),this._int32View}get float64View(){return this._float64Array||(this._float64Array=new Float64Array(this.rawBinaryData)),this._float64Array}get bigUint64View(){return this._bigUint64Array||(this._bigUint64Array=new BigUint64Array(this.rawBinaryData)),this._bigUint64Array}view(t){return this[`${t}View`]}destroy(){this.rawBinaryData=null,this._int8View=null,this._uint8View=null,this._int16View=null,this.uint16View=null,this._int32View=null,this.uint32View=null,this.float32View=null}static sizeOf(t){switch(t){case"int8":case"uint8":return 1;case"int16":case"uint16":return 2;case"int32":case"uint32":case"float32":return 4;default:throw new Error(`${t} isn't a valid view type`)}}}function il(e,t){const n=e.byteLength/8|0,s=new Float64Array(e,0,n);new Float64Array(t,0,n).set(s);const r=e.byteLength-n*8;if(r>0){const o=new Uint8Array(e,n*8,r);new Uint8Array(t,n*8,r).set(o)}}const Wm={normal:"normal-npm",add:"add-npm",screen:"screen-npm"};var Vm=(e=>(e[e.DISABLED=0]="DISABLED",e[e.RENDERING_MASK_ADD=1]="RENDERING_MASK_ADD",e[e.MASK_ACTIVE=2]="MASK_ACTIVE",e[e.RENDERING_MASK_REMOVE=3]="RENDERING_MASK_REMOVE",e[e.NONE=4]="NONE",e))(Vm||{});function rl(e,t){return t.alphaMode==="no-premultiply-alpha"&&Wm[e]||e}class ol{constructor(){this.ids=Object.create(null),this.textures=[],this.count=0}clear(){for(let t=0;t<this.count;t++){const n=this.textures[t];this.textures[t]=null,this.ids[n.uid]=null}this.count=0}}class al{constructor(){this.renderPipeId="batch",this.action="startBatch",this.start=0,this.size=0,this.blendMode="normal",this.canBundle=!0}destroy(){this.textures=null,this.gpuBindGroup=null,this.bindGroup=null,this.batcher=null}}let jn=0;const ju=class Nu{constructor(t={}){this.uid=At("batcher"),this.dirty=!0,this.batchIndex=0,this.batches=[],this._vertexSize=6,this._elements=[],this._batchPool=[],this._batchPoolIndex=0,this._textureBatchPool=[],this._textureBatchPoolIndex=0,t={...Nu.defaultOptions,...t};const{vertexSize:n,indexSize:s}=t;this.attributeBuffer=new sl(n*this._vertexSize*4),this.indexBuffer=new Uint16Array(s),this._maxTextures=Ou()}begin(){this.batchIndex=0,this.elementSize=0,this.elementStart=0,this.indexSize=0,this.attributeSize=0,this._batchPoolIndex=0,this._textureBatchPoolIndex=0,this._batchIndexStart=0,this._batchIndexSize=0,this.dirty=!0}add(t){this._elements[this.elementSize++]=t,t.indexStart=this.indexSize,t.location=this.attributeSize,t.batcher=this,this.indexSize+=t.indexSize,this.attributeSize+=t.vertexSize*this._vertexSize}checkAndUpdateTexture(t,n){const s=t.batch.textures.ids[n._source.uid];return!s&&s!==0?!1:(t.textureId=s,t.texture=n,!0)}updateElement(t){this.dirty=!0,t.packAttributes(this.attributeBuffer.float32View,this.attributeBuffer.uint32View,t.location,t.textureId)}break(t){const n=this._elements;let s=this._textureBatchPool[this._textureBatchPoolIndex++]||new ol;if(s.clear(),!n[this.elementStart])return;const i=n[this.elementStart];let r=rl(i.blendMode,i.texture._source);this.attributeSize*4>this.attributeBuffer.size&&this._resizeAttributeBuffer(this.attributeSize*4),this.indexSize>this.indexBuffer.length&&this._resizeIndexBuffer(this.indexSize);const o=this.attributeBuffer.float32View,a=this.attributeBuffer.uint32View,l=this.indexBuffer;let u=this._batchIndexSize,c=this._batchIndexStart,h="startBatch",f=this._batchPool[this._batchPoolIndex++]||new al;const d=this._maxTextures;for(let p=this.elementStart;p<this.elementSize;++p){const g=n[p];n[p]=null;const y=g.texture._source,v=rl(g.blendMode,y),x=r!==v;if(y._batchTick===jn&&!x){g.textureId=y._textureBindLocation,u+=g.indexSize,g.packAttributes(o,a,g.location,g.textureId),g.packIndex(l,g.indexStart,g.location/this._vertexSize),g.batch=f;continue}y._batchTick=jn,(s.count>=d||x)&&(this._finishBatch(f,c,u-c,s,r,t,h),h="renderBatch",c=u,r=v,s=this._textureBatchPool[this._textureBatchPoolIndex++]||new ol,s.clear(),f=this._batchPool[this._batchPoolIndex++]||new al,++jn),g.textureId=y._textureBindLocation=s.count,s.ids[y.uid]=s.count,s.textures[s.count++]=y,g.batch=f,u+=g.indexSize,g.packAttributes(o,a,g.location,g.textureId),g.packIndex(l,g.indexStart,g.location/this._vertexSize)}s.count>0&&(this._finishBatch(f,c,u-c,s,r,t,h),c=u,++jn),this.elementStart=this.elementSize,this._batchIndexStart=c,this._batchIndexSize=u}_finishBatch(t,n,s,i,r,o,a){t.gpuBindGroup=null,t.action=a,t.batcher=this,t.textures=i,t.blendMode=r,t.start=n,t.size=s,++jn,o.add(t)}finish(t){this.break(t)}ensureAttributeBuffer(t){t*4<=this.attributeBuffer.size||this._resizeAttributeBuffer(t*4)}ensureIndexBuffer(t){t<=this.indexBuffer.length||this._resizeIndexBuffer(t)}_resizeAttributeBuffer(t){const n=Math.max(t,this.attributeBuffer.size*2),s=new sl(n);il(this.attributeBuffer.rawBinaryData,s.rawBinaryData),this.attributeBuffer=s}_resizeIndexBuffer(t){const n=this.indexBuffer;let s=Math.max(t,n.length*1.5);s+=s%2;const i=s>65535?new Uint32Array(s):new Uint16Array(s);if(i.BYTES_PER_ELEMENT!==n.BYTES_PER_ELEMENT)for(let r=0;r<n.length;r++)i[r]=n[r];else il(n.buffer,i.buffer);this.indexBuffer=i}destroy(){for(let t=0;t<this.batches.length;t++)this.batches[t].destroy();this.batches=null;for(let t=0;t<this._elements.length;t++)this._elements[t].batch=null;this._elements=null,this.indexBuffer=null,this.attributeBuffer.destroy(),this.attributeBuffer=null}};ju.defaultOptions={vertexSize:4,indexSize:6};let Xm=ju;function Ym(e,t,n,s,i,r,o,a=null){let l=0;n*=t,i*=r;const u=a.a,c=a.b,h=a.c,f=a.d,d=a.tx,p=a.ty;for(;l<o;){const g=e[n],m=e[n+1];s[i]=u*g+h*m+d,s[i+1]=c*g+f*m+p,i+=r,n+=t,l++}}function qm(e,t,n,s){let i=0;for(t*=n;i<s;)e[t]=0,e[t+1]=0,t+=n,i++}function Uu(e,t,n,s,i){const r=t.a,o=t.b,a=t.c,l=t.d,u=t.tx,c=t.ty;n=n||0,s=s||2,i=i||e.length/s-n;let h=n*s;for(let f=0;f<i;f++){const d=e[h],p=e[h+1];e[h]=r*d+a*p+u,e[h+1]=o*d+l*p+c,h+=s}}function Km(e,t){if(e===16777215||!t)return t;if(t===16777215||!e)return e;const n=e>>16&255,s=e>>8&255,i=e&255,r=t>>16&255,o=t>>8&255,a=t&255,l=n*r/255,u=s*o/255,c=i*a/255;return(l<<16)+(u<<8)+c}class Du{constructor(){this.batcher=null,this.batch=null,this.applyTransform=!0,this.roundPixels=0}get blendMode(){return this.applyTransform?this.renderable.groupBlendMode:"normal"}packIndex(t,n,s){const i=this.geometryData.indices;for(let r=0;r<this.indexSize;r++)t[n++]=i[r+this.indexOffset]+s-this.vertexOffset}packAttributes(t,n,s,i){const r=this.geometryData,o=this.renderable,a=r.vertices,l=r.uvs,u=this.vertexOffset*2,c=(this.vertexOffset+this.vertexSize)*2,h=this.color,f=h>>16|h&65280|(h&255)<<16;if(this.applyTransform){const d=Km(f,o.groupColor)+(this.alpha*o.groupAlpha*255<<24),p=o.groupTransform,g=i<<16|this.roundPixels&65535,m=p.a,y=p.b,v=p.c,x=p.d,w=p.tx,I=p.ty;for(let M=u;M<c;M+=2){const R=a[M],k=a[M+1];t[s]=m*R+v*k+w,t[s+1]=y*R+x*k+I,t[s+2]=l[M],t[s+3]=l[M+1],n[s+4]=d,n[s+5]=g,s+=6}}else{const d=f+(this.alpha*255<<24);for(let p=u;p<c;p+=2)t[s]=a[p],t[s+1]=a[p+1],t[s+2]=l[p],t[s+3]=l[p+1],n[s+4]=d,n[s+5]=i<<16,s+=6}}get vertSize(){return this.vertexSize}copyTo(t){t.indexOffset=this.indexOffset,t.indexSize=this.indexSize,t.vertexOffset=this.vertexOffset,t.vertexSize=this.vertexSize,t.color=this.color,t.alpha=this.alpha,t.texture=this.texture,t.geometryData=this.geometryData}reset(){this.applyTransform=!0}}const or={build(e,t){let n,s,i,r,o,a;if(e.type==="circle"){const w=e;n=w.x,s=w.y,o=a=w.radius,i=r=0}else if(e.type==="ellipse"){const w=e;n=w.x,s=w.y,o=w.halfWidth,a=w.halfHeight,i=r=0}else{const w=e,I=w.width/2,M=w.height/2;n=w.x+I,s=w.y+M,o=a=Math.max(0,Math.min(w.radius,Math.min(I,M))),i=I-o,r=M-a}if(!(o>=0&&a>=0&&i>=0&&r>=0))return t;const l=Math.ceil(2.3*Math.sqrt(o+a)),u=l*8+(i?4:0)+(r?4:0);if(u===0)return t;if(l===0)return t[0]=t[6]=n+i,t[1]=t[3]=s+r,t[2]=t[4]=n-i,t[5]=t[7]=s-r,t;let c=0,h=l*4+(i?2:0)+2,f=h,d=u,p=i+o,g=r,m=n+p,y=n-p,v=s+g;if(t[c++]=m,t[c++]=v,t[--h]=v,t[--h]=y,r){const w=s-g;t[f++]=y,t[f++]=w,t[--d]=w,t[--d]=m}for(let w=1;w<l;w++){const I=Math.PI/2*(w/l),M=i+Math.cos(I)*o,R=r+Math.sin(I)*a,k=n+M,S=n-M,C=s+R,Y=s-R;t[c++]=k,t[c++]=C,t[--h]=C,t[--h]=S,t[f++]=S,t[f++]=Y,t[--d]=Y,t[--d]=k}p=i,g=r+a,m=n+p,y=n-p,v=s+g;const x=s-g;return t[c++]=m,t[c++]=v,t[--d]=x,t[--d]=m,i&&(t[c++]=y,t[c++]=v,t[--d]=x,t[--d]=y),t},triangulate(e,t,n,s,i,r){if(e.length===0)return;let o=0,a=0;for(let c=0;c<e.length;c+=2)o+=e[c],a+=e[c+1];o/=e.length/2,a/=e.length/2;let l=s;t[l*n]=o,t[l*n+1]=a;const u=l++;for(let c=0;c<e.length;c+=2)t[l*n]=e[c],t[l*n+1]=e[c+1],c>0&&(i[r++]=l,i[r++]=u,i[r++]=l-1),l++;i[r++]=u+1,i[r++]=u,i[r++]=l-1}},Zm=1e-4,ll=1e-4;function Qm(e){const t=e.length;if(t<6)return 1;let n=0;for(let s=0,i=e[t-2],r=e[t-1];s<t;s+=2){const o=e[s],a=e[s+1];n+=(o-i)*(a+r),i=o,r=a}return n<0?-1:1}function cl(e,t,n,s,i,r,o,a){const l=e-n*i,u=t-s*i,c=e+n*r,h=t+s*r;let f,d;o?(f=s,d=-n):(f=-s,d=n);const p=l+f,g=u+d,m=c+f,y=h+d;return a.push(p,g),a.push(m,y),2}function Je(e,t,n,s,i,r,o,a){const l=n-e,u=s-t;let c=Math.atan2(l,u),h=Math.atan2(i-e,r-t);a&&c<h?c+=Math.PI*2:!a&&c>h&&(h+=Math.PI*2);let f=c;const d=h-c,p=Math.abs(d),g=Math.sqrt(l*l+u*u),m=(15*p*Math.sqrt(g)/Math.PI>>0)+1,y=d/m;if(f+=y,a){o.push(e,t),o.push(n,s);for(let v=1,x=f;v<m;v++,x+=y)o.push(e,t),o.push(e+Math.sin(x)*g,t+Math.cos(x)*g);o.push(e,t),o.push(i,r)}else{o.push(n,s),o.push(e,t);for(let v=1,x=f;v<m;v++,x+=y)o.push(e+Math.sin(x)*g,t+Math.cos(x)*g),o.push(e,t);o.push(i,r),o.push(e,t)}return m*2}function Jm(e,t,n,s,i,r,o,a,l){const u=Zm;if(e.length===0)return;const c=t;let h=c.alignment;if(t.alignment!==.5){let tt=Qm(e);h=(h-.5)*tt+.5}const f=new _t(e[0],e[1]),d=new _t(e[e.length-2],e[e.length-1]),p=s,g=Math.abs(f.x-d.x)<u&&Math.abs(f.y-d.y)<u;if(p){e=e.slice(),g&&(e.pop(),e.pop(),d.set(e[e.length-2],e[e.length-1]));const tt=(f.x+d.x)*.5,kt=(d.y+f.y)*.5;e.unshift(tt,kt),e.push(tt,kt)}const m=i,y=e.length/2;let v=e.length;const x=m.length/2,w=c.width/2,I=w*w,M=c.miterLimit*c.miterLimit;let R=e[0],k=e[1],S=e[2],C=e[3],Y=0,j=0,O=-(k-C),U=R-S,st=0,Q=0,Z=Math.sqrt(O*O+U*U);O/=Z,U/=Z,O*=w,U*=w;const nt=h,D=(1-nt)*2,V=nt*2;p||(c.cap==="round"?v+=Je(R-O*(D-V)*.5,k-U*(D-V)*.5,R-O*D,k-U*D,R+O*V,k+U*V,m,!0)+2:c.cap==="square"&&(v+=cl(R,k,O,U,D,V,!0,m))),m.push(R-O*D,k-U*D),m.push(R+O*V,k+U*V);for(let tt=1;tt<y-1;++tt){R=e[(tt-1)*2],k=e[(tt-1)*2+1],S=e[tt*2],C=e[tt*2+1],Y=e[(tt+1)*2],j=e[(tt+1)*2+1],O=-(k-C),U=R-S,Z=Math.sqrt(O*O+U*U),O/=Z,U/=Z,O*=w,U*=w,st=-(C-j),Q=S-Y,Z=Math.sqrt(st*st+Q*Q),st/=Z,Q/=Z,st*=w,Q*=w;const kt=S-R,ue=k-C,Jt=S-Y,Et=j-C,Xe=kt*Jt+ue*Et,Te=ue*Jt-Et*kt,ke=Te<0;if(Math.abs(Te)<.001*Math.abs(Xe)){m.push(S-O*D,C-U*D),m.push(S+O*V,C+U*V),Xe>=0&&(c.join==="round"?v+=Je(S,C,S-O*D,C-U*D,S-st*D,C-Q*D,m,!1)+4:v+=2,m.push(S-st*V,C-Q*V),m.push(S+st*D,C+Q*D));continue}const Ee=(-O+R)*(-U+C)-(-O+S)*(-U+k),Bn=(-st+Y)*(-Q+C)-(-st+S)*(-Q+j),Ye=(kt*Bn-Jt*Ee)/Te,_=(Et*Ee-ue*Bn)/Te,b=(Ye-S)*(Ye-S)+(_-C)*(_-C),A=S+(Ye-S)*D,P=C+(_-C)*D,T=S-(Ye-S)*V,F=C-(_-C)*V,L=Math.min(kt*kt+ue*ue,Jt*Jt+Et*Et),B=ke?D:V,z=L+B*B*I;b<=z?c.join==="bevel"||b/I>M?(ke?(m.push(A,P),m.push(S+O*V,C+U*V),m.push(A,P),m.push(S+st*V,C+Q*V)):(m.push(S-O*D,C-U*D),m.push(T,F),m.push(S-st*D,C-Q*D),m.push(T,F)),v+=2):c.join==="round"?ke?(m.push(A,P),m.push(S+O*V,C+U*V),v+=Je(S,C,S+O*V,C+U*V,S+st*V,C+Q*V,m,!0)+4,m.push(A,P),m.push(S+st*V,C+Q*V)):(m.push(S-O*D,C-U*D),m.push(T,F),v+=Je(S,C,S-O*D,C-U*D,S-st*D,C-Q*D,m,!1)+4,m.push(S-st*D,C-Q*D),m.push(T,F)):(m.push(A,P),m.push(T,F)):(m.push(S-O*D,C-U*D),m.push(S+O*V,C+U*V),c.join==="round"?ke?v+=Je(S,C,S+O*V,C+U*V,S+st*V,C+Q*V,m,!0)+2:v+=Je(S,C,S-O*D,C-U*D,S-st*D,C-Q*D,m,!1)+2:c.join==="miter"&&b/I<=M&&(ke?(m.push(T,F),m.push(T,F)):(m.push(A,P),m.push(A,P)),v+=2),m.push(S-st*D,C-Q*D),m.push(S+st*V,C+Q*V),v+=2)}R=e[(y-2)*2],k=e[(y-2)*2+1],S=e[(y-1)*2],C=e[(y-1)*2+1],O=-(k-C),U=R-S,Z=Math.sqrt(O*O+U*U),O/=Z,U/=Z,O*=w,U*=w,m.push(S-O*D,C-U*D),m.push(S+O*V,C+U*V),p||(c.cap==="round"?v+=Je(S-O*(D-V)*.5,C-U*(D-V)*.5,S-O*D,C-U*D,S+O*V,C+U*V,m,!1)+2:c.cap==="square"&&(v+=cl(S,C,O,U,D,V,!1,m)));const Wt=ll*ll;for(let tt=x;tt<v+x-2;++tt)R=m[tt*2],k=m[tt*2+1],S=m[(tt+1)*2],C=m[(tt+1)*2+1],Y=m[(tt+2)*2],j=m[(tt+2)*2+1],!(Math.abs(R*(C-j)+S*(j-k)+Y*(k-C))<Wt)&&a.push(tt,tt+1,tt+2)}function Gu(e,t,n,s,i,r,o){const a=Am(e,t,2);if(!a)return;for(let u=0;u<a.length;u+=3)r[o++]=a[u]+i,r[o++]=a[u+1]+i,r[o++]=a[u+2]+i;let l=i*s;for(let u=0;u<e.length;u+=2)n[l]=e[u],n[l+1]=e[u+1],l+=s}const tg=[],eg={build(e,t){for(let n=0;n<e.points.length;n++)t[n]=e.points[n];return t},triangulate(e,t,n,s,i,r){Gu(e,tg,t,n,s,i,r)}},ng={build(e,t){const n=e,s=n.x,i=n.y,r=n.width,o=n.height;return r>=0&&o>=0&&(t[0]=s,t[1]=i,t[2]=s+r,t[3]=i,t[4]=s+r,t[5]=i+o,t[6]=s,t[7]=i+o),t},triangulate(e,t,n,s,i,r){let o=0;s*=n,t[s+o]=e[0],t[s+o+1]=e[1],o+=n,t[s+o]=e[2],t[s+o+1]=e[3],o+=n,t[s+o]=e[6],t[s+o+1]=e[7],o+=n,t[s+o]=e[4],t[s+o+1]=e[5],o+=n;const a=s/n;i[r++]=a,i[r++]=a+1,i[r++]=a+2,i[r++]=a+1,i[r++]=a+3,i[r++]=a+2}},sg={build(e,t){return t[0]=e.x,t[1]=e.y,t[2]=e.x2,t[3]=e.y2,t[4]=e.x3,t[5]=e.y3,t},triangulate(e,t,n,s,i,r){let o=0;s*=n,t[s+o]=e[0],t[s+o+1]=e[1],o+=n,t[s+o]=e[2],t[s+o+1]=e[3],o+=n,t[s+o]=e[4],t[s+o+1]=e[5];const a=s/n;i[r++]=a,i[r++]=a+1,i[r++]=a+2}},ko={rectangle:ng,polygon:eg,triangle:sg,circle:or,ellipse:or,roundedRectangle:or},ig=new wt;function rg(e,t){const{geometryData:n,batches:s}=t;s.length=0,n.indices.length=0,n.vertices.length=0,n.uvs.length=0;for(let i=0;i<e.instructions.length;i++){const r=e.instructions[i];if(r.action==="texture")og(r.data,s,n);else if(r.action==="fill"||r.action==="stroke"){const o=r.action==="stroke",a=r.data.path.shapePath,l=r.data.style,u=r.data.hole;o&&u&&ul(u.shapePath,l,null,!0,s,n),ul(a,l,u,o,s,n)}}}function og(e,t,n){const{vertices:s,uvs:i,indices:r}=n,o=r.length,a=s.length/2,l=[],u=ko.rectangle,c=ig,h=e.image;c.x=e.dx,c.y=e.dy,c.width=e.dw,c.height=e.dh;const f=e.transform;u.build(c,l),f&&Uu(l,f),u.triangulate(l,s,2,a,r,o);const d=h.uvs;i.push(d.x0,d.y0,d.x1,d.y1,d.x3,d.y3,d.x2,d.y2);const p=we.get(Du);p.indexOffset=o,p.indexSize=r.length-o,p.vertexOffset=a,p.vertexSize=s.length/2-a,p.color=e.style,p.alpha=e.alpha,p.texture=h,p.geometryData=n,t.push(p)}function ul(e,t,n,s,i,r){const{vertices:o,uvs:a,indices:l}=r,u=e.shapePrimitives.length-1;e.shapePrimitives.forEach(({shape:c,transform:h},f)=>{const d=l.length,p=o.length/2,g=[],m=ko[c.type];if(m.build(c,g),h&&Uu(g,h),s){const w=c.closePath??!0;Jm(g,t,!1,w,o,2,p,l)}else if(n&&u===f){u!==0&&console.warn("[Pixi Graphics] only the last shape have be cut out");const w=[],I=g.slice();ag(n.shapePath).forEach(R=>{w.push(I.length/2),I.push(...R)}),Gu(I,w,o,2,p,l,d)}else m.triangulate(g,o,2,p,l,d);const y=a.length/2,v=t.texture;if(v!==rt.WHITE){const w=t.matrix;h&&w&&w.append(h.clone().invert()),Ym(o,2,p,a,y,2,o.length/2-p,w)}else qm(a,y,2,o.length/2-p);const x=we.get(Du);x.indexOffset=d,x.indexSize=l.length-d,x.vertexOffset=p,x.vertexSize=o.length/2-p,x.color=t.color,x.alpha=t.alpha,x.texture=v,x.geometryData=r,i.push(x)})}function ag(e){if(!e)return[];const t=e.shapePrimitives,n=[];for(let s=0;s<t.length;s++){const i=t[s].shape,r=[];ko[i.type].build(i,r),n.push(r)}return n}class lg{constructor(){this.batches=[],this.geometryData={vertices:[],uvs:[],indices:[]}}}class cg{constructor(){this.geometry=new Gm,this.instructions=new nu}init(){this.instructions.reset()}}const Eo=class Xr{constructor(){this._activeBatchers=[],this._gpuContextHash={},this._graphicsDataContextHash=Object.create(null)}init(t){Xr.defaultOptions.bezierSmoothness=(t==null?void 0:t.bezierSmoothness)??Xr.defaultOptions.bezierSmoothness}prerender(){this._returnActiveBatchers()}getContextRenderData(t){return this._graphicsDataContextHash[t.uid]||this._initContextRenderData(t)}updateGpuContext(t){let n=this._gpuContextHash[t.uid]||this._initContext(t);if(t.dirty){n?this._cleanGraphicsContextData(t):n=this._initContext(t),rg(t,n);const s=t.batchMode;t.customShader||s==="no-batch"?n.isBatchable=!1:s==="auto"&&(n.isBatchable=n.geometryData.vertices.length<400),t.dirty=!1}return n}getGpuContext(t){return this._gpuContextHash[t.uid]||this._initContext(t)}_returnActiveBatchers(){for(let t=0;t<this._activeBatchers.length;t++)we.return(this._activeBatchers[t]);this._activeBatchers.length=0}_initContextRenderData(t){const n=we.get(cg),{batches:s,geometryData:i}=this._gpuContextHash[t.uid],r=i.vertices.length,o=i.indices.length;for(let c=0;c<s.length;c++)s[c].applyTransform=!1;const a=we.get(Xm);this._activeBatchers.push(a),a.ensureAttributeBuffer(r),a.ensureIndexBuffer(o),a.begin();for(let c=0;c<s.length;c++){const h=s[c];a.add(h)}a.finish(n.instructions);const l=n.geometry;l.indexBuffer.setDataWithSize(a.indexBuffer,a.indexSize,!0),l.buffers[0].setDataWithSize(a.attributeBuffer.float32View,a.attributeSize,!0);const u=a.batches;for(let c=0;c<u.length;c++){const h=u[c];h.bindGroup=$m(h.textures.textures,h.textures.count)}return this._graphicsDataContextHash[t.uid]=n,n}_initContext(t){const n=new lg;return n.context=t,this._gpuContextHash[t.uid]=n,t.on("destroy",this.onGraphicsContextDestroy,this),this._gpuContextHash[t.uid]}onGraphicsContextDestroy(t){this._cleanGraphicsContextData(t),t.off("destroy",this.onGraphicsContextDestroy,this),this._gpuContextHash[t.uid]=null}_cleanGraphicsContextData(t){const n=this._gpuContextHash[t.uid];n.isBatchable||this._graphicsDataContextHash[t.uid]&&(we.return(this.getContextRenderData(t)),this._graphicsDataContextHash[t.uid]=null),n.batches&&n.batches.forEach(s=>{we.return(s)})}destroy(){for(const t in this._gpuContextHash)this._gpuContextHash[t]&&this.onGraphicsContextDestroy(this._gpuContextHash[t].context)}};Eo.extension={type:[q.WebGLSystem,q.WebGPUSystem,q.CanvasSystem],name:"graphicsContext"};Eo.defaultOptions={bezierSmoothness:.5};let $u=Eo;const ug=8,js=11920929e-14,hg=1;function Hu(e,t,n,s,i,r,o,a,l,u){const h=Math.min(.99,Math.max(0,u??$u.defaultOptions.bezierSmoothness));let f=(hg-h)/1;return f*=f,fg(t,n,s,i,r,o,a,l,e,f),e}function fg(e,t,n,s,i,r,o,a,l,u){Yr(e,t,n,s,i,r,o,a,l,u,0),l.push(o,a)}function Yr(e,t,n,s,i,r,o,a,l,u,c){if(c>ug)return;const h=(e+n)/2,f=(t+s)/2,d=(n+i)/2,p=(s+r)/2,g=(i+o)/2,m=(r+a)/2,y=(h+d)/2,v=(f+p)/2,x=(d+g)/2,w=(p+m)/2,I=(y+x)/2,M=(v+w)/2;if(c>0){let R=o-e,k=a-t;const S=Math.abs((n-o)*k-(s-a)*R),C=Math.abs((i-o)*k-(r-a)*R);if(S>js&&C>js){if((S+C)*(S+C)<=u*(R*R+k*k)){l.push(I,M);return}}else if(S>js){if(S*S<=u*(R*R+k*k)){l.push(I,M);return}}else if(C>js){if(C*C<=u*(R*R+k*k)){l.push(I,M);return}}else if(R=I-(e+o)/2,k=M-(t+a)/2,R*R+k*k<=u){l.push(I,M);return}}Yr(e,t,h,f,y,v,I,M,l,u,c+1),Yr(I,M,x,w,g,m,o,a,l,u,c+1)}const dg=8,pg=11920929e-14,mg=1;function gg(e,t,n,s,i,r,o,a){const u=Math.min(.99,Math.max(0,a??$u.defaultOptions.bezierSmoothness));let c=(mg-u)/1;return c*=c,xg(t,n,s,i,r,o,e,c),e}function xg(e,t,n,s,i,r,o,a){qr(o,e,t,n,s,i,r,a,0),o.push(i,r)}function qr(e,t,n,s,i,r,o,a,l){if(l>dg)return;const u=(t+s)/2,c=(n+i)/2,h=(s+r)/2,f=(i+o)/2,d=(u+h)/2,p=(c+f)/2;let g=r-t,m=o-n;const y=Math.abs((s-r)*m-(i-o)*g);if(y>pg){if(y*y<=a*(g*g+m*m)){e.push(d,p);return}}else if(g=d-(t+r)/2,m=p-(n+o)/2,g*g+m*m<=a){e.push(d,p);return}qr(e,t,n,u,c,d,p,a,l+1),qr(e,d,p,h,f,r,o,a,l+1)}function Wu(e,t,n,s,i,r,o,a){let l=Math.abs(i-r);(!o&&i>r||o&&r>i)&&(l=2*Math.PI-l),a=a||Math.max(6,Math.floor(6*Math.pow(s,1/3)*(l/Math.PI))),a=Math.max(a,3);let u=l/a,c=i;u*=o?-1:1;for(let h=0;h<a+1;h++){const f=Math.cos(c),d=Math.sin(c),p=t+f*s,g=n+d*s;e.push(p,g),c+=u}}function vg(e,t,n,s,i,r){const o=e[e.length-2],l=e[e.length-1]-n,u=o-t,c=i-n,h=s-t,f=Math.abs(l*h-u*c);if(f<1e-8||r===0){(e[e.length-2]!==t||e[e.length-1]!==n)&&e.push(t,n);return}const d=l*l+u*u,p=c*c+h*h,g=l*c+u*h,m=r*Math.sqrt(d)/f,y=r*Math.sqrt(p)/f,v=m*g/d,x=y*g/p,w=m*h+y*u,I=m*c+y*l,M=u*(y+v),R=l*(y+v),k=h*(m+x),S=c*(m+x),C=Math.atan2(R-I,M-w),Y=Math.atan2(S-I,k-w);Wu(e,w+t,I+n,r,C,Y,u*c>h*l)}const ts=Math.PI*2,ar={centerX:0,centerY:0,ang1:0,ang2:0},lr=({x:e,y:t},n,s,i,r,o,a,l)=>{e*=n,t*=s;const u=i*e-r*t,c=r*e+i*t;return l.x=u+o,l.y=c+a,l};function _g(e,t){const n=t===-1.5707963267948966?-.551915024494:1.3333333333333333*Math.tan(t/4),s=t===1.5707963267948966?.551915024494:n,i=Math.cos(e),r=Math.sin(e),o=Math.cos(e+t),a=Math.sin(e+t);return[{x:i-r*s,y:r+i*s},{x:o+a*s,y:a-o*s},{x:o,y:a}]}const hl=(e,t,n,s)=>{const i=e*s-t*n<0?-1:1;let r=e*n+t*s;return r>1&&(r=1),r<-1&&(r=-1),i*Math.acos(r)},yg=(e,t,n,s,i,r,o,a,l,u,c,h,f)=>{const d=Math.pow(i,2),p=Math.pow(r,2),g=Math.pow(c,2),m=Math.pow(h,2);let y=d*p-d*m-p*g;y<0&&(y=0),y/=d*m+p*g,y=Math.sqrt(y)*(o===a?-1:1);const v=y*i/r*h,x=y*-r/i*c,w=u*v-l*x+(e+n)/2,I=l*v+u*x+(t+s)/2,M=(c-v)/i,R=(h-x)/r,k=(-c-v)/i,S=(-h-x)/r,C=hl(1,0,M,R);let Y=hl(M,R,k,S);a===0&&Y>0&&(Y-=ts),a===1&&Y<0&&(Y+=ts),f.centerX=w,f.centerY=I,f.ang1=C,f.ang2=Y};function bg(e,t,n,s,i,r,o,a=0,l=0,u=0){if(r===0||o===0)return;const c=Math.sin(a*ts/360),h=Math.cos(a*ts/360),f=h*(t-s)/2+c*(n-i)/2,d=-c*(t-s)/2+h*(n-i)/2;if(f===0&&d===0)return;r=Math.abs(r),o=Math.abs(o);const p=Math.pow(f,2)/Math.pow(r,2)+Math.pow(d,2)/Math.pow(o,2);p>1&&(r*=Math.sqrt(p),o*=Math.sqrt(p)),yg(t,n,s,i,r,o,l,u,c,h,f,d,ar);let{ang1:g,ang2:m}=ar;const{centerX:y,centerY:v}=ar;let x=Math.abs(m)/(ts/4);Math.abs(1-x)<1e-7&&(x=1);const w=Math.max(Math.ceil(x),1);m/=w;let I=e[e.length-2],M=e[e.length-1];const R={x:0,y:0};for(let k=0;k<w;k++){const S=_g(g,m),{x:C,y:Y}=lr(S[0],r,o,h,c,y,v,R),{x:j,y:O}=lr(S[1],r,o,h,c,y,v,R),{x:U,y:st}=lr(S[2],r,o,h,c,y,v,R);Hu(e,I,M,C,Y,j,O,U,st),I=U,M=st,g+=m}}function wg(e,t,n){const s=(o,a)=>{const l=a.x-o.x,u=a.y-o.y,c=Math.sqrt(l*l+u*u),h=l/c,f=u/c;return{len:c,nx:h,ny:f}},i=(o,a)=>{o===0?e.moveTo(a.x,a.y):e.lineTo(a.x,a.y)};let r=t[t.length-1];for(let o=0;o<t.length;o++){const a=t[o%t.length],l=a.radius??n;if(l<=0){i(o,a),r=a;continue}const u=t[(o+1)%t.length],c=s(a,r),h=s(a,u);if(c.len<1e-4||h.len<1e-4){i(o,a),r=a;continue}let f=Math.asin(c.nx*h.ny-c.ny*h.nx),d=1,p=!1;c.nx*h.nx-c.ny*-h.ny<0?f<0?f=Math.PI+f:(f=Math.PI-f,d=-1,p=!0):f>0&&(d=-1,p=!0);const g=f/2;let m,y=Math.abs(Math.cos(g)*l/Math.sin(g));y>Math.min(c.len/2,h.len/2)?(y=Math.min(c.len/2,h.len/2),m=Math.abs(y*Math.sin(g)/Math.cos(g))):m=l;const v=a.x+h.nx*y+-h.ny*m*d,x=a.y+h.ny*y+h.nx*m*d,w=Math.atan2(c.ny,c.nx)+Math.PI/2*d,I=Math.atan2(h.ny,h.nx)-Math.PI/2*d;o===0&&e.moveTo(v+Math.cos(w)*m,x+Math.sin(w)*m),e.arc(v,x,m,w,I,p),r=a}}function Ag(e,t,n,s){const i=(a,l)=>Math.sqrt((a.x-l.x)**2+(a.y-l.y)**2),r=(a,l,u)=>({x:a.x+(l.x-a.x)*u,y:a.y+(l.y-a.y)*u}),o=t.length;for(let a=0;a<o;a++){const l=t[(a+1)%o],u=l.radius??n;if(u<=0){a===0?e.moveTo(l.x,l.y):e.lineTo(l.x,l.y);continue}const c=t[a],h=t[(a+2)%o],f=i(c,l);let d;if(f<1e-4)d=l;else{const m=Math.min(f/2,u);d=r(l,c,m/f)}const p=i(h,l);let g;if(p<1e-4)g=l;else{const m=Math.min(p/2,u);g=r(l,h,m/p)}a===0?e.moveTo(d.x,d.y):e.lineTo(d.x,d.y),e.quadraticCurveTo(l.x,l.y,g.x,g.y,s)}}const Cg=new wt;class Sg{constructor(t){this.shapePrimitives=[],this._currentPoly=null,this._bounds=new Me,this._graphicsPath2D=t}moveTo(t,n){return this.startPoly(t,n),this}lineTo(t,n){this._ensurePoly();const s=this._currentPoly.points,i=s[s.length-2],r=s[s.length-1];return(i!==t||r!==n)&&s.push(t,n),this}arc(t,n,s,i,r,o){this._ensurePoly(!1);const a=this._currentPoly.points;return Wu(a,t,n,s,i,r,o),this}arcTo(t,n,s,i,r){this._ensurePoly();const o=this._currentPoly.points;return vg(o,t,n,s,i,r),this}arcToSvg(t,n,s,i,r,o,a){const l=this._currentPoly.points;return bg(l,this._currentPoly.lastX,this._currentPoly.lastY,o,a,t,n,s,i,r),this}bezierCurveTo(t,n,s,i,r,o,a){this._ensurePoly();const l=this._currentPoly;return Hu(this._currentPoly.points,l.lastX,l.lastY,t,n,s,i,r,o,a),this}quadraticCurveTo(t,n,s,i,r){this._ensurePoly();const o=this._currentPoly;return gg(this._currentPoly.points,o.lastX,o.lastY,t,n,s,i,r),this}closePath(){return this.endPoly(!0),this}addPath(t,n){this.endPoly(),n&&!n.isIdentity()&&(t=t.clone(!0),t.transform(n));for(let s=0;s<t.instructions.length;s++){const i=t.instructions[s];this[i.action](...i.data)}return this}finish(t=!1){this.endPoly(t)}rect(t,n,s,i,r){return this.drawShape(new wt(t,n,s,i),r),this}circle(t,n,s,i){return this.drawShape(new Mo(t,n,s),i),this}poly(t,n,s){const i=new Jn(t);return i.closePath=n,this.drawShape(i,s),this}regularPoly(t,n,s,i,r=0,o){i=Math.max(i|0,3);const a=-1*Math.PI/2+r,l=Math.PI*2/i,u=[];for(let c=0;c<i;c++){const h=c*l+a;u.push(t+s*Math.cos(h),n+s*Math.sin(h))}return this.poly(u,!0,o),this}roundPoly(t,n,s,i,r,o=0,a){if(i=Math.max(i|0,3),r<=0)return this.regularPoly(t,n,s,i,o);const l=s*Math.sin(Math.PI/i)-.001;r=Math.min(r,l);const u=-1*Math.PI/2+o,c=Math.PI*2/i,h=(i-2)*Math.PI/i/2;for(let f=0;f<i;f++){const d=f*c+u,p=t+s*Math.cos(d),g=n+s*Math.sin(d),m=d+Math.PI+h,y=d-Math.PI-h,v=p+r*Math.cos(m),x=g+r*Math.sin(m),w=p+r*Math.cos(y),I=g+r*Math.sin(y);f===0?this.moveTo(v,x):this.lineTo(v,x),this.quadraticCurveTo(p,g,w,I,a)}return this.closePath()}roundShape(t,n,s=!1,i){return t.length<3?this:(s?Ag(this,t,n,i):wg(this,t,n),this.closePath())}filletRect(t,n,s,i,r){if(r===0)return this.rect(t,n,s,i);const o=Math.min(s,i)/2,a=Math.min(o,Math.max(-o,r)),l=t+s,u=n+i,c=a<0?-a:0,h=Math.abs(a);return this.moveTo(t,n+h).arcTo(t+c,n+c,t+h,n,h).lineTo(l-h,n).arcTo(l-c,n+c,l,n+h,h).lineTo(l,u-h).arcTo(l-c,u-c,t+s-h,u,h).lineTo(t+h,u).arcTo(t+c,u-c,t,u-h,h).closePath()}chamferRect(t,n,s,i,r,o){if(r<=0)return this.rect(t,n,s,i);const a=Math.min(r,Math.min(s,i)/2),l=t+s,u=n+i,c=[t+a,n,l-a,n,l,n+a,l,u-a,l-a,u,t+a,u,t,u-a,t,n+a];for(let h=c.length-1;h>=2;h-=2)c[h]===c[h-2]&&c[h-1]===c[h-3]&&c.splice(h-1,2);return this.poly(c,!0,o)}ellipse(t,n,s,i,r){return this.drawShape(new Po(t,n,s,i),r),this}roundRect(t,n,s,i,r,o){return this.drawShape(new To(t,n,s,i,r),o),this}drawShape(t,n){return this.endPoly(),this.shapePrimitives.push({shape:t,transform:n}),this}startPoly(t,n){let s=this._currentPoly;return s&&this.endPoly(),s=new Jn,s.points.push(t,n),this._currentPoly=s,this}endPoly(t=!1){const n=this._currentPoly;return n&&n.points.length>2&&(n.closePath=t,this.shapePrimitives.push({shape:n})),this._currentPoly=null,this}_ensurePoly(t=!0){if(!this._currentPoly&&(this._currentPoly=new Jn,t)){const n=this.shapePrimitives[this.shapePrimitives.length-1];if(n){let s=n.shape.x,i=n.shape.y;if(!n.transform.isIdentity()){const r=n.transform,o=s;s=r.a*s+r.c*i+r.tx,i=r.b*o+r.d*i+r.ty}this._currentPoly.points.push(s,i)}else this._currentPoly.points.push(0,0)}}buildPath(){const t=this._graphicsPath2D;this.shapePrimitives.length=0,this._currentPoly=null;for(let n=0;n<t.instructions.length;n++){const s=t.instructions[n];this[s.action](...s.data)}this.finish()}get bounds(){const t=this._bounds;t.clear();const n=this.shapePrimitives;for(let s=0;s<n.length;s++){const i=n[s],r=i.shape.getBounds(Cg);i.transform?t.addRect(r,i.transform):t.addRect(r)}return t}}class Pn{constructor(t){this.instructions=[],this.uid=At("graphicsPath"),this._dirty=!0,typeof t=="string"?zm(t,this):this.instructions=(t==null?void 0:t.slice())??[]}get shapePath(){return this._shapePath||(this._shapePath=new Sg(this)),this._dirty&&(this._dirty=!1,this._shapePath.buildPath()),this._shapePath}addPath(t,n){return t=t.clone(),this.instructions.push({action:"addPath",data:[t,n]}),this._dirty=!0,this}arc(...t){return this.instructions.push({action:"arc",data:t}),this._dirty=!0,this}arcTo(...t){return this.instructions.push({action:"arcTo",data:t}),this._dirty=!0,this}arcToSvg(...t){return this.instructions.push({action:"arcToSvg",data:t}),this._dirty=!0,this}bezierCurveTo(...t){return this.instructions.push({action:"bezierCurveTo",data:t}),this._dirty=!0,this}bezierCurveToShort(t,n,s,i,r){const o=this.instructions[this.instructions.length-1],a=this.getLastPoint(_t.shared);let l=0,u=0;if(!o||o.action!=="bezierCurveTo")l=a.x,u=a.y;else{l=o.data[2],u=o.data[3];const c=a.x,h=a.y;l=c+(c-l),u=h+(h-u)}return this.instructions.push({action:"bezierCurveTo",data:[l,u,t,n,s,i,r]}),this._dirty=!0,this}closePath(){return this.instructions.push({action:"closePath",data:[]}),this._dirty=!0,this}ellipse(...t){return this.instructions.push({action:"ellipse",data:t}),this._dirty=!0,this}lineTo(...t){return this.instructions.push({action:"lineTo",data:t}),this._dirty=!0,this}moveTo(...t){return this.instructions.push({action:"moveTo",data:t}),this}quadraticCurveTo(...t){return this.instructions.push({action:"quadraticCurveTo",data:t}),this._dirty=!0,this}quadraticCurveToShort(t,n,s){const i=this.instructions[this.instructions.length-1],r=this.getLastPoint(_t.shared);let o=0,a=0;if(!i||i.action!=="quadraticCurveTo")o=r.x,a=r.y;else{o=i.data[0],a=i.data[1];const l=r.x,u=r.y;o=l+(l-o),a=u+(u-a)}return this.instructions.push({action:"quadraticCurveTo",data:[o,a,t,n,s]}),this._dirty=!0,this}rect(t,n,s,i,r){return this.instructions.push({action:"rect",data:[t,n,s,i,r]}),this._dirty=!0,this}circle(t,n,s,i){return this.instructions.push({action:"circle",data:[t,n,s,i]}),this._dirty=!0,this}roundRect(...t){return this.instructions.push({action:"roundRect",data:t}),this._dirty=!0,this}poly(...t){return this.instructions.push({action:"poly",data:t}),this._dirty=!0,this}regularPoly(...t){return this.instructions.push({action:"regularPoly",data:t}),this._dirty=!0,this}roundPoly(...t){return this.instructions.push({action:"roundPoly",data:t}),this._dirty=!0,this}roundShape(...t){return this.instructions.push({action:"roundShape",data:t}),this._dirty=!0,this}filletRect(...t){return this.instructions.push({action:"filletRect",data:t}),this._dirty=!0,this}chamferRect(...t){return this.instructions.push({action:"chamferRect",data:t}),this._dirty=!0,this}star(t,n,s,i,r,o,a){r=r||i/2;const l=-1*Math.PI/2+o,u=s*2,c=Math.PI*2/u,h=[];for(let f=0;f<u;f++){const d=f%2?r:i,p=f*c+l;h.push(t+d*Math.cos(p),n+d*Math.sin(p))}return this.poly(h,!0,a),this}clone(t=!1){const n=new Pn;if(!t)n.instructions=this.instructions.slice();else for(let s=0;s<this.instructions.length;s++){const i=this.instructions[s];n.instructions.push({action:i.action,data:i.data.slice()})}return n}clear(){return this.instructions.length=0,this._dirty=!0,this}transform(t){if(t.isIdentity())return this;const n=t.a,s=t.b,i=t.c,r=t.d,o=t.tx,a=t.ty;let l=0,u=0,c=0,h=0,f=0,d=0,p=0,g=0;for(let m=0;m<this.instructions.length;m++){const y=this.instructions[m],v=y.data;switch(y.action){case"moveTo":case"lineTo":l=v[0],u=v[1],v[0]=n*l+i*u+o,v[1]=s*l+r*u+a;break;case"bezierCurveTo":c=v[0],h=v[1],f=v[2],d=v[3],l=v[4],u=v[5],v[0]=n*c+i*h+o,v[1]=s*c+r*h+a,v[2]=n*f+i*d+o,v[3]=s*f+r*d+a,v[4]=n*l+i*u+o,v[5]=s*l+r*u+a;break;case"quadraticCurveTo":c=v[0],h=v[1],l=v[2],u=v[3],v[0]=n*c+i*h+o,v[1]=s*c+r*h+a,v[2]=n*l+i*u+o,v[3]=s*l+r*u+a;break;case"arcToSvg":l=v[5],u=v[6],p=v[0],g=v[1],v[0]=n*p+i*g,v[1]=s*p+r*g,v[5]=n*l+i*u+o,v[6]=s*l+r*u+a;break;case"circle":v[4]=Nn(v[3],t);break;case"rect":v[4]=Nn(v[4],t);break;case"ellipse":v[8]=Nn(v[8],t);break;case"roundRect":v[5]=Nn(v[5],t);break;case"addPath":v[0].transform(t);break;case"poly":v[2]=Nn(v[2],t);break;default:Tt("unknown transform action",y.action);break}}return this._dirty=!0,this}get bounds(){return this.shapePath.bounds}getLastPoint(t){let n=this.instructions.length-1,s=this.instructions[n];if(!s)return t.x=0,t.y=0,t;for(;s.action==="closePath";){if(n--,n<0)return t.x=0,t.y=0,t;s=this.instructions[n]}switch(s.action){case"moveTo":case"lineTo":t.x=s.data[0],t.y=s.data[1];break;case"quadraticCurveTo":t.x=s.data[2],t.y=s.data[3];break;case"bezierCurveTo":t.x=s.data[4],t.y=s.data[5];break;case"arc":case"arcToSvg":t.x=s.data[5],t.y=s.data[6];break;case"addPath":s.data[0].getLastPoint(t);break}return t}}function Nn(e,t){return e?e.prepend(t):t.clone()}function Mg(e,t){if(typeof e=="string"){const s=document.createElement("div");s.innerHTML=e.trim(),e=s.querySelector("svg")}const n={context:t,path:new Pn};return Vu(e,n,null,null),t}function Vu(e,t,n,s){const i=e.children,{fillStyle:r,strokeStyle:o}=Pg(e);r&&n?n={...n,...r}:r&&(n=r),o&&s?s={...s,...o}:o&&(s=o),t.context.fillStyle=n,t.context.strokeStyle=s;let a,l,u,c,h,f,d,p,g,m,y,v,x,w,I,M,R;switch(e.nodeName.toLowerCase()){case"path":w=e.getAttribute("d"),I=new Pn(w),t.context.path(I),n&&t.context.fill(),s&&t.context.stroke();break;case"circle":d=Mt(e,"cx",0),p=Mt(e,"cy",0),g=Mt(e,"r",0),t.context.ellipse(d,p,g,g),n&&t.context.fill(),s&&t.context.stroke();break;case"rect":a=Mt(e,"x",0),l=Mt(e,"y",0),M=Mt(e,"width",0),R=Mt(e,"height",0),m=Mt(e,"rx",0),y=Mt(e,"ry",0),m||y?t.context.roundRect(a,l,M,R,m||y):t.context.rect(a,l,M,R),n&&t.context.fill(),s&&t.context.stroke();break;case"ellipse":d=Mt(e,"cx",0),p=Mt(e,"cy",0),m=Mt(e,"rx",0),y=Mt(e,"ry",0),t.context.beginPath(),t.context.ellipse(d,p,m,y),n&&t.context.fill(),s&&t.context.stroke();break;case"line":u=Mt(e,"x1",0),c=Mt(e,"y1",0),h=Mt(e,"x2",0),f=Mt(e,"y2",0),t.context.beginPath(),t.context.moveTo(u,c),t.context.lineTo(h,f),s&&t.context.stroke();break;case"polygon":x=e.getAttribute("points"),v=x.match(/\d+/g).map(k=>parseInt(k,10)),t.context.poly(v,!0),n&&t.context.fill(),s&&t.context.stroke();break;case"polyline":x=e.getAttribute("points"),v=x.match(/\d+/g).map(k=>parseInt(k,10)),t.context.poly(v,!1),s&&t.context.stroke();break;case"g":case"svg":break;default:{console.info(`[SVG parser] <${e.nodeName}> elements unsupported`);break}}for(let k=0;k<i.length;k++)Vu(i[k],t,n,s)}function Mt(e,t,n){const s=e.getAttribute(t);return s?Number(s):n}function Pg(e){const t=e.getAttribute("style"),n={},s={};let i=!1,r=!1;if(t){const o=t.split(";");for(let a=0;a<o.length;a++){const l=o[a],[u,c]=l.split(":");switch(u){case"stroke":c!=="none"&&(n.color=yt.shared.setValue(c).toNumber(),r=!0);break;case"stroke-width":n.width=Number(c);break;case"fill":c!=="none"&&(i=!0,s.color=yt.shared.setValue(c).toNumber());break;case"fill-opacity":s.alpha=Number(c);break;case"stroke-opacity":n.alpha=Number(c);break;case"opacity":s.alpha=Number(c),n.alpha=Number(c);break}}}else{const o=e.getAttribute("stroke");o&&o!=="none"&&(r=!0,n.color=yt.shared.setValue(o).toNumber(),n.width=Mt(e,"stroke-width",1));const a=e.getAttribute("fill");a&&a!=="none"&&(i=!0,s.color=yt.shared.setValue(a).toNumber())}return{strokeStyle:r?n:null,fillStyle:i?s:null}}function Tg(e){return yt.isColorLike(e)}function fl(e){return e instanceof yi}function dl(e){return e instanceof ds}function kg(e,t,n){const s=yt.shared.setValue(t??0);return e.color=s.toNumber(),e.alpha=s.alpha===1?n.alpha:s.alpha,e.texture=rt.WHITE,{...n,...e}}function pl(e,t,n){return e.fill=t,e.color=16777215,e.texture=t.texture,e.matrix=t.transform,{...n,...e}}function ml(e,t,n){return t.buildLinearGradient(),e.fill=t,e.color=16777215,e.texture=t.texture,e.matrix=t.transform,{...n,...e}}function Eg(e,t){var i;const n={...t,...e};if(n.texture){if(n.texture!==rt.WHITE){const o=((i=n.matrix)==null?void 0:i.invert())||new at;o.scale(1/n.texture.frame.width,1/n.texture.frame.height),n.matrix=o}const r=n.texture.source.style;r.addressMode==="clamp-to-edge"&&(r.addressMode="repeat")}const s=yt.shared.setValue(n.color);return n.alpha*=s.alpha,n.color=s.toNumber(),n.matrix=n.matrix?n.matrix.clone():null,n}function an(e,t){if(e==null)return null;const n={},s=e;return Tg(e)?kg(n,e,t):fl(e)?pl(n,e,t):dl(e)?ml(n,e,t):s.fill&&fl(s.fill)?pl(s,s.fill,t):s.fill&&dl(s.fill)?ml(s,s.fill,t):Eg(s,t)}function ti(e,t){const{width:n,alignment:s,miterLimit:i,cap:r,join:o,...a}=t,l=an(e,a);return l?{width:n,alignment:s,miterLimit:i,cap:r,join:o,...l}:null}const Ig=new _t,gl=new at,Io=class pe extends le{constructor(){super(...arguments),this.uid=At("graphicsContext"),this.dirty=!0,this.batchMode="auto",this.instructions=[],this._activePath=new Pn,this._transform=new at,this._fillStyle={...pe.defaultFillStyle},this._strokeStyle={...pe.defaultStrokeStyle},this._stateStack=[],this._tick=0,this._bounds=new Me,this._boundsDirty=!0}clone(){const t=new pe;return t.batchMode=this.batchMode,t.instructions=this.instructions.slice(),t._activePath=this._activePath.clone(),t._transform=this._transform.clone(),t._fillStyle={...this._fillStyle},t._strokeStyle={...this._strokeStyle},t._stateStack=this._stateStack.slice(),t._bounds=this._bounds.clone(),t._boundsDirty=!0,t}get fillStyle(){return this._fillStyle}set fillStyle(t){this._fillStyle=an(t,pe.defaultFillStyle)}get strokeStyle(){return this._strokeStyle}set strokeStyle(t){this._strokeStyle=ti(t,pe.defaultStrokeStyle)}setFillStyle(t){return this._fillStyle=an(t,pe.defaultFillStyle),this}setStrokeStyle(t){return this._strokeStyle=an(t,pe.defaultStrokeStyle),this}texture(t,n,s,i,r,o){return this.instructions.push({action:"texture",data:{image:t,dx:s||0,dy:i||0,dw:r||t.frame.width,dh:o||t.frame.height,transform:this._transform.clone(),alpha:this._fillStyle.alpha,style:n?yt.shared.setValue(n).toNumber():16777215}}),this.onUpdate(),this}beginPath(){return this._activePath=new Pn,this}fill(t,n){let s;const i=this.instructions[this.instructions.length-1];return this._tick===0&&i&&i.action==="stroke"?s=i.data.path:s=this._activePath.clone(),s?(t!=null&&(n!==void 0&&typeof t=="number"&&(ut(ct,"GraphicsContext.fill(color, alpha) is deprecated, use GraphicsContext.fill({ color, alpha }) instead"),t={color:t,alpha:n}),this._fillStyle=an(t,pe.defaultFillStyle)),this.instructions.push({action:"fill",data:{style:this.fillStyle,path:s}}),this.onUpdate(),this._initNextPathLocation(),this._tick=0,this):this}_initNextPathLocation(){const{x:t,y:n}=this._activePath.getLastPoint(_t.shared);this._activePath.clear(),this._activePath.moveTo(t,n)}stroke(t){let n;const s=this.instructions[this.instructions.length-1];return this._tick===0&&s&&s.action==="fill"?n=s.data.path:n=this._activePath.clone(),n?(t!=null&&(this._strokeStyle=ti(t,pe.defaultStrokeStyle)),this.instructions.push({action:"stroke",data:{style:this.strokeStyle,path:n}}),this.onUpdate(),this._initNextPathLocation(),this._tick=0,this):this}cut(){for(let t=0;t<2;t++){const n=this.instructions[this.instructions.length-1-t],s=this._activePath.clone();if(n&&(n.action==="stroke"||n.action==="fill"))if(n.data.hole)n.data.hole.addPath(s);else{n.data.hole=s;break}}return this._initNextPathLocation(),this}arc(t,n,s,i,r,o){this._tick++;const a=this._transform;return this._activePath.arc(a.a*t+a.c*n+a.tx,a.b*t+a.d*n+a.ty,s,i,r,o),this}arcTo(t,n,s,i,r){this._tick++;const o=this._transform;return this._activePath.arcTo(o.a*t+o.c*n+o.tx,o.b*t+o.d*n+o.ty,o.a*s+o.c*i+o.tx,o.b*s+o.d*i+o.ty,r),this}arcToSvg(t,n,s,i,r,o,a){this._tick++;const l=this._transform;return this._activePath.arcToSvg(t,n,s,i,r,l.a*o+l.c*a+l.tx,l.b*o+l.d*a+l.ty),this}bezierCurveTo(t,n,s,i,r,o,a){this._tick++;const l=this._transform;return this._activePath.bezierCurveTo(l.a*t+l.c*n+l.tx,l.b*t+l.d*n+l.ty,l.a*s+l.c*i+l.tx,l.b*s+l.d*i+l.ty,l.a*r+l.c*o+l.tx,l.b*r+l.d*o+l.ty,a),this}closePath(){var t;return this._tick++,(t=this._activePath)==null||t.closePath(),this}ellipse(t,n,s,i){return this._tick++,this._activePath.ellipse(t,n,s,i,this._transform.clone()),this}circle(t,n,s){return this._tick++,this._activePath.circle(t,n,s,this._transform.clone()),this}path(t){return this._tick++,this._activePath.addPath(t,this._transform.clone()),this}lineTo(t,n){this._tick++;const s=this._transform;return this._activePath.lineTo(s.a*t+s.c*n+s.tx,s.b*t+s.d*n+s.ty),this}moveTo(t,n){this._tick++;const s=this._transform,i=this._activePath.instructions,r=s.a*t+s.c*n+s.tx,o=s.b*t+s.d*n+s.ty;return i.length===1&&i[0].action==="moveTo"?(i[0].data[0]=r,i[0].data[1]=o,this):(this._activePath.moveTo(r,o),this)}quadraticCurveTo(t,n,s,i,r){this._tick++;const o=this._transform;return this._activePath.quadraticCurveTo(o.a*t+o.c*n+o.tx,o.b*t+o.d*n+o.ty,o.a*s+o.c*i+o.tx,o.b*s+o.d*i+o.ty,r),this}rect(t,n,s,i){return this._tick++,this._activePath.rect(t,n,s,i,this._transform.clone()),this}roundRect(t,n,s,i,r){return this._tick++,this._activePath.roundRect(t,n,s,i,r,this._transform.clone()),this}poly(t,n){return this._tick++,this._activePath.poly(t,n,this._transform.clone()),this}regularPoly(t,n,s,i,r=0,o){return this._tick++,this._activePath.regularPoly(t,n,s,i,r,o),this}roundPoly(t,n,s,i,r,o){return this._tick++,this._activePath.roundPoly(t,n,s,i,r,o),this}roundShape(t,n,s,i){return this._tick++,this._activePath.roundShape(t,n,s,i),this}filletRect(t,n,s,i,r){return this._tick++,this._activePath.filletRect(t,n,s,i,r),this}chamferRect(t,n,s,i,r,o){return this._tick++,this._activePath.chamferRect(t,n,s,i,r,o),this}star(t,n,s,i,r=0,o=0){return this._tick++,this._activePath.star(t,n,s,i,r,o,this._transform.clone()),this}svg(t){return this._tick++,Mg(t,this),this}restore(){const t=this._stateStack.pop();return t&&(this._transform=t.transform,this._fillStyle=t.fillStyle,this._strokeStyle=t.strokeStyle),this}save(){return this._stateStack.push({transform:this._transform.clone(),fillStyle:{...this._fillStyle},strokeStyle:{...this._strokeStyle}}),this}getTransform(){return this._transform}resetTransform(){return this._transform.identity(),this}rotate(t){return this._transform.rotate(t),this}scale(t,n=t){return this._transform.scale(t,n),this}setTransform(t,n,s,i,r,o){return t instanceof at?(this._transform.set(t.a,t.b,t.c,t.d,t.tx,t.ty),this):(this._transform.set(t,n,s,i,r,o),this)}transform(t,n,s,i,r,o){return t instanceof at?(this._transform.append(t),this):(gl.set(t,n,s,i,r,o),this._transform.append(gl),this)}translate(t,n=t){return this._transform.translate(t,n),this}clear(){return this._activePath.clear(),this.instructions.length=0,this.resetTransform(),this.onUpdate(),this}onUpdate(){this.dirty||(this.emit("update",this,16),this.dirty=!0,this._boundsDirty=!0)}get bounds(){if(!this._boundsDirty)return this._bounds;const t=this._bounds;t.clear();for(let n=0;n<this.instructions.length;n++){const s=this.instructions[n],i=s.action;if(i==="fill"){const r=s.data;t.addBounds(r.path.bounds)}else if(i==="texture"){const r=s.data;t.addFrame(r.dx,r.dy,r.dx+r.dw,r.dy+r.dh,r.transform)}if(i==="stroke"){const r=s.data,o=r.style.width/2,a=r.path.bounds;t.addFrame(a.minX-o,a.minY-o,a.maxX+o,a.maxY+o)}}return t}containsPoint(t){var i;if(!this.bounds.containsPoint(t.x,t.y))return!1;const n=this.instructions;let s=!1;for(let r=0;r<n.length;r++){const o=n[r],a=o.data,l=a.path;if(!o.action||!l)continue;const u=a.style,c=l.shapePath.shapePrimitives;for(let h=0;h<c.length;h++){const f=c[h].shape;if(!u||!f)continue;const d=c[h].transform,p=d?d.applyInverse(t,Ig):t;o.action==="fill"?s=f.contains(p.x,p.y):s=f.strokeContains(p.x,p.y,u.width);const g=a.hole;if(g){const m=(i=g.shapePath)==null?void 0:i.shapePrimitives;if(m)for(let y=0;y<m.length;y++)m[y].shape.contains(p.x,p.y)&&(s=!1)}if(s)return!0}}return s}destroy(t=!1){if(this._stateStack.length=0,this._transform=null,this.emit("destroy",this),this.removeAllListeners(),typeof t=="boolean"?t:t==null?void 0:t.texture){const s=typeof t=="boolean"?t:t==null?void 0:t.textureSource;this._fillStyle.texture&&this._fillStyle.texture.destroy(s),this._strokeStyle.texture&&this._strokeStyle.texture.destroy(s)}this._fillStyle=null,this._strokeStyle=null,this.instructions=null,this._activePath=null,this._bounds=null,this._stateStack=null,this.customShader=null,this._transform=null}};Io.defaultFillStyle={color:16777215,alpha:1,texture:rt.WHITE,matrix:null,fill:null};Io.defaultStrokeStyle={width:1,color:16777215,alpha:1,alignment:.5,miterLimit:10,cap:"butt",join:"miter",texture:rt.WHITE,matrix:null,fill:null};let Xt=Io;const xl=["align","breakWords","cssOverrides","fontFamily","fontSize","fontStyle","fontVariant","fontWeight","leading","letterSpacing","lineHeight","padding","textBaseline","trim","whiteSpace","wordWrap","wordWrapWidth"];function Fg(e){const t=[];let n=0;for(let s=0;s<xl.length;s++){const i=`_${xl[s]}`;t[n++]=e[i]}return n=Xu(e._fill,t,n),n=Bg(e._stroke,t,n),n=Rg(e.dropShadow,t,n),t.join("-")}function Xu(e,t,n){var s;return e&&(t[n++]=e.color,t[n++]=e.alpha,t[n++]=(s=e.fill)==null?void 0:s.styleKey),n}function Bg(e,t,n){return e&&(n=Xu(e,t,n),t[n++]=e.width,t[n++]=e.alignment,t[n++]=e.cap,t[n++]=e.join,t[n++]=e.miterLimit),n}function Rg(e,t,n){return e&&(t[n++]=e.alpha,t[n++]=e.angle,t[n++]=e.blur,t[n++]=e.distance,t[n++]=yt.shared.setValue(e.color).toNumber()),n}const Fo=class mn extends le{constructor(t={}){super(),zg(t);const n={...mn.defaultTextStyle,...t};for(const s in n){const i=s;this[i]=n[s]}this.update()}get align(){return this._align}set align(t){this._align=t,this.update()}get breakWords(){return this._breakWords}set breakWords(t){this._breakWords=t,this.update()}get dropShadow(){return this._dropShadow}set dropShadow(t){t!==null&&typeof t=="object"?this._dropShadow=this._createProxy({...mn.defaultDropShadow,...t}):this._dropShadow=t?this._createProxy({...mn.defaultDropShadow}):null,this.update()}get fontFamily(){return this._fontFamily}set fontFamily(t){this._fontFamily=t,this.update()}get fontSize(){return this._fontSize}set fontSize(t){typeof t=="string"?this._fontSize=parseInt(t,10):this._fontSize=t,this.update()}get fontStyle(){return this._fontStyle}set fontStyle(t){this._fontStyle=t,this.update()}get fontVariant(){return this._fontVariant}set fontVariant(t){this._fontVariant=t,this.update()}get fontWeight(){return this._fontWeight}set fontWeight(t){this._fontWeight=t,this.update()}get leading(){return this._leading}set leading(t){this._leading=t,this.update()}get letterSpacing(){return this._letterSpacing}set letterSpacing(t){this._letterSpacing=t,this.update()}get lineHeight(){return this._lineHeight}set lineHeight(t){this._lineHeight=t,this.update()}get padding(){return this._padding}set padding(t){this._padding=t,this.update()}get trim(){return this._trim}set trim(t){this._trim=t,this.update()}get textBaseline(){return this._textBaseline}set textBaseline(t){this._textBaseline=t,this.update()}get whiteSpace(){return this._whiteSpace}set whiteSpace(t){this._whiteSpace=t,this.update()}get wordWrap(){return this._wordWrap}set wordWrap(t){this._wordWrap=t,this.update()}get wordWrapWidth(){return this._wordWrapWidth}set wordWrapWidth(t){this._wordWrapWidth=t,this.update()}get fill(){return this._originalFill}set fill(t){t!==this._originalFill&&(this._originalFill=t,this._isFillStyle(t)&&(this._originalFill=this._createProxy({...Xt.defaultFillStyle,...t},()=>{this._fill=an({...this._originalFill},Xt.defaultFillStyle)})),this._fill=an(t===0?"black":t,Xt.defaultFillStyle),this.update())}get stroke(){return this._originalStroke}set stroke(t){t!==this._originalStroke&&(this._originalStroke=t,this._isFillStyle(t)&&(this._originalStroke=this._createProxy({...Xt.defaultStrokeStyle,...t},()=>{this._stroke=ti({...this._originalStroke},Xt.defaultStrokeStyle)})),this._stroke=ti(t,Xt.defaultStrokeStyle),this.update())}_generateKey(){return this._styleKey=Fg(this),this._styleKey}update(){this._styleKey=null,this.emit("update",this)}reset(){const t=mn.defaultTextStyle;for(const n in t)this[n]=t[n]}get styleKey(){return this._styleKey||this._generateKey()}clone(){return new mn({align:this.align,breakWords:this.breakWords,dropShadow:this._dropShadow?{...this._dropShadow}:null,fill:this._fill,fontFamily:this.fontFamily,fontSize:this.fontSize,fontStyle:this.fontStyle,fontVariant:this.fontVariant,fontWeight:this.fontWeight,leading:this.leading,letterSpacing:this.letterSpacing,lineHeight:this.lineHeight,padding:this.padding,stroke:this._stroke,textBaseline:this.textBaseline,whiteSpace:this.whiteSpace,wordWrap:this.wordWrap,wordWrapWidth:this.wordWrapWidth})}destroy(t=!1){var s,i,r,o;if(this.removeAllListeners(),typeof t=="boolean"?t:t==null?void 0:t.texture){const a=typeof t=="boolean"?t:t==null?void 0:t.textureSource;(s=this._fill)!=null&&s.texture&&this._fill.texture.destroy(a),(i=this._originalFill)!=null&&i.texture&&this._originalFill.texture.destroy(a),(r=this._stroke)!=null&&r.texture&&this._stroke.texture.destroy(a),(o=this._originalStroke)!=null&&o.texture&&this._originalStroke.texture.destroy(a)}this._fill=null,this._stroke=null,this.dropShadow=null,this._originalStroke=null,this._originalFill=null}_createProxy(t,n){return new Proxy(t,{set:(s,i,r)=>(s[i]=r,n==null||n(i,r),this.update(),!0)})}_isFillStyle(t){return(t??null)!==null&&!(yt.isColorLike(t)||t instanceof ds||t instanceof yi)}};Fo.defaultDropShadow={alpha:1,angle:Math.PI/6,blur:0,color:"black",distance:5};Fo.defaultTextStyle={align:"left",breakWords:!1,dropShadow:null,fill:"black",fontFamily:"Arial",fontSize:26,fontStyle:"normal",fontVariant:"normal",fontWeight:"normal",leading:0,letterSpacing:0,lineHeight:0,padding:0,stroke:null,textBaseline:"alphabetic",trim:!1,whiteSpace:"pre",wordWrap:!1,wordWrapWidth:100};let ei=Fo;function zg(e){const t=e;if(typeof t.dropShadow=="boolean"&&t.dropShadow){const n=ei.defaultDropShadow;e.dropShadow={alpha:t.dropShadowAlpha??n.alpha,angle:t.dropShadowAngle??n.angle,blur:t.dropShadowBlur??n.blur,color:t.dropShadowColor??n.color,distance:t.dropShadowDistance??n.distance}}if(t.strokeThickness!==void 0){ut(ct,"strokeThickness is now a part of stroke");const n=t.stroke;let s={};if(yt.isColorLike(n))s.color=n;else if(n instanceof ds||n instanceof yi)s.fill=n;else if(Object.hasOwnProperty.call(n,"color")||Object.hasOwnProperty.call(n,"fill"))s=n;else throw new Error("Invalid stroke value.");e.stroke={...s,width:t.strokeThickness}}if(Array.isArray(t.fillGradientStops)){ut(ct,"gradient fill is now a fill pattern: `new FillGradient(...)`");let n;e.fontSize==null?e.fontSize=ei.defaultTextStyle.fontSize:typeof e.fontSize=="string"?n=parseInt(e.fontSize,10):n=e.fontSize;const s=new ds(0,0,0,n*1.7),i=t.fillGradientStops.map(r=>yt.shared.setValue(r).toNumber());i.forEach((r,o)=>{const a=o/(i.length-1);s.addColorStop(a,r)}),e.fill={fill:s}}}class Og{constructor(t){this._canvasPool=Object.create(null),this.canvasOptions=t||{},this.enableFullScreen=!1}_createCanvasAndContext(t,n){const s=xt.get().createCanvas();s.width=t,s.height=n;const i=s.getContext("2d");return{canvas:s,context:i}}getOptimalCanvasAndContext(t,n,s=1){t=Math.ceil(t*s-1e-6),n=Math.ceil(n*s-1e-6),t=za(t),n=za(n);const i=(t<<17)+(n<<1);this._canvasPool[i]||(this._canvasPool[i]=[]);let r=this._canvasPool[i].pop();return r||(r=this._createCanvasAndContext(t,n)),r}returnCanvasAndContext(t){const{width:n,height:s}=t.canvas,i=(n<<17)+(s<<1);this._canvasPool[i].push(t)}clear(){this._canvasPool={}}}const vl=new Og,Lg=["serif","sans-serif","monospace","cursive","fantasy","system-ui"];function Kr(e){const t=typeof e.fontSize=="number"?`${e.fontSize}px`:e.fontSize;let n=e.fontFamily;Array.isArray(e.fontFamily)||(n=e.fontFamily.split(","));for(let s=n.length-1;s>=0;s--){let i=n[s].trim();!/([\"\'])[^\'\"]+\1/.test(i)&&!Lg.includes(i)&&(i=`"${i}"`),n[s]=i}return`${e.fontStyle} ${e.fontVariant} ${e.fontWeight} ${t} ${n.join(",")}`}const cr={willReadFrequently:!0},ce=class G{static get experimentalLetterSpacingSupported(){let t=G._experimentalLetterSpacingSupported;if(t!==void 0){const n=xt.get().getCanvasRenderingContext2D().prototype;t=G._experimentalLetterSpacingSupported="letterSpacing"in n||"textLetterSpacing"in n}return t}constructor(t,n,s,i,r,o,a,l,u){this.text=t,this.style=n,this.width=s,this.height=i,this.lines=r,this.lineWidths=o,this.lineHeight=a,this.maxLineWidth=l,this.fontProperties=u}static measureText(t=" ",n,s=G._canvas,i=n.wordWrap){var v;const r=`${t}:${n.styleKey}`;if(G._measurementCache[r])return G._measurementCache[r];const o=Kr(n),a=G.measureFont(o);a.fontSize===0&&(a.fontSize=n.fontSize,a.ascent=n.fontSize);const l=G.__context;l.font=o;const c=(i?G._wordWrap(t,n,s):t).split(/(?:\r\n|\r|\n)/),h=new Array(c.length);let f=0;for(let x=0;x<c.length;x++){const w=G._measureText(c[x],n.letterSpacing,l);h[x]=w,f=Math.max(f,w)}const d=((v=n._stroke)==null?void 0:v.width)||0;let p=f+d;n.dropShadow&&(p+=n.dropShadow.distance);const g=n.lineHeight||a.fontSize+d;let m=Math.max(g,a.fontSize+d*2)+(c.length-1)*(g+n.leading);return n.dropShadow&&(m+=n.dropShadow.distance),new G(t,n,p,m,c,h,g+n.leading,f,a)}static _measureText(t,n,s){let i=!1;G.experimentalLetterSpacingSupported&&(G.experimentalLetterSpacing?(s.letterSpacing=`${n}px`,s.textLetterSpacing=`${n}px`,i=!0):(s.letterSpacing="0px",s.textLetterSpacing="0px"));let r=s.measureText(t).width;return r>0&&(i?r-=n:r+=(G.graphemeSegmenter(t).length-1)*n),r}static _wordWrap(t,n,s=G._canvas){const i=s.getContext("2d",cr);let r=0,o="",a="";const l=Object.create(null),{letterSpacing:u,whiteSpace:c}=n,h=G._collapseSpaces(c),f=G._collapseNewlines(c);let d=!h;const p=n.wordWrapWidth+u,g=G._tokenize(t);for(let m=0;m<g.length;m++){let y=g[m];if(G._isNewline(y)){if(!f){a+=G._addLine(o),d=!h,o="",r=0;continue}y=" "}if(h){const x=G.isBreakingSpace(y),w=G.isBreakingSpace(o[o.length-1]);if(x&&w)continue}const v=G._getFromCache(y,u,l,i);if(v>p)if(o!==""&&(a+=G._addLine(o),o="",r=0),G.canBreakWords(y,n.breakWords)){const x=G.wordWrapSplit(y);for(let w=0;w<x.length;w++){let I=x[w],M=I,R=1;for(;x[w+R];){const S=x[w+R];if(!G.canBreakChars(M,S,y,w,n.breakWords))I+=S;else break;M=S,R++}w+=R-1;const k=G._getFromCache(I,u,l,i);k+r>p&&(a+=G._addLine(o),d=!1,o="",r=0),o+=I,r+=k}}else{o.length>0&&(a+=G._addLine(o),o="",r=0);const x=m===g.length-1;a+=G._addLine(y,!x),d=!1,o="",r=0}else v+r>p&&(d=!1,a+=G._addLine(o),o="",r=0),(o.length>0||!G.isBreakingSpace(y)||d)&&(o+=y,r+=v)}return a+=G._addLine(o,!1),a}static _addLine(t,n=!0){return t=G._trimRight(t),t=n?`${t}
`:t,t}static _getFromCache(t,n,s,i){let r=s[t];return typeof r!="number"&&(r=G._measureText(t,n,i)+n,s[t]=r),r}static _collapseSpaces(t){return t==="normal"||t==="pre-line"}static _collapseNewlines(t){return t==="normal"}static _trimRight(t){if(typeof t!="string")return"";for(let n=t.length-1;n>=0;n--){const s=t[n];if(!G.isBreakingSpace(s))break;t=t.slice(0,-1)}return t}static _isNewline(t){return typeof t!="string"?!1:G._newlines.includes(t.charCodeAt(0))}static isBreakingSpace(t,n){return typeof t!="string"?!1:G._breakingSpaces.includes(t.charCodeAt(0))}static _tokenize(t){const n=[];let s="";if(typeof t!="string")return n;for(let i=0;i<t.length;i++){const r=t[i],o=t[i+1];if(G.isBreakingSpace(r,o)||G._isNewline(r)){s!==""&&(n.push(s),s=""),n.push(r);continue}s+=r}return s!==""&&n.push(s),n}static canBreakWords(t,n){return n}static canBreakChars(t,n,s,i,r){return!0}static wordWrapSplit(t){return G.graphemeSegmenter(t)}static measureFont(t){if(G._fonts[t])return G._fonts[t];const n=G._context;n.font=t;const s=n.measureText(G.METRICS_STRING+G.BASELINE_SYMBOL),i={ascent:s.actualBoundingBoxAscent,descent:s.actualBoundingBoxDescent,fontSize:s.actualBoundingBoxAscent+s.actualBoundingBoxDescent};return G._fonts[t]=i,i}static clearMetrics(t=""){t?delete G._fonts[t]:G._fonts={}}static get _canvas(){if(!G.__canvas){let t;try{const n=new OffscreenCanvas(0,0),s=n.getContext("2d",cr);if(s!=null&&s.measureText)return G.__canvas=n,n;t=xt.get().createCanvas()}catch{t=xt.get().createCanvas()}t.width=t.height=10,G.__canvas=t}return G.__canvas}static get _context(){return G.__context||(G.__context=G._canvas.getContext("2d",cr)),G.__context}};ce.METRICS_STRING="|ÉqÅ";ce.BASELINE_SYMBOL="M";ce.BASELINE_MULTIPLIER=1.4;ce.HEIGHT_MULTIPLIER=2;ce.graphemeSegmenter=(()=>{if(typeof(Intl==null?void 0:Intl.Segmenter)=="function"){const e=new Intl.Segmenter;return t=>[...e.segment(t)].map(n=>n.segment)}return e=>[...e]})();ce.experimentalLetterSpacing=!1;ce._fonts={};ce._newlines=[10,13];ce._breakingSpaces=[9,32,8192,8193,8194,8195,8196,8197,8198,8200,8201,8202,8287,12288];ce._measurementCache={};let _l=ce;function yl(e,t){if(e.texture===rt.WHITE&&!e.fill)return yt.shared.setValue(e.color).toHex();if(e.fill){if(e.fill instanceof yi){const n=e.fill,s=t.createPattern(n.texture.source.resource,"repeat"),i=n.transform.copyTo(at.shared);return i.scale(n.texture.frame.width,n.texture.frame.height),s.setTransform(i),s}else if(e.fill instanceof ds){const n=e.fill;if(n.type==="linear"){const s=t.createLinearGradient(n.x0,n.y0,n.x1,n.y1);return n.gradientStops.forEach(i=>{s.addColorStop(i.offset,yt.shared.setValue(i.color).toHex())}),s}}}else{const n=t.createPattern(e.texture.source.resource,"repeat"),s=e.matrix.copyTo(at.shared);return s.scale(e.texture.frame.width,e.texture.frame.height),n.setTransform(s),n}return Tt("FillStyle not recognised",e),"red"}function Yu(e){if(e==="")return[];typeof e=="string"&&(e=[e]);const t=[];for(let n=0,s=e.length;n<s;n++){const i=e[n];if(Array.isArray(i)){if(i.length!==2)throw new Error(`[BitmapFont]: Invalid character range length, expecting 2 got ${i.length}.`);if(i[0].length===0||i[1].length===0)throw new Error("[BitmapFont]: Invalid character delimiter.");const r=i[0].charCodeAt(0),o=i[1].charCodeAt(0);if(o<r)throw new Error("[BitmapFont]: Invalid character range.");for(let a=r,l=o;a<=l;a++)t.push(String.fromCharCode(a))}else t.push(...Array.from(i))}if(t.length===0)throw new Error("[BitmapFont]: Empty set when resolving characters.");return t}class bl extends Bu{constructor(t){super(),this.resolution=1,this.pages=[],this._padding=4,this._measureCache=Object.create(null),this._currentChars=[],this._currentX=0,this._currentY=0,this._currentPageIndex=-1,this._skipKerning=!1;const n=t,s=n.style.clone();n.overrideFill&&(s._fill.color=16777215,s._fill.alpha=1,s._fill.texture=rt.WHITE,s._fill.fill=null);const i=s.fontSize;s.fontSize=this.baseMeasurementFontSize;const r=Kr(s);n.overrideSize?s._stroke&&(s._stroke.width*=this.baseRenderedFontSize/i):s.fontSize=this.baseRenderedFontSize=i,this._style=s,this._skipKerning=n.skipKerning??!1,this.resolution=n.resolution??1,this._padding=n.padding??4,this.fontMetrics=_l.measureFont(r),this.lineHeight=s.lineHeight||this.fontMetrics.fontSize||s.fontSize}ensureCharacters(t){var g,m;const n=Yu(t).filter(y=>!this._currentChars.includes(y)).filter((y,v,x)=>x.indexOf(y)===v);if(!n.length)return;this._currentChars=[...this._currentChars,...n];let s;this._currentPageIndex===-1?s=this._nextPage():s=this.pages[this._currentPageIndex];let{canvas:i,context:r}=s.canvasAndContext,o=s.texture.source;const a=this._style;let l=this._currentX,u=this._currentY;const c=this.baseRenderedFontSize/this.baseMeasurementFontSize,h=this._padding*c,f=a.fontStyle==="italic"?2:1;let d=0,p=!1;for(let y=0;y<n.length;y++){const v=n[y],x=_l.measureText(v,a,i,!1);x.lineHeight=x.height;const w=f*x.width*c,I=x.height*c,M=w+h*2,R=I+h*2;if(p=!1,v!==`
`&&v!=="\r"&&v!=="	"&&v!==" "&&(p=!0,d=Math.ceil(Math.max(R,d))),l+M>512&&(u+=d,d=R,l=0,u+d>512)){o.update();const S=this._nextPage();i=S.canvasAndContext.canvas,r=S.canvasAndContext.context,o=S.texture.source,u=0}const k=w/c-(((g=a.dropShadow)==null?void 0:g.distance)??0)-(((m=a._stroke)==null?void 0:m.width)??0);if(this.chars[v]={id:v.codePointAt(0),xOffset:-this._padding,yOffset:-this._padding,xAdvance:k,kerning:{}},p){this._drawGlyph(r,x,l+h,u+h,c,a);const S=o.width*c,C=o.height*c,Y=new wt(l/S*o.width,u/C*o.height,M/S*o.width,R/C*o.height);this.chars[v].texture=new rt({source:o,frame:Y}),l+=Math.ceil(M)}}o.update(),this._currentX=l,this._currentY=u,this._skipKerning&&this._applyKerning(n,r)}get pageTextures(){return ut(ct,"BitmapFont.pageTextures is deprecated, please use BitmapFont.pages instead."),this.pages}_applyKerning(t,n){const s=this._measureCache;for(let i=0;i<t.length;i++){const r=t[i];for(let o=0;o<this._currentChars.length;o++){const a=this._currentChars[o];let l=s[r];l||(l=s[r]=n.measureText(r).width);let u=s[a];u||(u=s[a]=n.measureText(a).width);let c=n.measureText(r+a).width,h=c-(l+u);h&&(this.chars[r].kerning[a]=h),c=n.measureText(r+a).width,h=c-(l+u),h&&(this.chars[a].kerning[r]=h)}}}_nextPage(){this._currentPageIndex++;const t=this.resolution,n=vl.getOptimalCanvasAndContext(512,512,t);this._setupContext(n.context,this._style,t);const s=t*(this.baseRenderedFontSize/this.baseMeasurementFontSize),i=new rt({source:new kn({resource:n.canvas,resolution:s,alphaMode:"premultiply-alpha-on-upload"})}),r={canvasAndContext:n,texture:i};return this.pages[this._currentPageIndex]=r,r}_setupContext(t,n,s){n.fontSize=this.baseRenderedFontSize,t.scale(s,s),t.font=Kr(n),n.fontSize=this.baseMeasurementFontSize,t.textBaseline=n.textBaseline;const i=n._stroke,r=(i==null?void 0:i.width)??0;if(i&&(t.lineWidth=r,t.lineJoin=i.join,t.miterLimit=i.miterLimit,t.strokeStyle=yl(i,t)),n._fill&&(t.fillStyle=yl(n._fill,t)),n.dropShadow){const o=n.dropShadow,a=yt.shared.setValue(o.color).toArray(),l=o.blur*s,u=o.distance*s;t.shadowColor=`rgba(${a[0]*255},${a[1]*255},${a[2]*255},${o.alpha})`,t.shadowBlur=l,t.shadowOffsetX=Math.cos(o.angle)*u,t.shadowOffsetY=Math.sin(o.angle)*u}else t.shadowColor="black",t.shadowBlur=0,t.shadowOffsetX=0,t.shadowOffsetY=0}_drawGlyph(t,n,s,i,r,o){const a=n.text,l=n.fontProperties,u=o._stroke,c=((u==null?void 0:u.width)??0)*r,h=s+c/2,f=i-c/2,d=l.descent*r,p=n.lineHeight*r;o.stroke&&c&&t.strokeText(a,h,f+p-d),o._fill&&t.fillText(a,h,f+p-d)}destroy(){super.destroy();for(let t=0;t<this.pages.length;t++){const{canvasAndContext:n,texture:s}=this.pages[t];vl.returnCanvasAndContext(n),s.destroy(!0)}this.pages=null}}function jg(e,t,n){const s={width:0,height:0,offsetY:0,scale:t.fontSize/n.baseMeasurementFontSize,lines:[{width:0,charPositions:[],spaceWidth:0,spacesIndex:[],chars:[]}]};s.offsetY=n.baseLineOffset;let i=s.lines[0],r=null,o=!0;const a={spaceWord:!1,width:0,start:0,index:0,positions:[],chars:[]},l=d=>{const p=i.width;for(let g=0;g<a.index;g++){const m=d.positions[g];i.chars.push(d.chars[g]),i.charPositions.push(m+p)}i.width+=d.width,o=!1,a.width=0,a.index=0,a.chars.length=0},u=()=>{let d=i.chars.length-1,p=i.chars[d];for(;p===" ";)i.width-=n.chars[p].xAdvance,p=i.chars[--d];s.width=Math.max(s.width,i.width),i={width:0,charPositions:[],chars:[],spaceWidth:0,spacesIndex:[]},o=!0,s.lines.push(i),s.height+=n.lineHeight},c=n.baseMeasurementFontSize/t.fontSize,h=t.letterSpacing*c,f=t.wordWrapWidth*c;for(let d=0;d<e.length+1;d++){let p;const g=d===e.length;g||(p=e[d]);const m=n.chars[p]||n.chars[" "];if(/(?:\s)/.test(p)||p==="\r"||p===`
`||g){if(!o&&t.wordWrap&&i.width+a.width-h>f?(u(),l(a),g||i.charPositions.push(0)):(a.start=i.width,l(a),g||i.charPositions.push(0)),p==="\r"||p===`
`)i.width!==0&&u();else if(!g){const w=m.xAdvance+(m.kerning[r]||0)+h;i.width+=w,i.spaceWidth=w,i.spacesIndex.push(i.charPositions.length),i.chars.push(p)}}else{const x=m.kerning[r]||0,w=m.xAdvance+x+h;a.positions[a.index++]=a.width+x,a.chars.push(p),a.width+=w}r=p}return u(),t.align==="center"?Ng(s):t.align==="right"?Ug(s):t.align==="justify"&&Dg(s),s}function Ng(e){for(let t=0;t<e.lines.length;t++){const n=e.lines[t],s=e.width/2-n.width/2;for(let i=0;i<n.charPositions.length;i++)n.charPositions[i]+=s}}function Ug(e){for(let t=0;t<e.lines.length;t++){const n=e.lines[t],s=e.width-n.width;for(let i=0;i<n.charPositions.length;i++)n.charPositions[i]+=s}}function Dg(e){const t=e.width;for(let n=0;n<e.lines.length;n++){const s=e.lines[n];let i=0,r=s.spacesIndex[i++],o=0;const a=s.spacesIndex.length,u=(t-s.width)/a;for(let c=0;c<s.charPositions.length;c++)c===r&&(r=s.spacesIndex[i++],o+=u),s.charPositions[c]+=o}}class Gg{constructor(){this.ALPHA=[["a","z"],["A","Z"]," "],this.NUMERIC=[["0","9"]],this.ALPHANUMERIC=[["a","z"],["A","Z"],["0","9"]," "],this.ASCII=[[" ","~"]],this.defaultOptions={chars:this.ALPHANUMERIC,resolution:1,padding:4,skipKerning:!1}}getFont(t,n){var o;let s=`${n.fontFamily}-bitmap`,i=!0;if(n._fill.fill&&(s+=n._fill.fill.uid,i=!1),!mt.has(s)){const a=new bl({style:n,overrideFill:i,overrideSize:!0,...this.defaultOptions});a.once("destroy",()=>mt.remove(s)),mt.set(s,a)}const r=mt.get(s);return(o=r.ensureCharacters)==null||o.call(r,t),r}getLayout(t,n){const s=this.getFont(t,n);return jg([...t],n,s)}measureText(t,n){return this.getLayout(t,n)}install(...t){var u,c,h,f;let n=t[0];typeof n=="string"&&(n={name:n,style:t[1],chars:(u=t[2])==null?void 0:u.chars,resolution:(c=t[2])==null?void 0:c.resolution,padding:(h=t[2])==null?void 0:h.padding,skipKerning:(f=t[2])==null?void 0:f.skipKerning},ut(ct,"BitmapFontManager.install(name, style, options) is deprecated, use BitmapFontManager.install({name, style, ...options})"));const s=n==null?void 0:n.name;if(!s)throw new Error("[BitmapFontManager] Property `name` is required.");n={...this.defaultOptions,...n};const i=n.style,r=i instanceof ei?i:new ei(i),o=r._fill.fill!==null&&r._fill.fill!==void 0,a=new bl({style:r,overrideFill:o,skipKerning:n.skipKerning,padding:n.padding,resolution:n.resolution,overrideSize:!1}),l=Yu(n.chars);return a.ensureCharacters(l.join("")),mt.set(`${s}-bitmap`,a),a.once("destroy",()=>mt.remove(`${s}-bitmap`)),a}uninstall(t){const n=`${t}-bitmap`,s=mt.get(n);s&&(mt.remove(n),s.destroy())}}const wl=new Gg;class qu extends Bu{constructor(t,n){super();const{textures:s,data:i}=t;Object.keys(i.pages).forEach(r=>{const o=i.pages[parseInt(r,10)],a=s[o.id];this.pages.push({texture:a})}),Object.keys(i.chars).forEach(r=>{const o=i.chars[r],{frame:a,source:l}=s[o.page],u=new wt(o.x+a.x,o.y+a.y,o.width,o.height),c=new rt({source:l,frame:u});this.chars[r]={id:r.codePointAt(0),xOffset:o.xOffset,yOffset:o.yOffset,xAdvance:o.xAdvance,kerning:o.kerning??{},texture:c}}),this.baseRenderedFontSize=i.fontSize,this.baseMeasurementFontSize=i.fontSize,this.fontMetrics={ascent:0,descent:0,fontSize:i.fontSize},this.baseLineOffset=i.baseLineOffset,this.lineHeight=i.lineHeight,this.fontFamily=i.fontFamily,this.distanceField=i.distanceField??{type:"none",range:0},this.url=n}destroy(){super.destroy();for(let t=0;t<this.pages.length;t++){const{texture:n}=this.pages[t];n.destroy(!0)}this.pages=null}static install(t){wl.install(t)}static uninstall(t){wl.uninstall(t)}}const ur={test(e){return typeof e=="string"&&e.startsWith("info face=")},parse(e){const t=e.match(/^[a-z]+\s+.+$/gm),n={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(const h in t){const f=t[h].match(/^[a-z]+/gm)[0],d=t[h].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),p={};for(const g in d){const m=d[g].split("="),y=m[0],v=m[1].replace(/"/gm,""),x=parseFloat(v),w=isNaN(x)?v:x;p[y]=w}n[f].push(p)}const s={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[i]=n.info,[r]=n.common,[o]=n.distanceField??[];o&&(s.distanceField={range:parseInt(o.distanceRange,10),type:o.fieldType}),s.fontSize=parseInt(i.size,10),s.fontFamily=i.face,s.lineHeight=parseInt(r.lineHeight,10);const a=n.page;for(let h=0;h<a.length;h++)s.pages.push({id:parseInt(a[h].id,10)||0,file:a[h].file});const l={};s.baseLineOffset=s.lineHeight-parseInt(r.base,10);const u=n.char;for(let h=0;h<u.length;h++){const f=u[h],d=parseInt(f.id,10);let p=f.letter??f.char??String.fromCharCode(d);p==="space"&&(p=" "),l[d]=p,s.chars[p]={id:d,page:parseInt(f.page,10)||0,x:parseInt(f.x,10),y:parseInt(f.y,10),width:parseInt(f.width,10),height:parseInt(f.height,10),xOffset:parseInt(f.xoffset,10),yOffset:parseInt(f.yoffset,10),xAdvance:parseInt(f.xadvance,10),kerning:{}}}const c=n.kerning||[];for(let h=0;h<c.length;h++){const f=parseInt(c[h].first,10),d=parseInt(c[h].second,10),p=parseInt(c[h].amount,10);s.chars[l[d]].kerning[l[f]]=p}return s}},Al={test(e){const t=e;return typeof t!="string"&&"getElementsByTagName"in t&&t.getElementsByTagName("page").length&&t.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(e){const t={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},n=e.getElementsByTagName("info")[0],s=e.getElementsByTagName("common")[0],i=e.getElementsByTagName("distanceField")[0];i&&(t.distanceField={type:i.getAttribute("fieldType"),range:parseInt(i.getAttribute("distanceRange"),10)});const r=e.getElementsByTagName("page"),o=e.getElementsByTagName("char"),a=e.getElementsByTagName("kerning");t.fontSize=parseInt(n.getAttribute("size"),10),t.fontFamily=n.getAttribute("face"),t.lineHeight=parseInt(s.getAttribute("lineHeight"),10);for(let u=0;u<r.length;u++)t.pages.push({id:parseInt(r[u].getAttribute("id"),10)||0,file:r[u].getAttribute("file")});const l={};t.baseLineOffset=t.lineHeight-parseInt(s.getAttribute("base"),10);for(let u=0;u<o.length;u++){const c=o[u],h=parseInt(c.getAttribute("id"),10);let f=c.getAttribute("letter")??c.getAttribute("char")??String.fromCharCode(h);f==="space"&&(f=" "),l[h]=f,t.chars[f]={id:h,page:parseInt(c.getAttribute("page"),10)||0,x:parseInt(c.getAttribute("x"),10),y:parseInt(c.getAttribute("y"),10),width:parseInt(c.getAttribute("width"),10),height:parseInt(c.getAttribute("height"),10),xOffset:parseInt(c.getAttribute("xoffset"),10),yOffset:parseInt(c.getAttribute("yoffset"),10),xAdvance:parseInt(c.getAttribute("xadvance"),10),kerning:{}}}for(let u=0;u<a.length;u++){const c=parseInt(a[u].getAttribute("first"),10),h=parseInt(a[u].getAttribute("second"),10),f=parseInt(a[u].getAttribute("amount"),10);t.chars[l[h]].kerning[l[c]]=f}return t}},Cl={test(e){return typeof e=="string"&&e.includes("<font>")?Al.test(xt.get().parseXML(e)):!1},parse(e){return Al.parse(xt.get().parseXML(e))}},$g=[".xml",".fnt"],Hg={extension:{type:q.CacheParser,name:"cacheBitmapFont"},test:e=>e instanceof qu,getCacheableAssets(e,t){const n={};return e.forEach(s=>{n[s]=t,n[`${s}-bitmap`]=t}),n[`${t.fontFamily}-bitmap`]=t,n}},Wg={extension:{type:q.LoadParser,priority:Ve.Normal},name:"loadBitmapFont",test(e){return $g.includes(Ht.extname(e).toLowerCase())},async testParse(e){return ur.test(e)||Cl.test(e)},async parse(e,t,n){const s=ur.test(e)?ur.parse(e):Cl.parse(e),{src:i}=t,{pages:r}=s,o=[],a=s.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let h=0;h<r.length;++h){const f=r[h].file;let d=Ht.join(Ht.dirname(i),f);d=Or(d,i),o.push({src:d,data:a})}const l=await n.load(o),u=o.map(h=>l[h.src]);return new qu({data:s,textures:u},i)},async load(e,t){return await(await xt.get().fetch(e)).text()},async unload(e,t,n){await Promise.all(e.pages.map(s=>n.unload(s.texture.source._sourceOrigin))),e.destroy()}};class Vg{constructor(t,n=!1){this._loader=t,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=n}add(t){t.forEach(n=>{this._assetList.push(n)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;const t=[],n=Math.min(this._assetList.length,this._maxConcurrent);for(let s=0;s<n;s++)t.push(this._assetList.pop());await this._loader.load(t),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(t){this._isActive!==t&&(this._isActive=t,t&&!this._isLoading&&this._next())}}const Xg={extension:{type:q.CacheParser,name:"cacheTextureArray"},test:e=>Array.isArray(e)&&e.every(t=>t instanceof rt),getCacheableAssets:(e,t)=>{const n={};return e.forEach(s=>{t.forEach((i,r)=>{n[s+(r===0?"":r+1)]=i})}),n}};async function Ku(e){if("Image"in globalThis)return new Promise(t=>{const n=new Image;n.onload=()=>{t(!0)},n.onerror=()=>{t(!1)},n.src=e});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{const t=await(await fetch(e)).blob();await createImageBitmap(t)}catch{return!1}return!0}return!1}const Yg={extension:{type:q.DetectionParser,priority:1},test:async()=>Ku("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async e=>[...e,"avif"],remove:async e=>e.filter(t=>t!=="avif")},Sl=["png","jpg","jpeg"],qg={extension:{type:q.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async e=>[...e,...Sl],remove:async e=>e.filter(t=>!Sl.includes(t))},Kg="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function Bo(e){return Kg?!1:document.createElement("video").canPlayType(e)!==""}const Zg={extension:{type:q.DetectionParser,priority:0},test:async()=>Bo("video/mp4"),add:async e=>[...e,"mp4","m4v"],remove:async e=>e.filter(t=>t!=="mp4"&&t!=="m4v")},Qg={extension:{type:q.DetectionParser,priority:0},test:async()=>Bo("video/ogg"),add:async e=>[...e,"ogv"],remove:async e=>e.filter(t=>t!=="ogv")},Jg={extension:{type:q.DetectionParser,priority:0},test:async()=>Bo("video/webm"),add:async e=>[...e,"webm"],remove:async e=>e.filter(t=>t!=="webm")},tx={extension:{type:q.DetectionParser,priority:0},test:async()=>Ku("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async e=>[...e,"webp"],remove:async e=>e.filter(t=>t!=="webp")};class ex{constructor(){this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(t,n,s)=>(this._parsersValidated=!1,t[n]=s,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(t,n){const s={promise:null,parser:null};return s.promise=(async()=>{var o,a;let i=null,r=null;if(n.loadParser&&(r=this._parserHash[n.loadParser],r||Tt(`[Assets] specified load parser "${n.loadParser}" not found while loading ${t}`)),!r){for(let l=0;l<this.parsers.length;l++){const u=this.parsers[l];if(u.load&&((o=u.test)!=null&&o.call(u,t,n,this))){r=u;break}}if(!r)return Tt(`[Assets] ${t} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}i=await r.load(t,n,this),s.parser=r;for(let l=0;l<this.parsers.length;l++){const u=this.parsers[l];u.parse&&u.parse&&await((a=u.testParse)==null?void 0:a.call(u,i,n,this))&&(i=await u.parse(i,n,this)||i,s.parser=u)}return i})(),s}async load(t,n){this._parsersValidated||this._validateParsers();let s=0;const i={},r=Js(t),o=ie(t,u=>({alias:[u],src:u})),a=o.length,l=o.map(async u=>{const c=Ht.toAbsolute(u.src);if(!i[u.src])try{this.promiseCache[c]||(this.promiseCache[c]=this._getLoadPromiseAndParser(c,u)),i[u.src]=await this.promiseCache[c].promise,n&&n(++s/a)}catch(h){throw delete this.promiseCache[c],delete i[u.src],new Error(`[Loader.load] Failed to load ${c}.
${h}`)}});return await Promise.all(l),r?i[o[0].src]:i}async unload(t){const s=ie(t,i=>({alias:[i],src:i})).map(async i=>{var a,l;const r=Ht.toAbsolute(i.src),o=this.promiseCache[r];if(o){const u=await o.promise;delete this.promiseCache[r],await((l=(a=o.parser)==null?void 0:a.unload)==null?void 0:l.call(a,u,i,this))}});await Promise.all(s)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(t=>t.name).reduce((t,n)=>(n.name?t[n.name]&&Tt(`[Assets] loadParser name conflict "${n.name}"`):Tt("[Assets] loadParser should have a name"),{...t,[n.name]:n}),{})}}function In(e,t){if(Array.isArray(t)){for(const n of t)if(e.startsWith(`data:${n}`))return!0;return!1}return e.startsWith(`data:${t}`)}function Fn(e,t){const n=e.split("?")[0],s=Ht.extname(n).toLowerCase();return Array.isArray(t)?t.includes(s):s===t}const nx=".json",sx="application/json",ix={extension:{type:q.LoadParser,priority:Ve.Low},name:"loadJson",test(e){return In(e,sx)||Fn(e,nx)},async load(e){return await(await xt.get().fetch(e)).json()}},rx=".txt",ox="text/plain",ax={name:"loadTxt",extension:{type:q.LoadParser,priority:Ve.Low,name:"loadTxt"},test(e){return In(e,ox)||Fn(e,rx)},async load(e){return await(await xt.get().fetch(e)).text()}},lx=["normal","bold","100","200","300","400","500","600","700","800","900"],cx=[".ttf",".otf",".woff",".woff2"],ux=["font/ttf","font/otf","font/woff","font/woff2"],hx=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function fx(e){const t=Ht.extname(e),i=Ht.basename(e,t).replace(/(-|_)/g," ").toLowerCase().split(" ").map(a=>a.charAt(0).toUpperCase()+a.slice(1));let r=i.length>0;for(const a of i)if(!a.match(hx)){r=!1;break}let o=i.join(" ");return r||(o=`"${o.replace(/[\\"]/g,"\\$&")}"`),o}const dx=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function px(e){return dx.test(e)?e:encodeURI(e)}const mx={extension:{type:q.LoadParser,priority:Ve.Low},name:"loadWebFont",test(e){return In(e,ux)||Fn(e,cx)},async load(e,t){var s,i,r;const n=xt.get().getFontFaceSet();if(n){const o=[],a=((s=t.data)==null?void 0:s.family)??fx(e),l=((r=(i=t.data)==null?void 0:i.weights)==null?void 0:r.filter(c=>lx.includes(c)))??["normal"],u=t.data??{};for(let c=0;c<l.length;c++){const h=l[c],f=new FontFace(a,`url(${px(e)})`,{...u,weight:h});await f.load(),n.add(f),o.push(f)}return mt.set(`${a}-and-url`,{url:e,fontFaces:o}),o.length===1?o[0]:o}return Tt("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(e){(Array.isArray(e)?e:[e]).forEach(t=>{mt.remove(t.family),xt.get().getFontFaceSet().delete(t)})}};function Ro(e,t=1){var s;const n=(s=En.RETINA_PREFIX)==null?void 0:s.exec(e);return n?parseFloat(n[1]):t}function zo(e,t,n){e.label=n,e._sourceOrigin=n;const s=new rt({source:e,label:n}),i=()=>{delete t.promiseCache[n],mt.has(n)&&mt.remove(n)};return s.source.once("destroy",()=>{t.promiseCache[n]&&(Tt("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),i())}),s.once("destroy",()=>{e.destroyed||(Tt("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),i())}),s}const gx=".svg",xx="image/svg+xml",vx={extension:{type:q.LoadParser,priority:Ve.Low,name:"loadSVG"},name:"loadSVG",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(e){return In(e,xx)||Fn(e,gx)},async load(e,t,n){return t.data.parseAsGraphicsContext??this.config.parseAsGraphicsContext?yx(e):_x(e,t,n,this.config.crossOrigin)},unload(e){e.destroy(!0)}};async function _x(e,t,n,s){var m,y,v;const r=await(await xt.get().fetch(e)).blob(),o=URL.createObjectURL(r),a=new Image;a.src=o,a.crossOrigin=s,await a.decode(),URL.revokeObjectURL(o);const l=document.createElement("canvas"),u=l.getContext("2d"),c=((m=t.data)==null?void 0:m.resolution)||Ro(e),h=((y=t.data)==null?void 0:y.width)??a.width,f=((v=t.data)==null?void 0:v.height)??a.height;l.width=h*c,l.height=f*c,u.drawImage(a,0,0,h*c,f*c);const{parseAsGraphicsContext:d,...p}=t.data,g=new kn({resource:l,alphaMode:"premultiply-alpha-on-upload",resolution:c,...p});return zo(g,n,e)}async function yx(e){const n=await(await xt.get().fetch(e)).text(),s=new Xt;return s.svg(n),s}const bx=`(function () {
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
`;let bn=null,Zr=class{constructor(){bn||(bn=URL.createObjectURL(new Blob([bx],{type:"application/javascript"}))),this.worker=new Worker(bn)}};Zr.revokeObjectURL=function(){bn&&(URL.revokeObjectURL(bn),bn=null)};const wx=`(function () {
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
`;let wn=null;class Zu{constructor(){wn||(wn=URL.createObjectURL(new Blob([wx],{type:"application/javascript"}))),this.worker=new Worker(wn)}}Zu.revokeObjectURL=function(){wn&&(URL.revokeObjectURL(wn),wn=null)};let Ml=0,hr;class Ax{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(t=>{const{worker:n}=new Zr;n.addEventListener("message",s=>{n.terminate(),Zr.revokeObjectURL(),t(s.data)})}),this._isImageBitmapSupported)}loadImageBitmap(t){return this._run("loadImageBitmap",[t])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){hr===void 0&&(hr=navigator.hardwareConcurrency||4);let t=this._workerPool.pop();return!t&&this._createdWorkers<hr&&(this._createdWorkers++,t=new Zu().worker,t.addEventListener("message",n=>{this._complete(n.data),this._returnWorker(n.target),this._next()})),t}_returnWorker(t){this._workerPool.push(t)}_complete(t){t.error!==void 0?this._resolveHash[t.uuid].reject(t.error):this._resolveHash[t.uuid].resolve(t.data),this._resolveHash[t.uuid]=null}async _run(t,n){await this._initWorkers();const s=new Promise((i,r)=>{this._queue.push({id:t,arguments:n,resolve:i,reject:r})});return this._next(),s}_next(){if(!this._queue.length)return;const t=this._getWorker();if(!t)return;const n=this._queue.pop(),s=n.id;this._resolveHash[Ml]={resolve:n.resolve,reject:n.reject},t.postMessage({data:n.arguments,uuid:Ml++,id:s})}}const Pl=new Ax,Cx=[".jpeg",".jpg",".png",".webp",".avif"],Sx=["image/jpeg","image/png","image/webp","image/avif"];async function Mx(e){const t=await xt.get().fetch(e);if(!t.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${e}: ${t.status} ${t.statusText}`);const n=await t.blob();return await createImageBitmap(n)}const Qu={name:"loadTextures",extension:{type:q.LoadParser,priority:Ve.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(e){return In(e,Sx)||Fn(e,Cx)},async load(e,t,n){var r;let s=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await Pl.isImageBitmapSupported()?s=await Pl.loadImageBitmap(e):s=await Mx(e):s=await new Promise(o=>{s=new Image,s.crossOrigin=this.config.crossOrigin,s.src=e,s.complete?o(s):s.onload=()=>{o(s)}});const i=new kn({resource:s,alphaMode:"premultiply-alpha-on-upload",resolution:((r=t.data)==null?void 0:r.resolution)||Ro(e),...t.data});return zo(i,n,e)},unload(e){e.destroy(!0)}},Ju=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],Px=Ju.map(e=>`video/${e.substring(1)}`);function Tx(e,t,n){n===void 0&&!t.startsWith("data:")?e.crossOrigin=Ex(t):n!==!1&&(e.crossOrigin=typeof n=="string"?n:"anonymous")}function kx(e){return new Promise((t,n)=>{e.addEventListener("canplaythrough",s),e.addEventListener("error",i),e.load();function s(){r(),t()}function i(o){r(),n(o)}function r(){e.removeEventListener("canplaythrough",s),e.removeEventListener("error",i)}})}function Ex(e,t=globalThis.location){if(e.startsWith("data:"))return"";t=t||globalThis.location;const n=new URL(e,document.baseURI);return n.hostname!==t.hostname||n.port!==t.port||n.protocol!==t.protocol?"anonymous":""}const Ix={name:"loadVideo",extension:{type:q.LoadParser,name:"loadVideo"},test(e){const t=In(e,Px),n=Fn(e,Ju);return t||n},async load(e,t,n){var l,u;const s={...Hs.defaultOptions,resolution:((l=t.data)==null?void 0:l.resolution)||Ro(e),alphaMode:((u=t.data)==null?void 0:u.alphaMode)||await hu(),...t.data},i=document.createElement("video"),r={preload:s.autoLoad!==!1?"auto":void 0,"webkit-playsinline":s.playsinline!==!1?"":void 0,playsinline:s.playsinline!==!1?"":void 0,muted:s.muted===!0?"":void 0,loop:s.loop===!0?"":void 0,autoplay:s.autoPlay!==!1?"":void 0};Object.keys(r).forEach(c=>{const h=r[c];h!==void 0&&i.setAttribute(c,h)}),s.muted===!0&&(i.muted=!0),Tx(i,e,s.crossorigin);const o=document.createElement("source");let a;if(e.startsWith("data:"))a=e.slice(5,e.indexOf(";"));else if(!e.startsWith("blob:")){const c=e.split("?")[0].slice(e.lastIndexOf(".")+1).toLowerCase();a=Hs.MIME_TYPES[c]||`video/${c}`}return o.src=e,a&&(o.type=a),new Promise(c=>{const h=async()=>{const f=new Hs({...s,resource:i});i.removeEventListener("canplay",h),t.data.preload&&await kx(i),c(zo(f,n,e))};i.addEventListener("canplay",h),i.appendChild(o)})},unload(e){e.destroy(!0)}},th={extension:{type:q.ResolveParser,name:"resolveTexture"},test:Qu.test,parse:e=>{var t;return{resolution:parseFloat(((t=En.RETINA_PREFIX.exec(e))==null?void 0:t[1])??"1"),format:e.split(".").pop(),src:e}}},Fx={extension:{type:q.ResolveParser,priority:-2,name:"resolveJson"},test:e=>En.RETINA_PREFIX.test(e)&&e.endsWith(".json"),parse:th.parse};class Bx{constructor(){this._detections=[],this._initialized=!1,this.resolver=new En,this.loader=new ex,this.cache=mt,this._backgroundLoader=new Vg(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(t={}){var r,o;if(this._initialized){Tt("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,t.defaultSearchParams&&this.resolver.setDefaultSearchParams(t.defaultSearchParams),t.basePath&&(this.resolver.basePath=t.basePath),t.bundleIdentifier&&this.resolver.setBundleIdentifier(t.bundleIdentifier),t.manifest){let a=t.manifest;typeof a=="string"&&(a=await this.load(a)),this.resolver.addManifest(a)}const n=((r=t.texturePreference)==null?void 0:r.resolution)??1,s=typeof n=="number"?[n]:n,i=await this._detectFormats({preferredFormats:(o=t.texturePreference)==null?void 0:o.format,skipDetections:t.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:i,resolution:s}}),t.preferences&&this.setPreferences(t.preferences)}add(t){this.resolver.add(t)}async load(t,n){this._initialized||await this.init();const s=Js(t),i=ie(t).map(a=>{if(typeof a!="string"){const l=this.resolver.getAlias(a);return l.some(u=>!this.resolver.hasKey(u))&&this.add(a),Array.isArray(l)?l[0]:l}return this.resolver.hasKey(a)||this.add({alias:a,src:a}),a}),r=this.resolver.resolve(i),o=await this._mapLoadToResolve(r,n);return s?o[i[0]]:o}addBundle(t,n){this.resolver.addBundle(t,n)}async loadBundle(t,n){this._initialized||await this.init();let s=!1;typeof t=="string"&&(s=!0,t=[t]);const i=this.resolver.resolveBundle(t),r={},o=Object.keys(i);let a=0,l=0;const u=()=>{n==null||n(++a/l)},c=o.map(h=>{const f=i[h];return l+=Object.keys(f).length,this._mapLoadToResolve(f,u).then(d=>{r[h]=d})});return await Promise.all(c),s?r[t[0]]:r}async backgroundLoad(t){this._initialized||await this.init(),typeof t=="string"&&(t=[t]);const n=this.resolver.resolve(t);this._backgroundLoader.add(Object.values(n))}async backgroundLoadBundle(t){this._initialized||await this.init(),typeof t=="string"&&(t=[t]);const n=this.resolver.resolveBundle(t);Object.values(n).forEach(s=>{this._backgroundLoader.add(Object.values(s))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(t){if(typeof t=="string")return mt.get(t);const n={};for(let s=0;s<t.length;s++)n[s]=mt.get(t[s]);return n}async _mapLoadToResolve(t,n){const s=[...new Set(Object.values(t))];this._backgroundLoader.active=!1;const i=await this.loader.load(s,n);this._backgroundLoader.active=!0;const r={};return s.forEach(o=>{const a=i[o.src],l=[o.src];o.alias&&l.push(...o.alias),l.forEach(u=>{r[u]=a}),mt.set(l,a)}),r}async unload(t){this._initialized||await this.init();const n=ie(t).map(i=>typeof i!="string"?i.src:i),s=this.resolver.resolve(n);await this._unloadFromResolved(s)}async unloadBundle(t){this._initialized||await this.init(),t=ie(t);const n=this.resolver.resolveBundle(t),s=Object.keys(n).map(i=>this._unloadFromResolved(n[i]));await Promise.all(s)}async _unloadFromResolved(t){const n=Object.values(t);n.forEach(s=>{mt.remove(s.src)}),await this.loader.unload(n)}async _detectFormats(t){let n=[];t.preferredFormats&&(n=Array.isArray(t.preferredFormats)?t.preferredFormats:[t.preferredFormats]);for(const s of t.detections)t.skipDetections||await s.test()?n=await s.add(n):t.skipDetections||(n=await s.remove(n));return n=n.filter((s,i)=>n.indexOf(s)===i),n}get detections(){return this._detections}setPreferences(t){this.loader.parsers.forEach(n=>{n.config&&Object.keys(n.config).filter(s=>s in t).forEach(s=>{n.config[s]=t[s]})})}}const Wn=new Bx;Qt.handleByList(q.LoadParser,Wn.loader.parsers).handleByList(q.ResolveParser,Wn.resolver.parsers).handleByList(q.CacheParser,Wn.cache.parsers).handleByList(q.DetectionParser,Wn.detections);Qt.add(Xg,qg,Yg,tx,Zg,Qg,Jg,ix,ax,mx,vx,Qu,Ix,Wg,Hg,th,Fx);const Tl={loader:q.LoadParser,resolver:q.ResolveParser,cache:q.CacheParser,detection:q.DetectionParser};Qt.handle(q.Asset,e=>{const t=e.ref;Object.entries(Tl).filter(([n])=>!!t[n]).forEach(([n,s])=>Qt.add(Object.assign(t[n],{extension:t[n].extension??s})))},e=>{const t=e.ref;Object.keys(Tl).filter(n=>!!t[n]).forEach(n=>Qt.remove(t[n]))});class ms extends zt{constructor(t){t instanceof Xt&&(t={context:t});const{context:n,roundPixels:s,...i}=t||{};super({label:"Graphics",...i}),this.canBundle=!0,this.renderPipeId="graphics",this._roundPixels=0,n?this._context=n:this._context=this._ownedContext=new Xt,this._context.on("update",this.onViewUpdate,this),this.allowChildren=!1,this.roundPixels=s??!1}set context(t){t!==this._context&&(this._context.off("update",this.onViewUpdate,this),this._context=t,this._context.on("update",this.onViewUpdate,this),this.onViewUpdate())}get context(){return this._context}get bounds(){return this._context.bounds}addBounds(t){t.addBounds(this._context.bounds)}containsPoint(t){return this._context.containsPoint(t)}get roundPixels(){return!!this._roundPixels}set roundPixels(t){this._roundPixels=t?1:0}onViewUpdate(){if(this._didChangeId+=4096,this._didGraphicsUpdate=!0,this.didViewUpdate)return;this.didViewUpdate=!0;const t=this.renderGroup||this.parentRenderGroup;t&&t.onChildViewUpdate(this)}destroy(t){this._ownedContext&&!t?this._ownedContext.destroy(t):(t===!0||(t==null?void 0:t.context)===!0)&&this._context.destroy(t),this._ownedContext=null,this._context=null,super.destroy(t)}_callContextMethod(t,n){return this.context[t](...n),this}setFillStyle(...t){return this._callContextMethod("setFillStyle",t)}setStrokeStyle(...t){return this._callContextMethod("setStrokeStyle",t)}fill(...t){return this._callContextMethod("fill",t)}stroke(...t){return this._callContextMethod("stroke",t)}texture(...t){return this._callContextMethod("texture",t)}beginPath(){return this._callContextMethod("beginPath",[])}cut(){return this._callContextMethod("cut",[])}arc(...t){return this._callContextMethod("arc",t)}arcTo(...t){return this._callContextMethod("arcTo",t)}arcToSvg(...t){return this._callContextMethod("arcToSvg",t)}bezierCurveTo(...t){return this._callContextMethod("bezierCurveTo",t)}closePath(){return this._callContextMethod("closePath",[])}ellipse(...t){return this._callContextMethod("ellipse",t)}circle(...t){return this._callContextMethod("circle",t)}path(...t){return this._callContextMethod("path",t)}lineTo(...t){return this._callContextMethod("lineTo",t)}moveTo(...t){return this._callContextMethod("moveTo",t)}quadraticCurveTo(...t){return this._callContextMethod("quadraticCurveTo",t)}rect(...t){return this._callContextMethod("rect",t)}roundRect(...t){return this._callContextMethod("roundRect",t)}poly(...t){return this._callContextMethod("poly",t)}regularPoly(...t){return this._callContextMethod("regularPoly",t)}roundPoly(...t){return this._callContextMethod("roundPoly",t)}roundShape(...t){return this._callContextMethod("roundShape",t)}filletRect(...t){return this._callContextMethod("filletRect",t)}chamferRect(...t){return this._callContextMethod("chamferRect",t)}star(...t){return this._callContextMethod("star",t)}svg(...t){return this._callContextMethod("svg",t)}restore(...t){return this._callContextMethod("restore",t)}save(){return this._callContextMethod("save",[])}getTransform(){return this.context.getTransform()}resetTransform(){return this._callContextMethod("resetTransform",[])}rotateTransform(...t){return this._callContextMethod("rotate",t)}scaleTransform(...t){return this._callContextMethod("scale",t)}setTransform(...t){return this._callContextMethod("setTransform",t)}transform(...t){return this._callContextMethod("transform",t)}translateTransform(...t){return this._callContextMethod("translate",t)}clear(){return this._callContextMethod("clear",[])}get fillStyle(){return this._context.fillStyle}set fillStyle(t){this._context.fillStyle=t}get strokeStyle(){return this._context.strokeStyle}set strokeStyle(t){this._context.strokeStyle=t}clone(t=!1){return t?new ms(this._context.clone()):(this._ownedContext=null,new ms(this._context))}lineStyle(t,n,s){ut(ct,"Graphics#lineStyle is no longer needed. Use Graphics#setStrokeStyle to set the stroke style.");const i={};return t&&(i.width=t),n&&(i.color=n),s&&(i.alpha=s),this.context.strokeStyle=i,this}beginFill(t,n){ut(ct,"Graphics#beginFill is no longer needed. Use Graphics#fill to fill the shape with the desired style.");const s={};return t&&(s.color=t),n&&(s.alpha=n),this.context.fillStyle=s,this}endFill(){ut(ct,"Graphics#endFill is no longer needed. Use Graphics#fill to fill the shape with the desired style."),this.context.fill();const t=this.context.strokeStyle;return(t.width!==Xt.defaultStrokeStyle.width||t.color!==Xt.defaultStrokeStyle.color||t.alpha!==Xt.defaultStrokeStyle.alpha)&&this.context.stroke(),this}drawCircle(...t){return ut(ct,"Graphics#drawCircle has been renamed to Graphics#circle"),this._callContextMethod("circle",t)}drawEllipse(...t){return ut(ct,"Graphics#drawEllipse has been renamed to Graphics#ellipse"),this._callContextMethod("ellipse",t)}drawPolygon(...t){return ut(ct,"Graphics#drawPolygon has been renamed to Graphics#poly"),this._callContextMethod("poly",t)}drawRect(...t){return ut(ct,"Graphics#drawRect has been renamed to Graphics#rect"),this._callContextMethod("rect",t)}drawRoundedRect(...t){return ut(ct,"Graphics#drawRoundedRect has been renamed to Graphics#roundRect"),this._callContextMethod("roundRect",t)}drawStar(...t){return ut(ct,"Graphics#drawStar has been renamed to Graphics#star"),this._callContextMethod("star",t)}}Qt.add(Dp,Gp);function Rx(e,t,n){var s={},i=s.noTrailing,r=i===void 0?!1:i,o=s.noLeading,a=o===void 0?!1:o,l=s.debounceMode,u=l===void 0?void 0:l,c,h=!1,f=0;function d(){c&&clearTimeout(c)}function p(m){var y=m||{},v=y.upcomingOnly,x=v===void 0?!1:v;d(),h=!x}function g(){for(var m=arguments.length,y=new Array(m),v=0;v<m;v++)y[v]=arguments[v];var x=this,w=Date.now()-f;if(h)return;function I(){f=Date.now(),t.apply(x,y)}function M(){c=void 0}!a&&u&&!c&&I(),d(),u===void 0&&w>e?a?(f=Date.now(),r||(c=setTimeout(u?M:I,e))):I():r!==!0&&(c=setTimeout(u?M:I,u===void 0?e-w:e))}return g.cancel=p,g}let Oo=[],Qr=!1,fr=function(){Qr||(Qr=!0,window.requestAnimationFrame?window.requestAnimationFrame(kl):setTimeout(kl,66))},kl=function(){Oo.forEach(function(e){e(this)}),Qr=!1},zx=function(e){e&&Oo.push(e)};class Ox{constructor(t,n){this.frameRate=n,Oo.length||window.addEventListener("resize",Rx(this.frameRate,fr)),zx(t)}init(){fr()}destroy(){window.removeEventListener("resize",fr)}}const Un=window.devicePixelRatio;class Lx{constructor(t){this.stage=t.stage,this.size=new _t(window.innerWidth*Un,window.innerHeight*Un),this.padding=new _t,this.vertex=t.vertex,this.init(t.fragment,this.vertex,t.uniforms||{}),this.fill(),this.resize(),this.bind()}init(t,n,s){const i=cs.from({fragment:t,vertex:n});this.filter=new Cu({glProgram:i,resolution:Un,resources:{localUniforms:Object.assign({u_resolution:{value:this.size,type:"vec2<f32>"}},s),timeUniforms:{u_time:{value:0,type:"f32"},u_frame:{value:0,type:"f32"}}}})}fill(){this.background=new ms,this.background.rect(0,0,window.innerWidth,window.innerHeight),this.background.fill({color:0}),this.stage.addChild(this.background)}bind(){new Ox(t=>{this.resize()})}setFragment(t){const n=cs.from({fragment:t,vertex:this.vertex});this.filter.glProgram=n}resize(){this.size.set(window.innerWidth*Un,window.innerHeight*Un),this.filter.resources.localUniforms.uniforms.u_resolution=this.size,this.background.width=this.size.x,this.background.height=this.size.y}getFilter(){return this.filter}destroy(){this.filter.destroy()}}var jx=`precision highp float;

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
}`;const eh=(e,t)=>{const n=e.__vccOpts||e;for(const[s,i]of t)n[s]=i;return n},Nx=e=>(df("data-v-bc066b75"),e=e(),pf(),e),Ux={class:"c-site-title"},Dx=Nx(()=>_e("a",{href:"mailto:nanonum@gmail.com"},"nanonum@gmail.com",-1)),Gx=[Dx],$x={__name:"Shader",props:{shader:String},setup(e){je("WEBGL.NANONUM.COM");const t=e,n=je(!1);let s;const i=o=>{s.getFilter().resources.timeUniforms.uniforms.u_time+=.01*o.deltaTime};async function r(){window.background=new So,await window.background.init({id:"canvas_background",background:"#000",backgroundAlpha:0,resizeTo:window,resolution:window.devicePixelRatio});const o=t.shader??`#version 300 es
    precision highp float;
    uniform float u_time;// 0-1
    out vec4 fragColor;
    void main(){
      fragColor = vec4(0.0, 0.0, pow(sin(u_time * 4.41) * 0.5 + 0.5, .4), 1.0);
    }`;s=new Lx({stage:window.background.stage,fragment:o,vertex:jx,uniforms:{}}),window.background.stage.filters=[s.getFilter()],window.background.ticker.maxFPS=60,window.background.ticker.add(i),window.background.canvas.setAttribute("id","canvas_app"),document.body.appendChild(window.background.canvas),n.value=!0}return xs(()=>{r(t.shader)}),fi(()=>{n.value=!1,window.background.ticker&&window.background.ticker.remove(i),window.background&&window.background.destroy({removeView:!0,stageOptions:{children:!0,texture:!0,baseTexture:!0}})}),di(()=>{s.destroy(),window.background=null}),Yn(()=>t.shader,()=>{s.setFragment(t.shader)}),(o,a)=>(se(),be("div",Ux,Gx))}},Hx=eh($x,[["__scopeId","data-v-bc066b75"]]);var Wx=`precision highp float;

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
}`;const El=(e,t)=>{e.x=t.x,e.y=t.y,e.width=t.width,e.height=t.height,e.top=t.top,e.right=t.right,e.bottom=t.bottom,e.left=t.left},Il=e=>({x:e.x,y:e.y,width:e.width,height:e.height,top:e.top,right:e.right,bottom:e.bottom,left:e.left}),Vx={class:"dev"},Xx=["width","height"],Yx={__name:"Thumbnail",props:{shader:String,alt:String,saturation:{type:Number,default:1},selected:Boolean,active:Boolean,width:Number,height:Number,className:String},setup(e){const t=e,n=je();let s;const i=new _t(110,110),r={};let o;const a=new Mn,l=c=>{n.value&&(El(r,Il(n.value.getBoundingClientRect())),s.x=r.x,s.y=r.y,a.x=r.x,a.y=r.y),(t.active===!0||!t.selected)&&(o.resources.timeUniforms.uniforms.u_time+=.01*c.deltaTime),o.resources.localUniforms.uniforms.u_position.y=r.y,o.resources.localUniforms.uniforms.u_position.x=r.x,o.resources.localUniforms.uniforms.u_posteffect_mix=!t.selected||t.active?1:t.saturation},u=c=>{const h=`
    vec2 aPosition = vec2(
      (gl_FragCoord.x - u_position.x) * u_resolution.x / 110.0  ,
      (gl_FragCoord.y - (u_resolution.y - u_position.y ) + 110.0) * u_resolution.y / 110.0  
    );`;let f=c;return f=f.replace(/gl_FragCoord/ig,"aPosition"),f=f.replace(/uniform[\s]*vec2[\s]*u_resolution;/ig,"uniform vec2 u_resolution;uniform vec2 u_position;uniform float u_posteffect_mix;"),f=f.replace(/void main\([void]*\)[\s]*{/ig,`void main(){${h}`),f=f.replace(/.*}$/,"fragColor.rgb=mix(vec3(min(1.0,fragColor.r+fragColor.g+fragColor.b))*0.3,fragColor.rgb,u_posteffect_mix);}"),f};return xs(async()=>{await Wn.load("./vite.svg"),El(r,Il(n.value.getBoundingClientRect())),o=new Cu({glProgram:cs.from({fragment:u(t.shader),vertex:Wx}),resolution:1,resources:{localUniforms:{u_resolution:{value:new _t(window.innerHeight,window.innerHeight),type:"vec2<f32>"},u_position:{value:new _t(0,0),type:"vec2<f32>"},u_posteffect_mix:{value:0,type:"f32"}},timeUniforms:{u_time:{value:0,type:"f32"}}}}),a.x=r.x,a.y=r.y,a.width=r.width,a.height=r.height,s=new ms,s.circle(r.width/2,r.width/2,r.width/2),s.fill({color:0}),a.mask=s,a.filters=[o],window.ui.stage.addChild(a),i.x=t.width||110,i.y=t.height||110,window.ui.stage.addChild(s),o.resources.localUniforms.uniforms.u_position.y=r.y,o.resources.localUniforms.uniforms.u_position.x=r.x,window.ui.ticker&&window.ui.ticker.add(l),window.addEventListener("resize",c=>{o.resources.localUniforms.uniforms.u_resolution.x=window.innerHeight,o.resources.localUniforms.uniforms.u_resolution.y=window.innerHeight})}),di(()=>{window.ui.ticker&&window.ui.ticker.remove(l),a.destroy()}),(c,h)=>(se(),be(Lt,null,[_e("div",Vx,Wl(e.active),1),_e("div",{class:gs("js-nnfxline"),ref_key:"el",ref:n,width:e.width,height:e.height},null,8,Xx)],64))}},qx=eh(Yx,[["__scopeId","data-v-e1c105d7"]]);var nh={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},Lo={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},Kx=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],ni={CSS:{},springs:{}};function xe(e,t,n){return Math.min(Math.max(e,t),n)}function es(e,t){return e.indexOf(t)>-1}function dr(e,t){return e.apply(null,t)}var $={arr:function(e){return Array.isArray(e)},obj:function(e){return es(Object.prototype.toString.call(e),"Object")},pth:function(e){return $.obj(e)&&e.hasOwnProperty("totalLength")},svg:function(e){return e instanceof SVGElement},inp:function(e){return e instanceof HTMLInputElement},dom:function(e){return e.nodeType||$.svg(e)},str:function(e){return typeof e=="string"},fnc:function(e){return typeof e=="function"},und:function(e){return typeof e>"u"},nil:function(e){return $.und(e)||e===null},hex:function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)},rgb:function(e){return/^rgb/.test(e)},hsl:function(e){return/^hsl/.test(e)},col:function(e){return $.hex(e)||$.rgb(e)||$.hsl(e)},key:function(e){return!nh.hasOwnProperty(e)&&!Lo.hasOwnProperty(e)&&e!=="targets"&&e!=="keyframes"}};function sh(e){var t=/\(([^)]+)\)/.exec(e);return t?t[1].split(",").map(function(n){return parseFloat(n)}):[]}function ih(e,t){var n=sh(e),s=xe($.und(n[0])?1:n[0],.1,100),i=xe($.und(n[1])?100:n[1],.1,100),r=xe($.und(n[2])?10:n[2],.1,100),o=xe($.und(n[3])?0:n[3],.1,100),a=Math.sqrt(i/s),l=r/(2*Math.sqrt(i*s)),u=l<1?a*Math.sqrt(1-l*l):0,c=1,h=l<1?(l*a+-o)/u:-o+a;function f(p){var g=t?t*p/1e3:p;return l<1?g=Math.exp(-g*l*a)*(c*Math.cos(u*g)+h*Math.sin(u*g)):g=(c+h*g)*Math.exp(-g*a),p===0||p===1?p:1-g}function d(){var p=ni.springs[e];if(p)return p;for(var g=1/6,m=0,y=0;;)if(m+=g,f(m)===1){if(y++,y>=16)break}else y=0;var v=m*g*1e3;return ni.springs[e]=v,v}return t?f:d}function Zx(e){return e===void 0&&(e=10),function(t){return Math.ceil(xe(t,1e-6,1)*e)*(1/e)}}var Qx=function(){var e=11,t=1/(e-1);function n(c,h){return 1-3*h+3*c}function s(c,h){return 3*h-6*c}function i(c){return 3*c}function r(c,h,f){return((n(h,f)*c+s(h,f))*c+i(h))*c}function o(c,h,f){return 3*n(h,f)*c*c+2*s(h,f)*c+i(h)}function a(c,h,f,d,p){var g,m,y=0;do m=h+(f-h)/2,g=r(m,d,p)-c,g>0?f=m:h=m;while(Math.abs(g)>1e-7&&++y<10);return m}function l(c,h,f,d){for(var p=0;p<4;++p){var g=o(h,f,d);if(g===0)return h;var m=r(h,f,d)-c;h-=m/g}return h}function u(c,h,f,d){if(!(0<=c&&c<=1&&0<=f&&f<=1))return;var p=new Float32Array(e);if(c!==h||f!==d)for(var g=0;g<e;++g)p[g]=r(g*t,c,f);function m(y){for(var v=0,x=1,w=e-1;x!==w&&p[x]<=y;++x)v+=t;--x;var I=(y-p[x])/(p[x+1]-p[x]),M=v+I*t,R=o(M,c,f);return R>=.001?l(y,M,c,f):R===0?M:a(y,v,v+t,c,f)}return function(y){return c===h&&f===d||y===0||y===1?y:r(m(y),h,d)}}return u}(),rh=function(){var e={linear:function(){return function(s){return s}}},t={Sine:function(){return function(s){return 1-Math.cos(s*Math.PI/2)}},Expo:function(){return function(s){return s?Math.pow(2,10*s-10):0}},Circ:function(){return function(s){return 1-Math.sqrt(1-s*s)}},Back:function(){return function(s){return s*s*(3*s-2)}},Bounce:function(){return function(s){for(var i,r=4;s<((i=Math.pow(2,--r))-1)/11;);return 1/Math.pow(4,3-r)-7.5625*Math.pow((i*3-2)/22-s,2)}},Elastic:function(s,i){s===void 0&&(s=1),i===void 0&&(i=.5);var r=xe(s,1,10),o=xe(i,.1,2);return function(a){return a===0||a===1?a:-r*Math.pow(2,10*(a-1))*Math.sin((a-1-o/(Math.PI*2)*Math.asin(1/r))*(Math.PI*2)/o)}}},n=["Quad","Cubic","Quart","Quint"];return n.forEach(function(s,i){t[s]=function(){return function(r){return Math.pow(r,i+2)}}}),Object.keys(t).forEach(function(s){var i=t[s];e["easeIn"+s]=i,e["easeOut"+s]=function(r,o){return function(a){return 1-i(r,o)(1-a)}},e["easeInOut"+s]=function(r,o){return function(a){return a<.5?i(r,o)(a*2)/2:1-i(r,o)(a*-2+2)/2}},e["easeOutIn"+s]=function(r,o){return function(a){return a<.5?(1-i(r,o)(1-a*2))/2:(i(r,o)(a*2-1)+1)/2}}}),e}();function jo(e,t){if($.fnc(e))return e;var n=e.split("(")[0],s=rh[n],i=sh(e);switch(n){case"spring":return ih(e,t);case"cubicBezier":return dr(Qx,i);case"steps":return dr(Zx,i);default:return dr(s,i)}}function oh(e){try{var t=document.querySelectorAll(e);return t}catch{return}}function bi(e,t){for(var n=e.length,s=arguments.length>=2?arguments[1]:void 0,i=[],r=0;r<n;r++)if(r in e){var o=e[r];t.call(s,o,r,e)&&i.push(o)}return i}function wi(e){return e.reduce(function(t,n){return t.concat($.arr(n)?wi(n):n)},[])}function Fl(e){return $.arr(e)?e:($.str(e)&&(e=oh(e)||e),e instanceof NodeList||e instanceof HTMLCollection?[].slice.call(e):[e])}function No(e,t){return e.some(function(n){return n===t})}function Uo(e){var t={};for(var n in e)t[n]=e[n];return t}function Jr(e,t){var n=Uo(e);for(var s in e)n[s]=t.hasOwnProperty(s)?t[s]:e[s];return n}function Ai(e,t){var n=Uo(e);for(var s in t)n[s]=$.und(e[s])?t[s]:e[s];return n}function Jx(e){var t=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e);return t?"rgba("+t[1]+",1)":e}function tv(e){var t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,n=e.replace(t,function(a,l,u,c){return l+l+u+u+c+c}),s=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n),i=parseInt(s[1],16),r=parseInt(s[2],16),o=parseInt(s[3],16);return"rgba("+i+","+r+","+o+",1)"}function ev(e){var t=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),n=parseInt(t[1],10)/360,s=parseInt(t[2],10)/100,i=parseInt(t[3],10)/100,r=t[4]||1;function o(f,d,p){return p<0&&(p+=1),p>1&&(p-=1),p<1/6?f+(d-f)*6*p:p<1/2?d:p<2/3?f+(d-f)*(2/3-p)*6:f}var a,l,u;if(s==0)a=l=u=i;else{var c=i<.5?i*(1+s):i+s-i*s,h=2*i-c;a=o(h,c,n+1/3),l=o(h,c,n),u=o(h,c,n-1/3)}return"rgba("+a*255+","+l*255+","+u*255+","+r+")"}function nv(e){if($.rgb(e))return Jx(e);if($.hex(e))return tv(e);if($.hsl(e))return ev(e)}function Se(e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);if(t)return t[1]}function sv(e){if(es(e,"translate")||e==="perspective")return"px";if(es(e,"rotate")||es(e,"skew"))return"deg"}function to(e,t){return $.fnc(e)?e(t.target,t.id,t.total):e}function ve(e,t){return e.getAttribute(t)}function Do(e,t,n){var s=Se(t);if(No([n,"deg","rad","turn"],s))return t;var i=ni.CSS[t+n];if(!$.und(i))return i;var r=100,o=document.createElement(e.tagName),a=e.parentNode&&e.parentNode!==document?e.parentNode:document.body;a.appendChild(o),o.style.position="absolute",o.style.width=r+n;var l=r/o.offsetWidth;a.removeChild(o);var u=l*parseFloat(t);return ni.CSS[t+n]=u,u}function ah(e,t,n){if(t in e.style){var s=t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),i=e.style[t]||getComputedStyle(e).getPropertyValue(s)||"0";return n?Do(e,i,n):i}}function Go(e,t){if($.dom(e)&&!$.inp(e)&&(!$.nil(ve(e,t))||$.svg(e)&&e[t]))return"attribute";if($.dom(e)&&No(Kx,t))return"transform";if($.dom(e)&&t!=="transform"&&ah(e,t))return"css";if(e[t]!=null)return"object"}function lh(e){if($.dom(e)){for(var t=e.style.transform||"",n=/(\w+)\(([^)]*)\)/g,s=new Map,i;i=n.exec(t);)s.set(i[1],i[2]);return s}}function iv(e,t,n,s){var i=es(t,"scale")?1:0+sv(t),r=lh(e).get(t)||i;return n&&(n.transforms.list.set(t,r),n.transforms.last=t),s?Do(e,r,s):r}function $o(e,t,n,s){switch(Go(e,t)){case"transform":return iv(e,t,s,n);case"css":return ah(e,t,n);case"attribute":return ve(e,t);default:return e[t]||0}}function Ho(e,t){var n=/^(\*=|\+=|-=)/.exec(e);if(!n)return e;var s=Se(e)||0,i=parseFloat(t),r=parseFloat(e.replace(n[0],""));switch(n[0][0]){case"+":return i+r+s;case"-":return i-r+s;case"*":return i*r+s}}function ch(e,t){if($.col(e))return nv(e);if(/\s/g.test(e))return e;var n=Se(e),s=n?e.substr(0,e.length-n.length):e;return t?s+t:s}function Wo(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function rv(e){return Math.PI*2*ve(e,"r")}function ov(e){return ve(e,"width")*2+ve(e,"height")*2}function av(e){return Wo({x:ve(e,"x1"),y:ve(e,"y1")},{x:ve(e,"x2"),y:ve(e,"y2")})}function uh(e){for(var t=e.points,n=0,s,i=0;i<t.numberOfItems;i++){var r=t.getItem(i);i>0&&(n+=Wo(s,r)),s=r}return n}function lv(e){var t=e.points;return uh(e)+Wo(t.getItem(t.numberOfItems-1),t.getItem(0))}function hh(e){if(e.getTotalLength)return e.getTotalLength();switch(e.tagName.toLowerCase()){case"circle":return rv(e);case"rect":return ov(e);case"line":return av(e);case"polyline":return uh(e);case"polygon":return lv(e)}}function cv(e){var t=hh(e);return e.setAttribute("stroke-dasharray",t),t}function uv(e){for(var t=e.parentNode;$.svg(t)&&$.svg(t.parentNode);)t=t.parentNode;return t}function fh(e,t){var n=t||{},s=n.el||uv(e),i=s.getBoundingClientRect(),r=ve(s,"viewBox"),o=i.width,a=i.height,l=n.viewBox||(r?r.split(" "):[0,0,o,a]);return{el:s,viewBox:l,x:l[0]/1,y:l[1]/1,w:o,h:a,vW:l[2],vH:l[3]}}function hv(e,t){var n=$.str(e)?oh(e)[0]:e,s=t||100;return function(i){return{property:i,el:n,svg:fh(n),totalLength:hh(n)*(s/100)}}}function fv(e,t,n){function s(c){c===void 0&&(c=0);var h=t+c>=1?t+c:0;return e.el.getPointAtLength(h)}var i=fh(e.el,e.svg),r=s(),o=s(-1),a=s(1),l=n?1:i.w/i.vW,u=n?1:i.h/i.vH;switch(e.property){case"x":return(r.x-i.x)*l;case"y":return(r.y-i.y)*u;case"angle":return Math.atan2(a.y-o.y,a.x-o.x)*180/Math.PI}}function Bl(e,t){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,s=ch($.pth(e)?e.totalLength:e,t)+"";return{original:s,numbers:s.match(n)?s.match(n).map(Number):[0],strings:$.str(e)||t?s.split(n):[]}}function Vo(e){var t=e?wi($.arr(e)?e.map(Fl):Fl(e)):[];return bi(t,function(n,s,i){return i.indexOf(n)===s})}function dh(e){var t=Vo(e);return t.map(function(n,s){return{target:n,id:s,total:t.length,transforms:{list:lh(n)}}})}function dv(e,t){var n=Uo(t);if(/^spring/.test(n.easing)&&(n.duration=ih(n.easing)),$.arr(e)){var s=e.length,i=s===2&&!$.obj(e[0]);i?e={value:e}:$.fnc(t.duration)||(n.duration=t.duration/s)}var r=$.arr(e)?e:[e];return r.map(function(o,a){var l=$.obj(o)&&!$.pth(o)?o:{value:o};return $.und(l.delay)&&(l.delay=a?0:t.delay),$.und(l.endDelay)&&(l.endDelay=a===r.length-1?t.endDelay:0),l}).map(function(o){return Ai(o,n)})}function pv(e){for(var t=bi(wi(e.map(function(r){return Object.keys(r)})),function(r){return $.key(r)}).reduce(function(r,o){return r.indexOf(o)<0&&r.push(o),r},[]),n={},s=function(r){var o=t[r];n[o]=e.map(function(a){var l={};for(var u in a)$.key(u)?u==o&&(l.value=a[u]):l[u]=a[u];return l})},i=0;i<t.length;i++)s(i);return n}function mv(e,t){var n=[],s=t.keyframes;s&&(t=Ai(pv(s),t));for(var i in t)$.key(i)&&n.push({name:i,tweens:dv(t[i],e)});return n}function gv(e,t){var n={};for(var s in e){var i=to(e[s],t);$.arr(i)&&(i=i.map(function(r){return to(r,t)}),i.length===1&&(i=i[0])),n[s]=i}return n.duration=parseFloat(n.duration),n.delay=parseFloat(n.delay),n}function xv(e,t){var n;return e.tweens.map(function(s){var i=gv(s,t),r=i.value,o=$.arr(r)?r[1]:r,a=Se(o),l=$o(t.target,e.name,a,t),u=n?n.to.original:l,c=$.arr(r)?r[0]:u,h=Se(c)||Se(l),f=a||h;return $.und(o)&&(o=u),i.from=Bl(c,f),i.to=Bl(Ho(o,c),f),i.start=n?n.end:0,i.end=i.start+i.delay+i.duration+i.endDelay,i.easing=jo(i.easing,i.duration),i.isPath=$.pth(r),i.isPathTargetInsideSVG=i.isPath&&$.svg(t.target),i.isColor=$.col(i.from.original),i.isColor&&(i.round=1),n=i,i})}var ph={css:function(e,t,n){return e.style[t]=n},attribute:function(e,t,n){return e.setAttribute(t,n)},object:function(e,t,n){return e[t]=n},transform:function(e,t,n,s,i){if(s.list.set(t,n),t===s.last||i){var r="";s.list.forEach(function(o,a){r+=a+"("+o+") "}),e.style.transform=r}}};function mh(e,t){var n=dh(e);n.forEach(function(s){for(var i in t){var r=to(t[i],s),o=s.target,a=Se(r),l=$o(o,i,a,s),u=a||Se(l),c=Ho(ch(r,u),l),h=Go(o,i);ph[h](o,i,c,s.transforms,!0)}})}function vv(e,t){var n=Go(e.target,t.name);if(n){var s=xv(t,e),i=s[s.length-1];return{type:n,property:t.name,animatable:e,tweens:s,duration:i.end,delay:s[0].delay,endDelay:i.endDelay}}}function _v(e,t){return bi(wi(e.map(function(n){return t.map(function(s){return vv(n,s)})})),function(n){return!$.und(n)})}function gh(e,t){var n=e.length,s=function(r){return r.timelineOffset?r.timelineOffset:0},i={};return i.duration=n?Math.max.apply(Math,e.map(function(r){return s(r)+r.duration})):t.duration,i.delay=n?Math.min.apply(Math,e.map(function(r){return s(r)+r.delay})):t.delay,i.endDelay=n?i.duration-Math.max.apply(Math,e.map(function(r){return s(r)+r.duration-r.endDelay})):t.endDelay,i}var Rl=0;function yv(e){var t=Jr(nh,e),n=Jr(Lo,e),s=mv(n,e),i=dh(e.targets),r=_v(i,s),o=gh(r,n),a=Rl;return Rl++,Ai(t,{id:a,children:[],animatables:i,animations:r,duration:o.duration,delay:o.delay,endDelay:o.endDelay})}var re=[],xh=function(){var e;function t(){!e&&(!zl()||!vt.suspendWhenDocumentHidden)&&re.length>0&&(e=requestAnimationFrame(n))}function n(i){for(var r=re.length,o=0;o<r;){var a=re[o];a.paused?(re.splice(o,1),r--):(a.tick(i),o++)}e=o>0?requestAnimationFrame(n):void 0}function s(){vt.suspendWhenDocumentHidden&&(zl()?e=cancelAnimationFrame(e):(re.forEach(function(i){return i._onDocumentVisibility()}),xh()))}return typeof document<"u"&&document.addEventListener("visibilitychange",s),t}();function zl(){return!!document&&document.hidden}function vt(e){e===void 0&&(e={});var t=0,n=0,s=0,i,r=0,o=null;function a(v){var x=window.Promise&&new Promise(function(w){return o=w});return v.finished=x,x}var l=yv(e);a(l);function u(){var v=l.direction;v!=="alternate"&&(l.direction=v!=="normal"?"normal":"reverse"),l.reversed=!l.reversed,i.forEach(function(x){return x.reversed=l.reversed})}function c(v){return l.reversed?l.duration-v:v}function h(){t=0,n=c(l.currentTime)*(1/vt.speed)}function f(v,x){x&&x.seek(v-x.timelineOffset)}function d(v){if(l.reversePlayback)for(var w=r;w--;)f(v,i[w]);else for(var x=0;x<r;x++)f(v,i[x])}function p(v){for(var x=0,w=l.animations,I=w.length;x<I;){var M=w[x],R=M.animatable,k=M.tweens,S=k.length-1,C=k[S];S&&(C=bi(k,function(Et){return v<Et.end})[0]||C);for(var Y=xe(v-C.start-C.delay,0,C.duration)/C.duration,j=isNaN(Y)?1:C.easing(Y),O=C.to.strings,U=C.round,st=[],Q=C.to.numbers.length,Z=void 0,nt=0;nt<Q;nt++){var D=void 0,V=C.to.numbers[nt],Wt=C.from.numbers[nt]||0;C.isPath?D=fv(C.value,j*V,C.isPathTargetInsideSVG):D=Wt+j*(V-Wt),U&&(C.isColor&&nt>2||(D=Math.round(D*U)/U)),st.push(D)}var tt=O.length;if(!tt)Z=st[0];else{Z=O[0];for(var kt=0;kt<tt;kt++){O[kt];var ue=O[kt+1],Jt=st[kt];isNaN(Jt)||(ue?Z+=Jt+ue:Z+=Jt+" ")}}ph[M.type](R.target,M.property,Z,R.transforms),M.currentValue=Z,x++}}function g(v){l[v]&&!l.passThrough&&l[v](l)}function m(){l.remaining&&l.remaining!==!0&&l.remaining--}function y(v){var x=l.duration,w=l.delay,I=x-l.endDelay,M=c(v);l.progress=xe(M/x*100,0,100),l.reversePlayback=M<l.currentTime,i&&d(M),!l.began&&l.currentTime>0&&(l.began=!0,g("begin")),!l.loopBegan&&l.currentTime>0&&(l.loopBegan=!0,g("loopBegin")),M<=w&&l.currentTime!==0&&p(0),(M>=I&&l.currentTime!==x||!x)&&p(x),M>w&&M<I?(l.changeBegan||(l.changeBegan=!0,l.changeCompleted=!1,g("changeBegin")),g("change"),p(M)):l.changeBegan&&(l.changeCompleted=!0,l.changeBegan=!1,g("changeComplete")),l.currentTime=xe(M,0,x),l.began&&g("update"),v>=x&&(n=0,m(),l.remaining?(t=s,g("loopComplete"),l.loopBegan=!1,l.direction==="alternate"&&u()):(l.paused=!0,l.completed||(l.completed=!0,g("loopComplete"),g("complete"),!l.passThrough&&"Promise"in window&&(o(),a(l)))))}return l.reset=function(){var v=l.direction;l.passThrough=!1,l.currentTime=0,l.progress=0,l.paused=!0,l.began=!1,l.loopBegan=!1,l.changeBegan=!1,l.completed=!1,l.changeCompleted=!1,l.reversePlayback=!1,l.reversed=v==="reverse",l.remaining=l.loop,i=l.children,r=i.length;for(var x=r;x--;)l.children[x].reset();(l.reversed&&l.loop!==!0||v==="alternate"&&l.loop===1)&&l.remaining++,p(l.reversed?l.duration:0)},l._onDocumentVisibility=h,l.set=function(v,x){return mh(v,x),l},l.tick=function(v){s=v,t||(t=s),y((s+(n-t))*vt.speed)},l.seek=function(v){y(c(v))},l.pause=function(){l.paused=!0,h()},l.play=function(){l.paused&&(l.completed&&l.reset(),l.paused=!1,re.push(l),h(),xh())},l.reverse=function(){u(),l.completed=!l.reversed,h()},l.restart=function(){l.reset(),l.play()},l.remove=function(v){var x=Vo(v);vh(x,l)},l.reset(),l.autoplay&&l.play(),l}function Ol(e,t){for(var n=t.length;n--;)No(e,t[n].animatable.target)&&t.splice(n,1)}function vh(e,t){var n=t.animations,s=t.children;Ol(e,n);for(var i=s.length;i--;){var r=s[i],o=r.animations;Ol(e,o),!o.length&&!r.children.length&&s.splice(i,1)}!n.length&&!s.length&&t.pause()}function bv(e){for(var t=Vo(e),n=re.length;n--;){var s=re[n];vh(t,s)}}function wv(e,t){t===void 0&&(t={});var n=t.direction||"normal",s=t.easing?jo(t.easing):null,i=t.grid,r=t.axis,o=t.from||0,a=o==="first",l=o==="center",u=o==="last",c=$.arr(e),h=parseFloat(c?e[0]:e),f=c?parseFloat(e[1]):0,d=Se(c?e[1]:e)||0,p=t.start||0+(c?h:0),g=[],m=0;return function(y,v,x){if(a&&(o=0),l&&(o=(x-1)/2),u&&(o=x-1),!g.length){for(var w=0;w<x;w++){if(!i)g.push(Math.abs(o-w));else{var I=l?(i[0]-1)/2:o%i[0],M=l?(i[1]-1)/2:Math.floor(o/i[0]),R=w%i[0],k=Math.floor(w/i[0]),S=I-R,C=M-k,Y=Math.sqrt(S*S+C*C);r==="x"&&(Y=-S),r==="y"&&(Y=-C),g.push(Y)}m=Math.max.apply(Math,g)}s&&(g=g.map(function(O){return s(O/m)*m})),n==="reverse"&&(g=g.map(function(O){return r?O<0?O*-1:-O:Math.abs(m-O)}))}var j=c?(f-h)/m:h;return p+j*(Math.round(g[v]*100)/100)+d}}function Av(e){e===void 0&&(e={});var t=vt(e);return t.duration=0,t.add=function(n,s){var i=re.indexOf(t),r=t.children;i>-1&&re.splice(i,1);function o(f){f.passThrough=!0}for(var a=0;a<r.length;a++)o(r[a]);var l=Ai(n,Jr(Lo,e));l.targets=l.targets||e.targets;var u=t.duration;l.autoplay=!1,l.direction=t.direction,l.timelineOffset=$.und(s)?u:Ho(s,u),o(t),t.seek(l.timelineOffset);var c=vt(l);o(c),r.push(c);var h=gh(r,e);return t.delay=h.delay,t.endDelay=h.endDelay,t.duration=h.duration,t.seek(0),t.reset(),t.autoplay&&t.play(),t},t}vt.version="3.2.1";vt.speed=1;vt.suspendWhenDocumentHidden=!0;vt.running=re;vt.remove=bv;vt.get=$o;vt.set=mh;vt.convertPx=Do;vt.path=hv;vt.setDashoffset=cv;vt.stagger=wv;vt.timeline=Av;vt.easing=jo;vt.penner=rh;vt.random=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};const Cv=_e("div",{class:"c-site-title"},[_e("a",{href:"mailto:nanonum@gmail.com"},"nanonum@gmail.com")],-1),Sv={class:"c-shader-title"},Mv=_e("h2",null,"SHADERS",-1),Pv={key:0,class:"p-gallery"},Tv=["onClick","onMouseenterPassiveCapture"],kv={class:"item__container"},Ev=["value"],Iv={__name:"App",setup(e){const t=je(!1);je("shader");const n=ns({saturation:1});je("");const s=je(),i=ns({selected:!1,stage:"shader",shader:null,title:null,path:null});let r=je();r.value=Object.assign({"/src/shaders/_adot.frag":Qd,"/src/shaders/_grad.frag":tp,"/src/shaders/_hole.frag":np,"/src/shaders/_loading.frag":ip,"/src/shaders/_yu.frag":op,"/src/shaders/category/_categorized.frag":lp,"/src/shaders/flare.frag":up,"/src/shaders/fog.frag":fp,"/src/shaders/internet.frag":pp,"/src/shaders/line.frag":gp,"/src/shaders/metaball.frag":vp,"/src/shaders/metaball2.frag":yp,"/src/shaders/moire.frag":wp,"/src/shaders/oil.frag":Cp,"/src/shaders/pattern.frag":Mp,"/src/shaders/ring.frag":Tp,"/src/shaders/ring2.frag":Ep,"/src/shaders/shower.frag":Fp,"/src/shaders/splat.frag":Rp,"/src/shaders/up.frag":Op,"/src/shaders/wip.frag":jp});const o=d=>(new URL(d,location),d.split("/").pop());async function a(){if(window.ui=new So,await window.ui.init({backgroundAlpha:0,resizeTo:window,resolution:1}),window.ui.ticker.maxFPS=20,window.ui.canvas.setAttribute("id","canvas_ui"),document.body.appendChild(window.ui.canvas),await hc(),location.hash){const d=location.hash.split("#")[1]||null,p=location.hash.split("#/shader/")[1]||null;i.path=d,i.filename=p;const g=Object.keys(r.value).find(m=>m.slice(m.lastIndexOf("/")+1)===p);i.shader=r.value[g].default}t.value=!0}const l=Nc(()=>location.href);Yn(()=>i.shader,d=>{vt({targets:n,saturation:i.shader?0:1,easing:"easeOutExpo",duration:800})}),xs(()=>{a()}),fi(()=>{window.ui&&window.ui.destroy({removeView:!0})});function u(){s.value.select()}const c=(d,p,g)=>{i.selected&&i.title===g?i.selected=null:Object.assign(i,{selected:!!g,shader:p,path:location.hash=`/${d}/${g}`,title:g,stage:d})},h=()=>{history.pushState("","","/"),i.selected=!1},f=(d,p,g)=>{i.selected||Object.assign(i,{shader:p,path:`/${d}/${g}`,title:g,stage:d})};return(d,p)=>(se(),be(Lt,null,[Cv,_e("p",Sv,Wl(i.title||"WEBGL.NANONUM.COM"),1),Mv,t.value?(se(),be("ul",Pv,[(se(!0),be(Lt,null,jf(lc(r),(g,m)=>(se(),be(Lt,null,[o(m).indexOf("_")!==0?(se(),be("li",{key:0,class:gs(["p-gallery__item",{active:i.path===`/shader/${o(m)}`}]),onClick:y=>c("shader",g.default,o(m)),onMouseenterPassiveCapture:y=>f("shader",g.default,o(m))},[_e("div",kv,[Bt(qx,{shader:g.default,saturation:n.saturation,width:110,height:110,alt:o(m),selected:i.selected,active:i.title===o(m)},null,8,["shader","saturation","alt","selected","active"])])],42,Tv)):dn("",!0)],64))),256))])):dn("",!0),dn("",!0),t.value&&i.stage==="shader"?(se(),zc(Hx,{key:2,shader:i.shader},null,8,["shader"])):dn("",!0),Bt(Ks,{name:"closeButton"},{default:_r(()=>[i.selected?(se(),be("nav",{key:0,onClick:p[1]||(p[1]=g=>h()),class:"c-close"})):dn("",!0)]),_:1}),Bt(Ks,{name:"permalink"},{default:_r(()=>[t.value&&i.selected?(se(),be("input",{key:0,type:"text",value:l.value,class:"permalink",readonly:"",onClick:p[2]||(p[2]=g=>u()),ref_key:"input_permalink",ref:s},null,8,Ev)):dn("",!0)]),_:1})],64))}};Yd(Iv).mount("#app");export{Nm as $,Iu as A,jt as B,zt as C,xt as D,q as E,Cu as F,xi as G,Va as H,Mn as I,X0 as J,om as K,At as L,at as M,wt as N,Cm as O,_t as P,qa as Q,jr as R,im as S,Es as T,em as U,S0 as V,Hi as W,yt as X,Jc as Y,ut as Z,ct as _,Rr as a,Sn as a0,ei as a1,Fg as a2,_l as a3,Du as a4,wl as a5,jg as a6,ms as a7,mt as a8,t0 as a9,Kr as aa,yl as ab,$u as ac,le as b,We as c,rt as d,Qt as e,cs as f,nm as g,$m as h,il as i,Vm as j,ps as k,Ws as l,Ou as m,za as n,Ao as o,Tu as p,cu as q,h0 as r,vl as s,Jp as t,Xm as u,Gm as v,Tt as w,we as x,Zc as y,Me as z};
