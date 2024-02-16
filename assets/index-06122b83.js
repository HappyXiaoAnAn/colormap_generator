function Np(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function Rp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Hc={exports:{}},Ni={},Uc={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uo=Symbol.for("react.element"),Mp=Symbol.for("react.portal"),Op=Symbol.for("react.fragment"),Dp=Symbol.for("react.strict_mode"),Ip=Symbol.for("react.profiler"),Fp=Symbol.for("react.provider"),jp=Symbol.for("react.context"),Vp=Symbol.for("react.forward_ref"),Bp=Symbol.for("react.suspense"),Hp=Symbol.for("react.memo"),Up=Symbol.for("react.lazy"),Xa=Symbol.iterator;function Wp(e){return e===null||typeof e!="object"?null:(e=Xa&&e[Xa]||e["@@iterator"],typeof e=="function"?e:null)}var Wc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qc=Object.assign,Kc={};function ur(e,t,n){this.props=e,this.context=t,this.refs=Kc,this.updater=n||Wc}ur.prototype.isReactComponent={};ur.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ur.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Gc(){}Gc.prototype=ur.prototype;function Hs(e,t,n){this.props=e,this.context=t,this.refs=Kc,this.updater=n||Wc}var Us=Hs.prototype=new Gc;Us.constructor=Hs;Qc(Us,ur.prototype);Us.isPureReactComponent=!0;var qa=Array.isArray,Yc=Object.prototype.hasOwnProperty,Ws={current:null},Xc={key:!0,ref:!0,__self:!0,__source:!0};function qc(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Yc.call(t,r)&&!Xc.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var a=Array(s),u=0;u<s;u++)a[u]=arguments[u+2];o.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:uo,type:e,key:i,ref:l,props:o,_owner:Ws.current}}function Qp(e,t){return{$$typeof:uo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Qs(e){return typeof e=="object"&&e!==null&&e.$$typeof===uo}function Kp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Za=/\/+/g;function el(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Kp(""+e.key):t.toString(36)}function Uo(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case uo:case Mp:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+el(l,0):r,qa(o)?(n="",e!=null&&(n=e.replace(Za,"$&/")+"/"),Uo(o,t,n,"",function(u){return u})):o!=null&&(Qs(o)&&(o=Qp(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(Za,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",qa(e))for(var s=0;s<e.length;s++){i=e[s];var a=r+el(i,s);l+=Uo(i,t,n,a,o)}else if(a=Wp(e),typeof a=="function")for(e=a.call(e),s=0;!(i=e.next()).done;)i=i.value,a=r+el(i,s++),l+=Uo(i,t,n,a,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function ko(e,t,n){if(e==null)return e;var r=[],o=0;return Uo(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Gp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var be={current:null},Wo={transition:null},Yp={ReactCurrentDispatcher:be,ReactCurrentBatchConfig:Wo,ReactCurrentOwner:Ws};M.Children={map:ko,forEach:function(e,t,n){ko(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ko(e,function(){t++}),t},toArray:function(e){return ko(e,function(t){return t})||[]},only:function(e){if(!Qs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=ur;M.Fragment=Op;M.Profiler=Ip;M.PureComponent=Hs;M.StrictMode=Dp;M.Suspense=Bp;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yp;M.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Qc({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=Ws.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)Yc.call(t,a)&&!Xc.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var u=0;u<a;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:uo,type:e.type,key:o,ref:i,props:r,_owner:l}};M.createContext=function(e){return e={$$typeof:jp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Fp,_context:e},e.Consumer=e};M.createElement=qc;M.createFactory=function(e){var t=qc.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:Vp,render:e}};M.isValidElement=Qs;M.lazy=function(e){return{$$typeof:Up,_payload:{_status:-1,_result:e},_init:Gp}};M.memo=function(e,t){return{$$typeof:Hp,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=Wo.transition;Wo.transition={};try{e()}finally{Wo.transition=t}};M.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};M.useCallback=function(e,t){return be.current.useCallback(e,t)};M.useContext=function(e){return be.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return be.current.useDeferredValue(e)};M.useEffect=function(e,t){return be.current.useEffect(e,t)};M.useId=function(){return be.current.useId()};M.useImperativeHandle=function(e,t,n){return be.current.useImperativeHandle(e,t,n)};M.useInsertionEffect=function(e,t){return be.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return be.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return be.current.useMemo(e,t)};M.useReducer=function(e,t,n){return be.current.useReducer(e,t,n)};M.useRef=function(e){return be.current.useRef(e)};M.useState=function(e){return be.current.useState(e)};M.useSyncExternalStore=function(e,t,n){return be.current.useSyncExternalStore(e,t,n)};M.useTransition=function(){return be.current.useTransition()};M.version="18.2.0";Uc.exports=M;var Bt=Uc.exports;const Zc=Rp(Bt),Xp=Np({__proto__:null,default:Zc},[Bt]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qp=Bt,Zp=Symbol.for("react.element"),Jp=Symbol.for("react.fragment"),eh=Object.prototype.hasOwnProperty,th=qp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,nh={key:!0,ref:!0,__self:!0,__source:!0};function Jc(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)eh.call(t,r)&&!nh.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Zp,type:e,key:i,ref:l,props:o,_owner:th.current}}Ni.Fragment=Jp;Ni.jsx=Jc;Ni.jsxs=Jc;Hc.exports=Ni;var z=Hc.exports,Bl={},ed={exports:{}},De={},td={exports:{}},nd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,L){var R=E.length;E.push(L);e:for(;0<R;){var q=R-1>>>1,ie=E[q];if(0<o(ie,L))E[q]=L,E[R]=ie,R=q;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var L=E[0],R=E.pop();if(R!==L){E[0]=R;e:for(var q=0,ie=E.length,bo=ie>>>1;q<bo;){var sn=2*(q+1)-1,Ji=E[sn],an=sn+1,_o=E[an];if(0>o(Ji,R))an<ie&&0>o(_o,Ji)?(E[q]=_o,E[an]=R,q=an):(E[q]=Ji,E[sn]=R,q=sn);else if(an<ie&&0>o(_o,R))E[q]=_o,E[an]=R,q=an;else break e}}return L}function o(E,L){var R=E.sortIndex-L.sortIndex;return R!==0?R:E.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var a=[],u=[],p=1,f=null,g=3,m=!1,w=!1,b=!1,P=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(E){for(var L=n(u);L!==null;){if(L.callback===null)r(u);else if(L.startTime<=E)r(u),L.sortIndex=L.expirationTime,t(a,L);else break;L=n(u)}}function v(E){if(b=!1,d(E),!w)if(n(a)!==null)w=!0,xe(_);else{var L=n(u);L!==null&&Pe(v,L.startTime-E)}}function _(E,L){w=!1,b&&(b=!1,h(A),A=-1),m=!0;var R=g;try{for(d(L),f=n(a);f!==null&&(!(f.expirationTime>L)||E&&!ae());){var q=f.callback;if(typeof q=="function"){f.callback=null,g=f.priorityLevel;var ie=q(f.expirationTime<=L);L=e.unstable_now(),typeof ie=="function"?f.callback=ie:f===n(a)&&r(a),d(L)}else r(a);f=n(a)}if(f!==null)var bo=!0;else{var sn=n(u);sn!==null&&Pe(v,sn.startTime-L),bo=!1}return bo}finally{f=null,g=R,m=!1}}var S=!1,C=null,A=-1,I=5,T=-1;function ae(){return!(e.unstable_now()-T<I)}function oe(){if(C!==null){var E=e.unstable_now();T=E;var L=!0;try{L=C(!0,E)}finally{L?Ze():(S=!1,C=null)}}else S=!1}var Ze;if(typeof c=="function")Ze=function(){c(oe)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,Be=pe.port2;pe.port1.onmessage=oe,Ze=function(){Be.postMessage(null)}}else Ze=function(){P(oe,0)};function xe(E){C=E,S||(S=!0,Ze())}function Pe(E,L){A=P(function(){E(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){w||m||(w=!0,xe(_))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(E){switch(g){case 1:case 2:case 3:var L=3;break;default:L=g}var R=g;g=L;try{return E()}finally{g=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,L){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var R=g;g=E;try{return L()}finally{g=R}},e.unstable_scheduleCallback=function(E,L,R){var q=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?q+R:q):R=q,E){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=R+ie,E={id:p++,callback:L,priorityLevel:E,startTime:R,expirationTime:ie,sortIndex:-1},R>q?(E.sortIndex=R,t(u,E),n(a)===null&&E===n(u)&&(b?(h(A),A=-1):b=!0,Pe(v,R-q))):(E.sortIndex=ie,t(a,E),w||m||(w=!0,xe(_))),E},e.unstable_shouldYield=ae,e.unstable_wrapCallback=function(E){var L=g;return function(){var R=g;g=L;try{return E.apply(this,arguments)}finally{g=R}}}})(nd);td.exports=nd;var rh=td.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rd=Bt,Oe=rh;function x(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var od=new Set,Vr={};function $n(e,t){Jn(e,t),Jn(e+"Capture",t)}function Jn(e,t){for(Vr[e]=t,e=0;e<t.length;e++)od.add(t[e])}var xt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hl=Object.prototype.hasOwnProperty,oh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ja={},eu={};function ih(e){return Hl.call(eu,e)?!0:Hl.call(Ja,e)?!1:oh.test(e)?eu[e]=!0:(Ja[e]=!0,!1)}function lh(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function sh(e,t,n,r){if(t===null||typeof t>"u"||lh(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function _e(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){fe[e]=new _e(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];fe[t]=new _e(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){fe[e]=new _e(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){fe[e]=new _e(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){fe[e]=new _e(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){fe[e]=new _e(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){fe[e]=new _e(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){fe[e]=new _e(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){fe[e]=new _e(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ks=/[\-:]([a-z])/g;function Gs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ks,Gs);fe[t]=new _e(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ks,Gs);fe[t]=new _e(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ks,Gs);fe[t]=new _e(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){fe[e]=new _e(e,1,!1,e.toLowerCase(),null,!1,!1)});fe.xlinkHref=new _e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){fe[e]=new _e(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ys(e,t,n,r){var o=fe.hasOwnProperty(t)?fe[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(sh(t,n,o,r)&&(n=null),r||o===null?ih(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var At=rd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xo=Symbol.for("react.element"),Ln=Symbol.for("react.portal"),Nn=Symbol.for("react.fragment"),Xs=Symbol.for("react.strict_mode"),Ul=Symbol.for("react.profiler"),id=Symbol.for("react.provider"),ld=Symbol.for("react.context"),qs=Symbol.for("react.forward_ref"),Wl=Symbol.for("react.suspense"),Ql=Symbol.for("react.suspense_list"),Zs=Symbol.for("react.memo"),Nt=Symbol.for("react.lazy"),sd=Symbol.for("react.offscreen"),tu=Symbol.iterator;function hr(e){return e===null||typeof e!="object"?null:(e=tu&&e[tu]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Object.assign,tl;function $r(e){if(tl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);tl=t&&t[1]||""}return`
`+tl+e}var nl=!1;function rl(e,t){if(!e||nl)return"";nl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,s=i.length-1;1<=l&&0<=s&&o[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(o[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||o[l]!==i[s]){var a=`
`+o[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=s);break}}}finally{nl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?$r(e):""}function ah(e){switch(e.tag){case 5:return $r(e.type);case 16:return $r("Lazy");case 13:return $r("Suspense");case 19:return $r("SuspenseList");case 0:case 2:case 15:return e=rl(e.type,!1),e;case 11:return e=rl(e.type.render,!1),e;case 1:return e=rl(e.type,!0),e;default:return""}}function Kl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Nn:return"Fragment";case Ln:return"Portal";case Ul:return"Profiler";case Xs:return"StrictMode";case Wl:return"Suspense";case Ql:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ld:return(e.displayName||"Context")+".Consumer";case id:return(e._context.displayName||"Context")+".Provider";case qs:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Zs:return t=e.displayName||null,t!==null?t:Kl(e.type)||"Memo";case Nt:t=e._payload,e=e._init;try{return Kl(e(t))}catch{}}return null}function uh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Kl(t);case 8:return t===Xs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function qt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ad(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ch(e){var t=ad(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function So(e){e._valueTracker||(e._valueTracker=ch(e))}function ud(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ad(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function oi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Gl(e,t){var n=t.checked;return Y({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function nu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=qt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function cd(e,t){t=t.checked,t!=null&&Ys(e,"checked",t,!1)}function Yl(e,t){cd(e,t);var n=qt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Xl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Xl(e,t.type,qt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ru(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Xl(e,t,n){(t!=="number"||oi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ar=Array.isArray;function Qn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+qt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ql(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(x(91));return Y({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ou(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(x(92));if(Ar(n)){if(1<n.length)throw Error(x(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:qt(n)}}function dd(e,t){var n=qt(t.value),r=qt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function iu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function fd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?fd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Co,pd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Co=Co||document.createElement("div"),Co.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Co.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Br(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Tr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},dh=["Webkit","ms","Moz","O"];Object.keys(Tr).forEach(function(e){dh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Tr[t]=Tr[e]})});function hd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Tr.hasOwnProperty(e)&&Tr[e]?(""+t).trim():t+"px"}function gd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=hd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var fh=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Jl(e,t){if(t){if(fh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(x(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(x(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(x(61))}if(t.style!=null&&typeof t.style!="object")throw Error(x(62))}}function es(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ts=null;function Js(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ns=null,Kn=null,Gn=null;function lu(e){if(e=po(e)){if(typeof ns!="function")throw Error(x(280));var t=e.stateNode;t&&(t=Ii(t),ns(e.stateNode,e.type,t))}}function md(e){Kn?Gn?Gn.push(e):Gn=[e]:Kn=e}function vd(){if(Kn){var e=Kn,t=Gn;if(Gn=Kn=null,lu(e),t)for(e=0;e<t.length;e++)lu(t[e])}}function yd(e,t){return e(t)}function wd(){}var ol=!1;function bd(e,t,n){if(ol)return e(t,n);ol=!0;try{return yd(e,t,n)}finally{ol=!1,(Kn!==null||Gn!==null)&&(wd(),vd())}}function Hr(e,t){var n=e.stateNode;if(n===null)return null;var r=Ii(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(x(231,t,typeof n));return n}var rs=!1;if(xt)try{var gr={};Object.defineProperty(gr,"passive",{get:function(){rs=!0}}),window.addEventListener("test",gr,gr),window.removeEventListener("test",gr,gr)}catch{rs=!1}function ph(e,t,n,r,o,i,l,s,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(p){this.onError(p)}}var Lr=!1,ii=null,li=!1,os=null,hh={onError:function(e){Lr=!0,ii=e}};function gh(e,t,n,r,o,i,l,s,a){Lr=!1,ii=null,ph.apply(hh,arguments)}function mh(e,t,n,r,o,i,l,s,a){if(gh.apply(this,arguments),Lr){if(Lr){var u=ii;Lr=!1,ii=null}else throw Error(x(198));li||(li=!0,os=u)}}function An(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function _d(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function su(e){if(An(e)!==e)throw Error(x(188))}function vh(e){var t=e.alternate;if(!t){if(t=An(e),t===null)throw Error(x(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return su(o),e;if(i===r)return su(o),t;i=i.sibling}throw Error(x(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?e:t}function kd(e){return e=vh(e),e!==null?xd(e):null}function xd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=xd(e);if(t!==null)return t;e=e.sibling}return null}var Sd=Oe.unstable_scheduleCallback,au=Oe.unstable_cancelCallback,yh=Oe.unstable_shouldYield,wh=Oe.unstable_requestPaint,J=Oe.unstable_now,bh=Oe.unstable_getCurrentPriorityLevel,ea=Oe.unstable_ImmediatePriority,Cd=Oe.unstable_UserBlockingPriority,si=Oe.unstable_NormalPriority,_h=Oe.unstable_LowPriority,Ed=Oe.unstable_IdlePriority,Ri=null,ft=null;function kh(e){if(ft&&typeof ft.onCommitFiberRoot=="function")try{ft.onCommitFiberRoot(Ri,e,void 0,(e.current.flags&128)===128)}catch{}}var ot=Math.clz32?Math.clz32:Ch,xh=Math.log,Sh=Math.LN2;function Ch(e){return e>>>=0,e===0?32:31-(xh(e)/Sh|0)|0}var Eo=64,$o=4194304;function Pr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ai(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~o;s!==0?r=Pr(s):(i&=l,i!==0&&(r=Pr(i)))}else l=n&~o,l!==0?r=Pr(l):i!==0&&(r=Pr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ot(t),o=1<<n,r|=e[n],t&=~o;return r}function Eh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $h(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-ot(i),s=1<<l,a=o[l];a===-1?(!(s&n)||s&r)&&(o[l]=Eh(s,t)):a<=t&&(e.expiredLanes|=s),i&=~s}}function is(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function $d(){var e=Eo;return Eo<<=1,!(Eo&4194240)&&(Eo=64),e}function il(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function co(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ot(t),e[t]=n}function Ah(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-ot(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function ta(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ot(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var F=0;function Ad(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Pd,na,zd,Td,Ld,ls=!1,Ao=[],Ht=null,Ut=null,Wt=null,Ur=new Map,Wr=new Map,Ot=[],Ph="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function uu(e,t){switch(e){case"focusin":case"focusout":Ht=null;break;case"dragenter":case"dragleave":Ut=null;break;case"mouseover":case"mouseout":Wt=null;break;case"pointerover":case"pointerout":Ur.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wr.delete(t.pointerId)}}function mr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=po(t),t!==null&&na(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function zh(e,t,n,r,o){switch(t){case"focusin":return Ht=mr(Ht,e,t,n,r,o),!0;case"dragenter":return Ut=mr(Ut,e,t,n,r,o),!0;case"mouseover":return Wt=mr(Wt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Ur.set(i,mr(Ur.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Wr.set(i,mr(Wr.get(i)||null,e,t,n,r,o)),!0}return!1}function Nd(e){var t=pn(e.target);if(t!==null){var n=An(t);if(n!==null){if(t=n.tag,t===13){if(t=_d(n),t!==null){e.blockedOn=t,Ld(e.priority,function(){zd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Qo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ss(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ts=r,n.target.dispatchEvent(r),ts=null}else return t=po(n),t!==null&&na(t),e.blockedOn=n,!1;t.shift()}return!0}function cu(e,t,n){Qo(e)&&n.delete(t)}function Th(){ls=!1,Ht!==null&&Qo(Ht)&&(Ht=null),Ut!==null&&Qo(Ut)&&(Ut=null),Wt!==null&&Qo(Wt)&&(Wt=null),Ur.forEach(cu),Wr.forEach(cu)}function vr(e,t){e.blockedOn===t&&(e.blockedOn=null,ls||(ls=!0,Oe.unstable_scheduleCallback(Oe.unstable_NormalPriority,Th)))}function Qr(e){function t(o){return vr(o,e)}if(0<Ao.length){vr(Ao[0],e);for(var n=1;n<Ao.length;n++){var r=Ao[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ht!==null&&vr(Ht,e),Ut!==null&&vr(Ut,e),Wt!==null&&vr(Wt,e),Ur.forEach(t),Wr.forEach(t),n=0;n<Ot.length;n++)r=Ot[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ot.length&&(n=Ot[0],n.blockedOn===null);)Nd(n),n.blockedOn===null&&Ot.shift()}var Yn=At.ReactCurrentBatchConfig,ui=!0;function Lh(e,t,n,r){var o=F,i=Yn.transition;Yn.transition=null;try{F=1,ra(e,t,n,r)}finally{F=o,Yn.transition=i}}function Nh(e,t,n,r){var o=F,i=Yn.transition;Yn.transition=null;try{F=4,ra(e,t,n,r)}finally{F=o,Yn.transition=i}}function ra(e,t,n,r){if(ui){var o=ss(e,t,n,r);if(o===null)gl(e,t,r,ci,n),uu(e,r);else if(zh(o,e,t,n,r))r.stopPropagation();else if(uu(e,r),t&4&&-1<Ph.indexOf(e)){for(;o!==null;){var i=po(o);if(i!==null&&Pd(i),i=ss(e,t,n,r),i===null&&gl(e,t,r,ci,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else gl(e,t,r,null,n)}}var ci=null;function ss(e,t,n,r){if(ci=null,e=Js(r),e=pn(e),e!==null)if(t=An(e),t===null)e=null;else if(n=t.tag,n===13){if(e=_d(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ci=e,null}function Rd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(bh()){case ea:return 1;case Cd:return 4;case si:case _h:return 16;case Ed:return 536870912;default:return 16}default:return 16}}var Ft=null,oa=null,Ko=null;function Md(){if(Ko)return Ko;var e,t=oa,n=t.length,r,o="value"in Ft?Ft.value:Ft.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return Ko=o.slice(e,1<r?1-r:void 0)}function Go(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Po(){return!0}function du(){return!1}function Ie(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Po:du,this.isPropagationStopped=du,this}return Y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Po)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Po)},persist:function(){},isPersistent:Po}),t}var cr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ia=Ie(cr),fo=Y({},cr,{view:0,detail:0}),Rh=Ie(fo),ll,sl,yr,Mi=Y({},fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:la,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==yr&&(yr&&e.type==="mousemove"?(ll=e.screenX-yr.screenX,sl=e.screenY-yr.screenY):sl=ll=0,yr=e),ll)},movementY:function(e){return"movementY"in e?e.movementY:sl}}),fu=Ie(Mi),Mh=Y({},Mi,{dataTransfer:0}),Oh=Ie(Mh),Dh=Y({},fo,{relatedTarget:0}),al=Ie(Dh),Ih=Y({},cr,{animationName:0,elapsedTime:0,pseudoElement:0}),Fh=Ie(Ih),jh=Y({},cr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Vh=Ie(jh),Bh=Y({},cr,{data:0}),pu=Ie(Bh),Hh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Uh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Wh[e])?!!t[e]:!1}function la(){return Qh}var Kh=Y({},fo,{key:function(e){if(e.key){var t=Hh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Go(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Uh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:la,charCode:function(e){return e.type==="keypress"?Go(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Go(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Gh=Ie(Kh),Yh=Y({},Mi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hu=Ie(Yh),Xh=Y({},fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:la}),qh=Ie(Xh),Zh=Y({},cr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jh=Ie(Zh),e0=Y({},Mi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),t0=Ie(e0),n0=[9,13,27,32],sa=xt&&"CompositionEvent"in window,Nr=null;xt&&"documentMode"in document&&(Nr=document.documentMode);var r0=xt&&"TextEvent"in window&&!Nr,Od=xt&&(!sa||Nr&&8<Nr&&11>=Nr),gu=String.fromCharCode(32),mu=!1;function Dd(e,t){switch(e){case"keyup":return n0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Id(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Rn=!1;function o0(e,t){switch(e){case"compositionend":return Id(t);case"keypress":return t.which!==32?null:(mu=!0,gu);case"textInput":return e=t.data,e===gu&&mu?null:e;default:return null}}function i0(e,t){if(Rn)return e==="compositionend"||!sa&&Dd(e,t)?(e=Md(),Ko=oa=Ft=null,Rn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Od&&t.locale!=="ko"?null:t.data;default:return null}}var l0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!l0[e.type]:t==="textarea"}function Fd(e,t,n,r){md(r),t=di(t,"onChange"),0<t.length&&(n=new ia("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Rr=null,Kr=null;function s0(e){Xd(e,0)}function Oi(e){var t=Dn(e);if(ud(t))return e}function a0(e,t){if(e==="change")return t}var jd=!1;if(xt){var ul;if(xt){var cl="oninput"in document;if(!cl){var yu=document.createElement("div");yu.setAttribute("oninput","return;"),cl=typeof yu.oninput=="function"}ul=cl}else ul=!1;jd=ul&&(!document.documentMode||9<document.documentMode)}function wu(){Rr&&(Rr.detachEvent("onpropertychange",Vd),Kr=Rr=null)}function Vd(e){if(e.propertyName==="value"&&Oi(Kr)){var t=[];Fd(t,Kr,e,Js(e)),bd(s0,t)}}function u0(e,t,n){e==="focusin"?(wu(),Rr=t,Kr=n,Rr.attachEvent("onpropertychange",Vd)):e==="focusout"&&wu()}function c0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Oi(Kr)}function d0(e,t){if(e==="click")return Oi(t)}function f0(e,t){if(e==="input"||e==="change")return Oi(t)}function p0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var lt=typeof Object.is=="function"?Object.is:p0;function Gr(e,t){if(lt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Hl.call(t,o)||!lt(e[o],t[o]))return!1}return!0}function bu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _u(e,t){var n=bu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bu(n)}}function Bd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Bd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Hd(){for(var e=window,t=oi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=oi(e.document)}return t}function aa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function h0(e){var t=Hd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Bd(n.ownerDocument.documentElement,n)){if(r!==null&&aa(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=_u(n,i);var l=_u(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var g0=xt&&"documentMode"in document&&11>=document.documentMode,Mn=null,as=null,Mr=null,us=!1;function ku(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;us||Mn==null||Mn!==oi(r)||(r=Mn,"selectionStart"in r&&aa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Mr&&Gr(Mr,r)||(Mr=r,r=di(as,"onSelect"),0<r.length&&(t=new ia("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Mn)))}function zo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var On={animationend:zo("Animation","AnimationEnd"),animationiteration:zo("Animation","AnimationIteration"),animationstart:zo("Animation","AnimationStart"),transitionend:zo("Transition","TransitionEnd")},dl={},Ud={};xt&&(Ud=document.createElement("div").style,"AnimationEvent"in window||(delete On.animationend.animation,delete On.animationiteration.animation,delete On.animationstart.animation),"TransitionEvent"in window||delete On.transitionend.transition);function Di(e){if(dl[e])return dl[e];if(!On[e])return e;var t=On[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ud)return dl[e]=t[n];return e}var Wd=Di("animationend"),Qd=Di("animationiteration"),Kd=Di("animationstart"),Gd=Di("transitionend"),Yd=new Map,xu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rn(e,t){Yd.set(e,t),$n(t,[e])}for(var fl=0;fl<xu.length;fl++){var pl=xu[fl],m0=pl.toLowerCase(),v0=pl[0].toUpperCase()+pl.slice(1);rn(m0,"on"+v0)}rn(Wd,"onAnimationEnd");rn(Qd,"onAnimationIteration");rn(Kd,"onAnimationStart");rn("dblclick","onDoubleClick");rn("focusin","onFocus");rn("focusout","onBlur");rn(Gd,"onTransitionEnd");Jn("onMouseEnter",["mouseout","mouseover"]);Jn("onMouseLeave",["mouseout","mouseover"]);Jn("onPointerEnter",["pointerout","pointerover"]);Jn("onPointerLeave",["pointerout","pointerover"]);$n("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$n("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$n("onBeforeInput",["compositionend","keypress","textInput","paste"]);$n("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$n("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$n("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),y0=new Set("cancel close invalid load scroll toggle".split(" ").concat(zr));function Su(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,mh(r,t,void 0,e),e.currentTarget=null}function Xd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],a=s.instance,u=s.currentTarget;if(s=s.listener,a!==i&&o.isPropagationStopped())break e;Su(o,s,u),i=a}else for(l=0;l<r.length;l++){if(s=r[l],a=s.instance,u=s.currentTarget,s=s.listener,a!==i&&o.isPropagationStopped())break e;Su(o,s,u),i=a}}}if(li)throw e=os,li=!1,os=null,e}function H(e,t){var n=t[hs];n===void 0&&(n=t[hs]=new Set);var r=e+"__bubble";n.has(r)||(qd(t,e,2,!1),n.add(r))}function hl(e,t,n){var r=0;t&&(r|=4),qd(n,e,r,t)}var To="_reactListening"+Math.random().toString(36).slice(2);function Yr(e){if(!e[To]){e[To]=!0,od.forEach(function(n){n!=="selectionchange"&&(y0.has(n)||hl(n,!1,e),hl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[To]||(t[To]=!0,hl("selectionchange",!1,t))}}function qd(e,t,n,r){switch(Rd(t)){case 1:var o=Lh;break;case 4:o=Nh;break;default:o=ra}n=o.bind(null,t,n,e),o=void 0,!rs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function gl(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;l=l.return}for(;s!==null;){if(l=pn(s),l===null)return;if(a=l.tag,a===5||a===6){r=i=l;continue e}s=s.parentNode}}r=r.return}bd(function(){var u=i,p=Js(n),f=[];e:{var g=Yd.get(e);if(g!==void 0){var m=ia,w=e;switch(e){case"keypress":if(Go(n)===0)break e;case"keydown":case"keyup":m=Gh;break;case"focusin":w="focus",m=al;break;case"focusout":w="blur",m=al;break;case"beforeblur":case"afterblur":m=al;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=fu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Oh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=qh;break;case Wd:case Qd:case Kd:m=Fh;break;case Gd:m=Jh;break;case"scroll":m=Rh;break;case"wheel":m=t0;break;case"copy":case"cut":case"paste":m=Vh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=hu}var b=(t&4)!==0,P=!b&&e==="scroll",h=b?g!==null?g+"Capture":null:g;b=[];for(var c=u,d;c!==null;){d=c;var v=d.stateNode;if(d.tag===5&&v!==null&&(d=v,h!==null&&(v=Hr(c,h),v!=null&&b.push(Xr(c,v,d)))),P)break;c=c.return}0<b.length&&(g=new m(g,w,null,n,p),f.push({event:g,listeners:b}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",g&&n!==ts&&(w=n.relatedTarget||n.fromElement)&&(pn(w)||w[St]))break e;if((m||g)&&(g=p.window===p?p:(g=p.ownerDocument)?g.defaultView||g.parentWindow:window,m?(w=n.relatedTarget||n.toElement,m=u,w=w?pn(w):null,w!==null&&(P=An(w),w!==P||w.tag!==5&&w.tag!==6)&&(w=null)):(m=null,w=u),m!==w)){if(b=fu,v="onMouseLeave",h="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(b=hu,v="onPointerLeave",h="onPointerEnter",c="pointer"),P=m==null?g:Dn(m),d=w==null?g:Dn(w),g=new b(v,c+"leave",m,n,p),g.target=P,g.relatedTarget=d,v=null,pn(p)===u&&(b=new b(h,c+"enter",w,n,p),b.target=d,b.relatedTarget=P,v=b),P=v,m&&w)t:{for(b=m,h=w,c=0,d=b;d;d=zn(d))c++;for(d=0,v=h;v;v=zn(v))d++;for(;0<c-d;)b=zn(b),c--;for(;0<d-c;)h=zn(h),d--;for(;c--;){if(b===h||h!==null&&b===h.alternate)break t;b=zn(b),h=zn(h)}b=null}else b=null;m!==null&&Cu(f,g,m,b,!1),w!==null&&P!==null&&Cu(f,P,w,b,!0)}}e:{if(g=u?Dn(u):window,m=g.nodeName&&g.nodeName.toLowerCase(),m==="select"||m==="input"&&g.type==="file")var _=a0;else if(vu(g))if(jd)_=f0;else{_=c0;var S=u0}else(m=g.nodeName)&&m.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(_=d0);if(_&&(_=_(e,u))){Fd(f,_,n,p);break e}S&&S(e,g,u),e==="focusout"&&(S=g._wrapperState)&&S.controlled&&g.type==="number"&&Xl(g,"number",g.value)}switch(S=u?Dn(u):window,e){case"focusin":(vu(S)||S.contentEditable==="true")&&(Mn=S,as=u,Mr=null);break;case"focusout":Mr=as=Mn=null;break;case"mousedown":us=!0;break;case"contextmenu":case"mouseup":case"dragend":us=!1,ku(f,n,p);break;case"selectionchange":if(g0)break;case"keydown":case"keyup":ku(f,n,p)}var C;if(sa)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else Rn?Dd(e,n)&&(A="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(Od&&n.locale!=="ko"&&(Rn||A!=="onCompositionStart"?A==="onCompositionEnd"&&Rn&&(C=Md()):(Ft=p,oa="value"in Ft?Ft.value:Ft.textContent,Rn=!0)),S=di(u,A),0<S.length&&(A=new pu(A,e,null,n,p),f.push({event:A,listeners:S}),C?A.data=C:(C=Id(n),C!==null&&(A.data=C)))),(C=r0?o0(e,n):i0(e,n))&&(u=di(u,"onBeforeInput"),0<u.length&&(p=new pu("onBeforeInput","beforeinput",null,n,p),f.push({event:p,listeners:u}),p.data=C))}Xd(f,t)})}function Xr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function di(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Hr(e,n),i!=null&&r.unshift(Xr(e,i,o)),i=Hr(e,t),i!=null&&r.push(Xr(e,i,o))),e=e.return}return r}function zn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Cu(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var s=n,a=s.alternate,u=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&u!==null&&(s=u,o?(a=Hr(n,i),a!=null&&l.unshift(Xr(n,a,s))):o||(a=Hr(n,i),a!=null&&l.push(Xr(n,a,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var w0=/\r\n?/g,b0=/\u0000|\uFFFD/g;function Eu(e){return(typeof e=="string"?e:""+e).replace(w0,`
`).replace(b0,"")}function Lo(e,t,n){if(t=Eu(t),Eu(e)!==t&&n)throw Error(x(425))}function fi(){}var cs=null,ds=null;function fs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ps=typeof setTimeout=="function"?setTimeout:void 0,_0=typeof clearTimeout=="function"?clearTimeout:void 0,$u=typeof Promise=="function"?Promise:void 0,k0=typeof queueMicrotask=="function"?queueMicrotask:typeof $u<"u"?function(e){return $u.resolve(null).then(e).catch(x0)}:ps;function x0(e){setTimeout(function(){throw e})}function ml(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Qr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Qr(t)}function Qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Au(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var dr=Math.random().toString(36).slice(2),dt="__reactFiber$"+dr,qr="__reactProps$"+dr,St="__reactContainer$"+dr,hs="__reactEvents$"+dr,S0="__reactListeners$"+dr,C0="__reactHandles$"+dr;function pn(e){var t=e[dt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[St]||n[dt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Au(e);e!==null;){if(n=e[dt])return n;e=Au(e)}return t}e=n,n=e.parentNode}return null}function po(e){return e=e[dt]||e[St],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Dn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(x(33))}function Ii(e){return e[qr]||null}var gs=[],In=-1;function on(e){return{current:e}}function U(e){0>In||(e.current=gs[In],gs[In]=null,In--)}function B(e,t){In++,gs[In]=e.current,e.current=t}var Zt={},ve=on(Zt),Ee=on(!1),bn=Zt;function er(e,t){var n=e.type.contextTypes;if(!n)return Zt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function $e(e){return e=e.childContextTypes,e!=null}function pi(){U(Ee),U(ve)}function Pu(e,t,n){if(ve.current!==Zt)throw Error(x(168));B(ve,t),B(Ee,n)}function Zd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(x(108,uh(e)||"Unknown",o));return Y({},n,r)}function hi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Zt,bn=ve.current,B(ve,e),B(Ee,Ee.current),!0}function zu(e,t,n){var r=e.stateNode;if(!r)throw Error(x(169));n?(e=Zd(e,t,bn),r.__reactInternalMemoizedMergedChildContext=e,U(Ee),U(ve),B(ve,e)):U(Ee),B(Ee,n)}var yt=null,Fi=!1,vl=!1;function Jd(e){yt===null?yt=[e]:yt.push(e)}function E0(e){Fi=!0,Jd(e)}function ln(){if(!vl&&yt!==null){vl=!0;var e=0,t=F;try{var n=yt;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}yt=null,Fi=!1}catch(o){throw yt!==null&&(yt=yt.slice(e+1)),Sd(ea,ln),o}finally{F=t,vl=!1}}return null}var Fn=[],jn=0,gi=null,mi=0,Ue=[],We=0,_n=null,wt=1,bt="";function cn(e,t){Fn[jn++]=mi,Fn[jn++]=gi,gi=e,mi=t}function ef(e,t,n){Ue[We++]=wt,Ue[We++]=bt,Ue[We++]=_n,_n=e;var r=wt;e=bt;var o=32-ot(r)-1;r&=~(1<<o),n+=1;var i=32-ot(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,wt=1<<32-ot(t)+o|n<<o|r,bt=i+e}else wt=1<<i|n<<o|r,bt=e}function ua(e){e.return!==null&&(cn(e,1),ef(e,1,0))}function ca(e){for(;e===gi;)gi=Fn[--jn],Fn[jn]=null,mi=Fn[--jn],Fn[jn]=null;for(;e===_n;)_n=Ue[--We],Ue[We]=null,bt=Ue[--We],Ue[We]=null,wt=Ue[--We],Ue[We]=null}var Re=null,Ne=null,Q=!1,rt=null;function tf(e,t){var n=Qe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Tu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Re=e,Ne=Qt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Re=e,Ne=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=_n!==null?{id:wt,overflow:bt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Qe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Re=e,Ne=null,!0):!1;default:return!1}}function ms(e){return(e.mode&1)!==0&&(e.flags&128)===0}function vs(e){if(Q){var t=Ne;if(t){var n=t;if(!Tu(e,t)){if(ms(e))throw Error(x(418));t=Qt(n.nextSibling);var r=Re;t&&Tu(e,t)?tf(r,n):(e.flags=e.flags&-4097|2,Q=!1,Re=e)}}else{if(ms(e))throw Error(x(418));e.flags=e.flags&-4097|2,Q=!1,Re=e}}}function Lu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Re=e}function No(e){if(e!==Re)return!1;if(!Q)return Lu(e),Q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!fs(e.type,e.memoizedProps)),t&&(t=Ne)){if(ms(e))throw nf(),Error(x(418));for(;t;)tf(e,t),t=Qt(t.nextSibling)}if(Lu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(x(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ne=Qt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ne=null}}else Ne=Re?Qt(e.stateNode.nextSibling):null;return!0}function nf(){for(var e=Ne;e;)e=Qt(e.nextSibling)}function tr(){Ne=Re=null,Q=!1}function da(e){rt===null?rt=[e]:rt.push(e)}var $0=At.ReactCurrentBatchConfig;function tt(e,t){if(e&&e.defaultProps){t=Y({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var vi=on(null),yi=null,Vn=null,fa=null;function pa(){fa=Vn=yi=null}function ha(e){var t=vi.current;U(vi),e._currentValue=t}function ys(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Xn(e,t){yi=e,fa=Vn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ce=!0),e.firstContext=null)}function Ye(e){var t=e._currentValue;if(fa!==e)if(e={context:e,memoizedValue:t,next:null},Vn===null){if(yi===null)throw Error(x(308));Vn=e,yi.dependencies={lanes:0,firstContext:e}}else Vn=Vn.next=e;return t}var hn=null;function ga(e){hn===null?hn=[e]:hn.push(e)}function rf(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,ga(t)):(n.next=o.next,o.next=n),t.interleaved=n,Ct(e,r)}function Ct(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Rt=!1;function ma(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function of(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function _t(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Kt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,D&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Ct(e,n)}return o=r.interleaved,o===null?(t.next=t,ga(r)):(t.next=o.next,o.next=t),r.interleaved=t,Ct(e,n)}function Yo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ta(e,n)}}function Nu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function wi(e,t,n,r){var o=e.updateQueue;Rt=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var a=s,u=a.next;a.next=null,l===null?i=u:l.next=u,l=a;var p=e.alternate;p!==null&&(p=p.updateQueue,s=p.lastBaseUpdate,s!==l&&(s===null?p.firstBaseUpdate=u:s.next=u,p.lastBaseUpdate=a))}if(i!==null){var f=o.baseState;l=0,p=u=a=null,s=i;do{var g=s.lane,m=s.eventTime;if((r&g)===g){p!==null&&(p=p.next={eventTime:m,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,b=s;switch(g=t,m=n,b.tag){case 1:if(w=b.payload,typeof w=="function"){f=w.call(m,f,g);break e}f=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=b.payload,g=typeof w=="function"?w.call(m,f,g):w,g==null)break e;f=Y({},f,g);break e;case 2:Rt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[s]:g.push(s))}else m={eventTime:m,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},p===null?(u=p=m,a=f):p=p.next=m,l|=g;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;g=s,s=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(1);if(p===null&&(a=f),o.baseState=a,o.firstBaseUpdate=u,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);xn|=l,e.lanes=l,e.memoizedState=f}}function Ru(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(x(191,o));o.call(r)}}}var lf=new rd.Component().refs;function ws(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Y({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ji={isMounted:function(e){return(e=e._reactInternals)?An(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=we(),o=Yt(e),i=_t(r,o);i.payload=t,n!=null&&(i.callback=n),t=Kt(e,i,o),t!==null&&(it(t,e,o,r),Yo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=we(),o=Yt(e),i=_t(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Kt(e,i,o),t!==null&&(it(t,e,o,r),Yo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=we(),r=Yt(e),o=_t(n,r);o.tag=2,t!=null&&(o.callback=t),t=Kt(e,o,r),t!==null&&(it(t,e,r,n),Yo(t,e,r))}};function Mu(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Gr(n,r)||!Gr(o,i):!0}function sf(e,t,n){var r=!1,o=Zt,i=t.contextType;return typeof i=="object"&&i!==null?i=Ye(i):(o=$e(t)?bn:ve.current,r=t.contextTypes,i=(r=r!=null)?er(e,o):Zt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ji,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Ou(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ji.enqueueReplaceState(t,t.state,null)}function bs(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=lf,ma(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Ye(i):(i=$e(t)?bn:ve.current,o.context=er(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(ws(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&ji.enqueueReplaceState(o,o.state,null),wi(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function wr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var s=o.refs;s===lf&&(s=o.refs={}),l===null?delete s[i]:s[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,e))}return e}function Ro(e,t){throw e=Object.prototype.toString.call(t),Error(x(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Du(e){var t=e._init;return t(e._payload)}function af(e){function t(h,c){if(e){var d=h.deletions;d===null?(h.deletions=[c],h.flags|=16):d.push(c)}}function n(h,c){if(!e)return null;for(;c!==null;)t(h,c),c=c.sibling;return null}function r(h,c){for(h=new Map;c!==null;)c.key!==null?h.set(c.key,c):h.set(c.index,c),c=c.sibling;return h}function o(h,c){return h=Xt(h,c),h.index=0,h.sibling=null,h}function i(h,c,d){return h.index=d,e?(d=h.alternate,d!==null?(d=d.index,d<c?(h.flags|=2,c):d):(h.flags|=2,c)):(h.flags|=1048576,c)}function l(h){return e&&h.alternate===null&&(h.flags|=2),h}function s(h,c,d,v){return c===null||c.tag!==6?(c=Sl(d,h.mode,v),c.return=h,c):(c=o(c,d),c.return=h,c)}function a(h,c,d,v){var _=d.type;return _===Nn?p(h,c,d.props.children,v,d.key):c!==null&&(c.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Nt&&Du(_)===c.type)?(v=o(c,d.props),v.ref=wr(h,c,d),v.return=h,v):(v=ti(d.type,d.key,d.props,null,h.mode,v),v.ref=wr(h,c,d),v.return=h,v)}function u(h,c,d,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==d.containerInfo||c.stateNode.implementation!==d.implementation?(c=Cl(d,h.mode,v),c.return=h,c):(c=o(c,d.children||[]),c.return=h,c)}function p(h,c,d,v,_){return c===null||c.tag!==7?(c=wn(d,h.mode,v,_),c.return=h,c):(c=o(c,d),c.return=h,c)}function f(h,c,d){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Sl(""+c,h.mode,d),c.return=h,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case xo:return d=ti(c.type,c.key,c.props,null,h.mode,d),d.ref=wr(h,null,c),d.return=h,d;case Ln:return c=Cl(c,h.mode,d),c.return=h,c;case Nt:var v=c._init;return f(h,v(c._payload),d)}if(Ar(c)||hr(c))return c=wn(c,h.mode,d,null),c.return=h,c;Ro(h,c)}return null}function g(h,c,d,v){var _=c!==null?c.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return _!==null?null:s(h,c,""+d,v);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case xo:return d.key===_?a(h,c,d,v):null;case Ln:return d.key===_?u(h,c,d,v):null;case Nt:return _=d._init,g(h,c,_(d._payload),v)}if(Ar(d)||hr(d))return _!==null?null:p(h,c,d,v,null);Ro(h,d)}return null}function m(h,c,d,v,_){if(typeof v=="string"&&v!==""||typeof v=="number")return h=h.get(d)||null,s(c,h,""+v,_);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case xo:return h=h.get(v.key===null?d:v.key)||null,a(c,h,v,_);case Ln:return h=h.get(v.key===null?d:v.key)||null,u(c,h,v,_);case Nt:var S=v._init;return m(h,c,d,S(v._payload),_)}if(Ar(v)||hr(v))return h=h.get(d)||null,p(c,h,v,_,null);Ro(c,v)}return null}function w(h,c,d,v){for(var _=null,S=null,C=c,A=c=0,I=null;C!==null&&A<d.length;A++){C.index>A?(I=C,C=null):I=C.sibling;var T=g(h,C,d[A],v);if(T===null){C===null&&(C=I);break}e&&C&&T.alternate===null&&t(h,C),c=i(T,c,A),S===null?_=T:S.sibling=T,S=T,C=I}if(A===d.length)return n(h,C),Q&&cn(h,A),_;if(C===null){for(;A<d.length;A++)C=f(h,d[A],v),C!==null&&(c=i(C,c,A),S===null?_=C:S.sibling=C,S=C);return Q&&cn(h,A),_}for(C=r(h,C);A<d.length;A++)I=m(C,h,A,d[A],v),I!==null&&(e&&I.alternate!==null&&C.delete(I.key===null?A:I.key),c=i(I,c,A),S===null?_=I:S.sibling=I,S=I);return e&&C.forEach(function(ae){return t(h,ae)}),Q&&cn(h,A),_}function b(h,c,d,v){var _=hr(d);if(typeof _!="function")throw Error(x(150));if(d=_.call(d),d==null)throw Error(x(151));for(var S=_=null,C=c,A=c=0,I=null,T=d.next();C!==null&&!T.done;A++,T=d.next()){C.index>A?(I=C,C=null):I=C.sibling;var ae=g(h,C,T.value,v);if(ae===null){C===null&&(C=I);break}e&&C&&ae.alternate===null&&t(h,C),c=i(ae,c,A),S===null?_=ae:S.sibling=ae,S=ae,C=I}if(T.done)return n(h,C),Q&&cn(h,A),_;if(C===null){for(;!T.done;A++,T=d.next())T=f(h,T.value,v),T!==null&&(c=i(T,c,A),S===null?_=T:S.sibling=T,S=T);return Q&&cn(h,A),_}for(C=r(h,C);!T.done;A++,T=d.next())T=m(C,h,A,T.value,v),T!==null&&(e&&T.alternate!==null&&C.delete(T.key===null?A:T.key),c=i(T,c,A),S===null?_=T:S.sibling=T,S=T);return e&&C.forEach(function(oe){return t(h,oe)}),Q&&cn(h,A),_}function P(h,c,d,v){if(typeof d=="object"&&d!==null&&d.type===Nn&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case xo:e:{for(var _=d.key,S=c;S!==null;){if(S.key===_){if(_=d.type,_===Nn){if(S.tag===7){n(h,S.sibling),c=o(S,d.props.children),c.return=h,h=c;break e}}else if(S.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Nt&&Du(_)===S.type){n(h,S.sibling),c=o(S,d.props),c.ref=wr(h,S,d),c.return=h,h=c;break e}n(h,S);break}else t(h,S);S=S.sibling}d.type===Nn?(c=wn(d.props.children,h.mode,v,d.key),c.return=h,h=c):(v=ti(d.type,d.key,d.props,null,h.mode,v),v.ref=wr(h,c,d),v.return=h,h=v)}return l(h);case Ln:e:{for(S=d.key;c!==null;){if(c.key===S)if(c.tag===4&&c.stateNode.containerInfo===d.containerInfo&&c.stateNode.implementation===d.implementation){n(h,c.sibling),c=o(c,d.children||[]),c.return=h,h=c;break e}else{n(h,c);break}else t(h,c);c=c.sibling}c=Cl(d,h.mode,v),c.return=h,h=c}return l(h);case Nt:return S=d._init,P(h,c,S(d._payload),v)}if(Ar(d))return w(h,c,d,v);if(hr(d))return b(h,c,d,v);Ro(h,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,c!==null&&c.tag===6?(n(h,c.sibling),c=o(c,d),c.return=h,h=c):(n(h,c),c=Sl(d,h.mode,v),c.return=h,h=c),l(h)):n(h,c)}return P}var nr=af(!0),uf=af(!1),ho={},pt=on(ho),Zr=on(ho),Jr=on(ho);function gn(e){if(e===ho)throw Error(x(174));return e}function va(e,t){switch(B(Jr,t),B(Zr,e),B(pt,ho),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Zl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Zl(t,e)}U(pt),B(pt,t)}function rr(){U(pt),U(Zr),U(Jr)}function cf(e){gn(Jr.current);var t=gn(pt.current),n=Zl(t,e.type);t!==n&&(B(Zr,e),B(pt,n))}function ya(e){Zr.current===e&&(U(pt),U(Zr))}var K=on(0);function bi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var yl=[];function wa(){for(var e=0;e<yl.length;e++)yl[e]._workInProgressVersionPrimary=null;yl.length=0}var Xo=At.ReactCurrentDispatcher,wl=At.ReactCurrentBatchConfig,kn=0,G=null,ne=null,le=null,_i=!1,Or=!1,eo=0,A0=0;function he(){throw Error(x(321))}function ba(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!lt(e[n],t[n]))return!1;return!0}function _a(e,t,n,r,o,i){if(kn=i,G=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Xo.current=e===null||e.memoizedState===null?L0:N0,e=n(r,o),Or){i=0;do{if(Or=!1,eo=0,25<=i)throw Error(x(301));i+=1,le=ne=null,t.updateQueue=null,Xo.current=R0,e=n(r,o)}while(Or)}if(Xo.current=ki,t=ne!==null&&ne.next!==null,kn=0,le=ne=G=null,_i=!1,t)throw Error(x(300));return e}function ka(){var e=eo!==0;return eo=0,e}function ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?G.memoizedState=le=e:le=le.next=e,le}function Xe(){if(ne===null){var e=G.alternate;e=e!==null?e.memoizedState:null}else e=ne.next;var t=le===null?G.memoizedState:le.next;if(t!==null)le=t,ne=e;else{if(e===null)throw Error(x(310));ne=e,e={memoizedState:ne.memoizedState,baseState:ne.baseState,baseQueue:ne.baseQueue,queue:ne.queue,next:null},le===null?G.memoizedState=le=e:le=le.next=e}return le}function to(e,t){return typeof t=="function"?t(e):t}function bl(e){var t=Xe(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=ne,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=l=null,a=null,u=i;do{var p=u.lane;if((kn&p)===p)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(s=a=f,l=r):a=a.next=f,G.lanes|=p,xn|=p}u=u.next}while(u!==null&&u!==i);a===null?l=r:a.next=s,lt(r,t.memoizedState)||(Ce=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,G.lanes|=i,xn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function _l(e){var t=Xe(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);lt(i,t.memoizedState)||(Ce=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function df(){}function ff(e,t){var n=G,r=Xe(),o=t(),i=!lt(r.memoizedState,o);if(i&&(r.memoizedState=o,Ce=!0),r=r.queue,xa(gf.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||le!==null&&le.memoizedState.tag&1){if(n.flags|=2048,no(9,hf.bind(null,n,r,o,t),void 0,null),se===null)throw Error(x(349));kn&30||pf(n,t,o)}return o}function pf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function hf(e,t,n,r){t.value=n,t.getSnapshot=r,mf(t)&&vf(e)}function gf(e,t,n){return n(function(){mf(t)&&vf(e)})}function mf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!lt(e,n)}catch{return!0}}function vf(e){var t=Ct(e,1);t!==null&&it(t,e,1,-1)}function Iu(e){var t=ct();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:to,lastRenderedState:e},t.queue=e,e=e.dispatch=T0.bind(null,G,e),[t.memoizedState,e]}function no(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function yf(){return Xe().memoizedState}function qo(e,t,n,r){var o=ct();G.flags|=e,o.memoizedState=no(1|t,n,void 0,r===void 0?null:r)}function Vi(e,t,n,r){var o=Xe();r=r===void 0?null:r;var i=void 0;if(ne!==null){var l=ne.memoizedState;if(i=l.destroy,r!==null&&ba(r,l.deps)){o.memoizedState=no(t,n,i,r);return}}G.flags|=e,o.memoizedState=no(1|t,n,i,r)}function Fu(e,t){return qo(8390656,8,e,t)}function xa(e,t){return Vi(2048,8,e,t)}function wf(e,t){return Vi(4,2,e,t)}function bf(e,t){return Vi(4,4,e,t)}function _f(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function kf(e,t,n){return n=n!=null?n.concat([e]):null,Vi(4,4,_f.bind(null,t,e),n)}function Sa(){}function xf(e,t){var n=Xe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ba(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Sf(e,t){var n=Xe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ba(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Cf(e,t,n){return kn&21?(lt(n,t)||(n=$d(),G.lanes|=n,xn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ce=!0),e.memoizedState=n)}function P0(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=wl.transition;wl.transition={};try{e(!1),t()}finally{F=n,wl.transition=r}}function Ef(){return Xe().memoizedState}function z0(e,t,n){var r=Yt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},$f(e))Af(t,n);else if(n=rf(e,t,n,r),n!==null){var o=we();it(n,e,r,o),Pf(n,t,r)}}function T0(e,t,n){var r=Yt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if($f(e))Af(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,n);if(o.hasEagerState=!0,o.eagerState=s,lt(s,l)){var a=t.interleaved;a===null?(o.next=o,ga(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=rf(e,t,o,r),n!==null&&(o=we(),it(n,e,r,o),Pf(n,t,r))}}function $f(e){var t=e.alternate;return e===G||t!==null&&t===G}function Af(e,t){Or=_i=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Pf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ta(e,n)}}var ki={readContext:Ye,useCallback:he,useContext:he,useEffect:he,useImperativeHandle:he,useInsertionEffect:he,useLayoutEffect:he,useMemo:he,useReducer:he,useRef:he,useState:he,useDebugValue:he,useDeferredValue:he,useTransition:he,useMutableSource:he,useSyncExternalStore:he,useId:he,unstable_isNewReconciler:!1},L0={readContext:Ye,useCallback:function(e,t){return ct().memoizedState=[e,t===void 0?null:t],e},useContext:Ye,useEffect:Fu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,qo(4194308,4,_f.bind(null,t,e),n)},useLayoutEffect:function(e,t){return qo(4194308,4,e,t)},useInsertionEffect:function(e,t){return qo(4,2,e,t)},useMemo:function(e,t){var n=ct();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ct();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=z0.bind(null,G,e),[r.memoizedState,e]},useRef:function(e){var t=ct();return e={current:e},t.memoizedState=e},useState:Iu,useDebugValue:Sa,useDeferredValue:function(e){return ct().memoizedState=e},useTransition:function(){var e=Iu(!1),t=e[0];return e=P0.bind(null,e[1]),ct().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=G,o=ct();if(Q){if(n===void 0)throw Error(x(407));n=n()}else{if(n=t(),se===null)throw Error(x(349));kn&30||pf(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Fu(gf.bind(null,r,i,e),[e]),r.flags|=2048,no(9,hf.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=ct(),t=se.identifierPrefix;if(Q){var n=bt,r=wt;n=(r&~(1<<32-ot(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=eo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=A0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},N0={readContext:Ye,useCallback:xf,useContext:Ye,useEffect:xa,useImperativeHandle:kf,useInsertionEffect:wf,useLayoutEffect:bf,useMemo:Sf,useReducer:bl,useRef:yf,useState:function(){return bl(to)},useDebugValue:Sa,useDeferredValue:function(e){var t=Xe();return Cf(t,ne.memoizedState,e)},useTransition:function(){var e=bl(to)[0],t=Xe().memoizedState;return[e,t]},useMutableSource:df,useSyncExternalStore:ff,useId:Ef,unstable_isNewReconciler:!1},R0={readContext:Ye,useCallback:xf,useContext:Ye,useEffect:xa,useImperativeHandle:kf,useInsertionEffect:wf,useLayoutEffect:bf,useMemo:Sf,useReducer:_l,useRef:yf,useState:function(){return _l(to)},useDebugValue:Sa,useDeferredValue:function(e){var t=Xe();return ne===null?t.memoizedState=e:Cf(t,ne.memoizedState,e)},useTransition:function(){var e=_l(to)[0],t=Xe().memoizedState;return[e,t]},useMutableSource:df,useSyncExternalStore:ff,useId:Ef,unstable_isNewReconciler:!1};function or(e,t){try{var n="",r=t;do n+=ah(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function kl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function _s(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var M0=typeof WeakMap=="function"?WeakMap:Map;function zf(e,t,n){n=_t(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Si||(Si=!0,Ts=r),_s(e,t)},n}function Tf(e,t,n){n=_t(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){_s(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){_s(e,t),typeof r!="function"&&(Gt===null?Gt=new Set([this]):Gt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function ju(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new M0;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Y0.bind(null,e,t,n),t.then(e,e))}function Vu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Bu(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=_t(-1,1),t.tag=2,Kt(n,t,1))),n.lanes|=1),e)}var O0=At.ReactCurrentOwner,Ce=!1;function ye(e,t,n,r){t.child=e===null?uf(t,null,n,r):nr(t,e.child,n,r)}function Hu(e,t,n,r,o){n=n.render;var i=t.ref;return Xn(t,o),r=_a(e,t,n,r,i,o),n=ka(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Et(e,t,o)):(Q&&n&&ua(t),t.flags|=1,ye(e,t,r,o),t.child)}function Uu(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!La(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Lf(e,t,i,r,o)):(e=ti(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Gr,n(l,r)&&e.ref===t.ref)return Et(e,t,o)}return t.flags|=1,e=Xt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Lf(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Gr(i,r)&&e.ref===t.ref)if(Ce=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Ce=!0);else return t.lanes=e.lanes,Et(e,t,o)}return ks(e,t,n,r,o)}function Nf(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(Hn,Te),Te|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,B(Hn,Te),Te|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,B(Hn,Te),Te|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,B(Hn,Te),Te|=r;return ye(e,t,o,n),t.child}function Rf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ks(e,t,n,r,o){var i=$e(n)?bn:ve.current;return i=er(t,i),Xn(t,o),n=_a(e,t,n,r,i,o),r=ka(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Et(e,t,o)):(Q&&r&&ua(t),t.flags|=1,ye(e,t,n,o),t.child)}function Wu(e,t,n,r,o){if($e(n)){var i=!0;hi(t)}else i=!1;if(Xn(t,o),t.stateNode===null)Zo(e,t),sf(t,n,r),bs(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var a=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ye(u):(u=$e(n)?bn:ve.current,u=er(t,u));var p=n.getDerivedStateFromProps,f=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function";f||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||a!==u)&&Ou(t,l,r,u),Rt=!1;var g=t.memoizedState;l.state=g,wi(t,r,l,o),a=t.memoizedState,s!==r||g!==a||Ee.current||Rt?(typeof p=="function"&&(ws(t,n,p,r),a=t.memoizedState),(s=Rt||Mu(t,n,s,r,g,a,u))?(f||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),l.props=r,l.state=a,l.context=u,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,of(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:tt(t.type,s),l.props=u,f=t.pendingProps,g=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ye(a):(a=$e(n)?bn:ve.current,a=er(t,a));var m=n.getDerivedStateFromProps;(p=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==f||g!==a)&&Ou(t,l,r,a),Rt=!1,g=t.memoizedState,l.state=g,wi(t,r,l,o);var w=t.memoizedState;s!==f||g!==w||Ee.current||Rt?(typeof m=="function"&&(ws(t,n,m,r),w=t.memoizedState),(u=Rt||Mu(t,n,u,r,g,w,a)||!1)?(p||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,w,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,w,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),l.props=r,l.state=w,l.context=a,r=u):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return xs(e,t,n,r,i,o)}function xs(e,t,n,r,o,i){Rf(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&zu(t,n,!1),Et(e,t,i);r=t.stateNode,O0.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=nr(t,e.child,null,i),t.child=nr(t,null,s,i)):ye(e,t,s,i),t.memoizedState=r.state,o&&zu(t,n,!0),t.child}function Mf(e){var t=e.stateNode;t.pendingContext?Pu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Pu(e,t.context,!1),va(e,t.containerInfo)}function Qu(e,t,n,r,o){return tr(),da(o),t.flags|=256,ye(e,t,n,r),t.child}var Ss={dehydrated:null,treeContext:null,retryLane:0};function Cs(e){return{baseLanes:e,cachePool:null,transitions:null}}function Of(e,t,n){var r=t.pendingProps,o=K.current,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),B(K,o&1),e===null)return vs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Ui(l,r,0,null),e=wn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Cs(n),t.memoizedState=Ss,e):Ca(t,l));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return D0(e,t,l,r,s,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,s=o.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Xt(o,a),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=Xt(s,i):(i=wn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Cs(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Ss,r}return i=e.child,e=i.sibling,r=Xt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ca(e,t){return t=Ui({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Mo(e,t,n,r){return r!==null&&da(r),nr(t,e.child,null,n),e=Ca(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function D0(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=kl(Error(x(422))),Mo(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Ui({mode:"visible",children:r.children},o,0,null),i=wn(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&nr(t,e.child,null,l),t.child.memoizedState=Cs(l),t.memoizedState=Ss,i);if(!(t.mode&1))return Mo(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(x(419)),r=kl(i,r,void 0),Mo(e,t,l,r)}if(s=(l&e.childLanes)!==0,Ce||s){if(r=se,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Ct(e,o),it(r,e,o,-1))}return Ta(),r=kl(Error(x(421))),Mo(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=X0.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Ne=Qt(o.nextSibling),Re=t,Q=!0,rt=null,e!==null&&(Ue[We++]=wt,Ue[We++]=bt,Ue[We++]=_n,wt=e.id,bt=e.overflow,_n=t),t=Ca(t,r.children),t.flags|=4096,t)}function Ku(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ys(e.return,t,n)}function xl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Df(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(ye(e,t,r.children,n),r=K.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ku(e,n,t);else if(e.tag===19)Ku(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(B(K,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&bi(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),xl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&bi(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}xl(t,!0,n,null,i);break;case"together":xl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Zo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Et(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),xn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(x(153));if(t.child!==null){for(e=t.child,n=Xt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Xt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function I0(e,t,n){switch(t.tag){case 3:Mf(t),tr();break;case 5:cf(t);break;case 1:$e(t.type)&&hi(t);break;case 4:va(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;B(vi,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(B(K,K.current&1),t.flags|=128,null):n&t.child.childLanes?Of(e,t,n):(B(K,K.current&1),e=Et(e,t,n),e!==null?e.sibling:null);B(K,K.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Df(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),B(K,K.current),r)break;return null;case 22:case 23:return t.lanes=0,Nf(e,t,n)}return Et(e,t,n)}var If,Es,Ff,jf;If=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Es=function(){};Ff=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,gn(pt.current);var i=null;switch(n){case"input":o=Gl(e,o),r=Gl(e,r),i=[];break;case"select":o=Y({},o,{value:void 0}),r=Y({},r,{value:void 0}),i=[];break;case"textarea":o=ql(e,o),r=ql(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=fi)}Jl(n,r);var l;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var s=o[u];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Vr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var a=r[u];if(s=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&a!==s&&(a!=null||s!=null))if(u==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(i||(i=[]),i.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(i=i||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Vr.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&H("scroll",e),i||s===a||(i=[])):(i=i||[]).push(u,a))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};jf=function(e,t,n,r){n!==r&&(t.flags|=4)};function br(e,t){if(!Q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ge(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function F0(e,t,n){var r=t.pendingProps;switch(ca(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ge(t),null;case 1:return $e(t.type)&&pi(),ge(t),null;case 3:return r=t.stateNode,rr(),U(Ee),U(ve),wa(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(No(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,rt!==null&&(Rs(rt),rt=null))),Es(e,t),ge(t),null;case 5:ya(t);var o=gn(Jr.current);if(n=t.type,e!==null&&t.stateNode!=null)Ff(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(x(166));return ge(t),null}if(e=gn(pt.current),No(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[dt]=t,r[qr]=i,e=(t.mode&1)!==0,n){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(o=0;o<zr.length;o++)H(zr[o],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":nu(r,i),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},H("invalid",r);break;case"textarea":ou(r,i),H("invalid",r)}Jl(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Lo(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Lo(r.textContent,s,e),o=["children",""+s]):Vr.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&H("scroll",r)}switch(n){case"input":So(r),ru(r,i,!0);break;case"textarea":So(r),iu(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=fi)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=fd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[dt]=t,e[qr]=r,If(e,t,!1,!1),t.stateNode=e;e:{switch(l=es(n,r),n){case"dialog":H("cancel",e),H("close",e),o=r;break;case"iframe":case"object":case"embed":H("load",e),o=r;break;case"video":case"audio":for(o=0;o<zr.length;o++)H(zr[o],e);o=r;break;case"source":H("error",e),o=r;break;case"img":case"image":case"link":H("error",e),H("load",e),o=r;break;case"details":H("toggle",e),o=r;break;case"input":nu(e,r),o=Gl(e,r),H("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Y({},r,{value:void 0}),H("invalid",e);break;case"textarea":ou(e,r),o=ql(e,r),H("invalid",e);break;default:o=r}Jl(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var a=s[i];i==="style"?gd(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&pd(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Br(e,a):typeof a=="number"&&Br(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Vr.hasOwnProperty(i)?a!=null&&i==="onScroll"&&H("scroll",e):a!=null&&Ys(e,i,a,l))}switch(n){case"input":So(e),ru(e,r,!1);break;case"textarea":So(e),iu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+qt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Qn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Qn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=fi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ge(t),null;case 6:if(e&&t.stateNode!=null)jf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(x(166));if(n=gn(Jr.current),gn(pt.current),No(t)){if(r=t.stateNode,n=t.memoizedProps,r[dt]=t,(i=r.nodeValue!==n)&&(e=Re,e!==null))switch(e.tag){case 3:Lo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Lo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[dt]=t,t.stateNode=r}return ge(t),null;case 13:if(U(K),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Q&&Ne!==null&&t.mode&1&&!(t.flags&128))nf(),tr(),t.flags|=98560,i=!1;else if(i=No(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(x(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(x(317));i[dt]=t}else tr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ge(t),i=!1}else rt!==null&&(Rs(rt),rt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||K.current&1?re===0&&(re=3):Ta())),t.updateQueue!==null&&(t.flags|=4),ge(t),null);case 4:return rr(),Es(e,t),e===null&&Yr(t.stateNode.containerInfo),ge(t),null;case 10:return ha(t.type._context),ge(t),null;case 17:return $e(t.type)&&pi(),ge(t),null;case 19:if(U(K),i=t.memoizedState,i===null)return ge(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)br(i,!1);else{if(re!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=bi(e),l!==null){for(t.flags|=128,br(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return B(K,K.current&1|2),t.child}e=e.sibling}i.tail!==null&&J()>ir&&(t.flags|=128,r=!0,br(i,!1),t.lanes=4194304)}else{if(!r)if(e=bi(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),br(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!Q)return ge(t),null}else 2*J()-i.renderingStartTime>ir&&n!==1073741824&&(t.flags|=128,r=!0,br(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=J(),t.sibling=null,n=K.current,B(K,r?n&1|2:n&1),t):(ge(t),null);case 22:case 23:return za(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Te&1073741824&&(ge(t),t.subtreeFlags&6&&(t.flags|=8192)):ge(t),null;case 24:return null;case 25:return null}throw Error(x(156,t.tag))}function j0(e,t){switch(ca(t),t.tag){case 1:return $e(t.type)&&pi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return rr(),U(Ee),U(ve),wa(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ya(t),null;case 13:if(U(K),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(x(340));tr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U(K),null;case 4:return rr(),null;case 10:return ha(t.type._context),null;case 22:case 23:return za(),null;case 24:return null;default:return null}}var Oo=!1,me=!1,V0=typeof WeakSet=="function"?WeakSet:Set,$=null;function Bn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){X(e,t,r)}else n.current=null}function $s(e,t,n){try{n()}catch(r){X(e,t,r)}}var Gu=!1;function B0(e,t){if(cs=ui,e=Hd(),aa(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,s=-1,a=-1,u=0,p=0,f=e,g=null;t:for(;;){for(var m;f!==n||o!==0&&f.nodeType!==3||(s=l+o),f!==i||r!==0&&f.nodeType!==3||(a=l+r),f.nodeType===3&&(l+=f.nodeValue.length),(m=f.firstChild)!==null;)g=f,f=m;for(;;){if(f===e)break t;if(g===n&&++u===o&&(s=l),g===i&&++p===r&&(a=l),(m=f.nextSibling)!==null)break;f=g,g=f.parentNode}f=m}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(ds={focusedElem:e,selectionRange:n},ui=!1,$=t;$!==null;)if(t=$,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$=e;else for(;$!==null;){t=$;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var b=w.memoizedProps,P=w.memoizedState,h=t.stateNode,c=h.getSnapshotBeforeUpdate(t.elementType===t.type?b:tt(t.type,b),P);h.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(v){X(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,$=e;break}$=t.return}return w=Gu,Gu=!1,w}function Dr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&$s(t,n,i)}o=o.next}while(o!==r)}}function Bi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function As(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Vf(e){var t=e.alternate;t!==null&&(e.alternate=null,Vf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[dt],delete t[qr],delete t[hs],delete t[S0],delete t[C0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Bf(e){return e.tag===5||e.tag===3||e.tag===4}function Yu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Bf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ps(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=fi));else if(r!==4&&(e=e.child,e!==null))for(Ps(e,t,n),e=e.sibling;e!==null;)Ps(e,t,n),e=e.sibling}function zs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(zs(e,t,n),e=e.sibling;e!==null;)zs(e,t,n),e=e.sibling}var ue=null,nt=!1;function Tt(e,t,n){for(n=n.child;n!==null;)Hf(e,t,n),n=n.sibling}function Hf(e,t,n){if(ft&&typeof ft.onCommitFiberUnmount=="function")try{ft.onCommitFiberUnmount(Ri,n)}catch{}switch(n.tag){case 5:me||Bn(n,t);case 6:var r=ue,o=nt;ue=null,Tt(e,t,n),ue=r,nt=o,ue!==null&&(nt?(e=ue,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ue.removeChild(n.stateNode));break;case 18:ue!==null&&(nt?(e=ue,n=n.stateNode,e.nodeType===8?ml(e.parentNode,n):e.nodeType===1&&ml(e,n),Qr(e)):ml(ue,n.stateNode));break;case 4:r=ue,o=nt,ue=n.stateNode.containerInfo,nt=!0,Tt(e,t,n),ue=r,nt=o;break;case 0:case 11:case 14:case 15:if(!me&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&$s(n,t,l),o=o.next}while(o!==r)}Tt(e,t,n);break;case 1:if(!me&&(Bn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){X(n,t,s)}Tt(e,t,n);break;case 21:Tt(e,t,n);break;case 22:n.mode&1?(me=(r=me)||n.memoizedState!==null,Tt(e,t,n),me=r):Tt(e,t,n);break;default:Tt(e,t,n)}}function Xu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new V0),t.forEach(function(r){var o=q0.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Je(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:ue=s.stateNode,nt=!1;break e;case 3:ue=s.stateNode.containerInfo,nt=!0;break e;case 4:ue=s.stateNode.containerInfo,nt=!0;break e}s=s.return}if(ue===null)throw Error(x(160));Hf(i,l,o),ue=null,nt=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(u){X(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Uf(t,e),t=t.sibling}function Uf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Je(t,e),ut(e),r&4){try{Dr(3,e,e.return),Bi(3,e)}catch(b){X(e,e.return,b)}try{Dr(5,e,e.return)}catch(b){X(e,e.return,b)}}break;case 1:Je(t,e),ut(e),r&512&&n!==null&&Bn(n,n.return);break;case 5:if(Je(t,e),ut(e),r&512&&n!==null&&Bn(n,n.return),e.flags&32){var o=e.stateNode;try{Br(o,"")}catch(b){X(e,e.return,b)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&cd(o,i),es(s,l);var u=es(s,i);for(l=0;l<a.length;l+=2){var p=a[l],f=a[l+1];p==="style"?gd(o,f):p==="dangerouslySetInnerHTML"?pd(o,f):p==="children"?Br(o,f):Ys(o,p,f,u)}switch(s){case"input":Yl(o,i);break;case"textarea":dd(o,i);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var m=i.value;m!=null?Qn(o,!!i.multiple,m,!1):g!==!!i.multiple&&(i.defaultValue!=null?Qn(o,!!i.multiple,i.defaultValue,!0):Qn(o,!!i.multiple,i.multiple?[]:"",!1))}o[qr]=i}catch(b){X(e,e.return,b)}}break;case 6:if(Je(t,e),ut(e),r&4){if(e.stateNode===null)throw Error(x(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(b){X(e,e.return,b)}}break;case 3:if(Je(t,e),ut(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Qr(t.containerInfo)}catch(b){X(e,e.return,b)}break;case 4:Je(t,e),ut(e);break;case 13:Je(t,e),ut(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Aa=J())),r&4&&Xu(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(me=(u=me)||p,Je(t,e),me=u):Je(t,e),ut(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for($=e,p=e.child;p!==null;){for(f=$=p;$!==null;){switch(g=$,m=g.child,g.tag){case 0:case 11:case 14:case 15:Dr(4,g,g.return);break;case 1:Bn(g,g.return);var w=g.stateNode;if(typeof w.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(b){X(r,n,b)}}break;case 5:Bn(g,g.return);break;case 22:if(g.memoizedState!==null){Zu(f);continue}}m!==null?(m.return=g,$=m):Zu(f)}p=p.sibling}e:for(p=null,f=e;;){if(f.tag===5){if(p===null){p=f;try{o=f.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=f.stateNode,a=f.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=hd("display",l))}catch(b){X(e,e.return,b)}}}else if(f.tag===6){if(p===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(b){X(e,e.return,b)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;p===f&&(p=null),f=f.return}p===f&&(p=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Je(t,e),ut(e),r&4&&Xu(e);break;case 21:break;default:Je(t,e),ut(e)}}function ut(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Bf(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Br(o,""),r.flags&=-33);var i=Yu(e);zs(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,s=Yu(e);Ps(e,s,l);break;default:throw Error(x(161))}}catch(a){X(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function H0(e,t,n){$=e,Wf(e)}function Wf(e,t,n){for(var r=(e.mode&1)!==0;$!==null;){var o=$,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||Oo;if(!l){var s=o.alternate,a=s!==null&&s.memoizedState!==null||me;s=Oo;var u=me;if(Oo=l,(me=a)&&!u)for($=o;$!==null;)l=$,a=l.child,l.tag===22&&l.memoizedState!==null?Ju(o):a!==null?(a.return=l,$=a):Ju(o);for(;i!==null;)$=i,Wf(i),i=i.sibling;$=o,Oo=s,me=u}qu(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,$=i):qu(e)}}function qu(e){for(;$!==null;){var t=$;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:me||Bi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!me)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:tt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Ru(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ru(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var f=p.dehydrated;f!==null&&Qr(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}me||t.flags&512&&As(t)}catch(g){X(t,t.return,g)}}if(t===e){$=null;break}if(n=t.sibling,n!==null){n.return=t.return,$=n;break}$=t.return}}function Zu(e){for(;$!==null;){var t=$;if(t===e){$=null;break}var n=t.sibling;if(n!==null){n.return=t.return,$=n;break}$=t.return}}function Ju(e){for(;$!==null;){var t=$;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Bi(4,t)}catch(a){X(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){X(t,o,a)}}var i=t.return;try{As(t)}catch(a){X(t,i,a)}break;case 5:var l=t.return;try{As(t)}catch(a){X(t,l,a)}}}catch(a){X(t,t.return,a)}if(t===e){$=null;break}var s=t.sibling;if(s!==null){s.return=t.return,$=s;break}$=t.return}}var U0=Math.ceil,xi=At.ReactCurrentDispatcher,Ea=At.ReactCurrentOwner,Ge=At.ReactCurrentBatchConfig,D=0,se=null,te=null,ce=0,Te=0,Hn=on(0),re=0,ro=null,xn=0,Hi=0,$a=0,Ir=null,Se=null,Aa=0,ir=1/0,vt=null,Si=!1,Ts=null,Gt=null,Do=!1,jt=null,Ci=0,Fr=0,Ls=null,Jo=-1,ei=0;function we(){return D&6?J():Jo!==-1?Jo:Jo=J()}function Yt(e){return e.mode&1?D&2&&ce!==0?ce&-ce:$0.transition!==null?(ei===0&&(ei=$d()),ei):(e=F,e!==0||(e=window.event,e=e===void 0?16:Rd(e.type)),e):1}function it(e,t,n,r){if(50<Fr)throw Fr=0,Ls=null,Error(x(185));co(e,n,r),(!(D&2)||e!==se)&&(e===se&&(!(D&2)&&(Hi|=n),re===4&&Dt(e,ce)),Ae(e,r),n===1&&D===0&&!(t.mode&1)&&(ir=J()+500,Fi&&ln()))}function Ae(e,t){var n=e.callbackNode;$h(e,t);var r=ai(e,e===se?ce:0);if(r===0)n!==null&&au(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&au(n),t===1)e.tag===0?E0(ec.bind(null,e)):Jd(ec.bind(null,e)),k0(function(){!(D&6)&&ln()}),n=null;else{switch(Ad(r)){case 1:n=ea;break;case 4:n=Cd;break;case 16:n=si;break;case 536870912:n=Ed;break;default:n=si}n=Jf(n,Qf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Qf(e,t){if(Jo=-1,ei=0,D&6)throw Error(x(327));var n=e.callbackNode;if(qn()&&e.callbackNode!==n)return null;var r=ai(e,e===se?ce:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ei(e,r);else{t=r;var o=D;D|=2;var i=Gf();(se!==e||ce!==t)&&(vt=null,ir=J()+500,yn(e,t));do try{K0();break}catch(s){Kf(e,s)}while(1);pa(),xi.current=i,D=o,te!==null?t=0:(se=null,ce=0,t=re)}if(t!==0){if(t===2&&(o=is(e),o!==0&&(r=o,t=Ns(e,o))),t===1)throw n=ro,yn(e,0),Dt(e,r),Ae(e,J()),n;if(t===6)Dt(e,r);else{if(o=e.current.alternate,!(r&30)&&!W0(o)&&(t=Ei(e,r),t===2&&(i=is(e),i!==0&&(r=i,t=Ns(e,i))),t===1))throw n=ro,yn(e,0),Dt(e,r),Ae(e,J()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(x(345));case 2:dn(e,Se,vt);break;case 3:if(Dt(e,r),(r&130023424)===r&&(t=Aa+500-J(),10<t)){if(ai(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){we(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ps(dn.bind(null,e,Se,vt),t);break}dn(e,Se,vt);break;case 4:if(Dt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-ot(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*U0(r/1960))-r,10<r){e.timeoutHandle=ps(dn.bind(null,e,Se,vt),r);break}dn(e,Se,vt);break;case 5:dn(e,Se,vt);break;default:throw Error(x(329))}}}return Ae(e,J()),e.callbackNode===n?Qf.bind(null,e):null}function Ns(e,t){var n=Ir;return e.current.memoizedState.isDehydrated&&(yn(e,t).flags|=256),e=Ei(e,t),e!==2&&(t=Se,Se=n,t!==null&&Rs(t)),e}function Rs(e){Se===null?Se=e:Se.push.apply(Se,e)}function W0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!lt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Dt(e,t){for(t&=~$a,t&=~Hi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ot(t),r=1<<n;e[n]=-1,t&=~r}}function ec(e){if(D&6)throw Error(x(327));qn();var t=ai(e,0);if(!(t&1))return Ae(e,J()),null;var n=Ei(e,t);if(e.tag!==0&&n===2){var r=is(e);r!==0&&(t=r,n=Ns(e,r))}if(n===1)throw n=ro,yn(e,0),Dt(e,t),Ae(e,J()),n;if(n===6)throw Error(x(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,dn(e,Se,vt),Ae(e,J()),null}function Pa(e,t){var n=D;D|=1;try{return e(t)}finally{D=n,D===0&&(ir=J()+500,Fi&&ln())}}function Sn(e){jt!==null&&jt.tag===0&&!(D&6)&&qn();var t=D;D|=1;var n=Ge.transition,r=F;try{if(Ge.transition=null,F=1,e)return e()}finally{F=r,Ge.transition=n,D=t,!(D&6)&&ln()}}function za(){Te=Hn.current,U(Hn)}function yn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,_0(n)),te!==null)for(n=te.return;n!==null;){var r=n;switch(ca(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&pi();break;case 3:rr(),U(Ee),U(ve),wa();break;case 5:ya(r);break;case 4:rr();break;case 13:U(K);break;case 19:U(K);break;case 10:ha(r.type._context);break;case 22:case 23:za()}n=n.return}if(se=e,te=e=Xt(e.current,null),ce=Te=t,re=0,ro=null,$a=Hi=xn=0,Se=Ir=null,hn!==null){for(t=0;t<hn.length;t++)if(n=hn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}hn=null}return e}function Kf(e,t){do{var n=te;try{if(pa(),Xo.current=ki,_i){for(var r=G.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}_i=!1}if(kn=0,le=ne=G=null,Or=!1,eo=0,Ea.current=null,n===null||n.return===null){re=1,ro=t,te=null;break}e:{var i=e,l=n.return,s=n,a=t;if(t=ce,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,p=s,f=p.tag;if(!(p.mode&1)&&(f===0||f===11||f===15)){var g=p.alternate;g?(p.updateQueue=g.updateQueue,p.memoizedState=g.memoizedState,p.lanes=g.lanes):(p.updateQueue=null,p.memoizedState=null)}var m=Vu(l);if(m!==null){m.flags&=-257,Bu(m,l,s,i,t),m.mode&1&&ju(i,u,t),t=m,a=u;var w=t.updateQueue;if(w===null){var b=new Set;b.add(a),t.updateQueue=b}else w.add(a);break e}else{if(!(t&1)){ju(i,u,t),Ta();break e}a=Error(x(426))}}else if(Q&&s.mode&1){var P=Vu(l);if(P!==null){!(P.flags&65536)&&(P.flags|=256),Bu(P,l,s,i,t),da(or(a,s));break e}}i=a=or(a,s),re!==4&&(re=2),Ir===null?Ir=[i]:Ir.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var h=zf(i,a,t);Nu(i,h);break e;case 1:s=a;var c=i.type,d=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Gt===null||!Gt.has(d)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=Tf(i,s,t);Nu(i,v);break e}}i=i.return}while(i!==null)}Xf(n)}catch(_){t=_,te===n&&n!==null&&(te=n=n.return);continue}break}while(1)}function Gf(){var e=xi.current;return xi.current=ki,e===null?ki:e}function Ta(){(re===0||re===3||re===2)&&(re=4),se===null||!(xn&268435455)&&!(Hi&268435455)||Dt(se,ce)}function Ei(e,t){var n=D;D|=2;var r=Gf();(se!==e||ce!==t)&&(vt=null,yn(e,t));do try{Q0();break}catch(o){Kf(e,o)}while(1);if(pa(),D=n,xi.current=r,te!==null)throw Error(x(261));return se=null,ce=0,re}function Q0(){for(;te!==null;)Yf(te)}function K0(){for(;te!==null&&!yh();)Yf(te)}function Yf(e){var t=Zf(e.alternate,e,Te);e.memoizedProps=e.pendingProps,t===null?Xf(e):te=t,Ea.current=null}function Xf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=j0(n,t),n!==null){n.flags&=32767,te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{re=6,te=null;return}}else if(n=F0(n,t,Te),n!==null){te=n;return}if(t=t.sibling,t!==null){te=t;return}te=t=e}while(t!==null);re===0&&(re=5)}function dn(e,t,n){var r=F,o=Ge.transition;try{Ge.transition=null,F=1,G0(e,t,n,r)}finally{Ge.transition=o,F=r}return null}function G0(e,t,n,r){do qn();while(jt!==null);if(D&6)throw Error(x(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(x(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Ah(e,i),e===se&&(te=se=null,ce=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Do||(Do=!0,Jf(si,function(){return qn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ge.transition,Ge.transition=null;var l=F;F=1;var s=D;D|=4,Ea.current=null,B0(e,n),Uf(n,e),h0(ds),ui=!!cs,ds=cs=null,e.current=n,H0(n),wh(),D=s,F=l,Ge.transition=i}else e.current=n;if(Do&&(Do=!1,jt=e,Ci=o),i=e.pendingLanes,i===0&&(Gt=null),kh(n.stateNode),Ae(e,J()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Si)throw Si=!1,e=Ts,Ts=null,e;return Ci&1&&e.tag!==0&&qn(),i=e.pendingLanes,i&1?e===Ls?Fr++:(Fr=0,Ls=e):Fr=0,ln(),null}function qn(){if(jt!==null){var e=Ad(Ci),t=Ge.transition,n=F;try{if(Ge.transition=null,F=16>e?16:e,jt===null)var r=!1;else{if(e=jt,jt=null,Ci=0,D&6)throw Error(x(331));var o=D;for(D|=4,$=e.current;$!==null;){var i=$,l=i.child;if($.flags&16){var s=i.deletions;if(s!==null){for(var a=0;a<s.length;a++){var u=s[a];for($=u;$!==null;){var p=$;switch(p.tag){case 0:case 11:case 15:Dr(8,p,i)}var f=p.child;if(f!==null)f.return=p,$=f;else for(;$!==null;){p=$;var g=p.sibling,m=p.return;if(Vf(p),p===u){$=null;break}if(g!==null){g.return=m,$=g;break}$=m}}}var w=i.alternate;if(w!==null){var b=w.child;if(b!==null){w.child=null;do{var P=b.sibling;b.sibling=null,b=P}while(b!==null)}}$=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,$=l;else e:for(;$!==null;){if(i=$,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Dr(9,i,i.return)}var h=i.sibling;if(h!==null){h.return=i.return,$=h;break e}$=i.return}}var c=e.current;for($=c;$!==null;){l=$;var d=l.child;if(l.subtreeFlags&2064&&d!==null)d.return=l,$=d;else e:for(l=c;$!==null;){if(s=$,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Bi(9,s)}}catch(_){X(s,s.return,_)}if(s===l){$=null;break e}var v=s.sibling;if(v!==null){v.return=s.return,$=v;break e}$=s.return}}if(D=o,ln(),ft&&typeof ft.onPostCommitFiberRoot=="function")try{ft.onPostCommitFiberRoot(Ri,e)}catch{}r=!0}return r}finally{F=n,Ge.transition=t}}return!1}function tc(e,t,n){t=or(n,t),t=zf(e,t,1),e=Kt(e,t,1),t=we(),e!==null&&(co(e,1,t),Ae(e,t))}function X(e,t,n){if(e.tag===3)tc(e,e,n);else for(;t!==null;){if(t.tag===3){tc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Gt===null||!Gt.has(r))){e=or(n,e),e=Tf(t,e,1),t=Kt(t,e,1),e=we(),t!==null&&(co(t,1,e),Ae(t,e));break}}t=t.return}}function Y0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=we(),e.pingedLanes|=e.suspendedLanes&n,se===e&&(ce&n)===n&&(re===4||re===3&&(ce&130023424)===ce&&500>J()-Aa?yn(e,0):$a|=n),Ae(e,t)}function qf(e,t){t===0&&(e.mode&1?(t=$o,$o<<=1,!($o&130023424)&&($o=4194304)):t=1);var n=we();e=Ct(e,t),e!==null&&(co(e,t,n),Ae(e,n))}function X0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qf(e,n)}function q0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(t),qf(e,n)}var Zf;Zf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ee.current)Ce=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ce=!1,I0(e,t,n);Ce=!!(e.flags&131072)}else Ce=!1,Q&&t.flags&1048576&&ef(t,mi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Zo(e,t),e=t.pendingProps;var o=er(t,ve.current);Xn(t,n),o=_a(null,t,r,e,o,n);var i=ka();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,$e(r)?(i=!0,hi(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,ma(t),o.updater=ji,t.stateNode=o,o._reactInternals=t,bs(t,r,e,n),t=xs(null,t,r,!0,i,n)):(t.tag=0,Q&&i&&ua(t),ye(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Zo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=J0(r),e=tt(r,e),o){case 0:t=ks(null,t,r,e,n);break e;case 1:t=Wu(null,t,r,e,n);break e;case 11:t=Hu(null,t,r,e,n);break e;case 14:t=Uu(null,t,r,tt(r.type,e),n);break e}throw Error(x(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:tt(r,o),ks(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:tt(r,o),Wu(e,t,r,o,n);case 3:e:{if(Mf(t),e===null)throw Error(x(387));r=t.pendingProps,i=t.memoizedState,o=i.element,of(e,t),wi(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=or(Error(x(423)),t),t=Qu(e,t,r,n,o);break e}else if(r!==o){o=or(Error(x(424)),t),t=Qu(e,t,r,n,o);break e}else for(Ne=Qt(t.stateNode.containerInfo.firstChild),Re=t,Q=!0,rt=null,n=uf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(tr(),r===o){t=Et(e,t,n);break e}ye(e,t,r,n)}t=t.child}return t;case 5:return cf(t),e===null&&vs(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,fs(r,o)?l=null:i!==null&&fs(r,i)&&(t.flags|=32),Rf(e,t),ye(e,t,l,n),t.child;case 6:return e===null&&vs(t),null;case 13:return Of(e,t,n);case 4:return va(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=nr(t,null,r,n):ye(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:tt(r,o),Hu(e,t,r,o,n);case 7:return ye(e,t,t.pendingProps,n),t.child;case 8:return ye(e,t,t.pendingProps.children,n),t.child;case 12:return ye(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,B(vi,r._currentValue),r._currentValue=l,i!==null)if(lt(i.value,l)){if(i.children===o.children&&!Ee.current){t=Et(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=_t(-1,n&-n),a.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?a.next=a:(a.next=p.next,p.next=a),u.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),ys(i.return,n,t),s.lanes|=n;break}a=a.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(x(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),ys(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}ye(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Xn(t,n),o=Ye(o),r=r(o),t.flags|=1,ye(e,t,r,n),t.child;case 14:return r=t.type,o=tt(r,t.pendingProps),o=tt(r.type,o),Uu(e,t,r,o,n);case 15:return Lf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:tt(r,o),Zo(e,t),t.tag=1,$e(r)?(e=!0,hi(t)):e=!1,Xn(t,n),sf(t,r,o),bs(t,r,o,n),xs(null,t,r,!0,e,n);case 19:return Df(e,t,n);case 22:return Nf(e,t,n)}throw Error(x(156,t.tag))};function Jf(e,t){return Sd(e,t)}function Z0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qe(e,t,n,r){return new Z0(e,t,n,r)}function La(e){return e=e.prototype,!(!e||!e.isReactComponent)}function J0(e){if(typeof e=="function")return La(e)?1:0;if(e!=null){if(e=e.$$typeof,e===qs)return 11;if(e===Zs)return 14}return 2}function Xt(e,t){var n=e.alternate;return n===null?(n=Qe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ti(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")La(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Nn:return wn(n.children,o,i,t);case Xs:l=8,o|=8;break;case Ul:return e=Qe(12,n,t,o|2),e.elementType=Ul,e.lanes=i,e;case Wl:return e=Qe(13,n,t,o),e.elementType=Wl,e.lanes=i,e;case Ql:return e=Qe(19,n,t,o),e.elementType=Ql,e.lanes=i,e;case sd:return Ui(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case id:l=10;break e;case ld:l=9;break e;case qs:l=11;break e;case Zs:l=14;break e;case Nt:l=16,r=null;break e}throw Error(x(130,e==null?e:typeof e,""))}return t=Qe(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function wn(e,t,n,r){return e=Qe(7,e,r,t),e.lanes=n,e}function Ui(e,t,n,r){return e=Qe(22,e,r,t),e.elementType=sd,e.lanes=n,e.stateNode={isHidden:!1},e}function Sl(e,t,n){return e=Qe(6,e,null,t),e.lanes=n,e}function Cl(e,t,n){return t=Qe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function eg(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=il(0),this.expirationTimes=il(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=il(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Na(e,t,n,r,o,i,l,s,a){return e=new eg(e,t,n,s,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Qe(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ma(i),e}function tg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ln,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ep(e){if(!e)return Zt;e=e._reactInternals;e:{if(An(e)!==e||e.tag!==1)throw Error(x(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if($e(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(x(171))}if(e.tag===1){var n=e.type;if($e(n))return Zd(e,n,t)}return t}function tp(e,t,n,r,o,i,l,s,a){return e=Na(n,r,!0,e,o,i,l,s,a),e.context=ep(null),n=e.current,r=we(),o=Yt(n),i=_t(r,o),i.callback=t??null,Kt(n,i,o),e.current.lanes=o,co(e,o,r),Ae(e,r),e}function Wi(e,t,n,r){var o=t.current,i=we(),l=Yt(o);return n=ep(n),t.context===null?t.context=n:t.pendingContext=n,t=_t(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Kt(o,t,l),e!==null&&(it(e,o,l,i),Yo(e,o,l)),l}function $i(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function nc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ra(e,t){nc(e,t),(e=e.alternate)&&nc(e,t)}function ng(){return null}var np=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ma(e){this._internalRoot=e}Qi.prototype.render=Ma.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(x(409));Wi(e,t,null,null)};Qi.prototype.unmount=Ma.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Sn(function(){Wi(null,e,null,null)}),t[St]=null}};function Qi(e){this._internalRoot=e}Qi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Td();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ot.length&&t!==0&&t<Ot[n].priority;n++);Ot.splice(n,0,e),n===0&&Nd(e)}};function Oa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ki(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function rc(){}function rg(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=$i(l);i.call(u)}}var l=tp(t,r,e,0,null,!1,!1,"",rc);return e._reactRootContainer=l,e[St]=l.current,Yr(e.nodeType===8?e.parentNode:e),Sn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var u=$i(a);s.call(u)}}var a=Na(e,0,!1,null,null,!1,!1,"",rc);return e._reactRootContainer=a,e[St]=a.current,Yr(e.nodeType===8?e.parentNode:e),Sn(function(){Wi(t,a,n,r)}),a}function Gi(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var s=o;o=function(){var a=$i(l);s.call(a)}}Wi(t,l,e,o)}else l=rg(n,t,e,o,r);return $i(l)}Pd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Pr(t.pendingLanes);n!==0&&(ta(t,n|1),Ae(t,J()),!(D&6)&&(ir=J()+500,ln()))}break;case 13:Sn(function(){var r=Ct(e,1);if(r!==null){var o=we();it(r,e,1,o)}}),Ra(e,1)}};na=function(e){if(e.tag===13){var t=Ct(e,134217728);if(t!==null){var n=we();it(t,e,134217728,n)}Ra(e,134217728)}};zd=function(e){if(e.tag===13){var t=Yt(e),n=Ct(e,t);if(n!==null){var r=we();it(n,e,t,r)}Ra(e,t)}};Td=function(){return F};Ld=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};ns=function(e,t,n){switch(t){case"input":if(Yl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Ii(r);if(!o)throw Error(x(90));ud(r),Yl(r,o)}}}break;case"textarea":dd(e,n);break;case"select":t=n.value,t!=null&&Qn(e,!!n.multiple,t,!1)}};yd=Pa;wd=Sn;var og={usingClientEntryPoint:!1,Events:[po,Dn,Ii,md,vd,Pa]},_r={findFiberByHostInstance:pn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},ig={bundleType:_r.bundleType,version:_r.version,rendererPackageName:_r.rendererPackageName,rendererConfig:_r.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:At.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=kd(e),e===null?null:e.stateNode},findFiberByHostInstance:_r.findFiberByHostInstance||ng,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Io=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Io.isDisabled&&Io.supportsFiber)try{Ri=Io.inject(ig),ft=Io}catch{}}De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=og;De.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Oa(t))throw Error(x(200));return tg(e,t,null,n)};De.createRoot=function(e,t){if(!Oa(e))throw Error(x(299));var n=!1,r="",o=np;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Na(e,1,!1,null,null,n,!1,r,o),e[St]=t.current,Yr(e.nodeType===8?e.parentNode:e),new Ma(t)};De.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(x(188)):(e=Object.keys(e).join(","),Error(x(268,e)));return e=kd(t),e=e===null?null:e.stateNode,e};De.flushSync=function(e){return Sn(e)};De.hydrate=function(e,t,n){if(!Ki(t))throw Error(x(200));return Gi(null,e,t,!0,n)};De.hydrateRoot=function(e,t,n){if(!Oa(e))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=np;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=tp(t,null,e,1,n??null,o,!1,i,l),e[St]=t.current,Yr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Qi(t)};De.render=function(e,t,n){if(!Ki(t))throw Error(x(200));return Gi(null,e,t,!1,n)};De.unmountComponentAtNode=function(e){if(!Ki(e))throw Error(x(40));return e._reactRootContainer?(Sn(function(){Gi(null,null,e,!1,function(){e._reactRootContainer=null,e[St]=null})}),!0):!1};De.unstable_batchedUpdates=Pa;De.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ki(n))throw Error(x(200));if(e==null||e._reactInternals===void 0)throw Error(x(38));return Gi(e,t,n,!1,r)};De.version="18.2.0-next-9e3b772b8-20220608";function rp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rp)}catch(e){console.error(e)}}rp(),ed.exports=De;var lg=ed.exports,oc=lg;Bl.createRoot=oc.createRoot,Bl.hydrateRoot=oc.hydrateRoot;function sg(e){const n=["default","cwy","radar_dbz_cwb","preci_cwb","OceanLakeLandSnow"].map((r,o)=>z.jsx("option",{children:r},o));return z.jsxs(z.Fragment,{children:[z.jsx("label",{children:"Template: "}),z.jsx("select",{title:"colormaps",onChange:r=>e.changeMap(r),style:{maxWidth:"80px"},children:n})]})}function ag({coloroutrgb:e}){const t=ug(e);return z.jsxs(z.Fragment,{children:[z.jsx("button",{popovertarget:"my-popover",className:"button-85",children:z.jsx("img",{src:"https://matplotlib.org/stable/_static/logo_dark.svg",width:"100px"})}),z.jsx("div",{popover:"auto",id:"my-popover",children:z.jsx("textarea",{value:t,style:{width:"500px",height:"200px"},readOnly:!0})})]})}function ug(e){let t="";return t+=`def manual_cmap():
`,t+=`    import numpy as np
`,t+=`    from matplotlib.colors import LinearSegmentedColormap
`,t+=`    colors = [
`,e.map(n=>{t+="        ["+n[0]+","+n[1]+","+n[2]+`],
`}),t+=`    ]
`,t+=`    return LinearSegmentedColormap.from_list("manual_cmap",np.array(colors)/255)
`,t+="# cmap = manual_cmap()",t}const cg=["RGB","Hex"];function dg({coloroutrgb:e}){const[t,n]=Bt.useState("RGB");function r(i){n(i.target.value)}let o="";return t==="RGB"&&e.map(i=>{o+=i[0]+"	"+i[1]+"	"+i[2]+`
`}),t==="Hex"&&e.map(i=>{o+=fg(i)+`
`}),z.jsxs("div",{className:"txtarea",children:[z.jsx("div",{children:z.jsx(ag,{coloroutrgb:e})}),z.jsxs("div",{children:[z.jsx("label",{children:"output type: "}),z.jsx("select",{title:"colortype",onChange:i=>r(i),children:cg.map((i,l)=>z.jsx("option",{children:i},l))})]}),z.jsx("textarea",{value:o,rows:e.length+1,cols:25,readOnly:!0,style:{resize:"none"}})]})}function fg(e){let t=(+e[0]).toString(16),n=(+e[1]).toString(16),r=(+e[2]).toString(16);return t.length==1&&(t="0"+t),n.length==1&&(n="0"+n),r.length==1&&(r="0"+r),"#"+t+n+r}/**
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
 */var Al;const Pi=window,lr=Pi.trustedTypes,uc=lr?lr.createPolicy("lit-html",{createHTML:e=>e}):void 0,Os="$lit$",It=`lit$${(Math.random()+"").slice(9)}$`,lp="?"+It,mg=`<${lp}>`,Cn=document,io=()=>Cn.createComment(""),lo=e=>e===null||typeof e!="object"&&typeof e!="function",sp=Array.isArray,vg=e=>sp(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Pl=`[ 	
\f\r]`,kr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,cc=/-->/g,dc=/>/g,un=RegExp(`>|${Pl}(?:([^\\s"'>=/]+)(${Pl}*=${Pl}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),fc=/'/g,pc=/"/g,ap=/^(?:script|style|textarea|title)$/i,yg=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),Z=yg(1),Ke=Symbol.for("lit-noChange"),ee=Symbol.for("lit-nothing"),hc=new WeakMap,mn=Cn.createTreeWalker(Cn,129,null,!1);function up(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return uc!==void 0?uc.createHTML(t):t}const wg=(e,t)=>{const n=e.length-1,r=[];let o,i=t===2?"<svg>":"",l=kr;for(let s=0;s<n;s++){const a=e[s];let u,p,f=-1,g=0;for(;g<a.length&&(l.lastIndex=g,p=l.exec(a),p!==null);)g=l.lastIndex,l===kr?p[1]==="!--"?l=cc:p[1]!==void 0?l=dc:p[2]!==void 0?(ap.test(p[2])&&(o=RegExp("</"+p[2],"g")),l=un):p[3]!==void 0&&(l=un):l===un?p[0]===">"?(l=o??kr,f=-1):p[1]===void 0?f=-2:(f=l.lastIndex-p[2].length,u=p[1],l=p[3]===void 0?un:p[3]==='"'?pc:fc):l===pc||l===fc?l=un:l===cc||l===dc?l=kr:(l=un,o=void 0);const m=l===un&&e[s+1].startsWith("/>")?" ":"";i+=l===kr?a+mg:f>=0?(r.push(u),a.slice(0,f)+Os+a.slice(f)+It+m):a+It+(f===-2?(r.push(void 0),s):m)}return[up(e,i+(e[n]||"<?>")+(t===2?"</svg>":"")),r]};class so{constructor({strings:t,_$litType$:n},r){let o;this.parts=[];let i=0,l=0;const s=t.length-1,a=this.parts,[u,p]=wg(t,n);if(this.el=so.createElement(u,r),mn.currentNode=this.el.content,n===2){const f=this.el.content,g=f.firstChild;g.remove(),f.append(...g.childNodes)}for(;(o=mn.nextNode())!==null&&a.length<s;){if(o.nodeType===1){if(o.hasAttributes()){const f=[];for(const g of o.getAttributeNames())if(g.endsWith(Os)||g.startsWith(It)){const m=p[l++];if(f.push(g),m!==void 0){const w=o.getAttribute(m.toLowerCase()+Os).split(It),b=/([.?@])?(.*)/.exec(m);a.push({type:1,index:i,name:b[2],strings:w,ctor:b[1]==="."?_g:b[1]==="?"?xg:b[1]==="@"?Sg:Yi})}else a.push({type:6,index:i})}for(const g of f)o.removeAttribute(g)}if(ap.test(o.tagName)){const f=o.textContent.split(It),g=f.length-1;if(g>0){o.textContent=lr?lr.emptyScript:"";for(let m=0;m<g;m++)o.append(f[m],io()),mn.nextNode(),a.push({type:2,index:++i});o.append(f[g],io())}}}else if(o.nodeType===8)if(o.data===lp)a.push({type:2,index:i});else{let f=-1;for(;(f=o.data.indexOf(It,f+1))!==-1;)a.push({type:7,index:i}),f+=It.length-1}i++}}static createElement(t,n){const r=Cn.createElement("template");return r.innerHTML=t,r}}function sr(e,t,n=e,r){var o,i,l,s;if(t===Ke)return t;let a=r!==void 0?(o=n._$Co)===null||o===void 0?void 0:o[r]:n._$Cl;const u=lo(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==u&&((i=a==null?void 0:a._$AO)===null||i===void 0||i.call(a,!1),u===void 0?a=void 0:(a=new u(e),a._$AT(e,n,r)),r!==void 0?((l=(s=n)._$Co)!==null&&l!==void 0?l:s._$Co=[])[r]=a:n._$Cl=a),a!==void 0&&(t=sr(e,a._$AS(e,t.values),a,r)),t}class bg{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var n;const{el:{content:r},parts:o}=this._$AD,i=((n=t==null?void 0:t.creationScope)!==null&&n!==void 0?n:Cn).importNode(r,!0);mn.currentNode=i;let l=mn.nextNode(),s=0,a=0,u=o[0];for(;u!==void 0;){if(s===u.index){let p;u.type===2?p=new go(l,l.nextSibling,this,t):u.type===1?p=new u.ctor(l,u.name,u.strings,this,t):u.type===6&&(p=new Cg(l,this,t)),this._$AV.push(p),u=o[++a]}s!==(u==null?void 0:u.index)&&(l=mn.nextNode(),s++)}return mn.currentNode=Cn,i}v(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}}class go{constructor(t,n,r,o){var i;this.type=2,this._$AH=ee,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=o,this._$Cp=(i=o==null?void 0:o.isConnected)===null||i===void 0||i}get _$AU(){var t,n;return(n=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&n!==void 0?n:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=sr(this,t,n),lo(t)?t===ee||t==null||t===""?(this._$AH!==ee&&this._$AR(),this._$AH=ee):t!==this._$AH&&t!==Ke&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):vg(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==ee&&lo(this._$AH)?this._$AA.nextSibling.data=t:this.$(Cn.createTextNode(t)),this._$AH=t}g(t){var n;const{values:r,_$litType$:o}=t,i=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=so.createElement(up(o.h,o.h[0]),this.options)),o);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===i)this._$AH.v(r);else{const l=new bg(i,this),s=l.u(this.options);l.v(r),this.$(s),this._$AH=l}}_$AC(t){let n=hc.get(t.strings);return n===void 0&&hc.set(t.strings,n=new so(t)),n}T(t){sp(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,o=0;for(const i of t)o===n.length?n.push(r=new go(this.k(io()),this.k(io()),this,this.options)):r=n[o],r._$AI(i),o++;o<n.length&&(this._$AR(r&&r._$AB.nextSibling,o),n.length=o)}_$AR(t=this._$AA.nextSibling,n){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,n);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var n;this._$AM===void 0&&(this._$Cp=t,(n=this._$AP)===null||n===void 0||n.call(this,t))}}class Yi{constructor(t,n,r,o,i){this.type=1,this._$AH=ee,this._$AN=void 0,this.element=t,this.name=n,this._$AM=o,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=ee}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,n=this,r,o){const i=this.strings;let l=!1;if(i===void 0)t=sr(this,t,n,0),l=!lo(t)||t!==this._$AH&&t!==Ke,l&&(this._$AH=t);else{const s=t;let a,u;for(t=i[0],a=0;a<i.length-1;a++)u=sr(this,s[r+a],n,a),u===Ke&&(u=this._$AH[a]),l||(l=!lo(u)||u!==this._$AH[a]),u===ee?t=ee:t!==ee&&(t+=(u??"")+i[a+1]),this._$AH[a]=u}l&&!o&&this.j(t)}j(t){t===ee?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class _g extends Yi{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===ee?void 0:t}}const kg=lr?lr.emptyScript:"";class xg extends Yi{constructor(){super(...arguments),this.type=4}j(t){t&&t!==ee?this.element.setAttribute(this.name,kg):this.element.removeAttribute(this.name)}}class Sg extends Yi{constructor(t,n,r,o,i){super(t,n,r,o,i),this.type=5}_$AI(t,n=this){var r;if((t=(r=sr(this,t,n,0))!==null&&r!==void 0?r:ee)===Ke)return;const o=this._$AH,i=t===ee&&o!==ee||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,l=t!==ee&&(o===ee||i);i&&this.element.removeEventListener(this.name,this,o),l&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var n,r;typeof this._$AH=="function"?this._$AH.call((r=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&r!==void 0?r:this.element,t):this._$AH.handleEvent(t)}}class Cg{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){sr(this,t)}}const gc=Pi.litHtmlPolyfillSupport;gc==null||gc(so,go),((Al=Pi.litHtmlVersions)!==null&&Al!==void 0?Al:Pi.litHtmlVersions=[]).push("2.8.0");const Eg=(e,t,n)=>{var r,o;const i=(r=n==null?void 0:n.renderBefore)!==null&&r!==void 0?r:t;let l=i._$litPart$;if(l===void 0){const s=(o=n==null?void 0:n.renderBefore)!==null&&o!==void 0?o:null;i._$litPart$=l=new go(t.insertBefore(io(),s),s,void 0,n??{})}return l._$AI(e),l};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var zl,Tl;let jr=class extends Tn{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,n;const r=super.createRenderRoot();return(t=(n=this.renderOptions).renderBefore)!==null&&t!==void 0||(n.renderBefore=r.firstChild),r}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Eg(n,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return Ke}};jr.finalized=!0,jr._$litElement$=!0,(zl=globalThis.litElementHydrateSupport)===null||zl===void 0||zl.call(globalThis,{LitElement:jr});const mc=globalThis.litElementPolyfillSupport;mc==null||mc({LitElement:jr});((Tl=globalThis.litElementVersions)!==null&&Tl!==void 0?Tl:globalThis.litElementVersions=[]).push("3.3.3");var Pt=st`
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
  ${Pt}

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
`,cp=Object.defineProperty,Ag=Object.defineProperties,Pg=Object.getOwnPropertyDescriptor,zg=Object.getOwnPropertyDescriptors,vc=Object.getOwnPropertySymbols,Tg=Object.prototype.hasOwnProperty,Lg=Object.prototype.propertyIsEnumerable,yc=(e,t,n)=>t in e?cp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Pn=(e,t)=>{for(var n in t||(t={}))Tg.call(t,n)&&yc(e,n,t[n]);if(vc)for(var n of vc(t))Lg.call(t,n)&&yc(e,n,t[n]);return e},Xi=(e,t)=>Ag(e,zg(t)),y=(e,t,n,r)=>{for(var o=r>1?void 0:r?Pg(t,n):t,i=e.length-1,l;i>=0;i--)(l=e[i])&&(o=(r?l(t,n,o):l(o))||o);return r&&o&&cp(t,n,o),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ng=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(n){n.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(n){n.createProperty(t.key,e)}},Rg=(e,t,n)=>{t.constructor.createProperty(n,e)};function k(e){return(t,n)=>n!==void 0?Rg(e,t,n):Ng(e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Fe(e){return k({...e,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mg=({finisher:e,descriptor:t})=>(n,r)=>{var o;if(r===void 0){const i=(o=n.originalKey)!==null&&o!==void 0?o:n.key,l=t!=null?{kind:"method",placement:"prototype",key:i,descriptor:t(n.key)}:{...n,key:i};return e!=null&&(l.finisher=function(s){e(s,i)}),l}{const i=n.constructor;t!==void 0&&Object.defineProperty(n,r,t(r)),e==null||e(i,r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function je(e,t){return Mg({descriptor:n=>{const r={get(){var o,i;return(i=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(e))!==null&&i!==void 0?i:null},enumerable:!0,configurable:!0};if(t){const o=typeof n=="symbol"?Symbol():"__"+n;r.get=function(){var i,l;return this[o]===void 0&&(this[o]=(l=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(e))!==null&&l!==void 0?l:null),this[o]}}return r}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ll;((Ll=window.HTMLSlotElement)===null||Ll===void 0?void 0:Ll.prototype.assignedElements)!=null;var Ve=class extends jr{constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){const n=new CustomEvent(e,Pn({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(n),n}static define(e,t=this,n={}){const r=customElements.get(e);if(!r){customElements.define(e,class extends t{},n);return}let o=" (unknown version)",i=o;"version"in t&&t.version&&(o=" v"+t.version),"version"in r&&r.version&&(i=" v"+r.version),!(o&&i&&o===i)&&console.warn(`Attempted to register <${e}>${o}, but <${e}>${i} has already been registered.`)}};Ve.version="2.8.0";Ve.dependencies={};y([k()],Ve.prototype,"dir",2);y([k()],Ve.prototype,"lang",2);var dp=class extends Ve{render(){return Z` <slot></slot> `}};dp.styles=$g;function Nl(e,t){function n(o){const i=e.getBoundingClientRect(),l=e.ownerDocument.defaultView,s=i.left+l.pageXOffset,a=i.top+l.pageYOffset,u=o.pageX-s,p=o.pageY-a;t!=null&&t.onMove&&t.onMove(u,p)}function r(){document.removeEventListener("pointermove",n),document.removeEventListener("pointerup",r),t!=null&&t.onStop&&t.onStop()}document.addEventListener("pointermove",n,{passive:!0}),document.addEventListener("pointerup",r),(t==null?void 0:t.initialEvent)instanceof PointerEvent&&n(t.initialEvent)}var Og=st`
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
  ${Pt}
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
`,fp=(e="value")=>(t,n)=>{const r=t.constructor,o=r.prototype.attributeChangedCallback;r.prototype.attributeChangedCallback=function(i,l,s){var a;const u=r.getPropertyOptions(e),p=typeof u.attribute=="string"?u.attribute:e;if(i===p){const f=u.converter||oo,m=(typeof f=="function"?f:(a=f==null?void 0:f.fromAttribute)!=null?a:oo.fromAttribute)(s,u.type);this[e]!==m&&(this[n]=m)}o.call(this,i,l,s)}},xr=new WeakMap,Sr=new WeakMap,Rl=new WeakSet,Fo=new WeakMap,Fa=class{constructor(e,t){this.handleFormData=n=>{const r=this.options.disabled(this.host),o=this.options.name(this.host),i=this.options.value(this.host),l=this.host.tagName.toLowerCase()==="sl-button";!r&&!l&&typeof o=="string"&&o.length>0&&typeof i<"u"&&(Array.isArray(i)?i.forEach(s=>{n.formData.append(o,s.toString())}):n.formData.append(o,i.toString()))},this.handleFormSubmit=n=>{var r;const o=this.options.disabled(this.host),i=this.options.reportValidity;this.form&&!this.form.noValidate&&((r=xr.get(this.form))==null||r.forEach(l=>{this.setUserInteracted(l,!0)})),this.form&&!this.form.noValidate&&!o&&!i(this.host)&&(n.preventDefault(),n.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Fo.set(this.host,[])},this.handleInteraction=n=>{const r=Fo.get(this.host);r.includes(n.type)||r.push(n.type),r.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const n=this.form.querySelectorAll("*");for(const r of n)if(typeof r.reportValidity=="function"&&!r.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=Pn({form:n=>{if(n.hasAttribute("form")&&n.getAttribute("form")!==""){const r=n.getRootNode(),o=n.getAttribute("form");if(o)return r.getElementById(o)}return n.closest("form")},name:n=>n.name,value:n=>n.value,defaultValue:n=>n.defaultValue,disabled:n=>{var r;return(r=n.disabled)!=null?r:!1},reportValidity:n=>typeof n.reportValidity=="function"?n.reportValidity():!0,setValue:(n,r)=>n.value=r,assumeInteractionOn:["sl-input"]},t)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),Fo.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),Fo.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,xr.has(this.form)?xr.get(this.form).add(this.host):xr.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Sr.has(this.form)||(Sr.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity())):this.form=void 0}detachForm(){var e;this.form&&((e=xr.get(this.form))==null||e.delete(this.host),this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Sr.has(this.form)&&(this.form.reportValidity=Sr.get(this.form),Sr.delete(this.form))),this.form=void 0}setUserInteracted(e,t){t?Rl.add(e):Rl.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){const n=document.createElement("button");n.type=e,n.style.position="absolute",n.style.width="0",n.style.height="0",n.style.clipPath="inset(50%)",n.style.overflow="hidden",n.style.whiteSpace="nowrap",t&&(n.name=t.name,n.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(r=>{t.hasAttribute(r)&&n.setAttribute(r,t.getAttribute(r))})),this.form.append(n),n.click(),n.remove()}}getForm(){var e;return(e=this.form)!=null?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const t=this.host,n=!!Rl.has(t),r=!!t.required;t.toggleAttribute("data-required",r),t.toggleAttribute("data-optional",!r),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&n),t.toggleAttribute("data-user-valid",e&&n)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||e==null||e.preventDefault()}},ja=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(Xi(Pn({},ja),{valid:!1,valueMissing:!0}));Object.freeze(Xi(Pn({},ja),{valid:!1,customError:!0}));const Ds=new Set,Ig=new MutationObserver(gp),Un=new Map;let pp=document.documentElement.dir||"ltr",hp=document.documentElement.lang||navigator.language,fn;Ig.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function Fg(...e){e.map(t=>{const n=t.$code.toLowerCase();Un.has(n)?Un.set(n,Object.assign(Object.assign({},Un.get(n)),t)):Un.set(n,t),fn||(fn=t)}),gp()}function gp(){pp=document.documentElement.dir||"ltr",hp=document.documentElement.lang||navigator.language,[...Ds.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}let jg=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){Ds.add(this.host)}hostDisconnected(){Ds.delete(this.host)}dir(){return`${this.host.dir||pp}`.toLowerCase()}lang(){return`${this.host.lang||hp}`.toLowerCase()}getTranslationData(t){var n,r;const o=new Intl.Locale(t),i=o==null?void 0:o.language.toLowerCase(),l=(r=(n=o==null?void 0:o.region)===null||n===void 0?void 0:n.toLowerCase())!==null&&r!==void 0?r:"",s=Un.get(`${i}-${l}`),a=Un.get(i);return{locale:o,language:i,region:l,primary:s,secondary:a}}exists(t,n){var r;const{primary:o,secondary:i}=this.getTranslationData((r=n.lang)!==null&&r!==void 0?r:this.lang());return n=Object.assign({includeFallback:!1},n),!!(o&&o[t]||i&&i[t]||n.includeFallback&&fn&&fn[t])}term(t,...n){const{primary:r,secondary:o}=this.getTranslationData(this.lang());let i;if(r&&r[t])i=r[t];else if(o&&o[t])i=o[t];else if(fn&&fn[t])i=fn[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof i=="function"?i(...n):i}date(t,n){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),n).format(t)}number(t,n){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),n).format(t)}relativeTime(t,n,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(t,n)}};var mo=class extends jg{},mp=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=n=>{const r=n.target;(this.slotNames.includes("[default]")&&!r.name||r.name&&this.slotNames.includes(r.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}},Vg=st`
  ${Pt}

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
  `},Wg={name:"system",resolver:e=>e in bc?`data:image/svg+xml,${encodeURIComponent(bc[e])}`:""},Qg=Wg,Kg=[Ug,Qg],Fs=[];function Gg(e){Fs.push(e)}function Yg(e){Fs=Fs.filter(t=>t!==e)}function _c(e){return Kg.find(t=>t.name===e)}function gt(e,t){const n=Pn({waitUntilFirstUpdate:!1},t);return(r,o)=>{const{update:i}=r,l=Array.isArray(e)?e:[e];r.update=function(s){l.forEach(a=>{const u=a;if(s.has(u)){const p=s.get(u),f=this[u];p!==f&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[o](p,f)}}),i.call(this,s)}}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xg=(e,t)=>t===void 0?(e==null?void 0:e._$litType$)!==void 0:(e==null?void 0:e._$litType$)===t,qg=e=>e.strings===void 0,Zg={},Jg=(e,t=Zg)=>e._$AH=t;var Cr=Symbol(),jo=Symbol(),Ml,Ol=new Map,at=class extends Ve{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var n;let r;if(t!=null&&t.spriteSheet)return Z`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`;try{if(r=await fetch(e,{mode:"cors"}),!r.ok)return r.status===410?Cr:jo}catch{return jo}try{const o=document.createElement("div");o.innerHTML=await r.text();const i=o.firstElementChild;if(((n=i==null?void 0:i.tagName)==null?void 0:n.toLowerCase())!=="svg")return Cr;Ml||(Ml=new DOMParser);const s=Ml.parseFromString(i.outerHTML,"text/html").body.querySelector("svg");return s?(s.part.add("svg"),document.adoptNode(s)):Cr}catch{return Cr}}connectedCallback(){super.connectedCallback(),Gg(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Yg(this)}getUrl(){const e=_c(this.library);return this.name&&e?e.resolver(this.name):this.src}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const t=_c(this.library),n=this.getUrl();if(!n){this.svg=null;return}let r=Ol.get(n);if(r||(r=this.resolveIcon(n,t),Ol.set(n,r)),!this.initialRender)return;const o=await r;if(o===jo&&Ol.delete(n),n===this.getUrl()){if(Xg(o)){this.svg=o;return}switch(o){case jo:case Cr:this.svg=null,this.emit("sl-error");break;default:this.svg=o.cloneNode(!0),(e=t==null?void 0:t.mutator)==null||e.call(t,this.svg),this.emit("sl-load")}}}render(){return this.svg}};at.styles=Vg;y([Fe()],at.prototype,"svg",2);y([k({reflect:!0})],at.prototype,"name",2);y([k()],at.prototype,"src",2);y([k()],at.prototype,"label",2);y([k({reflect:!0})],at.prototype,"library",2);y([gt("label")],at.prototype,"handleLabelChange",1);y([gt(["name","src","library"])],at.prototype,"setIcon",1);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Va=e=>(...t)=>({_$litDirective$:e,values:t});let Ba=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,r){this._$Ct=t,this._$AM=n,this._$Ci=r}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kt=Va(class extends Ba{constructor(e){var t;if(super(e),e.type!==Mt.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var n,r;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!(!((n=this.nt)===null||n===void 0)&&n.has(i))&&this.it.add(i);return this.render(t)}const o=e.element.classList;this.it.forEach(i=>{i in t||(o.remove(i),this.it.delete(i))});for(const i in t){const l=!!t[i];l===this.it.has(i)||!((r=this.nt)===null||r===void 0)&&r.has(i)||(l?(o.add(i),this.it.add(i)):(o.remove(i),this.it.delete(i)))}return Ke}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V=e=>e??ee;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const em=Va(class extends Ba{constructor(e){if(super(e),e.type!==Mt.PROPERTY&&e.type!==Mt.ATTRIBUTE&&e.type!==Mt.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!qg(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===Ke||t===ee)return t;const n=e.element,r=e.name;if(e.type===Mt.PROPERTY){if(t===n[r])return Ke}else if(e.type===Mt.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(r))return Ke}else if(e.type===Mt.ATTRIBUTE&&n.getAttribute(r)===t+"")return Ke;return Jg(e),t}});var N=class extends Ve{constructor(){super(...arguments),this.formControlController=new Fa(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new mp(this,"help-text","label"),this.localize=new mo(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var e;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((e=this.input)==null?void 0:e.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(e){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=e,this.value=this.__dateInput.value}get valueAsNumber(){var e;return this.__numberInput.value=this.value,((e=this.input)==null?void 0:e.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(e){this.__numberInput.valueAsNumber=e,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(e){this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change"),this.input.focus(),e.stopPropagation()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleKeyDown(e){const t=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key==="Enter"&&!t&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,n="none"){this.input.setSelectionRange(e,t,n)}setRangeText(e,t,n,r){this.input.setRangeText(e,t,n,r),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),n=this.label?!0:!!e,r=this.helpText?!0:!!t,o=this.clearable&&!this.disabled&&!this.readonly,i=o&&(typeof this.value=="number"||this.value.length>0);return Z`
      <div
        part="form-control"
        class=${kt({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":n,"form-control--has-help-text":r})}
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
            class=${kt({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
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
              name=${V(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${V(this.placeholder)}
              minlength=${V(this.minlength)}
              maxlength=${V(this.maxlength)}
              min=${V(this.min)}
              max=${V(this.max)}
              step=${V(this.step)}
              .value=${em(this.value)}
              autocapitalize=${V(this.autocapitalize)}
              autocomplete=${V(this.autocomplete)}
              autocorrect=${V(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${V(this.pattern)}
              enterkeyhint=${V(this.enterkeyhint)}
              inputmode=${V(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${o?Z`
                  <button
                    part="clear-button"
                    class=${kt({input__clear:!0,"input__clear--visible":i})}
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
            ${this.passwordToggle&&!this.disabled?Z`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?Z`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:Z`
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
    `}};N.styles=Dg;N.dependencies={"sl-icon":at};y([je(".input__control")],N.prototype,"input",2);y([Fe()],N.prototype,"hasFocus",2);y([k()],N.prototype,"title",2);y([k({reflect:!0})],N.prototype,"type",2);y([k()],N.prototype,"name",2);y([k()],N.prototype,"value",2);y([fp()],N.prototype,"defaultValue",2);y([k({reflect:!0})],N.prototype,"size",2);y([k({type:Boolean,reflect:!0})],N.prototype,"filled",2);y([k({type:Boolean,reflect:!0})],N.prototype,"pill",2);y([k()],N.prototype,"label",2);y([k({attribute:"help-text"})],N.prototype,"helpText",2);y([k({type:Boolean})],N.prototype,"clearable",2);y([k({type:Boolean,reflect:!0})],N.prototype,"disabled",2);y([k()],N.prototype,"placeholder",2);y([k({type:Boolean,reflect:!0})],N.prototype,"readonly",2);y([k({attribute:"password-toggle",type:Boolean})],N.prototype,"passwordToggle",2);y([k({attribute:"password-visible",type:Boolean})],N.prototype,"passwordVisible",2);y([k({attribute:"no-spin-buttons",type:Boolean})],N.prototype,"noSpinButtons",2);y([k({reflect:!0})],N.prototype,"form",2);y([k({type:Boolean,reflect:!0})],N.prototype,"required",2);y([k()],N.prototype,"pattern",2);y([k({type:Number})],N.prototype,"minlength",2);y([k({type:Number})],N.prototype,"maxlength",2);y([k()],N.prototype,"min",2);y([k()],N.prototype,"max",2);y([k()],N.prototype,"step",2);y([k()],N.prototype,"autocapitalize",2);y([k()],N.prototype,"autocorrect",2);y([k()],N.prototype,"autocomplete",2);y([k({type:Boolean})],N.prototype,"autofocus",2);y([k()],N.prototype,"enterkeyhint",2);y([k({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],N.prototype,"spellcheck",2);y([k()],N.prototype,"inputmode",2);y([gt("disabled",{waitUntilFirstUpdate:!0})],N.prototype,"handleDisabledChange",1);y([gt("step",{waitUntilFirstUpdate:!0})],N.prototype,"handleStepChange",1);y([gt("value",{waitUntilFirstUpdate:!0})],N.prototype,"handleValueChange",1);var tm=st`
  ${Pt}

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
  ${Pt}

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
`;const Jt=Math.min,Le=Math.max,zi=Math.round,Vo=Math.floor,en=e=>({x:e,y:e}),sm={left:"right",right:"left",bottom:"top",top:"bottom"},am={start:"end",end:"start"};function js(e,t,n){return Le(e,Jt(t,n))}function fr(e,t){return typeof e=="function"?e(t):e}function tn(e){return e.split("-")[0]}function pr(e){return e.split("-")[1]}function yp(e){return e==="x"?"y":"x"}function Ha(e){return e==="y"?"height":"width"}function vo(e){return["top","bottom"].includes(tn(e))?"y":"x"}function Ua(e){return yp(vo(e))}function um(e,t,n){n===void 0&&(n=!1);const r=pr(e),o=Ua(e),i=Ha(o);let l=o==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[i]>t.floating[i]&&(l=Ti(l)),[l,Ti(l)]}function cm(e){const t=Ti(e);return[Vs(e),t,Vs(t)]}function Vs(e){return e.replace(/start|end/g,t=>am[t])}function dm(e,t,n){const r=["left","right"],o=["right","left"],i=["top","bottom"],l=["bottom","top"];switch(e){case"top":case"bottom":return n?t?o:r:t?r:o;case"left":case"right":return t?i:l;default:return[]}}function fm(e,t,n,r){const o=pr(e);let i=dm(tn(e),n==="start",r);return o&&(i=i.map(l=>l+"-"+o),t&&(i=i.concat(i.map(Vs)))),i}function Ti(e){return e.replace(/left|right|bottom|top/g,t=>sm[t])}function pm(e){return{top:0,right:0,bottom:0,left:0,...e}}function wp(e){return typeof e!="number"?pm(e):{top:e,right:e,bottom:e,left:e}}function Li(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function kc(e,t,n){let{reference:r,floating:o}=e;const i=vo(t),l=Ua(t),s=Ha(l),a=tn(t),u=i==="y",p=r.x+r.width/2-o.width/2,f=r.y+r.height/2-o.height/2,g=r[s]/2-o[s]/2;let m;switch(a){case"top":m={x:p,y:r.y-o.height};break;case"bottom":m={x:p,y:r.y+r.height};break;case"right":m={x:r.x+r.width,y:f};break;case"left":m={x:r.x-o.width,y:f};break;default:m={x:r.x,y:r.y}}switch(pr(t)){case"start":m[l]-=g*(n&&u?-1:1);break;case"end":m[l]+=g*(n&&u?-1:1);break}return m}const hm=async(e,t,n)=>{const{placement:r="bottom",strategy:o="absolute",middleware:i=[],platform:l}=n,s=i.filter(Boolean),a=await(l.isRTL==null?void 0:l.isRTL(t));let u=await l.getElementRects({reference:e,floating:t,strategy:o}),{x:p,y:f}=kc(u,r,a),g=r,m={},w=0;for(let b=0;b<s.length;b++){const{name:P,fn:h}=s[b],{x:c,y:d,data:v,reset:_}=await h({x:p,y:f,initialPlacement:r,placement:g,strategy:o,middlewareData:m,rects:u,platform:l,elements:{reference:e,floating:t}});if(p=c??p,f=d??f,m={...m,[P]:{...m[P],...v}},_&&w<=50){w++,typeof _=="object"&&(_.placement&&(g=_.placement),_.rects&&(u=_.rects===!0?await l.getElementRects({reference:e,floating:t,strategy:o}):_.rects),{x:p,y:f}=kc(u,g,a)),b=-1;continue}}return{x:p,y:f,placement:g,strategy:o,middlewareData:m}};async function Wa(e,t){var n;t===void 0&&(t={});const{x:r,y:o,platform:i,rects:l,elements:s,strategy:a}=e,{boundary:u="clippingAncestors",rootBoundary:p="viewport",elementContext:f="floating",altBoundary:g=!1,padding:m=0}=fr(t,e),w=wp(m),P=s[g?f==="floating"?"reference":"floating":f],h=Li(await i.getClippingRect({element:(n=await(i.isElement==null?void 0:i.isElement(P)))==null||n?P:P.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(s.floating)),boundary:u,rootBoundary:p,strategy:a})),c=f==="floating"?{...l.floating,x:r,y:o}:l.reference,d=await(i.getOffsetParent==null?void 0:i.getOffsetParent(s.floating)),v=await(i.isElement==null?void 0:i.isElement(d))?await(i.getScale==null?void 0:i.getScale(d))||{x:1,y:1}:{x:1,y:1},_=Li(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({rect:c,offsetParent:d,strategy:a}):c);return{top:(h.top-_.top+w.top)/v.y,bottom:(_.bottom-h.bottom+w.bottom)/v.y,left:(h.left-_.left+w.left)/v.x,right:(_.right-h.right+w.right)/v.x}}const gm=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:r,placement:o,rects:i,platform:l,elements:s,middlewareData:a}=t,{element:u,padding:p=0}=fr(e,t)||{};if(u==null)return{};const f=wp(p),g={x:n,y:r},m=Ua(o),w=Ha(m),b=await l.getDimensions(u),P=m==="y",h=P?"top":"left",c=P?"bottom":"right",d=P?"clientHeight":"clientWidth",v=i.reference[w]+i.reference[m]-g[m]-i.floating[w],_=g[m]-i.reference[m],S=await(l.getOffsetParent==null?void 0:l.getOffsetParent(u));let C=S?S[d]:0;(!C||!await(l.isElement==null?void 0:l.isElement(S)))&&(C=s.floating[d]||i.floating[w]);const A=v/2-_/2,I=C/2-b[w]/2-1,T=Jt(f[h],I),ae=Jt(f[c],I),oe=T,Ze=C-b[w]-ae,pe=C/2-b[w]/2+A,Be=js(oe,pe,Ze),xe=!a.arrow&&pr(o)!=null&&pe!=Be&&i.reference[w]/2-(pe<oe?T:ae)-b[w]/2<0,Pe=xe?pe<oe?pe-oe:pe-Ze:0;return{[m]:g[m]+Pe,data:{[m]:Be,centerOffset:pe-Be-Pe,...xe&&{alignmentOffset:Pe}},reset:xe}}}),mm=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:o,middlewareData:i,rects:l,initialPlacement:s,platform:a,elements:u}=t,{mainAxis:p=!0,crossAxis:f=!0,fallbackPlacements:g,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:w="none",flipAlignment:b=!0,...P}=fr(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};const h=tn(o),c=tn(s)===s,d=await(a.isRTL==null?void 0:a.isRTL(u.floating)),v=g||(c||!b?[Ti(s)]:cm(s));!g&&w!=="none"&&v.push(...fm(s,b,w,d));const _=[s,...v],S=await Wa(t,P),C=[];let A=((r=i.flip)==null?void 0:r.overflows)||[];if(p&&C.push(S[h]),f){const oe=um(o,l,d);C.push(S[oe[0]],S[oe[1]])}if(A=[...A,{placement:o,overflows:C}],!C.every(oe=>oe<=0)){var I,T;const oe=(((I=i.flip)==null?void 0:I.index)||0)+1,Ze=_[oe];if(Ze)return{data:{index:oe,overflows:A},reset:{placement:Ze}};let pe=(T=A.filter(Be=>Be.overflows[0]<=0).sort((Be,xe)=>Be.overflows[1]-xe.overflows[1])[0])==null?void 0:T.placement;if(!pe)switch(m){case"bestFit":{var ae;const Be=(ae=A.map(xe=>[xe.placement,xe.overflows.filter(Pe=>Pe>0).reduce((Pe,E)=>Pe+E,0)]).sort((xe,Pe)=>xe[1]-Pe[1])[0])==null?void 0:ae[0];Be&&(pe=Be);break}case"initialPlacement":pe=s;break}if(o!==pe)return{reset:{placement:pe}}}return{}}}};async function vm(e,t){const{placement:n,platform:r,elements:o}=e,i=await(r.isRTL==null?void 0:r.isRTL(o.floating)),l=tn(n),s=pr(n),a=vo(n)==="y",u=["left","top"].includes(l)?-1:1,p=i&&a?-1:1,f=fr(t,e);let{mainAxis:g,crossAxis:m,alignmentAxis:w}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...f};return s&&typeof w=="number"&&(m=s==="end"?w*-1:w),a?{x:m*p,y:g*u}:{x:g*u,y:m*p}}const ym=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){const{x:n,y:r}=t,o=await vm(t,e);return{x:n+o.x,y:r+o.y,data:o}}}},wm=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:o}=t,{mainAxis:i=!0,crossAxis:l=!1,limiter:s={fn:P=>{let{x:h,y:c}=P;return{x:h,y:c}}},...a}=fr(e,t),u={x:n,y:r},p=await Wa(t,a),f=vo(tn(o)),g=yp(f);let m=u[g],w=u[f];if(i){const P=g==="y"?"top":"left",h=g==="y"?"bottom":"right",c=m+p[P],d=m-p[h];m=js(c,m,d)}if(l){const P=f==="y"?"top":"left",h=f==="y"?"bottom":"right",c=w+p[P],d=w-p[h];w=js(c,w,d)}const b=s.fn({...t,[g]:m,[f]:w});return{...b,data:{x:b.x-n,y:b.y-r}}}}},xc=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:n,rects:r,platform:o,elements:i}=t,{apply:l=()=>{},...s}=fr(e,t),a=await Wa(t,s),u=tn(n),p=pr(n),f=vo(n)==="y",{width:g,height:m}=r.floating;let w,b;u==="top"||u==="bottom"?(w=u,b=p===(await(o.isRTL==null?void 0:o.isRTL(i.floating))?"start":"end")?"left":"right"):(b=u,w=p==="end"?"top":"bottom");const P=m-a[w],h=g-a[b],c=!t.middlewareData.shift;let d=P,v=h;if(f){const S=g-a.left-a.right;v=p||c?Jt(h,S):S}else{const S=m-a.top-a.bottom;d=p||c?Jt(P,S):S}if(c&&!p){const S=Le(a.left,0),C=Le(a.right,0),A=Le(a.top,0),I=Le(a.bottom,0);f?v=g-2*(S!==0||C!==0?S+C:Le(a.left,a.right)):d=m-2*(A!==0||I!==0?A+I:Le(a.top,a.bottom))}await l({...t,availableWidth:v,availableHeight:d});const _=await o.getDimensions(i.floating);return g!==_.width||m!==_.height?{reset:{rects:!0}}:{}}}};function nn(e){return bp(e)?(e.nodeName||"").toLowerCase():"#document"}function Me(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function zt(e){var t;return(t=(bp(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function bp(e){return e instanceof Node||e instanceof Me(e).Node}function $t(e){return e instanceof Element||e instanceof Me(e).Element}function ht(e){return e instanceof HTMLElement||e instanceof Me(e).HTMLElement}function Sc(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Me(e).ShadowRoot}function yo(e){const{overflow:t,overflowX:n,overflowY:r,display:o}=qe(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(o)}function bm(e){return["table","td","th"].includes(nn(e))}function Qa(e){const t=Ka(),n=qe(e);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(r=>(n.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(n.contain||"").includes(r))}function _m(e){let t=ar(e);for(;ht(t)&&!qi(t);){if(Qa(t))return t;t=ar(t)}return null}function Ka(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function qi(e){return["html","body","#document"].includes(nn(e))}function qe(e){return Me(e).getComputedStyle(e)}function Zi(e){return $t(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function ar(e){if(nn(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Sc(e)&&e.host||zt(e);return Sc(t)?t.host:t}function _p(e){const t=ar(e);return qi(t)?e.ownerDocument?e.ownerDocument.body:e.body:ht(t)&&yo(t)?t:_p(t)}function ao(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const o=_p(e),i=o===((r=e.ownerDocument)==null?void 0:r.body),l=Me(o);return i?t.concat(l,l.visualViewport||[],yo(o)?o:[],l.frameElement&&n?ao(l.frameElement):[]):t.concat(o,ao(o))}function kp(e){const t=qe(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const o=ht(e),i=o?e.offsetWidth:n,l=o?e.offsetHeight:r,s=zi(n)!==i||zi(r)!==l;return s&&(n=i,r=l),{width:n,height:r,$:s}}function Ga(e){return $t(e)?e:e.contextElement}function Zn(e){const t=Ga(e);if(!ht(t))return en(1);const n=t.getBoundingClientRect(),{width:r,height:o,$:i}=kp(t);let l=(i?zi(n.width):n.width)/r,s=(i?zi(n.height):n.height)/o;return(!l||!Number.isFinite(l))&&(l=1),(!s||!Number.isFinite(s))&&(s=1),{x:l,y:s}}const km=en(0);function xp(e){const t=Me(e);return!Ka()||!t.visualViewport?km:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function xm(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==Me(e)?!1:t}function En(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const o=e.getBoundingClientRect(),i=Ga(e);let l=en(1);t&&(r?$t(r)&&(l=Zn(r)):l=Zn(e));const s=xm(i,n,r)?xp(i):en(0);let a=(o.left+s.x)/l.x,u=(o.top+s.y)/l.y,p=o.width/l.x,f=o.height/l.y;if(i){const g=Me(i),m=r&&$t(r)?Me(r):r;let w=g.frameElement;for(;w&&r&&m!==g;){const b=Zn(w),P=w.getBoundingClientRect(),h=qe(w),c=P.left+(w.clientLeft+parseFloat(h.paddingLeft))*b.x,d=P.top+(w.clientTop+parseFloat(h.paddingTop))*b.y;a*=b.x,u*=b.y,p*=b.x,f*=b.y,a+=c,u+=d,w=Me(w).frameElement}}return Li({width:p,height:f,x:a,y:u})}function Sm(e){let{rect:t,offsetParent:n,strategy:r}=e;const o=ht(n),i=zt(n);if(n===i)return t;let l={scrollLeft:0,scrollTop:0},s=en(1);const a=en(0);if((o||!o&&r!=="fixed")&&((nn(n)!=="body"||yo(i))&&(l=Zi(n)),ht(n))){const u=En(n);s=Zn(n),a.x=u.x+n.clientLeft,a.y=u.y+n.clientTop}return{width:t.width*s.x,height:t.height*s.y,x:t.x*s.x-l.scrollLeft*s.x+a.x,y:t.y*s.y-l.scrollTop*s.y+a.y}}function Cm(e){return Array.from(e.getClientRects())}function Sp(e){return En(zt(e)).left+Zi(e).scrollLeft}function Em(e){const t=zt(e),n=Zi(e),r=e.ownerDocument.body,o=Le(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),i=Le(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let l=-n.scrollLeft+Sp(e);const s=-n.scrollTop;return qe(r).direction==="rtl"&&(l+=Le(t.clientWidth,r.clientWidth)-o),{width:o,height:i,x:l,y:s}}function $m(e,t){const n=Me(e),r=zt(e),o=n.visualViewport;let i=r.clientWidth,l=r.clientHeight,s=0,a=0;if(o){i=o.width,l=o.height;const u=Ka();(!u||u&&t==="fixed")&&(s=o.offsetLeft,a=o.offsetTop)}return{width:i,height:l,x:s,y:a}}function Am(e,t){const n=En(e,!0,t==="fixed"),r=n.top+e.clientTop,o=n.left+e.clientLeft,i=ht(e)?Zn(e):en(1),l=e.clientWidth*i.x,s=e.clientHeight*i.y,a=o*i.x,u=r*i.y;return{width:l,height:s,x:a,y:u}}function Cc(e,t,n){let r;if(t==="viewport")r=$m(e,n);else if(t==="document")r=Em(zt(e));else if($t(t))r=Am(t,n);else{const o=xp(e);r={...t,x:t.x-o.x,y:t.y-o.y}}return Li(r)}function Cp(e,t){const n=ar(e);return n===t||!$t(n)||qi(n)?!1:qe(n).position==="fixed"||Cp(n,t)}function Pm(e,t){const n=t.get(e);if(n)return n;let r=ao(e,[],!1).filter(s=>$t(s)&&nn(s)!=="body"),o=null;const i=qe(e).position==="fixed";let l=i?ar(e):e;for(;$t(l)&&!qi(l);){const s=qe(l),a=Qa(l);!a&&s.position==="fixed"&&(o=null),(i?!a&&!o:!a&&s.position==="static"&&!!o&&["absolute","fixed"].includes(o.position)||yo(l)&&!a&&Cp(e,l))?r=r.filter(p=>p!==l):o=s,l=ar(l)}return t.set(e,r),r}function zm(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e;const l=[...n==="clippingAncestors"?Pm(t,this._c):[].concat(n),r],s=l[0],a=l.reduce((u,p)=>{const f=Cc(t,p,o);return u.top=Le(f.top,u.top),u.right=Jt(f.right,u.right),u.bottom=Jt(f.bottom,u.bottom),u.left=Le(f.left,u.left),u},Cc(t,s,o));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function Tm(e){return kp(e)}function Lm(e,t,n){const r=ht(t),o=zt(t),i=n==="fixed",l=En(e,!0,i,t);let s={scrollLeft:0,scrollTop:0};const a=en(0);if(r||!r&&!i)if((nn(t)!=="body"||yo(o))&&(s=Zi(t)),r){const u=En(t,!0,i,t);a.x=u.x+t.clientLeft,a.y=u.y+t.clientTop}else o&&(a.x=Sp(o));return{x:l.left+s.scrollLeft-a.x,y:l.top+s.scrollTop-a.y,width:l.width,height:l.height}}function Ec(e,t){return!ht(e)||qe(e).position==="fixed"?null:t?t(e):e.offsetParent}function Ep(e,t){const n=Me(e);if(!ht(e))return n;let r=Ec(e,t);for(;r&&bm(r)&&qe(r).position==="static";)r=Ec(r,t);return r&&(nn(r)==="html"||nn(r)==="body"&&qe(r).position==="static"&&!Qa(r))?n:r||_m(e)||n}const Nm=async function(e){let{reference:t,floating:n,strategy:r}=e;const o=this.getOffsetParent||Ep,i=this.getDimensions;return{reference:Lm(t,await o(n),r),floating:{x:0,y:0,...await i(n)}}};function Rm(e){return qe(e).direction==="rtl"}const ri={convertOffsetParentRelativeRectToViewportRelativeRect:Sm,getDocumentElement:zt,getClippingRect:zm,getOffsetParent:Ep,getElementRects:Nm,getClientRects:Cm,getDimensions:Tm,getScale:Zn,isElement:$t,isRTL:Rm};function Mm(e,t){let n=null,r;const o=zt(e);function i(){clearTimeout(r),n&&n.disconnect(),n=null}function l(s,a){s===void 0&&(s=!1),a===void 0&&(a=1),i();const{left:u,top:p,width:f,height:g}=e.getBoundingClientRect();if(s||t(),!f||!g)return;const m=Vo(p),w=Vo(o.clientWidth-(u+f)),b=Vo(o.clientHeight-(p+g)),P=Vo(u),c={rootMargin:-m+"px "+-w+"px "+-b+"px "+-P+"px",threshold:Le(0,Jt(1,a))||1};let d=!0;function v(_){const S=_[0].intersectionRatio;if(S!==a){if(!d)return l();S?l(!1,S):r=setTimeout(()=>{l(!1,1e-7)},100)}d=!1}try{n=new IntersectionObserver(v,{...c,root:o.ownerDocument})}catch{n=new IntersectionObserver(v,c)}n.observe(e)}return l(!0),i}function Om(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:o=!0,ancestorResize:i=!0,elementResize:l=typeof ResizeObserver=="function",layoutShift:s=typeof IntersectionObserver=="function",animationFrame:a=!1}=r,u=Ga(e),p=o||i?[...u?ao(u):[],...ao(t)]:[];p.forEach(h=>{o&&h.addEventListener("scroll",n,{passive:!0}),i&&h.addEventListener("resize",n)});const f=u&&s?Mm(u,n):null;let g=-1,m=null;l&&(m=new ResizeObserver(h=>{let[c]=h;c&&c.target===u&&m&&(m.unobserve(t),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{m&&m.observe(t)})),n()}),u&&!a&&m.observe(u),m.observe(t));let w,b=a?En(e):null;a&&P();function P(){const h=En(e);b&&(h.x!==b.x||h.y!==b.y||h.width!==b.width||h.height!==b.height)&&n(),b=h,w=requestAnimationFrame(P)}return n(),()=>{p.forEach(h=>{o&&h.removeEventListener("scroll",n),i&&h.removeEventListener("resize",n)}),f&&f(),m&&m.disconnect(),m=null,a&&cancelAnimationFrame(w)}}const Dm=(e,t,n)=>{const r=new Map,o={platform:ri,...n},i={...o.platform,_c:r};return hm(e,t,{...o,platform:i})};function Im(e){return e!==null&&typeof e=="object"&&"getBoundingClientRect"in e}var W=class extends Ve{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||Im(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');if(this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),!this.anchorEl)throw new Error("Invalid anchor element: no anchor could be found using the anchor slot or the anchor attribute.");this.start()}start(){this.anchorEl&&(this.cleanup=Om(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl)return;const e=[ym({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(xc({apply:({rects:n})=>{const r=this.sync==="width"||this.sync==="both",o=this.sync==="height"||this.sync==="both";this.popup.style.width=r?`${n.reference.width}px`:"",this.popup.style.height=o?`${n.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(mm({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(wm({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(xc({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:n,availableHeight:r})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${r}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${n}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(gm({element:this.arrowEl,padding:this.arrowPadding}));const t=this.strategy==="absolute"?n=>ri.getOffsetParent(n,vp):ri.getOffsetParent;Dm(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:Xi(Pn({},ri),{getOffsetParent:t})}).then(({x:n,y:r,middlewareData:o,placement:i})=>{const l=getComputedStyle(this).direction==="rtl",s={top:"bottom",right:"left",bottom:"top",left:"right"}[i.split("-")[0]];if(this.setAttribute("data-current-placement",i),Object.assign(this.popup.style,{left:`${n}px`,top:`${r}px`}),this.arrow){const a=o.arrow.x,u=o.arrow.y;let p="",f="",g="",m="";if(this.arrowPlacement==="start"){const w=typeof a=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";p=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",f=l?w:"",m=l?"":w}else if(this.arrowPlacement==="end"){const w=typeof a=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";f=l?"":w,m=l?w:"",g=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(m=typeof a=="number"?"calc(50% - var(--arrow-size-diagonal))":"",p=typeof u=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(m=typeof a=="number"?`${a}px`:"",p=typeof u=="number"?`${u}px`:"");Object.assign(this.arrowEl.style,{top:p,right:f,bottom:g,left:m,[s]:"calc(var(--arrow-size-diagonal) * -1)"})}}),this.emit("sl-reposition")}render(){return Z`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <div
        part="popup"
        class=${kt({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?Z`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};W.styles=lm;y([je(".popup")],W.prototype,"popup",2);y([je(".popup__arrow")],W.prototype,"arrowEl",2);y([k()],W.prototype,"anchor",2);y([k({type:Boolean,reflect:!0})],W.prototype,"active",2);y([k({reflect:!0})],W.prototype,"placement",2);y([k({reflect:!0})],W.prototype,"strategy",2);y([k({type:Number})],W.prototype,"distance",2);y([k({type:Number})],W.prototype,"skidding",2);y([k({type:Boolean})],W.prototype,"arrow",2);y([k({attribute:"arrow-placement"})],W.prototype,"arrowPlacement",2);y([k({attribute:"arrow-padding",type:Number})],W.prototype,"arrowPadding",2);y([k({type:Boolean})],W.prototype,"flip",2);y([k({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:e=>e.join(" ")}})],W.prototype,"flipFallbackPlacements",2);y([k({attribute:"flip-fallback-strategy"})],W.prototype,"flipFallbackStrategy",2);y([k({type:Object})],W.prototype,"flipBoundary",2);y([k({attribute:"flip-padding",type:Number})],W.prototype,"flipPadding",2);y([k({type:Boolean})],W.prototype,"shift",2);y([k({type:Object})],W.prototype,"shiftBoundary",2);y([k({attribute:"shift-padding",type:Number})],W.prototype,"shiftPadding",2);y([k({attribute:"auto-size"})],W.prototype,"autoSize",2);y([k()],W.prototype,"sync",2);y([k({type:Object})],W.prototype,"autoSizeBoundary",2);y([k({attribute:"auto-size-padding",type:Number})],W.prototype,"autoSizePadding",2);var $p=new Map,Fm=new WeakMap;function jm(e){return e??{keyframes:[],options:{duration:0}}}function $c(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function Ap(e,t){$p.set(e,jm(t))}function Ac(e,t,n){const r=Fm.get(e);if(r!=null&&r[t])return $c(r[t],n.dir);const o=$p.get(t);return o?$c(o,n.dir):{keyframes:[],options:{duration:0}}}function Pc(e,t){return new Promise(n=>{function r(o){o.target===e&&(e.removeEventListener(t,r),n())}e.addEventListener(t,r)})}function zc(e,t,n){return new Promise(r=>{if((n==null?void 0:n.duration)===1/0)throw new Error("Promise-based animations must be finite.");const o=e.animate(t,Xi(Pn({},n),{duration:Vm()?0:n.duration}));o.addEventListener("cancel",r,{once:!0}),o.addEventListener("finish",r,{once:!0})})}function Vm(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Tc(e){return Promise.all(e.getAnimations().map(t=>new Promise(n=>{const r=requestAnimationFrame(n);t.addEventListener("cancel",()=>r,{once:!0}),t.addEventListener("finish",()=>r,{once:!0}),t.cancel()})))}var ke=class extends Ve{constructor(){super(...arguments),this.localize=new mo(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.handleKeyDown=e=>{this.open&&e.key==="Escape"&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=e=>{var t;if(e.key==="Escape"&&this.open){e.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(e.key==="Tab"){if(this.open&&((t=document.activeElement)==null?void 0:t.tagName.toLowerCase())==="sl-menu-item"){e.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var n,r,o;const i=((n=this.containingElement)==null?void 0:n.getRootNode())instanceof ShadowRoot?(o=(r=document.activeElement)==null?void 0:r.shadowRoot)==null?void 0:o.activeElement:document.activeElement;(!this.containingElement||(i==null?void 0:i.closest(this.containingElement.tagName.toLowerCase()))!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=e=>{const t=e.target;!this.stayOpenOnSelect&&t.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const e=this.trigger.assignedElements({flatten:!0})[0];typeof(e==null?void 0:e.focus)=="function"&&e.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(e=>e.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(e){if([" ","Enter"].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}const t=this.getMenu();if(t){const n=t.getAllItems(),r=n[0],o=n[n.length-1];["ArrowDown","ArrowUp","Home","End"].includes(e.key)&&(e.preventDefault(),this.open||(this.show(),await this.updateComplete),n.length>0&&this.updateComplete.then(()=>{(e.key==="ArrowDown"||e.key==="Home")&&(t.setCurrentItem(r),r.focus()),(e.key==="ArrowUp"||e.key==="End")&&(t.setCurrentItem(o),o.focus())}))}}handleTriggerKeyUp(e){e.key===" "&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const t=this.trigger.assignedElements({flatten:!0}).find(r=>om(r).start);let n;if(t){switch(t.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":n=t.button;break;default:n=t}n.setAttribute("aria-haspopup","true"),n.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,Pc(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Pc(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){this.panel.addEventListener("sl-select",this.handlePanelSelect),this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await Tc(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=Ac(this,"dropdown.show",{dir:this.localize.dir()});await zc(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await Tc(this);const{keyframes:e,options:t}=Ac(this,"dropdown.hide",{dir:this.localize.dir()});await zc(this.popup.popup,e,t),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return Z`
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
        class=${kt({dropdown:!0,"dropdown--open":this.open})}
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
    `}};ke.styles=tm;ke.dependencies={"sl-popup":W};y([je(".dropdown")],ke.prototype,"popup",2);y([je(".dropdown__trigger")],ke.prototype,"trigger",2);y([je(".dropdown__panel")],ke.prototype,"panel",2);y([k({type:Boolean,reflect:!0})],ke.prototype,"open",2);y([k({reflect:!0})],ke.prototype,"placement",2);y([k({type:Boolean,reflect:!0})],ke.prototype,"disabled",2);y([k({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],ke.prototype,"stayOpenOnSelect",2);y([k({attribute:!1})],ke.prototype,"containingElement",2);y([k({type:Number})],ke.prototype,"distance",2);y([k({type:Number})],ke.prototype,"skidding",2);y([k({type:Boolean})],ke.prototype,"hoist",2);y([gt("open",{waitUntilFirstUpdate:!0})],ke.prototype,"handleOpenChange",1);Ap("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});Ap("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});var Bm=st`
  ${Pt}

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
`;function He(e,t,n){const r=o=>Object.is(o,-0)?0:o;return e<t?r(t):e>n?r(n):r(e)}var Hm=st`
  ${Pt}

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
`,Pp=class extends Ve{constructor(){super(...arguments),this.localize=new mo(this)}render(){return Z`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Pp.styles=Hm;var Um=st`
  ${Pt}

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
            take care to ensure page security.`)})(r)+e[o+1],e[0]),r:zp}),Nc=new Map,Qm=e=>(t,...n)=>{const r=n.length;let o,i;const l=[],s=[];let a,u=0,p=!1;for(;u<r;){for(a=t[u];u<r&&(i=n[u],(o=Wm(i))!==void 0);)a+=o+t[++u],p=!0;u!==r&&s.push(i),l.push(a),u++}if(u===r&&l.push(t[r]),p){const f=l.join("$$lit$$");(t=Nc.get(f))===void 0&&(l.raw=l,Nc.set(f,t=l)),n=s}return e(t,...n)},Il=Qm(Z);var j=class extends Ve{constructor(){super(...arguments),this.formControlController=new Fa(this,{form:e=>{if(e.hasAttribute("form")){const t=e.getRootNode(),n=e.getAttribute("form");return t.getElementById(n)}return e.closest("form")},assumeInteractionOn:["click"]}),this.hasSlotController=new mp(this,"[default]","prefix","suffix"),this.localize=new mo(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:ja}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink(),t=e?Lc`a`:Lc`button`;return Il`
      <${t}
        part="base"
        class=${kt({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${V(e?void 0:this.disabled)}
        type=${V(e?void 0:this.type)}
        title=${this.title}
        name=${V(e?void 0:this.name)}
        value=${V(e?void 0:this.value)}
        href=${V(e?this.href:void 0)}
        target=${V(e?this.target:void 0)}
        download=${V(e?this.download:void 0)}
        rel=${V(e?this.rel:void 0)}
        role=${V(e?void 0:"button")}
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
    `}};j.styles=Um;j.dependencies={"sl-icon":at,"sl-spinner":Pp};y([je(".button")],j.prototype,"button",2);y([Fe()],j.prototype,"hasFocus",2);y([Fe()],j.prototype,"invalid",2);y([k()],j.prototype,"title",2);y([k({reflect:!0})],j.prototype,"variant",2);y([k({reflect:!0})],j.prototype,"size",2);y([k({type:Boolean,reflect:!0})],j.prototype,"caret",2);y([k({type:Boolean,reflect:!0})],j.prototype,"disabled",2);y([k({type:Boolean,reflect:!0})],j.prototype,"loading",2);y([k({type:Boolean,reflect:!0})],j.prototype,"outline",2);y([k({type:Boolean,reflect:!0})],j.prototype,"pill",2);y([k({type:Boolean,reflect:!0})],j.prototype,"circle",2);y([k()],j.prototype,"type",2);y([k()],j.prototype,"name",2);y([k()],j.prototype,"value",2);y([k()],j.prototype,"href",2);y([k()],j.prototype,"target",2);y([k()],j.prototype,"rel",2);y([k()],j.prototype,"download",2);y([k()],j.prototype,"form",2);y([k({attribute:"formaction"})],j.prototype,"formAction",2);y([k({attribute:"formenctype"})],j.prototype,"formEnctype",2);y([k({attribute:"formmethod"})],j.prototype,"formMethod",2);y([k({attribute:"formnovalidate",type:Boolean})],j.prototype,"formNoValidate",2);y([k({attribute:"formtarget"})],j.prototype,"formTarget",2);y([gt("disabled",{waitUntilFirstUpdate:!0})],j.prototype,"handleDisabledChange",1);var Km=st`
  ${Pt}

  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,wo=class extends Ve{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(e){const t=Er(e.target);t==null||t.classList.add("sl-button-group__button--focus")}handleBlur(e){const t=Er(e.target);t==null||t.classList.remove("sl-button-group__button--focus")}handleMouseOver(e){const t=Er(e.target);t==null||t.classList.add("sl-button-group__button--hover")}handleMouseOut(e){const t=Er(e.target);t==null||t.classList.remove("sl-button-group__button--hover")}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})];e.forEach(t=>{const n=e.indexOf(t),r=Er(t);r&&(r.classList.add("sl-button-group__button"),r.classList.toggle("sl-button-group__button--first",n===0),r.classList.toggle("sl-button-group__button--inner",n>0&&n<e.length-1),r.classList.toggle("sl-button-group__button--last",n===e.length-1),r.classList.toggle("sl-button-group__button--radio",r.tagName.toLowerCase()==="sl-radio-button"))})}render(){return Z`
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
    `}};wo.styles=Km;y([je("slot")],wo.prototype,"defaultSlot",2);y([Fe()],wo.prototype,"disableRole",2);y([k()],wo.prototype,"label",2);function Er(e){var t;const n="sl-button, sl-radio-button";return(t=e.closest(n))!=null?t:e.querySelector(n)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tp="important",Gm=" !"+Tp,Lt=Va(class extends Ba{constructor(e){var t;if(super(e),e.type!==Mt.ATTRIBUTE||e.name!=="style"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{const r=e[n];return r==null?t:t+`${n=n.includes("-")?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(e,[t]){const{style:n}=e.element;if(this.ht===void 0){this.ht=new Set;for(const r in t)this.ht.add(r);return this.render(t)}this.ht.forEach(r=>{t[r]==null&&(this.ht.delete(r),r.includes("-")?n.removeProperty(r):n[r]="")});for(const r in t){const o=t[r];if(o!=null){this.ht.add(r);const i=typeof o=="string"&&o.endsWith(Gm);r.includes("-")||i?n.setProperty(r,i?o.slice(0,-11):o,i?Tp:""):n[r]=o}}return Ke}});function de(e,t){Ym(e)&&(e="100%");var n=Xm(e);return e=t===360?e:Math.min(t,Math.max(0,parseFloat(e))),n&&(e=parseInt(String(e*t),10)/100),Math.abs(e-t)<1e-6?1:(t===360?e=(e<0?e%t+t:e%t)/parseFloat(String(t)):e=e%t/parseFloat(String(t)),e)}function Bo(e){return Math.min(1,Math.max(0,e))}function Ym(e){return typeof e=="string"&&e.indexOf(".")!==-1&&parseFloat(e)===1}function Xm(e){return typeof e=="string"&&e.indexOf("%")!==-1}function Lp(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function Ho(e){return e<=1?"".concat(Number(e)*100,"%"):e}function vn(e){return e.length===1?"0"+e:String(e)}function qm(e,t,n){return{r:de(e,255)*255,g:de(t,255)*255,b:de(n,255)*255}}function Rc(e,t,n){e=de(e,255),t=de(t,255),n=de(n,255);var r=Math.max(e,t,n),o=Math.min(e,t,n),i=0,l=0,s=(r+o)/2;if(r===o)l=0,i=0;else{var a=r-o;switch(l=s>.5?a/(2-r-o):a/(r+o),r){case e:i=(t-n)/a+(t<n?6:0);break;case t:i=(n-e)/a+2;break;case n:i=(e-t)/a+4;break}i/=6}return{h:i,s:l,l:s}}function Fl(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*(6*n):n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Zm(e,t,n){var r,o,i;if(e=de(e,360),t=de(t,100),n=de(n,100),t===0)o=n,i=n,r=n;else{var l=n<.5?n*(1+t):n+t-n*t,s=2*n-l;r=Fl(s,l,e+1/3),o=Fl(s,l,e),i=Fl(s,l,e-1/3)}return{r:r*255,g:o*255,b:i*255}}function Mc(e,t,n){e=de(e,255),t=de(t,255),n=de(n,255);var r=Math.max(e,t,n),o=Math.min(e,t,n),i=0,l=r,s=r-o,a=r===0?0:s/r;if(r===o)i=0;else{switch(r){case e:i=(t-n)/s+(t<n?6:0);break;case t:i=(n-e)/s+2;break;case n:i=(e-t)/s+4;break}i/=6}return{h:i,s:a,v:l}}function Jm(e,t,n){e=de(e,360)*6,t=de(t,100),n=de(n,100);var r=Math.floor(e),o=e-r,i=n*(1-t),l=n*(1-o*t),s=n*(1-(1-o)*t),a=r%6,u=[n,l,i,i,s,n][a],p=[s,n,n,l,i,i][a],f=[i,i,s,n,n,l][a];return{r:u*255,g:p*255,b:f*255}}function Oc(e,t,n,r){var o=[vn(Math.round(e).toString(16)),vn(Math.round(t).toString(16)),vn(Math.round(n).toString(16))];return r&&o[0].startsWith(o[0].charAt(1))&&o[1].startsWith(o[1].charAt(1))&&o[2].startsWith(o[2].charAt(1))?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function ev(e,t,n,r,o){var i=[vn(Math.round(e).toString(16)),vn(Math.round(t).toString(16)),vn(Math.round(n).toString(16)),vn(tv(r))];return o&&i[0].startsWith(i[0].charAt(1))&&i[1].startsWith(i[1].charAt(1))&&i[2].startsWith(i[2].charAt(1))&&i[3].startsWith(i[3].charAt(1))?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0):i.join("")}function tv(e){return Math.round(parseFloat(e)*255).toString(16)}function Dc(e){return ze(e)/255}function ze(e){return parseInt(e,16)}function nv(e){return{r:e>>16,g:(e&65280)>>8,b:e&255}}var Bs={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function rv(e){var t={r:0,g:0,b:0},n=1,r=null,o=null,i=null,l=!1,s=!1;return typeof e=="string"&&(e=lv(e)),typeof e=="object"&&(mt(e.r)&&mt(e.g)&&mt(e.b)?(t=qm(e.r,e.g,e.b),l=!0,s=String(e.r).substr(-1)==="%"?"prgb":"rgb"):mt(e.h)&&mt(e.s)&&mt(e.v)?(r=Ho(e.s),o=Ho(e.v),t=Jm(e.h,r,o),l=!0,s="hsv"):mt(e.h)&&mt(e.s)&&mt(e.l)&&(r=Ho(e.s),i=Ho(e.l),t=Zm(e.h,r,i),l=!0,s="hsl"),Object.prototype.hasOwnProperty.call(e,"a")&&(n=e.a)),n=Lp(n),{ok:l,format:e.format||s,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:n}}var ov="[-\\+]?\\d+%?",iv="[-\\+]?\\d*\\.\\d+%?",Vt="(?:".concat(iv,")|(?:").concat(ov,")"),jl="[\\s|\\(]+(".concat(Vt,")[,|\\s]+(").concat(Vt,")[,|\\s]+(").concat(Vt,")\\s*\\)?"),Vl="[\\s|\\(]+(".concat(Vt,")[,|\\s]+(").concat(Vt,")[,|\\s]+(").concat(Vt,")[,|\\s]+(").concat(Vt,")\\s*\\)?"),et={CSS_UNIT:new RegExp(Vt),rgb:new RegExp("rgb"+jl),rgba:new RegExp("rgba"+Vl),hsl:new RegExp("hsl"+jl),hsla:new RegExp("hsla"+Vl),hsv:new RegExp("hsv"+jl),hsva:new RegExp("hsva"+Vl),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function lv(e){if(e=e.trim().toLowerCase(),e.length===0)return!1;var t=!1;if(Bs[e])e=Bs[e],t=!0;else if(e==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var n=et.rgb.exec(e);return n?{r:n[1],g:n[2],b:n[3]}:(n=et.rgba.exec(e),n?{r:n[1],g:n[2],b:n[3],a:n[4]}:(n=et.hsl.exec(e),n?{h:n[1],s:n[2],l:n[3]}:(n=et.hsla.exec(e),n?{h:n[1],s:n[2],l:n[3],a:n[4]}:(n=et.hsv.exec(e),n?{h:n[1],s:n[2],v:n[3]}:(n=et.hsva.exec(e),n?{h:n[1],s:n[2],v:n[3],a:n[4]}:(n=et.hex8.exec(e),n?{r:ze(n[1]),g:ze(n[2]),b:ze(n[3]),a:Dc(n[4]),format:t?"name":"hex8"}:(n=et.hex6.exec(e),n?{r:ze(n[1]),g:ze(n[2]),b:ze(n[3]),format:t?"name":"hex"}:(n=et.hex4.exec(e),n?{r:ze(n[1]+n[1]),g:ze(n[2]+n[2]),b:ze(n[3]+n[3]),a:Dc(n[4]+n[4]),format:t?"name":"hex8"}:(n=et.hex3.exec(e),n?{r:ze(n[1]+n[1]),g:ze(n[2]+n[2]),b:ze(n[3]+n[3]),format:t?"name":"hex"}:!1)))))))))}function mt(e){return!!et.CSS_UNIT.exec(String(e))}var Ic=function(){function e(t,n){t===void 0&&(t=""),n===void 0&&(n={});var r;if(t instanceof e)return t;typeof t=="number"&&(t=nv(t)),this.originalInput=t;var o=rv(t);this.originalInput=t,this.r=o.r,this.g=o.g,this.b=o.b,this.a=o.a,this.roundA=Math.round(100*this.a)/100,this.format=(r=n.format)!==null&&r!==void 0?r:o.format,this.gradientType=n.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=o.ok}return e.prototype.isDark=function(){return this.getBrightness()<128},e.prototype.isLight=function(){return!this.isDark()},e.prototype.getBrightness=function(){var t=this.toRgb();return(t.r*299+t.g*587+t.b*114)/1e3},e.prototype.getLuminance=function(){var t=this.toRgb(),n,r,o,i=t.r/255,l=t.g/255,s=t.b/255;return i<=.03928?n=i/12.92:n=Math.pow((i+.055)/1.055,2.4),l<=.03928?r=l/12.92:r=Math.pow((l+.055)/1.055,2.4),s<=.03928?o=s/12.92:o=Math.pow((s+.055)/1.055,2.4),.2126*n+.7152*r+.0722*o},e.prototype.getAlpha=function(){return this.a},e.prototype.setAlpha=function(t){return this.a=Lp(t),this.roundA=Math.round(100*this.a)/100,this},e.prototype.isMonochrome=function(){var t=this.toHsl().s;return t===0},e.prototype.toHsv=function(){var t=Mc(this.r,this.g,this.b);return{h:t.h*360,s:t.s,v:t.v,a:this.a}},e.prototype.toHsvString=function(){var t=Mc(this.r,this.g,this.b),n=Math.round(t.h*360),r=Math.round(t.s*100),o=Math.round(t.v*100);return this.a===1?"hsv(".concat(n,", ").concat(r,"%, ").concat(o,"%)"):"hsva(".concat(n,", ").concat(r,"%, ").concat(o,"%, ").concat(this.roundA,")")},e.prototype.toHsl=function(){var t=Rc(this.r,this.g,this.b);return{h:t.h*360,s:t.s,l:t.l,a:this.a}},e.prototype.toHslString=function(){var t=Rc(this.r,this.g,this.b),n=Math.round(t.h*360),r=Math.round(t.s*100),o=Math.round(t.l*100);return this.a===1?"hsl(".concat(n,", ").concat(r,"%, ").concat(o,"%)"):"hsla(".concat(n,", ").concat(r,"%, ").concat(o,"%, ").concat(this.roundA,")")},e.prototype.toHex=function(t){return t===void 0&&(t=!1),Oc(this.r,this.g,this.b,t)},e.prototype.toHexString=function(t){return t===void 0&&(t=!1),"#"+this.toHex(t)},e.prototype.toHex8=function(t){return t===void 0&&(t=!1),ev(this.r,this.g,this.b,this.a,t)},e.prototype.toHex8String=function(t){return t===void 0&&(t=!1),"#"+this.toHex8(t)},e.prototype.toHexShortString=function(t){return t===void 0&&(t=!1),this.a===1?this.toHexString(t):this.toHex8String(t)},e.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},e.prototype.toRgbString=function(){var t=Math.round(this.r),n=Math.round(this.g),r=Math.round(this.b);return this.a===1?"rgb(".concat(t,", ").concat(n,", ").concat(r,")"):"rgba(".concat(t,", ").concat(n,", ").concat(r,", ").concat(this.roundA,")")},e.prototype.toPercentageRgb=function(){var t=function(n){return"".concat(Math.round(de(n,255)*100),"%")};return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}},e.prototype.toPercentageRgbString=function(){var t=function(n){return Math.round(de(n,255)*100)};return this.a===1?"rgb(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%)"):"rgba(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%, ").concat(this.roundA,")")},e.prototype.toName=function(){if(this.a===0)return"transparent";if(this.a<1)return!1;for(var t="#"+Oc(this.r,this.g,this.b,!1),n=0,r=Object.entries(Bs);n<r.length;n++){var o=r[n],i=o[0],l=o[1];if(t===l)return i}return!1},e.prototype.toString=function(t){var n=!!t;t=t??this.format;var r=!1,o=this.a<1&&this.a>=0,i=!n&&o&&(t.startsWith("hex")||t==="name");return i?t==="name"&&this.a===0?this.toName():this.toRgbString():(t==="rgb"&&(r=this.toRgbString()),t==="prgb"&&(r=this.toPercentageRgbString()),(t==="hex"||t==="hex6")&&(r=this.toHexString()),t==="hex3"&&(r=this.toHexString(!0)),t==="hex4"&&(r=this.toHex8String(!0)),t==="hex8"&&(r=this.toHex8String()),t==="name"&&(r=this.toName()),t==="hsl"&&(r=this.toHslString()),t==="hsv"&&(r=this.toHsvString()),r||this.toHexString())},e.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},e.prototype.clone=function(){return new e(this.toString())},e.prototype.lighten=function(t){t===void 0&&(t=10);var n=this.toHsl();return n.l+=t/100,n.l=Bo(n.l),new e(n)},e.prototype.brighten=function(t){t===void 0&&(t=10);var n=this.toRgb();return n.r=Math.max(0,Math.min(255,n.r-Math.round(255*-(t/100)))),n.g=Math.max(0,Math.min(255,n.g-Math.round(255*-(t/100)))),n.b=Math.max(0,Math.min(255,n.b-Math.round(255*-(t/100)))),new e(n)},e.prototype.darken=function(t){t===void 0&&(t=10);var n=this.toHsl();return n.l-=t/100,n.l=Bo(n.l),new e(n)},e.prototype.tint=function(t){return t===void 0&&(t=10),this.mix("white",t)},e.prototype.shade=function(t){return t===void 0&&(t=10),this.mix("black",t)},e.prototype.desaturate=function(t){t===void 0&&(t=10);var n=this.toHsl();return n.s-=t/100,n.s=Bo(n.s),new e(n)},e.prototype.saturate=function(t){t===void 0&&(t=10);var n=this.toHsl();return n.s+=t/100,n.s=Bo(n.s),new e(n)},e.prototype.greyscale=function(){return this.desaturate(100)},e.prototype.spin=function(t){var n=this.toHsl(),r=(n.h+t)%360;return n.h=r<0?360+r:r,new e(n)},e.prototype.mix=function(t,n){n===void 0&&(n=50);var r=this.toRgb(),o=new e(t).toRgb(),i=n/100,l={r:(o.r-r.r)*i+r.r,g:(o.g-r.g)*i+r.g,b:(o.b-r.b)*i+r.b,a:(o.a-r.a)*i+r.a};return new e(l)},e.prototype.analogous=function(t,n){t===void 0&&(t=6),n===void 0&&(n=30);var r=this.toHsl(),o=360/n,i=[this];for(r.h=(r.h-(o*t>>1)+720)%360;--t;)r.h=(r.h+o)%360,i.push(new e(r));return i},e.prototype.complement=function(){var t=this.toHsl();return t.h=(t.h+180)%360,new e(t)},e.prototype.monochromatic=function(t){t===void 0&&(t=6);for(var n=this.toHsv(),r=n.h,o=n.s,i=n.v,l=[],s=1/t;t--;)l.push(new e({h:r,s:o,v:i})),i=(i+s)%1;return l},e.prototype.splitcomplement=function(){var t=this.toHsl(),n=t.h;return[this,new e({h:(n+72)%360,s:t.s,l:t.l}),new e({h:(n+216)%360,s:t.s,l:t.l})]},e.prototype.onBackground=function(t){var n=this.toRgb(),r=new e(t).toRgb(),o=n.a+r.a*(1-n.a);return new e({r:(n.r*n.a+r.r*r.a*(1-n.a))/o,g:(n.g*n.a+r.g*r.a*(1-n.a))/o,b:(n.b*n.a+r.b*r.a*(1-n.a))/o,a:o})},e.prototype.triad=function(){return this.polyad(3)},e.prototype.tetrad=function(){return this.polyad(4)},e.prototype.polyad=function(t){for(var n=this.toHsl(),r=n.h,o=[this],i=360/t,l=1;l<t;l++)o.push(new e({h:(r+l*i)%360,s:n.s,l:n.l}));return o},e.prototype.equals=function(t){return this.toRgbString()===new e(t).toRgbString()},e}(),Fc="EyeDropper"in window,O=class extends Ve{constructor(){super(),this.formControlController=new Fa(this),this.isSafeValue=!1,this.localize=new mo(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.handleFocusOut=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.input.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")})}handleFormatToggle(){const e=["hex","rgb","hsl","hsv"],t=(e.indexOf(this.format)+1)%e.length;this.format=e[t],this.setColor(this.value),this.emit("sl-change"),this.emit("sl-input")}handleAlphaDrag(e){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),n=t.querySelector(".color-picker__slider-handle"),{width:r}=t.getBoundingClientRect();let o=this.value;n.focus(),e.preventDefault(),Nl(t,{onMove:i=>{this.alpha=He(i/r*100,0,100),this.syncValues(),this.value!==o&&(o=this.value,this.emit("sl-change"),this.emit("sl-input"))},initialEvent:e})}handleHueDrag(e){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),n=t.querySelector(".color-picker__slider-handle"),{width:r}=t.getBoundingClientRect();let o=this.value;n.focus(),e.preventDefault(),Nl(t,{onMove:i=>{this.hue=He(i/r*360,0,360),this.syncValues(),this.value!==o&&(o=this.value,this.emit("sl-change"),this.emit("sl-input"))},initialEvent:e})}handleGridDrag(e){const t=this.shadowRoot.querySelector(".color-picker__grid"),n=t.querySelector(".color-picker__grid-handle"),{width:r,height:o}=t.getBoundingClientRect();let i=this.value;n.focus(),e.preventDefault(),this.isDraggingGridHandle=!0,Nl(t,{onMove:(l,s)=>{this.saturation=He(l/r*100,0,100),this.brightness=He(100-s/o*100,0,100),this.syncValues(),this.value!==i&&(i=this.value,this.emit("sl-change"),this.emit("sl-input"))},onStop:()=>this.isDraggingGridHandle=!1,initialEvent:e})}handleAlphaKeyDown(e){const t=e.shiftKey?10:1,n=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.alpha=He(this.alpha-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.alpha=He(this.alpha+t,0,100),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.alpha=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.alpha=100,this.syncValues()),this.value!==n&&(this.emit("sl-change"),this.emit("sl-input"))}handleHueKeyDown(e){const t=e.shiftKey?10:1,n=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.hue=He(this.hue-t,0,360),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.hue=He(this.hue+t,0,360),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.hue=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.hue=360,this.syncValues()),this.value!==n&&(this.emit("sl-change"),this.emit("sl-input"))}handleGridKeyDown(e){const t=e.shiftKey?10:1,n=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.saturation=He(this.saturation-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.saturation=He(this.saturation+t,0,100),this.syncValues()),e.key==="ArrowUp"&&(e.preventDefault(),this.brightness=He(this.brightness+t,0,100),this.syncValues()),e.key==="ArrowDown"&&(e.preventDefault(),this.brightness=He(this.brightness-t,0,100),this.syncValues()),this.value!==n&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputChange(e){const t=e.target,n=this.value;e.stopPropagation(),this.input.value?(this.setColor(t.value),t.value=this.value):this.value="",this.value!==n&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputInput(e){this.formControlController.updateValidity(),e.stopPropagation()}handleInputKeyDown(e){if(e.key==="Enter"){const t=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")),setTimeout(()=>this.input.select())):this.hue=0}}handleInputInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleTouchMove(e){e.preventDefault()}parseColor(e){const t=new Ic(e);if(!t.isValid)return null;const n=t.toHsl(),r={h:n.h,s:n.s*100,l:n.l*100,a:n.a},o=t.toRgb(),i=t.toHexString(),l=t.toHex8String(),s=t.toHsv(),a={h:s.h,s:s.s*100,v:s.v*100,a:s.a};return{hsl:{h:r.h,s:r.s,l:r.l,string:this.setLetterCase(`hsl(${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%)`)},hsla:{h:r.h,s:r.s,l:r.l,a:r.a,string:this.setLetterCase(`hsla(${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%, ${r.a.toFixed(2).toString()})`)},hsv:{h:a.h,s:a.s,v:a.v,string:this.setLetterCase(`hsv(${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.v)}%)`)},hsva:{h:a.h,s:a.s,v:a.v,a:a.a,string:this.setLetterCase(`hsva(${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.v)}%, ${a.a.toFixed(2).toString()})`)},rgb:{r:o.r,g:o.g,b:o.b,string:this.setLetterCase(`rgb(${Math.round(o.r)}, ${Math.round(o.g)}, ${Math.round(o.b)})`)},rgba:{r:o.r,g:o.g,b:o.b,a:o.a,string:this.setLetterCase(`rgba(${Math.round(o.r)}, ${Math.round(o.g)}, ${Math.round(o.b)}, ${o.a.toFixed(2).toString()})`)},hex:this.setLetterCase(i),hexa:this.setLetterCase(l)}}setColor(e){const t=this.parseColor(e);return t===null?!1:(this.hue=t.hsva.h,this.saturation=t.hsva.s,this.brightness=t.hsva.v,this.alpha=this.opacity?t.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(e){return typeof e!="string"?"":this.uppercase?e.toUpperCase():e.toLowerCase()}async syncValues(){const e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);e!==null&&(this.format==="hsl"?this.inputValue=this.opacity?e.hsla.string:e.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?e.rgba.string:e.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?e.hsva.string:e.hsv.string:this.inputValue=this.opacity?e.hexa:e.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){if(!Fc)return;new EyeDropper().open().then(t=>{const n=this.value;this.setColor(t.sRGBHex),this.value!==n&&(this.emit("sl-change"),this.emit("sl-input"))}).catch(()=>{})}selectSwatch(e){const t=this.value;this.disabled||(this.setColor(e),this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")))}getHexString(e,t,n,r=100){const o=new Ic(`hsva(${e}, ${t}, ${n}, ${r/100})`);return o.isValid?o.toHex8String():""}stopNestedEventPropagation(e){e.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(e,t){if(this.isEmpty=!t,t||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){const n=this.parseColor(t);n!==null?(this.inputValue=this.value,this.hue=n.hsva.h,this.saturation=n.hsva.s,this.brightness=n.hsva.v,this.alpha=n.hsva.a*100,this.syncValues()):this.inputValue=e??""}}focus(e){this.inline?this.base.focus(e):this.trigger.focus(e)}blur(){var e;const t=this.inline?this.base:this.trigger;this.hasFocus&&(t.focus({preventScroll:!0}),t.blur()),(e=this.dropdown)!=null&&e.open&&this.dropdown.hide()}getFormattedValue(e="hex"){const t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(t===null)return"";switch(e){case"hex":return t.hex;case"hexa":return t.hexa;case"rgb":return t.rgb.string;case"rgba":return t.rgba.string;case"hsl":return t.hsl.string;case"hsla":return t.hsla.string;case"hsv":return t.hsv.string;case"hsva":return t.hsva.string;default:return""}}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.inline&&!this.validity.valid?(this.dropdown.show(),this.addEventListener("sl-after-show",()=>this.input.reportValidity(),{once:!0}),this.disabled||this.formControlController.emitInvalidEvent(),!1):this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.saturation,t=100-this.brightness,n=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(o=>o.trim()!==""),r=Z`
      <div
        part="base"
        class=${kt({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled,"color-picker--focused":this.hasFocus})}
        aria-disabled=${this.disabled?"true":"false"}
        aria-labelledby="label"
        tabindex=${this.inline?"0":"-1"}
      >
        ${this.inline?Z`
              <sl-visually-hidden id="label">
                <slot name="label">${this.label}</slot>
              </sl-visually-hidden>
            `:null}

        <div
          part="grid"
          class="color-picker__grid"
          style=${Lt({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${kt({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${Lt({top:`${t}%`,left:`${e}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${V(this.disabled?void 0:"0")}
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
                style=${Lt({left:`${this.hue===0?0:100/(360/this.hue)}%`})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${V(this.disabled?void 0:"0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?Z`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${Lt({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="color-picker__slider-handle"
                      style=${Lt({left:`${this.alpha}%`})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${V(this.disabled?void 0:"0")}
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
            style=${Lt({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
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
            ${this.noFormatToggle?"":Z`
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
            ${Fc?Z`
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

        ${n.length>0?Z`
              <div part="swatches" class="color-picker__swatches">
                ${n.map(o=>{const i=this.parseColor(o);return i?Z`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${V(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${o}
                      @click=${()=>this.selectSwatch(o)}
                      @keydown=${l=>!this.disabled&&l.key==="Enter"&&this.setColor(i.hexa)}
                    >
                      <div
                        class="color-picker__swatch-color"
                        style=${Lt({backgroundColor:i.hexa})}
                      ></div>
                    </div>
                  `:(console.error(`Unable to parse swatch color: "${o}"`,this),"")})}
              </div>
            `:""}
      </div>
    `;return this.inline?r:Z`
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
          class=${kt({"color-dropdown__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":this.size==="small","color-dropdown__trigger--medium":this.size==="medium","color-dropdown__trigger--large":this.size==="large","color-dropdown__trigger--empty":this.isEmpty,"color-dropdown__trigger--focused":this.hasFocus,"color-picker__transparent-bg":!0})}
          style=${Lt({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${r}
      </sl-dropdown>
    `}};O.styles=Bm;O.dependencies={"sl-button-group":wo,"sl-button":j,"sl-dropdown":ke,"sl-icon":at,"sl-input":N,"sl-visually-hidden":dp};y([je('[part~="base"]')],O.prototype,"base",2);y([je('[part~="input"]')],O.prototype,"input",2);y([je(".color-dropdown")],O.prototype,"dropdown",2);y([je('[part~="preview"]')],O.prototype,"previewButton",2);y([je('[part~="trigger"]')],O.prototype,"trigger",2);y([Fe()],O.prototype,"hasFocus",2);y([Fe()],O.prototype,"isDraggingGridHandle",2);y([Fe()],O.prototype,"isEmpty",2);y([Fe()],O.prototype,"inputValue",2);y([Fe()],O.prototype,"hue",2);y([Fe()],O.prototype,"saturation",2);y([Fe()],O.prototype,"brightness",2);y([Fe()],O.prototype,"alpha",2);y([k()],O.prototype,"value",2);y([fp()],O.prototype,"defaultValue",2);y([k()],O.prototype,"label",2);y([k()],O.prototype,"format",2);y([k({type:Boolean,reflect:!0})],O.prototype,"inline",2);y([k({reflect:!0})],O.prototype,"size",2);y([k({attribute:"no-format-toggle",type:Boolean})],O.prototype,"noFormatToggle",2);y([k()],O.prototype,"name",2);y([k({type:Boolean,reflect:!0})],O.prototype,"disabled",2);y([k({type:Boolean})],O.prototype,"hoist",2);y([k({type:Boolean})],O.prototype,"opacity",2);y([k({type:Boolean})],O.prototype,"uppercase",2);y([k()],O.prototype,"swatches",2);y([k({reflect:!0})],O.prototype,"form",2);y([k({type:Boolean,reflect:!0})],O.prototype,"required",2);y([gt("format",{waitUntilFirstUpdate:!0})],O.prototype,"handleFormatChange",1);y([gt("opacity",{waitUntilFirstUpdate:!0})],O.prototype,"handleOpacityChange",1);y([gt("value")],O.prototype,"handleValueChange",1);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const sv=new Set(["children","localName","ref","style","className"]),jc=new WeakMap,av=(e,t,n,r,o)=>{const i=o==null?void 0:o[t];i===void 0||n===r?(e[t]=n,n==null&&t in HTMLElement.prototype&&e.removeAttribute(t)):((l,s,a)=>{let u=jc.get(l);u===void 0&&jc.set(l,u=new Map);let p=u.get(s);a!==void 0?p===void 0?(u.set(s,p={handleEvent:a}),l.addEventListener(s,p)):p.handleEvent=a:p!==void 0&&(u.delete(s),l.removeEventListener(s,p))})(e,i,n)},uv=({react:e,tagName:t,elementClass:n,events:r,displayName:o})=>{const i=new Set(Object.keys(r??{})),l=e.forwardRef((s,a)=>{const u=e.useRef(null),p=e.useRef(null),f={},g={};for(const[m,w]of Object.entries(s))sv.has(m)?f[m==="className"?"class":m]=w:i.has(m)||m in n.prototype?g[m]=w:f[m]=w;return e.useLayoutEffect(()=>{if(p.current!==null){for(const m in g)av(p.current,m,s[m],u.current?u.current[m]:void 0,r);u.current=s}}),e.useLayoutEffect(()=>{var m;(m=p.current)===null||m===void 0||m.removeAttribute("defer-hydration")},[]),f.suppressHydrationWarning=!0,e.createElement(t,{...f,ref:m=>{p.current=m,typeof a=="function"?a(m):a!==null&&(a.current=m)}})});return l.displayName=o??n.name,l};var cv="sl-color-picker";O.define("sl-color-picker");var dv=uv({tagName:cv,elementClass:O,react:Xp,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlColorPicker"}),fv=dv,pv={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};Fg(pv);const hv=document.getElementById("canvas"),Wn=hv.getContext("2d");function gv(){const[e,t]=Bt.useState(["#ff0000","","","#ffffff","#0000ff"]),[n,r]=Bt.useState(5),[o,i]=Bt.useState(5);function l(d){var v=d.target.files[0],_=new FileReader;_.onload=()=>{let S=Bc(_.result);t(S.map(C=>Vc(C))),r(S.length)},_.readAsText(v)}function s(d){let v=d.target.value;const _=new XMLHttpRequest;_.open("GET","./colormap/"+v+".rgb"),_.responseType="text",_.onload=()=>{let S=Bc(_.response);t(S.map(C=>Vc(C))),r(S.length)},_.send()}function a(){t(d=>["#ffffff",...d])}function u(d){let v=[...e];v.splice(d+1,0,""),v[v.length-1]==""&&(v[v.length-1]="#ffffff"),t(v),n<v.length&&r(v.length)}function p(d){if(e.length==2)return;let v=[...e];v.splice(d,1),v[0]==""&&(v[0]="#ffffff"),v[v.length-1]==""&&(v[v.length-1]="#ffffff"),t(v)}function f(d,v){let _=[...e];_.splice(v,1,d.target.value),_[0]==""&&(_[0]="#ffffff"),_[_.length-1]==""&&(_[_.length-1]="#ffffff"),t(_)}function g(d){if(d===0||d===e.length-1)return;let v=[...e];v.splice(d,1,""),t(v)}function m(d){if(d==0)return;let v=[...e];v[d-1]=v.splice(d,1,v[d-1])[0],v[0]==""&&(v[0]="#ffffff"),v[v.length-1]==""&&(v[v.length-1]="#ffffff"),t(v)}function w(d){if(d===e.length-1)return;let v=[...e];v[d+1]=v.splice(d,1,v[d+1])[0],v[0]==""&&(v[0]="#ffffff"),v[v.length-1]==""&&(v[v.length-1]="#ffffff"),t(v)}function b(d){const v=d.target.value<e.length?o:d.target.value;i(d.target.value),d.target.value=v,r(v)}const P=e.map((d,v)=>z.jsx(mv,{hex:d,rank:v+1,setBlankColor:()=>g(v),swapUp:()=>m(v),swapDown:()=>w(v),changeColor:_=>f(_,v),addColorDown:()=>u(v),delColor:()=>p(v)},v)),h=e.map(d=>bv(d)),c=wv(h,n);return vv(c),z.jsxs(z.Fragment,{children:[z.jsx("input",{type:"file",accept:".rgb",onChange:d=>{l(d)}}),z.jsx(sg,{changeMap:d=>s(d)}),z.jsx("hr",{}),z.jsxs("div",{children:[z.jsxs("div",{className:"selector",children:[z.jsx("label",{children:"n_output colors: "}),z.jsx("input",{type:"number",step:"1",value:o,onChange:d=>{b(d)},style:{width:"3em"}}),z.jsx("button",{className:"adjust_btn",onClick:a,children:"▼"}),z.jsx("br",{}),P]}),z.jsx(dg,{coloroutrgb:c})]})]})}function mv(e){return z.jsxs(z.Fragment,{children:[z.jsxs("span",{style:{display:"inline-block",width:"3em"},children:[e.rank,". "]}),z.jsx(fv,{className:"colorpicker",value:e.hex,onSlChange:(t,n)=>e.changeColor(t,n)}),z.jsx("button",{className:"adjust_btn",onClick:t=>e.setBlankColor(t),children:"#"}),z.jsx("button",{className:"adjust_btn",onClick:t=>e.swapUp(t),children:"↑"}),z.jsx("button",{className:"adjust_btn",onClick:t=>e.swapDown(t),children:"↓"}),z.jsx("button",{className:"adjust_btn",onClick:t=>e.addColorDown(t),children:"▼"}),z.jsx("button",{className:"adjust_btn",onClick:t=>e.delColor(t),children:"X"}),z.jsx("br",{})]})}function vv(e){Wn.clearRect(0,0,500,100),Wn.beginPath(),Wn.rect(50,30,400,40),Wn.stroke();for(let t=0;t<e.length;t++){const n="rgb("+e[t][0]+","+e[t][1]+","+e[t][2]+")",r=50+t*400/e.length;yv(n,r,30,400/e.length,40)}}function yv(e,t,n,r,o){Wn.fillStyle=e,Wn.fillRect(t,n,r,o)}function wv(e,t){const n=e.length;t=Math.max(t,n);const r=kv([n-1,t-1]),o=_v(t-1,n-1)+1,i=(n-1)/r,l=(t-1)/r,s=[],a=[];var u=0;for(let f=0;f<e.length-1;f++)if(e[f+1]){var p=1/l/(f-u+1);for(let g=0;g<l*(f-u+1);g++){const m=e[u][0]+(e[f+1][0]-e[u][0])*p*g,w=e[u][1]+(e[f+1][1]-e[u][1])*p*g,b=e[u][2]+(e[f+1][2]-e[u][2])*p*g;s.push([parseInt(m),parseInt(w),parseInt(b)])}u=f+1}s.push(e[e.length-1]);for(let f=0;f<o;f=f+i)a.push(s[f]);return a}function bv(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:null}var Ya=(e,t)=>t?Ya(t,e%t):e,_v=(e,t)=>e/Ya(e,t)*t,kv=e=>Ya(Math.max(...e),Math.min(...e));function Vc(e){let t=(+e[0]).toString(16),n=(+e[1]).toString(16),r=(+e[2]).toString(16);return t.length==1&&(t="0"+t),n.length==1&&(n="0"+n),r.length==1&&(r="0"+r),"#"+t+n+r}function Bc(e){const t=e.split(`
`),n=1e3,r=[];let o=0,i=-1;function l(a){return!isNaN(parseFloat(a))&&isFinite(a)}for(let a=0;a<t.length&&o<n;a++){let u=t[a].trim();u.length===0&&(u="#");const p=u.split(/\s+/);if(p.length>=3){let f=-1,g=-1,m=-1;l(p[0])&&(f=parseFloat(p[0])),l(p[1])&&(g=parseFloat(p[1])),l(p[2])&&(m=parseFloat(p[2]));let w=-1;if(p.length>3&&l(p[3])&&(w=parseFloat(p[3])),f>=0&&g>=0&&m>=0){let b=[f,g,m,w];r.push(b),o++,f>i&&(i=f),g>i&&(i=g),m>i&&(i=m)}}}const s=new Array(o).fill(null).map(()=>[0,0,0,0]);for(let a=0;a<o;a++)s[a]=r[a];if(i<=1)for(let a=0;a<o;a++){s[a][3]=s[a][3]<0?1:s[a][3];for(let u=0;u<3;u++)s[a][u]*=255}else if(i<256)for(let a=0;a<o;a++)s[a][3]=s[a][3]<0?255:s[a][3];else for(let a=0;a<o;a++){s[a][3]=s[a][3]<0?i:s[a][3];for(let u=0;u<3;u++)s[a][u]/=i,s[a][u]*=255}for(let a=0;a<o;a++)for(let u=0;u<3;u++)s[a][u]=Math.round(s[a][u]);return s}Bl.createRoot(document.getElementById("root")).render(z.jsx(Zc.StrictMode,{children:z.jsx(gv,{})}));
