(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Ss(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Q={},Ht=[],Se=()=>{},$c=()=>!1,Hc=/^on[^a-z]/,Er=t=>Hc.test(t),Ps=t=>t.startsWith("onUpdate:"),oe=Object.assign,Os=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},jc=Object.prototype.hasOwnProperty,W=(t,e)=>jc.call(t,e),F=Array.isArray,jt=t=>Ir(t)==="[object Map]",xo=t=>Ir(t)==="[object Set]",$=t=>typeof t=="function",se=t=>typeof t=="string",ks=t=>typeof t=="symbol",Z=t=>t!==null&&typeof t=="object",Lo=t=>Z(t)&&$(t.then)&&$(t.catch),Uo=Object.prototype.toString,Ir=t=>Uo.call(t),Wc=t=>Ir(t).slice(8,-1),Fo=t=>Ir(t)==="[object Object]",Ns=t=>se(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Yn=Ss(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),wr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Vc=/-(\w)/g,je=wr(t=>t.replace(Vc,(e,n)=>n?n.toUpperCase():"")),zc=/\B([A-Z])/g,tn=wr(t=>t.replace(zc,"-$1").toLowerCase()),Tr=wr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Fr=wr(t=>t?`on${Tr(t)}`:""),En=(t,e)=>!Object.is(t,e),Xn=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},or=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ns=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let fi;const rs=()=>fi||(fi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ds(t){if(F(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=se(r)?Jc(r):Ds(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(se(t))return t;if(Z(t))return t}}const Kc=/;(?![^(]*\))/g,qc=/:([^]+)/,Gc=/\/\*[^]*?\*\//g;function Jc(t){const e={};return t.replace(Gc,"").split(Kc).forEach(n=>{if(n){const r=n.split(qc);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ms(t){let e="";if(se(t))e=t;else if(F(t))for(let n=0;n<t.length;n++){const r=Ms(t[n]);r&&(e+=r+" ")}else if(Z(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Yc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Xc=Ss(Yc);function Bo(t){return!!t||t===""}const pm=t=>se(t)?t:t==null?"":F(t)||Z(t)&&(t.toString===Uo||!$(t.toString))?JSON.stringify(t,$o,2):String(t),$o=(t,e)=>e&&e.__v_isRef?$o(t,e.value):jt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:xo(e)?{[`Set(${e.size})`]:[...e.values()]}:Z(e)&&!F(e)&&!Fo(e)?String(e):e;let Re;class Qc{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Re,!e&&Re&&(this.index=(Re.scopes||(Re.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Re;try{return Re=this,e()}finally{Re=n}}}on(){Re=this}off(){Re=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Zc(t,e=Re){e&&e.active&&e.effects.push(t)}function el(){return Re}const xs=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Ho=t=>(t.w&pt)>0,jo=t=>(t.n&pt)>0,tl=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=pt},nl=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Ho(s)&&!jo(s)?s.delete(t):e[n++]=s,s.w&=~pt,s.n&=~pt}e.length=n}},ss=new WeakMap;let dn=0,pt=1;const is=30;let Ae;const At=Symbol(""),os=Symbol("");class Ls{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Zc(this,r)}run(){if(!this.active)return this.fn();let e=Ae,n=ut;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ae,Ae=this,ut=!0,pt=1<<++dn,dn<=is?tl(this):di(this),this.fn()}finally{dn<=is&&nl(this),pt=1<<--dn,Ae=this.parent,ut=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ae===this?this.deferStop=!0:this.active&&(di(this),this.onStop&&this.onStop(),this.active=!1)}}function di(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let ut=!0;const Wo=[];function nn(){Wo.push(ut),ut=!1}function rn(){const t=Wo.pop();ut=t===void 0?!0:t}function me(t,e,n){if(ut&&Ae){let r=ss.get(t);r||ss.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=xs()),Vo(s)}}function Vo(t,e){let n=!1;dn<=is?jo(t)||(t.n|=pt,n=!Ho(t)):n=!t.has(Ae),n&&(t.add(Ae),Ae.deps.push(t))}function Je(t,e,n,r,s,i){const o=ss.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&F(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":F(t)?Ns(n)&&a.push(o.get("length")):(a.push(o.get(At)),jt(t)&&a.push(o.get(os)));break;case"delete":F(t)||(a.push(o.get(At)),jt(t)&&a.push(o.get(os)));break;case"set":jt(t)&&a.push(o.get(At));break}if(a.length===1)a[0]&&as(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);as(xs(c))}}function as(t,e){const n=F(t)?t:[...t];for(const r of n)r.computed&&hi(r);for(const r of n)r.computed||hi(r)}function hi(t,e){(t!==Ae||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const rl=Ss("__proto__,__v_isRef,__isVue"),zo=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ks)),sl=Us(),il=Us(!1,!0),ol=Us(!0),pi=al();function al(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=V(this);for(let i=0,o=this.length;i<o;i++)me(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(V)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){nn();const r=V(this)[e].apply(this,n);return rn(),r}}),t}function cl(t){const e=V(this);return me(e,"has",t),e.hasOwnProperty(t)}function Us(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?Tl:Yo:e?Jo:Go).get(r))return r;const o=F(r);if(!t){if(o&&W(pi,s))return Reflect.get(pi,s,i);if(s==="hasOwnProperty")return cl}const a=Reflect.get(r,s,i);return(ks(s)?zo.has(s):rl(s))||(t||me(r,"get",s),e)?a:ue(a)?o&&Ns(s)?a:a.value:Z(a)?t?Xo(a):Mn(a):a}}const ll=Ko(),ul=Ko(!0);function Ko(t=!1){return function(n,r,s,i){let o=n[r];if(Jt(o)&&ue(o)&&!ue(s))return!1;if(!t&&(!ar(s)&&!Jt(s)&&(o=V(o),s=V(s)),!F(n)&&ue(o)&&!ue(s)))return o.value=s,!0;const a=F(n)&&Ns(r)?Number(r)<n.length:W(n,r),c=Reflect.set(n,r,s,i);return n===V(i)&&(a?En(s,o)&&Je(n,"set",r,s):Je(n,"add",r,s)),c}}function fl(t,e){const n=W(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Je(t,"delete",e,void 0),r}function dl(t,e){const n=Reflect.has(t,e);return(!ks(e)||!zo.has(e))&&me(t,"has",e),n}function hl(t){return me(t,"iterate",F(t)?"length":At),Reflect.ownKeys(t)}const qo={get:sl,set:ll,deleteProperty:fl,has:dl,ownKeys:hl},pl={get:ol,set(t,e){return!0},deleteProperty(t,e){return!0}},gl=oe({},qo,{get:il,set:ul}),Fs=t=>t,Rr=t=>Reflect.getPrototypeOf(t);function Wn(t,e,n=!1,r=!1){t=t.__v_raw;const s=V(t),i=V(e);n||(e!==i&&me(s,"get",e),me(s,"get",i));const{has:o}=Rr(s),a=r?Fs:n?Hs:In;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Vn(t,e=!1){const n=this.__v_raw,r=V(n),s=V(t);return e||(t!==s&&me(r,"has",t),me(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function zn(t,e=!1){return t=t.__v_raw,!e&&me(V(t),"iterate",At),Reflect.get(t,"size",t)}function gi(t){t=V(t);const e=V(this);return Rr(e).has.call(e,t)||(e.add(t),Je(e,"add",t,t)),this}function mi(t,e){e=V(e);const n=V(this),{has:r,get:s}=Rr(n);let i=r.call(n,t);i||(t=V(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?En(e,o)&&Je(n,"set",t,e):Je(n,"add",t,e),this}function _i(t){const e=V(this),{has:n,get:r}=Rr(e);let s=n.call(e,t);s||(t=V(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Je(e,"delete",t,void 0),i}function vi(){const t=V(this),e=t.size!==0,n=t.clear();return e&&Je(t,"clear",void 0,void 0),n}function Kn(t,e){return function(r,s){const i=this,o=i.__v_raw,a=V(o),c=e?Fs:t?Hs:In;return!t&&me(a,"iterate",At),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function qn(t,e,n){return function(...r){const s=this.__v_raw,i=V(s),o=jt(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?Fs:e?Hs:In;return!e&&me(i,"iterate",c?os:At),{next(){const{value:h,done:g}=l.next();return g?{value:h,done:g}:{value:a?[u(h[0]),u(h[1])]:u(h),done:g}},[Symbol.iterator](){return this}}}}function tt(t){return function(...e){return t==="delete"?!1:this}}function ml(){const t={get(i){return Wn(this,i)},get size(){return zn(this)},has:Vn,add:gi,set:mi,delete:_i,clear:vi,forEach:Kn(!1,!1)},e={get(i){return Wn(this,i,!1,!0)},get size(){return zn(this)},has:Vn,add:gi,set:mi,delete:_i,clear:vi,forEach:Kn(!1,!0)},n={get(i){return Wn(this,i,!0)},get size(){return zn(this,!0)},has(i){return Vn.call(this,i,!0)},add:tt("add"),set:tt("set"),delete:tt("delete"),clear:tt("clear"),forEach:Kn(!0,!1)},r={get(i){return Wn(this,i,!0,!0)},get size(){return zn(this,!0)},has(i){return Vn.call(this,i,!0)},add:tt("add"),set:tt("set"),delete:tt("delete"),clear:tt("clear"),forEach:Kn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=qn(i,!1,!1),n[i]=qn(i,!0,!1),e[i]=qn(i,!1,!0),r[i]=qn(i,!0,!0)}),[t,n,e,r]}const[_l,vl,yl,bl]=ml();function Bs(t,e){const n=e?t?bl:yl:t?vl:_l;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(W(n,s)&&s in r?n:r,s,i)}const El={get:Bs(!1,!1)},Il={get:Bs(!1,!0)},wl={get:Bs(!0,!1)},Go=new WeakMap,Jo=new WeakMap,Yo=new WeakMap,Tl=new WeakMap;function Rl(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Al(t){return t.__v_skip||!Object.isExtensible(t)?0:Rl(Wc(t))}function Mn(t){return Jt(t)?t:$s(t,!1,qo,El,Go)}function Cl(t){return $s(t,!1,gl,Il,Jo)}function Xo(t){return $s(t,!0,pl,wl,Yo)}function $s(t,e,n,r,s){if(!Z(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Al(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Wt(t){return Jt(t)?Wt(t.__v_raw):!!(t&&t.__v_isReactive)}function Jt(t){return!!(t&&t.__v_isReadonly)}function ar(t){return!!(t&&t.__v_isShallow)}function Qo(t){return Wt(t)||Jt(t)}function V(t){const e=t&&t.__v_raw;return e?V(e):t}function Zo(t){return or(t,"__v_skip",!0),t}const In=t=>Z(t)?Mn(t):t,Hs=t=>Z(t)?Xo(t):t;function ea(t){ut&&Ae&&(t=V(t),Vo(t.dep||(t.dep=xs())))}function ta(t,e){t=V(t);const n=t.dep;n&&as(n)}function ue(t){return!!(t&&t.__v_isRef===!0)}function na(t){return ra(t,!1)}function Sl(t){return ra(t,!0)}function ra(t,e){return ue(t)?t:new Pl(t,e)}class Pl{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:V(e),this._value=n?e:In(e)}get value(){return ea(this),this._value}set value(e){const n=this.__v_isShallow||ar(e)||Jt(e);e=n?e:V(e),En(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:In(e),ta(this))}}function Vt(t){return ue(t)?t.value:t}const Ol={get:(t,e,n)=>Vt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ue(s)&&!ue(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function sa(t){return Wt(t)?t:new Proxy(t,Ol)}class kl{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Ls(e,()=>{this._dirty||(this._dirty=!0,ta(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=V(this);return ea(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Nl(t,e,n=!1){let r,s;const i=$(t);return i?(r=t,s=Se):(r=t.get,s=t.set),new kl(r,s,i||!s,n)}function ft(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Ar(i,e,n)}return s}function Pe(t,e,n,r){if($(t)){const i=ft(t,e,n,r);return i&&Lo(i)&&i.catch(o=>{Ar(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Pe(t[i],e,n,r));return s}function Ar(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){ft(c,null,10,[t,o,a]);return}}Dl(t,n,s,r)}function Dl(t,e,n,r=!0){console.error(t)}let wn=!1,cs=!1;const le=[];let Be=0;const zt=[];let Ke=null,It=0;const ia=Promise.resolve();let js=null;function oa(t){const e=js||ia;return t?e.then(this?t.bind(this):t):e}function Ml(t){let e=Be+1,n=le.length;for(;e<n;){const r=e+n>>>1;Tn(le[r])<t?e=r+1:n=r}return e}function Ws(t){(!le.length||!le.includes(t,wn&&t.allowRecurse?Be+1:Be))&&(t.id==null?le.push(t):le.splice(Ml(t.id),0,t),aa())}function aa(){!wn&&!cs&&(cs=!0,js=ia.then(la))}function xl(t){const e=le.indexOf(t);e>Be&&le.splice(e,1)}function Ll(t){F(t)?zt.push(...t):(!Ke||!Ke.includes(t,t.allowRecurse?It+1:It))&&zt.push(t),aa()}function yi(t,e=wn?Be+1:0){for(;e<le.length;e++){const n=le[e];n&&n.pre&&(le.splice(e,1),e--,n())}}function ca(t){if(zt.length){const e=[...new Set(zt)];if(zt.length=0,Ke){Ke.push(...e);return}for(Ke=e,Ke.sort((n,r)=>Tn(n)-Tn(r)),It=0;It<Ke.length;It++)Ke[It]();Ke=null,It=0}}const Tn=t=>t.id==null?1/0:t.id,Ul=(t,e)=>{const n=Tn(t)-Tn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function la(t){cs=!1,wn=!0,le.sort(Ul);const e=Se;try{for(Be=0;Be<le.length;Be++){const n=le[Be];n&&n.active!==!1&&ft(n,null,14)}}finally{Be=0,le.length=0,ca(),wn=!1,js=null,(le.length||zt.length)&&la()}}function Fl(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Q;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:g}=r[u]||Q;g&&(s=n.map(y=>se(y)?y.trim():y)),h&&(s=n.map(ns))}let a,c=r[a=Fr(e)]||r[a=Fr(je(e))];!c&&i&&(c=r[a=Fr(tn(e))]),c&&Pe(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Pe(l,t,6,s)}}function ua(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!$(t)){const c=l=>{const u=ua(l,e,!0);u&&(a=!0,oe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Z(t)&&r.set(t,null),null):(F(i)?i.forEach(c=>o[c]=null):oe(o,i),Z(t)&&r.set(t,o),o)}function Cr(t,e){return!t||!Er(e)?!1:(e=e.slice(2).replace(/Once$/,""),W(t,e[0].toLowerCase()+e.slice(1))||W(t,tn(e))||W(t,e))}let Ee=null,Sr=null;function cr(t){const e=Ee;return Ee=t,Sr=t&&t.type.__scopeId||null,e}function Bl(t){Sr=t}function $l(){Sr=null}function yt(t,e=Ee,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&ki(-1);const i=cr(e);let o;try{o=t(...s)}finally{cr(i),r._d&&ki(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Br(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:g,setupState:y,ctx:C,inheritAttrs:P}=t;let L,k;const M=cr(t);try{if(n.shapeFlag&4){const x=s||r;L=Fe(u.call(x,x,h,i,y,g,C)),k=c}else{const x=e;L=Fe(x.length>1?x(i,{attrs:c,slots:a,emit:l}):x(i,null)),k=e.props?c:Hl(c)}}catch(x){_n.length=0,Ar(x,t,1),L=te(Pt)}let j=L;if(k&&P!==!1){const x=Object.keys(k),{shapeFlag:ne}=j;x.length&&ne&7&&(o&&x.some(Ps)&&(k=jl(k,o)),j=Yt(j,k))}return n.dirs&&(j=Yt(j),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&(j.transition=n.transition),L=j,cr(M),L}const Hl=t=>{let e;for(const n in t)(n==="class"||n==="style"||Er(n))&&((e||(e={}))[n]=t[n]);return e},jl=(t,e)=>{const n={};for(const r in t)(!Ps(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Wl(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?bi(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const g=u[h];if(o[g]!==r[g]&&!Cr(l,g))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?bi(r,o,l):!0:!!o;return!1}function bi(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Cr(n,i))return!0}return!1}function Vl({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const zl=t=>t.__isSuspense;function Kl(t,e){e&&e.pendingBranch?F(t)?e.effects.push(...t):e.effects.push(t):Ll(t)}const Gn={};function Qn(t,e,n){return fa(t,e,n)}function fa(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Q){var a;const c=el()===((a=ae)==null?void 0:a.scope)?ae:null;let l,u=!1,h=!1;if(ue(t)?(l=()=>t.value,u=ar(t)):Wt(t)?(l=()=>t,r=!0):F(t)?(h=!0,u=t.some(x=>Wt(x)||ar(x)),l=()=>t.map(x=>{if(ue(x))return x.value;if(Wt(x))return Tt(x);if($(x))return ft(x,c,2)})):$(t)?e?l=()=>ft(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return g&&g(),Pe(t,c,3,[y])}:l=Se,e&&r){const x=l;l=()=>Tt(x())}let g,y=x=>{g=M.onStop=()=>{ft(x,c,4)}},C;if(An)if(y=Se,e?n&&Pe(e,c,3,[l(),h?[]:void 0,y]):l(),s==="sync"){const x=$u();C=x.__watcherHandles||(x.__watcherHandles=[])}else return Se;let P=h?new Array(t.length).fill(Gn):Gn;const L=()=>{if(M.active)if(e){const x=M.run();(r||u||(h?x.some((ne,re)=>En(ne,P[re])):En(x,P)))&&(g&&g(),Pe(e,c,3,[x,P===Gn?void 0:h&&P[0]===Gn?[]:P,y]),P=x)}else M.run()};L.allowRecurse=!!e;let k;s==="sync"?k=L:s==="post"?k=()=>ge(L,c&&c.suspense):(L.pre=!0,c&&(L.id=c.uid),k=()=>Ws(L));const M=new Ls(l,k);e?n?L():P=M.run():s==="post"?ge(M.run.bind(M),c&&c.suspense):M.run();const j=()=>{M.stop(),c&&c.scope&&Os(c.scope.effects,M)};return C&&C.push(j),j}function ql(t,e,n){const r=this.proxy,s=se(t)?t.includes(".")?da(r,t):()=>r[t]:t.bind(r,r);let i;$(e)?i=e:(i=e.handler,n=e);const o=ae;Xt(this);const a=fa(s,i.bind(r),n);return o?Xt(o):Ct(),a}function da(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Tt(t,e){if(!Z(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ue(t))Tt(t.value,e);else if(F(t))for(let n=0;n<t.length;n++)Tt(t[n],e);else if(xo(t)||jt(t))t.forEach(n=>{Tt(n,e)});else if(Fo(t))for(const n in t)Tt(t[n],e);return t}function gm(t,e){const n=Ee;if(n===null)return t;const r=Nr(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=Q]=e[i];o&&($(o)&&(o={mounted:o,updated:o}),o.deep&&Tt(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function _t(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(nn(),Pe(c,n,8,[t.el,a,t,e]),rn())}}function ha(t,e){return $(t)?(()=>oe({name:t.name},e,{setup:t}))():t}const Zn=t=>!!t.type.__asyncLoader,pa=t=>t.type.__isKeepAlive;function Gl(t,e){ga(t,"a",e)}function Jl(t,e){ga(t,"da",e)}function ga(t,e,n=ae){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Pr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)pa(s.parent.vnode)&&Yl(r,e,n,s),s=s.parent}}function Yl(t,e,n,r){const s=Pr(e,t,r,!0);_a(()=>{Os(r[e],s)},n)}function Pr(t,e,n=ae,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;nn(),Xt(n);const a=Pe(e,n,t,o);return Ct(),rn(),a});return r?s.unshift(i):s.push(i),i}}const Xe=t=>(e,n=ae)=>(!An||t==="sp")&&Pr(t,(...r)=>e(...r),n),Xl=Xe("bm"),ma=Xe("m"),Ql=Xe("bu"),Zl=Xe("u"),eu=Xe("bum"),_a=Xe("um"),tu=Xe("sp"),nu=Xe("rtg"),ru=Xe("rtc");function su(t,e=ae){Pr("ec",t,e)}const va="components";function Ei(t,e){return ou(va,t,!0,e)||t}const iu=Symbol.for("v-ndc");function ou(t,e,n=!0,r=!1){const s=Ee||ae;if(s){const i=s.type;if(t===va){const a=Uu(i,!1);if(a&&(a===e||a===je(e)||a===Tr(je(e))))return i}const o=Ii(s[t]||i[t],e)||Ii(s.appContext[t],e);return!o&&r?i:o}}function Ii(t,e){return t&&(t[e]||t[je(e)]||t[Tr(je(e))])}function mm(t,e,n,r){let s;const i=n&&n[r];if(F(t)||se(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Z(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const ls=t=>t?Pa(t)?Nr(t)||t.proxy:ls(t.parent):null,mn=oe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ls(t.parent),$root:t=>ls(t.root),$emit:t=>t.emit,$options:t=>Vs(t),$forceUpdate:t=>t.f||(t.f=()=>Ws(t.update)),$nextTick:t=>t.n||(t.n=oa.bind(t.proxy)),$watch:t=>ql.bind(t)}),$r=(t,e)=>t!==Q&&!t.__isScriptSetup&&W(t,e),au={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const y=o[e];if(y!==void 0)switch(y){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if($r(r,e))return o[e]=1,r[e];if(s!==Q&&W(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&W(l,e))return o[e]=3,i[e];if(n!==Q&&W(n,e))return o[e]=4,n[e];us&&(o[e]=0)}}const u=mn[e];let h,g;if(u)return e==="$attrs"&&me(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Q&&W(n,e))return o[e]=4,n[e];if(g=c.config.globalProperties,W(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return $r(s,e)?(s[e]=n,!0):r!==Q&&W(r,e)?(r[e]=n,!0):W(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Q&&W(t,o)||$r(e,o)||(a=i[0])&&W(a,o)||W(r,o)||W(mn,o)||W(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:W(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function wi(t){return F(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let us=!0;function cu(t){const e=Vs(t),n=t.proxy,r=t.ctx;us=!1,e.beforeCreate&&Ti(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:g,beforeUpdate:y,updated:C,activated:P,deactivated:L,beforeDestroy:k,beforeUnmount:M,destroyed:j,unmounted:x,render:ne,renderTracked:re,renderTriggered:_e,errorCaptured:we,serverPrefetch:Ne,expose:ye,inheritAttrs:Ze,components:mt,directives:De,filters:cn}=e;if(l&&lu(l,r,null),o)for(const J in o){const z=o[J];$(z)&&(r[J]=z.bind(n))}if(s){const J=s.call(n,n);Z(J)&&(t.data=Mn(J))}if(us=!0,i)for(const J in i){const z=i[J],We=$(z)?z.bind(n,n):$(z.get)?z.get.bind(n,n):Se,et=!$(z)&&$(z.set)?z.set.bind(n):Se,Me=be({get:We,set:et});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>Me.value,set:pe=>Me.value=pe})}if(a)for(const J in a)ya(a[J],r,n,J);if(c){const J=$(c)?c.call(n):c;Reflect.ownKeys(J).forEach(z=>{er(z,J[z])})}u&&Ti(u,t,"c");function ie(J,z){F(z)?z.forEach(We=>J(We.bind(n))):z&&J(z.bind(n))}if(ie(Xl,h),ie(ma,g),ie(Ql,y),ie(Zl,C),ie(Gl,P),ie(Jl,L),ie(su,we),ie(ru,re),ie(nu,_e),ie(eu,M),ie(_a,x),ie(tu,Ne),F(ye))if(ye.length){const J=t.exposed||(t.exposed={});ye.forEach(z=>{Object.defineProperty(J,z,{get:()=>n[z],set:We=>n[z]=We})})}else t.exposed||(t.exposed={});ne&&t.render===Se&&(t.render=ne),Ze!=null&&(t.inheritAttrs=Ze),mt&&(t.components=mt),De&&(t.directives=De)}function lu(t,e,n=Se){F(t)&&(t=fs(t));for(const r in t){const s=t[r];let i;Z(s)?"default"in s?i=Oe(s.from||r,s.default,!0):i=Oe(s.from||r):i=Oe(s),ue(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Ti(t,e,n){Pe(F(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function ya(t,e,n,r){const s=r.includes(".")?da(n,r):()=>n[r];if(se(t)){const i=e[t];$(i)&&Qn(s,i)}else if($(t))Qn(s,t.bind(n));else if(Z(t))if(F(t))t.forEach(i=>ya(i,e,n,r));else{const i=$(t.handler)?t.handler.bind(n):e[t.handler];$(i)&&Qn(s,i,t)}}function Vs(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>lr(c,l,o,!0)),lr(c,e,o)),Z(e)&&i.set(e,c),c}function lr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&lr(t,i,n,!0),s&&s.forEach(o=>lr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=uu[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const uu={data:Ri,props:Ai,emits:Ai,methods:hn,computed:hn,beforeCreate:de,created:de,beforeMount:de,mounted:de,beforeUpdate:de,updated:de,beforeDestroy:de,beforeUnmount:de,destroyed:de,unmounted:de,activated:de,deactivated:de,errorCaptured:de,serverPrefetch:de,components:hn,directives:hn,watch:du,provide:Ri,inject:fu};function Ri(t,e){return e?t?function(){return oe($(t)?t.call(this,this):t,$(e)?e.call(this,this):e)}:e:t}function fu(t,e){return hn(fs(t),fs(e))}function fs(t){if(F(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function de(t,e){return t?[...new Set([].concat(t,e))]:e}function hn(t,e){return t?oe(Object.create(null),t,e):e}function Ai(t,e){return t?F(t)&&F(e)?[...new Set([...t,...e])]:oe(Object.create(null),wi(t),wi(e??{})):e}function du(t,e){if(!t)return e;if(!e)return t;const n=oe(Object.create(null),t);for(const r in e)n[r]=de(t[r],e[r]);return n}function ba(){return{app:null,config:{isNativeTag:$c,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let hu=0;function pu(t,e){return function(r,s=null){$(r)||(r=oe({},r)),s!=null&&!Z(s)&&(s=null);const i=ba(),o=new Set;let a=!1;const c=i.app={_uid:hu++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Hu,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&$(l.install)?(o.add(l),l.install(c,...u)):$(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const g=te(r,s);return g.appContext=i,u&&e?e(g,l):t(g,l,h),a=!0,c._container=l,l.__vue_app__=c,Nr(g.component)||g.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){ur=c;try{return l()}finally{ur=null}}};return c}}let ur=null;function er(t,e){if(ae){let n=ae.provides;const r=ae.parent&&ae.parent.provides;r===n&&(n=ae.provides=Object.create(r)),n[t]=e}}function Oe(t,e,n=!1){const r=ae||Ee;if(r||ur){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:ur._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&$(e)?e.call(r&&r.proxy):e}}function gu(t,e,n,r=!1){const s={},i={};or(i,kr,1),t.propsDefaults=Object.create(null),Ea(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Cl(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function mu(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=V(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let g=u[h];if(Cr(t.emitsOptions,g))continue;const y=e[g];if(c)if(W(i,g))y!==i[g]&&(i[g]=y,l=!0);else{const C=je(g);s[C]=ds(c,a,C,y,t,!1)}else y!==i[g]&&(i[g]=y,l=!0)}}}else{Ea(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!W(e,h)&&((u=tn(h))===h||!W(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=ds(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!W(e,h))&&(delete i[h],l=!0)}l&&Je(t,"set","$attrs")}function Ea(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Yn(c))continue;const l=e[c];let u;s&&W(s,u=je(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Cr(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=V(n),l=a||Q;for(let u=0;u<i.length;u++){const h=i[u];n[h]=ds(s,c,h,l[h],t,!W(l,h))}}return o}function ds(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=W(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&$(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(Xt(s),r=l[n]=c.call(null,e),Ct())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===tn(n))&&(r=!0))}return r}function Ia(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!$(t)){const u=h=>{c=!0;const[g,y]=Ia(h,e,!0);oe(o,g),y&&a.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return Z(t)&&r.set(t,Ht),Ht;if(F(i))for(let u=0;u<i.length;u++){const h=je(i[u]);Ci(h)&&(o[h]=Q)}else if(i)for(const u in i){const h=je(u);if(Ci(h)){const g=i[u],y=o[h]=F(g)||$(g)?{type:g}:oe({},g);if(y){const C=Oi(Boolean,y.type),P=Oi(String,y.type);y[0]=C>-1,y[1]=P<0||C<P,(C>-1||W(y,"default"))&&a.push(h)}}}const l=[o,a];return Z(t)&&r.set(t,l),l}function Ci(t){return t[0]!=="$"}function Si(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Pi(t,e){return Si(t)===Si(e)}function Oi(t,e){return F(e)?e.findIndex(n=>Pi(n,t)):$(e)&&Pi(e,t)?0:-1}const wa=t=>t[0]==="_"||t==="$stable",zs=t=>F(t)?t.map(Fe):[Fe(t)],_u=(t,e,n)=>{if(e._n)return e;const r=yt((...s)=>zs(e(...s)),n);return r._c=!1,r},Ta=(t,e,n)=>{const r=t._ctx;for(const s in t){if(wa(s))continue;const i=t[s];if($(i))e[s]=_u(s,i,r);else if(i!=null){const o=zs(i);e[s]=()=>o}}},Ra=(t,e)=>{const n=zs(e);t.slots.default=()=>n},vu=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=V(e),or(e,"_",n)):Ta(e,t.slots={})}else t.slots={},e&&Ra(t,e);or(t.slots,kr,1)},yu=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Q;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(oe(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Ta(e,s)),o=e}else e&&(Ra(t,e),o={default:1});if(i)for(const a in s)!wa(a)&&!(a in o)&&delete s[a]};function hs(t,e,n,r,s=!1){if(F(t)){t.forEach((g,y)=>hs(g,e&&(F(e)?e[y]:e),n,r,s));return}if(Zn(r)&&!s)return;const i=r.shapeFlag&4?Nr(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Q?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(se(l)?(u[l]=null,W(h,l)&&(h[l]=null)):ue(l)&&(l.value=null)),$(c))ft(c,a,12,[o,u]);else{const g=se(c),y=ue(c);if(g||y){const C=()=>{if(t.f){const P=g?W(h,c)?h[c]:u[c]:c.value;s?F(P)&&Os(P,i):F(P)?P.includes(i)||P.push(i):g?(u[c]=[i],W(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else g?(u[c]=o,W(h,c)&&(h[c]=o)):y&&(c.value=o,t.k&&(u[t.k]=o))};o?(C.id=-1,ge(C,n)):C()}}}const ge=Kl;function bu(t){return Eu(t)}function Eu(t,e){const n=rs();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:g,setScopeId:y=Se,insertStaticContent:C}=t,P=(f,d,p,m=null,v=null,b=null,R=!1,I=null,w=!!d.dynamicChildren)=>{if(f===d)return;f&&!un(f,d)&&(m=_(f),pe(f,v,b,!0),f=null),d.patchFlag===-2&&(w=!1,d.dynamicChildren=null);const{type:E,ref:N,shapeFlag:S}=d;switch(E){case Or:L(f,d,p,m);break;case Pt:k(f,d,p,m);break;case Hr:f==null&&M(d,p,m,R);break;case Ue:mt(f,d,p,m,v,b,R,I,w);break;default:S&1?ne(f,d,p,m,v,b,R,I,w):S&6?De(f,d,p,m,v,b,R,I,w):(S&64||S&128)&&E.process(f,d,p,m,v,b,R,I,w,T)}N!=null&&v&&hs(N,f&&f.ref,b,d||f,!d)},L=(f,d,p,m)=>{if(f==null)r(d.el=a(d.children),p,m);else{const v=d.el=f.el;d.children!==f.children&&l(v,d.children)}},k=(f,d,p,m)=>{f==null?r(d.el=c(d.children||""),p,m):d.el=f.el},M=(f,d,p,m)=>{[f.el,f.anchor]=C(f.children,d,p,m,f.el,f.anchor)},j=({el:f,anchor:d},p,m)=>{let v;for(;f&&f!==d;)v=g(f),r(f,p,m),f=v;r(d,p,m)},x=({el:f,anchor:d})=>{let p;for(;f&&f!==d;)p=g(f),s(f),f=p;s(d)},ne=(f,d,p,m,v,b,R,I,w)=>{R=R||d.type==="svg",f==null?re(d,p,m,v,b,R,I,w):Ne(f,d,v,b,R,I,w)},re=(f,d,p,m,v,b,R,I)=>{let w,E;const{type:N,props:S,shapeFlag:D,transition:B,dirs:H}=f;if(w=f.el=o(f.type,b,S&&S.is,S),D&8?u(w,f.children):D&16&&we(f.children,w,null,m,v,b&&N!=="foreignObject",R,I),H&&_t(f,null,m,"created"),_e(w,f,f.scopeId,R,m),S){for(const G in S)G!=="value"&&!Yn(G)&&i(w,G,null,S[G],b,f.children,m,v,ce);"value"in S&&i(w,"value",null,S.value),(E=S.onVnodeBeforeMount)&&Le(E,m,f)}H&&_t(f,null,m,"beforeMount");const X=(!v||v&&!v.pendingBranch)&&B&&!B.persisted;X&&B.beforeEnter(w),r(w,d,p),((E=S&&S.onVnodeMounted)||X||H)&&ge(()=>{E&&Le(E,m,f),X&&B.enter(w),H&&_t(f,null,m,"mounted")},v)},_e=(f,d,p,m,v)=>{if(p&&y(f,p),m)for(let b=0;b<m.length;b++)y(f,m[b]);if(v){let b=v.subTree;if(d===b){const R=v.vnode;_e(f,R,R.scopeId,R.slotScopeIds,v.parent)}}},we=(f,d,p,m,v,b,R,I,w=0)=>{for(let E=w;E<f.length;E++){const N=f[E]=I?st(f[E]):Fe(f[E]);P(null,N,d,p,m,v,b,R,I)}},Ne=(f,d,p,m,v,b,R)=>{const I=d.el=f.el;let{patchFlag:w,dynamicChildren:E,dirs:N}=d;w|=f.patchFlag&16;const S=f.props||Q,D=d.props||Q;let B;p&&vt(p,!1),(B=D.onVnodeBeforeUpdate)&&Le(B,p,d,f),N&&_t(d,f,p,"beforeUpdate"),p&&vt(p,!0);const H=v&&d.type!=="foreignObject";if(E?ye(f.dynamicChildren,E,I,p,m,H,b):R||z(f,d,I,null,p,m,H,b,!1),w>0){if(w&16)Ze(I,d,S,D,p,m,v);else if(w&2&&S.class!==D.class&&i(I,"class",null,D.class,v),w&4&&i(I,"style",S.style,D.style,v),w&8){const X=d.dynamicProps;for(let G=0;G<X.length;G++){const ee=X[G],Te=S[ee],Ut=D[ee];(Ut!==Te||ee==="value")&&i(I,ee,Te,Ut,v,f.children,p,m,ce)}}w&1&&f.children!==d.children&&u(I,d.children)}else!R&&E==null&&Ze(I,d,S,D,p,m,v);((B=D.onVnodeUpdated)||N)&&ge(()=>{B&&Le(B,p,d,f),N&&_t(d,f,p,"updated")},m)},ye=(f,d,p,m,v,b,R)=>{for(let I=0;I<d.length;I++){const w=f[I],E=d[I],N=w.el&&(w.type===Ue||!un(w,E)||w.shapeFlag&70)?h(w.el):p;P(w,E,N,null,m,v,b,R,!0)}},Ze=(f,d,p,m,v,b,R)=>{if(p!==m){if(p!==Q)for(const I in p)!Yn(I)&&!(I in m)&&i(f,I,p[I],null,R,d.children,v,b,ce);for(const I in m){if(Yn(I))continue;const w=m[I],E=p[I];w!==E&&I!=="value"&&i(f,I,E,w,R,d.children,v,b,ce)}"value"in m&&i(f,"value",p.value,m.value)}},mt=(f,d,p,m,v,b,R,I,w)=>{const E=d.el=f?f.el:a(""),N=d.anchor=f?f.anchor:a("");let{patchFlag:S,dynamicChildren:D,slotScopeIds:B}=d;B&&(I=I?I.concat(B):B),f==null?(r(E,p,m),r(N,p,m),we(d.children,p,N,v,b,R,I,w)):S>0&&S&64&&D&&f.dynamicChildren?(ye(f.dynamicChildren,D,p,v,b,R,I),(d.key!=null||v&&d===v.subTree)&&Aa(f,d,!0)):z(f,d,p,N,v,b,R,I,w)},De=(f,d,p,m,v,b,R,I,w)=>{d.slotScopeIds=I,f==null?d.shapeFlag&512?v.ctx.activate(d,p,m,R,w):cn(d,p,m,v,b,R,w):Mt(f,d,w)},cn=(f,d,p,m,v,b,R)=>{const I=f.component=Nu(f,m,v);if(pa(f)&&(I.ctx.renderer=T),Du(I),I.asyncDep){if(v&&v.registerDep(I,ie),!f.el){const w=I.subTree=te(Pt);k(null,w,d,p)}return}ie(I,f,d,p,v,b,R)},Mt=(f,d,p)=>{const m=d.component=f.component;if(Wl(f,d,p))if(m.asyncDep&&!m.asyncResolved){J(m,d,p);return}else m.next=d,xl(m.update),m.update();else d.el=f.el,m.vnode=d},ie=(f,d,p,m,v,b,R)=>{const I=()=>{if(f.isMounted){let{next:N,bu:S,u:D,parent:B,vnode:H}=f,X=N,G;vt(f,!1),N?(N.el=H.el,J(f,N,R)):N=H,S&&Xn(S),(G=N.props&&N.props.onVnodeBeforeUpdate)&&Le(G,B,N,H),vt(f,!0);const ee=Br(f),Te=f.subTree;f.subTree=ee,P(Te,ee,h(Te.el),_(Te),f,v,b),N.el=ee.el,X===null&&Vl(f,ee.el),D&&ge(D,v),(G=N.props&&N.props.onVnodeUpdated)&&ge(()=>Le(G,B,N,H),v)}else{let N;const{el:S,props:D}=d,{bm:B,m:H,parent:X}=f,G=Zn(d);if(vt(f,!1),B&&Xn(B),!G&&(N=D&&D.onVnodeBeforeMount)&&Le(N,X,d),vt(f,!0),S&&K){const ee=()=>{f.subTree=Br(f),K(S,f.subTree,f,v,null)};G?d.type.__asyncLoader().then(()=>!f.isUnmounted&&ee()):ee()}else{const ee=f.subTree=Br(f);P(null,ee,p,m,f,v,b),d.el=ee.el}if(H&&ge(H,v),!G&&(N=D&&D.onVnodeMounted)){const ee=d;ge(()=>Le(N,X,ee),v)}(d.shapeFlag&256||X&&Zn(X.vnode)&&X.vnode.shapeFlag&256)&&f.a&&ge(f.a,v),f.isMounted=!0,d=p=m=null}},w=f.effect=new Ls(I,()=>Ws(E),f.scope),E=f.update=()=>w.run();E.id=f.uid,vt(f,!0),E()},J=(f,d,p)=>{d.component=f;const m=f.vnode.props;f.vnode=d,f.next=null,mu(f,d.props,m,p),yu(f,d.children,p),nn(),yi(),rn()},z=(f,d,p,m,v,b,R,I,w=!1)=>{const E=f&&f.children,N=f?f.shapeFlag:0,S=d.children,{patchFlag:D,shapeFlag:B}=d;if(D>0){if(D&128){et(E,S,p,m,v,b,R,I,w);return}else if(D&256){We(E,S,p,m,v,b,R,I,w);return}}B&8?(N&16&&ce(E,v,b),S!==E&&u(p,S)):N&16?B&16?et(E,S,p,m,v,b,R,I,w):ce(E,v,b,!0):(N&8&&u(p,""),B&16&&we(S,p,m,v,b,R,I,w))},We=(f,d,p,m,v,b,R,I,w)=>{f=f||Ht,d=d||Ht;const E=f.length,N=d.length,S=Math.min(E,N);let D;for(D=0;D<S;D++){const B=d[D]=w?st(d[D]):Fe(d[D]);P(f[D],B,p,null,v,b,R,I,w)}E>N?ce(f,v,b,!0,!1,S):we(d,p,m,v,b,R,I,w,S)},et=(f,d,p,m,v,b,R,I,w)=>{let E=0;const N=d.length;let S=f.length-1,D=N-1;for(;E<=S&&E<=D;){const B=f[E],H=d[E]=w?st(d[E]):Fe(d[E]);if(un(B,H))P(B,H,p,null,v,b,R,I,w);else break;E++}for(;E<=S&&E<=D;){const B=f[S],H=d[D]=w?st(d[D]):Fe(d[D]);if(un(B,H))P(B,H,p,null,v,b,R,I,w);else break;S--,D--}if(E>S){if(E<=D){const B=D+1,H=B<N?d[B].el:m;for(;E<=D;)P(null,d[E]=w?st(d[E]):Fe(d[E]),p,H,v,b,R,I,w),E++}}else if(E>D)for(;E<=S;)pe(f[E],v,b,!0),E++;else{const B=E,H=E,X=new Map;for(E=H;E<=D;E++){const ve=d[E]=w?st(d[E]):Fe(d[E]);ve.key!=null&&X.set(ve.key,E)}let G,ee=0;const Te=D-H+1;let Ut=!1,ci=0;const ln=new Array(Te);for(E=0;E<Te;E++)ln[E]=0;for(E=B;E<=S;E++){const ve=f[E];if(ee>=Te){pe(ve,v,b,!0);continue}let xe;if(ve.key!=null)xe=X.get(ve.key);else for(G=H;G<=D;G++)if(ln[G-H]===0&&un(ve,d[G])){xe=G;break}xe===void 0?pe(ve,v,b,!0):(ln[xe-H]=E+1,xe>=ci?ci=xe:Ut=!0,P(ve,d[xe],p,null,v,b,R,I,w),ee++)}const li=Ut?Iu(ln):Ht;for(G=li.length-1,E=Te-1;E>=0;E--){const ve=H+E,xe=d[ve],ui=ve+1<N?d[ve+1].el:m;ln[E]===0?P(null,xe,p,ui,v,b,R,I,w):Ut&&(G<0||E!==li[G]?Me(xe,p,ui,2):G--)}}},Me=(f,d,p,m,v=null)=>{const{el:b,type:R,transition:I,children:w,shapeFlag:E}=f;if(E&6){Me(f.component.subTree,d,p,m);return}if(E&128){f.suspense.move(d,p,m);return}if(E&64){R.move(f,d,p,T);return}if(R===Ue){r(b,d,p);for(let S=0;S<w.length;S++)Me(w[S],d,p,m);r(f.anchor,d,p);return}if(R===Hr){j(f,d,p);return}if(m!==2&&E&1&&I)if(m===0)I.beforeEnter(b),r(b,d,p),ge(()=>I.enter(b),v);else{const{leave:S,delayLeave:D,afterLeave:B}=I,H=()=>r(b,d,p),X=()=>{S(b,()=>{H(),B&&B()})};D?D(b,H,X):X()}else r(b,d,p)},pe=(f,d,p,m=!1,v=!1)=>{const{type:b,props:R,ref:I,children:w,dynamicChildren:E,shapeFlag:N,patchFlag:S,dirs:D}=f;if(I!=null&&hs(I,null,p,f,!0),N&256){d.ctx.deactivate(f);return}const B=N&1&&D,H=!Zn(f);let X;if(H&&(X=R&&R.onVnodeBeforeUnmount)&&Le(X,d,f),N&6)jn(f.component,p,m);else{if(N&128){f.suspense.unmount(p,m);return}B&&_t(f,null,d,"beforeUnmount"),N&64?f.type.remove(f,d,p,v,T,m):E&&(b!==Ue||S>0&&S&64)?ce(E,d,p,!1,!0):(b===Ue&&S&384||!v&&N&16)&&ce(w,d,p),m&&xt(f)}(H&&(X=R&&R.onVnodeUnmounted)||B)&&ge(()=>{X&&Le(X,d,f),B&&_t(f,null,d,"unmounted")},p)},xt=f=>{const{type:d,el:p,anchor:m,transition:v}=f;if(d===Ue){Lt(p,m);return}if(d===Hr){x(f);return}const b=()=>{s(p),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(f.shapeFlag&1&&v&&!v.persisted){const{leave:R,delayLeave:I}=v,w=()=>R(p,b);I?I(f.el,b,w):w()}else b()},Lt=(f,d)=>{let p;for(;f!==d;)p=g(f),s(f),f=p;s(d)},jn=(f,d,p)=>{const{bum:m,scope:v,update:b,subTree:R,um:I}=f;m&&Xn(m),v.stop(),b&&(b.active=!1,pe(R,f,d,p)),I&&ge(I,d),ge(()=>{f.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},ce=(f,d,p,m=!1,v=!1,b=0)=>{for(let R=b;R<f.length;R++)pe(f[R],d,p,m,v)},_=f=>f.shapeFlag&6?_(f.component.subTree):f.shapeFlag&128?f.suspense.next():g(f.anchor||f.el),A=(f,d,p)=>{f==null?d._vnode&&pe(d._vnode,null,null,!0):P(d._vnode||null,f,d,null,null,null,p),yi(),ca(),d._vnode=f},T={p:P,um:pe,m:Me,r:xt,mt:cn,mc:we,pc:z,pbc:ye,n:_,o:t};let O,K;return e&&([O,K]=e(T)),{render:A,hydrate:O,createApp:pu(A,O)}}function vt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Aa(t,e,n=!1){const r=t.children,s=e.children;if(F(r)&&F(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=st(s[i]),a.el=o.el),n||Aa(o,a)),a.type===Or&&(a.el=o.el)}}function Iu(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const wu=t=>t.__isTeleport,Ue=Symbol.for("v-fgt"),Or=Symbol.for("v-txt"),Pt=Symbol.for("v-cmt"),Hr=Symbol.for("v-stc"),_n=[];let Ce=null;function ps(t=!1){_n.push(Ce=t?null:[])}function Tu(){_n.pop(),Ce=_n[_n.length-1]||null}let Rn=1;function ki(t){Rn+=t}function Ca(t){return t.dynamicChildren=Rn>0?Ce||Ht:null,Tu(),Rn>0&&Ce&&Ce.push(t),t}function Ni(t,e,n,r,s,i){return Ca(he(t,e,n,r,s,i,!0))}function Ru(t,e,n,r,s){return Ca(te(t,e,n,r,s,!0))}function gs(t){return t?t.__v_isVNode===!0:!1}function un(t,e){return t.type===e.type&&t.key===e.key}const kr="__vInternal",Sa=({key:t})=>t??null,tr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?se(t)||ue(t)||$(t)?{i:Ee,r:t,k:e,f:!!n}:t:null);function he(t,e=null,n=null,r=0,s=null,i=t===Ue?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Sa(e),ref:e&&tr(e),scopeId:Sr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ee};return a?(Ks(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=se(n)?8:16),Rn>0&&!o&&Ce&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ce.push(c),c}const te=Au;function Au(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===iu)&&(t=Pt),gs(t)){const a=Yt(t,e,!0);return n&&Ks(a,n),Rn>0&&!i&&Ce&&(a.shapeFlag&6?Ce[Ce.indexOf(t)]=a:Ce.push(a)),a.patchFlag|=-2,a}if(Fu(t)&&(t=t.__vccOpts),e){e=Cu(e);let{class:a,style:c}=e;a&&!se(a)&&(e.class=Ms(a)),Z(c)&&(Qo(c)&&!F(c)&&(c=oe({},c)),e.style=Ds(c))}const o=se(t)?1:zl(t)?128:wu(t)?64:Z(t)?4:$(t)?2:0;return he(t,e,n,r,s,o,i,!0)}function Cu(t){return t?Qo(t)||kr in t?oe({},t):t:null}function Yt(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?Pu(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Sa(a),ref:e&&e.ref?n&&s?F(s)?s.concat(tr(e)):[s,tr(e)]:tr(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ue?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Yt(t.ssContent),ssFallback:t.ssFallback&&Yt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function bt(t=" ",e=0){return te(Or,null,t,e)}function Su(t="",e=!1){return e?(ps(),Ru(Pt,null,t)):te(Pt,null,t)}function Fe(t){return t==null||typeof t=="boolean"?te(Pt):F(t)?te(Ue,null,t.slice()):typeof t=="object"?st(t):te(Or,null,String(t))}function st(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Yt(t)}function Ks(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(F(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Ks(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(kr in e)?e._ctx=Ee:s===3&&Ee&&(Ee.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else $(e)?(e={default:e,_ctx:Ee},n=32):(e=String(e),r&64?(n=16,e=[bt(e)]):n=8);t.children=e,t.shapeFlag|=n}function Pu(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Ms([e.class,r.class]));else if(s==="style")e.style=Ds([e.style,r.style]);else if(Er(s)){const i=e[s],o=r[s];o&&i!==o&&!(F(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Le(t,e,n,r=null){Pe(t,e,7,[n,r])}const Ou=ba();let ku=0;function Nu(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Ou,i={uid:ku++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Qc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ia(r,s),emitsOptions:ua(r,s),emit:null,emitted:null,propsDefaults:Q,inheritAttrs:r.inheritAttrs,ctx:Q,data:Q,props:Q,attrs:Q,slots:Q,refs:Q,setupState:Q,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Fl.bind(null,i),t.ce&&t.ce(i),i}let ae=null,qs,Ft,Di="__VUE_INSTANCE_SETTERS__";(Ft=rs()[Di])||(Ft=rs()[Di]=[]),Ft.push(t=>ae=t),qs=t=>{Ft.length>1?Ft.forEach(e=>e(t)):Ft[0](t)};const Xt=t=>{qs(t),t.scope.on()},Ct=()=>{ae&&ae.scope.off(),qs(null)};function Pa(t){return t.vnode.shapeFlag&4}let An=!1;function Du(t,e=!1){An=e;const{props:n,children:r}=t.vnode,s=Pa(t);gu(t,n,s,e),vu(t,r);const i=s?Mu(t,e):void 0;return An=!1,i}function Mu(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Zo(new Proxy(t.ctx,au));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Lu(t):null;Xt(t),nn();const i=ft(r,t,0,[t.props,s]);if(rn(),Ct(),Lo(i)){if(i.then(Ct,Ct),e)return i.then(o=>{Mi(t,o,e)}).catch(o=>{Ar(o,t,0)});t.asyncDep=i}else Mi(t,i,e)}else Oa(t,e)}function Mi(t,e,n){$(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Z(e)&&(t.setupState=sa(e)),Oa(t,n)}let xi;function Oa(t,e,n){const r=t.type;if(!t.render){if(!e&&xi&&!r.render){const s=r.template||Vs(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=oe(oe({isCustomElement:i,delimiters:a},o),c);r.render=xi(s,l)}}t.render=r.render||Se}Xt(t),nn(),cu(t),rn(),Ct()}function xu(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return me(t,"get","$attrs"),e[n]}}))}function Lu(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return xu(t)},slots:t.slots,emit:t.emit,expose:e}}function Nr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(sa(Zo(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in mn)return mn[n](t)},has(e,n){return n in e||n in mn}}))}function Uu(t,e=!0){return $(t)?t.displayName||t.name:t.name||e&&t.__name}function Fu(t){return $(t)&&"__vccOpts"in t}const be=(t,e)=>Nl(t,e,An);function ka(t,e,n){const r=arguments.length;return r===2?Z(e)&&!F(e)?gs(e)?te(t,null,[e]):te(t,e):te(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&gs(n)&&(n=[n]),te(t,e,n))}const Bu=Symbol.for("v-scx"),$u=()=>Oe(Bu),Hu="3.3.4",ju="http://www.w3.org/2000/svg",wt=typeof document<"u"?document:null,Li=wt&&wt.createElement("template"),Wu={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?wt.createElementNS(ju,t):wt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>wt.createTextNode(t),createComment:t=>wt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>wt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Li.innerHTML=r?`<svg>${t}</svg>`:t;const a=Li.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Vu(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function zu(t,e,n){const r=t.style,s=se(n);if(n&&!s){if(e&&!se(e))for(const i in e)n[i]==null&&ms(r,i,"");for(const i in n)ms(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Ui=/\s*!important$/;function ms(t,e,n){if(F(n))n.forEach(r=>ms(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Ku(t,e);Ui.test(n)?t.setProperty(tn(r),n.replace(Ui,""),"important"):t[r]=n}}const Fi=["Webkit","Moz","ms"],jr={};function Ku(t,e){const n=jr[e];if(n)return n;let r=je(e);if(r!=="filter"&&r in t)return jr[e]=r;r=Tr(r);for(let s=0;s<Fi.length;s++){const i=Fi[s]+r;if(i in t)return jr[e]=i}return e}const Bi="http://www.w3.org/1999/xlink";function qu(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Bi,e.slice(6,e.length)):t.setAttributeNS(Bi,e,n);else{const i=Xc(e);n==null||i&&!Bo(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Gu(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Bo(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function Bt(t,e,n,r){t.addEventListener(e,n,r)}function Ju(t,e,n,r){t.removeEventListener(e,n,r)}function Yu(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=Xu(e);if(r){const l=i[e]=ef(r,s);Bt(t,a,l,c)}else o&&(Ju(t,a,o,c),i[e]=void 0)}}const $i=/(?:Once|Passive|Capture)$/;function Xu(t){let e;if($i.test(t)){e={};let r;for(;r=t.match($i);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):tn(t.slice(2)),e]}let Wr=0;const Qu=Promise.resolve(),Zu=()=>Wr||(Qu.then(()=>Wr=0),Wr=Date.now());function ef(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Pe(tf(r,n.value),e,5,[r])};return n.value=t,n.attached=Zu(),n}function tf(t,e){if(F(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Hi=/^on[a-z]/,nf=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?Vu(t,r,s):e==="style"?zu(t,n,r):Er(e)?Ps(e)||Yu(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):rf(t,e,r,s))?Gu(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),qu(t,e,r,s))};function rf(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Hi.test(e)&&$(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Hi.test(e)&&se(n)?!1:e in t}const ji=t=>{const e=t.props["onUpdate:modelValue"]||!1;return F(e)?n=>Xn(e,n):e};function sf(t){t.target.composing=!0}function Wi(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const _m={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=ji(s);const i=r||s.props&&s.props.type==="number";Bt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=ns(a)),t._assign(a)}),n&&Bt(t,"change",()=>{t.value=t.value.trim()}),e||(Bt(t,"compositionstart",sf),Bt(t,"compositionend",Wi),Bt(t,"change",Wi))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=ji(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&ns(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},of=oe({patchProp:nf},Wu);let Vi;function af(){return Vi||(Vi=bu(of))}const cf=(...t)=>{const e=af().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=lf(r);if(!s)return;const i=e._component;!$(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function lf(t){return se(t)?document.querySelector(t):t}/*!
  * vue-router v4.2.0
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const $t=typeof window<"u";function uf(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const q=Object.assign;function Vr(t,e){const n={};for(const r in e){const s=e[r];n[r]=ke(s)?s.map(t):t(s)}return n}const vn=()=>{},ke=Array.isArray,ff=/\/$/,df=t=>t.replace(ff,"");function zr(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=mf(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function hf(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function zi(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function pf(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Qt(e.matched[r],n.matched[s])&&Na(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Qt(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Na(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!gf(t[n],e[n]))return!1;return!0}function gf(t,e){return ke(t)?Ki(t,e):ke(e)?Ki(e,t):t===e}function Ki(t,e){return ke(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function mf(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Cn;(function(t){t.pop="pop",t.push="push"})(Cn||(Cn={}));var yn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(yn||(yn={}));function _f(t){if(!t)if($t){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),df(t)}const vf=/^[^#]+#/;function yf(t,e){return t.replace(vf,"#")+e}function bf(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Dr=()=>({left:window.pageXOffset,top:window.pageYOffset});function Ef(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=bf(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function qi(t,e){return(history.state?history.state.position-e:-1)+t}const _s=new Map;function If(t,e){_s.set(t,e)}function wf(t){const e=_s.get(t);return _s.delete(t),e}let Tf=()=>location.protocol+"//"+location.host;function Da(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),zi(c,"")}return zi(n,t)+r+s}function Rf(t,e,n,r){let s=[],i=[],o=null;const a=({state:g})=>{const y=Da(t,location),C=n.value,P=e.value;let L=0;if(g){if(n.value=y,e.value=g,o&&o===C){o=null;return}L=P?g.position-P.position:0}else r(y);s.forEach(k=>{k(n.value,C,{delta:L,type:Cn.pop,direction:L?L>0?yn.forward:yn.back:yn.unknown})})};function c(){o=n.value}function l(g){s.push(g);const y=()=>{const C=s.indexOf(g);C>-1&&s.splice(C,1)};return i.push(y),y}function u(){const{history:g}=window;g.state&&g.replaceState(q({},g.state,{scroll:Dr()}),"")}function h(){for(const g of i)g();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function Gi(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Dr():null}}function Af(t){const{history:e,location:n}=window,r={value:Da(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),g=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:Tf()+t+c;try{e[u?"replaceState":"pushState"](l,"",g),s.value=l}catch(y){console.error(y),n[u?"replace":"assign"](g)}}function o(c,l){const u=q({},e.state,Gi(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=q({},s.value,e.state,{forward:c,scroll:Dr()});i(u.current,u,!0);const h=q({},Gi(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function Cf(t){t=_f(t);const e=Af(t),n=Rf(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=q({location:"",base:t,go:r,createHref:yf.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Sf(t){return typeof t=="string"||t&&typeof t=="object"}function Ma(t){return typeof t=="string"||typeof t=="symbol"}const nt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},xa=Symbol("");var Ji;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ji||(Ji={}));function Zt(t,e){return q(new Error,{type:t,[xa]:!0},e)}function Ve(t,e){return t instanceof Error&&xa in t&&(e==null||!!(t.type&e))}const Yi="[^/]+?",Pf={sensitive:!1,strict:!1,start:!0,end:!0},Of=/[.+*?^${}()[\]/\\]/g;function kf(t,e){const n=q({},Pf,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const g=l[h];let y=40+(n.sensitive?.25:0);if(g.type===0)h||(s+="/"),s+=g.value.replace(Of,"\\$&"),y+=40;else if(g.type===1){const{value:C,repeatable:P,optional:L,regexp:k}=g;i.push({name:C,repeatable:P,optional:L});const M=k||Yi;if(M!==Yi){y+=10;try{new RegExp(`(${M})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${C}" (${M}): `+x.message)}}let j=P?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;h||(j=L&&l.length<2?`(?:/${j})`:"/"+j),L&&(j+="?"),s+=j,y+=20,L&&(y+=-8),P&&(y+=-20),M===".*"&&(y+=-50)}u.push(y)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let g=1;g<u.length;g++){const y=u[g]||"",C=i[g-1];h[C.name]=y&&C.repeatable?y.split("/"):y}return h}function c(l){let u="",h=!1;for(const g of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const y of g)if(y.type===0)u+=y.value;else if(y.type===1){const{value:C,repeatable:P,optional:L}=y,k=C in l?l[C]:"";if(ke(k)&&!P)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const M=ke(k)?k.join("/"):k;if(!M)if(L)g.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${C}"`);u+=M}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function Nf(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Df(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Nf(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Xi(r))return 1;if(Xi(s))return-1}return s.length-r.length}function Xi(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Mf={type:0,value:""},xf=/[a-zA-Z0-9_]/;function Lf(t){if(!t)return[[]];if(t==="/")return[[Mf]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(y){throw new Error(`ERR (${n})/"${l}": ${y}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function g(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):g();break;case 4:g(),n=r;break;case 1:c==="("?n=2:xf.test(c)?g():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function Uf(t,e,n){const r=kf(Lf(t.path),n),s=q(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Ff(t,e){const n=[],r=new Map;e=eo({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,g){const y=!g,C=Bf(u);C.aliasOf=g&&g.record;const P=eo(e,u),L=[C];if("alias"in u){const j=typeof u.alias=="string"?[u.alias]:u.alias;for(const x of j)L.push(q({},C,{components:g?g.record.components:C.components,path:x,aliasOf:g?g.record:C}))}let k,M;for(const j of L){const{path:x}=j;if(h&&x[0]!=="/"){const ne=h.record.path,re=ne[ne.length-1]==="/"?"":"/";j.path=h.record.path+(x&&re+x)}if(k=Uf(j,h,P),g?g.alias.push(k):(M=M||k,M!==k&&M.alias.push(k),y&&u.name&&!Zi(k)&&o(u.name)),C.children){const ne=C.children;for(let re=0;re<ne.length;re++)i(ne[re],k,g&&g.children[re])}g=g||k,(k.record.components&&Object.keys(k.record.components).length||k.record.name||k.record.redirect)&&c(k)}return M?()=>{o(M)}:vn}function o(u){if(Ma(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&Df(u,n[h])>=0&&(u.record.path!==n[h].record.path||!La(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Zi(u)&&r.set(u.record.name,u)}function l(u,h){let g,y={},C,P;if("name"in u&&u.name){if(g=r.get(u.name),!g)throw Zt(1,{location:u});P=g.record.name,y=q(Qi(h.params,g.keys.filter(M=>!M.optional).map(M=>M.name)),u.params&&Qi(u.params,g.keys.map(M=>M.name))),C=g.stringify(y)}else if("path"in u)C=u.path,g=n.find(M=>M.re.test(C)),g&&(y=g.parse(C),P=g.record.name);else{if(g=h.name?r.get(h.name):n.find(M=>M.re.test(h.path)),!g)throw Zt(1,{location:u,currentLocation:h});P=g.record.name,y=q({},h.params,u.params),C=g.stringify(y)}const L=[];let k=g;for(;k;)L.unshift(k.record),k=k.parent;return{name:P,path:C,params:y,matched:L,meta:Hf(L)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Qi(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Bf(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:$f(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function $f(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Zi(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Hf(t){return t.reduce((e,n)=>q(e,n.meta),{})}function eo(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function La(t,e){return e.children.some(n=>n===t||La(t,n))}const Ua=/#/g,jf=/&/g,Wf=/\//g,Vf=/=/g,zf=/\?/g,Fa=/\+/g,Kf=/%5B/g,qf=/%5D/g,Ba=/%5E/g,Gf=/%60/g,$a=/%7B/g,Jf=/%7C/g,Ha=/%7D/g,Yf=/%20/g;function Gs(t){return encodeURI(""+t).replace(Jf,"|").replace(Kf,"[").replace(qf,"]")}function Xf(t){return Gs(t).replace($a,"{").replace(Ha,"}").replace(Ba,"^")}function vs(t){return Gs(t).replace(Fa,"%2B").replace(Yf,"+").replace(Ua,"%23").replace(jf,"%26").replace(Gf,"`").replace($a,"{").replace(Ha,"}").replace(Ba,"^")}function Qf(t){return vs(t).replace(Vf,"%3D")}function Zf(t){return Gs(t).replace(Ua,"%23").replace(zf,"%3F")}function ed(t){return t==null?"":Zf(t).replace(Wf,"%2F")}function fr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function td(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Fa," "),o=i.indexOf("="),a=fr(o<0?i:i.slice(0,o)),c=o<0?null:fr(i.slice(o+1));if(a in e){let l=e[a];ke(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function to(t){let e="";for(let n in t){const r=t[n];if(n=Qf(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(ke(r)?r.map(i=>i&&vs(i)):[r&&vs(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function nd(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=ke(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const rd=Symbol(""),no=Symbol(""),Mr=Symbol(""),Js=Symbol(""),ys=Symbol("");function fn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function it(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Zt(4,{from:n,to:e})):h instanceof Error?a(h):Sf(h)?a(Zt(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Kr(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(sd(a)){const l=(a.__vccOpts||a)[e];l&&s.push(it(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=uf(l)?l.default:l;i.components[o]=u;const g=(u.__vccOpts||u)[e];return g&&it(g,n,r,i,o)()}))}}return s}function sd(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ro(t){const e=Oe(Mr),n=Oe(Js),r=be(()=>e.resolve(Vt(t.to))),s=be(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const g=h.findIndex(Qt.bind(null,u));if(g>-1)return g;const y=so(c[l-2]);return l>1&&so(u)===y&&h[h.length-1].path!==y?h.findIndex(Qt.bind(null,c[l-2])):g}),i=be(()=>s.value>-1&&cd(n.params,r.value.params)),o=be(()=>s.value>-1&&s.value===n.matched.length-1&&Na(n.params,r.value.params));function a(c={}){return ad(c)?e[Vt(t.replace)?"replace":"push"](Vt(t.to)).catch(vn):Promise.resolve()}return{route:r,href:be(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const id=ha({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ro,setup(t,{slots:e}){const n=Mn(ro(t)),{options:r}=Oe(Mr),s=be(()=>({[io(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[io(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:ka("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),od=id;function ad(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function cd(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!ke(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function so(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const io=(t,e,n)=>t??e??n,ld=ha({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Oe(ys),s=be(()=>t.route||r.value),i=Oe(no,0),o=be(()=>{let l=Vt(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=be(()=>s.value.matched[o.value]);er(no,be(()=>o.value+1)),er(rd,a),er(ys,s);const c=na();return Qn(()=>[c.value,a.value,t.name],([l,u,h],[g,y,C])=>{u&&(u.instances[h]=l,y&&y!==u&&l&&l===g&&(u.leaveGuards.size||(u.leaveGuards=y.leaveGuards),u.updateGuards.size||(u.updateGuards=y.updateGuards))),l&&u&&(!y||!Qt(u,y)||!g)&&(u.enterCallbacks[h]||[]).forEach(P=>P(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=a.value,g=h&&h.components[u];if(!g)return oo(n.default,{Component:g,route:l});const y=h.props[u],C=y?y===!0?l.params:typeof y=="function"?y(l):y:null,L=ka(g,q({},C,e,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return oo(n.default,{Component:L,route:l})||L}}});function oo(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const ud=ld;function fd(t){const e=Ff(t.routes,t),n=t.parseQuery||td,r=t.stringifyQuery||to,s=t.history,i=fn(),o=fn(),a=fn(),c=Sl(nt);let l=nt;$t&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Vr.bind(null,_=>""+_),h=Vr.bind(null,ed),g=Vr.bind(null,fr);function y(_,A){let T,O;return Ma(_)?(T=e.getRecordMatcher(_),O=A):O=_,e.addRoute(O,T)}function C(_){const A=e.getRecordMatcher(_);A&&e.removeRoute(A)}function P(){return e.getRoutes().map(_=>_.record)}function L(_){return!!e.getRecordMatcher(_)}function k(_,A){if(A=q({},A||c.value),typeof _=="string"){const p=zr(n,_,A.path),m=e.resolve({path:p.path},A),v=s.createHref(p.fullPath);return q(p,m,{params:g(m.params),hash:fr(p.hash),redirectedFrom:void 0,href:v})}let T;if("path"in _)T=q({},_,{path:zr(n,_.path,A.path).path});else{const p=q({},_.params);for(const m in p)p[m]==null&&delete p[m];T=q({},_,{params:h(p)}),A.params=h(A.params)}const O=e.resolve(T,A),K=_.hash||"";O.params=u(g(O.params));const f=hf(r,q({},_,{hash:Xf(K),path:O.path})),d=s.createHref(f);return q({fullPath:f,hash:K,query:r===to?nd(_.query):_.query||{}},O,{redirectedFrom:void 0,href:d})}function M(_){return typeof _=="string"?zr(n,_,c.value.path):q({},_)}function j(_,A){if(l!==_)return Zt(8,{from:A,to:_})}function x(_){return _e(_)}function ne(_){return x(q(M(_),{replace:!0}))}function re(_){const A=_.matched[_.matched.length-1];if(A&&A.redirect){const{redirect:T}=A;let O=typeof T=="function"?T(_):T;return typeof O=="string"&&(O=O.includes("?")||O.includes("#")?O=M(O):{path:O},O.params={}),q({query:_.query,hash:_.hash,params:"path"in O?{}:_.params},O)}}function _e(_,A){const T=l=k(_),O=c.value,K=_.state,f=_.force,d=_.replace===!0,p=re(T);if(p)return _e(q(M(p),{state:typeof p=="object"?q({},K,p.state):K,force:f,replace:d}),A||T);const m=T;m.redirectedFrom=A;let v;return!f&&pf(r,O,T)&&(v=Zt(16,{to:m,from:O}),Me(O,O,!0,!1)),(v?Promise.resolve(v):ye(m,O)).catch(b=>Ve(b)?Ve(b,2)?b:et(b):z(b,m,O)).then(b=>{if(b){if(Ve(b,2))return _e(q({replace:d},M(b.to),{state:typeof b.to=="object"?q({},K,b.to.state):K,force:f}),A||m)}else b=mt(m,O,!0,d,K);return Ze(m,O,b),b})}function we(_,A){const T=j(_,A);return T?Promise.reject(T):Promise.resolve()}function Ne(_){const A=Lt.values().next().value;return A&&typeof A.runWithContext=="function"?A.runWithContext(_):_()}function ye(_,A){let T;const[O,K,f]=dd(_,A);T=Kr(O.reverse(),"beforeRouteLeave",_,A);for(const p of O)p.leaveGuards.forEach(m=>{T.push(it(m,_,A))});const d=we.bind(null,_,A);return T.push(d),ce(T).then(()=>{T=[];for(const p of i.list())T.push(it(p,_,A));return T.push(d),ce(T)}).then(()=>{T=Kr(K,"beforeRouteUpdate",_,A);for(const p of K)p.updateGuards.forEach(m=>{T.push(it(m,_,A))});return T.push(d),ce(T)}).then(()=>{T=[];for(const p of _.matched)if(p.beforeEnter&&!A.matched.includes(p))if(ke(p.beforeEnter))for(const m of p.beforeEnter)T.push(it(m,_,A));else T.push(it(p.beforeEnter,_,A));return T.push(d),ce(T)}).then(()=>(_.matched.forEach(p=>p.enterCallbacks={}),T=Kr(f,"beforeRouteEnter",_,A),T.push(d),ce(T))).then(()=>{T=[];for(const p of o.list())T.push(it(p,_,A));return T.push(d),ce(T)}).catch(p=>Ve(p,8)?p:Promise.reject(p))}function Ze(_,A,T){for(const O of a.list())Ne(()=>O(_,A,T))}function mt(_,A,T,O,K){const f=j(_,A);if(f)return f;const d=A===nt,p=$t?history.state:{};T&&(O||d?s.replace(_.fullPath,q({scroll:d&&p&&p.scroll},K)):s.push(_.fullPath,K)),c.value=_,Me(_,A,T,d),et()}let De;function cn(){De||(De=s.listen((_,A,T)=>{if(!jn.listening)return;const O=k(_),K=re(O);if(K){_e(q(K,{replace:!0}),O).catch(vn);return}l=O;const f=c.value;$t&&If(qi(f.fullPath,T.delta),Dr()),ye(O,f).catch(d=>Ve(d,12)?d:Ve(d,2)?(_e(d.to,O).then(p=>{Ve(p,20)&&!T.delta&&T.type===Cn.pop&&s.go(-1,!1)}).catch(vn),Promise.reject()):(T.delta&&s.go(-T.delta,!1),z(d,O,f))).then(d=>{d=d||mt(O,f,!1),d&&(T.delta&&!Ve(d,8)?s.go(-T.delta,!1):T.type===Cn.pop&&Ve(d,20)&&s.go(-1,!1)),Ze(O,f,d)}).catch(vn)}))}let Mt=fn(),ie=fn(),J;function z(_,A,T){et(_);const O=ie.list();return O.length?O.forEach(K=>K(_,A,T)):console.error(_),Promise.reject(_)}function We(){return J&&c.value!==nt?Promise.resolve():new Promise((_,A)=>{Mt.add([_,A])})}function et(_){return J||(J=!_,cn(),Mt.list().forEach(([A,T])=>_?T(_):A()),Mt.reset()),_}function Me(_,A,T,O){const{scrollBehavior:K}=t;if(!$t||!K)return Promise.resolve();const f=!T&&wf(qi(_.fullPath,0))||(O||!T)&&history.state&&history.state.scroll||null;return oa().then(()=>K(_,A,f)).then(d=>d&&Ef(d)).catch(d=>z(d,_,A))}const pe=_=>s.go(_);let xt;const Lt=new Set,jn={currentRoute:c,listening:!0,addRoute:y,removeRoute:C,hasRoute:L,getRoutes:P,resolve:k,options:t,push:x,replace:ne,go:pe,back:()=>pe(-1),forward:()=>pe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ie.add,isReady:We,install(_){const A=this;_.component("RouterLink",od),_.component("RouterView",ud),_.config.globalProperties.$router=A,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>Vt(c)}),$t&&!xt&&c.value===nt&&(xt=!0,x(s.location).catch(K=>{}));const T={};for(const K in nt)T[K]=be(()=>c.value[K]);_.provide(Mr,A),_.provide(Js,Mn(T)),_.provide(ys,c);const O=_.unmount;Lt.add(_),_.unmount=function(){Lt.delete(_),Lt.size<1&&(l=nt,De&&De(),De=null,c.value=nt,xt=!1,J=!1),O()}}};function ce(_){return _.reduce((A,T)=>A.then(()=>Ne(T)),Promise.resolve())}return jn}function dd(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Qt(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Qt(l,c))||s.push(c))}return[n,r,s]}function hd(){return Oe(Mr)}function vm(){return Oe(Js)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ja=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},pd=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Wa={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let g=(a&15)<<2|l>>6,y=l&63;c||(y=64,o||(g=64)),r.push(n[u],n[h],n[g],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ja(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):pd(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new gd;const g=i<<2|a>>4;if(r.push(g),l!==64){const y=a<<4&240|l>>2;if(r.push(y),h!==64){const C=l<<6&192|h;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class gd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const md=function(t){const e=ja(t);return Wa.encodeByteArray(e,!0)},dr=function(t){return md(t).replace(/\./g,"")},Va=function(t){try{return Wa.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _d(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vd=()=>_d().__FIREBASE_DEFAULTS__,yd=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},bd=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Va(t[1]);return e&&JSON.parse(e)},Ys=()=>{try{return vd()||yd()||bd()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},za=t=>{var e,n;return(n=(e=Ys())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ym=t=>{const e=za(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Ka=()=>{var t;return(t=Ys())===null||t===void 0?void 0:t.config},qa=t=>{var e;return(e=Ys())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bm(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[dr(JSON.stringify(n)),dr(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Id(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(fe())}function wd(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Td(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Rd(){const t=fe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ad(){try{return typeof indexedDB=="object"}catch{return!1}}function Cd(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sd="FirebaseError";class gt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Sd,Object.setPrototypeOf(this,gt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xn.prototype.create)}}class xn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Pd(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new gt(s,a,r)}}function Pd(t,e){return t.replace(Od,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Od=/\{\$([^}]+)}/g;function kd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function hr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(ao(i)&&ao(o)){if(!hr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ao(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function pn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function gn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Nd(t,e){const n=new Dd(t,e);return n.subscribe.bind(n)}class Dd{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Md(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=qr),s.error===void 0&&(s.error=qr),s.complete===void 0&&(s.complete=qr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Md(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function qr(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(t){return t&&t._delegate?t._delegate:t}class en{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ed;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ud(e))try{this.getOrInitializeService({instanceIdentifier:Et})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Et){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Et){return this.instances.has(e)}getOptions(e=Et){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ld(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Et){return this.component?this.component.multipleInstances?e:Et:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ld(t){return t===Et?void 0:t}function Ud(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new xd(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Y||(Y={}));const Bd={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},$d=Y.INFO,Hd={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},jd=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Hd[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ga{constructor(e){this.name=e,this._logLevel=$d,this._logHandler=jd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Bd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const Wd=(t,e)=>e.some(n=>t instanceof n);let co,lo;function Vd(){return co||(co=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zd(){return lo||(lo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ja=new WeakMap,bs=new WeakMap,Ya=new WeakMap,Gr=new WeakMap,Xs=new WeakMap;function Kd(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(dt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ja.set(n,t)}).catch(()=>{}),Xs.set(e,t),e}function qd(t){if(bs.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});bs.set(t,e)}let Es={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return bs.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ya.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return dt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Gd(t){Es=t(Es)}function Jd(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Jr(this),e,...n);return Ya.set(r,e.sort?e.sort():[e]),dt(r)}:zd().includes(t)?function(...e){return t.apply(Jr(this),e),dt(Ja.get(this))}:function(...e){return dt(t.apply(Jr(this),e))}}function Yd(t){return typeof t=="function"?Jd(t):(t instanceof IDBTransaction&&qd(t),Wd(t,Vd())?new Proxy(t,Es):t)}function dt(t){if(t instanceof IDBRequest)return Kd(t);if(Gr.has(t))return Gr.get(t);const e=Yd(t);return e!==t&&(Gr.set(t,e),Xs.set(e,t)),e}const Jr=t=>Xs.get(t);function Xd(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=dt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(dt(o.result),c.oldVersion,c.newVersion,dt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Qd=["get","getKey","getAll","getAllKeys","count"],Zd=["put","add","delete","clear"],Yr=new Map;function uo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Yr.get(e))return Yr.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Zd.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Qd.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Yr.set(e,i),i}Gd(t=>({...t,get:(e,n,r)=>uo(e,n)||t.get(e,n,r),has:(e,n)=>!!uo(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(th(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function th(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Is="@firebase/app",fo="0.9.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot=new Ga("@firebase/app"),nh="@firebase/app-compat",rh="@firebase/analytics-compat",sh="@firebase/analytics",ih="@firebase/app-check-compat",oh="@firebase/app-check",ah="@firebase/auth",ch="@firebase/auth-compat",lh="@firebase/database",uh="@firebase/database-compat",fh="@firebase/functions",dh="@firebase/functions-compat",hh="@firebase/installations",ph="@firebase/installations-compat",gh="@firebase/messaging",mh="@firebase/messaging-compat",_h="@firebase/performance",vh="@firebase/performance-compat",yh="@firebase/remote-config",bh="@firebase/remote-config-compat",Eh="@firebase/storage",Ih="@firebase/storage-compat",wh="@firebase/firestore",Th="@firebase/firestore-compat",Rh="firebase",Ah="9.22.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ws="[DEFAULT]",Ch={[Is]:"fire-core",[nh]:"fire-core-compat",[sh]:"fire-analytics",[rh]:"fire-analytics-compat",[oh]:"fire-app-check",[ih]:"fire-app-check-compat",[ah]:"fire-auth",[ch]:"fire-auth-compat",[lh]:"fire-rtdb",[uh]:"fire-rtdb-compat",[fh]:"fire-fn",[dh]:"fire-fn-compat",[hh]:"fire-iid",[ph]:"fire-iid-compat",[gh]:"fire-fcm",[mh]:"fire-fcm-compat",[_h]:"fire-perf",[vh]:"fire-perf-compat",[yh]:"fire-rc",[bh]:"fire-rc-compat",[Eh]:"fire-gcs",[Ih]:"fire-gcs-compat",[wh]:"fire-fst",[Th]:"fire-fst-compat","fire-js":"fire-js",[Rh]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr=new Map,Ts=new Map;function Sh(t,e){try{t.container.addComponent(e)}catch(n){Ot.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Sn(t){const e=t.name;if(Ts.has(e))return Ot.debug(`There were multiple attempts to register component ${e}.`),!1;Ts.set(e,t);for(const n of pr.values())Sh(n,t);return!0}function Xa(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ph={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ht=new xn("app","Firebase",Ph);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new en("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ht.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un=Ah;function Qa(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ws,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw ht.create("bad-app-name",{appName:String(s)});if(n||(n=Ka()),!n)throw ht.create("no-options");const i=pr.get(s);if(i){if(hr(n,i.options)&&hr(r,i.config))return i;throw ht.create("duplicate-app",{appName:s})}const o=new Fd(s);for(const c of Ts.values())o.addComponent(c);const a=new Oh(n,r,o);return pr.set(s,a),a}function kh(t=ws){const e=pr.get(t);if(!e&&t===ws&&Ka())return Qa();if(!e)throw ht.create("no-app",{appName:t});return e}function Kt(t,e,n){var r;let s=(r=Ch[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ot.warn(a.join(" "));return}Sn(new en(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nh="firebase-heartbeat-database",Dh=1,Pn="firebase-heartbeat-store";let Xr=null;function Za(){return Xr||(Xr=Xd(Nh,Dh,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Pn)}}}).catch(t=>{throw ht.create("idb-open",{originalErrorMessage:t.message})})),Xr}async function Mh(t){try{return await(await Za()).transaction(Pn).objectStore(Pn).get(ec(t))}catch(e){if(e instanceof gt)Ot.warn(e.message);else{const n=ht.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ot.warn(n.message)}}}async function ho(t,e){try{const r=(await Za()).transaction(Pn,"readwrite");await r.objectStore(Pn).put(e,ec(t)),await r.done}catch(n){if(n instanceof gt)Ot.warn(n.message);else{const r=ht.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ot.warn(r.message)}}}function ec(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xh=1024,Lh=30*24*60*60*1e3;class Uh{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Bh(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=po();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Lh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=po(),{heartbeatsToSend:n,unsentEntries:r}=Fh(this._heartbeatsCache.heartbeats),s=dr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function po(){return new Date().toISOString().substring(0,10)}function Fh(t,e=xh){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),go(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),go(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Bh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ad()?Cd().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Mh(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ho(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ho(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function go(t){return dr(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $h(t){Sn(new en("platform-logger",e=>new eh(e),"PRIVATE")),Sn(new en("heartbeat",e=>new Uh(e),"PRIVATE")),Kt(Is,fo,t),Kt(Is,fo,"esm2017"),Kt("fire-js","")}$h("");function Qs(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function tc(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Hh=tc,nc=new xn("auth","Firebase",tc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr=new Ga("@firebase/auth");function jh(t,...e){gr.logLevel<=Y.WARN&&gr.warn(`Auth (${Un}): ${t}`,...e)}function nr(t,...e){gr.logLevel<=Y.ERROR&&gr.error(`Auth (${Un}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(t,...e){throw Zs(t,...e)}function $e(t,...e){return Zs(t,...e)}function rc(t,e,n){const r=Object.assign(Object.assign({},Hh()),{[e]:n});return new xn("auth","Firebase",r).create(e,{appName:t.name})}function Wh(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ie(t,"argument-error"),rc(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Zs(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return nc.create(t,...e)}function U(t,e,...n){if(!t)throw Zs(e,...n)}function qe(t){const e="INTERNAL ASSERTION FAILED: "+t;throw nr(e),new Error(e)}function Ye(t,e){t||qe(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rs(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Vh(){return mo()==="http:"||mo()==="https:"}function mo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zh(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Vh()||wd()||"connection"in navigator)?navigator.onLine:!0}function Kh(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ye(n>e,"Short delay should be less than long delay!"),this.isMobile=Id()||Td()}get(){return zh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(t,e){Ye(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;qe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;qe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;qe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gh=new Fn(3e4,6e4);function sn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function on(t,e,n,r,s={}){return ic(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Ln(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),sc.fetch()(oc(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function ic(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},qh),e);try{const s=new Jh(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Jn(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Jn(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Jn(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Jn(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw rc(t,u,l);Ie(t,u)}}catch(s){if(s instanceof gt)throw s;Ie(t,"network-request-failed",{message:String(s)})}}async function Bn(t,e,n,r,s={}){const i=await on(t,e,n,r,s);return"mfaPendingCredential"in i&&Ie(t,"multi-factor-auth-required",{_serverResponse:i}),i}function oc(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?ei(t.config,s):`${t.config.apiScheme}://${s}`}class Jh{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r($e(this.auth,"network-request-failed")),Gh.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Jn(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=$e(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yh(t,e){return on(t,"POST","/v1/accounts:delete",e)}async function Xh(t,e){return on(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Qh(t,e=!1){const n=Qe(t),r=await n.getIdToken(e),s=ti(r);U(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:bn(Qr(s.auth_time)),issuedAtTime:bn(Qr(s.iat)),expirationTime:bn(Qr(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Qr(t){return Number(t)*1e3}function ti(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return nr("JWT malformed, contained fewer than 3 sections"),null;try{const s=Va(n);return s?JSON.parse(s):(nr("Failed to decode base64 JWT payload"),null)}catch(s){return nr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Zh(t){const e=ti(t);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function On(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof gt&&ep(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ep({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=bn(this.lastLoginAt),this.creationTime=bn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await On(t,Xh(n,{idToken:r}));U(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?sp(i.providerUserInfo):[],a=rp(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new ac(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function np(t){const e=Qe(t);await mr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function rp(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function sp(t){return t.map(e=>{var{providerId:n}=e,r=Qs(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ip(t,e){const n=await ic(t,{},async()=>{const r=Ln({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=oc(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",sc.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Zh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return U(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await ip(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new kn;return r&&(U(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(U(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(U(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new kn,this.toJSON())}_performRefresh(){return qe("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(t,e){U(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class St{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Qs(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new tp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ac(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await On(this,this.stsTokenManager.getToken(this.auth,e));return U(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Qh(this,e)}reload(){return np(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new St(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await mr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await On(this,Yh(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,y=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(a=n.tenantId)!==null&&a!==void 0?a:void 0,L=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,k=(l=n.createdAt)!==null&&l!==void 0?l:void 0,M=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:j,emailVerified:x,isAnonymous:ne,providerData:re,stsTokenManager:_e}=n;U(j&&_e,e,"internal-error");const we=kn.fromJSON(this.name,_e);U(typeof j=="string",e,"internal-error"),rt(h,e.name),rt(g,e.name),U(typeof x=="boolean",e,"internal-error"),U(typeof ne=="boolean",e,"internal-error"),rt(y,e.name),rt(C,e.name),rt(P,e.name),rt(L,e.name),rt(k,e.name),rt(M,e.name);const Ne=new St({uid:j,auth:e,email:g,emailVerified:x,displayName:h,isAnonymous:ne,photoURL:C,phoneNumber:y,tenantId:P,stsTokenManager:we,createdAt:k,lastLoginAt:M});return re&&Array.isArray(re)&&(Ne.providerData=re.map(ye=>Object.assign({},ye))),L&&(Ne._redirectEventId=L),Ne}static async _fromIdTokenResponse(e,n,r=!1){const s=new kn;s.updateFromServerResponse(n);const i=new St({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await mr(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _o=new Map;function Ge(t){Ye(t instanceof Function,"Expected a class definition");let e=_o.get(t);return e?(Ye(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,_o.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}cc.type="NONE";const vo=cc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(t,e,n){return`firebase:${t}:${e}:${n}`}class qt{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=rr(this.userKey,s.apiKey,i),this.fullPersistenceKey=rr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?St._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new qt(Ge(vo),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||Ge(vo);const o=rr(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=St._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new qt(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new qt(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yo(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(fc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(lc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(hc(e))return"Blackberry";if(pc(e))return"Webos";if(ni(e))return"Safari";if((e.includes("chrome/")||uc(e))&&!e.includes("edge/"))return"Chrome";if(dc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function lc(t=fe()){return/firefox\//i.test(t)}function ni(t=fe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function uc(t=fe()){return/crios\//i.test(t)}function fc(t=fe()){return/iemobile/i.test(t)}function dc(t=fe()){return/android/i.test(t)}function hc(t=fe()){return/blackberry/i.test(t)}function pc(t=fe()){return/webos/i.test(t)}function xr(t=fe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function op(t=fe()){var e;return xr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ap(){return Rd()&&document.documentMode===10}function gc(t=fe()){return xr(t)||dc(t)||pc(t)||hc(t)||/windows phone/i.test(t)||fc(t)}function cp(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mc(t,e=[]){let n;switch(t){case"Browser":n=yo(fe());break;case"Worker":n=`${yo(fe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Un}/${r}`}async function _c(t,e){return on(t,"GET","/v2/recaptchaConfig",sn(t,e))}function bo(t){return t!==void 0&&t.enterprise!==void 0}class vc{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lp(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function yc(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=$e("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",lp().appendChild(r)})}function up(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const fp="https://www.google.com/recaptcha/enterprise.js?render=",dp="recaptcha-enterprise",hp="NO_RECAPTCHA";class bc{constructor(e){this.type=dp,this.auth=Dt(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{_c(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new vc(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;bo(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(hp)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&bo(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}yc(fp+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function _r(t,e,n,r=!1){const s=new bc(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Eo(this),this.idTokenSubscription=new Eo(this),this.beforeStateQueue=new pp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=nc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ge(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await qt.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await mr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Kh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Qe(e):null;return n&&U(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ge(e))})}async initializeRecaptchaConfig(){const e=await _c(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new vc(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new bc(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new xn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ge(e)||this._popupRedirectResolver;U(n,this,"argument-error"),this.redirectPersistenceManager=await qt.create(this,[Ge(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return U(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=mc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&jh(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Dt(t){return Qe(t)}class Eo{constructor(e){this.auth=e,this.observer=null,this.addObserver=Nd(n=>this.observer=n)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mp(t,e){const n=Xa(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(hr(i,e??{}))return s;Ie(s,"already-initialized")}return n.initialize({options:e})}function _p(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ge);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function vp(t,e,n){const r=Dt(t);U(r._canInitEmulator,r,"emulator-config-failed"),U(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Ec(e),{host:o,port:a}=yp(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||bp()}function Ec(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function yp(t){const e=Ec(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Io(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Io(o)}}}function Io(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function bp(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return qe("not implemented")}_getIdTokenResponse(e){return qe("not implemented")}_linkToIdToken(e,n){return qe("not implemented")}_getReauthenticationResolver(e){return qe("not implemented")}}async function Ep(t,e){return on(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zr(t,e){return Bn(t,"POST","/v1/accounts:signInWithPassword",sn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ip(t,e){return Bn(t,"POST","/v1/accounts:signInWithEmailLink",sn(t,e))}async function wp(t,e){return Bn(t,"POST","/v1/accounts:signInWithEmailLink",sn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends ri{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Nn(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Nn(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await _r(e,r,"signInWithPassword");return Zr(e,s)}else return Zr(e,r).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await _r(e,r,"signInWithPassword");return Zr(e,i)}else return Promise.reject(s)});case"emailLink":return Ip(e,{email:this._email,oobCode:this._password});default:Ie(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Ep(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return wp(e,{idToken:n,email:this._email,oobCode:this._password});default:Ie(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gt(t,e){return Bn(t,"POST","/v1/accounts:signInWithIdp",sn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tp="http://localhost";class kt extends ri{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new kt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ie("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Qs(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new kt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Gt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Gt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Gt(e,n)}buildRequest(){const e={requestUri:Tp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ln(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rp(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ap(t){const e=pn(gn(t)).link,n=e?pn(gn(e)).deep_link_id:null,r=pn(gn(t)).deep_link_id;return(r?pn(gn(r)).link:null)||r||n||e||t}class si{constructor(e){var n,r,s,i,o,a;const c=pn(gn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=Rp((s=c.mode)!==null&&s!==void 0?s:null);U(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Ap(e);try{return new si(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(){this.providerId=an.PROVIDER_ID}static credential(e,n){return Nn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=si.parseLink(n);return U(r,"argument-error"),Nn._fromEmailAndCode(e,r.code,r.tenantId)}}an.PROVIDER_ID="password";an.EMAIL_PASSWORD_SIGN_IN_METHOD="password";an.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends ii{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot extends $n{constructor(){super("facebook.com")}static credential(e){return kt._fromParams({providerId:ot.PROVIDER_ID,signInMethod:ot.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ot.credentialFromTaggedObject(e)}static credentialFromError(e){return ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ot.credential(e.oauthAccessToken)}catch{return null}}}ot.FACEBOOK_SIGN_IN_METHOD="facebook.com";ot.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at extends $n{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return kt._fromParams({providerId:at.PROVIDER_ID,signInMethod:at.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return at.credentialFromTaggedObject(e)}static credentialFromError(e){return at.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return at.credential(n,r)}catch{return null}}}at.GOOGLE_SIGN_IN_METHOD="google.com";at.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct extends $n{constructor(){super("github.com")}static credential(e){return kt._fromParams({providerId:ct.PROVIDER_ID,signInMethod:ct.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ct.credentialFromTaggedObject(e)}static credentialFromError(e){return ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ct.credential(e.oauthAccessToken)}catch{return null}}}ct.GITHUB_SIGN_IN_METHOD="github.com";ct.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt extends $n{constructor(){super("twitter.com")}static credential(e,n){return kt._fromParams({providerId:lt.PROVIDER_ID,signInMethod:lt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return lt.credentialFromTaggedObject(e)}static credentialFromError(e){return lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return lt.credential(n,r)}catch{return null}}}lt.TWITTER_SIGN_IN_METHOD="twitter.com";lt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function es(t,e){return Bn(t,"POST","/v1/accounts:signUp",sn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await St._fromIdTokenResponse(e,r,s),o=wo(r);return new Nt({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=wo(r);return new Nt({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function wo(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr extends gt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,vr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new vr(e,n,r,s)}}function Ic(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?vr._fromErrorAndOperation(t,i,e,r):i})}async function Cp(t,e,n=!1){const r=await On(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Nt._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sp(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await On(t,Ic(r,s,e,t),n);U(i.idToken,r,"internal-error");const o=ti(i.idToken);U(o,r,"internal-error");const{sub:a}=o;return U(t.uid===a,r,"user-mismatch"),Nt._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ie(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wc(t,e,n=!1){const r="signIn",s=await Ic(t,r,e),i=await Nt._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Pp(t,e){return wc(Dt(t),e)}async function Em(t,e,n){var r;const s=Dt(t),i={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=s._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const l=await _r(s,i,"signUpPassword");o=es(s,l)}else o=es(s,i).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await _r(s,i,"signUpPassword");return es(s,u)}else return Promise.reject(l)});const a=await o.catch(l=>Promise.reject(l)),c=await Nt._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(c.user),c}function Im(t,e,n){return Pp(Qe(t),an.credential(e,n))}function Op(t,e,n,r){return Qe(t).onIdTokenChanged(e,n,r)}function kp(t,e,n){return Qe(t).beforeAuthStateChanged(e,n)}function Tc(t,e,n,r){return Qe(t).onAuthStateChanged(e,n,r)}function Np(t){return Qe(t).signOut()}const yr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(yr,"1"),this.storage.removeItem(yr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dp(){const t=fe();return ni(t)||xr(t)}const Mp=1e3,xp=10;class Ac extends Rc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Dp()&&cp(),this.fallbackToPolling=gc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);ap()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,xp):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Mp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ac.type="LOCAL";const Lp=Ac;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc extends Rc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Cc.type="SESSION";const Sc=Cc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Up(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Lr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Up(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Lr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=oi("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const g=h;if(g.data.eventId===l)switch(g.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(g.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(){return window}function Bp(t){He().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pc(){return typeof He().WorkerGlobalScope<"u"&&typeof He().importScripts=="function"}async function $p(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Hp(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function jp(){return Pc()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc="firebaseLocalStorageDb",Wp=1,br="firebaseLocalStorage",kc="fbase_key";class Hn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ur(t,e){return t.transaction([br],e?"readwrite":"readonly").objectStore(br)}function Vp(){const t=indexedDB.deleteDatabase(Oc);return new Hn(t).toPromise()}function As(){const t=indexedDB.open(Oc,Wp);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(br,{keyPath:kc})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(br)?e(r):(r.close(),await Vp(),e(await As()))})})}async function To(t,e,n){const r=Ur(t,!0).put({[kc]:e,value:n});return new Hn(r).toPromise()}async function zp(t,e){const n=Ur(t,!1).get(e),r=await new Hn(n).toPromise();return r===void 0?null:r.value}function Ro(t,e){const n=Ur(t,!0).delete(e);return new Hn(n).toPromise()}const Kp=800,qp=3;class Nc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await As(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>qp)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Pc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Lr._getInstance(jp()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await $p(),!this.activeServiceWorker)return;this.sender=new Fp(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Hp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await As();return await To(e,yr,"1"),await Ro(e,yr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>To(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>zp(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ro(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ur(s,!1).getAll();return new Hn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Kp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Nc.type="LOCAL";const Gp=Nc;new Fn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dc(t,e){return e?Ge(e):(U(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai extends ri{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Gt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Gt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Gt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Jp(t){return wc(t.auth,new ai(t),t.bypassAuthState)}function Yp(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),Sp(n,new ai(t),t.bypassAuthState)}async function Xp(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),Cp(n,new ai(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Jp;case"linkViaPopup":case"linkViaRedirect":return Xp;case"reauthViaPopup":case"reauthViaRedirect":return Yp;default:Ie(this.auth,"internal-error")}}resolve(e){Ye(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ye(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qp=new Fn(2e3,1e4);async function wm(t,e,n){const r=Dt(t);Wh(t,e,ii);const s=Dc(r,n);return new Rt(r,"signInViaPopup",e,s).executeNotNull()}class Rt extends Mc{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Rt.currentPopupAction&&Rt.currentPopupAction.cancel(),Rt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){Ye(this.filter.length===1,"Popup operations only handle one event");const e=oi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject($e(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject($e(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Rt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject($e(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Qp.get())};e()}}Rt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zp="pendingRedirect",sr=new Map;class eg extends Mc{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=sr.get(this.auth._key());if(!e){try{const r=await tg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}sr.set(this.auth._key(),e)}return this.bypassAuthState||sr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tg(t,e){const n=sg(e),r=rg(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function ng(t,e){sr.set(t._key(),e)}function rg(t){return Ge(t._redirectPersistence)}function sg(t){return rr(Zp,t.config.apiKey,t.name)}async function ig(t,e,n=!1){const r=Dt(t),s=Dc(r,e),o=await new eg(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og=10*60*1e3;class ag{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!cg(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!xc(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError($e(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=og&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ao(e))}saveEventToCache(e){this.cachedEventUids.add(Ao(e)),this.lastProcessedEventTime=Date.now()}}function Ao(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function xc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function cg(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xc(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lg(t,e={}){return on(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ug=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,fg=/^https?/;async function dg(t){if(t.config.emulator)return;const{authorizedDomains:e}=await lg(t);for(const n of e)try{if(hg(n))return}catch{}Ie(t,"unauthorized-domain")}function hg(t){const e=Rs(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!fg.test(n))return!1;if(ug.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pg=new Fn(3e4,6e4);function Co(){const t=He().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function gg(t){return new Promise((e,n)=>{var r,s,i;function o(){Co(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Co(),n($e(t,"network-request-failed"))},timeout:pg.get()})}if(!((s=(r=He().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=He().gapi)===null||i===void 0)&&i.load)o();else{const a=up("iframefcb");return He()[a]=()=>{gapi.load?o():n($e(t,"network-request-failed"))},yc(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw ir=null,e})}let ir=null;function mg(t){return ir=ir||gg(t),ir}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _g=new Fn(5e3,15e3),vg="__/auth/iframe",yg="emulator/auth/iframe",bg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Eg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ig(t){const e=t.config;U(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ei(e,yg):`https://${t.config.authDomain}/${vg}`,r={apiKey:e.apiKey,appName:t.name,v:Un},s=Eg.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ln(r).slice(1)}`}async function wg(t){const e=await mg(t),n=He().gapi;return U(n,t,"internal-error"),e.open({where:document.body,url:Ig(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:bg,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=$e(t,"network-request-failed"),a=He().setTimeout(()=>{i(o)},_g.get());function c(){He().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Rg=500,Ag=600,Cg="_blank",Sg="http://localhost";class So{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Pg(t,e,n,r=Rg,s=Ag){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Tg),{width:r.toString(),height:s.toString(),top:i,left:o}),l=fe().toLowerCase();n&&(a=uc(l)?Cg:n),lc(l)&&(e=e||Sg,c.scrollbars="yes");const u=Object.entries(c).reduce((g,[y,C])=>`${g}${y}=${C},`,"");if(op(l)&&a!=="_self")return Og(e||"",a),new So(null);const h=window.open(e||"",a,u);U(h,t,"popup-blocked");try{h.focus()}catch{}return new So(h)}function Og(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kg="__/auth/handler",Ng="emulator/auth/handler",Dg=encodeURIComponent("fac");async function Po(t,e,n,r,s,i){U(t.config.authDomain,t,"auth-domain-config-required"),U(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Un,eventId:s};if(e instanceof ii){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",kd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof $n){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${Dg}=${encodeURIComponent(c)}`:"";return`${Mg(t)}?${Ln(a).slice(1)}${l}`}function Mg({config:t}){return t.emulator?ei(t,Ng):`https://${t.authDomain}/${kg}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts="webStorageSupport";class xg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Sc,this._completeRedirectFn=ig,this._overrideRedirectResult=ng}async _openPopup(e,n,r,s){var i;Ye((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Po(e,n,r,Rs(),s);return Pg(e,o,oi())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Po(e,n,r,Rs(),s);return Bp(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Ye(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await wg(e),r=new ag(e);return n.register("authEvent",s=>(U(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ts,{type:ts},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[ts];o!==void 0&&n(!!o),Ie(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=dg(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return gc()||ni()||xr()}}const Lg=xg;var Oo="@firebase/auth",ko="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fg(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Bg(t){Sn(new en("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;U(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:mc(t)},l=new gp(r,s,i,c);return _p(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Sn(new en("auth-internal",e=>{const n=Dt(e.getProvider("auth").getImmediate());return(r=>new Ug(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Kt(Oo,ko,Fg(t)),Kt(Oo,ko,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $g=5*60,Hg=qa("authIdTokenMaxAge")||$g;let No=null;const jg=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Hg)return;const s=n==null?void 0:n.token;No!==s&&(No=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Lc(t=kh()){const e=Xa(t,"auth");if(e.isInitialized())return e.getImmediate();const n=mp(t,{popupRedirectResolver:Lg,persistence:[Gp,Lp,Sc]}),r=qa("authTokenSyncURL");if(r){const i=jg(r);kp(n,i,()=>i(n.currentUser)),Op(n,o=>i(o))}const s=za("auth");return s&&vp(n,`http://${s}`),n}Bg("Browser");const Wg=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Vg=t=>(Bl("data-v-b6506672"),t=t(),$l(),t),zg={class:"navbar navbar-expand-lg navbar-dark",style:{"background-color":"#a1a0ac"}},Kg={class:"container-fluid"},qg=Vg(()=>he("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[he("span",{class:"navbar-toggler-icon"})],-1)),Gg={class:"collapse navbar-collapse",id:"navbarNav"},Jg={class:"navbar-nav me-auto mb-2 mb-lg-0"},Yg={class:"nav-item"},Xg={class:"nav-item"},Qg={class:"nav-item"},Zg={class:"nav-item"},em={class:"nav-item"},tm={class:"nav-item"},nm={key:0,class:"nav-item"},rm={__name:"App",setup(t){const e=hd(),n=na(!1);let r;ma(()=>{r=Lc(),Tc(r,i=>{i?n.value=!0:n.value=!1})});const s=()=>{Np(r).then(()=>{e.push("/")})};return(i,o)=>{const a=Ei("router-link"),c=Ei("router-view");return ps(),Ni(Ue,null,[he("nav",zg,[he("div",Kg,[qg,he("div",Gg,[he("ul",Jg,[he("li",Yg,[te(a,{class:"nav-link",to:"/Register"},{default:yt(()=>[bt(" Register")]),_:1})]),he("li",Xg,[te(a,{class:"nav-link",to:"/SignIn"},{default:yt(()=>[bt(" Sign In")]),_:1})]),he("li",Qg,[te(a,{class:"nav-link",to:"/DoctorList"},{default:yt(()=>[bt(" DoctorList")]),_:1})]),he("li",Zg,[te(a,{class:"nav-link",to:"/Map"},{default:yt(()=>[bt(" Map")]),_:1})]),he("li",em,[te(a,{class:"nav-link",to:"/Camera"},{default:yt(()=>[bt(" Camera")]),_:1})]),he("li",tm,[te(a,{class:"nav-link",to:"/About"},{default:yt(()=>[bt(" About")]),_:1})]),n.value?(ps(),Ni("li",nm,[he("button",{class:"btn btn-primary sign-out-btn",onClick:s},"Sign out")])):Su("",!0)])])])]),te(c)],64)}}},sm=Wg(rm,[["__scopeId","data-v-b6506672"]]),im="modulepreload",om=function(t){return"/"+t},Do={},ze=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=om(i),i in Do)return;Do[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=s.length-1;u>=0;u--){const h=s[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":im,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())},Uc=fd({history:Cf(),routes:[{path:"/",component:()=>ze(()=>import("./Register-5aa30aaa.js"),["assets/Register-5aa30aaa.js","assets/Register-c7080065.css"])},{path:"/register",component:()=>ze(()=>import("./Register-5aa30aaa.js"),["assets/Register-5aa30aaa.js","assets/Register-c7080065.css"])},{path:"/UserList",component:()=>ze(()=>import("./UserList-b2f37d5e.js"),["assets/UserList-b2f37d5e.js","assets/firebaseInit-7e9f54ec.js"]),meta:{requiresAuth:!0}},{path:"/DoctorList",component:()=>ze(()=>import("./DoctorList-ac76768d.js"),["assets/DoctorList-ac76768d.js","assets/firebaseInit-7e9f54ec.js","assets/DoctorList-24739d7b.css"]),meta:{requiresAuth:!0}},{path:"/Map",component:()=>ze(()=>import("./Map-71396da7.js"),["assets/Map-71396da7.js","assets/Map-ba8ab292.css"]),meta:{requiresAuth:!0}},{path:"/Camera",component:()=>ze(()=>import("./Camera-306734d0.js"),["assets/Camera-306734d0.js","assets/Camera-251769e0.css"])},{path:"/About",component:()=>ze(()=>import("./About-9b789441.js"),["assets/About-9b789441.js","assets/firebaseInit-7e9f54ec.js"])},{path:"/DoctorDetail/:id",component:()=>ze(()=>import("./DoctorDetail-d14a9234.js"),["assets/DoctorDetail-d14a9234.js","assets/firebaseInit-7e9f54ec.js","assets/DoctorDetail-71e67810.css"]),name:"DoctorDetail"},{path:"/SignIn",component:()=>ze(()=>import("./SignIn-6088fb47.js"),[])}]}),am=()=>new Promise((t,e)=>{const n=Tc(Lc(),r=>{n(),t(r)},e)});Uc.beforeEach(async(t,e,n)=>{t.matched.some(r=>r.meta.requiresAuth)?await am()?n():(alert("Sign in to get access"),n("/register")):n()});var cm="firebase",lm="9.22.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Kt(cm,lm,"app");var um=function(){return!!(window.location.hostname==="localhost"||window.location.hostname==="[::1]"||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))},Cs;typeof window<"u"&&(typeof Promise<"u"?Cs=new Promise(function(t){return window.addEventListener("load",t)}):Cs={then:function(t){return window.addEventListener("load",t)}});function fm(t,e){e===void 0&&(e={});var n=e.registrationOptions;n===void 0&&(n={}),delete e.registrationOptions;var r=function(s){for(var i=[],o=arguments.length-1;o-- >0;)i[o]=arguments[o+1];e&&e[s]&&e[s].apply(e,i)};"serviceWorker"in navigator&&Cs.then(function(){um()?(dm(t,r,n),navigator.serviceWorker.ready.then(function(s){r("ready",s)}).catch(function(s){return Dn(r,s)})):(Fc(t,r,n),navigator.serviceWorker.ready.then(function(s){r("ready",s)}).catch(function(s){return Dn(r,s)}))})}function Dn(t,e){navigator.onLine||t("offline"),t("error",e)}function Fc(t,e,n){navigator.serviceWorker.register(t,n).then(function(r){if(e("registered",r),r.waiting){e("updated",r);return}r.onupdatefound=function(){e("updatefound",r);var s=r.installing;s.onstatechange=function(){s.state==="installed"&&(navigator.serviceWorker.controller?e("updated",r):e("cached",r))}}}).catch(function(r){return Dn(e,r)})}function dm(t,e,n){fetch(t).then(function(r){r.status===404?(e("error",new Error("Service worker not found at "+t)),Mo()):r.headers.get("content-type").indexOf("javascript")===-1?(e("error",new Error("Expected "+t+" to have javascript content-type, but received "+r.headers.get("content-type"))),Mo()):Fc(t,e,n)}).catch(function(r){return Dn(e,r)})}function Mo(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()}).catch(function(t){return Dn(emit,t)})}fm(`${{}.BASE_URL}service-worker.js`,{ready(){console.log(`App is being served from cache by a service worker.
For more details, visit https://goo.gl/AFskqB`)},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}});const hm={apiKey:"AIzaSyDgznTMkxgRTJq34IlkPbv1b7go4Is_tQk",authDomain:"e-doctor-923d0.firebaseapp.com",projectId:"e-doctor-923d0",storageBucket:"e-doctor-923d0.appspot.com",messagingSenderId:"321148660890",appId:"1:321148660890:web:e20db85c65a91fd1c70323",measurementId:"G-BT5VX0BDF8"};Qa(hm);const Bc=cf(sm);Bc.use(Uc);Bc.mount("#app");export{kh as A,Xa as B,en as C,ym as D,bm as E,Ue as F,at as G,Ga as H,Qa as I,Im as J,Y as L,Un as S,Wg as _,he as a,Em as b,Ni as c,$l as d,mm as e,Ei as f,Lc as g,te as h,yt as i,Su as j,ma as k,vm as l,Ds as m,Ms as n,ps as o,Bl as p,Sn as q,na as r,wm as s,pm as t,hd as u,_m as v,gm as w,Kt as x,gt as y,Qe as z};
