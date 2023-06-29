var bt=Object.defineProperty;var kt=(e,t,n)=>t in e?bt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var B=(e,t,n)=>(kt(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function xt(e,t){const n=Object.create(null),o=e.split(",");for(let s=0;s<o.length;s++)n[o[s]]=!0;return t?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const _t=()=>{},St=Object.assign,Ct=Object.prototype.hasOwnProperty,ae=(e,t)=>Ct.call(e,t),$=Array.isArray,re=e=>qe(e)==="[object Map]",be=e=>typeof e=="symbol",ce=e=>e!==null&&typeof e=="object",Tt=Object.prototype.toString,qe=e=>Tt.call(e),Et=e=>qe(e).slice(8,-1),ke=e=>typeof e=="string"&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,xe=(e,t)=>!Object.is(e,t);let N;class Dt{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=N,!t&&N&&(this.index=(N.scopes||(N.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=N;try{return N=this,t()}finally{N=n}}}on(){N=this}off(){N=this.parent}stop(t){if(this._active){let n,o;for(n=0,o=this.effects.length;n<o;n++)this.effects[n].stop();for(n=0,o=this.cleanups.length;n<o;n++)this.cleanups[n]();if(this.scopes)for(n=0,o=this.scopes.length;n<o;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function jt(e){return new Dt(e)}function Ye(e,t=N){t&&t.active&&t.effects.push(e)}const _e=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Ze=e=>(e.w&V)>0,Qe=e=>(e.n&V)>0,he=new WeakMap;let Y=0,V=1;const pe=30;let R;const F=Symbol(""),fe=Symbol("");class Ke{constructor(t,n=null,o){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ye(this,o)}run(){if(!this.active)return this.fn();let t=R,n=U;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=R,R=this,U=!0,V=1<<++Y,Y<=pe?(({deps:o})=>{if(o.length)for(let s=0;s<o.length;s++)o[s].w|=V})(this):je(this),this.fn()}finally{Y<=pe&&(o=>{const{deps:s}=o;if(s.length){let i=0;for(let c=0;c<s.length;c++){const r=s[c];Ze(r)&&!Qe(r)?r.delete(o):s[i++]=r,r.w&=~V,r.n&=~V}s.length=i}})(this),V=1<<--Y,R=this.parent,U=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){R===this?this.deferStop=!0:this.active&&(je(this),this.onStop&&this.onStop(),this.active=!1)}}function je(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}function Z(e,t){e.effect&&(e=e.effect.fn);const n=new Ke(e);t&&(St(n,t),t.scope&&Ye(n,t.scope)),t&&t.lazy||n.run();const o=n.run.bind(n);return o.effect=n,o}let U=!0;const Je=[];function Xe(){Je.push(U),U=!1}function et(){const e=Je.pop();U=e===void 0||e}function M(e,t,n){if(U&&R){let o=he.get(e);o||he.set(e,o=new Map);let s=o.get(n);s||o.set(n,s=_e()),tt(s)}}function tt(e,t){let n=!1;Y<=pe?Qe(e)||(e.n|=V,n=!Ze(e)):n=!e.has(R),n&&(e.add(R),R.deps.push(e))}function H(e,t,n,o,s,i){const c=he.get(e);if(!c)return;let r=[];if(t==="clear")r=[...c.values()];else if(n==="length"&&$(e)){const u=Number(o);c.forEach((d,p)=>{(p==="length"||p>=u)&&r.push(d)})}else switch(n!==void 0&&r.push(c.get(n)),t){case"add":$(e)?ke(n)&&r.push(c.get("length")):(r.push(c.get(F)),re(e)&&r.push(c.get(fe)));break;case"delete":$(e)||(r.push(c.get(F)),re(e)&&r.push(c.get(fe)));break;case"set":re(e)&&r.push(c.get(F))}if(r.length===1)r[0]&&me(r[0]);else{const u=[];for(const d of r)d&&u.push(...d);me(_e(u))}}function me(e,t){const n=$(e)?e:[...e];for(const o of n)o.computed&&Le(o);for(const o of n)o.computed||Le(o)}function Le(e,t){(e!==R||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Lt=xt("__proto__,__v_isRef,__isVue"),nt=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(be)),Mt=ot(),Rt=ot(!0),Me=Ot();function Ot(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const o=x(this);for(let i=0,c=this.length;i<c;i++)M(o,0,i+"");const s=o[t](...n);return s===-1||s===!1?o[t](...n.map(x)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Xe();const o=x(this)[t].apply(this,n);return et(),o}}),e}function Nt(e){const t=x(this);return M(t,0,e),t.hasOwnProperty(e)}function ot(e=!1,t=!1){return function(n,o,s){if(o==="__v_isReactive")return!e;if(o==="__v_isReadonly")return e;if(o==="__v_isShallow")return t;if(o==="__v_raw"&&s===(e?t?Gt:it:t?Bt:rt).get(n))return n;const i=$(n);if(!e){if(i&&ae(Me,o))return Reflect.get(Me,o,s);if(o==="hasOwnProperty")return Nt}const c=Reflect.get(n,o,s);return(be(o)?nt.has(o):Lt(o))?c:(e||M(n,0,o),t?c:D(c)?i&&ke(o)?c:c.value:ce(c)?e?J(c):at(c):c)}}function At(e=!1){return function(t,n,o,s){let i=t[n];if(ie(i)&&D(i)&&!D(o))return!1;if(!e&&(lt(o)||ie(o)||(i=x(i),o=x(o)),!$(t)&&D(i)&&!D(o)))return i.value=o,!0;const c=$(t)&&ke(n)?Number(n)<t.length:ae(t,n),r=Reflect.set(t,n,o,s);return t===x(s)&&(c?xe(o,i)&&H(t,"set",n,o):H(t,"add",n,o)),r}}const It={get:Mt,set:At(),deleteProperty:function(e,t){const n=ae(e,t),o=Reflect.deleteProperty(e,t);return o&&n&&H(e,"delete",t,void 0),o},has:function(e,t){const n=Reflect.has(e,t);return be(t)&&nt.has(t)||M(e,0,t),n},ownKeys:function(e){return M(e,0,$(e)?"length":F),Reflect.ownKeys(e)}},zt={get:Rt,set:(e,t)=>!0,deleteProperty:(e,t)=>!0},Se=e=>e,le=e=>Reflect.getPrototypeOf(e);function ee(e,t,n=!1,o=!1){const s=x(e=e.__v_raw),i=x(t);n||(t!==i&&M(s,0,t),M(s,0,i));const{has:c}=le(s),r=o?Se:n?Ce:Q;return c.call(s,t)?r(e.get(t)):c.call(s,i)?r(e.get(i)):void(e!==s&&e.get(t))}function te(e,t=!1){const n=this.__v_raw,o=x(n),s=x(e);return t||(e!==s&&M(o,0,e),M(o,0,s)),e===s?n.has(e):n.has(e)||n.has(s)}function ne(e,t=!1){return e=e.__v_raw,!t&&M(x(e),0,F),Reflect.get(e,"size",e)}function Re(e){e=x(e);const t=x(this);return le(t).has.call(t,e)||(t.add(e),H(t,"add",e,e)),this}function Oe(e,t){t=x(t);const n=x(this),{has:o,get:s}=le(n);let i=o.call(n,e);i||(e=x(e),i=o.call(n,e));const c=s.call(n,e);return n.set(e,t),i?xe(t,c)&&H(n,"set",e,t):H(n,"add",e,t),this}function Ne(e){const t=x(this),{has:n,get:o}=le(t);let s=n.call(t,e);s||(e=x(e),s=n.call(t,e)),o&&o.call(t,e);const i=t.delete(e);return s&&H(t,"delete",e,void 0),i}function Ae(){const e=x(this),t=e.size!==0,n=e.clear();return t&&H(e,"clear",void 0,void 0),n}function oe(e,t){return function(n,o){const s=this,i=s.__v_raw,c=x(i),r=t?Se:e?Ce:Q;return!e&&M(c,0,F),i.forEach((u,d)=>n.call(o,r(u),r(d),s))}}function se(e,t,n){return function(...o){const s=this.__v_raw,i=x(s),c=re(i),r=e==="entries"||e===Symbol.iterator&&c,u=e==="keys"&&c,d=s[e](...o),p=n?Se:t?Ce:Q;return!t&&M(i,0,u?fe:F),{next(){const{value:g,done:a}=d.next();return a?{value:g,done:a}:{value:r?[p(g[0]),p(g[1])]:p(g),done:a}},[Symbol.iterator](){return this}}}}function P(e){return function(...t){return e!=="delete"&&this}}function Pt(){const e={get(s){return ee(this,s)},get size(){return ne(this)},has:te,add:Re,set:Oe,delete:Ne,clear:Ae,forEach:oe(!1,!1)},t={get(s){return ee(this,s,!1,!0)},get size(){return ne(this)},has:te,add:Re,set:Oe,delete:Ne,clear:Ae,forEach:oe(!1,!0)},n={get(s){return ee(this,s,!0)},get size(){return ne(this,!0)},has(s){return te.call(this,s,!0)},add:P("add"),set:P("set"),delete:P("delete"),clear:P("clear"),forEach:oe(!0,!1)},o={get(s){return ee(this,s,!0,!0)},get size(){return ne(this,!0)},has(s){return te.call(this,s,!0)},add:P("add"),set:P("set"),delete:P("delete"),clear:P("clear"),forEach:oe(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=se(s,!1,!1),n[s]=se(s,!0,!1),t[s]=se(s,!1,!0),o[s]=se(s,!0,!0)}),[e,n,t,o]}const[Vt,$t,Ut,Ht]=Pt();function st(e,t){const n=t?e?Ht:Ut:e?$t:Vt;return(o,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?o:Reflect.get(ae(n,s)&&s in o?n:o,s,i)}const Ft={get:st(!1,!1)},Wt={get:st(!0,!1)},rt=new WeakMap,Bt=new WeakMap,it=new WeakMap,Gt=new WeakMap;function at(e){return ie(e)?e:ct(e,!1,It,Ft,rt)}function J(e){return ct(e,!0,zt,Wt,it)}function ct(e,t,n,o,s){if(!ce(e)||e.__v_raw&&(!t||!e.__v_isReactive))return e;const i=s.get(e);if(i)return i;const c=(r=e).__v_skip||!Object.isExtensible(r)?0:function(d){switch(d){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}(Et(r));var r;if(c===0)return e;const u=new Proxy(e,c===2?o:n);return s.set(e,u),u}function ie(e){return!(!e||!e.__v_isReadonly)}function lt(e){return!(!e||!e.__v_isShallow)}function x(e){const t=e&&e.__v_raw;return t?x(t):e}const Q=e=>ce(e)?at(e):e,Ce=e=>ce(e)?J(e):e;function dt(e){U&&R&&tt((e=x(e)).dep||(e.dep=_e()))}function Te(e,t){const n=(e=x(e)).dep;n&&me(n)}function D(e){return!(!e||e.__v_isRef!==!0)}function O(e){return ut(e,!1)}function ve(e){return ut(e,!0)}function ut(e,t){return D(e)?e:new qt(e,t)}class qt{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:x(t),this._value=n?t:Q(t)}get value(){return dt(this),this._value}set value(t){const n=this.__v_isShallow||lt(t)||ie(t);t=n?t:x(t),xe(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Q(t),Te(this))}}function Yt(e){Te(e)}function k(e){return D(e)?e.value:e}var ht;class Zt{constructor(t,n,o,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[ht]=!1,this._dirty=!0,this.effect=new Ke(t,()=>{this._dirty||(this._dirty=!0,Te(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=o}get value(){const t=x(this);return dt(t),!t._dirty&&t._cacheable||(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Qt(e,t,n=!1){let o,s;const i=typeof e=="function";return i?(o=e,s=_t):(o=e.get,s=e.set),new Zt(o,s,i||!s,n)}ht="__v_isReadonly";var Ie,ze,Kt=(Ie=function(e){var t=Object.prototype.hasOwnProperty,n="~";function o(){}function s(u,d,p){this.fn=u,this.context=d,this.once=p||!1}function i(u,d,p,g,a){if(typeof p!="function")throw new TypeError("The listener must be a function");var h=new s(p,g||u,a),l=n?n+d:d;return u._events[l]?u._events[l].fn?u._events[l]=[u._events[l],h]:u._events[l].push(h):(u._events[l]=h,u._eventsCount++),u}function c(u,d){--u._eventsCount==0?u._events=new o:delete u._events[d]}function r(){this._events=new o,this._eventsCount=0}Object.create&&(o.prototype=Object.create(null),new o().__proto__||(n=!1)),r.prototype.eventNames=function(){var u,d,p=[];if(this._eventsCount===0)return p;for(d in u=this._events)t.call(u,d)&&p.push(n?d.slice(1):d);return Object.getOwnPropertySymbols?p.concat(Object.getOwnPropertySymbols(u)):p},r.prototype.listeners=function(u){var d=this._events[n?n+u:u];if(!d)return[];if(d.fn)return[d.fn];for(var p=0,g=d.length,a=new Array(g);p<g;p++)a[p]=d[p].fn;return a},r.prototype.listenerCount=function(u){var d=this._events[n?n+u:u];return d?d.fn?1:d.length:0},r.prototype.emit=function(u,d,p,g,a,h){var l=n?n+u:u;if(!this._events[l])return!1;var f,w,v=this._events[l],b=arguments.length;if(v.fn){switch(v.once&&this.removeListener(u,v.fn,void 0,!0),b){case 1:return v.fn.call(v.context),!0;case 2:return v.fn.call(v.context,d),!0;case 3:return v.fn.call(v.context,d,p),!0;case 4:return v.fn.call(v.context,d,p,g),!0;case 5:return v.fn.call(v.context,d,p,g,a),!0;case 6:return v.fn.call(v.context,d,p,g,a,h),!0}for(w=1,f=new Array(b-1);w<b;w++)f[w-1]=arguments[w];v.fn.apply(v.context,f)}else{var S,C=v.length;for(w=0;w<C;w++)switch(v[w].once&&this.removeListener(u,v[w].fn,void 0,!0),b){case 1:v[w].fn.call(v[w].context);break;case 2:v[w].fn.call(v[w].context,d);break;case 3:v[w].fn.call(v[w].context,d,p);break;case 4:v[w].fn.call(v[w].context,d,p,g);break;default:if(!f)for(S=1,f=new Array(b-1);S<b;S++)f[S-1]=arguments[S];v[w].fn.apply(v[w].context,f)}}return!0},r.prototype.on=function(u,d,p){return i(this,u,d,p,!1)},r.prototype.once=function(u,d,p){return i(this,u,d,p,!0)},r.prototype.removeListener=function(u,d,p,g){var a=n?n+u:u;if(!this._events[a])return this;if(!d)return c(this,a),this;var h=this._events[a];if(h.fn)h.fn!==d||g&&!h.once||p&&h.context!==p||c(this,a);else{for(var l=0,f=[],w=h.length;l<w;l++)(h[l].fn!==d||g&&!h[l].once||p&&h[l].context!==p)&&f.push(h[l]);f.length?this._events[a]=f.length===1?f[0]:f:c(this,a)}return this},r.prototype.removeAllListeners=function(u){var d;return u?this._events[d=n?n+u:u]&&c(this,d):(this._events=new o,this._eventsCount=0),this},r.prototype.off=r.prototype.removeListener,r.prototype.addListener=r.prototype.on,r.prefixed=n,r.EventEmitter=r,e.exports=r},Ie(ze={exports:{}}),ze.exports);class Jt{constructor(t){this.data=void 0,this.next=void 0,this.data=t,this.next=null}}class Xt{constructor(){this.head=void 0,this.tail=void 0,this.size=void 0,this.head=null,this.tail=null,this.size=0}enqueue(t){let n=new Jt(t);this.isEmpty()?(this.head=n,this.tail=n):(this.tail&&(this.tail.next=n),this.tail=n),this.size++}dequeue(){if(this.isEmpty())return null;{var t,n;let o=((t=this.head)==null?void 0:t.data)||null;return this.head=((n=this.head)==null?void 0:n.next)||null,this.isEmpty()&&(this.tail=null),this.size--,o}}remove(t){let n=this.head,o=null;for(;n;){if(n.data===t)return o?(o.next=n.next,n.next||(this.tail=o)):(this.head=n.next,this.head||(this.tail=null)),void this.size--;o=n,n=n.next}}isEmpty(){return this.size===0}}const en=new class{constructor(){this.frameDeadline=void 0,this.taskQueue=void 0,this.channel=void 0,this.messagePort=void 0,this.triggerPort=void 0,this.rafTriggered=void 0,this.activeFrameTime=33.33,this.frameDeadline=performance.now()+this.activeFrameTime,this.taskQueue=new Xt,this.channel=new MessageChannel,this.messagePort=this.channel.port1,this.triggerPort=this.channel.port2,this.rafTriggered=!1,this.messagePort.onmessage=()=>{this.handleTask()}}size(){return this.taskQueue.size}timeRemaining(){return Math.max(0,this.frameDeadline-performance.now())}execTask(e){return e({timeRemaining:()=>this.timeRemaining()})}handleTask(){if(this.timeRemaining()<=0)return void this.trigger();let e=this.taskQueue.dequeue();for(;e;)try{this.execTask(e)}finally{if(this.timeRemaining()<=0)break;e=this.taskQueue.dequeue()}this.trigger()}trigger(){this.rafTriggered||this.taskQueue.size!==0&&(this.rafTriggered=!0,requestAnimationFrame(e=>{this.frameDeadline=e+this.activeFrameTime,this.rafTriggered=!1,e<this.frameDeadline&&this.triggerPort.postMessage(null)}))}async runTask(e){return!this.rafTriggered&&performance.now()<this.frameDeadline?this.execTask(e):new Promise((t,n)=>{this.taskQueue.enqueue(()=>{try{t(this.execTask(e))}catch(o){n(o)}}),this.trigger()})}buildTask(e){let t,n,o=!1,s=!1;const i=new Promise((r,u)=>{n=r}),c=r=>{if(!o)return t=e(r),s=!0,n(t),t;n(void 0)};return this.taskQueue.enqueue(c),this.trigger(),{cancel:()=>{o=!0,n(void 0),this.taskQueue.size<=5e3&&this.taskQueue.remove(c)},promise:i,state:()=>({isCancelled:o,isDone:s,result:t})}}};class tn{constructor(){this.tasks=new Map}runTask(t,n){const o=this.tasks.get(t);o&&o.cancel();const s=en.buildTask(n);return this.tasks.set(t,s),s.promise.finally(()=>{this.tasks.get(t)===s&&this.tasks.delete(t)}),s}dispose(){this.tasks.forEach(t=>t.cancel()),this.tasks.clear()}}const nn=Object.prototype.hasOwnProperty;function Pe(e,t){if(Object.is(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;const n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(let s=0;s<n.length;s++)if(!nn.call(t,n[s])||!Object.is(e[n[s]],t[n[s]]))return!1;return!0}const Ve=e=>{var t,n,o;return{node:e,view:m.dom2view.get(e),key:(t=m.dom2view.get(e))==null?void 0:t.key,keyed:(o=(n=m.dom2view.get(e))==null?void 0:n.key,o!=null)}};class m{static getNextIndex(){return++m.index}static createAnchor(){const t=document.createTextNode("");return t[m.symbols.ANCHOR]=!0,t}static isAnchor(t){return t instanceof Text&&t[m.symbols.ANCHOR]}constructor(t=m.createAnchor()){this.__index=m.getNextIndex(),this.scheduler=new tn,this.events=new Kt,this.anchor=void 0,this.children=[],this.context={},this.parentView=m.globalView,this.is_container=!1,this.has_outside_effect=!1,this.key=void 0,this.effectScope=jt(!0),this.initialized=!1,this.zoneFlag="",this.anchor=t,m.dom2view.set(this.anchor,this),this.events.on("error",n=>{var o;this.events.listenerCount("error")===1&&((o=this.parentView)==null||o.events.emit("error",n))}),this.events.on("throw",n=>{var o;this.events.listenerCount("throw")===1&&((o=this.parentView)==null||o.events.emit("throw",n))})}initialize(){this.initialized||(this.events.emit("init_before"),this.events.emit("init"),this.events.emit("init_after"),this.initialized=!0)}mount(t,n){this.initialize(),this.events.emit("mount_before",t,this.parentView),t.insertBefore(this.anchor,n||null),this.mountChildren(t),this.events.emit("mounted",t,this.parentView),this.events.emit("mount_after",t,this.parentView)}mountChildren(t){if(!t.contains(this.anchor))throw new Error("Cannot mount children before anchor, anchor not contained in parentElement.");for(const n of this.children){t.insertBefore(n,this.anchor);const o=m.dom2view.get(n);if(o){if(o===this)throw new Error("Cannot mount children to self");o.parentView=this,o.mount(t,n)}}}updateChildren(t){const n=t.flat(64).map(i=>function(c){if(c==null)return null;if(c instanceof Node)return c;if(D(c)||typeof c=="function"){const r=new m;let u;if(r.has_outside_effect=!0,D(c)){const d=document.createTextNode("");u=Z(()=>{const p=String(k(c));p!==d.textContent&&(d.textContent=p)},{lazy:!1}),r.updateChildren([d])}else u=Z(()=>{const d=c();r.updateChildren(Array.isArray(d)?d:[d])},{lazy:!1});return r.events.on("unmounted",()=>{u.effect.stop()}),r.anchor}return document.createTextNode(String(c))}(i)).filter(Boolean);if(this.children.length===0&&n.length===0)return;const o=function(i,c){const r=[],u=i.map(Ve),d=c.map(Ve);if(u.length===0)return d.map((a,h)=>({type:"remove",node:a,index:h}));if(d.length===0)return u.map((a,h)=>({type:"insert",index:h,node:a}));for(let a=0;a<Math.max(u.length,d.length);a++){var p,g;const h=u[a],l=d[a];if((h==null?void 0:h.node)===(l==null?void 0:l.node)||h!=null&&h.view&&l!=null&&l.view&&(h==null?void 0:h.view)===(l==null?void 0:l.view)||h!=null&&h.keyed&&l!=null&&l.keyed)continue;if(!(!((h==null?void 0:h.node)instanceof Text&&(l==null?void 0:l.node)instanceof Text)||m.isAnchor(h.node)||m.isAnchor(l.node)||(p=h.view)!=null&&p.has_outside_effect||(g=l.view)!=null&&g.has_outside_effect)){h.node.textContent!==l.node.textContent&&r.push({type:"text",oldNode:l,newNode:h,index:a});continue}const f=()=>{h&&!h.keyed&&r.push({type:"insert",index:a,node:h}),l&&!l.keyed&&r.push({type:"remove",index:a,node:l})};if(h&&l)if(h||l)if(h.keyed||l.keyed)f();else if(h.view||l.view)if(h.view&&l.view)if(h.view.has_outside_effect||l.view.has_outside_effect)f();else{const w=l.view,v=h.view,b=w instanceof A,S=v instanceof A;if(b&&!S||!b&&S){f();continue}if(b&&S){w.elem.nodeName===v.elem.nodeName?r.push({type:"dom-update",oldNode:l,newNode:h,index:a}):f();continue}const C=I.view2component.get(w),T=I.view2component.get(v);if(!C&&T||C&&!T){f();continue}if(C!=null&&C._component_type&&T!=null&&T._component_type&&C._component_type!==T._component_type){f();continue}r.push({type:"view-patch",oldNode:l,newNode:h,index:a})}else f();else f();else f();else f()}for(let a=0;a<u.length;a++){const h=u[a];if(h==null||!h.keyed)continue;const l=d.findIndex(f=>f.key===h.key);r.push(l!==a?l!==-1?{type:"move",to:a,node:d[l],newNode:h}:{type:"insert",index:a,node:h}:h.view instanceof A?{type:"dom-update",oldNode:d[l],newNode:h,index:a}:{type:"view-patch",oldNode:d[l],newNode:h,index:a})}for(let a=0;a<d.length;a++){const h=d[a];h!=null&&h.keyed&&u.findIndex(l=>l.key===h.key)===-1&&r.push({type:"remove",index:a,node:h})}return r}(n,this.children);if(o.length===0)return;const s=()=>{const i=this.patchAll(o,n);this.children=i.filter(Boolean)};this.initialized?this.scheduler.runTask("patch-children",s):s()}patchAll(t,n){const o=n.slice();this.children.forEach((a,h)=>{o.length>h&&(o[h]=a)}),t.forEach(a=>{switch(a.type){case"move":o[a.to]=a.node.node;break;case"insert":o[a.index]=a.node.node;break;case"text":case"dom-update":o[a.index]=a.oldNode.node;break;case"view-patch":o[a.index]=a.newNode.node}});const s={},i=a=>{if(!this.anchor.parentNode||this.children.length===0)return null;let h=a;for(;o.length>h;){if(h in s)return s[h];const l=o[h];if(l&&(l==null?void 0:l.parentNode)===this.anchor.parentNode)return s[h]=l,l;h++}return s[h]=null,null},c=(a,h)=>{const l=i(h+1),f=(l==null?void 0:l.parentNode)===this.anchor.parentNode?l:this.anchor;a.view&&(a.view.parentView.children=a.view.parentView.children.filter(w=>w!==a.node)),this.anchor.parentNode&&(a.view?(a.view.parentView=this,a.view.mount(this.anchor.parentNode,f)):this.anchor.parentNode.insertBefore(a.node,f))},r=a=>{var h;a.view?a.view.unmount():(h=a.node.parentElement)==null||h.removeChild(a.node)},u=(a,h,l)=>{c(h,l),r(a)},d=(a,h)=>{a.update(h.DOMProps,h.DOMChildren),a.DOMChildren=h.DOMChildren,a.DOMProps=h.DOMProps,h!==a&&(h.children=[],h.unmount())},p=(a,h)=>{if(a instanceof A&&h instanceof A)return void d(a,h);h.initialize();const l=I.view2component.get(a),f=I.view2component.get(h);l&&f?(l.props=f.props,l.state=f.state,l.children=f.children,l.render=f.render,l.update(),f.children=[],f.view.children=[]):a.updateChildren(h.children)};for(const a of t)switch(a.type){case"move":{var g;const{to:h,node:l,newNode:f}=a;l.view instanceof m&&f.view instanceof m&&p(l.view,f.view);const w=i(h+1),v=(w==null?void 0:w.parentNode)===this.anchor.parentNode?w:this.anchor;this.anchor.parentNode&&(l.view?(l.view.parentView=this,l.view.mount(this.anchor.parentNode,v)):this.anchor.parentNode.insertBefore(l.node,v)),(g=f.view)==null||g.unmount();break}case"insert":{const{node:h,index:l}=a;c(h,l);break}case"remove":break;case"view-patch":{const{newNode:h,oldNode:l,index:f}=a;u(l,h,f);break}case"dom-update":{const{newNode:h,oldNode:l}=a;d(l.view,h.view);break}case"text":{const{newNode:h,oldNode:l}=a;l.node.textContent=h.node.textContent;break}}return t.forEach(a=>{if(a.type!=="remove")return;const{node:h}=a;r(h)}),o}remove(){for(const n of this.children){var t;(t=n.parentElement)==null||t.removeChild(n);const o=m.dom2view.get(n);o&&o.remove()}}effect(t,n="unmounted"){return this.effectScope.run(()=>{const o=Z(t,{lazy:!1});return o.effect.deps.length===0?o.effect.stop():this.events.once(n,()=>o.effect.stop()),o})}unmount(){var t;this.events.emit("unmount_before"),this.scheduler.dispose(),(t=this.anchor.parentNode)==null||t.removeChild(this.anchor),this.unmountChildren(),this.events.emit("unmounted"),this.events.emit("unmount_after"),this.events.removeAllListeners(),this.effectScope.stop()}unmountChildren(){this.remove();for(const t of this.children){const n=m.dom2view.get(t);n&&n.unmount()}}zone(t,n="setup"){const o=this.zoneFlag;m.pushView(this),this.zoneFlag=n;try{return t()}finally{this.zoneFlag=o,m.popView()}}getContextValue(t,n){let o=this;for(;o;){const s=o.context;if(t in s){const i=s[t];if(!n||n(i))return i}o=o.parentView}return m.symbols.NONE}setContextValue(t,n){let o=this;for(;o;){if(o.is_container)return void(o.context[t]=n);o=o.parentView}throw new Error(`Cannot set context value: ${String(t)}`)}}m.symbols={NONE:Symbol("NONE"),DIRECTIVES:Symbol("DIRECTIVES"),ANCHOR:Symbol("ANCHOR")},m.isNone=e=>e===m.symbols.NONE,m.index=0,m.dom2view=new WeakMap,m.stack=[],m.topView=()=>m.stack[m.stack.length-1],m.pushView=e=>m.stack.push(e),m.popView=()=>m.stack.pop(),m.globalView=new m,m.stack.push(m.globalView),m.globalView.is_container=!0;const ge=e=>typeof e=="function"?e():D(e)?k(e):Array.isArray(e)?e.map(ge):typeof e=="object"?Object.fromEntries(Object.entries(e).map(([t,n])=>[t,ge(n)])):k(e);class A extends m{constructor(t,n,o){super(),this.DOMProps=void 0,this.DOMChildren=void 0,this.elem=void 0,this.props={},this.propsCleanups={},this.DOMProps=n,this.DOMChildren=o,this.elem=t instanceof Node?t:document.createElement(t),this.key=n.key,delete n.key,m.dom2view.set(this.elem,this)}initialize(){this.initialized||(this.events.emit("init_before"),this.events.emit("init"),this.update(this.DOMProps,this.DOMChildren),this.events.emit("init_after"),this.initialized=!0)}mount(t,n){this.initialize(),this.events.emit("mount_before",t,this.parentView),t.insertBefore(this.elem,n||null),this.elem.appendChild(this.anchor),this.mountChildren(),this.events.emit("mounted",t,this.parentView),this.events.emit("mount_after",t,this.parentView)}update(t,n){this.events.emit("update_before");try{this.updateChildren(n),Pe(t,this.props)||(this.updateProps(t),this.props=t),this.events.emit("updated")}finally{this.events.emit("update_after")}}updateProps(t){if(Pe(t,this.props))return;const n=this.diffProps(t,this.props);if(n.length===0)return;const o=()=>{for(const s of n){const{type:i,key:c,value:r}=s;switch(i){case"patch":this.patchProp(c,r),this.props[c]=r;break;case"remove":this.cleanupProp(c),delete this.props[c]}}};this.initialized?this.scheduler.runTask("patch-task",o):o()}addPropCleanup(t,n){const o=this.propsCleanups[t];this.propsCleanups[t]=()=>{o==null||o(),n()}}cleanupProp(t){var n,o;(n=(o=this.propsCleanups)[t])==null||n.call(o),delete this.propsCleanups[t]}patchProp(t,n){if(this.cleanupProp(t),this.matchDirectives(t,n),t.startsWith("$")||t.startsWith("_")||t==="key")return;const o=this.elem;if(t!=="ref"){if(o instanceof Element)if(t.startsWith("on")){const s=t.slice(2).toLowerCase();o.addEventListener(s,n);const i=()=>o.removeEventListener(s,n);this.events.once("unmounted",i),this.addPropCleanup(t,()=>{this.events.off("unmounted",i),o.removeEventListener(s,n)})}else{const s=this.effect(()=>{const i=this.elem;if(!(i instanceof Element))return;const c=ge(n);((r,u,d)=>{var p;if(typeof d!="boolean")switch(u){case"className":case"class":{let g="";g=Array.isArray(d)?d.join(" "):typeof d=="object"?Object.entries(d).filter(([a,h])=>!!h).map(([a])=>a).join(" "):String(d),r.setAttribute("class",g);break}case"style":if(!((p=r)instanceof Element&&typeof p.style=="object"))break;typeof d=="object"?Object.entries(d).forEach(([g,a])=>r.style[g]=a):r.style.cssText=String(d);break;case"value":r.value=d;break;default:r.setAttribute(u,String(d))}else d?r.setAttribute(u,""):r.removeAttribute(u)})(i,t,c)});this.addPropCleanup(t,()=>s==null?void 0:s.effect.stop())}}else D(n)?n.value=o:typeof n=="function"&&n(o)}diffProps(t,n){const o=[];return Object.entries(t).forEach(([s,i])=>{Object.is(n[s],i)||o.push({type:"patch",key:s,value:i})}),Object.entries(n).forEach(([s,i])=>{s in t||o.push({type:"remove",key:s,value:i})}),o}matchDirectives(t,n){const o=this.getContextValue(m.symbols.DIRECTIVES,u=>!(u==null||!u[t]));if(!o)return;const s=o[t];if(!s)return;const{mounted:i,unmounted:c,updated:r}=s;i&&this.events.once("mounted",()=>{this.effectScope.run(()=>{const u=this.zone(()=>i(this.elem,n,this));u&&this.addPropCleanup(t,u)})},"directive"),c&&this.events.once("unmounted",()=>{this.effectScope.run(()=>{const u=this.zone(()=>c(this.elem,n,this));u&&this.addPropCleanup(t,u)})},"directive"),r&&this.events.on("updated",()=>{this.effectScope.run(()=>{const u=this.zone(()=>r(this.elem,n,this));u&&this.addPropCleanup(t,u)})},"directive")}mountChildren(){const t=this.elem;for(const n of this.children){t.insertBefore(n,this.anchor);const o=m.dom2view.get(n);if(o){if(o===this)throw new Error("Cannot mount children to self");o.parentView=this,o.mount(t,n)}}}unmount(){var t;(t=this.elem.parentElement)==null||t.removeChild(this.elem),Object.values(this.propsCleanups).forEach(n=>n()),this.propsCleanups={},super.unmount()}}class I{constructor(){this._component_type=void 0,this.render=void 0,this.runner=void 0,this.view=new m,this.props={},this.state={},this.children=[],this.view.is_container=!0,this.view.events.once("unmounted",()=>this.dispose()),this.view.events.once("init_after",()=>{this.view.effectScope.run(()=>{this.runner=Z(this.update.bind(this),{lazy:!1,onStop:()=>this.view.events.emit("render_stop"),onTrack:t=>this.view.events.emit("render_tracked",t),onTrigger:t=>this.view.events.emit("render_triggered",t)})})}),I.view2component.set(this.view,this)}update(){this.view.events.emit("update_before");try{const t=this.view.effectScope.run(()=>this.view.zone(()=>this.render(this.props,this.state,this.children),"render"));this.view.updateChildren(Array.isArray(t)?t:[t]),this.view.events.emit("updated")}catch(t){setTimeout(()=>{this.view.events.emit("error",t)}),console.error(t)}finally{this.view.events.emit("update_after")}}dispose(){var t;(t=this.runner)==null||t.effect.stop()}}I.view2component=new WeakMap;const pt=(e,t,n)=>{let o;return o=typeof e=="function"?(s=>(i,c)=>{const r=new I;return r.props=i,r.children=c,r.view.key=i.key,r.view.events.once("init",()=>{r.render=r.view.zone(()=>s(i,r.state,r.children))}),r._component_type=s,r})(e):(s=>(i,c)=>{const r=new I;return r.props=i,r.children=c,r.view.key=i.key,r.view.events.once("init",()=>{r.state=r.view.zone(()=>s.setup(i,c))}),r._component_type=s,r.render=s.render,r})(e),o(t,n)},y=(e,t={},...n)=>{if(t||(t={}),n||(n=[]),n=n.flat(64),e instanceof Node){const o=m.dom2view.get(e);return o?o instanceof A&&o.update(t,n):new A(e,t,n),e}return typeof e=="string"||e instanceof String?new A(e,t,n).elem:pt(e,t,n).view.anchor};function on(e,t,n){const o=e instanceof Element?e:document.querySelector(e);if(!o)throw new Error("Could not find selector");if(!(t instanceof Node)){const s=pt(t,n||{},[]);return s.view.mount(o),s}{const s=m.dom2view.get(t);s?s.mount(o):o.appendChild(t)}}const sn=e=>{const t=(n=m.topView(),new Proxy({},{get(o,s,i){const c=n.getContextValue(s);if(!m.isNone(c))return c},set:(o,s,i,c)=>(n.setContextValue(s,i),!0)}));var n;return e==null||e(t),t};function we(){return we=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},we.apply(this,arguments)}function K(e,...t){Xe();try{return e.apply(void 0,t)}finally{et()}}const E=e=>typeof e=="function"?K(e):K(k,e),rn=(e,t,n=!1)=>{const o=m.topView();return o.events[n?"once":"on"](e,t),()=>o.events.off(e,t)},de=(e,t=!1)=>n=>rn(e,n,t),ft=de("mounted"),$e=de("mount_before"),L=de("unmounted"),an=de("update_after"),cn=e=>{const t=m.topView();if(t.zoneFlag==="render"){const n=()=>{t.events.off("update_before",o),t.events.off("unmounted",o)},o=()=>{n(),e()};return t.events.once("update_before",o),t.events.once("unmounted",o),n}return t.events.once("unmounted",e),()=>t.events.off("unmounted",e)},X=(e,t)=>{let n;const o=Z(()=>{n&&K(n),n=void 0,e(c=>n=c)},we({lazy:!1},t));let s;const i=()=>{s==null||s(),n==null||n(),n=void 0,o.effect.stop()};return s=cn(i),{runner:o,cleanup:i}};function ln(e,t){const n=t==null?void 0:t.equals,o=ve(e);return[J(o),s=>{const i=E(o),c=typeof s=="function"?s(i):s;n&&n(i,c)||(o.value=c,Yt(o))}]}function z(e,t,n){let o;return X(()=>{const s=D(e)?e.value:e();K(t,s,o),o=s},n)}function Ee(e){let t;const n=O();return X(()=>{t&&K(t),t=void 0;const o=e(s=>t=s);Object.is(o,E(n))||(n.value=o)}),J(n)}function dn(e,t){const n=O(t);return[J(n),o=>{n.value=e(E(n),o)}]}function mt(){const e=m.topView();e.zoneFlag!=="setup"&&console.warn('Warning: Marking a component with outside effect outside "setup" zone may cause unexpected behavior.'),e.has_outside_effect=!0}const un=(e,t)=>{m.topView().setContextValue(e,t)};function hn(e,t=m.symbols.NONE){const n=m.topView().getContextValue(e);return n===m.symbols.NONE&&t!==m.symbols.NONE?t:n}const pn=(...e)=>e.map(t=>k(t)),vt=pn,fn=(e,t)=>{const n=O("");return X(()=>{const o=E(n);o&&URL.revokeObjectURL(o),n.value=URL.createObjectURL(new Blob([k(e)],{type:"text/plain",...t}))}),L(()=>URL.revokeObjectURL(n.value)),n},mn="modulepreload",vn=function(e,t){return new URL(e,t).href},Ue={},gn=function(t,n,o){if(!n||n.length===0)return t();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=vn(i,o),i in Ue)return;Ue[i]=!0;const c=i.endsWith(".css"),r=c?'[rel="stylesheet"]':"";if(!!o)for(let p=s.length-1;p>=0;p--){const g=s[p];if(g.href===i&&(!c||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${r}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":mn,c||(d.as="script",d.crossOrigin=""),d.href=i,document.head.appendChild(d),c)return new Promise((p,g)=>{d.addEventListener("load",p),d.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t())},wn=()=>gn(()=>import("https://unpkg.com/@monaco-editor/loader@1.3.3/lib/umd/monaco-loader.js"),[],import.meta.url).then(()=>window.monaco_loader).then(e=>e.init()),yn=({value:e,onChange:t,isDark:n,onSave:o,...s})=>{let i,c,r;return X(()=>{const u=k(n);r!=null&&r.editor&&(u?r.editor.setTheme("vs-dark"):r.editor.setTheme("vs"))}),L(()=>{i==null||i.dispose()}),D(e)&&z(e,u=>{(c==null?void 0:c.getValue())!==u&&(c==null||c.setValue(u))}),()=>y("div",{...s,ref:async u=>{r=await wn(),c=r.editor.createModel(E(e),"typescript",r.Uri.file("main.ts")),c.onDidChangeContent(()=>t(c.getValue())),r.languages.typescript.typescriptDefaults.setCompilerOptions({jsx:"react"}),r.languages.typescript.typescriptDefaults.setDiagnosticsOptions({noSemanticValidation:!0,noSyntaxValidation:!0}),i=r.editor.create(u,{automaticLayout:!0,wordWrap:!0,theme:E(n)?"vs-dark":"vs"}),i.setModel(c),o&&i.addCommand(r.KeyMod.CtrlCmd|r.KeyCode.KeyS,()=>{o(c.getValue())})}})};function ye(){return ye=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},ye.apply(this,arguments)}function bn(e,t,n=""){const o=t===":root",s=o?"":t,i=e.split(",").map(u=>u.trim()).filter(Boolean);let c=o?[""]:s.split(",").map(u=>u.trim()).filter(Boolean);var r;return(r=c,i.flatMap(u=>r.map(d=>[u,d]))).map(([u,d])=>u.startsWith("&")?u.replace(/&/g,d):`${d} ${u}`).map(u=>`${u.replace(n||"","")}${n||""}`.trim()).join(",")}const He=e=>e&&(e.nodeType===Node.DOCUMENT_NODE||e.nodeType===Node.DOCUMENT_FRAGMENT_NODE),Fe=(e,t,n)=>{const{updateCSSText:o,installSheet:s,uninstallSheet:i}=n;let c=!1;return{parseStyle:r=>{const u=function(d,p,{beautify:g=!1,scopedSelector:a=""}){const h=g?`
`:"",l=[{nodeSelector:p+a,cssObject:d}],f=[];for(;l.length>0;){const{nodeSelector:v,cssObject:b}=l.pop(),S={selector:v,cssText:""};for(const C in b){const T=b[C];if(typeof T=="object"){const _=bn(C,v,a);l.push({nodeSelector:_,cssObject:T})}else{if(typeof T=="string"&&!T.trim()||T==null)continue;S.cssText+=`${w=C,w.replace(/[A-Z]/g,_=>`-${_.toLowerCase()}`)}: ${b[C]};${h}`}}S.cssText.trim()&&f.push(S)}var w;return f.map(v=>`${v.selector}{${v.cssText}}`).join(`
`).trim()}(e(),r,{scopedSelector:t});o(u)},applySheet:r=>{c||(c=!0,s(r))},removeSheet:r=>{c&&(c=!1,i(r))}}},kn={STYLESHEET_SCOPED:Symbol("STYLESHEET_SCOPED"),STYLESHEET_ROOT:Symbol("STYLESHEET_ROOT")},We=()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(36),gt=e=>{const{className:t}=e;(({props:o,scopedId:s,rootNodeSelector:i,styleOrFunc:c})=>{const r=(h=>{if(!h)throw new Error("styleOrFn is required.");return typeof h=="function"?h:()=>h})(o.styleFn||o.style||c),u=sn(),{applySheet:d,removeSheet:p,parseStyle:g}=((h,l,f)=>f?((w,v)=>{const b=new CSSStyleSheet,{parseStyle:S,applySheet:C,removeSheet:T}=Fe(w,v,{updateCSSText(_){b.replaceSync(_)},installSheet(_=document){He(_)&&(_.adoptedStyleSheets=[..._.adoptedStyleSheets,b])},uninstallSheet(_=document){He(_)&&(_.adoptedStyleSheets=[..._.adoptedStyleSheets].filter(W=>W!==b))}});return{sheet:b,parseStyle:S,applySheet:C,removeSheet:T}})(h,l):((w,v)=>{const b=document.createElement("style"),{parseStyle:S,applySheet:C,removeSheet:T}=Fe(w,v,{updateCSSText(_){b.innerHTML=_},installSheet(_){_.insertBefore(b,_.firstChild)},uninstallSheet(_){var W;(W=b.parentNode)==null||W.removeChild(b)}});return{styleDOM:b,parseStyle:S,applySheet:C,removeSheet:T}})(h,l))(()=>r(u),s?`[data-s-${s}]`:void 0,o.adopted),{[kn.STYLESHEET_ROOT]:a}=u;if(X(()=>{let h=i;var l;o.adopted&&a&&a instanceof Node&&((l=a).nodeType===Node.DOCUMENT_NODE||l.nodeType===Node.DOCUMENT_FRAGMENT_NODE)&&(h=":root"),g(h)}),o.adopted)d(a),L(()=>p(a));else if((a==null?void 0:a.nodeType)===Node.DOCUMENT_FRAGMENT_NODE)d(a),L(()=>p(a));else{let h;$e(l=>{d(l),h=l}),L(()=>p(h))}})(e),(o=>{const{scopedId:s}=o;if(!s)return;const i=`s-${s}`.replace(/-([a-z])/g,function(a,h){return h.toUpperCase()});let c=null,r=null,u=new Set;const d=a=>{a&&"dataset"in a&&typeof a.dataset=="object"&&(a.dataset[i]="")},p=a=>{a&&"dataset"in a&&typeof a.dataset=="object"&&delete a.dataset[i]},g=()=>{const a=new Set,h=l=>{if(l&&(l===c||!l.is_container)){l instanceof A&&a.add(l.elem);for(const f of l.children){const w=m.dom2view.get(f);w?h(w):f instanceof Element&&a.add(f)}}};h(c);for(const l of a)d(l);for(const l of u)a.has(l)||p(l);u=a};ft((a,h)=>{r=a,c=h,g(),d(a)}),an(()=>{g()}),L(()=>{p(r);for(const a of u)p(a)})})(e);let n=null;$e(o=>{n=o,t&&o instanceof Element&&o.classList.add(t)}),L(()=>{t&&n instanceof Element&&n.classList.remove(t)})},G=(e,t,[n])=>{mt();const o=e.scoped?We():void 0,s=`s-${We()}`;return gt({props:e,styleOrFunc:n,rootNodeSelector:`.${s}`,className:s,scopedId:o}),()=>null},xn=(e,t,[n])=>(mt(),gt({props:ye({},e,{scoped:!1}),styleOrFunc:n,rootNodeSelector:":root"}),()=>null);class _n{constructor(){B(this,"idx",0);B(this,"demos",[]);B(this,"currentDemo",null)}registerDemo(t){const n={id:this.idx++,...t};this.demos.push(n),this.currentDemo||(this.currentDemo=n)}selectDemo(t){const n=this.demos.find(o=>o.id===Number(t));if(!n)throw new Error(`Cannot find demo with name ${name}`);return this.currentDemo=n,n}}const Sn=`import { rh, ref, mount, unref, computed, onUnmounted } from "@rhjs/core";

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
`,j=new _n,ue=e=>({"@rhjs/rh":`https://unpkg.com/@rhjs/rh@${e}/dist/main.module.mjs`}),q=(e="latest",t="latest",n="latest")=>({"@rhjs/core":`https://unpkg.com/@rhjs/core@${e}/dist/main.module.mjs`,"@rhjs/builtin":`https://unpkg.com/@rhjs/builtin@${t}/dist/main.module.mjs`,"@rhjs/tag":`https://unpkg.com/@rhjs/tag@${n}/dist/main.module.mjs`});j.registerDemo({name:"Hello World",code:Sn,importMap:{...q("0.2.3","0.1.3","0.1.6")}});j.registerDemo({name:"Bitcoin",code:Cn,importMap:{...q("0.2.3","0.1.3","0.1.6")}});j.registerDemo({name:"Markdown Editor",code:Tn,importMap:{...q("0.2.3","0.1.3","0.1.6")}});j.registerDemo({name:"HTML tag",code:En,importMap:{...q("0.2.3","0.1.3","0.1.6")}});j.registerDemo({name:"twind",code:Dn,importMap:{...q("0.2.3","0.1.3","0.1.6")}});j.registerDemo({name:"atomic-css",code:jn,importMap:{"@rhjs/atomic-css":"https://unpkg.com/@rhjs/atomic-css@latest/dist/main.module.mjs",...q("0.2.3","0.1.3","0.1.6")}});j.registerDemo({name:"HelloWorld",code:Mn,importMap:{...ue("0.1.2")}});j.registerDemo({name:"Counter",code:Ln,importMap:{...ue("0.1.2")}});j.registerDemo({name:"TodoApp",code:Rn,importMap:{...ue("0.1.2")}});j.registerDemo({name:"Counter",code:On,importMap:{...ue("0.0.34")}});const Be=O(j.currentDemo),wt=()=>({mgr:j,currentDemo:Be,selectDemo(e){Be.value=j.selectDemo(e)},demos:j.demos}),Nn=e=>{var n,o;const t=((n=e.importMap)==null?void 0:n["@rhjs/rh"])||((o=e.importMap)==null?void 0:o["@rhjs/core"]);if(t){const[,,s]=/@rhjs\/(rh|core)@(.+?)\//.exec(t)||[];if(s)return s}return"latest"},An=()=>{const{selectDemo:e,demos:t}=wt();return()=>y("div",null,y("select",{onChange:n=>e(n.target.value)},t.map(n=>y("option",{value:n.id},n.name," @",Nn(n)))))},De=({styleFn:e,isDark:t,...n},o,s)=>()=>y("div",{...n},y(G,{styleFn:()=>({height:"30px",display:"inline-flex",alignItems:"center",justifyContent:"center",paddingLeft:"12px",paddingRight:"12px",cursor:"pointer",userSelect:"none",marginLeft:"4px","&:hover":{backgroundColor:k(t)?"rgba(64,64,64,1)":"rgba(64,64,64,0.1)"},"&:active":{outline:"solid 1px",outlineColor:k(t)?"#fff":"rgba(64,64,64,1)"},...e==null?void 0:e()})}),s),In=({isDark:e})=>()=>y(De,{onClick:()=>{D(e)&&(e.value=!E(e))},isDark:e},y("span",null,()=>k(e)?"🌘":"🌖"));function zn({isDark:e,href:t,target:n="_blank"},o,s){return()=>y(De,{isDark:e,onClick:()=>{window.open(t,n)}},y("a",{href:t,target:n,style:"text-decoration: none; color: inherit;"},s))}const Pn=({isDark:e})=>()=>y("div",null,y(G,{styleFn:()=>({paddingLeft:"12px",paddingRight:"12px",height:"100%",width:"calc(100% - 24px)",display:"grid",gridTemplateColumns:"minmax(0, 1fr) 12px minmax(0, 1fr)"})}),y("div",{style:"display: inline-flex; align-items: center;"},y("span",{style:"user-select: none;word-break: keep-all;white-space: nowrap;"},"🧩 ",y("b",null,"R"),y("small",null,"eactive"),y("b",null,"H"),y("small",null,"ydrate"),y("b",null,"JS")," PLAYGROUND"),y(In,{isDark:e}),y(An,null)),y("div",null),y("div",{style:"display: inline-flex; align-items: center; justify-content: right;"},y(zn,{isDark:e,href:"https://github.com/zhzLuke96/rh.js"},"github"))),Vn=()=>document.querySelectorAll("iframe").forEach(e=>e.style.pointerEvents="none"),$n=()=>document.querySelectorAll("iframe").forEach(e=>e.style.pointerEvents="auto"),Un=({isHorizontal:e,onResize:t,ref:n})=>{const[o,s]=ln(!1),i=()=>s(!0),c=()=>s(!1),r=a=>{t(a.clientX,a.clientY)},u=a=>{const h=a.touches[0];t(h.clientX,h.clientY)},d=O(null);z(o,a=>{a?(Vn(),window.addEventListener("mousemove",r),window.addEventListener("mouseup",c),window.addEventListener("touchmove",u),window.addEventListener("touchend",c)):($n(),window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",c),window.removeEventListener("touchmove",u),window.removeEventListener("touchend",c))}),z(d,a=>{a&&(a.addEventListener("mousedown",i,{passive:!0}),a.addEventListener("touchstart",i,{passive:!0}))}),L(()=>{var a,h;(a=k(d))==null||a.removeEventListener("mousedown",i),(h=k(d))==null||h.removeEventListener("touchstart",i)});const p=hn("isDark"),g=Qt(()=>k(p)?"rgba(255,255,255,0.3)":"rgba(0,0,0,0.3)");return()=>y("div",{ref:a=>{d.value=a,n&&(n.value=a)}},y(G,{styleFn:()=>({backgroundColor:k(o)?k(g):"",width:e?"100%":"12px",height:e?"12px":"100%",zIndex:k(o)?"10":"auto",cursor:e?"row-resize":"col-resize",userSelect:"none",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"12px","&:hover":{backgroundColor:k(g)}})}),"⚪⚪⚪")},Hn=()=>{const e=`
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
`.trim(),t=URL.createObjectURL(new Blob([e],{type:"text/html"}));return L(()=>URL.revokeObjectURL(t)),`${t}#?embedded=${encodeURIComponent(location.origin)}`},Fn=(e,t,n="")=>`
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
`.trim(),Wn=(e,t,n,o)=>{const s={sendToIframe(r){var u,d;(d=(u=E(e))==null?void 0:u.contentWindow)==null||d.postMessage(r,"*")},sendToDevtools(r){var u,d;(d=(u=E(t))==null?void 0:u.contentWindow)==null||d.postMessage(r,"*")}},i=()=>{const{codeInjected:r,codeURL:u}=k(n);if(!r){if(!u){setTimeout(i,3);return}requestAnimationFrame(()=>{s.sendToIframe({event:"CODE_UPDATE",value:u}),o({type:"CODE_INJECTED"})})}},c=r=>{var p,g;const[u,d]=vt(e,t);!u||!d||((g=(p=r.data)==null?void 0:p.includes)!=null&&g.call(p,"Debugger.enable")&&(console.log("Debugger.enable"),o({type:"Debugger.enable"}),i()),r.source===u.contentWindow?d.contentWindow.postMessage(r.data,"*"):r.source===d.contentWindow&&u.contentWindow.postMessage({event:"DEV",data:r.data},"*"))};return window.addEventListener("message",c),L(()=>window.removeEventListener("message",c)),s},Bn=(e,t)=>{const{importMap:n,isDark:o}=e,s=Ee(()=>{const i=Fn(E(o),JSON.stringify({imports:k(n)}));return URL.createObjectURL(new Blob([i],{type:"text/html"}))});return z(s,(i,c)=>{c!==i&&c&&URL.revokeObjectURL(c),t({type:"HTML_CHANGED",iframeSrc:i||""})}),L(()=>{URL.revokeObjectURL(E(s)||"")}),{iframeSrc:s}},Gn=e=>{const{isDark:t,code:n}=e,o=ve(null),s=ve(null),i=l=>{var f;return(f=l.contentDocument)==null?void 0:f.documentElement.classList.toggle("dark",E(t))},c=l=>{const f=E(o);f&&(f.src=l)},r=()=>{var l,f;(f=(l=E(o))==null?void 0:l.contentWindow)==null||f.location.reload()},u=()=>{var l,f;(f=(l=E(s))==null?void 0:l.contentWindow)==null||f.location.reload()};z(()=>k(t),l=>{const f=k(o);f&&i(f)});const[d,p]=dn((l,f)=>{switch(f.type){case"IFRAME_READY":i(f.iframe);let w=l.codeInjected;return{...l,codeInjected:w,iframeReady:!0};case"DEVTOOLS_IFRAME_READY":return{...l,devtoolsIframeReady:!0};case"DEV_LOADED":return{...l,devLoaded:!0};case"HTML_CHANGED":return c(f.iframeSrc),u(),{...l,iframeReady:!1,devtoolsIframeReady:!1,devLoaded:!1,codeInjected:!1,darkInjected:!1};case"HTML_RELOAD":return setTimeout(()=>{r(),u()}),{...l,iframeReady:!1,devtoolsIframeReady:!1,devLoaded:!1,codeInjected:!1,darkInjected:!1};case"CODE_UPDATE":return{...l,codeURL:f.codeURL};case"CODE_INJECTED":return{...l,codeInjected:!0}}return l},{iframeReady:!1,devtoolsIframeReady:!1,devLoaded:!1,codeInjected:!1,codeURL:E(n)}),{sendToDevtools:g,sendToIframe:a}=Wn(o,s,d,p);z(()=>k(n),l=>{p({type:"CODE_UPDATE",codeURL:l}),d.value.iframeReady&&requestAnimationFrame(()=>{a({event:"CODE_UPDATE",value:l}),p({type:"CODE_INJECTED"})})});const{iframeSrc:h}=Bn(e,p);return z(o,l=>{l==null||l.addEventListener("load",()=>p({type:"IFRAME_READY",iframe:l}))}),z(s,l=>{l==null||l.addEventListener("load",()=>p({type:"DEVTOOLS_IFRAME_READY",devIframe:l}))}),{iframeSrc:h,iframeRef:o,devtoolsIframeRef:s,previewState:d,dispatch:p,sendToDevtools:g,sendToIframe:a}},qn=e=>{const{importMap:t,code:n,devtools:o,isDark:s,...i}=e,c=O(null),{iframeSrc:r,iframeRef:u,devtoolsIframeRef:d,previewState:p,dispatch:g}=Gn(e),a=Hn(),h=Ee(()=>`width: 100%; height: 100%; ${k(o)?"display: block;":"display: none;"}`),l=O(.625),f=O(null),w=(v,b)=>{const[S,C]=vt(c,f);if(!S||!C)return;let T,_;const W=S.getBoundingClientRect();T=b-W.top-C.offsetHeight/2,_=S.offsetHeight-C.offsetHeight;const yt=T/_;l.value=yt};return()=>y("div",{...i,ref:c},y(G,{styleFn:()=>{const v=k(l);return{display:"grid",height:"100%",width:"100%",gridTemplateRows:k(o)?`30px minmax(0, ${v}fr) 12px minmax(0, ${1-v}fr)`:"30px minmax(0, 1fr)"}}}),y("div",{style:"border-bottom: 1px solid;border-top: 1px solid;overflow: hidden;"},y(De,{title:"reload page",isDark:s,onClick:()=>g({type:"HTML_RELOAD"})},"♻️relaod")),y("iframe",{ref:u,src:r,style:"width: 100%;height: 100%;",frameBorder:0,sandbox:"allow-popups-to-escape-sandbox allow-scripts allow-popups allow-forms allow-pointer-lock allow-top-navigation allow-modals allow-same-origin"}),y("div",null,y(Un,{ref:f,isHorizontal:!0,onResize:w})),y("iframe",{ref:d,style:h,src:a,frameBorder:"0"}))},Yn=({isDark:e})=>()=>y(xn,{styleFn:()=>({fontFamily:"'Karla', system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",lineHeight:"1.5",fontWeight:"400",colorScheme:k(e)?"light dark":"dark",color:k(e)?"rgba(255, 255, 255, 0.87)":"#242424",backgroundColor:k(e)?"#333":"#fff",fontSynthesis:"none",textRendering:"optimizeLegibility","-webkitFontSmoothing":"antialiased","-moz-osxFontSmoothing":"grayscale","-webkitTextSizeAdjust":"100%",height:"100vh",width:"100vw",body:{margin:"0",minWidth:"100vw",minHeight:"100vh",width:"100%",height:"100%"},"#app":{width:"100%",height:"100%"}})});function Zn(){return new Worker(""+new URL("complier.worker-026b4f92.js",import.meta.url).href)}class Qn{constructor(){B(this,"registry",{})}registerWorker(t,n){this.registry[t]?console.warn(`Worker of type ${t} already registered.`):this.registry[t]=n}removeWorker(t){delete this.registry[t]}getWorker(t){const n=this.registry[t];if(n)return n;throw new Error(`No worker of type ${t} registered.`)}postMessage(t,n){this.getWorker(t).postMessage(n)}listenRecv(t,n){const o=this.getWorker(t);let s;const i=c=>{const{message_token:r}=c.data||{};if(r!==n)return;const u={...c.data};delete u.message_token,s(u),o.removeEventListener("message",i)};return o.addEventListener("message",i),{recv:new Promise((c,r)=>{s=c}),dispose:()=>o.removeEventListener("message",i)}}}class Kn{constructor(){B(this,"registry",new Qn);this.initialize()}async initialize(){this.registry.registerWorker("complier",new Zn)}worker_caller(t,n){const o=Math.random().toString(36).slice(2),s={...n,message_token:o};return this.registry.postMessage(t,s),this.registry.listenRecv(t,o)}compileFile(t){return this.worker_caller("complier",{event:"BABEL",payload:{file:t,compile_options:{}}})}compileFiles(t){return this.worker_caller("complier",{event:"ROLLUP",payload:{files:t,compile_options:{}}})}}const Ge=new Kn,Jn=()=>{let e=null;return L(()=>e==null?void 0:e.dispose()),{compileFile(t){return e==null||e.dispose(),e=Ge.compileFile(t),e.recv},compileFiles(t){return e==null||e.dispose(),e=Ge.compileFiles(t),e.recv}}},Xn='import("@rhjs/rh").then(({cs, ElementSource, View}) => window.dispose = () => View ? View.globalView.unmount() : (cs || ElementSource).global_source.emit("unmount"));',eo=()=>{var u;const e=O(!0);un("isDark",e);const{currentDemo:t}=wt(),n=Ee(()=>{var d;return{"@rhjs/rh":"https://unpkg.com/@rhjs/rh@latest/dist/main.module.mjs","@rhjs/fluent-web-components":"https://unpkg.com/@rhjs/fluent-web-components@latest/dist/main.module.mjs",...(d=t.value)==null?void 0:d.importMap}}),o=O(""),s=fn(o,{type:"text/javascript"}),i=O(((u=t.value)==null?void 0:u.code)||""),c=Jn(),r=async()=>{const d=E(i);if(!d)return;const p=await c.compileFile({filename:"main.tsx",source:d});o.value=`${p.compiled}
${Xn}`};return ft(r),z(t,d=>{d&&i.value!==d.code&&(i.value=d.code,r())}),()=>y("div",null,y(Yn,{isDark:e}),y(G,{styleFn:()=>({position:"relative",display:"flex",flexFlow:"column",width:"100%",height:"100%",maxWidth:"100vw",maxHeight:"100vh",overflow:"hidden"})}),y("header",{style:"height: 30px; width: 100%;"},y(Pn,{isDark:e})),y("div",{style:"flex: 1;"},y(G,{styleFn:()=>({position:"relative",display:"flex",flexFlow:"row",width:"100%",height:"100%"})}),y(yn,{style:"flex: 1;",value:i,onChange:d=>i.value=d,onSave:r,isDark:e}),y(qn,{style:"flex: 1;",importMap:n,code:s,devtools:!0,isDark:e})))};on("#app",eo);
