var yt=Object.defineProperty;var wt=(e,t,n)=>t in e?yt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var H=(e,t,n)=>(wt(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();function bt(e,t){const n=Object.create(null),o=e.split(",");for(let s=0;s<o.length;s++)n[o[s]]=!0;return t?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const kt=()=>{},_t=Object.assign,xt=Object.prototype.hasOwnProperty,ie=(e,t)=>xt.call(e,t),U=Array.isArray,oe=e=>He(e)==="[object Map]",ge=e=>typeof e=="symbol",ae=e=>e!==null&&typeof e=="object",St=Object.prototype.toString,He=e=>St.call(e),Et=e=>He(e).slice(8,-1),ye=e=>typeof e=="string"&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,we=(e,t)=>!Object.is(e,t);let Tt;function $e(e,t=Tt){t&&t.active&&t.effects.push(e)}const be=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Ge=e=>(e.w&I)>0,qe=e=>(e.n&I)>0,ue=new WeakMap;let G=0,I=1;const he=30;let L;const W=Symbol(""),pe=Symbol("");class Ye{constructor(t,n=null,o){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,$e(this,o)}run(){if(!this.active)return this.fn();let t=L,n=V;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=L,L=this,V=!0,I=1<<++G,G<=he?(({deps:o})=>{if(o.length)for(let s=0;s<o.length;s++)o[s].w|=I})(this):Ee(this),this.fn()}finally{G<=he&&(o=>{const{deps:s}=o;if(s.length){let a=0;for(let i=0;i<s.length;i++){const r=s[i];Ge(r)&&!qe(r)?r.delete(o):s[a++]=r,r.w&=~I,r.n&=~I}s.length=a}})(this),I=1<<--G,L=this.parent,V=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){L===this?this.deferStop=!0:this.active&&(Ee(this),this.onStop&&this.onStop(),this.active=!1)}}function Ee(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}function q(e,t){e.effect&&(e=e.effect.fn);const n=new Ye(e);t&&(_t(n,t),t.scope&&$e(n,t.scope)),t&&t.lazy||n.run();const o=n.run.bind(n);return o.effect=n,o}let V=!0;const Je=[];function Qe(){Je.push(V),V=!1}function Ke(){const e=Je.pop();V=e===void 0||e}function O(e,t,n){if(V&&L){let o=ue.get(e);o||ue.set(e,o=new Map);let s=o.get(n);s||o.set(n,s=be()),Xe(s)}}function Xe(e,t){let n=!1;G<=he?qe(e)||(e.n|=I,n=!Ge(e)):n=!e.has(L),n&&(e.add(L),L.deps.push(e))}function F(e,t,n,o,s,a){const i=ue.get(e);if(!i)return;let r=[];if(t==="clear")r=[...i.values()];else if(n==="length"&&U(e)){const l=Number(o);i.forEach((c,h)=>{(h==="length"||h>=l)&&r.push(c)})}else switch(n!==void 0&&r.push(i.get(n)),t){case"add":U(e)?ye(n)&&r.push(i.get("length")):(r.push(i.get(W)),oe(e)&&r.push(i.get(pe)));break;case"delete":U(e)||(r.push(i.get(W)),oe(e)&&r.push(i.get(pe)));break;case"set":oe(e)&&r.push(i.get(W))}if(r.length===1)r[0]&&fe(r[0]);else{const l=[];for(const c of r)c&&l.push(...c);fe(be(l))}}function fe(e,t){const n=U(e)?e:[...e];for(const o of n)o.computed&&Te(o);for(const o of n)o.computed||Te(o)}function Te(e,t){(e!==L||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Ct=bt("__proto__,__v_isRef,__isVue"),Ze=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ge)),Dt=et(),Rt=et(!0),Ce=Ot();function Ot(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const o=_(this);for(let a=0,i=this.length;a<i;a++)O(o,0,a+"");const s=o[t](...n);return s===-1||s===!1?o[t](...n.map(_)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Qe();const o=_(this)[t].apply(this,n);return Ke(),o}}),e}function Lt(e){const t=_(this);return O(t,0,e),t.hasOwnProperty(e)}function et(e=!1,t=!1){return function(n,o,s){if(o==="__v_isReactive")return!e;if(o==="__v_isReadonly")return e;if(o==="__v_isShallow")return t;if(o==="__v_raw"&&s===(e?t?Bt:ot:t?Wt:nt).get(n))return n;const a=U(n);if(!e){if(a&&ie(Ce,o))return Reflect.get(Ce,o,s);if(o==="hasOwnProperty")return Lt}const i=Reflect.get(n,o,s);return(ge(o)?Ze.has(o):Ct(o))?i:(e||O(n,0,o),t?i:D(i)?a&&ye(o)?i:i.value:ae(i)?e?Q(i):st(i):i)}}function Nt(e=!1){return function(t,n,o,s){let a=t[n];if(se(a)&&D(a)&&!D(o))return!1;if(!e&&(it(o)||se(o)||(a=_(a),o=_(o)),!U(t)&&D(a)&&!D(o)))return a.value=o,!0;const i=U(t)&&ye(n)?Number(n)<t.length:ie(t,n),r=Reflect.set(t,n,o,s);return t===_(s)&&(i?we(o,a)&&F(t,"set",n,o):F(t,"add",n,o)),r}}const Mt={get:Dt,set:Nt(),deleteProperty:function(e,t){const n=ie(e,t),o=Reflect.deleteProperty(e,t);return o&&n&&F(e,"delete",t,void 0),o},has:function(e,t){const n=Reflect.has(e,t);return ge(t)&&Ze.has(t)||O(e,0,t),n},ownKeys:function(e){return O(e,0,U(e)?"length":W),Reflect.ownKeys(e)}},jt={get:Rt,set:(e,t)=>!0,deleteProperty:(e,t)=>!0},ke=e=>e,ce=e=>Reflect.getPrototypeOf(e);function X(e,t,n=!1,o=!1){const s=_(e=e.__v_raw),a=_(t);n||(t!==a&&O(s,0,t),O(s,0,a));const{has:i}=ce(s),r=o?ke:n?_e:Y;return i.call(s,t)?r(e.get(t)):i.call(s,a)?r(e.get(a)):void(e!==s&&e.get(t))}function Z(e,t=!1){const n=this.__v_raw,o=_(n),s=_(e);return t||(e!==s&&O(o,0,e),O(o,0,s)),e===s?n.has(e):n.has(e)||n.has(s)}function ee(e,t=!1){return e=e.__v_raw,!t&&O(_(e),0,W),Reflect.get(e,"size",e)}function De(e){e=_(e);const t=_(this);return ce(t).has.call(t,e)||(t.add(e),F(t,"add",e,e)),this}function Re(e,t){t=_(t);const n=_(this),{has:o,get:s}=ce(n);let a=o.call(n,e);a||(e=_(e),a=o.call(n,e));const i=s.call(n,e);return n.set(e,t),a?we(t,i)&&F(n,"set",e,t):F(n,"add",e,t),this}function Oe(e){const t=_(this),{has:n,get:o}=ce(t);let s=n.call(t,e);s||(e=_(e),s=n.call(t,e)),o&&o.call(t,e);const a=t.delete(e);return s&&F(t,"delete",e,void 0),a}function Le(){const e=_(this),t=e.size!==0,n=e.clear();return t&&F(e,"clear",void 0,void 0),n}function te(e,t){return function(n,o){const s=this,a=s.__v_raw,i=_(a),r=t?ke:e?_e:Y;return!e&&O(i,0,W),a.forEach((l,c)=>n.call(o,r(l),r(c),s))}}function ne(e,t,n){return function(...o){const s=this.__v_raw,a=_(s),i=oe(a),r=e==="entries"||e===Symbol.iterator&&i,l=e==="keys"&&i,c=s[e](...o),h=n?ke:t?_e:Y;return!t&&O(a,0,l?pe:W),{next(){const{value:m,done:u}=c.next();return u?{value:m,done:u}:{value:r?[h(m[0]),h(m[1])]:h(m),done:u}},[Symbol.iterator](){return this}}}}function P(e){return function(...t){return e!=="delete"&&this}}function At(){const e={get(s){return X(this,s)},get size(){return ee(this)},has:Z,add:De,set:Re,delete:Oe,clear:Le,forEach:te(!1,!1)},t={get(s){return X(this,s,!1,!0)},get size(){return ee(this)},has:Z,add:De,set:Re,delete:Oe,clear:Le,forEach:te(!1,!0)},n={get(s){return X(this,s,!0)},get size(){return ee(this,!0)},has(s){return Z.call(this,s,!0)},add:P("add"),set:P("set"),delete:P("delete"),clear:P("clear"),forEach:te(!0,!1)},o={get(s){return X(this,s,!0,!0)},get size(){return ee(this,!0)},has(s){return Z.call(this,s,!0)},add:P("add"),set:P("set"),delete:P("delete"),clear:P("clear"),forEach:te(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=ne(s,!1,!1),n[s]=ne(s,!0,!1),t[s]=ne(s,!1,!0),o[s]=ne(s,!0,!0)}),[e,n,t,o]}const[zt,Pt,It,Ut]=At();function tt(e,t){const n=t?e?Ut:It:e?Pt:zt;return(o,s,a)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?o:Reflect.get(ie(n,s)&&s in o?n:o,s,a)}const Vt={get:tt(!1,!1)},Ft={get:tt(!0,!1)},nt=new WeakMap,Wt=new WeakMap,ot=new WeakMap,Bt=new WeakMap;function st(e){return se(e)?e:rt(e,!1,Mt,Vt,nt)}function Q(e){return rt(e,!0,jt,Ft,ot)}function rt(e,t,n,o,s){if(!ae(e)||e.__v_raw&&(!t||!e.__v_isReactive))return e;const a=s.get(e);if(a)return a;const i=(r=e).__v_skip||!Object.isExtensible(r)?0:function(c){switch(c){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}(Et(r));var r;if(i===0)return e;const l=new Proxy(e,i===2?o:n);return s.set(e,l),l}function se(e){return!(!e||!e.__v_isReadonly)}function it(e){return!(!e||!e.__v_isShallow)}function _(e){const t=e&&e.__v_raw;return t?_(t):e}const Y=e=>ae(e)?st(e):e,_e=e=>ae(e)?Q(e):e;function at(e){V&&L&&Xe((e=_(e)).dep||(e.dep=be()))}function ct(e,t){const n=(e=_(e)).dep;n&&fe(n)}function D(e){return!(!e||e.__v_isRef!==!0)}function N(e){return lt(e,!1)}function me(e){return lt(e,!0)}function lt(e,t){return D(e)?e:new Ht(e,t)}class Ht{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:_(t),this._value=n?t:Y(t)}get value(){return at(this),this._value}set value(t){const n=this.__v_isShallow||it(t)||se(t);t=n?t:_(t),we(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Y(t),ct(this))}}function k(e){return D(e)?e.value:e}var dt;class $t{constructor(t,n,o,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[dt]=!1,this._dirty=!0,this.effect=new Ye(t,()=>{this._dirty||(this._dirty=!0,ct(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=o}get value(){const t=_(this);return at(t),!t._dirty&&t._cacheable||(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Gt(e,t,n=!1){let o,s;const a=typeof e=="function";return a?(o=e,s=kt):(o=e.get,s=e.set),new $t(o,s,a||!s,n)}dt="__v_isReadonly";function re(){return re=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},re.apply(this,arguments)}var Ne,Me,qt=(Ne=function(e){var t=Object.prototype.hasOwnProperty,n="~";function o(){}function s(l,c,h){this.fn=l,this.context=c,this.once=h||!1}function a(l,c,h,m,u){if(typeof h!="function")throw new TypeError("The listener must be a function");var p=new s(h,m||l,u),d=n?n+c:c;return l._events[d]?l._events[d].fn?l._events[d]=[l._events[d],p]:l._events[d].push(p):(l._events[d]=p,l._eventsCount++),l}function i(l,c){--l._eventsCount==0?l._events=new o:delete l._events[c]}function r(){this._events=new o,this._eventsCount=0}Object.create&&(o.prototype=Object.create(null),new o().__proto__||(n=!1)),r.prototype.eventNames=function(){var l,c,h=[];if(this._eventsCount===0)return h;for(c in l=this._events)t.call(l,c)&&h.push(n?c.slice(1):c);return Object.getOwnPropertySymbols?h.concat(Object.getOwnPropertySymbols(l)):h},r.prototype.listeners=function(l){var c=this._events[n?n+l:l];if(!c)return[];if(c.fn)return[c.fn];for(var h=0,m=c.length,u=new Array(m);h<m;h++)u[h]=c[h].fn;return u},r.prototype.listenerCount=function(l){var c=this._events[n?n+l:l];return c?c.fn?1:c.length:0},r.prototype.emit=function(l,c,h,m,u,p){var d=n?n+l:l;if(!this._events[d])return!1;var f,w,g=this._events[d],b=arguments.length;if(g.fn){switch(g.once&&this.removeListener(l,g.fn,void 0,!0),b){case 1:return g.fn.call(g.context),!0;case 2:return g.fn.call(g.context,c),!0;case 3:return g.fn.call(g.context,c,h),!0;case 4:return g.fn.call(g.context,c,h,m),!0;case 5:return g.fn.call(g.context,c,h,m,u),!0;case 6:return g.fn.call(g.context,c,h,m,u,p),!0}for(w=1,f=new Array(b-1);w<b;w++)f[w-1]=arguments[w];g.fn.apply(g.context,f)}else{var S,E=g.length;for(w=0;w<E;w++)switch(g[w].once&&this.removeListener(l,g[w].fn,void 0,!0),b){case 1:g[w].fn.call(g[w].context);break;case 2:g[w].fn.call(g[w].context,c);break;case 3:g[w].fn.call(g[w].context,c,h);break;case 4:g[w].fn.call(g[w].context,c,h,m);break;default:if(!f)for(S=1,f=new Array(b-1);S<b;S++)f[S-1]=arguments[S];g[w].fn.apply(g[w].context,f)}}return!0},r.prototype.on=function(l,c,h){return a(this,l,c,h,!1)},r.prototype.once=function(l,c,h){return a(this,l,c,h,!0)},r.prototype.removeListener=function(l,c,h,m){var u=n?n+l:l;if(!this._events[u])return this;if(!c)return i(this,u),this;var p=this._events[u];if(p.fn)p.fn!==c||m&&!p.once||h&&p.context!==h||i(this,u);else{for(var d=0,f=[],w=p.length;d<w;d++)(p[d].fn!==c||m&&!p[d].once||h&&p[d].context!==h)&&f.push(p[d]);f.length?this._events[u]=f.length===1?f[0]:f:i(this,u)}return this},r.prototype.removeAllListeners=function(l){var c;return l?this._events[c=n?n+l:l]&&i(this,c):(this._events=new o,this._eventsCount=0),this},r.prototype.off=r.prototype.removeListener,r.prototype.addListener=r.prototype.on,r.prefixed=n,r.EventEmitter=r,e.exports=r},Ne(Me={exports:{}}),Me.exports);class Yt{constructor(t){this.data=void 0,this.next=void 0,this.data=t,this.next=null}}class Jt{constructor(){this.head=void 0,this.tail=void 0,this.size=void 0,this.head=null,this.tail=null,this.size=0}enqueue(t){let n=new Yt(t);this.isEmpty()?(this.head=n,this.tail=n):(this.tail&&(this.tail.next=n),this.tail=n),this.size++}dequeue(){if(this.isEmpty())return null;{var t,n;let o=((t=this.head)==null?void 0:t.data)||null;return this.head=((n=this.head)==null?void 0:n.next)||null,this.isEmpty()&&(this.tail=null),this.size--,o}}remove(t){let n=this.head,o=null;for(;n;){if(n.data===t)return o?(o.next=n.next,n.next||(this.tail=o)):(this.head=n.next,this.head||(this.tail=null)),void this.size--;o=n,n=n.next}}isEmpty(){return this.size===0}}const Qt=new class{constructor(){this.frameDeadline=void 0,this.taskQueue=void 0,this.channel=void 0,this.messagePort=void 0,this.triggerPort=void 0,this.rafTriggered=void 0,this.activeFrameTime=33.33,this.frameDeadline=performance.now()+this.activeFrameTime,this.taskQueue=new Jt,this.channel=new MessageChannel,this.messagePort=this.channel.port1,this.triggerPort=this.channel.port2,this.rafTriggered=!1,this.messagePort.onmessage=()=>{this.handleTask()}}timeRemaining(){return Math.max(0,this.frameDeadline-performance.now())}execTask(e){return e({timeRemaining:()=>this.timeRemaining()})}handleTask(){if(this.timeRemaining()<=0)return void this.trigger();let e=this.taskQueue.dequeue();for(;e;)try{this.execTask(e)}finally{if(this.timeRemaining()<=0)break;e=this.taskQueue.dequeue()}this.trigger()}trigger(){this.rafTriggered||this.taskQueue.size!==0&&(this.rafTriggered=!0,requestAnimationFrame(e=>{this.frameDeadline=e+this.activeFrameTime,this.rafTriggered=!1,e<this.frameDeadline&&this.triggerPort.postMessage(null)}))}async runTask(e){return!this.rafTriggered&&performance.now()<this.frameDeadline?this.execTask(e):new Promise((t,n)=>{this.taskQueue.enqueue(()=>{try{t(this.execTask(e))}catch(o){n(o)}}),this.trigger()})}buildTask(e){let t,n,o=!1,s=!1;const a=new Promise((r,l)=>{n=r}),i=r=>{if(!o)return t=e(r),s=!0,n(t),t;n(void 0)};return this.taskQueue.enqueue(i),this.trigger(),{cancel:()=>{o=!0,n(void 0),this.taskQueue.size<=5e3&&this.taskQueue.remove(i)},promise:a,state:()=>({isCancelled:o,isDone:s,result:t})}}};class Kt{constructor(){this.tasks=new Map}runTask(t,n){const o=this.tasks.get(t);o&&o.cancel();const s=Qt.buildTask(n);return this.tasks.set(t,s),s.promise.finally(()=>{this.tasks.get(t)===s&&this.tasks.delete(t)}),s}dispose(){this.tasks.forEach(t=>t.cancel()),this.tasks.clear()}}const Xt=Object.prototype.hasOwnProperty;function je(e,t){if(Object.is(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;const n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(let s=0;s<n.length;s++)if(!Xt.call(t,n[s])||!Object.is(e[n[s]],t[n[s]]))return!1;return!0}const de=(e,t)=>{if(e.has_outside_effect||t.has_outside_effect)throw new Error("View has outside effect, cannot patch");if(e instanceof A&&t instanceof A)return(n=e).update((o=t).DOMProps,o.DOMChildren),n.DOMChildren=o.DOMChildren,void(n.DOMProps=o.DOMProps);var n,o;const s=z.view2component.get(e),a=z.view2component.get(t);if(s&&a)return s.props=a.props,s.state=a.state,s.children=a.children,void s.update();((i,r)=>{r.initialize(),i.patchChildren(r.children)})(e,t)},Ae=e=>{var t,n,o;return{node:e,view:v.dom2view.get(e),key:(t=v.dom2view.get(e))==null?void 0:t.key,keyed:(o=(n=v.dom2view.get(e))==null?void 0:n.key,o!=null)}};class v{static getNextIndex(){return++v.index}static createAnchor(){const t=document.createTextNode("");return t[v.symbols.ANCHOR]=!0,t}static isAnchor(t){return t instanceof Text&&t[v.symbols.ANCHOR]}constructor(t=v.createAnchor()){this.__index=v.getNextIndex(),this.scheduler=new Kt,this.events=new qt,this.anchor=void 0,this.children=[],this.context={},this.parentView=v.globalView,this.is_container=!1,this.has_outside_effect=!1,this.key=void 0,this.initialized=!1,this.isFirstPatched=!1,this.zoneFlag="",this.anchor=t,v.dom2view.set(this.anchor,this),this.events.on("error",n=>{var o;this.events.listenerCount("error")===1&&((o=this.parentView)==null||o.events.emit("error",n))}),this.events.on("throw",n=>{var o;this.events.listenerCount("throw")===1&&((o=this.parentView)==null||o.events.emit("throw",n))})}initialize(){this.initialized||(this.initialized=!0,this.events.emit("init_before"),this.events.emit("init"),this.events.emit("init_after"))}mount(t,n){this.initialize(),this.events.emit("mount_before",t,this.parentView),t.insertBefore(this.anchor,n||null),this.mountChildren(t),this.events.emit("mounted",t,this.parentView),this.events.emit("mount_after",t,this.parentView)}mountChildren(t){if(!t.contains(this.anchor))throw new Error("Cannot mount children before anchor, anchor not contained in parentElement.");for(const n of this.children){t.insertBefore(n,this.anchor);const o=v.dom2view.get(n);if(o){if(o===this)throw new Error("Cannot mount children to self");o.parentView=this,o.mount(t,n)}}}patchChildren(t){const n=t.flat(64).map(a=>function(i){if(i==null)return null;if(i instanceof Node)return i;if(D(i)||typeof i=="function"){const r=new v;let l;if(r.has_outside_effect=!0,D(i)){const c=document.createTextNode("");l=q(()=>{const h=String(k(i));h!==c.textContent&&(c.textContent=h)},{lazy:!1}),r.patchChildren([c])}else l=q(()=>{const c=i();r.patchChildren(Array.isArray(c)?c:[c])},{lazy:!1});return r.events.on("unmounted",()=>{l.effect.stop()}),r.anchor}return document.createTextNode(String(i))}(a)).filter(Boolean);if(this.children.length===0&&n.length===0)return;const o=function(a,i){const r=[],l=a.map(Ae),c=i.map(Ae);if(l.length===0)return c.map((u,p)=>({type:"remove",node:u,index:p}));if(c.length===0)return l.map((u,p)=>({type:"insert",index:p,node:u}));for(let u=0;u<Math.max(l.length,c.length);u++){var h,m;const p=l[u],d=c[u];if((p==null?void 0:p.node)===(d==null?void 0:d.node)||p!=null&&p.view&&d!=null&&d.view&&(p==null?void 0:p.view)===(d==null?void 0:d.view)||p!=null&&p.keyed&&d!=null&&d.keyed)continue;if(!(!((p==null?void 0:p.node)instanceof Text&&(d==null?void 0:d.node)instanceof Text)||v.isAnchor(p.node)||v.isAnchor(d.node)||(h=p.view)!=null&&h.has_outside_effect||(m=d.view)!=null&&m.has_outside_effect)){p.node.textContent!==d.node.textContent&&r.push({type:"text",oldNode:d,newNode:p,index:u});continue}const f=()=>{p&&!p.keyed&&r.push({type:"insert",index:u,node:p}),d&&!d.keyed&&r.push({type:"remove",index:u,node:d})};if(p&&d)if(p||d)if(p.keyed||d.keyed)f();else if(p.view||d.view)if(p.view&&d.view)if(p.view.has_outside_effect||d.view.has_outside_effect)f();else{const w=d.view,g=p.view,b=w instanceof A,S=g instanceof A;if(b&&!S||!b&&S){f();continue}if(b&&S){w.elem.nodeName===g.elem.nodeName?r.push({type:"dom-update",oldNode:d,newNode:p,index:u}):f();continue}const E=z.view2component.get(w),T=z.view2component.get(g);if(!E&&T||E&&!T){f();continue}if(E!=null&&E._component_type&&T!=null&&T._component_type&&E._component_type!==T._component_type){f();continue}r.push({type:"view-patch",oldNode:d,newNode:p,index:u})}else f();else f();else f();else f()}for(let u=0;u<l.length;u++){const p=l[u];if(p==null||!p.keyed)continue;const d=c.findIndex(f=>f.key===p.key);r.push(d!==u?d!==-1?{type:"move",to:u,node:c[d],newNode:p}:{type:"insert",index:u,node:p}:p.view instanceof A?{type:"dom-update",oldNode:c[d],newNode:p,index:u}:{type:"view-patch",oldNode:c[d],newNode:p,index:u})}for(let u=0;u<c.length;u++){const p=c[u];p!=null&&p.keyed&&l.findIndex(d=>d.key===p.key)===-1&&r.push({type:"remove",index:u,node:p})}return r}(n,this.children);if(o.length===0)return;const s=()=>{const a=this.patchAll(o,n);this.children=a.filter(Boolean)};this.isFirstPatched?this.scheduler.runTask("patch-children",s):(s(),this.isFirstPatched=!0)}patchAll(t,n){const o=n.slice();this.children.forEach((i,r)=>{o.length>r&&(o[r]=i)}),t.forEach(i=>{switch(i.type){case"move":o[i.to]=i.node.node;break;case"insert":o[i.index]=i.node.node;break;case"dom-update":case"text":case"view-patch":o[i.index]=i.oldNode.node}});const s=i=>{var r;return this.anchor.parentNode?o[i]&&((r=o[i])==null?void 0:r.parentNode)===this.anchor.parentNode?o[i]:i>=o.length?null:s(i+1):null};for(const i of t)switch(i.type){case"move":{var a;const{to:r,node:l,newNode:c}=i;l.view instanceof v&&c.view instanceof v&&de(l.view,c.view);const h=s(r+1),m=(h==null?void 0:h.parentNode)===this.anchor.parentNode?h:this.anchor;this.anchor.parentNode&&(l.view?(l.view.parentView=this,l.view.mount(this.anchor.parentNode,m)):this.anchor.parentNode.insertBefore(l.node,m)),(a=c.view)==null||a.unmount();break}case"insert":{const{node:r,index:l}=i,c=s(l+1),h=(c==null?void 0:c.parentNode)===this.anchor.parentNode?c:this.anchor;this.anchor.parentNode&&(r.view?(r.view.parentView=this,r.view.mount(this.anchor.parentNode,h)):this.anchor.parentNode.insertBefore(r.node,h));break}case"remove":break;case"view-patch":{const{newNode:r,oldNode:l}=i,c=r.view,h=l.view;de(h,c),c!==h&&(c.children=[],c.unmount());break}case"dom-update":{const{newNode:r,oldNode:l}=i,c=r.view,h=l.view;de(h,c),c!==h&&(c.children=[],c.unmount());break}case"text":{const{newNode:r,oldNode:l}=i;l.node.textContent=r.node.textContent;break}}return t.forEach(i=>{if(i.type!=="remove")return;const{node:r}=i;var l;r.view?r.view.unmount():(l=r.node.parentElement)==null||l.removeChild(r.node)}),o}remove(){for(const n of this.children){var t;(t=n.parentElement)==null||t.removeChild(n);const o=v.dom2view.get(n);o&&o.remove()}}effect(t,n="unmounted"){const o=q(t,{lazy:!1});return o.effect.deps.length===0?o.effect.stop():this.events.once(n,()=>o.effect.stop()),o}unmount(){var t;this.events.emit("unmount_before"),this.scheduler.dispose(),(t=this.anchor.parentNode)==null||t.removeChild(this.anchor),this.unmountChildren(),this.events.emit("unmounted"),this.events.emit("unmount_after"),this.events.removeAllListeners()}unmountChildren(){this.remove();for(const t of this.children){const n=v.dom2view.get(t);n&&n.unmount()}}zone(t,n="setup"){const o=this.zoneFlag;v.pushView(this),this.zoneFlag=n;try{return t()}finally{this.zoneFlag=o,v.popView()}}getContextValue(t,n){let o=this;for(;o;){const s=o.context;if(t in s){const a=s[t];if(!n||n(a))return a}o=o.parentView}return v.symbols.NONE}setContextValue(t,n){let o=this;for(;o;){if(o.is_container)return void(o.context[t]=n);o=o.parentView}throw new Error(`Cannot set context value: ${String(t)}`)}}v.symbols={NONE:Symbol("NONE"),DIRECTIVES:Symbol("DIRECTIVES"),ANCHOR:Symbol("ANCHOR")},v.isNone=e=>e===v.symbols.NONE,v.index=0,v.dom2view=new WeakMap,v.stack=[],v.topView=()=>v.stack[v.stack.length-1],v.pushView=e=>v.stack.push(e),v.popView=()=>v.stack.pop(),v.globalView=new v,v.stack.push(v.globalView),v.globalView.is_container=!0;const ve=e=>typeof e=="function"?e():D(e)?k(e):Array.isArray(e)?e.map(ve):typeof e=="object"?Object.fromEntries(Object.entries(e).map(([t,n])=>[t,ve(n)])):k(e);class A extends v{constructor(t,n,o){super(),this.DOMProps=void 0,this.DOMChildren=void 0,this.elem=void 0,this.props={},this.isFirstPropsUpdated=!1,this.listeners={},this.firstPropsUpdated=!1,this.propsEffects={},this.DOMProps=n,this.DOMChildren=o,this.elem=t instanceof Node?t:document.createElement(t),this.key=n.key,delete n.key,v.dom2view.set(this.elem,this)}initialize(){this.initialized||(this.initialized=!0,this.events.emit("init_before"),this.events.emit("init"),this.update(this.DOMProps,this.DOMChildren),this.events.emit("init_after"))}mount(t,n){this.initialize(),this.events.emit("mount_before",t,this.parentView),t.insertBefore(this.elem,n||null),this.elem.appendChild(this.anchor),this.mountChildren(),this.events.emit("mounted",t,this.parentView),this.events.emit("mount_after",t,this.parentView)}update(t,n){this.events.emit("update_before");try{this.patchChildren(n),je(t,this.props)||(this.patchProps(t),this.props=t),this.events.emit("updated")}finally{this.events.emit("update_after")}}updateProps(t){je(t,this.props)||(this.props=t,this.isFirstPropsUpdated?this.scheduler.runTask("patch-task",()=>this.patchProps(t)):(this.patchProps(t),this.isFirstPropsUpdated=!0))}patchProps(t){const n=this.elem,o=(s,a)=>{if(!s.startsWith("$")&&!s.startsWith("_")&&s!=="key")if(s!=="ref"){if(n instanceof Element)if(s.startsWith("on")){const r=s.slice(2).toLowerCase();n.addEventListener(r,a);const l=()=>n.removeEventListener(r,a);this.events.once("unmounted",l);const c=()=>{this.events.off("unmounted",l),n.removeEventListener(r,a)},h=this.listeners[r];h&&h(),this.listeners[r]=c}else{var i;(i=this.propsEffects[s])==null||i.effect.stop(),this.propsEffects[s]=this.effect(()=>{const r=this.elem;if(!(r instanceof Element))return;const l=ve(a);((c,h,m)=>{var u;if(typeof m!="boolean")switch(h){case"className":case"class":{let p="";p=Array.isArray(m)?m.join(" "):typeof m=="object"?Object.entries(m).filter(([d,f])=>!!f).map(([d])=>d).join(" "):String(m),c.setAttribute("class",p);break}case"style":if(!((u=c)instanceof Element&&typeof u.style=="object"))break;typeof m=="object"?Object.entries(m).forEach(([p,d])=>c.style[p]=d):c.style.cssText=String(m);break;case"value":c.value=m;break;default:c.setAttribute(h,String(m))}else m?c.setAttribute(h,""):c.removeAttribute(h)})(r,s,l)})}}else D(a)?a.value=n:typeof a=="function"&&a(n)};for(const[s,a]of Object.entries(t))this.matchDirectives(s,a),this.firstPropsUpdated?this.scheduler.runTask(`@props/${s}`,()=>o(s,a)):o(s,a);this.firstPropsUpdated=!0}matchDirectives(t,n){const o=this.getContextValue(v.symbols.DIRECTIVES,l=>!(l==null||!l[t]));if(!o)return;const s=o[t];if(!s)return;const{mounted:a,unmounted:i,updated:r}=s;a&&this.events.once("mounted",()=>this.zone(()=>a(this.elem,n,this)),"directive"),i&&this.events.once("unmounted",()=>this.zone(()=>i(this.elem,n,this)),"directive"),r&&this.events.on("updated",()=>this.zone(()=>r(this.elem,n,this)),"directive")}mountChildren(){const t=this.elem;for(const n of this.children){t.insertBefore(n,this.anchor);const o=v.dom2view.get(n);if(o){if(o===this)throw new Error("Cannot mount children to self");o.parentView=this,o.mount(t,n)}}}unmount(){var t;(t=this.elem.parentElement)==null||t.removeChild(this.elem),super.unmount()}}class z{constructor(){this._component_type=void 0,this.render=void 0,this.runner=void 0,this.view=new v,this.props={},this.state={},this.children=[],this.view.is_container=!0,this.view.events.once("unmounted",()=>this.dispose()),this.view.events.once("init_after",()=>{this.runner=q(this.update.bind(this),{lazy:!1})}),z.view2component.set(this.view,this)}update(){this.view.events.emit("update_before");try{const t=this.view.zone(()=>this.render(this.props,this.state,this.children),"render");this.view.patchChildren(Array.isArray(t)?t:[t]),this.view.events.emit("updated")}catch(t){setTimeout(()=>{this.view.events.emit("error",t)}),console.error(t)}finally{this.view.events.emit("update_after")}}dispose(){var t;(t=this.runner)==null||t.effect.stop()}}z.view2component=new WeakMap;const ut=(e,t,n)=>{let o;return o=typeof e=="function"?(s=>(a,i)=>{const r=new z;return r.props=a,r.children=i,r.view.key=a.key,r.view.events.once("init",()=>{r.render=r.view.zone(()=>s(a,r.state,r.children))}),r._component_type=s,r})(e):(s=>(a,i)=>{const r=new z;return r.props=a,r.children=i,r.view.key=a.key,r.view.events.once("init",()=>{r.state=r.view.zone(()=>s.setup(a,i))}),r._component_type=s,r.render=s.render.bind(r),r})(e),o(t,n)},y=(e,t={},...n)=>{if(t||(t={}),n||(n=[]),n=n.flat(64),e instanceof Node){const o=v.dom2view.get(e);return o?o instanceof A&&o.update(t,n):new A(e,t,n),e}return typeof e=="string"||e instanceof String?new A(e,t,n).elem:ut(e,t,n).view.anchor};function Zt(e,t,n){const o=e instanceof Element?e:document.querySelector(e);if(!o)throw new Error("Could not find selector");if(!(t instanceof Node)){const s=ut(t,n||{},[]);return s.view.mount(o),s}{const s=v.dom2view.get(t);s?s.mount(o):o.appendChild(t)}}function J(e,...t){Qe();try{return e.apply(void 0,t)}finally{Ke()}}const C=e=>typeof e=="function"?J(e):J(k,e),en=(e,t,n=!1)=>{v.topView().events[n?"once":"on"](e,t)},le=(e,t=!1)=>n=>en(e,n,t),ht=le("mounted"),ze=le("mount_before"),R=le("unmounted"),tn=le("update_after"),nn=e=>{const t=v.topView();t.events.once(t.zoneFlag==="render"?"update_before":"unmounted",e)},K=(e,t)=>{let n;const o=q(()=>{n&&J(n),n=void 0,e(s=>n=s)},re({lazy:!1},t));return nn(()=>{n==null||n(),o.effect.stop()}),o};function on(e){const t=me(e);return[Q(t),n=>{t.value=typeof n=="function"?n(C(t)):n}]}function j(e,t,n){let o;return K(()=>{const s=D(e)?e.value:e();J(t,s,o),o=s},n)}function xe(e){let t;const n=N();return K(()=>{t&&J(t),t=void 0;const o=e(s=>t=s);Object.is(o,C(n))||(n.value=o)}),Q(n)}function sn(e,t){const n=N(t);return[Q(n),o=>{n.value=e(C(n),o)}]}function pt(){const e=v.topView();e.zoneFlag!=="setup"&&console.warn('Warning: Marking a component with outside effect outside "setup" zone may cause unexpected behavior.'),e.has_outside_effect=!0}const rn=(e,t)=>{v.topView().setContextValue(e,t)};function an(e,t=v.symbols.NONE){const n=v.topView().getContextValue(e);return n===v.symbols.NONE&&t!==v.symbols.NONE?t:n}const cn=(...e)=>e.map(t=>k(t)),ft=cn,ln=e=>{const t=(n=v.topView(),new Proxy({},{get(o,s,a){const i=n.getContextValue(s);if(!v.isNone(i))return i},set:(o,s,a,i)=>(n.setContextValue(s,a),!0)}));var n;return e==null||e(t),t};function dn(e,t,n=""){const o=t===":root",s=o?"":t,a=e.split(",").map(l=>l.trim()).filter(Boolean);let i=o?[""]:s.split(",").map(l=>l.trim()).filter(Boolean);var r;return(r=i,a.flatMap(l=>r.map(c=>[l,c]))).map(([l,c])=>l.startsWith("&")?l.replace(/&/g,c):`${c} ${l}`).map(l=>`${l.replace(n||"","")}${n||""}`.trim()).join(",")}const Pe=e=>e&&(e.nodeType===Node.DOCUMENT_NODE||e.nodeType===Node.DOCUMENT_FRAGMENT_NODE),Ie=(e,t,n)=>{const{updateCSSText:o,installSheet:s,uninstallSheet:a}=n;let i=!1;return{parseStyle:r=>{const l=function(c,h,{beautify:m=!1,scopedSelector:u=""}){const p=m?`
`:"",d=[{nodeSelector:h+u,cssObject:c}],f=[];for(;d.length>0;){const{nodeSelector:g,cssObject:b}=d.pop(),S={selector:g,cssText:""};for(const E in b){const T=b[E];if(typeof T=="object"){const x=dn(E,g,u);d.push({nodeSelector:x,cssObject:T})}else{if(typeof T=="string"&&!T.trim()||T==null)continue;S.cssText+=`${w=E,w.replace(/[A-Z]/g,x=>`-${x.toLowerCase()}`)}: ${b[E]};${p}`}}S.cssText.trim()&&f.push(S)}var w;return f.map(g=>`${g.selector}{${g.cssText}}`).join(`
`).trim()}(e(),r,{scopedSelector:t});o(l)},applySheet:r=>{i||(i=!0,s(r))},removeSheet:r=>{i&&(i=!1,a(r))}}},un={STYLESHEET_SCOPED:Symbol("STYLESHEET_SCOPED"),STYLESHEET_ROOT:Symbol("STYLESHEET_ROOT")},Ue=()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(36),mt=e=>{const{className:t}=e;(({props:o,scopedId:s,rootNodeSelector:a,styleOrFunc:i})=>{const r=(p=>{if(!p)throw new Error("styleOrFn is required.");return typeof p=="function"?p:()=>p})(o.styleFn||o.style||i),l=ln(),{applySheet:c,removeSheet:h,parseStyle:m}=((p,d,f)=>f?((w,g)=>{const b=new CSSStyleSheet,{parseStyle:S,applySheet:E,removeSheet:T}=Ie(w,g,{updateCSSText(x){b.replaceSync(x)},installSheet(x=document){Pe(x)&&(x.adoptedStyleSheets=[...x.adoptedStyleSheets,b])},uninstallSheet(x=document){Pe(x)&&(x.adoptedStyleSheets=[...x.adoptedStyleSheets].filter(B=>B!==b))}});return{sheet:b,parseStyle:S,applySheet:E,removeSheet:T}})(p,d):((w,g)=>{const b=document.createElement("style"),{parseStyle:S,applySheet:E,removeSheet:T}=Ie(w,g,{updateCSSText(x){b.innerHTML=x},installSheet(x){x.insertBefore(b,x.firstChild)},uninstallSheet(x){var B;(B=b.parentNode)==null||B.removeChild(b)}});return{styleDOM:b,parseStyle:S,applySheet:E,removeSheet:T}})(p,d))(()=>r(l),s?`[data-s-${s}]`:void 0,o.adopted),{[un.STYLESHEET_ROOT]:u}=l;if(K(()=>{let p=a;var d;o.adopted&&u&&u instanceof Node&&((d=u).nodeType===Node.DOCUMENT_NODE||d.nodeType===Node.DOCUMENT_FRAGMENT_NODE)&&(p=":root"),m(p)}),o.adopted)c(u),R(()=>h(u));else if((u==null?void 0:u.nodeType)===Node.DOCUMENT_FRAGMENT_NODE)c(u),R(()=>h(u));else{let p;ze(d=>{c(d),p=d}),R(()=>h(p))}})(e),(o=>{const{scopedId:s}=o;if(!s)return;const a=`s-${s}`.replace(/-([a-z])/g,function(u,p){return p.toUpperCase()});let i=null,r=null,l=new Set;const c=u=>{u&&"dataset"in u&&typeof u.dataset=="object"&&(u.dataset[a]="")},h=u=>{u&&"dataset"in u&&typeof u.dataset=="object"&&delete u.dataset[a]},m=()=>{const u=new Set,p=d=>{if(d&&(d===i||!d.is_container)){d instanceof A&&u.add(d.elem);for(const f of d.children){const w=v.dom2view.get(f);w?p(w):f instanceof Element&&u.add(f)}}};p(i);for(const d of u)c(d);for(const d of l)u.has(d)||h(d);l=u};ht((u,p)=>{r=u,i=p,m(),c(u)}),tn(()=>{m()}),R(()=>{h(r);for(const u of l)h(u)})})(e);let n=null;ze(o=>{n=o,t&&o instanceof Element&&o.classList.add(t)}),R(()=>{t&&n instanceof Element&&n.classList.remove(t)})},$=(e,t,[n])=>{pt();const o=e.scoped?Ue():void 0,s=`s-${Ue()}`;return mt({props:e,styleOrFunc:n,rootNodeSelector:`.${s}`,className:s,scopedId:o}),()=>null},hn=(e,t,[n])=>(pt(),mt({props:re({},e,{scoped:!1}),styleOrFunc:n,rootNodeSelector:":root"}),()=>null),pn=(e,t)=>{const n=N("");return K(()=>{const o=C(n);o&&URL.revokeObjectURL(o),n.value=URL.createObjectURL(new Blob([k(e)],{type:"text/plain",...t}))}),R(()=>URL.revokeObjectURL(n.value)),n},fn="modulepreload",mn=function(e,t){return new URL(e,t).href},Ve={},vn=function(t,n,o){if(!n||n.length===0)return t();const s=document.getElementsByTagName("link");return Promise.all(n.map(a=>{if(a=mn(a,o),a in Ve)return;Ve[a]=!0;const i=a.endsWith(".css"),r=i?'[rel="stylesheet"]':"";if(!!o)for(let h=s.length-1;h>=0;h--){const m=s[h];if(m.href===a&&(!i||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${r}`))return;const c=document.createElement("link");if(c.rel=i?"stylesheet":fn,i||(c.as="script",c.crossOrigin=""),c.href=a,document.head.appendChild(c),i)return new Promise((h,m)=>{c.addEventListener("load",h),c.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>t())},gn=()=>vn(()=>import("https://unpkg.com/@monaco-editor/loader@1.3.3/lib/umd/monaco-loader.js"),[],import.meta.url).then(()=>window.monaco_loader).then(e=>e.init()),yn=({value:e,onChange:t,isDark:n,onSave:o,...s})=>{let a,i,r;return K(()=>{const l=k(n);r!=null&&r.editor&&(l?r.editor.setTheme("vs-dark"):r.editor.setTheme("vs"))}),R(()=>{a==null||a.dispose()}),D(e)&&j(e,l=>{(i==null?void 0:i.getValue())!==l&&(i==null||i.setValue(l))}),()=>y("div",{...s,ref:async l=>{r=await gn(),i=r.editor.createModel(C(e),"typescript",r.Uri.file("main.ts")),i.onDidChangeContent(()=>t(i.getValue())),r.languages.typescript.typescriptDefaults.setCompilerOptions({jsx:"react"}),r.languages.typescript.typescriptDefaults.setDiagnosticsOptions({noSemanticValidation:!0,noSyntaxValidation:!0}),a=r.editor.create(l,{automaticLayout:!0,wordWrap:!0,theme:C(n)?"vs-dark":"vs"}),a.setModel(i),o&&a.addCommand(r.KeyMod.CtrlCmd|r.KeyCode.KeyS,()=>{o(i.getValue())})}})};class wn{constructor(){H(this,"idx",0);H(this,"demos",[]);H(this,"currentDemo",null)}registerDemo(t,n,o){const s={id:this.idx++,name:t,version:n,code:o};this.demos.push(s),this.currentDemo||(this.currentDemo=s)}selectDemo(t){const n=this.demos.find(o=>o.id===Number(t));if(!n)throw new Error(`Cannot find demo with name ${name}`);return this.currentDemo=n,n}}const bn=`import {
  rh,
  mount,
  unref,
  createResource,
  onMounted,
  createState,
  GlobalStyle,
  onUnmounted,
  createWatcher,
  createMemo,
} from "@rhjs/rh";

const timeIntervals = {
  day: 86400,
  hour: 3600,
  minute: 60,
  second: 1,
};
const calcTimeSince = (date: any) => {
  const seconds = Math.floor(
    (new Date().getTime() - new Date(date).getTime()) / 1000
  );
  let intervalType = "" as keyof typeof timeIntervals;

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
  return \`\${intervalCount} \${intervalType}\${
    intervalCount !== 1 ? "s" : ""
  } ago\`;
};

const createInterval = (...args: Parameters<typeof setInterval>) => {
  const timer = setInterval(...args);
  onUnmounted(() => clearInterval(timer));
};

const API_URL = "https://api.coindesk.com/v1/bpi/currentprice.json";
const createPriceResource = () => {
  let updateDate = new Date();
  const [timeSince, setTimeSince] = createState("");
  const [data, { refetch, fetching }] = createResource<{
    bpi: { USD: { rate_float: number } };
  }>(() => fetch(API_URL).then((resp) => resp.json()), {
    onSuccess() {
      updateDate = new Date();
      setTimeSince(calcTimeSince(updateDate));
    },
  });

  onMounted(refetch);
  createInterval(refetch, 30 * 1000); // 30 seconds
  createInterval(() => {
    const result = unref(data);
    if (!result) {
      return;
    }
    setTimeSince(calcTimeSince(updateDate));
  }, 1000);

  const [delta, setDelta] = createState(0);
  createWatcher(data, (value, prev) => {
    if (value && prev && value !== prev) {
      const nextDelta = value.bpi.USD.rate_float - prev.bpi.USD.rate_float;
      if (nextDelta === 0) {
        return;
      }
      setDelta(nextDelta);
    }
  });

  return {
    data,
    timeSince,
    refetch,
    fetching,
    delta,
  };
};

const App = () => {
  const {
    data: price,
    delta,
    timeSince,
    refetch,
    fetching,
  } = createPriceResource();
  return () => {
    const currentPrice = unref(price);

    if (currentPrice === undefined) {
      return <span>loading...</span>;
    }
    const {
      bpi: {
        USD: { rate_float },
      },
    } = currentPrice;

    const isUpwardTrend = createMemo(() => unref(delta) > 0);
    return (
      <div>
        <GlobalStyle
          style={{
            "button[disabled]": {
              cursor: "not-allowed",
            },
          }}
        ></GlobalStyle>
        <h1>₿itcoin Price (BTC)</h1>
        <h1>
          {rate_float.toLocaleString("en", {
            style: "currency",
            currency: "USD",
          })}

          {() =>
            unref(delta) === 0 ? null : (
              <span style={\`color: \${unref(isUpwardTrend) ? "red" : "green"}\`}>
                {unref(isUpwardTrend) ? "⬆" : "⬇"} {unref(delta).toFixed(2)}
              </span>
            )
          }
        </h1>
        <p>
          <button disabled={fetching} onClick={refetch}>
            ♻️
          </button>{" "}
          {timeSince}
        </p>
        <p>{() => (unref(fetching) ? "fetching..." : "")}</p>
      </div>
    );
  };
};

mount(document.querySelector("#app")!, App);
`,kn=`import {
  rh,
  mount,
  unref,
  createResource,
  onMounted,
  createState,
  GlobalStyle,
  Style,
  onUnmounted,
  createWatcher,
  createMemo,
  enableDirective,
  createEffect,
  ref,
  untrack,
} from "@rhjs/rh";

// @ts-ignore
import { marked } from "https://cdn.jsdelivr.net/npm/marked@5.0.3/lib/marked.esm.js";

enableDirective({
  key: "$innerHTML",
  mounted: (elem, value) => {
    createEffect(() => {
      elem.innerHTML = unref(value);
    });
  },
});

const createDebounceMemo = (value: any, timeoutMs = 300) => {
  const ret = ref();
  let timer: any;
  createEffect(() => {
    const nextValue = unref(typeof value === "function" ? value() : value);
    if (untrack(ret) === undefined) {
      ret.value = nextValue;
      return;
    }
    if (ret.value !== nextValue) {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        ret.value = nextValue;
      }, timeoutMs);
    }
  });
  return ret;
};

const defaultText = \`
# rh.js

[![size badge](https://img.shields.io/github/languages/code-size/zhzluke96/rh.js?label=size)](https://github.com/zhzLuke96/rh.js)
[![language](https://img.shields.io/github/languages/top/zhzluke96/rh.js)](https://github.com/zhzLuke96/rh.js)
[![version](https://img.shields.io/github/package-json/v/zhzluke96/rh.js)](https://github.com/zhzLuke96/rh.js)

🧩 Lightweight & Powerful framework

**FEATURES:**

- Packed \\\`main.js\\\` only \\\`~15kb\\\`
- Based on \\\`@vue/reactivity\\\`
- function component patterns
- Not extras syntax, all in js.
- No VDom, always dom.
- JSX style
\`.trim();

const MarkdownEditor = () => {
  const [text, setText] = createState(defaultText);
  const handleTextChange = (event: any) => setText(event.target.value);
  const innerHTML = createDebounceMemo(() => marked(unref(text)));

  return () => (
    <div>
      <Style
        adopted
        style={{
          flex: "1",
          display: "flex",
          overflow: "hidden",
          "& .editor-panel": {
            flex: "1",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            textarea: {
              flex: "1",
              width: "100%",
              height: "100%",
              border: "none",
              padding: "0",
              margin: "0",
              resize: "none",
              outline: "none",
              boxSizing: "border-box",
            },
          },
          "& .preview-panel": {
            flex: "1",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            ".html-container": {
              flex: "1",
              overflow: "auto",
            },
          },
        }}
      ></Style>
      <div class={"editor-panel"}>
        <h3>📄Raw Text</h3>
        <hr />
        <textarea value={text} onInput={handleTextChange}></textarea>
      </div>
      <div style={"width: 12px;"}></div>
      <div class={"preview-panel"}>
        <h3>🔍Preview</h3>
        <hr />
        <div $innerHTML={innerHTML} class={"html-container"}></div>
      </div>
    </div>
  );
};

const App = () => {
  return () => (
    <div>
      <GlobalStyle
        adopted
        style={{
          "html,body": {
            height: "100%",
            overflow: "hidden",
          },
          "#app": {
            height: "100%",
            maxHeight: "100%",
          },
        }}
      ></GlobalStyle>
      <Style
        adopted
        style={{
          height: "100%",
          display: "flex",
          flexFlow: "column",
          overflow: "hidden",
        }}
      ></Style>
      <h1 style={"height: 30px;"}>✍️Markdown Editor</h1>
      <MarkdownEditor />
    </div>
  );
};

mount("#app", App);
`,_n=`import { rh, ref, mount, unref, setupWatch, inject, provide } from "@rhjs/rh";

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
`,xn=`import { rh, ref, mount, unref, computed } from "@rhjs/rh";

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
`,Sn=`import {
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
                rerender();
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
                rerender();
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
`,En=`import { Button, ensureFluentUILoaded } from "@rhjs/fluent-web-components";
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
`,M=new wn;M.registerDemo("HelloWorld","0.1.2",xn);M.registerDemo("Counter","0.1.2",_n);M.registerDemo("TodoApp","0.1.2",Sn);M.registerDemo("Bitcoin","0.2.1-dev.4",bn);M.registerDemo("Markdown Editor","0.2.1-dev.4",kn);M.registerDemo("Counter","0.0.34",En);const Fe=N(M.currentDemo),vt=()=>({mgr:M,currentDemo:Fe,selectDemo(e){Fe.value=M.selectDemo(e)},demos:M.demos}),Tn=()=>{const{selectDemo:e,demos:t}=vt();return()=>y("div",null,y("select",{onChange:n=>e(n.target.value)},t.map(n=>y("option",{value:n.id},n.name," @",n.version))))},Se=({styleFn:e,isDark:t,...n},o,s)=>()=>y("div",{...n},y($,{styleFn:()=>({height:"30px",display:"inline-flex",alignItems:"center",justifyContent:"center",paddingLeft:"12px",paddingRight:"12px",cursor:"pointer",userSelect:"none",marginLeft:"4px","&:hover":{backgroundColor:k(t)?"rgba(64,64,64,1)":"rgba(64,64,64,0.1)"},"&:active":{outline:"solid 1px",outlineColor:k(t)?"#fff":"rgba(64,64,64,1)"},...e==null?void 0:e()})}),s),Cn=({isDark:e})=>()=>y(Se,{onClick:()=>{D(e)&&(e.value=!C(e))},isDark:e},y("span",null,()=>k(e)?"🌘":"🌖"));function We({isDark:e,href:t,target:n="_blank"},o,s){return()=>y(Se,{isDark:e,onClick:()=>{window.open(t,n)}},y("a",{href:t,target:n,style:"text-decoration: none; color: inherit;"},s))}const Dn=({isDark:e})=>()=>y("div",null,y($,{styleFn:()=>({paddingLeft:"12px",paddingRight:"12px",height:"100%",width:"calc(100% - 24px)",display:"grid",gridTemplateColumns:"minmax(0, 1fr) 12px minmax(0, 1fr)"})}),y("div",{style:"display: inline-flex; align-items: center;"},y("span",{style:"user-select: none;word-break: keep-all;white-space: nowrap;"},"🧩 ",y("b",null,"R"),y("small",null,"eactive"),y("b",null,"H"),y("small",null,"ydrate"),y("b",null,"JS")," PLAYGROUND"),y(Cn,{isDark:e}),y(Tn,null)),y("div",null),y("div",{style:"display: inline-flex; align-items: center; justify-content: right;"},y(We,{isDark:e,href:"https://zhzluke96.github.io/rhjs-demos/#demo",target:"_self"},"demos"),y(We,{isDark:e,href:"https://github.com/zhzLuke96/rh.js"},"github"))),Rn=()=>document.querySelectorAll("iframe").forEach(e=>e.style.pointerEvents="none"),On=()=>document.querySelectorAll("iframe").forEach(e=>e.style.pointerEvents="auto"),Ln=({isHorizontal:e,onResize:t,ref:n})=>{const[o,s]=on(!1),a=()=>s(!0),i=()=>s(!1),r=u=>{t(u.clientX,u.clientY)},l=u=>{const p=u.touches[0];t(p.clientX,p.clientY)},c=N(null);j(o,u=>{u?(Rn(),window.addEventListener("mousemove",r),window.addEventListener("mouseup",i),window.addEventListener("touchmove",l),window.addEventListener("touchend",i)):(On(),window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",i),window.removeEventListener("touchmove",l),window.removeEventListener("touchend",i))}),j(c,u=>{u&&(u.addEventListener("mousedown",a,{passive:!0}),u.addEventListener("touchstart",a,{passive:!0}))}),R(()=>{var u,p;(u=k(c))==null||u.removeEventListener("mousedown",a),(p=k(c))==null||p.removeEventListener("touchstart",a)});const h=an("isDark"),m=Gt(()=>k(h)?"rgba(255,255,255,0.3)":"rgba(0,0,0,0.3)");return()=>y("div",{ref:u=>{c.value=u,n&&(n.value=u)}},y($,{styleFn:()=>({backgroundColor:k(o)?k(m):"",width:e?"100%":"12px",height:e?"12px":"100%",zIndex:k(o)?"10":"auto",cursor:e?"row-resize":"col-resize",userSelect:"none",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"12px","&:hover":{backgroundColor:k(m)}})}),"⚪⚪⚪")},Nn=()=>{const e=`
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
`.trim(),t=URL.createObjectURL(new Blob([e],{type:"text/html"}));return R(()=>URL.revokeObjectURL(t)),`${t}#?embedded=${encodeURIComponent(location.origin)}`},Mn=(e,t,n="")=>`
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
`.trim(),jn=(e,t,n,o)=>{const s={sendToIframe(r){var l,c;(c=(l=C(e))==null?void 0:l.contentWindow)==null||c.postMessage(r,"*")},sendToDevtools(r){var l,c;(c=(l=C(t))==null?void 0:l.contentWindow)==null||c.postMessage(r,"*")}},a=()=>{const{codeInjected:r,codeURL:l}=k(n);if(!r){if(!l){setTimeout(a,3);return}requestAnimationFrame(()=>{s.sendToIframe({event:"CODE_UPDATE",value:l}),o({type:"CODE_INJECTED"})})}},i=r=>{var h,m;const[l,c]=ft(e,t);!l||!c||((m=(h=r.data)==null?void 0:h.includes)!=null&&m.call(h,"Debugger.enable")&&(console.log("Debugger.enable"),o({type:"Debugger.enable"}),a()),r.source===l.contentWindow?c.contentWindow.postMessage(r.data,"*"):r.source===c.contentWindow&&l.contentWindow.postMessage({event:"DEV",data:r.data},"*"))};return window.addEventListener("message",i),R(()=>window.removeEventListener("message",i)),s},An=(e,t)=>{const{importMap:n,isDark:o}=e,s=xe(()=>{const a=Mn(C(o),JSON.stringify({imports:k(n)}));return URL.createObjectURL(new Blob([a],{type:"text/html"}))});return j(s,(a,i)=>{i!==a&&i&&URL.revokeObjectURL(i),t({type:"HTML_CHANGED",iframeSrc:a||""})}),R(()=>{URL.revokeObjectURL(C(s)||"")}),{iframeSrc:s}},zn=e=>{const{isDark:t,code:n}=e,o=me(null),s=me(null),a=d=>{var f;return(f=d.contentDocument)==null?void 0:f.documentElement.classList.toggle("dark",C(t))},i=d=>{const f=C(o);f&&(f.src=d)},r=()=>{var d,f;(f=(d=C(o))==null?void 0:d.contentWindow)==null||f.location.reload()},l=()=>{var d,f;(f=(d=C(s))==null?void 0:d.contentWindow)==null||f.location.reload()};j(()=>k(t),d=>{const f=k(o);f&&a(f)});const[c,h]=sn((d,f)=>{switch(f.type){case"IFRAME_READY":a(f.iframe);let w=d.codeInjected;return{...d,codeInjected:w,iframeReady:!0};case"DEVTOOLS_IFRAME_READY":return{...d,devtoolsIframeReady:!0};case"DEV_LOADED":return{...d,devLoaded:!0};case"HTML_CHANGED":return i(f.iframeSrc),l(),{...d,iframeReady:!1,devtoolsIframeReady:!1,devLoaded:!1,codeInjected:!1,darkInjected:!1};case"HTML_RELOAD":return setTimeout(()=>{r(),l()}),{...d,iframeReady:!1,devtoolsIframeReady:!1,devLoaded:!1,codeInjected:!1,darkInjected:!1};case"CODE_UPDATE":return{...d,codeURL:f.codeURL};case"CODE_INJECTED":return{...d,codeInjected:!0}}return d},{iframeReady:!1,devtoolsIframeReady:!1,devLoaded:!1,codeInjected:!1,codeURL:C(n)}),{sendToDevtools:m,sendToIframe:u}=jn(o,s,c,h);j(()=>k(n),d=>{h({type:"CODE_UPDATE",codeURL:d}),c.value.iframeReady&&requestAnimationFrame(()=>{u({event:"CODE_UPDATE",value:d}),h({type:"CODE_INJECTED"})})});const{iframeSrc:p}=An(e,h);return j(o,d=>{d==null||d.addEventListener("load",()=>h({type:"IFRAME_READY",iframe:d}))}),j(s,d=>{d==null||d.addEventListener("load",()=>h({type:"DEVTOOLS_IFRAME_READY",devIframe:d}))}),{iframeSrc:p,iframeRef:o,devtoolsIframeRef:s,previewState:c,dispatch:h,sendToDevtools:m,sendToIframe:u}},Pn=e=>{const{importMap:t,code:n,devtools:o,isDark:s,...a}=e,i=N(null),{iframeSrc:r,iframeRef:l,devtoolsIframeRef:c,previewState:h,dispatch:m}=zn(e),u=Nn(),p=xe(()=>`width: 100%; height: 100%; ${k(o)?"display: block;":"display: none;"}`),d=N(.625),f=N(null),w=(g,b)=>{const[S,E]=ft(i,f);if(!S||!E)return;let T,x;const B=S.getBoundingClientRect();T=b-B.top-E.offsetHeight/2,x=S.offsetHeight-E.offsetHeight;const gt=T/x;d.value=gt};return()=>y("div",{...a,ref:i},y($,{styleFn:()=>{const g=k(d);return{display:"grid",height:"100%",width:"100%",gridTemplateRows:k(o)?`30px minmax(0, ${g}fr) 12px minmax(0, ${1-g}fr)`:"30px minmax(0, 1fr)"}}}),y("div",{style:"border-bottom: 1px solid;border-top: 1px solid;overflow: hidden;"},y(Se,{title:"reload page",isDark:s,onClick:()=>m({type:"HTML_RELOAD"})},"♻️relaod")),y("iframe",{ref:l,src:r,style:"width: 100%;height: 100%;",frameBorder:0,sandbox:"allow-popups-to-escape-sandbox allow-scripts allow-popups allow-forms allow-pointer-lock allow-top-navigation allow-modals allow-same-origin"}),y("div",null,y(Ln,{ref:f,isHorizontal:!0,onResize:w})),y("iframe",{ref:c,style:p,src:u,frameBorder:"0"}))},In=({isDark:e})=>()=>y(hn,{styleFn:()=>({fontFamily:"'Karla', system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",lineHeight:"1.5",fontWeight:"400",colorScheme:k(e)?"light dark":"dark",color:k(e)?"rgba(255, 255, 255, 0.87)":"#242424",backgroundColor:k(e)?"#333":"#fff",fontSynthesis:"none",textRendering:"optimizeLegibility","-webkitFontSmoothing":"antialiased","-moz-osxFontSmoothing":"grayscale","-webkitTextSizeAdjust":"100%",height:"100vh",width:"100vw",body:{margin:"0",minWidth:"100vw",minHeight:"100vh",width:"100%",height:"100%"},"#app":{width:"100%",height:"100%"}})});function Un(){return new Worker(""+new URL("complier.worker-026b4f92.js",import.meta.url).href)}class Vn{constructor(){H(this,"registry",{})}registerWorker(t,n){this.registry[t]?console.warn(`Worker of type ${t} already registered.`):this.registry[t]=n}removeWorker(t){delete this.registry[t]}getWorker(t){const n=this.registry[t];if(n)return n;throw new Error(`No worker of type ${t} registered.`)}postMessage(t,n){this.getWorker(t).postMessage(n)}listenRecv(t,n){const o=this.getWorker(t);let s;const a=i=>{const{message_token:r}=i.data||{};if(r!==n)return;const l={...i.data};delete l.message_token,s(l),o.removeEventListener("message",a)};return o.addEventListener("message",a),{recv:new Promise((i,r)=>{s=i}),dispose:()=>o.removeEventListener("message",a)}}}class Fn{constructor(){H(this,"registry",new Vn);this.initialize()}async initialize(){this.registry.registerWorker("complier",new Un)}worker_caller(t,n){const o=Math.random().toString(36).slice(2),s={...n,message_token:o};return this.registry.postMessage(t,s),this.registry.listenRecv(t,o)}compileFile(t){return this.worker_caller("complier",{event:"BABEL",payload:{file:t,compile_options:{}}})}compileFiles(t){return this.worker_caller("complier",{event:"ROLLUP",payload:{files:t,compile_options:{}}})}}const Be=new Fn,Wn=()=>{let e=null;return R(()=>e==null?void 0:e.dispose()),{compileFile(t){return e==null||e.dispose(),e=Be.compileFile(t),e.recv},compileFiles(t){return e==null||e.dispose(),e=Be.compileFiles(t),e.recv}}},Bn='import("@rhjs/rh").then(({cs, ElementSource, View}) => window.dispose = () => View ? View.globalView.unmount() : (cs || ElementSource).global_source.emit("unmount"));',Hn=()=>{var l;const e=N(!0);rn("isDark",e);const{currentDemo:t}=vt(),n=xe(()=>{var c;return{"@rhjs/rh":`https://unpkg.com/@rhjs/rh@${((c=t.value)==null?void 0:c.version)||"latest"}/dist/main.module.mjs`,"@rhjs/fluent-web-components":"https://unpkg.com/@rhjs/fluent-web-components@latest/dist/main.module.mjs"}}),o=N(""),s=pn(o,{type:"text/javascript"}),a=N(((l=t.value)==null?void 0:l.code)||""),i=Wn(),r=async()=>{const c=C(a);if(!c)return;const h=await i.compileFile({filename:"main.tsx",source:c});o.value=`${h.compiled}
${Bn}`};return ht(r),j(t,c=>{c&&a.value!==c.code&&(a.value=c.code,r())}),()=>y("div",null,y(In,{isDark:e}),y($,{styleFn:()=>({position:"relative",display:"flex",flexFlow:"column",width:"100%",height:"100%",maxWidth:"100vw",maxHeight:"100vh",overflow:"hidden"})}),y("header",{style:"height: 30px; width: 100%;"},y(Dn,{isDark:e})),y("div",{style:"flex: 1;"},y($,{styleFn:()=>({position:"relative",display:"flex",flexFlow:"row",width:"100%",height:"100%"})}),y(yn,{style:"flex: 1;",value:a,onChange:c=>a.value=c,onSave:r,isDark:e}),y(Pn,{style:"flex: 1;",importMap:n,code:s,devtools:!0,isDark:e})))};Zt("#app",Hn);
