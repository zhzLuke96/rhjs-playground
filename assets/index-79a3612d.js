var wt=Object.defineProperty;var bt=(e,t,n)=>t in e?wt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Y=(e,t,n)=>(bt(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();function kt(e,t){return t.forEach(function(n){n&&typeof n!="string"&&!Array.isArray(n)&&Object.keys(n).forEach(function(r){if(r!=="default"&&!(r in e)){var o=Object.getOwnPropertyDescriptor(n,r);Object.defineProperty(e,r,o.get?o:{enumerable:!0,get:function(){return n[r]}})}})}),e}function St(e,t){const n=Object.create(null),r=e.split(",");for(let o=0;o<r.length;o++)n[r[o]]=!0;return t?o=>!!n[o.toLowerCase()]:o=>!!n[o]}const Et=()=>{},Ct=Object.assign,Rt=Object.prototype.hasOwnProperty,ie=(e,t)=>Rt.call(e,t),z=Array.isArray,re=e=>Fe(e)==="[object Map]",_e=e=>typeof e=="symbol",ae=e=>e!==null&&typeof e=="object",xt=Object.prototype.toString,Fe=e=>xt.call(e),Ot=e=>Fe(e).slice(8,-1),ge=e=>typeof e=="string"&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ye=(e,t)=>!Object.is(e,t);let Tt;function He(e,t=Tt){t&&t.active&&t.effects.push(e)}const we=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Ve=e=>(e.w&I)>0,$e=e=>(e.n&I)>0,de=new WeakMap;let J=0,I=1;const he=30;let A;const V=Symbol(""),fe=Symbol("");class Ke{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,He(this,r)}run(){if(!this.active)return this.fn();let t=A,n=U;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=A,A=this,U=!0,I=1<<++J,J<=he?(({deps:r})=>{if(r.length)for(let o=0;o<r.length;o++)r[o].w|=I})(this):xe(this),this.fn()}finally{J<=he&&(r=>{const{deps:o}=r;if(o.length){let s=0;for(let a=0;a<o.length;a++){const i=o[a];Ve(i)&&!$e(i)?i.delete(r):o[s++]=i,i.w&=~I,i.n&=~I}o.length=s}})(this),I=1<<--J,A=this.parent,U=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){A===this?this.deferStop=!0:this.active&&(xe(this),this.onStop&&this.onStop(),this.active=!1)}}function xe(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}function be(e,t){e.effect&&(e=e.effect.fn);const n=new Ke(e);t&&(Ct(n,t),t.scope&&He(n,t.scope)),t&&t.lazy||n.run();const r=n.run.bind(n);return r.effect=n,r}function qe(e){e.effect.stop()}let U=!0;const Ye=[];function ce(){Ye.push(U),U=!1}function le(){const e=Ye.pop();U=e===void 0||e}function D(e,t,n){if(U&&A){let r=de.get(e);r||de.set(e,r=new Map);let o=r.get(n);o||r.set(n,o=we()),Ge(o)}}function Ge(e,t){let n=!1;J<=he?$e(e)||(e.n|=I,n=!Ve(e)):n=!e.has(A),n&&(e.add(A),A.deps.push(e))}function P(e,t,n,r,o,s){const a=de.get(e);if(!a)return;let i=[];if(t==="clear")i=[...a.values()];else if(n==="length"&&z(e)){const c=Number(r);a.forEach((l,u)=>{(u==="length"||u>=c)&&i.push(l)})}else switch(n!==void 0&&i.push(a.get(n)),t){case"add":z(e)?ge(n)&&i.push(a.get("length")):(i.push(a.get(V)),re(e)&&i.push(a.get(fe)));break;case"delete":z(e)||(i.push(a.get(V)),re(e)&&i.push(a.get(fe)));break;case"set":re(e)&&i.push(a.get(V))}if(i.length===1)i[0]&&pe(i[0]);else{const c=[];for(const l of i)l&&c.push(...l);pe(we(c))}}function pe(e,t){const n=z(e)?e:[...e];for(const r of n)r.computed&&Oe(r);for(const r of n)r.computed||Oe(r)}function Oe(e,t){(e!==A||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Dt=St("__proto__,__v_isRef,__isVue"),Je=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(_e)),Lt=Xe(),At=Xe(!0),Te=jt();function jt(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=g(this);for(let s=0,a=this.length;s<a;s++)D(r,0,s+"");const o=r[t](...n);return o===-1||o===!1?r[t](...n.map(g)):o}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){ce();const r=g(this)[t].apply(this,n);return le(),r}}),e}function Nt(e){const t=g(this);return D(t,0,e),t.hasOwnProperty(e)}function Xe(e=!1,t=!1){return function(n,r,o){if(r==="__v_isReactive")return!e;if(r==="__v_isReadonly")return e;if(r==="__v_isShallow")return t;if(r==="__v_raw"&&o===(e?t?Kt:et:t?$t:Qe).get(n))return n;const s=z(n);if(!e){if(s&&ie(Te,r))return Reflect.get(Te,r,o);if(r==="hasOwnProperty")return Nt}const a=Reflect.get(n,r,o);return(_e(r)?Je.has(r):Dt(r))?a:(e||D(n,0,r),t?a:R(a)?s&&ge(r)?a:a.value:ae(a)?e?Se(a):tt(a):a)}}function Mt(e=!1){return function(t,n,r,o){let s=t[n];if(oe(s)&&R(s)&&!R(r))return!1;if(!e&&(rt(r)||oe(r)||(s=g(s),r=g(r)),!z(t)&&R(s)&&!R(r)))return s.value=r,!0;const a=z(t)&&ge(n)?Number(n)<t.length:ie(t,n),i=Reflect.set(t,n,r,o);return t===g(o)&&(a?ye(r,s)&&P(t,"set",n,r):P(t,"add",n,r)),i}}const It={get:Lt,set:Mt(),deleteProperty:function(e,t){const n=ie(e,t),r=Reflect.deleteProperty(e,t);return r&&n&&P(e,"delete",t,void 0),r},has:function(e,t){const n=Reflect.has(e,t);return _e(t)&&Je.has(t)||D(e,0,t),n},ownKeys:function(e){return D(e,0,z(e)?"length":V),Reflect.ownKeys(e)}},zt={get:At,set:(e,t)=>!0,deleteProperty:(e,t)=>!0},ke=e=>e,ue=e=>Reflect.getPrototypeOf(e);function Z(e,t,n=!1,r=!1){const o=g(e=e.__v_raw),s=g(t);n||(t!==s&&D(o,0,t),D(o,0,s));const{has:a}=ue(o),i=r?ke:n?Ee:X;return a.call(o,t)?i(e.get(t)):a.call(o,s)?i(e.get(s)):void(e!==o&&e.get(t))}function Q(e,t=!1){const n=this.__v_raw,r=g(n),o=g(e);return t||(e!==o&&D(r,0,e),D(r,0,o)),e===o?n.has(e):n.has(e)||n.has(o)}function ee(e,t=!1){return e=e.__v_raw,!t&&D(g(e),0,V),Reflect.get(e,"size",e)}function De(e){e=g(e);const t=g(this);return ue(t).has.call(t,e)||(t.add(e),P(t,"add",e,e)),this}function Le(e,t){t=g(t);const n=g(this),{has:r,get:o}=ue(n);let s=r.call(n,e);s||(e=g(e),s=r.call(n,e));const a=o.call(n,e);return n.set(e,t),s?ye(t,a)&&P(n,"set",e,t):P(n,"add",e,t),this}function Ae(e){const t=g(this),{has:n,get:r}=ue(t);let o=n.call(t,e);o||(e=g(e),o=n.call(t,e)),r&&r.call(t,e);const s=t.delete(e);return o&&P(t,"delete",e,void 0),s}function je(){const e=g(this),t=e.size!==0,n=e.clear();return t&&P(e,"clear",void 0,void 0),n}function te(e,t){return function(n,r){const o=this,s=o.__v_raw,a=g(s),i=t?ke:e?Ee:X;return!e&&D(a,0,V),s.forEach((c,l)=>n.call(r,i(c),i(l),o))}}function ne(e,t,n){return function(...r){const o=this.__v_raw,s=g(o),a=re(s),i=e==="entries"||e===Symbol.iterator&&a,c=e==="keys"&&a,l=o[e](...r),u=n?ke:t?Ee:X;return!t&&D(s,0,c?fe:V),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:i?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function M(e){return function(...t){return e!=="delete"&&this}}function Ut(){const e={get(o){return Z(this,o)},get size(){return ee(this)},has:Q,add:De,set:Le,delete:Ae,clear:je,forEach:te(!1,!1)},t={get(o){return Z(this,o,!1,!0)},get size(){return ee(this)},has:Q,add:De,set:Le,delete:Ae,clear:je,forEach:te(!1,!0)},n={get(o){return Z(this,o,!0)},get size(){return ee(this,!0)},has(o){return Q.call(this,o,!0)},add:M("add"),set:M("set"),delete:M("delete"),clear:M("clear"),forEach:te(!0,!1)},r={get(o){return Z(this,o,!0,!0)},get size(){return ee(this,!0)},has(o){return Q.call(this,o,!0)},add:M("add"),set:M("set"),delete:M("delete"),clear:M("clear"),forEach:te(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{e[o]=ne(o,!1,!1),n[o]=ne(o,!0,!1),t[o]=ne(o,!1,!0),r[o]=ne(o,!0,!0)}),[e,n,t,r]}const[Wt,Pt,Bt,Ft]=Ut();function Ze(e,t){const n=t?e?Ft:Bt:e?Pt:Wt;return(r,o,s)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?r:Reflect.get(ie(n,o)&&o in r?n:r,o,s)}const Ht={get:Ze(!1,!1)},Vt={get:Ze(!0,!1)},Qe=new WeakMap,$t=new WeakMap,et=new WeakMap,Kt=new WeakMap;function tt(e){return oe(e)?e:nt(e,!1,It,Ht,Qe)}function Se(e){return nt(e,!0,zt,Vt,et)}function nt(e,t,n,r,o){if(!ae(e)||e.__v_raw&&(!t||!e.__v_isReactive))return e;const s=o.get(e);if(s)return s;const a=(i=e).__v_skip||!Object.isExtensible(i)?0:function(l){switch(l){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}(Ot(i));var i;if(a===0)return e;const c=new Proxy(e,a===2?r:n);return o.set(e,c),c}function oe(e){return!(!e||!e.__v_isReadonly)}function rt(e){return!(!e||!e.__v_isShallow)}function g(e){const t=e&&e.__v_raw;return t?g(t):e}const X=e=>ae(e)?tt(e):e,Ee=e=>ae(e)?Se(e):e;function ot(e){U&&A&&Ge((e=g(e)).dep||(e.dep=we()))}function st(e,t){const n=(e=g(e)).dep;n&&pe(n)}function R(e){return!(!e||e.__v_isRef!==!0)}function C(e){return it(e,!1)}function se(e){return it(e,!0)}function it(e,t){return R(e)?e:new qt(e,t)}class qt{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:g(t),this._value=n?t:X(t)}get value(){return ot(this),this._value}set value(t){const n=this.__v_isShallow||rt(t)||oe(t);t=n?t:g(t),ye(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:X(t),st(this))}}function y(e){return R(e)?e.value:e}var at;class Yt{constructor(t,n,r,o){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[at]=!1,this._dirty=!0,this.effect=new Ke(t,()=>{this._dirty||(this._dirty=!0,st(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=r}get value(){const t=g(this);return ot(t),!t._dirty&&t._cacheable||(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}at="__v_isReadonly";function me(){return me=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},me.apply(this,arguments)}var Ne,Me,Gt=(Ne=function(e){var t=Object.prototype.hasOwnProperty,n="~";function r(){}function o(c,l,u){this.fn=c,this.context=l,this.once=u||!1}function s(c,l,u,h,d){if(typeof u!="function")throw new TypeError("The listener must be a function");var m=new o(u,h||c,d),_=n?n+l:l;return c._events[_]?c._events[_].fn?c._events[_]=[c._events[_],m]:c._events[_].push(m):(c._events[_]=m,c._eventsCount++),c}function a(c,l){--c._eventsCount==0?c._events=new r:delete c._events[l]}function i(){this._events=new r,this._eventsCount=0}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(n=!1)),i.prototype.eventNames=function(){var c,l,u=[];if(this._eventsCount===0)return u;for(l in c=this._events)t.call(c,l)&&u.push(n?l.slice(1):l);return Object.getOwnPropertySymbols?u.concat(Object.getOwnPropertySymbols(c)):u},i.prototype.listeners=function(c){var l=this._events[n?n+c:c];if(!l)return[];if(l.fn)return[l.fn];for(var u=0,h=l.length,d=new Array(h);u<h;u++)d[u]=l[u].fn;return d},i.prototype.listenerCount=function(c){var l=this._events[n?n+c:c];return l?l.fn?1:l.length:0},i.prototype.emit=function(c,l,u,h,d,m){var _=n?n+c:c;if(!this._events[_])return!1;var w,v,p=this._events[_],k=arguments.length;if(p.fn){switch(p.once&&this.removeListener(c,p.fn,void 0,!0),k){case 1:return p.fn.call(p.context),!0;case 2:return p.fn.call(p.context,l),!0;case 3:return p.fn.call(p.context,l,u),!0;case 4:return p.fn.call(p.context,l,u,h),!0;case 5:return p.fn.call(p.context,l,u,h,d),!0;case 6:return p.fn.call(p.context,l,u,h,d,m),!0}for(v=1,w=new Array(k-1);v<k;v++)w[v-1]=arguments[v];p.fn.apply(p.context,w)}else{var T,L=p.length;for(v=0;v<L;v++)switch(p[v].once&&this.removeListener(c,p[v].fn,void 0,!0),k){case 1:p[v].fn.call(p[v].context);break;case 2:p[v].fn.call(p[v].context,l);break;case 3:p[v].fn.call(p[v].context,l,u);break;case 4:p[v].fn.call(p[v].context,l,u,h);break;default:if(!w)for(T=1,w=new Array(k-1);T<k;T++)w[T-1]=arguments[T];p[v].fn.apply(p[v].context,w)}}return!0},i.prototype.on=function(c,l,u){return s(this,c,l,u,!1)},i.prototype.once=function(c,l,u){return s(this,c,l,u,!0)},i.prototype.removeListener=function(c,l,u,h){var d=n?n+c:c;if(!this._events[d])return this;if(!l)return a(this,d),this;var m=this._events[d];if(m.fn)m.fn!==l||h&&!m.once||u&&m.context!==u||a(this,d);else{for(var _=0,w=[],v=m.length;_<v;_++)(m[_].fn!==l||h&&!m[_].once||u&&m[_].context!==u)&&w.push(m[_]);w.length?this._events[d]=w.length===1?w[0]:w:a(this,d)}return this},i.prototype.removeAllListeners=function(c){var l;return c?this._events[l=n?n+c:c]&&a(this,l):(this._events=new r,this._eventsCount=0),this},i.prototype.off=i.prototype.removeListener,i.prototype.addListener=i.prototype.on,i.prefixed=n,i.EventEmitter=i,e.exports=i},Ne(Me={exports:{}}),Me.exports);const O={CS_HOOK_CB:Symbol("HOOK_CB"),IS_ANCHOR:Symbol("IS_ANCHOR"),NONE:Symbol("NONE"),SELF_CS:Symbol("SELF_CS"),CACHE_NODES:Symbol("CACHE_NODES"),IS_COMPONENT:Symbol("IS_COMPONENT")};class b extends Gt{static peek(){return b.source_stack.peek()||b.global_source}constructor(t,n){if(super(),this.host=void 0,this.__context={},this.__parent_source=b.source_stack.peek(),this.__container_source=this,this.states={mounted:!1,unmounted:!1},this.host=t,this.__parent_source)if(this.setupContainerSource(),this.on("throw",o=>{var s;return(s=this.__parent_source)==null?void 0:s.emit("throw",o)}),this.once("mount",()=>this.states.mounted=!0),this.once("unmount",()=>this.states.unmounted=!0),n){var r;((this.__container_source===this?(r=this.__container_source.__parent_source)==null?void 0:r.__container_source:this.__container_source)||this.__parent_source).once("unmount",()=>{this.emit("unmount"),this.dispose()})}else this.__parent_source.once("unmount",()=>{this.emit("unmount"),this.dispose()}),this.__parent_source.once("update_after",()=>{this.__parent_source.once("update_after",()=>{this.emit("unmount")})})}onMount(t){return this.states.mounted?t():this.once("mount",t),this}onUnmount(t){return this.states.unmounted?t():this.once("unmount",t),this}setupContainerSource(){for(;this.__container_source&&this.__container_source!==b.global_source;){var t;if((t=this.__container_source.host)!=null&&t[O.IS_COMPONENT])break;this.__container_source=this.__container_source.__parent_source}}dispose(){this.removeAllListeners(),this.__context={}}effect(t,n){const r=be(t,n);return this.once("unmount",()=>qe(r)),r}}b.source_stack=new class{constructor(){this.items=void 0,this.items=[]}toArray(){return[...this.items]}push(e){this.items.push(e)}pop(){return this.items.pop()}peek(){return this.items[this.items.length-1]}size(){return this.items.length}isEmpty(){return this.items.length===0}},b.global_source=new b;const H=(e,t,n)=>{const r=o=>{const s=o.relatedNode;s&&s===e.parentNode&&t(s,e)};return e.addEventListener(n,r),()=>e.removeEventListener(n,r)};class x{constructor(){this.source=void 0,this.viewAnchor=(()=>{const t=document.createTextNode("");return t[O.IS_ANCHOR]=!0,t})(),this.currentView=this.viewAnchor,this.renderEffectRunner=void 0,this.rawTarget=void 0,this.dispose_onDomInserted=void 0,this._initialized=!1}_initialize(){this._initialized||(this._initialized=!0,this.initialize())}initialize(){this.source||(this.source=new b(this)),this.source.once("unmount",()=>this.dispose())}ensureEffectRunner(){return this._initialize(),this.renderEffectRunner||(this.renderEffectRunner=be(this.update.bind(this),{lazy:!1}),this.dispose_onDomInserted=H(this.currentView,(t,n)=>{var r,o,s;(r=this.dispose_onDomInserted)==null||r.call(this),this.source.emit("mount"),this.viewAnchor!==n&&t.insertBefore(this.viewAnchor,n),n!==this.currentView&&(t.insertBefore(this.currentView,n),(s=n)&&s[O.IS_ANCHOR]||(o=n.parentElement)==null||o.removeChild(n))},"DOMNodeInserted")),this.renderEffectRunner}render(){return null}_update(){const t=this.currentView,n=this.render()||this.viewAnchor,r=t==null?void 0:t.parentElement;r&&r.replaceChild(n,t),this.currentView=n}update(){var t,n;if(this.source.states.unmounted||(t=this.source.__parent_source)!=null&&t.states.unmounted||(n=this.source.__container_source)!=null&&n.states.unmounted)this.dispose();else{this.source.emit("update_before");try{b.source_stack.push(this.source),this.source.emit("update"),this._update()}catch(r){requestAnimationFrame(()=>{this.source.emit("throw",r),console.error(r)})}finally{b.source_stack.pop(),this.source.emit("update_after")}}}dispose(){var t,n,r,o;(t=this.renderEffectRunner)==null||t.effect.stop(),(n=this.currentView.parentElement)==null||n.removeChild(this.currentView),(r=this.viewAnchor.parentElement)==null||r.removeChild(this.viewAnchor),(o=this.dispose_onDomInserted)==null||o.call(this)}static fromRender(t){const n=new x;return n.render=()=>x.warpView(t()),n.rawTarget=t,n}static fromRef(t){const n=new x;return n.render=()=>x.warpView(y(t)),n.rawTarget=t,n}static warpView(t){return t instanceof Node||t===null?t:document.createTextNode(`${t}`)}static warp(t){if(typeof t!="function"&&!R(t))return x.warpView(t);let n;if(typeof t=="function")n=x.fromRender(t);else{if(!R(t))throw new Error("Unknown view type.");n=x.fromRef(t)}return n.ensureEffectRunner(),n.currentView}}let ct;ct=O.IS_COMPONENT;class lt extends x{get[ct](){return!0}constructor(t,n,r){super(),this._define=void 0,this.props=void 0,this.children=void 0,this.state=void 0,this._define=t,this.props=n,this.children=r}initialize(){this.initializeComponent()}initializeComponent(){this.source=new b(this,"__node_cached"in this.props),this.source.once("unmount",()=>this.dispose()),this.installSource(),this.initializeSetup()}initializeSetup(){const{props:t,children:n}=this;ce(),b.source_stack.push(this.source),this.source.emit("setup_before"),this.state=this._define.setup(t,n),this.source.emit("setup_after"),b.source_stack.pop(),le()}render(){const t=this._define.render(this.props,this.state,this.children);return x.warp(t)}installSource(){var t,n;(t=(n=this._define)[O.CS_HOOK_CB])==null||t.call(n,this.source)}}class Jt extends lt{constructor(t,n,r){const o={setup:(s,a)=>{const i={};return o.render=t(s,i,a),i},render:()=>{}};o[O.CS_HOOK_CB]=t[O.CS_HOOK_CB],super(o,n,r),this._function_define=void 0,this._function_define=t}}class Xt{constructor(t,n,r){this.tagNameOrDome=void 0,this.props=void 0,this.children=void 0,this.node=void 0,this.source=new b(this),this.tagNameOrDome=t,this.props=n,this.children=r,this.source.once("unmount",()=>this.dispose()),this.buildNode()}dispose(){var t,n;(t=this.node)==null||(n=t.parentElement)==null||n.removeChild(this.node)}buildNode(){if(this.node)return this.node;this.node=this.tagNameOrDome instanceof Element?this.tagNameOrDome:document.createElement(this.tagNameOrDome),ce(),this.hydrateChildren(),le();for(const[t,n]of Object.entries(this.props))this.hydrateAttribute(t,n);return this.node}isValidAttributeName(t){return/^[a-zA-Z][\w-]*$/.test(t)}hydrateAttribute(t,n){if(!t.startsWith("_")&&!t.startsWith("$")&&this.isValidAttributeName(t)){switch(t){case"ref":return void(typeof n=="function"?n(this.node):R(n)&&(n.value=this.node));case"effect":return void(typeof n=="function"&&this.source.effect(()=>n(this.node),{lazy:!1}))}if(t.startsWith("on")&&typeof n=="function"){const r=t.slice(2).toLowerCase(),o=this.node["__cb_"+t];return o&&this.node.removeEventListener(r,o),this.node["__cb_"+t]=n,void this.node.addEventListener(r,n)}this.source.effect(()=>{const r=y(n);if(t!=="value")if(t!=="defaultValue")typeof r!="boolean"?this.node.setAttribute(t,r):r?this.node.setAttribute(t,""):this.node.removeAttribute(t);else{if(this.node.value)return;this.node.value=r}else this.node.value=r},{lazy:!1})}}hydrateChildren(){const{children:t}=this;for(const n of t){if(n==null)continue;const r=x.warp(n);r&&this.node.appendChild(r)}}}function $(e){return e?e(b.peek()):b.peek()}const Zt=(e,t,n=!1)=>$(r=>r[n?"once":"on"](e,t)),Qt=e=>$(t=>t.onMount(e)),E=e=>$(t=>t.onUnmount(e)),en=e=>Zt("throw",e),Ie=(e,t)=>{var n,r;if(!e)return;const o=b.peek(),{__container_source:s}=o;s&&((n=s.__context)[r=O.CACHE_NODES]||(n[r]={}),s.__context[O.CACHE_NODES][e]=t)},ut=(e,t={},n=[])=>{const{key:r}=t;delete t.key,r&&(t.__node_cached=!0);const o=(s=>{var a,i;if(!s)return;const c=b.peek(),{__container_source:l}=c;return l?((a=l.__context)[i=O.CACHE_NODES]||(a[i]={}),l.__context[O.CACHE_NODES][s]):void 0})(r);if(o)return o;if(typeof e=="function"){const s=new Jt(e,t,n);return Ie(r,s),s}if(typeof e=="object"&&typeof e.render=="function"&&typeof e.setup=="function"){const s=new lt(e,t,n);return Ie(r,s),s}throw new Error(`Valid define type [${typeof e}] is not supported for reactiveHydrate.`)},tn=(e,t,...n)=>{var r;if(t||(t={}),n||(n=[]),n=((r=n)==null?void 0:r.flat())||n,typeof e=="string"||e instanceof Element)return new Xt(e,t,n).node;const o=ut(e,t,n);return o.ensureEffectRunner(),o.currentView},f=tn,nn=(e,t,n)=>{const r=e instanceof Element?e:document.querySelector(e);if(!r)throw new Error(`Could not find container: ${e}`);if(t instanceof Element)return r.appendChild(t),null;const o=ut(t,n);return o.ensureEffectRunner(),r.appendChild(o.currentView),o},B=(e,t)=>{let n=null;const r=be(()=>{n==null||n(),e(s=>n=s)},me({lazy:!1},t)),o=()=>{n==null||n(),qe(r),n=null};return E(o),[r,o]},j=(e,t,n)=>{let r;return B(()=>{const o=typeof e=="function"?e(r):y(e);Re(()=>t(o,r)),r=o},n)},Ce=(e,t)=>{const n=C();return B(()=>{const r=S(n),o=e(r);var s,a;s=r,a=o,Object.is(s,a)||s===a||(n.value=o)},t),n},Re=(e,...t)=>{ce();const n=e(...t);return le(),n},S=e=>Re(()=>y(e));function rn(e){const t=R(e)?e:C(e);return[()=>y(t),n=>{if(typeof n=="function"){const r=S(t);t.value=n(r)}else t.value=n},t]}const on=(...e)=>e.map(t=>y(t)),dt=on,ht=(e,t)=>(((n,r)=>{if(!r)return;const o=n[O.CS_HOOK_CB];n[O.CS_HOOK_CB]=s=>{o==null||o(s),r(s)}})(e,t),e),sn=e=>new Proxy({},{get(t,n,r){let o=e;for(;o!==void 0;){const s=o.__context;if(n in s)return s[n];o=o.__parent_source}},set:(t,n,r,o)=>(e.__context[n]=r,!0)}),an=e=>{const t=$();if(!t.__container_source)throw new Error("Container source not found, must be inside a container component to use element source");const n=sn(t.__container_source);return e==null||e(n),n},cn=ht({setup({fallbackRender:e,onError:t,render:n}){const r=b.peek();let o=C(null);r.on("throw",a=>{a instanceof Error&&(t==null||t(a),o.value=a)});const s=C(1);return{catchError:o,rerenderRef:s,fallbackRender:e,childrenRender:n}},render(e,{fallbackRender:t,rerenderRef:n,catchError:r,childrenRender:o}){const s=()=>{n.value=Date.now(),r.value=null};return r.value?Re(()=>t(r.value,s)):o()}}),ft=ht({setup(e,[t,...n]){const r={anchor:document.createTextNode(""),children:[],parentNode:null},o=$(),s=(a=typeof t=="function"?t:()=>[t,...n],()=>{return(h=a(),Array.isArray(h)?h:[h]).flat(1).map(d=>x.warp(d)).filter(Boolean);var h});var a;const[i,c]=B(()=>{b.source_stack.push(o),(()=>{const h=r.children,d=s(),{parentNode:m,anchor:_}=r;if(!m)return;const w=Math.max(d.length,h.length);for(let v=0;v<w;v++){const p=d[v],k=h[v];if(!p&&k)k.remove();else if(!k&&p)m.insertBefore(p,_);else if(k&&p){if(k===p)continue;m.replaceChild(p,k)}}r.children=d})(),b.source_stack.pop()}),l=H(r.anchor,h=>{r.parentNode=h,i()},"DOMNodeInserted"),u=H(r.anchor,h=>{r.children.forEach(d=>d==null?void 0:d.remove()),r.parentNode=null},"DOMNodeRemoved");return E(()=>{l(),u(),c(),r.anchor.remove(),r.children.forEach(h=>h==null?void 0:h.remove())}),$(h=>{var d;(d=h.__parent_source)==null||d.once("update_before",()=>{var m;r.children.forEach(_=>_==null?void 0:_.remove()),(m=h.__parent_source)==null||m.once("update_after",()=>{r.anchor.remove()})})}),r},render:(e,t)=>t.anchor});var ve=function e(t,n){if(t===n)return!0;if(t&&n&&typeof t=="object"&&typeof n=="object"){if(t.constructor!==n.constructor)return!1;var r,o,s;if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(o=r;o--!=0;)if(!e(t[o],n[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((r=(s=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(o=r;o--!=0;)if(!Object.prototype.hasOwnProperty.call(n,s[o]))return!1;for(o=r;o--!=0;){var a=s[o];if(!e(t[a],n[a]))return!1}return!0}return t!=t&&n!=n},ze=kt({__proto__:null,default:ve},[ve]);const ln=({getItems:e,render:t,needUpdate:n=(r,o)=>!((ze==null?void 0:ve)||ze)(r,o)})=>{const r=se([]);return j(e,o=>{const s=S(r);for(let i=0;i<Math.max(s.length,o.length);i++){const c=s[i],l=o[i];if(c!==void 0&&l!==void 0){if(!c.node||n(l,c.data)){const u=t(l,i,o,c.node);c.node=u,c.data=l}}else if(c===void 0){const u=t(l,i,o);s.push({data:l,node:u})}else l===void 0&&(c.del=!0)}const a=s.filter(i=>i.del!==!0);r.value=a},{lazy:!1}),()=>f(ft,{},()=>r.value.filter(o=>!o.del).map(o=>o.node))},un=["container"],dn=(e,t,n)=>{let{container:r}=e,o=function(i,c){if(i==null)return{};var l,u,h={},d=Object.keys(i);for(u=0;u<d.length;u++)c.indexOf(l=d[u])>=0||(h[l]=i[l]);return h}(e,un);const s=document.createTextNode(""),a=r||document.createElement("div");return document.body.appendChild(a),f(a,o,...n),E(()=>{var i;(i=a.parentElement)==null||i.removeChild(a)}),()=>s},pt=e=>{if(!e)throw new Error("styleOrFn is required.");return typeof e=="function"?e:()=>e},mt=(e,t,n)=>{const r=an(),{applySheet:o,removeSheet:s,parseStyle:a}=(c=>{const l=new CSSStyleSheet;let u=!1;return{sheet:l,parseStyle:h=>{const d=function(m,_,w=!1){const v=w?`
`:" ",p=[{nodeSelector:_,cssObject:m}];let k="";for(;p.length>0;){const{nodeSelector:L,cssObject:q}=p.pop();k+=`${L} {${v}`;for(const N in q){const F=q[N];if(typeof F=="object"){const G=L===":root",yt=N.startsWith("&")?L+N.slice(1).replace(/&/g,L):`${G?"":L} ${N}`.trim();p.push({nodeSelector:yt,cssObject:F})}else{if(typeof F=="string"&&!F.trim()||F==null)continue;k+=`${T=N,T.replace(/[A-Z]/g,G=>`-${G.toLowerCase()}`)}: ${q[N]};${v}`}}k+=`}
`}var T;return k.trim()}(c(),h);l.replaceSync(d)},applySheet:()=>{u||(u=!0,document.adoptedStyleSheets=[...document.adoptedStyleSheets,l])},removeSheet:()=>{u&&(u=!1,document.adoptedStyleSheets=[...document.adoptedStyleSheets].filter(h=>h!==l))}}})(()=>e(r)),i=document.createTextNode("");if(B(()=>a(t)),E(H(i,o,"DOMNodeInserted")),E(H(i,s,"DOMNodeRemoved")),E(s),n){const c=l=>{var u;return l==null||(u=l.classList)==null?void 0:u.remove(n)};E(H(i,l=>{var u;return l==null||(u=l.classList)==null?void 0:u.add(n)},"DOMNodeInserted")),E(H(i,c,"DOMNodeRemoved"))}return{anchor:i}},hn=(e,t)=>{const n=pt(e.styleFn||e.style||t),r=`__s_${Math.floor(Math.random()*Number.MAX_SAFE_INTEGER)}`,{anchor:o}=mt(n,`.${r}`,r);return()=>o},fn=(e,t)=>{const n=pt(e.styleFn||e.style||t),{anchor:r}=mt(n,":root");return()=>r},pn=({component:e,render:t,fallback:n,error:r})=>{const o=C("fulfilled");en(async i=>{var c;!(c=i)||typeof c!="object"&&typeof c!="function"||typeof c.then!="function"||(o.value="pending",i.then(()=>o.value="fulfilled"),i.catch(()=>o.value="rejected"))});const s=e?f(e):t?f(()=>()=>x.warpView(t())):null,a=f(()=>()=>{switch(o.value){case"pending":return n();case"fulfilled":return s;case"rejected":return(r||n)()}});return()=>a},mn=(e,...t)=>{const n=[];for(let r=0;r<e.length;r++){n.push(document.createTextNode(e[r]));const o=t[r],s=document.createTextNode("");typeof o=="function"?B(()=>s.textContent=o()):R(o)&&B(()=>s.textContent=String(o.value)),n.push(s)}return n},vt=(e,...t)=>e.reduce((n,r,o)=>{var s;return n+=r,o<t.length&&(n+=y(typeof(s=t[o])=="function"?s():s)),n},""),vn=(e,...t)=>{const n=function(r,o,s=!1){let a,i;const c=typeof r=="function";return c?(a=r,i=Et):(a=r.get,i=r.set),new Yt(a,i,c||!i,s)}(()=>vt(e,...t));return E(()=>n.effect.stop()),n},_n=e=>{let t=null,n=null;return(r,...o)=>{const s=$(),a=C(t);if(!t){const i=(n||(n=e().then(c=>t=c))).then(c=>{S(a)||(a.value=c)});s.emit("throw",i)}return()=>a.value?f(a.value.default,r,...o):null}};var K={__proto__:null,ErrorBoundary:cn,Fragment:ft,ArrayRender:ln,Portal:dn,Style:hn,GlobalStyle:fn,Suspense:pn,text:mn,raw:vt,rawRef:vn,lazy:_n};const gn=(e,t)=>{const n=C("");return B(()=>{const r=S(n);r&&URL.revokeObjectURL(r),n.value=URL.createObjectURL(new Blob([y(e)],{type:"text/plain",...t}))}),E(()=>URL.revokeObjectURL(n.value)),n},yn="modulepreload",wn=function(e,t){return new URL(e,t).href},Ue={},bn=function(t,n,r){if(!n||n.length===0)return t();const o=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=wn(s,r),s in Ue)return;Ue[s]=!0;const a=s.endsWith(".css"),i=a?'[rel="stylesheet"]':"";if(!!r)for(let u=o.length-1;u>=0;u--){const h=o[u];if(h.href===s&&(!a||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${i}`))return;const l=document.createElement("link");if(l.rel=a?"stylesheet":yn,a||(l.as="script",l.crossOrigin=""),l.href=s,document.head.appendChild(l),a)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t())},kn=()=>bn(()=>import("https://unpkg.com/@monaco-editor/loader@1.3.3/lib/umd/monaco-loader.js"),[],import.meta.url).then(()=>window.monaco_loader).then(e=>e.init()),Sn=({value:e,onChange:t,isDark:n,onSave:r,...o})=>{let s,a,i;return B(()=>{const c=y(n);i!=null&&i.editor&&(c?i.editor.setTheme("vs-dark"):i.editor.setTheme("vs"))}),E(()=>{s==null||s.dispose()}),R(e)&&j(e,c=>{(a==null?void 0:a.getValue())!==c&&(a==null||a.setValue(c))}),()=>f("div",{...o,ref:async c=>{i=await kn(),a=i.editor.createModel(S(e),"typescript",i.Uri.file("main.ts")),a.onDidChangeContent(()=>t(a.getValue())),i.languages.typescript.typescriptDefaults.setCompilerOptions({jsx:"react"}),i.languages.typescript.typescriptDefaults.setDiagnosticsOptions({noSemanticValidation:!0,noSyntaxValidation:!0}),s=i.editor.create(c,{automaticLayout:!0,wordWrap:!0,theme:S(n)?"vs-dark":"vs"}),s.setModel(a),r&&s.addCommand(i.KeyMod.CtrlCmd|i.KeyCode.KeyS,()=>{r(a.getValue())})}})};class En{constructor(){Y(this,"idx",0);Y(this,"demos",[]);Y(this,"currentDemo",null)}registerDemo(t,n,r){const o={id:this.idx++,name:t,version:n,code:r};this.demos.push(o),this.currentDemo||(this.currentDemo=o)}selectDemo(t){const n=this.demos.find(r=>r.id===Number(t));if(!n)throw new Error(`Cannot find demo with name ${name}`);return this.currentDemo=n,n}}const Cn=`import { rh, ref, mount, unref, setupWatch } from "@rhjs/rh";

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
`,Rn=`import { rh, ref, mount, unref } from "@rhjs/rh";

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
`,xn=`import {
  rh,
  unref,
  ref,
  mount,
  setupEffect,
  onUnmount,
  useRef,
  Style,
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
      <Style styleFn={() => ({
        "button[disabled]": {
          opacity: 0.5,
          cursor: "not-allowed",
        }
      })} />
      {unref(tasks).map((task, index, array) => (
        <li key={index}>
          {task.done ? <del>{task.name}</del> : task.name}
          {"  "}
          {task.done ? null : <TimeSince date={task.date} />}
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
              }}
            >
              reset
            </button>
          ) : (
            <button onClick={() => (task.done = true)}>done</button>
          )}
        </li>
      ))}
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
`,On=`import { Button, ensureFluentUILoaded } from "@rhjs/fluent-web-components";
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
`,W=new En;W.registerDemo("HelloWorld","0.1.1-dev.15",Rn);W.registerDemo("Counter","0.1.1-dev.15",Cn);W.registerDemo("TodoApp","0.1.1-dev.15",xn);W.registerDemo("Counter","0.0.34",On);const We=C(W.currentDemo),_t=()=>({mgr:W,currentDemo:We,selectDemo(e){We.value=W.selectDemo(e)},demos:W.demos}),Tn=()=>{const{selectDemo:e,currentDemo:t,demos:n}=_t();return()=>f("div",null,f("select",{onChange:r=>e(r.target.value)},n.map(r=>f("option",{value:r.id},r.name," @",r.version))))},gt=({styleFn:e,isDark:t,...n},r,o)=>()=>f("div",{...n},f(K.Style,{styleFn:()=>({display:"inline-flex",alignItems:"center",justifyContent:"center",paddingLeft:"12px",paddingRight:"12px",cursor:"pointer",userSelect:"none",marginLeft:"4px","&:hover":{backgroundColor:y(t)?"rgba(64,64,64,1)":"rgba(64,64,64,0.1)"},"&:active":{outline:"solid 1px",outlineColor:y(t)?"#fff":"rgba(64,64,64,1)"},...e==null?void 0:e()})}),o),Dn=({isDark:e})=>()=>f(gt,{onClick:()=>{R(e)&&(e.value=!S(e))},isDark:e},f("span",null,()=>y(e)?"🌘":"🌖"));function Pe({isDark:e,href:t,target:n="_blank"},r,o){return()=>f(gt,{isDark:e,onClick:()=>{window.open(t,n)}},f("a",{href:t,target:n,style:"text-decoration: none; color: inherit;"},o))}const Ln=({isDark:e})=>()=>f("div",null,f(K.Style,{styleFn:()=>({paddingLeft:"12px",paddingRight:"12px",height:"100%",width:"calc(100% - 24px)",display:"grid",gridTemplateColumns:"minmax(0, 1fr) 12px minmax(0, 1fr)"})}),f("div",{style:"display: inline-flex; align-items: center;"},f("span",{style:"user-select: none;word-break: keep-all;white-space: nowrap;"},"🧩 ",f("b",null,"R"),f("small",null,"eactive"),f("b",null,"H"),f("small",null,"ydrate"),f("b",null,"JS")," PLAYGROUND"),f(Dn,{isDark:e}),f(Tn,null)),f("div",null),f("div",{style:"display: inline-flex; align-items: center; justify-content: right;"},f(Pe,{isDark:e,href:"https://zhzluke96.github.io/rhjs-demos/#demo",target:"_self"},"demos"),f(Pe,{isDark:e,href:"https://github.com/zhzLuke96/rh.js"},"github"))),{Style:An}=K,jn=()=>document.querySelectorAll("iframe").forEach(e=>e.style.pointerEvents="none"),Nn=()=>document.querySelectorAll("iframe").forEach(e=>e.style.pointerEvents="auto"),Mn=({isHorizontal:e,onResize:t,ref:n})=>{const[r,o,s]=rn(!1),a=()=>o(!0),i=()=>o(!1),c=h=>{t(h.clientX,h.clientY)},l=h=>{const d=h.touches[0];t(d.clientX,d.clientY)},u=C(null);return j(s,h=>{h?(jn(),window.addEventListener("mousemove",c),window.addEventListener("mouseup",i),window.addEventListener("touchmove",l),window.addEventListener("touchend",i)):(Nn(),window.removeEventListener("mousemove",c),window.removeEventListener("mouseup",i),window.removeEventListener("touchmove",l),window.removeEventListener("touchend",i))}),j(u,h=>{h&&(h.addEventListener("mousedown",a,{passive:!0}),h.addEventListener("touchstart",a,{passive:!0}))}),E(()=>{var h,d;(h=y(u))==null||h.removeEventListener("mousedown",a),(d=y(u))==null||d.removeEventListener("touchstart",a)}),()=>f("div",{ref:h=>{u.value=h,n&&(n.value=h)}},f(An,{styleFn:()=>({backgroundColor:y(s)?"rgba(255,255,255,0.3)":"",width:e?"100%":"12px",height:e?"12px":"100%",zIndex:y(s)?"10":"auto",cursor:e?"row-resize":"col-resize",userSelect:"none",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"12px","&:hover":{backgroundColor:"rgba(255,255,255,0.3)"}})}),"⚪⚪⚪")},In=()=>{const e=`
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
`.trim(),t=URL.createObjectURL(new Blob([e],{type:"text/html"}));return E(()=>URL.revokeObjectURL(t)),`${t}#?embedded=${encodeURIComponent(location.origin)}`},zn=(e,t,n="")=>`
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
`.trim();function Un(e,t){const n=se(t),r=o=>{n.value=e(S(n),o)};return[Se(n),r]}const Wn=(e,t,n,r)=>{const o={sendToIframe(i){var c,l;(l=(c=S(e))==null?void 0:c.contentWindow)==null||l.postMessage(i,"*")},sendToDevtools(i){var c,l;(l=(c=S(t))==null?void 0:c.contentWindow)==null||l.postMessage(i,"*")}},s=()=>{const{codeInjected:i,codeURL:c}=y(n);if(!i){if(!c){setTimeout(s,3);return}requestAnimationFrame(()=>{o.sendToIframe({event:"CODE_UPDATE",value:c}),r({type:"CODE_INJECTED"})})}},a=i=>{var u,h;const[c,l]=dt(e,t);!c||!l||((h=(u=i.data)==null?void 0:u.includes)!=null&&h.call(u,"Debugger.enable")&&(r({type:"Debugger.enable"}),s()),i.source===c.contentWindow?l.contentWindow.postMessage(i.data,"*"):i.source===l.contentWindow&&c.contentWindow.postMessage({event:"DEV",data:i.data},"*"))};return window.addEventListener("message",a),E(()=>window.removeEventListener("message",a)),o},Pn=(e,t)=>{const{importMap:n,isDark:r}=e,o=Ce(()=>{const s=zn(S(r),JSON.stringify({imports:y(n)}));return URL.createObjectURL(new Blob([s],{type:"text/html"}))});return j(o,(s,a)=>{a&&URL.revokeObjectURL(a),t({type:"HTML_CHANGED",iframeSrc:s||""})}),E(()=>URL.revokeObjectURL(S(o)||"")),{iframeSrc:o}},Bn=e=>{const{isDark:t,code:n}=e,r=se(null),o=se(null),s=d=>{var m;return(m=d.contentDocument)==null?void 0:m.documentElement.classList.toggle("dark",S(t))},a=d=>{const m=S(r);m&&(m.src=d)};j(()=>y(t),d=>{const m=y(r);m&&s(m)});const[i,c]=Un((d,m)=>{var _,w;switch(m.type){case"IFRAME_READY":s(m.iframe);let v=d.codeInjected;return{...d,codeInjected:v,iframeReady:!0};case"DEVTOOLS_IFRAME_READY":return{...d,devtoolsIframeReady:!0};case"DEV_LOADED":return{...d,devLoaded:!0};case"HTML_CHANGED":return a(m.iframeSrc),d.devtoolsIframeReady&&((w=(_=S(o))==null?void 0:_.contentWindow)==null||w.location.reload()),{iframeReady:!1,devtoolsIframeReady:!1,devLoaded:!1,codeInjected:!1,darkInjected:!1};case"CODE_UPDATE":return{...d,codeURL:m.codeURL};case"CODE_INJECTED":return{...d,codeInjected:!0}}return d},{iframeReady:!1,devtoolsIframeReady:!1,devLoaded:!1,codeInjected:!1,codeURL:S(n)}),{sendToDevtools:l,sendToIframe:u}=Wn(r,o,i,c);j(()=>y(n),d=>{c({type:"CODE_UPDATE",codeURL:d}),i.value.iframeReady&&requestAnimationFrame(()=>{u({event:"CODE_UPDATE",value:d}),c({type:"CODE_INJECTED"})})});const{iframeSrc:h}=Pn(e,c);return j(r,d=>{d==null||d.addEventListener("load",()=>c({type:"IFRAME_READY",iframe:d}))}),j(o,d=>{d==null||d.addEventListener("load",()=>c({type:"DEVTOOLS_IFRAME_READY",devIframe:d}))}),{iframeSrc:h,iframeRef:r,devtoolsIframeRef:o,previewState:i,dispatch:c,sendToDevtools:l,sendToIframe:u}},Fn=e=>{const{importMap:t,code:n,devtools:r,isDark:o,...s}=e,a=C(null),{iframeSrc:i,iframeRef:c,devtoolsIframeRef:l,previewState:u,dispatch:h}=Bn(e),d=In(),m=Ce(()=>`width: 100%; height: 100%; ${y(r)?"display: block;":"display: none;"}`),_=C(.625),w=C(null),v=(p,k)=>{const[T,L]=dt(a,w);if(!T||!L)return;let q,N;const F=T.getBoundingClientRect();q=k-F.top-L.offsetHeight/2,N=T.offsetHeight-L.offsetHeight;const G=q/N;_.value=G};return()=>f("div",{...s,ref:a},f(K.Style,{styleFn:()=>{const p=y(_);return{display:"grid",height:"100%",width:"100%",gridTemplateRows:y(r)?`minmax(0, ${p}fr) 12px minmax(0, ${1-p}fr)`:"minmax(0, 1fr)"}}}),f("iframe",{ref:c,src:i,style:"width: 100%;height: 100%;",frameBorder:0,sandbox:"allow-popups-to-escape-sandbox allow-scripts allow-popups allow-forms allow-pointer-lock allow-top-navigation allow-modals allow-same-origin"}),f("div",null,f(Mn,{ref:w,isHorizontal:!0,onResize:v})),f("iframe",{ref:l,style:m,src:d,frameBorder:"0"}))},Hn=({isDark:e})=>()=>f(K.GlobalStyle,{styleFn:()=>({fontFamily:"'Karla', system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",lineHeight:"1.5",fontWeight:"400",colorScheme:y(e)?"light dark":"dark",color:y(e)?"rgba(255, 255, 255, 0.87)":"#242424",backgroundColor:y(e)?"#333":"#fff",fontSynthesis:"none",textRendering:"optimizeLegibility","-webkitFontSmoothing":"antialiased","-moz-osxFontSmoothing":"grayscale","-webkitTextSizeAdjust":"100%",height:"100vh",width:"100vw",body:{margin:"0",minWidth:"100vw",minHeight:"100vh",width:"100%",height:"100%"},"#app":{width:"100%",height:"100%"}})});function Vn(){return new Worker(""+new URL("complier.worker-3d71da04.js",import.meta.url).href)}class $n{constructor(){Y(this,"registry",{})}registerWorker(t,n){this.registry[t]?console.warn(`Worker of type ${t} already registered.`):this.registry[t]=n}removeWorker(t){delete this.registry[t]}getWorker(t){const n=this.registry[t];if(n)return n;throw new Error(`No worker of type ${t} registered.`)}postMessage(t,n){this.getWorker(t).postMessage(n)}listenRecv(t,n){const r=this.getWorker(t);let o;const s=a=>{const{message_token:i}=a.data||{};if(i!==n)return;const c={...a.data};delete c.message_token,o(c),r.removeEventListener("message",s)};return r.addEventListener("message",s),{recv:new Promise((a,i)=>{o=a}),dispose:()=>r.removeEventListener("message",s)}}}class Kn{constructor(){Y(this,"registry",new $n);this.initialize()}async initialize(){this.registry.registerWorker("complier",new Vn)}worker_caller(t,n){const r=Math.random().toString(36).slice(2),o={...n,message_token:r};return this.registry.postMessage(t,o),this.registry.listenRecv(t,r)}compileFile(t){return this.worker_caller("complier",{event:"BABEL",payload:{file:t,compile_options:{}}})}compileFiles(t){return this.worker_caller("complier",{event:"ROLLUP",payload:{files:t,compile_options:{}}})}}const Be=new Kn;b.global_source.on("throw",console.error);const qn=()=>{let e=null;return E(()=>e==null?void 0:e.dispose()),{compileFile(t){return e==null||e.dispose(),e=Be.compileFile(t),e.recv},compileFiles(t){return e==null||e.dispose(),e=Be.compileFiles(t),e.recv}}},Yn='import("@rhjs/rh").then(({cs, ElementSource}) => window.dispose = () => (cs || ElementSource).global_source.emit("unmount"));',Gn=()=>{var c;const e=C(!0),{currentDemo:t}=_t(),n=Ce(()=>{var l;return{"@rhjs/rh":`https://unpkg.com/@rhjs/rh@${((l=t.value)==null?void 0:l.version)||"latest"}/dist/main.module.mjs`,"@rhjs/fluent-web-components":"https://unpkg.com/@rhjs/fluent-web-components@latest/dist/main.module.mjs"}}),r=C(""),o=gn(r,{type:"text/javascript"}),s=C(((c=t.value)==null?void 0:c.code)||""),a=qn(),i=async()=>{const l=S(s);if(!l)return;const u=await a.compileFile({filename:"main.tsx",source:l});console.log(u),r.value=`${u.compiled}
${Yn}`};return Qt(i),j(t,l=>{l&&s.value!==l.code&&(console.log("change"),s.value=l.code,i())}),()=>f("div",null,f(Hn,{isDark:e}),f(K.Style,{styleFn:()=>({position:"relative",display:"flex",flexFlow:"column",width:"100%",height:"100%",maxWidth:"100vw",maxHeight:"100vh",overflow:"hidden"})}),f("header",{style:"height: 30px; width: 100%;"},f(Ln,{isDark:e})),f("div",{style:"flex: 1;"},f(K.Style,{styleFn:()=>({position:"relative",display:"flex",flexFlow:"row",width:"100%",height:"100%"})}),f(Sn,{style:"flex: 1;",value:s,onChange:l=>s.value=l,onSave:i,isDark:e}),f(Fn,{style:"flex: 1;",importMap:n,code:o,devtools:!0,isDark:e})))};nn("#app",Gn);
