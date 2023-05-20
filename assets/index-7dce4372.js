var Ut=Object.defineProperty;var Ht=(t,e,n)=>e in t?Ut(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var te=(t,e,n)=>(Ht(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();function zt(t,e){return e.forEach(function(n){n&&typeof n!="string"&&!Array.isArray(n)&&Object.keys(n).forEach(function(r){if(r!=="default"&&!(r in t)){var o=Object.getOwnPropertyDescriptor(n,r);Object.defineProperty(t,r,o.get?o:{enumerable:!0,get:function(){return n[r]}})}})}),t}function Wt(t,e){const n=Object.create(null),r=t.split(",");for(let o=0;o<r.length;o++)n[r[o]]=!0;return e?o=>!!n[o.toLowerCase()]:o=>!!n[o]}const Ft=()=>{},Bt=Object.assign,$t=Object.prototype.hasOwnProperty,ve=(t,e)=>$t.call(t,e),q=Array.isArray,he=t=>ot(t)==="[object Map]",Ne=t=>typeof t=="symbol",ge=t=>t!==null&&typeof t=="object",Vt=Object.prototype.toString,ot=t=>Vt.call(t),Yt=t=>ot(t).slice(8,-1),Ae=t=>typeof t=="string"&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,je=(t,e)=>!Object.is(t,e);let qt;function st(t,e=qt){e&&e.active&&e.effects.push(t)}const Me=t=>{const e=new Set(t);return e.w=0,e.n=0,e},it=t=>(t.w&V)>0,at=t=>(t.n&V)>0,Ce=new WeakMap;let oe=0,V=1;const Re=30;let P;const Q=Symbol(""),xe=Symbol("");class ct{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,st(this,r)}run(){if(!this.active)return this.fn();let e=P,n=G;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=P,P=this,G=!0,V=1<<++oe,oe<=Re?(({deps:r})=>{if(r.length)for(let o=0;o<r.length;o++)r[o].w|=V})(this):We(this),this.fn()}finally{oe<=Re&&(r=>{const{deps:o}=r;if(o.length){let s=0;for(let i=0;i<o.length;i++){const a=o[i];it(a)&&!at(a)?a.delete(r):o[s++]=a,a.w&=~V,a.n&=~V}o.length=s}})(this),V=1<<--oe,P=this.parent,G=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){P===this?this.deferStop=!0:this.active&&(We(this),this.onStop&&this.onStop(),this.active=!1)}}function We(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}function Ie(t,e){t.effect&&(t=t.effect.fn);const n=new ct(t);e&&(Bt(n,e),e.scope&&st(n,e.scope)),e&&e.lazy||n.run();const r=n.run.bind(n);return r.effect=n,r}function lt(t){t.effect.stop()}let G=!0;const ut=[];function ye(){ut.push(G),G=!1}function _e(){const t=ut.pop();G=t===void 0||t}function M(t,e,n){if(G&&P){let r=Ce.get(t);r||Ce.set(t,r=new Map);let o=r.get(n);o||r.set(n,o=Me()),dt(o)}}function dt(t,e){let n=!1;oe<=Re?at(t)||(t.n|=V,n=!it(t)):n=!t.has(P),n&&(t.add(P),P.deps.push(t))}function J(t,e,n,r,o,s){const i=Ce.get(t);if(!i)return;let a=[];if(e==="clear")a=[...i.values()];else if(n==="length"&&q(t)){const l=Number(r);i.forEach((c,d)=>{(d==="length"||d>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(i.get(n)),e){case"add":q(t)?Ae(n)&&a.push(i.get("length")):(a.push(i.get(Q)),he(t)&&a.push(i.get(xe)));break;case"delete":q(t)||(a.push(i.get(Q)),he(t)&&a.push(i.get(xe)));break;case"set":he(t)&&a.push(i.get(Q))}if(a.length===1)a[0]&&De(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);De(Me(l))}}function De(t,e){const n=q(t)?t:[...t];for(const r of n)r.computed&&Fe(r);for(const r of n)r.computed||Fe(r)}function Fe(t,e){(t!==P||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Gt=Wt("__proto__,__v_isRef,__isVue"),ht=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ne)),Kt=pt(),Jt=pt(!0),Be=Xt();function Xt(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=y(this);for(let s=0,i=this.length;s<i;s++)M(r,0,s+"");const o=r[e](...n);return o===-1||o===!1?r[e](...n.map(y)):o}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ye();const r=y(this)[e].apply(this,n);return _e(),r}}),t}function Zt(t){const e=y(this);return M(e,0,t),e.hasOwnProperty(t)}function pt(t=!1,e=!1){return function(n,r,o){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&o===(t?e?dn:vt:e?un:mt).get(n))return n;const s=q(n);if(!t){if(s&&ve(Be,r))return Reflect.get(Be,r,o);if(r==="hasOwnProperty")return Zt}const i=Reflect.get(n,r,o);return(Ne(r)?ht.has(r):Gt(r))?i:(t||M(n,0,r),e?i:j(i)?s&&Ae(r)?i:i.value:ge(i)?t?Ue(i):gt(i):i)}}function Qt(t=!1){return function(e,n,r,o){let s=e[n];if(pe(s)&&j(s)&&!j(r))return!1;if(!t&&(_t(r)||pe(r)||(s=y(s),r=y(r)),!q(e)&&j(s)&&!j(r)))return s.value=r,!0;const i=q(e)&&Ae(n)?Number(n)<e.length:ve(e,n),a=Reflect.set(e,n,r,o);return e===y(o)&&(i?je(r,s)&&J(e,"set",n,r):J(e,"add",n,r)),a}}const en={get:Kt,set:Qt(),deleteProperty:function(t,e){const n=ve(t,e),r=Reflect.deleteProperty(t,e);return r&&n&&J(t,"delete",e,void 0),r},has:function(t,e){const n=Reflect.has(t,e);return Ne(e)&&ht.has(e)||M(t,0,e),n},ownKeys:function(t){return M(t,0,q(t)?"length":Q),Reflect.ownKeys(t)}},tn={get:Jt,set:(t,e)=>!0,deleteProperty:(t,e)=>!0},Pe=t=>t,we=t=>Reflect.getPrototypeOf(t);function ae(t,e,n=!1,r=!1){const o=y(t=t.__v_raw),s=y(e);n||(e!==s&&M(o,0,e),M(o,0,s));const{has:i}=we(o),a=r?Pe:n?He:se;return i.call(o,e)?a(t.get(e)):i.call(o,s)?a(t.get(s)):void(t!==o&&t.get(e))}function ce(t,e=!1){const n=this.__v_raw,r=y(n),o=y(t);return e||(t!==o&&M(r,0,t),M(r,0,o)),t===o?n.has(t):n.has(t)||n.has(o)}function le(t,e=!1){return t=t.__v_raw,!e&&M(y(t),0,Q),Reflect.get(t,"size",t)}function $e(t){t=y(t);const e=y(this);return we(e).has.call(e,t)||(e.add(t),J(e,"add",t,t)),this}function Ve(t,e){e=y(e);const n=y(this),{has:r,get:o}=we(n);let s=r.call(n,t);s||(t=y(t),s=r.call(n,t));const i=o.call(n,t);return n.set(t,e),s?je(e,i)&&J(n,"set",t,e):J(n,"add",t,e),this}function Ye(t){const e=y(this),{has:n,get:r}=we(e);let o=n.call(e,t);o||(t=y(t),o=n.call(e,t)),r&&r.call(e,t);const s=e.delete(t);return o&&J(e,"delete",t,void 0),s}function qe(){const t=y(this),e=t.size!==0,n=t.clear();return e&&J(t,"clear",void 0,void 0),n}function ue(t,e){return function(n,r){const o=this,s=o.__v_raw,i=y(s),a=e?Pe:t?He:se;return!t&&M(i,0,Q),s.forEach((l,c)=>n.call(r,a(l),a(c),o))}}function de(t,e,n){return function(...r){const o=this.__v_raw,s=y(o),i=he(s),a=t==="entries"||t===Symbol.iterator&&i,l=t==="keys"&&i,c=o[t](...r),d=n?Pe:e?He:se;return!e&&M(s,0,l?xe:Q),{next(){const{value:p,done:m}=c.next();return m?{value:p,done:m}:{value:a?[d(p[0]),d(p[1])]:d(p),done:m}},[Symbol.iterator](){return this}}}}function $(t){return function(...e){return t!=="delete"&&this}}function nn(){const t={get(o){return ae(this,o)},get size(){return le(this)},has:ce,add:$e,set:Ve,delete:Ye,clear:qe,forEach:ue(!1,!1)},e={get(o){return ae(this,o,!1,!0)},get size(){return le(this)},has:ce,add:$e,set:Ve,delete:Ye,clear:qe,forEach:ue(!1,!0)},n={get(o){return ae(this,o,!0)},get size(){return le(this,!0)},has(o){return ce.call(this,o,!0)},add:$("add"),set:$("set"),delete:$("delete"),clear:$("clear"),forEach:ue(!0,!1)},r={get(o){return ae(this,o,!0,!0)},get size(){return le(this,!0)},has(o){return ce.call(this,o,!0)},add:$("add"),set:$("set"),delete:$("delete"),clear:$("clear"),forEach:ue(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{t[o]=de(o,!1,!1),n[o]=de(o,!0,!1),e[o]=de(o,!1,!0),r[o]=de(o,!0,!0)}),[t,n,e,r]}const[rn,on,sn,an]=nn();function ft(t,e){const n=e?t?an:sn:t?on:rn;return(r,o,s)=>o==="__v_isReactive"?!t:o==="__v_isReadonly"?t:o==="__v_raw"?r:Reflect.get(ve(n,o)&&o in r?n:r,o,s)}const cn={get:ft(!1,!1)},ln={get:ft(!0,!1)},mt=new WeakMap,un=new WeakMap,vt=new WeakMap,dn=new WeakMap;function gt(t){return pe(t)?t:yt(t,!1,en,cn,mt)}function Ue(t){return yt(t,!0,tn,ln,vt)}function yt(t,e,n,r,o){if(!ge(t)||t.__v_raw&&(!e||!t.__v_isReactive))return t;const s=o.get(t);if(s)return s;const i=(a=t).__v_skip||!Object.isExtensible(a)?0:function(c){switch(c){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}(Yt(a));var a;if(i===0)return t;const l=new Proxy(t,i===2?r:n);return o.set(t,l),l}function pe(t){return!(!t||!t.__v_isReadonly)}function _t(t){return!(!t||!t.__v_isShallow)}function y(t){const e=t&&t.__v_raw;return e?y(e):t}const se=t=>ge(t)?gt(t):t,He=t=>ge(t)?Ue(t):t;function wt(t){G&&P&&dt((t=y(t)).dep||(t.dep=Me()))}function Et(t,e){const n=(t=y(t)).dep;n&&De(n)}function j(t){return!(!t||t.__v_isRef!==!0)}function x(t){return bt(t,!1)}function fe(t){return bt(t,!0)}function bt(t,e){return j(t)?t:new hn(t,e)}class hn{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:y(e),this._value=n?e:se(e)}get value(){return wt(this),this._value}set value(e){const n=this.__v_isShallow||_t(e)||pe(e);e=n?e:y(e),je(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:se(e),Et(this))}}function g(t){return j(t)?t.value:t}var St;class pn{constructor(e,n,r,o){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[St]=!1,this._dirty=!0,this.effect=new ct(e,()=>{this._dirty||(this._dirty=!0,Et(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=r}get value(){const e=y(this);return wt(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}St="__v_isReadonly";function me(){return me=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},me.apply(this,arguments)}function kt(t,e){if(t==null)return{};var n,r,o={},s=Object.keys(t);for(r=0;r<s.length;r++)e.indexOf(n=s[r])>=0||(o[n]=t[n]);return o}var fn=0;function Ee(t){return"__private_"+fn+++"_"+t}function E(t,e){if(!Object.prototype.hasOwnProperty.call(t,e))throw new TypeError("attempted to use private field on non-instance");return t}class mn{constructor(e){this.data=void 0,this.next=void 0,this.data=e,this.next=null}}class vn{constructor(){this.head=void 0,this.tail=void 0,this.length=void 0,this.head=null,this.tail=null,this.length=0}enqueue(e){let n=new mn(e);this.isEmpty()?(this.head=n,this.tail=n):(this.tail&&(this.tail.next=n),this.tail=n),this.length++}dequeue(){if(this.isEmpty())return null;{var e,n;let r=((e=this.head)==null?void 0:e.data)||null;return this.head=((n=this.head)==null?void 0:n.next)||null,this.isEmpty()&&(this.tail=null),this.length--,r}}isEmpty(){return this.length===0}}class Tt{constructor(){this.tasks=new vn,this.isRunning=!1,this.threshold=10}runTask(e){this.tasks.enqueue(e),this.triggerSchedule()}triggerSchedule(){this.tasks.length!==0&&(this.isRunning||(this.isRunning=!0,requestIdleCallback(e=>{try{for(;this.tasks.length>0;){const n=this.tasks.dequeue();if(!n||(n(),e.timeRemaining()<=this.threshold))break}}finally{this.isRunning=!1}requestAnimationFrame(()=>this.triggerSchedule())},{timeout:1e3})))}}const Ot=new Tt;var T=Ee("eventMap"),X=Ee("addEventObject"),H=Ee("getEventObjects"),I=Ee("removeEventObjects");class gn{constructor(){Object.defineProperty(this,I,{value:wn}),Object.defineProperty(this,H,{value:_n}),Object.defineProperty(this,X,{value:yn}),this.scheduler=new Tt,Object.defineProperty(this,T,{writable:!0,value:new Map})}addListener(e,n,r){return E(this,X)[X](e,n,r,!1)}emit(e,...n){const r=E(this,H)[H](e);return!!r.length&&(r.forEach(({context:o,listener:s,once:i})=>{i&&E(this,I)[I](e,s,void 0,!0),s.apply(o,n)}),!0)}idleEmit(e,n,...r){let o=E(this,H)[H](e);return!!o.length&&(o.forEach(({context:s,listener:i,once:a})=>{Ot.runTask(()=>{a&&E(this,I)[I](e,i,void 0,!0),i.apply(s,r),n==null||n()})}),!0)}eventNames(){return[...E(this,T)[T].keys()]}listenerCount(e){return E(this,H)[H](e).length}listeners(e){return E(this,H)[H](e).map(({listener:n})=>n)}off(e,n,r,o=!1){return E(this,I)[I](e,n,r,o)}on(e,n,r){return E(this,X)[X](e,n,r,!1)}once(e,n,r){return E(this,X)[X](e,n,r,!0)}removeAllListeners(e){return E(this,I)[I](e,void 0,void 0,!1)}removeListener(e,n,r,o=!1){return E(this,I)[I](e,n,r,o)}}function yn(t,e,n=this,r){if(typeof e!="function")throw new TypeError("The listener must be a function");let o=E(this,T)[T].get(t);return o||(o=[],E(this,T)[T].set(t,o)),o.push({context:n,listener:e,once:r}),this}function _n(t){var e;return(e=E(this,T)[T].get(t))!=null?e:[]}function wn(t,e,n,r){if(!t)return E(this,T)[T].clear(),this;const o=E(this,T)[T].get(t),s=o==null?void 0:o.filter(i=>e&&(i.listener!==e||n&&i.context!==n||r&&!i.once));return s!=null&&s.length?E(this,T)[T].set(t,s):E(this,T)[T].delete(t),this}const w={ES_CREATE_CB:Symbol("ES_CREATE_CB"),IS_ANCHOR:Symbol("IS_ANCHOR"),NONE:Symbol("NONE"),SELF_ES:Symbol("SELF_ES"),CACHE_NODES:Symbol("CACHE_NODES"),IS_COMPONENT:Symbol("IS_COMPONENT"),STYLESHEET_SCOPED:Symbol("STYLESHEET_SCOPED"),STYLESHEET_ROOT:Symbol("STYLESHEET_ROOT")};class _ extends gn{static peek(){return _.source_stack.peek()||_.global_source}constructor(e,n){var r;if(super(),r=this,this.host=void 0,this.__context={},this.__parent_source=_.source_stack.peek(),this.__container_source=this,this.states={mounted:!1,unmounted:!1},this.host=e,!this.__parent_source)return;this.setupContainerSource(),this.on("throw",i=>{var a;return(a=this.__parent_source)==null?void 0:a.emit("throw",i)}),this.once("mount",()=>this.states.mounted=!0),this.once("unmount",()=>this.states.unmounted=!0);const o=()=>Ot.runTask(async function(){r.idleEmit("unmount",()=>r.dispose())});var s;n?((this.__container_source===this?(s=this.__container_source.__parent_source)==null?void 0:s.__container_source:this.__container_source)||this.__parent_source).once("unmount",o):(this.__parent_source.once("unmount",o),this.__parent_source.once("update_after",()=>{this.__parent_source.once("update_after",()=>{this.emit("unmount")})}))}onMount(e){return this.states.mounted?e():this.once("mount",e),this}onUnmount(e){return this.states.unmounted?e():this.once("unmount",e),this}setupContainerSource(){for(;this.__container_source&&this.__container_source!==_.global_source;){var e;if((e=this.__container_source.host)!=null&&e[w.IS_COMPONENT])break;this.__container_source=this.__container_source.__parent_source}}dispose(){this.removeAllListeners(),delete this.__context}effect(e,n){const r=Ie(e,n);return this.once("unmount",()=>lt(r)),r}}_.source_stack=new class{constructor(){this.items=void 0,this.items=[]}toArray(){return[...this.items]}push(t){this.items.push(t)}pop(){return this.items.pop()}peek(){return this.items[this.items.length-1]}size(){return this.items.length}isEmpty(){return this.items.length===0}},_.global_source=new _;const Z=(t,e,n)=>{const r=o=>{const s=o.relatedNode;s&&s===t.parentNode&&e(s,t)};return t.addEventListener(n,r),()=>t.removeEventListener(n,r)},Y=t=>{const e=t==null?void 0:t.parentNode;(e&&document.contains(e)||e&&t.getRootNode()!==t)&&e.removeChild(t)};class A{constructor(){this.source=void 0,this.viewAnchor=(()=>{const e=document.createTextNode("");return e[w.IS_ANCHOR]=!0,e})(),this.currentView=this.viewAnchor,this.renderEffectRunner=void 0,this.rawTarget=void 0,this.dispose_onDomInserted=void 0,this._initialized=!1}_initialize(){this._initialized||(this._initialized=!0,this.initialize())}initialize(){this.source||(this.source=new _(this)),this.source.once("unmount",()=>this.dispose())}ensureEffectRunner(){return this._initialize(),this.renderEffectRunner||(this.renderEffectRunner=Ie(this.update.bind(this),{lazy:!1}),this.dispose_onDomInserted=Z(this.currentView,(e,n)=>{var r,o,s;(r=this.dispose_onDomInserted)==null||r.call(this),this.source.emit("mount"),this.viewAnchor!==n&&e.insertBefore(this.viewAnchor,n),n!==this.currentView&&(e.insertBefore(this.currentView,n),(s=n)&&s[w.IS_ANCHOR]||(o=n.parentElement)==null||o.removeChild(n))},"DOMNodeInserted")),this.renderEffectRunner}render(){return null}_update(){const e=this.currentView,n=this.render()||this.viewAnchor,r=e==null?void 0:e.parentElement;r&&r.replaceChild(n,e),this.currentView=n}update(){var e,n;if(this.source.states.unmounted||(e=this.source.__parent_source)!=null&&e.states.unmounted||(n=this.source.__container_source)!=null&&n.states.unmounted)this.source.emit("unmount");else{this.source.emit("update_before");try{_.source_stack.push(this.source),this.source.emit("update"),this._update()}catch(r){requestAnimationFrame(()=>{this.source.emit("throw",r),console.error(r)})}finally{_.source_stack.pop(),this.source.emit("update_after")}}}dispose(){var e,n;(e=this.renderEffectRunner)==null||e.effect.stop(),Y(this.currentView),Y(this.viewAnchor),(n=this.dispose_onDomInserted)==null||n.call(this)}static fromRender(e){const n=new A;return n.render=()=>A.warpView(e()),n.rawTarget=e,n}static fromRef(e){const n=new A;return n.render=()=>A.warpView(g(e)),n.rawTarget=e,n}static warpView(e){return e instanceof Node||e===null?e:document.createTextNode(`${e}`)}static warp(e){if(typeof e!="function"&&!j(e))return A.warpView(e);let n;if(typeof e=="function")n=A.fromRender(e);else{if(!j(e))throw new Error("Unknown view type.");n=A.fromRef(e)}return n.ensureEffectRunner(),n.currentView}}let Ct;Ct=w.IS_COMPONENT;class Rt extends A{get[Ct](){return!0}constructor(e,n,r){super(),this._define=void 0,this.props=void 0,this.children=void 0,this.state=void 0,this._define=e,this.props=n,this.children=r}initialize(){this.initializeComponent()}initializeComponent(){this.source=new _(this,"__node_cached"in this.props),this.source.once("unmount",()=>this.dispose()),this.installSource(),this.initializeSetup()}initializeSetup(){const{props:e,children:n}=this;ye(),_.source_stack.push(this.source),this.source.emit("setup_before"),this.state=this._define.setup(e,n),this.source.emit("setup_after"),_.source_stack.pop(),_e()}render(){const e=this._define.render(this.props,this.state,this.children);return A.warp(e)}installSource(){var e,n;(e=(n=this._define)[w.ES_CREATE_CB])==null||e.call(n,this.source)}}class En extends Rt{constructor(e,n,r){const o={setup:(s,i)=>{const a={};return o.render=e(s,a,i),a},render:()=>{}};o[w.ES_CREATE_CB]=e[w.ES_CREATE_CB],super(o,n,r),this._function_define=void 0,this._function_define=e}}class bn{constructor(e,n,r){this.tagNameOrDome=void 0,this.props=void 0,this.children=void 0,this.node=void 0,this.source=new _(this),this.tagNameOrDome=e,this.props=n,this.children=r,this.source.once("unmount",()=>this.dispose()),this.buildNode()}dispose(){Y(this.node)}buildNode(){if(this.node)return this.node;this.node=this.tagNameOrDome instanceof Element?this.tagNameOrDome:document.createElement(this.tagNameOrDome),ye(),this.hydrateChildren(),_e();for(const[e,n]of Object.entries(this.props))this.hydrateAttribute(e,n);return this.node}isValidAttributeName(e){return/^[a-zA-Z][\w-]*$/.test(e)}hydrateAttribute(e,n){if(!e.startsWith("_")&&!e.startsWith("$")&&this.isValidAttributeName(e)){switch(e){case"ref":return void(typeof n=="function"?n(this.node):j(n)&&(n.value=this.node));case"effect":return void(typeof n=="function"&&this.source.effect(()=>n(this.node),{lazy:!1}))}if(e.startsWith("on")&&typeof n=="function"){const r=e.slice(2).toLowerCase(),o=this.node["__cb_"+e];return o&&this.node.removeEventListener(r,o),this.node["__cb_"+e]=n,void this.node.addEventListener(r,n)}this.source.effect(()=>{const r=g(n);if(e!=="value")if(e!=="defaultValue")typeof r!="boolean"?this.node.setAttribute(e,r):r?this.node.setAttribute(e,""):this.node.removeAttribute(e);else{if(this.node.value)return;this.node.value=r}else this.node.value=r},{lazy:!1})}}hydrateChildren(){const{children:e}=this;for(const n of e){if(n==null)continue;const r=A.warp(n);r&&this.node.appendChild(r)}}}const Ge=(t,e)=>{var n,r;if(!t)return;const o=_.peek(),{__container_source:s}=o;s&&((n=s.__context)[r=w.CACHE_NODES]||(n[r]={}),s.__context[w.CACHE_NODES][t]=e)},xt=(t,e={},n=[])=>{const{key:r}=e;delete e.key,r&&(e.__node_cached=!0);const o=(s=>{var i,a;if(!s)return;const l=_.peek(),{__container_source:c}=l;return c?((i=c.__context)[a=w.CACHE_NODES]||(i[a]={}),c.__context[w.CACHE_NODES][s]):void 0})(r);if(o)return o;if(typeof t=="function"){const s=new En(t,e,n);return Ge(r,s),s}if(typeof t=="object"&&typeof t.render=="function"&&typeof t.setup=="function"){const s=new Rt(t,e,n);return Ge(r,s),s}throw new Error(`Valid define type [${typeof t}] is not supported for reactiveHydrate.`)};function Sn(t,e,...n){var r;if(e||(e={}),n=((r=n)==null?void 0:r.flat())||n,typeof t=="string"||t instanceof Element)return new bn(t,e,n).node;const o=xt(t,e,n);return o.ensureEffectRunner(),o.currentView}const h=Sn;function W(t){return t?t(_.peek()):_.peek()}const kn=(t,e,n=!1)=>W(r=>r[n?"once":"on"](t,e)),Tn=t=>W(e=>e.onMount(t)),O=t=>W(e=>e.onUnmount(t)),On=t=>kn("throw",t),Cn=(t,e,n)=>{const r=t instanceof Element?t:document.querySelector(t);if(!r)throw new Error(`Could not find container: ${t}`);if(e instanceof Element)return r.appendChild(e),null;const o=xt(e,n);return o.ensureEffectRunner(),r.appendChild(o.currentView),o},F=(t,e)=>{let n=null;const r=Ie(()=>{n==null||n(),t(s=>n=s)},me({lazy:!1},e)),o=()=>{n==null||n(),lt(r),n=null};return O(o),[r,o]},z=(t,e,n)=>{let r;return F(()=>{const o=typeof t=="function"?t(r):g(t);Se(()=>e(o,r)),r=o},n)},be=(t,e)=>{const n=x();return F(()=>{const r=k(n),o=t(r);var s,i;s=r,i=o,Object.is(s,i)||s===i||(n.value=o)},e),n},Se=(t,...e)=>{ye();const n=t(...e);return _e(),n},k=t=>Se(()=>g(t));function Rn(t){const e=j(t)?t:x(t);return[()=>g(e),n=>{if(typeof n=="function"){const r=k(e);e.value=n(r)}else e.value=n},e]}const xn=(...t)=>t.map(e=>g(e)),Dt=xn;function Dn(t,e=w.NONE){let n=_.peek();for(;n;){const r=n.__context;if(t in r)return r[t];n=n.__parent_source}if(e===w.NONE)throw new Error(`The key '${t}' is not defined in context`);return e}function Ln(t,e){const n=_.peek();if(n==null||!n.__container_source)throw new Error("inject must be called inside Component");n.__container_source.__context[t]=e}function Lt(t,e){return((n,r)=>{if(!r)return;const o=n[w.ES_CREATE_CB];n[w.ES_CREATE_CB]=s=>{o==null||o(s),r(s)}})(t,e),t}const Nn=t=>new Proxy({},{get(e,n,r){let o=t;for(;o!==void 0;){const s=o.__context;if(n in s)return s[n];o=o.__parent_source}},set:(e,n,r,o)=>(t.__context[n]=r,!0)}),Nt=t=>{const e=W();if(!e.__container_source)throw new Error("Container source not found, must be inside a container component to use element source");const n=Nn(e.__container_source);return t==null||t(n),n},An=Lt({setup({fallbackRender:t,onError:e,render:n}){const r=_.peek();let o=x(null);r.on("throw",i=>{i instanceof Error&&(e==null||e(i),o.value=i)});const s=x(1);return{catchError:o,rerenderRef:s,fallbackRender:t,childrenRender:n}},render(t,{fallbackRender:e,rerenderRef:n,catchError:r,childrenRender:o}){const s=()=>{n.value=Date.now(),r.value=null};return r.value?Se(()=>e(r.value,s)):o()}}),At=Lt({setup(t,[e,...n]){const r={anchor:document.createTextNode(""),children:[],parentNode:null},o=W(),s=(i=typeof e=="function"?e:()=>[e,...n],()=>{return(p=i(),Array.isArray(p)?p:[p]).flat(1).map(m=>A.warp(m)).filter(Boolean);var p});var i;const[a,l]=F(()=>{_.source_stack.push(o),(()=>{const p=r.children,m=s(),{parentNode:f,anchor:u}=r;if(!f)return;const v=Math.max(m.length,p.length);for(let D=0;D<v;D++){const b=m[D],C=p[D];if(!b&&C)C.remove();else if(!C&&b)f.insertBefore(b,u);else if(C&&b){if(C===b)continue;f.replaceChild(b,C)}}r.children=m})(),_.source_stack.pop()}),c=Z(r.anchor,p=>{r.parentNode=p,a()},"DOMNodeInserted"),d=Z(r.anchor,p=>{r.children.forEach(Y),r.parentNode=null},"DOMNodeRemoved");return O(()=>{c(),d(),l(),Y(r.anchor),r.children.forEach(Y)}),W(p=>{var m;(m=p.__parent_source)==null||m.once("update_before",()=>{var f;r.children.forEach(Y),(f=p.__parent_source)==null||f.once("update_after",()=>{Y(r.anchor)})})}),r},render:(t,e)=>e.anchor});var Le=function t(e,n){if(e===n)return!0;if(e&&n&&typeof e=="object"&&typeof n=="object"){if(e.constructor!==n.constructor)return!1;var r,o,s;if(Array.isArray(e)){if((r=e.length)!=n.length)return!1;for(o=r;o--!=0;)if(!t(e[o],n[o]))return!1;return!0}if(e.constructor===RegExp)return e.source===n.source&&e.flags===n.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===n.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===n.toString();if((r=(s=Object.keys(e)).length)!==Object.keys(n).length)return!1;for(o=r;o--!=0;)if(!Object.prototype.hasOwnProperty.call(n,s[o]))return!1;for(o=r;o--!=0;){var i=s[o];if(!t(e[i],n[i]))return!1}return!0}return e!=e&&n!=n},Ke=zt({__proto__:null,default:Le},[Le]);function jt(t){if(function(e){return e&&typeof e=="object"&&e.constructor===Object}(t)){const e={};return Object.keys(t).forEach(n=>{e[n]=jt(t[n])}),e}return t}const Je=t=>jt(y(t)),jn=({items:t,render:e,needUpdate:n=(r,o)=>!((Ke==null?void 0:Le)||Ke)(r,o)})=>{const r=fe([]),o=W(),[s]=F(()=>{const i=typeof t=="function"?t():g(t);_.source_stack.push(o);try{((a,l)=>{const c=k(r);for(let p=0;p<Math.max(c.length,a.length);p++){const m=c[p],f=a[p];if(m!==void 0&&f!==void 0){if(!m.node||Se(()=>n(f,m.data))){const u=e(f,p,a,l,m.node);m.node=u,m.data=Je(f)}}else if(m===void 0){const u=e(f,p,a,l);c.push({data:Je(f),node:u})}else f===void 0&&(m.del=!0)}const d=c.filter(p=>p.del!==!0);r.value=d})(i,()=>s==null?void 0:s.effect.run())}finally{_.source_stack.pop()}});return()=>h(At,{},()=>r.value.filter(i=>!i.del).map(i=>i.node))},Mn=["container"],In=(t,e,n)=>{let{container:r}=t,o=kt(t,Mn);const s=r||document.createElement("div");return document.body.appendChild(s),h(s,o,...n),O(()=>{var i;(i=s.parentElement)==null||i.removeChild(s)}),()=>null};function Pn(t,e,n=""){const r=e===":root",o=r?"":e,s=t.split(",").map(l=>l.trim()).filter(Boolean);let i=r?[""]:o.split(",").map(l=>l.trim()).filter(Boolean);var a;return(a=i,s.flatMap(l=>a.map(c=>[l,c]))).map(([l,c])=>l.startsWith("&")?l.replace(/&/g,c):`${c} ${l}`).map(l=>`${l.replace(n||"","")}${n||""}`.trim()).join(",")}const Xe=t=>t.nodeType===Node.DOCUMENT_NODE||t.nodeType===Node.DOCUMENT_FRAGMENT_NODE,Ze=(t,e,n)=>{const{updateCSSText:r,installSheet:o,uninstallSheet:s}=n;let i=!1;return{parseStyle:a=>{const l=function(c,d,{beautify:p=!1,scopedSelector:m=""}){const f=p?`
`:"",u=[{nodeSelector:d+m,cssObject:c}],v=[];for(;u.length>0;){const{nodeSelector:b,cssObject:C}=u.pop(),R={selector:b,cssText:""};for(const S in C){const L=C[S];if(typeof L=="object"){const B=Pn(S,b,m);u.push({nodeSelector:B,cssObject:L})}else{if(typeof L=="string"&&!L.trim()||L==null)continue;R.cssText+=`${D=S,D.replace(/[A-Z]/g,B=>`-${B.toLowerCase()}`)}: ${C[S]};${f}`}}R.cssText.trim()&&v.push(R)}var D;return v.map(b=>`${b.selector}{${b.cssText}}`).join(`
`).trim()}(t(),a,{scopedSelector:e});r(l)},applySheet:a=>{i||(i=!0,o(a))},removeSheet:a=>{i&&(i=!1,s(a))}}},Qe=()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(36),Mt=t=>{const{scopedId:e,className:n}=t,r=!!e,o=document.createTextNode("");let s;(({props:c,scopedId:d,rootNodeSelector:p,styleOrFunc:m},f)=>{const u=(S=>{if(!S)throw new Error("styleOrFn is required.");return typeof S=="function"?S:()=>S})(c.styleFn||c.style||m),v=Nt(),{applySheet:D,removeSheet:b,parseStyle:C}=((S,L,B)=>B?((ne,re)=>{const U=new CSSStyleSheet,{parseStyle:ke,applySheet:Te,removeSheet:Oe}=Ze(ne,re,{updateCSSText(N){U.replaceSync(N)},installSheet(N=document){Xe(N)&&(N.adoptedStyleSheets=[...N.adoptedStyleSheets,U])},uninstallSheet(N=document){Xe(N)&&(N.adoptedStyleSheets=[...N.adoptedStyleSheets].filter(ie=>ie!==U))}});return{sheet:U,parseStyle:ke,applySheet:Te,removeSheet:Oe}})(S,L):((ne,re)=>{const U=document.createElement("style"),{parseStyle:ke,applySheet:Te,removeSheet:Oe}=Ze(ne,re,{updateCSSText(N){U.innerHTML=N},installSheet(N){N.appendChild(U)},uninstallSheet(N){var ie;(ie=U.parentNode)==null||ie.removeChild(U)}});return{styleDOM:U,parseStyle:ke,applySheet:Te,removeSheet:Oe}})(S,L))(()=>u(v),d?`[data-s-${d}]`:void 0,c.adopted),{[w.STYLESHEET_ROOT]:R}=v;F(()=>{let S=p;var L;c.adopted&&R&&R instanceof Node&&((L=R).nodeType===Node.DOCUMENT_NODE||L.nodeType===Node.DOCUMENT_FRAGMENT_NODE)&&(S=":root"),C(S)}),c.adopted||(R==null?void 0:R.nodeType)===Node.DOCUMENT_FRAGMENT_NODE?(D(R),O(()=>b(R))):(O(Z(f,D,"DOMNodeInserted")),O(Z(f,b,"DOMNodeRemoved")))})(t,o);const i=`s-${e}`.replace(/-([a-z])/g,function(c,d){return d.toUpperCase()}),a=c=>{if("dataset"in c&&typeof c.dataset=="object"){if(c[w.STYLESHEET_SCOPED]!==void 0&&c[w.STYLESHEET_SCOPED]!==i)return;c.dataset[i]="",c[w.STYLESHEET_SCOPED]=i}},l=c=>{if("dataset"in c&&typeof c.dataset=="object"){if(c[w.STYLESHEET_SCOPED]!==void 0&&c[w.STYLESHEET_SCOPED]!==i)return;delete c.dataset[i],delete c[w.STYLESHEET_SCOPED]}};return O(Z(o,c=>{r&&(a(c),(d=>{s=new MutationObserver(p=>{for(const m of p){const{addedNodes:f,removedNodes:u}=m;f.forEach(v=>a(v)),u.forEach(v=>l(v))}}),s.observe(d,{childList:!0,subtree:!0})})(c)),n&&c instanceof Element&&c.classList.add(n)},"DOMNodeInserted")),O(Z(o,c=>{var d;l(c),(d=s)==null||d.disconnect(),n&&c instanceof Element&&c.classList.remove(n)},"DOMNodeRemoved")),{anchor:o}},Un=(t,e,[n])=>{const r=t.scoped?Qe():void 0,o=`s-${Qe()}`,{anchor:s}=Mt({props:t,styleOrFunc:n,rootNodeSelector:`.${o}`,className:o,scopedId:r});return()=>s},Hn=(t,e,[n])=>{const{anchor:r}=Mt({props:me({},t,{scoped:!1}),styleOrFunc:n,rootNodeSelector:":root"});return()=>r},zn=({component:t,render:e,fallback:n,error:r})=>{const o=x("fulfilled");On(async a=>{var l;!(l=a)||typeof l!="object"&&typeof l!="function"||typeof l.then!="function"||(o.value="pending",a.then(()=>o.value="fulfilled"),a.catch(()=>o.value="rejected"))});const s=t?h(t):e?h(()=>()=>A.warpView(e())):null,i=h(()=>()=>{switch(o.value){case"pending":return n();case"fulfilled":return s;case"rejected":return(r||n)()}});return()=>i},Wn=["tagName","render"],Fn=(t,e,n)=>{let{tagName:r="div",render:o}=t,s=kt(t,Wn);const i=h(r,s,...n),a=i.attachShadow({mode:"open"});return(l=>{const c=W(),d=Nt();let p;const m=()=>{p=d[w.STYLESHEET_ROOT],d[w.STYLESHEET_ROOT]=l};c.on("update_before",m),c.on("update_after",()=>{d[w.STYLESHEET_ROOT]=p,p=void 0}),m()})(a),()=>{let l=o();return Array.isArray(l)||(l=[l]),l.map(c=>A.warp(c)).filter(Boolean).forEach(c=>a.appendChild(c)),i}},Bn=(t,...e)=>{const n=[];for(let r=0;r<t.length;r++){n.push(document.createTextNode(t[r]));const o=e[r],s=document.createTextNode("");typeof o=="function"?F(()=>s.textContent=o()):j(o)&&F(()=>s.textContent=String(o.value)),n.push(s)}return n},It=(t,...e)=>t.reduce((n,r,o)=>{var s;return n+=r,o<e.length&&(n+=g(typeof(s=e[o])=="function"?s():s)),n},""),$n=(t,...e)=>{const n=function(r,o,s=!1){let i,a;const l=typeof r=="function";return l?(i=r,a=Ft):(i=r.get,a=r.set),new pn(i,a,l||!a,s)}(()=>It(t,...e));return O(()=>n.effect.stop()),n},Vn=t=>{let e=null,n=null;return(r,...o)=>{const s=W(),i=x(e);if(!e){const a=(n||(n=t().then(l=>e=l))).then(l=>{k(i)||(i.value=l)});s.emit("throw",a)}return()=>i.value?h(i.value.default,r,...o):null}};var ee={__proto__:null,ErrorBoundary:An,Fragment:At,ReactiveList:jn,Portal:In,Style:Un,GlobalStyle:Hn,Suspense:zn,Scope:Fn,text:Bn,raw:It,rawRef:$n,lazy:Vn};const Yn=(t,e)=>{const n=x("");return F(()=>{const r=k(n);r&&URL.revokeObjectURL(r),n.value=URL.createObjectURL(new Blob([g(t)],{type:"text/plain",...e}))}),O(()=>URL.revokeObjectURL(n.value)),n},qn="modulepreload",Gn=function(t,e){return new URL(t,e).href},et={},Kn=function(e,n,r){if(!n||n.length===0)return e();const o=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=Gn(s,r),s in et)return;et[s]=!0;const i=s.endsWith(".css"),a=i?'[rel="stylesheet"]':"";if(!!r)for(let d=o.length-1;d>=0;d--){const p=o[d];if(p.href===s&&(!i||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const c=document.createElement("link");if(c.rel=i?"stylesheet":qn,i||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),i)return new Promise((d,p)=>{c.addEventListener("load",d),c.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())},Jn=()=>Kn(()=>import("https://unpkg.com/@monaco-editor/loader@1.3.3/lib/umd/monaco-loader.js"),[],import.meta.url).then(()=>window.monaco_loader).then(t=>t.init()),Xn=({value:t,onChange:e,isDark:n,onSave:r,...o})=>{let s,i,a;return F(()=>{const l=g(n);a!=null&&a.editor&&(l?a.editor.setTheme("vs-dark"):a.editor.setTheme("vs"))}),O(()=>{s==null||s.dispose()}),j(t)&&z(t,l=>{(i==null?void 0:i.getValue())!==l&&(i==null||i.setValue(l))}),()=>h("div",{...o,ref:async l=>{a=await Jn(),i=a.editor.createModel(k(t),"typescript",a.Uri.file("main.ts")),i.onDidChangeContent(()=>e(i.getValue())),a.languages.typescript.typescriptDefaults.setCompilerOptions({jsx:"react"}),a.languages.typescript.typescriptDefaults.setDiagnosticsOptions({noSemanticValidation:!0,noSyntaxValidation:!0}),s=a.editor.create(l,{automaticLayout:!0,wordWrap:!0,theme:k(n)?"vs-dark":"vs"}),s.setModel(i),r&&s.addCommand(a.KeyMod.CtrlCmd|a.KeyCode.KeyS,()=>{r(i.getValue())})}})};class Zn{constructor(){te(this,"idx",0);te(this,"demos",[]);te(this,"currentDemo",null)}registerDemo(e,n,r){const o={id:this.idx++,name:e,version:n,code:r};this.demos.push(o),this.currentDemo||(this.currentDemo=o)}selectDemo(e){const n=this.demos.find(r=>r.id===Number(e));if(!n)throw new Error(`Cannot find demo with name ${name}`);return this.currentDemo=n,n}}const Qn=`import { rh, ref, mount, unref, setupWatch, inject, provide } from "@rhjs/rh";

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
`,er=`import { rh, ref, mount, unref, computed } from "@rhjs/rh";

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
`,tr=`import {
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
`,nr=`import { Button, ensureFluentUILoaded } from "@rhjs/fluent-web-components";
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
`,K=new Zn;K.registerDemo("HelloWorld","0.1.1-dev.22",er);K.registerDemo("Counter","0.1.1-dev.22",Qn);K.registerDemo("TodoApp","0.1.1-dev.22",tr);K.registerDemo("Counter","0.0.34",nr);const tt=x(K.currentDemo),Pt=()=>({mgr:K,currentDemo:tt,selectDemo(t){tt.value=K.selectDemo(t)},demos:K.demos}),rr=()=>{const{selectDemo:t,currentDemo:e,demos:n}=Pt();return()=>h("div",null,h("select",{onChange:r=>t(r.target.value)},n.map(r=>h("option",{value:r.id},r.name," @",r.version))))},ze=({styleFn:t,isDark:e,...n},r,o)=>()=>h("div",{...n},h(ee.Style,{styleFn:()=>({height:"30px",display:"inline-flex",alignItems:"center",justifyContent:"center",paddingLeft:"12px",paddingRight:"12px",cursor:"pointer",userSelect:"none",marginLeft:"4px","&:hover":{backgroundColor:g(e)?"rgba(64,64,64,1)":"rgba(64,64,64,0.1)"},"&:active":{outline:"solid 1px",outlineColor:g(e)?"#fff":"rgba(64,64,64,1)"},...t==null?void 0:t()})}),o),or=({isDark:t})=>()=>h(ze,{onClick:()=>{j(t)&&(t.value=!k(t))},isDark:t},h("span",null,()=>g(t)?"🌘":"🌖"));function nt({isDark:t,href:e,target:n="_blank"},r,o){return()=>h(ze,{isDark:t,onClick:()=>{window.open(e,n)}},h("a",{href:e,target:n,style:"text-decoration: none; color: inherit;"},o))}const sr=({isDark:t})=>()=>h("div",null,h(ee.Style,{styleFn:()=>({paddingLeft:"12px",paddingRight:"12px",height:"100%",width:"calc(100% - 24px)",display:"grid",gridTemplateColumns:"minmax(0, 1fr) 12px minmax(0, 1fr)"})}),h("div",{style:"display: inline-flex; align-items: center;"},h("span",{style:"user-select: none;word-break: keep-all;white-space: nowrap;"},"🧩 ",h("b",null,"R"),h("small",null,"eactive"),h("b",null,"H"),h("small",null,"ydrate"),h("b",null,"JS")," PLAYGROUND"),h(or,{isDark:t}),h(rr,null)),h("div",null),h("div",{style:"display: inline-flex; align-items: center; justify-content: right;"},h(nt,{isDark:t,href:"https://zhzluke96.github.io/rhjs-demos/#demo",target:"_self"},"demos"),h(nt,{isDark:t,href:"https://github.com/zhzLuke96/rh.js"},"github"))),{Style:ir}=ee,ar=()=>document.querySelectorAll("iframe").forEach(t=>t.style.pointerEvents="none"),cr=()=>document.querySelectorAll("iframe").forEach(t=>t.style.pointerEvents="auto"),lr=({isHorizontal:t,onResize:e,ref:n})=>{const[r,o,s]=Rn(!1),i=()=>o(!0),a=()=>o(!1),l=f=>{e(f.clientX,f.clientY)},c=f=>{const u=f.touches[0];e(u.clientX,u.clientY)},d=x(null);z(s,f=>{f?(ar(),window.addEventListener("mousemove",l),window.addEventListener("mouseup",a),window.addEventListener("touchmove",c),window.addEventListener("touchend",a)):(cr(),window.removeEventListener("mousemove",l),window.removeEventListener("mouseup",a),window.removeEventListener("touchmove",c),window.removeEventListener("touchend",a))}),z(d,f=>{f&&(f.addEventListener("mousedown",i,{passive:!0}),f.addEventListener("touchstart",i,{passive:!0}))}),O(()=>{var f,u;(f=g(d))==null||f.removeEventListener("mousedown",i),(u=g(d))==null||u.removeEventListener("touchstart",i)});const p=Dn("isDark"),m=be(()=>g(p)?"rgba(255,255,255,0.3)":"rgba(0,0,0,0.3)");return()=>h("div",{ref:f=>{d.value=f,n&&(n.value=f)}},h(ir,{styleFn:()=>({backgroundColor:g(s)?g(m):"",width:t?"100%":"12px",height:t?"12px":"100%",zIndex:g(s)?"10":"auto",cursor:t?"row-resize":"col-resize",userSelect:"none",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"12px","&:hover":{backgroundColor:g(m)}})}),"⚪⚪⚪")},ur=()=>{const t=`
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
`.trim(),e=URL.createObjectURL(new Blob([t],{type:"text/html"}));return O(()=>URL.revokeObjectURL(e)),`${e}#?embedded=${encodeURIComponent(location.origin)}`},dr=(t,e,n="")=>`
<!doctype html>
<html${t?' class="dark"':""}>
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
    <script type="importmap">${e}<\/script>
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
`.trim();function hr(t,e){const n=fe(e),r=o=>{n.value=t(k(n),o)};return[Ue(n),r]}const pr=(t,e,n,r)=>{const o={sendToIframe(a){var l,c;(c=(l=k(t))==null?void 0:l.contentWindow)==null||c.postMessage(a,"*")},sendToDevtools(a){var l,c;(c=(l=k(e))==null?void 0:l.contentWindow)==null||c.postMessage(a,"*")}},s=()=>{const{codeInjected:a,codeURL:l}=g(n);if(!a){if(!l){setTimeout(s,3);return}requestAnimationFrame(()=>{o.sendToIframe({event:"CODE_UPDATE",value:l}),r({type:"CODE_INJECTED"})})}},i=a=>{var d,p;const[l,c]=Dt(t,e);!l||!c||((p=(d=a.data)==null?void 0:d.includes)!=null&&p.call(d,"Debugger.enable")&&(console.log("Debugger.enable"),r({type:"Debugger.enable"}),s()),a.source===l.contentWindow?c.contentWindow.postMessage(a.data,"*"):a.source===c.contentWindow&&l.contentWindow.postMessage({event:"DEV",data:a.data},"*"))};return window.addEventListener("message",i),O(()=>window.removeEventListener("message",i)),o},fr=(t,e)=>{const{importMap:n,isDark:r}=t,o=be(()=>{const s=dr(k(r),JSON.stringify({imports:g(n)}));return URL.createObjectURL(new Blob([s],{type:"text/html"}))});return z(o,(s,i)=>{i&&URL.revokeObjectURL(i),e({type:"HTML_CHANGED",iframeSrc:s||""})}),O(()=>URL.revokeObjectURL(k(o)||"")),{iframeSrc:o}},mr=t=>{const{isDark:e,code:n}=t,r=fe(null),o=fe(null),s=u=>{var v;return(v=u.contentDocument)==null?void 0:v.documentElement.classList.toggle("dark",k(e))},i=u=>{const v=k(r);v&&(v.src=u)},a=()=>{var u,v;(v=(u=k(r))==null?void 0:u.contentWindow)==null||v.location.reload()},l=()=>{var u,v;(v=(u=k(o))==null?void 0:u.contentWindow)==null||v.location.reload()};z(()=>g(e),u=>{const v=g(r);v&&s(v)});const[c,d]=hr((u,v)=>{switch(v.type){case"IFRAME_READY":s(v.iframe);let D=u.codeInjected;return{...u,codeInjected:D,iframeReady:!0};case"DEVTOOLS_IFRAME_READY":return{...u,devtoolsIframeReady:!0};case"DEV_LOADED":return{...u,devLoaded:!0};case"HTML_CHANGED":return i(v.iframeSrc),l(),{...u,iframeReady:!1,devtoolsIframeReady:!1,devLoaded:!1,codeInjected:!1,darkInjected:!1};case"HTML_RELOAD":return setTimeout(()=>{a(),l()}),{...u,iframeReady:!1,devtoolsIframeReady:!1,devLoaded:!1,codeInjected:!1,darkInjected:!1};case"CODE_UPDATE":return{...u,codeURL:v.codeURL};case"CODE_INJECTED":return{...u,codeInjected:!0}}return u},{iframeReady:!1,devtoolsIframeReady:!1,devLoaded:!1,codeInjected:!1,codeURL:k(n)}),{sendToDevtools:p,sendToIframe:m}=pr(r,o,c,d);z(()=>g(n),u=>{d({type:"CODE_UPDATE",codeURL:u}),c.value.iframeReady&&requestAnimationFrame(()=>{m({event:"CODE_UPDATE",value:u}),d({type:"CODE_INJECTED"})})});const{iframeSrc:f}=fr(t,d);return z(r,u=>{u==null||u.addEventListener("load",()=>d({type:"IFRAME_READY",iframe:u}))}),z(o,u=>{u==null||u.addEventListener("load",()=>d({type:"DEVTOOLS_IFRAME_READY",devIframe:u}))}),{iframeSrc:f,iframeRef:r,devtoolsIframeRef:o,previewState:c,dispatch:d,sendToDevtools:p,sendToIframe:m}},vr=t=>{const{importMap:e,code:n,devtools:r,isDark:o,...s}=t,i=x(null),{iframeSrc:a,iframeRef:l,devtoolsIframeRef:c,previewState:d,dispatch:p}=mr(t),m=ur(),f=be(()=>`width: 100%; height: 100%; ${g(r)?"display: block;":"display: none;"}`),u=x(.625),v=x(null),D=(b,C)=>{const[R,S]=Dt(i,v);if(!R||!S)return;let L,B;const ne=R.getBoundingClientRect();L=C-ne.top-S.offsetHeight/2,B=R.offsetHeight-S.offsetHeight;const re=L/B;u.value=re};return()=>h("div",{...s,ref:i},h(ee.Style,{styleFn:()=>{const b=g(u);return{display:"grid",height:"100%",width:"100%",gridTemplateRows:g(r)?`30px minmax(0, ${b}fr) 12px minmax(0, ${1-b}fr)`:"30px minmax(0, 1fr)"}}}),h("div",{style:"border-bottom: 1px solid;border-top: 1px solid;overflow: hidden;"},h(ze,{title:"reload page",isDark:o,onClick:()=>p({type:"HTML_RELOAD"})},"♻️relaod")),h("iframe",{ref:l,src:a,style:"width: 100%;height: 100%;",frameBorder:0,sandbox:"allow-popups-to-escape-sandbox allow-scripts allow-popups allow-forms allow-pointer-lock allow-top-navigation allow-modals allow-same-origin"}),h("div",null,h(lr,{ref:v,isHorizontal:!0,onResize:D})),h("iframe",{ref:c,style:f,src:m,frameBorder:"0"}))},gr=({isDark:t})=>()=>h(ee.GlobalStyle,{styleFn:()=>({fontFamily:"'Karla', system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",lineHeight:"1.5",fontWeight:"400",colorScheme:g(t)?"light dark":"dark",color:g(t)?"rgba(255, 255, 255, 0.87)":"#242424",backgroundColor:g(t)?"#333":"#fff",fontSynthesis:"none",textRendering:"optimizeLegibility","-webkitFontSmoothing":"antialiased","-moz-osxFontSmoothing":"grayscale","-webkitTextSizeAdjust":"100%",height:"100vh",width:"100vw",body:{margin:"0",minWidth:"100vw",minHeight:"100vh",width:"100%",height:"100%"},"#app":{width:"100%",height:"100%"}})});function yr(){return new Worker(""+new URL("complier.worker-026b4f92.js",import.meta.url).href)}class _r{constructor(){te(this,"registry",{})}registerWorker(e,n){this.registry[e]?console.warn(`Worker of type ${e} already registered.`):this.registry[e]=n}removeWorker(e){delete this.registry[e]}getWorker(e){const n=this.registry[e];if(n)return n;throw new Error(`No worker of type ${e} registered.`)}postMessage(e,n){this.getWorker(e).postMessage(n)}listenRecv(e,n){const r=this.getWorker(e);let o;const s=i=>{const{message_token:a}=i.data||{};if(a!==n)return;const l={...i.data};delete l.message_token,o(l),r.removeEventListener("message",s)};return r.addEventListener("message",s),{recv:new Promise((i,a)=>{o=i}),dispose:()=>r.removeEventListener("message",s)}}}class wr{constructor(){te(this,"registry",new _r);this.initialize()}async initialize(){this.registry.registerWorker("complier",new yr)}worker_caller(e,n){const r=Math.random().toString(36).slice(2),o={...n,message_token:r};return this.registry.postMessage(e,o),this.registry.listenRecv(e,r)}compileFile(e){return this.worker_caller("complier",{event:"BABEL",payload:{file:e,compile_options:{}}})}compileFiles(e){return this.worker_caller("complier",{event:"ROLLUP",payload:{files:e,compile_options:{}}})}}const rt=new wr;_.global_source.on("throw",console.error);const Er=()=>{let t=null;return O(()=>t==null?void 0:t.dispose()),{compileFile(e){return t==null||t.dispose(),t=rt.compileFile(e),t.recv},compileFiles(e){return t==null||t.dispose(),t=rt.compileFiles(e),t.recv}}},br='import("@rhjs/rh").then(({cs, ElementSource}) => window.dispose = () => (cs || ElementSource).global_source.emit("unmount"));',Sr=()=>{var l;const t=x(!0);Ln("isDark",t);const{currentDemo:e}=Pt(),n=be(()=>{var c;return{"@rhjs/rh":`https://unpkg.com/@rhjs/rh@${((c=e.value)==null?void 0:c.version)||"latest"}/dist/main.module.mjs`,"@rhjs/fluent-web-components":"https://unpkg.com/@rhjs/fluent-web-components@latest/dist/main.module.mjs"}}),r=x(""),o=Yn(r,{type:"text/javascript"}),s=x(((l=e.value)==null?void 0:l.code)||""),i=Er(),a=async()=>{const c=k(s);if(!c)return;const d=await i.compileFile({filename:"main.tsx",source:c});r.value=`${d.compiled}
${br}`};return Tn(a),z(e,c=>{c&&s.value!==c.code&&(s.value=c.code,a())}),()=>h("div",null,h(gr,{isDark:t}),h(ee.Style,{styleFn:()=>({position:"relative",display:"flex",flexFlow:"column",width:"100%",height:"100%",maxWidth:"100vw",maxHeight:"100vh",overflow:"hidden"})}),h("header",{style:"height: 30px; width: 100%;"},h(sr,{isDark:t})),h("div",{style:"flex: 1;"},h(ee.Style,{styleFn:()=>({position:"relative",display:"flex",flexFlow:"row",width:"100%",height:"100%"})}),h(Xn,{style:"flex: 1;",value:s,onChange:c=>s.value=c,onSave:a,isDark:t}),h(vr,{style:"flex: 1;",importMap:n,code:o,devtools:!0,isDark:t})))};Cn("#app",Sr);
