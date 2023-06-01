var xt=Object.defineProperty;var _t=(e,t,n)=>t in e?xt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var B=(e,t,n)=>(_t(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();function St(e,t){const n=Object.create(null),o=e.split(",");for(let s=0;s<o.length;s++)n[o[s]]=!0;return t?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Tt=()=>{},Et=Object.assign,Ct=Object.prototype.hasOwnProperty,ce=(e,t)=>Ct.call(e,t),V=Array.isArray,re=e=>Ge(e)==="[object Map]",we=e=>typeof e=="symbol",le=e=>e!==null&&typeof e=="object",Dt=Object.prototype.toString,Ge=e=>Dt.call(e),Ot=e=>Ge(e).slice(8,-1),be=e=>typeof e=="string"&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ke=(e,t)=>!Object.is(e,t);let j;class Rt{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=j,!t&&j&&(this.index=(j.scopes||(j.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=j;try{return j=this,t()}finally{j=n}}}on(){j=this}off(){j=this.parent}stop(t){if(this._active){let n,o;for(n=0,o=this.effects.length;n<o;n++)this.effects[n].stop();for(n=0,o=this.cleanups.length;n<o;n++)this.cleanups[n]();if(this.scopes)for(n=0,o=this.scopes.length;n<o;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Lt(e){return new Rt(e)}function Ye(e,t=j){t&&t.active&&t.effects.push(e)}const xe=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Ke=e=>(e.w&U)>0,Qe=e=>(e.n&U)>0,pe=new WeakMap;let Y=0,U=1;const fe=30;let L;const F=Symbol(""),me=Symbol("");class Je{constructor(t,n=null,o){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ye(this,o)}run(){if(!this.active)return this.fn();let t=L,n=$;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=L,L=this,$=!0,U=1<<++Y,Y<=fe?(({deps:o})=>{if(o.length)for(let s=0;s<o.length;s++)o[s].w|=U})(this):De(this),this.fn()}finally{Y<=fe&&(o=>{const{deps:s}=o;if(s.length){let a=0;for(let l=0;l<s.length;l++){const r=s[l];Ke(r)&&!Qe(r)?r.delete(o):s[a++]=r,r.w&=~U,r.n&=~U}s.length=a}})(this),U=1<<--Y,L=this.parent,$=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){L===this?this.deferStop=!0:this.active&&(De(this),this.onStop&&this.onStop(),this.active=!1)}}function De(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}function K(e,t){e.effect&&(e=e.effect.fn);const n=new Je(e);t&&(Et(n,t),t.scope&&Ye(n,t.scope)),t&&t.lazy||n.run();const o=n.run.bind(n);return o.effect=n,o}let $=!0;const Xe=[];function Ze(){Xe.push($),$=!1}function et(){const e=Xe.pop();$=e===void 0||e}function R(e,t,n){if($&&L){let o=pe.get(e);o||pe.set(e,o=new Map);let s=o.get(n);s||o.set(n,s=xe()),tt(s)}}function tt(e,t){let n=!1;Y<=fe?Qe(e)||(e.n|=U,n=!Ke(e)):n=!e.has(L),n&&(e.add(L),L.deps.push(e))}function W(e,t,n,o,s,a){const l=pe.get(e);if(!l)return;let r=[];if(t==="clear")r=[...l.values()];else if(n==="length"&&V(e)){const c=Number(o);l.forEach((i,h)=>{(h==="length"||h>=c)&&r.push(i)})}else switch(n!==void 0&&r.push(l.get(n)),t){case"add":V(e)?be(n)&&r.push(l.get("length")):(r.push(l.get(F)),re(e)&&r.push(l.get(me)));break;case"delete":V(e)||(r.push(l.get(F)),re(e)&&r.push(l.get(me)));break;case"set":re(e)&&r.push(l.get(F))}if(r.length===1)r[0]&&ve(r[0]);else{const c=[];for(const i of r)i&&c.push(...i);ve(xe(c))}}function ve(e,t){const n=V(e)?e:[...e];for(const o of n)o.computed&&Oe(o);for(const o of n)o.computed||Oe(o)}function Oe(e,t){(e!==L||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Nt=St("__proto__,__v_isRef,__isVue"),nt=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(we)),Mt=ot(),jt=ot(!0),Re=At();function At(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const o=x(this);for(let a=0,l=this.length;a<l;a++)R(o,0,a+"");const s=o[t](...n);return s===-1||s===!1?o[t](...n.map(x)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Ze();const o=x(this)[t].apply(this,n);return et(),o}}),e}function zt(e){const t=x(this);return R(t,0,e),t.hasOwnProperty(e)}function ot(e=!1,t=!1){return function(n,o,s){if(o==="__v_isReactive")return!e;if(o==="__v_isReadonly")return e;if(o==="__v_isShallow")return t;if(o==="__v_raw"&&s===(e?t?Yt:it:t?Gt:rt).get(n))return n;const a=V(n);if(!e){if(a&&ce(Re,o))return Reflect.get(Re,o,s);if(o==="hasOwnProperty")return zt}const l=Reflect.get(n,o,s);return(we(o)?nt.has(o):Nt(o))?l:(e||R(n,0,o),t?l:D(l)?a&&be(o)?l:l.value:le(l)?e?X(l):at(l):l)}}function It(e=!1){return function(t,n,o,s){let a=t[n];if(ae(a)&&D(a)&&!D(o))return!1;if(!e&&(lt(o)||ae(o)||(a=x(a),o=x(o)),!V(t)&&D(a)&&!D(o)))return a.value=o,!0;const l=V(t)&&be(n)?Number(n)<t.length:ce(t,n),r=Reflect.set(t,n,o,s);return t===x(s)&&(l?ke(o,a)&&W(t,"set",n,o):W(t,"add",n,o)),r}}const Pt={get:Mt,set:It(),deleteProperty:function(e,t){const n=ce(e,t),o=Reflect.deleteProperty(e,t);return o&&n&&W(e,"delete",t,void 0),o},has:function(e,t){const n=Reflect.has(e,t);return we(t)&&nt.has(t)||R(e,0,t),n},ownKeys:function(e){return R(e,0,V(e)?"length":F),Reflect.ownKeys(e)}},Ut={get:jt,set:(e,t)=>!0,deleteProperty:(e,t)=>!0},_e=e=>e,ue=e=>Reflect.getPrototypeOf(e);function ee(e,t,n=!1,o=!1){const s=x(e=e.__v_raw),a=x(t);n||(t!==a&&R(s,0,t),R(s,0,a));const{has:l}=ue(s),r=o?_e:n?Se:Q;return l.call(s,t)?r(e.get(t)):l.call(s,a)?r(e.get(a)):void(e!==s&&e.get(t))}function te(e,t=!1){const n=this.__v_raw,o=x(n),s=x(e);return t||(e!==s&&R(o,0,e),R(o,0,s)),e===s?n.has(e):n.has(e)||n.has(s)}function ne(e,t=!1){return e=e.__v_raw,!t&&R(x(e),0,F),Reflect.get(e,"size",e)}function Le(e){e=x(e);const t=x(this);return ue(t).has.call(t,e)||(t.add(e),W(t,"add",e,e)),this}function Ne(e,t){t=x(t);const n=x(this),{has:o,get:s}=ue(n);let a=o.call(n,e);a||(e=x(e),a=o.call(n,e));const l=s.call(n,e);return n.set(e,t),a?ke(t,l)&&W(n,"set",e,t):W(n,"add",e,t),this}function Me(e){const t=x(this),{has:n,get:o}=ue(t);let s=n.call(t,e);s||(e=x(e),s=n.call(t,e)),o&&o.call(t,e);const a=t.delete(e);return s&&W(t,"delete",e,void 0),a}function je(){const e=x(this),t=e.size!==0,n=e.clear();return t&&W(e,"clear",void 0,void 0),n}function oe(e,t){return function(n,o){const s=this,a=s.__v_raw,l=x(a),r=t?_e:e?Se:Q;return!e&&R(l,0,F),a.forEach((c,i)=>n.call(o,r(c),r(i),s))}}function se(e,t,n){return function(...o){const s=this.__v_raw,a=x(s),l=re(a),r=e==="entries"||e===Symbol.iterator&&l,c=e==="keys"&&l,i=s[e](...o),h=n?_e:t?Se:Q;return!t&&R(a,0,c?me:F),{next(){const{value:f,done:d}=i.next();return d?{value:f,done:d}:{value:r?[h(f[0]),h(f[1])]:h(f),done:d}},[Symbol.iterator](){return this}}}}function P(e){return function(...t){return e!=="delete"&&this}}function Vt(){const e={get(s){return ee(this,s)},get size(){return ne(this)},has:te,add:Le,set:Ne,delete:Me,clear:je,forEach:oe(!1,!1)},t={get(s){return ee(this,s,!1,!0)},get size(){return ne(this)},has:te,add:Le,set:Ne,delete:Me,clear:je,forEach:oe(!1,!0)},n={get(s){return ee(this,s,!0)},get size(){return ne(this,!0)},has(s){return te.call(this,s,!0)},add:P("add"),set:P("set"),delete:P("delete"),clear:P("clear"),forEach:oe(!0,!1)},o={get(s){return ee(this,s,!0,!0)},get size(){return ne(this,!0)},has(s){return te.call(this,s,!0)},add:P("add"),set:P("set"),delete:P("delete"),clear:P("clear"),forEach:oe(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=se(s,!1,!1),n[s]=se(s,!0,!1),t[s]=se(s,!1,!0),o[s]=se(s,!0,!0)}),[e,n,t,o]}const[$t,Wt,Ft,Ht]=Vt();function st(e,t){const n=t?e?Ht:Ft:e?Wt:$t;return(o,s,a)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?o:Reflect.get(ce(n,s)&&s in o?n:o,s,a)}const Bt={get:st(!1,!1)},qt={get:st(!0,!1)},rt=new WeakMap,Gt=new WeakMap,it=new WeakMap,Yt=new WeakMap;function at(e){return ae(e)?e:ct(e,!1,Pt,Bt,rt)}function X(e){return ct(e,!0,Ut,qt,it)}function ct(e,t,n,o,s){if(!le(e)||e.__v_raw&&(!t||!e.__v_isReactive))return e;const a=s.get(e);if(a)return a;const l=(r=e).__v_skip||!Object.isExtensible(r)?0:function(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}(Ot(r));var r;if(l===0)return e;const c=new Proxy(e,l===2?o:n);return s.set(e,c),c}function ae(e){return!(!e||!e.__v_isReadonly)}function lt(e){return!(!e||!e.__v_isShallow)}function x(e){const t=e&&e.__v_raw;return t?x(t):e}const Q=e=>le(e)?at(e):e,Se=e=>le(e)?X(e):e;function ut(e){$&&L&&tt((e=x(e)).dep||(e.dep=xe()))}function Te(e,t){const n=(e=x(e)).dep;n&&ve(n)}function D(e){return!(!e||e.__v_isRef!==!0)}function N(e){return dt(e,!1)}function ge(e){return dt(e,!0)}function dt(e,t){return D(e)?e:new Kt(e,t)}class Kt{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:x(t),this._value=n?t:Q(t)}get value(){return ut(this),this._value}set value(t){const n=this.__v_isShallow||lt(t)||ae(t);t=n?t:x(t),ke(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Q(t),Te(this))}}function Qt(e){Te(e)}function k(e){return D(e)?e.value:e}var ht;class Jt{constructor(t,n,o,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[ht]=!1,this._dirty=!0,this.effect=new Je(t,()=>{this._dirty||(this._dirty=!0,Te(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=o}get value(){const t=x(this);return ut(t),!t._dirty&&t._cacheable||(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Xt(e,t,n=!1){let o,s;const a=typeof e=="function";return a?(o=e,s=Tt):(o=e.get,s=e.set),new Jt(o,s,a||!s,n)}ht="__v_isReadonly";function q(){return q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},q.apply(this,arguments)}function Zt(e,t){if(e==null)return{};var n,o,s={},a=Object.keys(e);for(o=0;o<a.length;o++)t.indexOf(n=a[o])>=0||(s[n]=e[n]);return s}var Ae,ze,en=(Ae=function(e){var t=Object.prototype.hasOwnProperty,n="~";function o(){}function s(c,i,h){this.fn=c,this.context=i,this.once=h||!1}function a(c,i,h,f,d){if(typeof h!="function")throw new TypeError("The listener must be a function");var p=new s(h,f||c,d),u=n?n+i:i;return c._events[u]?c._events[u].fn?c._events[u]=[c._events[u],p]:c._events[u].push(p):(c._events[u]=p,c._eventsCount++),c}function l(c,i){--c._eventsCount==0?c._events=new o:delete c._events[i]}function r(){this._events=new o,this._eventsCount=0}Object.create&&(o.prototype=Object.create(null),new o().__proto__||(n=!1)),r.prototype.eventNames=function(){var c,i,h=[];if(this._eventsCount===0)return h;for(i in c=this._events)t.call(c,i)&&h.push(n?i.slice(1):i);return Object.getOwnPropertySymbols?h.concat(Object.getOwnPropertySymbols(c)):h},r.prototype.listeners=function(c){var i=this._events[n?n+c:c];if(!i)return[];if(i.fn)return[i.fn];for(var h=0,f=i.length,d=new Array(f);h<f;h++)d[h]=i[h].fn;return d},r.prototype.listenerCount=function(c){var i=this._events[n?n+c:c];return i?i.fn?1:i.length:0},r.prototype.emit=function(c,i,h,f,d,p){var u=n?n+c:c;if(!this._events[u])return!1;var m,w,g=this._events[u],b=arguments.length;if(g.fn){switch(g.once&&this.removeListener(c,g.fn,void 0,!0),b){case 1:return g.fn.call(g.context),!0;case 2:return g.fn.call(g.context,i),!0;case 3:return g.fn.call(g.context,i,h),!0;case 4:return g.fn.call(g.context,i,h,f),!0;case 5:return g.fn.call(g.context,i,h,f,d),!0;case 6:return g.fn.call(g.context,i,h,f,d,p),!0}for(w=1,m=new Array(b-1);w<b;w++)m[w-1]=arguments[w];g.fn.apply(g.context,m)}else{var S,T=g.length;for(w=0;w<T;w++)switch(g[w].once&&this.removeListener(c,g[w].fn,void 0,!0),b){case 1:g[w].fn.call(g[w].context);break;case 2:g[w].fn.call(g[w].context,i);break;case 3:g[w].fn.call(g[w].context,i,h);break;case 4:g[w].fn.call(g[w].context,i,h,f);break;default:if(!m)for(S=1,m=new Array(b-1);S<b;S++)m[S-1]=arguments[S];g[w].fn.apply(g[w].context,m)}}return!0},r.prototype.on=function(c,i,h){return a(this,c,i,h,!1)},r.prototype.once=function(c,i,h){return a(this,c,i,h,!0)},r.prototype.removeListener=function(c,i,h,f){var d=n?n+c:c;if(!this._events[d])return this;if(!i)return l(this,d),this;var p=this._events[d];if(p.fn)p.fn!==i||f&&!p.once||h&&p.context!==h||l(this,d);else{for(var u=0,m=[],w=p.length;u<w;u++)(p[u].fn!==i||f&&!p[u].once||h&&p[u].context!==h)&&m.push(p[u]);m.length?this._events[d]=m.length===1?m[0]:m:l(this,d)}return this},r.prototype.removeAllListeners=function(c){var i;return c?this._events[i=n?n+c:c]&&l(this,i):(this._events=new o,this._eventsCount=0),this},r.prototype.off=r.prototype.removeListener,r.prototype.addListener=r.prototype.on,r.prefixed=n,r.EventEmitter=r,e.exports=r},Ae(ze={exports:{}}),ze.exports);class tn{constructor(t){this.data=void 0,this.next=void 0,this.data=t,this.next=null}}class nn{constructor(){this.head=void 0,this.tail=void 0,this.size=void 0,this.head=null,this.tail=null,this.size=0}enqueue(t){let n=new tn(t);this.isEmpty()?(this.head=n,this.tail=n):(this.tail&&(this.tail.next=n),this.tail=n),this.size++}dequeue(){if(this.isEmpty())return null;{var t,n;let o=((t=this.head)==null?void 0:t.data)||null;return this.head=((n=this.head)==null?void 0:n.next)||null,this.isEmpty()&&(this.tail=null),this.size--,o}}remove(t){let n=this.head,o=null;for(;n;){if(n.data===t)return o?(o.next=n.next,n.next||(this.tail=o)):(this.head=n.next,this.head||(this.tail=null)),void this.size--;o=n,n=n.next}}isEmpty(){return this.size===0}}const on=new class{constructor(){this.frameDeadline=void 0,this.taskQueue=void 0,this.channel=void 0,this.messagePort=void 0,this.triggerPort=void 0,this.rafTriggered=void 0,this.activeFrameTime=33.33,this.frameDeadline=performance.now()+this.activeFrameTime,this.taskQueue=new nn,this.channel=new MessageChannel,this.messagePort=this.channel.port1,this.triggerPort=this.channel.port2,this.rafTriggered=!1,this.messagePort.onmessage=()=>{this.handleTask()}}size(){return this.taskQueue.size}timeRemaining(){return Math.max(0,this.frameDeadline-performance.now())}execTask(e){return e({timeRemaining:()=>this.timeRemaining()})}handleTask(){if(this.timeRemaining()<=0)return void this.trigger();let e=this.taskQueue.dequeue();for(;e;)try{this.execTask(e)}finally{if(this.timeRemaining()<=0)break;e=this.taskQueue.dequeue()}this.trigger()}trigger(){this.rafTriggered||this.taskQueue.size!==0&&(this.rafTriggered=!0,requestAnimationFrame(e=>{this.frameDeadline=e+this.activeFrameTime,this.rafTriggered=!1,e<this.frameDeadline&&this.triggerPort.postMessage(null)}))}async runTask(e){return!this.rafTriggered&&performance.now()<this.frameDeadline?this.execTask(e):new Promise((t,n)=>{this.taskQueue.enqueue(()=>{try{t(this.execTask(e))}catch(o){n(o)}}),this.trigger()})}buildTask(e){let t,n,o=!1,s=!1;const a=new Promise((r,c)=>{n=r}),l=r=>{if(!o)return t=e(r),s=!0,n(t),t;n(void 0)};return this.taskQueue.enqueue(l),this.trigger(),{cancel:()=>{o=!0,n(void 0),this.taskQueue.size<=5e3&&this.taskQueue.remove(l)},promise:a,state:()=>({isCancelled:o,isDone:s,result:t})}}};class sn{constructor(){this.tasks=new Map}runTask(t,n){const o=this.tasks.get(t);o&&o.cancel();const s=on.buildTask(n);return this.tasks.set(t,s),s.promise.finally(()=>{this.tasks.get(t)===s&&this.tasks.delete(t)}),s}dispose(){this.tasks.forEach(t=>t.cancel()),this.tasks.clear()}}const rn=Object.prototype.hasOwnProperty;function Ie(e,t){if(Object.is(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;const n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(let s=0;s<n.length;s++)if(!rn.call(t,n[s])||!Object.is(e[n[s]],t[n[s]]))return!1;return!0}const he=(e,t)=>{if(e.has_outside_effect||t.has_outside_effect)throw new Error("View has outside effect, cannot patch");if(e instanceof z&&t instanceof z)return(n=e).update((o=t).DOMProps,o.DOMChildren),n.DOMChildren=o.DOMChildren,void(n.DOMProps=o.DOMProps);var n,o;const s=I.view2component.get(e),a=I.view2component.get(t);if(s&&a)return s.props=a.props,s.state=a.state,s.children=a.children,void s.update();((l,r)=>{r.initialize(),l.updateChildren(r.children)})(e,t)},Pe=e=>{var t,n,o;return{node:e,view:v.dom2view.get(e),key:(t=v.dom2view.get(e))==null?void 0:t.key,keyed:(o=(n=v.dom2view.get(e))==null?void 0:n.key,o!=null)}};class v{static getNextIndex(){return++v.index}static createAnchor(){const t=document.createTextNode("");return t[v.symbols.ANCHOR]=!0,t}static isAnchor(t){return t instanceof Text&&t[v.symbols.ANCHOR]}constructor(t=v.createAnchor()){this.__index=v.getNextIndex(),this.scheduler=new sn,this.events=new en,this.anchor=void 0,this.children=[],this.context={},this.parentView=v.globalView,this.is_container=!1,this.has_outside_effect=!1,this.key=void 0,this.effectScope=Lt(!0),this.initialized=!1,this.zoneFlag="",this.anchor=t,v.dom2view.set(this.anchor,this),this.events.on("error",n=>{var o;this.events.listenerCount("error")===1&&((o=this.parentView)==null||o.events.emit("error",n))}),this.events.on("throw",n=>{var o;this.events.listenerCount("throw")===1&&((o=this.parentView)==null||o.events.emit("throw",n))})}initialize(){this.initialized||(this.events.emit("init_before"),this.events.emit("init"),this.events.emit("init_after"),this.initialized=!0)}mount(t,n){this.initialize(),this.events.emit("mount_before",t,this.parentView),t.insertBefore(this.anchor,n||null),this.mountChildren(t),this.events.emit("mounted",t,this.parentView),this.events.emit("mount_after",t,this.parentView)}mountChildren(t){if(!t.contains(this.anchor))throw new Error("Cannot mount children before anchor, anchor not contained in parentElement.");for(const n of this.children){t.insertBefore(n,this.anchor);const o=v.dom2view.get(n);if(o){if(o===this)throw new Error("Cannot mount children to self");o.parentView=this,o.mount(t,n)}}}updateChildren(t){const n=t.flat(64).map(a=>function(l){if(l==null)return null;if(l instanceof Node)return l;if(D(l)||typeof l=="function"){const r=new v;let c;if(r.has_outside_effect=!0,D(l)){const i=document.createTextNode("");c=K(()=>{const h=String(k(l));h!==i.textContent&&(i.textContent=h)},{lazy:!1}),r.updateChildren([i])}else c=K(()=>{const i=l();r.updateChildren(Array.isArray(i)?i:[i])},{lazy:!1});return r.events.on("unmounted",()=>{c.effect.stop()}),r.anchor}return document.createTextNode(String(l))}(a)).filter(Boolean);if(this.children.length===0&&n.length===0)return;const o=function(a,l){const r=[],c=a.map(Pe),i=l.map(Pe);if(c.length===0)return i.map((d,p)=>({type:"remove",node:d,index:p}));if(i.length===0)return c.map((d,p)=>({type:"insert",index:p,node:d}));for(let d=0;d<Math.max(c.length,i.length);d++){var h,f;const p=c[d],u=i[d];if((p==null?void 0:p.node)===(u==null?void 0:u.node)||p!=null&&p.view&&u!=null&&u.view&&(p==null?void 0:p.view)===(u==null?void 0:u.view)||p!=null&&p.keyed&&u!=null&&u.keyed)continue;if(!(!((p==null?void 0:p.node)instanceof Text&&(u==null?void 0:u.node)instanceof Text)||v.isAnchor(p.node)||v.isAnchor(u.node)||(h=p.view)!=null&&h.has_outside_effect||(f=u.view)!=null&&f.has_outside_effect)){p.node.textContent!==u.node.textContent&&r.push({type:"text",oldNode:u,newNode:p,index:d});continue}const m=()=>{p&&!p.keyed&&r.push({type:"insert",index:d,node:p}),u&&!u.keyed&&r.push({type:"remove",index:d,node:u})};if(p&&u)if(p||u)if(p.keyed||u.keyed)m();else if(p.view||u.view)if(p.view&&u.view)if(p.view.has_outside_effect||u.view.has_outside_effect)m();else{const w=u.view,g=p.view,b=w instanceof z,S=g instanceof z;if(b&&!S||!b&&S){m();continue}if(b&&S){w.elem.nodeName===g.elem.nodeName?r.push({type:"dom-update",oldNode:u,newNode:p,index:d}):m();continue}const T=I.view2component.get(w),E=I.view2component.get(g);if(!T&&E||T&&!E){m();continue}if(T!=null&&T._component_type&&E!=null&&E._component_type&&T._component_type!==E._component_type){m();continue}r.push({type:"view-patch",oldNode:u,newNode:p,index:d})}else m();else m();else m();else m()}for(let d=0;d<c.length;d++){const p=c[d];if(p==null||!p.keyed)continue;const u=i.findIndex(m=>m.key===p.key);r.push(u!==d?u!==-1?{type:"move",to:d,node:i[u],newNode:p}:{type:"insert",index:d,node:p}:p.view instanceof z?{type:"dom-update",oldNode:i[u],newNode:p,index:d}:{type:"view-patch",oldNode:i[u],newNode:p,index:d})}for(let d=0;d<i.length;d++){const p=i[d];p!=null&&p.keyed&&c.findIndex(u=>u.key===p.key)===-1&&r.push({type:"remove",index:d,node:p})}return r}(n,this.children);if(o.length===0)return;const s=()=>{const a=this.patchAll(o,n);this.children=a.filter(Boolean)};this.initialized?this.scheduler.runTask("patch-children",s):s()}patchAll(t,n){const o=n.slice();this.children.forEach((r,c)=>{o.length>c&&(o[c]=r)}),t.forEach(r=>{switch(r.type){case"move":o[r.to]=r.node.node;break;case"insert":o[r.index]=r.node.node;break;case"dom-update":case"text":case"view-patch":o[r.index]=r.oldNode.node}});const s={},a=r=>{if(!this.anchor.parentNode||this.children.length===0)return null;let c=r;for(;o.length>c;){if(c in s)return s[c];const i=o[c];if(i&&(i==null?void 0:i.parentNode)===this.anchor.parentNode)return s[c]=i,i;c++}return s[c]=null,null};for(const r of t)switch(r.type){case"move":{var l;const{to:c,node:i,newNode:h}=r;i.view instanceof v&&h.view instanceof v&&he(i.view,h.view);const f=a(c+1),d=(f==null?void 0:f.parentNode)===this.anchor.parentNode?f:this.anchor;this.anchor.parentNode&&(i.view?(i.view.parentView=this,i.view.mount(this.anchor.parentNode,d)):this.anchor.parentNode.insertBefore(i.node,d)),(l=h.view)==null||l.unmount();break}case"insert":{const{node:c,index:i}=r,h=a(i+1),f=(h==null?void 0:h.parentNode)===this.anchor.parentNode?h:this.anchor;this.anchor.parentNode&&(c.view?(c.view.parentView=this,c.view.mount(this.anchor.parentNode,f)):this.anchor.parentNode.insertBefore(c.node,f));break}case"remove":break;case"view-patch":{const{newNode:c,oldNode:i}=r,h=c.view,f=i.view;he(f,h),h!==f&&(h.children=[],h.unmount());break}case"dom-update":{const{newNode:c,oldNode:i}=r,h=c.view,f=i.view;he(f,h),h!==f&&(h.children=[],h.unmount());break}case"text":{const{newNode:c,oldNode:i}=r;i.node.textContent=c.node.textContent;break}}return t.forEach(r=>{if(r.type!=="remove")return;const{node:c}=r;var i;c.view?c.view.unmount():(i=c.node.parentElement)==null||i.removeChild(c.node)}),o}remove(){for(const n of this.children){var t;(t=n.parentElement)==null||t.removeChild(n);const o=v.dom2view.get(n);o&&o.remove()}}effect(t,n="unmounted"){return this.effectScope.run(()=>{const o=K(t,{lazy:!1});return o.effect.deps.length===0?o.effect.stop():this.events.once(n,()=>o.effect.stop()),o})}unmount(){var t;this.events.emit("unmount_before"),this.scheduler.dispose(),(t=this.anchor.parentNode)==null||t.removeChild(this.anchor),this.unmountChildren(),this.events.emit("unmounted"),this.events.emit("unmount_after"),this.events.removeAllListeners(),this.effectScope.stop()}unmountChildren(){this.remove();for(const t of this.children){const n=v.dom2view.get(t);n&&n.unmount()}}zone(t,n="setup"){const o=this.zoneFlag;v.pushView(this),this.zoneFlag=n;try{return t()}finally{this.zoneFlag=o,v.popView()}}getContextValue(t,n){let o=this;for(;o;){const s=o.context;if(t in s){const a=s[t];if(!n||n(a))return a}o=o.parentView}return v.symbols.NONE}setContextValue(t,n){let o=this;for(;o;){if(o.is_container)return void(o.context[t]=n);o=o.parentView}throw new Error(`Cannot set context value: ${String(t)}`)}}v.symbols={NONE:Symbol("NONE"),DIRECTIVES:Symbol("DIRECTIVES"),ANCHOR:Symbol("ANCHOR")},v.isNone=e=>e===v.symbols.NONE,v.index=0,v.dom2view=new WeakMap,v.stack=[],v.topView=()=>v.stack[v.stack.length-1],v.pushView=e=>v.stack.push(e),v.popView=()=>v.stack.pop(),v.globalView=new v,v.stack.push(v.globalView),v.globalView.is_container=!0;const ye=e=>typeof e=="function"?e():D(e)?k(e):Array.isArray(e)?e.map(ye):typeof e=="object"?Object.fromEntries(Object.entries(e).map(([t,n])=>[t,ye(n)])):k(e);class z extends v{constructor(t,n,o){super(),this.DOMProps=void 0,this.DOMChildren=void 0,this.elem=void 0,this.props={},this.propsCleanups={},this.DOMProps=n,this.DOMChildren=o,this.elem=t instanceof Node?t:document.createElement(t),this.key=n.key,delete n.key,v.dom2view.set(this.elem,this)}initialize(){this.initialized||(this.events.emit("init_before"),this.events.emit("init"),this.update(this.DOMProps,this.DOMChildren),this.events.emit("init_after"),this.initialized=!0)}mount(t,n){this.initialize(),this.events.emit("mount_before",t,this.parentView),t.insertBefore(this.elem,n||null),this.elem.appendChild(this.anchor),this.mountChildren(),this.events.emit("mounted",t,this.parentView),this.events.emit("mount_after",t,this.parentView)}update(t,n){this.events.emit("update_before");try{this.updateChildren(n),Ie(t,this.props)||(this.updateProps(t),this.props=t),this.events.emit("updated")}finally{this.events.emit("update_after")}}updateProps(t){if(Ie(t,this.props))return;const n=this.diffProps(t,this.props);if(n.length===0)return;const o=()=>{for(const s of n){const{type:a,key:l,value:r}=s;switch(a){case"patch":this.patchProp(l,r),this.props[l]=r;break;case"remove":this.cleanupProp(l),delete this.props[l]}}};this.initialized?this.scheduler.runTask("patch-task",o):o()}addPropCleanup(t,n){const o=this.propsCleanups[t];this.propsCleanups[t]=()=>{o==null||o(),n()}}cleanupProp(t){var n,o;(n=(o=this.propsCleanups)[t])==null||n.call(o),delete this.propsCleanups[t]}patchProp(t,n){if(this.cleanupProp(t),this.matchDirectives(t,n),t.startsWith("$")||t.startsWith("_")||t==="key")return;const o=this.elem;if(t!=="ref"){if(o instanceof Element)if(t.startsWith("on")){const s=t.slice(2).toLowerCase();o.addEventListener(s,n);const a=()=>o.removeEventListener(s,n);this.events.once("unmounted",a),this.addPropCleanup(t,()=>{this.events.off("unmounted",a),o.removeEventListener(s,n)})}else{const s=this.effect(()=>{const a=this.elem;if(!(a instanceof Element))return;const l=ye(n);((r,c,i)=>{var h;if(typeof i!="boolean")switch(c){case"className":case"class":{let f="";f=Array.isArray(i)?i.join(" "):typeof i=="object"?Object.entries(i).filter(([d,p])=>!!p).map(([d])=>d).join(" "):String(i),r.setAttribute("class",f);break}case"style":if(!((h=r)instanceof Element&&typeof h.style=="object"))break;typeof i=="object"?Object.entries(i).forEach(([f,d])=>r.style[f]=d):r.style.cssText=String(i);break;case"value":r.value=i;break;default:r.setAttribute(c,String(i))}else i?r.setAttribute(c,""):r.removeAttribute(c)})(a,t,l)});this.addPropCleanup(t,()=>s==null?void 0:s.effect.stop())}}else D(n)?n.value=o:typeof n=="function"&&n(o)}diffProps(t,n){const o=[];return Object.entries(t).forEach(([s,a])=>{Object.is(n[s],a)||o.push({type:"patch",key:s,value:a})}),Object.entries(n).forEach(([s,a])=>{s in t||o.push({type:"remove",key:s,value:a})}),o}matchDirectives(t,n){const o=this.getContextValue(v.symbols.DIRECTIVES,c=>!(c==null||!c[t]));if(!o)return;const s=o[t];if(!s)return;const{mounted:a,unmounted:l,updated:r}=s;a&&this.events.once("mounted",()=>{this.effectScope.run(()=>{const c=this.zone(()=>a(this.elem,n,this));c&&this.addPropCleanup(t,c)})},"directive"),l&&this.events.once("unmounted",()=>{this.effectScope.run(()=>{const c=this.zone(()=>l(this.elem,n,this));c&&this.addPropCleanup(t,c)})},"directive"),r&&this.events.on("updated",()=>{this.effectScope.run(()=>{const c=this.zone(()=>r(this.elem,n,this));c&&this.addPropCleanup(t,c)})},"directive")}mountChildren(){const t=this.elem;for(const n of this.children){t.insertBefore(n,this.anchor);const o=v.dom2view.get(n);if(o){if(o===this)throw new Error("Cannot mount children to self");o.parentView=this,o.mount(t,n)}}}unmount(){var t;(t=this.elem.parentElement)==null||t.removeChild(this.elem),Object.values(this.propsCleanups).forEach(n=>n()),this.propsCleanups={},super.unmount()}}class I{constructor(){this._component_type=void 0,this.render=void 0,this.runner=void 0,this.view=new v,this.props={},this.state={},this.children=[],this.view.is_container=!0,this.view.events.once("unmounted",()=>this.dispose()),this.view.events.once("init_after",()=>{this.view.effectScope.run(()=>{this.runner=K(this.update.bind(this),{lazy:!1,onStop:()=>this.view.events.emit("render_stop"),onTrack:t=>this.view.events.emit("render_tracked",t),onTrigger:t=>this.view.events.emit("render_triggered",t)})})}),I.view2component.set(this.view,this)}update(){this.view.events.emit("update_before");try{const t=this.view.effectScope.run(()=>this.view.zone(()=>this.render(this.props,this.state,this.children),"render"));this.view.updateChildren(Array.isArray(t)?t:[t]),this.view.events.emit("updated")}catch(t){setTimeout(()=>{this.view.events.emit("error",t)}),console.error(t)}finally{this.view.events.emit("update_after")}}dispose(){var t;(t=this.runner)==null||t.effect.stop()}}I.view2component=new WeakMap;const pt=(e,t,n)=>{let o;return o=typeof e=="function"?(s=>(a,l)=>{const r=new I;return r.props=a,r.children=l,r.view.key=a.key,r.view.events.once("init",()=>{r.render=r.view.zone(()=>s(a,r.state,r.children))}),r._component_type=s,r})(e):(s=>(a,l)=>{const r=new I;return r.props=a,r.children=l,r.view.key=a.key,r.view.events.once("init",()=>{r.state=r.view.zone(()=>s.setup(a,l))}),r._component_type=s,r.render=s.render.bind(r),r})(e),o(t,n)},y=(e,t={},...n)=>{if(t||(t={}),n||(n=[]),n=n.flat(64),e instanceof Node){const o=v.dom2view.get(e);return o?o instanceof z&&o.update(t,n):new z(e,t,n),e}return typeof e=="string"||e instanceof String?new z(e,t,n).elem:pt(e,t,n).view.anchor};function an(e,t,n){const o=e instanceof Element?e:document.querySelector(e);if(!o)throw new Error("Could not find selector");if(!(t instanceof Node)){const s=pt(t,n||{},[]);return s.view.mount(o),s}{const s=v.dom2view.get(t);s?s.mount(o):o.appendChild(t)}}const cn=()=>v.topView();function J(e,...t){Ze();try{return e.apply(void 0,t)}finally{et()}}const C=e=>typeof e=="function"?J(e):J(k,e),ln=(e,t,n=!1)=>{const o=v.topView();return o.events[n?"once":"on"](e,t),()=>o.events.off(e,t)},de=(e,t=!1)=>n=>ln(e,n,t),ft=de("mounted"),Ue=de("mount_before"),O=de("unmounted"),un=de("update_after"),dn=e=>{const t=v.topView();if(t.zoneFlag==="render"){const n=()=>{t.events.off("update_before",o),t.events.off("unmounted",o)},o=()=>{n(),e()};return t.events.once("update_before",o),t.events.once("unmounted",o),n}return t.events.once("unmounted",e),()=>t.events.off("unmounted",e)},Z=(e,t)=>{let n;const o=K(()=>{n&&J(n),n=void 0,e(l=>n=l)},q({lazy:!1},t));let s;const a=()=>{s==null||s(),n==null||n(),n=void 0,o.effect.stop()};return s=dn(a),{runner:o,cleanup:a}};function hn(e,t){const n=t==null?void 0:t.equals,o=ge(e);return[X(o),s=>{const a=C(o),l=typeof s=="function"?s(a):s;n&&n(a,l)||(o.value=l,Qt(o))}]}function A(e,t,n){let o;return Z(()=>{const s=D(e)?e.value:e();J(t,s,o),o=s},n)}function Ee(e){let t;const n=N();return Z(()=>{t&&J(t),t=void 0;const o=e(s=>t=s);Object.is(o,C(n))||(n.value=o)}),X(n)}function pn(e,t){const n=N(t);return[X(n),o=>{n.value=e(C(n),o)}]}function mt(){const e=v.topView();e.zoneFlag!=="setup"&&console.warn('Warning: Marking a component with outside effect outside "setup" zone may cause unexpected behavior.'),e.has_outside_effect=!0}const fn=(e,t)=>{v.topView().setContextValue(e,t)};function mn(e,t=v.symbols.NONE){const n=v.topView().getContextValue(e);return n===v.symbols.NONE&&t!==v.symbols.NONE?t:n}const vn=(...e)=>e.map(t=>k(t)),vt=vn,gt=e=>{const t=(n=v.topView(),new Proxy({},{get(o,s,a){const l=n.getContextValue(s);if(!v.isNone(l))return l},set:(o,s,a,l)=>(n.setContextValue(s,a),!0)}));var n;return e==null||e(t),t},gn=(e,t,n)=>()=>n;function yn(e,t,n=""){const o=t===":root",s=o?"":t,a=e.split(",").map(c=>c.trim()).filter(Boolean);let l=o?[""]:s.split(",").map(c=>c.trim()).filter(Boolean);var r;return(r=l,a.flatMap(c=>r.map(i=>[c,i]))).map(([c,i])=>c.startsWith("&")?c.replace(/&/g,i):`${i} ${c}`).map(c=>`${c.replace(n||"","")}${n||""}`.trim()).join(",")}const Ve=e=>e&&(e.nodeType===Node.DOCUMENT_NODE||e.nodeType===Node.DOCUMENT_FRAGMENT_NODE),$e=(e,t,n)=>{const{updateCSSText:o,installSheet:s,uninstallSheet:a}=n;let l=!1;return{parseStyle:r=>{const c=function(i,h,{beautify:f=!1,scopedSelector:d=""}){const p=f?`
`:"",u=[{nodeSelector:h+d,cssObject:i}],m=[];for(;u.length>0;){const{nodeSelector:g,cssObject:b}=u.pop(),S={selector:g,cssText:""};for(const T in b){const E=b[T];if(typeof E=="object"){const _=yn(T,g,d);u.push({nodeSelector:_,cssObject:E})}else{if(typeof E=="string"&&!E.trim()||E==null)continue;S.cssText+=`${w=T,w.replace(/[A-Z]/g,_=>`-${_.toLowerCase()}`)}: ${b[T]};${p}`}}S.cssText.trim()&&m.push(S)}var w;return m.map(g=>`${g.selector}{${g.cssText}}`).join(`
`).trim()}(e(),r,{scopedSelector:t});o(c)},applySheet:r=>{l||(l=!0,s(r))},removeSheet:r=>{l&&(l=!1,a(r))}}},ie={STYLESHEET_SCOPED:Symbol("STYLESHEET_SCOPED"),STYLESHEET_ROOT:Symbol("STYLESHEET_ROOT")},We=()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(36),yt=e=>{const{className:t}=e;(({props:o,scopedId:s,rootNodeSelector:a,styleOrFunc:l})=>{const r=(p=>{if(!p)throw new Error("styleOrFn is required.");return typeof p=="function"?p:()=>p})(o.styleFn||o.style||l),c=gt(),{applySheet:i,removeSheet:h,parseStyle:f}=((p,u,m)=>m?((w,g)=>{const b=new CSSStyleSheet,{parseStyle:S,applySheet:T,removeSheet:E}=$e(w,g,{updateCSSText(_){b.replaceSync(_)},installSheet(_=document){Ve(_)&&(_.adoptedStyleSheets=[..._.adoptedStyleSheets,b])},uninstallSheet(_=document){Ve(_)&&(_.adoptedStyleSheets=[..._.adoptedStyleSheets].filter(H=>H!==b))}});return{sheet:b,parseStyle:S,applySheet:T,removeSheet:E}})(p,u):((w,g)=>{const b=document.createElement("style"),{parseStyle:S,applySheet:T,removeSheet:E}=$e(w,g,{updateCSSText(_){b.innerHTML=_},installSheet(_){_.insertBefore(b,_.firstChild)},uninstallSheet(_){var H;(H=b.parentNode)==null||H.removeChild(b)}});return{styleDOM:b,parseStyle:S,applySheet:T,removeSheet:E}})(p,u))(()=>r(c),s?`[data-s-${s}]`:void 0,o.adopted),{[ie.STYLESHEET_ROOT]:d}=c;if(Z(()=>{let p=a;var u;o.adopted&&d&&d instanceof Node&&((u=d).nodeType===Node.DOCUMENT_NODE||u.nodeType===Node.DOCUMENT_FRAGMENT_NODE)&&(p=":root"),f(p)}),o.adopted)i(d),O(()=>h(d));else if((d==null?void 0:d.nodeType)===Node.DOCUMENT_FRAGMENT_NODE)i(d),O(()=>h(d));else{let p;Ue(u=>{i(u),p=u}),O(()=>h(p))}})(e),(o=>{const{scopedId:s}=o;if(!s)return;const a=`s-${s}`.replace(/-([a-z])/g,function(d,p){return p.toUpperCase()});let l=null,r=null,c=new Set;const i=d=>{d&&"dataset"in d&&typeof d.dataset=="object"&&(d.dataset[a]="")},h=d=>{d&&"dataset"in d&&typeof d.dataset=="object"&&delete d.dataset[a]},f=()=>{const d=new Set,p=u=>{if(u&&(u===l||!u.is_container)){u instanceof z&&d.add(u.elem);for(const m of u.children){const w=v.dom2view.get(m);w?p(w):m instanceof Element&&d.add(m)}}};p(l);for(const u of d)i(u);for(const u of c)d.has(u)||h(u);c=d};ft((d,p)=>{r=d,l=p,f(),i(d)}),un(()=>{f()}),O(()=>{h(r);for(const d of c)h(d)})})(e);let n=null;Ue(o=>{n=o,t&&o instanceof Element&&o.classList.add(t)}),O(()=>{t&&n instanceof Element&&n.classList.remove(t)})},G=(e,t,[n])=>{mt();const o=e.scoped?We():void 0,s=`s-${We()}`;return yt({props:e,styleOrFunc:n,rootNodeSelector:`.${s}`,className:s,scopedId:o}),()=>null},wn=(e,t,[n])=>(mt(),yt({props:q({},e,{scoped:!1}),styleOrFunc:n,rootNodeSelector:":root"}),()=>null),bn=["tagName","slotRender"],kn=(e,t,n)=>{let{tagName:o="div",slotRender:s}=e,a=Zt(e,bn);const l=y(o,a,s),r=l.attachShadow({mode:"open"});(h=>{const f=v.topView(),d=gt();let p;const u=()=>{p=d[ie.STYLESHEET_ROOT],d[ie.STYLESHEET_ROOT]=h};f.events.on("update_before",u),f.events.on("update_after",()=>{d[ie.STYLESHEET_ROOT]=p,p=void 0}),u()})(r);const c=cn();y(r,{},n);const i=v.dom2view.get(r);return i&&(r.appendChild(i.anchor),i.parentView=c,i.initialize()),()=>l};function xn(e,t="text"){const n=[];let o=t,s="",a=0;const l=(i,h=s)=>{n.push({type:i,value:h,index:{string:a}}),s=""},r=i=>o=i,c=()=>{const i=e[a];return a+=1,i};for(;a<e.length;){const i=c(),h=()=>{throw new Error(`Unexpected character found while parsing: ${i}`)};switch(o){case"text":i==="<"?(s&&(l("text"),s=""),l("start","<"),r("start")):i===">"?h():s+=i;break;case"start":i==="/"?(n.pop(),l("close_start","</"),r("close_start")):i==="!"?(n.pop(),c()==="-"&&c()==="-"?r("comment"):h()):(n.pop(),r("tag"),s+=i);break;case"comment":i==="-"&&[i,c(),c()].join("")==="-->"&&r("text");break;case"close_start":i===">"?(n.pop(),l("tag_end",s),s="",r("text")):s+=i;break;case"value_done":switch(i){case`
`:case" ":case'"':r("attribute");break;case"/":r("close_start");break;case">":r("text");break;default:h()}break;case"tag":switch(i){case">":s.trim()&&(l("tag",s.trim()),s=""),r("text");break;case'"':case"=":h();break;case" ":s.trim()&&l("tag",s.trim()),r("attribute"),s="";break;case"/":s="",l("close_start","</"),r("close_start");break;default:s+=i}break;case"attribute":switch(i){case">":s.trim()&&(l("attr",s.trim()),l("equal","="),l("value",!0),s=""),r("text");break;case"=":s.trim()?l("attr",s.trim()):h(),l("equal",i),s="",r("assignment");break;case'"':h();break;case" ":s.trim()&&(l("attr",s.trim()),l("equal","="),l("value",!0)),s="";break;case"/":s="",l("close_start","</"),r("close_start");break;default:s+=i}break;case"assignment":i==='"'?(r("value"),s=""):h();break;case"value":i==='"'?(l("value",s),s="",r("tag")):s+=i}}return s&&l("text",s),n}function _n(e,t){const{value:n,index:o}=e;throw new Error(`Expected token '${n}', at position [${o.value!==void 0?`values:${o.value}`:`strings:${o.strings}:${o.string}`}]
    should match [${t}] but got [${n}]`)}const Sn=/^[a-z][a-z0-9\-_]*$/,wt=e=>(t,...n)=>{const o=function(a,...l){const r={tag:"ROOT",attributes:{},children:[]},c=[r],i=((h,...f)=>{const d=[];let p="text";for(let u=0;u<h.length;u++){const m=f[u],w=xn(h[u],p);if(w.length!==0&&(d.push(...w.map(g=>q({},g,{index:q({},g.index,{strings:u})}))),m))switch(w[w.length-1].type){case"equal":d.push({type:"value",value:m,index:{value:u}}),p="value_done";break;case"start":d.pop(),d.push({type:"tag",value:m,index:{value:u}}),p="tag";break;case"tag":case"text":d.push({type:"text",value:m,index:{value:u}}),p="text";break;default:throw new Error("Unexpected token")}}return d})(a,...l);for(let h=0;h<i.length;h++){const f=i[h],d=c[c.length-1],{type:p,value:u}=f;switch(p){case"tag":{const m={tag:u,attributes:{},children:[]};d.children.push(m),c.push(m);break}case"value":d.attributes[i[h-2].value]=u;break;case"text":d.children.push(u);break;case"tag_end":{const m=c.pop();f.value&&f.value!=="/"&&(m==null?void 0:m.tag)!==f.value&&_n(f,m==null?void 0:m.tag);break}}}return r}(t,...n),s=a=>{if(a==null)return null;if(typeof a=="object"&&a.attributes&&a.children){if(typeof a.tag=="string"&&!Sn.test(a.tag)){const l=a.tpl_index&&t[a.tpl_index];throw new Error(`Unexpected tag ${a.tag} at ${l?`\`${l}\`}`:"[UNKNOWN]"}`)}return y(a.tag,a.attributes,a.children.map(s))}return a};return o.tag=e,s(o)},Tn=wt(gn),En=wt(kn),Cn=Tn;Cn.scoped=En;const Dn=(e,t)=>{const n=N("");return Z(()=>{const o=C(n);o&&URL.revokeObjectURL(o),n.value=URL.createObjectURL(new Blob([k(e)],{type:"text/plain",...t}))}),O(()=>URL.revokeObjectURL(n.value)),n},On="modulepreload",Rn=function(e,t){return new URL(e,t).href},Fe={},Ln=function(t,n,o){if(!n||n.length===0)return t();const s=document.getElementsByTagName("link");return Promise.all(n.map(a=>{if(a=Rn(a,o),a in Fe)return;Fe[a]=!0;const l=a.endsWith(".css"),r=l?'[rel="stylesheet"]':"";if(!!o)for(let h=s.length-1;h>=0;h--){const f=s[h];if(f.href===a&&(!l||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${r}`))return;const i=document.createElement("link");if(i.rel=l?"stylesheet":On,l||(i.as="script",i.crossOrigin=""),i.href=a,document.head.appendChild(i),l)return new Promise((h,f)=>{i.addEventListener("load",h),i.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>t())},Nn=()=>Ln(()=>import("https://unpkg.com/@monaco-editor/loader@1.3.3/lib/umd/monaco-loader.js"),[],import.meta.url).then(()=>window.monaco_loader).then(e=>e.init()),Mn=({value:e,onChange:t,isDark:n,onSave:o,...s})=>{let a,l,r;return Z(()=>{const c=k(n);r!=null&&r.editor&&(c?r.editor.setTheme("vs-dark"):r.editor.setTheme("vs"))}),O(()=>{a==null||a.dispose()}),D(e)&&A(e,c=>{(l==null?void 0:l.getValue())!==c&&(l==null||l.setValue(c))}),()=>y("div",{...s,ref:async c=>{r=await Nn(),l=r.editor.createModel(C(e),"typescript",r.Uri.file("main.ts")),l.onDidChangeContent(()=>t(l.getValue())),r.languages.typescript.typescriptDefaults.setCompilerOptions({jsx:"react"}),r.languages.typescript.typescriptDefaults.setDiagnosticsOptions({noSemanticValidation:!0,noSyntaxValidation:!0}),a=r.editor.create(c,{automaticLayout:!0,wordWrap:!0,theme:C(n)?"vs-dark":"vs"}),a.setModel(l),o&&a.addCommand(r.KeyMod.CtrlCmd|r.KeyCode.KeyS,()=>{o(l.getValue())})}})};class jn{constructor(){B(this,"idx",0);B(this,"demos",[]);B(this,"currentDemo",null)}registerDemo(t,n,o){const s={id:this.idx++,name:t,version:n,code:o};this.demos.push(s),this.currentDemo||(this.currentDemo=s)}selectDemo(t){const n=this.demos.find(o=>o.id===Number(t));if(!n)throw new Error(`Cannot find demo with name ${name}`);return this.currentDemo=n,n}}const An=`import {
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
`,zn=`import {
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
`,In=`import { mount, createState, html, css } from "@rhjs/rh";

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
`,Pn=`import { rh, ref, mount, unref, setupWatch, inject, provide } from "@rhjs/rh";

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
`,Un=`import { rh, ref, mount, unref, computed, onUnmount } from "@rhjs/rh";

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
`,Vn=`import {
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
`,$n=`import { Button, ensureFluentUILoaded } from "@rhjs/fluent-web-components";
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
`,M=new jn;M.registerDemo("HelloWorld","0.1.2",Un);M.registerDemo("Counter","0.1.2",Pn);M.registerDemo("TodoApp","0.1.2",Vn);M.registerDemo("Bitcoin","0.2.1-dev.8",An);M.registerDemo("Markdown Editor","0.2.1-dev.8",zn);M.registerDemo("HTML tag","0.2.1-dev.8",In);M.registerDemo("Counter","0.0.34",$n);const He=N(M.currentDemo),bt=()=>({mgr:M,currentDemo:He,selectDemo(e){He.value=M.selectDemo(e)},demos:M.demos}),Wn=()=>{const{selectDemo:e,demos:t}=bt();return()=>y("div",null,y("select",{onChange:n=>e(n.target.value)},t.map(n=>y("option",{value:n.id},n.name," @",n.version))))},Ce=({styleFn:e,isDark:t,...n},o,s)=>()=>y("div",{...n},y(G,{styleFn:()=>({height:"30px",display:"inline-flex",alignItems:"center",justifyContent:"center",paddingLeft:"12px",paddingRight:"12px",cursor:"pointer",userSelect:"none",marginLeft:"4px","&:hover":{backgroundColor:k(t)?"rgba(64,64,64,1)":"rgba(64,64,64,0.1)"},"&:active":{outline:"solid 1px",outlineColor:k(t)?"#fff":"rgba(64,64,64,1)"},...e==null?void 0:e()})}),s),Fn=({isDark:e})=>()=>y(Ce,{onClick:()=>{D(e)&&(e.value=!C(e))},isDark:e},y("span",null,()=>k(e)?"🌘":"🌖"));function Be({isDark:e,href:t,target:n="_blank"},o,s){return()=>y(Ce,{isDark:e,onClick:()=>{window.open(t,n)}},y("a",{href:t,target:n,style:"text-decoration: none; color: inherit;"},s))}const Hn=({isDark:e})=>()=>y("div",null,y(G,{styleFn:()=>({paddingLeft:"12px",paddingRight:"12px",height:"100%",width:"calc(100% - 24px)",display:"grid",gridTemplateColumns:"minmax(0, 1fr) 12px minmax(0, 1fr)"})}),y("div",{style:"display: inline-flex; align-items: center;"},y("span",{style:"user-select: none;word-break: keep-all;white-space: nowrap;"},"🧩 ",y("b",null,"R"),y("small",null,"eactive"),y("b",null,"H"),y("small",null,"ydrate"),y("b",null,"JS")," PLAYGROUND"),y(Fn,{isDark:e}),y(Wn,null)),y("div",null),y("div",{style:"display: inline-flex; align-items: center; justify-content: right;"},y(Be,{isDark:e,href:"https://zhzluke96.github.io/rhjs-demos/#demo",target:"_self"},"demos"),y(Be,{isDark:e,href:"https://github.com/zhzLuke96/rh.js"},"github"))),Bn=()=>document.querySelectorAll("iframe").forEach(e=>e.style.pointerEvents="none"),qn=()=>document.querySelectorAll("iframe").forEach(e=>e.style.pointerEvents="auto"),Gn=({isHorizontal:e,onResize:t,ref:n})=>{const[o,s]=hn(!1),a=()=>s(!0),l=()=>s(!1),r=d=>{t(d.clientX,d.clientY)},c=d=>{const p=d.touches[0];t(p.clientX,p.clientY)},i=N(null);A(o,d=>{d?(Bn(),window.addEventListener("mousemove",r),window.addEventListener("mouseup",l),window.addEventListener("touchmove",c),window.addEventListener("touchend",l)):(qn(),window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",l),window.removeEventListener("touchmove",c),window.removeEventListener("touchend",l))}),A(i,d=>{d&&(d.addEventListener("mousedown",a,{passive:!0}),d.addEventListener("touchstart",a,{passive:!0}))}),O(()=>{var d,p;(d=k(i))==null||d.removeEventListener("mousedown",a),(p=k(i))==null||p.removeEventListener("touchstart",a)});const h=mn("isDark"),f=Xt(()=>k(h)?"rgba(255,255,255,0.3)":"rgba(0,0,0,0.3)");return()=>y("div",{ref:d=>{i.value=d,n&&(n.value=d)}},y(G,{styleFn:()=>({backgroundColor:k(o)?k(f):"",width:e?"100%":"12px",height:e?"12px":"100%",zIndex:k(o)?"10":"auto",cursor:e?"row-resize":"col-resize",userSelect:"none",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"12px","&:hover":{backgroundColor:k(f)}})}),"⚪⚪⚪")},Yn=()=>{const e=`
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
`.trim(),t=URL.createObjectURL(new Blob([e],{type:"text/html"}));return O(()=>URL.revokeObjectURL(t)),`${t}#?embedded=${encodeURIComponent(location.origin)}`},Kn=(e,t,n="")=>`
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
`.trim(),Qn=(e,t,n,o)=>{const s={sendToIframe(r){var c,i;(i=(c=C(e))==null?void 0:c.contentWindow)==null||i.postMessage(r,"*")},sendToDevtools(r){var c,i;(i=(c=C(t))==null?void 0:c.contentWindow)==null||i.postMessage(r,"*")}},a=()=>{const{codeInjected:r,codeURL:c}=k(n);if(!r){if(!c){setTimeout(a,3);return}requestAnimationFrame(()=>{s.sendToIframe({event:"CODE_UPDATE",value:c}),o({type:"CODE_INJECTED"})})}},l=r=>{var h,f;const[c,i]=vt(e,t);!c||!i||((f=(h=r.data)==null?void 0:h.includes)!=null&&f.call(h,"Debugger.enable")&&(console.log("Debugger.enable"),o({type:"Debugger.enable"}),a()),r.source===c.contentWindow?i.contentWindow.postMessage(r.data,"*"):r.source===i.contentWindow&&c.contentWindow.postMessage({event:"DEV",data:r.data},"*"))};return window.addEventListener("message",l),O(()=>window.removeEventListener("message",l)),s},Jn=(e,t)=>{const{importMap:n,isDark:o}=e,s=Ee(()=>{const a=Kn(C(o),JSON.stringify({imports:k(n)}));return URL.createObjectURL(new Blob([a],{type:"text/html"}))});return A(s,(a,l)=>{l!==a&&l&&URL.revokeObjectURL(l),t({type:"HTML_CHANGED",iframeSrc:a||""})}),O(()=>{URL.revokeObjectURL(C(s)||"")}),{iframeSrc:s}},Xn=e=>{const{isDark:t,code:n}=e,o=ge(null),s=ge(null),a=u=>{var m;return(m=u.contentDocument)==null?void 0:m.documentElement.classList.toggle("dark",C(t))},l=u=>{const m=C(o);m&&(m.src=u)},r=()=>{var u,m;(m=(u=C(o))==null?void 0:u.contentWindow)==null||m.location.reload()},c=()=>{var u,m;(m=(u=C(s))==null?void 0:u.contentWindow)==null||m.location.reload()};A(()=>k(t),u=>{const m=k(o);m&&a(m)});const[i,h]=pn((u,m)=>{switch(m.type){case"IFRAME_READY":a(m.iframe);let w=u.codeInjected;return{...u,codeInjected:w,iframeReady:!0};case"DEVTOOLS_IFRAME_READY":return{...u,devtoolsIframeReady:!0};case"DEV_LOADED":return{...u,devLoaded:!0};case"HTML_CHANGED":return l(m.iframeSrc),c(),{...u,iframeReady:!1,devtoolsIframeReady:!1,devLoaded:!1,codeInjected:!1,darkInjected:!1};case"HTML_RELOAD":return setTimeout(()=>{r(),c()}),{...u,iframeReady:!1,devtoolsIframeReady:!1,devLoaded:!1,codeInjected:!1,darkInjected:!1};case"CODE_UPDATE":return{...u,codeURL:m.codeURL};case"CODE_INJECTED":return{...u,codeInjected:!0}}return u},{iframeReady:!1,devtoolsIframeReady:!1,devLoaded:!1,codeInjected:!1,codeURL:C(n)}),{sendToDevtools:f,sendToIframe:d}=Qn(o,s,i,h);A(()=>k(n),u=>{h({type:"CODE_UPDATE",codeURL:u}),i.value.iframeReady&&requestAnimationFrame(()=>{d({event:"CODE_UPDATE",value:u}),h({type:"CODE_INJECTED"})})});const{iframeSrc:p}=Jn(e,h);return A(o,u=>{u==null||u.addEventListener("load",()=>h({type:"IFRAME_READY",iframe:u}))}),A(s,u=>{u==null||u.addEventListener("load",()=>h({type:"DEVTOOLS_IFRAME_READY",devIframe:u}))}),{iframeSrc:p,iframeRef:o,devtoolsIframeRef:s,previewState:i,dispatch:h,sendToDevtools:f,sendToIframe:d}},Zn=e=>{const{importMap:t,code:n,devtools:o,isDark:s,...a}=e,l=N(null),{iframeSrc:r,iframeRef:c,devtoolsIframeRef:i,previewState:h,dispatch:f}=Xn(e),d=Yn(),p=Ee(()=>`width: 100%; height: 100%; ${k(o)?"display: block;":"display: none;"}`),u=N(.625),m=N(null),w=(g,b)=>{const[S,T]=vt(l,m);if(!S||!T)return;let E,_;const H=S.getBoundingClientRect();E=b-H.top-T.offsetHeight/2,_=S.offsetHeight-T.offsetHeight;const kt=E/_;u.value=kt};return()=>y("div",{...a,ref:l},y(G,{styleFn:()=>{const g=k(u);return{display:"grid",height:"100%",width:"100%",gridTemplateRows:k(o)?`30px minmax(0, ${g}fr) 12px minmax(0, ${1-g}fr)`:"30px minmax(0, 1fr)"}}}),y("div",{style:"border-bottom: 1px solid;border-top: 1px solid;overflow: hidden;"},y(Ce,{title:"reload page",isDark:s,onClick:()=>f({type:"HTML_RELOAD"})},"♻️relaod")),y("iframe",{ref:c,src:r,style:"width: 100%;height: 100%;",frameBorder:0,sandbox:"allow-popups-to-escape-sandbox allow-scripts allow-popups allow-forms allow-pointer-lock allow-top-navigation allow-modals allow-same-origin"}),y("div",null,y(Gn,{ref:m,isHorizontal:!0,onResize:w})),y("iframe",{ref:i,style:p,src:d,frameBorder:"0"}))},eo=({isDark:e})=>()=>y(wn,{styleFn:()=>({fontFamily:"'Karla', system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",lineHeight:"1.5",fontWeight:"400",colorScheme:k(e)?"light dark":"dark",color:k(e)?"rgba(255, 255, 255, 0.87)":"#242424",backgroundColor:k(e)?"#333":"#fff",fontSynthesis:"none",textRendering:"optimizeLegibility","-webkitFontSmoothing":"antialiased","-moz-osxFontSmoothing":"grayscale","-webkitTextSizeAdjust":"100%",height:"100vh",width:"100vw",body:{margin:"0",minWidth:"100vw",minHeight:"100vh",width:"100%",height:"100%"},"#app":{width:"100%",height:"100%"}})});function to(){return new Worker(""+new URL("complier.worker-026b4f92.js",import.meta.url).href)}class no{constructor(){B(this,"registry",{})}registerWorker(t,n){this.registry[t]?console.warn(`Worker of type ${t} already registered.`):this.registry[t]=n}removeWorker(t){delete this.registry[t]}getWorker(t){const n=this.registry[t];if(n)return n;throw new Error(`No worker of type ${t} registered.`)}postMessage(t,n){this.getWorker(t).postMessage(n)}listenRecv(t,n){const o=this.getWorker(t);let s;const a=l=>{const{message_token:r}=l.data||{};if(r!==n)return;const c={...l.data};delete c.message_token,s(c),o.removeEventListener("message",a)};return o.addEventListener("message",a),{recv:new Promise((l,r)=>{s=l}),dispose:()=>o.removeEventListener("message",a)}}}class oo{constructor(){B(this,"registry",new no);this.initialize()}async initialize(){this.registry.registerWorker("complier",new to)}worker_caller(t,n){const o=Math.random().toString(36).slice(2),s={...n,message_token:o};return this.registry.postMessage(t,s),this.registry.listenRecv(t,o)}compileFile(t){return this.worker_caller("complier",{event:"BABEL",payload:{file:t,compile_options:{}}})}compileFiles(t){return this.worker_caller("complier",{event:"ROLLUP",payload:{files:t,compile_options:{}}})}}const qe=new oo,so=()=>{let e=null;return O(()=>e==null?void 0:e.dispose()),{compileFile(t){return e==null||e.dispose(),e=qe.compileFile(t),e.recv},compileFiles(t){return e==null||e.dispose(),e=qe.compileFiles(t),e.recv}}},ro='import("@rhjs/rh").then(({cs, ElementSource, View}) => window.dispose = () => View ? View.globalView.unmount() : (cs || ElementSource).global_source.emit("unmount"));',io=()=>{var c;const e=N(!0);fn("isDark",e);const{currentDemo:t}=bt(),n=Ee(()=>{var i;return{"@rhjs/rh":`https://unpkg.com/@rhjs/rh@${((i=t.value)==null?void 0:i.version)||"latest"}/dist/main.module.mjs`,"@rhjs/fluent-web-components":"https://unpkg.com/@rhjs/fluent-web-components@latest/dist/main.module.mjs"}}),o=N(""),s=Dn(o,{type:"text/javascript"}),a=N(((c=t.value)==null?void 0:c.code)||""),l=so(),r=async()=>{const i=C(a);if(!i)return;const h=await l.compileFile({filename:"main.tsx",source:i});o.value=`${h.compiled}
${ro}`};return ft(r),A(t,i=>{i&&a.value!==i.code&&(a.value=i.code,r())}),()=>y("div",null,y(eo,{isDark:e}),y(G,{styleFn:()=>({position:"relative",display:"flex",flexFlow:"column",width:"100%",height:"100%",maxWidth:"100vw",maxHeight:"100vh",overflow:"hidden"})}),y("header",{style:"height: 30px; width: 100%;"},y(Hn,{isDark:e})),y("div",{style:"flex: 1;"},y(G,{styleFn:()=>({position:"relative",display:"flex",flexFlow:"row",width:"100%",height:"100%"})}),y(Mn,{style:"flex: 1;",value:a,onChange:i=>a.value=i,onSave:r,isDark:e}),y(Zn,{style:"flex: 1;",importMap:n,code:s,devtools:!0,isDark:e})))};an("#app",io);
