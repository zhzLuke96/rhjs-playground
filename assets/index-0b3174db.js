var Lt=Object.defineProperty;var Nt=(e,t,n)=>t in e?Lt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var q=(e,t,n)=>(Nt(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function jt(e,t){return t.forEach(function(n){n&&typeof n!="string"&&!Array.isArray(n)&&Object.keys(n).forEach(function(o){if(o!=="default"&&!(o in e)){var r=Object.getOwnPropertyDescriptor(n,o);Object.defineProperty(e,o,r.get?r:{enumerable:!0,get:function(){return n[o]}})}})}),e}function At(e,t){const n=Object.create(null),o=e.split(",");for(let r=0;r<o.length;r++)n[o[r]]=!0;return t?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const Mt=()=>{},It=Object.assign,Ht=Object.prototype.hasOwnProperty,ue=(e,t)=>Ht.call(e,t),F=Array.isArray,ie=e=>Qe(e)==="[object Map]",Ce=e=>typeof e=="symbol",de=e=>e!==null&&typeof e=="object",Pt=Object.prototype.toString,Qe=e=>Pt.call(e),Ut=e=>Qe(e).slice(8,-1),Oe=e=>typeof e=="string"&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Te=(e,t)=>!Object.is(e,t);let zt;function et(e,t=zt){t&&t.active&&t.effects.push(e)}const Re=e=>{const t=new Set(e);return t.w=0,t.n=0,t},tt=e=>(e.w&W)>0,nt=e=>(e.n&W)>0,we=new WeakMap;let Z=0,W=1;const be=30;let A;const K=Symbol(""),Se=Symbol("");class ot{constructor(t,n=null,o){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,et(this,o)}run(){if(!this.active)return this.fn();let t=A,n=B;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=A,A=this,B=!0,W=1<<++Z,Z<=be?(({deps:o})=>{if(o.length)for(let r=0;r<o.length;r++)o[r].w|=W})(this):Ae(this),this.fn()}finally{Z<=be&&(o=>{const{deps:r}=o;if(r.length){let s=0;for(let i=0;i<r.length;i++){const c=r[i];tt(c)&&!nt(c)?c.delete(o):r[s++]=c,c.w&=~W,c.n&=~W}r.length=s}})(this),W=1<<--Z,A=this.parent,B=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){A===this?this.deferStop=!0:this.active&&(Ae(this),this.onStop&&this.onStop(),this.active=!1)}}function Ae(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}function xe(e,t){e.effect&&(e=e.effect.fn);const n=new ot(e);t&&(It(n,t),t.scope&&et(n,t.scope)),t&&t.lazy||n.run();const o=n.run.bind(n);return o.effect=n,o}function rt(e){e.effect.stop()}let B=!0;const st=[];function he(){st.push(B),B=!1}function pe(){const e=st.pop();B=e===void 0||e}function j(e,t,n){if(B&&A){let o=we.get(e);o||we.set(e,o=new Map);let r=o.get(n);r||o.set(n,r=Re()),it(r)}}function it(e,t){let n=!1;Z<=be?nt(e)||(e.n|=W,n=!tt(e)):n=!e.has(A),n&&(e.add(A),A.deps.push(e))}function V(e,t,n,o,r,s){const i=we.get(e);if(!i)return;let c=[];if(t==="clear")c=[...i.values()];else if(n==="length"&&F(e)){const l=Number(o);i.forEach((a,u)=>{(u==="length"||u>=l)&&c.push(a)})}else switch(n!==void 0&&c.push(i.get(n)),t){case"add":F(e)?Oe(n)&&c.push(i.get("length")):(c.push(i.get(K)),ie(e)&&c.push(i.get(Se)));break;case"delete":F(e)||(c.push(i.get(K)),ie(e)&&c.push(i.get(Se)));break;case"set":ie(e)&&c.push(i.get(K))}if(c.length===1)c[0]&&Ee(c[0]);else{const l=[];for(const a of c)a&&l.push(...a);Ee(Re(l))}}function Ee(e,t){const n=F(e)?e:[...e];for(const o of n)o.computed&&Me(o);for(const o of n)o.computed||Me(o)}function Me(e,t){(e!==A||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Wt=At("__proto__,__v_isRef,__isVue"),at=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ce)),Ft=ct(),Bt=ct(!0),Ie=$t();function $t(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const o=w(this);for(let s=0,i=this.length;s<i;s++)j(o,0,s+"");const r=o[t](...n);return r===-1||r===!1?o[t](...n.map(w)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){he();const o=w(this)[t].apply(this,n);return pe(),o}}),e}function Vt(e){const t=w(this);return j(t,0,e),t.hasOwnProperty(e)}function ct(e=!1,t=!1){return function(n,o,r){if(o==="__v_isReactive")return!e;if(o==="__v_isReadonly")return e;if(o==="__v_isShallow")return t;if(o==="__v_raw"&&r===(e?t?on:dt:t?nn:ut).get(n))return n;const s=F(n);if(!e){if(s&&ue(Ie,o))return Reflect.get(Ie,o,r);if(o==="hasOwnProperty")return Vt}const i=Reflect.get(n,o,r);return(Ce(o)?at.has(o):Wt(o))?i:(e||j(n,0,o),t?i:N(i)?s&&Oe(o)?i:i.value:de(i)?e?Le(i):ht(i):i)}}function Yt(e=!1){return function(t,n,o,r){let s=t[n];if(ae(s)&&N(s)&&!N(o))return!1;if(!e&&(ft(o)||ae(o)||(s=w(s),o=w(o)),!F(t)&&N(s)&&!N(o)))return s.value=o,!0;const i=F(t)&&Oe(n)?Number(n)<t.length:ue(t,n),c=Reflect.set(t,n,o,r);return t===w(r)&&(i?Te(o,s)&&V(t,"set",n,o):V(t,"add",n,o)),c}}const Kt={get:Ft,set:Yt(),deleteProperty:function(e,t){const n=ue(e,t),o=Reflect.deleteProperty(e,t);return o&&n&&V(e,"delete",t,void 0),o},has:function(e,t){const n=Reflect.has(e,t);return Ce(t)&&at.has(t)||j(e,0,t),n},ownKeys:function(e){return j(e,0,F(e)?"length":K),Reflect.ownKeys(e)}},Gt={get:Bt,set:(e,t)=>!0,deleteProperty:(e,t)=>!0},De=e=>e,fe=e=>Reflect.getPrototypeOf(e);function te(e,t,n=!1,o=!1){const r=w(e=e.__v_raw),s=w(t);n||(t!==s&&j(r,0,t),j(r,0,s));const{has:i}=fe(r),c=o?De:n?Ne:Q;return i.call(r,t)?c(e.get(t)):i.call(r,s)?c(e.get(s)):void(e!==r&&e.get(t))}function ne(e,t=!1){const n=this.__v_raw,o=w(n),r=w(e);return t||(e!==r&&j(o,0,e),j(o,0,r)),e===r?n.has(e):n.has(e)||n.has(r)}function oe(e,t=!1){return e=e.__v_raw,!t&&j(w(e),0,K),Reflect.get(e,"size",e)}function He(e){e=w(e);const t=w(this);return fe(t).has.call(t,e)||(t.add(e),V(t,"add",e,e)),this}function Pe(e,t){t=w(t);const n=w(this),{has:o,get:r}=fe(n);let s=o.call(n,e);s||(e=w(e),s=o.call(n,e));const i=r.call(n,e);return n.set(e,t),s?Te(t,i)&&V(n,"set",e,t):V(n,"add",e,t),this}function Ue(e){const t=w(this),{has:n,get:o}=fe(t);let r=n.call(t,e);r||(e=w(e),r=n.call(t,e)),o&&o.call(t,e);const s=t.delete(e);return r&&V(t,"delete",e,void 0),s}function ze(){const e=w(this),t=e.size!==0,n=e.clear();return t&&V(e,"clear",void 0,void 0),n}function re(e,t){return function(n,o){const r=this,s=r.__v_raw,i=w(s),c=t?De:e?Ne:Q;return!e&&j(i,0,K),s.forEach((l,a)=>n.call(o,c(l),c(a),r))}}function se(e,t,n){return function(...o){const r=this.__v_raw,s=w(r),i=ie(s),c=e==="entries"||e===Symbol.iterator&&i,l=e==="keys"&&i,a=r[e](...o),u=n?De:t?Ne:Q;return!t&&j(s,0,l?Se:K),{next(){const{value:h,done:f}=a.next();return f?{value:h,done:f}:{value:c?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function z(e){return function(...t){return e!=="delete"&&this}}function qt(){const e={get(r){return te(this,r)},get size(){return oe(this)},has:ne,add:He,set:Pe,delete:Ue,clear:ze,forEach:re(!1,!1)},t={get(r){return te(this,r,!1,!0)},get size(){return oe(this)},has:ne,add:He,set:Pe,delete:Ue,clear:ze,forEach:re(!1,!0)},n={get(r){return te(this,r,!0)},get size(){return oe(this,!0)},has(r){return ne.call(this,r,!0)},add:z("add"),set:z("set"),delete:z("delete"),clear:z("clear"),forEach:re(!0,!1)},o={get(r){return te(this,r,!0,!0)},get size(){return oe(this,!0)},has(r){return ne.call(this,r,!0)},add:z("add"),set:z("set"),delete:z("delete"),clear:z("clear"),forEach:re(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=se(r,!1,!1),n[r]=se(r,!0,!1),t[r]=se(r,!1,!0),o[r]=se(r,!0,!0)}),[e,n,t,o]}const[Jt,Xt,Zt,Qt]=qt();function lt(e,t){const n=t?e?Qt:Zt:e?Xt:Jt;return(o,r,s)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?o:Reflect.get(ue(n,r)&&r in o?n:o,r,s)}const en={get:lt(!1,!1)},tn={get:lt(!0,!1)},ut=new WeakMap,nn=new WeakMap,dt=new WeakMap,on=new WeakMap;function ht(e){return ae(e)?e:pt(e,!1,Kt,en,ut)}function Le(e){return pt(e,!0,Gt,tn,dt)}function pt(e,t,n,o,r){if(!de(e)||e.__v_raw&&(!t||!e.__v_isReactive))return e;const s=r.get(e);if(s)return s;const i=(c=e).__v_skip||!Object.isExtensible(c)?0:function(a){switch(a){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}(Ut(c));var c;if(i===0)return e;const l=new Proxy(e,i===2?o:n);return r.set(e,l),l}function ae(e){return!(!e||!e.__v_isReadonly)}function ft(e){return!(!e||!e.__v_isShallow)}function w(e){const t=e&&e.__v_raw;return t?w(t):e}const Q=e=>de(e)?ht(e):e,Ne=e=>de(e)?Le(e):e;function mt(e){B&&A&&it((e=w(e)).dep||(e.dep=Re()))}function vt(e,t){const n=(e=w(e)).dep;n&&Ee(n)}function N(e){return!(!e||e.__v_isRef!==!0)}function R(e){return _t(e,!1)}function ce(e){return _t(e,!0)}function _t(e,t){return N(e)?e:new rn(e,t)}class rn{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:w(t),this._value=n?t:Q(t)}get value(){return mt(this),this._value}set value(t){const n=this.__v_isShallow||ft(t)||ae(t);t=n?t:w(t),Te(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Q(t),vt(this))}}function g(e){return N(e)?e.value:e}var yt;class sn{constructor(t,n,o,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[yt]=!1,this._dirty=!0,this.effect=new ot(t,()=>{this._dirty||(this._dirty=!0,vt(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=o}get value(){const t=w(this);return mt(t),!t._dirty&&t._cacheable||(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}yt="__v_isReadonly";function le(){return le=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},le.apply(this,arguments)}function gt(e,t){if(e==null)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)t.indexOf(n=s[o])>=0||(r[n]=e[n]);return r}var We,Fe,an=(We=function(e){var t=Object.prototype.hasOwnProperty,n="~";function o(){}function r(l,a,u){this.fn=l,this.context=a,this.once=u||!1}function s(l,a,u,h,f){if(typeof u!="function")throw new TypeError("The listener must be a function");var p=new r(u,h||l,f),d=n?n+a:a;return l._events[d]?l._events[d].fn?l._events[d]=[l._events[d],p]:l._events[d].push(p):(l._events[d]=p,l._eventsCount++),l}function i(l,a){--l._eventsCount==0?l._events=new o:delete l._events[a]}function c(){this._events=new o,this._eventsCount=0}Object.create&&(o.prototype=Object.create(null),new o().__proto__||(n=!1)),c.prototype.eventNames=function(){var l,a,u=[];if(this._eventsCount===0)return u;for(a in l=this._events)t.call(l,a)&&u.push(n?a.slice(1):a);return Object.getOwnPropertySymbols?u.concat(Object.getOwnPropertySymbols(l)):u},c.prototype.listeners=function(l){var a=this._events[n?n+l:l];if(!a)return[];if(a.fn)return[a.fn];for(var u=0,h=a.length,f=new Array(h);u<h;u++)f[u]=a[u].fn;return f},c.prototype.listenerCount=function(l){var a=this._events[n?n+l:l];return a?a.fn?1:a.length:0},c.prototype.emit=function(l,a,u,h,f,p){var d=n?n+l:l;if(!this._events[d])return!1;var _,y,v=this._events[d],E=arguments.length;if(v.fn){switch(v.once&&this.removeListener(l,v.fn,void 0,!0),E){case 1:return v.fn.call(v.context),!0;case 2:return v.fn.call(v.context,a),!0;case 3:return v.fn.call(v.context,a,u),!0;case 4:return v.fn.call(v.context,a,u,h),!0;case 5:return v.fn.call(v.context,a,u,h,f),!0;case 6:return v.fn.call(v.context,a,u,h,f,p),!0}for(y=1,_=new Array(E-1);y<E;y++)_[y-1]=arguments[y];v.fn.apply(v.context,_)}else{var k,C=v.length;for(y=0;y<C;y++)switch(v[y].once&&this.removeListener(l,v[y].fn,void 0,!0),E){case 1:v[y].fn.call(v[y].context);break;case 2:v[y].fn.call(v[y].context,a);break;case 3:v[y].fn.call(v[y].context,a,u);break;case 4:v[y].fn.call(v[y].context,a,u,h);break;default:if(!_)for(k=1,_=new Array(E-1);k<E;k++)_[k-1]=arguments[k];v[y].fn.apply(v[y].context,_)}}return!0},c.prototype.on=function(l,a,u){return s(this,l,a,u,!1)},c.prototype.once=function(l,a,u){return s(this,l,a,u,!0)},c.prototype.removeListener=function(l,a,u,h){var f=n?n+l:l;if(!this._events[f])return this;if(!a)return i(this,f),this;var p=this._events[f];if(p.fn)p.fn!==a||h&&!p.once||u&&p.context!==u||i(this,f);else{for(var d=0,_=[],y=p.length;d<y;d++)(p[d].fn!==a||h&&!p[d].once||u&&p[d].context!==u)&&_.push(p[d]);_.length?this._events[f]=_.length===1?_[0]:_:i(this,f)}return this},c.prototype.removeAllListeners=function(l){var a;return l?this._events[a=n?n+l:l]&&i(this,a):(this._events=new o,this._eventsCount=0),this},c.prototype.off=c.prototype.removeListener,c.prototype.addListener=c.prototype.on,c.prefixed=n,c.EventEmitter=c,e.exports=c},We(Fe={exports:{}}),Fe.exports);const S={CS_HOOK_CB:Symbol("HOOK_CB"),IS_ANCHOR:Symbol("IS_ANCHOR"),NONE:Symbol("NONE"),SELF_CS:Symbol("SELF_CS"),CACHE_NODES:Symbol("CACHE_NODES"),IS_COMPONENT:Symbol("IS_COMPONENT"),STYLESHEET_SCOPED:Symbol("STYLESHEET_SCOPED"),STYLESHEET_ROOT:Symbol("STYLESHEET_ROOT")};class b extends an{static peek(){return b.source_stack.peek()||b.global_source}constructor(t,n){if(super(),this.host=void 0,this.__context={},this.__parent_source=b.source_stack.peek(),this.__container_source=this,this.states={mounted:!1,unmounted:!1},this.host=t,this.__parent_source)if(this.setupContainerSource(),this.on("throw",r=>{var s;return(s=this.__parent_source)==null?void 0:s.emit("throw",r)}),this.once("mount",()=>this.states.mounted=!0),this.once("unmount",()=>this.states.unmounted=!0),n){var o;((this.__container_source===this?(o=this.__container_source.__parent_source)==null?void 0:o.__container_source:this.__container_source)||this.__parent_source).once("unmount",()=>{this.emit("unmount"),this.dispose()})}else this.__parent_source.once("unmount",()=>{this.emit("unmount"),this.dispose()}),this.__parent_source.once("update_after",()=>{this.__parent_source.once("update_after",()=>{this.emit("unmount")})})}onMount(t){return this.states.mounted?t():this.once("mount",t),this}onUnmount(t){return this.states.unmounted?t():this.once("unmount",t),this}setupContainerSource(){for(;this.__container_source&&this.__container_source!==b.global_source;){var t;if((t=this.__container_source.host)!=null&&t[S.IS_COMPONENT])break;this.__container_source=this.__container_source.__parent_source}}dispose(){this.removeAllListeners(),this.__context={}}effect(t,n){const o=xe(t,n);return this.once("unmount",()=>rt(o)),o}}b.source_stack=new class{constructor(){this.items=void 0,this.items=[]}toArray(){return[...this.items]}push(e){this.items.push(e)}pop(){return this.items.pop()}peek(){return this.items[this.items.length-1]}size(){return this.items.length}isEmpty(){return this.items.length===0}},b.global_source=new b;const Y=(e,t,n)=>{const o=r=>{const s=r.relatedNode;s&&s===e.parentNode&&t(s,e)};return e.addEventListener(n,o),()=>e.removeEventListener(n,o)};class L{constructor(){this.source=void 0,this.viewAnchor=(()=>{const t=document.createTextNode("");return t[S.IS_ANCHOR]=!0,t})(),this.currentView=this.viewAnchor,this.renderEffectRunner=void 0,this.rawTarget=void 0,this.dispose_onDomInserted=void 0,this._initialized=!1}_initialize(){this._initialized||(this._initialized=!0,this.initialize())}initialize(){this.source||(this.source=new b(this)),this.source.once("unmount",()=>this.dispose())}ensureEffectRunner(){return this._initialize(),this.renderEffectRunner||(this.renderEffectRunner=xe(this.update.bind(this),{lazy:!1}),this.dispose_onDomInserted=Y(this.currentView,(t,n)=>{var o,r,s;(o=this.dispose_onDomInserted)==null||o.call(this),this.source.emit("mount"),this.viewAnchor!==n&&t.insertBefore(this.viewAnchor,n),n!==this.currentView&&(t.insertBefore(this.currentView,n),(s=n)&&s[S.IS_ANCHOR]||(r=n.parentElement)==null||r.removeChild(n))},"DOMNodeInserted")),this.renderEffectRunner}render(){return null}_update(){const t=this.currentView,n=this.render()||this.viewAnchor,o=t==null?void 0:t.parentElement;o&&o.replaceChild(n,t),this.currentView=n}update(){var t,n;if(this.source.states.unmounted||(t=this.source.__parent_source)!=null&&t.states.unmounted||(n=this.source.__container_source)!=null&&n.states.unmounted)this.dispose();else{this.source.emit("update_before");try{b.source_stack.push(this.source),this.source.emit("update"),this._update()}catch(o){requestAnimationFrame(()=>{this.source.emit("throw",o),console.error(o)})}finally{b.source_stack.pop(),this.source.emit("update_after")}}}dispose(){var t,n,o,r;(t=this.renderEffectRunner)==null||t.effect.stop(),(n=this.currentView.parentElement)==null||n.removeChild(this.currentView),(o=this.viewAnchor.parentElement)==null||o.removeChild(this.viewAnchor),(r=this.dispose_onDomInserted)==null||r.call(this)}static fromRender(t){const n=new L;return n.render=()=>L.warpView(t()),n.rawTarget=t,n}static fromRef(t){const n=new L;return n.render=()=>L.warpView(g(t)),n.rawTarget=t,n}static warpView(t){return t instanceof Node||t===null?t:document.createTextNode(`${t}`)}static warp(t){if(typeof t!="function"&&!N(t))return L.warpView(t);let n;if(typeof t=="function")n=L.fromRender(t);else{if(!N(t))throw new Error("Unknown view type.");n=L.fromRef(t)}return n.ensureEffectRunner(),n.currentView}}let wt;wt=S.IS_COMPONENT;class bt extends L{get[wt](){return!0}constructor(t,n,o){super(),this._define=void 0,this.props=void 0,this.children=void 0,this.state=void 0,this._define=t,this.props=n,this.children=o}initialize(){this.initializeComponent()}initializeComponent(){this.source=new b(this,"__node_cached"in this.props),this.source.once("unmount",()=>this.dispose()),this.installSource(),this.initializeSetup()}initializeSetup(){const{props:t,children:n}=this;he(),b.source_stack.push(this.source),this.source.emit("setup_before"),this.state=this._define.setup(t,n),this.source.emit("setup_after"),b.source_stack.pop(),pe()}render(){const t=this._define.render(this.props,this.state,this.children);return L.warp(t)}installSource(){var t,n;(t=(n=this._define)[S.CS_HOOK_CB])==null||t.call(n,this.source)}}class cn extends bt{constructor(t,n,o){const r={setup:(s,i)=>{const c={};return r.render=t(s,c,i),c},render:()=>{}};r[S.CS_HOOK_CB]=t[S.CS_HOOK_CB],super(r,n,o),this._function_define=void 0,this._function_define=t}}class ln{constructor(t,n,o){this.tagNameOrDome=void 0,this.props=void 0,this.children=void 0,this.node=void 0,this.source=new b(this),this.tagNameOrDome=t,this.props=n,this.children=o,this.source.once("unmount",()=>this.dispose()),this.buildNode()}dispose(){var t,n;(t=this.node)==null||(n=t.parentElement)==null||n.removeChild(this.node)}buildNode(){if(this.node)return this.node;this.node=this.tagNameOrDome instanceof Element?this.tagNameOrDome:document.createElement(this.tagNameOrDome),he(),this.hydrateChildren(),pe();for(const[t,n]of Object.entries(this.props))this.hydrateAttribute(t,n);return this.node}isValidAttributeName(t){return/^[a-zA-Z][\w-]*$/.test(t)}hydrateAttribute(t,n){if(!t.startsWith("_")&&!t.startsWith("$")&&this.isValidAttributeName(t)){switch(t){case"ref":return void(typeof n=="function"?n(this.node):N(n)&&(n.value=this.node));case"effect":return void(typeof n=="function"&&this.source.effect(()=>n(this.node),{lazy:!1}))}if(t.startsWith("on")&&typeof n=="function"){const o=t.slice(2).toLowerCase(),r=this.node["__cb_"+t];return r&&this.node.removeEventListener(o,r),this.node["__cb_"+t]=n,void this.node.addEventListener(o,n)}this.source.effect(()=>{const o=g(n);if(t!=="value")if(t!=="defaultValue")typeof o!="boolean"?this.node.setAttribute(t,o):o?this.node.setAttribute(t,""):this.node.removeAttribute(t);else{if(this.node.value)return;this.node.value=o}else this.node.value=o},{lazy:!1})}}hydrateChildren(){const{children:t}=this;for(const n of t){if(n==null)continue;const o=L.warp(n);o&&this.node.appendChild(o)}}}function H(e){return e?e(b.peek()):b.peek()}const un=(e,t,n=!1)=>H(o=>o[n?"once":"on"](e,t)),dn=e=>H(t=>t.onMount(e)),T=e=>H(t=>t.onUnmount(e)),hn=e=>un("throw",e),Be=(e,t)=>{var n,o;if(!e)return;const r=b.peek(),{__container_source:s}=r;s&&((n=s.__context)[o=S.CACHE_NODES]||(n[o]={}),s.__context[S.CACHE_NODES][e]=t)},St=(e,t={},n=[])=>{const{key:o}=t;delete t.key,o&&(t.__node_cached=!0);const r=(s=>{var i,c;if(!s)return;const l=b.peek(),{__container_source:a}=l;return a?((i=a.__context)[c=S.CACHE_NODES]||(i[c]={}),a.__context[S.CACHE_NODES][s]):void 0})(o);if(r)return r;if(typeof e=="function"){const s=new cn(e,t,n);return Be(o,s),s}if(typeof e=="object"&&typeof e.render=="function"&&typeof e.setup=="function"){const s=new bt(e,t,n);return Be(o,s),s}throw new Error(`Valid define type [${typeof e}] is not supported for reactiveHydrate.`)},pn=(e,t,...n)=>{var o;if(t||(t={}),n||(n=[]),n=((o=n)==null?void 0:o.flat())||n,typeof e=="string"||e instanceof Element)return new ln(e,t,n).node;const r=St(e,t,n);return r.ensureEffectRunner(),r.currentView},m=pn,fn=(e,t,n)=>{const o=e instanceof Element?e:document.querySelector(e);if(!o)throw new Error(`Could not find container: ${e}`);if(t instanceof Element)return o.appendChild(t),null;const r=St(t,n);return r.ensureEffectRunner(),o.appendChild(r.currentView),r},P=(e,t)=>{let n=null;const o=xe(()=>{n==null||n(),e(s=>n=s)},le({lazy:!1},t)),r=()=>{n==null||n(),rt(o),n=null};return T(r),[o,r]},I=(e,t,n)=>{let o;return P(()=>{const r=typeof e=="function"?e(o):g(e);ve(()=>t(r,o)),o=r},n)},me=(e,t)=>{const n=R();return P(()=>{const o=O(n),r=e(o);var s,i;s=o,i=r,Object.is(s,i)||s===i||(n.value=r)},t),n},ve=(e,...t)=>{he();const n=e(...t);return pe(),n},O=e=>ve(()=>g(e));function mn(e){const t=N(e)?e:R(e);return[()=>g(t),n=>{if(typeof n=="function"){const o=O(t);t.value=n(o)}else t.value=n},t]}const vn=(...e)=>e.map(t=>g(t)),Et=vn;function _n(e,t=S.NONE){let n=b.peek();for(;n;){const o=n.__context;if(e in o)return o[e];n=n.__parent_source}if(t===S.NONE)throw new Error(`The key '${e}' is not defined in context`);return t}function yn(e,t){const n=b.peek();if(n==null||!n.__container_source)throw new Error("inject must be called inside Component");n.__container_source.__context[e]=t}const kt=(e,t)=>(((n,o)=>{if(!o)return;const r=n[S.CS_HOOK_CB];n[S.CS_HOOK_CB]=s=>{r==null||r(s),o(s)}})(e,t),e),gn=e=>new Proxy({},{get(t,n,o){let r=e;for(;r!==void 0;){const s=r.__context;if(n in s)return s[n];r=r.__parent_source}},set:(t,n,o,r)=>(e.__context[n]=o,!0)}),Ct=e=>{const t=H();if(!t.__container_source)throw new Error("Container source not found, must be inside a container component to use element source");const n=gn(t.__container_source);return e==null||e(n),n},wn=kt({setup({fallbackRender:e,onError:t,render:n}){const o=b.peek();let r=R(null);o.on("throw",i=>{i instanceof Error&&(t==null||t(i),r.value=i)});const s=R(1);return{catchError:r,rerenderRef:s,fallbackRender:e,childrenRender:n}},render(e,{fallbackRender:t,rerenderRef:n,catchError:o,childrenRender:r}){const s=()=>{n.value=Date.now(),o.value=null};return o.value?ve(()=>t(o.value,s)):r()}}),Ot=kt({setup(e,[t,...n]){const o={anchor:document.createTextNode(""),children:[],parentNode:null},r=H(),s=(i=typeof t=="function"?t:()=>[t,...n],()=>{return(h=i(),Array.isArray(h)?h:[h]).flat(1).map(f=>L.warp(f)).filter(Boolean);var h});var i;const[c,l]=P(()=>{b.source_stack.push(r),(()=>{const h=o.children,f=s(),{parentNode:p,anchor:d}=o;if(!p)return;const _=Math.max(f.length,h.length);for(let y=0;y<_;y++){const v=f[y],E=h[y];if(!v&&E)E.remove();else if(!E&&v)p.insertBefore(v,d);else if(E&&v){if(E===v)continue;p.replaceChild(v,E)}}o.children=f})(),b.source_stack.pop()}),a=Y(o.anchor,h=>{o.parentNode=h,c()},"DOMNodeInserted"),u=Y(o.anchor,h=>{o.children.forEach(f=>f==null?void 0:f.remove()),o.parentNode=null},"DOMNodeRemoved");return T(()=>{a(),u(),l(),o.anchor.remove(),o.children.forEach(h=>h==null?void 0:h.remove())}),H(h=>{var f;(f=h.__parent_source)==null||f.once("update_before",()=>{var p;o.children.forEach(d=>d==null?void 0:d.remove()),(p=h.__parent_source)==null||p.once("update_after",()=>{o.anchor.remove()})})}),o},render:(e,t)=>t.anchor});var ke=function e(t,n){if(t===n)return!0;if(t&&n&&typeof t=="object"&&typeof n=="object"){if(t.constructor!==n.constructor)return!1;var o,r,s;if(Array.isArray(t)){if((o=t.length)!=n.length)return!1;for(r=o;r--!=0;)if(!e(t[r],n[r]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((o=(s=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(r=o;r--!=0;)if(!Object.prototype.hasOwnProperty.call(n,s[r]))return!1;for(r=o;r--!=0;){var i=s[r];if(!e(t[i],n[i]))return!1}return!0}return t!=t&&n!=n},$e=jt({__proto__:null,default:ke},[ke]);function Tt(e){if(function(t){return t&&typeof t=="object"&&t.constructor===Object}(e)){const t={};return Object.keys(e).forEach(n=>{t[n]=Tt(e[n])}),t}return e}const Ve=e=>Tt(w(e)),bn=({items:e,render:t,needUpdate:n=(o,r)=>!(($e==null?void 0:ke)||$e)(o,r)})=>{const o=ce([]),r=H(),[s]=P(()=>{const i=typeof e=="function"?e():g(e);b.source_stack.push(r);try{((c,l)=>{const a=O(o);for(let h=0;h<Math.max(a.length,c.length);h++){const f=a[h],p=c[h];if(f!==void 0&&p!==void 0){if(!f.node||ve(()=>n(p,f.data))){const d=t(p,h,c,l,f.node);f.node=d,f.data=Ve(p)}}else if(f===void 0){const d=t(p,h,c,l);a.push({data:Ve(p),node:d})}else p===void 0&&(f.del=!0)}const u=a.filter(h=>h.del!==!0);o.value=u})(i,()=>s==null?void 0:s.effect.run())}finally{b.source_stack.pop()}});return()=>m(Ot,{},()=>o.value.filter(i=>!i.del).map(i=>i.node))},Sn=["container"],En=(e,t,n)=>{let{container:o}=e,r=gt(e,Sn);const s=document.createTextNode(""),i=o||document.createElement("div");return document.body.appendChild(i),m(i,r,...n),T(()=>{var c;(c=i.parentElement)==null||c.removeChild(i)}),()=>s};function kn(e,t,n=""){const o=t===":root",r=o?"":t,s=e.split(",").map(l=>l.trim()).filter(Boolean);let i=o?[""]:r.split(",").map(l=>l.trim()).filter(Boolean);var c;return(c=i,s.flatMap(l=>c.map(a=>[l,a]))).map(([l,a])=>l.startsWith("&")?l.replace(/&/g,a):`${a} ${l}`).map(l=>`${l.replace(n||"","")}${n||""}`.trim()).join(",")}const Ye=e=>e.nodeType===Node.DOCUMENT_NODE||e.nodeType===Node.DOCUMENT_FRAGMENT_NODE,Ke=(e,t,n)=>{const{updateCSSText:o,installSheet:r,uninstallSheet:s}=n;let i=!1;return{parseStyle:c=>{const l=function(a,u,{beautify:h=!1,scopedSelector:f=""}){const p=h?`
`:"",d=[{nodeSelector:u+f,cssObject:a}],_=[];for(;d.length>0;){const{nodeSelector:v,cssObject:E}=d.pop(),k={selector:v,cssText:""};for(const C in E){const x=E[C];if(typeof x=="object"){const U=kn(C,v,f);d.push({nodeSelector:U,cssObject:x})}else{if(typeof x=="string"&&!x.trim()||x==null)continue;k.cssText+=`${y=C,y.replace(/[A-Z]/g,U=>`-${U.toLowerCase()}`)}: ${E[C]};${p}`}}k.cssText.trim()&&_.push(k)}var y;return _.map(v=>`${v.selector}{${v.cssText}}`).join(`
`).trim()}(e(),c,{scopedSelector:t});o(l)},applySheet:c=>{i||(i=!0,r(c))},removeSheet:c=>{i&&(i=!1,s(c))}}},Ge=()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(36),Rt=e=>{const{scopedId:t,className:n}=e,o=!!t,r=document.createTextNode("");let s;(({props:a,scopedId:u,rootNodeSelector:h,styleOrFunc:f},p)=>{const d=(C=>{if(!C)throw new Error("styleOrFn is required.");return typeof C=="function"?C:()=>C})(a.styleFn||a.style||f),_=Ct(),{applySheet:y,removeSheet:v,parseStyle:E}=((C,x,U)=>U?((J,X)=>{const M=new CSSStyleSheet,{parseStyle:_e,applySheet:ye,removeSheet:ge}=Ke(J,X,{updateCSSText(D){M.replaceSync(D)},installSheet(D=document){Ye(D)&&(D.adoptedStyleSheets=[...D.adoptedStyleSheets,M])},uninstallSheet(D=document){Ye(D)&&(D.adoptedStyleSheets=[...D.adoptedStyleSheets].filter(ee=>ee!==M))}});return{sheet:M,parseStyle:_e,applySheet:ye,removeSheet:ge}})(C,x):((J,X)=>{const M=document.createElement("style"),{parseStyle:_e,applySheet:ye,removeSheet:ge}=Ke(J,X,{updateCSSText(D){M.innerHTML=D},installSheet(D){D.appendChild(M)},uninstallSheet(D){var ee;(ee=M.parentNode)==null||ee.removeChild(M)}});return{styleDOM:M,parseStyle:_e,applySheet:ye,removeSheet:ge}})(C,x))(()=>d(_),u?`[data-s-${u}]`:void 0,a.adopted),{[S.STYLESHEET_ROOT]:k}=_;P(()=>{let C=h;var x;a.adopted&&k&&k instanceof Node&&((x=k).nodeType===Node.DOCUMENT_NODE||x.nodeType===Node.DOCUMENT_FRAGMENT_NODE)&&(C=":root"),E(C)}),a.adopted||(k==null?void 0:k.nodeType)===Node.DOCUMENT_FRAGMENT_NODE?(y(k),T(()=>v(k))):(T(Y(p,y,"DOMNodeInserted")),T(Y(p,v,"DOMNodeRemoved")))})(e,r);const i=`s-${t}`.replace(/-([a-z])/g,function(a,u){return u.toUpperCase()}),c=a=>{if("dataset"in a&&typeof a.dataset=="object"){if(a[S.STYLESHEET_SCOPED]!==void 0&&a[S.STYLESHEET_SCOPED]!==i)return;a.dataset[i]="",a[S.STYLESHEET_SCOPED]=i}},l=a=>{if("dataset"in a&&typeof a.dataset=="object"){if(a[S.STYLESHEET_SCOPED]!==void 0&&a[S.STYLESHEET_SCOPED]!==i)return;delete a.dataset[i],delete a[S.STYLESHEET_SCOPED]}};return T(Y(r,a=>{o&&(c(a),(u=>{s=new MutationObserver(h=>{for(const f of h){const{addedNodes:p,removedNodes:d}=f;p.forEach(_=>c(_)),d.forEach(_=>l(_))}}),s.observe(u,{childList:!0,subtree:!0})})(a)),n&&a instanceof Element&&a.classList.add(n)},"DOMNodeInserted")),T(Y(r,a=>{var u;l(a),(u=s)==null||u.disconnect(),n&&a instanceof Element&&a.classList.remove(n)},"DOMNodeRemoved")),{anchor:r}},Cn=(e,t,[n])=>{const o=e.scoped?Ge():void 0,r=`s-${Ge()}`,{anchor:s}=Rt({props:e,styleOrFunc:n,rootNodeSelector:`.${r}`,className:r,scopedId:o});return()=>s},On=(e,t,[n])=>{const{anchor:o}=Rt({props:le({},e,{scoped:!1}),styleOrFunc:n,rootNodeSelector:":root"});return()=>o},Tn=({component:e,render:t,fallback:n,error:o})=>{const r=R("fulfilled");hn(async c=>{var l;!(l=c)||typeof l!="object"&&typeof l!="function"||typeof l.then!="function"||(r.value="pending",c.then(()=>r.value="fulfilled"),c.catch(()=>r.value="rejected"))});const s=e?m(e):t?m(()=>()=>L.warpView(t())):null,i=m(()=>()=>{switch(r.value){case"pending":return n();case"fulfilled":return s;case"rejected":return(o||n)()}});return()=>i},Rn=["tagName","render"],xn=(e,t,n)=>{let{tagName:o="div",render:r}=e,s=gt(e,Rn);const i=m(o,s,...n),c=i.attachShadow({mode:"open"});return(l=>{const a=H(),u=Ct();let h;const f=()=>{h=u[S.STYLESHEET_ROOT],u[S.STYLESHEET_ROOT]=l};a.on("update_before",f),a.on("update_after",()=>{u[S.STYLESHEET_ROOT]=h,h=void 0}),f()})(c),()=>{let l=r();return Array.isArray(l)||(l=[l]),l.map(a=>L.warp(a)).filter(Boolean).forEach(a=>c.appendChild(a)),i}},Dn=(e,...t)=>{const n=[];for(let o=0;o<e.length;o++){n.push(document.createTextNode(e[o]));const r=t[o],s=document.createTextNode("");typeof r=="function"?P(()=>s.textContent=r()):N(r)&&P(()=>s.textContent=String(r.value)),n.push(s)}return n},xt=(e,...t)=>e.reduce((n,o,r)=>{var s;return n+=o,r<t.length&&(n+=g(typeof(s=t[r])=="function"?s():s)),n},""),Ln=(e,...t)=>{const n=function(o,r,s=!1){let i,c;const l=typeof o=="function";return l?(i=o,c=Mt):(i=o.get,c=o.set),new sn(i,c,l||!c,s)}(()=>xt(e,...t));return T(()=>n.effect.stop()),n},Nn=e=>{let t=null,n=null;return(o,...r)=>{const s=H(),i=R(t);if(!t){const c=(n||(n=e().then(l=>t=l))).then(l=>{O(i)||(i.value=l)});s.emit("throw",c)}return()=>i.value?m(i.value.default,o,...r):null}};var G={__proto__:null,ErrorBoundary:wn,Fragment:Ot,ReactiveList:bn,Portal:En,Style:Cn,GlobalStyle:On,Suspense:Tn,Scope:xn,text:Dn,raw:xt,rawRef:Ln,lazy:Nn};const jn=(e,t)=>{const n=R("");return P(()=>{const o=O(n);o&&URL.revokeObjectURL(o),n.value=URL.createObjectURL(new Blob([g(e)],{type:"text/plain",...t}))}),T(()=>URL.revokeObjectURL(n.value)),n},An="modulepreload",Mn=function(e,t){return new URL(e,t).href},qe={},In=function(t,n,o){if(!n||n.length===0)return t();const r=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=Mn(s,o),s in qe)return;qe[s]=!0;const i=s.endsWith(".css"),c=i?'[rel="stylesheet"]':"";if(!!o)for(let u=r.length-1;u>=0;u--){const h=r[u];if(h.href===s&&(!i||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${c}`))return;const a=document.createElement("link");if(a.rel=i?"stylesheet":An,i||(a.as="script",a.crossOrigin=""),a.href=s,document.head.appendChild(a),i)return new Promise((u,h)=>{a.addEventListener("load",u),a.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t())},Hn=()=>In(()=>import("https://unpkg.com/@monaco-editor/loader@1.3.3/lib/umd/monaco-loader.js"),[],import.meta.url).then(()=>window.monaco_loader).then(e=>e.init()),Pn=({value:e,onChange:t,isDark:n,onSave:o,...r})=>{let s,i,c;return P(()=>{const l=g(n);c!=null&&c.editor&&(l?c.editor.setTheme("vs-dark"):c.editor.setTheme("vs"))}),T(()=>{s==null||s.dispose()}),N(e)&&I(e,l=>{(i==null?void 0:i.getValue())!==l&&(i==null||i.setValue(l))}),()=>m("div",{...r,ref:async l=>{c=await Hn(),i=c.editor.createModel(O(e),"typescript",c.Uri.file("main.ts")),i.onDidChangeContent(()=>t(i.getValue())),c.languages.typescript.typescriptDefaults.setCompilerOptions({jsx:"react"}),c.languages.typescript.typescriptDefaults.setDiagnosticsOptions({noSemanticValidation:!0,noSyntaxValidation:!0}),s=c.editor.create(l,{automaticLayout:!0,wordWrap:!0,theme:O(n)?"vs-dark":"vs"}),s.setModel(i),o&&s.addCommand(c.KeyMod.CtrlCmd|c.KeyCode.KeyS,()=>{o(i.getValue())})}})};class Un{constructor(){q(this,"idx",0);q(this,"demos",[]);q(this,"currentDemo",null)}registerDemo(t,n,o){const r={id:this.idx++,name:t,version:n,code:o};this.demos.push(r),this.currentDemo||(this.currentDemo=r)}selectDemo(t){const n=this.demos.find(o=>o.id===Number(t));if(!n)throw new Error(`Cannot find demo with name ${name}`);return this.currentDemo=n,n}}const zn=`import { rh, ref, mount, unref, setupWatch, inject, provide } from "@rhjs/rh";

const useCurrentPage = () => provide("currentPage");
const injectCurrentPage = (currentPage) => inject("currentPage", currentPage);

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

const Switch = ({ branches }) => {
  const currentBranch = useCurrentPage();
  return () => <div>{branches[unref(currentBranch)]}</div>;
};

const Goto = ({ branch }) => {
  const currentBranch = useCurrentPage();
  return () => (
    <button onClick={() => (currentBranch.value = branch)}>{branch}</button>
  );
};

const App = () => {
  const currentBranch = ref("page1");
  injectCurrentPage(currentBranch);
  return () => (
    <div>
      <div>
        <Goto branch={"page1"} />
        <Goto branch={"page2"} />
        <Goto branch={"page3"} />
      </div>
      <p>{currentBranch}</p>
      <Switch
        branches={{
          page1: () => <Counter key={"page1"} prefix={"🐷"} />,
          page2: () => <Counter key={"page2"} prefix={"🐹"} />,
          page3: () => <Counter key={"page3"} prefix={"🐰"} />,
        }}
      />
    </div>
  );
};

mount("#app", App);
`,Wn=`import { rh, ref, mount, unref, computed } from "@rhjs/rh";

const App = () => {
  const nowDate = ref(new Date());
  const timeStr = computed(() => unref(nowDate).toLocaleTimeString());
  /**
   * Update the date value every 100ms using setInterval.
   * However, the computed property \`timeStr\` will only be recomputed and the view updated
   * when the \`nowDate\` ref value changes (is "dirty"), thanks to reactivity system.
   * */
  setInterval(() => (nowDate.value = new Date()), 100);
  return () => (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {timeStr}.</h2>
    </div>
  );
};

mount("#app", App);
`,Fn=`import {
  rh,
  ref,
  mount,
  onUnmount,
  useRef,
  Style,
  ReactiveList,
  setupWatch,
  onMount,
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
  onUnmount(() => clearInterval(interval));
  onMount(updateTimeSince);

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
            <small>⏰{task.done ? 'done' : <TimeSince date={task.date} />}</small>
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
                redo
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
`,Bn=`import { Button, ensureFluentUILoaded } from "@rhjs/fluent-web-components";
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
`,$=new Un;$.registerDemo("HelloWorld","0.1.1-dev.20",Wn);$.registerDemo("Counter","0.1.1-dev.20",zn);$.registerDemo("TodoApp","0.1.1-dev.20",Fn);$.registerDemo("Counter","0.0.34",Bn);const Je=R($.currentDemo),Dt=()=>({mgr:$,currentDemo:Je,selectDemo(e){Je.value=$.selectDemo(e)},demos:$.demos}),$n=()=>{const{selectDemo:e,currentDemo:t,demos:n}=Dt();return()=>m("div",null,m("select",{onChange:o=>e(o.target.value)},n.map(o=>m("option",{value:o.id},o.name," @",o.version))))},je=({styleFn:e,isDark:t,...n},o,r)=>()=>m("div",{...n},m(G.Style,{styleFn:()=>({height:"30px",display:"inline-flex",alignItems:"center",justifyContent:"center",paddingLeft:"12px",paddingRight:"12px",cursor:"pointer",userSelect:"none",marginLeft:"4px","&:hover":{backgroundColor:g(t)?"rgba(64,64,64,1)":"rgba(64,64,64,0.1)"},"&:active":{outline:"solid 1px",outlineColor:g(t)?"#fff":"rgba(64,64,64,1)"},...e==null?void 0:e()})}),r),Vn=({isDark:e})=>()=>m(je,{onClick:()=>{N(e)&&(e.value=!O(e))},isDark:e},m("span",null,()=>g(e)?"🌘":"🌖"));function Xe({isDark:e,href:t,target:n="_blank"},o,r){return()=>m(je,{isDark:e,onClick:()=>{window.open(t,n)}},m("a",{href:t,target:n,style:"text-decoration: none; color: inherit;"},r))}const Yn=({isDark:e})=>()=>m("div",null,m(G.Style,{styleFn:()=>({paddingLeft:"12px",paddingRight:"12px",height:"100%",width:"calc(100% - 24px)",display:"grid",gridTemplateColumns:"minmax(0, 1fr) 12px minmax(0, 1fr)"})}),m("div",{style:"display: inline-flex; align-items: center;"},m("span",{style:"user-select: none;word-break: keep-all;white-space: nowrap;"},"🧩 ",m("b",null,"R"),m("small",null,"eactive"),m("b",null,"H"),m("small",null,"ydrate"),m("b",null,"JS")," PLAYGROUND"),m(Vn,{isDark:e}),m($n,null)),m("div",null),m("div",{style:"display: inline-flex; align-items: center; justify-content: right;"},m(Xe,{isDark:e,href:"https://zhzluke96.github.io/rhjs-demos/#demo",target:"_self"},"demos"),m(Xe,{isDark:e,href:"https://github.com/zhzLuke96/rh.js"},"github"))),{Style:Kn}=G,Gn=()=>document.querySelectorAll("iframe").forEach(e=>e.style.pointerEvents="none"),qn=()=>document.querySelectorAll("iframe").forEach(e=>e.style.pointerEvents="auto"),Jn=({isHorizontal:e,onResize:t,ref:n})=>{const[o,r,s]=mn(!1),i=()=>r(!0),c=()=>r(!1),l=p=>{t(p.clientX,p.clientY)},a=p=>{const d=p.touches[0];t(d.clientX,d.clientY)},u=R(null);I(s,p=>{p?(Gn(),window.addEventListener("mousemove",l),window.addEventListener("mouseup",c),window.addEventListener("touchmove",a),window.addEventListener("touchend",c)):(qn(),window.removeEventListener("mousemove",l),window.removeEventListener("mouseup",c),window.removeEventListener("touchmove",a),window.removeEventListener("touchend",c))}),I(u,p=>{p&&(p.addEventListener("mousedown",i,{passive:!0}),p.addEventListener("touchstart",i,{passive:!0}))}),T(()=>{var p,d;(p=g(u))==null||p.removeEventListener("mousedown",i),(d=g(u))==null||d.removeEventListener("touchstart",i)});const h=_n("isDark"),f=me(()=>g(h)?"rgba(255,255,255,0.3)":"rgba(0,0,0,0.3)");return()=>m("div",{ref:p=>{u.value=p,n&&(n.value=p)}},m(Kn,{styleFn:()=>({backgroundColor:g(s)?g(f):"",width:e?"100%":"12px",height:e?"12px":"100%",zIndex:g(s)?"10":"auto",cursor:e?"row-resize":"col-resize",userSelect:"none",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"12px","&:hover":{backgroundColor:g(f)}})}),"⚪⚪⚪")},Xn=()=>{const e=`
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
`.trim(),t=URL.createObjectURL(new Blob([e],{type:"text/html"}));return T(()=>URL.revokeObjectURL(t)),`${t}#?embedded=${encodeURIComponent(location.origin)}`},Zn=(e,t,n="")=>`
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
`.trim();function Qn(e,t){const n=ce(t),o=r=>{n.value=e(O(n),r)};return[Le(n),o]}const eo=(e,t,n,o)=>{const r={sendToIframe(c){var l,a;(a=(l=O(e))==null?void 0:l.contentWindow)==null||a.postMessage(c,"*")},sendToDevtools(c){var l,a;(a=(l=O(t))==null?void 0:l.contentWindow)==null||a.postMessage(c,"*")}},s=()=>{const{codeInjected:c,codeURL:l}=g(n);if(!c){if(!l){setTimeout(s,3);return}requestAnimationFrame(()=>{r.sendToIframe({event:"CODE_UPDATE",value:l}),o({type:"CODE_INJECTED"})})}},i=c=>{var u,h;const[l,a]=Et(e,t);!l||!a||((h=(u=c.data)==null?void 0:u.includes)!=null&&h.call(u,"Debugger.enable")&&(console.log("Debugger.enable"),o({type:"Debugger.enable"}),s()),c.source===l.contentWindow?a.contentWindow.postMessage(c.data,"*"):c.source===a.contentWindow&&l.contentWindow.postMessage({event:"DEV",data:c.data},"*"))};return window.addEventListener("message",i),T(()=>window.removeEventListener("message",i)),r},to=(e,t)=>{const{importMap:n,isDark:o}=e,r=me(()=>{const s=Zn(O(o),JSON.stringify({imports:g(n)}));return URL.createObjectURL(new Blob([s],{type:"text/html"}))});return I(r,(s,i)=>{i&&URL.revokeObjectURL(i),t({type:"HTML_CHANGED",iframeSrc:s||""})}),T(()=>URL.revokeObjectURL(O(r)||"")),{iframeSrc:r}},no=e=>{const{isDark:t,code:n}=e,o=ce(null),r=ce(null),s=d=>{var _;return(_=d.contentDocument)==null?void 0:_.documentElement.classList.toggle("dark",O(t))},i=d=>{const _=O(o);_&&(_.src=d)},c=()=>{var d,_;(_=(d=O(o))==null?void 0:d.contentWindow)==null||_.location.reload()},l=()=>{var d,_;(_=(d=O(r))==null?void 0:d.contentWindow)==null||_.location.reload()};I(()=>g(t),d=>{const _=g(o);_&&s(_)});const[a,u]=Qn((d,_)=>{switch(_.type){case"IFRAME_READY":s(_.iframe);let y=d.codeInjected;return{...d,codeInjected:y,iframeReady:!0};case"DEVTOOLS_IFRAME_READY":return{...d,devtoolsIframeReady:!0};case"DEV_LOADED":return{...d,devLoaded:!0};case"HTML_CHANGED":return i(_.iframeSrc),l(),{...d,iframeReady:!1,devtoolsIframeReady:!1,devLoaded:!1,codeInjected:!1,darkInjected:!1};case"HTML_RELOAD":return setTimeout(()=>{c(),l()}),{...d,iframeReady:!1,devtoolsIframeReady:!1,devLoaded:!1,codeInjected:!1,darkInjected:!1};case"CODE_UPDATE":return{...d,codeURL:_.codeURL};case"CODE_INJECTED":return{...d,codeInjected:!0}}return d},{iframeReady:!1,devtoolsIframeReady:!1,devLoaded:!1,codeInjected:!1,codeURL:O(n)}),{sendToDevtools:h,sendToIframe:f}=eo(o,r,a,u);I(()=>g(n),d=>{u({type:"CODE_UPDATE",codeURL:d}),a.value.iframeReady&&requestAnimationFrame(()=>{f({event:"CODE_UPDATE",value:d}),u({type:"CODE_INJECTED"})})});const{iframeSrc:p}=to(e,u);return I(o,d=>{d==null||d.addEventListener("load",()=>u({type:"IFRAME_READY",iframe:d}))}),I(r,d=>{d==null||d.addEventListener("load",()=>u({type:"DEVTOOLS_IFRAME_READY",devIframe:d}))}),{iframeSrc:p,iframeRef:o,devtoolsIframeRef:r,previewState:a,dispatch:u,sendToDevtools:h,sendToIframe:f}},oo=e=>{const{importMap:t,code:n,devtools:o,isDark:r,...s}=e,i=R(null),{iframeSrc:c,iframeRef:l,devtoolsIframeRef:a,previewState:u,dispatch:h}=no(e),f=Xn(),p=me(()=>`width: 100%; height: 100%; ${g(o)?"display: block;":"display: none;"}`),d=R(.625),_=R(null),y=(v,E)=>{const[k,C]=Et(i,_);if(!k||!C)return;let x,U;const J=k.getBoundingClientRect();x=E-J.top-C.offsetHeight/2,U=k.offsetHeight-C.offsetHeight;const X=x/U;d.value=X};return()=>m("div",{...s,ref:i},m(G.Style,{styleFn:()=>{const v=g(d);return{display:"grid",height:"100%",width:"100%",gridTemplateRows:g(o)?`30px minmax(0, ${v}fr) 12px minmax(0, ${1-v}fr)`:"30px minmax(0, 1fr)"}}}),m("div",{style:"border-bottom: 1px solid;border-top: 1px solid;overflow: hidden;"},m(je,{title:"reload page",isDark:r,onClick:()=>h({type:"HTML_RELOAD"})},"♻️relaod")),m("iframe",{ref:l,src:c,style:"width: 100%;height: 100%;",frameBorder:0,sandbox:"allow-popups-to-escape-sandbox allow-scripts allow-popups allow-forms allow-pointer-lock allow-top-navigation allow-modals allow-same-origin"}),m("div",null,m(Jn,{ref:_,isHorizontal:!0,onResize:y})),m("iframe",{ref:a,style:p,src:f,frameBorder:"0"}))},ro=({isDark:e})=>()=>m(G.GlobalStyle,{styleFn:()=>({fontFamily:"'Karla', system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",lineHeight:"1.5",fontWeight:"400",colorScheme:g(e)?"light dark":"dark",color:g(e)?"rgba(255, 255, 255, 0.87)":"#242424",backgroundColor:g(e)?"#333":"#fff",fontSynthesis:"none",textRendering:"optimizeLegibility","-webkitFontSmoothing":"antialiased","-moz-osxFontSmoothing":"grayscale","-webkitTextSizeAdjust":"100%",height:"100vh",width:"100vw",body:{margin:"0",minWidth:"100vw",minHeight:"100vh",width:"100%",height:"100%"},"#app":{width:"100%",height:"100%"}})});function so(){return new Worker(""+new URL("complier.worker-026b4f92.js",import.meta.url).href)}class io{constructor(){q(this,"registry",{})}registerWorker(t,n){this.registry[t]?console.warn(`Worker of type ${t} already registered.`):this.registry[t]=n}removeWorker(t){delete this.registry[t]}getWorker(t){const n=this.registry[t];if(n)return n;throw new Error(`No worker of type ${t} registered.`)}postMessage(t,n){this.getWorker(t).postMessage(n)}listenRecv(t,n){const o=this.getWorker(t);let r;const s=i=>{const{message_token:c}=i.data||{};if(c!==n)return;const l={...i.data};delete l.message_token,r(l),o.removeEventListener("message",s)};return o.addEventListener("message",s),{recv:new Promise((i,c)=>{r=i}),dispose:()=>o.removeEventListener("message",s)}}}class ao{constructor(){q(this,"registry",new io);this.initialize()}async initialize(){this.registry.registerWorker("complier",new so)}worker_caller(t,n){const o=Math.random().toString(36).slice(2),r={...n,message_token:o};return this.registry.postMessage(t,r),this.registry.listenRecv(t,o)}compileFile(t){return this.worker_caller("complier",{event:"BABEL",payload:{file:t,compile_options:{}}})}compileFiles(t){return this.worker_caller("complier",{event:"ROLLUP",payload:{files:t,compile_options:{}}})}}const Ze=new ao;b.global_source.on("throw",console.error);const co=()=>{let e=null;return T(()=>e==null?void 0:e.dispose()),{compileFile(t){return e==null||e.dispose(),e=Ze.compileFile(t),e.recv},compileFiles(t){return e==null||e.dispose(),e=Ze.compileFiles(t),e.recv}}},lo='import("@rhjs/rh").then(({cs, ElementSource}) => window.dispose = () => (cs || ElementSource).global_source.emit("unmount"));',uo=()=>{var l;const e=R(!0);yn("isDark",e);const{currentDemo:t}=Dt(),n=me(()=>{var a;return{"@rhjs/rh":`https://unpkg.com/@rhjs/rh@${((a=t.value)==null?void 0:a.version)||"latest"}/dist/main.module.mjs`,"@rhjs/fluent-web-components":"https://unpkg.com/@rhjs/fluent-web-components@latest/dist/main.module.mjs"}}),o=R(""),r=jn(o,{type:"text/javascript"}),s=R(((l=t.value)==null?void 0:l.code)||""),i=co(),c=async()=>{const a=O(s);if(!a)return;const u=await i.compileFile({filename:"main.tsx",source:a});console.log(u),o.value=`${u.compiled}
${lo}`};return dn(c),I(t,a=>{a&&s.value!==a.code&&(console.log("change"),s.value=a.code,c())}),()=>m("div",null,m(ro,{isDark:e}),m(G.Style,{styleFn:()=>({position:"relative",display:"flex",flexFlow:"column",width:"100%",height:"100%",maxWidth:"100vw",maxHeight:"100vh",overflow:"hidden"})}),m("header",{style:"height: 30px; width: 100%;"},m(Yn,{isDark:e})),m("div",{style:"flex: 1;"},m(G.Style,{styleFn:()=>({position:"relative",display:"flex",flexFlow:"row",width:"100%",height:"100%"})}),m(Pn,{style:"flex: 1;",value:s,onChange:a=>s.value=a,onSave:c,isDark:e}),m(oo,{style:"flex: 1;",importMap:n,code:r,devtools:!0,isDark:e})))};fn("#app",uo);
