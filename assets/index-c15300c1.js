function Np(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function Rp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Hc={exports:{}},Ni={},Uc={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uo=Symbol.for("react.element"),Mp=Symbol.for("react.portal"),Op=Symbol.for("react.fragment"),Dp=Symbol.for("react.strict_mode"),Ip=Symbol.for("react.profiler"),Fp=Symbol.for("react.provider"),jp=Symbol.for("react.context"),Vp=Symbol.for("react.forward_ref"),Bp=Symbol.for("react.suspense"),Hp=Symbol.for("react.memo"),Up=Symbol.for("react.lazy"),Xa=Symbol.iterator;function Wp(e){return e===null||typeof e!="object"?null:(e=Xa&&e[Xa]||e["@@iterator"],typeof e=="function"?e:null)}var Wc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qc=Object.assign,Kc={};function ur(e,t,n){this.props=e,this.context=t,this.refs=Kc,this.updater=n||Wc}ur.prototype.isReactComponent={};ur.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ur.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Gc(){}Gc.prototype=ur.prototype;function Hs(e,t,n){this.props=e,this.context=t,this.refs=Kc,this.updater=n||Wc}var Us=Hs.prototype=new Gc;Us.constructor=Hs;Qc(Us,ur.prototype);Us.isPureReactComponent=!0;var qa=Array.isArray,Yc=Object.prototype.hasOwnProperty,Ws={current:null},Xc={key:!0,ref:!0,__self:!0,__source:!0};function qc(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Yc.call(t,r)&&!Xc.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var a=Array(s),u=0;u<s;u++)a[u]=arguments[u+2];o.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:uo,type:e,key:i,ref:l,props:o,_owner:Ws.current}}function Qp(e,t){return{$$typeof:uo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Qs(e){return typeof e=="object"&&e!==null&&e.$$typeof===uo}function Kp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Za=/\/+/g;function el(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Kp(""+e.key):t.toString(36)}function Uo(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case uo:case Mp:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+el(l,0):r,qa(o)?(n="",e!=null&&(n=e.replace(Za,"$&/")+"/"),Uo(o,t,n,"",function(u){return u})):o!=null&&(Qs(o)&&(o=Qp(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(Za,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",qa(e))for(var s=0;s<e.length;s++){i=e[s];var a=r+el(i,s);l+=Uo(i,t,n,a,o)}else if(a=Wp(e),typeof a=="function")for(e=a.call(e),s=0;!(i=e.next()).done;)i=i.value,a=r+el(i,s++),l+=Uo(i,t,n,a,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function ko(e,t,n){if(e==null)return e;var r=[],o=0;return Uo(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Gp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var xe={current:null},Wo={transition:null},Yp={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:Wo,ReactCurrentOwner:Ws};D.Children={map:ko,forEach:function(e,t,n){ko(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ko(e,function(){t++}),t},toArray:function(e){return ko(e,function(t){return t})||[]},only:function(e){if(!Qs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=ur;D.Fragment=Op;D.Profiler=Ip;D.PureComponent=Hs;D.StrictMode=Dp;D.Suspense=Bp;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yp;D.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Qc({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=Ws.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)Yc.call(t,a)&&!Xc.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var u=0;u<a;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:uo,type:e.type,key:o,ref:i,props:r,_owner:l}};D.createContext=function(e){return e={$$typeof:jp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Fp,_context:e},e.Consumer=e};D.createElement=qc;D.createFactory=function(e){var t=qc.bind(null,e);return t.type=e,t};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:Vp,render:e}};D.isValidElement=Qs;D.lazy=function(e){return{$$typeof:Up,_payload:{_status:-1,_result:e},_init:Gp}};D.memo=function(e,t){return{$$typeof:Hp,type:e,compare:t===void 0?null:t}};D.startTransition=function(e){var t=Wo.transition;Wo.transition={};try{e()}finally{Wo.transition=t}};D.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};D.useCallback=function(e,t){return xe.current.useCallback(e,t)};D.useContext=function(e){return xe.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return xe.current.useDeferredValue(e)};D.useEffect=function(e,t){return xe.current.useEffect(e,t)};D.useId=function(){return xe.current.useId()};D.useImperativeHandle=function(e,t,n){return xe.current.useImperativeHandle(e,t,n)};D.useInsertionEffect=function(e,t){return xe.current.useInsertionEffect(e,t)};D.useLayoutEffect=function(e,t){return xe.current.useLayoutEffect(e,t)};D.useMemo=function(e,t){return xe.current.useMemo(e,t)};D.useReducer=function(e,t,n){return xe.current.useReducer(e,t,n)};D.useRef=function(e){return xe.current.useRef(e)};D.useState=function(e){return xe.current.useState(e)};D.useSyncExternalStore=function(e,t,n){return xe.current.useSyncExternalStore(e,t,n)};D.useTransition=function(){return xe.current.useTransition()};D.version="18.2.0";Uc.exports=D;var dt=Uc.exports;const Zc=Rp(dt),Xp=Np({__proto__:null,default:Zc},[dt]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qp=dt,Zp=Symbol.for("react.element"),Jp=Symbol.for("react.fragment"),eh=Object.prototype.hasOwnProperty,th=qp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,nh={key:!0,ref:!0,__self:!0,__source:!0};function Jc(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)eh.call(t,r)&&!nh.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Zp,type:e,key:i,ref:l,props:o,_owner:th.current}}Ni.Fragment=Jp;Ni.jsx=Jc;Ni.jsxs=Jc;Hc.exports=Ni;var L=Hc.exports,Bl={},ed={exports:{}},Fe={},td={exports:{}},nd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,R){var O=P.length;P.push(R);e:for(;0<O;){var te=O-1>>>1,ce=P[te];if(0<o(ce,R))P[te]=R,P[O]=ce,O=te;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var R=P[0],O=P.pop();if(O!==R){P[0]=O;e:for(var te=0,ce=P.length,bo=ce>>>1;te<bo;){var sn=2*(te+1)-1,Ji=P[sn],an=sn+1,_o=P[an];if(0>o(Ji,O))an<ce&&0>o(_o,Ji)?(P[te]=_o,P[an]=O,te=an):(P[te]=Ji,P[sn]=O,te=sn);else if(an<ce&&0>o(_o,O))P[te]=_o,P[an]=O,te=an;else break e}}return R}function o(P,R){var O=P.sortIndex-R.sortIndex;return O!==0?O:P.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var a=[],u=[],f=1,d=null,h=3,m=!1,y=!1,b=!1,T=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(P){for(var R=n(u);R!==null;){if(R.callback===null)r(u);else if(R.startTime<=P)r(u),R.sortIndex=R.expirationTime,t(a,R);else break;R=n(u)}}function w(P){if(b=!1,g(P),!y)if(n(a)!==null)y=!0,ue(x);else{var R=n(u);R!==null&&Te(w,R.startTime-P)}}function x(P,R){y=!1,b&&(b=!1,p(A),A=-1),m=!0;var O=h;try{for(g(R),d=n(a);d!==null&&(!(d.expirationTime>R)||P&&!$());){var te=d.callback;if(typeof te=="function"){d.callback=null,h=d.priorityLevel;var ce=te(d.expirationTime<=R);R=e.unstable_now(),typeof ce=="function"?d.callback=ce:d===n(a)&&r(a),g(R)}else r(a);d=n(a)}if(d!==null)var bo=!0;else{var sn=n(u);sn!==null&&Te(w,sn.startTime-R),bo=!1}return bo}finally{d=null,h=O,m=!1}}var C=!1,E=null,A=-1,j=5,N=-1;function $(){return!(e.unstable_now()-N<j)}function S(){if(E!==null){var P=e.unstable_now();N=P;var R=!0;try{R=E(!0,P)}finally{R?V():(C=!1,E=null)}}else C=!1}var V;if(typeof c=="function")V=function(){c(S)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,ae=Y.port2;Y.port1.onmessage=S,V=function(){ae.postMessage(null)}}else V=function(){T(S,0)};function ue(P){E=P,C||(C=!0,V())}function Te(P,R){A=T(function(){P(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){y||m||(y=!0,ue(x))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(P){switch(h){case 1:case 2:case 3:var R=3;break;default:R=h}var O=h;h=R;try{return P()}finally{h=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,R){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var O=h;h=P;try{return R()}finally{h=O}},e.unstable_scheduleCallback=function(P,R,O){var te=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?te+O:te):O=te,P){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=O+ce,P={id:f++,callback:R,priorityLevel:P,startTime:O,expirationTime:ce,sortIndex:-1},O>te?(P.sortIndex=O,t(u,P),n(a)===null&&P===n(u)&&(b?(p(A),A=-1):b=!0,Te(w,O-te))):(P.sortIndex=ce,t(a,P),y||m||(y=!0,ue(x))),P},e.unstable_shouldYield=$,e.unstable_wrapCallback=function(P){var R=h;return function(){var O=h;h=R;try{return P.apply(this,arguments)}finally{h=O}}}})(nd);td.exports=nd;var rh=td.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rd=dt,Ie=rh;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var od=new Set,Vr={};function $n(e,t){Jn(e,t),Jn(e+"Capture",t)}function Jn(e,t){for(Vr[e]=t,e=0;e<t.length;e++)od.add(t[e])}var St=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hl=Object.prototype.hasOwnProperty,oh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ja={},eu={};function ih(e){return Hl.call(eu,e)?!0:Hl.call(Ja,e)?!1:oh.test(e)?eu[e]=!0:(Ja[e]=!0,!1)}function lh(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function sh(e,t,n,r){if(t===null||typeof t>"u"||lh(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Se(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){me[e]=new Se(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];me[t]=new Se(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){me[e]=new Se(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){me[e]=new Se(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){me[e]=new Se(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){me[e]=new Se(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){me[e]=new Se(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){me[e]=new Se(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){me[e]=new Se(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ks=/[\-:]([a-z])/g;function Gs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ks,Gs);me[t]=new Se(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ks,Gs);me[t]=new Se(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ks,Gs);me[t]=new Se(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){me[e]=new Se(e,1,!1,e.toLowerCase(),null,!1,!1)});me.xlinkHref=new Se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){me[e]=new Se(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ys(e,t,n,r){var o=me.hasOwnProperty(t)?me[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(sh(t,n,o,r)&&(n=null),r||o===null?ih(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Pt=rd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xo=Symbol.for("react.element"),Ln=Symbol.for("react.portal"),Nn=Symbol.for("react.fragment"),Xs=Symbol.for("react.strict_mode"),Ul=Symbol.for("react.profiler"),id=Symbol.for("react.provider"),ld=Symbol.for("react.context"),qs=Symbol.for("react.forward_ref"),Wl=Symbol.for("react.suspense"),Ql=Symbol.for("react.suspense_list"),Zs=Symbol.for("react.memo"),Rt=Symbol.for("react.lazy"),sd=Symbol.for("react.offscreen"),tu=Symbol.iterator;function hr(e){return e===null||typeof e!="object"?null:(e=tu&&e[tu]||e["@@iterator"],typeof e=="function"?e:null)}var J=Object.assign,tl;function $r(e){if(tl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);tl=t&&t[1]||""}return`
`+tl+e}var nl=!1;function rl(e,t){if(!e||nl)return"";nl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,s=i.length-1;1<=l&&0<=s&&o[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(o[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||o[l]!==i[s]){var a=`
`+o[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=s);break}}}finally{nl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?$r(e):""}function ah(e){switch(e.tag){case 5:return $r(e.type);case 16:return $r("Lazy");case 13:return $r("Suspense");case 19:return $r("SuspenseList");case 0:case 2:case 15:return e=rl(e.type,!1),e;case 11:return e=rl(e.type.render,!1),e;case 1:return e=rl(e.type,!0),e;default:return""}}function Kl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Nn:return"Fragment";case Ln:return"Portal";case Ul:return"Profiler";case Xs:return"StrictMode";case Wl:return"Suspense";case Ql:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ld:return(e.displayName||"Context")+".Consumer";case id:return(e._context.displayName||"Context")+".Provider";case qs:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Zs:return t=e.displayName||null,t!==null?t:Kl(e.type)||"Memo";case Rt:t=e._payload,e=e._init;try{return Kl(e(t))}catch{}}return null}function uh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Kl(t);case 8:return t===Xs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function qt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ad(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ch(e){var t=ad(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function So(e){e._valueTracker||(e._valueTracker=ch(e))}function ud(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ad(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function oi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Gl(e,t){var n=t.checked;return J({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function nu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=qt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function cd(e,t){t=t.checked,t!=null&&Ys(e,"checked",t,!1)}function Yl(e,t){cd(e,t);var n=qt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Xl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Xl(e,t.type,qt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ru(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Xl(e,t,n){(t!=="number"||oi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ar=Array.isArray;function Qn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+qt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ql(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return J({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ou(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(Ar(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:qt(n)}}function dd(e,t){var n=qt(t.value),r=qt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function iu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function fd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?fd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Co,pd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Co=Co||document.createElement("div"),Co.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Co.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Br(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Tr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},dh=["Webkit","ms","Moz","O"];Object.keys(Tr).forEach(function(e){dh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Tr[t]=Tr[e]})});function hd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Tr.hasOwnProperty(e)&&Tr[e]?(""+t).trim():t+"px"}function gd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=hd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var fh=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Jl(e,t){if(t){if(fh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function es(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ts=null;function Js(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ns=null,Kn=null,Gn=null;function lu(e){if(e=po(e)){if(typeof ns!="function")throw Error(k(280));var t=e.stateNode;t&&(t=Ii(t),ns(e.stateNode,e.type,t))}}function md(e){Kn?Gn?Gn.push(e):Gn=[e]:Kn=e}function vd(){if(Kn){var e=Kn,t=Gn;if(Gn=Kn=null,lu(e),t)for(e=0;e<t.length;e++)lu(t[e])}}function yd(e,t){return e(t)}function wd(){}var ol=!1;function bd(e,t,n){if(ol)return e(t,n);ol=!0;try{return yd(e,t,n)}finally{ol=!1,(Kn!==null||Gn!==null)&&(wd(),vd())}}function Hr(e,t){var n=e.stateNode;if(n===null)return null;var r=Ii(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var rs=!1;if(St)try{var gr={};Object.defineProperty(gr,"passive",{get:function(){rs=!0}}),window.addEventListener("test",gr,gr),window.removeEventListener("test",gr,gr)}catch{rs=!1}function ph(e,t,n,r,o,i,l,s,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var Lr=!1,ii=null,li=!1,os=null,hh={onError:function(e){Lr=!0,ii=e}};function gh(e,t,n,r,o,i,l,s,a){Lr=!1,ii=null,ph.apply(hh,arguments)}function mh(e,t,n,r,o,i,l,s,a){if(gh.apply(this,arguments),Lr){if(Lr){var u=ii;Lr=!1,ii=null}else throw Error(k(198));li||(li=!0,os=u)}}function An(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function _d(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function su(e){if(An(e)!==e)throw Error(k(188))}function vh(e){var t=e.alternate;if(!t){if(t=An(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return su(o),e;if(i===r)return su(o),t;i=i.sibling}throw Error(k(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function kd(e){return e=vh(e),e!==null?xd(e):null}function xd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=xd(e);if(t!==null)return t;e=e.sibling}return null}var Sd=Ie.unstable_scheduleCallback,au=Ie.unstable_cancelCallback,yh=Ie.unstable_shouldYield,wh=Ie.unstable_requestPaint,re=Ie.unstable_now,bh=Ie.unstable_getCurrentPriorityLevel,ea=Ie.unstable_ImmediatePriority,Cd=Ie.unstable_UserBlockingPriority,si=Ie.unstable_NormalPriority,_h=Ie.unstable_LowPriority,Ed=Ie.unstable_IdlePriority,Ri=null,pt=null;function kh(e){if(pt&&typeof pt.onCommitFiberRoot=="function")try{pt.onCommitFiberRoot(Ri,e,void 0,(e.current.flags&128)===128)}catch{}}var ot=Math.clz32?Math.clz32:Ch,xh=Math.log,Sh=Math.LN2;function Ch(e){return e>>>=0,e===0?32:31-(xh(e)/Sh|0)|0}var Eo=64,$o=4194304;function Pr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ai(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~o;s!==0?r=Pr(s):(i&=l,i!==0&&(r=Pr(i)))}else l=n&~o,l!==0?r=Pr(l):i!==0&&(r=Pr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ot(t),o=1<<n,r|=e[n],t&=~o;return r}function Eh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $h(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-ot(i),s=1<<l,a=o[l];a===-1?(!(s&n)||s&r)&&(o[l]=Eh(s,t)):a<=t&&(e.expiredLanes|=s),i&=~s}}function is(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function $d(){var e=Eo;return Eo<<=1,!(Eo&4194240)&&(Eo=64),e}function il(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function co(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ot(t),e[t]=n}function Ah(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-ot(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function ta(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ot(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var B=0;function Ad(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Pd,na,zd,Td,Ld,ls=!1,Ao=[],Ht=null,Ut=null,Wt=null,Ur=new Map,Wr=new Map,Dt=[],Ph="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function uu(e,t){switch(e){case"focusin":case"focusout":Ht=null;break;case"dragenter":case"dragleave":Ut=null;break;case"mouseover":case"mouseout":Wt=null;break;case"pointerover":case"pointerout":Ur.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wr.delete(t.pointerId)}}function mr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=po(t),t!==null&&na(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function zh(e,t,n,r,o){switch(t){case"focusin":return Ht=mr(Ht,e,t,n,r,o),!0;case"dragenter":return Ut=mr(Ut,e,t,n,r,o),!0;case"mouseover":return Wt=mr(Wt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Ur.set(i,mr(Ur.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Wr.set(i,mr(Wr.get(i)||null,e,t,n,r,o)),!0}return!1}function Nd(e){var t=pn(e.target);if(t!==null){var n=An(t);if(n!==null){if(t=n.tag,t===13){if(t=_d(n),t!==null){e.blockedOn=t,Ld(e.priority,function(){zd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Qo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ss(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ts=r,n.target.dispatchEvent(r),ts=null}else return t=po(n),t!==null&&na(t),e.blockedOn=n,!1;t.shift()}return!0}function cu(e,t,n){Qo(e)&&n.delete(t)}function Th(){ls=!1,Ht!==null&&Qo(Ht)&&(Ht=null),Ut!==null&&Qo(Ut)&&(Ut=null),Wt!==null&&Qo(Wt)&&(Wt=null),Ur.forEach(cu),Wr.forEach(cu)}function vr(e,t){e.blockedOn===t&&(e.blockedOn=null,ls||(ls=!0,Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority,Th)))}function Qr(e){function t(o){return vr(o,e)}if(0<Ao.length){vr(Ao[0],e);for(var n=1;n<Ao.length;n++){var r=Ao[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ht!==null&&vr(Ht,e),Ut!==null&&vr(Ut,e),Wt!==null&&vr(Wt,e),Ur.forEach(t),Wr.forEach(t),n=0;n<Dt.length;n++)r=Dt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Dt.length&&(n=Dt[0],n.blockedOn===null);)Nd(n),n.blockedOn===null&&Dt.shift()}var Yn=Pt.ReactCurrentBatchConfig,ui=!0;function Lh(e,t,n,r){var o=B,i=Yn.transition;Yn.transition=null;try{B=1,ra(e,t,n,r)}finally{B=o,Yn.transition=i}}function Nh(e,t,n,r){var o=B,i=Yn.transition;Yn.transition=null;try{B=4,ra(e,t,n,r)}finally{B=o,Yn.transition=i}}function ra(e,t,n,r){if(ui){var o=ss(e,t,n,r);if(o===null)gl(e,t,r,ci,n),uu(e,r);else if(zh(o,e,t,n,r))r.stopPropagation();else if(uu(e,r),t&4&&-1<Ph.indexOf(e)){for(;o!==null;){var i=po(o);if(i!==null&&Pd(i),i=ss(e,t,n,r),i===null&&gl(e,t,r,ci,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else gl(e,t,r,null,n)}}var ci=null;function ss(e,t,n,r){if(ci=null,e=Js(r),e=pn(e),e!==null)if(t=An(e),t===null)e=null;else if(n=t.tag,n===13){if(e=_d(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ci=e,null}function Rd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(bh()){case ea:return 1;case Cd:return 4;case si:case _h:return 16;case Ed:return 536870912;default:return 16}default:return 16}}var jt=null,oa=null,Ko=null;function Md(){if(Ko)return Ko;var e,t=oa,n=t.length,r,o="value"in jt?jt.value:jt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return Ko=o.slice(e,1<r?1-r:void 0)}function Go(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Po(){return!0}function du(){return!1}function je(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Po:du,this.isPropagationStopped=du,this}return J(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Po)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Po)},persist:function(){},isPersistent:Po}),t}var cr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ia=je(cr),fo=J({},cr,{view:0,detail:0}),Rh=je(fo),ll,sl,yr,Mi=J({},fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:la,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==yr&&(yr&&e.type==="mousemove"?(ll=e.screenX-yr.screenX,sl=e.screenY-yr.screenY):sl=ll=0,yr=e),ll)},movementY:function(e){return"movementY"in e?e.movementY:sl}}),fu=je(Mi),Mh=J({},Mi,{dataTransfer:0}),Oh=je(Mh),Dh=J({},fo,{relatedTarget:0}),al=je(Dh),Ih=J({},cr,{animationName:0,elapsedTime:0,pseudoElement:0}),Fh=je(Ih),jh=J({},cr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Vh=je(jh),Bh=J({},cr,{data:0}),pu=je(Bh),Hh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Uh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Wh[e])?!!t[e]:!1}function la(){return Qh}var Kh=J({},fo,{key:function(e){if(e.key){var t=Hh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Go(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Uh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:la,charCode:function(e){return e.type==="keypress"?Go(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Go(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Gh=je(Kh),Yh=J({},Mi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hu=je(Yh),Xh=J({},fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:la}),qh=je(Xh),Zh=J({},cr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jh=je(Zh),e0=J({},Mi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),t0=je(e0),n0=[9,13,27,32],sa=St&&"CompositionEvent"in window,Nr=null;St&&"documentMode"in document&&(Nr=document.documentMode);var r0=St&&"TextEvent"in window&&!Nr,Od=St&&(!sa||Nr&&8<Nr&&11>=Nr),gu=String.fromCharCode(32),mu=!1;function Dd(e,t){switch(e){case"keyup":return n0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Id(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Rn=!1;function o0(e,t){switch(e){case"compositionend":return Id(t);case"keypress":return t.which!==32?null:(mu=!0,gu);case"textInput":return e=t.data,e===gu&&mu?null:e;default:return null}}function i0(e,t){if(Rn)return e==="compositionend"||!sa&&Dd(e,t)?(e=Md(),Ko=oa=jt=null,Rn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Od&&t.locale!=="ko"?null:t.data;default:return null}}var l0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!l0[e.type]:t==="textarea"}function Fd(e,t,n,r){md(r),t=di(t,"onChange"),0<t.length&&(n=new ia("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Rr=null,Kr=null;function s0(e){Xd(e,0)}function Oi(e){var t=Dn(e);if(ud(t))return e}function a0(e,t){if(e==="change")return t}var jd=!1;if(St){var ul;if(St){var cl="oninput"in document;if(!cl){var yu=document.createElement("div");yu.setAttribute("oninput","return;"),cl=typeof yu.oninput=="function"}ul=cl}else ul=!1;jd=ul&&(!document.documentMode||9<document.documentMode)}function wu(){Rr&&(Rr.detachEvent("onpropertychange",Vd),Kr=Rr=null)}function Vd(e){if(e.propertyName==="value"&&Oi(Kr)){var t=[];Fd(t,Kr,e,Js(e)),bd(s0,t)}}function u0(e,t,n){e==="focusin"?(wu(),Rr=t,Kr=n,Rr.attachEvent("onpropertychange",Vd)):e==="focusout"&&wu()}function c0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Oi(Kr)}function d0(e,t){if(e==="click")return Oi(t)}function f0(e,t){if(e==="input"||e==="change")return Oi(t)}function p0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var lt=typeof Object.is=="function"?Object.is:p0;function Gr(e,t){if(lt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Hl.call(t,o)||!lt(e[o],t[o]))return!1}return!0}function bu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _u(e,t){var n=bu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bu(n)}}function Bd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Bd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Hd(){for(var e=window,t=oi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=oi(e.document)}return t}function aa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function h0(e){var t=Hd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Bd(n.ownerDocument.documentElement,n)){if(r!==null&&aa(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=_u(n,i);var l=_u(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var g0=St&&"documentMode"in document&&11>=document.documentMode,Mn=null,as=null,Mr=null,us=!1;function ku(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;us||Mn==null||Mn!==oi(r)||(r=Mn,"selectionStart"in r&&aa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Mr&&Gr(Mr,r)||(Mr=r,r=di(as,"onSelect"),0<r.length&&(t=new ia("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Mn)))}function zo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var On={animationend:zo("Animation","AnimationEnd"),animationiteration:zo("Animation","AnimationIteration"),animationstart:zo("Animation","AnimationStart"),transitionend:zo("Transition","TransitionEnd")},dl={},Ud={};St&&(Ud=document.createElement("div").style,"AnimationEvent"in window||(delete On.animationend.animation,delete On.animationiteration.animation,delete On.animationstart.animation),"TransitionEvent"in window||delete On.transitionend.transition);function Di(e){if(dl[e])return dl[e];if(!On[e])return e;var t=On[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ud)return dl[e]=t[n];return e}var Wd=Di("animationend"),Qd=Di("animationiteration"),Kd=Di("animationstart"),Gd=Di("transitionend"),Yd=new Map,xu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rn(e,t){Yd.set(e,t),$n(t,[e])}for(var fl=0;fl<xu.length;fl++){var pl=xu[fl],m0=pl.toLowerCase(),v0=pl[0].toUpperCase()+pl.slice(1);rn(m0,"on"+v0)}rn(Wd,"onAnimationEnd");rn(Qd,"onAnimationIteration");rn(Kd,"onAnimationStart");rn("dblclick","onDoubleClick");rn("focusin","onFocus");rn("focusout","onBlur");rn(Gd,"onTransitionEnd");Jn("onMouseEnter",["mouseout","mouseover"]);Jn("onMouseLeave",["mouseout","mouseover"]);Jn("onPointerEnter",["pointerout","pointerover"]);Jn("onPointerLeave",["pointerout","pointerover"]);$n("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$n("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$n("onBeforeInput",["compositionend","keypress","textInput","paste"]);$n("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$n("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$n("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),y0=new Set("cancel close invalid load scroll toggle".split(" ").concat(zr));function Su(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,mh(r,t,void 0,e),e.currentTarget=null}function Xd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],a=s.instance,u=s.currentTarget;if(s=s.listener,a!==i&&o.isPropagationStopped())break e;Su(o,s,u),i=a}else for(l=0;l<r.length;l++){if(s=r[l],a=s.instance,u=s.currentTarget,s=s.listener,a!==i&&o.isPropagationStopped())break e;Su(o,s,u),i=a}}}if(li)throw e=os,li=!1,os=null,e}function Q(e,t){var n=t[hs];n===void 0&&(n=t[hs]=new Set);var r=e+"__bubble";n.has(r)||(qd(t,e,2,!1),n.add(r))}function hl(e,t,n){var r=0;t&&(r|=4),qd(n,e,r,t)}var To="_reactListening"+Math.random().toString(36).slice(2);function Yr(e){if(!e[To]){e[To]=!0,od.forEach(function(n){n!=="selectionchange"&&(y0.has(n)||hl(n,!1,e),hl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[To]||(t[To]=!0,hl("selectionchange",!1,t))}}function qd(e,t,n,r){switch(Rd(t)){case 1:var o=Lh;break;case 4:o=Nh;break;default:o=ra}n=o.bind(null,t,n,e),o=void 0,!rs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function gl(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;l=l.return}for(;s!==null;){if(l=pn(s),l===null)return;if(a=l.tag,a===5||a===6){r=i=l;continue e}s=s.parentNode}}r=r.return}bd(function(){var u=i,f=Js(n),d=[];e:{var h=Yd.get(e);if(h!==void 0){var m=ia,y=e;switch(e){case"keypress":if(Go(n)===0)break e;case"keydown":case"keyup":m=Gh;break;case"focusin":y="focus",m=al;break;case"focusout":y="blur",m=al;break;case"beforeblur":case"afterblur":m=al;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=fu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Oh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=qh;break;case Wd:case Qd:case Kd:m=Fh;break;case Gd:m=Jh;break;case"scroll":m=Rh;break;case"wheel":m=t0;break;case"copy":case"cut":case"paste":m=Vh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=hu}var b=(t&4)!==0,T=!b&&e==="scroll",p=b?h!==null?h+"Capture":null:h;b=[];for(var c=u,g;c!==null;){g=c;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,p!==null&&(w=Hr(c,p),w!=null&&b.push(Xr(c,w,g)))),T)break;c=c.return}0<b.length&&(h=new m(h,y,null,n,f),d.push({event:h,listeners:b}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",h&&n!==ts&&(y=n.relatedTarget||n.fromElement)&&(pn(y)||y[Ct]))break e;if((m||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=u,y=y?pn(y):null,y!==null&&(T=An(y),y!==T||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=u),m!==y)){if(b=fu,w="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(b=hu,w="onPointerLeave",p="onPointerEnter",c="pointer"),T=m==null?h:Dn(m),g=y==null?h:Dn(y),h=new b(w,c+"leave",m,n,f),h.target=T,h.relatedTarget=g,w=null,pn(f)===u&&(b=new b(p,c+"enter",y,n,f),b.target=g,b.relatedTarget=T,w=b),T=w,m&&y)t:{for(b=m,p=y,c=0,g=b;g;g=zn(g))c++;for(g=0,w=p;w;w=zn(w))g++;for(;0<c-g;)b=zn(b),c--;for(;0<g-c;)p=zn(p),g--;for(;c--;){if(b===p||p!==null&&b===p.alternate)break t;b=zn(b),p=zn(p)}b=null}else b=null;m!==null&&Cu(d,h,m,b,!1),y!==null&&T!==null&&Cu(d,T,y,b,!0)}}e:{if(h=u?Dn(u):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var x=a0;else if(vu(h))if(jd)x=f0;else{x=c0;var C=u0}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(x=d0);if(x&&(x=x(e,u))){Fd(d,x,n,f);break e}C&&C(e,h,u),e==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&Xl(h,"number",h.value)}switch(C=u?Dn(u):window,e){case"focusin":(vu(C)||C.contentEditable==="true")&&(Mn=C,as=u,Mr=null);break;case"focusout":Mr=as=Mn=null;break;case"mousedown":us=!0;break;case"contextmenu":case"mouseup":case"dragend":us=!1,ku(d,n,f);break;case"selectionchange":if(g0)break;case"keydown":case"keyup":ku(d,n,f)}var E;if(sa)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else Rn?Dd(e,n)&&(A="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(Od&&n.locale!=="ko"&&(Rn||A!=="onCompositionStart"?A==="onCompositionEnd"&&Rn&&(E=Md()):(jt=f,oa="value"in jt?jt.value:jt.textContent,Rn=!0)),C=di(u,A),0<C.length&&(A=new pu(A,e,null,n,f),d.push({event:A,listeners:C}),E?A.data=E:(E=Id(n),E!==null&&(A.data=E)))),(E=r0?o0(e,n):i0(e,n))&&(u=di(u,"onBeforeInput"),0<u.length&&(f=new pu("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:u}),f.data=E))}Xd(d,t)})}function Xr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function di(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Hr(e,n),i!=null&&r.unshift(Xr(e,i,o)),i=Hr(e,t),i!=null&&r.push(Xr(e,i,o))),e=e.return}return r}function zn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Cu(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var s=n,a=s.alternate,u=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&u!==null&&(s=u,o?(a=Hr(n,i),a!=null&&l.unshift(Xr(n,a,s))):o||(a=Hr(n,i),a!=null&&l.push(Xr(n,a,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var w0=/\r\n?/g,b0=/\u0000|\uFFFD/g;function Eu(e){return(typeof e=="string"?e:""+e).replace(w0,`
`).replace(b0,"")}function Lo(e,t,n){if(t=Eu(t),Eu(e)!==t&&n)throw Error(k(425))}function fi(){}var cs=null,ds=null;function fs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ps=typeof setTimeout=="function"?setTimeout:void 0,_0=typeof clearTimeout=="function"?clearTimeout:void 0,$u=typeof Promise=="function"?Promise:void 0,k0=typeof queueMicrotask=="function"?queueMicrotask:typeof $u<"u"?function(e){return $u.resolve(null).then(e).catch(x0)}:ps;function x0(e){setTimeout(function(){throw e})}function ml(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Qr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Qr(t)}function Qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Au(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var dr=Math.random().toString(36).slice(2),ft="__reactFiber$"+dr,qr="__reactProps$"+dr,Ct="__reactContainer$"+dr,hs="__reactEvents$"+dr,S0="__reactListeners$"+dr,C0="__reactHandles$"+dr;function pn(e){var t=e[ft];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ct]||n[ft]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Au(e);e!==null;){if(n=e[ft])return n;e=Au(e)}return t}e=n,n=e.parentNode}return null}function po(e){return e=e[ft]||e[Ct],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Dn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function Ii(e){return e[qr]||null}var gs=[],In=-1;function on(e){return{current:e}}function K(e){0>In||(e.current=gs[In],gs[In]=null,In--)}function W(e,t){In++,gs[In]=e.current,e.current=t}var Zt={},be=on(Zt),Ae=on(!1),bn=Zt;function er(e,t){var n=e.type.contextTypes;if(!n)return Zt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Pe(e){return e=e.childContextTypes,e!=null}function pi(){K(Ae),K(be)}function Pu(e,t,n){if(be.current!==Zt)throw Error(k(168));W(be,t),W(Ae,n)}function Zd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(k(108,uh(e)||"Unknown",o));return J({},n,r)}function hi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Zt,bn=be.current,W(be,e),W(Ae,Ae.current),!0}function zu(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=Zd(e,t,bn),r.__reactInternalMemoizedMergedChildContext=e,K(Ae),K(be),W(be,e)):K(Ae),W(Ae,n)}var wt=null,Fi=!1,vl=!1;function Jd(e){wt===null?wt=[e]:wt.push(e)}function E0(e){Fi=!0,Jd(e)}function ln(){if(!vl&&wt!==null){vl=!0;var e=0,t=B;try{var n=wt;for(B=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}wt=null,Fi=!1}catch(o){throw wt!==null&&(wt=wt.slice(e+1)),Sd(ea,ln),o}finally{B=t,vl=!1}}return null}var Fn=[],jn=0,gi=null,mi=0,We=[],Qe=0,_n=null,bt=1,_t="";function cn(e,t){Fn[jn++]=mi,Fn[jn++]=gi,gi=e,mi=t}function ef(e,t,n){We[Qe++]=bt,We[Qe++]=_t,We[Qe++]=_n,_n=e;var r=bt;e=_t;var o=32-ot(r)-1;r&=~(1<<o),n+=1;var i=32-ot(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,bt=1<<32-ot(t)+o|n<<o|r,_t=i+e}else bt=1<<i|n<<o|r,_t=e}function ua(e){e.return!==null&&(cn(e,1),ef(e,1,0))}function ca(e){for(;e===gi;)gi=Fn[--jn],Fn[jn]=null,mi=Fn[--jn],Fn[jn]=null;for(;e===_n;)_n=We[--Qe],We[Qe]=null,_t=We[--Qe],We[Qe]=null,bt=We[--Qe],We[Qe]=null}var Oe=null,Me=null,X=!1,rt=null;function tf(e,t){var n=Ke(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Tu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Oe=e,Me=Qt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Oe=e,Me=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=_n!==null?{id:bt,overflow:_t}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ke(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Oe=e,Me=null,!0):!1;default:return!1}}function ms(e){return(e.mode&1)!==0&&(e.flags&128)===0}function vs(e){if(X){var t=Me;if(t){var n=t;if(!Tu(e,t)){if(ms(e))throw Error(k(418));t=Qt(n.nextSibling);var r=Oe;t&&Tu(e,t)?tf(r,n):(e.flags=e.flags&-4097|2,X=!1,Oe=e)}}else{if(ms(e))throw Error(k(418));e.flags=e.flags&-4097|2,X=!1,Oe=e}}}function Lu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Oe=e}function No(e){if(e!==Oe)return!1;if(!X)return Lu(e),X=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!fs(e.type,e.memoizedProps)),t&&(t=Me)){if(ms(e))throw nf(),Error(k(418));for(;t;)tf(e,t),t=Qt(t.nextSibling)}if(Lu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Me=Qt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Me=null}}else Me=Oe?Qt(e.stateNode.nextSibling):null;return!0}function nf(){for(var e=Me;e;)e=Qt(e.nextSibling)}function tr(){Me=Oe=null,X=!1}function da(e){rt===null?rt=[e]:rt.push(e)}var $0=Pt.ReactCurrentBatchConfig;function tt(e,t){if(e&&e.defaultProps){t=J({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var vi=on(null),yi=null,Vn=null,fa=null;function pa(){fa=Vn=yi=null}function ha(e){var t=vi.current;K(vi),e._currentValue=t}function ys(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Xn(e,t){yi=e,fa=Vn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&($e=!0),e.firstContext=null)}function Xe(e){var t=e._currentValue;if(fa!==e)if(e={context:e,memoizedValue:t,next:null},Vn===null){if(yi===null)throw Error(k(308));Vn=e,yi.dependencies={lanes:0,firstContext:e}}else Vn=Vn.next=e;return t}var hn=null;function ga(e){hn===null?hn=[e]:hn.push(e)}function rf(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,ga(t)):(n.next=o.next,o.next=n),t.interleaved=n,Et(e,r)}function Et(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Mt=!1;function ma(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function of(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function kt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Kt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,F&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Et(e,n)}return o=r.interleaved,o===null?(t.next=t,ga(r)):(t.next=o.next,o.next=t),r.interleaved=t,Et(e,n)}function Yo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ta(e,n)}}function Nu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function wi(e,t,n,r){var o=e.updateQueue;Mt=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var a=s,u=a.next;a.next=null,l===null?i=u:l.next=u,l=a;var f=e.alternate;f!==null&&(f=f.updateQueue,s=f.lastBaseUpdate,s!==l&&(s===null?f.firstBaseUpdate=u:s.next=u,f.lastBaseUpdate=a))}if(i!==null){var d=o.baseState;l=0,f=u=a=null,s=i;do{var h=s.lane,m=s.eventTime;if((r&h)===h){f!==null&&(f=f.next={eventTime:m,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var y=e,b=s;switch(h=t,m=n,b.tag){case 1:if(y=b.payload,typeof y=="function"){d=y.call(m,d,h);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=b.payload,h=typeof y=="function"?y.call(m,d,h):y,h==null)break e;d=J({},d,h);break e;case 2:Mt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[s]:h.push(s))}else m={eventTime:m,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},f===null?(u=f=m,a=d):f=f.next=m,l|=h;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;h=s,s=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(1);if(f===null&&(a=d),o.baseState=a,o.firstBaseUpdate=u,o.lastBaseUpdate=f,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);xn|=l,e.lanes=l,e.memoizedState=d}}function Ru(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(k(191,o));o.call(r)}}}var lf=new rd.Component().refs;function ws(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:J({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ji={isMounted:function(e){return(e=e._reactInternals)?An(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ke(),o=Yt(e),i=kt(r,o);i.payload=t,n!=null&&(i.callback=n),t=Kt(e,i,o),t!==null&&(it(t,e,o,r),Yo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ke(),o=Yt(e),i=kt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Kt(e,i,o),t!==null&&(it(t,e,o,r),Yo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ke(),r=Yt(e),o=kt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Kt(e,o,r),t!==null&&(it(t,e,r,n),Yo(t,e,r))}};function Mu(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Gr(n,r)||!Gr(o,i):!0}function sf(e,t,n){var r=!1,o=Zt,i=t.contextType;return typeof i=="object"&&i!==null?i=Xe(i):(o=Pe(t)?bn:be.current,r=t.contextTypes,i=(r=r!=null)?er(e,o):Zt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ji,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Ou(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ji.enqueueReplaceState(t,t.state,null)}function bs(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=lf,ma(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Xe(i):(i=Pe(t)?bn:be.current,o.context=er(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(ws(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&ji.enqueueReplaceState(o,o.state,null),wi(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function wr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var s=o.refs;s===lf&&(s=o.refs={}),l===null?delete s[i]:s[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function Ro(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Du(e){var t=e._init;return t(e._payload)}function af(e){function t(p,c){if(e){var g=p.deletions;g===null?(p.deletions=[c],p.flags|=16):g.push(c)}}function n(p,c){if(!e)return null;for(;c!==null;)t(p,c),c=c.sibling;return null}function r(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function o(p,c){return p=Xt(p,c),p.index=0,p.sibling=null,p}function i(p,c,g){return p.index=g,e?(g=p.alternate,g!==null?(g=g.index,g<c?(p.flags|=2,c):g):(p.flags|=2,c)):(p.flags|=1048576,c)}function l(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,c,g,w){return c===null||c.tag!==6?(c=Sl(g,p.mode,w),c.return=p,c):(c=o(c,g),c.return=p,c)}function a(p,c,g,w){var x=g.type;return x===Nn?f(p,c,g.props.children,w,g.key):c!==null&&(c.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Rt&&Du(x)===c.type)?(w=o(c,g.props),w.ref=wr(p,c,g),w.return=p,w):(w=ti(g.type,g.key,g.props,null,p.mode,w),w.ref=wr(p,c,g),w.return=p,w)}function u(p,c,g,w){return c===null||c.tag!==4||c.stateNode.containerInfo!==g.containerInfo||c.stateNode.implementation!==g.implementation?(c=Cl(g,p.mode,w),c.return=p,c):(c=o(c,g.children||[]),c.return=p,c)}function f(p,c,g,w,x){return c===null||c.tag!==7?(c=wn(g,p.mode,w,x),c.return=p,c):(c=o(c,g),c.return=p,c)}function d(p,c,g){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Sl(""+c,p.mode,g),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case xo:return g=ti(c.type,c.key,c.props,null,p.mode,g),g.ref=wr(p,null,c),g.return=p,g;case Ln:return c=Cl(c,p.mode,g),c.return=p,c;case Rt:var w=c._init;return d(p,w(c._payload),g)}if(Ar(c)||hr(c))return c=wn(c,p.mode,g,null),c.return=p,c;Ro(p,c)}return null}function h(p,c,g,w){var x=c!==null?c.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return x!==null?null:s(p,c,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case xo:return g.key===x?a(p,c,g,w):null;case Ln:return g.key===x?u(p,c,g,w):null;case Rt:return x=g._init,h(p,c,x(g._payload),w)}if(Ar(g)||hr(g))return x!==null?null:f(p,c,g,w,null);Ro(p,g)}return null}function m(p,c,g,w,x){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(g)||null,s(c,p,""+w,x);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case xo:return p=p.get(w.key===null?g:w.key)||null,a(c,p,w,x);case Ln:return p=p.get(w.key===null?g:w.key)||null,u(c,p,w,x);case Rt:var C=w._init;return m(p,c,g,C(w._payload),x)}if(Ar(w)||hr(w))return p=p.get(g)||null,f(c,p,w,x,null);Ro(c,w)}return null}function y(p,c,g,w){for(var x=null,C=null,E=c,A=c=0,j=null;E!==null&&A<g.length;A++){E.index>A?(j=E,E=null):j=E.sibling;var N=h(p,E,g[A],w);if(N===null){E===null&&(E=j);break}e&&E&&N.alternate===null&&t(p,E),c=i(N,c,A),C===null?x=N:C.sibling=N,C=N,E=j}if(A===g.length)return n(p,E),X&&cn(p,A),x;if(E===null){for(;A<g.length;A++)E=d(p,g[A],w),E!==null&&(c=i(E,c,A),C===null?x=E:C.sibling=E,C=E);return X&&cn(p,A),x}for(E=r(p,E);A<g.length;A++)j=m(E,p,A,g[A],w),j!==null&&(e&&j.alternate!==null&&E.delete(j.key===null?A:j.key),c=i(j,c,A),C===null?x=j:C.sibling=j,C=j);return e&&E.forEach(function($){return t(p,$)}),X&&cn(p,A),x}function b(p,c,g,w){var x=hr(g);if(typeof x!="function")throw Error(k(150));if(g=x.call(g),g==null)throw Error(k(151));for(var C=x=null,E=c,A=c=0,j=null,N=g.next();E!==null&&!N.done;A++,N=g.next()){E.index>A?(j=E,E=null):j=E.sibling;var $=h(p,E,N.value,w);if($===null){E===null&&(E=j);break}e&&E&&$.alternate===null&&t(p,E),c=i($,c,A),C===null?x=$:C.sibling=$,C=$,E=j}if(N.done)return n(p,E),X&&cn(p,A),x;if(E===null){for(;!N.done;A++,N=g.next())N=d(p,N.value,w),N!==null&&(c=i(N,c,A),C===null?x=N:C.sibling=N,C=N);return X&&cn(p,A),x}for(E=r(p,E);!N.done;A++,N=g.next())N=m(E,p,A,N.value,w),N!==null&&(e&&N.alternate!==null&&E.delete(N.key===null?A:N.key),c=i(N,c,A),C===null?x=N:C.sibling=N,C=N);return e&&E.forEach(function(S){return t(p,S)}),X&&cn(p,A),x}function T(p,c,g,w){if(typeof g=="object"&&g!==null&&g.type===Nn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case xo:e:{for(var x=g.key,C=c;C!==null;){if(C.key===x){if(x=g.type,x===Nn){if(C.tag===7){n(p,C.sibling),c=o(C,g.props.children),c.return=p,p=c;break e}}else if(C.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Rt&&Du(x)===C.type){n(p,C.sibling),c=o(C,g.props),c.ref=wr(p,C,g),c.return=p,p=c;break e}n(p,C);break}else t(p,C);C=C.sibling}g.type===Nn?(c=wn(g.props.children,p.mode,w,g.key),c.return=p,p=c):(w=ti(g.type,g.key,g.props,null,p.mode,w),w.ref=wr(p,c,g),w.return=p,p=w)}return l(p);case Ln:e:{for(C=g.key;c!==null;){if(c.key===C)if(c.tag===4&&c.stateNode.containerInfo===g.containerInfo&&c.stateNode.implementation===g.implementation){n(p,c.sibling),c=o(c,g.children||[]),c.return=p,p=c;break e}else{n(p,c);break}else t(p,c);c=c.sibling}c=Cl(g,p.mode,w),c.return=p,p=c}return l(p);case Rt:return C=g._init,T(p,c,C(g._payload),w)}if(Ar(g))return y(p,c,g,w);if(hr(g))return b(p,c,g,w);Ro(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,c!==null&&c.tag===6?(n(p,c.sibling),c=o(c,g),c.return=p,p=c):(n(p,c),c=Sl(g,p.mode,w),c.return=p,p=c),l(p)):n(p,c)}return T}var nr=af(!0),uf=af(!1),ho={},ht=on(ho),Zr=on(ho),Jr=on(ho);function gn(e){if(e===ho)throw Error(k(174));return e}function va(e,t){switch(W(Jr,t),W(Zr,e),W(ht,ho),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Zl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Zl(t,e)}K(ht),W(ht,t)}function rr(){K(ht),K(Zr),K(Jr)}function cf(e){gn(Jr.current);var t=gn(ht.current),n=Zl(t,e.type);t!==n&&(W(Zr,e),W(ht,n))}function ya(e){Zr.current===e&&(K(ht),K(Zr))}var q=on(0);function bi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var yl=[];function wa(){for(var e=0;e<yl.length;e++)yl[e]._workInProgressVersionPrimary=null;yl.length=0}var Xo=Pt.ReactCurrentDispatcher,wl=Pt.ReactCurrentBatchConfig,kn=0,Z=null,le=null,de=null,_i=!1,Or=!1,eo=0,A0=0;function ve(){throw Error(k(321))}function ba(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!lt(e[n],t[n]))return!1;return!0}function _a(e,t,n,r,o,i){if(kn=i,Z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Xo.current=e===null||e.memoizedState===null?L0:N0,e=n(r,o),Or){i=0;do{if(Or=!1,eo=0,25<=i)throw Error(k(301));i+=1,de=le=null,t.updateQueue=null,Xo.current=R0,e=n(r,o)}while(Or)}if(Xo.current=ki,t=le!==null&&le.next!==null,kn=0,de=le=Z=null,_i=!1,t)throw Error(k(300));return e}function ka(){var e=eo!==0;return eo=0,e}function ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return de===null?Z.memoizedState=de=e:de=de.next=e,de}function qe(){if(le===null){var e=Z.alternate;e=e!==null?e.memoizedState:null}else e=le.next;var t=de===null?Z.memoizedState:de.next;if(t!==null)de=t,le=e;else{if(e===null)throw Error(k(310));le=e,e={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},de===null?Z.memoizedState=de=e:de=de.next=e}return de}function to(e,t){return typeof t=="function"?t(e):t}function bl(e){var t=qe(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=le,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=l=null,a=null,u=i;do{var f=u.lane;if((kn&f)===f)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(s=a=d,l=r):a=a.next=d,Z.lanes|=f,xn|=f}u=u.next}while(u!==null&&u!==i);a===null?l=r:a.next=s,lt(r,t.memoizedState)||($e=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,Z.lanes|=i,xn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function _l(e){var t=qe(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);lt(i,t.memoizedState)||($e=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function df(){}function ff(e,t){var n=Z,r=qe(),o=t(),i=!lt(r.memoizedState,o);if(i&&(r.memoizedState=o,$e=!0),r=r.queue,xa(gf.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||de!==null&&de.memoizedState.tag&1){if(n.flags|=2048,no(9,hf.bind(null,n,r,o,t),void 0,null),fe===null)throw Error(k(349));kn&30||pf(n,t,o)}return o}function pf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function hf(e,t,n,r){t.value=n,t.getSnapshot=r,mf(t)&&vf(e)}function gf(e,t,n){return n(function(){mf(t)&&vf(e)})}function mf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!lt(e,n)}catch{return!0}}function vf(e){var t=Et(e,1);t!==null&&it(t,e,1,-1)}function Iu(e){var t=ct();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:to,lastRenderedState:e},t.queue=e,e=e.dispatch=T0.bind(null,Z,e),[t.memoizedState,e]}function no(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function yf(){return qe().memoizedState}function qo(e,t,n,r){var o=ct();Z.flags|=e,o.memoizedState=no(1|t,n,void 0,r===void 0?null:r)}function Vi(e,t,n,r){var o=qe();r=r===void 0?null:r;var i=void 0;if(le!==null){var l=le.memoizedState;if(i=l.destroy,r!==null&&ba(r,l.deps)){o.memoizedState=no(t,n,i,r);return}}Z.flags|=e,o.memoizedState=no(1|t,n,i,r)}function Fu(e,t){return qo(8390656,8,e,t)}function xa(e,t){return Vi(2048,8,e,t)}function wf(e,t){return Vi(4,2,e,t)}function bf(e,t){return Vi(4,4,e,t)}function _f(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function kf(e,t,n){return n=n!=null?n.concat([e]):null,Vi(4,4,_f.bind(null,t,e),n)}function Sa(){}function xf(e,t){var n=qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ba(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Sf(e,t){var n=qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ba(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Cf(e,t,n){return kn&21?(lt(n,t)||(n=$d(),Z.lanes|=n,xn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,$e=!0),e.memoizedState=n)}function P0(e,t){var n=B;B=n!==0&&4>n?n:4,e(!0);var r=wl.transition;wl.transition={};try{e(!1),t()}finally{B=n,wl.transition=r}}function Ef(){return qe().memoizedState}function z0(e,t,n){var r=Yt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},$f(e))Af(t,n);else if(n=rf(e,t,n,r),n!==null){var o=ke();it(n,e,r,o),Pf(n,t,r)}}function T0(e,t,n){var r=Yt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if($f(e))Af(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,n);if(o.hasEagerState=!0,o.eagerState=s,lt(s,l)){var a=t.interleaved;a===null?(o.next=o,ga(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=rf(e,t,o,r),n!==null&&(o=ke(),it(n,e,r,o),Pf(n,t,r))}}function $f(e){var t=e.alternate;return e===Z||t!==null&&t===Z}function Af(e,t){Or=_i=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Pf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ta(e,n)}}var ki={readContext:Xe,useCallback:ve,useContext:ve,useEffect:ve,useImperativeHandle:ve,useInsertionEffect:ve,useLayoutEffect:ve,useMemo:ve,useReducer:ve,useRef:ve,useState:ve,useDebugValue:ve,useDeferredValue:ve,useTransition:ve,useMutableSource:ve,useSyncExternalStore:ve,useId:ve,unstable_isNewReconciler:!1},L0={readContext:Xe,useCallback:function(e,t){return ct().memoizedState=[e,t===void 0?null:t],e},useContext:Xe,useEffect:Fu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,qo(4194308,4,_f.bind(null,t,e),n)},useLayoutEffect:function(e,t){return qo(4194308,4,e,t)},useInsertionEffect:function(e,t){return qo(4,2,e,t)},useMemo:function(e,t){var n=ct();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ct();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=z0.bind(null,Z,e),[r.memoizedState,e]},useRef:function(e){var t=ct();return e={current:e},t.memoizedState=e},useState:Iu,useDebugValue:Sa,useDeferredValue:function(e){return ct().memoizedState=e},useTransition:function(){var e=Iu(!1),t=e[0];return e=P0.bind(null,e[1]),ct().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Z,o=ct();if(X){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),fe===null)throw Error(k(349));kn&30||pf(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Fu(gf.bind(null,r,i,e),[e]),r.flags|=2048,no(9,hf.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=ct(),t=fe.identifierPrefix;if(X){var n=_t,r=bt;n=(r&~(1<<32-ot(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=eo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=A0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},N0={readContext:Xe,useCallback:xf,useContext:Xe,useEffect:xa,useImperativeHandle:kf,useInsertionEffect:wf,useLayoutEffect:bf,useMemo:Sf,useReducer:bl,useRef:yf,useState:function(){return bl(to)},useDebugValue:Sa,useDeferredValue:function(e){var t=qe();return Cf(t,le.memoizedState,e)},useTransition:function(){var e=bl(to)[0],t=qe().memoizedState;return[e,t]},useMutableSource:df,useSyncExternalStore:ff,useId:Ef,unstable_isNewReconciler:!1},R0={readContext:Xe,useCallback:xf,useContext:Xe,useEffect:xa,useImperativeHandle:kf,useInsertionEffect:wf,useLayoutEffect:bf,useMemo:Sf,useReducer:_l,useRef:yf,useState:function(){return _l(to)},useDebugValue:Sa,useDeferredValue:function(e){var t=qe();return le===null?t.memoizedState=e:Cf(t,le.memoizedState,e)},useTransition:function(){var e=_l(to)[0],t=qe().memoizedState;return[e,t]},useMutableSource:df,useSyncExternalStore:ff,useId:Ef,unstable_isNewReconciler:!1};function or(e,t){try{var n="",r=t;do n+=ah(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function kl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function _s(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var M0=typeof WeakMap=="function"?WeakMap:Map;function zf(e,t,n){n=kt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Si||(Si=!0,Ts=r),_s(e,t)},n}function Tf(e,t,n){n=kt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){_s(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){_s(e,t),typeof r!="function"&&(Gt===null?Gt=new Set([this]):Gt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function ju(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new M0;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Y0.bind(null,e,t,n),t.then(e,e))}function Vu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Bu(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=kt(-1,1),t.tag=2,Kt(n,t,1))),n.lanes|=1),e)}var O0=Pt.ReactCurrentOwner,$e=!1;function _e(e,t,n,r){t.child=e===null?uf(t,null,n,r):nr(t,e.child,n,r)}function Hu(e,t,n,r,o){n=n.render;var i=t.ref;return Xn(t,o),r=_a(e,t,n,r,i,o),n=ka(),e!==null&&!$e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,$t(e,t,o)):(X&&n&&ua(t),t.flags|=1,_e(e,t,r,o),t.child)}function Uu(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!La(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Lf(e,t,i,r,o)):(e=ti(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Gr,n(l,r)&&e.ref===t.ref)return $t(e,t,o)}return t.flags|=1,e=Xt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Lf(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Gr(i,r)&&e.ref===t.ref)if($e=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&($e=!0);else return t.lanes=e.lanes,$t(e,t,o)}return ks(e,t,n,r,o)}function Nf(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(Hn,Ne),Ne|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(Hn,Ne),Ne|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,W(Hn,Ne),Ne|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,W(Hn,Ne),Ne|=r;return _e(e,t,o,n),t.child}function Rf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ks(e,t,n,r,o){var i=Pe(n)?bn:be.current;return i=er(t,i),Xn(t,o),n=_a(e,t,n,r,i,o),r=ka(),e!==null&&!$e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,$t(e,t,o)):(X&&r&&ua(t),t.flags|=1,_e(e,t,n,o),t.child)}function Wu(e,t,n,r,o){if(Pe(n)){var i=!0;hi(t)}else i=!1;if(Xn(t,o),t.stateNode===null)Zo(e,t),sf(t,n,r),bs(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var a=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=Xe(u):(u=Pe(n)?bn:be.current,u=er(t,u));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof l.getSnapshotBeforeUpdate=="function";d||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||a!==u)&&Ou(t,l,r,u),Mt=!1;var h=t.memoizedState;l.state=h,wi(t,r,l,o),a=t.memoizedState,s!==r||h!==a||Ae.current||Mt?(typeof f=="function"&&(ws(t,n,f,r),a=t.memoizedState),(s=Mt||Mu(t,n,s,r,h,a,u))?(d||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),l.props=r,l.state=a,l.context=u,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,of(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:tt(t.type,s),l.props=u,d=t.pendingProps,h=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=Xe(a):(a=Pe(n)?bn:be.current,a=er(t,a));var m=n.getDerivedStateFromProps;(f=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==d||h!==a)&&Ou(t,l,r,a),Mt=!1,h=t.memoizedState,l.state=h,wi(t,r,l,o);var y=t.memoizedState;s!==d||h!==y||Ae.current||Mt?(typeof m=="function"&&(ws(t,n,m,r),y=t.memoizedState),(u=Mt||Mu(t,n,u,r,h,y,a)||!1)?(f||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,y,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,y,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),l.props=r,l.state=y,l.context=a,r=u):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return xs(e,t,n,r,i,o)}function xs(e,t,n,r,o,i){Rf(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&zu(t,n,!1),$t(e,t,i);r=t.stateNode,O0.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=nr(t,e.child,null,i),t.child=nr(t,null,s,i)):_e(e,t,s,i),t.memoizedState=r.state,o&&zu(t,n,!0),t.child}function Mf(e){var t=e.stateNode;t.pendingContext?Pu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Pu(e,t.context,!1),va(e,t.containerInfo)}function Qu(e,t,n,r,o){return tr(),da(o),t.flags|=256,_e(e,t,n,r),t.child}var Ss={dehydrated:null,treeContext:null,retryLane:0};function Cs(e){return{baseLanes:e,cachePool:null,transitions:null}}function Of(e,t,n){var r=t.pendingProps,o=q.current,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),W(q,o&1),e===null)return vs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Ui(l,r,0,null),e=wn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Cs(n),t.memoizedState=Ss,e):Ca(t,l));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return D0(e,t,l,r,s,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,s=o.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Xt(o,a),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=Xt(s,i):(i=wn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Cs(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Ss,r}return i=e.child,e=i.sibling,r=Xt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ca(e,t){return t=Ui({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Mo(e,t,n,r){return r!==null&&da(r),nr(t,e.child,null,n),e=Ca(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function D0(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=kl(Error(k(422))),Mo(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Ui({mode:"visible",children:r.children},o,0,null),i=wn(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&nr(t,e.child,null,l),t.child.memoizedState=Cs(l),t.memoizedState=Ss,i);if(!(t.mode&1))return Mo(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(k(419)),r=kl(i,r,void 0),Mo(e,t,l,r)}if(s=(l&e.childLanes)!==0,$e||s){if(r=fe,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Et(e,o),it(r,e,o,-1))}return Ta(),r=kl(Error(k(421))),Mo(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=X0.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Me=Qt(o.nextSibling),Oe=t,X=!0,rt=null,e!==null&&(We[Qe++]=bt,We[Qe++]=_t,We[Qe++]=_n,bt=e.id,_t=e.overflow,_n=t),t=Ca(t,r.children),t.flags|=4096,t)}function Ku(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ys(e.return,t,n)}function xl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Df(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(_e(e,t,r.children,n),r=q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ku(e,n,t);else if(e.tag===19)Ku(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(q,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&bi(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),xl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&bi(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}xl(t,!0,n,null,i);break;case"together":xl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Zo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function $t(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),xn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=Xt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Xt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function I0(e,t,n){switch(t.tag){case 3:Mf(t),tr();break;case 5:cf(t);break;case 1:Pe(t.type)&&hi(t);break;case 4:va(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;W(vi,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(W(q,q.current&1),t.flags|=128,null):n&t.child.childLanes?Of(e,t,n):(W(q,q.current&1),e=$t(e,t,n),e!==null?e.sibling:null);W(q,q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Df(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),W(q,q.current),r)break;return null;case 22:case 23:return t.lanes=0,Nf(e,t,n)}return $t(e,t,n)}var If,Es,Ff,jf;If=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Es=function(){};Ff=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,gn(ht.current);var i=null;switch(n){case"input":o=Gl(e,o),r=Gl(e,r),i=[];break;case"select":o=J({},o,{value:void 0}),r=J({},r,{value:void 0}),i=[];break;case"textarea":o=ql(e,o),r=ql(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=fi)}Jl(n,r);var l;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var s=o[u];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Vr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var a=r[u];if(s=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&a!==s&&(a!=null||s!=null))if(u==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(i||(i=[]),i.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(i=i||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Vr.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&Q("scroll",e),i||s===a||(i=[])):(i=i||[]).push(u,a))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};jf=function(e,t,n,r){n!==r&&(t.flags|=4)};function br(e,t){if(!X)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ye(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function F0(e,t,n){var r=t.pendingProps;switch(ca(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ye(t),null;case 1:return Pe(t.type)&&pi(),ye(t),null;case 3:return r=t.stateNode,rr(),K(Ae),K(be),wa(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(No(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,rt!==null&&(Rs(rt),rt=null))),Es(e,t),ye(t),null;case 5:ya(t);var o=gn(Jr.current);if(n=t.type,e!==null&&t.stateNode!=null)Ff(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return ye(t),null}if(e=gn(ht.current),No(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[ft]=t,r[qr]=i,e=(t.mode&1)!==0,n){case"dialog":Q("cancel",r),Q("close",r);break;case"iframe":case"object":case"embed":Q("load",r);break;case"video":case"audio":for(o=0;o<zr.length;o++)Q(zr[o],r);break;case"source":Q("error",r);break;case"img":case"image":case"link":Q("error",r),Q("load",r);break;case"details":Q("toggle",r);break;case"input":nu(r,i),Q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Q("invalid",r);break;case"textarea":ou(r,i),Q("invalid",r)}Jl(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Lo(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Lo(r.textContent,s,e),o=["children",""+s]):Vr.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&Q("scroll",r)}switch(n){case"input":So(r),ru(r,i,!0);break;case"textarea":So(r),iu(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=fi)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=fd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[ft]=t,e[qr]=r,If(e,t,!1,!1),t.stateNode=e;e:{switch(l=es(n,r),n){case"dialog":Q("cancel",e),Q("close",e),o=r;break;case"iframe":case"object":case"embed":Q("load",e),o=r;break;case"video":case"audio":for(o=0;o<zr.length;o++)Q(zr[o],e);o=r;break;case"source":Q("error",e),o=r;break;case"img":case"image":case"link":Q("error",e),Q("load",e),o=r;break;case"details":Q("toggle",e),o=r;break;case"input":nu(e,r),o=Gl(e,r),Q("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=J({},r,{value:void 0}),Q("invalid",e);break;case"textarea":ou(e,r),o=ql(e,r),Q("invalid",e);break;default:o=r}Jl(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var a=s[i];i==="style"?gd(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&pd(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Br(e,a):typeof a=="number"&&Br(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Vr.hasOwnProperty(i)?a!=null&&i==="onScroll"&&Q("scroll",e):a!=null&&Ys(e,i,a,l))}switch(n){case"input":So(e),ru(e,r,!1);break;case"textarea":So(e),iu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+qt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Qn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Qn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=fi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ye(t),null;case 6:if(e&&t.stateNode!=null)jf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=gn(Jr.current),gn(ht.current),No(t)){if(r=t.stateNode,n=t.memoizedProps,r[ft]=t,(i=r.nodeValue!==n)&&(e=Oe,e!==null))switch(e.tag){case 3:Lo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Lo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ft]=t,t.stateNode=r}return ye(t),null;case 13:if(K(q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(X&&Me!==null&&t.mode&1&&!(t.flags&128))nf(),tr(),t.flags|=98560,i=!1;else if(i=No(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(k(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(k(317));i[ft]=t}else tr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ye(t),i=!1}else rt!==null&&(Rs(rt),rt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||q.current&1?se===0&&(se=3):Ta())),t.updateQueue!==null&&(t.flags|=4),ye(t),null);case 4:return rr(),Es(e,t),e===null&&Yr(t.stateNode.containerInfo),ye(t),null;case 10:return ha(t.type._context),ye(t),null;case 17:return Pe(t.type)&&pi(),ye(t),null;case 19:if(K(q),i=t.memoizedState,i===null)return ye(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)br(i,!1);else{if(se!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=bi(e),l!==null){for(t.flags|=128,br(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(q,q.current&1|2),t.child}e=e.sibling}i.tail!==null&&re()>ir&&(t.flags|=128,r=!0,br(i,!1),t.lanes=4194304)}else{if(!r)if(e=bi(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),br(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!X)return ye(t),null}else 2*re()-i.renderingStartTime>ir&&n!==1073741824&&(t.flags|=128,r=!0,br(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=re(),t.sibling=null,n=q.current,W(q,r?n&1|2:n&1),t):(ye(t),null);case 22:case 23:return za(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ne&1073741824&&(ye(t),t.subtreeFlags&6&&(t.flags|=8192)):ye(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function j0(e,t){switch(ca(t),t.tag){case 1:return Pe(t.type)&&pi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return rr(),K(Ae),K(be),wa(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ya(t),null;case 13:if(K(q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));tr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return K(q),null;case 4:return rr(),null;case 10:return ha(t.type._context),null;case 22:case 23:return za(),null;case 24:return null;default:return null}}var Oo=!1,we=!1,V0=typeof WeakSet=="function"?WeakSet:Set,z=null;function Bn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ee(e,t,r)}else n.current=null}function $s(e,t,n){try{n()}catch(r){ee(e,t,r)}}var Gu=!1;function B0(e,t){if(cs=ui,e=Hd(),aa(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,s=-1,a=-1,u=0,f=0,d=e,h=null;t:for(;;){for(var m;d!==n||o!==0&&d.nodeType!==3||(s=l+o),d!==i||r!==0&&d.nodeType!==3||(a=l+r),d.nodeType===3&&(l+=d.nodeValue.length),(m=d.firstChild)!==null;)h=d,d=m;for(;;){if(d===e)break t;if(h===n&&++u===o&&(s=l),h===i&&++f===r&&(a=l),(m=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=m}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(ds={focusedElem:e,selectionRange:n},ui=!1,z=t;z!==null;)if(t=z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,z=e;else for(;z!==null;){t=z;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var b=y.memoizedProps,T=y.memoizedState,p=t.stateNode,c=p.getSnapshotBeforeUpdate(t.elementType===t.type?b:tt(t.type,b),T);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(w){ee(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,z=e;break}z=t.return}return y=Gu,Gu=!1,y}function Dr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&$s(t,n,i)}o=o.next}while(o!==r)}}function Bi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function As(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Vf(e){var t=e.alternate;t!==null&&(e.alternate=null,Vf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ft],delete t[qr],delete t[hs],delete t[S0],delete t[C0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Bf(e){return e.tag===5||e.tag===3||e.tag===4}function Yu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Bf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ps(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=fi));else if(r!==4&&(e=e.child,e!==null))for(Ps(e,t,n),e=e.sibling;e!==null;)Ps(e,t,n),e=e.sibling}function zs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(zs(e,t,n),e=e.sibling;e!==null;)zs(e,t,n),e=e.sibling}var pe=null,nt=!1;function Lt(e,t,n){for(n=n.child;n!==null;)Hf(e,t,n),n=n.sibling}function Hf(e,t,n){if(pt&&typeof pt.onCommitFiberUnmount=="function")try{pt.onCommitFiberUnmount(Ri,n)}catch{}switch(n.tag){case 5:we||Bn(n,t);case 6:var r=pe,o=nt;pe=null,Lt(e,t,n),pe=r,nt=o,pe!==null&&(nt?(e=pe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):pe.removeChild(n.stateNode));break;case 18:pe!==null&&(nt?(e=pe,n=n.stateNode,e.nodeType===8?ml(e.parentNode,n):e.nodeType===1&&ml(e,n),Qr(e)):ml(pe,n.stateNode));break;case 4:r=pe,o=nt,pe=n.stateNode.containerInfo,nt=!0,Lt(e,t,n),pe=r,nt=o;break;case 0:case 11:case 14:case 15:if(!we&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&$s(n,t,l),o=o.next}while(o!==r)}Lt(e,t,n);break;case 1:if(!we&&(Bn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ee(n,t,s)}Lt(e,t,n);break;case 21:Lt(e,t,n);break;case 22:n.mode&1?(we=(r=we)||n.memoizedState!==null,Lt(e,t,n),we=r):Lt(e,t,n);break;default:Lt(e,t,n)}}function Xu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new V0),t.forEach(function(r){var o=q0.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Je(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:pe=s.stateNode,nt=!1;break e;case 3:pe=s.stateNode.containerInfo,nt=!0;break e;case 4:pe=s.stateNode.containerInfo,nt=!0;break e}s=s.return}if(pe===null)throw Error(k(160));Hf(i,l,o),pe=null,nt=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(u){ee(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Uf(t,e),t=t.sibling}function Uf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Je(t,e),ut(e),r&4){try{Dr(3,e,e.return),Bi(3,e)}catch(b){ee(e,e.return,b)}try{Dr(5,e,e.return)}catch(b){ee(e,e.return,b)}}break;case 1:Je(t,e),ut(e),r&512&&n!==null&&Bn(n,n.return);break;case 5:if(Je(t,e),ut(e),r&512&&n!==null&&Bn(n,n.return),e.flags&32){var o=e.stateNode;try{Br(o,"")}catch(b){ee(e,e.return,b)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&cd(o,i),es(s,l);var u=es(s,i);for(l=0;l<a.length;l+=2){var f=a[l],d=a[l+1];f==="style"?gd(o,d):f==="dangerouslySetInnerHTML"?pd(o,d):f==="children"?Br(o,d):Ys(o,f,d,u)}switch(s){case"input":Yl(o,i);break;case"textarea":dd(o,i);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var m=i.value;m!=null?Qn(o,!!i.multiple,m,!1):h!==!!i.multiple&&(i.defaultValue!=null?Qn(o,!!i.multiple,i.defaultValue,!0):Qn(o,!!i.multiple,i.multiple?[]:"",!1))}o[qr]=i}catch(b){ee(e,e.return,b)}}break;case 6:if(Je(t,e),ut(e),r&4){if(e.stateNode===null)throw Error(k(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(b){ee(e,e.return,b)}}break;case 3:if(Je(t,e),ut(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Qr(t.containerInfo)}catch(b){ee(e,e.return,b)}break;case 4:Je(t,e),ut(e);break;case 13:Je(t,e),ut(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Aa=re())),r&4&&Xu(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(we=(u=we)||f,Je(t,e),we=u):Je(t,e),ut(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(z=e,f=e.child;f!==null;){for(d=z=f;z!==null;){switch(h=z,m=h.child,h.tag){case 0:case 11:case 14:case 15:Dr(4,h,h.return);break;case 1:Bn(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(b){ee(r,n,b)}}break;case 5:Bn(h,h.return);break;case 22:if(h.memoizedState!==null){Zu(d);continue}}m!==null?(m.return=h,z=m):Zu(d)}f=f.sibling}e:for(f=null,d=e;;){if(d.tag===5){if(f===null){f=d;try{o=d.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=d.stateNode,a=d.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=hd("display",l))}catch(b){ee(e,e.return,b)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(b){ee(e,e.return,b)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Je(t,e),ut(e),r&4&&Xu(e);break;case 21:break;default:Je(t,e),ut(e)}}function ut(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Bf(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Br(o,""),r.flags&=-33);var i=Yu(e);zs(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,s=Yu(e);Ps(e,s,l);break;default:throw Error(k(161))}}catch(a){ee(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function H0(e,t,n){z=e,Wf(e)}function Wf(e,t,n){for(var r=(e.mode&1)!==0;z!==null;){var o=z,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||Oo;if(!l){var s=o.alternate,a=s!==null&&s.memoizedState!==null||we;s=Oo;var u=we;if(Oo=l,(we=a)&&!u)for(z=o;z!==null;)l=z,a=l.child,l.tag===22&&l.memoizedState!==null?Ju(o):a!==null?(a.return=l,z=a):Ju(o);for(;i!==null;)z=i,Wf(i),i=i.sibling;z=o,Oo=s,we=u}qu(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,z=i):qu(e)}}function qu(e){for(;z!==null;){var t=z;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:we||Bi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!we)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:tt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Ru(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ru(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&Qr(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}we||t.flags&512&&As(t)}catch(h){ee(t,t.return,h)}}if(t===e){z=null;break}if(n=t.sibling,n!==null){n.return=t.return,z=n;break}z=t.return}}function Zu(e){for(;z!==null;){var t=z;if(t===e){z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,z=n;break}z=t.return}}function Ju(e){for(;z!==null;){var t=z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Bi(4,t)}catch(a){ee(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){ee(t,o,a)}}var i=t.return;try{As(t)}catch(a){ee(t,i,a)}break;case 5:var l=t.return;try{As(t)}catch(a){ee(t,l,a)}}}catch(a){ee(t,t.return,a)}if(t===e){z=null;break}var s=t.sibling;if(s!==null){s.return=t.return,z=s;break}z=t.return}}var U0=Math.ceil,xi=Pt.ReactCurrentDispatcher,Ea=Pt.ReactCurrentOwner,Ye=Pt.ReactCurrentBatchConfig,F=0,fe=null,ie=null,he=0,Ne=0,Hn=on(0),se=0,ro=null,xn=0,Hi=0,$a=0,Ir=null,Ee=null,Aa=0,ir=1/0,yt=null,Si=!1,Ts=null,Gt=null,Do=!1,Vt=null,Ci=0,Fr=0,Ls=null,Jo=-1,ei=0;function ke(){return F&6?re():Jo!==-1?Jo:Jo=re()}function Yt(e){return e.mode&1?F&2&&he!==0?he&-he:$0.transition!==null?(ei===0&&(ei=$d()),ei):(e=B,e!==0||(e=window.event,e=e===void 0?16:Rd(e.type)),e):1}function it(e,t,n,r){if(50<Fr)throw Fr=0,Ls=null,Error(k(185));co(e,n,r),(!(F&2)||e!==fe)&&(e===fe&&(!(F&2)&&(Hi|=n),se===4&&It(e,he)),ze(e,r),n===1&&F===0&&!(t.mode&1)&&(ir=re()+500,Fi&&ln()))}function ze(e,t){var n=e.callbackNode;$h(e,t);var r=ai(e,e===fe?he:0);if(r===0)n!==null&&au(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&au(n),t===1)e.tag===0?E0(ec.bind(null,e)):Jd(ec.bind(null,e)),k0(function(){!(F&6)&&ln()}),n=null;else{switch(Ad(r)){case 1:n=ea;break;case 4:n=Cd;break;case 16:n=si;break;case 536870912:n=Ed;break;default:n=si}n=Jf(n,Qf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Qf(e,t){if(Jo=-1,ei=0,F&6)throw Error(k(327));var n=e.callbackNode;if(qn()&&e.callbackNode!==n)return null;var r=ai(e,e===fe?he:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ei(e,r);else{t=r;var o=F;F|=2;var i=Gf();(fe!==e||he!==t)&&(yt=null,ir=re()+500,yn(e,t));do try{K0();break}catch(s){Kf(e,s)}while(1);pa(),xi.current=i,F=o,ie!==null?t=0:(fe=null,he=0,t=se)}if(t!==0){if(t===2&&(o=is(e),o!==0&&(r=o,t=Ns(e,o))),t===1)throw n=ro,yn(e,0),It(e,r),ze(e,re()),n;if(t===6)It(e,r);else{if(o=e.current.alternate,!(r&30)&&!W0(o)&&(t=Ei(e,r),t===2&&(i=is(e),i!==0&&(r=i,t=Ns(e,i))),t===1))throw n=ro,yn(e,0),It(e,r),ze(e,re()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:dn(e,Ee,yt);break;case 3:if(It(e,r),(r&130023424)===r&&(t=Aa+500-re(),10<t)){if(ai(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ke(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ps(dn.bind(null,e,Ee,yt),t);break}dn(e,Ee,yt);break;case 4:if(It(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-ot(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*U0(r/1960))-r,10<r){e.timeoutHandle=ps(dn.bind(null,e,Ee,yt),r);break}dn(e,Ee,yt);break;case 5:dn(e,Ee,yt);break;default:throw Error(k(329))}}}return ze(e,re()),e.callbackNode===n?Qf.bind(null,e):null}function Ns(e,t){var n=Ir;return e.current.memoizedState.isDehydrated&&(yn(e,t).flags|=256),e=Ei(e,t),e!==2&&(t=Ee,Ee=n,t!==null&&Rs(t)),e}function Rs(e){Ee===null?Ee=e:Ee.push.apply(Ee,e)}function W0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!lt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function It(e,t){for(t&=~$a,t&=~Hi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ot(t),r=1<<n;e[n]=-1,t&=~r}}function ec(e){if(F&6)throw Error(k(327));qn();var t=ai(e,0);if(!(t&1))return ze(e,re()),null;var n=Ei(e,t);if(e.tag!==0&&n===2){var r=is(e);r!==0&&(t=r,n=Ns(e,r))}if(n===1)throw n=ro,yn(e,0),It(e,t),ze(e,re()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,dn(e,Ee,yt),ze(e,re()),null}function Pa(e,t){var n=F;F|=1;try{return e(t)}finally{F=n,F===0&&(ir=re()+500,Fi&&ln())}}function Sn(e){Vt!==null&&Vt.tag===0&&!(F&6)&&qn();var t=F;F|=1;var n=Ye.transition,r=B;try{if(Ye.transition=null,B=1,e)return e()}finally{B=r,Ye.transition=n,F=t,!(F&6)&&ln()}}function za(){Ne=Hn.current,K(Hn)}function yn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,_0(n)),ie!==null)for(n=ie.return;n!==null;){var r=n;switch(ca(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&pi();break;case 3:rr(),K(Ae),K(be),wa();break;case 5:ya(r);break;case 4:rr();break;case 13:K(q);break;case 19:K(q);break;case 10:ha(r.type._context);break;case 22:case 23:za()}n=n.return}if(fe=e,ie=e=Xt(e.current,null),he=Ne=t,se=0,ro=null,$a=Hi=xn=0,Ee=Ir=null,hn!==null){for(t=0;t<hn.length;t++)if(n=hn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}hn=null}return e}function Kf(e,t){do{var n=ie;try{if(pa(),Xo.current=ki,_i){for(var r=Z.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}_i=!1}if(kn=0,de=le=Z=null,Or=!1,eo=0,Ea.current=null,n===null||n.return===null){se=1,ro=t,ie=null;break}e:{var i=e,l=n.return,s=n,a=t;if(t=he,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,f=s,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=Vu(l);if(m!==null){m.flags&=-257,Bu(m,l,s,i,t),m.mode&1&&ju(i,u,t),t=m,a=u;var y=t.updateQueue;if(y===null){var b=new Set;b.add(a),t.updateQueue=b}else y.add(a);break e}else{if(!(t&1)){ju(i,u,t),Ta();break e}a=Error(k(426))}}else if(X&&s.mode&1){var T=Vu(l);if(T!==null){!(T.flags&65536)&&(T.flags|=256),Bu(T,l,s,i,t),da(or(a,s));break e}}i=a=or(a,s),se!==4&&(se=2),Ir===null?Ir=[i]:Ir.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var p=zf(i,a,t);Nu(i,p);break e;case 1:s=a;var c=i.type,g=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Gt===null||!Gt.has(g)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=Tf(i,s,t);Nu(i,w);break e}}i=i.return}while(i!==null)}Xf(n)}catch(x){t=x,ie===n&&n!==null&&(ie=n=n.return);continue}break}while(1)}function Gf(){var e=xi.current;return xi.current=ki,e===null?ki:e}function Ta(){(se===0||se===3||se===2)&&(se=4),fe===null||!(xn&268435455)&&!(Hi&268435455)||It(fe,he)}function Ei(e,t){var n=F;F|=2;var r=Gf();(fe!==e||he!==t)&&(yt=null,yn(e,t));do try{Q0();break}catch(o){Kf(e,o)}while(1);if(pa(),F=n,xi.current=r,ie!==null)throw Error(k(261));return fe=null,he=0,se}function Q0(){for(;ie!==null;)Yf(ie)}function K0(){for(;ie!==null&&!yh();)Yf(ie)}function Yf(e){var t=Zf(e.alternate,e,Ne);e.memoizedProps=e.pendingProps,t===null?Xf(e):ie=t,Ea.current=null}function Xf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=j0(n,t),n!==null){n.flags&=32767,ie=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{se=6,ie=null;return}}else if(n=F0(n,t,Ne),n!==null){ie=n;return}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);se===0&&(se=5)}function dn(e,t,n){var r=B,o=Ye.transition;try{Ye.transition=null,B=1,G0(e,t,n,r)}finally{Ye.transition=o,B=r}return null}function G0(e,t,n,r){do qn();while(Vt!==null);if(F&6)throw Error(k(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Ah(e,i),e===fe&&(ie=fe=null,he=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Do||(Do=!0,Jf(si,function(){return qn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ye.transition,Ye.transition=null;var l=B;B=1;var s=F;F|=4,Ea.current=null,B0(e,n),Uf(n,e),h0(ds),ui=!!cs,ds=cs=null,e.current=n,H0(n),wh(),F=s,B=l,Ye.transition=i}else e.current=n;if(Do&&(Do=!1,Vt=e,Ci=o),i=e.pendingLanes,i===0&&(Gt=null),kh(n.stateNode),ze(e,re()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Si)throw Si=!1,e=Ts,Ts=null,e;return Ci&1&&e.tag!==0&&qn(),i=e.pendingLanes,i&1?e===Ls?Fr++:(Fr=0,Ls=e):Fr=0,ln(),null}function qn(){if(Vt!==null){var e=Ad(Ci),t=Ye.transition,n=B;try{if(Ye.transition=null,B=16>e?16:e,Vt===null)var r=!1;else{if(e=Vt,Vt=null,Ci=0,F&6)throw Error(k(331));var o=F;for(F|=4,z=e.current;z!==null;){var i=z,l=i.child;if(z.flags&16){var s=i.deletions;if(s!==null){for(var a=0;a<s.length;a++){var u=s[a];for(z=u;z!==null;){var f=z;switch(f.tag){case 0:case 11:case 15:Dr(8,f,i)}var d=f.child;if(d!==null)d.return=f,z=d;else for(;z!==null;){f=z;var h=f.sibling,m=f.return;if(Vf(f),f===u){z=null;break}if(h!==null){h.return=m,z=h;break}z=m}}}var y=i.alternate;if(y!==null){var b=y.child;if(b!==null){y.child=null;do{var T=b.sibling;b.sibling=null,b=T}while(b!==null)}}z=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,z=l;else e:for(;z!==null;){if(i=z,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Dr(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,z=p;break e}z=i.return}}var c=e.current;for(z=c;z!==null;){l=z;var g=l.child;if(l.subtreeFlags&2064&&g!==null)g.return=l,z=g;else e:for(l=c;z!==null;){if(s=z,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Bi(9,s)}}catch(x){ee(s,s.return,x)}if(s===l){z=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,z=w;break e}z=s.return}}if(F=o,ln(),pt&&typeof pt.onPostCommitFiberRoot=="function")try{pt.onPostCommitFiberRoot(Ri,e)}catch{}r=!0}return r}finally{B=n,Ye.transition=t}}return!1}function tc(e,t,n){t=or(n,t),t=zf(e,t,1),e=Kt(e,t,1),t=ke(),e!==null&&(co(e,1,t),ze(e,t))}function ee(e,t,n){if(e.tag===3)tc(e,e,n);else for(;t!==null;){if(t.tag===3){tc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Gt===null||!Gt.has(r))){e=or(n,e),e=Tf(t,e,1),t=Kt(t,e,1),e=ke(),t!==null&&(co(t,1,e),ze(t,e));break}}t=t.return}}function Y0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ke(),e.pingedLanes|=e.suspendedLanes&n,fe===e&&(he&n)===n&&(se===4||se===3&&(he&130023424)===he&&500>re()-Aa?yn(e,0):$a|=n),ze(e,t)}function qf(e,t){t===0&&(e.mode&1?(t=$o,$o<<=1,!($o&130023424)&&($o=4194304)):t=1);var n=ke();e=Et(e,t),e!==null&&(co(e,t,n),ze(e,n))}function X0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qf(e,n)}function q0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),qf(e,n)}var Zf;Zf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ae.current)$e=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return $e=!1,I0(e,t,n);$e=!!(e.flags&131072)}else $e=!1,X&&t.flags&1048576&&ef(t,mi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Zo(e,t),e=t.pendingProps;var o=er(t,be.current);Xn(t,n),o=_a(null,t,r,e,o,n);var i=ka();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Pe(r)?(i=!0,hi(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,ma(t),o.updater=ji,t.stateNode=o,o._reactInternals=t,bs(t,r,e,n),t=xs(null,t,r,!0,i,n)):(t.tag=0,X&&i&&ua(t),_e(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Zo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=J0(r),e=tt(r,e),o){case 0:t=ks(null,t,r,e,n);break e;case 1:t=Wu(null,t,r,e,n);break e;case 11:t=Hu(null,t,r,e,n);break e;case 14:t=Uu(null,t,r,tt(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:tt(r,o),ks(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:tt(r,o),Wu(e,t,r,o,n);case 3:e:{if(Mf(t),e===null)throw Error(k(387));r=t.pendingProps,i=t.memoizedState,o=i.element,of(e,t),wi(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=or(Error(k(423)),t),t=Qu(e,t,r,n,o);break e}else if(r!==o){o=or(Error(k(424)),t),t=Qu(e,t,r,n,o);break e}else for(Me=Qt(t.stateNode.containerInfo.firstChild),Oe=t,X=!0,rt=null,n=uf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(tr(),r===o){t=$t(e,t,n);break e}_e(e,t,r,n)}t=t.child}return t;case 5:return cf(t),e===null&&vs(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,fs(r,o)?l=null:i!==null&&fs(r,i)&&(t.flags|=32),Rf(e,t),_e(e,t,l,n),t.child;case 6:return e===null&&vs(t),null;case 13:return Of(e,t,n);case 4:return va(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=nr(t,null,r,n):_e(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:tt(r,o),Hu(e,t,r,o,n);case 7:return _e(e,t,t.pendingProps,n),t.child;case 8:return _e(e,t,t.pendingProps.children,n),t.child;case 12:return _e(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,W(vi,r._currentValue),r._currentValue=l,i!==null)if(lt(i.value,l)){if(i.children===o.children&&!Ae.current){t=$t(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=kt(-1,n&-n),a.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?a.next=a:(a.next=f.next,f.next=a),u.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),ys(i.return,n,t),s.lanes|=n;break}a=a.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(k(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),ys(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}_e(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Xn(t,n),o=Xe(o),r=r(o),t.flags|=1,_e(e,t,r,n),t.child;case 14:return r=t.type,o=tt(r,t.pendingProps),o=tt(r.type,o),Uu(e,t,r,o,n);case 15:return Lf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:tt(r,o),Zo(e,t),t.tag=1,Pe(r)?(e=!0,hi(t)):e=!1,Xn(t,n),sf(t,r,o),bs(t,r,o,n),xs(null,t,r,!0,e,n);case 19:return Df(e,t,n);case 22:return Nf(e,t,n)}throw Error(k(156,t.tag))};function Jf(e,t){return Sd(e,t)}function Z0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ke(e,t,n,r){return new Z0(e,t,n,r)}function La(e){return e=e.prototype,!(!e||!e.isReactComponent)}function J0(e){if(typeof e=="function")return La(e)?1:0;if(e!=null){if(e=e.$$typeof,e===qs)return 11;if(e===Zs)return 14}return 2}function Xt(e,t){var n=e.alternate;return n===null?(n=Ke(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ti(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")La(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Nn:return wn(n.children,o,i,t);case Xs:l=8,o|=8;break;case Ul:return e=Ke(12,n,t,o|2),e.elementType=Ul,e.lanes=i,e;case Wl:return e=Ke(13,n,t,o),e.elementType=Wl,e.lanes=i,e;case Ql:return e=Ke(19,n,t,o),e.elementType=Ql,e.lanes=i,e;case sd:return Ui(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case id:l=10;break e;case ld:l=9;break e;case qs:l=11;break e;case Zs:l=14;break e;case Rt:l=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=Ke(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function wn(e,t,n,r){return e=Ke(7,e,r,t),e.lanes=n,e}function Ui(e,t,n,r){return e=Ke(22,e,r,t),e.elementType=sd,e.lanes=n,e.stateNode={isHidden:!1},e}function Sl(e,t,n){return e=Ke(6,e,null,t),e.lanes=n,e}function Cl(e,t,n){return t=Ke(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function eg(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=il(0),this.expirationTimes=il(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=il(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Na(e,t,n,r,o,i,l,s,a){return e=new eg(e,t,n,s,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ke(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ma(i),e}function tg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ln,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ep(e){if(!e)return Zt;e=e._reactInternals;e:{if(An(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Pe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(Pe(n))return Zd(e,n,t)}return t}function tp(e,t,n,r,o,i,l,s,a){return e=Na(n,r,!0,e,o,i,l,s,a),e.context=ep(null),n=e.current,r=ke(),o=Yt(n),i=kt(r,o),i.callback=t??null,Kt(n,i,o),e.current.lanes=o,co(e,o,r),ze(e,r),e}function Wi(e,t,n,r){var o=t.current,i=ke(),l=Yt(o);return n=ep(n),t.context===null?t.context=n:t.pendingContext=n,t=kt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Kt(o,t,l),e!==null&&(it(e,o,l,i),Yo(e,o,l)),l}function $i(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function nc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ra(e,t){nc(e,t),(e=e.alternate)&&nc(e,t)}function ng(){return null}var np=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ma(e){this._internalRoot=e}Qi.prototype.render=Ma.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));Wi(e,t,null,null)};Qi.prototype.unmount=Ma.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Sn(function(){Wi(null,e,null,null)}),t[Ct]=null}};function Qi(e){this._internalRoot=e}Qi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Td();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Dt.length&&t!==0&&t<Dt[n].priority;n++);Dt.splice(n,0,e),n===0&&Nd(e)}};function Oa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ki(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function rc(){}function rg(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=$i(l);i.call(u)}}var l=tp(t,r,e,0,null,!1,!1,"",rc);return e._reactRootContainer=l,e[Ct]=l.current,Yr(e.nodeType===8?e.parentNode:e),Sn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var u=$i(a);s.call(u)}}var a=Na(e,0,!1,null,null,!1,!1,"",rc);return e._reactRootContainer=a,e[Ct]=a.current,Yr(e.nodeType===8?e.parentNode:e),Sn(function(){Wi(t,a,n,r)}),a}function Gi(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var s=o;o=function(){var a=$i(l);s.call(a)}}Wi(t,l,e,o)}else l=rg(n,t,e,o,r);return $i(l)}Pd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Pr(t.pendingLanes);n!==0&&(ta(t,n|1),ze(t,re()),!(F&6)&&(ir=re()+500,ln()))}break;case 13:Sn(function(){var r=Et(e,1);if(r!==null){var o=ke();it(r,e,1,o)}}),Ra(e,1)}};na=function(e){if(e.tag===13){var t=Et(e,134217728);if(t!==null){var n=ke();it(t,e,134217728,n)}Ra(e,134217728)}};zd=function(e){if(e.tag===13){var t=Yt(e),n=Et(e,t);if(n!==null){var r=ke();it(n,e,t,r)}Ra(e,t)}};Td=function(){return B};Ld=function(e,t){var n=B;try{return B=e,t()}finally{B=n}};ns=function(e,t,n){switch(t){case"input":if(Yl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Ii(r);if(!o)throw Error(k(90));ud(r),Yl(r,o)}}}break;case"textarea":dd(e,n);break;case"select":t=n.value,t!=null&&Qn(e,!!n.multiple,t,!1)}};yd=Pa;wd=Sn;var og={usingClientEntryPoint:!1,Events:[po,Dn,Ii,md,vd,Pa]},_r={findFiberByHostInstance:pn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},ig={bundleType:_r.bundleType,version:_r.version,rendererPackageName:_r.rendererPackageName,rendererConfig:_r.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Pt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=kd(e),e===null?null:e.stateNode},findFiberByHostInstance:_r.findFiberByHostInstance||ng,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Io=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Io.isDisabled&&Io.supportsFiber)try{Ri=Io.inject(ig),pt=Io}catch{}}Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=og;Fe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Oa(t))throw Error(k(200));return tg(e,t,null,n)};Fe.createRoot=function(e,t){if(!Oa(e))throw Error(k(299));var n=!1,r="",o=np;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Na(e,1,!1,null,null,n,!1,r,o),e[Ct]=t.current,Yr(e.nodeType===8?e.parentNode:e),new Ma(t)};Fe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=kd(t),e=e===null?null:e.stateNode,e};Fe.flushSync=function(e){return Sn(e)};Fe.hydrate=function(e,t,n){if(!Ki(t))throw Error(k(200));return Gi(null,e,t,!0,n)};Fe.hydrateRoot=function(e,t,n){if(!Oa(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=np;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=tp(t,null,e,1,n??null,o,!1,i,l),e[Ct]=t.current,Yr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Qi(t)};Fe.render=function(e,t,n){if(!Ki(t))throw Error(k(200));return Gi(null,e,t,!1,n)};Fe.unmountComponentAtNode=function(e){if(!Ki(e))throw Error(k(40));return e._reactRootContainer?(Sn(function(){Gi(null,null,e,!1,function(){e._reactRootContainer=null,e[Ct]=null})}),!0):!1};Fe.unstable_batchedUpdates=Pa;Fe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ki(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Gi(e,t,n,!1,r)};Fe.version="18.2.0-next-9e3b772b8-20220608";function rp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rp)}catch(e){console.error(e)}}rp(),ed.exports=Fe;var lg=ed.exports,oc=lg;Bl.createRoot=oc.createRoot,Bl.hydrateRoot=oc.hydrateRoot;function sg(e){const n=["default","cwy","radar_dbz_cwb","preci_cwb","OceanLakeLandSnow"].map((r,o)=>L.jsx("option",{children:r},o));return L.jsxs(L.Fragment,{children:[L.jsx("label",{children:"Template: "}),L.jsx("select",{title:"colormaps",onChange:r=>e.changeMap(r),style:{maxWidth:"80px"},children:n})]})}function ag({coloroutrgb:e}){const t=ug(e);return L.jsxs(L.Fragment,{children:[L.jsx("button",{popovertarget:"my-popover",className:"button-85",children:L.jsx("img",{src:"https://matplotlib.org/stable/_static/logo_dark.svg",width:"100px"})}),L.jsx("div",{popover:"auto",id:"my-popover",children:L.jsx("textarea",{value:t,style:{width:"500px",height:"200px"},readOnly:!0})})]})}function ug(e){let t="";return t+=`def manual_cmap():
`,t+=`    import numpy as np
`,t+=`    from matplotlib.colors import LinearSegmentedColormap
`,t+=`    colors = [
`,e.map(n=>{t+="        ["+n[0]+","+n[1]+","+n[2]+`],
`}),t+=`    ]
`,t+=`    return LinearSegmentedColormap.from_list("manual_cmap",np.array(colors)/255)
`,t+="# cmap = manual_cmap()",t}const cg=["RGB","Hex"];function dg({coloroutrgb:e}){const[t,n]=dt.useState("RGB");function r(i){n(i.target.value)}let o="";return t==="RGB"&&e.map(i=>{o+=i[0]+"	"+i[1]+"	"+i[2]+`
`}),t==="Hex"&&e.map(i=>{o+=fg(i)+`
`}),L.jsxs("div",{className:"txtarea",children:[L.jsx("div",{children:L.jsx(ag,{coloroutrgb:e})}),L.jsxs("div",{children:[L.jsx("label",{children:"output type: "}),L.jsx("select",{title:"colortype",onChange:i=>r(i),children:cg.map((i,l)=>L.jsx("option",{children:i},l))})]}),L.jsx("textarea",{value:o,rows:e.length+1,cols:25,readOnly:!0,style:{resize:"none"}})]})}function fg(e){let t=(+e[0]).toString(16),n=(+e[1]).toString(16),r=(+e[2]).toString(16);return t.length==1&&(t="0"+t),n.length==1&&(n="0"+n),r.length==1&&(r="0"+r),"#"+t+n+r}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ni=window,Da=ni.ShadowRoot&&(ni.ShadyCSS===void 0||ni.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ia=Symbol(),ic=new WeakMap;let op=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==Ia)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(Da&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=ic.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&ic.set(n,t))}return t}toString(){return this.cssText}};const pg=e=>new op(typeof e=="string"?e:e+"",void 0,Ia),st=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((r,o,i)=>r+(l=>{if(l._$cssResult$===!0)return l.cssText;if(typeof l=="number")return l;throw Error("Value passed to 'css' function must be a 'css' function result: "+l+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1],e[0]);return new op(n,e,Ia)},hg=(e,t)=>{Da?e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet):t.forEach(n=>{const r=document.createElement("style"),o=ni.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=n.cssText,e.appendChild(r)})},lc=Da?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return pg(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var El;const Ai=window,sc=Ai.trustedTypes,gg=sc?sc.emptyScript:"",ac=Ai.reactiveElementPolyfillSupport,oo={toAttribute(e,t){switch(t){case Boolean:e=e?gg:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},ip=(e,t)=>t!==e&&(t==t||e==e),$l={attribute:!0,type:String,converter:oo,reflect:!1,hasChanged:ip},Ms="finalized";let Tn=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var n;this.finalize(),((n=this.h)!==null&&n!==void 0?n:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((n,r)=>{const o=this._$Ep(r,n);o!==void 0&&(this._$Ev.set(o,r),t.push(o))}),t}static createProperty(t,n=$l){if(n.state&&(n.attribute=!1),this.finalize(),this.elementProperties.set(t,n),!n.noAccessor&&!this.prototype.hasOwnProperty(t)){const r=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,r,n);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,n,r){return{get(){return this[n]},set(o){const i=this[t];this[n]=o,this.requestUpdate(t,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||$l}static finalize(){if(this.hasOwnProperty(Ms))return!1;this[Ms]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const n=this.properties,r=[...Object.getOwnPropertyNames(n),...Object.getOwnPropertySymbols(n)];for(const o of r)this.createProperty(o,n[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const o of r)n.unshift(lc(o))}else t!==void 0&&n.push(lc(t));return n}static _$Ep(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(n=>n(this))}addController(t){var n,r;((n=this._$ES)!==null&&n!==void 0?n:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)===null||r===void 0||r.call(t))}removeController(t){var n;(n=this._$ES)===null||n===void 0||n.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,n)=>{this.hasOwnProperty(n)&&(this._$Ei.set(n,this[n]),delete this[n])})}createRenderRoot(){var t;const n=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return hg(n,this.constructor.elementStyles),n}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var r;return(r=n.hostConnected)===null||r===void 0?void 0:r.call(n)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(n=>{var r;return(r=n.hostDisconnected)===null||r===void 0?void 0:r.call(n)})}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$EO(t,n,r=$l){var o;const i=this.constructor._$Ep(t,r);if(i!==void 0&&r.reflect===!0){const l=(((o=r.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?r.converter:oo).toAttribute(n,r.type);this._$El=t,l==null?this.removeAttribute(i):this.setAttribute(i,l),this._$El=null}}_$AK(t,n){var r;const o=this.constructor,i=o._$Ev.get(t);if(i!==void 0&&this._$El!==i){const l=o.getPropertyOptions(i),s=typeof l.converter=="function"?{fromAttribute:l.converter}:((r=l.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?l.converter:oo;this._$El=i,this[i]=s.fromAttribute(n,l.type),this._$El=null}}requestUpdate(t,n,r){let o=!0;t!==void 0&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||ip)(this[t],n)?(this._$AL.has(t)||this._$AL.set(t,n),r.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,r))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,i)=>this[i]=o),this._$Ei=void 0);let n=!1;const r=this._$AL;try{n=this.shouldUpdate(r),n?(this.willUpdate(r),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var i;return(i=o.hostUpdate)===null||i===void 0?void 0:i.call(o)}),this.update(r)):this._$Ek()}catch(o){throw n=!1,this._$Ek(),o}n&&this._$AE(r)}willUpdate(t){}_$AE(t){var n;(n=this._$ES)===null||n===void 0||n.forEach(r=>{var o;return(o=r.hostUpdated)===null||o===void 0?void 0:o.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((n,r)=>this._$EO(r,this[r],n)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};Tn[Ms]=!0,Tn.elementProperties=new Map,Tn.elementStyles=[],Tn.shadowRootOptions={mode:"open"},ac==null||ac({ReactiveElement:Tn}),((El=Ai.reactiveElementVersions)!==null&&El!==void 0?El:Ai.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Al;const Pi=window,lr=Pi.trustedTypes,uc=lr?lr.createPolicy("lit-html",{createHTML:e=>e}):void 0,Os="$lit$",Ft=`lit$${(Math.random()+"").slice(9)}$`,lp="?"+Ft,mg=`<${lp}>`,Cn=document,io=()=>Cn.createComment(""),lo=e=>e===null||typeof e!="object"&&typeof e!="function",sp=Array.isArray,vg=e=>sp(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Pl=`[ 	
\f\r]`,kr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,cc=/-->/g,dc=/>/g,un=RegExp(`>|${Pl}(?:([^\\s"'>=/]+)(${Pl}*=${Pl}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),fc=/'/g,pc=/"/g,ap=/^(?:script|style|textarea|title)$/i,yg=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),ne=yg(1),Ge=Symbol.for("lit-noChange"),oe=Symbol.for("lit-nothing"),hc=new WeakMap,mn=Cn.createTreeWalker(Cn,129,null,!1);function up(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return uc!==void 0?uc.createHTML(t):t}const wg=(e,t)=>{const n=e.length-1,r=[];let o,i=t===2?"<svg>":"",l=kr;for(let s=0;s<n;s++){const a=e[s];let u,f,d=-1,h=0;for(;h<a.length&&(l.lastIndex=h,f=l.exec(a),f!==null);)h=l.lastIndex,l===kr?f[1]==="!--"?l=cc:f[1]!==void 0?l=dc:f[2]!==void 0?(ap.test(f[2])&&(o=RegExp("</"+f[2],"g")),l=un):f[3]!==void 0&&(l=un):l===un?f[0]===">"?(l=o??kr,d=-1):f[1]===void 0?d=-2:(d=l.lastIndex-f[2].length,u=f[1],l=f[3]===void 0?un:f[3]==='"'?pc:fc):l===pc||l===fc?l=un:l===cc||l===dc?l=kr:(l=un,o=void 0);const m=l===un&&e[s+1].startsWith("/>")?" ":"";i+=l===kr?a+mg:d>=0?(r.push(u),a.slice(0,d)+Os+a.slice(d)+Ft+m):a+Ft+(d===-2?(r.push(void 0),s):m)}return[up(e,i+(e[n]||"<?>")+(t===2?"</svg>":"")),r]};class so{constructor({strings:t,_$litType$:n},r){let o;this.parts=[];let i=0,l=0;const s=t.length-1,a=this.parts,[u,f]=wg(t,n);if(this.el=so.createElement(u,r),mn.currentNode=this.el.content,n===2){const d=this.el.content,h=d.firstChild;h.remove(),d.append(...h.childNodes)}for(;(o=mn.nextNode())!==null&&a.length<s;){if(o.nodeType===1){if(o.hasAttributes()){const d=[];for(const h of o.getAttributeNames())if(h.endsWith(Os)||h.startsWith(Ft)){const m=f[l++];if(d.push(h),m!==void 0){const y=o.getAttribute(m.toLowerCase()+Os).split(Ft),b=/([.?@])?(.*)/.exec(m);a.push({type:1,index:i,name:b[2],strings:y,ctor:b[1]==="."?_g:b[1]==="?"?xg:b[1]==="@"?Sg:Yi})}else a.push({type:6,index:i})}for(const h of d)o.removeAttribute(h)}if(ap.test(o.tagName)){const d=o.textContent.split(Ft),h=d.length-1;if(h>0){o.textContent=lr?lr.emptyScript:"";for(let m=0;m<h;m++)o.append(d[m],io()),mn.nextNode(),a.push({type:2,index:++i});o.append(d[h],io())}}}else if(o.nodeType===8)if(o.data===lp)a.push({type:2,index:i});else{let d=-1;for(;(d=o.data.indexOf(Ft,d+1))!==-1;)a.push({type:7,index:i}),d+=Ft.length-1}i++}}static createElement(t,n){const r=Cn.createElement("template");return r.innerHTML=t,r}}function sr(e,t,n=e,r){var o,i,l,s;if(t===Ge)return t;let a=r!==void 0?(o=n._$Co)===null||o===void 0?void 0:o[r]:n._$Cl;const u=lo(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==u&&((i=a==null?void 0:a._$AO)===null||i===void 0||i.call(a,!1),u===void 0?a=void 0:(a=new u(e),a._$AT(e,n,r)),r!==void 0?((l=(s=n)._$Co)!==null&&l!==void 0?l:s._$Co=[])[r]=a:n._$Cl=a),a!==void 0&&(t=sr(e,a._$AS(e,t.values),a,r)),t}class bg{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var n;const{el:{content:r},parts:o}=this._$AD,i=((n=t==null?void 0:t.creationScope)!==null&&n!==void 0?n:Cn).importNode(r,!0);mn.currentNode=i;let l=mn.nextNode(),s=0,a=0,u=o[0];for(;u!==void 0;){if(s===u.index){let f;u.type===2?f=new go(l,l.nextSibling,this,t):u.type===1?f=new u.ctor(l,u.name,u.strings,this,t):u.type===6&&(f=new Cg(l,this,t)),this._$AV.push(f),u=o[++a]}s!==(u==null?void 0:u.index)&&(l=mn.nextNode(),s++)}return mn.currentNode=Cn,i}v(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}}class go{constructor(t,n,r,o){var i;this.type=2,this._$AH=oe,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=o,this._$Cp=(i=o==null?void 0:o.isConnected)===null||i===void 0||i}get _$AU(){var t,n;return(n=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&n!==void 0?n:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=sr(this,t,n),lo(t)?t===oe||t==null||t===""?(this._$AH!==oe&&this._$AR(),this._$AH=oe):t!==this._$AH&&t!==Ge&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):vg(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==oe&&lo(this._$AH)?this._$AA.nextSibling.data=t:this.$(Cn.createTextNode(t)),this._$AH=t}g(t){var n;const{values:r,_$litType$:o}=t,i=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=so.createElement(up(o.h,o.h[0]),this.options)),o);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===i)this._$AH.v(r);else{const l=new bg(i,this),s=l.u(this.options);l.v(r),this.$(s),this._$AH=l}}_$AC(t){let n=hc.get(t.strings);return n===void 0&&hc.set(t.strings,n=new so(t)),n}T(t){sp(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,o=0;for(const i of t)o===n.length?n.push(r=new go(this.k(io()),this.k(io()),this,this.options)):r=n[o],r._$AI(i),o++;o<n.length&&(this._$AR(r&&r._$AB.nextSibling,o),n.length=o)}_$AR(t=this._$AA.nextSibling,n){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,n);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var n;this._$AM===void 0&&(this._$Cp=t,(n=this._$AP)===null||n===void 0||n.call(this,t))}}class Yi{constructor(t,n,r,o,i){this.type=1,this._$AH=oe,this._$AN=void 0,this.element=t,this.name=n,this._$AM=o,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=oe}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,n=this,r,o){const i=this.strings;let l=!1;if(i===void 0)t=sr(this,t,n,0),l=!lo(t)||t!==this._$AH&&t!==Ge,l&&(this._$AH=t);else{const s=t;let a,u;for(t=i[0],a=0;a<i.length-1;a++)u=sr(this,s[r+a],n,a),u===Ge&&(u=this._$AH[a]),l||(l=!lo(u)||u!==this._$AH[a]),u===oe?t=oe:t!==oe&&(t+=(u??"")+i[a+1]),this._$AH[a]=u}l&&!o&&this.j(t)}j(t){t===oe?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class _g extends Yi{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===oe?void 0:t}}const kg=lr?lr.emptyScript:"";class xg extends Yi{constructor(){super(...arguments),this.type=4}j(t){t&&t!==oe?this.element.setAttribute(this.name,kg):this.element.removeAttribute(this.name)}}class Sg extends Yi{constructor(t,n,r,o,i){super(t,n,r,o,i),this.type=5}_$AI(t,n=this){var r;if((t=(r=sr(this,t,n,0))!==null&&r!==void 0?r:oe)===Ge)return;const o=this._$AH,i=t===oe&&o!==oe||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,l=t!==oe&&(o===oe||i);i&&this.element.removeEventListener(this.name,this,o),l&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var n,r;typeof this._$AH=="function"?this._$AH.call((r=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&r!==void 0?r:this.element,t):this._$AH.handleEvent(t)}}class Cg{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){sr(this,t)}}const gc=Pi.litHtmlPolyfillSupport;gc==null||gc(so,go),((Al=Pi.litHtmlVersions)!==null&&Al!==void 0?Al:Pi.litHtmlVersions=[]).push("2.8.0");const Eg=(e,t,n)=>{var r,o;const i=(r=n==null?void 0:n.renderBefore)!==null&&r!==void 0?r:t;let l=i._$litPart$;if(l===void 0){const s=(o=n==null?void 0:n.renderBefore)!==null&&o!==void 0?o:null;i._$litPart$=l=new go(t.insertBefore(io(),s),s,void 0,n??{})}return l._$AI(e),l};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var zl,Tl;let jr=class extends Tn{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,n;const r=super.createRenderRoot();return(t=(n=this.renderOptions).renderBefore)!==null&&t!==void 0||(n.renderBefore=r.firstChild),r}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Eg(n,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return Ge}};jr.finalized=!0,jr._$litElement$=!0,(zl=globalThis.litElementHydrateSupport)===null||zl===void 0||zl.call(globalThis,{LitElement:jr});const mc=globalThis.litElementPolyfillSupport;mc==null||mc({LitElement:jr});((Tl=globalThis.litElementVersions)!==null&&Tl!==void 0?Tl:globalThis.litElementVersions=[]).push("3.3.3");var zt=st`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,$g=st`
  ${zt}

  :host(:not(:focus-within)) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`,cp=Object.defineProperty,Ag=Object.defineProperties,Pg=Object.getOwnPropertyDescriptor,zg=Object.getOwnPropertyDescriptors,vc=Object.getOwnPropertySymbols,Tg=Object.prototype.hasOwnProperty,Lg=Object.prototype.propertyIsEnumerable,yc=(e,t,n)=>t in e?cp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Pn=(e,t)=>{for(var n in t||(t={}))Tg.call(t,n)&&yc(e,n,t[n]);if(vc)for(var n of vc(t))Lg.call(t,n)&&yc(e,n,t[n]);return e},Xi=(e,t)=>Ag(e,zg(t)),v=(e,t,n,r)=>{for(var o=r>1?void 0:r?Pg(t,n):t,i=e.length-1,l;i>=0;i--)(l=e[i])&&(o=(r?l(t,n,o):l(o))||o);return r&&o&&cp(t,n,o),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ng=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(n){n.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(n){n.createProperty(t.key,e)}},Rg=(e,t,n)=>{t.constructor.createProperty(n,e)};function _(e){return(t,n)=>n!==void 0?Rg(e,t,n):Ng(e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ve(e){return _({...e,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mg=({finisher:e,descriptor:t})=>(n,r)=>{var o;if(r===void 0){const i=(o=n.originalKey)!==null&&o!==void 0?o:n.key,l=t!=null?{kind:"method",placement:"prototype",key:i,descriptor:t(n.key)}:{...n,key:i};return e!=null&&(l.finisher=function(s){e(s,i)}),l}{const i=n.constructor;t!==void 0&&Object.defineProperty(n,r,t(r)),e==null||e(i,r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Be(e,t){return Mg({descriptor:n=>{const r={get(){var o,i;return(i=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(e))!==null&&i!==void 0?i:null},enumerable:!0,configurable:!0};if(t){const o=typeof n=="symbol"?Symbol():"__"+n;r.get=function(){var i,l;return this[o]===void 0&&(this[o]=(l=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(e))!==null&&l!==void 0?l:null),this[o]}}return r}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ll;((Ll=window.HTMLSlotElement)===null||Ll===void 0?void 0:Ll.prototype.assignedElements)!=null;var He=class extends jr{constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){const n=new CustomEvent(e,Pn({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(n),n}static define(e,t=this,n={}){const r=customElements.get(e);if(!r){customElements.define(e,class extends t{},n);return}let o=" (unknown version)",i=o;"version"in t&&t.version&&(o=" v"+t.version),"version"in r&&r.version&&(i=" v"+r.version),!(o&&i&&o===i)&&console.warn(`Attempted to register <${e}>${o}, but <${e}>${i} has already been registered.`)}};He.version="2.8.0";He.dependencies={};v([_()],He.prototype,"dir",2);v([_()],He.prototype,"lang",2);var dp=class extends He{render(){return ne` <slot></slot> `}};dp.styles=$g;function Nl(e,t){function n(o){const i=e.getBoundingClientRect(),l=e.ownerDocument.defaultView,s=i.left+l.pageXOffset,a=i.top+l.pageYOffset,u=o.pageX-s,f=o.pageY-a;t!=null&&t.onMove&&t.onMove(u,f)}function r(){document.removeEventListener("pointermove",n),document.removeEventListener("pointerup",r),t!=null&&t.onStop&&t.onStop()}document.addEventListener("pointermove",n,{passive:!0}),document.addEventListener("pointerup",r),(t==null?void 0:t.initialEvent)instanceof PointerEvent&&n(t.initialEvent)}var Og=st`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`,Dg=st`
  ${zt}
  ${Og}

  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear:not(.input__clear--visible) {
    visibility: hidden;
  }

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  .input--empty .input__clear {
    visibility: hidden;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`,fp=(e="value")=>(t,n)=>{const r=t.constructor,o=r.prototype.attributeChangedCallback;r.prototype.attributeChangedCallback=function(i,l,s){var a;const u=r.getPropertyOptions(e),f=typeof u.attribute=="string"?u.attribute:e;if(i===f){const d=u.converter||oo,m=(typeof d=="function"?d:(a=d==null?void 0:d.fromAttribute)!=null?a:oo.fromAttribute)(s,u.type);this[e]!==m&&(this[n]=m)}o.call(this,i,l,s)}},xr=new WeakMap,Sr=new WeakMap,Rl=new WeakSet,Fo=new WeakMap,Fa=class{constructor(e,t){this.handleFormData=n=>{const r=this.options.disabled(this.host),o=this.options.name(this.host),i=this.options.value(this.host),l=this.host.tagName.toLowerCase()==="sl-button";!r&&!l&&typeof o=="string"&&o.length>0&&typeof i<"u"&&(Array.isArray(i)?i.forEach(s=>{n.formData.append(o,s.toString())}):n.formData.append(o,i.toString()))},this.handleFormSubmit=n=>{var r;const o=this.options.disabled(this.host),i=this.options.reportValidity;this.form&&!this.form.noValidate&&((r=xr.get(this.form))==null||r.forEach(l=>{this.setUserInteracted(l,!0)})),this.form&&!this.form.noValidate&&!o&&!i(this.host)&&(n.preventDefault(),n.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Fo.set(this.host,[])},this.handleInteraction=n=>{const r=Fo.get(this.host);r.includes(n.type)||r.push(n.type),r.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const n=this.form.querySelectorAll("*");for(const r of n)if(typeof r.reportValidity=="function"&&!r.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=Pn({form:n=>{if(n.hasAttribute("form")&&n.getAttribute("form")!==""){const r=n.getRootNode(),o=n.getAttribute("form");if(o)return r.getElementById(o)}return n.closest("form")},name:n=>n.name,value:n=>n.value,defaultValue:n=>n.defaultValue,disabled:n=>{var r;return(r=n.disabled)!=null?r:!1},reportValidity:n=>typeof n.reportValidity=="function"?n.reportValidity():!0,setValue:(n,r)=>n.value=r,assumeInteractionOn:["sl-input"]},t)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),Fo.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),Fo.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,xr.has(this.form)?xr.get(this.form).add(this.host):xr.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Sr.has(this.form)||(Sr.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity())):this.form=void 0}detachForm(){var e;this.form&&((e=xr.get(this.form))==null||e.delete(this.host),this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Sr.has(this.form)&&(this.form.reportValidity=Sr.get(this.form),Sr.delete(this.form))),this.form=void 0}setUserInteracted(e,t){t?Rl.add(e):Rl.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){const n=document.createElement("button");n.type=e,n.style.position="absolute",n.style.width="0",n.style.height="0",n.style.clipPath="inset(50%)",n.style.overflow="hidden",n.style.whiteSpace="nowrap",t&&(n.name=t.name,n.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(r=>{t.hasAttribute(r)&&n.setAttribute(r,t.getAttribute(r))})),this.form.append(n),n.click(),n.remove()}}getForm(){var e;return(e=this.form)!=null?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const t=this.host,n=!!Rl.has(t),r=!!t.required;t.toggleAttribute("data-required",r),t.toggleAttribute("data-optional",!r),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&n),t.toggleAttribute("data-user-valid",e&&n)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||e==null||e.preventDefault()}},ja=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(Xi(Pn({},ja),{valid:!1,valueMissing:!0}));Object.freeze(Xi(Pn({},ja),{valid:!1,customError:!0}));const Ds=new Set,Ig=new MutationObserver(gp),Un=new Map;let pp=document.documentElement.dir||"ltr",hp=document.documentElement.lang||navigator.language,fn;Ig.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function Fg(...e){e.map(t=>{const n=t.$code.toLowerCase();Un.has(n)?Un.set(n,Object.assign(Object.assign({},Un.get(n)),t)):Un.set(n,t),fn||(fn=t)}),gp()}function gp(){pp=document.documentElement.dir||"ltr",hp=document.documentElement.lang||navigator.language,[...Ds.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}let jg=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){Ds.add(this.host)}hostDisconnected(){Ds.delete(this.host)}dir(){return`${this.host.dir||pp}`.toLowerCase()}lang(){return`${this.host.lang||hp}`.toLowerCase()}getTranslationData(t){var n,r;const o=new Intl.Locale(t),i=o==null?void 0:o.language.toLowerCase(),l=(r=(n=o==null?void 0:o.region)===null||n===void 0?void 0:n.toLowerCase())!==null&&r!==void 0?r:"",s=Un.get(`${i}-${l}`),a=Un.get(i);return{locale:o,language:i,region:l,primary:s,secondary:a}}exists(t,n){var r;const{primary:o,secondary:i}=this.getTranslationData((r=n.lang)!==null&&r!==void 0?r:this.lang());return n=Object.assign({includeFallback:!1},n),!!(o&&o[t]||i&&i[t]||n.includeFallback&&fn&&fn[t])}term(t,...n){const{primary:r,secondary:o}=this.getTranslationData(this.lang());let i;if(r&&r[t])i=r[t];else if(o&&o[t])i=o[t];else if(fn&&fn[t])i=fn[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof i=="function"?i(...n):i}date(t,n){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),n).format(t)}number(t,n){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),n).format(t)}relativeTime(t,n,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(t,n)}};var mo=class extends jg{},mp=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=n=>{const r=n.target;(this.slotNames.includes("[default]")&&!r.name||r.name&&this.slotNames.includes(r.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}},Vg=st`
  ${zt}

  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`,Is="";function wc(e){Is=e}function Bg(e=""){if(!Is){const t=[...document.getElementsByTagName("script")],n=t.find(r=>r.hasAttribute("data-shoelace"));if(n)wc(n.getAttribute("data-shoelace"));else{const r=t.find(i=>/shoelace(\.min)?\.js($|\?)/.test(i.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(i.src));let o="";r&&(o=r.getAttribute("src")),wc(o.split("/").slice(0,-1).join("/"))}}return Is.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}var Hg={name:"default",resolver:e=>Bg(`assets/icons/${e}.svg`)},Ug=Hg,bc={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-files" viewBox="0 0 16 16" part="svg">
      <path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z"></path>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},Wg={name:"system",resolver:e=>e in bc?`data:image/svg+xml,${encodeURIComponent(bc[e])}`:""},Qg=Wg,Kg=[Ug,Qg],Fs=[];function Gg(e){Fs.push(e)}function Yg(e){Fs=Fs.filter(t=>t!==e)}function _c(e){return Kg.find(t=>t.name===e)}function mt(e,t){const n=Pn({waitUntilFirstUpdate:!1},t);return(r,o)=>{const{update:i}=r,l=Array.isArray(e)?e:[e];r.update=function(s){l.forEach(a=>{const u=a;if(s.has(u)){const f=s.get(u),d=this[u];f!==d&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[o](f,d)}}),i.call(this,s)}}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xg=(e,t)=>t===void 0?(e==null?void 0:e._$litType$)!==void 0:(e==null?void 0:e._$litType$)===t,qg=e=>e.strings===void 0,Zg={},Jg=(e,t=Zg)=>e._$AH=t;var Cr=Symbol(),jo=Symbol(),Ml,Ol=new Map,at=class extends He{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var n;let r;if(t!=null&&t.spriteSheet)return ne`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`;try{if(r=await fetch(e,{mode:"cors"}),!r.ok)return r.status===410?Cr:jo}catch{return jo}try{const o=document.createElement("div");o.innerHTML=await r.text();const i=o.firstElementChild;if(((n=i==null?void 0:i.tagName)==null?void 0:n.toLowerCase())!=="svg")return Cr;Ml||(Ml=new DOMParser);const s=Ml.parseFromString(i.outerHTML,"text/html").body.querySelector("svg");return s?(s.part.add("svg"),document.adoptNode(s)):Cr}catch{return Cr}}connectedCallback(){super.connectedCallback(),Gg(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Yg(this)}getUrl(){const e=_c(this.library);return this.name&&e?e.resolver(this.name):this.src}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const t=_c(this.library),n=this.getUrl();if(!n){this.svg=null;return}let r=Ol.get(n);if(r||(r=this.resolveIcon(n,t),Ol.set(n,r)),!this.initialRender)return;const o=await r;if(o===jo&&Ol.delete(n),n===this.getUrl()){if(Xg(o)){this.svg=o;return}switch(o){case jo:case Cr:this.svg=null,this.emit("sl-error");break;default:this.svg=o.cloneNode(!0),(e=t==null?void 0:t.mutator)==null||e.call(t,this.svg),this.emit("sl-load")}}}render(){return this.svg}};at.styles=Vg;v([Ve()],at.prototype,"svg",2);v([_({reflect:!0})],at.prototype,"name",2);v([_()],at.prototype,"src",2);v([_()],at.prototype,"label",2);v([_({reflect:!0})],at.prototype,"library",2);v([mt("label")],at.prototype,"handleLabelChange",1);v([mt(["name","src","library"])],at.prototype,"setIcon",1);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ot={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Va=e=>(...t)=>({_$litDirective$:e,values:t});let Ba=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,r){this._$Ct=t,this._$AM=n,this._$Ci=r}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xt=Va(class extends Ba{constructor(e){var t;if(super(e),e.type!==Ot.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var n,r;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!(!((n=this.nt)===null||n===void 0)&&n.has(i))&&this.it.add(i);return this.render(t)}const o=e.element.classList;this.it.forEach(i=>{i in t||(o.remove(i),this.it.delete(i))});for(const i in t){const l=!!t[i];l===this.it.has(i)||!((r=this.nt)===null||r===void 0)&&r.has(i)||(l?(o.add(i),this.it.add(i)):(o.remove(i),this.it.delete(i)))}return Ge}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const U=e=>e??oe;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const em=Va(class extends Ba{constructor(e){if(super(e),e.type!==Ot.PROPERTY&&e.type!==Ot.ATTRIBUTE&&e.type!==Ot.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!qg(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===Ge||t===oe)return t;const n=e.element,r=e.name;if(e.type===Ot.PROPERTY){if(t===n[r])return Ge}else if(e.type===Ot.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(r))return Ge}else if(e.type===Ot.ATTRIBUTE&&n.getAttribute(r)===t+"")return Ge;return Jg(e),t}});var M=class extends He{constructor(){super(...arguments),this.formControlController=new Fa(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new mp(this,"help-text","label"),this.localize=new mo(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var e;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((e=this.input)==null?void 0:e.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(e){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=e,this.value=this.__dateInput.value}get valueAsNumber(){var e;return this.__numberInput.value=this.value,((e=this.input)==null?void 0:e.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(e){this.__numberInput.valueAsNumber=e,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(e){this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change"),this.input.focus(),e.stopPropagation()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleKeyDown(e){const t=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key==="Enter"&&!t&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,n="none"){this.input.setSelectionRange(e,t,n)}setRangeText(e,t,n,r){this.input.setRangeText(e,t,n,r),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),n=this.label?!0:!!e,r=this.helpText?!0:!!t,o=this.clearable&&!this.disabled&&!this.readonly,i=o&&(typeof this.value=="number"||this.value.length>0);return ne`
      <div
        part="form-control"
        class=${xt({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":n,"form-control--has-help-text":r})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${n?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${xt({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type==="password"&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${U(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${U(this.placeholder)}
              minlength=${U(this.minlength)}
              maxlength=${U(this.maxlength)}
              min=${U(this.min)}
              max=${U(this.max)}
              step=${U(this.step)}
              .value=${em(this.value)}
              autocapitalize=${U(this.autocapitalize)}
              autocomplete=${U(this.autocomplete)}
              autocorrect=${U(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${U(this.pattern)}
              enterkeyhint=${U(this.enterkeyhint)}
              inputmode=${U(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${o?ne`
                  <button
                    part="clear-button"
                    class=${xt({input__clear:!0,"input__clear--visible":i})}
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `:""}
            ${this.passwordToggle&&!this.disabled?ne`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?ne`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:ne`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};M.styles=Dg;M.dependencies={"sl-icon":at};v([Be(".input__control")],M.prototype,"input",2);v([Ve()],M.prototype,"hasFocus",2);v([_()],M.prototype,"title",2);v([_({reflect:!0})],M.prototype,"type",2);v([_()],M.prototype,"name",2);v([_()],M.prototype,"value",2);v([fp()],M.prototype,"defaultValue",2);v([_({reflect:!0})],M.prototype,"size",2);v([_({type:Boolean,reflect:!0})],M.prototype,"filled",2);v([_({type:Boolean,reflect:!0})],M.prototype,"pill",2);v([_()],M.prototype,"label",2);v([_({attribute:"help-text"})],M.prototype,"helpText",2);v([_({type:Boolean})],M.prototype,"clearable",2);v([_({type:Boolean,reflect:!0})],M.prototype,"disabled",2);v([_()],M.prototype,"placeholder",2);v([_({type:Boolean,reflect:!0})],M.prototype,"readonly",2);v([_({attribute:"password-toggle",type:Boolean})],M.prototype,"passwordToggle",2);v([_({attribute:"password-visible",type:Boolean})],M.prototype,"passwordVisible",2);v([_({attribute:"no-spin-buttons",type:Boolean})],M.prototype,"noSpinButtons",2);v([_({reflect:!0})],M.prototype,"form",2);v([_({type:Boolean,reflect:!0})],M.prototype,"required",2);v([_()],M.prototype,"pattern",2);v([_({type:Number})],M.prototype,"minlength",2);v([_({type:Number})],M.prototype,"maxlength",2);v([_()],M.prototype,"min",2);v([_()],M.prototype,"max",2);v([_()],M.prototype,"step",2);v([_()],M.prototype,"autocapitalize",2);v([_()],M.prototype,"autocorrect",2);v([_()],M.prototype,"autocomplete",2);v([_({type:Boolean})],M.prototype,"autofocus",2);v([_()],M.prototype,"enterkeyhint",2);v([_({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],M.prototype,"spellcheck",2);v([_()],M.prototype,"inputmode",2);v([mt("disabled",{waitUntilFirstUpdate:!0})],M.prototype,"handleDisabledChange",1);v([mt("step",{waitUntilFirstUpdate:!0})],M.prototype,"handleStepChange",1);v([mt("value",{waitUntilFirstUpdate:!0})],M.prototype,"handleValueChange",1);var tm=st`
  ${zt}

  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;function vp(e){return nm(e)}function Dl(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function nm(e){for(let t=e;t;t=Dl(t))if(t instanceof Element&&getComputedStyle(t).display==="none")return null;for(let t=Dl(e);t;t=Dl(t)){if(!(t instanceof Element))continue;const n=getComputedStyle(t);if(n.display!=="contents"&&(n.position!=="static"||n.filter!=="none"||t.tagName==="BODY"))return t}return null}function rm(e){const t=e.tagName.toLowerCase();return e.getAttribute("tabindex")==="-1"||e.hasAttribute("disabled")||e.hasAttribute("aria-disabled")&&e.getAttribute("aria-disabled")!=="false"||t==="input"&&e.getAttribute("type")==="radio"&&!e.hasAttribute("checked")||e.offsetParent===null&&vp(e)===null||window.getComputedStyle(e).visibility==="hidden"?!1:(t==="audio"||t==="video")&&e.hasAttribute("controls")||e.hasAttribute("tabindex")||e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"?!0:["button","input","select","textarea","a","audio","video","summary"].includes(t)}function om(e){var t,n;const r=im(e),o=(t=r[0])!=null?t:null,i=(n=r[r.length-1])!=null?n:null;return{start:o,end:i}}function im(e){const t=[];function n(r){if(r instanceof Element){if(r.hasAttribute("inert"))return;!t.includes(r)&&rm(r)&&t.push(r);const o=i=>{var l;return((l=i.getRootNode({composed:!0}))==null?void 0:l.host)!==e};r instanceof HTMLSlotElement&&o(r)&&r.assignedElements({flatten:!0}).forEach(i=>{n(i)}),r.shadowRoot!==null&&r.shadowRoot.mode==="open"&&n(r.shadowRoot)}[...r.children].forEach(o=>n(o))}return n(e),t}var lm=st`
  ${zt}

  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }
`;const Jt=Math.min,Re=Math.max,zi=Math.round,Vo=Math.floor,en=e=>({x:e,y:e}),sm={left:"right",right:"left",bottom:"top",top:"bottom"},am={start:"end",end:"start"};function js(e,t,n){return Re(e,Jt(t,n))}function fr(e,t){return typeof e=="function"?e(t):e}function tn(e){return e.split("-")[0]}function pr(e){return e.split("-")[1]}function yp(e){return e==="x"?"y":"x"}function Ha(e){return e==="y"?"height":"width"}function vo(e){return["top","bottom"].includes(tn(e))?"y":"x"}function Ua(e){return yp(vo(e))}function um(e,t,n){n===void 0&&(n=!1);const r=pr(e),o=Ua(e),i=Ha(o);let l=o==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[i]>t.floating[i]&&(l=Ti(l)),[l,Ti(l)]}function cm(e){const t=Ti(e);return[Vs(e),t,Vs(t)]}function Vs(e){return e.replace(/start|end/g,t=>am[t])}function dm(e,t,n){const r=["left","right"],o=["right","left"],i=["top","bottom"],l=["bottom","top"];switch(e){case"top":case"bottom":return n?t?o:r:t?r:o;case"left":case"right":return t?i:l;default:return[]}}function fm(e,t,n,r){const o=pr(e);let i=dm(tn(e),n==="start",r);return o&&(i=i.map(l=>l+"-"+o),t&&(i=i.concat(i.map(Vs)))),i}function Ti(e){return e.replace(/left|right|bottom|top/g,t=>sm[t])}function pm(e){return{top:0,right:0,bottom:0,left:0,...e}}function wp(e){return typeof e!="number"?pm(e):{top:e,right:e,bottom:e,left:e}}function Li(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function kc(e,t,n){let{reference:r,floating:o}=e;const i=vo(t),l=Ua(t),s=Ha(l),a=tn(t),u=i==="y",f=r.x+r.width/2-o.width/2,d=r.y+r.height/2-o.height/2,h=r[s]/2-o[s]/2;let m;switch(a){case"top":m={x:f,y:r.y-o.height};break;case"bottom":m={x:f,y:r.y+r.height};break;case"right":m={x:r.x+r.width,y:d};break;case"left":m={x:r.x-o.width,y:d};break;default:m={x:r.x,y:r.y}}switch(pr(t)){case"start":m[l]-=h*(n&&u?-1:1);break;case"end":m[l]+=h*(n&&u?-1:1);break}return m}const hm=async(e,t,n)=>{const{placement:r="bottom",strategy:o="absolute",middleware:i=[],platform:l}=n,s=i.filter(Boolean),a=await(l.isRTL==null?void 0:l.isRTL(t));let u=await l.getElementRects({reference:e,floating:t,strategy:o}),{x:f,y:d}=kc(u,r,a),h=r,m={},y=0;for(let b=0;b<s.length;b++){const{name:T,fn:p}=s[b],{x:c,y:g,data:w,reset:x}=await p({x:f,y:d,initialPlacement:r,placement:h,strategy:o,middlewareData:m,rects:u,platform:l,elements:{reference:e,floating:t}});if(f=c??f,d=g??d,m={...m,[T]:{...m[T],...w}},x&&y<=50){y++,typeof x=="object"&&(x.placement&&(h=x.placement),x.rects&&(u=x.rects===!0?await l.getElementRects({reference:e,floating:t,strategy:o}):x.rects),{x:f,y:d}=kc(u,h,a)),b=-1;continue}}return{x:f,y:d,placement:h,strategy:o,middlewareData:m}};async function Wa(e,t){var n;t===void 0&&(t={});const{x:r,y:o,platform:i,rects:l,elements:s,strategy:a}=e,{boundary:u="clippingAncestors",rootBoundary:f="viewport",elementContext:d="floating",altBoundary:h=!1,padding:m=0}=fr(t,e),y=wp(m),T=s[h?d==="floating"?"reference":"floating":d],p=Li(await i.getClippingRect({element:(n=await(i.isElement==null?void 0:i.isElement(T)))==null||n?T:T.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(s.floating)),boundary:u,rootBoundary:f,strategy:a})),c=d==="floating"?{...l.floating,x:r,y:o}:l.reference,g=await(i.getOffsetParent==null?void 0:i.getOffsetParent(s.floating)),w=await(i.isElement==null?void 0:i.isElement(g))?await(i.getScale==null?void 0:i.getScale(g))||{x:1,y:1}:{x:1,y:1},x=Li(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({rect:c,offsetParent:g,strategy:a}):c);return{top:(p.top-x.top+y.top)/w.y,bottom:(x.bottom-p.bottom+y.bottom)/w.y,left:(p.left-x.left+y.left)/w.x,right:(x.right-p.right+y.right)/w.x}}const gm=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:r,placement:o,rects:i,platform:l,elements:s,middlewareData:a}=t,{element:u,padding:f=0}=fr(e,t)||{};if(u==null)return{};const d=wp(f),h={x:n,y:r},m=Ua(o),y=Ha(m),b=await l.getDimensions(u),T=m==="y",p=T?"top":"left",c=T?"bottom":"right",g=T?"clientHeight":"clientWidth",w=i.reference[y]+i.reference[m]-h[m]-i.floating[y],x=h[m]-i.reference[m],C=await(l.getOffsetParent==null?void 0:l.getOffsetParent(u));let E=C?C[g]:0;(!E||!await(l.isElement==null?void 0:l.isElement(C)))&&(E=s.floating[g]||i.floating[y]);const A=w/2-x/2,j=E/2-b[y]/2-1,N=Jt(d[p],j),$=Jt(d[c],j),S=N,V=E-b[y]-$,Y=E/2-b[y]/2+A,ae=js(S,Y,V),ue=!a.arrow&&pr(o)!=null&&Y!=ae&&i.reference[y]/2-(Y<S?N:$)-b[y]/2<0,Te=ue?Y<S?Y-S:Y-V:0;return{[m]:h[m]+Te,data:{[m]:ae,centerOffset:Y-ae-Te,...ue&&{alignmentOffset:Te}},reset:ue}}}),mm=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:o,middlewareData:i,rects:l,initialPlacement:s,platform:a,elements:u}=t,{mainAxis:f=!0,crossAxis:d=!0,fallbackPlacements:h,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:y="none",flipAlignment:b=!0,...T}=fr(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};const p=tn(o),c=tn(s)===s,g=await(a.isRTL==null?void 0:a.isRTL(u.floating)),w=h||(c||!b?[Ti(s)]:cm(s));!h&&y!=="none"&&w.push(...fm(s,b,y,g));const x=[s,...w],C=await Wa(t,T),E=[];let A=((r=i.flip)==null?void 0:r.overflows)||[];if(f&&E.push(C[p]),d){const S=um(o,l,g);E.push(C[S[0]],C[S[1]])}if(A=[...A,{placement:o,overflows:E}],!E.every(S=>S<=0)){var j,N;const S=(((j=i.flip)==null?void 0:j.index)||0)+1,V=x[S];if(V)return{data:{index:S,overflows:A},reset:{placement:V}};let Y=(N=A.filter(ae=>ae.overflows[0]<=0).sort((ae,ue)=>ae.overflows[1]-ue.overflows[1])[0])==null?void 0:N.placement;if(!Y)switch(m){case"bestFit":{var $;const ae=($=A.map(ue=>[ue.placement,ue.overflows.filter(Te=>Te>0).reduce((Te,P)=>Te+P,0)]).sort((ue,Te)=>ue[1]-Te[1])[0])==null?void 0:$[0];ae&&(Y=ae);break}case"initialPlacement":Y=s;break}if(o!==Y)return{reset:{placement:Y}}}return{}}}};async function vm(e,t){const{placement:n,platform:r,elements:o}=e,i=await(r.isRTL==null?void 0:r.isRTL(o.floating)),l=tn(n),s=pr(n),a=vo(n)==="y",u=["left","top"].includes(l)?-1:1,f=i&&a?-1:1,d=fr(t,e);let{mainAxis:h,crossAxis:m,alignmentAxis:y}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return s&&typeof y=="number"&&(m=s==="end"?y*-1:y),a?{x:m*f,y:h*u}:{x:h*u,y:m*f}}const ym=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){const{x:n,y:r}=t,o=await vm(t,e);return{x:n+o.x,y:r+o.y,data:o}}}},wm=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:o}=t,{mainAxis:i=!0,crossAxis:l=!1,limiter:s={fn:T=>{let{x:p,y:c}=T;return{x:p,y:c}}},...a}=fr(e,t),u={x:n,y:r},f=await Wa(t,a),d=vo(tn(o)),h=yp(d);let m=u[h],y=u[d];if(i){const T=h==="y"?"top":"left",p=h==="y"?"bottom":"right",c=m+f[T],g=m-f[p];m=js(c,m,g)}if(l){const T=d==="y"?"top":"left",p=d==="y"?"bottom":"right",c=y+f[T],g=y-f[p];y=js(c,y,g)}const b=s.fn({...t,[h]:m,[d]:y});return{...b,data:{x:b.x-n,y:b.y-r}}}}},xc=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:n,rects:r,platform:o,elements:i}=t,{apply:l=()=>{},...s}=fr(e,t),a=await Wa(t,s),u=tn(n),f=pr(n),d=vo(n)==="y",{width:h,height:m}=r.floating;let y,b;u==="top"||u==="bottom"?(y=u,b=f===(await(o.isRTL==null?void 0:o.isRTL(i.floating))?"start":"end")?"left":"right"):(b=u,y=f==="end"?"top":"bottom");const T=m-a[y],p=h-a[b],c=!t.middlewareData.shift;let g=T,w=p;if(d){const C=h-a.left-a.right;w=f||c?Jt(p,C):C}else{const C=m-a.top-a.bottom;g=f||c?Jt(T,C):C}if(c&&!f){const C=Re(a.left,0),E=Re(a.right,0),A=Re(a.top,0),j=Re(a.bottom,0);d?w=h-2*(C!==0||E!==0?C+E:Re(a.left,a.right)):g=m-2*(A!==0||j!==0?A+j:Re(a.top,a.bottom))}await l({...t,availableWidth:w,availableHeight:g});const x=await o.getDimensions(i.floating);return h!==x.width||m!==x.height?{reset:{rects:!0}}:{}}}};function nn(e){return bp(e)?(e.nodeName||"").toLowerCase():"#document"}function De(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Tt(e){var t;return(t=(bp(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function bp(e){return e instanceof Node||e instanceof De(e).Node}function At(e){return e instanceof Element||e instanceof De(e).Element}function gt(e){return e instanceof HTMLElement||e instanceof De(e).HTMLElement}function Sc(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof De(e).ShadowRoot}function yo(e){const{overflow:t,overflowX:n,overflowY:r,display:o}=Ze(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(o)}function bm(e){return["table","td","th"].includes(nn(e))}function Qa(e){const t=Ka(),n=Ze(e);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(r=>(n.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(n.contain||"").includes(r))}function _m(e){let t=ar(e);for(;gt(t)&&!qi(t);){if(Qa(t))return t;t=ar(t)}return null}function Ka(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function qi(e){return["html","body","#document"].includes(nn(e))}function Ze(e){return De(e).getComputedStyle(e)}function Zi(e){return At(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function ar(e){if(nn(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Sc(e)&&e.host||Tt(e);return Sc(t)?t.host:t}function _p(e){const t=ar(e);return qi(t)?e.ownerDocument?e.ownerDocument.body:e.body:gt(t)&&yo(t)?t:_p(t)}function ao(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const o=_p(e),i=o===((r=e.ownerDocument)==null?void 0:r.body),l=De(o);return i?t.concat(l,l.visualViewport||[],yo(o)?o:[],l.frameElement&&n?ao(l.frameElement):[]):t.concat(o,ao(o))}function kp(e){const t=Ze(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const o=gt(e),i=o?e.offsetWidth:n,l=o?e.offsetHeight:r,s=zi(n)!==i||zi(r)!==l;return s&&(n=i,r=l),{width:n,height:r,$:s}}function Ga(e){return At(e)?e:e.contextElement}function Zn(e){const t=Ga(e);if(!gt(t))return en(1);const n=t.getBoundingClientRect(),{width:r,height:o,$:i}=kp(t);let l=(i?zi(n.width):n.width)/r,s=(i?zi(n.height):n.height)/o;return(!l||!Number.isFinite(l))&&(l=1),(!s||!Number.isFinite(s))&&(s=1),{x:l,y:s}}const km=en(0);function xp(e){const t=De(e);return!Ka()||!t.visualViewport?km:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function xm(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==De(e)?!1:t}function En(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const o=e.getBoundingClientRect(),i=Ga(e);let l=en(1);t&&(r?At(r)&&(l=Zn(r)):l=Zn(e));const s=xm(i,n,r)?xp(i):en(0);let a=(o.left+s.x)/l.x,u=(o.top+s.y)/l.y,f=o.width/l.x,d=o.height/l.y;if(i){const h=De(i),m=r&&At(r)?De(r):r;let y=h.frameElement;for(;y&&r&&m!==h;){const b=Zn(y),T=y.getBoundingClientRect(),p=Ze(y),c=T.left+(y.clientLeft+parseFloat(p.paddingLeft))*b.x,g=T.top+(y.clientTop+parseFloat(p.paddingTop))*b.y;a*=b.x,u*=b.y,f*=b.x,d*=b.y,a+=c,u+=g,y=De(y).frameElement}}return Li({width:f,height:d,x:a,y:u})}function Sm(e){let{rect:t,offsetParent:n,strategy:r}=e;const o=gt(n),i=Tt(n);if(n===i)return t;let l={scrollLeft:0,scrollTop:0},s=en(1);const a=en(0);if((o||!o&&r!=="fixed")&&((nn(n)!=="body"||yo(i))&&(l=Zi(n)),gt(n))){const u=En(n);s=Zn(n),a.x=u.x+n.clientLeft,a.y=u.y+n.clientTop}return{width:t.width*s.x,height:t.height*s.y,x:t.x*s.x-l.scrollLeft*s.x+a.x,y:t.y*s.y-l.scrollTop*s.y+a.y}}function Cm(e){return Array.from(e.getClientRects())}function Sp(e){return En(Tt(e)).left+Zi(e).scrollLeft}function Em(e){const t=Tt(e),n=Zi(e),r=e.ownerDocument.body,o=Re(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),i=Re(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let l=-n.scrollLeft+Sp(e);const s=-n.scrollTop;return Ze(r).direction==="rtl"&&(l+=Re(t.clientWidth,r.clientWidth)-o),{width:o,height:i,x:l,y:s}}function $m(e,t){const n=De(e),r=Tt(e),o=n.visualViewport;let i=r.clientWidth,l=r.clientHeight,s=0,a=0;if(o){i=o.width,l=o.height;const u=Ka();(!u||u&&t==="fixed")&&(s=o.offsetLeft,a=o.offsetTop)}return{width:i,height:l,x:s,y:a}}function Am(e,t){const n=En(e,!0,t==="fixed"),r=n.top+e.clientTop,o=n.left+e.clientLeft,i=gt(e)?Zn(e):en(1),l=e.clientWidth*i.x,s=e.clientHeight*i.y,a=o*i.x,u=r*i.y;return{width:l,height:s,x:a,y:u}}function Cc(e,t,n){let r;if(t==="viewport")r=$m(e,n);else if(t==="document")r=Em(Tt(e));else if(At(t))r=Am(t,n);else{const o=xp(e);r={...t,x:t.x-o.x,y:t.y-o.y}}return Li(r)}function Cp(e,t){const n=ar(e);return n===t||!At(n)||qi(n)?!1:Ze(n).position==="fixed"||Cp(n,t)}function Pm(e,t){const n=t.get(e);if(n)return n;let r=ao(e,[],!1).filter(s=>At(s)&&nn(s)!=="body"),o=null;const i=Ze(e).position==="fixed";let l=i?ar(e):e;for(;At(l)&&!qi(l);){const s=Ze(l),a=Qa(l);!a&&s.position==="fixed"&&(o=null),(i?!a&&!o:!a&&s.position==="static"&&!!o&&["absolute","fixed"].includes(o.position)||yo(l)&&!a&&Cp(e,l))?r=r.filter(f=>f!==l):o=s,l=ar(l)}return t.set(e,r),r}function zm(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e;const l=[...n==="clippingAncestors"?Pm(t,this._c):[].concat(n),r],s=l[0],a=l.reduce((u,f)=>{const d=Cc(t,f,o);return u.top=Re(d.top,u.top),u.right=Jt(d.right,u.right),u.bottom=Jt(d.bottom,u.bottom),u.left=Re(d.left,u.left),u},Cc(t,s,o));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function Tm(e){return kp(e)}function Lm(e,t,n){const r=gt(t),o=Tt(t),i=n==="fixed",l=En(e,!0,i,t);let s={scrollLeft:0,scrollTop:0};const a=en(0);if(r||!r&&!i)if((nn(t)!=="body"||yo(o))&&(s=Zi(t)),r){const u=En(t,!0,i,t);a.x=u.x+t.clientLeft,a.y=u.y+t.clientTop}else o&&(a.x=Sp(o));return{x:l.left+s.scrollLeft-a.x,y:l.top+s.scrollTop-a.y,width:l.width,height:l.height}}function Ec(e,t){return!gt(e)||Ze(e).position==="fixed"?null:t?t(e):e.offsetParent}function Ep(e,t){const n=De(e);if(!gt(e))return n;let r=Ec(e,t);for(;r&&bm(r)&&Ze(r).position==="static";)r=Ec(r,t);return r&&(nn(r)==="html"||nn(r)==="body"&&Ze(r).position==="static"&&!Qa(r))?n:r||_m(e)||n}const Nm=async function(e){let{reference:t,floating:n,strategy:r}=e;const o=this.getOffsetParent||Ep,i=this.getDimensions;return{reference:Lm(t,await o(n),r),floating:{x:0,y:0,...await i(n)}}};function Rm(e){return Ze(e).direction==="rtl"}const ri={convertOffsetParentRelativeRectToViewportRelativeRect:Sm,getDocumentElement:Tt,getClippingRect:zm,getOffsetParent:Ep,getElementRects:Nm,getClientRects:Cm,getDimensions:Tm,getScale:Zn,isElement:At,isRTL:Rm};function Mm(e,t){let n=null,r;const o=Tt(e);function i(){clearTimeout(r),n&&n.disconnect(),n=null}function l(s,a){s===void 0&&(s=!1),a===void 0&&(a=1),i();const{left:u,top:f,width:d,height:h}=e.getBoundingClientRect();if(s||t(),!d||!h)return;const m=Vo(f),y=Vo(o.clientWidth-(u+d)),b=Vo(o.clientHeight-(f+h)),T=Vo(u),c={rootMargin:-m+"px "+-y+"px "+-b+"px "+-T+"px",threshold:Re(0,Jt(1,a))||1};let g=!0;function w(x){const C=x[0].intersectionRatio;if(C!==a){if(!g)return l();C?l(!1,C):r=setTimeout(()=>{l(!1,1e-7)},100)}g=!1}try{n=new IntersectionObserver(w,{...c,root:o.ownerDocument})}catch{n=new IntersectionObserver(w,c)}n.observe(e)}return l(!0),i}function Om(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:o=!0,ancestorResize:i=!0,elementResize:l=typeof ResizeObserver=="function",layoutShift:s=typeof IntersectionObserver=="function",animationFrame:a=!1}=r,u=Ga(e),f=o||i?[...u?ao(u):[],...ao(t)]:[];f.forEach(p=>{o&&p.addEventListener("scroll",n,{passive:!0}),i&&p.addEventListener("resize",n)});const d=u&&s?Mm(u,n):null;let h=-1,m=null;l&&(m=new ResizeObserver(p=>{let[c]=p;c&&c.target===u&&m&&(m.unobserve(t),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{m&&m.observe(t)})),n()}),u&&!a&&m.observe(u),m.observe(t));let y,b=a?En(e):null;a&&T();function T(){const p=En(e);b&&(p.x!==b.x||p.y!==b.y||p.width!==b.width||p.height!==b.height)&&n(),b=p,y=requestAnimationFrame(T)}return n(),()=>{f.forEach(p=>{o&&p.removeEventListener("scroll",n),i&&p.removeEventListener("resize",n)}),d&&d(),m&&m.disconnect(),m=null,a&&cancelAnimationFrame(y)}}const Dm=(e,t,n)=>{const r=new Map,o={platform:ri,...n},i={...o.platform,_c:r};return hm(e,t,{...o,platform:i})};function Im(e){return e!==null&&typeof e=="object"&&"getBoundingClientRect"in e}var G=class extends He{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||Im(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');if(this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),!this.anchorEl)throw new Error("Invalid anchor element: no anchor could be found using the anchor slot or the anchor attribute.");this.start()}start(){this.anchorEl&&(this.cleanup=Om(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl)return;const e=[ym({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(xc({apply:({rects:n})=>{const r=this.sync==="width"||this.sync==="both",o=this.sync==="height"||this.sync==="both";this.popup.style.width=r?`${n.reference.width}px`:"",this.popup.style.height=o?`${n.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(mm({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(wm({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(xc({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:n,availableHeight:r})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${r}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${n}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(gm({element:this.arrowEl,padding:this.arrowPadding}));const t=this.strategy==="absolute"?n=>ri.getOffsetParent(n,vp):ri.getOffsetParent;Dm(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:Xi(Pn({},ri),{getOffsetParent:t})}).then(({x:n,y:r,middlewareData:o,placement:i})=>{const l=getComputedStyle(this).direction==="rtl",s={top:"bottom",right:"left",bottom:"top",left:"right"}[i.split("-")[0]];if(this.setAttribute("data-current-placement",i),Object.assign(this.popup.style,{left:`${n}px`,top:`${r}px`}),this.arrow){const a=o.arrow.x,u=o.arrow.y;let f="",d="",h="",m="";if(this.arrowPlacement==="start"){const y=typeof a=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";f=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",d=l?y:"",m=l?"":y}else if(this.arrowPlacement==="end"){const y=typeof a=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";d=l?"":y,m=l?y:"",h=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(m=typeof a=="number"?"calc(50% - var(--arrow-size-diagonal))":"",f=typeof u=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(m=typeof a=="number"?`${a}px`:"",f=typeof u=="number"?`${u}px`:"");Object.assign(this.arrowEl.style,{top:f,right:d,bottom:h,left:m,[s]:"calc(var(--arrow-size-diagonal) * -1)"})}}),this.emit("sl-reposition")}render(){return ne`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <div
        part="popup"
        class=${xt({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?ne`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};G.styles=lm;v([Be(".popup")],G.prototype,"popup",2);v([Be(".popup__arrow")],G.prototype,"arrowEl",2);v([_()],G.prototype,"anchor",2);v([_({type:Boolean,reflect:!0})],G.prototype,"active",2);v([_({reflect:!0})],G.prototype,"placement",2);v([_({reflect:!0})],G.prototype,"strategy",2);v([_({type:Number})],G.prototype,"distance",2);v([_({type:Number})],G.prototype,"skidding",2);v([_({type:Boolean})],G.prototype,"arrow",2);v([_({attribute:"arrow-placement"})],G.prototype,"arrowPlacement",2);v([_({attribute:"arrow-padding",type:Number})],G.prototype,"arrowPadding",2);v([_({type:Boolean})],G.prototype,"flip",2);v([_({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:e=>e.join(" ")}})],G.prototype,"flipFallbackPlacements",2);v([_({attribute:"flip-fallback-strategy"})],G.prototype,"flipFallbackStrategy",2);v([_({type:Object})],G.prototype,"flipBoundary",2);v([_({attribute:"flip-padding",type:Number})],G.prototype,"flipPadding",2);v([_({type:Boolean})],G.prototype,"shift",2);v([_({type:Object})],G.prototype,"shiftBoundary",2);v([_({attribute:"shift-padding",type:Number})],G.prototype,"shiftPadding",2);v([_({attribute:"auto-size"})],G.prototype,"autoSize",2);v([_()],G.prototype,"sync",2);v([_({type:Object})],G.prototype,"autoSizeBoundary",2);v([_({attribute:"auto-size-padding",type:Number})],G.prototype,"autoSizePadding",2);var $p=new Map,Fm=new WeakMap;function jm(e){return e??{keyframes:[],options:{duration:0}}}function $c(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function Ap(e,t){$p.set(e,jm(t))}function Ac(e,t,n){const r=Fm.get(e);if(r!=null&&r[t])return $c(r[t],n.dir);const o=$p.get(t);return o?$c(o,n.dir):{keyframes:[],options:{duration:0}}}function Pc(e,t){return new Promise(n=>{function r(o){o.target===e&&(e.removeEventListener(t,r),n())}e.addEventListener(t,r)})}function zc(e,t,n){return new Promise(r=>{if((n==null?void 0:n.duration)===1/0)throw new Error("Promise-based animations must be finite.");const o=e.animate(t,Xi(Pn({},n),{duration:Vm()?0:n.duration}));o.addEventListener("cancel",r,{once:!0}),o.addEventListener("finish",r,{once:!0})})}function Vm(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Tc(e){return Promise.all(e.getAnimations().map(t=>new Promise(n=>{const r=requestAnimationFrame(n);t.addEventListener("cancel",()=>r,{once:!0}),t.addEventListener("finish",()=>r,{once:!0}),t.cancel()})))}var Ce=class extends He{constructor(){super(...arguments),this.localize=new mo(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.handleKeyDown=e=>{this.open&&e.key==="Escape"&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=e=>{var t;if(e.key==="Escape"&&this.open){e.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(e.key==="Tab"){if(this.open&&((t=document.activeElement)==null?void 0:t.tagName.toLowerCase())==="sl-menu-item"){e.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var n,r,o;const i=((n=this.containingElement)==null?void 0:n.getRootNode())instanceof ShadowRoot?(o=(r=document.activeElement)==null?void 0:r.shadowRoot)==null?void 0:o.activeElement:document.activeElement;(!this.containingElement||(i==null?void 0:i.closest(this.containingElement.tagName.toLowerCase()))!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=e=>{const t=e.target;!this.stayOpenOnSelect&&t.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const e=this.trigger.assignedElements({flatten:!0})[0];typeof(e==null?void 0:e.focus)=="function"&&e.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(e=>e.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(e){if([" ","Enter"].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}const t=this.getMenu();if(t){const n=t.getAllItems(),r=n[0],o=n[n.length-1];["ArrowDown","ArrowUp","Home","End"].includes(e.key)&&(e.preventDefault(),this.open||(this.show(),await this.updateComplete),n.length>0&&this.updateComplete.then(()=>{(e.key==="ArrowDown"||e.key==="Home")&&(t.setCurrentItem(r),r.focus()),(e.key==="ArrowUp"||e.key==="End")&&(t.setCurrentItem(o),o.focus())}))}}handleTriggerKeyUp(e){e.key===" "&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const t=this.trigger.assignedElements({flatten:!0}).find(r=>om(r).start);let n;if(t){switch(t.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":n=t.button;break;default:n=t}n.setAttribute("aria-haspopup","true"),n.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,Pc(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Pc(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){this.panel.addEventListener("sl-select",this.handlePanelSelect),this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await Tc(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=Ac(this,"dropdown.show",{dir:this.localize.dir()});await zc(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await Tc(this);const{keyframes:e,options:t}=Ac(this,"dropdown.hide",{dir:this.localize.dir()});await zc(this.popup.popup,e,t),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return ne`
      <sl-popup
        part="base"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        class=${xt({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open?"false":"true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `}};Ce.styles=tm;Ce.dependencies={"sl-popup":G};v([Be(".dropdown")],Ce.prototype,"popup",2);v([Be(".dropdown__trigger")],Ce.prototype,"trigger",2);v([Be(".dropdown__panel")],Ce.prototype,"panel",2);v([_({type:Boolean,reflect:!0})],Ce.prototype,"open",2);v([_({reflect:!0})],Ce.prototype,"placement",2);v([_({type:Boolean,reflect:!0})],Ce.prototype,"disabled",2);v([_({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],Ce.prototype,"stayOpenOnSelect",2);v([_({attribute:!1})],Ce.prototype,"containingElement",2);v([_({type:Number})],Ce.prototype,"distance",2);v([_({type:Number})],Ce.prototype,"skidding",2);v([_({type:Boolean})],Ce.prototype,"hoist",2);v([mt("open",{waitUntilFirstUpdate:!0})],Ce.prototype,"handleOpenChange",1);Ap("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});Ap("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});var Bm=st`
  ${zt}

  :host {
    --grid-width: 280px;
    --grid-height: 200px;
    --grid-handle-size: 16px;
    --slider-height: 15px;
    --slider-handle-size: 17px;
    --swatch-size: 25px;

    display: inline-block;
  }

  .color-picker {
    width: var(--grid-width);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    color: var(--color);
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    user-select: none;
  }

  .color-picker--inline {
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
  }

  .color-picker--inline:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__grid {
    position: relative;
    height: var(--grid-height);
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),
      linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
    border-top-left-radius: var(--sl-border-radius-medium);
    border-top-right-radius: var(--sl-border-radius-medium);
    cursor: crosshair;
    forced-color-adjust: none;
  }

  .color-picker__grid-handle {
    position: absolute;
    width: var(--grid-handle-size);
    height: var(--grid-handle-size);
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    border: solid 2px white;
    margin-top: calc(var(--grid-handle-size) / -2);
    margin-left: calc(var(--grid-handle-size) / -2);
    transition: var(--sl-transition-fast) scale;
  }

  .color-picker__grid-handle--dragging {
    cursor: none;
    scale: 1.5;
  }

  .color-picker__grid-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__controls {
    padding: var(--sl-spacing-small);
    display: flex;
    align-items: center;
  }

  .color-picker__sliders {
    flex: 1 1 auto;
  }

  .color-picker__slider {
    position: relative;
    height: var(--slider-height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
    forced-color-adjust: none;
  }

  .color-picker__slider:not(:last-of-type) {
    margin-bottom: var(--sl-spacing-small);
  }

  .color-picker__slider-handle {
    position: absolute;
    top: calc(50% - var(--slider-handle-size) / 2);
    width: var(--slider-handle-size);
    height: var(--slider-handle-size);
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    margin-left: calc(var(--slider-handle-size) / -2);
  }

  .color-picker__slider-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__hue {
    background-image: linear-gradient(
      to right,
      rgb(255, 0, 0) 0%,
      rgb(255, 255, 0) 17%,
      rgb(0, 255, 0) 33%,
      rgb(0, 255, 255) 50%,
      rgb(0, 0, 255) 67%,
      rgb(255, 0, 255) 83%,
      rgb(255, 0, 0) 100%
    );
  }

  .color-picker__alpha .color-picker__alpha-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  .color-picker__preview {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 2.25rem;
    height: 2.25rem;
    border: none;
    border-radius: var(--sl-border-radius-circle);
    background: none;
    margin-left: var(--sl-spacing-small);
    cursor: copy;
    forced-color-adjust: none;
  }

  .color-picker__preview:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);

    /* We use a custom property in lieu of currentColor because of https://bugs.webkit.org/show_bug.cgi?id=216780 */
    background-color: var(--preview-color);
  }

  .color-picker__preview:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__preview-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
  }

  .color-picker__preview-color--copied {
    animation: pulse 0.75s;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--sl-color-primary-500);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }

  .color-picker__user-input {
    display: flex;
    padding: 0 var(--sl-spacing-small) var(--sl-spacing-small) var(--sl-spacing-small);
  }

  .color-picker__user-input sl-input {
    min-width: 0; /* fix input width in Safari */
    flex: 1 1 auto;
  }

  .color-picker__user-input sl-button-group {
    margin-left: var(--sl-spacing-small);
  }

  .color-picker__user-input sl-button {
    min-width: 3.25rem;
    max-width: 3.25rem;
    font-size: 1rem;
  }

  .color-picker__swatches {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 0.5rem;
    justify-items: center;
    border-top: solid 1px var(--sl-color-neutral-200);
    padding: var(--sl-spacing-small);
    forced-color-adjust: none;
  }

  .color-picker__swatch {
    position: relative;
    width: var(--swatch-size);
    height: var(--swatch-size);
    border-radius: var(--sl-border-radius-small);
  }

  .color-picker__swatch .color-picker__swatch-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
    border-radius: inherit;
    cursor: pointer;
  }

  .color-picker__swatch:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__transparent-bg {
    background-image: linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%);
    background-size: 10px 10px;
    background-position: 0 0, 0 0, -5px -5px, 5px 5px;
  }

  .color-picker--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .color-picker--disabled .color-picker__grid,
  .color-picker--disabled .color-picker__grid-handle,
  .color-picker--disabled .color-picker__slider,
  .color-picker--disabled .color-picker__slider-handle,
  .color-picker--disabled .color-picker__preview,
  .color-picker--disabled .color-picker__swatch,
  .color-picker--disabled .color-picker__swatch-color {
    pointer-events: none;
  }

  /*
   * Color dropdown
   */

  .color-dropdown::part(panel) {
    max-height: none;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    overflow: visible;
  }

  .color-dropdown__trigger {
    display: inline-block;
    position: relative;
    background-color: transparent;
    border: none;
    cursor: pointer;
    forced-color-adjust: none;
  }

  .color-dropdown__trigger.color-dropdown__trigger--small {
    width: var(--sl-input-height-small);
    height: var(--sl-input-height-small);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--medium {
    width: var(--sl-input-height-medium);
    height: var(--sl-input-height-medium);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--large {
    width: var(--sl-input-height-large);
    height: var(--sl-input-height-large);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: currentColor;
    box-shadow: inset 0 0 0 2px var(--sl-input-border-color), inset 0 0 0 4px var(--sl-color-neutral-0);
  }

  .color-dropdown__trigger--empty:before {
    background-color: transparent;
  }

  .color-dropdown__trigger:focus-visible {
    outline: none;
  }

  .color-dropdown__trigger:focus-visible:not(.color-dropdown__trigger--disabled) {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-dropdown__trigger.color-dropdown__trigger--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;function Ue(e,t,n){const r=o=>Object.is(o,-0)?0:o;return e<t?r(t):e>n?r(n):r(e)}var Hm=st`
  ${zt}

  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.01em, 2.75em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.01em, 2.75em;
    }
  }
`,Pp=class extends He{constructor(){super(...arguments),this.localize=new mo(this)}render(){return ne`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Pp.styles=Hm;var Um=st`
  ${zt}

  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition: var(--sl-transition-x-fast) background-color, var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border, var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host(.sl-button-group__button--first:not(.sl-button-group__button--last)) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host(.sl-button-group__button--inner) .button {
    border-radius: 0;
  }

  :host(.sl-button-group__button--last:not(.sl-button-group__button--first)) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host(.sl-button-group__button:not(.sl-button-group__button--first)) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      .sl-button-group__button:not(
          .sl-button-group__button--first,
          .sl-button-group__button--radio,
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host(.sl-button-group__button--hover) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host(.sl-button-group__button--focus),
  :host(.sl-button-group__button[checked]) {
    z-index: 2;
  }
`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zp=Symbol.for(""),Wm=e=>{if((e==null?void 0:e.r)===zp)return e==null?void 0:e._$litStatic$},Lc=(e,...t)=>({_$litStatic$:t.reduce((n,r,o)=>n+(i=>{if(i._$litStatic$!==void 0)return i._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${i}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(r)+e[o+1],e[0]),r:zp}),Nc=new Map,Qm=e=>(t,...n)=>{const r=n.length;let o,i;const l=[],s=[];let a,u=0,f=!1;for(;u<r;){for(a=t[u];u<r&&(i=n[u],(o=Wm(i))!==void 0);)a+=o+t[++u],f=!0;u!==r&&s.push(i),l.push(a),u++}if(u===r&&l.push(t[r]),f){const d=l.join("$$lit$$");(t=Nc.get(d))===void 0&&(l.raw=l,Nc.set(d,t=l)),n=s}return e(t,...n)},Il=Qm(ne);var H=class extends He{constructor(){super(...arguments),this.formControlController=new Fa(this,{form:e=>{if(e.hasAttribute("form")){const t=e.getRootNode(),n=e.getAttribute("form");return t.getElementById(n)}return e.closest("form")},assumeInteractionOn:["click"]}),this.hasSlotController=new mp(this,"[default]","prefix","suffix"),this.localize=new mo(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:ja}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink(),t=e?Lc`a`:Lc`button`;return Il`
      <${t}
        part="base"
        class=${xt({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${U(e?void 0:this.disabled)}
        type=${U(e?void 0:this.type)}
        title=${this.title}
        name=${U(e?void 0:this.name)}
        value=${U(e?void 0:this.value)}
        href=${U(e?this.href:void 0)}
        target=${U(e?this.target:void 0)}
        download=${U(e?this.download:void 0)}
        rel=${U(e?this.rel:void 0)}
        role=${U(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?Il` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?Il`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${t}>
    `}};H.styles=Um;H.dependencies={"sl-icon":at,"sl-spinner":Pp};v([Be(".button")],H.prototype,"button",2);v([Ve()],H.prototype,"hasFocus",2);v([Ve()],H.prototype,"invalid",2);v([_()],H.prototype,"title",2);v([_({reflect:!0})],H.prototype,"variant",2);v([_({reflect:!0})],H.prototype,"size",2);v([_({type:Boolean,reflect:!0})],H.prototype,"caret",2);v([_({type:Boolean,reflect:!0})],H.prototype,"disabled",2);v([_({type:Boolean,reflect:!0})],H.prototype,"loading",2);v([_({type:Boolean,reflect:!0})],H.prototype,"outline",2);v([_({type:Boolean,reflect:!0})],H.prototype,"pill",2);v([_({type:Boolean,reflect:!0})],H.prototype,"circle",2);v([_()],H.prototype,"type",2);v([_()],H.prototype,"name",2);v([_()],H.prototype,"value",2);v([_()],H.prototype,"href",2);v([_()],H.prototype,"target",2);v([_()],H.prototype,"rel",2);v([_()],H.prototype,"download",2);v([_()],H.prototype,"form",2);v([_({attribute:"formaction"})],H.prototype,"formAction",2);v([_({attribute:"formenctype"})],H.prototype,"formEnctype",2);v([_({attribute:"formmethod"})],H.prototype,"formMethod",2);v([_({attribute:"formnovalidate",type:Boolean})],H.prototype,"formNoValidate",2);v([_({attribute:"formtarget"})],H.prototype,"formTarget",2);v([mt("disabled",{waitUntilFirstUpdate:!0})],H.prototype,"handleDisabledChange",1);var Km=st`
  ${zt}

  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,wo=class extends He{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(e){const t=Er(e.target);t==null||t.classList.add("sl-button-group__button--focus")}handleBlur(e){const t=Er(e.target);t==null||t.classList.remove("sl-button-group__button--focus")}handleMouseOver(e){const t=Er(e.target);t==null||t.classList.add("sl-button-group__button--hover")}handleMouseOut(e){const t=Er(e.target);t==null||t.classList.remove("sl-button-group__button--hover")}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})];e.forEach(t=>{const n=e.indexOf(t),r=Er(t);r&&(r.classList.add("sl-button-group__button"),r.classList.toggle("sl-button-group__button--first",n===0),r.classList.toggle("sl-button-group__button--inner",n>0&&n<e.length-1),r.classList.toggle("sl-button-group__button--last",n===e.length-1),r.classList.toggle("sl-button-group__button--radio",r.tagName.toLowerCase()==="sl-radio-button"))})}render(){return ne`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};wo.styles=Km;v([Be("slot")],wo.prototype,"defaultSlot",2);v([Ve()],wo.prototype,"disableRole",2);v([_()],wo.prototype,"label",2);function Er(e){var t;const n="sl-button, sl-radio-button";return(t=e.closest(n))!=null?t:e.querySelector(n)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tp="important",Gm=" !"+Tp,Nt=Va(class extends Ba{constructor(e){var t;if(super(e),e.type!==Ot.ATTRIBUTE||e.name!=="style"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{const r=e[n];return r==null?t:t+`${n=n.includes("-")?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(e,[t]){const{style:n}=e.element;if(this.ht===void 0){this.ht=new Set;for(const r in t)this.ht.add(r);return this.render(t)}this.ht.forEach(r=>{t[r]==null&&(this.ht.delete(r),r.includes("-")?n.removeProperty(r):n[r]="")});for(const r in t){const o=t[r];if(o!=null){this.ht.add(r);const i=typeof o=="string"&&o.endsWith(Gm);r.includes("-")||i?n.setProperty(r,i?o.slice(0,-11):o,i?Tp:""):n[r]=o}}return Ge}});function ge(e,t){Ym(e)&&(e="100%");var n=Xm(e);return e=t===360?e:Math.min(t,Math.max(0,parseFloat(e))),n&&(e=parseInt(String(e*t),10)/100),Math.abs(e-t)<1e-6?1:(t===360?e=(e<0?e%t+t:e%t)/parseFloat(String(t)):e=e%t/parseFloat(String(t)),e)}function Bo(e){return Math.min(1,Math.max(0,e))}function Ym(e){return typeof e=="string"&&e.indexOf(".")!==-1&&parseFloat(e)===1}function Xm(e){return typeof e=="string"&&e.indexOf("%")!==-1}function Lp(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function Ho(e){return e<=1?"".concat(Number(e)*100,"%"):e}function vn(e){return e.length===1?"0"+e:String(e)}function qm(e,t,n){return{r:ge(e,255)*255,g:ge(t,255)*255,b:ge(n,255)*255}}function Rc(e,t,n){e=ge(e,255),t=ge(t,255),n=ge(n,255);var r=Math.max(e,t,n),o=Math.min(e,t,n),i=0,l=0,s=(r+o)/2;if(r===o)l=0,i=0;else{var a=r-o;switch(l=s>.5?a/(2-r-o):a/(r+o),r){case e:i=(t-n)/a+(t<n?6:0);break;case t:i=(n-e)/a+2;break;case n:i=(e-t)/a+4;break}i/=6}return{h:i,s:l,l:s}}function Fl(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*(6*n):n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Zm(e,t,n){var r,o,i;if(e=ge(e,360),t=ge(t,100),n=ge(n,100),t===0)o=n,i=n,r=n;else{var l=n<.5?n*(1+t):n+t-n*t,s=2*n-l;r=Fl(s,l,e+1/3),o=Fl(s,l,e),i=Fl(s,l,e-1/3)}return{r:r*255,g:o*255,b:i*255}}function Mc(e,t,n){e=ge(e,255),t=ge(t,255),n=ge(n,255);var r=Math.max(e,t,n),o=Math.min(e,t,n),i=0,l=r,s=r-o,a=r===0?0:s/r;if(r===o)i=0;else{switch(r){case e:i=(t-n)/s+(t<n?6:0);break;case t:i=(n-e)/s+2;break;case n:i=(e-t)/s+4;break}i/=6}return{h:i,s:a,v:l}}function Jm(e,t,n){e=ge(e,360)*6,t=ge(t,100),n=ge(n,100);var r=Math.floor(e),o=e-r,i=n*(1-t),l=n*(1-o*t),s=n*(1-(1-o)*t),a=r%6,u=[n,l,i,i,s,n][a],f=[s,n,n,l,i,i][a],d=[i,i,s,n,n,l][a];return{r:u*255,g:f*255,b:d*255}}function Oc(e,t,n,r){var o=[vn(Math.round(e).toString(16)),vn(Math.round(t).toString(16)),vn(Math.round(n).toString(16))];return r&&o[0].startsWith(o[0].charAt(1))&&o[1].startsWith(o[1].charAt(1))&&o[2].startsWith(o[2].charAt(1))?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function ev(e,t,n,r,o){var i=[vn(Math.round(e).toString(16)),vn(Math.round(t).toString(16)),vn(Math.round(n).toString(16)),vn(tv(r))];return o&&i[0].startsWith(i[0].charAt(1))&&i[1].startsWith(i[1].charAt(1))&&i[2].startsWith(i[2].charAt(1))&&i[3].startsWith(i[3].charAt(1))?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0):i.join("")}function tv(e){return Math.round(parseFloat(e)*255).toString(16)}function Dc(e){return Le(e)/255}function Le(e){return parseInt(e,16)}function nv(e){return{r:e>>16,g:(e&65280)>>8,b:e&255}}var Bs={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function rv(e){var t={r:0,g:0,b:0},n=1,r=null,o=null,i=null,l=!1,s=!1;return typeof e=="string"&&(e=lv(e)),typeof e=="object"&&(vt(e.r)&&vt(e.g)&&vt(e.b)?(t=qm(e.r,e.g,e.b),l=!0,s=String(e.r).substr(-1)==="%"?"prgb":"rgb"):vt(e.h)&&vt(e.s)&&vt(e.v)?(r=Ho(e.s),o=Ho(e.v),t=Jm(e.h,r,o),l=!0,s="hsv"):vt(e.h)&&vt(e.s)&&vt(e.l)&&(r=Ho(e.s),i=Ho(e.l),t=Zm(e.h,r,i),l=!0,s="hsl"),Object.prototype.hasOwnProperty.call(e,"a")&&(n=e.a)),n=Lp(n),{ok:l,format:e.format||s,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:n}}var ov="[-\\+]?\\d+%?",iv="[-\\+]?\\d*\\.\\d+%?",Bt="(?:".concat(iv,")|(?:").concat(ov,")"),jl="[\\s|\\(]+(".concat(Bt,")[,|\\s]+(").concat(Bt,")[,|\\s]+(").concat(Bt,")\\s*\\)?"),Vl="[\\s|\\(]+(".concat(Bt,")[,|\\s]+(").concat(Bt,")[,|\\s]+(").concat(Bt,")[,|\\s]+(").concat(Bt,")\\s*\\)?"),et={CSS_UNIT:new RegExp(Bt),rgb:new RegExp("rgb"+jl),rgba:new RegExp("rgba"+Vl),hsl:new RegExp("hsl"+jl),hsla:new RegExp("hsla"+Vl),hsv:new RegExp("hsv"+jl),hsva:new RegExp("hsva"+Vl),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function lv(e){if(e=e.trim().toLowerCase(),e.length===0)return!1;var t=!1;if(Bs[e])e=Bs[e],t=!0;else if(e==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var n=et.rgb.exec(e);return n?{r:n[1],g:n[2],b:n[3]}:(n=et.rgba.exec(e),n?{r:n[1],g:n[2],b:n[3],a:n[4]}:(n=et.hsl.exec(e),n?{h:n[1],s:n[2],l:n[3]}:(n=et.hsla.exec(e),n?{h:n[1],s:n[2],l:n[3],a:n[4]}:(n=et.hsv.exec(e),n?{h:n[1],s:n[2],v:n[3]}:(n=et.hsva.exec(e),n?{h:n[1],s:n[2],v:n[3],a:n[4]}:(n=et.hex8.exec(e),n?{r:Le(n[1]),g:Le(n[2]),b:Le(n[3]),a:Dc(n[4]),format:t?"name":"hex8"}:(n=et.hex6.exec(e),n?{r:Le(n[1]),g:Le(n[2]),b:Le(n[3]),format:t?"name":"hex"}:(n=et.hex4.exec(e),n?{r:Le(n[1]+n[1]),g:Le(n[2]+n[2]),b:Le(n[3]+n[3]),a:Dc(n[4]+n[4]),format:t?"name":"hex8"}:(n=et.hex3.exec(e),n?{r:Le(n[1]+n[1]),g:Le(n[2]+n[2]),b:Le(n[3]+n[3]),format:t?"name":"hex"}:!1)))))))))}function vt(e){return!!et.CSS_UNIT.exec(String(e))}var Ic=function(){function e(t,n){t===void 0&&(t=""),n===void 0&&(n={});var r;if(t instanceof e)return t;typeof t=="number"&&(t=nv(t)),this.originalInput=t;var o=rv(t);this.originalInput=t,this.r=o.r,this.g=o.g,this.b=o.b,this.a=o.a,this.roundA=Math.round(100*this.a)/100,this.format=(r=n.format)!==null&&r!==void 0?r:o.format,this.gradientType=n.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=o.ok}return e.prototype.isDark=function(){return this.getBrightness()<128},e.prototype.isLight=function(){return!this.isDark()},e.prototype.getBrightness=function(){var t=this.toRgb();return(t.r*299+t.g*587+t.b*114)/1e3},e.prototype.getLuminance=function(){var t=this.toRgb(),n,r,o,i=t.r/255,l=t.g/255,s=t.b/255;return i<=.03928?n=i/12.92:n=Math.pow((i+.055)/1.055,2.4),l<=.03928?r=l/12.92:r=Math.pow((l+.055)/1.055,2.4),s<=.03928?o=s/12.92:o=Math.pow((s+.055)/1.055,2.4),.2126*n+.7152*r+.0722*o},e.prototype.getAlpha=function(){return this.a},e.prototype.setAlpha=function(t){return this.a=Lp(t),this.roundA=Math.round(100*this.a)/100,this},e.prototype.isMonochrome=function(){var t=this.toHsl().s;return t===0},e.prototype.toHsv=function(){var t=Mc(this.r,this.g,this.b);return{h:t.h*360,s:t.s,v:t.v,a:this.a}},e.prototype.toHsvString=function(){var t=Mc(this.r,this.g,this.b),n=Math.round(t.h*360),r=Math.round(t.s*100),o=Math.round(t.v*100);return this.a===1?"hsv(".concat(n,", ").concat(r,"%, ").concat(o,"%)"):"hsva(".concat(n,", ").concat(r,"%, ").concat(o,"%, ").concat(this.roundA,")")},e.prototype.toHsl=function(){var t=Rc(this.r,this.g,this.b);return{h:t.h*360,s:t.s,l:t.l,a:this.a}},e.prototype.toHslString=function(){var t=Rc(this.r,this.g,this.b),n=Math.round(t.h*360),r=Math.round(t.s*100),o=Math.round(t.l*100);return this.a===1?"hsl(".concat(n,", ").concat(r,"%, ").concat(o,"%)"):"hsla(".concat(n,", ").concat(r,"%, ").concat(o,"%, ").concat(this.roundA,")")},e.prototype.toHex=function(t){return t===void 0&&(t=!1),Oc(this.r,this.g,this.b,t)},e.prototype.toHexString=function(t){return t===void 0&&(t=!1),"#"+this.toHex(t)},e.prototype.toHex8=function(t){return t===void 0&&(t=!1),ev(this.r,this.g,this.b,this.a,t)},e.prototype.toHex8String=function(t){return t===void 0&&(t=!1),"#"+this.toHex8(t)},e.prototype.toHexShortString=function(t){return t===void 0&&(t=!1),this.a===1?this.toHexString(t):this.toHex8String(t)},e.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},e.prototype.toRgbString=function(){var t=Math.round(this.r),n=Math.round(this.g),r=Math.round(this.b);return this.a===1?"rgb(".concat(t,", ").concat(n,", ").concat(r,")"):"rgba(".concat(t,", ").concat(n,", ").concat(r,", ").concat(this.roundA,")")},e.prototype.toPercentageRgb=function(){var t=function(n){return"".concat(Math.round(ge(n,255)*100),"%")};return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}},e.prototype.toPercentageRgbString=function(){var t=function(n){return Math.round(ge(n,255)*100)};return this.a===1?"rgb(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%)"):"rgba(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%, ").concat(this.roundA,")")},e.prototype.toName=function(){if(this.a===0)return"transparent";if(this.a<1)return!1;for(var t="#"+Oc(this.r,this.g,this.b,!1),n=0,r=Object.entries(Bs);n<r.length;n++){var o=r[n],i=o[0],l=o[1];if(t===l)return i}return!1},e.prototype.toString=function(t){var n=!!t;t=t??this.format;var r=!1,o=this.a<1&&this.a>=0,i=!n&&o&&(t.startsWith("hex")||t==="name");return i?t==="name"&&this.a===0?this.toName():this.toRgbString():(t==="rgb"&&(r=this.toRgbString()),t==="prgb"&&(r=this.toPercentageRgbString()),(t==="hex"||t==="hex6")&&(r=this.toHexString()),t==="hex3"&&(r=this.toHexString(!0)),t==="hex4"&&(r=this.toHex8String(!0)),t==="hex8"&&(r=this.toHex8String()),t==="name"&&(r=this.toName()),t==="hsl"&&(r=this.toHslString()),t==="hsv"&&(r=this.toHsvString()),r||this.toHexString())},e.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},e.prototype.clone=function(){return new e(this.toString())},e.prototype.lighten=function(t){t===void 0&&(t=10);var n=this.toHsl();return n.l+=t/100,n.l=Bo(n.l),new e(n)},e.prototype.brighten=function(t){t===void 0&&(t=10);var n=this.toRgb();return n.r=Math.max(0,Math.min(255,n.r-Math.round(255*-(t/100)))),n.g=Math.max(0,Math.min(255,n.g-Math.round(255*-(t/100)))),n.b=Math.max(0,Math.min(255,n.b-Math.round(255*-(t/100)))),new e(n)},e.prototype.darken=function(t){t===void 0&&(t=10);var n=this.toHsl();return n.l-=t/100,n.l=Bo(n.l),new e(n)},e.prototype.tint=function(t){return t===void 0&&(t=10),this.mix("white",t)},e.prototype.shade=function(t){return t===void 0&&(t=10),this.mix("black",t)},e.prototype.desaturate=function(t){t===void 0&&(t=10);var n=this.toHsl();return n.s-=t/100,n.s=Bo(n.s),new e(n)},e.prototype.saturate=function(t){t===void 0&&(t=10);var n=this.toHsl();return n.s+=t/100,n.s=Bo(n.s),new e(n)},e.prototype.greyscale=function(){return this.desaturate(100)},e.prototype.spin=function(t){var n=this.toHsl(),r=(n.h+t)%360;return n.h=r<0?360+r:r,new e(n)},e.prototype.mix=function(t,n){n===void 0&&(n=50);var r=this.toRgb(),o=new e(t).toRgb(),i=n/100,l={r:(o.r-r.r)*i+r.r,g:(o.g-r.g)*i+r.g,b:(o.b-r.b)*i+r.b,a:(o.a-r.a)*i+r.a};return new e(l)},e.prototype.analogous=function(t,n){t===void 0&&(t=6),n===void 0&&(n=30);var r=this.toHsl(),o=360/n,i=[this];for(r.h=(r.h-(o*t>>1)+720)%360;--t;)r.h=(r.h+o)%360,i.push(new e(r));return i},e.prototype.complement=function(){var t=this.toHsl();return t.h=(t.h+180)%360,new e(t)},e.prototype.monochromatic=function(t){t===void 0&&(t=6);for(var n=this.toHsv(),r=n.h,o=n.s,i=n.v,l=[],s=1/t;t--;)l.push(new e({h:r,s:o,v:i})),i=(i+s)%1;return l},e.prototype.splitcomplement=function(){var t=this.toHsl(),n=t.h;return[this,new e({h:(n+72)%360,s:t.s,l:t.l}),new e({h:(n+216)%360,s:t.s,l:t.l})]},e.prototype.onBackground=function(t){var n=this.toRgb(),r=new e(t).toRgb(),o=n.a+r.a*(1-n.a);return new e({r:(n.r*n.a+r.r*r.a*(1-n.a))/o,g:(n.g*n.a+r.g*r.a*(1-n.a))/o,b:(n.b*n.a+r.b*r.a*(1-n.a))/o,a:o})},e.prototype.triad=function(){return this.polyad(3)},e.prototype.tetrad=function(){return this.polyad(4)},e.prototype.polyad=function(t){for(var n=this.toHsl(),r=n.h,o=[this],i=360/t,l=1;l<t;l++)o.push(new e({h:(r+l*i)%360,s:n.s,l:n.l}));return o},e.prototype.equals=function(t){return this.toRgbString()===new e(t).toRgbString()},e}(),Fc="EyeDropper"in window,I=class extends He{constructor(){super(),this.formControlController=new Fa(this),this.isSafeValue=!1,this.localize=new mo(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.handleFocusOut=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.input.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")})}handleFormatToggle(){const e=["hex","rgb","hsl","hsv"],t=(e.indexOf(this.format)+1)%e.length;this.format=e[t],this.setColor(this.value),this.emit("sl-change"),this.emit("sl-input")}handleAlphaDrag(e){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),n=t.querySelector(".color-picker__slider-handle"),{width:r}=t.getBoundingClientRect();let o=this.value;n.focus(),e.preventDefault(),Nl(t,{onMove:i=>{this.alpha=Ue(i/r*100,0,100),this.syncValues(),this.value!==o&&(o=this.value,this.emit("sl-change"),this.emit("sl-input"))},initialEvent:e})}handleHueDrag(e){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),n=t.querySelector(".color-picker__slider-handle"),{width:r}=t.getBoundingClientRect();let o=this.value;n.focus(),e.preventDefault(),Nl(t,{onMove:i=>{this.hue=Ue(i/r*360,0,360),this.syncValues(),this.value!==o&&(o=this.value,this.emit("sl-change"),this.emit("sl-input"))},initialEvent:e})}handleGridDrag(e){const t=this.shadowRoot.querySelector(".color-picker__grid"),n=t.querySelector(".color-picker__grid-handle"),{width:r,height:o}=t.getBoundingClientRect();let i=this.value;n.focus(),e.preventDefault(),this.isDraggingGridHandle=!0,Nl(t,{onMove:(l,s)=>{this.saturation=Ue(l/r*100,0,100),this.brightness=Ue(100-s/o*100,0,100),this.syncValues(),this.value!==i&&(i=this.value,this.emit("sl-change"),this.emit("sl-input"))},onStop:()=>this.isDraggingGridHandle=!1,initialEvent:e})}handleAlphaKeyDown(e){const t=e.shiftKey?10:1,n=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.alpha=Ue(this.alpha-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.alpha=Ue(this.alpha+t,0,100),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.alpha=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.alpha=100,this.syncValues()),this.value!==n&&(this.emit("sl-change"),this.emit("sl-input"))}handleHueKeyDown(e){const t=e.shiftKey?10:1,n=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.hue=Ue(this.hue-t,0,360),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.hue=Ue(this.hue+t,0,360),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.hue=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.hue=360,this.syncValues()),this.value!==n&&(this.emit("sl-change"),this.emit("sl-input"))}handleGridKeyDown(e){const t=e.shiftKey?10:1,n=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.saturation=Ue(this.saturation-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.saturation=Ue(this.saturation+t,0,100),this.syncValues()),e.key==="ArrowUp"&&(e.preventDefault(),this.brightness=Ue(this.brightness+t,0,100),this.syncValues()),e.key==="ArrowDown"&&(e.preventDefault(),this.brightness=Ue(this.brightness-t,0,100),this.syncValues()),this.value!==n&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputChange(e){const t=e.target,n=this.value;e.stopPropagation(),this.input.value?(this.setColor(t.value),t.value=this.value):this.value="",this.value!==n&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputInput(e){this.formControlController.updateValidity(),e.stopPropagation()}handleInputKeyDown(e){if(e.key==="Enter"){const t=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")),setTimeout(()=>this.input.select())):this.hue=0}}handleInputInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleTouchMove(e){e.preventDefault()}parseColor(e){const t=new Ic(e);if(!t.isValid)return null;const n=t.toHsl(),r={h:n.h,s:n.s*100,l:n.l*100,a:n.a},o=t.toRgb(),i=t.toHexString(),l=t.toHex8String(),s=t.toHsv(),a={h:s.h,s:s.s*100,v:s.v*100,a:s.a};return{hsl:{h:r.h,s:r.s,l:r.l,string:this.setLetterCase(`hsl(${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%)`)},hsla:{h:r.h,s:r.s,l:r.l,a:r.a,string:this.setLetterCase(`hsla(${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%, ${r.a.toFixed(2).toString()})`)},hsv:{h:a.h,s:a.s,v:a.v,string:this.setLetterCase(`hsv(${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.v)}%)`)},hsva:{h:a.h,s:a.s,v:a.v,a:a.a,string:this.setLetterCase(`hsva(${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.v)}%, ${a.a.toFixed(2).toString()})`)},rgb:{r:o.r,g:o.g,b:o.b,string:this.setLetterCase(`rgb(${Math.round(o.r)}, ${Math.round(o.g)}, ${Math.round(o.b)})`)},rgba:{r:o.r,g:o.g,b:o.b,a:o.a,string:this.setLetterCase(`rgba(${Math.round(o.r)}, ${Math.round(o.g)}, ${Math.round(o.b)}, ${o.a.toFixed(2).toString()})`)},hex:this.setLetterCase(i),hexa:this.setLetterCase(l)}}setColor(e){const t=this.parseColor(e);return t===null?!1:(this.hue=t.hsva.h,this.saturation=t.hsva.s,this.brightness=t.hsva.v,this.alpha=this.opacity?t.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(e){return typeof e!="string"?"":this.uppercase?e.toUpperCase():e.toLowerCase()}async syncValues(){const e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);e!==null&&(this.format==="hsl"?this.inputValue=this.opacity?e.hsla.string:e.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?e.rgba.string:e.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?e.hsva.string:e.hsv.string:this.inputValue=this.opacity?e.hexa:e.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){if(!Fc)return;new EyeDropper().open().then(t=>{const n=this.value;this.setColor(t.sRGBHex),this.value!==n&&(this.emit("sl-change"),this.emit("sl-input"))}).catch(()=>{})}selectSwatch(e){const t=this.value;this.disabled||(this.setColor(e),this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")))}getHexString(e,t,n,r=100){const o=new Ic(`hsva(${e}, ${t}, ${n}, ${r/100})`);return o.isValid?o.toHex8String():""}stopNestedEventPropagation(e){e.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(e,t){if(this.isEmpty=!t,t||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){const n=this.parseColor(t);n!==null?(this.inputValue=this.value,this.hue=n.hsva.h,this.saturation=n.hsva.s,this.brightness=n.hsva.v,this.alpha=n.hsva.a*100,this.syncValues()):this.inputValue=e??""}}focus(e){this.inline?this.base.focus(e):this.trigger.focus(e)}blur(){var e;const t=this.inline?this.base:this.trigger;this.hasFocus&&(t.focus({preventScroll:!0}),t.blur()),(e=this.dropdown)!=null&&e.open&&this.dropdown.hide()}getFormattedValue(e="hex"){const t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(t===null)return"";switch(e){case"hex":return t.hex;case"hexa":return t.hexa;case"rgb":return t.rgb.string;case"rgba":return t.rgba.string;case"hsl":return t.hsl.string;case"hsla":return t.hsla.string;case"hsv":return t.hsv.string;case"hsva":return t.hsva.string;default:return""}}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.inline&&!this.validity.valid?(this.dropdown.show(),this.addEventListener("sl-after-show",()=>this.input.reportValidity(),{once:!0}),this.disabled||this.formControlController.emitInvalidEvent(),!1):this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.saturation,t=100-this.brightness,n=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(o=>o.trim()!==""),r=ne`
      <div
        part="base"
        class=${xt({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled,"color-picker--focused":this.hasFocus})}
        aria-disabled=${this.disabled?"true":"false"}
        aria-labelledby="label"
        tabindex=${this.inline?"0":"-1"}
      >
        ${this.inline?ne`
              <sl-visually-hidden id="label">
                <slot name="label">${this.label}</slot>
              </sl-visually-hidden>
            `:null}

        <div
          part="grid"
          class="color-picker__grid"
          style=${Nt({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${xt({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${Nt({top:`${t}%`,left:`${e}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${U(this.disabled?void 0:"0")}
            @keydown=${this.handleGridKeyDown}
          ></span>
        </div>

        <div class="color-picker__controls">
          <div class="color-picker__sliders">
            <div
              part="slider hue-slider"
              class="color-picker__hue color-picker__slider"
              @pointerdown=${this.handleHueDrag}
              @touchmove=${this.handleTouchMove}
            >
              <span
                part="slider-handle hue-slider-handle"
                class="color-picker__slider-handle"
                style=${Nt({left:`${this.hue===0?0:100/(360/this.hue)}%`})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${U(this.disabled?void 0:"0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?ne`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${Nt({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="color-picker__slider-handle"
                      style=${Nt({left:`${this.alpha}%`})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${U(this.disabled?void 0:"0")}
                      @keydown=${this.handleAlphaKeyDown}
                    ></span>
                  </div>
                `:""}
          </div>

          <button
            type="button"
            part="preview"
            class="color-picker__preview color-picker__transparent-bg"
            aria-label=${this.localize.term("copy")}
            style=${Nt({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            @click=${this.handleCopy}
          ></button>
        </div>

        <div class="color-picker__user-input" aria-live="polite">
          <sl-input
            part="input"
            type="text"
            name=${this.name}
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            value=${this.isEmpty?"":this.inputValue}
            ?required=${this.required}
            ?disabled=${this.disabled}
            aria-label=${this.localize.term("currentValue")}
            @keydown=${this.handleInputKeyDown}
            @sl-change=${this.handleInputChange}
            @sl-input=${this.handleInputInput}
            @sl-invalid=${this.handleInputInvalid}
            @sl-blur=${this.stopNestedEventPropagation}
            @sl-focus=${this.stopNestedEventPropagation}
          ></sl-input>

          <sl-button-group>
            ${this.noFormatToggle?"":ne`
                  <sl-button
                    part="format-button"
                    aria-label=${this.localize.term("toggleColorFormat")}
                    exportparts="
                      base:format-button__base,
                      prefix:format-button__prefix,
                      label:format-button__label,
                      suffix:format-button__suffix,
                      caret:format-button__caret
                    "
                    @click=${this.handleFormatToggle}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    ${this.setLetterCase(this.format)}
                  </sl-button>
                `}
            ${Fc?ne`
                  <sl-button
                    part="eye-dropper-button"
                    exportparts="
                      base:eye-dropper-button__base,
                      prefix:eye-dropper-button__prefix,
                      label:eye-dropper-button__label,
                      suffix:eye-dropper-button__suffix,
                      caret:eye-dropper-button__caret
                    "
                    @click=${this.handleEyeDropper}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    <sl-icon
                      library="system"
                      name="eyedropper"
                      label=${this.localize.term("selectAColorFromTheScreen")}
                    ></sl-icon>
                  </sl-button>
                `:""}
          </sl-button-group>
        </div>

        ${n.length>0?ne`
              <div part="swatches" class="color-picker__swatches">
                ${n.map(o=>{const i=this.parseColor(o);return i?ne`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${U(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${o}
                      @click=${()=>this.selectSwatch(o)}
                      @keydown=${l=>!this.disabled&&l.key==="Enter"&&this.setColor(i.hexa)}
                    >
                      <div
                        class="color-picker__swatch-color"
                        style=${Nt({backgroundColor:i.hexa})}
                      ></div>
                    </div>
                  `:(console.error(`Unable to parse swatch color: "${o}"`,this),"")})}
              </div>
            `:""}
      </div>
    `;return this.inline?r:ne`
      <sl-dropdown
        class="color-dropdown"
        aria-disabled=${this.disabled?"true":"false"}
        .containing-element=${this}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        @sl-after-hide=${this.handleAfterHide}
      >
        <button
          part="trigger"
          slot="trigger"
          class=${xt({"color-dropdown__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":this.size==="small","color-dropdown__trigger--medium":this.size==="medium","color-dropdown__trigger--large":this.size==="large","color-dropdown__trigger--empty":this.isEmpty,"color-dropdown__trigger--focused":this.hasFocus,"color-picker__transparent-bg":!0})}
          style=${Nt({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${r}
      </sl-dropdown>
    `}};I.styles=Bm;I.dependencies={"sl-button-group":wo,"sl-button":H,"sl-dropdown":Ce,"sl-icon":at,"sl-input":M,"sl-visually-hidden":dp};v([Be('[part~="base"]')],I.prototype,"base",2);v([Be('[part~="input"]')],I.prototype,"input",2);v([Be(".color-dropdown")],I.prototype,"dropdown",2);v([Be('[part~="preview"]')],I.prototype,"previewButton",2);v([Be('[part~="trigger"]')],I.prototype,"trigger",2);v([Ve()],I.prototype,"hasFocus",2);v([Ve()],I.prototype,"isDraggingGridHandle",2);v([Ve()],I.prototype,"isEmpty",2);v([Ve()],I.prototype,"inputValue",2);v([Ve()],I.prototype,"hue",2);v([Ve()],I.prototype,"saturation",2);v([Ve()],I.prototype,"brightness",2);v([Ve()],I.prototype,"alpha",2);v([_()],I.prototype,"value",2);v([fp()],I.prototype,"defaultValue",2);v([_()],I.prototype,"label",2);v([_()],I.prototype,"format",2);v([_({type:Boolean,reflect:!0})],I.prototype,"inline",2);v([_({reflect:!0})],I.prototype,"size",2);v([_({attribute:"no-format-toggle",type:Boolean})],I.prototype,"noFormatToggle",2);v([_()],I.prototype,"name",2);v([_({type:Boolean,reflect:!0})],I.prototype,"disabled",2);v([_({type:Boolean})],I.prototype,"hoist",2);v([_({type:Boolean})],I.prototype,"opacity",2);v([_({type:Boolean})],I.prototype,"uppercase",2);v([_()],I.prototype,"swatches",2);v([_({reflect:!0})],I.prototype,"form",2);v([_({type:Boolean,reflect:!0})],I.prototype,"required",2);v([mt("format",{waitUntilFirstUpdate:!0})],I.prototype,"handleFormatChange",1);v([mt("opacity",{waitUntilFirstUpdate:!0})],I.prototype,"handleOpacityChange",1);v([mt("value")],I.prototype,"handleValueChange",1);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const sv=new Set(["children","localName","ref","style","className"]),jc=new WeakMap,av=(e,t,n,r,o)=>{const i=o==null?void 0:o[t];i===void 0||n===r?(e[t]=n,n==null&&t in HTMLElement.prototype&&e.removeAttribute(t)):((l,s,a)=>{let u=jc.get(l);u===void 0&&jc.set(l,u=new Map);let f=u.get(s);a!==void 0?f===void 0?(u.set(s,f={handleEvent:a}),l.addEventListener(s,f)):f.handleEvent=a:f!==void 0&&(u.delete(s),l.removeEventListener(s,f))})(e,i,n)},uv=({react:e,tagName:t,elementClass:n,events:r,displayName:o})=>{const i=new Set(Object.keys(r??{})),l=e.forwardRef((s,a)=>{const u=e.useRef(null),f=e.useRef(null),d={},h={};for(const[m,y]of Object.entries(s))sv.has(m)?d[m==="className"?"class":m]=y:i.has(m)||m in n.prototype?h[m]=y:d[m]=y;return e.useLayoutEffect(()=>{if(f.current!==null){for(const m in h)av(f.current,m,s[m],u.current?u.current[m]:void 0,r);u.current=s}}),e.useLayoutEffect(()=>{var m;(m=f.current)===null||m===void 0||m.removeAttribute("defer-hydration")},[]),d.suppressHydrationWarning=!0,e.createElement(t,{...d,ref:m=>{f.current=m,typeof a=="function"?a(m):a!==null&&(a.current=m)}})});return l.displayName=o??n.name,l};var cv="sl-color-picker";I.define("sl-color-picker");var dv=uv({tagName:cv,elementClass:I,react:Xp,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlColorPicker"}),fv=dv,pv={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};Fg(pv);const hv=document.getElementById("canvas"),Wn=hv.getContext("2d");function gv(){const[e,t]=dt.useState([["#ff0000","","","#ffffff","#0000ff"]]),[n,r]=dt.useState(0),[o,i]=dt.useState(["#ff0000","","","#ffffff","#0000ff"]),[l,s]=dt.useState(5),[a,u]=dt.useState(5);function f($){var S=$.target.files[0],V=new FileReader;V.onload=()=>{let Y=Bc(V.result),ae=Y.map(ue=>Vc(ue));i(ae),s(Y.length),u(Y.length),w(ae)},V.readAsText(S)}function d($){let S=$.target.value;const V=new XMLHttpRequest;V.open("GET","./colormap/"+S+".rgb"),V.responseType="text",V.onload=()=>{let Y=Bc(V.response),ae=Y.map(ue=>Vc(ue));i(ae),s(Y.length),u(Y.length),w(ae)},V.send()}function h(){let $=["#ffffff",...o];i($),w($)}function m($){let S=[...o];S.splice($+1,0,""),S[S.length-1]==""&&(S[S.length-1]="#ffffff"),i(S),l<S.length&&s(S.length),w(S)}function y($){if(o.length==2)return;let S=[...o];S.splice($,1),S[0]==""&&(S[0]="#ffffff"),S[S.length-1]==""&&(S[S.length-1]="#ffffff"),i(S),w(S)}function b($,S){let V=[...o];V.splice(S,1,$.target.value),V[0]==""&&(V[0]="#ffffff"),V[V.length-1]==""&&(V[V.length-1]="#ffffff"),i(V)}function T($){if($===0||$===o.length-1)return;let S=[...o];S.splice($,1,""),i(S),w(S)}function p($){if($==0)return;let S=[...o];S[$-1]=S.splice($,1,S[$-1])[0],S[0]==""&&(S[0]="#ffffff"),S[S.length-1]==""&&(S[S.length-1]="#ffffff"),i(S),w(S)}function c($){if($===o.length-1)return;let S=[...o];S[$+1]=S.splice($,1,S[$+1])[0],S[0]==""&&(S[0]="#ffffff"),S[S.length-1]==""&&(S[S.length-1]="#ffffff"),i(S),w(S)}function g($){const S=$.target.value<o.length?a:$.target.value;u($.target.value),$.target.value=S,s(S)}function w($){const S=[...e.slice(0,n+1),$];t(S),r(S.length-1)}function x(){let $=[...o];w($)}function C(){if(n==0)return;let $=e[n-1];i($),r(n-1)}function E(){if(n==e.length-1)return;let $=e[n+1];i($),r(n+1)}const A=o.map(($,S)=>L.jsx(mv,{hex:$,rank:S+1,setBlankColor:()=>T(S),swapUp:()=>p(S),swapDown:()=>c(S),changeColor:V=>b(V,S),addColorDown:()=>m(S),delColor:()=>y(S),handleSlBlur:x},S)),j=o.map($=>bv($)),N=wv(j,l);return vv(N),L.jsxs(L.Fragment,{children:[L.jsx("button",{onClick:C,children:"↶"}),L.jsx("button",{onClick:E,children:"↷"}),L.jsx("br",{}),L.jsx("input",{type:"file",accept:".rgb",onChange:$=>{f($)}}),L.jsx(sg,{changeMap:$=>d($)}),L.jsx("hr",{}),L.jsxs("div",{children:[L.jsxs("div",{className:"selector",children:[L.jsx("label",{children:"n_output colors: "}),L.jsx("input",{type:"number",step:"1",value:a,onChange:$=>g($),style:{width:"3em"}}),L.jsx("button",{className:"adjust_btn",onClick:h,children:"▼"}),L.jsx("br",{}),A]}),L.jsx(dg,{coloroutrgb:N})]})]})}function mv(e){return L.jsxs(L.Fragment,{children:[L.jsxs("span",{style:{display:"inline-block",width:"3em"},children:[e.rank,". "]}),L.jsx(fv,{className:"colorpicker",value:e.hex,onSlChange:(t,n)=>e.changeColor(t,n),onSlBlur:e.handleSlBlur}),L.jsx("button",{className:"adjust_btn",onClick:t=>e.setBlankColor(t),children:"#"}),L.jsx("button",{className:"adjust_btn",onClick:t=>e.swapUp(t),children:"↑"}),L.jsx("button",{className:"adjust_btn",onClick:t=>e.swapDown(t),children:"↓"}),L.jsx("button",{className:"adjust_btn",onClick:t=>e.addColorDown(t),children:"▼"}),L.jsx("button",{className:"adjust_btn",onClick:t=>e.delColor(t),children:"X"}),L.jsx("br",{})]})}function vv(e){Wn.clearRect(0,0,500,100),Wn.beginPath(),Wn.rect(50,30,400,40),Wn.stroke();for(let t=0;t<e.length;t++){const n="rgb("+e[t][0]+","+e[t][1]+","+e[t][2]+")",r=50+t*400/e.length;yv(n,r,30,400/e.length,40)}}function yv(e,t,n,r,o){Wn.fillStyle=e,Wn.fillRect(t,n,r,o)}function wv(e,t){const n=e.length;t=Math.max(t,n);const r=kv([n-1,t-1]),o=_v(t-1,n-1)+1,i=(n-1)/r,l=(t-1)/r,s=[],a=[];var u=0;for(let d=0;d<e.length-1;d++)if(e[d+1]){var f=1/l/(d-u+1);for(let h=0;h<l*(d-u+1);h++){const m=e[u][0]+(e[d+1][0]-e[u][0])*f*h,y=e[u][1]+(e[d+1][1]-e[u][1])*f*h,b=e[u][2]+(e[d+1][2]-e[u][2])*f*h;s.push([parseInt(m),parseInt(y),parseInt(b)])}u=d+1}s.push(e[e.length-1]);for(let d=0;d<o;d=d+i)a.push(s[d]);return a}function bv(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:null}var Ya=(e,t)=>t?Ya(t,e%t):e,_v=(e,t)=>e/Ya(e,t)*t,kv=e=>Ya(Math.max(...e),Math.min(...e));function Vc(e){let t=(+e[0]).toString(16),n=(+e[1]).toString(16),r=(+e[2]).toString(16);return t.length==1&&(t="0"+t),n.length==1&&(n="0"+n),r.length==1&&(r="0"+r),"#"+t+n+r}function Bc(e){const t=e.split(`
`),n=1e3,r=[];let o=0,i=-1;function l(a){return!isNaN(parseFloat(a))&&isFinite(a)}for(let a=0;a<t.length&&o<n;a++){let u=t[a].trim();u.length===0&&(u="#");const f=u.split(/\s+/);if(f.length>=3){let d=-1,h=-1,m=-1;l(f[0])&&(d=parseFloat(f[0])),l(f[1])&&(h=parseFloat(f[1])),l(f[2])&&(m=parseFloat(f[2]));let y=-1;if(f.length>3&&l(f[3])&&(y=parseFloat(f[3])),d>=0&&h>=0&&m>=0){let b=[d,h,m,y];r.push(b),o++,d>i&&(i=d),h>i&&(i=h),m>i&&(i=m)}}}const s=new Array(o).fill(null).map(()=>[0,0,0,0]);for(let a=0;a<o;a++)s[a]=r[a];if(i<=1)for(let a=0;a<o;a++){s[a][3]=s[a][3]<0?1:s[a][3];for(let u=0;u<3;u++)s[a][u]*=255}else if(i<256)for(let a=0;a<o;a++)s[a][3]=s[a][3]<0?255:s[a][3];else for(let a=0;a<o;a++){s[a][3]=s[a][3]<0?i:s[a][3];for(let u=0;u<3;u++)s[a][u]/=i,s[a][u]*=255}for(let a=0;a<o;a++)for(let u=0;u<3;u++)s[a][u]=Math.round(s[a][u]);return s}Bl.createRoot(document.getElementById("root")).render(L.jsx(Zc.StrictMode,{children:L.jsx(gv,{})}));
