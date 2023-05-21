(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function bs(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Q={},$t=[],Se=()=>{},Dc=()=>!1,xc=/^on[^a-z]/,pr=t=>xc.test(t),Es=t=>t.startsWith("onUpdate:"),oe=Object.assign,Is=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Mc=Object.prototype.hasOwnProperty,W=(t,e)=>Mc.call(t,e),U=Array.isArray,Ht=t=>gr(t)==="[object Map]",So=t=>gr(t)==="[object Set]",$=t=>typeof t=="function",se=t=>typeof t=="string",ws=t=>typeof t=="symbol",Z=t=>t!==null&&typeof t=="object",Ao=t=>Z(t)&&$(t.then)&&$(t.catch),Po=Object.prototype.toString,gr=t=>Po.call(t),Lc=t=>gr(t).slice(8,-1),Oo=t=>gr(t)==="[object Object]",Ts=t=>se(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Vn=bs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),mr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Uc=/-(\w)/g,He=mr(t=>t.replace(Uc,(e,n)=>n?n.toUpperCase():"")),Fc=/\B([A-Z])/g,en=mr(t=>t.replace(Fc,"-$1").toLowerCase()),_r=mr(t=>t.charAt(0).toUpperCase()+t.slice(1)),kr=mr(t=>t?`on${_r(t)}`:""),mn=(t,e)=>!Object.is(t,e),zn=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},er=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Gr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ni;const Jr=()=>ni||(ni=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Rs(t){if(U(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=se(r)?jc(r):Rs(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(se(t))return t;if(Z(t))return t}}const Bc=/;(?![^(]*\))/g,$c=/:([^]+)/,Hc=/\/\*[^]*?\*\//g;function jc(t){const e={};return t.replace(Hc,"").split(Bc).forEach(n=>{if(n){const r=n.split($c);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Cs(t){let e="";if(se(t))e=t;else if(U(t))for(let n=0;n<t.length;n++){const r=Cs(t[n]);r&&(e+=r+" ")}else if(Z(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Wc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Vc=bs(Wc);function ko(t){return!!t||t===""}const tm=t=>se(t)?t:t==null?"":U(t)||Z(t)&&(t.toString===Po||!$(t.toString))?JSON.stringify(t,No,2):String(t),No=(t,e)=>e&&e.__v_isRef?No(t,e.value):Ht(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:So(e)?{[`Set(${e.size})`]:[...e.values()]}:Z(e)&&!U(e)&&!Oo(e)?String(e):e;let Te;class zc{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Te,!e&&Te&&(this.index=(Te.scopes||(Te.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Te;try{return Te=this,e()}finally{Te=n}}}on(){Te=this}off(){Te=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Kc(t,e=Te){e&&e.active&&e.effects.push(t)}function qc(){return Te}const Ss=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Do=t=>(t.w&ht)>0,xo=t=>(t.n&ht)>0,Gc=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=ht},Jc=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Do(s)&&!xo(s)?s.delete(t):e[n++]=s,s.w&=~ht,s.n&=~ht}e.length=n}},Yr=new WeakMap;let ln=0,ht=1;const Xr=30;let Re;const Tt=Symbol(""),Qr=Symbol("");class As{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Kc(this,r)}run(){if(!this.active)return this.fn();let e=Re,n=lt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Re,Re=this,lt=!0,ht=1<<++ln,ln<=Xr?Gc(this):ri(this),this.fn()}finally{ln<=Xr&&Jc(this),ht=1<<--ln,Re=this.parent,lt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Re===this?this.deferStop=!0:this.active&&(ri(this),this.onStop&&this.onStop(),this.active=!1)}}function ri(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let lt=!0;const Mo=[];function tn(){Mo.push(lt),lt=!1}function nn(){const t=Mo.pop();lt=t===void 0?!0:t}function me(t,e,n){if(lt&&Re){let r=Yr.get(t);r||Yr.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Ss()),Lo(s)}}function Lo(t,e){let n=!1;ln<=Xr?xo(t)||(t.n|=ht,n=!Do(t)):n=!t.has(Re),n&&(t.add(Re),Re.deps.push(t))}function Ge(t,e,n,r,s,i){const o=Yr.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&U(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":U(t)?Ts(n)&&a.push(o.get("length")):(a.push(o.get(Tt)),Ht(t)&&a.push(o.get(Qr)));break;case"delete":U(t)||(a.push(o.get(Tt)),Ht(t)&&a.push(o.get(Qr)));break;case"set":Ht(t)&&a.push(o.get(Tt));break}if(a.length===1)a[0]&&Zr(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Zr(Ss(c))}}function Zr(t,e){const n=U(t)?t:[...t];for(const r of n)r.computed&&si(r);for(const r of n)r.computed||si(r)}function si(t,e){(t!==Re||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Yc=bs("__proto__,__v_isRef,__isVue"),Uo=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ws)),Xc=Ps(),Qc=Ps(!1,!0),Zc=Ps(!0),ii=el();function el(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=V(this);for(let i=0,o=this.length;i<o;i++)me(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(V)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){tn();const r=V(this)[e].apply(this,n);return nn(),r}}),t}function tl(t){const e=V(this);return me(e,"has",t),e.hasOwnProperty(t)}function Ps(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?_l:jo:e?Ho:$o).get(r))return r;const o=U(r);if(!t){if(o&&W(ii,s))return Reflect.get(ii,s,i);if(s==="hasOwnProperty")return tl}const a=Reflect.get(r,s,i);return(ws(s)?Uo.has(s):Yc(s))||(t||me(r,"get",s),e)?a:ue(a)?o&&Ts(s)?a:a.value:Z(a)?t?Wo(a):An(a):a}}const nl=Fo(),rl=Fo(!0);function Fo(t=!1){return function(n,r,s,i){let o=n[r];if(Gt(o)&&ue(o)&&!ue(s))return!1;if(!t&&(!tr(s)&&!Gt(s)&&(o=V(o),s=V(s)),!U(n)&&ue(o)&&!ue(s)))return o.value=s,!0;const a=U(n)&&Ts(r)?Number(r)<n.length:W(n,r),c=Reflect.set(n,r,s,i);return n===V(i)&&(a?mn(s,o)&&Ge(n,"set",r,s):Ge(n,"add",r,s)),c}}function sl(t,e){const n=W(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Ge(t,"delete",e,void 0),r}function il(t,e){const n=Reflect.has(t,e);return(!ws(e)||!Uo.has(e))&&me(t,"has",e),n}function ol(t){return me(t,"iterate",U(t)?"length":Tt),Reflect.ownKeys(t)}const Bo={get:Xc,set:nl,deleteProperty:sl,has:il,ownKeys:ol},al={get:Zc,set(t,e){return!0},deleteProperty(t,e){return!0}},cl=oe({},Bo,{get:Qc,set:rl}),Os=t=>t,vr=t=>Reflect.getPrototypeOf(t);function Un(t,e,n=!1,r=!1){t=t.__v_raw;const s=V(t),i=V(e);n||(e!==i&&me(s,"get",e),me(s,"get",i));const{has:o}=vr(s),a=r?Os:n?Ds:_n;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Fn(t,e=!1){const n=this.__v_raw,r=V(n),s=V(t);return e||(t!==s&&me(r,"has",t),me(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Bn(t,e=!1){return t=t.__v_raw,!e&&me(V(t),"iterate",Tt),Reflect.get(t,"size",t)}function oi(t){t=V(t);const e=V(this);return vr(e).has.call(e,t)||(e.add(t),Ge(e,"add",t,t)),this}function ai(t,e){e=V(e);const n=V(this),{has:r,get:s}=vr(n);let i=r.call(n,t);i||(t=V(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?mn(e,o)&&Ge(n,"set",t,e):Ge(n,"add",t,e),this}function ci(t){const e=V(this),{has:n,get:r}=vr(e);let s=n.call(e,t);s||(t=V(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Ge(e,"delete",t,void 0),i}function li(){const t=V(this),e=t.size!==0,n=t.clear();return e&&Ge(t,"clear",void 0,void 0),n}function $n(t,e){return function(r,s){const i=this,o=i.__v_raw,a=V(o),c=e?Os:t?Ds:_n;return!t&&me(a,"iterate",Tt),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function Hn(t,e,n){return function(...r){const s=this.__v_raw,i=V(s),o=Ht(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?Os:e?Ds:_n;return!e&&me(i,"iterate",c?Qr:Tt),{next(){const{value:h,done:g}=l.next();return g?{value:h,done:g}:{value:a?[u(h[0]),u(h[1])]:u(h),done:g}},[Symbol.iterator](){return this}}}}function Ze(t){return function(...e){return t==="delete"?!1:this}}function ll(){const t={get(i){return Un(this,i)},get size(){return Bn(this)},has:Fn,add:oi,set:ai,delete:ci,clear:li,forEach:$n(!1,!1)},e={get(i){return Un(this,i,!1,!0)},get size(){return Bn(this)},has:Fn,add:oi,set:ai,delete:ci,clear:li,forEach:$n(!1,!0)},n={get(i){return Un(this,i,!0)},get size(){return Bn(this,!0)},has(i){return Fn.call(this,i,!0)},add:Ze("add"),set:Ze("set"),delete:Ze("delete"),clear:Ze("clear"),forEach:$n(!0,!1)},r={get(i){return Un(this,i,!0,!0)},get size(){return Bn(this,!0)},has(i){return Fn.call(this,i,!0)},add:Ze("add"),set:Ze("set"),delete:Ze("delete"),clear:Ze("clear"),forEach:$n(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Hn(i,!1,!1),n[i]=Hn(i,!0,!1),e[i]=Hn(i,!1,!0),r[i]=Hn(i,!0,!0)}),[t,n,e,r]}const[ul,fl,dl,hl]=ll();function ks(t,e){const n=e?t?hl:dl:t?fl:ul;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(W(n,s)&&s in r?n:r,s,i)}const pl={get:ks(!1,!1)},gl={get:ks(!1,!0)},ml={get:ks(!0,!1)},$o=new WeakMap,Ho=new WeakMap,jo=new WeakMap,_l=new WeakMap;function vl(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function yl(t){return t.__v_skip||!Object.isExtensible(t)?0:vl(Lc(t))}function An(t){return Gt(t)?t:Ns(t,!1,Bo,pl,$o)}function bl(t){return Ns(t,!1,cl,gl,Ho)}function Wo(t){return Ns(t,!0,al,ml,jo)}function Ns(t,e,n,r,s){if(!Z(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=yl(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function jt(t){return Gt(t)?jt(t.__v_raw):!!(t&&t.__v_isReactive)}function Gt(t){return!!(t&&t.__v_isReadonly)}function tr(t){return!!(t&&t.__v_isShallow)}function Vo(t){return jt(t)||Gt(t)}function V(t){const e=t&&t.__v_raw;return e?V(e):t}function zo(t){return er(t,"__v_skip",!0),t}const _n=t=>Z(t)?An(t):t,Ds=t=>Z(t)?Wo(t):t;function Ko(t){lt&&Re&&(t=V(t),Lo(t.dep||(t.dep=Ss())))}function qo(t,e){t=V(t);const n=t.dep;n&&Zr(n)}function ue(t){return!!(t&&t.__v_isRef===!0)}function Go(t){return Jo(t,!1)}function El(t){return Jo(t,!0)}function Jo(t,e){return ue(t)?t:new Il(t,e)}class Il{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:V(e),this._value=n?e:_n(e)}get value(){return Ko(this),this._value}set value(e){const n=this.__v_isShallow||tr(e)||Gt(e);e=n?e:V(e),mn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:_n(e),qo(this))}}function Wt(t){return ue(t)?t.value:t}const wl={get:(t,e,n)=>Wt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ue(s)&&!ue(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Yo(t){return jt(t)?t:new Proxy(t,wl)}class Tl{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new As(e,()=>{this._dirty||(this._dirty=!0,qo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=V(this);return Ko(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Rl(t,e,n=!1){let r,s;const i=$(t);return i?(r=t,s=Se):(r=t.get,s=t.set),new Tl(r,s,i||!s,n)}function ut(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){yr(i,e,n)}return s}function Ae(t,e,n,r){if($(t)){const i=ut(t,e,n,r);return i&&Ao(i)&&i.catch(o=>{yr(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Ae(t[i],e,n,r));return s}function yr(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){ut(c,null,10,[t,o,a]);return}}Cl(t,n,s,r)}function Cl(t,e,n,r=!0){console.error(t)}let vn=!1,es=!1;const le=[];let Fe=0;const Vt=[];let ze=null,bt=0;const Xo=Promise.resolve();let xs=null;function Qo(t){const e=xs||Xo;return t?e.then(this?t.bind(this):t):e}function Sl(t){let e=Fe+1,n=le.length;for(;e<n;){const r=e+n>>>1;yn(le[r])<t?e=r+1:n=r}return e}function Ms(t){(!le.length||!le.includes(t,vn&&t.allowRecurse?Fe+1:Fe))&&(t.id==null?le.push(t):le.splice(Sl(t.id),0,t),Zo())}function Zo(){!vn&&!es&&(es=!0,xs=Xo.then(ta))}function Al(t){const e=le.indexOf(t);e>Fe&&le.splice(e,1)}function Pl(t){U(t)?Vt.push(...t):(!ze||!ze.includes(t,t.allowRecurse?bt+1:bt))&&Vt.push(t),Zo()}function ui(t,e=vn?Fe+1:0){for(;e<le.length;e++){const n=le[e];n&&n.pre&&(le.splice(e,1),e--,n())}}function ea(t){if(Vt.length){const e=[...new Set(Vt)];if(Vt.length=0,ze){ze.push(...e);return}for(ze=e,ze.sort((n,r)=>yn(n)-yn(r)),bt=0;bt<ze.length;bt++)ze[bt]();ze=null,bt=0}}const yn=t=>t.id==null?1/0:t.id,Ol=(t,e)=>{const n=yn(t)-yn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function ta(t){es=!1,vn=!0,le.sort(Ol);const e=Se;try{for(Fe=0;Fe<le.length;Fe++){const n=le[Fe];n&&n.active!==!1&&ut(n,null,14)}}finally{Fe=0,le.length=0,ea(),vn=!1,xs=null,(le.length||Vt.length)&&ta()}}function kl(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Q;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:g}=r[u]||Q;g&&(s=n.map(y=>se(y)?y.trim():y)),h&&(s=n.map(Gr))}let a,c=r[a=kr(e)]||r[a=kr(He(e))];!c&&i&&(c=r[a=kr(en(e))]),c&&Ae(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ae(l,t,6,s)}}function na(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!$(t)){const c=l=>{const u=na(l,e,!0);u&&(a=!0,oe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Z(t)&&r.set(t,null),null):(U(i)?i.forEach(c=>o[c]=null):oe(o,i),Z(t)&&r.set(t,o),o)}function br(t,e){return!t||!pr(e)?!1:(e=e.slice(2).replace(/Once$/,""),W(t,e[0].toLowerCase()+e.slice(1))||W(t,en(e))||W(t,e))}let Ee=null,Er=null;function nr(t){const e=Ee;return Ee=t,Er=t&&t.type.__scopeId||null,e}function Nl(t){Er=t}function Dl(){Er=null}function Lt(t,e=Ee,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Ii(-1);const i=nr(e);let o;try{o=t(...s)}finally{nr(i),r._d&&Ii(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Nr(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:g,setupState:y,ctx:S,inheritAttrs:P}=t;let L,k;const x=nr(t);try{if(n.shapeFlag&4){const M=s||r;L=Ue(u.call(M,M,h,i,y,g,S)),k=c}else{const M=e;L=Ue(M.length>1?M(i,{attrs:c,slots:a,emit:l}):M(i,null)),k=e.props?c:xl(c)}}catch(M){dn.length=0,yr(M,t,1),L=re(St)}let j=L;if(k&&P!==!1){const M=Object.keys(k),{shapeFlag:te}=j;M.length&&te&7&&(o&&M.some(Es)&&(k=Ml(k,o)),j=Jt(j,k))}return n.dirs&&(j=Jt(j),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&(j.transition=n.transition),L=j,nr(x),L}const xl=t=>{let e;for(const n in t)(n==="class"||n==="style"||pr(n))&&((e||(e={}))[n]=t[n]);return e},Ml=(t,e)=>{const n={};for(const r in t)(!Es(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Ll(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?fi(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const g=u[h];if(o[g]!==r[g]&&!br(l,g))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?fi(r,o,l):!0:!!o;return!1}function fi(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!br(n,i))return!0}return!1}function Ul({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Fl=t=>t.__isSuspense;function Bl(t,e){e&&e.pendingBranch?U(t)?e.effects.push(...t):e.effects.push(t):Pl(t)}const jn={};function Kn(t,e,n){return ra(t,e,n)}function ra(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Q){var a;const c=qc()===((a=ae)==null?void 0:a.scope)?ae:null;let l,u=!1,h=!1;if(ue(t)?(l=()=>t.value,u=tr(t)):jt(t)?(l=()=>t,r=!0):U(t)?(h=!0,u=t.some(M=>jt(M)||tr(M)),l=()=>t.map(M=>{if(ue(M))return M.value;if(jt(M))return It(M);if($(M))return ut(M,c,2)})):$(t)?e?l=()=>ut(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return g&&g(),Ae(t,c,3,[y])}:l=Se,e&&r){const M=l;l=()=>It(M())}let g,y=M=>{g=x.onStop=()=>{ut(M,c,4)}},S;if(En)if(y=Se,e?n&&Ae(e,c,3,[l(),h?[]:void 0,y]):l(),s==="sync"){const M=Du();S=M.__watcherHandles||(M.__watcherHandles=[])}else return Se;let P=h?new Array(t.length).fill(jn):jn;const L=()=>{if(x.active)if(e){const M=x.run();(r||u||(h?M.some((te,ne)=>mn(te,P[ne])):mn(M,P)))&&(g&&g(),Ae(e,c,3,[M,P===jn?void 0:h&&P[0]===jn?[]:P,y]),P=M)}else x.run()};L.allowRecurse=!!e;let k;s==="sync"?k=L:s==="post"?k=()=>pe(L,c&&c.suspense):(L.pre=!0,c&&(L.id=c.uid),k=()=>Ms(L));const x=new As(l,k);e?n?L():P=x.run():s==="post"?pe(x.run.bind(x),c&&c.suspense):x.run();const j=()=>{x.stop(),c&&c.scope&&Is(c.scope.effects,x)};return S&&S.push(j),j}function $l(t,e,n){const r=this.proxy,s=se(t)?t.includes(".")?sa(r,t):()=>r[t]:t.bind(r,r);let i;$(e)?i=e:(i=e.handler,n=e);const o=ae;Yt(this);const a=ra(s,i.bind(r),n);return o?Yt(o):Rt(),a}function sa(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function It(t,e){if(!Z(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ue(t))It(t.value,e);else if(U(t))for(let n=0;n<t.length;n++)It(t[n],e);else if(So(t)||Ht(t))t.forEach(n=>{It(n,e)});else if(Oo(t))for(const n in t)It(t[n],e);return t}function nm(t,e){const n=Ee;if(n===null)return t;const r=Rr(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=Q]=e[i];o&&($(o)&&(o={mounted:o,updated:o}),o.deep&&It(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function _t(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(tn(),Ae(c,n,8,[t.el,a,t,e]),nn())}}function ia(t,e){return $(t)?(()=>oe({name:t.name},e,{setup:t}))():t}const qn=t=>!!t.type.__asyncLoader,oa=t=>t.type.__isKeepAlive;function Hl(t,e){aa(t,"a",e)}function jl(t,e){aa(t,"da",e)}function aa(t,e,n=ae){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ir(e,r,n),n){let s=n.parent;for(;s&&s.parent;)oa(s.parent.vnode)&&Wl(r,e,n,s),s=s.parent}}function Wl(t,e,n,r){const s=Ir(e,t,r,!0);la(()=>{Is(r[e],s)},n)}function Ir(t,e,n=ae,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;tn(),Yt(n);const a=Ae(e,n,t,o);return Rt(),nn(),a});return r?s.unshift(i):s.push(i),i}}const Ye=t=>(e,n=ae)=>(!En||t==="sp")&&Ir(t,(...r)=>e(...r),n),Vl=Ye("bm"),ca=Ye("m"),zl=Ye("bu"),Kl=Ye("u"),ql=Ye("bum"),la=Ye("um"),Gl=Ye("sp"),Jl=Ye("rtg"),Yl=Ye("rtc");function Xl(t,e=ae){Ir("ec",t,e)}const ua="components";function di(t,e){return Zl(ua,t,!0,e)||t}const Ql=Symbol.for("v-ndc");function Zl(t,e,n=!0,r=!1){const s=Ee||ae;if(s){const i=s.type;if(t===ua){const a=Ou(i,!1);if(a&&(a===e||a===He(e)||a===_r(He(e))))return i}const o=hi(s[t]||i[t],e)||hi(s.appContext[t],e);return!o&&r?i:o}}function hi(t,e){return t&&(t[e]||t[He(e)]||t[_r(He(e))])}function rm(t,e,n,r){let s;const i=n&&n[r];if(U(t)||se(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Z(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const ts=t=>t?Ea(t)?Rr(t)||t.proxy:ts(t.parent):null,fn=oe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ts(t.parent),$root:t=>ts(t.root),$emit:t=>t.emit,$options:t=>Ls(t),$forceUpdate:t=>t.f||(t.f=()=>Ms(t.update)),$nextTick:t=>t.n||(t.n=Qo.bind(t.proxy)),$watch:t=>$l.bind(t)}),Dr=(t,e)=>t!==Q&&!t.__isScriptSetup&&W(t,e),eu={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const y=o[e];if(y!==void 0)switch(y){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Dr(r,e))return o[e]=1,r[e];if(s!==Q&&W(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&W(l,e))return o[e]=3,i[e];if(n!==Q&&W(n,e))return o[e]=4,n[e];ns&&(o[e]=0)}}const u=fn[e];let h,g;if(u)return e==="$attrs"&&me(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Q&&W(n,e))return o[e]=4,n[e];if(g=c.config.globalProperties,W(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Dr(s,e)?(s[e]=n,!0):r!==Q&&W(r,e)?(r[e]=n,!0):W(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Q&&W(t,o)||Dr(e,o)||(a=i[0])&&W(a,o)||W(r,o)||W(fn,o)||W(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:W(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function pi(t){return U(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ns=!0;function tu(t){const e=Ls(t),n=t.proxy,r=t.ctx;ns=!1,e.beforeCreate&&gi(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:g,beforeUpdate:y,updated:S,activated:P,deactivated:L,beforeDestroy:k,beforeUnmount:x,destroyed:j,unmounted:M,render:te,renderTracked:ne,renderTriggered:_e,errorCaptured:Ie,serverPrefetch:ke,expose:ye,inheritAttrs:Xe,components:mt,directives:Ne,filters:sn}=e;if(l&&nu(l,r,null),o)for(const J in o){const z=o[J];$(z)&&(r[J]=z.bind(n))}if(s){const J=s.call(n,n);Z(J)&&(t.data=An(J))}if(ns=!0,i)for(const J in i){const z=i[J],We=$(z)?z.bind(n,n):$(z.get)?z.get.bind(n,n):Se,Qe=!$(z)&&$(z.set)?z.set.bind(n):Se,De=be({get:We,set:Qe});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>De.value,set:he=>De.value=he})}if(a)for(const J in a)fa(a[J],r,n,J);if(c){const J=$(c)?c.call(n):c;Reflect.ownKeys(J).forEach(z=>{Gn(z,J[z])})}u&&gi(u,t,"c");function ie(J,z){U(z)?z.forEach(We=>J(We.bind(n))):z&&J(z.bind(n))}if(ie(Vl,h),ie(ca,g),ie(zl,y),ie(Kl,S),ie(Hl,P),ie(jl,L),ie(Xl,Ie),ie(Yl,ne),ie(Jl,_e),ie(ql,x),ie(la,M),ie(Gl,ke),U(ye))if(ye.length){const J=t.exposed||(t.exposed={});ye.forEach(z=>{Object.defineProperty(J,z,{get:()=>n[z],set:We=>n[z]=We})})}else t.exposed||(t.exposed={});te&&t.render===Se&&(t.render=te),Xe!=null&&(t.inheritAttrs=Xe),mt&&(t.components=mt),Ne&&(t.directives=Ne)}function nu(t,e,n=Se){U(t)&&(t=rs(t));for(const r in t){const s=t[r];let i;Z(s)?"default"in s?i=Pe(s.from||r,s.default,!0):i=Pe(s.from||r):i=Pe(s),ue(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function gi(t,e,n){Ae(U(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function fa(t,e,n,r){const s=r.includes(".")?sa(n,r):()=>n[r];if(se(t)){const i=e[t];$(i)&&Kn(s,i)}else if($(t))Kn(s,t.bind(n));else if(Z(t))if(U(t))t.forEach(i=>fa(i,e,n,r));else{const i=$(t.handler)?t.handler.bind(n):e[t.handler];$(i)&&Kn(s,i,t)}}function Ls(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>rr(c,l,o,!0)),rr(c,e,o)),Z(e)&&i.set(e,c),c}function rr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&rr(t,i,n,!0),s&&s.forEach(o=>rr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=ru[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const ru={data:mi,props:_i,emits:_i,methods:un,computed:un,beforeCreate:de,created:de,beforeMount:de,mounted:de,beforeUpdate:de,updated:de,beforeDestroy:de,beforeUnmount:de,destroyed:de,unmounted:de,activated:de,deactivated:de,errorCaptured:de,serverPrefetch:de,components:un,directives:un,watch:iu,provide:mi,inject:su};function mi(t,e){return e?t?function(){return oe($(t)?t.call(this,this):t,$(e)?e.call(this,this):e)}:e:t}function su(t,e){return un(rs(t),rs(e))}function rs(t){if(U(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function de(t,e){return t?[...new Set([].concat(t,e))]:e}function un(t,e){return t?oe(Object.create(null),t,e):e}function _i(t,e){return t?U(t)&&U(e)?[...new Set([...t,...e])]:oe(Object.create(null),pi(t),pi(e??{})):e}function iu(t,e){if(!t)return e;if(!e)return t;const n=oe(Object.create(null),t);for(const r in e)n[r]=de(t[r],e[r]);return n}function da(){return{app:null,config:{isNativeTag:Dc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ou=0;function au(t,e){return function(r,s=null){$(r)||(r=oe({},r)),s!=null&&!Z(s)&&(s=null);const i=da(),o=new Set;let a=!1;const c=i.app={_uid:ou++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:xu,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&$(l.install)?(o.add(l),l.install(c,...u)):$(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const g=re(r,s);return g.appContext=i,u&&e?e(g,l):t(g,l,h),a=!0,c._container=l,l.__vue_app__=c,Rr(g.component)||g.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){sr=c;try{return l()}finally{sr=null}}};return c}}let sr=null;function Gn(t,e){if(ae){let n=ae.provides;const r=ae.parent&&ae.parent.provides;r===n&&(n=ae.provides=Object.create(r)),n[t]=e}}function Pe(t,e,n=!1){const r=ae||Ee;if(r||sr){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:sr._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&$(e)?e.call(r&&r.proxy):e}}function cu(t,e,n,r=!1){const s={},i={};er(i,Tr,1),t.propsDefaults=Object.create(null),ha(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:bl(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function lu(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=V(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let g=u[h];if(br(t.emitsOptions,g))continue;const y=e[g];if(c)if(W(i,g))y!==i[g]&&(i[g]=y,l=!0);else{const S=He(g);s[S]=ss(c,a,S,y,t,!1)}else y!==i[g]&&(i[g]=y,l=!0)}}}else{ha(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!W(e,h)&&((u=en(h))===h||!W(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=ss(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!W(e,h))&&(delete i[h],l=!0)}l&&Ge(t,"set","$attrs")}function ha(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Vn(c))continue;const l=e[c];let u;s&&W(s,u=He(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:br(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=V(n),l=a||Q;for(let u=0;u<i.length;u++){const h=i[u];n[h]=ss(s,c,h,l[h],t,!W(l,h))}}return o}function ss(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=W(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&$(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(Yt(s),r=l[n]=c.call(null,e),Rt())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===en(n))&&(r=!0))}return r}function pa(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!$(t)){const u=h=>{c=!0;const[g,y]=pa(h,e,!0);oe(o,g),y&&a.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return Z(t)&&r.set(t,$t),$t;if(U(i))for(let u=0;u<i.length;u++){const h=He(i[u]);vi(h)&&(o[h]=Q)}else if(i)for(const u in i){const h=He(u);if(vi(h)){const g=i[u],y=o[h]=U(g)||$(g)?{type:g}:oe({},g);if(y){const S=Ei(Boolean,y.type),P=Ei(String,y.type);y[0]=S>-1,y[1]=P<0||S<P,(S>-1||W(y,"default"))&&a.push(h)}}}const l=[o,a];return Z(t)&&r.set(t,l),l}function vi(t){return t[0]!=="$"}function yi(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function bi(t,e){return yi(t)===yi(e)}function Ei(t,e){return U(e)?e.findIndex(n=>bi(n,t)):$(e)&&bi(e,t)?0:-1}const ga=t=>t[0]==="_"||t==="$stable",Us=t=>U(t)?t.map(Ue):[Ue(t)],uu=(t,e,n)=>{if(e._n)return e;const r=Lt((...s)=>Us(e(...s)),n);return r._c=!1,r},ma=(t,e,n)=>{const r=t._ctx;for(const s in t){if(ga(s))continue;const i=t[s];if($(i))e[s]=uu(s,i,r);else if(i!=null){const o=Us(i);e[s]=()=>o}}},_a=(t,e)=>{const n=Us(e);t.slots.default=()=>n},fu=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=V(e),er(e,"_",n)):ma(e,t.slots={})}else t.slots={},e&&_a(t,e);er(t.slots,Tr,1)},du=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Q;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(oe(s,e),!n&&a===1&&delete s._):(i=!e.$stable,ma(e,s)),o=e}else e&&(_a(t,e),o={default:1});if(i)for(const a in s)!ga(a)&&!(a in o)&&delete s[a]};function is(t,e,n,r,s=!1){if(U(t)){t.forEach((g,y)=>is(g,e&&(U(e)?e[y]:e),n,r,s));return}if(qn(r)&&!s)return;const i=r.shapeFlag&4?Rr(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Q?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(se(l)?(u[l]=null,W(h,l)&&(h[l]=null)):ue(l)&&(l.value=null)),$(c))ut(c,a,12,[o,u]);else{const g=se(c),y=ue(c);if(g||y){const S=()=>{if(t.f){const P=g?W(h,c)?h[c]:u[c]:c.value;s?U(P)&&Is(P,i):U(P)?P.includes(i)||P.push(i):g?(u[c]=[i],W(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else g?(u[c]=o,W(h,c)&&(h[c]=o)):y&&(c.value=o,t.k&&(u[t.k]=o))};o?(S.id=-1,pe(S,n)):S()}}}const pe=Bl;function hu(t){return pu(t)}function pu(t,e){const n=Jr();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:g,setScopeId:y=Se,insertStaticContent:S}=t,P=(f,d,p,m=null,v=null,b=null,R=!1,I=null,w=!!d.dynamicChildren)=>{if(f===d)return;f&&!an(f,d)&&(m=_(f),he(f,v,b,!0),f=null),d.patchFlag===-2&&(w=!1,d.dynamicChildren=null);const{type:E,ref:N,shapeFlag:A}=d;switch(E){case wr:L(f,d,p,m);break;case St:k(f,d,p,m);break;case xr:f==null&&x(d,p,m,R);break;case Le:mt(f,d,p,m,v,b,R,I,w);break;default:A&1?te(f,d,p,m,v,b,R,I,w):A&6?Ne(f,d,p,m,v,b,R,I,w):(A&64||A&128)&&E.process(f,d,p,m,v,b,R,I,w,T)}N!=null&&v&&is(N,f&&f.ref,b,d||f,!d)},L=(f,d,p,m)=>{if(f==null)r(d.el=a(d.children),p,m);else{const v=d.el=f.el;d.children!==f.children&&l(v,d.children)}},k=(f,d,p,m)=>{f==null?r(d.el=c(d.children||""),p,m):d.el=f.el},x=(f,d,p,m)=>{[f.el,f.anchor]=S(f.children,d,p,m,f.el,f.anchor)},j=({el:f,anchor:d},p,m)=>{let v;for(;f&&f!==d;)v=g(f),r(f,p,m),f=v;r(d,p,m)},M=({el:f,anchor:d})=>{let p;for(;f&&f!==d;)p=g(f),s(f),f=p;s(d)},te=(f,d,p,m,v,b,R,I,w)=>{R=R||d.type==="svg",f==null?ne(d,p,m,v,b,R,I,w):ke(f,d,v,b,R,I,w)},ne=(f,d,p,m,v,b,R,I)=>{let w,E;const{type:N,props:A,shapeFlag:D,transition:F,dirs:H}=f;if(w=f.el=o(f.type,b,A&&A.is,A),D&8?u(w,f.children):D&16&&Ie(f.children,w,null,m,v,b&&N!=="foreignObject",R,I),H&&_t(f,null,m,"created"),_e(w,f,f.scopeId,R,m),A){for(const G in A)G!=="value"&&!Vn(G)&&i(w,G,null,A[G],b,f.children,m,v,ce);"value"in A&&i(w,"value",null,A.value),(E=A.onVnodeBeforeMount)&&Me(E,m,f)}H&&_t(f,null,m,"beforeMount");const X=(!v||v&&!v.pendingBranch)&&F&&!F.persisted;X&&F.beforeEnter(w),r(w,d,p),((E=A&&A.onVnodeMounted)||X||H)&&pe(()=>{E&&Me(E,m,f),X&&F.enter(w),H&&_t(f,null,m,"mounted")},v)},_e=(f,d,p,m,v)=>{if(p&&y(f,p),m)for(let b=0;b<m.length;b++)y(f,m[b]);if(v){let b=v.subTree;if(d===b){const R=v.vnode;_e(f,R,R.scopeId,R.slotScopeIds,v.parent)}}},Ie=(f,d,p,m,v,b,R,I,w=0)=>{for(let E=w;E<f.length;E++){const N=f[E]=I?rt(f[E]):Ue(f[E]);P(null,N,d,p,m,v,b,R,I)}},ke=(f,d,p,m,v,b,R)=>{const I=d.el=f.el;let{patchFlag:w,dynamicChildren:E,dirs:N}=d;w|=f.patchFlag&16;const A=f.props||Q,D=d.props||Q;let F;p&&vt(p,!1),(F=D.onVnodeBeforeUpdate)&&Me(F,p,d,f),N&&_t(d,f,p,"beforeUpdate"),p&&vt(p,!0);const H=v&&d.type!=="foreignObject";if(E?ye(f.dynamicChildren,E,I,p,m,H,b):R||z(f,d,I,null,p,m,H,b,!1),w>0){if(w&16)Xe(I,d,A,D,p,m,v);else if(w&2&&A.class!==D.class&&i(I,"class",null,D.class,v),w&4&&i(I,"style",A.style,D.style,v),w&8){const X=d.dynamicProps;for(let G=0;G<X.length;G++){const ee=X[G],we=A[ee],xt=D[ee];(xt!==we||ee==="value")&&i(I,ee,we,xt,v,f.children,p,m,ce)}}w&1&&f.children!==d.children&&u(I,d.children)}else!R&&E==null&&Xe(I,d,A,D,p,m,v);((F=D.onVnodeUpdated)||N)&&pe(()=>{F&&Me(F,p,d,f),N&&_t(d,f,p,"updated")},m)},ye=(f,d,p,m,v,b,R)=>{for(let I=0;I<d.length;I++){const w=f[I],E=d[I],N=w.el&&(w.type===Le||!an(w,E)||w.shapeFlag&70)?h(w.el):p;P(w,E,N,null,m,v,b,R,!0)}},Xe=(f,d,p,m,v,b,R)=>{if(p!==m){if(p!==Q)for(const I in p)!Vn(I)&&!(I in m)&&i(f,I,p[I],null,R,d.children,v,b,ce);for(const I in m){if(Vn(I))continue;const w=m[I],E=p[I];w!==E&&I!=="value"&&i(f,I,E,w,R,d.children,v,b,ce)}"value"in m&&i(f,"value",p.value,m.value)}},mt=(f,d,p,m,v,b,R,I,w)=>{const E=d.el=f?f.el:a(""),N=d.anchor=f?f.anchor:a("");let{patchFlag:A,dynamicChildren:D,slotScopeIds:F}=d;F&&(I=I?I.concat(F):F),f==null?(r(E,p,m),r(N,p,m),Ie(d.children,p,N,v,b,R,I,w)):A>0&&A&64&&D&&f.dynamicChildren?(ye(f.dynamicChildren,D,p,v,b,R,I),(d.key!=null||v&&d===v.subTree)&&va(f,d,!0)):z(f,d,p,N,v,b,R,I,w)},Ne=(f,d,p,m,v,b,R,I,w)=>{d.slotScopeIds=I,f==null?d.shapeFlag&512?v.ctx.activate(d,p,m,R,w):sn(d,p,m,v,b,R,w):kt(f,d,w)},sn=(f,d,p,m,v,b,R)=>{const I=f.component=Ru(f,m,v);if(oa(f)&&(I.ctx.renderer=T),Cu(I),I.asyncDep){if(v&&v.registerDep(I,ie),!f.el){const w=I.subTree=re(St);k(null,w,d,p)}return}ie(I,f,d,p,v,b,R)},kt=(f,d,p)=>{const m=d.component=f.component;if(Ll(f,d,p))if(m.asyncDep&&!m.asyncResolved){J(m,d,p);return}else m.next=d,Al(m.update),m.update();else d.el=f.el,m.vnode=d},ie=(f,d,p,m,v,b,R)=>{const I=()=>{if(f.isMounted){let{next:N,bu:A,u:D,parent:F,vnode:H}=f,X=N,G;vt(f,!1),N?(N.el=H.el,J(f,N,R)):N=H,A&&zn(A),(G=N.props&&N.props.onVnodeBeforeUpdate)&&Me(G,F,N,H),vt(f,!0);const ee=Nr(f),we=f.subTree;f.subTree=ee,P(we,ee,h(we.el),_(we),f,v,b),N.el=ee.el,X===null&&Ul(f,ee.el),D&&pe(D,v),(G=N.props&&N.props.onVnodeUpdated)&&pe(()=>Me(G,F,N,H),v)}else{let N;const{el:A,props:D}=d,{bm:F,m:H,parent:X}=f,G=qn(d);if(vt(f,!1),F&&zn(F),!G&&(N=D&&D.onVnodeBeforeMount)&&Me(N,X,d),vt(f,!0),A&&K){const ee=()=>{f.subTree=Nr(f),K(A,f.subTree,f,v,null)};G?d.type.__asyncLoader().then(()=>!f.isUnmounted&&ee()):ee()}else{const ee=f.subTree=Nr(f);P(null,ee,p,m,f,v,b),d.el=ee.el}if(H&&pe(H,v),!G&&(N=D&&D.onVnodeMounted)){const ee=d;pe(()=>Me(N,X,ee),v)}(d.shapeFlag&256||X&&qn(X.vnode)&&X.vnode.shapeFlag&256)&&f.a&&pe(f.a,v),f.isMounted=!0,d=p=m=null}},w=f.effect=new As(I,()=>Ms(E),f.scope),E=f.update=()=>w.run();E.id=f.uid,vt(f,!0),E()},J=(f,d,p)=>{d.component=f;const m=f.vnode.props;f.vnode=d,f.next=null,lu(f,d.props,m,p),du(f,d.children,p),tn(),ui(),nn()},z=(f,d,p,m,v,b,R,I,w=!1)=>{const E=f&&f.children,N=f?f.shapeFlag:0,A=d.children,{patchFlag:D,shapeFlag:F}=d;if(D>0){if(D&128){Qe(E,A,p,m,v,b,R,I,w);return}else if(D&256){We(E,A,p,m,v,b,R,I,w);return}}F&8?(N&16&&ce(E,v,b),A!==E&&u(p,A)):N&16?F&16?Qe(E,A,p,m,v,b,R,I,w):ce(E,v,b,!0):(N&8&&u(p,""),F&16&&Ie(A,p,m,v,b,R,I,w))},We=(f,d,p,m,v,b,R,I,w)=>{f=f||$t,d=d||$t;const E=f.length,N=d.length,A=Math.min(E,N);let D;for(D=0;D<A;D++){const F=d[D]=w?rt(d[D]):Ue(d[D]);P(f[D],F,p,null,v,b,R,I,w)}E>N?ce(f,v,b,!0,!1,A):Ie(d,p,m,v,b,R,I,w,A)},Qe=(f,d,p,m,v,b,R,I,w)=>{let E=0;const N=d.length;let A=f.length-1,D=N-1;for(;E<=A&&E<=D;){const F=f[E],H=d[E]=w?rt(d[E]):Ue(d[E]);if(an(F,H))P(F,H,p,null,v,b,R,I,w);else break;E++}for(;E<=A&&E<=D;){const F=f[A],H=d[D]=w?rt(d[D]):Ue(d[D]);if(an(F,H))P(F,H,p,null,v,b,R,I,w);else break;A--,D--}if(E>A){if(E<=D){const F=D+1,H=F<N?d[F].el:m;for(;E<=D;)P(null,d[E]=w?rt(d[E]):Ue(d[E]),p,H,v,b,R,I,w),E++}}else if(E>D)for(;E<=A;)he(f[E],v,b,!0),E++;else{const F=E,H=E,X=new Map;for(E=H;E<=D;E++){const ve=d[E]=w?rt(d[E]):Ue(d[E]);ve.key!=null&&X.set(ve.key,E)}let G,ee=0;const we=D-H+1;let xt=!1,Zs=0;const on=new Array(we);for(E=0;E<we;E++)on[E]=0;for(E=F;E<=A;E++){const ve=f[E];if(ee>=we){he(ve,v,b,!0);continue}let xe;if(ve.key!=null)xe=X.get(ve.key);else for(G=H;G<=D;G++)if(on[G-H]===0&&an(ve,d[G])){xe=G;break}xe===void 0?he(ve,v,b,!0):(on[xe-H]=E+1,xe>=Zs?Zs=xe:xt=!0,P(ve,d[xe],p,null,v,b,R,I,w),ee++)}const ei=xt?gu(on):$t;for(G=ei.length-1,E=we-1;E>=0;E--){const ve=H+E,xe=d[ve],ti=ve+1<N?d[ve+1].el:m;on[E]===0?P(null,xe,p,ti,v,b,R,I,w):xt&&(G<0||E!==ei[G]?De(xe,p,ti,2):G--)}}},De=(f,d,p,m,v=null)=>{const{el:b,type:R,transition:I,children:w,shapeFlag:E}=f;if(E&6){De(f.component.subTree,d,p,m);return}if(E&128){f.suspense.move(d,p,m);return}if(E&64){R.move(f,d,p,T);return}if(R===Le){r(b,d,p);for(let A=0;A<w.length;A++)De(w[A],d,p,m);r(f.anchor,d,p);return}if(R===xr){j(f,d,p);return}if(m!==2&&E&1&&I)if(m===0)I.beforeEnter(b),r(b,d,p),pe(()=>I.enter(b),v);else{const{leave:A,delayLeave:D,afterLeave:F}=I,H=()=>r(b,d,p),X=()=>{A(b,()=>{H(),F&&F()})};D?D(b,H,X):X()}else r(b,d,p)},he=(f,d,p,m=!1,v=!1)=>{const{type:b,props:R,ref:I,children:w,dynamicChildren:E,shapeFlag:N,patchFlag:A,dirs:D}=f;if(I!=null&&is(I,null,p,f,!0),N&256){d.ctx.deactivate(f);return}const F=N&1&&D,H=!qn(f);let X;if(H&&(X=R&&R.onVnodeBeforeUnmount)&&Me(X,d,f),N&6)Ln(f.component,p,m);else{if(N&128){f.suspense.unmount(p,m);return}F&&_t(f,null,d,"beforeUnmount"),N&64?f.type.remove(f,d,p,v,T,m):E&&(b!==Le||A>0&&A&64)?ce(E,d,p,!1,!0):(b===Le&&A&384||!v&&N&16)&&ce(w,d,p),m&&Nt(f)}(H&&(X=R&&R.onVnodeUnmounted)||F)&&pe(()=>{X&&Me(X,d,f),F&&_t(f,null,d,"unmounted")},p)},Nt=f=>{const{type:d,el:p,anchor:m,transition:v}=f;if(d===Le){Dt(p,m);return}if(d===xr){M(f);return}const b=()=>{s(p),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(f.shapeFlag&1&&v&&!v.persisted){const{leave:R,delayLeave:I}=v,w=()=>R(p,b);I?I(f.el,b,w):w()}else b()},Dt=(f,d)=>{let p;for(;f!==d;)p=g(f),s(f),f=p;s(d)},Ln=(f,d,p)=>{const{bum:m,scope:v,update:b,subTree:R,um:I}=f;m&&zn(m),v.stop(),b&&(b.active=!1,he(R,f,d,p)),I&&pe(I,d),pe(()=>{f.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},ce=(f,d,p,m=!1,v=!1,b=0)=>{for(let R=b;R<f.length;R++)he(f[R],d,p,m,v)},_=f=>f.shapeFlag&6?_(f.component.subTree):f.shapeFlag&128?f.suspense.next():g(f.anchor||f.el),C=(f,d,p)=>{f==null?d._vnode&&he(d._vnode,null,null,!0):P(d._vnode||null,f,d,null,null,null,p),ui(),ea(),d._vnode=f},T={p:P,um:he,m:De,r:Nt,mt:sn,mc:Ie,pc:z,pbc:ye,n:_,o:t};let O,K;return e&&([O,K]=e(T)),{render:C,hydrate:O,createApp:au(C,O)}}function vt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function va(t,e,n=!1){const r=t.children,s=e.children;if(U(r)&&U(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=rt(s[i]),a.el=o.el),n||va(o,a)),a.type===wr&&(a.el=o.el)}}function gu(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const mu=t=>t.__isTeleport,Le=Symbol.for("v-fgt"),wr=Symbol.for("v-txt"),St=Symbol.for("v-cmt"),xr=Symbol.for("v-stc"),dn=[];let Ce=null;function os(t=!1){dn.push(Ce=t?null:[])}function _u(){dn.pop(),Ce=dn[dn.length-1]||null}let bn=1;function Ii(t){bn+=t}function ya(t){return t.dynamicChildren=bn>0?Ce||$t:null,_u(),bn>0&&Ce&&Ce.push(t),t}function wi(t,e,n,r,s,i){return ya(ge(t,e,n,r,s,i,!0))}function vu(t,e,n,r,s){return ya(re(t,e,n,r,s,!0))}function as(t){return t?t.__v_isVNode===!0:!1}function an(t,e){return t.type===e.type&&t.key===e.key}const Tr="__vInternal",ba=({key:t})=>t??null,Jn=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?se(t)||ue(t)||$(t)?{i:Ee,r:t,k:e,f:!!n}:t:null);function ge(t,e=null,n=null,r=0,s=null,i=t===Le?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ba(e),ref:e&&Jn(e),scopeId:Er,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ee};return a?(Fs(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=se(n)?8:16),bn>0&&!o&&Ce&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ce.push(c),c}const re=yu;function yu(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Ql)&&(t=St),as(t)){const a=Jt(t,e,!0);return n&&Fs(a,n),bn>0&&!i&&Ce&&(a.shapeFlag&6?Ce[Ce.indexOf(t)]=a:Ce.push(a)),a.patchFlag|=-2,a}if(ku(t)&&(t=t.__vccOpts),e){e=bu(e);let{class:a,style:c}=e;a&&!se(a)&&(e.class=Cs(a)),Z(c)&&(Vo(c)&&!U(c)&&(c=oe({},c)),e.style=Rs(c))}const o=se(t)?1:Fl(t)?128:mu(t)?64:Z(t)?4:$(t)?2:0;return ge(t,e,n,r,s,o,i,!0)}function bu(t){return t?Vo(t)||Tr in t?oe({},t):t:null}function Jt(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?Iu(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&ba(a),ref:e&&e.ref?n&&s?U(s)?s.concat(Jn(e)):[s,Jn(e)]:Jn(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Le?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Jt(t.ssContent),ssFallback:t.ssFallback&&Jt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Ut(t=" ",e=0){return re(wr,null,t,e)}function Eu(t="",e=!1){return e?(os(),vu(St,null,t)):re(St,null,t)}function Ue(t){return t==null||typeof t=="boolean"?re(St):U(t)?re(Le,null,t.slice()):typeof t=="object"?rt(t):re(wr,null,String(t))}function rt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Jt(t)}function Fs(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(U(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Fs(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Tr in e)?e._ctx=Ee:s===3&&Ee&&(Ee.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else $(e)?(e={default:e,_ctx:Ee},n=32):(e=String(e),r&64?(n=16,e=[Ut(e)]):n=8);t.children=e,t.shapeFlag|=n}function Iu(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Cs([e.class,r.class]));else if(s==="style")e.style=Rs([e.style,r.style]);else if(pr(s)){const i=e[s],o=r[s];o&&i!==o&&!(U(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Me(t,e,n,r=null){Ae(t,e,7,[n,r])}const wu=da();let Tu=0;function Ru(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||wu,i={uid:Tu++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new zc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:pa(r,s),emitsOptions:na(r,s),emit:null,emitted:null,propsDefaults:Q,inheritAttrs:r.inheritAttrs,ctx:Q,data:Q,props:Q,attrs:Q,slots:Q,refs:Q,setupState:Q,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=kl.bind(null,i),t.ce&&t.ce(i),i}let ae=null,Bs,Mt,Ti="__VUE_INSTANCE_SETTERS__";(Mt=Jr()[Ti])||(Mt=Jr()[Ti]=[]),Mt.push(t=>ae=t),Bs=t=>{Mt.length>1?Mt.forEach(e=>e(t)):Mt[0](t)};const Yt=t=>{Bs(t),t.scope.on()},Rt=()=>{ae&&ae.scope.off(),Bs(null)};function Ea(t){return t.vnode.shapeFlag&4}let En=!1;function Cu(t,e=!1){En=e;const{props:n,children:r}=t.vnode,s=Ea(t);cu(t,n,s,e),fu(t,r);const i=s?Su(t,e):void 0;return En=!1,i}function Su(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=zo(new Proxy(t.ctx,eu));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Pu(t):null;Yt(t),tn();const i=ut(r,t,0,[t.props,s]);if(nn(),Rt(),Ao(i)){if(i.then(Rt,Rt),e)return i.then(o=>{Ri(t,o,e)}).catch(o=>{yr(o,t,0)});t.asyncDep=i}else Ri(t,i,e)}else Ia(t,e)}function Ri(t,e,n){$(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Z(e)&&(t.setupState=Yo(e)),Ia(t,n)}let Ci;function Ia(t,e,n){const r=t.type;if(!t.render){if(!e&&Ci&&!r.render){const s=r.template||Ls(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=oe(oe({isCustomElement:i,delimiters:a},o),c);r.render=Ci(s,l)}}t.render=r.render||Se}Yt(t),tn(),tu(t),nn(),Rt()}function Au(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return me(t,"get","$attrs"),e[n]}}))}function Pu(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Au(t)},slots:t.slots,emit:t.emit,expose:e}}function Rr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Yo(zo(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in fn)return fn[n](t)},has(e,n){return n in e||n in fn}}))}function Ou(t,e=!0){return $(t)?t.displayName||t.name:t.name||e&&t.__name}function ku(t){return $(t)&&"__vccOpts"in t}const be=(t,e)=>Rl(t,e,En);function wa(t,e,n){const r=arguments.length;return r===2?Z(e)&&!U(e)?as(e)?re(t,null,[e]):re(t,e):re(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&as(n)&&(n=[n]),re(t,e,n))}const Nu=Symbol.for("v-scx"),Du=()=>Pe(Nu),xu="3.3.4",Mu="http://www.w3.org/2000/svg",Et=typeof document<"u"?document:null,Si=Et&&Et.createElement("template"),Lu={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Et.createElementNS(Mu,t):Et.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Et.createTextNode(t),createComment:t=>Et.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Et.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Si.innerHTML=r?`<svg>${t}</svg>`:t;const a=Si.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Uu(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Fu(t,e,n){const r=t.style,s=se(n);if(n&&!s){if(e&&!se(e))for(const i in e)n[i]==null&&cs(r,i,"");for(const i in n)cs(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Ai=/\s*!important$/;function cs(t,e,n){if(U(n))n.forEach(r=>cs(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Bu(t,e);Ai.test(n)?t.setProperty(en(r),n.replace(Ai,""),"important"):t[r]=n}}const Pi=["Webkit","Moz","ms"],Mr={};function Bu(t,e){const n=Mr[e];if(n)return n;let r=He(e);if(r!=="filter"&&r in t)return Mr[e]=r;r=_r(r);for(let s=0;s<Pi.length;s++){const i=Pi[s]+r;if(i in t)return Mr[e]=i}return e}const Oi="http://www.w3.org/1999/xlink";function $u(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Oi,e.slice(6,e.length)):t.setAttributeNS(Oi,e,n);else{const i=Vc(e);n==null||i&&!ko(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Hu(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=ko(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function Ft(t,e,n,r){t.addEventListener(e,n,r)}function ju(t,e,n,r){t.removeEventListener(e,n,r)}function Wu(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=Vu(e);if(r){const l=i[e]=qu(r,s);Ft(t,a,l,c)}else o&&(ju(t,a,o,c),i[e]=void 0)}}const ki=/(?:Once|Passive|Capture)$/;function Vu(t){let e;if(ki.test(t)){e={};let r;for(;r=t.match(ki);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):en(t.slice(2)),e]}let Lr=0;const zu=Promise.resolve(),Ku=()=>Lr||(zu.then(()=>Lr=0),Lr=Date.now());function qu(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ae(Gu(r,n.value),e,5,[r])};return n.value=t,n.attached=Ku(),n}function Gu(t,e){if(U(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Ni=/^on[a-z]/,Ju=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?Uu(t,r,s):e==="style"?Fu(t,n,r):pr(e)?Es(e)||Wu(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Yu(t,e,r,s))?Hu(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),$u(t,e,r,s))};function Yu(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Ni.test(e)&&$(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Ni.test(e)&&se(n)?!1:e in t}const Di=t=>{const e=t.props["onUpdate:modelValue"]||!1;return U(e)?n=>zn(e,n):e};function Xu(t){t.target.composing=!0}function xi(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const sm={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Di(s);const i=r||s.props&&s.props.type==="number";Ft(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Gr(a)),t._assign(a)}),n&&Ft(t,"change",()=>{t.value=t.value.trim()}),e||(Ft(t,"compositionstart",Xu),Ft(t,"compositionend",xi),Ft(t,"change",xi))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Di(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Gr(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Qu=oe({patchProp:Ju},Lu);let Mi;function Zu(){return Mi||(Mi=hu(Qu))}const ef=(...t)=>{const e=Zu().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=tf(r);if(!s)return;const i=e._component;!$(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function tf(t){return se(t)?document.querySelector(t):t}/*!
  * vue-router v4.2.0
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Bt=typeof window<"u";function nf(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const q=Object.assign;function Ur(t,e){const n={};for(const r in e){const s=e[r];n[r]=Oe(s)?s.map(t):t(s)}return n}const hn=()=>{},Oe=Array.isArray,rf=/\/$/,sf=t=>t.replace(rf,"");function Fr(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=lf(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function of(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Li(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function af(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Xt(e.matched[r],n.matched[s])&&Ta(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Xt(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Ta(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!cf(t[n],e[n]))return!1;return!0}function cf(t,e){return Oe(t)?Ui(t,e):Oe(e)?Ui(e,t):t===e}function Ui(t,e){return Oe(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function lf(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var In;(function(t){t.pop="pop",t.push="push"})(In||(In={}));var pn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(pn||(pn={}));function uf(t){if(!t)if(Bt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),sf(t)}const ff=/^[^#]+#/;function df(t,e){return t.replace(ff,"#")+e}function hf(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Cr=()=>({left:window.pageXOffset,top:window.pageYOffset});function pf(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=hf(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Fi(t,e){return(history.state?history.state.position-e:-1)+t}const ls=new Map;function gf(t,e){ls.set(t,e)}function mf(t){const e=ls.get(t);return ls.delete(t),e}let _f=()=>location.protocol+"//"+location.host;function Ra(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Li(c,"")}return Li(n,t)+r+s}function vf(t,e,n,r){let s=[],i=[],o=null;const a=({state:g})=>{const y=Ra(t,location),S=n.value,P=e.value;let L=0;if(g){if(n.value=y,e.value=g,o&&o===S){o=null;return}L=P?g.position-P.position:0}else r(y);s.forEach(k=>{k(n.value,S,{delta:L,type:In.pop,direction:L?L>0?pn.forward:pn.back:pn.unknown})})};function c(){o=n.value}function l(g){s.push(g);const y=()=>{const S=s.indexOf(g);S>-1&&s.splice(S,1)};return i.push(y),y}function u(){const{history:g}=window;g.state&&g.replaceState(q({},g.state,{scroll:Cr()}),"")}function h(){for(const g of i)g();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function Bi(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Cr():null}}function yf(t){const{history:e,location:n}=window,r={value:Ra(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),g=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:_f()+t+c;try{e[u?"replaceState":"pushState"](l,"",g),s.value=l}catch(y){console.error(y),n[u?"replace":"assign"](g)}}function o(c,l){const u=q({},e.state,Bi(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=q({},s.value,e.state,{forward:c,scroll:Cr()});i(u.current,u,!0);const h=q({},Bi(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function bf(t){t=uf(t);const e=yf(t),n=vf(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=q({location:"",base:t,go:r,createHref:df.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Ef(t){return typeof t=="string"||t&&typeof t=="object"}function Ca(t){return typeof t=="string"||typeof t=="symbol"}const et={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Sa=Symbol("");var $i;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})($i||($i={}));function Qt(t,e){return q(new Error,{type:t,[Sa]:!0},e)}function Ve(t,e){return t instanceof Error&&Sa in t&&(e==null||!!(t.type&e))}const Hi="[^/]+?",If={sensitive:!1,strict:!1,start:!0,end:!0},wf=/[.+*?^${}()[\]/\\]/g;function Tf(t,e){const n=q({},If,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const g=l[h];let y=40+(n.sensitive?.25:0);if(g.type===0)h||(s+="/"),s+=g.value.replace(wf,"\\$&"),y+=40;else if(g.type===1){const{value:S,repeatable:P,optional:L,regexp:k}=g;i.push({name:S,repeatable:P,optional:L});const x=k||Hi;if(x!==Hi){y+=10;try{new RegExp(`(${x})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${S}" (${x}): `+M.message)}}let j=P?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;h||(j=L&&l.length<2?`(?:/${j})`:"/"+j),L&&(j+="?"),s+=j,y+=20,L&&(y+=-8),P&&(y+=-20),x===".*"&&(y+=-50)}u.push(y)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let g=1;g<u.length;g++){const y=u[g]||"",S=i[g-1];h[S.name]=y&&S.repeatable?y.split("/"):y}return h}function c(l){let u="",h=!1;for(const g of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const y of g)if(y.type===0)u+=y.value;else if(y.type===1){const{value:S,repeatable:P,optional:L}=y,k=S in l?l[S]:"";if(Oe(k)&&!P)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const x=Oe(k)?k.join("/"):k;if(!x)if(L)g.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${S}"`);u+=x}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function Rf(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Cf(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Rf(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(ji(r))return 1;if(ji(s))return-1}return s.length-r.length}function ji(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Sf={type:0,value:""},Af=/[a-zA-Z0-9_]/;function Pf(t){if(!t)return[[]];if(t==="/")return[[Sf]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(y){throw new Error(`ERR (${n})/"${l}": ${y}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function g(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):g();break;case 4:g(),n=r;break;case 1:c==="("?n=2:Af.test(c)?g():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function Of(t,e,n){const r=Tf(Pf(t.path),n),s=q(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function kf(t,e){const n=[],r=new Map;e=zi({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,g){const y=!g,S=Nf(u);S.aliasOf=g&&g.record;const P=zi(e,u),L=[S];if("alias"in u){const j=typeof u.alias=="string"?[u.alias]:u.alias;for(const M of j)L.push(q({},S,{components:g?g.record.components:S.components,path:M,aliasOf:g?g.record:S}))}let k,x;for(const j of L){const{path:M}=j;if(h&&M[0]!=="/"){const te=h.record.path,ne=te[te.length-1]==="/"?"":"/";j.path=h.record.path+(M&&ne+M)}if(k=Of(j,h,P),g?g.alias.push(k):(x=x||k,x!==k&&x.alias.push(k),y&&u.name&&!Vi(k)&&o(u.name)),S.children){const te=S.children;for(let ne=0;ne<te.length;ne++)i(te[ne],k,g&&g.children[ne])}g=g||k,(k.record.components&&Object.keys(k.record.components).length||k.record.name||k.record.redirect)&&c(k)}return x?()=>{o(x)}:hn}function o(u){if(Ca(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&Cf(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Aa(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Vi(u)&&r.set(u.record.name,u)}function l(u,h){let g,y={},S,P;if("name"in u&&u.name){if(g=r.get(u.name),!g)throw Qt(1,{location:u});P=g.record.name,y=q(Wi(h.params,g.keys.filter(x=>!x.optional).map(x=>x.name)),u.params&&Wi(u.params,g.keys.map(x=>x.name))),S=g.stringify(y)}else if("path"in u)S=u.path,g=n.find(x=>x.re.test(S)),g&&(y=g.parse(S),P=g.record.name);else{if(g=h.name?r.get(h.name):n.find(x=>x.re.test(h.path)),!g)throw Qt(1,{location:u,currentLocation:h});P=g.record.name,y=q({},h.params,u.params),S=g.stringify(y)}const L=[];let k=g;for(;k;)L.unshift(k.record),k=k.parent;return{name:P,path:S,params:y,matched:L,meta:xf(L)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Wi(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Nf(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Df(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Df(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Vi(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function xf(t){return t.reduce((e,n)=>q(e,n.meta),{})}function zi(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Aa(t,e){return e.children.some(n=>n===t||Aa(t,n))}const Pa=/#/g,Mf=/&/g,Lf=/\//g,Uf=/=/g,Ff=/\?/g,Oa=/\+/g,Bf=/%5B/g,$f=/%5D/g,ka=/%5E/g,Hf=/%60/g,Na=/%7B/g,jf=/%7C/g,Da=/%7D/g,Wf=/%20/g;function $s(t){return encodeURI(""+t).replace(jf,"|").replace(Bf,"[").replace($f,"]")}function Vf(t){return $s(t).replace(Na,"{").replace(Da,"}").replace(ka,"^")}function us(t){return $s(t).replace(Oa,"%2B").replace(Wf,"+").replace(Pa,"%23").replace(Mf,"%26").replace(Hf,"`").replace(Na,"{").replace(Da,"}").replace(ka,"^")}function zf(t){return us(t).replace(Uf,"%3D")}function Kf(t){return $s(t).replace(Pa,"%23").replace(Ff,"%3F")}function qf(t){return t==null?"":Kf(t).replace(Lf,"%2F")}function ir(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Gf(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Oa," "),o=i.indexOf("="),a=ir(o<0?i:i.slice(0,o)),c=o<0?null:ir(i.slice(o+1));if(a in e){let l=e[a];Oe(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Ki(t){let e="";for(let n in t){const r=t[n];if(n=zf(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Oe(r)?r.map(i=>i&&us(i)):[r&&us(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Jf(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Oe(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Yf=Symbol(""),qi=Symbol(""),Sr=Symbol(""),Hs=Symbol(""),fs=Symbol("");function cn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function st(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Qt(4,{from:n,to:e})):h instanceof Error?a(h):Ef(h)?a(Qt(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Br(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Xf(a)){const l=(a.__vccOpts||a)[e];l&&s.push(st(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=nf(l)?l.default:l;i.components[o]=u;const g=(u.__vccOpts||u)[e];return g&&st(g,n,r,i,o)()}))}}return s}function Xf(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Gi(t){const e=Pe(Sr),n=Pe(Hs),r=be(()=>e.resolve(Wt(t.to))),s=be(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const g=h.findIndex(Xt.bind(null,u));if(g>-1)return g;const y=Ji(c[l-2]);return l>1&&Ji(u)===y&&h[h.length-1].path!==y?h.findIndex(Xt.bind(null,c[l-2])):g}),i=be(()=>s.value>-1&&td(n.params,r.value.params)),o=be(()=>s.value>-1&&s.value===n.matched.length-1&&Ta(n.params,r.value.params));function a(c={}){return ed(c)?e[Wt(t.replace)?"replace":"push"](Wt(t.to)).catch(hn):Promise.resolve()}return{route:r,href:be(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const Qf=ia({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Gi,setup(t,{slots:e}){const n=An(Gi(t)),{options:r}=Pe(Sr),s=be(()=>({[Yi(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Yi(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:wa("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Zf=Qf;function ed(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function td(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Oe(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Ji(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Yi=(t,e,n)=>t??e??n,nd=ia({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Pe(fs),s=be(()=>t.route||r.value),i=Pe(qi,0),o=be(()=>{let l=Wt(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=be(()=>s.value.matched[o.value]);Gn(qi,be(()=>o.value+1)),Gn(Yf,a),Gn(fs,s);const c=Go();return Kn(()=>[c.value,a.value,t.name],([l,u,h],[g,y,S])=>{u&&(u.instances[h]=l,y&&y!==u&&l&&l===g&&(u.leaveGuards.size||(u.leaveGuards=y.leaveGuards),u.updateGuards.size||(u.updateGuards=y.updateGuards))),l&&u&&(!y||!Xt(u,y)||!g)&&(u.enterCallbacks[h]||[]).forEach(P=>P(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=a.value,g=h&&h.components[u];if(!g)return Xi(n.default,{Component:g,route:l});const y=h.props[u],S=y?y===!0?l.params:typeof y=="function"?y(l):y:null,L=wa(g,q({},S,e,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return Xi(n.default,{Component:L,route:l})||L}}});function Xi(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const rd=nd;function sd(t){const e=kf(t.routes,t),n=t.parseQuery||Gf,r=t.stringifyQuery||Ki,s=t.history,i=cn(),o=cn(),a=cn(),c=El(et);let l=et;Bt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ur.bind(null,_=>""+_),h=Ur.bind(null,qf),g=Ur.bind(null,ir);function y(_,C){let T,O;return Ca(_)?(T=e.getRecordMatcher(_),O=C):O=_,e.addRoute(O,T)}function S(_){const C=e.getRecordMatcher(_);C&&e.removeRoute(C)}function P(){return e.getRoutes().map(_=>_.record)}function L(_){return!!e.getRecordMatcher(_)}function k(_,C){if(C=q({},C||c.value),typeof _=="string"){const p=Fr(n,_,C.path),m=e.resolve({path:p.path},C),v=s.createHref(p.fullPath);return q(p,m,{params:g(m.params),hash:ir(p.hash),redirectedFrom:void 0,href:v})}let T;if("path"in _)T=q({},_,{path:Fr(n,_.path,C.path).path});else{const p=q({},_.params);for(const m in p)p[m]==null&&delete p[m];T=q({},_,{params:h(p)}),C.params=h(C.params)}const O=e.resolve(T,C),K=_.hash||"";O.params=u(g(O.params));const f=of(r,q({},_,{hash:Vf(K),path:O.path})),d=s.createHref(f);return q({fullPath:f,hash:K,query:r===Ki?Jf(_.query):_.query||{}},O,{redirectedFrom:void 0,href:d})}function x(_){return typeof _=="string"?Fr(n,_,c.value.path):q({},_)}function j(_,C){if(l!==_)return Qt(8,{from:C,to:_})}function M(_){return _e(_)}function te(_){return M(q(x(_),{replace:!0}))}function ne(_){const C=_.matched[_.matched.length-1];if(C&&C.redirect){const{redirect:T}=C;let O=typeof T=="function"?T(_):T;return typeof O=="string"&&(O=O.includes("?")||O.includes("#")?O=x(O):{path:O},O.params={}),q({query:_.query,hash:_.hash,params:"path"in O?{}:_.params},O)}}function _e(_,C){const T=l=k(_),O=c.value,K=_.state,f=_.force,d=_.replace===!0,p=ne(T);if(p)return _e(q(x(p),{state:typeof p=="object"?q({},K,p.state):K,force:f,replace:d}),C||T);const m=T;m.redirectedFrom=C;let v;return!f&&af(r,O,T)&&(v=Qt(16,{to:m,from:O}),De(O,O,!0,!1)),(v?Promise.resolve(v):ye(m,O)).catch(b=>Ve(b)?Ve(b,2)?b:Qe(b):z(b,m,O)).then(b=>{if(b){if(Ve(b,2))return _e(q({replace:d},x(b.to),{state:typeof b.to=="object"?q({},K,b.to.state):K,force:f}),C||m)}else b=mt(m,O,!0,d,K);return Xe(m,O,b),b})}function Ie(_,C){const T=j(_,C);return T?Promise.reject(T):Promise.resolve()}function ke(_){const C=Dt.values().next().value;return C&&typeof C.runWithContext=="function"?C.runWithContext(_):_()}function ye(_,C){let T;const[O,K,f]=id(_,C);T=Br(O.reverse(),"beforeRouteLeave",_,C);for(const p of O)p.leaveGuards.forEach(m=>{T.push(st(m,_,C))});const d=Ie.bind(null,_,C);return T.push(d),ce(T).then(()=>{T=[];for(const p of i.list())T.push(st(p,_,C));return T.push(d),ce(T)}).then(()=>{T=Br(K,"beforeRouteUpdate",_,C);for(const p of K)p.updateGuards.forEach(m=>{T.push(st(m,_,C))});return T.push(d),ce(T)}).then(()=>{T=[];for(const p of _.matched)if(p.beforeEnter&&!C.matched.includes(p))if(Oe(p.beforeEnter))for(const m of p.beforeEnter)T.push(st(m,_,C));else T.push(st(p.beforeEnter,_,C));return T.push(d),ce(T)}).then(()=>(_.matched.forEach(p=>p.enterCallbacks={}),T=Br(f,"beforeRouteEnter",_,C),T.push(d),ce(T))).then(()=>{T=[];for(const p of o.list())T.push(st(p,_,C));return T.push(d),ce(T)}).catch(p=>Ve(p,8)?p:Promise.reject(p))}function Xe(_,C,T){for(const O of a.list())ke(()=>O(_,C,T))}function mt(_,C,T,O,K){const f=j(_,C);if(f)return f;const d=C===et,p=Bt?history.state:{};T&&(O||d?s.replace(_.fullPath,q({scroll:d&&p&&p.scroll},K)):s.push(_.fullPath,K)),c.value=_,De(_,C,T,d),Qe()}let Ne;function sn(){Ne||(Ne=s.listen((_,C,T)=>{if(!Ln.listening)return;const O=k(_),K=ne(O);if(K){_e(q(K,{replace:!0}),O).catch(hn);return}l=O;const f=c.value;Bt&&gf(Fi(f.fullPath,T.delta),Cr()),ye(O,f).catch(d=>Ve(d,12)?d:Ve(d,2)?(_e(d.to,O).then(p=>{Ve(p,20)&&!T.delta&&T.type===In.pop&&s.go(-1,!1)}).catch(hn),Promise.reject()):(T.delta&&s.go(-T.delta,!1),z(d,O,f))).then(d=>{d=d||mt(O,f,!1),d&&(T.delta&&!Ve(d,8)?s.go(-T.delta,!1):T.type===In.pop&&Ve(d,20)&&s.go(-1,!1)),Xe(O,f,d)}).catch(hn)}))}let kt=cn(),ie=cn(),J;function z(_,C,T){Qe(_);const O=ie.list();return O.length?O.forEach(K=>K(_,C,T)):console.error(_),Promise.reject(_)}function We(){return J&&c.value!==et?Promise.resolve():new Promise((_,C)=>{kt.add([_,C])})}function Qe(_){return J||(J=!_,sn(),kt.list().forEach(([C,T])=>_?T(_):C()),kt.reset()),_}function De(_,C,T,O){const{scrollBehavior:K}=t;if(!Bt||!K)return Promise.resolve();const f=!T&&mf(Fi(_.fullPath,0))||(O||!T)&&history.state&&history.state.scroll||null;return Qo().then(()=>K(_,C,f)).then(d=>d&&pf(d)).catch(d=>z(d,_,C))}const he=_=>s.go(_);let Nt;const Dt=new Set,Ln={currentRoute:c,listening:!0,addRoute:y,removeRoute:S,hasRoute:L,getRoutes:P,resolve:k,options:t,push:M,replace:te,go:he,back:()=>he(-1),forward:()=>he(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ie.add,isReady:We,install(_){const C=this;_.component("RouterLink",Zf),_.component("RouterView",rd),_.config.globalProperties.$router=C,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>Wt(c)}),Bt&&!Nt&&c.value===et&&(Nt=!0,M(s.location).catch(K=>{}));const T={};for(const K in et)T[K]=be(()=>c.value[K]);_.provide(Sr,C),_.provide(Hs,An(T)),_.provide(fs,c);const O=_.unmount;Dt.add(_),_.unmount=function(){Dt.delete(_),Dt.size<1&&(l=et,Ne&&Ne(),Ne=null,c.value=et,Nt=!1,J=!1),O()}}};function ce(_){return _.reduce((C,T)=>C.then(()=>ke(T)),Promise.resolve())}return Ln}function id(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Xt(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Xt(l,c))||s.push(c))}return[n,r,s]}function od(){return Pe(Sr)}function im(){return Pe(Hs)}/**
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
 */const xa=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},ad=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ma={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let g=(a&15)<<2|l>>6,y=l&63;c||(y=64,o||(g=64)),r.push(n[u],n[h],n[g],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(xa(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ad(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new cd;const g=i<<2|a>>4;if(r.push(g),l!==64){const y=a<<4&240|l>>2;if(r.push(y),h!==64){const S=l<<6&192|h;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class cd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ld=function(t){const e=xa(t);return Ma.encodeByteArray(e,!0)},or=function(t){return ld(t).replace(/\./g,"")},La=function(t){try{return Ma.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ud(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const fd=()=>ud().__FIREBASE_DEFAULTS__,dd=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},hd=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&La(t[1]);return e&&JSON.parse(e)},js=()=>{try{return fd()||dd()||hd()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ua=t=>{var e,n;return(n=(e=js())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},om=t=>{const e=Ua(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Fa=()=>{var t;return(t=js())===null||t===void 0?void 0:t.config},Ba=t=>{var e;return(e=js())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class pd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function am(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[or(JSON.stringify(n)),or(JSON.stringify(o)),a].join(".")}/**
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
 */function fe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(fe())}function md(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function _d(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vd(){const t=fe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function yd(){try{return typeof indexedDB=="object"}catch{return!1}}function bd(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const Ed="FirebaseError";class pt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Ed,Object.setPrototypeOf(this,pt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Pn.prototype.create)}}class Pn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Id(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new pt(s,a,r)}}function Id(t,e){return t.replace(wd,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const wd=/\{\$([^}]+)}/g;function Td(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ar(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Qi(i)&&Qi(o)){if(!ar(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Qi(t){return t!==null&&typeof t=="object"}/**
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
 */function On(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Rd(t,e){const n=new Cd(t,e);return n.subscribe.bind(n)}class Cd{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Sd(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=$r),s.error===void 0&&(s.error=$r),s.complete===void 0&&(s.complete=$r);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Sd(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function $r(){}/**
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
 */function gt(t){return t&&t._delegate?t._delegate:t}class Zt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const yt="[DEFAULT]";/**
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
 */class Ad{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new pd;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Od(e))try{this.getOrInitializeService({instanceIdentifier:yt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=yt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=yt){return this.instances.has(e)}getOptions(e=yt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Pd(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=yt){return this.component?this.component.multipleInstances?e:yt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Pd(t){return t===yt?void 0:t}function Od(t){return t.instantiationMode==="EAGER"}/**
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
 */class kd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ad(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Y;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Y||(Y={}));const Nd={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},Dd=Y.INFO,xd={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},Md=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=xd[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $a{constructor(e){this.name=e,this._logLevel=Dd,this._logHandler=Md,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Nd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const Ld=(t,e)=>e.some(n=>t instanceof n);let Zi,eo;function Ud(){return Zi||(Zi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Fd(){return eo||(eo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ha=new WeakMap,ds=new WeakMap,ja=new WeakMap,Hr=new WeakMap,Ws=new WeakMap;function Bd(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(ft(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ha.set(n,t)}).catch(()=>{}),Ws.set(e,t),e}function $d(t){if(ds.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ds.set(t,e)}let hs={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ds.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ja.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ft(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Hd(t){hs=t(hs)}function jd(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(jr(this),e,...n);return ja.set(r,e.sort?e.sort():[e]),ft(r)}:Fd().includes(t)?function(...e){return t.apply(jr(this),e),ft(Ha.get(this))}:function(...e){return ft(t.apply(jr(this),e))}}function Wd(t){return typeof t=="function"?jd(t):(t instanceof IDBTransaction&&$d(t),Ld(t,Ud())?new Proxy(t,hs):t)}function ft(t){if(t instanceof IDBRequest)return Bd(t);if(Hr.has(t))return Hr.get(t);const e=Wd(t);return e!==t&&(Hr.set(t,e),Ws.set(e,t)),e}const jr=t=>Ws.get(t);function Vd(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=ft(o);return r&&o.addEventListener("upgradeneeded",c=>{r(ft(o.result),c.oldVersion,c.newVersion,ft(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const zd=["get","getKey","getAll","getAllKeys","count"],Kd=["put","add","delete","clear"],Wr=new Map;function to(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Wr.get(e))return Wr.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Kd.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||zd.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Wr.set(e,i),i}Hd(t=>({...t,get:(e,n,r)=>to(e,n)||t.get(e,n,r),has:(e,n)=>!!to(e,n)||t.has(e,n)}));/**
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
 */class qd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Gd(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Gd(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ps="@firebase/app",no="0.9.10";/**
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
 */const At=new $a("@firebase/app"),Jd="@firebase/app-compat",Yd="@firebase/analytics-compat",Xd="@firebase/analytics",Qd="@firebase/app-check-compat",Zd="@firebase/app-check",eh="@firebase/auth",th="@firebase/auth-compat",nh="@firebase/database",rh="@firebase/database-compat",sh="@firebase/functions",ih="@firebase/functions-compat",oh="@firebase/installations",ah="@firebase/installations-compat",ch="@firebase/messaging",lh="@firebase/messaging-compat",uh="@firebase/performance",fh="@firebase/performance-compat",dh="@firebase/remote-config",hh="@firebase/remote-config-compat",ph="@firebase/storage",gh="@firebase/storage-compat",mh="@firebase/firestore",_h="@firebase/firestore-compat",vh="firebase",yh="9.22.0";/**
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
 */const gs="[DEFAULT]",bh={[ps]:"fire-core",[Jd]:"fire-core-compat",[Xd]:"fire-analytics",[Yd]:"fire-analytics-compat",[Zd]:"fire-app-check",[Qd]:"fire-app-check-compat",[eh]:"fire-auth",[th]:"fire-auth-compat",[nh]:"fire-rtdb",[rh]:"fire-rtdb-compat",[sh]:"fire-fn",[ih]:"fire-fn-compat",[oh]:"fire-iid",[ah]:"fire-iid-compat",[ch]:"fire-fcm",[lh]:"fire-fcm-compat",[uh]:"fire-perf",[fh]:"fire-perf-compat",[dh]:"fire-rc",[hh]:"fire-rc-compat",[ph]:"fire-gcs",[gh]:"fire-gcs-compat",[mh]:"fire-fst",[_h]:"fire-fst-compat","fire-js":"fire-js",[vh]:"fire-js-all"};/**
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
 */const cr=new Map,ms=new Map;function Eh(t,e){try{t.container.addComponent(e)}catch(n){At.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function wn(t){const e=t.name;if(ms.has(e))return At.debug(`There were multiple attempts to register component ${e}.`),!1;ms.set(e,t);for(const n of cr.values())Eh(n,t);return!0}function Wa(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Ih={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},dt=new Pn("app","Firebase",Ih);/**
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
 */class wh{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Zt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw dt.create("app-deleted",{appName:this._name})}}/**
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
 */const kn=yh;function Va(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:gs,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw dt.create("bad-app-name",{appName:String(s)});if(n||(n=Fa()),!n)throw dt.create("no-options");const i=cr.get(s);if(i){if(ar(n,i.options)&&ar(r,i.config))return i;throw dt.create("duplicate-app",{appName:s})}const o=new kd(s);for(const c of ms.values())o.addComponent(c);const a=new wh(n,r,o);return cr.set(s,a),a}function Th(t=gs){const e=cr.get(t);if(!e&&t===gs&&Fa())return Va();if(!e)throw dt.create("no-app",{appName:t});return e}function zt(t,e,n){var r;let s=(r=bh[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),At.warn(a.join(" "));return}wn(new Zt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Rh="firebase-heartbeat-database",Ch=1,Tn="firebase-heartbeat-store";let Vr=null;function za(){return Vr||(Vr=Vd(Rh,Ch,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Tn)}}}).catch(t=>{throw dt.create("idb-open",{originalErrorMessage:t.message})})),Vr}async function Sh(t){try{return await(await za()).transaction(Tn).objectStore(Tn).get(Ka(t))}catch(e){if(e instanceof pt)At.warn(e.message);else{const n=dt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});At.warn(n.message)}}}async function ro(t,e){try{const r=(await za()).transaction(Tn,"readwrite");await r.objectStore(Tn).put(e,Ka(t)),await r.done}catch(n){if(n instanceof pt)At.warn(n.message);else{const r=dt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});At.warn(r.message)}}}function Ka(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Ah=1024,Ph=30*24*60*60*1e3;class Oh{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Nh(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=so();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Ph}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=so(),{heartbeatsToSend:n,unsentEntries:r}=kh(this._heartbeatsCache.heartbeats),s=or(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function so(){return new Date().toISOString().substring(0,10)}function kh(t,e=Ah){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),io(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),io(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Nh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yd()?bd().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Sh(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ro(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ro(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function io(t){return or(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Dh(t){wn(new Zt("platform-logger",e=>new qd(e),"PRIVATE")),wn(new Zt("heartbeat",e=>new Oh(e),"PRIVATE")),zt(ps,no,t),zt(ps,no,"esm2017"),zt("fire-js","")}Dh("");function Vs(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function qa(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const xh=qa,Ga=new Pn("auth","Firebase",qa());/**
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
 */const lr=new $a("@firebase/auth");function Mh(t,...e){lr.logLevel<=Y.WARN&&lr.warn(`Auth (${kn}): ${t}`,...e)}function Yn(t,...e){lr.logLevel<=Y.ERROR&&lr.error(`Auth (${kn}): ${t}`,...e)}/**
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
 */function je(t,...e){throw zs(t,...e)}function Be(t,...e){return zs(t,...e)}function Ja(t,e,n){const r=Object.assign(Object.assign({},xh()),{[e]:n});return new Pn("auth","Firebase",r).create(e,{appName:t.name})}function Lh(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&je(t,"argument-error"),Ja(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function zs(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Ga.create(t,...e)}function B(t,e,...n){if(!t)throw zs(e,...n)}function Ke(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Yn(e),new Error(e)}function Je(t,e){t||Ke(e)}/**
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
 */function _s(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Uh(){return oo()==="http:"||oo()==="https:"}function oo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Fh(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Uh()||md()||"connection"in navigator)?navigator.onLine:!0}function Bh(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Nn{constructor(e,n){this.shortDelay=e,this.longDelay=n,Je(n>e,"Short delay should be less than long delay!"),this.isMobile=gd()||_d()}get(){return Fh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ks(t,e){Je(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Ya{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ke("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ke("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ke("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const $h={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Hh=new Nn(3e4,6e4);function qs(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Dn(t,e,n,r,s={}){return Xa(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=On(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Ya.fetch()(Za(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Xa(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},$h),e);try{const s=new jh(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Wn(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Wn(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Wn(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Wn(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Ja(t,u,l);je(t,u)}}catch(s){if(s instanceof pt)throw s;je(t,"network-request-failed",{message:String(s)})}}async function Qa(t,e,n,r,s={}){const i=await Dn(t,e,n,r,s);return"mfaPendingCredential"in i&&je(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Za(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Ks(t.config,s):`${t.config.apiScheme}://${s}`}class jh{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Be(this.auth,"network-request-failed")),Hh.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Wn(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Be(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function Wh(t,e){return Dn(t,"POST","/v1/accounts:delete",e)}async function Vh(t,e){return Dn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function gn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function zh(t,e=!1){const n=gt(t),r=await n.getIdToken(e),s=Gs(r);B(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:gn(zr(s.auth_time)),issuedAtTime:gn(zr(s.iat)),expirationTime:gn(zr(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function zr(t){return Number(t)*1e3}function Gs(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Yn("JWT malformed, contained fewer than 3 sections"),null;try{const s=La(n);return s?JSON.parse(s):(Yn("Failed to decode base64 JWT payload"),null)}catch(s){return Yn("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Kh(t){const e=Gs(t);return B(e,"internal-error"),B(typeof e.exp<"u","internal-error"),B(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Rn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof pt&&qh(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function qh({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Gh{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ec{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=gn(this.lastLoginAt),this.creationTime=gn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ur(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Rn(t,Vh(n,{idToken:r}));B(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Xh(i.providerUserInfo):[],a=Yh(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new ec(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Jh(t){const e=gt(t);await ur(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Yh(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Xh(t){return t.map(e=>{var{providerId:n}=e,r=Vs(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Qh(t,e){const n=await Xa(t,{},async()=>{const r=On({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Za(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ya.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Cn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken<"u","internal-error"),B(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Kh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return B(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Qh(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Cn;return r&&(B(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(B(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(B(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Cn,this.toJSON())}_performRefresh(){return Ke("not implemented")}}/**
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
 */function tt(t,e){B(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ct{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Vs(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Gh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ec(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Rn(this,this.stsTokenManager.getToken(this.auth,e));return B(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return zh(this,e)}reload(){return Jh(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ct(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ur(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Rn(this,Wh(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,y=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(a=n.tenantId)!==null&&a!==void 0?a:void 0,L=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,k=(l=n.createdAt)!==null&&l!==void 0?l:void 0,x=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:j,emailVerified:M,isAnonymous:te,providerData:ne,stsTokenManager:_e}=n;B(j&&_e,e,"internal-error");const Ie=Cn.fromJSON(this.name,_e);B(typeof j=="string",e,"internal-error"),tt(h,e.name),tt(g,e.name),B(typeof M=="boolean",e,"internal-error"),B(typeof te=="boolean",e,"internal-error"),tt(y,e.name),tt(S,e.name),tt(P,e.name),tt(L,e.name),tt(k,e.name),tt(x,e.name);const ke=new Ct({uid:j,auth:e,email:g,emailVerified:M,displayName:h,isAnonymous:te,photoURL:S,phoneNumber:y,tenantId:P,stsTokenManager:Ie,createdAt:k,lastLoginAt:x});return ne&&Array.isArray(ne)&&(ke.providerData=ne.map(ye=>Object.assign({},ye))),L&&(ke._redirectEventId=L),ke}static async _fromIdTokenResponse(e,n,r=!1){const s=new Cn;s.updateFromServerResponse(n);const i=new Ct({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ur(i),i}}/**
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
 */const ao=new Map;function qe(t){Je(t instanceof Function,"Expected a class definition");let e=ao.get(t);return e?(Je(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ao.set(t,e),e)}/**
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
 */class tc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}tc.type="NONE";const co=tc;/**
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
 */function Xn(t,e,n){return`firebase:${t}:${e}:${n}`}class Kt{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Xn(this.userKey,s.apiKey,i),this.fullPersistenceKey=Xn("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ct._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Kt(qe(co),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||qe(co);const o=Xn(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Ct._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Kt(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Kt(i,e,r))}}/**
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
 */function lo(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(sc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(nc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(oc(e))return"Blackberry";if(ac(e))return"Webos";if(Js(e))return"Safari";if((e.includes("chrome/")||rc(e))&&!e.includes("edge/"))return"Chrome";if(ic(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function nc(t=fe()){return/firefox\//i.test(t)}function Js(t=fe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function rc(t=fe()){return/crios\//i.test(t)}function sc(t=fe()){return/iemobile/i.test(t)}function ic(t=fe()){return/android/i.test(t)}function oc(t=fe()){return/blackberry/i.test(t)}function ac(t=fe()){return/webos/i.test(t)}function Ar(t=fe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Zh(t=fe()){var e;return Ar(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ep(){return vd()&&document.documentMode===10}function cc(t=fe()){return Ar(t)||ic(t)||ac(t)||oc(t)||/windows phone/i.test(t)||sc(t)}function tp(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function lc(t,e=[]){let n;switch(t){case"Browser":n=lo(fe());break;case"Worker":n=`${lo(fe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${kn}/${r}`}async function uc(t,e){return Dn(t,"GET","/v2/recaptchaConfig",qs(t,e))}function uo(t){return t!==void 0&&t.enterprise!==void 0}class fc{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function np(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function dc(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Be("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",np().appendChild(r)})}function rp(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const sp="https://www.google.com/recaptcha/enterprise.js?render=",ip="recaptcha-enterprise",op="NO_RECAPTCHA";class hc{constructor(e){this.type=ip,this.auth=rn(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{uc(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new fc(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;uo(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(op)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&uo(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}dc(sp+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function fo(t,e,n,r=!1){const s=new hc(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class ap{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class cp{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ho(this),this.idTokenSubscription=new ho(this),this.beforeStateQueue=new ap(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ga,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=qe(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Kt.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ur(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Bh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?gt(e):null;return n&&B(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(qe(e))})}async initializeRecaptchaConfig(){const e=await uc(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new fc(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new hc(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Pn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&qe(e)||this._popupRedirectResolver;B(n,this,"argument-error"),this.redirectPersistenceManager=await Kt.create(this,[qe(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return B(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=lc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Mh(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function rn(t){return gt(t)}class ho{constructor(e){this.auth=e,this.observer=null,this.addObserver=Rd(n=>this.observer=n)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function lp(t,e){const n=Wa(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(ar(i,e??{}))return s;je(s,"already-initialized")}return n.initialize({options:e})}function up(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(qe);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function fp(t,e,n){const r=rn(t);B(r._canInitEmulator,r,"emulator-config-failed"),B(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=pc(e),{host:o,port:a}=dp(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||hp()}function pc(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function dp(t){const e=pc(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:po(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:po(o)}}}function po(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function hp(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class gc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ke("not implemented")}_getIdTokenResponse(e){return Ke("not implemented")}_linkToIdToken(e,n){return Ke("not implemented")}_getReauthenticationResolver(e){return Ke("not implemented")}}/**
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
 */async function qt(t,e){return Qa(t,"POST","/v1/accounts:signInWithIdp",qs(t,e))}/**
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
 */const pp="http://localhost";class Pt extends gc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Pt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):je("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Vs(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Pt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return qt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,qt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,qt(e,n)}buildRequest(){const e={requestUri:pp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=On(n)}return e}}/**
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
 */class Ys{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class xn extends Ys{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class it extends xn{constructor(){super("facebook.com")}static credential(e){return Pt._fromParams({providerId:it.PROVIDER_ID,signInMethod:it.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return it.credentialFromTaggedObject(e)}static credentialFromError(e){return it.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return it.credential(e.oauthAccessToken)}catch{return null}}}it.FACEBOOK_SIGN_IN_METHOD="facebook.com";it.PROVIDER_ID="facebook.com";/**
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
 */class ot extends xn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Pt._fromParams({providerId:ot.PROVIDER_ID,signInMethod:ot.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ot.credentialFromTaggedObject(e)}static credentialFromError(e){return ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ot.credential(n,r)}catch{return null}}}ot.GOOGLE_SIGN_IN_METHOD="google.com";ot.PROVIDER_ID="google.com";/**
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
 */class at extends xn{constructor(){super("github.com")}static credential(e){return Pt._fromParams({providerId:at.PROVIDER_ID,signInMethod:at.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return at.credentialFromTaggedObject(e)}static credentialFromError(e){return at.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return at.credential(e.oauthAccessToken)}catch{return null}}}at.GITHUB_SIGN_IN_METHOD="github.com";at.PROVIDER_ID="github.com";/**
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
 */class ct extends xn{constructor(){super("twitter.com")}static credential(e,n){return Pt._fromParams({providerId:ct.PROVIDER_ID,signInMethod:ct.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ct.credentialFromTaggedObject(e)}static credentialFromError(e){return ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ct.credential(n,r)}catch{return null}}}ct.TWITTER_SIGN_IN_METHOD="twitter.com";ct.PROVIDER_ID="twitter.com";/**
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
 */async function Kr(t,e){return Qa(t,"POST","/v1/accounts:signUp",qs(t,e))}/**
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
 */class Ot{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Ct._fromIdTokenResponse(e,r,s),o=go(r);return new Ot({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=go(r);return new Ot({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function go(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class fr extends pt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,fr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new fr(e,n,r,s)}}function mc(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?fr._fromErrorAndOperation(t,i,e,r):i})}async function gp(t,e,n=!1){const r=await Rn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ot._forOperation(t,"link",r)}/**
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
 */async function mp(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Rn(t,mc(r,s,e,t),n);B(i.idToken,r,"internal-error");const o=Gs(i.idToken);B(o,r,"internal-error");const{sub:a}=o;return B(t.uid===a,r,"user-mismatch"),Ot._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&je(r,"user-mismatch"),i}}/**
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
 */async function _p(t,e,n=!1){const r="signIn",s=await mc(t,r,e),i=await Ot._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function cm(t,e,n){var r;const s=rn(t),i={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=s._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const l=await fo(s,i,"signUpPassword");o=Kr(s,l)}else o=Kr(s,i).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await fo(s,i,"signUpPassword");return Kr(s,u)}else return Promise.reject(l)});const a=await o.catch(l=>Promise.reject(l)),c=await Ot._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(c.user),c}function vp(t,e,n,r){return gt(t).onIdTokenChanged(e,n,r)}function yp(t,e,n){return gt(t).beforeAuthStateChanged(e,n)}function _c(t,e,n,r){return gt(t).onAuthStateChanged(e,n,r)}function bp(t){return gt(t).signOut()}const dr="__sak";/**
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
 */class vc{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(dr,"1"),this.storage.removeItem(dr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Ep(){const t=fe();return Js(t)||Ar(t)}const Ip=1e3,wp=10;class yc extends vc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Ep()&&tp(),this.fallbackToPolling=cc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);ep()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,wp):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Ip)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}yc.type="LOCAL";const Tp=yc;/**
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
 */class bc extends vc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}bc.type="SESSION";const Ec=bc;/**
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
 */function Rp(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Pr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Pr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Rp(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Pr.receivers=[];/**
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
 */function Xs(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Cp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Xs("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const g=h;if(g.data.eventId===l)switch(g.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(g.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function $e(){return window}function Sp(t){$e().location.href=t}/**
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
 */function Ic(){return typeof $e().WorkerGlobalScope<"u"&&typeof $e().importScripts=="function"}async function Ap(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Pp(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Op(){return Ic()?self:null}/**
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
 */const wc="firebaseLocalStorageDb",kp=1,hr="firebaseLocalStorage",Tc="fbase_key";class Mn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Or(t,e){return t.transaction([hr],e?"readwrite":"readonly").objectStore(hr)}function Np(){const t=indexedDB.deleteDatabase(wc);return new Mn(t).toPromise()}function vs(){const t=indexedDB.open(wc,kp);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(hr,{keyPath:Tc})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(hr)?e(r):(r.close(),await Np(),e(await vs()))})})}async function mo(t,e,n){const r=Or(t,!0).put({[Tc]:e,value:n});return new Mn(r).toPromise()}async function Dp(t,e){const n=Or(t,!1).get(e),r=await new Mn(n).toPromise();return r===void 0?null:r.value}function _o(t,e){const n=Or(t,!0).delete(e);return new Mn(n).toPromise()}const xp=800,Mp=3;class Rc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await vs(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Mp)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ic()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pr._getInstance(Op()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Ap(),!this.activeServiceWorker)return;this.sender=new Cp(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Pp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vs();return await mo(e,dr,"1"),await _o(e,dr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>mo(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Dp(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>_o(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Or(s,!1).getAll();return new Mn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),xp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Rc.type="LOCAL";const Lp=Rc;new Nn(3e4,6e4);/**
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
 */function Cc(t,e){return e?qe(e):(B(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Qs extends gc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return qt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return qt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return qt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Up(t){return _p(t.auth,new Qs(t),t.bypassAuthState)}function Fp(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),mp(n,new Qs(t),t.bypassAuthState)}async function Bp(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),gp(n,new Qs(t),t.bypassAuthState)}/**
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
 */class Sc{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Up;case"linkViaPopup":case"linkViaRedirect":return Bp;case"reauthViaPopup":case"reauthViaRedirect":return Fp;default:je(this.auth,"internal-error")}}resolve(e){Je(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Je(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const $p=new Nn(2e3,1e4);async function lm(t,e,n){const r=rn(t);Lh(t,e,Ys);const s=Cc(r,n);return new wt(r,"signInViaPopup",e,s).executeNotNull()}class wt extends Sc{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,wt.currentPopupAction&&wt.currentPopupAction.cancel(),wt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return B(e,this.auth,"internal-error"),e}async onExecution(){Je(this.filter.length===1,"Popup operations only handle one event");const e=Xs();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Be(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Be(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,wt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Be(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,$p.get())};e()}}wt.currentPopupAction=null;/**
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
 */const Hp="pendingRedirect",Qn=new Map;class jp extends Sc{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Qn.get(this.auth._key());if(!e){try{const r=await Wp(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Qn.set(this.auth._key(),e)}return this.bypassAuthState||Qn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Wp(t,e){const n=Kp(e),r=zp(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Vp(t,e){Qn.set(t._key(),e)}function zp(t){return qe(t._redirectPersistence)}function Kp(t){return Xn(Hp,t.config.apiKey,t.name)}async function qp(t,e,n=!1){const r=rn(t),s=Cc(r,e),o=await new jp(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Gp=10*60*1e3;class Jp{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Yp(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Ac(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Be(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Gp&&this.cachedEventUids.clear(),this.cachedEventUids.has(vo(e))}saveEventToCache(e){this.cachedEventUids.add(vo(e)),this.lastProcessedEventTime=Date.now()}}function vo(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ac({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Yp(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ac(t);default:return!1}}/**
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
 */async function Xp(t,e={}){return Dn(t,"GET","/v1/projects",e)}/**
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
 */const Qp=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Zp=/^https?/;async function eg(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Xp(t);for(const n of e)try{if(tg(n))return}catch{}je(t,"unauthorized-domain")}function tg(t){const e=_s(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Zp.test(n))return!1;if(Qp.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const ng=new Nn(3e4,6e4);function yo(){const t=$e().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function rg(t){return new Promise((e,n)=>{var r,s,i;function o(){yo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{yo(),n(Be(t,"network-request-failed"))},timeout:ng.get()})}if(!((s=(r=$e().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=$e().gapi)===null||i===void 0)&&i.load)o();else{const a=rp("iframefcb");return $e()[a]=()=>{gapi.load?o():n(Be(t,"network-request-failed"))},dc(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Zn=null,e})}let Zn=null;function sg(t){return Zn=Zn||rg(t),Zn}/**
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
 */const ig=new Nn(5e3,15e3),og="__/auth/iframe",ag="emulator/auth/iframe",cg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},lg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ug(t){const e=t.config;B(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ks(e,ag):`https://${t.config.authDomain}/${og}`,r={apiKey:e.apiKey,appName:t.name,v:kn},s=lg.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${On(r).slice(1)}`}async function fg(t){const e=await sg(t),n=$e().gapi;return B(n,t,"internal-error"),e.open({where:document.body,url:ug(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cg,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Be(t,"network-request-failed"),a=$e().setTimeout(()=>{i(o)},ig.get());function c(){$e().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const dg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},hg=500,pg=600,gg="_blank",mg="http://localhost";class bo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function _g(t,e,n,r=hg,s=pg){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},dg),{width:r.toString(),height:s.toString(),top:i,left:o}),l=fe().toLowerCase();n&&(a=rc(l)?gg:n),nc(l)&&(e=e||mg,c.scrollbars="yes");const u=Object.entries(c).reduce((g,[y,S])=>`${g}${y}=${S},`,"");if(Zh(l)&&a!=="_self")return vg(e||"",a),new bo(null);const h=window.open(e||"",a,u);B(h,t,"popup-blocked");try{h.focus()}catch{}return new bo(h)}function vg(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const yg="__/auth/handler",bg="emulator/auth/handler",Eg=encodeURIComponent("fac");async function Eo(t,e,n,r,s,i){B(t.config.authDomain,t,"auth-domain-config-required"),B(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:kn,eventId:s};if(e instanceof Ys){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Td(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof xn){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${Eg}=${encodeURIComponent(c)}`:"";return`${Ig(t)}?${On(a).slice(1)}${l}`}function Ig({config:t}){return t.emulator?Ks(t,bg):`https://${t.authDomain}/${yg}`}/**
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
 */const qr="webStorageSupport";class wg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ec,this._completeRedirectFn=qp,this._overrideRedirectResult=Vp}async _openPopup(e,n,r,s){var i;Je((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Eo(e,n,r,_s(),s);return _g(e,o,Xs())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Eo(e,n,r,_s(),s);return Sp(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Je(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await fg(e),r=new Jp(e);return n.register("authEvent",s=>(B(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(qr,{type:qr},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[qr];o!==void 0&&n(!!o),je(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=eg(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return cc()||Js()||Ar()}}const Tg=wg;var Io="@firebase/auth",wo="0.23.2";/**
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
 */class Rg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Cg(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Sg(t){wn(new Zt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;B(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:lc(t)},l=new cp(r,s,i,c);return up(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),wn(new Zt("auth-internal",e=>{const n=rn(e.getProvider("auth").getImmediate());return(r=>new Rg(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),zt(Io,wo,Cg(t)),zt(Io,wo,"esm2017")}/**
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
 */const Ag=5*60,Pg=Ba("authIdTokenMaxAge")||Ag;let To=null;const Og=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Pg)return;const s=n==null?void 0:n.token;To!==s&&(To=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Pc(t=Th()){const e=Wa(t,"auth");if(e.isInitialized())return e.getImmediate();const n=lp(t,{popupRedirectResolver:Tg,persistence:[Lp,Tp,Ec]}),r=Ba("authTokenSyncURL");if(r){const i=Og(r);yp(n,i,()=>i(n.currentUser)),vp(n,o=>i(o))}const s=Ua("auth");return s&&fp(n,`http://${s}`),n}Sg("Browser");const kg=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Ng=t=>(Nl("data-v-31353af1"),t=t(),Dl(),t),Dg={class:"navbar navbar-expand-lg navbar-dark",style:{"background-color":"#a1a0ac"}},xg={class:"container-fluid"},Mg=Ng(()=>ge("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[ge("span",{class:"navbar-toggler-icon"})],-1)),Lg={class:"collapse navbar-collapse",id:"navbarNav"},Ug={class:"navbar-nav me-auto mb-2 mb-lg-0"},Fg={class:"nav-item"},Bg={class:"nav-item"},$g={class:"nav-item"},Hg={class:"nav-item"},jg={class:"nav-item"},Wg={key:0,class:"nav-item"},Vg={__name:"App",setup(t){const e=od(),n=Go(!1);let r;ca(()=>{r=Pc(),_c(r,i=>{i?n.value=!0:n.value=!1})});const s=()=>{bp(r).then(()=>{e.push("/")})};return(i,o)=>{const a=di("router-link"),c=di("router-view");return os(),wi(Le,null,[ge("nav",Dg,[ge("div",xg,[Mg,ge("div",Lg,[ge("ul",Ug,[ge("li",Fg,[re(a,{class:"nav-link",to:"/Register"},{default:Lt(()=>[Ut(" Register")]),_:1})]),ge("li",Bg,[re(a,{class:"nav-link",to:"/SignIn"},{default:Lt(()=>[Ut(" Sign In")]),_:1})]),ge("li",$g,[re(a,{class:"nav-link",to:"/DoctorList"},{default:Lt(()=>[Ut(" DoctorList")]),_:1})]),ge("li",Hg,[re(a,{class:"nav-link",to:"/Map"},{default:Lt(()=>[Ut(" Map")]),_:1})]),ge("li",jg,[re(a,{class:"nav-link",to:"/Camera"},{default:Lt(()=>[Ut(" Camera")]),_:1})]),n.value?(os(),wi("li",Wg,[ge("button",{class:"btn btn-primary sign-out-btn",onClick:s},"Sign out")])):Eu("",!0)])])])]),re(c)],64)}}},zg=kg(Vg,[["__scopeId","data-v-31353af1"]]),Kg="modulepreload",qg=function(t){return"/"+t},Ro={},nt=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=qg(i),i in Ro)return;Ro[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=s.length-1;u>=0;u--){const h=s[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":Kg,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())},Oc=sd({history:bf(),routes:[{path:"/",component:()=>nt(()=>import("./Register-14202994.js"),["assets/Register-14202994.js","assets/Register-c7080065.css"])},{path:"/register",component:()=>nt(()=>import("./Register-14202994.js"),["assets/Register-14202994.js","assets/Register-c7080065.css"])},{path:"/UserList",component:()=>nt(()=>import("./UserList-8b3055a0.js"),["assets/UserList-8b3055a0.js","assets/firebaseInit-c67bae67.js"]),meta:{requiresAuth:!0}},{path:"/DoctorList",component:()=>nt(()=>import("./DoctorList-3b1c7dce.js"),["assets/DoctorList-3b1c7dce.js","assets/firebaseInit-c67bae67.js","assets/DoctorList-24739d7b.css"]),meta:{requiresAuth:!0}},{path:"/Map",component:()=>nt(()=>import("./Map-6cd53007.js"),["assets/Map-6cd53007.js","assets/Map-ba8ab292.css"]),meta:{requiresAuth:!0}},{path:"/Camera",component:()=>nt(()=>import("./Camera-bbee891b.js"),["assets/Camera-bbee891b.js","assets/Camera-251769e0.css"])},{path:"/DoctorDetail/:id",component:()=>nt(()=>import("./DoctorDetail-5941b34e.js"),["assets/DoctorDetail-5941b34e.js","assets/firebaseInit-c67bae67.js","assets/DoctorDetail-71e67810.css"]),name:"DoctorDetail"},{path:"/SignIn",component:()=>nt(()=>import("./SignIn-182c8bd7.js"),[])}]}),Gg=()=>new Promise((t,e)=>{const n=_c(Pc(),r=>{n(),t(r)},e)});Oc.beforeEach(async(t,e,n)=>{t.matched.some(r=>r.meta.requiresAuth)?await Gg()?n():(alert("Sign in to get access"),n("/register")):n()});var Jg="firebase",Yg="9.22.0";/**
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
 */zt(Jg,Yg,"app");var Xg=function(){return!!(window.location.hostname==="localhost"||window.location.hostname==="[::1]"||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))},ys;typeof window<"u"&&(typeof Promise<"u"?ys=new Promise(function(t){return window.addEventListener("load",t)}):ys={then:function(t){return window.addEventListener("load",t)}});function Qg(t,e){e===void 0&&(e={});var n=e.registrationOptions;n===void 0&&(n={}),delete e.registrationOptions;var r=function(s){for(var i=[],o=arguments.length-1;o-- >0;)i[o]=arguments[o+1];e&&e[s]&&e[s].apply(e,i)};"serviceWorker"in navigator&&ys.then(function(){Xg()?(Zg(t,r,n),navigator.serviceWorker.ready.then(function(s){r("ready",s)}).catch(function(s){return Sn(r,s)})):(kc(t,r,n),navigator.serviceWorker.ready.then(function(s){r("ready",s)}).catch(function(s){return Sn(r,s)}))})}function Sn(t,e){navigator.onLine||t("offline"),t("error",e)}function kc(t,e,n){navigator.serviceWorker.register(t,n).then(function(r){if(e("registered",r),r.waiting){e("updated",r);return}r.onupdatefound=function(){e("updatefound",r);var s=r.installing;s.onstatechange=function(){s.state==="installed"&&(navigator.serviceWorker.controller?e("updated",r):e("cached",r))}}}).catch(function(r){return Sn(e,r)})}function Zg(t,e,n){fetch(t).then(function(r){r.status===404?(e("error",new Error("Service worker not found at "+t)),Co()):r.headers.get("content-type").indexOf("javascript")===-1?(e("error",new Error("Expected "+t+" to have javascript content-type, but received "+r.headers.get("content-type"))),Co()):kc(t,e,n)}).catch(function(r){return Sn(e,r)})}function Co(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()}).catch(function(t){return Sn(emit,t)})}Qg(`${{}.BASE_URL}service-worker.js`,{ready(){console.log(`App is being served from cache by a service worker.
For more details, visit https://goo.gl/AFskqB`)},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}});const em={apiKey:"AIzaSyDgznTMkxgRTJq34IlkPbv1b7go4Is_tQk",authDomain:"e-doctor-923d0.firebaseapp.com",projectId:"e-doctor-923d0",storageBucket:"e-doctor-923d0.appspot.com",messagingSenderId:"321148660890",appId:"1:321148660890:web:e20db85c65a91fd1c70323",measurementId:"G-BT5VX0BDF8"};Va(em);const Nc=ef(zg);Nc.use(Oc);Nc.mount("#app");export{Th as A,Wa as B,Zt as C,om as D,am as E,Le as F,ot as G,$a as H,Va as I,Y as L,kn as S,kg as _,ge as a,cm as b,wi as c,Dl as d,rm as e,di as f,Pc as g,re as h,Lt as i,Eu as j,ca as k,im as l,Rs as m,Cs as n,os as o,Nl as p,wn as q,Go as r,lm as s,tm as t,od as u,sm as v,nm as w,zt as x,pt as y,gt as z};
