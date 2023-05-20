var Ut=Object.defineProperty;var Ht=(e,t,n)=>t in e?Ut(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var te=(e,t,n)=>(Ht(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();function zt(e,t){return t.forEach(function(n){n&&typeof n!="string"&&!Array.isArray(n)&&Object.keys(n).forEach(function(r){if(r!=="default"&&!(r in e)){var o=Object.getOwnPropertyDescriptor(n,r);Object.defineProperty(e,r,o.get?o:{enumerable:!0,get:function(){return n[r]}})}})}),e}function Wt(e,t){const n=Object.create(null),r=e.split(",");for(let o=0;o<r.length;o++)n[r[o]]=!0;return t?o=>!!n[o.toLowerCase()]:o=>!!n[o]}const Ft=()=>{},Bt=Object.assign,$t=Object.prototype.hasOwnProperty,ve=(e,t)=>$t.call(e,t),G=Array.isArray,he=e=>ot(e)==="[object Map]",Ne=e=>typeof e=="symbol",ge=e=>e!==null&&typeof e=="object",Vt=Object.prototype.toString,ot=e=>Vt.call(e),Yt=e=>ot(e).slice(8,-1),je=e=>typeof e=="string"&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Ae=(e,t)=>!Object.is(e,t);let Gt;function st(e,t=Gt){t&&t.active&&t.effects.push(e)}const Me=e=>{const t=new Set(e);return t.w=0,t.n=0,t},it=e=>(e.w&V)>0,at=e=>(e.n&V)>0,Ce=new WeakMap;let oe=0,V=1;const Re=30;let P;const Z=Symbol(""),De=Symbol("");class ct{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,st(this,r)}run(){if(!this.active)return this.fn();let t=P,n=q;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=P,P=this,q=!0,V=1<<++oe,oe<=Re?(({deps:r})=>{if(r.length)for(let o=0;o<r.length;o++)r[o].w|=V})(this):We(this),this.fn()}finally{oe<=Re&&(r=>{const{deps:o}=r;if(o.length){let s=0;for(let i=0;i<o.length;i++){const a=o[i];it(a)&&!at(a)?a.delete(r):o[s++]=a,a.w&=~V,a.n&=~V}o.length=s}})(this),V=1<<--oe,P=this.parent,q=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){P===this?this.deferStop=!0:this.active&&(We(this),this.onStop&&this.onStop(),this.active=!1)}}function We(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}function Ie(e,t){e.effect&&(e=e.effect.fn);const n=new ct(e);t&&(Bt(n,t),t.scope&&st(n,t.scope)),t&&t.lazy||n.run();const r=n.run.bind(n);return r.effect=n,r}function lt(e){e.effect.stop()}let q=!0;const ut=[];function _e(){ut.push(q),q=!1}function ye(){const e=ut.pop();q=e===void 0||e}function M(e,t,n){if(q&&P){let r=Ce.get(e);r||Ce.set(e,r=new Map);let o=r.get(n);o||r.set(n,o=Me()),dt(o)}}function dt(e,t){let n=!1;oe<=Re?at(e)||(e.n|=V,n=!it(e)):n=!e.has(P),n&&(e.add(P),P.deps.push(e))}function J(e,t,n,r,o,s){const i=Ce.get(e);if(!i)return;let a=[];if(t==="clear")a=[...i.values()];else if(n==="length"&&G(e)){const l=Number(r);i.forEach((c,d)=>{(d==="length"||d>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(i.get(n)),t){case"add":G(e)?je(n)&&a.push(i.get("length")):(a.push(i.get(Z)),he(e)&&a.push(i.get(De)));break;case"delete":G(e)||(a.push(i.get(Z)),he(e)&&a.push(i.get(De)));break;case"set":he(e)&&a.push(i.get(Z))}if(a.length===1)a[0]&&xe(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);xe(Me(l))}}function xe(e,t){const n=G(e)?e:[...e];for(const r of n)r.computed&&Fe(r);for(const r of n)r.computed||Fe(r)}function Fe(e,t){(e!==P||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const qt=Wt("__proto__,__v_isRef,__isVue"),ht=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ne)),Kt=pt(),Jt=pt(!0),Be=Xt();function Xt(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=_(this);for(let s=0,i=this.length;s<i;s++)M(r,0,s+"");const o=r[t](...n);return o===-1||o===!1?r[t](...n.map(_)):o}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){_e();const r=_(this)[t].apply(this,n);return ye(),r}}),e}function Qt(e){const t=_(this);return M(t,0,e),t.hasOwnProperty(e)}function pt(e=!1,t=!1){return function(n,r,o){if(r==="__v_isReactive")return!e;if(r==="__v_isReadonly")return e;if(r==="__v_isShallow")return t;if(r==="__v_raw"&&o===(e?t?dn:vt:t?un:mt).get(n))return n;const s=G(n);if(!e){if(s&&ve(Be,r))return Reflect.get(Be,r,o);if(r==="hasOwnProperty")return Qt}const i=Reflect.get(n,r,o);return(Ne(r)?ht.has(r):qt(r))?i:(e||M(n,0,r),t?i:A(i)?s&&je(r)?i:i.value:ge(i)?e?Ue(i):gt(i):i)}}function Zt(e=!1){return function(t,n,r,o){let s=t[n];if(pe(s)&&A(s)&&!A(r))return!1;if(!e&&(yt(r)||pe(r)||(s=_(s),r=_(r)),!G(t)&&A(s)&&!A(r)))return s.value=r,!0;const i=G(t)&&je(n)?Number(n)<t.length:ve(t,n),a=Reflect.set(t,n,r,o);return t===_(o)&&(i?Ae(r,s)&&J(t,"set",n,r):J(t,"add",n,r)),a}}const en={get:Kt,set:Zt(),deleteProperty:function(e,t){const n=ve(e,t),r=Reflect.deleteProperty(e,t);return r&&n&&J(e,"delete",t,void 0),r},has:function(e,t){const n=Reflect.has(e,t);return Ne(t)&&ht.has(t)||M(e,0,t),n},ownKeys:function(e){return M(e,0,G(e)?"length":Z),Reflect.ownKeys(e)}},tn={get:Jt,set:(e,t)=>!0,deleteProperty:(e,t)=>!0},Pe=e=>e,we=e=>Reflect.getPrototypeOf(e);function ae(e,t,n=!1,r=!1){const o=_(e=e.__v_raw),s=_(t);n||(t!==s&&M(o,0,t),M(o,0,s));const{has:i}=we(o),a=r?Pe:n?He:se;return i.call(o,t)?a(e.get(t)):i.call(o,s)?a(e.get(s)):void(e!==o&&e.get(t))}function ce(e,t=!1){const n=this.__v_raw,r=_(n),o=_(e);return t||(e!==o&&M(r,0,e),M(r,0,o)),e===o?n.has(e):n.has(e)||n.has(o)}function le(e,t=!1){return e=e.__v_raw,!t&&M(_(e),0,Z),Reflect.get(e,"size",e)}function $e(e){e=_(e);const t=_(this);return we(t).has.call(t,e)||(t.add(e),J(t,"add",e,e)),this}function Ve(e,t){t=_(t);const n=_(this),{has:r,get:o}=we(n);let s=r.call(n,e);s||(e=_(e),s=r.call(n,e));const i=o.call(n,e);return n.set(e,t),s?Ae(t,i)&&J(n,"set",e,t):J(n,"add",e,t),this}function Ye(e){const t=_(this),{has:n,get:r}=we(t);let o=n.call(t,e);o||(e=_(e),o=n.call(t,e)),r&&r.call(t,e);const s=t.delete(e);return o&&J(t,"delete",e,void 0),s}function Ge(){const e=_(this),t=e.size!==0,n=e.clear();return t&&J(e,"clear",void 0,void 0),n}function ue(e,t){return function(n,r){const o=this,s=o.__v_raw,i=_(s),a=t?Pe:e?He:se;return!e&&M(i,0,Z),s.forEach((l,c)=>n.call(r,a(l),a(c),o))}}function de(e,t,n){return function(...r){const o=this.__v_raw,s=_(o),i=he(s),a=e==="entries"||e===Symbol.iterator&&i,l=e==="keys"&&i,c=o[e](...r),d=n?Pe:t?He:se;return!t&&M(s,0,l?De:Z),{next(){const{value:p,done:m}=c.next();return m?{value:p,done:m}:{value:a?[d(p[0]),d(p[1])]:d(p),done:m}},[Symbol.iterator](){return this}}}}function $(e){return function(...t){return e!=="delete"&&this}}function nn(){const e={get(o){return ae(this,o)},get size(){return le(this)},has:ce,add:$e,set:Ve,delete:Ye,clear:Ge,forEach:ue(!1,!1)},t={get(o){return ae(this,o,!1,!0)},get size(){return le(this)},has:ce,add:$e,set:Ve,delete:Ye,clear:Ge,forEach:ue(!1,!0)},n={get(o){return ae(this,o,!0)},get size(){return le(this,!0)},has(o){return ce.call(this,o,!0)},add:$("add"),set:$("set"),delete:$("delete"),clear:$("clear"),forEach:ue(!0,!1)},r={get(o){return ae(this,o,!0,!0)},get size(){return le(this,!0)},has(o){return ce.call(this,o,!0)},add:$("add"),set:$("set"),delete:$("delete"),clear:$("clear"),forEach:ue(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{e[o]=de(o,!1,!1),n[o]=de(o,!0,!1),t[o]=de(o,!1,!0),r[o]=de(o,!0,!0)}),[e,n,t,r]}const[rn,on,sn,an]=nn();function ft(e,t){const n=t?e?an:sn:e?on:rn;return(r,o,s)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?r:Reflect.get(ve(n,o)&&o in r?n:r,o,s)}const cn={get:ft(!1,!1)},ln={get:ft(!0,!1)},mt=new WeakMap,un=new WeakMap,vt=new WeakMap,dn=new WeakMap;function gt(e){return pe(e)?e:_t(e,!1,en,cn,mt)}function Ue(e){return _t(e,!0,tn,ln,vt)}function _t(e,t,n,r,o){if(!ge(e)||e.__v_raw&&(!t||!e.__v_isReactive))return e;const s=o.get(e);if(s)return s;const i=(a=e).__v_skip||!Object.isExtensible(a)?0:function(c){switch(c){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}(Yt(a));var a;if(i===0)return e;const l=new Proxy(e,i===2?r:n);return o.set(e,l),l}function pe(e){return!(!e||!e.__v_isReadonly)}function yt(e){return!(!e||!e.__v_isShallow)}function _(e){const t=e&&e.__v_raw;return t?_(t):e}const se=e=>ge(e)?gt(e):e,He=e=>ge(e)?Ue(e):e;function wt(e){q&&P&&dt((e=_(e)).dep||(e.dep=Me()))}function Et(e,t){const n=(e=_(e)).dep;n&&xe(n)}function A(e){return!(!e||e.__v_isRef!==!0)}function D(e){return bt(e,!1)}function fe(e){return bt(e,!0)}function bt(e,t){return A(e)?e:new hn(e,t)}class hn{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:_(t),this._value=n?t:se(t)}get value(){return wt(this),this._value}set value(t){const n=this.__v_isShallow||yt(t)||pe(t);t=n?t:_(t),Ae(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:se(t),Et(this))}}function g(e){return A(e)?e.value:e}var St;class pn{constructor(t,n,r,o){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[St]=!1,this._dirty=!0,this.effect=new ct(t,()=>{this._dirty||(this._dirty=!0,Et(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=r}get value(){const t=_(this);return wt(t),!t._dirty&&t._cacheable||(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}St="__v_isReadonly";function me(){return me=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},me.apply(this,arguments)}function kt(e,t){if(e==null)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t.indexOf(n=s[r])>=0||(o[n]=e[n]);return o}var fn=0;function Ee(e){return"__private_"+fn+++"_"+e}function E(e,t){if(!Object.prototype.hasOwnProperty.call(e,t))throw new TypeError("attempted to use private field on non-instance");return e}class Tt{constructor(){this.tasks=[],this.isRunning=!1,this.threshold=10}runTask(t){this.tasks.push(t),this.triggerSchedule()}triggerSchedule(){this.tasks.length!==0&&(this.isRunning||(this.isRunning=!0,requestIdleCallback(t=>{try{for(;this.tasks.length>0;){const n=this.tasks.shift();if(!n||(n(),t.timeRemaining()<=this.threshold))break}}finally{this.isRunning=!1}requestAnimationFrame(()=>this.triggerSchedule())})))}}const Ot=new Tt;var T=Ee("eventMap"),X=Ee("addEventObject"),H=Ee("getEventObjects"),I=Ee("removeEventObjects");class mn{constructor(){Object.defineProperty(this,I,{value:_n}),Object.defineProperty(this,H,{value:gn}),Object.defineProperty(this,X,{value:vn}),this.scheduler=new Tt,Object.defineProperty(this,T,{writable:!0,value:new Map})}addListener(t,n,r){return E(this,X)[X](t,n,r,!1)}emit(t,...n){const r=E(this,H)[H](t);return!!r.length&&(r.forEach(({context:o,listener:s,once:i})=>{i&&E(this,I)[I](t,s,void 0,!0),s.apply(o,n)}),!0)}idleEmit(t,...n){let r=E(this,H)[H](t);return!!r.length&&(r.forEach(({context:o,listener:s,once:i})=>{Ot.runTask(()=>{i&&E(this,I)[I](t,s,void 0,!0),s.apply(o,n)})}),!0)}eventNames(){return[...E(this,T)[T].keys()]}listenerCount(t){return E(this,H)[H](t).length}listeners(t){return E(this,H)[H](t).map(({listener:n})=>n)}off(t,n,r,o=!1){return E(this,I)[I](t,n,r,o)}on(t,n,r){return E(this,X)[X](t,n,r,!1)}once(t,n,r){return E(this,X)[X](t,n,r,!0)}removeAllListeners(t){return E(this,I)[I](t,void 0,void 0,!1)}removeListener(t,n,r,o=!1){return E(this,I)[I](t,n,r,o)}}function vn(e,t,n=this,r){if(typeof t!="function")throw new TypeError("The listener must be a function");let o=E(this,T)[T].get(e);return o||(o=[],E(this,T)[T].set(e,o)),o.push({context:n,listener:t,once:r}),this}function gn(e){var t;return(t=E(this,T)[T].get(e))!=null?t:[]}function _n(e,t,n,r){if(!e)return E(this,T)[T].clear(),this;const o=E(this,T)[T].get(e),s=o==null?void 0:o.filter(i=>t&&(i.listener!==t||n&&i.context!==n||r&&!i.once));return s!=null&&s.length?E(this,T)[T].set(e,s):E(this,T)[T].delete(e),this}const w={ES_CREATE_CB:Symbol("ES_CREATE_CB"),IS_ANCHOR:Symbol("IS_ANCHOR"),NONE:Symbol("NONE"),SELF_ES:Symbol("SELF_ES"),CACHE_NODES:Symbol("CACHE_NODES"),IS_COMPONENT:Symbol("IS_COMPONENT"),STYLESHEET_SCOPED:Symbol("STYLESHEET_SCOPED"),STYLESHEET_ROOT:Symbol("STYLESHEET_ROOT")};class y extends mn{static peek(){return y.source_stack.peek()||y.global_source}constructor(t,n){var r;if(super(),r=this,this.host=void 0,this.__context={},this.__parent_source=y.source_stack.peek(),this.__container_source=this,this.states={mounted:!1,unmounted:!1},this.host=t,!this.__parent_source)return;this.setupContainerSource(),this.on("throw",i=>{var a;return(a=this.__parent_source)==null?void 0:a.emit("throw",i)}),this.once("mount",()=>this.states.mounted=!0),this.once("unmount",()=>this.states.unmounted=!0);const o=()=>Ot.runTask(async function(){await r.idleEmit("unmount"),r.dispose()});var s;n?((this.__container_source===this?(s=this.__container_source.__parent_source)==null?void 0:s.__container_source:this.__container_source)||this.__parent_source).once("unmount",o):(this.__parent_source.once("unmount",o),this.__parent_source.once("update_after",()=>{this.__parent_source.once("update_after",()=>{this.emit("unmount")})}))}onMount(t){return this.states.mounted?t():this.once("mount",t),this}onUnmount(t){return this.states.unmounted?t():this.once("unmount",t),this}setupContainerSource(){for(;this.__container_source&&this.__container_source!==y.global_source;){var t;if((t=this.__container_source.host)!=null&&t[w.IS_COMPONENT])break;this.__container_source=this.__container_source.__parent_source}}dispose(){this.removeAllListeners(),delete this.__context}effect(t,n){const r=Ie(t,n);return this.once("unmount",()=>lt(r)),r}}y.source_stack=new class{constructor(){this.items=void 0,this.items=[]}toArray(){return[...this.items]}push(e){this.items.push(e)}pop(){return this.items.pop()}peek(){return this.items[this.items.length-1]}size(){return this.items.length}isEmpty(){return this.items.length===0}},y.global_source=new y;const Q=(e,t,n)=>{const r=o=>{const s=o.relatedNode;s&&s===e.parentNode&&t(s,e)};return e.addEventListener(n,r),()=>e.removeEventListener(n,r)},Y=e=>{const t=e==null?void 0:e.parentNode;(t&&document.contains(t)||t&&e.getRootNode()!==e)&&t.removeChild(e)};class j{constructor(){this.source=void 0,this.viewAnchor=(()=>{const t=document.createTextNode("");return t[w.IS_ANCHOR]=!0,t})(),this.currentView=this.viewAnchor,this.renderEffectRunner=void 0,this.rawTarget=void 0,this.dispose_onDomInserted=void 0,this._initialized=!1}_initialize(){this._initialized||(this._initialized=!0,this.initialize())}initialize(){this.source||(this.source=new y(this)),this.source.once("unmount",()=>this.dispose())}ensureEffectRunner(){return this._initialize(),this.renderEffectRunner||(this.renderEffectRunner=Ie(this.update.bind(this),{lazy:!1}),this.dispose_onDomInserted=Q(this.currentView,(t,n)=>{var r,o,s;(r=this.dispose_onDomInserted)==null||r.call(this),this.source.emit("mount"),this.viewAnchor!==n&&t.insertBefore(this.viewAnchor,n),n!==this.currentView&&(t.insertBefore(this.currentView,n),(s=n)&&s[w.IS_ANCHOR]||(o=n.parentElement)==null||o.removeChild(n))},"DOMNodeInserted")),this.renderEffectRunner}render(){return null}_update(){const t=this.currentView,n=this.render()||this.viewAnchor,r=t==null?void 0:t.parentElement;r&&r.replaceChild(n,t),this.currentView=n}update(){var t,n;if(this.source.states.unmounted||(t=this.source.__parent_source)!=null&&t.states.unmounted||(n=this.source.__container_source)!=null&&n.states.unmounted)this.source.emit("unmount");else{this.source.emit("update_before");try{y.source_stack.push(this.source),this.source.emit("update"),this._update()}catch(r){requestAnimationFrame(()=>{this.source.emit("throw",r),console.error(r)})}finally{y.source_stack.pop(),this.source.emit("update_after")}}}dispose(){var t,n;(t=this.renderEffectRunner)==null||t.effect.stop(),Y(this.currentView),Y(this.viewAnchor),(n=this.dispose_onDomInserted)==null||n.call(this)}static fromRender(t){const n=new j;return n.render=()=>j.warpView(t()),n.rawTarget=t,n}static fromRef(t){const n=new j;return n.render=()=>j.warpView(g(t)),n.rawTarget=t,n}static warpView(t){return t instanceof Node||t===null?t:document.createTextNode(`${t}`)}static warp(t){if(typeof t!="function"&&!A(t))return j.warpView(t);let n;if(typeof t=="function")n=j.fromRender(t);else{if(!A(t))throw new Error("Unknown view type.");n=j.fromRef(t)}return n.ensureEffectRunner(),n.currentView}}let Ct;Ct=w.IS_COMPONENT;class Rt extends j{get[Ct](){return!0}constructor(t,n,r){super(),this._define=void 0,this.props=void 0,this.children=void 0,this.state=void 0,this._define=t,this.props=n,this.children=r}initialize(){this.initializeComponent()}initializeComponent(){this.source=new y(this,"__node_cached"in this.props),this.source.once("unmount",()=>this.dispose()),this.installSource(),this.initializeSetup()}initializeSetup(){const{props:t,children:n}=this;_e(),y.source_stack.push(this.source),this.source.emit("setup_before"),this.state=this._define.setup(t,n),this.source.emit("setup_after"),y.source_stack.pop(),ye()}render(){const t=this._define.render(this.props,this.state,this.children);return j.warp(t)}installSource(){var t,n;(t=(n=this._define)[w.ES_CREATE_CB])==null||t.call(n,this.source)}}class yn extends Rt{constructor(t,n,r){const o={setup:(s,i)=>{const a={};return o.render=t(s,a,i),a},render:()=>{}};o[w.ES_CREATE_CB]=t[w.ES_CREATE_CB],super(o,n,r),this._function_define=void 0,this._function_define=t}}class wn{constructor(t,n,r){this.tagNameOrDome=void 0,this.props=void 0,this.children=void 0,this.node=void 0,this.source=new y(this),this.tagNameOrDome=t,this.props=n,this.children=r,this.source.once("unmount",()=>this.dispose()),this.buildNode()}dispose(){Y(this.node)}buildNode(){if(this.node)return this.node;this.node=this.tagNameOrDome instanceof Element?this.tagNameOrDome:document.createElement(this.tagNameOrDome),_e(),this.hydrateChildren(),ye();for(const[t,n]of Object.entries(this.props))this.hydrateAttribute(t,n);return this.node}isValidAttributeName(t){return/^[a-zA-Z][\w-]*$/.test(t)}hydrateAttribute(t,n){if(!t.startsWith("_")&&!t.startsWith("$")&&this.isValidAttributeName(t)){switch(t){case"ref":return void(typeof n=="function"?n(this.node):A(n)&&(n.value=this.node));case"effect":return void(typeof n=="function"&&this.source.effect(()=>n(this.node),{lazy:!1}))}if(t.startsWith("on")&&typeof n=="function"){const r=t.slice(2).toLowerCase(),o=this.node["__cb_"+t];return o&&this.node.removeEventListener(r,o),this.node["__cb_"+t]=n,void this.node.addEventListener(r,n)}this.source.effect(()=>{const r=g(n);if(t!=="value")if(t!=="defaultValue")typeof r!="boolean"?this.node.setAttribute(t,r):r?this.node.setAttribute(t,""):this.node.removeAttribute(t);else{if(this.node.value)return;this.node.value=r}else this.node.value=r},{lazy:!1})}}hydrateChildren(){const{children:t}=this;for(const n of t){if(n==null)continue;const r=j.warp(n);r&&this.node.appendChild(r)}}}const qe=(e,t)=>{var n,r;if(!e)return;const o=y.peek(),{__container_source:s}=o;s&&((n=s.__context)[r=w.CACHE_NODES]||(n[r]={}),s.__context[w.CACHE_NODES][e]=t)},Dt=(e,t={},n=[])=>{const{key:r}=t;delete t.key,r&&(t.__node_cached=!0);const o=(s=>{var i,a;if(!s)return;const l=y.peek(),{__container_source:c}=l;return c?((i=c.__context)[a=w.CACHE_NODES]||(i[a]={}),c.__context[w.CACHE_NODES][s]):void 0})(r);if(o)return o;if(typeof e=="function"){const s=new yn(e,t,n);return qe(r,s),s}if(typeof e=="object"&&typeof e.render=="function"&&typeof e.setup=="function"){const s=new Rt(e,t,n);return qe(r,s),s}throw new Error(`Valid define type [${typeof e}] is not supported for reactiveHydrate.`)};function En(e,t,...n){var r;if(t||(t={}),n=((r=n)==null?void 0:r.flat())||n,typeof e=="string"||e instanceof Element)return new wn(e,t,n).node;const o=Dt(e,t,n);return o.ensureEffectRunner(),o.currentView}const h=En;function W(e){return e?e(y.peek()):y.peek()}const bn=(e,t,n=!1)=>W(r=>r[n?"once":"on"](e,t)),Sn=e=>W(t=>t.onMount(e)),O=e=>W(t=>t.onUnmount(e)),kn=e=>bn("throw",e),Tn=(e,t,n)=>{const r=e instanceof Element?e:document.querySelector(e);if(!r)throw new Error(`Could not find container: ${e}`);if(t instanceof Element)return r.appendChild(t),null;const o=Dt(t,n);return o.ensureEffectRunner(),r.appendChild(o.currentView),o},F=(e,t)=>{let n=null;const r=Ie(()=>{n==null||n(),e(s=>n=s)},me({lazy:!1},t)),o=()=>{n==null||n(),lt(r),n=null};return O(o),[r,o]},z=(e,t,n)=>{let r;return F(()=>{const o=typeof e=="function"?e(r):g(e);Se(()=>t(o,r)),r=o},n)},be=(e,t)=>{const n=D();return F(()=>{const r=k(n),o=e(r);var s,i;s=r,i=o,Object.is(s,i)||s===i||(n.value=o)},t),n},Se=(e,...t)=>{_e();const n=e(...t);return ye(),n},k=e=>Se(()=>g(e));function On(e){const t=A(e)?e:D(e);return[()=>g(t),n=>{if(typeof n=="function"){const r=k(t);t.value=n(r)}else t.value=n},t]}const Cn=(...e)=>e.map(t=>g(t)),xt=Cn;function Rn(e,t=w.NONE){let n=y.peek();for(;n;){const r=n.__context;if(e in r)return r[e];n=n.__parent_source}if(t===w.NONE)throw new Error(`The key '${e}' is not defined in context`);return t}function Dn(e,t){const n=y.peek();if(n==null||!n.__container_source)throw new Error("inject must be called inside Component");n.__container_source.__context[e]=t}function Lt(e,t){return((n,r)=>{if(!r)return;const o=n[w.ES_CREATE_CB];n[w.ES_CREATE_CB]=s=>{o==null||o(s),r(s)}})(e,t),e}const xn=e=>new Proxy({},{get(t,n,r){let o=e;for(;o!==void 0;){const s=o.__context;if(n in s)return s[n];o=o.__parent_source}},set:(t,n,r,o)=>(e.__context[n]=r,!0)}),Nt=e=>{const t=W();if(!t.__container_source)throw new Error("Container source not found, must be inside a container component to use element source");const n=xn(t.__container_source);return e==null||e(n),n},Ln=Lt({setup({fallbackRender:e,onError:t,render:n}){const r=y.peek();let o=D(null);r.on("throw",i=>{i instanceof Error&&(t==null||t(i),o.value=i)});const s=D(1);return{catchError:o,rerenderRef:s,fallbackRender:e,childrenRender:n}},render(e,{fallbackRender:t,rerenderRef:n,catchError:r,childrenRender:o}){const s=()=>{n.value=Date.now(),r.value=null};return r.value?Se(()=>t(r.value,s)):o()}}),jt=Lt({setup(e,[t,...n]){const r={anchor:document.createTextNode(""),children:[],parentNode:null},o=W(),s=(i=typeof t=="function"?t:()=>[t,...n],()=>{return(p=i(),Array.isArray(p)?p:[p]).flat(1).map(m=>j.warp(m)).filter(Boolean);var p});var i;const[a,l]=F(()=>{y.source_stack.push(o),(()=>{const p=r.children,m=s(),{parentNode:f,anchor:u}=r;if(!f)return;const v=Math.max(m.length,p.length);for(let x=0;x<v;x++){const b=m[x],C=p[x];if(!b&&C)C.remove();else if(!C&&b)f.insertBefore(b,u);else if(C&&b){if(C===b)continue;f.replaceChild(b,C)}}r.children=m})(),y.source_stack.pop()}),c=Q(r.anchor,p=>{r.parentNode=p,a()},"DOMNodeInserted"),d=Q(r.anchor,p=>{r.children.forEach(Y),r.parentNode=null},"DOMNodeRemoved");return O(()=>{c(),d(),l(),Y(r.anchor),r.children.forEach(Y)}),W(p=>{var m;(m=p.__parent_source)==null||m.once("update_before",()=>{var f;r.children.forEach(Y),(f=p.__parent_source)==null||f.once("update_after",()=>{Y(r.anchor)})})}),r},render:(e,t)=>t.anchor});var Le=function e(t,n){if(t===n)return!0;if(t&&n&&typeof t=="object"&&typeof n=="object"){if(t.constructor!==n.constructor)return!1;var r,o,s;if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(o=r;o--!=0;)if(!e(t[o],n[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((r=(s=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(o=r;o--!=0;)if(!Object.prototype.hasOwnProperty.call(n,s[o]))return!1;for(o=r;o--!=0;){var i=s[o];if(!e(t[i],n[i]))return!1}return!0}return t!=t&&n!=n},Ke=zt({__proto__:null,default:Le},[Le]);function At(e){if(function(t){return t&&typeof t=="object"&&t.constructor===Object}(e)){const t={};return Object.keys(e).forEach(n=>{t[n]=At(e[n])}),t}return e}const Je=e=>At(_(e)),Nn=({items:e,render:t,needUpdate:n=(r,o)=>!((Ke==null?void 0:Le)||Ke)(r,o)})=>{const r=fe([]),o=W(),[s]=F(()=>{const i=typeof e=="function"?e():g(e);y.source_stack.push(o);try{((a,l)=>{const c=k(r);for(let p=0;p<Math.max(c.length,a.length);p++){const m=c[p],f=a[p];if(m!==void 0&&f!==void 0){if(!m.node||Se(()=>n(f,m.data))){const u=t(f,p,a,l,m.node);m.node=u,m.data=Je(f)}}else if(m===void 0){const u=t(f,p,a,l);c.push({data:Je(f),node:u})}else f===void 0&&(m.del=!0)}const d=c.filter(p=>p.del!==!0);r.value=d})(i,()=>s==null?void 0:s.effect.run())}finally{y.source_stack.pop()}});return()=>h(jt,{},()=>r.value.filter(i=>!i.del).map(i=>i.node))},jn=["container"],An=(e,t,n)=>{let{container:r}=e,o=kt(e,jn);const s=r||document.createElement("div");return document.body.appendChild(s),h(s,o,...n),O(()=>{var i;(i=s.parentElement)==null||i.removeChild(s)}),()=>null};function Mn(e,t,n=""){const r=t===":root",o=r?"":t,s=e.split(",").map(l=>l.trim()).filter(Boolean);let i=r?[""]:o.split(",").map(l=>l.trim()).filter(Boolean);var a;return(a=i,s.flatMap(l=>a.map(c=>[l,c]))).map(([l,c])=>l.startsWith("&")?l.replace(/&/g,c):`${c} ${l}`).map(l=>`${l.replace(n||"","")}${n||""}`.trim()).join(",")}const Xe=e=>e.nodeType===Node.DOCUMENT_NODE||e.nodeType===Node.DOCUMENT_FRAGMENT_NODE,Qe=(e,t,n)=>{const{updateCSSText:r,installSheet:o,uninstallSheet:s}=n;let i=!1;return{parseStyle:a=>{const l=function(c,d,{beautify:p=!1,scopedSelector:m=""}){const f=p?`
`:"",u=[{nodeSelector:d+m,cssObject:c}],v=[];for(;u.length>0;){const{nodeSelector:b,cssObject:C}=u.pop(),R={selector:b,cssText:""};for(const S in C){const L=C[S];if(typeof L=="object"){const B=Mn(S,b,m);u.push({nodeSelector:B,cssObject:L})}else{if(typeof L=="string"&&!L.trim()||L==null)continue;R.cssText+=`${x=S,x.replace(/[A-Z]/g,B=>`-${B.toLowerCase()}`)}: ${C[S]};${f}`}}R.cssText.trim()&&v.push(R)}var x;return v.map(b=>`${b.selector}{${b.cssText}}`).join(`
`).trim()}(e(),a,{scopedSelector:t});r(l)},applySheet:a=>{i||(i=!0,o(a))},removeSheet:a=>{i&&(i=!1,s(a))}}},Ze=()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(36),Mt=e=>{const{scopedId:t,className:n}=e,r=!!t,o=document.createTextNode("");let s;(({props:c,scopedId:d,rootNodeSelector:p,styleOrFunc:m},f)=>{const u=(S=>{if(!S)throw new Error("styleOrFn is required.");return typeof S=="function"?S:()=>S})(c.styleFn||c.style||m),v=Nt(),{applySheet:x,removeSheet:b,parseStyle:C}=((S,L,B)=>B?((ne,re)=>{const U=new CSSStyleSheet,{parseStyle:ke,applySheet:Te,removeSheet:Oe}=Qe(ne,re,{updateCSSText(N){U.replaceSync(N)},installSheet(N=document){Xe(N)&&(N.adoptedStyleSheets=[...N.adoptedStyleSheets,U])},uninstallSheet(N=document){Xe(N)&&(N.adoptedStyleSheets=[...N.adoptedStyleSheets].filter(ie=>ie!==U))}});return{sheet:U,parseStyle:ke,applySheet:Te,removeSheet:Oe}})(S,L):((ne,re)=>{const U=document.createElement("style"),{parseStyle:ke,applySheet:Te,removeSheet:Oe}=Qe(ne,re,{updateCSSText(N){U.innerHTML=N},installSheet(N){N.appendChild(U)},uninstallSheet(N){var ie;(ie=U.parentNode)==null||ie.removeChild(U)}});return{styleDOM:U,parseStyle:ke,applySheet:Te,removeSheet:Oe}})(S,L))(()=>u(v),d?`[data-s-${d}]`:void 0,c.adopted),{[w.STYLESHEET_ROOT]:R}=v;F(()=>{let S=p;var L;c.adopted&&R&&R instanceof Node&&((L=R).nodeType===Node.DOCUMENT_NODE||L.nodeType===Node.DOCUMENT_FRAGMENT_NODE)&&(S=":root"),C(S)}),c.adopted||(R==null?void 0:R.nodeType)===Node.DOCUMENT_FRAGMENT_NODE?(x(R),O(()=>b(R))):(O(Q(f,x,"DOMNodeInserted")),O(Q(f,b,"DOMNodeRemoved")))})(e,o);const i=`s-${t}`.replace(/-([a-z])/g,function(c,d){return d.toUpperCase()}),a=c=>{if("dataset"in c&&typeof c.dataset=="object"){if(c[w.STYLESHEET_SCOPED]!==void 0&&c[w.STYLESHEET_SCOPED]!==i)return;c.dataset[i]="",c[w.STYLESHEET_SCOPED]=i}},l=c=>{if("dataset"in c&&typeof c.dataset=="object"){if(c[w.STYLESHEET_SCOPED]!==void 0&&c[w.STYLESHEET_SCOPED]!==i)return;delete c.dataset[i],delete c[w.STYLESHEET_SCOPED]}};return O(Q(o,c=>{r&&(a(c),(d=>{s=new MutationObserver(p=>{for(const m of p){const{addedNodes:f,removedNodes:u}=m;f.forEach(v=>a(v)),u.forEach(v=>l(v))}}),s.observe(d,{childList:!0,subtree:!0})})(c)),n&&c instanceof Element&&c.classList.add(n)},"DOMNodeInserted")),O(Q(o,c=>{var d;l(c),(d=s)==null||d.disconnect(),n&&c instanceof Element&&c.classList.remove(n)},"DOMNodeRemoved")),{anchor:o}},In=(e,t,[n])=>{const r=e.scoped?Ze():void 0,o=`s-${Ze()}`,{anchor:s}=Mt({props:e,styleOrFunc:n,rootNodeSelector:`.${o}`,className:o,scopedId:r});return()=>s},Pn=(e,t,[n])=>{const{anchor:r}=Mt({props:me({},e,{scoped:!1}),styleOrFunc:n,rootNodeSelector:":root"});return()=>r},Un=({component:e,render:t,fallback:n,error:r})=>{const o=D("fulfilled");kn(async a=>{var l;!(l=a)||typeof l!="object"&&typeof l!="function"||typeof l.then!="function"||(o.value="pending",a.then(()=>o.value="fulfilled"),a.catch(()=>o.value="rejected"))});const s=e?h(e):t?h(()=>()=>j.warpView(t())):null,i=h(()=>()=>{switch(o.value){case"pending":return n();case"fulfilled":return s;case"rejected":return(r||n)()}});return()=>i},Hn=["tagName","render"],zn=(e,t,n)=>{let{tagName:r="div",render:o}=e,s=kt(e,Hn);const i=h(r,s,...n),a=i.attachShadow({mode:"open"});return(l=>{const c=W(),d=Nt();let p;const m=()=>{p=d[w.STYLESHEET_ROOT],d[w.STYLESHEET_ROOT]=l};c.on("update_before",m),c.on("update_after",()=>{d[w.STYLESHEET_ROOT]=p,p=void 0}),m()})(a),()=>{let l=o();return Array.isArray(l)||(l=[l]),l.map(c=>j.warp(c)).filter(Boolean).forEach(c=>a.appendChild(c)),i}},Wn=(e,...t)=>{const n=[];for(let r=0;r<e.length;r++){n.push(document.createTextNode(e[r]));const o=t[r],s=document.createTextNode("");typeof o=="function"?F(()=>s.textContent=o()):A(o)&&F(()=>s.textContent=String(o.value)),n.push(s)}return n},It=(e,...t)=>e.reduce((n,r,o)=>{var s;return n+=r,o<t.length&&(n+=g(typeof(s=t[o])=="function"?s():s)),n},""),Fn=(e,...t)=>{const n=function(r,o,s=!1){let i,a;const l=typeof r=="function";return l?(i=r,a=Ft):(i=r.get,a=r.set),new pn(i,a,l||!a,s)}(()=>It(e,...t));return O(()=>n.effect.stop()),n},Bn=e=>{let t=null,n=null;return(r,...o)=>{const s=W(),i=D(t);if(!t){const a=(n||(n=e().then(l=>t=l))).then(l=>{k(i)||(i.value=l)});s.emit("throw",a)}return()=>i.value?h(i.value.default,r,...o):null}};var ee={__proto__:null,ErrorBoundary:Ln,Fragment:jt,ReactiveList:Nn,Portal:An,Style:In,GlobalStyle:Pn,Suspense:Un,Scope:zn,text:Wn,raw:It,rawRef:Fn,lazy:Bn};const $n=(e,t)=>{const n=D("");return F(()=>{const r=k(n);r&&URL.revokeObjectURL(r),n.value=URL.createObjectURL(new Blob([g(e)],{type:"text/plain",...t}))}),O(()=>URL.revokeObjectURL(n.value)),n},Vn="modulepreload",Yn=function(e,t){return new URL(e,t).href},et={},Gn=function(t,n,r){if(!n||n.length===0)return t();const o=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=Yn(s,r),s in et)return;et[s]=!0;const i=s.endsWith(".css"),a=i?'[rel="stylesheet"]':"";if(!!r)for(let d=o.length-1;d>=0;d--){const p=o[d];if(p.href===s&&(!i||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const c=document.createElement("link");if(c.rel=i?"stylesheet":Vn,i||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),i)return new Promise((d,p)=>{c.addEventListener("load",d),c.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t())},qn=()=>Gn(()=>import("https://unpkg.com/@monaco-editor/loader@1.3.3/lib/umd/monaco-loader.js"),[],import.meta.url).then(()=>window.monaco_loader).then(e=>e.init()),Kn=({value:e,onChange:t,isDark:n,onSave:r,...o})=>{let s,i,a;return F(()=>{const l=g(n);a!=null&&a.editor&&(l?a.editor.setTheme("vs-dark"):a.editor.setTheme("vs"))}),O(()=>{s==null||s.dispose()}),A(e)&&z(e,l=>{(i==null?void 0:i.getValue())!==l&&(i==null||i.setValue(l))}),()=>h("div",{...o,ref:async l=>{a=await qn(),i=a.editor.createModel(k(e),"typescript",a.Uri.file("main.ts")),i.onDidChangeContent(()=>t(i.getValue())),a.languages.typescript.typescriptDefaults.setCompilerOptions({jsx:"react"}),a.languages.typescript.typescriptDefaults.setDiagnosticsOptions({noSemanticValidation:!0,noSyntaxValidation:!0}),s=a.editor.create(l,{automaticLayout:!0,wordWrap:!0,theme:k(n)?"vs-dark":"vs"}),s.setModel(i),r&&s.addCommand(a.KeyMod.CtrlCmd|a.KeyCode.KeyS,()=>{r(i.getValue())})}})};class Jn{constructor(){te(this,"idx",0);te(this,"demos",[]);te(this,"currentDemo",null)}registerDemo(t,n,r){const o={id:this.idx++,name:t,version:n,code:r};this.demos.push(o),this.currentDemo||(this.currentDemo=o)}selectDemo(t){const n=this.demos.find(r=>r.id===Number(t));if(!n)throw new Error(`Cannot find demo with name ${name}`);return this.currentDemo=n,n}}const Xn=`import { rh, ref, mount, unref, setupWatch, inject, provide } from "@rhjs/rh";

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
`,Qn=`import { rh, ref, mount, unref, computed } from "@rhjs/rh";

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
`,Zn=`import {
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
`,er=`import { Button, ensureFluentUILoaded } from "@rhjs/fluent-web-components";
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
`,K=new Jn;K.registerDemo("HelloWorld","0.1.1-dev.21",Qn);K.registerDemo("Counter","0.1.1-dev.21",Xn);K.registerDemo("TodoApp","0.1.1-dev.21",Zn);K.registerDemo("Counter","0.0.34",er);const tt=D(K.currentDemo),Pt=()=>({mgr:K,currentDemo:tt,selectDemo(e){tt.value=K.selectDemo(e)},demos:K.demos}),tr=()=>{const{selectDemo:e,currentDemo:t,demos:n}=Pt();return()=>h("div",null,h("select",{onChange:r=>e(r.target.value)},n.map(r=>h("option",{value:r.id},r.name," @",r.version))))},ze=({styleFn:e,isDark:t,...n},r,o)=>()=>h("div",{...n},h(ee.Style,{styleFn:()=>({height:"30px",display:"inline-flex",alignItems:"center",justifyContent:"center",paddingLeft:"12px",paddingRight:"12px",cursor:"pointer",userSelect:"none",marginLeft:"4px","&:hover":{backgroundColor:g(t)?"rgba(64,64,64,1)":"rgba(64,64,64,0.1)"},"&:active":{outline:"solid 1px",outlineColor:g(t)?"#fff":"rgba(64,64,64,1)"},...e==null?void 0:e()})}),o),nr=({isDark:e})=>()=>h(ze,{onClick:()=>{A(e)&&(e.value=!k(e))},isDark:e},h("span",null,()=>g(e)?"🌘":"🌖"));function nt({isDark:e,href:t,target:n="_blank"},r,o){return()=>h(ze,{isDark:e,onClick:()=>{window.open(t,n)}},h("a",{href:t,target:n,style:"text-decoration: none; color: inherit;"},o))}const rr=({isDark:e})=>()=>h("div",null,h(ee.Style,{styleFn:()=>({paddingLeft:"12px",paddingRight:"12px",height:"100%",width:"calc(100% - 24px)",display:"grid",gridTemplateColumns:"minmax(0, 1fr) 12px minmax(0, 1fr)"})}),h("div",{style:"display: inline-flex; align-items: center;"},h("span",{style:"user-select: none;word-break: keep-all;white-space: nowrap;"},"🧩 ",h("b",null,"R"),h("small",null,"eactive"),h("b",null,"H"),h("small",null,"ydrate"),h("b",null,"JS")," PLAYGROUND"),h(nr,{isDark:e}),h(tr,null)),h("div",null),h("div",{style:"display: inline-flex; align-items: center; justify-content: right;"},h(nt,{isDark:e,href:"https://zhzluke96.github.io/rhjs-demos/#demo",target:"_self"},"demos"),h(nt,{isDark:e,href:"https://github.com/zhzLuke96/rh.js"},"github"))),{Style:or}=ee,sr=()=>document.querySelectorAll("iframe").forEach(e=>e.style.pointerEvents="none"),ir=()=>document.querySelectorAll("iframe").forEach(e=>e.style.pointerEvents="auto"),ar=({isHorizontal:e,onResize:t,ref:n})=>{const[r,o,s]=On(!1),i=()=>o(!0),a=()=>o(!1),l=f=>{t(f.clientX,f.clientY)},c=f=>{const u=f.touches[0];t(u.clientX,u.clientY)},d=D(null);z(s,f=>{f?(sr(),window.addEventListener("mousemove",l),window.addEventListener("mouseup",a),window.addEventListener("touchmove",c),window.addEventListener("touchend",a)):(ir(),window.removeEventListener("mousemove",l),window.removeEventListener("mouseup",a),window.removeEventListener("touchmove",c),window.removeEventListener("touchend",a))}),z(d,f=>{f&&(f.addEventListener("mousedown",i,{passive:!0}),f.addEventListener("touchstart",i,{passive:!0}))}),O(()=>{var f,u;(f=g(d))==null||f.removeEventListener("mousedown",i),(u=g(d))==null||u.removeEventListener("touchstart",i)});const p=Rn("isDark"),m=be(()=>g(p)?"rgba(255,255,255,0.3)":"rgba(0,0,0,0.3)");return()=>h("div",{ref:f=>{d.value=f,n&&(n.value=f)}},h(or,{styleFn:()=>({backgroundColor:g(s)?g(m):"",width:e?"100%":"12px",height:e?"12px":"100%",zIndex:g(s)?"10":"auto",cursor:e?"row-resize":"col-resize",userSelect:"none",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"12px","&:hover":{backgroundColor:g(m)}})}),"⚪⚪⚪")},cr=()=>{const e=`
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
`.trim(),t=URL.createObjectURL(new Blob([e],{type:"text/html"}));return O(()=>URL.revokeObjectURL(t)),`${t}#?embedded=${encodeURIComponent(location.origin)}`},lr=(e,t,n="")=>`
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
`.trim();function ur(e,t){const n=fe(t),r=o=>{n.value=e(k(n),o)};return[Ue(n),r]}const dr=(e,t,n,r)=>{const o={sendToIframe(a){var l,c;(c=(l=k(e))==null?void 0:l.contentWindow)==null||c.postMessage(a,"*")},sendToDevtools(a){var l,c;(c=(l=k(t))==null?void 0:l.contentWindow)==null||c.postMessage(a,"*")}},s=()=>{const{codeInjected:a,codeURL:l}=g(n);if(!a){if(!l){setTimeout(s,3);return}requestAnimationFrame(()=>{o.sendToIframe({event:"CODE_UPDATE",value:l}),r({type:"CODE_INJECTED"})})}},i=a=>{var d,p;const[l,c]=xt(e,t);!l||!c||((p=(d=a.data)==null?void 0:d.includes)!=null&&p.call(d,"Debugger.enable")&&(console.log("Debugger.enable"),r({type:"Debugger.enable"}),s()),a.source===l.contentWindow?c.contentWindow.postMessage(a.data,"*"):a.source===c.contentWindow&&l.contentWindow.postMessage({event:"DEV",data:a.data},"*"))};return window.addEventListener("message",i),O(()=>window.removeEventListener("message",i)),o},hr=(e,t)=>{const{importMap:n,isDark:r}=e,o=be(()=>{const s=lr(k(r),JSON.stringify({imports:g(n)}));return URL.createObjectURL(new Blob([s],{type:"text/html"}))});return z(o,(s,i)=>{i&&URL.revokeObjectURL(i),t({type:"HTML_CHANGED",iframeSrc:s||""})}),O(()=>URL.revokeObjectURL(k(o)||"")),{iframeSrc:o}},pr=e=>{const{isDark:t,code:n}=e,r=fe(null),o=fe(null),s=u=>{var v;return(v=u.contentDocument)==null?void 0:v.documentElement.classList.toggle("dark",k(t))},i=u=>{const v=k(r);v&&(v.src=u)},a=()=>{var u,v;(v=(u=k(r))==null?void 0:u.contentWindow)==null||v.location.reload()},l=()=>{var u,v;(v=(u=k(o))==null?void 0:u.contentWindow)==null||v.location.reload()};z(()=>g(t),u=>{const v=g(r);v&&s(v)});const[c,d]=ur((u,v)=>{switch(v.type){case"IFRAME_READY":s(v.iframe);let x=u.codeInjected;return{...u,codeInjected:x,iframeReady:!0};case"DEVTOOLS_IFRAME_READY":return{...u,devtoolsIframeReady:!0};case"DEV_LOADED":return{...u,devLoaded:!0};case"HTML_CHANGED":return i(v.iframeSrc),l(),{...u,iframeReady:!1,devtoolsIframeReady:!1,devLoaded:!1,codeInjected:!1,darkInjected:!1};case"HTML_RELOAD":return setTimeout(()=>{a(),l()}),{...u,iframeReady:!1,devtoolsIframeReady:!1,devLoaded:!1,codeInjected:!1,darkInjected:!1};case"CODE_UPDATE":return{...u,codeURL:v.codeURL};case"CODE_INJECTED":return{...u,codeInjected:!0}}return u},{iframeReady:!1,devtoolsIframeReady:!1,devLoaded:!1,codeInjected:!1,codeURL:k(n)}),{sendToDevtools:p,sendToIframe:m}=dr(r,o,c,d);z(()=>g(n),u=>{d({type:"CODE_UPDATE",codeURL:u}),c.value.iframeReady&&requestAnimationFrame(()=>{m({event:"CODE_UPDATE",value:u}),d({type:"CODE_INJECTED"})})});const{iframeSrc:f}=hr(e,d);return z(r,u=>{u==null||u.addEventListener("load",()=>d({type:"IFRAME_READY",iframe:u}))}),z(o,u=>{u==null||u.addEventListener("load",()=>d({type:"DEVTOOLS_IFRAME_READY",devIframe:u}))}),{iframeSrc:f,iframeRef:r,devtoolsIframeRef:o,previewState:c,dispatch:d,sendToDevtools:p,sendToIframe:m}},fr=e=>{const{importMap:t,code:n,devtools:r,isDark:o,...s}=e,i=D(null),{iframeSrc:a,iframeRef:l,devtoolsIframeRef:c,previewState:d,dispatch:p}=pr(e),m=cr(),f=be(()=>`width: 100%; height: 100%; ${g(r)?"display: block;":"display: none;"}`),u=D(.625),v=D(null),x=(b,C)=>{const[R,S]=xt(i,v);if(!R||!S)return;let L,B;const ne=R.getBoundingClientRect();L=C-ne.top-S.offsetHeight/2,B=R.offsetHeight-S.offsetHeight;const re=L/B;u.value=re};return()=>h("div",{...s,ref:i},h(ee.Style,{styleFn:()=>{const b=g(u);return{display:"grid",height:"100%",width:"100%",gridTemplateRows:g(r)?`30px minmax(0, ${b}fr) 12px minmax(0, ${1-b}fr)`:"30px minmax(0, 1fr)"}}}),h("div",{style:"border-bottom: 1px solid;border-top: 1px solid;overflow: hidden;"},h(ze,{title:"reload page",isDark:o,onClick:()=>p({type:"HTML_RELOAD"})},"♻️relaod")),h("iframe",{ref:l,src:a,style:"width: 100%;height: 100%;",frameBorder:0,sandbox:"allow-popups-to-escape-sandbox allow-scripts allow-popups allow-forms allow-pointer-lock allow-top-navigation allow-modals allow-same-origin"}),h("div",null,h(ar,{ref:v,isHorizontal:!0,onResize:x})),h("iframe",{ref:c,style:f,src:m,frameBorder:"0"}))},mr=({isDark:e})=>()=>h(ee.GlobalStyle,{styleFn:()=>({fontFamily:"'Karla', system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",lineHeight:"1.5",fontWeight:"400",colorScheme:g(e)?"light dark":"dark",color:g(e)?"rgba(255, 255, 255, 0.87)":"#242424",backgroundColor:g(e)?"#333":"#fff",fontSynthesis:"none",textRendering:"optimizeLegibility","-webkitFontSmoothing":"antialiased","-moz-osxFontSmoothing":"grayscale","-webkitTextSizeAdjust":"100%",height:"100vh",width:"100vw",body:{margin:"0",minWidth:"100vw",minHeight:"100vh",width:"100%",height:"100%"},"#app":{width:"100%",height:"100%"}})});function vr(){return new Worker(""+new URL("complier.worker-026b4f92.js",import.meta.url).href)}class gr{constructor(){te(this,"registry",{})}registerWorker(t,n){this.registry[t]?console.warn(`Worker of type ${t} already registered.`):this.registry[t]=n}removeWorker(t){delete this.registry[t]}getWorker(t){const n=this.registry[t];if(n)return n;throw new Error(`No worker of type ${t} registered.`)}postMessage(t,n){this.getWorker(t).postMessage(n)}listenRecv(t,n){const r=this.getWorker(t);let o;const s=i=>{const{message_token:a}=i.data||{};if(a!==n)return;const l={...i.data};delete l.message_token,o(l),r.removeEventListener("message",s)};return r.addEventListener("message",s),{recv:new Promise((i,a)=>{o=i}),dispose:()=>r.removeEventListener("message",s)}}}class _r{constructor(){te(this,"registry",new gr);this.initialize()}async initialize(){this.registry.registerWorker("complier",new vr)}worker_caller(t,n){const r=Math.random().toString(36).slice(2),o={...n,message_token:r};return this.registry.postMessage(t,o),this.registry.listenRecv(t,r)}compileFile(t){return this.worker_caller("complier",{event:"BABEL",payload:{file:t,compile_options:{}}})}compileFiles(t){return this.worker_caller("complier",{event:"ROLLUP",payload:{files:t,compile_options:{}}})}}const rt=new _r;y.global_source.on("throw",console.error);const yr=()=>{let e=null;return O(()=>e==null?void 0:e.dispose()),{compileFile(t){return e==null||e.dispose(),e=rt.compileFile(t),e.recv},compileFiles(t){return e==null||e.dispose(),e=rt.compileFiles(t),e.recv}}},wr='import("@rhjs/rh").then(({cs, ElementSource}) => window.dispose = () => (cs || ElementSource).global_source.emit("unmount"));',Er=()=>{var l;const e=D(!0);Dn("isDark",e);const{currentDemo:t}=Pt(),n=be(()=>{var c;return{"@rhjs/rh":`https://unpkg.com/@rhjs/rh@${((c=t.value)==null?void 0:c.version)||"latest"}/dist/main.module.mjs`,"@rhjs/fluent-web-components":"https://unpkg.com/@rhjs/fluent-web-components@latest/dist/main.module.mjs"}}),r=D(""),o=$n(r,{type:"text/javascript"}),s=D(((l=t.value)==null?void 0:l.code)||""),i=yr(),a=async()=>{const c=k(s);if(!c)return;const d=await i.compileFile({filename:"main.tsx",source:c});r.value=`${d.compiled}
${wr}`};return Sn(a),z(t,c=>{c&&s.value!==c.code&&(s.value=c.code,a())}),()=>h("div",null,h(mr,{isDark:e}),h(ee.Style,{styleFn:()=>({position:"relative",display:"flex",flexFlow:"column",width:"100%",height:"100%",maxWidth:"100vw",maxHeight:"100vh",overflow:"hidden"})}),h("header",{style:"height: 30px; width: 100%;"},h(rr,{isDark:e})),h("div",{style:"flex: 1;"},h(ee.Style,{styleFn:()=>({position:"relative",display:"flex",flexFlow:"row",width:"100%",height:"100%"})}),h(Kn,{style:"flex: 1;",value:s,onChange:c=>s.value=c,onSave:a,isDark:e}),h(fr,{style:"flex: 1;",importMap:n,code:o,devtools:!0,isDark:e})))};Tn("#app",Er);
