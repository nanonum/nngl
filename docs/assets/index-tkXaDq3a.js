const __vite__fileDeps=["assets/browserAll-CpTtXW2B.js","assets/webworkerAll-B4Q_ZzXQ.js","assets/colorToUniform-BtuiXMrG.js","assets/getBatchSamplersUniformGroup-Cp3EXiYF.js","assets/WebGPURenderer-CdWFms28.js","assets/SharedSystems-C2nF7qmd.js","assets/WebGLRenderer-B9e5aLXF.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function no(e,t){const n=new Set(e.split(","));return s=>n.has(s)}const dt={},_n=[],qt=()=>{},bh=()=>!1,oi=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),so=e=>e.startsWith("onUpdate:"),Ct=Object.assign,io=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},wh=Object.prototype.hasOwnProperty,it=(e,t)=>wh.call(e,t),X=Array.isArray,yn=e=>ai(e)==="[object Map]",Ul=e=>ai(e)==="[object Set]",J=e=>typeof e=="function",bt=e=>typeof e=="string",fn=e=>typeof e=="symbol",ht=e=>e!==null&&typeof e=="object",Dl=e=>(ht(e)||J(e))&&J(e.then)&&J(e.catch),Gl=Object.prototype.toString,ai=e=>Gl.call(e),Ah=e=>ai(e).slice(8,-1),Hl=e=>ai(e)==="[object Object]",ro=e=>bt(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,qn=no(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),li=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Ch=/-(\w)/g,Sn=li(e=>e.replace(Ch,(t,n)=>n?n.toUpperCase():"")),Sh=/\B([A-Z])/g,En=li(e=>e.replace(Sh,"-$1").toLowerCase()),$l=li(e=>e.charAt(0).toUpperCase()+e.slice(1)),Mi=li(e=>e?`on${$l(e)}`:""),De=(e,t)=>!Object.is(e,t),Pi=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Wl=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},Mh=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Ph=e=>{const t=bt(e)?Number(e):NaN;return isNaN(t)?e:t};let Jo;const Vl=()=>Jo||(Jo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function oo(e){if(X(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],i=bt(s)?Ih(s):oo(s);if(i)for(const r in i)t[r]=i[r]}return t}else if(bt(e)||ht(e))return e}const Th=/;(?![^(]*\))/g,kh=/:([^]+)/,Eh=/\/\*[^]*?\*\//g;function Ih(e){const t={};return e.replace(Eh,"").split(Th).forEach(n=>{if(n){const s=n.split(kh);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function _s(e){let t="";if(bt(e))t=e;else if(X(e))for(let n=0;n<e.length;n++){const s=_s(e[n]);s&&(t+=s+" ")}else if(ht(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Fh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Bh=no(Fh);function Xl(e){return!!e||e===""}const Ds=e=>bt(e)?e:e==null?"":X(e)||ht(e)&&(e.toString===Gl||!J(e.toString))?JSON.stringify(e,Yl,2):String(e),Yl=(e,t)=>t&&t.__v_isRef?Yl(e,t.value):yn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,i],r)=>(n[Ti(s,r)+" =>"]=i,n),{})}:Ul(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Ti(n))}:fn(t)?Ti(t):ht(t)&&!X(t)&&!Hl(t)?String(t):t,Ti=(e,t="")=>{var n;return fn(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ht;class zh{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ht,!t&&Ht&&(this.index=(Ht.scopes||(Ht.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Ht;try{return Ht=this,t()}finally{Ht=n}}}on(){Ht=this}off(){Ht=this.parent}stop(t){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Rh(e,t=Ht){t&&t.active&&t.effects.push(e)}function ql(){return Ht}function Oh(e){Ht&&Ht.cleanups.push(e)}let cn;class ao{constructor(t,n,s,i){this.fn=t,this.trigger=n,this.scheduler=s,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Rh(this,i)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,He();for(let t=0;t<this._depsLength;t++){const n=this.deps[t];if(n.computed&&(Lh(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),$e()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=Ne,n=cn;try{return Ne=!0,cn=this,this._runnings++,ta(this),this.fn()}finally{ea(this),this._runnings--,cn=n,Ne=t}}stop(){this.active&&(ta(this),ea(this),this.onStop&&this.onStop(),this.active=!1)}}function Lh(e){return e.value}function ta(e){e._trackId++,e._depsLength=0}function ea(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)Kl(e.deps[t],e);e.deps.length=e._depsLength}}function Kl(e,t){const n=e.get(t);n!==void 0&&t._trackId!==n&&(e.delete(t),e.size===0&&e.cleanup())}let Ne=!0,gr=0;const Zl=[];function He(){Zl.push(Ne),Ne=!1}function $e(){const e=Zl.pop();Ne=e===void 0?!0:e}function lo(){gr++}function co(){for(gr--;!gr&&xr.length;)xr.shift()()}function Ql(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const s=e.deps[e._depsLength];s!==t?(s&&Kl(s,e),e.deps[e._depsLength++]=t):e._depsLength++}}const xr=[];function Jl(e,t,n){lo();for(const s of e.keys()){let i;s._dirtyLevel<t&&(i??(i=e.get(s)===s._trackId))&&(s._shouldSchedule||(s._shouldSchedule=s._dirtyLevel===0),s._dirtyLevel=t),s._shouldSchedule&&(i??(i=e.get(s)===s._trackId))&&(s.trigger(),(!s._runnings||s.allowRecurse)&&s._dirtyLevel!==2&&(s._shouldSchedule=!1,s.scheduler&&xr.push(s.scheduler)))}co()}const tc=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},vr=new WeakMap,un=Symbol(""),_r=Symbol("");function Nt(e,t,n){if(Ne&&cn){let s=vr.get(e);s||vr.set(e,s=new Map);let i=s.get(n);i||s.set(n,i=tc(()=>s.delete(n))),Ql(cn,i)}}function Ae(e,t,n,s,i,r){const o=vr.get(e);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(n==="length"&&X(e)){const l=Number(s);o.forEach((u,c)=>{(c==="length"||!fn(c)&&c>=l)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),t){case"add":X(e)?ro(n)&&a.push(o.get("length")):(a.push(o.get(un)),yn(e)&&a.push(o.get(_r)));break;case"delete":X(e)||(a.push(o.get(un)),yn(e)&&a.push(o.get(_r)));break;case"set":yn(e)&&a.push(o.get(un));break}lo();for(const l of a)l&&Jl(l,4);co()}const jh=no("__proto__,__v_isRef,__isVue"),ec=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(fn)),na=Nh();function Nh(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const s=ot(this);for(let r=0,o=this.length;r<o;r++)Nt(s,"get",r+"");const i=s[t](...n);return i===-1||i===!1?s[t](...n.map(ot)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){He(),lo();const s=ot(this)[t].apply(this,n);return co(),$e(),s}}),e}function Uh(e){fn(e)||(e=String(e));const t=ot(this);return Nt(t,"has",e),t.hasOwnProperty(e)}class nc{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?Jh:oc:r?rc:ic).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const o=X(t);if(!i){if(o&&it(na,n))return Reflect.get(na,n,s);if(n==="hasOwnProperty")return Uh}const a=Reflect.get(t,n,s);return(fn(n)?ec.has(n):jh(n))||(i||Nt(t,"get",n),r)?a:Ut(a)?o&&ro(n)?a:a.value:ht(a)?i?ac(a):rs(a):a}}class sc extends nc{constructor(t=!1){super(!1,t)}set(t,n,s,i){let r=t[n];if(!this._isShallow){const l=os(r);if(!Ks(s)&&!os(s)&&(r=ot(r),s=ot(s)),!X(t)&&Ut(r)&&!Ut(s))return l?!1:(r.value=s,!0)}const o=X(t)&&ro(n)?Number(n)<t.length:it(t,n),a=Reflect.set(t,n,s,i);return t===ot(i)&&(o?De(s,r)&&Ae(t,"set",n,s):Ae(t,"add",n,s)),a}deleteProperty(t,n){const s=it(t,n);t[n];const i=Reflect.deleteProperty(t,n);return i&&s&&Ae(t,"delete",n,void 0),i}has(t,n){const s=Reflect.has(t,n);return(!fn(n)||!ec.has(n))&&Nt(t,"has",n),s}ownKeys(t){return Nt(t,"iterate",X(t)?"length":un),Reflect.ownKeys(t)}}class Dh extends nc{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Gh=new sc,Hh=new Dh,$h=new sc(!0);const uo=e=>e,ci=e=>Reflect.getPrototypeOf(e);function bs(e,t,n=!1,s=!1){e=e.__v_raw;const i=ot(e),r=ot(t);n||(De(t,r)&&Nt(i,"get",t),Nt(i,"get",r));const{has:o}=ci(i),a=s?uo:n?po:as;if(o.call(i,t))return a(e.get(t));if(o.call(i,r))return a(e.get(r));e!==i&&e.get(t)}function ws(e,t=!1){const n=this.__v_raw,s=ot(n),i=ot(e);return t||(De(e,i)&&Nt(s,"has",e),Nt(s,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function As(e,t=!1){return e=e.__v_raw,!t&&Nt(ot(e),"iterate",un),Reflect.get(e,"size",e)}function sa(e){e=ot(e);const t=ot(this);return ci(t).has.call(t,e)||(t.add(e),Ae(t,"add",e,e)),this}function ia(e,t){t=ot(t);const n=ot(this),{has:s,get:i}=ci(n);let r=s.call(n,e);r||(e=ot(e),r=s.call(n,e));const o=i.call(n,e);return n.set(e,t),r?De(t,o)&&Ae(n,"set",e,t):Ae(n,"add",e,t),this}function ra(e){const t=ot(this),{has:n,get:s}=ci(t);let i=n.call(t,e);i||(e=ot(e),i=n.call(t,e)),s&&s.call(t,e);const r=t.delete(e);return i&&Ae(t,"delete",e,void 0),r}function oa(){const e=ot(this),t=e.size!==0,n=e.clear();return t&&Ae(e,"clear",void 0,void 0),n}function Cs(e,t){return function(s,i){const r=this,o=r.__v_raw,a=ot(o),l=t?uo:e?po:as;return!e&&Nt(a,"iterate",un),o.forEach((u,c)=>s.call(i,l(u),l(c),r))}}function Ss(e,t,n){return function(...s){const i=this.__v_raw,r=ot(i),o=yn(r),a=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,u=i[e](...s),c=n?uo:t?po:as;return!t&&Nt(r,"iterate",l?_r:un),{next(){const{value:h,done:f}=u.next();return f?{value:h,done:f}:{value:a?[c(h[0]),c(h[1])]:c(h),done:f}},[Symbol.iterator](){return this}}}}function Ie(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Wh(){const e={get(r){return bs(this,r)},get size(){return As(this)},has:ws,add:sa,set:ia,delete:ra,clear:oa,forEach:Cs(!1,!1)},t={get(r){return bs(this,r,!1,!0)},get size(){return As(this)},has:ws,add:sa,set:ia,delete:ra,clear:oa,forEach:Cs(!1,!0)},n={get(r){return bs(this,r,!0)},get size(){return As(this,!0)},has(r){return ws.call(this,r,!0)},add:Ie("add"),set:Ie("set"),delete:Ie("delete"),clear:Ie("clear"),forEach:Cs(!0,!1)},s={get(r){return bs(this,r,!0,!0)},get size(){return As(this,!0)},has(r){return ws.call(this,r,!0)},add:Ie("add"),set:Ie("set"),delete:Ie("delete"),clear:Ie("clear"),forEach:Cs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=Ss(r,!1,!1),n[r]=Ss(r,!0,!1),t[r]=Ss(r,!1,!0),s[r]=Ss(r,!0,!0)}),[e,n,t,s]}const[Vh,Xh,Yh,qh]=Wh();function ho(e,t){const n=t?e?qh:Yh:e?Xh:Vh;return(s,i,r)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?s:Reflect.get(it(n,i)&&i in s?n:s,i,r)}const Kh={get:ho(!1,!1)},Zh={get:ho(!1,!0)},Qh={get:ho(!0,!1)};const ic=new WeakMap,rc=new WeakMap,oc=new WeakMap,Jh=new WeakMap;function tf(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ef(e){return e.__v_skip||!Object.isExtensible(e)?0:tf(Ah(e))}function rs(e){return os(e)?e:fo(e,!1,Gh,Kh,ic)}function nf(e){return fo(e,!1,$h,Zh,rc)}function ac(e){return fo(e,!0,Hh,Qh,oc)}function fo(e,t,n,s,i){if(!ht(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=i.get(e);if(r)return r;const o=ef(e);if(o===0)return e;const a=new Proxy(e,o===2?s:n);return i.set(e,a),a}function Kn(e){return os(e)?Kn(e.__v_raw):!!(e&&e.__v_isReactive)}function os(e){return!!(e&&e.__v_isReadonly)}function Ks(e){return!!(e&&e.__v_isShallow)}function lc(e){return e?!!e.__v_raw:!1}function ot(e){const t=e&&e.__v_raw;return t?ot(t):e}function sf(e){return Object.isExtensible(e)&&Wl(e,"__v_skip",!0),e}const as=e=>ht(e)?rs(e):e,po=e=>ht(e)?ac(e):e;class cc{constructor(t,n,s,i){this.getter=t,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new ao(()=>t(this._value),()=>Gs(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const t=ot(this);return(!t._cacheable||t.effect.dirty)&&De(t._value,t._value=t.effect.run())&&Gs(t,4),uc(t),t.effect._dirtyLevel>=2&&Gs(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function rf(e,t,n=!1){let s,i;const r=J(e);return r?(s=e,i=qt):(s=e.get,i=e.set),new cc(s,i,r||!i,n)}function uc(e){var t;Ne&&cn&&(e=ot(e),Ql(cn,(t=e.dep)!=null?t:e.dep=tc(()=>e.dep=void 0,e instanceof cc?e:void 0)))}function Gs(e,t=4,n){e=ot(e);const s=e.dep;s&&Jl(s,t)}function Ut(e){return!!(e&&e.__v_isRef===!0)}function se(e){return of(e,!1)}function of(e,t){return Ut(e)?e:new af(e,t)}class af{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:ot(t),this._value=n?t:as(t)}get value(){return uc(this),this._value}set value(t){const n=this.__v_isShallow||Ks(t)||os(t);t=n?t:ot(t),De(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:as(t),Gs(this,4))}}function rn(e){return Ut(e)?e.value:e}const lf={get:(e,t,n)=>rn(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const i=e[t];return Ut(i)&&!Ut(n)?(i.value=n,!0):Reflect.set(e,t,n,s)}};function hc(e){return Kn(e)?e:new Proxy(e,lf)}/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ue(e,t,n,s){try{return s?e(...s):e()}catch(i){ui(i,t,n)}}function Qt(e,t,n,s){if(J(e)){const i=Ue(e,t,n,s);return i&&Dl(i)&&i.catch(r=>{ui(r,t,n)}),i}if(X(e)){const i=[];for(let r=0;r<e.length;r++)i.push(Qt(e[r],t,n,s));return i}}function ui(e,t,n,s=!0){const i=t?t.vnode:null;if(t){let r=t.parent;const o=t.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){const u=r.ec;if(u){for(let c=0;c<u.length;c++)if(u[c](e,o,a)===!1)return}r=r.parent}const l=t.appContext.config.errorHandler;if(l){He(),Ue(l,null,10,[e,o,a]),$e();return}}cf(e,n,i,s)}function cf(e,t,n,s=!0){console.error(e)}let ls=!1,yr=!1;const Ft=[];let ve=0;const bn=[];let Re=null,on=0;const fc=Promise.resolve();let mo=null;function dc(e){const t=mo||fc;return e?t.then(this?e.bind(this):e):t}function uf(e){let t=ve+1,n=Ft.length;for(;t<n;){const s=t+n>>>1,i=Ft[s],r=cs(i);r<e||r===e&&i.pre?t=s+1:n=s}return t}function go(e){(!Ft.length||!Ft.includes(e,ls&&e.allowRecurse?ve+1:ve))&&(e.id==null?Ft.push(e):Ft.splice(uf(e.id),0,e),pc())}function pc(){!ls&&!yr&&(yr=!0,mo=fc.then(gc))}function hf(e){const t=Ft.indexOf(e);t>ve&&Ft.splice(t,1)}function ff(e){X(e)?bn.push(...e):(!Re||!Re.includes(e,e.allowRecurse?on+1:on))&&bn.push(e),pc()}function aa(e,t,n=ls?ve+1:0){for(;n<Ft.length;n++){const s=Ft[n];if(s&&s.pre){if(e&&s.id!==e.uid)continue;Ft.splice(n,1),n--,s()}}}function mc(e){if(bn.length){const t=[...new Set(bn)].sort((n,s)=>cs(n)-cs(s));if(bn.length=0,Re){Re.push(...t);return}for(Re=t,on=0;on<Re.length;on++)Re[on]();Re=null,on=0}}const cs=e=>e.id==null?1/0:e.id,df=(e,t)=>{const n=cs(e)-cs(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function gc(e){yr=!1,ls=!0,Ft.sort(df);try{for(ve=0;ve<Ft.length;ve++){const t=Ft[ve];t&&t.active!==!1&&Ue(t,null,14)}}finally{ve=0,Ft.length=0,mc(),ls=!1,mo=null,(Ft.length||bn.length)&&gc()}}function pf(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||dt;let i=n;const r=t.startsWith("update:"),o=r&&t.slice(7);if(o&&o in s){const c=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[c]||dt;f&&(i=n.map(d=>bt(d)?d.trim():d)),h&&(i=n.map(Mh))}let a,l=s[a=Mi(t)]||s[a=Mi(Sn(t))];!l&&r&&(l=s[a=Mi(En(t))]),l&&Qt(l,e,6,i);const u=s[a+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Qt(u,e,6,i)}}function xc(e,t,n=!1){const s=t.emitsCache,i=s.get(e);if(i!==void 0)return i;const r=e.emits;let o={},a=!1;if(!J(e)){const l=u=>{const c=xc(u,t,!0);c&&(a=!0,Ct(o,c))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!r&&!a?(ht(e)&&s.set(e,null),null):(X(r)?r.forEach(l=>o[l]=null):Ct(o,r),ht(e)&&s.set(e,o),o)}function hi(e,t){return!e||!oi(t)?!1:(t=t.slice(2).replace(/Once$/,""),it(e,t[0].toLowerCase()+t.slice(1))||it(e,En(t))||it(e,t))}let ae=null,vc=null;function Zs(e){const t=ae;return ae=e,vc=e&&e.type.__scopeId||null,t}function Hs(e,t=ae,n){if(!t||e._n)return e;const s=(...i)=>{s._d&&va(-1);const r=Zs(t);let o;try{o=e(...i)}finally{Zs(r),s._d&&va(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function ki(e){const{type:t,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:a,emit:l,render:u,renderCache:c,props:h,data:f,setupState:d,ctx:p,inheritAttrs:g}=e,m=Zs(e);let y,v;try{if(n.shapeFlag&4){const w=i||s,E=w;y=xe(u.call(E,w,c,h,d,f,p)),v=a}else{const w=t;y=xe(w.length>1?w(h,{attrs:a,slots:o,emit:l}):w(h,null)),v=t.props?a:mf(a)}}catch(w){Jn.length=0,ui(w,e,1),y=It(Kt)}let x=y;if(v&&g!==!1){const w=Object.keys(v),{shapeFlag:E}=x;w.length&&E&7&&(r&&w.some(so)&&(v=gf(v,r)),x=Ge(x,v,!1,!0))}return n.dirs&&(x=Ge(x,null,!1,!0),x.dirs=x.dirs?x.dirs.concat(n.dirs):n.dirs),n.transition&&(x.transition=n.transition),y=x,Zs(m),y}const mf=e=>{let t;for(const n in e)(n==="class"||n==="style"||oi(n))&&((t||(t={}))[n]=e[n]);return t},gf=(e,t)=>{const n={};for(const s in e)(!so(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function xf(e,t,n){const{props:s,children:i,component:r}=e,{props:o,children:a,patchFlag:l}=t,u=r.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?la(s,o,u):!!o;if(l&8){const c=t.dynamicProps;for(let h=0;h<c.length;h++){const f=c[h];if(o[f]!==s[f]&&!hi(u,f))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?la(s,o,u):!0:!!o;return!1}function la(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(t[r]!==e[r]&&!hi(n,r))return!0}return!1}function vf({vnode:e,parent:t},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=n,t=t.parent;else break}}const _f=Symbol.for("v-ndc"),yf=e=>e.__isSuspense;function bf(e,t){t&&t.pendingBranch?X(e)?t.effects.push(...e):t.effects.push(e):ff(e)}const wf=Symbol.for("v-scx"),Af=()=>Ws(wf);function Cf(e,t){return xo(e,null,t)}const Ms={};function wn(e,t,n){return xo(e,t,n)}function xo(e,t,{immediate:n,deep:s,flush:i,once:r,onTrack:o,onTrigger:a}=dt){if(t&&r){const M=t;t=(...z)=>{M(...z),E()}}const l=Bt,u=M=>s===!0?M:xn(M,s===!1?1:void 0);let c,h=!1,f=!1;if(Ut(e)?(c=()=>e.value,h=Ks(e)):Kn(e)?(c=()=>u(e),h=!0):X(e)?(f=!0,h=e.some(M=>Kn(M)||Ks(M)),c=()=>e.map(M=>{if(Ut(M))return M.value;if(Kn(M))return u(M);if(J(M))return Ue(M,l,2)})):J(e)?t?c=()=>Ue(e,l,2):c=()=>(d&&d(),Qt(e,l,3,[p])):c=qt,t&&s){const M=c;c=()=>xn(M())}let d,p=M=>{d=x.onStop=()=>{Ue(M,l,4),d=x.onStop=void 0}},g;if(xi)if(p=qt,t?n&&Qt(t,l,3,[c(),f?[]:void 0,p]):c(),i==="sync"){const M=Af();g=M.__watcherHandles||(M.__watcherHandles=[])}else return qt;let m=f?new Array(e.length).fill(Ms):Ms;const y=()=>{if(!(!x.active||!x.dirty))if(t){const M=x.run();(s||h||(f?M.some((z,k)=>De(z,m[k])):De(M,m)))&&(d&&d(),Qt(t,l,3,[M,m===Ms?void 0:f&&m[0]===Ms?[]:m,p]),m=M)}else x.run()};y.allowRecurse=!!t;let v;i==="sync"?v=y:i==="post"?v=()=>Ot(y,l&&l.suspense):(y.pre=!0,l&&(y.id=l.uid),v=()=>go(y));const x=new ao(c,qt,v),w=ql(),E=()=>{x.stop(),w&&io(w.effects,x)};return t?n?y():m=x.run():i==="post"?Ot(x.run.bind(x),l&&l.suspense):x.run(),g&&g.push(E),E}function Sf(e,t,n){const s=this.proxy,i=bt(e)?e.includes(".")?_c(s,e):()=>s[e]:e.bind(s,s);let r;J(t)?r=t:(r=t.handler,n=t);const o=ys(this),a=xo(i,r.bind(s),n);return o(),a}function _c(e,t){const n=t.split(".");return()=>{let s=e;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function xn(e,t=1/0,n){if(t<=0||!ht(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,Ut(e))xn(e.value,t,n);else if(X(e))for(let s=0;s<e.length;s++)xn(e[s],t,n);else if(Ul(e)||yn(e))e.forEach(s=>{xn(s,t,n)});else if(Hl(e))for(const s in e)xn(e[s],t,n);return e}function qe(e,t,n,s){const i=e.dirs,r=t&&t.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(He(),Qt(l,n,8,[e.el,a,e,t]),$e())}}const Oe=Symbol("_leaveCb"),Ps=Symbol("_enterCb");function Mf(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return In(()=>{e.isMounted=!0}),pi(()=>{e.isUnmounting=!0}),e}const Xt=[Function,Array],yc={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Xt,onEnter:Xt,onAfterEnter:Xt,onEnterCancelled:Xt,onBeforeLeave:Xt,onLeave:Xt,onAfterLeave:Xt,onLeaveCancelled:Xt,onBeforeAppear:Xt,onAppear:Xt,onAfterAppear:Xt,onAppearCancelled:Xt},Pf={name:"BaseTransition",props:yc,setup(e,{slots:t}){const n=Nc(),s=Mf();return()=>{const i=t.default&&wc(t.default(),!0);if(!i||!i.length)return;let r=i[0];if(i.length>1){for(const f of i)if(f.type!==Kt){r=f;break}}const o=ot(e),{mode:a}=o;if(s.isLeaving)return Ei(r);const l=ca(r);if(!l)return Ei(r);const u=br(l,o,s,n);wr(l,u);const c=n.subTree,h=c&&ca(c);if(h&&h.type!==Kt&&!an(l,h)){const f=br(h,o,s,n);if(wr(h,f),a==="out-in"&&l.type!==Kt)return s.isLeaving=!0,f.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},Ei(r);a==="in-out"&&l.type!==Kt&&(f.delayLeave=(d,p,g)=>{const m=bc(s,h);m[String(h.key)]=h,d[Oe]=()=>{p(),d[Oe]=void 0,delete u.delayedLeave},u.delayedLeave=g})}return r}}},Tf=Pf;function bc(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function br(e,t,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:u,onEnterCancelled:c,onBeforeLeave:h,onLeave:f,onAfterLeave:d,onLeaveCancelled:p,onBeforeAppear:g,onAppear:m,onAfterAppear:y,onAppearCancelled:v}=t,x=String(e.key),w=bc(n,e),E=(k,S)=>{k&&Qt(k,s,9,S)},M=(k,S)=>{const C=S[1];E(k,S),X(k)?k.every(Y=>Y.length<=1)&&C():k.length<=1&&C()},z={mode:r,persisted:o,beforeEnter(k){let S=a;if(!n.isMounted)if(i)S=g||a;else return;k[Oe]&&k[Oe](!0);const C=w[x];C&&an(e,C)&&C.el[Oe]&&C.el[Oe](),E(S,[k])},enter(k){let S=l,C=u,Y=c;if(!n.isMounted)if(i)S=m||l,C=y||u,Y=v||c;else return;let j=!1;const O=k[Ps]=U=>{j||(j=!0,U?E(Y,[k]):E(C,[k]),z.delayedLeave&&z.delayedLeave(),k[Ps]=void 0)};S?M(S,[k,O]):O()},leave(k,S){const C=String(e.key);if(k[Ps]&&k[Ps](!0),n.isUnmounting)return S();E(h,[k]);let Y=!1;const j=k[Oe]=O=>{Y||(Y=!0,S(),O?E(p,[k]):E(d,[k]),k[Oe]=void 0,w[C]===e&&delete w[C])};w[C]=e,f?M(f,[k,j]):j()},clone(k){return br(k,t,n,s)}};return z}function Ei(e){if(fi(e))return e=Ge(e),e.children=null,e}function ca(e){if(!fi(e))return e;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&J(n.default))return n.default()}}function wr(e,t){e.shapeFlag&6&&e.component?wr(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function wc(e,t=!1,n){let s=[],i=0;for(let r=0;r<e.length;r++){let o=e[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===Lt?(o.patchFlag&128&&i++,s=s.concat(wc(o.children,t,a))):(t||o.type!==Kt)&&s.push(a!=null?Ge(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}const $s=e=>!!e.type.__asyncLoader,fi=e=>e.type.__isKeepAlive;function kf(e,t){Ac(e,"a",t)}function Ef(e,t){Ac(e,"da",t)}function Ac(e,t,n=Bt){const s=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(di(t,s,n),n){let i=n.parent;for(;i&&i.parent;)fi(i.parent.vnode)&&If(s,t,n,i),i=i.parent}}function If(e,t,n,s){const i=di(t,e,s,!0);mi(()=>{io(s[t],i)},n)}function di(e,t,n=Bt,s=!1){if(n){const i=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;He();const a=ys(n),l=Qt(t,n,e,o);return a(),$e(),l});return s?i.unshift(r):i.push(r),r}}const Pe=e=>(t,n=Bt)=>(!xi||e==="sp")&&di(e,(...s)=>t(...s),n),Ff=Pe("bm"),In=Pe("m"),Bf=Pe("bu"),zf=Pe("u"),pi=Pe("bum"),mi=Pe("um"),Rf=Pe("sp"),Of=Pe("rtg"),Lf=Pe("rtc");function jf(e,t=Bt){di("ec",e,t)}function Nf(e,t,n,s){let i;const r=n;if(X(e)||bt(e)){i=new Array(e.length);for(let o=0,a=e.length;o<a;o++)i[o]=t(e[o],o,void 0,r)}else if(typeof e=="number"){i=new Array(e);for(let o=0;o<e;o++)i[o]=t(o+1,o,void 0,r)}else if(ht(e))if(e[Symbol.iterator])i=Array.from(e,(o,a)=>t(o,a,void 0,r));else{const o=Object.keys(e);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const u=o[a];i[a]=t(e[u],u,a,r)}}else i=[];return i}const Ar=e=>e?Uc(e)?bo(e)||e.proxy:Ar(e.parent):null,Zn=Ct(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ar(e.parent),$root:e=>Ar(e.root),$emit:e=>e.emit,$options:e=>vo(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,go(e.update)}),$nextTick:e=>e.n||(e.n=dc.bind(e.proxy)),$watch:e=>Sf.bind(e)}),Ii=(e,t)=>e!==dt&&!e.__isScriptSetup&&it(e,t),Uf={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=e;let u;if(t[0]!=="$"){const d=o[t];if(d!==void 0)switch(d){case 1:return s[t];case 2:return i[t];case 4:return n[t];case 3:return r[t]}else{if(Ii(s,t))return o[t]=1,s[t];if(i!==dt&&it(i,t))return o[t]=2,i[t];if((u=e.propsOptions[0])&&it(u,t))return o[t]=3,r[t];if(n!==dt&&it(n,t))return o[t]=4,n[t];Cr&&(o[t]=0)}}const c=Zn[t];let h,f;if(c)return t==="$attrs"&&Nt(e.attrs,"get",""),c(e);if((h=a.__cssModules)&&(h=h[t]))return h;if(n!==dt&&it(n,t))return o[t]=4,n[t];if(f=l.config.globalProperties,it(f,t))return f[t]},set({_:e},t,n){const{data:s,setupState:i,ctx:r}=e;return Ii(i,t)?(i[t]=n,!0):s!==dt&&it(s,t)?(s[t]=n,!0):it(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||e!==dt&&it(e,o)||Ii(t,o)||(a=r[0])&&it(a,o)||it(s,o)||it(Zn,o)||it(i.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:it(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function ua(e){return X(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Cr=!0;function Df(e){const t=vo(e),n=e.proxy,s=e.ctx;Cr=!1,t.beforeCreate&&ha(t.beforeCreate,e,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:u,created:c,beforeMount:h,mounted:f,beforeUpdate:d,updated:p,activated:g,deactivated:m,beforeDestroy:y,beforeUnmount:v,destroyed:x,unmounted:w,render:E,renderTracked:M,renderTriggered:z,errorCaptured:k,serverPrefetch:S,expose:C,inheritAttrs:Y,components:j,directives:O,filters:U}=t;if(u&&Gf(u,s,null),o)for(const Z in o){const nt=o[Z];J(nt)&&(s[Z]=nt.bind(n))}if(i){const Z=i.call(n,n);ht(Z)&&(e.data=rs(Z))}if(Cr=!0,r)for(const Z in r){const nt=r[Z],D=J(nt)?nt.bind(n,n):J(nt.get)?nt.get.bind(n,n):qt,V=!J(nt)&&J(nt.set)?nt.set.bind(n):qt,Vt=wo({get:D,set:V});Object.defineProperty(s,Z,{enumerable:!0,configurable:!0,get:()=>Vt.value,set:tt=>Vt.value=tt})}if(a)for(const Z in a)Cc(a[Z],s,n,Z);if(l){const Z=J(l)?l.call(n):l;Reflect.ownKeys(Z).forEach(nt=>{Yf(nt,Z[nt])})}c&&ha(c,e,"c");function Q(Z,nt){X(nt)?nt.forEach(D=>Z(D.bind(n))):nt&&Z(nt.bind(n))}if(Q(Ff,h),Q(In,f),Q(Bf,d),Q(zf,p),Q(kf,g),Q(Ef,m),Q(jf,k),Q(Lf,M),Q(Of,z),Q(pi,v),Q(mi,w),Q(Rf,S),X(C))if(C.length){const Z=e.exposed||(e.exposed={});C.forEach(nt=>{Object.defineProperty(Z,nt,{get:()=>n[nt],set:D=>n[nt]=D})})}else e.exposed||(e.exposed={});E&&e.render===qt&&(e.render=E),Y!=null&&(e.inheritAttrs=Y),j&&(e.components=j),O&&(e.directives=O)}function Gf(e,t,n=qt){X(e)&&(e=Sr(e));for(const s in e){const i=e[s];let r;ht(i)?"default"in i?r=Ws(i.from||s,i.default,!0):r=Ws(i.from||s):r=Ws(i),Ut(r)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[s]=r}}function ha(e,t,n){Qt(X(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function Cc(e,t,n,s){const i=s.includes(".")?_c(n,s):()=>n[s];if(bt(e)){const r=t[e];J(r)&&wn(i,r)}else if(J(e))wn(i,e.bind(n));else if(ht(e))if(X(e))e.forEach(r=>Cc(r,t,n,s));else{const r=J(e.handler)?e.handler.bind(n):t[e.handler];J(r)&&wn(i,r,e)}}function vo(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=e.appContext,a=r.get(t);let l;return a?l=a:!i.length&&!n&&!s?l=t:(l={},i.length&&i.forEach(u=>Qs(l,u,o,!0)),Qs(l,t,o)),ht(t)&&r.set(t,l),l}function Qs(e,t,n,s=!1){const{mixins:i,extends:r}=t;r&&Qs(e,r,n,!0),i&&i.forEach(o=>Qs(e,o,n,!0));for(const o in t)if(!(s&&o==="expose")){const a=Hf[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const Hf={data:fa,props:da,emits:da,methods:$n,computed:$n,beforeCreate:zt,created:zt,beforeMount:zt,mounted:zt,beforeUpdate:zt,updated:zt,beforeDestroy:zt,beforeUnmount:zt,destroyed:zt,unmounted:zt,activated:zt,deactivated:zt,errorCaptured:zt,serverPrefetch:zt,components:$n,directives:$n,watch:Wf,provide:fa,inject:$f};function fa(e,t){return t?e?function(){return Ct(J(e)?e.call(this,this):e,J(t)?t.call(this,this):t)}:t:e}function $f(e,t){return $n(Sr(e),Sr(t))}function Sr(e){if(X(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function zt(e,t){return e?[...new Set([].concat(e,t))]:t}function $n(e,t){return e?Ct(Object.create(null),e,t):t}function da(e,t){return e?X(e)&&X(t)?[...new Set([...e,...t])]:Ct(Object.create(null),ua(e),ua(t??{})):t}function Wf(e,t){if(!e)return t;if(!t)return e;const n=Ct(Object.create(null),e);for(const s in t)n[s]=zt(e[s],t[s]);return n}function Sc(){return{app:null,config:{isNativeTag:bh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Vf=0;function Xf(e,t){return function(s,i=null){J(s)||(s=Ct({},s)),i!=null&&!ht(i)&&(i=null);const r=Sc(),o=new WeakSet;let a=!1;const l=r.app={_uid:Vf++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:_d,get config(){return r.config},set config(u){},use(u,...c){return o.has(u)||(u&&J(u.install)?(o.add(u),u.install(l,...c)):J(u)&&(o.add(u),u(l,...c))),l},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),l},component(u,c){return c?(r.components[u]=c,l):r.components[u]},directive(u,c){return c?(r.directives[u]=c,l):r.directives[u]},mount(u,c,h){if(!a){const f=It(s,i);return f.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),c&&t?t(f,u):e(f,u,h),a=!0,l._container=u,u.__vue_app__=l,bo(f.component)||f.component.proxy}},unmount(){a&&(e(null,l._container),delete l._container.__vue_app__)},provide(u,c){return r.provides[u]=c,l},runWithContext(u){const c=Qn;Qn=l;try{return u()}finally{Qn=c}}};return l}}let Qn=null;function Yf(e,t){if(Bt){let n=Bt.provides;const s=Bt.parent&&Bt.parent.provides;s===n&&(n=Bt.provides=Object.create(s)),n[e]=t}}function Ws(e,t,n=!1){const s=Bt||ae;if(s||Qn){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Qn._context.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&J(t)?t.call(s&&s.proxy):t}}const Mc={},Pc=()=>Object.create(Mc),Tc=e=>Object.getPrototypeOf(e)===Mc;function qf(e,t,n,s=!1){const i={},r=Pc();e.propsDefaults=Object.create(null),kc(e,t,i,r);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);n?e.props=s?i:nf(i):e.type.props?e.props=i:e.props=r,e.attrs=r}function Kf(e,t,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=e,a=ot(i),[l]=e.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const c=e.vnode.dynamicProps;for(let h=0;h<c.length;h++){let f=c[h];if(hi(e.emitsOptions,f))continue;const d=t[f];if(l)if(it(r,f))d!==r[f]&&(r[f]=d,u=!0);else{const p=Sn(f);i[p]=Mr(l,a,p,d,e,!1)}else d!==r[f]&&(r[f]=d,u=!0)}}}else{kc(e,t,i,r)&&(u=!0);let c;for(const h in a)(!t||!it(t,h)&&((c=En(h))===h||!it(t,c)))&&(l?n&&(n[h]!==void 0||n[c]!==void 0)&&(i[h]=Mr(l,a,h,void 0,e,!0)):delete i[h]);if(r!==a)for(const h in r)(!t||!it(t,h))&&(delete r[h],u=!0)}u&&Ae(e.attrs,"set","")}function kc(e,t,n,s){const[i,r]=e.propsOptions;let o=!1,a;if(t)for(let l in t){if(qn(l))continue;const u=t[l];let c;i&&it(i,c=Sn(l))?!r||!r.includes(c)?n[c]=u:(a||(a={}))[c]=u:hi(e.emitsOptions,l)||(!(l in s)||u!==s[l])&&(s[l]=u,o=!0)}if(r){const l=ot(n),u=a||dt;for(let c=0;c<r.length;c++){const h=r[c];n[h]=Mr(i,l,h,u[h],e,!it(u,h))}}return o}function Mr(e,t,n,s,i,r){const o=e[n];if(o!=null){const a=it(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&J(l)){const{propsDefaults:u}=i;if(n in u)s=u[n];else{const c=ys(i);s=u[n]=l.call(null,t),c()}}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===En(n))&&(s=!0))}return s}function Ec(e,t,n=!1){const s=t.propsCache,i=s.get(e);if(i)return i;const r=e.props,o={},a=[];let l=!1;if(!J(e)){const c=h=>{l=!0;const[f,d]=Ec(h,t,!0);Ct(o,f),d&&a.push(...d)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!r&&!l)return ht(e)&&s.set(e,_n),_n;if(X(r))for(let c=0;c<r.length;c++){const h=Sn(r[c]);pa(h)&&(o[h]=dt)}else if(r)for(const c in r){const h=Sn(c);if(pa(h)){const f=r[c],d=o[h]=X(f)||J(f)?{type:f}:Ct({},f);if(d){const p=xa(Boolean,d.type),g=xa(String,d.type);d[0]=p>-1,d[1]=g<0||p<g,(p>-1||it(d,"default"))&&a.push(h)}}}const u=[o,a];return ht(e)&&s.set(e,u),u}function pa(e){return e[0]!=="$"&&!qn(e)}function ma(e){return e===null?"null":typeof e=="function"?e.name||"":typeof e=="object"&&e.constructor&&e.constructor.name||""}function ga(e,t){return ma(e)===ma(t)}function xa(e,t){return X(t)?t.findIndex(n=>ga(n,e)):J(t)&&ga(t,e)?0:-1}const Ic=e=>e[0]==="_"||e==="$stable",_o=e=>X(e)?e.map(xe):[xe(e)],Zf=(e,t,n)=>{if(t._n)return t;const s=Hs((...i)=>_o(t(...i)),n);return s._c=!1,s},Fc=(e,t,n)=>{const s=e._ctx;for(const i in e){if(Ic(i))continue;const r=e[i];if(J(r))t[i]=Zf(i,r,s);else if(r!=null){const o=_o(r);t[i]=()=>o}}},Bc=(e,t)=>{const n=_o(t);e.slots.default=()=>n},Qf=(e,t)=>{const n=e.slots=Pc();if(e.vnode.shapeFlag&32){const s=t._;s?(Ct(n,t),Wl(n,"_",s,!0)):Fc(t,n)}else t&&Bc(e,t)},Jf=(e,t,n)=>{const{vnode:s,slots:i}=e;let r=!0,o=dt;if(s.shapeFlag&32){const a=t._;a?n&&a===1?r=!1:(Ct(i,t),!n&&a===1&&delete i._):(r=!t.$stable,Fc(t,i)),o=t}else t&&(Bc(e,t),o={default:1});if(r)for(const a in i)!Ic(a)&&o[a]==null&&delete i[a]};function Pr(e,t,n,s,i=!1){if(X(e)){e.forEach((f,d)=>Pr(f,t&&(X(t)?t[d]:t),n,s,i));return}if($s(s)&&!i)return;const r=s.shapeFlag&4?bo(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=e,u=t&&t.r,c=a.refs===dt?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==l&&(bt(u)?(c[u]=null,it(h,u)&&(h[u]=null)):Ut(u)&&(u.value=null)),J(l))Ue(l,a,12,[o,c]);else{const f=bt(l),d=Ut(l);if(f||d){const p=()=>{if(e.f){const g=f?it(h,l)?h[l]:c[l]:l.value;i?X(g)&&io(g,r):X(g)?g.includes(r)||g.push(r):f?(c[l]=[r],it(h,l)&&(h[l]=c[l])):(l.value=[r],e.k&&(c[e.k]=l.value))}else f?(c[l]=o,it(h,l)&&(h[l]=o)):d&&(l.value=o,e.k&&(c[e.k]=o))};o?(p.id=-1,Ot(p,n)):p()}}}const Ot=bf;function td(e){return ed(e)}function ed(e,t){const n=Vl();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:u,setElementText:c,parentNode:h,nextSibling:f,setScopeId:d=qt,insertStaticContent:p}=e,g=(_,b,A,P=null,T=null,F=null,L=void 0,B=null,R=!!b.dynamicChildren)=>{if(_===b)return;_&&!an(_,b)&&(P=Xe(_),tt(_,T,F,!0),_=null),b.patchFlag===-2&&(R=!1,b.dynamicChildren=null);const{type:I,ref:N,shapeFlag:W}=b;switch(I){case gi:m(_,b,A,P);break;case Kt:y(_,b,A,P);break;case Bi:_==null&&v(b,A,P,L);break;case Lt:j(_,b,A,P,T,F,L,B,R);break;default:W&1?E(_,b,A,P,T,F,L,B,R):W&6?O(_,b,A,P,T,F,L,B,R):(W&64||W&128)&&I.process(_,b,A,P,T,F,L,B,R,Ee)}N!=null&&T&&Pr(N,_&&_.ref,F,b||_,!b)},m=(_,b,A,P)=>{if(_==null)s(b.el=a(b.children),A,P);else{const T=b.el=_.el;b.children!==_.children&&u(T,b.children)}},y=(_,b,A,P)=>{_==null?s(b.el=l(b.children||""),A,P):b.el=_.el},v=(_,b,A,P)=>{[_.el,_.anchor]=p(_.children,b,A,P,_.el,_.anchor)},x=({el:_,anchor:b},A,P)=>{let T;for(;_&&_!==b;)T=f(_),s(_,A,P),_=T;s(b,A,P)},w=({el:_,anchor:b})=>{let A;for(;_&&_!==b;)A=f(_),i(_),_=A;i(b)},E=(_,b,A,P,T,F,L,B,R)=>{b.type==="svg"?L="svg":b.type==="math"&&(L="mathml"),_==null?M(b,A,P,T,F,L,B,R):S(_,b,T,F,L,B,R)},M=(_,b,A,P,T,F,L,B)=>{let R,I;const{props:N,shapeFlag:W,transition:$,dirs:K}=_;if(R=_.el=o(_.type,F,N&&N.is,N),W&8?c(R,_.children):W&16&&k(_.children,R,null,P,T,Fi(_,F),L,B),K&&qe(_,null,P,"created"),z(R,_,_.scopeId,L,P),N){for(const lt in N)lt!=="value"&&!qn(lt)&&r(R,lt,null,N[lt],F,_.children,P,T,Et);"value"in N&&r(R,"value",null,N.value,F),(I=N.onVnodeBeforeMount)&&de(I,P,_)}K&&qe(_,null,P,"beforeMount");const et=nd(T,$);et&&$.beforeEnter(R),s(R,b,A),((I=N&&N.onVnodeMounted)||et||K)&&Ot(()=>{I&&de(I,P,_),et&&$.enter(R),K&&qe(_,null,P,"mounted")},T)},z=(_,b,A,P,T)=>{if(A&&d(_,A),P)for(let F=0;F<P.length;F++)d(_,P[F]);if(T){let F=T.subTree;if(b===F){const L=T.vnode;z(_,L,L.scopeId,L.slotScopeIds,T.parent)}}},k=(_,b,A,P,T,F,L,B,R=0)=>{for(let I=R;I<_.length;I++){const N=_[I]=B?Le(_[I]):xe(_[I]);g(null,N,b,A,P,T,F,L,B)}},S=(_,b,A,P,T,F,L)=>{const B=b.el=_.el;let{patchFlag:R,dynamicChildren:I,dirs:N}=b;R|=_.patchFlag&16;const W=_.props||dt,$=b.props||dt;let K;if(A&&Ke(A,!1),(K=$.onVnodeBeforeUpdate)&&de(K,A,b,_),N&&qe(b,_,A,"beforeUpdate"),A&&Ke(A,!0),I?C(_.dynamicChildren,I,B,A,P,Fi(b,T),F):L||nt(_,b,B,null,A,P,Fi(b,T),F,!1),R>0){if(R&16)Y(B,b,W,$,A,P,T);else if(R&2&&W.class!==$.class&&r(B,"class",null,$.class,T),R&4&&r(B,"style",W.style,$.style,T),R&8){const et=b.dynamicProps;for(let lt=0;lt<et.length;lt++){const ft=et[lt],St=W[ft],ee=$[ft];(ee!==St||ft==="value")&&r(B,ft,St,ee,T,_.children,A,P,Et)}}R&1&&_.children!==b.children&&c(B,b.children)}else!L&&I==null&&Y(B,b,W,$,A,P,T);((K=$.onVnodeUpdated)||N)&&Ot(()=>{K&&de(K,A,b,_),N&&qe(b,_,A,"updated")},P)},C=(_,b,A,P,T,F,L)=>{for(let B=0;B<b.length;B++){const R=_[B],I=b[B],N=R.el&&(R.type===Lt||!an(R,I)||R.shapeFlag&70)?h(R.el):A;g(R,I,N,null,P,T,F,L,!0)}},Y=(_,b,A,P,T,F,L)=>{if(A!==P){if(A!==dt)for(const B in A)!qn(B)&&!(B in P)&&r(_,B,A[B],null,L,b.children,T,F,Et);for(const B in P){if(qn(B))continue;const R=P[B],I=A[B];R!==I&&B!=="value"&&r(_,B,I,R,L,b.children,T,F,Et)}"value"in P&&r(_,"value",A.value,P.value,L)}},j=(_,b,A,P,T,F,L,B,R)=>{const I=b.el=_?_.el:a(""),N=b.anchor=_?_.anchor:a("");let{patchFlag:W,dynamicChildren:$,slotScopeIds:K}=b;K&&(B=B?B.concat(K):K),_==null?(s(I,A,P),s(N,A,P),k(b.children||[],A,N,T,F,L,B,R)):W>0&&W&64&&$&&_.dynamicChildren?(C(_.dynamicChildren,$,A,T,F,L,B),(b.key!=null||T&&b===T.subTree)&&zc(_,b,!0)):nt(_,b,A,N,T,F,L,B,R)},O=(_,b,A,P,T,F,L,B,R)=>{b.slotScopeIds=B,_==null?b.shapeFlag&512?T.ctx.activate(b,A,P,L,R):U(b,A,P,T,F,L,R):st(_,b,R)},U=(_,b,A,P,T,F,L)=>{const B=_.component=fd(_,P,T);if(fi(_)&&(B.ctx.renderer=Ee),dd(B),B.asyncDep){if(T&&T.registerDep(B,Q),!_.el){const R=B.subTree=It(Kt);y(null,R,b,A)}}else Q(B,_,b,A,T,F,L)},st=(_,b,A)=>{const P=b.component=_.component;if(xf(_,b,A))if(P.asyncDep&&!P.asyncResolved){Z(P,b,A);return}else P.next=b,hf(P.update),P.effect.dirty=!0,P.update();else b.el=_.el,P.vnode=b},Q=(_,b,A,P,T,F,L)=>{const B=()=>{if(_.isMounted){let{next:N,bu:W,u:$,parent:K,vnode:et}=_;{const dn=Rc(_);if(dn){N&&(N.el=et.el,Z(_,N,L)),dn.asyncDep.then(()=>{_.isUnmounted||B()});return}}let lt=N,ft;Ke(_,!1),N?(N.el=et.el,Z(_,N,L)):N=et,W&&Pi(W),(ft=N.props&&N.props.onVnodeBeforeUpdate)&&de(ft,K,N,et),Ke(_,!0);const St=ki(_),ee=_.subTree;_.subTree=St,g(ee,St,h(ee.el),Xe(ee),_,T,F),N.el=St.el,lt===null&&vf(_,St.el),$&&Ot($,T),(ft=N.props&&N.props.onVnodeUpdated)&&Ot(()=>de(ft,K,N,et),T)}else{let N;const{el:W,props:$}=b,{bm:K,m:et,parent:lt}=_,ft=$s(b);if(Ke(_,!1),K&&Pi(K),!ft&&(N=$&&$.onVnodeBeforeMount)&&de(N,lt,b),Ke(_,!0),W&&Ye){const St=()=>{_.subTree=ki(_),Ye(W,_.subTree,_,T,null)};ft?b.type.__asyncLoader().then(()=>!_.isUnmounted&&St()):St()}else{const St=_.subTree=ki(_);g(null,St,A,P,_,T,F),b.el=St.el}if(et&&Ot(et,T),!ft&&(N=$&&$.onVnodeMounted)){const St=b;Ot(()=>de(N,lt,St),T)}(b.shapeFlag&256||lt&&$s(lt.vnode)&&lt.vnode.shapeFlag&256)&&_.a&&Ot(_.a,T),_.isMounted=!0,b=A=P=null}},R=_.effect=new ao(B,qt,()=>go(I),_.scope),I=_.update=()=>{R.dirty&&R.run()};I.id=_.uid,Ke(_,!0),I()},Z=(_,b,A)=>{b.component=_;const P=_.vnode.props;_.vnode=b,_.next=null,Kf(_,b.props,P,A),Jf(_,b.children,A),He(),aa(_),$e()},nt=(_,b,A,P,T,F,L,B,R=!1)=>{const I=_&&_.children,N=_?_.shapeFlag:0,W=b.children,{patchFlag:$,shapeFlag:K}=b;if($>0){if($&128){V(I,W,A,P,T,F,L,B,R);return}else if($&256){D(I,W,A,P,T,F,L,B,R);return}}K&8?(N&16&&Et(I,T,F),W!==I&&c(A,W)):N&16?K&16?V(I,W,A,P,T,F,L,B,R):Et(I,T,F,!0):(N&8&&c(A,""),K&16&&k(W,A,P,T,F,L,B,R))},D=(_,b,A,P,T,F,L,B,R)=>{_=_||_n,b=b||_n;const I=_.length,N=b.length,W=Math.min(I,N);let $;for($=0;$<W;$++){const K=b[$]=R?Le(b[$]):xe(b[$]);g(_[$],K,A,null,T,F,L,B,R)}I>N?Et(_,T,F,!0,!1,W):k(b,A,P,T,F,L,B,R,W)},V=(_,b,A,P,T,F,L,B,R)=>{let I=0;const N=b.length;let W=_.length-1,$=N-1;for(;I<=W&&I<=$;){const K=_[I],et=b[I]=R?Le(b[I]):xe(b[I]);if(an(K,et))g(K,et,A,null,T,F,L,B,R);else break;I++}for(;I<=W&&I<=$;){const K=_[W],et=b[$]=R?Le(b[$]):xe(b[$]);if(an(K,et))g(K,et,A,null,T,F,L,B,R);else break;W--,$--}if(I>W){if(I<=$){const K=$+1,et=K<N?b[K].el:P;for(;I<=$;)g(null,b[I]=R?Le(b[I]):xe(b[I]),A,et,T,F,L,B,R),I++}}else if(I>$)for(;I<=W;)tt(_[I],T,F,!0),I++;else{const K=I,et=I,lt=new Map;for(I=et;I<=$;I++){const Dt=b[I]=R?Le(b[I]):xe(b[I]);Dt.key!=null&&lt.set(Dt.key,I)}let ft,St=0;const ee=$-et+1;let dn=!1,Ko=0;const Ln=new Array(ee);for(I=0;I<ee;I++)Ln[I]=0;for(I=K;I<=W;I++){const Dt=_[I];if(St>=ee){tt(Dt,T,F,!0);continue}let fe;if(Dt.key!=null)fe=lt.get(Dt.key);else for(ft=et;ft<=$;ft++)if(Ln[ft-et]===0&&an(Dt,b[ft])){fe=ft;break}fe===void 0?tt(Dt,T,F,!0):(Ln[fe-et]=I+1,fe>=Ko?Ko=fe:dn=!0,g(Dt,b[fe],A,null,T,F,L,B,R),St++)}const Zo=dn?sd(Ln):_n;for(ft=Zo.length-1,I=ee-1;I>=0;I--){const Dt=et+I,fe=b[Dt],Qo=Dt+1<N?b[Dt+1].el:P;Ln[I]===0?g(null,fe,A,Qo,T,F,L,B,R):dn&&(ft<0||I!==Zo[ft]?Vt(fe,A,Qo,2):ft--)}}},Vt=(_,b,A,P,T=null)=>{const{el:F,type:L,transition:B,children:R,shapeFlag:I}=_;if(I&6){Vt(_.component.subTree,b,A,P);return}if(I&128){_.suspense.move(b,A,P);return}if(I&64){L.move(_,b,A,Ee);return}if(L===Lt){s(F,b,A);for(let W=0;W<R.length;W++)Vt(R[W],b,A,P);s(_.anchor,b,A);return}if(L===Bi){x(_,b,A);return}if(P!==2&&I&1&&B)if(P===0)B.beforeEnter(F),s(F,b,A),Ot(()=>B.enter(F),T);else{const{leave:W,delayLeave:$,afterLeave:K}=B,et=()=>s(F,b,A),lt=()=>{W(F,()=>{et(),K&&K()})};$?$(F,et,lt):lt()}else s(F,b,A)},tt=(_,b,A,P=!1,T=!1)=>{const{type:F,props:L,ref:B,children:R,dynamicChildren:I,shapeFlag:N,patchFlag:W,dirs:$}=_;if(B!=null&&Pr(B,null,A,_,!0),N&256){b.ctx.deactivate(_);return}const K=N&1&&$,et=!$s(_);let lt;if(et&&(lt=L&&L.onVnodeBeforeUnmount)&&de(lt,b,_),N&6)te(_.component,A,P);else{if(N&128){_.suspense.unmount(A,P);return}K&&qe(_,null,b,"beforeUnmount"),N&64?_.type.remove(_,b,A,T,Ee,P):I&&(F!==Lt||W>0&&W&64)?Et(I,b,A,!1,!0):(F===Lt&&W&384||!T&&N&16)&&Et(R,b,A),P&&kt(_)}(et&&(lt=L&&L.onVnodeUnmounted)||K)&&Ot(()=>{lt&&de(lt,b,_),K&&qe(_,null,b,"unmounted")},A)},kt=_=>{const{type:b,el:A,anchor:P,transition:T}=_;if(b===Lt){he(A,P);return}if(b===Bi){w(_);return}const F=()=>{i(A),T&&!T.persisted&&T.afterLeave&&T.afterLeave()};if(_.shapeFlag&1&&T&&!T.persisted){const{leave:L,delayLeave:B}=T,R=()=>L(A,F);B?B(_.el,F,R):R()}else F()},he=(_,b)=>{let A;for(;_!==b;)A=f(_),i(_),_=A;i(b)},te=(_,b,A)=>{const{bum:P,scope:T,update:F,subTree:L,um:B}=_;P&&Pi(P),T.stop(),F&&(F.active=!1,tt(L,_,b,A)),B&&Ot(B,b),Ot(()=>{_.isUnmounted=!0},b),b&&b.pendingBranch&&!b.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===b.pendingId&&(b.deps--,b.deps===0&&b.resolve())},Et=(_,b,A,P=!1,T=!1,F=0)=>{for(let L=F;L<_.length;L++)tt(_[L],b,A,P,T)},Xe=_=>_.shapeFlag&6?Xe(_.component.subTree):_.shapeFlag&128?_.suspense.next():f(_.anchor||_.el);let Te=!1;const ke=(_,b,A)=>{_==null?b._vnode&&tt(b._vnode,null,null,!0):g(b._vnode||null,_,b,null,null,null,A),Te||(Te=!0,aa(),mc(),Te=!1),b._vnode=_},Ee={p:g,um:tt,m:Vt,r:kt,mt:U,mc:k,pc:nt,pbc:C,n:Xe,o:e};let On,Ye;return{render:ke,hydrate:On,createApp:Xf(ke,On)}}function Fi({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Ke({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function nd(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function zc(e,t,n=!1){const s=e.children,i=t.children;if(X(s)&&X(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Le(i[r]),a.el=o.el),n||zc(o,a)),a.type===gi&&(a.el=o.el)}}function sd(e){const t=e.slice(),n=[0];let s,i,r,o,a;const l=e.length;for(s=0;s<l;s++){const u=e[s];if(u!==0){if(i=n[n.length-1],e[i]<u){t[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,e[n[a]]<u?r=a+1:o=a;u<e[n[r]]&&(r>0&&(t[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=t[o];return n}function Rc(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Rc(t)}const id=e=>e.__isTeleport,Lt=Symbol.for("v-fgt"),gi=Symbol.for("v-txt"),Kt=Symbol.for("v-cmt"),Bi=Symbol.for("v-stc"),Jn=[];let le=null;function ge(e=!1){Jn.push(le=e?null:[])}function rd(){Jn.pop(),le=Jn[Jn.length-1]||null}let us=1;function va(e){us+=e}function Oc(e){return e.dynamicChildren=us>0?le||_n:null,rd(),us>0&&le&&le.push(e),e}function ze(e,t,n,s,i,r){return Oc(ie(e,t,n,s,i,r,!0))}function Lc(e,t,n,s,i){return Oc(It(e,t,n,s,i,!0))}function Tr(e){return e?e.__v_isVNode===!0:!1}function an(e,t){return e.type===t.type&&e.key===t.key}const jc=({key:e})=>e??null,Vs=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?bt(e)||Ut(e)||J(e)?{i:ae,r:e,k:t,f:!!n}:e:null);function ie(e,t=null,n=null,s=0,i=null,r=e===Lt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&jc(t),ref:t&&Vs(t),scopeId:vc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:ae};return a?(yo(l,n),r&128&&e.normalize(l)):n&&(l.shapeFlag|=bt(n)?8:16),us>0&&!o&&le&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&le.push(l),l}const It=od;function od(e,t=null,n=null,s=0,i=null,r=!1){if((!e||e===_f)&&(e=Kt),Tr(e)){const a=Ge(e,t,!0);return n&&yo(a,n),us>0&&!r&&le&&(a.shapeFlag&6?le[le.indexOf(e)]=a:le.push(a)),a.patchFlag|=-2,a}if(xd(e)&&(e=e.__vccOpts),t){t=ad(t);let{class:a,style:l}=t;a&&!bt(a)&&(t.class=_s(a)),ht(l)&&(lc(l)&&!X(l)&&(l=Ct({},l)),t.style=oo(l))}const o=bt(e)?1:yf(e)?128:id(e)?64:ht(e)?4:J(e)?2:0;return ie(e,t,n,s,i,o,r,!0)}function ad(e){return e?lc(e)||Tc(e)?Ct({},e):e:null}function Ge(e,t,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:a,transition:l}=e,u=t?cd(i||{},t):i,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&jc(u),ref:t&&t.ref?n&&r?X(r)?r.concat(Vs(t)):[r,Vs(t)]:Vs(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Lt?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ge(e.ssContent),ssFallback:e.ssFallback&&Ge(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&s&&(c.transition=l.clone(c)),c}function ld(e=" ",t=0){return It(gi,null,e,t)}function pn(e="",t=!1){return t?(ge(),Lc(Kt,null,e)):It(Kt,null,e)}function xe(e){return e==null||typeof e=="boolean"?It(Kt):X(e)?It(Lt,null,e.slice()):typeof e=="object"?Le(e):It(gi,null,String(e))}function Le(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ge(e)}function yo(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(X(t))n=16;else if(typeof t=="object")if(s&65){const i=t.default;i&&(i._c&&(i._d=!1),yo(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!Tc(t)?t._ctx=ae:i===3&&ae&&(ae.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else J(t)?(t={default:t,_ctx:ae},n=32):(t=String(t),s&64?(n=16,t=[ld(t)]):n=8);e.children=t,e.shapeFlag|=n}function cd(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const i in s)if(i==="class")t.class!==s.class&&(t.class=_s([t.class,s.class]));else if(i==="style")t.style=oo([t.style,s.style]);else if(oi(i)){const r=t[i],o=s[i];o&&r!==o&&!(X(r)&&r.includes(o))&&(t[i]=r?[].concat(r,o):o)}else i!==""&&(t[i]=s[i])}return t}function de(e,t,n,s=null){Qt(e,t,7,[n,s])}const ud=Sc();let hd=0;function fd(e,t,n){const s=e.type,i=(t?t.appContext:e.appContext)||ud,r={uid:hd++,vnode:e,type:s,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new zh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ec(s,i),emitsOptions:xc(s,i),emit:null,emitted:null,propsDefaults:dt,inheritAttrs:s.inheritAttrs,ctx:dt,data:dt,props:dt,attrs:dt,slots:dt,refs:dt,setupState:dt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=pf.bind(null,r),e.ce&&e.ce(r),r}let Bt=null;const Nc=()=>Bt||ae;let Js,kr;{const e=Vl(),t=(n,s)=>{let i;return(i=e[n])||(i=e[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};Js=t("__VUE_INSTANCE_SETTERS__",n=>Bt=n),kr=t("__VUE_SSR_SETTERS__",n=>xi=n)}const ys=e=>{const t=Bt;return Js(e),e.scope.on(),()=>{e.scope.off(),Js(t)}},_a=()=>{Bt&&Bt.scope.off(),Js(null)};function Uc(e){return e.vnode.shapeFlag&4}let xi=!1;function dd(e,t=!1){t&&kr(t);const{props:n,children:s}=e.vnode,i=Uc(e);qf(e,n,i,t),Qf(e,s);const r=i?pd(e,t):void 0;return t&&kr(!1),r}function pd(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Uf);const{setup:s}=n;if(s){const i=e.setupContext=s.length>1?gd(e):null,r=ys(e);He();const o=Ue(s,e,0,[e.props,i]);if($e(),r(),Dl(o)){if(o.then(_a,_a),t)return o.then(a=>{ya(e,a,t)}).catch(a=>{ui(a,e,0)});e.asyncDep=o}else ya(e,o,t)}else Dc(e,t)}function ya(e,t,n){J(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ht(t)&&(e.setupState=hc(t)),Dc(e,n)}let ba;function Dc(e,t,n){const s=e.type;if(!e.render){if(!t&&ba&&!s.render){const i=s.template||vo(e).template;if(i){const{isCustomElement:r,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:l}=s,u=Ct(Ct({isCustomElement:r,delimiters:a},o),l);s.render=ba(i,u)}}e.render=s.render||qt}{const i=ys(e);He();try{Df(e)}finally{$e(),i()}}}const md={get(e,t){return Nt(e,"get",""),e[t]}};function gd(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,md),slots:e.slots,emit:e.emit,expose:t}}function bo(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(hc(sf(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Zn)return Zn[n](e)},has(t,n){return n in t||n in Zn}}))}function xd(e){return J(e)&&"__vccOpts"in e}const wo=(e,t)=>rf(e,t,xi);function vd(e,t,n){const s=arguments.length;return s===2?ht(t)&&!X(t)?Tr(t)?It(e,null,[t]):It(e,t):It(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Tr(n)&&(n=[n]),It(e,t,n))}const _d="3.4.27";/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const yd="http://www.w3.org/2000/svg",bd="http://www.w3.org/1998/Math/MathML",je=typeof document<"u"?document:null,wa=je&&je.createElement("template"),wd={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const i=t==="svg"?je.createElementNS(yd,e):t==="mathml"?je.createElementNS(bd,e):je.createElement(e,n?{is:n}:void 0);return e==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:e=>je.createTextNode(e),createComment:e=>je.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>je.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,i,r){const o=n?n.previousSibling:t.lastChild;if(i&&(i===r||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{wa.innerHTML=s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e;const a=wa.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Fe="transition",jn="animation",hs=Symbol("_vtc"),ts=(e,{slots:t})=>vd(Tf,Ad(e),t);ts.displayName="Transition";const Gc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};ts.props=Ct({},yc,Gc);const Ze=(e,t=[])=>{X(e)?e.forEach(n=>n(...t)):e&&e(...t)},Aa=e=>e?X(e)?e.some(t=>t.length>1):e.length>1:!1;function Ad(e){const t={};for(const j in e)j in Gc||(t[j]=e[j]);if(e.css===!1)return t;const{name:n="v",type:s,duration:i,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:u=o,appearToClass:c=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:d=`${n}-leave-to`}=e,p=Cd(i),g=p&&p[0],m=p&&p[1],{onBeforeEnter:y,onEnter:v,onEnterCancelled:x,onLeave:w,onLeaveCancelled:E,onBeforeAppear:M=y,onAppear:z=v,onAppearCancelled:k=x}=t,S=(j,O,U)=>{Qe(j,O?c:a),Qe(j,O?u:o),U&&U()},C=(j,O)=>{j._isLeaving=!1,Qe(j,h),Qe(j,d),Qe(j,f),O&&O()},Y=j=>(O,U)=>{const st=j?z:v,Q=()=>S(O,j,U);Ze(st,[O,Q]),Ca(()=>{Qe(O,j?l:r),Be(O,j?c:a),Aa(st)||Sa(O,s,g,Q)})};return Ct(t,{onBeforeEnter(j){Ze(y,[j]),Be(j,r),Be(j,o)},onBeforeAppear(j){Ze(M,[j]),Be(j,l),Be(j,u)},onEnter:Y(!1),onAppear:Y(!0),onLeave(j,O){j._isLeaving=!0;const U=()=>C(j,O);Be(j,h),Be(j,f),Pd(),Ca(()=>{j._isLeaving&&(Qe(j,h),Be(j,d),Aa(w)||Sa(j,s,m,U))}),Ze(w,[j,U])},onEnterCancelled(j){S(j,!1),Ze(x,[j])},onAppearCancelled(j){S(j,!0),Ze(k,[j])},onLeaveCancelled(j){C(j),Ze(E,[j])}})}function Cd(e){if(e==null)return null;if(ht(e))return[zi(e.enter),zi(e.leave)];{const t=zi(e);return[t,t]}}function zi(e){return Ph(e)}function Be(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[hs]||(e[hs]=new Set)).add(t)}function Qe(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const n=e[hs];n&&(n.delete(t),n.size||(e[hs]=void 0))}function Ca(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Sd=0;function Sa(e,t,n,s){const i=e._endId=++Sd,r=()=>{i===e._endId&&s()};if(n)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=Md(e,t);if(!o)return s();const u=o+"end";let c=0;const h=()=>{e.removeEventListener(u,f),r()},f=d=>{d.target===e&&++c>=l&&h()};setTimeout(()=>{c<l&&h()},a+1),e.addEventListener(u,f)}function Md(e,t){const n=window.getComputedStyle(e),s=p=>(n[p]||"").split(", "),i=s(`${Fe}Delay`),r=s(`${Fe}Duration`),o=Ma(i,r),a=s(`${jn}Delay`),l=s(`${jn}Duration`),u=Ma(a,l);let c=null,h=0,f=0;t===Fe?o>0&&(c=Fe,h=o,f=r.length):t===jn?u>0&&(c=jn,h=u,f=l.length):(h=Math.max(o,u),c=h>0?o>u?Fe:jn:null,f=c?c===Fe?r.length:l.length:0);const d=c===Fe&&/\b(transform|all)(,|$)/.test(s(`${Fe}Property`).toString());return{type:c,timeout:h,propCount:f,hasTransform:d}}function Ma(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,s)=>Pa(n)+Pa(e[s])))}function Pa(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Pd(){return document.body.offsetHeight}function Td(e,t,n){const s=e[hs];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Ta=Symbol("_vod"),kd=Symbol("_vsh"),Ed=Symbol(""),Id=/(^|;)\s*display\s*:/;function Fd(e,t,n){const s=e.style,i=bt(n);let r=!1;if(n&&!i){if(t)if(bt(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Xs(s,a,"")}else for(const o in t)n[o]==null&&Xs(s,o,"");for(const o in n)o==="display"&&(r=!0),Xs(s,o,n[o])}else if(i){if(t!==n){const o=s[Ed];o&&(n+=";"+o),s.cssText=n,r=Id.test(n)}}else t&&e.removeAttribute("style");Ta in e&&(e[Ta]=r?s.display:"",e[kd]&&(s.display="none"))}const ka=/\s*!important$/;function Xs(e,t,n){if(X(n))n.forEach(s=>Xs(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=Bd(e,t);ka.test(n)?e.setProperty(En(s),n.replace(ka,""),"important"):e[s]=n}}const Ea=["Webkit","Moz","ms"],Ri={};function Bd(e,t){const n=Ri[t];if(n)return n;let s=Sn(t);if(s!=="filter"&&s in e)return Ri[t]=s;s=$l(s);for(let i=0;i<Ea.length;i++){const r=Ea[i]+s;if(r in e)return Ri[t]=r}return t}const Ia="http://www.w3.org/1999/xlink";function zd(e,t,n,s,i){if(s&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ia,t.slice(6,t.length)):e.setAttributeNS(Ia,t,n);else{const r=Bh(t);n==null||r&&!Xl(n)?e.removeAttribute(t):e.setAttribute(t,r?"":n)}}function Rd(e,t,n,s,i,r,o){if(t==="innerHTML"||t==="textContent"){s&&o(s,i,r),e[t]=n??"";return}const a=e.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){const u=a==="OPTION"?e.getAttribute("value")||"":e.value,c=n??"";(u!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let l=!1;if(n===""||n==null){const u=typeof e[t];u==="boolean"?n=Xl(n):n==null&&u==="string"?(n="",l=!0):u==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function Od(e,t,n,s){e.addEventListener(t,n,s)}function Ld(e,t,n,s){e.removeEventListener(t,n,s)}const Fa=Symbol("_vei");function jd(e,t,n,s,i=null){const r=e[Fa]||(e[Fa]={}),o=r[t];if(s&&o)o.value=s;else{const[a,l]=Nd(t);if(s){const u=r[t]=Gd(s,i);Od(e,a,u,l)}else o&&(Ld(e,a,o,l),r[t]=void 0)}}const Ba=/(?:Once|Passive|Capture)$/;function Nd(e){let t;if(Ba.test(e)){t={};let s;for(;s=e.match(Ba);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):En(e.slice(2)),t]}let Oi=0;const Ud=Promise.resolve(),Dd=()=>Oi||(Ud.then(()=>Oi=0),Oi=Date.now());function Gd(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Qt(Hd(s,n.value),t,5,[s])};return n.value=e,n.attached=Dd(),n}function Hd(e,t){if(X(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>i=>!i._stopped&&s&&s(i))}else return t}const za=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,$d=(e,t,n,s,i,r,o,a,l)=>{const u=i==="svg";t==="class"?Td(e,s,u):t==="style"?Fd(e,n,s):oi(t)?so(t)||jd(e,t,n,s,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Wd(e,t,s,u))?Rd(e,t,s,r,o,a,l):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),zd(e,t,s,u))};function Wd(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&za(t)&&J(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return za(t)&&bt(n)?!1:t in e}const Vd=Ct({patchProp:$d},wd);let Ra;function Xd(){return Ra||(Ra=td(Vd))}const Yd=(...e)=>{const t=Xd().createApp(...e),{mount:n}=t;return t.mount=s=>{const i=Kd(s);if(!i)return;const r=t._component;!J(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,qd(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function qd(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Kd(e){return bt(e)?document.querySelector(e):e}var Zd=`#version 300 es
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
}`;const n0=Object.freeze(Object.defineProperty({__proto__:null,default:e0},Symbol.toStringTag,{value:"Module"}));var s0=`#version 300 es
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
        
        
        

        
        
        
        
        
        
        
        
        

}`;const i0=Object.freeze(Object.defineProperty({__proto__:null,default:s0},Symbol.toStringTag,{value:"Module"}));var r0=`#version 300 es
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
  
}`;const o0=Object.freeze(Object.defineProperty({__proto__:null,default:r0},Symbol.toStringTag,{value:"Module"}));var a0=`#version 300 es
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
  
  
}`;const l0=Object.freeze(Object.defineProperty({__proto__:null,default:a0},Symbol.toStringTag,{value:"Module"}));var c0=`#version 300 es
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

}`;const u0=Object.freeze(Object.defineProperty({__proto__:null,default:c0},Symbol.toStringTag,{value:"Module"}));var h0=`#version 300 es
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
}`;const f0=Object.freeze(Object.defineProperty({__proto__:null,default:h0},Symbol.toStringTag,{value:"Module"}));var d0=`#version 300 es
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
}`;const p0=Object.freeze(Object.defineProperty({__proto__:null,default:d0},Symbol.toStringTag,{value:"Module"}));var m0=`#version 300 es
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
}`;const g0=Object.freeze(Object.defineProperty({__proto__:null,default:m0},Symbol.toStringTag,{value:"Module"}));var x0=`#version 300 es
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

}`;const v0=Object.freeze(Object.defineProperty({__proto__:null,default:x0},Symbol.toStringTag,{value:"Module"}));var _0=`#version 300 es
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

}`;const y0=Object.freeze(Object.defineProperty({__proto__:null,default:_0},Symbol.toStringTag,{value:"Module"}));var b0=`#version 300 es
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

}`;const w0=Object.freeze(Object.defineProperty({__proto__:null,default:b0},Symbol.toStringTag,{value:"Module"}));var A0=`#version 300 es
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
}`;const C0=Object.freeze(Object.defineProperty({__proto__:null,default:A0},Symbol.toStringTag,{value:"Module"}));var S0=`#version 300 es

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
    
    
    
    
}`;const M0=Object.freeze(Object.defineProperty({__proto__:null,default:S0},Symbol.toStringTag,{value:"Module"}));var P0=`#version 300 es

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
    
    
    
    
}`;const T0=Object.freeze(Object.defineProperty({__proto__:null,default:P0},Symbol.toStringTag,{value:"Module"}));var k0=`#version 300 es
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
}`;const E0=Object.freeze(Object.defineProperty({__proto__:null,default:k0},Symbol.toStringTag,{value:"Module"}));var I0=`#version 300 es
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

}`;const F0=Object.freeze(Object.defineProperty({__proto__:null,default:I0},Symbol.toStringTag,{value:"Module"}));var B0=`#version 300 es
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

    
}`;const z0=Object.freeze(Object.defineProperty({__proto__:null,default:B0},Symbol.toStringTag,{value:"Module"}));var R0=`#version 300 es
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
}`;const O0=Object.freeze(Object.defineProperty({__proto__:null,default:R0},Symbol.toStringTag,{value:"Module"}));var L0=`#version 300 es
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
    

}`;const j0=Object.freeze(Object.defineProperty({__proto__:null,default:L0},Symbol.toStringTag,{value:"Module"}));var N0=`#version 300 es
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

}`;const U0=Object.freeze(Object.defineProperty({__proto__:null,default:N0},Symbol.toStringTag,{value:"Module"}));var D0=`#version 300 es
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
}`;const G0=Object.freeze(Object.defineProperty({__proto__:null,default:D0},Symbol.toStringTag,{value:"Module"}));var H0=`#version 300 es
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

}`;const $0=Object.freeze(Object.defineProperty({__proto__:null,default:H0},Symbol.toStringTag,{value:"Module"}));var W0=`#version 300 es
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

}`;const V0=Object.freeze(Object.defineProperty({__proto__:null,default:W0},Symbol.toStringTag,{value:"Module"})),X0="modulepreload",Y0=function(e){return"/nngl/"+e},Oa={},ti=function(t,n,s){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),o=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));i=Promise.all(n.map(a=>{if(a=Y0(a),a in Oa)return;Oa[a]=!0;const l=a.endsWith(".css"),u=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${u}`))return;const c=document.createElement("link");if(c.rel=l?"stylesheet":X0,l||(c.as="script",c.crossOrigin=""),c.href=a,o&&c.setAttribute("nonce",o),document.head.appendChild(c),l)return new Promise((h,f)=>{c.addEventListener("load",h),c.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${a}`)))})}))}return i.then(()=>t()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})};var q=(e=>(e.Application="application",e.WebGLPipes="webgl-pipes",e.WebGLPipesAdaptor="webgl-pipes-adaptor",e.WebGLSystem="webgl-system",e.WebGPUPipes="webgpu-pipes",e.WebGPUPipesAdaptor="webgpu-pipes-adaptor",e.WebGPUSystem="webgpu-system",e.CanvasSystem="canvas-system",e.CanvasPipesAdaptor="canvas-pipes-adaptor",e.CanvasPipes="canvas-pipes",e.Asset="asset",e.LoadParser="load-parser",e.ResolveParser="resolve-parser",e.CacheParser="cache-parser",e.DetectionParser="detection-parser",e.MaskEffect="mask-effect",e.BlendMode="blend-mode",e.TextureSource="texture-source",e.Environment="environment",e))(q||{});const Er=e=>{if(typeof e=="function"||typeof e=="object"&&e.extension){if(!e.extension)throw new Error("Extension class must have an extension object");e={...typeof e.extension!="object"?{type:e.extension}:e.extension,ref:e}}if(typeof e=="object")e={...e};else throw new Error("Invalid extension type");return typeof e.type=="string"&&(e.type=[e.type]),e},Ts=(e,t)=>Er(e).priority??t,Jt={_addHandlers:{},_removeHandlers:{},_queue:{},remove(...e){return e.map(Er).forEach(t=>{t.type.forEach(n=>{var s,i;return(i=(s=this._removeHandlers)[n])==null?void 0:i.call(s,t)})}),this},add(...e){return e.map(Er).forEach(t=>{t.type.forEach(n=>{var r,o;const s=this._addHandlers,i=this._queue;s[n]?(o=s[n])==null||o.call(s,t):(i[n]=i[n]||[],(r=i[n])==null||r.push(t))})}),this},handle(e,t,n){var o;const s=this._addHandlers,i=this._removeHandlers;if(s[e]||i[e])throw new Error(`Extension type ${e} already has a handler`);s[e]=t,i[e]=n;const r=this._queue;return r[e]&&((o=r[e])==null||o.forEach(a=>t(a)),delete r[e]),this},handleByMap(e,t){return this.handle(e,n=>{n.name&&(t[n.name]=n.ref)},n=>{n.name&&delete t[n.name]})},handleByNamedList(e,t,n=-1){return this.handle(e,s=>{t.findIndex(r=>r.name===s.name)>=0||(t.push({name:s.name,value:s.ref}),t.sort((r,o)=>Ts(o.value,n)-Ts(r.value,n)))},s=>{const i=t.findIndex(r=>r.name===s.name);i!==-1&&t.splice(i,1)})},handleByList(e,t,n=-1){return this.handle(e,s=>{t.includes(s.ref)||(t.push(s.ref),t.sort((i,r)=>Ts(r,n)-Ts(i,n)))},s=>{const i=t.indexOf(s.ref);i!==-1&&t.splice(i,1)})}},q0={extension:{type:q.Environment,name:"browser",priority:-1},test:()=>!0,load:async()=>{await ti(()=>import("./browserAll-CpTtXW2B.js"),__vite__mapDeps([0,1,2,3]))}},K0={extension:{type:q.Environment,name:"webworker",priority:0},test:()=>typeof self<"u"&&self.WorkerGlobalScope!==void 0,load:async()=>{await ti(()=>import("./webworkerAll-B4Q_ZzXQ.js"),__vite__mapDeps([1,2,3]))}};class $t{constructor(t,n,s){this._x=n||0,this._y=s||0,this._observer=t}clone(t){return new $t(t??this._observer,this._x,this._y)}set(t=0,n=t){return(this._x!==t||this._y!==n)&&(this._x=t,this._y=n,this._observer._onUpdate(this)),this}copyFrom(t){return(this._x!==t.x||this._y!==t.y)&&(this._x=t.x,this._y=t.y,this._observer._onUpdate(this)),this}copyTo(t){return t.set(this._x,this._y),t}equals(t){return t.x===this._x&&t.y===this._y}toString(){return`[pixi.js/math:ObservablePoint x=0 y=0 scope=${this._observer}]`}get x(){return this._x}set x(t){this._x!==t&&(this._x=t,this._observer._onUpdate(this))}get y(){return this._y}set y(t){this._y!==t&&(this._y=t,this._observer._onUpdate(this))}}function Ao(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Hc={exports:{}};(function(e){var t=Object.prototype.hasOwnProperty,n="~";function s(){}Object.create&&(s.prototype=Object.create(null),new s().__proto__||(n=!1));function i(l,u,c){this.fn=l,this.context=u,this.once=c||!1}function r(l,u,c,h,f){if(typeof c!="function")throw new TypeError("The listener must be a function");var d=new i(c,h||l,f),p=n?n+u:u;return l._events[p]?l._events[p].fn?l._events[p]=[l._events[p],d]:l._events[p].push(d):(l._events[p]=d,l._eventsCount++),l}function o(l,u){--l._eventsCount===0?l._events=new s:delete l._events[u]}function a(){this._events=new s,this._eventsCount=0}a.prototype.eventNames=function(){var u=[],c,h;if(this._eventsCount===0)return u;for(h in c=this._events)t.call(c,h)&&u.push(n?h.slice(1):h);return Object.getOwnPropertySymbols?u.concat(Object.getOwnPropertySymbols(c)):u},a.prototype.listeners=function(u){var c=n?n+u:u,h=this._events[c];if(!h)return[];if(h.fn)return[h.fn];for(var f=0,d=h.length,p=new Array(d);f<d;f++)p[f]=h[f].fn;return p},a.prototype.listenerCount=function(u){var c=n?n+u:u,h=this._events[c];return h?h.fn?1:h.length:0},a.prototype.emit=function(u,c,h,f,d,p){var g=n?n+u:u;if(!this._events[g])return!1;var m=this._events[g],y=arguments.length,v,x;if(m.fn){switch(m.once&&this.removeListener(u,m.fn,void 0,!0),y){case 1:return m.fn.call(m.context),!0;case 2:return m.fn.call(m.context,c),!0;case 3:return m.fn.call(m.context,c,h),!0;case 4:return m.fn.call(m.context,c,h,f),!0;case 5:return m.fn.call(m.context,c,h,f,d),!0;case 6:return m.fn.call(m.context,c,h,f,d,p),!0}for(x=1,v=new Array(y-1);x<y;x++)v[x-1]=arguments[x];m.fn.apply(m.context,v)}else{var w=m.length,E;for(x=0;x<w;x++)switch(m[x].once&&this.removeListener(u,m[x].fn,void 0,!0),y){case 1:m[x].fn.call(m[x].context);break;case 2:m[x].fn.call(m[x].context,c);break;case 3:m[x].fn.call(m[x].context,c,h);break;case 4:m[x].fn.call(m[x].context,c,h,f);break;default:if(!v)for(E=1,v=new Array(y-1);E<y;E++)v[E-1]=arguments[E];m[x].fn.apply(m[x].context,v)}}return!0},a.prototype.on=function(u,c,h){return r(this,u,c,h,!1)},a.prototype.once=function(u,c,h){return r(this,u,c,h,!0)},a.prototype.removeListener=function(u,c,h,f){var d=n?n+u:u;if(!this._events[d])return this;if(!c)return o(this,d),this;var p=this._events[d];if(p.fn)p.fn===c&&(!f||p.once)&&(!h||p.context===h)&&o(this,d);else{for(var g=0,m=[],y=p.length;g<y;g++)(p[g].fn!==c||f&&!p[g].once||h&&p[g].context!==h)&&m.push(p[g]);m.length?this._events[d]=m.length===1?m[0]:m:o(this,d)}return this},a.prototype.removeAllListeners=function(u){var c;return u?(c=n?n+u:u,this._events[c]&&o(this,c)):(this._events=new s,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=n,a.EventEmitter=a,e.exports=a})(Hc);var Z0=Hc.exports;const ce=Ao(Z0),Q0=Math.PI*2,J0=180/Math.PI,tp=Math.PI/180;class xt{constructor(t=0,n=0){this.x=0,this.y=0,this.x=t,this.y=n}clone(){return new xt(this.x,this.y)}copyFrom(t){return this.set(t.x,t.y),this}copyTo(t){return t.set(this.x,this.y),t}equals(t){return t.x===this.x&&t.y===this.y}set(t=0,n=t){return this.x=t,this.y=n,this}toString(){return`[pixi.js/math:Point x=${this.x} y=${this.y}]`}static get shared(){return Li.x=0,Li.y=0,Li}}const Li=new xt;class at{constructor(t=1,n=0,s=0,i=1,r=0,o=0){this.array=null,this.a=t,this.b=n,this.c=s,this.d=i,this.tx=r,this.ty=o}fromArray(t){this.a=t[0],this.b=t[1],this.c=t[3],this.d=t[4],this.tx=t[2],this.ty=t[5]}set(t,n,s,i,r,o){return this.a=t,this.b=n,this.c=s,this.d=i,this.tx=r,this.ty=o,this}toArray(t,n){this.array||(this.array=new Float32Array(9));const s=n||this.array;return t?(s[0]=this.a,s[1]=this.b,s[2]=0,s[3]=this.c,s[4]=this.d,s[5]=0,s[6]=this.tx,s[7]=this.ty,s[8]=1):(s[0]=this.a,s[1]=this.c,s[2]=this.tx,s[3]=this.b,s[4]=this.d,s[5]=this.ty,s[6]=0,s[7]=0,s[8]=1),s}apply(t,n){n=n||new xt;const s=t.x,i=t.y;return n.x=this.a*s+this.c*i+this.tx,n.y=this.b*s+this.d*i+this.ty,n}applyInverse(t,n){n=n||new xt;const s=this.a,i=this.b,r=this.c,o=this.d,a=this.tx,l=this.ty,u=1/(s*o+r*-i),c=t.x,h=t.y;return n.x=o*u*c+-r*u*h+(l*r-a*o)*u,n.y=s*u*h+-i*u*c+(-l*s+a*i)*u,n}translate(t,n){return this.tx+=t,this.ty+=n,this}scale(t,n){return this.a*=t,this.d*=n,this.c*=t,this.b*=n,this.tx*=t,this.ty*=n,this}rotate(t){const n=Math.cos(t),s=Math.sin(t),i=this.a,r=this.c,o=this.tx;return this.a=i*n-this.b*s,this.b=i*s+this.b*n,this.c=r*n-this.d*s,this.d=r*s+this.d*n,this.tx=o*n-this.ty*s,this.ty=o*s+this.ty*n,this}append(t){const n=this.a,s=this.b,i=this.c,r=this.d;return this.a=t.a*n+t.b*i,this.b=t.a*s+t.b*r,this.c=t.c*n+t.d*i,this.d=t.c*s+t.d*r,this.tx=t.tx*n+t.ty*i+this.tx,this.ty=t.tx*s+t.ty*r+this.ty,this}appendFrom(t,n){const s=t.a,i=t.b,r=t.c,o=t.d,a=t.tx,l=t.ty,u=n.a,c=n.b,h=n.c,f=n.d;return this.a=s*u+i*h,this.b=s*c+i*f,this.c=r*u+o*h,this.d=r*c+o*f,this.tx=a*u+l*h+n.tx,this.ty=a*c+l*f+n.ty,this}setTransform(t,n,s,i,r,o,a,l,u){return this.a=Math.cos(a+u)*r,this.b=Math.sin(a+u)*r,this.c=-Math.sin(a-l)*o,this.d=Math.cos(a-l)*o,this.tx=t-(s*this.a+i*this.c),this.ty=n-(s*this.b+i*this.d),this}prepend(t){const n=this.tx;if(t.a!==1||t.b!==0||t.c!==0||t.d!==1){const s=this.a,i=this.c;this.a=s*t.a+this.b*t.c,this.b=s*t.b+this.b*t.d,this.c=i*t.a+this.d*t.c,this.d=i*t.b+this.d*t.d}return this.tx=n*t.a+this.ty*t.c+t.tx,this.ty=n*t.b+this.ty*t.d+t.ty,this}decompose(t){const n=this.a,s=this.b,i=this.c,r=this.d,o=t.pivot,a=-Math.atan2(-i,r),l=Math.atan2(s,n),u=Math.abs(a+l);return u<1e-5||Math.abs(Q0-u)<1e-5?(t.rotation=l,t.skew.x=t.skew.y=0):(t.rotation=0,t.skew.x=a,t.skew.y=l),t.scale.x=Math.sqrt(n*n+s*s),t.scale.y=Math.sqrt(i*i+r*r),t.position.x=this.tx+(o.x*n+o.y*i),t.position.y=this.ty+(o.x*s+o.y*r),t}invert(){const t=this.a,n=this.b,s=this.c,i=this.d,r=this.tx,o=t*i-n*s;return this.a=i/o,this.b=-n/o,this.c=-s/o,this.d=t/o,this.tx=(s*this.ty-i*r)/o,this.ty=-(t*this.ty-n*r)/o,this}isIdentity(){return this.a===1&&this.b===0&&this.c===0&&this.d===1&&this.tx===0&&this.ty===0}identity(){return this.a=1,this.b=0,this.c=0,this.d=1,this.tx=0,this.ty=0,this}clone(){const t=new at;return t.a=this.a,t.b=this.b,t.c=this.c,t.d=this.d,t.tx=this.tx,t.ty=this.ty,t}copyTo(t){return t.a=this.a,t.b=this.b,t.c=this.c,t.d=this.d,t.tx=this.tx,t.ty=this.ty,t}copyFrom(t){return this.a=t.a,this.b=t.b,this.c=t.c,this.d=t.d,this.tx=t.tx,this.ty=t.ty,this}equals(t){return t.a===this.a&&t.b===this.b&&t.c===this.c&&t.d===this.d&&t.tx===this.tx&&t.ty===this.ty}toString(){return`[pixi.js:Matrix a=${this.a} b=${this.b} c=${this.c} d=${this.d} tx=${this.tx} ty=${this.ty}]`}static get IDENTITY(){return np.identity()}static get shared(){return ep.identity()}}const ep=new at,np=new at,tn=[1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1,0,1],en=[0,1,1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1],nn=[0,-1,-1,-1,0,1,1,1,0,1,1,1,0,-1,-1,-1],sn=[1,1,0,-1,-1,-1,0,1,-1,-1,0,1,1,1,0,-1],Ir=[],$c=[],ks=Math.sign;function sp(){for(let e=0;e<16;e++){const t=[];Ir.push(t);for(let n=0;n<16;n++){const s=ks(tn[e]*tn[n]+nn[e]*en[n]),i=ks(en[e]*tn[n]+sn[e]*en[n]),r=ks(tn[e]*nn[n]+nn[e]*sn[n]),o=ks(en[e]*nn[n]+sn[e]*sn[n]);for(let a=0;a<16;a++)if(tn[a]===s&&en[a]===i&&nn[a]===r&&sn[a]===o){t.push(a);break}}}for(let e=0;e<16;e++){const t=new at;t.set(tn[e],en[e],nn[e],sn[e],0,0),$c.push(t)}}sp();const pt={E:0,SE:1,S:2,SW:3,W:4,NW:5,N:6,NE:7,MIRROR_VERTICAL:8,MAIN_DIAGONAL:10,MIRROR_HORIZONTAL:12,REVERSE_DIAGONAL:14,uX:e=>tn[e],uY:e=>en[e],vX:e=>nn[e],vY:e=>sn[e],inv:e=>e&8?e&15:-e&7,add:(e,t)=>Ir[e][t],sub:(e,t)=>Ir[e][pt.inv(t)],rotate180:e=>e^4,isVertical:e=>(e&3)===2,byDirection:(e,t)=>Math.abs(e)*2<=Math.abs(t)?t>=0?pt.S:pt.N:Math.abs(t)*2<=Math.abs(e)?e>0?pt.E:pt.W:t>0?e>0?pt.SE:pt.SW:e>0?pt.NE:pt.NW,matrixAppendRotationInv:(e,t,n=0,s=0)=>{const i=$c[pt.inv(t)];i.tx=n,i.ty=s,e.append(i)}},Es=[new xt,new xt,new xt,new xt];class wt{constructor(t=0,n=0,s=0,i=0){this.type="rectangle",this.x=Number(t),this.y=Number(n),this.width=Number(s),this.height=Number(i)}get left(){return this.x}get right(){return this.x+this.width}get top(){return this.y}get bottom(){return this.y+this.height}isEmpty(){return this.left===this.right||this.top===this.bottom}static get EMPTY(){return new wt(0,0,0,0)}clone(){return new wt(this.x,this.y,this.width,this.height)}copyFromBounds(t){return this.x=t.minX,this.y=t.minY,this.width=t.maxX-t.minX,this.height=t.maxY-t.minY,this}copyFrom(t){return this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height,this}copyTo(t){return t.copyFrom(this),t}contains(t,n){return this.width<=0||this.height<=0?!1:t>=this.x&&t<this.x+this.width&&n>=this.y&&n<this.y+this.height}strokeContains(t,n,s){const{width:i,height:r}=this;if(i<=0||r<=0)return!1;const o=this.x,a=this.y,l=o-s/2,u=o+i+s/2,c=a-s/2,h=a+r+s/2,f=o+s/2,d=o+i-s/2,p=a+s/2,g=a+r-s/2;return t>=l&&t<=u&&n>=c&&n<=h&&!(t>f&&t<d&&n>p&&n<g)}intersects(t,n){if(!n){const k=this.x<t.x?t.x:this.x;if((this.right>t.right?t.right:this.right)<=k)return!1;const C=this.y<t.y?t.y:this.y;return(this.bottom>t.bottom?t.bottom:this.bottom)>C}const s=this.left,i=this.right,r=this.top,o=this.bottom;if(i<=s||o<=r)return!1;const a=Es[0].set(t.left,t.top),l=Es[1].set(t.left,t.bottom),u=Es[2].set(t.right,t.top),c=Es[3].set(t.right,t.bottom);if(u.x<=a.x||l.y<=a.y)return!1;const h=Math.sign(n.a*n.d-n.b*n.c);if(h===0||(n.apply(a,a),n.apply(l,l),n.apply(u,u),n.apply(c,c),Math.max(a.x,l.x,u.x,c.x)<=s||Math.min(a.x,l.x,u.x,c.x)>=i||Math.max(a.y,l.y,u.y,c.y)<=r||Math.min(a.y,l.y,u.y,c.y)>=o))return!1;const f=h*(l.y-a.y),d=h*(a.x-l.x),p=f*s+d*r,g=f*i+d*r,m=f*s+d*o,y=f*i+d*o;if(Math.max(p,g,m,y)<=f*a.x+d*a.y||Math.min(p,g,m,y)>=f*c.x+d*c.y)return!1;const v=h*(a.y-u.y),x=h*(u.x-a.x),w=v*s+x*r,E=v*i+x*r,M=v*s+x*o,z=v*i+x*o;return!(Math.max(w,E,M,z)<=v*a.x+x*a.y||Math.min(w,E,M,z)>=v*c.x+x*c.y)}pad(t=0,n=t){return this.x-=t,this.y-=n,this.width+=t*2,this.height+=n*2,this}fit(t){const n=Math.max(this.x,t.x),s=Math.min(this.x+this.width,t.x+t.width),i=Math.max(this.y,t.y),r=Math.min(this.y+this.height,t.y+t.height);return this.x=n,this.width=Math.max(s-n,0),this.y=i,this.height=Math.max(r-i,0),this}ceil(t=1,n=.001){const s=Math.ceil((this.x+this.width-n)*t)/t,i=Math.ceil((this.y+this.height-n)*t)/t;return this.x=Math.floor((this.x+n)*t)/t,this.y=Math.floor((this.y+n)*t)/t,this.width=s-this.x,this.height=i-this.y,this}enlarge(t){const n=Math.min(this.x,t.x),s=Math.max(this.x+this.width,t.x+t.width),i=Math.min(this.y,t.y),r=Math.max(this.y+this.height,t.y+t.height);return this.x=n,this.width=s-n,this.y=i,this.height=r-i,this}getBounds(t){return t=t||new wt,t.copyFrom(this),t}toString(){return`[pixi.js/math:Rectangle x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`}}const ji={default:-1};function At(e="default"){return ji[e]===void 0&&(ji[e]=-1),++ji[e]}const La={},ct="8.0.0";function ut(e,t,n=3){if(La[t])return;let s=new Error().stack;typeof s>"u"?console.warn("PixiJS Deprecation Warning: ",`${t}
Deprecated since v${e}`):(s=s.split(`
`).splice(n).join(`
`),console.groupCollapsed?(console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s","color:#614108;background:#fffbe6","font-weight:normal;color:#614108;background:#fffbe6",`${t}
Deprecated since v${e}`),console.warn(s),console.groupEnd()):(console.warn("PixiJS Deprecation Warning: ",`${t}
Deprecated since v${e}`),console.warn(s))),La[t]=!0}const Wc=()=>{};function ja(e){return e+=e===0?1:0,--e,e|=e>>>1,e|=e>>>2,e|=e>>>4,e|=e>>>8,e|=e>>>16,e+1}function Na(e){return!(e&e-1)&&!!e}function ip(e){const t={};for(const n in e)e[n]!==void 0&&(t[n]=e[n]);return t}const Ua=Object.create(null);function rp(e){const t=Ua[e];return t===void 0&&(Ua[e]=At("resource")),t}const Vc=class Xc extends ce{constructor(t={}){super(),this._resourceType="textureSampler",this._touched=0,this._maxAnisotropy=1,this.destroyed=!1,t={...Xc.defaultOptions,...t},this.addressMode=t.addressMode,this.addressModeU=t.addressModeU??this.addressModeU,this.addressModeV=t.addressModeV??this.addressModeV,this.addressModeW=t.addressModeW??this.addressModeW,this.scaleMode=t.scaleMode,this.magFilter=t.magFilter??this.magFilter,this.minFilter=t.minFilter??this.minFilter,this.mipmapFilter=t.mipmapFilter??this.mipmapFilter,this.lodMinClamp=t.lodMinClamp,this.lodMaxClamp=t.lodMaxClamp,this.compare=t.compare,this.maxAnisotropy=t.maxAnisotropy??1}set addressMode(t){this.addressModeU=t,this.addressModeV=t,this.addressModeW=t}get addressMode(){return this.addressModeU}set wrapMode(t){ut(ct,"TextureStyle.wrapMode is now TextureStyle.addressMode"),this.addressMode=t}get wrapMode(){return this.addressMode}set scaleMode(t){this.magFilter=t,this.minFilter=t,this.mipmapFilter=t}get scaleMode(){return this.magFilter}set maxAnisotropy(t){this._maxAnisotropy=Math.min(t,16),this._maxAnisotropy>1&&(this.scaleMode="linear")}get maxAnisotropy(){return this._maxAnisotropy}get _resourceId(){return this._sharedResourceId||this._generateResourceId()}update(){this.emit("change",this),this._sharedResourceId=null}_generateResourceId(){const t=`${this.addressModeU}-${this.addressModeV}-${this.addressModeW}-${this.magFilter}-${this.minFilter}-${this.mipmapFilter}-${this.lodMinClamp}-${this.lodMaxClamp}-${this.compare}-${this._maxAnisotropy}`;return this._sharedResourceId=rp(t),this._resourceId}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this.removeAllListeners()}};Vc.defaultOptions={addressMode:"clamp-to-edge",scaleMode:"linear"};let op=Vc;const Yc=class qc extends ce{constructor(t={}){super(),this.options=t,this.uid=At("textureSource"),this._resourceType="textureSource",this._resourceId=At("resource"),this.uploadMethodId="unknown",this._resolution=1,this.pixelWidth=1,this.pixelHeight=1,this.width=1,this.height=1,this.sampleCount=1,this.mipLevelCount=1,this.autoGenerateMipmaps=!1,this.format="rgba8unorm",this.dimension="2d",this.antialias=!1,this._touched=0,this._batchTick=-1,this._textureBindLocation=-1,t={...qc.defaultOptions,...t},this.label=t.label??"",this.resource=t.resource,this.autoGarbageCollect=t.autoGarbageCollect,this._resolution=t.resolution,t.width?this.pixelWidth=t.width*this._resolution:this.pixelWidth=this.resource?this.resourceWidth??1:1,t.height?this.pixelHeight=t.height*this._resolution:this.pixelHeight=this.resource?this.resourceHeight??1:1,this.width=this.pixelWidth/this._resolution,this.height=this.pixelHeight/this._resolution,this.format=t.format,this.dimension=t.dimensions,this.mipLevelCount=t.mipLevelCount,this.autoGenerateMipmaps=t.autoGenerateMipmaps,this.sampleCount=t.sampleCount,this.antialias=t.antialias,this.alphaMode=t.alphaMode,this.style=new op(ip(t)),this.destroyed=!1,this._refreshPOT()}get source(){return this}get style(){return this._style}set style(t){var n,s;this.style!==t&&((n=this._style)==null||n.off("change",this._onStyleChange,this),this._style=t,(s=this._style)==null||s.on("change",this._onStyleChange,this),this._onStyleChange())}get addressMode(){return this._style.addressMode}set addressMode(t){this._style.addressMode=t}get repeatMode(){return this._style.addressMode}set repeatMode(t){this._style.addressMode=t}get magFilter(){return this._style.magFilter}set magFilter(t){this._style.magFilter=t}get minFilter(){return this._style.minFilter}set minFilter(t){this._style.minFilter=t}get mipmapFilter(){return this._style.mipmapFilter}set mipmapFilter(t){this._style.mipmapFilter=t}get lodMinClamp(){return this._style.lodMinClamp}set lodMinClamp(t){this._style.lodMinClamp=t}get lodMaxClamp(){return this._style.lodMaxClamp}set lodMaxClamp(t){this._style.lodMaxClamp=t}_onStyleChange(){this.emit("styleChange",this)}update(){if(this.resource){const t=this._resolution;if(this.resize(this.resourceWidth/t,this.resourceHeight/t))return}this.emit("update",this)}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this._style&&(this._style.destroy(),this._style=null),this.uploadMethodId=null,this.resource=null,this.removeAllListeners()}unload(){this._resourceId=At("resource"),this.emit("change",this),this.emit("unload",this)}get resourceWidth(){const{resource:t}=this;return t.naturalWidth||t.videoWidth||t.displayWidth||t.width}get resourceHeight(){const{resource:t}=this;return t.naturalHeight||t.videoHeight||t.displayHeight||t.height}get resolution(){return this._resolution}set resolution(t){this._resolution!==t&&(this._resolution=t,this.width=this.pixelWidth/t,this.height=this.pixelHeight/t)}resize(t,n,s){s=s||this._resolution,t=t||this.width,n=n||this.height;const i=Math.round(t*s),r=Math.round(n*s);return this.width=i/s,this.height=r/s,this._resolution=s,this.pixelWidth===i&&this.pixelHeight===r?!1:(this._refreshPOT(),this.pixelWidth=i,this.pixelHeight=r,this.emit("resize",this),this._resourceId=At("resource"),this.emit("change",this),!0)}updateMipmaps(){this.autoGenerateMipmaps&&this.mipLevelCount>1&&this.emit("updateMipmaps",this)}set wrapMode(t){this._style.wrapMode=t}get wrapMode(){return this._style.wrapMode}set scaleMode(t){this._style.scaleMode=t}get scaleMode(){return this._style.scaleMode}_refreshPOT(){this.isPowerOfTwo=Na(this.pixelWidth)&&Na(this.pixelHeight)}static test(t){throw new Error("Unimplemented")}};Yc.defaultOptions={resolution:1,format:"bgra8unorm",alphaMode:"premultiply-alpha-on-upload",dimensions:"2d",mipLevelCount:1,autoGenerateMipmaps:!1,sampleCount:1,antialias:!1,autoGarbageCollect:!1};let We=Yc;class Co extends We{constructor(t){const n=t.resource||new Float32Array(t.width*t.height*4);let s=t.format;s||(n instanceof Float32Array?s="rgba32float":n instanceof Int32Array||n instanceof Uint32Array?s="rgba32uint":n instanceof Int16Array||n instanceof Uint16Array?s="rgba16uint":(n instanceof Int8Array,s="bgra8unorm")),super({...t,resource:n,format:s}),this.uploadMethodId="buffer"}static test(t){return t instanceof Int8Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Int16Array||t instanceof Uint16Array||t instanceof Int32Array||t instanceof Uint32Array||t instanceof Float32Array}}Co.extension=q.TextureSource;const Da=new at;class ap{constructor(t,n){this.mapCoord=new at,this.uClampFrame=new Float32Array(4),this.uClampOffset=new Float32Array(2),this._textureID=-1,this._updateID=0,this.clampOffset=0,typeof n>"u"?this.clampMargin=t.width<10?0:.5:this.clampMargin=n,this.isSimple=!1,this.texture=t}get texture(){return this._texture}set texture(t){var n;this.texture!==t&&((n=this._texture)==null||n.removeListener("update",this.update,this),this._texture=t,this._texture.addListener("update",this.update,this),this.update())}multiplyUvs(t,n){n===void 0&&(n=t);const s=this.mapCoord;for(let i=0;i<t.length;i+=2){const r=t[i],o=t[i+1];n[i]=r*s.a+o*s.c+s.tx,n[i+1]=r*s.b+o*s.d+s.ty}return n}update(){const t=this._texture;this._updateID++;const n=t.uvs;this.mapCoord.set(n.x1-n.x0,n.y1-n.y0,n.x3-n.x0,n.y3-n.y0,n.x0,n.y0);const s=t.orig,i=t.trim;i&&(Da.set(s.width/i.width,0,0,s.height/i.height,-i.x/i.width,-i.y/i.height),this.mapCoord.append(Da));const r=t.source,o=this.uClampFrame,a=this.clampMargin/r._resolution,l=this.clampOffset;return o[0]=(t.frame.x+a+l)/r.width,o[1]=(t.frame.y+a+l)/r.height,o[2]=(t.frame.x+t.frame.width-a+l)/r.width,o[3]=(t.frame.y+t.frame.height-a+l)/r.height,this.uClampOffset[0]=l/r.pixelWidth,this.uClampOffset[1]=l/r.pixelHeight,this.isSimple=t.frame.width===r.width&&t.frame.height===r.height&&t.rotate===0,!0}}class rt extends ce{constructor({source:t,label:n,frame:s,orig:i,trim:r,defaultAnchor:o,defaultBorders:a,rotate:l,dynamic:u}={}){if(super(),this.uid=At("texture"),this.uvs={x0:0,y0:0,x1:0,y1:0,x2:0,y2:0,x3:0,y3:0},this.frame=new wt,this.noFrame=!1,this.dynamic=!1,this.isTexture=!0,this.label=n,this.source=(t==null?void 0:t.source)??new We,this.noFrame=!s,s)this.frame.copyFrom(s);else{const{width:c,height:h}=this._source;this.frame.width=c,this.frame.height=h}this.orig=i||this.frame,this.trim=r,this.rotate=l??0,this.defaultAnchor=o,this.defaultBorders=a,this.destroyed=!1,this.dynamic=u||!1,this.updateUvs()}set source(t){this._source&&this._source.off("resize",this.update,this),this._source=t,t.on("resize",this.update,this),this.emit("update",this)}get source(){return this._source}get textureMatrix(){return this._textureMatrix||(this._textureMatrix=new ap(this)),this._textureMatrix}get width(){return this.orig.width}get height(){return this.orig.height}updateUvs(){const{uvs:t,frame:n}=this,{width:s,height:i}=this._source,r=n.x/s,o=n.y/i,a=n.width/s,l=n.height/i;let u=this.rotate;if(u){const c=a/2,h=l/2,f=r+c,d=o+h;u=pt.add(u,pt.NW),t.x0=f+c*pt.uX(u),t.y0=d+h*pt.uY(u),u=pt.add(u,2),t.x1=f+c*pt.uX(u),t.y1=d+h*pt.uY(u),u=pt.add(u,2),t.x2=f+c*pt.uX(u),t.y2=d+h*pt.uY(u),u=pt.add(u,2),t.x3=f+c*pt.uX(u),t.y3=d+h*pt.uY(u)}else t.x0=r,t.y0=o,t.x1=r+a,t.y1=o,t.x2=r+a,t.y2=o+l,t.x3=r,t.y3=o+l}destroy(t=!1){this._source&&t&&(this._source.destroy(),this._source=null),this._textureMatrix=null,this.destroyed=!0,this.emit("destroy",this),this.removeAllListeners()}update(){this.noFrame&&(this.frame.width=this._source.width,this.frame.height=this._source.height),this.updateUvs(),this.emit("update",this)}get baseTexture(){return ut(ct,"Texture.baseTexture is now Texture.source"),this._source}}rt.EMPTY=new rt({label:"EMPTY",source:new We({label:"EMPTY"})});rt.EMPTY.destroy=Wc;rt.WHITE=new rt({source:new Co({resource:new Uint8Array([255,255,255,255]),width:1,height:1,alphaMode:"premultiply-alpha-on-upload",label:"WHITE"}),label:"WHITE"});rt.WHITE.destroy=Wc;function lp(e,t,n,s){const{width:i,height:r}=n.orig,o=n.trim;if(o){const a=o.width,l=o.height;e.minX=o.x-t._x*i-s,e.maxX=e.minX+a,e.minY=o.y-t._y*r-s,e.maxY=e.minY+l}else e.minX=-t._x*i-s,e.maxX=e.minX+i,e.minY=-t._y*r-s,e.maxY=e.minY+r}var cp={grad:.9,turn:360,rad:360/(2*Math.PI)},be=function(e){return typeof e=="string"?e.length>0:typeof e=="number"},Pt=function(e,t,n){return t===void 0&&(t=0),n===void 0&&(n=Math.pow(10,t)),Math.round(n*e)/n+0},Zt=function(e,t,n){return t===void 0&&(t=0),n===void 0&&(n=1),e>n?n:e>t?e:t},Kc=function(e){return(e=isFinite(e)?e%360:0)>0?e:e+360},Ga=function(e){return{r:Zt(e.r,0,255),g:Zt(e.g,0,255),b:Zt(e.b,0,255),a:Zt(e.a)}},Ni=function(e){return{r:Pt(e.r),g:Pt(e.g),b:Pt(e.b),a:Pt(e.a,3)}},up=/^#([0-9a-f]{3,8})$/i,Is=function(e){var t=e.toString(16);return t.length<2?"0"+t:t},Zc=function(e){var t=e.r,n=e.g,s=e.b,i=e.a,r=Math.max(t,n,s),o=r-Math.min(t,n,s),a=o?r===t?(n-s)/o:r===n?2+(s-t)/o:4+(t-n)/o:0;return{h:60*(a<0?a+6:a),s:r?o/r*100:0,v:r/255*100,a:i}},Qc=function(e){var t=e.h,n=e.s,s=e.v,i=e.a;t=t/360*6,n/=100,s/=100;var r=Math.floor(t),o=s*(1-n),a=s*(1-(t-r)*n),l=s*(1-(1-t+r)*n),u=r%6;return{r:255*[s,a,o,o,l,s][u],g:255*[l,s,s,a,o,o][u],b:255*[o,o,l,s,s,a][u],a:i}},Ha=function(e){return{h:Kc(e.h),s:Zt(e.s,0,100),l:Zt(e.l,0,100),a:Zt(e.a)}},$a=function(e){return{h:Pt(e.h),s:Pt(e.s),l:Pt(e.l),a:Pt(e.a,3)}},Wa=function(e){return Qc((n=(t=e).s,{h:t.h,s:(n*=((s=t.l)<50?s:100-s)/100)>0?2*n/(s+n)*100:0,v:s+n,a:t.a}));var t,n,s},es=function(e){return{h:(t=Zc(e)).h,s:(i=(200-(n=t.s))*(s=t.v)/100)>0&&i<200?n*s/100/(i<=100?i:200-i)*100:0,l:i/2,a:t.a};var t,n,s,i},hp=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,fp=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,dp=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,pp=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Fr={string:[[function(e){var t=up.exec(e);return t?(e=t[1]).length<=4?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:e.length===4?Pt(parseInt(e[3]+e[3],16)/255,2):1}:e.length===6||e.length===8?{r:parseInt(e.substr(0,2),16),g:parseInt(e.substr(2,2),16),b:parseInt(e.substr(4,2),16),a:e.length===8?Pt(parseInt(e.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(e){var t=dp.exec(e)||pp.exec(e);return t?t[2]!==t[4]||t[4]!==t[6]?null:Ga({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:t[7]===void 0?1:Number(t[7])/(t[8]?100:1)}):null},"rgb"],[function(e){var t=hp.exec(e)||fp.exec(e);if(!t)return null;var n,s,i=Ha({h:(n=t[1],s=t[2],s===void 0&&(s="deg"),Number(n)*(cp[s]||1)),s:Number(t[3]),l:Number(t[4]),a:t[5]===void 0?1:Number(t[5])/(t[6]?100:1)});return Wa(i)},"hsl"]],object:[[function(e){var t=e.r,n=e.g,s=e.b,i=e.a,r=i===void 0?1:i;return be(t)&&be(n)&&be(s)?Ga({r:Number(t),g:Number(n),b:Number(s),a:Number(r)}):null},"rgb"],[function(e){var t=e.h,n=e.s,s=e.l,i=e.a,r=i===void 0?1:i;if(!be(t)||!be(n)||!be(s))return null;var o=Ha({h:Number(t),s:Number(n),l:Number(s),a:Number(r)});return Wa(o)},"hsl"],[function(e){var t=e.h,n=e.s,s=e.v,i=e.a,r=i===void 0?1:i;if(!be(t)||!be(n)||!be(s))return null;var o=function(a){return{h:Kc(a.h),s:Zt(a.s,0,100),v:Zt(a.v,0,100),a:Zt(a.a)}}({h:Number(t),s:Number(n),v:Number(s),a:Number(r)});return Qc(o)},"hsv"]]},Va=function(e,t){for(var n=0;n<t.length;n++){var s=t[n][0](e);if(s)return[s,t[n][1]]}return[null,void 0]},mp=function(e){return typeof e=="string"?Va(e.trim(),Fr.string):typeof e=="object"&&e!==null?Va(e,Fr.object):[null,void 0]},Ui=function(e,t){var n=es(e);return{h:n.h,s:Zt(n.s+100*t,0,100),l:n.l,a:n.a}},Di=function(e){return(299*e.r+587*e.g+114*e.b)/1e3/255},Xa=function(e,t){var n=es(e);return{h:n.h,s:n.s,l:Zt(n.l+100*t,0,100),a:n.a}},Br=function(){function e(t){this.parsed=mp(t)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return e.prototype.isValid=function(){return this.parsed!==null},e.prototype.brightness=function(){return Pt(Di(this.rgba),2)},e.prototype.isDark=function(){return Di(this.rgba)<.5},e.prototype.isLight=function(){return Di(this.rgba)>=.5},e.prototype.toHex=function(){return t=Ni(this.rgba),n=t.r,s=t.g,i=t.b,o=(r=t.a)<1?Is(Pt(255*r)):"","#"+Is(n)+Is(s)+Is(i)+o;var t,n,s,i,r,o},e.prototype.toRgb=function(){return Ni(this.rgba)},e.prototype.toRgbString=function(){return t=Ni(this.rgba),n=t.r,s=t.g,i=t.b,(r=t.a)<1?"rgba("+n+", "+s+", "+i+", "+r+")":"rgb("+n+", "+s+", "+i+")";var t,n,s,i,r},e.prototype.toHsl=function(){return $a(es(this.rgba))},e.prototype.toHslString=function(){return t=$a(es(this.rgba)),n=t.h,s=t.s,i=t.l,(r=t.a)<1?"hsla("+n+", "+s+"%, "+i+"%, "+r+")":"hsl("+n+", "+s+"%, "+i+"%)";var t,n,s,i,r},e.prototype.toHsv=function(){return t=Zc(this.rgba),{h:Pt(t.h),s:Pt(t.s),v:Pt(t.v),a:Pt(t.a,3)};var t},e.prototype.invert=function(){return pe({r:255-(t=this.rgba).r,g:255-t.g,b:255-t.b,a:t.a});var t},e.prototype.saturate=function(t){return t===void 0&&(t=.1),pe(Ui(this.rgba,t))},e.prototype.desaturate=function(t){return t===void 0&&(t=.1),pe(Ui(this.rgba,-t))},e.prototype.grayscale=function(){return pe(Ui(this.rgba,-1))},e.prototype.lighten=function(t){return t===void 0&&(t=.1),pe(Xa(this.rgba,t))},e.prototype.darken=function(t){return t===void 0&&(t=.1),pe(Xa(this.rgba,-t))},e.prototype.rotate=function(t){return t===void 0&&(t=15),this.hue(this.hue()+t)},e.prototype.alpha=function(t){return typeof t=="number"?pe({r:(n=this.rgba).r,g:n.g,b:n.b,a:t}):Pt(this.rgba.a,3);var n},e.prototype.hue=function(t){var n=es(this.rgba);return typeof t=="number"?pe({h:t,s:n.s,l:n.l,a:n.a}):Pt(n.h)},e.prototype.isEqual=function(t){return this.toHex()===pe(t).toHex()},e}(),pe=function(e){return e instanceof Br?e:new Br(e)},Ya=[],gp=function(e){e.forEach(function(t){Ya.indexOf(t)<0&&(t(Br,Fr),Ya.push(t))})};function xp(e,t){var n={white:"#ffffff",bisque:"#ffe4c4",blue:"#0000ff",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",antiquewhite:"#faebd7",aqua:"#00ffff",azure:"#f0ffff",whitesmoke:"#f5f5f5",papayawhip:"#ffefd5",plum:"#dda0dd",blanchedalmond:"#ffebcd",black:"#000000",gold:"#ffd700",goldenrod:"#daa520",gainsboro:"#dcdcdc",cornsilk:"#fff8dc",cornflowerblue:"#6495ed",burlywood:"#deb887",aquamarine:"#7fffd4",beige:"#f5f5dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkkhaki:"#bdb76b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",peachpuff:"#ffdab9",darkmagenta:"#8b008b",darkred:"#8b0000",darkorchid:"#9932cc",darkorange:"#ff8c00",darkslateblue:"#483d8b",gray:"#808080",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",deeppink:"#ff1493",deepskyblue:"#00bfff",wheat:"#f5deb3",firebrick:"#b22222",floralwhite:"#fffaf0",ghostwhite:"#f8f8ff",darkviolet:"#9400d3",magenta:"#ff00ff",green:"#008000",dodgerblue:"#1e90ff",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",blueviolet:"#8a2be2",forestgreen:"#228b22",lawngreen:"#7cfc00",indianred:"#cd5c5c",indigo:"#4b0082",fuchsia:"#ff00ff",brown:"#a52a2a",maroon:"#800000",mediumblue:"#0000cd",lightcoral:"#f08080",darkturquoise:"#00ced1",lightcyan:"#e0ffff",ivory:"#fffff0",lightyellow:"#ffffe0",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",linen:"#faf0e6",mediumaquamarine:"#66cdaa",lemonchiffon:"#fffacd",lime:"#00ff00",khaki:"#f0e68c",mediumseagreen:"#3cb371",limegreen:"#32cd32",mediumspringgreen:"#00fa9a",lightskyblue:"#87cefa",lightblue:"#add8e6",midnightblue:"#191970",lightpink:"#ffb6c1",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",mintcream:"#f5fffa",lightslategray:"#778899",lightslategrey:"#778899",navajowhite:"#ffdead",navy:"#000080",mediumvioletred:"#c71585",powderblue:"#b0e0e6",palegoldenrod:"#eee8aa",oldlace:"#fdf5e6",paleturquoise:"#afeeee",mediumturquoise:"#48d1cc",mediumorchid:"#ba55d3",rebeccapurple:"#663399",lightsteelblue:"#b0c4de",mediumslateblue:"#7b68ee",thistle:"#d8bfd8",tan:"#d2b48c",orchid:"#da70d6",mediumpurple:"#9370db",purple:"#800080",pink:"#ffc0cb",skyblue:"#87ceeb",springgreen:"#00ff7f",palegreen:"#98fb98",red:"#ff0000",yellow:"#ffff00",slateblue:"#6a5acd",lavenderblush:"#fff0f5",peru:"#cd853f",palevioletred:"#db7093",violet:"#ee82ee",teal:"#008080",slategray:"#708090",slategrey:"#708090",aliceblue:"#f0f8ff",darkseagreen:"#8fbc8f",darkolivegreen:"#556b2f",greenyellow:"#adff2f",seagreen:"#2e8b57",seashell:"#fff5ee",tomato:"#ff6347",silver:"#c0c0c0",sienna:"#a0522d",lavender:"#e6e6fa",lightgreen:"#90ee90",orange:"#ffa500",orangered:"#ff4500",steelblue:"#4682b4",royalblue:"#4169e1",turquoise:"#40e0d0",yellowgreen:"#9acd32",salmon:"#fa8072",saddlebrown:"#8b4513",sandybrown:"#f4a460",rosybrown:"#bc8f8f",darksalmon:"#e9967a",lightgoldenrodyellow:"#fafad2",snow:"#fffafa",lightgrey:"#d3d3d3",lightgray:"#d3d3d3",dimgray:"#696969",dimgrey:"#696969",olivedrab:"#6b8e23",olive:"#808000"},s={};for(var i in n)s[n[i]]=i;var r={};e.prototype.toName=function(o){if(!(this.rgba.a||this.rgba.r||this.rgba.g||this.rgba.b))return"transparent";var a,l,u=s[this.toHex()];if(u)return u;if(o!=null&&o.closest){var c=this.toRgb(),h=1/0,f="black";if(!r.length)for(var d in n)r[d]=new e(n[d]).toRgb();for(var p in n){var g=(a=c,l=r[p],Math.pow(a.r-l.r,2)+Math.pow(a.g-l.g,2)+Math.pow(a.b-l.b,2));g<h&&(h=g,f=p)}return f}},t.string.push([function(o){var a=o.toLowerCase(),l=a==="transparent"?"#0000":n[a];return l?new e(l).toRgb():null},"name"])}gp([xp]);const Mn=class Wn{constructor(t=16777215){this._value=null,this._components=new Float32Array(4),this._components.fill(1),this._int=16777215,this.value=t}get red(){return this._components[0]}get green(){return this._components[1]}get blue(){return this._components[2]}get alpha(){return this._components[3]}setValue(t){return this.value=t,this}set value(t){if(t instanceof Wn)this._value=this._cloneSource(t._value),this._int=t._int,this._components.set(t._components);else{if(t===null)throw new Error("Cannot set Color#value to null");(this._value===null||!this._isSourceEqual(this._value,t))&&(this._normalize(t),this._value=this._cloneSource(t))}}get value(){return this._value}_cloneSource(t){return typeof t=="string"||typeof t=="number"||t instanceof Number||t===null?t:Array.isArray(t)||ArrayBuffer.isView(t)?t.slice(0):typeof t=="object"&&t!==null?{...t}:t}_isSourceEqual(t,n){const s=typeof t;if(s!==typeof n)return!1;if(s==="number"||s==="string"||t instanceof Number)return t===n;if(Array.isArray(t)&&Array.isArray(n)||ArrayBuffer.isView(t)&&ArrayBuffer.isView(n))return t.length!==n.length?!1:t.every((r,o)=>r===n[o]);if(t!==null&&n!==null){const r=Object.keys(t),o=Object.keys(n);return r.length!==o.length?!1:r.every(a=>t[a]===n[a])}return t===n}toRgba(){const[t,n,s,i]=this._components;return{r:t,g:n,b:s,a:i}}toRgb(){const[t,n,s]=this._components;return{r:t,g:n,b:s}}toRgbaString(){const[t,n,s]=this.toUint8RgbArray();return`rgba(${t},${n},${s},${this.alpha})`}toUint8RgbArray(t){const[n,s,i]=this._components;return this._arrayRgb||(this._arrayRgb=[]),t=t||this._arrayRgb,t[0]=Math.round(n*255),t[1]=Math.round(s*255),t[2]=Math.round(i*255),t}toArray(t){this._arrayRgba||(this._arrayRgba=[]),t=t||this._arrayRgba;const[n,s,i,r]=this._components;return t[0]=n,t[1]=s,t[2]=i,t[3]=r,t}toRgbArray(t){this._arrayRgb||(this._arrayRgb=[]),t=t||this._arrayRgb;const[n,s,i]=this._components;return t[0]=n,t[1]=s,t[2]=i,t}toNumber(){return this._int}toBgrNumber(){const[t,n,s]=this.toUint8RgbArray();return(s<<16)+(n<<8)+t}toLittleEndianNumber(){const t=this._int;return(t>>16)+(t&65280)+((t&255)<<16)}multiply(t){const[n,s,i,r]=Wn._temp.setValue(t)._components;return this._components[0]*=n,this._components[1]*=s,this._components[2]*=i,this._components[3]*=r,this._refreshInt(),this._value=null,this}premultiply(t,n=!0){return n&&(this._components[0]*=t,this._components[1]*=t,this._components[2]*=t),this._components[3]=t,this._refreshInt(),this._value=null,this}toPremultiplied(t,n=!0){if(t===1)return(255<<24)+this._int;if(t===0)return n?0:this._int;let s=this._int>>16&255,i=this._int>>8&255,r=this._int&255;return n&&(s=s*t+.5|0,i=i*t+.5|0,r=r*t+.5|0),(t*255<<24)+(s<<16)+(i<<8)+r}toHex(){const t=this._int.toString(16);return`#${"000000".substring(0,6-t.length)+t}`}toHexa(){const n=Math.round(this._components[3]*255).toString(16);return this.toHex()+"00".substring(0,2-n.length)+n}setAlpha(t){return this._components[3]=this._clamp(t),this}_normalize(t){let n,s,i,r;if((typeof t=="number"||t instanceof Number)&&t>=0&&t<=16777215){const o=t;n=(o>>16&255)/255,s=(o>>8&255)/255,i=(o&255)/255,r=1}else if((Array.isArray(t)||t instanceof Float32Array)&&t.length>=3&&t.length<=4)t=this._clamp(t),[n,s,i,r=1]=t;else if((t instanceof Uint8Array||t instanceof Uint8ClampedArray)&&t.length>=3&&t.length<=4)t=this._clamp(t,0,255),[n,s,i,r=255]=t,n/=255,s/=255,i/=255,r/=255;else if(typeof t=="string"||typeof t=="object"){if(typeof t=="string"){const a=Wn.HEX_PATTERN.exec(t);a&&(t=`#${a[2]}`)}const o=pe(t);o.isValid()&&({r:n,g:s,b:i,a:r}=o.rgba,n/=255,s/=255,i/=255)}if(n!==void 0)this._components[0]=n,this._components[1]=s,this._components[2]=i,this._components[3]=r,this._refreshInt();else throw new Error(`Unable to convert color ${t}`)}_refreshInt(){this._clamp(this._components);const[t,n,s]=this._components;this._int=(t*255<<16)+(n*255<<8)+(s*255|0)}_clamp(t,n=0,s=1){return typeof t=="number"?Math.min(Math.max(t,n),s):(t.forEach((i,r)=>{t[r]=Math.min(Math.max(i,n),s)}),t)}static isColorLike(t){return typeof t=="number"||typeof t=="string"||t instanceof Number||t instanceof Wn||Array.isArray(t)||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Float32Array||t.r!==void 0&&t.g!==void 0&&t.b!==void 0||t.r!==void 0&&t.g!==void 0&&t.b!==void 0&&t.a!==void 0||t.h!==void 0&&t.s!==void 0&&t.l!==void 0||t.h!==void 0&&t.s!==void 0&&t.l!==void 0&&t.a!==void 0||t.h!==void 0&&t.s!==void 0&&t.v!==void 0||t.h!==void 0&&t.s!==void 0&&t.v!==void 0&&t.a!==void 0}};Mn.shared=new Mn;Mn._temp=new Mn;Mn.HEX_PATTERN=/^(#|0x)?(([a-f0-9]{3}){1,2}([a-f0-9]{2})?)$/i;let yt=Mn;const vp={cullArea:null,cullable:!1,cullableChildren:!0};function _p(e,t,n){const s=e.length;let i;if(t>=s||n===0)return;n=t+n>s?s-t:n;const r=s-n;for(i=t;i<r;++i)e[i]=e[i+n];e.length=r}const yp={allowChildren:!0,removeChildren(e=0,t){const n=t??this.children.length,s=n-e,i=[];if(s>0&&s<=n){for(let o=n-1;o>=e;o--){const a=this.children[o];a&&(i.push(a),a.parent=null)}_p(this.children,e,n);const r=this.renderGroup||this.parentRenderGroup;r&&r.removeChildren(i);for(let o=0;o<i.length;++o)this.emit("childRemoved",i[o],this,o),i[o].emit("removed",this);return i}else if(s===0&&this.children.length===0)return i;throw new RangeError("removeChildren: numeric values are outside the acceptable range.")},removeChildAt(e){const t=this.getChildAt(e);return this.removeChild(t)},getChildAt(e){if(e<0||e>=this.children.length)throw new Error(`getChildAt: Index (${e}) does not exist.`);return this.children[e]},setChildIndex(e,t){if(t<0||t>=this.children.length)throw new Error(`The index ${t} supplied is out of bounds ${this.children.length}`);this.getChildIndex(e),this.addChildAt(e,t)},getChildIndex(e){const t=this.children.indexOf(e);if(t===-1)throw new Error("The supplied Container must be a child of the caller");return t},addChildAt(e,t){this.allowChildren||ut(ct,"addChildAt: Only Containers will be allowed to add children in v8.0.0");const{children:n}=this;if(t<0||t>n.length)throw new Error(`${e}addChildAt: The index ${t} supplied is out of bounds ${n.length}`);if(e.parent){const i=e.parent.children.indexOf(e);if(e.parent===this&&i===t)return e;i!==-1&&e.parent.children.splice(i,1)}t===n.length?n.push(e):n.splice(t,0,e),e.parent=this,e.didChange=!0,e.didViewUpdate=!1,e._updateFlags=15;const s=this.renderGroup||this.parentRenderGroup;return s&&s.addChild(e),this.sortableChildren&&(this.sortDirty=!0),this.emit("childAdded",e,this,t),e.emit("added",this),e},swapChildren(e,t){if(e===t)return;const n=this.getChildIndex(e),s=this.getChildIndex(t);this.children[n]=t,this.children[s]=e},removeFromParent(){var e;(e=this.parent)==null||e.removeChild(this)}};class qa{constructor(){this.pipe="filter",this.priority=1}destroy(){for(let t=0;t<this.filters.length;t++)this.filters[t].destroy();this.filters=null,this.filterArea=null}}class So{constructor(t,n){this._pool=[],this._count=0,this._index=0,this._classType=t,n&&this.prepopulate(n)}prepopulate(t){for(let n=0;n<t;n++)this._pool[this._index++]=new this._classType;this._count+=t}get(t){var s;let n;return this._index>0?n=this._pool[--this._index]:n=new this._classType,(s=n.init)==null||s.call(n,t),n}return(t){var n;(n=t.reset)==null||n.call(t),this._pool[this._index++]=t}get totalSize(){return this._count}get totalFree(){return this._index}get totalUsed(){return this._count-this._index}}class bp{constructor(){this._poolsByClass=new Map}prepopulate(t,n){this.getPool(t).prepopulate(n)}get(t,n){return this.getPool(t).get(n)}return(t){this.getPool(t.constructor).return(t)}getPool(t){return this._poolsByClass.has(t)||this._poolsByClass.set(t,new So(t)),this._poolsByClass.get(t)}stats(){const t={};return this._poolsByClass.forEach(n=>{const s=t[n._classType.name]?n._classType.name+n._classType.ID:n._classType.name;t[s]={free:n.totalFree,used:n.totalUsed,size:n.totalSize}}),t}}const we=new bp;class wp{constructor(){this._effectClasses=[],this._tests=[],this._initialized=!1}init(){this._initialized||(this._initialized=!0,this._effectClasses.forEach(t=>{this.add({test:t.test,maskClass:t})}))}add(t){this._tests.push(t)}getMaskEffect(t){this._initialized||this.init();for(let n=0;n<this._tests.length;n++){const s=this._tests[n];if(s.test(t))return we.get(s.maskClass,t)}return t}returnMaskEffect(t){we.return(t)}}const zr=new wp;Jt.handleByList(q.MaskEffect,zr._effectClasses);const Ap={_maskEffect:null,_filterEffect:null,effects:[],addEffect(e){if(this.effects.indexOf(e)!==-1)return;this.effects.push(e),this.effects.sort((s,i)=>s.priority-i.priority);const n=this.renderGroup||this.parentRenderGroup;n&&(n.structureDidChange=!0),this._updateIsSimple()},removeEffect(e){const t=this.effects.indexOf(e);t!==-1&&(this.effects.splice(t,1),this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateIsSimple())},set mask(e){const t=this._maskEffect;(t==null?void 0:t.mask)!==e&&(t&&(this.removeEffect(t),zr.returnMaskEffect(t),this._maskEffect=null),e!=null&&(this._maskEffect=zr.getMaskEffect(e),this.addEffect(this._maskEffect)))},get mask(){var e;return(e=this._maskEffect)==null?void 0:e.mask},set filters(e){var r;!Array.isArray(e)&&e&&(e=[e]);const t=this._filterEffect||(this._filterEffect=new qa);e=e;const n=(e==null?void 0:e.length)>0,s=((r=t.filters)==null?void 0:r.length)>0,i=n!==s;e=Array.isArray(e)?e.slice(0):e,t.filters=Object.freeze(e),i&&(n?this.addEffect(t):(this.removeEffect(t),t.filters=e??null))},get filters(){var e;return(e=this._filterEffect)==null?void 0:e.filters},set filterArea(e){this._filterEffect||(this._filterEffect=new qa),this._filterEffect.filterArea=e},get filterArea(){var e;return(e=this._filterEffect)==null?void 0:e.filterArea}},Cp={label:null,get name(){return ut(ct,"Container.name property has been removed, use Container.label instead"),this.label},set name(e){ut(ct,"Container.name property has been removed, use Container.label instead"),this.label=e},getChildByName(e,t=!1){return this.getChildByLabel(e,t)},getChildByLabel(e,t=!1){const n=this.children;for(let s=0;s<n.length;s++){const i=n[s];if(i.label===e||e instanceof RegExp&&e.test(i.label))return i}if(t)for(let s=0;s<n.length;s++){const r=n[s].getChildByLabel(e,!0);if(r)return r}return null},getChildrenByLabel(e,t=!1,n=[]){const s=this.children;for(let i=0;i<s.length;i++){const r=s[i];(r.label===e||e instanceof RegExp&&e.test(r.label))&&n.push(r)}if(t)for(let i=0;i<s.length;i++)s[i].getChildrenByLabel(e,!0,n);return n}},Ka=new at;class Me{constructor(t=1/0,n=1/0,s=-1/0,i=-1/0){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.matrix=Ka,this.minX=t,this.minY=n,this.maxX=s,this.maxY=i}isEmpty(){return this.minX>this.maxX||this.minY>this.maxY}get rectangle(){this._rectangle||(this._rectangle=new wt);const t=this._rectangle;return this.minX>this.maxX||this.minY>this.maxY?(t.x=0,t.y=0,t.width=0,t.height=0):t.copyFromBounds(this),t}clear(){return this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.matrix=Ka,this}set(t,n,s,i){this.minX=t,this.minY=n,this.maxX=s,this.maxY=i}addFrame(t,n,s,i,r){r||(r=this.matrix);const o=r.a,a=r.b,l=r.c,u=r.d,c=r.tx,h=r.ty;let f=this.minX,d=this.minY,p=this.maxX,g=this.maxY,m=o*t+l*n+c,y=a*t+u*n+h;m<f&&(f=m),y<d&&(d=y),m>p&&(p=m),y>g&&(g=y),m=o*s+l*n+c,y=a*s+u*n+h,m<f&&(f=m),y<d&&(d=y),m>p&&(p=m),y>g&&(g=y),m=o*t+l*i+c,y=a*t+u*i+h,m<f&&(f=m),y<d&&(d=y),m>p&&(p=m),y>g&&(g=y),m=o*s+l*i+c,y=a*s+u*i+h,m<f&&(f=m),y<d&&(d=y),m>p&&(p=m),y>g&&(g=y),this.minX=f,this.minY=d,this.maxX=p,this.maxY=g}addRect(t,n){this.addFrame(t.x,t.y,t.x+t.width,t.y+t.height,n)}addBounds(t,n){this.addFrame(t.minX,t.minY,t.maxX,t.maxY,n)}addBoundsMask(t){this.minX=this.minX>t.minX?this.minX:t.minX,this.minY=this.minY>t.minY?this.minY:t.minY,this.maxX=this.maxX<t.maxX?this.maxX:t.maxX,this.maxY=this.maxY<t.maxY?this.maxY:t.maxY}applyMatrix(t){const n=this.minX,s=this.minY,i=this.maxX,r=this.maxY,{a:o,b:a,c:l,d:u,tx:c,ty:h}=t;let f=o*n+l*s+c,d=a*n+u*s+h;this.minX=f,this.minY=d,this.maxX=f,this.maxY=d,f=o*i+l*s+c,d=a*i+u*s+h,this.minX=f<this.minX?f:this.minX,this.minY=d<this.minY?d:this.minY,this.maxX=f>this.maxX?f:this.maxX,this.maxY=d>this.maxY?d:this.maxY,f=o*n+l*r+c,d=a*n+u*r+h,this.minX=f<this.minX?f:this.minX,this.minY=d<this.minY?d:this.minY,this.maxX=f>this.maxX?f:this.maxX,this.maxY=d>this.maxY?d:this.maxY,f=o*i+l*r+c,d=a*i+u*r+h,this.minX=f<this.minX?f:this.minX,this.minY=d<this.minY?d:this.minY,this.maxX=f>this.maxX?f:this.maxX,this.maxY=d>this.maxY?d:this.maxY}fit(t){return this.minX<t.left&&(this.minX=t.left),this.maxX>t.right&&(this.maxX=t.right),this.minY<t.top&&(this.minY=t.top),this.maxY>t.bottom&&(this.maxY=t.bottom),this}fitBounds(t,n,s,i){return this.minX<t&&(this.minX=t),this.maxX>n&&(this.maxX=n),this.minY<s&&(this.minY=s),this.maxY>i&&(this.maxY=i),this}pad(t,n=t){return this.minX-=t,this.maxX+=t,this.minY-=n,this.maxY+=n,this}ceil(){return this.minX=Math.floor(this.minX),this.minY=Math.floor(this.minY),this.maxX=Math.ceil(this.maxX),this.maxY=Math.ceil(this.maxY),this}clone(){return new Me(this.minX,this.minY,this.maxX,this.maxY)}scale(t,n=t){return this.minX*=t,this.minY*=n,this.maxX*=t,this.maxY*=n,this}get x(){return this.minX}set x(t){const n=this.maxX-this.minX;this.minX=t,this.maxX=t+n}get y(){return this.minY}set y(t){const n=this.maxY-this.minY;this.minY=t,this.maxY=t+n}get width(){return this.maxX-this.minX}set width(t){this.maxX=this.minX+t}get height(){return this.maxY-this.minY}set height(t){this.maxY=this.minY+t}get left(){return this.minX}get right(){return this.maxX}get top(){return this.minY}get bottom(){return this.maxY}get isPositive(){return this.maxX-this.minX>0&&this.maxY-this.minY>0}get isValid(){return this.minX+this.minY!==1/0}addVertexData(t,n,s,i){let r=this.minX,o=this.minY,a=this.maxX,l=this.maxY;i||(i=this.matrix);const u=i.a,c=i.b,h=i.c,f=i.d,d=i.tx,p=i.ty;for(let g=n;g<s;g+=2){const m=t[g],y=t[g+1],v=u*m+h*y+d,x=c*m+f*y+p;r=v<r?v:r,o=x<o?x:o,a=v>a?v:a,l=x>l?x:l}this.minX=r,this.minY=o,this.maxX=a,this.maxY=l}containsPoint(t,n){return this.minX<=t&&this.minY<=n&&this.maxX>=t&&this.maxY>=n}toString(){return`[pixi.js:Bounds minX=${this.minX} minY=${this.minY} maxX=${this.maxX} maxY=${this.maxY} width=${this.width} height=${this.height}]`}}const Ce=new So(at),Pn=new So(Me);function Jc(e,t,n){n.clear();let s,i;return e.parent?t?s=e.parent.worldTransform:(i=Ce.get().identity(),s=ei(e,i)):s=at.IDENTITY,tu(e,n,s,t),i&&Ce.return(i),n.isValid||n.set(0,0,0,0),n}function tu(e,t,n,s){var a,l;if(!e.visible||!e.measurable)return;let i;s?i=e.worldTransform:(e.updateLocalTransform(),i=Ce.get(),i.appendFrom(e.localTransform,n));const r=t,o=!!e.effects.length;if(o&&(t=Pn.get().clear()),e.boundsArea)t.addRect(e.boundsArea,i);else{e.addBounds&&(t.matrix=i,e.addBounds(t));for(let u=0;u<e.children.length;u++)tu(e.children[u],t,i,s)}if(o){for(let u=0;u<e.effects.length;u++)(l=(a=e.effects[u]).addBounds)==null||l.call(a,t);r.addBounds(t,at.IDENTITY),Pn.return(t)}s||Ce.return(i)}function ei(e,t){const n=e.parent;return n&&(ei(n,t),n.updateLocalTransform(),t.append(n.localTransform)),t}let Gi=0;const Za=500;function Tt(...e){Gi!==Za&&(Gi++,Gi===Za?console.warn("PixiJS Warning: too many warnings, no more warnings will be reported to the console by PixiJS."):console.warn("PixiJS Warning: ",...e))}function eu(e,t,n){return t.clear(),n||(n=at.IDENTITY),nu(e,t,n,e,!0),t.isValid||t.set(0,0,0,0),t}function nu(e,t,n,s,i){var l,u;let r;if(i)r=Ce.get(),r=n.copyTo(r);else{if(!e.visible||!e.measurable)return;e.updateLocalTransform();const c=e.localTransform;r=Ce.get(),r.appendFrom(c,n)}const o=t,a=!!e.effects.length;if(a&&(t=Pn.get().clear()),e.boundsArea)t.addRect(e.boundsArea,r);else{e.renderPipeId&&(t.matrix=r,e.addBounds(t));const c=e.children;for(let h=0;h<c.length;h++)nu(c[h],t,r,s,!1)}if(a){for(let c=0;c<e.effects.length;c++)(u=(l=e.effects[c]).addLocalBounds)==null||u.call(l,t,s);o.addBounds(t,at.IDENTITY),Pn.return(t)}Ce.return(r)}function su(e,t){const n=e.children;for(let s=0;s<n.length;s++){const i=n[s],r=(i.uid&255)<<24|i._didChangeId&16777215;t.data[t.index]!==r&&(t.data[t.index]=r,t.didChange=!0),t.index++,i.children.length&&su(i,t)}return t.didChange}const Sp=new at,Mp={_localBoundsCacheId:-1,_localBoundsCacheData:null,_setWidth(e,t){const n=Math.sign(this.scale.x)||1;t!==0?this.scale.x=e/t*n:this.scale.x=n},_setHeight(e,t){const n=Math.sign(this.scale.y)||1;t!==0?this.scale.y=e/t*n:this.scale.y=n},getLocalBounds(){this._localBoundsCacheData||(this._localBoundsCacheData={data:[],index:1,didChange:!1,localBounds:new Me});const e=this._localBoundsCacheData;return e.index=1,e.didChange=!1,e.data[0]!==this._didChangeId>>12&&(e.didChange=!0,e.data[0]=this._didChangeId>>12),su(this,e),e.didChange&&eu(this,e.localBounds,Sp),e.localBounds},getBounds(e,t){return Jc(this,e,t||new Me)}},Pp={_onRender:null,set onRender(e){const t=this.renderGroup||this.parentRenderGroup;if(!e){this._onRender&&(t==null||t.removeOnRender(this)),this._onRender=null;return}this._onRender||t==null||t.addOnRender(this),this._onRender=e},get onRender(){return this._onRender}},Tp={_zIndex:0,sortDirty:!1,sortableChildren:!1,get zIndex(){return this._zIndex},set zIndex(e){this._zIndex!==e&&(this._zIndex=e,this.depthOfChildModified())},depthOfChildModified(){this.parent&&(this.parent.sortableChildren=!0,this.parent.sortDirty=!0),this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0)},sortChildren(){this.sortDirty&&(this.sortDirty=!1,this.children.sort(kp))}};function kp(e,t){return e._zIndex-t._zIndex}const Ep={getGlobalPosition(e=new xt,t=!1){return this.parent?this.parent.toGlobal(this._position,e,t):(e.x=this._position.x,e.y=this._position.y),e},toGlobal(e,t,n=!1){if(!n){this.updateLocalTransform();const s=ei(this,new at);return s.append(this.localTransform),s.apply(e,t)}return this.worldTransform.apply(e,t)},toLocal(e,t,n,s){if(t&&(e=t.toGlobal(e,n,s)),!s){this.updateLocalTransform();const i=ei(this,new at);return i.append(this.localTransform),i.applyInverse(e,n)}return this.worldTransform.applyInverse(e,n)}};class iu{constructor(){this.uid=At("instructionSet"),this.instructions=[],this.instructionSize=0}reset(){this.instructionSize=0}add(t){this.instructions[this.instructionSize++]=t}log(){this.instructions.length=this.instructionSize,console.table(this.instructions,["type","action"])}}class Ip{constructor(t){this.renderPipeId="renderGroup",this.root=null,this.canBundle=!1,this.renderGroupParent=null,this.renderGroupChildren=[],this.worldTransform=new at,this.worldColorAlpha=4294967295,this.worldColor=16777215,this.worldAlpha=1,this.childrenToUpdate=Object.create(null),this.updateTick=0,this.childrenRenderablesToUpdate={list:[],index:0},this.structureDidChange=!0,this.instructionSet=new iu,this._onRenderContainers=[],this.root=t,t._onRender&&this.addOnRender(t),t.didChange=!0;const n=t.children;for(let s=0;s<n.length;s++)this.addChild(n[s])}get localTransform(){return this.root.localTransform}addRenderGroupChild(t){t.renderGroupParent&&t.renderGroupParent._removeRenderGroupChild(t),t.renderGroupParent=this,this.renderGroupChildren.push(t)}_removeRenderGroupChild(t){const n=this.renderGroupChildren.indexOf(t);n>-1&&this.renderGroupChildren.splice(n,1),t.renderGroupParent=null}addChild(t){if(this.structureDidChange=!0,t.parentRenderGroup=this,t.updateTick=-1,t.parent===this.root?t.relativeRenderGroupDepth=1:t.relativeRenderGroupDepth=t.parent.relativeRenderGroupDepth+1,t.didChange=!0,this.onChildUpdate(t),t.renderGroup){this.addRenderGroupChild(t.renderGroup);return}t._onRender&&this.addOnRender(t);const n=t.children;for(let s=0;s<n.length;s++)this.addChild(n[s])}removeChild(t){if(this.structureDidChange=!0,t._onRender&&(t.renderGroup||this.removeOnRender(t)),t.parentRenderGroup=null,t.renderGroup){this._removeRenderGroupChild(t.renderGroup);return}const n=t.children;for(let s=0;s<n.length;s++)this.removeChild(n[s])}removeChildren(t){for(let n=0;n<t.length;n++)this.removeChild(t[n])}onChildUpdate(t){let n=this.childrenToUpdate[t.relativeRenderGroupDepth];n||(n=this.childrenToUpdate[t.relativeRenderGroupDepth]={index:0,list:[]}),n.list[n.index++]=t}updateRenderable(t){t.globalDisplayStatus<7||(t.didViewUpdate=!1,this.instructionSet.renderPipes[t.renderPipeId].updateRenderable(t))}onChildViewUpdate(t){this.childrenRenderablesToUpdate.list[this.childrenRenderablesToUpdate.index++]=t}get isRenderable(){return this.root.localDisplayStatus===7&&this.worldAlpha>0}addOnRender(t){this._onRenderContainers.push(t)}removeOnRender(t){this._onRenderContainers.splice(this._onRenderContainers.indexOf(t),1)}runOnRender(){for(let t=0;t<this._onRenderContainers.length;t++)this._onRenderContainers[t]._onRender()}destroy(){this.renderGroupParent=null,this.root=null,this.childrenRenderablesToUpdate=null,this.childrenToUpdate=null,this.renderGroupChildren=null,this._onRenderContainers=null,this.instructionSet=null}getChildren(t=[]){const n=this.root.children;for(let s=0;s<n.length;s++)this._getChildren(n[s],t);return t}_getChildren(t,n=[]){if(n.push(t),t.renderGroup)return n;const s=t.children;for(let i=0;i<s.length;i++)this._getChildren(s[i],n);return n}}function Fp(e,t,n={}){for(const s in t)!n[s]&&t[s]!==void 0&&(e[s]=t[s])}const Hi=new $t(null),$i=new $t(null),Wi=new $t(null,1,1),Qa=1,Bp=2,Vi=4;class Rt extends ce{constructor(t={}){var n,s;super(),this.uid=At("renderable"),this._updateFlags=15,this.renderGroup=null,this.parentRenderGroup=null,this.parentRenderGroupIndex=0,this.didChange=!1,this.didViewUpdate=!1,this.relativeRenderGroupDepth=0,this.children=[],this.parent=null,this.includeInBuild=!0,this.measurable=!0,this.isSimple=!0,this.updateTick=-1,this.localTransform=new at,this.relativeGroupTransform=new at,this.groupTransform=this.relativeGroupTransform,this.destroyed=!1,this._position=new $t(this,0,0),this._scale=Wi,this._pivot=$i,this._skew=Hi,this._cx=1,this._sx=0,this._cy=0,this._sy=1,this._rotation=0,this.localColor=16777215,this.localAlpha=1,this.groupAlpha=1,this.groupColor=16777215,this.groupColorAlpha=4294967295,this.localBlendMode="inherit",this.groupBlendMode="normal",this.localDisplayStatus=7,this.globalDisplayStatus=7,this._didChangeId=0,this._didLocalTransformChangeId=-1,Fp(this,t,{children:!0,parent:!0,effects:!0}),(n=t.children)==null||n.forEach(i=>this.addChild(i)),this.effects=[],(s=t.parent)==null||s.addChild(this)}static mixin(t){Object.defineProperties(Rt.prototype,Object.getOwnPropertyDescriptors(t))}addChild(...t){if(this.allowChildren||ut(ct,"addChild: Only Containers will be allowed to add children in v8.0.0"),t.length>1){for(let i=0;i<t.length;i++)this.addChild(t[i]);return t[0]}const n=t[0];if(n.parent===this)return this.children.splice(this.children.indexOf(n),1),this.children.push(n),this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),n;n.parent&&n.parent.removeChild(n),this.children.push(n),this.sortableChildren&&(this.sortDirty=!0),n.parent=this,n.didChange=!0,n.didViewUpdate=!1,n._updateFlags=15;const s=this.renderGroup||this.parentRenderGroup;return s&&s.addChild(n),this.emit("childAdded",n,this,this.children.length-1),n.emit("added",this),this._didChangeId+=4096,n._zIndex!==0&&n.depthOfChildModified(),n}removeChild(...t){if(t.length>1){for(let i=0;i<t.length;i++)this.removeChild(t[i]);return t[0]}const n=t[0],s=this.children.indexOf(n);return s>-1&&(this._didChangeId+=4096,this.children.splice(s,1),this.renderGroup?this.renderGroup.removeChild(n):this.parentRenderGroup&&this.parentRenderGroup.removeChild(n),n.parent=null,this.emit("childRemoved",n,this,s),n.emit("removed",this)),n}_onUpdate(t){t&&t===this._skew&&this._updateSkew(),this._didChangeId++,!this.didChange&&(this.didChange=!0,this.parentRenderGroup&&this.parentRenderGroup.onChildUpdate(this))}set isRenderGroup(t){if(this.renderGroup&&t===!1)throw new Error("[Pixi] cannot undo a render group just yet");t&&this.enableRenderGroup()}get isRenderGroup(){return!!this.renderGroup}enableRenderGroup(){if(this.renderGroup)return;const t=this.parentRenderGroup;t&&t.removeChild(this),this.renderGroup=new Ip(this),t&&t.addChild(this),this._updateIsSimple(),this.groupTransform=at.IDENTITY}_updateIsSimple(){this.isSimple=!this.renderGroup&&this.effects.length===0}get worldTransform(){return this._worldTransform||(this._worldTransform=new at),this.renderGroup?this._worldTransform.copyFrom(this.renderGroup.worldTransform):this.parentRenderGroup&&this._worldTransform.appendFrom(this.relativeGroupTransform,this.parentRenderGroup.worldTransform),this._worldTransform}get x(){return this._position.x}set x(t){this._position.x=t}get y(){return this._position.y}set y(t){this._position.y=t}get position(){return this._position}set position(t){this._position.copyFrom(t)}get rotation(){return this._rotation}set rotation(t){this._rotation!==t&&(this._rotation=t,this._onUpdate(this._skew))}get angle(){return this.rotation*J0}set angle(t){this.rotation=t*tp}get pivot(){return this._pivot===$i&&(this._pivot=new $t(this,0,0)),this._pivot}set pivot(t){this._pivot===$i&&(this._pivot=new $t(this,0,0)),typeof t=="number"?this._pivot.set(t):this._pivot.copyFrom(t)}get skew(){return this._skew===Hi&&(this._skew=new $t(this,0,0)),this._skew}set skew(t){this._skew===Hi&&(this._skew=new $t(this,0,0)),this._skew.copyFrom(t)}get scale(){return this._scale===Wi&&(this._scale=new $t(this,1,1)),this._scale}set scale(t){this._scale===Wi&&(this._scale=new $t(this,0,0)),typeof t=="number"?this._scale.set(t):this._scale.copyFrom(t)}get width(){return Math.abs(this.scale.x*this.getLocalBounds().width)}set width(t){const n=this.getLocalBounds().width;this._setWidth(t,n)}get height(){return Math.abs(this.scale.y*this.getLocalBounds().height)}set height(t){const n=this.getLocalBounds().height;this._setHeight(t,n)}getSize(t){t||(t={});const n=this.getLocalBounds();return t.width=Math.abs(this.scale.x*n.width),t.height=Math.abs(this.scale.y*n.height),t}setSize(t,n){const s=this.getLocalBounds();let i,r;typeof t!="object"?(i=t,r=n??t):(i=t.width,r=t.height??t.width),i!==void 0&&this._setWidth(i,s.width),r!==void 0&&this._setHeight(r,s.height)}_updateSkew(){const t=this._rotation,n=this._skew;this._cx=Math.cos(t+n._y),this._sx=Math.sin(t+n._y),this._cy=-Math.sin(t-n._x),this._sy=Math.cos(t-n._x)}updateTransform(t){return this.position.set(typeof t.x=="number"?t.x:this.position.x,typeof t.y=="number"?t.y:this.position.y),this.scale.set(typeof t.scaleX=="number"?t.scaleX||1:this.scale.x,typeof t.scaleY=="number"?t.scaleY||1:this.scale.y),this.rotation=typeof t.rotation=="number"?t.rotation:this.rotation,this.skew.set(typeof t.skewX=="number"?t.skewX:this.skew.x,typeof t.skewY=="number"?t.skewY:this.skew.y),this.pivot.set(typeof t.pivotX=="number"?t.pivotX:this.pivot.x,typeof t.pivotY=="number"?t.pivotY:this.pivot.y),this}setFromMatrix(t){t.decompose(this)}updateLocalTransform(){if((this._didLocalTransformChangeId&15)===this._didChangeId)return;this._didLocalTransformChangeId=this._didChangeId;const t=this.localTransform,n=this._scale,s=this._pivot,i=this._position,r=n._x,o=n._y,a=s._x,l=s._y;t.a=this._cx*r,t.b=this._sx*r,t.c=this._cy*o,t.d=this._sy*o,t.tx=i._x-(a*t.a+l*t.c),t.ty=i._y-(a*t.b+l*t.d)}set alpha(t){t!==this.localAlpha&&(this.localAlpha=t,this._updateFlags|=Qa,this._onUpdate())}get alpha(){return this.localAlpha}set tint(t){const s=yt.shared.setValue(t??16777215).toBgrNumber();s!==this.localColor&&(this.localColor=s,this._updateFlags|=Qa,this._onUpdate())}get tint(){const t=this.localColor;return((t&255)<<16)+(t&65280)+(t>>16&255)}set blendMode(t){this.localBlendMode!==t&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=Bp,this.localBlendMode=t,this._onUpdate())}get blendMode(){return this.localBlendMode}get visible(){return!!(this.localDisplayStatus&2)}set visible(t){const n=t?1:0;(this.localDisplayStatus&2)>>1!==n&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=Vi,this.localDisplayStatus^=2,this._onUpdate())}get culled(){return!(this.localDisplayStatus&4)}set culled(t){const n=t?1:0;(this.localDisplayStatus&4)>>2!==n&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=Vi,this.localDisplayStatus^=4,this._onUpdate())}get renderable(){return!!(this.localDisplayStatus&1)}set renderable(t){const n=t?1:0;(this.localDisplayStatus&1)!==n&&(this._updateFlags|=Vi,this.localDisplayStatus^=1,this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._onUpdate())}get isRenderable(){return this.localDisplayStatus===7&&this.groupAlpha>0}destroy(t=!1){var i;if(this.destroyed)return;this.destroyed=!0;const n=this.removeChildren(0,this.children.length);if(this.removeFromParent(),this.parent=null,this._maskEffect=null,this._filterEffect=null,this.effects=null,this._position=null,this._scale=null,this._pivot=null,this._skew=null,this.emit("destroyed",this),this.removeAllListeners(),typeof t=="boolean"?t:t==null?void 0:t.children)for(let r=0;r<n.length;++r)n[r].destroy(t);(i=this.renderGroup)==null||i.destroy(),this.renderGroup=null}}Rt.mixin(yp);Rt.mixin(Ep);Rt.mixin(Pp);Rt.mixin(Mp);Rt.mixin(Ap);Rt.mixin(Cp);Rt.mixin(Tp);Rt.mixin(vp);class Tn extends Rt{constructor(t=rt.EMPTY){t instanceof rt&&(t={texture:t});const{texture:n=rt.EMPTY,anchor:s,roundPixels:i,width:r,height:o,...a}=t;super({label:"Sprite",...a}),this.renderPipeId="sprite",this.batched=!0,this._didSpriteUpdate=!1,this._bounds={minX:0,maxX:1,minY:0,maxY:0},this._sourceBounds={minX:0,maxX:1,minY:0,maxY:0},this._boundsDirty=!0,this._sourceBoundsDirty=!0,this._roundPixels=0,this._anchor=new $t({_onUpdate:()=>{this.onViewUpdate()}}),s?this.anchor=s:n.defaultAnchor&&(this.anchor=n.defaultAnchor),this.texture=n,this.allowChildren=!1,this.roundPixels=i??!1,r&&(this.width=r),o&&(this.height=o)}static from(t,n=!1){return t instanceof rt?new Tn(t):new Tn(rt.from(t,n))}set texture(t){t||(t=rt.EMPTY);const n=this._texture;n!==t&&(n&&n.dynamic&&n.off("update",this.onViewUpdate,this),t.dynamic&&t.on("update",this.onViewUpdate,this),this._texture=t,this._width&&this._setWidth(this._width,this._texture.orig.width),this._height&&this._setHeight(this._height,this._texture.orig.height),this.onViewUpdate())}get texture(){return this._texture}get bounds(){return this._boundsDirty&&(this._updateBounds(),this._boundsDirty=!1),this._bounds}get sourceBounds(){return this._sourceBoundsDirty&&(this._updateSourceBounds(),this._sourceBoundsDirty=!1),this._sourceBounds}containsPoint(t){const n=this.sourceBounds;return t.x>=n.maxX&&t.x<=n.minX&&t.y>=n.maxY&&t.y<=n.minY}addBounds(t){const n=this._texture.trim?this.sourceBounds:this.bounds;t.addFrame(n.minX,n.minY,n.maxX,n.maxY)}onViewUpdate(){if(this._didChangeId+=4096,this._didSpriteUpdate=!0,this._sourceBoundsDirty=this._boundsDirty=!0,this.didViewUpdate)return;this.didViewUpdate=!0;const t=this.renderGroup||this.parentRenderGroup;t&&t.onChildViewUpdate(this)}_updateBounds(){lp(this._bounds,this._anchor,this._texture,0)}_updateSourceBounds(){const t=this._anchor,n=this._texture,s=this._sourceBounds,{width:i,height:r}=n.orig;s.maxX=-t._x*i,s.minX=s.maxX+i,s.maxY=-t._y*r,s.minY=s.maxY+r}destroy(t=!1){if(super.destroy(t),typeof t=="boolean"?t:t==null?void 0:t.texture){const s=typeof t=="boolean"?t:t==null?void 0:t.textureSource;this._texture.destroy(s)}this._texture=null,this._bounds=null,this._sourceBounds=null,this._anchor=null}get anchor(){return this._anchor}set anchor(t){typeof t=="number"?this._anchor.set(t):this._anchor.copyFrom(t)}get roundPixels(){return!!this._roundPixels}set roundPixels(t){this._roundPixels=t?1:0}get width(){return Math.abs(this.scale.x)*this._texture.orig.width}set width(t){this._setWidth(t,this._texture.orig.width),this._width=t}get height(){return Math.abs(this.scale.y)*this._texture.orig.height}set height(t){this._setHeight(t,this._texture.orig.height),this._height=t}getSize(t){return t||(t={}),t.width=Math.abs(this.scale.x)*this._texture.orig.width,t.height=Math.abs(this.scale.y)*this._texture.orig.height,t}setSize(t,n){let s,i;typeof t!="object"?(s=t,i=n??t):(s=t.width,i=t.height??t.width),s!==void 0&&this._setWidth(s,this._texture.orig.width),i!==void 0&&this._setHeight(i,this._texture.orig.height)}}const zp=new Me;function ru(e,t,n){const s=zp;e.measurable=!0,Jc(e,n,s),t.addBoundsMask(s),e.measurable=!1}function ou(e,t,n){const s=Pn.get();e.measurable=!0;const i=Ce.get().identity(),r=au(e,n,i);eu(e,s,r),e.measurable=!1,t.addBoundsMask(s),Ce.return(i),Pn.return(s)}function au(e,t,n){return e?(e!==t&&(au(e.parent,t,n),e.updateLocalTransform(),n.append(e.localTransform)),n):(Tt("Mask bounds, renderable is not inside the root container"),n)}class lu{constructor(t){this.priority=0,this.pipe="alphaMask",t!=null&&t.mask&&this.init(t.mask)}init(t){this.mask=t,this.renderMaskToTexture=!(t instanceof Tn),this.mask.renderable=this.renderMaskToTexture,this.mask.includeInBuild=!this.renderMaskToTexture,this.mask.measurable=!1}reset(){this.mask.measurable=!0,this.mask=null}addBounds(t,n){ru(this.mask,t,n)}addLocalBounds(t,n){ou(this.mask,t,n)}containsPoint(t,n){const s=this.mask;return n(s,t)}destroy(){this.reset()}static test(t){return t instanceof Tn}}lu.extension=q.MaskEffect;class cu{constructor(t){this.priority=0,this.pipe="colorMask",t!=null&&t.mask&&this.init(t.mask)}init(t){this.mask=t}destroy(){}static test(t){return typeof t=="number"}}cu.extension=q.MaskEffect;class uu{constructor(t){this.priority=0,this.pipe="stencilMask",t!=null&&t.mask&&this.init(t.mask)}init(t){this.mask=t,this.mask.includeInBuild=!1,this.mask.measurable=!1}reset(){this.mask.measurable=!0,this.mask.includeInBuild=!0,this.mask=null}addBounds(t,n){ru(this.mask,t,n)}addLocalBounds(t,n){ou(this.mask,t,n)}containsPoint(t,n){const s=this.mask;return n(s,t)}destroy(){this.reset()}static test(t){return t instanceof Rt}}uu.extension=q.MaskEffect;const Rp={createCanvas:(e,t)=>{const n=document.createElement("canvas");return n.width=e,n.height=t,n},getCanvasRenderingContext2D:()=>CanvasRenderingContext2D,getWebGLRenderingContext:()=>WebGLRenderingContext,getNavigator:()=>navigator,getBaseUrl:()=>document.baseURI??window.location.href,getFontFaceSet:()=>document.fonts,fetch:(e,t)=>fetch(e,t),parseXML:e=>new DOMParser().parseFromString(e,"text/xml")};let Ja=Rp;const vt={get(){return Ja},set(e){Ja=e}};class hu extends We{constructor(t){t.resource||(t.resource=vt.get().createCanvas()),t.width||(t.width=t.resource.width,t.autoDensity||(t.width/=t.resolution)),t.height||(t.height=t.resource.height,t.autoDensity||(t.height/=t.resolution)),super(t),this.uploadMethodId="image",this.autoDensity=t.autoDensity;const n=t.resource;(this.pixelWidth!==n.width||this.pixelWidth!==n.height)&&this.resizeCanvas(),this.transparent=!!t.transparent}resizeCanvas(){this.autoDensity&&(this.resource.style.width=`${this.width}px`,this.resource.style.height=`${this.height}px`),(this.resource.width!==this.pixelWidth||this.resource.height!==this.pixelHeight)&&(this.resource.width=this.pixelWidth,this.resource.height=this.pixelHeight)}resize(t=this.width,n=this.height,s=this._resolution){const i=super.resize(t,n,s);return i&&this.resizeCanvas(),i}static test(t){return globalThis.HTMLCanvasElement&&t instanceof HTMLCanvasElement||globalThis.OffscreenCanvas&&t instanceof OffscreenCanvas}}hu.extension=q.TextureSource;class Fn extends We{constructor(t){if(t.resource&&globalThis.HTMLImageElement&&t.resource instanceof HTMLImageElement){const n=vt.get().createCanvas(t.resource.width,t.resource.height);n.getContext("2d").drawImage(t.resource,0,0),t.resource=n,Tt("ImageSource: Image element passed, converting to canvas. Use CanvasSource instead.")}super(t),this.uploadMethodId="image",this.autoGarbageCollect=!0}static test(t){return globalThis.HTMLImageElement&&t instanceof HTMLImageElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap}}Fn.extension=q.TextureSource;var Rr=(e=>(e[e.INTERACTION=50]="INTERACTION",e[e.HIGH=25]="HIGH",e[e.NORMAL=0]="NORMAL",e[e.LOW=-25]="LOW",e[e.UTILITY=-50]="UTILITY",e))(Rr||{});class Xi{constructor(t,n=null,s=0,i=!1){this.next=null,this.previous=null,this._destroyed=!1,this._fn=t,this._context=n,this.priority=s,this._once=i}match(t,n=null){return this._fn===t&&this._context===n}emit(t){this._fn&&(this._context?this._fn.call(this._context,t):this._fn(t));const n=this.next;return this._once&&this.destroy(!0),this._destroyed&&(this.next=null),n}connect(t){this.previous=t,t.next&&(t.next.previous=this),this.next=t.next,t.next=this}destroy(t=!1){this._destroyed=!0,this._fn=null,this._context=null,this.previous&&(this.previous.next=this.next),this.next&&(this.next.previous=this.previous);const n=this.next;return this.next=t?null:n,this.previous=null,n}}const fu=class Gt{constructor(){this.autoStart=!1,this.deltaTime=1,this.lastTime=-1,this.speed=1,this.started=!1,this._requestId=null,this._maxElapsedMS=100,this._minElapsedMS=0,this._protected=!1,this._lastFrame=-1,this._head=new Xi(null,null,1/0),this.deltaMS=1/Gt.targetFPMS,this.elapsedMS=1/Gt.targetFPMS,this._tick=t=>{this._requestId=null,this.started&&(this.update(t),this.started&&this._requestId===null&&this._head.next&&(this._requestId=requestAnimationFrame(this._tick)))}}_requestIfNeeded(){this._requestId===null&&this._head.next&&(this.lastTime=performance.now(),this._lastFrame=this.lastTime,this._requestId=requestAnimationFrame(this._tick))}_cancelIfNeeded(){this._requestId!==null&&(cancelAnimationFrame(this._requestId),this._requestId=null)}_startIfPossible(){this.started?this._requestIfNeeded():this.autoStart&&this.start()}add(t,n,s=Rr.NORMAL){return this._addListener(new Xi(t,n,s))}addOnce(t,n,s=Rr.NORMAL){return this._addListener(new Xi(t,n,s,!0))}_addListener(t){let n=this._head.next,s=this._head;if(!n)t.connect(s);else{for(;n;){if(t.priority>n.priority){t.connect(s);break}s=n,n=n.next}t.previous||t.connect(s)}return this._startIfPossible(),this}remove(t,n){let s=this._head.next;for(;s;)s.match(t,n)?s=s.destroy():s=s.next;return this._head.next||this._cancelIfNeeded(),this}get count(){if(!this._head)return 0;let t=0,n=this._head;for(;n=n.next;)t++;return t}start(){this.started||(this.started=!0,this._requestIfNeeded())}stop(){this.started&&(this.started=!1,this._cancelIfNeeded())}destroy(){if(!this._protected){this.stop();let t=this._head.next;for(;t;)t=t.destroy(!0);this._head.destroy(),this._head=null}}update(t=performance.now()){let n;if(t>this.lastTime){if(n=this.elapsedMS=t-this.lastTime,n>this._maxElapsedMS&&(n=this._maxElapsedMS),n*=this.speed,this._minElapsedMS){const r=t-this._lastFrame|0;if(r<this._minElapsedMS)return;this._lastFrame=t-r%this._minElapsedMS}this.deltaMS=n,this.deltaTime=this.deltaMS*Gt.targetFPMS;const s=this._head;let i=s.next;for(;i;)i=i.emit(this);s.next||this._cancelIfNeeded()}else this.deltaTime=this.deltaMS=this.elapsedMS=0;this.lastTime=t}get FPS(){return 1e3/this.elapsedMS}get minFPS(){return 1e3/this._maxElapsedMS}set minFPS(t){const n=Math.min(this.maxFPS,t),s=Math.min(Math.max(0,n)/1e3,Gt.targetFPMS);this._maxElapsedMS=1/s}get maxFPS(){return this._minElapsedMS?Math.round(1e3/this._minElapsedMS):0}set maxFPS(t){if(t===0)this._minElapsedMS=0;else{const n=Math.max(this.minFPS,t);this._minElapsedMS=1/(n/1e3)}}static get shared(){if(!Gt._shared){const t=Gt._shared=new Gt;t.autoStart=!0,t._protected=!0}return Gt._shared}static get system(){if(!Gt._system){const t=Gt._system=new Gt;t.autoStart=!0,t._protected=!0}return Gt._system}};fu.targetFPMS=.06;let Fs=fu,Yi;async function du(){return Yi??(Yi=(async()=>{var o;const t=document.createElement("canvas").getContext("webgl");if(!t)return"premultiply-alpha-on-upload";const n=await new Promise(a=>{const l=document.createElement("video");l.onloadeddata=()=>a(l),l.onerror=()=>a(null),l.autoplay=!1,l.crossOrigin="anonymous",l.preload="auto",l.src="data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQJChYECGFOAZwEAAAAAAAHTEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEXTbuMU6uEHFO7a1OsggG97AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBEAAAAAAAAFlSua8yuAQAAAAAAAEPXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhVZfVlA5g4EBI+ODhAJiWgDglLCBArqBApqBAlPAgQFVsIRVuYEBElTDZ9Vzc9JjwItjxYgAAAAAAAAAAWfInEWjh0VOQ09ERVJEh49MYXZjIGxpYnZweC12cDlnyKJFo4hEVVJBVElPTkSHlDAwOjAwOjAwLjA0MDAwMDAwMAAAH0O2dcfngQCgwqGggQAAAIJJg0IAABAAFgA4JBwYSgAAICAAEb///4r+AAB1oZ2mm+6BAaWWgkmDQgAAEAAWADgkHBhKAAAgIABIQBxTu2uRu4+zgQC3iveBAfGCAXHwgQM=",l.load()});if(!n)return"premultiply-alpha-on-upload";const s=t.createTexture();t.bindTexture(t.TEXTURE_2D,s);const i=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,i),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,s,0),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,n);const r=new Uint8Array(4);return t.readPixels(0,0,1,1,t.RGBA,t.UNSIGNED_BYTE,r),t.deleteFramebuffer(i),t.deleteTexture(s),(o=t.getExtension("WEBGL_lose_context"))==null||o.loseContext(),r[0]<=r[3]?"premultiplied-alpha":"premultiply-alpha-on-upload"})()),Yi}const vi=class pu extends We{constructor(t){super(t),this.isReady=!1,this.uploadMethodId="video",t={...pu.defaultOptions,...t},this._autoUpdate=!0,this._isConnectedToTicker=!1,this._updateFPS=t.updateFPS||0,this._msToNextUpdate=0,this.autoPlay=t.autoPlay!==!1,this.alphaMode=t.alphaMode??"premultiply-alpha-on-upload",this._videoFrameRequestCallback=this._videoFrameRequestCallback.bind(this),this._videoFrameRequestCallbackHandle=null,this._load=null,this._resolve=null,this._reject=null,this._onCanPlay=this._onCanPlay.bind(this),this._onCanPlayThrough=this._onCanPlayThrough.bind(this),this._onError=this._onError.bind(this),this._onPlayStart=this._onPlayStart.bind(this),this._onPlayStop=this._onPlayStop.bind(this),this._onSeeked=this._onSeeked.bind(this),t.autoLoad!==!1&&this.load()}updateFrame(){if(!this.destroyed){if(this._updateFPS){const t=Fs.shared.elapsedMS*this.resource.playbackRate;this._msToNextUpdate=Math.floor(this._msToNextUpdate-t)}(!this._updateFPS||this._msToNextUpdate<=0)&&(this._msToNextUpdate=this._updateFPS?Math.floor(1e3/this._updateFPS):0),this.isValid&&this.update()}}_videoFrameRequestCallback(){this.updateFrame(),this.destroyed?this._videoFrameRequestCallbackHandle=null:this._videoFrameRequestCallbackHandle=this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback)}get isValid(){return!!this.resource.videoWidth&&!!this.resource.videoHeight}async load(){if(this._load)return this._load;const t=this.resource,n=this.options;return(t.readyState===t.HAVE_ENOUGH_DATA||t.readyState===t.HAVE_FUTURE_DATA)&&t.width&&t.height&&(t.complete=!0),t.addEventListener("play",this._onPlayStart),t.addEventListener("pause",this._onPlayStop),t.addEventListener("seeked",this._onSeeked),this._isSourceReady()?this._mediaReady():(n.preload||t.addEventListener("canplay",this._onCanPlay),t.addEventListener("canplaythrough",this._onCanPlayThrough),t.addEventListener("error",this._onError,!0)),this.alphaMode=await du(),this._load=new Promise((s,i)=>{this.isValid?s(this):(this._resolve=s,this._reject=i,n.preloadTimeoutMs!==void 0&&(this._preloadTimeout=setTimeout(()=>{this._onError(new ErrorEvent(`Preload exceeded timeout of ${n.preloadTimeoutMs}ms`))})),t.load())}),this._load}_onError(t){this.resource.removeEventListener("error",this._onError,!0),this.emit("error",t),this._reject&&(this._reject(t),this._reject=null,this._resolve=null)}_isSourcePlaying(){const t=this.resource;return!t.paused&&!t.ended}_isSourceReady(){return this.resource.readyState>2}_onPlayStart(){this.isValid||this._mediaReady(),this._configureAutoUpdate()}_onPlayStop(){this._configureAutoUpdate()}_onSeeked(){this._autoUpdate&&!this._isSourcePlaying()&&(this._msToNextUpdate=0,this.updateFrame(),this._msToNextUpdate=0)}_onCanPlay(){this.resource.removeEventListener("canplay",this._onCanPlay),this._mediaReady()}_onCanPlayThrough(){this.resource.removeEventListener("canplaythrough",this._onCanPlay),this._preloadTimeout&&(clearTimeout(this._preloadTimeout),this._preloadTimeout=void 0),this._mediaReady()}_mediaReady(){const t=this.resource;this.isValid&&(this.isReady=!0,this.resize(t.videoWidth,t.videoHeight)),this._msToNextUpdate=0,this.updateFrame(),this._msToNextUpdate=0,this._resolve&&(this._resolve(this),this._resolve=null,this._reject=null),this._isSourcePlaying()?this._onPlayStart():this.autoPlay&&this.resource.play()}destroy(){this._configureAutoUpdate();const t=this.resource;t&&(t.removeEventListener("play",this._onPlayStart),t.removeEventListener("pause",this._onPlayStop),t.removeEventListener("seeked",this._onSeeked),t.removeEventListener("canplay",this._onCanPlay),t.removeEventListener("canplaythrough",this._onCanPlayThrough),t.removeEventListener("error",this._onError,!0),t.pause(),t.src="",t.load()),super.destroy()}get autoUpdate(){return this._autoUpdate}set autoUpdate(t){t!==this._autoUpdate&&(this._autoUpdate=t,this._configureAutoUpdate())}get updateFPS(){return this._updateFPS}set updateFPS(t){t!==this._updateFPS&&(this._updateFPS=t,this._configureAutoUpdate())}_configureAutoUpdate(){this._autoUpdate&&this._isSourcePlaying()?!this._updateFPS&&this.resource.requestVideoFrameCallback?(this._isConnectedToTicker&&(Fs.shared.remove(this.updateFrame,this),this._isConnectedToTicker=!1,this._msToNextUpdate=0),this._videoFrameRequestCallbackHandle===null&&(this._videoFrameRequestCallbackHandle=this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback))):(this._videoFrameRequestCallbackHandle!==null&&(this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),this._videoFrameRequestCallbackHandle=null),this._isConnectedToTicker||(Fs.shared.add(this.updateFrame,this),this._isConnectedToTicker=!0,this._msToNextUpdate=0)):(this._videoFrameRequestCallbackHandle!==null&&(this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),this._videoFrameRequestCallbackHandle=null),this._isConnectedToTicker&&(Fs.shared.remove(this.updateFrame,this),this._isConnectedToTicker=!1,this._msToNextUpdate=0))}static test(t){return globalThis.HTMLVideoElement&&t instanceof HTMLVideoElement||globalThis.VideoFrame&&t instanceof VideoFrame}};vi.extension=q.TextureSource;vi.defaultOptions={...We.defaultOptions,autoLoad:!0,autoPlay:!0,updateFPS:0,crossorigin:!0,loop:!1,muted:!0,playsinline:!0,preload:!1};vi.MIME_TYPES={ogv:"video/ogg",mov:"video/quicktime",m4v:"video/mp4"};let Ys=vi;const re=(e,t,n=!1)=>(Array.isArray(e)||(e=[e]),t?e.map(s=>typeof s=="string"||n?t(s):s):e);class Op{constructor(){this._parsers=[],this._cache=new Map,this._cacheMap=new Map}reset(){this._cacheMap.clear(),this._cache.clear()}has(t){return this._cache.has(t)}get(t){const n=this._cache.get(t);return n||Tt(`[Assets] Asset id ${t} was not found in the Cache`),n}set(t,n){const s=re(t);let i;for(let l=0;l<this.parsers.length;l++){const u=this.parsers[l];if(u.test(n)){i=u.getCacheableAssets(s,n);break}}const r=new Map(Object.entries(i||{}));i||s.forEach(l=>{r.set(l,n)});const o=[...r.keys()],a={cacheKeys:o,keys:s};s.forEach(l=>{this._cacheMap.set(l,a)}),o.forEach(l=>{const u=i?i[l]:n;this._cache.has(l)&&this._cache.get(l)!==u&&Tt("[Cache] already has key:",l),this._cache.set(l,r.get(l))})}remove(t){if(!this._cacheMap.has(t)){Tt(`[Assets] Asset id ${t} was not found in the Cache`);return}const n=this._cacheMap.get(t);n.cacheKeys.forEach(i=>{this._cache.delete(i)}),n.keys.forEach(i=>{this._cacheMap.delete(i)})}get parsers(){return this._parsers}}const mt=new Op,Or=[];Jt.handleByList(q.TextureSource,Or);function Lp(e={}){const t=e&&e.resource,n=t?e.resource:e,s=t?e:{resource:e};for(let i=0;i<Or.length;i++){const r=Or[i];if(r.test(n))return new r(s)}throw new Error(`Could not find a source type for resource: ${s.resource}`)}function jp(e={},t=!1){const n=e&&e.resource,s=n?e.resource:e,i=n?e:{resource:e};if(!t&&mt.has(s))return mt.get(s);const r=new rt({source:Lp(i)});return r.on("destroy",()=>{mt.has(s)&&mt.remove(s)}),t||mt.set(s,r),r}function Np(e,t=!1){return typeof e=="string"?mt.get(e):e instanceof We?new rt({source:e}):jp(e,t)}rt.from=Np;Jt.add(lu,cu,uu,Ys,Fn,hu,Co);var Ve=(e=>(e[e.Low=0]="Low",e[e.Normal=1]="Normal",e[e.High=2]="High",e))(Ve||{});function ne(e){if(typeof e!="string")throw new TypeError(`Path must be a string. Received ${JSON.stringify(e)}`)}function Nn(e){return e.split("?")[0].split("#")[0]}function Up(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Dp(e,t,n){return e.replace(new RegExp(Up(t),"g"),n)}function Gp(e,t){let n="",s=0,i=-1,r=0,o=-1;for(let a=0;a<=e.length;++a){if(a<e.length)o=e.charCodeAt(a);else{if(o===47)break;o=47}if(o===47){if(!(i===a-1||r===1))if(i!==a-1&&r===2){if(n.length<2||s!==2||n.charCodeAt(n.length-1)!==46||n.charCodeAt(n.length-2)!==46){if(n.length>2){const l=n.lastIndexOf("/");if(l!==n.length-1){l===-1?(n="",s=0):(n=n.slice(0,l),s=n.length-1-n.lastIndexOf("/")),i=a,r=0;continue}}else if(n.length===2||n.length===1){n="",s=0,i=a,r=0;continue}}}else n.length>0?n+=`/${e.slice(i+1,a)}`:n=e.slice(i+1,a),s=a-i-1;i=a,r=0}else o===46&&r!==-1?++r:r=-1}return n}const Wt={toPosix(e){return Dp(e,"\\","/")},isUrl(e){return/^https?:/.test(this.toPosix(e))},isDataUrl(e){return/^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}()_|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s<>]*?)$/i.test(e)},isBlobUrl(e){return e.startsWith("blob:")},hasProtocol(e){return/^[^/:]+:/.test(this.toPosix(e))},getProtocol(e){ne(e),e=this.toPosix(e);const t=/^file:\/\/\//.exec(e);if(t)return t[0];const n=/^[^/:]+:\/{0,2}/.exec(e);return n?n[0]:""},toAbsolute(e,t,n){if(ne(e),this.isDataUrl(e)||this.isBlobUrl(e))return e;const s=Nn(this.toPosix(t??vt.get().getBaseUrl())),i=Nn(this.toPosix(n??this.rootname(s)));return e=this.toPosix(e),e.startsWith("/")?Wt.join(i,e.slice(1)):this.isAbsolute(e)?e:this.join(s,e)},normalize(e){if(ne(e),e.length===0)return".";if(this.isDataUrl(e)||this.isBlobUrl(e))return e;e=this.toPosix(e);let t="";const n=e.startsWith("/");this.hasProtocol(e)&&(t=this.rootname(e),e=e.slice(t.length));const s=e.endsWith("/");return e=Gp(e),e.length>0&&s&&(e+="/"),n?`/${e}`:t+e},isAbsolute(e){return ne(e),e=this.toPosix(e),this.hasProtocol(e)?!0:e.startsWith("/")},join(...e){if(e.length===0)return".";let t;for(let n=0;n<e.length;++n){const s=e[n];if(ne(s),s.length>0)if(t===void 0)t=s;else{const i=e[n-1]??"";this.joinExtensions.includes(this.extname(i).toLowerCase())?t+=`/../${s}`:t+=`/${s}`}}return t===void 0?".":this.normalize(t)},dirname(e){if(ne(e),e.length===0)return".";e=this.toPosix(e);let t=e.charCodeAt(0);const n=t===47;let s=-1,i=!0;const r=this.getProtocol(e),o=e;e=e.slice(r.length);for(let a=e.length-1;a>=1;--a)if(t=e.charCodeAt(a),t===47){if(!i){s=a;break}}else i=!1;return s===-1?n?"/":this.isUrl(o)?r+e:r:n&&s===1?"//":r+e.slice(0,s)},rootname(e){ne(e),e=this.toPosix(e);let t="";if(e.startsWith("/")?t="/":t=this.getProtocol(e),this.isUrl(e)){const n=e.indexOf("/",t.length);n!==-1?t=e.slice(0,n):t=e,t.endsWith("/")||(t+="/")}return t},basename(e,t){ne(e),t&&ne(t),e=Nn(this.toPosix(e));let n=0,s=-1,i=!0,r;if(t!==void 0&&t.length>0&&t.length<=e.length){if(t.length===e.length&&t===e)return"";let o=t.length-1,a=-1;for(r=e.length-1;r>=0;--r){const l=e.charCodeAt(r);if(l===47){if(!i){n=r+1;break}}else a===-1&&(i=!1,a=r+1),o>=0&&(l===t.charCodeAt(o)?--o===-1&&(s=r):(o=-1,s=a))}return n===s?s=a:s===-1&&(s=e.length),e.slice(n,s)}for(r=e.length-1;r>=0;--r)if(e.charCodeAt(r)===47){if(!i){n=r+1;break}}else s===-1&&(i=!1,s=r+1);return s===-1?"":e.slice(n,s)},extname(e){ne(e),e=Nn(this.toPosix(e));let t=-1,n=0,s=-1,i=!0,r=0;for(let o=e.length-1;o>=0;--o){const a=e.charCodeAt(o);if(a===47){if(!i){n=o+1;break}continue}s===-1&&(i=!1,s=o+1),a===46?t===-1?t=o:r!==1&&(r=1):t!==-1&&(r=-1)}return t===-1||s===-1||r===0||r===1&&t===s-1&&t===n+1?"":e.slice(t,s)},parse(e){ne(e);const t={root:"",dir:"",base:"",ext:"",name:""};if(e.length===0)return t;e=Nn(this.toPosix(e));let n=e.charCodeAt(0);const s=this.isAbsolute(e);let i;t.root=this.rootname(e),s||this.hasProtocol(e)?i=1:i=0;let r=-1,o=0,a=-1,l=!0,u=e.length-1,c=0;for(;u>=i;--u){if(n=e.charCodeAt(u),n===47){if(!l){o=u+1;break}continue}a===-1&&(l=!1,a=u+1),n===46?r===-1?r=u:c!==1&&(c=1):r!==-1&&(c=-1)}return r===-1||a===-1||c===0||c===1&&r===a-1&&r===o+1?a!==-1&&(o===0&&s?t.base=t.name=e.slice(1,a):t.base=t.name=e.slice(o,a)):(o===0&&s?(t.name=e.slice(1,r),t.base=e.slice(1,a)):(t.name=e.slice(o,r),t.base=e.slice(o,a)),t.ext=e.slice(r,a)),t.dir=this.dirname(e),t},sep:"/",delimiter:":",joinExtensions:[".html"]};function mu(e,t,n,s,i){const r=t[n];for(let o=0;o<r.length;o++){const a=r[o];n<t.length-1?mu(e.replace(s[n],a),t,n+1,s,i):i.push(e.replace(s[n],a))}}function Hp(e){const t=/\{(.*?)\}/g,n=e.match(t),s=[];if(n){const i=[];n.forEach(r=>{const o=r.substring(1,r.length-1).split(",");i.push(o)}),mu(e,i,0,n,s)}else s.push(e);return s}const ni=e=>!Array.isArray(e);class Bn{constructor(){this._defaultBundleIdentifierOptions={connector:"-",createBundleAssetId:(t,n)=>`${t}${this._bundleIdConnector}${n}`,extractAssetIdFromBundle:(t,n)=>n.replace(`${t}${this._bundleIdConnector}`,"")},this._bundleIdConnector=this._defaultBundleIdentifierOptions.connector,this._createBundleAssetId=this._defaultBundleIdentifierOptions.createBundleAssetId,this._extractAssetIdFromBundle=this._defaultBundleIdentifierOptions.extractAssetIdFromBundle,this._assetMap={},this._preferredOrder=[],this._parsers=[],this._resolverHash={},this._bundles={}}setBundleIdentifier(t){if(this._bundleIdConnector=t.connector??this._bundleIdConnector,this._createBundleAssetId=t.createBundleAssetId??this._createBundleAssetId,this._extractAssetIdFromBundle=t.extractAssetIdFromBundle??this._extractAssetIdFromBundle,this._extractAssetIdFromBundle("foo",this._createBundleAssetId("foo","bar"))!=="bar")throw new Error("[Resolver] GenerateBundleAssetId are not working correctly")}prefer(...t){t.forEach(n=>{this._preferredOrder.push(n),n.priority||(n.priority=Object.keys(n.params))}),this._resolverHash={}}set basePath(t){this._basePath=t}get basePath(){return this._basePath}set rootPath(t){this._rootPath=t}get rootPath(){return this._rootPath}get parsers(){return this._parsers}reset(){this.setBundleIdentifier(this._defaultBundleIdentifierOptions),this._assetMap={},this._preferredOrder=[],this._resolverHash={},this._rootPath=null,this._basePath=null,this._manifest=null,this._bundles={},this._defaultSearchParams=null}setDefaultSearchParams(t){if(typeof t=="string")this._defaultSearchParams=t;else{const n=t;this._defaultSearchParams=Object.keys(n).map(s=>`${encodeURIComponent(s)}=${encodeURIComponent(n[s])}`).join("&")}}getAlias(t){const{alias:n,src:s}=t;return re(n||s,r=>typeof r=="string"?r:Array.isArray(r)?r.map(o=>(o==null?void 0:o.src)??o):r!=null&&r.src?r.src:r,!0)}addManifest(t){this._manifest&&Tt("[Resolver] Manifest already exists, this will be overwritten"),this._manifest=t,t.bundles.forEach(n=>{this.addBundle(n.name,n.assets)})}addBundle(t,n){const s=[];let i=n;Array.isArray(n)||(i=Object.entries(n).map(([r,o])=>typeof o=="string"||Array.isArray(o)?{alias:r,src:o}:{alias:r,...o})),i.forEach(r=>{const o=r.src,a=r.alias;let l;if(typeof a=="string"){const u=this._createBundleAssetId(t,a);s.push(u),l=[a,u]}else{const u=a.map(c=>this._createBundleAssetId(t,c));s.push(...u),l=[...a,...u]}this.add({...r,alias:l,src:o})}),this._bundles[t]=s}add(t){const n=[];Array.isArray(t)?n.push(...t):n.push(t);let s;s=r=>{this.hasKey(r)&&Tt(`[Resolver] already has key: ${r} overwriting`)},re(n).forEach(r=>{const{src:o}=r;let{data:a,format:l,loadParser:u}=r;const c=re(o).map(d=>typeof d=="string"?Hp(d):Array.isArray(d)?d:[d]),h=this.getAlias(r);Array.isArray(h)?h.forEach(s):s(h);const f=[];c.forEach(d=>{d.forEach(p=>{let g={};if(typeof p!="object"){g.src=p;for(let m=0;m<this._parsers.length;m++){const y=this._parsers[m];if(y.test(p)){g=y.parse(p);break}}}else a=p.data??a,l=p.format??l,u=p.loadParser??u,g={...g,...p};if(!h)throw new Error(`[Resolver] alias is undefined for this asset: ${g.src}`);g=this._buildResolvedAsset(g,{aliases:h,data:a,format:l,loadParser:u}),f.push(g)})}),h.forEach(d=>{this._assetMap[d]=f})})}resolveBundle(t){const n=ni(t);t=re(t);const s={};return t.forEach(i=>{const r=this._bundles[i];if(r){const o=this.resolve(r),a={};for(const l in o){const u=o[l];a[this._extractAssetIdFromBundle(i,l)]=u}s[i]=a}}),n?s[t[0]]:s}resolveUrl(t){const n=this.resolve(t);if(typeof t!="string"){const s={};for(const i in n)s[i]=n[i].src;return s}return n.src}resolve(t){const n=ni(t);t=re(t);const s={};return t.forEach(i=>{if(!this._resolverHash[i])if(this._assetMap[i]){let r=this._assetMap[i];const o=this._getPreferredOrder(r);o==null||o.priority.forEach(a=>{o.params[a].forEach(l=>{const u=r.filter(c=>c[a]?c[a]===l:!1);u.length&&(r=u)})}),this._resolverHash[i]=r[0]}else this._resolverHash[i]=this._buildResolvedAsset({alias:[i],src:i},{});s[i]=this._resolverHash[i]}),n?s[t[0]]:s}hasKey(t){return!!this._assetMap[t]}hasBundle(t){return!!this._bundles[t]}_getPreferredOrder(t){for(let n=0;n<t.length;n++){const s=t[0],i=this._preferredOrder.find(r=>r.params.format.includes(s.format));if(i)return i}return this._preferredOrder[0]}_appendDefaultSearchParams(t){if(!this._defaultSearchParams)return t;const n=/\?/.test(t)?"&":"?";return`${t}${n}${this._defaultSearchParams}`}_buildResolvedAsset(t,n){const{aliases:s,data:i,loadParser:r,format:o}=n;return(this._basePath||this._rootPath)&&(t.src=Wt.toAbsolute(t.src,this._basePath,this._rootPath)),t.alias=s??t.alias??[t.src],t.src=this._appendDefaultSearchParams(t.src),t.data={...i||{},...t.data},t.loadParser=r??t.loadParser,t.format=o??t.format??$p(t.src),t}}Bn.RETINA_PREFIX=/@([0-9\.]+)x/;function $p(e){return e.split(".").pop().split("?").shift().split("#").shift()}const Lr=(e,t)=>{const n=t.split("?")[1];return n&&(e+=`?${n}`),e},gu=class Vn{constructor(t,n){this.linkedSheets=[],this._texture=t instanceof rt?t:null,this.textureSource=t.source,this.textures={},this.animations={},this.data=n;const s=parseFloat(n.meta.scale);s?(this.resolution=s,t.source.resolution=this.resolution):this.resolution=t.source._resolution,this._frames=this.data.frames,this._frameKeys=Object.keys(this._frames),this._batchIndex=0,this._callback=null}parse(){return new Promise(t=>{this._callback=t,this._batchIndex=0,this._frameKeys.length<=Vn.BATCH_SIZE?(this._processFrames(0),this._processAnimations(),this._parseComplete()):this._nextBatch()})}_processFrames(t){let n=t;const s=Vn.BATCH_SIZE;for(;n-t<s&&n<this._frameKeys.length;){const i=this._frameKeys[n],r=this._frames[i],o=r.frame;if(o){let a=null,l=null;const u=r.trimmed!==!1&&r.sourceSize?r.sourceSize:r.frame,c=new wt(0,0,Math.floor(u.w)/this.resolution,Math.floor(u.h)/this.resolution);r.rotated?a=new wt(Math.floor(o.x)/this.resolution,Math.floor(o.y)/this.resolution,Math.floor(o.h)/this.resolution,Math.floor(o.w)/this.resolution):a=new wt(Math.floor(o.x)/this.resolution,Math.floor(o.y)/this.resolution,Math.floor(o.w)/this.resolution,Math.floor(o.h)/this.resolution),r.trimmed!==!1&&r.spriteSourceSize&&(l=new wt(Math.floor(r.spriteSourceSize.x)/this.resolution,Math.floor(r.spriteSourceSize.y)/this.resolution,Math.floor(o.w)/this.resolution,Math.floor(o.h)/this.resolution)),this.textures[i]=new rt({source:this.textureSource,frame:a,orig:c,trim:l,rotate:r.rotated?2:0,defaultAnchor:r.anchor,defaultBorders:r.borders,label:i.toString()})}n++}}_processAnimations(){const t=this.data.animations||{};for(const n in t){this.animations[n]=[];for(let s=0;s<t[n].length;s++){const i=t[n][s];this.animations[n].push(this.textures[i])}}}_parseComplete(){const t=this._callback;this._callback=null,this._batchIndex=0,t.call(this,this.textures)}_nextBatch(){this._processFrames(this._batchIndex*Vn.BATCH_SIZE),this._batchIndex++,setTimeout(()=>{this._batchIndex*Vn.BATCH_SIZE<this._frameKeys.length?this._nextBatch():(this._processAnimations(),this._parseComplete())},0)}destroy(t=!1){var n;for(const s in this.textures)this.textures[s].destroy();this._frames=null,this._frameKeys=null,this.data=null,this.textures=null,t&&((n=this._texture)==null||n.destroy(),this.textureSource.destroy()),this._texture=null,this.textureSource=null,this.linkedSheets=[]}};gu.BATCH_SIZE=1e3;let tl=gu;const Wp=["jpg","png","jpeg","avif","webp","basis","etc2","bc7","bc6h","bc5","bc4","bc3","bc2","bc1","eac","astc"];function xu(e,t,n){const s={};if(e.forEach(i=>{s[i]=t}),Object.keys(t.textures).forEach(i=>{s[i]=t.textures[i]}),!n){const i=Wt.dirname(e[0]);t.linkedSheets.forEach((r,o)=>{const a=xu([`${i}/${t.data.meta.related_multi_packs[o]}`],r,!0);Object.assign(s,a)})}return s}const Vp={extension:q.Asset,cache:{test:e=>e instanceof tl,getCacheableAssets:(e,t)=>xu(e,t,!1)},resolver:{extension:{type:q.ResolveParser,name:"resolveSpritesheet"},test:e=>{const n=e.split("?")[0].split("."),s=n.pop(),i=n.pop();return s==="json"&&Wp.includes(i)},parse:e=>{var n;const t=e.split(".");return{resolution:parseFloat(((n=Bn.RETINA_PREFIX.exec(e))==null?void 0:n[1])??"1"),format:t[t.length-2],src:e}}},loader:{name:"spritesheetLoader",extension:{type:q.LoadParser,priority:Ve.Normal,name:"spritesheetLoader"},async testParse(e,t){return Wt.extname(t.src).toLowerCase()===".json"&&!!e.frames},async parse(e,t,n){var u,c;const{texture:s,imageFilename:i}=(t==null?void 0:t.data)??{};let r=Wt.dirname(t.src);r&&r.lastIndexOf("/")!==r.length-1&&(r+="/");let o;if(s instanceof rt)o=s;else{const h=Lr(r+(i??e.meta.image),t.src);o=(await n.load([h]))[h]}const a=new tl(o.source,e);await a.parse();const l=(u=e==null?void 0:e.meta)==null?void 0:u.related_multi_packs;if(Array.isArray(l)){const h=[];for(const d of l){if(typeof d!="string")continue;let p=r+d;(c=t.data)!=null&&c.ignoreMultiPack||(p=Lr(p,t.src),h.push(n.load({src:p,data:{ignoreMultiPack:!0}})))}const f=await Promise.all(h);a.linkedSheets=f,f.forEach(d=>{d.linkedSheets=[a].concat(a.linkedSheets.filter(p=>p!==d))})}return a},async unload(e,t,n){await n.unload(e.textureSource._sourceOrigin),e.destroy(!1)}}};Jt.add(Vp);const qi=Object.create(null),el=Object.create(null);function Mo(e,t){let n=el[e];return n===void 0&&(qi[t]===void 0&&(qi[t]=1),el[e]=n=qi[t]++),n}let mn;function vu(){return(!mn||mn!=null&&mn.isContextLost())&&(mn=vt.get().createCanvas().getContext("webgl",{})),mn}let Bs;function Xp(){if(!Bs){Bs="mediump";const e=vu();e&&e.getShaderPrecisionFormat&&(Bs=e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision?"highp":"mediump")}return Bs}function Yp(e,t,n){return t?e:n?(e=e.replace("out vec4 finalColor;",""),`
        
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
        `}function qp(e,t,n){const s=n?t.maxSupportedFragmentPrecision:t.maxSupportedVertexPrecision;if(e.substring(0,9)!=="precision"){let i=n?t.requestedFragmentPrecision:t.requestedVertexPrecision;return i==="highp"&&s!=="highp"&&(i="mediump"),`precision ${i} float;
${e}`}else if(s!=="highp"&&e.substring(0,15)==="precision highp")return e.replace("precision highp","precision mediump");return e}function Kp(e,t){return t?`#version 300 es
${e}`:e}const Zp={},Qp={};function Jp(e,{name:t="pixi-program"},n=!0){t=t.replace(/\s+/g,"-"),t+=n?"-fragment":"-vertex";const s=n?Zp:Qp;return s[t]?(s[t]++,t+=`-${s[t]}`):s[t]=1,e.indexOf("#define SHADER_NAME")!==-1?e:`${`#define SHADER_NAME ${t}`}
${e}`}function tm(e,t){return t?e.replace("#version 300 es",""):e}const Ki={stripVersion:tm,ensurePrecision:qp,addProgramDefines:Yp,setProgramName:Jp,insertVersion:Kp},Zi=Object.create(null),_u=class jr{constructor(t){t={...jr.defaultOptions,...t};const n=t.fragment.indexOf("#version 300 es")!==-1,s={stripVersion:n,ensurePrecision:{requestedFragmentPrecision:t.preferredFragmentPrecision,requestedVertexPrecision:t.preferredVertexPrecision,maxSupportedVertexPrecision:"highp",maxSupportedFragmentPrecision:Xp()},setProgramName:{name:t.name},addProgramDefines:n,insertVersion:n};let i=t.fragment,r=t.vertex;Object.keys(Ki).forEach(o=>{const a=s[o];i=Ki[o](i,a,!0),r=Ki[o](r,a,!1)}),this.fragment=i,this.vertex=r,this._key=Mo(`${this.vertex}:${this.fragment}`,"gl-program")}destroy(){this.fragment=null,this.vertex=null,this._attributeData=null,this._uniformData=null,this._uniformBlockData=null,this.transformFeedbackVaryings=null}static from(t){const n=`${t.vertex}:${t.fragment}`;return Zi[n]||(Zi[n]=new jr(t)),Zi[n]}};_u.defaultOptions={preferredVertexPrecision:"highp",preferredFragmentPrecision:"mediump"};let fs=_u;const nl={uint8x2:{size:2,stride:2,normalised:!1},uint8x4:{size:4,stride:4,normalised:!1},sint8x2:{size:2,stride:2,normalised:!1},sint8x4:{size:4,stride:4,normalised:!1},unorm8x2:{size:2,stride:2,normalised:!0},unorm8x4:{size:4,stride:4,normalised:!0},snorm8x2:{size:2,stride:2,normalised:!0},snorm8x4:{size:4,stride:4,normalised:!0},uint16x2:{size:2,stride:4,normalised:!1},uint16x4:{size:4,stride:8,normalised:!1},sint16x2:{size:2,stride:4,normalised:!1},sint16x4:{size:4,stride:8,normalised:!1},unorm16x2:{size:2,stride:4,normalised:!0},unorm16x4:{size:4,stride:8,normalised:!0},snorm16x2:{size:2,stride:4,normalised:!0},snorm16x4:{size:4,stride:8,normalised:!0},float16x2:{size:2,stride:4,normalised:!1},float16x4:{size:4,stride:8,normalised:!1},float32:{size:1,stride:4,normalised:!1},float32x2:{size:2,stride:8,normalised:!1},float32x3:{size:3,stride:12,normalised:!1},float32x4:{size:4,stride:16,normalised:!1},uint32:{size:1,stride:4,normalised:!1},uint32x2:{size:2,stride:8,normalised:!1},uint32x3:{size:3,stride:12,normalised:!1},uint32x4:{size:4,stride:16,normalised:!1},sint32:{size:1,stride:4,normalised:!1},sint32x2:{size:2,stride:8,normalised:!1},sint32x3:{size:3,stride:12,normalised:!1},sint32x4:{size:4,stride:16,normalised:!1}};function em(e){return nl[e]??nl.float32}const nm={f32:"float32","vec2<f32>":"float32x2","vec3<f32>":"float32x3","vec4<f32>":"float32x4",vec2f:"float32x2",vec3f:"float32x3",vec4f:"float32x4",i32:"sint32","vec2<i32>":"sint32x2","vec3<i32>":"sint32x3","vec4<i32>":"sint32x4",u32:"uint32","vec2<u32>":"uint32x2","vec3<u32>":"uint32x3","vec4<u32>":"uint32x4",bool:"uint32","vec2<bool>":"uint32x2","vec3<bool>":"uint32x3","vec4<bool>":"uint32x4"};function sm({source:e,entryPoint:t}){const n={},s=e.indexOf(`fn ${t}`);if(s!==-1){const i=e.indexOf("->",s);if(i!==-1){const r=e.substring(s,i),o=/@location\((\d+)\)\s+([a-zA-Z0-9_]+)\s*:\s*([a-zA-Z0-9_<>]+)(?:,|\s|$)/g;let a;for(;(a=o.exec(r))!==null;){const l=nm[a[3]]??"float32";n[a[2]]={location:parseInt(a[1],10),format:l,stride:em(l).stride,offset:0,instance:!1,start:0}}}}return n}function Qi(e){var h,f;const t=/(^|[^/])@(group|binding)\(\d+\)[^;]+;/g,n=/@group\((\d+)\)/,s=/@binding\((\d+)\)/,i=/var(<[^>]+>)? (\w+)/,r=/:\s*(\w+)/,o=/struct\s+(\w+)\s*{([^}]+)}/g,a=/(\w+)\s*:\s*([\w\<\>]+)/g,l=/struct\s+(\w+)/,u=(h=e.match(t))==null?void 0:h.map(d=>({group:parseInt(d.match(n)[1],10),binding:parseInt(d.match(s)[1],10),name:d.match(i)[2],isUniform:d.match(i)[1]==="<uniform>",type:d.match(r)[1]}));if(!u)return{groups:[],structs:[]};const c=((f=e.match(o))==null?void 0:f.map(d=>{const p=d.match(l)[1],g=d.match(a).reduce((m,y)=>{const[v,x]=y.split(":");return m[v.trim()]=x.trim(),m},{});return g?{name:p,members:g}:null}).filter(({name:d})=>u.some(p=>p.type===d)))??[];return{groups:u,structs:c}}var Xn=(e=>(e[e.VERTEX=1]="VERTEX",e[e.FRAGMENT=2]="FRAGMENT",e[e.COMPUTE=4]="COMPUTE",e))(Xn||{});function im({groups:e}){const t=[];for(let n=0;n<e.length;n++){const s=e[n];t[s.group]||(t[s.group]=[]),s.isUniform?t[s.group].push({binding:s.binding,visibility:Xn.VERTEX|Xn.FRAGMENT,buffer:{type:"uniform"}}):s.type==="sampler"?t[s.group].push({binding:s.binding,visibility:Xn.FRAGMENT,sampler:{type:"filtering"}}):s.type==="texture_2d"&&t[s.group].push({binding:s.binding,visibility:Xn.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d",multisampled:!1}})}return t}function rm({groups:e}){const t=[];for(let n=0;n<e.length;n++){const s=e[n];t[s.group]||(t[s.group]={}),t[s.group][s.name]=s.binding}return t}function om(e,t){const n=new Set,s=new Set,i=[...e.structs,...t.structs].filter(o=>n.has(o.name)?!1:(n.add(o.name),!0)),r=[...e.groups,...t.groups].filter(o=>{const a=`${o.name}-${o.binding}`;return s.has(a)?!1:(s.add(a),!0)});return{structs:i,groups:r}}const Ji=Object.create(null);class _i{constructor(t){var a,l;this._layoutKey=0;const{fragment:n,vertex:s,layout:i,gpuLayout:r,name:o}=t;if(this.name=o,this.fragment=n,this.vertex=s,n.source===s.source){const u=Qi(n.source);this.structsAndGroups=u}else{const u=Qi(s.source),c=Qi(n.source);this.structsAndGroups=om(u,c)}this.layout=i??rm(this.structsAndGroups),this.gpuLayout=r??im(this.structsAndGroups),this.autoAssignGlobalUniforms=((a=this.layout[0])==null?void 0:a.globalUniforms)!==void 0,this.autoAssignLocalUniforms=((l=this.layout[1])==null?void 0:l.localUniforms)!==void 0,this._generateProgramKey()}_generateProgramKey(){const{vertex:t,fragment:n}=this,s=t.source+n.source+t.entryPoint+n.entryPoint;this._layoutKey=Mo(s,"program")}get attributeData(){return this._attributeData??(this._attributeData=sm(this.vertex)),this._attributeData}destroy(){this.gpuLayout=null,this.layout=null,this.structsAndGroups=null,this.fragment=null,this.vertex=null}static from(t){const n=`${t.vertex.source}:${t.fragment.source}:${t.fragment.entryPoint}:${t.vertex.entryPoint}`;return Ji[n]||(Ji[n]=new _i(t)),Ji[n]}}const yu=["f32","i32","vec2<f32>","vec3<f32>","vec4<f32>","mat2x2<f32>","mat3x3<f32>","mat4x4<f32>","mat3x2<f32>","mat4x2<f32>","mat2x3<f32>","mat4x3<f32>","mat2x4<f32>","mat3x4<f32>"],am=yu.reduce((e,t)=>(e[t]=!0,e),{});function lm(e,t){switch(e){case"f32":return 0;case"vec2<f32>":return new Float32Array(2*t);case"vec3<f32>":return new Float32Array(3*t);case"vec4<f32>":return new Float32Array(4*t);case"mat2x2<f32>":return new Float32Array([1,0,0,1]);case"mat3x3<f32>":return new Float32Array([1,0,0,0,1,0,0,0,1]);case"mat4x4<f32>":return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}return null}const bu=class wu{constructor(t,n){this._touched=0,this.uid=At("uniform"),this._resourceType="uniformGroup",this._resourceId=At("resource"),this.isUniformGroup=!0,this._dirtyId=0,this.destroyed=!1,n={...wu.defaultOptions,...n},this.uniformStructures=t;const s={};for(const i in t){const r=t[i];if(r.name=i,r.size=r.size??1,!am[r.type])throw new Error(`Uniform type ${r.type} is not supported. Supported uniform types are: ${yu.join(", ")}`);r.value??(r.value=lm(r.type,r.size)),s[i]=r.value}this.uniforms=s,this._dirtyId=1,this.ubo=n.ubo,this.isStatic=n.isStatic,this._signature=Mo(Object.keys(s).map(i=>`${i}-${t[i].type}`).join("-"),"uniform-group")}update(){this._dirtyId++}};bu.defaultOptions={ubo:!1,isStatic:!1};let cm=bu;class qs{constructor(t){this.resources=Object.create(null),this._dirty=!0;let n=0;for(const s in t){const i=t[s];this.setResource(i,n++)}this._updateKey()}_updateKey(){if(!this._dirty)return;this._dirty=!1;const t=[];let n=0;for(const s in this.resources)t[n++]=this.resources[s]._resourceId;this._key=t.join("|")}setResource(t,n){var i,r;const s=this.resources[n];t!==s&&(s&&((i=t.off)==null||i.call(t,"change",this.onResourceChange,this)),(r=t.on)==null||r.call(t,"change",this.onResourceChange,this),this.resources[n]=t,this._dirty=!0)}getResource(t){return this.resources[t]}_touch(t){const n=this.resources;for(const s in n)n[s]._touched=t}destroy(){var n;const t=this.resources;for(const s in t){const i=t[s];(n=i.off)==null||n.call(i,"change",this.onResourceChange,this)}this.resources=null}onResourceChange(t){if(this._dirty=!0,t.destroyed){const n=this.resources;for(const s in n)n[s]===t&&(n[s]=null)}else this._updateKey()}}var Nr=(e=>(e[e.WEBGL=1]="WEBGL",e[e.WEBGPU=2]="WEBGPU",e[e.BOTH=3]="BOTH",e))(Nr||{});let um=class Au extends ce{constructor(t){super(),this._uniformBindMap=Object.create(null),this._ownedBindGroups=[];let{gpuProgram:n,glProgram:s,groups:i,resources:r,compatibleRenderers:o,groupMap:a}=t;this.gpuProgram=n,this.glProgram=s,o===void 0&&(o=0,n&&(o|=Nr.WEBGPU),s&&(o|=Nr.WEBGL)),this.compatibleRenderers=o;const l={};if(!r&&!i&&(r={}),r&&i)throw new Error("[Shader] Cannot have both resources and groups");if(!n&&i&&!a)throw new Error("[Shader] No group map or WebGPU shader provided - consider using resources instead.");if(!n&&i&&a)for(const u in a)for(const c in a[u]){const h=a[u][c];l[h]={group:u,binding:c,name:h}}else if(n&&i&&!a){const u=n.structsAndGroups.groups;a={},u.forEach(c=>{a[c.group]=a[c.group]||{},a[c.group][c.binding]=c.name,l[c.name]=c})}else if(r){if(n){const u=n.structsAndGroups.groups;a={},u.forEach(c=>{a[c.group]=a[c.group]||{},a[c.group][c.binding]=c.name,l[c.name]=c})}else{a={},i={99:new qs},this._ownedBindGroups.push(i[99]);let u=0;for(const c in r)l[c]={group:99,binding:u,name:c},a[99]=a[99]||{},a[99][u]=c,u++}i={};for(const u in r){const c=u;let h=r[u];!h.source&&!h._resourceType&&(h=new cm(h));const f=l[c];f&&(i[f.group]||(i[f.group]=new qs,this._ownedBindGroups.push(i[f.group])),i[f.group].setResource(h,f.binding))}}this.groups=i,this._uniformBindMap=a,this.resources=this._buildResourceAccessor(i,l)}addResource(t,n,s){var i,r;(i=this._uniformBindMap)[n]||(i[n]={}),(r=this._uniformBindMap[n])[s]||(r[s]=t),this.groups[n]||(this.groups[n]=new qs,this._ownedBindGroups.push(this.groups[n]))}_buildResourceAccessor(t,n){const s={};for(const i in n){const r=n[i];Object.defineProperty(s,r.name,{get(){return t[r.group].getResource(r.binding)},set(o){t[r.group].setResource(o,r.binding)}})}return s}destroy(t=!1){var n,s;this.emit("destroy",this),t&&((n=this.gpuProgram)==null||n.destroy(),(s=this.glProgram)==null||s.destroy()),this.gpuProgram=null,this.glProgram=null,this.removeAllListeners(),this._uniformBindMap=null,this._ownedBindGroups.forEach(i=>{i.destroy()}),this._ownedBindGroups=null,this.resources=null,this.groups=null}static from(t){const{gpu:n,gl:s,...i}=t;let r,o;return n&&(r=_i.from(n)),s&&(o=fs.from(s)),new Au({gpuProgram:r,glProgram:o,...i})}};const hm={normal:0,add:1,multiply:2,screen:3,overlay:4,erase:5,"normal-npm":6,"add-npm":7,"screen-npm":8},tr=0,er=1,nr=2,sr=3,ir=4,rr=5,Ur=class Cu{constructor(){this.data=0,this.blendMode="normal",this.polygonOffset=0,this.blend=!0,this.depthMask=!0}get blend(){return!!(this.data&1<<tr)}set blend(t){!!(this.data&1<<tr)!==t&&(this.data^=1<<tr)}get offsets(){return!!(this.data&1<<er)}set offsets(t){!!(this.data&1<<er)!==t&&(this.data^=1<<er)}set cullMode(t){if(t==="none"){this.culling=!1;return}this.culling=!0,this.clockwiseFrontFace=t==="front"}get cullMode(){return this.culling?this.clockwiseFrontFace?"front":"back":"none"}get culling(){return!!(this.data&1<<nr)}set culling(t){!!(this.data&1<<nr)!==t&&(this.data^=1<<nr)}get depthTest(){return!!(this.data&1<<sr)}set depthTest(t){!!(this.data&1<<sr)!==t&&(this.data^=1<<sr)}get depthMask(){return!!(this.data&1<<rr)}set depthMask(t){!!(this.data&1<<rr)!==t&&(this.data^=1<<rr)}get clockwiseFrontFace(){return!!(this.data&1<<ir)}set clockwiseFrontFace(t){!!(this.data&1<<ir)!==t&&(this.data^=1<<ir)}get blendMode(){return this._blendMode}set blendMode(t){this.blend=t!=="none",this._blendMode=t,this._blendModeId=hm[t]||0}get polygonOffset(){return this._polygonOffset}set polygonOffset(t){this.offsets=!!t,this._polygonOffset=t}toString(){return`[pixi.js/core:State blendMode=${this.blendMode} clockwiseFrontFace=${this.clockwiseFrontFace} culling=${this.culling} depthMask=${this.depthMask} polygonOffset=${this.polygonOffset}]`}static for2d(){const t=new Cu;return t.depthTest=!1,t.blend=!0,t}};Ur.default2d=Ur.for2d();let fm=Ur;const Su=class Dr extends um{constructor(t){t={...Dr.defaultOptions,...t},super(t),this.enabled=!0,this._state=fm.for2d(),this.padding=t.padding,typeof t.antialias=="boolean"?this.antialias=t.antialias?"on":"off":this.antialias=t.antialias,this.resolution=t.resolution,this.blendRequired=t.blendRequired,this.addResource("uTexture",0,1)}apply(t,n,s,i){t.applyFilter(this,n,s,i)}get blendMode(){return this._state.blendMode}set blendMode(t){this._state.blendMode=t}static from(t){const{gpu:n,gl:s,...i}=t;let r,o;return n&&(r=_i.from(n)),s&&(o=fs.from(s)),new Dr({gpuProgram:r,glProgram:o,...i})}};Su.defaultOptions={blendMode:"normal",resolution:1,padding:0,antialias:"off",blendRequired:!1};let Mu=Su;const Gr=[];Jt.handleByNamedList(q.Environment,Gr);async function dm(e){if(!e)for(let t=0;t<Gr.length;t++){const n=Gr[t];if(n.value.test()){await n.value.load();return}}}let Un;function pm(){if(typeof Un=="boolean")return Un;try{Un=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{Un=!1}return Un}var Po={exports:{}};Po.exports=yi;Po.exports.default=yi;function yi(e,t,n){n=n||2;var s=t&&t.length,i=s?t[0]*n:e.length,r=Pu(e,0,i,n,!0),o=[];if(!r||r.next===r.prev)return o;var a,l,u,c,h,f,d;if(s&&(r=_m(e,t,r,n)),e.length>80*n){a=u=e[0],l=c=e[1];for(var p=n;p<i;p+=n)h=e[p],f=e[p+1],h<a&&(a=h),f<l&&(l=f),h>u&&(u=h),f>c&&(c=f);d=Math.max(u-a,c-l),d=d!==0?32767/d:0}return ds(r,o,n,a,l,d,0),o}function Pu(e,t,n,s,i){var r,o;if(i===Wr(e,t,n,s)>0)for(r=t;r<n;r+=s)o=sl(r,e[r],e[r+1],o);else for(r=n-s;r>=t;r-=s)o=sl(r,e[r],e[r+1],o);return o&&bi(o,o.next)&&(ms(o),o=o.next),o}function hn(e,t){if(!e)return e;t||(t=e);var n=e,s;do if(s=!1,!n.steiner&&(bi(n,n.next)||gt(n.prev,n,n.next)===0)){if(ms(n),n=t=n.prev,n===n.next)break;s=!0}else n=n.next;while(s||n!==t);return t}function ds(e,t,n,s,i,r,o){if(e){!o&&r&&Cm(e,s,i,r);for(var a=e,l,u;e.prev!==e.next;){if(l=e.prev,u=e.next,r?gm(e,s,i,r):mm(e)){t.push(l.i/n|0),t.push(e.i/n|0),t.push(u.i/n|0),ms(e),e=u.next,a=u.next;continue}if(e=u,e===a){o?o===1?(e=xm(hn(e),t,n),ds(e,t,n,s,i,r,2)):o===2&&vm(e,t,n,s,i,r):ds(hn(e),t,n,s,i,r,1);break}}}}function mm(e){var t=e.prev,n=e,s=e.next;if(gt(t,n,s)>=0)return!1;for(var i=t.x,r=n.x,o=s.x,a=t.y,l=n.y,u=s.y,c=i<r?i<o?i:o:r<o?r:o,h=a<l?a<u?a:u:l<u?l:u,f=i>r?i>o?i:o:r>o?r:o,d=a>l?a>u?a:u:l>u?l:u,p=s.next;p!==t;){if(p.x>=c&&p.x<=f&&p.y>=h&&p.y<=d&&vn(i,a,r,l,o,u,p.x,p.y)&&gt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function gm(e,t,n,s){var i=e.prev,r=e,o=e.next;if(gt(i,r,o)>=0)return!1;for(var a=i.x,l=r.x,u=o.x,c=i.y,h=r.y,f=o.y,d=a<l?a<u?a:u:l<u?l:u,p=c<h?c<f?c:f:h<f?h:f,g=a>l?a>u?a:u:l>u?l:u,m=c>h?c>f?c:f:h>f?h:f,y=Hr(d,p,t,n,s),v=Hr(g,m,t,n,s),x=e.prevZ,w=e.nextZ;x&&x.z>=y&&w&&w.z<=v;){if(x.x>=d&&x.x<=g&&x.y>=p&&x.y<=m&&x!==i&&x!==o&&vn(a,c,l,h,u,f,x.x,x.y)&&gt(x.prev,x,x.next)>=0||(x=x.prevZ,w.x>=d&&w.x<=g&&w.y>=p&&w.y<=m&&w!==i&&w!==o&&vn(a,c,l,h,u,f,w.x,w.y)&&gt(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;x&&x.z>=y;){if(x.x>=d&&x.x<=g&&x.y>=p&&x.y<=m&&x!==i&&x!==o&&vn(a,c,l,h,u,f,x.x,x.y)&&gt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;w&&w.z<=v;){if(w.x>=d&&w.x<=g&&w.y>=p&&w.y<=m&&w!==i&&w!==o&&vn(a,c,l,h,u,f,w.x,w.y)&&gt(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function xm(e,t,n){var s=e;do{var i=s.prev,r=s.next.next;!bi(i,r)&&Tu(i,s,s.next,r)&&ps(i,r)&&ps(r,i)&&(t.push(i.i/n|0),t.push(s.i/n|0),t.push(r.i/n|0),ms(s),ms(s.next),s=e=r),s=s.next}while(s!==e);return hn(s)}function vm(e,t,n,s,i,r){var o=e;do{for(var a=o.next.next;a!==o.prev;){if(o.i!==a.i&&Pm(o,a)){var l=ku(o,a);o=hn(o,o.next),l=hn(l,l.next),ds(o,t,n,s,i,r,0),ds(l,t,n,s,i,r,0);return}a=a.next}o=o.next}while(o!==e)}function _m(e,t,n,s){var i=[],r,o,a,l,u;for(r=0,o=t.length;r<o;r++)a=t[r]*s,l=r<o-1?t[r+1]*s:e.length,u=Pu(e,a,l,s,!1),u===u.next&&(u.steiner=!0),i.push(Mm(u));for(i.sort(ym),r=0;r<i.length;r++)n=bm(i[r],n);return n}function ym(e,t){return e.x-t.x}function bm(e,t){var n=wm(e,t);if(!n)return t;var s=ku(n,e);return hn(s,s.next),hn(n,n.next)}function wm(e,t){var n=t,s=e.x,i=e.y,r=-1/0,o;do{if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){var a=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(a<=s&&a>r&&(r=a,o=n.x<n.next.x?n:n.next,a===s))return o}n=n.next}while(n!==t);if(!o)return null;var l=o,u=o.x,c=o.y,h=1/0,f;n=o;do s>=n.x&&n.x>=u&&s!==n.x&&vn(i<c?s:r,i,u,c,i<c?r:s,i,n.x,n.y)&&(f=Math.abs(i-n.y)/(s-n.x),ps(n,e)&&(f<h||f===h&&(n.x>o.x||n.x===o.x&&Am(o,n)))&&(o=n,h=f)),n=n.next;while(n!==l);return o}function Am(e,t){return gt(e.prev,e,t.prev)<0&&gt(t.next,e,e.next)<0}function Cm(e,t,n,s){var i=e;do i.z===0&&(i.z=Hr(i.x,i.y,t,n,s)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,Sm(i)}function Sm(e){var t,n,s,i,r,o,a,l,u=1;do{for(n=e,e=null,r=null,o=0;n;){for(o++,s=n,a=0,t=0;t<u&&(a++,s=s.nextZ,!!s);t++);for(l=u;a>0||l>0&&s;)a!==0&&(l===0||!s||n.z<=s.z)?(i=n,n=n.nextZ,a--):(i=s,s=s.nextZ,l--),r?r.nextZ=i:e=i,i.prevZ=r,r=i;n=s}r.nextZ=null,u*=2}while(o>1);return e}function Hr(e,t,n,s,i){return e=(e-n)*i|0,t=(t-s)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function Mm(e){var t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function vn(e,t,n,s,i,r,o,a){return(i-o)*(t-a)>=(e-o)*(r-a)&&(e-o)*(s-a)>=(n-o)*(t-a)&&(n-o)*(r-a)>=(i-o)*(s-a)}function Pm(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Tm(e,t)&&(ps(e,t)&&ps(t,e)&&km(e,t)&&(gt(e.prev,e,t.prev)||gt(e,t.prev,t))||bi(e,t)&&gt(e.prev,e,e.next)>0&&gt(t.prev,t,t.next)>0)}function gt(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function bi(e,t){return e.x===t.x&&e.y===t.y}function Tu(e,t,n,s){var i=Rs(gt(e,t,n)),r=Rs(gt(e,t,s)),o=Rs(gt(n,s,e)),a=Rs(gt(n,s,t));return!!(i!==r&&o!==a||i===0&&zs(e,n,t)||r===0&&zs(e,s,t)||o===0&&zs(n,e,s)||a===0&&zs(n,t,s))}function zs(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Rs(e){return e>0?1:e<0?-1:0}function Tm(e,t){var n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&Tu(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function ps(e,t){return gt(e.prev,e,e.next)<0?gt(e,t,e.next)>=0&&gt(e,e.prev,t)>=0:gt(e,t,e.prev)<0||gt(e,e.next,t)<0}function km(e,t){var n=e,s=!1,i=(e.x+t.x)/2,r=(e.y+t.y)/2;do n.y>r!=n.next.y>r&&n.next.y!==n.y&&i<(n.next.x-n.x)*(r-n.y)/(n.next.y-n.y)+n.x&&(s=!s),n=n.next;while(n!==e);return s}function ku(e,t){var n=new $r(e.i,e.x,e.y),s=new $r(t.i,t.x,t.y),i=e.next,r=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,s.next=n,n.prev=s,r.next=s,s.prev=r,s}function sl(e,t,n,s){var i=new $r(e,t,n);return s?(i.next=s.next,i.prev=s,s.next.prev=i,s.next=i):(i.prev=i,i.next=i),i}function ms(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function $r(e,t,n){this.i=e,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}yi.deviation=function(e,t,n,s){var i=t&&t.length,r=i?t[0]*n:e.length,o=Math.abs(Wr(e,0,r,n));if(i)for(var a=0,l=t.length;a<l;a++){var u=t[a]*n,c=a<l-1?t[a+1]*n:e.length;o-=Math.abs(Wr(e,u,c,n))}var h=0;for(a=0;a<s.length;a+=3){var f=s[a]*n,d=s[a+1]*n,p=s[a+2]*n;h+=Math.abs((e[f]-e[p])*(e[d+1]-e[f+1])-(e[f]-e[d])*(e[p+1]-e[f+1]))}return o===0&&h===0?0:Math.abs((h-o)/o)};function Wr(e,t,n,s){for(var i=0,r=t,o=n-s;r<n;r+=s)i+=(e[o]-e[r])*(e[r+1]+e[o+1]),o=r;return i}yi.flatten=function(e){for(var t=e[0][0].length,n={vertices:[],holes:[],dimensions:t},s=0,i=0;i<e.length;i++){for(var r=0;r<e[i].length;r++)for(var o=0;o<t;o++)n.vertices.push(e[i][r][o]);i>0&&(s+=e[i-1].length,n.holes.push(s))}return n};var Em=Po.exports;const Im=Ao(Em);var Eu=(e=>(e[e.NONE=0]="NONE",e[e.COLOR=16384]="COLOR",e[e.STENCIL=1024]="STENCIL",e[e.DEPTH=256]="DEPTH",e[e.COLOR_DEPTH=16640]="COLOR_DEPTH",e[e.COLOR_STENCIL=17408]="COLOR_STENCIL",e[e.DEPTH_STENCIL=1280]="DEPTH_STENCIL",e[e.ALL=17664]="ALL",e))(Eu||{});class Fm{constructor(t){this.items=[],this._name=t}emit(t,n,s,i,r,o,a,l){const{name:u,items:c}=this;for(let h=0,f=c.length;h<f;h++)c[h][u](t,n,s,i,r,o,a,l);return this}add(t){return t[this._name]&&(this.remove(t),this.items.push(t)),this}remove(t){const n=this.items.indexOf(t);return n!==-1&&this.items.splice(n,1),this}contains(t){return this.items.indexOf(t)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const Bm=["init","destroy","contextChange","resolutionChange","reset","renderEnd","renderStart","render","update","postrender","prerender"],Iu=class Fu extends ce{constructor(t){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=t.type,this.name=t.name,this.config=t;const n=[...Bm,...this.config.runners??[]];this._addRunners(...n),this._unsafeEvalCheck()}async init(t={}){const n=t.skipExtensionImports===!0?!0:t.manageImports===!1;await dm(n),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const s in this._systemsHash)t={...this._systemsHash[s].constructor.defaultOptions,...t};t={...Fu.defaultOptions,...t},this._roundPixels=t.roundPixels?1:0;for(let s=0;s<this.runners.init.items.length;s++)await this.runners.init.items[s].init(t);this._initOptions=t}render(t,n){let s=t;if(s instanceof Rt&&(s={container:s},n&&(ut(ct,"passing a second argument is deprecated, please use render options instead"),s.target=n.renderTexture)),s.target||(s.target=this.view.renderTarget),s.target===this.view.renderTarget&&(this._lastObjectRendered=s.container,s.clearColor=this.background.colorRgba),s.clearColor){const i=Array.isArray(s.clearColor)&&s.clearColor.length===4;s.clearColor=i?s.clearColor:yt.shared.setValue(s.clearColor).toArray()}s.transform||(s.container.updateLocalTransform(),s.transform=s.container.localTransform),this.runners.prerender.emit(s),this.runners.renderStart.emit(s),this.runners.render.emit(s),this.runners.renderEnd.emit(s),this.runners.postrender.emit(s)}resize(t,n,s){this.view.resize(t,n,s),this.emit("resize",this.view.screen.width,this.view.screen.height)}clear(t={}){const n=this;t.target||(t.target=n.renderTarget.renderTarget),t.clearColor||(t.clearColor=this.background.colorRgba),t.clear??(t.clear=Eu.ALL);const{clear:s,clearColor:i,target:r}=t;yt.shared.setValue(i??this.background.colorRgba),n.renderTarget.clear(r,s,yt.shared.toArray())}get resolution(){return this.view.resolution}set resolution(t){this.view.resolution=t,this.runners.resolutionChange.emit(t)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...t){t.forEach(n=>{this.runners[n]=new Fm(n)})}_addSystems(t){let n;for(n in t){const s=t[n];this._addSystem(s.value,s.name)}}_addSystem(t,n){const s=new t(this);if(this[n])throw new Error(`Whoops! The name "${n}" is already in use`);this[n]=s,this._systemsHash[n]=s;for(const i in this.runners)this.runners[i].add(s);return this}_addPipes(t,n){const s=n.reduce((i,r)=>(i[r.name]=r.value,i),{});t.forEach(i=>{const r=i.value,o=i.name,a=s[o];this.renderPipes[o]=new r(this,a?new a:null)})}destroy(t=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(t),Object.values(this.runners).forEach(n=>{n.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(t){return this.textureGenerator.generateTexture(t)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!pm())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}};Iu.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let Bu=Iu,Os;function zm(e){return Os!==void 0||(Os=(()=>{var n;const t={stencil:!0,failIfMajorPerformanceCaveat:e??Bu.defaultOptions.failIfMajorPerformanceCaveat};try{if(!vt.get().getWebGLRenderingContext())return!1;let i=vt.get().createCanvas().getContext("webgl",t);const r=!!((n=i==null?void 0:i.getContextAttributes())!=null&&n.stencil);if(i){const o=i.getExtension("WEBGL_lose_context");o&&o.loseContext()}return i=null,r}catch{return!1}})()),Os}let Ls;async function Rm(e={}){return Ls!==void 0||(Ls=await(async()=>{if(!vt.get().getNavigator().gpu)return!1;try{return await(await navigator.gpu.requestAdapter(e)).requestDevice(),!0}catch{return!1}})()),Ls}const il=["webgl","webgpu","canvas"];async function Om(e){let t=[];e.preference?(t.push(e.preference),il.forEach(r=>{r!==e.preference&&t.push(r)})):t=il.slice();let n,s={};for(let r=0;r<t.length;r++){const o=t[r];if(o==="webgpu"&&await Rm()){const{WebGPURenderer:a}=await ti(()=>import("./WebGPURenderer-CdWFms28.js"),__vite__mapDeps([4,2,5]));n=a,s={...e,...e.webgpu};break}else if(o==="webgl"&&zm(e.failIfMajorPerformanceCaveat??Bu.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:a}=await ti(()=>import("./WebGLRenderer-B9e5aLXF.js"),__vite__mapDeps([6,2,3,5]));n=a,s={...e,...e.webgl};break}else if(o==="canvas")throw s={...e},new Error("CanvasRenderer is not yet implemented")}if(delete s.webgpu,delete s.webgl,!n)throw new Error("No available renderer for the current environment");const i=new n;return await i.init(s),i}const zu=class Vr{constructor(...t){this.stage=new Rt,t[0]!==void 0&&ut(ct,"Application constructor options are deprecated, please use Application.init() instead.")}async init(t){t={...t},this.renderer=await Om(t),Vr._plugins.forEach(n=>{n.init.call(this,t)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return ut(ct,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(t=!1,n=!1){const s=Vr._plugins.slice(0);s.reverse(),s.forEach(i=>{i.destroy.call(this)}),this.stage.destroy(n),this.stage=null,this.renderer.destroy(t),this.renderer=null}};zu._plugins=[];let To=zu;Jt.handleByList(q.Application,To._plugins);class Ru extends ce{constructor(){super(...arguments),this.chars=Object.create(null),this.lineHeight=0,this.fontFamily="",this.fontMetrics={fontSize:0,ascent:0,descent:0},this.baseLineOffset=0,this.distanceField={type:"none",range:0},this.pages=[],this.baseMeasurementFontSize=100,this.baseRenderedFontSize=100}get font(){return ut(ct,"BitmapFont.font is deprecated, please use BitmapFont.fontFamily instead."),this.fontFamily}get pageTextures(){return ut(ct,"BitmapFont.pageTextures is deprecated, please use BitmapFont.pages instead."),this.pages}get size(){return ut(ct,"BitmapFont.size is deprecated, please use BitmapFont.fontMetrics.fontSize instead."),this.fontMetrics.fontSize}get distanceFieldRange(){return ut(ct,"BitmapFont.distanceFieldRange is deprecated, please use BitmapFont.distanceField.range instead."),this.distanceField.range}get distanceFieldType(){return ut(ct,"BitmapFont.distanceFieldType is deprecated, please use BitmapFont.distanceField.type instead."),this.distanceField.type}destroy(t=!1){var n;this.emit("destroy",this),this.removeAllListeners();for(const s in this.chars)(n=this.chars[s].texture)==null||n.destroy();this.chars=null,t&&(this.pages.forEach(s=>s.texture.destroy(!0)),this.pages=null)}}const Ou=class Xr{constructor(t,n,s,i){this.uid=At("fillGradient"),this.type="linear",this.gradientStops=[],this._styleKey=null,this.x0=t,this.y0=n,this.x1=s,this.y1=i}addColorStop(t,n){return this.gradientStops.push({offset:t,color:yt.shared.setValue(n).toHex()}),this._styleKey=null,this}buildLinearGradient(){const t=Xr.defaultTextureSize,{gradientStops:n}=this,s=vt.get().createCanvas();s.width=t,s.height=t;const i=s.getContext("2d"),r=i.createLinearGradient(0,0,Xr.defaultTextureSize,1);for(let g=0;g<n.length;g++){const m=n[g];r.addColorStop(m.offset,m.color)}i.fillStyle=r,i.fillRect(0,0,t,t),this.texture=new rt({source:new Fn({resource:s,addressModeU:"clamp-to-edge",addressModeV:"repeat"})});const{x0:o,y0:a,x1:l,y1:u}=this,c=new at,h=l-o,f=u-a,d=Math.sqrt(h*h+f*f),p=Math.atan2(f,h);c.translate(-o,-a),c.scale(1/t,1/t),c.rotate(-p),c.scale(256/d,1),this.transform=c,this._styleKey=null}get styleKey(){if(this._styleKey)return this._styleKey;const t=this.gradientStops.map(i=>`${i.offset}-${i.color}`).join("-"),n=this.texture.uid,s=this.transform.toArray().join("-");return`fill-gradient-${this.uid}-${t}-${n}-${s}-${this.x0}-${this.y0}-${this.x1}-${this.y1}`}};Ou.defaultTextureSize=256;let gs=Ou;const rl={repeat:{addressModeU:"repeat",addressModeV:"repeat"},"repeat-x":{addressModeU:"repeat",addressModeV:"clamp-to-edge"},"repeat-y":{addressModeU:"clamp-to-edge",addressModeV:"repeat"},"no-repeat":{addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}};class wi{constructor(t,n){this.uid=At("fillPattern"),this.transform=new at,this._styleKey=null,this.texture=t,this.transform.scale(1/t.frame.width,1/t.frame.height),n&&(t.source.style.addressModeU=rl[n].addressModeU,t.source.style.addressModeV=rl[n].addressModeV)}setTransform(t){const n=this.texture;this.transform.copyFrom(t),this.transform.invert(),this.transform.scale(1/n.frame.width,1/n.frame.height),this._styleKey=null}get styleKey(){return this._styleKey?this._styleKey:(this._styleKey=`fill-pattern-${this.uid}-${this.texture.uid}-${this.transform.toArray().join("-")}`,this._styleKey)}}var Lm=Nm,or={a:7,c:6,h:1,l:2,m:2,q:4,s:4,t:2,v:1,z:0},jm=/([astvzqmhlc])([^astvzqmhlc]*)/ig;function Nm(e){var t=[];return e.replace(jm,function(n,s,i){var r=s.toLowerCase();for(i=Dm(i),r=="m"&&i.length>2&&(t.push([s].concat(i.splice(0,2))),r="l",s=s=="m"?"l":"L");;){if(i.length==or[r])return i.unshift(s),t.push(i);if(i.length<or[r])throw new Error("malformed path data");t.push([s].concat(i.splice(0,or[r])))}}),t}var Um=/-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/ig;function Dm(e){var t=e.match(Um);return t?t.map(Number):[]}const Gm=Ao(Lm);function Hm(e,t){const n=Gm(e),s=[];let i=null,r=0,o=0;for(let a=0;a<n.length;a++){const l=n[a],u=l[0],c=l;switch(u){case"M":r=c[1],o=c[2],t.moveTo(r,o);break;case"m":r+=c[1],o+=c[2],t.moveTo(r,o);break;case"H":r=c[1],t.lineTo(r,o);break;case"h":r+=c[1],t.lineTo(r,o);break;case"V":o=c[1],t.lineTo(r,o);break;case"v":o+=c[1],t.lineTo(r,o);break;case"L":r=c[1],o=c[2],t.lineTo(r,o);break;case"l":r+=c[1],o+=c[2],t.lineTo(r,o);break;case"C":r=c[5],o=c[6],t.bezierCurveTo(c[1],c[2],c[3],c[4],r,o);break;case"c":t.bezierCurveTo(r+c[1],o+c[2],r+c[3],o+c[4],r+c[5],o+c[6]),r+=c[5],o+=c[6];break;case"S":r=c[3],o=c[4],t.bezierCurveToShort(c[1],c[2],r,o);break;case"s":t.bezierCurveToShort(r+c[1],o+c[2],r+c[3],o+c[4]),r+=c[3],o+=c[4];break;case"Q":r=c[3],o=c[4],t.quadraticCurveTo(c[1],c[2],r,o);break;case"q":t.quadraticCurveTo(r+c[1],o+c[2],r+c[3],o+c[4]),r+=c[3],o+=c[4];break;case"T":r=c[1],o=c[2],t.quadraticCurveToShort(r,o);break;case"t":r+=c[1],o+=c[2],t.quadraticCurveToShort(r,o);break;case"A":r=c[6],o=c[7],t.arcToSvg(c[1],c[2],c[3],c[4],c[5],r,o);break;case"a":r+=c[6],o+=c[7],t.arcToSvg(c[1],c[2],c[3],c[4],c[5],r,o);break;case"Z":case"z":t.closePath(),s.length>0&&(i=s.pop(),i?(r=i.startX,o=i.startY):(r=0,o=0)),i=null;break;default:Tt(`Unknown SVG path command: ${u}`)}u!=="Z"&&u!=="z"&&i===null&&(i={startX:r,startY:o},s.push(i))}return t}class ko{constructor(t=0,n=0,s=0){this.type="circle",this.x=t,this.y=n,this.radius=s}clone(){return new ko(this.x,this.y,this.radius)}contains(t,n){if(this.radius<=0)return!1;const s=this.radius*this.radius;let i=this.x-t,r=this.y-n;return i*=i,r*=r,i+r<=s}strokeContains(t,n,s){if(this.radius===0)return!1;const i=this.x-t,r=this.y-n,o=this.radius,a=s/2,l=Math.sqrt(i*i+r*r);return l<o+a&&l>o-a}getBounds(t){return t=t||new wt,t.x=this.x-this.radius,t.y=this.y-this.radius,t.width=this.radius*2,t.height=this.radius*2,t}copyFrom(t){return this.x=t.x,this.y=t.y,this.radius=t.radius,this}copyTo(t){return t.copyFrom(this),t}toString(){return`[pixi.js/math:Circle x=${this.x} y=${this.y} radius=${this.radius}]`}}class Eo{constructor(t=0,n=0,s=0,i=0){this.type="ellipse",this.x=t,this.y=n,this.halfWidth=s,this.halfHeight=i}clone(){return new Eo(this.x,this.y,this.halfWidth,this.halfHeight)}contains(t,n){if(this.halfWidth<=0||this.halfHeight<=0)return!1;let s=(t-this.x)/this.halfWidth,i=(n-this.y)/this.halfHeight;return s*=s,i*=i,s+i<=1}strokeContains(t,n,s){const{halfWidth:i,halfHeight:r}=this;if(i<=0||r<=0)return!1;const o=s/2,a=i-o,l=r-o,u=i+o,c=r+o,h=t-this.x,f=n-this.y,d=h*h/(a*a)+f*f/(l*l),p=h*h/(u*u)+f*f/(c*c);return d>1&&p<=1}getBounds(){return new wt(this.x-this.halfWidth,this.y-this.halfHeight,this.halfWidth*2,this.halfHeight*2)}copyFrom(t){return this.x=t.x,this.y=t.y,this.halfWidth=t.halfWidth,this.halfHeight=t.halfHeight,this}copyTo(t){return t.copyFrom(this),t}toString(){return`[pixi.js/math:Ellipse x=${this.x} y=${this.y} halfWidth=${this.halfWidth} halfHeight=${this.halfHeight}]`}}function $m(e,t,n,s,i,r){const o=e-n,a=t-s,l=i-n,u=r-s,c=o*l+a*u,h=l*l+u*u;let f=-1;h!==0&&(f=c/h);let d,p;f<0?(d=n,p=s):f>1?(d=i,p=r):(d=n+f*l,p=s+f*u);const g=e-d,m=t-p;return g*g+m*m}class ns{constructor(...t){this.type="polygon";let n=Array.isArray(t[0])?t[0]:t;if(typeof n[0]!="number"){const s=[];for(let i=0,r=n.length;i<r;i++)s.push(n[i].x,n[i].y);n=s}this.points=n,this.closePath=!0}clone(){const t=this.points.slice(),n=new ns(t);return n.closePath=this.closePath,n}contains(t,n){let s=!1;const i=this.points.length/2;for(let r=0,o=i-1;r<i;o=r++){const a=this.points[r*2],l=this.points[r*2+1],u=this.points[o*2],c=this.points[o*2+1];l>n!=c>n&&t<(u-a)*((n-l)/(c-l))+a&&(s=!s)}return s}strokeContains(t,n,s){const i=s/2,r=i*i,{points:o}=this,a=o.length-(this.closePath?0:2);for(let l=0;l<a;l+=2){const u=o[l],c=o[l+1],h=o[(l+2)%o.length],f=o[(l+3)%o.length];if($m(t,n,u,c,h,f)<=r)return!0}return!1}getBounds(t){t=t||new wt;const n=this.points;let s=1/0,i=-1/0,r=1/0,o=-1/0;for(let a=0,l=n.length;a<l;a+=2){const u=n[a],c=n[a+1];s=u<s?u:s,i=u>i?u:i,r=c<r?c:r,o=c>o?c:o}return t.x=s,t.width=i-s,t.y=r,t.height=o-r,t}copyFrom(t){return this.points=t.points.slice(),this.closePath=t.closePath,this}copyTo(t){return t.copyFrom(this),t}toString(){return`[pixi.js/math:PolygoncloseStroke=${this.closePath}points=${this.points.reduce((t,n)=>`${t}, ${n}`,"")}]`}get lastX(){return this.points[this.points.length-2]}get lastY(){return this.points[this.points.length-1]}get x(){return this.points[this.points.length-2]}get y(){return this.points[this.points.length-1]}}const js=(e,t,n,s,i,r)=>{const o=e-n,a=t-s,l=Math.sqrt(o*o+a*a);return l>=i-r&&l<=i+r};class Io{constructor(t=0,n=0,s=0,i=0,r=20){this.type="roundedRectangle",this.x=t,this.y=n,this.width=s,this.height=i,this.radius=r}getBounds(t){return t=t||new wt,t.x=this.x,t.y=this.y,t.width=this.width,t.height=this.height,t}clone(){return new Io(this.x,this.y,this.width,this.height,this.radius)}copyFrom(t){return this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height,this}copyTo(t){return t.copyFrom(this),t}contains(t,n){if(this.width<=0||this.height<=0)return!1;if(t>=this.x&&t<=this.x+this.width&&n>=this.y&&n<=this.y+this.height){const s=Math.max(0,Math.min(this.radius,Math.min(this.width,this.height)/2));if(n>=this.y+s&&n<=this.y+this.height-s||t>=this.x+s&&t<=this.x+this.width-s)return!0;let i=t-(this.x+s),r=n-(this.y+s);const o=s*s;if(i*i+r*r<=o||(i=t-(this.x+this.width-s),i*i+r*r<=o)||(r=n-(this.y+this.height-s),i*i+r*r<=o)||(i=t-(this.x+s),i*i+r*r<=o))return!0}return!1}strokeContains(t,n,s){const{x:i,y:r,width:o,height:a,radius:l}=this,u=s/2,c=i+l,h=r+l,f=o-l*2,d=a-l*2,p=i+o,g=r+a;return(t>=i-u&&t<=i+u||t>=p-u&&t<=p+u)&&n>=h&&n<=h+d||(n>=r-u&&n<=r+u||n>=g-u&&n<=g+u)&&t>=c&&t<=c+f?!0:t<c&&n<h&&js(t,n,c,h,l,u)||t>p-l&&n<h&&js(t,n,p-l,h,l,u)||t>p-l&&n>g-l&&js(t,n,p-l,g-l,l,u)||t<c&&n>g-l&&js(t,n,c,g-l,l,u)}toString(){return`[pixi.js/math:RoundedRectangle x=${this.x} y=${this.y}width=${this.width} height=${this.height} radius=${this.radius}]`}}var jt=(e=>(e[e.MAP_READ=1]="MAP_READ",e[e.MAP_WRITE=2]="MAP_WRITE",e[e.COPY_SRC=4]="COPY_SRC",e[e.COPY_DST=8]="COPY_DST",e[e.INDEX=16]="INDEX",e[e.VERTEX=32]="VERTEX",e[e.UNIFORM=64]="UNIFORM",e[e.STORAGE=128]="STORAGE",e[e.INDIRECT=256]="INDIRECT",e[e.QUERY_RESOLVE=512]="QUERY_RESOLVE",e[e.STATIC=1024]="STATIC",e))(jt||{});class xs extends ce{constructor(t){let{data:n,size:s}=t;const{usage:i,label:r,shrinkToFit:o}=t;super(),this.uid=At("buffer"),this._resourceType="buffer",this._resourceId=At("resource"),this._touched=0,this._updateID=1,this.shrinkToFit=!0,this.destroyed=!1,n instanceof Array&&(n=new Float32Array(n)),this._data=n,s=s??(n==null?void 0:n.byteLength);const a=!!n;this.descriptor={size:s,usage:i,mappedAtCreation:a,label:r},this.shrinkToFit=o??!0}get data(){return this._data}set data(t){this.setDataWithSize(t,t.length,!0)}get static(){return!!(this.descriptor.usage&jt.STATIC)}set static(t){t?this.descriptor.usage|=jt.STATIC:this.descriptor.usage&=~jt.STATIC}setDataWithSize(t,n,s){if(this._updateID++,this._updateSize=n*t.BYTES_PER_ELEMENT,this._data===t){s&&this.emit("update",this);return}const i=this._data;if(this._data=t,i.length!==t.length){!this.shrinkToFit&&t.byteLength<i.byteLength?s&&this.emit("update",this):(this.descriptor.size=t.byteLength,this._resourceId=At("resource"),this.emit("change",this));return}s&&this.emit("update",this)}update(t){this._updateSize=t??this._updateSize,this._updateID++,this.emit("update",this)}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this._data=null,this.descriptor=null,this.removeAllListeners()}}function Lu(e,t){if(!(e instanceof xs)){let n=t?jt.INDEX:jt.VERTEX;e instanceof Array&&(t?(e=new Uint32Array(e),n=jt.INDEX|jt.COPY_DST):(e=new Float32Array(e),n=jt.VERTEX|jt.COPY_DST)),e=new xs({data:e,label:t?"index-mesh-buffer":"vertex-mesh-buffer",usage:n})}return e}function Wm(e,t,n){const s=e.getAttribute(t);if(!s)return n.minX=0,n.minY=0,n.maxX=0,n.maxY=0,n;const i=s.buffer.data;let r=1/0,o=1/0,a=-1/0,l=-1/0;const u=i.BYTES_PER_ELEMENT,c=(s.offset||0)/u,h=(s.stride||2*4)/u;for(let f=c;f<i.length;f+=h){const d=i[f],p=i[f+1];d>a&&(a=d),p>l&&(l=p),d<r&&(r=d),p<o&&(o=p)}return n.minX=r,n.minY=o,n.maxX=a,n.maxY=l,n}function Vm(e){return(e instanceof xs||Array.isArray(e)||e.BYTES_PER_ELEMENT)&&(e={buffer:e}),e.buffer=Lu(e.buffer,!1),e}class Xm extends ce{constructor(t){const{attributes:n,indexBuffer:s,topology:i}=t;super(),this.uid=At("geometry"),this._layoutKey=0,this.instanceCount=1,this._bounds=new Me,this._boundsDirty=!0,this.attributes=n,this.buffers=[],this.instanceCount=t.instanceCount||1;for(const r in n){const o=n[r]=Vm(n[r]);this.buffers.indexOf(o.buffer)===-1&&(this.buffers.push(o.buffer),o.buffer.on("update",this.onBufferUpdate,this),o.buffer.on("change",this.onBufferUpdate,this))}s&&(this.indexBuffer=Lu(s,!0),this.buffers.push(this.indexBuffer)),this.topology=i||"triangle-list"}onBufferUpdate(){this._boundsDirty=!0,this.emit("update",this)}getAttribute(t){return this.attributes[t]}getIndex(){return this.indexBuffer}getBuffer(t){return this.getAttribute(t).buffer}getSize(){for(const t in this.attributes){const n=this.attributes[t];return n.buffer.data.length/(n.stride/4||n.size)}return 0}get bounds(){return this._boundsDirty?(this._boundsDirty=!1,Wm(this,"aPosition",this._bounds)):this._bounds}destroy(t=!1){this.emit("destroy",this),this.removeAllListeners(),t&&this.buffers.forEach(n=>n.destroy()),this.attributes=null,this.buffers=null,this.indexBuffer=null,this._bounds=null}}const Ym=new Float32Array(1),qm=new Uint32Array(1);class Km extends Xm{constructor(){const n=new xs({data:Ym,label:"attribute-batch-buffer",usage:jt.VERTEX|jt.COPY_DST,shrinkToFit:!1}),s=new xs({data:qm,label:"index-batch-buffer",usage:jt.INDEX|jt.COPY_DST,shrinkToFit:!1}),i=6*4;super({attributes:{aPosition:{buffer:n,format:"float32x2",stride:i,offset:0,location:1},aUV:{buffer:n,format:"float32x2",stride:i,offset:2*4,location:3},aColor:{buffer:n,format:"unorm8x4",stride:i,offset:4*4,location:0},aTextureIdAndRound:{buffer:n,format:"uint16x2",stride:i,offset:5*4,location:2}},indexBuffer:s})}}let Ns=null;function ju(){if(Ns)return Ns;const e=vu();return Ns=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),Ns}const Nu={};function Zm(e,t){let n=0;for(let s=0;s<t;s++)n=n*31+e[s].uid>>>0;return Nu[n]||Qm(e,n)}let ar=0;function Qm(e,t){const n={};let s=0;ar||(ar=ju());for(let r=0;r<ar;r++){const o=r<e.length?e[r]:rt.EMPTY.source;n[s++]=o.source,n[s++]=o.style}const i=new qs(n);return Nu[t]=i,i}class ol{constructor(t){typeof t=="number"?this.rawBinaryData=new ArrayBuffer(t):t instanceof Uint8Array?this.rawBinaryData=t.buffer:this.rawBinaryData=t,this.uint32View=new Uint32Array(this.rawBinaryData),this.float32View=new Float32Array(this.rawBinaryData),this.size=this.rawBinaryData.byteLength}get int8View(){return this._int8View||(this._int8View=new Int8Array(this.rawBinaryData)),this._int8View}get uint8View(){return this._uint8View||(this._uint8View=new Uint8Array(this.rawBinaryData)),this._uint8View}get int16View(){return this._int16View||(this._int16View=new Int16Array(this.rawBinaryData)),this._int16View}get int32View(){return this._int32View||(this._int32View=new Int32Array(this.rawBinaryData)),this._int32View}get float64View(){return this._float64Array||(this._float64Array=new Float64Array(this.rawBinaryData)),this._float64Array}get bigUint64View(){return this._bigUint64Array||(this._bigUint64Array=new BigUint64Array(this.rawBinaryData)),this._bigUint64Array}view(t){return this[`${t}View`]}destroy(){this.rawBinaryData=null,this._int8View=null,this._uint8View=null,this._int16View=null,this.uint16View=null,this._int32View=null,this.uint32View=null,this.float32View=null}static sizeOf(t){switch(t){case"int8":case"uint8":return 1;case"int16":case"uint16":return 2;case"int32":case"uint32":case"float32":return 4;default:throw new Error(`${t} isn't a valid view type`)}}}function al(e,t){const n=e.byteLength/8|0,s=new Float64Array(e,0,n);new Float64Array(t,0,n).set(s);const r=e.byteLength-n*8;if(r>0){const o=new Uint8Array(e,n*8,r);new Uint8Array(t,n*8,r).set(o)}}const Jm={normal:"normal-npm",add:"add-npm",screen:"screen-npm"};var tg=(e=>(e[e.DISABLED=0]="DISABLED",e[e.RENDERING_MASK_ADD=1]="RENDERING_MASK_ADD",e[e.MASK_ACTIVE=2]="MASK_ACTIVE",e[e.RENDERING_MASK_REMOVE=3]="RENDERING_MASK_REMOVE",e[e.NONE=4]="NONE",e))(tg||{});function ll(e,t){return t.alphaMode==="no-premultiply-alpha"&&Jm[e]||e}class cl{constructor(){this.ids=Object.create(null),this.textures=[],this.count=0}clear(){for(let t=0;t<this.count;t++){const n=this.textures[t];this.textures[t]=null,this.ids[n.uid]=null}this.count=0}}class ul{constructor(){this.renderPipeId="batch",this.action="startBatch",this.start=0,this.size=0,this.blendMode="normal",this.canBundle=!0}destroy(){this.textures=null,this.gpuBindGroup=null,this.bindGroup=null,this.batcher=null}}let Dn=0;const Uu=class Du{constructor(t={}){this.uid=At("batcher"),this.dirty=!0,this.batchIndex=0,this.batches=[],this._vertexSize=6,this._elements=[],this._batchPool=[],this._batchPoolIndex=0,this._textureBatchPool=[],this._textureBatchPoolIndex=0,t={...Du.defaultOptions,...t};const{vertexSize:n,indexSize:s}=t;this.attributeBuffer=new ol(n*this._vertexSize*4),this.indexBuffer=new Uint16Array(s),this._maxTextures=ju()}begin(){this.batchIndex=0,this.elementSize=0,this.elementStart=0,this.indexSize=0,this.attributeSize=0,this._batchPoolIndex=0,this._textureBatchPoolIndex=0,this._batchIndexStart=0,this._batchIndexSize=0,this.dirty=!0}add(t){this._elements[this.elementSize++]=t,t.indexStart=this.indexSize,t.location=this.attributeSize,t.batcher=this,this.indexSize+=t.indexSize,this.attributeSize+=t.vertexSize*this._vertexSize}checkAndUpdateTexture(t,n){const s=t.batch.textures.ids[n._source.uid];return!s&&s!==0?!1:(t.textureId=s,t.texture=n,!0)}updateElement(t){this.dirty=!0,t.packAttributes(this.attributeBuffer.float32View,this.attributeBuffer.uint32View,t.location,t.textureId)}break(t){const n=this._elements;let s=this._textureBatchPool[this._textureBatchPoolIndex++]||new cl;if(s.clear(),!n[this.elementStart])return;const i=n[this.elementStart];let r=ll(i.blendMode,i.texture._source);this.attributeSize*4>this.attributeBuffer.size&&this._resizeAttributeBuffer(this.attributeSize*4),this.indexSize>this.indexBuffer.length&&this._resizeIndexBuffer(this.indexSize);const o=this.attributeBuffer.float32View,a=this.attributeBuffer.uint32View,l=this.indexBuffer;let u=this._batchIndexSize,c=this._batchIndexStart,h="startBatch",f=this._batchPool[this._batchPoolIndex++]||new ul;const d=this._maxTextures;for(let p=this.elementStart;p<this.elementSize;++p){const g=n[p];n[p]=null;const y=g.texture._source,v=ll(g.blendMode,y),x=r!==v;if(y._batchTick===Dn&&!x){g.textureId=y._textureBindLocation,u+=g.indexSize,g.packAttributes(o,a,g.location,g.textureId),g.packIndex(l,g.indexStart,g.location/this._vertexSize),g.batch=f;continue}y._batchTick=Dn,(s.count>=d||x)&&(this._finishBatch(f,c,u-c,s,r,t,h),h="renderBatch",c=u,r=v,s=this._textureBatchPool[this._textureBatchPoolIndex++]||new cl,s.clear(),f=this._batchPool[this._batchPoolIndex++]||new ul,++Dn),g.textureId=y._textureBindLocation=s.count,s.ids[y.uid]=s.count,s.textures[s.count++]=y,g.batch=f,u+=g.indexSize,g.packAttributes(o,a,g.location,g.textureId),g.packIndex(l,g.indexStart,g.location/this._vertexSize)}s.count>0&&(this._finishBatch(f,c,u-c,s,r,t,h),c=u,++Dn),this.elementStart=this.elementSize,this._batchIndexStart=c,this._batchIndexSize=u}_finishBatch(t,n,s,i,r,o,a){t.gpuBindGroup=null,t.action=a,t.batcher=this,t.textures=i,t.blendMode=r,t.start=n,t.size=s,++Dn,o.add(t)}finish(t){this.break(t)}ensureAttributeBuffer(t){t*4<=this.attributeBuffer.size||this._resizeAttributeBuffer(t*4)}ensureIndexBuffer(t){t<=this.indexBuffer.length||this._resizeIndexBuffer(t)}_resizeAttributeBuffer(t){const n=Math.max(t,this.attributeBuffer.size*2),s=new ol(n);al(this.attributeBuffer.rawBinaryData,s.rawBinaryData),this.attributeBuffer=s}_resizeIndexBuffer(t){const n=this.indexBuffer;let s=Math.max(t,n.length*1.5);s+=s%2;const i=s>65535?new Uint32Array(s):new Uint16Array(s);if(i.BYTES_PER_ELEMENT!==n.BYTES_PER_ELEMENT)for(let r=0;r<n.length;r++)i[r]=n[r];else al(n.buffer,i.buffer);this.indexBuffer=i}destroy(){for(let t=0;t<this.batches.length;t++)this.batches[t].destroy();this.batches=null;for(let t=0;t<this._elements.length;t++)this._elements[t].batch=null;this._elements=null,this.indexBuffer=null,this.attributeBuffer.destroy(),this.attributeBuffer=null}};Uu.defaultOptions={vertexSize:4,indexSize:6};let eg=Uu;function ng(e,t,n,s,i,r,o,a=null){let l=0;n*=t,i*=r;const u=a.a,c=a.b,h=a.c,f=a.d,d=a.tx,p=a.ty;for(;l<o;){const g=e[n],m=e[n+1];s[i]=u*g+h*m+d,s[i+1]=c*g+f*m+p,i+=r,n+=t,l++}}function sg(e,t,n,s){let i=0;for(t*=n;i<s;)e[t]=0,e[t+1]=0,t+=n,i++}function Gu(e,t,n,s,i){const r=t.a,o=t.b,a=t.c,l=t.d,u=t.tx,c=t.ty;n=n||0,s=s||2,i=i||e.length/s-n;let h=n*s;for(let f=0;f<i;f++){const d=e[h],p=e[h+1];e[h]=r*d+a*p+u,e[h+1]=o*d+l*p+c,h+=s}}function ig(e,t){if(e===16777215||!t)return t;if(t===16777215||!e)return e;const n=e>>16&255,s=e>>8&255,i=e&255,r=t>>16&255,o=t>>8&255,a=t&255,l=n*r/255,u=s*o/255,c=i*a/255;return(l<<16)+(u<<8)+c}class Hu{constructor(){this.batcher=null,this.batch=null,this.applyTransform=!0,this.roundPixels=0}get blendMode(){return this.applyTransform?this.renderable.groupBlendMode:"normal"}packIndex(t,n,s){const i=this.geometryData.indices;for(let r=0;r<this.indexSize;r++)t[n++]=i[r+this.indexOffset]+s-this.vertexOffset}packAttributes(t,n,s,i){const r=this.geometryData,o=this.renderable,a=r.vertices,l=r.uvs,u=this.vertexOffset*2,c=(this.vertexOffset+this.vertexSize)*2,h=this.color,f=h>>16|h&65280|(h&255)<<16;if(this.applyTransform){const d=ig(f,o.groupColor)+(this.alpha*o.groupAlpha*255<<24),p=o.groupTransform,g=i<<16|this.roundPixels&65535,m=p.a,y=p.b,v=p.c,x=p.d,w=p.tx,E=p.ty;for(let M=u;M<c;M+=2){const z=a[M],k=a[M+1];t[s]=m*z+v*k+w,t[s+1]=y*z+x*k+E,t[s+2]=l[M],t[s+3]=l[M+1],n[s+4]=d,n[s+5]=g,s+=6}}else{const d=f+(this.alpha*255<<24);for(let p=u;p<c;p+=2)t[s]=a[p],t[s+1]=a[p+1],t[s+2]=l[p],t[s+3]=l[p+1],n[s+4]=d,n[s+5]=i<<16,s+=6}}get vertSize(){return this.vertexSize}copyTo(t){t.indexOffset=this.indexOffset,t.indexSize=this.indexSize,t.vertexOffset=this.vertexOffset,t.vertexSize=this.vertexSize,t.color=this.color,t.alpha=this.alpha,t.texture=this.texture,t.geometryData=this.geometryData}reset(){this.applyTransform=!0}}const lr={build(e,t){let n,s,i,r,o,a;if(e.type==="circle"){const w=e;n=w.x,s=w.y,o=a=w.radius,i=r=0}else if(e.type==="ellipse"){const w=e;n=w.x,s=w.y,o=w.halfWidth,a=w.halfHeight,i=r=0}else{const w=e,E=w.width/2,M=w.height/2;n=w.x+E,s=w.y+M,o=a=Math.max(0,Math.min(w.radius,Math.min(E,M))),i=E-o,r=M-a}if(!(o>=0&&a>=0&&i>=0&&r>=0))return t;const l=Math.ceil(2.3*Math.sqrt(o+a)),u=l*8+(i?4:0)+(r?4:0);if(u===0)return t;if(l===0)return t[0]=t[6]=n+i,t[1]=t[3]=s+r,t[2]=t[4]=n-i,t[5]=t[7]=s-r,t;let c=0,h=l*4+(i?2:0)+2,f=h,d=u,p=i+o,g=r,m=n+p,y=n-p,v=s+g;if(t[c++]=m,t[c++]=v,t[--h]=v,t[--h]=y,r){const w=s-g;t[f++]=y,t[f++]=w,t[--d]=w,t[--d]=m}for(let w=1;w<l;w++){const E=Math.PI/2*(w/l),M=i+Math.cos(E)*o,z=r+Math.sin(E)*a,k=n+M,S=n-M,C=s+z,Y=s-z;t[c++]=k,t[c++]=C,t[--h]=C,t[--h]=S,t[f++]=S,t[f++]=Y,t[--d]=Y,t[--d]=k}p=i,g=r+a,m=n+p,y=n-p,v=s+g;const x=s-g;return t[c++]=m,t[c++]=v,t[--d]=x,t[--d]=m,i&&(t[c++]=y,t[c++]=v,t[--d]=x,t[--d]=y),t},triangulate(e,t,n,s,i,r){if(e.length===0)return;let o=0,a=0;for(let c=0;c<e.length;c+=2)o+=e[c],a+=e[c+1];o/=e.length/2,a/=e.length/2;let l=s;t[l*n]=o,t[l*n+1]=a;const u=l++;for(let c=0;c<e.length;c+=2)t[l*n]=e[c],t[l*n+1]=e[c+1],c>0&&(i[r++]=l,i[r++]=u,i[r++]=l-1),l++;i[r++]=u+1,i[r++]=u,i[r++]=l-1}},rg=1e-4,hl=1e-4;function og(e){const t=e.length;if(t<6)return 1;let n=0;for(let s=0,i=e[t-2],r=e[t-1];s<t;s+=2){const o=e[s],a=e[s+1];n+=(o-i)*(a+r),i=o,r=a}return n<0?-1:1}function fl(e,t,n,s,i,r,o,a){const l=e-n*i,u=t-s*i,c=e+n*r,h=t+s*r;let f,d;o?(f=s,d=-n):(f=-s,d=n);const p=l+f,g=u+d,m=c+f,y=h+d;return a.push(p,g),a.push(m,y),2}function Je(e,t,n,s,i,r,o,a){const l=n-e,u=s-t;let c=Math.atan2(l,u),h=Math.atan2(i-e,r-t);a&&c<h?c+=Math.PI*2:!a&&c>h&&(h+=Math.PI*2);let f=c;const d=h-c,p=Math.abs(d),g=Math.sqrt(l*l+u*u),m=(15*p*Math.sqrt(g)/Math.PI>>0)+1,y=d/m;if(f+=y,a){o.push(e,t),o.push(n,s);for(let v=1,x=f;v<m;v++,x+=y)o.push(e,t),o.push(e+Math.sin(x)*g,t+Math.cos(x)*g);o.push(e,t),o.push(i,r)}else{o.push(n,s),o.push(e,t);for(let v=1,x=f;v<m;v++,x+=y)o.push(e+Math.sin(x)*g,t+Math.cos(x)*g),o.push(e,t);o.push(i,r),o.push(e,t)}return m*2}function ag(e,t,n,s,i,r,o,a,l){const u=rg;if(e.length===0)return;const c=t;let h=c.alignment;if(t.alignment!==.5){let tt=og(e);h=(h-.5)*tt+.5}const f=new xt(e[0],e[1]),d=new xt(e[e.length-2],e[e.length-1]),p=s,g=Math.abs(f.x-d.x)<u&&Math.abs(f.y-d.y)<u;if(p){e=e.slice(),g&&(e.pop(),e.pop(),d.set(e[e.length-2],e[e.length-1]));const tt=(f.x+d.x)*.5,kt=(d.y+f.y)*.5;e.unshift(tt,kt),e.push(tt,kt)}const m=i,y=e.length/2;let v=e.length;const x=m.length/2,w=c.width/2,E=w*w,M=c.miterLimit*c.miterLimit;let z=e[0],k=e[1],S=e[2],C=e[3],Y=0,j=0,O=-(k-C),U=z-S,st=0,Q=0,Z=Math.sqrt(O*O+U*U);O/=Z,U/=Z,O*=w,U*=w;const nt=h,D=(1-nt)*2,V=nt*2;p||(c.cap==="round"?v+=Je(z-O*(D-V)*.5,k-U*(D-V)*.5,z-O*D,k-U*D,z+O*V,k+U*V,m,!0)+2:c.cap==="square"&&(v+=fl(z,k,O,U,D,V,!0,m))),m.push(z-O*D,k-U*D),m.push(z+O*V,k+U*V);for(let tt=1;tt<y-1;++tt){z=e[(tt-1)*2],k=e[(tt-1)*2+1],S=e[tt*2],C=e[tt*2+1],Y=e[(tt+1)*2],j=e[(tt+1)*2+1],O=-(k-C),U=z-S,Z=Math.sqrt(O*O+U*U),O/=Z,U/=Z,O*=w,U*=w,st=-(C-j),Q=S-Y,Z=Math.sqrt(st*st+Q*Q),st/=Z,Q/=Z,st*=w,Q*=w;const kt=S-z,he=k-C,te=S-Y,Et=j-C,Xe=kt*te+he*Et,Te=he*te-Et*kt,ke=Te<0;if(Math.abs(Te)<.001*Math.abs(Xe)){m.push(S-O*D,C-U*D),m.push(S+O*V,C+U*V),Xe>=0&&(c.join==="round"?v+=Je(S,C,S-O*D,C-U*D,S-st*D,C-Q*D,m,!1)+4:v+=2,m.push(S-st*V,C-Q*V),m.push(S+st*D,C+Q*D));continue}const Ee=(-O+z)*(-U+C)-(-O+S)*(-U+k),On=(-st+Y)*(-Q+C)-(-st+S)*(-Q+j),Ye=(kt*On-te*Ee)/Te,_=(Et*Ee-he*On)/Te,b=(Ye-S)*(Ye-S)+(_-C)*(_-C),A=S+(Ye-S)*D,P=C+(_-C)*D,T=S-(Ye-S)*V,F=C-(_-C)*V,L=Math.min(kt*kt+he*he,te*te+Et*Et),B=ke?D:V,R=L+B*B*E;b<=R?c.join==="bevel"||b/E>M?(ke?(m.push(A,P),m.push(S+O*V,C+U*V),m.push(A,P),m.push(S+st*V,C+Q*V)):(m.push(S-O*D,C-U*D),m.push(T,F),m.push(S-st*D,C-Q*D),m.push(T,F)),v+=2):c.join==="round"?ke?(m.push(A,P),m.push(S+O*V,C+U*V),v+=Je(S,C,S+O*V,C+U*V,S+st*V,C+Q*V,m,!0)+4,m.push(A,P),m.push(S+st*V,C+Q*V)):(m.push(S-O*D,C-U*D),m.push(T,F),v+=Je(S,C,S-O*D,C-U*D,S-st*D,C-Q*D,m,!1)+4,m.push(S-st*D,C-Q*D),m.push(T,F)):(m.push(A,P),m.push(T,F)):(m.push(S-O*D,C-U*D),m.push(S+O*V,C+U*V),c.join==="round"?ke?v+=Je(S,C,S+O*V,C+U*V,S+st*V,C+Q*V,m,!0)+2:v+=Je(S,C,S-O*D,C-U*D,S-st*D,C-Q*D,m,!1)+2:c.join==="miter"&&b/E<=M&&(ke?(m.push(T,F),m.push(T,F)):(m.push(A,P),m.push(A,P)),v+=2),m.push(S-st*D,C-Q*D),m.push(S+st*V,C+Q*V),v+=2)}z=e[(y-2)*2],k=e[(y-2)*2+1],S=e[(y-1)*2],C=e[(y-1)*2+1],O=-(k-C),U=z-S,Z=Math.sqrt(O*O+U*U),O/=Z,U/=Z,O*=w,U*=w,m.push(S-O*D,C-U*D),m.push(S+O*V,C+U*V),p||(c.cap==="round"?v+=Je(S-O*(D-V)*.5,C-U*(D-V)*.5,S-O*D,C-U*D,S+O*V,C+U*V,m,!1)+2:c.cap==="square"&&(v+=fl(S,C,O,U,D,V,!1,m)));const Vt=hl*hl;for(let tt=x;tt<v+x-2;++tt)z=m[tt*2],k=m[tt*2+1],S=m[(tt+1)*2],C=m[(tt+1)*2+1],Y=m[(tt+2)*2],j=m[(tt+2)*2+1],!(Math.abs(z*(C-j)+S*(j-k)+Y*(k-C))<Vt)&&a.push(tt,tt+1,tt+2)}function $u(e,t,n,s,i,r,o){const a=Im(e,t,2);if(!a)return;for(let u=0;u<a.length;u+=3)r[o++]=a[u]+i,r[o++]=a[u+1]+i,r[o++]=a[u+2]+i;let l=i*s;for(let u=0;u<e.length;u+=2)n[l]=e[u],n[l+1]=e[u+1],l+=s}const lg=[],cg={build(e,t){for(let n=0;n<e.points.length;n++)t[n]=e.points[n];return t},triangulate(e,t,n,s,i,r){$u(e,lg,t,n,s,i,r)}},ug={build(e,t){const n=e,s=n.x,i=n.y,r=n.width,o=n.height;return r>=0&&o>=0&&(t[0]=s,t[1]=i,t[2]=s+r,t[3]=i,t[4]=s+r,t[5]=i+o,t[6]=s,t[7]=i+o),t},triangulate(e,t,n,s,i,r){let o=0;s*=n,t[s+o]=e[0],t[s+o+1]=e[1],o+=n,t[s+o]=e[2],t[s+o+1]=e[3],o+=n,t[s+o]=e[6],t[s+o+1]=e[7],o+=n,t[s+o]=e[4],t[s+o+1]=e[5],o+=n;const a=s/n;i[r++]=a,i[r++]=a+1,i[r++]=a+2,i[r++]=a+1,i[r++]=a+3,i[r++]=a+2}},hg={build(e,t){return t[0]=e.x,t[1]=e.y,t[2]=e.x2,t[3]=e.y2,t[4]=e.x3,t[5]=e.y3,t},triangulate(e,t,n,s,i,r){let o=0;s*=n,t[s+o]=e[0],t[s+o+1]=e[1],o+=n,t[s+o]=e[2],t[s+o+1]=e[3],o+=n,t[s+o]=e[4],t[s+o+1]=e[5];const a=s/n;i[r++]=a,i[r++]=a+1,i[r++]=a+2}},Fo={rectangle:ug,polygon:cg,triangle:hg,circle:lr,ellipse:lr,roundedRectangle:lr},fg=new wt;function dg(e,t){const{geometryData:n,batches:s}=t;s.length=0,n.indices.length=0,n.vertices.length=0,n.uvs.length=0;for(let i=0;i<e.instructions.length;i++){const r=e.instructions[i];if(r.action==="texture")pg(r.data,s,n);else if(r.action==="fill"||r.action==="stroke"){const o=r.action==="stroke",a=r.data.path.shapePath,l=r.data.style,u=r.data.hole;o&&u&&dl(u.shapePath,l,null,!0,s,n),dl(a,l,u,o,s,n)}}}function pg(e,t,n){const{vertices:s,uvs:i,indices:r}=n,o=r.length,a=s.length/2,l=[],u=Fo.rectangle,c=fg,h=e.image;c.x=e.dx,c.y=e.dy,c.width=e.dw,c.height=e.dh;const f=e.transform;u.build(c,l),f&&Gu(l,f),u.triangulate(l,s,2,a,r,o);const d=h.uvs;i.push(d.x0,d.y0,d.x1,d.y1,d.x3,d.y3,d.x2,d.y2);const p=we.get(Hu);p.indexOffset=o,p.indexSize=r.length-o,p.vertexOffset=a,p.vertexSize=s.length/2-a,p.color=e.style,p.alpha=e.alpha,p.texture=h,p.geometryData=n,t.push(p)}function dl(e,t,n,s,i,r){const{vertices:o,uvs:a,indices:l}=r,u=e.shapePrimitives.length-1;e.shapePrimitives.forEach(({shape:c,transform:h},f)=>{const d=l.length,p=o.length/2,g=[],m=Fo[c.type];if(m.build(c,g),h&&Gu(g,h),s){const w=c.closePath??!0;ag(g,t,!1,w,o,2,p,l)}else if(n&&u===f){u!==0&&console.warn("[Pixi Graphics] only the last shape have be cut out");const w=[],E=g.slice();mg(n.shapePath).forEach(z=>{w.push(E.length/2),E.push(...z)}),$u(E,w,o,2,p,l,d)}else m.triangulate(g,o,2,p,l,d);const y=a.length/2,v=t.texture;if(v!==rt.WHITE){const w=t.matrix;h&&w&&w.append(h.clone().invert()),ng(o,2,p,a,y,2,o.length/2-p,w)}else sg(a,y,2,o.length/2-p);const x=we.get(Hu);x.indexOffset=d,x.indexSize=l.length-d,x.vertexOffset=p,x.vertexSize=o.length/2-p,x.color=t.color,x.alpha=t.alpha,x.texture=v,x.geometryData=r,i.push(x)})}function mg(e){if(!e)return[];const t=e.shapePrimitives,n=[];for(let s=0;s<t.length;s++){const i=t[s].shape,r=[];Fo[i.type].build(i,r),n.push(r)}return n}class gg{constructor(){this.batches=[],this.geometryData={vertices:[],uvs:[],indices:[]}}}class xg{constructor(){this.geometry=new Km,this.instructions=new iu}init(){this.instructions.reset()}}const Bo=class Yr{constructor(){this._activeBatchers=[],this._gpuContextHash={},this._graphicsDataContextHash=Object.create(null)}init(t){Yr.defaultOptions.bezierSmoothness=(t==null?void 0:t.bezierSmoothness)??Yr.defaultOptions.bezierSmoothness}prerender(){this._returnActiveBatchers()}getContextRenderData(t){return this._graphicsDataContextHash[t.uid]||this._initContextRenderData(t)}updateGpuContext(t){let n=this._gpuContextHash[t.uid]||this._initContext(t);if(t.dirty){n?this._cleanGraphicsContextData(t):n=this._initContext(t),dg(t,n);const s=t.batchMode;t.customShader||s==="no-batch"?n.isBatchable=!1:s==="auto"&&(n.isBatchable=n.geometryData.vertices.length<400),t.dirty=!1}return n}getGpuContext(t){return this._gpuContextHash[t.uid]||this._initContext(t)}_returnActiveBatchers(){for(let t=0;t<this._activeBatchers.length;t++)we.return(this._activeBatchers[t]);this._activeBatchers.length=0}_initContextRenderData(t){const n=we.get(xg),{batches:s,geometryData:i}=this._gpuContextHash[t.uid],r=i.vertices.length,o=i.indices.length;for(let c=0;c<s.length;c++)s[c].applyTransform=!1;const a=we.get(eg);this._activeBatchers.push(a),a.ensureAttributeBuffer(r),a.ensureIndexBuffer(o),a.begin();for(let c=0;c<s.length;c++){const h=s[c];a.add(h)}a.finish(n.instructions);const l=n.geometry;l.indexBuffer.setDataWithSize(a.indexBuffer,a.indexSize,!0),l.buffers[0].setDataWithSize(a.attributeBuffer.float32View,a.attributeSize,!0);const u=a.batches;for(let c=0;c<u.length;c++){const h=u[c];h.bindGroup=Zm(h.textures.textures,h.textures.count)}return this._graphicsDataContextHash[t.uid]=n,n}_initContext(t){const n=new gg;return n.context=t,this._gpuContextHash[t.uid]=n,t.on("destroy",this.onGraphicsContextDestroy,this),this._gpuContextHash[t.uid]}onGraphicsContextDestroy(t){this._cleanGraphicsContextData(t),t.off("destroy",this.onGraphicsContextDestroy,this),this._gpuContextHash[t.uid]=null}_cleanGraphicsContextData(t){const n=this._gpuContextHash[t.uid];n.isBatchable||this._graphicsDataContextHash[t.uid]&&(we.return(this.getContextRenderData(t)),this._graphicsDataContextHash[t.uid]=null),n.batches&&n.batches.forEach(s=>{we.return(s)})}destroy(){for(const t in this._gpuContextHash)this._gpuContextHash[t]&&this.onGraphicsContextDestroy(this._gpuContextHash[t].context)}};Bo.extension={type:[q.WebGLSystem,q.WebGPUSystem,q.CanvasSystem],name:"graphicsContext"};Bo.defaultOptions={bezierSmoothness:.5};let Wu=Bo;const vg=8,Us=11920929e-14,_g=1;function Vu(e,t,n,s,i,r,o,a,l,u){const h=Math.min(.99,Math.max(0,u??Wu.defaultOptions.bezierSmoothness));let f=(_g-h)/1;return f*=f,yg(t,n,s,i,r,o,a,l,e,f),e}function yg(e,t,n,s,i,r,o,a,l,u){qr(e,t,n,s,i,r,o,a,l,u,0),l.push(o,a)}function qr(e,t,n,s,i,r,o,a,l,u,c){if(c>vg)return;const h=(e+n)/2,f=(t+s)/2,d=(n+i)/2,p=(s+r)/2,g=(i+o)/2,m=(r+a)/2,y=(h+d)/2,v=(f+p)/2,x=(d+g)/2,w=(p+m)/2,E=(y+x)/2,M=(v+w)/2;if(c>0){let z=o-e,k=a-t;const S=Math.abs((n-o)*k-(s-a)*z),C=Math.abs((i-o)*k-(r-a)*z);if(S>Us&&C>Us){if((S+C)*(S+C)<=u*(z*z+k*k)){l.push(E,M);return}}else if(S>Us){if(S*S<=u*(z*z+k*k)){l.push(E,M);return}}else if(C>Us){if(C*C<=u*(z*z+k*k)){l.push(E,M);return}}else if(z=E-(e+o)/2,k=M-(t+a)/2,z*z+k*k<=u){l.push(E,M);return}}qr(e,t,h,f,y,v,E,M,l,u,c+1),qr(E,M,x,w,g,m,o,a,l,u,c+1)}const bg=8,wg=11920929e-14,Ag=1;function Cg(e,t,n,s,i,r,o,a){const u=Math.min(.99,Math.max(0,a??Wu.defaultOptions.bezierSmoothness));let c=(Ag-u)/1;return c*=c,Sg(t,n,s,i,r,o,e,c),e}function Sg(e,t,n,s,i,r,o,a){Kr(o,e,t,n,s,i,r,a,0),o.push(i,r)}function Kr(e,t,n,s,i,r,o,a,l){if(l>bg)return;const u=(t+s)/2,c=(n+i)/2,h=(s+r)/2,f=(i+o)/2,d=(u+h)/2,p=(c+f)/2;let g=r-t,m=o-n;const y=Math.abs((s-r)*m-(i-o)*g);if(y>wg){if(y*y<=a*(g*g+m*m)){e.push(d,p);return}}else if(g=d-(t+r)/2,m=p-(n+o)/2,g*g+m*m<=a){e.push(d,p);return}Kr(e,t,n,u,c,d,p,a,l+1),Kr(e,d,p,h,f,r,o,a,l+1)}function Xu(e,t,n,s,i,r,o,a){let l=Math.abs(i-r);(!o&&i>r||o&&r>i)&&(l=2*Math.PI-l),a=a||Math.max(6,Math.floor(6*Math.pow(s,1/3)*(l/Math.PI))),a=Math.max(a,3);let u=l/a,c=i;u*=o?-1:1;for(let h=0;h<a+1;h++){const f=Math.cos(c),d=Math.sin(c),p=t+f*s,g=n+d*s;e.push(p,g),c+=u}}function Mg(e,t,n,s,i,r){const o=e[e.length-2],l=e[e.length-1]-n,u=o-t,c=i-n,h=s-t,f=Math.abs(l*h-u*c);if(f<1e-8||r===0){(e[e.length-2]!==t||e[e.length-1]!==n)&&e.push(t,n);return}const d=l*l+u*u,p=c*c+h*h,g=l*c+u*h,m=r*Math.sqrt(d)/f,y=r*Math.sqrt(p)/f,v=m*g/d,x=y*g/p,w=m*h+y*u,E=m*c+y*l,M=u*(y+v),z=l*(y+v),k=h*(m+x),S=c*(m+x),C=Math.atan2(z-E,M-w),Y=Math.atan2(S-E,k-w);Xu(e,w+t,E+n,r,C,Y,u*c>h*l)}const ss=Math.PI*2,cr={centerX:0,centerY:0,ang1:0,ang2:0},ur=({x:e,y:t},n,s,i,r,o,a,l)=>{e*=n,t*=s;const u=i*e-r*t,c=r*e+i*t;return l.x=u+o,l.y=c+a,l};function Pg(e,t){const n=t===-1.5707963267948966?-.551915024494:1.3333333333333333*Math.tan(t/4),s=t===1.5707963267948966?.551915024494:n,i=Math.cos(e),r=Math.sin(e),o=Math.cos(e+t),a=Math.sin(e+t);return[{x:i-r*s,y:r+i*s},{x:o+a*s,y:a-o*s},{x:o,y:a}]}const pl=(e,t,n,s)=>{const i=e*s-t*n<0?-1:1;let r=e*n+t*s;return r>1&&(r=1),r<-1&&(r=-1),i*Math.acos(r)},Tg=(e,t,n,s,i,r,o,a,l,u,c,h,f)=>{const d=Math.pow(i,2),p=Math.pow(r,2),g=Math.pow(c,2),m=Math.pow(h,2);let y=d*p-d*m-p*g;y<0&&(y=0),y/=d*m+p*g,y=Math.sqrt(y)*(o===a?-1:1);const v=y*i/r*h,x=y*-r/i*c,w=u*v-l*x+(e+n)/2,E=l*v+u*x+(t+s)/2,M=(c-v)/i,z=(h-x)/r,k=(-c-v)/i,S=(-h-x)/r,C=pl(1,0,M,z);let Y=pl(M,z,k,S);a===0&&Y>0&&(Y-=ss),a===1&&Y<0&&(Y+=ss),f.centerX=w,f.centerY=E,f.ang1=C,f.ang2=Y};function kg(e,t,n,s,i,r,o,a=0,l=0,u=0){if(r===0||o===0)return;const c=Math.sin(a*ss/360),h=Math.cos(a*ss/360),f=h*(t-s)/2+c*(n-i)/2,d=-c*(t-s)/2+h*(n-i)/2;if(f===0&&d===0)return;r=Math.abs(r),o=Math.abs(o);const p=Math.pow(f,2)/Math.pow(r,2)+Math.pow(d,2)/Math.pow(o,2);p>1&&(r*=Math.sqrt(p),o*=Math.sqrt(p)),Tg(t,n,s,i,r,o,l,u,c,h,f,d,cr);let{ang1:g,ang2:m}=cr;const{centerX:y,centerY:v}=cr;let x=Math.abs(m)/(ss/4);Math.abs(1-x)<1e-7&&(x=1);const w=Math.max(Math.ceil(x),1);m/=w;let E=e[e.length-2],M=e[e.length-1];const z={x:0,y:0};for(let k=0;k<w;k++){const S=Pg(g,m),{x:C,y:Y}=ur(S[0],r,o,h,c,y,v,z),{x:j,y:O}=ur(S[1],r,o,h,c,y,v,z),{x:U,y:st}=ur(S[2],r,o,h,c,y,v,z);Vu(e,E,M,C,Y,j,O,U,st),E=U,M=st,g+=m}}function Eg(e,t,n){const s=(o,a)=>{const l=a.x-o.x,u=a.y-o.y,c=Math.sqrt(l*l+u*u),h=l/c,f=u/c;return{len:c,nx:h,ny:f}},i=(o,a)=>{o===0?e.moveTo(a.x,a.y):e.lineTo(a.x,a.y)};let r=t[t.length-1];for(let o=0;o<t.length;o++){const a=t[o%t.length],l=a.radius??n;if(l<=0){i(o,a),r=a;continue}const u=t[(o+1)%t.length],c=s(a,r),h=s(a,u);if(c.len<1e-4||h.len<1e-4){i(o,a),r=a;continue}let f=Math.asin(c.nx*h.ny-c.ny*h.nx),d=1,p=!1;c.nx*h.nx-c.ny*-h.ny<0?f<0?f=Math.PI+f:(f=Math.PI-f,d=-1,p=!0):f>0&&(d=-1,p=!0);const g=f/2;let m,y=Math.abs(Math.cos(g)*l/Math.sin(g));y>Math.min(c.len/2,h.len/2)?(y=Math.min(c.len/2,h.len/2),m=Math.abs(y*Math.sin(g)/Math.cos(g))):m=l;const v=a.x+h.nx*y+-h.ny*m*d,x=a.y+h.ny*y+h.nx*m*d,w=Math.atan2(c.ny,c.nx)+Math.PI/2*d,E=Math.atan2(h.ny,h.nx)-Math.PI/2*d;o===0&&e.moveTo(v+Math.cos(w)*m,x+Math.sin(w)*m),e.arc(v,x,m,w,E,p),r=a}}function Ig(e,t,n,s){const i=(a,l)=>Math.sqrt((a.x-l.x)**2+(a.y-l.y)**2),r=(a,l,u)=>({x:a.x+(l.x-a.x)*u,y:a.y+(l.y-a.y)*u}),o=t.length;for(let a=0;a<o;a++){const l=t[(a+1)%o],u=l.radius??n;if(u<=0){a===0?e.moveTo(l.x,l.y):e.lineTo(l.x,l.y);continue}const c=t[a],h=t[(a+2)%o],f=i(c,l);let d;if(f<1e-4)d=l;else{const m=Math.min(f/2,u);d=r(l,c,m/f)}const p=i(h,l);let g;if(p<1e-4)g=l;else{const m=Math.min(p/2,u);g=r(l,h,m/p)}a===0?e.moveTo(d.x,d.y):e.lineTo(d.x,d.y),e.quadraticCurveTo(l.x,l.y,g.x,g.y,s)}}const Fg=new wt;class Bg{constructor(t){this.shapePrimitives=[],this._currentPoly=null,this._bounds=new Me,this._graphicsPath2D=t}moveTo(t,n){return this.startPoly(t,n),this}lineTo(t,n){this._ensurePoly();const s=this._currentPoly.points,i=s[s.length-2],r=s[s.length-1];return(i!==t||r!==n)&&s.push(t,n),this}arc(t,n,s,i,r,o){this._ensurePoly(!1);const a=this._currentPoly.points;return Xu(a,t,n,s,i,r,o),this}arcTo(t,n,s,i,r){this._ensurePoly();const o=this._currentPoly.points;return Mg(o,t,n,s,i,r),this}arcToSvg(t,n,s,i,r,o,a){const l=this._currentPoly.points;return kg(l,this._currentPoly.lastX,this._currentPoly.lastY,o,a,t,n,s,i,r),this}bezierCurveTo(t,n,s,i,r,o,a){this._ensurePoly();const l=this._currentPoly;return Vu(this._currentPoly.points,l.lastX,l.lastY,t,n,s,i,r,o,a),this}quadraticCurveTo(t,n,s,i,r){this._ensurePoly();const o=this._currentPoly;return Cg(this._currentPoly.points,o.lastX,o.lastY,t,n,s,i,r),this}closePath(){return this.endPoly(!0),this}addPath(t,n){this.endPoly(),n&&!n.isIdentity()&&(t=t.clone(!0),t.transform(n));for(let s=0;s<t.instructions.length;s++){const i=t.instructions[s];this[i.action](...i.data)}return this}finish(t=!1){this.endPoly(t)}rect(t,n,s,i,r){return this.drawShape(new wt(t,n,s,i),r),this}circle(t,n,s,i){return this.drawShape(new ko(t,n,s),i),this}poly(t,n,s){const i=new ns(t);return i.closePath=n,this.drawShape(i,s),this}regularPoly(t,n,s,i,r=0,o){i=Math.max(i|0,3);const a=-1*Math.PI/2+r,l=Math.PI*2/i,u=[];for(let c=0;c<i;c++){const h=c*l+a;u.push(t+s*Math.cos(h),n+s*Math.sin(h))}return this.poly(u,!0,o),this}roundPoly(t,n,s,i,r,o=0,a){if(i=Math.max(i|0,3),r<=0)return this.regularPoly(t,n,s,i,o);const l=s*Math.sin(Math.PI/i)-.001;r=Math.min(r,l);const u=-1*Math.PI/2+o,c=Math.PI*2/i,h=(i-2)*Math.PI/i/2;for(let f=0;f<i;f++){const d=f*c+u,p=t+s*Math.cos(d),g=n+s*Math.sin(d),m=d+Math.PI+h,y=d-Math.PI-h,v=p+r*Math.cos(m),x=g+r*Math.sin(m),w=p+r*Math.cos(y),E=g+r*Math.sin(y);f===0?this.moveTo(v,x):this.lineTo(v,x),this.quadraticCurveTo(p,g,w,E,a)}return this.closePath()}roundShape(t,n,s=!1,i){return t.length<3?this:(s?Ig(this,t,n,i):Eg(this,t,n),this.closePath())}filletRect(t,n,s,i,r){if(r===0)return this.rect(t,n,s,i);const o=Math.min(s,i)/2,a=Math.min(o,Math.max(-o,r)),l=t+s,u=n+i,c=a<0?-a:0,h=Math.abs(a);return this.moveTo(t,n+h).arcTo(t+c,n+c,t+h,n,h).lineTo(l-h,n).arcTo(l-c,n+c,l,n+h,h).lineTo(l,u-h).arcTo(l-c,u-c,t+s-h,u,h).lineTo(t+h,u).arcTo(t+c,u-c,t,u-h,h).closePath()}chamferRect(t,n,s,i,r,o){if(r<=0)return this.rect(t,n,s,i);const a=Math.min(r,Math.min(s,i)/2),l=t+s,u=n+i,c=[t+a,n,l-a,n,l,n+a,l,u-a,l-a,u,t+a,u,t,u-a,t,n+a];for(let h=c.length-1;h>=2;h-=2)c[h]===c[h-2]&&c[h-1]===c[h-3]&&c.splice(h-1,2);return this.poly(c,!0,o)}ellipse(t,n,s,i,r){return this.drawShape(new Eo(t,n,s,i),r),this}roundRect(t,n,s,i,r,o){return this.drawShape(new Io(t,n,s,i,r),o),this}drawShape(t,n){return this.endPoly(),this.shapePrimitives.push({shape:t,transform:n}),this}startPoly(t,n){let s=this._currentPoly;return s&&this.endPoly(),s=new ns,s.points.push(t,n),this._currentPoly=s,this}endPoly(t=!1){const n=this._currentPoly;return n&&n.points.length>2&&(n.closePath=t,this.shapePrimitives.push({shape:n})),this._currentPoly=null,this}_ensurePoly(t=!0){if(!this._currentPoly&&(this._currentPoly=new ns,t)){const n=this.shapePrimitives[this.shapePrimitives.length-1];if(n){let s=n.shape.x,i=n.shape.y;if(!n.transform.isIdentity()){const r=n.transform,o=s;s=r.a*s+r.c*i+r.tx,i=r.b*o+r.d*i+r.ty}this._currentPoly.points.push(s,i)}else this._currentPoly.points.push(0,0)}}buildPath(){const t=this._graphicsPath2D;this.shapePrimitives.length=0,this._currentPoly=null;for(let n=0;n<t.instructions.length;n++){const s=t.instructions[n];this[s.action](...s.data)}this.finish()}get bounds(){const t=this._bounds;t.clear();const n=this.shapePrimitives;for(let s=0;s<n.length;s++){const i=n[s],r=i.shape.getBounds(Fg);i.transform?t.addRect(r,i.transform):t.addRect(r)}return t}}class kn{constructor(t){this.instructions=[],this.uid=At("graphicsPath"),this._dirty=!0,typeof t=="string"?Hm(t,this):this.instructions=(t==null?void 0:t.slice())??[]}get shapePath(){return this._shapePath||(this._shapePath=new Bg(this)),this._dirty&&(this._dirty=!1,this._shapePath.buildPath()),this._shapePath}addPath(t,n){return t=t.clone(),this.instructions.push({action:"addPath",data:[t,n]}),this._dirty=!0,this}arc(...t){return this.instructions.push({action:"arc",data:t}),this._dirty=!0,this}arcTo(...t){return this.instructions.push({action:"arcTo",data:t}),this._dirty=!0,this}arcToSvg(...t){return this.instructions.push({action:"arcToSvg",data:t}),this._dirty=!0,this}bezierCurveTo(...t){return this.instructions.push({action:"bezierCurveTo",data:t}),this._dirty=!0,this}bezierCurveToShort(t,n,s,i,r){const o=this.instructions[this.instructions.length-1],a=this.getLastPoint(xt.shared);let l=0,u=0;if(!o||o.action!=="bezierCurveTo")l=a.x,u=a.y;else{l=o.data[2],u=o.data[3];const c=a.x,h=a.y;l=c+(c-l),u=h+(h-u)}return this.instructions.push({action:"bezierCurveTo",data:[l,u,t,n,s,i,r]}),this._dirty=!0,this}closePath(){return this.instructions.push({action:"closePath",data:[]}),this._dirty=!0,this}ellipse(...t){return this.instructions.push({action:"ellipse",data:t}),this._dirty=!0,this}lineTo(...t){return this.instructions.push({action:"lineTo",data:t}),this._dirty=!0,this}moveTo(...t){return this.instructions.push({action:"moveTo",data:t}),this}quadraticCurveTo(...t){return this.instructions.push({action:"quadraticCurveTo",data:t}),this._dirty=!0,this}quadraticCurveToShort(t,n,s){const i=this.instructions[this.instructions.length-1],r=this.getLastPoint(xt.shared);let o=0,a=0;if(!i||i.action!=="quadraticCurveTo")o=r.x,a=r.y;else{o=i.data[0],a=i.data[1];const l=r.x,u=r.y;o=l+(l-o),a=u+(u-a)}return this.instructions.push({action:"quadraticCurveTo",data:[o,a,t,n,s]}),this._dirty=!0,this}rect(t,n,s,i,r){return this.instructions.push({action:"rect",data:[t,n,s,i,r]}),this._dirty=!0,this}circle(t,n,s,i){return this.instructions.push({action:"circle",data:[t,n,s,i]}),this._dirty=!0,this}roundRect(...t){return this.instructions.push({action:"roundRect",data:t}),this._dirty=!0,this}poly(...t){return this.instructions.push({action:"poly",data:t}),this._dirty=!0,this}regularPoly(...t){return this.instructions.push({action:"regularPoly",data:t}),this._dirty=!0,this}roundPoly(...t){return this.instructions.push({action:"roundPoly",data:t}),this._dirty=!0,this}roundShape(...t){return this.instructions.push({action:"roundShape",data:t}),this._dirty=!0,this}filletRect(...t){return this.instructions.push({action:"filletRect",data:t}),this._dirty=!0,this}chamferRect(...t){return this.instructions.push({action:"chamferRect",data:t}),this._dirty=!0,this}star(t,n,s,i,r,o,a){r=r||i/2;const l=-1*Math.PI/2+o,u=s*2,c=Math.PI*2/u,h=[];for(let f=0;f<u;f++){const d=f%2?r:i,p=f*c+l;h.push(t+d*Math.cos(p),n+d*Math.sin(p))}return this.poly(h,!0,a),this}clone(t=!1){const n=new kn;if(!t)n.instructions=this.instructions.slice();else for(let s=0;s<this.instructions.length;s++){const i=this.instructions[s];n.instructions.push({action:i.action,data:i.data.slice()})}return n}clear(){return this.instructions.length=0,this._dirty=!0,this}transform(t){if(t.isIdentity())return this;const n=t.a,s=t.b,i=t.c,r=t.d,o=t.tx,a=t.ty;let l=0,u=0,c=0,h=0,f=0,d=0,p=0,g=0;for(let m=0;m<this.instructions.length;m++){const y=this.instructions[m],v=y.data;switch(y.action){case"moveTo":case"lineTo":l=v[0],u=v[1],v[0]=n*l+i*u+o,v[1]=s*l+r*u+a;break;case"bezierCurveTo":c=v[0],h=v[1],f=v[2],d=v[3],l=v[4],u=v[5],v[0]=n*c+i*h+o,v[1]=s*c+r*h+a,v[2]=n*f+i*d+o,v[3]=s*f+r*d+a,v[4]=n*l+i*u+o,v[5]=s*l+r*u+a;break;case"quadraticCurveTo":c=v[0],h=v[1],l=v[2],u=v[3],v[0]=n*c+i*h+o,v[1]=s*c+r*h+a,v[2]=n*l+i*u+o,v[3]=s*l+r*u+a;break;case"arcToSvg":l=v[5],u=v[6],p=v[0],g=v[1],v[0]=n*p+i*g,v[1]=s*p+r*g,v[5]=n*l+i*u+o,v[6]=s*l+r*u+a;break;case"circle":v[4]=Gn(v[3],t);break;case"rect":v[4]=Gn(v[4],t);break;case"ellipse":v[8]=Gn(v[8],t);break;case"roundRect":v[5]=Gn(v[5],t);break;case"addPath":v[0].transform(t);break;case"poly":v[2]=Gn(v[2],t);break;default:Tt("unknown transform action",y.action);break}}return this._dirty=!0,this}get bounds(){return this.shapePath.bounds}getLastPoint(t){let n=this.instructions.length-1,s=this.instructions[n];if(!s)return t.x=0,t.y=0,t;for(;s.action==="closePath";){if(n--,n<0)return t.x=0,t.y=0,t;s=this.instructions[n]}switch(s.action){case"moveTo":case"lineTo":t.x=s.data[0],t.y=s.data[1];break;case"quadraticCurveTo":t.x=s.data[2],t.y=s.data[3];break;case"bezierCurveTo":t.x=s.data[4],t.y=s.data[5];break;case"arc":case"arcToSvg":t.x=s.data[5],t.y=s.data[6];break;case"addPath":s.data[0].getLastPoint(t);break}return t}}function Gn(e,t){return e?e.prepend(t):t.clone()}function zg(e,t){if(typeof e=="string"){const s=document.createElement("div");s.innerHTML=e.trim(),e=s.querySelector("svg")}const n={context:t,path:new kn};return Yu(e,n,null,null),t}function Yu(e,t,n,s){const i=e.children,{fillStyle:r,strokeStyle:o}=Rg(e);r&&n?n={...n,...r}:r&&(n=r),o&&s?s={...s,...o}:o&&(s=o),t.context.fillStyle=n,t.context.strokeStyle=s;let a,l,u,c,h,f,d,p,g,m,y,v,x,w,E,M,z;switch(e.nodeName.toLowerCase()){case"path":w=e.getAttribute("d"),E=new kn(w),t.context.path(E),n&&t.context.fill(),s&&t.context.stroke();break;case"circle":d=Mt(e,"cx",0),p=Mt(e,"cy",0),g=Mt(e,"r",0),t.context.ellipse(d,p,g,g),n&&t.context.fill(),s&&t.context.stroke();break;case"rect":a=Mt(e,"x",0),l=Mt(e,"y",0),M=Mt(e,"width",0),z=Mt(e,"height",0),m=Mt(e,"rx",0),y=Mt(e,"ry",0),m||y?t.context.roundRect(a,l,M,z,m||y):t.context.rect(a,l,M,z),n&&t.context.fill(),s&&t.context.stroke();break;case"ellipse":d=Mt(e,"cx",0),p=Mt(e,"cy",0),m=Mt(e,"rx",0),y=Mt(e,"ry",0),t.context.beginPath(),t.context.ellipse(d,p,m,y),n&&t.context.fill(),s&&t.context.stroke();break;case"line":u=Mt(e,"x1",0),c=Mt(e,"y1",0),h=Mt(e,"x2",0),f=Mt(e,"y2",0),t.context.beginPath(),t.context.moveTo(u,c),t.context.lineTo(h,f),s&&t.context.stroke();break;case"polygon":x=e.getAttribute("points"),v=x.match(/\d+/g).map(k=>parseInt(k,10)),t.context.poly(v,!0),n&&t.context.fill(),s&&t.context.stroke();break;case"polyline":x=e.getAttribute("points"),v=x.match(/\d+/g).map(k=>parseInt(k,10)),t.context.poly(v,!1),s&&t.context.stroke();break;case"g":case"svg":break;default:{console.info(`[SVG parser] <${e.nodeName}> elements unsupported`);break}}for(let k=0;k<i.length;k++)Yu(i[k],t,n,s)}function Mt(e,t,n){const s=e.getAttribute(t);return s?Number(s):n}function Rg(e){const t=e.getAttribute("style"),n={},s={};let i=!1,r=!1;if(t){const o=t.split(";");for(let a=0;a<o.length;a++){const l=o[a],[u,c]=l.split(":");switch(u){case"stroke":c!=="none"&&(n.color=yt.shared.setValue(c).toNumber(),r=!0);break;case"stroke-width":n.width=Number(c);break;case"fill":c!=="none"&&(i=!0,s.color=yt.shared.setValue(c).toNumber());break;case"fill-opacity":s.alpha=Number(c);break;case"stroke-opacity":n.alpha=Number(c);break;case"opacity":s.alpha=Number(c),n.alpha=Number(c);break}}}else{const o=e.getAttribute("stroke");o&&o!=="none"&&(r=!0,n.color=yt.shared.setValue(o).toNumber(),n.width=Mt(e,"stroke-width",1));const a=e.getAttribute("fill");a&&a!=="none"&&(i=!0,s.color=yt.shared.setValue(a).toNumber())}return{strokeStyle:r?n:null,fillStyle:i?s:null}}function Og(e){return yt.isColorLike(e)}function ml(e){return e instanceof wi}function gl(e){return e instanceof gs}function Lg(e,t,n){const s=yt.shared.setValue(t??0);return e.color=s.toNumber(),e.alpha=s.alpha===1?n.alpha:s.alpha,e.texture=rt.WHITE,{...n,...e}}function xl(e,t,n){return e.fill=t,e.color=16777215,e.texture=t.texture,e.matrix=t.transform,{...n,...e}}function vl(e,t,n){return t.buildLinearGradient(),e.fill=t,e.color=16777215,e.texture=t.texture,e.matrix=t.transform,{...n,...e}}function jg(e,t){var i;const n={...t,...e};if(n.texture){if(n.texture!==rt.WHITE){const o=((i=n.matrix)==null?void 0:i.invert())||new at;o.scale(1/n.texture.frame.width,1/n.texture.frame.height),n.matrix=o}const r=n.texture.source.style;r.addressMode==="clamp-to-edge"&&(r.addressMode="repeat")}const s=yt.shared.setValue(n.color);return n.alpha*=s.alpha,n.color=s.toNumber(),n.matrix=n.matrix?n.matrix.clone():null,n}function ln(e,t){if(e==null)return null;const n={},s=e;return Og(e)?Lg(n,e,t):ml(e)?xl(n,e,t):gl(e)?vl(n,e,t):s.fill&&ml(s.fill)?xl(s,s.fill,t):s.fill&&gl(s.fill)?vl(s,s.fill,t):jg(s,t)}function si(e,t){const{width:n,alignment:s,miterLimit:i,cap:r,join:o,...a}=t,l=ln(e,a);return l?{width:n,alignment:s,miterLimit:i,cap:r,join:o,...l}:null}const Ng=new xt,_l=new at,zo=class me extends ce{constructor(){super(...arguments),this.uid=At("graphicsContext"),this.dirty=!0,this.batchMode="auto",this.instructions=[],this._activePath=new kn,this._transform=new at,this._fillStyle={...me.defaultFillStyle},this._strokeStyle={...me.defaultStrokeStyle},this._stateStack=[],this._tick=0,this._bounds=new Me,this._boundsDirty=!0}clone(){const t=new me;return t.batchMode=this.batchMode,t.instructions=this.instructions.slice(),t._activePath=this._activePath.clone(),t._transform=this._transform.clone(),t._fillStyle={...this._fillStyle},t._strokeStyle={...this._strokeStyle},t._stateStack=this._stateStack.slice(),t._bounds=this._bounds.clone(),t._boundsDirty=!0,t}get fillStyle(){return this._fillStyle}set fillStyle(t){this._fillStyle=ln(t,me.defaultFillStyle)}get strokeStyle(){return this._strokeStyle}set strokeStyle(t){this._strokeStyle=si(t,me.defaultStrokeStyle)}setFillStyle(t){return this._fillStyle=ln(t,me.defaultFillStyle),this}setStrokeStyle(t){return this._strokeStyle=ln(t,me.defaultStrokeStyle),this}texture(t,n,s,i,r,o){return this.instructions.push({action:"texture",data:{image:t,dx:s||0,dy:i||0,dw:r||t.frame.width,dh:o||t.frame.height,transform:this._transform.clone(),alpha:this._fillStyle.alpha,style:n?yt.shared.setValue(n).toNumber():16777215}}),this.onUpdate(),this}beginPath(){return this._activePath=new kn,this}fill(t,n){let s;const i=this.instructions[this.instructions.length-1];return this._tick===0&&i&&i.action==="stroke"?s=i.data.path:s=this._activePath.clone(),s?(t!=null&&(n!==void 0&&typeof t=="number"&&(ut(ct,"GraphicsContext.fill(color, alpha) is deprecated, use GraphicsContext.fill({ color, alpha }) instead"),t={color:t,alpha:n}),this._fillStyle=ln(t,me.defaultFillStyle)),this.instructions.push({action:"fill",data:{style:this.fillStyle,path:s}}),this.onUpdate(),this._initNextPathLocation(),this._tick=0,this):this}_initNextPathLocation(){const{x:t,y:n}=this._activePath.getLastPoint(xt.shared);this._activePath.clear(),this._activePath.moveTo(t,n)}stroke(t){let n;const s=this.instructions[this.instructions.length-1];return this._tick===0&&s&&s.action==="fill"?n=s.data.path:n=this._activePath.clone(),n?(t!=null&&(this._strokeStyle=si(t,me.defaultStrokeStyle)),this.instructions.push({action:"stroke",data:{style:this.strokeStyle,path:n}}),this.onUpdate(),this._initNextPathLocation(),this._tick=0,this):this}cut(){for(let t=0;t<2;t++){const n=this.instructions[this.instructions.length-1-t],s=this._activePath.clone();if(n&&(n.action==="stroke"||n.action==="fill"))if(n.data.hole)n.data.hole.addPath(s);else{n.data.hole=s;break}}return this._initNextPathLocation(),this}arc(t,n,s,i,r,o){this._tick++;const a=this._transform;return this._activePath.arc(a.a*t+a.c*n+a.tx,a.b*t+a.d*n+a.ty,s,i,r,o),this}arcTo(t,n,s,i,r){this._tick++;const o=this._transform;return this._activePath.arcTo(o.a*t+o.c*n+o.tx,o.b*t+o.d*n+o.ty,o.a*s+o.c*i+o.tx,o.b*s+o.d*i+o.ty,r),this}arcToSvg(t,n,s,i,r,o,a){this._tick++;const l=this._transform;return this._activePath.arcToSvg(t,n,s,i,r,l.a*o+l.c*a+l.tx,l.b*o+l.d*a+l.ty),this}bezierCurveTo(t,n,s,i,r,o,a){this._tick++;const l=this._transform;return this._activePath.bezierCurveTo(l.a*t+l.c*n+l.tx,l.b*t+l.d*n+l.ty,l.a*s+l.c*i+l.tx,l.b*s+l.d*i+l.ty,l.a*r+l.c*o+l.tx,l.b*r+l.d*o+l.ty,a),this}closePath(){var t;return this._tick++,(t=this._activePath)==null||t.closePath(),this}ellipse(t,n,s,i){return this._tick++,this._activePath.ellipse(t,n,s,i,this._transform.clone()),this}circle(t,n,s){return this._tick++,this._activePath.circle(t,n,s,this._transform.clone()),this}path(t){return this._tick++,this._activePath.addPath(t,this._transform.clone()),this}lineTo(t,n){this._tick++;const s=this._transform;return this._activePath.lineTo(s.a*t+s.c*n+s.tx,s.b*t+s.d*n+s.ty),this}moveTo(t,n){this._tick++;const s=this._transform,i=this._activePath.instructions,r=s.a*t+s.c*n+s.tx,o=s.b*t+s.d*n+s.ty;return i.length===1&&i[0].action==="moveTo"?(i[0].data[0]=r,i[0].data[1]=o,this):(this._activePath.moveTo(r,o),this)}quadraticCurveTo(t,n,s,i,r){this._tick++;const o=this._transform;return this._activePath.quadraticCurveTo(o.a*t+o.c*n+o.tx,o.b*t+o.d*n+o.ty,o.a*s+o.c*i+o.tx,o.b*s+o.d*i+o.ty,r),this}rect(t,n,s,i){return this._tick++,this._activePath.rect(t,n,s,i,this._transform.clone()),this}roundRect(t,n,s,i,r){return this._tick++,this._activePath.roundRect(t,n,s,i,r,this._transform.clone()),this}poly(t,n){return this._tick++,this._activePath.poly(t,n,this._transform.clone()),this}regularPoly(t,n,s,i,r=0,o){return this._tick++,this._activePath.regularPoly(t,n,s,i,r,o),this}roundPoly(t,n,s,i,r,o){return this._tick++,this._activePath.roundPoly(t,n,s,i,r,o),this}roundShape(t,n,s,i){return this._tick++,this._activePath.roundShape(t,n,s,i),this}filletRect(t,n,s,i,r){return this._tick++,this._activePath.filletRect(t,n,s,i,r),this}chamferRect(t,n,s,i,r,o){return this._tick++,this._activePath.chamferRect(t,n,s,i,r,o),this}star(t,n,s,i,r=0,o=0){return this._tick++,this._activePath.star(t,n,s,i,r,o,this._transform.clone()),this}svg(t){return this._tick++,zg(t,this),this}restore(){const t=this._stateStack.pop();return t&&(this._transform=t.transform,this._fillStyle=t.fillStyle,this._strokeStyle=t.strokeStyle),this}save(){return this._stateStack.push({transform:this._transform.clone(),fillStyle:{...this._fillStyle},strokeStyle:{...this._strokeStyle}}),this}getTransform(){return this._transform}resetTransform(){return this._transform.identity(),this}rotate(t){return this._transform.rotate(t),this}scale(t,n=t){return this._transform.scale(t,n),this}setTransform(t,n,s,i,r,o){return t instanceof at?(this._transform.set(t.a,t.b,t.c,t.d,t.tx,t.ty),this):(this._transform.set(t,n,s,i,r,o),this)}transform(t,n,s,i,r,o){return t instanceof at?(this._transform.append(t),this):(_l.set(t,n,s,i,r,o),this._transform.append(_l),this)}translate(t,n=t){return this._transform.translate(t,n),this}clear(){return this._activePath.clear(),this.instructions.length=0,this.resetTransform(),this.onUpdate(),this}onUpdate(){this.dirty||(this.emit("update",this,16),this.dirty=!0,this._boundsDirty=!0)}get bounds(){if(!this._boundsDirty)return this._bounds;const t=this._bounds;t.clear();for(let n=0;n<this.instructions.length;n++){const s=this.instructions[n],i=s.action;if(i==="fill"){const r=s.data;t.addBounds(r.path.bounds)}else if(i==="texture"){const r=s.data;t.addFrame(r.dx,r.dy,r.dx+r.dw,r.dy+r.dh,r.transform)}if(i==="stroke"){const r=s.data,o=r.style.width/2,a=r.path.bounds;t.addFrame(a.minX-o,a.minY-o,a.maxX+o,a.maxY+o)}}return t}containsPoint(t){var i;if(!this.bounds.containsPoint(t.x,t.y))return!1;const n=this.instructions;let s=!1;for(let r=0;r<n.length;r++){const o=n[r],a=o.data,l=a.path;if(!o.action||!l)continue;const u=a.style,c=l.shapePath.shapePrimitives;for(let h=0;h<c.length;h++){const f=c[h].shape;if(!u||!f)continue;const d=c[h].transform,p=d?d.applyInverse(t,Ng):t;o.action==="fill"?s=f.contains(p.x,p.y):s=f.strokeContains(p.x,p.y,u.width);const g=a.hole;if(g){const m=(i=g.shapePath)==null?void 0:i.shapePrimitives;if(m)for(let y=0;y<m.length;y++)m[y].shape.contains(p.x,p.y)&&(s=!1)}if(s)return!0}}return s}destroy(t=!1){if(this._stateStack.length=0,this._transform=null,this.emit("destroy",this),this.removeAllListeners(),typeof t=="boolean"?t:t==null?void 0:t.texture){const s=typeof t=="boolean"?t:t==null?void 0:t.textureSource;this._fillStyle.texture&&this._fillStyle.texture.destroy(s),this._strokeStyle.texture&&this._strokeStyle.texture.destroy(s)}this._fillStyle=null,this._strokeStyle=null,this.instructions=null,this._activePath=null,this._bounds=null,this._stateStack=null,this.customShader=null,this._transform=null}};zo.defaultFillStyle={color:16777215,alpha:1,texture:rt.WHITE,matrix:null,fill:null};zo.defaultStrokeStyle={width:1,color:16777215,alpha:1,alignment:.5,miterLimit:10,cap:"butt",join:"miter",texture:rt.WHITE,matrix:null,fill:null};let Yt=zo;const yl=["align","breakWords","cssOverrides","fontFamily","fontSize","fontStyle","fontVariant","fontWeight","leading","letterSpacing","lineHeight","padding","textBaseline","trim","whiteSpace","wordWrap","wordWrapWidth"];function Ug(e){const t=[];let n=0;for(let s=0;s<yl.length;s++){const i=`_${yl[s]}`;t[n++]=e[i]}return n=qu(e._fill,t,n),n=Dg(e._stroke,t,n),n=Gg(e.dropShadow,t,n),t.join("-")}function qu(e,t,n){var s;return e&&(t[n++]=e.color,t[n++]=e.alpha,t[n++]=(s=e.fill)==null?void 0:s.styleKey),n}function Dg(e,t,n){return e&&(n=qu(e,t,n),t[n++]=e.width,t[n++]=e.alignment,t[n++]=e.cap,t[n++]=e.join,t[n++]=e.miterLimit),n}function Gg(e,t,n){return e&&(t[n++]=e.alpha,t[n++]=e.angle,t[n++]=e.blur,t[n++]=e.distance,t[n++]=yt.shared.setValue(e.color).toNumber()),n}const Ro=class gn extends ce{constructor(t={}){super(),Hg(t);const n={...gn.defaultTextStyle,...t};for(const s in n){const i=s;this[i]=n[s]}this.update()}get align(){return this._align}set align(t){this._align=t,this.update()}get breakWords(){return this._breakWords}set breakWords(t){this._breakWords=t,this.update()}get dropShadow(){return this._dropShadow}set dropShadow(t){t!==null&&typeof t=="object"?this._dropShadow=this._createProxy({...gn.defaultDropShadow,...t}):this._dropShadow=t?this._createProxy({...gn.defaultDropShadow}):null,this.update()}get fontFamily(){return this._fontFamily}set fontFamily(t){this._fontFamily=t,this.update()}get fontSize(){return this._fontSize}set fontSize(t){typeof t=="string"?this._fontSize=parseInt(t,10):this._fontSize=t,this.update()}get fontStyle(){return this._fontStyle}set fontStyle(t){this._fontStyle=t,this.update()}get fontVariant(){return this._fontVariant}set fontVariant(t){this._fontVariant=t,this.update()}get fontWeight(){return this._fontWeight}set fontWeight(t){this._fontWeight=t,this.update()}get leading(){return this._leading}set leading(t){this._leading=t,this.update()}get letterSpacing(){return this._letterSpacing}set letterSpacing(t){this._letterSpacing=t,this.update()}get lineHeight(){return this._lineHeight}set lineHeight(t){this._lineHeight=t,this.update()}get padding(){return this._padding}set padding(t){this._padding=t,this.update()}get trim(){return this._trim}set trim(t){this._trim=t,this.update()}get textBaseline(){return this._textBaseline}set textBaseline(t){this._textBaseline=t,this.update()}get whiteSpace(){return this._whiteSpace}set whiteSpace(t){this._whiteSpace=t,this.update()}get wordWrap(){return this._wordWrap}set wordWrap(t){this._wordWrap=t,this.update()}get wordWrapWidth(){return this._wordWrapWidth}set wordWrapWidth(t){this._wordWrapWidth=t,this.update()}get fill(){return this._originalFill}set fill(t){t!==this._originalFill&&(this._originalFill=t,this._isFillStyle(t)&&(this._originalFill=this._createProxy({...Yt.defaultFillStyle,...t},()=>{this._fill=ln({...this._originalFill},Yt.defaultFillStyle)})),this._fill=ln(t===0?"black":t,Yt.defaultFillStyle),this.update())}get stroke(){return this._originalStroke}set stroke(t){t!==this._originalStroke&&(this._originalStroke=t,this._isFillStyle(t)&&(this._originalStroke=this._createProxy({...Yt.defaultStrokeStyle,...t},()=>{this._stroke=si({...this._originalStroke},Yt.defaultStrokeStyle)})),this._stroke=si(t,Yt.defaultStrokeStyle),this.update())}_generateKey(){return this._styleKey=Ug(this),this._styleKey}update(){this._styleKey=null,this.emit("update",this)}reset(){const t=gn.defaultTextStyle;for(const n in t)this[n]=t[n]}get styleKey(){return this._styleKey||this._generateKey()}clone(){return new gn({align:this.align,breakWords:this.breakWords,dropShadow:this._dropShadow?{...this._dropShadow}:null,fill:this._fill,fontFamily:this.fontFamily,fontSize:this.fontSize,fontStyle:this.fontStyle,fontVariant:this.fontVariant,fontWeight:this.fontWeight,leading:this.leading,letterSpacing:this.letterSpacing,lineHeight:this.lineHeight,padding:this.padding,stroke:this._stroke,textBaseline:this.textBaseline,whiteSpace:this.whiteSpace,wordWrap:this.wordWrap,wordWrapWidth:this.wordWrapWidth})}destroy(t=!1){var s,i,r,o;if(this.removeAllListeners(),typeof t=="boolean"?t:t==null?void 0:t.texture){const a=typeof t=="boolean"?t:t==null?void 0:t.textureSource;(s=this._fill)!=null&&s.texture&&this._fill.texture.destroy(a),(i=this._originalFill)!=null&&i.texture&&this._originalFill.texture.destroy(a),(r=this._stroke)!=null&&r.texture&&this._stroke.texture.destroy(a),(o=this._originalStroke)!=null&&o.texture&&this._originalStroke.texture.destroy(a)}this._fill=null,this._stroke=null,this.dropShadow=null,this._originalStroke=null,this._originalFill=null}_createProxy(t,n){return new Proxy(t,{set:(s,i,r)=>(s[i]=r,n==null||n(i,r),this.update(),!0)})}_isFillStyle(t){return(t??null)!==null&&!(yt.isColorLike(t)||t instanceof gs||t instanceof wi)}};Ro.defaultDropShadow={alpha:1,angle:Math.PI/6,blur:0,color:"black",distance:5};Ro.defaultTextStyle={align:"left",breakWords:!1,dropShadow:null,fill:"black",fontFamily:"Arial",fontSize:26,fontStyle:"normal",fontVariant:"normal",fontWeight:"normal",leading:0,letterSpacing:0,lineHeight:0,padding:0,stroke:null,textBaseline:"alphabetic",trim:!1,whiteSpace:"pre",wordWrap:!1,wordWrapWidth:100};let ii=Ro;function Hg(e){const t=e;if(typeof t.dropShadow=="boolean"&&t.dropShadow){const n=ii.defaultDropShadow;e.dropShadow={alpha:t.dropShadowAlpha??n.alpha,angle:t.dropShadowAngle??n.angle,blur:t.dropShadowBlur??n.blur,color:t.dropShadowColor??n.color,distance:t.dropShadowDistance??n.distance}}if(t.strokeThickness!==void 0){ut(ct,"strokeThickness is now a part of stroke");const n=t.stroke;let s={};if(yt.isColorLike(n))s.color=n;else if(n instanceof gs||n instanceof wi)s.fill=n;else if(Object.hasOwnProperty.call(n,"color")||Object.hasOwnProperty.call(n,"fill"))s=n;else throw new Error("Invalid stroke value.");e.stroke={...s,width:t.strokeThickness}}if(Array.isArray(t.fillGradientStops)){ut(ct,"gradient fill is now a fill pattern: `new FillGradient(...)`");let n;e.fontSize==null?e.fontSize=ii.defaultTextStyle.fontSize:typeof e.fontSize=="string"?n=parseInt(e.fontSize,10):n=e.fontSize;const s=new gs(0,0,0,n*1.7),i=t.fillGradientStops.map(r=>yt.shared.setValue(r).toNumber());i.forEach((r,o)=>{const a=o/(i.length-1);s.addColorStop(a,r)}),e.fill={fill:s}}}class $g{constructor(t){this._canvasPool=Object.create(null),this.canvasOptions=t||{},this.enableFullScreen=!1}_createCanvasAndContext(t,n){const s=vt.get().createCanvas();s.width=t,s.height=n;const i=s.getContext("2d");return{canvas:s,context:i}}getOptimalCanvasAndContext(t,n,s=1){t=Math.ceil(t*s-1e-6),n=Math.ceil(n*s-1e-6),t=ja(t),n=ja(n);const i=(t<<17)+(n<<1);this._canvasPool[i]||(this._canvasPool[i]=[]);let r=this._canvasPool[i].pop();return r||(r=this._createCanvasAndContext(t,n)),r}returnCanvasAndContext(t){const{width:n,height:s}=t.canvas,i=(n<<17)+(s<<1);this._canvasPool[i].push(t)}clear(){this._canvasPool={}}}const bl=new $g,Wg=["serif","sans-serif","monospace","cursive","fantasy","system-ui"];function Zr(e){const t=typeof e.fontSize=="number"?`${e.fontSize}px`:e.fontSize;let n=e.fontFamily;Array.isArray(e.fontFamily)||(n=e.fontFamily.split(","));for(let s=n.length-1;s>=0;s--){let i=n[s].trim();!/([\"\'])[^\'\"]+\1/.test(i)&&!Wg.includes(i)&&(i=`"${i}"`),n[s]=i}return`${e.fontStyle} ${e.fontVariant} ${e.fontWeight} ${t} ${n.join(",")}`}const hr={willReadFrequently:!0},ue=class G{static get experimentalLetterSpacingSupported(){let t=G._experimentalLetterSpacingSupported;if(t!==void 0){const n=vt.get().getCanvasRenderingContext2D().prototype;t=G._experimentalLetterSpacingSupported="letterSpacing"in n||"textLetterSpacing"in n}return t}constructor(t,n,s,i,r,o,a,l,u){this.text=t,this.style=n,this.width=s,this.height=i,this.lines=r,this.lineWidths=o,this.lineHeight=a,this.maxLineWidth=l,this.fontProperties=u}static measureText(t=" ",n,s=G._canvas,i=n.wordWrap){var v;const r=`${t}:${n.styleKey}`;if(G._measurementCache[r])return G._measurementCache[r];const o=Zr(n),a=G.measureFont(o);a.fontSize===0&&(a.fontSize=n.fontSize,a.ascent=n.fontSize);const l=G.__context;l.font=o;const c=(i?G._wordWrap(t,n,s):t).split(/(?:\r\n|\r|\n)/),h=new Array(c.length);let f=0;for(let x=0;x<c.length;x++){const w=G._measureText(c[x],n.letterSpacing,l);h[x]=w,f=Math.max(f,w)}const d=((v=n._stroke)==null?void 0:v.width)||0;let p=f+d;n.dropShadow&&(p+=n.dropShadow.distance);const g=n.lineHeight||a.fontSize+d;let m=Math.max(g,a.fontSize+d*2)+(c.length-1)*(g+n.leading);return n.dropShadow&&(m+=n.dropShadow.distance),new G(t,n,p,m,c,h,g+n.leading,f,a)}static _measureText(t,n,s){let i=!1;G.experimentalLetterSpacingSupported&&(G.experimentalLetterSpacing?(s.letterSpacing=`${n}px`,s.textLetterSpacing=`${n}px`,i=!0):(s.letterSpacing="0px",s.textLetterSpacing="0px"));let r=s.measureText(t).width;return r>0&&(i?r-=n:r+=(G.graphemeSegmenter(t).length-1)*n),r}static _wordWrap(t,n,s=G._canvas){const i=s.getContext("2d",hr);let r=0,o="",a="";const l=Object.create(null),{letterSpacing:u,whiteSpace:c}=n,h=G._collapseSpaces(c),f=G._collapseNewlines(c);let d=!h;const p=n.wordWrapWidth+u,g=G._tokenize(t);for(let m=0;m<g.length;m++){let y=g[m];if(G._isNewline(y)){if(!f){a+=G._addLine(o),d=!h,o="",r=0;continue}y=" "}if(h){const x=G.isBreakingSpace(y),w=G.isBreakingSpace(o[o.length-1]);if(x&&w)continue}const v=G._getFromCache(y,u,l,i);if(v>p)if(o!==""&&(a+=G._addLine(o),o="",r=0),G.canBreakWords(y,n.breakWords)){const x=G.wordWrapSplit(y);for(let w=0;w<x.length;w++){let E=x[w],M=E,z=1;for(;x[w+z];){const S=x[w+z];if(!G.canBreakChars(M,S,y,w,n.breakWords))E+=S;else break;M=S,z++}w+=z-1;const k=G._getFromCache(E,u,l,i);k+r>p&&(a+=G._addLine(o),d=!1,o="",r=0),o+=E,r+=k}}else{o.length>0&&(a+=G._addLine(o),o="",r=0);const x=m===g.length-1;a+=G._addLine(y,!x),d=!1,o="",r=0}else v+r>p&&(d=!1,a+=G._addLine(o),o="",r=0),(o.length>0||!G.isBreakingSpace(y)||d)&&(o+=y,r+=v)}return a+=G._addLine(o,!1),a}static _addLine(t,n=!0){return t=G._trimRight(t),t=n?`${t}
`:t,t}static _getFromCache(t,n,s,i){let r=s[t];return typeof r!="number"&&(r=G._measureText(t,n,i)+n,s[t]=r),r}static _collapseSpaces(t){return t==="normal"||t==="pre-line"}static _collapseNewlines(t){return t==="normal"}static _trimRight(t){if(typeof t!="string")return"";for(let n=t.length-1;n>=0;n--){const s=t[n];if(!G.isBreakingSpace(s))break;t=t.slice(0,-1)}return t}static _isNewline(t){return typeof t!="string"?!1:G._newlines.includes(t.charCodeAt(0))}static isBreakingSpace(t,n){return typeof t!="string"?!1:G._breakingSpaces.includes(t.charCodeAt(0))}static _tokenize(t){const n=[];let s="";if(typeof t!="string")return n;for(let i=0;i<t.length;i++){const r=t[i],o=t[i+1];if(G.isBreakingSpace(r,o)||G._isNewline(r)){s!==""&&(n.push(s),s=""),n.push(r);continue}s+=r}return s!==""&&n.push(s),n}static canBreakWords(t,n){return n}static canBreakChars(t,n,s,i,r){return!0}static wordWrapSplit(t){return G.graphemeSegmenter(t)}static measureFont(t){if(G._fonts[t])return G._fonts[t];const n=G._context;n.font=t;const s=n.measureText(G.METRICS_STRING+G.BASELINE_SYMBOL),i={ascent:s.actualBoundingBoxAscent,descent:s.actualBoundingBoxDescent,fontSize:s.actualBoundingBoxAscent+s.actualBoundingBoxDescent};return G._fonts[t]=i,i}static clearMetrics(t=""){t?delete G._fonts[t]:G._fonts={}}static get _canvas(){if(!G.__canvas){let t;try{const n=new OffscreenCanvas(0,0),s=n.getContext("2d",hr);if(s!=null&&s.measureText)return G.__canvas=n,n;t=vt.get().createCanvas()}catch{t=vt.get().createCanvas()}t.width=t.height=10,G.__canvas=t}return G.__canvas}static get _context(){return G.__context||(G.__context=G._canvas.getContext("2d",hr)),G.__context}};ue.METRICS_STRING="|ÉqÅ";ue.BASELINE_SYMBOL="M";ue.BASELINE_MULTIPLIER=1.4;ue.HEIGHT_MULTIPLIER=2;ue.graphemeSegmenter=(()=>{if(typeof(Intl==null?void 0:Intl.Segmenter)=="function"){const e=new Intl.Segmenter;return t=>[...e.segment(t)].map(n=>n.segment)}return e=>[...e]})();ue.experimentalLetterSpacing=!1;ue._fonts={};ue._newlines=[10,13];ue._breakingSpaces=[9,32,8192,8193,8194,8195,8196,8197,8198,8200,8201,8202,8287,12288];ue._measurementCache={};let wl=ue;function Al(e,t){if(e.texture===rt.WHITE&&!e.fill)return yt.shared.setValue(e.color).toHex();if(e.fill){if(e.fill instanceof wi){const n=e.fill,s=t.createPattern(n.texture.source.resource,"repeat"),i=n.transform.copyTo(at.shared);return i.scale(n.texture.frame.width,n.texture.frame.height),s.setTransform(i),s}else if(e.fill instanceof gs){const n=e.fill;if(n.type==="linear"){const s=t.createLinearGradient(n.x0,n.y0,n.x1,n.y1);return n.gradientStops.forEach(i=>{s.addColorStop(i.offset,yt.shared.setValue(i.color).toHex())}),s}}}else{const n=t.createPattern(e.texture.source.resource,"repeat"),s=e.matrix.copyTo(at.shared);return s.scale(e.texture.frame.width,e.texture.frame.height),n.setTransform(s),n}return Tt("FillStyle not recognised",e),"red"}function Ku(e){if(e==="")return[];typeof e=="string"&&(e=[e]);const t=[];for(let n=0,s=e.length;n<s;n++){const i=e[n];if(Array.isArray(i)){if(i.length!==2)throw new Error(`[BitmapFont]: Invalid character range length, expecting 2 got ${i.length}.`);if(i[0].length===0||i[1].length===0)throw new Error("[BitmapFont]: Invalid character delimiter.");const r=i[0].charCodeAt(0),o=i[1].charCodeAt(0);if(o<r)throw new Error("[BitmapFont]: Invalid character range.");for(let a=r,l=o;a<=l;a++)t.push(String.fromCharCode(a))}else t.push(...Array.from(i))}if(t.length===0)throw new Error("[BitmapFont]: Empty set when resolving characters.");return t}class Cl extends Ru{constructor(t){super(),this.resolution=1,this.pages=[],this._padding=4,this._measureCache=Object.create(null),this._currentChars=[],this._currentX=0,this._currentY=0,this._currentPageIndex=-1,this._skipKerning=!1;const n=t,s=n.style.clone();n.overrideFill&&(s._fill.color=16777215,s._fill.alpha=1,s._fill.texture=rt.WHITE,s._fill.fill=null);const i=s.fontSize;s.fontSize=this.baseMeasurementFontSize;const r=Zr(s);n.overrideSize?s._stroke&&(s._stroke.width*=this.baseRenderedFontSize/i):s.fontSize=this.baseRenderedFontSize=i,this._style=s,this._skipKerning=n.skipKerning??!1,this.resolution=n.resolution??1,this._padding=n.padding??4,this.fontMetrics=wl.measureFont(r),this.lineHeight=s.lineHeight||this.fontMetrics.fontSize||s.fontSize}ensureCharacters(t){var g,m;const n=Ku(t).filter(y=>!this._currentChars.includes(y)).filter((y,v,x)=>x.indexOf(y)===v);if(!n.length)return;this._currentChars=[...this._currentChars,...n];let s;this._currentPageIndex===-1?s=this._nextPage():s=this.pages[this._currentPageIndex];let{canvas:i,context:r}=s.canvasAndContext,o=s.texture.source;const a=this._style;let l=this._currentX,u=this._currentY;const c=this.baseRenderedFontSize/this.baseMeasurementFontSize,h=this._padding*c,f=a.fontStyle==="italic"?2:1;let d=0,p=!1;for(let y=0;y<n.length;y++){const v=n[y],x=wl.measureText(v,a,i,!1);x.lineHeight=x.height;const w=f*x.width*c,E=x.height*c,M=w+h*2,z=E+h*2;if(p=!1,v!==`
`&&v!=="\r"&&v!=="	"&&v!==" "&&(p=!0,d=Math.ceil(Math.max(z,d))),l+M>512&&(u+=d,d=z,l=0,u+d>512)){o.update();const S=this._nextPage();i=S.canvasAndContext.canvas,r=S.canvasAndContext.context,o=S.texture.source,u=0}const k=w/c-(((g=a.dropShadow)==null?void 0:g.distance)??0)-(((m=a._stroke)==null?void 0:m.width)??0);if(this.chars[v]={id:v.codePointAt(0),xOffset:-this._padding,yOffset:-this._padding,xAdvance:k,kerning:{}},p){this._drawGlyph(r,x,l+h,u+h,c,a);const S=o.width*c,C=o.height*c,Y=new wt(l/S*o.width,u/C*o.height,M/S*o.width,z/C*o.height);this.chars[v].texture=new rt({source:o,frame:Y}),l+=Math.ceil(M)}}o.update(),this._currentX=l,this._currentY=u,this._skipKerning&&this._applyKerning(n,r)}get pageTextures(){return ut(ct,"BitmapFont.pageTextures is deprecated, please use BitmapFont.pages instead."),this.pages}_applyKerning(t,n){const s=this._measureCache;for(let i=0;i<t.length;i++){const r=t[i];for(let o=0;o<this._currentChars.length;o++){const a=this._currentChars[o];let l=s[r];l||(l=s[r]=n.measureText(r).width);let u=s[a];u||(u=s[a]=n.measureText(a).width);let c=n.measureText(r+a).width,h=c-(l+u);h&&(this.chars[r].kerning[a]=h),c=n.measureText(r+a).width,h=c-(l+u),h&&(this.chars[a].kerning[r]=h)}}}_nextPage(){this._currentPageIndex++;const t=this.resolution,n=bl.getOptimalCanvasAndContext(512,512,t);this._setupContext(n.context,this._style,t);const s=t*(this.baseRenderedFontSize/this.baseMeasurementFontSize),i=new rt({source:new Fn({resource:n.canvas,resolution:s,alphaMode:"premultiply-alpha-on-upload"})}),r={canvasAndContext:n,texture:i};return this.pages[this._currentPageIndex]=r,r}_setupContext(t,n,s){n.fontSize=this.baseRenderedFontSize,t.scale(s,s),t.font=Zr(n),n.fontSize=this.baseMeasurementFontSize,t.textBaseline=n.textBaseline;const i=n._stroke,r=(i==null?void 0:i.width)??0;if(i&&(t.lineWidth=r,t.lineJoin=i.join,t.miterLimit=i.miterLimit,t.strokeStyle=Al(i,t)),n._fill&&(t.fillStyle=Al(n._fill,t)),n.dropShadow){const o=n.dropShadow,a=yt.shared.setValue(o.color).toArray(),l=o.blur*s,u=o.distance*s;t.shadowColor=`rgba(${a[0]*255},${a[1]*255},${a[2]*255},${o.alpha})`,t.shadowBlur=l,t.shadowOffsetX=Math.cos(o.angle)*u,t.shadowOffsetY=Math.sin(o.angle)*u}else t.shadowColor="black",t.shadowBlur=0,t.shadowOffsetX=0,t.shadowOffsetY=0}_drawGlyph(t,n,s,i,r,o){const a=n.text,l=n.fontProperties,u=o._stroke,c=((u==null?void 0:u.width)??0)*r,h=s+c/2,f=i-c/2,d=l.descent*r,p=n.lineHeight*r;o.stroke&&c&&t.strokeText(a,h,f+p-d),o._fill&&t.fillText(a,h,f+p-d)}destroy(){super.destroy();for(let t=0;t<this.pages.length;t++){const{canvasAndContext:n,texture:s}=this.pages[t];bl.returnCanvasAndContext(n),s.destroy(!0)}this.pages=null}}function Vg(e,t,n){const s={width:0,height:0,offsetY:0,scale:t.fontSize/n.baseMeasurementFontSize,lines:[{width:0,charPositions:[],spaceWidth:0,spacesIndex:[],chars:[]}]};s.offsetY=n.baseLineOffset;let i=s.lines[0],r=null,o=!0;const a={spaceWord:!1,width:0,start:0,index:0,positions:[],chars:[]},l=d=>{const p=i.width;for(let g=0;g<a.index;g++){const m=d.positions[g];i.chars.push(d.chars[g]),i.charPositions.push(m+p)}i.width+=d.width,o=!1,a.width=0,a.index=0,a.chars.length=0},u=()=>{let d=i.chars.length-1,p=i.chars[d];for(;p===" ";)i.width-=n.chars[p].xAdvance,p=i.chars[--d];s.width=Math.max(s.width,i.width),i={width:0,charPositions:[],chars:[],spaceWidth:0,spacesIndex:[]},o=!0,s.lines.push(i),s.height+=n.lineHeight},c=n.baseMeasurementFontSize/t.fontSize,h=t.letterSpacing*c,f=t.wordWrapWidth*c;for(let d=0;d<e.length+1;d++){let p;const g=d===e.length;g||(p=e[d]);const m=n.chars[p]||n.chars[" "];if(/(?:\s)/.test(p)||p==="\r"||p===`
`||g){if(!o&&t.wordWrap&&i.width+a.width-h>f?(u(),l(a),g||i.charPositions.push(0)):(a.start=i.width,l(a),g||i.charPositions.push(0)),p==="\r"||p===`
`)i.width!==0&&u();else if(!g){const w=m.xAdvance+(m.kerning[r]||0)+h;i.width+=w,i.spaceWidth=w,i.spacesIndex.push(i.charPositions.length),i.chars.push(p)}}else{const x=m.kerning[r]||0,w=m.xAdvance+x+h;a.positions[a.index++]=a.width+x,a.chars.push(p),a.width+=w}r=p}return u(),t.align==="center"?Xg(s):t.align==="right"?Yg(s):t.align==="justify"&&qg(s),s}function Xg(e){for(let t=0;t<e.lines.length;t++){const n=e.lines[t],s=e.width/2-n.width/2;for(let i=0;i<n.charPositions.length;i++)n.charPositions[i]+=s}}function Yg(e){for(let t=0;t<e.lines.length;t++){const n=e.lines[t],s=e.width-n.width;for(let i=0;i<n.charPositions.length;i++)n.charPositions[i]+=s}}function qg(e){const t=e.width;for(let n=0;n<e.lines.length;n++){const s=e.lines[n];let i=0,r=s.spacesIndex[i++],o=0;const a=s.spacesIndex.length,u=(t-s.width)/a;for(let c=0;c<s.charPositions.length;c++)c===r&&(r=s.spacesIndex[i++],o+=u),s.charPositions[c]+=o}}class Kg{constructor(){this.ALPHA=[["a","z"],["A","Z"]," "],this.NUMERIC=[["0","9"]],this.ALPHANUMERIC=[["a","z"],["A","Z"],["0","9"]," "],this.ASCII=[[" ","~"]],this.defaultOptions={chars:this.ALPHANUMERIC,resolution:1,padding:4,skipKerning:!1}}getFont(t,n){var o;let s=`${n.fontFamily}-bitmap`,i=!0;if(n._fill.fill&&(s+=n._fill.fill.uid,i=!1),!mt.has(s)){const a=new Cl({style:n,overrideFill:i,overrideSize:!0,...this.defaultOptions});a.once("destroy",()=>mt.remove(s)),mt.set(s,a)}const r=mt.get(s);return(o=r.ensureCharacters)==null||o.call(r,t),r}getLayout(t,n){const s=this.getFont(t,n);return Vg([...t],n,s)}measureText(t,n){return this.getLayout(t,n)}install(...t){var u,c,h,f;let n=t[0];typeof n=="string"&&(n={name:n,style:t[1],chars:(u=t[2])==null?void 0:u.chars,resolution:(c=t[2])==null?void 0:c.resolution,padding:(h=t[2])==null?void 0:h.padding,skipKerning:(f=t[2])==null?void 0:f.skipKerning},ut(ct,"BitmapFontManager.install(name, style, options) is deprecated, use BitmapFontManager.install({name, style, ...options})"));const s=n==null?void 0:n.name;if(!s)throw new Error("[BitmapFontManager] Property `name` is required.");n={...this.defaultOptions,...n};const i=n.style,r=i instanceof ii?i:new ii(i),o=r._fill.fill!==null&&r._fill.fill!==void 0,a=new Cl({style:r,overrideFill:o,skipKerning:n.skipKerning,padding:n.padding,resolution:n.resolution,overrideSize:!1}),l=Ku(n.chars);return a.ensureCharacters(l.join("")),mt.set(`${s}-bitmap`,a),a.once("destroy",()=>mt.remove(`${s}-bitmap`)),a}uninstall(t){const n=`${t}-bitmap`,s=mt.get(n);s&&(mt.remove(n),s.destroy())}}const Sl=new Kg;class Zu extends Ru{constructor(t,n){super();const{textures:s,data:i}=t;Object.keys(i.pages).forEach(r=>{const o=i.pages[parseInt(r,10)],a=s[o.id];this.pages.push({texture:a})}),Object.keys(i.chars).forEach(r=>{const o=i.chars[r],{frame:a,source:l}=s[o.page],u=new wt(o.x+a.x,o.y+a.y,o.width,o.height),c=new rt({source:l,frame:u});this.chars[r]={id:r.codePointAt(0),xOffset:o.xOffset,yOffset:o.yOffset,xAdvance:o.xAdvance,kerning:o.kerning??{},texture:c}}),this.baseRenderedFontSize=i.fontSize,this.baseMeasurementFontSize=i.fontSize,this.fontMetrics={ascent:0,descent:0,fontSize:i.fontSize},this.baseLineOffset=i.baseLineOffset,this.lineHeight=i.lineHeight,this.fontFamily=i.fontFamily,this.distanceField=i.distanceField??{type:"none",range:0},this.url=n}destroy(){super.destroy();for(let t=0;t<this.pages.length;t++){const{texture:n}=this.pages[t];n.destroy(!0)}this.pages=null}static install(t){Sl.install(t)}static uninstall(t){Sl.uninstall(t)}}const fr={test(e){return typeof e=="string"&&e.startsWith("info face=")},parse(e){const t=e.match(/^[a-z]+\s+.+$/gm),n={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(const h in t){const f=t[h].match(/^[a-z]+/gm)[0],d=t[h].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),p={};for(const g in d){const m=d[g].split("="),y=m[0],v=m[1].replace(/"/gm,""),x=parseFloat(v),w=isNaN(x)?v:x;p[y]=w}n[f].push(p)}const s={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[i]=n.info,[r]=n.common,[o]=n.distanceField??[];o&&(s.distanceField={range:parseInt(o.distanceRange,10),type:o.fieldType}),s.fontSize=parseInt(i.size,10),s.fontFamily=i.face,s.lineHeight=parseInt(r.lineHeight,10);const a=n.page;for(let h=0;h<a.length;h++)s.pages.push({id:parseInt(a[h].id,10)||0,file:a[h].file});const l={};s.baseLineOffset=s.lineHeight-parseInt(r.base,10);const u=n.char;for(let h=0;h<u.length;h++){const f=u[h],d=parseInt(f.id,10);let p=f.letter??f.char??String.fromCharCode(d);p==="space"&&(p=" "),l[d]=p,s.chars[p]={id:d,page:parseInt(f.page,10)||0,x:parseInt(f.x,10),y:parseInt(f.y,10),width:parseInt(f.width,10),height:parseInt(f.height,10),xOffset:parseInt(f.xoffset,10),yOffset:parseInt(f.yoffset,10),xAdvance:parseInt(f.xadvance,10),kerning:{}}}const c=n.kerning||[];for(let h=0;h<c.length;h++){const f=parseInt(c[h].first,10),d=parseInt(c[h].second,10),p=parseInt(c[h].amount,10);s.chars[l[d]].kerning[l[f]]=p}return s}},Ml={test(e){const t=e;return typeof t!="string"&&"getElementsByTagName"in t&&t.getElementsByTagName("page").length&&t.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(e){const t={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},n=e.getElementsByTagName("info")[0],s=e.getElementsByTagName("common")[0],i=e.getElementsByTagName("distanceField")[0];i&&(t.distanceField={type:i.getAttribute("fieldType"),range:parseInt(i.getAttribute("distanceRange"),10)});const r=e.getElementsByTagName("page"),o=e.getElementsByTagName("char"),a=e.getElementsByTagName("kerning");t.fontSize=parseInt(n.getAttribute("size"),10),t.fontFamily=n.getAttribute("face"),t.lineHeight=parseInt(s.getAttribute("lineHeight"),10);for(let u=0;u<r.length;u++)t.pages.push({id:parseInt(r[u].getAttribute("id"),10)||0,file:r[u].getAttribute("file")});const l={};t.baseLineOffset=t.lineHeight-parseInt(s.getAttribute("base"),10);for(let u=0;u<o.length;u++){const c=o[u],h=parseInt(c.getAttribute("id"),10);let f=c.getAttribute("letter")??c.getAttribute("char")??String.fromCharCode(h);f==="space"&&(f=" "),l[h]=f,t.chars[f]={id:h,page:parseInt(c.getAttribute("page"),10)||0,x:parseInt(c.getAttribute("x"),10),y:parseInt(c.getAttribute("y"),10),width:parseInt(c.getAttribute("width"),10),height:parseInt(c.getAttribute("height"),10),xOffset:parseInt(c.getAttribute("xoffset"),10),yOffset:parseInt(c.getAttribute("yoffset"),10),xAdvance:parseInt(c.getAttribute("xadvance"),10),kerning:{}}}for(let u=0;u<a.length;u++){const c=parseInt(a[u].getAttribute("first"),10),h=parseInt(a[u].getAttribute("second"),10),f=parseInt(a[u].getAttribute("amount"),10);t.chars[l[h]].kerning[l[c]]=f}return t}},Pl={test(e){return typeof e=="string"&&e.includes("<font>")?Ml.test(vt.get().parseXML(e)):!1},parse(e){return Ml.parse(vt.get().parseXML(e))}},Zg=[".xml",".fnt"],Qg={extension:{type:q.CacheParser,name:"cacheBitmapFont"},test:e=>e instanceof Zu,getCacheableAssets(e,t){const n={};return e.forEach(s=>{n[s]=t,n[`${s}-bitmap`]=t}),n[`${t.fontFamily}-bitmap`]=t,n}},Jg={extension:{type:q.LoadParser,priority:Ve.Normal},name:"loadBitmapFont",test(e){return Zg.includes(Wt.extname(e).toLowerCase())},async testParse(e){return fr.test(e)||Pl.test(e)},async parse(e,t,n){const s=fr.test(e)?fr.parse(e):Pl.parse(e),{src:i}=t,{pages:r}=s,o=[],a=s.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let h=0;h<r.length;++h){const f=r[h].file;let d=Wt.join(Wt.dirname(i),f);d=Lr(d,i),o.push({src:d,data:a})}const l=await n.load(o),u=o.map(h=>l[h.src]);return new Zu({data:s,textures:u},i)},async load(e,t){return await(await vt.get().fetch(e)).text()},async unload(e,t,n){await Promise.all(e.pages.map(s=>n.unload(s.texture.source._sourceOrigin))),e.destroy()}};class tx{constructor(t,n=!1){this._loader=t,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=n}add(t){t.forEach(n=>{this._assetList.push(n)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;const t=[],n=Math.min(this._assetList.length,this._maxConcurrent);for(let s=0;s<n;s++)t.push(this._assetList.pop());await this._loader.load(t),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(t){this._isActive!==t&&(this._isActive=t,t&&!this._isLoading&&this._next())}}const ex={extension:{type:q.CacheParser,name:"cacheTextureArray"},test:e=>Array.isArray(e)&&e.every(t=>t instanceof rt),getCacheableAssets:(e,t)=>{const n={};return e.forEach(s=>{t.forEach((i,r)=>{n[s+(r===0?"":r+1)]=i})}),n}};async function Qu(e){if("Image"in globalThis)return new Promise(t=>{const n=new Image;n.onload=()=>{t(!0)},n.onerror=()=>{t(!1)},n.src=e});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{const t=await(await fetch(e)).blob();await createImageBitmap(t)}catch{return!1}return!0}return!1}const nx={extension:{type:q.DetectionParser,priority:1},test:async()=>Qu("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async e=>[...e,"avif"],remove:async e=>e.filter(t=>t!=="avif")},Tl=["png","jpg","jpeg"],sx={extension:{type:q.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async e=>[...e,...Tl],remove:async e=>e.filter(t=>!Tl.includes(t))},ix="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function Oo(e){return ix?!1:document.createElement("video").canPlayType(e)!==""}const rx={extension:{type:q.DetectionParser,priority:0},test:async()=>Oo("video/mp4"),add:async e=>[...e,"mp4","m4v"],remove:async e=>e.filter(t=>t!=="mp4"&&t!=="m4v")},ox={extension:{type:q.DetectionParser,priority:0},test:async()=>Oo("video/ogg"),add:async e=>[...e,"ogv"],remove:async e=>e.filter(t=>t!=="ogv")},ax={extension:{type:q.DetectionParser,priority:0},test:async()=>Oo("video/webm"),add:async e=>[...e,"webm"],remove:async e=>e.filter(t=>t!=="webm")},lx={extension:{type:q.DetectionParser,priority:0},test:async()=>Qu("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async e=>[...e,"webp"],remove:async e=>e.filter(t=>t!=="webp")};class cx{constructor(){this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(t,n,s)=>(this._parsersValidated=!1,t[n]=s,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(t,n){const s={promise:null,parser:null};return s.promise=(async()=>{var o,a;let i=null,r=null;if(n.loadParser&&(r=this._parserHash[n.loadParser],r||Tt(`[Assets] specified load parser "${n.loadParser}" not found while loading ${t}`)),!r){for(let l=0;l<this.parsers.length;l++){const u=this.parsers[l];if(u.load&&((o=u.test)!=null&&o.call(u,t,n,this))){r=u;break}}if(!r)return Tt(`[Assets] ${t} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}i=await r.load(t,n,this),s.parser=r;for(let l=0;l<this.parsers.length;l++){const u=this.parsers[l];u.parse&&u.parse&&await((a=u.testParse)==null?void 0:a.call(u,i,n,this))&&(i=await u.parse(i,n,this)||i,s.parser=u)}return i})(),s}async load(t,n){this._parsersValidated||this._validateParsers();let s=0;const i={},r=ni(t),o=re(t,u=>({alias:[u],src:u})),a=o.length,l=o.map(async u=>{const c=Wt.toAbsolute(u.src);if(!i[u.src])try{this.promiseCache[c]||(this.promiseCache[c]=this._getLoadPromiseAndParser(c,u)),i[u.src]=await this.promiseCache[c].promise,n&&n(++s/a)}catch(h){throw delete this.promiseCache[c],delete i[u.src],new Error(`[Loader.load] Failed to load ${c}.
${h}`)}});return await Promise.all(l),r?i[o[0].src]:i}async unload(t){const s=re(t,i=>({alias:[i],src:i})).map(async i=>{var a,l;const r=Wt.toAbsolute(i.src),o=this.promiseCache[r];if(o){const u=await o.promise;delete this.promiseCache[r],await((l=(a=o.parser)==null?void 0:a.unload)==null?void 0:l.call(a,u,i,this))}});await Promise.all(s)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(t=>t.name).reduce((t,n)=>(n.name?t[n.name]&&Tt(`[Assets] loadParser name conflict "${n.name}"`):Tt("[Assets] loadParser should have a name"),{...t,[n.name]:n}),{})}}function zn(e,t){if(Array.isArray(t)){for(const n of t)if(e.startsWith(`data:${n}`))return!0;return!1}return e.startsWith(`data:${t}`)}function Rn(e,t){const n=e.split("?")[0],s=Wt.extname(n).toLowerCase();return Array.isArray(t)?t.includes(s):s===t}const ux=".json",hx="application/json",fx={extension:{type:q.LoadParser,priority:Ve.Low},name:"loadJson",test(e){return zn(e,hx)||Rn(e,ux)},async load(e){return await(await vt.get().fetch(e)).json()}},dx=".txt",px="text/plain",mx={name:"loadTxt",extension:{type:q.LoadParser,priority:Ve.Low,name:"loadTxt"},test(e){return zn(e,px)||Rn(e,dx)},async load(e){return await(await vt.get().fetch(e)).text()}},gx=["normal","bold","100","200","300","400","500","600","700","800","900"],xx=[".ttf",".otf",".woff",".woff2"],vx=["font/ttf","font/otf","font/woff","font/woff2"],_x=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function yx(e){const t=Wt.extname(e),i=Wt.basename(e,t).replace(/(-|_)/g," ").toLowerCase().split(" ").map(a=>a.charAt(0).toUpperCase()+a.slice(1));let r=i.length>0;for(const a of i)if(!a.match(_x)){r=!1;break}let o=i.join(" ");return r||(o=`"${o.replace(/[\\"]/g,"\\$&")}"`),o}const bx=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function wx(e){return bx.test(e)?e:encodeURI(e)}const Ax={extension:{type:q.LoadParser,priority:Ve.Low},name:"loadWebFont",test(e){return zn(e,vx)||Rn(e,xx)},async load(e,t){var s,i,r;const n=vt.get().getFontFaceSet();if(n){const o=[],a=((s=t.data)==null?void 0:s.family)??yx(e),l=((r=(i=t.data)==null?void 0:i.weights)==null?void 0:r.filter(c=>gx.includes(c)))??["normal"],u=t.data??{};for(let c=0;c<l.length;c++){const h=l[c],f=new FontFace(a,`url(${wx(e)})`,{...u,weight:h});await f.load(),n.add(f),o.push(f)}return mt.set(`${a}-and-url`,{url:e,fontFaces:o}),o.length===1?o[0]:o}return Tt("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(e){(Array.isArray(e)?e:[e]).forEach(t=>{mt.remove(t.family),vt.get().getFontFaceSet().delete(t)})}};function Lo(e,t=1){var s;const n=(s=Bn.RETINA_PREFIX)==null?void 0:s.exec(e);return n?parseFloat(n[1]):t}function jo(e,t,n){e.label=n,e._sourceOrigin=n;const s=new rt({source:e,label:n}),i=()=>{delete t.promiseCache[n],mt.has(n)&&mt.remove(n)};return s.source.once("destroy",()=>{t.promiseCache[n]&&(Tt("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),i())}),s.once("destroy",()=>{e.destroyed||(Tt("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),i())}),s}const Cx=".svg",Sx="image/svg+xml",Mx={extension:{type:q.LoadParser,priority:Ve.Low,name:"loadSVG"},name:"loadSVG",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(e){return zn(e,Sx)||Rn(e,Cx)},async load(e,t,n){return t.data.parseAsGraphicsContext??this.config.parseAsGraphicsContext?Tx(e):Px(e,t,n,this.config.crossOrigin)},unload(e){e.destroy(!0)}};async function Px(e,t,n,s){var m,y,v;const r=await(await vt.get().fetch(e)).blob(),o=URL.createObjectURL(r),a=new Image;a.src=o,a.crossOrigin=s,await a.decode(),URL.revokeObjectURL(o);const l=document.createElement("canvas"),u=l.getContext("2d"),c=((m=t.data)==null?void 0:m.resolution)||Lo(e),h=((y=t.data)==null?void 0:y.width)??a.width,f=((v=t.data)==null?void 0:v.height)??a.height;l.width=h*c,l.height=f*c,u.drawImage(a,0,0,h*c,f*c);const{parseAsGraphicsContext:d,...p}=t.data,g=new Fn({resource:l,alphaMode:"premultiply-alpha-on-upload",resolution:c,...p});return jo(g,n,e)}async function Tx(e){const n=await(await vt.get().fetch(e)).text(),s=new Yt;return s.svg(n),s}const kx=`(function () {
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
`;let An=null,Qr=class{constructor(){An||(An=URL.createObjectURL(new Blob([kx],{type:"application/javascript"}))),this.worker=new Worker(An)}};Qr.revokeObjectURL=function(){An&&(URL.revokeObjectURL(An),An=null)};const Ex=`(function () {
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
`;let Cn=null;class Ju{constructor(){Cn||(Cn=URL.createObjectURL(new Blob([Ex],{type:"application/javascript"}))),this.worker=new Worker(Cn)}}Ju.revokeObjectURL=function(){Cn&&(URL.revokeObjectURL(Cn),Cn=null)};let kl=0,dr;class Ix{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(t=>{const{worker:n}=new Qr;n.addEventListener("message",s=>{n.terminate(),Qr.revokeObjectURL(),t(s.data)})}),this._isImageBitmapSupported)}loadImageBitmap(t){return this._run("loadImageBitmap",[t])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){dr===void 0&&(dr=navigator.hardwareConcurrency||4);let t=this._workerPool.pop();return!t&&this._createdWorkers<dr&&(this._createdWorkers++,t=new Ju().worker,t.addEventListener("message",n=>{this._complete(n.data),this._returnWorker(n.target),this._next()})),t}_returnWorker(t){this._workerPool.push(t)}_complete(t){t.error!==void 0?this._resolveHash[t.uuid].reject(t.error):this._resolveHash[t.uuid].resolve(t.data),this._resolveHash[t.uuid]=null}async _run(t,n){await this._initWorkers();const s=new Promise((i,r)=>{this._queue.push({id:t,arguments:n,resolve:i,reject:r})});return this._next(),s}_next(){if(!this._queue.length)return;const t=this._getWorker();if(!t)return;const n=this._queue.pop(),s=n.id;this._resolveHash[kl]={resolve:n.resolve,reject:n.reject},t.postMessage({data:n.arguments,uuid:kl++,id:s})}}const El=new Ix,Fx=[".jpeg",".jpg",".png",".webp",".avif"],Bx=["image/jpeg","image/png","image/webp","image/avif"];async function zx(e){const t=await vt.get().fetch(e);if(!t.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${e}: ${t.status} ${t.statusText}`);const n=await t.blob();return await createImageBitmap(n)}const th={name:"loadTextures",extension:{type:q.LoadParser,priority:Ve.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(e){return zn(e,Bx)||Rn(e,Fx)},async load(e,t,n){var r;let s=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await El.isImageBitmapSupported()?s=await El.loadImageBitmap(e):s=await zx(e):s=await new Promise(o=>{s=new Image,s.crossOrigin=this.config.crossOrigin,s.src=e,s.complete?o(s):s.onload=()=>{o(s)}});const i=new Fn({resource:s,alphaMode:"premultiply-alpha-on-upload",resolution:((r=t.data)==null?void 0:r.resolution)||Lo(e),...t.data});return jo(i,n,e)},unload(e){e.destroy(!0)}},eh=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],Rx=eh.map(e=>`video/${e.substring(1)}`);function Ox(e,t,n){n===void 0&&!t.startsWith("data:")?e.crossOrigin=jx(t):n!==!1&&(e.crossOrigin=typeof n=="string"?n:"anonymous")}function Lx(e){return new Promise((t,n)=>{e.addEventListener("canplaythrough",s),e.addEventListener("error",i),e.load();function s(){r(),t()}function i(o){r(),n(o)}function r(){e.removeEventListener("canplaythrough",s),e.removeEventListener("error",i)}})}function jx(e,t=globalThis.location){if(e.startsWith("data:"))return"";t=t||globalThis.location;const n=new URL(e,document.baseURI);return n.hostname!==t.hostname||n.port!==t.port||n.protocol!==t.protocol?"anonymous":""}const Nx={name:"loadVideo",extension:{type:q.LoadParser,name:"loadVideo"},test(e){const t=zn(e,Rx),n=Rn(e,eh);return t||n},async load(e,t,n){var l,u;const s={...Ys.defaultOptions,resolution:((l=t.data)==null?void 0:l.resolution)||Lo(e),alphaMode:((u=t.data)==null?void 0:u.alphaMode)||await du(),...t.data},i=document.createElement("video"),r={preload:s.autoLoad!==!1?"auto":void 0,"webkit-playsinline":s.playsinline!==!1?"":void 0,playsinline:s.playsinline!==!1?"":void 0,muted:s.muted===!0?"":void 0,loop:s.loop===!0?"":void 0,autoplay:s.autoPlay!==!1?"":void 0};Object.keys(r).forEach(c=>{const h=r[c];h!==void 0&&i.setAttribute(c,h)}),s.muted===!0&&(i.muted=!0),Ox(i,e,s.crossorigin);const o=document.createElement("source");let a;if(e.startsWith("data:"))a=e.slice(5,e.indexOf(";"));else if(!e.startsWith("blob:")){const c=e.split("?")[0].slice(e.lastIndexOf(".")+1).toLowerCase();a=Ys.MIME_TYPES[c]||`video/${c}`}return o.src=e,a&&(o.type=a),new Promise(c=>{const h=async()=>{const f=new Ys({...s,resource:i});i.removeEventListener("canplay",h),t.data.preload&&await Lx(i),c(jo(f,n,e))};i.addEventListener("canplay",h),i.appendChild(o)})},unload(e){e.destroy(!0)}},nh={extension:{type:q.ResolveParser,name:"resolveTexture"},test:th.test,parse:e=>{var t;return{resolution:parseFloat(((t=Bn.RETINA_PREFIX.exec(e))==null?void 0:t[1])??"1"),format:e.split(".").pop(),src:e}}},Ux={extension:{type:q.ResolveParser,priority:-2,name:"resolveJson"},test:e=>Bn.RETINA_PREFIX.test(e)&&e.endsWith(".json"),parse:nh.parse};class Dx{constructor(){this._detections=[],this._initialized=!1,this.resolver=new Bn,this.loader=new cx,this.cache=mt,this._backgroundLoader=new tx(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(t={}){var r,o;if(this._initialized){Tt("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,t.defaultSearchParams&&this.resolver.setDefaultSearchParams(t.defaultSearchParams),t.basePath&&(this.resolver.basePath=t.basePath),t.bundleIdentifier&&this.resolver.setBundleIdentifier(t.bundleIdentifier),t.manifest){let a=t.manifest;typeof a=="string"&&(a=await this.load(a)),this.resolver.addManifest(a)}const n=((r=t.texturePreference)==null?void 0:r.resolution)??1,s=typeof n=="number"?[n]:n,i=await this._detectFormats({preferredFormats:(o=t.texturePreference)==null?void 0:o.format,skipDetections:t.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:i,resolution:s}}),t.preferences&&this.setPreferences(t.preferences)}add(t){this.resolver.add(t)}async load(t,n){this._initialized||await this.init();const s=ni(t),i=re(t).map(a=>{if(typeof a!="string"){const l=this.resolver.getAlias(a);return l.some(u=>!this.resolver.hasKey(u))&&this.add(a),Array.isArray(l)?l[0]:l}return this.resolver.hasKey(a)||this.add({alias:a,src:a}),a}),r=this.resolver.resolve(i),o=await this._mapLoadToResolve(r,n);return s?o[i[0]]:o}addBundle(t,n){this.resolver.addBundle(t,n)}async loadBundle(t,n){this._initialized||await this.init();let s=!1;typeof t=="string"&&(s=!0,t=[t]);const i=this.resolver.resolveBundle(t),r={},o=Object.keys(i);let a=0,l=0;const u=()=>{n==null||n(++a/l)},c=o.map(h=>{const f=i[h];return l+=Object.keys(f).length,this._mapLoadToResolve(f,u).then(d=>{r[h]=d})});return await Promise.all(c),s?r[t[0]]:r}async backgroundLoad(t){this._initialized||await this.init(),typeof t=="string"&&(t=[t]);const n=this.resolver.resolve(t);this._backgroundLoader.add(Object.values(n))}async backgroundLoadBundle(t){this._initialized||await this.init(),typeof t=="string"&&(t=[t]);const n=this.resolver.resolveBundle(t);Object.values(n).forEach(s=>{this._backgroundLoader.add(Object.values(s))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(t){if(typeof t=="string")return mt.get(t);const n={};for(let s=0;s<t.length;s++)n[s]=mt.get(t[s]);return n}async _mapLoadToResolve(t,n){const s=[...new Set(Object.values(t))];this._backgroundLoader.active=!1;const i=await this.loader.load(s,n);this._backgroundLoader.active=!0;const r={};return s.forEach(o=>{const a=i[o.src],l=[o.src];o.alias&&l.push(...o.alias),l.forEach(u=>{r[u]=a}),mt.set(l,a)}),r}async unload(t){this._initialized||await this.init();const n=re(t).map(i=>typeof i!="string"?i.src:i),s=this.resolver.resolve(n);await this._unloadFromResolved(s)}async unloadBundle(t){this._initialized||await this.init(),t=re(t);const n=this.resolver.resolveBundle(t),s=Object.keys(n).map(i=>this._unloadFromResolved(n[i]));await Promise.all(s)}async _unloadFromResolved(t){const n=Object.values(t);n.forEach(s=>{mt.remove(s.src)}),await this.loader.unload(n)}async _detectFormats(t){let n=[];t.preferredFormats&&(n=Array.isArray(t.preferredFormats)?t.preferredFormats:[t.preferredFormats]);for(const s of t.detections)t.skipDetections||await s.test()?n=await s.add(n):t.skipDetections||(n=await s.remove(n));return n=n.filter((s,i)=>n.indexOf(s)===i),n}get detections(){return this._detections}setPreferences(t){this.loader.parsers.forEach(n=>{n.config&&Object.keys(n.config).filter(s=>s in t).forEach(s=>{n.config[s]=t[s]})})}}const Yn=new Dx;Jt.handleByList(q.LoadParser,Yn.loader.parsers).handleByList(q.ResolveParser,Yn.resolver.parsers).handleByList(q.CacheParser,Yn.cache.parsers).handleByList(q.DetectionParser,Yn.detections);Jt.add(ex,sx,nx,lx,rx,ox,ax,fx,mx,Ax,Mx,th,Nx,Jg,Qg,nh,Ux);const Il={loader:q.LoadParser,resolver:q.ResolveParser,cache:q.CacheParser,detection:q.DetectionParser};Jt.handle(q.Asset,e=>{const t=e.ref;Object.entries(Il).filter(([n])=>!!t[n]).forEach(([n,s])=>Jt.add(Object.assign(t[n],{extension:t[n].extension??s})))},e=>{const t=e.ref;Object.keys(Il).filter(n=>!!t[n]).forEach(n=>Jt.remove(t[n]))});class vs extends Rt{constructor(t){t instanceof Yt&&(t={context:t});const{context:n,roundPixels:s,...i}=t||{};super({label:"Graphics",...i}),this.canBundle=!0,this.renderPipeId="graphics",this._roundPixels=0,n?this._context=n:this._context=this._ownedContext=new Yt,this._context.on("update",this.onViewUpdate,this),this.allowChildren=!1,this.roundPixels=s??!1}set context(t){t!==this._context&&(this._context.off("update",this.onViewUpdate,this),this._context=t,this._context.on("update",this.onViewUpdate,this),this.onViewUpdate())}get context(){return this._context}get bounds(){return this._context.bounds}addBounds(t){t.addBounds(this._context.bounds)}containsPoint(t){return this._context.containsPoint(t)}get roundPixels(){return!!this._roundPixels}set roundPixels(t){this._roundPixels=t?1:0}onViewUpdate(){if(this._didChangeId+=4096,this._didGraphicsUpdate=!0,this.didViewUpdate)return;this.didViewUpdate=!0;const t=this.renderGroup||this.parentRenderGroup;t&&t.onChildViewUpdate(this)}destroy(t){this._ownedContext&&!t?this._ownedContext.destroy(t):(t===!0||(t==null?void 0:t.context)===!0)&&this._context.destroy(t),this._ownedContext=null,this._context=null,super.destroy(t)}_callContextMethod(t,n){return this.context[t](...n),this}setFillStyle(...t){return this._callContextMethod("setFillStyle",t)}setStrokeStyle(...t){return this._callContextMethod("setStrokeStyle",t)}fill(...t){return this._callContextMethod("fill",t)}stroke(...t){return this._callContextMethod("stroke",t)}texture(...t){return this._callContextMethod("texture",t)}beginPath(){return this._callContextMethod("beginPath",[])}cut(){return this._callContextMethod("cut",[])}arc(...t){return this._callContextMethod("arc",t)}arcTo(...t){return this._callContextMethod("arcTo",t)}arcToSvg(...t){return this._callContextMethod("arcToSvg",t)}bezierCurveTo(...t){return this._callContextMethod("bezierCurveTo",t)}closePath(){return this._callContextMethod("closePath",[])}ellipse(...t){return this._callContextMethod("ellipse",t)}circle(...t){return this._callContextMethod("circle",t)}path(...t){return this._callContextMethod("path",t)}lineTo(...t){return this._callContextMethod("lineTo",t)}moveTo(...t){return this._callContextMethod("moveTo",t)}quadraticCurveTo(...t){return this._callContextMethod("quadraticCurveTo",t)}rect(...t){return this._callContextMethod("rect",t)}roundRect(...t){return this._callContextMethod("roundRect",t)}poly(...t){return this._callContextMethod("poly",t)}regularPoly(...t){return this._callContextMethod("regularPoly",t)}roundPoly(...t){return this._callContextMethod("roundPoly",t)}roundShape(...t){return this._callContextMethod("roundShape",t)}filletRect(...t){return this._callContextMethod("filletRect",t)}chamferRect(...t){return this._callContextMethod("chamferRect",t)}star(...t){return this._callContextMethod("star",t)}svg(...t){return this._callContextMethod("svg",t)}restore(...t){return this._callContextMethod("restore",t)}save(){return this._callContextMethod("save",[])}getTransform(){return this.context.getTransform()}resetTransform(){return this._callContextMethod("resetTransform",[])}rotateTransform(...t){return this._callContextMethod("rotate",t)}scaleTransform(...t){return this._callContextMethod("scale",t)}setTransform(...t){return this._callContextMethod("setTransform",t)}transform(...t){return this._callContextMethod("transform",t)}translateTransform(...t){return this._callContextMethod("translate",t)}clear(){return this._callContextMethod("clear",[])}get fillStyle(){return this._context.fillStyle}set fillStyle(t){this._context.fillStyle=t}get strokeStyle(){return this._context.strokeStyle}set strokeStyle(t){this._context.strokeStyle=t}clone(t=!1){return t?new vs(this._context.clone()):(this._ownedContext=null,new vs(this._context))}lineStyle(t,n,s){ut(ct,"Graphics#lineStyle is no longer needed. Use Graphics#setStrokeStyle to set the stroke style.");const i={};return t&&(i.width=t),n&&(i.color=n),s&&(i.alpha=s),this.context.strokeStyle=i,this}beginFill(t,n){ut(ct,"Graphics#beginFill is no longer needed. Use Graphics#fill to fill the shape with the desired style.");const s={};return t&&(s.color=t),n&&(s.alpha=n),this.context.fillStyle=s,this}endFill(){ut(ct,"Graphics#endFill is no longer needed. Use Graphics#fill to fill the shape with the desired style."),this.context.fill();const t=this.context.strokeStyle;return(t.width!==Yt.defaultStrokeStyle.width||t.color!==Yt.defaultStrokeStyle.color||t.alpha!==Yt.defaultStrokeStyle.alpha)&&this.context.stroke(),this}drawCircle(...t){return ut(ct,"Graphics#drawCircle has been renamed to Graphics#circle"),this._callContextMethod("circle",t)}drawEllipse(...t){return ut(ct,"Graphics#drawEllipse has been renamed to Graphics#ellipse"),this._callContextMethod("ellipse",t)}drawPolygon(...t){return ut(ct,"Graphics#drawPolygon has been renamed to Graphics#poly"),this._callContextMethod("poly",t)}drawRect(...t){return ut(ct,"Graphics#drawRect has been renamed to Graphics#rect"),this._callContextMethod("rect",t)}drawRoundedRect(...t){return ut(ct,"Graphics#drawRoundedRect has been renamed to Graphics#roundRect"),this._callContextMethod("roundRect",t)}drawStar(...t){return ut(ct,"Graphics#drawStar has been renamed to Graphics#star"),this._callContextMethod("star",t)}}Jt.add(q0,K0);function Gx(e,t,n){var s={},i=s.noTrailing,r=i===void 0?!1:i,o=s.noLeading,a=o===void 0?!1:o,l=s.debounceMode,u=l===void 0?void 0:l,c,h=!1,f=0;function d(){c&&clearTimeout(c)}function p(m){var y=m||{},v=y.upcomingOnly,x=v===void 0?!1:v;d(),h=!x}function g(){for(var m=arguments.length,y=new Array(m),v=0;v<m;v++)y[v]=arguments[v];var x=this,w=Date.now()-f;if(h)return;function E(){f=Date.now(),t.apply(x,y)}function M(){c=void 0}!a&&u&&!c&&E(),d(),u===void 0&&w>e?a?(f=Date.now(),r||(c=setTimeout(u?M:E,e))):E():r!==!0&&(c=setTimeout(u?M:E,u===void 0?e-w:e))}return g.cancel=p,g}let No=[],Jr=!1,pr=function(){Jr||(Jr=!0,window.requestAnimationFrame?window.requestAnimationFrame(Fl):setTimeout(Fl,66))},Fl=function(){No.forEach(function(e){e(this)}),Jr=!1},Hx=function(e){e&&No.push(e)};class $x{constructor(t,n){this.frameRate=n,No.length||window.addEventListener("resize",Gx(this.frameRate,pr)),Hx(t)}init(){pr()}destroy(){window.removeEventListener("resize",pr)}}const Hn=window.devicePixelRatio;class Wx{constructor(t){this.stage=t.stage,this.size=new xt(window.innerWidth*Hn,window.innerHeight*Hn),this.mouse=new xt(0,0),this.padding=new xt,this.vertex=t.vertex,this.init(t.fragment,this.vertex,t.uniforms||{}),this.fill(),this.resize(),this.bind()}init(t,n,s){const i=fs.from({fragment:t,vertex:n});this.filter=new Mu({glProgram:i,resolution:Hn,resources:{localUniforms:Object.assign({u_resolution:{value:this.size,type:"vec2<f32>"},u_mouse:{value:this.u_mouse,type:"vec2<f32>"}},s),timeUniforms:{u_time:{value:0,type:"f32"},u_frame:{value:0,type:"f32"}}}})}fill(){this.background=new vs,this.background.rect(0,0,window.innerWidth,window.innerHeight),this.background.fill({color:0}),this.stage.addChild(this.background)}bind(){this.ResizeHelper=new $x(t=>{this.resize()})}setFragment(t){const n=fs.from({fragment:t,vertex:this.vertex});this.filter.glProgram=n}resize(){this.size.set(window.innerWidth*Hn,window.innerHeight*Hn),this.filter.resources.localUniforms.uniforms.u_resolution=this.size,this.background.width=this.size.x,this.background.height=this.size.y}getFilter(){return this.filter}destroy(){this.filter.destroy(),this.ResizeHelper.destroy()}}var Vx=`precision highp float;

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
}`;const sh=(e,t)=>{const n=e.__vccOpts||e;for(const[s,i]of t)n[s]=i;return n},Xx={__name:"Shader",props:{shader:String},setup(e){se("WEBGL.NANONUM.COM");const t=e,n=se(!1);let s;const i=a=>{s.getFilter().resources.timeUniforms.uniforms.u_time+=.01*a.deltaTime},r=a=>{s.getFilter().resources.localUniforms.uniforms.u_mouse=[a.clientX,a.clientY]};async function o(){window.background=new To,await window.background.init({id:"canvas_background",background:"#000",backgroundAlpha:0,resizeTo:window,resolution:window.devicePixelRatio});const a=t.shader??`#version 300 es
    precision highp float;
    uniform float u_time;// 0-1
    out vec4 fragColor;
    void main(){
      fragColor = vec4(0.0, 0.0, pow(sin(u_time * 4.41) * 0.5 + 0.5, .4), 1.0);
    }`;s=new Wx({stage:window.background.stage,fragment:a,vertex:Vx,uniforms:{}}),window.background.stage.filters=[s.getFilter()],window.background.ticker.maxFPS=60,window.background.ticker.add(i),window.background.canvas.setAttribute("id","canvas_app"),document.body.appendChild(window.background.canvas),window.addEventListener("mousemove",r),n.value=!0}return In(()=>{o(t.shader)}),pi(()=>{n.value=!1,window.background.ticker&&window.background.ticker.remove(i),window.background&&window.background.destroy({removeView:!0,stageOptions:{children:!0,texture:!0,baseTexture:!0}})}),mi(()=>{s.destroy(),window.background=null,window.removeEventListener("mousemove",r)}),wn(()=>t.shader,()=>{n.value&&s.setFragment(t.shader)}),(a,l)=>null}},Yx=sh(Xx,[["__scopeId","data-v-858c7815"]]);var qx=`precision highp float;

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
}`;const Bl=(e,t)=>{e.x=t.x,e.y=t.y,e.width=t.width,e.height=t.height,e.top=t.top,e.right=t.right,e.bottom=t.bottom,e.left=t.left},zl=e=>({x:e.x,y:e.y,width:e.width,height:e.height,top:e.top,right:e.right,bottom:e.bottom,left:e.left}),Kx={class:"dev"},Zx=["width","height"],Qx={__name:"Thumbnail",props:{shader:String,alt:String,saturation:{type:Number,default:1},show:Boolean,selected:Boolean,active:Boolean,width:Number,height:Number,className:String},setup(e){const t=e,n=se();let s,i;const r={};let o;const a=new Tn,l=c=>{n.value&&(Bl(r,zl(n.value.getBoundingClientRect())),s.x=r.x,s.y=r.y,a.x=r.x,a.y=r.y,a.width=r.width,a.height=r.height),(t.active===!0||!t.selected)&&(o.resources.timeUniforms.uniforms.u_time+=.01*c.deltaTime),o.resources.localUniforms.uniforms.u_position.y=r.y,o.resources.localUniforms.uniforms.u_position.x=r.x,o.resources.localUniforms.uniforms.u_posteffect_mix=!t.selected||t.active?1:t.saturation},u=c=>{const h=`
    vec2 aPosition = vec2(
      (gl_FragCoord.x - u_position.x) * u_resolution.x / u_posteffect_viewport.x  ,
      (gl_FragCoord.y - (u_resolution.y - u_position.y ) + u_posteffect_viewport.x) * u_resolution.y / u_posteffect_viewport.x  
    );`;let f=c;return f=f.replace(/gl_FragCoord/ig,"aPosition"),f=f.replace(/uniform[\s]*vec2[\s]*u_resolution;/ig,`
    uniform vec2 u_resolution;
    uniform vec2 u_position;
    uniform vec2 u_posteffect_viewport;
    uniform float u_posteffect_mix;
  `),f=f.replace(/void main\([void]*\)[\s]*{/ig,`void main(){${h}`),f=f.replace(/.*}$/,"fragColor.rgb=mix(vec3(min(1.0,fragColor.r+fragColor.g+fragColor.b))*0.3,fragColor.rgb,u_posteffect_mix);}"),f};return In(async()=>{await Yn.load("./vite.svg"),Bl(r,zl(n.value.getBoundingClientRect())),o=new Mu({glProgram:fs.from({fragment:u(t.shader),vertex:qx}),resolution:1,resources:{localUniforms:{u_resolution:{value:new xt(window.innerHeight,window.innerHeight),type:"vec2<f32>"},u_position:{value:new xt(0,0),type:"vec2<f32>"},u_posteffect_viewport:{value:new xt(r.width,r.height),type:"vec2<f32>"},u_posteffect_mix:{value:0,type:"f32"}},timeUniforms:{u_time:{value:0,type:"f32"}}}}),a.x=r.x,a.y=r.y,a.width=r.width,a.height=r.height,s=new vs,i=s.circle(r.width/2,r.width/2,r.width/2),s.fill({color:0}),a.mask=s,a.filters=[o],window.ui.stage.addChild(a),window.ui.stage.addChild(s),o.resources.localUniforms.uniforms.u_position.y=r.y,o.resources.localUniforms.uniforms.u_position.x=r.x,window.ui.ticker&&window.ui.ticker.add(l),window.addEventListener("resize",c=>{o.resources.localUniforms.uniforms.u_resolution.x=window.innerHeight,o.resources.localUniforms.uniforms.u_resolution.y=window.innerHeight,i.x=r.width/2,i.y=r.width/2,i.width=r.width,i.height=r.height,a.width=r.width,a.height=r.height,console.log(r.width)})}),wn(()=>t.show,c=>{a.visible=c}),mi(()=>{window.ui.ticker&&window.ui.ticker.remove(l),a.destroy()}),(c,h)=>(ge(),ze(Lt,null,[ie("div",Kx,Ds(e.active),1),ie("div",{class:_s("js-nnfxline"),ref_key:"el",ref:n,width:e.width,height:e.height},null,8,Zx)],64))}},Jx=sh(Qx,[["__scopeId","data-v-ddf272e1"]]);var ih={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},Uo={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},tv=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],ri={CSS:{},springs:{}};function _e(e,t,n){return Math.min(Math.max(e,t),n)}function is(e,t){return e.indexOf(t)>-1}function mr(e,t){return e.apply(null,t)}var H={arr:function(e){return Array.isArray(e)},obj:function(e){return is(Object.prototype.toString.call(e),"Object")},pth:function(e){return H.obj(e)&&e.hasOwnProperty("totalLength")},svg:function(e){return e instanceof SVGElement},inp:function(e){return e instanceof HTMLInputElement},dom:function(e){return e.nodeType||H.svg(e)},str:function(e){return typeof e=="string"},fnc:function(e){return typeof e=="function"},und:function(e){return typeof e>"u"},nil:function(e){return H.und(e)||e===null},hex:function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)},rgb:function(e){return/^rgb/.test(e)},hsl:function(e){return/^hsl/.test(e)},col:function(e){return H.hex(e)||H.rgb(e)||H.hsl(e)},key:function(e){return!ih.hasOwnProperty(e)&&!Uo.hasOwnProperty(e)&&e!=="targets"&&e!=="keyframes"}};function rh(e){var t=/\(([^)]+)\)/.exec(e);return t?t[1].split(",").map(function(n){return parseFloat(n)}):[]}function oh(e,t){var n=rh(e),s=_e(H.und(n[0])?1:n[0],.1,100),i=_e(H.und(n[1])?100:n[1],.1,100),r=_e(H.und(n[2])?10:n[2],.1,100),o=_e(H.und(n[3])?0:n[3],.1,100),a=Math.sqrt(i/s),l=r/(2*Math.sqrt(i*s)),u=l<1?a*Math.sqrt(1-l*l):0,c=1,h=l<1?(l*a+-o)/u:-o+a;function f(p){var g=t?t*p/1e3:p;return l<1?g=Math.exp(-g*l*a)*(c*Math.cos(u*g)+h*Math.sin(u*g)):g=(c+h*g)*Math.exp(-g*a),p===0||p===1?p:1-g}function d(){var p=ri.springs[e];if(p)return p;for(var g=1/6,m=0,y=0;;)if(m+=g,f(m)===1){if(y++,y>=16)break}else y=0;var v=m*g*1e3;return ri.springs[e]=v,v}return t?f:d}function ev(e){return e===void 0&&(e=10),function(t){return Math.ceil(_e(t,1e-6,1)*e)*(1/e)}}var nv=function(){var e=11,t=1/(e-1);function n(c,h){return 1-3*h+3*c}function s(c,h){return 3*h-6*c}function i(c){return 3*c}function r(c,h,f){return((n(h,f)*c+s(h,f))*c+i(h))*c}function o(c,h,f){return 3*n(h,f)*c*c+2*s(h,f)*c+i(h)}function a(c,h,f,d,p){var g,m,y=0;do m=h+(f-h)/2,g=r(m,d,p)-c,g>0?f=m:h=m;while(Math.abs(g)>1e-7&&++y<10);return m}function l(c,h,f,d){for(var p=0;p<4;++p){var g=o(h,f,d);if(g===0)return h;var m=r(h,f,d)-c;h-=m/g}return h}function u(c,h,f,d){if(!(0<=c&&c<=1&&0<=f&&f<=1))return;var p=new Float32Array(e);if(c!==h||f!==d)for(var g=0;g<e;++g)p[g]=r(g*t,c,f);function m(y){for(var v=0,x=1,w=e-1;x!==w&&p[x]<=y;++x)v+=t;--x;var E=(y-p[x])/(p[x+1]-p[x]),M=v+E*t,z=o(M,c,f);return z>=.001?l(y,M,c,f):z===0?M:a(y,v,v+t,c,f)}return function(y){return c===h&&f===d||y===0||y===1?y:r(m(y),h,d)}}return u}(),ah=function(){var e={linear:function(){return function(s){return s}}},t={Sine:function(){return function(s){return 1-Math.cos(s*Math.PI/2)}},Expo:function(){return function(s){return s?Math.pow(2,10*s-10):0}},Circ:function(){return function(s){return 1-Math.sqrt(1-s*s)}},Back:function(){return function(s){return s*s*(3*s-2)}},Bounce:function(){return function(s){for(var i,r=4;s<((i=Math.pow(2,--r))-1)/11;);return 1/Math.pow(4,3-r)-7.5625*Math.pow((i*3-2)/22-s,2)}},Elastic:function(s,i){s===void 0&&(s=1),i===void 0&&(i=.5);var r=_e(s,1,10),o=_e(i,.1,2);return function(a){return a===0||a===1?a:-r*Math.pow(2,10*(a-1))*Math.sin((a-1-o/(Math.PI*2)*Math.asin(1/r))*(Math.PI*2)/o)}}},n=["Quad","Cubic","Quart","Quint"];return n.forEach(function(s,i){t[s]=function(){return function(r){return Math.pow(r,i+2)}}}),Object.keys(t).forEach(function(s){var i=t[s];e["easeIn"+s]=i,e["easeOut"+s]=function(r,o){return function(a){return 1-i(r,o)(1-a)}},e["easeInOut"+s]=function(r,o){return function(a){return a<.5?i(r,o)(a*2)/2:1-i(r,o)(a*-2+2)/2}},e["easeOutIn"+s]=function(r,o){return function(a){return a<.5?(1-i(r,o)(1-a*2))/2:(i(r,o)(a*2-1)+1)/2}}}),e}();function Do(e,t){if(H.fnc(e))return e;var n=e.split("(")[0],s=ah[n],i=rh(e);switch(n){case"spring":return oh(e,t);case"cubicBezier":return mr(nv,i);case"steps":return mr(ev,i);default:return mr(s,i)}}function lh(e){try{var t=document.querySelectorAll(e);return t}catch{return}}function Ai(e,t){for(var n=e.length,s=arguments.length>=2?arguments[1]:void 0,i=[],r=0;r<n;r++)if(r in e){var o=e[r];t.call(s,o,r,e)&&i.push(o)}return i}function Ci(e){return e.reduce(function(t,n){return t.concat(H.arr(n)?Ci(n):n)},[])}function Rl(e){return H.arr(e)?e:(H.str(e)&&(e=lh(e)||e),e instanceof NodeList||e instanceof HTMLCollection?[].slice.call(e):[e])}function Go(e,t){return e.some(function(n){return n===t})}function Ho(e){var t={};for(var n in e)t[n]=e[n];return t}function to(e,t){var n=Ho(e);for(var s in e)n[s]=t.hasOwnProperty(s)?t[s]:e[s];return n}function Si(e,t){var n=Ho(e);for(var s in t)n[s]=H.und(e[s])?t[s]:e[s];return n}function sv(e){var t=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e);return t?"rgba("+t[1]+",1)":e}function iv(e){var t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,n=e.replace(t,function(a,l,u,c){return l+l+u+u+c+c}),s=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n),i=parseInt(s[1],16),r=parseInt(s[2],16),o=parseInt(s[3],16);return"rgba("+i+","+r+","+o+",1)"}function rv(e){var t=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),n=parseInt(t[1],10)/360,s=parseInt(t[2],10)/100,i=parseInt(t[3],10)/100,r=t[4]||1;function o(f,d,p){return p<0&&(p+=1),p>1&&(p-=1),p<1/6?f+(d-f)*6*p:p<1/2?d:p<2/3?f+(d-f)*(2/3-p)*6:f}var a,l,u;if(s==0)a=l=u=i;else{var c=i<.5?i*(1+s):i+s-i*s,h=2*i-c;a=o(h,c,n+1/3),l=o(h,c,n),u=o(h,c,n-1/3)}return"rgba("+a*255+","+l*255+","+u*255+","+r+")"}function ov(e){if(H.rgb(e))return sv(e);if(H.hex(e))return iv(e);if(H.hsl(e))return rv(e)}function Se(e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);if(t)return t[1]}function av(e){if(is(e,"translate")||e==="perspective")return"px";if(is(e,"rotate")||is(e,"skew"))return"deg"}function eo(e,t){return H.fnc(e)?e(t.target,t.id,t.total):e}function ye(e,t){return e.getAttribute(t)}function $o(e,t,n){var s=Se(t);if(Go([n,"deg","rad","turn"],s))return t;var i=ri.CSS[t+n];if(!H.und(i))return i;var r=100,o=document.createElement(e.tagName),a=e.parentNode&&e.parentNode!==document?e.parentNode:document.body;a.appendChild(o),o.style.position="absolute",o.style.width=r+n;var l=r/o.offsetWidth;a.removeChild(o);var u=l*parseFloat(t);return ri.CSS[t+n]=u,u}function ch(e,t,n){if(t in e.style){var s=t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),i=e.style[t]||getComputedStyle(e).getPropertyValue(s)||"0";return n?$o(e,i,n):i}}function Wo(e,t){if(H.dom(e)&&!H.inp(e)&&(!H.nil(ye(e,t))||H.svg(e)&&e[t]))return"attribute";if(H.dom(e)&&Go(tv,t))return"transform";if(H.dom(e)&&t!=="transform"&&ch(e,t))return"css";if(e[t]!=null)return"object"}function uh(e){if(H.dom(e)){for(var t=e.style.transform||"",n=/(\w+)\(([^)]*)\)/g,s=new Map,i;i=n.exec(t);)s.set(i[1],i[2]);return s}}function lv(e,t,n,s){var i=is(t,"scale")?1:0+av(t),r=uh(e).get(t)||i;return n&&(n.transforms.list.set(t,r),n.transforms.last=t),s?$o(e,r,s):r}function Vo(e,t,n,s){switch(Wo(e,t)){case"transform":return lv(e,t,s,n);case"css":return ch(e,t,n);case"attribute":return ye(e,t);default:return e[t]||0}}function Xo(e,t){var n=/^(\*=|\+=|-=)/.exec(e);if(!n)return e;var s=Se(e)||0,i=parseFloat(t),r=parseFloat(e.replace(n[0],""));switch(n[0][0]){case"+":return i+r+s;case"-":return i-r+s;case"*":return i*r+s}}function hh(e,t){if(H.col(e))return ov(e);if(/\s/g.test(e))return e;var n=Se(e),s=n?e.substr(0,e.length-n.length):e;return t?s+t:s}function Yo(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function cv(e){return Math.PI*2*ye(e,"r")}function uv(e){return ye(e,"width")*2+ye(e,"height")*2}function hv(e){return Yo({x:ye(e,"x1"),y:ye(e,"y1")},{x:ye(e,"x2"),y:ye(e,"y2")})}function fh(e){for(var t=e.points,n=0,s,i=0;i<t.numberOfItems;i++){var r=t.getItem(i);i>0&&(n+=Yo(s,r)),s=r}return n}function fv(e){var t=e.points;return fh(e)+Yo(t.getItem(t.numberOfItems-1),t.getItem(0))}function dh(e){if(e.getTotalLength)return e.getTotalLength();switch(e.tagName.toLowerCase()){case"circle":return cv(e);case"rect":return uv(e);case"line":return hv(e);case"polyline":return fh(e);case"polygon":return fv(e)}}function dv(e){var t=dh(e);return e.setAttribute("stroke-dasharray",t),t}function pv(e){for(var t=e.parentNode;H.svg(t)&&H.svg(t.parentNode);)t=t.parentNode;return t}function ph(e,t){var n=t||{},s=n.el||pv(e),i=s.getBoundingClientRect(),r=ye(s,"viewBox"),o=i.width,a=i.height,l=n.viewBox||(r?r.split(" "):[0,0,o,a]);return{el:s,viewBox:l,x:l[0]/1,y:l[1]/1,w:o,h:a,vW:l[2],vH:l[3]}}function mv(e,t){var n=H.str(e)?lh(e)[0]:e,s=t||100;return function(i){return{property:i,el:n,svg:ph(n),totalLength:dh(n)*(s/100)}}}function gv(e,t,n){function s(c){c===void 0&&(c=0);var h=t+c>=1?t+c:0;return e.el.getPointAtLength(h)}var i=ph(e.el,e.svg),r=s(),o=s(-1),a=s(1),l=n?1:i.w/i.vW,u=n?1:i.h/i.vH;switch(e.property){case"x":return(r.x-i.x)*l;case"y":return(r.y-i.y)*u;case"angle":return Math.atan2(a.y-o.y,a.x-o.x)*180/Math.PI}}function Ol(e,t){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,s=hh(H.pth(e)?e.totalLength:e,t)+"";return{original:s,numbers:s.match(n)?s.match(n).map(Number):[0],strings:H.str(e)||t?s.split(n):[]}}function qo(e){var t=e?Ci(H.arr(e)?e.map(Rl):Rl(e)):[];return Ai(t,function(n,s,i){return i.indexOf(n)===s})}function mh(e){var t=qo(e);return t.map(function(n,s){return{target:n,id:s,total:t.length,transforms:{list:uh(n)}}})}function xv(e,t){var n=Ho(t);if(/^spring/.test(n.easing)&&(n.duration=oh(n.easing)),H.arr(e)){var s=e.length,i=s===2&&!H.obj(e[0]);i?e={value:e}:H.fnc(t.duration)||(n.duration=t.duration/s)}var r=H.arr(e)?e:[e];return r.map(function(o,a){var l=H.obj(o)&&!H.pth(o)?o:{value:o};return H.und(l.delay)&&(l.delay=a?0:t.delay),H.und(l.endDelay)&&(l.endDelay=a===r.length-1?t.endDelay:0),l}).map(function(o){return Si(o,n)})}function vv(e){for(var t=Ai(Ci(e.map(function(r){return Object.keys(r)})),function(r){return H.key(r)}).reduce(function(r,o){return r.indexOf(o)<0&&r.push(o),r},[]),n={},s=function(r){var o=t[r];n[o]=e.map(function(a){var l={};for(var u in a)H.key(u)?u==o&&(l.value=a[u]):l[u]=a[u];return l})},i=0;i<t.length;i++)s(i);return n}function _v(e,t){var n=[],s=t.keyframes;s&&(t=Si(vv(s),t));for(var i in t)H.key(i)&&n.push({name:i,tweens:xv(t[i],e)});return n}function yv(e,t){var n={};for(var s in e){var i=eo(e[s],t);H.arr(i)&&(i=i.map(function(r){return eo(r,t)}),i.length===1&&(i=i[0])),n[s]=i}return n.duration=parseFloat(n.duration),n.delay=parseFloat(n.delay),n}function bv(e,t){var n;return e.tweens.map(function(s){var i=yv(s,t),r=i.value,o=H.arr(r)?r[1]:r,a=Se(o),l=Vo(t.target,e.name,a,t),u=n?n.to.original:l,c=H.arr(r)?r[0]:u,h=Se(c)||Se(l),f=a||h;return H.und(o)&&(o=u),i.from=Ol(c,f),i.to=Ol(Xo(o,c),f),i.start=n?n.end:0,i.end=i.start+i.delay+i.duration+i.endDelay,i.easing=Do(i.easing,i.duration),i.isPath=H.pth(r),i.isPathTargetInsideSVG=i.isPath&&H.svg(t.target),i.isColor=H.col(i.from.original),i.isColor&&(i.round=1),n=i,i})}var gh={css:function(e,t,n){return e.style[t]=n},attribute:function(e,t,n){return e.setAttribute(t,n)},object:function(e,t,n){return e[t]=n},transform:function(e,t,n,s,i){if(s.list.set(t,n),t===s.last||i){var r="";s.list.forEach(function(o,a){r+=a+"("+o+") "}),e.style.transform=r}}};function xh(e,t){var n=mh(e);n.forEach(function(s){for(var i in t){var r=eo(t[i],s),o=s.target,a=Se(r),l=Vo(o,i,a,s),u=a||Se(l),c=Xo(hh(r,u),l),h=Wo(o,i);gh[h](o,i,c,s.transforms,!0)}})}function wv(e,t){var n=Wo(e.target,t.name);if(n){var s=bv(t,e),i=s[s.length-1];return{type:n,property:t.name,animatable:e,tweens:s,duration:i.end,delay:s[0].delay,endDelay:i.endDelay}}}function Av(e,t){return Ai(Ci(e.map(function(n){return t.map(function(s){return wv(n,s)})})),function(n){return!H.und(n)})}function vh(e,t){var n=e.length,s=function(r){return r.timelineOffset?r.timelineOffset:0},i={};return i.duration=n?Math.max.apply(Math,e.map(function(r){return s(r)+r.duration})):t.duration,i.delay=n?Math.min.apply(Math,e.map(function(r){return s(r)+r.delay})):t.delay,i.endDelay=n?i.duration-Math.max.apply(Math,e.map(function(r){return s(r)+r.duration-r.endDelay})):t.endDelay,i}var Ll=0;function Cv(e){var t=to(ih,e),n=to(Uo,e),s=_v(n,e),i=mh(e.targets),r=Av(i,s),o=vh(r,n),a=Ll;return Ll++,Si(t,{id:a,children:[],animatables:i,animations:r,duration:o.duration,delay:o.delay,endDelay:o.endDelay})}var oe=[],_h=function(){var e;function t(){!e&&(!jl()||!_t.suspendWhenDocumentHidden)&&oe.length>0&&(e=requestAnimationFrame(n))}function n(i){for(var r=oe.length,o=0;o<r;){var a=oe[o];a.paused?(oe.splice(o,1),r--):(a.tick(i),o++)}e=o>0?requestAnimationFrame(n):void 0}function s(){_t.suspendWhenDocumentHidden&&(jl()?e=cancelAnimationFrame(e):(oe.forEach(function(i){return i._onDocumentVisibility()}),_h()))}return typeof document<"u"&&document.addEventListener("visibilitychange",s),t}();function jl(){return!!document&&document.hidden}function _t(e){e===void 0&&(e={});var t=0,n=0,s=0,i,r=0,o=null;function a(v){var x=window.Promise&&new Promise(function(w){return o=w});return v.finished=x,x}var l=Cv(e);a(l);function u(){var v=l.direction;v!=="alternate"&&(l.direction=v!=="normal"?"normal":"reverse"),l.reversed=!l.reversed,i.forEach(function(x){return x.reversed=l.reversed})}function c(v){return l.reversed?l.duration-v:v}function h(){t=0,n=c(l.currentTime)*(1/_t.speed)}function f(v,x){x&&x.seek(v-x.timelineOffset)}function d(v){if(l.reversePlayback)for(var w=r;w--;)f(v,i[w]);else for(var x=0;x<r;x++)f(v,i[x])}function p(v){for(var x=0,w=l.animations,E=w.length;x<E;){var M=w[x],z=M.animatable,k=M.tweens,S=k.length-1,C=k[S];S&&(C=Ai(k,function(Et){return v<Et.end})[0]||C);for(var Y=_e(v-C.start-C.delay,0,C.duration)/C.duration,j=isNaN(Y)?1:C.easing(Y),O=C.to.strings,U=C.round,st=[],Q=C.to.numbers.length,Z=void 0,nt=0;nt<Q;nt++){var D=void 0,V=C.to.numbers[nt],Vt=C.from.numbers[nt]||0;C.isPath?D=gv(C.value,j*V,C.isPathTargetInsideSVG):D=Vt+j*(V-Vt),U&&(C.isColor&&nt>2||(D=Math.round(D*U)/U)),st.push(D)}var tt=O.length;if(!tt)Z=st[0];else{Z=O[0];for(var kt=0;kt<tt;kt++){O[kt];var he=O[kt+1],te=st[kt];isNaN(te)||(he?Z+=te+he:Z+=te+" ")}}gh[M.type](z.target,M.property,Z,z.transforms),M.currentValue=Z,x++}}function g(v){l[v]&&!l.passThrough&&l[v](l)}function m(){l.remaining&&l.remaining!==!0&&l.remaining--}function y(v){var x=l.duration,w=l.delay,E=x-l.endDelay,M=c(v);l.progress=_e(M/x*100,0,100),l.reversePlayback=M<l.currentTime,i&&d(M),!l.began&&l.currentTime>0&&(l.began=!0,g("begin")),!l.loopBegan&&l.currentTime>0&&(l.loopBegan=!0,g("loopBegin")),M<=w&&l.currentTime!==0&&p(0),(M>=E&&l.currentTime!==x||!x)&&p(x),M>w&&M<E?(l.changeBegan||(l.changeBegan=!0,l.changeCompleted=!1,g("changeBegin")),g("change"),p(M)):l.changeBegan&&(l.changeCompleted=!0,l.changeBegan=!1,g("changeComplete")),l.currentTime=_e(M,0,x),l.began&&g("update"),v>=x&&(n=0,m(),l.remaining?(t=s,g("loopComplete"),l.loopBegan=!1,l.direction==="alternate"&&u()):(l.paused=!0,l.completed||(l.completed=!0,g("loopComplete"),g("complete"),!l.passThrough&&"Promise"in window&&(o(),a(l)))))}return l.reset=function(){var v=l.direction;l.passThrough=!1,l.currentTime=0,l.progress=0,l.paused=!0,l.began=!1,l.loopBegan=!1,l.changeBegan=!1,l.completed=!1,l.changeCompleted=!1,l.reversePlayback=!1,l.reversed=v==="reverse",l.remaining=l.loop,i=l.children,r=i.length;for(var x=r;x--;)l.children[x].reset();(l.reversed&&l.loop!==!0||v==="alternate"&&l.loop===1)&&l.remaining++,p(l.reversed?l.duration:0)},l._onDocumentVisibility=h,l.set=function(v,x){return xh(v,x),l},l.tick=function(v){s=v,t||(t=s),y((s+(n-t))*_t.speed)},l.seek=function(v){y(c(v))},l.pause=function(){l.paused=!0,h()},l.play=function(){l.paused&&(l.completed&&l.reset(),l.paused=!1,oe.push(l),h(),_h())},l.reverse=function(){u(),l.completed=!l.reversed,h()},l.restart=function(){l.reset(),l.play()},l.remove=function(v){var x=qo(v);yh(x,l)},l.reset(),l.autoplay&&l.play(),l}function Nl(e,t){for(var n=t.length;n--;)Go(e,t[n].animatable.target)&&t.splice(n,1)}function yh(e,t){var n=t.animations,s=t.children;Nl(e,n);for(var i=s.length;i--;){var r=s[i],o=r.animations;Nl(e,o),!o.length&&!r.children.length&&s.splice(i,1)}!n.length&&!s.length&&t.pause()}function Sv(e){for(var t=qo(e),n=oe.length;n--;){var s=oe[n];yh(t,s)}}function Mv(e,t){t===void 0&&(t={});var n=t.direction||"normal",s=t.easing?Do(t.easing):null,i=t.grid,r=t.axis,o=t.from||0,a=o==="first",l=o==="center",u=o==="last",c=H.arr(e),h=parseFloat(c?e[0]:e),f=c?parseFloat(e[1]):0,d=Se(c?e[1]:e)||0,p=t.start||0+(c?h:0),g=[],m=0;return function(y,v,x){if(a&&(o=0),l&&(o=(x-1)/2),u&&(o=x-1),!g.length){for(var w=0;w<x;w++){if(!i)g.push(Math.abs(o-w));else{var E=l?(i[0]-1)/2:o%i[0],M=l?(i[1]-1)/2:Math.floor(o/i[0]),z=w%i[0],k=Math.floor(w/i[0]),S=E-z,C=M-k,Y=Math.sqrt(S*S+C*C);r==="x"&&(Y=-S),r==="y"&&(Y=-C),g.push(Y)}m=Math.max.apply(Math,g)}s&&(g=g.map(function(O){return s(O/m)*m})),n==="reverse"&&(g=g.map(function(O){return r?O<0?O*-1:-O:Math.abs(m-O)}))}var j=c?(f-h)/m:h;return p+j*(Math.round(g[v]*100)/100)+d}}function Pv(e){e===void 0&&(e={});var t=_t(e);return t.duration=0,t.add=function(n,s){var i=oe.indexOf(t),r=t.children;i>-1&&oe.splice(i,1);function o(f){f.passThrough=!0}for(var a=0;a<r.length;a++)o(r[a]);var l=Si(n,to(Uo,e));l.targets=l.targets||e.targets;var u=t.duration;l.autoplay=!1,l.direction=t.direction,l.timelineOffset=H.und(s)?u:Xo(s,u),o(t),t.seek(l.timelineOffset);var c=_t(l);o(c),r.push(c);var h=vh(r,e);return t.delay=h.delay,t.endDelay=h.endDelay,t.duration=h.duration,t.seek(0),t.reset(),t.autoplay&&t.play(),t},t}_t.version="3.2.1";_t.speed=1;_t.suspendWhenDocumentHidden=!0;_t.running=oe;_t.remove=Sv;_t.get=Vo;_t.set=xh;_t.convertPx=$o;_t.path=mv;_t.setDashoffset=dv;_t.stagger=Mv;_t.timeline=Pv;_t.easing=Do;_t.penner=ah;_t.random=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};function Tv(e){return ql()?(Oh(e),!0):!1}function kv(e){return typeof e=="function"?e():rn(e)}const Ev=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Iv=Ev?window:void 0;function Fv(){const e=se(!1),t=Nc();return t&&In(()=>{e.value=!0},t),e}function Bv(e){const t=Fv();return wo(()=>(t.value,!!e()))}function zv(e,t={}){const{window:n=Iv}=t,s=Bv(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let i;const r=se(!1),o=u=>{r.value=u.matches},a=()=>{i&&("removeEventListener"in i?i.removeEventListener("change",o):i.removeListener(o))},l=Cf(()=>{s.value&&(a(),i=n.matchMedia(kv(e)),"addEventListener"in i?i.addEventListener("change",o):i.addListener(o),r.value=i.matches)});return Tv(()=>{l(),a(),i=void 0}),r}const Rv={class:"c-shader-title"},Ov=ie("h2",{class:"c-subtitle"},"SHADERS",-1),Lv={key:0,class:"p-gallery"},jv=["onClick","onMouseenterPassiveCapture"],Nv={class:"item__container"},Uv=["value"],Dv={class:"c-share"},Gv={href:"mailto:nanonum@gmail.com"},Hv={href:"https://linktr.ee/nanonum",target:"_blank"},$v={__name:"App",setup(e){const t=zv("(max-width: 860px)"),n=se(!1);se("shader");const s=se(!1),i=t?85/375*window.innerWidth:110,r=rs({saturation:1});se("");const o=se(),a=rs({selected:!1,stage:"shader",shader:null,title:null,path:null});let l=se();l.value=Object.assign({"/src/shaders/_adot.frag":Qd,"/src/shaders/_cos2.frag":t0,"/src/shaders/_cos3.frag":n0,"/src/shaders/_grad.frag":i0,"/src/shaders/_hole.frag":o0,"/src/shaders/_loading.frag":l0,"/src/shaders/_yu.frag":u0,"/src/shaders/category/_categorized.frag":f0,"/src/shaders/dct.frag":p0,"/src/shaders/dct2.frag":g0,"/src/shaders/flare.frag":v0,"/src/shaders/fog.frag":y0,"/src/shaders/internet.frag":w0,"/src/shaders/line.frag":C0,"/src/shaders/metaball.frag":M0,"/src/shaders/metaball2.frag":T0,"/src/shaders/moire.frag":E0,"/src/shaders/oil.frag":F0,"/src/shaders/pattern.frag":z0,"/src/shaders/ring.frag":O0,"/src/shaders/ring2.frag":j0,"/src/shaders/shower.frag":U0,"/src/shaders/splat.frag":G0,"/src/shaders/up.frag":$0,"/src/shaders/wip.frag":V0});const u=y=>(new URL(y,location),y.split("/").pop());async function c(){if(window.ui=new To,await window.ui.init({backgroundAlpha:0,resizeTo:window,resolution:1}),window.ui.ticker.maxFPS=15,window.ui.canvas.setAttribute("id","canvas_ui"),document.body.appendChild(window.ui.canvas),await dc(),location.hash){const y=location.hash.split("#")[1]||null,v=location.hash.split("#/shader/")[1]||null;a.path=y,a.filename=v;const x=Object.keys(l.value).find(w=>w.slice(w.lastIndexOf("/")+1)===v);a.shader=l.value[x].default}n.value=!0}const h=wo(()=>location.href);In(()=>{c()}),pi(()=>{window.ui&&window.ui.destroy({removeView:!0})});function f(){o.value.select()}const d=(y,v,x)=>{a.selected&&a.title===x?a.selected=null:Object.assign(a,{selected:!!x,shader:v,path:location.hash=`/${y}/${x}`,title:x,stage:y})},p=()=>{history.pushState("","","/nngl/"),a.selected=!1},g=()=>{s.value=!s.value,document.body.classList.toggle("--fullscreen")},m=(y,v,x)=>{console.log(n.value),!a.selected&&Object.assign(a,{shader:v,path:`/${y}/${x}`,title:x,stage:y})};return wn(()=>a.shader,y=>{_t({targets:r,saturation:a.shader?0:1,easing:"easeOutExpo",duration:800})}),(y,v)=>(ge(),ze(Lt,null,[ie("h1",Rv,Ds(a.title||"NN.GL"),1),Ov,n.value?(ge(),ze("ul",Lv,[(ge(!0),ze(Lt,null,Nf(rn(l),(x,w)=>(ge(),ze(Lt,null,[u(w).indexOf("_")!==0?(ge(),ze("li",{key:0,class:_s(["p-gallery__item",{active:a.path===`/shader/${u(w)}`}]),onClick:E=>d("shader",x.default,u(w)),onMouseenterPassiveCapture:E=>m("shader",x.default,u(w))},[ie("div",Nv,[It(Jx,{shader:x.default,saturation:r.saturation,width:rn(i),height:rn(i),alt:u(w),selected:a.selected,active:a.title===u(w),show:!s.value},null,8,["shader","saturation","width","height","alt","selected","active","show"])])],42,jv)):pn("",!0)],64))),256))])):pn("",!0),pn("",!0),n.value&&a.stage==="shader"?(ge(),Lc(Yx,{key:2,shader:a.shader},null,8,["shader"])):pn("",!0),It(ts,{name:"closeButton"},{default:Hs(()=>[a.selected?(ge(),ze("nav",{key:0,onClick:v[1]||(v[1]=x=>p()),class:"c-close"})):pn("",!0)]),_:1}),It(ts,{name:"fullscreenButton"},{default:Hs(()=>[ie("nav",{onClick:v[2]||(v[2]=x=>g()),class:"c-fullscreen"})]),_:1}),It(ts,{name:"permalink"},{default:Hs(()=>[n.value&&a.selected?(ge(),ze("input",{key:0,type:"text",value:h.value,class:"permalink",readonly:"",onClick:v[3]||(v[3]=x=>f()),ref_key:"input_permalink",ref:o},null,8,Uv)):pn("",!0)]),_:1}),ie("div",Dv,[ie("a",Gv,Ds(rn(t)?"CONTACT":"nanonum@gmail.com"),1),ie("a",Hv,Ds(rn(t)?"MORE LINKS":"linktr.ee/nanonum"),1)])],64))}};Yd($v).mount("#app");export{Xm as $,Bu as A,jt as B,Rt as C,vt as D,q as E,Mu as F,_i as G,qa as H,Tn as I,em as J,pm as K,At as L,at as M,wt as N,Fm as O,xt as P,Qa as Q,Nr as R,fm as S,Fs as T,cm as U,Bp as V,Vi as W,yt as X,eu as Y,ut as Z,ct as _,Rr as a,Pn as a0,ii as a1,Ug as a2,wl as a3,Hu as a4,Sl as a5,Vg as a6,vs as a7,mt as a8,lp as a9,Zr as aa,Al as ab,Wu as ac,ce as b,We as c,rt as d,Jt as e,fs as f,um as g,Zm as h,al as i,tg as j,xs as k,qs as l,ju as m,ja as n,Mo as o,Eu as p,hu as q,_p as r,bl as s,ap as t,eg as u,Km as v,Tt as w,we as x,Jc as y,Me as z};
