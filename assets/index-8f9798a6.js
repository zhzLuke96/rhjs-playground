var bt=Object.defineProperty;var kt=(e,t,n)=>t in e?bt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var B=(e,t,n)=>(kt(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function xt(e,t){const n=Object.create(null),o=e.split(",");for(let s=0;s<o.length;s++)n[o[s]]=!0;return t?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const _t=()=>{},St=Object.assign,Ct=Object.prototype.hasOwnProperty,ae=(e,t)=>Ct.call(e,t),U=Array.isArray,re=e=>qe(e)==="[object Map]",ke=e=>typeof e=="symbol",ce=e=>e!==null&&typeof e=="object",Tt=Object.prototype.toString,qe=e=>Tt.call(e),Et=e=>qe(e).slice(8,-1),xe=e=>typeof e=="string"&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,_e=(e,t)=>!Object.is(e,t);let I;class Dt{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=I,!t&&I&&(this.index=(I.scopes||(I.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=I;try{return I=this,t()}finally{I=n}}}on(){I=this}off(){I=this.parent}stop(t){if(this._active){let n,o;for(n=0,o=this.effects.length;n<o;n++)this.effects[n].stop();for(n=0,o=this.cleanups.length;n<o;n++)this.cleanups[n]();if(this.scopes)for(n=0,o=this.scopes.length;n<o;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function jt(e){return new Dt(e)}function Ye(e,t=I){t&&t.active&&t.effects.push(e)}const Se=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Ze=e=>(e.w&$)>0,Qe=e=>(e.n&$)>0,he=new WeakMap;let Y=0,$=1;const pe=30;let N;const W=Symbol(""),me=Symbol("");class Ke{constructor(t,n=null,o){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ye(this,o)}run(){if(!this.active)return this.fn();let t=N,n=H;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=N,N=this,H=!0,$=1<<++Y,Y<=pe?(({deps:o})=>{if(o.length)for(let s=0;s<o.length;s++)o[s].w|=$})(this):Le(this),this.fn()}finally{Y<=pe&&(o=>{const{deps:s}=o;if(s.length){let i=0;for(let a=0;a<s.length;a++){const r=s[a];Ze(r)&&!Qe(r)?r.delete(o):s[i++]=r,r.w&=~$,r.n&=~$}s.length=i}})(this),$=1<<--Y,N=this.parent,H=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){N===this?this.deferStop=!0:this.active&&(Le(this),this.onStop&&this.onStop(),this.active=!1)}}function Le(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}function Z(e,t){e.effect&&(e=e.effect.fn);const n=new Ke(e);t&&(St(n,t),t.scope&&Ye(n,t.scope)),t&&t.lazy||n.run();const o=n.run.bind(n);return o.effect=n,o}let H=!0;const Je=[];function Xe(){Je.push(H),H=!1}function et(){const e=Je.pop();H=e===void 0||e}function R(e,t,n){if(H&&N){let o=he.get(e);o||he.set(e,o=new Map);let s=o.get(n);s||o.set(n,s=Se()),tt(s)}}function tt(e,t){let n=!1;Y<=pe?Qe(e)||(e.n|=$,n=!Ze(e)):n=!e.has(N),n&&(e.add(N),N.deps.push(e))}function F(e,t,n,o,s,i){const a=he.get(e);if(!a)return;let r=[];if(t==="clear")r=[...a.values()];else if(n==="length"&&U(e)){const l=Number(o);a.forEach((c,m)=>{(m==="length"||m>=l)&&r.push(c)})}else switch(n!==void 0&&r.push(a.get(n)),t){case"add":U(e)?xe(n)&&r.push(a.get("length")):(r.push(a.get(W)),re(e)&&r.push(a.get(me)));break;case"delete":U(e)||(r.push(a.get(W)),re(e)&&r.push(a.get(me)));break;case"set":re(e)&&r.push(a.get(W))}if(r.length===1)r[0]&&fe(r[0]);else{const l=[];for(const c of r)c&&l.push(...c);fe(Se(l))}}function fe(e,t){const n=U(e)?e:[...e];for(const o of n)o.computed&&Me(o);for(const o of n)o.computed||Me(o)}function Me(e,t){(e!==N||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Lt=xt("__proto__,__v_isRef,__isVue"),nt=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ke)),Mt=ot(),Rt=ot(!0),Re=Ot();function Ot(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const o=T(this);for(let i=0,a=this.length;i<a;i++)R(o,0,i+"");const s=o[t](...n);return s===-1||s===!1?o[t](...n.map(T)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Xe();const o=T(this)[t].apply(this,n);return et(),o}}),e}function Nt(e){const t=T(this);return R(t,0,e),t.hasOwnProperty(e)}function ot(e=!1,t=!1){return function(n,o,s){if(o==="__v_isReactive")return!e;if(o==="__v_isReadonly")return e;if(o==="__v_isShallow")return t;if(o==="__v_raw"&&s===(e?t?Gt:it:t?Bt:rt).get(n))return n;const i=U(n);if(!e){if(i&&ae(Re,o))return Reflect.get(Re,o,s);if(o==="hasOwnProperty")return Nt}const a=Reflect.get(n,o,s);return(ke(o)?nt.has(o):Lt(o))?a:(e||R(n,0,o),t?a:j(a)?i&&xe(o)?a:a.value:ce(a)?e?J(a):at(a):a)}}function At(e=!1){return function(t,n,o,s){let i=t[n];if(ie(i)&&j(i)&&!j(o))return!1;if(!e&&(lt(o)||ie(o)||(i=T(i),o=T(o)),!U(t)&&j(i)&&!j(o)))return i.value=o,!0;const a=U(t)&&xe(n)?Number(n)<t.length:ae(t,n),r=Reflect.set(t,n,o,s);return t===T(s)&&(a?_e(o,i)&&F(t,"set",n,o):F(t,"add",n,o)),r}}const It={get:Mt,set:At(),deleteProperty:function(e,t){const n=ae(e,t),o=Reflect.deleteProperty(e,t);return o&&n&&F(e,"delete",t,void 0),o},has:function(e,t){const n=Reflect.has(e,t);return ke(t)&&nt.has(t)||R(e,0,t),n},ownKeys:function(e){return R(e,0,U(e)?"length":W),Reflect.ownKeys(e)}},zt={get:Rt,set:(e,t)=>!0,deleteProperty:(e,t)=>!0},Ce=e=>e,le=e=>Reflect.getPrototypeOf(e);function ee(e,t,n=!1,o=!1){const s=T(e=e.__v_raw),i=T(t);n||(t!==i&&R(s,0,t),R(s,0,i));const{has:a}=le(s),r=o?Ce:n?Te:Q;return a.call(s,t)?r(e.get(t)):a.call(s,i)?r(e.get(i)):void(e!==s&&e.get(t))}function te(e,t=!1){const n=this.__v_raw,o=T(n),s=T(e);return t||(e!==s&&R(o,0,e),R(o,0,s)),e===s?n.has(e):n.has(e)||n.has(s)}function ne(e,t=!1){return e=e.__v_raw,!t&&R(T(e),0,W),Reflect.get(e,"size",e)}function Oe(e){e=T(e);const t=T(this);return le(t).has.call(t,e)||(t.add(e),F(t,"add",e,e)),this}function Ne(e,t){t=T(t);const n=T(this),{has:o,get:s}=le(n);let i=o.call(n,e);i||(e=T(e),i=o.call(n,e));const a=s.call(n,e);return n.set(e,t),i?_e(t,a)&&F(n,"set",e,t):F(n,"add",e,t),this}function Ae(e){const t=T(this),{has:n,get:o}=le(t);let s=n.call(t,e);s||(e=T(e),s=n.call(t,e)),o&&o.call(t,e);const i=t.delete(e);return s&&F(t,"delete",e,void 0),i}function Ie(){const e=T(this),t=e.size!==0,n=e.clear();return t&&F(e,"clear",void 0,void 0),n}function oe(e,t){return function(n,o){const s=this,i=s.__v_raw,a=T(i),r=t?Ce:e?Te:Q;return!e&&R(a,0,W),i.forEach((l,c)=>n.call(o,r(l),r(c),s))}}function se(e,t,n){return function(...o){const s=this.__v_raw,i=T(s),a=re(i),r=e==="entries"||e===Symbol.iterator&&a,l=e==="keys"&&a,c=s[e](...o),m=n?Ce:t?Te:Q;return!t&&R(i,0,l?me:W),{next(){const{value:y,done:u}=c.next();return u?{value:y,done:u}:{value:r?[m(y[0]),m(y[1])]:m(y),done:u}},[Symbol.iterator](){return this}}}}function V(e){return function(...t){return e!=="delete"&&this}}function Pt(){const e={get(s){return ee(this,s)},get size(){return ne(this)},has:te,add:Oe,set:Ne,delete:Ae,clear:Ie,forEach:oe(!1,!1)},t={get(s){return ee(this,s,!1,!0)},get size(){return ne(this)},has:te,add:Oe,set:Ne,delete:Ae,clear:Ie,forEach:oe(!1,!0)},n={get(s){return ee(this,s,!0)},get size(){return ne(this,!0)},has(s){return te.call(this,s,!0)},add:V("add"),set:V("set"),delete:V("delete"),clear:V("clear"),forEach:oe(!0,!1)},o={get(s){return ee(this,s,!0,!0)},get size(){return ne(this,!0)},has(s){return te.call(this,s,!0)},add:V("add"),set:V("set"),delete:V("delete"),clear:V("clear"),forEach:oe(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=se(s,!1,!1),n[s]=se(s,!0,!1),t[s]=se(s,!1,!0),o[s]=se(s,!0,!0)}),[e,n,t,o]}const[Vt,$t,Ut,Ht]=Pt();function st(e,t){const n=t?e?Ht:Ut:e?$t:Vt;return(o,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?o:Reflect.get(ae(n,s)&&s in o?n:o,s,i)}const Ft={get:st(!1,!1)},Wt={get:st(!0,!1)},rt=new WeakMap,Bt=new WeakMap,it=new WeakMap,Gt=new WeakMap;function at(e){return ie(e)?e:ct(e,!1,It,Ft,rt)}function J(e){return ct(e,!0,zt,Wt,it)}function ct(e,t,n,o,s){if(!ce(e)||e.__v_raw&&(!t||!e.__v_isReactive))return e;const i=s.get(e);if(i)return i;const a=(r=e).__v_skip||!Object.isExtensible(r)?0:function(c){switch(c){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}(Et(r));var r;if(a===0)return e;const l=new Proxy(e,a===2?o:n);return s.set(e,l),l}function ie(e){return!(!e||!e.__v_isReadonly)}function lt(e){return!(!e||!e.__v_isShallow)}function T(e){const t=e&&e.__v_raw;return t?T(t):e}const Q=e=>ce(e)?at(e):e,Te=e=>ce(e)?J(e):e;function dt(e){H&&N&&tt((e=T(e)).dep||(e.dep=Se()))}function Ee(e,t){const n=(e=T(e)).dep;n&&fe(n)}function j(e){return!(!e||e.__v_isRef!==!0)}function A(e){return ut(e,!1)}function ve(e){return ut(e,!0)}function ut(e,t){return j(e)?e:new qt(e,t)}class qt{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:T(t),this._value=n?t:Q(t)}get value(){return dt(this),this._value}set value(t){const n=this.__v_isShallow||lt(t)||ie(t);t=n?t:T(t),_e(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Q(t),Ee(this))}}function Yt(e){Ee(e)}function C(e){return j(e)?e.value:e}var ht;class Zt{constructor(t,n,o,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[ht]=!1,this._dirty=!0,this.effect=new Ke(t,()=>{this._dirty||(this._dirty=!0,Ee(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=o}get value(){const t=T(this);return dt(t),!t._dirty&&t._cacheable||(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Qt(e,t,n=!1){let o,s;const i=typeof e=="function";return i?(o=e,s=_t):(o=e.get,s=e.set),new Zt(o,s,i||!s,n)}ht="__v_isReadonly";var ze,Pe,Kt=(ze=function(e){var t=Object.prototype.hasOwnProperty,n="~";function o(){}function s(l,c,m){this.fn=l,this.context=c,this.once=m||!1}function i(l,c,m,y,u){if(typeof m!="function")throw new TypeError("The listener must be a function");var p=new s(m,y||l,u),d=n?n+c:c;return l._events[d]?l._events[d].fn?l._events[d]=[l._events[d],p]:l._events[d].push(p):(l._events[d]=p,l._eventsCount++),l}function a(l,c){--l._eventsCount==0?l._events=new o:delete l._events[c]}function r(){this._events=new o,this._eventsCount=0}Object.create&&(o.prototype=Object.create(null),new o().__proto__||(n=!1)),r.prototype.eventNames=function(){var l,c,m=[];if(this._eventsCount===0)return m;for(c in l=this._events)t.call(l,c)&&m.push(n?c.slice(1):c);return Object.getOwnPropertySymbols?m.concat(Object.getOwnPropertySymbols(l)):m},r.prototype.listeners=function(l){var c=this._events[n?n+l:l];if(!c)return[];if(c.fn)return[c.fn];for(var m=0,y=c.length,u=new Array(y);m<y;m++)u[m]=c[m].fn;return u},r.prototype.listenerCount=function(l){var c=this._events[n?n+l:l];return c?c.fn?1:c.length:0},r.prototype.emit=function(l,c,m,y,u,p){var d=n?n+l:l;if(!this._events[d])return!1;var v,x,h=this._events[d],f=arguments.length;if(h.fn){switch(h.once&&this.removeListener(l,h.fn,void 0,!0),f){case 1:return h.fn.call(h.context),!0;case 2:return h.fn.call(h.context,c),!0;case 3:return h.fn.call(h.context,c,m),!0;case 4:return h.fn.call(h.context,c,m,y),!0;case 5:return h.fn.call(h.context,c,m,y,u),!0;case 6:return h.fn.call(h.context,c,m,y,u,p),!0}for(x=1,v=new Array(f-1);x<f;x++)v[x-1]=arguments[x];h.fn.apply(h.context,v)}else{var w,S=h.length;for(x=0;x<S;x++)switch(h[x].once&&this.removeListener(l,h[x].fn,void 0,!0),f){case 1:h[x].fn.call(h[x].context);break;case 2:h[x].fn.call(h[x].context,c);break;case 3:h[x].fn.call(h[x].context,c,m);break;case 4:h[x].fn.call(h[x].context,c,m,y);break;default:if(!v)for(w=1,v=new Array(f-1);w<f;w++)v[w-1]=arguments[w];h[x].fn.apply(h[x].context,v)}}return!0},r.prototype.on=function(l,c,m){return i(this,l,c,m,!1)},r.prototype.once=function(l,c,m){return i(this,l,c,m,!0)},r.prototype.removeListener=function(l,c,m,y){var u=n?n+l:l;if(!this._events[u])return this;if(!c)return a(this,u),this;var p=this._events[u];if(p.fn)p.fn!==c||y&&!p.once||m&&p.context!==m||a(this,u);else{for(var d=0,v=[],x=p.length;d<x;d++)(p[d].fn!==c||y&&!p[d].once||m&&p[d].context!==m)&&v.push(p[d]);v.length?this._events[u]=v.length===1?v[0]:v:a(this,u)}return this},r.prototype.removeAllListeners=function(l){var c;return l?this._events[c=n?n+l:l]&&a(this,c):(this._events=new o,this._eventsCount=0),this},r.prototype.off=r.prototype.removeListener,r.prototype.addListener=r.prototype.on,r.prefixed=n,r.EventEmitter=r,e.exports=r},ze(Pe={exports:{}}),Pe.exports);class Jt{constructor(t){this.data=void 0,this.next=void 0,this.data=t,this.next=null}}class Xt{constructor(){this.head=void 0,this.tail=void 0,this.size=void 0,this.head=null,this.tail=null,this.size=0}enqueue(t){let n=new Jt(t);this.isEmpty()?(this.head=n,this.tail=n):(this.tail&&(this.tail.next=n),this.tail=n),this.size++}dequeue(){if(this.isEmpty())return null;{var t,n;let o=((t=this.head)==null?void 0:t.data)||null;return this.head=((n=this.head)==null?void 0:n.next)||null,this.isEmpty()&&(this.tail=null),this.size--,o}}remove(t){let n=this.head,o=null;for(;n;){if(n.data===t)return o?(o.next=n.next,n.next||(this.tail=o)):(this.head=n.next,this.head||(this.tail=null)),void this.size--;o=n,n=n.next}}isEmpty(){return this.size===0}}const en=new class{constructor(){this.frameDeadline=void 0,this.taskQueue=void 0,this.channel=void 0,this.messagePort=void 0,this.triggerPort=void 0,this.rafTriggered=void 0,this.activeFrameTime=33.33,this.frameDeadline=performance.now()+this.activeFrameTime,this.taskQueue=new Xt,this.channel=new MessageChannel,this.messagePort=this.channel.port1,this.triggerPort=this.channel.port2,this.rafTriggered=!1,this.messagePort.onmessage=()=>{this.handleTask()}}size(){return this.taskQueue.size}timeRemaining(){return Math.max(0,this.frameDeadline-performance.now())}execTask(e){return e({timeRemaining:()=>this.timeRemaining()})}handleTask(){if(this.timeRemaining()<=0)return void this.trigger();let e=this.taskQueue.dequeue();for(;e;)try{this.execTask(e)}finally{if(this.timeRemaining()<=0)break;e=this.taskQueue.dequeue()}this.trigger()}trigger(){this.rafTriggered||this.taskQueue.size!==0&&(this.rafTriggered=!0,requestAnimationFrame(e=>{this.frameDeadline=e+this.activeFrameTime,this.rafTriggered=!1,e<this.frameDeadline&&this.triggerPort.postMessage(null)}))}async runTask(e){return!this.rafTriggered&&performance.now()<this.frameDeadline?this.execTask(e):new Promise((t,n)=>{this.taskQueue.enqueue(()=>{try{t(this.execTask(e))}catch(o){n(o)}}),this.trigger()})}buildTask(e){let t,n,o=!1,s=!1;const i=new Promise((r,l)=>{n=r}),a=r=>{if(!o)return t=e(r),s=!0,n(t),t;n(void 0)};return this.taskQueue.enqueue(a),this.trigger(),{cancel:()=>{o=!0,n(void 0),this.taskQueue.size<=5e3&&this.taskQueue.remove(a)},promise:i,state:()=>({isCancelled:o,isDone:s,result:t})}}};class tn{constructor(){this.tasks=new Map}runTask(t,n){const o=this.tasks.get(t);o&&o.cancel();const s=en.buildTask(n);return this.tasks.set(t,s),s.promise.finally(()=>{this.tasks.get(t)===s&&this.tasks.delete(t)}),s}dispose(){this.tasks.forEach(t=>t.cancel()),this.tasks.clear()}}const nn=Object.prototype.hasOwnProperty;function ge(e,t){if(Object.is(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;const n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(let s=0;s<n.length;s++)if(!nn.call(t,n[s])||!Object.is(e[n[s]],t[n[s]]))return!1;return!0}const Ve=e=>{var t,n,o;return{node:e,view:g.dom2view.get(e),key:(t=g.dom2view.get(e))==null?void 0:t.key,keyed:(o=(n=g.dom2view.get(e))==null?void 0:n.key,o!=null)}};class g{static getNextIndex(){return++g.index}static createAnchor(){const t=document.createTextNode("");return t[g.symbols.ANCHOR]=!0,t}static isAnchor(t){return t instanceof Text&&t[g.symbols.ANCHOR]}constructor(t=g.createAnchor()){this.__index=g.getNextIndex(),this.scheduler=new tn,this.events=new Kt,this.anchor=void 0,this.children=[],this.context={},this.parentView=g.globalView,this.is_container=!1,this.has_outside_effect=!1,this.key=void 0,this.effectScope=jt(!0),this.initialized=!1,this.zoneFlag="",this.anchor=t,g.dom2view.set(this.anchor,this),this.events.on("error",n=>{var o;this.events.listenerCount("error")===1&&((o=this.parentView)==null||o.events.emit("error",n))}),this.events.on("throw",n=>{var o;this.events.listenerCount("throw")===1&&((o=this.parentView)==null||o.events.emit("throw",n))})}initialize(){this.initialized||(this.events.emit("init_before"),this.events.emit("init"),this.events.emit("init_after"),this.initialized=!0)}mount(t,n){this.initialize(),this.events.emit("mount_before",t,this.parentView),t.insertBefore(this.anchor,n||null),this.mountChildren(t),this.events.emit("mounted",t,this.parentView),this.events.emit("mount_after",t,this.parentView)}mountChildren(t){if(!t.contains(this.anchor))throw new Error("Cannot mount children before anchor, anchor not contained in parentElement.");for(const n of this.children){t.insertBefore(n,this.anchor);const o=g.dom2view.get(n);if(o){if(o===this)throw new Error("Cannot mount children to self");o.parentView=this,o.mount(t,n)}}}updateChildren(t){const n=t.flat(64).map(i=>function(a){if(a==null)return null;if(a instanceof Node)return a;if(j(a)||typeof a=="function"){const r=new g;let l;if(r.has_outside_effect=!0,j(a)){const c=document.createTextNode("");l=Z(()=>{const m=String(C(a));m!==c.textContent&&(c.textContent=m)},{lazy:!1}),r.updateChildren([c])}else l=Z(()=>{const c=a();r.updateChildren(Array.isArray(c)?c:[c])},{lazy:!1});return r.events.on("unmounted",()=>{l.effect.stop()}),r.anchor}return document.createTextNode(String(a))}(i)).filter(Boolean);if(this.children.length===0&&n.length===0)return;const o=function(i,a){const r=[],l=i.map(Ve),c=a.map(Ve);if(l.length===0)return c.map((u,p)=>({type:"remove",node:u,index:p}));if(c.length===0)return l.map((u,p)=>({type:"insert",index:p,node:u}));for(let u=0;u<Math.max(l.length,c.length);u++){var m,y;const p=l[u],d=c[u];if((p==null?void 0:p.node)===(d==null?void 0:d.node)||p!=null&&p.view&&d!=null&&d.view&&(p==null?void 0:p.view)===(d==null?void 0:d.view)||p!=null&&p.keyed&&d!=null&&d.keyed)continue;if(!(!((p==null?void 0:p.node)instanceof Text&&(d==null?void 0:d.node)instanceof Text)||g.isAnchor(p.node)||g.isAnchor(d.node)||(m=p.view)!=null&&m.has_outside_effect||(y=d.view)!=null&&y.has_outside_effect)){p.node.textContent!==d.node.textContent&&r.push({type:"text",oldNode:d,newNode:p,index:u});continue}const v=()=>{p&&!p.keyed&&r.push({type:"insert",index:u,node:p}),d&&!d.keyed&&r.push({type:"remove",index:u,node:d})};if(p&&d)if(p||d)if(p.keyed||d.keyed)v();else if(p.view||d.view)if(p.view&&d.view)if(p.view.has_outside_effect||d.view.has_outside_effect)v();else{const x=d.view,h=p.view,f=x instanceof z,w=h instanceof z;if(f&&!w||!f&&w){v();continue}if(f&&w){x.elem.nodeName===h.elem.nodeName?r.push({type:"dom-update",oldNode:d,newNode:p,index:u}):v();continue}const S=O.view2component.get(x),b=O.view2component.get(h);if(!S&&b||S&&!b){v();continue}if(S!=null&&S._component_type&&b!=null&&b._component_type&&S._component_type!==b._component_type){v();continue}r.push({type:"view-patch",oldNode:d,newNode:p,index:u})}else v();else v();else v();else v()}for(let u=0;u<l.length;u++){const p=l[u];if(p==null||!p.keyed)continue;const d=c.findIndex(v=>v.key===p.key);r.push(d!==u?d!==-1?{type:"move",to:u,node:c[d],newNode:p}:{type:"insert",index:u,node:p}:p.view instanceof z?{type:"dom-update",oldNode:c[d],newNode:p,index:u}:{type:"view-patch",oldNode:c[d],newNode:p,index:u})}for(let u=0;u<c.length;u++){const p=c[u];p!=null&&p.keyed&&l.findIndex(d=>d.key===p.key)===-1&&r.push({type:"remove",index:u,node:p})}return r}(n,this.children);if(o.length===0)return;const s=()=>{const i=this.patchAll(o,n);this.children=i.filter(Boolean)};this.initialized?this.scheduler.runTask("patch-children",s):s()}patchAll(t,n){const o=n.slice();this.children.forEach((h,f)=>{o.length>f&&(o[f]=h)}),t.forEach(h=>{switch(h.type){case"move":o[h.to]=h.node.node;break;case"insert":o[h.index]=h.node.node;break;case"text":case"dom-update":o[h.index]=h.oldNode.node;break;case"view-patch":o[h.index]=h.newNode.node}});const s={},i=h=>{if(!this.anchor.parentNode||this.children.length===0)return null;let f=h;for(;o.length>f;){if(f in s)return s[f];const w=o[f];if(w&&(w==null?void 0:w.parentNode)===this.anchor.parentNode)return s[f]=w,w;f++}return s[f]=null,null},a=(h,f)=>{const w=i(f+1),S=(w==null?void 0:w.parentNode)===this.anchor.parentNode?w:this.anchor;h.view&&(h.view.parentView.children=h.view.parentView.children.filter(b=>b!==h.node)),this.anchor.parentNode&&(h.view?(h.view.parentView=this,h.view.mount(this.anchor.parentNode,S)):this.anchor.parentNode.insertBefore(h.node,S))},r=h=>{var f;h.view?h.view.unmount():(f=h.node.parentElement)==null||f.removeChild(h.node)},l=(h,f,w)=>{a(f,w),r(h)},c=(h,f)=>{h.update(f.DOMProps,f.DOMChildren),h.DOMChildren=f.DOMChildren,h.DOMProps=f.DOMProps,f!==h&&(f.children=[],f.unmount())},m=(h,f,w)=>{const S=h.view,b=f.view;if(S instanceof z&&b instanceof z)return void c(S,b);b.initialize();const _=O.view2component.get(S),D=O.view2component.get(b);_&&D?(_.props=D.props,_.state=D.state,_.children=D.children,_.render=D.render,_.update(),D.children=[],D.view.children=[],b.unmount()):S.updateChildren(b.children)};for(const h of t)switch(h.type){case"move":{var y;const{to:f,node:w,newNode:S}=h;w.view instanceof g&&S.view instanceof g&&m(w,S);const b=i(f+1),_=(b==null?void 0:b.parentNode)===this.anchor.parentNode?b:this.anchor;this.anchor.parentNode&&(w.view?(w.view.parentView=this,w.view.mount(this.anchor.parentNode,_)):this.anchor.parentNode.insertBefore(w.node,_)),(y=S.view)==null||y.unmount();break}case"insert":{const{node:f,index:w}=h;a(f,w);break}case"remove":break;case"view-patch":{var u,p,d,v;const{newNode:f,oldNode:w,index:S}=h;if(((u=w.view)==null?void 0:u.key)!==void 0&&((p=f.view)==null?void 0:p.key)!==void 0&&((d=w.view)==null?void 0:d.key)!==null&&((v=f.view)==null?void 0:v.key)!==null&&f.view.key===w.view.key){o[h.index]=h.oldNode.node;break}const b=O.view2component.get(f.view),_=O.view2component.get(w.view);if(b&&_&&b._component_type===_._component_type&&ge(b.props,_.props)){var x;_.props=b.props,_.state=b.state,_.children=b.children;const D=b.view;b.view=_.view,_.render=b.renderBuilder(),b.view=D,_.update(),b.children=[],b.view.children=[],(x=f.view)==null||x.unmount(),o[h.index]=h.oldNode.node;break}l(w,f,S);break}case"dom-update":{const{newNode:f,oldNode:w}=h;c(w.view,f.view);break}case"text":{const{newNode:f,oldNode:w}=h;w.node.textContent=f.node.textContent;break}}return t.forEach(h=>{if(h.type!=="remove")return;const{node:f}=h;r(f)}),o}remove(){for(const n of this.children){var t;(t=n.parentElement)==null||t.removeChild(n);const o=g.dom2view.get(n);o&&o.remove()}}effect(t,n="unmounted"){return this.effectScope.run(()=>{const o=Z(t,{lazy:!1});return o.effect.deps.length===0?o.effect.stop():this.events.once(n,()=>o.effect.stop()),o})}unmount(){var t;this.events.emit("unmount_before"),this.scheduler.dispose(),(t=this.anchor.parentNode)==null||t.removeChild(this.anchor),this.unmountChildren(),this.events.emit("unmounted"),this.events.emit("unmount_after"),this.events.removeAllListeners(),this.effectScope.stop()}unmountChildren(){this.remove();for(const t of this.children){const n=g.dom2view.get(t);n&&n.unmount()}}zone(t,n="setup"){const o=this.zoneFlag;g.pushView(this),this.zoneFlag=n;try{return t()}finally{this.zoneFlag=o,g.popView()}}getContextValue(t,n){let o=this;for(;o;){const s=o.context;if(t in s){const i=s[t];if(!n||n(i))return i}o=o.parentView}return g.symbols.NONE}setContextValue(t,n){let o=this;for(;o;){if(o.is_container)return void(o.context[t]=n);o=o.parentView}throw new Error(`Cannot set context value: ${String(t)}`)}}g.symbols={NONE:Symbol("NONE"),DIRECTIVES:Symbol("DIRECTIVES"),ANCHOR:Symbol("ANCHOR")},g.isNone=e=>e===g.symbols.NONE,g.index=0,g.dom2view=new WeakMap,g.stack=[],g.topView=()=>g.stack[g.stack.length-1],g.pushView=e=>g.stack.push(e),g.popView=()=>g.stack.pop(),g.globalView=new g,g.stack.push(g.globalView),g.globalView.is_container=!0;const we=e=>typeof e=="function"?e():j(e)?C(e):Array.isArray(e)?e.map(we):typeof e=="object"?Object.fromEntries(Object.entries(e).map(([t,n])=>[t,we(n)])):C(e);class z extends g{constructor(t,n,o){super(),this.DOMProps=void 0,this.DOMChildren=void 0,this.elem=void 0,this.props={},this.propsCleanups={},this.DOMProps=n,this.DOMChildren=o,this.elem=t instanceof Node?t:document.createElement(t),this.key=n.key,delete n.key,g.dom2view.set(this.elem,this)}initialize(){this.initialized||(this.events.emit("init_before"),this.events.emit("init"),this.update(this.DOMProps,this.DOMChildren),this.events.emit("init_after"),this.initialized=!0)}mount(t,n){this.initialize(),this.events.emit("mount_before",t,this.parentView),t.insertBefore(this.elem,n||null),this.elem.appendChild(this.anchor),this.mountChildren(),this.events.emit("mounted",t,this.parentView),this.events.emit("mount_after",t,this.parentView)}update(t,n){this.events.emit("update_before");try{this.updateChildren(n),ge(t,this.props)||(this.updateProps(t),this.props=t),this.events.emit("updated")}finally{this.events.emit("update_after")}}updateProps(t){if(ge(t,this.props))return;const n=this.diffProps(t,this.props);if(n.length===0)return;const o=()=>{for(const s of n){const{type:i,key:a,value:r}=s;switch(i){case"patch":this.patchProp(a,r),this.props[a]=r;break;case"remove":this.cleanupProp(a),delete this.props[a]}}};this.initialized?this.scheduler.runTask("patch-task",o):o()}addPropCleanup(t,n){const o=this.propsCleanups[t];this.propsCleanups[t]=()=>{o==null||o(),n()}}cleanupProp(t){var n,o;(n=(o=this.propsCleanups)[t])==null||n.call(o),delete this.propsCleanups[t]}patchProp(t,n){if(this.cleanupProp(t),this.matchDirectives(t,n),t.startsWith("$")||t.startsWith("_")||t==="key")return;const o=this.elem;if(t!=="ref"){if(o instanceof Element)if(t.startsWith("on")){const s=t.slice(2).toLowerCase();o.addEventListener(s,n);const i=()=>o.removeEventListener(s,n);this.events.once("unmounted",i),this.addPropCleanup(t,()=>{this.events.off("unmounted",i),o.removeEventListener(s,n)})}else{const s=this.effect(()=>{const i=this.elem;if(!(i instanceof Element))return;const a=we(n);((r,l,c)=>{var m;if(typeof c!="boolean")switch(l){case"className":case"class":{let y="";y=Array.isArray(c)?c.join(" "):typeof c=="object"?Object.entries(c).filter(([u,p])=>!!p).map(([u])=>u).join(" "):String(c),r.setAttribute("class",y);break}case"style":if(!((m=r)instanceof Element&&typeof m.style=="object"))break;typeof c=="object"?Object.entries(c).forEach(([y,u])=>r.style[y]=u):r.style.cssText=String(c);break;case"value":r.value=c;break;default:r.setAttribute(l,String(c))}else c?r.setAttribute(l,""):r.removeAttribute(l)})(i,t,a)});this.addPropCleanup(t,()=>s==null?void 0:s.effect.stop())}}else j(n)?n.value=o:typeof n=="function"&&n(o)}diffProps(t,n){const o=[];return Object.entries(t).forEach(([s,i])=>{Object.is(n[s],i)||o.push({type:"patch",key:s,value:i})}),Object.entries(n).forEach(([s,i])=>{s in t||o.push({type:"remove",key:s,value:i})}),o}matchDirectives(t,n){const o=this.getContextValue(g.symbols.DIRECTIVES,l=>!(l==null||!l[t]));if(!o)return;const s=o[t];if(!s)return;const{mounted:i,unmounted:a,updated:r}=s;i&&this.events.once("mounted",()=>{this.effectScope.run(()=>{const l=this.zone(()=>i(this.elem,n,this));l&&this.addPropCleanup(t,l)})},"directive"),a&&this.events.once("unmounted",()=>{this.effectScope.run(()=>{const l=this.zone(()=>a(this.elem,n,this));l&&this.addPropCleanup(t,l)})},"directive"),r&&this.events.on("updated",()=>{this.effectScope.run(()=>{const l=this.zone(()=>r(this.elem,n,this));l&&this.addPropCleanup(t,l)})},"directive")}mountChildren(){const t=this.elem;for(const n of this.children){t.insertBefore(n,this.anchor);const o=g.dom2view.get(n);if(o){if(o===this)throw new Error("Cannot mount children to self");o.parentView=this,o.mount(t,n)}}}unmount(){var t;(t=this.elem.parentElement)==null||t.removeChild(this.elem),Object.values(this.propsCleanups).forEach(n=>n()),this.propsCleanups={},super.unmount()}}class O{constructor(){this._component_type=void 0,this.renderBuilder=void 0,this.render=void 0,this.runner=void 0,this.view=new g,this.props={},this.state={},this.children=[],this.view.is_container=!0,this.view.events.once("unmounted",()=>this.dispose()),this.view.events.once("init_after",()=>{this.view.effectScope.run(()=>{this.runner=Z(this.update.bind(this),{lazy:!1,onStop:()=>this.view.events.emit("render_stop"),onTrack:t=>this.view.events.emit("render_tracked",t),onTrigger:t=>this.view.events.emit("render_triggered",t)})})}),O.view2component.set(this.view,this)}update(){this.view.events.emit("update_before");try{const t=this.view.effectScope.run(()=>this.view.zone(()=>this.render(this.props,this.state,this.children),"render"));this.view.updateChildren(Array.isArray(t)?t:[t]),this.view.events.emit("updated")}catch(t){setTimeout(()=>{this.view.events.emit("error",t)}),console.error(t)}finally{this.view.events.emit("update_after")}}dispose(){var t;(t=this.runner)==null||t.effect.stop()}}O.view2component=new WeakMap;const pt=(e,t,n)=>{let o;return o=typeof e=="function"?(s=>(i,a)=>{const r=new O;return r.props=i,r.children=a,r.view.key=i.key,r.view.events.once("init",()=>{r.render=r.view.zone(()=>s(i,r.state,r.children))}),r._component_type=s,r.renderBuilder=()=>r.view.zone(()=>s(i,r.state,r.children)),r})(e):(s=>(i,a)=>{const r=new O;return r.props=i,r.children=a,r.view.key=i.key,r.view.events.once("init",()=>{r.state=r.view.zone(()=>s.setup(i,a))}),r._component_type=s,r.render=s.render,r.renderBuilder=()=>s.render,r})(e),o(t,n)},k=(e,t={},...n)=>{if(t||(t={}),n||(n=[]),n=n.flat(64),e instanceof Node){const o=g.dom2view.get(e);return o?o instanceof z&&o.update(t,n):new z(e,t,n),e}return typeof e=="string"||e instanceof String?new z(e,t,n).elem:pt(e,t,n).view.anchor};function on(e,t,n){const o=e instanceof Element?e:document.querySelector(e);if(!o)throw new Error("Could not find selector");if(!(t instanceof Node)){const s=pt(t,n||{},[]);return s.view.mount(o),s}{const s=g.dom2view.get(t);s?s.mount(o):o.appendChild(t)}}const sn=e=>{const t=(n=g.topView(),new Proxy({},{get(o,s,i){const a=n.getContextValue(s);if(!g.isNone(a))return a},set:(o,s,i,a)=>(n.setContextValue(s,i),!0)}));var n;return e==null||e(t),t};function ye(){return ye=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},ye.apply(this,arguments)}function K(e,...t){Xe();try{return e.apply(void 0,t)}finally{et()}}const E=e=>typeof e=="function"?K(e):K(C,e),rn=(e,t,n=!1)=>{const o=g.topView();return o.events[n?"once":"on"](e,t),()=>o.events.off(e,t)},de=(e,t=!1)=>n=>rn(e,n,t),mt=de("mounted"),$e=de("mount_before"),M=de("unmounted"),an=de("update_after"),cn=e=>{const t=g.topView();if(t.zoneFlag==="render"){const n=()=>{t.events.off("update_before",o),t.events.off("unmounted",o)},o=()=>{n(),e()};return t.events.once("update_before",o),t.events.once("unmounted",o),n}return t.events.once("unmounted",e),()=>t.events.off("unmounted",e)},X=(e,t)=>{let n;const o=Z(()=>{n&&K(n),n=void 0,e(a=>n=a)},ye({lazy:!1},t));let s;const i=()=>{s==null||s(),n==null||n(),n=void 0,o.effect.stop()};return s=cn(i),{runner:o,cleanup:i}};function ln(e,t){const n=t==null?void 0:t.equals,o=ve(e);return[J(o),s=>{const i=E(o),a=typeof s=="function"?s(i):s;n&&n(i,a)||(o.value=a,Yt(o))}]}function P(e,t,n){let o;return X(s=>{const i=j(e)?e.value:e();K(t,i,o,s),o=i},n)}function De(e){let t;const n=A();return X(()=>{t&&K(t),t=void 0;const o=e(s=>t=s);Object.is(o,E(n))||(n.value=o)}),J(n)}function dn(e,t){const n=A(t);return[J(n),o=>{n.value=e(E(n),o)}]}function ft(){const e=g.topView();e.zoneFlag!=="setup"&&console.warn('Warning: Marking a component with outside effect outside "setup" zone may cause unexpected behavior.'),e.has_outside_effect=!0}const un=(e,t)=>{g.topView().setContextValue(e,t)};function hn(e,t=g.symbols.NONE){const n=g.topView().getContextValue(e);return n===g.symbols.NONE&&t!==g.symbols.NONE?t:n}const pn=(...e)=>e.map(t=>C(t)),vt=pn,mn=(e,t)=>{const n=A("");return X(()=>{const o=E(n);o&&URL.revokeObjectURL(o),n.value=URL.createObjectURL(new Blob([C(e)],{type:"text/plain",...t}))}),M(()=>URL.revokeObjectURL(n.value)),n},fn="modulepreload",vn=function(e,t){return new URL(e,t).href},Ue={},gn=function(t,n,o){if(!n||n.length===0)return t();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=vn(i,o),i in Ue)return;Ue[i]=!0;const a=i.endsWith(".css"),r=a?'[rel="stylesheet"]':"";if(!!o)for(let m=s.length-1;m>=0;m--){const y=s[m];if(y.href===i&&(!a||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${r}`))return;const c=document.createElement("link");if(c.rel=a?"stylesheet":fn,a||(c.as="script",c.crossOrigin=""),c.href=i,document.head.appendChild(c),a)return new Promise((m,y)=>{c.addEventListener("load",m),c.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t())},wn=()=>gn(()=>import("https://unpkg.com/@monaco-editor/loader@1.3.3/lib/umd/monaco-loader.js"),[],import.meta.url).then(()=>window.monaco_loader).then(e=>e.init()),yn=({value:e,onChange:t,isDark:n,onSave:o,...s})=>{let i,a,r;return X(()=>{const l=C(n);r!=null&&r.editor&&(l?r.editor.setTheme("vs-dark"):r.editor.setTheme("vs"))}),M(()=>{i==null||i.dispose()}),j(e)&&P(e,l=>{(a==null?void 0:a.getValue())!==l&&(a==null||a.setValue(l))}),()=>k("div",{...s,ref:async l=>{r=await wn(),a=r.editor.createModel(E(e),"typescript",r.Uri.file("main.ts")),a.onDidChangeContent(()=>t(a.getValue())),r.languages.typescript.typescriptDefaults.setCompilerOptions({jsx:"react"}),r.languages.typescript.typescriptDefaults.setDiagnosticsOptions({noSemanticValidation:!0,noSyntaxValidation:!0}),i=r.editor.create(l,{automaticLayout:!0,wordWrap:!0,theme:E(n)?"vs-dark":"vs"}),i.setModel(a),o&&i.addCommand(r.KeyMod.CtrlCmd|r.KeyCode.KeyS,()=>{o(a.getValue())})}})};function be(){return be=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},be.apply(this,arguments)}function bn(e,t,n=""){const o=t===":root",s=o?"":t,i=e.split(",").map(l=>l.trim()).filter(Boolean);let a=o?[""]:s.split(",").map(l=>l.trim()).filter(Boolean);var r;return(r=a,i.flatMap(l=>r.map(c=>[l,c]))).map(([l,c])=>l.startsWith("&")?l.replace(/&/g,c):`${c} ${l}`).map(l=>`${l.replace(n||"","")}${n||""}`.trim()).join(",")}const He=e=>e&&(e.nodeType===Node.DOCUMENT_NODE||e.nodeType===Node.DOCUMENT_FRAGMENT_NODE),Fe=(e,t,n)=>{const{updateCSSText:o,installSheet:s,uninstallSheet:i}=n;let a=!1;return{parseStyle:r=>{const l=function(c,m,{beautify:y=!1,scopedSelector:u=""}){const p=y?`
`:"",d=[{nodeSelector:m+u,cssObject:c}],v=[];for(;d.length>0;){const{nodeSelector:h,cssObject:f}=d.pop(),w={selector:h,cssText:""};for(const S in f){const b=f[S];if(typeof b=="object"){const _=bn(S,h,u);d.push({nodeSelector:_,cssObject:b})}else{if(typeof b=="string"&&!b.trim()||b==null)continue;w.cssText+=`${x=S,x.replace(/[A-Z]/g,_=>`-${_.toLowerCase()}`)}: ${f[S]};${p}`}}w.cssText.trim()&&v.push(w)}var x;return v.map(h=>`${h.selector}{${h.cssText}}`).join(`
`).trim()}(e(),r,{scopedSelector:t});o(l)},applySheet:r=>{a||(a=!0,s(r))},removeSheet:r=>{a&&(a=!1,i(r))}}},kn={STYLESHEET_SCOPED:Symbol("STYLESHEET_SCOPED"),STYLESHEET_ROOT:Symbol("STYLESHEET_ROOT")},We=()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(36),gt=e=>{const{className:t}=e;(({props:o,scopedId:s,rootNodeSelector:i,styleOrFunc:a})=>{const r=(p=>{if(!p)throw new Error("styleOrFn is required.");return typeof p=="function"?p:()=>p})(o.styleFn||o.style||a),l=sn(),{applySheet:c,removeSheet:m,parseStyle:y}=((p,d,v)=>v?((x,h)=>{const f=new CSSStyleSheet,{parseStyle:w,applySheet:S,removeSheet:b}=Fe(x,h,{updateCSSText(_){f.replaceSync(_)},installSheet(_=document){He(_)&&(_.adoptedStyleSheets=[..._.adoptedStyleSheets,f])},uninstallSheet(_=document){He(_)&&(_.adoptedStyleSheets=[..._.adoptedStyleSheets].filter(D=>D!==f))}});return{sheet:f,parseStyle:w,applySheet:S,removeSheet:b}})(p,d):((x,h)=>{const f=document.createElement("style"),{parseStyle:w,applySheet:S,removeSheet:b}=Fe(x,h,{updateCSSText(_){f.innerHTML=_},installSheet(_){_.insertBefore(f,_.firstChild)},uninstallSheet(_){var D;(D=f.parentNode)==null||D.removeChild(f)}});return{styleDOM:f,parseStyle:w,applySheet:S,removeSheet:b}})(p,d))(()=>r(l),s?`[data-s-${s}]`:void 0,o.adopted),{[kn.STYLESHEET_ROOT]:u}=l;if(X(()=>{let p=i;var d;o.adopted&&u&&u instanceof Node&&((d=u).nodeType===Node.DOCUMENT_NODE||d.nodeType===Node.DOCUMENT_FRAGMENT_NODE)&&(p=":root"),y(p)}),o.adopted)c(u),M(()=>m(u));else if((u==null?void 0:u.nodeType)===Node.DOCUMENT_FRAGMENT_NODE)c(u),M(()=>m(u));else{let p;$e(d=>{c(d),p=d}),M(()=>m(p))}})(e),(o=>{const{scopedId:s}=o;if(!s)return;const i=`s-${s}`.replace(/-([a-z])/g,function(u,p){return p.toUpperCase()});let a=null,r=null,l=new Set;const c=u=>{u&&"dataset"in u&&typeof u.dataset=="object"&&(u.dataset[i]="")},m=u=>{u&&"dataset"in u&&typeof u.dataset=="object"&&delete u.dataset[i]},y=()=>{const u=new Set,p=d=>{if(d&&(d===a||!d.is_container)){d instanceof z&&u.add(d.elem);for(const v of d.children){const x=g.dom2view.get(v);x?p(x):v instanceof Element&&u.add(v)}}};p(a);for(const d of u)c(d);for(const d of l)u.has(d)||m(d);l=u};mt((u,p)=>{r=u,a=p,y(),c(u)}),an(()=>{y()}),M(()=>{m(r);for(const u of l)m(u)})})(e);let n=null;$e(o=>{n=o,t&&o instanceof Element&&o.classList.add(t)}),M(()=>{t&&n instanceof Element&&n.classList.remove(t)})},G=(e,t,[n])=>{ft();const o=e.scoped?We():void 0,s=`s-${We()}`;return gt({props:e,styleOrFunc:n,rootNodeSelector:`.${s}`,className:s,scopedId:o}),()=>null},xn=(e,t,[n])=>(ft(),gt({props:be({},e,{scoped:!1}),styleOrFunc:n,rootNodeSelector:":root"}),()=>null);class _n{constructor(){B(this,"idx",0);B(this,"demos",[]);B(this,"currentDemo",null)}registerDemo(t){const n={id:this.idx++,...t};this.demos.push(n),this.currentDemo||(this.currentDemo=n)}selectDemo(t){const n=this.demos.find(o=>o.id===Number(t));if(!n)throw new Error(`Cannot find demo with name ${name}`);return this.currentDemo=n,n}}const Sn=`import { rh, ref, mount, unref, computed, onUnmounted } from "@rhjs/core";

const createInterval = (cb: () => any, ms: number) => {
  const timer = setInterval(cb, ms);
  onUnmounted(() => clearInterval(timer));
};

const App = () => {
  const nowDate = ref(new Date());
  const timeStr = computed(() => unref(nowDate).toLocaleTimeString());
  /**
   * Update the date value every 100ms using setInterval.
   * However, the computed property \`timeStr\` will only be recomputed and the view updated
   * when the \`timeStr\` ref value changes (is "dirty"), thanks to reactivity system.
   * */
  createInterval(() => (nowDate.value = new Date()), 100);

  return () => (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {timeStr}.</h2>
    </div>
  );
};

mount("#app", App);
`,Cn=`import {
  rh,
  mount,
  unref,
  createResource,
  onMounted,
  createState,
  onUnmounted,
  createWatcher,
  createMemo,
} from "@rhjs/core";
import { GlobalStyle } from "@rhjs/builtin";

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
`,Tn=`import {
  rh,
  mount,
  unref,
  createState,
  enableDirective,
  createEffect,
  ref,
  untrack,
} from "@rhjs/core";
import { GlobalStyle, Style } from "@rhjs/builtin";

// @ts-ignore
import { marked } from "https://cdn.jsdelivr.net/npm/marked@5.0.3/lib/marked.esm.js";

enableDirective({
  key: "$innerHTML",
  mounted: (elem, value) => {
    if (!(elem instanceof HTMLElement)) {
      return;
    }
    const { cleanup } = createEffect(() => {
      elem.innerHTML = unref(value);
    });
    return cleanup;
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
`,En=`import { mount, createState } from "@rhjs/core";
// @ts-ignore
import { html, css } from "@rhjs/tag";

const AppStyle = () => {
  return () => css\`
    .card {
      width: 500px;
      margin: auto;

      padding: 2rem;
      border-radius: 1rem;
      box-shadow: rgba(240, 46, 170, 0.4) -5px 5px,
        rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px,
        rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .card-title {
      font-weight: bold;
      font-size: 1.2rem;
    }
    .card-text {
      font-size: 0.8rem;
    }

    .btn {
      padding: 0.6em 2em;
      border: none;
      outline: none;
      color: rgb(255, 255, 255);
      background: #111;
      cursor: pointer;
      position: relative;
      z-index: 0;
      border-radius: 10px;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
    }

    .btn:before {
      content: "";
      background: linear-gradient(
        45deg,
        #ff0000,
        #ff7300,
        #fffb00,
        #48ff00,
        #00ffd5,
        #002bff,
        #7a00ff,
        #ff00c8,
        #ff0000
      );
      position: absolute;
      top: -2px;
      left: -2px;
      background-size: 400%;
      z-index: -1;
      filter: blur(5px);
      -webkit-filter: blur(5px);
      width: calc(100% + 4px);
      height: calc(100% + 4px);
      animation: glowing-btn 20s linear infinite;
      transition: opacity 0.3s ease-in-out;
      border-radius: 10px;
    }

    @keyframes glowing-btn {
      0% {
        background-position: 0 0;
      }
      50% {
        background-position: 400% 0;
      }
      100% {
        background-position: 0 0;
      }
    }

    .btn:after {
      z-index: -1;
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background: #222;
      left: 0;
      top: 0;
      border-radius: 10px;
    }
  \`;
};

const Card = () => {
  const [count, setCount] = createState(0);
  return () => html\`
    <div class="card">
      <h2 class="card-title">Card title</h2>
      <p class="card-text">
        Lorem ipsum dolor sit amet, ferri dicunt ius an, dico nihil suscipit pro
        cu. In nostrud deterruisset mei, at vis partiendo pertinacia
        interpretaris. Regione feugait ponderum usu an, mei facer dolorum
        scripserit no, omnium inimicus te usu. Usu graeco iudicabit efficiendi
        at, cu ridens possit admodum sit.
      </p>
      <div onclick=\${() => setCount((c) => c + 1)} class="btn btn-primary">
        Count: \${count}
      </div>
    </div>
  \`;
};

const App = () => {
  return () => html\`
    <h1>Hello HTML Tag</h1>
    <small>and css tag</small>
    <\${AppStyle} />
    <\${Card} />
  \`;
};

mount("#app", App);
`,Dn=`import "https://cdn.skypack.dev/twind/shim";
import { mount, createState, unref } from "@rhjs/core";
// @ts-ignore
import { html } from "@rhjs/tag";

const CookieBanner = () => {
  const [show, setShow] = createState(true);
  const hide = () => setShow(false);
  return () =>
    !unref(show)
      ? null
      : html\`
          <div
            class="w-full max-w-sm flex flex-col items-center gap-8 bg-slate-600 p-5 rounded-xl"
          >
            <svg
              class="w-12 h-12 md:w-10 md:h-10"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Environment / Cookie">
                <g id="Vector">
                  <path
                    d="M12.1521 4.08723C12.1513 3.71959 12.1001 3.3538 12 3C16.9683 3.00545 20.9944 7.03979 21 12C21.0161 16.9625 16.9705 20.9835 12 20.9997C7.02946 21.0158 3.01615 16.963 3 12.0005C4.11168 12.2363 5.27038 11.9981 6.1499 11.2795C7.0562 10.5452 7.5789 9.43935 7.5702 8.27407C7.56959 8.01195 7.5461 7.75072 7.5 7.49268C8.51784 7.89624 9.67043 7.76409 10.5708 7.14162C11.5696 6.44537 12.161 5.3034 12.1521 4.08723Z"
                    class="stroke-white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.00195 7.002V7H3V7.00195L3.00195 7.002Z"
                    class="stroke-white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.00195 3.002V3H8V3.00195L8.00195 3.002Z"
                    class="stroke-white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.00195 3.002V3H4V3.00195L4.00195 3.002Z"
                    class="stroke-white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.002 17.002V17H10V17.002L10.002 17.002Z"
                    class="stroke-white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.002 15.002V15H15V15.002L15.002 15.002Z"
                    class="stroke-white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.002 12.002V12H11V12.002L11.002 12.002Z"
                    class="stroke-white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.002 10.002V10H16V10.002L16.002 10.002Z"
                    class="stroke-white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.00195 7.002V7H3V7.00195L3.00195 7.002Z"
                    class="stroke-white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.00195 3.002V3H8V3.00195L8.00195 3.002Z"
                    class="stroke-white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.00195 3.002V3H4V3.00195L4.00195 3.002Z"
                    class="stroke-white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </g>
            </svg>
            <div>
              <h4 class="text-white font-bold text-base text-center">
                We use cookies
              </h4>
              <p class="text-white text-xs mt-2 md:mt-1 text-center">
                Cookies help us deliver the best experience on our website. By
                using our website, you agree to the use of cookies. Find out how
                we use cookies.
              </p>
            </div>
            <div class="flex">
              <button
                class="text-xs text-white border-[1px] py-2 px-5 rounded-tl-2xl rounded-bl-2xl hover:bg-white hover:text-slate-600"
                onClick=\${hide}
              >
                Accept
              </button>
              <button
                class="text-xs text-white border-[1px] py-2 px-5 rounded-tr-2xl rounded-br-2xl hover:bg-white hover:text-slate-600"
              >
                Reject
              </button>
            </div>
          </div>
        \`;
};

const App = () => {
  return () => html\`
    <h1>Tailwind CSS Cookie Banner Modal</h1>
    <p>
      <small>
        <a
          class="hover:underline"
          href="https://tailwindcomponents.com/component/cookie-banner-modal"
          target="_blank"
        >
          source here
        </a>
      </small>
    </p>
    <\${CookieBanner} />
  \`;
};

mount("#app", App);
`,jn=`import { rh, mount } from "@rhjs/core";
import { Scope } from "@rhjs/builtin";
// @ts-ignore
import { html } from "@rhjs/tag";
// @ts-ignore
import { enable as enableAtomicCSS } from "@rhjs/atomic-css";

enableAtomicCSS("$class");

const Logo = ({ fillColor = "#4f46e5" }: { fillColor?: string }) => {
  return () => html\`
    <svg
      $class="mx-auto h-10 w-auto"
      alt="Your Company"
      viewBox="0 0 47 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill=\${fillColor}
        d="M23.5 6.5C17.5 6.5 13.75 9.5 12.25 15.5C14.5 12.5 17.125 11.375 20.125 12.125C21.8367 12.5529 23.0601 13.7947 24.4142 15.1692C26.6202 17.4084 29.1734 20 34.75 20C40.75 20 44.5 17 46 11C43.75 14 41.125 15.125 38.125 14.375C36.4133 13.9471 35.1899 12.7053 33.8357 11.3308C31.6297 9.09158 29.0766 6.5 23.5 6.5ZM12.25 20C6.25 20 2.5 23 1 29C3.25 26 5.875 24.875 8.875 25.625C10.5867 26.0529 11.8101 27.2947 13.1642 28.6693C15.3702 30.9084 17.9234 33.5 23.5 33.5C29.5 33.5 33.25 30.5 34.75 24.5C32.5 27.5 29.875 28.625 26.875 27.875C25.1633 27.4471 23.9399 26.2053 22.5858 24.8307C20.3798 22.5916 17.8266 20 12.25 20Z"
      />
      <defs>
        <linearGradient
          id="%%GRADIENT_ID%%"
          x1="33.999"
          x2="1"
          y1="16.181"
          y2="16.181"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="%%GRADIENT_TO%%" />
          <stop offset="1" stop-color="%%GRADIENT_FROM%%" />
        </linearGradient>
      </defs>
    </svg>
  \`;
};

const LoginPage = () => {
  return () =>
    html\`
      <div
        $class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-white"
      >
        <div $class="sm:mx-auto sm:w-full sm:max-w-sm">
          <\${Logo} />
          <h2
            $class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
          >
            Sign in to your account
          </h2>
        </div>

        <div $class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form $class="space-y-6" action="#" method="POST">
            <div>
              <label
                for="email"
                $class="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div $class="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  $class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div $class="flex items-center justify-between">
                <label
                  for="password"
                  $class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div $class="text-sm">
                  <a
                    href="#"
                    $class="font-semibold text-indigo-600 hover:text-indigo-500"
                    >Forgot password?</a
                  >
                </div>
              </div>
              <div $class="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  required
                  $class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                $class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p $class="mt-10 text-center text-sm text-gray-500">
            Not a member?
            <a
              href="#"
              $class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
    \`;
};

const App = () => {
  return () => (
    <div>
      <h1>@rhjs/atomic-css</h1>
      <p>
        Here the styles are not polluted by atomic-css
        <button>👌</button>
      </p>
      <Scope>
        <LoginPage />
      </Scope>
    </div>
  );
};

mount("#app", App);
`,Ln=`import { rh, ref, mount, unref, setupWatch, inject, provide } from "@rhjs/rh";

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
`,Mn=`import { rh, ref, mount, unref, computed, onUnmount } from "@rhjs/rh";

const createInterval = (cb, ms) => {
  const timer = setInterval(cb, ms);
  onUnmount(() => clearInterval(timer));
};

const App = () => {
  const nowDate = ref(new Date());
  const timeStr = computed(() => unref(nowDate).toLocaleTimeString());
  /**
   * Update the date value every 100ms using setInterval.
   * However, the computed property \`timeStr\` will only be recomputed and the view updated
   * when the \`timeStr\` ref value changes (is "dirty"), thanks to reactivity system.
   * */
  createInterval(() => (nowDate.value = new Date()), 100);

  return () => (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {timeStr}.</h2>
    </div>
  );
};

mount("#app", App);
`,Rn=`import {
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
`,L=new _n,ue=e=>({"@rhjs/rh":`https://unpkg.com/@rhjs/rh@${e}/dist/main.module.mjs`}),q=(e="latest",t="latest",n="latest")=>({"@rhjs/core":`https://unpkg.com/@rhjs/core@${e}/dist/main.module.mjs`,"@rhjs/builtin":`https://unpkg.com/@rhjs/builtin@${t}/dist/main.module.mjs`,"@rhjs/tag":`https://unpkg.com/@rhjs/tag@${n}/dist/main.module.mjs`});L.registerDemo({name:"Hello World",code:Sn,importMap:{...q("0.2.5","0.1.3","0.1.6")}});L.registerDemo({name:"Bitcoin",code:Cn,importMap:{...q("0.2.5","0.1.3","0.1.6")}});L.registerDemo({name:"Markdown Editor",code:Tn,importMap:{...q("0.2.5","0.1.3","0.1.6")}});L.registerDemo({name:"HTML tag",code:En,importMap:{...q("0.2.5","0.1.3","0.1.6")}});L.registerDemo({name:"twind",code:Dn,importMap:{...q("0.2.5","0.1.3","0.1.6")}});L.registerDemo({name:"atomic-css",code:jn,importMap:{"@rhjs/atomic-css":"https://unpkg.com/@rhjs/atomic-css@latest/dist/main.module.mjs",...q("0.2.5","0.1.3","0.1.6")}});L.registerDemo({name:"HelloWorld",code:Mn,importMap:{...ue("0.1.2")}});L.registerDemo({name:"Counter",code:Ln,importMap:{...ue("0.1.2")}});L.registerDemo({name:"TodoApp",code:Rn,importMap:{...ue("0.1.2")}});L.registerDemo({name:"Counter",code:On,importMap:{...ue("0.0.34")}});const Be=A(L.currentDemo),wt=()=>({mgr:L,currentDemo:Be,selectDemo(e){Be.value=L.selectDemo(e)},demos:L.demos}),Nn=e=>{var n,o;const t=((n=e.importMap)==null?void 0:n["@rhjs/rh"])||((o=e.importMap)==null?void 0:o["@rhjs/core"]);if(t){const[,,s]=/@rhjs\/(rh|core)@(.+?)\//.exec(t)||[];if(s)return s}return"latest"},An=()=>{const{selectDemo:e,demos:t}=wt();return()=>k("div",null,k("select",{onChange:n=>e(n.target.value)},t.map(n=>k("option",{value:n.id},n.name," @",Nn(n)))))},je=({styleFn:e,isDark:t,...n},o,s)=>()=>k("div",{...n},k(G,{styleFn:()=>({height:"30px",display:"inline-flex",alignItems:"center",justifyContent:"center",paddingLeft:"12px",paddingRight:"12px",cursor:"pointer",userSelect:"none",marginLeft:"4px","&:hover":{backgroundColor:C(t)?"rgba(64,64,64,1)":"rgba(64,64,64,0.1)"},"&:active":{outline:"solid 1px",outlineColor:C(t)?"#fff":"rgba(64,64,64,1)"},...e==null?void 0:e()})}),s),In=({isDark:e})=>()=>k(je,{onClick:()=>{j(e)&&(e.value=!E(e))},isDark:e},k("span",null,()=>C(e)?"🌘":"🌖"));function zn({isDark:e,href:t,target:n="_blank"},o,s){return()=>k(je,{isDark:e,onClick:()=>{window.open(t,n)}},k("a",{href:t,target:n,style:"text-decoration: none; color: inherit;"},s))}const Pn=({isDark:e})=>()=>k("div",null,k(G,{styleFn:()=>({paddingLeft:"12px",paddingRight:"12px",height:"100%",width:"calc(100% - 24px)",display:"grid",gridTemplateColumns:"minmax(0, 1fr) 12px minmax(0, 1fr)"})}),k("div",{style:"display: inline-flex; align-items: center;"},k("span",{style:"user-select: none;word-break: keep-all;white-space: nowrap;"},"🧩 ",k("b",null,"R"),k("small",null,"eactive"),k("b",null,"H"),k("small",null,"ydrate"),k("b",null,"JS")," PLAYGROUND"),k(In,{isDark:e}),k(An,null)),k("div",null),k("div",{style:"display: inline-flex; align-items: center; justify-content: right;"},k(zn,{isDark:e,href:"https://github.com/zhzLuke96/rh.js"},"github"))),Vn=()=>document.querySelectorAll("iframe").forEach(e=>e.style.pointerEvents="none"),$n=()=>document.querySelectorAll("iframe").forEach(e=>e.style.pointerEvents="auto"),Un=({isHorizontal:e,onResize:t,ref:n})=>{const[o,s]=ln(!1),i=()=>s(!0),a=()=>s(!1),r=u=>{t(u.clientX,u.clientY)},l=u=>{const p=u.touches[0];t(p.clientX,p.clientY)},c=A(null);P(o,u=>{u?(Vn(),window.addEventListener("mousemove",r),window.addEventListener("mouseup",a),window.addEventListener("touchmove",l),window.addEventListener("touchend",a)):($n(),window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",a),window.removeEventListener("touchmove",l),window.removeEventListener("touchend",a))}),P(c,u=>{u&&(u.addEventListener("mousedown",i,{passive:!0}),u.addEventListener("touchstart",i,{passive:!0}))}),M(()=>{var u,p;(u=C(c))==null||u.removeEventListener("mousedown",i),(p=C(c))==null||p.removeEventListener("touchstart",i)});const m=hn("isDark"),y=Qt(()=>C(m)?"rgba(255,255,255,0.3)":"rgba(0,0,0,0.3)");return()=>k("div",{ref:u=>{c.value=u,n&&(n.value=u)}},k(G,{styleFn:()=>({backgroundColor:C(o)?C(y):"",width:e?"100%":"12px",height:e?"12px":"100%",zIndex:C(o)?"10":"auto",cursor:e?"row-resize":"col-resize",userSelect:"none",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"12px","&:hover":{backgroundColor:C(y)}})}),"⚪⚪⚪")},Hn=()=>{const e=`
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
`.trim(),t=URL.createObjectURL(new Blob([e],{type:"text/html"}));return M(()=>URL.revokeObjectURL(t)),`${t}#?embedded=${encodeURIComponent(location.origin)}`},Fn=(e,t,n="")=>`
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
`.trim(),Wn=(e,t,n,o)=>{const s={sendToIframe(r){var l,c;(c=(l=E(e))==null?void 0:l.contentWindow)==null||c.postMessage(r,"*")},sendToDevtools(r){var l,c;(c=(l=E(t))==null?void 0:l.contentWindow)==null||c.postMessage(r,"*")}},i=()=>{const{codeInjected:r,codeURL:l}=C(n);if(!r){if(!l){setTimeout(i,3);return}requestAnimationFrame(()=>{s.sendToIframe({event:"CODE_UPDATE",value:l}),o({type:"CODE_INJECTED"})})}},a=r=>{var m,y;const[l,c]=vt(e,t);!l||!c||((y=(m=r.data)==null?void 0:m.includes)!=null&&y.call(m,"Debugger.enable")&&(console.log("Debugger.enable"),o({type:"Debugger.enable"}),i()),r.source===l.contentWindow?c.contentWindow.postMessage(r.data,"*"):r.source===c.contentWindow&&l.contentWindow.postMessage({event:"DEV",data:r.data},"*"))};return window.addEventListener("message",a),M(()=>window.removeEventListener("message",a)),s},Bn=(e,t)=>{const{importMap:n,isDark:o}=e,s=De(()=>{const i=Fn(E(o),JSON.stringify({imports:C(n)}));return URL.createObjectURL(new Blob([i],{type:"text/html"}))});return P(s,(i,a)=>{a!==i&&a&&URL.revokeObjectURL(a),t({type:"HTML_CHANGED",iframeSrc:i||""})}),M(()=>{URL.revokeObjectURL(E(s)||"")}),{iframeSrc:s}},Gn=e=>{const{isDark:t,code:n}=e,o=ve(null),s=ve(null),i=d=>{var v;return(v=d.contentDocument)==null?void 0:v.documentElement.classList.toggle("dark",E(t))},a=d=>{const v=E(o);v&&(v.src=d)},r=()=>{var d,v;(v=(d=E(o))==null?void 0:d.contentWindow)==null||v.location.reload()},l=()=>{var d,v;(v=(d=E(s))==null?void 0:d.contentWindow)==null||v.location.reload()};P(()=>C(t),d=>{const v=C(o);v&&i(v)});const[c,m]=dn((d,v)=>{switch(v.type){case"IFRAME_READY":i(v.iframe);let x=d.codeInjected;return{...d,codeInjected:x,iframeReady:!0};case"DEVTOOLS_IFRAME_READY":return{...d,devtoolsIframeReady:!0};case"DEV_LOADED":return{...d,devLoaded:!0};case"HTML_CHANGED":return a(v.iframeSrc),l(),{...d,iframeReady:!1,devtoolsIframeReady:!1,devLoaded:!1,codeInjected:!1,darkInjected:!1};case"HTML_RELOAD":return setTimeout(()=>{r(),l()}),{...d,iframeReady:!1,devtoolsIframeReady:!1,devLoaded:!1,codeInjected:!1,darkInjected:!1};case"CODE_UPDATE":return{...d,codeURL:v.codeURL};case"CODE_INJECTED":return{...d,codeInjected:!0}}return d},{iframeReady:!1,devtoolsIframeReady:!1,devLoaded:!1,codeInjected:!1,codeURL:E(n)}),{sendToDevtools:y,sendToIframe:u}=Wn(o,s,c,m);P(()=>C(n),d=>{m({type:"CODE_UPDATE",codeURL:d}),c.value.iframeReady&&requestAnimationFrame(()=>{u({event:"CODE_UPDATE",value:d}),m({type:"CODE_INJECTED"})})});const{iframeSrc:p}=Bn(e,m);return P(o,d=>{d==null||d.addEventListener("load",()=>m({type:"IFRAME_READY",iframe:d}))}),P(s,d=>{d==null||d.addEventListener("load",()=>m({type:"DEVTOOLS_IFRAME_READY",devIframe:d}))}),{iframeSrc:p,iframeRef:o,devtoolsIframeRef:s,previewState:c,dispatch:m,sendToDevtools:y,sendToIframe:u}},qn=e=>{const{importMap:t,code:n,devtools:o,isDark:s,...i}=e,a=A(null),{iframeSrc:r,iframeRef:l,devtoolsIframeRef:c,previewState:m,dispatch:y}=Gn(e),u=Hn(),p=De(()=>`width: 100%; height: 100%; ${C(o)?"display: block;":"display: none;"}`),d=A(.625),v=A(null),x=(h,f)=>{const[w,S]=vt(a,v);if(!w||!S)return;let b,_;const D=w.getBoundingClientRect();b=f-D.top-S.offsetHeight/2,_=w.offsetHeight-S.offsetHeight;const yt=b/_;d.value=yt};return()=>k("div",{...i,ref:a},k(G,{styleFn:()=>{const h=C(d);return{display:"grid",height:"100%",width:"100%",gridTemplateRows:C(o)?`30px minmax(0, ${h}fr) 12px minmax(0, ${1-h}fr)`:"30px minmax(0, 1fr)"}}}),k("div",{style:"border-bottom: 1px solid;border-top: 1px solid;overflow: hidden;"},k(je,{title:"reload page",isDark:s,onClick:()=>y({type:"HTML_RELOAD"})},"♻️relaod")),k("iframe",{ref:l,src:r,style:"width: 100%;height: 100%;",frameBorder:0,sandbox:"allow-popups-to-escape-sandbox allow-scripts allow-popups allow-forms allow-pointer-lock allow-top-navigation allow-modals allow-same-origin"}),k("div",null,k(Un,{ref:v,isHorizontal:!0,onResize:x})),k("iframe",{ref:c,style:p,src:u,frameBorder:"0"}))},Yn=({isDark:e})=>()=>k(xn,{styleFn:()=>({fontFamily:"'Karla', system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",lineHeight:"1.5",fontWeight:"400",colorScheme:C(e)?"light dark":"dark",color:C(e)?"rgba(255, 255, 255, 0.87)":"#242424",backgroundColor:C(e)?"#333":"#fff",fontSynthesis:"none",textRendering:"optimizeLegibility","-webkitFontSmoothing":"antialiased","-moz-osxFontSmoothing":"grayscale","-webkitTextSizeAdjust":"100%",height:"100vh",width:"100vw",body:{margin:"0",minWidth:"100vw",minHeight:"100vh",width:"100%",height:"100%"},"#app":{width:"100%",height:"100%"}})});function Zn(){return new Worker(""+new URL("complier.worker-026b4f92.js",import.meta.url).href)}class Qn{constructor(){B(this,"registry",{})}registerWorker(t,n){this.registry[t]?console.warn(`Worker of type ${t} already registered.`):this.registry[t]=n}removeWorker(t){delete this.registry[t]}getWorker(t){const n=this.registry[t];if(n)return n;throw new Error(`No worker of type ${t} registered.`)}postMessage(t,n){this.getWorker(t).postMessage(n)}listenRecv(t,n){const o=this.getWorker(t);let s;const i=a=>{const{message_token:r}=a.data||{};if(r!==n)return;const l={...a.data};delete l.message_token,s(l),o.removeEventListener("message",i)};return o.addEventListener("message",i),{recv:new Promise((a,r)=>{s=a}),dispose:()=>o.removeEventListener("message",i)}}}class Kn{constructor(){B(this,"registry",new Qn);this.initialize()}async initialize(){this.registry.registerWorker("complier",new Zn)}worker_caller(t,n){const o=Math.random().toString(36).slice(2),s={...n,message_token:o};return this.registry.postMessage(t,s),this.registry.listenRecv(t,o)}compileFile(t){return this.worker_caller("complier",{event:"BABEL",payload:{file:t,compile_options:{}}})}compileFiles(t){return this.worker_caller("complier",{event:"ROLLUP",payload:{files:t,compile_options:{}}})}}const Ge=new Kn,Jn=()=>{let e=null;return M(()=>e==null?void 0:e.dispose()),{compileFile(t){return e==null||e.dispose(),e=Ge.compileFile(t),e.recv},compileFiles(t){return e==null||e.dispose(),e=Ge.compileFiles(t),e.recv}}},Xn='import("@rhjs/rh").then(({cs, ElementSource, View}) => window.dispose = () => View ? View.globalView.unmount() : (cs || ElementSource).global_source.emit("unmount"));',eo=()=>{var l;const e=A(!0);un("isDark",e);const{currentDemo:t}=wt(),n=De(()=>{var c;return{"@rhjs/rh":"https://unpkg.com/@rhjs/rh@latest/dist/main.module.mjs","@rhjs/fluent-web-components":"https://unpkg.com/@rhjs/fluent-web-components@latest/dist/main.module.mjs",...(c=t.value)==null?void 0:c.importMap}}),o=A(""),s=mn(o,{type:"text/javascript"}),i=A(((l=t.value)==null?void 0:l.code)||""),a=Jn(),r=async()=>{const c=E(i);if(!c)return;const m=await a.compileFile({filename:"main.tsx",source:c});o.value=`${m.compiled}
${Xn}`};return mt(r),P(t,c=>{c&&i.value!==c.code&&(i.value=c.code,r())}),()=>k("div",null,k(Yn,{isDark:e}),k(G,{styleFn:()=>({position:"relative",display:"flex",flexFlow:"column",width:"100%",height:"100%",maxWidth:"100vw",maxHeight:"100vh",overflow:"hidden"})}),k("header",{style:"height: 30px; width: 100%;"},k(Pn,{isDark:e})),k("div",{style:"flex: 1;"},k(G,{styleFn:()=>({position:"relative",display:"flex",flexFlow:"row",width:"100%",height:"100%"})}),k(yn,{style:"flex: 1;",value:i,onChange:c=>i.value=c,onSave:r,isDark:e}),k(qn,{style:"flex: 1;",importMap:n,code:s,devtools:!0,isDark:e})))};on("#app",eo);
