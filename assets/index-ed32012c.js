var _t=Object.defineProperty;var gt=(e,t,n)=>t in e?_t(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var W=(e,t,n)=>(gt(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();function yt(e,t){return t.forEach(function(n){n&&typeof n!="string"&&!Array.isArray(n)&&Object.keys(n).forEach(function(r){if(r!=="default"&&!(r in e)){var o=Object.getOwnPropertyDescriptor(n,r);Object.defineProperty(e,r,o.get?o:{enumerable:!0,get:function(){return n[r]}})}})}),e}function wt(e,t){const n=Object.create(null),r=e.split(",");for(let o=0;o<r.length;o++)n[r[o]]=!0;return t?o=>!!n[o.toLowerCase()]:o=>!!n[o]}const bt=()=>{},St=Object.assign,Et=Object.prototype.hasOwnProperty,re=(e,t)=>Et.call(e,t),A=Array.isArray,ee=e=>$e(e)==="[object Map]",me=e=>typeof e=="symbol",oe=e=>e!==null&&typeof e=="object",Ot=Object.prototype.toString,$e=e=>Ot.call(e),Ct=e=>$e(e).slice(8,-1),ve=e=>typeof e=="string"&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,_e=(e,t)=>!Object.is(e,t);let Rt;function Ke(e,t=Rt){t&&t.active&&t.effects.push(e)}const ge=e=>{const t=new Set(e);return t.w=0,t.n=0,t},qe=e=>(e.w&N)>0,Ge=e=>(e.n&N)>0,le=new WeakMap;let q=0,N=1;const ue=30;let k;const z=Symbol(""),de=Symbol("");class Ye{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ke(this,r)}run(){if(!this.active)return this.fn();let t=k,n=M;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=k,k=this,M=!0,N=1<<++q,q<=ue?(({deps:r})=>{if(r.length)for(let o=0;o<r.length;o++)r[o].w|=N})(this):Re(this),this.fn()}finally{q<=ue&&(r=>{const{deps:o}=r;if(o.length){let s=0;for(let c=0;c<o.length;c++){const a=o[c];qe(a)&&!Ge(a)?a.delete(r):o[s++]=a,a.w&=~N,a.n&=~N}o.length=s}})(this),N=1<<--q,k=this.parent,M=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){k===this?this.deferStop=!0:this.active&&(Re(this),this.onStop&&this.onStop(),this.active=!1)}}function Re(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}function ye(e,t){e.effect&&(e=e.effect.fn);const n=new Ye(e);t&&(St(n,t),t.scope&&Ke(n,t.scope)),t&&t.lazy||n.run();const r=n.run.bind(n);return r.effect=n,r}function Je(e){e.effect.stop()}let M=!0;const Xe=[];function se(){Xe.push(M),M=!1}function ie(){const e=Xe.pop();M=e===void 0||e}function R(e,t,n){if(M&&k){let r=le.get(e);r||le.set(e,r=new Map);let o=r.get(n);o||r.set(n,o=ge()),Ze(o)}}function Ze(e,t){let n=!1;q<=ue?Ge(e)||(e.n|=N,n=!qe(e)):n=!e.has(k),n&&(e.add(k),k.deps.push(e))}function T(e,t,n,r,o,s){const c=le.get(e);if(!c)return;let a=[];if(t==="clear")a=[...c.values()];else if(n==="length"&&A(e)){const l=Number(r);c.forEach((i,u)=>{(u==="length"||u>=l)&&a.push(i)})}else switch(n!==void 0&&a.push(c.get(n)),t){case"add":A(e)?ve(n)&&a.push(c.get("length")):(a.push(c.get(z)),ee(e)&&a.push(c.get(de)));break;case"delete":A(e)||(a.push(c.get(z)),ee(e)&&a.push(c.get(de)));break;case"set":ee(e)&&a.push(c.get(z))}if(a.length===1)a[0]&&he(a[0]);else{const l=[];for(const i of a)i&&l.push(...i);he(ge(l))}}function he(e,t){const n=A(e)?e:[...e];for(const r of n)r.computed&&ke(r);for(const r of n)r.computed||ke(r)}function ke(e,t){(e!==k||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const kt=wt("__proto__,__v_isRef,__isVue"),Qe=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(me)),xt=et(),Dt=et(!0),xe=Lt();function Lt(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=v(this);for(let s=0,c=this.length;s<c;s++)R(r,0,s+"");const o=r[t](...n);return o===-1||o===!1?r[t](...n.map(v)):o}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){se();const r=v(this)[t].apply(this,n);return ie(),r}}),e}function jt(e){const t=v(this);return R(t,0,e),t.hasOwnProperty(e)}function et(e=!1,t=!1){return function(n,r,o){if(r==="__v_isReactive")return!e;if(r==="__v_isReadonly")return e;if(r==="__v_isShallow")return t;if(r==="__v_raw"&&o===(e?t?Ht:rt:t?Ft:nt).get(n))return n;const s=A(n);if(!e){if(s&&re(xe,r))return Reflect.get(xe,r,o);if(r==="hasOwnProperty")return jt}const c=Reflect.get(n,r,o);return(me(r)?Qe.has(r):kt(r))?c:(e||R(n,0,r),t?c:O(c)?s&&ve(r)?c:c.value:oe(c)?e?be(c):ot(c):c)}}function Nt(e=!1){return function(t,n,r,o){let s=t[n];if(te(s)&&O(s)&&!O(r))return!1;if(!e&&(it(r)||te(r)||(s=v(s),r=v(r)),!A(t)&&O(s)&&!O(r)))return s.value=r,!0;const c=A(t)&&ve(n)?Number(n)<t.length:re(t,n),a=Reflect.set(t,n,r,o);return t===v(o)&&(c?_e(r,s)&&T(t,"set",n,r):T(t,"add",n,r)),a}}const At={get:xt,set:Nt(),deleteProperty:function(e,t){const n=re(e,t),r=Reflect.deleteProperty(e,t);return r&&n&&T(e,"delete",t,void 0),r},has:function(e,t){const n=Reflect.has(e,t);return me(t)&&Qe.has(t)||R(e,0,t),n},ownKeys:function(e){return R(e,0,A(e)?"length":z),Reflect.ownKeys(e)}},Mt={get:Dt,set:(e,t)=>!0,deleteProperty:(e,t)=>!0},we=e=>e,ce=e=>Reflect.getPrototypeOf(e);function Y(e,t,n=!1,r=!1){const o=v(e=e.__v_raw),s=v(t);n||(t!==s&&R(o,0,t),R(o,0,s));const{has:c}=ce(o),a=r?we:n?Se:G;return c.call(o,t)?a(e.get(t)):c.call(o,s)?a(e.get(s)):void(e!==o&&e.get(t))}function J(e,t=!1){const n=this.__v_raw,r=v(n),o=v(e);return t||(e!==o&&R(r,0,e),R(r,0,o)),e===o?n.has(e):n.has(e)||n.has(o)}function X(e,t=!1){return e=e.__v_raw,!t&&R(v(e),0,z),Reflect.get(e,"size",e)}function De(e){e=v(e);const t=v(this);return ce(t).has.call(t,e)||(t.add(e),T(t,"add",e,e)),this}function Le(e,t){t=v(t);const n=v(this),{has:r,get:o}=ce(n);let s=r.call(n,e);s||(e=v(e),s=r.call(n,e));const c=o.call(n,e);return n.set(e,t),s?_e(t,c)&&T(n,"set",e,t):T(n,"add",e,t),this}function je(e){const t=v(this),{has:n,get:r}=ce(t);let o=n.call(t,e);o||(e=v(e),o=n.call(t,e)),r&&r.call(t,e);const s=t.delete(e);return o&&T(t,"delete",e,void 0),s}function Ne(){const e=v(this),t=e.size!==0,n=e.clear();return t&&T(e,"clear",void 0,void 0),n}function Z(e,t){return function(n,r){const o=this,s=o.__v_raw,c=v(s),a=t?we:e?Se:G;return!e&&R(c,0,z),s.forEach((l,i)=>n.call(r,a(l),a(i),o))}}function Q(e,t,n){return function(...r){const o=this.__v_raw,s=v(o),c=ee(s),a=e==="entries"||e===Symbol.iterator&&c,l=e==="keys"&&c,i=o[e](...r),u=n?we:t?Se:G;return!t&&R(s,0,l?de:z),{next(){const{value:d,done:m}=i.next();return m?{value:d,done:m}:{value:a?[u(d[0]),u(d[1])]:u(d),done:m}},[Symbol.iterator](){return this}}}}function j(e){return function(...t){return e!=="delete"&&this}}function It(){const e={get(o){return Y(this,o)},get size(){return X(this)},has:J,add:De,set:Le,delete:je,clear:Ne,forEach:Z(!1,!1)},t={get(o){return Y(this,o,!1,!0)},get size(){return X(this)},has:J,add:De,set:Le,delete:je,clear:Ne,forEach:Z(!1,!0)},n={get(o){return Y(this,o,!0)},get size(){return X(this,!0)},has(o){return J.call(this,o,!0)},add:j("add"),set:j("set"),delete:j("delete"),clear:j("clear"),forEach:Z(!0,!1)},r={get(o){return Y(this,o,!0,!0)},get size(){return X(this,!0)},has(o){return J.call(this,o,!0)},add:j("add"),set:j("set"),delete:j("delete"),clear:j("clear"),forEach:Z(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{e[o]=Q(o,!1,!1),n[o]=Q(o,!0,!1),t[o]=Q(o,!1,!0),r[o]=Q(o,!0,!0)}),[e,n,t,r]}const[Tt,Ut,zt,Bt]=It();function tt(e,t){const n=t?e?Bt:zt:e?Ut:Tt;return(r,o,s)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?r:Reflect.get(re(n,o)&&o in r?n:r,o,s)}const Pt={get:tt(!1,!1)},Wt={get:tt(!0,!1)},nt=new WeakMap,Ft=new WeakMap,rt=new WeakMap,Ht=new WeakMap;function ot(e){return te(e)?e:st(e,!1,At,Pt,nt)}function be(e){return st(e,!0,Mt,Wt,rt)}function st(e,t,n,r,o){if(!oe(e)||e.__v_raw&&(!t||!e.__v_isReactive))return e;const s=o.get(e);if(s)return s;const c=(a=e).__v_skip||!Object.isExtensible(a)?0:function(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}(Ct(a));var a;if(c===0)return e;const l=new Proxy(e,c===2?r:n);return o.set(e,l),l}function te(e){return!(!e||!e.__v_isReadonly)}function it(e){return!(!e||!e.__v_isShallow)}function v(e){const t=e&&e.__v_raw;return t?v(t):e}const G=e=>oe(e)?ot(e):e,Se=e=>oe(e)?be(e):e;function ct(e){M&&k&&Ze((e=v(e)).dep||(e.dep=ge()))}function at(e,t){const n=(e=v(e)).dep;n&&he(n)}function O(e){return!(!e||e.__v_isRef!==!0)}function L(e){return lt(e,!1)}function ne(e){return lt(e,!0)}function lt(e,t){return O(e)?e:new Vt(e,t)}class Vt{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:v(t),this._value=n?t:G(t)}get value(){return ct(this),this._value}set value(t){const n=this.__v_isShallow||it(t)||te(t);t=n?t:v(t),_e(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:G(t),at(this))}}function b(e){return O(e)?e.value:e}var ut;class $t{constructor(t,n,r,o){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[ut]=!1,this._dirty=!0,this.effect=new Ye(t,()=>{this._dirty||(this._dirty=!0,at(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=r}get value(){const t=v(this);return ct(t),!t._dirty&&t._cacheable||(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}ut="__v_isReadonly";function pe(){return pe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pe.apply(this,arguments)}var Ae,Me,Kt=(Ae=function(e){var t=Object.prototype.hasOwnProperty,n="~";function r(){}function o(l,i,u){this.fn=l,this.context=i,this.once=u||!1}function s(l,i,u,d,m){if(typeof u!="function")throw new TypeError("The listener must be a function");var g=new o(u,d||l,m),_=n?n+i:i;return l._events[_]?l._events[_].fn?l._events[_]=[l._events[_],g]:l._events[_].push(g):(l._events[_]=g,l._eventsCount++),l}function c(l,i){--l._eventsCount==0?l._events=new r:delete l._events[i]}function a(){this._events=new r,this._eventsCount=0}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(n=!1)),a.prototype.eventNames=function(){var l,i,u=[];if(this._eventsCount===0)return u;for(i in l=this._events)t.call(l,i)&&u.push(n?i.slice(1):i);return Object.getOwnPropertySymbols?u.concat(Object.getOwnPropertySymbols(l)):u},a.prototype.listeners=function(l){var i=this._events[n?n+l:l];if(!i)return[];if(i.fn)return[i.fn];for(var u=0,d=i.length,m=new Array(d);u<d;u++)m[u]=i[u].fn;return m},a.prototype.listenerCount=function(l){var i=this._events[n?n+l:l];return i?i.fn?1:i.length:0},a.prototype.emit=function(l,i,u,d,m,g){var _=n?n+l:l;if(!this._events[_])return!1;var y,f,p=this._events[_],D=arguments.length;if(p.fn){switch(p.once&&this.removeListener(l,p.fn,void 0,!0),D){case 1:return p.fn.call(p.context),!0;case 2:return p.fn.call(p.context,i),!0;case 3:return p.fn.call(p.context,i,u),!0;case 4:return p.fn.call(p.context,i,u,d),!0;case 5:return p.fn.call(p.context,i,u,d,m),!0;case 6:return p.fn.call(p.context,i,u,d,m,g),!0}for(f=1,y=new Array(D-1);f<D;f++)y[f-1]=arguments[f];p.fn.apply(p.context,y)}else{var x,$=p.length;for(f=0;f<$;f++)switch(p[f].once&&this.removeListener(l,p[f].fn,void 0,!0),D){case 1:p[f].fn.call(p[f].context);break;case 2:p[f].fn.call(p[f].context,i);break;case 3:p[f].fn.call(p[f].context,i,u);break;case 4:p[f].fn.call(p[f].context,i,u,d);break;default:if(!y)for(x=1,y=new Array(D-1);x<D;x++)y[x-1]=arguments[x];p[f].fn.apply(p[f].context,y)}}return!0},a.prototype.on=function(l,i,u){return s(this,l,i,u,!1)},a.prototype.once=function(l,i,u){return s(this,l,i,u,!0)},a.prototype.removeListener=function(l,i,u,d){var m=n?n+l:l;if(!this._events[m])return this;if(!i)return c(this,m),this;var g=this._events[m];if(g.fn)g.fn!==i||d&&!g.once||u&&g.context!==u||c(this,m);else{for(var _=0,y=[],f=g.length;_<f;_++)(g[_].fn!==i||d&&!g[_].once||u&&g[_].context!==u)&&y.push(g[_]);y.length?this._events[m]=y.length===1?y[0]:y:c(this,m)}return this},a.prototype.removeAllListeners=function(l){var i;return l?this._events[i=n?n+l:l]&&c(this,i):(this._events=new r,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=n,a.EventEmitter=a,e.exports=a},Ae(Me={exports:{}}),Me.exports);const C={CS_HOOK_CB:Symbol("HOOK_CB"),IS_ANCHOR:Symbol("IS_ANCHOR"),NONE:Symbol("NONE"),SELF_CS:Symbol("SELF_CS"),CACHE_NODES:Symbol("CACHE_NODES"),IS_COMPONENT:Symbol("IS_COMPONENT")};class w extends Kt{static peek(){return w.source_stack.peek()||w.global_source}constructor(t,n){super(),this.host=void 0,this.__context={},this.__parent_source=w.source_stack.peek()||w.global_source,this.__container_source=this,this.states={mounted:!1,unmounted:!1},this.host=t,this.__parent_source&&(this.setupContainerSource(),this.on("throw",r=>{var o;return(o=this.__parent_source)==null?void 0:o.emit("throw",r)}),this.once("mount",()=>this.states.mounted=!0),this.once("unmount",()=>this.states.unmounted=!0),this.__parent_source.once("unmount",()=>{this.dispose(),this.emit("unmount")}),n||this.__parent_source.once("update_after",()=>{var r;(r=this.__parent_source)==null||r.once("update_after",()=>{this.emit("unmount")})}))}onMount(t){this.states.mounted?t():this.once("mount",t)}onUnmount(t){this.states.unmounted?t():this.once("unmount",t)}setupContainerSource(){for(;this.__container_source&&this.__container_source!==w.global_source;){var t;if((t=this.__container_source.host)!=null&&t[C.IS_COMPONENT])break;this.__container_source=this.__container_source.__parent_source}}dispose(){this.removeAllListeners(),this.__context={}}effect(t,n){const r=ye(t,n);return this.once("unmount",()=>Je(r)),r}}w.source_stack=new class{constructor(){this.items=void 0,this.items=[]}toArray(){return[...this.items]}push(e){this.items.push(e)}pop(){return this.items.pop()}peek(){return this.items[this.items.length-1]}size(){return this.items.length}isEmpty(){return this.items.length===0}},w.global_source=new w;const F=(e,t,n)=>{const r=o=>{const s=o.relatedNode;s&&s===e.parentNode&&t(s,e)};return e.addEventListener(n,r),()=>e.removeEventListener(n,r)};class I{constructor(){this.source=void 0,this.viewAnchor=(()=>{const t=document.createTextNode("");return t[C.IS_ANCHOR]=!0,t})(),this.currentView=this.viewAnchor,this.renderEffectRunner=void 0,this.dispose_onDomInserted=void 0,this._initialized=!1}_initialize(){this._initialized||(this._initialized=!0,this.initialize())}initialize(){this.source||(this.source=new w(this)),this.source.once("unmount",()=>this.dispose())}ensureEffectRunner(){return this._initialize(),this.renderEffectRunner||(this.renderEffectRunner=ye(this.update.bind(this),{lazy:!1}),this.dispose_onDomInserted=F(this.currentView,(t,n)=>{var r,o,s;(r=this.dispose_onDomInserted)==null||r.call(this),this.source.emit("mount"),this.viewAnchor!==n&&t.insertBefore(this.viewAnchor,n),n!==this.currentView&&(t.insertBefore(this.currentView,n),(s=n)&&s[C.IS_ANCHOR]||(o=n.parentElement)==null||o.removeChild(n))},"DOMNodeInserted")),this.renderEffectRunner}render(){return null}_update(){const t=this.currentView,n=this.render()||this.viewAnchor,r=t==null?void 0:t.parentElement;r&&r.replaceChild(n,t),this.currentView=n}update(){this.source.emit("update_before");try{w.source_stack.push(this.source),this.source.emit("update"),this._update(),w.source_stack.pop()}catch(t){requestAnimationFrame(()=>{this.source.emit("throw",t),console.error(t)})}finally{this.source.emit("update_after")}}dispose(){var t,n,r,o;(t=this.renderEffectRunner)==null||t.effect.stop(),(n=this.currentView.parentElement)==null||n.removeChild(this.currentView),(r=this.viewAnchor.parentElement)==null||r.removeChild(this.viewAnchor),(o=this.dispose_onDomInserted)==null||o.call(this)}static warpView(t){return t instanceof Node||t===null?t:document.createTextNode(`${t}`)}static warp(t){if(typeof t!="function"&&!O(t))return I.warpView(t);const n=new I;let r;if(typeof t=="function")r=t;else{if(!O(t))throw new Error("Unknown view type.");r=()=>b(t)}return n.render=()=>I.warpView(r()),n.ensureEffectRunner(),n.currentView}}let dt;dt=C.IS_COMPONENT;class ht extends I{get[dt](){return!0}constructor(t,n,r){super(),this._define=void 0,this.props=void 0,this.children=void 0,this.state=void 0,this._define=t,this.props=n,this.children=r}initialize(){this.initializeComponent()}initializeComponent(){this.source=new w(this,"__node_cached"in this.props),this.installSource(),this.initializeSetup()}initializeSetup(){const{props:t,children:n}=this;se(),w.source_stack.push(this.source),this.source.emit("setup_before"),this.state=this._define.setup(t,n),this.source.emit("setup_after"),w.source_stack.pop(),ie()}render(){const t=this._define.render(this.props,this.state,this.children);return I.warp(t)}installSource(){var t,n;(t=(n=this._define)[C.CS_HOOK_CB])==null||t.call(n,this.source)}}class qt extends ht{constructor(t,n,r){const o={setup:(s,c)=>{const a={};return o.render=t(s,a,c),a},render:()=>{}};o[C.CS_HOOK_CB]=t[C.CS_HOOK_CB],super(o,n,r),this._function_define=void 0,this._function_define=t}}class Gt{constructor(t,n,r){this.tagNameOrDome=void 0,this.props=void 0,this.children=void 0,this.node=void 0,this.source=new w(this),this.tagNameOrDome=t,this.props=n,this.children=r,this.source.once("unmount",()=>this.dispose()),this.buildNode()}dispose(){var t,n;(t=this.node)==null||(n=t.parentElement)==null||n.removeChild(this.node)}buildNode(){if(this.node)return this.node;this.node=this.tagNameOrDome instanceof Element?this.tagNameOrDome:document.createElement(this.tagNameOrDome),se(),this.hydrateChildren(),ie();for(const[t,n]of Object.entries(this.props))this.hydrateAttribute(t,n);return this.node}hydrateAttribute(t,n){if(!t.startsWith("__")){switch(t){case"ref":return void(typeof n=="function"?n(this.node):O(n)&&(n.value=this.node));case"effect":return void(typeof n=="function"&&this.source.effect(()=>n(this.node),{lazy:!1}))}if(t.startsWith("on")&&typeof n=="function"){const r=t.slice(2).toLowerCase(),o=this.node["__cb_"+t];return o&&this.node.removeEventListener(r,o),this.node["__cb_"+t]=n,void this.node.addEventListener(r,n)}this.source.effect(()=>{const r=b(n);typeof r=="boolean"?r?this.node.setAttribute(t,""):this.node.removeAttribute(t):this.node.setAttribute(t,r)},{lazy:!1})}}hydrateChildren(){const{children:t}=this;for(const n of t){if(n==null)continue;const r=I.warp(n);r&&this.node.appendChild(r)}}}const Ee=e=>e(w.peek()),Yt=e=>Ee(t=>t.onMount(e)),E=e=>Ee(t=>t.onUnmount(e)),Ie=(e,t)=>{var n,r;if(!e)return;const o=w.peek(),{__container_source:s}=o;s&&((n=s.__context)[r=C.CACHE_NODES]||(n[r]={}),s.__context[C.CACHE_NODES][e]=t)},pt=(e,t={},n=[])=>{const{key:r}=t;delete t.key,r&&(t.__node_cached=!0);const o=(s=>{var c,a;if(!s)return;const l=w.peek(),{__container_source:i}=l;return i?((c=i.__context)[a=C.CACHE_NODES]||(c[a]={}),i.__context[C.CACHE_NODES][s]):void 0})(r);if(o)return o;if(typeof e=="function"){const s=new qt(e,t,n);return Ie(r,s),s}if(typeof e=="object"&&typeof e.render=="function"&&typeof e.setup=="function"){const s=new ht(e,t,n);return Ie(r,s),s}throw new Error(`Valid define type [${typeof e}] is not supported for reactiveHydrate.`)},Jt=(e,t,...n)=>{var r;if(t||(t={}),n||(n=[]),n=((r=n)==null?void 0:r.flat())||n,typeof e=="string"||e instanceof Element)return new Gt(e,t,n).node;const o=pt(e,t,n);return o.ensureEffectRunner(),o.currentView},h=Jt,Xt=(e,t,n)=>{const r=e instanceof Element?e:document.querySelector(e);if(!r)throw new Error(`Could not find container: ${e}`);const o=pt(t,n);return o.ensureEffectRunner(),r.appendChild(o.currentView),o},U=(e,t)=>{let n=null;const r=ye(()=>{n==null||n(),e(s=>n=s)},pe({lazy:!1},t)),o=()=>{n==null||n(),Je(r),n=null};return E(o),[r,o]},B=(e,t,n)=>{let r;return U(()=>{const o=typeof e=="function"?e(r):b(e);Ce(()=>t(o,r)),r=o},n)},Oe=(e,t)=>{const n=L();return U(()=>{const r=S(n),o=e(r);var s,c;s=r,c=o,Object.is(s,c)||s===c||(n.value=o)},t),n},Ce=(e,...t)=>{se();const n=e(...t);return ie(),n},S=e=>Ce(()=>b(e)),Zt=(...e)=>e.map(t=>b(t)),Qt=Zt,ft=(e,t)=>(((n,r)=>{if(!r)return;const o=n[C.CS_HOOK_CB];n[C.CS_HOOK_CB]=s=>{o==null||o(s),r(s)}})(e,t),e),en=ft({setup({fallbackRender:e,onError:t,render:n}){const r=w.peek();let o=L(null);r.on("throw",c=>{c instanceof Error&&(t==null||t(c),o.value=c)});const s=L(1);return{catchError:o,rerenderRef:s,fallbackRender:e,childrenRender:n}},render(e,{fallbackRender:t,rerenderRef:n,catchError:r,childrenRender:o}){const s=()=>{n.value=Date.now(),r.value=null};return r.value?Ce(()=>t(r.value,s)):o()}}),Te=ft({setup(e,t,...n){const r={anchor:document.createTextNode(""),children:[],parentNode:null},o=(s=typeof t=="function"?t:()=>[t,...n],()=>s().map(i=>I.warp(i)).filter(Boolean));var s;const[c,a]=U(()=>{const i=r.children,u=o(),{parentNode:d,anchor:m}=r;if(!d)return;const g=Math.max(u.length,i.length);for(let _=0;_<g;_++){const y=u[_],f=i[_];if(!y&&f)f.remove();else if(!f&&y)d.insertBefore(y,m);else if(f&&y){if(f===y)continue;d.replaceChild(y,f)}}r.children=u}),l=F(r.anchor,i=>{r.parentNode=i,c()},"DOMNodeInserted");return E(()=>{l(),a(),r.anchor.remove(),r.children.forEach(i=>i==null?void 0:i.remove())}),Ee(i=>{var u;(u=i.__parent_source)==null||u.once("update_before",()=>{var d;r.children.forEach(m=>m==null?void 0:m.remove()),(d=i.__parent_source)==null||d.once("update_after",()=>{r.anchor.remove()})})}),r},render:(e,t)=>t.anchor});var fe=function e(t,n){if(t===n)return!0;if(t&&n&&typeof t=="object"&&typeof n=="object"){if(t.constructor!==n.constructor)return!1;var r,o,s;if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(o=r;o--!=0;)if(!e(t[o],n[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((r=(s=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(o=r;o--!=0;)if(!Object.prototype.hasOwnProperty.call(n,s[o]))return!1;for(o=r;o--!=0;){var c=s[o];if(!e(t[c],n[c]))return!1}return!0}return t!=t&&n!=n},Ue=yt({__proto__:null,default:fe},[fe]);const tn=["container"],ze=e=>{if(!e)throw new Error("styleOrFn is required.");return typeof e=="function"?e:()=>e},Be=(e,t,n)=>{const{applySheet:r,removeSheet:o,parseStyle:s}=(a=>{const l=new CSSStyleSheet;let i=!1;return{sheet:l,parseStyle:u=>{const d=function(m,g,_=!1){const y=_?`
`:" ",f=[{node:g,css:m}];let p="";for(;f.length>0;){const{node:x,css:$}=f.pop();p+=`${x} {${y}`;for(const P in $){const K=$[P];if(typeof K=="object"){const ae=P.startsWith("&")?x+P.slice(1).replace(/&/g,x):x+" "+P;f.push({node:ae,css:K})}else{if(typeof K=="string"&&!K.trim()||K==null)continue;p+=`${D=P,D.replace(/[A-Z]/g,ae=>`-${ae.toLowerCase()}`)}: ${$[P]};${y}`}}p+=`}
`}var D;return p.trim()}(a(),u);l.replaceSync(d)},applySheet:()=>{i||(i=!0,document.adoptedStyleSheets=[...document.adoptedStyleSheets,l])},removeSheet:()=>{i&&(i=!1,document.adoptedStyleSheets=[...document.adoptedStyleSheets].filter(u=>u!==l))}}})(e),c=document.createTextNode("");if(U(()=>s(t)),E(F(c,r,"DOMNodeInserted")),E(F(c,o,"DOMNodeRemoved")),E(o),n){const a=l=>{var i;return l==null||(i=l.classList)==null?void 0:i.remove(n)};E(F(c,l=>{var i;return l==null||(i=l.classList)==null?void 0:i.add(n)},"DOMNodeInserted")),E(F(c,a,"DOMNodeRemoved"))}return{anchor:c}},Pe=(e,...t)=>e.reduce((n,r,o)=>{var s;return n+=r,o<t.length&&(n+=b(typeof(s=t[o])=="function"?s():s)),n},"");var V={__proto__:null,ErrorBoundary:en,Fragment:Te,ArrayRender:({getItems:e,render:t,needUpdate:n=(r,o)=>!((Ue==null?void 0:fe)||Ue)(r,o)})=>{const r=ne([]);return B(e,o=>{const s=S(r);for(let a=0;a<Math.max(s.length,o.length);a++){const l=s[a],i=o[a];if(l!==void 0&&i!==void 0){if(!l.node||n(i,l.data)){const u=t(i,a,o,l.node);l.node=u,l.data=i}}else if(l===void 0){const u=t(i,a,o);s.push({data:i,node:u})}else i===void 0&&(l.del=!0)}const c=s.filter(a=>a.del!==!0);r.value=c},{lazy:!1}),()=>h(Te,{},()=>r.value.filter(o=>!o.del).map(o=>o.node))},Portal:(e,...t)=>{let{container:n}=e,r=function(c,a){if(c==null)return{};var l,i,u={},d=Object.keys(c);for(i=0;i<d.length;i++)a.indexOf(l=d[i])>=0||(u[l]=c[l]);return u}(e,tn);const o=document.createTextNode(""),s=n||document.createElement("div");return document.body.appendChild(s),h(s,r,...t),E(()=>{var c;(c=s.parentElement)==null||c.removeChild(s)}),()=>o},Style:(e,t)=>{const n=ze(e.styleFn||e.style||t),r=`__s_${Math.floor(Math.random()*Number.MAX_SAFE_INTEGER)}`,{anchor:o}=Be(n,`.${r}`,r);return()=>o},GlobalStyle:(e,t)=>{const n=ze(e.styleFn||e.style||t),{anchor:r}=Be(n,":root");return()=>r},text:(e,...t)=>{const n=[];for(let r=0;r<e.length;r++){n.push(document.createTextNode(e[r]));const o=t[r],s=document.createTextNode("");typeof o=="function"?U(()=>s.textContent=o()):O(o)&&U(()=>s.textContent=String(o.value)),n.push(s)}return n},raw:Pe,rawRef:(e,...t)=>{const n=function(r,o,s=!1){let c,a;const l=typeof r=="function";return l?(c=r,a=bt):(c=r.get,a=r.set),new $t(c,a,l||!a,s)}(()=>Pe(e,...t));return E(()=>n.effect.stop()),n},lazy:e=>{let t=null,n=null;return(r,...o)=>{const s=L(t);return t||(n||(n=e().then(c=>t=c))).then(c=>{s.value=c,console.log(c)}),()=>s.value?h(s.value.default,r,...o):null}}};const nn=(e,t)=>{const n=L("");return U(()=>{const r=S(n);r&&URL.revokeObjectURL(r),n.value=URL.createObjectURL(new Blob([b(e)],{type:"text/plain",...t}))}),E(()=>URL.revokeObjectURL(n.value)),n},rn="modulepreload",on=function(e,t){return new URL(e,t).href},We={},sn=function(t,n,r){if(!n||n.length===0)return t();const o=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=on(s,r),s in We)return;We[s]=!0;const c=s.endsWith(".css"),a=c?'[rel="stylesheet"]':"";if(!!r)for(let u=o.length-1;u>=0;u--){const d=o[u];if(d.href===s&&(!c||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const i=document.createElement("link");if(i.rel=c?"stylesheet":rn,c||(i.as="script",i.crossOrigin=""),i.href=s,document.head.appendChild(i),c)return new Promise((u,d)=>{i.addEventListener("load",u),i.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t())},cn=()=>sn(()=>import("https://unpkg.com/@monaco-editor/loader@1.3.3/lib/umd/monaco-loader.js"),[],import.meta.url).then(()=>window.monaco_loader).then(e=>e.init()),an=({value:e,onChange:t,isDark:n,onSave:r,...o})=>{let s,c,a;return U(()=>{const l=b(n);a!=null&&a.editor&&(l?a.editor.setTheme("vs-dark"):a.editor.setTheme("vs"))}),E(()=>{s==null||s.dispose()}),O(e)&&B(e,l=>{c==null||c.setValue(l)}),()=>h("div",{...o,ref:async l=>{a=await cn(),c=a.editor.createModel(S(e),"typescript",a.Uri.file("main.ts")),c.onDidChangeContent(()=>t(c.getValue())),a.languages.typescript.typescriptDefaults.setCompilerOptions({jsx:"react"}),a.languages.typescript.typescriptDefaults.setDiagnosticsOptions({noSemanticValidation:!0,noSyntaxValidation:!0}),s=a.editor.create(l,{automaticLayout:!0,wordWrap:!0,theme:S(n)?"vs-dark":"vs"}),s.setModel(c),r&&s.addCommand(a.KeyMod.CtrlCmd|a.KeyCode.KeyS,()=>{r(c.getValue())})}})};class ln{constructor(){W(this,"idx",0);W(this,"demos",[]);W(this,"currentDemo",null)}registerDemo(t,n,r){const o={id:this.idx++,name:t,version:n,code:r};this.demos.push(o),this.currentDemo||(this.currentDemo=o)}selectDemo(t){const n=this.demos.find(r=>r.id===Number(t));if(!n)throw new Error(`Cannot find demo with name ${name}`);return this.currentDemo=n,n}}const un=`import { rh, ref, mount, unref, setupWatch } from "@rhjs/rh";

const Counter = ({ prefix }) => {
  const count = ref(1);
  const inc = () => (count.value += 1);
  const dec = () => (count.value -= 1);
  setupWatch(count, console.log);
  return () => (
    <button
      onContextMenu={(ev) => {
        ev.preventDefault();
        dec();
      }}
      onClick={inc}
    >
      {prefix} | {count} | {new Date().getUTCSeconds()}
    </button>
  );
};

const Switch = ({ branches, currentBranch }) => {
  return () => <div>{branches[unref(currentBranch)]}</div>;
};

const App = () => {
  const currentBranch = ref("page1");
  return () => (
    <div>
      <div>
        <button onClick={() => (currentBranch.value = "page1")}>page1</button>
        <button onClick={() => (currentBranch.value = "page2")}>page2</button>
        <button onClick={() => (currentBranch.value = "page3")}>page3</button>
      </div>
      <p>{currentBranch}</p>
      <Switch
        branches={{
          page1: () => <Counter key={"page1"} prefix={"🐷"} />,
          page2: () => <Counter key={"page2"} prefix={"🐹"} />,
          page3: () => <Counter key={"page3"} prefix={"🐰"} />,
        }}
        currentBranch={currentBranch}
      />
    </div>
  );
};

mount("#app", App);
`,dn=`import { Button, ensureFluentUILoaded } from "@rhjs/fluent-web-components";
import { rh, reactivity, utils, cs } from "@rhjs/rh";
const { ref, unref } = reactivity;

ensureFluentUILoaded().then(() => console.log("FluentUI initialized."));

const appearances = ["accent", "lightweight", "neutral", "outline", "stealth"];

const App = () => {
  const count = ref(1);
  const appearance = utils.computed(
    () => appearances[unref(count) % appearances.length]
  );
  return () => (
    <Button
      appearance={appearance}
      onClick={() => {
        count.value += 1;
        console.log(count.value);
      }}
      style={"user-select: none;"}
    >
      {count} | {appearance}
    </Button>
  );
};

rh.mount(document.querySelector("#app"), App);
`,H=new ln;H.registerDemo("Counter","0.0.34",dn);H.registerDemo("Counter","0.1.1-dev.7",un);const Fe=L(H.currentDemo),mt=()=>({mgr:H,currentDemo:Fe,selectDemo(e){Fe.value=H.selectDemo(e)},demos:H.demos}),hn=()=>{const{selectDemo:e,currentDemo:t,demos:n}=mt();return()=>h("div",null,h("select",{onChange:r=>e(r.target.value)},n.map(r=>h("option",{value:r.id},r.name," @",r.version))))},vt=({styleFn:e,isDark:t,...n},r,o)=>()=>h("div",{...n},h(V.Style,{styleFn:()=>({display:"inline-flex",alignItems:"center",justifyContent:"center",paddingLeft:"12px",paddingRight:"12px",cursor:"pointer",userSelect:"none",marginLeft:"4px","&:hover":{backgroundColor:b(t)?"rgba(64,64,64,1)":"rgba(64,64,64,0.1)"},"&:active":{outline:"solid 1px",outlineColor:b(t)?"#fff":"rgba(64,64,64,1)"},...e==null?void 0:e()})}),o),pn=({isDark:e})=>()=>h(vt,{onClick:()=>{O(e)&&(e.value=!S(e))},isDark:e},h("span",null,()=>b(e)?"🌘":"🌖")),He=({isDark:e,href:t,target:n="_blank"},r,o)=>()=>h(vt,{isDark:e,onClick:()=>{window.open(t,n)}},h("a",{href:t,target:n,style:"text-decoration: none; color: inherit;"},o)),fn=({isDark:e})=>()=>h("div",null,h(V.Style,{styleFn:()=>({paddingLeft:"12px",paddingRight:"12px",height:"100%",width:"calc(100% - 24px)",display:"grid",gridTemplateColumns:"minmax(0, 1fr) 12px minmax(0, 1fr)"})}),h("div",{style:"display: inline-flex; align-items: center;"},h("span",{style:"user-select: none;"},"🧩 rh.js"),h(pn,{isDark:e}),h(hn,null)),h("div",null),h("div",{style:"display: inline-flex; align-items: center; justify-content: right;"},h(He,{isDark:e,href:"https://zhzluke96.github.io/rhjs-demos/#demo",target:"_self"},"demos"),h(He,{isDark:e,href:"https://github.com/zhzLuke96/rh.js"},"github"))),mn=()=>{const e=`
<!DOCTYPE html>
<html lang="en">
  <meta charset="utf-8" />
  <title>DevTools</title>
  <style>
    @media (prefers-color-scheme: dark) {
      body {
        background-color: rgb(41 42 45);
      }
    }
  </style>
  <meta name="referrer" content="no-referrer" />
  <script src="https://unpkg.com/@ungap/custom-elements/es.js"><\/script>
  <script
    type="module"
    src="https://cdn.jsdelivr.net/npm/chii@1.8.0/public/front_end/entrypoints/chii_app/chii_app.js"
  ><\/script>
  <body class="undocked" id="-blink-dev-tools"></body>
</html>
`.trim(),t=URL.createObjectURL(new Blob([e],{type:"text/html"}));return E(()=>URL.revokeObjectURL(t)),`${t}#?embedded=${encodeURIComponent(location.origin)}`},vn=(e,t,n="")=>`
<!doctype html>
<html${e?' class="dark"':""}>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link href="https://unpkg.com/modern-normalize@1.1.0/modern-normalize.css" rel="stylesheet">
    <script async src="https://ga.jspm.io/npm:es-module-shims@1.7.0/dist/es-module-shims.js"><\/script>
    <style>
      html, body {
        position: relative;
        width: 100%;
        height: 100%;
      }

      body {
        color: #333;
        margin: 0;
        padding: 8px;
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
        max-width: 100%;
      }

      .dark body {
        color: #e5e7eb;
      }

      .dark {
        color-scheme: dark;
      }

      input, button, select, textarea {
        padding: 0.4em;
        margin: 0 0 0.5em 0;
        box-sizing: border-box;
        border: 1px solid #ccc;
        border-radius: 2px;
      }

      button {
        color: #333;
        background-color: #f4f4f4;
        outline: none;
      }

      button:disabled {
        color: #999;
      }

      button:not(:disabled):active {
        background-color: #ddd;
      }

      button:focus {
        border-color: #666;
      }
    </style>
    <script type="importmap">${t}<\/script>
    <script src="https://cdn.jsdelivr.net/npm/chobitsu"><\/script>
    <script type="module">
      window.addEventListener('message', async ({ data }) => {
        const { event, value } = data;

        if (event !== 'CODE_UPDATE') return;

        const past_appsrc = document.getElementById('appsrc');
        if (past_appsrc) {
          if (past_appsrc.src === value) return;
          else {
            past_appsrc.remove();
          }
        }

        window.dispose?.();
        window.dispose = undefined;

        document.getElementById('app').innerHTML = "";

        console.clear();

        const script = document.createElement('script');
        script.src = value;
        script.id = 'appsrc';
        script.type = 'module';
        document.body.appendChild(script);

        const load = document.getElementById('load');
        if (load) load.remove();
      });
      const sendToDevtools = (message) => {
        window.parent.postMessage(JSON.stringify(message), '*');
      };
      let id = 0;
      const sendToChobitsu = (message) => {
        message.id = 'tmp' + ++id;
        chobitsu.sendRawMessage(JSON.stringify(message));
      };
      chobitsu.setOnMessage((message) => {
        if (message.includes('"id":"tmp')) return;
        window.parent.postMessage(message, '*');
      });
      window.addEventListener('message', ({ data }) => {
        try {
          const { event, value } = data;
          if (event === 'DEV') {
            chobitsu.sendRawMessage(data.data);
          } else if (event === 'LOADED') {
            sendToDevtools({
              method: 'Page.frameNavigated',
              params: {
                frame: {
                  id: '1',
                  mimeType: 'text/html',
                  securityOrigin: location.origin,
                  url: location.href,
                },
                type: 'Navigation',
              },
            });
            sendToChobitsu({ method: 'Network.enable' });
            sendToDevtools({ method: 'Runtime.executionContextsCleared' });
            sendToChobitsu({ method: 'Runtime.enable' });
            sendToChobitsu({ method: 'Debugger.enable' });
            sendToChobitsu({ method: 'DOMStorage.enable' });
            sendToChobitsu({ method: 'DOM.enable' });
            sendToChobitsu({ method: 'CSS.enable' });
            sendToChobitsu({ method: 'Overlay.enable' });
            sendToDevtools({ method: 'DOM.documentUpdated' });
          }
        } catch (e) {
          console.error(e);
        }
      });
    <\/script>
  </head>
  <body>
    <div id="load" style="display: flex; height: 80vh; align-items: center; justify-content: center;">
      <p style="font-size: 1.5rem">Loading the playground...</p>
    </div>
    ${n}
    <div id="app"></div>
    <script id="appsrc" type="module"><\/script>
  </body>
</html>
`.trim();function _n(e,t){const n=ne(t),r=o=>{n.value=e(S(n),o)};return[be(n),r]}const gn=(e,t,n,r)=>{const o={sendToIframe(a){var l,i;(i=(l=S(e))==null?void 0:l.contentWindow)==null||i.postMessage(a,"*")},sendToDevtools(a){var l,i;(i=(l=S(t))==null?void 0:l.contentWindow)==null||i.postMessage(a,"*")}},s=()=>{const{codeInjected:a,codeURL:l}=b(n);a||l&&requestAnimationFrame(()=>{o.sendToIframe({event:"CODE_UPDATE",value:l}),r({type:"CODE_INJECTED"})})},c=a=>{var u,d;const[l,i]=Qt(e,t);!l||!i||((d=(u=a.data)==null?void 0:u.includes)!=null&&d.call(u,"Debugger.enable")&&(r({type:"Debugger.enable"}),s()),a.source===l.contentWindow?i.contentWindow.postMessage(a.data,"*"):a.source===i.contentWindow&&l.contentWindow.postMessage({event:"DEV",data:a.data},"*"))};return window.addEventListener("message",c),E(()=>window.removeEventListener("message",c)),o},yn=(e,t)=>{const{importMap:n,isDark:r}=e,o=Oe(()=>{const s=vn(S(r),JSON.stringify({imports:b(n)}));return URL.createObjectURL(new Blob([s],{type:"text/html"}))});return B(o,(s,c)=>{c&&URL.revokeObjectURL(c),t({type:"HTML_CHANGED",iframeSrc:s||""})}),E(()=>URL.revokeObjectURL(S(o)||"")),{iframeSrc:o}},wn=e=>{const{isDark:t,code:n}=e,r=ne(null),o=ne(null),s=u=>{var d;return(d=u.contentDocument)==null?void 0:d.documentElement.classList.toggle("dark",S(t))},c=u=>{const d=S(r);d&&(d.src=u)},[a,l]=_n((u,d)=>{var m,g;switch(console.log(u,d),d.type){case"IFRAME_READY":s(d.iframe);let _=u.codeInjected;return{...u,codeInjected:_,iframeReady:!0};case"DEVTOOLS_IFRAME_READY":return{...u,devtoolsIframeReady:!0};case"DEV_LOADED":return{...u,devLoaded:!0};case"HTML_CHANGED":return c(d.iframeSrc),u.devtoolsIframeReady&&((g=(m=S(o))==null?void 0:m.contentWindow)==null||g.location.reload()),{iframeReady:!1,devtoolsIframeReady:!1,devLoaded:!1,codeInjected:!1,darkInjected:!1};case"CODE_UPDATE":return{...u,codeURL:d.codeURL};case"CODE_INJECTED":return{...u,codeInjected:!0}}return u},{iframeReady:!1,devtoolsIframeReady:!1,devLoaded:!1,codeInjected:!1,codeURL:S(n)});B(()=>b(n),u=>l({type:"CODE_UPDATE",codeURL:u})),gn(r,o,a,l);const{iframeSrc:i}=yn(e,l);return B(r,u=>{u==null||u.addEventListener("load",()=>l({type:"IFRAME_READY",iframe:u}))}),B(o,u=>{u==null||u.addEventListener("load",()=>l({type:"DEVTOOLS_IFRAME_READY",devIframe:u}))}),{iframeSrc:i,iframeRef:r,devtoolsIframeRef:o,previewState:a,dispatch:l}},bn=e=>{const{importMap:t,code:n,devtools:r,isDark:o,...s}=e,{iframeSrc:c,iframeRef:a,devtoolsIframeRef:l,previewState:i,dispatch:u}=wn(e),d=mn(),m=Oe(()=>`width: 100%; height: 100%; ${b(r)?"display: block;":"display: none;"}`);return()=>h("div",{...s},h(V.Style,{styleFn:()=>({display:"grid",height:"100%",width:"100%",gridTemplateRows:b(r)?"minmax(0, 1fr) 12px minmax(0, 1fr)":"minmax(0, 1fr)"})}),h("iframe",{ref:a,src:c,style:"width: 100%;height: 100%;",frameBorder:0,sandbox:"allow-popups-to-escape-sandbox allow-scripts allow-popups allow-forms allow-pointer-lock allow-top-navigation allow-modals allow-same-origin"}),h("div",null,"TODO: resizer"),h("iframe",{ref:l,style:m,src:d,frameBorder:"0"}))},Sn=({isDark:e})=>()=>h(V.GlobalStyle,{styleFn:()=>({fontFamily:"'Karla', system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",lineHeight:"1.5",fontWeight:"400",colorScheme:b(e)?"light dark":"dark",color:b(e)?"rgba(255, 255, 255, 0.87)":"#242424",backgroundColor:b(e)?"#333":"#fff",fontSynthesis:"none",textRendering:"optimizeLegibility","-webkitFontSmoothing":"antialiased","-moz-osxFontSmoothing":"grayscale","-webkitTextSizeAdjust":"100%",height:"100vh",width:"100vw",body:{margin:"0",minWidth:"100vw",minHeight:"100vh",width:"100%",height:"100%"},"#app":{width:"100%",height:"100%"}})});function En(){return new Worker(""+new URL("complier.worker-3d71da04.js",import.meta.url).href)}class On{constructor(){W(this,"registry",{})}registerWorker(t,n){this.registry[t]?console.warn(`Worker of type ${t} already registered.`):this.registry[t]=n}removeWorker(t){delete this.registry[t]}getWorker(t){const n=this.registry[t];if(n)return n;throw new Error(`No worker of type ${t} registered.`)}postMessage(t,n){this.getWorker(t).postMessage(n)}listenRecv(t,n){const r=this.getWorker(t);let o;const s=c=>{const{message_token:a}=c.data||{};if(a!==n)return;const l={...c.data};delete l.message_token,o(l),r.removeEventListener("message",s)};return r.addEventListener("message",s),{recv:new Promise((c,a)=>{o=c}),dispose:()=>r.removeEventListener("message",s)}}}class Cn{constructor(){W(this,"registry",new On);this.initialize()}async initialize(){this.registry.registerWorker("complier",new En)}worker_caller(t,n){const r=Math.random().toString(36).slice(2),o={...n,message_token:r};return this.registry.postMessage(t,o),this.registry.listenRecv(t,r)}compileFile(t){return this.worker_caller("complier",{event:"BABEL",payload:{file:t,compile_options:{}}})}compileFiles(t){return this.worker_caller("complier",{event:"ROLLUP",payload:{files:t,compile_options:{}}})}}const Ve=new Cn;w.global_source.on("throw",console.error);const Rn=()=>{let e=null;return E(()=>e==null?void 0:e.dispose()),{compileFile(t){return e==null||e.dispose(),e=Ve.compileFile(t),e.recv},compileFiles(t){return e==null||e.dispose(),e=Ve.compileFiles(t),e.recv}}},kn='import("@rhjs/rh").then(({cs, ElementSource}) => window.dispose = () => (cs || ElementSource).global_source.emit("unmount"));',xn=()=>{var l;const e=L(!0),{currentDemo:t}=mt(),n=Oe(()=>{var i;return{"@rhjs/rh":`https://unpkg.com/@rhjs/rh@${((i=t.value)==null?void 0:i.version)||"latest"}/dist/main.module.mjs`,"@rhjs/fluent-web-components":"https://unpkg.com/@rhjs/fluent-web-components@latest/dist/main.module.mjs"}}),r=L(""),o=nn(r,{type:"text/javascript"}),s=L(((l=t.value)==null?void 0:l.code)||""),c=Rn(),a=async()=>{const i=S(s);if(!i)return;const u=await c.compileFile({filename:"main.tsx",source:i});console.log(u),r.value=`${u.compiled}
${kn}`};return Yt(a),B(t,i=>{i&&s.value!==i.code&&(console.log("change"),s.value=i.code,a())}),()=>h("div",null,h(Sn,{isDark:e}),h(V.Style,{styleFn:()=>({position:"relative",display:"flex",flexFlow:"column",width:"100%",height:"100%",maxWidth:"100vw",maxHeight:"100vh",overflow:"hidden"})}),h("header",{style:"height: 30px; width: 100%;"},h(fn,{isDark:e})),h("div",{style:"flex: 1;"},h(V.Style,{styleFn:()=>({position:"relative",display:"flex",flexFlow:"row",width:"100%",height:"100%"})}),h(an,{style:"flex: 1;",value:s,onChange:i=>s.value=i,onSave:a,isDark:e}),h(bn,{style:"flex: 1;",importMap:n,code:o,devtools:!0,isDark:e})))};Xt("#app",xn);
