var kt=Object.defineProperty;var St=(e,t,n)=>t in e?kt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Y=(e,t,n)=>(St(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();function Et(e,t){return t.forEach(function(n){n&&typeof n!="string"&&!Array.isArray(n)&&Object.keys(n).forEach(function(r){if(r!=="default"&&!(r in e)){var o=Object.getOwnPropertyDescriptor(n,r);Object.defineProperty(e,r,o.get?o:{enumerable:!0,get:function(){return n[r]}})}})}),e}function Ct(e,t){const n=Object.create(null),r=e.split(",");for(let o=0;o<r.length;o++)n[r[o]]=!0;return t?o=>!!n[o.toLowerCase()]:o=>!!n[o]}const Rt=()=>{},Ot=Object.assign,xt=Object.prototype.hasOwnProperty,ie=(e,t)=>xt.call(e,t),z=Array.isArray,re=e=>Fe(e)==="[object Map]",ge=e=>typeof e=="symbol",ae=e=>e!==null&&typeof e=="object",Tt=Object.prototype.toString,Fe=e=>Tt.call(e),Dt=e=>Fe(e).slice(8,-1),ye=e=>typeof e=="string"&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,we=(e,t)=>!Object.is(e,t);let Lt;function Ve(e,t=Lt){t&&t.active&&t.effects.push(e)}const be=e=>{const t=new Set(e);return t.w=0,t.n=0,t},$e=e=>(e.w&U)>0,Ke=e=>(e.n&U)>0,he=new WeakMap;let J=0,U=1;const fe=30;let A;const $=Symbol(""),pe=Symbol("");class qe{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ve(this,r)}run(){if(!this.active)return this.fn();let t=A,n=W;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=A,A=this,W=!0,U=1<<++J,J<=fe?(({deps:r})=>{if(r.length)for(let o=0;o<r.length;o++)r[o].w|=U})(this):Oe(this),this.fn()}finally{J<=fe&&(r=>{const{deps:o}=r;if(o.length){let s=0;for(let i=0;i<o.length;i++){const a=o[i];$e(a)&&!Ke(a)?a.delete(r):o[s++]=a,a.w&=~U,a.n&=~U}o.length=s}})(this),U=1<<--J,A=this.parent,W=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){A===this?this.deferStop=!0:this.active&&(Oe(this),this.onStop&&this.onStop(),this.active=!1)}}function Oe(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}function ke(e,t){e.effect&&(e=e.effect.fn);const n=new qe(e);t&&(Ot(n,t),t.scope&&Ve(n,t.scope)),t&&t.lazy||n.run();const r=n.run.bind(n);return r.effect=n,r}function Ye(e){e.effect.stop()}let W=!0;const Ge=[];function ce(){Ge.push(W),W=!1}function le(){const e=Ge.pop();W=e===void 0||e}function D(e,t,n){if(W&&A){let r=he.get(e);r||he.set(e,r=new Map);let o=r.get(n);o||r.set(n,o=be()),Je(o)}}function Je(e,t){let n=!1;J<=fe?Ke(e)||(e.n|=U,n=!$e(e)):n=!e.has(A),n&&(e.add(A),A.deps.push(e))}function P(e,t,n,r,o,s){const i=he.get(e);if(!i)return;let a=[];if(t==="clear")a=[...i.values()];else if(n==="length"&&z(e)){const c=Number(r);i.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(i.get(n)),t){case"add":z(e)?ye(n)&&a.push(i.get("length")):(a.push(i.get($)),re(e)&&a.push(i.get(pe)));break;case"delete":z(e)||(a.push(i.get($)),re(e)&&a.push(i.get(pe)));break;case"set":re(e)&&a.push(i.get($))}if(a.length===1)a[0]&&me(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);me(be(c))}}function me(e,t){const n=z(e)?e:[...e];for(const r of n)r.computed&&xe(r);for(const r of n)r.computed||xe(r)}function xe(e,t){(e!==A||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const At=Ct("__proto__,__v_isRef,__isVue"),Xe=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ge)),jt=Ze(),Nt=Ze(!0),Te=Mt();function Mt(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=g(this);for(let s=0,i=this.length;s<i;s++)D(r,0,s+"");const o=r[t](...n);return o===-1||o===!1?r[t](...n.map(g)):o}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){ce();const r=g(this)[t].apply(this,n);return le(),r}}),e}function It(e){const t=g(this);return D(t,0,e),t.hasOwnProperty(e)}function Ze(e=!1,t=!1){return function(n,r,o){if(r==="__v_isReactive")return!e;if(r==="__v_isReadonly")return e;if(r==="__v_isShallow")return t;if(r==="__v_raw"&&o===(e?t?Yt:tt:t?qt:et).get(n))return n;const s=z(n);if(!e){if(s&&ie(Te,r))return Reflect.get(Te,r,o);if(r==="hasOwnProperty")return It}const i=Reflect.get(n,r,o);return(ge(r)?Xe.has(r):At(r))?i:(e||D(n,0,r),t?i:R(i)?s&&ye(r)?i:i.value:ae(i)?e?Ee(i):nt(i):i)}}function Ut(e=!1){return function(t,n,r,o){let s=t[n];if(oe(s)&&R(s)&&!R(r))return!1;if(!e&&(ot(r)||oe(r)||(s=g(s),r=g(r)),!z(t)&&R(s)&&!R(r)))return s.value=r,!0;const i=z(t)&&ye(n)?Number(n)<t.length:ie(t,n),a=Reflect.set(t,n,r,o);return t===g(o)&&(i?we(r,s)&&P(t,"set",n,r):P(t,"add",n,r)),a}}const zt={get:jt,set:Ut(),deleteProperty:function(e,t){const n=ie(e,t),r=Reflect.deleteProperty(e,t);return r&&n&&P(e,"delete",t,void 0),r},has:function(e,t){const n=Reflect.has(e,t);return ge(t)&&Xe.has(t)||D(e,0,t),n},ownKeys:function(e){return D(e,0,z(e)?"length":$),Reflect.ownKeys(e)}},Wt={get:Nt,set:(e,t)=>!0,deleteProperty:(e,t)=>!0},Se=e=>e,ue=e=>Reflect.getPrototypeOf(e);function Z(e,t,n=!1,r=!1){const o=g(e=e.__v_raw),s=g(t);n||(t!==s&&D(o,0,t),D(o,0,s));const{has:i}=ue(o),a=r?Se:n?Ce:X;return i.call(o,t)?a(e.get(t)):i.call(o,s)?a(e.get(s)):void(e!==o&&e.get(t))}function Q(e,t=!1){const n=this.__v_raw,r=g(n),o=g(e);return t||(e!==o&&D(r,0,e),D(r,0,o)),e===o?n.has(e):n.has(e)||n.has(o)}function ee(e,t=!1){return e=e.__v_raw,!t&&D(g(e),0,$),Reflect.get(e,"size",e)}function De(e){e=g(e);const t=g(this);return ue(t).has.call(t,e)||(t.add(e),P(t,"add",e,e)),this}function Le(e,t){t=g(t);const n=g(this),{has:r,get:o}=ue(n);let s=r.call(n,e);s||(e=g(e),s=r.call(n,e));const i=o.call(n,e);return n.set(e,t),s?we(t,i)&&P(n,"set",e,t):P(n,"add",e,t),this}function Ae(e){const t=g(this),{has:n,get:r}=ue(t);let o=n.call(t,e);o||(e=g(e),o=n.call(t,e)),r&&r.call(t,e);const s=t.delete(e);return o&&P(t,"delete",e,void 0),s}function je(){const e=g(this),t=e.size!==0,n=e.clear();return t&&P(e,"clear",void 0,void 0),n}function te(e,t){return function(n,r){const o=this,s=o.__v_raw,i=g(s),a=t?Se:e?Ce:X;return!e&&D(i,0,$),s.forEach((c,l)=>n.call(r,a(c),a(l),o))}}function ne(e,t,n){return function(...r){const o=this.__v_raw,s=g(o),i=re(s),a=e==="entries"||e===Symbol.iterator&&i,c=e==="keys"&&i,l=o[e](...r),u=n?Se:t?Ce:X;return!t&&D(s,0,c?pe:$),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function I(e){return function(...t){return e!=="delete"&&this}}function Ht(){const e={get(o){return Z(this,o)},get size(){return ee(this)},has:Q,add:De,set:Le,delete:Ae,clear:je,forEach:te(!1,!1)},t={get(o){return Z(this,o,!1,!0)},get size(){return ee(this)},has:Q,add:De,set:Le,delete:Ae,clear:je,forEach:te(!1,!0)},n={get(o){return Z(this,o,!0)},get size(){return ee(this,!0)},has(o){return Q.call(this,o,!0)},add:I("add"),set:I("set"),delete:I("delete"),clear:I("clear"),forEach:te(!0,!1)},r={get(o){return Z(this,o,!0,!0)},get size(){return ee(this,!0)},has(o){return Q.call(this,o,!0)},add:I("add"),set:I("set"),delete:I("delete"),clear:I("clear"),forEach:te(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{e[o]=ne(o,!1,!1),n[o]=ne(o,!0,!1),t[o]=ne(o,!1,!0),r[o]=ne(o,!0,!0)}),[e,n,t,r]}const[Pt,Bt,Ft,Vt]=Ht();function Qe(e,t){const n=t?e?Vt:Ft:e?Bt:Pt;return(r,o,s)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?r:Reflect.get(ie(n,o)&&o in r?n:r,o,s)}const $t={get:Qe(!1,!1)},Kt={get:Qe(!0,!1)},et=new WeakMap,qt=new WeakMap,tt=new WeakMap,Yt=new WeakMap;function nt(e){return oe(e)?e:rt(e,!1,zt,$t,et)}function Ee(e){return rt(e,!0,Wt,Kt,tt)}function rt(e,t,n,r,o){if(!ae(e)||e.__v_raw&&(!t||!e.__v_isReactive))return e;const s=o.get(e);if(s)return s;const i=(a=e).__v_skip||!Object.isExtensible(a)?0:function(l){switch(l){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}(Dt(a));var a;if(i===0)return e;const c=new Proxy(e,i===2?r:n);return o.set(e,c),c}function oe(e){return!(!e||!e.__v_isReadonly)}function ot(e){return!(!e||!e.__v_isShallow)}function g(e){const t=e&&e.__v_raw;return t?g(t):e}const X=e=>ae(e)?nt(e):e,Ce=e=>ae(e)?Ee(e):e;function st(e){W&&A&&Je((e=g(e)).dep||(e.dep=be()))}function it(e,t){const n=(e=g(e)).dep;n&&me(n)}function R(e){return!(!e||e.__v_isRef!==!0)}function C(e){return at(e,!1)}function se(e){return at(e,!0)}function at(e,t){return R(e)?e:new Gt(e,t)}class Gt{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:g(t),this._value=n?t:X(t)}get value(){return st(this),this._value}set value(t){const n=this.__v_isShallow||ot(t)||oe(t);t=n?t:g(t),we(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:X(t),it(this))}}function y(e){return R(e)?e.value:e}var ct;class Jt{constructor(t,n,r,o){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[ct]=!1,this._dirty=!0,this.effect=new qe(t,()=>{this._dirty||(this._dirty=!0,it(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=r}get value(){const t=g(this);return st(t),!t._dirty&&t._cacheable||(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}ct="__v_isReadonly";function ve(){return ve=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ve.apply(this,arguments)}var Ne,Me,Xt=(Ne=function(e){var t=Object.prototype.hasOwnProperty,n="~";function r(){}function o(c,l,u){this.fn=c,this.context=l,this.once=u||!1}function s(c,l,u,h,d){if(typeof u!="function")throw new TypeError("The listener must be a function");var p=new o(u,h||c,d),_=n?n+l:l;return c._events[_]?c._events[_].fn?c._events[_]=[c._events[_],p]:c._events[_].push(p):(c._events[_]=p,c._eventsCount++),c}function i(c,l){--c._eventsCount==0?c._events=new r:delete c._events[l]}function a(){this._events=new r,this._eventsCount=0}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(n=!1)),a.prototype.eventNames=function(){var c,l,u=[];if(this._eventsCount===0)return u;for(l in c=this._events)t.call(c,l)&&u.push(n?l.slice(1):l);return Object.getOwnPropertySymbols?u.concat(Object.getOwnPropertySymbols(c)):u},a.prototype.listeners=function(c){var l=this._events[n?n+c:c];if(!l)return[];if(l.fn)return[l.fn];for(var u=0,h=l.length,d=new Array(h);u<h;u++)d[u]=l[u].fn;return d},a.prototype.listenerCount=function(c){var l=this._events[n?n+c:c];return l?l.fn?1:l.length:0},a.prototype.emit=function(c,l,u,h,d,p){var _=n?n+c:c;if(!this._events[_])return!1;var b,v,m=this._events[_],k=arguments.length;if(m.fn){switch(m.once&&this.removeListener(c,m.fn,void 0,!0),k){case 1:return m.fn.call(m.context),!0;case 2:return m.fn.call(m.context,l),!0;case 3:return m.fn.call(m.context,l,u),!0;case 4:return m.fn.call(m.context,l,u,h),!0;case 5:return m.fn.call(m.context,l,u,h,d),!0;case 6:return m.fn.call(m.context,l,u,h,d,p),!0}for(v=1,b=new Array(k-1);v<k;v++)b[v-1]=arguments[v];m.fn.apply(m.context,b)}else{var T,L=m.length;for(v=0;v<L;v++)switch(m[v].once&&this.removeListener(c,m[v].fn,void 0,!0),k){case 1:m[v].fn.call(m[v].context);break;case 2:m[v].fn.call(m[v].context,l);break;case 3:m[v].fn.call(m[v].context,l,u);break;case 4:m[v].fn.call(m[v].context,l,u,h);break;default:if(!b)for(T=1,b=new Array(k-1);T<k;T++)b[T-1]=arguments[T];m[v].fn.apply(m[v].context,b)}}return!0},a.prototype.on=function(c,l,u){return s(this,c,l,u,!1)},a.prototype.once=function(c,l,u){return s(this,c,l,u,!0)},a.prototype.removeListener=function(c,l,u,h){var d=n?n+c:c;if(!this._events[d])return this;if(!l)return i(this,d),this;var p=this._events[d];if(p.fn)p.fn!==l||h&&!p.once||u&&p.context!==u||i(this,d);else{for(var _=0,b=[],v=p.length;_<v;_++)(p[_].fn!==l||h&&!p[_].once||u&&p[_].context!==u)&&b.push(p[_]);b.length?this._events[d]=b.length===1?b[0]:b:i(this,d)}return this},a.prototype.removeAllListeners=function(c){var l;return c?this._events[l=n?n+c:c]&&i(this,l):(this._events=new r,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=n,a.EventEmitter=a,e.exports=a},Ne(Me={exports:{}}),Me.exports);const x={CS_HOOK_CB:Symbol("HOOK_CB"),IS_ANCHOR:Symbol("IS_ANCHOR"),NONE:Symbol("NONE"),SELF_CS:Symbol("SELF_CS"),CACHE_NODES:Symbol("CACHE_NODES"),IS_COMPONENT:Symbol("IS_COMPONENT")};class w extends Xt{static peek(){return w.source_stack.peek()||w.global_source}constructor(t,n){if(super(),this.host=void 0,this.__context={},this.__parent_source=w.source_stack.peek(),this.__container_source=this,this.states={mounted:!1,unmounted:!1},this.host=t,this.__parent_source)if(this.setupContainerSource(),this.on("throw",o=>{var s;return(s=this.__parent_source)==null?void 0:s.emit("throw",o)}),this.once("mount",()=>this.states.mounted=!0),this.once("unmount",()=>this.states.unmounted=!0),n){var r;((this.__container_source===this?(r=this.__container_source.__parent_source)==null?void 0:r.__container_source:this.__container_source)||this.__parent_source).once("unmount",()=>{this.emit("unmount"),this.dispose()})}else this.__parent_source.once("unmount",()=>{this.emit("unmount"),this.dispose()}),this.__parent_source.once("update_after",()=>{this.__parent_source.once("update_after",()=>{this.emit("unmount")})})}onMount(t){return this.states.mounted?t():this.once("mount",t),this}onUnmount(t){return this.states.unmounted?t():this.once("unmount",t),this}setupContainerSource(){for(;this.__container_source&&this.__container_source!==w.global_source;){var t;if((t=this.__container_source.host)!=null&&t[x.IS_COMPONENT])break;this.__container_source=this.__container_source.__parent_source}}dispose(){this.removeAllListeners(),this.__context={}}effect(t,n){const r=ke(t,n);return this.once("unmount",()=>Ye(r)),r}}w.source_stack=new class{constructor(){this.items=void 0,this.items=[]}toArray(){return[...this.items]}push(e){this.items.push(e)}pop(){return this.items.pop()}peek(){return this.items[this.items.length-1]}size(){return this.items.length}isEmpty(){return this.items.length===0}},w.global_source=new w;const V=(e,t,n)=>{const r=o=>{const s=o.relatedNode;s&&s===e.parentNode&&t(s,e)};return e.addEventListener(n,r),()=>e.removeEventListener(n,r)};class O{constructor(){this.source=void 0,this.viewAnchor=(()=>{const t=document.createTextNode("");return t[x.IS_ANCHOR]=!0,t})(),this.currentView=this.viewAnchor,this.renderEffectRunner=void 0,this.rawTarget=void 0,this.dispose_onDomInserted=void 0,this._initialized=!1}_initialize(){this._initialized||(this._initialized=!0,this.initialize())}initialize(){this.source||(this.source=new w(this)),this.source.once("unmount",()=>this.dispose())}ensureEffectRunner(){return this._initialize(),this.renderEffectRunner||(this.renderEffectRunner=ke(this.update.bind(this),{lazy:!1}),this.dispose_onDomInserted=V(this.currentView,(t,n)=>{var r,o,s;(r=this.dispose_onDomInserted)==null||r.call(this),this.source.emit("mount"),this.viewAnchor!==n&&t.insertBefore(this.viewAnchor,n),n!==this.currentView&&(t.insertBefore(this.currentView,n),(s=n)&&s[x.IS_ANCHOR]||(o=n.parentElement)==null||o.removeChild(n))},"DOMNodeInserted")),this.renderEffectRunner}render(){return null}_update(){const t=this.currentView,n=this.render()||this.viewAnchor,r=t==null?void 0:t.parentElement;r&&r.replaceChild(n,t),this.currentView=n}update(){var t,n;if(this.source.states.unmounted||(t=this.source.__parent_source)!=null&&t.states.unmounted||(n=this.source.__container_source)!=null&&n.states.unmounted)this.dispose();else{this.source.emit("update_before");try{w.source_stack.push(this.source),this.source.emit("update"),this._update()}catch(r){requestAnimationFrame(()=>{this.source.emit("throw",r),console.error(r)})}finally{w.source_stack.pop(),this.source.emit("update_after")}}}dispose(){var t,n,r,o;(t=this.renderEffectRunner)==null||t.effect.stop(),(n=this.currentView.parentElement)==null||n.removeChild(this.currentView),(r=this.viewAnchor.parentElement)==null||r.removeChild(this.viewAnchor),(o=this.dispose_onDomInserted)==null||o.call(this)}static fromRender(t){const n=new O;return n.render=()=>O.warpView(t()),n.rawTarget=t,n}static fromRef(t){const n=new O;return n.render=()=>O.warpView(y(t)),n.rawTarget=t,n}static warpView(t){return t instanceof Node||t===null?t:document.createTextNode(`${t}`)}static warp(t){if(typeof t!="function"&&!R(t))return O.warpView(t);let n;if(typeof t=="function")n=O.fromRender(t);else{if(!R(t))throw new Error("Unknown view type.");n=O.fromRef(t)}return n.ensureEffectRunner(),n.currentView}}let lt;lt=x.IS_COMPONENT;class ut extends O{get[lt](){return!0}constructor(t,n,r){super(),this._define=void 0,this.props=void 0,this.children=void 0,this.state=void 0,this._define=t,this.props=n,this.children=r}initialize(){this.initializeComponent()}initializeComponent(){this.source=new w(this,"__node_cached"in this.props),this.source.once("unmount",()=>this.dispose()),this.installSource(),this.initializeSetup()}initializeSetup(){const{props:t,children:n}=this;ce(),w.source_stack.push(this.source),this.source.emit("setup_before"),this.state=this._define.setup(t,n),this.source.emit("setup_after"),w.source_stack.pop(),le()}render(){const t=this._define.render(this.props,this.state,this.children);return O.warp(t)}installSource(){var t,n;(t=(n=this._define)[x.CS_HOOK_CB])==null||t.call(n,this.source)}}class Zt extends ut{constructor(t,n,r){const o={setup:(s,i)=>{const a={};return o.render=t(s,a,i),a},render:()=>{}};o[x.CS_HOOK_CB]=t[x.CS_HOOK_CB],super(o,n,r),this._function_define=void 0,this._function_define=t}}class Qt{constructor(t,n,r){this.tagNameOrDome=void 0,this.props=void 0,this.children=void 0,this.node=void 0,this.source=new w(this),this.tagNameOrDome=t,this.props=n,this.children=r,this.source.once("unmount",()=>this.dispose()),this.buildNode()}dispose(){var t,n;(t=this.node)==null||(n=t.parentElement)==null||n.removeChild(this.node)}buildNode(){if(this.node)return this.node;this.node=this.tagNameOrDome instanceof Element?this.tagNameOrDome:document.createElement(this.tagNameOrDome),ce(),this.hydrateChildren(),le();for(const[t,n]of Object.entries(this.props))this.hydrateAttribute(t,n);return this.node}isValidAttributeName(t){return/^[a-zA-Z][\w-]*$/.test(t)}hydrateAttribute(t,n){if(!t.startsWith("_")&&!t.startsWith("$")&&this.isValidAttributeName(t)){switch(t){case"ref":return void(typeof n=="function"?n(this.node):R(n)&&(n.value=this.node));case"effect":return void(typeof n=="function"&&this.source.effect(()=>n(this.node),{lazy:!1}))}if(t.startsWith("on")&&typeof n=="function"){const r=t.slice(2).toLowerCase(),o=this.node["__cb_"+t];return o&&this.node.removeEventListener(r,o),this.node["__cb_"+t]=n,void this.node.addEventListener(r,n)}this.source.effect(()=>{const r=y(n);if(t!=="value")if(t!=="defaultValue")typeof r!="boolean"?this.node.setAttribute(t,r):r?this.node.setAttribute(t,""):this.node.removeAttribute(t);else{if(this.node.value)return;this.node.value=r}else this.node.value=r},{lazy:!1})}}hydrateChildren(){const{children:t}=this;for(const n of t){if(n==null)continue;const r=O.warp(n);r&&this.node.appendChild(r)}}}function B(e){return e?e(w.peek()):w.peek()}const en=(e,t,n=!1)=>B(r=>r[n?"once":"on"](e,t)),tn=e=>B(t=>t.onMount(e)),E=e=>B(t=>t.onUnmount(e)),nn=e=>en("throw",e),Ie=(e,t)=>{var n,r;if(!e)return;const o=w.peek(),{__container_source:s}=o;s&&((n=s.__context)[r=x.CACHE_NODES]||(n[r]={}),s.__context[x.CACHE_NODES][e]=t)},dt=(e,t={},n=[])=>{const{key:r}=t;delete t.key,r&&(t.__node_cached=!0);const o=(s=>{var i,a;if(!s)return;const c=w.peek(),{__container_source:l}=c;return l?((i=l.__context)[a=x.CACHE_NODES]||(i[a]={}),l.__context[x.CACHE_NODES][s]):void 0})(r);if(o)return o;if(typeof e=="function"){const s=new Zt(e,t,n);return Ie(r,s),s}if(typeof e=="object"&&typeof e.render=="function"&&typeof e.setup=="function"){const s=new ut(e,t,n);return Ie(r,s),s}throw new Error(`Valid define type [${typeof e}] is not supported for reactiveHydrate.`)},rn=(e,t,...n)=>{var r;if(t||(t={}),n||(n=[]),n=((r=n)==null?void 0:r.flat())||n,typeof e=="string"||e instanceof Element)return new Qt(e,t,n).node;const o=dt(e,t,n);return o.ensureEffectRunner(),o.currentView},f=rn,on=(e,t,n)=>{const r=e instanceof Element?e:document.querySelector(e);if(!r)throw new Error(`Could not find container: ${e}`);if(t instanceof Element)return r.appendChild(t),null;const o=dt(t,n);return o.ensureEffectRunner(),r.appendChild(o.currentView),o},M=(e,t)=>{let n=null;const r=ke(()=>{n==null||n(),e(s=>n=s)},ve({lazy:!1},t)),o=()=>{n==null||n(),Ye(r),n=null};return E(o),[r,o]},N=(e,t,n)=>{let r;return M(()=>{const o=typeof e=="function"?e(r):y(e);de(()=>t(o,r)),r=o},n)},Re=(e,t)=>{const n=C();return M(()=>{const r=S(n),o=e(r);var s,i;s=r,i=o,Object.is(s,i)||s===i||(n.value=o)},t),n},de=(e,...t)=>{ce();const n=e(...t);return le(),n},S=e=>de(()=>y(e));function sn(e){const t=R(e)?e:C(e);return[()=>y(t),n=>{if(typeof n=="function"){const r=S(t);t.value=n(r)}else t.value=n},t]}const an=(...e)=>e.map(t=>y(t)),ht=an,ft=(e,t)=>(((n,r)=>{if(!r)return;const o=n[x.CS_HOOK_CB];n[x.CS_HOOK_CB]=s=>{o==null||o(s),r(s)}})(e,t),e),cn=e=>new Proxy({},{get(t,n,r){let o=e;for(;o!==void 0;){const s=o.__context;if(n in s)return s[n];o=o.__parent_source}},set:(t,n,r,o)=>(e.__context[n]=r,!0)}),ln=e=>{const t=B();if(!t.__container_source)throw new Error("Container source not found, must be inside a container component to use element source");const n=cn(t.__container_source);return e==null||e(n),n},un=ft({setup({fallbackRender:e,onError:t,render:n}){const r=w.peek();let o=C(null);r.on("throw",i=>{i instanceof Error&&(t==null||t(i),o.value=i)});const s=C(1);return{catchError:o,rerenderRef:s,fallbackRender:e,childrenRender:n}},render(e,{fallbackRender:t,rerenderRef:n,catchError:r,childrenRender:o}){const s=()=>{n.value=Date.now(),r.value=null};return r.value?de(()=>t(r.value,s)):o()}}),pt=ft({setup(e,[t,...n]){const r={anchor:document.createTextNode(""),children:[],parentNode:null},o=B(),s=(i=typeof t=="function"?t:()=>[t,...n],()=>{return(h=i(),Array.isArray(h)?h:[h]).flat(1).map(d=>O.warp(d)).filter(Boolean);var h});var i;const[a,c]=M(()=>{w.source_stack.push(o),(()=>{const h=r.children,d=s(),{parentNode:p,anchor:_}=r;if(!p)return;const b=Math.max(d.length,h.length);for(let v=0;v<b;v++){const m=d[v],k=h[v];if(!m&&k)k.remove();else if(!k&&m)p.insertBefore(m,_);else if(k&&m){if(k===m)continue;p.replaceChild(m,k)}}r.children=d})(),w.source_stack.pop()}),l=V(r.anchor,h=>{r.parentNode=h,a()},"DOMNodeInserted"),u=V(r.anchor,h=>{r.children.forEach(d=>d==null?void 0:d.remove()),r.parentNode=null},"DOMNodeRemoved");return E(()=>{l(),u(),c(),r.anchor.remove(),r.children.forEach(h=>h==null?void 0:h.remove())}),B(h=>{var d;(d=h.__parent_source)==null||d.once("update_before",()=>{var p;r.children.forEach(_=>_==null?void 0:_.remove()),(p=h.__parent_source)==null||p.once("update_after",()=>{r.anchor.remove()})})}),r},render:(e,t)=>t.anchor});var _e=function e(t,n){if(t===n)return!0;if(t&&n&&typeof t=="object"&&typeof n=="object"){if(t.constructor!==n.constructor)return!1;var r,o,s;if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(o=r;o--!=0;)if(!e(t[o],n[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((r=(s=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(o=r;o--!=0;)if(!Object.prototype.hasOwnProperty.call(n,s[o]))return!1;for(o=r;o--!=0;){var i=s[o];if(!e(t[i],n[i]))return!1}return!0}return t!=t&&n!=n},Ue=Et({__proto__:null,default:_e},[_e]);function mt(e){if(function(t){return t&&typeof t=="object"&&t.constructor===Object}(e)){const t={};return Object.keys(e).forEach(n=>{t[n]=mt(e[n])}),t}return e}const ze=e=>mt(g(e)),dn=({items:e,render:t,needUpdate:n=(r,o)=>!((Ue==null?void 0:_e)||Ue)(r,o)})=>{const r=se([]),o=B(),[s]=M(()=>{const i=typeof e=="function"?e():y(e);w.source_stack.push(o);try{((a,c)=>{const l=S(r);for(let h=0;h<Math.max(l.length,a.length);h++){const d=l[h],p=a[h];if(d!==void 0&&p!==void 0){if(!d.node||de(()=>n(p,d.data))){const _=t(p,h,a,c,d.node);d.node=_,d.data=ze(p)}}else if(d===void 0){const _=t(p,h,a,c);l.push({data:ze(p),node:_})}else p===void 0&&(d.del=!0)}const u=l.filter(h=>h.del!==!0);r.value=u})(i,()=>s.effect.run())}finally{w.source_stack.pop()}});return()=>f(pt,{},()=>r.value.filter(i=>!i.del).map(i=>i.node))},hn=["container"],fn=(e,t,n)=>{let{container:r}=e,o=function(a,c){if(a==null)return{};var l,u,h={},d=Object.keys(a);for(u=0;u<d.length;u++)c.indexOf(l=d[u])>=0||(h[l]=a[l]);return h}(e,hn);const s=document.createTextNode(""),i=r||document.createElement("div");return document.body.appendChild(i),f(i,o,...n),E(()=>{var a;(a=i.parentElement)==null||a.removeChild(i)}),()=>s},vt=e=>{if(!e)throw new Error("styleOrFn is required.");return typeof e=="function"?e:()=>e},_t=(e,t,n)=>{const r=ln(),{applySheet:o,removeSheet:s,parseStyle:i}=(c=>{const l=new CSSStyleSheet;let u=!1;return{sheet:l,parseStyle:h=>{const d=function(p,_,b=!1){const v=b?`
`:" ",m=[{nodeSelector:_,cssObject:p}];let k="";for(;m.length>0;){const{nodeSelector:L,cssObject:q}=m.pop();k+=`${L} {${v}`;for(const j in q){const F=q[j];if(typeof F=="object"){const G=L===":root",bt=j.startsWith("&")?L+j.slice(1).replace(/&/g,L):`${G?"":L} ${j}`.trim();m.push({nodeSelector:bt,cssObject:F})}else{if(typeof F=="string"&&!F.trim()||F==null)continue;k+=`${T=j,T.replace(/[A-Z]/g,G=>`-${G.toLowerCase()}`)}: ${q[j]};${v}`}}k+=`}
`}var T;return k.trim()}(c(),h);l.replaceSync(d)},applySheet:()=>{u||(u=!0,document.adoptedStyleSheets=[...document.adoptedStyleSheets,l])},removeSheet:()=>{u&&(u=!1,document.adoptedStyleSheets=[...document.adoptedStyleSheets].filter(h=>h!==l))}}})(()=>e(r)),a=document.createTextNode("");if(M(()=>i(t)),E(V(a,o,"DOMNodeInserted")),E(V(a,s,"DOMNodeRemoved")),E(s),n){const c=l=>{var u;return l==null||(u=l.classList)==null?void 0:u.remove(n)};E(V(a,l=>{var u;return l==null||(u=l.classList)==null?void 0:u.add(n)},"DOMNodeInserted")),E(V(a,c,"DOMNodeRemoved"))}return{anchor:a}},pn=(e,t)=>{const n=vt(e.styleFn||e.style||t),r=`__s_${Math.floor(Math.random()*Number.MAX_SAFE_INTEGER)}`,{anchor:o}=_t(n,`.${r}`,r);return()=>o},mn=(e,t)=>{const n=vt(e.styleFn||e.style||t),{anchor:r}=_t(n,":root");return()=>r},vn=({component:e,render:t,fallback:n,error:r})=>{const o=C("fulfilled");nn(async a=>{var c;!(c=a)||typeof c!="object"&&typeof c!="function"||typeof c.then!="function"||(o.value="pending",a.then(()=>o.value="fulfilled"),a.catch(()=>o.value="rejected"))});const s=e?f(e):t?f(()=>()=>O.warpView(t())):null,i=f(()=>()=>{switch(o.value){case"pending":return n();case"fulfilled":return s;case"rejected":return(r||n)()}});return()=>i},_n=(e,...t)=>{const n=[];for(let r=0;r<e.length;r++){n.push(document.createTextNode(e[r]));const o=t[r],s=document.createTextNode("");typeof o=="function"?M(()=>s.textContent=o()):R(o)&&M(()=>s.textContent=String(o.value)),n.push(s)}return n},gt=(e,...t)=>e.reduce((n,r,o)=>{var s;return n+=r,o<t.length&&(n+=y(typeof(s=t[o])=="function"?s():s)),n},""),gn=(e,...t)=>{const n=function(r,o,s=!1){let i,a;const c=typeof r=="function";return c?(i=r,a=Rt):(i=r.get,a=r.set),new Jt(i,a,c||!a,s)}(()=>gt(e,...t));return E(()=>n.effect.stop()),n},yn=e=>{let t=null,n=null;return(r,...o)=>{const s=B(),i=C(t);if(!t){const a=(n||(n=e().then(c=>t=c))).then(c=>{S(i)||(i.value=c)});s.emit("throw",a)}return()=>i.value?f(i.value.default,r,...o):null}};var K={__proto__:null,ErrorBoundary:un,Fragment:pt,ReactiveList:dn,Portal:fn,Style:pn,GlobalStyle:mn,Suspense:vn,text:_n,raw:gt,rawRef:gn,lazy:yn};const wn=(e,t)=>{const n=C("");return M(()=>{const r=S(n);r&&URL.revokeObjectURL(r),n.value=URL.createObjectURL(new Blob([y(e)],{type:"text/plain",...t}))}),E(()=>URL.revokeObjectURL(n.value)),n},bn="modulepreload",kn=function(e,t){return new URL(e,t).href},We={},Sn=function(t,n,r){if(!n||n.length===0)return t();const o=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=kn(s,r),s in We)return;We[s]=!0;const i=s.endsWith(".css"),a=i?'[rel="stylesheet"]':"";if(!!r)for(let u=o.length-1;u>=0;u--){const h=o[u];if(h.href===s&&(!i||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const l=document.createElement("link");if(l.rel=i?"stylesheet":bn,i||(l.as="script",l.crossOrigin=""),l.href=s,document.head.appendChild(l),i)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t())},En=()=>Sn(()=>import("https://unpkg.com/@monaco-editor/loader@1.3.3/lib/umd/monaco-loader.js"),[],import.meta.url).then(()=>window.monaco_loader).then(e=>e.init()),Cn=({value:e,onChange:t,isDark:n,onSave:r,...o})=>{let s,i,a;return M(()=>{const c=y(n);a!=null&&a.editor&&(c?a.editor.setTheme("vs-dark"):a.editor.setTheme("vs"))}),E(()=>{s==null||s.dispose()}),R(e)&&N(e,c=>{(i==null?void 0:i.getValue())!==c&&(i==null||i.setValue(c))}),()=>f("div",{...o,ref:async c=>{a=await En(),i=a.editor.createModel(S(e),"typescript",a.Uri.file("main.ts")),i.onDidChangeContent(()=>t(i.getValue())),a.languages.typescript.typescriptDefaults.setCompilerOptions({jsx:"react"}),a.languages.typescript.typescriptDefaults.setDiagnosticsOptions({noSemanticValidation:!0,noSyntaxValidation:!0}),s=a.editor.create(c,{automaticLayout:!0,wordWrap:!0,theme:S(n)?"vs-dark":"vs"}),s.setModel(i),r&&s.addCommand(a.KeyMod.CtrlCmd|a.KeyCode.KeyS,()=>{r(i.getValue())})}})};class Rn{constructor(){Y(this,"idx",0);Y(this,"demos",[]);Y(this,"currentDemo",null)}registerDemo(t,n,r){const o={id:this.idx++,name:t,version:n,code:r};this.demos.push(o),this.currentDemo||(this.currentDemo=o)}selectDemo(t){const n=this.demos.find(r=>r.id===Number(t));if(!n)throw new Error(`Cannot find demo with name ${name}`);return this.currentDemo=n,n}}const On=`import { rh, ref, mount, unref, setupWatch } from "@rhjs/rh";

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
`,xn=`import { rh, ref, mount, unref } from "@rhjs/rh";

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
`,Tn=`import {
  rh,
  ref,
  mount,
  onUnmount,
  useRef,
  Style,
  ReactiveList,
  setupWatch,
} from "@rhjs/rh";

const TodoHeader = ({ onAddTask }) => {
  const newTask = ref("");

  const addTask = () => {
    if (newTask.value.trim()) {
      onAddTask(newTask.value);
      newTask.value = "";
    }
  };

  return () => (
    <div>
      <h1>Todo App</h1>
      <input
        type="text"
        value={newTask}
        onInput={(e) => (newTask.value = e.target.value)}
        onKeyUp={(ev) => (ev.key === "Enter" ? addTask() : null)}
      />
      <button onClick={() => addTask()}>Add Task</button>
    </div>
  );
};

const timeIntervals = {
  day: 86400,
  hour: 3600,
  minute: 60,
  second: 1,
};
const TimeSince = ({ date }) => {
  const [timeSince, setTimeSince, timeSinceRef] = useRef("");

  const updateTimeSince = () => {
    const seconds = Math.floor((new Date() - new Date(date)) / 1000);
    let intervalType = "";

    if (seconds < 60) {
      intervalType = "second";
    } else if (seconds < 3600) {
      intervalType = "minute";
    } else if (seconds < 86400) {
      intervalType = "hour";
    } else {
      intervalType = "day";
    }

    const intervalCount = Math.floor(seconds / timeIntervals[intervalType]);
    setTimeSince(
      \`\${intervalCount} \${intervalType}\${intervalCount !== 1 ? "s" : ""} ago\`
    );
  };

  const interval = setInterval(updateTimeSince, 1000);
  updateTimeSince();

  onUnmount(() => clearInterval(interval));
  return () => <span>{timeSinceRef}</span>;
};

const TodoList = ({ tasks, onRemoveTask }) => {
  return () => (
    <ul>
      <Style
        styleFn={() => ({
          "button[disabled]": {
            opacity: 0.5,
            cursor: "not-allowed",
          },
        })}
      />
      <ReactiveList
        items={tasks}
        render={(task, index, array, rerender) => (
          <li>
            {task.done ? <del>{task.name}</del> : task.name}
            <br />
            <small>⏰{task.done ? null : <TimeSince date={task.date} />}</small>
            <br />
            <button
              disabled={index === 0}
              onClick={() => {
                [tasks.value[index - 1], tasks.value[index]] = [
                  array[index],
                  array[index - 1],
                ];
              }}
            >
              👆
            </button>
            <button
              disabled={index === array.length - 1}
              onClick={() => {
                [tasks.value[index + 1], tasks.value[index]] = [
                  array[index],
                  array[index + 1],
                ];
              }}
            >
              👇
            </button>
            <button onClick={() => onRemoveTask(index)}>remove</button>
            {task.done ? (
              <button
                onClick={() => {
                  task.done = false;
                  task.date = new Date();
                  rerender();
                }}
              >
                reset
              </button>
            ) : (
              <button
                onClick={() => {
                  task.done = true;
                  rerender();
                }}
              >
                done
              </button>
            )}
          </li>
        )}
      />
    </ul>
  );
};

const TodoFooter = ({ clearTask }) => {
  return () => (
    <div>
      <button onClick={clearTask}>Clear Task</button>
    </div>
  );
};

function getRandomDateWithinLastSevenDays() {
  const today = new Date();
  const startOfLastWeek = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - 6
  );
  const randomTime =
    Math.floor(Math.random() * (today.getTime() - startOfLastWeek.getTime())) +
    startOfLastWeek.getTime();
  return new Date(randomTime);
}

const TodoApp = () => {
  const tasks = ref([
    {
      name: "🌞 Go for a morning walk",
      date: getRandomDateWithinLastSevenDays(),
      done: false,
    },
    {
      name: "📚 Read one chapter of a book",
      date: new Date(),
      done: false,
    },
    {
      name: "💪 Exercise for 30 minutes",
      date: getRandomDateWithinLastSevenDays(),
      done: false,
    },
    {
      name: "🛁 Take a relaxing bath",
      date: getRandomDateWithinLastSevenDays(),
      done: false,
    },
    {
      name: "🍎 Eat a healthy meal",
      date: getRandomDateWithinLastSevenDays(),
      done: false,
    },
  ]);

  const addTask = (name) => {
    if (name.trim()) {
      tasks.value.push({
        name,
        date: new Date(),
        done: false,
      });
    }
  };

  const removeTask = (index) => {
    tasks.value.splice(index, 1);
  };

  return () => (
    <div>
      <TodoHeader onAddTask={addTask} />
      <hr />
      <TodoList tasks={tasks} onRemoveTask={removeTask} />
      <hr />
      <TodoFooter tasks={tasks} clearTask={() => (tasks.value = [])} />
    </div>
  );
};

mount("#app", TodoApp);
`,Dn=`import { Button, ensureFluentUILoaded } from "@rhjs/fluent-web-components";
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
`,H=new Rn;H.registerDemo("HelloWorld","0.1.1-dev.17",xn);H.registerDemo("Counter","0.1.1-dev.17",On);H.registerDemo("TodoApp","0.1.1-dev.17",Tn);H.registerDemo("Counter","0.0.34",Dn);const He=C(H.currentDemo),yt=()=>({mgr:H,currentDemo:He,selectDemo(e){He.value=H.selectDemo(e)},demos:H.demos}),Ln=()=>{const{selectDemo:e,currentDemo:t,demos:n}=yt();return()=>f("div",null,f("select",{onChange:r=>e(r.target.value)},n.map(r=>f("option",{value:r.id},r.name," @",r.version))))},wt=({styleFn:e,isDark:t,...n},r,o)=>()=>f("div",{...n},f(K.Style,{styleFn:()=>({display:"inline-flex",alignItems:"center",justifyContent:"center",paddingLeft:"12px",paddingRight:"12px",cursor:"pointer",userSelect:"none",marginLeft:"4px","&:hover":{backgroundColor:y(t)?"rgba(64,64,64,1)":"rgba(64,64,64,0.1)"},"&:active":{outline:"solid 1px",outlineColor:y(t)?"#fff":"rgba(64,64,64,1)"},...e==null?void 0:e()})}),o),An=({isDark:e})=>()=>f(wt,{onClick:()=>{R(e)&&(e.value=!S(e))},isDark:e},f("span",null,()=>y(e)?"🌘":"🌖"));function Pe({isDark:e,href:t,target:n="_blank"},r,o){return()=>f(wt,{isDark:e,onClick:()=>{window.open(t,n)}},f("a",{href:t,target:n,style:"text-decoration: none; color: inherit;"},o))}const jn=({isDark:e})=>()=>f("div",null,f(K.Style,{styleFn:()=>({paddingLeft:"12px",paddingRight:"12px",height:"100%",width:"calc(100% - 24px)",display:"grid",gridTemplateColumns:"minmax(0, 1fr) 12px minmax(0, 1fr)"})}),f("div",{style:"display: inline-flex; align-items: center;"},f("span",{style:"user-select: none;word-break: keep-all;white-space: nowrap;"},"🧩 ",f("b",null,"R"),f("small",null,"eactive"),f("b",null,"H"),f("small",null,"ydrate"),f("b",null,"JS")," PLAYGROUND"),f(An,{isDark:e}),f(Ln,null)),f("div",null),f("div",{style:"display: inline-flex; align-items: center; justify-content: right;"},f(Pe,{isDark:e,href:"https://zhzluke96.github.io/rhjs-demos/#demo",target:"_self"},"demos"),f(Pe,{isDark:e,href:"https://github.com/zhzLuke96/rh.js"},"github"))),{Style:Nn}=K,Mn=()=>document.querySelectorAll("iframe").forEach(e=>e.style.pointerEvents="none"),In=()=>document.querySelectorAll("iframe").forEach(e=>e.style.pointerEvents="auto"),Un=({isHorizontal:e,onResize:t,ref:n})=>{const[r,o,s]=sn(!1),i=()=>o(!0),a=()=>o(!1),c=h=>{t(h.clientX,h.clientY)},l=h=>{const d=h.touches[0];t(d.clientX,d.clientY)},u=C(null);return N(s,h=>{h?(Mn(),window.addEventListener("mousemove",c),window.addEventListener("mouseup",a),window.addEventListener("touchmove",l),window.addEventListener("touchend",a)):(In(),window.removeEventListener("mousemove",c),window.removeEventListener("mouseup",a),window.removeEventListener("touchmove",l),window.removeEventListener("touchend",a))}),N(u,h=>{h&&(h.addEventListener("mousedown",i,{passive:!0}),h.addEventListener("touchstart",i,{passive:!0}))}),E(()=>{var h,d;(h=y(u))==null||h.removeEventListener("mousedown",i),(d=y(u))==null||d.removeEventListener("touchstart",i)}),()=>f("div",{ref:h=>{u.value=h,n&&(n.value=h)}},f(Nn,{styleFn:()=>({backgroundColor:y(s)?"rgba(255,255,255,0.3)":"",width:e?"100%":"12px",height:e?"12px":"100%",zIndex:y(s)?"10":"auto",cursor:e?"row-resize":"col-resize",userSelect:"none",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"12px","&:hover":{backgroundColor:"rgba(255,255,255,0.3)"}})}),"⚪⚪⚪")},zn=()=>{const e=`
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
`.trim(),t=URL.createObjectURL(new Blob([e],{type:"text/html"}));return E(()=>URL.revokeObjectURL(t)),`${t}#?embedded=${encodeURIComponent(location.origin)}`},Wn=(e,t,n="")=>`
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
`.trim();function Hn(e,t){const n=se(t),r=o=>{n.value=e(S(n),o)};return[Ee(n),r]}const Pn=(e,t,n,r)=>{const o={sendToIframe(a){var c,l;(l=(c=S(e))==null?void 0:c.contentWindow)==null||l.postMessage(a,"*")},sendToDevtools(a){var c,l;(l=(c=S(t))==null?void 0:c.contentWindow)==null||l.postMessage(a,"*")}},s=()=>{const{codeInjected:a,codeURL:c}=y(n);if(!a){if(!c){setTimeout(s,3);return}requestAnimationFrame(()=>{o.sendToIframe({event:"CODE_UPDATE",value:c}),r({type:"CODE_INJECTED"})})}},i=a=>{var u,h;const[c,l]=ht(e,t);!c||!l||((h=(u=a.data)==null?void 0:u.includes)!=null&&h.call(u,"Debugger.enable")&&(r({type:"Debugger.enable"}),s()),a.source===c.contentWindow?l.contentWindow.postMessage(a.data,"*"):a.source===l.contentWindow&&c.contentWindow.postMessage({event:"DEV",data:a.data},"*"))};return window.addEventListener("message",i),E(()=>window.removeEventListener("message",i)),o},Bn=(e,t)=>{const{importMap:n,isDark:r}=e,o=Re(()=>{const s=Wn(S(r),JSON.stringify({imports:y(n)}));return URL.createObjectURL(new Blob([s],{type:"text/html"}))});return N(o,(s,i)=>{i&&URL.revokeObjectURL(i),t({type:"HTML_CHANGED",iframeSrc:s||""})}),E(()=>URL.revokeObjectURL(S(o)||"")),{iframeSrc:o}},Fn=e=>{const{isDark:t,code:n}=e,r=se(null),o=se(null),s=d=>{var p;return(p=d.contentDocument)==null?void 0:p.documentElement.classList.toggle("dark",S(t))},i=d=>{const p=S(r);p&&(p.src=d)};N(()=>y(t),d=>{const p=y(r);p&&s(p)});const[a,c]=Hn((d,p)=>{var _,b;switch(p.type){case"IFRAME_READY":s(p.iframe);let v=d.codeInjected;return{...d,codeInjected:v,iframeReady:!0};case"DEVTOOLS_IFRAME_READY":return{...d,devtoolsIframeReady:!0};case"DEV_LOADED":return{...d,devLoaded:!0};case"HTML_CHANGED":return i(p.iframeSrc),d.devtoolsIframeReady&&((b=(_=S(o))==null?void 0:_.contentWindow)==null||b.location.reload()),{iframeReady:!1,devtoolsIframeReady:!1,devLoaded:!1,codeInjected:!1,darkInjected:!1};case"CODE_UPDATE":return{...d,codeURL:p.codeURL};case"CODE_INJECTED":return{...d,codeInjected:!0}}return d},{iframeReady:!1,devtoolsIframeReady:!1,devLoaded:!1,codeInjected:!1,codeURL:S(n)}),{sendToDevtools:l,sendToIframe:u}=Pn(r,o,a,c);N(()=>y(n),d=>{c({type:"CODE_UPDATE",codeURL:d}),a.value.iframeReady&&requestAnimationFrame(()=>{u({event:"CODE_UPDATE",value:d}),c({type:"CODE_INJECTED"})})});const{iframeSrc:h}=Bn(e,c);return N(r,d=>{d==null||d.addEventListener("load",()=>c({type:"IFRAME_READY",iframe:d}))}),N(o,d=>{d==null||d.addEventListener("load",()=>c({type:"DEVTOOLS_IFRAME_READY",devIframe:d}))}),{iframeSrc:h,iframeRef:r,devtoolsIframeRef:o,previewState:a,dispatch:c,sendToDevtools:l,sendToIframe:u}},Vn=e=>{const{importMap:t,code:n,devtools:r,isDark:o,...s}=e,i=C(null),{iframeSrc:a,iframeRef:c,devtoolsIframeRef:l,previewState:u,dispatch:h}=Fn(e),d=zn(),p=Re(()=>`width: 100%; height: 100%; ${y(r)?"display: block;":"display: none;"}`),_=C(.625),b=C(null),v=(m,k)=>{const[T,L]=ht(i,b);if(!T||!L)return;let q,j;const F=T.getBoundingClientRect();q=k-F.top-L.offsetHeight/2,j=T.offsetHeight-L.offsetHeight;const G=q/j;_.value=G};return()=>f("div",{...s,ref:i},f(K.Style,{styleFn:()=>{const m=y(_);return{display:"grid",height:"100%",width:"100%",gridTemplateRows:y(r)?`minmax(0, ${m}fr) 12px minmax(0, ${1-m}fr)`:"minmax(0, 1fr)"}}}),f("iframe",{ref:c,src:a,style:"width: 100%;height: 100%;",frameBorder:0,sandbox:"allow-popups-to-escape-sandbox allow-scripts allow-popups allow-forms allow-pointer-lock allow-top-navigation allow-modals allow-same-origin"}),f("div",null,f(Un,{ref:b,isHorizontal:!0,onResize:v})),f("iframe",{ref:l,style:p,src:d,frameBorder:"0"}))},$n=({isDark:e})=>()=>f(K.GlobalStyle,{styleFn:()=>({fontFamily:"'Karla', system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",lineHeight:"1.5",fontWeight:"400",colorScheme:y(e)?"light dark":"dark",color:y(e)?"rgba(255, 255, 255, 0.87)":"#242424",backgroundColor:y(e)?"#333":"#fff",fontSynthesis:"none",textRendering:"optimizeLegibility","-webkitFontSmoothing":"antialiased","-moz-osxFontSmoothing":"grayscale","-webkitTextSizeAdjust":"100%",height:"100vh",width:"100vw",body:{margin:"0",minWidth:"100vw",minHeight:"100vh",width:"100%",height:"100%"},"#app":{width:"100%",height:"100%"}})});function Kn(){return new Worker(""+new URL("complier.worker-026b4f92.js",import.meta.url).href)}class qn{constructor(){Y(this,"registry",{})}registerWorker(t,n){this.registry[t]?console.warn(`Worker of type ${t} already registered.`):this.registry[t]=n}removeWorker(t){delete this.registry[t]}getWorker(t){const n=this.registry[t];if(n)return n;throw new Error(`No worker of type ${t} registered.`)}postMessage(t,n){this.getWorker(t).postMessage(n)}listenRecv(t,n){const r=this.getWorker(t);let o;const s=i=>{const{message_token:a}=i.data||{};if(a!==n)return;const c={...i.data};delete c.message_token,o(c),r.removeEventListener("message",s)};return r.addEventListener("message",s),{recv:new Promise((i,a)=>{o=i}),dispose:()=>r.removeEventListener("message",s)}}}class Yn{constructor(){Y(this,"registry",new qn);this.initialize()}async initialize(){this.registry.registerWorker("complier",new Kn)}worker_caller(t,n){const r=Math.random().toString(36).slice(2),o={...n,message_token:r};return this.registry.postMessage(t,o),this.registry.listenRecv(t,r)}compileFile(t){return this.worker_caller("complier",{event:"BABEL",payload:{file:t,compile_options:{}}})}compileFiles(t){return this.worker_caller("complier",{event:"ROLLUP",payload:{files:t,compile_options:{}}})}}const Be=new Yn;w.global_source.on("throw",console.error);const Gn=()=>{let e=null;return E(()=>e==null?void 0:e.dispose()),{compileFile(t){return e==null||e.dispose(),e=Be.compileFile(t),e.recv},compileFiles(t){return e==null||e.dispose(),e=Be.compileFiles(t),e.recv}}},Jn='import("@rhjs/rh").then(({cs, ElementSource}) => window.dispose = () => (cs || ElementSource).global_source.emit("unmount"));',Xn=()=>{var c;const e=C(!0),{currentDemo:t}=yt(),n=Re(()=>{var l;return{"@rhjs/rh":`https://unpkg.com/@rhjs/rh@${((l=t.value)==null?void 0:l.version)||"latest"}/dist/main.module.mjs`,"@rhjs/fluent-web-components":"https://unpkg.com/@rhjs/fluent-web-components@latest/dist/main.module.mjs"}}),r=C(""),o=wn(r,{type:"text/javascript"}),s=C(((c=t.value)==null?void 0:c.code)||""),i=Gn(),a=async()=>{const l=S(s);if(!l)return;const u=await i.compileFile({filename:"main.tsx",source:l});console.log(u),r.value=`${u.compiled}
${Jn}`};return tn(a),N(t,l=>{l&&s.value!==l.code&&(console.log("change"),s.value=l.code,a())}),()=>f("div",null,f($n,{isDark:e}),f(K.Style,{styleFn:()=>({position:"relative",display:"flex",flexFlow:"column",width:"100%",height:"100%",maxWidth:"100vw",maxHeight:"100vh",overflow:"hidden"})}),f("header",{style:"height: 30px; width: 100%;"},f(jn,{isDark:e})),f("div",{style:"flex: 1;"},f(K.Style,{styleFn:()=>({position:"relative",display:"flex",flexFlow:"row",width:"100%",height:"100%"})}),f(Cn,{style:"flex: 1;",value:s,onChange:l=>s.value=l,onSave:a,isDark:e}),f(Vn,{style:"flex: 1;",importMap:n,code:o,devtools:!0,isDark:e})))};on("#app",Xn);
