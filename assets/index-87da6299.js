var wt=Object.defineProperty;var bt=(e,t,n)=>t in e?wt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var B=(e,t,n)=>(bt(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const l of c.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(s){if(s.ep)return;s.ep=!0;const c=n(s);fetch(s.href,c)}})();function kt(e,t){const n=Object.create(null),o=e.split(",");for(let s=0;s<o.length;s++)n[o[s]]=!0;return t?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const xt=()=>{},_t=Object.assign,St=Object.prototype.hasOwnProperty,ae=(e,t)=>St.call(e,t),V=Array.isArray,se=e=>Be(e)==="[object Map]",ye=e=>typeof e=="symbol",ce=e=>e!==null&&typeof e=="object",Tt=Object.prototype.toString,Be=e=>Tt.call(e),Et=e=>Be(e).slice(8,-1),we=e=>typeof e=="string"&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,be=(e,t)=>!Object.is(e,t);let j;class Ct{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=j,!t&&j&&(this.index=(j.scopes||(j.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=j;try{return j=this,t()}finally{j=n}}}on(){j=this}off(){j=this.parent}stop(t){if(this._active){let n,o;for(n=0,o=this.effects.length;n<o;n++)this.effects[n].stop();for(n=0,o=this.cleanups.length;n<o;n++)this.cleanups[n]();if(this.scopes)for(n=0,o=this.scopes.length;n<o;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Dt(e){return new Ct(e)}function Ge(e,t=j){t&&t.active&&t.effects.push(e)}const ke=e=>{const t=new Set(e);return t.w=0,t.n=0,t},qe=e=>(e.w&U)>0,Ye=e=>(e.n&U)>0,he=new WeakMap;let q=0,U=1;const pe=30;let L;const H=Symbol(""),fe=Symbol("");class Je{constructor(t,n=null,o){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ge(this,o)}run(){if(!this.active)return this.fn();let t=L,n=W;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=L,L=this,W=!0,U=1<<++q,q<=pe?(({deps:o})=>{if(o.length)for(let s=0;s<o.length;s++)o[s].w|=U})(this):Ee(this),this.fn()}finally{q<=pe&&(o=>{const{deps:s}=o;if(s.length){let c=0;for(let l=0;l<s.length;l++){const r=s[l];qe(r)&&!Ye(r)?r.delete(o):s[c++]=r,r.w&=~U,r.n&=~U}s.length=c}})(this),U=1<<--q,L=this.parent,W=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){L===this?this.deferStop=!0:this.active&&(Ee(this),this.onStop&&this.onStop(),this.active=!1)}}function Ee(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}function Y(e,t){e.effect&&(e=e.effect.fn);const n=new Je(e);t&&(_t(n,t),t.scope&&Ge(n,t.scope)),t&&t.lazy||n.run();const o=n.run.bind(n);return o.effect=n,o}let W=!0;const Ke=[];function Qe(){Ke.push(W),W=!1}function Xe(){const e=Ke.pop();W=e===void 0||e}function O(e,t,n){if(W&&L){let o=he.get(e);o||he.set(e,o=new Map);let s=o.get(n);s||o.set(n,s=ke()),Ze(s)}}function Ze(e,t){let n=!1;q<=pe?Ye(e)||(e.n|=U,n=!qe(e)):n=!e.has(L),n&&(e.add(L),L.deps.push(e))}function F(e,t,n,o,s,c){const l=he.get(e);if(!l)return;let r=[];if(t==="clear")r=[...l.values()];else if(n==="length"&&V(e)){const i=Number(o);l.forEach((a,h)=>{(h==="length"||h>=i)&&r.push(a)})}else switch(n!==void 0&&r.push(l.get(n)),t){case"add":V(e)?we(n)&&r.push(l.get("length")):(r.push(l.get(H)),se(e)&&r.push(l.get(fe)));break;case"delete":V(e)||(r.push(l.get(H)),se(e)&&r.push(l.get(fe)));break;case"set":se(e)&&r.push(l.get(H))}if(r.length===1)r[0]&&me(r[0]);else{const i=[];for(const a of r)a&&i.push(...a);me(ke(i))}}function me(e,t){const n=V(e)?e:[...e];for(const o of n)o.computed&&Ce(o);for(const o of n)o.computed||Ce(o)}function Ce(e,t){(e!==L||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Rt=kt("__proto__,__v_isRef,__isVue"),et=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ye)),Ot=tt(),Lt=tt(!0),De=Nt();function Nt(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const o=x(this);for(let c=0,l=this.length;c<l;c++)O(o,0,c+"");const s=o[t](...n);return s===-1||s===!1?o[t](...n.map(x)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Qe();const o=x(this)[t].apply(this,n);return Xe(),o}}),e}function Mt(e){const t=x(this);return O(t,0,e),t.hasOwnProperty(e)}function tt(e=!1,t=!1){return function(n,o,s){if(o==="__v_isReactive")return!e;if(o==="__v_isReadonly")return e;if(o==="__v_isShallow")return t;if(o==="__v_raw"&&s===(e?t?Bt:st:t?$t:ot).get(n))return n;const c=V(n);if(!e){if(c&&ae(De,o))return Reflect.get(De,o,s);if(o==="hasOwnProperty")return Mt}const l=Reflect.get(n,o,s);return(ye(o)?et.has(o):Rt(o))?l:(e||O(n,0,o),t?l:D(l)?c&&we(o)?l:l.value:ce(l)?e?Q(l):rt(l):l)}}function jt(e=!1){return function(t,n,o,s){let c=t[n];if(re(c)&&D(c)&&!D(o))return!1;if(!e&&(at(o)||re(o)||(c=x(c),o=x(o)),!V(t)&&D(c)&&!D(o)))return c.value=o,!0;const l=V(t)&&we(n)?Number(n)<t.length:ae(t,n),r=Reflect.set(t,n,o,s);return t===x(s)&&(l?be(o,c)&&F(t,"set",n,o):F(t,"add",n,o)),r}}const At={get:Ot,set:jt(),deleteProperty:function(e,t){const n=ae(e,t),o=Reflect.deleteProperty(e,t);return o&&n&&F(e,"delete",t,void 0),o},has:function(e,t){const n=Reflect.has(e,t);return ye(t)&&et.has(t)||O(e,0,t),n},ownKeys:function(e){return O(e,0,V(e)?"length":H),Reflect.ownKeys(e)}},zt={get:Lt,set:(e,t)=>!0,deleteProperty:(e,t)=>!0},xe=e=>e,le=e=>Reflect.getPrototypeOf(e);function Z(e,t,n=!1,o=!1){const s=x(e=e.__v_raw),c=x(t);n||(t!==c&&O(s,0,t),O(s,0,c));const{has:l}=le(s),r=o?xe:n?_e:J;return l.call(s,t)?r(e.get(t)):l.call(s,c)?r(e.get(c)):void(e!==s&&e.get(t))}function ee(e,t=!1){const n=this.__v_raw,o=x(n),s=x(e);return t||(e!==s&&O(o,0,e),O(o,0,s)),e===s?n.has(e):n.has(e)||n.has(s)}function te(e,t=!1){return e=e.__v_raw,!t&&O(x(e),0,H),Reflect.get(e,"size",e)}function Re(e){e=x(e);const t=x(this);return le(t).has.call(t,e)||(t.add(e),F(t,"add",e,e)),this}function Oe(e,t){t=x(t);const n=x(this),{has:o,get:s}=le(n);let c=o.call(n,e);c||(e=x(e),c=o.call(n,e));const l=s.call(n,e);return n.set(e,t),c?be(t,l)&&F(n,"set",e,t):F(n,"add",e,t),this}function Le(e){const t=x(this),{has:n,get:o}=le(t);let s=n.call(t,e);s||(e=x(e),s=n.call(t,e)),o&&o.call(t,e);const c=t.delete(e);return s&&F(t,"delete",e,void 0),c}function Ne(){const e=x(this),t=e.size!==0,n=e.clear();return t&&F(e,"clear",void 0,void 0),n}function ne(e,t){return function(n,o){const s=this,c=s.__v_raw,l=x(c),r=t?xe:e?_e:J;return!e&&O(l,0,H),c.forEach((i,a)=>n.call(o,r(i),r(a),s))}}function oe(e,t,n){return function(...o){const s=this.__v_raw,c=x(s),l=se(c),r=e==="entries"||e===Symbol.iterator&&l,i=e==="keys"&&l,a=s[e](...o),h=n?xe:t?_e:J;return!t&&O(c,0,i?fe:H),{next(){const{value:f,done:d}=a.next();return d?{value:f,done:d}:{value:r?[h(f[0]),h(f[1])]:h(f),done:d}},[Symbol.iterator](){return this}}}}function P(e){return function(...t){return e!=="delete"&&this}}function It(){const e={get(s){return Z(this,s)},get size(){return te(this)},has:ee,add:Re,set:Oe,delete:Le,clear:Ne,forEach:ne(!1,!1)},t={get(s){return Z(this,s,!1,!0)},get size(){return te(this)},has:ee,add:Re,set:Oe,delete:Le,clear:Ne,forEach:ne(!1,!0)},n={get(s){return Z(this,s,!0)},get size(){return te(this,!0)},has(s){return ee.call(this,s,!0)},add:P("add"),set:P("set"),delete:P("delete"),clear:P("clear"),forEach:ne(!0,!1)},o={get(s){return Z(this,s,!0,!0)},get size(){return te(this,!0)},has(s){return ee.call(this,s,!0)},add:P("add"),set:P("set"),delete:P("delete"),clear:P("clear"),forEach:ne(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=oe(s,!1,!1),n[s]=oe(s,!0,!1),t[s]=oe(s,!1,!0),o[s]=oe(s,!0,!0)}),[e,n,t,o]}const[Pt,Ut,Vt,Wt]=It();function nt(e,t){const n=t?e?Wt:Vt:e?Ut:Pt;return(o,s,c)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?o:Reflect.get(ae(n,s)&&s in o?n:o,s,c)}const Ft={get:nt(!1,!1)},Ht={get:nt(!0,!1)},ot=new WeakMap,$t=new WeakMap,st=new WeakMap,Bt=new WeakMap;function rt(e){return re(e)?e:it(e,!1,At,Ft,ot)}function Q(e){return it(e,!0,zt,Ht,st)}function it(e,t,n,o,s){if(!ce(e)||e.__v_raw&&(!t||!e.__v_isReactive))return e;const c=s.get(e);if(c)return c;const l=(r=e).__v_skip||!Object.isExtensible(r)?0:function(a){switch(a){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}(Et(r));var r;if(l===0)return e;const i=new Proxy(e,l===2?o:n);return s.set(e,i),i}function re(e){return!(!e||!e.__v_isReadonly)}function at(e){return!(!e||!e.__v_isShallow)}function x(e){const t=e&&e.__v_raw;return t?x(t):e}const J=e=>ce(e)?rt(e):e,_e=e=>ce(e)?Q(e):e;function ct(e){W&&L&&Ze((e=x(e)).dep||(e.dep=ke()))}function lt(e,t){const n=(e=x(e)).dep;n&&me(n)}function D(e){return!(!e||e.__v_isRef!==!0)}function N(e){return ut(e,!1)}function ve(e){return ut(e,!0)}function ut(e,t){return D(e)?e:new Gt(e,t)}class Gt{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:x(t),this._value=n?t:J(t)}get value(){return ct(this),this._value}set value(t){const n=this.__v_isShallow||at(t)||re(t);t=n?t:x(t),be(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:J(t),lt(this))}}function k(e){return D(e)?e.value:e}var dt;class qt{constructor(t,n,o,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[dt]=!1,this._dirty=!0,this.effect=new Je(t,()=>{this._dirty||(this._dirty=!0,lt(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=o}get value(){const t=x(this);return ct(t),!t._dirty&&t._cacheable||(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Yt(e,t,n=!1){let o,s;const c=typeof e=="function";return c?(o=e,s=xt):(o=e.get,s=e.set),new qt(o,s,c||!s,n)}dt="__v_isReadonly";function ie(){return ie=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},ie.apply(this,arguments)}var Me,je,Jt=(Me=function(e){var t=Object.prototype.hasOwnProperty,n="~";function o(){}function s(i,a,h){this.fn=i,this.context=a,this.once=h||!1}function c(i,a,h,f,d){if(typeof h!="function")throw new TypeError("The listener must be a function");var p=new s(h,f||i,d),u=n?n+a:a;return i._events[u]?i._events[u].fn?i._events[u]=[i._events[u],p]:i._events[u].push(p):(i._events[u]=p,i._eventsCount++),i}function l(i,a){--i._eventsCount==0?i._events=new o:delete i._events[a]}function r(){this._events=new o,this._eventsCount=0}Object.create&&(o.prototype=Object.create(null),new o().__proto__||(n=!1)),r.prototype.eventNames=function(){var i,a,h=[];if(this._eventsCount===0)return h;for(a in i=this._events)t.call(i,a)&&h.push(n?a.slice(1):a);return Object.getOwnPropertySymbols?h.concat(Object.getOwnPropertySymbols(i)):h},r.prototype.listeners=function(i){var a=this._events[n?n+i:i];if(!a)return[];if(a.fn)return[a.fn];for(var h=0,f=a.length,d=new Array(f);h<f;h++)d[h]=a[h].fn;return d},r.prototype.listenerCount=function(i){var a=this._events[n?n+i:i];return a?a.fn?1:a.length:0},r.prototype.emit=function(i,a,h,f,d,p){var u=n?n+i:i;if(!this._events[u])return!1;var m,w,g=this._events[u],b=arguments.length;if(g.fn){switch(g.once&&this.removeListener(i,g.fn,void 0,!0),b){case 1:return g.fn.call(g.context),!0;case 2:return g.fn.call(g.context,a),!0;case 3:return g.fn.call(g.context,a,h),!0;case 4:return g.fn.call(g.context,a,h,f),!0;case 5:return g.fn.call(g.context,a,h,f,d),!0;case 6:return g.fn.call(g.context,a,h,f,d,p),!0}for(w=1,m=new Array(b-1);w<b;w++)m[w-1]=arguments[w];g.fn.apply(g.context,m)}else{var S,T=g.length;for(w=0;w<T;w++)switch(g[w].once&&this.removeListener(i,g[w].fn,void 0,!0),b){case 1:g[w].fn.call(g[w].context);break;case 2:g[w].fn.call(g[w].context,a);break;case 3:g[w].fn.call(g[w].context,a,h);break;case 4:g[w].fn.call(g[w].context,a,h,f);break;default:if(!m)for(S=1,m=new Array(b-1);S<b;S++)m[S-1]=arguments[S];g[w].fn.apply(g[w].context,m)}}return!0},r.prototype.on=function(i,a,h){return c(this,i,a,h,!1)},r.prototype.once=function(i,a,h){return c(this,i,a,h,!0)},r.prototype.removeListener=function(i,a,h,f){var d=n?n+i:i;if(!this._events[d])return this;if(!a)return l(this,d),this;var p=this._events[d];if(p.fn)p.fn!==a||f&&!p.once||h&&p.context!==h||l(this,d);else{for(var u=0,m=[],w=p.length;u<w;u++)(p[u].fn!==a||f&&!p[u].once||h&&p[u].context!==h)&&m.push(p[u]);m.length?this._events[d]=m.length===1?m[0]:m:l(this,d)}return this},r.prototype.removeAllListeners=function(i){var a;return i?this._events[a=n?n+i:i]&&l(this,a):(this._events=new o,this._eventsCount=0),this},r.prototype.off=r.prototype.removeListener,r.prototype.addListener=r.prototype.on,r.prefixed=n,r.EventEmitter=r,e.exports=r},Me(je={exports:{}}),je.exports);class Kt{constructor(t){this.data=void 0,this.next=void 0,this.data=t,this.next=null}}class Qt{constructor(){this.head=void 0,this.tail=void 0,this.size=void 0,this.head=null,this.tail=null,this.size=0}enqueue(t){let n=new Kt(t);this.isEmpty()?(this.head=n,this.tail=n):(this.tail&&(this.tail.next=n),this.tail=n),this.size++}dequeue(){if(this.isEmpty())return null;{var t,n;let o=((t=this.head)==null?void 0:t.data)||null;return this.head=((n=this.head)==null?void 0:n.next)||null,this.isEmpty()&&(this.tail=null),this.size--,o}}remove(t){let n=this.head,o=null;for(;n;){if(n.data===t)return o?(o.next=n.next,n.next||(this.tail=o)):(this.head=n.next,this.head||(this.tail=null)),void this.size--;o=n,n=n.next}}isEmpty(){return this.size===0}}const Xt=new class{constructor(){this.frameDeadline=void 0,this.taskQueue=void 0,this.channel=void 0,this.messagePort=void 0,this.triggerPort=void 0,this.rafTriggered=void 0,this.activeFrameTime=33.33,this.frameDeadline=performance.now()+this.activeFrameTime,this.taskQueue=new Qt,this.channel=new MessageChannel,this.messagePort=this.channel.port1,this.triggerPort=this.channel.port2,this.rafTriggered=!1,this.messagePort.onmessage=()=>{this.handleTask()}}timeRemaining(){return Math.max(0,this.frameDeadline-performance.now())}execTask(e){return e({timeRemaining:()=>this.timeRemaining()})}handleTask(){if(this.timeRemaining()<=0)return void this.trigger();let e=this.taskQueue.dequeue();for(;e;)try{this.execTask(e)}finally{if(this.timeRemaining()<=0)break;e=this.taskQueue.dequeue()}this.trigger()}trigger(){this.rafTriggered||this.taskQueue.size!==0&&(this.rafTriggered=!0,requestAnimationFrame(e=>{this.frameDeadline=e+this.activeFrameTime,this.rafTriggered=!1,e<this.frameDeadline&&this.triggerPort.postMessage(null)}))}async runTask(e){return!this.rafTriggered&&performance.now()<this.frameDeadline?this.execTask(e):new Promise((t,n)=>{this.taskQueue.enqueue(()=>{try{t(this.execTask(e))}catch(o){n(o)}}),this.trigger()})}buildTask(e){let t,n,o=!1,s=!1;const c=new Promise((r,i)=>{n=r}),l=r=>{if(!o)return t=e(r),s=!0,n(t),t;n(void 0)};return this.taskQueue.enqueue(l),this.trigger(),{cancel:()=>{o=!0,n(void 0),this.taskQueue.size<=5e3&&this.taskQueue.remove(l)},promise:c,state:()=>({isCancelled:o,isDone:s,result:t})}}};class Zt{constructor(){this.tasks=new Map}runTask(t,n){const o=this.tasks.get(t);o&&o.cancel();const s=Xt.buildTask(n);return this.tasks.set(t,s),s.promise.finally(()=>{this.tasks.get(t)===s&&this.tasks.delete(t)}),s}dispose(){this.tasks.forEach(t=>t.cancel()),this.tasks.clear()}}const en=Object.prototype.hasOwnProperty;function Ae(e,t){if(Object.is(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;const n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(let s=0;s<n.length;s++)if(!en.call(t,n[s])||!Object.is(e[n[s]],t[n[s]]))return!1;return!0}const de=(e,t)=>{if(e.has_outside_effect||t.has_outside_effect)throw new Error("View has outside effect, cannot patch");if(e instanceof z&&t instanceof z)return(n=e).update((o=t).DOMProps,o.DOMChildren),n.DOMChildren=o.DOMChildren,void(n.DOMProps=o.DOMProps);var n,o;const s=I.view2component.get(e),c=I.view2component.get(t);if(s&&c)return s.props=c.props,s.state=c.state,s.children=c.children,void s.update();((l,r)=>{r.initialize(),l.updateChildren(r.children)})(e,t)},ze=e=>{var t,n,o;return{node:e,view:v.dom2view.get(e),key:(t=v.dom2view.get(e))==null?void 0:t.key,keyed:(o=(n=v.dom2view.get(e))==null?void 0:n.key,o!=null)}};class v{static getNextIndex(){return++v.index}static createAnchor(){const t=document.createTextNode("");return t[v.symbols.ANCHOR]=!0,t}static isAnchor(t){return t instanceof Text&&t[v.symbols.ANCHOR]}constructor(t=v.createAnchor()){this.__index=v.getNextIndex(),this.scheduler=new Zt,this.events=new Jt,this.anchor=void 0,this.children=[],this.context={},this.parentView=v.globalView,this.is_container=!1,this.has_outside_effect=!1,this.key=void 0,this.effectScope=Dt(!0),this.initialized=!1,this.zoneFlag="",this.anchor=t,v.dom2view.set(this.anchor,this),this.events.on("error",n=>{var o;this.events.listenerCount("error")===1&&((o=this.parentView)==null||o.events.emit("error",n))}),this.events.on("throw",n=>{var o;this.events.listenerCount("throw")===1&&((o=this.parentView)==null||o.events.emit("throw",n))})}initialize(){this.initialized||(this.events.emit("init_before"),this.events.emit("init"),this.events.emit("init_after"),this.initialized=!0)}mount(t,n){this.initialize(),this.events.emit("mount_before",t,this.parentView),t.insertBefore(this.anchor,n||null),this.mountChildren(t),this.events.emit("mounted",t,this.parentView),this.events.emit("mount_after",t,this.parentView)}mountChildren(t){if(!t.contains(this.anchor))throw new Error("Cannot mount children before anchor, anchor not contained in parentElement.");for(const n of this.children){t.insertBefore(n,this.anchor);const o=v.dom2view.get(n);if(o){if(o===this)throw new Error("Cannot mount children to self");o.parentView=this,o.mount(t,n)}}}updateChildren(t){const n=t.flat(64).map(c=>function(l){if(l==null)return null;if(l instanceof Node)return l;if(D(l)||typeof l=="function"){const r=new v;let i;if(r.has_outside_effect=!0,D(l)){const a=document.createTextNode("");i=Y(()=>{const h=String(k(l));h!==a.textContent&&(a.textContent=h)},{lazy:!1}),r.updateChildren([a])}else i=Y(()=>{const a=l();r.updateChildren(Array.isArray(a)?a:[a])},{lazy:!1});return r.events.on("unmounted",()=>{i.effect.stop()}),r.anchor}return document.createTextNode(String(l))}(c)).filter(Boolean);if(this.children.length===0&&n.length===0)return;const o=function(c,l){const r=[],i=c.map(ze),a=l.map(ze);if(i.length===0)return a.map((d,p)=>({type:"remove",node:d,index:p}));if(a.length===0)return i.map((d,p)=>({type:"insert",index:p,node:d}));for(let d=0;d<Math.max(i.length,a.length);d++){var h,f;const p=i[d],u=a[d];if((p==null?void 0:p.node)===(u==null?void 0:u.node)||p!=null&&p.view&&u!=null&&u.view&&(p==null?void 0:p.view)===(u==null?void 0:u.view)||p!=null&&p.keyed&&u!=null&&u.keyed)continue;if(!(!((p==null?void 0:p.node)instanceof Text&&(u==null?void 0:u.node)instanceof Text)||v.isAnchor(p.node)||v.isAnchor(u.node)||(h=p.view)!=null&&h.has_outside_effect||(f=u.view)!=null&&f.has_outside_effect)){p.node.textContent!==u.node.textContent&&r.push({type:"text",oldNode:u,newNode:p,index:d});continue}const m=()=>{p&&!p.keyed&&r.push({type:"insert",index:d,node:p}),u&&!u.keyed&&r.push({type:"remove",index:d,node:u})};if(p&&u)if(p||u)if(p.keyed||u.keyed)m();else if(p.view||u.view)if(p.view&&u.view)if(p.view.has_outside_effect||u.view.has_outside_effect)m();else{const w=u.view,g=p.view,b=w instanceof z,S=g instanceof z;if(b&&!S||!b&&S){m();continue}if(b&&S){w.elem.nodeName===g.elem.nodeName?r.push({type:"dom-update",oldNode:u,newNode:p,index:d}):m();continue}const T=I.view2component.get(w),E=I.view2component.get(g);if(!T&&E||T&&!E){m();continue}if(T!=null&&T._component_type&&E!=null&&E._component_type&&T._component_type!==E._component_type){m();continue}r.push({type:"view-patch",oldNode:u,newNode:p,index:d})}else m();else m();else m();else m()}for(let d=0;d<i.length;d++){const p=i[d];if(p==null||!p.keyed)continue;const u=a.findIndex(m=>m.key===p.key);r.push(u!==d?u!==-1?{type:"move",to:d,node:a[u],newNode:p}:{type:"insert",index:d,node:p}:p.view instanceof z?{type:"dom-update",oldNode:a[u],newNode:p,index:d}:{type:"view-patch",oldNode:a[u],newNode:p,index:d})}for(let d=0;d<a.length;d++){const p=a[d];p!=null&&p.keyed&&i.findIndex(u=>u.key===p.key)===-1&&r.push({type:"remove",index:d,node:p})}return r}(n,this.children);if(o.length===0)return;const s=()=>{const c=this.patchAll(o,n);this.children=c.filter(Boolean)};this.initialized?this.scheduler.runTask("patch-children",s):s()}patchAll(t,n){const o=n.slice();this.children.forEach((r,i)=>{o.length>i&&(o[i]=r)}),t.forEach(r=>{switch(r.type){case"move":o[r.to]=r.node.node;break;case"insert":o[r.index]=r.node.node;break;case"dom-update":case"text":case"view-patch":o[r.index]=r.oldNode.node}});const s={},c=r=>{if(!this.anchor.parentNode||this.children.length===0)return null;let i=r;for(;o.length>i;){if(i in s)return s[i];const a=o[i];if(a&&(a==null?void 0:a.parentNode)===this.anchor.parentNode)return s[i]=a,a;i++}return s[i]=null,null};for(const r of t)switch(r.type){case"move":{var l;const{to:i,node:a,newNode:h}=r;a.view instanceof v&&h.view instanceof v&&de(a.view,h.view);const f=c(i+1),d=(f==null?void 0:f.parentNode)===this.anchor.parentNode?f:this.anchor;this.anchor.parentNode&&(a.view?(a.view.parentView=this,a.view.mount(this.anchor.parentNode,d)):this.anchor.parentNode.insertBefore(a.node,d)),(l=h.view)==null||l.unmount();break}case"insert":{const{node:i,index:a}=r,h=c(a+1),f=(h==null?void 0:h.parentNode)===this.anchor.parentNode?h:this.anchor;this.anchor.parentNode&&(i.view?(i.view.parentView=this,i.view.mount(this.anchor.parentNode,f)):this.anchor.parentNode.insertBefore(i.node,f));break}case"remove":break;case"view-patch":{const{newNode:i,oldNode:a}=r,h=i.view,f=a.view;de(f,h),h!==f&&(h.children=[],h.unmount());break}case"dom-update":{const{newNode:i,oldNode:a}=r,h=i.view,f=a.view;de(f,h),h!==f&&(h.children=[],h.unmount());break}case"text":{const{newNode:i,oldNode:a}=r;a.node.textContent=i.node.textContent;break}}return t.forEach(r=>{if(r.type!=="remove")return;const{node:i}=r;var a;i.view?i.view.unmount():(a=i.node.parentElement)==null||a.removeChild(i.node)}),o}remove(){for(const n of this.children){var t;(t=n.parentElement)==null||t.removeChild(n);const o=v.dom2view.get(n);o&&o.remove()}}effect(t,n="unmounted"){return this.effectScope.run(()=>{const o=Y(t,{lazy:!1});return o.effect.deps.length===0?o.effect.stop():this.events.once(n,()=>o.effect.stop()),o})}unmount(){var t;this.events.emit("unmount_before"),this.scheduler.dispose(),(t=this.anchor.parentNode)==null||t.removeChild(this.anchor),this.unmountChildren(),this.events.emit("unmounted"),this.events.emit("unmount_after"),this.events.removeAllListeners(),this.effectScope.stop()}unmountChildren(){this.remove();for(const t of this.children){const n=v.dom2view.get(t);n&&n.unmount()}}zone(t,n="setup"){const o=this.zoneFlag;v.pushView(this),this.zoneFlag=n;try{return t()}finally{this.zoneFlag=o,v.popView()}}getContextValue(t,n){let o=this;for(;o;){const s=o.context;if(t in s){const c=s[t];if(!n||n(c))return c}o=o.parentView}return v.symbols.NONE}setContextValue(t,n){let o=this;for(;o;){if(o.is_container)return void(o.context[t]=n);o=o.parentView}throw new Error(`Cannot set context value: ${String(t)}`)}}v.symbols={NONE:Symbol("NONE"),DIRECTIVES:Symbol("DIRECTIVES"),ANCHOR:Symbol("ANCHOR")},v.isNone=e=>e===v.symbols.NONE,v.index=0,v.dom2view=new WeakMap,v.stack=[],v.topView=()=>v.stack[v.stack.length-1],v.pushView=e=>v.stack.push(e),v.popView=()=>v.stack.pop(),v.globalView=new v,v.stack.push(v.globalView),v.globalView.is_container=!0;const ge=e=>typeof e=="function"?e():D(e)?k(e):Array.isArray(e)?e.map(ge):typeof e=="object"?Object.fromEntries(Object.entries(e).map(([t,n])=>[t,ge(n)])):k(e);class z extends v{constructor(t,n,o){super(),this.DOMProps=void 0,this.DOMChildren=void 0,this.elem=void 0,this.props={},this.propsCleanups={},this.DOMProps=n,this.DOMChildren=o,this.elem=t instanceof Node?t:document.createElement(t),this.key=n.key,delete n.key,v.dom2view.set(this.elem,this)}initialize(){this.initialized||(this.events.emit("init_before"),this.events.emit("init"),this.update(this.DOMProps,this.DOMChildren),this.events.emit("init_after"),this.initialized=!0)}mount(t,n){this.initialize(),this.events.emit("mount_before",t,this.parentView),t.insertBefore(this.elem,n||null),this.elem.appendChild(this.anchor),this.mountChildren(),this.events.emit("mounted",t,this.parentView),this.events.emit("mount_after",t,this.parentView)}update(t,n){this.events.emit("update_before");try{this.updateChildren(n),Ae(t,this.props)||(this.updateProps(t),this.props=t),this.events.emit("updated")}finally{this.events.emit("update_after")}}updateProps(t){if(Ae(t,this.props))return;const n=this.diffProps(t,this.props);if(n.length===0)return;const o=()=>{for(const s of n){const{type:c,key:l,value:r}=s;switch(c){case"patch":this.patchProp(l,r),this.props[l]=r;break;case"remove":this.cleanupProp(l),delete this.props[l]}}};this.initialized?this.scheduler.runTask("patch-task",o):o()}addPropCleanup(t,n){const o=this.propsCleanups[t];this.propsCleanups[t]=()=>{o==null||o(),n()}}cleanupProp(t){var n,o;(n=(o=this.propsCleanups)[t])==null||n.call(o),delete this.propsCleanups[t]}patchProp(t,n){if(this.cleanupProp(t),this.matchDirectives(t,n),t.startsWith("$")||t.startsWith("_")||t==="key")return;const o=this.elem;if(t!=="ref"){if(o instanceof Element)if(t.startsWith("on")){const s=t.slice(2).toLowerCase();o.addEventListener(s,n);const c=()=>o.removeEventListener(s,n);this.events.once("unmounted",c),this.addPropCleanup(t,()=>{this.events.off("unmounted",c),o.removeEventListener(s,n)})}else{const s=this.effect(()=>{const c=this.elem;if(!(c instanceof Element))return;const l=ge(n);((r,i,a)=>{var h;if(typeof a!="boolean")switch(i){case"className":case"class":{let f="";f=Array.isArray(a)?a.join(" "):typeof a=="object"?Object.entries(a).filter(([d,p])=>!!p).map(([d])=>d).join(" "):String(a),r.setAttribute("class",f);break}case"style":if(!((h=r)instanceof Element&&typeof h.style=="object"))break;typeof a=="object"?Object.entries(a).forEach(([f,d])=>r.style[f]=d):r.style.cssText=String(a);break;case"value":r.value=a;break;default:r.setAttribute(i,String(a))}else a?r.setAttribute(i,""):r.removeAttribute(i)})(c,t,l)});this.addPropCleanup(t,()=>s==null?void 0:s.effect.stop())}}else D(n)?n.value=o:typeof n=="function"&&n(o)}diffProps(t,n){const o=[];return Object.entries(t).forEach(([s,c])=>{Object.is(n[s],c)||o.push({type:"patch",key:s,value:c})}),Object.entries(n).forEach(([s,c])=>{s in t||o.push({type:"remove",key:s,value:c})}),o}matchDirectives(t,n){const o=this.getContextValue(v.symbols.DIRECTIVES,i=>!(i==null||!i[t]));if(!o)return;const s=o[t];if(!s)return;const{mounted:c,unmounted:l,updated:r}=s;c&&this.events.once("mounted",()=>{this.effectScope.run(()=>{const i=this.zone(()=>c(this.elem,n,this));i&&this.addPropCleanup(t,i)})},"directive"),l&&this.events.once("unmounted",()=>{this.effectScope.run(()=>{const i=this.zone(()=>l(this.elem,n,this));i&&this.addPropCleanup(t,i)})},"directive"),r&&this.events.on("updated",()=>{this.effectScope.run(()=>{const i=this.zone(()=>r(this.elem,n,this));i&&this.addPropCleanup(t,i)})},"directive")}mountChildren(){const t=this.elem;for(const n of this.children){t.insertBefore(n,this.anchor);const o=v.dom2view.get(n);if(o){if(o===this)throw new Error("Cannot mount children to self");o.parentView=this,o.mount(t,n)}}}unmount(){var t;(t=this.elem.parentElement)==null||t.removeChild(this.elem),Object.values(this.propsCleanups).forEach(n=>n()),this.propsCleanups={},super.unmount()}}class I{constructor(){this._component_type=void 0,this.render=void 0,this.runner=void 0,this.view=new v,this.props={},this.state={},this.children=[],this.view.is_container=!0,this.view.events.once("unmounted",()=>this.dispose()),this.view.events.once("init_after",()=>{this.view.effectScope.run(()=>{this.runner=Y(this.update.bind(this),{lazy:!1})})}),I.view2component.set(this.view,this)}update(){this.view.events.emit("update_before");try{const t=this.view.effectScope.run(()=>this.view.zone(()=>this.render(this.props,this.state,this.children),"render"));this.view.updateChildren(Array.isArray(t)?t:[t]),this.view.events.emit("updated")}catch(t){setTimeout(()=>{this.view.events.emit("error",t)}),console.error(t)}finally{this.view.events.emit("update_after")}}dispose(){var t;(t=this.runner)==null||t.effect.stop()}}I.view2component=new WeakMap;const ht=(e,t,n)=>{let o;return o=typeof e=="function"?(s=>(c,l)=>{const r=new I;return r.props=c,r.children=l,r.view.key=c.key,r.view.events.once("init",()=>{r.render=r.view.zone(()=>s(c,r.state,r.children))}),r._component_type=s,r})(e):(s=>(c,l)=>{const r=new I;return r.props=c,r.children=l,r.view.key=c.key,r.view.events.once("init",()=>{r.state=r.view.zone(()=>s.setup(c,l))}),r._component_type=s,r.render=s.render.bind(r),r})(e),o(t,n)},y=(e,t={},...n)=>{if(t||(t={}),n||(n=[]),n=n.flat(64),e instanceof Node){const o=v.dom2view.get(e);return o?o instanceof z&&o.update(t,n):new z(e,t,n),e}return typeof e=="string"||e instanceof String?new z(e,t,n).elem:ht(e,t,n).view.anchor};function tn(e,t,n){const o=e instanceof Element?e:document.querySelector(e);if(!o)throw new Error("Could not find selector");if(!(t instanceof Node)){const s=ht(t,n||{},[]);return s.view.mount(o),s}{const s=v.dom2view.get(t);s?s.mount(o):o.appendChild(t)}}function K(e,...t){Qe();try{return e.apply(void 0,t)}finally{Xe()}}const C=e=>typeof e=="function"?K(e):K(k,e),nn=(e,t,n=!1)=>{const o=v.topView();return o.events[n?"once":"on"](e,t),()=>o.events.off(e,t)},ue=(e,t=!1)=>n=>nn(e,n,t),pt=ue("mounted"),Ie=ue("mount_before"),R=ue("unmounted"),on=ue("update_after"),sn=e=>{const t=v.topView();if(t.zoneFlag==="render"){const n=()=>{t.events.off("update_before",o),t.events.off("unmounted",o)},o=()=>{n(),e()};return t.events.once("update_before",o),t.events.once("unmounted",o),n}return t.events.once("unmounted",e),()=>t.events.off("unmounted",e)},X=(e,t)=>{let n;const o=Y(()=>{n&&K(n),n=void 0,e(l=>n=l)},ie({lazy:!1},t));let s;const c=()=>{s==null||s(),n==null||n(),n=void 0,o.effect.stop()};return s=sn(c),{runner:o,cleanup:c}};function rn(e){const t=ve(e);return[Q(t),n=>{t.value=typeof n=="function"?n(C(t)):n}]}function A(e,t,n){let o;return X(()=>{const s=D(e)?e.value:e();K(t,s,o),o=s},n)}function Se(e){let t;const n=N();return X(()=>{t&&K(t),t=void 0;const o=e(s=>t=s);Object.is(o,C(n))||(n.value=o)}),Q(n)}function an(e,t){const n=N(t);return[Q(n),o=>{n.value=e(C(n),o)}]}function ft(){const e=v.topView();e.zoneFlag!=="setup"&&console.warn('Warning: Marking a component with outside effect outside "setup" zone may cause unexpected behavior.'),e.has_outside_effect=!0}const cn=(e,t)=>{v.topView().setContextValue(e,t)};function ln(e,t=v.symbols.NONE){const n=v.topView().getContextValue(e);return n===v.symbols.NONE&&t!==v.symbols.NONE?t:n}const un=(...e)=>e.map(t=>k(t)),mt=un,dn=e=>{const t=(n=v.topView(),new Proxy({},{get(o,s,c){const l=n.getContextValue(s);if(!v.isNone(l))return l},set:(o,s,c,l)=>(n.setContextValue(s,c),!0)}));var n;return e==null||e(t),t};function hn(e,t,n=""){const o=t===":root",s=o?"":t,c=e.split(",").map(i=>i.trim()).filter(Boolean);let l=o?[""]:s.split(",").map(i=>i.trim()).filter(Boolean);var r;return(r=l,c.flatMap(i=>r.map(a=>[i,a]))).map(([i,a])=>i.startsWith("&")?i.replace(/&/g,a):`${a} ${i}`).map(i=>`${i.replace(n||"","")}${n||""}`.trim()).join(",")}const Pe=e=>e&&(e.nodeType===Node.DOCUMENT_NODE||e.nodeType===Node.DOCUMENT_FRAGMENT_NODE),Ue=(e,t,n)=>{const{updateCSSText:o,installSheet:s,uninstallSheet:c}=n;let l=!1;return{parseStyle:r=>{const i=function(a,h,{beautify:f=!1,scopedSelector:d=""}){const p=f?`
`:"",u=[{nodeSelector:h+d,cssObject:a}],m=[];for(;u.length>0;){const{nodeSelector:g,cssObject:b}=u.pop(),S={selector:g,cssText:""};for(const T in b){const E=b[T];if(typeof E=="object"){const _=hn(T,g,d);u.push({nodeSelector:_,cssObject:E})}else{if(typeof E=="string"&&!E.trim()||E==null)continue;S.cssText+=`${w=T,w.replace(/[A-Z]/g,_=>`-${_.toLowerCase()}`)}: ${b[T]};${p}`}}S.cssText.trim()&&m.push(S)}var w;return m.map(g=>`${g.selector}{${g.cssText}}`).join(`
`).trim()}(e(),r,{scopedSelector:t});o(i)},applySheet:r=>{l||(l=!0,s(r))},removeSheet:r=>{l&&(l=!1,c(r))}}},pn={STYLESHEET_SCOPED:Symbol("STYLESHEET_SCOPED"),STYLESHEET_ROOT:Symbol("STYLESHEET_ROOT")},Ve=()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(36),vt=e=>{const{className:t}=e;(({props:o,scopedId:s,rootNodeSelector:c,styleOrFunc:l})=>{const r=(p=>{if(!p)throw new Error("styleOrFn is required.");return typeof p=="function"?p:()=>p})(o.styleFn||o.style||l),i=dn(),{applySheet:a,removeSheet:h,parseStyle:f}=((p,u,m)=>m?((w,g)=>{const b=new CSSStyleSheet,{parseStyle:S,applySheet:T,removeSheet:E}=Ue(w,g,{updateCSSText(_){b.replaceSync(_)},installSheet(_=document){Pe(_)&&(_.adoptedStyleSheets=[..._.adoptedStyleSheets,b])},uninstallSheet(_=document){Pe(_)&&(_.adoptedStyleSheets=[..._.adoptedStyleSheets].filter($=>$!==b))}});return{sheet:b,parseStyle:S,applySheet:T,removeSheet:E}})(p,u):((w,g)=>{const b=document.createElement("style"),{parseStyle:S,applySheet:T,removeSheet:E}=Ue(w,g,{updateCSSText(_){b.innerHTML=_},installSheet(_){_.insertBefore(b,_.firstChild)},uninstallSheet(_){var $;($=b.parentNode)==null||$.removeChild(b)}});return{styleDOM:b,parseStyle:S,applySheet:T,removeSheet:E}})(p,u))(()=>r(i),s?`[data-s-${s}]`:void 0,o.adopted),{[pn.STYLESHEET_ROOT]:d}=i;if(X(()=>{let p=c;var u;o.adopted&&d&&d instanceof Node&&((u=d).nodeType===Node.DOCUMENT_NODE||u.nodeType===Node.DOCUMENT_FRAGMENT_NODE)&&(p=":root"),f(p)}),o.adopted)a(d),R(()=>h(d));else if((d==null?void 0:d.nodeType)===Node.DOCUMENT_FRAGMENT_NODE)a(d),R(()=>h(d));else{let p;Ie(u=>{a(u),p=u}),R(()=>h(p))}})(e),(o=>{const{scopedId:s}=o;if(!s)return;const c=`s-${s}`.replace(/-([a-z])/g,function(d,p){return p.toUpperCase()});let l=null,r=null,i=new Set;const a=d=>{d&&"dataset"in d&&typeof d.dataset=="object"&&(d.dataset[c]="")},h=d=>{d&&"dataset"in d&&typeof d.dataset=="object"&&delete d.dataset[c]},f=()=>{const d=new Set,p=u=>{if(u&&(u===l||!u.is_container)){u instanceof z&&d.add(u.elem);for(const m of u.children){const w=v.dom2view.get(m);w?p(w):m instanceof Element&&d.add(m)}}};p(l);for(const u of d)a(u);for(const u of i)d.has(u)||h(u);i=d};pt((d,p)=>{r=d,l=p,f(),a(d)}),on(()=>{f()}),R(()=>{h(r);for(const d of i)h(d)})})(e);let n=null;Ie(o=>{n=o,t&&o instanceof Element&&o.classList.add(t)}),R(()=>{t&&n instanceof Element&&n.classList.remove(t)})},G=(e,t,[n])=>{ft();const o=e.scoped?Ve():void 0,s=`s-${Ve()}`;return vt({props:e,styleOrFunc:n,rootNodeSelector:`.${s}`,className:s,scopedId:o}),()=>null},fn=(e,t,[n])=>(ft(),vt({props:ie({},e,{scoped:!1}),styleOrFunc:n,rootNodeSelector:":root"}),()=>null),mn=(e,t)=>{const n=N("");return X(()=>{const o=C(n);o&&URL.revokeObjectURL(o),n.value=URL.createObjectURL(new Blob([k(e)],{type:"text/plain",...t}))}),R(()=>URL.revokeObjectURL(n.value)),n},vn="modulepreload",gn=function(e,t){return new URL(e,t).href},We={},yn=function(t,n,o){if(!n||n.length===0)return t();const s=document.getElementsByTagName("link");return Promise.all(n.map(c=>{if(c=gn(c,o),c in We)return;We[c]=!0;const l=c.endsWith(".css"),r=l?'[rel="stylesheet"]':"";if(!!o)for(let h=s.length-1;h>=0;h--){const f=s[h];if(f.href===c&&(!l||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${r}`))return;const a=document.createElement("link");if(a.rel=l?"stylesheet":vn,l||(a.as="script",a.crossOrigin=""),a.href=c,document.head.appendChild(a),l)return new Promise((h,f)=>{a.addEventListener("load",h),a.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${c}`)))})})).then(()=>t())},wn=()=>yn(()=>import("https://unpkg.com/@monaco-editor/loader@1.3.3/lib/umd/monaco-loader.js"),[],import.meta.url).then(()=>window.monaco_loader).then(e=>e.init()),bn=({value:e,onChange:t,isDark:n,onSave:o,...s})=>{let c,l,r;return X(()=>{const i=k(n);r!=null&&r.editor&&(i?r.editor.setTheme("vs-dark"):r.editor.setTheme("vs"))}),R(()=>{c==null||c.dispose()}),D(e)&&A(e,i=>{(l==null?void 0:l.getValue())!==i&&(l==null||l.setValue(i))}),()=>y("div",{...s,ref:async i=>{r=await wn(),l=r.editor.createModel(C(e),"typescript",r.Uri.file("main.ts")),l.onDidChangeContent(()=>t(l.getValue())),r.languages.typescript.typescriptDefaults.setCompilerOptions({jsx:"react"}),r.languages.typescript.typescriptDefaults.setDiagnosticsOptions({noSemanticValidation:!0,noSyntaxValidation:!0}),c=r.editor.create(i,{automaticLayout:!0,wordWrap:!0,theme:C(n)?"vs-dark":"vs"}),c.setModel(l),o&&c.addCommand(r.KeyMod.CtrlCmd|r.KeyCode.KeyS,()=>{o(l.getValue())})}})};class kn{constructor(){B(this,"idx",0);B(this,"demos",[]);B(this,"currentDemo",null)}registerDemo(t,n,o){const s={id:this.idx++,name:t,version:n,code:o};this.demos.push(s),this.currentDemo||(this.currentDemo=s)}selectDemo(t){const n=this.demos.find(o=>o.id===Number(t));if(!n)throw new Error(`Cannot find demo with name ${name}`);return this.currentDemo=n,n}}const xn=`import {
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
`,_n=`import {
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
`,Sn=`import { mount, createState, html, css } from "@rhjs/rh";

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
`,Tn=`import { rh, ref, mount, unref, setupWatch, inject, provide } from "@rhjs/rh";

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
`,En=`import { rh, ref, mount, unref, computed, onUnmounted } from "@rhjs/rh";

const createInterval = (cb, ms) => {
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
`,Dn=`import { Button, ensureFluentUILoaded } from "@rhjs/fluent-web-components";
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
`,M=new kn;M.registerDemo("HelloWorld","0.1.2",En);M.registerDemo("Counter","0.1.2",Tn);M.registerDemo("TodoApp","0.1.2",Cn);M.registerDemo("Bitcoin","0.2.1-dev.6",xn);M.registerDemo("Markdown Editor","0.2.1-dev.6",_n);M.registerDemo("HTML tag","0.2.1-dev.6",Sn);M.registerDemo("Counter","0.0.34",Dn);const Fe=N(M.currentDemo),gt=()=>({mgr:M,currentDemo:Fe,selectDemo(e){Fe.value=M.selectDemo(e)},demos:M.demos}),Rn=()=>{const{selectDemo:e,demos:t}=gt();return()=>y("div",null,y("select",{onChange:n=>e(n.target.value)},t.map(n=>y("option",{value:n.id},n.name," @",n.version))))},Te=({styleFn:e,isDark:t,...n},o,s)=>()=>y("div",{...n},y(G,{styleFn:()=>({height:"30px",display:"inline-flex",alignItems:"center",justifyContent:"center",paddingLeft:"12px",paddingRight:"12px",cursor:"pointer",userSelect:"none",marginLeft:"4px","&:hover":{backgroundColor:k(t)?"rgba(64,64,64,1)":"rgba(64,64,64,0.1)"},"&:active":{outline:"solid 1px",outlineColor:k(t)?"#fff":"rgba(64,64,64,1)"},...e==null?void 0:e()})}),s),On=({isDark:e})=>()=>y(Te,{onClick:()=>{D(e)&&(e.value=!C(e))},isDark:e},y("span",null,()=>k(e)?"🌘":"🌖"));function He({isDark:e,href:t,target:n="_blank"},o,s){return()=>y(Te,{isDark:e,onClick:()=>{window.open(t,n)}},y("a",{href:t,target:n,style:"text-decoration: none; color: inherit;"},s))}const Ln=({isDark:e})=>()=>y("div",null,y(G,{styleFn:()=>({paddingLeft:"12px",paddingRight:"12px",height:"100%",width:"calc(100% - 24px)",display:"grid",gridTemplateColumns:"minmax(0, 1fr) 12px minmax(0, 1fr)"})}),y("div",{style:"display: inline-flex; align-items: center;"},y("span",{style:"user-select: none;word-break: keep-all;white-space: nowrap;"},"🧩 ",y("b",null,"R"),y("small",null,"eactive"),y("b",null,"H"),y("small",null,"ydrate"),y("b",null,"JS")," PLAYGROUND"),y(On,{isDark:e}),y(Rn,null)),y("div",null),y("div",{style:"display: inline-flex; align-items: center; justify-content: right;"},y(He,{isDark:e,href:"https://zhzluke96.github.io/rhjs-demos/#demo",target:"_self"},"demos"),y(He,{isDark:e,href:"https://github.com/zhzLuke96/rh.js"},"github"))),Nn=()=>document.querySelectorAll("iframe").forEach(e=>e.style.pointerEvents="none"),Mn=()=>document.querySelectorAll("iframe").forEach(e=>e.style.pointerEvents="auto"),jn=({isHorizontal:e,onResize:t,ref:n})=>{const[o,s]=rn(!1),c=()=>s(!0),l=()=>s(!1),r=d=>{t(d.clientX,d.clientY)},i=d=>{const p=d.touches[0];t(p.clientX,p.clientY)},a=N(null);A(o,d=>{d?(Nn(),window.addEventListener("mousemove",r),window.addEventListener("mouseup",l),window.addEventListener("touchmove",i),window.addEventListener("touchend",l)):(Mn(),window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",l),window.removeEventListener("touchmove",i),window.removeEventListener("touchend",l))}),A(a,d=>{d&&(d.addEventListener("mousedown",c,{passive:!0}),d.addEventListener("touchstart",c,{passive:!0}))}),R(()=>{var d,p;(d=k(a))==null||d.removeEventListener("mousedown",c),(p=k(a))==null||p.removeEventListener("touchstart",c)});const h=ln("isDark"),f=Yt(()=>k(h)?"rgba(255,255,255,0.3)":"rgba(0,0,0,0.3)");return()=>y("div",{ref:d=>{a.value=d,n&&(n.value=d)}},y(G,{styleFn:()=>({backgroundColor:k(o)?k(f):"",width:e?"100%":"12px",height:e?"12px":"100%",zIndex:k(o)?"10":"auto",cursor:e?"row-resize":"col-resize",userSelect:"none",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"12px","&:hover":{backgroundColor:k(f)}})}),"⚪⚪⚪")},An=()=>{const e=`
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
`.trim(),t=URL.createObjectURL(new Blob([e],{type:"text/html"}));return R(()=>URL.revokeObjectURL(t)),`${t}#?embedded=${encodeURIComponent(location.origin)}`},zn=(e,t,n="")=>`
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
`.trim(),In=(e,t,n,o)=>{const s={sendToIframe(r){var i,a;(a=(i=C(e))==null?void 0:i.contentWindow)==null||a.postMessage(r,"*")},sendToDevtools(r){var i,a;(a=(i=C(t))==null?void 0:i.contentWindow)==null||a.postMessage(r,"*")}},c=()=>{const{codeInjected:r,codeURL:i}=k(n);if(!r){if(!i){setTimeout(c,3);return}requestAnimationFrame(()=>{s.sendToIframe({event:"CODE_UPDATE",value:i}),o({type:"CODE_INJECTED"})})}},l=r=>{var h,f;const[i,a]=mt(e,t);!i||!a||((f=(h=r.data)==null?void 0:h.includes)!=null&&f.call(h,"Debugger.enable")&&(console.log("Debugger.enable"),o({type:"Debugger.enable"}),c()),r.source===i.contentWindow?a.contentWindow.postMessage(r.data,"*"):r.source===a.contentWindow&&i.contentWindow.postMessage({event:"DEV",data:r.data},"*"))};return window.addEventListener("message",l),R(()=>window.removeEventListener("message",l)),s},Pn=(e,t)=>{const{importMap:n,isDark:o}=e,s=Se(()=>{const c=zn(C(o),JSON.stringify({imports:k(n)}));return URL.createObjectURL(new Blob([c],{type:"text/html"}))});return A(s,(c,l)=>{l!==c&&l&&URL.revokeObjectURL(l),t({type:"HTML_CHANGED",iframeSrc:c||""})}),R(()=>{URL.revokeObjectURL(C(s)||"")}),{iframeSrc:s}},Un=e=>{const{isDark:t,code:n}=e,o=ve(null),s=ve(null),c=u=>{var m;return(m=u.contentDocument)==null?void 0:m.documentElement.classList.toggle("dark",C(t))},l=u=>{const m=C(o);m&&(m.src=u)},r=()=>{var u,m;(m=(u=C(o))==null?void 0:u.contentWindow)==null||m.location.reload()},i=()=>{var u,m;(m=(u=C(s))==null?void 0:u.contentWindow)==null||m.location.reload()};A(()=>k(t),u=>{const m=k(o);m&&c(m)});const[a,h]=an((u,m)=>{switch(m.type){case"IFRAME_READY":c(m.iframe);let w=u.codeInjected;return{...u,codeInjected:w,iframeReady:!0};case"DEVTOOLS_IFRAME_READY":return{...u,devtoolsIframeReady:!0};case"DEV_LOADED":return{...u,devLoaded:!0};case"HTML_CHANGED":return l(m.iframeSrc),i(),{...u,iframeReady:!1,devtoolsIframeReady:!1,devLoaded:!1,codeInjected:!1,darkInjected:!1};case"HTML_RELOAD":return setTimeout(()=>{r(),i()}),{...u,iframeReady:!1,devtoolsIframeReady:!1,devLoaded:!1,codeInjected:!1,darkInjected:!1};case"CODE_UPDATE":return{...u,codeURL:m.codeURL};case"CODE_INJECTED":return{...u,codeInjected:!0}}return u},{iframeReady:!1,devtoolsIframeReady:!1,devLoaded:!1,codeInjected:!1,codeURL:C(n)}),{sendToDevtools:f,sendToIframe:d}=In(o,s,a,h);A(()=>k(n),u=>{h({type:"CODE_UPDATE",codeURL:u}),a.value.iframeReady&&requestAnimationFrame(()=>{d({event:"CODE_UPDATE",value:u}),h({type:"CODE_INJECTED"})})});const{iframeSrc:p}=Pn(e,h);return A(o,u=>{u==null||u.addEventListener("load",()=>h({type:"IFRAME_READY",iframe:u}))}),A(s,u=>{u==null||u.addEventListener("load",()=>h({type:"DEVTOOLS_IFRAME_READY",devIframe:u}))}),{iframeSrc:p,iframeRef:o,devtoolsIframeRef:s,previewState:a,dispatch:h,sendToDevtools:f,sendToIframe:d}},Vn=e=>{const{importMap:t,code:n,devtools:o,isDark:s,...c}=e,l=N(null),{iframeSrc:r,iframeRef:i,devtoolsIframeRef:a,previewState:h,dispatch:f}=Un(e),d=An(),p=Se(()=>`width: 100%; height: 100%; ${k(o)?"display: block;":"display: none;"}`),u=N(.625),m=N(null),w=(g,b)=>{const[S,T]=mt(l,m);if(!S||!T)return;let E,_;const $=S.getBoundingClientRect();E=b-$.top-T.offsetHeight/2,_=S.offsetHeight-T.offsetHeight;const yt=E/_;u.value=yt};return()=>y("div",{...c,ref:l},y(G,{styleFn:()=>{const g=k(u);return{display:"grid",height:"100%",width:"100%",gridTemplateRows:k(o)?`30px minmax(0, ${g}fr) 12px minmax(0, ${1-g}fr)`:"30px minmax(0, 1fr)"}}}),y("div",{style:"border-bottom: 1px solid;border-top: 1px solid;overflow: hidden;"},y(Te,{title:"reload page",isDark:s,onClick:()=>f({type:"HTML_RELOAD"})},"♻️relaod")),y("iframe",{ref:i,src:r,style:"width: 100%;height: 100%;",frameBorder:0,sandbox:"allow-popups-to-escape-sandbox allow-scripts allow-popups allow-forms allow-pointer-lock allow-top-navigation allow-modals allow-same-origin"}),y("div",null,y(jn,{ref:m,isHorizontal:!0,onResize:w})),y("iframe",{ref:a,style:p,src:d,frameBorder:"0"}))},Wn=({isDark:e})=>()=>y(fn,{styleFn:()=>({fontFamily:"'Karla', system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",lineHeight:"1.5",fontWeight:"400",colorScheme:k(e)?"light dark":"dark",color:k(e)?"rgba(255, 255, 255, 0.87)":"#242424",backgroundColor:k(e)?"#333":"#fff",fontSynthesis:"none",textRendering:"optimizeLegibility","-webkitFontSmoothing":"antialiased","-moz-osxFontSmoothing":"grayscale","-webkitTextSizeAdjust":"100%",height:"100vh",width:"100vw",body:{margin:"0",minWidth:"100vw",minHeight:"100vh",width:"100%",height:"100%"},"#app":{width:"100%",height:"100%"}})});function Fn(){return new Worker(""+new URL("complier.worker-026b4f92.js",import.meta.url).href)}class Hn{constructor(){B(this,"registry",{})}registerWorker(t,n){this.registry[t]?console.warn(`Worker of type ${t} already registered.`):this.registry[t]=n}removeWorker(t){delete this.registry[t]}getWorker(t){const n=this.registry[t];if(n)return n;throw new Error(`No worker of type ${t} registered.`)}postMessage(t,n){this.getWorker(t).postMessage(n)}listenRecv(t,n){const o=this.getWorker(t);let s;const c=l=>{const{message_token:r}=l.data||{};if(r!==n)return;const i={...l.data};delete i.message_token,s(i),o.removeEventListener("message",c)};return o.addEventListener("message",c),{recv:new Promise((l,r)=>{s=l}),dispose:()=>o.removeEventListener("message",c)}}}class $n{constructor(){B(this,"registry",new Hn);this.initialize()}async initialize(){this.registry.registerWorker("complier",new Fn)}worker_caller(t,n){const o=Math.random().toString(36).slice(2),s={...n,message_token:o};return this.registry.postMessage(t,s),this.registry.listenRecv(t,o)}compileFile(t){return this.worker_caller("complier",{event:"BABEL",payload:{file:t,compile_options:{}}})}compileFiles(t){return this.worker_caller("complier",{event:"ROLLUP",payload:{files:t,compile_options:{}}})}}const $e=new $n,Bn=()=>{let e=null;return R(()=>e==null?void 0:e.dispose()),{compileFile(t){return e==null||e.dispose(),e=$e.compileFile(t),e.recv},compileFiles(t){return e==null||e.dispose(),e=$e.compileFiles(t),e.recv}}},Gn='import("@rhjs/rh").then(({cs, ElementSource, View}) => window.dispose = () => View ? View.globalView.unmount() : (cs || ElementSource).global_source.emit("unmount"));',qn=()=>{var i;const e=N(!0);cn("isDark",e);const{currentDemo:t}=gt(),n=Se(()=>{var a;return{"@rhjs/rh":`https://unpkg.com/@rhjs/rh@${((a=t.value)==null?void 0:a.version)||"latest"}/dist/main.module.mjs`,"@rhjs/fluent-web-components":"https://unpkg.com/@rhjs/fluent-web-components@latest/dist/main.module.mjs"}}),o=N(""),s=mn(o,{type:"text/javascript"}),c=N(((i=t.value)==null?void 0:i.code)||""),l=Bn(),r=async()=>{const a=C(c);if(!a)return;const h=await l.compileFile({filename:"main.tsx",source:a});o.value=`${h.compiled}
${Gn}`};return pt(r),A(t,a=>{a&&c.value!==a.code&&(c.value=a.code,r())}),()=>y("div",null,y(Wn,{isDark:e}),y(G,{styleFn:()=>({position:"relative",display:"flex",flexFlow:"column",width:"100%",height:"100%",maxWidth:"100vw",maxHeight:"100vh",overflow:"hidden"})}),y("header",{style:"height: 30px; width: 100%;"},y(Ln,{isDark:e})),y("div",{style:"flex: 1;"},y(G,{styleFn:()=>({position:"relative",display:"flex",flexFlow:"row",width:"100%",height:"100%"})}),y(bn,{style:"flex: 1;",value:c,onChange:a=>c.value=a,onSave:r,isDark:e}),y(Vn,{style:"flex: 1;",importMap:n,code:s,devtools:!0,isDark:e})))};tn("#app",qn);
