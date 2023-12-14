var En=Object.defineProperty;var jn=(n,e,t)=>e in n?En(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var B=(n,e,t)=>(jn(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function Dn(n,e){const t=Object.create(null),o=n.split(",");for(let s=0;s<o.length;s++)t[o[s]]=!0;return e?s=>!!t[s.toLowerCase()]:s=>!!t[s]}const Ln=()=>{},On=Object.assign,Mn=Object.prototype.hasOwnProperty,le=(n,e)=>Mn.call(n,e),z=Array.isArray,ae=n=>Ke(n)==="[object Map]",Nn=n=>typeof n=="function",ue=n=>typeof n=="symbol",he=n=>n!==null&&typeof n=="object",Rn=Object.prototype.toString,Ke=n=>Rn.call(n),An=n=>Ke(n).slice(8,-1),Ee=n=>typeof n=="string"&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Q=(n,e)=>!Object.is(n,e);let P;class Pn{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=P,!e&&P&&(this.index=(P.scopes||(P.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=P;try{return P=this,e()}finally{P=t}}}on(){P=this}off(){P=this.parent}stop(e){if(this._active){let t,o;for(t=0,o=this.effects.length;t<o;t++)this.effects[t].stop();for(t=0,o=this.cleanups.length;t<o;t++)this.cleanups[t]();if(this.scopes)for(t=0,o=this.scopes.length;t<o;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Vn(n){return new Pn(n)}function Xe(n,e=P){e&&e.active&&e.effects.push(n)}const je=n=>{const e=new Set(n);return e.w=0,e.n=0,e},en=n=>(n.w&$)>0,nn=n=>(n.n&$)>0,ve=new WeakMap;let Z=0,$=1;const ge=30;let R;const H=Symbol(""),ye=Symbol("");let we=class{constructor(e,t=null,o){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Xe(this,o)}run(){if(!this.active)return this.fn();let e=R,t=U;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=R,R=this,U=!0,$=1<<++Z,Z<=ge?(({deps:o})=>{if(o.length)for(let s=0;s<o.length;s++)o[s].w|=$})(this):Re(this),this.fn()}finally{Z<=ge&&(o=>{const{deps:s}=o;if(s.length){let r=0;for(let l=0;l<s.length;l++){const i=s[l];en(i)&&!nn(i)?i.delete(o):s[r++]=i,i.w&=~$,i.n&=~$}s.length=r}})(this),$=1<<--Z,R=this.parent,U=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){R===this?this.deferStop=!0:this.active&&(Re(this),this.onStop&&this.onStop(),this.active=!1)}};function Re(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}function De(n,e){n.effect instanceof we&&(n=n.effect.fn);const t=new we(n);e&&(On(t,e),e.scope&&Xe(t,e.scope)),e&&e.lazy||t.run();const o=t.run.bind(t);return o.effect=t,o}let U=!0;const tn=[];function on(){tn.push(U),U=!1}function sn(){const n=tn.pop();U=n===void 0||n}function N(n,e,t){if(U&&R){let o=ve.get(n);o||ve.set(n,o=new Map);let s=o.get(t);s||o.set(t,s=je()),rn(s)}}function rn(n,e){let t=!1;Z<=ge?nn(n)||(n.n|=$,t=!en(n)):t=!n.has(R),t&&(n.add(R),R.deps.push(n))}function F(n,e,t,o,s,r){const l=ve.get(n);if(!l)return;let i=[];if(e==="clear")i=[...l.values()];else if(t==="length"&&z(n)){const h=Number(o);l.forEach((c,p)=>{(p==="length"||!ue(p)&&p>=h)&&i.push(c)})}else switch(t!==void 0&&i.push(l.get(t)),e){case"add":z(n)?Ee(t)&&i.push(l.get("length")):(i.push(l.get(H)),ae(n)&&i.push(l.get(ye)));break;case"delete":z(n)||(i.push(l.get(H)),ae(n)&&i.push(l.get(ye)));break;case"set":ae(n)&&i.push(l.get(H))}if(i.length===1)i[0]&&be(i[0]);else{const h=[];for(const c of i)c&&h.push(...c);be(je(h))}}function be(n,e){const t=z(n)?n:[...n];for(const o of t)o.computed&&Ae(o);for(const o of t)o.computed||Ae(o)}function Ae(n,e){(n!==R||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const In=Dn("__proto__,__v_isRef,__isVue"),an=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(ue)),Pe=$n();function $n(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const o=x(this);for(let r=0,l=this.length;r<l;r++)N(o,0,r+"");const s=o[e](...t);return s===-1||s===!1?o[e](...t.map(x)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){on();const o=x(this)[e].apply(this,t);return sn(),o}}),n}function zn(n){const e=x(this);return N(e,0,n),e.hasOwnProperty(n)}let cn=class{constructor(e=!1,t=!1){this._isReadonly=e,this._shallow=t}get(e,t,o){const s=this._isReadonly,r=this._shallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return o===(s?r?Xn:un:r?Kn:dn).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(o)?e:void 0;const l=z(e);if(!s){if(l&&le(Pe,t))return Reflect.get(Pe,t,o);if(t==="hasOwnProperty")return zn}const i=Reflect.get(e,t,o);return(ue(t)?an.has(t):In(t))?i:(s||N(e,0,t),r?i:L(i)?l&&Ee(t)?i:i.value:he(i)?s?K(i):hn(i):i)}};class Un extends cn{constructor(e=!1){super(!1,e)}set(e,t,o,s){let r=e[t];if(de(r)&&L(r)&&!L(o))return!1;if(!this._shallow&&(mn(o)||de(o)||(r=x(r),o=x(o)),!z(e)&&L(r)&&!L(o)))return r.value=o,!0;const l=z(e)&&Ee(t)?Number(t)<e.length:le(e,t),i=Reflect.set(e,t,o,s);return e===x(s)&&(l?Q(o,r)&&F(e,"set",t,o):F(e,"add",t,o)),i}deleteProperty(e,t){const o=le(e,t),s=Reflect.deleteProperty(e,t);return s&&o&&F(e,"delete",t,void 0),s}has(e,t){const o=Reflect.has(e,t);return ue(t)&&an.has(t)||N(e,0,t),o}ownKeys(e){return N(e,0,z(e)?"length":H),Reflect.ownKeys(e)}}let Fn=class extends cn{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}};const Hn=new Un,Wn=new Fn,Le=n=>n,pe=n=>Reflect.getPrototypeOf(n);function ne(n,e,t=!1,o=!1){const s=x(n=n.__v_raw),r=x(e);t||(Q(e,r)&&N(s,0,e),N(s,0,r));const{has:l}=pe(s),i=o?Le:t?Oe:J;return l.call(s,e)?i(n.get(e)):l.call(s,r)?i(n.get(r)):void(n!==s&&n.get(e))}function te(n,e=!1){const t=this.__v_raw,o=x(t),s=x(n);return e||(Q(n,s)&&N(o,0,n),N(o,0,s)),n===s?t.has(n):t.has(n)||t.has(s)}function oe(n,e=!1){return n=n.__v_raw,!e&&N(x(n),0,H),Reflect.get(n,"size",n)}function Ve(n){n=x(n);const e=x(this);return pe(e).has.call(e,n)||(e.add(n),F(e,"add",n,n)),this}function Ie(n,e){e=x(e);const t=x(this),{has:o,get:s}=pe(t);let r=o.call(t,n);r||(n=x(n),r=o.call(t,n));const l=s.call(t,n);return t.set(n,e),r?Q(e,l)&&F(t,"set",n,e):F(t,"add",n,e),this}function $e(n){const e=x(this),{has:t,get:o}=pe(e);let s=t.call(e,n);s||(n=x(n),s=t.call(e,n)),o&&o.call(e,n);const r=e.delete(n);return s&&F(e,"delete",n,void 0),r}function ze(){const n=x(this),e=n.size!==0,t=n.clear();return e&&F(n,"clear",void 0,void 0),t}function se(n,e){return function(t,o){const s=this,r=s.__v_raw,l=x(r),i=e?Le:n?Oe:J;return!n&&N(l,0,H),r.forEach((h,c)=>t.call(o,i(h),i(c),s))}}function re(n,e,t){return function(...o){const s=this.__v_raw,r=x(s),l=ae(r),i=n==="entries"||n===Symbol.iterator&&l,h=n==="keys"&&l,c=s[n](...o),p=t?Le:e?Oe:J;return!e&&N(r,0,h?ye:H),{next(){const{value:y,done:u}=c.next();return u?{value:y,done:u}:{value:i?[p(y[0]),p(y[1])]:p(y),done:u}},[Symbol.iterator](){return this}}}}function I(n){return function(...e){return n!=="delete"&&(n==="clear"?void 0:this)}}function Bn(){const n={get(s){return ne(this,s)},get size(){return oe(this)},has:te,add:Ve,set:Ie,delete:$e,clear:ze,forEach:se(!1,!1)},e={get(s){return ne(this,s,!1,!0)},get size(){return oe(this)},has:te,add:Ve,set:Ie,delete:$e,clear:ze,forEach:se(!1,!0)},t={get(s){return ne(this,s,!0)},get size(){return oe(this,!0)},has(s){return te.call(this,s,!0)},add:I("add"),set:I("set"),delete:I("delete"),clear:I("clear"),forEach:se(!0,!1)},o={get(s){return ne(this,s,!0,!0)},get size(){return oe(this,!0)},has(s){return te.call(this,s,!0)},add:I("add"),set:I("set"),delete:I("delete"),clear:I("clear"),forEach:se(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=re(s,!1,!1),t[s]=re(s,!0,!1),e[s]=re(s,!1,!0),o[s]=re(s,!0,!0)}),[n,t,e,o]}const[qn,Gn,Yn,Zn]=Bn();function ln(n,e){const t=e?n?Zn:Yn:n?Gn:qn;return(o,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?o:Reflect.get(le(t,s)&&s in o?t:o,s,r)}const Jn={get:ln(!1,!1)},Qn={get:ln(!0,!1)},dn=new WeakMap,Kn=new WeakMap,un=new WeakMap,Xn=new WeakMap;function hn(n){return de(n)?n:pn(n,!1,Hn,Jn,dn)}function K(n){return pn(n,!0,Wn,Qn,un)}function pn(n,e,t,o,s){if(!he(n)||n.__v_raw&&(!e||!n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const l=(i=n).__v_skip||!Object.isExtensible(i)?0:function(c){switch(c){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}(An(i));var i;if(l===0)return n;const h=new Proxy(n,l===2?o:t);return s.set(n,h),h}function de(n){return!(!n||!n.__v_isReadonly)}function mn(n){return!(!n||!n.__v_isShallow)}function x(n){const e=n&&n.__v_raw;return e?x(e):n}const J=n=>he(n)?hn(n):n,Oe=n=>he(n)?K(n):n;function fn(n){U&&R&&rn((n=x(n)).dep||(n.dep=je()))}function vn(n,e){const t=(n=x(n)).dep;t&&be(t)}function L(n){return!(!n||n.__v_isRef!==!0)}function M(n){return gn(n,!1)}function ke(n){return gn(n,!0)}function gn(n,e){return L(n)?n:new et(n,e)}class et{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:x(e),this._value=t?e:J(e)}get value(){return fn(this),this._value}set value(e){const t=this.__v_isShallow||mn(e)||de(e);e=t?e:x(e),Q(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:J(e),vn(this))}}function k(n){return L(n)?n.value:n}class nt{constructor(e,t,o,s){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new we(e,()=>{this._dirty||(this._dirty=!0,vn(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=o}get value(){const e=x(this);return fn(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function tt(n,e,t=!1){let o,s;const r=Nn(n);return r?(o=n,s=Ln):(o=n.get,s=n.set),new nt(o,s,r||!s,t)}var Ue,Fe,ot=(Ue=function(n){var e=Object.prototype.hasOwnProperty,t="~";function o(){}function s(h,c,p){this.fn=h,this.context=c,this.once=p||!1}function r(h,c,p,y,u){if(typeof p!="function")throw new TypeError("The listener must be a function");var a=new s(p,y||h,u),d=t?t+c:c;return h._events[d]?h._events[d].fn?h._events[d]=[h._events[d],a]:h._events[d].push(a):(h._events[d]=a,h._eventsCount++),h}function l(h,c){--h._eventsCount==0?h._events=new o:delete h._events[c]}function i(){this._events=new o,this._eventsCount=0}Object.create&&(o.prototype=Object.create(null),new o().__proto__||(t=!1)),i.prototype.eventNames=function(){var h,c,p=[];if(this._eventsCount===0)return p;for(c in h=this._events)e.call(h,c)&&p.push(t?c.slice(1):c);return Object.getOwnPropertySymbols?p.concat(Object.getOwnPropertySymbols(h)):p},i.prototype.listeners=function(h){var c=this._events[t?t+h:h];if(!c)return[];if(c.fn)return[c.fn];for(var p=0,y=c.length,u=new Array(y);p<y;p++)u[p]=c[p].fn;return u},i.prototype.listenerCount=function(h){var c=this._events[t?t+h:h];return c?c.fn?1:c.length:0},i.prototype.emit=function(h,c,p,y,u,a){var d=t?t+h:h;if(!this._events[d])return!1;var m,g,f=this._events[d],b=arguments.length;if(f.fn){switch(f.once&&this.removeListener(h,f.fn,void 0,!0),b){case 1:return f.fn.call(f.context),!0;case 2:return f.fn.call(f.context,c),!0;case 3:return f.fn.call(f.context,c,p),!0;case 4:return f.fn.call(f.context,c,p,y),!0;case 5:return f.fn.call(f.context,c,p,y,u),!0;case 6:return f.fn.call(f.context,c,p,y,u,a),!0}for(g=1,m=new Array(b-1);g<b;g++)m[g-1]=arguments[g];f.fn.apply(f.context,m)}else{var C,_=f.length;for(g=0;g<_;g++)switch(f[g].once&&this.removeListener(h,f[g].fn,void 0,!0),b){case 1:f[g].fn.call(f[g].context);break;case 2:f[g].fn.call(f[g].context,c);break;case 3:f[g].fn.call(f[g].context,c,p);break;case 4:f[g].fn.call(f[g].context,c,p,y);break;default:if(!m)for(C=1,m=new Array(b-1);C<b;C++)m[C-1]=arguments[C];f[g].fn.apply(f[g].context,m)}}return!0},i.prototype.on=function(h,c,p){return r(this,h,c,p,!1)},i.prototype.once=function(h,c,p){return r(this,h,c,p,!0)},i.prototype.removeListener=function(h,c,p,y){var u=t?t+h:h;if(!this._events[u])return this;if(!c)return l(this,u),this;var a=this._events[u];if(a.fn)a.fn!==c||y&&!a.once||p&&a.context!==p||l(this,u);else{for(var d=0,m=[],g=a.length;d<g;d++)(a[d].fn!==c||y&&!a[d].once||p&&a[d].context!==p)&&m.push(a[d]);m.length?this._events[u]=m.length===1?m[0]:m:l(this,u)}return this},i.prototype.removeAllListeners=function(h){var c;return h?this._events[c=t?t+h:h]&&l(this,c):(this._events=new o,this._eventsCount=0),this},i.prototype.off=i.prototype.removeListener,i.prototype.addListener=i.prototype.on,i.prefixed=t,i.EventEmitter=i,n.exports=i},Ue(Fe={exports:{}}),Fe.exports);class st{constructor(e){this.data=void 0,this.next=void 0,this.data=e,this.next=null}}class rt{constructor(){this.head=void 0,this.tail=void 0,this.size=void 0,this.head=null,this.tail=null,this.size=0}enqueue(e){let t=new st(e);this.isEmpty()?(this.head=t,this.tail=t):(this.tail&&(this.tail.next=t),this.tail=t),this.size++}dequeue(){if(this.isEmpty())return null;{var e,t;let o=((e=this.head)==null?void 0:e.data)||null;return this.head=((t=this.head)==null?void 0:t.next)||null,this.isEmpty()&&(this.tail=null),this.size--,o}}remove(e){let t=this.head,o=null;for(;t;){if(t.data===e)return o?(o.next=t.next,t.next||(this.tail=o)):(this.head=t.next,this.head||(this.tail=null)),void this.size--;o=t,t=t.next}}isEmpty(){return this.size===0}}class yn{size(){return 0}async runTask(e){return new Promise(t=>{setTimeout(()=>{t(e({timeRemaining:()=>0}))},0)})}buildTask(e){let t;return{cancel:()=>{},promise:this.runTask(e).then(o=>(t=o,o)),state:()=>({isCancelled:!1,isDone:!0,result:t})}}}let xe=typeof requestIdleCallback=="function"&&window.MessageChannel?new class{constructor(){this.frameDeadline=void 0,this.taskQueue=void 0,this.channel=void 0,this.messagePort=void 0,this.triggerPort=void 0,this.rafTriggered=void 0,this.activeFrameTime=33.33,this.frameDeadline=performance.now()+this.activeFrameTime,this.taskQueue=new rt,this.channel=new MessageChannel,this.messagePort=this.channel.port1,this.triggerPort=this.channel.port2,this.rafTriggered=!1,this.messagePort.onmessage=()=>{this.handleTask()}}size(){return this.taskQueue.size}timeRemaining(){return Math.max(0,this.frameDeadline-performance.now())}execTask(n){return n({timeRemaining:()=>this.timeRemaining()})}handleTask(){if(this.timeRemaining()<=0)return void this.trigger();let n=this.taskQueue.dequeue();for(;n;)try{this.execTask(n)}finally{if(this.timeRemaining()<=0)break;n=this.taskQueue.dequeue()}this.trigger()}trigger(){this.rafTriggered||this.taskQueue.size!==0&&(this.rafTriggered=!0,requestAnimationFrame(n=>{this.frameDeadline=n+this.activeFrameTime,this.rafTriggered=!1,n<this.frameDeadline&&this.triggerPort.postMessage(null)}))}async runTask(n){return!this.rafTriggered&&performance.now()<this.frameDeadline?this.execTask(n):new Promise((e,t)=>{this.taskQueue.enqueue(()=>{try{e(this.execTask(n))}catch(o){t(o)}}),this.trigger()})}buildTask(n){let e,t,o=!1,s=!1;const r=new Promise((i,h)=>{t=i}),l=i=>{if(!o)return e=n(i),s=!0,t(e),e;t(void 0)};return this.taskQueue.enqueue(l),this.trigger(),{cancel:()=>{o=!0,t(void 0),this.taskQueue.size<=5e3&&this.taskQueue.remove(l)},promise:r,state:()=>({isCancelled:o,isDone:s,result:e})}}}:new yn;localStorage.getItem("@rhjs/IdleSchedulerAsync/enable")&&(xe=new yn),localStorage.getItem("@rhjs/IdleSchedulerSync/enable")&&(xe=new class{size(){return 0}async runTask(n){return Promise.resolve(n({timeRemaining:()=>0}))}buildTask(n){let e;return{cancel:()=>{},promise:this.runTask(n).then(t=>(e=t,t)),state:()=>({isCancelled:!1,isDone:!0,result:e})}}});class it{constructor(){this.tasks=new Map}runTask(e,t){const o=this.tasks.get(e);o&&o.cancel();const s=xe.buildTask(t);return this.tasks.set(e,s),s.promise.finally(()=>{this.tasks.get(e)===s&&this.tasks.delete(e)}),s}dispose(){this.tasks.forEach(e=>e.cancel()),this.tasks.clear()}}const at=Object.prototype.hasOwnProperty;function ce(n,e){if(Object.is(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;const t=Object.keys(n),o=Object.keys(e);if(t.length!==o.length)return!1;for(let s=0;s<t.length;s++)if(!at.call(e,t[s])||!Object.is(n[t[s]],e[t[s]]))return!1;return!0}function q(n,...e){on();try{return n.apply(void 0,e)}finally{sn()}}const E=n=>typeof n=="function"?q(n):q(k,n),_e=n=>typeof n=="function"?n():L(n)?k(n):Array.isArray(n)?n.map(_e):typeof n=="object"?Object.fromEntries(Object.entries(n).map(([e,t])=>[e,_e(t)])):k(n),He=n=>n instanceof Element&&typeof n.style=="object",We=n=>{var e,t,o;return{node:n,view:v.anchor2view.get(n),key:(e=v.anchor2view.get(n))==null?void 0:e.key,keyed:(o=(t=v.anchor2view.get(n))==null?void 0:t.key,o!=null)}};class v{static getNextIndex(){return++v.index}static createAnchor(){const e=document.createTextNode("");return e[v.symbols.ANCHOR]=!0,e}static isAnchor(e){return v.anchor2view.has(e)}constructor(e=v.createAnchor()){this.__index=v.getNextIndex(),this.scheduler=new it,this.events=new ot,this.status="created",this.anchor=void 0,this.children=[],this.context={},this.parentView=v.topView()||v.globalView,this.is_container=!1,this.has_outside_effect=!1,this.key=void 0,this.effectScope=Vn(!0),this._fragment=void 0,this.first_render=!0,this.zoneFlag="",this.anchor=e,e.__view=this,v.anchor2view.set(this.anchor,this),this.events.on("error",t=>{var o;this.events.listenerCount("error")===1&&((o=this.parentView)==null||o.events.emit("error",t))}),this.events.on("throw",t=>{var o;this.events.listenerCount("throw")===1&&((o=this.parentView)==null||o.events.emit("throw",t))})}initialize(){this.status==="created"&&(this.events.emit("init_before"),this.events.emit("init"),this.status="inited",this.events.emit("init_after"))}querySelector(e){for(const t of this.children){if(t instanceof Element&&t.matches(e))return t;const o=v.anchor2view.get(t);if(o){const s=o.querySelector(e);if(s)return s}}return null}querySelectorAll(e){const t=[];for(const o of this.children){o instanceof Element&&o.matches(e)&&t.push(o);const s=v.anchor2view.get(o);if(s){const r=s.querySelectorAll(e);t.push(...r)}}return t}getChildrenParentNode(){return this.anchor.parentNode}mountView(e,t){this.anchor!==t&&e.insertBefore(this.anchor,t||null)}mount(e,t,o=!1){this.initialize(),this.events.emit(o?"move_before":"mount_before",e,this.parentView),this.mountView(e,t),this.anchor instanceof Text&&this.mountChildren(e,o),o?this.events.emit("move_after",e,this.parentView):(this.events.emit("mounted",e,this.parentView),this.status="mounted",this.events.emit("mount_after",e,this.parentView))}getChildrenFragment(){const e=this._fragment=this._fragment||document.createDocumentFragment();for(const t of this.children)e.appendChild(t);return e}mountChildren(e,t=!1){const o=this.getChildrenFragment();e.insertBefore(o,this.anchor===e?null:this.anchor);for(const s of this.children){const r=v.anchor2view.get(s);if(r){if(r===this)throw new Error("Cannot mount children to self");r.parentView=this,r.mount(e,s,t)}}}updateChildren(e){const t=e.flat(64).map(r=>function(l){if(l==null)return null;if(l instanceof Node)return l;if(L(l)||typeof l=="function"){const i=()=>L(l)?k(l):l();return w(()=>i)}return document.createTextNode(String(l))}(r)).filter(Boolean);if(this.children.length===0&&t.length===0)return;const o=function(r,l){const i=[],h=r.map(We),c=l.map(We);if(h.length===0)return c.map((u,a)=>({type:"remove",node:u,index:a}));if(c.length===0)return h.map((u,a)=>({type:"insert",index:a,node:u}));for(let u=0;u<Math.max(h.length,c.length);u++){var p,y;const a=h[u],d=c[u];if((a==null?void 0:a.node)===(d==null?void 0:d.node)||a!=null&&a.view&&d!=null&&d.view&&(a==null?void 0:a.view)===(d==null?void 0:d.view)||a!=null&&a.keyed&&d!=null&&d.keyed)continue;if(a&&d&&!a.view&&!d.view&&a.node instanceof Text&&d.node instanceof Text){a.node.textContent!==d.node.textContent&&i.push({type:"text",oldNode:d,newNode:a,index:u});continue}const m=()=>{a&&!a.keyed&&i.push({type:"insert",index:u,node:a}),d&&!d.keyed&&(h.some(g=>g.node===d.node)||i.push({type:"remove",index:u,node:d}))};if(a==null||!a.view||d==null||!d.view||a.view!==d.view)if(a!=null&&(p=a.view)!=null&&p.has_outside_effect||d!=null&&(y=d.view)!=null&&y.has_outside_effect)m();else if(a!=null&&a.view&&(d==null||!d.view)||(a==null||!a.view)&&d!=null&&d.view)m();else if(a&&d)if(a||d)if(a.keyed||d.keyed)m();else if(a.view||d.view)if(a.view&&d.view){const g=d.view,f=a.view,b=g instanceof A,C=f instanceof A;if(b&&!C||!b&&C){m();continue}if(b&&C){if(g.elem.nodeName!==f.elem.nodeName){m();continue}(g.elem.nodeName!==f.elem.nodeName||!ce(g.domProps,f.domProps)||!ce(g.domChildren,f.domChildren))&&i.push({type:"dom-update",oldNode:d,newNode:a,index:u});continue}const _=D.view2component.get(g),T=D.view2component.get(f);if(!_&&T||_&&!T){m();continue}if(_!=null&&_._component_type&&T!=null&&T._component_type&&_._component_type!==T._component_type){m();continue}if(!_||!T){m();continue}!ce(_.props,T.props)&&i.push({type:"view-patch",oldNode:d,newNode:a,index:u}),i.push({type:"patch-children",oldNode:d,newNode:a,index:u,oldComponent:_,newComponent:T})}else m();else m();else m();else m()}for(let u=0;u<h.length;u++){const a=h[u];if(a==null||!a.keyed)continue;const d=c.findIndex(m=>m.key===a.key);i.push(d!==u?d!==-1?{type:"move",to:u,node:c[d],newNode:a}:{type:"insert",index:u,node:a}:a.view instanceof A?{type:"dom-update",oldNode:c[d],newNode:a,index:u}:{type:"view-patch",oldNode:c[d],newNode:a,index:u})}for(let u=0;u<c.length;u++){const a=c[u];a!=null&&a.keyed&&h.findIndex(d=>d.key===a.key)===-1&&i.push({type:"remove",index:u,node:a})}return i}(t,this.children);if(o.length===0||this.status==="unmounted")return;const s=()=>{if(this.status==="unmounted")return;this.events.emit("patch_before");const r=this.patchAll(o,t);this.children=r.filter(Boolean)};this.first_render?(s(),this.events.emit("patch_after"),this.first_render=!1):this.scheduler.runTask("patch-children",s).promise.then(()=>{this.events.emit("patch_after")})}patchAll(e,t){const o=t.slice();this.children.forEach((u,a)=>{o.length>a&&(o[a]=u)}),e.forEach(u=>{switch(u.type){case"move":o[u.to]=u.node.node;break;case"insert":o[u.index]=u.node.node;break;case"text":case"dom-update":o[u.index]=u.oldNode.node;break;case"view-patch":o[u.index]=u.newNode.node}});const s=this.getChildrenParentNode(),r={},l=u=>{if(!s||this.children.length===0)return null;let a=u;for(;o.length>a;){if(a in r)return r[a];const d=o[a];if(d&&(d==null?void 0:d.parentNode)===s)return r[a]=d,d;a++}return r[a]=null,null},i=(u,a,d=!1)=>{const m=l(a+1),g=(m==null?void 0:m.parentNode)===s?m:this.anchor instanceof Text?this.anchor:null;u.view&&(u.view.parentView.children=u.view.parentView.children.filter(f=>f!==u.node)),s&&(u.view?(u.view.parentView=this,u.view.mount(s,g,d)):s.insertBefore(u.node,g))},h=u=>{var a;u.view?u.view.unmount():(a=u.node.parentNode)==null||a.removeChild(u.node)},c=(u,a,d)=>{i(a,d),h(u)},p=(u,a)=>{u.domChildren=a.domChildren,u.domProps=a.domProps,u.updateDom(),a!==u&&(a.children=[],a.unmount())},y=(u,a)=>{const d=u.view,m=a.view;if(d instanceof A&&m instanceof A)return void p(d,m);const g=D.view2component.get(d),f=D.view2component.get(m);g&&f&&g._component_type===f._component_type?(g.props=f.props,g.state=f.state,g.children=f.children,g.update()):d.updateChildren(m.children)};for(const u of e)switch(u.type){case"move":{const{to:a,node:d,newNode:m}=u;d.view instanceof v&&m.view instanceof v&&y(d,m),i(d,a,!0),h(m);break}case"insert":{const{node:a,index:d}=u;i(a,d);break}case"remove":break;case"view-patch":{const{newNode:a,oldNode:d,index:m}=u,g=D.view2component.get(a.view),f=D.view2component.get(d.view);if(g&&f&&g._component_type===f._component_type){y(d,a),h(a),o[u.index]=u.oldNode.node;break}c(d,a,m);break}case"dom-update":{const{newNode:a,oldNode:d}=u;p(d.view,a.view);break}case"text":{const{newNode:a,oldNode:d}=u;d.node.textContent=a.node.textContent;break}case"patch-children":{const{oldComponent:a,newComponent:d}=u;a.children=d.children,a.update();break}}return e.forEach(u=>{if(u.type!=="remove")return;const{node:a}=u;h(a)}),o}remove(){for(const t of this.children){var e;(e=t.parentNode)==null||e.removeChild(t);const o=v.anchor2view.get(t);o&&o.remove()}}effect(e,t="unmounted"){return this.effectScope.run(()=>{const o=De(e,{lazy:!1});return o.effect.deps.length===0?o.effect.stop():this.events.once(t,()=>o.effect.stop()),o})}unmount(){var e;this.events.emit("unmount_before"),this.scheduler.dispose(),(e=this.anchor.parentNode)==null||e.removeChild(this.anchor),this.unmountChildren(),this.status="unmounted",this.events.emit("unmounted"),this.events.emit("unmount_after"),this.events.removeAllListeners(),this.effectScope.stop()}unmountChildren(){this.remove();for(const e of this.children){const t=v.anchor2view.get(e);t&&t.unmount()}}zone(e,t="setup"){const o=this.zoneFlag;v.pushView(this),this.zoneFlag=t;try{return e()}finally{this.zoneFlag=o,v.popView()}}getContextValue(e,t){let o=this;for(;o;){const s=o.context;if(e in s){const r=s[e];if(!t||t(r))return r}o=o.parentView}return v.symbols.NONE}setContextValue(e,t){let o=this;for(;o;){if(o.is_container)return void(o.context[e]=t);o=o.parentView}throw new Error(`Cannot set context value: ${String(e)}`)}}v.symbols={NONE:Symbol("NONE"),DIRECTIVES:Symbol("DIRECTIVES"),ANCHOR:Symbol("ANCHOR")},v.isNone=n=>n===v.symbols.NONE,v.index=0,v.anchor2view=new WeakMap,v.stack=[],v.topView=()=>v.stack[v.stack.length-1],v.pushView=n=>v.stack.push(n),v.popView=()=>v.stack.pop(),v.globalView=new v,v.stack.push(v.globalView),v.globalView.is_container=!0;class A extends v{constructor(e,t,o){const s=e instanceof Node?e:document.createElement(e);super(s),this.domProps=void 0,this.domChildren=void 0,this.elem=void 0,this.props={},this.propsCleanups={},this.domProps=t,this.domChildren=o,this.elem=s,this.key=t.key,delete t.key,v.anchor2view.set(this.elem,this),this.events.once("init_before",()=>{this.updateChildren(this.domChildren),this.updateDomProps(this.domProps)})}mountView(e,t){this.elem!==t&&e.insertBefore(this.elem,t||null)}querySelector(e){return this.elem instanceof Element&&this.elem.matches(e)?this.elem:super.querySelector(e)}querySelectorAll(e){const t=[];return this.elem instanceof Element&&this.elem.matches(e)&&t.push(this.elem),t.push(...super.querySelectorAll(e)),t}getChildrenParentNode(){return this.elem}mountChildren(e,t=!1){super.mountChildren(this.elem,t)}unmount(){var e;(e=this.elem.parentNode)==null||e.removeChild(this.elem),Object.values(this.propsCleanups).forEach(t=>t()),this.propsCleanups={},super.unmount()}updateDom(){this.events.emit("update_before");try{this.updateChildren(this.domChildren),this.updateDomProps(this.domProps),this.events.emit("updated")}finally{this.events.emit("update_after")}}updateDomProps(e){if(ce(e,this.props))return;const t=this.diffProps(e,this.props);if(t.length===0)return;const o=()=>{if(this.status!=="unmounted")for(const s of t){const{type:r,key:l,value:i}=s;switch(r){case"patch":this.patchProp(l,i),this.props[l]=i;break;case"remove":this.cleanupProp(l),delete this.props[l]}}};this.first_render?o():this.scheduler.runTask("patch-task",o)}addPropCleanup(e,t){const o=this.propsCleanups[e];this.propsCleanups[e]=()=>{o==null||o(),t()}}cleanupProp(e){var t,o;(t=(o=this.propsCleanups)[e])==null||t.call(o),delete this.propsCleanups[e]}patchProp(e,t){if(this.cleanupProp(e),this.matchDirectives(e,t),e==="key"||e.startsWith("$")||e.startsWith("_"))return;const o=this.elem;if(e==="ref")return L(t)?t.value=o:typeof t=="function"&&t(o),void this.addPropCleanup(e,()=>{L(t)?t.value=null:typeof t=="function"&&t(null)});if(o instanceof Element)if(e.startsWith("on")){const s=e.slice(2).toLowerCase();o.addEventListener(s,t);const r=()=>o.removeEventListener(s,t);this.events.once("unmounted",r),this.addPropCleanup(e,()=>{this.events.off("unmounted",r),o.removeEventListener(s,t)})}else{const s=this.effect(()=>{const r=this.elem;if(!(r instanceof Element))return;const l=_e(t);((i,h,c)=>{switch(h){case"className":case"class":{let y="";y=Array.isArray(c)?c.join(" "):typeof c=="object"?Object.entries(c).filter(([u,a])=>!!a).map(([u])=>u).join(" "):String(c),i.setAttribute("class",y);break}case"style":if(!He(i))break;typeof c=="object"?Object.entries(c).forEach(([y,u])=>i.style[y]=u):i.style.cssText=String(c);break;case"value":"value"in i&&(i.value=c),i.setAttribute(h,String(c));break;default:if(typeof(p=c)!="boolean"&&(typeof p!="string"||p!==""&&p.toLowerCase()!=="true"&&p.toLowerCase()!=="false"))return void i.setAttribute(h,String(c));(typeof c=="boolean"?c:typeof c=="string"?c.toLowerCase()!=="false":c)?i.setAttribute(h,""):i.hasAttribute(h)&&i.removeAttribute(h)}var p})(r,e,l)});this.addPropCleanup(e,()=>((r,l)=>{switch(l){case"className":case"class":r.removeAttribute("class");break;case"style":if(!He(r))break;r.style.cssText="";break;default:r.removeAttribute(l)}})(o,e)),this.addPropCleanup(e,()=>s==null?void 0:s.effect.stop())}}diffProps(e,t){const o=[];return Object.entries(e).forEach(([s,r])=>{Object.is(t[s],r)||o.push({type:"patch",key:s,value:r})}),Object.entries(t).forEach(([s,r])=>{s in e||o.push({type:"remove",key:s,value:r})}),o}matchDirectives(e,t){const o=this.getContextValue(v.symbols.DIRECTIVES,u=>!(u==null||!u[e]));if(!o)return;const s=o[e];if(!s)return;const{mounted:r,unmounted:l,updated:i}=s,h=u=>()=>{u&&this.effectScope.run(()=>{const a=this.zone(()=>u(this.elem,t,this));a&&this.addPropCleanup(e,a)})},c=h(r),p=h(l),y=h(i);this.status!=="unmounted"?(this.events.once("unmounted",p,"directive"),this.status==="mounted"?(y(),c()):this.events.once("mounted",c,"directive"),this.events.on("updated",y,"directive")):p()}}class D{constructor(){this._component_type=void 0,this.renderBuilder=void 0,this.render=void 0,this.update=void 0,this.view=new v,this.props=void 0,this.state=void 0,this.children=[];const{view:e}=this;e.is_container=!0,e.events.once("unmounted",()=>this.dispose()),e.events.once("init_after",()=>{e.effectScope.run(()=>{this.update=De(this._update.bind(this),{lazy:!1,onStop:()=>e.events.emit("render_stop"),onTrack:t=>e.events.emit("render_tracked",t),onTrigger:t=>e.events.emit("render_triggered",t)})})}),D.view2component.set(this.view,this)}patch(e=this.props,t=this.state,o=this.children){this.props=e||this.props,this.state=t||this.state,this.children=o||this.children,this.update()}_update(){const{view:e}=this;e.events.emit("update_before");try{const t=e.effectScope.run(()=>e.zone(()=>this.render(this.props,this.state,this.children),"render"));q(()=>e.updateChildren(Array.isArray(t)?t:[t])),e.events.emit("updated")}catch(t){setTimeout(()=>{e.events.emit("error",t)}),console.error(t)}finally{e.events.emit("update_after")}}dispose(){var e;(e=this.update)==null||e.effect.stop()}}D.view2component=new WeakMap;const ct=(n,e,t)=>(typeof n=="function"?(s=>(r,l)=>{const i=new D;return i.props=r||{},i.state={},i.children=l,i.view.key=r.key,i.view.events.once("init_before",()=>{i.render=i.render||i.view.zone(()=>s(i.props,i.state,i.children))}),i._component_type=s,i.renderBuilder=()=>i.view.zone(()=>s(i.props,i.state,i.children)),i})(n):(s=>{const{setup:r,render:l}=s;return(i,h)=>{const c=new D;return c.props=i||{},c.children=h,c.view.key=i.key,c.view.events.once("init_before",()=>{c.state=c.state||c.view.zone(()=>r(c.props,c.children))||{}}),c._component_type=s,c.render=l,c.renderBuilder=()=>l,c}})(n))(e,t),lt=(n,e,t)=>{e===void 0&&(t=void 0),n=(r=>{if(r instanceof v)return r;if(r instanceof D)return r.view;if(r instanceof Node){const l=v.anchor2view.get(r);if(l)return l}return r})(n);const[o,s]=n instanceof A?[n.domProps,n.domChildren]:n instanceof D?[n.props,n.children]:[{},[]];return e||(e=o||{}),t||(t=s||[]),[e,t=t.flat(64)]};function wn(n,e,...t){if([e,t]=lt(n,e,t),n instanceof Node){let o=v.anchor2view.get(n);return o||(o=new A(n,e,t)),o instanceof A&&(o.domChildren=t,o.domProps=e),o}return typeof n=="string"||n instanceof String?new A(n,e,t):ct(n,e,t)}function w(n,e,...t){const o=wn(n,e,...t);if(o instanceof D)return o.view.anchor;if(o instanceof A)return o.elem;if(o instanceof v)return o.anchor;throw new Error(`Unknown type: ${String(n)}`)}function dt(n,e,t,o){const s=n instanceof Element?n:document.querySelector(n);if(!s)throw new Error(`Cannot find container: ${n}`);const r=wn(e,t,o);return(r instanceof v?r:r.view).mount(s),r}const X=()=>v.topView();function bn(){const n=X();n.zoneFlag!=="setup"&&console.warn('Warning: Marking a component with outside-effect at outside "setup" zone may cause unexpected behavior.'),n.has_outside_effect=!0}const ut=n=>{const e=(t=v.topView(),new Proxy({},{get(o,s,r){const l=t.getContextValue(s);if(!v.isNone(l))return l},set:(o,s,r,l)=>(t.setContextValue(s,r),!0)}));var t;return n==null||n(e),e},ht=(n,e,t)=>{const{once:o=!1}=t||{},s=X(),r=(...l)=>{if((t==null||t.shouldTrigger==null?void 0:t.shouldTrigger(...l))!==!1)return e(...l)};return s.events[o?"once":"on"](n,r),()=>s.events.off(n,r)},me=(n,e)=>t=>ht(n,t,e),kn=me("mounted"),Be=me("mount_before"),O=me("unmounted"),pt=me("update_after"),mt=n=>{const e=X();if(e.zoneFlag==="render"){const t=()=>{e.events.off("update_before",o),e.events.off("unmounted",o)},o=()=>{t(),n()};return e.events.once("update_before",o),e.events.once("unmounted",o),t}return e.events.once("unmounted",n),()=>e.events.off("unmounted",n)};function Se(){return Se=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},Se.apply(this,arguments)}const ee=(n,e)=>{let t;const o=De(()=>{t&&q(t),t=void 0,n(l=>t=l)},Se({lazy:!1},e));let s;const r=()=>{s==null||s(),t==null||t(),t=void 0,o.effect.stop()};return s=mt(r),{runner:o,cleanup:r}};function Me(n){let e;const t=M();return ee(()=>{e&&q(e),e=void 0;const o=n(s=>{const r=e;e=()=>{s(),r==null||r()}});Object.is(o,E(t))||(t.value=o)}),K(t)}function V(n,e,t){let o;return ee(s=>{const r=L(n)?n.value:n();q(e,r,o,s),o=r},t)}function ft(n,e){const t=e==null?void 0:e.equals,o=(e!=null&&e.deep?M:ke)(n);return[K(o),s=>{const r=E(o),l=typeof s=="function"?s(r):s;t&&t(r,l)||(o.value=l)}]}function vt(n,e){const t=M(e);return[K(t),o=>{t.value=n(E(t),o)}]}const gt=(n,e)=>{X().setContextValue(n,e)};function yt(n,e){const t=X().getContextValue(n);if(t===v.symbols.NONE){if(e!==v.symbols.NONE)return e;throw new Error(`inject key ${n.toString()} not found from view context.`)}return t}const wt=(...n)=>n.map(e=>k(e)),xn=wt,bt=(n,e)=>{const t=M("");return ee(()=>{const o=E(t);o&&URL.revokeObjectURL(o),t.value=URL.createObjectURL(new Blob([k(n)],{type:"text/plain",...e}))}),O(()=>URL.revokeObjectURL(t.value)),t},kt="modulepreload",xt=function(n,e){return new URL(n,e).href},qe={},_t=function(e,t,o){if(!t||t.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(t.map(r=>{if(r=xt(r,o),r in qe)return;qe[r]=!0;const l=r.endsWith(".css"),i=l?'[rel="stylesheet"]':"";if(!!o)for(let p=s.length-1;p>=0;p--){const y=s[p];if(y.href===r&&(!l||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${i}`))return;const c=document.createElement("link");if(c.rel=l?"stylesheet":kt,l||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),l)return new Promise((p,y)=>{c.addEventListener("load",p),c.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e()).catch(r=>{const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=r,window.dispatchEvent(l),!l.defaultPrevented)throw r})},St=()=>_t(()=>import("https://unpkg.com/@monaco-editor/loader@1.3.3/lib/umd/monaco-loader.js"),[],import.meta.url).then(()=>window.monaco_loader).then(n=>n.init()),Ct=({value:n,onChange:e,isDark:t,onSave:o,...s})=>{let r,l,i;return ee(()=>{const h=k(t);i!=null&&i.editor&&(h?i.editor.setTheme("vs-dark"):i.editor.setTheme("vs"))}),O(()=>{r==null||r.dispose()}),L(n)&&V(n,h=>{(l==null?void 0:l.getValue())!==h&&(l==null||l.setValue(h))}),()=>w("div",{...s,ref:async h=>{i=await St(),l=i.editor.createModel(E(n),"typescript",i.Uri.file("main.ts")),l.onDidChangeContent(()=>e(l.getValue())),i.languages.typescript.typescriptDefaults.setCompilerOptions({jsx:"react"}),i.languages.typescript.typescriptDefaults.setDiagnosticsOptions({noSemanticValidation:!0,noSyntaxValidation:!0}),r=i.editor.create(h,{automaticLayout:!0,wordWrap:!0,theme:E(t)?"vs-dark":"vs"}),r.setModel(l),o&&r.addCommand(i.KeyMod.CtrlCmd|i.KeyCode.KeyS,()=>{o(l.getValue())})}})};function Ce(){return Ce=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},Ce.apply(this,arguments)}function Tt(n,e,t=""){const o=e===":root",s=o?"":e,r=n.split(",").map(h=>h.trim()).filter(Boolean);let l=o?[""]:s.split(",").map(h=>h.trim()).filter(Boolean);var i;return(i=l,r.flatMap(h=>i.map(c=>[h,c]))).map(([h,c])=>h.startsWith("&")?h.replace(/&/g,c):`${c} ${h}`).map(h=>`${h.replace(t||"","")}${t||""}`.trim()).join(",")}const Ge=n=>n&&(n.nodeType===Node.DOCUMENT_NODE||n.nodeType===Node.DOCUMENT_FRAGMENT_NODE),Ye=(n,e,t)=>{const{updateCSSText:o,installSheet:s,uninstallSheet:r}=t;let l=!1;return{parseStyle:i=>{const h=function(c,p,{beautify:y=!1,scopedSelector:u=""}){const a=y?`
`:"",d=[{nodeSelector:p+u,cssObject:c}],m=[];for(;d.length>0;){const{nodeSelector:f,cssObject:b}=d.pop(),C={selector:f,cssText:""};for(const _ in b){const T=b[_];if(typeof T=="object"){const S=Tt(_,f,u);d.push({nodeSelector:S,cssObject:T})}else{if(typeof T=="string"&&!T.trim()||T==null)continue;C.cssText+=`${g=_,g.replace(/[A-Z]/g,S=>`-${S.toLowerCase()}`)}: ${b[_]};${a}`}}C.cssText.trim()&&m.push(C)}var g;return m.map(f=>`${f.selector}{${f.cssText}}`).join(`
`).trim()}(n(),i,{scopedSelector:e});o(h)},applySheet:i=>{l||(l=!0,s(i))},removeSheet:i=>{l&&(l=!1,r(i))}}},Et={STYLESHEET_SCOPED:Symbol("STYLESHEET_SCOPED"),STYLESHEET_ROOT:Symbol("STYLESHEET_ROOT")},Ze=()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(36),Te=async n=>{await(async t=>{t.status==="mounted"||t.status==="unmounted"||await new Promise(o=>{const s=()=>{o(),t.events.off("mounted",s),t.events.off("unmounted",s)};t.events.once("mounted",s),t.events.once("unmounted",s)})})(n),await Promise.all(n.children.map(t=>v.anchor2view.has(t)?Te(v.anchor2view.get(t)):Promise.resolve()));const e=new Set;n instanceof A&&e.add(n.elem);for(const t of n.children){t instanceof Element&&["style","script","template"].every(r=>t.localName!==r)&&e.add(t);const o=v.anchor2view.get(t);if(!o||D.view2component.has(o))continue;const s=await Te(o);for(const r of s)e.add(r)}return e},_n=n=>{const{className:e}=n;(({props:o,scopedId:s,rootNodeSelector:r,styleOrFunc:l})=>{const i=(a=>{if(!a)throw new Error("styleOrFn is required.");return typeof a=="function"?a:()=>a})(o.styleFn||o.style||l),h=ut(),{applySheet:c,removeSheet:p,parseStyle:y}=((a,d,m)=>m?((g,f)=>{const b=new CSSStyleSheet,{parseStyle:C,applySheet:_,removeSheet:T}=Ye(g,f,{updateCSSText(S){b.replaceSync(S)},installSheet(S=document){Ge(S)&&(S.adoptedStyleSheets=[...S.adoptedStyleSheets,b])},uninstallSheet(S=document){Ge(S)&&(S.adoptedStyleSheets=[...S.adoptedStyleSheets].filter(W=>W!==b))}});return{sheet:b,parseStyle:C,applySheet:_,removeSheet:T}})(a,d):((g,f)=>{const b=document.createElement("style"),{parseStyle:C,applySheet:_,removeSheet:T}=Ye(g,f,{updateCSSText(S){b.innerHTML=S},installSheet(S){S.insertBefore(b,S.firstChild)},uninstallSheet(S){var W;(W=b.parentNode)==null||W.removeChild(b)}});return{styleDOM:b,parseStyle:C,applySheet:_,removeSheet:T}})(a,d))(()=>i(h),s?`[data-s-${s}]`:void 0,o.adopted),{[Et.STYLESHEET_ROOT]:u}=h;if(ee(()=>{let a=r;var d;o.adopted&&u&&u instanceof Node&&((d=u).nodeType===Node.DOCUMENT_NODE||d.nodeType===Node.DOCUMENT_FRAGMENT_NODE)&&(a=":root"),y(a)}),o.adopted)c(u),O(()=>p(u));else if((u==null?void 0:u.nodeType)===Node.DOCUMENT_FRAGMENT_NODE)c(u),O(()=>p(u));else{let a;Be(d=>{c(d),a=d}),O(()=>p(a))}})(n),(o=>{const{scopedId:s}=o;if(!s)return;let r=!1;const l=`s-${s}`.replace(/-([a-z])/g,function(a,d){return d.toUpperCase()});let i=null,h=null,c=new Set;const p=a=>{r||a&&"dataset"in a&&typeof a.dataset=="object"&&(a.dataset[l]="")},y=a=>{a&&"dataset"in a&&typeof a.dataset=="object"&&delete a.dataset[l]},u=async()=>{if(!i)return;const a=await Te(i);for(const d of a)p(d);for(const d of c)a.has(d)||y(d);c=a};kn((a,d)=>{h=a,i=d,u(),p(a)}),pt(()=>{u()}),O(()=>{r=!0,y(h);for(const a of c)y(a)})})(n);let t=null;Be(o=>{t=o,e&&o instanceof Element&&o.classList.add(e)}),O(()=>{e&&t instanceof Element&&t.classList.remove(e)})},G=(n,e,[t])=>{bn();const o=n.scoped?Ze():void 0,s=`s-${Ze()}`;return _n({props:n,styleOrFunc:t,rootNodeSelector:`.${s}`,className:s,scopedId:o}),()=>null},jt=(n,e,[t])=>(bn(),_n({props:Ce({},n,{scoped:!1}),styleOrFunc:t,rootNodeSelector:":root"}),()=>null),ie=(n="")=>{const e=new Map;return new Proxy({},{get:(t,o)=>(e.has(o)||e.set(o,(s,...r)=>((s instanceof Node||s instanceof String||Array.isArray(s)||typeof s!="object")&&(r.unshift(s),s={}),w(n?document.createElementNS(n,o):document.createElement(o),s,...r))),e.get(o)),has:()=>!0})};ie(),ie("http://www.w3.org/2000/svg"),ie("http://www.w3.org/1998/Math/MathML");class Dt{constructor(){B(this,"idx",0);B(this,"demos",[]);B(this,"currentDemo",null)}registerDemo(e){const t={id:this.idx++,...e};this.demos.push(t),this.currentDemo||(this.currentDemo=t)}selectDemo(e){const t=this.demos.find(o=>o.id===Number(e));if(!t)throw new Error(`Cannot find demo with name ${name}`);return this.currentDemo=t,t}}const Lt=`// @ts-nocheck
import { Scope } from "@rhjs/builtin";
import { hyper } from "@rhjs/hyper";
import { css as _css } from "@rhjs/tag";
import { rh, mount } from "@rhjs/core";

const text = String;
const css = _css.minify;

const computer = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
};

const initialState = {
  fn: "",
  carry: 0,
  value: 0,
  hasCarry: false,
};

const Clear = () => initialState;

const NewDigit = (state, number) => ({
  ...state,
  hasCarry: false,
  value: (state.hasCarry ? 0 : state.value) * 10 + number,
});

const NewFn = (state, fn) => ({
  ...state,
  fn,
  hasCarry: true,
  carry: state.value,
  value:
    state.hasCarry || !state.fn
      ? state.value
      : computer[state.fn](state.carry, state.value),
});

const Equal = (state) => ({
  ...state,
  hasCarry: true,
  carry: state.hasCarry ? state.carry : state.value,
  value: state.fn
    ? computer[state.fn](
        state.hasCarry ? state.value : state.carry,
        state.hasCarry ? state.carry : state.value
      )
    : state.value,
});

const displayView = (value) => <div class={"display"}>{value}</div>;

const keysView = (...children) => <div class={"keys"}>{children}</div>;

const fnView = (props, act) =>
  props.keys.map((fn) => (
    <button class="function" onclick={act(NewFn, fn)}>
      {fn}
    </button>
  ));

const digitsView = ({ digits }, act) =>
  digits.map((digit) => (
    <button class={{ zero: digit === 0 }} onClick={act(NewDigit, digit)}>
      {digit}
    </button>
  ));

const acView = (act) => <button onClick={act(Clear)}>AC</button>;

const eqView = (act) => (
  <button onClick={act(Equal)} class={"equal"}>
    =
  </button>
);

export const Calculator = hyper(initialState, ({ value }, { act }) => (
  <Scope>
    {css\`
      main {
        width: 500px;
      }

      .display {
        border: 1px solid #ddd;
        border-radius: 8px;
        font-size: 2.5em;
        margin-bottom: 12px;
        padding: 0.2em 0.4em;
        text-align: right;
      }

      .keys {
        display: grid;
        grid-gap: 0.5rem;
        grid-template-columns: repeat(4, 1fr);
      }

      .keys .function {
        background: rgba(0, 0, 0, 0.3);
        font-weight: bolder;
      }

      .keys .equal {
        background: rgb(75, 150, 255);
        grid-column: -2;
        grid-row: 2 / span 4;
      }

      .keys .zero {
        grid-column: span 2;
      }

      button {
        padding: 10px;
        padding-right: 30px;
        padding-left: 30px;
        border-radius: 4px;
        border: none;
      }
    \`}
    <main
      tabIndex={-1}
      onKeyDown={act((state, e) =>
        "0123456789".includes(e.key)
          ? [NewDigit, Number(e.key)]
          : "+-*/".includes(e.key)
          ? [NewFn, e.key]
          : e.key === "=" || e.key === "Enter"
          ? [Equal]
          : e.key === "Escape"
          ? [Clear]
          : state
      )}
    >
      {displayView(value)}
      {keysView(
        ...fnView({ keys: Object.keys(computer) }, act),
        ...digitsView({ digits: [7, 8, 9, 4, 5, 6, 1, 2, 3, 0] }, act),
        acView(act),
        eqView(act)
      )}
    </main>
  </Scope>
));

const App = () => {
  return () => (
    <div>
      <h1> Calculator </h1>
      <div
        style={{
          width: "300px",
        }}
      >
        <Calculator></Calculator>
      </div>
    </div>
  );
};

mount("#app", App);
`,Ot=`// @ts-nocheck
import { tags, Scope } from "@rhjs/builtin";
import { hyper } from "@rhjs/hyper";
import { css as _css } from "@rhjs/tag";
import { rh, mount } from "@rhjs/core";

const { main, div, button } = tags.html;
const text = String;
const css = _css.minify;

const computer = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
};

const initialState = {
  fn: "",
  carry: 0,
  value: 0,
  hasCarry: false,
};

const Clear = () => initialState;

const NewDigit = (state, number) => ({
  ...state,
  hasCarry: false,
  value: (state.hasCarry ? 0 : state.value) * 10 + number,
});

const NewFn = (state, fn) => ({
  ...state,
  fn,
  hasCarry: true,
  carry: state.value,
  value:
    state.hasCarry || !state.fn
      ? state.value
      : computer[state.fn](state.carry, state.value),
});

const Equal = (state) => ({
  ...state,
  hasCarry: true,
  carry: state.hasCarry ? state.carry : state.value,
  value: state.fn
    ? computer[state.fn](
        state.hasCarry ? state.value : state.carry,
        state.hasCarry ? state.carry : state.value
      )
    : state.value,
});

const displayView = (value) => div({ class: "display" }, text(value));

const keysView = (...children) => div({ class: "keys" }, children);

const fnView = (props, act) =>
  props.keys.map((fn) =>
    button({ class: "function", onclick: act(NewFn, fn) }, text(fn))
  );

const digitsView = ({ digits }, act) =>
  digits.map((digit) =>
    button(
      { class: { zero: digit === 0 }, onclick: act(NewDigit, digit) },
      text(digit)
    )
  );

const acView = (act) => button({ onclick: act(Clear) }, text("AC"));
const eqView = (act) =>
  button({ onclick: act(Equal), class: "equal" }, text("="));

export const Calculator = hyper(initialState, ({ value }, { act }) =>
  rh(
    Scope,
    {},
    css\`
      main {
        width: 500px;
      }

      .display {
        border: 1px solid #ddd;
        border-radius: 8px;
        font-size: 2.5em;
        margin-bottom: 12px;
        padding: 0.2em 0.4em;
        text-align: right;
      }

      .keys {
        display: grid;
        grid-gap: 0.5rem;
        grid-template-columns: repeat(4, 1fr);
      }

      .keys .function {
        background: #000;
        font-weight: bolder;
      }

      .keys .equal {
        background: rgb(75, 150, 255);
        grid-column: -2;
        grid-row: 2 / span 4;
      }

      .keys .zero {
        grid-column: span 2;
      }

      button {
        padding: 10px;
        padding-right: 30px;
        padding-left: 30px;
        border-radius: 4px;
        border: none;
      }
    \`,
    main(
      {
        tabindex: -1,
        onkeydown: act((state, e) =>
          "0123456789".includes(e.key)
            ? [NewDigit, Number(e.key)]
            : "+-*/".includes(e.key)
            ? [NewFn, e.key]
            : e.key === "=" || e.key === "Enter"
            ? [Equal]
            : e.key === "Escape"
            ? [Clear]
            : state
        ),
      },
      displayView(value),
      keysView(
        ...fnView({ keys: Object.keys(computer) }, act),
        ...digitsView({ digits: [7, 8, 9, 4, 5, 6, 1, 2, 3, 0] }, act),
        acView(act),
        eqView(act)
      )
    )
  )
);

const App = () => {
  return () => (
    <div>
      <h1> Calculator </h1>
      <div
        style={{
          width: "300px",
        }}
      >
        <Calculator></Calculator>
      </div>
    </div>
  );
};

mount("#app", App);
`,Mt=`import { rh, ref, mount, unref, computed, onUnmounted } from "@rhjs/core";

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
`,Nt=`import {
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
`,Rt=`import {
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
`,At=`import { mount, createState } from "@rhjs/core";
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
`,Pt=`import "https://cdn.skypack.dev/twind/shim";
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
`,Vt=`import { rh, mount } from "@rhjs/core";
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
`,It=`import { rh, ref, mount, unref, setupWatch, inject, provide } from "@rhjs/rh";

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
`,$t=`import { rh, ref, mount, unref, computed, onUnmount } from "@rhjs/rh";

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
`,zt=`import {
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
`,Ut=`import { Button, ensureFluentUILoaded } from "@rhjs/fluent-web-components";
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
`,j=new Dt,fe=n=>({"@rhjs/rh":`https://unpkg.com/@rhjs/rh@${n}/dist/main.module.mjs`}),Ft=(n,e)=>`https://unpkg.com/${n}@${e}/dist/main.module.mjs`,Ht=n=>Object.fromEntries(Object.entries(n).map(([e,t])=>[e,Ft(e,t)])),Sn=({core:n,hooks:e,builtin:t,tag:o,hyper:s,atomic:r}={})=>Ht({"@rhjs/core":n||"latest","@rhjs/hooks":e||"latest","@rhjs/builtin":t||"latest","@rhjs/tag":o||"latest","@rhjs/hyper":s||"latest","@rhjs/atomic-css":r||"latest"});j.registerDemo({name:"Calculator Jsx (v3 hyper mode)",code:Lt,importMap:{...Sn()}});j.registerDemo({name:"Calculator (v3 hyper mode)",code:Ot,importMap:{...Sn()}});const Y=(n="latest",e="latest",t="latest")=>({"@rhjs/core":`https://unpkg.com/@rhjs/core@${n}/dist/main.module.mjs`,"@rhjs/builtin":`https://unpkg.com/@rhjs/builtin@${e}/dist/main.module.mjs`,"@rhjs/tag":`https://unpkg.com/@rhjs/tag@${t}/dist/main.module.mjs`});j.registerDemo({name:"Hello World",code:Mt,importMap:{...Y("0.2.5","0.1.3","0.1.6")}});j.registerDemo({name:"Bitcoin",code:Nt,importMap:{...Y("0.2.5","0.1.3","0.1.6")}});j.registerDemo({name:"Markdown Editor",code:Rt,importMap:{...Y("0.2.5","0.1.3","0.1.6")}});j.registerDemo({name:"HTML tag",code:At,importMap:{...Y("0.2.5","0.1.3","0.1.6")}});j.registerDemo({name:"twind",code:Pt,importMap:{...Y("0.2.5","0.1.3","0.1.6")}});j.registerDemo({name:"atomic-css",code:Vt,importMap:{"@rhjs/atomic-css":"https://unpkg.com/@rhjs/atomic-css@latest/dist/main.module.mjs",...Y("0.2.5","0.1.3","0.1.6")}});j.registerDemo({name:"HelloWorld",code:$t,importMap:{...fe("0.1.2")}});j.registerDemo({name:"Counter",code:It,importMap:{...fe("0.1.2")}});j.registerDemo({name:"TodoApp",code:zt,importMap:{...fe("0.1.2")}});j.registerDemo({name:"Counter",code:Ut,importMap:{...fe("0.0.34")}});const Je=M(j.currentDemo),Cn=()=>({mgr:j,currentDemo:Je,selectDemo(n){Je.value=j.selectDemo(n)},demos:j.demos}),Wt=n=>{var t,o;const e=((t=n.importMap)==null?void 0:t["@rhjs/rh"])||((o=n.importMap)==null?void 0:o["@rhjs/core"]);if(e){const[,,s]=/@rhjs\/(rh|core)@(.+?)\//.exec(e)||[];if(s)return s}return"latest"},Bt=()=>{const{selectDemo:n,demos:e}=Cn();return()=>w("div",null,w("select",{onChange:t=>n(t.target.value)},e.map(t=>w("option",{value:t.id},t.name," @",Wt(t)))))},Ne=({styleFn:n,isDark:e,...t},o,s)=>()=>w("div",{...t},w(G,{styleFn:()=>({height:"30px",display:"inline-flex",alignItems:"center",justifyContent:"center",paddingLeft:"12px",paddingRight:"12px",cursor:"pointer",userSelect:"none",marginLeft:"4px","&:hover":{backgroundColor:k(e)?"rgba(64,64,64,1)":"rgba(64,64,64,0.1)"},"&:active":{outline:"solid 1px",outlineColor:k(e)?"#fff":"rgba(64,64,64,1)"},...n==null?void 0:n()})}),s),qt=({isDark:n})=>()=>w(Ne,{onClick:()=>{L(n)&&(n.value=!E(n))},isDark:n},w("span",null,()=>k(n)?"🌘":"🌖"));function Gt({isDark:n,href:e,target:t="_blank"},o,s){return()=>w(Ne,{isDark:n,onClick:()=>{window.open(e,t)}},w("a",{href:e,target:t,style:"text-decoration: none; color: inherit;"},s))}const Yt=({isDark:n})=>()=>w("div",null,w(G,{styleFn:()=>({paddingLeft:"12px",paddingRight:"12px",height:"100%",width:"calc(100% - 24px)",display:"grid",gridTemplateColumns:"minmax(0, 1fr) 12px minmax(0, 1fr)"})}),w("div",{style:"display: inline-flex; align-items: center;"},w("span",{style:"user-select: none;word-break: keep-all;white-space: nowrap;"},"🧩 ",w("b",null,"R"),w("small",null,"eactive"),w("b",null,"H"),w("small",null,"ydrate"),w("b",null,"JS")," PLAYGROUND"),w(qt,{isDark:n}),w(Bt,null)),w("div",null),w("div",{style:"display: inline-flex; align-items: center; justify-content: right;"},w(Gt,{isDark:n,href:"https://github.com/zhzLuke96/rh.js"},"🐱‍👤Github"))),Zt=()=>document.querySelectorAll("iframe").forEach(n=>n.style.pointerEvents="none"),Jt=()=>document.querySelectorAll("iframe").forEach(n=>n.style.pointerEvents="auto"),Qt=({isHorizontal:n,onResize:e,ref:t})=>{const[o,s]=ft(!1),r=()=>s(!0),l=()=>s(!1),i=u=>{e(u.clientX,u.clientY)},h=u=>{const a=u.touches[0];e(a.clientX,a.clientY)},c=M(null);V(o,u=>{u?(Zt(),window.addEventListener("mousemove",i),window.addEventListener("mouseup",l),window.addEventListener("touchmove",h),window.addEventListener("touchend",l)):(Jt(),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",l),window.removeEventListener("touchmove",h),window.removeEventListener("touchend",l))}),V(c,u=>{u&&(u.addEventListener("mousedown",r,{passive:!0}),u.addEventListener("touchstart",r,{passive:!0}))}),O(()=>{var u,a;(u=k(c))==null||u.removeEventListener("mousedown",r),(a=k(c))==null||a.removeEventListener("touchstart",r)});const p=yt("isDark",void 0),y=tt(()=>k(p)?"rgba(255,255,255,0.3)":"rgba(0,0,0,0.3)");return()=>w("div",{ref:u=>{c.value=u,t&&(t.value=u)}},w(G,{styleFn:()=>({backgroundColor:k(o)?k(y):"",width:n?"100%":"12px",height:n?"12px":"100%",zIndex:k(o)?"10":"auto",cursor:n?"row-resize":"col-resize",userSelect:"none",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"12px","&:hover":{backgroundColor:k(y)}})}),"⚪⚪⚪")},Kt=()=>{const n=`
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
`.trim(),e=URL.createObjectURL(new Blob([n],{type:"text/html"}));return O(()=>URL.revokeObjectURL(e)),`${e}#?embedded=${encodeURIComponent(location.origin)}`},Xt=(n,e,t="")=>`
<!doctype html>
<html${n?' class="dark"':""}>
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
    ${t}
    <div id="app"></div>
    <script id="appsrc" type="module"><\/script>
  </body>
</html>
`.trim(),eo=(n,e,t,o)=>{const s={sendToIframe(i){var h,c;(c=(h=E(n))==null?void 0:h.contentWindow)==null||c.postMessage(i,"*")},sendToDevtools(i){var h,c;(c=(h=E(e))==null?void 0:h.contentWindow)==null||c.postMessage(i,"*")}},r=()=>{const{codeInjected:i,codeURL:h}=k(t);if(!i){if(!h){setTimeout(r,3);return}requestAnimationFrame(()=>{s.sendToIframe({event:"CODE_UPDATE",value:h}),o({type:"CODE_INJECTED"})})}},l=i=>{var p,y;const[h,c]=xn(n,e);!h||!c||((y=(p=i.data)==null?void 0:p.includes)!=null&&y.call(p,"Debugger.enable")&&(console.log("Debugger.enable"),o({type:"Debugger.enable"}),r()),i.source===h.contentWindow?c.contentWindow.postMessage(i.data,"*"):i.source===c.contentWindow&&h.contentWindow.postMessage({event:"DEV",data:i.data},"*"))};return window.addEventListener("message",l),O(()=>window.removeEventListener("message",l)),s},no=(n,e)=>{const{importMap:t,isDark:o}=n,s=Me(()=>{const r=Xt(E(o),JSON.stringify({imports:k(t)}));return URL.createObjectURL(new Blob([r],{type:"text/html"}))});return V(s,(r,l)=>{l!==r&&l&&URL.revokeObjectURL(l),e({type:"HTML_CHANGED",iframeSrc:r||""})}),O(()=>{URL.revokeObjectURL(E(s)||"")}),{iframeSrc:s}},to=n=>{const{isDark:e,code:t}=n,o=ke(null),s=ke(null),r=d=>{var m;return(m=d.contentDocument)==null?void 0:m.documentElement.classList.toggle("dark",E(e))},l=d=>{const m=E(o);m&&(m.src=d)},i=()=>{var d,m;(m=(d=E(o))==null?void 0:d.contentWindow)==null||m.location.reload()},h=()=>{var d,m;(m=(d=E(s))==null?void 0:d.contentWindow)==null||m.location.reload()};V(()=>k(e),d=>{const m=k(o);m&&r(m)});const[c,p]=vt((d,m)=>{switch(m.type){case"IFRAME_READY":r(m.iframe);let g=d.codeInjected;return{...d,codeInjected:g,iframeReady:!0};case"DEVTOOLS_IFRAME_READY":return{...d,devtoolsIframeReady:!0};case"DEV_LOADED":return{...d,devLoaded:!0};case"HTML_CHANGED":return l(m.iframeSrc),h(),{...d,iframeReady:!1,devtoolsIframeReady:!1,devLoaded:!1,codeInjected:!1,darkInjected:!1};case"HTML_RELOAD":return setTimeout(()=>{i(),h()}),{...d,iframeReady:!1,devtoolsIframeReady:!1,devLoaded:!1,codeInjected:!1,darkInjected:!1};case"CODE_UPDATE":return{...d,codeURL:m.codeURL};case"CODE_INJECTED":return{...d,codeInjected:!0}}return d},{iframeReady:!1,devtoolsIframeReady:!1,devLoaded:!1,codeInjected:!1,codeURL:E(t)}),{sendToDevtools:y,sendToIframe:u}=eo(o,s,c,p);V(()=>k(t),d=>{p({type:"CODE_UPDATE",codeURL:d}),c.value.iframeReady&&requestAnimationFrame(()=>{u({event:"CODE_UPDATE",value:d}),p({type:"CODE_INJECTED"})})});const{iframeSrc:a}=no(n,p);return V(o,d=>{d==null||d.addEventListener("load",()=>p({type:"IFRAME_READY",iframe:d}))}),V(s,d=>{d==null||d.addEventListener("load",()=>p({type:"DEVTOOLS_IFRAME_READY",devIframe:d}))}),{iframeSrc:a,iframeRef:o,devtoolsIframeRef:s,previewState:c,dispatch:p,sendToDevtools:y,sendToIframe:u}},oo=n=>{const{importMap:e,code:t,devtools:o,isDark:s,...r}=n,l=M(null),{iframeSrc:i,iframeRef:h,devtoolsIframeRef:c,previewState:p,dispatch:y}=to(n),u=Kt(),a=Me(()=>`width: 100%; height: 100%; ${k(o)?"display: block;":"display: none;"}`),d=M(.625),m=M(null),g=(f,b)=>{const[C,_]=xn(l,m);if(!C||!_)return;let T,S;const W=C.getBoundingClientRect();T=b-W.top-_.offsetHeight/2,S=C.offsetHeight-_.offsetHeight;const Tn=T/S;d.value=Tn};return()=>w("div",{...r,ref:l},w(G,{styleFn:()=>{const f=k(d);return{display:"grid",height:"100%",width:"100%",gridTemplateRows:k(o)?`30px minmax(0, ${f}fr) 12px minmax(0, ${1-f}fr)`:"30px minmax(0, 1fr)"}}}),w("div",{style:"border-bottom: 1px solid;border-top: 1px solid;overflow: hidden;"},w(Ne,{title:"reload page",isDark:s,onClick:()=>y({type:"HTML_RELOAD"})},"♻️relaod")),w("iframe",{ref:h,src:i,style:"width: 100%;height: 100%;",frameBorder:0,sandbox:"allow-popups-to-escape-sandbox allow-scripts allow-popups allow-forms allow-pointer-lock allow-top-navigation allow-modals allow-same-origin"}),w("div",null,w(Qt,{ref:m,isHorizontal:!0,onResize:g})),w("iframe",{ref:c,style:a,src:u,frameBorder:"0"}))},so=({isDark:n})=>()=>w(jt,{styleFn:()=>({fontFamily:"'Karla', system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",lineHeight:"1.5",fontWeight:"400",colorScheme:k(n)?"light dark":"dark",color:k(n)?"rgba(255, 255, 255, 0.87)":"#242424",backgroundColor:k(n)?"#333":"#fff",fontSynthesis:"none",textRendering:"optimizeLegibility","-webkitFontSmoothing":"antialiased","-moz-osxFontSmoothing":"grayscale","-webkitTextSizeAdjust":"100%",height:"100vh",width:"100vw",body:{margin:"0",minWidth:"100vw",minHeight:"100vh",width:"100%",height:"100%"},"#app":{width:"100%",height:"100%"}})});function ro(){return new Worker(""+new URL("complier.worker-66687ebb.js",import.meta.url).href)}class io{constructor(){B(this,"registry",{})}registerWorker(e,t){this.registry[e]?console.warn(`Worker of type ${e} already registered.`):this.registry[e]=t}removeWorker(e){delete this.registry[e]}getWorker(e){const t=this.registry[e];if(t)return t;throw new Error(`No worker of type ${e} registered.`)}postMessage(e,t){this.getWorker(e).postMessage(t)}listenRecv(e,t){const o=this.getWorker(e);let s;const r=l=>{const{message_token:i}=l.data||{};if(i!==t)return;const h={...l.data};delete h.message_token,s(h),o.removeEventListener("message",r)};return o.addEventListener("message",r),{recv:new Promise((l,i)=>{s=l}),dispose:()=>o.removeEventListener("message",r)}}}class ao{constructor(){B(this,"registry",new io);this.initialize()}async initialize(){this.registry.registerWorker("complier",new ro)}worker_caller(e,t){const o=Math.random().toString(36).slice(2),s={...t,message_token:o};return this.registry.postMessage(e,s),this.registry.listenRecv(e,o)}compileFile(e){return this.worker_caller("complier",{event:"BABEL",payload:{file:e,compile_options:{}}})}compileFiles(e){return this.worker_caller("complier",{event:"ROLLUP",payload:{files:e,compile_options:{}}})}}const Qe=new ao,co=()=>{let n=null;return O(()=>n==null?void 0:n.dispose()),{compileFile(e){return n==null||n.dispose(),n=Qe.compileFile(e),n.recv},compileFiles(e){return n==null||n.dispose(),n=Qe.compileFiles(e),n.recv}}},lo='import("@rhjs/rh").then(({cs, ElementSource, View}) => window.dispose = () => View ? View.globalView.unmount() : (cs || ElementSource).global_source.emit("unmount"));',uo=()=>{var h;const n=M(!0);gt("isDark",n);const{currentDemo:e}=Cn(),t=Me(()=>{var c;return{"@rhjs/rh":"https://unpkg.com/@rhjs/rh@latest/dist/main.module.mjs","@rhjs/fluent-web-components":"https://unpkg.com/@rhjs/fluent-web-components@latest/dist/main.module.mjs",...(c=e.value)==null?void 0:c.importMap}}),o=M(""),s=bt(o,{type:"text/javascript"}),r=M(((h=e.value)==null?void 0:h.code)||""),l=co(),i=async()=>{const c=E(r);if(!c)return;const p=await l.compileFile({filename:"main.tsx",source:c});o.value=`${p.compiled}
${lo}`};return kn(i),V(e,c=>{c&&r.value!==c.code&&(r.value=c.code,i())}),()=>w("div",null,w(so,{isDark:n}),w(G,{styleFn:()=>({position:"relative",display:"flex",flexFlow:"column",width:"100%",height:"100%",maxWidth:"100vw",maxHeight:"100vh",overflow:"hidden"})}),w("header",{style:"height: 30px; width: 100%;"},w(Yt,{isDark:n})),w("div",{style:"flex: 1;"},w(G,{styleFn:()=>({position:"relative",display:"flex",flexFlow:"row",width:"100%",height:"100%"})}),w(Ct,{style:"flex: 1;",value:r,onChange:c=>r.value=c,onSave:i,isDark:n}),w(oo,{style:"flex: 1;",importMap:t,code:s,devtools:!0,isDark:n})))};dt("#app",uo);
