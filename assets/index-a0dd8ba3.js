var Lt=Object.defineProperty;var jt=(e,t,n)=>t in e?Lt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var V=(e,t,n)=>(jt(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();function At(e,t){return t.forEach(function(n){n&&typeof n!="string"&&!Array.isArray(n)&&Object.keys(n).forEach(function(r){if(r!=="default"&&!(r in e)){var o=Object.getOwnPropertyDescriptor(n,r);Object.defineProperty(e,r,o.get?o:{enumerable:!0,get:function(){return n[r]}})}})}),e}function Nt(e,t){const n=Object.create(null),r=e.split(",");for(let o=0;o<r.length;o++)n[r[o]]=!0;return t?o=>!!n[o.toLowerCase()]:o=>!!n[o]}const Mt=()=>{},It=Object.assign,Pt=Object.prototype.hasOwnProperty,ce=(e,t)=>Pt.call(e,t),P=Array.isArray,se=e=>Qe(e)==="[object Map]",Ce=e=>typeof e=="symbol",le=e=>e!==null&&typeof e=="object",Ut=Object.prototype.toString,Qe=e=>Ut.call(e),zt=e=>Qe(e).slice(8,-1),Oe=e=>typeof e=="string"&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Re=(e,t)=>!Object.is(e,t);let Ht;function et(e,t=Ht){t&&t.active&&t.effects.push(e)}const xe=e=>{const t=new Set(e);return t.w=0,t.n=0,t},tt=e=>(e.w&I)>0,nt=e=>(e.n&I)>0,ye=new WeakMap;let G=0,I=1;const we=30;let j;const F=Symbol(""),be=Symbol("");class rt{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,et(this,r)}run(){if(!this.active)return this.fn();let t=j,n=U;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=j,j=this,U=!0,I=1<<++G,G<=we?(({deps:r})=>{if(r.length)for(let o=0;o<r.length;o++)r[o].w|=I})(this):Ie(this),this.fn()}finally{G<=we&&(r=>{const{deps:o}=r;if(o.length){let s=0;for(let i=0;i<o.length;i++){const a=o[i];tt(a)&&!nt(a)?a.delete(r):o[s++]=a,a.w&=~I,a.n&=~I}o.length=s}})(this),I=1<<--G,j=this.parent,U=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){j===this?this.deferStop=!0:this.active&&(Ie(this),this.onStop&&this.onStop(),this.active=!1)}}function Ie(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}function Te(e,t){e.effect&&(e=e.effect.fn);const n=new rt(e);t&&(It(n,t),t.scope&&et(n,t.scope)),t&&t.lazy||n.run();const r=n.run.bind(n);return r.effect=n,r}function ot(e){e.effect.stop()}let U=!0;const st=[];function ue(){st.push(U),U=!1}function de(){const e=st.pop();U=e===void 0||e}function D(e,t,n){if(U&&j){let r=ye.get(e);r||ye.set(e,r=new Map);let o=r.get(n);o||r.set(n,o=xe()),it(o)}}function it(e,t){let n=!1;G<=we?nt(e)||(e.n|=I,n=!tt(e)):n=!e.has(j),n&&(e.add(j),j.deps.push(e))}function H(e,t,n,r,o,s){const i=ye.get(e);if(!i)return;let a=[];if(t==="clear")a=[...i.values()];else if(n==="length"&&P(e)){const c=Number(r);i.forEach((l,h)=>{(h==="length"||h>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(i.get(n)),t){case"add":P(e)?Oe(n)&&a.push(i.get("length")):(a.push(i.get(F)),se(e)&&a.push(i.get(be)));break;case"delete":P(e)||(a.push(i.get(F)),se(e)&&a.push(i.get(be)));break;case"set":se(e)&&a.push(i.get(F))}if(a.length===1)a[0]&&Ee(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Ee(xe(c))}}function Ee(e,t){const n=P(e)?e:[...e];for(const r of n)r.computed&&Pe(r);for(const r of n)r.computed||Pe(r)}function Pe(e,t){(e!==j||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Wt=Nt("__proto__,__v_isRef,__isVue"),at=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ce)),Bt=ct(),Ft=ct(!0),Ue=$t();function $t(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=y(this);for(let s=0,i=this.length;s<i;s++)D(r,0,s+"");const o=r[t](...n);return o===-1||o===!1?r[t](...n.map(y)):o}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){ue();const r=y(this)[t].apply(this,n);return de(),r}}),e}function Vt(e){const t=y(this);return D(t,0,e),t.hasOwnProperty(e)}function ct(e=!1,t=!1){return function(n,r,o){if(r==="__v_isReactive")return!e;if(r==="__v_isReadonly")return e;if(r==="__v_isShallow")return t;if(r==="__v_raw"&&o===(e?t?rn:dt:t?nn:ut).get(n))return n;const s=P(n);if(!e){if(s&&ce(Ue,r))return Reflect.get(Ue,r,o);if(r==="hasOwnProperty")return Vt}const i=Reflect.get(n,r,o);return(Ce(r)?at.has(r):Wt(r))?i:(e||D(n,0,r),t?i:R(i)?s&&Oe(r)?i:i.value:le(i)?e?Le(i):ht(i):i)}}function Yt(e=!1){return function(t,n,r,o){let s=t[n];if(ie(s)&&R(s)&&!R(r))return!1;if(!e&&(pt(r)||ie(r)||(s=y(s),r=y(r)),!P(t)&&R(s)&&!R(r)))return s.value=r,!0;const i=P(t)&&Oe(n)?Number(n)<t.length:ce(t,n),a=Reflect.set(t,n,r,o);return t===y(o)&&(i?Re(r,s)&&H(t,"set",n,r):H(t,"add",n,r)),a}}const Kt={get:Bt,set:Yt(),deleteProperty:function(e,t){const n=ce(e,t),r=Reflect.deleteProperty(e,t);return r&&n&&H(e,"delete",t,void 0),r},has:function(e,t){const n=Reflect.has(e,t);return Ce(t)&&at.has(t)||D(e,0,t),n},ownKeys:function(e){return D(e,0,P(e)?"length":F),Reflect.ownKeys(e)}},Gt={get:Ft,set:(e,t)=>!0,deleteProperty:(e,t)=>!0},De=e=>e,he=e=>Reflect.getPrototypeOf(e);function ee(e,t,n=!1,r=!1){const o=y(e=e.__v_raw),s=y(t);n||(t!==s&&D(o,0,t),D(o,0,s));const{has:i}=he(o),a=r?De:n?je:q;return i.call(o,t)?a(e.get(t)):i.call(o,s)?a(e.get(s)):void(e!==o&&e.get(t))}function te(e,t=!1){const n=this.__v_raw,r=y(n),o=y(e);return t||(e!==o&&D(r,0,e),D(r,0,o)),e===o?n.has(e):n.has(e)||n.has(o)}function ne(e,t=!1){return e=e.__v_raw,!t&&D(y(e),0,F),Reflect.get(e,"size",e)}function ze(e){e=y(e);const t=y(this);return he(t).has.call(t,e)||(t.add(e),H(t,"add",e,e)),this}function He(e,t){t=y(t);const n=y(this),{has:r,get:o}=he(n);let s=r.call(n,e);s||(e=y(e),s=r.call(n,e));const i=o.call(n,e);return n.set(e,t),s?Re(t,i)&&H(n,"set",e,t):H(n,"add",e,t),this}function We(e){const t=y(this),{has:n,get:r}=he(t);let o=n.call(t,e);o||(e=y(e),o=n.call(t,e)),r&&r.call(t,e);const s=t.delete(e);return o&&H(t,"delete",e,void 0),s}function Be(){const e=y(this),t=e.size!==0,n=e.clear();return t&&H(e,"clear",void 0,void 0),n}function re(e,t){return function(n,r){const o=this,s=o.__v_raw,i=y(s),a=t?De:e?je:q;return!e&&D(i,0,F),s.forEach((c,l)=>n.call(r,a(c),a(l),o))}}function oe(e,t,n){return function(...r){const o=this.__v_raw,s=y(o),i=se(s),a=e==="entries"||e===Symbol.iterator&&i,c=e==="keys"&&i,l=o[e](...r),h=n?De:t?je:q;return!t&&D(s,0,c?be:F),{next(){const{value:u,done:d}=l.next();return d?{value:u,done:d}:{value:a?[h(u[0]),h(u[1])]:h(u),done:d}},[Symbol.iterator](){return this}}}}function M(e){return function(...t){return e!=="delete"&&this}}function qt(){const e={get(o){return ee(this,o)},get size(){return ne(this)},has:te,add:ze,set:He,delete:We,clear:Be,forEach:re(!1,!1)},t={get(o){return ee(this,o,!1,!0)},get size(){return ne(this)},has:te,add:ze,set:He,delete:We,clear:Be,forEach:re(!1,!0)},n={get(o){return ee(this,o,!0)},get size(){return ne(this,!0)},has(o){return te.call(this,o,!0)},add:M("add"),set:M("set"),delete:M("delete"),clear:M("clear"),forEach:re(!0,!1)},r={get(o){return ee(this,o,!0,!0)},get size(){return ne(this,!0)},has(o){return te.call(this,o,!0)},add:M("add"),set:M("set"),delete:M("delete"),clear:M("clear"),forEach:re(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{e[o]=oe(o,!1,!1),n[o]=oe(o,!0,!1),t[o]=oe(o,!1,!0),r[o]=oe(o,!0,!0)}),[e,n,t,r]}const[Jt,Xt,Zt,Qt]=qt();function lt(e,t){const n=t?e?Qt:Zt:e?Xt:Jt;return(r,o,s)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?r:Reflect.get(ce(n,o)&&o in r?n:r,o,s)}const en={get:lt(!1,!1)},tn={get:lt(!0,!1)},ut=new WeakMap,nn=new WeakMap,dt=new WeakMap,rn=new WeakMap;function ht(e){return ie(e)?e:ft(e,!1,Kt,en,ut)}function Le(e){return ft(e,!0,Gt,tn,dt)}function ft(e,t,n,r,o){if(!le(e)||e.__v_raw&&(!t||!e.__v_isReactive))return e;const s=o.get(e);if(s)return s;const i=(a=e).__v_skip||!Object.isExtensible(a)?0:function(l){switch(l){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}(zt(a));var a;if(i===0)return e;const c=new Proxy(e,i===2?r:n);return o.set(e,c),c}function ie(e){return!(!e||!e.__v_isReadonly)}function pt(e){return!(!e||!e.__v_isShallow)}function y(e){const t=e&&e.__v_raw;return t?y(t):e}const q=e=>le(e)?ht(e):e,je=e=>le(e)?Le(e):e;function mt(e){U&&j&&it((e=y(e)).dep||(e.dep=xe()))}function vt(e,t){const n=(e=y(e)).dep;n&&Ee(n)}function R(e){return!(!e||e.__v_isRef!==!0)}function O(e){return gt(e,!1)}function ae(e){return gt(e,!0)}function gt(e,t){return R(e)?e:new on(e,t)}class on{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:y(t),this._value=n?t:q(t)}get value(){return mt(this),this._value}set value(t){const n=this.__v_isShallow||pt(t)||ie(t);t=n?t:y(t),Re(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:q(t),vt(this))}}function w(e){return R(e)?e.value:e}var _t;class sn{constructor(t,n,r,o){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[_t]=!1,this._dirty=!0,this.effect=new rt(t,()=>{this._dirty||(this._dirty=!0,vt(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=r}get value(){const t=y(this);return mt(t),!t._dirty&&t._cacheable||(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}_t="__v_isReadonly";function Se(){return Se=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Se.apply(this,arguments)}var Fe,$e,an=(Fe=function(e){var t=Object.prototype.hasOwnProperty,n="~";function r(){}function o(c,l,h){this.fn=c,this.context=l,this.once=h||!1}function s(c,l,h,u,d){if(typeof h!="function")throw new TypeError("The listener must be a function");var p=new o(h,u||c,d),f=n?n+l:l;return c._events[f]?c._events[f].fn?c._events[f]=[c._events[f],p]:c._events[f].push(p):(c._events[f]=p,c._eventsCount++),c}function i(c,l){--c._eventsCount==0?c._events=new r:delete c._events[l]}function a(){this._events=new r,this._eventsCount=0}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(n=!1)),a.prototype.eventNames=function(){var c,l,h=[];if(this._eventsCount===0)return h;for(l in c=this._events)t.call(c,l)&&h.push(n?l.slice(1):l);return Object.getOwnPropertySymbols?h.concat(Object.getOwnPropertySymbols(c)):h},a.prototype.listeners=function(c){var l=this._events[n?n+c:c];if(!l)return[];if(l.fn)return[l.fn];for(var h=0,u=l.length,d=new Array(u);h<u;h++)d[h]=l[h].fn;return d},a.prototype.listenerCount=function(c){var l=this._events[n?n+c:c];return l?l.fn?1:l.length:0},a.prototype.emit=function(c,l,h,u,d,p){var f=n?n+c:c;if(!this._events[f])return!1;var _,g,v=this._events[f],E=arguments.length;if(v.fn){switch(v.once&&this.removeListener(c,v.fn,void 0,!0),E){case 1:return v.fn.call(v.context),!0;case 2:return v.fn.call(v.context,l),!0;case 3:return v.fn.call(v.context,l,h),!0;case 4:return v.fn.call(v.context,l,h,u),!0;case 5:return v.fn.call(v.context,l,h,u,d),!0;case 6:return v.fn.call(v.context,l,h,u,d,p),!0}for(g=1,_=new Array(E-1);g<E;g++)_[g-1]=arguments[g];v.fn.apply(v.context,_)}else{var x,L=v.length;for(g=0;g<L;g++)switch(v[g].once&&this.removeListener(c,v[g].fn,void 0,!0),E){case 1:v[g].fn.call(v[g].context);break;case 2:v[g].fn.call(v[g].context,l);break;case 3:v[g].fn.call(v[g].context,l,h);break;case 4:v[g].fn.call(v[g].context,l,h,u);break;default:if(!_)for(x=1,_=new Array(E-1);x<E;x++)_[x-1]=arguments[x];v[g].fn.apply(v[g].context,_)}}return!0},a.prototype.on=function(c,l,h){return s(this,c,l,h,!1)},a.prototype.once=function(c,l,h){return s(this,c,l,h,!0)},a.prototype.removeListener=function(c,l,h,u){var d=n?n+c:c;if(!this._events[d])return this;if(!l)return i(this,d),this;var p=this._events[d];if(p.fn)p.fn!==l||u&&!p.once||h&&p.context!==h||i(this,d);else{for(var f=0,_=[],g=p.length;f<g;f++)(p[f].fn!==l||u&&!p[f].once||h&&p[f].context!==h)&&_.push(p[f]);_.length?this._events[d]=_.length===1?_[0]:_:i(this,d)}return this},a.prototype.removeAllListeners=function(c){var l;return c?this._events[l=n?n+c:c]&&i(this,l):(this._events=new r,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=n,a.EventEmitter=a,e.exports=a},Fe($e={exports:{}}),$e.exports);const S={CS_HOOK_CB:Symbol("HOOK_CB"),IS_ANCHOR:Symbol("IS_ANCHOR"),NONE:Symbol("NONE"),SELF_CS:Symbol("SELF_CS"),CACHE_NODES:Symbol("CACHE_NODES"),IS_COMPONENT:Symbol("IS_COMPONENT"),STYLESHEET_SCOPED:Symbol("STYLESHEET_SCOPED")};class b extends an{static peek(){return b.source_stack.peek()||b.global_source}constructor(t,n){if(super(),this.host=void 0,this.__context={},this.__parent_source=b.source_stack.peek(),this.__container_source=this,this.states={mounted:!1,unmounted:!1},this.host=t,this.__parent_source)if(this.setupContainerSource(),this.on("throw",o=>{var s;return(s=this.__parent_source)==null?void 0:s.emit("throw",o)}),this.once("mount",()=>this.states.mounted=!0),this.once("unmount",()=>this.states.unmounted=!0),n){var r;((this.__container_source===this?(r=this.__container_source.__parent_source)==null?void 0:r.__container_source:this.__container_source)||this.__parent_source).once("unmount",()=>{this.emit("unmount"),this.dispose()})}else this.__parent_source.once("unmount",()=>{this.emit("unmount"),this.dispose()}),this.__parent_source.once("update_after",()=>{this.__parent_source.once("update_after",()=>{this.emit("unmount")})})}onMount(t){return this.states.mounted?t():this.once("mount",t),this}onUnmount(t){return this.states.unmounted?t():this.once("unmount",t),this}setupContainerSource(){for(;this.__container_source&&this.__container_source!==b.global_source;){var t;if((t=this.__container_source.host)!=null&&t[S.IS_COMPONENT])break;this.__container_source=this.__container_source.__parent_source}}dispose(){this.removeAllListeners(),this.__context={}}effect(t,n){const r=Te(t,n);return this.once("unmount",()=>ot(r)),r}}b.source_stack=new class{constructor(){this.items=void 0,this.items=[]}toArray(){return[...this.items]}push(e){this.items.push(e)}pop(){return this.items.pop()}peek(){return this.items[this.items.length-1]}size(){return this.items.length}isEmpty(){return this.items.length===0}},b.global_source=new b;const B=(e,t,n)=>{const r=o=>{const s=o.relatedNode;s&&s===e.parentNode&&t(s,e)};return e.addEventListener(n,r),()=>e.removeEventListener(n,r)};class T{constructor(){this.source=void 0,this.viewAnchor=(()=>{const t=document.createTextNode("");return t[S.IS_ANCHOR]=!0,t})(),this.currentView=this.viewAnchor,this.renderEffectRunner=void 0,this.rawTarget=void 0,this.dispose_onDomInserted=void 0,this._initialized=!1}_initialize(){this._initialized||(this._initialized=!0,this.initialize())}initialize(){this.source||(this.source=new b(this)),this.source.once("unmount",()=>this.dispose())}ensureEffectRunner(){return this._initialize(),this.renderEffectRunner||(this.renderEffectRunner=Te(this.update.bind(this),{lazy:!1}),this.dispose_onDomInserted=B(this.currentView,(t,n)=>{var r,o,s;(r=this.dispose_onDomInserted)==null||r.call(this),this.source.emit("mount"),this.viewAnchor!==n&&t.insertBefore(this.viewAnchor,n),n!==this.currentView&&(t.insertBefore(this.currentView,n),(s=n)&&s[S.IS_ANCHOR]||(o=n.parentElement)==null||o.removeChild(n))},"DOMNodeInserted")),this.renderEffectRunner}render(){return null}_update(){const t=this.currentView,n=this.render()||this.viewAnchor,r=t==null?void 0:t.parentElement;r&&r.replaceChild(n,t),this.currentView=n}update(){var t,n;if(this.source.states.unmounted||(t=this.source.__parent_source)!=null&&t.states.unmounted||(n=this.source.__container_source)!=null&&n.states.unmounted)this.dispose();else{this.source.emit("update_before");try{b.source_stack.push(this.source),this.source.emit("update"),this._update()}catch(r){requestAnimationFrame(()=>{this.source.emit("throw",r),console.error(r)})}finally{b.source_stack.pop(),this.source.emit("update_after")}}}dispose(){var t,n,r,o;(t=this.renderEffectRunner)==null||t.effect.stop(),(n=this.currentView.parentElement)==null||n.removeChild(this.currentView),(r=this.viewAnchor.parentElement)==null||r.removeChild(this.viewAnchor),(o=this.dispose_onDomInserted)==null||o.call(this)}static fromRender(t){const n=new T;return n.render=()=>T.warpView(t()),n.rawTarget=t,n}static fromRef(t){const n=new T;return n.render=()=>T.warpView(w(t)),n.rawTarget=t,n}static warpView(t){return t instanceof Node||t===null?t:document.createTextNode(`${t}`)}static warp(t){if(typeof t!="function"&&!R(t))return T.warpView(t);let n;if(typeof t=="function")n=T.fromRender(t);else{if(!R(t))throw new Error("Unknown view type.");n=T.fromRef(t)}return n.ensureEffectRunner(),n.currentView}}let yt;yt=S.IS_COMPONENT;class wt extends T{get[yt](){return!0}constructor(t,n,r){super(),this._define=void 0,this.props=void 0,this.children=void 0,this.state=void 0,this._define=t,this.props=n,this.children=r}initialize(){this.initializeComponent()}initializeComponent(){this.source=new b(this,"__node_cached"in this.props),this.source.once("unmount",()=>this.dispose()),this.installSource(),this.initializeSetup()}initializeSetup(){const{props:t,children:n}=this;ue(),b.source_stack.push(this.source),this.source.emit("setup_before"),this.state=this._define.setup(t,n),this.source.emit("setup_after"),b.source_stack.pop(),de()}render(){const t=this._define.render(this.props,this.state,this.children);return T.warp(t)}installSource(){var t,n;(t=(n=this._define)[S.CS_HOOK_CB])==null||t.call(n,this.source)}}class cn extends wt{constructor(t,n,r){const o={setup:(s,i)=>{const a={};return o.render=t(s,a,i),a},render:()=>{}};o[S.CS_HOOK_CB]=t[S.CS_HOOK_CB],super(o,n,r),this._function_define=void 0,this._function_define=t}}class ln{constructor(t,n,r){this.tagNameOrDome=void 0,this.props=void 0,this.children=void 0,this.node=void 0,this.source=new b(this),this.tagNameOrDome=t,this.props=n,this.children=r,this.source.once("unmount",()=>this.dispose()),this.buildNode()}dispose(){var t,n;(t=this.node)==null||(n=t.parentElement)==null||n.removeChild(this.node)}buildNode(){if(this.node)return this.node;this.node=this.tagNameOrDome instanceof Element?this.tagNameOrDome:document.createElement(this.tagNameOrDome),ue(),this.hydrateChildren(),de();for(const[t,n]of Object.entries(this.props))this.hydrateAttribute(t,n);return this.node}isValidAttributeName(t){return/^[a-zA-Z][\w-]*$/.test(t)}hydrateAttribute(t,n){if(!t.startsWith("_")&&!t.startsWith("$")&&this.isValidAttributeName(t)){switch(t){case"ref":return void(typeof n=="function"?n(this.node):R(n)&&(n.value=this.node));case"effect":return void(typeof n=="function"&&this.source.effect(()=>n(this.node),{lazy:!1}))}if(t.startsWith("on")&&typeof n=="function"){const r=t.slice(2).toLowerCase(),o=this.node["__cb_"+t];return o&&this.node.removeEventListener(r,o),this.node["__cb_"+t]=n,void this.node.addEventListener(r,n)}this.source.effect(()=>{const r=w(n);if(t!=="value")if(t!=="defaultValue")typeof r!="boolean"?this.node.setAttribute(t,r):r?this.node.setAttribute(t,""):this.node.removeAttribute(t);else{if(this.node.value)return;this.node.value=r}else this.node.value=r},{lazy:!1})}}hydrateChildren(){const{children:t}=this;for(const n of t){if(n==null)continue;const r=T.warp(n);r&&this.node.appendChild(r)}}}function W(e){return e?e(b.peek()):b.peek()}const un=(e,t,n=!1)=>W(r=>r[n?"once":"on"](e,t)),dn=e=>W(t=>t.onMount(e)),C=e=>W(t=>t.onUnmount(e)),hn=e=>un("throw",e),Ve=(e,t)=>{var n,r;if(!e)return;const o=b.peek(),{__container_source:s}=o;s&&((n=s.__context)[r=S.CACHE_NODES]||(n[r]={}),s.__context[S.CACHE_NODES][e]=t)},bt=(e,t={},n=[])=>{const{key:r}=t;delete t.key,r&&(t.__node_cached=!0);const o=(s=>{var i,a;if(!s)return;const c=b.peek(),{__container_source:l}=c;return l?((i=l.__context)[a=S.CACHE_NODES]||(i[a]={}),l.__context[S.CACHE_NODES][s]):void 0})(r);if(o)return o;if(typeof e=="function"){const s=new cn(e,t,n);return Ve(r,s),s}if(typeof e=="object"&&typeof e.render=="function"&&typeof e.setup=="function"){const s=new wt(e,t,n);return Ve(r,s),s}throw new Error(`Valid define type [${typeof e}] is not supported for reactiveHydrate.`)},fn=(e,t,...n)=>{var r;if(t||(t={}),n||(n=[]),n=((r=n)==null?void 0:r.flat())||n,typeof e=="string"||e instanceof Element)return new ln(e,t,n).node;const o=bt(e,t,n);return o.ensureEffectRunner(),o.currentView},m=fn,pn=(e,t,n)=>{const r=e instanceof Element?e:document.querySelector(e);if(!r)throw new Error(`Could not find container: ${e}`);if(t instanceof Element)return r.appendChild(t),null;const o=bt(t,n);return o.ensureEffectRunner(),r.appendChild(o.currentView),o},N=(e,t)=>{let n=null;const r=Te(()=>{n==null||n(),e(s=>n=s)},Se({lazy:!1},t)),o=()=>{n==null||n(),ot(r),n=null};return C(o),[r,o]},A=(e,t,n)=>{let r;return N(()=>{const o=typeof e=="function"?e(r):w(e);fe(()=>t(o,r)),r=o},n)},Ae=(e,t)=>{const n=O();return N(()=>{const r=k(n),o=e(r);var s,i;s=r,i=o,Object.is(s,i)||s===i||(n.value=o)},t),n},fe=(e,...t)=>{ue();const n=e(...t);return de(),n},k=e=>fe(()=>w(e));function mn(e){const t=R(e)?e:O(e);return[()=>w(t),n=>{if(typeof n=="function"){const r=k(t);t.value=n(r)}else t.value=n},t]}const vn=(...e)=>e.map(t=>w(t)),Et=vn,St=(e,t)=>(((n,r)=>{if(!r)return;const o=n[S.CS_HOOK_CB];n[S.CS_HOOK_CB]=s=>{o==null||o(s),r(s)}})(e,t),e),gn=e=>new Proxy({},{get(t,n,r){let o=e;for(;o!==void 0;){const s=o.__context;if(n in s)return s[n];o=o.__parent_source}},set:(t,n,r,o)=>(e.__context[n]=r,!0)}),_n=e=>{const t=W();if(!t.__container_source)throw new Error("Container source not found, must be inside a container component to use element source");const n=gn(t.__container_source);return e==null||e(n),n},yn=St({setup({fallbackRender:e,onError:t,render:n}){const r=b.peek();let o=O(null);r.on("throw",i=>{i instanceof Error&&(t==null||t(i),o.value=i)});const s=O(1);return{catchError:o,rerenderRef:s,fallbackRender:e,childrenRender:n}},render(e,{fallbackRender:t,rerenderRef:n,catchError:r,childrenRender:o}){const s=()=>{n.value=Date.now(),r.value=null};return r.value?fe(()=>t(r.value,s)):o()}}),kt=St({setup(e,[t,...n]){const r={anchor:document.createTextNode(""),children:[],parentNode:null},o=W(),s=(i=typeof t=="function"?t:()=>[t,...n],()=>{return(u=i(),Array.isArray(u)?u:[u]).flat(1).map(d=>T.warp(d)).filter(Boolean);var u});var i;const[a,c]=N(()=>{b.source_stack.push(o),(()=>{const u=r.children,d=s(),{parentNode:p,anchor:f}=r;if(!p)return;const _=Math.max(d.length,u.length);for(let g=0;g<_;g++){const v=d[g],E=u[g];if(!v&&E)E.remove();else if(!E&&v)p.insertBefore(v,f);else if(E&&v){if(E===v)continue;p.replaceChild(v,E)}}r.children=d})(),b.source_stack.pop()}),l=B(r.anchor,u=>{r.parentNode=u,a()},"DOMNodeInserted"),h=B(r.anchor,u=>{r.children.forEach(d=>d==null?void 0:d.remove()),r.parentNode=null},"DOMNodeRemoved");return C(()=>{l(),h(),c(),r.anchor.remove(),r.children.forEach(u=>u==null?void 0:u.remove())}),W(u=>{var d;(d=u.__parent_source)==null||d.once("update_before",()=>{var p;r.children.forEach(f=>f==null?void 0:f.remove()),(p=u.__parent_source)==null||p.once("update_after",()=>{r.anchor.remove()})})}),r},render:(e,t)=>t.anchor});var ke=function e(t,n){if(t===n)return!0;if(t&&n&&typeof t=="object"&&typeof n=="object"){if(t.constructor!==n.constructor)return!1;var r,o,s;if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(o=r;o--!=0;)if(!e(t[o],n[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((r=(s=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(o=r;o--!=0;)if(!Object.prototype.hasOwnProperty.call(n,s[o]))return!1;for(o=r;o--!=0;){var i=s[o];if(!e(t[i],n[i]))return!1}return!0}return t!=t&&n!=n},Ye=At({__proto__:null,default:ke},[ke]);function Ct(e){if(function(t){return t&&typeof t=="object"&&t.constructor===Object}(e)){const t={};return Object.keys(e).forEach(n=>{t[n]=Ct(e[n])}),t}return e}const Ke=e=>Ct(y(e)),wn=({items:e,render:t,needUpdate:n=(r,o)=>!((Ye==null?void 0:ke)||Ye)(r,o)})=>{const r=ae([]),o=W(),[s]=N(()=>{const i=typeof e=="function"?e():w(e);b.source_stack.push(o);try{((a,c)=>{const l=k(r);for(let u=0;u<Math.max(l.length,a.length);u++){const d=l[u],p=a[u];if(d!==void 0&&p!==void 0){if(!d.node||fe(()=>n(p,d.data))){const f=t(p,u,a,c,d.node);d.node=f,d.data=Ke(p)}}else if(d===void 0){const f=t(p,u,a,c);l.push({data:Ke(p),node:f})}else p===void 0&&(d.del=!0)}const h=l.filter(u=>u.del!==!0);r.value=h})(i,()=>s==null?void 0:s.effect.run())}finally{b.source_stack.pop()}});return()=>m(kt,{},()=>r.value.filter(i=>!i.del).map(i=>i.node))},bn=["container"],En=(e,t,n)=>{let{container:r}=e,o=function(a,c){if(a==null)return{};var l,h,u={},d=Object.keys(a);for(h=0;h<d.length;h++)c.indexOf(l=d[h])>=0||(u[l]=a[l]);return u}(e,bn);const s=document.createTextNode(""),i=r||document.createElement("div");return document.body.appendChild(i),m(i,o,...n),C(()=>{var a;(a=i.parentElement)==null||a.removeChild(i)}),()=>s};function Sn(e,t,n=""){const r=t===":root",o=r?"":t,s=e.split(",").map(c=>c.trim()).filter(Boolean);let i=r?[""]:o.split(",").map(c=>c.trim()).filter(Boolean);var a;return(a=i,s.flatMap(c=>a.map(l=>[c,l]))).map(([c,l])=>c.startsWith("&")?c.replace(/&/g,l):`${l} ${c}`).map(c=>`${c.replace(n||"","")}${n||""}`.trim()).join(",")}const Ge=()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(36),Ot=e=>{if(!e)throw new Error("styleOrFn is required.");return typeof e=="function"?e:()=>e},Rt=(e,t,n,r)=>{const o=!!r,s=_n(),{applySheet:i,removeSheet:a,parseStyle:c}=((f,_)=>{const g=new CSSStyleSheet;let v=!1;return{sheet:g,parseStyle:E=>{const x=function(L,J,{beautify:X=!1,scopedSelector:Z=""}){const pe=X?`
`:"",me=[{nodeSelector:J+Z,cssObject:L}],Ne=[];for(;me.length>0;){const{nodeSelector:Y,cssObject:ve}=me.pop(),ge={selector:Y,cssText:""};for(const Q in ve){const K=ve[Q];if(typeof K=="object"){const _e=Sn(Q,Y,Z);me.push({nodeSelector:_e,cssObject:K})}else{if(typeof K=="string"&&!K.trim()||K==null)continue;ge.cssText+=`${Me=Q,Me.replace(/[A-Z]/g,_e=>`-${_e.toLowerCase()}`)}: ${ve[Q]};${pe}`}}ge.cssText.trim()&&Ne.push(ge)}var Me;return Ne.map(Y=>`${Y.selector}{${Y.cssText}}`).join(`
`).trim()}(f(),E,{scopedSelector:_});g.replaceSync(x)},applySheet:()=>{v||(v=!0,document.adoptedStyleSheets=[...document.adoptedStyleSheets,g])},removeSheet:()=>{v&&(v=!1,document.adoptedStyleSheets=[...document.adoptedStyleSheets].filter(E=>E!==g))}}})(()=>e(s),r?`[data-s-${r}]`:void 0),l=document.createTextNode("");let h;N(()=>c(t)),C(B(l,i,"DOMNodeInserted")),C(B(l,a,"DOMNodeRemoved")),C(a);const u=`s-${r}`.replace(/-([a-z])/g,function(f,_){return _.toUpperCase()}),d=f=>{if("dataset"in f&&typeof f.dataset=="object"){if(f[S.STYLESHEET_SCOPED]!==void 0&&f[S.STYLESHEET_SCOPED]!==u)return;f.dataset[u]="",f[S.STYLESHEET_SCOPED]=u}},p=f=>{if("dataset"in f&&typeof f.dataset=="object"){if(f[S.STYLESHEET_SCOPED]!==void 0&&f[S.STYLESHEET_SCOPED]!==u)return;delete f.dataset[u],delete f[S.STYLESHEET_SCOPED]}};return C(B(l,f=>{o&&(d(f),(_=>{h=new MutationObserver(g=>{for(const v of g){const{addedNodes:E,removedNodes:x}=v;E.forEach(L=>d(L)),x.forEach(L=>p(L))}}),h.observe(_,{childList:!0,subtree:!0})})(f)),n&&f instanceof Element&&f.classList.add(n)},"DOMNodeInserted")),C(B(l,f=>{var _;p(f),(_=h)==null||_.disconnect(),n&&f instanceof Element&&f.classList.remove(n)},"DOMNodeRemoved")),{anchor:l}},kn=(e,t)=>{const n=Ot(e.styleFn||e.style||t),r=e.scoped?Ge():void 0,o=`s-${Ge()}`,{anchor:s}=Rt(n,`.${o}`,o,r);return()=>s},Cn=(e,t)=>{const n=Ot(e.styleFn||e.style||t),{anchor:r}=Rt(n,":root");return()=>r},On=({component:e,render:t,fallback:n,error:r})=>{const o=O("fulfilled");hn(async a=>{var c;!(c=a)||typeof c!="object"&&typeof c!="function"||typeof c.then!="function"||(o.value="pending",a.then(()=>o.value="fulfilled"),a.catch(()=>o.value="rejected"))});const s=e?m(e):t?m(()=>()=>T.warpView(t())):null,i=m(()=>()=>{switch(o.value){case"pending":return n();case"fulfilled":return s;case"rejected":return(r||n)()}});return()=>i},Rn=(e,...t)=>{const n=[];for(let r=0;r<e.length;r++){n.push(document.createTextNode(e[r]));const o=t[r],s=document.createTextNode("");typeof o=="function"?N(()=>s.textContent=o()):R(o)&&N(()=>s.textContent=String(o.value)),n.push(s)}return n},xt=(e,...t)=>e.reduce((n,r,o)=>{var s;return n+=r,o<t.length&&(n+=w(typeof(s=t[o])=="function"?s():s)),n},""),xn=(e,...t)=>{const n=function(r,o,s=!1){let i,a;const c=typeof r=="function";return c?(i=r,a=Mt):(i=r.get,a=r.set),new sn(i,a,c||!a,s)}(()=>xt(e,...t));return C(()=>n.effect.stop()),n},Tn=e=>{let t=null,n=null;return(r,...o)=>{const s=W(),i=O(t);if(!t){const a=(n||(n=e().then(c=>t=c))).then(c=>{k(i)||(i.value=c)});s.emit("throw",a)}return()=>i.value?m(i.value.default,r,...o):null}};var $={__proto__:null,ErrorBoundary:yn,Fragment:kt,ReactiveList:wn,Portal:En,Style:kn,GlobalStyle:Cn,Suspense:On,text:Rn,raw:xt,rawRef:xn,lazy:Tn};const Dn=(e,t)=>{const n=O("");return N(()=>{const r=k(n);r&&URL.revokeObjectURL(r),n.value=URL.createObjectURL(new Blob([w(e)],{type:"text/plain",...t}))}),C(()=>URL.revokeObjectURL(n.value)),n},Ln="modulepreload",jn=function(e,t){return new URL(e,t).href},qe={},An=function(t,n,r){if(!n||n.length===0)return t();const o=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=jn(s,r),s in qe)return;qe[s]=!0;const i=s.endsWith(".css"),a=i?'[rel="stylesheet"]':"";if(!!r)for(let h=o.length-1;h>=0;h--){const u=o[h];if(u.href===s&&(!i||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const l=document.createElement("link");if(l.rel=i?"stylesheet":Ln,i||(l.as="script",l.crossOrigin=""),l.href=s,document.head.appendChild(l),i)return new Promise((h,u)=>{l.addEventListener("load",h),l.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t())},Nn=()=>An(()=>import("https://unpkg.com/@monaco-editor/loader@1.3.3/lib/umd/monaco-loader.js"),[],import.meta.url).then(()=>window.monaco_loader).then(e=>e.init()),Mn=({value:e,onChange:t,isDark:n,onSave:r,...o})=>{let s,i,a;return N(()=>{const c=w(n);a!=null&&a.editor&&(c?a.editor.setTheme("vs-dark"):a.editor.setTheme("vs"))}),C(()=>{s==null||s.dispose()}),R(e)&&A(e,c=>{(i==null?void 0:i.getValue())!==c&&(i==null||i.setValue(c))}),()=>m("div",{...o,ref:async c=>{a=await Nn(),i=a.editor.createModel(k(e),"typescript",a.Uri.file("main.ts")),i.onDidChangeContent(()=>t(i.getValue())),a.languages.typescript.typescriptDefaults.setCompilerOptions({jsx:"react"}),a.languages.typescript.typescriptDefaults.setDiagnosticsOptions({noSemanticValidation:!0,noSyntaxValidation:!0}),s=a.editor.create(c,{automaticLayout:!0,wordWrap:!0,theme:k(n)?"vs-dark":"vs"}),s.setModel(i),r&&s.addCommand(a.KeyMod.CtrlCmd|a.KeyCode.KeyS,()=>{r(i.getValue())})}})};class In{constructor(){V(this,"idx",0);V(this,"demos",[]);V(this,"currentDemo",null)}registerDemo(t,n,r){const o={id:this.idx++,name:t,version:n,code:r};this.demos.push(o),this.currentDemo||(this.currentDemo=o)}selectDemo(t){const n=this.demos.find(r=>r.id===Number(t));if(!n)throw new Error(`Cannot find demo with name ${name}`);return this.currentDemo=n,n}}const Pn=`import { rh, ref, mount, unref, setupWatch, inject, provide } from "@rhjs/rh";

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
`,Un=`import { rh, ref, mount, unref, computed } from "@rhjs/rh";

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
`,zn=`import {
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
`,Hn=`import { Button, ensureFluentUILoaded } from "@rhjs/fluent-web-components";
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
`,z=new In;z.registerDemo("HelloWorld","0.1.1-dev.19",Un);z.registerDemo("Counter","0.1.1-dev.19",Pn);z.registerDemo("TodoApp","0.1.1-dev.19",zn);z.registerDemo("Counter","0.0.34",Hn);const Je=O(z.currentDemo),Tt=()=>({mgr:z,currentDemo:Je,selectDemo(e){Je.value=z.selectDemo(e)},demos:z.demos}),Wn=()=>{const{selectDemo:e,currentDemo:t,demos:n}=Tt();return()=>m("div",null,m("select",{onChange:r=>e(r.target.value)},n.map(r=>m("option",{value:r.id},r.name," @",r.version))))},Dt=({styleFn:e,isDark:t,...n},r,o)=>()=>m("div",{...n},m($.Style,{styleFn:()=>({display:"inline-flex",alignItems:"center",justifyContent:"center",paddingLeft:"12px",paddingRight:"12px",cursor:"pointer",userSelect:"none",marginLeft:"4px","&:hover":{backgroundColor:w(t)?"rgba(64,64,64,1)":"rgba(64,64,64,0.1)"},"&:active":{outline:"solid 1px",outlineColor:w(t)?"#fff":"rgba(64,64,64,1)"},...e==null?void 0:e()})}),o),Bn=({isDark:e})=>()=>m(Dt,{onClick:()=>{R(e)&&(e.value=!k(e))},isDark:e},m("span",null,()=>w(e)?"🌘":"🌖"));function Xe({isDark:e,href:t,target:n="_blank"},r,o){return()=>m(Dt,{isDark:e,onClick:()=>{window.open(t,n)}},m("a",{href:t,target:n,style:"text-decoration: none; color: inherit;"},o))}const Fn=({isDark:e})=>()=>m("div",null,m($.Style,{styleFn:()=>({paddingLeft:"12px",paddingRight:"12px",height:"100%",width:"calc(100% - 24px)",display:"grid",gridTemplateColumns:"minmax(0, 1fr) 12px minmax(0, 1fr)"})}),m("div",{style:"display: inline-flex; align-items: center;"},m("span",{style:"user-select: none;word-break: keep-all;white-space: nowrap;"},"🧩 ",m("b",null,"R"),m("small",null,"eactive"),m("b",null,"H"),m("small",null,"ydrate"),m("b",null,"JS")," PLAYGROUND"),m(Bn,{isDark:e}),m(Wn,null)),m("div",null),m("div",{style:"display: inline-flex; align-items: center; justify-content: right;"},m(Xe,{isDark:e,href:"https://zhzluke96.github.io/rhjs-demos/#demo",target:"_self"},"demos"),m(Xe,{isDark:e,href:"https://github.com/zhzLuke96/rh.js"},"github"))),{Style:$n}=$,Vn=()=>document.querySelectorAll("iframe").forEach(e=>e.style.pointerEvents="none"),Yn=()=>document.querySelectorAll("iframe").forEach(e=>e.style.pointerEvents="auto"),Kn=({isHorizontal:e,onResize:t,ref:n})=>{const[r,o,s]=mn(!1),i=()=>o(!0),a=()=>o(!1),c=u=>{t(u.clientX,u.clientY)},l=u=>{const d=u.touches[0];t(d.clientX,d.clientY)},h=O(null);return A(s,u=>{u?(Vn(),window.addEventListener("mousemove",c),window.addEventListener("mouseup",a),window.addEventListener("touchmove",l),window.addEventListener("touchend",a)):(Yn(),window.removeEventListener("mousemove",c),window.removeEventListener("mouseup",a),window.removeEventListener("touchmove",l),window.removeEventListener("touchend",a))}),A(h,u=>{u&&(u.addEventListener("mousedown",i,{passive:!0}),u.addEventListener("touchstart",i,{passive:!0}))}),C(()=>{var u,d;(u=w(h))==null||u.removeEventListener("mousedown",i),(d=w(h))==null||d.removeEventListener("touchstart",i)}),()=>m("div",{ref:u=>{h.value=u,n&&(n.value=u)}},m($n,{styleFn:()=>({backgroundColor:w(s)?"rgba(255,255,255,0.3)":"",width:e?"100%":"12px",height:e?"12px":"100%",zIndex:w(s)?"10":"auto",cursor:e?"row-resize":"col-resize",userSelect:"none",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"12px","&:hover":{backgroundColor:"rgba(255,255,255,0.3)"}})}),"⚪⚪⚪")},Gn=()=>{const e=`
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
`.trim(),t=URL.createObjectURL(new Blob([e],{type:"text/html"}));return C(()=>URL.revokeObjectURL(t)),`${t}#?embedded=${encodeURIComponent(location.origin)}`},qn=(e,t,n="")=>`
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
`.trim();function Jn(e,t){const n=ae(t),r=o=>{n.value=e(k(n),o)};return[Le(n),r]}const Xn=(e,t,n,r)=>{const o={sendToIframe(a){var c,l;(l=(c=k(e))==null?void 0:c.contentWindow)==null||l.postMessage(a,"*")},sendToDevtools(a){var c,l;(l=(c=k(t))==null?void 0:c.contentWindow)==null||l.postMessage(a,"*")}},s=()=>{const{codeInjected:a,codeURL:c}=w(n);if(!a){if(!c){setTimeout(s,3);return}requestAnimationFrame(()=>{o.sendToIframe({event:"CODE_UPDATE",value:c}),r({type:"CODE_INJECTED"})})}},i=a=>{var h,u;const[c,l]=Et(e,t);!c||!l||((u=(h=a.data)==null?void 0:h.includes)!=null&&u.call(h,"Debugger.enable")&&(r({type:"Debugger.enable"}),s()),a.source===c.contentWindow?l.contentWindow.postMessage(a.data,"*"):a.source===l.contentWindow&&c.contentWindow.postMessage({event:"DEV",data:a.data},"*"))};return window.addEventListener("message",i),C(()=>window.removeEventListener("message",i)),o},Zn=(e,t)=>{const{importMap:n,isDark:r}=e,o=Ae(()=>{const s=qn(k(r),JSON.stringify({imports:w(n)}));return URL.createObjectURL(new Blob([s],{type:"text/html"}))});return A(o,(s,i)=>{i&&URL.revokeObjectURL(i),t({type:"HTML_CHANGED",iframeSrc:s||""})}),C(()=>URL.revokeObjectURL(k(o)||"")),{iframeSrc:o}},Qn=e=>{const{isDark:t,code:n}=e,r=ae(null),o=ae(null),s=d=>{var p;return(p=d.contentDocument)==null?void 0:p.documentElement.classList.toggle("dark",k(t))},i=d=>{const p=k(r);p&&(p.src=d)};A(()=>w(t),d=>{const p=w(r);p&&s(p)});const[a,c]=Jn((d,p)=>{var f,_;switch(p.type){case"IFRAME_READY":s(p.iframe);let g=d.codeInjected;return{...d,codeInjected:g,iframeReady:!0};case"DEVTOOLS_IFRAME_READY":return{...d,devtoolsIframeReady:!0};case"DEV_LOADED":return{...d,devLoaded:!0};case"HTML_CHANGED":return i(p.iframeSrc),d.devtoolsIframeReady&&((_=(f=k(o))==null?void 0:f.contentWindow)==null||_.location.reload()),{iframeReady:!1,devtoolsIframeReady:!1,devLoaded:!1,codeInjected:!1,darkInjected:!1};case"CODE_UPDATE":return{...d,codeURL:p.codeURL};case"CODE_INJECTED":return{...d,codeInjected:!0}}return d},{iframeReady:!1,devtoolsIframeReady:!1,devLoaded:!1,codeInjected:!1,codeURL:k(n)}),{sendToDevtools:l,sendToIframe:h}=Xn(r,o,a,c);A(()=>w(n),d=>{c({type:"CODE_UPDATE",codeURL:d}),a.value.iframeReady&&requestAnimationFrame(()=>{h({event:"CODE_UPDATE",value:d}),c({type:"CODE_INJECTED"})})});const{iframeSrc:u}=Zn(e,c);return A(r,d=>{d==null||d.addEventListener("load",()=>c({type:"IFRAME_READY",iframe:d}))}),A(o,d=>{d==null||d.addEventListener("load",()=>c({type:"DEVTOOLS_IFRAME_READY",devIframe:d}))}),{iframeSrc:u,iframeRef:r,devtoolsIframeRef:o,previewState:a,dispatch:c,sendToDevtools:l,sendToIframe:h}},er=e=>{const{importMap:t,code:n,devtools:r,isDark:o,...s}=e,i=O(null),{iframeSrc:a,iframeRef:c,devtoolsIframeRef:l,previewState:h,dispatch:u}=Qn(e),d=Gn(),p=Ae(()=>`width: 100%; height: 100%; ${w(r)?"display: block;":"display: none;"}`),f=O(.625),_=O(null),g=(v,E)=>{const[x,L]=Et(i,_);if(!x||!L)return;let J,X;const Z=x.getBoundingClientRect();J=E-Z.top-L.offsetHeight/2,X=x.offsetHeight-L.offsetHeight;const pe=J/X;f.value=pe};return()=>m("div",{...s,ref:i},m($.Style,{styleFn:()=>{const v=w(f);return{display:"grid",height:"100%",width:"100%",gridTemplateRows:w(r)?`minmax(0, ${v}fr) 12px minmax(0, ${1-v}fr)`:"minmax(0, 1fr)"}}}),m("iframe",{ref:c,src:a,style:"width: 100%;height: 100%;",frameBorder:0,sandbox:"allow-popups-to-escape-sandbox allow-scripts allow-popups allow-forms allow-pointer-lock allow-top-navigation allow-modals allow-same-origin"}),m("div",null,m(Kn,{ref:_,isHorizontal:!0,onResize:g})),m("iframe",{ref:l,style:p,src:d,frameBorder:"0"}))},tr=({isDark:e})=>()=>m($.GlobalStyle,{styleFn:()=>({fontFamily:"'Karla', system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",lineHeight:"1.5",fontWeight:"400",colorScheme:w(e)?"light dark":"dark",color:w(e)?"rgba(255, 255, 255, 0.87)":"#242424",backgroundColor:w(e)?"#333":"#fff",fontSynthesis:"none",textRendering:"optimizeLegibility","-webkitFontSmoothing":"antialiased","-moz-osxFontSmoothing":"grayscale","-webkitTextSizeAdjust":"100%",height:"100vh",width:"100vw",body:{margin:"0",minWidth:"100vw",minHeight:"100vh",width:"100%",height:"100%"},"#app":{width:"100%",height:"100%"}})});function nr(){return new Worker(""+new URL("complier.worker-026b4f92.js",import.meta.url).href)}class rr{constructor(){V(this,"registry",{})}registerWorker(t,n){this.registry[t]?console.warn(`Worker of type ${t} already registered.`):this.registry[t]=n}removeWorker(t){delete this.registry[t]}getWorker(t){const n=this.registry[t];if(n)return n;throw new Error(`No worker of type ${t} registered.`)}postMessage(t,n){this.getWorker(t).postMessage(n)}listenRecv(t,n){const r=this.getWorker(t);let o;const s=i=>{const{message_token:a}=i.data||{};if(a!==n)return;const c={...i.data};delete c.message_token,o(c),r.removeEventListener("message",s)};return r.addEventListener("message",s),{recv:new Promise((i,a)=>{o=i}),dispose:()=>r.removeEventListener("message",s)}}}class or{constructor(){V(this,"registry",new rr);this.initialize()}async initialize(){this.registry.registerWorker("complier",new nr)}worker_caller(t,n){const r=Math.random().toString(36).slice(2),o={...n,message_token:r};return this.registry.postMessage(t,o),this.registry.listenRecv(t,r)}compileFile(t){return this.worker_caller("complier",{event:"BABEL",payload:{file:t,compile_options:{}}})}compileFiles(t){return this.worker_caller("complier",{event:"ROLLUP",payload:{files:t,compile_options:{}}})}}const Ze=new or;b.global_source.on("throw",console.error);const sr=()=>{let e=null;return C(()=>e==null?void 0:e.dispose()),{compileFile(t){return e==null||e.dispose(),e=Ze.compileFile(t),e.recv},compileFiles(t){return e==null||e.dispose(),e=Ze.compileFiles(t),e.recv}}},ir='import("@rhjs/rh").then(({cs, ElementSource}) => window.dispose = () => (cs || ElementSource).global_source.emit("unmount"));',ar=()=>{var c;const e=O(!0),{currentDemo:t}=Tt(),n=Ae(()=>{var l;return{"@rhjs/rh":`https://unpkg.com/@rhjs/rh@${((l=t.value)==null?void 0:l.version)||"latest"}/dist/main.module.mjs`,"@rhjs/fluent-web-components":"https://unpkg.com/@rhjs/fluent-web-components@latest/dist/main.module.mjs"}}),r=O(""),o=Dn(r,{type:"text/javascript"}),s=O(((c=t.value)==null?void 0:c.code)||""),i=sr(),a=async()=>{const l=k(s);if(!l)return;const h=await i.compileFile({filename:"main.tsx",source:l});console.log(h),r.value=`${h.compiled}
${ir}`};return dn(a),A(t,l=>{l&&s.value!==l.code&&(console.log("change"),s.value=l.code,a())}),()=>m("div",null,m(tr,{isDark:e}),m($.Style,{styleFn:()=>({position:"relative",display:"flex",flexFlow:"column",width:"100%",height:"100%",maxWidth:"100vw",maxHeight:"100vh",overflow:"hidden"})}),m("header",{style:"height: 30px; width: 100%;"},m(Fn,{isDark:e})),m("div",{style:"flex: 1;"},m($.Style,{styleFn:()=>({position:"relative",display:"flex",flexFlow:"row",width:"100%",height:"100%"})}),m(Mn,{style:"flex: 1;",value:s,onChange:l=>s.value=l,onSave:a,isDark:e}),m(er,{style:"flex: 1;",importMap:n,code:o,devtools:!0,isDark:e})))};pn("#app",ar);
