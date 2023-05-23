var Ut=Object.defineProperty;var Ht=(t,e,n)=>e in t?Ut(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ne=(t,e,n)=>(Ht(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();function zt(t,e){return e.forEach(function(n){n&&typeof n!="string"&&!Array.isArray(n)&&Object.keys(n).forEach(function(r){if(r!=="default"&&!(r in t)){var o=Object.getOwnPropertyDescriptor(n,r);Object.defineProperty(t,r,o.get?o:{enumerable:!0,get:function(){return n[r]}})}})}),t}function Vt(t,e){const n=Object.create(null),r=t.split(",");for(let o=0;o<r.length;o++)n[r[o]]=!0;return e?o=>!!n[o.toLowerCase()]:o=>!!n[o]}const Ft=()=>{},Wt=Object.assign,Bt=Object.prototype.hasOwnProperty,ge=(t,e)=>Bt.call(t,e),G=Array.isArray,pe=t=>at(t)==="[object Map]",je=t=>typeof t=="symbol",_e=t=>t!==null&&typeof t=="object",$t=Object.prototype.toString,at=t=>$t.call(t),Yt=t=>at(t).slice(8,-1),Me=t=>typeof t=="string"&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Pe=(t,e)=>!Object.is(t,e);let qt;function ct(t,e=qt){e&&e.active&&e.effects.push(t)}const Ue=t=>{const e=new Set(t);return e.w=0,e.n=0,e},lt=t=>(t.w&$)>0,ut=t=>(t.n&$)>0,Re=new WeakMap;let se=0,$=1;const xe=30;let P;const Z=Symbol(""),Le=Symbol("");class dt{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,ct(this,r)}run(){if(!this.active)return this.fn();let e=P,n=J;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=P,P=this,J=!0,$=1<<++se,se<=xe?(({deps:r})=>{if(r.length)for(let o=0;o<r.length;o++)r[o].w|=$})(this):Be(this),this.fn()}finally{se<=xe&&(r=>{const{deps:o}=r;if(o.length){let s=0;for(let i=0;i<o.length;i++){const a=o[i];lt(a)&&!ut(a)?a.delete(r):o[s++]=a,a.w&=~$,a.n&=~$}o.length=s}})(this),$=1<<--se,P=this.parent,J=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){P===this?this.deferStop=!0:this.active&&(Be(this),this.onStop&&this.onStop(),this.active=!1)}}function Be(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}function He(t,e){t.effect&&(t=t.effect.fn);const n=new dt(t);e&&(Wt(n,e),e.scope&&ct(n,e.scope)),e&&e.lazy||n.run();const r=n.run.bind(n);return r.effect=n,r}function Ne(t){t.effect.stop()}let J=!0;const ht=[];function ye(){ht.push(J),J=!1}function we(){const t=ht.pop();J=t===void 0||t}function A(t,e,n){if(J&&P){let r=Re.get(t);r||Re.set(t,r=new Map);let o=r.get(n);o||r.set(n,o=Ue()),pt(o)}}function pt(t,e){let n=!1;se<=xe?ut(t)||(t.n|=$,n=!lt(t)):n=!t.has(P),n&&(t.add(P),P.deps.push(t))}function Q(t,e,n,r,o,s){const i=Re.get(t);if(!i)return;let a=[];if(e==="clear")a=[...i.values()];else if(n==="length"&&G(t)){const l=Number(r);i.forEach((c,d)=>{(d==="length"||d>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(i.get(n)),e){case"add":G(t)?Me(n)&&a.push(i.get("length")):(a.push(i.get(Z)),pe(t)&&a.push(i.get(Le)));break;case"delete":G(t)||(a.push(i.get(Z)),pe(t)&&a.push(i.get(Le)));break;case"set":pe(t)&&a.push(i.get(Z))}if(a.length===1)a[0]&&Ie(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Ie(Ue(l))}}function Ie(t,e){const n=G(t)?t:[...t];for(const r of n)r.computed&&$e(r);for(const r of n)r.computed||$e(r)}function $e(t,e){(t!==P||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Gt=Vt("__proto__,__v_isRef,__isVue"),ft=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(je)),Jt=mt(),Kt=mt(!0),Ye=Qt();function Qt(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=w(this);for(let s=0,i=this.length;s<i;s++)A(r,0,s+"");const o=r[e](...n);return o===-1||o===!1?r[e](...n.map(w)):o}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ye();const r=w(this)[e].apply(this,n);return we(),r}}),t}function Xt(t){const e=w(this);return A(e,0,t),e.hasOwnProperty(t)}function mt(t=!1,e=!1){return function(n,r,o){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&o===(t?e?dn:_t:e?un:gt).get(n))return n;const s=G(n);if(!t){if(s&&ge(Ye,r))return Reflect.get(Ye,r,o);if(r==="hasOwnProperty")return Xt}const i=Reflect.get(n,r,o);return(je(r)?ft.has(r):Gt(r))?i:(t||A(n,0,r),e?i:R(i)?s&&Me(r)?i:i.value:_e(i)?t?Ve(i):yt(i):i)}}function Zt(t=!1){return function(e,n,r,o){let s=e[n];if(fe(s)&&R(s)&&!R(r))return!1;if(!t&&(Et(r)||fe(r)||(s=w(s),r=w(r)),!G(e)&&R(s)&&!R(r)))return s.value=r,!0;const i=G(e)&&Me(n)?Number(n)<e.length:ge(e,n),a=Reflect.set(e,n,r,o);return e===w(o)&&(i?Pe(r,s)&&Q(e,"set",n,r):Q(e,"add",n,r)),a}}const en={get:Jt,set:Zt(),deleteProperty:function(t,e){const n=ge(t,e),r=Reflect.deleteProperty(t,e);return r&&n&&Q(t,"delete",e,void 0),r},has:function(t,e){const n=Reflect.has(t,e);return je(e)&&ft.has(e)||A(t,0,e),n},ownKeys:function(t){return A(t,0,G(t)?"length":Z),Reflect.ownKeys(t)}},tn={get:Kt,set:(t,e)=>!0,deleteProperty:(t,e)=>!0},ze=t=>t,Ee=t=>Reflect.getPrototypeOf(t);function ce(t,e,n=!1,r=!1){const o=w(t=t.__v_raw),s=w(e);n||(e!==s&&A(o,0,e),A(o,0,s));const{has:i}=Ee(o),a=r?ze:n?Fe:ie;return i.call(o,e)?a(t.get(e)):i.call(o,s)?a(t.get(s)):void(t!==o&&t.get(e))}function le(t,e=!1){const n=this.__v_raw,r=w(n),o=w(t);return e||(t!==o&&A(r,0,t),A(r,0,o)),t===o?n.has(t):n.has(t)||n.has(o)}function ue(t,e=!1){return t=t.__v_raw,!e&&A(w(t),0,Z),Reflect.get(t,"size",t)}function qe(t){t=w(t);const e=w(this);return Ee(e).has.call(e,t)||(e.add(t),Q(e,"add",t,t)),this}function Ge(t,e){e=w(e);const n=w(this),{has:r,get:o}=Ee(n);let s=r.call(n,t);s||(t=w(t),s=r.call(n,t));const i=o.call(n,t);return n.set(t,e),s?Pe(e,i)&&Q(n,"set",t,e):Q(n,"add",t,e),this}function Je(t){const e=w(this),{has:n,get:r}=Ee(e);let o=n.call(e,t);o||(t=w(t),o=n.call(e,t)),r&&r.call(e,t);const s=e.delete(t);return o&&Q(e,"delete",t,void 0),s}function Ke(){const t=w(this),e=t.size!==0,n=t.clear();return e&&Q(t,"clear",void 0,void 0),n}function de(t,e){return function(n,r){const o=this,s=o.__v_raw,i=w(s),a=e?ze:t?Fe:ie;return!t&&A(i,0,Z),s.forEach((l,c)=>n.call(r,a(l),a(c),o))}}function he(t,e,n){return function(...r){const o=this.__v_raw,s=w(o),i=pe(s),a=t==="entries"||t===Symbol.iterator&&i,l=t==="keys"&&i,c=o[t](...r),d=n?ze:e?Fe:ie;return!e&&A(s,0,l?Le:Z),{next(){const{value:m,done:p}=c.next();return p?{value:m,done:p}:{value:a?[d(m[0]),d(m[1])]:d(m),done:p}},[Symbol.iterator](){return this}}}}function B(t){return function(...e){return t!=="delete"&&this}}function nn(){const t={get(o){return ce(this,o)},get size(){return ue(this)},has:le,add:qe,set:Ge,delete:Je,clear:Ke,forEach:de(!1,!1)},e={get(o){return ce(this,o,!1,!0)},get size(){return ue(this)},has:le,add:qe,set:Ge,delete:Je,clear:Ke,forEach:de(!1,!0)},n={get(o){return ce(this,o,!0)},get size(){return ue(this,!0)},has(o){return le.call(this,o,!0)},add:B("add"),set:B("set"),delete:B("delete"),clear:B("clear"),forEach:de(!0,!1)},r={get(o){return ce(this,o,!0,!0)},get size(){return ue(this,!0)},has(o){return le.call(this,o,!0)},add:B("add"),set:B("set"),delete:B("delete"),clear:B("clear"),forEach:de(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{t[o]=he(o,!1,!1),n[o]=he(o,!0,!1),e[o]=he(o,!1,!0),r[o]=he(o,!0,!0)}),[t,n,e,r]}const[rn,on,sn,an]=nn();function vt(t,e){const n=e?t?an:sn:t?on:rn;return(r,o,s)=>o==="__v_isReactive"?!t:o==="__v_isReadonly"?t:o==="__v_raw"?r:Reflect.get(ge(n,o)&&o in r?n:r,o,s)}const cn={get:vt(!1,!1)},ln={get:vt(!0,!1)},gt=new WeakMap,un=new WeakMap,_t=new WeakMap,dn=new WeakMap;function yt(t){return fe(t)?t:wt(t,!1,en,cn,gt)}function Ve(t){return wt(t,!0,tn,ln,_t)}function wt(t,e,n,r,o){if(!_e(t)||t.__v_raw&&(!e||!t.__v_isReactive))return t;const s=o.get(t);if(s)return s;const i=(a=t).__v_skip||!Object.isExtensible(a)?0:function(c){switch(c){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}(Yt(a));var a;if(i===0)return t;const l=new Proxy(t,i===2?r:n);return o.set(t,l),l}function fe(t){return!(!t||!t.__v_isReadonly)}function Et(t){return!(!t||!t.__v_isShallow)}function w(t){const e=t&&t.__v_raw;return e?w(e):t}const ie=t=>_e(t)?yt(t):t,Fe=t=>_e(t)?Ve(t):t;function St(t){J&&P&&pt((t=w(t)).dep||(t.dep=Ue()))}function bt(t,e){const n=(t=w(t)).dep;n&&Ie(n)}function R(t){return!(!t||t.__v_isRef!==!0)}function x(t){return kt(t,!1)}function me(t){return kt(t,!0)}function kt(t,e){return R(t)?t:new hn(t,e)}class hn{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:w(e),this._value=n?e:ie(e)}get value(){return St(this),this._value}set value(e){const n=this.__v_isShallow||Et(e)||fe(e);e=n?e:w(e),Pe(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:ie(e),bt(this))}}function _(t){return R(t)?t.value:t}var Tt;class pn{constructor(e,n,r,o){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Tt]=!1,this._dirty=!0,this.effect=new dt(e,()=>{this._dirty||(this._dirty=!0,bt(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=r}get value(){const e=w(this);return St(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Tt="__v_isReadonly";function ve(){return ve=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ve.apply(this,arguments)}function Ct(t,e){if(t==null)return{};var n,r,o={},s=Object.keys(t);for(r=0;r<s.length;r++)e.indexOf(n=s[r])>=0||(o[n]=t[n]);return o}var fn=0;function Se(t){return"__private_"+fn+++"_"+t}function S(t,e){if(!Object.prototype.hasOwnProperty.call(t,e))throw new TypeError("attempted to use private field on non-instance");return t}class mn{constructor(e){this.data=void 0,this.next=void 0,this.data=e,this.next=null}}class vn{constructor(){this.head=void 0,this.tail=void 0,this.length=void 0,this.head=null,this.tail=null,this.length=0}enqueue(e){let n=new mn(e);this.isEmpty()?(this.head=n,this.tail=n):(this.tail&&(this.tail.next=n),this.tail=n),this.length++}dequeue(){if(this.isEmpty())return null;{var e,n;let r=((e=this.head)==null?void 0:e.data)||null;return this.head=((n=this.head)==null?void 0:n.next)||null,this.isEmpty()&&(this.tail=null),this.length--,r}}isEmpty(){return this.length===0}}const be=new class{constructor(){this.frameDeadline=void 0,this.taskQueue=void 0,this.channel=void 0,this.messagePort=void 0,this.triggerPort=void 0,this.rafTriggered=void 0,this.activeFrameTime=33.33,this.frameDeadline=performance.now()+this.activeFrameTime,this.taskQueue=new vn,this.channel=new MessageChannel,this.messagePort=this.channel.port1,this.triggerPort=this.channel.port2,this.rafTriggered=!1,this.messagePort.onmessage=()=>{this.handleTask()}}timeRemaining(){return Math.max(0,this.frameDeadline-performance.now())}execTask(t){t({timeRemaining:()=>this.timeRemaining()})}handleTask(){let t=this.taskQueue.dequeue();for(;t;){if(this.execTask(t),this.timeRemaining()<=0){this.trigger();break}t=this.taskQueue.dequeue()}}trigger(){this.rafTriggered||this.taskQueue.length!==0&&(this.rafTriggered=!0,requestAnimationFrame(t=>{this.frameDeadline=t+this.activeFrameTime,this.rafTriggered=!1,t<this.frameDeadline&&this.triggerPort.postMessage(null)}))}runTask(t){!this.rafTriggered&&performance.now()<this.frameDeadline?this.execTask(t):(this.taskQueue.enqueue(t),this.trigger())}};var C=Se("eventMap"),X=Se("addEventObject"),H=Se("getEventObjects"),M=Se("removeEventObjects");class gn{constructor(){Object.defineProperty(this,M,{value:wn}),Object.defineProperty(this,H,{value:yn}),Object.defineProperty(this,X,{value:_n}),Object.defineProperty(this,C,{writable:!0,value:new Map})}addListener(e,n,r){return S(this,X)[X](e,n,r,!1)}emit(e,...n){const r=S(this,H)[H](e);return!!r.length&&(r.forEach(({context:o,listener:s,once:i})=>{i&&S(this,M)[M](e,s,void 0,!0),s.apply(o,n)}),!0)}idleEmit(e,...n){let r=S(this,H)[H](e);return!!r.length&&(r.forEach(({context:o,listener:s,once:i})=>{be.runTask(()=>{i&&S(this,M)[M](e,s,void 0,!0),s.apply(o,n)})}),!0)}eventNames(){return[...S(this,C)[C].keys()]}listenerCount(e){return S(this,H)[H](e).length}listeners(e){return S(this,H)[H](e).map(({listener:n})=>n)}off(e,n,r,o=!1){return S(this,M)[M](e,n,r,o)}on(e,n,r){return S(this,X)[X](e,n,r,!1)}once(e,n,r){return S(this,X)[X](e,n,r,!0)}removeAllListeners(e){return S(this,M)[M](e,void 0,void 0,!1)}removeListener(e,n,r,o=!1){return S(this,M)[M](e,n,r,o)}}function _n(t,e,n=this,r){if(typeof e!="function")throw new TypeError("The listener must be a function");let o=S(this,C)[C].get(t);return o||(o=[],S(this,C)[C].set(t,o)),o.push({context:n,listener:e,once:r}),this}function yn(t){var e;return(e=S(this,C)[C].get(t))!=null?e:[]}function wn(t,e,n,r){if(!t)return S(this,C)[C].clear(),this;const o=S(this,C)[C].get(t),s=o==null?void 0:o.filter(i=>e&&(i.listener!==e||n&&i.context!==n||r&&!i.once));return s!=null&&s.length?S(this,C)[C].set(t,s):S(this,C)[C].delete(t),this}const v={ES_CREATE_CB:Symbol("ES_CREATE_CB"),IS_ANCHOR:Symbol("IS_ANCHOR"),NONE:Symbol("NONE"),SELF_ES:Symbol("SELF_ES"),CACHE_NODES:Symbol("CACHE_NODES"),IS_COMPONENT:Symbol("IS_COMPONENT"),STYLESHEET_SCOPED:Symbol("STYLESHEET_SCOPED"),STYLESHEET_ROOT:Symbol("STYLESHEET_ROOT"),DISPOSE:Symbol("DISPOSE"),DIRECTIVES:Symbol("DIRECTIVES")};class y extends gn{static peek(){return y.source_stack.peek()||y.global_source}constructor(e,n){if(super(),this.host=void 0,this.lazy_unmount=void 0,this.__context={},this.__parent_source=y.source_stack.peek(),this.__container_source=this,this.states={mounted:!1,unmounted:!1},this.__directive_callbacks={},this.host=e,this.lazy_unmount=n,!this.__parent_source)return;this.setupContainerSource(),this.on("throw",s=>{var i;return(i=this.__parent_source)==null?void 0:i.emit("throw",s)}),this.once("mount",()=>this.states.mounted=!0),this.once("unmount",()=>this.states.unmounted=!0);const r=()=>{this.idleEmit("unmount"),this.dispose()};var o;n?((this.__container_source===this?(o=this.__container_source.__parent_source)==null?void 0:o.__container_source:this.__container_source)||this.__parent_source).once("unmount",r):(this.__parent_source.once("unmount",r),this.__parent_source.once("update_after",()=>{this.__parent_source.once("update_after",()=>{this.emit("unmount")})}))}onMount(e){return this.states.mounted?e():this.once("mount",e),this}onUnmount(e){return this.states.unmounted?e():this.once("unmount",e),this}setupContainerSource(){for(;this.__container_source&&this.__container_source!==y.global_source;){var e;if((e=this.__container_source.host)!=null&&e[v.IS_COMPONENT])break;this.__container_source=this.__container_source.__parent_source}}dispose(){this.removeAllListeners(),this.__context={},this.__directive_callbacks={}}effect(e,n){const r=He(e,n);return n!=null&&n.lazy||r.effect.deps.length!==0?this.once("unmount",()=>Ne(r)):Ne(r),r}throw(e,n){const r=()=>this.emit("throw",e);n!=null&&n.sync?r():be.runTask(r)}getContextValue(e,n={}){let r=n!=null&&n.hit_container?this.__container_source:this;for(;r;){const o=r.__context;if(e in o)return o[e];r=r.__parent_source}if(n!=null&&n.throw_error)throw new Error(`Cannot find context for key '${String(e)}'`);if("default_value"in n)return this.setContextValue(e,n.default_value,{hit_container:n.hit_container}),n.default_value}setContextValue(e,n,r){const o=r!=null&&r.hit_container?this.__container_source:this;if(!o)throw new Error("Cannot find context");o.__context[e]=n}matchDirective(e){let n=this;for(;n;){const r=n.__context;if(v.DIRECTIVES in r&&r[v.DIRECTIVES]&&typeof r[v.DIRECTIVES]=="object"&&r[v.DIRECTIVES][e])return r[v.DIRECTIVES][e];n=n.__parent_source}}enableDirective(e){var n,r;(n=this.__context)[r=v.DIRECTIVES]||(n[r]={}),this.__context[v.DIRECTIVES][e.key]=e}bindDirectiveFromProps(e){const n=Object.keys(e);for(const r of n){const o=this.matchDirective(r);if(!o)continue;const s=e[r];Object.entries(o.hooks).forEach(([i,a])=>{const l=this.__directive_callbacks[i];l&&this.off(i,l);const c=()=>{var m,p;return((m=this.host)==null?void 0:m.elem)||((p=this.host)==null?void 0:p.currentView)},d=this.__directive_callbacks[i]=()=>a(s,c(),this,this.host);this.on(i,d)})}}}y.source_stack=new class{constructor(){this.items=void 0,this.items=[]}toArray(){return[...this.items]}push(t){this.items.push(t)}pop(){return this.items.pop()}peek(){return this.items[this.items.length-1]}size(){return this.items.length}isEmpty(){return this.items.length===0}},y.global_source=new y,y.source_stack.push(y.global_source);const q=(t,e,n)=>{const r=o=>{const s=o.relatedNode;s&&s===t.parentNode&&e(s,t)};return t.addEventListener(n,r),()=>t.removeEventListener(n,r)},Y=t=>{if(!t)return;const e=t.parentNode;(e&&document.contains(e)||e&&t.getRootNode()!==t)&&(n=>{let r;var o;t instanceof HTMLElement&&(r=(o=t.hidden)!=null&&o,t.hidden=!0),be.runTask(()=>{n.contains(t)&&n.removeChild(t),t instanceof HTMLElement&&r!==void 0&&(t.hidden=r)})})(e)};class I{constructor(){this.source=void 0,this.viewAnchor=(()=>{const e=document.createTextNode("");return e[v.IS_ANCHOR]=!0,e})(),this.currentView=this.viewAnchor,this.renderEffectRunner=void 0,this.rawTarget=void 0,this.dispose_onDomInserted=void 0,this._initialized=!1}_initialize(){this._initialized||(this._initialized=!0,this.initialize(),this.viewAnchor[v.DISPOSE]=()=>this.source.emit("unmount"))}initialize(){this.source||(this.source=new y(this)),this.source.once("unmount",()=>this.dispose())}ensureEffectRunner(){return this._initialize(),this.renderEffectRunner||(this.renderEffectRunner=He(this.update.bind(this),{lazy:!1}),this.dispose_onDomInserted=q(this.currentView,(e,n)=>{var r,o,s;(r=this.dispose_onDomInserted)==null||r.call(this),this.source.emit("mount"),this.viewAnchor!==n&&e.insertBefore(this.viewAnchor,n),n!==this.currentView&&(e.insertBefore(this.currentView,n),(s=n)&&s[v.IS_ANCHOR]||(o=n.parentElement)==null||o.removeChild(n))},"DOMNodeInserted")),this.renderEffectRunner}render(){return null}_update(){const e=this.currentView,n=this.render()||this.viewAnchor,r=e==null?void 0:e.parentElement;r&&r.replaceChild(n,e),this.currentView=n,this.currentView[v.DISPOSE]=()=>this.source.emit("unmount")}update(){var e,n;if(this.source.states.unmounted||(e=this.source.__parent_source)!=null&&e.states.unmounted||(n=this.source.__container_source)!=null&&n.states.unmounted)this.source.emit("unmount");else{this.source.emit("update_before");try{y.source_stack.push(this.source),this.source.emit("update"),this._update()}catch(r){this.source.throw(r),console.error(r)}finally{y.source_stack.pop(),this.source.emit("update_after")}}}dispose(){var e,n;(e=this.renderEffectRunner)==null||e.effect.stop(),Y(this.currentView),Y(this.viewAnchor),this.currentView[v.DISPOSE]=void 0,this.viewAnchor[v.DISPOSE]=void 0,(n=this.dispose_onDomInserted)==null||n.call(this)}static fromRender(e){const n=new I;return n.render=()=>I.warpView(e()),n.rawTarget=e,n}static fromRef(e){const n=new I;return n.render=()=>I.warpView(_(e)),n.rawTarget=e,n}static warpView(e){return e instanceof Node||e===null?e:document.createTextNode(`${e}`)}static warp(e){if(typeof e!="function"&&!R(e))return I.warpView(e);let n;if(typeof e=="function")n=I.fromRender(e);else{if(!R(e))throw new Error("Unknown view type.");n=I.fromRef(e)}return n.ensureEffectRunner(),n.currentView}}let Ot;Ot=v.IS_COMPONENT;class Dt extends I{get[Ot](){return!0}constructor(e,n,r){super(),this._define=void 0,this.props=void 0,this.children=void 0,this.state=void 0,this._define=e,this.props=n,this.children=r}initialize(){this.source=new y(this,!!this.props.__node_cached),this.source.once("unmount",()=>this.dispose()),this.source.bindDirectiveFromProps(this.props),this.installSource(),this.initializeSetup()}initializeSetup(){const{props:e,children:n}=this;ye(),y.source_stack.push(this.source),this.source.emit("setup_before"),this.state=this._define.setup(e,n),this.source.emit("setup_after"),y.source_stack.pop(),we()}render(){const e=this._define.render(this.props,this.state,this.children);return I.warp(e)}installSource(){var e,n;(e=(n=this._define)[v.ES_CREATE_CB])==null||e.call(n,this.source)}}class En extends Dt{constructor(e,n,r){const o={setup:(s,i)=>{const a={};return o.render=e(s,a,i),a},render:()=>{}};o[v.ES_CREATE_CB]=e[v.ES_CREATE_CB],super(o,n,r),this._function_define=void 0,this._function_define=e}}class ee{static createReactiveDOM(e,n,r){if(e instanceof Element){const s=ee.instances.get(e);if(s)return s.update(n,r),s}const o=new ee(e,n,r);return ee.instances.set(o.elem,o),o}constructor(e,n,r){this.tagNameOrDome=void 0,this.props=void 0,this.children=void 0,this.elem=void 0,this.source=new y(this),this.listeners={},this.dispose_onDomInserted=void 0,this.tagNameOrDome=e,this.props=n,this.children=r,this.source.once("unmount",()=>this.dispose()),this.initializeNode()}dispose(){var e;Y(this.elem),this.elem[v.DISPOSE]=void 0,(e=this.dispose_onDomInserted)==null||e.call(this)}initializeNode(){return this.elem||(this.elem=this.tagNameOrDome instanceof Element?this.tagNameOrDome:document.createElement(this.tagNameOrDome),this.update(this.props,this.children),this.dispose_onDomInserted=q(this.elem,(e,n)=>{var r;(r=this.dispose_onDomInserted)==null||r.call(this),this.source.emit("mount")},"DOMNodeInserted")),this.elem}update(e,n){this.props=e,this.children=n,this.source.bindDirectiveFromProps(e),this.source.emit("update_before"),this.source.emit("update");try{ye(),this.hydrateChildren(),we();for(const[r,o]of Object.entries(this.props))this.hydrateAttribute(r,o);this.elem[v.DISPOSE]=()=>this.source.emit("unmount")}catch(r){this.source.throw(r),console.error(r)}finally{this.source.emit("update_after")}}isValidAttributeName(e){return/^[a-zA-Z][\w-]*$/.test(e)}hydrateAttribute(e,n){if(e.startsWith("_")||e.startsWith("$")||!this.isValidAttributeName(e))return;switch(e){case"ref":return void(typeof n=="function"?n(this.elem):R(n)&&(n.value=this.elem));case"effect":return void(typeof n=="function"&&this.source.effect(()=>n(this.elem),{lazy:!1}))}if(e.startsWith("on")&&typeof n=="function"){const o=e.slice(2).toLowerCase(),s=this.listeners[e];return s&&this.elem.removeEventListener(o,s),this.listeners[e]=n,void this.elem.addEventListener(o,n)}const r=o=>{if(e!=="value")if(e!=="defaultValue")typeof o!="boolean"?this.elem.setAttribute(e,o):o?this.elem.setAttribute(e,""):this.elem.removeAttribute(e);else{if(this.elem.value)return;this.elem.value=o}else this.elem.value=o};R(n)?this.source.effect(()=>{const o=_(n);r(o)},{lazy:!1}):r(n)}hydrateChildren(){const{children:e}=this;e.filter(n=>n!=null).map(n=>I.warp(n)).filter(Boolean).forEach(n=>this.elem.appendChild(n))}}ee.instances=new WeakMap,ee.directives=new Map;const Qe=(t,e)=>{var n,r;if(!t)return;const o=y.peek(),{__container_source:s}=o;s&&((n=s.__context)[r=v.CACHE_NODES]||(n[r]={}),s.__context[v.CACHE_NODES][t]=e)},Rt=(t,e={},n=[])=>{const{key:r}=e;delete e.key,r&&(e.__node_cached=!0);const o=(s=>{var i,a;if(!s)return;const l=y.peek(),{__container_source:c}=l;return c?((i=c.__context)[a=v.CACHE_NODES]||(i[a]={}),c.__context[v.CACHE_NODES][s]):void 0})(r);if(o)return o;if(typeof t=="function"){const s=new En(t,e,n);return Qe(r,s),s}if(typeof t=="object"&&typeof t.render=="function"&&typeof t.setup=="function"){const s=new Dt(t,e,n);return Qe(r,s),s}throw new Error(`Valid define type [${typeof t}] is not supported for reactiveHydrate.`)};function Sn(t,e,...n){var r;if(e||(e={}),n=((r=n)==null?void 0:r.flat())||n,typeof t=="string"||t instanceof Element)return ee.createReactiveDOM(t,e,n).elem;const o=Rt(t,e,n);return o.ensureEffectRunner(),o.currentView}const h=Sn;function V(t){return t?t(y.peek()):y.peek()}const bn=(t,e,n=!1)=>V(r=>r[n?"once":"on"](t,e)),kn=t=>V(e=>e.onMount(t)),O=t=>V(e=>e.onUnmount(t)),Tn=t=>bn("throw",t),Cn=(t,e,n)=>{const r=t instanceof Element?t:document.querySelector(t);if(!r)throw new Error(`Could not find container: ${t}`);if(e instanceof Element)return r.appendChild(e),null;const o=Rt(e,n);return o.ensureEffectRunner(),r.appendChild(o.currentView),o},F=(t,e)=>{let n=null;const r=He(()=>{n==null||n(),t(s=>n=s)},ve({lazy:!1},e)),o=()=>{n==null||n(),Ne(r),n=null};return O(o),[r,o]},z=(t,e,n)=>{let r;return F(()=>{const o=typeof t=="function"?t(r):_(t);Te(()=>e(o,r)),r=o},n)},ke=(t,e)=>{const n=x();return F(()=>{const r=k(n),o=t(r);var s,i;s=r,i=o,Object.is(s,i)||s===i||(n.value=o)},e),n},Te=(t,...e)=>{ye();const n=t(...e);return we(),n},k=t=>Te(()=>_(t));function On(t){const e=R(t)?t:x(t);return[()=>_(e),n=>{if(typeof n=="function"){const r=k(e);e.value=n(r)}else e.value=n},e]}const Dn=(...t)=>t.map(e=>_(e)),xt=Dn;function Rn(t,e=v.NONE){const n=y.peek();if(!n)throw new Error("No element source found");return n.getContextValue(t,{default_value:e})}function xn(t,e){const n=y.peek();if(n==null||!n.__container_source)throw new Error("inject must be called inside Component");n.setContextValue(t,e,{hit_container:!0})}function Lt(t,e){return((n,r)=>{if(!r)return;const o=n[v.ES_CREATE_CB];n[v.ES_CREATE_CB]=s=>{o==null||o(s),r(s)}})(t,e),t}const Ln=t=>new Proxy({},{get(e,n,r){let o=t;for(;o!==void 0;){const s=o.__context;if(n in s)return s[n];o=o.__parent_source}},set:(e,n,r,o)=>(t.__context[n]=r,!0)}),Nt=t=>{const e=V();if(!e.__container_source)throw new Error("Container source not found, must be inside a container component to use element source");const n=Ln(e.__container_source);return t==null||t(n),n},Nn=Lt({setup({fallbackRender:t,onError:e,render:n}){const r=y.peek();let o=x(null);r.on("throw",i=>{i instanceof Error&&(e==null||e(i),o.value=i)});const s=x(1);return{catchError:o,rerenderRef:s,fallbackRender:t,childrenRender:n}},render(t,{fallbackRender:e,rerenderRef:n,catchError:r,childrenRender:o}){const s=()=>{n.value=Date.now(),r.value=null};return r.value?Te(()=>e(r.value,s)):o()}}),It=Lt({setup(t,[e,...n]){const r={anchor:document.createTextNode(""),children:[],parentNode:null},o=V(),s=(i=typeof e=="function"?e:()=>[e,...n],()=>{return(p=i(),Array.isArray(p)?p:[p]).flat(1).map(f=>I.warp(f)).filter(Boolean);var p});var i;const a=p=>{const f=p[v.DISPOSE];f==null||f()},[l,c]=F(()=>{y.source_stack.push(o),(()=>{const p=r.children,f=s(),{parentNode:u,anchor:g}=r;if(!u)return;const j=Math.max(f.length,p.length);for(let T=0;T<j;T++){const D=f[T],E=p[T];E!==D&&(!D&&E?(E.remove(),a(E)):!E&&D?u.insertBefore(D,g):E&&D&&(u.replaceChild(D,E),a(E)))}r.children=f})(),y.source_stack.pop()},{lazy:!0}),d=q(r.anchor,p=>{r.parentNode=p,be.runTask(()=>{l()})},"DOMNodeInserted"),m=q(r.anchor,p=>{r.children.forEach(Y),r.parentNode=null},"DOMNodeRemoved");return O(()=>{d(),m(),c(),Y(r.anchor),r.children.forEach(Y)}),V(p=>{var f;(f=p.__parent_source)==null||f.once("update_before",()=>{var u;r.children.forEach(Y),(u=p.__parent_source)==null||u.once("update_after",()=>{Y(r.anchor)})})}),r},render:(t,e)=>e.anchor});var Ae=function t(e,n){if(e===n)return!0;if(e&&n&&typeof e=="object"&&typeof n=="object"){if(e.constructor!==n.constructor)return!1;var r,o,s;if(Array.isArray(e)){if((r=e.length)!=n.length)return!1;for(o=r;o--!=0;)if(!t(e[o],n[o]))return!1;return!0}if(e.constructor===RegExp)return e.source===n.source&&e.flags===n.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===n.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===n.toString();if((r=(s=Object.keys(e)).length)!==Object.keys(n).length)return!1;for(o=r;o--!=0;)if(!Object.prototype.hasOwnProperty.call(n,s[o]))return!1;for(o=r;o--!=0;){var i=s[o];if(!t(e[i],n[i]))return!1}return!0}return e!=e&&n!=n},Xe=zt({__proto__:null,default:Ae},[Ae]);function At(t){if(function(e){return e&&typeof e=="object"&&e.constructor===Object}(t)){const e={};return Object.keys(t).forEach(n=>{e[n]=At(t[n])}),e}return t}const Ze=t=>At(w(t)),In=({items:t,render:e,needUpdate:n=(r,o)=>!((Xe==null?void 0:Ae)||Xe)(r,o)})=>{const r=me([]),o=V(),[s]=F(()=>{const i=typeof t=="function"?t():_(t);y.source_stack.push(o);try{((a,l)=>{const c=k(r);for(let m=0;m<Math.max(c.length,a.length);m++){const p=c[m],f=a[m];if(p!==void 0&&f!==void 0){if(!p.node||Te(()=>n(f,p.data))){const u=e(f,m,a,l,p.node);p.node=u,p.data=Ze(f)}}else if(p===void 0){const u=e(f,m,a,l);c.push({data:Ze(f),node:u})}else f===void 0&&(p.del=!0)}const d=c.filter(m=>m.del!==!0);r.value=d})(i,()=>s==null?void 0:s.effect.run())}finally{y.source_stack.pop()}});return()=>h(It,{},()=>r.value.filter(i=>!i.del).map(i=>i.node))},An=["container"],jn=(t,e,n)=>{let{container:r}=t,o=Ct(t,An);const s=r||document.createElement("div");return document.body.appendChild(s),h(s,o,...n),O(()=>{var i;(i=s.parentElement)==null||i.removeChild(s)}),()=>null};function Mn(t,e,n=""){const r=e===":root",o=r?"":e,s=t.split(",").map(l=>l.trim()).filter(Boolean);let i=r?[""]:o.split(",").map(l=>l.trim()).filter(Boolean);var a;return(a=i,s.flatMap(l=>a.map(c=>[l,c]))).map(([l,c])=>l.startsWith("&")?l.replace(/&/g,c):`${c} ${l}`).map(l=>`${l.replace(n||"","")}${n||""}`.trim()).join(",")}const et=t=>t.nodeType===Node.DOCUMENT_NODE||t.nodeType===Node.DOCUMENT_FRAGMENT_NODE,tt=(t,e,n)=>{const{updateCSSText:r,installSheet:o,uninstallSheet:s}=n;let i=!1;return{parseStyle:a=>{const l=function(c,d,{beautify:m=!1,scopedSelector:p=""}){const f=m?`
`:"",u=[{nodeSelector:d+p,cssObject:c}],g=[];for(;u.length>0;){const{nodeSelector:T,cssObject:D}=u.pop(),E={selector:T,cssText:""};for(const b in D){const L=D[b];if(typeof L=="object"){const W=Mn(b,T,p);u.push({nodeSelector:W,cssObject:L})}else{if(typeof L=="string"&&!L.trim()||L==null)continue;E.cssText+=`${j=b,j.replace(/[A-Z]/g,W=>`-${W.toLowerCase()}`)}: ${D[b]};${f}`}}E.cssText.trim()&&g.push(E)}var j;return g.map(T=>`${T.selector}{${T.cssText}}`).join(`
`).trim()}(t(),a,{scopedSelector:e});r(l)},applySheet:a=>{i||(i=!0,o(a))},removeSheet:a=>{i&&(i=!1,s(a))}}},nt=()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(36),jt=t=>{const{scopedId:e,className:n}=t,r=!!e,o=document.createTextNode("");let s;(({props:c,scopedId:d,rootNodeSelector:m,styleOrFunc:p},f)=>{const u=(b=>{if(!b)throw new Error("styleOrFn is required.");return typeof b=="function"?b:()=>b})(c.styleFn||c.style||p),g=Nt(),{applySheet:j,removeSheet:T,parseStyle:D}=((b,L,W)=>W?((re,oe)=>{const U=new CSSStyleSheet,{parseStyle:Ce,applySheet:Oe,removeSheet:De}=tt(re,oe,{updateCSSText(N){U.replaceSync(N)},installSheet(N=document){et(N)&&(N.adoptedStyleSheets=[...N.adoptedStyleSheets,U])},uninstallSheet(N=document){et(N)&&(N.adoptedStyleSheets=[...N.adoptedStyleSheets].filter(ae=>ae!==U))}});return{sheet:U,parseStyle:Ce,applySheet:Oe,removeSheet:De}})(b,L):((re,oe)=>{const U=document.createElement("style"),{parseStyle:Ce,applySheet:Oe,removeSheet:De}=tt(re,oe,{updateCSSText(N){U.innerHTML=N},installSheet(N){N.appendChild(U)},uninstallSheet(N){var ae;(ae=U.parentNode)==null||ae.removeChild(U)}});return{styleDOM:U,parseStyle:Ce,applySheet:Oe,removeSheet:De}})(b,L))(()=>u(g),d?`[data-s-${d}]`:void 0,c.adopted),{[v.STYLESHEET_ROOT]:E}=g;F(()=>{let b=m;var L;c.adopted&&E&&E instanceof Node&&((L=E).nodeType===Node.DOCUMENT_NODE||L.nodeType===Node.DOCUMENT_FRAGMENT_NODE)&&(b=":root"),D(b)}),c.adopted||(E==null?void 0:E.nodeType)===Node.DOCUMENT_FRAGMENT_NODE?(j(E),O(()=>T(E))):(O(q(f,j,"DOMNodeInserted")),O(q(f,T,"DOMNodeRemoved")))})(t,o);const i=`s-${e}`.replace(/-([a-z])/g,function(c,d){return d.toUpperCase()}),a=c=>{if("dataset"in c&&typeof c.dataset=="object"){if(c[v.STYLESHEET_SCOPED]!==void 0&&c[v.STYLESHEET_SCOPED]!==i)return;c.dataset[i]="",c[v.STYLESHEET_SCOPED]=i}},l=c=>{if("dataset"in c&&typeof c.dataset=="object"){if(c[v.STYLESHEET_SCOPED]!==void 0&&c[v.STYLESHEET_SCOPED]!==i)return;delete c.dataset[i],delete c[v.STYLESHEET_SCOPED]}};return O(q(o,c=>{r&&(a(c),(d=>{s=new MutationObserver(m=>{for(const p of m){const{addedNodes:f,removedNodes:u}=p;f.forEach(g=>a(g)),u.forEach(g=>l(g))}}),s.observe(d,{childList:!0,subtree:!0})})(c)),n&&c instanceof Element&&c.classList.add(n)},"DOMNodeInserted")),O(q(o,c=>{var d;l(c),(d=s)==null||d.disconnect(),n&&c instanceof Element&&c.classList.remove(n)},"DOMNodeRemoved")),{anchor:o}},Pn=(t,e,[n])=>{const r=t.scoped?nt():void 0,o=`s-${nt()}`,{anchor:s}=jt({props:t,styleOrFunc:n,rootNodeSelector:`.${o}`,className:o,scopedId:r});return()=>s},Un=(t,e,[n])=>{const{anchor:r}=jt({props:ve({},t,{scoped:!1}),styleOrFunc:n,rootNodeSelector:":root"});return()=>r},Hn=({component:t,render:e,fallback:n,error:r})=>{const o=x("fulfilled");Tn(async a=>{var l;!(l=a)||typeof l!="object"&&typeof l!="function"||typeof l.then!="function"||(o.value="pending",a.then(()=>o.value="fulfilled"),a.catch(()=>o.value="rejected"))});const s=t?h(t):e?h(()=>()=>I.warpView(e())):null,i=h(()=>()=>{switch(o.value){case"pending":return n();case"fulfilled":return s;case"rejected":return(r||n)()}});return()=>i},zn=["tagName","render"],Vn=(t,e,n)=>{let{tagName:r="div",render:o}=t,s=Ct(t,zn);const i=h(r,s,...n),a=i.attachShadow({mode:"open"});return(l=>{const c=V(),d=Nt();let m;const p=()=>{m=d[v.STYLESHEET_ROOT],d[v.STYLESHEET_ROOT]=l};c.on("update_before",p),c.on("update_after",()=>{d[v.STYLESHEET_ROOT]=m,m=void 0}),p()})(a),()=>{let l=o();return Array.isArray(l)||(l=[l]),l.map(c=>I.warp(c)).filter(Boolean).forEach(c=>a.appendChild(c)),i}},Fn=(t,...e)=>{const n=[];for(let r=0;r<t.length;r++){n.push(document.createTextNode(t[r]));const o=e[r],s=document.createTextNode("");typeof o=="function"?F(()=>s.textContent=o()):R(o)&&F(()=>s.textContent=String(o.value)),n.push(s)}return n},Mt=(t,...e)=>t.reduce((n,r,o)=>{var s;return n+=r,o<e.length&&(n+=_(typeof(s=e[o])=="function"?s():s)),n},""),Wn=(t,...e)=>{const n=function(r,o,s=!1){let i,a;const l=typeof r=="function";return l?(i=r,a=Ft):(i=r.get,a=r.set),new pn(i,a,l||!a,s)}(()=>Mt(t,...e));return O(()=>n.effect.stop()),n},Bn=t=>{let e=null,n=null;return(r,...o)=>{const s=V(),i=x(e);if(!e){const a=(n||(n=t().then(l=>e=l))).then(l=>{k(i)||(i.value=l)});s.emit("throw",a)}return()=>i.value?h(i.value.default,r,...o):null}};var te={__proto__:null,ErrorBoundary:Nn,Fragment:It,ReactiveList:In,Portal:jn,Style:Pn,GlobalStyle:Un,Suspense:Hn,Scope:Vn,text:Fn,raw:Mt,rawRef:Wn,lazy:Bn};const $n=(t,e)=>{const n=x("");return F(()=>{const r=k(n);r&&URL.revokeObjectURL(r),n.value=URL.createObjectURL(new Blob([_(t)],{type:"text/plain",...e}))}),O(()=>URL.revokeObjectURL(n.value)),n},Yn="modulepreload",qn=function(t,e){return new URL(t,e).href},rt={},Gn=function(e,n,r){if(!n||n.length===0)return e();const o=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=qn(s,r),s in rt)return;rt[s]=!0;const i=s.endsWith(".css"),a=i?'[rel="stylesheet"]':"";if(!!r)for(let d=o.length-1;d>=0;d--){const m=o[d];if(m.href===s&&(!i||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const c=document.createElement("link");if(c.rel=i?"stylesheet":Yn,i||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),i)return new Promise((d,m)=>{c.addEventListener("load",d),c.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())},Jn=()=>Gn(()=>import("https://unpkg.com/@monaco-editor/loader@1.3.3/lib/umd/monaco-loader.js"),[],import.meta.url).then(()=>window.monaco_loader).then(t=>t.init()),Kn=({value:t,onChange:e,isDark:n,onSave:r,...o})=>{let s,i,a;return F(()=>{const l=_(n);a!=null&&a.editor&&(l?a.editor.setTheme("vs-dark"):a.editor.setTheme("vs"))}),O(()=>{s==null||s.dispose()}),R(t)&&z(t,l=>{(i==null?void 0:i.getValue())!==l&&(i==null||i.setValue(l))}),()=>h("div",{...o,ref:async l=>{a=await Jn(),i=a.editor.createModel(k(t),"typescript",a.Uri.file("main.ts")),i.onDidChangeContent(()=>e(i.getValue())),a.languages.typescript.typescriptDefaults.setCompilerOptions({jsx:"react"}),a.languages.typescript.typescriptDefaults.setDiagnosticsOptions({noSemanticValidation:!0,noSyntaxValidation:!0}),s=a.editor.create(l,{automaticLayout:!0,wordWrap:!0,theme:k(n)?"vs-dark":"vs"}),s.setModel(i),r&&s.addCommand(a.KeyMod.CtrlCmd|a.KeyCode.KeyS,()=>{r(i.getValue())})}})};class Qn{constructor(){ne(this,"idx",0);ne(this,"demos",[]);ne(this,"currentDemo",null)}registerDemo(e,n,r){const o={id:this.idx++,name:e,version:n,code:r};this.demos.push(o),this.currentDemo||(this.currentDemo=o)}selectDemo(e){const n=this.demos.find(r=>r.id===Number(e));if(!n)throw new Error(`Cannot find demo with name ${name}`);return this.currentDemo=n,n}}const Xn=`import { rh, ref, mount, unref, setupWatch, inject, provide } from "@rhjs/rh";

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
`,Zn=`import { rh, ref, mount, unref, computed } from "@rhjs/rh";

const App = () => {
  const nowDate = ref(new Date());
  const timeStr = computed(() => unref(nowDate).toLocaleTimeString());
  /**
   * Update the date value every 100ms using setInterval.
   * However, the computed property \`timeStr\` will only be recomputed and the view updated
   * when the \`timeStr\` ref value changes (is "dirty"), thanks to reactivity system.
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
`,er=`import {
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
`,tr=`import { Button, ensureFluentUILoaded } from "@rhjs/fluent-web-components";
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
`,K=new Qn;K.registerDemo("HelloWorld","0.1.1-dev.24",Zn);K.registerDemo("Counter","0.1.1-dev.24",Xn);K.registerDemo("TodoApp","0.1.1-dev.24",er);K.registerDemo("Counter","0.0.34",tr);const ot=x(K.currentDemo),Pt=()=>({mgr:K,currentDemo:ot,selectDemo(t){ot.value=K.selectDemo(t)},demos:K.demos}),nr=()=>{const{selectDemo:t,currentDemo:e,demos:n}=Pt();return()=>h("div",null,h("select",{onChange:r=>t(r.target.value)},n.map(r=>h("option",{value:r.id},r.name," @",r.version))))},We=({styleFn:t,isDark:e,...n},r,o)=>()=>h("div",{...n},h(te.Style,{styleFn:()=>({height:"30px",display:"inline-flex",alignItems:"center",justifyContent:"center",paddingLeft:"12px",paddingRight:"12px",cursor:"pointer",userSelect:"none",marginLeft:"4px","&:hover":{backgroundColor:_(e)?"rgba(64,64,64,1)":"rgba(64,64,64,0.1)"},"&:active":{outline:"solid 1px",outlineColor:_(e)?"#fff":"rgba(64,64,64,1)"},...t==null?void 0:t()})}),o),rr=({isDark:t})=>()=>h(We,{onClick:()=>{R(t)&&(t.value=!k(t))},isDark:t},h("span",null,()=>_(t)?"🌘":"🌖"));function st({isDark:t,href:e,target:n="_blank"},r,o){return()=>h(We,{isDark:t,onClick:()=>{window.open(e,n)}},h("a",{href:e,target:n,style:"text-decoration: none; color: inherit;"},o))}const or=({isDark:t})=>()=>h("div",null,h(te.Style,{styleFn:()=>({paddingLeft:"12px",paddingRight:"12px",height:"100%",width:"calc(100% - 24px)",display:"grid",gridTemplateColumns:"minmax(0, 1fr) 12px minmax(0, 1fr)"})}),h("div",{style:"display: inline-flex; align-items: center;"},h("span",{style:"user-select: none;word-break: keep-all;white-space: nowrap;"},"🧩 ",h("b",null,"R"),h("small",null,"eactive"),h("b",null,"H"),h("small",null,"ydrate"),h("b",null,"JS")," PLAYGROUND"),h(rr,{isDark:t}),h(nr,null)),h("div",null),h("div",{style:"display: inline-flex; align-items: center; justify-content: right;"},h(st,{isDark:t,href:"https://zhzluke96.github.io/rhjs-demos/#demo",target:"_self"},"demos"),h(st,{isDark:t,href:"https://github.com/zhzLuke96/rh.js"},"github"))),{Style:sr}=te,ir=()=>document.querySelectorAll("iframe").forEach(t=>t.style.pointerEvents="none"),ar=()=>document.querySelectorAll("iframe").forEach(t=>t.style.pointerEvents="auto"),cr=({isHorizontal:t,onResize:e,ref:n})=>{const[r,o,s]=On(!1),i=()=>o(!0),a=()=>o(!1),l=f=>{e(f.clientX,f.clientY)},c=f=>{const u=f.touches[0];e(u.clientX,u.clientY)},d=x(null);z(s,f=>{f?(ir(),window.addEventListener("mousemove",l),window.addEventListener("mouseup",a),window.addEventListener("touchmove",c),window.addEventListener("touchend",a)):(ar(),window.removeEventListener("mousemove",l),window.removeEventListener("mouseup",a),window.removeEventListener("touchmove",c),window.removeEventListener("touchend",a))}),z(d,f=>{f&&(f.addEventListener("mousedown",i,{passive:!0}),f.addEventListener("touchstart",i,{passive:!0}))}),O(()=>{var f,u;(f=_(d))==null||f.removeEventListener("mousedown",i),(u=_(d))==null||u.removeEventListener("touchstart",i)});const m=Rn("isDark"),p=ke(()=>_(m)?"rgba(255,255,255,0.3)":"rgba(0,0,0,0.3)");return()=>h("div",{ref:f=>{d.value=f,n&&(n.value=f)}},h(sr,{styleFn:()=>({backgroundColor:_(s)?_(p):"",width:t?"100%":"12px",height:t?"12px":"100%",zIndex:_(s)?"10":"auto",cursor:t?"row-resize":"col-resize",userSelect:"none",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"12px","&:hover":{backgroundColor:_(p)}})}),"⚪⚪⚪")},lr=()=>{const t=`
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
`.trim(),e=URL.createObjectURL(new Blob([t],{type:"text/html"}));return O(()=>URL.revokeObjectURL(e)),`${e}#?embedded=${encodeURIComponent(location.origin)}`},ur=(t,e,n="")=>`
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
`.trim();function dr(t,e){const n=me(e),r=o=>{n.value=t(k(n),o)};return[Ve(n),r]}const hr=(t,e,n,r)=>{const o={sendToIframe(a){var l,c;(c=(l=k(t))==null?void 0:l.contentWindow)==null||c.postMessage(a,"*")},sendToDevtools(a){var l,c;(c=(l=k(e))==null?void 0:l.contentWindow)==null||c.postMessage(a,"*")}},s=()=>{const{codeInjected:a,codeURL:l}=_(n);if(!a){if(!l){setTimeout(s,3);return}requestAnimationFrame(()=>{o.sendToIframe({event:"CODE_UPDATE",value:l}),r({type:"CODE_INJECTED"})})}},i=a=>{var d,m;const[l,c]=xt(t,e);!l||!c||((m=(d=a.data)==null?void 0:d.includes)!=null&&m.call(d,"Debugger.enable")&&(console.log("Debugger.enable"),r({type:"Debugger.enable"}),s()),a.source===l.contentWindow?c.contentWindow.postMessage(a.data,"*"):a.source===c.contentWindow&&l.contentWindow.postMessage({event:"DEV",data:a.data},"*"))};return window.addEventListener("message",i),O(()=>window.removeEventListener("message",i)),o},pr=(t,e)=>{const{importMap:n,isDark:r}=t,o=ke(()=>{const s=ur(k(r),JSON.stringify({imports:_(n)}));return URL.createObjectURL(new Blob([s],{type:"text/html"}))});return z(o,(s,i)=>{i&&URL.revokeObjectURL(i),e({type:"HTML_CHANGED",iframeSrc:s||""})}),O(()=>URL.revokeObjectURL(k(o)||"")),{iframeSrc:o}},fr=t=>{const{isDark:e,code:n}=t,r=me(null),o=me(null),s=u=>{var g;return(g=u.contentDocument)==null?void 0:g.documentElement.classList.toggle("dark",k(e))},i=u=>{const g=k(r);g&&(g.src=u)},a=()=>{var u,g;(g=(u=k(r))==null?void 0:u.contentWindow)==null||g.location.reload()},l=()=>{var u,g;(g=(u=k(o))==null?void 0:u.contentWindow)==null||g.location.reload()};z(()=>_(e),u=>{const g=_(r);g&&s(g)});const[c,d]=dr((u,g)=>{switch(g.type){case"IFRAME_READY":s(g.iframe);let j=u.codeInjected;return{...u,codeInjected:j,iframeReady:!0};case"DEVTOOLS_IFRAME_READY":return{...u,devtoolsIframeReady:!0};case"DEV_LOADED":return{...u,devLoaded:!0};case"HTML_CHANGED":return i(g.iframeSrc),l(),{...u,iframeReady:!1,devtoolsIframeReady:!1,devLoaded:!1,codeInjected:!1,darkInjected:!1};case"HTML_RELOAD":return setTimeout(()=>{a(),l()}),{...u,iframeReady:!1,devtoolsIframeReady:!1,devLoaded:!1,codeInjected:!1,darkInjected:!1};case"CODE_UPDATE":return{...u,codeURL:g.codeURL};case"CODE_INJECTED":return{...u,codeInjected:!0}}return u},{iframeReady:!1,devtoolsIframeReady:!1,devLoaded:!1,codeInjected:!1,codeURL:k(n)}),{sendToDevtools:m,sendToIframe:p}=hr(r,o,c,d);z(()=>_(n),u=>{d({type:"CODE_UPDATE",codeURL:u}),c.value.iframeReady&&requestAnimationFrame(()=>{p({event:"CODE_UPDATE",value:u}),d({type:"CODE_INJECTED"})})});const{iframeSrc:f}=pr(t,d);return z(r,u=>{u==null||u.addEventListener("load",()=>d({type:"IFRAME_READY",iframe:u}))}),z(o,u=>{u==null||u.addEventListener("load",()=>d({type:"DEVTOOLS_IFRAME_READY",devIframe:u}))}),{iframeSrc:f,iframeRef:r,devtoolsIframeRef:o,previewState:c,dispatch:d,sendToDevtools:m,sendToIframe:p}},mr=t=>{const{importMap:e,code:n,devtools:r,isDark:o,...s}=t,i=x(null),{iframeSrc:a,iframeRef:l,devtoolsIframeRef:c,previewState:d,dispatch:m}=fr(t),p=lr(),f=ke(()=>`width: 100%; height: 100%; ${_(r)?"display: block;":"display: none;"}`),u=x(.625),g=x(null),j=(T,D)=>{const[E,b]=xt(i,g);if(!E||!b)return;let L,W;const re=E.getBoundingClientRect();L=D-re.top-b.offsetHeight/2,W=E.offsetHeight-b.offsetHeight;const oe=L/W;u.value=oe};return()=>h("div",{...s,ref:i},h(te.Style,{styleFn:()=>{const T=_(u);return{display:"grid",height:"100%",width:"100%",gridTemplateRows:_(r)?`30px minmax(0, ${T}fr) 12px minmax(0, ${1-T}fr)`:"30px minmax(0, 1fr)"}}}),h("div",{style:"border-bottom: 1px solid;border-top: 1px solid;overflow: hidden;"},h(We,{title:"reload page",isDark:o,onClick:()=>m({type:"HTML_RELOAD"})},"♻️relaod")),h("iframe",{ref:l,src:a,style:"width: 100%;height: 100%;",frameBorder:0,sandbox:"allow-popups-to-escape-sandbox allow-scripts allow-popups allow-forms allow-pointer-lock allow-top-navigation allow-modals allow-same-origin"}),h("div",null,h(cr,{ref:g,isHorizontal:!0,onResize:j})),h("iframe",{ref:c,style:f,src:p,frameBorder:"0"}))},vr=({isDark:t})=>()=>h(te.GlobalStyle,{styleFn:()=>({fontFamily:"'Karla', system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",lineHeight:"1.5",fontWeight:"400",colorScheme:_(t)?"light dark":"dark",color:_(t)?"rgba(255, 255, 255, 0.87)":"#242424",backgroundColor:_(t)?"#333":"#fff",fontSynthesis:"none",textRendering:"optimizeLegibility","-webkitFontSmoothing":"antialiased","-moz-osxFontSmoothing":"grayscale","-webkitTextSizeAdjust":"100%",height:"100vh",width:"100vw",body:{margin:"0",minWidth:"100vw",minHeight:"100vh",width:"100%",height:"100%"},"#app":{width:"100%",height:"100%"}})});function gr(){return new Worker(""+new URL("complier.worker-026b4f92.js",import.meta.url).href)}class _r{constructor(){ne(this,"registry",{})}registerWorker(e,n){this.registry[e]?console.warn(`Worker of type ${e} already registered.`):this.registry[e]=n}removeWorker(e){delete this.registry[e]}getWorker(e){const n=this.registry[e];if(n)return n;throw new Error(`No worker of type ${e} registered.`)}postMessage(e,n){this.getWorker(e).postMessage(n)}listenRecv(e,n){const r=this.getWorker(e);let o;const s=i=>{const{message_token:a}=i.data||{};if(a!==n)return;const l={...i.data};delete l.message_token,o(l),r.removeEventListener("message",s)};return r.addEventListener("message",s),{recv:new Promise((i,a)=>{o=i}),dispose:()=>r.removeEventListener("message",s)}}}class yr{constructor(){ne(this,"registry",new _r);this.initialize()}async initialize(){this.registry.registerWorker("complier",new gr)}worker_caller(e,n){const r=Math.random().toString(36).slice(2),o={...n,message_token:r};return this.registry.postMessage(e,o),this.registry.listenRecv(e,r)}compileFile(e){return this.worker_caller("complier",{event:"BABEL",payload:{file:e,compile_options:{}}})}compileFiles(e){return this.worker_caller("complier",{event:"ROLLUP",payload:{files:e,compile_options:{}}})}}const it=new yr;y.global_source.on("throw",console.error);const wr=()=>{let t=null;return O(()=>t==null?void 0:t.dispose()),{compileFile(e){return t==null||t.dispose(),t=it.compileFile(e),t.recv},compileFiles(e){return t==null||t.dispose(),t=it.compileFiles(e),t.recv}}},Er='import("@rhjs/rh").then(({cs, ElementSource}) => window.dispose = () => (cs || ElementSource).global_source.emit("unmount"));',Sr=()=>{var l;const t=x(!0);xn("isDark",t);const{currentDemo:e}=Pt(),n=ke(()=>{var c;return{"@rhjs/rh":`https://unpkg.com/@rhjs/rh@${((c=e.value)==null?void 0:c.version)||"latest"}/dist/main.module.mjs`,"@rhjs/fluent-web-components":"https://unpkg.com/@rhjs/fluent-web-components@latest/dist/main.module.mjs"}}),r=x(""),o=$n(r,{type:"text/javascript"}),s=x(((l=e.value)==null?void 0:l.code)||""),i=wr(),a=async()=>{const c=k(s);if(!c)return;const d=await i.compileFile({filename:"main.tsx",source:c});r.value=`${d.compiled}
${Er}`};return kn(a),z(e,c=>{c&&s.value!==c.code&&(s.value=c.code,a())}),()=>h("div",null,h(vr,{isDark:t}),h(te.Style,{styleFn:()=>({position:"relative",display:"flex",flexFlow:"column",width:"100%",height:"100%",maxWidth:"100vw",maxHeight:"100vh",overflow:"hidden"})}),h("header",{style:"height: 30px; width: 100%;"},h(or,{isDark:t})),h("div",{style:"flex: 1;"},h(te.Style,{styleFn:()=>({position:"relative",display:"flex",flexFlow:"row",width:"100%",height:"100%"})}),h(Kn,{style:"flex: 1;",value:s,onChange:c=>s.value=c,onSave:a,isDark:t}),h(mr,{style:"flex: 1;",importMap:n,code:o,devtools:!0,isDark:t})))};Cn("#app",Sr);
