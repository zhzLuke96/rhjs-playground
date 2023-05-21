var Ut=Object.defineProperty;var zt=(e,t,n)=>t in e?Ut(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var te=(e,t,n)=>(zt(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();function Ht(e,t){return t.forEach(function(n){n&&typeof n!="string"&&!Array.isArray(n)&&Object.keys(n).forEach(function(r){if(r!=="default"&&!(r in e)){var o=Object.getOwnPropertyDescriptor(n,r);Object.defineProperty(e,r,o.get?o:{enumerable:!0,get:function(){return n[r]}})}})}),e}function Wt(e,t){const n=Object.create(null),r=e.split(",");for(let o=0;o<r.length;o++)n[r[o]]=!0;return t?o=>!!n[o.toLowerCase()]:o=>!!n[o]}const Ft=()=>{},Bt=Object.assign,$t=Object.prototype.hasOwnProperty,ge=(e,t)=>$t.call(e,t),q=Array.isArray,pe=e=>it(e)==="[object Map]",je=e=>typeof e=="symbol",ye=e=>e!==null&&typeof e=="object",Vt=Object.prototype.toString,it=e=>Vt.call(e),Yt=e=>it(e).slice(8,-1),Me=e=>typeof e=="string"&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Ie=(e,t)=>!Object.is(e,t);let qt;function at(e,t=qt){t&&t.active&&t.effects.push(e)}const Pe=e=>{const t=new Set(e);return t.w=0,t.n=0,t},ct=e=>(e.w&V)>0,lt=e=>(e.n&V)>0,Re=new WeakMap;let se=0,V=1;const De=30;let P;const Z=Symbol(""),xe=Symbol("");class ut{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,at(this,r)}run(){if(!this.active)return this.fn();let t=P,n=G;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=P,P=this,G=!0,V=1<<++se,se<=De?(({deps:r})=>{if(r.length)for(let o=0;o<r.length;o++)r[o].w|=V})(this):Be(this),this.fn()}finally{se<=De&&(r=>{const{deps:o}=r;if(o.length){let s=0;for(let i=0;i<o.length;i++){const a=o[i];ct(a)&&!lt(a)?a.delete(r):o[s++]=a,a.w&=~V,a.n&=~V}o.length=s}})(this),V=1<<--se,P=this.parent,G=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){P===this?this.deferStop=!0:this.active&&(Be(this),this.onStop&&this.onStop(),this.active=!1)}}function Be(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}function Ue(e,t){e.effect&&(e=e.effect.fn);const n=new ut(e);t&&(Bt(n,t),t.scope&&at(n,t.scope)),t&&t.lazy||n.run();const r=n.run.bind(n);return r.effect=n,r}function Le(e){e.effect.stop()}let G=!0;const dt=[];function _e(){dt.push(G),G=!1}function we(){const e=dt.pop();G=e===void 0||e}function j(e,t,n){if(G&&P){let r=Re.get(e);r||Re.set(e,r=new Map);let o=r.get(n);o||r.set(n,o=Pe()),ht(o)}}function ht(e,t){let n=!1;se<=De?lt(e)||(e.n|=V,n=!ct(e)):n=!e.has(P),n&&(e.add(P),P.deps.push(e))}function K(e,t,n,r,o,s){const i=Re.get(e);if(!i)return;let a=[];if(t==="clear")a=[...i.values()];else if(n==="length"&&q(e)){const l=Number(r);i.forEach((c,d)=>{(d==="length"||d>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(i.get(n)),t){case"add":q(e)?Me(n)&&a.push(i.get("length")):(a.push(i.get(Z)),pe(e)&&a.push(i.get(xe)));break;case"delete":q(e)||(a.push(i.get(Z)),pe(e)&&a.push(i.get(xe)));break;case"set":pe(e)&&a.push(i.get(Z))}if(a.length===1)a[0]&&Ne(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Ne(Pe(l))}}function Ne(e,t){const n=q(e)?e:[...e];for(const r of n)r.computed&&$e(r);for(const r of n)r.computed||$e(r)}function $e(e,t){(e!==P||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Gt=Wt("__proto__,__v_isRef,__isVue"),pt=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(je)),Jt=ft(),Kt=ft(!0),Ve=Qt();function Qt(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=_(this);for(let s=0,i=this.length;s<i;s++)j(r,0,s+"");const o=r[t](...n);return o===-1||o===!1?r[t](...n.map(_)):o}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){_e();const r=_(this)[t].apply(this,n);return we(),r}}),e}function Xt(e){const t=_(this);return j(t,0,e),t.hasOwnProperty(e)}function ft(e=!1,t=!1){return function(n,r,o){if(r==="__v_isReactive")return!e;if(r==="__v_isReadonly")return e;if(r==="__v_isShallow")return t;if(r==="__v_raw"&&o===(e?t?dn:gt:t?un:vt).get(n))return n;const s=q(n);if(!e){if(s&&ge(Ve,r))return Reflect.get(Ve,r,o);if(r==="hasOwnProperty")return Xt}const i=Reflect.get(n,r,o);return(je(r)?pt.has(r):Gt(r))?i:(e||j(n,0,r),t?i:D(i)?s&&Me(r)?i:i.value:ye(i)?e?He(i):yt(i):i)}}function Zt(e=!1){return function(t,n,r,o){let s=t[n];if(fe(s)&&D(s)&&!D(r))return!1;if(!e&&(wt(r)||fe(r)||(s=_(s),r=_(r)),!q(t)&&D(s)&&!D(r)))return s.value=r,!0;const i=q(t)&&Me(n)?Number(n)<t.length:ge(t,n),a=Reflect.set(t,n,r,o);return t===_(o)&&(i?Ie(r,s)&&K(t,"set",n,r):K(t,"add",n,r)),a}}const en={get:Jt,set:Zt(),deleteProperty:function(e,t){const n=ge(e,t),r=Reflect.deleteProperty(e,t);return r&&n&&K(e,"delete",t,void 0),r},has:function(e,t){const n=Reflect.has(e,t);return je(t)&&pt.has(t)||j(e,0,t),n},ownKeys:function(e){return j(e,0,q(e)?"length":Z),Reflect.ownKeys(e)}},tn={get:Kt,set:(e,t)=>!0,deleteProperty:(e,t)=>!0},ze=e=>e,Ee=e=>Reflect.getPrototypeOf(e);function ce(e,t,n=!1,r=!1){const o=_(e=e.__v_raw),s=_(t);n||(t!==s&&j(o,0,t),j(o,0,s));const{has:i}=Ee(o),a=r?ze:n?We:ie;return i.call(o,t)?a(e.get(t)):i.call(o,s)?a(e.get(s)):void(e!==o&&e.get(t))}function le(e,t=!1){const n=this.__v_raw,r=_(n),o=_(e);return t||(e!==o&&j(r,0,e),j(r,0,o)),e===o?n.has(e):n.has(e)||n.has(o)}function ue(e,t=!1){return e=e.__v_raw,!t&&j(_(e),0,Z),Reflect.get(e,"size",e)}function Ye(e){e=_(e);const t=_(this);return Ee(t).has.call(t,e)||(t.add(e),K(t,"add",e,e)),this}function qe(e,t){t=_(t);const n=_(this),{has:r,get:o}=Ee(n);let s=r.call(n,e);s||(e=_(e),s=r.call(n,e));const i=o.call(n,e);return n.set(e,t),s?Ie(t,i)&&K(n,"set",e,t):K(n,"add",e,t),this}function Ge(e){const t=_(this),{has:n,get:r}=Ee(t);let o=n.call(t,e);o||(e=_(e),o=n.call(t,e)),r&&r.call(t,e);const s=t.delete(e);return o&&K(t,"delete",e,void 0),s}function Je(){const e=_(this),t=e.size!==0,n=e.clear();return t&&K(e,"clear",void 0,void 0),n}function de(e,t){return function(n,r){const o=this,s=o.__v_raw,i=_(s),a=t?ze:e?We:ie;return!e&&j(i,0,Z),s.forEach((l,c)=>n.call(r,a(l),a(c),o))}}function he(e,t,n){return function(...r){const o=this.__v_raw,s=_(o),i=pe(s),a=e==="entries"||e===Symbol.iterator&&i,l=e==="keys"&&i,c=o[e](...r),d=n?ze:t?We:ie;return!t&&j(s,0,l?xe:Z),{next(){const{value:m,done:f}=c.next();return f?{value:m,done:f}:{value:a?[d(m[0]),d(m[1])]:d(m),done:f}},[Symbol.iterator](){return this}}}}function $(e){return function(...t){return e!=="delete"&&this}}function nn(){const e={get(o){return ce(this,o)},get size(){return ue(this)},has:le,add:Ye,set:qe,delete:Ge,clear:Je,forEach:de(!1,!1)},t={get(o){return ce(this,o,!1,!0)},get size(){return ue(this)},has:le,add:Ye,set:qe,delete:Ge,clear:Je,forEach:de(!1,!0)},n={get(o){return ce(this,o,!0)},get size(){return ue(this,!0)},has(o){return le.call(this,o,!0)},add:$("add"),set:$("set"),delete:$("delete"),clear:$("clear"),forEach:de(!0,!1)},r={get(o){return ce(this,o,!0,!0)},get size(){return ue(this,!0)},has(o){return le.call(this,o,!0)},add:$("add"),set:$("set"),delete:$("delete"),clear:$("clear"),forEach:de(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{e[o]=he(o,!1,!1),n[o]=he(o,!0,!1),t[o]=he(o,!1,!0),r[o]=he(o,!0,!0)}),[e,n,t,r]}const[rn,on,sn,an]=nn();function mt(e,t){const n=t?e?an:sn:e?on:rn;return(r,o,s)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?r:Reflect.get(ge(n,o)&&o in r?n:r,o,s)}const cn={get:mt(!1,!1)},ln={get:mt(!0,!1)},vt=new WeakMap,un=new WeakMap,gt=new WeakMap,dn=new WeakMap;function yt(e){return fe(e)?e:_t(e,!1,en,cn,vt)}function He(e){return _t(e,!0,tn,ln,gt)}function _t(e,t,n,r,o){if(!ye(e)||e.__v_raw&&(!t||!e.__v_isReactive))return e;const s=o.get(e);if(s)return s;const i=(a=e).__v_skip||!Object.isExtensible(a)?0:function(c){switch(c){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}(Yt(a));var a;if(i===0)return e;const l=new Proxy(e,i===2?r:n);return o.set(e,l),l}function fe(e){return!(!e||!e.__v_isReadonly)}function wt(e){return!(!e||!e.__v_isShallow)}function _(e){const t=e&&e.__v_raw;return t?_(t):e}const ie=e=>ye(e)?yt(e):e,We=e=>ye(e)?He(e):e;function Et(e){G&&P&&ht((e=_(e)).dep||(e.dep=Pe()))}function St(e,t){const n=(e=_(e)).dep;n&&Ne(n)}function D(e){return!(!e||e.__v_isRef!==!0)}function x(e){return bt(e,!1)}function me(e){return bt(e,!0)}function bt(e,t){return D(e)?e:new hn(e,t)}class hn{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:_(t),this._value=n?t:ie(t)}get value(){return Et(this),this._value}set value(t){const n=this.__v_isShallow||wt(t)||fe(t);t=n?t:_(t),Ie(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:ie(t),St(this))}}function y(e){return D(e)?e.value:e}var kt;class pn{constructor(t,n,r,o){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[kt]=!1,this._dirty=!0,this.effect=new ut(t,()=>{this._dirty||(this._dirty=!0,St(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=r}get value(){const t=_(this);return Et(t),!t._dirty&&t._cacheable||(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}kt="__v_isReadonly";function ve(){return ve=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ve.apply(this,arguments)}function Tt(e,t){if(e==null)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t.indexOf(n=s[r])>=0||(o[n]=e[n]);return o}var fn=0;function Se(e){return"__private_"+fn+++"_"+e}function S(e,t){if(!Object.prototype.hasOwnProperty.call(e,t))throw new TypeError("attempted to use private field on non-instance");return e}class mn{constructor(t){this.data=void 0,this.next=void 0,this.data=t,this.next=null}}class vn{constructor(){this.head=void 0,this.tail=void 0,this.length=void 0,this.head=null,this.tail=null,this.length=0}enqueue(t){let n=new mn(t);this.isEmpty()?(this.head=n,this.tail=n):(this.tail&&(this.tail.next=n),this.tail=n),this.length++}dequeue(){if(this.isEmpty())return null;{var t,n;let r=((t=this.head)==null?void 0:t.data)||null;return this.head=((n=this.head)==null?void 0:n.next)||null,this.isEmpty()&&(this.tail=null),this.length--,r}}isEmpty(){return this.length===0}}const Ot=new class{constructor(){this.frameDeadline=void 0,this.taskQueue=void 0,this.channel=void 0,this.messagePort=void 0,this.triggerPort=void 0,this.rafTriggered=void 0,this.activeFrameTime=33.33,this.frameDeadline=performance.now()+this.activeFrameTime,this.taskQueue=new vn,this.channel=new MessageChannel,this.messagePort=this.channel.port1,this.triggerPort=this.channel.port2,this.rafTriggered=!1,this.messagePort.onmessage=()=>{this.handleTask()}}timeRemaining(){return Math.max(0,this.frameDeadline-performance.now())}execTask(e){e({timeRemaining:()=>this.timeRemaining()})}handleTask(){let e=this.taskQueue.dequeue();for(;e;){if(this.execTask(e),this.timeRemaining()<=0){this.trigger();break}e=this.taskQueue.dequeue()}}trigger(){this.rafTriggered||this.taskQueue.length!==0&&(this.rafTriggered=!0,requestAnimationFrame(e=>{this.frameDeadline=e+this.activeFrameTime,this.rafTriggered=!1,e<this.frameDeadline&&this.triggerPort.postMessage(null)}))}runTask(e){!this.rafTriggered&&performance.now()<this.frameDeadline?this.execTask(e):(this.taskQueue.enqueue(e),this.trigger())}};var O=Se("eventMap"),Q=Se("addEventObject"),z=Se("getEventObjects"),I=Se("removeEventObjects");class gn{constructor(){Object.defineProperty(this,I,{value:wn}),Object.defineProperty(this,z,{value:_n}),Object.defineProperty(this,Q,{value:yn}),Object.defineProperty(this,O,{writable:!0,value:new Map})}addListener(t,n,r){return S(this,Q)[Q](t,n,r,!1)}emit(t,...n){const r=S(this,z)[z](t);return!!r.length&&(r.forEach(({context:o,listener:s,once:i})=>{i&&S(this,I)[I](t,s,void 0,!0),s.apply(o,n)}),!0)}idleEmit(t,...n){let r=S(this,z)[z](t);return!!r.length&&(r.forEach(({context:o,listener:s,once:i})=>{Ot.runTask(()=>{i&&S(this,I)[I](t,s,void 0,!0),s.apply(o,n)})}),!0)}eventNames(){return[...S(this,O)[O].keys()]}listenerCount(t){return S(this,z)[z](t).length}listeners(t){return S(this,z)[z](t).map(({listener:n})=>n)}off(t,n,r,o=!1){return S(this,I)[I](t,n,r,o)}on(t,n,r){return S(this,Q)[Q](t,n,r,!1)}once(t,n,r){return S(this,Q)[Q](t,n,r,!0)}removeAllListeners(t){return S(this,I)[I](t,void 0,void 0,!1)}removeListener(t,n,r,o=!1){return S(this,I)[I](t,n,r,o)}}function yn(e,t,n=this,r){if(typeof t!="function")throw new TypeError("The listener must be a function");let o=S(this,O)[O].get(e);return o||(o=[],S(this,O)[O].set(e,o)),o.push({context:n,listener:t,once:r}),this}function _n(e){var t;return(t=S(this,O)[O].get(e))!=null?t:[]}function wn(e,t,n,r){if(!e)return S(this,O)[O].clear(),this;const o=S(this,O)[O].get(e),s=o==null?void 0:o.filter(i=>t&&(i.listener!==t||n&&i.context!==n||r&&!i.once));return s!=null&&s.length?S(this,O)[O].set(e,s):S(this,O)[O].delete(e),this}const g={ES_CREATE_CB:Symbol("ES_CREATE_CB"),IS_ANCHOR:Symbol("IS_ANCHOR"),NONE:Symbol("NONE"),SELF_ES:Symbol("SELF_ES"),CACHE_NODES:Symbol("CACHE_NODES"),IS_COMPONENT:Symbol("IS_COMPONENT"),STYLESHEET_SCOPED:Symbol("STYLESHEET_SCOPED"),STYLESHEET_ROOT:Symbol("STYLESHEET_ROOT"),DISPOSE:Symbol("DISPOSE")};class w extends gn{static peek(){return w.source_stack.peek()||w.global_source}constructor(t,n){if(super(),this.host=void 0,this.lazy_unmount=void 0,this.__context={},this.__parent_source=w.source_stack.peek(),this.__container_source=this,this.states={mounted:!1,unmounted:!1},this.host=t,this.lazy_unmount=n,!this.__parent_source)return;this.setupContainerSource(),this.on("throw",s=>{var i;return(i=this.__parent_source)==null?void 0:i.emit("throw",s)}),this.once("mount",()=>this.states.mounted=!0),this.once("unmount",()=>this.states.unmounted=!0);const r=()=>{this.idleEmit("unmount"),this.dispose()};var o;n?((this.__container_source===this?(o=this.__container_source.__parent_source)==null?void 0:o.__container_source:this.__container_source)||this.__parent_source).once("unmount",r):(this.__parent_source.once("unmount",r),this.__parent_source.once("update_after",()=>{this.__parent_source.once("update_after",()=>{this.emit("unmount")})}))}onMount(t){return this.states.mounted?t():this.once("mount",t),this}onUnmount(t){return this.states.unmounted?t():this.once("unmount",t),this}setupContainerSource(){for(;this.__container_source&&this.__container_source!==w.global_source;){var t;if((t=this.__container_source.host)!=null&&t[g.IS_COMPONENT])break;this.__container_source=this.__container_source.__parent_source}}dispose(){this.removeAllListeners(),delete this.__context}effect(t,n){const r=Ue(t,n);return n!=null&&n.lazy||r.effect.deps.length!==0?this.once("unmount",()=>Le(r)):Le(r),r}}w.source_stack=new class{constructor(){this.items=void 0,this.items=[]}toArray(){return[...this.items]}push(e){this.items.push(e)}pop(){return this.items.pop()}peek(){return this.items[this.items.length-1]}size(){return this.items.length}isEmpty(){return this.items.length===0}},w.global_source=new w;const X=(e,t,n)=>{const r=o=>{const s=o.relatedNode;s&&s===e.parentNode&&t(s,e)};return e.addEventListener(n,r),()=>e.removeEventListener(n,r)},Y=e=>{if(!e)return;const t=e.parentNode;(t&&document.contains(t)||t&&e.getRootNode()!==e)&&(n=>{let r;var o;e instanceof HTMLElement&&(r=(o=e.hidden)!=null&&o,e.hidden=!0),Ot.runTask(()=>{n.contains(e)&&n.removeChild(e),e instanceof HTMLElement&&r!==void 0&&(e.hidden=r)})})(t)};class A{constructor(){this.source=void 0,this.viewAnchor=(()=>{const t=document.createTextNode("");return t[g.IS_ANCHOR]=!0,t})(),this.currentView=this.viewAnchor,this.renderEffectRunner=void 0,this.rawTarget=void 0,this.dispose_onDomInserted=void 0,this._initialized=!1}_initialize(){this._initialized||(this._initialized=!0,this.initialize(),this.viewAnchor[g.DISPOSE]=()=>this.source.emit("unmount"))}initialize(){this.source||(this.source=new w(this)),this.source.once("unmount",()=>this.dispose())}ensureEffectRunner(){return this._initialize(),this.renderEffectRunner||(this.renderEffectRunner=Ue(this.update.bind(this),{lazy:!1}),this.dispose_onDomInserted=X(this.currentView,(t,n)=>{var r,o,s;(r=this.dispose_onDomInserted)==null||r.call(this),this.source.emit("mount"),this.viewAnchor!==n&&t.insertBefore(this.viewAnchor,n),n!==this.currentView&&(t.insertBefore(this.currentView,n),(s=n)&&s[g.IS_ANCHOR]||(o=n.parentElement)==null||o.removeChild(n))},"DOMNodeInserted")),this.renderEffectRunner}render(){return null}_update(){const t=this.currentView,n=this.render()||this.viewAnchor,r=t==null?void 0:t.parentElement;r&&r.replaceChild(n,t),this.currentView=n,this.currentView[g.DISPOSE]=()=>this.source.emit("unmount")}update(){var t,n;if(this.source.states.unmounted||(t=this.source.__parent_source)!=null&&t.states.unmounted||(n=this.source.__container_source)!=null&&n.states.unmounted)this.source.emit("unmount");else{this.source.emit("update_before");try{w.source_stack.push(this.source),this.source.emit("update"),this._update()}catch(r){requestAnimationFrame(()=>{this.source.emit("throw",r),console.error(r)})}finally{w.source_stack.pop(),this.source.emit("update_after")}}}dispose(){var t,n;(t=this.renderEffectRunner)==null||t.effect.stop(),Y(this.currentView),Y(this.viewAnchor),this.currentView[g.DISPOSE]=void 0,this.viewAnchor[g.DISPOSE]=void 0,(n=this.dispose_onDomInserted)==null||n.call(this)}static fromRender(t){const n=new A;return n.render=()=>A.warpView(t()),n.rawTarget=t,n}static fromRef(t){const n=new A;return n.render=()=>A.warpView(y(t)),n.rawTarget=t,n}static warpView(t){return t instanceof Node||t===null?t:document.createTextNode(`${t}`)}static warp(t){if(typeof t!="function"&&!D(t))return A.warpView(t);let n;if(typeof t=="function")n=A.fromRender(t);else{if(!D(t))throw new Error("Unknown view type.");n=A.fromRef(t)}return n.ensureEffectRunner(),n.currentView}}let Ct;Ct=g.IS_COMPONENT;class Rt extends A{get[Ct](){return!0}constructor(t,n,r){super(),this._define=void 0,this.props=void 0,this.children=void 0,this.state=void 0,this._define=t,this.props=n,this.children=r}initialize(){this.initializeComponent()}initializeComponent(){this.source=new w(this,!!this.props.__node_cached),this.source.once("unmount",()=>this.dispose()),this.installSource(),this.initializeSetup()}initializeSetup(){const{props:t,children:n}=this;_e(),w.source_stack.push(this.source),this.source.emit("setup_before"),this.state=this._define.setup(t,n),this.source.emit("setup_after"),w.source_stack.pop(),we()}render(){const t=this._define.render(this.props,this.state,this.children);return A.warp(t)}installSource(){var t,n;(t=(n=this._define)[g.ES_CREATE_CB])==null||t.call(n,this.source)}}class En extends Rt{constructor(t,n,r){const o={setup:(s,i)=>{const a={};return o.render=t(s,a,i),a},render:()=>{}};o[g.ES_CREATE_CB]=t[g.ES_CREATE_CB],super(o,n,r),this._function_define=void 0,this._function_define=t}}class ne{static createReactiveDOM(t,n,r){if(t instanceof Element){const s=ne.instances.get(t);if(s)return s.update(n,r),s}const o=new ne(t,n,r);return ne.instances.set(o.node,o),o}constructor(t,n,r){this.tagNameOrDome=void 0,this.props=void 0,this.children=void 0,this.node=void 0,this.source=new w(this),this.listeners={},this.tagNameOrDome=t,this.props=n,this.children=r,this.source.once("unmount",()=>this.dispose()),this.initializeNode()}dispose(){Y(this.node),this.node[g.DISPOSE]=void 0}initializeNode(){return this.node||(this.node=this.tagNameOrDome instanceof Element?this.tagNameOrDome:document.createElement(this.tagNameOrDome),this.update(this.props,this.children)),this.node}update(t,n){this.props=t,this.children=n,_e(),this.hydrateChildren(),we();for(const[r,o]of Object.entries(this.props))this.hydrateAttribute(r,o);this.node[g.DISPOSE]=()=>this.source.emit("unmount")}isValidAttributeName(t){return/^[a-zA-Z][\w-]*$/.test(t)}hydrateAttribute(t,n){if(t.startsWith("_")||t.startsWith("$")||!this.isValidAttributeName(t))return;switch(t){case"ref":return void(typeof n=="function"?n(this.node):D(n)&&(n.value=this.node));case"effect":return void(typeof n=="function"&&this.source.effect(()=>n(this.node),{lazy:!1}))}if(t.startsWith("on")&&typeof n=="function"){const o=t.slice(2).toLowerCase(),s=this.listeners[t];return s&&this.node.removeEventListener(o,s),this.listeners[t]=n,void this.node.addEventListener(o,n)}const r=o=>{if(t!=="value")if(t!=="defaultValue")typeof o!="boolean"?this.node.setAttribute(t,o):o?this.node.setAttribute(t,""):this.node.removeAttribute(t);else{if(this.node.value)return;this.node.value=o}else this.node.value=o};D(n)?this.source.effect(()=>{const o=y(n);r(o)},{lazy:!1}):r(n)}hydrateChildren(){const{children:t}=this;for(const n of t){if(n==null)continue;const r=A.warp(n);r&&this.node.appendChild(r)}}}ne.instances=new WeakMap;const Ke=(e,t)=>{var n,r;if(!e)return;const o=w.peek(),{__container_source:s}=o;s&&((n=s.__context)[r=g.CACHE_NODES]||(n[r]={}),s.__context[g.CACHE_NODES][e]=t)},Dt=(e,t={},n=[])=>{const{key:r}=t;delete t.key,r&&(t.__node_cached=!0);const o=(s=>{var i,a;if(!s)return;const l=w.peek(),{__container_source:c}=l;return c?((i=c.__context)[a=g.CACHE_NODES]||(i[a]={}),c.__context[g.CACHE_NODES][s]):void 0})(r);if(o)return o;if(typeof e=="function"){const s=new En(e,t,n);return Ke(r,s),s}if(typeof e=="object"&&typeof e.render=="function"&&typeof e.setup=="function"){const s=new Rt(e,t,n);return Ke(r,s),s}throw new Error(`Valid define type [${typeof e}] is not supported for reactiveHydrate.`)};function Sn(e,t,...n){var r;if(t||(t={}),n=((r=n)==null?void 0:r.flat())||n,typeof e=="string"||e instanceof Element)return ne.createReactiveDOM(e,t,n).node;const o=Dt(e,t,n);return o.ensureEffectRunner(),o.currentView}const h=Sn;function W(e){return e?e(w.peek()):w.peek()}const bn=(e,t,n=!1)=>W(r=>r[n?"once":"on"](e,t)),kn=e=>W(t=>t.onMount(e)),C=e=>W(t=>t.onUnmount(e)),Tn=e=>bn("throw",e),On=(e,t,n)=>{const r=e instanceof Element?e:document.querySelector(e);if(!r)throw new Error(`Could not find container: ${e}`);if(t instanceof Element)return r.appendChild(t),null;const o=Dt(t,n);return o.ensureEffectRunner(),r.appendChild(o.currentView),o},F=(e,t)=>{let n=null;const r=Ue(()=>{n==null||n(),e(s=>n=s)},ve({lazy:!1},t)),o=()=>{n==null||n(),Le(r),n=null};return C(o),[r,o]},H=(e,t,n)=>{let r;return F(()=>{const o=typeof e=="function"?e(r):y(e);ke(()=>t(o,r)),r=o},n)},be=(e,t)=>{const n=x();return F(()=>{const r=k(n),o=e(r);var s,i;s=r,i=o,Object.is(s,i)||s===i||(n.value=o)},t),n},ke=(e,...t)=>{_e();const n=e(...t);return we(),n},k=e=>ke(()=>y(e));function Cn(e){const t=D(e)?e:x(e);return[()=>y(t),n=>{if(typeof n=="function"){const r=k(t);t.value=n(r)}else t.value=n},t]}const Rn=(...e)=>e.map(t=>y(t)),xt=Rn;function Dn(e,t=g.NONE){let n=w.peek();for(;n;){const r=n.__context;if(e in r)return r[e];n=n.__parent_source}if(t===g.NONE)throw new Error(`The key '${e}' is not defined in context`);return t}function xn(e,t){const n=w.peek();if(n==null||!n.__container_source)throw new Error("inject must be called inside Component");n.__container_source.__context[e]=t}function Lt(e,t){return((n,r)=>{if(!r)return;const o=n[g.ES_CREATE_CB];n[g.ES_CREATE_CB]=s=>{o==null||o(s),r(s)}})(e,t),e}const Ln=e=>new Proxy({},{get(t,n,r){let o=e;for(;o!==void 0;){const s=o.__context;if(n in s)return s[n];o=o.__parent_source}},set:(t,n,r,o)=>(e.__context[n]=r,!0)}),Nt=e=>{const t=W();if(!t.__container_source)throw new Error("Container source not found, must be inside a container component to use element source");const n=Ln(t.__container_source);return e==null||e(n),n},Nn=Lt({setup({fallbackRender:e,onError:t,render:n}){const r=w.peek();let o=x(null);r.on("throw",i=>{i instanceof Error&&(t==null||t(i),o.value=i)});const s=x(1);return{catchError:o,rerenderRef:s,fallbackRender:e,childrenRender:n}},render(e,{fallbackRender:t,rerenderRef:n,catchError:r,childrenRender:o}){const s=()=>{n.value=Date.now(),r.value=null};return r.value?ke(()=>t(r.value,s)):o()}}),At=Lt({setup(e,[t,...n]){const r={anchor:document.createTextNode(""),children:[],parentNode:null},o=W(),s=(i=typeof t=="function"?t:()=>[t,...n],()=>{return(f=i(),Array.isArray(f)?f:[f]).flat(1).map(p=>A.warp(p)).filter(Boolean);var f});var i;const a=f=>{const p=f[g.DISPOSE];p==null||p()},[l,c]=F(()=>{w.source_stack.push(o),(()=>{const f=r.children,p=s(),{parentNode:u,anchor:v}=r;if(!u)return;const M=Math.max(p.length,f.length);for(let T=0;T<M;T++){const R=p[T],E=f[T];E!==R&&(!R&&E?(E.remove(),a(E)):!E&&R?u.insertBefore(R,v):E&&R&&(u.replaceChild(R,E),a(E)))}r.children=p})(),w.source_stack.pop()}),d=X(r.anchor,f=>{r.parentNode=f,l()},"DOMNodeInserted"),m=X(r.anchor,f=>{r.children.forEach(Y),r.parentNode=null},"DOMNodeRemoved");return C(()=>{d(),m(),c(),Y(r.anchor),r.children.forEach(Y)}),W(f=>{var p;(p=f.__parent_source)==null||p.once("update_before",()=>{var u;r.children.forEach(Y),(u=f.__parent_source)==null||u.once("update_after",()=>{Y(r.anchor)})})}),r},render:(e,t)=>t.anchor});var Ae=function e(t,n){if(t===n)return!0;if(t&&n&&typeof t=="object"&&typeof n=="object"){if(t.constructor!==n.constructor)return!1;var r,o,s;if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(o=r;o--!=0;)if(!e(t[o],n[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((r=(s=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(o=r;o--!=0;)if(!Object.prototype.hasOwnProperty.call(n,s[o]))return!1;for(o=r;o--!=0;){var i=s[o];if(!e(t[i],n[i]))return!1}return!0}return t!=t&&n!=n},Qe=Ht({__proto__:null,default:Ae},[Ae]);function jt(e){if(function(t){return t&&typeof t=="object"&&t.constructor===Object}(e)){const t={};return Object.keys(e).forEach(n=>{t[n]=jt(e[n])}),t}return e}const Xe=e=>jt(_(e)),An=({items:e,render:t,needUpdate:n=(r,o)=>!((Qe==null?void 0:Ae)||Qe)(r,o)})=>{const r=me([]),o=W(),[s]=F(()=>{const i=typeof e=="function"?e():y(e);w.source_stack.push(o);try{((a,l)=>{const c=k(r);for(let m=0;m<Math.max(c.length,a.length);m++){const f=c[m],p=a[m];if(f!==void 0&&p!==void 0){if(!f.node||ke(()=>n(p,f.data))){const u=t(p,m,a,l,f.node);f.node=u,f.data=Xe(p)}}else if(f===void 0){const u=t(p,m,a,l);c.push({data:Xe(p),node:u})}else p===void 0&&(f.del=!0)}const d=c.filter(m=>m.del!==!0);r.value=d})(i,()=>s==null?void 0:s.effect.run())}finally{w.source_stack.pop()}});return()=>h(At,{},()=>r.value.filter(i=>!i.del).map(i=>i.node))},jn=["container"],Mn=(e,t,n)=>{let{container:r}=e,o=Tt(e,jn);const s=r||document.createElement("div");return document.body.appendChild(s),h(s,o,...n),C(()=>{var i;(i=s.parentElement)==null||i.removeChild(s)}),()=>null};function In(e,t,n=""){const r=t===":root",o=r?"":t,s=e.split(",").map(l=>l.trim()).filter(Boolean);let i=r?[""]:o.split(",").map(l=>l.trim()).filter(Boolean);var a;return(a=i,s.flatMap(l=>a.map(c=>[l,c]))).map(([l,c])=>l.startsWith("&")?l.replace(/&/g,c):`${c} ${l}`).map(l=>`${l.replace(n||"","")}${n||""}`.trim()).join(",")}const Ze=e=>e.nodeType===Node.DOCUMENT_NODE||e.nodeType===Node.DOCUMENT_FRAGMENT_NODE,et=(e,t,n)=>{const{updateCSSText:r,installSheet:o,uninstallSheet:s}=n;let i=!1;return{parseStyle:a=>{const l=function(c,d,{beautify:m=!1,scopedSelector:f=""}){const p=m?`
`:"",u=[{nodeSelector:d+f,cssObject:c}],v=[];for(;u.length>0;){const{nodeSelector:T,cssObject:R}=u.pop(),E={selector:T,cssText:""};for(const b in R){const L=R[b];if(typeof L=="object"){const B=In(b,T,f);u.push({nodeSelector:B,cssObject:L})}else{if(typeof L=="string"&&!L.trim()||L==null)continue;E.cssText+=`${M=b,M.replace(/[A-Z]/g,B=>`-${B.toLowerCase()}`)}: ${R[b]};${p}`}}E.cssText.trim()&&v.push(E)}var M;return v.map(T=>`${T.selector}{${T.cssText}}`).join(`
`).trim()}(e(),a,{scopedSelector:t});r(l)},applySheet:a=>{i||(i=!0,o(a))},removeSheet:a=>{i&&(i=!1,s(a))}}},tt=()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(36),Mt=e=>{const{scopedId:t,className:n}=e,r=!!t,o=document.createTextNode("");let s;(({props:c,scopedId:d,rootNodeSelector:m,styleOrFunc:f},p)=>{const u=(b=>{if(!b)throw new Error("styleOrFn is required.");return typeof b=="function"?b:()=>b})(c.styleFn||c.style||f),v=Nt(),{applySheet:M,removeSheet:T,parseStyle:R}=((b,L,B)=>B?((re,oe)=>{const U=new CSSStyleSheet,{parseStyle:Te,applySheet:Oe,removeSheet:Ce}=et(re,oe,{updateCSSText(N){U.replaceSync(N)},installSheet(N=document){Ze(N)&&(N.adoptedStyleSheets=[...N.adoptedStyleSheets,U])},uninstallSheet(N=document){Ze(N)&&(N.adoptedStyleSheets=[...N.adoptedStyleSheets].filter(ae=>ae!==U))}});return{sheet:U,parseStyle:Te,applySheet:Oe,removeSheet:Ce}})(b,L):((re,oe)=>{const U=document.createElement("style"),{parseStyle:Te,applySheet:Oe,removeSheet:Ce}=et(re,oe,{updateCSSText(N){U.innerHTML=N},installSheet(N){N.appendChild(U)},uninstallSheet(N){var ae;(ae=U.parentNode)==null||ae.removeChild(U)}});return{styleDOM:U,parseStyle:Te,applySheet:Oe,removeSheet:Ce}})(b,L))(()=>u(v),d?`[data-s-${d}]`:void 0,c.adopted),{[g.STYLESHEET_ROOT]:E}=v;F(()=>{let b=m;var L;c.adopted&&E&&E instanceof Node&&((L=E).nodeType===Node.DOCUMENT_NODE||L.nodeType===Node.DOCUMENT_FRAGMENT_NODE)&&(b=":root"),R(b)}),c.adopted||(E==null?void 0:E.nodeType)===Node.DOCUMENT_FRAGMENT_NODE?(M(E),C(()=>T(E))):(C(X(p,M,"DOMNodeInserted")),C(X(p,T,"DOMNodeRemoved")))})(e,o);const i=`s-${t}`.replace(/-([a-z])/g,function(c,d){return d.toUpperCase()}),a=c=>{if("dataset"in c&&typeof c.dataset=="object"){if(c[g.STYLESHEET_SCOPED]!==void 0&&c[g.STYLESHEET_SCOPED]!==i)return;c.dataset[i]="",c[g.STYLESHEET_SCOPED]=i}},l=c=>{if("dataset"in c&&typeof c.dataset=="object"){if(c[g.STYLESHEET_SCOPED]!==void 0&&c[g.STYLESHEET_SCOPED]!==i)return;delete c.dataset[i],delete c[g.STYLESHEET_SCOPED]}};return C(X(o,c=>{r&&(a(c),(d=>{s=new MutationObserver(m=>{for(const f of m){const{addedNodes:p,removedNodes:u}=f;p.forEach(v=>a(v)),u.forEach(v=>l(v))}}),s.observe(d,{childList:!0,subtree:!0})})(c)),n&&c instanceof Element&&c.classList.add(n)},"DOMNodeInserted")),C(X(o,c=>{var d;l(c),(d=s)==null||d.disconnect(),n&&c instanceof Element&&c.classList.remove(n)},"DOMNodeRemoved")),{anchor:o}},Pn=(e,t,[n])=>{const r=e.scoped?tt():void 0,o=`s-${tt()}`,{anchor:s}=Mt({props:e,styleOrFunc:n,rootNodeSelector:`.${o}`,className:o,scopedId:r});return()=>s},Un=(e,t,[n])=>{const{anchor:r}=Mt({props:ve({},e,{scoped:!1}),styleOrFunc:n,rootNodeSelector:":root"});return()=>r},zn=({component:e,render:t,fallback:n,error:r})=>{const o=x("fulfilled");Tn(async a=>{var l;!(l=a)||typeof l!="object"&&typeof l!="function"||typeof l.then!="function"||(o.value="pending",a.then(()=>o.value="fulfilled"),a.catch(()=>o.value="rejected"))});const s=e?h(e):t?h(()=>()=>A.warpView(t())):null,i=h(()=>()=>{switch(o.value){case"pending":return n();case"fulfilled":return s;case"rejected":return(r||n)()}});return()=>i},Hn=["tagName","render"],Wn=(e,t,n)=>{let{tagName:r="div",render:o}=e,s=Tt(e,Hn);const i=h(r,s,...n),a=i.attachShadow({mode:"open"});return(l=>{const c=W(),d=Nt();let m;const f=()=>{m=d[g.STYLESHEET_ROOT],d[g.STYLESHEET_ROOT]=l};c.on("update_before",f),c.on("update_after",()=>{d[g.STYLESHEET_ROOT]=m,m=void 0}),f()})(a),()=>{let l=o();return Array.isArray(l)||(l=[l]),l.map(c=>A.warp(c)).filter(Boolean).forEach(c=>a.appendChild(c)),i}},Fn=(e,...t)=>{const n=[];for(let r=0;r<e.length;r++){n.push(document.createTextNode(e[r]));const o=t[r],s=document.createTextNode("");typeof o=="function"?F(()=>s.textContent=o()):D(o)&&F(()=>s.textContent=String(o.value)),n.push(s)}return n},It=(e,...t)=>e.reduce((n,r,o)=>{var s;return n+=r,o<t.length&&(n+=y(typeof(s=t[o])=="function"?s():s)),n},""),Bn=(e,...t)=>{const n=function(r,o,s=!1){let i,a;const l=typeof r=="function";return l?(i=r,a=Ft):(i=r.get,a=r.set),new pn(i,a,l||!a,s)}(()=>It(e,...t));return C(()=>n.effect.stop()),n},$n=e=>{let t=null,n=null;return(r,...o)=>{const s=W(),i=x(t);if(!t){const a=(n||(n=e().then(l=>t=l))).then(l=>{k(i)||(i.value=l)});s.emit("throw",a)}return()=>i.value?h(i.value.default,r,...o):null}};var ee={__proto__:null,ErrorBoundary:Nn,Fragment:At,ReactiveList:An,Portal:Mn,Style:Pn,GlobalStyle:Un,Suspense:zn,Scope:Wn,text:Fn,raw:It,rawRef:Bn,lazy:$n};const Vn=(e,t)=>{const n=x("");return F(()=>{const r=k(n);r&&URL.revokeObjectURL(r),n.value=URL.createObjectURL(new Blob([y(e)],{type:"text/plain",...t}))}),C(()=>URL.revokeObjectURL(n.value)),n},Yn="modulepreload",qn=function(e,t){return new URL(e,t).href},nt={},Gn=function(t,n,r){if(!n||n.length===0)return t();const o=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=qn(s,r),s in nt)return;nt[s]=!0;const i=s.endsWith(".css"),a=i?'[rel="stylesheet"]':"";if(!!r)for(let d=o.length-1;d>=0;d--){const m=o[d];if(m.href===s&&(!i||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const c=document.createElement("link");if(c.rel=i?"stylesheet":Yn,i||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),i)return new Promise((d,m)=>{c.addEventListener("load",d),c.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t())},Jn=()=>Gn(()=>import("https://unpkg.com/@monaco-editor/loader@1.3.3/lib/umd/monaco-loader.js"),[],import.meta.url).then(()=>window.monaco_loader).then(e=>e.init()),Kn=({value:e,onChange:t,isDark:n,onSave:r,...o})=>{let s,i,a;return F(()=>{const l=y(n);a!=null&&a.editor&&(l?a.editor.setTheme("vs-dark"):a.editor.setTheme("vs"))}),C(()=>{s==null||s.dispose()}),D(e)&&H(e,l=>{(i==null?void 0:i.getValue())!==l&&(i==null||i.setValue(l))}),()=>h("div",{...o,ref:async l=>{a=await Jn(),i=a.editor.createModel(k(e),"typescript",a.Uri.file("main.ts")),i.onDidChangeContent(()=>t(i.getValue())),a.languages.typescript.typescriptDefaults.setCompilerOptions({jsx:"react"}),a.languages.typescript.typescriptDefaults.setDiagnosticsOptions({noSemanticValidation:!0,noSyntaxValidation:!0}),s=a.editor.create(l,{automaticLayout:!0,wordWrap:!0,theme:k(n)?"vs-dark":"vs"}),s.setModel(i),r&&s.addCommand(a.KeyMod.CtrlCmd|a.KeyCode.KeyS,()=>{r(i.getValue())})}})};class Qn{constructor(){te(this,"idx",0);te(this,"demos",[]);te(this,"currentDemo",null)}registerDemo(t,n,r){const o={id:this.idx++,name:t,version:n,code:r};this.demos.push(o),this.currentDemo||(this.currentDemo=o)}selectDemo(t){const n=this.demos.find(r=>r.id===Number(t));if(!n)throw new Error(`Cannot find demo with name ${name}`);return this.currentDemo=n,n}}const Xn=`import { rh, ref, mount, unref, setupWatch, inject, provide } from "@rhjs/rh";

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
`,J=new Qn;J.registerDemo("HelloWorld","0.1.1-dev.23",Zn);J.registerDemo("Counter","0.1.1-dev.23",Xn);J.registerDemo("TodoApp","0.1.1-dev.23",er);J.registerDemo("Counter","0.0.34",tr);const rt=x(J.currentDemo),Pt=()=>({mgr:J,currentDemo:rt,selectDemo(e){rt.value=J.selectDemo(e)},demos:J.demos}),nr=()=>{const{selectDemo:e,currentDemo:t,demos:n}=Pt();return()=>h("div",null,h("select",{onChange:r=>e(r.target.value)},n.map(r=>h("option",{value:r.id},r.name," @",r.version))))},Fe=({styleFn:e,isDark:t,...n},r,o)=>()=>h("div",{...n},h(ee.Style,{styleFn:()=>({height:"30px",display:"inline-flex",alignItems:"center",justifyContent:"center",paddingLeft:"12px",paddingRight:"12px",cursor:"pointer",userSelect:"none",marginLeft:"4px","&:hover":{backgroundColor:y(t)?"rgba(64,64,64,1)":"rgba(64,64,64,0.1)"},"&:active":{outline:"solid 1px",outlineColor:y(t)?"#fff":"rgba(64,64,64,1)"},...e==null?void 0:e()})}),o),rr=({isDark:e})=>()=>h(Fe,{onClick:()=>{D(e)&&(e.value=!k(e))},isDark:e},h("span",null,()=>y(e)?"🌘":"🌖"));function ot({isDark:e,href:t,target:n="_blank"},r,o){return()=>h(Fe,{isDark:e,onClick:()=>{window.open(t,n)}},h("a",{href:t,target:n,style:"text-decoration: none; color: inherit;"},o))}const or=({isDark:e})=>()=>h("div",null,h(ee.Style,{styleFn:()=>({paddingLeft:"12px",paddingRight:"12px",height:"100%",width:"calc(100% - 24px)",display:"grid",gridTemplateColumns:"minmax(0, 1fr) 12px minmax(0, 1fr)"})}),h("div",{style:"display: inline-flex; align-items: center;"},h("span",{style:"user-select: none;word-break: keep-all;white-space: nowrap;"},"🧩 ",h("b",null,"R"),h("small",null,"eactive"),h("b",null,"H"),h("small",null,"ydrate"),h("b",null,"JS")," PLAYGROUND"),h(rr,{isDark:e}),h(nr,null)),h("div",null),h("div",{style:"display: inline-flex; align-items: center; justify-content: right;"},h(ot,{isDark:e,href:"https://zhzluke96.github.io/rhjs-demos/#demo",target:"_self"},"demos"),h(ot,{isDark:e,href:"https://github.com/zhzLuke96/rh.js"},"github"))),{Style:sr}=ee,ir=()=>document.querySelectorAll("iframe").forEach(e=>e.style.pointerEvents="none"),ar=()=>document.querySelectorAll("iframe").forEach(e=>e.style.pointerEvents="auto"),cr=({isHorizontal:e,onResize:t,ref:n})=>{const[r,o,s]=Cn(!1),i=()=>o(!0),a=()=>o(!1),l=p=>{t(p.clientX,p.clientY)},c=p=>{const u=p.touches[0];t(u.clientX,u.clientY)},d=x(null);H(s,p=>{p?(ir(),window.addEventListener("mousemove",l),window.addEventListener("mouseup",a),window.addEventListener("touchmove",c),window.addEventListener("touchend",a)):(ar(),window.removeEventListener("mousemove",l),window.removeEventListener("mouseup",a),window.removeEventListener("touchmove",c),window.removeEventListener("touchend",a))}),H(d,p=>{p&&(p.addEventListener("mousedown",i,{passive:!0}),p.addEventListener("touchstart",i,{passive:!0}))}),C(()=>{var p,u;(p=y(d))==null||p.removeEventListener("mousedown",i),(u=y(d))==null||u.removeEventListener("touchstart",i)});const m=Dn("isDark"),f=be(()=>y(m)?"rgba(255,255,255,0.3)":"rgba(0,0,0,0.3)");return()=>h("div",{ref:p=>{d.value=p,n&&(n.value=p)}},h(sr,{styleFn:()=>({backgroundColor:y(s)?y(f):"",width:e?"100%":"12px",height:e?"12px":"100%",zIndex:y(s)?"10":"auto",cursor:e?"row-resize":"col-resize",userSelect:"none",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"12px","&:hover":{backgroundColor:y(f)}})}),"⚪⚪⚪")},lr=()=>{const e=`
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
`.trim(),t=URL.createObjectURL(new Blob([e],{type:"text/html"}));return C(()=>URL.revokeObjectURL(t)),`${t}#?embedded=${encodeURIComponent(location.origin)}`},ur=(e,t,n="")=>`
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
`.trim();function dr(e,t){const n=me(t),r=o=>{n.value=e(k(n),o)};return[He(n),r]}const hr=(e,t,n,r)=>{const o={sendToIframe(a){var l,c;(c=(l=k(e))==null?void 0:l.contentWindow)==null||c.postMessage(a,"*")},sendToDevtools(a){var l,c;(c=(l=k(t))==null?void 0:l.contentWindow)==null||c.postMessage(a,"*")}},s=()=>{const{codeInjected:a,codeURL:l}=y(n);if(!a){if(!l){setTimeout(s,3);return}requestAnimationFrame(()=>{o.sendToIframe({event:"CODE_UPDATE",value:l}),r({type:"CODE_INJECTED"})})}},i=a=>{var d,m;const[l,c]=xt(e,t);!l||!c||((m=(d=a.data)==null?void 0:d.includes)!=null&&m.call(d,"Debugger.enable")&&(console.log("Debugger.enable"),r({type:"Debugger.enable"}),s()),a.source===l.contentWindow?c.contentWindow.postMessage(a.data,"*"):a.source===c.contentWindow&&l.contentWindow.postMessage({event:"DEV",data:a.data},"*"))};return window.addEventListener("message",i),C(()=>window.removeEventListener("message",i)),o},pr=(e,t)=>{const{importMap:n,isDark:r}=e,o=be(()=>{const s=ur(k(r),JSON.stringify({imports:y(n)}));return URL.createObjectURL(new Blob([s],{type:"text/html"}))});return H(o,(s,i)=>{i&&URL.revokeObjectURL(i),t({type:"HTML_CHANGED",iframeSrc:s||""})}),C(()=>URL.revokeObjectURL(k(o)||"")),{iframeSrc:o}},fr=e=>{const{isDark:t,code:n}=e,r=me(null),o=me(null),s=u=>{var v;return(v=u.contentDocument)==null?void 0:v.documentElement.classList.toggle("dark",k(t))},i=u=>{const v=k(r);v&&(v.src=u)},a=()=>{var u,v;(v=(u=k(r))==null?void 0:u.contentWindow)==null||v.location.reload()},l=()=>{var u,v;(v=(u=k(o))==null?void 0:u.contentWindow)==null||v.location.reload()};H(()=>y(t),u=>{const v=y(r);v&&s(v)});const[c,d]=dr((u,v)=>{switch(v.type){case"IFRAME_READY":s(v.iframe);let M=u.codeInjected;return{...u,codeInjected:M,iframeReady:!0};case"DEVTOOLS_IFRAME_READY":return{...u,devtoolsIframeReady:!0};case"DEV_LOADED":return{...u,devLoaded:!0};case"HTML_CHANGED":return i(v.iframeSrc),l(),{...u,iframeReady:!1,devtoolsIframeReady:!1,devLoaded:!1,codeInjected:!1,darkInjected:!1};case"HTML_RELOAD":return setTimeout(()=>{a(),l()}),{...u,iframeReady:!1,devtoolsIframeReady:!1,devLoaded:!1,codeInjected:!1,darkInjected:!1};case"CODE_UPDATE":return{...u,codeURL:v.codeURL};case"CODE_INJECTED":return{...u,codeInjected:!0}}return u},{iframeReady:!1,devtoolsIframeReady:!1,devLoaded:!1,codeInjected:!1,codeURL:k(n)}),{sendToDevtools:m,sendToIframe:f}=hr(r,o,c,d);H(()=>y(n),u=>{d({type:"CODE_UPDATE",codeURL:u}),c.value.iframeReady&&requestAnimationFrame(()=>{f({event:"CODE_UPDATE",value:u}),d({type:"CODE_INJECTED"})})});const{iframeSrc:p}=pr(e,d);return H(r,u=>{u==null||u.addEventListener("load",()=>d({type:"IFRAME_READY",iframe:u}))}),H(o,u=>{u==null||u.addEventListener("load",()=>d({type:"DEVTOOLS_IFRAME_READY",devIframe:u}))}),{iframeSrc:p,iframeRef:r,devtoolsIframeRef:o,previewState:c,dispatch:d,sendToDevtools:m,sendToIframe:f}},mr=e=>{const{importMap:t,code:n,devtools:r,isDark:o,...s}=e,i=x(null),{iframeSrc:a,iframeRef:l,devtoolsIframeRef:c,previewState:d,dispatch:m}=fr(e),f=lr(),p=be(()=>`width: 100%; height: 100%; ${y(r)?"display: block;":"display: none;"}`),u=x(.625),v=x(null),M=(T,R)=>{const[E,b]=xt(i,v);if(!E||!b)return;let L,B;const re=E.getBoundingClientRect();L=R-re.top-b.offsetHeight/2,B=E.offsetHeight-b.offsetHeight;const oe=L/B;u.value=oe};return()=>h("div",{...s,ref:i},h(ee.Style,{styleFn:()=>{const T=y(u);return{display:"grid",height:"100%",width:"100%",gridTemplateRows:y(r)?`30px minmax(0, ${T}fr) 12px minmax(0, ${1-T}fr)`:"30px minmax(0, 1fr)"}}}),h("div",{style:"border-bottom: 1px solid;border-top: 1px solid;overflow: hidden;"},h(Fe,{title:"reload page",isDark:o,onClick:()=>m({type:"HTML_RELOAD"})},"♻️relaod")),h("iframe",{ref:l,src:a,style:"width: 100%;height: 100%;",frameBorder:0,sandbox:"allow-popups-to-escape-sandbox allow-scripts allow-popups allow-forms allow-pointer-lock allow-top-navigation allow-modals allow-same-origin"}),h("div",null,h(cr,{ref:v,isHorizontal:!0,onResize:M})),h("iframe",{ref:c,style:p,src:f,frameBorder:"0"}))},vr=({isDark:e})=>()=>h(ee.GlobalStyle,{styleFn:()=>({fontFamily:"'Karla', system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",lineHeight:"1.5",fontWeight:"400",colorScheme:y(e)?"light dark":"dark",color:y(e)?"rgba(255, 255, 255, 0.87)":"#242424",backgroundColor:y(e)?"#333":"#fff",fontSynthesis:"none",textRendering:"optimizeLegibility","-webkitFontSmoothing":"antialiased","-moz-osxFontSmoothing":"grayscale","-webkitTextSizeAdjust":"100%",height:"100vh",width:"100vw",body:{margin:"0",minWidth:"100vw",minHeight:"100vh",width:"100%",height:"100%"},"#app":{width:"100%",height:"100%"}})});function gr(){return new Worker(""+new URL("complier.worker-026b4f92.js",import.meta.url).href)}class yr{constructor(){te(this,"registry",{})}registerWorker(t,n){this.registry[t]?console.warn(`Worker of type ${t} already registered.`):this.registry[t]=n}removeWorker(t){delete this.registry[t]}getWorker(t){const n=this.registry[t];if(n)return n;throw new Error(`No worker of type ${t} registered.`)}postMessage(t,n){this.getWorker(t).postMessage(n)}listenRecv(t,n){const r=this.getWorker(t);let o;const s=i=>{const{message_token:a}=i.data||{};if(a!==n)return;const l={...i.data};delete l.message_token,o(l),r.removeEventListener("message",s)};return r.addEventListener("message",s),{recv:new Promise((i,a)=>{o=i}),dispose:()=>r.removeEventListener("message",s)}}}class _r{constructor(){te(this,"registry",new yr);this.initialize()}async initialize(){this.registry.registerWorker("complier",new gr)}worker_caller(t,n){const r=Math.random().toString(36).slice(2),o={...n,message_token:r};return this.registry.postMessage(t,o),this.registry.listenRecv(t,r)}compileFile(t){return this.worker_caller("complier",{event:"BABEL",payload:{file:t,compile_options:{}}})}compileFiles(t){return this.worker_caller("complier",{event:"ROLLUP",payload:{files:t,compile_options:{}}})}}const st=new _r;w.global_source.on("throw",console.error);const wr=()=>{let e=null;return C(()=>e==null?void 0:e.dispose()),{compileFile(t){return e==null||e.dispose(),e=st.compileFile(t),e.recv},compileFiles(t){return e==null||e.dispose(),e=st.compileFiles(t),e.recv}}},Er='import("@rhjs/rh").then(({cs, ElementSource}) => window.dispose = () => (cs || ElementSource).global_source.emit("unmount"));',Sr=()=>{var l;const e=x(!0);xn("isDark",e);const{currentDemo:t}=Pt(),n=be(()=>{var c;return{"@rhjs/rh":`https://unpkg.com/@rhjs/rh@${((c=t.value)==null?void 0:c.version)||"latest"}/dist/main.module.mjs`,"@rhjs/fluent-web-components":"https://unpkg.com/@rhjs/fluent-web-components@latest/dist/main.module.mjs"}}),r=x(""),o=Vn(r,{type:"text/javascript"}),s=x(((l=t.value)==null?void 0:l.code)||""),i=wr(),a=async()=>{const c=k(s);if(!c)return;const d=await i.compileFile({filename:"main.tsx",source:c});r.value=`${d.compiled}
${Er}`};return kn(a),H(t,c=>{c&&s.value!==c.code&&(s.value=c.code,a())}),()=>h("div",null,h(vr,{isDark:e}),h(ee.Style,{styleFn:()=>({position:"relative",display:"flex",flexFlow:"column",width:"100%",height:"100%",maxWidth:"100vw",maxHeight:"100vh",overflow:"hidden"})}),h("header",{style:"height: 30px; width: 100%;"},h(or,{isDark:e})),h("div",{style:"flex: 1;"},h(ee.Style,{styleFn:()=>({position:"relative",display:"flex",flexFlow:"row",width:"100%",height:"100%"})}),h(Kn,{style:"flex: 1;",value:s,onChange:c=>s.value=c,onSave:a,isDark:e}),h(mr,{style:"flex: 1;",importMap:n,code:o,devtools:!0,isDark:e})))};On("#app",Sr);
