function Zh(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function Jh(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ld={exports:{}},Xi={},sd={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var So=Symbol.for("react.element"),ef=Symbol.for("react.portal"),tf=Symbol.for("react.fragment"),nf=Symbol.for("react.strict_mode"),rf=Symbol.for("react.profiler"),of=Symbol.for("react.provider"),lf=Symbol.for("react.context"),sf=Symbol.for("react.forward_ref"),af=Symbol.for("react.suspense"),uf=Symbol.for("react.memo"),cf=Symbol.for("react.lazy"),mu=Symbol.iterator;function df(e){return e===null||typeof e!="object"?null:(e=mu&&e[mu]||e["@@iterator"],typeof e=="function"?e:null)}var ad={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ud=Object.assign,cd={};function xr(e,t,n){this.props=e,this.context=t,this.refs=cd,this.updater=n||ad}xr.prototype.isReactComponent={};xr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};xr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function dd(){}dd.prototype=xr.prototype;function ua(e,t,n){this.props=e,this.context=t,this.refs=cd,this.updater=n||ad}var ca=ua.prototype=new dd;ca.constructor=ua;ud(ca,xr.prototype);ca.isPureReactComponent=!0;var vu=Array.isArray,pd=Object.prototype.hasOwnProperty,da={current:null},hd={key:!0,ref:!0,__self:!0,__source:!0};function fd(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)pd.call(t,r)&&!hd.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:So,type:e,key:i,ref:l,props:o,_owner:da.current}}function pf(e,t){return{$$typeof:So,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function pa(e){return typeof e=="object"&&e!==null&&e.$$typeof===So}function hf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var yu=/\/+/g;function bl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?hf(""+e.key):t.toString(36)}function ri(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case So:case ef:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+bl(l,0):r,vu(o)?(n="",e!=null&&(n=e.replace(yu,"$&/")+"/"),ri(o,t,n,"",function(u){return u})):o!=null&&(pa(o)&&(o=pf(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(yu,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",vu(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+bl(i,a);l+=ri(i,t,n,s,o)}else if(s=df(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+bl(i,a++),l+=ri(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Oo(e,t,n){if(e==null)return e;var r=[],o=0;return ri(e,r,"","",function(i){return t.call(n,i,o++)}),r}function ff(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ee={current:null},oi={transition:null},gf={ReactCurrentDispatcher:Ee,ReactCurrentBatchConfig:oi,ReactCurrentOwner:da};I.Children={map:Oo,forEach:function(e,t,n){Oo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Oo(e,function(){t++}),t},toArray:function(e){return Oo(e,function(t){return t})||[]},only:function(e){if(!pa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Component=xr;I.Fragment=tf;I.Profiler=rf;I.PureComponent=ua;I.StrictMode=nf;I.Suspense=af;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gf;I.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ud({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=da.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)pd.call(t,s)&&!hd.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:So,type:e.type,key:o,ref:i,props:r,_owner:l}};I.createContext=function(e){return e={$$typeof:lf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:of,_context:e},e.Consumer=e};I.createElement=fd;I.createFactory=function(e){var t=fd.bind(null,e);return t.type=e,t};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:sf,render:e}};I.isValidElement=pa;I.lazy=function(e){return{$$typeof:cf,_payload:{_status:-1,_result:e},_init:ff}};I.memo=function(e,t){return{$$typeof:uf,type:e,compare:t===void 0?null:t}};I.startTransition=function(e){var t=oi.transition;oi.transition={};try{e()}finally{oi.transition=t}};I.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};I.useCallback=function(e,t){return Ee.current.useCallback(e,t)};I.useContext=function(e){return Ee.current.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e){return Ee.current.useDeferredValue(e)};I.useEffect=function(e,t){return Ee.current.useEffect(e,t)};I.useId=function(){return Ee.current.useId()};I.useImperativeHandle=function(e,t,n){return Ee.current.useImperativeHandle(e,t,n)};I.useInsertionEffect=function(e,t){return Ee.current.useInsertionEffect(e,t)};I.useLayoutEffect=function(e,t){return Ee.current.useLayoutEffect(e,t)};I.useMemo=function(e,t){return Ee.current.useMemo(e,t)};I.useReducer=function(e,t,n){return Ee.current.useReducer(e,t,n)};I.useRef=function(e){return Ee.current.useRef(e)};I.useState=function(e){return Ee.current.useState(e)};I.useSyncExternalStore=function(e,t,n){return Ee.current.useSyncExternalStore(e,t,n)};I.useTransition=function(){return Ee.current.useTransition()};I.version="18.2.0";sd.exports=I;var Ne=sd.exports;const gd=Jh(Ne),pn=Zh({__proto__:null,default:gd},[Ne]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mf=Ne,vf=Symbol.for("react.element"),yf=Symbol.for("react.fragment"),wf=Object.prototype.hasOwnProperty,bf=mf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_f={key:!0,ref:!0,__self:!0,__source:!0};function md(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)wf.call(t,r)&&!_f.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:vf,type:e,key:i,ref:l,props:o,_owner:bf.current}}Xi.Fragment=yf;Xi.jsx=md;Xi.jsxs=md;ld.exports=Xi;var T=ld.exports,ss={},vd={exports:{}},qe={},yd={exports:{}},wd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(A,M){var D=A.length;A.push(M);e:for(;0<D;){var oe=D-1>>>1,de=A[oe];if(0<o(de,M))A[oe]=M,A[D]=de,D=oe;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var M=A[0],D=A.pop();if(D!==M){A[0]=D;e:for(var oe=0,de=A.length,No=de>>>1;oe<No;){var vn=2*(oe+1)-1,wl=A[vn],yn=vn+1,Ro=A[yn];if(0>o(wl,D))yn<de&&0>o(Ro,wl)?(A[oe]=Ro,A[yn]=D,oe=yn):(A[oe]=wl,A[vn]=D,oe=vn);else if(yn<de&&0>o(Ro,D))A[oe]=Ro,A[yn]=D,oe=yn;else break e}}return M}function o(A,M){var D=A.sortIndex-M.sortIndex;return D!==0?D:A.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],u=[],p=1,d=null,f=3,v=!1,w=!1,b=!1,L=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(A){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=A)r(u),M.sortIndex=M.expirationTime,t(s,M);else break;M=n(u)}}function _(A){if(b=!1,g(A),!w)if(n(s)!==null)w=!0,Te(x);else{var M=n(u);M!==null&&Ve(_,M.startTime-A)}}function x(A,M){w=!1,b&&(b=!1,h(z),z=-1),v=!0;var D=f;try{for(g(M),d=n(s);d!==null&&(!(d.expirationTime>M)||A&&!le());){var oe=d.callback;if(typeof oe=="function"){d.callback=null,f=d.priorityLevel;var de=oe(d.expirationTime<=M);M=e.unstable_now(),typeof de=="function"?d.callback=de:d===n(s)&&r(s),g(M)}else r(s);d=n(s)}if(d!==null)var No=!0;else{var vn=n(u);vn!==null&&Ve(_,vn.startTime-M),No=!1}return No}finally{d=null,f=D,v=!1}}var C=!1,E=null,z=-1,V=5,R=-1;function le(){return!(e.unstable_now()-R<V)}function $(){if(E!==null){var A=e.unstable_now();R=A;var M=!0;try{M=E(!0,A)}finally{M?S():(C=!1,E=null)}}else C=!1}var S;if(typeof c=="function")S=function(){c($)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,X=F.port2;F.port1.onmessage=$,S=function(){X.postMessage(null)}}else S=function(){L($,0)};function Te(A){E=A,C||(C=!0,S())}function Ve(A,M){z=L(function(){A(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){w||v||(w=!0,Te(x))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(A){switch(f){case 1:case 2:case 3:var M=3;break;default:M=f}var D=f;f=M;try{return A()}finally{f=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,M){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var D=f;f=A;try{return M()}finally{f=D}},e.unstable_scheduleCallback=function(A,M,D){var oe=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?oe+D:oe):D=oe,A){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=D+de,A={id:p++,callback:M,priorityLevel:A,startTime:D,expirationTime:de,sortIndex:-1},D>oe?(A.sortIndex=D,t(u,A),n(s)===null&&A===n(u)&&(b?(h(z),z=-1):b=!0,Ve(_,D-oe))):(A.sortIndex=de,t(s,A),w||v||(w=!0,Te(x))),A},e.unstable_shouldYield=le,e.unstable_wrapCallback=function(A){var M=f;return function(){var D=f;f=M;try{return A.apply(this,arguments)}finally{f=D}}}})(wd);yd.exports=wd;var xf=yd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bd=Ne,Ye=xf;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _d=new Set,to={};function Fn(e,t){pr(e,t),pr(e+"Capture",t)}function pr(e,t){for(to[e]=t,e=0;e<t.length;e++)_d.add(t[e])}var Tt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),as=Object.prototype.hasOwnProperty,kf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,wu={},bu={};function Sf(e){return as.call(bu,e)?!0:as.call(wu,e)?!1:kf.test(e)?bu[e]=!0:(wu[e]=!0,!1)}function Cf(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ef(e,t,n,r){if(t===null||typeof t>"u"||Cf(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function $e(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var ye={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ye[e]=new $e(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ye[t]=new $e(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ye[e]=new $e(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ye[e]=new $e(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ye[e]=new $e(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ye[e]=new $e(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ye[e]=new $e(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ye[e]=new $e(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ye[e]=new $e(e,5,!1,e.toLowerCase(),null,!1,!1)});var ha=/[\-:]([a-z])/g;function fa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ha,fa);ye[t]=new $e(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ha,fa);ye[t]=new $e(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ha,fa);ye[t]=new $e(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ye[e]=new $e(e,1,!1,e.toLowerCase(),null,!1,!1)});ye.xlinkHref=new $e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ye[e]=new $e(e,1,!1,e.toLowerCase(),null,!0,!0)});function ga(e,t,n,r){var o=ye.hasOwnProperty(t)?ye[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ef(t,n,o,r)&&(n=null),r||o===null?Sf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Mt=bd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Mo=Symbol.for("react.element"),Un=Symbol.for("react.portal"),Wn=Symbol.for("react.fragment"),ma=Symbol.for("react.strict_mode"),us=Symbol.for("react.profiler"),xd=Symbol.for("react.provider"),kd=Symbol.for("react.context"),va=Symbol.for("react.forward_ref"),cs=Symbol.for("react.suspense"),ds=Symbol.for("react.suspense_list"),ya=Symbol.for("react.memo"),jt=Symbol.for("react.lazy"),Sd=Symbol.for("react.offscreen"),_u=Symbol.iterator;function zr(e){return e===null||typeof e!="object"?null:(e=_u&&e[_u]||e["@@iterator"],typeof e=="function"?e:null)}var te=Object.assign,_l;function Vr(e){if(_l===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);_l=t&&t[1]||""}return`
`+_l+e}var xl=!1;function kl(e,t){if(!e||xl)return"";xl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var s=`
`+o[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{xl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Vr(e):""}function $f(e){switch(e.tag){case 5:return Vr(e.type);case 16:return Vr("Lazy");case 13:return Vr("Suspense");case 19:return Vr("SuspenseList");case 0:case 2:case 15:return e=kl(e.type,!1),e;case 11:return e=kl(e.type.render,!1),e;case 1:return e=kl(e.type,!0),e;default:return""}}function ps(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Wn:return"Fragment";case Un:return"Portal";case us:return"Profiler";case ma:return"StrictMode";case cs:return"Suspense";case ds:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case kd:return(e.displayName||"Context")+".Consumer";case xd:return(e._context.displayName||"Context")+".Provider";case va:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ya:return t=e.displayName||null,t!==null?t:ps(e.type)||"Memo";case jt:t=e._payload,e=e._init;try{return ps(e(t))}catch{}}return null}function zf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ps(t);case 8:return t===ma?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ln(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Cd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Af(e){var t=Cd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Do(e){e._valueTracker||(e._valueTracker=Af(e))}function Ed(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Cd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function wi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function hs(e,t){var n=t.checked;return te({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function xu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ln(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function $d(e,t){t=t.checked,t!=null&&ga(e,"checked",t,!1)}function fs(e,t){$d(e,t);var n=ln(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?gs(e,t.type,n):t.hasOwnProperty("defaultValue")&&gs(e,t.type,ln(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ku(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function gs(e,t,n){(t!=="number"||wi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Hr=Array.isArray;function or(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ln(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ms(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return te({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Su(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(Hr(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ln(n)}}function zd(e,t){var n=ln(t.value),r=ln(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Cu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ad(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ad(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Fo,Pd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Fo=Fo||document.createElement("div"),Fo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Fo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function no(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Kr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pf=["Webkit","ms","Moz","O"];Object.keys(Kr).forEach(function(e){Pf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Kr[t]=Kr[e]})});function Td(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Kr.hasOwnProperty(e)&&Kr[e]?(""+t).trim():t+"px"}function Ld(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Td(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Tf=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ys(e,t){if(t){if(Tf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function ws(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bs=null;function wa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _s=null,ir=null,lr=null;function Eu(e){if(e=$o(e)){if(typeof _s!="function")throw Error(k(280));var t=e.stateNode;t&&(t=nl(t),_s(e.stateNode,e.type,t))}}function Nd(e){ir?lr?lr.push(e):lr=[e]:ir=e}function Rd(){if(ir){var e=ir,t=lr;if(lr=ir=null,Eu(e),t)for(e=0;e<t.length;e++)Eu(t[e])}}function Od(e,t){return e(t)}function Md(){}var Sl=!1;function Dd(e,t,n){if(Sl)return e(t,n);Sl=!0;try{return Od(e,t,n)}finally{Sl=!1,(ir!==null||lr!==null)&&(Md(),Rd())}}function ro(e,t){var n=e.stateNode;if(n===null)return null;var r=nl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var xs=!1;if(Tt)try{var Ar={};Object.defineProperty(Ar,"passive",{get:function(){xs=!0}}),window.addEventListener("test",Ar,Ar),window.removeEventListener("test",Ar,Ar)}catch{xs=!1}function Lf(e,t,n,r,o,i,l,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(p){this.onError(p)}}var Qr=!1,bi=null,_i=!1,ks=null,Nf={onError:function(e){Qr=!0,bi=e}};function Rf(e,t,n,r,o,i,l,a,s){Qr=!1,bi=null,Lf.apply(Nf,arguments)}function Of(e,t,n,r,o,i,l,a,s){if(Rf.apply(this,arguments),Qr){if(Qr){var u=bi;Qr=!1,bi=null}else throw Error(k(198));_i||(_i=!0,ks=u)}}function In(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Fd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function $u(e){if(In(e)!==e)throw Error(k(188))}function Mf(e){var t=e.alternate;if(!t){if(t=In(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return $u(o),e;if(i===r)return $u(o),t;i=i.sibling}throw Error(k(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function Id(e){return e=Mf(e),e!==null?Bd(e):null}function Bd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Bd(e);if(t!==null)return t;e=e.sibling}return null}var jd=Ye.unstable_scheduleCallback,zu=Ye.unstable_cancelCallback,Df=Ye.unstable_shouldYield,Ff=Ye.unstable_requestPaint,ie=Ye.unstable_now,If=Ye.unstable_getCurrentPriorityLevel,ba=Ye.unstable_ImmediatePriority,Vd=Ye.unstable_UserBlockingPriority,xi=Ye.unstable_NormalPriority,Bf=Ye.unstable_LowPriority,Hd=Ye.unstable_IdlePriority,Zi=null,_t=null;function jf(e){if(_t&&typeof _t.onCommitFiberRoot=="function")try{_t.onCommitFiberRoot(Zi,e,void 0,(e.current.flags&128)===128)}catch{}}var ft=Math.clz32?Math.clz32:Uf,Vf=Math.log,Hf=Math.LN2;function Uf(e){return e>>>=0,e===0?32:31-(Vf(e)/Hf|0)|0}var Io=64,Bo=4194304;function Ur(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ki(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~o;a!==0?r=Ur(a):(i&=l,i!==0&&(r=Ur(i)))}else l=n&~o,l!==0?r=Ur(l):i!==0&&(r=Ur(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ft(t),o=1<<n,r|=e[n],t&=~o;return r}function Wf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Kf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-ft(i),a=1<<l,s=o[l];s===-1?(!(a&n)||a&r)&&(o[l]=Wf(a,t)):s<=t&&(e.expiredLanes|=a),i&=~a}}function Ss(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ud(){var e=Io;return Io<<=1,!(Io&4194240)&&(Io=64),e}function Cl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Co(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ft(t),e[t]=n}function Qf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-ft(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function _a(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ft(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var W=0;function Wd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Kd,xa,Qd,Gd,Yd,Cs=!1,jo=[],Xt=null,Zt=null,Jt=null,oo=new Map,io=new Map,Ut=[],Gf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Au(e,t){switch(e){case"focusin":case"focusout":Xt=null;break;case"dragenter":case"dragleave":Zt=null;break;case"mouseover":case"mouseout":Jt=null;break;case"pointerover":case"pointerout":oo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":io.delete(t.pointerId)}}function Pr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=$o(t),t!==null&&xa(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Yf(e,t,n,r,o){switch(t){case"focusin":return Xt=Pr(Xt,e,t,n,r,o),!0;case"dragenter":return Zt=Pr(Zt,e,t,n,r,o),!0;case"mouseover":return Jt=Pr(Jt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return oo.set(i,Pr(oo.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,io.set(i,Pr(io.get(i)||null,e,t,n,r,o)),!0}return!1}function qd(e){var t=Sn(e.target);if(t!==null){var n=In(t);if(n!==null){if(t=n.tag,t===13){if(t=Fd(n),t!==null){e.blockedOn=t,Yd(e.priority,function(){Qd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ii(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Es(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);bs=r,n.target.dispatchEvent(r),bs=null}else return t=$o(n),t!==null&&xa(t),e.blockedOn=n,!1;t.shift()}return!0}function Pu(e,t,n){ii(e)&&n.delete(t)}function qf(){Cs=!1,Xt!==null&&ii(Xt)&&(Xt=null),Zt!==null&&ii(Zt)&&(Zt=null),Jt!==null&&ii(Jt)&&(Jt=null),oo.forEach(Pu),io.forEach(Pu)}function Tr(e,t){e.blockedOn===t&&(e.blockedOn=null,Cs||(Cs=!0,Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority,qf)))}function lo(e){function t(o){return Tr(o,e)}if(0<jo.length){Tr(jo[0],e);for(var n=1;n<jo.length;n++){var r=jo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Xt!==null&&Tr(Xt,e),Zt!==null&&Tr(Zt,e),Jt!==null&&Tr(Jt,e),oo.forEach(t),io.forEach(t),n=0;n<Ut.length;n++)r=Ut[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ut.length&&(n=Ut[0],n.blockedOn===null);)qd(n),n.blockedOn===null&&Ut.shift()}var sr=Mt.ReactCurrentBatchConfig,Si=!0;function Xf(e,t,n,r){var o=W,i=sr.transition;sr.transition=null;try{W=1,ka(e,t,n,r)}finally{W=o,sr.transition=i}}function Zf(e,t,n,r){var o=W,i=sr.transition;sr.transition=null;try{W=4,ka(e,t,n,r)}finally{W=o,sr.transition=i}}function ka(e,t,n,r){if(Si){var o=Es(e,t,n,r);if(o===null)Ol(e,t,r,Ci,n),Au(e,r);else if(Yf(o,e,t,n,r))r.stopPropagation();else if(Au(e,r),t&4&&-1<Gf.indexOf(e)){for(;o!==null;){var i=$o(o);if(i!==null&&Kd(i),i=Es(e,t,n,r),i===null&&Ol(e,t,r,Ci,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Ol(e,t,r,null,n)}}var Ci=null;function Es(e,t,n,r){if(Ci=null,e=wa(r),e=Sn(e),e!==null)if(t=In(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Fd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ci=e,null}function Xd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(If()){case ba:return 1;case Vd:return 4;case xi:case Bf:return 16;case Hd:return 536870912;default:return 16}default:return 16}}var Gt=null,Sa=null,li=null;function Zd(){if(li)return li;var e,t=Sa,n=t.length,r,o="value"in Gt?Gt.value:Gt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return li=o.slice(e,1<r?1-r:void 0)}function si(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Vo(){return!0}function Tu(){return!1}function Xe(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Vo:Tu,this.isPropagationStopped=Tu,this}return te(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Vo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Vo)},persist:function(){},isPersistent:Vo}),t}var kr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ca=Xe(kr),Eo=te({},kr,{view:0,detail:0}),Jf=Xe(Eo),El,$l,Lr,Ji=te({},Eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ea,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Lr&&(Lr&&e.type==="mousemove"?(El=e.screenX-Lr.screenX,$l=e.screenY-Lr.screenY):$l=El=0,Lr=e),El)},movementY:function(e){return"movementY"in e?e.movementY:$l}}),Lu=Xe(Ji),eg=te({},Ji,{dataTransfer:0}),tg=Xe(eg),ng=te({},Eo,{relatedTarget:0}),zl=Xe(ng),rg=te({},kr,{animationName:0,elapsedTime:0,pseudoElement:0}),og=Xe(rg),ig=te({},kr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),lg=Xe(ig),sg=te({},kr,{data:0}),Nu=Xe(sg),ag={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ug={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=cg[e])?!!t[e]:!1}function Ea(){return dg}var pg=te({},Eo,{key:function(e){if(e.key){var t=ag[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=si(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ug[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ea,charCode:function(e){return e.type==="keypress"?si(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?si(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),hg=Xe(pg),fg=te({},Ji,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ru=Xe(fg),gg=te({},Eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ea}),mg=Xe(gg),vg=te({},kr,{propertyName:0,elapsedTime:0,pseudoElement:0}),yg=Xe(vg),wg=te({},Ji,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),bg=Xe(wg),_g=[9,13,27,32],$a=Tt&&"CompositionEvent"in window,Gr=null;Tt&&"documentMode"in document&&(Gr=document.documentMode);var xg=Tt&&"TextEvent"in window&&!Gr,Jd=Tt&&(!$a||Gr&&8<Gr&&11>=Gr),Ou=String.fromCharCode(32),Mu=!1;function ep(e,t){switch(e){case"keyup":return _g.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Kn=!1;function kg(e,t){switch(e){case"compositionend":return tp(t);case"keypress":return t.which!==32?null:(Mu=!0,Ou);case"textInput":return e=t.data,e===Ou&&Mu?null:e;default:return null}}function Sg(e,t){if(Kn)return e==="compositionend"||!$a&&ep(e,t)?(e=Zd(),li=Sa=Gt=null,Kn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Jd&&t.locale!=="ko"?null:t.data;default:return null}}var Cg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Du(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Cg[e.type]:t==="textarea"}function np(e,t,n,r){Nd(r),t=Ei(t,"onChange"),0<t.length&&(n=new Ca("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Yr=null,so=null;function Eg(e){hp(e,0)}function el(e){var t=Yn(e);if(Ed(t))return e}function $g(e,t){if(e==="change")return t}var rp=!1;if(Tt){var Al;if(Tt){var Pl="oninput"in document;if(!Pl){var Fu=document.createElement("div");Fu.setAttribute("oninput","return;"),Pl=typeof Fu.oninput=="function"}Al=Pl}else Al=!1;rp=Al&&(!document.documentMode||9<document.documentMode)}function Iu(){Yr&&(Yr.detachEvent("onpropertychange",op),so=Yr=null)}function op(e){if(e.propertyName==="value"&&el(so)){var t=[];np(t,so,e,wa(e)),Dd(Eg,t)}}function zg(e,t,n){e==="focusin"?(Iu(),Yr=t,so=n,Yr.attachEvent("onpropertychange",op)):e==="focusout"&&Iu()}function Ag(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return el(so)}function Pg(e,t){if(e==="click")return el(t)}function Tg(e,t){if(e==="input"||e==="change")return el(t)}function Lg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var mt=typeof Object.is=="function"?Object.is:Lg;function ao(e,t){if(mt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!as.call(t,o)||!mt(e[o],t[o]))return!1}return!0}function Bu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ju(e,t){var n=Bu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Bu(n)}}function ip(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ip(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function lp(){for(var e=window,t=wi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=wi(e.document)}return t}function za(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ng(e){var t=lp(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ip(n.ownerDocument.documentElement,n)){if(r!==null&&za(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=ju(n,i);var l=ju(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Rg=Tt&&"documentMode"in document&&11>=document.documentMode,Qn=null,$s=null,qr=null,zs=!1;function Vu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zs||Qn==null||Qn!==wi(r)||(r=Qn,"selectionStart"in r&&za(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),qr&&ao(qr,r)||(qr=r,r=Ei($s,"onSelect"),0<r.length&&(t=new Ca("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Qn)))}function Ho(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Gn={animationend:Ho("Animation","AnimationEnd"),animationiteration:Ho("Animation","AnimationIteration"),animationstart:Ho("Animation","AnimationStart"),transitionend:Ho("Transition","TransitionEnd")},Tl={},sp={};Tt&&(sp=document.createElement("div").style,"AnimationEvent"in window||(delete Gn.animationend.animation,delete Gn.animationiteration.animation,delete Gn.animationstart.animation),"TransitionEvent"in window||delete Gn.transitionend.transition);function tl(e){if(Tl[e])return Tl[e];if(!Gn[e])return e;var t=Gn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in sp)return Tl[e]=t[n];return e}var ap=tl("animationend"),up=tl("animationiteration"),cp=tl("animationstart"),dp=tl("transitionend"),pp=new Map,Hu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hn(e,t){pp.set(e,t),Fn(t,[e])}for(var Ll=0;Ll<Hu.length;Ll++){var Nl=Hu[Ll],Og=Nl.toLowerCase(),Mg=Nl[0].toUpperCase()+Nl.slice(1);hn(Og,"on"+Mg)}hn(ap,"onAnimationEnd");hn(up,"onAnimationIteration");hn(cp,"onAnimationStart");hn("dblclick","onDoubleClick");hn("focusin","onFocus");hn("focusout","onBlur");hn(dp,"onTransitionEnd");pr("onMouseEnter",["mouseout","mouseover"]);pr("onMouseLeave",["mouseout","mouseover"]);pr("onPointerEnter",["pointerout","pointerover"]);pr("onPointerLeave",["pointerout","pointerover"]);Fn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wr));function Uu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Of(r,t,void 0,e),e.currentTarget=null}function hp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==i&&o.isPropagationStopped())break e;Uu(o,a,u),i=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,u=a.currentTarget,a=a.listener,s!==i&&o.isPropagationStopped())break e;Uu(o,a,u),i=s}}}if(_i)throw e=ks,_i=!1,ks=null,e}function Q(e,t){var n=t[Ns];n===void 0&&(n=t[Ns]=new Set);var r=e+"__bubble";n.has(r)||(fp(t,e,2,!1),n.add(r))}function Rl(e,t,n){var r=0;t&&(r|=4),fp(n,e,r,t)}var Uo="_reactListening"+Math.random().toString(36).slice(2);function uo(e){if(!e[Uo]){e[Uo]=!0,_d.forEach(function(n){n!=="selectionchange"&&(Dg.has(n)||Rl(n,!1,e),Rl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Uo]||(t[Uo]=!0,Rl("selectionchange",!1,t))}}function fp(e,t,n,r){switch(Xd(t)){case 1:var o=Xf;break;case 4:o=Zf;break;default:o=ka}n=o.bind(null,t,n,e),o=void 0,!xs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Ol(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;l=l.return}for(;a!==null;){if(l=Sn(a),l===null)return;if(s=l.tag,s===5||s===6){r=i=l;continue e}a=a.parentNode}}r=r.return}Dd(function(){var u=i,p=wa(n),d=[];e:{var f=pp.get(e);if(f!==void 0){var v=Ca,w=e;switch(e){case"keypress":if(si(n)===0)break e;case"keydown":case"keyup":v=hg;break;case"focusin":w="focus",v=zl;break;case"focusout":w="blur",v=zl;break;case"beforeblur":case"afterblur":v=zl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Lu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=tg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=mg;break;case ap:case up:case cp:v=og;break;case dp:v=yg;break;case"scroll":v=Jf;break;case"wheel":v=bg;break;case"copy":case"cut":case"paste":v=lg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Ru}var b=(t&4)!==0,L=!b&&e==="scroll",h=b?f!==null?f+"Capture":null:f;b=[];for(var c=u,g;c!==null;){g=c;var _=g.stateNode;if(g.tag===5&&_!==null&&(g=_,h!==null&&(_=ro(c,h),_!=null&&b.push(co(c,_,g)))),L)break;c=c.return}0<b.length&&(f=new v(f,w,null,n,p),d.push({event:f,listeners:b}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",f&&n!==bs&&(w=n.relatedTarget||n.fromElement)&&(Sn(w)||w[Lt]))break e;if((v||f)&&(f=p.window===p?p:(f=p.ownerDocument)?f.defaultView||f.parentWindow:window,v?(w=n.relatedTarget||n.toElement,v=u,w=w?Sn(w):null,w!==null&&(L=In(w),w!==L||w.tag!==5&&w.tag!==6)&&(w=null)):(v=null,w=u),v!==w)){if(b=Lu,_="onMouseLeave",h="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(b=Ru,_="onPointerLeave",h="onPointerEnter",c="pointer"),L=v==null?f:Yn(v),g=w==null?f:Yn(w),f=new b(_,c+"leave",v,n,p),f.target=L,f.relatedTarget=g,_=null,Sn(p)===u&&(b=new b(h,c+"enter",w,n,p),b.target=g,b.relatedTarget=L,_=b),L=_,v&&w)t:{for(b=v,h=w,c=0,g=b;g;g=Vn(g))c++;for(g=0,_=h;_;_=Vn(_))g++;for(;0<c-g;)b=Vn(b),c--;for(;0<g-c;)h=Vn(h),g--;for(;c--;){if(b===h||h!==null&&b===h.alternate)break t;b=Vn(b),h=Vn(h)}b=null}else b=null;v!==null&&Wu(d,f,v,b,!1),w!==null&&L!==null&&Wu(d,L,w,b,!0)}}e:{if(f=u?Yn(u):window,v=f.nodeName&&f.nodeName.toLowerCase(),v==="select"||v==="input"&&f.type==="file")var x=$g;else if(Du(f))if(rp)x=Tg;else{x=Ag;var C=zg}else(v=f.nodeName)&&v.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(x=Pg);if(x&&(x=x(e,u))){np(d,x,n,p);break e}C&&C(e,f,u),e==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&gs(f,"number",f.value)}switch(C=u?Yn(u):window,e){case"focusin":(Du(C)||C.contentEditable==="true")&&(Qn=C,$s=u,qr=null);break;case"focusout":qr=$s=Qn=null;break;case"mousedown":zs=!0;break;case"contextmenu":case"mouseup":case"dragend":zs=!1,Vu(d,n,p);break;case"selectionchange":if(Rg)break;case"keydown":case"keyup":Vu(d,n,p)}var E;if($a)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Kn?ep(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(Jd&&n.locale!=="ko"&&(Kn||z!=="onCompositionStart"?z==="onCompositionEnd"&&Kn&&(E=Zd()):(Gt=p,Sa="value"in Gt?Gt.value:Gt.textContent,Kn=!0)),C=Ei(u,z),0<C.length&&(z=new Nu(z,e,null,n,p),d.push({event:z,listeners:C}),E?z.data=E:(E=tp(n),E!==null&&(z.data=E)))),(E=xg?kg(e,n):Sg(e,n))&&(u=Ei(u,"onBeforeInput"),0<u.length&&(p=new Nu("onBeforeInput","beforeinput",null,n,p),d.push({event:p,listeners:u}),p.data=E))}hp(d,t)})}function co(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ei(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=ro(e,n),i!=null&&r.unshift(co(e,i,o)),i=ro(e,t),i!=null&&r.push(co(e,i,o))),e=e.return}return r}function Vn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Wu(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,o?(s=ro(n,i),s!=null&&l.unshift(co(n,s,a))):o||(s=ro(n,i),s!=null&&l.push(co(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Fg=/\r\n?/g,Ig=/\u0000|\uFFFD/g;function Ku(e){return(typeof e=="string"?e:""+e).replace(Fg,`
`).replace(Ig,"")}function Wo(e,t,n){if(t=Ku(t),Ku(e)!==t&&n)throw Error(k(425))}function $i(){}var As=null,Ps=null;function Ts(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ls=typeof setTimeout=="function"?setTimeout:void 0,Bg=typeof clearTimeout=="function"?clearTimeout:void 0,Qu=typeof Promise=="function"?Promise:void 0,jg=typeof queueMicrotask=="function"?queueMicrotask:typeof Qu<"u"?function(e){return Qu.resolve(null).then(e).catch(Vg)}:Ls;function Vg(e){setTimeout(function(){throw e})}function Ml(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),lo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);lo(t)}function en(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Gu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Sr=Math.random().toString(36).slice(2),bt="__reactFiber$"+Sr,po="__reactProps$"+Sr,Lt="__reactContainer$"+Sr,Ns="__reactEvents$"+Sr,Hg="__reactListeners$"+Sr,Ug="__reactHandles$"+Sr;function Sn(e){var t=e[bt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Lt]||n[bt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Gu(e);e!==null;){if(n=e[bt])return n;e=Gu(e)}return t}e=n,n=e.parentNode}return null}function $o(e){return e=e[bt]||e[Lt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Yn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function nl(e){return e[po]||null}var Rs=[],qn=-1;function fn(e){return{current:e}}function Y(e){0>qn||(e.current=Rs[qn],Rs[qn]=null,qn--)}function K(e,t){qn++,Rs[qn]=e.current,e.current=t}var sn={},xe=fn(sn),Oe=fn(!1),Tn=sn;function hr(e,t){var n=e.type.contextTypes;if(!n)return sn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Me(e){return e=e.childContextTypes,e!=null}function zi(){Y(Oe),Y(xe)}function Yu(e,t,n){if(xe.current!==sn)throw Error(k(168));K(xe,t),K(Oe,n)}function gp(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(k(108,zf(e)||"Unknown",o));return te({},n,r)}function Ai(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||sn,Tn=xe.current,K(xe,e),K(Oe,Oe.current),!0}function qu(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=gp(e,t,Tn),r.__reactInternalMemoizedMergedChildContext=e,Y(Oe),Y(xe),K(xe,e)):Y(Oe),K(Oe,n)}var Et=null,rl=!1,Dl=!1;function mp(e){Et===null?Et=[e]:Et.push(e)}function Wg(e){rl=!0,mp(e)}function gn(){if(!Dl&&Et!==null){Dl=!0;var e=0,t=W;try{var n=Et;for(W=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Et=null,rl=!1}catch(o){throw Et!==null&&(Et=Et.slice(e+1)),jd(ba,gn),o}finally{W=t,Dl=!1}}return null}var Xn=[],Zn=0,Pi=null,Ti=0,et=[],tt=0,Ln=null,zt=1,At="";function bn(e,t){Xn[Zn++]=Ti,Xn[Zn++]=Pi,Pi=e,Ti=t}function vp(e,t,n){et[tt++]=zt,et[tt++]=At,et[tt++]=Ln,Ln=e;var r=zt;e=At;var o=32-ft(r)-1;r&=~(1<<o),n+=1;var i=32-ft(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,zt=1<<32-ft(t)+o|n<<o|r,At=i+e}else zt=1<<i|n<<o|r,At=e}function Aa(e){e.return!==null&&(bn(e,1),vp(e,1,0))}function Pa(e){for(;e===Pi;)Pi=Xn[--Zn],Xn[Zn]=null,Ti=Xn[--Zn],Xn[Zn]=null;for(;e===Ln;)Ln=et[--tt],et[tt]=null,At=et[--tt],et[tt]=null,zt=et[--tt],et[tt]=null}var Qe=null,Ke=null,Z=!1,ht=null;function yp(e,t){var n=nt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Xu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Qe=e,Ke=en(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Qe=e,Ke=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ln!==null?{id:zt,overflow:At}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=nt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Qe=e,Ke=null,!0):!1;default:return!1}}function Os(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ms(e){if(Z){var t=Ke;if(t){var n=t;if(!Xu(e,t)){if(Os(e))throw Error(k(418));t=en(n.nextSibling);var r=Qe;t&&Xu(e,t)?yp(r,n):(e.flags=e.flags&-4097|2,Z=!1,Qe=e)}}else{if(Os(e))throw Error(k(418));e.flags=e.flags&-4097|2,Z=!1,Qe=e}}}function Zu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Qe=e}function Ko(e){if(e!==Qe)return!1;if(!Z)return Zu(e),Z=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ts(e.type,e.memoizedProps)),t&&(t=Ke)){if(Os(e))throw wp(),Error(k(418));for(;t;)yp(e,t),t=en(t.nextSibling)}if(Zu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ke=en(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ke=null}}else Ke=Qe?en(e.stateNode.nextSibling):null;return!0}function wp(){for(var e=Ke;e;)e=en(e.nextSibling)}function fr(){Ke=Qe=null,Z=!1}function Ta(e){ht===null?ht=[e]:ht.push(e)}var Kg=Mt.ReactCurrentBatchConfig;function dt(e,t){if(e&&e.defaultProps){t=te({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Li=fn(null),Ni=null,Jn=null,La=null;function Na(){La=Jn=Ni=null}function Ra(e){var t=Li.current;Y(Li),e._currentValue=t}function Ds(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ar(e,t){Ni=e,La=Jn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Re=!0),e.firstContext=null)}function it(e){var t=e._currentValue;if(La!==e)if(e={context:e,memoizedValue:t,next:null},Jn===null){if(Ni===null)throw Error(k(308));Jn=e,Ni.dependencies={lanes:0,firstContext:e}}else Jn=Jn.next=e;return t}var Cn=null;function Oa(e){Cn===null?Cn=[e]:Cn.push(e)}function bp(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Oa(t)):(n.next=o.next,o.next=n),t.interleaved=n,Nt(e,r)}function Nt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Vt=!1;function Ma(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _p(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Pt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function tn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,j&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Nt(e,n)}return o=r.interleaved,o===null?(t.next=t,Oa(r)):(t.next=o.next,o.next=t),r.interleaved=t,Nt(e,n)}function ai(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,_a(e,n)}}function Ju(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ri(e,t,n,r){var o=e.updateQueue;Vt=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,u=s.next;s.next=null,l===null?i=u:l.next=u,l=s;var p=e.alternate;p!==null&&(p=p.updateQueue,a=p.lastBaseUpdate,a!==l&&(a===null?p.firstBaseUpdate=u:a.next=u,p.lastBaseUpdate=s))}if(i!==null){var d=o.baseState;l=0,p=u=s=null,a=i;do{var f=a.lane,v=a.eventTime;if((r&f)===f){p!==null&&(p=p.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,b=a;switch(f=t,v=n,b.tag){case 1:if(w=b.payload,typeof w=="function"){d=w.call(v,d,f);break e}d=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=b.payload,f=typeof w=="function"?w.call(v,d,f):w,f==null)break e;d=te({},d,f);break e;case 2:Vt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=o.effects,f===null?o.effects=[a]:f.push(a))}else v={eventTime:v,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},p===null?(u=p=v,s=d):p=p.next=v,l|=f;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;f=a,a=f.next,f.next=null,o.lastBaseUpdate=f,o.shared.pending=null}}while(1);if(p===null&&(s=d),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Rn|=l,e.lanes=l,e.memoizedState=d}}function ec(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(k(191,o));o.call(r)}}}var xp=new bd.Component().refs;function Fs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:te({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ol={isMounted:function(e){return(e=e._reactInternals)?In(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ce(),o=rn(e),i=Pt(r,o);i.payload=t,n!=null&&(i.callback=n),t=tn(e,i,o),t!==null&&(gt(t,e,o,r),ai(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ce(),o=rn(e),i=Pt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=tn(e,i,o),t!==null&&(gt(t,e,o,r),ai(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ce(),r=rn(e),o=Pt(n,r);o.tag=2,t!=null&&(o.callback=t),t=tn(e,o,r),t!==null&&(gt(t,e,r,n),ai(t,e,r))}};function tc(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!ao(n,r)||!ao(o,i):!0}function kp(e,t,n){var r=!1,o=sn,i=t.contextType;return typeof i=="object"&&i!==null?i=it(i):(o=Me(t)?Tn:xe.current,r=t.contextTypes,i=(r=r!=null)?hr(e,o):sn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ol,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function nc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ol.enqueueReplaceState(t,t.state,null)}function Is(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=xp,Ma(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=it(i):(i=Me(t)?Tn:xe.current,o.context=hr(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Fs(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&ol.enqueueReplaceState(o,o.state,null),Ri(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Nr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=o.refs;a===xp&&(a=o.refs={}),l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function Qo(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function rc(e){var t=e._init;return t(e._payload)}function Sp(e){function t(h,c){if(e){var g=h.deletions;g===null?(h.deletions=[c],h.flags|=16):g.push(c)}}function n(h,c){if(!e)return null;for(;c!==null;)t(h,c),c=c.sibling;return null}function r(h,c){for(h=new Map;c!==null;)c.key!==null?h.set(c.key,c):h.set(c.index,c),c=c.sibling;return h}function o(h,c){return h=on(h,c),h.index=0,h.sibling=null,h}function i(h,c,g){return h.index=g,e?(g=h.alternate,g!==null?(g=g.index,g<c?(h.flags|=2,c):g):(h.flags|=2,c)):(h.flags|=1048576,c)}function l(h){return e&&h.alternate===null&&(h.flags|=2),h}function a(h,c,g,_){return c===null||c.tag!==6?(c=Ul(g,h.mode,_),c.return=h,c):(c=o(c,g),c.return=h,c)}function s(h,c,g,_){var x=g.type;return x===Wn?p(h,c,g.props.children,_,g.key):c!==null&&(c.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===jt&&rc(x)===c.type)?(_=o(c,g.props),_.ref=Nr(h,c,g),_.return=h,_):(_=fi(g.type,g.key,g.props,null,h.mode,_),_.ref=Nr(h,c,g),_.return=h,_)}function u(h,c,g,_){return c===null||c.tag!==4||c.stateNode.containerInfo!==g.containerInfo||c.stateNode.implementation!==g.implementation?(c=Wl(g,h.mode,_),c.return=h,c):(c=o(c,g.children||[]),c.return=h,c)}function p(h,c,g,_,x){return c===null||c.tag!==7?(c=Pn(g,h.mode,_,x),c.return=h,c):(c=o(c,g),c.return=h,c)}function d(h,c,g){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Ul(""+c,h.mode,g),c.return=h,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Mo:return g=fi(c.type,c.key,c.props,null,h.mode,g),g.ref=Nr(h,null,c),g.return=h,g;case Un:return c=Wl(c,h.mode,g),c.return=h,c;case jt:var _=c._init;return d(h,_(c._payload),g)}if(Hr(c)||zr(c))return c=Pn(c,h.mode,g,null),c.return=h,c;Qo(h,c)}return null}function f(h,c,g,_){var x=c!==null?c.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return x!==null?null:a(h,c,""+g,_);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Mo:return g.key===x?s(h,c,g,_):null;case Un:return g.key===x?u(h,c,g,_):null;case jt:return x=g._init,f(h,c,x(g._payload),_)}if(Hr(g)||zr(g))return x!==null?null:p(h,c,g,_,null);Qo(h,g)}return null}function v(h,c,g,_,x){if(typeof _=="string"&&_!==""||typeof _=="number")return h=h.get(g)||null,a(c,h,""+_,x);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Mo:return h=h.get(_.key===null?g:_.key)||null,s(c,h,_,x);case Un:return h=h.get(_.key===null?g:_.key)||null,u(c,h,_,x);case jt:var C=_._init;return v(h,c,g,C(_._payload),x)}if(Hr(_)||zr(_))return h=h.get(g)||null,p(c,h,_,x,null);Qo(c,_)}return null}function w(h,c,g,_){for(var x=null,C=null,E=c,z=c=0,V=null;E!==null&&z<g.length;z++){E.index>z?(V=E,E=null):V=E.sibling;var R=f(h,E,g[z],_);if(R===null){E===null&&(E=V);break}e&&E&&R.alternate===null&&t(h,E),c=i(R,c,z),C===null?x=R:C.sibling=R,C=R,E=V}if(z===g.length)return n(h,E),Z&&bn(h,z),x;if(E===null){for(;z<g.length;z++)E=d(h,g[z],_),E!==null&&(c=i(E,c,z),C===null?x=E:C.sibling=E,C=E);return Z&&bn(h,z),x}for(E=r(h,E);z<g.length;z++)V=v(E,h,z,g[z],_),V!==null&&(e&&V.alternate!==null&&E.delete(V.key===null?z:V.key),c=i(V,c,z),C===null?x=V:C.sibling=V,C=V);return e&&E.forEach(function(le){return t(h,le)}),Z&&bn(h,z),x}function b(h,c,g,_){var x=zr(g);if(typeof x!="function")throw Error(k(150));if(g=x.call(g),g==null)throw Error(k(151));for(var C=x=null,E=c,z=c=0,V=null,R=g.next();E!==null&&!R.done;z++,R=g.next()){E.index>z?(V=E,E=null):V=E.sibling;var le=f(h,E,R.value,_);if(le===null){E===null&&(E=V);break}e&&E&&le.alternate===null&&t(h,E),c=i(le,c,z),C===null?x=le:C.sibling=le,C=le,E=V}if(R.done)return n(h,E),Z&&bn(h,z),x;if(E===null){for(;!R.done;z++,R=g.next())R=d(h,R.value,_),R!==null&&(c=i(R,c,z),C===null?x=R:C.sibling=R,C=R);return Z&&bn(h,z),x}for(E=r(h,E);!R.done;z++,R=g.next())R=v(E,h,z,R.value,_),R!==null&&(e&&R.alternate!==null&&E.delete(R.key===null?z:R.key),c=i(R,c,z),C===null?x=R:C.sibling=R,C=R);return e&&E.forEach(function($){return t(h,$)}),Z&&bn(h,z),x}function L(h,c,g,_){if(typeof g=="object"&&g!==null&&g.type===Wn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Mo:e:{for(var x=g.key,C=c;C!==null;){if(C.key===x){if(x=g.type,x===Wn){if(C.tag===7){n(h,C.sibling),c=o(C,g.props.children),c.return=h,h=c;break e}}else if(C.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===jt&&rc(x)===C.type){n(h,C.sibling),c=o(C,g.props),c.ref=Nr(h,C,g),c.return=h,h=c;break e}n(h,C);break}else t(h,C);C=C.sibling}g.type===Wn?(c=Pn(g.props.children,h.mode,_,g.key),c.return=h,h=c):(_=fi(g.type,g.key,g.props,null,h.mode,_),_.ref=Nr(h,c,g),_.return=h,h=_)}return l(h);case Un:e:{for(C=g.key;c!==null;){if(c.key===C)if(c.tag===4&&c.stateNode.containerInfo===g.containerInfo&&c.stateNode.implementation===g.implementation){n(h,c.sibling),c=o(c,g.children||[]),c.return=h,h=c;break e}else{n(h,c);break}else t(h,c);c=c.sibling}c=Wl(g,h.mode,_),c.return=h,h=c}return l(h);case jt:return C=g._init,L(h,c,C(g._payload),_)}if(Hr(g))return w(h,c,g,_);if(zr(g))return b(h,c,g,_);Qo(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,c!==null&&c.tag===6?(n(h,c.sibling),c=o(c,g),c.return=h,h=c):(n(h,c),c=Ul(g,h.mode,_),c.return=h,h=c),l(h)):n(h,c)}return L}var gr=Sp(!0),Cp=Sp(!1),zo={},xt=fn(zo),ho=fn(zo),fo=fn(zo);function En(e){if(e===zo)throw Error(k(174));return e}function Da(e,t){switch(K(fo,t),K(ho,e),K(xt,zo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:vs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=vs(t,e)}Y(xt),K(xt,t)}function mr(){Y(xt),Y(ho),Y(fo)}function Ep(e){En(fo.current);var t=En(xt.current),n=vs(t,e.type);t!==n&&(K(ho,e),K(xt,n))}function Fa(e){ho.current===e&&(Y(xt),Y(ho))}var J=fn(0);function Oi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Fl=[];function Ia(){for(var e=0;e<Fl.length;e++)Fl[e]._workInProgressVersionPrimary=null;Fl.length=0}var ui=Mt.ReactCurrentDispatcher,Il=Mt.ReactCurrentBatchConfig,Nn=0,ee=null,ue=null,pe=null,Mi=!1,Xr=!1,go=0,Qg=0;function we(){throw Error(k(321))}function Ba(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!mt(e[n],t[n]))return!1;return!0}function ja(e,t,n,r,o,i){if(Nn=i,ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ui.current=e===null||e.memoizedState===null?Xg:Zg,e=n(r,o),Xr){i=0;do{if(Xr=!1,go=0,25<=i)throw Error(k(301));i+=1,pe=ue=null,t.updateQueue=null,ui.current=Jg,e=n(r,o)}while(Xr)}if(ui.current=Di,t=ue!==null&&ue.next!==null,Nn=0,pe=ue=ee=null,Mi=!1,t)throw Error(k(300));return e}function Va(){var e=go!==0;return go=0,e}function wt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pe===null?ee.memoizedState=pe=e:pe=pe.next=e,pe}function lt(){if(ue===null){var e=ee.alternate;e=e!==null?e.memoizedState:null}else e=ue.next;var t=pe===null?ee.memoizedState:pe.next;if(t!==null)pe=t,ue=e;else{if(e===null)throw Error(k(310));ue=e,e={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},pe===null?ee.memoizedState=pe=e:pe=pe.next=e}return pe}function mo(e,t){return typeof t=="function"?t(e):t}function Bl(e){var t=lt(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=ue,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,s=null,u=i;do{var p=u.lane;if((Nn&p)===p)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=d,l=r):s=s.next=d,ee.lanes|=p,Rn|=p}u=u.next}while(u!==null&&u!==i);s===null?l=r:s.next=a,mt(r,t.memoizedState)||(Re=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,ee.lanes|=i,Rn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function jl(e){var t=lt(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);mt(i,t.memoizedState)||(Re=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function $p(){}function zp(e,t){var n=ee,r=lt(),o=t(),i=!mt(r.memoizedState,o);if(i&&(r.memoizedState=o,Re=!0),r=r.queue,Ha(Tp.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||pe!==null&&pe.memoizedState.tag&1){if(n.flags|=2048,vo(9,Pp.bind(null,n,r,o,t),void 0,null),he===null)throw Error(k(349));Nn&30||Ap(n,t,o)}return o}function Ap(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ee.updateQueue,t===null?(t={lastEffect:null,stores:null},ee.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Pp(e,t,n,r){t.value=n,t.getSnapshot=r,Lp(t)&&Np(e)}function Tp(e,t,n){return n(function(){Lp(t)&&Np(e)})}function Lp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!mt(e,n)}catch{return!0}}function Np(e){var t=Nt(e,1);t!==null&&gt(t,e,1,-1)}function oc(e){var t=wt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:mo,lastRenderedState:e},t.queue=e,e=e.dispatch=qg.bind(null,ee,e),[t.memoizedState,e]}function vo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ee.updateQueue,t===null?(t={lastEffect:null,stores:null},ee.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Rp(){return lt().memoizedState}function ci(e,t,n,r){var o=wt();ee.flags|=e,o.memoizedState=vo(1|t,n,void 0,r===void 0?null:r)}function il(e,t,n,r){var o=lt();r=r===void 0?null:r;var i=void 0;if(ue!==null){var l=ue.memoizedState;if(i=l.destroy,r!==null&&Ba(r,l.deps)){o.memoizedState=vo(t,n,i,r);return}}ee.flags|=e,o.memoizedState=vo(1|t,n,i,r)}function ic(e,t){return ci(8390656,8,e,t)}function Ha(e,t){return il(2048,8,e,t)}function Op(e,t){return il(4,2,e,t)}function Mp(e,t){return il(4,4,e,t)}function Dp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Fp(e,t,n){return n=n!=null?n.concat([e]):null,il(4,4,Dp.bind(null,t,e),n)}function Ua(){}function Ip(e,t){var n=lt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ba(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Bp(e,t){var n=lt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ba(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function jp(e,t,n){return Nn&21?(mt(n,t)||(n=Ud(),ee.lanes|=n,Rn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Re=!0),e.memoizedState=n)}function Gg(e,t){var n=W;W=n!==0&&4>n?n:4,e(!0);var r=Il.transition;Il.transition={};try{e(!1),t()}finally{W=n,Il.transition=r}}function Vp(){return lt().memoizedState}function Yg(e,t,n){var r=rn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Hp(e))Up(t,n);else if(n=bp(e,t,n,r),n!==null){var o=Ce();gt(n,e,r,o),Wp(n,t,r)}}function qg(e,t,n){var r=rn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Hp(e))Up(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(o.hasEagerState=!0,o.eagerState=a,mt(a,l)){var s=t.interleaved;s===null?(o.next=o,Oa(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=bp(e,t,o,r),n!==null&&(o=Ce(),gt(n,e,r,o),Wp(n,t,r))}}function Hp(e){var t=e.alternate;return e===ee||t!==null&&t===ee}function Up(e,t){Xr=Mi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Wp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,_a(e,n)}}var Di={readContext:it,useCallback:we,useContext:we,useEffect:we,useImperativeHandle:we,useInsertionEffect:we,useLayoutEffect:we,useMemo:we,useReducer:we,useRef:we,useState:we,useDebugValue:we,useDeferredValue:we,useTransition:we,useMutableSource:we,useSyncExternalStore:we,useId:we,unstable_isNewReconciler:!1},Xg={readContext:it,useCallback:function(e,t){return wt().memoizedState=[e,t===void 0?null:t],e},useContext:it,useEffect:ic,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ci(4194308,4,Dp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ci(4194308,4,e,t)},useInsertionEffect:function(e,t){return ci(4,2,e,t)},useMemo:function(e,t){var n=wt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=wt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Yg.bind(null,ee,e),[r.memoizedState,e]},useRef:function(e){var t=wt();return e={current:e},t.memoizedState=e},useState:oc,useDebugValue:Ua,useDeferredValue:function(e){return wt().memoizedState=e},useTransition:function(){var e=oc(!1),t=e[0];return e=Gg.bind(null,e[1]),wt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ee,o=wt();if(Z){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),he===null)throw Error(k(349));Nn&30||Ap(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,ic(Tp.bind(null,r,i,e),[e]),r.flags|=2048,vo(9,Pp.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=wt(),t=he.identifierPrefix;if(Z){var n=At,r=zt;n=(r&~(1<<32-ft(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=go++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Qg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Zg={readContext:it,useCallback:Ip,useContext:it,useEffect:Ha,useImperativeHandle:Fp,useInsertionEffect:Op,useLayoutEffect:Mp,useMemo:Bp,useReducer:Bl,useRef:Rp,useState:function(){return Bl(mo)},useDebugValue:Ua,useDeferredValue:function(e){var t=lt();return jp(t,ue.memoizedState,e)},useTransition:function(){var e=Bl(mo)[0],t=lt().memoizedState;return[e,t]},useMutableSource:$p,useSyncExternalStore:zp,useId:Vp,unstable_isNewReconciler:!1},Jg={readContext:it,useCallback:Ip,useContext:it,useEffect:Ha,useImperativeHandle:Fp,useInsertionEffect:Op,useLayoutEffect:Mp,useMemo:Bp,useReducer:jl,useRef:Rp,useState:function(){return jl(mo)},useDebugValue:Ua,useDeferredValue:function(e){var t=lt();return ue===null?t.memoizedState=e:jp(t,ue.memoizedState,e)},useTransition:function(){var e=jl(mo)[0],t=lt().memoizedState;return[e,t]},useMutableSource:$p,useSyncExternalStore:zp,useId:Vp,unstable_isNewReconciler:!1};function vr(e,t){try{var n="",r=t;do n+=$f(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Vl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Bs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var em=typeof WeakMap=="function"?WeakMap:Map;function Kp(e,t,n){n=Pt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ii||(Ii=!0,qs=r),Bs(e,t)},n}function Qp(e,t,n){n=Pt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Bs(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Bs(e,t),typeof r!="function"&&(nn===null?nn=new Set([this]):nn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function lc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new em;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=fm.bind(null,e,t,n),t.then(e,e))}function sc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ac(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Pt(-1,1),t.tag=2,tn(n,t,1))),n.lanes|=1),e)}var tm=Mt.ReactCurrentOwner,Re=!1;function Se(e,t,n,r){t.child=e===null?Cp(t,null,n,r):gr(t,e.child,n,r)}function uc(e,t,n,r,o){n=n.render;var i=t.ref;return ar(t,o),r=ja(e,t,n,r,i,o),n=Va(),e!==null&&!Re?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Rt(e,t,o)):(Z&&n&&Aa(t),t.flags|=1,Se(e,t,r,o),t.child)}function cc(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Za(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Gp(e,t,i,r,o)):(e=fi(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:ao,n(l,r)&&e.ref===t.ref)return Rt(e,t,o)}return t.flags|=1,e=on(i,r),e.ref=t.ref,e.return=t,t.child=e}function Gp(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(ao(i,r)&&e.ref===t.ref)if(Re=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Re=!0);else return t.lanes=e.lanes,Rt(e,t,o)}return js(e,t,n,r,o)}function Yp(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},K(tr,Ue),Ue|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,K(tr,Ue),Ue|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,K(tr,Ue),Ue|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,K(tr,Ue),Ue|=r;return Se(e,t,o,n),t.child}function qp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function js(e,t,n,r,o){var i=Me(n)?Tn:xe.current;return i=hr(t,i),ar(t,o),n=ja(e,t,n,r,i,o),r=Va(),e!==null&&!Re?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Rt(e,t,o)):(Z&&r&&Aa(t),t.flags|=1,Se(e,t,n,o),t.child)}function dc(e,t,n,r,o){if(Me(n)){var i=!0;Ai(t)}else i=!1;if(ar(t,o),t.stateNode===null)di(e,t),kp(t,n,r),Is(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=it(u):(u=Me(n)?Tn:xe.current,u=hr(t,u));var p=n.getDerivedStateFromProps,d=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function";d||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==u)&&nc(t,l,r,u),Vt=!1;var f=t.memoizedState;l.state=f,Ri(t,r,l,o),s=t.memoizedState,a!==r||f!==s||Oe.current||Vt?(typeof p=="function"&&(Fs(t,n,p,r),s=t.memoizedState),(a=Vt||tc(t,n,a,r,f,s,u))?(d||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,_p(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:dt(t.type,a),l.props=u,d=t.pendingProps,f=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=it(s):(s=Me(n)?Tn:xe.current,s=hr(t,s));var v=n.getDerivedStateFromProps;(p=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==d||f!==s)&&nc(t,l,r,s),Vt=!1,f=t.memoizedState,l.state=f,Ri(t,r,l,o);var w=t.memoizedState;a!==d||f!==w||Oe.current||Vt?(typeof v=="function"&&(Fs(t,n,v,r),w=t.memoizedState),(u=Vt||tc(t,n,u,r,f,w,s)||!1)?(p||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,w,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,w,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),l.props=r,l.state=w,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Vs(e,t,n,r,i,o)}function Vs(e,t,n,r,o,i){qp(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&qu(t,n,!1),Rt(e,t,i);r=t.stateNode,tm.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=gr(t,e.child,null,i),t.child=gr(t,null,a,i)):Se(e,t,a,i),t.memoizedState=r.state,o&&qu(t,n,!0),t.child}function Xp(e){var t=e.stateNode;t.pendingContext?Yu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Yu(e,t.context,!1),Da(e,t.containerInfo)}function pc(e,t,n,r,o){return fr(),Ta(o),t.flags|=256,Se(e,t,n,r),t.child}var Hs={dehydrated:null,treeContext:null,retryLane:0};function Us(e){return{baseLanes:e,cachePool:null,transitions:null}}function Zp(e,t,n){var r=t.pendingProps,o=J.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),K(J,o&1),e===null)return Ms(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=al(l,r,0,null),e=Pn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Us(n),t.memoizedState=Hs,e):Wa(t,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return nm(e,t,l,r,a,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=on(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=on(a,i):(i=Pn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Us(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Hs,r}return i=e.child,e=i.sibling,r=on(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Wa(e,t){return t=al({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Go(e,t,n,r){return r!==null&&Ta(r),gr(t,e.child,null,n),e=Wa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function nm(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=Vl(Error(k(422))),Go(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=al({mode:"visible",children:r.children},o,0,null),i=Pn(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&gr(t,e.child,null,l),t.child.memoizedState=Us(l),t.memoizedState=Hs,i);if(!(t.mode&1))return Go(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(k(419)),r=Vl(i,r,void 0),Go(e,t,l,r)}if(a=(l&e.childLanes)!==0,Re||a){if(r=he,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Nt(e,o),gt(r,e,o,-1))}return Xa(),r=Vl(Error(k(421))),Go(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=gm.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Ke=en(o.nextSibling),Qe=t,Z=!0,ht=null,e!==null&&(et[tt++]=zt,et[tt++]=At,et[tt++]=Ln,zt=e.id,At=e.overflow,Ln=t),t=Wa(t,r.children),t.flags|=4096,t)}function hc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ds(e.return,t,n)}function Hl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Jp(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Se(e,t,r.children,n),r=J.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hc(e,n,t);else if(e.tag===19)hc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(K(J,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Oi(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Hl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Oi(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Hl(t,!0,n,null,i);break;case"together":Hl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function di(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Rt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Rn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=on(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=on(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function rm(e,t,n){switch(t.tag){case 3:Xp(t),fr();break;case 5:Ep(t);break;case 1:Me(t.type)&&Ai(t);break;case 4:Da(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;K(Li,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(K(J,J.current&1),t.flags|=128,null):n&t.child.childLanes?Zp(e,t,n):(K(J,J.current&1),e=Rt(e,t,n),e!==null?e.sibling:null);K(J,J.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Jp(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),K(J,J.current),r)break;return null;case 22:case 23:return t.lanes=0,Yp(e,t,n)}return Rt(e,t,n)}var eh,Ws,th,nh;eh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ws=function(){};th=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,En(xt.current);var i=null;switch(n){case"input":o=hs(e,o),r=hs(e,r),i=[];break;case"select":o=te({},o,{value:void 0}),r=te({},r,{value:void 0}),i=[];break;case"textarea":o=ms(e,o),r=ms(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=$i)}ys(n,r);var l;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(to.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(a=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(i||(i=[]),i.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(to.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&Q("scroll",e),i||a===s||(i=[])):(i=i||[]).push(u,s))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};nh=function(e,t,n,r){n!==r&&(t.flags|=4)};function Rr(e,t){if(!Z)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function be(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function om(e,t,n){var r=t.pendingProps;switch(Pa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return be(t),null;case 1:return Me(t.type)&&zi(),be(t),null;case 3:return r=t.stateNode,mr(),Y(Oe),Y(xe),Ia(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ko(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ht!==null&&(Js(ht),ht=null))),Ws(e,t),be(t),null;case 5:Fa(t);var o=En(fo.current);if(n=t.type,e!==null&&t.stateNode!=null)th(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return be(t),null}if(e=En(xt.current),Ko(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[bt]=t,r[po]=i,e=(t.mode&1)!==0,n){case"dialog":Q("cancel",r),Q("close",r);break;case"iframe":case"object":case"embed":Q("load",r);break;case"video":case"audio":for(o=0;o<Wr.length;o++)Q(Wr[o],r);break;case"source":Q("error",r);break;case"img":case"image":case"link":Q("error",r),Q("load",r);break;case"details":Q("toggle",r);break;case"input":xu(r,i),Q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Q("invalid",r);break;case"textarea":Su(r,i),Q("invalid",r)}ys(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Wo(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Wo(r.textContent,a,e),o=["children",""+a]):to.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&Q("scroll",r)}switch(n){case"input":Do(r),ku(r,i,!0);break;case"textarea":Do(r),Cu(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=$i)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ad(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[bt]=t,e[po]=r,eh(e,t,!1,!1),t.stateNode=e;e:{switch(l=ws(n,r),n){case"dialog":Q("cancel",e),Q("close",e),o=r;break;case"iframe":case"object":case"embed":Q("load",e),o=r;break;case"video":case"audio":for(o=0;o<Wr.length;o++)Q(Wr[o],e);o=r;break;case"source":Q("error",e),o=r;break;case"img":case"image":case"link":Q("error",e),Q("load",e),o=r;break;case"details":Q("toggle",e),o=r;break;case"input":xu(e,r),o=hs(e,r),Q("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=te({},r,{value:void 0}),Q("invalid",e);break;case"textarea":Su(e,r),o=ms(e,r),Q("invalid",e);break;default:o=r}ys(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?Ld(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Pd(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&no(e,s):typeof s=="number"&&no(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(to.hasOwnProperty(i)?s!=null&&i==="onScroll"&&Q("scroll",e):s!=null&&ga(e,i,s,l))}switch(n){case"input":Do(e),ku(e,r,!1);break;case"textarea":Do(e),Cu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ln(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?or(e,!!r.multiple,i,!1):r.defaultValue!=null&&or(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=$i)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return be(t),null;case 6:if(e&&t.stateNode!=null)nh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=En(fo.current),En(xt.current),Ko(t)){if(r=t.stateNode,n=t.memoizedProps,r[bt]=t,(i=r.nodeValue!==n)&&(e=Qe,e!==null))switch(e.tag){case 3:Wo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Wo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[bt]=t,t.stateNode=r}return be(t),null;case 13:if(Y(J),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Z&&Ke!==null&&t.mode&1&&!(t.flags&128))wp(),fr(),t.flags|=98560,i=!1;else if(i=Ko(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(k(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(k(317));i[bt]=t}else fr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;be(t),i=!1}else ht!==null&&(Js(ht),ht=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||J.current&1?ce===0&&(ce=3):Xa())),t.updateQueue!==null&&(t.flags|=4),be(t),null);case 4:return mr(),Ws(e,t),e===null&&uo(t.stateNode.containerInfo),be(t),null;case 10:return Ra(t.type._context),be(t),null;case 17:return Me(t.type)&&zi(),be(t),null;case 19:if(Y(J),i=t.memoizedState,i===null)return be(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)Rr(i,!1);else{if(ce!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Oi(e),l!==null){for(t.flags|=128,Rr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return K(J,J.current&1|2),t.child}e=e.sibling}i.tail!==null&&ie()>yr&&(t.flags|=128,r=!0,Rr(i,!1),t.lanes=4194304)}else{if(!r)if(e=Oi(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Rr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!Z)return be(t),null}else 2*ie()-i.renderingStartTime>yr&&n!==1073741824&&(t.flags|=128,r=!0,Rr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ie(),t.sibling=null,n=J.current,K(J,r?n&1|2:n&1),t):(be(t),null);case 22:case 23:return qa(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ue&1073741824&&(be(t),t.subtreeFlags&6&&(t.flags|=8192)):be(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function im(e,t){switch(Pa(t),t.tag){case 1:return Me(t.type)&&zi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return mr(),Y(Oe),Y(xe),Ia(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Fa(t),null;case 13:if(Y(J),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));fr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Y(J),null;case 4:return mr(),null;case 10:return Ra(t.type._context),null;case 22:case 23:return qa(),null;case 24:return null;default:return null}}var Yo=!1,_e=!1,lm=typeof WeakSet=="function"?WeakSet:Set,P=null;function er(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ne(e,t,r)}else n.current=null}function Ks(e,t,n){try{n()}catch(r){ne(e,t,r)}}var fc=!1;function sm(e,t){if(As=Si,e=lp(),za(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,u=0,p=0,d=e,f=null;t:for(;;){for(var v;d!==n||o!==0&&d.nodeType!==3||(a=l+o),d!==i||r!==0&&d.nodeType!==3||(s=l+r),d.nodeType===3&&(l+=d.nodeValue.length),(v=d.firstChild)!==null;)f=d,d=v;for(;;){if(d===e)break t;if(f===n&&++u===o&&(a=l),f===i&&++p===r&&(s=l),(v=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=v}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ps={focusedElem:e,selectionRange:n},Si=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var b=w.memoizedProps,L=w.memoizedState,h=t.stateNode,c=h.getSnapshotBeforeUpdate(t.elementType===t.type?b:dt(t.type,b),L);h.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(_){ne(t,t.return,_)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return w=fc,fc=!1,w}function Zr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Ks(t,n,i)}o=o.next}while(o!==r)}}function ll(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Qs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function rh(e){var t=e.alternate;t!==null&&(e.alternate=null,rh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[bt],delete t[po],delete t[Ns],delete t[Hg],delete t[Ug])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function oh(e){return e.tag===5||e.tag===3||e.tag===4}function gc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||oh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Gs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=$i));else if(r!==4&&(e=e.child,e!==null))for(Gs(e,t,n),e=e.sibling;e!==null;)Gs(e,t,n),e=e.sibling}function Ys(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ys(e,t,n),e=e.sibling;e!==null;)Ys(e,t,n),e=e.sibling}var ge=null,pt=!1;function It(e,t,n){for(n=n.child;n!==null;)ih(e,t,n),n=n.sibling}function ih(e,t,n){if(_t&&typeof _t.onCommitFiberUnmount=="function")try{_t.onCommitFiberUnmount(Zi,n)}catch{}switch(n.tag){case 5:_e||er(n,t);case 6:var r=ge,o=pt;ge=null,It(e,t,n),ge=r,pt=o,ge!==null&&(pt?(e=ge,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ge.removeChild(n.stateNode));break;case 18:ge!==null&&(pt?(e=ge,n=n.stateNode,e.nodeType===8?Ml(e.parentNode,n):e.nodeType===1&&Ml(e,n),lo(e)):Ml(ge,n.stateNode));break;case 4:r=ge,o=pt,ge=n.stateNode.containerInfo,pt=!0,It(e,t,n),ge=r,pt=o;break;case 0:case 11:case 14:case 15:if(!_e&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Ks(n,t,l),o=o.next}while(o!==r)}It(e,t,n);break;case 1:if(!_e&&(er(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ne(n,t,a)}It(e,t,n);break;case 21:It(e,t,n);break;case 22:n.mode&1?(_e=(r=_e)||n.memoizedState!==null,It(e,t,n),_e=r):It(e,t,n);break;default:It(e,t,n)}}function mc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new lm),t.forEach(function(r){var o=mm.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function ut(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:ge=a.stateNode,pt=!1;break e;case 3:ge=a.stateNode.containerInfo,pt=!0;break e;case 4:ge=a.stateNode.containerInfo,pt=!0;break e}a=a.return}if(ge===null)throw Error(k(160));ih(i,l,o),ge=null,pt=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){ne(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)lh(t,e),t=t.sibling}function lh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ut(t,e),yt(e),r&4){try{Zr(3,e,e.return),ll(3,e)}catch(b){ne(e,e.return,b)}try{Zr(5,e,e.return)}catch(b){ne(e,e.return,b)}}break;case 1:ut(t,e),yt(e),r&512&&n!==null&&er(n,n.return);break;case 5:if(ut(t,e),yt(e),r&512&&n!==null&&er(n,n.return),e.flags&32){var o=e.stateNode;try{no(o,"")}catch(b){ne(e,e.return,b)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&$d(o,i),ws(a,l);var u=ws(a,i);for(l=0;l<s.length;l+=2){var p=s[l],d=s[l+1];p==="style"?Ld(o,d):p==="dangerouslySetInnerHTML"?Pd(o,d):p==="children"?no(o,d):ga(o,p,d,u)}switch(a){case"input":fs(o,i);break;case"textarea":zd(o,i);break;case"select":var f=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?or(o,!!i.multiple,v,!1):f!==!!i.multiple&&(i.defaultValue!=null?or(o,!!i.multiple,i.defaultValue,!0):or(o,!!i.multiple,i.multiple?[]:"",!1))}o[po]=i}catch(b){ne(e,e.return,b)}}break;case 6:if(ut(t,e),yt(e),r&4){if(e.stateNode===null)throw Error(k(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(b){ne(e,e.return,b)}}break;case 3:if(ut(t,e),yt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{lo(t.containerInfo)}catch(b){ne(e,e.return,b)}break;case 4:ut(t,e),yt(e);break;case 13:ut(t,e),yt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Ga=ie())),r&4&&mc(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(_e=(u=_e)||p,ut(t,e),_e=u):ut(t,e),yt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(P=e,p=e.child;p!==null;){for(d=P=p;P!==null;){switch(f=P,v=f.child,f.tag){case 0:case 11:case 14:case 15:Zr(4,f,f.return);break;case 1:er(f,f.return);var w=f.stateNode;if(typeof w.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(b){ne(r,n,b)}}break;case 5:er(f,f.return);break;case 22:if(f.memoizedState!==null){yc(d);continue}}v!==null?(v.return=f,P=v):yc(d)}p=p.sibling}e:for(p=null,d=e;;){if(d.tag===5){if(p===null){p=d;try{o=d.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=d.stateNode,s=d.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Td("display",l))}catch(b){ne(e,e.return,b)}}}else if(d.tag===6){if(p===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(b){ne(e,e.return,b)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;p===d&&(p=null),d=d.return}p===d&&(p=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:ut(t,e),yt(e),r&4&&mc(e);break;case 21:break;default:ut(t,e),yt(e)}}function yt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(oh(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(no(o,""),r.flags&=-33);var i=gc(e);Ys(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=gc(e);Gs(e,a,l);break;default:throw Error(k(161))}}catch(s){ne(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function am(e,t,n){P=e,sh(e)}function sh(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var o=P,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||Yo;if(!l){var a=o.alternate,s=a!==null&&a.memoizedState!==null||_e;a=Yo;var u=_e;if(Yo=l,(_e=s)&&!u)for(P=o;P!==null;)l=P,s=l.child,l.tag===22&&l.memoizedState!==null?wc(o):s!==null?(s.return=l,P=s):wc(o);for(;i!==null;)P=i,sh(i),i=i.sibling;P=o,Yo=a,_e=u}vc(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,P=i):vc(e)}}function vc(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:_e||ll(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!_e)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:dt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&ec(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ec(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var d=p.dehydrated;d!==null&&lo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}_e||t.flags&512&&Qs(t)}catch(f){ne(t,t.return,f)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function yc(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function wc(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ll(4,t)}catch(s){ne(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){ne(t,o,s)}}var i=t.return;try{Qs(t)}catch(s){ne(t,i,s)}break;case 5:var l=t.return;try{Qs(t)}catch(s){ne(t,l,s)}}}catch(s){ne(t,t.return,s)}if(t===e){P=null;break}var a=t.sibling;if(a!==null){a.return=t.return,P=a;break}P=t.return}}var um=Math.ceil,Fi=Mt.ReactCurrentDispatcher,Ka=Mt.ReactCurrentOwner,ot=Mt.ReactCurrentBatchConfig,j=0,he=null,ae=null,me=0,Ue=0,tr=fn(0),ce=0,yo=null,Rn=0,sl=0,Qa=0,Jr=null,Le=null,Ga=0,yr=1/0,Ct=null,Ii=!1,qs=null,nn=null,qo=!1,Yt=null,Bi=0,eo=0,Xs=null,pi=-1,hi=0;function Ce(){return j&6?ie():pi!==-1?pi:pi=ie()}function rn(e){return e.mode&1?j&2&&me!==0?me&-me:Kg.transition!==null?(hi===0&&(hi=Ud()),hi):(e=W,e!==0||(e=window.event,e=e===void 0?16:Xd(e.type)),e):1}function gt(e,t,n,r){if(50<eo)throw eo=0,Xs=null,Error(k(185));Co(e,n,r),(!(j&2)||e!==he)&&(e===he&&(!(j&2)&&(sl|=n),ce===4&&Wt(e,me)),De(e,r),n===1&&j===0&&!(t.mode&1)&&(yr=ie()+500,rl&&gn()))}function De(e,t){var n=e.callbackNode;Kf(e,t);var r=ki(e,e===he?me:0);if(r===0)n!==null&&zu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&zu(n),t===1)e.tag===0?Wg(bc.bind(null,e)):mp(bc.bind(null,e)),jg(function(){!(j&6)&&gn()}),n=null;else{switch(Wd(r)){case 1:n=ba;break;case 4:n=Vd;break;case 16:n=xi;break;case 536870912:n=Hd;break;default:n=xi}n=gh(n,ah.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ah(e,t){if(pi=-1,hi=0,j&6)throw Error(k(327));var n=e.callbackNode;if(ur()&&e.callbackNode!==n)return null;var r=ki(e,e===he?me:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ji(e,r);else{t=r;var o=j;j|=2;var i=ch();(he!==e||me!==t)&&(Ct=null,yr=ie()+500,An(e,t));do try{pm();break}catch(a){uh(e,a)}while(1);Na(),Fi.current=i,j=o,ae!==null?t=0:(he=null,me=0,t=ce)}if(t!==0){if(t===2&&(o=Ss(e),o!==0&&(r=o,t=Zs(e,o))),t===1)throw n=yo,An(e,0),Wt(e,r),De(e,ie()),n;if(t===6)Wt(e,r);else{if(o=e.current.alternate,!(r&30)&&!cm(o)&&(t=ji(e,r),t===2&&(i=Ss(e),i!==0&&(r=i,t=Zs(e,i))),t===1))throw n=yo,An(e,0),Wt(e,r),De(e,ie()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:_n(e,Le,Ct);break;case 3:if(Wt(e,r),(r&130023424)===r&&(t=Ga+500-ie(),10<t)){if(ki(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ce(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ls(_n.bind(null,e,Le,Ct),t);break}_n(e,Le,Ct);break;case 4:if(Wt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-ft(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*um(r/1960))-r,10<r){e.timeoutHandle=Ls(_n.bind(null,e,Le,Ct),r);break}_n(e,Le,Ct);break;case 5:_n(e,Le,Ct);break;default:throw Error(k(329))}}}return De(e,ie()),e.callbackNode===n?ah.bind(null,e):null}function Zs(e,t){var n=Jr;return e.current.memoizedState.isDehydrated&&(An(e,t).flags|=256),e=ji(e,t),e!==2&&(t=Le,Le=n,t!==null&&Js(t)),e}function Js(e){Le===null?Le=e:Le.push.apply(Le,e)}function cm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!mt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Wt(e,t){for(t&=~Qa,t&=~sl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ft(t),r=1<<n;e[n]=-1,t&=~r}}function bc(e){if(j&6)throw Error(k(327));ur();var t=ki(e,0);if(!(t&1))return De(e,ie()),null;var n=ji(e,t);if(e.tag!==0&&n===2){var r=Ss(e);r!==0&&(t=r,n=Zs(e,r))}if(n===1)throw n=yo,An(e,0),Wt(e,t),De(e,ie()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,_n(e,Le,Ct),De(e,ie()),null}function Ya(e,t){var n=j;j|=1;try{return e(t)}finally{j=n,j===0&&(yr=ie()+500,rl&&gn())}}function On(e){Yt!==null&&Yt.tag===0&&!(j&6)&&ur();var t=j;j|=1;var n=ot.transition,r=W;try{if(ot.transition=null,W=1,e)return e()}finally{W=r,ot.transition=n,j=t,!(j&6)&&gn()}}function qa(){Ue=tr.current,Y(tr)}function An(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Bg(n)),ae!==null)for(n=ae.return;n!==null;){var r=n;switch(Pa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&zi();break;case 3:mr(),Y(Oe),Y(xe),Ia();break;case 5:Fa(r);break;case 4:mr();break;case 13:Y(J);break;case 19:Y(J);break;case 10:Ra(r.type._context);break;case 22:case 23:qa()}n=n.return}if(he=e,ae=e=on(e.current,null),me=Ue=t,ce=0,yo=null,Qa=sl=Rn=0,Le=Jr=null,Cn!==null){for(t=0;t<Cn.length;t++)if(n=Cn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}Cn=null}return e}function uh(e,t){do{var n=ae;try{if(Na(),ui.current=Di,Mi){for(var r=ee.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Mi=!1}if(Nn=0,pe=ue=ee=null,Xr=!1,go=0,Ka.current=null,n===null||n.return===null){ce=1,yo=t,ae=null;break}e:{var i=e,l=n.return,a=n,s=t;if(t=me,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,p=a,d=p.tag;if(!(p.mode&1)&&(d===0||d===11||d===15)){var f=p.alternate;f?(p.updateQueue=f.updateQueue,p.memoizedState=f.memoizedState,p.lanes=f.lanes):(p.updateQueue=null,p.memoizedState=null)}var v=sc(l);if(v!==null){v.flags&=-257,ac(v,l,a,i,t),v.mode&1&&lc(i,u,t),t=v,s=u;var w=t.updateQueue;if(w===null){var b=new Set;b.add(s),t.updateQueue=b}else w.add(s);break e}else{if(!(t&1)){lc(i,u,t),Xa();break e}s=Error(k(426))}}else if(Z&&a.mode&1){var L=sc(l);if(L!==null){!(L.flags&65536)&&(L.flags|=256),ac(L,l,a,i,t),Ta(vr(s,a));break e}}i=s=vr(s,a),ce!==4&&(ce=2),Jr===null?Jr=[i]:Jr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var h=Kp(i,s,t);Ju(i,h);break e;case 1:a=s;var c=i.type,g=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(nn===null||!nn.has(g)))){i.flags|=65536,t&=-t,i.lanes|=t;var _=Qp(i,a,t);Ju(i,_);break e}}i=i.return}while(i!==null)}ph(n)}catch(x){t=x,ae===n&&n!==null&&(ae=n=n.return);continue}break}while(1)}function ch(){var e=Fi.current;return Fi.current=Di,e===null?Di:e}function Xa(){(ce===0||ce===3||ce===2)&&(ce=4),he===null||!(Rn&268435455)&&!(sl&268435455)||Wt(he,me)}function ji(e,t){var n=j;j|=2;var r=ch();(he!==e||me!==t)&&(Ct=null,An(e,t));do try{dm();break}catch(o){uh(e,o)}while(1);if(Na(),j=n,Fi.current=r,ae!==null)throw Error(k(261));return he=null,me=0,ce}function dm(){for(;ae!==null;)dh(ae)}function pm(){for(;ae!==null&&!Df();)dh(ae)}function dh(e){var t=fh(e.alternate,e,Ue);e.memoizedProps=e.pendingProps,t===null?ph(e):ae=t,Ka.current=null}function ph(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=im(n,t),n!==null){n.flags&=32767,ae=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ce=6,ae=null;return}}else if(n=om(n,t,Ue),n!==null){ae=n;return}if(t=t.sibling,t!==null){ae=t;return}ae=t=e}while(t!==null);ce===0&&(ce=5)}function _n(e,t,n){var r=W,o=ot.transition;try{ot.transition=null,W=1,hm(e,t,n,r)}finally{ot.transition=o,W=r}return null}function hm(e,t,n,r){do ur();while(Yt!==null);if(j&6)throw Error(k(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Qf(e,i),e===he&&(ae=he=null,me=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||qo||(qo=!0,gh(xi,function(){return ur(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=ot.transition,ot.transition=null;var l=W;W=1;var a=j;j|=4,Ka.current=null,sm(e,n),lh(n,e),Ng(Ps),Si=!!As,Ps=As=null,e.current=n,am(n),Ff(),j=a,W=l,ot.transition=i}else e.current=n;if(qo&&(qo=!1,Yt=e,Bi=o),i=e.pendingLanes,i===0&&(nn=null),jf(n.stateNode),De(e,ie()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Ii)throw Ii=!1,e=qs,qs=null,e;return Bi&1&&e.tag!==0&&ur(),i=e.pendingLanes,i&1?e===Xs?eo++:(eo=0,Xs=e):eo=0,gn(),null}function ur(){if(Yt!==null){var e=Wd(Bi),t=ot.transition,n=W;try{if(ot.transition=null,W=16>e?16:e,Yt===null)var r=!1;else{if(e=Yt,Yt=null,Bi=0,j&6)throw Error(k(331));var o=j;for(j|=4,P=e.current;P!==null;){var i=P,l=i.child;if(P.flags&16){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(P=u;P!==null;){var p=P;switch(p.tag){case 0:case 11:case 15:Zr(8,p,i)}var d=p.child;if(d!==null)d.return=p,P=d;else for(;P!==null;){p=P;var f=p.sibling,v=p.return;if(rh(p),p===u){P=null;break}if(f!==null){f.return=v,P=f;break}P=v}}}var w=i.alternate;if(w!==null){var b=w.child;if(b!==null){w.child=null;do{var L=b.sibling;b.sibling=null,b=L}while(b!==null)}}P=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,P=l;else e:for(;P!==null;){if(i=P,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Zr(9,i,i.return)}var h=i.sibling;if(h!==null){h.return=i.return,P=h;break e}P=i.return}}var c=e.current;for(P=c;P!==null;){l=P;var g=l.child;if(l.subtreeFlags&2064&&g!==null)g.return=l,P=g;else e:for(l=c;P!==null;){if(a=P,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ll(9,a)}}catch(x){ne(a,a.return,x)}if(a===l){P=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,P=_;break e}P=a.return}}if(j=o,gn(),_t&&typeof _t.onPostCommitFiberRoot=="function")try{_t.onPostCommitFiberRoot(Zi,e)}catch{}r=!0}return r}finally{W=n,ot.transition=t}}return!1}function _c(e,t,n){t=vr(n,t),t=Kp(e,t,1),e=tn(e,t,1),t=Ce(),e!==null&&(Co(e,1,t),De(e,t))}function ne(e,t,n){if(e.tag===3)_c(e,e,n);else for(;t!==null;){if(t.tag===3){_c(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(nn===null||!nn.has(r))){e=vr(n,e),e=Qp(t,e,1),t=tn(t,e,1),e=Ce(),t!==null&&(Co(t,1,e),De(t,e));break}}t=t.return}}function fm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ce(),e.pingedLanes|=e.suspendedLanes&n,he===e&&(me&n)===n&&(ce===4||ce===3&&(me&130023424)===me&&500>ie()-Ga?An(e,0):Qa|=n),De(e,t)}function hh(e,t){t===0&&(e.mode&1?(t=Bo,Bo<<=1,!(Bo&130023424)&&(Bo=4194304)):t=1);var n=Ce();e=Nt(e,t),e!==null&&(Co(e,t,n),De(e,n))}function gm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),hh(e,n)}function mm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),hh(e,n)}var fh;fh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Oe.current)Re=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Re=!1,rm(e,t,n);Re=!!(e.flags&131072)}else Re=!1,Z&&t.flags&1048576&&vp(t,Ti,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;di(e,t),e=t.pendingProps;var o=hr(t,xe.current);ar(t,n),o=ja(null,t,r,e,o,n);var i=Va();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Me(r)?(i=!0,Ai(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ma(t),o.updater=ol,t.stateNode=o,o._reactInternals=t,Is(t,r,e,n),t=Vs(null,t,r,!0,i,n)):(t.tag=0,Z&&i&&Aa(t),Se(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(di(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=ym(r),e=dt(r,e),o){case 0:t=js(null,t,r,e,n);break e;case 1:t=dc(null,t,r,e,n);break e;case 11:t=uc(null,t,r,e,n);break e;case 14:t=cc(null,t,r,dt(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:dt(r,o),js(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:dt(r,o),dc(e,t,r,o,n);case 3:e:{if(Xp(t),e===null)throw Error(k(387));r=t.pendingProps,i=t.memoizedState,o=i.element,_p(e,t),Ri(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=vr(Error(k(423)),t),t=pc(e,t,r,n,o);break e}else if(r!==o){o=vr(Error(k(424)),t),t=pc(e,t,r,n,o);break e}else for(Ke=en(t.stateNode.containerInfo.firstChild),Qe=t,Z=!0,ht=null,n=Cp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(fr(),r===o){t=Rt(e,t,n);break e}Se(e,t,r,n)}t=t.child}return t;case 5:return Ep(t),e===null&&Ms(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Ts(r,o)?l=null:i!==null&&Ts(r,i)&&(t.flags|=32),qp(e,t),Se(e,t,l,n),t.child;case 6:return e===null&&Ms(t),null;case 13:return Zp(e,t,n);case 4:return Da(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=gr(t,null,r,n):Se(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:dt(r,o),uc(e,t,r,o,n);case 7:return Se(e,t,t.pendingProps,n),t.child;case 8:return Se(e,t,t.pendingProps.children,n),t.child;case 12:return Se(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,K(Li,r._currentValue),r._currentValue=l,i!==null)if(mt(i.value,l)){if(i.children===o.children&&!Oe.current){t=Rt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=Pt(-1,n&-n),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?s.next=s:(s.next=p.next,p.next=s),u.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Ds(i.return,n,t),a.lanes|=n;break}s=s.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(k(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Ds(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Se(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,ar(t,n),o=it(o),r=r(o),t.flags|=1,Se(e,t,r,n),t.child;case 14:return r=t.type,o=dt(r,t.pendingProps),o=dt(r.type,o),cc(e,t,r,o,n);case 15:return Gp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:dt(r,o),di(e,t),t.tag=1,Me(r)?(e=!0,Ai(t)):e=!1,ar(t,n),kp(t,r,o),Is(t,r,o,n),Vs(null,t,r,!0,e,n);case 19:return Jp(e,t,n);case 22:return Yp(e,t,n)}throw Error(k(156,t.tag))};function gh(e,t){return jd(e,t)}function vm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nt(e,t,n,r){return new vm(e,t,n,r)}function Za(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ym(e){if(typeof e=="function")return Za(e)?1:0;if(e!=null){if(e=e.$$typeof,e===va)return 11;if(e===ya)return 14}return 2}function on(e,t){var n=e.alternate;return n===null?(n=nt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function fi(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")Za(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Wn:return Pn(n.children,o,i,t);case ma:l=8,o|=8;break;case us:return e=nt(12,n,t,o|2),e.elementType=us,e.lanes=i,e;case cs:return e=nt(13,n,t,o),e.elementType=cs,e.lanes=i,e;case ds:return e=nt(19,n,t,o),e.elementType=ds,e.lanes=i,e;case Sd:return al(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case xd:l=10;break e;case kd:l=9;break e;case va:l=11;break e;case ya:l=14;break e;case jt:l=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=nt(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Pn(e,t,n,r){return e=nt(7,e,r,t),e.lanes=n,e}function al(e,t,n,r){return e=nt(22,e,r,t),e.elementType=Sd,e.lanes=n,e.stateNode={isHidden:!1},e}function Ul(e,t,n){return e=nt(6,e,null,t),e.lanes=n,e}function Wl(e,t,n){return t=nt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function wm(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Cl(0),this.expirationTimes=Cl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Ja(e,t,n,r,o,i,l,a,s){return e=new wm(e,t,n,a,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=nt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ma(i),e}function bm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Un,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function mh(e){if(!e)return sn;e=e._reactInternals;e:{if(In(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Me(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(Me(n))return gp(e,n,t)}return t}function vh(e,t,n,r,o,i,l,a,s){return e=Ja(n,r,!0,e,o,i,l,a,s),e.context=mh(null),n=e.current,r=Ce(),o=rn(n),i=Pt(r,o),i.callback=t??null,tn(n,i,o),e.current.lanes=o,Co(e,o,r),De(e,r),e}function ul(e,t,n,r){var o=t.current,i=Ce(),l=rn(o);return n=mh(n),t.context===null?t.context=n:t.pendingContext=n,t=Pt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=tn(o,t,l),e!==null&&(gt(e,o,l,i),ai(e,o,l)),l}function Vi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function xc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function eu(e,t){xc(e,t),(e=e.alternate)&&xc(e,t)}function _m(){return null}var yh=typeof reportError=="function"?reportError:function(e){console.error(e)};function tu(e){this._internalRoot=e}cl.prototype.render=tu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));ul(e,t,null,null)};cl.prototype.unmount=tu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;On(function(){ul(null,e,null,null)}),t[Lt]=null}};function cl(e){this._internalRoot=e}cl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Gd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ut.length&&t!==0&&t<Ut[n].priority;n++);Ut.splice(n,0,e),n===0&&qd(e)}};function nu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function dl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function kc(){}function xm(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=Vi(l);i.call(u)}}var l=vh(t,r,e,0,null,!1,!1,"",kc);return e._reactRootContainer=l,e[Lt]=l.current,uo(e.nodeType===8?e.parentNode:e),On(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var u=Vi(s);a.call(u)}}var s=Ja(e,0,!1,null,null,!1,!1,"",kc);return e._reactRootContainer=s,e[Lt]=s.current,uo(e.nodeType===8?e.parentNode:e),On(function(){ul(t,s,n,r)}),s}function pl(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var s=Vi(l);a.call(s)}}ul(t,l,e,o)}else l=xm(n,t,e,o,r);return Vi(l)}Kd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ur(t.pendingLanes);n!==0&&(_a(t,n|1),De(t,ie()),!(j&6)&&(yr=ie()+500,gn()))}break;case 13:On(function(){var r=Nt(e,1);if(r!==null){var o=Ce();gt(r,e,1,o)}}),eu(e,1)}};xa=function(e){if(e.tag===13){var t=Nt(e,134217728);if(t!==null){var n=Ce();gt(t,e,134217728,n)}eu(e,134217728)}};Qd=function(e){if(e.tag===13){var t=rn(e),n=Nt(e,t);if(n!==null){var r=Ce();gt(n,e,t,r)}eu(e,t)}};Gd=function(){return W};Yd=function(e,t){var n=W;try{return W=e,t()}finally{W=n}};_s=function(e,t,n){switch(t){case"input":if(fs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=nl(r);if(!o)throw Error(k(90));Ed(r),fs(r,o)}}}break;case"textarea":zd(e,n);break;case"select":t=n.value,t!=null&&or(e,!!n.multiple,t,!1)}};Od=Ya;Md=On;var km={usingClientEntryPoint:!1,Events:[$o,Yn,nl,Nd,Rd,Ya]},Or={findFiberByHostInstance:Sn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Sm={bundleType:Or.bundleType,version:Or.version,rendererPackageName:Or.rendererPackageName,rendererConfig:Or.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Mt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Id(e),e===null?null:e.stateNode},findFiberByHostInstance:Or.findFiberByHostInstance||_m,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xo.isDisabled&&Xo.supportsFiber)try{Zi=Xo.inject(Sm),_t=Xo}catch{}}qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=km;qe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nu(t))throw Error(k(200));return bm(e,t,null,n)};qe.createRoot=function(e,t){if(!nu(e))throw Error(k(299));var n=!1,r="",o=yh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Ja(e,1,!1,null,null,n,!1,r,o),e[Lt]=t.current,uo(e.nodeType===8?e.parentNode:e),new tu(t)};qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=Id(t),e=e===null?null:e.stateNode,e};qe.flushSync=function(e){return On(e)};qe.hydrate=function(e,t,n){if(!dl(t))throw Error(k(200));return pl(null,e,t,!0,n)};qe.hydrateRoot=function(e,t,n){if(!nu(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=yh;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=vh(t,null,e,1,n??null,o,!1,i,l),e[Lt]=t.current,uo(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new cl(t)};qe.render=function(e,t,n){if(!dl(t))throw Error(k(200));return pl(null,e,t,!1,n)};qe.unmountComponentAtNode=function(e){if(!dl(e))throw Error(k(40));return e._reactRootContainer?(On(function(){pl(null,null,e,!1,function(){e._reactRootContainer=null,e[Lt]=null})}),!0):!1};qe.unstable_batchedUpdates=Ya;qe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!dl(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return pl(e,t,n,!1,r)};qe.version="18.2.0-next-9e3b772b8-20220608";function wh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(wh)}catch(e){console.error(e)}}wh(),vd.exports=qe;var Cm=vd.exports,Sc=Cm;ss.createRoot=Sc.createRoot,ss.hydrateRoot=Sc.hydrateRoot;function Em(e){const n=["default","cwy","radar_dbz_cwb","preci_cwb","OceanLakeLandSnow"].map((r,o)=>T.jsx("option",{children:r},o));return T.jsxs(T.Fragment,{children:[T.jsx("label",{children:"Template: "}),T.jsx("select",{title:"colormaps",onChange:r=>e.changeMap(r),style:{maxWidth:"80px"},children:n})]})}function bh(e){return $m(e)}function Kl(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function $m(e){for(let t=e;t;t=Kl(t))if(t instanceof Element&&getComputedStyle(t).display==="none")return null;for(let t=Kl(e);t;t=Kl(t)){if(!(t instanceof Element))continue;const n=getComputedStyle(t);if(n.display!=="contents"&&(n.position!=="static"||n.filter!=="none"||t.tagName==="BODY"))return t}return null}function zm(e){const t=e.tagName.toLowerCase();return e.getAttribute("tabindex")==="-1"||e.hasAttribute("disabled")||e.hasAttribute("aria-disabled")&&e.getAttribute("aria-disabled")!=="false"||t==="input"&&e.getAttribute("type")==="radio"&&!e.hasAttribute("checked")||e.offsetParent===null&&bh(e)===null||window.getComputedStyle(e).visibility==="hidden"?!1:(t==="audio"||t==="video")&&e.hasAttribute("controls")||e.hasAttribute("tabindex")||e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"?!0:["button","input","select","textarea","a","audio","video","summary"].includes(t)}function Am(e){var t,n;const r=gi(e),o=(t=r[0])!=null?t:null,i=(n=r[r.length-1])!=null?n:null;return{start:o,end:i}}function gi(e){const t=[];function n(r){if(r instanceof Element){if(r.hasAttribute("inert"))return;!t.includes(r)&&zm(r)&&t.push(r);const o=i=>{var l;return((l=i.getRootNode({composed:!0}))==null?void 0:l.host)!==e};r instanceof HTMLSlotElement&&o(r)&&r.assignedElements({flatten:!0}).forEach(i=>{n(i)}),r.shadowRoot!==null&&r.shadowRoot.mode==="open"&&n(r.shadowRoot)}[...r.children].forEach(o=>n(o))}return n(e),t}function*_h(e=document.activeElement){e!=null&&(yield e,"shadowRoot"in e&&e.shadowRoot&&e.shadowRoot.mode!=="closed"&&(yield*_h(e.shadowRoot.activeElement)))}var Mr=[],Pm=class{constructor(e){this.tabDirection="forward",this.handleFocusIn=()=>{this.checkFocus()},this.handleKeyDown=t=>{var n;if(t.key!=="Tab")return;t.shiftKey?this.tabDirection="backward":this.tabDirection="forward",t.preventDefault();const r=gi(this.element),o=r[0];let i=this.startElementAlreadyFocused(o)?0:this.currentFocusIndex;if(i===-1){this.currentFocus=o,this.currentFocus.focus({preventScroll:!0});return}const l=this.tabDirection==="forward"?1:-1;i+l>=r.length?i=0:this.currentFocusIndex+l<0?i=r.length-1:i+=l,this.currentFocus=r[i],(n=this.currentFocus)==null||n.focus({preventScroll:!0}),setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=e}activate(){Mr.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){Mr=Mr.filter(e=>e!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return Mr[Mr.length-1]===this.element}checkFocus(){if(this.isActive()){const e=gi(this.element);if(!this.element.matches(":focus-within")){const t=e[0],n=e[e.length-1],r=this.tabDirection==="forward"?t:n;typeof(r==null?void 0:r.focus)=="function"&&(this.currentFocus=r,r.focus({preventScroll:!0}))}}}get currentFocusIndex(){return gi(this.element).findIndex(e=>e===this.currentFocus)}startElementAlreadyFocused(e){for(const t of _h())if(e===t)return!0;return!1}},ea=new Set;function Tm(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function Cc(e){if(ea.add(e),!document.body.classList.contains("sl-scroll-lock")){const t=Tm();document.body.classList.add("sl-scroll-lock"),document.body.style.setProperty("--sl-scroll-lock-size",`${t}px`)}}function Ec(e){ea.delete(e),ea.size===0&&(document.body.classList.remove("sl-scroll-lock"),document.body.style.removeProperty("--sl-scroll-lock-size"))}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mi=window,ru=mi.ShadowRoot&&(mi.ShadyCSS===void 0||mi.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ou=Symbol(),$c=new WeakMap;let xh=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==ou)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(ru&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=$c.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&$c.set(n,t))}return t}toString(){return this.cssText}};const Lm=e=>new xh(typeof e=="string"?e:e+"",void 0,ou),ze=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((r,o,i)=>r+(l=>{if(l._$cssResult$===!0)return l.cssText;if(typeof l=="number")return l;throw Error("Value passed to 'css' function must be a 'css' function result: "+l+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1],e[0]);return new xh(n,e,ou)},Nm=(e,t)=>{ru?e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet):t.forEach(n=>{const r=document.createElement("style"),o=mi.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=n.cssText,e.appendChild(r)})},zc=ru?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return Lm(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ql;const Hi=window,Ac=Hi.trustedTypes,Rm=Ac?Ac.emptyScript:"",Pc=Hi.reactiveElementPolyfillSupport,wo={toAttribute(e,t){switch(t){case Boolean:e=e?Rm:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},kh=(e,t)=>t!==e&&(t==t||e==e),Gl={attribute:!0,type:String,converter:wo,reflect:!1,hasChanged:kh},ta="finalized";let Hn=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var n;this.finalize(),((n=this.h)!==null&&n!==void 0?n:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((n,r)=>{const o=this._$Ep(r,n);o!==void 0&&(this._$Ev.set(o,r),t.push(o))}),t}static createProperty(t,n=Gl){if(n.state&&(n.attribute=!1),this.finalize(),this.elementProperties.set(t,n),!n.noAccessor&&!this.prototype.hasOwnProperty(t)){const r=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,r,n);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,n,r){return{get(){return this[n]},set(o){const i=this[t];this[n]=o,this.requestUpdate(t,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Gl}static finalize(){if(this.hasOwnProperty(ta))return!1;this[ta]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const n=this.properties,r=[...Object.getOwnPropertyNames(n),...Object.getOwnPropertySymbols(n)];for(const o of r)this.createProperty(o,n[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const o of r)n.unshift(zc(o))}else t!==void 0&&n.push(zc(t));return n}static _$Ep(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(n=>n(this))}addController(t){var n,r;((n=this._$ES)!==null&&n!==void 0?n:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)===null||r===void 0||r.call(t))}removeController(t){var n;(n=this._$ES)===null||n===void 0||n.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,n)=>{this.hasOwnProperty(n)&&(this._$Ei.set(n,this[n]),delete this[n])})}createRenderRoot(){var t;const n=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Nm(n,this.constructor.elementStyles),n}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var r;return(r=n.hostConnected)===null||r===void 0?void 0:r.call(n)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(n=>{var r;return(r=n.hostDisconnected)===null||r===void 0?void 0:r.call(n)})}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$EO(t,n,r=Gl){var o;const i=this.constructor._$Ep(t,r);if(i!==void 0&&r.reflect===!0){const l=(((o=r.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?r.converter:wo).toAttribute(n,r.type);this._$El=t,l==null?this.removeAttribute(i):this.setAttribute(i,l),this._$El=null}}_$AK(t,n){var r;const o=this.constructor,i=o._$Ev.get(t);if(i!==void 0&&this._$El!==i){const l=o.getPropertyOptions(i),a=typeof l.converter=="function"?{fromAttribute:l.converter}:((r=l.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?l.converter:wo;this._$El=i,this[i]=a.fromAttribute(n,l.type),this._$El=null}}requestUpdate(t,n,r){let o=!0;t!==void 0&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||kh)(this[t],n)?(this._$AL.has(t)||this._$AL.set(t,n),r.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,r))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,i)=>this[i]=o),this._$Ei=void 0);let n=!1;const r=this._$AL;try{n=this.shouldUpdate(r),n?(this.willUpdate(r),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var i;return(i=o.hostUpdate)===null||i===void 0?void 0:i.call(o)}),this.update(r)):this._$Ek()}catch(o){throw n=!1,this._$Ek(),o}n&&this._$AE(r)}willUpdate(t){}_$AE(t){var n;(n=this._$ES)===null||n===void 0||n.forEach(r=>{var o;return(o=r.hostUpdated)===null||o===void 0?void 0:o.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((n,r)=>this._$EO(r,this[r],n)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};Hn[ta]=!0,Hn.elementProperties=new Map,Hn.elementStyles=[],Hn.shadowRootOptions={mode:"open"},Pc==null||Pc({ReactiveElement:Hn}),((Ql=Hi.reactiveElementVersions)!==null&&Ql!==void 0?Ql:Hi.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Yl;const Ui=window,wr=Ui.trustedTypes,Tc=wr?wr.createPolicy("lit-html",{createHTML:e=>e}):void 0,na="$lit$",Kt=`lit$${(Math.random()+"").slice(9)}$`,Sh="?"+Kt,Om=`<${Sh}>`,Mn=document,bo=()=>Mn.createComment(""),_o=e=>e===null||typeof e!="object"&&typeof e!="function",Ch=Array.isArray,Mm=e=>Ch(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",ql=`[ 	
\f\r]`,Dr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Lc=/-->/g,Nc=/>/g,wn=RegExp(`>|${ql}(?:([^\\s"'>=/]+)(${ql}*=${ql}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Rc=/'/g,Oc=/"/g,Eh=/^(?:script|style|textarea|title)$/i,Dm=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),G=Dm(1),rt=Symbol.for("lit-noChange"),se=Symbol.for("lit-nothing"),Mc=new WeakMap,$n=Mn.createTreeWalker(Mn,129,null,!1);function $h(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Tc!==void 0?Tc.createHTML(t):t}const Fm=(e,t)=>{const n=e.length-1,r=[];let o,i=t===2?"<svg>":"",l=Dr;for(let a=0;a<n;a++){const s=e[a];let u,p,d=-1,f=0;for(;f<s.length&&(l.lastIndex=f,p=l.exec(s),p!==null);)f=l.lastIndex,l===Dr?p[1]==="!--"?l=Lc:p[1]!==void 0?l=Nc:p[2]!==void 0?(Eh.test(p[2])&&(o=RegExp("</"+p[2],"g")),l=wn):p[3]!==void 0&&(l=wn):l===wn?p[0]===">"?(l=o??Dr,d=-1):p[1]===void 0?d=-2:(d=l.lastIndex-p[2].length,u=p[1],l=p[3]===void 0?wn:p[3]==='"'?Oc:Rc):l===Oc||l===Rc?l=wn:l===Lc||l===Nc?l=Dr:(l=wn,o=void 0);const v=l===wn&&e[a+1].startsWith("/>")?" ":"";i+=l===Dr?s+Om:d>=0?(r.push(u),s.slice(0,d)+na+s.slice(d)+Kt+v):s+Kt+(d===-2?(r.push(void 0),a):v)}return[$h(e,i+(e[n]||"<?>")+(t===2?"</svg>":"")),r]};class xo{constructor({strings:t,_$litType$:n},r){let o;this.parts=[];let i=0,l=0;const a=t.length-1,s=this.parts,[u,p]=Fm(t,n);if(this.el=xo.createElement(u,r),$n.currentNode=this.el.content,n===2){const d=this.el.content,f=d.firstChild;f.remove(),d.append(...f.childNodes)}for(;(o=$n.nextNode())!==null&&s.length<a;){if(o.nodeType===1){if(o.hasAttributes()){const d=[];for(const f of o.getAttributeNames())if(f.endsWith(na)||f.startsWith(Kt)){const v=p[l++];if(d.push(f),v!==void 0){const w=o.getAttribute(v.toLowerCase()+na).split(Kt),b=/([.?@])?(.*)/.exec(v);s.push({type:1,index:i,name:b[2],strings:w,ctor:b[1]==="."?Bm:b[1]==="?"?Vm:b[1]==="@"?Hm:hl})}else s.push({type:6,index:i})}for(const f of d)o.removeAttribute(f)}if(Eh.test(o.tagName)){const d=o.textContent.split(Kt),f=d.length-1;if(f>0){o.textContent=wr?wr.emptyScript:"";for(let v=0;v<f;v++)o.append(d[v],bo()),$n.nextNode(),s.push({type:2,index:++i});o.append(d[f],bo())}}}else if(o.nodeType===8)if(o.data===Sh)s.push({type:2,index:i});else{let d=-1;for(;(d=o.data.indexOf(Kt,d+1))!==-1;)s.push({type:7,index:i}),d+=Kt.length-1}i++}}static createElement(t,n){const r=Mn.createElement("template");return r.innerHTML=t,r}}function br(e,t,n=e,r){var o,i,l,a;if(t===rt)return t;let s=r!==void 0?(o=n._$Co)===null||o===void 0?void 0:o[r]:n._$Cl;const u=_o(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==u&&((i=s==null?void 0:s._$AO)===null||i===void 0||i.call(s,!1),u===void 0?s=void 0:(s=new u(e),s._$AT(e,n,r)),r!==void 0?((l=(a=n)._$Co)!==null&&l!==void 0?l:a._$Co=[])[r]=s:n._$Cl=s),s!==void 0&&(t=br(e,s._$AS(e,t.values),s,r)),t}class Im{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var n;const{el:{content:r},parts:o}=this._$AD,i=((n=t==null?void 0:t.creationScope)!==null&&n!==void 0?n:Mn).importNode(r,!0);$n.currentNode=i;let l=$n.nextNode(),a=0,s=0,u=o[0];for(;u!==void 0;){if(a===u.index){let p;u.type===2?p=new Ao(l,l.nextSibling,this,t):u.type===1?p=new u.ctor(l,u.name,u.strings,this,t):u.type===6&&(p=new Um(l,this,t)),this._$AV.push(p),u=o[++s]}a!==(u==null?void 0:u.index)&&(l=$n.nextNode(),a++)}return $n.currentNode=Mn,i}v(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}}class Ao{constructor(t,n,r,o){var i;this.type=2,this._$AH=se,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=o,this._$Cp=(i=o==null?void 0:o.isConnected)===null||i===void 0||i}get _$AU(){var t,n;return(n=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&n!==void 0?n:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=br(this,t,n),_o(t)?t===se||t==null||t===""?(this._$AH!==se&&this._$AR(),this._$AH=se):t!==this._$AH&&t!==rt&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Mm(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==se&&_o(this._$AH)?this._$AA.nextSibling.data=t:this.$(Mn.createTextNode(t)),this._$AH=t}g(t){var n;const{values:r,_$litType$:o}=t,i=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=xo.createElement($h(o.h,o.h[0]),this.options)),o);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===i)this._$AH.v(r);else{const l=new Im(i,this),a=l.u(this.options);l.v(r),this.$(a),this._$AH=l}}_$AC(t){let n=Mc.get(t.strings);return n===void 0&&Mc.set(t.strings,n=new xo(t)),n}T(t){Ch(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,o=0;for(const i of t)o===n.length?n.push(r=new Ao(this.k(bo()),this.k(bo()),this,this.options)):r=n[o],r._$AI(i),o++;o<n.length&&(this._$AR(r&&r._$AB.nextSibling,o),n.length=o)}_$AR(t=this._$AA.nextSibling,n){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,n);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var n;this._$AM===void 0&&(this._$Cp=t,(n=this._$AP)===null||n===void 0||n.call(this,t))}}class hl{constructor(t,n,r,o,i){this.type=1,this._$AH=se,this._$AN=void 0,this.element=t,this.name=n,this._$AM=o,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=se}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,n=this,r,o){const i=this.strings;let l=!1;if(i===void 0)t=br(this,t,n,0),l=!_o(t)||t!==this._$AH&&t!==rt,l&&(this._$AH=t);else{const a=t;let s,u;for(t=i[0],s=0;s<i.length-1;s++)u=br(this,a[r+s],n,s),u===rt&&(u=this._$AH[s]),l||(l=!_o(u)||u!==this._$AH[s]),u===se?t=se:t!==se&&(t+=(u??"")+i[s+1]),this._$AH[s]=u}l&&!o&&this.j(t)}j(t){t===se?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Bm extends hl{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===se?void 0:t}}const jm=wr?wr.emptyScript:"";class Vm extends hl{constructor(){super(...arguments),this.type=4}j(t){t&&t!==se?this.element.setAttribute(this.name,jm):this.element.removeAttribute(this.name)}}class Hm extends hl{constructor(t,n,r,o,i){super(t,n,r,o,i),this.type=5}_$AI(t,n=this){var r;if((t=(r=br(this,t,n,0))!==null&&r!==void 0?r:se)===rt)return;const o=this._$AH,i=t===se&&o!==se||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,l=t!==se&&(o===se||i);i&&this.element.removeEventListener(this.name,this,o),l&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var n,r;typeof this._$AH=="function"?this._$AH.call((r=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&r!==void 0?r:this.element,t):this._$AH.handleEvent(t)}}class Um{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){br(this,t)}}const Dc=Ui.litHtmlPolyfillSupport;Dc==null||Dc(xo,Ao),((Yl=Ui.litHtmlVersions)!==null&&Yl!==void 0?Yl:Ui.litHtmlVersions=[]).push("2.8.0");const Wm=(e,t,n)=>{var r,o;const i=(r=n==null?void 0:n.renderBefore)!==null&&r!==void 0?r:t;let l=i._$litPart$;if(l===void 0){const a=(o=n==null?void 0:n.renderBefore)!==null&&o!==void 0?o:null;i._$litPart$=l=new Ao(t.insertBefore(bo(),a),a,void 0,n??{})}return l._$AI(e),l};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Xl,Zl;let cr=class extends Hn{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,n;const r=super.createRenderRoot();return(t=(n=this.renderOptions).renderBefore)!==null&&t!==void 0||(n.renderBefore=r.firstChild),r}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Wm(n,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return rt}};cr.finalized=!0,cr._$litElement$=!0,(Xl=globalThis.litElementHydrateSupport)===null||Xl===void 0||Xl.call(globalThis,{LitElement:cr});const Fc=globalThis.litElementPolyfillSupport;Fc==null||Fc({LitElement:cr});((Zl=globalThis.litElementVersions)!==null&&Zl!==void 0?Zl:globalThis.litElementVersions=[]).push("3.3.3");var at=ze`
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
`,Km=ze`
  ${at}

  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,Qm=ze`
  ${at}

  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`,Gm=ze`
  ${at}

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
`,ra="";function Wi(e){ra=e}function Ym(e=""){if(!ra){const t=[...document.getElementsByTagName("script")],n=t.find(r=>r.hasAttribute("data-shoelace"));if(n)Wi(n.getAttribute("data-shoelace"));else{const r=t.find(i=>/shoelace(\.min)?\.js($|\?)/.test(i.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(i.src));let o="";r&&(o=r.getAttribute("src")),Wi(o.split("/").slice(0,-1).join("/"))}}return ra.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}var qm={name:"default",resolver:e=>Ym(`assets/icons/${e}.svg`)},Xm=qm,Ic={caret:`
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
  `},Zm={name:"system",resolver:e=>e in Ic?`data:image/svg+xml,${encodeURIComponent(Ic[e])}`:""},Jm=Zm,ev=[Xm,Jm],oa=[];function tv(e){oa.push(e)}function nv(e){oa=oa.filter(t=>t!==e)}function Bc(e){return ev.find(t=>t.name===e)}var zh=Object.defineProperty,rv=Object.defineProperties,ov=Object.getOwnPropertyDescriptor,iv=Object.getOwnPropertyDescriptors,jc=Object.getOwnPropertySymbols,lv=Object.prototype.hasOwnProperty,sv=Object.prototype.propertyIsEnumerable,Vc=(e,t,n)=>t in e?zh(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Bn=(e,t)=>{for(var n in t||(t={}))lv.call(t,n)&&Vc(e,n,t[n]);if(jc)for(var n of jc(t))sv.call(t,n)&&Vc(e,n,t[n]);return e},fl=(e,t)=>rv(e,iv(t)),m=(e,t,n,r)=>{for(var o=r>1?void 0:r?ov(t,n):t,i=e.length-1,l;i>=0;i--)(l=e[i])&&(o=(r?l(t,n,o):l(o))||o);return r&&o&&zh(t,n,o),o};function Ie(e,t){const n=Bn({waitUntilFirstUpdate:!1},t);return(r,o)=>{const{update:i}=r,l=Array.isArray(e)?e:[e];r.update=function(a){l.forEach(s=>{const u=s;if(a.has(u)){const p=a.get(u),d=this[u];p!==d&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[o](p,d)}}),i.call(this,a)}}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const av=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(n){n.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(n){n.createProperty(t.key,e)}},uv=(e,t,n)=>{t.constructor.createProperty(n,e)};function y(e){return(t,n)=>n!==void 0?uv(e,t,n):av(e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function fe(e){return y({...e,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const cv=({finisher:e,descriptor:t})=>(n,r)=>{var o;if(r===void 0){const i=(o=n.originalKey)!==null&&o!==void 0?o:n.key,l=t!=null?{kind:"method",placement:"prototype",key:i,descriptor:t(n.key)}:{...n,key:i};return e!=null&&(l.finisher=function(a){e(a,i)}),l}{const i=n.constructor;t!==void 0&&Object.defineProperty(n,r,t(r)),e==null||e(i,r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function re(e,t){return cv({descriptor:n=>{const r={get(){var o,i;return(i=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(e))!==null&&i!==void 0?i:null},enumerable:!0,configurable:!0};if(t){const o=typeof n=="symbol"?Symbol():"__"+n;r.get=function(){var i,l;return this[o]===void 0&&(this[o]=(l=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(e))!==null&&l!==void 0?l:null),this[o]}}return r}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Jl;((Jl=window.HTMLSlotElement)===null||Jl===void 0?void 0:Jl.prototype.assignedElements)!=null;var ke=class extends cr{constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([t,n])=>{this.constructor.define(t,n)})}emit(t,n){const r=new CustomEvent(t,Bn({bubbles:!0,cancelable:!1,composed:!0,detail:{}},n));return this.dispatchEvent(r),r}static define(t,n=this,r={}){const o=customElements.get(t);if(!o){customElements.define(t,class extends n{},r);return}let i=" (unknown version)",l=i;"version"in n&&n.version&&(i=" v"+n.version),"version"in o&&o.version&&(l=" v"+o.version),!(i&&l&&i===l)&&console.warn(`Attempted to register <${t}>${i}, but <${t}>${l} has already been registered.`)}};ke.version="2.8.0";ke.dependencies={};m([y()],ke.prototype,"dir",2);m([y()],ke.prototype,"lang",2);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dv=(e,t)=>t===void 0?(e==null?void 0:e._$litType$)!==void 0:(e==null?void 0:e._$litType$)===t,pv=e=>e.strings===void 0,hv={},fv=(e,t=hv)=>e._$AH=t;var Fr=Symbol(),Zo=Symbol(),es,ts=new Map,Be=class extends ke{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var n;let r;if(t!=null&&t.spriteSheet)return G`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`;try{if(r=await fetch(e,{mode:"cors"}),!r.ok)return r.status===410?Fr:Zo}catch{return Zo}try{const o=document.createElement("div");o.innerHTML=await r.text();const i=o.firstElementChild;if(((n=i==null?void 0:i.tagName)==null?void 0:n.toLowerCase())!=="svg")return Fr;es||(es=new DOMParser);const a=es.parseFromString(i.outerHTML,"text/html").body.querySelector("svg");return a?(a.part.add("svg"),document.adoptNode(a)):Fr}catch{return Fr}}connectedCallback(){super.connectedCallback(),tv(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),nv(this)}getUrl(){const e=Bc(this.library);return this.name&&e?e.resolver(this.name):this.src}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const t=Bc(this.library),n=this.getUrl();if(!n){this.svg=null;return}let r=ts.get(n);if(r||(r=this.resolveIcon(n,t),ts.set(n,r)),!this.initialRender)return;const o=await r;if(o===Zo&&ts.delete(n),n===this.getUrl()){if(dv(o)){this.svg=o;return}switch(o){case Zo:case Fr:this.svg=null,this.emit("sl-error");break;default:this.svg=o.cloneNode(!0),(e=t==null?void 0:t.mutator)==null||e.call(t,this.svg),this.emit("sl-load")}}}render(){return this.svg}};Be.styles=Gm;m([fe()],Be.prototype,"svg",2);m([y({reflect:!0})],Be.prototype,"name",2);m([y()],Be.prototype,"src",2);m([y()],Be.prototype,"label",2);m([y({reflect:!0})],Be.prototype,"library",2);m([Ie("label")],Be.prototype,"handleLabelChange",1);m([Ie(["name","src","library"])],Be.prototype,"setIcon",1);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ht={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},iu=e=>(...t)=>({_$litDirective$:e,values:t});let lu=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,r){this._$Ct=t,this._$AM=n,this._$Ci=r}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fe=iu(class extends lu{constructor(e){var t;if(super(e),e.type!==Ht.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var n,r;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!(!((n=this.nt)===null||n===void 0)&&n.has(i))&&this.it.add(i);return this.render(t)}const o=e.element.classList;this.it.forEach(i=>{i in t||(o.remove(i),this.it.delete(i))});for(const i in t){const l=!!t[i];l===this.it.has(i)||!((r=this.nt)===null||r===void 0)&&r.has(i)||(l?(o.add(i),this.it.add(i)):(o.remove(i),this.it.delete(i)))}return rt}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ah=Symbol.for(""),gv=e=>{if((e==null?void 0:e.r)===Ah)return e==null?void 0:e._$litStatic$},Ki=(e,...t)=>({_$litStatic$:t.reduce((n,r,o)=>n+(i=>{if(i._$litStatic$!==void 0)return i._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${i}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(r)+e[o+1],e[0]),r:Ah}),Hc=new Map,mv=e=>(t,...n)=>{const r=n.length;let o,i;const l=[],a=[];let s,u=0,p=!1;for(;u<r;){for(s=t[u];u<r&&(i=n[u],(o=gv(i))!==void 0);)s+=o+t[++u],p=!0;u!==r&&a.push(i),l.push(s),u++}if(u===r&&l.push(t[r]),p){const d=l.join("$$lit$$");(t=Hc.get(d))===void 0&&(l.raw=l,Hc.set(d,t=l)),n=a}return e(t,...n)},vi=mv(G);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=e=>e??se;var Ze=class extends ke{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){const e=!!this.href,t=e?Ki`a`:Ki`button`;return vi`
      <${t}
        part="base"
        class=${Fe({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${N(e?void 0:this.disabled)}
        type=${N(e?void 0:"button")}
        href=${N(e?this.href:void 0)}
        target=${N(e?this.target:void 0)}
        download=${N(e?this.download:void 0)}
        rel=${N(e&&this.target?"noreferrer noopener":void 0)}
        role=${N(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${N(this.name)}
          library=${N(this.library)}
          src=${N(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `}};Ze.styles=Qm;Ze.dependencies={"sl-icon":Be};m([re(".icon-button")],Ze.prototype,"button",2);m([fe()],Ze.prototype,"hasFocus",2);m([y()],Ze.prototype,"name",2);m([y()],Ze.prototype,"library",2);m([y()],Ze.prototype,"src",2);m([y()],Ze.prototype,"href",2);m([y()],Ze.prototype,"target",2);m([y()],Ze.prototype,"download",2);m([y()],Ze.prototype,"label",2);m([y({type:Boolean,reflect:!0})],Ze.prototype,"disabled",2);var Ph=new Map,vv=new WeakMap;function yv(e){return e??{keyframes:[],options:{duration:0}}}function Uc(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function Dt(e,t){Ph.set(e,yv(t))}function $t(e,t,n){const r=vv.get(e);if(r!=null&&r[t])return Uc(r[t],n.dir);const o=Ph.get(t);return o?Uc(o,n.dir):{keyframes:[],options:{duration:0}}}function Qi(e,t){return new Promise(n=>{function r(o){o.target===e&&(e.removeEventListener(t,r),n())}e.addEventListener(t,r)})}function xn(e,t,n){return new Promise(r=>{if((n==null?void 0:n.duration)===1/0)throw new Error("Promise-based animations must be finite.");const o=e.animate(t,fl(Bn({},n),{duration:wv()?0:n.duration}));o.addEventListener("cancel",r,{once:!0}),o.addEventListener("finish",r,{once:!0})})}function wv(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function nr(e){return Promise.all(e.getAnimations().map(t=>new Promise(n=>{const r=requestAnimationFrame(n);t.addEventListener("cancel",()=>r,{once:!0}),t.addEventListener("finish",()=>r,{once:!0}),t.cancel()})))}const ia=new Set,bv=new MutationObserver(Nh),rr=new Map;let Th=document.documentElement.dir||"ltr",Lh=document.documentElement.lang||navigator.language,kn;bv.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function _v(...e){e.map(t=>{const n=t.$code.toLowerCase();rr.has(n)?rr.set(n,Object.assign(Object.assign({},rr.get(n)),t)):rr.set(n,t),kn||(kn=t)}),Nh()}function Nh(){Th=document.documentElement.dir||"ltr",Lh=document.documentElement.lang||navigator.language,[...ia.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}let Rh=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){ia.add(this.host)}hostDisconnected(){ia.delete(this.host)}dir(){return`${this.host.dir||Th}`.toLowerCase()}lang(){return`${this.host.lang||Lh}`.toLowerCase()}getTranslationData(t){var n,r;const o=new Intl.Locale(t),i=o==null?void 0:o.language.toLowerCase(),l=(r=(n=o==null?void 0:o.region)===null||n===void 0?void 0:n.toLowerCase())!==null&&r!==void 0?r:"",a=rr.get(`${i}-${l}`),s=rr.get(i);return{locale:o,language:i,region:l,primary:a,secondary:s}}exists(t,n){var r;const{primary:o,secondary:i}=this.getTranslationData((r=n.lang)!==null&&r!==void 0?r:this.lang());return n=Object.assign({includeFallback:!1},n),!!(o&&o[t]||i&&i[t]||n.includeFallback&&kn&&kn[t])}term(t,...n){const{primary:r,secondary:o}=this.getTranslationData(this.lang());let i;if(r&&r[t])i=r[t];else if(o&&o[t])i=o[t];else if(kn&&kn[t])i=kn[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof i=="function"?i(...n):i}date(t,n){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),n).format(t)}number(t,n){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),n).format(t)}relativeTime(t,n,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(t,n)}};var Cr=class extends Rh{},gl=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=n=>{const r=n.target;(this.slotNames.includes("[default]")&&!r.name||r.name&&this.slotNames.includes(r.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}},vt=class extends ke{constructor(){super(...arguments),this.hasSlotController=new gl(this,"footer"),this.localize=new Cr(this),this.modal=new Pm(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=e=>{e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),Cc(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),Ec(this)}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const n=$t(this,"dialog.denyClose",{dir:this.localize.dir()});xn(this.panel,n.keyframes,n.options);return}this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),Cc(this);const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([nr(this.dialog),nr(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=$t(this,"dialog.show",{dir:this.localize.dir()}),n=$t(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([xn(this.panel,t.keyframes,t.options),xn(this.overlay,n.keyframes,n.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([nr(this.dialog),nr(this.overlay)]);const e=$t(this,"dialog.hide",{dir:this.localize.dir()}),t=$t(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([xn(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),xn(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,Ec(this);const n=this.originalTrigger;typeof(n==null?void 0:n.focus)=="function"&&setTimeout(()=>n.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,Qi(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Qi(this,"sl-after-hide")}render(){return G`
      <div
        part="base"
        class=${Fe({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${N(this.noHeader?this.label:void 0)}
          aria-labelledby=${N(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":G`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              `}
          ${""}
          <slot part="body" class="dialog__body" tabindex="-1"></slot>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};vt.styles=Km;vt.dependencies={"sl-icon-button":Ze};m([re(".dialog")],vt.prototype,"dialog",2);m([re(".dialog__panel")],vt.prototype,"panel",2);m([re(".dialog__overlay")],vt.prototype,"overlay",2);m([y({type:Boolean,reflect:!0})],vt.prototype,"open",2);m([y({reflect:!0})],vt.prototype,"label",2);m([y({attribute:"no-header",type:Boolean,reflect:!0})],vt.prototype,"noHeader",2);m([Ie("open",{waitUntilFirstUpdate:!0})],vt.prototype,"handleOpenChange",1);Dt("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});Dt("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});Dt("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});Dt("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});Dt("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xv=new Set(["children","localName","ref","style","className"]),Wc=new WeakMap,kv=(e,t,n,r,o)=>{const i=o==null?void 0:o[t];i===void 0||n===r?(e[t]=n,n==null&&t in HTMLElement.prototype&&e.removeAttribute(t)):((l,a,s)=>{let u=Wc.get(l);u===void 0&&Wc.set(l,u=new Map);let p=u.get(a);s!==void 0?p===void 0?(u.set(a,p={handleEvent:s}),l.addEventListener(a,p)):p.handleEvent=s:p!==void 0&&(u.delete(a),l.removeEventListener(a,p))})(e,i,n)},mn=({react:e,tagName:t,elementClass:n,events:r,displayName:o})=>{const i=new Set(Object.keys(r??{})),l=e.forwardRef((a,s)=>{const u=e.useRef(null),p=e.useRef(null),d={},f={};for(const[v,w]of Object.entries(a))xv.has(v)?d[v==="className"?"class":v]=w:i.has(v)||v in n.prototype?f[v]=w:d[v]=w;return e.useLayoutEffect(()=>{if(p.current!==null){for(const v in f)kv(p.current,v,a[v],u.current?u.current[v]:void 0,r);u.current=a}}),e.useLayoutEffect(()=>{var v;(v=p.current)===null||v===void 0||v.removeAttribute("defer-hydration")},[]),d.suppressHydrationWarning=!0,e.createElement(t,{...d,ref:v=>{p.current=v,typeof s=="function"?s(v):s!==null&&(s.current=v)}})});return l.displayName=o??n.name,l};var Sv="sl-dialog";vt.define("sl-dialog");var Cv=mn({tagName:Sv,elementClass:vt,react:pn,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInitialFocus:"sl-initial-focus",onSlRequestClose:"sl-request-close"},displayName:"SlDialog"}),Ev=Cv,$v={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};_v($v);var Oh=ze`
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
`,zv=ze`
  ${at}
  ${Oh}

  :host {
    display: block;
  }

  .textarea {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    color: var(--sl-input-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--sl-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--sl-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--sl-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--sl-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }
`,su=(e="value")=>(t,n)=>{const r=t.constructor,o=r.prototype.attributeChangedCallback;r.prototype.attributeChangedCallback=function(i,l,a){var s;const u=r.getPropertyOptions(e),p=typeof u.attribute=="string"?u.attribute:e;if(i===p){const d=u.converter||wo,v=(typeof d=="function"?d:(s=d==null?void 0:d.fromAttribute)!=null?s:wo.fromAttribute)(a,u.type);this[e]!==v&&(this[n]=v)}o.call(this,i,l,a)}},Ir=new WeakMap,Br=new WeakMap,ns=new WeakSet,Jo=new WeakMap,ml=class{constructor(e,t){this.handleFormData=n=>{const r=this.options.disabled(this.host),o=this.options.name(this.host),i=this.options.value(this.host),l=this.host.tagName.toLowerCase()==="sl-button";!r&&!l&&typeof o=="string"&&o.length>0&&typeof i<"u"&&(Array.isArray(i)?i.forEach(a=>{n.formData.append(o,a.toString())}):n.formData.append(o,i.toString()))},this.handleFormSubmit=n=>{var r;const o=this.options.disabled(this.host),i=this.options.reportValidity;this.form&&!this.form.noValidate&&((r=Ir.get(this.form))==null||r.forEach(l=>{this.setUserInteracted(l,!0)})),this.form&&!this.form.noValidate&&!o&&!i(this.host)&&(n.preventDefault(),n.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Jo.set(this.host,[])},this.handleInteraction=n=>{const r=Jo.get(this.host);r.includes(n.type)||r.push(n.type),r.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const n=this.form.querySelectorAll("*");for(const r of n)if(typeof r.reportValidity=="function"&&!r.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=Bn({form:n=>{if(n.hasAttribute("form")&&n.getAttribute("form")!==""){const r=n.getRootNode(),o=n.getAttribute("form");if(o)return r.getElementById(o)}return n.closest("form")},name:n=>n.name,value:n=>n.value,defaultValue:n=>n.defaultValue,disabled:n=>{var r;return(r=n.disabled)!=null?r:!1},reportValidity:n=>typeof n.reportValidity=="function"?n.reportValidity():!0,setValue:(n,r)=>n.value=r,assumeInteractionOn:["sl-input"]},t)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),Jo.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),Jo.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,Ir.has(this.form)?Ir.get(this.form).add(this.host):Ir.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Br.has(this.form)||(Br.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity())):this.form=void 0}detachForm(){var e;this.form&&((e=Ir.get(this.form))==null||e.delete(this.host),this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Br.has(this.form)&&(this.form.reportValidity=Br.get(this.form),Br.delete(this.form))),this.form=void 0}setUserInteracted(e,t){t?ns.add(e):ns.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){const n=document.createElement("button");n.type=e,n.style.position="absolute",n.style.width="0",n.style.height="0",n.style.clipPath="inset(50%)",n.style.overflow="hidden",n.style.whiteSpace="nowrap",t&&(n.name=t.name,n.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(r=>{t.hasAttribute(r)&&n.setAttribute(r,t.getAttribute(r))})),this.form.append(n),n.click(),n.remove()}}getForm(){var e;return(e=this.form)!=null?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const t=this.host,n=!!ns.has(t),r=!!t.required;t.toggleAttribute("data-required",r),t.toggleAttribute("data-optional",!r),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&n),t.toggleAttribute("data-user-valid",e&&n)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||e==null||e.preventDefault()}},au=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(fl(Bn({},au),{valid:!1,valueMissing:!0}));Object.freeze(fl(Bn({},au),{valid:!1,customError:!0}));/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mh=iu(class extends lu{constructor(e){if(super(e),e.type!==Ht.PROPERTY&&e.type!==Ht.ATTRIBUTE&&e.type!==Ht.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!pv(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===rt||t===se)return t;const n=e.element,r=e.name;if(e.type===Ht.PROPERTY){if(t===n[r])return rt}else if(e.type===Ht.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(r))return rt}else if(e.type===Ht.ATTRIBUTE&&n.getAttribute(r)===t+"")return rt;return fv(e),t}});var H=class extends ke{constructor(){super(...arguments),this.formControlController=new ml(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new gl(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}setTextareaHeight(){this.resize==="auto"?(this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=void 0}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(e){if(e){typeof e.top=="number"&&(this.input.scrollTop=e.top),typeof e.left=="number"&&(this.input.scrollLeft=e.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(e,t,n="none"){this.input.setSelectionRange(e,t,n)}setRangeText(e,t,n,r){this.input.setRangeText(e,t,n,r),this.value!==this.input.value&&(this.value=this.input.value),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),n=this.label?!0:!!e,r=this.helpText?!0:!!t;return G`
      <div
        part="form-control"
        class=${Fe({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":n,"form-control--has-help-text":r})}
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
            class=${Fe({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${N(this.name)}
              .value=${Mh(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${N(this.placeholder)}
              rows=${N(this.rows)}
              minlength=${N(this.minlength)}
              maxlength=${N(this.maxlength)}
              autocapitalize=${N(this.autocapitalize)}
              autocorrect=${N(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${N(this.spellcheck)}
              enterkeyhint=${N(this.enterkeyhint)}
              inputmode=${N(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
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
    `}};H.styles=zv;m([re(".textarea__control")],H.prototype,"input",2);m([fe()],H.prototype,"hasFocus",2);m([y()],H.prototype,"title",2);m([y()],H.prototype,"name",2);m([y()],H.prototype,"value",2);m([y({reflect:!0})],H.prototype,"size",2);m([y({type:Boolean,reflect:!0})],H.prototype,"filled",2);m([y()],H.prototype,"label",2);m([y({attribute:"help-text"})],H.prototype,"helpText",2);m([y()],H.prototype,"placeholder",2);m([y({type:Number})],H.prototype,"rows",2);m([y()],H.prototype,"resize",2);m([y({type:Boolean,reflect:!0})],H.prototype,"disabled",2);m([y({type:Boolean,reflect:!0})],H.prototype,"readonly",2);m([y({reflect:!0})],H.prototype,"form",2);m([y({type:Boolean,reflect:!0})],H.prototype,"required",2);m([y({type:Number})],H.prototype,"minlength",2);m([y({type:Number})],H.prototype,"maxlength",2);m([y()],H.prototype,"autocapitalize",2);m([y()],H.prototype,"autocorrect",2);m([y()],H.prototype,"autocomplete",2);m([y({type:Boolean})],H.prototype,"autofocus",2);m([y()],H.prototype,"enterkeyhint",2);m([y({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],H.prototype,"spellcheck",2);m([y()],H.prototype,"inputmode",2);m([su()],H.prototype,"defaultValue",2);m([Ie("disabled",{waitUntilFirstUpdate:!0})],H.prototype,"handleDisabledChange",1);m([Ie("rows",{waitUntilFirstUpdate:!0})],H.prototype,"handleRowsChange",1);m([Ie("value",{waitUntilFirstUpdate:!0})],H.prototype,"handleValueChange",1);var Av="sl-textarea";H.define("sl-textarea");var Pv=mn({tagName:Av,elementClass:H,react:pn,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlTextarea"}),Tv=Pv,Dh=Object.defineProperty,Lv=Object.getOwnPropertyDescriptor,Kc=Object.getOwnPropertySymbols,Nv=Object.prototype.hasOwnProperty,Rv=Object.prototype.propertyIsEnumerable,Qc=(e,t,n)=>t in e?Dh(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ov=(e,t)=>{for(var n in t||(t={}))Nv.call(t,n)&&Qc(e,n,t[n]);if(Kc)for(var n of Kc(t))Rv.call(t,n)&&Qc(e,n,t[n]);return e},je=(e,t,n,r)=>{for(var o=r>1?void 0:r?Lv(t,n):t,i=e.length-1,l;i>=0;i--)(l=e[i])&&(o=(r?l(t,n,o):l(o))||o);return r&&o&&Dh(t,n,o),o},Po=class extends cr{constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){const n=new CustomEvent(e,Ov({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(n),n}static define(e,t=this,n={}){const r=customElements.get(e);if(!r){customElements.define(e,class extends t{},n);return}let o=" (unknown version)",i=o;"version"in t&&t.version&&(o=" v"+t.version),"version"in r&&r.version&&(i=" v"+r.version),!(o&&i&&o===i)&&console.warn(`Attempted to register <${e}>${o}, but <${e}>${i} has already been registered.`)}};Po.version="2.8.0";Po.dependencies={};je([y()],Po.prototype,"dir",2);je([y()],Po.prototype,"lang",2);var Mv=ze`
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

  :host {
    --error-color: var(--sl-color-danger-600);
    --success-color: var(--sl-color-success-600);

    display: inline-block;
  }

  .copy-button__button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
  }



  .copy-button:hover:not(.copy-button--disabled),
  .copy-button:focus-visible:not(.copy-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .copy-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .copy-button:focus {
    outline: none;
  }

  .copy-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .copy-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }



  .copy-button--success {
    color: var(--success-color);
  }

  .copy-button--error {
    color: var(--error-color);
  }

  .copy-button__button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .copy-button__button[disabled] {
    opacity: 0.5;
    cursor: not-allowed !important;
  }

  slot {
    display: inline-flex;
  }
`,Dv="sl-icon";Be.define("sl-icon");mn({tagName:Dv,elementClass:Be,react:pn,events:{onSlLoad:"sl-load",onSlError:"sl-error"},displayName:"SlIcon"});Wi("https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.14.0/cdn/");var Ae=class extends Po{constructor(){super(...arguments),this.localize=new Rh(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.hoist=!1,this.hasFocus=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let e=this.value;if(this.from){const t=this.getRootNode(),n=this.from.includes("."),r=this.from.includes("[")&&this.from.includes("]");let o=this.from,i="";n?[o,i]=this.from.trim().split("."):r&&([o,i]=this.from.trim().replace(/\]$/,"").split("["));const l="getElementById"in t?t.getElementById(o):null;l?r?e=l.getAttribute(i)||"":n?e=l[i]||"":e=l.textContent||"":(this.showStatus("error"),this.emit("sl-error"))}if(!e)this.showStatus("error"),this.emit("sl-error");else try{await navigator.clipboard.writeText(e),this.showStatus("success"),this.emit("sl-copy",{detail:{value:e}})}catch{this.showStatus("error"),this.emit("sl-error")}}async showStatus(e){const t=e==="success"?this.successIcon:this.errorIcon,n=$t(this,"copy.in",{dir:"ltr"}),r=$t(this,"copy.out",{dir:"ltr"});await this.copyIcon.animate(r.keyframes,r.options).finished,this.copyIcon.hidden=!0,this.status=e,t.hidden=!1,await t.animate(n.keyframes,n.options).finished,setTimeout(async()=>{await t.animate(r.keyframes,r.options).finished,t.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await this.copyIcon.animate(n.keyframes,n.options).finished,this.isCopying=!1},this.feedbackDuration)}render(){return G`
        <button
        class=${Fe({"copy-button":!0,"copy-button--success":this.status==="success","copy-button--error":this.status==="error","copy-button__button":!0,"icon-button--focused":this.hasFocus})}
          part="base"
          type="button"
          title="Copy"
          ?disabled=${this.disabled}
          @click=${this.handleCopy}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
        >
            <slot part="copy-icon" name="copy-icon">
              <sl-icon name="copy"></sl-icon>
            </slot>
            <slot part="success-icon" name="success-icon" hidden>
              <sl-icon library="system" name="check"></sl-icon>
            </slot>
            <slot part="error-icon" name="error-icon" hidden>
              <sl-icon library="system" name="x-lg"></sl-icon>
            </slot>
          </button>
      `}};Ae.styles=Mv;je([re(".copy-button")],Ae.prototype,"button",2);je([fe()],Ae.prototype,"hasFocus",2);je([re('slot[name="copy-icon"]')],Ae.prototype,"copyIcon",2);je([re('slot[name="success-icon"]')],Ae.prototype,"successIcon",2);je([re('slot[name="error-icon"]')],Ae.prototype,"errorIcon",2);je([fe()],Ae.prototype,"isCopying",2);je([fe()],Ae.prototype,"status",2);je([y()],Ae.prototype,"value",2);je([y()],Ae.prototype,"from",2);je([y({type:Boolean,reflect:!0})],Ae.prototype,"disabled",2);je([y({attribute:"feedback-duration",type:Number})],Ae.prototype,"feedbackDuration",2);je([y({type:Boolean})],Ae.prototype,"hoist",2);Dt("copy.in",{keyframes:[{scale:".25",opacity:".25"},{scale:"1",opacity:"1"}],options:{duration:100}});Dt("copy.out",{keyframes:[{scale:"1",opacity:"1"},{scale:".25",opacity:"0"}],options:{duration:100}});var Fv="sl-copy-button-adjust";Ae.define("sl-copy-button-adjust");var Iv=mn({tagName:Fv,elementClass:Ae,react:pn,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus",onSlCopy:"sl-copy",onSlError:"sl-error"},displayName:"SlCopyButtonAdjust"}),Fh=Iv;Wi("https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.14.0/cdn/");function Bv({coloroutrgb:e}){const[t,n]=Ne.useState(!1),r=jv(e);return T.jsxs(T.Fragment,{children:[T.jsx("button",{className:"button-85",onClick:()=>n(!0),children:T.jsx("img",{src:"https://matplotlib.org/stable/_static/logo_dark.svg",width:"100px"})}),T.jsxs(Ev,{label:"Python code",open:t,onSlAfterHide:()=>n(!1),style:{"--width":"100%",textAlign:"left"},children:[T.jsx(Fh,{slot:"header-actions",style:{flex:"0 0 auto",display:"flex",alignItems:"center",fontSize:"var(--sl-font-size-medium)"},value:r}),T.jsx(Tv,{className:"code-area",value:r,rows:15,size:"small",readOnly:!0})]})]})}function jv(e){let t="";return t+=`def manual_cmap():
`,t+=`    import numpy as np
`,t+=`    from matplotlib.colors import LinearSegmentedColormap
`,t+=`    colors = [
`,e.map(n=>{t+="        ["+n[0]+","+n[1]+","+n[2]+`],
`}),t+=`    ]
`,t+=`    return LinearSegmentedColormap.from_list("manual_cmap",np.array(colors)/255)
`,t+="# cmap = manual_cmap()",t}const Vv=["RGB","Hex"];function Hv({coloroutrgb:e}){const[t,n]=Ne.useState("RGB"),[r,o]=Ne.useState(",");function i(s){n(s.target.value)}let l="";t==="RGB"&&e.map(s=>{l+=s[0]+r+s[1]+r+s[2]+`
`}),t==="Hex"&&e.map(s=>{l+=Uv(s)+`
`});const a="	";return T.jsxs("div",{className:"txtarea",children:[T.jsx("div",{children:T.jsx(Bv,{coloroutrgb:e})}),T.jsxs("div",{children:[T.jsx("label",{children:"output type: "}),T.jsx("select",{title:"colortype",onChange:s=>i(s),children:Vv.map((s,u)=>T.jsx("option",{children:s},u))}),T.jsx("br",{}),T.jsx("label",{children:"separator: "}),T.jsxs("select",{title:"separator",onChange:s=>o(s.target.value),children:[T.jsx("option",{value:",",children:","}),T.jsx("option",{value:a,children:"tab"}),T.jsx("option",{value:" ",children:"space"})]})]}),T.jsxs("div",{style:{position:"relative"},children:[T.jsx(Fh,{value:l,style:{position:"absolute",right:"0"}}),T.jsx("textarea",{value:l,rows:e.length+1,cols:25,readOnly:!0,style:{resize:"none"}})]})]})}function Uv(e){let t=(+e[0]).toString(16),n=(+e[1]).toString(16),r=(+e[2]).toString(16);return t.length==1&&(t="0"+t),n.length==1&&(n="0"+n),r.length==1&&(r="0"+r),"#"+t+n+r}function Wv(e){const t={position:"sticky",top:0,zIndex:100},n=Ne.useRef(null);return Ne.useEffect(()=>{const o=n.current.getContext("2d");Kv(o,e.color_out_rgb)}),T.jsx("canvas",{ref:n,height:"100",width:"500",style:t})}function Kv(e,t){e.clearRect(0,0,500,100),e.beginPath(),e.rect(50,30,400,40),e.stroke();for(let n=0;n<t.length;n++){const r="rgb("+t[n][0]+","+t[n][1]+","+t[n][2]+")",o=50+n*400/t.length;Qv(e,r,o,30,400/t.length,40)}}function Qv(e,t,n,r,o,i){e.fillStyle=t,e.fillRect(n,r,o,i)}var Gv=ze`
  ${at}

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
`,Ih=class extends ke{render(){return G` <slot></slot> `}};Ih.styles=Gv;function rs(e,t){function n(o){const i=e.getBoundingClientRect(),l=e.ownerDocument.defaultView,a=i.left+l.pageXOffset,s=i.top+l.pageYOffset,u=o.pageX-a,p=o.pageY-s;t!=null&&t.onMove&&t.onMove(u,p)}function r(){document.removeEventListener("pointermove",n),document.removeEventListener("pointerup",r),t!=null&&t.onStop&&t.onStop()}document.addEventListener("pointermove",n,{passive:!0}),document.addEventListener("pointerup",r),(t==null?void 0:t.initialEvent)instanceof PointerEvent&&n(t.initialEvent)}var Yv=ze`
  ${at}
  ${Oh}

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
`,O=class extends ke{constructor(){super(...arguments),this.formControlController=new ml(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new gl(this,"help-text","label"),this.localize=new Cr(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var e;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((e=this.input)==null?void 0:e.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(e){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=e,this.value=this.__dateInput.value}get valueAsNumber(){var e;return this.__numberInput.value=this.value,((e=this.input)==null?void 0:e.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(e){this.__numberInput.valueAsNumber=e,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(e){this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change"),this.input.focus(),e.stopPropagation()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleKeyDown(e){const t=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key==="Enter"&&!t&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,n="none"){this.input.setSelectionRange(e,t,n)}setRangeText(e,t,n,r){this.input.setRangeText(e,t,n,r),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),n=this.label?!0:!!e,r=this.helpText?!0:!!t,o=this.clearable&&!this.disabled&&!this.readonly,i=o&&(typeof this.value=="number"||this.value.length>0);return G`
      <div
        part="form-control"
        class=${Fe({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":n,"form-control--has-help-text":r})}
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
            class=${Fe({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
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
              name=${N(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${N(this.placeholder)}
              minlength=${N(this.minlength)}
              maxlength=${N(this.maxlength)}
              min=${N(this.min)}
              max=${N(this.max)}
              step=${N(this.step)}
              .value=${Mh(this.value)}
              autocapitalize=${N(this.autocapitalize)}
              autocomplete=${N(this.autocomplete)}
              autocorrect=${N(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${N(this.pattern)}
              enterkeyhint=${N(this.enterkeyhint)}
              inputmode=${N(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${o?G`
                  <button
                    part="clear-button"
                    class=${Fe({input__clear:!0,"input__clear--visible":i})}
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
            ${this.passwordToggle&&!this.disabled?G`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?G`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:G`
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
    `}};O.styles=Yv;O.dependencies={"sl-icon":Be};m([re(".input__control")],O.prototype,"input",2);m([fe()],O.prototype,"hasFocus",2);m([y()],O.prototype,"title",2);m([y({reflect:!0})],O.prototype,"type",2);m([y()],O.prototype,"name",2);m([y()],O.prototype,"value",2);m([su()],O.prototype,"defaultValue",2);m([y({reflect:!0})],O.prototype,"size",2);m([y({type:Boolean,reflect:!0})],O.prototype,"filled",2);m([y({type:Boolean,reflect:!0})],O.prototype,"pill",2);m([y()],O.prototype,"label",2);m([y({attribute:"help-text"})],O.prototype,"helpText",2);m([y({type:Boolean})],O.prototype,"clearable",2);m([y({type:Boolean,reflect:!0})],O.prototype,"disabled",2);m([y()],O.prototype,"placeholder",2);m([y({type:Boolean,reflect:!0})],O.prototype,"readonly",2);m([y({attribute:"password-toggle",type:Boolean})],O.prototype,"passwordToggle",2);m([y({attribute:"password-visible",type:Boolean})],O.prototype,"passwordVisible",2);m([y({attribute:"no-spin-buttons",type:Boolean})],O.prototype,"noSpinButtons",2);m([y({reflect:!0})],O.prototype,"form",2);m([y({type:Boolean,reflect:!0})],O.prototype,"required",2);m([y()],O.prototype,"pattern",2);m([y({type:Number})],O.prototype,"minlength",2);m([y({type:Number})],O.prototype,"maxlength",2);m([y()],O.prototype,"min",2);m([y()],O.prototype,"max",2);m([y()],O.prototype,"step",2);m([y()],O.prototype,"autocapitalize",2);m([y()],O.prototype,"autocorrect",2);m([y()],O.prototype,"autocomplete",2);m([y({type:Boolean})],O.prototype,"autofocus",2);m([y()],O.prototype,"enterkeyhint",2);m([y({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],O.prototype,"spellcheck",2);m([y()],O.prototype,"inputmode",2);m([Ie("disabled",{waitUntilFirstUpdate:!0})],O.prototype,"handleDisabledChange",1);m([Ie("step",{waitUntilFirstUpdate:!0})],O.prototype,"handleStepChange",1);m([Ie("value",{waitUntilFirstUpdate:!0})],O.prototype,"handleValueChange",1);var qv=ze`
  ${at}

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
`,Xv=ze`
  ${at}

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
`;const an=Math.min,We=Math.max,Gi=Math.round,ei=Math.floor,un=e=>({x:e,y:e}),Zv={left:"right",right:"left",bottom:"top",top:"bottom"},Jv={start:"end",end:"start"};function la(e,t,n){return We(e,an(t,n))}function Er(e,t){return typeof e=="function"?e(t):e}function cn(e){return e.split("-")[0]}function $r(e){return e.split("-")[1]}function Bh(e){return e==="x"?"y":"x"}function uu(e){return e==="y"?"height":"width"}function To(e){return["top","bottom"].includes(cn(e))?"y":"x"}function cu(e){return Bh(To(e))}function e0(e,t,n){n===void 0&&(n=!1);const r=$r(e),o=cu(e),i=uu(o);let l=o==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[i]>t.floating[i]&&(l=Yi(l)),[l,Yi(l)]}function t0(e){const t=Yi(e);return[sa(e),t,sa(t)]}function sa(e){return e.replace(/start|end/g,t=>Jv[t])}function n0(e,t,n){const r=["left","right"],o=["right","left"],i=["top","bottom"],l=["bottom","top"];switch(e){case"top":case"bottom":return n?t?o:r:t?r:o;case"left":case"right":return t?i:l;default:return[]}}function r0(e,t,n,r){const o=$r(e);let i=n0(cn(e),n==="start",r);return o&&(i=i.map(l=>l+"-"+o),t&&(i=i.concat(i.map(sa)))),i}function Yi(e){return e.replace(/left|right|bottom|top/g,t=>Zv[t])}function o0(e){return{top:0,right:0,bottom:0,left:0,...e}}function jh(e){return typeof e!="number"?o0(e):{top:e,right:e,bottom:e,left:e}}function qi(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function Gc(e,t,n){let{reference:r,floating:o}=e;const i=To(t),l=cu(t),a=uu(l),s=cn(t),u=i==="y",p=r.x+r.width/2-o.width/2,d=r.y+r.height/2-o.height/2,f=r[a]/2-o[a]/2;let v;switch(s){case"top":v={x:p,y:r.y-o.height};break;case"bottom":v={x:p,y:r.y+r.height};break;case"right":v={x:r.x+r.width,y:d};break;case"left":v={x:r.x-o.width,y:d};break;default:v={x:r.x,y:r.y}}switch($r(t)){case"start":v[l]-=f*(n&&u?-1:1);break;case"end":v[l]+=f*(n&&u?-1:1);break}return v}const i0=async(e,t,n)=>{const{placement:r="bottom",strategy:o="absolute",middleware:i=[],platform:l}=n,a=i.filter(Boolean),s=await(l.isRTL==null?void 0:l.isRTL(t));let u=await l.getElementRects({reference:e,floating:t,strategy:o}),{x:p,y:d}=Gc(u,r,s),f=r,v={},w=0;for(let b=0;b<a.length;b++){const{name:L,fn:h}=a[b],{x:c,y:g,data:_,reset:x}=await h({x:p,y:d,initialPlacement:r,placement:f,strategy:o,middlewareData:v,rects:u,platform:l,elements:{reference:e,floating:t}});if(p=c??p,d=g??d,v={...v,[L]:{...v[L],..._}},x&&w<=50){w++,typeof x=="object"&&(x.placement&&(f=x.placement),x.rects&&(u=x.rects===!0?await l.getElementRects({reference:e,floating:t,strategy:o}):x.rects),{x:p,y:d}=Gc(u,f,s)),b=-1;continue}}return{x:p,y:d,placement:f,strategy:o,middlewareData:v}};async function du(e,t){var n;t===void 0&&(t={});const{x:r,y:o,platform:i,rects:l,elements:a,strategy:s}=e,{boundary:u="clippingAncestors",rootBoundary:p="viewport",elementContext:d="floating",altBoundary:f=!1,padding:v=0}=Er(t,e),w=jh(v),L=a[f?d==="floating"?"reference":"floating":d],h=qi(await i.getClippingRect({element:(n=await(i.isElement==null?void 0:i.isElement(L)))==null||n?L:L.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(a.floating)),boundary:u,rootBoundary:p,strategy:s})),c=d==="floating"?{...l.floating,x:r,y:o}:l.reference,g=await(i.getOffsetParent==null?void 0:i.getOffsetParent(a.floating)),_=await(i.isElement==null?void 0:i.isElement(g))?await(i.getScale==null?void 0:i.getScale(g))||{x:1,y:1}:{x:1,y:1},x=qi(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({rect:c,offsetParent:g,strategy:s}):c);return{top:(h.top-x.top+w.top)/_.y,bottom:(x.bottom-h.bottom+w.bottom)/_.y,left:(h.left-x.left+w.left)/_.x,right:(x.right-h.right+w.right)/_.x}}const l0=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:r,placement:o,rects:i,platform:l,elements:a,middlewareData:s}=t,{element:u,padding:p=0}=Er(e,t)||{};if(u==null)return{};const d=jh(p),f={x:n,y:r},v=cu(o),w=uu(v),b=await l.getDimensions(u),L=v==="y",h=L?"top":"left",c=L?"bottom":"right",g=L?"clientHeight":"clientWidth",_=i.reference[w]+i.reference[v]-f[v]-i.floating[w],x=f[v]-i.reference[v],C=await(l.getOffsetParent==null?void 0:l.getOffsetParent(u));let E=C?C[g]:0;(!E||!await(l.isElement==null?void 0:l.isElement(C)))&&(E=a.floating[g]||i.floating[w]);const z=_/2-x/2,V=E/2-b[w]/2-1,R=an(d[h],V),le=an(d[c],V),$=R,S=E-b[w]-le,F=E/2-b[w]/2+z,X=la($,F,S),Te=!s.arrow&&$r(o)!=null&&F!=X&&i.reference[w]/2-(F<$?R:le)-b[w]/2<0,Ve=Te?F<$?F-$:F-S:0;return{[v]:f[v]+Ve,data:{[v]:X,centerOffset:F-X-Ve,...Te&&{alignmentOffset:Ve}},reset:Te}}}),s0=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:o,middlewareData:i,rects:l,initialPlacement:a,platform:s,elements:u}=t,{mainAxis:p=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:v="bestFit",fallbackAxisSideDirection:w="none",flipAlignment:b=!0,...L}=Er(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};const h=cn(o),c=cn(a)===a,g=await(s.isRTL==null?void 0:s.isRTL(u.floating)),_=f||(c||!b?[Yi(a)]:t0(a));!f&&w!=="none"&&_.push(...r0(a,b,w,g));const x=[a,..._],C=await du(t,L),E=[];let z=((r=i.flip)==null?void 0:r.overflows)||[];if(p&&E.push(C[h]),d){const $=e0(o,l,g);E.push(C[$[0]],C[$[1]])}if(z=[...z,{placement:o,overflows:E}],!E.every($=>$<=0)){var V,R;const $=(((V=i.flip)==null?void 0:V.index)||0)+1,S=x[$];if(S)return{data:{index:$,overflows:z},reset:{placement:S}};let F=(R=z.filter(X=>X.overflows[0]<=0).sort((X,Te)=>X.overflows[1]-Te.overflows[1])[0])==null?void 0:R.placement;if(!F)switch(v){case"bestFit":{var le;const X=(le=z.map(Te=>[Te.placement,Te.overflows.filter(Ve=>Ve>0).reduce((Ve,A)=>Ve+A,0)]).sort((Te,Ve)=>Te[1]-Ve[1])[0])==null?void 0:le[0];X&&(F=X);break}case"initialPlacement":F=a;break}if(o!==F)return{reset:{placement:F}}}return{}}}};async function a0(e,t){const{placement:n,platform:r,elements:o}=e,i=await(r.isRTL==null?void 0:r.isRTL(o.floating)),l=cn(n),a=$r(n),s=To(n)==="y",u=["left","top"].includes(l)?-1:1,p=i&&s?-1:1,d=Er(t,e);let{mainAxis:f,crossAxis:v,alignmentAxis:w}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return a&&typeof w=="number"&&(v=a==="end"?w*-1:w),s?{x:v*p,y:f*u}:{x:f*u,y:v*p}}const u0=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){const{x:n,y:r}=t,o=await a0(t,e);return{x:n+o.x,y:r+o.y,data:o}}}},c0=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:o}=t,{mainAxis:i=!0,crossAxis:l=!1,limiter:a={fn:L=>{let{x:h,y:c}=L;return{x:h,y:c}}},...s}=Er(e,t),u={x:n,y:r},p=await du(t,s),d=To(cn(o)),f=Bh(d);let v=u[f],w=u[d];if(i){const L=f==="y"?"top":"left",h=f==="y"?"bottom":"right",c=v+p[L],g=v-p[h];v=la(c,v,g)}if(l){const L=d==="y"?"top":"left",h=d==="y"?"bottom":"right",c=w+p[L],g=w-p[h];w=la(c,w,g)}const b=a.fn({...t,[f]:v,[d]:w});return{...b,data:{x:b.x-n,y:b.y-r}}}}},Yc=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:n,rects:r,platform:o,elements:i}=t,{apply:l=()=>{},...a}=Er(e,t),s=await du(t,a),u=cn(n),p=$r(n),d=To(n)==="y",{width:f,height:v}=r.floating;let w,b;u==="top"||u==="bottom"?(w=u,b=p===(await(o.isRTL==null?void 0:o.isRTL(i.floating))?"start":"end")?"left":"right"):(b=u,w=p==="end"?"top":"bottom");const L=v-s[w],h=f-s[b],c=!t.middlewareData.shift;let g=L,_=h;if(d){const C=f-s.left-s.right;_=p||c?an(h,C):C}else{const C=v-s.top-s.bottom;g=p||c?an(L,C):C}if(c&&!p){const C=We(s.left,0),E=We(s.right,0),z=We(s.top,0),V=We(s.bottom,0);d?_=f-2*(C!==0||E!==0?C+E:We(s.left,s.right)):g=v-2*(z!==0||V!==0?z+V:We(s.top,s.bottom))}await l({...t,availableWidth:_,availableHeight:g});const x=await o.getDimensions(i.floating);return f!==x.width||v!==x.height?{reset:{rects:!0}}:{}}}};function dn(e){return Vh(e)?(e.nodeName||"").toLowerCase():"#document"}function Ge(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Ft(e){var t;return(t=(Vh(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Vh(e){return e instanceof Node||e instanceof Ge(e).Node}function Ot(e){return e instanceof Element||e instanceof Ge(e).Element}function kt(e){return e instanceof HTMLElement||e instanceof Ge(e).HTMLElement}function qc(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Ge(e).ShadowRoot}function Lo(e){const{overflow:t,overflowX:n,overflowY:r,display:o}=st(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(o)}function d0(e){return["table","td","th"].includes(dn(e))}function pu(e){const t=hu(),n=st(e);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(r=>(n.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(n.contain||"").includes(r))}function p0(e){let t=_r(e);for(;kt(t)&&!vl(t);){if(pu(t))return t;t=_r(t)}return null}function hu(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function vl(e){return["html","body","#document"].includes(dn(e))}function st(e){return Ge(e).getComputedStyle(e)}function yl(e){return Ot(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function _r(e){if(dn(e)==="html")return e;const t=e.assignedSlot||e.parentNode||qc(e)&&e.host||Ft(e);return qc(t)?t.host:t}function Hh(e){const t=_r(e);return vl(t)?e.ownerDocument?e.ownerDocument.body:e.body:kt(t)&&Lo(t)?t:Hh(t)}function ko(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const o=Hh(e),i=o===((r=e.ownerDocument)==null?void 0:r.body),l=Ge(o);return i?t.concat(l,l.visualViewport||[],Lo(o)?o:[],l.frameElement&&n?ko(l.frameElement):[]):t.concat(o,ko(o))}function Uh(e){const t=st(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const o=kt(e),i=o?e.offsetWidth:n,l=o?e.offsetHeight:r,a=Gi(n)!==i||Gi(r)!==l;return a&&(n=i,r=l),{width:n,height:r,$:a}}function fu(e){return Ot(e)?e:e.contextElement}function dr(e){const t=fu(e);if(!kt(t))return un(1);const n=t.getBoundingClientRect(),{width:r,height:o,$:i}=Uh(t);let l=(i?Gi(n.width):n.width)/r,a=(i?Gi(n.height):n.height)/o;return(!l||!Number.isFinite(l))&&(l=1),(!a||!Number.isFinite(a))&&(a=1),{x:l,y:a}}const h0=un(0);function Wh(e){const t=Ge(e);return!hu()||!t.visualViewport?h0:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function f0(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==Ge(e)?!1:t}function Dn(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const o=e.getBoundingClientRect(),i=fu(e);let l=un(1);t&&(r?Ot(r)&&(l=dr(r)):l=dr(e));const a=f0(i,n,r)?Wh(i):un(0);let s=(o.left+a.x)/l.x,u=(o.top+a.y)/l.y,p=o.width/l.x,d=o.height/l.y;if(i){const f=Ge(i),v=r&&Ot(r)?Ge(r):r;let w=f.frameElement;for(;w&&r&&v!==f;){const b=dr(w),L=w.getBoundingClientRect(),h=st(w),c=L.left+(w.clientLeft+parseFloat(h.paddingLeft))*b.x,g=L.top+(w.clientTop+parseFloat(h.paddingTop))*b.y;s*=b.x,u*=b.y,p*=b.x,d*=b.y,s+=c,u+=g,w=Ge(w).frameElement}}return qi({width:p,height:d,x:s,y:u})}function g0(e){let{rect:t,offsetParent:n,strategy:r}=e;const o=kt(n),i=Ft(n);if(n===i)return t;let l={scrollLeft:0,scrollTop:0},a=un(1);const s=un(0);if((o||!o&&r!=="fixed")&&((dn(n)!=="body"||Lo(i))&&(l=yl(n)),kt(n))){const u=Dn(n);a=dr(n),s.x=u.x+n.clientLeft,s.y=u.y+n.clientTop}return{width:t.width*a.x,height:t.height*a.y,x:t.x*a.x-l.scrollLeft*a.x+s.x,y:t.y*a.y-l.scrollTop*a.y+s.y}}function m0(e){return Array.from(e.getClientRects())}function Kh(e){return Dn(Ft(e)).left+yl(e).scrollLeft}function v0(e){const t=Ft(e),n=yl(e),r=e.ownerDocument.body,o=We(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),i=We(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let l=-n.scrollLeft+Kh(e);const a=-n.scrollTop;return st(r).direction==="rtl"&&(l+=We(t.clientWidth,r.clientWidth)-o),{width:o,height:i,x:l,y:a}}function y0(e,t){const n=Ge(e),r=Ft(e),o=n.visualViewport;let i=r.clientWidth,l=r.clientHeight,a=0,s=0;if(o){i=o.width,l=o.height;const u=hu();(!u||u&&t==="fixed")&&(a=o.offsetLeft,s=o.offsetTop)}return{width:i,height:l,x:a,y:s}}function w0(e,t){const n=Dn(e,!0,t==="fixed"),r=n.top+e.clientTop,o=n.left+e.clientLeft,i=kt(e)?dr(e):un(1),l=e.clientWidth*i.x,a=e.clientHeight*i.y,s=o*i.x,u=r*i.y;return{width:l,height:a,x:s,y:u}}function Xc(e,t,n){let r;if(t==="viewport")r=y0(e,n);else if(t==="document")r=v0(Ft(e));else if(Ot(t))r=w0(t,n);else{const o=Wh(e);r={...t,x:t.x-o.x,y:t.y-o.y}}return qi(r)}function Qh(e,t){const n=_r(e);return n===t||!Ot(n)||vl(n)?!1:st(n).position==="fixed"||Qh(n,t)}function b0(e,t){const n=t.get(e);if(n)return n;let r=ko(e,[],!1).filter(a=>Ot(a)&&dn(a)!=="body"),o=null;const i=st(e).position==="fixed";let l=i?_r(e):e;for(;Ot(l)&&!vl(l);){const a=st(l),s=pu(l);!s&&a.position==="fixed"&&(o=null),(i?!s&&!o:!s&&a.position==="static"&&!!o&&["absolute","fixed"].includes(o.position)||Lo(l)&&!s&&Qh(e,l))?r=r.filter(p=>p!==l):o=a,l=_r(l)}return t.set(e,r),r}function _0(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e;const l=[...n==="clippingAncestors"?b0(t,this._c):[].concat(n),r],a=l[0],s=l.reduce((u,p)=>{const d=Xc(t,p,o);return u.top=We(d.top,u.top),u.right=an(d.right,u.right),u.bottom=an(d.bottom,u.bottom),u.left=We(d.left,u.left),u},Xc(t,a,o));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}}function x0(e){return Uh(e)}function k0(e,t,n){const r=kt(t),o=Ft(t),i=n==="fixed",l=Dn(e,!0,i,t);let a={scrollLeft:0,scrollTop:0};const s=un(0);if(r||!r&&!i)if((dn(t)!=="body"||Lo(o))&&(a=yl(t)),r){const u=Dn(t,!0,i,t);s.x=u.x+t.clientLeft,s.y=u.y+t.clientTop}else o&&(s.x=Kh(o));return{x:l.left+a.scrollLeft-s.x,y:l.top+a.scrollTop-s.y,width:l.width,height:l.height}}function Zc(e,t){return!kt(e)||st(e).position==="fixed"?null:t?t(e):e.offsetParent}function Gh(e,t){const n=Ge(e);if(!kt(e))return n;let r=Zc(e,t);for(;r&&d0(r)&&st(r).position==="static";)r=Zc(r,t);return r&&(dn(r)==="html"||dn(r)==="body"&&st(r).position==="static"&&!pu(r))?n:r||p0(e)||n}const S0=async function(e){let{reference:t,floating:n,strategy:r}=e;const o=this.getOffsetParent||Gh,i=this.getDimensions;return{reference:k0(t,await o(n),r),floating:{x:0,y:0,...await i(n)}}};function C0(e){return st(e).direction==="rtl"}const yi={convertOffsetParentRelativeRectToViewportRelativeRect:g0,getDocumentElement:Ft,getClippingRect:_0,getOffsetParent:Gh,getElementRects:S0,getClientRects:m0,getDimensions:x0,getScale:dr,isElement:Ot,isRTL:C0};function E0(e,t){let n=null,r;const o=Ft(e);function i(){clearTimeout(r),n&&n.disconnect(),n=null}function l(a,s){a===void 0&&(a=!1),s===void 0&&(s=1),i();const{left:u,top:p,width:d,height:f}=e.getBoundingClientRect();if(a||t(),!d||!f)return;const v=ei(p),w=ei(o.clientWidth-(u+d)),b=ei(o.clientHeight-(p+f)),L=ei(u),c={rootMargin:-v+"px "+-w+"px "+-b+"px "+-L+"px",threshold:We(0,an(1,s))||1};let g=!0;function _(x){const C=x[0].intersectionRatio;if(C!==s){if(!g)return l();C?l(!1,C):r=setTimeout(()=>{l(!1,1e-7)},100)}g=!1}try{n=new IntersectionObserver(_,{...c,root:o.ownerDocument})}catch{n=new IntersectionObserver(_,c)}n.observe(e)}return l(!0),i}function $0(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:o=!0,ancestorResize:i=!0,elementResize:l=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:s=!1}=r,u=fu(e),p=o||i?[...u?ko(u):[],...ko(t)]:[];p.forEach(h=>{o&&h.addEventListener("scroll",n,{passive:!0}),i&&h.addEventListener("resize",n)});const d=u&&a?E0(u,n):null;let f=-1,v=null;l&&(v=new ResizeObserver(h=>{let[c]=h;c&&c.target===u&&v&&(v.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{v&&v.observe(t)})),n()}),u&&!s&&v.observe(u),v.observe(t));let w,b=s?Dn(e):null;s&&L();function L(){const h=Dn(e);b&&(h.x!==b.x||h.y!==b.y||h.width!==b.width||h.height!==b.height)&&n(),b=h,w=requestAnimationFrame(L)}return n(),()=>{p.forEach(h=>{o&&h.removeEventListener("scroll",n),i&&h.removeEventListener("resize",n)}),d&&d(),v&&v.disconnect(),v=null,s&&cancelAnimationFrame(w)}}const z0=(e,t,n)=>{const r=new Map,o={platform:yi,...n},i={...o.platform,_c:r};return i0(e,t,{...o,platform:i})};function A0(e){return e!==null&&typeof e=="object"&&"getBoundingClientRect"in e}var q=class extends ke{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||A0(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');if(this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),!this.anchorEl)throw new Error("Invalid anchor element: no anchor could be found using the anchor slot or the anchor attribute.");this.start()}start(){this.anchorEl&&(this.cleanup=$0(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl)return;const e=[u0({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(Yc({apply:({rects:n})=>{const r=this.sync==="width"||this.sync==="both",o=this.sync==="height"||this.sync==="both";this.popup.style.width=r?`${n.reference.width}px`:"",this.popup.style.height=o?`${n.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(s0({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(c0({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(Yc({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:n,availableHeight:r})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${r}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${n}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(l0({element:this.arrowEl,padding:this.arrowPadding}));const t=this.strategy==="absolute"?n=>yi.getOffsetParent(n,bh):yi.getOffsetParent;z0(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:fl(Bn({},yi),{getOffsetParent:t})}).then(({x:n,y:r,middlewareData:o,placement:i})=>{const l=getComputedStyle(this).direction==="rtl",a={top:"bottom",right:"left",bottom:"top",left:"right"}[i.split("-")[0]];if(this.setAttribute("data-current-placement",i),Object.assign(this.popup.style,{left:`${n}px`,top:`${r}px`}),this.arrow){const s=o.arrow.x,u=o.arrow.y;let p="",d="",f="",v="";if(this.arrowPlacement==="start"){const w=typeof s=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";p=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",d=l?w:"",v=l?"":w}else if(this.arrowPlacement==="end"){const w=typeof s=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";d=l?"":w,v=l?w:"",f=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(v=typeof s=="number"?"calc(50% - var(--arrow-size-diagonal))":"",p=typeof u=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(v=typeof s=="number"?`${s}px`:"",p=typeof u=="number"?`${u}px`:"");Object.assign(this.arrowEl.style,{top:p,right:d,bottom:f,left:v,[a]:"calc(var(--arrow-size-diagonal) * -1)"})}}),this.emit("sl-reposition")}render(){return G`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <div
        part="popup"
        class=${Fe({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?G`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};q.styles=Xv;m([re(".popup")],q.prototype,"popup",2);m([re(".popup__arrow")],q.prototype,"arrowEl",2);m([y()],q.prototype,"anchor",2);m([y({type:Boolean,reflect:!0})],q.prototype,"active",2);m([y({reflect:!0})],q.prototype,"placement",2);m([y({reflect:!0})],q.prototype,"strategy",2);m([y({type:Number})],q.prototype,"distance",2);m([y({type:Number})],q.prototype,"skidding",2);m([y({type:Boolean})],q.prototype,"arrow",2);m([y({attribute:"arrow-placement"})],q.prototype,"arrowPlacement",2);m([y({attribute:"arrow-padding",type:Number})],q.prototype,"arrowPadding",2);m([y({type:Boolean})],q.prototype,"flip",2);m([y({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:e=>e.join(" ")}})],q.prototype,"flipFallbackPlacements",2);m([y({attribute:"flip-fallback-strategy"})],q.prototype,"flipFallbackStrategy",2);m([y({type:Object})],q.prototype,"flipBoundary",2);m([y({attribute:"flip-padding",type:Number})],q.prototype,"flipPadding",2);m([y({type:Boolean})],q.prototype,"shift",2);m([y({type:Object})],q.prototype,"shiftBoundary",2);m([y({attribute:"shift-padding",type:Number})],q.prototype,"shiftPadding",2);m([y({attribute:"auto-size"})],q.prototype,"autoSize",2);m([y()],q.prototype,"sync",2);m([y({type:Object})],q.prototype,"autoSizeBoundary",2);m([y({attribute:"auto-size-padding",type:Number})],q.prototype,"autoSizePadding",2);var Pe=class extends ke{constructor(){super(...arguments),this.localize=new Cr(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.handleKeyDown=e=>{this.open&&e.key==="Escape"&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=e=>{var t;if(e.key==="Escape"&&this.open){e.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(e.key==="Tab"){if(this.open&&((t=document.activeElement)==null?void 0:t.tagName.toLowerCase())==="sl-menu-item"){e.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var n,r,o;const i=((n=this.containingElement)==null?void 0:n.getRootNode())instanceof ShadowRoot?(o=(r=document.activeElement)==null?void 0:r.shadowRoot)==null?void 0:o.activeElement:document.activeElement;(!this.containingElement||(i==null?void 0:i.closest(this.containingElement.tagName.toLowerCase()))!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=e=>{const t=e.target;!this.stayOpenOnSelect&&t.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const e=this.trigger.assignedElements({flatten:!0})[0];typeof(e==null?void 0:e.focus)=="function"&&e.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(e=>e.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(e){if([" ","Enter"].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}const t=this.getMenu();if(t){const n=t.getAllItems(),r=n[0],o=n[n.length-1];["ArrowDown","ArrowUp","Home","End"].includes(e.key)&&(e.preventDefault(),this.open||(this.show(),await this.updateComplete),n.length>0&&this.updateComplete.then(()=>{(e.key==="ArrowDown"||e.key==="Home")&&(t.setCurrentItem(r),r.focus()),(e.key==="ArrowUp"||e.key==="End")&&(t.setCurrentItem(o),o.focus())}))}}handleTriggerKeyUp(e){e.key===" "&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const t=this.trigger.assignedElements({flatten:!0}).find(r=>Am(r).start);let n;if(t){switch(t.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":n=t.button;break;default:n=t}n.setAttribute("aria-haspopup","true"),n.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,Qi(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Qi(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){this.panel.addEventListener("sl-select",this.handlePanelSelect),this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await nr(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=$t(this,"dropdown.show",{dir:this.localize.dir()});await xn(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await nr(this);const{keyframes:e,options:t}=$t(this,"dropdown.hide",{dir:this.localize.dir()});await xn(this.popup.popup,e,t),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return G`
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
        class=${Fe({dropdown:!0,"dropdown--open":this.open})}
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
    `}};Pe.styles=qv;Pe.dependencies={"sl-popup":q};m([re(".dropdown")],Pe.prototype,"popup",2);m([re(".dropdown__trigger")],Pe.prototype,"trigger",2);m([re(".dropdown__panel")],Pe.prototype,"panel",2);m([y({type:Boolean,reflect:!0})],Pe.prototype,"open",2);m([y({reflect:!0})],Pe.prototype,"placement",2);m([y({type:Boolean,reflect:!0})],Pe.prototype,"disabled",2);m([y({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],Pe.prototype,"stayOpenOnSelect",2);m([y({attribute:!1})],Pe.prototype,"containingElement",2);m([y({type:Number})],Pe.prototype,"distance",2);m([y({type:Number})],Pe.prototype,"skidding",2);m([y({type:Boolean})],Pe.prototype,"hoist",2);m([Ie("open",{waitUntilFirstUpdate:!0})],Pe.prototype,"handleOpenChange",1);Dt("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});Dt("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});var P0=ze`
  ${at}

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
`;function Je(e,t,n){const r=o=>Object.is(o,-0)?0:o;return e<t?r(t):e>n?r(n):r(e)}var T0=ze`
  ${at}

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
`,Yh=class extends ke{constructor(){super(...arguments),this.localize=new Cr(this)}render(){return G`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Yh.styles=T0;var L0=ze`
  ${at}

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
`,U=class extends ke{constructor(){super(...arguments),this.formControlController=new ml(this,{form:e=>{if(e.hasAttribute("form")){const t=e.getRootNode(),n=e.getAttribute("form");return t.getElementById(n)}return e.closest("form")},assumeInteractionOn:["click"]}),this.hasSlotController=new gl(this,"[default]","prefix","suffix"),this.localize=new Cr(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:au}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink(),t=e?Ki`a`:Ki`button`;return vi`
      <${t}
        part="base"
        class=${Fe({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${N(e?void 0:this.disabled)}
        type=${N(e?void 0:this.type)}
        title=${this.title}
        name=${N(e?void 0:this.name)}
        value=${N(e?void 0:this.value)}
        href=${N(e?this.href:void 0)}
        target=${N(e?this.target:void 0)}
        download=${N(e?this.download:void 0)}
        rel=${N(e?this.rel:void 0)}
        role=${N(e?void 0:"button")}
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
        ${this.caret?vi` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?vi`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${t}>
    `}};U.styles=L0;U.dependencies={"sl-icon":Be,"sl-spinner":Yh};m([re(".button")],U.prototype,"button",2);m([fe()],U.prototype,"hasFocus",2);m([fe()],U.prototype,"invalid",2);m([y()],U.prototype,"title",2);m([y({reflect:!0})],U.prototype,"variant",2);m([y({reflect:!0})],U.prototype,"size",2);m([y({type:Boolean,reflect:!0})],U.prototype,"caret",2);m([y({type:Boolean,reflect:!0})],U.prototype,"disabled",2);m([y({type:Boolean,reflect:!0})],U.prototype,"loading",2);m([y({type:Boolean,reflect:!0})],U.prototype,"outline",2);m([y({type:Boolean,reflect:!0})],U.prototype,"pill",2);m([y({type:Boolean,reflect:!0})],U.prototype,"circle",2);m([y()],U.prototype,"type",2);m([y()],U.prototype,"name",2);m([y()],U.prototype,"value",2);m([y()],U.prototype,"href",2);m([y()],U.prototype,"target",2);m([y()],U.prototype,"rel",2);m([y()],U.prototype,"download",2);m([y()],U.prototype,"form",2);m([y({attribute:"formaction"})],U.prototype,"formAction",2);m([y({attribute:"formenctype"})],U.prototype,"formEnctype",2);m([y({attribute:"formmethod"})],U.prototype,"formMethod",2);m([y({attribute:"formnovalidate",type:Boolean})],U.prototype,"formNoValidate",2);m([y({attribute:"formtarget"})],U.prototype,"formTarget",2);m([Ie("disabled",{waitUntilFirstUpdate:!0})],U.prototype,"handleDisabledChange",1);var N0=ze`
  ${at}

  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,jn=class extends ke{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(e){const t=jr(e.target);t==null||t.classList.add("sl-button-group__button--focus")}handleBlur(e){const t=jr(e.target);t==null||t.classList.remove("sl-button-group__button--focus")}handleMouseOver(e){const t=jr(e.target);t==null||t.classList.add("sl-button-group__button--hover")}handleMouseOut(e){const t=jr(e.target);t==null||t.classList.remove("sl-button-group__button--hover")}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})];e.forEach(t=>{const n=e.indexOf(t),r=jr(t);r&&(r.classList.add("sl-button-group__button"),r.classList.toggle("sl-button-group__button--first",n===0),r.classList.toggle("sl-button-group__button--inner",n>0&&n<e.length-1),r.classList.toggle("sl-button-group__button--last",n===e.length-1),r.classList.toggle("sl-button-group__button--radio",r.tagName.toLowerCase()==="sl-radio-button"))})}render(){return G`
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
    `}};jn.styles=N0;m([re("slot")],jn.prototype,"defaultSlot",2);m([fe()],jn.prototype,"disableRole",2);m([y()],jn.prototype,"label",2);function jr(e){var t;const n="sl-button, sl-radio-button";return(t=e.closest(n))!=null?t:e.querySelector(n)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qh="important",R0=" !"+qh,Bt=iu(class extends lu{constructor(e){var t;if(super(e),e.type!==Ht.ATTRIBUTE||e.name!=="style"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{const r=e[n];return r==null?t:t+`${n=n.includes("-")?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(e,[t]){const{style:n}=e.element;if(this.ht===void 0){this.ht=new Set;for(const r in t)this.ht.add(r);return this.render(t)}this.ht.forEach(r=>{t[r]==null&&(this.ht.delete(r),r.includes("-")?n.removeProperty(r):n[r]="")});for(const r in t){const o=t[r];if(o!=null){this.ht.add(r);const i=typeof o=="string"&&o.endsWith(R0);r.includes("-")||i?n.setProperty(r,i?o.slice(0,-11):o,i?qh:""):n[r]=o}}return rt}});function ve(e,t){O0(e)&&(e="100%");var n=M0(e);return e=t===360?e:Math.min(t,Math.max(0,parseFloat(e))),n&&(e=parseInt(String(e*t),10)/100),Math.abs(e-t)<1e-6?1:(t===360?e=(e<0?e%t+t:e%t)/parseFloat(String(t)):e=e%t/parseFloat(String(t)),e)}function ti(e){return Math.min(1,Math.max(0,e))}function O0(e){return typeof e=="string"&&e.indexOf(".")!==-1&&parseFloat(e)===1}function M0(e){return typeof e=="string"&&e.indexOf("%")!==-1}function Xh(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function ni(e){return e<=1?"".concat(Number(e)*100,"%"):e}function zn(e){return e.length===1?"0"+e:String(e)}function D0(e,t,n){return{r:ve(e,255)*255,g:ve(t,255)*255,b:ve(n,255)*255}}function Jc(e,t,n){e=ve(e,255),t=ve(t,255),n=ve(n,255);var r=Math.max(e,t,n),o=Math.min(e,t,n),i=0,l=0,a=(r+o)/2;if(r===o)l=0,i=0;else{var s=r-o;switch(l=a>.5?s/(2-r-o):s/(r+o),r){case e:i=(t-n)/s+(t<n?6:0);break;case t:i=(n-e)/s+2;break;case n:i=(e-t)/s+4;break}i/=6}return{h:i,s:l,l:a}}function os(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*(6*n):n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function F0(e,t,n){var r,o,i;if(e=ve(e,360),t=ve(t,100),n=ve(n,100),t===0)o=n,i=n,r=n;else{var l=n<.5?n*(1+t):n+t-n*t,a=2*n-l;r=os(a,l,e+1/3),o=os(a,l,e),i=os(a,l,e-1/3)}return{r:r*255,g:o*255,b:i*255}}function ed(e,t,n){e=ve(e,255),t=ve(t,255),n=ve(n,255);var r=Math.max(e,t,n),o=Math.min(e,t,n),i=0,l=r,a=r-o,s=r===0?0:a/r;if(r===o)i=0;else{switch(r){case e:i=(t-n)/a+(t<n?6:0);break;case t:i=(n-e)/a+2;break;case n:i=(e-t)/a+4;break}i/=6}return{h:i,s,v:l}}function I0(e,t,n){e=ve(e,360)*6,t=ve(t,100),n=ve(n,100);var r=Math.floor(e),o=e-r,i=n*(1-t),l=n*(1-o*t),a=n*(1-(1-o)*t),s=r%6,u=[n,l,i,i,a,n][s],p=[a,n,n,l,i,i][s],d=[i,i,a,n,n,l][s];return{r:u*255,g:p*255,b:d*255}}function td(e,t,n,r){var o=[zn(Math.round(e).toString(16)),zn(Math.round(t).toString(16)),zn(Math.round(n).toString(16))];return r&&o[0].startsWith(o[0].charAt(1))&&o[1].startsWith(o[1].charAt(1))&&o[2].startsWith(o[2].charAt(1))?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function B0(e,t,n,r,o){var i=[zn(Math.round(e).toString(16)),zn(Math.round(t).toString(16)),zn(Math.round(n).toString(16)),zn(j0(r))];return o&&i[0].startsWith(i[0].charAt(1))&&i[1].startsWith(i[1].charAt(1))&&i[2].startsWith(i[2].charAt(1))&&i[3].startsWith(i[3].charAt(1))?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0):i.join("")}function j0(e){return Math.round(parseFloat(e)*255).toString(16)}function nd(e){return He(e)/255}function He(e){return parseInt(e,16)}function V0(e){return{r:e>>16,g:(e&65280)>>8,b:e&255}}var aa={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function H0(e){var t={r:0,g:0,b:0},n=1,r=null,o=null,i=null,l=!1,a=!1;return typeof e=="string"&&(e=K0(e)),typeof e=="object"&&(St(e.r)&&St(e.g)&&St(e.b)?(t=D0(e.r,e.g,e.b),l=!0,a=String(e.r).substr(-1)==="%"?"prgb":"rgb"):St(e.h)&&St(e.s)&&St(e.v)?(r=ni(e.s),o=ni(e.v),t=I0(e.h,r,o),l=!0,a="hsv"):St(e.h)&&St(e.s)&&St(e.l)&&(r=ni(e.s),i=ni(e.l),t=F0(e.h,r,i),l=!0,a="hsl"),Object.prototype.hasOwnProperty.call(e,"a")&&(n=e.a)),n=Xh(n),{ok:l,format:e.format||a,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:n}}var U0="[-\\+]?\\d+%?",W0="[-\\+]?\\d*\\.\\d+%?",qt="(?:".concat(W0,")|(?:").concat(U0,")"),is="[\\s|\\(]+(".concat(qt,")[,|\\s]+(").concat(qt,")[,|\\s]+(").concat(qt,")\\s*\\)?"),ls="[\\s|\\(]+(".concat(qt,")[,|\\s]+(").concat(qt,")[,|\\s]+(").concat(qt,")[,|\\s]+(").concat(qt,")\\s*\\)?"),ct={CSS_UNIT:new RegExp(qt),rgb:new RegExp("rgb"+is),rgba:new RegExp("rgba"+ls),hsl:new RegExp("hsl"+is),hsla:new RegExp("hsla"+ls),hsv:new RegExp("hsv"+is),hsva:new RegExp("hsva"+ls),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function K0(e){if(e=e.trim().toLowerCase(),e.length===0)return!1;var t=!1;if(aa[e])e=aa[e],t=!0;else if(e==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var n=ct.rgb.exec(e);return n?{r:n[1],g:n[2],b:n[3]}:(n=ct.rgba.exec(e),n?{r:n[1],g:n[2],b:n[3],a:n[4]}:(n=ct.hsl.exec(e),n?{h:n[1],s:n[2],l:n[3]}:(n=ct.hsla.exec(e),n?{h:n[1],s:n[2],l:n[3],a:n[4]}:(n=ct.hsv.exec(e),n?{h:n[1],s:n[2],v:n[3]}:(n=ct.hsva.exec(e),n?{h:n[1],s:n[2],v:n[3],a:n[4]}:(n=ct.hex8.exec(e),n?{r:He(n[1]),g:He(n[2]),b:He(n[3]),a:nd(n[4]),format:t?"name":"hex8"}:(n=ct.hex6.exec(e),n?{r:He(n[1]),g:He(n[2]),b:He(n[3]),format:t?"name":"hex"}:(n=ct.hex4.exec(e),n?{r:He(n[1]+n[1]),g:He(n[2]+n[2]),b:He(n[3]+n[3]),a:nd(n[4]+n[4]),format:t?"name":"hex8"}:(n=ct.hex3.exec(e),n?{r:He(n[1]+n[1]),g:He(n[2]+n[2]),b:He(n[3]+n[3]),format:t?"name":"hex"}:!1)))))))))}function St(e){return!!ct.CSS_UNIT.exec(String(e))}var rd=function(){function e(t,n){t===void 0&&(t=""),n===void 0&&(n={});var r;if(t instanceof e)return t;typeof t=="number"&&(t=V0(t)),this.originalInput=t;var o=H0(t);this.originalInput=t,this.r=o.r,this.g=o.g,this.b=o.b,this.a=o.a,this.roundA=Math.round(100*this.a)/100,this.format=(r=n.format)!==null&&r!==void 0?r:o.format,this.gradientType=n.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=o.ok}return e.prototype.isDark=function(){return this.getBrightness()<128},e.prototype.isLight=function(){return!this.isDark()},e.prototype.getBrightness=function(){var t=this.toRgb();return(t.r*299+t.g*587+t.b*114)/1e3},e.prototype.getLuminance=function(){var t=this.toRgb(),n,r,o,i=t.r/255,l=t.g/255,a=t.b/255;return i<=.03928?n=i/12.92:n=Math.pow((i+.055)/1.055,2.4),l<=.03928?r=l/12.92:r=Math.pow((l+.055)/1.055,2.4),a<=.03928?o=a/12.92:o=Math.pow((a+.055)/1.055,2.4),.2126*n+.7152*r+.0722*o},e.prototype.getAlpha=function(){return this.a},e.prototype.setAlpha=function(t){return this.a=Xh(t),this.roundA=Math.round(100*this.a)/100,this},e.prototype.isMonochrome=function(){var t=this.toHsl().s;return t===0},e.prototype.toHsv=function(){var t=ed(this.r,this.g,this.b);return{h:t.h*360,s:t.s,v:t.v,a:this.a}},e.prototype.toHsvString=function(){var t=ed(this.r,this.g,this.b),n=Math.round(t.h*360),r=Math.round(t.s*100),o=Math.round(t.v*100);return this.a===1?"hsv(".concat(n,", ").concat(r,"%, ").concat(o,"%)"):"hsva(".concat(n,", ").concat(r,"%, ").concat(o,"%, ").concat(this.roundA,")")},e.prototype.toHsl=function(){var t=Jc(this.r,this.g,this.b);return{h:t.h*360,s:t.s,l:t.l,a:this.a}},e.prototype.toHslString=function(){var t=Jc(this.r,this.g,this.b),n=Math.round(t.h*360),r=Math.round(t.s*100),o=Math.round(t.l*100);return this.a===1?"hsl(".concat(n,", ").concat(r,"%, ").concat(o,"%)"):"hsla(".concat(n,", ").concat(r,"%, ").concat(o,"%, ").concat(this.roundA,")")},e.prototype.toHex=function(t){return t===void 0&&(t=!1),td(this.r,this.g,this.b,t)},e.prototype.toHexString=function(t){return t===void 0&&(t=!1),"#"+this.toHex(t)},e.prototype.toHex8=function(t){return t===void 0&&(t=!1),B0(this.r,this.g,this.b,this.a,t)},e.prototype.toHex8String=function(t){return t===void 0&&(t=!1),"#"+this.toHex8(t)},e.prototype.toHexShortString=function(t){return t===void 0&&(t=!1),this.a===1?this.toHexString(t):this.toHex8String(t)},e.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},e.prototype.toRgbString=function(){var t=Math.round(this.r),n=Math.round(this.g),r=Math.round(this.b);return this.a===1?"rgb(".concat(t,", ").concat(n,", ").concat(r,")"):"rgba(".concat(t,", ").concat(n,", ").concat(r,", ").concat(this.roundA,")")},e.prototype.toPercentageRgb=function(){var t=function(n){return"".concat(Math.round(ve(n,255)*100),"%")};return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}},e.prototype.toPercentageRgbString=function(){var t=function(n){return Math.round(ve(n,255)*100)};return this.a===1?"rgb(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%)"):"rgba(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%, ").concat(this.roundA,")")},e.prototype.toName=function(){if(this.a===0)return"transparent";if(this.a<1)return!1;for(var t="#"+td(this.r,this.g,this.b,!1),n=0,r=Object.entries(aa);n<r.length;n++){var o=r[n],i=o[0],l=o[1];if(t===l)return i}return!1},e.prototype.toString=function(t){var n=!!t;t=t??this.format;var r=!1,o=this.a<1&&this.a>=0,i=!n&&o&&(t.startsWith("hex")||t==="name");return i?t==="name"&&this.a===0?this.toName():this.toRgbString():(t==="rgb"&&(r=this.toRgbString()),t==="prgb"&&(r=this.toPercentageRgbString()),(t==="hex"||t==="hex6")&&(r=this.toHexString()),t==="hex3"&&(r=this.toHexString(!0)),t==="hex4"&&(r=this.toHex8String(!0)),t==="hex8"&&(r=this.toHex8String()),t==="name"&&(r=this.toName()),t==="hsl"&&(r=this.toHslString()),t==="hsv"&&(r=this.toHsvString()),r||this.toHexString())},e.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},e.prototype.clone=function(){return new e(this.toString())},e.prototype.lighten=function(t){t===void 0&&(t=10);var n=this.toHsl();return n.l+=t/100,n.l=ti(n.l),new e(n)},e.prototype.brighten=function(t){t===void 0&&(t=10);var n=this.toRgb();return n.r=Math.max(0,Math.min(255,n.r-Math.round(255*-(t/100)))),n.g=Math.max(0,Math.min(255,n.g-Math.round(255*-(t/100)))),n.b=Math.max(0,Math.min(255,n.b-Math.round(255*-(t/100)))),new e(n)},e.prototype.darken=function(t){t===void 0&&(t=10);var n=this.toHsl();return n.l-=t/100,n.l=ti(n.l),new e(n)},e.prototype.tint=function(t){return t===void 0&&(t=10),this.mix("white",t)},e.prototype.shade=function(t){return t===void 0&&(t=10),this.mix("black",t)},e.prototype.desaturate=function(t){t===void 0&&(t=10);var n=this.toHsl();return n.s-=t/100,n.s=ti(n.s),new e(n)},e.prototype.saturate=function(t){t===void 0&&(t=10);var n=this.toHsl();return n.s+=t/100,n.s=ti(n.s),new e(n)},e.prototype.greyscale=function(){return this.desaturate(100)},e.prototype.spin=function(t){var n=this.toHsl(),r=(n.h+t)%360;return n.h=r<0?360+r:r,new e(n)},e.prototype.mix=function(t,n){n===void 0&&(n=50);var r=this.toRgb(),o=new e(t).toRgb(),i=n/100,l={r:(o.r-r.r)*i+r.r,g:(o.g-r.g)*i+r.g,b:(o.b-r.b)*i+r.b,a:(o.a-r.a)*i+r.a};return new e(l)},e.prototype.analogous=function(t,n){t===void 0&&(t=6),n===void 0&&(n=30);var r=this.toHsl(),o=360/n,i=[this];for(r.h=(r.h-(o*t>>1)+720)%360;--t;)r.h=(r.h+o)%360,i.push(new e(r));return i},e.prototype.complement=function(){var t=this.toHsl();return t.h=(t.h+180)%360,new e(t)},e.prototype.monochromatic=function(t){t===void 0&&(t=6);for(var n=this.toHsv(),r=n.h,o=n.s,i=n.v,l=[],a=1/t;t--;)l.push(new e({h:r,s:o,v:i})),i=(i+a)%1;return l},e.prototype.splitcomplement=function(){var t=this.toHsl(),n=t.h;return[this,new e({h:(n+72)%360,s:t.s,l:t.l}),new e({h:(n+216)%360,s:t.s,l:t.l})]},e.prototype.onBackground=function(t){var n=this.toRgb(),r=new e(t).toRgb(),o=n.a+r.a*(1-n.a);return new e({r:(n.r*n.a+r.r*r.a*(1-n.a))/o,g:(n.g*n.a+r.g*r.a*(1-n.a))/o,b:(n.b*n.a+r.b*r.a*(1-n.a))/o,a:o})},e.prototype.triad=function(){return this.polyad(3)},e.prototype.tetrad=function(){return this.polyad(4)},e.prototype.polyad=function(t){for(var n=this.toHsl(),r=n.h,o=[this],i=360/t,l=1;l<t;l++)o.push(new e({h:(r+l*i)%360,s:n.s,l:n.l}));return o},e.prototype.equals=function(t){return this.toRgbString()===new e(t).toRgbString()},e}(),od="EyeDropper"in window,B=class extends ke{constructor(){super(),this.formControlController=new ml(this),this.isSafeValue=!1,this.localize=new Cr(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.handleFocusOut=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.input.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")})}handleFormatToggle(){const e=["hex","rgb","hsl","hsv"],t=(e.indexOf(this.format)+1)%e.length;this.format=e[t],this.setColor(this.value),this.emit("sl-change"),this.emit("sl-input")}handleAlphaDrag(e){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),n=t.querySelector(".color-picker__slider-handle"),{width:r}=t.getBoundingClientRect();let o=this.value;n.focus(),e.preventDefault(),rs(t,{onMove:i=>{this.alpha=Je(i/r*100,0,100),this.syncValues(),this.value!==o&&(o=this.value,this.emit("sl-change"),this.emit("sl-input"))},initialEvent:e})}handleHueDrag(e){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),n=t.querySelector(".color-picker__slider-handle"),{width:r}=t.getBoundingClientRect();let o=this.value;n.focus(),e.preventDefault(),rs(t,{onMove:i=>{this.hue=Je(i/r*360,0,360),this.syncValues(),this.value!==o&&(o=this.value,this.emit("sl-change"),this.emit("sl-input"))},initialEvent:e})}handleGridDrag(e){const t=this.shadowRoot.querySelector(".color-picker__grid"),n=t.querySelector(".color-picker__grid-handle"),{width:r,height:o}=t.getBoundingClientRect();let i=this.value;n.focus(),e.preventDefault(),this.isDraggingGridHandle=!0,rs(t,{onMove:(l,a)=>{this.saturation=Je(l/r*100,0,100),this.brightness=Je(100-a/o*100,0,100),this.syncValues(),this.value!==i&&(i=this.value,this.emit("sl-change"),this.emit("sl-input"))},onStop:()=>this.isDraggingGridHandle=!1,initialEvent:e})}handleAlphaKeyDown(e){const t=e.shiftKey?10:1,n=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.alpha=Je(this.alpha-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.alpha=Je(this.alpha+t,0,100),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.alpha=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.alpha=100,this.syncValues()),this.value!==n&&(this.emit("sl-change"),this.emit("sl-input"))}handleHueKeyDown(e){const t=e.shiftKey?10:1,n=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.hue=Je(this.hue-t,0,360),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.hue=Je(this.hue+t,0,360),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.hue=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.hue=360,this.syncValues()),this.value!==n&&(this.emit("sl-change"),this.emit("sl-input"))}handleGridKeyDown(e){const t=e.shiftKey?10:1,n=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.saturation=Je(this.saturation-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.saturation=Je(this.saturation+t,0,100),this.syncValues()),e.key==="ArrowUp"&&(e.preventDefault(),this.brightness=Je(this.brightness+t,0,100),this.syncValues()),e.key==="ArrowDown"&&(e.preventDefault(),this.brightness=Je(this.brightness-t,0,100),this.syncValues()),this.value!==n&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputChange(e){const t=e.target,n=this.value;e.stopPropagation(),this.input.value?(this.setColor(t.value),t.value=this.value):this.value="",this.value!==n&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputInput(e){this.formControlController.updateValidity(),e.stopPropagation()}handleInputKeyDown(e){if(e.key==="Enter"){const t=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")),setTimeout(()=>this.input.select())):this.hue=0}}handleInputInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleTouchMove(e){e.preventDefault()}parseColor(e){const t=new rd(e);if(!t.isValid)return null;const n=t.toHsl(),r={h:n.h,s:n.s*100,l:n.l*100,a:n.a},o=t.toRgb(),i=t.toHexString(),l=t.toHex8String(),a=t.toHsv(),s={h:a.h,s:a.s*100,v:a.v*100,a:a.a};return{hsl:{h:r.h,s:r.s,l:r.l,string:this.setLetterCase(`hsl(${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%)`)},hsla:{h:r.h,s:r.s,l:r.l,a:r.a,string:this.setLetterCase(`hsla(${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%, ${r.a.toFixed(2).toString()})`)},hsv:{h:s.h,s:s.s,v:s.v,string:this.setLetterCase(`hsv(${Math.round(s.h)}, ${Math.round(s.s)}%, ${Math.round(s.v)}%)`)},hsva:{h:s.h,s:s.s,v:s.v,a:s.a,string:this.setLetterCase(`hsva(${Math.round(s.h)}, ${Math.round(s.s)}%, ${Math.round(s.v)}%, ${s.a.toFixed(2).toString()})`)},rgb:{r:o.r,g:o.g,b:o.b,string:this.setLetterCase(`rgb(${Math.round(o.r)}, ${Math.round(o.g)}, ${Math.round(o.b)})`)},rgba:{r:o.r,g:o.g,b:o.b,a:o.a,string:this.setLetterCase(`rgba(${Math.round(o.r)}, ${Math.round(o.g)}, ${Math.round(o.b)}, ${o.a.toFixed(2).toString()})`)},hex:this.setLetterCase(i),hexa:this.setLetterCase(l)}}setColor(e){const t=this.parseColor(e);return t===null?!1:(this.hue=t.hsva.h,this.saturation=t.hsva.s,this.brightness=t.hsva.v,this.alpha=this.opacity?t.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(e){return typeof e!="string"?"":this.uppercase?e.toUpperCase():e.toLowerCase()}async syncValues(){const e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);e!==null&&(this.format==="hsl"?this.inputValue=this.opacity?e.hsla.string:e.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?e.rgba.string:e.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?e.hsva.string:e.hsv.string:this.inputValue=this.opacity?e.hexa:e.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){if(!od)return;new EyeDropper().open().then(t=>{const n=this.value;this.setColor(t.sRGBHex),this.value!==n&&(this.emit("sl-change"),this.emit("sl-input"))}).catch(()=>{})}selectSwatch(e){const t=this.value;this.disabled||(this.setColor(e),this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")))}getHexString(e,t,n,r=100){const o=new rd(`hsva(${e}, ${t}, ${n}, ${r/100})`);return o.isValid?o.toHex8String():""}stopNestedEventPropagation(e){e.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(e,t){if(this.isEmpty=!t,t||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){const n=this.parseColor(t);n!==null?(this.inputValue=this.value,this.hue=n.hsva.h,this.saturation=n.hsva.s,this.brightness=n.hsva.v,this.alpha=n.hsva.a*100,this.syncValues()):this.inputValue=e??""}}focus(e){this.inline?this.base.focus(e):this.trigger.focus(e)}blur(){var e;const t=this.inline?this.base:this.trigger;this.hasFocus&&(t.focus({preventScroll:!0}),t.blur()),(e=this.dropdown)!=null&&e.open&&this.dropdown.hide()}getFormattedValue(e="hex"){const t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(t===null)return"";switch(e){case"hex":return t.hex;case"hexa":return t.hexa;case"rgb":return t.rgb.string;case"rgba":return t.rgba.string;case"hsl":return t.hsl.string;case"hsla":return t.hsla.string;case"hsv":return t.hsv.string;case"hsva":return t.hsva.string;default:return""}}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.inline&&!this.validity.valid?(this.dropdown.show(),this.addEventListener("sl-after-show",()=>this.input.reportValidity(),{once:!0}),this.disabled||this.formControlController.emitInvalidEvent(),!1):this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.saturation,t=100-this.brightness,n=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(o=>o.trim()!==""),r=G`
      <div
        part="base"
        class=${Fe({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled,"color-picker--focused":this.hasFocus})}
        aria-disabled=${this.disabled?"true":"false"}
        aria-labelledby="label"
        tabindex=${this.inline?"0":"-1"}
      >
        ${this.inline?G`
              <sl-visually-hidden id="label">
                <slot name="label">${this.label}</slot>
              </sl-visually-hidden>
            `:null}

        <div
          part="grid"
          class="color-picker__grid"
          style=${Bt({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${Fe({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${Bt({top:`${t}%`,left:`${e}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${N(this.disabled?void 0:"0")}
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
                style=${Bt({left:`${this.hue===0?0:100/(360/this.hue)}%`})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${N(this.disabled?void 0:"0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?G`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${Bt({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="color-picker__slider-handle"
                      style=${Bt({left:`${this.alpha}%`})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${N(this.disabled?void 0:"0")}
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
            style=${Bt({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
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
            ${this.noFormatToggle?"":G`
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
            ${od?G`
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

        ${n.length>0?G`
              <div part="swatches" class="color-picker__swatches">
                ${n.map(o=>{const i=this.parseColor(o);return i?G`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${N(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${o}
                      @click=${()=>this.selectSwatch(o)}
                      @keydown=${l=>!this.disabled&&l.key==="Enter"&&this.setColor(i.hexa)}
                    >
                      <div
                        class="color-picker__swatch-color"
                        style=${Bt({backgroundColor:i.hexa})}
                      ></div>
                    </div>
                  `:(console.error(`Unable to parse swatch color: "${o}"`,this),"")})}
              </div>
            `:""}
      </div>
    `;return this.inline?r:G`
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
          class=${Fe({"color-dropdown__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":this.size==="small","color-dropdown__trigger--medium":this.size==="medium","color-dropdown__trigger--large":this.size==="large","color-dropdown__trigger--empty":this.isEmpty,"color-dropdown__trigger--focused":this.hasFocus,"color-picker__transparent-bg":!0})}
          style=${Bt({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${r}
      </sl-dropdown>
    `}};B.styles=P0;B.dependencies={"sl-button-group":jn,"sl-button":U,"sl-dropdown":Pe,"sl-icon":Be,"sl-input":O,"sl-visually-hidden":Ih};m([re('[part~="base"]')],B.prototype,"base",2);m([re('[part~="input"]')],B.prototype,"input",2);m([re(".color-dropdown")],B.prototype,"dropdown",2);m([re('[part~="preview"]')],B.prototype,"previewButton",2);m([re('[part~="trigger"]')],B.prototype,"trigger",2);m([fe()],B.prototype,"hasFocus",2);m([fe()],B.prototype,"isDraggingGridHandle",2);m([fe()],B.prototype,"isEmpty",2);m([fe()],B.prototype,"inputValue",2);m([fe()],B.prototype,"hue",2);m([fe()],B.prototype,"saturation",2);m([fe()],B.prototype,"brightness",2);m([fe()],B.prototype,"alpha",2);m([y()],B.prototype,"value",2);m([su()],B.prototype,"defaultValue",2);m([y()],B.prototype,"label",2);m([y()],B.prototype,"format",2);m([y({type:Boolean,reflect:!0})],B.prototype,"inline",2);m([y({reflect:!0})],B.prototype,"size",2);m([y({attribute:"no-format-toggle",type:Boolean})],B.prototype,"noFormatToggle",2);m([y()],B.prototype,"name",2);m([y({type:Boolean,reflect:!0})],B.prototype,"disabled",2);m([y({type:Boolean})],B.prototype,"hoist",2);m([y({type:Boolean})],B.prototype,"opacity",2);m([y({type:Boolean})],B.prototype,"uppercase",2);m([y()],B.prototype,"swatches",2);m([y({reflect:!0})],B.prototype,"form",2);m([y({type:Boolean,reflect:!0})],B.prototype,"required",2);m([Ie("format",{waitUntilFirstUpdate:!0})],B.prototype,"handleFormatChange",1);m([Ie("opacity",{waitUntilFirstUpdate:!0})],B.prototype,"handleOpacityChange",1);m([Ie("value")],B.prototype,"handleValueChange",1);var Q0="sl-color-picker";B.define("sl-color-picker");var G0=mn({tagName:Q0,elementClass:B,react:pn,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlColorPicker"}),Y0=G0,q0="sl-input";O.define("sl-input");mn({tagName:q0,elementClass:O,react:pn,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlClear:"sl-clear",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlInput"});var X0="sl-button";U.define("sl-button");var Z0=mn({tagName:X0,elementClass:U,react:pn,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus",onSlInvalid:"sl-invalid"},displayName:"SlButton"}),Qt=Z0,J0="sl-button-group";jn.define("sl-button-group");var ey=mn({tagName:J0,elementClass:jn,react:pn,events:{},displayName:"SlButtonGroup"}),ty=ey;function ny(){const[e,t]=Ne.useState([[[255,0,0],"","",[255,255,255],[0,0,255]]]),[n,r]=Ne.useState(0),[o,i]=Ne.useState([[255,0,0],"","",[255,255,255],[0,0,255]]),[l,a]=Ne.useState(5),[s,u]=Ne.useState(5);function p($){var S=$.target.files[0],F=new FileReader;F.onload=()=>{let X=id(F.result);i(X),a(X.length),u(X.length),x(X)},F.readAsText(S)}function d($){let S=$.target.value;const F=new XMLHttpRequest;F.open("GET","./colormap/"+S+".rgb"),F.responseType="text",F.onload=()=>{let X=id(F.response);i(X),a(X.length),u(X.length),x(X)},F.send()}function f(){let $=[[255,255,255],...o];i($),x($)}function v($){let S=[...o];S.splice($+1,0,""),S[S.length-1]==""&&(S[S.length-1]=[255,255,255]),i(S),l<S.length&&a(S.length),x(S)}function w($){if(o.length==2)return;let S=[...o];S.splice($,1),S[0]==""&&(S[0]=[255,255,255]),S[S.length-1]==""&&(S[S.length-1]=[255,255,255]),i(S),x(S)}function b($,S){let F=[...o];F.splice(S,1,$.target.getFormattedValue("rgb").substr(4).split(")")[0].split(",").map(X=>parseInt(X))),F[0]==""&&(F[0]=[255,255,255]),F[F.length-1]==""&&(F[F.length-1]=[255,255,255]),i(F)}function L($){if($===0||$===o.length-1)return;let S=[...o];S.splice($,1,""),i(S),x(S)}function h($){if($==0)return;let S=[...o];S[$-1]=S.splice($,1,S[$-1])[0],S[0]==""&&(S[0]=[255,255,255]),S[S.length-1]==""&&(S[S.length-1]=[255,255,255]),i(S),x(S)}function c($){if($===o.length-1)return;let S=[...o];S[$+1]=S.splice($,1,S[$+1])[0],S[0]==""&&(S[0]=[255,255,255]),S[S.length-1]==""&&(S[S.length-1]=[255,255,255]),i(S),x(S)}function g($){const S=$.target.value<o.length?s:$.target.value;u($.target.value),a(S)}function _($){const S=$.target.value<o.length?o.length:$.target.value;u(S),a(S)}function x($){const S=[...e.slice(0,n+1),$];t(S),r(S.length-1)}function C(){let $=[...o];x($)}function E(){if(n==0)return;let $=e[n-1];i($),r(n-1)}function z(){if(n==e.length-1)return;let $=e[n+1];i($),r(n+1)}const V=o.map(($,S)=>T.jsx(ry,{rgb:$,rank:S+1,setBlankColor:()=>L(S),swapUp:()=>h(S),swapDown:()=>c(S),changeColor:F=>b(F,S),addColorDown:()=>v(S),delColor:()=>w(S),handleSlBlur:C},S)),le=oy(o,l);return T.jsxs(T.Fragment,{children:[T.jsx(Wv,{color_out_rgb:le}),T.jsx(Qt,{size:"small",title:"Undo",onClick:E,children:"↶"}),T.jsx(Qt,{size:"small",title:"Redo",onClick:z,children:"↷"}),T.jsx("br",{}),T.jsx("input",{type:"file",accept:".rgb",onChange:$=>{p($)}}),T.jsx(Em,{changeMap:$=>d($)}),T.jsx("hr",{}),T.jsxs("div",{style:{display:"flex",justifyContent:"space-around"},children:[T.jsxs("div",{className:"selector",children:[T.jsx("label",{children:"n_output colors: "}),T.jsx("input",{type:"number",step:"1",value:s,onChange:$=>g($),onBlur:$=>_($),style:{width:"3em"}}),T.jsx(Qt,{size:"small",onClick:f,title:"add color down",children:"▼"}),T.jsx("br",{}),V]}),T.jsx(Hv,{coloroutrgb:le})]})]})}function ry(e){return T.jsxs("div",{style:{flex:"0 0 auto",display:"flex",alignItems:"center",padding:"1px"},children:[T.jsxs("span",{style:{display:"inline-block",width:"2em"},children:[e.rank,"."]}),T.jsx(Y0,{size:"small",value:e.rgb==""?"":"rgb("+e.rgb[0]+","+e.rgb[1]+","+e.rgb[2]+")",onSlChange:(t,n)=>e.changeColor(t,n),onSlBlur:e.handleSlBlur}),T.jsxs(ty,{children:[T.jsx(Qt,{size:"small",onClick:t=>e.setBlankColor(t),title:"set color to blank",children:"#"}),T.jsx(Qt,{size:"small",onClick:t=>e.swapUp(t),title:"swap up",children:"↑"}),T.jsx(Qt,{size:"small",onClick:t=>e.swapDown(t),title:"swap down",children:"↓"}),T.jsx(Qt,{size:"small",onClick:t=>e.addColorDown(t),title:"add color down",children:"▼"}),T.jsx(Qt,{size:"small",onClick:t=>e.delColor(t),title:"delete color",children:"X"})]}),T.jsx("br",{})]})}function oy(e,t){const n=e.length;t=Math.max(t,n);const r=ly([n-1,t-1]),o=iy(t-1,n-1)+1,i=(n-1)/r,l=(t-1)/r,a=[],s=[];var u=0;for(let d=0;d<e.length-1;d++)if(e[d+1]){var p=1/l/(d-u+1);for(let f=0;f<l*(d-u+1);f++){const v=e[u][0]+(e[d+1][0]-e[u][0])*p*f,w=e[u][1]+(e[d+1][1]-e[u][1])*p*f,b=e[u][2]+(e[d+1][2]-e[u][2])*p*f;a.push([parseInt(v),parseInt(w),parseInt(b)])}u=d+1}a.push(e[e.length-1]);for(let d=0;d<o;d=d+i)s.push(a[d]);return s}var gu=(e,t)=>t?gu(t,e%t):e,iy=(e,t)=>e/gu(e,t)*t,ly=e=>gu(Math.max(...e),Math.min(...e));function id(e){const t=e.split(`
`),n=1e3,r=[];let o=0,i=-1;function l(s){return!isNaN(parseFloat(s))&&isFinite(s)}for(let s=0;s<t.length&&o<n;s++){let u=t[s].trim();u.length===0&&(u="#");const p=u.split(/\s+/);if(p.length>=3){let d=-1,f=-1,v=-1;l(p[0])&&(d=parseFloat(p[0])),l(p[1])&&(f=parseFloat(p[1])),l(p[2])&&(v=parseFloat(p[2]));let w=-1;if(p.length>3&&l(p[3])&&(w=parseFloat(p[3])),d>=0&&f>=0&&v>=0){let b=[d,f,v,w];r.push(b),o++,d>i&&(i=d),f>i&&(i=f),v>i&&(i=v)}}}const a=new Array(o).fill(null).map(()=>[0,0,0,0]);for(let s=0;s<o;s++)a[s]=r[s];if(i<=1)for(let s=0;s<o;s++){a[s][3]=a[s][3]<0?1:a[s][3];for(let u=0;u<3;u++)a[s][u]*=255}else if(i<256)for(let s=0;s<o;s++)a[s][3]=a[s][3]<0?255:a[s][3];else for(let s=0;s<o;s++){a[s][3]=a[s][3]<0?i:a[s][3];for(let u=0;u<3;u++)a[s][u]/=i,a[s][u]*=255}for(let s=0;s<o;s++)for(let u=0;u<3;u++)a[s][u]=Math.round(a[s][u]);return a}ss.createRoot(document.getElementById("root")).render(T.jsx(gd.StrictMode,{children:T.jsx(ny,{})}));
