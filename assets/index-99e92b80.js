var yt=Object.defineProperty;var wt=(e,t,n)=>t in e?yt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var K=(e,t,n)=>(wt(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();function bt(e,t){return t.forEach(function(n){n&&typeof n!="string"&&!Array.isArray(n)&&Object.keys(n).forEach(function(r){if(r!=="default"&&!(r in e)){var o=Object.getOwnPropertyDescriptor(n,r);Object.defineProperty(e,r,o.get?o:{enumerable:!0,get:function(){return n[r]}})}})}),e}function Et(e,t){const n=Object.create(null),r=e.split(",");for(let o=0;o<r.length;o++)n[r[o]]=!0;return t?o=>!!n[o.toLowerCase()]:o=>!!n[o]}const St=()=>{},Ct=Object.assign,Ot=Object.prototype.hasOwnProperty,se=(e,t)=>Ot.call(e,t),U=Array.isArray,ne=e=>$e(e)==="[object Map]",ve=e=>typeof e=="symbol",ie=e=>e!==null&&typeof e=="object",Rt=Object.prototype.toString,$e=e=>Rt.call(e),kt=e=>$e(e).slice(8,-1),_e=e=>typeof e=="string"&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ge=(e,t)=>!Object.is(e,t);let xt;function Ke(e,t=xt){t&&t.active&&t.effects.push(e)}const ye=e=>{const t=new Set(e);return t.w=0,t.n=0,t},qe=e=>(e.w&z)>0,Ye=e=>(e.n&z)>0,ue=new WeakMap;let G=0,z=1;const de=30;let D;const F=Symbol(""),he=Symbol("");class Ge{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ke(this,r)}run(){if(!this.active)return this.fn();let t=D,n=B;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=D,D=this,B=!0,z=1<<++G,G<=de?(({deps:r})=>{if(r.length)for(let o=0;o<r.length;o++)r[o].w|=z})(this):Re(this),this.fn()}finally{G<=de&&(r=>{const{deps:o}=r;if(o.length){let s=0;for(let i=0;i<o.length;i++){const c=o[i];qe(c)&&!Ye(c)?c.delete(r):o[s++]=c,c.w&=~z,c.n&=~z}o.length=s}})(this),z=1<<--G,D=this.parent,B=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){D===this?this.deferStop=!0:this.active&&(Re(this),this.onStop&&this.onStop(),this.active=!1)}}function Re(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}function we(e,t){e.effect&&(e=e.effect.fn);const n=new Ge(e);t&&(Ct(n,t),t.scope&&Ke(n,t.scope)),t&&t.lazy||n.run();const r=n.run.bind(n);return r.effect=n,r}function Je(e){e.effect.stop()}let B=!0;const Xe=[];function ce(){Xe.push(B),B=!1}function ae(){const e=Xe.pop();B=e===void 0||e}function L(e,t,n){if(B&&D){let r=ue.get(e);r||ue.set(e,r=new Map);let o=r.get(n);o||r.set(n,o=ye()),Ze(o)}}function Ze(e,t){let n=!1;G<=de?Ye(e)||(e.n|=z,n=!qe(e)):n=!e.has(D),n&&(e.add(D),D.deps.push(e))}function P(e,t,n,r,o,s){const i=ue.get(e);if(!i)return;let c=[];if(t==="clear")c=[...i.values()];else if(n==="length"&&U(e)){const a=Number(r);i.forEach((l,u)=>{(u==="length"||u>=a)&&c.push(l)})}else switch(n!==void 0&&c.push(i.get(n)),t){case"add":U(e)?_e(n)&&c.push(i.get("length")):(c.push(i.get(F)),ne(e)&&c.push(i.get(he)));break;case"delete":U(e)||(c.push(i.get(F)),ne(e)&&c.push(i.get(he)));break;case"set":ne(e)&&c.push(i.get(F))}if(c.length===1)c[0]&&pe(c[0]);else{const a=[];for(const l of c)l&&a.push(...l);pe(ye(a))}}function pe(e,t){const n=U(e)?e:[...e];for(const r of n)r.computed&&ke(r);for(const r of n)r.computed||ke(r)}function ke(e,t){(e!==D||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Lt=Et("__proto__,__v_isRef,__isVue"),Qe=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ve)),Dt=et(),jt=et(!0),xe=At();function At(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=g(this);for(let s=0,i=this.length;s<i;s++)L(r,0,s+"");const o=r[t](...n);return o===-1||o===!1?r[t](...n.map(g)):o}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){ce();const r=g(this)[t].apply(this,n);return ae(),r}}),e}function Nt(e){const t=g(this);return L(t,0,e),t.hasOwnProperty(e)}function et(e=!1,t=!1){return function(n,r,o){if(r==="__v_isReactive")return!e;if(r==="__v_isReadonly")return e;if(r==="__v_isShallow")return t;if(r==="__v_raw"&&o===(e?t?$t:rt:t?Vt:nt).get(n))return n;const s=U(n);if(!e){if(s&&se(xe,r))return Reflect.get(xe,r,o);if(r==="hasOwnProperty")return Nt}const i=Reflect.get(n,r,o);return(ve(r)?Qe.has(r):Lt(r))?i:(e||L(n,0,r),t?i:k(i)?s&&_e(r)?i:i.value:ie(i)?e?Ee(i):ot(i):i)}}function Mt(e=!1){return function(t,n,r,o){let s=t[n];if(re(s)&&k(s)&&!k(r))return!1;if(!e&&(it(r)||re(r)||(s=g(s),r=g(r)),!U(t)&&k(s)&&!k(r)))return s.value=r,!0;const i=U(t)&&_e(n)?Number(n)<t.length:se(t,n),c=Reflect.set(t,n,r,o);return t===g(o)&&(i?ge(r,s)&&P(t,"set",n,r):P(t,"add",n,r)),c}}const It={get:Dt,set:Mt(),deleteProperty:function(e,t){const n=se(e,t),r=Reflect.deleteProperty(e,t);return r&&n&&P(e,"delete",t,void 0),r},has:function(e,t){const n=Reflect.has(e,t);return ve(t)&&Qe.has(t)||L(e,0,t),n},ownKeys:function(e){return L(e,0,U(e)?"length":F),Reflect.ownKeys(e)}},Tt={get:jt,set:(e,t)=>!0,deleteProperty:(e,t)=>!0},be=e=>e,le=e=>Reflect.getPrototypeOf(e);function X(e,t,n=!1,r=!1){const o=g(e=e.__v_raw),s=g(t);n||(t!==s&&L(o,0,t),L(o,0,s));const{has:i}=le(o),c=r?be:n?Se:J;return i.call(o,t)?c(e.get(t)):i.call(o,s)?c(e.get(s)):void(e!==o&&e.get(t))}function Z(e,t=!1){const n=this.__v_raw,r=g(n),o=g(e);return t||(e!==o&&L(r,0,e),L(r,0,o)),e===o?n.has(e):n.has(e)||n.has(o)}function Q(e,t=!1){return e=e.__v_raw,!t&&L(g(e),0,F),Reflect.get(e,"size",e)}function Le(e){e=g(e);const t=g(this);return le(t).has.call(t,e)||(t.add(e),P(t,"add",e,e)),this}function De(e,t){t=g(t);const n=g(this),{has:r,get:o}=le(n);let s=r.call(n,e);s||(e=g(e),s=r.call(n,e));const i=o.call(n,e);return n.set(e,t),s?ge(t,i)&&P(n,"set",e,t):P(n,"add",e,t),this}function je(e){const t=g(this),{has:n,get:r}=le(t);let o=n.call(t,e);o||(e=g(e),o=n.call(t,e)),r&&r.call(t,e);const s=t.delete(e);return o&&P(t,"delete",e,void 0),s}function Ae(){const e=g(this),t=e.size!==0,n=e.clear();return t&&P(e,"clear",void 0,void 0),n}function ee(e,t){return function(n,r){const o=this,s=o.__v_raw,i=g(s),c=t?be:e?Se:J;return!e&&L(i,0,F),s.forEach((a,l)=>n.call(r,c(a),c(l),o))}}function te(e,t,n){return function(...r){const o=this.__v_raw,s=g(o),i=ne(s),c=e==="entries"||e===Symbol.iterator&&i,a=e==="keys"&&i,l=o[e](...r),u=n?be:t?Se:J;return!t&&L(s,0,a?he:F),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:c?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function T(e){return function(...t){return e!=="delete"&&this}}function zt(){const e={get(o){return X(this,o)},get size(){return Q(this)},has:Z,add:Le,set:De,delete:je,clear:Ae,forEach:ee(!1,!1)},t={get(o){return X(this,o,!1,!0)},get size(){return Q(this)},has:Z,add:Le,set:De,delete:je,clear:Ae,forEach:ee(!1,!0)},n={get(o){return X(this,o,!0)},get size(){return Q(this,!0)},has(o){return Z.call(this,o,!0)},add:T("add"),set:T("set"),delete:T("delete"),clear:T("clear"),forEach:ee(!0,!1)},r={get(o){return X(this,o,!0,!0)},get size(){return Q(this,!0)},has(o){return Z.call(this,o,!0)},add:T("add"),set:T("set"),delete:T("delete"),clear:T("clear"),forEach:ee(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{e[o]=te(o,!1,!1),n[o]=te(o,!0,!1),t[o]=te(o,!1,!0),r[o]=te(o,!0,!0)}),[e,n,t,r]}const[Ut,Bt,Pt,Ht]=zt();function tt(e,t){const n=t?e?Ht:Pt:e?Bt:Ut;return(r,o,s)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?r:Reflect.get(se(n,o)&&o in r?n:r,o,s)}const Wt={get:tt(!1,!1)},Ft={get:tt(!0,!1)},nt=new WeakMap,Vt=new WeakMap,rt=new WeakMap,$t=new WeakMap;function ot(e){return re(e)?e:st(e,!1,It,Wt,nt)}function Ee(e){return st(e,!0,Tt,Ft,rt)}function st(e,t,n,r,o){if(!ie(e)||e.__v_raw&&(!t||!e.__v_isReactive))return e;const s=o.get(e);if(s)return s;const i=(c=e).__v_skip||!Object.isExtensible(c)?0:function(l){switch(l){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}(kt(c));var c;if(i===0)return e;const a=new Proxy(e,i===2?r:n);return o.set(e,a),a}function re(e){return!(!e||!e.__v_isReadonly)}function it(e){return!(!e||!e.__v_isShallow)}function g(e){const t=e&&e.__v_raw;return t?g(t):e}const J=e=>ie(e)?ot(e):e,Se=e=>ie(e)?Ee(e):e;function ct(e){B&&D&&Ze((e=g(e)).dep||(e.dep=ye()))}function at(e,t){const n=(e=g(e)).dep;n&&pe(n)}function k(e){return!(!e||e.__v_isRef!==!0)}function O(e){return lt(e,!1)}function oe(e){return lt(e,!0)}function lt(e,t){return k(e)?e:new Kt(e,t)}class Kt{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:g(t),this._value=n?t:J(t)}get value(){return ct(this),this._value}set value(t){const n=this.__v_isShallow||it(t)||re(t);t=n?t:g(t),ge(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:J(t),at(this))}}function y(e){return k(e)?e.value:e}var ut;class qt{constructor(t,n,r,o){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[ut]=!1,this._dirty=!0,this.effect=new Ge(t,()=>{this._dirty||(this._dirty=!0,at(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=r}get value(){const t=g(this);return ct(t),!t._dirty&&t._cacheable||(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}ut="__v_isReadonly";function fe(){return fe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fe.apply(this,arguments)}var Ne,Me,Yt=(Ne=function(e){var t=Object.prototype.hasOwnProperty,n="~";function r(){}function o(a,l,u){this.fn=a,this.context=l,this.once=u||!1}function s(a,l,u,h,d){if(typeof u!="function")throw new TypeError("The listener must be a function");var m=new o(u,h||a,d),_=n?n+l:l;return a._events[_]?a._events[_].fn?a._events[_]=[a._events[_],m]:a._events[_].push(m):(a._events[_]=m,a._eventsCount++),a}function i(a,l){--a._eventsCount==0?a._events=new r:delete a._events[l]}function c(){this._events=new r,this._eventsCount=0}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(n=!1)),c.prototype.eventNames=function(){var a,l,u=[];if(this._eventsCount===0)return u;for(l in a=this._events)t.call(a,l)&&u.push(n?l.slice(1):l);return Object.getOwnPropertySymbols?u.concat(Object.getOwnPropertySymbols(a)):u},c.prototype.listeners=function(a){var l=this._events[n?n+a:a];if(!l)return[];if(l.fn)return[l.fn];for(var u=0,h=l.length,d=new Array(h);u<h;u++)d[u]=l[u].fn;return d},c.prototype.listenerCount=function(a){var l=this._events[n?n+a:a];return l?l.fn?1:l.length:0},c.prototype.emit=function(a,l,u,h,d,m){var _=n?n+a:a;if(!this._events[_])return!1;var w,v,f=this._events[_],E=arguments.length;if(f.fn){switch(f.once&&this.removeListener(a,f.fn,void 0,!0),E){case 1:return f.fn.call(f.context),!0;case 2:return f.fn.call(f.context,l),!0;case 3:return f.fn.call(f.context,l,u),!0;case 4:return f.fn.call(f.context,l,u,h),!0;case 5:return f.fn.call(f.context,l,u,h,d),!0;case 6:return f.fn.call(f.context,l,u,h,d,m),!0}for(v=1,w=new Array(E-1);v<E;v++)w[v-1]=arguments[v];f.fn.apply(f.context,w)}else{var R,A=f.length;for(v=0;v<A;v++)switch(f[v].once&&this.removeListener(a,f[v].fn,void 0,!0),E){case 1:f[v].fn.call(f[v].context);break;case 2:f[v].fn.call(f[v].context,l);break;case 3:f[v].fn.call(f[v].context,l,u);break;case 4:f[v].fn.call(f[v].context,l,u,h);break;default:if(!w)for(R=1,w=new Array(E-1);R<E;R++)w[R-1]=arguments[R];f[v].fn.apply(f[v].context,w)}}return!0},c.prototype.on=function(a,l,u){return s(this,a,l,u,!1)},c.prototype.once=function(a,l,u){return s(this,a,l,u,!0)},c.prototype.removeListener=function(a,l,u,h){var d=n?n+a:a;if(!this._events[d])return this;if(!l)return i(this,d),this;var m=this._events[d];if(m.fn)m.fn!==l||h&&!m.once||u&&m.context!==u||i(this,d);else{for(var _=0,w=[],v=m.length;_<v;_++)(m[_].fn!==l||h&&!m[_].once||u&&m[_].context!==u)&&w.push(m[_]);w.length?this._events[d]=w.length===1?w[0]:w:i(this,d)}return this},c.prototype.removeAllListeners=function(a){var l;return a?this._events[l=n?n+a:a]&&i(this,l):(this._events=new r,this._eventsCount=0),this},c.prototype.off=c.prototype.removeListener,c.prototype.addListener=c.prototype.on,c.prefixed=n,c.EventEmitter=c,e.exports=c},Ne(Me={exports:{}}),Me.exports);const x={CS_HOOK_CB:Symbol("HOOK_CB"),IS_ANCHOR:Symbol("IS_ANCHOR"),NONE:Symbol("NONE"),SELF_CS:Symbol("SELF_CS"),CACHE_NODES:Symbol("CACHE_NODES"),IS_COMPONENT:Symbol("IS_COMPONENT")};class b extends Yt{static peek(){return b.source_stack.peek()||b.global_source}constructor(t,n){super(),this.host=void 0,this.__context={},this.__parent_source=b.source_stack.peek()||b.global_source,this.__container_source=this,this.states={mounted:!1,unmounted:!1},this.host=t,this.__parent_source&&(this.setupContainerSource(),this.on("throw",r=>{var o;return(o=this.__parent_source)==null?void 0:o.emit("throw",r)}),this.once("mount",()=>this.states.mounted=!0),this.once("unmount",()=>this.states.unmounted=!0),n?((this.__container_source===this?this.__container_source.__parent_source.__container_source:this.__container_source)||this.__parent_source).once("unmount",()=>{this.emit("unmount"),this.dispose()}):(this.__parent_source.once("unmount",()=>{this.emit("unmount"),this.dispose()}),this.__parent_source.once("update_after",()=>{var r;(r=this.__parent_source)==null||r.once("update_after",()=>{this.emit("unmount")})})))}onMount(t){return this.states.mounted?t():this.once("mount",t),this}onUnmount(t){return this.states.unmounted?t():this.once("unmount",t),this}setupContainerSource(){for(;this.__container_source&&this.__container_source!==b.global_source;){var t;if((t=this.__container_source.host)!=null&&t[x.IS_COMPONENT])break;this.__container_source=this.__container_source.__parent_source}}dispose(){this.removeAllListeners(),this.__context={}}effect(t,n){const r=we(t,n);return this.once("unmount",()=>Je(r)),r}}b.source_stack=new class{constructor(){this.items=void 0,this.items=[]}toArray(){return[...this.items]}push(e){this.items.push(e)}pop(){return this.items.pop()}peek(){return this.items[this.items.length-1]}size(){return this.items.length}isEmpty(){return this.items.length===0}},b.global_source=new b;const W=(e,t,n)=>{const r=o=>{const s=o.relatedNode;s&&s===e.parentNode&&t(s,e)};return e.addEventListener(n,r),()=>e.removeEventListener(n,r)};class M{constructor(){this.source=void 0,this.viewAnchor=(()=>{const t=document.createTextNode("");return t[x.IS_ANCHOR]=!0,t})(),this.currentView=this.viewAnchor,this.renderEffectRunner=void 0,this.dispose_onDomInserted=void 0,this._initialized=!1}_initialize(){this._initialized||(this._initialized=!0,this.initialize())}initialize(){this.source||(this.source=new b(this)),this.source.once("unmount",()=>this.dispose())}ensureEffectRunner(){return this._initialize(),this.renderEffectRunner||(this.renderEffectRunner=we(this.update.bind(this),{lazy:!1}),this.dispose_onDomInserted=W(this.currentView,(t,n)=>{var r,o,s;(r=this.dispose_onDomInserted)==null||r.call(this),this.source.emit("mount"),this.viewAnchor!==n&&t.insertBefore(this.viewAnchor,n),n!==this.currentView&&(t.insertBefore(this.currentView,n),(s=n)&&s[x.IS_ANCHOR]||(o=n.parentElement)==null||o.removeChild(n))},"DOMNodeInserted")),this.renderEffectRunner}render(){return null}_update(){const t=this.currentView,n=this.render()||this.viewAnchor,r=t==null?void 0:t.parentElement;r&&r.replaceChild(n,t),this.currentView=n}update(){var t;if(this.source.states.unmounted||this.source.__parent_source.states.unmounted||(t=this.source.__container_source)!=null&&t.states.unmounted)this.dispose();else{this.source.emit("update_before");try{b.source_stack.push(this.source),this.source.emit("update"),this._update()}catch(n){requestAnimationFrame(()=>{this.source.emit("throw",n),console.error(n)})}finally{b.source_stack.pop(),this.source.emit("update_after")}}}dispose(){var t,n,r,o;(t=this.renderEffectRunner)==null||t.effect.stop(),(n=this.currentView.parentElement)==null||n.removeChild(this.currentView),(r=this.viewAnchor.parentElement)==null||r.removeChild(this.viewAnchor),(o=this.dispose_onDomInserted)==null||o.call(this)}static warpView(t){return t instanceof Node||t===null?t:document.createTextNode(`${t}`)}static warp(t){if(typeof t!="function"&&!k(t))return M.warpView(t);const n=new M;let r;if(typeof t=="function")r=t;else{if(!k(t))throw new Error("Unknown view type.");r=()=>y(t)}return n.render=()=>M.warpView(r()),n.ensureEffectRunner(),n.currentView}}let dt;dt=x.IS_COMPONENT;class ht extends M{get[dt](){return!0}constructor(t,n,r){super(),this._define=void 0,this.props=void 0,this.children=void 0,this.state=void 0,this._define=t,this.props=n,this.children=r}initialize(){this.initializeComponent()}initializeComponent(){this.source=new b(this,"__node_cached"in this.props),this.installSource(),this.initializeSetup()}initializeSetup(){const{props:t,children:n}=this;ce(),b.source_stack.push(this.source),this.source.emit("setup_before"),this.state=this._define.setup(t,n),this.source.emit("setup_after"),b.source_stack.pop(),ae()}render(){const t=this._define.render(this.props,this.state,this.children);return M.warp(t)}installSource(){var t,n;(t=(n=this._define)[x.CS_HOOK_CB])==null||t.call(n,this.source)}}class Gt extends ht{constructor(t,n,r){const o={setup:(s,i)=>{const c={};return o.render=t(s,c,i),c},render:()=>{}};o[x.CS_HOOK_CB]=t[x.CS_HOOK_CB],super(o,n,r),this._function_define=void 0,this._function_define=t}}class Jt{constructor(t,n,r){this.tagNameOrDome=void 0,this.props=void 0,this.children=void 0,this.node=void 0,this.source=new b(this),this.tagNameOrDome=t,this.props=n,this.children=r,this.source.once("unmount",()=>this.dispose()),this.buildNode()}dispose(){var t,n;(t=this.node)==null||(n=t.parentElement)==null||n.removeChild(this.node)}buildNode(){if(this.node)return this.node;this.node=this.tagNameOrDome instanceof Element?this.tagNameOrDome:document.createElement(this.tagNameOrDome),ce(),this.hydrateChildren(),ae();for(const[t,n]of Object.entries(this.props))this.hydrateAttribute(t,n);return this.node}hydrateAttribute(t,n){if(!t.startsWith("__")){switch(t){case"ref":return void(typeof n=="function"?n(this.node):k(n)&&(n.value=this.node));case"effect":return void(typeof n=="function"&&this.source.effect(()=>n(this.node),{lazy:!1}))}if(t.startsWith("on")&&typeof n=="function"){const r=t.slice(2).toLowerCase(),o=this.node["__cb_"+t];return o&&this.node.removeEventListener(r,o),this.node["__cb_"+t]=n,void this.node.addEventListener(r,n)}this.source.effect(()=>{const r=y(n);typeof r=="boolean"?r?this.node.setAttribute(t,""):this.node.removeAttribute(t):this.node.setAttribute(t,r)},{lazy:!1})}}hydrateChildren(){const{children:t}=this;for(const n of t){if(n==null)continue;const r=M.warp(n);r&&this.node.appendChild(r)}}}function q(e){return e?e(b.peek()):b.peek()}const Xt=(e,t,n=!1)=>q(r=>r[n?"once":"on"](e,t)),Zt=e=>q(t=>t.onMount(e)),C=e=>q(t=>t.onUnmount(e)),Qt=e=>Xt("throw",e),Ie=(e,t)=>{var n,r;if(!e)return;const o=b.peek(),{__container_source:s}=o;s&&((n=s.__context)[r=x.CACHE_NODES]||(n[r]={}),s.__context[x.CACHE_NODES][e]=t)},pt=(e,t={},n=[])=>{const{key:r}=t;delete t.key,r&&(t.__node_cached=!0);const o=(s=>{var i,c;if(!s)return;const a=b.peek(),{__container_source:l}=a;return l?((i=l.__context)[c=x.CACHE_NODES]||(i[c]={}),l.__context[x.CACHE_NODES][s]):void 0})(r);if(o)return o;if(typeof e=="function"){const s=new Gt(e,t,n);return Ie(r,s),s}if(typeof e=="object"&&typeof e.render=="function"&&typeof e.setup=="function"){const s=new ht(e,t,n);return Ie(r,s),s}throw new Error(`Valid define type [${typeof e}] is not supported for reactiveHydrate.`)},en=(e,t,...n)=>{var r;if(t||(t={}),n||(n=[]),n=((r=n)==null?void 0:r.flat())||n,typeof e=="string"||e instanceof Element)return new Jt(e,t,n).node;const o=pt(e,t,n);return o.ensureEffectRunner(),o.currentView},p=en,tn=(e,t,n)=>{const r=e instanceof Element?e:document.querySelector(e);if(!r)throw new Error(`Could not find container: ${e}`);const o=pt(t,n);return o.ensureEffectRunner(),r.appendChild(o.currentView),o},H=(e,t)=>{let n=null;const r=we(()=>{n==null||n(),e(s=>n=s)},fe({lazy:!1},t)),o=()=>{n==null||n(),Je(r),n=null};return C(o),[r,o]},j=(e,t,n)=>{let r;return H(()=>{const o=typeof e=="function"?e(r):y(e);Oe(()=>t(o,r)),r=o},n)},Ce=(e,t)=>{const n=O();return H(()=>{const r=S(n),o=e(r);var s,i;s=r,i=o,Object.is(s,i)||s===i||(n.value=o)},t),n},Oe=(e,...t)=>{ce();const n=e(...t);return ae(),n},S=e=>Oe(()=>y(e));function nn(e){const t=k(e)?e:O(e);return[()=>y(t),n=>{if(typeof n=="function"){const r=S(t);t.value=n(r)}else t.value=n},t]}const rn=(...e)=>e.map(t=>y(t)),ft=rn,mt=(e,t)=>(((n,r)=>{if(!r)return;const o=n[x.CS_HOOK_CB];n[x.CS_HOOK_CB]=s=>{o==null||o(s),r(s)}})(e,t),e),on=mt({setup({fallbackRender:e,onError:t,render:n}){const r=b.peek();let o=O(null);r.on("throw",i=>{i instanceof Error&&(t==null||t(i),o.value=i)});const s=O(1);return{catchError:o,rerenderRef:s,fallbackRender:e,childrenRender:n}},render(e,{fallbackRender:t,rerenderRef:n,catchError:r,childrenRender:o}){const s=()=>{n.value=Date.now(),r.value=null};return r.value?Oe(()=>t(r.value,s)):o()}}),Te=mt({setup(e,[t,...n]){const r={anchor:document.createTextNode(""),children:[],parentNode:null},o=q(),s=(i=typeof t=="function"?t:()=>[t,...n],()=>{return(h=i(),Array.isArray(h)?h:[h]).flat(1).map(d=>M.warp(d)).filter(Boolean);var h});var i;const[c,a]=H(()=>{b.source_stack.push(o),(()=>{const h=r.children,d=s(),{parentNode:m,anchor:_}=r;if(!m)return;const w=Math.max(d.length,h.length);for(let v=0;v<w;v++){const f=d[v],E=h[v];if(!f&&E)E.remove();else if(!E&&f)m.insertBefore(f,_);else if(E&&f){if(E===f)continue;m.replaceChild(f,E)}}r.children=d})(),b.source_stack.pop()}),l=W(r.anchor,h=>{r.parentNode=h,c()},"DOMNodeInserted"),u=W(r.anchor,h=>{r.children.forEach(d=>d==null?void 0:d.remove()),r.parentNode=null},"DOMNodeRemoved");return C(()=>{l(),u(),a(),r.anchor.remove(),r.children.forEach(h=>h==null?void 0:h.remove())}),q(h=>{var d;(d=h.__parent_source)==null||d.once("update_before",()=>{var m;r.children.forEach(_=>_==null?void 0:_.remove()),(m=h.__parent_source)==null||m.once("update_after",()=>{r.anchor.remove()})})}),r},render:(e,t)=>t.anchor});var me=function e(t,n){if(t===n)return!0;if(t&&n&&typeof t=="object"&&typeof n=="object"){if(t.constructor!==n.constructor)return!1;var r,o,s;if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(o=r;o--!=0;)if(!e(t[o],n[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((r=(s=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(o=r;o--!=0;)if(!Object.prototype.hasOwnProperty.call(n,s[o]))return!1;for(o=r;o--!=0;){var i=s[o];if(!e(t[i],n[i]))return!1}return!0}return t!=t&&n!=n},ze=bt({__proto__:null,default:me},[me]);const sn=["container"],Ue=e=>{if(!e)throw new Error("styleOrFn is required.");return typeof e=="function"?e:()=>e},Be=(e,t,n)=>{const{applySheet:r,removeSheet:o,parseStyle:s}=(c=>{const a=new CSSStyleSheet;let l=!1;return{sheet:a,parseStyle:u=>{const h=function(d,m,_=!1){const w=_?`
`:" ",v=[{node:m,css:d}];let f="";for(;v.length>0;){const{node:R,css:A}=v.pop();f+=`${R} {${w}`;for(const N in A){const I=A[N];if(typeof I=="object"){const Y=N.startsWith("&")?R+N.slice(1).replace(/&/g,R):R+" "+N;v.push({node:Y,css:I})}else{if(typeof I=="string"&&!I.trim()||I==null)continue;f+=`${E=N,E.replace(/[A-Z]/g,Y=>`-${Y.toLowerCase()}`)}: ${A[N]};${w}`}}f+=`}
`}var E;return f.trim()}(c(),u);a.replaceSync(h)},applySheet:()=>{l||(l=!0,document.adoptedStyleSheets=[...document.adoptedStyleSheets,a])},removeSheet:()=>{l&&(l=!1,document.adoptedStyleSheets=[...document.adoptedStyleSheets].filter(u=>u!==a))}}})(e),i=document.createTextNode("");if(H(()=>s(t)),C(W(i,r,"DOMNodeInserted")),C(W(i,o,"DOMNodeRemoved")),C(o),n){const c=a=>{var l;return a==null||(l=a.classList)==null?void 0:l.remove(n)};C(W(i,a=>{var l;return a==null||(l=a.classList)==null?void 0:l.add(n)},"DOMNodeInserted")),C(W(i,c,"DOMNodeRemoved"))}return{anchor:i}},Pe=(e,...t)=>e.reduce((n,r,o)=>{var s;return n+=r,o<t.length&&(n+=y(typeof(s=t[o])=="function"?s():s)),n},"");var $={__proto__:null,ErrorBoundary:on,Fragment:Te,ArrayRender:({getItems:e,render:t,needUpdate:n=(r,o)=>!((ze==null?void 0:me)||ze)(r,o)})=>{const r=oe([]);return j(e,o=>{const s=S(r);for(let c=0;c<Math.max(s.length,o.length);c++){const a=s[c],l=o[c];if(a!==void 0&&l!==void 0){if(!a.node||n(l,a.data)){const u=t(l,c,o,a.node);a.node=u,a.data=l}}else if(a===void 0){const u=t(l,c,o);s.push({data:l,node:u})}else l===void 0&&(a.del=!0)}const i=s.filter(c=>c.del!==!0);r.value=i},{lazy:!1}),()=>p(Te,{},()=>r.value.filter(o=>!o.del).map(o=>o.node))},Portal:(e,t,n)=>{let{container:r}=e,o=function(c,a){if(c==null)return{};var l,u,h={},d=Object.keys(c);for(u=0;u<d.length;u++)a.indexOf(l=d[u])>=0||(h[l]=c[l]);return h}(e,sn);const s=document.createTextNode(""),i=r||document.createElement("div");return document.body.appendChild(i),p(i,o,...n),C(()=>{var c;(c=i.parentElement)==null||c.removeChild(i)}),()=>s},Style:(e,t)=>{const n=Ue(e.styleFn||e.style||t),r=`__s_${Math.floor(Math.random()*Number.MAX_SAFE_INTEGER)}`,{anchor:o}=Be(n,`.${r}`,r);return()=>o},GlobalStyle:(e,t)=>{const n=Ue(e.styleFn||e.style||t),{anchor:r}=Be(n,":root");return()=>r},Suspense:({component:e,render:t,fallback:n,error:r})=>{const o=O("fulfilled");Qt(async i=>{var c;!(c=i)||typeof c!="object"&&typeof c!="function"||typeof c.then!="function"||(o.value="pending",i.then(()=>o.value="fulfilled"),i.catch(()=>o.value="rejected"))});const s=e?p(e):t?p(()=>()=>M.warpView(t())):null;return()=>{switch(o.value){case"pending":return n();case"fulfilled":return s;case"rejected":return(r||n)()}}},text:(e,...t)=>{const n=[];for(let r=0;r<e.length;r++){n.push(document.createTextNode(e[r]));const o=t[r],s=document.createTextNode("");typeof o=="function"?H(()=>s.textContent=o()):k(o)&&H(()=>s.textContent=String(o.value)),n.push(s)}return n},raw:Pe,rawRef:(e,...t)=>{const n=function(r,o,s=!1){let i,c;const a=typeof r=="function";return a?(i=r,c=St):(i=r.get,c=r.set),new qt(i,c,a||!c,s)}(()=>Pe(e,...t));return C(()=>n.effect.stop()),n},lazy:e=>{let t=null,n=null;return(r,...o)=>{const s=q(),i=O(t);if(!t){const c=(n||(n=e().then(a=>t=a))).then(a=>{S(i)||(i.value=a)});s.emit("throw",c)}return()=>i.value?p(i.value.default,r,...o):null}}};const cn=(e,t)=>{const n=O("");return H(()=>{const r=S(n);r&&URL.revokeObjectURL(r),n.value=URL.createObjectURL(new Blob([y(e)],{type:"text/plain",...t}))}),C(()=>URL.revokeObjectURL(n.value)),n},an="modulepreload",ln=function(e,t){return new URL(e,t).href},He={},un=function(t,n,r){if(!n||n.length===0)return t();const o=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=ln(s,r),s in He)return;He[s]=!0;const i=s.endsWith(".css"),c=i?'[rel="stylesheet"]':"";if(!!r)for(let u=o.length-1;u>=0;u--){const h=o[u];if(h.href===s&&(!i||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${c}`))return;const l=document.createElement("link");if(l.rel=i?"stylesheet":an,i||(l.as="script",l.crossOrigin=""),l.href=s,document.head.appendChild(l),i)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t())},dn=()=>un(()=>import("https://unpkg.com/@monaco-editor/loader@1.3.3/lib/umd/monaco-loader.js"),[],import.meta.url).then(()=>window.monaco_loader).then(e=>e.init()),hn=({value:e,onChange:t,isDark:n,onSave:r,...o})=>{let s,i,c;return H(()=>{const a=y(n);c!=null&&c.editor&&(a?c.editor.setTheme("vs-dark"):c.editor.setTheme("vs"))}),C(()=>{s==null||s.dispose()}),k(e)&&j(e,a=>{(i==null?void 0:i.getValue())!==a&&(i==null||i.setValue(a))}),()=>p("div",{...o,ref:async a=>{c=await dn(),i=c.editor.createModel(S(e),"typescript",c.Uri.file("main.ts")),i.onDidChangeContent(()=>t(i.getValue())),c.languages.typescript.typescriptDefaults.setCompilerOptions({jsx:"react"}),c.languages.typescript.typescriptDefaults.setDiagnosticsOptions({noSemanticValidation:!0,noSyntaxValidation:!0}),s=c.editor.create(a,{automaticLayout:!0,wordWrap:!0,theme:S(n)?"vs-dark":"vs"}),s.setModel(i),r&&s.addCommand(c.KeyMod.CtrlCmd|c.KeyCode.KeyS,()=>{r(i.getValue())})}})};class pn{constructor(){K(this,"idx",0);K(this,"demos",[]);K(this,"currentDemo",null)}registerDemo(t,n,r){const o={id:this.idx++,name:t,version:n,code:r};this.demos.push(o),this.currentDemo||(this.currentDemo=o)}selectDemo(t){const n=this.demos.find(r=>r.id===Number(t));if(!n)throw new Error(`Cannot find demo with name ${name}`);return this.currentDemo=n,n}}const fn=`import { rh, ref, mount, unref, setupWatch } from "@rhjs/rh";

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
`,mn=`import { rh, ref, mount, unref } from "@rhjs/rh";

const App = () => {
  const nowDate = ref(new Date());
  setInterval(() => nowDate.value = new Date(), 1000);
  return () => (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {() => unref(nowDate).toLocaleTimeString()}.</h2>
    </div>
  );
};

mount("#app", App);
`,vn=`import { Button, ensureFluentUILoaded } from "@rhjs/fluent-web-components";
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
`,V=new pn;V.registerDemo("HelloWorld","0.1.1-dev.13",mn);V.registerDemo("Counter","0.1.1-dev.13",fn);V.registerDemo("Counter","0.0.34",vn);const We=O(V.currentDemo),vt=()=>({mgr:V,currentDemo:We,selectDemo(e){We.value=V.selectDemo(e)},demos:V.demos}),_n=()=>{const{selectDemo:e,currentDemo:t,demos:n}=vt();return()=>p("div",null,p("select",{onChange:r=>e(r.target.value)},n.map(r=>p("option",{value:r.id},r.name," @",r.version))))},_t=({styleFn:e,isDark:t,...n},r,o)=>()=>p("div",{...n},p($.Style,{styleFn:()=>({display:"inline-flex",alignItems:"center",justifyContent:"center",paddingLeft:"12px",paddingRight:"12px",cursor:"pointer",userSelect:"none",marginLeft:"4px","&:hover":{backgroundColor:y(t)?"rgba(64,64,64,1)":"rgba(64,64,64,0.1)"},"&:active":{outline:"solid 1px",outlineColor:y(t)?"#fff":"rgba(64,64,64,1)"},...e==null?void 0:e()})}),o),gn=({isDark:e})=>()=>p(_t,{onClick:()=>{k(e)&&(e.value=!S(e))},isDark:e},p("span",null,()=>y(e)?"🌘":"🌖")),Fe=({isDark:e,href:t,target:n="_blank"},r,o)=>()=>p(_t,{isDark:e,onClick:()=>{window.open(t,n)}},p("a",{href:t,target:n,style:"text-decoration: none; color: inherit;"},o)),yn=({isDark:e})=>()=>p("div",null,p($.Style,{styleFn:()=>({paddingLeft:"12px",paddingRight:"12px",height:"100%",width:"calc(100% - 24px)",display:"grid",gridTemplateColumns:"minmax(0, 1fr) 12px minmax(0, 1fr)"})}),p("div",{style:"display: inline-flex; align-items: center;"},p("span",{style:"user-select: none;word-break: keep-all;white-space: nowrap;"},"🧩 ",p("b",null,"R"),p("small",null,"eactive"),p("b",null,"H"),p("small",null,"ydrate"),p("b",null,"JS")," PLAYGROUND"),p(gn,{isDark:e}),p(_n,null)),p("div",null),p("div",{style:"display: inline-flex; align-items: center; justify-content: right;"},p(Fe,{isDark:e,href:"https://zhzluke96.github.io/rhjs-demos/#demo",target:"_self"},"demos"),p(Fe,{isDark:e,href:"https://github.com/zhzLuke96/rh.js"},"github"))),{Style:wn}=$,bn=()=>document.querySelectorAll("iframe").forEach(e=>e.style.pointerEvents="none"),En=()=>document.querySelectorAll("iframe").forEach(e=>e.style.pointerEvents="auto"),Sn=({isHorizontal:e,onResize:t,ref:n})=>{const[r,o,s]=nn(!1),i=()=>o(!0),c=()=>o(!1),a=h=>{t(h.clientX,h.clientY)},l=h=>{const d=h.touches[0];t(d.clientX,d.clientY)},u=O(null);return j(s,h=>{h?(bn(),window.addEventListener("mousemove",a),window.addEventListener("mouseup",c),window.addEventListener("touchmove",l),window.addEventListener("touchend",c)):(En(),window.removeEventListener("mousemove",a),window.removeEventListener("mouseup",c),window.removeEventListener("touchmove",l),window.removeEventListener("touchend",c))}),j(u,h=>{h&&(h.addEventListener("mousedown",i,{passive:!0}),h.addEventListener("touchstart",i,{passive:!0}))}),C(()=>{var h,d;(h=y(u))==null||h.removeEventListener("mousedown",i),(d=y(u))==null||d.removeEventListener("touchstart",i)}),()=>p("div",{ref:h=>{u.value=h,n&&(n.value=h)}},p(wn,{styleFn:()=>({backgroundColor:y(s)?"rgba(255,255,255,0.3)":"",width:e?"100%":"12px",height:e?"12px":"100%",zIndex:y(s)?"10":"auto",cursor:e?"row-resize":"col-resize",userSelect:"none",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"12px","&:hover":{backgroundColor:"rgba(255,255,255,0.3)"}})}),"⚪⚪⚪")},Cn=()=>{const e=`
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
`.trim(),t=URL.createObjectURL(new Blob([e],{type:"text/html"}));return C(()=>URL.revokeObjectURL(t)),`${t}#?embedded=${encodeURIComponent(location.origin)}`},On=(e,t,n="")=>`
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
`.trim();function Rn(e,t){const n=oe(t),r=o=>{n.value=e(S(n),o)};return[Ee(n),r]}const kn=(e,t,n,r)=>{const o={sendToIframe(c){var a,l;(l=(a=S(e))==null?void 0:a.contentWindow)==null||l.postMessage(c,"*")},sendToDevtools(c){var a,l;(l=(a=S(t))==null?void 0:a.contentWindow)==null||l.postMessage(c,"*")}},s=()=>{const{codeInjected:c,codeURL:a}=y(n);if(!c){if(!a){setTimeout(s,3);return}requestAnimationFrame(()=>{o.sendToIframe({event:"CODE_UPDATE",value:a}),r({type:"CODE_INJECTED"})})}},i=c=>{var u,h;const[a,l]=ft(e,t);!a||!l||((h=(u=c.data)==null?void 0:u.includes)!=null&&h.call(u,"Debugger.enable")&&(r({type:"Debugger.enable"}),s()),c.source===a.contentWindow?l.contentWindow.postMessage(c.data,"*"):c.source===l.contentWindow&&a.contentWindow.postMessage({event:"DEV",data:c.data},"*"))};return window.addEventListener("message",i),C(()=>window.removeEventListener("message",i)),o},xn=(e,t)=>{const{importMap:n,isDark:r}=e,o=Ce(()=>{const s=On(S(r),JSON.stringify({imports:y(n)}));return URL.createObjectURL(new Blob([s],{type:"text/html"}))});return j(o,(s,i)=>{i&&URL.revokeObjectURL(i),t({type:"HTML_CHANGED",iframeSrc:s||""})}),C(()=>URL.revokeObjectURL(S(o)||"")),{iframeSrc:o}},Ln=e=>{const{isDark:t,code:n}=e,r=oe(null),o=oe(null),s=d=>{var m;return(m=d.contentDocument)==null?void 0:m.documentElement.classList.toggle("dark",S(t))},i=d=>{const m=S(r);m&&(m.src=d)};j(()=>y(t),d=>{const m=y(r);m&&s(m)});const[c,a]=Rn((d,m)=>{var _,w;switch(m.type){case"IFRAME_READY":s(m.iframe);let v=d.codeInjected;return{...d,codeInjected:v,iframeReady:!0};case"DEVTOOLS_IFRAME_READY":return{...d,devtoolsIframeReady:!0};case"DEV_LOADED":return{...d,devLoaded:!0};case"HTML_CHANGED":return i(m.iframeSrc),d.devtoolsIframeReady&&((w=(_=S(o))==null?void 0:_.contentWindow)==null||w.location.reload()),{iframeReady:!1,devtoolsIframeReady:!1,devLoaded:!1,codeInjected:!1,darkInjected:!1};case"CODE_UPDATE":return{...d,codeURL:m.codeURL};case"CODE_INJECTED":return{...d,codeInjected:!0}}return d},{iframeReady:!1,devtoolsIframeReady:!1,devLoaded:!1,codeInjected:!1,codeURL:S(n)});j(()=>y(n),d=>a({type:"CODE_UPDATE",codeURL:d}));const{sendToDevtools:l,sendToIframe:u}=kn(r,o,c,a),{iframeSrc:h}=xn(e,a);return j(r,d=>{d==null||d.addEventListener("load",()=>a({type:"IFRAME_READY",iframe:d}))}),j(o,d=>{d==null||d.addEventListener("load",()=>a({type:"DEVTOOLS_IFRAME_READY",devIframe:d}))}),{iframeSrc:h,iframeRef:r,devtoolsIframeRef:o,previewState:c,dispatch:a,sendToDevtools:l,sendToIframe:u}},Dn=e=>{const{importMap:t,code:n,devtools:r,isDark:o,...s}=e,i=O(null),{iframeSrc:c,iframeRef:a,devtoolsIframeRef:l,previewState:u,dispatch:h}=Ln(e),d=Cn(),m=Ce(()=>`width: 100%; height: 100%; ${y(r)?"display: block;":"display: none;"}`),_=O(.625),w=O(null),v=(f,E)=>{const[R,A]=ft(i,w);if(!R||!A)return;let N,I;const Y=R.getBoundingClientRect();N=E-Y.top-A.offsetHeight/2,I=R.offsetHeight-A.offsetHeight;const gt=N/I;_.value=gt};return()=>p("div",{...s,ref:i},p($.Style,{styleFn:()=>{const f=y(_);return{display:"grid",height:"100%",width:"100%",gridTemplateRows:y(r)?`minmax(0, ${f}fr) 12px minmax(0, ${1-f}fr)`:"minmax(0, 1fr)"}}}),p("iframe",{ref:a,src:c,style:"width: 100%;height: 100%;",frameBorder:0,sandbox:"allow-popups-to-escape-sandbox allow-scripts allow-popups allow-forms allow-pointer-lock allow-top-navigation allow-modals allow-same-origin"}),p("div",null,p(Sn,{ref:w,isHorizontal:!0,onResize:v})),p("iframe",{ref:l,style:m,src:d,frameBorder:"0"}))},jn=({isDark:e})=>()=>p($.GlobalStyle,{styleFn:()=>({fontFamily:"'Karla', system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",lineHeight:"1.5",fontWeight:"400",colorScheme:y(e)?"light dark":"dark",color:y(e)?"rgba(255, 255, 255, 0.87)":"#242424",backgroundColor:y(e)?"#333":"#fff",fontSynthesis:"none",textRendering:"optimizeLegibility","-webkitFontSmoothing":"antialiased","-moz-osxFontSmoothing":"grayscale","-webkitTextSizeAdjust":"100%",height:"100vh",width:"100vw",body:{margin:"0",minWidth:"100vw",minHeight:"100vh",width:"100%",height:"100%"},"#app":{width:"100%",height:"100%"}})});function An(){return new Worker(""+new URL("complier.worker-3d71da04.js",import.meta.url).href)}class Nn{constructor(){K(this,"registry",{})}registerWorker(t,n){this.registry[t]?console.warn(`Worker of type ${t} already registered.`):this.registry[t]=n}removeWorker(t){delete this.registry[t]}getWorker(t){const n=this.registry[t];if(n)return n;throw new Error(`No worker of type ${t} registered.`)}postMessage(t,n){this.getWorker(t).postMessage(n)}listenRecv(t,n){const r=this.getWorker(t);let o;const s=i=>{const{message_token:c}=i.data||{};if(c!==n)return;const a={...i.data};delete a.message_token,o(a),r.removeEventListener("message",s)};return r.addEventListener("message",s),{recv:new Promise((i,c)=>{o=i}),dispose:()=>r.removeEventListener("message",s)}}}class Mn{constructor(){K(this,"registry",new Nn);this.initialize()}async initialize(){this.registry.registerWorker("complier",new An)}worker_caller(t,n){const r=Math.random().toString(36).slice(2),o={...n,message_token:r};return this.registry.postMessage(t,o),this.registry.listenRecv(t,r)}compileFile(t){return this.worker_caller("complier",{event:"BABEL",payload:{file:t,compile_options:{}}})}compileFiles(t){return this.worker_caller("complier",{event:"ROLLUP",payload:{files:t,compile_options:{}}})}}const Ve=new Mn;b.global_source.on("throw",console.error);const In=()=>{let e=null;return C(()=>e==null?void 0:e.dispose()),{compileFile(t){return e==null||e.dispose(),e=Ve.compileFile(t),e.recv},compileFiles(t){return e==null||e.dispose(),e=Ve.compileFiles(t),e.recv}}},Tn='import("@rhjs/rh").then(({cs, ElementSource}) => window.dispose = () => (cs || ElementSource).global_source.emit("unmount"));',zn=()=>{var a;const e=O(!0),{currentDemo:t}=vt(),n=Ce(()=>{var l;return{"@rhjs/rh":`https://unpkg.com/@rhjs/rh@${((l=t.value)==null?void 0:l.version)||"latest"}/dist/main.module.mjs`,"@rhjs/fluent-web-components":"https://unpkg.com/@rhjs/fluent-web-components@latest/dist/main.module.mjs"}}),r=O(""),o=cn(r,{type:"text/javascript"}),s=O(((a=t.value)==null?void 0:a.code)||""),i=In(),c=async()=>{const l=S(s);if(!l)return;const u=await i.compileFile({filename:"main.tsx",source:l});console.log(u),r.value=`${u.compiled}
${Tn}`};return Zt(c),j(t,l=>{l&&s.value!==l.code&&(console.log("change"),s.value=l.code,c())}),()=>p("div",null,p(jn,{isDark:e}),p($.Style,{styleFn:()=>({position:"relative",display:"flex",flexFlow:"column",width:"100%",height:"100%",maxWidth:"100vw",maxHeight:"100vh",overflow:"hidden"})}),p("header",{style:"height: 30px; width: 100%;"},p(yn,{isDark:e})),p("div",{style:"flex: 1;"},p($.Style,{styleFn:()=>({position:"relative",display:"flex",flexFlow:"row",width:"100%",height:"100%"})}),p(hn,{style:"flex: 1;",value:s,onChange:l=>s.value=l,onSave:c,isDark:e}),p(Dn,{style:"flex: 1;",importMap:n,code:o,devtools:!0,isDark:e})))};tn("#app",zn);
