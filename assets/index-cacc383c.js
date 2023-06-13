var bt=Object.defineProperty;var kt=(e,t,n)=>t in e?bt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var B=(e,t,n)=>(kt(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();function xt(e,t){const n=Object.create(null),o=e.split(",");for(let s=0;s<o.length;s++)n[o[s]]=!0;return t?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const _t=()=>{},St=Object.assign,Tt=Object.prototype.hasOwnProperty,ie=(e,t)=>Tt.call(e,t),$=Array.isArray,re=e=>Ze(e)==="[object Map]",ke=e=>typeof e=="symbol",ae=e=>e!==null&&typeof e=="object",Et=Object.prototype.toString,Ze=e=>Et.call(e),Ct=e=>Ze(e).slice(8,-1),xe=e=>typeof e=="string"&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,_e=(e,t)=>!Object.is(e,t);let N;class Dt{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&N&&(this.parent=N,this.index=(N.scopes||(N.scopes=[])).push(this)-1)}run(t){if(this.active){const n=N;try{return N=this,t()}finally{N=n}}}on(){N=this}off(){N=this.parent}stop(t){if(this.active){let n,o;for(n=0,o=this.effects.length;n<o;n++)this.effects[n].stop();for(n=0,o=this.cleanups.length;n<o;n++)this.cleanups[n]();if(this.scopes)for(n=0,o=this.scopes.length;n<o;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function jt(e){return new Dt(e)}function Qe(e,t=N){t&&t.active&&t.effects.push(e)}const Se=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Ke=e=>(e.w&V)>0,Je=e=>(e.n&V)>0,he=new WeakMap;let Y=0,V=1;const pe=30;let O;const F=Symbol(""),me=Symbol("");class Xe{constructor(t,n=null,o){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Qe(this,o)}run(){if(!this.active)return this.fn();let t=O,n=U;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=O,O=this,U=!0,V=1<<++Y,Y<=pe?(({deps:o})=>{if(o.length)for(let s=0;s<o.length;s++)o[s].w|=V})(this):Le(this),this.fn()}finally{Y<=pe&&(o=>{const{deps:s}=o;if(s.length){let a=0;for(let l=0;l<s.length;l++){const r=s[l];Ke(r)&&!Je(r)?r.delete(o):s[a++]=r,r.w&=~V,r.n&=~V}s.length=a}})(this),V=1<<--Y,O=this.parent,U=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){O===this?this.deferStop=!0:this.active&&(Le(this),this.onStop&&this.onStop(),this.active=!1)}}function Le(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}function Z(e,t){e.effect&&(e=e.effect.fn);const n=new Xe(e);t&&(St(n,t),t.scope&&Qe(n,t.scope)),t&&t.lazy||n.run();const o=n.run.bind(n);return o.effect=n,o}let U=!0;const et=[];function tt(){et.push(U),U=!1}function nt(){const e=et.pop();U=e===void 0||e}function R(e,t,n){if(U&&O){let o=he.get(e);o||he.set(e,o=new Map);let s=o.get(n);s||o.set(n,s=Se()),ot(s)}}function ot(e,t){let n=!1;Y<=pe?Je(e)||(e.n|=V,n=!Ke(e)):n=!e.has(O),n&&(e.add(O),O.deps.push(e))}function H(e,t,n,o,s,a){const l=he.get(e);if(!l)return;let r=[];if(t==="clear")r=[...l.values()];else if(n==="length"&&$(e))l.forEach((i,c)=>{(c==="length"||c>=o)&&r.push(i)});else switch(n!==void 0&&r.push(l.get(n)),t){case"add":$(e)?xe(n)&&r.push(l.get("length")):(r.push(l.get(F)),re(e)&&r.push(l.get(me)));break;case"delete":$(e)||(r.push(l.get(F)),re(e)&&r.push(l.get(me)));break;case"set":re(e)&&r.push(l.get(F))}if(r.length===1)r[0]&&fe(r[0]);else{const i=[];for(const c of r)c&&i.push(...c);fe(Se(i))}}function fe(e,t){const n=$(e)?e:[...e];for(const o of n)o.computed&&Oe(o);for(const o of n)o.computed||Oe(o)}function Oe(e,t){(e!==O||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Lt=xt("__proto__,__v_isRef,__isVue"),st=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ke)),Ot=rt(),Mt=rt(!0),Me=Rt();function Rt(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const o=x(this);for(let a=0,l=this.length;a<l;a++)R(o,"get",a+"");const s=o[t](...n);return s===-1||s===!1?o[t](...n.map(x)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){tt();const o=x(this)[t].apply(this,n);return nt(),o}}),e}function rt(e=!1,t=!1){return function(n,o,s){if(o==="__v_isReactive")return!e;if(o==="__v_isReadonly")return e;if(o==="__v_isShallow")return t;if(o==="__v_raw"&&s===(e?t?Bt:ct:t?Wt:at).get(n))return n;const a=$(n);if(!e&&a&&ie(Me,o))return Reflect.get(Me,o,s);const l=Reflect.get(n,o,s);return(ke(o)?st.has(o):Lt(o))?l:(e||R(n,"get",o),t?l:D(l)?a&&xe(o)?l:l.value:ae(l)?e?J(l):lt(l):l)}}function Nt(e=!1){return function(t,n,o,s){let a=t[n];if(ve(a)&&D(a)&&!D(o))return!1;if(!e&&!ve(o)&&(qt(o)||(o=x(o),a=x(a)),!$(t)&&D(a)&&!D(o)))return a.value=o,!0;const l=$(t)&&xe(n)?Number(n)<t.length:ie(t,n),r=Reflect.set(t,n,o,s);return t===x(s)&&(l?_e(o,a)&&H(t,"set",n,o):H(t,"add",n,o)),r}}const At={get:Ot,set:Nt(),deleteProperty:function(e,t){const n=ie(e,t);e[t];const o=Reflect.deleteProperty(e,t);return o&&n&&H(e,"delete",t,void 0),o},has:function(e,t){const n=Reflect.has(e,t);return ke(t)&&st.has(t)||R(e,"has",t),n},ownKeys:function(e){return R(e,"iterate",$(e)?"length":F),Reflect.ownKeys(e)}},zt={get:Mt,set:(e,t)=>!0,deleteProperty:(e,t)=>!0},Te=e=>e,ce=e=>Reflect.getPrototypeOf(e);function ee(e,t,n=!1,o=!1){const s=x(e=e.__v_raw),a=x(t);n||(t!==a&&R(s,"get",t),R(s,"get",a));const{has:l}=ce(s),r=o?Te:n?Ee:Q;return l.call(s,t)?r(e.get(t)):l.call(s,a)?r(e.get(a)):void(e!==s&&e.get(t))}function te(e,t=!1){const n=this.__v_raw,o=x(n),s=x(e);return t||(e!==s&&R(o,"has",e),R(o,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function ne(e,t=!1){return e=e.__v_raw,!t&&R(x(e),"iterate",F),Reflect.get(e,"size",e)}function Re(e){e=x(e);const t=x(this);return ce(t).has.call(t,e)||(t.add(e),H(t,"add",e,e)),this}function Ne(e,t){t=x(t);const n=x(this),{has:o,get:s}=ce(n);let a=o.call(n,e);a||(e=x(e),a=o.call(n,e));const l=s.call(n,e);return n.set(e,t),a?_e(t,l)&&H(n,"set",e,t):H(n,"add",e,t),this}function Ae(e){const t=x(this),{has:n,get:o}=ce(t);let s=n.call(t,e);s||(e=x(e),s=n.call(t,e)),o&&o.call(t,e);const a=t.delete(e);return s&&H(t,"delete",e,void 0),a}function ze(){const e=x(this),t=e.size!==0,n=e.clear();return t&&H(e,"clear",void 0,void 0),n}function oe(e,t){return function(n,o){const s=this,a=s.__v_raw,l=x(a),r=t?Te:e?Ee:Q;return!e&&R(l,"iterate",F),a.forEach((i,c)=>n.call(o,r(i),r(c),s))}}function se(e,t,n){return function(...o){const s=this.__v_raw,a=x(s),l=re(a),r=e==="entries"||e===Symbol.iterator&&l,i=e==="keys"&&l,c=s[e](...o),h=n?Te:t?Ee:Q;return!t&&R(a,"iterate",i?me:F),{next(){const{value:m,done:u}=c.next();return u?{value:m,done:u}:{value:r?[h(m[0]),h(m[1])]:h(m),done:u}},[Symbol.iterator](){return this}}}}function P(e){return function(...t){return e!=="delete"&&this}}function It(){const e={get(s){return ee(this,s)},get size(){return ne(this)},has:te,add:Re,set:Ne,delete:Ae,clear:ze,forEach:oe(!1,!1)},t={get(s){return ee(this,s,!1,!0)},get size(){return ne(this)},has:te,add:Re,set:Ne,delete:Ae,clear:ze,forEach:oe(!1,!0)},n={get(s){return ee(this,s,!0)},get size(){return ne(this,!0)},has(s){return te.call(this,s,!0)},add:P("add"),set:P("set"),delete:P("delete"),clear:P("clear"),forEach:oe(!0,!1)},o={get(s){return ee(this,s,!0,!0)},get size(){return ne(this,!0)},has(s){return te.call(this,s,!0)},add:P("add"),set:P("set"),delete:P("delete"),clear:P("clear"),forEach:oe(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=se(s,!1,!1),n[s]=se(s,!0,!1),t[s]=se(s,!1,!0),o[s]=se(s,!0,!0)}),[e,n,t,o]}const[Pt,Vt,$t,Ut]=It();function it(e,t){const n=t?e?Ut:$t:e?Vt:Pt;return(o,s,a)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?o:Reflect.get(ie(n,s)&&s in o?n:o,s,a)}const Ht={get:it(!1,!1)},Ft={get:it(!0,!1)},at=new WeakMap,Wt=new WeakMap,ct=new WeakMap,Bt=new WeakMap;function lt(e){return ve(e)?e:dt(e,!1,At,Ht,at)}function J(e){return dt(e,!0,zt,Ft,ct)}function dt(e,t,n,o,s){if(!ae(e)||e.__v_raw&&(!t||!e.__v_isReactive))return e;const a=s.get(e);if(a)return a;const l=(r=e).__v_skip||!Object.isExtensible(r)?0:function(c){switch(c){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}(Ct(r));var r;if(l===0)return e;const i=new Proxy(e,l===2?o:n);return s.set(e,i),i}function ve(e){return!(!e||!e.__v_isReadonly)}function qt(e){return!(!e||!e.__v_isShallow)}function x(e){const t=e&&e.__v_raw;return t?x(t):e}const Q=e=>ae(e)?lt(e):e,Ee=e=>ae(e)?J(e):e;function ut(e){U&&O&&(e=x(e),ot(e.dep||(e.dep=Se())))}function Ce(e,t){(e=x(e)).dep&&fe(e.dep)}function D(e){return!(!e||e.__v_isRef!==!0)}function M(e){return ht(e,!1)}function ge(e){return ht(e,!0)}function ht(e,t){return D(e)?e:new Gt(e,t)}class Gt{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:x(t),this._value=n?t:Q(t)}get value(){return ut(this),this._value}set value(t){t=this.__v_isShallow?t:x(t),_e(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:Q(t),Ce(this))}}function Yt(e){Ce(e)}function k(e){return D(e)?e.value:e}class Zt{constructor(t,n,o,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Xe(t,()=>{this._dirty||(this._dirty=!0,Ce(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=o}get value(){const t=x(this);return ut(t),!t._dirty&&t._cacheable||(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Qt(e,t,n=!1){let o,s;const a=typeof e=="function";return a?(o=e,s=_t):(o=e.get,s=e.set),new Zt(o,s,a||!s,n)}var Ie,Pe,Kt=(Ie=function(e){var t=Object.prototype.hasOwnProperty,n="~";function o(){}function s(i,c,h){this.fn=i,this.context=c,this.once=h||!1}function a(i,c,h,m,u){if(typeof h!="function")throw new TypeError("The listener must be a function");var p=new s(h,m||i,u),d=n?n+c:c;return i._events[d]?i._events[d].fn?i._events[d]=[i._events[d],p]:i._events[d].push(p):(i._events[d]=p,i._eventsCount++),i}function l(i,c){--i._eventsCount==0?i._events=new o:delete i._events[c]}function r(){this._events=new o,this._eventsCount=0}Object.create&&(o.prototype=Object.create(null),new o().__proto__||(n=!1)),r.prototype.eventNames=function(){var i,c,h=[];if(this._eventsCount===0)return h;for(c in i=this._events)t.call(i,c)&&h.push(n?c.slice(1):c);return Object.getOwnPropertySymbols?h.concat(Object.getOwnPropertySymbols(i)):h},r.prototype.listeners=function(i){var c=this._events[n?n+i:i];if(!c)return[];if(c.fn)return[c.fn];for(var h=0,m=c.length,u=new Array(m);h<m;h++)u[h]=c[h].fn;return u},r.prototype.listenerCount=function(i){var c=this._events[n?n+i:i];return c?c.fn?1:c.length:0},r.prototype.emit=function(i,c,h,m,u,p){var d=n?n+i:i;if(!this._events[d])return!1;var f,w,g=this._events[d],b=arguments.length;if(g.fn){switch(g.once&&this.removeListener(i,g.fn,void 0,!0),b){case 1:return g.fn.call(g.context),!0;case 2:return g.fn.call(g.context,c),!0;case 3:return g.fn.call(g.context,c,h),!0;case 4:return g.fn.call(g.context,c,h,m),!0;case 5:return g.fn.call(g.context,c,h,m,u),!0;case 6:return g.fn.call(g.context,c,h,m,u,p),!0}for(w=1,f=new Array(b-1);w<b;w++)f[w-1]=arguments[w];g.fn.apply(g.context,f)}else{var S,T=g.length;for(w=0;w<T;w++)switch(g[w].once&&this.removeListener(i,g[w].fn,void 0,!0),b){case 1:g[w].fn.call(g[w].context);break;case 2:g[w].fn.call(g[w].context,c);break;case 3:g[w].fn.call(g[w].context,c,h);break;case 4:g[w].fn.call(g[w].context,c,h,m);break;default:if(!f)for(S=1,f=new Array(b-1);S<b;S++)f[S-1]=arguments[S];g[w].fn.apply(g[w].context,f)}}return!0},r.prototype.on=function(i,c,h){return a(this,i,c,h,!1)},r.prototype.once=function(i,c,h){return a(this,i,c,h,!0)},r.prototype.removeListener=function(i,c,h,m){var u=n?n+i:i;if(!this._events[u])return this;if(!c)return l(this,u),this;var p=this._events[u];if(p.fn)p.fn!==c||m&&!p.once||h&&p.context!==h||l(this,u);else{for(var d=0,f=[],w=p.length;d<w;d++)(p[d].fn!==c||m&&!p[d].once||h&&p[d].context!==h)&&f.push(p[d]);f.length?this._events[u]=f.length===1?f[0]:f:l(this,u)}return this},r.prototype.removeAllListeners=function(i){var c;return i?this._events[c=n?n+i:i]&&l(this,c):(this._events=new o,this._eventsCount=0),this},r.prototype.off=r.prototype.removeListener,r.prototype.addListener=r.prototype.on,r.prefixed=n,r.EventEmitter=r,e.exports=r},Ie(Pe={exports:{}}),Pe.exports);class Jt{constructor(t){this.data=void 0,this.next=void 0,this.data=t,this.next=null}}class Xt{constructor(){this.head=void 0,this.tail=void 0,this.size=void 0,this.head=null,this.tail=null,this.size=0}enqueue(t){let n=new Jt(t);this.isEmpty()?(this.head=n,this.tail=n):(this.tail&&(this.tail.next=n),this.tail=n),this.size++}dequeue(){if(this.isEmpty())return null;{var t,n;let o=((t=this.head)==null?void 0:t.data)||null;return this.head=((n=this.head)==null?void 0:n.next)||null,this.isEmpty()&&(this.tail=null),this.size--,o}}remove(t){let n=this.head,o=null;for(;n;){if(n.data===t)return o?(o.next=n.next,n.next||(this.tail=o)):(this.head=n.next,this.head||(this.tail=null)),void this.size--;o=n,n=n.next}}isEmpty(){return this.size===0}}const en=new class{constructor(){this.frameDeadline=void 0,this.taskQueue=void 0,this.channel=void 0,this.messagePort=void 0,this.triggerPort=void 0,this.rafTriggered=void 0,this.activeFrameTime=33.33,this.frameDeadline=performance.now()+this.activeFrameTime,this.taskQueue=new Xt,this.channel=new MessageChannel,this.messagePort=this.channel.port1,this.triggerPort=this.channel.port2,this.rafTriggered=!1,this.messagePort.onmessage=()=>{this.handleTask()}}size(){return this.taskQueue.size}timeRemaining(){return Math.max(0,this.frameDeadline-performance.now())}execTask(e){return e({timeRemaining:()=>this.timeRemaining()})}handleTask(){if(this.timeRemaining()<=0)return void this.trigger();let e=this.taskQueue.dequeue();for(;e;)try{this.execTask(e)}finally{if(this.timeRemaining()<=0)break;e=this.taskQueue.dequeue()}this.trigger()}trigger(){this.rafTriggered||this.taskQueue.size!==0&&(this.rafTriggered=!0,requestAnimationFrame(e=>{this.frameDeadline=e+this.activeFrameTime,this.rafTriggered=!1,e<this.frameDeadline&&this.triggerPort.postMessage(null)}))}async runTask(e){return!this.rafTriggered&&performance.now()<this.frameDeadline?this.execTask(e):new Promise((t,n)=>{this.taskQueue.enqueue(()=>{try{t(this.execTask(e))}catch(o){n(o)}}),this.trigger()})}buildTask(e){let t,n,o=!1,s=!1;const a=new Promise((r,i)=>{n=r}),l=r=>{if(!o)return t=e(r),s=!0,n(t),t;n(void 0)};return this.taskQueue.enqueue(l),this.trigger(),{cancel:()=>{o=!0,n(void 0),this.taskQueue.size<=5e3&&this.taskQueue.remove(l)},promise:a,state:()=>({isCancelled:o,isDone:s,result:t})}}};class tn{constructor(){this.tasks=new Map}runTask(t,n){const o=this.tasks.get(t);o&&o.cancel();const s=en.buildTask(n);return this.tasks.set(t,s),s.promise.finally(()=>{this.tasks.get(t)===s&&this.tasks.delete(t)}),s}dispose(){this.tasks.forEach(t=>t.cancel()),this.tasks.clear()}}const nn=Object.prototype.hasOwnProperty;function Ve(e,t){if(Object.is(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;const n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(let s=0;s<n.length;s++)if(!nn.call(t,n[s])||!Object.is(e[n[s]],t[n[s]]))return!1;return!0}const ue=(e,t)=>{if(e.has_outside_effect||t.has_outside_effect)throw new Error("View has outside effect, cannot patch");if(e instanceof z&&t instanceof z)return(n=e).update((o=t).DOMProps,o.DOMChildren),n.DOMChildren=o.DOMChildren,void(n.DOMProps=o.DOMProps);var n,o;const s=I.view2component.get(e),a=I.view2component.get(t);if(s&&a)return s.props=a.props,s.state=a.state,s.children=a.children,void s.update();((l,r)=>{r.initialize(),l.updateChildren(r.children)})(e,t)},$e=e=>{var t,n,o;return{node:e,view:v.dom2view.get(e),key:(t=v.dom2view.get(e))==null?void 0:t.key,keyed:(o=(n=v.dom2view.get(e))==null?void 0:n.key,o!=null)}};class v{static getNextIndex(){return++v.index}static createAnchor(){const t=document.createTextNode("");return t[v.symbols.ANCHOR]=!0,t}static isAnchor(t){return t instanceof Text&&t[v.symbols.ANCHOR]}constructor(t=v.createAnchor()){this.__index=v.getNextIndex(),this.scheduler=new tn,this.events=new Kt,this.anchor=void 0,this.children=[],this.context={},this.parentView=v.globalView,this.is_container=!1,this.has_outside_effect=!1,this.key=void 0,this.effectScope=jt(!0),this.initialized=!1,this.zoneFlag="",this.anchor=t,v.dom2view.set(this.anchor,this),this.events.on("error",n=>{var o;this.events.listenerCount("error")===1&&((o=this.parentView)==null||o.events.emit("error",n))}),this.events.on("throw",n=>{var o;this.events.listenerCount("throw")===1&&((o=this.parentView)==null||o.events.emit("throw",n))})}initialize(){this.initialized||(this.events.emit("init_before"),this.events.emit("init"),this.events.emit("init_after"),this.initialized=!0)}mount(t,n){this.initialize(),this.events.emit("mount_before",t,this.parentView),t.insertBefore(this.anchor,n||null),this.mountChildren(t),this.events.emit("mounted",t,this.parentView),this.events.emit("mount_after",t,this.parentView)}mountChildren(t){if(!t.contains(this.anchor))throw new Error("Cannot mount children before anchor, anchor not contained in parentElement.");for(const n of this.children){t.insertBefore(n,this.anchor);const o=v.dom2view.get(n);if(o){if(o===this)throw new Error("Cannot mount children to self");o.parentView=this,o.mount(t,n)}}}updateChildren(t){const n=t.flat(64).map(a=>function(l){if(l==null)return null;if(l instanceof Node)return l;if(D(l)||typeof l=="function"){const r=new v;let i;if(r.has_outside_effect=!0,D(l)){const c=document.createTextNode("");i=Z(()=>{const h=String(k(l));h!==c.textContent&&(c.textContent=h)},{lazy:!1}),r.updateChildren([c])}else i=Z(()=>{const c=l();r.updateChildren(Array.isArray(c)?c:[c])},{lazy:!1});return r.events.on("unmounted",()=>{i.effect.stop()}),r.anchor}return document.createTextNode(String(l))}(a)).filter(Boolean);if(this.children.length===0&&n.length===0)return;const o=function(a,l){const r=[],i=a.map($e),c=l.map($e);if(i.length===0)return c.map((u,p)=>({type:"remove",node:u,index:p}));if(c.length===0)return i.map((u,p)=>({type:"insert",index:p,node:u}));for(let u=0;u<Math.max(i.length,c.length);u++){var h,m;const p=i[u],d=c[u];if((p==null?void 0:p.node)===(d==null?void 0:d.node)||p!=null&&p.view&&d!=null&&d.view&&(p==null?void 0:p.view)===(d==null?void 0:d.view)||p!=null&&p.keyed&&d!=null&&d.keyed)continue;if(!(!((p==null?void 0:p.node)instanceof Text&&(d==null?void 0:d.node)instanceof Text)||v.isAnchor(p.node)||v.isAnchor(d.node)||(h=p.view)!=null&&h.has_outside_effect||(m=d.view)!=null&&m.has_outside_effect)){p.node.textContent!==d.node.textContent&&r.push({type:"text",oldNode:d,newNode:p,index:u});continue}const f=()=>{p&&!p.keyed&&r.push({type:"insert",index:u,node:p}),d&&!d.keyed&&r.push({type:"remove",index:u,node:d})};if(p&&d)if(p||d)if(p.keyed||d.keyed)f();else if(p.view||d.view)if(p.view&&d.view)if(p.view.has_outside_effect||d.view.has_outside_effect)f();else{const w=d.view,g=p.view,b=w instanceof z,S=g instanceof z;if(b&&!S||!b&&S){f();continue}if(b&&S){w.elem.nodeName===g.elem.nodeName?r.push({type:"dom-update",oldNode:d,newNode:p,index:u}):f();continue}const T=I.view2component.get(w),E=I.view2component.get(g);if(!T&&E||T&&!E){f();continue}if(T!=null&&T._component_type&&E!=null&&E._component_type&&T._component_type!==E._component_type){f();continue}r.push({type:"view-patch",oldNode:d,newNode:p,index:u})}else f();else f();else f();else f()}for(let u=0;u<i.length;u++){const p=i[u];if(p==null||!p.keyed)continue;const d=c.findIndex(f=>f.key===p.key);r.push(d!==u?d!==-1?{type:"move",to:u,node:c[d],newNode:p}:{type:"insert",index:u,node:p}:p.view instanceof z?{type:"dom-update",oldNode:c[d],newNode:p,index:u}:{type:"view-patch",oldNode:c[d],newNode:p,index:u})}for(let u=0;u<c.length;u++){const p=c[u];p!=null&&p.keyed&&i.findIndex(d=>d.key===p.key)===-1&&r.push({type:"remove",index:u,node:p})}return r}(n,this.children);if(o.length===0)return;const s=()=>{const a=this.patchAll(o,n);this.children=a.filter(Boolean)};this.initialized?this.scheduler.runTask("patch-children",s):s()}patchAll(t,n){const o=n.slice();this.children.forEach((r,i)=>{o.length>i&&(o[i]=r)}),t.forEach(r=>{switch(r.type){case"move":o[r.to]=r.node.node;break;case"insert":o[r.index]=r.node.node;break;case"dom-update":case"text":case"view-patch":o[r.index]=r.oldNode.node}});const s={},a=r=>{if(!this.anchor.parentNode||this.children.length===0)return null;let i=r;for(;o.length>i;){if(i in s)return s[i];const c=o[i];if(c&&(c==null?void 0:c.parentNode)===this.anchor.parentNode)return s[i]=c,c;i++}return s[i]=null,null};for(const r of t)switch(r.type){case"move":{var l;const{to:i,node:c,newNode:h}=r;c.view instanceof v&&h.view instanceof v&&ue(c.view,h.view);const m=a(i+1),u=(m==null?void 0:m.parentNode)===this.anchor.parentNode?m:this.anchor;this.anchor.parentNode&&(c.view?(c.view.parentView=this,c.view.mount(this.anchor.parentNode,u)):this.anchor.parentNode.insertBefore(c.node,u)),(l=h.view)==null||l.unmount();break}case"insert":{const{node:i,index:c}=r,h=a(c+1),m=(h==null?void 0:h.parentNode)===this.anchor.parentNode?h:this.anchor;this.anchor.parentNode&&(i.view?(i.view.parentView=this,i.view.mount(this.anchor.parentNode,m)):this.anchor.parentNode.insertBefore(i.node,m));break}case"remove":break;case"view-patch":{const{newNode:i,oldNode:c}=r,h=i.view,m=c.view;ue(m,h),h!==m&&(h.children=[],h.unmount());break}case"dom-update":{const{newNode:i,oldNode:c}=r,h=i.view,m=c.view;ue(m,h),h!==m&&(h.children=[],h.unmount());break}case"text":{const{newNode:i,oldNode:c}=r;c.node.textContent=i.node.textContent;break}}return t.forEach(r=>{if(r.type!=="remove")return;const{node:i}=r;var c;i.view?i.view.unmount():(c=i.node.parentElement)==null||c.removeChild(i.node)}),o}remove(){for(const n of this.children){var t;(t=n.parentElement)==null||t.removeChild(n);const o=v.dom2view.get(n);o&&o.remove()}}effect(t,n="unmounted"){return this.effectScope.run(()=>{const o=Z(t,{lazy:!1});return o.effect.deps.length===0?o.effect.stop():this.events.once(n,()=>o.effect.stop()),o})}unmount(){var t;this.events.emit("unmount_before"),this.scheduler.dispose(),(t=this.anchor.parentNode)==null||t.removeChild(this.anchor),this.unmountChildren(),this.events.emit("unmounted"),this.events.emit("unmount_after"),this.events.removeAllListeners(),this.effectScope.stop()}unmountChildren(){this.remove();for(const t of this.children){const n=v.dom2view.get(t);n&&n.unmount()}}zone(t,n="setup"){const o=this.zoneFlag;v.pushView(this),this.zoneFlag=n;try{return t()}finally{this.zoneFlag=o,v.popView()}}getContextValue(t,n){let o=this;for(;o;){const s=o.context;if(t in s){const a=s[t];if(!n||n(a))return a}o=o.parentView}return v.symbols.NONE}setContextValue(t,n){let o=this;for(;o;){if(o.is_container)return void(o.context[t]=n);o=o.parentView}throw new Error(`Cannot set context value: ${String(t)}`)}}v.symbols={NONE:Symbol("NONE"),DIRECTIVES:Symbol("DIRECTIVES"),ANCHOR:Symbol("ANCHOR")},v.isNone=e=>e===v.symbols.NONE,v.index=0,v.dom2view=new WeakMap,v.stack=[],v.topView=()=>v.stack[v.stack.length-1],v.pushView=e=>v.stack.push(e),v.popView=()=>v.stack.pop(),v.globalView=new v,v.stack.push(v.globalView),v.globalView.is_container=!0;const ye=e=>typeof e=="function"?e():D(e)?k(e):Array.isArray(e)?e.map(ye):typeof e=="object"?Object.fromEntries(Object.entries(e).map(([t,n])=>[t,ye(n)])):k(e);class z extends v{constructor(t,n,o){super(),this.DOMProps=void 0,this.DOMChildren=void 0,this.elem=void 0,this.props={},this.propsCleanups={},this.DOMProps=n,this.DOMChildren=o,this.elem=t instanceof Node?t:document.createElement(t),this.key=n.key,delete n.key,v.dom2view.set(this.elem,this)}initialize(){this.initialized||(this.events.emit("init_before"),this.events.emit("init"),this.update(this.DOMProps,this.DOMChildren),this.events.emit("init_after"),this.initialized=!0)}mount(t,n){this.initialize(),this.events.emit("mount_before",t,this.parentView),t.insertBefore(this.elem,n||null),this.elem.appendChild(this.anchor),this.mountChildren(),this.events.emit("mounted",t,this.parentView),this.events.emit("mount_after",t,this.parentView)}update(t,n){this.events.emit("update_before");try{this.updateChildren(n),Ve(t,this.props)||(this.updateProps(t),this.props=t),this.events.emit("updated")}finally{this.events.emit("update_after")}}updateProps(t){if(Ve(t,this.props))return;const n=this.diffProps(t,this.props);if(n.length===0)return;const o=()=>{for(const s of n){const{type:a,key:l,value:r}=s;switch(a){case"patch":this.patchProp(l,r),this.props[l]=r;break;case"remove":this.cleanupProp(l),delete this.props[l]}}};this.initialized?this.scheduler.runTask("patch-task",o):o()}addPropCleanup(t,n){const o=this.propsCleanups[t];this.propsCleanups[t]=()=>{o==null||o(),n()}}cleanupProp(t){var n,o;(n=(o=this.propsCleanups)[t])==null||n.call(o),delete this.propsCleanups[t]}patchProp(t,n){if(this.cleanupProp(t),this.matchDirectives(t,n),t.startsWith("$")||t.startsWith("_")||t==="key")return;const o=this.elem;if(t!=="ref"){if(o instanceof Element)if(t.startsWith("on")){const s=t.slice(2).toLowerCase();o.addEventListener(s,n);const a=()=>o.removeEventListener(s,n);this.events.once("unmounted",a),this.addPropCleanup(t,()=>{this.events.off("unmounted",a),o.removeEventListener(s,n)})}else{const s=this.effect(()=>{const a=this.elem;if(!(a instanceof Element))return;const l=ye(n);((r,i,c)=>{var h;if(typeof c!="boolean")switch(i){case"className":case"class":{let m="";m=Array.isArray(c)?c.join(" "):typeof c=="object"?Object.entries(c).filter(([u,p])=>!!p).map(([u])=>u).join(" "):String(c),r.setAttribute("class",m);break}case"style":if(!((h=r)instanceof Element&&typeof h.style=="object"))break;typeof c=="object"?Object.entries(c).forEach(([m,u])=>r.style[m]=u):r.style.cssText=String(c);break;case"value":r.value=c;break;default:r.setAttribute(i,String(c))}else c?r.setAttribute(i,""):r.removeAttribute(i)})(a,t,l)});this.addPropCleanup(t,()=>s==null?void 0:s.effect.stop())}}else D(n)?n.value=o:typeof n=="function"&&n(o)}diffProps(t,n){const o=[];return Object.entries(t).forEach(([s,a])=>{Object.is(n[s],a)||o.push({type:"patch",key:s,value:a})}),Object.entries(n).forEach(([s,a])=>{s in t||o.push({type:"remove",key:s,value:a})}),o}matchDirectives(t,n){const o=this.getContextValue(v.symbols.DIRECTIVES,i=>!(i==null||!i[t]));if(!o)return;const s=o[t];if(!s)return;const{mounted:a,unmounted:l,updated:r}=s;a&&this.events.once("mounted",()=>{this.effectScope.run(()=>{const i=this.zone(()=>a(this.elem,n,this));i&&this.addPropCleanup(t,i)})},"directive"),l&&this.events.once("unmounted",()=>{this.effectScope.run(()=>{const i=this.zone(()=>l(this.elem,n,this));i&&this.addPropCleanup(t,i)})},"directive"),r&&this.events.on("updated",()=>{this.effectScope.run(()=>{const i=this.zone(()=>r(this.elem,n,this));i&&this.addPropCleanup(t,i)})},"directive")}mountChildren(){const t=this.elem;for(const n of this.children){t.insertBefore(n,this.anchor);const o=v.dom2view.get(n);if(o){if(o===this)throw new Error("Cannot mount children to self");o.parentView=this,o.mount(t,n)}}}unmount(){var t;(t=this.elem.parentElement)==null||t.removeChild(this.elem),Object.values(this.propsCleanups).forEach(n=>n()),this.propsCleanups={},super.unmount()}}class I{constructor(){this._component_type=void 0,this.render=void 0,this.runner=void 0,this.view=new v,this.props={},this.state={},this.children=[],this.view.is_container=!0,this.view.events.once("unmounted",()=>this.dispose()),this.view.events.once("init_after",()=>{this.view.effectScope.run(()=>{this.runner=Z(this.update.bind(this),{lazy:!1,onStop:()=>this.view.events.emit("render_stop"),onTrack:t=>this.view.events.emit("render_tracked",t),onTrigger:t=>this.view.events.emit("render_triggered",t)})})}),I.view2component.set(this.view,this)}update(){this.view.events.emit("update_before");try{const t=this.view.effectScope.run(()=>this.view.zone(()=>this.render(this.props,this.state,this.children),"render"));this.view.updateChildren(Array.isArray(t)?t:[t]),this.view.events.emit("updated")}catch(t){setTimeout(()=>{this.view.events.emit("error",t)}),console.error(t)}finally{this.view.events.emit("update_after")}}dispose(){var t;(t=this.runner)==null||t.effect.stop()}}I.view2component=new WeakMap;const pt=(e,t,n)=>{let o;return o=typeof e=="function"?(s=>(a,l)=>{const r=new I;return r.props=a,r.children=l,r.view.key=a.key,r.view.events.once("init",()=>{r.render=r.view.zone(()=>s(a,r.state,r.children))}),r._component_type=s,r})(e):(s=>(a,l)=>{const r=new I;return r.props=a,r.children=l,r.view.key=a.key,r.view.events.once("init",()=>{r.state=r.view.zone(()=>s.setup(a,l))}),r._component_type=s,r.render=s.render.bind(r),r})(e),o(t,n)},y=(e,t={},...n)=>{if(t||(t={}),n||(n=[]),n=n.flat(64),e instanceof Node){const o=v.dom2view.get(e);return o?o instanceof z&&o.update(t,n):new z(e,t,n),e}return typeof e=="string"||e instanceof String?new z(e,t,n).elem:pt(e,t,n).view.anchor};function on(e,t,n){const o=e instanceof Element?e:document.querySelector(e);if(!o)throw new Error("Could not find selector");if(!(t instanceof Node)){const s=pt(t,n||{},[]);return s.view.mount(o),s}{const s=v.dom2view.get(t);s?s.mount(o):o.appendChild(t)}}const sn=e=>{const t=(n=v.topView(),new Proxy({},{get(o,s,a){const l=n.getContextValue(s);if(!v.isNone(l))return l},set:(o,s,a,l)=>(n.setContextValue(s,a),!0)}));var n;return e==null||e(t),t};function we(){return we=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},we.apply(this,arguments)}function K(e,...t){tt();try{return e.apply(void 0,t)}finally{nt()}}const C=e=>typeof e=="function"?K(e):K(k,e),rn=(e,t,n=!1)=>{const o=v.topView();return o.events[n?"once":"on"](e,t),()=>o.events.off(e,t)},le=(e,t=!1)=>n=>rn(e,n,t),mt=le("mounted"),Ue=le("mount_before"),L=le("unmounted"),an=le("update_after"),cn=e=>{const t=v.topView();if(t.zoneFlag==="render"){const n=()=>{t.events.off("update_before",o),t.events.off("unmounted",o)},o=()=>{n(),e()};return t.events.once("update_before",o),t.events.once("unmounted",o),n}return t.events.once("unmounted",e),()=>t.events.off("unmounted",e)},X=(e,t)=>{let n;const o=Z(()=>{n&&K(n),n=void 0,e(l=>n=l)},we({lazy:!1},t));let s;const a=()=>{s==null||s(),n==null||n(),n=void 0,o.effect.stop()};return s=cn(a),{runner:o,cleanup:a}};function ln(e,t){const n=t==null?void 0:t.equals,o=ge(e);return[J(o),s=>{const a=C(o),l=typeof s=="function"?s(a):s;n&&n(a,l)||(o.value=l,Yt(o))}]}function A(e,t,n){let o;return X(()=>{const s=D(e)?e.value:e();K(t,s,o),o=s},n)}function De(e){let t;const n=M();return X(()=>{t&&K(t),t=void 0;const o=e(s=>t=s);Object.is(o,C(n))||(n.value=o)}),J(n)}function dn(e,t){const n=M(t);return[J(n),o=>{n.value=e(C(n),o)}]}function ft(){const e=v.topView();e.zoneFlag!=="setup"&&console.warn('Warning: Marking a component with outside effect outside "setup" zone may cause unexpected behavior.'),e.has_outside_effect=!0}const un=(e,t)=>{v.topView().setContextValue(e,t)};function hn(e,t=v.symbols.NONE){const n=v.topView().getContextValue(e);return n===v.symbols.NONE&&t!==v.symbols.NONE?t:n}const pn=(...e)=>e.map(t=>k(t)),vt=pn,mn=(e,t)=>{const n=M("");return X(()=>{const o=C(n);o&&URL.revokeObjectURL(o),n.value=URL.createObjectURL(new Blob([k(e)],{type:"text/plain",...t}))}),L(()=>URL.revokeObjectURL(n.value)),n},fn="modulepreload",vn=function(e,t){return new URL(e,t).href},He={},gn=function(t,n,o){if(!n||n.length===0)return t();const s=document.getElementsByTagName("link");return Promise.all(n.map(a=>{if(a=vn(a,o),a in He)return;He[a]=!0;const l=a.endsWith(".css"),r=l?'[rel="stylesheet"]':"";if(!!o)for(let h=s.length-1;h>=0;h--){const m=s[h];if(m.href===a&&(!l||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${r}`))return;const c=document.createElement("link");if(c.rel=l?"stylesheet":fn,l||(c.as="script",c.crossOrigin=""),c.href=a,document.head.appendChild(c),l)return new Promise((h,m)=>{c.addEventListener("load",h),c.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>t())},yn=()=>gn(()=>import("https://unpkg.com/@monaco-editor/loader@1.3.3/lib/umd/monaco-loader.js"),[],import.meta.url).then(()=>window.monaco_loader).then(e=>e.init()),wn=({value:e,onChange:t,isDark:n,onSave:o,...s})=>{let a,l,r;return X(()=>{const i=k(n);r!=null&&r.editor&&(i?r.editor.setTheme("vs-dark"):r.editor.setTheme("vs"))}),L(()=>{a==null||a.dispose()}),D(e)&&A(e,i=>{(l==null?void 0:l.getValue())!==i&&(l==null||l.setValue(i))}),()=>y("div",{...s,ref:async i=>{r=await yn(),l=r.editor.createModel(C(e),"typescript",r.Uri.file("main.ts")),l.onDidChangeContent(()=>t(l.getValue())),r.languages.typescript.typescriptDefaults.setCompilerOptions({jsx:"react"}),r.languages.typescript.typescriptDefaults.setDiagnosticsOptions({noSemanticValidation:!0,noSyntaxValidation:!0}),a=r.editor.create(i,{automaticLayout:!0,wordWrap:!0,theme:C(n)?"vs-dark":"vs"}),a.setModel(l),o&&a.addCommand(r.KeyMod.CtrlCmd|r.KeyCode.KeyS,()=>{o(l.getValue())})}})};function be(){return be=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},be.apply(this,arguments)}function bn(e,t,n=""){const o=t===":root",s=o?"":t,a=e.split(",").map(i=>i.trim()).filter(Boolean);let l=o?[""]:s.split(",").map(i=>i.trim()).filter(Boolean);var r;return(r=l,a.flatMap(i=>r.map(c=>[i,c]))).map(([i,c])=>i.startsWith("&")?i.replace(/&/g,c):`${c} ${i}`).map(i=>`${i.replace(n||"","")}${n||""}`.trim()).join(",")}const Fe=e=>e&&(e.nodeType===Node.DOCUMENT_NODE||e.nodeType===Node.DOCUMENT_FRAGMENT_NODE),We=(e,t,n)=>{const{updateCSSText:o,installSheet:s,uninstallSheet:a}=n;let l=!1;return{parseStyle:r=>{const i=function(c,h,{beautify:m=!1,scopedSelector:u=""}){const p=m?`
`:"",d=[{nodeSelector:h+u,cssObject:c}],f=[];for(;d.length>0;){const{nodeSelector:g,cssObject:b}=d.pop(),S={selector:g,cssText:""};for(const T in b){const E=b[T];if(typeof E=="object"){const _=bn(T,g,u);d.push({nodeSelector:_,cssObject:E})}else{if(typeof E=="string"&&!E.trim()||E==null)continue;S.cssText+=`${w=T,w.replace(/[A-Z]/g,_=>`-${_.toLowerCase()}`)}: ${b[T]};${p}`}}S.cssText.trim()&&f.push(S)}var w;return f.map(g=>`${g.selector}{${g.cssText}}`).join(`
`).trim()}(e(),r,{scopedSelector:t});o(i)},applySheet:r=>{l||(l=!0,s(r))},removeSheet:r=>{l&&(l=!1,a(r))}}},kn={STYLESHEET_SCOPED:Symbol("STYLESHEET_SCOPED"),STYLESHEET_ROOT:Symbol("STYLESHEET_ROOT")},Be=()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(36),gt=e=>{const{className:t}=e;(({props:o,scopedId:s,rootNodeSelector:a,styleOrFunc:l})=>{const r=(p=>{if(!p)throw new Error("styleOrFn is required.");return typeof p=="function"?p:()=>p})(o.styleFn||o.style||l),i=sn(),{applySheet:c,removeSheet:h,parseStyle:m}=((p,d,f)=>f?((w,g)=>{const b=new CSSStyleSheet,{parseStyle:S,applySheet:T,removeSheet:E}=We(w,g,{updateCSSText(_){b.replaceSync(_)},installSheet(_=document){Fe(_)&&(_.adoptedStyleSheets=[..._.adoptedStyleSheets,b])},uninstallSheet(_=document){Fe(_)&&(_.adoptedStyleSheets=[..._.adoptedStyleSheets].filter(W=>W!==b))}});return{sheet:b,parseStyle:S,applySheet:T,removeSheet:E}})(p,d):((w,g)=>{const b=document.createElement("style"),{parseStyle:S,applySheet:T,removeSheet:E}=We(w,g,{updateCSSText(_){b.innerHTML=_},installSheet(_){_.insertBefore(b,_.firstChild)},uninstallSheet(_){var W;(W=b.parentNode)==null||W.removeChild(b)}});return{styleDOM:b,parseStyle:S,applySheet:T,removeSheet:E}})(p,d))(()=>r(i),s?`[data-s-${s}]`:void 0,o.adopted),{[kn.STYLESHEET_ROOT]:u}=i;if(X(()=>{let p=a;var d;o.adopted&&u&&u instanceof Node&&((d=u).nodeType===Node.DOCUMENT_NODE||d.nodeType===Node.DOCUMENT_FRAGMENT_NODE)&&(p=":root"),m(p)}),o.adopted)c(u),L(()=>h(u));else if((u==null?void 0:u.nodeType)===Node.DOCUMENT_FRAGMENT_NODE)c(u),L(()=>h(u));else{let p;Ue(d=>{c(d),p=d}),L(()=>h(p))}})(e),(o=>{const{scopedId:s}=o;if(!s)return;const a=`s-${s}`.replace(/-([a-z])/g,function(u,p){return p.toUpperCase()});let l=null,r=null,i=new Set;const c=u=>{u&&"dataset"in u&&typeof u.dataset=="object"&&(u.dataset[a]="")},h=u=>{u&&"dataset"in u&&typeof u.dataset=="object"&&delete u.dataset[a]},m=()=>{const u=new Set,p=d=>{if(d&&(d===l||!d.is_container)){d instanceof z&&u.add(d.elem);for(const f of d.children){const w=v.dom2view.get(f);w?p(w):f instanceof Element&&u.add(f)}}};p(l);for(const d of u)c(d);for(const d of i)u.has(d)||h(d);i=u};mt((u,p)=>{r=u,l=p,m(),c(u)}),an(()=>{m()}),L(()=>{h(r);for(const u of i)h(u)})})(e);let n=null;Ue(o=>{n=o,t&&o instanceof Element&&o.classList.add(t)}),L(()=>{t&&n instanceof Element&&n.classList.remove(t)})},q=(e,t,[n])=>{ft();const o=e.scoped?Be():void 0,s=`s-${Be()}`;return gt({props:e,styleOrFunc:n,rootNodeSelector:`.${s}`,className:s,scopedId:o}),()=>null},xn=(e,t,[n])=>(ft(),gt({props:be({},e,{scoped:!1}),styleOrFunc:n,rootNodeSelector:":root"}),()=>null);class _n{constructor(){B(this,"idx",0);B(this,"demos",[]);B(this,"currentDemo",null)}registerDemo(t){const n={id:this.idx++,...t};this.demos.push(n),this.currentDemo||(this.currentDemo=n)}selectDemo(t){const n=this.demos.find(o=>o.id===Number(t));if(!n)throw new Error(`Cannot find demo with name ${name}`);return this.currentDemo=n,n}}const Sn=`import { rh, ref, mount, unref, computed, onUnmounted } from "@rhjs/core";

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
`,Tn=`import {
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
`,En=`import {
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
`,Cn=`import { mount, createState } from "@rhjs/core";
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
import { enable, atomicDirective } from "@rhjs/atomic-css";

atomicDirective.key = "$class";
enable();

const LoginPage = () => {
  return () =>
    html\`
      <div
        $class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-white"
      >
        <div $class="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            $class="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
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
`,On=`import { rh, ref, mount, unref, computed, onUnmount } from "@rhjs/rh";

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
`,Mn=`import {
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
`,Rn=`import { Button, ensureFluentUILoaded } from "@rhjs/fluent-web-components";
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
`,j=new _n,de=e=>({"@rhjs/rh":`https://unpkg.com/@rhjs/rh@${e}/dist/main.module.mjs`}),G=(e="latest",t="latest",n="latest")=>({"@rhjs/core":`https://unpkg.com/@rhjs/core@${e}/dist/main.module.mjs`,"@rhjs/builtin":`https://unpkg.com/@rhjs/builtin@${t}/dist/main.module.mjs`,"@rhjs/tag":`https://unpkg.com/@rhjs/tag@${n}/dist/main.module.mjs`});j.registerDemo({name:"Hello World",code:Sn,importMap:{...G("0.2.2","0.1.2","0.1.3")}});j.registerDemo({name:"Bitcoin",code:Tn,importMap:{...G("0.2.2","0.1.2","0.1.3")}});j.registerDemo({name:"Markdown Editor",code:En,importMap:{...G("0.2.2","0.1.2","0.1.3")}});j.registerDemo({name:"HTML tag",code:Cn,importMap:{...G("0.2.2","0.1.2","0.1.3")}});j.registerDemo({name:"twind",code:Dn,importMap:{...G("0.2.2","0.1.2","0.1.3")}});j.registerDemo({name:"atomic-css",code:jn,importMap:{"@rhjs/atomic-css":"https://unpkg.com/@rhjs/atomic-css@latest/dist/main.module.mjs",...G("0.2.2","0.1.2","0.1.3")}});j.registerDemo({name:"HelloWorld",code:On,importMap:{...de("0.1.2")}});j.registerDemo({name:"Counter",code:Ln,importMap:{...de("0.1.2")}});j.registerDemo({name:"TodoApp",code:Mn,importMap:{...de("0.1.2")}});j.registerDemo({name:"Counter",code:Rn,importMap:{...de("0.0.34")}});const qe=M(j.currentDemo),yt=()=>({mgr:j,currentDemo:qe,selectDemo(e){qe.value=j.selectDemo(e)},demos:j.demos}),Nn=e=>{var n,o;const t=((n=e.importMap)==null?void 0:n["@rhjs/rh"])||((o=e.importMap)==null?void 0:o["@rhjs/core"]);if(t){const[,,s]=/@rhjs\/(rh|core)@(.+?)\//.exec(t)||[];if(s)return s}return"latest"},An=()=>{const{selectDemo:e,demos:t}=yt();return()=>y("div",null,y("select",{onChange:n=>e(n.target.value)},t.map(n=>y("option",{value:n.id},n.name," @",Nn(n)))))},je=({styleFn:e,isDark:t,...n},o,s)=>()=>y("div",{...n},y(q,{styleFn:()=>({height:"30px",display:"inline-flex",alignItems:"center",justifyContent:"center",paddingLeft:"12px",paddingRight:"12px",cursor:"pointer",userSelect:"none",marginLeft:"4px","&:hover":{backgroundColor:k(t)?"rgba(64,64,64,1)":"rgba(64,64,64,0.1)"},"&:active":{outline:"solid 1px",outlineColor:k(t)?"#fff":"rgba(64,64,64,1)"},...e==null?void 0:e()})}),s),zn=({isDark:e})=>()=>y(je,{onClick:()=>{D(e)&&(e.value=!C(e))},isDark:e},y("span",null,()=>k(e)?"🌘":"🌖"));function Ge({isDark:e,href:t,target:n="_blank"},o,s){return()=>y(je,{isDark:e,onClick:()=>{window.open(t,n)}},y("a",{href:t,target:n,style:"text-decoration: none; color: inherit;"},s))}const In=({isDark:e})=>()=>y("div",null,y(q,{styleFn:()=>({paddingLeft:"12px",paddingRight:"12px",height:"100%",width:"calc(100% - 24px)",display:"grid",gridTemplateColumns:"minmax(0, 1fr) 12px minmax(0, 1fr)"})}),y("div",{style:"display: inline-flex; align-items: center;"},y("span",{style:"user-select: none;word-break: keep-all;white-space: nowrap;"},"🧩 ",y("b",null,"R"),y("small",null,"eactive"),y("b",null,"H"),y("small",null,"ydrate"),y("b",null,"JS")," PLAYGROUND"),y(zn,{isDark:e}),y(An,null)),y("div",null),y("div",{style:"display: inline-flex; align-items: center; justify-content: right;"},y(Ge,{isDark:e,href:"https://zhzluke96.github.io/rhjs-demos/#demo",target:"_self"},"demos"),y(Ge,{isDark:e,href:"https://github.com/zhzLuke96/rh.js"},"github"))),Pn=()=>document.querySelectorAll("iframe").forEach(e=>e.style.pointerEvents="none"),Vn=()=>document.querySelectorAll("iframe").forEach(e=>e.style.pointerEvents="auto"),$n=({isHorizontal:e,onResize:t,ref:n})=>{const[o,s]=ln(!1),a=()=>s(!0),l=()=>s(!1),r=u=>{t(u.clientX,u.clientY)},i=u=>{const p=u.touches[0];t(p.clientX,p.clientY)},c=M(null);A(o,u=>{u?(Pn(),window.addEventListener("mousemove",r),window.addEventListener("mouseup",l),window.addEventListener("touchmove",i),window.addEventListener("touchend",l)):(Vn(),window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",l),window.removeEventListener("touchmove",i),window.removeEventListener("touchend",l))}),A(c,u=>{u&&(u.addEventListener("mousedown",a,{passive:!0}),u.addEventListener("touchstart",a,{passive:!0}))}),L(()=>{var u,p;(u=k(c))==null||u.removeEventListener("mousedown",a),(p=k(c))==null||p.removeEventListener("touchstart",a)});const h=hn("isDark"),m=Qt(()=>k(h)?"rgba(255,255,255,0.3)":"rgba(0,0,0,0.3)");return()=>y("div",{ref:u=>{c.value=u,n&&(n.value=u)}},y(q,{styleFn:()=>({backgroundColor:k(o)?k(m):"",width:e?"100%":"12px",height:e?"12px":"100%",zIndex:k(o)?"10":"auto",cursor:e?"row-resize":"col-resize",userSelect:"none",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"12px","&:hover":{backgroundColor:k(m)}})}),"⚪⚪⚪")},Un=()=>{const e=`
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
`.trim(),t=URL.createObjectURL(new Blob([e],{type:"text/html"}));return L(()=>URL.revokeObjectURL(t)),`${t}#?embedded=${encodeURIComponent(location.origin)}`},Hn=(e,t,n="")=>`
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
`.trim(),Fn=(e,t,n,o)=>{const s={sendToIframe(r){var i,c;(c=(i=C(e))==null?void 0:i.contentWindow)==null||c.postMessage(r,"*")},sendToDevtools(r){var i,c;(c=(i=C(t))==null?void 0:i.contentWindow)==null||c.postMessage(r,"*")}},a=()=>{const{codeInjected:r,codeURL:i}=k(n);if(!r){if(!i){setTimeout(a,3);return}requestAnimationFrame(()=>{s.sendToIframe({event:"CODE_UPDATE",value:i}),o({type:"CODE_INJECTED"})})}},l=r=>{var h,m;const[i,c]=vt(e,t);!i||!c||((m=(h=r.data)==null?void 0:h.includes)!=null&&m.call(h,"Debugger.enable")&&(console.log("Debugger.enable"),o({type:"Debugger.enable"}),a()),r.source===i.contentWindow?c.contentWindow.postMessage(r.data,"*"):r.source===c.contentWindow&&i.contentWindow.postMessage({event:"DEV",data:r.data},"*"))};return window.addEventListener("message",l),L(()=>window.removeEventListener("message",l)),s},Wn=(e,t)=>{const{importMap:n,isDark:o}=e,s=De(()=>{const a=Hn(C(o),JSON.stringify({imports:k(n)}));return URL.createObjectURL(new Blob([a],{type:"text/html"}))});return A(s,(a,l)=>{l!==a&&l&&URL.revokeObjectURL(l),t({type:"HTML_CHANGED",iframeSrc:a||""})}),L(()=>{URL.revokeObjectURL(C(s)||"")}),{iframeSrc:s}},Bn=e=>{const{isDark:t,code:n}=e,o=ge(null),s=ge(null),a=d=>{var f;return(f=d.contentDocument)==null?void 0:f.documentElement.classList.toggle("dark",C(t))},l=d=>{const f=C(o);f&&(f.src=d)},r=()=>{var d,f;(f=(d=C(o))==null?void 0:d.contentWindow)==null||f.location.reload()},i=()=>{var d,f;(f=(d=C(s))==null?void 0:d.contentWindow)==null||f.location.reload()};A(()=>k(t),d=>{const f=k(o);f&&a(f)});const[c,h]=dn((d,f)=>{switch(f.type){case"IFRAME_READY":a(f.iframe);let w=d.codeInjected;return{...d,codeInjected:w,iframeReady:!0};case"DEVTOOLS_IFRAME_READY":return{...d,devtoolsIframeReady:!0};case"DEV_LOADED":return{...d,devLoaded:!0};case"HTML_CHANGED":return l(f.iframeSrc),i(),{...d,iframeReady:!1,devtoolsIframeReady:!1,devLoaded:!1,codeInjected:!1,darkInjected:!1};case"HTML_RELOAD":return setTimeout(()=>{r(),i()}),{...d,iframeReady:!1,devtoolsIframeReady:!1,devLoaded:!1,codeInjected:!1,darkInjected:!1};case"CODE_UPDATE":return{...d,codeURL:f.codeURL};case"CODE_INJECTED":return{...d,codeInjected:!0}}return d},{iframeReady:!1,devtoolsIframeReady:!1,devLoaded:!1,codeInjected:!1,codeURL:C(n)}),{sendToDevtools:m,sendToIframe:u}=Fn(o,s,c,h);A(()=>k(n),d=>{h({type:"CODE_UPDATE",codeURL:d}),c.value.iframeReady&&requestAnimationFrame(()=>{u({event:"CODE_UPDATE",value:d}),h({type:"CODE_INJECTED"})})});const{iframeSrc:p}=Wn(e,h);return A(o,d=>{d==null||d.addEventListener("load",()=>h({type:"IFRAME_READY",iframe:d}))}),A(s,d=>{d==null||d.addEventListener("load",()=>h({type:"DEVTOOLS_IFRAME_READY",devIframe:d}))}),{iframeSrc:p,iframeRef:o,devtoolsIframeRef:s,previewState:c,dispatch:h,sendToDevtools:m,sendToIframe:u}},qn=e=>{const{importMap:t,code:n,devtools:o,isDark:s,...a}=e,l=M(null),{iframeSrc:r,iframeRef:i,devtoolsIframeRef:c,previewState:h,dispatch:m}=Bn(e),u=Un(),p=De(()=>`width: 100%; height: 100%; ${k(o)?"display: block;":"display: none;"}`),d=M(.625),f=M(null),w=(g,b)=>{const[S,T]=vt(l,f);if(!S||!T)return;let E,_;const W=S.getBoundingClientRect();E=b-W.top-T.offsetHeight/2,_=S.offsetHeight-T.offsetHeight;const wt=E/_;d.value=wt};return()=>y("div",{...a,ref:l},y(q,{styleFn:()=>{const g=k(d);return{display:"grid",height:"100%",width:"100%",gridTemplateRows:k(o)?`30px minmax(0, ${g}fr) 12px minmax(0, ${1-g}fr)`:"30px minmax(0, 1fr)"}}}),y("div",{style:"border-bottom: 1px solid;border-top: 1px solid;overflow: hidden;"},y(je,{title:"reload page",isDark:s,onClick:()=>m({type:"HTML_RELOAD"})},"♻️relaod")),y("iframe",{ref:i,src:r,style:"width: 100%;height: 100%;",frameBorder:0,sandbox:"allow-popups-to-escape-sandbox allow-scripts allow-popups allow-forms allow-pointer-lock allow-top-navigation allow-modals allow-same-origin"}),y("div",null,y($n,{ref:f,isHorizontal:!0,onResize:w})),y("iframe",{ref:c,style:p,src:u,frameBorder:"0"}))},Gn=({isDark:e})=>()=>y(xn,{styleFn:()=>({fontFamily:"'Karla', system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",lineHeight:"1.5",fontWeight:"400",colorScheme:k(e)?"light dark":"dark",color:k(e)?"rgba(255, 255, 255, 0.87)":"#242424",backgroundColor:k(e)?"#333":"#fff",fontSynthesis:"none",textRendering:"optimizeLegibility","-webkitFontSmoothing":"antialiased","-moz-osxFontSmoothing":"grayscale","-webkitTextSizeAdjust":"100%",height:"100vh",width:"100vw",body:{margin:"0",minWidth:"100vw",minHeight:"100vh",width:"100%",height:"100%"},"#app":{width:"100%",height:"100%"}})});function Yn(){return new Worker(""+new URL("complier.worker-026b4f92.js",import.meta.url).href)}class Zn{constructor(){B(this,"registry",{})}registerWorker(t,n){this.registry[t]?console.warn(`Worker of type ${t} already registered.`):this.registry[t]=n}removeWorker(t){delete this.registry[t]}getWorker(t){const n=this.registry[t];if(n)return n;throw new Error(`No worker of type ${t} registered.`)}postMessage(t,n){this.getWorker(t).postMessage(n)}listenRecv(t,n){const o=this.getWorker(t);let s;const a=l=>{const{message_token:r}=l.data||{};if(r!==n)return;const i={...l.data};delete i.message_token,s(i),o.removeEventListener("message",a)};return o.addEventListener("message",a),{recv:new Promise((l,r)=>{s=l}),dispose:()=>o.removeEventListener("message",a)}}}class Qn{constructor(){B(this,"registry",new Zn);this.initialize()}async initialize(){this.registry.registerWorker("complier",new Yn)}worker_caller(t,n){const o=Math.random().toString(36).slice(2),s={...n,message_token:o};return this.registry.postMessage(t,s),this.registry.listenRecv(t,o)}compileFile(t){return this.worker_caller("complier",{event:"BABEL",payload:{file:t,compile_options:{}}})}compileFiles(t){return this.worker_caller("complier",{event:"ROLLUP",payload:{files:t,compile_options:{}}})}}const Ye=new Qn,Kn=()=>{let e=null;return L(()=>e==null?void 0:e.dispose()),{compileFile(t){return e==null||e.dispose(),e=Ye.compileFile(t),e.recv},compileFiles(t){return e==null||e.dispose(),e=Ye.compileFiles(t),e.recv}}},Jn='import("@rhjs/rh").then(({cs, ElementSource, View}) => window.dispose = () => View ? View.globalView.unmount() : (cs || ElementSource).global_source.emit("unmount"));',Xn=()=>{var i;const e=M(!0);un("isDark",e);const{currentDemo:t}=yt(),n=De(()=>{var c;return{"@rhjs/rh":"https://unpkg.com/@rhjs/rh@latest/dist/main.module.mjs","@rhjs/fluent-web-components":"https://unpkg.com/@rhjs/fluent-web-components@latest/dist/main.module.mjs",...(c=t.value)==null?void 0:c.importMap}}),o=M(""),s=mn(o,{type:"text/javascript"}),a=M(((i=t.value)==null?void 0:i.code)||""),l=Kn(),r=async()=>{const c=C(a);if(!c)return;const h=await l.compileFile({filename:"main.tsx",source:c});o.value=`${h.compiled}
${Jn}`};return mt(r),A(t,c=>{c&&a.value!==c.code&&(a.value=c.code,r())}),()=>y("div",null,y(Gn,{isDark:e}),y(q,{styleFn:()=>({position:"relative",display:"flex",flexFlow:"column",width:"100%",height:"100%",maxWidth:"100vw",maxHeight:"100vh",overflow:"hidden"})}),y("header",{style:"height: 30px; width: 100%;"},y(In,{isDark:e})),y("div",{style:"flex: 1;"},y(q,{styleFn:()=>({position:"relative",display:"flex",flexFlow:"row",width:"100%",height:"100%"})}),y(wn,{style:"flex: 1;",value:a,onChange:c=>a.value=c,onSave:r,isDark:e}),y(qn,{style:"flex: 1;",importMap:n,code:s,devtools:!0,isDark:e})))};on("#app",Xn);
