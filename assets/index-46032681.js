function Up(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function Wp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var td={exports:{}},Gi={},nd={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _o=Symbol.for("react.element"),Kp=Symbol.for("react.portal"),Qp=Symbol.for("react.fragment"),Gp=Symbol.for("react.strict_mode"),Yp=Symbol.for("react.profiler"),qp=Symbol.for("react.provider"),Xp=Symbol.for("react.context"),Zp=Symbol.for("react.forward_ref"),Jp=Symbol.for("react.suspense"),ef=Symbol.for("react.memo"),tf=Symbol.for("react.lazy"),pu=Symbol.iterator;function nf(e){return e===null||typeof e!="object"?null:(e=pu&&e[pu]||e["@@iterator"],typeof e=="function"?e:null)}var rd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},od=Object.assign,id={};function vr(e,t,n){this.props=e,this.context=t,this.refs=id,this.updater=n||rd}vr.prototype.isReactComponent={};vr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};vr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ld(){}ld.prototype=vr.prototype;function la(e,t,n){this.props=e,this.context=t,this.refs=id,this.updater=n||rd}var sa=la.prototype=new ld;sa.constructor=la;od(sa,vr.prototype);sa.isPureReactComponent=!0;var fu=Array.isArray,sd=Object.prototype.hasOwnProperty,aa={current:null},ad={key:!0,ref:!0,__self:!0,__source:!0};function ud(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)sd.call(t,r)&&!ad.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var a=Array(s),u=0;u<s;u++)a[u]=arguments[u+2];o.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:_o,type:e,key:i,ref:l,props:o,_owner:aa.current}}function rf(e,t){return{$$typeof:_o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ua(e){return typeof e=="object"&&e!==null&&e.$$typeof===_o}function of(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var gu=/\/+/g;function vl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?of(""+e.key):t.toString(36)}function ei(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case _o:case Kp:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+vl(l,0):r,fu(o)?(n="",e!=null&&(n=e.replace(gu,"$&/")+"/"),ei(o,t,n,"",function(u){return u})):o!=null&&(ua(o)&&(o=rf(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(gu,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",fu(e))for(var s=0;s<e.length;s++){i=e[s];var a=r+vl(i,s);l+=ei(i,t,n,a,o)}else if(a=nf(e),typeof a=="function")for(e=a.call(e),s=0;!(i=e.next()).done;)i=i.value,a=r+vl(i,s++),l+=ei(i,t,n,a,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Lo(e,t,n){if(e==null)return e;var r=[],o=0;return ei(e,r,"","",function(i){return t.call(n,i,o++)}),r}function lf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var $e={current:null},ti={transition:null},sf={ReactCurrentDispatcher:$e,ReactCurrentBatchConfig:ti,ReactCurrentOwner:aa};I.Children={map:Lo,forEach:function(e,t,n){Lo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Lo(e,function(){t++}),t},toArray:function(e){return Lo(e,function(t){return t})||[]},only:function(e){if(!ua(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Component=vr;I.Fragment=Qp;I.Profiler=Yp;I.PureComponent=la;I.StrictMode=Gp;I.Suspense=Jp;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sf;I.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=od({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=aa.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)sd.call(t,a)&&!ad.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var u=0;u<a;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:_o,type:e.type,key:o,ref:i,props:r,_owner:l}};I.createContext=function(e){return e={$$typeof:Xp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:qp,_context:e},e.Consumer=e};I.createElement=ud;I.createFactory=function(e){var t=ud.bind(null,e);return t.type=e,t};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:Zp,render:e}};I.isValidElement=ua;I.lazy=function(e){return{$$typeof:tf,_payload:{_status:-1,_result:e},_init:lf}};I.memo=function(e,t){return{$$typeof:ef,type:e,compare:t===void 0?null:t}};I.startTransition=function(e){var t=ti.transition;ti.transition={};try{e()}finally{ti.transition=t}};I.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};I.useCallback=function(e,t){return $e.current.useCallback(e,t)};I.useContext=function(e){return $e.current.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e){return $e.current.useDeferredValue(e)};I.useEffect=function(e,t){return $e.current.useEffect(e,t)};I.useId=function(){return $e.current.useId()};I.useImperativeHandle=function(e,t,n){return $e.current.useImperativeHandle(e,t,n)};I.useInsertionEffect=function(e,t){return $e.current.useInsertionEffect(e,t)};I.useLayoutEffect=function(e,t){return $e.current.useLayoutEffect(e,t)};I.useMemo=function(e,t){return $e.current.useMemo(e,t)};I.useReducer=function(e,t,n){return $e.current.useReducer(e,t,n)};I.useRef=function(e){return $e.current.useRef(e)};I.useState=function(e){return $e.current.useState(e)};I.useSyncExternalStore=function(e,t,n){return $e.current.useSyncExternalStore(e,t,n)};I.useTransition=function(){return $e.current.useTransition()};I.version="18.2.0";nd.exports=I;var We=nd.exports;const cd=Wp(We),yr=Up({__proto__:null,default:cd},[We]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var af=We,uf=Symbol.for("react.element"),cf=Symbol.for("react.fragment"),df=Object.prototype.hasOwnProperty,hf=af.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,pf={key:!0,ref:!0,__self:!0,__source:!0};function dd(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)df.call(t,r)&&!pf.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:uf,type:e,key:i,ref:l,props:o,_owner:hf.current}}Gi.Fragment=cf;Gi.jsx=dd;Gi.jsxs=dd;td.exports=Gi;var L=td.exports,os={},hd={exports:{}},qe={},pd={exports:{}},fd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(A,M){var D=A.length;A.push(M);e:for(;0<D;){var oe=D-1>>>1,de=A[oe];if(0<o(de,M))A[oe]=M,A[D]=de,D=oe;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var M=A[0],D=A.pop();if(D!==M){A[0]=D;e:for(var oe=0,de=A.length,Po=de>>>1;oe<Po;){var pn=2*(oe+1)-1,ml=A[pn],fn=pn+1,To=A[fn];if(0>o(ml,D))fn<de&&0>o(To,ml)?(A[oe]=To,A[fn]=D,oe=fn):(A[oe]=ml,A[pn]=D,oe=pn);else if(fn<de&&0>o(To,D))A[oe]=To,A[fn]=D,oe=fn;else break e}}return M}function o(A,M){var D=A.sortIndex-M.sortIndex;return D!==0?D:A.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var a=[],u=[],h=1,d=null,g=3,v=!1,w=!1,b=!1,T=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(A){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=A)r(u),M.sortIndex=M.expirationTime,t(a,M);else break;M=n(u)}}function _(A){if(b=!1,m(A),!w)if(n(a)!==null)w=!0,Le(x);else{var M=n(u);M!==null&&Ve(_,M.startTime-A)}}function x(A,M){w=!1,b&&(b=!1,p(z),z=-1),v=!0;var D=g;try{for(m(M),d=n(a);d!==null&&(!(d.expirationTime>M)||A&&!le());){var oe=d.callback;if(typeof oe=="function"){d.callback=null,g=d.priorityLevel;var de=oe(d.expirationTime<=M);M=e.unstable_now(),typeof de=="function"?d.callback=de:d===n(a)&&r(a),m(M)}else r(a);d=n(a)}if(d!==null)var Po=!0;else{var pn=n(u);pn!==null&&Ve(_,pn.startTime-M),Po=!1}return Po}finally{d=null,g=D,v=!1}}var C=!1,E=null,z=-1,j=5,R=-1;function le(){return!(e.unstable_now()-R<j)}function $(){if(E!==null){var A=e.unstable_now();R=A;var M=!0;try{M=E(!0,A)}finally{M?S():(C=!1,E=null)}}else C=!1}var S;if(typeof c=="function")S=function(){c($)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,X=F.port2;F.port1.onmessage=$,S=function(){X.postMessage(null)}}else S=function(){T($,0)};function Le(A){E=A,C||(C=!0,S())}function Ve(A,M){z=T(function(){A(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){w||v||(w=!0,Le(x))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(A){switch(g){case 1:case 2:case 3:var M=3;break;default:M=g}var D=g;g=M;try{return A()}finally{g=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,M){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var D=g;g=A;try{return M()}finally{g=D}},e.unstable_scheduleCallback=function(A,M,D){var oe=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?oe+D:oe):D=oe,A){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=D+de,A={id:h++,callback:M,priorityLevel:A,startTime:D,expirationTime:de,sortIndex:-1},D>oe?(A.sortIndex=D,t(u,A),n(a)===null&&A===n(u)&&(b?(p(z),z=-1):b=!0,Ve(_,D-oe))):(A.sortIndex=de,t(a,A),w||v||(w=!0,Le(x))),A},e.unstable_shouldYield=le,e.unstable_wrapCallback=function(A){var M=g;return function(){var D=g;g=M;try{return A.apply(this,arguments)}finally{g=D}}}})(fd);pd.exports=fd;var ff=pd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gd=We,Ye=ff;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var md=new Set,Zr={};function Rn(e,t){sr(e,t),sr(e+"Capture",t)}function sr(e,t){for(Zr[e]=t,e=0;e<t.length;e++)md.add(t[e])}var Pt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),is=Object.prototype.hasOwnProperty,gf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,mu={},vu={};function mf(e){return is.call(vu,e)?!0:is.call(mu,e)?!1:gf.test(e)?vu[e]=!0:(mu[e]=!0,!1)}function vf(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function yf(e,t,n,r){if(t===null||typeof t>"u"||vf(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ze(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var ye={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ye[e]=new ze(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ye[t]=new ze(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ye[e]=new ze(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ye[e]=new ze(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ye[e]=new ze(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ye[e]=new ze(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ye[e]=new ze(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ye[e]=new ze(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ye[e]=new ze(e,5,!1,e.toLowerCase(),null,!1,!1)});var ca=/[\-:]([a-z])/g;function da(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ca,da);ye[t]=new ze(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ca,da);ye[t]=new ze(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ca,da);ye[t]=new ze(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ye[e]=new ze(e,1,!1,e.toLowerCase(),null,!1,!1)});ye.xlinkHref=new ze("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ye[e]=new ze(e,1,!1,e.toLowerCase(),null,!0,!0)});function ha(e,t,n,r){var o=ye.hasOwnProperty(t)?ye[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(yf(t,n,o,r)&&(n=null),r||o===null?mf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Mt=gd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,No=Symbol.for("react.element"),Bn=Symbol.for("react.portal"),Vn=Symbol.for("react.fragment"),pa=Symbol.for("react.strict_mode"),ls=Symbol.for("react.profiler"),vd=Symbol.for("react.provider"),yd=Symbol.for("react.context"),fa=Symbol.for("react.forward_ref"),ss=Symbol.for("react.suspense"),as=Symbol.for("react.suspense_list"),ga=Symbol.for("react.memo"),Bt=Symbol.for("react.lazy"),wd=Symbol.for("react.offscreen"),yu=Symbol.iterator;function Sr(e){return e===null||typeof e!="object"?null:(e=yu&&e[yu]||e["@@iterator"],typeof e=="function"?e:null)}var te=Object.assign,yl;function Fr(e){if(yl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);yl=t&&t[1]||""}return`
`+yl+e}var wl=!1;function bl(e,t){if(!e||wl)return"";wl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,s=i.length-1;1<=l&&0<=s&&o[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(o[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||o[l]!==i[s]){var a=`
`+o[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=s);break}}}finally{wl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Fr(e):""}function wf(e){switch(e.tag){case 5:return Fr(e.type);case 16:return Fr("Lazy");case 13:return Fr("Suspense");case 19:return Fr("SuspenseList");case 0:case 2:case 15:return e=bl(e.type,!1),e;case 11:return e=bl(e.type.render,!1),e;case 1:return e=bl(e.type,!0),e;default:return""}}function us(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Vn:return"Fragment";case Bn:return"Portal";case ls:return"Profiler";case pa:return"StrictMode";case ss:return"Suspense";case as:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case yd:return(e.displayName||"Context")+".Consumer";case vd:return(e._context.displayName||"Context")+".Provider";case fa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ga:return t=e.displayName||null,t!==null?t:us(e.type)||"Memo";case Bt:t=e._payload,e=e._init;try{return us(e(t))}catch{}}return null}function bf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return us(t);case 8:return t===pa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function rn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function bd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function _f(e){var t=bd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ro(e){e._valueTracker||(e._valueTracker=_f(e))}function _d(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=bd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function mi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function cs(e,t){var n=t.checked;return te({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function wu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=rn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function xd(e,t){t=t.checked,t!=null&&ha(e,"checked",t,!1)}function ds(e,t){xd(e,t);var n=rn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?hs(e,t.type,n):t.hasOwnProperty("defaultValue")&&hs(e,t.type,rn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function bu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function hs(e,t,n){(t!=="number"||mi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ir=Array.isArray;function er(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+rn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ps(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return te({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function _u(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(Ir(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:rn(n)}}function kd(e,t){var n=rn(t.value),r=rn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function xu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Sd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Sd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Mo,Cd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Mo=Mo||document.createElement("div"),Mo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Mo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Jr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var jr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xf=["Webkit","ms","Moz","O"];Object.keys(jr).forEach(function(e){xf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),jr[t]=jr[e]})});function Ed(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||jr.hasOwnProperty(e)&&jr[e]?(""+t).trim():t+"px"}function $d(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Ed(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var kf=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gs(e,t){if(t){if(kf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function ms(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vs=null;function ma(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ys=null,tr=null,nr=null;function ku(e){if(e=So(e)){if(typeof ys!="function")throw Error(k(280));var t=e.stateNode;t&&(t=Ji(t),ys(e.stateNode,e.type,t))}}function zd(e){tr?nr?nr.push(e):nr=[e]:tr=e}function Ad(){if(tr){var e=tr,t=nr;if(nr=tr=null,ku(e),t)for(e=0;e<t.length;e++)ku(t[e])}}function Pd(e,t){return e(t)}function Td(){}var _l=!1;function Ld(e,t,n){if(_l)return e(t,n);_l=!0;try{return Pd(e,t,n)}finally{_l=!1,(tr!==null||nr!==null)&&(Td(),Ad())}}function eo(e,t){var n=e.stateNode;if(n===null)return null;var r=Ji(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var ws=!1;if(Pt)try{var Cr={};Object.defineProperty(Cr,"passive",{get:function(){ws=!0}}),window.addEventListener("test",Cr,Cr),window.removeEventListener("test",Cr,Cr)}catch{ws=!1}function Sf(e,t,n,r,o,i,l,s,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(h){this.onError(h)}}var Hr=!1,vi=null,yi=!1,bs=null,Cf={onError:function(e){Hr=!0,vi=e}};function Ef(e,t,n,r,o,i,l,s,a){Hr=!1,vi=null,Sf.apply(Cf,arguments)}function $f(e,t,n,r,o,i,l,s,a){if(Ef.apply(this,arguments),Hr){if(Hr){var u=vi;Hr=!1,vi=null}else throw Error(k(198));yi||(yi=!0,bs=u)}}function Mn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Nd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Su(e){if(Mn(e)!==e)throw Error(k(188))}function zf(e){var t=e.alternate;if(!t){if(t=Mn(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Su(o),e;if(i===r)return Su(o),t;i=i.sibling}throw Error(k(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function Rd(e){return e=zf(e),e!==null?Md(e):null}function Md(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Md(e);if(t!==null)return t;e=e.sibling}return null}var Od=Ye.unstable_scheduleCallback,Cu=Ye.unstable_cancelCallback,Af=Ye.unstable_shouldYield,Pf=Ye.unstable_requestPaint,ie=Ye.unstable_now,Tf=Ye.unstable_getCurrentPriorityLevel,va=Ye.unstable_ImmediatePriority,Dd=Ye.unstable_UserBlockingPriority,wi=Ye.unstable_NormalPriority,Lf=Ye.unstable_LowPriority,Fd=Ye.unstable_IdlePriority,Yi=null,bt=null;function Nf(e){if(bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(Yi,e,void 0,(e.current.flags&128)===128)}catch{}}var pt=Math.clz32?Math.clz32:Of,Rf=Math.log,Mf=Math.LN2;function Of(e){return e>>>=0,e===0?32:31-(Rf(e)/Mf|0)|0}var Oo=64,Do=4194304;function Br(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function bi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~o;s!==0?r=Br(s):(i&=l,i!==0&&(r=Br(i)))}else l=n&~o,l!==0?r=Br(l):i!==0&&(r=Br(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-pt(t),o=1<<n,r|=e[n],t&=~o;return r}function Df(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ff(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-pt(i),s=1<<l,a=o[l];a===-1?(!(s&n)||s&r)&&(o[l]=Df(s,t)):a<=t&&(e.expiredLanes|=s),i&=~s}}function _s(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Id(){var e=Oo;return Oo<<=1,!(Oo&4194240)&&(Oo=64),e}function xl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function xo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-pt(t),e[t]=n}function If(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-pt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function ya(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-pt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var U=0;function Bd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Vd,wa,jd,Hd,Ud,xs=!1,Fo=[],Yt=null,qt=null,Xt=null,to=new Map,no=new Map,Ht=[],Bf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Eu(e,t){switch(e){case"focusin":case"focusout":Yt=null;break;case"dragenter":case"dragleave":qt=null;break;case"mouseover":case"mouseout":Xt=null;break;case"pointerover":case"pointerout":to.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":no.delete(t.pointerId)}}function Er(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=So(t),t!==null&&wa(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Vf(e,t,n,r,o){switch(t){case"focusin":return Yt=Er(Yt,e,t,n,r,o),!0;case"dragenter":return qt=Er(qt,e,t,n,r,o),!0;case"mouseover":return Xt=Er(Xt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return to.set(i,Er(to.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,no.set(i,Er(no.get(i)||null,e,t,n,r,o)),!0}return!1}function Wd(e){var t=bn(e.target);if(t!==null){var n=Mn(t);if(n!==null){if(t=n.tag,t===13){if(t=Nd(n),t!==null){e.blockedOn=t,Ud(e.priority,function(){jd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ni(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ks(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);vs=r,n.target.dispatchEvent(r),vs=null}else return t=So(n),t!==null&&wa(t),e.blockedOn=n,!1;t.shift()}return!0}function $u(e,t,n){ni(e)&&n.delete(t)}function jf(){xs=!1,Yt!==null&&ni(Yt)&&(Yt=null),qt!==null&&ni(qt)&&(qt=null),Xt!==null&&ni(Xt)&&(Xt=null),to.forEach($u),no.forEach($u)}function $r(e,t){e.blockedOn===t&&(e.blockedOn=null,xs||(xs=!0,Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority,jf)))}function ro(e){function t(o){return $r(o,e)}if(0<Fo.length){$r(Fo[0],e);for(var n=1;n<Fo.length;n++){var r=Fo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Yt!==null&&$r(Yt,e),qt!==null&&$r(qt,e),Xt!==null&&$r(Xt,e),to.forEach(t),no.forEach(t),n=0;n<Ht.length;n++)r=Ht[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ht.length&&(n=Ht[0],n.blockedOn===null);)Wd(n),n.blockedOn===null&&Ht.shift()}var rr=Mt.ReactCurrentBatchConfig,_i=!0;function Hf(e,t,n,r){var o=U,i=rr.transition;rr.transition=null;try{U=1,ba(e,t,n,r)}finally{U=o,rr.transition=i}}function Uf(e,t,n,r){var o=U,i=rr.transition;rr.transition=null;try{U=4,ba(e,t,n,r)}finally{U=o,rr.transition=i}}function ba(e,t,n,r){if(_i){var o=ks(e,t,n,r);if(o===null)Ll(e,t,r,xi,n),Eu(e,r);else if(Vf(o,e,t,n,r))r.stopPropagation();else if(Eu(e,r),t&4&&-1<Bf.indexOf(e)){for(;o!==null;){var i=So(o);if(i!==null&&Vd(i),i=ks(e,t,n,r),i===null&&Ll(e,t,r,xi,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Ll(e,t,r,null,n)}}var xi=null;function ks(e,t,n,r){if(xi=null,e=ma(r),e=bn(e),e!==null)if(t=Mn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Nd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return xi=e,null}function Kd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Tf()){case va:return 1;case Dd:return 4;case wi:case Lf:return 16;case Fd:return 536870912;default:return 16}default:return 16}}var Kt=null,_a=null,ri=null;function Qd(){if(ri)return ri;var e,t=_a,n=t.length,r,o="value"in Kt?Kt.value:Kt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return ri=o.slice(e,1<r?1-r:void 0)}function oi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Io(){return!0}function zu(){return!1}function Xe(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Io:zu,this.isPropagationStopped=zu,this}return te(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Io)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Io)},persist:function(){},isPersistent:Io}),t}var wr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xa=Xe(wr),ko=te({},wr,{view:0,detail:0}),Wf=Xe(ko),kl,Sl,zr,qi=te({},ko,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ka,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zr&&(zr&&e.type==="mousemove"?(kl=e.screenX-zr.screenX,Sl=e.screenY-zr.screenY):Sl=kl=0,zr=e),kl)},movementY:function(e){return"movementY"in e?e.movementY:Sl}}),Au=Xe(qi),Kf=te({},qi,{dataTransfer:0}),Qf=Xe(Kf),Gf=te({},ko,{relatedTarget:0}),Cl=Xe(Gf),Yf=te({},wr,{animationName:0,elapsedTime:0,pseudoElement:0}),qf=Xe(Yf),Xf=te({},wr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Zf=Xe(Xf),Jf=te({},wr,{data:0}),Pu=Xe(Jf),eg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ng={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ng[e])?!!t[e]:!1}function ka(){return rg}var og=te({},ko,{key:function(e){if(e.key){var t=eg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=oi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?tg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ka,charCode:function(e){return e.type==="keypress"?oi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?oi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ig=Xe(og),lg=te({},qi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tu=Xe(lg),sg=te({},ko,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ka}),ag=Xe(sg),ug=te({},wr,{propertyName:0,elapsedTime:0,pseudoElement:0}),cg=Xe(ug),dg=te({},qi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),hg=Xe(dg),pg=[9,13,27,32],Sa=Pt&&"CompositionEvent"in window,Ur=null;Pt&&"documentMode"in document&&(Ur=document.documentMode);var fg=Pt&&"TextEvent"in window&&!Ur,Gd=Pt&&(!Sa||Ur&&8<Ur&&11>=Ur),Lu=String.fromCharCode(32),Nu=!1;function Yd(e,t){switch(e){case"keyup":return pg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var jn=!1;function gg(e,t){switch(e){case"compositionend":return qd(t);case"keypress":return t.which!==32?null:(Nu=!0,Lu);case"textInput":return e=t.data,e===Lu&&Nu?null:e;default:return null}}function mg(e,t){if(jn)return e==="compositionend"||!Sa&&Yd(e,t)?(e=Qd(),ri=_a=Kt=null,jn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Gd&&t.locale!=="ko"?null:t.data;default:return null}}var vg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ru(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!vg[e.type]:t==="textarea"}function Xd(e,t,n,r){zd(r),t=ki(t,"onChange"),0<t.length&&(n=new xa("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Wr=null,oo=null;function yg(e){ah(e,0)}function Xi(e){var t=Wn(e);if(_d(t))return e}function wg(e,t){if(e==="change")return t}var Zd=!1;if(Pt){var El;if(Pt){var $l="oninput"in document;if(!$l){var Mu=document.createElement("div");Mu.setAttribute("oninput","return;"),$l=typeof Mu.oninput=="function"}El=$l}else El=!1;Zd=El&&(!document.documentMode||9<document.documentMode)}function Ou(){Wr&&(Wr.detachEvent("onpropertychange",Jd),oo=Wr=null)}function Jd(e){if(e.propertyName==="value"&&Xi(oo)){var t=[];Xd(t,oo,e,ma(e)),Ld(yg,t)}}function bg(e,t,n){e==="focusin"?(Ou(),Wr=t,oo=n,Wr.attachEvent("onpropertychange",Jd)):e==="focusout"&&Ou()}function _g(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Xi(oo)}function xg(e,t){if(e==="click")return Xi(t)}function kg(e,t){if(e==="input"||e==="change")return Xi(t)}function Sg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var gt=typeof Object.is=="function"?Object.is:Sg;function io(e,t){if(gt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!is.call(t,o)||!gt(e[o],t[o]))return!1}return!0}function Du(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fu(e,t){var n=Du(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Du(n)}}function eh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?eh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function th(){for(var e=window,t=mi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=mi(e.document)}return t}function Ca(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Cg(e){var t=th(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&eh(n.ownerDocument.documentElement,n)){if(r!==null&&Ca(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Fu(n,i);var l=Fu(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Eg=Pt&&"documentMode"in document&&11>=document.documentMode,Hn=null,Ss=null,Kr=null,Cs=!1;function Iu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Cs||Hn==null||Hn!==mi(r)||(r=Hn,"selectionStart"in r&&Ca(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Kr&&io(Kr,r)||(Kr=r,r=ki(Ss,"onSelect"),0<r.length&&(t=new xa("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Hn)))}function Bo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Un={animationend:Bo("Animation","AnimationEnd"),animationiteration:Bo("Animation","AnimationIteration"),animationstart:Bo("Animation","AnimationStart"),transitionend:Bo("Transition","TransitionEnd")},zl={},nh={};Pt&&(nh=document.createElement("div").style,"AnimationEvent"in window||(delete Un.animationend.animation,delete Un.animationiteration.animation,delete Un.animationstart.animation),"TransitionEvent"in window||delete Un.transitionend.transition);function Zi(e){if(zl[e])return zl[e];if(!Un[e])return e;var t=Un[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in nh)return zl[e]=t[n];return e}var rh=Zi("animationend"),oh=Zi("animationiteration"),ih=Zi("animationstart"),lh=Zi("transitionend"),sh=new Map,Bu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function cn(e,t){sh.set(e,t),Rn(t,[e])}for(var Al=0;Al<Bu.length;Al++){var Pl=Bu[Al],$g=Pl.toLowerCase(),zg=Pl[0].toUpperCase()+Pl.slice(1);cn($g,"on"+zg)}cn(rh,"onAnimationEnd");cn(oh,"onAnimationIteration");cn(ih,"onAnimationStart");cn("dblclick","onDoubleClick");cn("focusin","onFocus");cn("focusout","onBlur");cn(lh,"onTransitionEnd");sr("onMouseEnter",["mouseout","mouseover"]);sr("onMouseLeave",["mouseout","mouseover"]);sr("onPointerEnter",["pointerout","pointerover"]);sr("onPointerLeave",["pointerout","pointerover"]);Rn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ag=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vr));function Vu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,$f(r,t,void 0,e),e.currentTarget=null}function ah(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],a=s.instance,u=s.currentTarget;if(s=s.listener,a!==i&&o.isPropagationStopped())break e;Vu(o,s,u),i=a}else for(l=0;l<r.length;l++){if(s=r[l],a=s.instance,u=s.currentTarget,s=s.listener,a!==i&&o.isPropagationStopped())break e;Vu(o,s,u),i=a}}}if(yi)throw e=bs,yi=!1,bs=null,e}function Q(e,t){var n=t[Ps];n===void 0&&(n=t[Ps]=new Set);var r=e+"__bubble";n.has(r)||(uh(t,e,2,!1),n.add(r))}function Tl(e,t,n){var r=0;t&&(r|=4),uh(n,e,r,t)}var Vo="_reactListening"+Math.random().toString(36).slice(2);function lo(e){if(!e[Vo]){e[Vo]=!0,md.forEach(function(n){n!=="selectionchange"&&(Ag.has(n)||Tl(n,!1,e),Tl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Vo]||(t[Vo]=!0,Tl("selectionchange",!1,t))}}function uh(e,t,n,r){switch(Kd(t)){case 1:var o=Hf;break;case 4:o=Uf;break;default:o=ba}n=o.bind(null,t,n,e),o=void 0,!ws||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Ll(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;l=l.return}for(;s!==null;){if(l=bn(s),l===null)return;if(a=l.tag,a===5||a===6){r=i=l;continue e}s=s.parentNode}}r=r.return}Ld(function(){var u=i,h=ma(n),d=[];e:{var g=sh.get(e);if(g!==void 0){var v=xa,w=e;switch(e){case"keypress":if(oi(n)===0)break e;case"keydown":case"keyup":v=ig;break;case"focusin":w="focus",v=Cl;break;case"focusout":w="blur",v=Cl;break;case"beforeblur":case"afterblur":v=Cl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Au;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Qf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=ag;break;case rh:case oh:case ih:v=qf;break;case lh:v=cg;break;case"scroll":v=Wf;break;case"wheel":v=hg;break;case"copy":case"cut":case"paste":v=Zf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Tu}var b=(t&4)!==0,T=!b&&e==="scroll",p=b?g!==null?g+"Capture":null:g;b=[];for(var c=u,m;c!==null;){m=c;var _=m.stateNode;if(m.tag===5&&_!==null&&(m=_,p!==null&&(_=eo(c,p),_!=null&&b.push(so(c,_,m)))),T)break;c=c.return}0<b.length&&(g=new v(g,w,null,n,h),d.push({event:g,listeners:b}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",g&&n!==vs&&(w=n.relatedTarget||n.fromElement)&&(bn(w)||w[Tt]))break e;if((v||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,v?(w=n.relatedTarget||n.toElement,v=u,w=w?bn(w):null,w!==null&&(T=Mn(w),w!==T||w.tag!==5&&w.tag!==6)&&(w=null)):(v=null,w=u),v!==w)){if(b=Au,_="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(b=Tu,_="onPointerLeave",p="onPointerEnter",c="pointer"),T=v==null?g:Wn(v),m=w==null?g:Wn(w),g=new b(_,c+"leave",v,n,h),g.target=T,g.relatedTarget=m,_=null,bn(h)===u&&(b=new b(p,c+"enter",w,n,h),b.target=m,b.relatedTarget=T,_=b),T=_,v&&w)t:{for(b=v,p=w,c=0,m=b;m;m=Fn(m))c++;for(m=0,_=p;_;_=Fn(_))m++;for(;0<c-m;)b=Fn(b),c--;for(;0<m-c;)p=Fn(p),m--;for(;c--;){if(b===p||p!==null&&b===p.alternate)break t;b=Fn(b),p=Fn(p)}b=null}else b=null;v!==null&&ju(d,g,v,b,!1),w!==null&&T!==null&&ju(d,T,w,b,!0)}}e:{if(g=u?Wn(u):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var x=wg;else if(Ru(g))if(Zd)x=kg;else{x=_g;var C=bg}else(v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(x=xg);if(x&&(x=x(e,u))){Xd(d,x,n,h);break e}C&&C(e,g,u),e==="focusout"&&(C=g._wrapperState)&&C.controlled&&g.type==="number"&&hs(g,"number",g.value)}switch(C=u?Wn(u):window,e){case"focusin":(Ru(C)||C.contentEditable==="true")&&(Hn=C,Ss=u,Kr=null);break;case"focusout":Kr=Ss=Hn=null;break;case"mousedown":Cs=!0;break;case"contextmenu":case"mouseup":case"dragend":Cs=!1,Iu(d,n,h);break;case"selectionchange":if(Eg)break;case"keydown":case"keyup":Iu(d,n,h)}var E;if(Sa)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else jn?Yd(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(Gd&&n.locale!=="ko"&&(jn||z!=="onCompositionStart"?z==="onCompositionEnd"&&jn&&(E=Qd()):(Kt=h,_a="value"in Kt?Kt.value:Kt.textContent,jn=!0)),C=ki(u,z),0<C.length&&(z=new Pu(z,e,null,n,h),d.push({event:z,listeners:C}),E?z.data=E:(E=qd(n),E!==null&&(z.data=E)))),(E=fg?gg(e,n):mg(e,n))&&(u=ki(u,"onBeforeInput"),0<u.length&&(h=new Pu("onBeforeInput","beforeinput",null,n,h),d.push({event:h,listeners:u}),h.data=E))}ah(d,t)})}function so(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ki(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=eo(e,n),i!=null&&r.unshift(so(e,i,o)),i=eo(e,t),i!=null&&r.push(so(e,i,o))),e=e.return}return r}function Fn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ju(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var s=n,a=s.alternate,u=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&u!==null&&(s=u,o?(a=eo(n,i),a!=null&&l.unshift(so(n,a,s))):o||(a=eo(n,i),a!=null&&l.push(so(n,a,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Pg=/\r\n?/g,Tg=/\u0000|\uFFFD/g;function Hu(e){return(typeof e=="string"?e:""+e).replace(Pg,`
`).replace(Tg,"")}function jo(e,t,n){if(t=Hu(t),Hu(e)!==t&&n)throw Error(k(425))}function Si(){}var Es=null,$s=null;function zs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var As=typeof setTimeout=="function"?setTimeout:void 0,Lg=typeof clearTimeout=="function"?clearTimeout:void 0,Uu=typeof Promise=="function"?Promise:void 0,Ng=typeof queueMicrotask=="function"?queueMicrotask:typeof Uu<"u"?function(e){return Uu.resolve(null).then(e).catch(Rg)}:As;function Rg(e){setTimeout(function(){throw e})}function Nl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),ro(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);ro(t)}function Zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Wu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var br=Math.random().toString(36).slice(2),wt="__reactFiber$"+br,ao="__reactProps$"+br,Tt="__reactContainer$"+br,Ps="__reactEvents$"+br,Mg="__reactListeners$"+br,Og="__reactHandles$"+br;function bn(e){var t=e[wt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Tt]||n[wt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Wu(e);e!==null;){if(n=e[wt])return n;e=Wu(e)}return t}e=n,n=e.parentNode}return null}function So(e){return e=e[wt]||e[Tt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Wn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function Ji(e){return e[ao]||null}var Ts=[],Kn=-1;function dn(e){return{current:e}}function Y(e){0>Kn||(e.current=Ts[Kn],Ts[Kn]=null,Kn--)}function K(e,t){Kn++,Ts[Kn]=e.current,e.current=t}var on={},ke=dn(on),Me=dn(!1),$n=on;function ar(e,t){var n=e.type.contextTypes;if(!n)return on;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Oe(e){return e=e.childContextTypes,e!=null}function Ci(){Y(Me),Y(ke)}function Ku(e,t,n){if(ke.current!==on)throw Error(k(168));K(ke,t),K(Me,n)}function ch(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(k(108,bf(e)||"Unknown",o));return te({},n,r)}function Ei(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||on,$n=ke.current,K(ke,e),K(Me,Me.current),!0}function Qu(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=ch(e,t,$n),r.__reactInternalMemoizedMergedChildContext=e,Y(Me),Y(ke),K(ke,e)):Y(Me),K(Me,n)}var Ct=null,el=!1,Rl=!1;function dh(e){Ct===null?Ct=[e]:Ct.push(e)}function Dg(e){el=!0,dh(e)}function hn(){if(!Rl&&Ct!==null){Rl=!0;var e=0,t=U;try{var n=Ct;for(U=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ct=null,el=!1}catch(o){throw Ct!==null&&(Ct=Ct.slice(e+1)),Od(va,hn),o}finally{U=t,Rl=!1}}return null}var Qn=[],Gn=0,$i=null,zi=0,et=[],tt=0,zn=null,$t=1,zt="";function mn(e,t){Qn[Gn++]=zi,Qn[Gn++]=$i,$i=e,zi=t}function hh(e,t,n){et[tt++]=$t,et[tt++]=zt,et[tt++]=zn,zn=e;var r=$t;e=zt;var o=32-pt(r)-1;r&=~(1<<o),n+=1;var i=32-pt(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,$t=1<<32-pt(t)+o|n<<o|r,zt=i+e}else $t=1<<i|n<<o|r,zt=e}function Ea(e){e.return!==null&&(mn(e,1),hh(e,1,0))}function $a(e){for(;e===$i;)$i=Qn[--Gn],Qn[Gn]=null,zi=Qn[--Gn],Qn[Gn]=null;for(;e===zn;)zn=et[--tt],et[tt]=null,zt=et[--tt],et[tt]=null,$t=et[--tt],et[tt]=null}var Qe=null,Ke=null,Z=!1,ht=null;function ph(e,t){var n=nt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Gu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Qe=e,Ke=Zt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Qe=e,Ke=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=zn!==null?{id:$t,overflow:zt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=nt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Qe=e,Ke=null,!0):!1;default:return!1}}function Ls(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ns(e){if(Z){var t=Ke;if(t){var n=t;if(!Gu(e,t)){if(Ls(e))throw Error(k(418));t=Zt(n.nextSibling);var r=Qe;t&&Gu(e,t)?ph(r,n):(e.flags=e.flags&-4097|2,Z=!1,Qe=e)}}else{if(Ls(e))throw Error(k(418));e.flags=e.flags&-4097|2,Z=!1,Qe=e}}}function Yu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Qe=e}function Ho(e){if(e!==Qe)return!1;if(!Z)return Yu(e),Z=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!zs(e.type,e.memoizedProps)),t&&(t=Ke)){if(Ls(e))throw fh(),Error(k(418));for(;t;)ph(e,t),t=Zt(t.nextSibling)}if(Yu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ke=Zt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ke=null}}else Ke=Qe?Zt(e.stateNode.nextSibling):null;return!0}function fh(){for(var e=Ke;e;)e=Zt(e.nextSibling)}function ur(){Ke=Qe=null,Z=!1}function za(e){ht===null?ht=[e]:ht.push(e)}var Fg=Mt.ReactCurrentBatchConfig;function ct(e,t){if(e&&e.defaultProps){t=te({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ai=dn(null),Pi=null,Yn=null,Aa=null;function Pa(){Aa=Yn=Pi=null}function Ta(e){var t=Ai.current;Y(Ai),e._currentValue=t}function Rs(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function or(e,t){Pi=e,Aa=Yn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Re=!0),e.firstContext=null)}function it(e){var t=e._currentValue;if(Aa!==e)if(e={context:e,memoizedValue:t,next:null},Yn===null){if(Pi===null)throw Error(k(308));Yn=e,Pi.dependencies={lanes:0,firstContext:e}}else Yn=Yn.next=e;return t}var _n=null;function La(e){_n===null?_n=[e]:_n.push(e)}function gh(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,La(t)):(n.next=o.next,o.next=n),t.interleaved=n,Lt(e,r)}function Lt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Vt=!1;function Na(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function mh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function At(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Jt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,V&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Lt(e,n)}return o=r.interleaved,o===null?(t.next=t,La(r)):(t.next=o.next,o.next=t),r.interleaved=t,Lt(e,n)}function ii(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ya(e,n)}}function qu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ti(e,t,n,r){var o=e.updateQueue;Vt=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var a=s,u=a.next;a.next=null,l===null?i=u:l.next=u,l=a;var h=e.alternate;h!==null&&(h=h.updateQueue,s=h.lastBaseUpdate,s!==l&&(s===null?h.firstBaseUpdate=u:s.next=u,h.lastBaseUpdate=a))}if(i!==null){var d=o.baseState;l=0,h=u=a=null,s=i;do{var g=s.lane,v=s.eventTime;if((r&g)===g){h!==null&&(h=h.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,b=s;switch(g=t,v=n,b.tag){case 1:if(w=b.payload,typeof w=="function"){d=w.call(v,d,g);break e}d=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=b.payload,g=typeof w=="function"?w.call(v,d,g):w,g==null)break e;d=te({},d,g);break e;case 2:Vt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[s]:g.push(s))}else v={eventTime:v,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},h===null?(u=h=v,a=d):h=h.next=v,l|=g;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;g=s,s=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(1);if(h===null&&(a=d),o.baseState=a,o.firstBaseUpdate=u,o.lastBaseUpdate=h,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Pn|=l,e.lanes=l,e.memoizedState=d}}function Xu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(k(191,o));o.call(r)}}}var vh=new gd.Component().refs;function Ms(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:te({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var tl={isMounted:function(e){return(e=e._reactInternals)?Mn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ee(),o=tn(e),i=At(r,o);i.payload=t,n!=null&&(i.callback=n),t=Jt(e,i,o),t!==null&&(ft(t,e,o,r),ii(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ee(),o=tn(e),i=At(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Jt(e,i,o),t!==null&&(ft(t,e,o,r),ii(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ee(),r=tn(e),o=At(n,r);o.tag=2,t!=null&&(o.callback=t),t=Jt(e,o,r),t!==null&&(ft(t,e,r,n),ii(t,e,r))}};function Zu(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!io(n,r)||!io(o,i):!0}function yh(e,t,n){var r=!1,o=on,i=t.contextType;return typeof i=="object"&&i!==null?i=it(i):(o=Oe(t)?$n:ke.current,r=t.contextTypes,i=(r=r!=null)?ar(e,o):on),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=tl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Ju(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&tl.enqueueReplaceState(t,t.state,null)}function Os(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=vh,Na(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=it(i):(i=Oe(t)?$n:ke.current,o.context=ar(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ms(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&tl.enqueueReplaceState(o,o.state,null),Ti(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Ar(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var s=o.refs;s===vh&&(s=o.refs={}),l===null?delete s[i]:s[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function Uo(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ec(e){var t=e._init;return t(e._payload)}function wh(e){function t(p,c){if(e){var m=p.deletions;m===null?(p.deletions=[c],p.flags|=16):m.push(c)}}function n(p,c){if(!e)return null;for(;c!==null;)t(p,c),c=c.sibling;return null}function r(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function o(p,c){return p=nn(p,c),p.index=0,p.sibling=null,p}function i(p,c,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<c?(p.flags|=2,c):m):(p.flags|=2,c)):(p.flags|=1048576,c)}function l(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,c,m,_){return c===null||c.tag!==6?(c=Vl(m,p.mode,_),c.return=p,c):(c=o(c,m),c.return=p,c)}function a(p,c,m,_){var x=m.type;return x===Vn?h(p,c,m.props.children,_,m.key):c!==null&&(c.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Bt&&ec(x)===c.type)?(_=o(c,m.props),_.ref=Ar(p,c,m),_.return=p,_):(_=di(m.type,m.key,m.props,null,p.mode,_),_.ref=Ar(p,c,m),_.return=p,_)}function u(p,c,m,_){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=jl(m,p.mode,_),c.return=p,c):(c=o(c,m.children||[]),c.return=p,c)}function h(p,c,m,_,x){return c===null||c.tag!==7?(c=En(m,p.mode,_,x),c.return=p,c):(c=o(c,m),c.return=p,c)}function d(p,c,m){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Vl(""+c,p.mode,m),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case No:return m=di(c.type,c.key,c.props,null,p.mode,m),m.ref=Ar(p,null,c),m.return=p,m;case Bn:return c=jl(c,p.mode,m),c.return=p,c;case Bt:var _=c._init;return d(p,_(c._payload),m)}if(Ir(c)||Sr(c))return c=En(c,p.mode,m,null),c.return=p,c;Uo(p,c)}return null}function g(p,c,m,_){var x=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return x!==null?null:s(p,c,""+m,_);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case No:return m.key===x?a(p,c,m,_):null;case Bn:return m.key===x?u(p,c,m,_):null;case Bt:return x=m._init,g(p,c,x(m._payload),_)}if(Ir(m)||Sr(m))return x!==null?null:h(p,c,m,_,null);Uo(p,m)}return null}function v(p,c,m,_,x){if(typeof _=="string"&&_!==""||typeof _=="number")return p=p.get(m)||null,s(c,p,""+_,x);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case No:return p=p.get(_.key===null?m:_.key)||null,a(c,p,_,x);case Bn:return p=p.get(_.key===null?m:_.key)||null,u(c,p,_,x);case Bt:var C=_._init;return v(p,c,m,C(_._payload),x)}if(Ir(_)||Sr(_))return p=p.get(m)||null,h(c,p,_,x,null);Uo(c,_)}return null}function w(p,c,m,_){for(var x=null,C=null,E=c,z=c=0,j=null;E!==null&&z<m.length;z++){E.index>z?(j=E,E=null):j=E.sibling;var R=g(p,E,m[z],_);if(R===null){E===null&&(E=j);break}e&&E&&R.alternate===null&&t(p,E),c=i(R,c,z),C===null?x=R:C.sibling=R,C=R,E=j}if(z===m.length)return n(p,E),Z&&mn(p,z),x;if(E===null){for(;z<m.length;z++)E=d(p,m[z],_),E!==null&&(c=i(E,c,z),C===null?x=E:C.sibling=E,C=E);return Z&&mn(p,z),x}for(E=r(p,E);z<m.length;z++)j=v(E,p,z,m[z],_),j!==null&&(e&&j.alternate!==null&&E.delete(j.key===null?z:j.key),c=i(j,c,z),C===null?x=j:C.sibling=j,C=j);return e&&E.forEach(function(le){return t(p,le)}),Z&&mn(p,z),x}function b(p,c,m,_){var x=Sr(m);if(typeof x!="function")throw Error(k(150));if(m=x.call(m),m==null)throw Error(k(151));for(var C=x=null,E=c,z=c=0,j=null,R=m.next();E!==null&&!R.done;z++,R=m.next()){E.index>z?(j=E,E=null):j=E.sibling;var le=g(p,E,R.value,_);if(le===null){E===null&&(E=j);break}e&&E&&le.alternate===null&&t(p,E),c=i(le,c,z),C===null?x=le:C.sibling=le,C=le,E=j}if(R.done)return n(p,E),Z&&mn(p,z),x;if(E===null){for(;!R.done;z++,R=m.next())R=d(p,R.value,_),R!==null&&(c=i(R,c,z),C===null?x=R:C.sibling=R,C=R);return Z&&mn(p,z),x}for(E=r(p,E);!R.done;z++,R=m.next())R=v(E,p,z,R.value,_),R!==null&&(e&&R.alternate!==null&&E.delete(R.key===null?z:R.key),c=i(R,c,z),C===null?x=R:C.sibling=R,C=R);return e&&E.forEach(function($){return t(p,$)}),Z&&mn(p,z),x}function T(p,c,m,_){if(typeof m=="object"&&m!==null&&m.type===Vn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case No:e:{for(var x=m.key,C=c;C!==null;){if(C.key===x){if(x=m.type,x===Vn){if(C.tag===7){n(p,C.sibling),c=o(C,m.props.children),c.return=p,p=c;break e}}else if(C.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Bt&&ec(x)===C.type){n(p,C.sibling),c=o(C,m.props),c.ref=Ar(p,C,m),c.return=p,p=c;break e}n(p,C);break}else t(p,C);C=C.sibling}m.type===Vn?(c=En(m.props.children,p.mode,_,m.key),c.return=p,p=c):(_=di(m.type,m.key,m.props,null,p.mode,_),_.ref=Ar(p,c,m),_.return=p,p=_)}return l(p);case Bn:e:{for(C=m.key;c!==null;){if(c.key===C)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){n(p,c.sibling),c=o(c,m.children||[]),c.return=p,p=c;break e}else{n(p,c);break}else t(p,c);c=c.sibling}c=jl(m,p.mode,_),c.return=p,p=c}return l(p);case Bt:return C=m._init,T(p,c,C(m._payload),_)}if(Ir(m))return w(p,c,m,_);if(Sr(m))return b(p,c,m,_);Uo(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,c!==null&&c.tag===6?(n(p,c.sibling),c=o(c,m),c.return=p,p=c):(n(p,c),c=Vl(m,p.mode,_),c.return=p,p=c),l(p)):n(p,c)}return T}var cr=wh(!0),bh=wh(!1),Co={},_t=dn(Co),uo=dn(Co),co=dn(Co);function xn(e){if(e===Co)throw Error(k(174));return e}function Ra(e,t){switch(K(co,t),K(uo,e),K(_t,Co),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:fs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=fs(t,e)}Y(_t),K(_t,t)}function dr(){Y(_t),Y(uo),Y(co)}function _h(e){xn(co.current);var t=xn(_t.current),n=fs(t,e.type);t!==n&&(K(uo,e),K(_t,n))}function Ma(e){uo.current===e&&(Y(_t),Y(uo))}var J=dn(0);function Li(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ml=[];function Oa(){for(var e=0;e<Ml.length;e++)Ml[e]._workInProgressVersionPrimary=null;Ml.length=0}var li=Mt.ReactCurrentDispatcher,Ol=Mt.ReactCurrentBatchConfig,An=0,ee=null,ue=null,he=null,Ni=!1,Qr=!1,ho=0,Ig=0;function be(){throw Error(k(321))}function Da(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!gt(e[n],t[n]))return!1;return!0}function Fa(e,t,n,r,o,i){if(An=i,ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,li.current=e===null||e.memoizedState===null?Hg:Ug,e=n(r,o),Qr){i=0;do{if(Qr=!1,ho=0,25<=i)throw Error(k(301));i+=1,he=ue=null,t.updateQueue=null,li.current=Wg,e=n(r,o)}while(Qr)}if(li.current=Ri,t=ue!==null&&ue.next!==null,An=0,he=ue=ee=null,Ni=!1,t)throw Error(k(300));return e}function Ia(){var e=ho!==0;return ho=0,e}function yt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return he===null?ee.memoizedState=he=e:he=he.next=e,he}function lt(){if(ue===null){var e=ee.alternate;e=e!==null?e.memoizedState:null}else e=ue.next;var t=he===null?ee.memoizedState:he.next;if(t!==null)he=t,ue=e;else{if(e===null)throw Error(k(310));ue=e,e={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},he===null?ee.memoizedState=he=e:he=he.next=e}return he}function po(e,t){return typeof t=="function"?t(e):t}function Dl(e){var t=lt(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=ue,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=l=null,a=null,u=i;do{var h=u.lane;if((An&h)===h)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(s=a=d,l=r):a=a.next=d,ee.lanes|=h,Pn|=h}u=u.next}while(u!==null&&u!==i);a===null?l=r:a.next=s,gt(r,t.memoizedState)||(Re=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,ee.lanes|=i,Pn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Fl(e){var t=lt(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);gt(i,t.memoizedState)||(Re=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function xh(){}function kh(e,t){var n=ee,r=lt(),o=t(),i=!gt(r.memoizedState,o);if(i&&(r.memoizedState=o,Re=!0),r=r.queue,Ba(Eh.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||he!==null&&he.memoizedState.tag&1){if(n.flags|=2048,fo(9,Ch.bind(null,n,r,o,t),void 0,null),pe===null)throw Error(k(349));An&30||Sh(n,t,o)}return o}function Sh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ee.updateQueue,t===null?(t={lastEffect:null,stores:null},ee.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ch(e,t,n,r){t.value=n,t.getSnapshot=r,$h(t)&&zh(e)}function Eh(e,t,n){return n(function(){$h(t)&&zh(e)})}function $h(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!gt(e,n)}catch{return!0}}function zh(e){var t=Lt(e,1);t!==null&&ft(t,e,1,-1)}function tc(e){var t=yt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:po,lastRenderedState:e},t.queue=e,e=e.dispatch=jg.bind(null,ee,e),[t.memoizedState,e]}function fo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ee.updateQueue,t===null?(t={lastEffect:null,stores:null},ee.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ah(){return lt().memoizedState}function si(e,t,n,r){var o=yt();ee.flags|=e,o.memoizedState=fo(1|t,n,void 0,r===void 0?null:r)}function nl(e,t,n,r){var o=lt();r=r===void 0?null:r;var i=void 0;if(ue!==null){var l=ue.memoizedState;if(i=l.destroy,r!==null&&Da(r,l.deps)){o.memoizedState=fo(t,n,i,r);return}}ee.flags|=e,o.memoizedState=fo(1|t,n,i,r)}function nc(e,t){return si(8390656,8,e,t)}function Ba(e,t){return nl(2048,8,e,t)}function Ph(e,t){return nl(4,2,e,t)}function Th(e,t){return nl(4,4,e,t)}function Lh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Nh(e,t,n){return n=n!=null?n.concat([e]):null,nl(4,4,Lh.bind(null,t,e),n)}function Va(){}function Rh(e,t){var n=lt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Da(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Mh(e,t){var n=lt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Da(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Oh(e,t,n){return An&21?(gt(n,t)||(n=Id(),ee.lanes|=n,Pn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Re=!0),e.memoizedState=n)}function Bg(e,t){var n=U;U=n!==0&&4>n?n:4,e(!0);var r=Ol.transition;Ol.transition={};try{e(!1),t()}finally{U=n,Ol.transition=r}}function Dh(){return lt().memoizedState}function Vg(e,t,n){var r=tn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Fh(e))Ih(t,n);else if(n=gh(e,t,n,r),n!==null){var o=Ee();ft(n,e,r,o),Bh(n,t,r)}}function jg(e,t,n){var r=tn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Fh(e))Ih(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,n);if(o.hasEagerState=!0,o.eagerState=s,gt(s,l)){var a=t.interleaved;a===null?(o.next=o,La(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=gh(e,t,o,r),n!==null&&(o=Ee(),ft(n,e,r,o),Bh(n,t,r))}}function Fh(e){var t=e.alternate;return e===ee||t!==null&&t===ee}function Ih(e,t){Qr=Ni=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Bh(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ya(e,n)}}var Ri={readContext:it,useCallback:be,useContext:be,useEffect:be,useImperativeHandle:be,useInsertionEffect:be,useLayoutEffect:be,useMemo:be,useReducer:be,useRef:be,useState:be,useDebugValue:be,useDeferredValue:be,useTransition:be,useMutableSource:be,useSyncExternalStore:be,useId:be,unstable_isNewReconciler:!1},Hg={readContext:it,useCallback:function(e,t){return yt().memoizedState=[e,t===void 0?null:t],e},useContext:it,useEffect:nc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,si(4194308,4,Lh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return si(4194308,4,e,t)},useInsertionEffect:function(e,t){return si(4,2,e,t)},useMemo:function(e,t){var n=yt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=yt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Vg.bind(null,ee,e),[r.memoizedState,e]},useRef:function(e){var t=yt();return e={current:e},t.memoizedState=e},useState:tc,useDebugValue:Va,useDeferredValue:function(e){return yt().memoizedState=e},useTransition:function(){var e=tc(!1),t=e[0];return e=Bg.bind(null,e[1]),yt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ee,o=yt();if(Z){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),pe===null)throw Error(k(349));An&30||Sh(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,nc(Eh.bind(null,r,i,e),[e]),r.flags|=2048,fo(9,Ch.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=yt(),t=pe.identifierPrefix;if(Z){var n=zt,r=$t;n=(r&~(1<<32-pt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ho++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Ig++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ug={readContext:it,useCallback:Rh,useContext:it,useEffect:Ba,useImperativeHandle:Nh,useInsertionEffect:Ph,useLayoutEffect:Th,useMemo:Mh,useReducer:Dl,useRef:Ah,useState:function(){return Dl(po)},useDebugValue:Va,useDeferredValue:function(e){var t=lt();return Oh(t,ue.memoizedState,e)},useTransition:function(){var e=Dl(po)[0],t=lt().memoizedState;return[e,t]},useMutableSource:xh,useSyncExternalStore:kh,useId:Dh,unstable_isNewReconciler:!1},Wg={readContext:it,useCallback:Rh,useContext:it,useEffect:Ba,useImperativeHandle:Nh,useInsertionEffect:Ph,useLayoutEffect:Th,useMemo:Mh,useReducer:Fl,useRef:Ah,useState:function(){return Fl(po)},useDebugValue:Va,useDeferredValue:function(e){var t=lt();return ue===null?t.memoizedState=e:Oh(t,ue.memoizedState,e)},useTransition:function(){var e=Fl(po)[0],t=lt().memoizedState;return[e,t]},useMutableSource:xh,useSyncExternalStore:kh,useId:Dh,unstable_isNewReconciler:!1};function hr(e,t){try{var n="",r=t;do n+=wf(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Il(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ds(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Kg=typeof WeakMap=="function"?WeakMap:Map;function Vh(e,t,n){n=At(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Oi||(Oi=!0,Qs=r),Ds(e,t)},n}function jh(e,t,n){n=At(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Ds(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ds(e,t),typeof r!="function"&&(en===null?en=new Set([this]):en.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function rc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Kg;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=lm.bind(null,e,t,n),t.then(e,e))}function oc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ic(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=At(-1,1),t.tag=2,Jt(n,t,1))),n.lanes|=1),e)}var Qg=Mt.ReactCurrentOwner,Re=!1;function Ce(e,t,n,r){t.child=e===null?bh(t,null,n,r):cr(t,e.child,n,r)}function lc(e,t,n,r,o){n=n.render;var i=t.ref;return or(t,o),r=Fa(e,t,n,r,i,o),n=Ia(),e!==null&&!Re?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Nt(e,t,o)):(Z&&n&&Ea(t),t.flags|=1,Ce(e,t,r,o),t.child)}function sc(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Ya(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Hh(e,t,i,r,o)):(e=di(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:io,n(l,r)&&e.ref===t.ref)return Nt(e,t,o)}return t.flags|=1,e=nn(i,r),e.ref=t.ref,e.return=t,t.child=e}function Hh(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(io(i,r)&&e.ref===t.ref)if(Re=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Re=!0);else return t.lanes=e.lanes,Nt(e,t,o)}return Fs(e,t,n,r,o)}function Uh(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},K(Xn,He),He|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,K(Xn,He),He|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,K(Xn,He),He|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,K(Xn,He),He|=r;return Ce(e,t,o,n),t.child}function Wh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Fs(e,t,n,r,o){var i=Oe(n)?$n:ke.current;return i=ar(t,i),or(t,o),n=Fa(e,t,n,r,i,o),r=Ia(),e!==null&&!Re?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Nt(e,t,o)):(Z&&r&&Ea(t),t.flags|=1,Ce(e,t,n,o),t.child)}function ac(e,t,n,r,o){if(Oe(n)){var i=!0;Ei(t)}else i=!1;if(or(t,o),t.stateNode===null)ai(e,t),yh(t,n,r),Os(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var a=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=it(u):(u=Oe(n)?$n:ke.current,u=ar(t,u));var h=n.getDerivedStateFromProps,d=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";d||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||a!==u)&&Ju(t,l,r,u),Vt=!1;var g=t.memoizedState;l.state=g,Ti(t,r,l,o),a=t.memoizedState,s!==r||g!==a||Me.current||Vt?(typeof h=="function"&&(Ms(t,n,h,r),a=t.memoizedState),(s=Vt||Zu(t,n,s,r,g,a,u))?(d||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),l.props=r,l.state=a,l.context=u,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,mh(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:ct(t.type,s),l.props=u,d=t.pendingProps,g=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=it(a):(a=Oe(n)?$n:ke.current,a=ar(t,a));var v=n.getDerivedStateFromProps;(h=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==d||g!==a)&&Ju(t,l,r,a),Vt=!1,g=t.memoizedState,l.state=g,Ti(t,r,l,o);var w=t.memoizedState;s!==d||g!==w||Me.current||Vt?(typeof v=="function"&&(Ms(t,n,v,r),w=t.memoizedState),(u=Vt||Zu(t,n,u,r,g,w,a)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,w,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,w,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),l.props=r,l.state=w,l.context=a,r=u):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Is(e,t,n,r,i,o)}function Is(e,t,n,r,o,i){Wh(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&Qu(t,n,!1),Nt(e,t,i);r=t.stateNode,Qg.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=cr(t,e.child,null,i),t.child=cr(t,null,s,i)):Ce(e,t,s,i),t.memoizedState=r.state,o&&Qu(t,n,!0),t.child}function Kh(e){var t=e.stateNode;t.pendingContext?Ku(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ku(e,t.context,!1),Ra(e,t.containerInfo)}function uc(e,t,n,r,o){return ur(),za(o),t.flags|=256,Ce(e,t,n,r),t.child}var Bs={dehydrated:null,treeContext:null,retryLane:0};function Vs(e){return{baseLanes:e,cachePool:null,transitions:null}}function Qh(e,t,n){var r=t.pendingProps,o=J.current,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),K(J,o&1),e===null)return Ns(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=il(l,r,0,null),e=En(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Vs(n),t.memoizedState=Bs,e):ja(t,l));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return Gg(e,t,l,r,s,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,s=o.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=nn(o,a),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=nn(s,i):(i=En(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Vs(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Bs,r}return i=e.child,e=i.sibling,r=nn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ja(e,t){return t=il({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Wo(e,t,n,r){return r!==null&&za(r),cr(t,e.child,null,n),e=ja(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Gg(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=Il(Error(k(422))),Wo(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=il({mode:"visible",children:r.children},o,0,null),i=En(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&cr(t,e.child,null,l),t.child.memoizedState=Vs(l),t.memoizedState=Bs,i);if(!(t.mode&1))return Wo(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(k(419)),r=Il(i,r,void 0),Wo(e,t,l,r)}if(s=(l&e.childLanes)!==0,Re||s){if(r=pe,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Lt(e,o),ft(r,e,o,-1))}return Ga(),r=Il(Error(k(421))),Wo(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=sm.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Ke=Zt(o.nextSibling),Qe=t,Z=!0,ht=null,e!==null&&(et[tt++]=$t,et[tt++]=zt,et[tt++]=zn,$t=e.id,zt=e.overflow,zn=t),t=ja(t,r.children),t.flags|=4096,t)}function cc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Rs(e.return,t,n)}function Bl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Gh(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Ce(e,t,r.children,n),r=J.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&cc(e,n,t);else if(e.tag===19)cc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(K(J,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Li(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Bl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Li(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Bl(t,!0,n,null,i);break;case"together":Bl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ai(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Nt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Pn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=nn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=nn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Yg(e,t,n){switch(t.tag){case 3:Kh(t),ur();break;case 5:_h(t);break;case 1:Oe(t.type)&&Ei(t);break;case 4:Ra(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;K(Ai,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(K(J,J.current&1),t.flags|=128,null):n&t.child.childLanes?Qh(e,t,n):(K(J,J.current&1),e=Nt(e,t,n),e!==null?e.sibling:null);K(J,J.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Gh(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),K(J,J.current),r)break;return null;case 22:case 23:return t.lanes=0,Uh(e,t,n)}return Nt(e,t,n)}var Yh,js,qh,Xh;Yh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};js=function(){};qh=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,xn(_t.current);var i=null;switch(n){case"input":o=cs(e,o),r=cs(e,r),i=[];break;case"select":o=te({},o,{value:void 0}),r=te({},r,{value:void 0}),i=[];break;case"textarea":o=ps(e,o),r=ps(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Si)}gs(n,r);var l;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var s=o[u];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Zr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var a=r[u];if(s=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&a!==s&&(a!=null||s!=null))if(u==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(i||(i=[]),i.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(i=i||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Zr.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&Q("scroll",e),i||s===a||(i=[])):(i=i||[]).push(u,a))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Xh=function(e,t,n,r){n!==r&&(t.flags|=4)};function Pr(e,t){if(!Z)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function _e(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function qg(e,t,n){var r=t.pendingProps;switch($a(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _e(t),null;case 1:return Oe(t.type)&&Ci(),_e(t),null;case 3:return r=t.stateNode,dr(),Y(Me),Y(ke),Oa(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ho(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ht!==null&&(qs(ht),ht=null))),js(e,t),_e(t),null;case 5:Ma(t);var o=xn(co.current);if(n=t.type,e!==null&&t.stateNode!=null)qh(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return _e(t),null}if(e=xn(_t.current),Ho(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[wt]=t,r[ao]=i,e=(t.mode&1)!==0,n){case"dialog":Q("cancel",r),Q("close",r);break;case"iframe":case"object":case"embed":Q("load",r);break;case"video":case"audio":for(o=0;o<Vr.length;o++)Q(Vr[o],r);break;case"source":Q("error",r);break;case"img":case"image":case"link":Q("error",r),Q("load",r);break;case"details":Q("toggle",r);break;case"input":wu(r,i),Q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Q("invalid",r);break;case"textarea":_u(r,i),Q("invalid",r)}gs(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&jo(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&jo(r.textContent,s,e),o=["children",""+s]):Zr.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&Q("scroll",r)}switch(n){case"input":Ro(r),bu(r,i,!0);break;case"textarea":Ro(r),xu(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Si)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Sd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[wt]=t,e[ao]=r,Yh(e,t,!1,!1),t.stateNode=e;e:{switch(l=ms(n,r),n){case"dialog":Q("cancel",e),Q("close",e),o=r;break;case"iframe":case"object":case"embed":Q("load",e),o=r;break;case"video":case"audio":for(o=0;o<Vr.length;o++)Q(Vr[o],e);o=r;break;case"source":Q("error",e),o=r;break;case"img":case"image":case"link":Q("error",e),Q("load",e),o=r;break;case"details":Q("toggle",e),o=r;break;case"input":wu(e,r),o=cs(e,r),Q("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=te({},r,{value:void 0}),Q("invalid",e);break;case"textarea":_u(e,r),o=ps(e,r),Q("invalid",e);break;default:o=r}gs(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var a=s[i];i==="style"?$d(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Cd(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Jr(e,a):typeof a=="number"&&Jr(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Zr.hasOwnProperty(i)?a!=null&&i==="onScroll"&&Q("scroll",e):a!=null&&ha(e,i,a,l))}switch(n){case"input":Ro(e),bu(e,r,!1);break;case"textarea":Ro(e),xu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+rn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?er(e,!!r.multiple,i,!1):r.defaultValue!=null&&er(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Si)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return _e(t),null;case 6:if(e&&t.stateNode!=null)Xh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=xn(co.current),xn(_t.current),Ho(t)){if(r=t.stateNode,n=t.memoizedProps,r[wt]=t,(i=r.nodeValue!==n)&&(e=Qe,e!==null))switch(e.tag){case 3:jo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&jo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[wt]=t,t.stateNode=r}return _e(t),null;case 13:if(Y(J),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Z&&Ke!==null&&t.mode&1&&!(t.flags&128))fh(),ur(),t.flags|=98560,i=!1;else if(i=Ho(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(k(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(k(317));i[wt]=t}else ur(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;_e(t),i=!1}else ht!==null&&(qs(ht),ht=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||J.current&1?ce===0&&(ce=3):Ga())),t.updateQueue!==null&&(t.flags|=4),_e(t),null);case 4:return dr(),js(e,t),e===null&&lo(t.stateNode.containerInfo),_e(t),null;case 10:return Ta(t.type._context),_e(t),null;case 17:return Oe(t.type)&&Ci(),_e(t),null;case 19:if(Y(J),i=t.memoizedState,i===null)return _e(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)Pr(i,!1);else{if(ce!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Li(e),l!==null){for(t.flags|=128,Pr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return K(J,J.current&1|2),t.child}e=e.sibling}i.tail!==null&&ie()>pr&&(t.flags|=128,r=!0,Pr(i,!1),t.lanes=4194304)}else{if(!r)if(e=Li(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Pr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!Z)return _e(t),null}else 2*ie()-i.renderingStartTime>pr&&n!==1073741824&&(t.flags|=128,r=!0,Pr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ie(),t.sibling=null,n=J.current,K(J,r?n&1|2:n&1),t):(_e(t),null);case 22:case 23:return Qa(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?He&1073741824&&(_e(t),t.subtreeFlags&6&&(t.flags|=8192)):_e(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function Xg(e,t){switch($a(t),t.tag){case 1:return Oe(t.type)&&Ci(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return dr(),Y(Me),Y(ke),Oa(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ma(t),null;case 13:if(Y(J),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));ur()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Y(J),null;case 4:return dr(),null;case 10:return Ta(t.type._context),null;case 22:case 23:return Qa(),null;case 24:return null;default:return null}}var Ko=!1,xe=!1,Zg=typeof WeakSet=="function"?WeakSet:Set,P=null;function qn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ne(e,t,r)}else n.current=null}function Hs(e,t,n){try{n()}catch(r){ne(e,t,r)}}var dc=!1;function Jg(e,t){if(Es=_i,e=th(),Ca(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,s=-1,a=-1,u=0,h=0,d=e,g=null;t:for(;;){for(var v;d!==n||o!==0&&d.nodeType!==3||(s=l+o),d!==i||r!==0&&d.nodeType!==3||(a=l+r),d.nodeType===3&&(l+=d.nodeValue.length),(v=d.firstChild)!==null;)g=d,d=v;for(;;){if(d===e)break t;if(g===n&&++u===o&&(s=l),g===i&&++h===r&&(a=l),(v=d.nextSibling)!==null)break;d=g,g=d.parentNode}d=v}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for($s={focusedElem:e,selectionRange:n},_i=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var b=w.memoizedProps,T=w.memoizedState,p=t.stateNode,c=p.getSnapshotBeforeUpdate(t.elementType===t.type?b:ct(t.type,b),T);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(_){ne(t,t.return,_)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return w=dc,dc=!1,w}function Gr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Hs(t,n,i)}o=o.next}while(o!==r)}}function rl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Us(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Zh(e){var t=e.alternate;t!==null&&(e.alternate=null,Zh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[wt],delete t[ao],delete t[Ps],delete t[Mg],delete t[Og])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Jh(e){return e.tag===5||e.tag===3||e.tag===4}function hc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Jh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ws(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Si));else if(r!==4&&(e=e.child,e!==null))for(Ws(e,t,n),e=e.sibling;e!==null;)Ws(e,t,n),e=e.sibling}function Ks(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ks(e,t,n),e=e.sibling;e!==null;)Ks(e,t,n),e=e.sibling}var ge=null,dt=!1;function Ft(e,t,n){for(n=n.child;n!==null;)ep(e,t,n),n=n.sibling}function ep(e,t,n){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(Yi,n)}catch{}switch(n.tag){case 5:xe||qn(n,t);case 6:var r=ge,o=dt;ge=null,Ft(e,t,n),ge=r,dt=o,ge!==null&&(dt?(e=ge,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ge.removeChild(n.stateNode));break;case 18:ge!==null&&(dt?(e=ge,n=n.stateNode,e.nodeType===8?Nl(e.parentNode,n):e.nodeType===1&&Nl(e,n),ro(e)):Nl(ge,n.stateNode));break;case 4:r=ge,o=dt,ge=n.stateNode.containerInfo,dt=!0,Ft(e,t,n),ge=r,dt=o;break;case 0:case 11:case 14:case 15:if(!xe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Hs(n,t,l),o=o.next}while(o!==r)}Ft(e,t,n);break;case 1:if(!xe&&(qn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ne(n,t,s)}Ft(e,t,n);break;case 21:Ft(e,t,n);break;case 22:n.mode&1?(xe=(r=xe)||n.memoizedState!==null,Ft(e,t,n),xe=r):Ft(e,t,n);break;default:Ft(e,t,n)}}function pc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Zg),t.forEach(function(r){var o=am.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function at(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:ge=s.stateNode,dt=!1;break e;case 3:ge=s.stateNode.containerInfo,dt=!0;break e;case 4:ge=s.stateNode.containerInfo,dt=!0;break e}s=s.return}if(ge===null)throw Error(k(160));ep(i,l,o),ge=null,dt=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(u){ne(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)tp(t,e),t=t.sibling}function tp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(at(t,e),vt(e),r&4){try{Gr(3,e,e.return),rl(3,e)}catch(b){ne(e,e.return,b)}try{Gr(5,e,e.return)}catch(b){ne(e,e.return,b)}}break;case 1:at(t,e),vt(e),r&512&&n!==null&&qn(n,n.return);break;case 5:if(at(t,e),vt(e),r&512&&n!==null&&qn(n,n.return),e.flags&32){var o=e.stateNode;try{Jr(o,"")}catch(b){ne(e,e.return,b)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&xd(o,i),ms(s,l);var u=ms(s,i);for(l=0;l<a.length;l+=2){var h=a[l],d=a[l+1];h==="style"?$d(o,d):h==="dangerouslySetInnerHTML"?Cd(o,d):h==="children"?Jr(o,d):ha(o,h,d,u)}switch(s){case"input":ds(o,i);break;case"textarea":kd(o,i);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?er(o,!!i.multiple,v,!1):g!==!!i.multiple&&(i.defaultValue!=null?er(o,!!i.multiple,i.defaultValue,!0):er(o,!!i.multiple,i.multiple?[]:"",!1))}o[ao]=i}catch(b){ne(e,e.return,b)}}break;case 6:if(at(t,e),vt(e),r&4){if(e.stateNode===null)throw Error(k(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(b){ne(e,e.return,b)}}break;case 3:if(at(t,e),vt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ro(t.containerInfo)}catch(b){ne(e,e.return,b)}break;case 4:at(t,e),vt(e);break;case 13:at(t,e),vt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Wa=ie())),r&4&&pc(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(xe=(u=xe)||h,at(t,e),xe=u):at(t,e),vt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!h&&e.mode&1)for(P=e,h=e.child;h!==null;){for(d=P=h;P!==null;){switch(g=P,v=g.child,g.tag){case 0:case 11:case 14:case 15:Gr(4,g,g.return);break;case 1:qn(g,g.return);var w=g.stateNode;if(typeof w.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(b){ne(r,n,b)}}break;case 5:qn(g,g.return);break;case 22:if(g.memoizedState!==null){gc(d);continue}}v!==null?(v.return=g,P=v):gc(d)}h=h.sibling}e:for(h=null,d=e;;){if(d.tag===5){if(h===null){h=d;try{o=d.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=d.stateNode,a=d.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Ed("display",l))}catch(b){ne(e,e.return,b)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(b){ne(e,e.return,b)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:at(t,e),vt(e),r&4&&pc(e);break;case 21:break;default:at(t,e),vt(e)}}function vt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Jh(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Jr(o,""),r.flags&=-33);var i=hc(e);Ks(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,s=hc(e);Ws(e,s,l);break;default:throw Error(k(161))}}catch(a){ne(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function em(e,t,n){P=e,np(e)}function np(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var o=P,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||Ko;if(!l){var s=o.alternate,a=s!==null&&s.memoizedState!==null||xe;s=Ko;var u=xe;if(Ko=l,(xe=a)&&!u)for(P=o;P!==null;)l=P,a=l.child,l.tag===22&&l.memoizedState!==null?mc(o):a!==null?(a.return=l,P=a):mc(o);for(;i!==null;)P=i,np(i),i=i.sibling;P=o,Ko=s,xe=u}fc(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,P=i):fc(e)}}function fc(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:xe||rl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!xe)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:ct(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Xu(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Xu(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&ro(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}xe||t.flags&512&&Us(t)}catch(g){ne(t,t.return,g)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function gc(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function mc(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rl(4,t)}catch(a){ne(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){ne(t,o,a)}}var i=t.return;try{Us(t)}catch(a){ne(t,i,a)}break;case 5:var l=t.return;try{Us(t)}catch(a){ne(t,l,a)}}}catch(a){ne(t,t.return,a)}if(t===e){P=null;break}var s=t.sibling;if(s!==null){s.return=t.return,P=s;break}P=t.return}}var tm=Math.ceil,Mi=Mt.ReactCurrentDispatcher,Ha=Mt.ReactCurrentOwner,ot=Mt.ReactCurrentBatchConfig,V=0,pe=null,ae=null,me=0,He=0,Xn=dn(0),ce=0,go=null,Pn=0,ol=0,Ua=0,Yr=null,Ne=null,Wa=0,pr=1/0,St=null,Oi=!1,Qs=null,en=null,Qo=!1,Qt=null,Di=0,qr=0,Gs=null,ui=-1,ci=0;function Ee(){return V&6?ie():ui!==-1?ui:ui=ie()}function tn(e){return e.mode&1?V&2&&me!==0?me&-me:Fg.transition!==null?(ci===0&&(ci=Id()),ci):(e=U,e!==0||(e=window.event,e=e===void 0?16:Kd(e.type)),e):1}function ft(e,t,n,r){if(50<qr)throw qr=0,Gs=null,Error(k(185));xo(e,n,r),(!(V&2)||e!==pe)&&(e===pe&&(!(V&2)&&(ol|=n),ce===4&&Ut(e,me)),De(e,r),n===1&&V===0&&!(t.mode&1)&&(pr=ie()+500,el&&hn()))}function De(e,t){var n=e.callbackNode;Ff(e,t);var r=bi(e,e===pe?me:0);if(r===0)n!==null&&Cu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Cu(n),t===1)e.tag===0?Dg(vc.bind(null,e)):dh(vc.bind(null,e)),Ng(function(){!(V&6)&&hn()}),n=null;else{switch(Bd(r)){case 1:n=va;break;case 4:n=Dd;break;case 16:n=wi;break;case 536870912:n=Fd;break;default:n=wi}n=cp(n,rp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function rp(e,t){if(ui=-1,ci=0,V&6)throw Error(k(327));var n=e.callbackNode;if(ir()&&e.callbackNode!==n)return null;var r=bi(e,e===pe?me:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Fi(e,r);else{t=r;var o=V;V|=2;var i=ip();(pe!==e||me!==t)&&(St=null,pr=ie()+500,Cn(e,t));do try{om();break}catch(s){op(e,s)}while(1);Pa(),Mi.current=i,V=o,ae!==null?t=0:(pe=null,me=0,t=ce)}if(t!==0){if(t===2&&(o=_s(e),o!==0&&(r=o,t=Ys(e,o))),t===1)throw n=go,Cn(e,0),Ut(e,r),De(e,ie()),n;if(t===6)Ut(e,r);else{if(o=e.current.alternate,!(r&30)&&!nm(o)&&(t=Fi(e,r),t===2&&(i=_s(e),i!==0&&(r=i,t=Ys(e,i))),t===1))throw n=go,Cn(e,0),Ut(e,r),De(e,ie()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:vn(e,Ne,St);break;case 3:if(Ut(e,r),(r&130023424)===r&&(t=Wa+500-ie(),10<t)){if(bi(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ee(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=As(vn.bind(null,e,Ne,St),t);break}vn(e,Ne,St);break;case 4:if(Ut(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-pt(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*tm(r/1960))-r,10<r){e.timeoutHandle=As(vn.bind(null,e,Ne,St),r);break}vn(e,Ne,St);break;case 5:vn(e,Ne,St);break;default:throw Error(k(329))}}}return De(e,ie()),e.callbackNode===n?rp.bind(null,e):null}function Ys(e,t){var n=Yr;return e.current.memoizedState.isDehydrated&&(Cn(e,t).flags|=256),e=Fi(e,t),e!==2&&(t=Ne,Ne=n,t!==null&&qs(t)),e}function qs(e){Ne===null?Ne=e:Ne.push.apply(Ne,e)}function nm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!gt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ut(e,t){for(t&=~Ua,t&=~ol,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-pt(t),r=1<<n;e[n]=-1,t&=~r}}function vc(e){if(V&6)throw Error(k(327));ir();var t=bi(e,0);if(!(t&1))return De(e,ie()),null;var n=Fi(e,t);if(e.tag!==0&&n===2){var r=_s(e);r!==0&&(t=r,n=Ys(e,r))}if(n===1)throw n=go,Cn(e,0),Ut(e,t),De(e,ie()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,vn(e,Ne,St),De(e,ie()),null}function Ka(e,t){var n=V;V|=1;try{return e(t)}finally{V=n,V===0&&(pr=ie()+500,el&&hn())}}function Tn(e){Qt!==null&&Qt.tag===0&&!(V&6)&&ir();var t=V;V|=1;var n=ot.transition,r=U;try{if(ot.transition=null,U=1,e)return e()}finally{U=r,ot.transition=n,V=t,!(V&6)&&hn()}}function Qa(){He=Xn.current,Y(Xn)}function Cn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Lg(n)),ae!==null)for(n=ae.return;n!==null;){var r=n;switch($a(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ci();break;case 3:dr(),Y(Me),Y(ke),Oa();break;case 5:Ma(r);break;case 4:dr();break;case 13:Y(J);break;case 19:Y(J);break;case 10:Ta(r.type._context);break;case 22:case 23:Qa()}n=n.return}if(pe=e,ae=e=nn(e.current,null),me=He=t,ce=0,go=null,Ua=ol=Pn=0,Ne=Yr=null,_n!==null){for(t=0;t<_n.length;t++)if(n=_n[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}_n=null}return e}function op(e,t){do{var n=ae;try{if(Pa(),li.current=Ri,Ni){for(var r=ee.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Ni=!1}if(An=0,he=ue=ee=null,Qr=!1,ho=0,Ha.current=null,n===null||n.return===null){ce=1,go=t,ae=null;break}e:{var i=e,l=n.return,s=n,a=t;if(t=me,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,h=s,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var v=oc(l);if(v!==null){v.flags&=-257,ic(v,l,s,i,t),v.mode&1&&rc(i,u,t),t=v,a=u;var w=t.updateQueue;if(w===null){var b=new Set;b.add(a),t.updateQueue=b}else w.add(a);break e}else{if(!(t&1)){rc(i,u,t),Ga();break e}a=Error(k(426))}}else if(Z&&s.mode&1){var T=oc(l);if(T!==null){!(T.flags&65536)&&(T.flags|=256),ic(T,l,s,i,t),za(hr(a,s));break e}}i=a=hr(a,s),ce!==4&&(ce=2),Yr===null?Yr=[i]:Yr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var p=Vh(i,a,t);qu(i,p);break e;case 1:s=a;var c=i.type,m=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(en===null||!en.has(m)))){i.flags|=65536,t&=-t,i.lanes|=t;var _=jh(i,s,t);qu(i,_);break e}}i=i.return}while(i!==null)}sp(n)}catch(x){t=x,ae===n&&n!==null&&(ae=n=n.return);continue}break}while(1)}function ip(){var e=Mi.current;return Mi.current=Ri,e===null?Ri:e}function Ga(){(ce===0||ce===3||ce===2)&&(ce=4),pe===null||!(Pn&268435455)&&!(ol&268435455)||Ut(pe,me)}function Fi(e,t){var n=V;V|=2;var r=ip();(pe!==e||me!==t)&&(St=null,Cn(e,t));do try{rm();break}catch(o){op(e,o)}while(1);if(Pa(),V=n,Mi.current=r,ae!==null)throw Error(k(261));return pe=null,me=0,ce}function rm(){for(;ae!==null;)lp(ae)}function om(){for(;ae!==null&&!Af();)lp(ae)}function lp(e){var t=up(e.alternate,e,He);e.memoizedProps=e.pendingProps,t===null?sp(e):ae=t,Ha.current=null}function sp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Xg(n,t),n!==null){n.flags&=32767,ae=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ce=6,ae=null;return}}else if(n=qg(n,t,He),n!==null){ae=n;return}if(t=t.sibling,t!==null){ae=t;return}ae=t=e}while(t!==null);ce===0&&(ce=5)}function vn(e,t,n){var r=U,o=ot.transition;try{ot.transition=null,U=1,im(e,t,n,r)}finally{ot.transition=o,U=r}return null}function im(e,t,n,r){do ir();while(Qt!==null);if(V&6)throw Error(k(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(If(e,i),e===pe&&(ae=pe=null,me=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Qo||(Qo=!0,cp(wi,function(){return ir(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=ot.transition,ot.transition=null;var l=U;U=1;var s=V;V|=4,Ha.current=null,Jg(e,n),tp(n,e),Cg($s),_i=!!Es,$s=Es=null,e.current=n,em(n),Pf(),V=s,U=l,ot.transition=i}else e.current=n;if(Qo&&(Qo=!1,Qt=e,Di=o),i=e.pendingLanes,i===0&&(en=null),Nf(n.stateNode),De(e,ie()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Oi)throw Oi=!1,e=Qs,Qs=null,e;return Di&1&&e.tag!==0&&ir(),i=e.pendingLanes,i&1?e===Gs?qr++:(qr=0,Gs=e):qr=0,hn(),null}function ir(){if(Qt!==null){var e=Bd(Di),t=ot.transition,n=U;try{if(ot.transition=null,U=16>e?16:e,Qt===null)var r=!1;else{if(e=Qt,Qt=null,Di=0,V&6)throw Error(k(331));var o=V;for(V|=4,P=e.current;P!==null;){var i=P,l=i.child;if(P.flags&16){var s=i.deletions;if(s!==null){for(var a=0;a<s.length;a++){var u=s[a];for(P=u;P!==null;){var h=P;switch(h.tag){case 0:case 11:case 15:Gr(8,h,i)}var d=h.child;if(d!==null)d.return=h,P=d;else for(;P!==null;){h=P;var g=h.sibling,v=h.return;if(Zh(h),h===u){P=null;break}if(g!==null){g.return=v,P=g;break}P=v}}}var w=i.alternate;if(w!==null){var b=w.child;if(b!==null){w.child=null;do{var T=b.sibling;b.sibling=null,b=T}while(b!==null)}}P=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,P=l;else e:for(;P!==null;){if(i=P,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Gr(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,P=p;break e}P=i.return}}var c=e.current;for(P=c;P!==null;){l=P;var m=l.child;if(l.subtreeFlags&2064&&m!==null)m.return=l,P=m;else e:for(l=c;P!==null;){if(s=P,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:rl(9,s)}}catch(x){ne(s,s.return,x)}if(s===l){P=null;break e}var _=s.sibling;if(_!==null){_.return=s.return,P=_;break e}P=s.return}}if(V=o,hn(),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(Yi,e)}catch{}r=!0}return r}finally{U=n,ot.transition=t}}return!1}function yc(e,t,n){t=hr(n,t),t=Vh(e,t,1),e=Jt(e,t,1),t=Ee(),e!==null&&(xo(e,1,t),De(e,t))}function ne(e,t,n){if(e.tag===3)yc(e,e,n);else for(;t!==null;){if(t.tag===3){yc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(en===null||!en.has(r))){e=hr(n,e),e=jh(t,e,1),t=Jt(t,e,1),e=Ee(),t!==null&&(xo(t,1,e),De(t,e));break}}t=t.return}}function lm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ee(),e.pingedLanes|=e.suspendedLanes&n,pe===e&&(me&n)===n&&(ce===4||ce===3&&(me&130023424)===me&&500>ie()-Wa?Cn(e,0):Ua|=n),De(e,t)}function ap(e,t){t===0&&(e.mode&1?(t=Do,Do<<=1,!(Do&130023424)&&(Do=4194304)):t=1);var n=Ee();e=Lt(e,t),e!==null&&(xo(e,t,n),De(e,n))}function sm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ap(e,n)}function am(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),ap(e,n)}var up;up=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Me.current)Re=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Re=!1,Yg(e,t,n);Re=!!(e.flags&131072)}else Re=!1,Z&&t.flags&1048576&&hh(t,zi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ai(e,t),e=t.pendingProps;var o=ar(t,ke.current);or(t,n),o=Fa(null,t,r,e,o,n);var i=Ia();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Oe(r)?(i=!0,Ei(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Na(t),o.updater=tl,t.stateNode=o,o._reactInternals=t,Os(t,r,e,n),t=Is(null,t,r,!0,i,n)):(t.tag=0,Z&&i&&Ea(t),Ce(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ai(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=cm(r),e=ct(r,e),o){case 0:t=Fs(null,t,r,e,n);break e;case 1:t=ac(null,t,r,e,n);break e;case 11:t=lc(null,t,r,e,n);break e;case 14:t=sc(null,t,r,ct(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ct(r,o),Fs(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ct(r,o),ac(e,t,r,o,n);case 3:e:{if(Kh(t),e===null)throw Error(k(387));r=t.pendingProps,i=t.memoizedState,o=i.element,mh(e,t),Ti(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=hr(Error(k(423)),t),t=uc(e,t,r,n,o);break e}else if(r!==o){o=hr(Error(k(424)),t),t=uc(e,t,r,n,o);break e}else for(Ke=Zt(t.stateNode.containerInfo.firstChild),Qe=t,Z=!0,ht=null,n=bh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ur(),r===o){t=Nt(e,t,n);break e}Ce(e,t,r,n)}t=t.child}return t;case 5:return _h(t),e===null&&Ns(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,zs(r,o)?l=null:i!==null&&zs(r,i)&&(t.flags|=32),Wh(e,t),Ce(e,t,l,n),t.child;case 6:return e===null&&Ns(t),null;case 13:return Qh(e,t,n);case 4:return Ra(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=cr(t,null,r,n):Ce(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ct(r,o),lc(e,t,r,o,n);case 7:return Ce(e,t,t.pendingProps,n),t.child;case 8:return Ce(e,t,t.pendingProps.children,n),t.child;case 12:return Ce(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,K(Ai,r._currentValue),r._currentValue=l,i!==null)if(gt(i.value,l)){if(i.children===o.children&&!Me.current){t=Nt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=At(-1,n&-n),a.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?a.next=a:(a.next=h.next,h.next=a),u.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Rs(i.return,n,t),s.lanes|=n;break}a=a.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(k(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Rs(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Ce(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,or(t,n),o=it(o),r=r(o),t.flags|=1,Ce(e,t,r,n),t.child;case 14:return r=t.type,o=ct(r,t.pendingProps),o=ct(r.type,o),sc(e,t,r,o,n);case 15:return Hh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ct(r,o),ai(e,t),t.tag=1,Oe(r)?(e=!0,Ei(t)):e=!1,or(t,n),yh(t,r,o),Os(t,r,o,n),Is(null,t,r,!0,e,n);case 19:return Gh(e,t,n);case 22:return Uh(e,t,n)}throw Error(k(156,t.tag))};function cp(e,t){return Od(e,t)}function um(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nt(e,t,n,r){return new um(e,t,n,r)}function Ya(e){return e=e.prototype,!(!e||!e.isReactComponent)}function cm(e){if(typeof e=="function")return Ya(e)?1:0;if(e!=null){if(e=e.$$typeof,e===fa)return 11;if(e===ga)return 14}return 2}function nn(e,t){var n=e.alternate;return n===null?(n=nt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function di(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")Ya(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Vn:return En(n.children,o,i,t);case pa:l=8,o|=8;break;case ls:return e=nt(12,n,t,o|2),e.elementType=ls,e.lanes=i,e;case ss:return e=nt(13,n,t,o),e.elementType=ss,e.lanes=i,e;case as:return e=nt(19,n,t,o),e.elementType=as,e.lanes=i,e;case wd:return il(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case vd:l=10;break e;case yd:l=9;break e;case fa:l=11;break e;case ga:l=14;break e;case Bt:l=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=nt(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function En(e,t,n,r){return e=nt(7,e,r,t),e.lanes=n,e}function il(e,t,n,r){return e=nt(22,e,r,t),e.elementType=wd,e.lanes=n,e.stateNode={isHidden:!1},e}function Vl(e,t,n){return e=nt(6,e,null,t),e.lanes=n,e}function jl(e,t,n){return t=nt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function dm(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xl(0),this.expirationTimes=xl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function qa(e,t,n,r,o,i,l,s,a){return e=new dm(e,t,n,s,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=nt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Na(i),e}function hm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Bn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function dp(e){if(!e)return on;e=e._reactInternals;e:{if(Mn(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Oe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(Oe(n))return ch(e,n,t)}return t}function hp(e,t,n,r,o,i,l,s,a){return e=qa(n,r,!0,e,o,i,l,s,a),e.context=dp(null),n=e.current,r=Ee(),o=tn(n),i=At(r,o),i.callback=t??null,Jt(n,i,o),e.current.lanes=o,xo(e,o,r),De(e,r),e}function ll(e,t,n,r){var o=t.current,i=Ee(),l=tn(o);return n=dp(n),t.context===null?t.context=n:t.pendingContext=n,t=At(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Jt(o,t,l),e!==null&&(ft(e,o,l,i),ii(e,o,l)),l}function Ii(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function wc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Xa(e,t){wc(e,t),(e=e.alternate)&&wc(e,t)}function pm(){return null}var pp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Za(e){this._internalRoot=e}sl.prototype.render=Za.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));ll(e,t,null,null)};sl.prototype.unmount=Za.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Tn(function(){ll(null,e,null,null)}),t[Tt]=null}};function sl(e){this._internalRoot=e}sl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Hd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ht.length&&t!==0&&t<Ht[n].priority;n++);Ht.splice(n,0,e),n===0&&Wd(e)}};function Ja(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function al(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function bc(){}function fm(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=Ii(l);i.call(u)}}var l=hp(t,r,e,0,null,!1,!1,"",bc);return e._reactRootContainer=l,e[Tt]=l.current,lo(e.nodeType===8?e.parentNode:e),Tn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var u=Ii(a);s.call(u)}}var a=qa(e,0,!1,null,null,!1,!1,"",bc);return e._reactRootContainer=a,e[Tt]=a.current,lo(e.nodeType===8?e.parentNode:e),Tn(function(){ll(t,a,n,r)}),a}function ul(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var s=o;o=function(){var a=Ii(l);s.call(a)}}ll(t,l,e,o)}else l=fm(n,t,e,o,r);return Ii(l)}Vd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Br(t.pendingLanes);n!==0&&(ya(t,n|1),De(t,ie()),!(V&6)&&(pr=ie()+500,hn()))}break;case 13:Tn(function(){var r=Lt(e,1);if(r!==null){var o=Ee();ft(r,e,1,o)}}),Xa(e,1)}};wa=function(e){if(e.tag===13){var t=Lt(e,134217728);if(t!==null){var n=Ee();ft(t,e,134217728,n)}Xa(e,134217728)}};jd=function(e){if(e.tag===13){var t=tn(e),n=Lt(e,t);if(n!==null){var r=Ee();ft(n,e,t,r)}Xa(e,t)}};Hd=function(){return U};Ud=function(e,t){var n=U;try{return U=e,t()}finally{U=n}};ys=function(e,t,n){switch(t){case"input":if(ds(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Ji(r);if(!o)throw Error(k(90));_d(r),ds(r,o)}}}break;case"textarea":kd(e,n);break;case"select":t=n.value,t!=null&&er(e,!!n.multiple,t,!1)}};Pd=Ka;Td=Tn;var gm={usingClientEntryPoint:!1,Events:[So,Wn,Ji,zd,Ad,Ka]},Tr={findFiberByHostInstance:bn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},mm={bundleType:Tr.bundleType,version:Tr.version,rendererPackageName:Tr.rendererPackageName,rendererConfig:Tr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Mt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Rd(e),e===null?null:e.stateNode},findFiberByHostInstance:Tr.findFiberByHostInstance||pm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Go=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Go.isDisabled&&Go.supportsFiber)try{Yi=Go.inject(mm),bt=Go}catch{}}qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gm;qe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ja(t))throw Error(k(200));return hm(e,t,null,n)};qe.createRoot=function(e,t){if(!Ja(e))throw Error(k(299));var n=!1,r="",o=pp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=qa(e,1,!1,null,null,n,!1,r,o),e[Tt]=t.current,lo(e.nodeType===8?e.parentNode:e),new Za(t)};qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=Rd(t),e=e===null?null:e.stateNode,e};qe.flushSync=function(e){return Tn(e)};qe.hydrate=function(e,t,n){if(!al(t))throw Error(k(200));return ul(null,e,t,!0,n)};qe.hydrateRoot=function(e,t,n){if(!Ja(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=pp;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=hp(t,null,e,1,n??null,o,!1,i,l),e[Tt]=t.current,lo(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new sl(t)};qe.render=function(e,t,n){if(!al(t))throw Error(k(200));return ul(null,e,t,!1,n)};qe.unmountComponentAtNode=function(e){if(!al(e))throw Error(k(40));return e._reactRootContainer?(Tn(function(){ul(null,null,e,!1,function(){e._reactRootContainer=null,e[Tt]=null})}),!0):!1};qe.unstable_batchedUpdates=Ka;qe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!al(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return ul(e,t,n,!1,r)};qe.version="18.2.0-next-9e3b772b8-20220608";function fp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fp)}catch(e){console.error(e)}}fp(),hd.exports=qe;var vm=hd.exports,_c=vm;os.createRoot=_c.createRoot,os.hydrateRoot=_c.hydrateRoot;function ym(e){const n=["default","cwy","radar_dbz_cwb","preci_cwb","OceanLakeLandSnow"].map((r,o)=>L.jsx("option",{children:r},o));return L.jsxs(L.Fragment,{children:[L.jsx("label",{children:"Template: "}),L.jsx("select",{title:"colormaps",onChange:r=>e.changeMap(r),style:{maxWidth:"80px"},children:n})]})}function gp(e){return wm(e)}function Hl(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function wm(e){for(let t=e;t;t=Hl(t))if(t instanceof Element&&getComputedStyle(t).display==="none")return null;for(let t=Hl(e);t;t=Hl(t)){if(!(t instanceof Element))continue;const n=getComputedStyle(t);if(n.display!=="contents"&&(n.position!=="static"||n.filter!=="none"||t.tagName==="BODY"))return t}return null}function bm(e){const t=e.tagName.toLowerCase();return e.getAttribute("tabindex")==="-1"||e.hasAttribute("disabled")||e.hasAttribute("aria-disabled")&&e.getAttribute("aria-disabled")!=="false"||t==="input"&&e.getAttribute("type")==="radio"&&!e.hasAttribute("checked")||e.offsetParent===null&&gp(e)===null||window.getComputedStyle(e).visibility==="hidden"?!1:(t==="audio"||t==="video")&&e.hasAttribute("controls")||e.hasAttribute("tabindex")||e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"?!0:["button","input","select","textarea","a","audio","video","summary"].includes(t)}function _m(e){var t,n;const r=hi(e),o=(t=r[0])!=null?t:null,i=(n=r[r.length-1])!=null?n:null;return{start:o,end:i}}function hi(e){const t=[];function n(r){if(r instanceof Element){if(r.hasAttribute("inert"))return;!t.includes(r)&&bm(r)&&t.push(r);const o=i=>{var l;return((l=i.getRootNode({composed:!0}))==null?void 0:l.host)!==e};r instanceof HTMLSlotElement&&o(r)&&r.assignedElements({flatten:!0}).forEach(i=>{n(i)}),r.shadowRoot!==null&&r.shadowRoot.mode==="open"&&n(r.shadowRoot)}[...r.children].forEach(o=>n(o))}return n(e),t}function*mp(e=document.activeElement){e!=null&&(yield e,"shadowRoot"in e&&e.shadowRoot&&e.shadowRoot.mode!=="closed"&&(yield*mp(e.shadowRoot.activeElement)))}var Lr=[],xm=class{constructor(e){this.tabDirection="forward",this.handleFocusIn=()=>{this.checkFocus()},this.handleKeyDown=t=>{var n;if(t.key!=="Tab")return;t.shiftKey?this.tabDirection="backward":this.tabDirection="forward",t.preventDefault();const r=hi(this.element),o=r[0];let i=this.startElementAlreadyFocused(o)?0:this.currentFocusIndex;if(i===-1){this.currentFocus=o,this.currentFocus.focus({preventScroll:!0});return}const l=this.tabDirection==="forward"?1:-1;i+l>=r.length?i=0:this.currentFocusIndex+l<0?i=r.length-1:i+=l,this.currentFocus=r[i],(n=this.currentFocus)==null||n.focus({preventScroll:!0}),setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=e}activate(){Lr.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){Lr=Lr.filter(e=>e!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return Lr[Lr.length-1]===this.element}checkFocus(){if(this.isActive()){const e=hi(this.element);if(!this.element.matches(":focus-within")){const t=e[0],n=e[e.length-1],r=this.tabDirection==="forward"?t:n;typeof(r==null?void 0:r.focus)=="function"&&(this.currentFocus=r,r.focus({preventScroll:!0}))}}}get currentFocusIndex(){return hi(this.element).findIndex(e=>e===this.currentFocus)}startElementAlreadyFocused(e){for(const t of mp())if(e===t)return!0;return!1}},Xs=new Set;function km(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function xc(e){if(Xs.add(e),!document.body.classList.contains("sl-scroll-lock")){const t=km();document.body.classList.add("sl-scroll-lock"),document.body.style.setProperty("--sl-scroll-lock-size",`${t}px`)}}function kc(e){Xs.delete(e),Xs.size===0&&(document.body.classList.remove("sl-scroll-lock"),document.body.style.removeProperty("--sl-scroll-lock-size"))}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pi=window,eu=pi.ShadowRoot&&(pi.ShadyCSS===void 0||pi.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,tu=Symbol(),Sc=new WeakMap;let vp=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==tu)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(eu&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=Sc.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&Sc.set(n,t))}return t}toString(){return this.cssText}};const Sm=e=>new vp(typeof e=="string"?e:e+"",void 0,tu),Ae=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((r,o,i)=>r+(l=>{if(l._$cssResult$===!0)return l.cssText;if(typeof l=="number")return l;throw Error("Value passed to 'css' function must be a 'css' function result: "+l+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1],e[0]);return new vp(n,e,tu)},Cm=(e,t)=>{eu?e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet):t.forEach(n=>{const r=document.createElement("style"),o=pi.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=n.cssText,e.appendChild(r)})},Cc=eu?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return Sm(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ul;const Bi=window,Ec=Bi.trustedTypes,Em=Ec?Ec.emptyScript:"",$c=Bi.reactiveElementPolyfillSupport,mo={toAttribute(e,t){switch(t){case Boolean:e=e?Em:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},yp=(e,t)=>t!==e&&(t==t||e==e),Wl={attribute:!0,type:String,converter:mo,reflect:!1,hasChanged:yp},Zs="finalized";let In=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var n;this.finalize(),((n=this.h)!==null&&n!==void 0?n:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((n,r)=>{const o=this._$Ep(r,n);o!==void 0&&(this._$Ev.set(o,r),t.push(o))}),t}static createProperty(t,n=Wl){if(n.state&&(n.attribute=!1),this.finalize(),this.elementProperties.set(t,n),!n.noAccessor&&!this.prototype.hasOwnProperty(t)){const r=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,r,n);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,n,r){return{get(){return this[n]},set(o){const i=this[t];this[n]=o,this.requestUpdate(t,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Wl}static finalize(){if(this.hasOwnProperty(Zs))return!1;this[Zs]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const n=this.properties,r=[...Object.getOwnPropertyNames(n),...Object.getOwnPropertySymbols(n)];for(const o of r)this.createProperty(o,n[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const o of r)n.unshift(Cc(o))}else t!==void 0&&n.push(Cc(t));return n}static _$Ep(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(n=>n(this))}addController(t){var n,r;((n=this._$ES)!==null&&n!==void 0?n:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)===null||r===void 0||r.call(t))}removeController(t){var n;(n=this._$ES)===null||n===void 0||n.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,n)=>{this.hasOwnProperty(n)&&(this._$Ei.set(n,this[n]),delete this[n])})}createRenderRoot(){var t;const n=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Cm(n,this.constructor.elementStyles),n}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var r;return(r=n.hostConnected)===null||r===void 0?void 0:r.call(n)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(n=>{var r;return(r=n.hostDisconnected)===null||r===void 0?void 0:r.call(n)})}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$EO(t,n,r=Wl){var o;const i=this.constructor._$Ep(t,r);if(i!==void 0&&r.reflect===!0){const l=(((o=r.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?r.converter:mo).toAttribute(n,r.type);this._$El=t,l==null?this.removeAttribute(i):this.setAttribute(i,l),this._$El=null}}_$AK(t,n){var r;const o=this.constructor,i=o._$Ev.get(t);if(i!==void 0&&this._$El!==i){const l=o.getPropertyOptions(i),s=typeof l.converter=="function"?{fromAttribute:l.converter}:((r=l.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?l.converter:mo;this._$El=i,this[i]=s.fromAttribute(n,l.type),this._$El=null}}requestUpdate(t,n,r){let o=!0;t!==void 0&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||yp)(this[t],n)?(this._$AL.has(t)||this._$AL.set(t,n),r.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,r))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,i)=>this[i]=o),this._$Ei=void 0);let n=!1;const r=this._$AL;try{n=this.shouldUpdate(r),n?(this.willUpdate(r),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var i;return(i=o.hostUpdate)===null||i===void 0?void 0:i.call(o)}),this.update(r)):this._$Ek()}catch(o){throw n=!1,this._$Ek(),o}n&&this._$AE(r)}willUpdate(t){}_$AE(t){var n;(n=this._$ES)===null||n===void 0||n.forEach(r=>{var o;return(o=r.hostUpdated)===null||o===void 0?void 0:o.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((n,r)=>this._$EO(r,this[r],n)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};In[Zs]=!0,In.elementProperties=new Map,In.elementStyles=[],In.shadowRootOptions={mode:"open"},$c==null||$c({ReactiveElement:In}),((Ul=Bi.reactiveElementVersions)!==null&&Ul!==void 0?Ul:Bi.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Kl;const Vi=window,fr=Vi.trustedTypes,zc=fr?fr.createPolicy("lit-html",{createHTML:e=>e}):void 0,Js="$lit$",Wt=`lit$${(Math.random()+"").slice(9)}$`,wp="?"+Wt,$m=`<${wp}>`,Ln=document,vo=()=>Ln.createComment(""),yo=e=>e===null||typeof e!="object"&&typeof e!="function",bp=Array.isArray,zm=e=>bp(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Ql=`[ 	
\f\r]`,Nr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ac=/-->/g,Pc=/>/g,gn=RegExp(`>|${Ql}(?:([^\\s"'>=/]+)(${Ql}*=${Ql}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Tc=/'/g,Lc=/"/g,_p=/^(?:script|style|textarea|title)$/i,Am=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),G=Am(1),rt=Symbol.for("lit-noChange"),se=Symbol.for("lit-nothing"),Nc=new WeakMap,kn=Ln.createTreeWalker(Ln,129,null,!1);function xp(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return zc!==void 0?zc.createHTML(t):t}const Pm=(e,t)=>{const n=e.length-1,r=[];let o,i=t===2?"<svg>":"",l=Nr;for(let s=0;s<n;s++){const a=e[s];let u,h,d=-1,g=0;for(;g<a.length&&(l.lastIndex=g,h=l.exec(a),h!==null);)g=l.lastIndex,l===Nr?h[1]==="!--"?l=Ac:h[1]!==void 0?l=Pc:h[2]!==void 0?(_p.test(h[2])&&(o=RegExp("</"+h[2],"g")),l=gn):h[3]!==void 0&&(l=gn):l===gn?h[0]===">"?(l=o??Nr,d=-1):h[1]===void 0?d=-2:(d=l.lastIndex-h[2].length,u=h[1],l=h[3]===void 0?gn:h[3]==='"'?Lc:Tc):l===Lc||l===Tc?l=gn:l===Ac||l===Pc?l=Nr:(l=gn,o=void 0);const v=l===gn&&e[s+1].startsWith("/>")?" ":"";i+=l===Nr?a+$m:d>=0?(r.push(u),a.slice(0,d)+Js+a.slice(d)+Wt+v):a+Wt+(d===-2?(r.push(void 0),s):v)}return[xp(e,i+(e[n]||"<?>")+(t===2?"</svg>":"")),r]};class wo{constructor({strings:t,_$litType$:n},r){let o;this.parts=[];let i=0,l=0;const s=t.length-1,a=this.parts,[u,h]=Pm(t,n);if(this.el=wo.createElement(u,r),kn.currentNode=this.el.content,n===2){const d=this.el.content,g=d.firstChild;g.remove(),d.append(...g.childNodes)}for(;(o=kn.nextNode())!==null&&a.length<s;){if(o.nodeType===1){if(o.hasAttributes()){const d=[];for(const g of o.getAttributeNames())if(g.endsWith(Js)||g.startsWith(Wt)){const v=h[l++];if(d.push(g),v!==void 0){const w=o.getAttribute(v.toLowerCase()+Js).split(Wt),b=/([.?@])?(.*)/.exec(v);a.push({type:1,index:i,name:b[2],strings:w,ctor:b[1]==="."?Lm:b[1]==="?"?Rm:b[1]==="@"?Mm:cl})}else a.push({type:6,index:i})}for(const g of d)o.removeAttribute(g)}if(_p.test(o.tagName)){const d=o.textContent.split(Wt),g=d.length-1;if(g>0){o.textContent=fr?fr.emptyScript:"";for(let v=0;v<g;v++)o.append(d[v],vo()),kn.nextNode(),a.push({type:2,index:++i});o.append(d[g],vo())}}}else if(o.nodeType===8)if(o.data===wp)a.push({type:2,index:i});else{let d=-1;for(;(d=o.data.indexOf(Wt,d+1))!==-1;)a.push({type:7,index:i}),d+=Wt.length-1}i++}}static createElement(t,n){const r=Ln.createElement("template");return r.innerHTML=t,r}}function gr(e,t,n=e,r){var o,i,l,s;if(t===rt)return t;let a=r!==void 0?(o=n._$Co)===null||o===void 0?void 0:o[r]:n._$Cl;const u=yo(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==u&&((i=a==null?void 0:a._$AO)===null||i===void 0||i.call(a,!1),u===void 0?a=void 0:(a=new u(e),a._$AT(e,n,r)),r!==void 0?((l=(s=n)._$Co)!==null&&l!==void 0?l:s._$Co=[])[r]=a:n._$Cl=a),a!==void 0&&(t=gr(e,a._$AS(e,t.values),a,r)),t}class Tm{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var n;const{el:{content:r},parts:o}=this._$AD,i=((n=t==null?void 0:t.creationScope)!==null&&n!==void 0?n:Ln).importNode(r,!0);kn.currentNode=i;let l=kn.nextNode(),s=0,a=0,u=o[0];for(;u!==void 0;){if(s===u.index){let h;u.type===2?h=new Eo(l,l.nextSibling,this,t):u.type===1?h=new u.ctor(l,u.name,u.strings,this,t):u.type===6&&(h=new Om(l,this,t)),this._$AV.push(h),u=o[++a]}s!==(u==null?void 0:u.index)&&(l=kn.nextNode(),s++)}return kn.currentNode=Ln,i}v(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}}class Eo{constructor(t,n,r,o){var i;this.type=2,this._$AH=se,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=o,this._$Cp=(i=o==null?void 0:o.isConnected)===null||i===void 0||i}get _$AU(){var t,n;return(n=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&n!==void 0?n:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=gr(this,t,n),yo(t)?t===se||t==null||t===""?(this._$AH!==se&&this._$AR(),this._$AH=se):t!==this._$AH&&t!==rt&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):zm(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==se&&yo(this._$AH)?this._$AA.nextSibling.data=t:this.$(Ln.createTextNode(t)),this._$AH=t}g(t){var n;const{values:r,_$litType$:o}=t,i=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=wo.createElement(xp(o.h,o.h[0]),this.options)),o);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===i)this._$AH.v(r);else{const l=new Tm(i,this),s=l.u(this.options);l.v(r),this.$(s),this._$AH=l}}_$AC(t){let n=Nc.get(t.strings);return n===void 0&&Nc.set(t.strings,n=new wo(t)),n}T(t){bp(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,o=0;for(const i of t)o===n.length?n.push(r=new Eo(this.k(vo()),this.k(vo()),this,this.options)):r=n[o],r._$AI(i),o++;o<n.length&&(this._$AR(r&&r._$AB.nextSibling,o),n.length=o)}_$AR(t=this._$AA.nextSibling,n){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,n);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var n;this._$AM===void 0&&(this._$Cp=t,(n=this._$AP)===null||n===void 0||n.call(this,t))}}class cl{constructor(t,n,r,o,i){this.type=1,this._$AH=se,this._$AN=void 0,this.element=t,this.name=n,this._$AM=o,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=se}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,n=this,r,o){const i=this.strings;let l=!1;if(i===void 0)t=gr(this,t,n,0),l=!yo(t)||t!==this._$AH&&t!==rt,l&&(this._$AH=t);else{const s=t;let a,u;for(t=i[0],a=0;a<i.length-1;a++)u=gr(this,s[r+a],n,a),u===rt&&(u=this._$AH[a]),l||(l=!yo(u)||u!==this._$AH[a]),u===se?t=se:t!==se&&(t+=(u??"")+i[a+1]),this._$AH[a]=u}l&&!o&&this.j(t)}j(t){t===se?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Lm extends cl{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===se?void 0:t}}const Nm=fr?fr.emptyScript:"";class Rm extends cl{constructor(){super(...arguments),this.type=4}j(t){t&&t!==se?this.element.setAttribute(this.name,Nm):this.element.removeAttribute(this.name)}}class Mm extends cl{constructor(t,n,r,o,i){super(t,n,r,o,i),this.type=5}_$AI(t,n=this){var r;if((t=(r=gr(this,t,n,0))!==null&&r!==void 0?r:se)===rt)return;const o=this._$AH,i=t===se&&o!==se||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,l=t!==se&&(o===se||i);i&&this.element.removeEventListener(this.name,this,o),l&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var n,r;typeof this._$AH=="function"?this._$AH.call((r=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&r!==void 0?r:this.element,t):this._$AH.handleEvent(t)}}class Om{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){gr(this,t)}}const Rc=Vi.litHtmlPolyfillSupport;Rc==null||Rc(wo,Eo),((Kl=Vi.litHtmlVersions)!==null&&Kl!==void 0?Kl:Vi.litHtmlVersions=[]).push("2.8.0");const Dm=(e,t,n)=>{var r,o;const i=(r=n==null?void 0:n.renderBefore)!==null&&r!==void 0?r:t;let l=i._$litPart$;if(l===void 0){const s=(o=n==null?void 0:n.renderBefore)!==null&&o!==void 0?o:null;i._$litPart$=l=new Eo(t.insertBefore(vo(),s),s,void 0,n??{})}return l._$AI(e),l};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Gl,Yl;let Xr=class extends In{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,n;const r=super.createRenderRoot();return(t=(n=this.renderOptions).renderBefore)!==null&&t!==void 0||(n.renderBefore=r.firstChild),r}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Dm(n,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return rt}};Xr.finalized=!0,Xr._$litElement$=!0,(Gl=globalThis.litElementHydrateSupport)===null||Gl===void 0||Gl.call(globalThis,{LitElement:Xr});const Mc=globalThis.litElementPolyfillSupport;Mc==null||Mc({LitElement:Xr});((Yl=globalThis.litElementVersions)!==null&&Yl!==void 0?Yl:globalThis.litElementVersions=[]).push("3.3.3");var Ze=Ae`
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
`,Fm=Ae`
  ${Ze}

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
`,Im=Ae`
  ${Ze}

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
`,Bm=Ae`
  ${Ze}

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
`,ea="";function ji(e){ea=e}function Vm(e=""){if(!ea){const t=[...document.getElementsByTagName("script")],n=t.find(r=>r.hasAttribute("data-shoelace"));if(n)ji(n.getAttribute("data-shoelace"));else{const r=t.find(i=>/shoelace(\.min)?\.js($|\?)/.test(i.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(i.src));let o="";r&&(o=r.getAttribute("src")),ji(o.split("/").slice(0,-1).join("/"))}}return ea.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}var jm={name:"default",resolver:e=>Vm(`assets/icons/${e}.svg`)},Hm=jm,Oc={caret:`
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
  `},Um={name:"system",resolver:e=>e in Oc?`data:image/svg+xml,${encodeURIComponent(Oc[e])}`:""},Wm=Um,Km=[Hm,Wm],ta=[];function Qm(e){ta.push(e)}function Gm(e){ta=ta.filter(t=>t!==e)}function Dc(e){return Km.find(t=>t.name===e)}var kp=Object.defineProperty,Ym=Object.defineProperties,qm=Object.getOwnPropertyDescriptor,Xm=Object.getOwnPropertyDescriptors,Fc=Object.getOwnPropertySymbols,Zm=Object.prototype.hasOwnProperty,Jm=Object.prototype.propertyIsEnumerable,Ic=(e,t,n)=>t in e?kp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,On=(e,t)=>{for(var n in t||(t={}))Zm.call(t,n)&&Ic(e,n,t[n]);if(Fc)for(var n of Fc(t))Jm.call(t,n)&&Ic(e,n,t[n]);return e},dl=(e,t)=>Ym(e,Xm(t)),f=(e,t,n,r)=>{for(var o=r>1?void 0:r?qm(t,n):t,i=e.length-1,l;i>=0;i--)(l=e[i])&&(o=(r?l(t,n,o):l(o))||o);return r&&o&&kp(t,n,o),o};function Ie(e,t){const n=On({waitUntilFirstUpdate:!1},t);return(r,o)=>{const{update:i}=r,l=Array.isArray(e)?e:[e];r.update=function(s){l.forEach(a=>{const u=a;if(s.has(u)){const h=s.get(u),d=this[u];h!==d&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[o](h,d)}}),i.call(this,s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ev=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(n){n.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(n){n.createProperty(t.key,e)}},tv=(e,t,n)=>{t.constructor.createProperty(n,e)};function y(e){return(t,n)=>n!==void 0?tv(e,t,n):ev(e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function fe(e){return y({...e,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nv=({finisher:e,descriptor:t})=>(n,r)=>{var o;if(r===void 0){const i=(o=n.originalKey)!==null&&o!==void 0?o:n.key,l=t!=null?{kind:"method",placement:"prototype",key:i,descriptor:t(n.key)}:{...n,key:i};return e!=null&&(l.finisher=function(s){e(s,i)}),l}{const i=n.constructor;t!==void 0&&Object.defineProperty(n,r,t(r)),e==null||e(i,r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function re(e,t){return nv({descriptor:n=>{const r={get(){var o,i;return(i=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(e))!==null&&i!==void 0?i:null},enumerable:!0,configurable:!0};if(t){const o=typeof n=="symbol"?Symbol():"__"+n;r.get=function(){var i,l;return this[o]===void 0&&(this[o]=(l=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(e))!==null&&l!==void 0?l:null),this[o]}}return r}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ql;((ql=window.HTMLSlotElement)===null||ql===void 0?void 0:ql.prototype.assignedElements)!=null;var we=class extends Xr{constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){const n=new CustomEvent(e,On({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(n),n}static define(e,t=this,n={}){const r=customElements.get(e);if(!r){customElements.define(e,class extends t{},n);return}let o=" (unknown version)",i=o;"version"in t&&t.version&&(o=" v"+t.version),"version"in r&&r.version&&(i=" v"+r.version),!(o&&i&&o===i)&&console.warn(`Attempted to register <${e}>${o}, but <${e}>${i} has already been registered.`)}};we.version="2.8.0";we.dependencies={};f([y()],we.prototype,"dir",2);f([y()],we.prototype,"lang",2);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rv=(e,t)=>t===void 0?(e==null?void 0:e._$litType$)!==void 0:(e==null?void 0:e._$litType$)===t,ov=e=>e.strings===void 0,iv={},lv=(e,t=iv)=>e._$AH=t;var Rr=Symbol(),Yo=Symbol(),Xl,Zl=new Map,Be=class extends we{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var n;let r;if(t!=null&&t.spriteSheet)return G`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`;try{if(r=await fetch(e,{mode:"cors"}),!r.ok)return r.status===410?Rr:Yo}catch{return Yo}try{const o=document.createElement("div");o.innerHTML=await r.text();const i=o.firstElementChild;if(((n=i==null?void 0:i.tagName)==null?void 0:n.toLowerCase())!=="svg")return Rr;Xl||(Xl=new DOMParser);const s=Xl.parseFromString(i.outerHTML,"text/html").body.querySelector("svg");return s?(s.part.add("svg"),document.adoptNode(s)):Rr}catch{return Rr}}connectedCallback(){super.connectedCallback(),Qm(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Gm(this)}getUrl(){const e=Dc(this.library);return this.name&&e?e.resolver(this.name):this.src}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const t=Dc(this.library),n=this.getUrl();if(!n){this.svg=null;return}let r=Zl.get(n);if(r||(r=this.resolveIcon(n,t),Zl.set(n,r)),!this.initialRender)return;const o=await r;if(o===Yo&&Zl.delete(n),n===this.getUrl()){if(rv(o)){this.svg=o;return}switch(o){case Yo:case Rr:this.svg=null,this.emit("sl-error");break;default:this.svg=o.cloneNode(!0),(e=t==null?void 0:t.mutator)==null||e.call(t,this.svg),this.emit("sl-load")}}}render(){return this.svg}};Be.styles=Bm;f([fe()],Be.prototype,"svg",2);f([y({reflect:!0})],Be.prototype,"name",2);f([y()],Be.prototype,"src",2);f([y()],Be.prototype,"label",2);f([y({reflect:!0})],Be.prototype,"library",2);f([Ie("label")],Be.prototype,"handleLabelChange",1);f([Ie(["name","src","library"])],Be.prototype,"setIcon",1);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},nu=e=>(...t)=>({_$litDirective$:e,values:t});let ru=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,r){this._$Ct=t,this._$AM=n,this._$Ci=r}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fe=nu(class extends ru{constructor(e){var t;if(super(e),e.type!==jt.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var n,r;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!(!((n=this.nt)===null||n===void 0)&&n.has(i))&&this.it.add(i);return this.render(t)}const o=e.element.classList;this.it.forEach(i=>{i in t||(o.remove(i),this.it.delete(i))});for(const i in t){const l=!!t[i];l===this.it.has(i)||!((r=this.nt)===null||r===void 0)&&r.has(i)||(l?(o.add(i),this.it.add(i)):(o.remove(i),this.it.delete(i)))}return rt}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Sp=Symbol.for(""),sv=e=>{if((e==null?void 0:e.r)===Sp)return e==null?void 0:e._$litStatic$},Hi=(e,...t)=>({_$litStatic$:t.reduce((n,r,o)=>n+(i=>{if(i._$litStatic$!==void 0)return i._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${i}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(r)+e[o+1],e[0]),r:Sp}),Bc=new Map,av=e=>(t,...n)=>{const r=n.length;let o,i;const l=[],s=[];let a,u=0,h=!1;for(;u<r;){for(a=t[u];u<r&&(i=n[u],(o=sv(i))!==void 0);)a+=o+t[++u],h=!0;u!==r&&s.push(i),l.push(a),u++}if(u===r&&l.push(t[r]),h){const d=l.join("$$lit$$");(t=Bc.get(d))===void 0&&(l.raw=l,Bc.set(d,t=l)),n=s}return e(t,...n)},fi=av(G);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=e=>e??se;var Pe=class extends we{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){const e=!!this.href,t=e?Hi`a`:Hi`button`;return fi`
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
    `}};Pe.styles=Im;Pe.dependencies={"sl-icon":Be};f([re(".icon-button")],Pe.prototype,"button",2);f([fe()],Pe.prototype,"hasFocus",2);f([y()],Pe.prototype,"name",2);f([y()],Pe.prototype,"library",2);f([y()],Pe.prototype,"src",2);f([y()],Pe.prototype,"href",2);f([y()],Pe.prototype,"target",2);f([y()],Pe.prototype,"download",2);f([y()],Pe.prototype,"label",2);f([y({type:Boolean,reflect:!0})],Pe.prototype,"disabled",2);var Cp=new Map,uv=new WeakMap;function cv(e){return e??{keyframes:[],options:{duration:0}}}function Vc(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function Ot(e,t){Cp.set(e,cv(t))}function Et(e,t,n){const r=uv.get(e);if(r!=null&&r[t])return Vc(r[t],n.dir);const o=Cp.get(t);return o?Vc(o,n.dir):{keyframes:[],options:{duration:0}}}function Ui(e,t){return new Promise(n=>{function r(o){o.target===e&&(e.removeEventListener(t,r),n())}e.addEventListener(t,r)})}function yn(e,t,n){return new Promise(r=>{if((n==null?void 0:n.duration)===1/0)throw new Error("Promise-based animations must be finite.");const o=e.animate(t,dl(On({},n),{duration:dv()?0:n.duration}));o.addEventListener("cancel",r,{once:!0}),o.addEventListener("finish",r,{once:!0})})}function dv(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Zn(e){return Promise.all(e.getAnimations().map(t=>new Promise(n=>{const r=requestAnimationFrame(n);t.addEventListener("cancel",()=>r,{once:!0}),t.addEventListener("finish",()=>r,{once:!0}),t.cancel()})))}const na=new Set,hv=new MutationObserver(zp),Jn=new Map;let Ep=document.documentElement.dir||"ltr",$p=document.documentElement.lang||navigator.language,wn;hv.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function pv(...e){e.map(t=>{const n=t.$code.toLowerCase();Jn.has(n)?Jn.set(n,Object.assign(Object.assign({},Jn.get(n)),t)):Jn.set(n,t),wn||(wn=t)}),zp()}function zp(){Ep=document.documentElement.dir||"ltr",$p=document.documentElement.lang||navigator.language,[...na.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}let fv=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){na.add(this.host)}hostDisconnected(){na.delete(this.host)}dir(){return`${this.host.dir||Ep}`.toLowerCase()}lang(){return`${this.host.lang||$p}`.toLowerCase()}getTranslationData(t){var n,r;const o=new Intl.Locale(t),i=o==null?void 0:o.language.toLowerCase(),l=(r=(n=o==null?void 0:o.region)===null||n===void 0?void 0:n.toLowerCase())!==null&&r!==void 0?r:"",s=Jn.get(`${i}-${l}`),a=Jn.get(i);return{locale:o,language:i,region:l,primary:s,secondary:a}}exists(t,n){var r;const{primary:o,secondary:i}=this.getTranslationData((r=n.lang)!==null&&r!==void 0?r:this.lang());return n=Object.assign({includeFallback:!1},n),!!(o&&o[t]||i&&i[t]||n.includeFallback&&wn&&wn[t])}term(t,...n){const{primary:r,secondary:o}=this.getTranslationData(this.lang());let i;if(r&&r[t])i=r[t];else if(o&&o[t])i=o[t];else if(wn&&wn[t])i=wn[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof i=="function"?i(...n):i}date(t,n){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),n).format(t)}number(t,n){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),n).format(t)}relativeTime(t,n,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(t,n)}};var Dn=class extends fv{},hl=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=n=>{const r=n.target;(this.slotNames.includes("[default]")&&!r.name||r.name&&this.slotNames.includes(r.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}},mt=class extends we{constructor(){super(...arguments),this.hasSlotController=new hl(this,"footer"),this.localize=new Dn(this),this.modal=new xm(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=e=>{e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),xc(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),kc(this)}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const n=Et(this,"dialog.denyClose",{dir:this.localize.dir()});yn(this.panel,n.keyframes,n.options);return}this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),xc(this);const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([Zn(this.dialog),Zn(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=Et(this,"dialog.show",{dir:this.localize.dir()}),n=Et(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([yn(this.panel,t.keyframes,t.options),yn(this.overlay,n.keyframes,n.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([Zn(this.dialog),Zn(this.overlay)]);const e=Et(this,"dialog.hide",{dir:this.localize.dir()}),t=Et(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([yn(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),yn(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,kc(this);const n=this.originalTrigger;typeof(n==null?void 0:n.focus)=="function"&&setTimeout(()=>n.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,Ui(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Ui(this,"sl-after-hide")}render(){return G`
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
    `}};mt.styles=Fm;mt.dependencies={"sl-icon-button":Pe};f([re(".dialog")],mt.prototype,"dialog",2);f([re(".dialog__panel")],mt.prototype,"panel",2);f([re(".dialog__overlay")],mt.prototype,"overlay",2);f([y({type:Boolean,reflect:!0})],mt.prototype,"open",2);f([y({reflect:!0})],mt.prototype,"label",2);f([y({attribute:"no-header",type:Boolean,reflect:!0})],mt.prototype,"noHeader",2);f([Ie("open",{waitUntilFirstUpdate:!0})],mt.prototype,"handleOpenChange",1);Ot("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});Ot("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});Ot("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});Ot("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});Ot("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gv=new Set(["children","localName","ref","style","className"]),jc=new WeakMap,mv=(e,t,n,r,o)=>{const i=o==null?void 0:o[t];i===void 0||n===r?(e[t]=n,n==null&&t in HTMLElement.prototype&&e.removeAttribute(t)):((l,s,a)=>{let u=jc.get(l);u===void 0&&jc.set(l,u=new Map);let h=u.get(s);a!==void 0?h===void 0?(u.set(s,h={handleEvent:a}),l.addEventListener(s,h)):h.handleEvent=a:h!==void 0&&(u.delete(s),l.removeEventListener(s,h))})(e,i,n)},_r=({react:e,tagName:t,elementClass:n,events:r,displayName:o})=>{const i=new Set(Object.keys(r??{})),l=e.forwardRef((s,a)=>{const u=e.useRef(null),h=e.useRef(null),d={},g={};for(const[v,w]of Object.entries(s))gv.has(v)?d[v==="className"?"class":v]=w:i.has(v)||v in n.prototype?g[v]=w:d[v]=w;return e.useLayoutEffect(()=>{if(h.current!==null){for(const v in g)mv(h.current,v,s[v],u.current?u.current[v]:void 0,r);u.current=s}}),e.useLayoutEffect(()=>{var v;(v=h.current)===null||v===void 0||v.removeAttribute("defer-hydration")},[]),d.suppressHydrationWarning=!0,e.createElement(t,{...d,ref:v=>{h.current=v,typeof a=="function"?a(v):a!==null&&(a.current=v)}})});return l.displayName=o??n.name,l};var vv="sl-dialog";mt.define("sl-dialog");var yv=_r({tagName:vv,elementClass:mt,react:yr,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInitialFocus:"sl-initial-focus",onSlRequestClose:"sl-request-close"},displayName:"SlDialog"}),wv=yv,bv={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};pv(bv);var Ap=Ae`
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
`,_v=Ae`
  ${Ze}
  ${Ap}

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
`,ou=(e="value")=>(t,n)=>{const r=t.constructor,o=r.prototype.attributeChangedCallback;r.prototype.attributeChangedCallback=function(i,l,s){var a;const u=r.getPropertyOptions(e),h=typeof u.attribute=="string"?u.attribute:e;if(i===h){const d=u.converter||mo,v=(typeof d=="function"?d:(a=d==null?void 0:d.fromAttribute)!=null?a:mo.fromAttribute)(s,u.type);this[e]!==v&&(this[n]=v)}o.call(this,i,l,s)}},Mr=new WeakMap,Or=new WeakMap,Jl=new WeakSet,qo=new WeakMap,pl=class{constructor(e,t){this.handleFormData=n=>{const r=this.options.disabled(this.host),o=this.options.name(this.host),i=this.options.value(this.host),l=this.host.tagName.toLowerCase()==="sl-button";!r&&!l&&typeof o=="string"&&o.length>0&&typeof i<"u"&&(Array.isArray(i)?i.forEach(s=>{n.formData.append(o,s.toString())}):n.formData.append(o,i.toString()))},this.handleFormSubmit=n=>{var r;const o=this.options.disabled(this.host),i=this.options.reportValidity;this.form&&!this.form.noValidate&&((r=Mr.get(this.form))==null||r.forEach(l=>{this.setUserInteracted(l,!0)})),this.form&&!this.form.noValidate&&!o&&!i(this.host)&&(n.preventDefault(),n.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),qo.set(this.host,[])},this.handleInteraction=n=>{const r=qo.get(this.host);r.includes(n.type)||r.push(n.type),r.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const n=this.form.querySelectorAll("*");for(const r of n)if(typeof r.reportValidity=="function"&&!r.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=On({form:n=>{if(n.hasAttribute("form")&&n.getAttribute("form")!==""){const r=n.getRootNode(),o=n.getAttribute("form");if(o)return r.getElementById(o)}return n.closest("form")},name:n=>n.name,value:n=>n.value,defaultValue:n=>n.defaultValue,disabled:n=>{var r;return(r=n.disabled)!=null?r:!1},reportValidity:n=>typeof n.reportValidity=="function"?n.reportValidity():!0,setValue:(n,r)=>n.value=r,assumeInteractionOn:["sl-input"]},t)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),qo.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),qo.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,Mr.has(this.form)?Mr.get(this.form).add(this.host):Mr.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Or.has(this.form)||(Or.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity())):this.form=void 0}detachForm(){var e;this.form&&((e=Mr.get(this.form))==null||e.delete(this.host),this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Or.has(this.form)&&(this.form.reportValidity=Or.get(this.form),Or.delete(this.form))),this.form=void 0}setUserInteracted(e,t){t?Jl.add(e):Jl.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){const n=document.createElement("button");n.type=e,n.style.position="absolute",n.style.width="0",n.style.height="0",n.style.clipPath="inset(50%)",n.style.overflow="hidden",n.style.whiteSpace="nowrap",t&&(n.name=t.name,n.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(r=>{t.hasAttribute(r)&&n.setAttribute(r,t.getAttribute(r))})),this.form.append(n),n.click(),n.remove()}}getForm(){var e;return(e=this.form)!=null?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const t=this.host,n=!!Jl.has(t),r=!!t.required;t.toggleAttribute("data-required",r),t.toggleAttribute("data-optional",!r),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&n),t.toggleAttribute("data-user-valid",e&&n)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||e==null||e.preventDefault()}},iu=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(dl(On({},iu),{valid:!1,valueMissing:!0}));Object.freeze(dl(On({},iu),{valid:!1,customError:!0}));/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pp=nu(class extends ru{constructor(e){if(super(e),e.type!==jt.PROPERTY&&e.type!==jt.ATTRIBUTE&&e.type!==jt.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!ov(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===rt||t===se)return t;const n=e.element,r=e.name;if(e.type===jt.PROPERTY){if(t===n[r])return rt}else if(e.type===jt.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(r))return rt}else if(e.type===jt.ATTRIBUTE&&n.getAttribute(r)===t+"")return rt;return lv(e),t}});var H=class extends we{constructor(){super(...arguments),this.formControlController=new pl(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new hl(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}setTextareaHeight(){this.resize==="auto"?(this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=void 0}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(e){if(e){typeof e.top=="number"&&(this.input.scrollTop=e.top),typeof e.left=="number"&&(this.input.scrollLeft=e.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(e,t,n="none"){this.input.setSelectionRange(e,t,n)}setRangeText(e,t,n,r){this.input.setRangeText(e,t,n,r),this.value!==this.input.value&&(this.value=this.input.value),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),n=this.label?!0:!!e,r=this.helpText?!0:!!t;return G`
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
              .value=${Pp(this.value)}
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
    `}};H.styles=_v;f([re(".textarea__control")],H.prototype,"input",2);f([fe()],H.prototype,"hasFocus",2);f([y()],H.prototype,"title",2);f([y()],H.prototype,"name",2);f([y()],H.prototype,"value",2);f([y({reflect:!0})],H.prototype,"size",2);f([y({type:Boolean,reflect:!0})],H.prototype,"filled",2);f([y()],H.prototype,"label",2);f([y({attribute:"help-text"})],H.prototype,"helpText",2);f([y()],H.prototype,"placeholder",2);f([y({type:Number})],H.prototype,"rows",2);f([y()],H.prototype,"resize",2);f([y({type:Boolean,reflect:!0})],H.prototype,"disabled",2);f([y({type:Boolean,reflect:!0})],H.prototype,"readonly",2);f([y({reflect:!0})],H.prototype,"form",2);f([y({type:Boolean,reflect:!0})],H.prototype,"required",2);f([y({type:Number})],H.prototype,"minlength",2);f([y({type:Number})],H.prototype,"maxlength",2);f([y()],H.prototype,"autocapitalize",2);f([y()],H.prototype,"autocorrect",2);f([y()],H.prototype,"autocomplete",2);f([y({type:Boolean})],H.prototype,"autofocus",2);f([y()],H.prototype,"enterkeyhint",2);f([y({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],H.prototype,"spellcheck",2);f([y()],H.prototype,"inputmode",2);f([ou()],H.prototype,"defaultValue",2);f([Ie("disabled",{waitUntilFirstUpdate:!0})],H.prototype,"handleDisabledChange",1);f([Ie("rows",{waitUntilFirstUpdate:!0})],H.prototype,"handleRowsChange",1);f([Ie("value",{waitUntilFirstUpdate:!0})],H.prototype,"handleValueChange",1);var xv="sl-textarea";H.define("sl-textarea");var kv=_r({tagName:xv,elementClass:H,react:yr,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlTextarea"}),Sv=kv,Cv="sl-icon-button";Pe.define("sl-icon-button");_r({tagName:Cv,elementClass:Pe,react:yr,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus"},displayName:"SlIconButton"});var Ev=Ae`
    ${Ze}
  
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
  `,$v="sl-icon";Be.define("sl-icon");var zv=_r({tagName:$v,elementClass:Be,react:yr,events:{onSlLoad:"sl-load",onSlError:"sl-error"},displayName:"SlIcon"}),Av=zv;ji("https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.14.0/cdn/");var Se=class extends we{constructor(){super(...arguments),this.localize=new Dn(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.hoist=!1,this.hasFocus=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let e=this.value;if(this.from){const t=this.getRootNode(),n=this.from.includes("."),r=this.from.includes("[")&&this.from.includes("]");let o=this.from,i="";n?[o,i]=this.from.trim().split("."):r&&([o,i]=this.from.trim().replace(/\]$/,"").split("["));const l="getElementById"in t?t.getElementById(o):null;l?r?e=l.getAttribute(i)||"":n?e=l[i]||"":e=l.textContent||"":(this.showStatus("error"),this.emit("sl-error"))}if(!e)this.showStatus("error"),this.emit("sl-error");else try{await navigator.clipboard.writeText(e),this.showStatus("success"),this.emit("sl-copy",{detail:{value:e}})}catch{this.showStatus("error"),this.emit("sl-error")}}async showStatus(e){const t=e==="success"?this.successIcon:this.errorIcon,n=Et(this,"copy.in",{dir:"ltr"}),r=Et(this,"copy.out",{dir:"ltr"});await this.copyIcon.animate(r.keyframes,r.options).finished,this.copyIcon.hidden=!0,this.status=e,t.hidden=!1,await t.animate(n.keyframes,n.options).finished,setTimeout(async()=>{await t.animate(r.keyframes,r.options).finished,t.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await this.copyIcon.animate(n.keyframes,n.options).finished,this.isCopying=!1},this.feedbackDuration)}render(){return G`
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
      `}};Se.styles=Ev;Se.dependencies={"sl-icon":Av};f([re(".copy-button")],Se.prototype,"button",2);f([fe()],Se.prototype,"hasFocus",2);f([re('slot[name="copy-icon"]')],Se.prototype,"copyIcon",2);f([re('slot[name="success-icon"]')],Se.prototype,"successIcon",2);f([re('slot[name="error-icon"]')],Se.prototype,"errorIcon",2);f([fe()],Se.prototype,"isCopying",2);f([fe()],Se.prototype,"status",2);f([y()],Se.prototype,"value",2);f([y()],Se.prototype,"from",2);f([y({type:Boolean,reflect:!0})],Se.prototype,"disabled",2);f([y({attribute:"feedback-duration",type:Number})],Se.prototype,"feedbackDuration",2);f([y({type:Boolean})],Se.prototype,"hoist",2);Ot("copy.in",{keyframes:[{scale:".25",opacity:".25"},{scale:"1",opacity:"1"}],options:{duration:100}});Ot("copy.out",{keyframes:[{scale:"1",opacity:"1"},{scale:".25",opacity:"0"}],options:{duration:100}});var Pv="happy-copy-button";Se.define("happy-copy-button");var Tv=_r({tagName:Pv,elementClass:Se,react:yr,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus",onSlCopy:"sl-copy",onSlError:"sl-error"},displayName:"HappyCopyButton"}),Lv=Tv;ji("https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.14.0/cdn/");function Nv({coloroutrgb:e}){const[t,n]=We.useState(!1),r=Rv(e);return L.jsxs(L.Fragment,{children:[L.jsx("button",{className:"button-85",onClick:()=>n(!0),children:L.jsx("img",{src:"https://matplotlib.org/stable/_static/logo_dark.svg",width:"100px"})}),L.jsxs(wv,{label:"Python code",open:t,onSlAfterHide:()=>n(!1),style:{"--width":"100%",textAlign:"left"},children:[L.jsx(Lv,{slot:"header-actions",style:{flex:"0 0 auto",display:"flex",alignItems:"center",fontSize:"var(--sl-font-size-medium)"},value:r}),L.jsx(Sv,{className:"code-area",value:r,rows:15,size:"small",readOnly:!0})]})]})}function Rv(e){let t="";return t+=`def manual_cmap():
`,t+=`    import numpy as np
`,t+=`    from matplotlib.colors import LinearSegmentedColormap
`,t+=`    colors = [
`,e.map(n=>{t+="        ["+n[0]+","+n[1]+","+n[2]+`],
`}),t+=`    ]
`,t+=`    return LinearSegmentedColormap.from_list("manual_cmap",np.array(colors)/255)
`,t+="# cmap = manual_cmap()",t}const Mv=["RGB","Hex"];function Ov({coloroutrgb:e}){const[t,n]=We.useState("RGB");function r(i){n(i.target.value)}let o="";return t==="RGB"&&e.map(i=>{o+=i[0]+"	"+i[1]+"	"+i[2]+`
`}),t==="Hex"&&e.map(i=>{o+=Dv(i)+`
`}),L.jsxs("div",{className:"txtarea",children:[L.jsx("div",{children:L.jsx(Nv,{coloroutrgb:e})}),L.jsxs("div",{children:[L.jsx("label",{children:"output type: "}),L.jsx("select",{title:"colortype",onChange:i=>r(i),children:Mv.map((i,l)=>L.jsx("option",{children:i},l))})]}),L.jsx("textarea",{value:o,rows:e.length+1,cols:25,readOnly:!0,style:{resize:"none"}})]})}function Dv(e){let t=(+e[0]).toString(16),n=(+e[1]).toString(16),r=(+e[2]).toString(16);return t.length==1&&(t="0"+t),n.length==1&&(n="0"+n),r.length==1&&(r="0"+r),"#"+t+n+r}function Fv(e){const t={position:"sticky",top:0,zIndex:100},n=We.useRef(null);return We.useEffect(()=>{const o=n.current.getContext("2d");Iv(o,e.color_out_rgb)}),L.jsx("canvas",{ref:n,height:"100",width:"500",style:t})}function Iv(e,t){e.clearRect(0,0,500,100),e.beginPath(),e.rect(50,30,400,40),e.stroke();for(let n=0;n<t.length;n++){const r="rgb("+t[n][0]+","+t[n][1]+","+t[n][2]+")",o=50+n*400/t.length;Bv(e,r,o,30,400/t.length,40)}}function Bv(e,t,n,r,o,i){e.fillStyle=t,e.fillRect(n,r,o,i)}var Vv=Ae`
  ${Ze}

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
`,Tp=class extends we{render(){return G` <slot></slot> `}};Tp.styles=Vv;function es(e,t){function n(o){const i=e.getBoundingClientRect(),l=e.ownerDocument.defaultView,s=i.left+l.pageXOffset,a=i.top+l.pageYOffset,u=o.pageX-s,h=o.pageY-a;t!=null&&t.onMove&&t.onMove(u,h)}function r(){document.removeEventListener("pointermove",n),document.removeEventListener("pointerup",r),t!=null&&t.onStop&&t.onStop()}document.addEventListener("pointermove",n,{passive:!0}),document.addEventListener("pointerup",r),(t==null?void 0:t.initialEvent)instanceof PointerEvent&&n(t.initialEvent)}var jv=Ae`
  ${Ze}
  ${Ap}

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
`,O=class extends we{constructor(){super(...arguments),this.formControlController=new pl(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new hl(this,"help-text","label"),this.localize=new Dn(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var e;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((e=this.input)==null?void 0:e.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(e){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=e,this.value=this.__dateInput.value}get valueAsNumber(){var e;return this.__numberInput.value=this.value,((e=this.input)==null?void 0:e.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(e){this.__numberInput.valueAsNumber=e,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(e){this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change"),this.input.focus(),e.stopPropagation()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleKeyDown(e){const t=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key==="Enter"&&!t&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,n="none"){this.input.setSelectionRange(e,t,n)}setRangeText(e,t,n,r){this.input.setRangeText(e,t,n,r),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),n=this.label?!0:!!e,r=this.helpText?!0:!!t,o=this.clearable&&!this.disabled&&!this.readonly,i=o&&(typeof this.value=="number"||this.value.length>0);return G`
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
              .value=${Pp(this.value)}
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
    `}};O.styles=jv;O.dependencies={"sl-icon":Be};f([re(".input__control")],O.prototype,"input",2);f([fe()],O.prototype,"hasFocus",2);f([y()],O.prototype,"title",2);f([y({reflect:!0})],O.prototype,"type",2);f([y()],O.prototype,"name",2);f([y()],O.prototype,"value",2);f([ou()],O.prototype,"defaultValue",2);f([y({reflect:!0})],O.prototype,"size",2);f([y({type:Boolean,reflect:!0})],O.prototype,"filled",2);f([y({type:Boolean,reflect:!0})],O.prototype,"pill",2);f([y()],O.prototype,"label",2);f([y({attribute:"help-text"})],O.prototype,"helpText",2);f([y({type:Boolean})],O.prototype,"clearable",2);f([y({type:Boolean,reflect:!0})],O.prototype,"disabled",2);f([y()],O.prototype,"placeholder",2);f([y({type:Boolean,reflect:!0})],O.prototype,"readonly",2);f([y({attribute:"password-toggle",type:Boolean})],O.prototype,"passwordToggle",2);f([y({attribute:"password-visible",type:Boolean})],O.prototype,"passwordVisible",2);f([y({attribute:"no-spin-buttons",type:Boolean})],O.prototype,"noSpinButtons",2);f([y({reflect:!0})],O.prototype,"form",2);f([y({type:Boolean,reflect:!0})],O.prototype,"required",2);f([y()],O.prototype,"pattern",2);f([y({type:Number})],O.prototype,"minlength",2);f([y({type:Number})],O.prototype,"maxlength",2);f([y()],O.prototype,"min",2);f([y()],O.prototype,"max",2);f([y()],O.prototype,"step",2);f([y()],O.prototype,"autocapitalize",2);f([y()],O.prototype,"autocorrect",2);f([y()],O.prototype,"autocomplete",2);f([y({type:Boolean})],O.prototype,"autofocus",2);f([y()],O.prototype,"enterkeyhint",2);f([y({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],O.prototype,"spellcheck",2);f([y()],O.prototype,"inputmode",2);f([Ie("disabled",{waitUntilFirstUpdate:!0})],O.prototype,"handleDisabledChange",1);f([Ie("step",{waitUntilFirstUpdate:!0})],O.prototype,"handleStepChange",1);f([Ie("value",{waitUntilFirstUpdate:!0})],O.prototype,"handleValueChange",1);var Hv=Ae`
  ${Ze}

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
`,Uv=Ae`
  ${Ze}

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
`;const ln=Math.min,Ue=Math.max,Wi=Math.round,Xo=Math.floor,sn=e=>({x:e,y:e}),Wv={left:"right",right:"left",bottom:"top",top:"bottom"},Kv={start:"end",end:"start"};function ra(e,t,n){return Ue(e,ln(t,n))}function xr(e,t){return typeof e=="function"?e(t):e}function an(e){return e.split("-")[0]}function kr(e){return e.split("-")[1]}function Lp(e){return e==="x"?"y":"x"}function lu(e){return e==="y"?"height":"width"}function $o(e){return["top","bottom"].includes(an(e))?"y":"x"}function su(e){return Lp($o(e))}function Qv(e,t,n){n===void 0&&(n=!1);const r=kr(e),o=su(e),i=lu(o);let l=o==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[i]>t.floating[i]&&(l=Ki(l)),[l,Ki(l)]}function Gv(e){const t=Ki(e);return[oa(e),t,oa(t)]}function oa(e){return e.replace(/start|end/g,t=>Kv[t])}function Yv(e,t,n){const r=["left","right"],o=["right","left"],i=["top","bottom"],l=["bottom","top"];switch(e){case"top":case"bottom":return n?t?o:r:t?r:o;case"left":case"right":return t?i:l;default:return[]}}function qv(e,t,n,r){const o=kr(e);let i=Yv(an(e),n==="start",r);return o&&(i=i.map(l=>l+"-"+o),t&&(i=i.concat(i.map(oa)))),i}function Ki(e){return e.replace(/left|right|bottom|top/g,t=>Wv[t])}function Xv(e){return{top:0,right:0,bottom:0,left:0,...e}}function Np(e){return typeof e!="number"?Xv(e):{top:e,right:e,bottom:e,left:e}}function Qi(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function Hc(e,t,n){let{reference:r,floating:o}=e;const i=$o(t),l=su(t),s=lu(l),a=an(t),u=i==="y",h=r.x+r.width/2-o.width/2,d=r.y+r.height/2-o.height/2,g=r[s]/2-o[s]/2;let v;switch(a){case"top":v={x:h,y:r.y-o.height};break;case"bottom":v={x:h,y:r.y+r.height};break;case"right":v={x:r.x+r.width,y:d};break;case"left":v={x:r.x-o.width,y:d};break;default:v={x:r.x,y:r.y}}switch(kr(t)){case"start":v[l]-=g*(n&&u?-1:1);break;case"end":v[l]+=g*(n&&u?-1:1);break}return v}const Zv=async(e,t,n)=>{const{placement:r="bottom",strategy:o="absolute",middleware:i=[],platform:l}=n,s=i.filter(Boolean),a=await(l.isRTL==null?void 0:l.isRTL(t));let u=await l.getElementRects({reference:e,floating:t,strategy:o}),{x:h,y:d}=Hc(u,r,a),g=r,v={},w=0;for(let b=0;b<s.length;b++){const{name:T,fn:p}=s[b],{x:c,y:m,data:_,reset:x}=await p({x:h,y:d,initialPlacement:r,placement:g,strategy:o,middlewareData:v,rects:u,platform:l,elements:{reference:e,floating:t}});if(h=c??h,d=m??d,v={...v,[T]:{...v[T],..._}},x&&w<=50){w++,typeof x=="object"&&(x.placement&&(g=x.placement),x.rects&&(u=x.rects===!0?await l.getElementRects({reference:e,floating:t,strategy:o}):x.rects),{x:h,y:d}=Hc(u,g,a)),b=-1;continue}}return{x:h,y:d,placement:g,strategy:o,middlewareData:v}};async function au(e,t){var n;t===void 0&&(t={});const{x:r,y:o,platform:i,rects:l,elements:s,strategy:a}=e,{boundary:u="clippingAncestors",rootBoundary:h="viewport",elementContext:d="floating",altBoundary:g=!1,padding:v=0}=xr(t,e),w=Np(v),T=s[g?d==="floating"?"reference":"floating":d],p=Qi(await i.getClippingRect({element:(n=await(i.isElement==null?void 0:i.isElement(T)))==null||n?T:T.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(s.floating)),boundary:u,rootBoundary:h,strategy:a})),c=d==="floating"?{...l.floating,x:r,y:o}:l.reference,m=await(i.getOffsetParent==null?void 0:i.getOffsetParent(s.floating)),_=await(i.isElement==null?void 0:i.isElement(m))?await(i.getScale==null?void 0:i.getScale(m))||{x:1,y:1}:{x:1,y:1},x=Qi(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({rect:c,offsetParent:m,strategy:a}):c);return{top:(p.top-x.top+w.top)/_.y,bottom:(x.bottom-p.bottom+w.bottom)/_.y,left:(p.left-x.left+w.left)/_.x,right:(x.right-p.right+w.right)/_.x}}const Jv=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:r,placement:o,rects:i,platform:l,elements:s,middlewareData:a}=t,{element:u,padding:h=0}=xr(e,t)||{};if(u==null)return{};const d=Np(h),g={x:n,y:r},v=su(o),w=lu(v),b=await l.getDimensions(u),T=v==="y",p=T?"top":"left",c=T?"bottom":"right",m=T?"clientHeight":"clientWidth",_=i.reference[w]+i.reference[v]-g[v]-i.floating[w],x=g[v]-i.reference[v],C=await(l.getOffsetParent==null?void 0:l.getOffsetParent(u));let E=C?C[m]:0;(!E||!await(l.isElement==null?void 0:l.isElement(C)))&&(E=s.floating[m]||i.floating[w]);const z=_/2-x/2,j=E/2-b[w]/2-1,R=ln(d[p],j),le=ln(d[c],j),$=R,S=E-b[w]-le,F=E/2-b[w]/2+z,X=ra($,F,S),Le=!a.arrow&&kr(o)!=null&&F!=X&&i.reference[w]/2-(F<$?R:le)-b[w]/2<0,Ve=Le?F<$?F-$:F-S:0;return{[v]:g[v]+Ve,data:{[v]:X,centerOffset:F-X-Ve,...Le&&{alignmentOffset:Ve}},reset:Le}}}),e0=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:o,middlewareData:i,rects:l,initialPlacement:s,platform:a,elements:u}=t,{mainAxis:h=!0,crossAxis:d=!0,fallbackPlacements:g,fallbackStrategy:v="bestFit",fallbackAxisSideDirection:w="none",flipAlignment:b=!0,...T}=xr(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};const p=an(o),c=an(s)===s,m=await(a.isRTL==null?void 0:a.isRTL(u.floating)),_=g||(c||!b?[Ki(s)]:Gv(s));!g&&w!=="none"&&_.push(...qv(s,b,w,m));const x=[s,..._],C=await au(t,T),E=[];let z=((r=i.flip)==null?void 0:r.overflows)||[];if(h&&E.push(C[p]),d){const $=Qv(o,l,m);E.push(C[$[0]],C[$[1]])}if(z=[...z,{placement:o,overflows:E}],!E.every($=>$<=0)){var j,R;const $=(((j=i.flip)==null?void 0:j.index)||0)+1,S=x[$];if(S)return{data:{index:$,overflows:z},reset:{placement:S}};let F=(R=z.filter(X=>X.overflows[0]<=0).sort((X,Le)=>X.overflows[1]-Le.overflows[1])[0])==null?void 0:R.placement;if(!F)switch(v){case"bestFit":{var le;const X=(le=z.map(Le=>[Le.placement,Le.overflows.filter(Ve=>Ve>0).reduce((Ve,A)=>Ve+A,0)]).sort((Le,Ve)=>Le[1]-Ve[1])[0])==null?void 0:le[0];X&&(F=X);break}case"initialPlacement":F=s;break}if(o!==F)return{reset:{placement:F}}}return{}}}};async function t0(e,t){const{placement:n,platform:r,elements:o}=e,i=await(r.isRTL==null?void 0:r.isRTL(o.floating)),l=an(n),s=kr(n),a=$o(n)==="y",u=["left","top"].includes(l)?-1:1,h=i&&a?-1:1,d=xr(t,e);let{mainAxis:g,crossAxis:v,alignmentAxis:w}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return s&&typeof w=="number"&&(v=s==="end"?w*-1:w),a?{x:v*h,y:g*u}:{x:g*u,y:v*h}}const n0=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){const{x:n,y:r}=t,o=await t0(t,e);return{x:n+o.x,y:r+o.y,data:o}}}},r0=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:o}=t,{mainAxis:i=!0,crossAxis:l=!1,limiter:s={fn:T=>{let{x:p,y:c}=T;return{x:p,y:c}}},...a}=xr(e,t),u={x:n,y:r},h=await au(t,a),d=$o(an(o)),g=Lp(d);let v=u[g],w=u[d];if(i){const T=g==="y"?"top":"left",p=g==="y"?"bottom":"right",c=v+h[T],m=v-h[p];v=ra(c,v,m)}if(l){const T=d==="y"?"top":"left",p=d==="y"?"bottom":"right",c=w+h[T],m=w-h[p];w=ra(c,w,m)}const b=s.fn({...t,[g]:v,[d]:w});return{...b,data:{x:b.x-n,y:b.y-r}}}}},Uc=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:n,rects:r,platform:o,elements:i}=t,{apply:l=()=>{},...s}=xr(e,t),a=await au(t,s),u=an(n),h=kr(n),d=$o(n)==="y",{width:g,height:v}=r.floating;let w,b;u==="top"||u==="bottom"?(w=u,b=h===(await(o.isRTL==null?void 0:o.isRTL(i.floating))?"start":"end")?"left":"right"):(b=u,w=h==="end"?"top":"bottom");const T=v-a[w],p=g-a[b],c=!t.middlewareData.shift;let m=T,_=p;if(d){const C=g-a.left-a.right;_=h||c?ln(p,C):C}else{const C=v-a.top-a.bottom;m=h||c?ln(T,C):C}if(c&&!h){const C=Ue(a.left,0),E=Ue(a.right,0),z=Ue(a.top,0),j=Ue(a.bottom,0);d?_=g-2*(C!==0||E!==0?C+E:Ue(a.left,a.right)):m=v-2*(z!==0||j!==0?z+j:Ue(a.top,a.bottom))}await l({...t,availableWidth:_,availableHeight:m});const x=await o.getDimensions(i.floating);return g!==x.width||v!==x.height?{reset:{rects:!0}}:{}}}};function un(e){return Rp(e)?(e.nodeName||"").toLowerCase():"#document"}function Ge(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Dt(e){var t;return(t=(Rp(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Rp(e){return e instanceof Node||e instanceof Ge(e).Node}function Rt(e){return e instanceof Element||e instanceof Ge(e).Element}function xt(e){return e instanceof HTMLElement||e instanceof Ge(e).HTMLElement}function Wc(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Ge(e).ShadowRoot}function zo(e){const{overflow:t,overflowX:n,overflowY:r,display:o}=st(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(o)}function o0(e){return["table","td","th"].includes(un(e))}function uu(e){const t=cu(),n=st(e);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(r=>(n.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(n.contain||"").includes(r))}function i0(e){let t=mr(e);for(;xt(t)&&!fl(t);){if(uu(t))return t;t=mr(t)}return null}function cu(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function fl(e){return["html","body","#document"].includes(un(e))}function st(e){return Ge(e).getComputedStyle(e)}function gl(e){return Rt(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function mr(e){if(un(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Wc(e)&&e.host||Dt(e);return Wc(t)?t.host:t}function Mp(e){const t=mr(e);return fl(t)?e.ownerDocument?e.ownerDocument.body:e.body:xt(t)&&zo(t)?t:Mp(t)}function bo(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const o=Mp(e),i=o===((r=e.ownerDocument)==null?void 0:r.body),l=Ge(o);return i?t.concat(l,l.visualViewport||[],zo(o)?o:[],l.frameElement&&n?bo(l.frameElement):[]):t.concat(o,bo(o))}function Op(e){const t=st(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const o=xt(e),i=o?e.offsetWidth:n,l=o?e.offsetHeight:r,s=Wi(n)!==i||Wi(r)!==l;return s&&(n=i,r=l),{width:n,height:r,$:s}}function du(e){return Rt(e)?e:e.contextElement}function lr(e){const t=du(e);if(!xt(t))return sn(1);const n=t.getBoundingClientRect(),{width:r,height:o,$:i}=Op(t);let l=(i?Wi(n.width):n.width)/r,s=(i?Wi(n.height):n.height)/o;return(!l||!Number.isFinite(l))&&(l=1),(!s||!Number.isFinite(s))&&(s=1),{x:l,y:s}}const l0=sn(0);function Dp(e){const t=Ge(e);return!cu()||!t.visualViewport?l0:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function s0(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==Ge(e)?!1:t}function Nn(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const o=e.getBoundingClientRect(),i=du(e);let l=sn(1);t&&(r?Rt(r)&&(l=lr(r)):l=lr(e));const s=s0(i,n,r)?Dp(i):sn(0);let a=(o.left+s.x)/l.x,u=(o.top+s.y)/l.y,h=o.width/l.x,d=o.height/l.y;if(i){const g=Ge(i),v=r&&Rt(r)?Ge(r):r;let w=g.frameElement;for(;w&&r&&v!==g;){const b=lr(w),T=w.getBoundingClientRect(),p=st(w),c=T.left+(w.clientLeft+parseFloat(p.paddingLeft))*b.x,m=T.top+(w.clientTop+parseFloat(p.paddingTop))*b.y;a*=b.x,u*=b.y,h*=b.x,d*=b.y,a+=c,u+=m,w=Ge(w).frameElement}}return Qi({width:h,height:d,x:a,y:u})}function a0(e){let{rect:t,offsetParent:n,strategy:r}=e;const o=xt(n),i=Dt(n);if(n===i)return t;let l={scrollLeft:0,scrollTop:0},s=sn(1);const a=sn(0);if((o||!o&&r!=="fixed")&&((un(n)!=="body"||zo(i))&&(l=gl(n)),xt(n))){const u=Nn(n);s=lr(n),a.x=u.x+n.clientLeft,a.y=u.y+n.clientTop}return{width:t.width*s.x,height:t.height*s.y,x:t.x*s.x-l.scrollLeft*s.x+a.x,y:t.y*s.y-l.scrollTop*s.y+a.y}}function u0(e){return Array.from(e.getClientRects())}function Fp(e){return Nn(Dt(e)).left+gl(e).scrollLeft}function c0(e){const t=Dt(e),n=gl(e),r=e.ownerDocument.body,o=Ue(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),i=Ue(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let l=-n.scrollLeft+Fp(e);const s=-n.scrollTop;return st(r).direction==="rtl"&&(l+=Ue(t.clientWidth,r.clientWidth)-o),{width:o,height:i,x:l,y:s}}function d0(e,t){const n=Ge(e),r=Dt(e),o=n.visualViewport;let i=r.clientWidth,l=r.clientHeight,s=0,a=0;if(o){i=o.width,l=o.height;const u=cu();(!u||u&&t==="fixed")&&(s=o.offsetLeft,a=o.offsetTop)}return{width:i,height:l,x:s,y:a}}function h0(e,t){const n=Nn(e,!0,t==="fixed"),r=n.top+e.clientTop,o=n.left+e.clientLeft,i=xt(e)?lr(e):sn(1),l=e.clientWidth*i.x,s=e.clientHeight*i.y,a=o*i.x,u=r*i.y;return{width:l,height:s,x:a,y:u}}function Kc(e,t,n){let r;if(t==="viewport")r=d0(e,n);else if(t==="document")r=c0(Dt(e));else if(Rt(t))r=h0(t,n);else{const o=Dp(e);r={...t,x:t.x-o.x,y:t.y-o.y}}return Qi(r)}function Ip(e,t){const n=mr(e);return n===t||!Rt(n)||fl(n)?!1:st(n).position==="fixed"||Ip(n,t)}function p0(e,t){const n=t.get(e);if(n)return n;let r=bo(e,[],!1).filter(s=>Rt(s)&&un(s)!=="body"),o=null;const i=st(e).position==="fixed";let l=i?mr(e):e;for(;Rt(l)&&!fl(l);){const s=st(l),a=uu(l);!a&&s.position==="fixed"&&(o=null),(i?!a&&!o:!a&&s.position==="static"&&!!o&&["absolute","fixed"].includes(o.position)||zo(l)&&!a&&Ip(e,l))?r=r.filter(h=>h!==l):o=s,l=mr(l)}return t.set(e,r),r}function f0(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e;const l=[...n==="clippingAncestors"?p0(t,this._c):[].concat(n),r],s=l[0],a=l.reduce((u,h)=>{const d=Kc(t,h,o);return u.top=Ue(d.top,u.top),u.right=ln(d.right,u.right),u.bottom=ln(d.bottom,u.bottom),u.left=Ue(d.left,u.left),u},Kc(t,s,o));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function g0(e){return Op(e)}function m0(e,t,n){const r=xt(t),o=Dt(t),i=n==="fixed",l=Nn(e,!0,i,t);let s={scrollLeft:0,scrollTop:0};const a=sn(0);if(r||!r&&!i)if((un(t)!=="body"||zo(o))&&(s=gl(t)),r){const u=Nn(t,!0,i,t);a.x=u.x+t.clientLeft,a.y=u.y+t.clientTop}else o&&(a.x=Fp(o));return{x:l.left+s.scrollLeft-a.x,y:l.top+s.scrollTop-a.y,width:l.width,height:l.height}}function Qc(e,t){return!xt(e)||st(e).position==="fixed"?null:t?t(e):e.offsetParent}function Bp(e,t){const n=Ge(e);if(!xt(e))return n;let r=Qc(e,t);for(;r&&o0(r)&&st(r).position==="static";)r=Qc(r,t);return r&&(un(r)==="html"||un(r)==="body"&&st(r).position==="static"&&!uu(r))?n:r||i0(e)||n}const v0=async function(e){let{reference:t,floating:n,strategy:r}=e;const o=this.getOffsetParent||Bp,i=this.getDimensions;return{reference:m0(t,await o(n),r),floating:{x:0,y:0,...await i(n)}}};function y0(e){return st(e).direction==="rtl"}const gi={convertOffsetParentRelativeRectToViewportRelativeRect:a0,getDocumentElement:Dt,getClippingRect:f0,getOffsetParent:Bp,getElementRects:v0,getClientRects:u0,getDimensions:g0,getScale:lr,isElement:Rt,isRTL:y0};function w0(e,t){let n=null,r;const o=Dt(e);function i(){clearTimeout(r),n&&n.disconnect(),n=null}function l(s,a){s===void 0&&(s=!1),a===void 0&&(a=1),i();const{left:u,top:h,width:d,height:g}=e.getBoundingClientRect();if(s||t(),!d||!g)return;const v=Xo(h),w=Xo(o.clientWidth-(u+d)),b=Xo(o.clientHeight-(h+g)),T=Xo(u),c={rootMargin:-v+"px "+-w+"px "+-b+"px "+-T+"px",threshold:Ue(0,ln(1,a))||1};let m=!0;function _(x){const C=x[0].intersectionRatio;if(C!==a){if(!m)return l();C?l(!1,C):r=setTimeout(()=>{l(!1,1e-7)},100)}m=!1}try{n=new IntersectionObserver(_,{...c,root:o.ownerDocument})}catch{n=new IntersectionObserver(_,c)}n.observe(e)}return l(!0),i}function b0(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:o=!0,ancestorResize:i=!0,elementResize:l=typeof ResizeObserver=="function",layoutShift:s=typeof IntersectionObserver=="function",animationFrame:a=!1}=r,u=du(e),h=o||i?[...u?bo(u):[],...bo(t)]:[];h.forEach(p=>{o&&p.addEventListener("scroll",n,{passive:!0}),i&&p.addEventListener("resize",n)});const d=u&&s?w0(u,n):null;let g=-1,v=null;l&&(v=new ResizeObserver(p=>{let[c]=p;c&&c.target===u&&v&&(v.unobserve(t),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{v&&v.observe(t)})),n()}),u&&!a&&v.observe(u),v.observe(t));let w,b=a?Nn(e):null;a&&T();function T(){const p=Nn(e);b&&(p.x!==b.x||p.y!==b.y||p.width!==b.width||p.height!==b.height)&&n(),b=p,w=requestAnimationFrame(T)}return n(),()=>{h.forEach(p=>{o&&p.removeEventListener("scroll",n),i&&p.removeEventListener("resize",n)}),d&&d(),v&&v.disconnect(),v=null,a&&cancelAnimationFrame(w)}}const _0=(e,t,n)=>{const r=new Map,o={platform:gi,...n},i={...o.platform,_c:r};return Zv(e,t,{...o,platform:i})};function x0(e){return e!==null&&typeof e=="object"&&"getBoundingClientRect"in e}var q=class extends we{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||x0(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');if(this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),!this.anchorEl)throw new Error("Invalid anchor element: no anchor could be found using the anchor slot or the anchor attribute.");this.start()}start(){this.anchorEl&&(this.cleanup=b0(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl)return;const e=[n0({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(Uc({apply:({rects:n})=>{const r=this.sync==="width"||this.sync==="both",o=this.sync==="height"||this.sync==="both";this.popup.style.width=r?`${n.reference.width}px`:"",this.popup.style.height=o?`${n.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(e0({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(r0({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(Uc({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:n,availableHeight:r})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${r}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${n}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(Jv({element:this.arrowEl,padding:this.arrowPadding}));const t=this.strategy==="absolute"?n=>gi.getOffsetParent(n,gp):gi.getOffsetParent;_0(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:dl(On({},gi),{getOffsetParent:t})}).then(({x:n,y:r,middlewareData:o,placement:i})=>{const l=getComputedStyle(this).direction==="rtl",s={top:"bottom",right:"left",bottom:"top",left:"right"}[i.split("-")[0]];if(this.setAttribute("data-current-placement",i),Object.assign(this.popup.style,{left:`${n}px`,top:`${r}px`}),this.arrow){const a=o.arrow.x,u=o.arrow.y;let h="",d="",g="",v="";if(this.arrowPlacement==="start"){const w=typeof a=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";h=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",d=l?w:"",v=l?"":w}else if(this.arrowPlacement==="end"){const w=typeof a=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";d=l?"":w,v=l?w:"",g=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(v=typeof a=="number"?"calc(50% - var(--arrow-size-diagonal))":"",h=typeof u=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(v=typeof a=="number"?`${a}px`:"",h=typeof u=="number"?`${u}px`:"");Object.assign(this.arrowEl.style,{top:h,right:d,bottom:g,left:v,[s]:"calc(var(--arrow-size-diagonal) * -1)"})}}),this.emit("sl-reposition")}render(){return G`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <div
        part="popup"
        class=${Fe({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?G`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};q.styles=Uv;f([re(".popup")],q.prototype,"popup",2);f([re(".popup__arrow")],q.prototype,"arrowEl",2);f([y()],q.prototype,"anchor",2);f([y({type:Boolean,reflect:!0})],q.prototype,"active",2);f([y({reflect:!0})],q.prototype,"placement",2);f([y({reflect:!0})],q.prototype,"strategy",2);f([y({type:Number})],q.prototype,"distance",2);f([y({type:Number})],q.prototype,"skidding",2);f([y({type:Boolean})],q.prototype,"arrow",2);f([y({attribute:"arrow-placement"})],q.prototype,"arrowPlacement",2);f([y({attribute:"arrow-padding",type:Number})],q.prototype,"arrowPadding",2);f([y({type:Boolean})],q.prototype,"flip",2);f([y({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:e=>e.join(" ")}})],q.prototype,"flipFallbackPlacements",2);f([y({attribute:"flip-fallback-strategy"})],q.prototype,"flipFallbackStrategy",2);f([y({type:Object})],q.prototype,"flipBoundary",2);f([y({attribute:"flip-padding",type:Number})],q.prototype,"flipPadding",2);f([y({type:Boolean})],q.prototype,"shift",2);f([y({type:Object})],q.prototype,"shiftBoundary",2);f([y({attribute:"shift-padding",type:Number})],q.prototype,"shiftPadding",2);f([y({attribute:"auto-size"})],q.prototype,"autoSize",2);f([y()],q.prototype,"sync",2);f([y({type:Object})],q.prototype,"autoSizeBoundary",2);f([y({attribute:"auto-size-padding",type:Number})],q.prototype,"autoSizePadding",2);var Te=class extends we{constructor(){super(...arguments),this.localize=new Dn(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.handleKeyDown=e=>{this.open&&e.key==="Escape"&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=e=>{var t;if(e.key==="Escape"&&this.open){e.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(e.key==="Tab"){if(this.open&&((t=document.activeElement)==null?void 0:t.tagName.toLowerCase())==="sl-menu-item"){e.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var n,r,o;const i=((n=this.containingElement)==null?void 0:n.getRootNode())instanceof ShadowRoot?(o=(r=document.activeElement)==null?void 0:r.shadowRoot)==null?void 0:o.activeElement:document.activeElement;(!this.containingElement||(i==null?void 0:i.closest(this.containingElement.tagName.toLowerCase()))!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=e=>{const t=e.target;!this.stayOpenOnSelect&&t.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const e=this.trigger.assignedElements({flatten:!0})[0];typeof(e==null?void 0:e.focus)=="function"&&e.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(e=>e.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(e){if([" ","Enter"].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}const t=this.getMenu();if(t){const n=t.getAllItems(),r=n[0],o=n[n.length-1];["ArrowDown","ArrowUp","Home","End"].includes(e.key)&&(e.preventDefault(),this.open||(this.show(),await this.updateComplete),n.length>0&&this.updateComplete.then(()=>{(e.key==="ArrowDown"||e.key==="Home")&&(t.setCurrentItem(r),r.focus()),(e.key==="ArrowUp"||e.key==="End")&&(t.setCurrentItem(o),o.focus())}))}}handleTriggerKeyUp(e){e.key===" "&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const t=this.trigger.assignedElements({flatten:!0}).find(r=>_m(r).start);let n;if(t){switch(t.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":n=t.button;break;default:n=t}n.setAttribute("aria-haspopup","true"),n.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,Ui(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Ui(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){this.panel.addEventListener("sl-select",this.handlePanelSelect),this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await Zn(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=Et(this,"dropdown.show",{dir:this.localize.dir()});await yn(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await Zn(this);const{keyframes:e,options:t}=Et(this,"dropdown.hide",{dir:this.localize.dir()});await yn(this.popup.popup,e,t),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return G`
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
    `}};Te.styles=Hv;Te.dependencies={"sl-popup":q};f([re(".dropdown")],Te.prototype,"popup",2);f([re(".dropdown__trigger")],Te.prototype,"trigger",2);f([re(".dropdown__panel")],Te.prototype,"panel",2);f([y({type:Boolean,reflect:!0})],Te.prototype,"open",2);f([y({reflect:!0})],Te.prototype,"placement",2);f([y({type:Boolean,reflect:!0})],Te.prototype,"disabled",2);f([y({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],Te.prototype,"stayOpenOnSelect",2);f([y({attribute:!1})],Te.prototype,"containingElement",2);f([y({type:Number})],Te.prototype,"distance",2);f([y({type:Number})],Te.prototype,"skidding",2);f([y({type:Boolean})],Te.prototype,"hoist",2);f([Ie("open",{waitUntilFirstUpdate:!0})],Te.prototype,"handleOpenChange",1);Ot("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});Ot("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});var k0=Ae`
  ${Ze}

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
`;function Je(e,t,n){const r=o=>Object.is(o,-0)?0:o;return e<t?r(t):e>n?r(n):r(e)}var S0=Ae`
  ${Ze}

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
`,Vp=class extends we{constructor(){super(...arguments),this.localize=new Dn(this)}render(){return G`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Vp.styles=S0;var C0=Ae`
  ${Ze}

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
`,W=class extends we{constructor(){super(...arguments),this.formControlController=new pl(this,{form:e=>{if(e.hasAttribute("form")){const t=e.getRootNode(),n=e.getAttribute("form");return t.getElementById(n)}return e.closest("form")},assumeInteractionOn:["click"]}),this.hasSlotController=new hl(this,"[default]","prefix","suffix"),this.localize=new Dn(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:iu}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink(),t=e?Hi`a`:Hi`button`;return fi`
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
        ${this.caret?fi` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?fi`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${t}>
    `}};W.styles=C0;W.dependencies={"sl-icon":Be,"sl-spinner":Vp};f([re(".button")],W.prototype,"button",2);f([fe()],W.prototype,"hasFocus",2);f([fe()],W.prototype,"invalid",2);f([y()],W.prototype,"title",2);f([y({reflect:!0})],W.prototype,"variant",2);f([y({reflect:!0})],W.prototype,"size",2);f([y({type:Boolean,reflect:!0})],W.prototype,"caret",2);f([y({type:Boolean,reflect:!0})],W.prototype,"disabled",2);f([y({type:Boolean,reflect:!0})],W.prototype,"loading",2);f([y({type:Boolean,reflect:!0})],W.prototype,"outline",2);f([y({type:Boolean,reflect:!0})],W.prototype,"pill",2);f([y({type:Boolean,reflect:!0})],W.prototype,"circle",2);f([y()],W.prototype,"type",2);f([y()],W.prototype,"name",2);f([y()],W.prototype,"value",2);f([y()],W.prototype,"href",2);f([y()],W.prototype,"target",2);f([y()],W.prototype,"rel",2);f([y()],W.prototype,"download",2);f([y()],W.prototype,"form",2);f([y({attribute:"formaction"})],W.prototype,"formAction",2);f([y({attribute:"formenctype"})],W.prototype,"formEnctype",2);f([y({attribute:"formmethod"})],W.prototype,"formMethod",2);f([y({attribute:"formnovalidate",type:Boolean})],W.prototype,"formNoValidate",2);f([y({attribute:"formtarget"})],W.prototype,"formTarget",2);f([Ie("disabled",{waitUntilFirstUpdate:!0})],W.prototype,"handleDisabledChange",1);var E0=Ae`
  ${Ze}

  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,Ao=class extends we{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(e){const t=Dr(e.target);t==null||t.classList.add("sl-button-group__button--focus")}handleBlur(e){const t=Dr(e.target);t==null||t.classList.remove("sl-button-group__button--focus")}handleMouseOver(e){const t=Dr(e.target);t==null||t.classList.add("sl-button-group__button--hover")}handleMouseOut(e){const t=Dr(e.target);t==null||t.classList.remove("sl-button-group__button--hover")}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})];e.forEach(t=>{const n=e.indexOf(t),r=Dr(t);r&&(r.classList.add("sl-button-group__button"),r.classList.toggle("sl-button-group__button--first",n===0),r.classList.toggle("sl-button-group__button--inner",n>0&&n<e.length-1),r.classList.toggle("sl-button-group__button--last",n===e.length-1),r.classList.toggle("sl-button-group__button--radio",r.tagName.toLowerCase()==="sl-radio-button"))})}render(){return G`
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
    `}};Ao.styles=E0;f([re("slot")],Ao.prototype,"defaultSlot",2);f([fe()],Ao.prototype,"disableRole",2);f([y()],Ao.prototype,"label",2);function Dr(e){var t;const n="sl-button, sl-radio-button";return(t=e.closest(n))!=null?t:e.querySelector(n)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jp="important",$0=" !"+jp,It=nu(class extends ru{constructor(e){var t;if(super(e),e.type!==jt.ATTRIBUTE||e.name!=="style"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{const r=e[n];return r==null?t:t+`${n=n.includes("-")?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(e,[t]){const{style:n}=e.element;if(this.ht===void 0){this.ht=new Set;for(const r in t)this.ht.add(r);return this.render(t)}this.ht.forEach(r=>{t[r]==null&&(this.ht.delete(r),r.includes("-")?n.removeProperty(r):n[r]="")});for(const r in t){const o=t[r];if(o!=null){this.ht.add(r);const i=typeof o=="string"&&o.endsWith($0);r.includes("-")||i?n.setProperty(r,i?o.slice(0,-11):o,i?jp:""):n[r]=o}}return rt}});function ve(e,t){z0(e)&&(e="100%");var n=A0(e);return e=t===360?e:Math.min(t,Math.max(0,parseFloat(e))),n&&(e=parseInt(String(e*t),10)/100),Math.abs(e-t)<1e-6?1:(t===360?e=(e<0?e%t+t:e%t)/parseFloat(String(t)):e=e%t/parseFloat(String(t)),e)}function Zo(e){return Math.min(1,Math.max(0,e))}function z0(e){return typeof e=="string"&&e.indexOf(".")!==-1&&parseFloat(e)===1}function A0(e){return typeof e=="string"&&e.indexOf("%")!==-1}function Hp(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function Jo(e){return e<=1?"".concat(Number(e)*100,"%"):e}function Sn(e){return e.length===1?"0"+e:String(e)}function P0(e,t,n){return{r:ve(e,255)*255,g:ve(t,255)*255,b:ve(n,255)*255}}function Gc(e,t,n){e=ve(e,255),t=ve(t,255),n=ve(n,255);var r=Math.max(e,t,n),o=Math.min(e,t,n),i=0,l=0,s=(r+o)/2;if(r===o)l=0,i=0;else{var a=r-o;switch(l=s>.5?a/(2-r-o):a/(r+o),r){case e:i=(t-n)/a+(t<n?6:0);break;case t:i=(n-e)/a+2;break;case n:i=(e-t)/a+4;break}i/=6}return{h:i,s:l,l:s}}function ts(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*(6*n):n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function T0(e,t,n){var r,o,i;if(e=ve(e,360),t=ve(t,100),n=ve(n,100),t===0)o=n,i=n,r=n;else{var l=n<.5?n*(1+t):n+t-n*t,s=2*n-l;r=ts(s,l,e+1/3),o=ts(s,l,e),i=ts(s,l,e-1/3)}return{r:r*255,g:o*255,b:i*255}}function Yc(e,t,n){e=ve(e,255),t=ve(t,255),n=ve(n,255);var r=Math.max(e,t,n),o=Math.min(e,t,n),i=0,l=r,s=r-o,a=r===0?0:s/r;if(r===o)i=0;else{switch(r){case e:i=(t-n)/s+(t<n?6:0);break;case t:i=(n-e)/s+2;break;case n:i=(e-t)/s+4;break}i/=6}return{h:i,s:a,v:l}}function L0(e,t,n){e=ve(e,360)*6,t=ve(t,100),n=ve(n,100);var r=Math.floor(e),o=e-r,i=n*(1-t),l=n*(1-o*t),s=n*(1-(1-o)*t),a=r%6,u=[n,l,i,i,s,n][a],h=[s,n,n,l,i,i][a],d=[i,i,s,n,n,l][a];return{r:u*255,g:h*255,b:d*255}}function qc(e,t,n,r){var o=[Sn(Math.round(e).toString(16)),Sn(Math.round(t).toString(16)),Sn(Math.round(n).toString(16))];return r&&o[0].startsWith(o[0].charAt(1))&&o[1].startsWith(o[1].charAt(1))&&o[2].startsWith(o[2].charAt(1))?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function N0(e,t,n,r,o){var i=[Sn(Math.round(e).toString(16)),Sn(Math.round(t).toString(16)),Sn(Math.round(n).toString(16)),Sn(R0(r))];return o&&i[0].startsWith(i[0].charAt(1))&&i[1].startsWith(i[1].charAt(1))&&i[2].startsWith(i[2].charAt(1))&&i[3].startsWith(i[3].charAt(1))?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0):i.join("")}function R0(e){return Math.round(parseFloat(e)*255).toString(16)}function Xc(e){return je(e)/255}function je(e){return parseInt(e,16)}function M0(e){return{r:e>>16,g:(e&65280)>>8,b:e&255}}var ia={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function O0(e){var t={r:0,g:0,b:0},n=1,r=null,o=null,i=null,l=!1,s=!1;return typeof e=="string"&&(e=I0(e)),typeof e=="object"&&(kt(e.r)&&kt(e.g)&&kt(e.b)?(t=P0(e.r,e.g,e.b),l=!0,s=String(e.r).substr(-1)==="%"?"prgb":"rgb"):kt(e.h)&&kt(e.s)&&kt(e.v)?(r=Jo(e.s),o=Jo(e.v),t=L0(e.h,r,o),l=!0,s="hsv"):kt(e.h)&&kt(e.s)&&kt(e.l)&&(r=Jo(e.s),i=Jo(e.l),t=T0(e.h,r,i),l=!0,s="hsl"),Object.prototype.hasOwnProperty.call(e,"a")&&(n=e.a)),n=Hp(n),{ok:l,format:e.format||s,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:n}}var D0="[-\\+]?\\d+%?",F0="[-\\+]?\\d*\\.\\d+%?",Gt="(?:".concat(F0,")|(?:").concat(D0,")"),ns="[\\s|\\(]+(".concat(Gt,")[,|\\s]+(").concat(Gt,")[,|\\s]+(").concat(Gt,")\\s*\\)?"),rs="[\\s|\\(]+(".concat(Gt,")[,|\\s]+(").concat(Gt,")[,|\\s]+(").concat(Gt,")[,|\\s]+(").concat(Gt,")\\s*\\)?"),ut={CSS_UNIT:new RegExp(Gt),rgb:new RegExp("rgb"+ns),rgba:new RegExp("rgba"+rs),hsl:new RegExp("hsl"+ns),hsla:new RegExp("hsla"+rs),hsv:new RegExp("hsv"+ns),hsva:new RegExp("hsva"+rs),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function I0(e){if(e=e.trim().toLowerCase(),e.length===0)return!1;var t=!1;if(ia[e])e=ia[e],t=!0;else if(e==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var n=ut.rgb.exec(e);return n?{r:n[1],g:n[2],b:n[3]}:(n=ut.rgba.exec(e),n?{r:n[1],g:n[2],b:n[3],a:n[4]}:(n=ut.hsl.exec(e),n?{h:n[1],s:n[2],l:n[3]}:(n=ut.hsla.exec(e),n?{h:n[1],s:n[2],l:n[3],a:n[4]}:(n=ut.hsv.exec(e),n?{h:n[1],s:n[2],v:n[3]}:(n=ut.hsva.exec(e),n?{h:n[1],s:n[2],v:n[3],a:n[4]}:(n=ut.hex8.exec(e),n?{r:je(n[1]),g:je(n[2]),b:je(n[3]),a:Xc(n[4]),format:t?"name":"hex8"}:(n=ut.hex6.exec(e),n?{r:je(n[1]),g:je(n[2]),b:je(n[3]),format:t?"name":"hex"}:(n=ut.hex4.exec(e),n?{r:je(n[1]+n[1]),g:je(n[2]+n[2]),b:je(n[3]+n[3]),a:Xc(n[4]+n[4]),format:t?"name":"hex8"}:(n=ut.hex3.exec(e),n?{r:je(n[1]+n[1]),g:je(n[2]+n[2]),b:je(n[3]+n[3]),format:t?"name":"hex"}:!1)))))))))}function kt(e){return!!ut.CSS_UNIT.exec(String(e))}var Zc=function(){function e(t,n){t===void 0&&(t=""),n===void 0&&(n={});var r;if(t instanceof e)return t;typeof t=="number"&&(t=M0(t)),this.originalInput=t;var o=O0(t);this.originalInput=t,this.r=o.r,this.g=o.g,this.b=o.b,this.a=o.a,this.roundA=Math.round(100*this.a)/100,this.format=(r=n.format)!==null&&r!==void 0?r:o.format,this.gradientType=n.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=o.ok}return e.prototype.isDark=function(){return this.getBrightness()<128},e.prototype.isLight=function(){return!this.isDark()},e.prototype.getBrightness=function(){var t=this.toRgb();return(t.r*299+t.g*587+t.b*114)/1e3},e.prototype.getLuminance=function(){var t=this.toRgb(),n,r,o,i=t.r/255,l=t.g/255,s=t.b/255;return i<=.03928?n=i/12.92:n=Math.pow((i+.055)/1.055,2.4),l<=.03928?r=l/12.92:r=Math.pow((l+.055)/1.055,2.4),s<=.03928?o=s/12.92:o=Math.pow((s+.055)/1.055,2.4),.2126*n+.7152*r+.0722*o},e.prototype.getAlpha=function(){return this.a},e.prototype.setAlpha=function(t){return this.a=Hp(t),this.roundA=Math.round(100*this.a)/100,this},e.prototype.isMonochrome=function(){var t=this.toHsl().s;return t===0},e.prototype.toHsv=function(){var t=Yc(this.r,this.g,this.b);return{h:t.h*360,s:t.s,v:t.v,a:this.a}},e.prototype.toHsvString=function(){var t=Yc(this.r,this.g,this.b),n=Math.round(t.h*360),r=Math.round(t.s*100),o=Math.round(t.v*100);return this.a===1?"hsv(".concat(n,", ").concat(r,"%, ").concat(o,"%)"):"hsva(".concat(n,", ").concat(r,"%, ").concat(o,"%, ").concat(this.roundA,")")},e.prototype.toHsl=function(){var t=Gc(this.r,this.g,this.b);return{h:t.h*360,s:t.s,l:t.l,a:this.a}},e.prototype.toHslString=function(){var t=Gc(this.r,this.g,this.b),n=Math.round(t.h*360),r=Math.round(t.s*100),o=Math.round(t.l*100);return this.a===1?"hsl(".concat(n,", ").concat(r,"%, ").concat(o,"%)"):"hsla(".concat(n,", ").concat(r,"%, ").concat(o,"%, ").concat(this.roundA,")")},e.prototype.toHex=function(t){return t===void 0&&(t=!1),qc(this.r,this.g,this.b,t)},e.prototype.toHexString=function(t){return t===void 0&&(t=!1),"#"+this.toHex(t)},e.prototype.toHex8=function(t){return t===void 0&&(t=!1),N0(this.r,this.g,this.b,this.a,t)},e.prototype.toHex8String=function(t){return t===void 0&&(t=!1),"#"+this.toHex8(t)},e.prototype.toHexShortString=function(t){return t===void 0&&(t=!1),this.a===1?this.toHexString(t):this.toHex8String(t)},e.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},e.prototype.toRgbString=function(){var t=Math.round(this.r),n=Math.round(this.g),r=Math.round(this.b);return this.a===1?"rgb(".concat(t,", ").concat(n,", ").concat(r,")"):"rgba(".concat(t,", ").concat(n,", ").concat(r,", ").concat(this.roundA,")")},e.prototype.toPercentageRgb=function(){var t=function(n){return"".concat(Math.round(ve(n,255)*100),"%")};return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}},e.prototype.toPercentageRgbString=function(){var t=function(n){return Math.round(ve(n,255)*100)};return this.a===1?"rgb(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%)"):"rgba(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%, ").concat(this.roundA,")")},e.prototype.toName=function(){if(this.a===0)return"transparent";if(this.a<1)return!1;for(var t="#"+qc(this.r,this.g,this.b,!1),n=0,r=Object.entries(ia);n<r.length;n++){var o=r[n],i=o[0],l=o[1];if(t===l)return i}return!1},e.prototype.toString=function(t){var n=!!t;t=t??this.format;var r=!1,o=this.a<1&&this.a>=0,i=!n&&o&&(t.startsWith("hex")||t==="name");return i?t==="name"&&this.a===0?this.toName():this.toRgbString():(t==="rgb"&&(r=this.toRgbString()),t==="prgb"&&(r=this.toPercentageRgbString()),(t==="hex"||t==="hex6")&&(r=this.toHexString()),t==="hex3"&&(r=this.toHexString(!0)),t==="hex4"&&(r=this.toHex8String(!0)),t==="hex8"&&(r=this.toHex8String()),t==="name"&&(r=this.toName()),t==="hsl"&&(r=this.toHslString()),t==="hsv"&&(r=this.toHsvString()),r||this.toHexString())},e.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},e.prototype.clone=function(){return new e(this.toString())},e.prototype.lighten=function(t){t===void 0&&(t=10);var n=this.toHsl();return n.l+=t/100,n.l=Zo(n.l),new e(n)},e.prototype.brighten=function(t){t===void 0&&(t=10);var n=this.toRgb();return n.r=Math.max(0,Math.min(255,n.r-Math.round(255*-(t/100)))),n.g=Math.max(0,Math.min(255,n.g-Math.round(255*-(t/100)))),n.b=Math.max(0,Math.min(255,n.b-Math.round(255*-(t/100)))),new e(n)},e.prototype.darken=function(t){t===void 0&&(t=10);var n=this.toHsl();return n.l-=t/100,n.l=Zo(n.l),new e(n)},e.prototype.tint=function(t){return t===void 0&&(t=10),this.mix("white",t)},e.prototype.shade=function(t){return t===void 0&&(t=10),this.mix("black",t)},e.prototype.desaturate=function(t){t===void 0&&(t=10);var n=this.toHsl();return n.s-=t/100,n.s=Zo(n.s),new e(n)},e.prototype.saturate=function(t){t===void 0&&(t=10);var n=this.toHsl();return n.s+=t/100,n.s=Zo(n.s),new e(n)},e.prototype.greyscale=function(){return this.desaturate(100)},e.prototype.spin=function(t){var n=this.toHsl(),r=(n.h+t)%360;return n.h=r<0?360+r:r,new e(n)},e.prototype.mix=function(t,n){n===void 0&&(n=50);var r=this.toRgb(),o=new e(t).toRgb(),i=n/100,l={r:(o.r-r.r)*i+r.r,g:(o.g-r.g)*i+r.g,b:(o.b-r.b)*i+r.b,a:(o.a-r.a)*i+r.a};return new e(l)},e.prototype.analogous=function(t,n){t===void 0&&(t=6),n===void 0&&(n=30);var r=this.toHsl(),o=360/n,i=[this];for(r.h=(r.h-(o*t>>1)+720)%360;--t;)r.h=(r.h+o)%360,i.push(new e(r));return i},e.prototype.complement=function(){var t=this.toHsl();return t.h=(t.h+180)%360,new e(t)},e.prototype.monochromatic=function(t){t===void 0&&(t=6);for(var n=this.toHsv(),r=n.h,o=n.s,i=n.v,l=[],s=1/t;t--;)l.push(new e({h:r,s:o,v:i})),i=(i+s)%1;return l},e.prototype.splitcomplement=function(){var t=this.toHsl(),n=t.h;return[this,new e({h:(n+72)%360,s:t.s,l:t.l}),new e({h:(n+216)%360,s:t.s,l:t.l})]},e.prototype.onBackground=function(t){var n=this.toRgb(),r=new e(t).toRgb(),o=n.a+r.a*(1-n.a);return new e({r:(n.r*n.a+r.r*r.a*(1-n.a))/o,g:(n.g*n.a+r.g*r.a*(1-n.a))/o,b:(n.b*n.a+r.b*r.a*(1-n.a))/o,a:o})},e.prototype.triad=function(){return this.polyad(3)},e.prototype.tetrad=function(){return this.polyad(4)},e.prototype.polyad=function(t){for(var n=this.toHsl(),r=n.h,o=[this],i=360/t,l=1;l<t;l++)o.push(new e({h:(r+l*i)%360,s:n.s,l:n.l}));return o},e.prototype.equals=function(t){return this.toRgbString()===new e(t).toRgbString()},e}(),Jc="EyeDropper"in window,B=class extends we{constructor(){super(),this.formControlController=new pl(this),this.isSafeValue=!1,this.localize=new Dn(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.handleFocusOut=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.input.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")})}handleFormatToggle(){const e=["hex","rgb","hsl","hsv"],t=(e.indexOf(this.format)+1)%e.length;this.format=e[t],this.setColor(this.value),this.emit("sl-change"),this.emit("sl-input")}handleAlphaDrag(e){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),n=t.querySelector(".color-picker__slider-handle"),{width:r}=t.getBoundingClientRect();let o=this.value;n.focus(),e.preventDefault(),es(t,{onMove:i=>{this.alpha=Je(i/r*100,0,100),this.syncValues(),this.value!==o&&(o=this.value,this.emit("sl-change"),this.emit("sl-input"))},initialEvent:e})}handleHueDrag(e){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),n=t.querySelector(".color-picker__slider-handle"),{width:r}=t.getBoundingClientRect();let o=this.value;n.focus(),e.preventDefault(),es(t,{onMove:i=>{this.hue=Je(i/r*360,0,360),this.syncValues(),this.value!==o&&(o=this.value,this.emit("sl-change"),this.emit("sl-input"))},initialEvent:e})}handleGridDrag(e){const t=this.shadowRoot.querySelector(".color-picker__grid"),n=t.querySelector(".color-picker__grid-handle"),{width:r,height:o}=t.getBoundingClientRect();let i=this.value;n.focus(),e.preventDefault(),this.isDraggingGridHandle=!0,es(t,{onMove:(l,s)=>{this.saturation=Je(l/r*100,0,100),this.brightness=Je(100-s/o*100,0,100),this.syncValues(),this.value!==i&&(i=this.value,this.emit("sl-change"),this.emit("sl-input"))},onStop:()=>this.isDraggingGridHandle=!1,initialEvent:e})}handleAlphaKeyDown(e){const t=e.shiftKey?10:1,n=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.alpha=Je(this.alpha-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.alpha=Je(this.alpha+t,0,100),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.alpha=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.alpha=100,this.syncValues()),this.value!==n&&(this.emit("sl-change"),this.emit("sl-input"))}handleHueKeyDown(e){const t=e.shiftKey?10:1,n=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.hue=Je(this.hue-t,0,360),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.hue=Je(this.hue+t,0,360),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.hue=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.hue=360,this.syncValues()),this.value!==n&&(this.emit("sl-change"),this.emit("sl-input"))}handleGridKeyDown(e){const t=e.shiftKey?10:1,n=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.saturation=Je(this.saturation-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.saturation=Je(this.saturation+t,0,100),this.syncValues()),e.key==="ArrowUp"&&(e.preventDefault(),this.brightness=Je(this.brightness+t,0,100),this.syncValues()),e.key==="ArrowDown"&&(e.preventDefault(),this.brightness=Je(this.brightness-t,0,100),this.syncValues()),this.value!==n&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputChange(e){const t=e.target,n=this.value;e.stopPropagation(),this.input.value?(this.setColor(t.value),t.value=this.value):this.value="",this.value!==n&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputInput(e){this.formControlController.updateValidity(),e.stopPropagation()}handleInputKeyDown(e){if(e.key==="Enter"){const t=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")),setTimeout(()=>this.input.select())):this.hue=0}}handleInputInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleTouchMove(e){e.preventDefault()}parseColor(e){const t=new Zc(e);if(!t.isValid)return null;const n=t.toHsl(),r={h:n.h,s:n.s*100,l:n.l*100,a:n.a},o=t.toRgb(),i=t.toHexString(),l=t.toHex8String(),s=t.toHsv(),a={h:s.h,s:s.s*100,v:s.v*100,a:s.a};return{hsl:{h:r.h,s:r.s,l:r.l,string:this.setLetterCase(`hsl(${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%)`)},hsla:{h:r.h,s:r.s,l:r.l,a:r.a,string:this.setLetterCase(`hsla(${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%, ${r.a.toFixed(2).toString()})`)},hsv:{h:a.h,s:a.s,v:a.v,string:this.setLetterCase(`hsv(${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.v)}%)`)},hsva:{h:a.h,s:a.s,v:a.v,a:a.a,string:this.setLetterCase(`hsva(${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.v)}%, ${a.a.toFixed(2).toString()})`)},rgb:{r:o.r,g:o.g,b:o.b,string:this.setLetterCase(`rgb(${Math.round(o.r)}, ${Math.round(o.g)}, ${Math.round(o.b)})`)},rgba:{r:o.r,g:o.g,b:o.b,a:o.a,string:this.setLetterCase(`rgba(${Math.round(o.r)}, ${Math.round(o.g)}, ${Math.round(o.b)}, ${o.a.toFixed(2).toString()})`)},hex:this.setLetterCase(i),hexa:this.setLetterCase(l)}}setColor(e){const t=this.parseColor(e);return t===null?!1:(this.hue=t.hsva.h,this.saturation=t.hsva.s,this.brightness=t.hsva.v,this.alpha=this.opacity?t.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(e){return typeof e!="string"?"":this.uppercase?e.toUpperCase():e.toLowerCase()}async syncValues(){const e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);e!==null&&(this.format==="hsl"?this.inputValue=this.opacity?e.hsla.string:e.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?e.rgba.string:e.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?e.hsva.string:e.hsv.string:this.inputValue=this.opacity?e.hexa:e.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){if(!Jc)return;new EyeDropper().open().then(t=>{const n=this.value;this.setColor(t.sRGBHex),this.value!==n&&(this.emit("sl-change"),this.emit("sl-input"))}).catch(()=>{})}selectSwatch(e){const t=this.value;this.disabled||(this.setColor(e),this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")))}getHexString(e,t,n,r=100){const o=new Zc(`hsva(${e}, ${t}, ${n}, ${r/100})`);return o.isValid?o.toHex8String():""}stopNestedEventPropagation(e){e.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(e,t){if(this.isEmpty=!t,t||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){const n=this.parseColor(t);n!==null?(this.inputValue=this.value,this.hue=n.hsva.h,this.saturation=n.hsva.s,this.brightness=n.hsva.v,this.alpha=n.hsva.a*100,this.syncValues()):this.inputValue=e??""}}focus(e){this.inline?this.base.focus(e):this.trigger.focus(e)}blur(){var e;const t=this.inline?this.base:this.trigger;this.hasFocus&&(t.focus({preventScroll:!0}),t.blur()),(e=this.dropdown)!=null&&e.open&&this.dropdown.hide()}getFormattedValue(e="hex"){const t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(t===null)return"";switch(e){case"hex":return t.hex;case"hexa":return t.hexa;case"rgb":return t.rgb.string;case"rgba":return t.rgba.string;case"hsl":return t.hsl.string;case"hsla":return t.hsla.string;case"hsv":return t.hsv.string;case"hsva":return t.hsva.string;default:return""}}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.inline&&!this.validity.valid?(this.dropdown.show(),this.addEventListener("sl-after-show",()=>this.input.reportValidity(),{once:!0}),this.disabled||this.formControlController.emitInvalidEvent(),!1):this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.saturation,t=100-this.brightness,n=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(o=>o.trim()!==""),r=G`
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
          style=${It({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${Fe({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${It({top:`${t}%`,left:`${e}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
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
                style=${It({left:`${this.hue===0?0:100/(360/this.hue)}%`})}
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
                      style=${It({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="color-picker__slider-handle"
                      style=${It({left:`${this.alpha}%`})}
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
            style=${It({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
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
            ${Jc?G`
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
                        style=${It({backgroundColor:i.hexa})}
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
          style=${It({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${r}
      </sl-dropdown>
    `}};B.styles=k0;B.dependencies={"sl-button-group":Ao,"sl-button":W,"sl-dropdown":Te,"sl-icon":Be,"sl-input":O,"sl-visually-hidden":Tp};f([re('[part~="base"]')],B.prototype,"base",2);f([re('[part~="input"]')],B.prototype,"input",2);f([re(".color-dropdown")],B.prototype,"dropdown",2);f([re('[part~="preview"]')],B.prototype,"previewButton",2);f([re('[part~="trigger"]')],B.prototype,"trigger",2);f([fe()],B.prototype,"hasFocus",2);f([fe()],B.prototype,"isDraggingGridHandle",2);f([fe()],B.prototype,"isEmpty",2);f([fe()],B.prototype,"inputValue",2);f([fe()],B.prototype,"hue",2);f([fe()],B.prototype,"saturation",2);f([fe()],B.prototype,"brightness",2);f([fe()],B.prototype,"alpha",2);f([y()],B.prototype,"value",2);f([ou()],B.prototype,"defaultValue",2);f([y()],B.prototype,"label",2);f([y()],B.prototype,"format",2);f([y({type:Boolean,reflect:!0})],B.prototype,"inline",2);f([y({reflect:!0})],B.prototype,"size",2);f([y({attribute:"no-format-toggle",type:Boolean})],B.prototype,"noFormatToggle",2);f([y()],B.prototype,"name",2);f([y({type:Boolean,reflect:!0})],B.prototype,"disabled",2);f([y({type:Boolean})],B.prototype,"hoist",2);f([y({type:Boolean})],B.prototype,"opacity",2);f([y({type:Boolean})],B.prototype,"uppercase",2);f([y()],B.prototype,"swatches",2);f([y({reflect:!0})],B.prototype,"form",2);f([y({type:Boolean,reflect:!0})],B.prototype,"required",2);f([Ie("format",{waitUntilFirstUpdate:!0})],B.prototype,"handleFormatChange",1);f([Ie("opacity",{waitUntilFirstUpdate:!0})],B.prototype,"handleOpacityChange",1);f([Ie("value")],B.prototype,"handleValueChange",1);var B0="sl-color-picker";B.define("sl-color-picker");var V0=_r({tagName:B0,elementClass:B,react:yr,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlColorPicker"}),j0=V0;function H0(){const[e,t]=We.useState([[[255,0,0],"","",[255,255,255],[0,0,255]]]),[n,r]=We.useState(0),[o,i]=We.useState([[255,0,0],"","",[255,255,255],[0,0,255]]),[l,s]=We.useState(5),[a,u]=We.useState(5);function h($){var S=$.target.files[0],F=new FileReader;F.onload=()=>{let X=ed(F.result);i(X),s(X.length),u(X.length),x(X)},F.readAsText(S)}function d($){let S=$.target.value;const F=new XMLHttpRequest;F.open("GET","./colormap/"+S+".rgb"),F.responseType="text",F.onload=()=>{let X=ed(F.response);i(X),s(X.length),u(X.length),x(X)},F.send()}function g(){let $=[[255,255,255],...o];i($),x($)}function v($){let S=[...o];S.splice($+1,0,""),S[S.length-1]==""&&(S[S.length-1]=[255,255,255]),i(S),l<S.length&&s(S.length),x(S)}function w($){if(o.length==2)return;let S=[...o];S.splice($,1),S[0]==""&&(S[0]=[255,255,255]),S[S.length-1]==""&&(S[S.length-1]=[255,255,255]),i(S),x(S)}function b($,S){let F=[...o];F.splice(S,1,$.target.getFormattedValue("rgb").substr(4).split(")")[0].split(",").map(X=>parseInt(X))),F[0]==""&&(F[0]=[255,255,255]),F[F.length-1]==""&&(F[F.length-1]=[255,255,255]),i(F)}function T($){if($===0||$===o.length-1)return;let S=[...o];S.splice($,1,""),i(S),x(S)}function p($){if($==0)return;let S=[...o];S[$-1]=S.splice($,1,S[$-1])[0],S[0]==""&&(S[0]=[255,255,255]),S[S.length-1]==""&&(S[S.length-1]=[255,255,255]),i(S),x(S)}function c($){if($===o.length-1)return;let S=[...o];S[$+1]=S.splice($,1,S[$+1])[0],S[0]==""&&(S[0]=[255,255,255]),S[S.length-1]==""&&(S[S.length-1]=[255,255,255]),i(S),x(S)}function m($){const S=$.target.value<o.length?a:$.target.value;u($.target.value),s(S)}function _($){const S=$.target.value<o.length?o.length:$.target.value;u(S),s(S)}function x($){const S=[...e.slice(0,n+1),$];t(S),r(S.length-1)}function C(){let $=[...o];x($)}function E(){if(n==0)return;let $=e[n-1];i($),r(n-1)}function z(){if(n==e.length-1)return;let $=e[n+1];i($),r(n+1)}const j=o.map(($,S)=>L.jsx(U0,{rgb:$,rank:S+1,setBlankColor:()=>T(S),swapUp:()=>p(S),swapDown:()=>c(S),changeColor:F=>b(F,S),addColorDown:()=>v(S),delColor:()=>w(S),handleSlBlur:C},S)),le=W0(o,l);return L.jsxs(L.Fragment,{children:[L.jsx(Fv,{color_out_rgb:le}),L.jsx("button",{title:"Undo",onClick:E,children:"↶"}),L.jsx("button",{title:"Redo",onClick:z,children:"↷"}),L.jsx("br",{}),L.jsx("input",{type:"file",accept:".rgb",onChange:$=>{h($)}}),L.jsx(ym,{changeMap:$=>d($)}),L.jsx("hr",{}),L.jsxs("div",{style:{display:"flex",justifyContent:"space-around"},children:[L.jsxs("div",{className:"selector",children:[L.jsx("label",{children:"n_output colors: "}),L.jsx("input",{type:"number",step:"1",value:a,onChange:$=>m($),onBlur:$=>_($),style:{width:"3em"}}),L.jsx("button",{className:"adjust_btn",onClick:g,title:"add color down",children:"▼"}),L.jsx("br",{}),j]}),L.jsx(Ov,{coloroutrgb:le})]})]})}function U0(e){return L.jsxs(L.Fragment,{children:[L.jsxs("span",{style:{display:"inline-block",width:"3em"},children:[e.rank,". "]}),L.jsx(j0,{className:"colorpicker",value:e.rgb==""?"":"rgb("+e.rgb[0]+","+e.rgb[1]+","+e.rgb[2]+")",onSlChange:(t,n)=>e.changeColor(t,n),onSlBlur:e.handleSlBlur}),L.jsx("button",{className:"adjust_btn",onClick:t=>e.setBlankColor(t),title:"set color to blank",children:"#"}),L.jsx("button",{className:"adjust_btn",onClick:t=>e.swapUp(t),title:"swap up",children:"↑"}),L.jsx("button",{className:"adjust_btn",onClick:t=>e.swapDown(t),title:"swap down",children:"↓"}),L.jsx("button",{className:"adjust_btn",onClick:t=>e.addColorDown(t),title:"add color down",children:"▼"}),L.jsx("button",{className:"adjust_btn",onClick:t=>e.delColor(t),title:"delete color",children:"X"}),L.jsx("br",{})]})}function W0(e,t){const n=e.length;t=Math.max(t,n);const r=Q0([n-1,t-1]),o=K0(t-1,n-1)+1,i=(n-1)/r,l=(t-1)/r,s=[],a=[];var u=0;for(let d=0;d<e.length-1;d++)if(e[d+1]){var h=1/l/(d-u+1);for(let g=0;g<l*(d-u+1);g++){const v=e[u][0]+(e[d+1][0]-e[u][0])*h*g,w=e[u][1]+(e[d+1][1]-e[u][1])*h*g,b=e[u][2]+(e[d+1][2]-e[u][2])*h*g;s.push([parseInt(v),parseInt(w),parseInt(b)])}u=d+1}s.push(e[e.length-1]);for(let d=0;d<o;d=d+i)a.push(s[d]);return a}var hu=(e,t)=>t?hu(t,e%t):e,K0=(e,t)=>e/hu(e,t)*t,Q0=e=>hu(Math.max(...e),Math.min(...e));function ed(e){const t=e.split(`
`),n=1e3,r=[];let o=0,i=-1;function l(a){return!isNaN(parseFloat(a))&&isFinite(a)}for(let a=0;a<t.length&&o<n;a++){let u=t[a].trim();u.length===0&&(u="#");const h=u.split(/\s+/);if(h.length>=3){let d=-1,g=-1,v=-1;l(h[0])&&(d=parseFloat(h[0])),l(h[1])&&(g=parseFloat(h[1])),l(h[2])&&(v=parseFloat(h[2]));let w=-1;if(h.length>3&&l(h[3])&&(w=parseFloat(h[3])),d>=0&&g>=0&&v>=0){let b=[d,g,v,w];r.push(b),o++,d>i&&(i=d),g>i&&(i=g),v>i&&(i=v)}}}const s=new Array(o).fill(null).map(()=>[0,0,0,0]);for(let a=0;a<o;a++)s[a]=r[a];if(i<=1)for(let a=0;a<o;a++){s[a][3]=s[a][3]<0?1:s[a][3];for(let u=0;u<3;u++)s[a][u]*=255}else if(i<256)for(let a=0;a<o;a++)s[a][3]=s[a][3]<0?255:s[a][3];else for(let a=0;a<o;a++){s[a][3]=s[a][3]<0?i:s[a][3];for(let u=0;u<3;u++)s[a][u]/=i,s[a][u]*=255}for(let a=0;a<o;a++)for(let u=0;u<3;u++)s[a][u]=Math.round(s[a][u]);return s}os.createRoot(document.getElementById("root")).render(L.jsx(cd.StrictMode,{children:L.jsx(H0,{})}));
