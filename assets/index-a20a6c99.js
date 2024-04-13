function Kp(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function Qp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var nd={exports:{}},Ki={},rd={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xo=Symbol.for("react.element"),Yp=Symbol.for("react.portal"),qp=Symbol.for("react.fragment"),Gp=Symbol.for("react.strict_mode"),Xp=Symbol.for("react.profiler"),Zp=Symbol.for("react.provider"),Jp=Symbol.for("react.context"),ef=Symbol.for("react.forward_ref"),tf=Symbol.for("react.suspense"),nf=Symbol.for("react.memo"),rf=Symbol.for("react.lazy"),hu=Symbol.iterator;function of(e){return e===null||typeof e!="object"?null:(e=hu&&e[hu]||e["@@iterator"],typeof e=="function"?e:null)}var od={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},id=Object.assign,ld={};function vr(e,t,n){this.props=e,this.context=t,this.refs=ld,this.updater=n||od}vr.prototype.isReactComponent={};vr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};vr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function sd(){}sd.prototype=vr.prototype;function ta(e,t,n){this.props=e,this.context=t,this.refs=ld,this.updater=n||od}var na=ta.prototype=new sd;na.constructor=ta;id(na,vr.prototype);na.isPureReactComponent=!0;var pu=Array.isArray,ad=Object.prototype.hasOwnProperty,ra={current:null},ud={key:!0,ref:!0,__self:!0,__source:!0};function cd(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)ad.call(t,r)&&!ud.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var a=Array(s),u=0;u<s;u++)a[u]=arguments[u+2];o.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:xo,type:e,key:i,ref:l,props:o,_owner:ra.current}}function lf(e,t){return{$$typeof:xo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function oa(e){return typeof e=="object"&&e!==null&&e.$$typeof===xo}function sf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var fu=/\/+/g;function gl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?sf(""+e.key):t.toString(36)}function ti(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case xo:case Yp:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+gl(l,0):r,pu(o)?(n="",e!=null&&(n=e.replace(fu,"$&/")+"/"),ti(o,t,n,"",function(u){return u})):o!=null&&(oa(o)&&(o=lf(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(fu,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",pu(e))for(var s=0;s<e.length;s++){i=e[s];var a=r+gl(i,s);l+=ti(i,t,n,a,o)}else if(a=of(e),typeof a=="function")for(e=a.call(e),s=0;!(i=e.next()).done;)i=i.value,a=r+gl(i,s++),l+=ti(i,t,n,a,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function No(e,t,n){if(e==null)return e;var r=[],o=0;return ti(e,r,"","",function(i){return t.call(n,i,o++)}),r}function af(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var $e={current:null},ni={transition:null},uf={ReactCurrentDispatcher:$e,ReactCurrentBatchConfig:ni,ReactCurrentOwner:ra};I.Children={map:No,forEach:function(e,t,n){No(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return No(e,function(){t++}),t},toArray:function(e){return No(e,function(t){return t})||[]},only:function(e){if(!oa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Component=vr;I.Fragment=qp;I.Profiler=Xp;I.PureComponent=ta;I.StrictMode=Gp;I.Suspense=tf;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uf;I.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=id({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=ra.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)ad.call(t,a)&&!ud.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var u=0;u<a;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:xo,type:e.type,key:o,ref:i,props:r,_owner:l}};I.createContext=function(e){return e={$$typeof:Jp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Zp,_context:e},e.Consumer=e};I.createElement=cd;I.createFactory=function(e){var t=cd.bind(null,e);return t.type=e,t};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:ef,render:e}};I.isValidElement=oa;I.lazy=function(e){return{$$typeof:rf,_payload:{_status:-1,_result:e},_init:af}};I.memo=function(e,t){return{$$typeof:nf,type:e,compare:t===void 0?null:t}};I.startTransition=function(e){var t=ni.transition;ni.transition={};try{e()}finally{ni.transition=t}};I.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};I.useCallback=function(e,t){return $e.current.useCallback(e,t)};I.useContext=function(e){return $e.current.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e){return $e.current.useDeferredValue(e)};I.useEffect=function(e,t){return $e.current.useEffect(e,t)};I.useId=function(){return $e.current.useId()};I.useImperativeHandle=function(e,t,n){return $e.current.useImperativeHandle(e,t,n)};I.useInsertionEffect=function(e,t){return $e.current.useInsertionEffect(e,t)};I.useLayoutEffect=function(e,t){return $e.current.useLayoutEffect(e,t)};I.useMemo=function(e,t){return $e.current.useMemo(e,t)};I.useReducer=function(e,t,n){return $e.current.useReducer(e,t,n)};I.useRef=function(e){return $e.current.useRef(e)};I.useState=function(e){return $e.current.useState(e)};I.useSyncExternalStore=function(e,t,n){return $e.current.useSyncExternalStore(e,t,n)};I.useTransition=function(){return $e.current.useTransition()};I.version="18.2.0";rd.exports=I;var je=rd.exports;const dd=Qp(je),ia=Kp({__proto__:null,default:dd},[je]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cf=je,df=Symbol.for("react.element"),hf=Symbol.for("react.fragment"),pf=Object.prototype.hasOwnProperty,ff=cf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,gf={key:!0,ref:!0,__self:!0,__source:!0};function hd(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)pf.call(t,r)&&!gf.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:df,type:e,key:i,ref:l,props:o,_owner:ff.current}}Ki.Fragment=hf;Ki.jsx=hd;Ki.jsxs=hd;nd.exports=Ki;var L=nd.exports,es={},pd={exports:{}},Ye={},fd={exports:{}},gd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,M){var D=z.length;z.push(M);e:for(;0<D;){var oe=D-1>>>1,de=z[oe];if(0<o(de,M))z[oe]=M,z[D]=de,D=oe;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var M=z[0],D=z.pop();if(D!==M){z[0]=D;e:for(var oe=0,de=z.length,To=de>>>1;oe<To;){var hn=2*(oe+1)-1,fl=z[hn],pn=hn+1,Lo=z[pn];if(0>o(fl,D))pn<de&&0>o(Lo,fl)?(z[oe]=Lo,z[pn]=D,oe=pn):(z[oe]=fl,z[hn]=D,oe=hn);else if(pn<de&&0>o(Lo,D))z[oe]=Lo,z[pn]=D,oe=pn;else break e}}return M}function o(z,M){var D=z.sortIndex-M.sortIndex;return D!==0?D:z.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var a=[],u=[],h=1,d=null,f=3,v=!1,y=!1,b=!1,T=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(z){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=z)r(u),M.sortIndex=M.expirationTime,t(a,M);else break;M=n(u)}}function _(z){if(b=!1,m(z),!y)if(n(a)!==null)y=!0,Pe(x);else{var M=n(u);M!==null&&Fe(_,M.startTime-z)}}function x(z,M){y=!1,b&&(b=!1,p(A),A=-1),v=!0;var D=f;try{for(m(M),d=n(a);d!==null&&(!(d.expirationTime>M)||z&&!le());){var oe=d.callback;if(typeof oe=="function"){d.callback=null,f=d.priorityLevel;var de=oe(d.expirationTime<=M);M=e.unstable_now(),typeof de=="function"?d.callback=de:d===n(a)&&r(a),m(M)}else r(a);d=n(a)}if(d!==null)var To=!0;else{var hn=n(u);hn!==null&&Fe(_,hn.startTime-M),To=!1}return To}finally{d=null,f=D,v=!1}}var C=!1,E=null,A=-1,j=5,R=-1;function le(){return!(e.unstable_now()-R<j)}function $(){if(E!==null){var z=e.unstable_now();R=z;var M=!0;try{M=E(!0,z)}finally{M?S():(C=!1,E=null)}}else C=!1}var S;if(typeof c=="function")S=function(){c($)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,G=F.port2;F.port1.onmessage=$,S=function(){G.postMessage(null)}}else S=function(){T($,0)};function Pe(z){E=z,C||(C=!0,S())}function Fe(z,M){A=T(function(){z(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,Pe(x))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(z){switch(f){case 1:case 2:case 3:var M=3;break;default:M=f}var D=f;f=M;try{return z()}finally{f=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,M){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var D=f;f=z;try{return M()}finally{f=D}},e.unstable_scheduleCallback=function(z,M,D){var oe=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?oe+D:oe):D=oe,z){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=D+de,z={id:h++,callback:M,priorityLevel:z,startTime:D,expirationTime:de,sortIndex:-1},D>oe?(z.sortIndex=D,t(u,z),n(a)===null&&z===n(u)&&(b?(p(A),A=-1):b=!0,Fe(_,D-oe))):(z.sortIndex=de,t(a,z),y||v||(y=!0,Pe(x))),z},e.unstable_shouldYield=le,e.unstable_wrapCallback=function(z){var M=f;return function(){var D=f;f=M;try{return z.apply(this,arguments)}finally{f=D}}}})(gd);fd.exports=gd;var mf=fd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var md=je,Qe=mf;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var vd=new Set,eo={};function Rn(e,t){sr(e,t),sr(e+"Capture",t)}function sr(e,t){for(eo[e]=t,e=0;e<t.length;e++)vd.add(t[e])}var zt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ts=Object.prototype.hasOwnProperty,vf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,gu={},mu={};function yf(e){return ts.call(mu,e)?!0:ts.call(gu,e)?!1:vf.test(e)?mu[e]=!0:(gu[e]=!0,!1)}function wf(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function bf(e,t,n,r){if(t===null||typeof t>"u"||wf(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ae(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var ye={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ye[e]=new Ae(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ye[t]=new Ae(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ye[e]=new Ae(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ye[e]=new Ae(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ye[e]=new Ae(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ye[e]=new Ae(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ye[e]=new Ae(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ye[e]=new Ae(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ye[e]=new Ae(e,5,!1,e.toLowerCase(),null,!1,!1)});var la=/[\-:]([a-z])/g;function sa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(la,sa);ye[t]=new Ae(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(la,sa);ye[t]=new Ae(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(la,sa);ye[t]=new Ae(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ye[e]=new Ae(e,1,!1,e.toLowerCase(),null,!1,!1)});ye.xlinkHref=new Ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ye[e]=new Ae(e,1,!1,e.toLowerCase(),null,!0,!0)});function aa(e,t,n,r){var o=ye.hasOwnProperty(t)?ye[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(bf(t,n,o,r)&&(n=null),r||o===null?yf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Rt=md.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ro=Symbol.for("react.element"),Vn=Symbol.for("react.portal"),Bn=Symbol.for("react.fragment"),ua=Symbol.for("react.strict_mode"),ns=Symbol.for("react.profiler"),yd=Symbol.for("react.provider"),wd=Symbol.for("react.context"),ca=Symbol.for("react.forward_ref"),rs=Symbol.for("react.suspense"),os=Symbol.for("react.suspense_list"),da=Symbol.for("react.memo"),Ft=Symbol.for("react.lazy"),bd=Symbol.for("react.offscreen"),vu=Symbol.iterator;function kr(e){return e===null||typeof e!="object"?null:(e=vu&&e[vu]||e["@@iterator"],typeof e=="function"?e:null)}var te=Object.assign,ml;function Fr(e){if(ml===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ml=t&&t[1]||""}return`
`+ml+e}var vl=!1;function yl(e,t){if(!e||vl)return"";vl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,s=i.length-1;1<=l&&0<=s&&o[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(o[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||o[l]!==i[s]){var a=`
`+o[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=s);break}}}finally{vl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Fr(e):""}function _f(e){switch(e.tag){case 5:return Fr(e.type);case 16:return Fr("Lazy");case 13:return Fr("Suspense");case 19:return Fr("SuspenseList");case 0:case 2:case 15:return e=yl(e.type,!1),e;case 11:return e=yl(e.type.render,!1),e;case 1:return e=yl(e.type,!0),e;default:return""}}function is(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Bn:return"Fragment";case Vn:return"Portal";case ns:return"Profiler";case ua:return"StrictMode";case rs:return"Suspense";case os:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case wd:return(e.displayName||"Context")+".Consumer";case yd:return(e._context.displayName||"Context")+".Provider";case ca:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case da:return t=e.displayName||null,t!==null?t:is(e.type)||"Memo";case Ft:t=e._payload,e=e._init;try{return is(e(t))}catch{}}return null}function xf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return is(t);case 8:return t===ua?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function nn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _d(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function kf(e){var t=_d(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Mo(e){e._valueTracker||(e._valueTracker=kf(e))}function xd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=_d(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function mi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ls(e,t){var n=t.checked;return te({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function yu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=nn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function kd(e,t){t=t.checked,t!=null&&aa(e,"checked",t,!1)}function ss(e,t){kd(e,t);var n=nn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?as(e,t.type,n):t.hasOwnProperty("defaultValue")&&as(e,t.type,nn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function wu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function as(e,t,n){(t!=="number"||mi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ir=Array.isArray;function er(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+nn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function us(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return te({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function bu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(Ir(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:nn(n)}}function Sd(e,t){var n=nn(t.value),r=nn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function _u(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Cd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function cs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Cd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Oo,Ed=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Oo=Oo||document.createElement("div"),Oo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Oo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function to(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var jr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Sf=["Webkit","ms","Moz","O"];Object.keys(jr).forEach(function(e){Sf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),jr[t]=jr[e]})});function $d(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||jr.hasOwnProperty(e)&&jr[e]?(""+t).trim():t+"px"}function Ad(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=$d(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Cf=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ds(e,t){if(t){if(Cf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function hs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ps=null;function ha(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fs=null,tr=null,nr=null;function xu(e){if(e=Co(e)){if(typeof fs!="function")throw Error(k(280));var t=e.stateNode;t&&(t=Xi(t),fs(e.stateNode,e.type,t))}}function zd(e){tr?nr?nr.push(e):nr=[e]:tr=e}function Pd(){if(tr){var e=tr,t=nr;if(nr=tr=null,xu(e),t)for(e=0;e<t.length;e++)xu(t[e])}}function Td(e,t){return e(t)}function Ld(){}var wl=!1;function Nd(e,t,n){if(wl)return e(t,n);wl=!0;try{return Td(e,t,n)}finally{wl=!1,(tr!==null||nr!==null)&&(Ld(),Pd())}}function no(e,t){var n=e.stateNode;if(n===null)return null;var r=Xi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var gs=!1;if(zt)try{var Sr={};Object.defineProperty(Sr,"passive",{get:function(){gs=!0}}),window.addEventListener("test",Sr,Sr),window.removeEventListener("test",Sr,Sr)}catch{gs=!1}function Ef(e,t,n,r,o,i,l,s,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(h){this.onError(h)}}var Hr=!1,vi=null,yi=!1,ms=null,$f={onError:function(e){Hr=!0,vi=e}};function Af(e,t,n,r,o,i,l,s,a){Hr=!1,vi=null,Ef.apply($f,arguments)}function zf(e,t,n,r,o,i,l,s,a){if(Af.apply(this,arguments),Hr){if(Hr){var u=vi;Hr=!1,vi=null}else throw Error(k(198));yi||(yi=!0,ms=u)}}function Mn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Rd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ku(e){if(Mn(e)!==e)throw Error(k(188))}function Pf(e){var t=e.alternate;if(!t){if(t=Mn(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return ku(o),e;if(i===r)return ku(o),t;i=i.sibling}throw Error(k(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function Md(e){return e=Pf(e),e!==null?Od(e):null}function Od(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Od(e);if(t!==null)return t;e=e.sibling}return null}var Dd=Qe.unstable_scheduleCallback,Su=Qe.unstable_cancelCallback,Tf=Qe.unstable_shouldYield,Lf=Qe.unstable_requestPaint,ie=Qe.unstable_now,Nf=Qe.unstable_getCurrentPriorityLevel,pa=Qe.unstable_ImmediatePriority,Fd=Qe.unstable_UserBlockingPriority,wi=Qe.unstable_NormalPriority,Rf=Qe.unstable_LowPriority,Id=Qe.unstable_IdlePriority,Qi=null,bt=null;function Mf(e){if(bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(Qi,e,void 0,(e.current.flags&128)===128)}catch{}}var pt=Math.clz32?Math.clz32:Ff,Of=Math.log,Df=Math.LN2;function Ff(e){return e>>>=0,e===0?32:31-(Of(e)/Df|0)|0}var Do=64,Fo=4194304;function Vr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function bi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~o;s!==0?r=Vr(s):(i&=l,i!==0&&(r=Vr(i)))}else l=n&~o,l!==0?r=Vr(l):i!==0&&(r=Vr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-pt(t),o=1<<n,r|=e[n],t&=~o;return r}function If(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-pt(i),s=1<<l,a=o[l];a===-1?(!(s&n)||s&r)&&(o[l]=If(s,t)):a<=t&&(e.expiredLanes|=s),i&=~s}}function vs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Vd(){var e=Do;return Do<<=1,!(Do&4194240)&&(Do=64),e}function bl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ko(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-pt(t),e[t]=n}function Bf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-pt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function fa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-pt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var U=0;function Bd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var jd,ga,Hd,Ud,Wd,ys=!1,Io=[],Qt=null,Yt=null,qt=null,ro=new Map,oo=new Map,Bt=[],jf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cu(e,t){switch(e){case"focusin":case"focusout":Qt=null;break;case"dragenter":case"dragleave":Yt=null;break;case"mouseover":case"mouseout":qt=null;break;case"pointerover":case"pointerout":ro.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":oo.delete(t.pointerId)}}function Cr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Co(t),t!==null&&ga(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Hf(e,t,n,r,o){switch(t){case"focusin":return Qt=Cr(Qt,e,t,n,r,o),!0;case"dragenter":return Yt=Cr(Yt,e,t,n,r,o),!0;case"mouseover":return qt=Cr(qt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return ro.set(i,Cr(ro.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,oo.set(i,Cr(oo.get(i)||null,e,t,n,r,o)),!0}return!1}function Kd(e){var t=bn(e.target);if(t!==null){var n=Mn(t);if(n!==null){if(t=n.tag,t===13){if(t=Rd(n),t!==null){e.blockedOn=t,Wd(e.priority,function(){Hd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ri(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ws(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ps=r,n.target.dispatchEvent(r),ps=null}else return t=Co(n),t!==null&&ga(t),e.blockedOn=n,!1;t.shift()}return!0}function Eu(e,t,n){ri(e)&&n.delete(t)}function Uf(){ys=!1,Qt!==null&&ri(Qt)&&(Qt=null),Yt!==null&&ri(Yt)&&(Yt=null),qt!==null&&ri(qt)&&(qt=null),ro.forEach(Eu),oo.forEach(Eu)}function Er(e,t){e.blockedOn===t&&(e.blockedOn=null,ys||(ys=!0,Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority,Uf)))}function io(e){function t(o){return Er(o,e)}if(0<Io.length){Er(Io[0],e);for(var n=1;n<Io.length;n++){var r=Io[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Qt!==null&&Er(Qt,e),Yt!==null&&Er(Yt,e),qt!==null&&Er(qt,e),ro.forEach(t),oo.forEach(t),n=0;n<Bt.length;n++)r=Bt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Bt.length&&(n=Bt[0],n.blockedOn===null);)Kd(n),n.blockedOn===null&&Bt.shift()}var rr=Rt.ReactCurrentBatchConfig,_i=!0;function Wf(e,t,n,r){var o=U,i=rr.transition;rr.transition=null;try{U=1,ma(e,t,n,r)}finally{U=o,rr.transition=i}}function Kf(e,t,n,r){var o=U,i=rr.transition;rr.transition=null;try{U=4,ma(e,t,n,r)}finally{U=o,rr.transition=i}}function ma(e,t,n,r){if(_i){var o=ws(e,t,n,r);if(o===null)Pl(e,t,r,xi,n),Cu(e,r);else if(Hf(o,e,t,n,r))r.stopPropagation();else if(Cu(e,r),t&4&&-1<jf.indexOf(e)){for(;o!==null;){var i=Co(o);if(i!==null&&jd(i),i=ws(e,t,n,r),i===null&&Pl(e,t,r,xi,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Pl(e,t,r,null,n)}}var xi=null;function ws(e,t,n,r){if(xi=null,e=ha(r),e=bn(e),e!==null)if(t=Mn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Rd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return xi=e,null}function Qd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Nf()){case pa:return 1;case Fd:return 4;case wi:case Rf:return 16;case Id:return 536870912;default:return 16}default:return 16}}var Ut=null,va=null,oi=null;function Yd(){if(oi)return oi;var e,t=va,n=t.length,r,o="value"in Ut?Ut.value:Ut.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return oi=o.slice(e,1<r?1-r:void 0)}function ii(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Vo(){return!0}function $u(){return!1}function qe(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Vo:$u,this.isPropagationStopped=$u,this}return te(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Vo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Vo)},persist:function(){},isPersistent:Vo}),t}var yr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ya=qe(yr),So=te({},yr,{view:0,detail:0}),Qf=qe(So),_l,xl,$r,Yi=te({},So,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$r&&($r&&e.type==="mousemove"?(_l=e.screenX-$r.screenX,xl=e.screenY-$r.screenY):xl=_l=0,$r=e),_l)},movementY:function(e){return"movementY"in e?e.movementY:xl}}),Au=qe(Yi),Yf=te({},Yi,{dataTransfer:0}),qf=qe(Yf),Gf=te({},So,{relatedTarget:0}),kl=qe(Gf),Xf=te({},yr,{animationName:0,elapsedTime:0,pseudoElement:0}),Zf=qe(Xf),Jf=te({},yr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),eg=qe(Jf),tg=te({},yr,{data:0}),zu=qe(tg),ng={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},og={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ig(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=og[e])?!!t[e]:!1}function wa(){return ig}var lg=te({},So,{key:function(e){if(e.key){var t=ng[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ii(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?rg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wa,charCode:function(e){return e.type==="keypress"?ii(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ii(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),sg=qe(lg),ag=te({},Yi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pu=qe(ag),ug=te({},So,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wa}),cg=qe(ug),dg=te({},yr,{propertyName:0,elapsedTime:0,pseudoElement:0}),hg=qe(dg),pg=te({},Yi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),fg=qe(pg),gg=[9,13,27,32],ba=zt&&"CompositionEvent"in window,Ur=null;zt&&"documentMode"in document&&(Ur=document.documentMode);var mg=zt&&"TextEvent"in window&&!Ur,qd=zt&&(!ba||Ur&&8<Ur&&11>=Ur),Tu=String.fromCharCode(32),Lu=!1;function Gd(e,t){switch(e){case"keyup":return gg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var jn=!1;function vg(e,t){switch(e){case"compositionend":return Xd(t);case"keypress":return t.which!==32?null:(Lu=!0,Tu);case"textInput":return e=t.data,e===Tu&&Lu?null:e;default:return null}}function yg(e,t){if(jn)return e==="compositionend"||!ba&&Gd(e,t)?(e=Yd(),oi=va=Ut=null,jn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return qd&&t.locale!=="ko"?null:t.data;default:return null}}var wg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!wg[e.type]:t==="textarea"}function Zd(e,t,n,r){zd(r),t=ki(t,"onChange"),0<t.length&&(n=new ya("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Wr=null,lo=null;function bg(e){uh(e,0)}function qi(e){var t=Wn(e);if(xd(t))return e}function _g(e,t){if(e==="change")return t}var Jd=!1;if(zt){var Sl;if(zt){var Cl="oninput"in document;if(!Cl){var Ru=document.createElement("div");Ru.setAttribute("oninput","return;"),Cl=typeof Ru.oninput=="function"}Sl=Cl}else Sl=!1;Jd=Sl&&(!document.documentMode||9<document.documentMode)}function Mu(){Wr&&(Wr.detachEvent("onpropertychange",eh),lo=Wr=null)}function eh(e){if(e.propertyName==="value"&&qi(lo)){var t=[];Zd(t,lo,e,ha(e)),Nd(bg,t)}}function xg(e,t,n){e==="focusin"?(Mu(),Wr=t,lo=n,Wr.attachEvent("onpropertychange",eh)):e==="focusout"&&Mu()}function kg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return qi(lo)}function Sg(e,t){if(e==="click")return qi(t)}function Cg(e,t){if(e==="input"||e==="change")return qi(t)}function Eg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var gt=typeof Object.is=="function"?Object.is:Eg;function so(e,t){if(gt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!ts.call(t,o)||!gt(e[o],t[o]))return!1}return!0}function Ou(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Du(e,t){var n=Ou(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ou(n)}}function th(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?th(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function nh(){for(var e=window,t=mi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=mi(e.document)}return t}function _a(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function $g(e){var t=nh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&th(n.ownerDocument.documentElement,n)){if(r!==null&&_a(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Du(n,i);var l=Du(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ag=zt&&"documentMode"in document&&11>=document.documentMode,Hn=null,bs=null,Kr=null,_s=!1;function Fu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_s||Hn==null||Hn!==mi(r)||(r=Hn,"selectionStart"in r&&_a(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Kr&&so(Kr,r)||(Kr=r,r=ki(bs,"onSelect"),0<r.length&&(t=new ya("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Hn)))}function Bo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Un={animationend:Bo("Animation","AnimationEnd"),animationiteration:Bo("Animation","AnimationIteration"),animationstart:Bo("Animation","AnimationStart"),transitionend:Bo("Transition","TransitionEnd")},El={},rh={};zt&&(rh=document.createElement("div").style,"AnimationEvent"in window||(delete Un.animationend.animation,delete Un.animationiteration.animation,delete Un.animationstart.animation),"TransitionEvent"in window||delete Un.transitionend.transition);function Gi(e){if(El[e])return El[e];if(!Un[e])return e;var t=Un[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in rh)return El[e]=t[n];return e}var oh=Gi("animationend"),ih=Gi("animationiteration"),lh=Gi("animationstart"),sh=Gi("transitionend"),ah=new Map,Iu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function un(e,t){ah.set(e,t),Rn(t,[e])}for(var $l=0;$l<Iu.length;$l++){var Al=Iu[$l],zg=Al.toLowerCase(),Pg=Al[0].toUpperCase()+Al.slice(1);un(zg,"on"+Pg)}un(oh,"onAnimationEnd");un(ih,"onAnimationIteration");un(lh,"onAnimationStart");un("dblclick","onDoubleClick");un("focusin","onFocus");un("focusout","onBlur");un(sh,"onTransitionEnd");sr("onMouseEnter",["mouseout","mouseover"]);sr("onMouseLeave",["mouseout","mouseover"]);sr("onPointerEnter",["pointerout","pointerover"]);sr("onPointerLeave",["pointerout","pointerover"]);Rn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Br="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Tg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Br));function Vu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,zf(r,t,void 0,e),e.currentTarget=null}function uh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],a=s.instance,u=s.currentTarget;if(s=s.listener,a!==i&&o.isPropagationStopped())break e;Vu(o,s,u),i=a}else for(l=0;l<r.length;l++){if(s=r[l],a=s.instance,u=s.currentTarget,s=s.listener,a!==i&&o.isPropagationStopped())break e;Vu(o,s,u),i=a}}}if(yi)throw e=ms,yi=!1,ms=null,e}function Y(e,t){var n=t[Es];n===void 0&&(n=t[Es]=new Set);var r=e+"__bubble";n.has(r)||(ch(t,e,2,!1),n.add(r))}function zl(e,t,n){var r=0;t&&(r|=4),ch(n,e,r,t)}var jo="_reactListening"+Math.random().toString(36).slice(2);function ao(e){if(!e[jo]){e[jo]=!0,vd.forEach(function(n){n!=="selectionchange"&&(Tg.has(n)||zl(n,!1,e),zl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[jo]||(t[jo]=!0,zl("selectionchange",!1,t))}}function ch(e,t,n,r){switch(Qd(t)){case 1:var o=Wf;break;case 4:o=Kf;break;default:o=ma}n=o.bind(null,t,n,e),o=void 0,!gs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Pl(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;l=l.return}for(;s!==null;){if(l=bn(s),l===null)return;if(a=l.tag,a===5||a===6){r=i=l;continue e}s=s.parentNode}}r=r.return}Nd(function(){var u=i,h=ha(n),d=[];e:{var f=ah.get(e);if(f!==void 0){var v=ya,y=e;switch(e){case"keypress":if(ii(n)===0)break e;case"keydown":case"keyup":v=sg;break;case"focusin":y="focus",v=kl;break;case"focusout":y="blur",v=kl;break;case"beforeblur":case"afterblur":v=kl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Au;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=qf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=cg;break;case oh:case ih:case lh:v=Zf;break;case sh:v=hg;break;case"scroll":v=Qf;break;case"wheel":v=fg;break;case"copy":case"cut":case"paste":v=eg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Pu}var b=(t&4)!==0,T=!b&&e==="scroll",p=b?f!==null?f+"Capture":null:f;b=[];for(var c=u,m;c!==null;){m=c;var _=m.stateNode;if(m.tag===5&&_!==null&&(m=_,p!==null&&(_=no(c,p),_!=null&&b.push(uo(c,_,m)))),T)break;c=c.return}0<b.length&&(f=new v(f,y,null,n,h),d.push({event:f,listeners:b}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",f&&n!==ps&&(y=n.relatedTarget||n.fromElement)&&(bn(y)||y[Pt]))break e;if((v||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=u,y=y?bn(y):null,y!==null&&(T=Mn(y),y!==T||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=u),v!==y)){if(b=Au,_="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(b=Pu,_="onPointerLeave",p="onPointerEnter",c="pointer"),T=v==null?f:Wn(v),m=y==null?f:Wn(y),f=new b(_,c+"leave",v,n,h),f.target=T,f.relatedTarget=m,_=null,bn(h)===u&&(b=new b(p,c+"enter",y,n,h),b.target=m,b.relatedTarget=T,_=b),T=_,v&&y)t:{for(b=v,p=y,c=0,m=b;m;m=Fn(m))c++;for(m=0,_=p;_;_=Fn(_))m++;for(;0<c-m;)b=Fn(b),c--;for(;0<m-c;)p=Fn(p),m--;for(;c--;){if(b===p||p!==null&&b===p.alternate)break t;b=Fn(b),p=Fn(p)}b=null}else b=null;v!==null&&Bu(d,f,v,b,!1),y!==null&&T!==null&&Bu(d,T,y,b,!0)}}e:{if(f=u?Wn(u):window,v=f.nodeName&&f.nodeName.toLowerCase(),v==="select"||v==="input"&&f.type==="file")var x=_g;else if(Nu(f))if(Jd)x=Cg;else{x=kg;var C=xg}else(v=f.nodeName)&&v.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(x=Sg);if(x&&(x=x(e,u))){Zd(d,x,n,h);break e}C&&C(e,f,u),e==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&as(f,"number",f.value)}switch(C=u?Wn(u):window,e){case"focusin":(Nu(C)||C.contentEditable==="true")&&(Hn=C,bs=u,Kr=null);break;case"focusout":Kr=bs=Hn=null;break;case"mousedown":_s=!0;break;case"contextmenu":case"mouseup":case"dragend":_s=!1,Fu(d,n,h);break;case"selectionchange":if(Ag)break;case"keydown":case"keyup":Fu(d,n,h)}var E;if(ba)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else jn?Gd(e,n)&&(A="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(qd&&n.locale!=="ko"&&(jn||A!=="onCompositionStart"?A==="onCompositionEnd"&&jn&&(E=Yd()):(Ut=h,va="value"in Ut?Ut.value:Ut.textContent,jn=!0)),C=ki(u,A),0<C.length&&(A=new zu(A,e,null,n,h),d.push({event:A,listeners:C}),E?A.data=E:(E=Xd(n),E!==null&&(A.data=E)))),(E=mg?vg(e,n):yg(e,n))&&(u=ki(u,"onBeforeInput"),0<u.length&&(h=new zu("onBeforeInput","beforeinput",null,n,h),d.push({event:h,listeners:u}),h.data=E))}uh(d,t)})}function uo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ki(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=no(e,n),i!=null&&r.unshift(uo(e,i,o)),i=no(e,t),i!=null&&r.push(uo(e,i,o))),e=e.return}return r}function Fn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Bu(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var s=n,a=s.alternate,u=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&u!==null&&(s=u,o?(a=no(n,i),a!=null&&l.unshift(uo(n,a,s))):o||(a=no(n,i),a!=null&&l.push(uo(n,a,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Lg=/\r\n?/g,Ng=/\u0000|\uFFFD/g;function ju(e){return(typeof e=="string"?e:""+e).replace(Lg,`
`).replace(Ng,"")}function Ho(e,t,n){if(t=ju(t),ju(e)!==t&&n)throw Error(k(425))}function Si(){}var xs=null,ks=null;function Ss(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Cs=typeof setTimeout=="function"?setTimeout:void 0,Rg=typeof clearTimeout=="function"?clearTimeout:void 0,Hu=typeof Promise=="function"?Promise:void 0,Mg=typeof queueMicrotask=="function"?queueMicrotask:typeof Hu<"u"?function(e){return Hu.resolve(null).then(e).catch(Og)}:Cs;function Og(e){setTimeout(function(){throw e})}function Tl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),io(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);io(t)}function Gt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Uu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var wr=Math.random().toString(36).slice(2),wt="__reactFiber$"+wr,co="__reactProps$"+wr,Pt="__reactContainer$"+wr,Es="__reactEvents$"+wr,Dg="__reactListeners$"+wr,Fg="__reactHandles$"+wr;function bn(e){var t=e[wt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Pt]||n[wt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Uu(e);e!==null;){if(n=e[wt])return n;e=Uu(e)}return t}e=n,n=e.parentNode}return null}function Co(e){return e=e[wt]||e[Pt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Wn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function Xi(e){return e[co]||null}var $s=[],Kn=-1;function cn(e){return{current:e}}function q(e){0>Kn||(e.current=$s[Kn],$s[Kn]=null,Kn--)}function K(e,t){Kn++,$s[Kn]=e.current,e.current=t}var rn={},xe=cn(rn),Ne=cn(!1),$n=rn;function ar(e,t){var n=e.type.contextTypes;if(!n)return rn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Re(e){return e=e.childContextTypes,e!=null}function Ci(){q(Ne),q(xe)}function Wu(e,t,n){if(xe.current!==rn)throw Error(k(168));K(xe,t),K(Ne,n)}function dh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(k(108,xf(e)||"Unknown",o));return te({},n,r)}function Ei(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||rn,$n=xe.current,K(xe,e),K(Ne,Ne.current),!0}function Ku(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=dh(e,t,$n),r.__reactInternalMemoizedMergedChildContext=e,q(Ne),q(xe),K(xe,e)):q(Ne),K(Ne,n)}var Ct=null,Zi=!1,Ll=!1;function hh(e){Ct===null?Ct=[e]:Ct.push(e)}function Ig(e){Zi=!0,hh(e)}function dn(){if(!Ll&&Ct!==null){Ll=!0;var e=0,t=U;try{var n=Ct;for(U=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ct=null,Zi=!1}catch(o){throw Ct!==null&&(Ct=Ct.slice(e+1)),Dd(pa,dn),o}finally{U=t,Ll=!1}}return null}var Qn=[],Yn=0,$i=null,Ai=0,Ze=[],Je=0,An=null,Et=1,$t="";function gn(e,t){Qn[Yn++]=Ai,Qn[Yn++]=$i,$i=e,Ai=t}function ph(e,t,n){Ze[Je++]=Et,Ze[Je++]=$t,Ze[Je++]=An,An=e;var r=Et;e=$t;var o=32-pt(r)-1;r&=~(1<<o),n+=1;var i=32-pt(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,Et=1<<32-pt(t)+o|n<<o|r,$t=i+e}else Et=1<<i|n<<o|r,$t=e}function xa(e){e.return!==null&&(gn(e,1),ph(e,1,0))}function ka(e){for(;e===$i;)$i=Qn[--Yn],Qn[Yn]=null,Ai=Qn[--Yn],Qn[Yn]=null;for(;e===An;)An=Ze[--Je],Ze[Je]=null,$t=Ze[--Je],Ze[Je]=null,Et=Ze[--Je],Ze[Je]=null}var Ue=null,He=null,Z=!1,ht=null;function fh(e,t){var n=et(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Qu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ue=e,He=Gt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ue=e,He=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=An!==null?{id:Et,overflow:$t}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=et(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ue=e,He=null,!0):!1;default:return!1}}function As(e){return(e.mode&1)!==0&&(e.flags&128)===0}function zs(e){if(Z){var t=He;if(t){var n=t;if(!Qu(e,t)){if(As(e))throw Error(k(418));t=Gt(n.nextSibling);var r=Ue;t&&Qu(e,t)?fh(r,n):(e.flags=e.flags&-4097|2,Z=!1,Ue=e)}}else{if(As(e))throw Error(k(418));e.flags=e.flags&-4097|2,Z=!1,Ue=e}}}function Yu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ue=e}function Uo(e){if(e!==Ue)return!1;if(!Z)return Yu(e),Z=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ss(e.type,e.memoizedProps)),t&&(t=He)){if(As(e))throw gh(),Error(k(418));for(;t;)fh(e,t),t=Gt(t.nextSibling)}if(Yu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){He=Gt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}He=null}}else He=Ue?Gt(e.stateNode.nextSibling):null;return!0}function gh(){for(var e=He;e;)e=Gt(e.nextSibling)}function ur(){He=Ue=null,Z=!1}function Sa(e){ht===null?ht=[e]:ht.push(e)}var Vg=Rt.ReactCurrentBatchConfig;function ct(e,t){if(e&&e.defaultProps){t=te({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var zi=cn(null),Pi=null,qn=null,Ca=null;function Ea(){Ca=qn=Pi=null}function $a(e){var t=zi.current;q(zi),e._currentValue=t}function Ps(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function or(e,t){Pi=e,Ca=qn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Le=!0),e.firstContext=null)}function rt(e){var t=e._currentValue;if(Ca!==e)if(e={context:e,memoizedValue:t,next:null},qn===null){if(Pi===null)throw Error(k(308));qn=e,Pi.dependencies={lanes:0,firstContext:e}}else qn=qn.next=e;return t}var _n=null;function Aa(e){_n===null?_n=[e]:_n.push(e)}function mh(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Aa(t)):(n.next=o.next,o.next=n),t.interleaved=n,Tt(e,r)}function Tt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var It=!1;function za(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function At(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Xt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,B&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Tt(e,n)}return o=r.interleaved,o===null?(t.next=t,Aa(r)):(t.next=o.next,o.next=t),r.interleaved=t,Tt(e,n)}function li(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,fa(e,n)}}function qu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ti(e,t,n,r){var o=e.updateQueue;It=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var a=s,u=a.next;a.next=null,l===null?i=u:l.next=u,l=a;var h=e.alternate;h!==null&&(h=h.updateQueue,s=h.lastBaseUpdate,s!==l&&(s===null?h.firstBaseUpdate=u:s.next=u,h.lastBaseUpdate=a))}if(i!==null){var d=o.baseState;l=0,h=u=a=null,s=i;do{var f=s.lane,v=s.eventTime;if((r&f)===f){h!==null&&(h=h.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var y=e,b=s;switch(f=t,v=n,b.tag){case 1:if(y=b.payload,typeof y=="function"){d=y.call(v,d,f);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=b.payload,f=typeof y=="function"?y.call(v,d,f):y,f==null)break e;d=te({},d,f);break e;case 2:It=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=o.effects,f===null?o.effects=[s]:f.push(s))}else v={eventTime:v,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},h===null?(u=h=v,a=d):h=h.next=v,l|=f;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;f=s,s=f.next,f.next=null,o.lastBaseUpdate=f,o.shared.pending=null}}while(1);if(h===null&&(a=d),o.baseState=a,o.firstBaseUpdate=u,o.lastBaseUpdate=h,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Pn|=l,e.lanes=l,e.memoizedState=d}}function Gu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(k(191,o));o.call(r)}}}var yh=new md.Component().refs;function Ts(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:te({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ji={isMounted:function(e){return(e=e._reactInternals)?Mn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ee(),o=Jt(e),i=At(r,o);i.payload=t,n!=null&&(i.callback=n),t=Xt(e,i,o),t!==null&&(ft(t,e,o,r),li(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ee(),o=Jt(e),i=At(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Xt(e,i,o),t!==null&&(ft(t,e,o,r),li(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ee(),r=Jt(e),o=At(n,r);o.tag=2,t!=null&&(o.callback=t),t=Xt(e,o,r),t!==null&&(ft(t,e,r,n),li(t,e,r))}};function Xu(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!so(n,r)||!so(o,i):!0}function wh(e,t,n){var r=!1,o=rn,i=t.contextType;return typeof i=="object"&&i!==null?i=rt(i):(o=Re(t)?$n:xe.current,r=t.contextTypes,i=(r=r!=null)?ar(e,o):rn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ji,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Zu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ji.enqueueReplaceState(t,t.state,null)}function Ls(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=yh,za(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=rt(i):(i=Re(t)?$n:xe.current,o.context=ar(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ts(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Ji.enqueueReplaceState(o,o.state,null),Ti(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Ar(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var s=o.refs;s===yh&&(s=o.refs={}),l===null?delete s[i]:s[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function Wo(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ju(e){var t=e._init;return t(e._payload)}function bh(e){function t(p,c){if(e){var m=p.deletions;m===null?(p.deletions=[c],p.flags|=16):m.push(c)}}function n(p,c){if(!e)return null;for(;c!==null;)t(p,c),c=c.sibling;return null}function r(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function o(p,c){return p=en(p,c),p.index=0,p.sibling=null,p}function i(p,c,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<c?(p.flags|=2,c):m):(p.flags|=2,c)):(p.flags|=1048576,c)}function l(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,c,m,_){return c===null||c.tag!==6?(c=Il(m,p.mode,_),c.return=p,c):(c=o(c,m),c.return=p,c)}function a(p,c,m,_){var x=m.type;return x===Bn?h(p,c,m.props.children,_,m.key):c!==null&&(c.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Ft&&Ju(x)===c.type)?(_=o(c,m.props),_.ref=Ar(p,c,m),_.return=p,_):(_=hi(m.type,m.key,m.props,null,p.mode,_),_.ref=Ar(p,c,m),_.return=p,_)}function u(p,c,m,_){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=Vl(m,p.mode,_),c.return=p,c):(c=o(c,m.children||[]),c.return=p,c)}function h(p,c,m,_,x){return c===null||c.tag!==7?(c=En(m,p.mode,_,x),c.return=p,c):(c=o(c,m),c.return=p,c)}function d(p,c,m){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Il(""+c,p.mode,m),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Ro:return m=hi(c.type,c.key,c.props,null,p.mode,m),m.ref=Ar(p,null,c),m.return=p,m;case Vn:return c=Vl(c,p.mode,m),c.return=p,c;case Ft:var _=c._init;return d(p,_(c._payload),m)}if(Ir(c)||kr(c))return c=En(c,p.mode,m,null),c.return=p,c;Wo(p,c)}return null}function f(p,c,m,_){var x=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return x!==null?null:s(p,c,""+m,_);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ro:return m.key===x?a(p,c,m,_):null;case Vn:return m.key===x?u(p,c,m,_):null;case Ft:return x=m._init,f(p,c,x(m._payload),_)}if(Ir(m)||kr(m))return x!==null?null:h(p,c,m,_,null);Wo(p,m)}return null}function v(p,c,m,_,x){if(typeof _=="string"&&_!==""||typeof _=="number")return p=p.get(m)||null,s(c,p,""+_,x);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ro:return p=p.get(_.key===null?m:_.key)||null,a(c,p,_,x);case Vn:return p=p.get(_.key===null?m:_.key)||null,u(c,p,_,x);case Ft:var C=_._init;return v(p,c,m,C(_._payload),x)}if(Ir(_)||kr(_))return p=p.get(m)||null,h(c,p,_,x,null);Wo(c,_)}return null}function y(p,c,m,_){for(var x=null,C=null,E=c,A=c=0,j=null;E!==null&&A<m.length;A++){E.index>A?(j=E,E=null):j=E.sibling;var R=f(p,E,m[A],_);if(R===null){E===null&&(E=j);break}e&&E&&R.alternate===null&&t(p,E),c=i(R,c,A),C===null?x=R:C.sibling=R,C=R,E=j}if(A===m.length)return n(p,E),Z&&gn(p,A),x;if(E===null){for(;A<m.length;A++)E=d(p,m[A],_),E!==null&&(c=i(E,c,A),C===null?x=E:C.sibling=E,C=E);return Z&&gn(p,A),x}for(E=r(p,E);A<m.length;A++)j=v(E,p,A,m[A],_),j!==null&&(e&&j.alternate!==null&&E.delete(j.key===null?A:j.key),c=i(j,c,A),C===null?x=j:C.sibling=j,C=j);return e&&E.forEach(function(le){return t(p,le)}),Z&&gn(p,A),x}function b(p,c,m,_){var x=kr(m);if(typeof x!="function")throw Error(k(150));if(m=x.call(m),m==null)throw Error(k(151));for(var C=x=null,E=c,A=c=0,j=null,R=m.next();E!==null&&!R.done;A++,R=m.next()){E.index>A?(j=E,E=null):j=E.sibling;var le=f(p,E,R.value,_);if(le===null){E===null&&(E=j);break}e&&E&&le.alternate===null&&t(p,E),c=i(le,c,A),C===null?x=le:C.sibling=le,C=le,E=j}if(R.done)return n(p,E),Z&&gn(p,A),x;if(E===null){for(;!R.done;A++,R=m.next())R=d(p,R.value,_),R!==null&&(c=i(R,c,A),C===null?x=R:C.sibling=R,C=R);return Z&&gn(p,A),x}for(E=r(p,E);!R.done;A++,R=m.next())R=v(E,p,A,R.value,_),R!==null&&(e&&R.alternate!==null&&E.delete(R.key===null?A:R.key),c=i(R,c,A),C===null?x=R:C.sibling=R,C=R);return e&&E.forEach(function($){return t(p,$)}),Z&&gn(p,A),x}function T(p,c,m,_){if(typeof m=="object"&&m!==null&&m.type===Bn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Ro:e:{for(var x=m.key,C=c;C!==null;){if(C.key===x){if(x=m.type,x===Bn){if(C.tag===7){n(p,C.sibling),c=o(C,m.props.children),c.return=p,p=c;break e}}else if(C.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Ft&&Ju(x)===C.type){n(p,C.sibling),c=o(C,m.props),c.ref=Ar(p,C,m),c.return=p,p=c;break e}n(p,C);break}else t(p,C);C=C.sibling}m.type===Bn?(c=En(m.props.children,p.mode,_,m.key),c.return=p,p=c):(_=hi(m.type,m.key,m.props,null,p.mode,_),_.ref=Ar(p,c,m),_.return=p,p=_)}return l(p);case Vn:e:{for(C=m.key;c!==null;){if(c.key===C)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){n(p,c.sibling),c=o(c,m.children||[]),c.return=p,p=c;break e}else{n(p,c);break}else t(p,c);c=c.sibling}c=Vl(m,p.mode,_),c.return=p,p=c}return l(p);case Ft:return C=m._init,T(p,c,C(m._payload),_)}if(Ir(m))return y(p,c,m,_);if(kr(m))return b(p,c,m,_);Wo(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,c!==null&&c.tag===6?(n(p,c.sibling),c=o(c,m),c.return=p,p=c):(n(p,c),c=Il(m,p.mode,_),c.return=p,p=c),l(p)):n(p,c)}return T}var cr=bh(!0),_h=bh(!1),Eo={},_t=cn(Eo),ho=cn(Eo),po=cn(Eo);function xn(e){if(e===Eo)throw Error(k(174));return e}function Pa(e,t){switch(K(po,t),K(ho,e),K(_t,Eo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:cs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=cs(t,e)}q(_t),K(_t,t)}function dr(){q(_t),q(ho),q(po)}function xh(e){xn(po.current);var t=xn(_t.current),n=cs(t,e.type);t!==n&&(K(ho,e),K(_t,n))}function Ta(e){ho.current===e&&(q(_t),q(ho))}var J=cn(0);function Li(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Nl=[];function La(){for(var e=0;e<Nl.length;e++)Nl[e]._workInProgressVersionPrimary=null;Nl.length=0}var si=Rt.ReactCurrentDispatcher,Rl=Rt.ReactCurrentBatchConfig,zn=0,ee=null,ue=null,he=null,Ni=!1,Qr=!1,fo=0,Bg=0;function we(){throw Error(k(321))}function Na(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!gt(e[n],t[n]))return!1;return!0}function Ra(e,t,n,r,o,i){if(zn=i,ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,si.current=e===null||e.memoizedState===null?Wg:Kg,e=n(r,o),Qr){i=0;do{if(Qr=!1,fo=0,25<=i)throw Error(k(301));i+=1,he=ue=null,t.updateQueue=null,si.current=Qg,e=n(r,o)}while(Qr)}if(si.current=Ri,t=ue!==null&&ue.next!==null,zn=0,he=ue=ee=null,Ni=!1,t)throw Error(k(300));return e}function Ma(){var e=fo!==0;return fo=0,e}function yt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return he===null?ee.memoizedState=he=e:he=he.next=e,he}function ot(){if(ue===null){var e=ee.alternate;e=e!==null?e.memoizedState:null}else e=ue.next;var t=he===null?ee.memoizedState:he.next;if(t!==null)he=t,ue=e;else{if(e===null)throw Error(k(310));ue=e,e={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},he===null?ee.memoizedState=he=e:he=he.next=e}return he}function go(e,t){return typeof t=="function"?t(e):t}function Ml(e){var t=ot(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=ue,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=l=null,a=null,u=i;do{var h=u.lane;if((zn&h)===h)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(s=a=d,l=r):a=a.next=d,ee.lanes|=h,Pn|=h}u=u.next}while(u!==null&&u!==i);a===null?l=r:a.next=s,gt(r,t.memoizedState)||(Le=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,ee.lanes|=i,Pn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ol(e){var t=ot(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);gt(i,t.memoizedState)||(Le=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function kh(){}function Sh(e,t){var n=ee,r=ot(),o=t(),i=!gt(r.memoizedState,o);if(i&&(r.memoizedState=o,Le=!0),r=r.queue,Oa($h.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||he!==null&&he.memoizedState.tag&1){if(n.flags|=2048,mo(9,Eh.bind(null,n,r,o,t),void 0,null),pe===null)throw Error(k(349));zn&30||Ch(n,t,o)}return o}function Ch(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ee.updateQueue,t===null?(t={lastEffect:null,stores:null},ee.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Eh(e,t,n,r){t.value=n,t.getSnapshot=r,Ah(t)&&zh(e)}function $h(e,t,n){return n(function(){Ah(t)&&zh(e)})}function Ah(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!gt(e,n)}catch{return!0}}function zh(e){var t=Tt(e,1);t!==null&&ft(t,e,1,-1)}function ec(e){var t=yt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:go,lastRenderedState:e},t.queue=e,e=e.dispatch=Ug.bind(null,ee,e),[t.memoizedState,e]}function mo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ee.updateQueue,t===null?(t={lastEffect:null,stores:null},ee.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ph(){return ot().memoizedState}function ai(e,t,n,r){var o=yt();ee.flags|=e,o.memoizedState=mo(1|t,n,void 0,r===void 0?null:r)}function el(e,t,n,r){var o=ot();r=r===void 0?null:r;var i=void 0;if(ue!==null){var l=ue.memoizedState;if(i=l.destroy,r!==null&&Na(r,l.deps)){o.memoizedState=mo(t,n,i,r);return}}ee.flags|=e,o.memoizedState=mo(1|t,n,i,r)}function tc(e,t){return ai(8390656,8,e,t)}function Oa(e,t){return el(2048,8,e,t)}function Th(e,t){return el(4,2,e,t)}function Lh(e,t){return el(4,4,e,t)}function Nh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Rh(e,t,n){return n=n!=null?n.concat([e]):null,el(4,4,Nh.bind(null,t,e),n)}function Da(){}function Mh(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Na(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Oh(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Na(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Dh(e,t,n){return zn&21?(gt(n,t)||(n=Vd(),ee.lanes|=n,Pn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Le=!0),e.memoizedState=n)}function jg(e,t){var n=U;U=n!==0&&4>n?n:4,e(!0);var r=Rl.transition;Rl.transition={};try{e(!1),t()}finally{U=n,Rl.transition=r}}function Fh(){return ot().memoizedState}function Hg(e,t,n){var r=Jt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ih(e))Vh(t,n);else if(n=mh(e,t,n,r),n!==null){var o=Ee();ft(n,e,r,o),Bh(n,t,r)}}function Ug(e,t,n){var r=Jt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ih(e))Vh(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,n);if(o.hasEagerState=!0,o.eagerState=s,gt(s,l)){var a=t.interleaved;a===null?(o.next=o,Aa(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=mh(e,t,o,r),n!==null&&(o=Ee(),ft(n,e,r,o),Bh(n,t,r))}}function Ih(e){var t=e.alternate;return e===ee||t!==null&&t===ee}function Vh(e,t){Qr=Ni=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Bh(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,fa(e,n)}}var Ri={readContext:rt,useCallback:we,useContext:we,useEffect:we,useImperativeHandle:we,useInsertionEffect:we,useLayoutEffect:we,useMemo:we,useReducer:we,useRef:we,useState:we,useDebugValue:we,useDeferredValue:we,useTransition:we,useMutableSource:we,useSyncExternalStore:we,useId:we,unstable_isNewReconciler:!1},Wg={readContext:rt,useCallback:function(e,t){return yt().memoizedState=[e,t===void 0?null:t],e},useContext:rt,useEffect:tc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ai(4194308,4,Nh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ai(4194308,4,e,t)},useInsertionEffect:function(e,t){return ai(4,2,e,t)},useMemo:function(e,t){var n=yt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=yt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Hg.bind(null,ee,e),[r.memoizedState,e]},useRef:function(e){var t=yt();return e={current:e},t.memoizedState=e},useState:ec,useDebugValue:Da,useDeferredValue:function(e){return yt().memoizedState=e},useTransition:function(){var e=ec(!1),t=e[0];return e=jg.bind(null,e[1]),yt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ee,o=yt();if(Z){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),pe===null)throw Error(k(349));zn&30||Ch(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,tc($h.bind(null,r,i,e),[e]),r.flags|=2048,mo(9,Eh.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=yt(),t=pe.identifierPrefix;if(Z){var n=$t,r=Et;n=(r&~(1<<32-pt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=fo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Bg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Kg={readContext:rt,useCallback:Mh,useContext:rt,useEffect:Oa,useImperativeHandle:Rh,useInsertionEffect:Th,useLayoutEffect:Lh,useMemo:Oh,useReducer:Ml,useRef:Ph,useState:function(){return Ml(go)},useDebugValue:Da,useDeferredValue:function(e){var t=ot();return Dh(t,ue.memoizedState,e)},useTransition:function(){var e=Ml(go)[0],t=ot().memoizedState;return[e,t]},useMutableSource:kh,useSyncExternalStore:Sh,useId:Fh,unstable_isNewReconciler:!1},Qg={readContext:rt,useCallback:Mh,useContext:rt,useEffect:Oa,useImperativeHandle:Rh,useInsertionEffect:Th,useLayoutEffect:Lh,useMemo:Oh,useReducer:Ol,useRef:Ph,useState:function(){return Ol(go)},useDebugValue:Da,useDeferredValue:function(e){var t=ot();return ue===null?t.memoizedState=e:Dh(t,ue.memoizedState,e)},useTransition:function(){var e=Ol(go)[0],t=ot().memoizedState;return[e,t]},useMutableSource:kh,useSyncExternalStore:Sh,useId:Fh,unstable_isNewReconciler:!1};function hr(e,t){try{var n="",r=t;do n+=_f(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Dl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ns(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Yg=typeof WeakMap=="function"?WeakMap:Map;function jh(e,t,n){n=At(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Oi||(Oi=!0,Hs=r),Ns(e,t)},n}function Hh(e,t,n){n=At(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Ns(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ns(e,t),typeof r!="function"&&(Zt===null?Zt=new Set([this]):Zt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function nc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Yg;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=am.bind(null,e,t,n),t.then(e,e))}function rc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function oc(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=At(-1,1),t.tag=2,Xt(n,t,1))),n.lanes|=1),e)}var qg=Rt.ReactCurrentOwner,Le=!1;function Ce(e,t,n,r){t.child=e===null?_h(t,null,n,r):cr(t,e.child,n,r)}function ic(e,t,n,r,o){n=n.render;var i=t.ref;return or(t,o),r=Ra(e,t,n,r,i,o),n=Ma(),e!==null&&!Le?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Lt(e,t,o)):(Z&&n&&xa(t),t.flags|=1,Ce(e,t,r,o),t.child)}function lc(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Wa(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Uh(e,t,i,r,o)):(e=hi(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:so,n(l,r)&&e.ref===t.ref)return Lt(e,t,o)}return t.flags|=1,e=en(i,r),e.ref=t.ref,e.return=t,t.child=e}function Uh(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(so(i,r)&&e.ref===t.ref)if(Le=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Le=!0);else return t.lanes=e.lanes,Lt(e,t,o)}return Rs(e,t,n,r,o)}function Wh(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},K(Xn,Ve),Ve|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,K(Xn,Ve),Ve|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,K(Xn,Ve),Ve|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,K(Xn,Ve),Ve|=r;return Ce(e,t,o,n),t.child}function Kh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Rs(e,t,n,r,o){var i=Re(n)?$n:xe.current;return i=ar(t,i),or(t,o),n=Ra(e,t,n,r,i,o),r=Ma(),e!==null&&!Le?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Lt(e,t,o)):(Z&&r&&xa(t),t.flags|=1,Ce(e,t,n,o),t.child)}function sc(e,t,n,r,o){if(Re(n)){var i=!0;Ei(t)}else i=!1;if(or(t,o),t.stateNode===null)ui(e,t),wh(t,n,r),Ls(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var a=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=rt(u):(u=Re(n)?$n:xe.current,u=ar(t,u));var h=n.getDerivedStateFromProps,d=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";d||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||a!==u)&&Zu(t,l,r,u),It=!1;var f=t.memoizedState;l.state=f,Ti(t,r,l,o),a=t.memoizedState,s!==r||f!==a||Ne.current||It?(typeof h=="function"&&(Ts(t,n,h,r),a=t.memoizedState),(s=It||Xu(t,n,s,r,f,a,u))?(d||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),l.props=r,l.state=a,l.context=u,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,vh(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:ct(t.type,s),l.props=u,d=t.pendingProps,f=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=rt(a):(a=Re(n)?$n:xe.current,a=ar(t,a));var v=n.getDerivedStateFromProps;(h=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==d||f!==a)&&Zu(t,l,r,a),It=!1,f=t.memoizedState,l.state=f,Ti(t,r,l,o);var y=t.memoizedState;s!==d||f!==y||Ne.current||It?(typeof v=="function"&&(Ts(t,n,v,r),y=t.memoizedState),(u=It||Xu(t,n,u,r,f,y,a)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,y,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,y,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),l.props=r,l.state=y,l.context=a,r=u):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Ms(e,t,n,r,i,o)}function Ms(e,t,n,r,o,i){Kh(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&Ku(t,n,!1),Lt(e,t,i);r=t.stateNode,qg.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=cr(t,e.child,null,i),t.child=cr(t,null,s,i)):Ce(e,t,s,i),t.memoizedState=r.state,o&&Ku(t,n,!0),t.child}function Qh(e){var t=e.stateNode;t.pendingContext?Wu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Wu(e,t.context,!1),Pa(e,t.containerInfo)}function ac(e,t,n,r,o){return ur(),Sa(o),t.flags|=256,Ce(e,t,n,r),t.child}var Os={dehydrated:null,treeContext:null,retryLane:0};function Ds(e){return{baseLanes:e,cachePool:null,transitions:null}}function Yh(e,t,n){var r=t.pendingProps,o=J.current,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),K(J,o&1),e===null)return zs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=rl(l,r,0,null),e=En(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ds(n),t.memoizedState=Os,e):Fa(t,l));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return Gg(e,t,l,r,s,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,s=o.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=en(o,a),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=en(s,i):(i=En(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Ds(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Os,r}return i=e.child,e=i.sibling,r=en(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Fa(e,t){return t=rl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ko(e,t,n,r){return r!==null&&Sa(r),cr(t,e.child,null,n),e=Fa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Gg(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=Dl(Error(k(422))),Ko(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=rl({mode:"visible",children:r.children},o,0,null),i=En(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&cr(t,e.child,null,l),t.child.memoizedState=Ds(l),t.memoizedState=Os,i);if(!(t.mode&1))return Ko(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(k(419)),r=Dl(i,r,void 0),Ko(e,t,l,r)}if(s=(l&e.childLanes)!==0,Le||s){if(r=pe,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Tt(e,o),ft(r,e,o,-1))}return Ua(),r=Dl(Error(k(421))),Ko(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=um.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,He=Gt(o.nextSibling),Ue=t,Z=!0,ht=null,e!==null&&(Ze[Je++]=Et,Ze[Je++]=$t,Ze[Je++]=An,Et=e.id,$t=e.overflow,An=t),t=Fa(t,r.children),t.flags|=4096,t)}function uc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ps(e.return,t,n)}function Fl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function qh(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Ce(e,t,r.children,n),r=J.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&uc(e,n,t);else if(e.tag===19)uc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(K(J,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Li(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Fl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Li(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Fl(t,!0,n,null,i);break;case"together":Fl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ui(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Lt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Pn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=en(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=en(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Xg(e,t,n){switch(t.tag){case 3:Qh(t),ur();break;case 5:xh(t);break;case 1:Re(t.type)&&Ei(t);break;case 4:Pa(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;K(zi,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(K(J,J.current&1),t.flags|=128,null):n&t.child.childLanes?Yh(e,t,n):(K(J,J.current&1),e=Lt(e,t,n),e!==null?e.sibling:null);K(J,J.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return qh(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),K(J,J.current),r)break;return null;case 22:case 23:return t.lanes=0,Wh(e,t,n)}return Lt(e,t,n)}var Gh,Fs,Xh,Zh;Gh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Fs=function(){};Xh=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,xn(_t.current);var i=null;switch(n){case"input":o=ls(e,o),r=ls(e,r),i=[];break;case"select":o=te({},o,{value:void 0}),r=te({},r,{value:void 0}),i=[];break;case"textarea":o=us(e,o),r=us(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Si)}ds(n,r);var l;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var s=o[u];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(eo.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var a=r[u];if(s=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&a!==s&&(a!=null||s!=null))if(u==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(i||(i=[]),i.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(i=i||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(eo.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&Y("scroll",e),i||s===a||(i=[])):(i=i||[]).push(u,a))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Zh=function(e,t,n,r){n!==r&&(t.flags|=4)};function zr(e,t){if(!Z)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function be(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Zg(e,t,n){var r=t.pendingProps;switch(ka(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return be(t),null;case 1:return Re(t.type)&&Ci(),be(t),null;case 3:return r=t.stateNode,dr(),q(Ne),q(xe),La(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Uo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ht!==null&&(Ks(ht),ht=null))),Fs(e,t),be(t),null;case 5:Ta(t);var o=xn(po.current);if(n=t.type,e!==null&&t.stateNode!=null)Xh(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return be(t),null}if(e=xn(_t.current),Uo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[wt]=t,r[co]=i,e=(t.mode&1)!==0,n){case"dialog":Y("cancel",r),Y("close",r);break;case"iframe":case"object":case"embed":Y("load",r);break;case"video":case"audio":for(o=0;o<Br.length;o++)Y(Br[o],r);break;case"source":Y("error",r);break;case"img":case"image":case"link":Y("error",r),Y("load",r);break;case"details":Y("toggle",r);break;case"input":yu(r,i),Y("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Y("invalid",r);break;case"textarea":bu(r,i),Y("invalid",r)}ds(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Ho(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Ho(r.textContent,s,e),o=["children",""+s]):eo.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&Y("scroll",r)}switch(n){case"input":Mo(r),wu(r,i,!0);break;case"textarea":Mo(r),_u(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Si)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Cd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[wt]=t,e[co]=r,Gh(e,t,!1,!1),t.stateNode=e;e:{switch(l=hs(n,r),n){case"dialog":Y("cancel",e),Y("close",e),o=r;break;case"iframe":case"object":case"embed":Y("load",e),o=r;break;case"video":case"audio":for(o=0;o<Br.length;o++)Y(Br[o],e);o=r;break;case"source":Y("error",e),o=r;break;case"img":case"image":case"link":Y("error",e),Y("load",e),o=r;break;case"details":Y("toggle",e),o=r;break;case"input":yu(e,r),o=ls(e,r),Y("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=te({},r,{value:void 0}),Y("invalid",e);break;case"textarea":bu(e,r),o=us(e,r),Y("invalid",e);break;default:o=r}ds(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var a=s[i];i==="style"?Ad(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Ed(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&to(e,a):typeof a=="number"&&to(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(eo.hasOwnProperty(i)?a!=null&&i==="onScroll"&&Y("scroll",e):a!=null&&aa(e,i,a,l))}switch(n){case"input":Mo(e),wu(e,r,!1);break;case"textarea":Mo(e),_u(e);break;case"option":r.value!=null&&e.setAttribute("value",""+nn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?er(e,!!r.multiple,i,!1):r.defaultValue!=null&&er(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Si)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return be(t),null;case 6:if(e&&t.stateNode!=null)Zh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=xn(po.current),xn(_t.current),Uo(t)){if(r=t.stateNode,n=t.memoizedProps,r[wt]=t,(i=r.nodeValue!==n)&&(e=Ue,e!==null))switch(e.tag){case 3:Ho(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ho(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[wt]=t,t.stateNode=r}return be(t),null;case 13:if(q(J),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Z&&He!==null&&t.mode&1&&!(t.flags&128))gh(),ur(),t.flags|=98560,i=!1;else if(i=Uo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(k(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(k(317));i[wt]=t}else ur(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;be(t),i=!1}else ht!==null&&(Ks(ht),ht=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||J.current&1?ce===0&&(ce=3):Ua())),t.updateQueue!==null&&(t.flags|=4),be(t),null);case 4:return dr(),Fs(e,t),e===null&&ao(t.stateNode.containerInfo),be(t),null;case 10:return $a(t.type._context),be(t),null;case 17:return Re(t.type)&&Ci(),be(t),null;case 19:if(q(J),i=t.memoizedState,i===null)return be(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)zr(i,!1);else{if(ce!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Li(e),l!==null){for(t.flags|=128,zr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return K(J,J.current&1|2),t.child}e=e.sibling}i.tail!==null&&ie()>pr&&(t.flags|=128,r=!0,zr(i,!1),t.lanes=4194304)}else{if(!r)if(e=Li(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),zr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!Z)return be(t),null}else 2*ie()-i.renderingStartTime>pr&&n!==1073741824&&(t.flags|=128,r=!0,zr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ie(),t.sibling=null,n=J.current,K(J,r?n&1|2:n&1),t):(be(t),null);case 22:case 23:return Ha(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ve&1073741824&&(be(t),t.subtreeFlags&6&&(t.flags|=8192)):be(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function Jg(e,t){switch(ka(t),t.tag){case 1:return Re(t.type)&&Ci(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return dr(),q(Ne),q(xe),La(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ta(t),null;case 13:if(q(J),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));ur()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return q(J),null;case 4:return dr(),null;case 10:return $a(t.type._context),null;case 22:case 23:return Ha(),null;case 24:return null;default:return null}}var Qo=!1,_e=!1,em=typeof WeakSet=="function"?WeakSet:Set,P=null;function Gn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){re(e,t,r)}else n.current=null}function Is(e,t,n){try{n()}catch(r){re(e,t,r)}}var cc=!1;function tm(e,t){if(xs=_i,e=nh(),_a(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,s=-1,a=-1,u=0,h=0,d=e,f=null;t:for(;;){for(var v;d!==n||o!==0&&d.nodeType!==3||(s=l+o),d!==i||r!==0&&d.nodeType!==3||(a=l+r),d.nodeType===3&&(l+=d.nodeValue.length),(v=d.firstChild)!==null;)f=d,d=v;for(;;){if(d===e)break t;if(f===n&&++u===o&&(s=l),f===i&&++h===r&&(a=l),(v=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=v}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(ks={focusedElem:e,selectionRange:n},_i=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var b=y.memoizedProps,T=y.memoizedState,p=t.stateNode,c=p.getSnapshotBeforeUpdate(t.elementType===t.type?b:ct(t.type,b),T);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(_){re(t,t.return,_)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return y=cc,cc=!1,y}function Yr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Is(t,n,i)}o=o.next}while(o!==r)}}function tl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Vs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Jh(e){var t=e.alternate;t!==null&&(e.alternate=null,Jh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[wt],delete t[co],delete t[Es],delete t[Dg],delete t[Fg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ep(e){return e.tag===5||e.tag===3||e.tag===4}function dc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ep(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Bs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Si));else if(r!==4&&(e=e.child,e!==null))for(Bs(e,t,n),e=e.sibling;e!==null;)Bs(e,t,n),e=e.sibling}function js(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(js(e,t,n),e=e.sibling;e!==null;)js(e,t,n),e=e.sibling}var ge=null,dt=!1;function Ot(e,t,n){for(n=n.child;n!==null;)tp(e,t,n),n=n.sibling}function tp(e,t,n){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(Qi,n)}catch{}switch(n.tag){case 5:_e||Gn(n,t);case 6:var r=ge,o=dt;ge=null,Ot(e,t,n),ge=r,dt=o,ge!==null&&(dt?(e=ge,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ge.removeChild(n.stateNode));break;case 18:ge!==null&&(dt?(e=ge,n=n.stateNode,e.nodeType===8?Tl(e.parentNode,n):e.nodeType===1&&Tl(e,n),io(e)):Tl(ge,n.stateNode));break;case 4:r=ge,o=dt,ge=n.stateNode.containerInfo,dt=!0,Ot(e,t,n),ge=r,dt=o;break;case 0:case 11:case 14:case 15:if(!_e&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Is(n,t,l),o=o.next}while(o!==r)}Ot(e,t,n);break;case 1:if(!_e&&(Gn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){re(n,t,s)}Ot(e,t,n);break;case 21:Ot(e,t,n);break;case 22:n.mode&1?(_e=(r=_e)||n.memoizedState!==null,Ot(e,t,n),_e=r):Ot(e,t,n);break;default:Ot(e,t,n)}}function hc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new em),t.forEach(function(r){var o=cm.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function at(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:ge=s.stateNode,dt=!1;break e;case 3:ge=s.stateNode.containerInfo,dt=!0;break e;case 4:ge=s.stateNode.containerInfo,dt=!0;break e}s=s.return}if(ge===null)throw Error(k(160));tp(i,l,o),ge=null,dt=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(u){re(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)np(t,e),t=t.sibling}function np(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(at(t,e),vt(e),r&4){try{Yr(3,e,e.return),tl(3,e)}catch(b){re(e,e.return,b)}try{Yr(5,e,e.return)}catch(b){re(e,e.return,b)}}break;case 1:at(t,e),vt(e),r&512&&n!==null&&Gn(n,n.return);break;case 5:if(at(t,e),vt(e),r&512&&n!==null&&Gn(n,n.return),e.flags&32){var o=e.stateNode;try{to(o,"")}catch(b){re(e,e.return,b)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&kd(o,i),hs(s,l);var u=hs(s,i);for(l=0;l<a.length;l+=2){var h=a[l],d=a[l+1];h==="style"?Ad(o,d):h==="dangerouslySetInnerHTML"?Ed(o,d):h==="children"?to(o,d):aa(o,h,d,u)}switch(s){case"input":ss(o,i);break;case"textarea":Sd(o,i);break;case"select":var f=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?er(o,!!i.multiple,v,!1):f!==!!i.multiple&&(i.defaultValue!=null?er(o,!!i.multiple,i.defaultValue,!0):er(o,!!i.multiple,i.multiple?[]:"",!1))}o[co]=i}catch(b){re(e,e.return,b)}}break;case 6:if(at(t,e),vt(e),r&4){if(e.stateNode===null)throw Error(k(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(b){re(e,e.return,b)}}break;case 3:if(at(t,e),vt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{io(t.containerInfo)}catch(b){re(e,e.return,b)}break;case 4:at(t,e),vt(e);break;case 13:at(t,e),vt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Ba=ie())),r&4&&hc(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(_e=(u=_e)||h,at(t,e),_e=u):at(t,e),vt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!h&&e.mode&1)for(P=e,h=e.child;h!==null;){for(d=P=h;P!==null;){switch(f=P,v=f.child,f.tag){case 0:case 11:case 14:case 15:Yr(4,f,f.return);break;case 1:Gn(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(b){re(r,n,b)}}break;case 5:Gn(f,f.return);break;case 22:if(f.memoizedState!==null){fc(d);continue}}v!==null?(v.return=f,P=v):fc(d)}h=h.sibling}e:for(h=null,d=e;;){if(d.tag===5){if(h===null){h=d;try{o=d.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=d.stateNode,a=d.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=$d("display",l))}catch(b){re(e,e.return,b)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(b){re(e,e.return,b)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:at(t,e),vt(e),r&4&&hc(e);break;case 21:break;default:at(t,e),vt(e)}}function vt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ep(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(to(o,""),r.flags&=-33);var i=dc(e);js(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,s=dc(e);Bs(e,s,l);break;default:throw Error(k(161))}}catch(a){re(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function nm(e,t,n){P=e,rp(e)}function rp(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var o=P,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||Qo;if(!l){var s=o.alternate,a=s!==null&&s.memoizedState!==null||_e;s=Qo;var u=_e;if(Qo=l,(_e=a)&&!u)for(P=o;P!==null;)l=P,a=l.child,l.tag===22&&l.memoizedState!==null?gc(o):a!==null?(a.return=l,P=a):gc(o);for(;i!==null;)P=i,rp(i),i=i.sibling;P=o,Qo=s,_e=u}pc(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,P=i):pc(e)}}function pc(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:_e||tl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!_e)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:ct(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Gu(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Gu(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&io(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}_e||t.flags&512&&Vs(t)}catch(f){re(t,t.return,f)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function fc(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function gc(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{tl(4,t)}catch(a){re(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){re(t,o,a)}}var i=t.return;try{Vs(t)}catch(a){re(t,i,a)}break;case 5:var l=t.return;try{Vs(t)}catch(a){re(t,l,a)}}}catch(a){re(t,t.return,a)}if(t===e){P=null;break}var s=t.sibling;if(s!==null){s.return=t.return,P=s;break}P=t.return}}var rm=Math.ceil,Mi=Rt.ReactCurrentDispatcher,Ia=Rt.ReactCurrentOwner,nt=Rt.ReactCurrentBatchConfig,B=0,pe=null,ae=null,me=0,Ve=0,Xn=cn(0),ce=0,vo=null,Pn=0,nl=0,Va=0,qr=null,Te=null,Ba=0,pr=1/0,St=null,Oi=!1,Hs=null,Zt=null,Yo=!1,Wt=null,Di=0,Gr=0,Us=null,ci=-1,di=0;function Ee(){return B&6?ie():ci!==-1?ci:ci=ie()}function Jt(e){return e.mode&1?B&2&&me!==0?me&-me:Vg.transition!==null?(di===0&&(di=Vd()),di):(e=U,e!==0||(e=window.event,e=e===void 0?16:Qd(e.type)),e):1}function ft(e,t,n,r){if(50<Gr)throw Gr=0,Us=null,Error(k(185));ko(e,n,r),(!(B&2)||e!==pe)&&(e===pe&&(!(B&2)&&(nl|=n),ce===4&&jt(e,me)),Me(e,r),n===1&&B===0&&!(t.mode&1)&&(pr=ie()+500,Zi&&dn()))}function Me(e,t){var n=e.callbackNode;Vf(e,t);var r=bi(e,e===pe?me:0);if(r===0)n!==null&&Su(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Su(n),t===1)e.tag===0?Ig(mc.bind(null,e)):hh(mc.bind(null,e)),Mg(function(){!(B&6)&&dn()}),n=null;else{switch(Bd(r)){case 1:n=pa;break;case 4:n=Fd;break;case 16:n=wi;break;case 536870912:n=Id;break;default:n=wi}n=dp(n,op.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function op(e,t){if(ci=-1,di=0,B&6)throw Error(k(327));var n=e.callbackNode;if(ir()&&e.callbackNode!==n)return null;var r=bi(e,e===pe?me:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Fi(e,r);else{t=r;var o=B;B|=2;var i=lp();(pe!==e||me!==t)&&(St=null,pr=ie()+500,Cn(e,t));do try{lm();break}catch(s){ip(e,s)}while(1);Ea(),Mi.current=i,B=o,ae!==null?t=0:(pe=null,me=0,t=ce)}if(t!==0){if(t===2&&(o=vs(e),o!==0&&(r=o,t=Ws(e,o))),t===1)throw n=vo,Cn(e,0),jt(e,r),Me(e,ie()),n;if(t===6)jt(e,r);else{if(o=e.current.alternate,!(r&30)&&!om(o)&&(t=Fi(e,r),t===2&&(i=vs(e),i!==0&&(r=i,t=Ws(e,i))),t===1))throw n=vo,Cn(e,0),jt(e,r),Me(e,ie()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:mn(e,Te,St);break;case 3:if(jt(e,r),(r&130023424)===r&&(t=Ba+500-ie(),10<t)){if(bi(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ee(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Cs(mn.bind(null,e,Te,St),t);break}mn(e,Te,St);break;case 4:if(jt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-pt(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*rm(r/1960))-r,10<r){e.timeoutHandle=Cs(mn.bind(null,e,Te,St),r);break}mn(e,Te,St);break;case 5:mn(e,Te,St);break;default:throw Error(k(329))}}}return Me(e,ie()),e.callbackNode===n?op.bind(null,e):null}function Ws(e,t){var n=qr;return e.current.memoizedState.isDehydrated&&(Cn(e,t).flags|=256),e=Fi(e,t),e!==2&&(t=Te,Te=n,t!==null&&Ks(t)),e}function Ks(e){Te===null?Te=e:Te.push.apply(Te,e)}function om(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!gt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function jt(e,t){for(t&=~Va,t&=~nl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-pt(t),r=1<<n;e[n]=-1,t&=~r}}function mc(e){if(B&6)throw Error(k(327));ir();var t=bi(e,0);if(!(t&1))return Me(e,ie()),null;var n=Fi(e,t);if(e.tag!==0&&n===2){var r=vs(e);r!==0&&(t=r,n=Ws(e,r))}if(n===1)throw n=vo,Cn(e,0),jt(e,t),Me(e,ie()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,mn(e,Te,St),Me(e,ie()),null}function ja(e,t){var n=B;B|=1;try{return e(t)}finally{B=n,B===0&&(pr=ie()+500,Zi&&dn())}}function Tn(e){Wt!==null&&Wt.tag===0&&!(B&6)&&ir();var t=B;B|=1;var n=nt.transition,r=U;try{if(nt.transition=null,U=1,e)return e()}finally{U=r,nt.transition=n,B=t,!(B&6)&&dn()}}function Ha(){Ve=Xn.current,q(Xn)}function Cn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Rg(n)),ae!==null)for(n=ae.return;n!==null;){var r=n;switch(ka(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ci();break;case 3:dr(),q(Ne),q(xe),La();break;case 5:Ta(r);break;case 4:dr();break;case 13:q(J);break;case 19:q(J);break;case 10:$a(r.type._context);break;case 22:case 23:Ha()}n=n.return}if(pe=e,ae=e=en(e.current,null),me=Ve=t,ce=0,vo=null,Va=nl=Pn=0,Te=qr=null,_n!==null){for(t=0;t<_n.length;t++)if(n=_n[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}_n=null}return e}function ip(e,t){do{var n=ae;try{if(Ea(),si.current=Ri,Ni){for(var r=ee.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Ni=!1}if(zn=0,he=ue=ee=null,Qr=!1,fo=0,Ia.current=null,n===null||n.return===null){ce=1,vo=t,ae=null;break}e:{var i=e,l=n.return,s=n,a=t;if(t=me,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,h=s,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var v=rc(l);if(v!==null){v.flags&=-257,oc(v,l,s,i,t),v.mode&1&&nc(i,u,t),t=v,a=u;var y=t.updateQueue;if(y===null){var b=new Set;b.add(a),t.updateQueue=b}else y.add(a);break e}else{if(!(t&1)){nc(i,u,t),Ua();break e}a=Error(k(426))}}else if(Z&&s.mode&1){var T=rc(l);if(T!==null){!(T.flags&65536)&&(T.flags|=256),oc(T,l,s,i,t),Sa(hr(a,s));break e}}i=a=hr(a,s),ce!==4&&(ce=2),qr===null?qr=[i]:qr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var p=jh(i,a,t);qu(i,p);break e;case 1:s=a;var c=i.type,m=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Zt===null||!Zt.has(m)))){i.flags|=65536,t&=-t,i.lanes|=t;var _=Hh(i,s,t);qu(i,_);break e}}i=i.return}while(i!==null)}ap(n)}catch(x){t=x,ae===n&&n!==null&&(ae=n=n.return);continue}break}while(1)}function lp(){var e=Mi.current;return Mi.current=Ri,e===null?Ri:e}function Ua(){(ce===0||ce===3||ce===2)&&(ce=4),pe===null||!(Pn&268435455)&&!(nl&268435455)||jt(pe,me)}function Fi(e,t){var n=B;B|=2;var r=lp();(pe!==e||me!==t)&&(St=null,Cn(e,t));do try{im();break}catch(o){ip(e,o)}while(1);if(Ea(),B=n,Mi.current=r,ae!==null)throw Error(k(261));return pe=null,me=0,ce}function im(){for(;ae!==null;)sp(ae)}function lm(){for(;ae!==null&&!Tf();)sp(ae)}function sp(e){var t=cp(e.alternate,e,Ve);e.memoizedProps=e.pendingProps,t===null?ap(e):ae=t,Ia.current=null}function ap(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Jg(n,t),n!==null){n.flags&=32767,ae=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ce=6,ae=null;return}}else if(n=Zg(n,t,Ve),n!==null){ae=n;return}if(t=t.sibling,t!==null){ae=t;return}ae=t=e}while(t!==null);ce===0&&(ce=5)}function mn(e,t,n){var r=U,o=nt.transition;try{nt.transition=null,U=1,sm(e,t,n,r)}finally{nt.transition=o,U=r}return null}function sm(e,t,n,r){do ir();while(Wt!==null);if(B&6)throw Error(k(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Bf(e,i),e===pe&&(ae=pe=null,me=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Yo||(Yo=!0,dp(wi,function(){return ir(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=nt.transition,nt.transition=null;var l=U;U=1;var s=B;B|=4,Ia.current=null,tm(e,n),np(n,e),$g(ks),_i=!!xs,ks=xs=null,e.current=n,nm(n),Lf(),B=s,U=l,nt.transition=i}else e.current=n;if(Yo&&(Yo=!1,Wt=e,Di=o),i=e.pendingLanes,i===0&&(Zt=null),Mf(n.stateNode),Me(e,ie()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Oi)throw Oi=!1,e=Hs,Hs=null,e;return Di&1&&e.tag!==0&&ir(),i=e.pendingLanes,i&1?e===Us?Gr++:(Gr=0,Us=e):Gr=0,dn(),null}function ir(){if(Wt!==null){var e=Bd(Di),t=nt.transition,n=U;try{if(nt.transition=null,U=16>e?16:e,Wt===null)var r=!1;else{if(e=Wt,Wt=null,Di=0,B&6)throw Error(k(331));var o=B;for(B|=4,P=e.current;P!==null;){var i=P,l=i.child;if(P.flags&16){var s=i.deletions;if(s!==null){for(var a=0;a<s.length;a++){var u=s[a];for(P=u;P!==null;){var h=P;switch(h.tag){case 0:case 11:case 15:Yr(8,h,i)}var d=h.child;if(d!==null)d.return=h,P=d;else for(;P!==null;){h=P;var f=h.sibling,v=h.return;if(Jh(h),h===u){P=null;break}if(f!==null){f.return=v,P=f;break}P=v}}}var y=i.alternate;if(y!==null){var b=y.child;if(b!==null){y.child=null;do{var T=b.sibling;b.sibling=null,b=T}while(b!==null)}}P=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,P=l;else e:for(;P!==null;){if(i=P,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Yr(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,P=p;break e}P=i.return}}var c=e.current;for(P=c;P!==null;){l=P;var m=l.child;if(l.subtreeFlags&2064&&m!==null)m.return=l,P=m;else e:for(l=c;P!==null;){if(s=P,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:tl(9,s)}}catch(x){re(s,s.return,x)}if(s===l){P=null;break e}var _=s.sibling;if(_!==null){_.return=s.return,P=_;break e}P=s.return}}if(B=o,dn(),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(Qi,e)}catch{}r=!0}return r}finally{U=n,nt.transition=t}}return!1}function vc(e,t,n){t=hr(n,t),t=jh(e,t,1),e=Xt(e,t,1),t=Ee(),e!==null&&(ko(e,1,t),Me(e,t))}function re(e,t,n){if(e.tag===3)vc(e,e,n);else for(;t!==null;){if(t.tag===3){vc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Zt===null||!Zt.has(r))){e=hr(n,e),e=Hh(t,e,1),t=Xt(t,e,1),e=Ee(),t!==null&&(ko(t,1,e),Me(t,e));break}}t=t.return}}function am(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ee(),e.pingedLanes|=e.suspendedLanes&n,pe===e&&(me&n)===n&&(ce===4||ce===3&&(me&130023424)===me&&500>ie()-Ba?Cn(e,0):Va|=n),Me(e,t)}function up(e,t){t===0&&(e.mode&1?(t=Fo,Fo<<=1,!(Fo&130023424)&&(Fo=4194304)):t=1);var n=Ee();e=Tt(e,t),e!==null&&(ko(e,t,n),Me(e,n))}function um(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),up(e,n)}function cm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),up(e,n)}var cp;cp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ne.current)Le=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Le=!1,Xg(e,t,n);Le=!!(e.flags&131072)}else Le=!1,Z&&t.flags&1048576&&ph(t,Ai,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ui(e,t),e=t.pendingProps;var o=ar(t,xe.current);or(t,n),o=Ra(null,t,r,e,o,n);var i=Ma();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Re(r)?(i=!0,Ei(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,za(t),o.updater=Ji,t.stateNode=o,o._reactInternals=t,Ls(t,r,e,n),t=Ms(null,t,r,!0,i,n)):(t.tag=0,Z&&i&&xa(t),Ce(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ui(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=hm(r),e=ct(r,e),o){case 0:t=Rs(null,t,r,e,n);break e;case 1:t=sc(null,t,r,e,n);break e;case 11:t=ic(null,t,r,e,n);break e;case 14:t=lc(null,t,r,ct(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ct(r,o),Rs(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ct(r,o),sc(e,t,r,o,n);case 3:e:{if(Qh(t),e===null)throw Error(k(387));r=t.pendingProps,i=t.memoizedState,o=i.element,vh(e,t),Ti(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=hr(Error(k(423)),t),t=ac(e,t,r,n,o);break e}else if(r!==o){o=hr(Error(k(424)),t),t=ac(e,t,r,n,o);break e}else for(He=Gt(t.stateNode.containerInfo.firstChild),Ue=t,Z=!0,ht=null,n=_h(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ur(),r===o){t=Lt(e,t,n);break e}Ce(e,t,r,n)}t=t.child}return t;case 5:return xh(t),e===null&&zs(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Ss(r,o)?l=null:i!==null&&Ss(r,i)&&(t.flags|=32),Kh(e,t),Ce(e,t,l,n),t.child;case 6:return e===null&&zs(t),null;case 13:return Yh(e,t,n);case 4:return Pa(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=cr(t,null,r,n):Ce(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ct(r,o),ic(e,t,r,o,n);case 7:return Ce(e,t,t.pendingProps,n),t.child;case 8:return Ce(e,t,t.pendingProps.children,n),t.child;case 12:return Ce(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,K(zi,r._currentValue),r._currentValue=l,i!==null)if(gt(i.value,l)){if(i.children===o.children&&!Ne.current){t=Lt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=At(-1,n&-n),a.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?a.next=a:(a.next=h.next,h.next=a),u.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Ps(i.return,n,t),s.lanes|=n;break}a=a.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(k(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Ps(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Ce(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,or(t,n),o=rt(o),r=r(o),t.flags|=1,Ce(e,t,r,n),t.child;case 14:return r=t.type,o=ct(r,t.pendingProps),o=ct(r.type,o),lc(e,t,r,o,n);case 15:return Uh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ct(r,o),ui(e,t),t.tag=1,Re(r)?(e=!0,Ei(t)):e=!1,or(t,n),wh(t,r,o),Ls(t,r,o,n),Ms(null,t,r,!0,e,n);case 19:return qh(e,t,n);case 22:return Wh(e,t,n)}throw Error(k(156,t.tag))};function dp(e,t){return Dd(e,t)}function dm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(e,t,n,r){return new dm(e,t,n,r)}function Wa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function hm(e){if(typeof e=="function")return Wa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ca)return 11;if(e===da)return 14}return 2}function en(e,t){var n=e.alternate;return n===null?(n=et(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function hi(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")Wa(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Bn:return En(n.children,o,i,t);case ua:l=8,o|=8;break;case ns:return e=et(12,n,t,o|2),e.elementType=ns,e.lanes=i,e;case rs:return e=et(13,n,t,o),e.elementType=rs,e.lanes=i,e;case os:return e=et(19,n,t,o),e.elementType=os,e.lanes=i,e;case bd:return rl(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case yd:l=10;break e;case wd:l=9;break e;case ca:l=11;break e;case da:l=14;break e;case Ft:l=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=et(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function En(e,t,n,r){return e=et(7,e,r,t),e.lanes=n,e}function rl(e,t,n,r){return e=et(22,e,r,t),e.elementType=bd,e.lanes=n,e.stateNode={isHidden:!1},e}function Il(e,t,n){return e=et(6,e,null,t),e.lanes=n,e}function Vl(e,t,n){return t=et(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function pm(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bl(0),this.expirationTimes=bl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Ka(e,t,n,r,o,i,l,s,a){return e=new pm(e,t,n,s,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=et(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},za(i),e}function fm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function hp(e){if(!e)return rn;e=e._reactInternals;e:{if(Mn(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Re(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(Re(n))return dh(e,n,t)}return t}function pp(e,t,n,r,o,i,l,s,a){return e=Ka(n,r,!0,e,o,i,l,s,a),e.context=hp(null),n=e.current,r=Ee(),o=Jt(n),i=At(r,o),i.callback=t??null,Xt(n,i,o),e.current.lanes=o,ko(e,o,r),Me(e,r),e}function ol(e,t,n,r){var o=t.current,i=Ee(),l=Jt(o);return n=hp(n),t.context===null?t.context=n:t.pendingContext=n,t=At(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Xt(o,t,l),e!==null&&(ft(e,o,l,i),li(e,o,l)),l}function Ii(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function yc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Qa(e,t){yc(e,t),(e=e.alternate)&&yc(e,t)}function gm(){return null}var fp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ya(e){this._internalRoot=e}il.prototype.render=Ya.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));ol(e,t,null,null)};il.prototype.unmount=Ya.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Tn(function(){ol(null,e,null,null)}),t[Pt]=null}};function il(e){this._internalRoot=e}il.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ud();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Bt.length&&t!==0&&t<Bt[n].priority;n++);Bt.splice(n,0,e),n===0&&Kd(e)}};function qa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ll(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function wc(){}function mm(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=Ii(l);i.call(u)}}var l=pp(t,r,e,0,null,!1,!1,"",wc);return e._reactRootContainer=l,e[Pt]=l.current,ao(e.nodeType===8?e.parentNode:e),Tn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var u=Ii(a);s.call(u)}}var a=Ka(e,0,!1,null,null,!1,!1,"",wc);return e._reactRootContainer=a,e[Pt]=a.current,ao(e.nodeType===8?e.parentNode:e),Tn(function(){ol(t,a,n,r)}),a}function sl(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var s=o;o=function(){var a=Ii(l);s.call(a)}}ol(t,l,e,o)}else l=mm(n,t,e,o,r);return Ii(l)}jd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Vr(t.pendingLanes);n!==0&&(fa(t,n|1),Me(t,ie()),!(B&6)&&(pr=ie()+500,dn()))}break;case 13:Tn(function(){var r=Tt(e,1);if(r!==null){var o=Ee();ft(r,e,1,o)}}),Qa(e,1)}};ga=function(e){if(e.tag===13){var t=Tt(e,134217728);if(t!==null){var n=Ee();ft(t,e,134217728,n)}Qa(e,134217728)}};Hd=function(e){if(e.tag===13){var t=Jt(e),n=Tt(e,t);if(n!==null){var r=Ee();ft(n,e,t,r)}Qa(e,t)}};Ud=function(){return U};Wd=function(e,t){var n=U;try{return U=e,t()}finally{U=n}};fs=function(e,t,n){switch(t){case"input":if(ss(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Xi(r);if(!o)throw Error(k(90));xd(r),ss(r,o)}}}break;case"textarea":Sd(e,n);break;case"select":t=n.value,t!=null&&er(e,!!n.multiple,t,!1)}};Td=ja;Ld=Tn;var vm={usingClientEntryPoint:!1,Events:[Co,Wn,Xi,zd,Pd,ja]},Pr={findFiberByHostInstance:bn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},ym={bundleType:Pr.bundleType,version:Pr.version,rendererPackageName:Pr.rendererPackageName,rendererConfig:Pr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Rt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Md(e),e===null?null:e.stateNode},findFiberByHostInstance:Pr.findFiberByHostInstance||gm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qo.isDisabled&&qo.supportsFiber)try{Qi=qo.inject(ym),bt=qo}catch{}}Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vm;Ye.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qa(t))throw Error(k(200));return fm(e,t,null,n)};Ye.createRoot=function(e,t){if(!qa(e))throw Error(k(299));var n=!1,r="",o=fp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Ka(e,1,!1,null,null,n,!1,r,o),e[Pt]=t.current,ao(e.nodeType===8?e.parentNode:e),new Ya(t)};Ye.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=Md(t),e=e===null?null:e.stateNode,e};Ye.flushSync=function(e){return Tn(e)};Ye.hydrate=function(e,t,n){if(!ll(t))throw Error(k(200));return sl(null,e,t,!0,n)};Ye.hydrateRoot=function(e,t,n){if(!qa(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=fp;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=pp(t,null,e,1,n??null,o,!1,i,l),e[Pt]=t.current,ao(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new il(t)};Ye.render=function(e,t,n){if(!ll(t))throw Error(k(200));return sl(null,e,t,!1,n)};Ye.unmountComponentAtNode=function(e){if(!ll(e))throw Error(k(40));return e._reactRootContainer?(Tn(function(){sl(null,null,e,!1,function(){e._reactRootContainer=null,e[Pt]=null})}),!0):!1};Ye.unstable_batchedUpdates=ja;Ye.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ll(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return sl(e,t,n,!1,r)};Ye.version="18.2.0-next-9e3b772b8-20220608";function gp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gp)}catch(e){console.error(e)}}gp(),pd.exports=Ye;var wm=pd.exports,bc=wm;es.createRoot=bc.createRoot,es.hydrateRoot=bc.hydrateRoot;function bm(e){const n=["default","cwy","radar_dbz_cwb","preci_cwb","OceanLakeLandSnow"].map((r,o)=>L.jsx("option",{children:r},o));return L.jsxs(L.Fragment,{children:[L.jsx("label",{children:"Template: "}),L.jsx("select",{title:"colormaps",onChange:r=>e.changeMap(r),style:{maxWidth:"80px"},children:n})]})}var _c=new WeakMap;function mp(e){let t=_c.get(e);return t||(t=window.getComputedStyle(e,null),_c.set(e,t)),t}function _m(e){if(typeof e.checkVisibility=="function")return e.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const t=mp(e);return t.visibility!=="hidden"&&t.display!=="none"}function xm(e){const t=mp(e),{overflowY:n,overflowX:r}=t;return n==="scroll"||r==="scroll"?!0:n!=="auto"||r!=="auto"?!1:e.scrollHeight>e.clientHeight&&n==="auto"||e.scrollWidth>e.clientWidth&&r==="auto"}function km(e){const t=e.tagName.toLowerCase(),n=Number(e.getAttribute("tabindex"));return e.hasAttribute("tabindex")&&(isNaN(n)||n<=-1)||e.hasAttribute("disabled")||e.closest("[inert]")||t==="input"&&e.getAttribute("type")==="radio"&&!e.hasAttribute("checked")||!_m(e)?!1:(t==="audio"||t==="video")&&e.hasAttribute("controls")||e.hasAttribute("tabindex")||e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(t)?!0:xm(e)}function Sm(e){var t,n;const r=Qs(e),o=(t=r[0])!=null?t:null,i=(n=r[r.length-1])!=null?n:null;return{start:o,end:i}}function Cm(e,t){var n;return((n=e.getRootNode({composed:!0}))==null?void 0:n.host)!==t}function Qs(e){const t=new WeakMap,n=[];function r(o){if(o instanceof Element){if(o.hasAttribute("inert")||o.closest("[inert]")||t.has(o))return;t.set(o,!0),!n.includes(o)&&km(o)&&n.push(o),o instanceof HTMLSlotElement&&Cm(o,e)&&o.assignedElements({flatten:!0}).forEach(i=>{r(i)}),o.shadowRoot!==null&&o.shadowRoot.mode==="open"&&r(o.shadowRoot)}for(const i of o.children)r(i)}return r(e),n.sort((o,i)=>{const l=Number(o.getAttribute("tabindex"))||0;return(Number(i.getAttribute("tabindex"))||0)-l})}var vp=Object.defineProperty,Em=Object.defineProperties,$m=Object.getOwnPropertyDescriptor,Am=Object.getOwnPropertyDescriptors,xc=Object.getOwnPropertySymbols,zm=Object.prototype.hasOwnProperty,Pm=Object.prototype.propertyIsEnumerable,Bl=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),kc=(e,t,n)=>t in e?vp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,On=(e,t)=>{for(var n in t||(t={}))zm.call(t,n)&&kc(e,n,t[n]);if(xc)for(var n of xc(t))Pm.call(t,n)&&kc(e,n,t[n]);return e},al=(e,t)=>Em(e,Am(t)),g=(e,t,n,r)=>{for(var o=r>1?void 0:r?$m(t,n):t,i=e.length-1,l;i>=0;i--)(l=e[i])&&(o=(r?l(t,n,o):l(o))||o);return r&&o&&vp(t,n,o),o},Tm=function(e,t){this[0]=e,this[1]=t},Lm=e=>{var t=e[Bl("asyncIterator")],n=!1,r,o={};return t==null?(t=e[Bl("iterator")](),r=i=>o[i]=l=>t[i](l)):(t=t.call(e),r=i=>o[i]=l=>{if(n){if(n=!1,i==="throw")throw l;return l}return n=!0,{done:!1,value:new Tm(new Promise(s=>{var a=t[i](l);if(!(a instanceof Object))throw TypeError("Object expected");s(a)}),1)}}),o[Bl("iterator")]=()=>o,r("next"),"throw"in t?r("throw"):o.throw=i=>{throw i},"return"in t&&r("return"),o};function*Ga(e=document.activeElement){e!=null&&(yield e,"shadowRoot"in e&&e.shadowRoot&&e.shadowRoot.mode!=="closed"&&(yield*Lm(Ga(e.shadowRoot.activeElement))))}function Nm(){return[...Ga()].pop()}var Tr=[],Rm=class{constructor(e){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=t=>{var n;if(t.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const r=Nm();if(this.previousFocus=r,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;t.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const o=Qs(this.element);let i=o.findIndex(s=>s===r);this.previousFocus=this.currentFocus;const l=this.tabDirection==="forward"?1:-1;for(;;){i+l>=o.length?i=0:i+l<0?i=o.length-1:i+=l,this.previousFocus=this.currentFocus;const s=o[i];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||s&&this.possiblyHasTabbableChildren(s))return;t.preventDefault(),this.currentFocus=s,(n=this.currentFocus)==null||n.focus({preventScroll:!1});const a=[...Ga()];if(a.includes(this.currentFocus)||!a.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=e,this.elementsWithTabbableControls=["iframe"]}activate(){Tr.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){Tr=Tr.filter(e=>e!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return Tr[Tr.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const e=Qs(this.element);if(!this.element.matches(":focus-within")){const t=e[0],n=e[e.length-1],r=this.tabDirection==="forward"?t:n;typeof(r==null?void 0:r.focus)=="function"&&(this.currentFocus=r,r.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(e){return this.elementsWithTabbableControls.includes(e.tagName.toLowerCase())||e.hasAttribute("controls")}},Ys=new Set;function Mm(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function Om(){const e=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(e)||!e?0:e}function Sc(e){if(Ys.add(e),!document.documentElement.classList.contains("sl-scroll-lock")){const t=Mm()+Om();document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${t}px`)}}function Cc(e){Ys.delete(e),Ys.size===0&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pi=globalThis,Xa=pi.ShadowRoot&&(pi.ShadyCSS===void 0||pi.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Za=Symbol(),Ec=new WeakMap;let yp=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==Za)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(Xa&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=Ec.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&Ec.set(n,t))}return t}toString(){return this.cssText}};const Dm=e=>new yp(typeof e=="string"?e:e+"",void 0,Za),Oe=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((r,o,i)=>r+(l=>{if(l._$cssResult$===!0)return l.cssText;if(typeof l=="number")return l;throw Error("Value passed to 'css' function must be a 'css' function result: "+l+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1],e[0]);return new yp(n,e,Za)},Fm=(e,t)=>{if(Xa)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const r=document.createElement("style"),o=pi.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=n.cssText,e.appendChild(r)}},$c=Xa?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return Dm(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Im,defineProperty:Vm,getOwnPropertyDescriptor:Bm,getOwnPropertyNames:jm,getOwnPropertySymbols:Hm,getPrototypeOf:Um}=Object,tn=globalThis,Ac=tn.trustedTypes,Wm=Ac?Ac.emptyScript:"",jl=tn.reactiveElementPolyfillSupport,Xr=(e,t)=>e,fr={toAttribute(e,t){switch(t){case Boolean:e=e?Wm:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},Ja=(e,t)=>!Im(e,t),zc={attribute:!0,type:String,converter:fr,reflect:!1,hasChanged:Ja};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),tn.litPropertyMetadata??(tn.litPropertyMetadata=new WeakMap);class In extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=zc){if(n.state&&(n.attribute=!1),this._$Ei(),this.elementProperties.set(t,n),!n.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(t,r,n);o!==void 0&&Vm(this.prototype,t,o)}}static getPropertyDescriptor(t,n,r){const{get:o,set:i}=Bm(this.prototype,t)??{get(){return this[n]},set(l){this[n]=l}};return{get(){return o==null?void 0:o.call(this)},set(l){const s=o==null?void 0:o.call(this);i.call(this,l),this.requestUpdate(t,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??zc}static _$Ei(){if(this.hasOwnProperty(Xr("elementProperties")))return;const t=Um(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Xr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Xr("properties"))){const n=this.properties,r=[...jm(n),...Hm(n)];for(const o of r)this.createProperty(o,n[o])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[r,o]of n)this.elementProperties.set(r,o)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const o=this._$Eu(n,r);o!==void 0&&this._$Eh.set(o,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const o of r)n.unshift($c(o))}else t!==void 0&&n.push($c(t));return n}static _$Eu(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(n=>n(this))}addController(t){var n;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)==null||n.call(t))}removeController(t){var n;(n=this._$EO)==null||n.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Fm(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(n=>{var r;return(r=n.hostConnected)==null?void 0:r.call(n)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(n=>{var r;return(r=n.hostDisconnected)==null?void 0:r.call(n)})}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$EC(t,n){var i;const r=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,r);if(o!==void 0&&r.reflect===!0){const l=(((i=r.converter)==null?void 0:i.toAttribute)!==void 0?r.converter:fr).toAttribute(n,r.type);this._$Em=t,l==null?this.removeAttribute(o):this.setAttribute(o,l),this._$Em=null}}_$AK(t,n){var i;const r=this.constructor,o=r._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const l=r.getPropertyOptions(o),s=typeof l.converter=="function"?{fromAttribute:l.converter}:((i=l.converter)==null?void 0:i.fromAttribute)!==void 0?l.converter:fr;this._$Em=o,this[o]=s.fromAttribute(n,l.type),this._$Em=null}}requestUpdate(t,n,r){if(t!==void 0){if(r??(r=this.constructor.getPropertyOptions(t)),!(r.hasChanged??Ja)(this[t],n))return;this.P(t,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,n,r){this._$AL.has(t)||this._$AL.set(t,n),r.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,l]of this._$Ep)this[i]=l;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[i,l]of o)l.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],l)}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(r=this._$EO)==null||r.forEach(o=>{var i;return(i=o.hostUpdate)==null?void 0:i.call(o)}),this.update(n)):this._$EU()}catch(o){throw t=!1,this._$EU(),o}t&&this._$AE(n)}willUpdate(t){}_$AE(t){var n;(n=this._$EO)==null||n.forEach(r=>{var o;return(o=r.hostUpdated)==null?void 0:o.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(n=>this._$EC(n,this[n]))),this._$EU()}updated(t){}firstUpdated(t){}}In.elementStyles=[],In.shadowRootOptions={mode:"open"},In[Xr("elementProperties")]=new Map,In[Xr("finalized")]=new Map,jl==null||jl({ReactiveElement:In}),(tn.reactiveElementVersions??(tn.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zr=globalThis,Vi=Zr.trustedTypes,Pc=Vi?Vi.createPolicy("lit-html",{createHTML:e=>e}):void 0,wp="$lit$",Ht=`lit$${(Math.random()+"").slice(9)}$`,bp="?"+Ht,Km=`<${bp}>`,Ln=document,yo=()=>Ln.createComment(""),wo=e=>e===null||typeof e!="object"&&typeof e!="function",_p=Array.isArray,Qm=e=>_p(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Hl=`[ 	
\f\r]`,Lr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Tc=/-->/g,Lc=/>/g,fn=RegExp(`>|${Hl}(?:([^\\s"'>=/]+)(${Hl}*=${Hl}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Nc=/'/g,Rc=/"/g,xp=/^(?:script|style|textarea|title)$/i,Ym=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),X=Ym(1),tt=Symbol.for("lit-noChange"),se=Symbol.for("lit-nothing"),Mc=new WeakMap,kn=Ln.createTreeWalker(Ln,129);function kp(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Pc!==void 0?Pc.createHTML(t):t}const qm=(e,t)=>{const n=e.length-1,r=[];let o,i=t===2?"<svg>":"",l=Lr;for(let s=0;s<n;s++){const a=e[s];let u,h,d=-1,f=0;for(;f<a.length&&(l.lastIndex=f,h=l.exec(a),h!==null);)f=l.lastIndex,l===Lr?h[1]==="!--"?l=Tc:h[1]!==void 0?l=Lc:h[2]!==void 0?(xp.test(h[2])&&(o=RegExp("</"+h[2],"g")),l=fn):h[3]!==void 0&&(l=fn):l===fn?h[0]===">"?(l=o??Lr,d=-1):h[1]===void 0?d=-2:(d=l.lastIndex-h[2].length,u=h[1],l=h[3]===void 0?fn:h[3]==='"'?Rc:Nc):l===Rc||l===Nc?l=fn:l===Tc||l===Lc?l=Lr:(l=fn,o=void 0);const v=l===fn&&e[s+1].startsWith("/>")?" ":"";i+=l===Lr?a+Km:d>=0?(r.push(u),a.slice(0,d)+wp+a.slice(d)+Ht+v):a+Ht+(d===-2?s:v)}return[kp(e,i+(e[n]||"<?>")+(t===2?"</svg>":"")),r]};class bo{constructor({strings:t,_$litType$:n},r){let o;this.parts=[];let i=0,l=0;const s=t.length-1,a=this.parts,[u,h]=qm(t,n);if(this.el=bo.createElement(u,r),kn.currentNode=this.el.content,n===2){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(o=kn.nextNode())!==null&&a.length<s;){if(o.nodeType===1){if(o.hasAttributes())for(const d of o.getAttributeNames())if(d.endsWith(wp)){const f=h[l++],v=o.getAttribute(d).split(Ht),y=/([.?@])?(.*)/.exec(f);a.push({type:1,index:i,name:y[2],strings:v,ctor:y[1]==="."?Xm:y[1]==="?"?Zm:y[1]==="@"?Jm:ul}),o.removeAttribute(d)}else d.startsWith(Ht)&&(a.push({type:6,index:i}),o.removeAttribute(d));if(xp.test(o.tagName)){const d=o.textContent.split(Ht),f=d.length-1;if(f>0){o.textContent=Vi?Vi.emptyScript:"";for(let v=0;v<f;v++)o.append(d[v],yo()),kn.nextNode(),a.push({type:2,index:++i});o.append(d[f],yo())}}}else if(o.nodeType===8)if(o.data===bp)a.push({type:2,index:i});else{let d=-1;for(;(d=o.data.indexOf(Ht,d+1))!==-1;)a.push({type:7,index:i}),d+=Ht.length-1}i++}}static createElement(t,n){const r=Ln.createElement("template");return r.innerHTML=t,r}}function gr(e,t,n=e,r){var l,s;if(t===tt)return t;let o=r!==void 0?(l=n._$Co)==null?void 0:l[r]:n._$Cl;const i=wo(t)?void 0:t._$litDirective$;return(o==null?void 0:o.constructor)!==i&&((s=o==null?void 0:o._$AO)==null||s.call(o,!1),i===void 0?o=void 0:(o=new i(e),o._$AT(e,n,r)),r!==void 0?(n._$Co??(n._$Co=[]))[r]=o:n._$Cl=o),o!==void 0&&(t=gr(e,o._$AS(e,t.values),o,r)),t}class Gm{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:r}=this._$AD,o=((t==null?void 0:t.creationScope)??Ln).importNode(n,!0);kn.currentNode=o;let i=kn.nextNode(),l=0,s=0,a=r[0];for(;a!==void 0;){if(l===a.index){let u;a.type===2?u=new $o(i,i.nextSibling,this,t):a.type===1?u=new a.ctor(i,a.name,a.strings,this,t):a.type===6&&(u=new e0(i,this,t)),this._$AV.push(u),a=r[++s]}l!==(a==null?void 0:a.index)&&(i=kn.nextNode(),l++)}return kn.currentNode=Ln,o}p(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}}class $o{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,n,r,o){this.type=2,this._$AH=se,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=gr(this,t,n),wo(t)?t===se||t==null||t===""?(this._$AH!==se&&this._$AR(),this._$AH=se):t!==this._$AH&&t!==tt&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Qm(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==se&&wo(this._$AH)?this._$AA.nextSibling.data=t:this.T(Ln.createTextNode(t)),this._$AH=t}$(t){var i;const{values:n,_$litType$:r}=t,o=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=bo.createElement(kp(r.h,r.h[0]),this.options)),r);if(((i=this._$AH)==null?void 0:i._$AD)===o)this._$AH.p(n);else{const l=new Gm(o,this),s=l.u(this.options);l.p(n),this.T(s),this._$AH=l}}_$AC(t){let n=Mc.get(t.strings);return n===void 0&&Mc.set(t.strings,n=new bo(t)),n}k(t){_p(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,o=0;for(const i of t)o===n.length?n.push(r=new $o(this.S(yo()),this.S(yo()),this,this.options)):r=n[o],r._$AI(i),o++;o<n.length&&(this._$AR(r&&r._$AB.nextSibling,o),n.length=o)}_$AR(t=this._$AA.nextSibling,n){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,n);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var n;this._$AM===void 0&&(this._$Cv=t,(n=this._$AP)==null||n.call(this,t))}}class ul{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,r,o,i){this.type=1,this._$AH=se,this._$AN=void 0,this.element=t,this.name=n,this._$AM=o,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=se}_$AI(t,n=this,r,o){const i=this.strings;let l=!1;if(i===void 0)t=gr(this,t,n,0),l=!wo(t)||t!==this._$AH&&t!==tt,l&&(this._$AH=t);else{const s=t;let a,u;for(t=i[0],a=0;a<i.length-1;a++)u=gr(this,s[r+a],n,a),u===tt&&(u=this._$AH[a]),l||(l=!wo(u)||u!==this._$AH[a]),u===se?t=se:t!==se&&(t+=(u??"")+i[a+1]),this._$AH[a]=u}l&&!o&&this.j(t)}j(t){t===se?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Xm extends ul{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===se?void 0:t}}class Zm extends ul{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==se)}}class Jm extends ul{constructor(t,n,r,o,i){super(t,n,r,o,i),this.type=5}_$AI(t,n=this){if((t=gr(this,t,n,0)??se)===tt)return;const r=this._$AH,o=t===se&&r!==se||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,i=t!==se&&(r===se||o);o&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,t):this._$AH.handleEvent(t)}}class e0{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){gr(this,t)}}const Ul=Zr.litHtmlPolyfillSupport;Ul==null||Ul(bo,$o),(Zr.litHtmlVersions??(Zr.litHtmlVersions=[])).push("3.1.2");const t0=(e,t,n)=>{const r=(n==null?void 0:n.renderBefore)??t;let o=r._$litPart$;if(o===void 0){const i=(n==null?void 0:n.renderBefore)??null;r._$litPart$=o=new $o(t.insertBefore(yo(),i),i,void 0,n??{})}return o._$AI(e),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Jr=class extends In{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var n;const t=super.createRenderRoot();return(n=this.renderOptions).renderBefore??(n.renderBefore=t.firstChild),t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=t0(n,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return tt}};var td;Jr._$litElement$=!0,Jr.finalized=!0,(td=globalThis.litElementHydrateSupport)==null||td.call(globalThis,{LitElement:Jr});const Wl=globalThis.litElementPolyfillSupport;Wl==null||Wl({LitElement:Jr});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");var n0=Oe`
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
`,r0=Oe`
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
`,qs="";function Oc(e){qs=e}function o0(e=""){if(!qs){const t=[...document.getElementsByTagName("script")],n=t.find(r=>r.hasAttribute("data-shoelace"));if(n)Oc(n.getAttribute("data-shoelace"));else{const r=t.find(i=>/shoelace(\.min)?\.js($|\?)/.test(i.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(i.src));let o="";r&&(o=r.getAttribute("src")),Oc(o.split("/").slice(0,-1).join("/"))}}return qs.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}var i0={name:"default",resolver:e=>o0(`assets/icons/${e}.svg`)},l0=i0,Dc={caret:`
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
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
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
  `},s0={name:"system",resolver:e=>e in Dc?`data:image/svg+xml,${encodeURIComponent(Dc[e])}`:""},a0=s0,u0=[l0,a0],Gs=[];function c0(e){Gs.push(e)}function d0(e){Gs=Gs.filter(t=>t!==e)}function Fc(e){return u0.find(t=>t.name===e)}var h0=Oe`
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
`;function De(e,t){const n=On({waitUntilFirstUpdate:!1},t);return(r,o)=>{const{update:i}=r,l=Array.isArray(e)?e:[e];r.update=function(s){l.forEach(a=>{const u=a;if(s.has(u)){const h=s.get(u),d=this[u];h!==d&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[o](h,d)}}),i.call(this,s)}}}var lt=Oe`
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
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const p0={attribute:!0,type:String,converter:fr,reflect:!1,hasChanged:Ja},f0=(e=p0,t,n)=>{const{kind:r,metadata:o}=n;let i=globalThis.litPropertyMetadata.get(o);if(i===void 0&&globalThis.litPropertyMetadata.set(o,i=new Map),i.set(n.name,e),r==="accessor"){const{name:l}=n;return{set(s){const a=t.get.call(this);t.set.call(this,s),this.requestUpdate(l,a,e)},init(s){return s!==void 0&&this.P(l,void 0,e),s}}}if(r==="setter"){const{name:l}=n;return function(s){const a=this[l];t.call(this,s),this.requestUpdate(l,a,e)}}throw Error("Unsupported decorator location: "+r)};function w(e){return(t,n)=>typeof n=="object"?f0(e,t,n):((r,o,i)=>{const l=o.hasOwnProperty(i);return o.constructor.createProperty(i,l?{...r,wrapped:!0}:r),l?Object.getOwnPropertyDescriptor(o,i):void 0})(e,t,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ze(e){return w({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ic=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,n),n);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function fe(e,t){return(n,r,o)=>{const i=l=>{var s;return((s=l.renderRoot)==null?void 0:s.querySelector(e))??null};if(t){const{get:l,set:s}=typeof r=="object"?n:o??(()=>{const a=Symbol();return{get(){return this[a]},set(u){this[a]=u}}})();return Ic(n,r,{get(){let a=l.call(this);return a===void 0&&(a=i(this),(a!==null||this.hasUpdated)&&s.call(this,a)),a}})}return Ic(n,r,{get(){return i(this)}})}}var ke=class extends Jr{constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){const n=new CustomEvent(e,On({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(n),n}static define(e,t=this,n={}){const r=customElements.get(e);if(!r){customElements.define(e,class extends t{},n);return}let o=" (unknown version)",i=o;"version"in t&&t.version&&(o=" v"+t.version),"version"in r&&r.version&&(i=" v"+r.version),!(o&&i&&o===i)&&console.warn(`Attempted to register <${e}>${o}, but <${e}>${i} has already been registered.`)}};ke.version="2.15.0";ke.dependencies={};g([w()],ke.prototype,"dir",2);g([w()],ke.prototype,"lang",2);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const g0=(e,t)=>t===void 0?(e==null?void 0:e._$litType$)!==void 0:(e==null?void 0:e._$litType$)===t,m0=e=>e.strings===void 0,v0={},y0=(e,t=v0)=>e._$AH=t;var Nr=Symbol(),Go=Symbol(),Kl,Ql=new Map,st=class extends ke{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var n;let r;if(t!=null&&t.spriteSheet){this.svg=X`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;const o=this.shadowRoot.querySelector("[part='svg']");return typeof t.mutator=="function"&&t.mutator(o),this.svg}try{if(r=await fetch(e,{mode:"cors"}),!r.ok)return r.status===410?Nr:Go}catch{return Go}try{const o=document.createElement("div");o.innerHTML=await r.text();const i=o.firstElementChild;if(((n=i==null?void 0:i.tagName)==null?void 0:n.toLowerCase())!=="svg")return Nr;Kl||(Kl=new DOMParser);const s=Kl.parseFromString(i.outerHTML,"text/html").body.querySelector("svg");return s?(s.part.add("svg"),document.adoptNode(s)):Nr}catch{return Nr}}connectedCallback(){super.connectedCallback(),c0(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),d0(this)}getIconSource(){const e=Fc(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const{url:t,fromLibrary:n}=this.getIconSource(),r=n?Fc(this.library):void 0;if(!t){this.svg=null;return}let o=Ql.get(t);if(o||(o=this.resolveIcon(t,r),Ql.set(t,o)),!this.initialRender)return;const i=await o;if(i===Go&&Ql.delete(t),t===this.getIconSource().url){if(g0(i)){this.svg=i;return}switch(i){case Go:case Nr:this.svg=null,this.emit("sl-error");break;default:this.svg=i.cloneNode(!0),(e=r==null?void 0:r.mutator)==null||e.call(r,this.svg),this.emit("sl-load")}}}render(){return this.svg}};st.styles=[lt,h0];g([ze()],st.prototype,"svg",2);g([w({reflect:!0})],st.prototype,"name",2);g([w()],st.prototype,"src",2);g([w()],st.prototype,"label",2);g([w({reflect:!0})],st.prototype,"library",2);g([De("label")],st.prototype,"handleLabelChange",1);g([De(["name","src","library"])],st.prototype,"setIcon",1);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},eu=e=>(...t)=>({_$litDirective$:e,values:t});let tu=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,r){this._$Ct=t,this._$AM=n,this._$Ci=r}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const We=eu(class extends tu{constructor(e){var t;if(super(e),e.type!==Vt.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,o;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!((r=this.nt)!=null&&r.has(i))&&this.st.add(i);return this.render(t)}const n=e.element.classList;for(const i of this.st)i in t||(n.remove(i),this.st.delete(i));for(const i in t){const l=!!t[i];l===this.st.has(i)||(o=this.nt)!=null&&o.has(i)||(l?(n.add(i),this.st.add(i)):(n.remove(i),this.st.delete(i)))}return tt}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Sp=Symbol.for(""),w0=e=>{if((e==null?void 0:e.r)===Sp)return e==null?void 0:e._$litStatic$},Bi=(e,...t)=>({_$litStatic$:t.reduce((n,r,o)=>n+(i=>{if(i._$litStatic$!==void 0)return i._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${i}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(r)+e[o+1],e[0]),r:Sp}),Vc=new Map,b0=e=>(t,...n)=>{const r=n.length;let o,i;const l=[],s=[];let a,u=0,h=!1;for(;u<r;){for(a=t[u];u<r&&(i=n[u],(o=w0(i))!==void 0);)a+=o+t[++u],h=!0;u!==r&&s.push(i),l.push(a),u++}if(u===r&&l.push(t[r]),h){const d=l.join("$$lit$$");(t=Vc.get(d))===void 0&&(l.raw=l,Vc.set(d,t=l)),n=s}return e(t,...n)},fi=b0(X);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=e=>e??se;var Ge=class extends ke{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){const e=!!this.href,t=e?Bi`a`:Bi`button`;return fi`
      <${t}
        part="base"
        class=${We({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
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
    `}};Ge.styles=[lt,r0];Ge.dependencies={"sl-icon":st};g([fe(".icon-button")],Ge.prototype,"button",2);g([ze()],Ge.prototype,"hasFocus",2);g([w()],Ge.prototype,"name",2);g([w()],Ge.prototype,"library",2);g([w()],Ge.prototype,"src",2);g([w()],Ge.prototype,"href",2);g([w()],Ge.prototype,"target",2);g([w()],Ge.prototype,"download",2);g([w()],Ge.prototype,"label",2);g([w({type:Boolean,reflect:!0})],Ge.prototype,"disabled",2);var Cp=new Map,_0=new WeakMap;function x0(e){return e??{keyframes:[],options:{duration:0}}}function Bc(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function Dn(e,t){Cp.set(e,x0(t))}function vn(e,t,n){const r=_0.get(e);if(r!=null&&r[t])return Bc(r[t],n.dir);const o=Cp.get(t);return o?Bc(o,n.dir):{keyframes:[],options:{duration:0}}}function ji(e,t){return new Promise(n=>{function r(o){o.target===e&&(e.removeEventListener(t,r),n())}e.addEventListener(t,r)})}function yn(e,t,n){return new Promise(r=>{if((n==null?void 0:n.duration)===1/0)throw new Error("Promise-based animations must be finite.");const o=e.animate(t,al(On({},n),{duration:k0()?0:n.duration}));o.addEventListener("cancel",r,{once:!0}),o.addEventListener("finish",r,{once:!0})})}function k0(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Zn(e){return Promise.all(e.getAnimations().map(t=>new Promise(n=>{t.cancel(),requestAnimationFrame(n)})))}const Xs=new Set,S0=new MutationObserver(zp),Jn=new Map;let Ep=document.documentElement.dir||"ltr",$p=document.documentElement.lang||navigator.language,wn;S0.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function Ap(...e){e.map(t=>{const n=t.$code.toLowerCase();Jn.has(n)?Jn.set(n,Object.assign(Object.assign({},Jn.get(n)),t)):Jn.set(n,t),wn||(wn=t)}),zp()}function zp(){Ep=document.documentElement.dir||"ltr",$p=document.documentElement.lang||navigator.language,[...Xs.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}let C0=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){Xs.add(this.host)}hostDisconnected(){Xs.delete(this.host)}dir(){return`${this.host.dir||Ep}`.toLowerCase()}lang(){return`${this.host.lang||$p}`.toLowerCase()}getTranslationData(t){var n,r;const o=new Intl.Locale(t.replace(/_/g,"-")),i=o==null?void 0:o.language.toLowerCase(),l=(r=(n=o==null?void 0:o.region)===null||n===void 0?void 0:n.toLowerCase())!==null&&r!==void 0?r:"",s=Jn.get(`${i}-${l}`),a=Jn.get(i);return{locale:o,language:i,region:l,primary:s,secondary:a}}exists(t,n){var r;const{primary:o,secondary:i}=this.getTranslationData((r=n.lang)!==null&&r!==void 0?r:this.lang());return n=Object.assign({includeFallback:!1},n),!!(o&&o[t]||i&&i[t]||n.includeFallback&&wn&&wn[t])}term(t,...n){const{primary:r,secondary:o}=this.getTranslationData(this.lang());let i;if(r&&r[t])i=r[t];else if(o&&o[t])i=o[t];else if(wn&&wn[t])i=wn[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof i=="function"?i(...n):i}date(t,n){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),n).format(t)}number(t,n){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),n).format(t)}relativeTime(t,n,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(t,n)}};var Pp={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};Ap(Pp);var E0=Pp,br=class extends C0{};Ap(E0);var cl=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=n=>{const r=n.target;(this.slotNames.includes("[default]")&&!r.name||r.name&&this.slotNames.includes(r.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}},mt=class extends ke{constructor(){super(...arguments),this.hasSlotController=new cl(this,"footer"),this.localize=new br(this),this.modal=new Rm(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=e=>{e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),Sc(this))}disconnectedCallback(){var e;super.disconnectedCallback(),this.modal.deactivate(),Cc(this),(e=this.closeWatcher)==null||e.destroy()}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const n=vn(this,"dialog.denyClose",{dir:this.localize.dir()});yn(this.panel,n.keyframes,n.options);return}this.hide()}addOpenListeners(){var e;"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var e;(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),Sc(this);const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([Zn(this.dialog),Zn(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=vn(this,"dialog.show",{dir:this.localize.dir()}),n=vn(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([yn(this.panel,t.keyframes,t.options),yn(this.overlay,n.keyframes,n.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([Zn(this.dialog),Zn(this.overlay)]);const e=vn(this,"dialog.hide",{dir:this.localize.dir()}),t=vn(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([yn(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),yn(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,Cc(this);const n=this.originalTrigger;typeof(n==null?void 0:n.focus)=="function"&&setTimeout(()=>n.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,ji(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ji(this,"sl-after-hide")}render(){return X`
      <div
        part="base"
        class=${We({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
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
          ${this.noHeader?"":X`
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
          <div part="body" class="dialog__body" tabindex="-1"><slot></slot></div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};mt.styles=[lt,n0];mt.dependencies={"sl-icon-button":Ge};g([fe(".dialog")],mt.prototype,"dialog",2);g([fe(".dialog__panel")],mt.prototype,"panel",2);g([fe(".dialog__overlay")],mt.prototype,"overlay",2);g([w({type:Boolean,reflect:!0})],mt.prototype,"open",2);g([w({reflect:!0})],mt.prototype,"label",2);g([w({attribute:"no-header",type:Boolean,reflect:!0})],mt.prototype,"noHeader",2);g([De("open",{waitUntilFirstUpdate:!0})],mt.prototype,"handleOpenChange",1);Dn("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});Dn("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});Dn("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});Dn("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});Dn("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $0=new Set(["children","localName","ref","style","className"]),jc=new WeakMap,Hc=(e,t,n,r,o)=>{const i=o==null?void 0:o[t];i===void 0?(e[t]=n,n==null&&t in HTMLElement.prototype&&e.removeAttribute(t)):n!==r&&((l,s,a)=>{let u=jc.get(l);u===void 0&&jc.set(l,u=new Map);let h=u.get(s);a!==void 0?h===void 0?(u.set(s,h={handleEvent:a}),l.addEventListener(s,h)):h.handleEvent=a:h!==void 0&&(u.delete(s),l.removeEventListener(s,h))})(e,i,n)},nu=({react:e,tagName:t,elementClass:n,events:r,displayName:o})=>{const i=new Set(Object.keys(r??{})),l=e.forwardRef((s,a)=>{const u=e.useRef(new Map),h=e.useRef(null),d={},f={};for(const[v,y]of Object.entries(s))$0.has(v)?d[v==="className"?"class":v]=y:i.has(v)||v in n.prototype?f[v]=y:d[v]=y;return e.useLayoutEffect(()=>{if(h.current===null)return;const v=new Map;for(const y in f)Hc(h.current,y,s[y],u.current.get(y),r),u.current.delete(y),v.set(y,s[y]);for(const[y,b]of u.current)Hc(h.current,y,void 0,b,r);u.current=v}),e.useLayoutEffect(()=>{var v;(v=h.current)==null||v.removeAttribute("defer-hydration")},[]),d.suppressHydrationWarning=!0,e.createElement(t,{...d,ref:e.useCallback(v=>{h.current=v,typeof a=="function"?a(v):a!==null&&(a.current=v)},[a])})});return l.displayName=o??n.name,l};var A0="sl-dialog";mt.define("sl-dialog");var z0=nu({tagName:A0,elementClass:mt,react:ia,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInitialFocus:"sl-initial-focus",onSlRequestClose:"sl-request-close"},displayName:"SlDialog"}),P0=z0,T0=Oe`
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
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
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
    -webkit-user-select: none;
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
`,ru=(e="value")=>(t,n)=>{const r=t.constructor,o=r.prototype.attributeChangedCallback;r.prototype.attributeChangedCallback=function(i,l,s){var a;const u=r.getPropertyOptions(e),h=typeof u.attribute=="string"?u.attribute:e;if(i===h){const d=u.converter||fr,v=(typeof d=="function"?d:(a=d==null?void 0:d.fromAttribute)!=null?a:fr.fromAttribute)(s,u.type);this[e]!==v&&(this[n]=v)}o.call(this,i,l,s)}},Tp=Oe`
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
`,Rr=new WeakMap,Mr=new WeakMap,Or=new WeakMap,Yl=new WeakSet,Xo=new WeakMap,dl=class{constructor(e,t){this.handleFormData=n=>{const r=this.options.disabled(this.host),o=this.options.name(this.host),i=this.options.value(this.host),l=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!r&&!l&&typeof o=="string"&&o.length>0&&typeof i<"u"&&(Array.isArray(i)?i.forEach(s=>{n.formData.append(o,s.toString())}):n.formData.append(o,i.toString()))},this.handleFormSubmit=n=>{var r;const o=this.options.disabled(this.host),i=this.options.reportValidity;this.form&&!this.form.noValidate&&((r=Rr.get(this.form))==null||r.forEach(l=>{this.setUserInteracted(l,!0)})),this.form&&!this.form.noValidate&&!o&&!i(this.host)&&(n.preventDefault(),n.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Xo.set(this.host,[])},this.handleInteraction=n=>{const r=Xo.get(this.host);r.includes(n.type)||r.push(n.type),r.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const n=this.form.querySelectorAll("*");for(const r of n)if(typeof r.checkValidity=="function"&&!r.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const n=this.form.querySelectorAll("*");for(const r of n)if(typeof r.reportValidity=="function"&&!r.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=On({form:n=>{const r=n.form;if(r){const i=n.getRootNode().querySelector(`#${r}`);if(i)return i}return n.closest("form")},name:n=>n.name,value:n=>n.value,defaultValue:n=>n.defaultValue,disabled:n=>{var r;return(r=n.disabled)!=null?r:!1},reportValidity:n=>typeof n.reportValidity=="function"?n.reportValidity():!0,checkValidity:n=>typeof n.checkValidity=="function"?n.checkValidity():!0,setValue:(n,r)=>n.value=r,assumeInteractionOn:["sl-input"]},t)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),Xo.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),Xo.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,Rr.has(this.form)?Rr.get(this.form).add(this.host):Rr.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Mr.has(this.form)||(Mr.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),Or.has(this.form)||(Or.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const e=Rr.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Mr.has(this.form)&&(this.form.reportValidity=Mr.get(this.form),Mr.delete(this.form)),Or.has(this.form)&&(this.form.checkValidity=Or.get(this.form),Or.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?Yl.add(e):Yl.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){const n=document.createElement("button");n.type=e,n.style.position="absolute",n.style.width="0",n.style.height="0",n.style.clipPath="inset(50%)",n.style.overflow="hidden",n.style.whiteSpace="nowrap",t&&(n.name=t.name,n.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(r=>{t.hasAttribute(r)&&n.setAttribute(r,t.getAttribute(r))})),this.form.append(n),n.click(),n.remove()}}getForm(){var e;return(e=this.form)!=null?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const t=this.host,n=!!Yl.has(t),r=!!t.required;t.toggleAttribute("data-required",r),t.toggleAttribute("data-optional",!r),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&n),t.toggleAttribute("data-user-valid",e&&n)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||e==null||e.preventDefault()}},ou=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(al(On({},ou),{valid:!1,valueMissing:!0}));Object.freeze(al(On({},ou),{valid:!1,customError:!0}));/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lp=eu(class extends tu{constructor(e){if(super(e),e.type!==Vt.PROPERTY&&e.type!==Vt.ATTRIBUTE&&e.type!==Vt.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!m0(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===tt||t===se)return t;const n=e.element,r=e.name;if(e.type===Vt.PROPERTY){if(t===n[r])return tt}else if(e.type===Vt.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(r))return tt}else if(e.type===Vt.ATTRIBUTE&&n.getAttribute(r)===t+"")return tt;return y0(e),t}});var H=class extends ke{constructor(){super(...arguments),this.formControlController=new dl(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new cl(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}setTextareaHeight(){this.resize==="auto"?(this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=void 0}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(e){if(e){typeof e.top=="number"&&(this.input.scrollTop=e.top),typeof e.left=="number"&&(this.input.scrollLeft=e.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(e,t,n="none"){this.input.setSelectionRange(e,t,n)}setRangeText(e,t,n,r="preserve"){const o=t??this.input.selectionStart,i=n??this.input.selectionEnd;this.input.setRangeText(e,o,i,r),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),n=this.label?!0:!!e,r=this.helpText?!0:!!t;return X`
      <div
        part="form-control"
        class=${We({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":n,"form-control--has-help-text":r})}
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
            class=${We({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${N(this.name)}
              .value=${Lp(this.value)}
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
    `}};H.styles=[lt,Tp,T0];g([fe(".textarea__control")],H.prototype,"input",2);g([ze()],H.prototype,"hasFocus",2);g([w()],H.prototype,"title",2);g([w()],H.prototype,"name",2);g([w()],H.prototype,"value",2);g([w({reflect:!0})],H.prototype,"size",2);g([w({type:Boolean,reflect:!0})],H.prototype,"filled",2);g([w()],H.prototype,"label",2);g([w({attribute:"help-text"})],H.prototype,"helpText",2);g([w()],H.prototype,"placeholder",2);g([w({type:Number})],H.prototype,"rows",2);g([w()],H.prototype,"resize",2);g([w({type:Boolean,reflect:!0})],H.prototype,"disabled",2);g([w({type:Boolean,reflect:!0})],H.prototype,"readonly",2);g([w({reflect:!0})],H.prototype,"form",2);g([w({type:Boolean,reflect:!0})],H.prototype,"required",2);g([w({type:Number})],H.prototype,"minlength",2);g([w({type:Number})],H.prototype,"maxlength",2);g([w()],H.prototype,"autocapitalize",2);g([w()],H.prototype,"autocorrect",2);g([w()],H.prototype,"autocomplete",2);g([w({type:Boolean})],H.prototype,"autofocus",2);g([w()],H.prototype,"enterkeyhint",2);g([w({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],H.prototype,"spellcheck",2);g([w()],H.prototype,"inputmode",2);g([ru()],H.prototype,"defaultValue",2);g([De("disabled",{waitUntilFirstUpdate:!0})],H.prototype,"handleDisabledChange",1);g([De("rows",{waitUntilFirstUpdate:!0})],H.prototype,"handleRowsChange",1);g([De("value",{waitUntilFirstUpdate:!0})],H.prototype,"handleValueChange",1);var L0="sl-textarea";H.define("sl-textarea");var N0=nu({tagName:L0,elementClass:H,react:ia,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlTextarea"}),R0=N0;function M0({coloroutrgb:e}){const[t,n]=je.useState(!1),r=O0(e);return L.jsxs(L.Fragment,{children:[L.jsx("button",{className:"button-85",onClick:()=>n(!0),children:L.jsx("img",{src:"https://matplotlib.org/stable/_static/logo_dark.svg",width:"100px"})}),L.jsx(P0,{label:"Python code",open:t,onSlAfterHide:()=>n(!1),style:{"--width":"100%",textAlign:"left"},children:L.jsx(R0,{className:"code-area",value:r,rows:15,size:"small",readOnly:!0})})]})}function O0(e){let t="";return t+=`def manual_cmap():
`,t+=`    import numpy as np
`,t+=`    from matplotlib.colors import LinearSegmentedColormap
`,t+=`    colors = [
`,e.map(n=>{t+="        ["+n[0]+","+n[1]+","+n[2]+`],
`}),t+=`    ]
`,t+=`    return LinearSegmentedColormap.from_list("manual_cmap",np.array(colors)/255)
`,t+="# cmap = manual_cmap()",t}const D0=["RGB","Hex"];function F0({coloroutrgb:e}){const[t,n]=je.useState("RGB");function r(i){n(i.target.value)}let o="";return t==="RGB"&&e.map(i=>{o+=i[0]+"	"+i[1]+"	"+i[2]+`
`}),t==="Hex"&&e.map(i=>{o+=I0(i)+`
`}),L.jsxs("div",{className:"txtarea",children:[L.jsx("div",{children:L.jsx(M0,{coloroutrgb:e})}),L.jsxs("div",{children:[L.jsx("label",{children:"output type: "}),L.jsx("select",{title:"colortype",onChange:i=>r(i),children:D0.map((i,l)=>L.jsx("option",{children:i},l))})]}),L.jsx("textarea",{value:o,rows:e.length+1,cols:25,readOnly:!0,style:{resize:"none"}})]})}function I0(e){let t=(+e[0]).toString(16),n=(+e[1]).toString(16),r=(+e[2]).toString(16);return t.length==1&&(t="0"+t),n.length==1&&(n="0"+n),r.length==1&&(r="0"+r),"#"+t+n+r}function V0(e){const t=je.useRef(null);return je.useEffect(()=>{const r=t.current.getContext("2d");B0(r,e.color_out_rgb)}),L.jsx("canvas",{ref:t,height:"100",width:"500"})}function B0(e,t){e.clearRect(0,0,500,100),e.beginPath(),e.rect(50,30,400,40),e.stroke();for(let n=0;n<t.length;n++){const r="rgb("+t[n][0]+","+t[n][1]+","+t[n][2]+")",o=50+n*400/t.length;j0(e,r,o,30,400/t.length,40)}}function j0(e,t,n,r,o,i){e.fillStyle=t,e.fillRect(n,r,o,i)}var H0=Oe`
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
`,Np=class extends ke{render(){return X` <slot></slot> `}};Np.styles=[lt,H0];function ql(e,t){function n(o){const i=e.getBoundingClientRect(),l=e.ownerDocument.defaultView,s=i.left+l.scrollX,a=i.top+l.scrollY,u=o.pageX-s,h=o.pageY-a;t!=null&&t.onMove&&t.onMove(u,h)}function r(){document.removeEventListener("pointermove",n),document.removeEventListener("pointerup",r),t!=null&&t.onStop&&t.onStop()}document.addEventListener("pointermove",n,{passive:!0}),document.addEventListener("pointerup",r),(t==null?void 0:t.initialEvent)instanceof PointerEvent&&n(t.initialEvent)}var U0=Oe`
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
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
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
    -webkit-user-select: none;
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
`,O=class extends ke{constructor(){super(...arguments),this.formControlController=new dl(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new cl(this,"help-text","label"),this.localize=new br(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var e;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((e=this.input)==null?void 0:e.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(e){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=e,this.value=this.__dateInput.value}get valueAsNumber(){var e;return this.__numberInput.value=this.value,((e=this.input)==null?void 0:e.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(e){this.__numberInput.valueAsNumber=e,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(e){e.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleKeyDown(e){const t=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key==="Enter"&&!t&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,n="none"){this.input.setSelectionRange(e,t,n)}setRangeText(e,t,n,r="preserve"){const o=t??this.input.selectionStart,i=n??this.input.selectionEnd;this.input.setRangeText(e,o,i,r),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),n=this.label?!0:!!e,r=this.helpText?!0:!!t,i=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return X`
      <div
        part="form-control"
        class=${We({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":n,"form-control--has-help-text":r})}
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
            class=${We({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
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
              .value=${Lp(this.value)}
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

            ${i?X`
                  <button
                    part="clear-button"
                    class="input__clear"
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
            ${this.passwordToggle&&!this.disabled?X`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?X`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:X`
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
    `}};O.styles=[lt,Tp,U0];O.dependencies={"sl-icon":st};g([fe(".input__control")],O.prototype,"input",2);g([ze()],O.prototype,"hasFocus",2);g([w()],O.prototype,"title",2);g([w({reflect:!0})],O.prototype,"type",2);g([w()],O.prototype,"name",2);g([w()],O.prototype,"value",2);g([ru()],O.prototype,"defaultValue",2);g([w({reflect:!0})],O.prototype,"size",2);g([w({type:Boolean,reflect:!0})],O.prototype,"filled",2);g([w({type:Boolean,reflect:!0})],O.prototype,"pill",2);g([w()],O.prototype,"label",2);g([w({attribute:"help-text"})],O.prototype,"helpText",2);g([w({type:Boolean})],O.prototype,"clearable",2);g([w({type:Boolean,reflect:!0})],O.prototype,"disabled",2);g([w()],O.prototype,"placeholder",2);g([w({type:Boolean,reflect:!0})],O.prototype,"readonly",2);g([w({attribute:"password-toggle",type:Boolean})],O.prototype,"passwordToggle",2);g([w({attribute:"password-visible",type:Boolean})],O.prototype,"passwordVisible",2);g([w({attribute:"no-spin-buttons",type:Boolean})],O.prototype,"noSpinButtons",2);g([w({reflect:!0})],O.prototype,"form",2);g([w({type:Boolean,reflect:!0})],O.prototype,"required",2);g([w()],O.prototype,"pattern",2);g([w({type:Number})],O.prototype,"minlength",2);g([w({type:Number})],O.prototype,"maxlength",2);g([w()],O.prototype,"min",2);g([w()],O.prototype,"max",2);g([w()],O.prototype,"step",2);g([w()],O.prototype,"autocapitalize",2);g([w()],O.prototype,"autocorrect",2);g([w()],O.prototype,"autocomplete",2);g([w({type:Boolean})],O.prototype,"autofocus",2);g([w()],O.prototype,"enterkeyhint",2);g([w({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],O.prototype,"spellcheck",2);g([w()],O.prototype,"inputmode",2);g([De("disabled",{waitUntilFirstUpdate:!0})],O.prototype,"handleDisabledChange",1);g([De("step",{waitUntilFirstUpdate:!0})],O.prototype,"handleStepChange",1);g([De("value",{waitUntilFirstUpdate:!0})],O.prototype,"handleValueChange",1);var W0=Oe`
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
`,K0=Oe`
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

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;const on=Math.min,Be=Math.max,Hi=Math.round,Zo=Math.floor,ln=e=>({x:e,y:e}),Q0={left:"right",right:"left",bottom:"top",top:"bottom"},Y0={start:"end",end:"start"};function Zs(e,t,n){return Be(e,on(t,n))}function _r(e,t){return typeof e=="function"?e(t):e}function sn(e){return e.split("-")[0]}function xr(e){return e.split("-")[1]}function Rp(e){return e==="x"?"y":"x"}function iu(e){return e==="y"?"height":"width"}function Ao(e){return["top","bottom"].includes(sn(e))?"y":"x"}function lu(e){return Rp(Ao(e))}function q0(e,t,n){n===void 0&&(n=!1);const r=xr(e),o=lu(e),i=iu(o);let l=o==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[i]>t.floating[i]&&(l=Ui(l)),[l,Ui(l)]}function G0(e){const t=Ui(e);return[Js(e),t,Js(t)]}function Js(e){return e.replace(/start|end/g,t=>Y0[t])}function X0(e,t,n){const r=["left","right"],o=["right","left"],i=["top","bottom"],l=["bottom","top"];switch(e){case"top":case"bottom":return n?t?o:r:t?r:o;case"left":case"right":return t?i:l;default:return[]}}function Z0(e,t,n,r){const o=xr(e);let i=X0(sn(e),n==="start",r);return o&&(i=i.map(l=>l+"-"+o),t&&(i=i.concat(i.map(Js)))),i}function Ui(e){return e.replace(/left|right|bottom|top/g,t=>Q0[t])}function J0(e){return{top:0,right:0,bottom:0,left:0,...e}}function Mp(e){return typeof e!="number"?J0(e):{top:e,right:e,bottom:e,left:e}}function Wi(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function Uc(e,t,n){let{reference:r,floating:o}=e;const i=Ao(t),l=lu(t),s=iu(l),a=sn(t),u=i==="y",h=r.x+r.width/2-o.width/2,d=r.y+r.height/2-o.height/2,f=r[s]/2-o[s]/2;let v;switch(a){case"top":v={x:h,y:r.y-o.height};break;case"bottom":v={x:h,y:r.y+r.height};break;case"right":v={x:r.x+r.width,y:d};break;case"left":v={x:r.x-o.width,y:d};break;default:v={x:r.x,y:r.y}}switch(xr(t)){case"start":v[l]-=f*(n&&u?-1:1);break;case"end":v[l]+=f*(n&&u?-1:1);break}return v}const ev=async(e,t,n)=>{const{placement:r="bottom",strategy:o="absolute",middleware:i=[],platform:l}=n,s=i.filter(Boolean),a=await(l.isRTL==null?void 0:l.isRTL(t));let u=await l.getElementRects({reference:e,floating:t,strategy:o}),{x:h,y:d}=Uc(u,r,a),f=r,v={},y=0;for(let b=0;b<s.length;b++){const{name:T,fn:p}=s[b],{x:c,y:m,data:_,reset:x}=await p({x:h,y:d,initialPlacement:r,placement:f,strategy:o,middlewareData:v,rects:u,platform:l,elements:{reference:e,floating:t}});if(h=c??h,d=m??d,v={...v,[T]:{...v[T],..._}},x&&y<=50){y++,typeof x=="object"&&(x.placement&&(f=x.placement),x.rects&&(u=x.rects===!0?await l.getElementRects({reference:e,floating:t,strategy:o}):x.rects),{x:h,y:d}=Uc(u,f,a)),b=-1;continue}}return{x:h,y:d,placement:f,strategy:o,middlewareData:v}};async function su(e,t){var n;t===void 0&&(t={});const{x:r,y:o,platform:i,rects:l,elements:s,strategy:a}=e,{boundary:u="clippingAncestors",rootBoundary:h="viewport",elementContext:d="floating",altBoundary:f=!1,padding:v=0}=_r(t,e),y=Mp(v),T=s[f?d==="floating"?"reference":"floating":d],p=Wi(await i.getClippingRect({element:(n=await(i.isElement==null?void 0:i.isElement(T)))==null||n?T:T.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(s.floating)),boundary:u,rootBoundary:h,strategy:a})),c=d==="floating"?{...l.floating,x:r,y:o}:l.reference,m=await(i.getOffsetParent==null?void 0:i.getOffsetParent(s.floating)),_=await(i.isElement==null?void 0:i.isElement(m))?await(i.getScale==null?void 0:i.getScale(m))||{x:1,y:1}:{x:1,y:1},x=Wi(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({rect:c,offsetParent:m,strategy:a}):c);return{top:(p.top-x.top+y.top)/_.y,bottom:(x.bottom-p.bottom+y.bottom)/_.y,left:(p.left-x.left+y.left)/_.x,right:(x.right-p.right+y.right)/_.x}}const tv=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:r,placement:o,rects:i,platform:l,elements:s,middlewareData:a}=t,{element:u,padding:h=0}=_r(e,t)||{};if(u==null)return{};const d=Mp(h),f={x:n,y:r},v=lu(o),y=iu(v),b=await l.getDimensions(u),T=v==="y",p=T?"top":"left",c=T?"bottom":"right",m=T?"clientHeight":"clientWidth",_=i.reference[y]+i.reference[v]-f[v]-i.floating[y],x=f[v]-i.reference[v],C=await(l.getOffsetParent==null?void 0:l.getOffsetParent(u));let E=C?C[m]:0;(!E||!await(l.isElement==null?void 0:l.isElement(C)))&&(E=s.floating[m]||i.floating[y]);const A=_/2-x/2,j=E/2-b[y]/2-1,R=on(d[p],j),le=on(d[c],j),$=R,S=E-b[y]-le,F=E/2-b[y]/2+A,G=Zs($,F,S),Pe=!a.arrow&&xr(o)!=null&&F!=G&&i.reference[y]/2-(F<$?R:le)-b[y]/2<0,Fe=Pe?F<$?F-$:F-S:0;return{[v]:f[v]+Fe,data:{[v]:G,centerOffset:F-G-Fe,...Pe&&{alignmentOffset:Fe}},reset:Pe}}}),nv=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:o,middlewareData:i,rects:l,initialPlacement:s,platform:a,elements:u}=t,{mainAxis:h=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:v="bestFit",fallbackAxisSideDirection:y="none",flipAlignment:b=!0,...T}=_r(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};const p=sn(o),c=sn(s)===s,m=await(a.isRTL==null?void 0:a.isRTL(u.floating)),_=f||(c||!b?[Ui(s)]:G0(s));!f&&y!=="none"&&_.push(...Z0(s,b,y,m));const x=[s,..._],C=await su(t,T),E=[];let A=((r=i.flip)==null?void 0:r.overflows)||[];if(h&&E.push(C[p]),d){const $=q0(o,l,m);E.push(C[$[0]],C[$[1]])}if(A=[...A,{placement:o,overflows:E}],!E.every($=>$<=0)){var j,R;const $=(((j=i.flip)==null?void 0:j.index)||0)+1,S=x[$];if(S)return{data:{index:$,overflows:A},reset:{placement:S}};let F=(R=A.filter(G=>G.overflows[0]<=0).sort((G,Pe)=>G.overflows[1]-Pe.overflows[1])[0])==null?void 0:R.placement;if(!F)switch(v){case"bestFit":{var le;const G=(le=A.map(Pe=>[Pe.placement,Pe.overflows.filter(Fe=>Fe>0).reduce((Fe,z)=>Fe+z,0)]).sort((Pe,Fe)=>Pe[1]-Fe[1])[0])==null?void 0:le[0];G&&(F=G);break}case"initialPlacement":F=s;break}if(o!==F)return{reset:{placement:F}}}return{}}}};async function rv(e,t){const{placement:n,platform:r,elements:o}=e,i=await(r.isRTL==null?void 0:r.isRTL(o.floating)),l=sn(n),s=xr(n),a=Ao(n)==="y",u=["left","top"].includes(l)?-1:1,h=i&&a?-1:1,d=_r(t,e);let{mainAxis:f,crossAxis:v,alignmentAxis:y}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return s&&typeof y=="number"&&(v=s==="end"?y*-1:y),a?{x:v*h,y:f*u}:{x:f*u,y:v*h}}const ov=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){const{x:n,y:r}=t,o=await rv(t,e);return{x:n+o.x,y:r+o.y,data:o}}}},iv=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:o}=t,{mainAxis:i=!0,crossAxis:l=!1,limiter:s={fn:T=>{let{x:p,y:c}=T;return{x:p,y:c}}},...a}=_r(e,t),u={x:n,y:r},h=await su(t,a),d=Ao(sn(o)),f=Rp(d);let v=u[f],y=u[d];if(i){const T=f==="y"?"top":"left",p=f==="y"?"bottom":"right",c=v+h[T],m=v-h[p];v=Zs(c,v,m)}if(l){const T=d==="y"?"top":"left",p=d==="y"?"bottom":"right",c=y+h[T],m=y-h[p];y=Zs(c,y,m)}const b=s.fn({...t,[f]:v,[d]:y});return{...b,data:{x:b.x-n,y:b.y-r}}}}},Wc=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:n,rects:r,platform:o,elements:i}=t,{apply:l=()=>{},...s}=_r(e,t),a=await su(t,s),u=sn(n),h=xr(n),d=Ao(n)==="y",{width:f,height:v}=r.floating;let y,b;u==="top"||u==="bottom"?(y=u,b=h===(await(o.isRTL==null?void 0:o.isRTL(i.floating))?"start":"end")?"left":"right"):(b=u,y=h==="end"?"top":"bottom");const T=v-a[y],p=f-a[b],c=!t.middlewareData.shift;let m=T,_=p;if(d){const C=f-a.left-a.right;_=h||c?on(p,C):C}else{const C=v-a.top-a.bottom;m=h||c?on(T,C):C}if(c&&!h){const C=Be(a.left,0),E=Be(a.right,0),A=Be(a.top,0),j=Be(a.bottom,0);d?_=f-2*(C!==0||E!==0?C+E:Be(a.left,a.right)):m=v-2*(A!==0||j!==0?A+j:Be(a.top,a.bottom))}await l({...t,availableWidth:_,availableHeight:m});const x=await o.getDimensions(i.floating);return f!==x.width||v!==x.height?{reset:{rects:!0}}:{}}}};function an(e){return Op(e)?(e.nodeName||"").toLowerCase():"#document"}function Ke(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Mt(e){var t;return(t=(Op(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Op(e){return e instanceof Node||e instanceof Ke(e).Node}function Nt(e){return e instanceof Element||e instanceof Ke(e).Element}function xt(e){return e instanceof HTMLElement||e instanceof Ke(e).HTMLElement}function Kc(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Ke(e).ShadowRoot}function zo(e){const{overflow:t,overflowX:n,overflowY:r,display:o}=it(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(o)}function lv(e){return["table","td","th"].includes(an(e))}function au(e){const t=uu(),n=it(e);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(r=>(n.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(n.contain||"").includes(r))}function sv(e){let t=mr(e);for(;xt(t)&&!hl(t);){if(au(t))return t;t=mr(t)}return null}function uu(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function hl(e){return["html","body","#document"].includes(an(e))}function it(e){return Ke(e).getComputedStyle(e)}function pl(e){return Nt(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function mr(e){if(an(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Kc(e)&&e.host||Mt(e);return Kc(t)?t.host:t}function Dp(e){const t=mr(e);return hl(t)?e.ownerDocument?e.ownerDocument.body:e.body:xt(t)&&zo(t)?t:Dp(t)}function _o(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const o=Dp(e),i=o===((r=e.ownerDocument)==null?void 0:r.body),l=Ke(o);return i?t.concat(l,l.visualViewport||[],zo(o)?o:[],l.frameElement&&n?_o(l.frameElement):[]):t.concat(o,_o(o))}function Fp(e){const t=it(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const o=xt(e),i=o?e.offsetWidth:n,l=o?e.offsetHeight:r,s=Hi(n)!==i||Hi(r)!==l;return s&&(n=i,r=l),{width:n,height:r,$:s}}function cu(e){return Nt(e)?e:e.contextElement}function lr(e){const t=cu(e);if(!xt(t))return ln(1);const n=t.getBoundingClientRect(),{width:r,height:o,$:i}=Fp(t);let l=(i?Hi(n.width):n.width)/r,s=(i?Hi(n.height):n.height)/o;return(!l||!Number.isFinite(l))&&(l=1),(!s||!Number.isFinite(s))&&(s=1),{x:l,y:s}}const av=ln(0);function Ip(e){const t=Ke(e);return!uu()||!t.visualViewport?av:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function uv(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==Ke(e)?!1:t}function Nn(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const o=e.getBoundingClientRect(),i=cu(e);let l=ln(1);t&&(r?Nt(r)&&(l=lr(r)):l=lr(e));const s=uv(i,n,r)?Ip(i):ln(0);let a=(o.left+s.x)/l.x,u=(o.top+s.y)/l.y,h=o.width/l.x,d=o.height/l.y;if(i){const f=Ke(i),v=r&&Nt(r)?Ke(r):r;let y=f.frameElement;for(;y&&r&&v!==f;){const b=lr(y),T=y.getBoundingClientRect(),p=it(y),c=T.left+(y.clientLeft+parseFloat(p.paddingLeft))*b.x,m=T.top+(y.clientTop+parseFloat(p.paddingTop))*b.y;a*=b.x,u*=b.y,h*=b.x,d*=b.y,a+=c,u+=m,y=Ke(y).frameElement}}return Wi({width:h,height:d,x:a,y:u})}function cv(e){let{rect:t,offsetParent:n,strategy:r}=e;const o=xt(n),i=Mt(n);if(n===i)return t;let l={scrollLeft:0,scrollTop:0},s=ln(1);const a=ln(0);if((o||!o&&r!=="fixed")&&((an(n)!=="body"||zo(i))&&(l=pl(n)),xt(n))){const u=Nn(n);s=lr(n),a.x=u.x+n.clientLeft,a.y=u.y+n.clientTop}return{width:t.width*s.x,height:t.height*s.y,x:t.x*s.x-l.scrollLeft*s.x+a.x,y:t.y*s.y-l.scrollTop*s.y+a.y}}function dv(e){return Array.from(e.getClientRects())}function Vp(e){return Nn(Mt(e)).left+pl(e).scrollLeft}function hv(e){const t=Mt(e),n=pl(e),r=e.ownerDocument.body,o=Be(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),i=Be(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let l=-n.scrollLeft+Vp(e);const s=-n.scrollTop;return it(r).direction==="rtl"&&(l+=Be(t.clientWidth,r.clientWidth)-o),{width:o,height:i,x:l,y:s}}function pv(e,t){const n=Ke(e),r=Mt(e),o=n.visualViewport;let i=r.clientWidth,l=r.clientHeight,s=0,a=0;if(o){i=o.width,l=o.height;const u=uu();(!u||u&&t==="fixed")&&(s=o.offsetLeft,a=o.offsetTop)}return{width:i,height:l,x:s,y:a}}function fv(e,t){const n=Nn(e,!0,t==="fixed"),r=n.top+e.clientTop,o=n.left+e.clientLeft,i=xt(e)?lr(e):ln(1),l=e.clientWidth*i.x,s=e.clientHeight*i.y,a=o*i.x,u=r*i.y;return{width:l,height:s,x:a,y:u}}function Qc(e,t,n){let r;if(t==="viewport")r=pv(e,n);else if(t==="document")r=hv(Mt(e));else if(Nt(t))r=fv(t,n);else{const o=Ip(e);r={...t,x:t.x-o.x,y:t.y-o.y}}return Wi(r)}function Bp(e,t){const n=mr(e);return n===t||!Nt(n)||hl(n)?!1:it(n).position==="fixed"||Bp(n,t)}function gv(e,t){const n=t.get(e);if(n)return n;let r=_o(e,[],!1).filter(s=>Nt(s)&&an(s)!=="body"),o=null;const i=it(e).position==="fixed";let l=i?mr(e):e;for(;Nt(l)&&!hl(l);){const s=it(l),a=au(l);!a&&s.position==="fixed"&&(o=null),(i?!a&&!o:!a&&s.position==="static"&&!!o&&["absolute","fixed"].includes(o.position)||zo(l)&&!a&&Bp(e,l))?r=r.filter(h=>h!==l):o=s,l=mr(l)}return t.set(e,r),r}function mv(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e;const l=[...n==="clippingAncestors"?gv(t,this._c):[].concat(n),r],s=l[0],a=l.reduce((u,h)=>{const d=Qc(t,h,o);return u.top=Be(d.top,u.top),u.right=on(d.right,u.right),u.bottom=on(d.bottom,u.bottom),u.left=Be(d.left,u.left),u},Qc(t,s,o));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function vv(e){return Fp(e)}function yv(e,t,n){const r=xt(t),o=Mt(t),i=n==="fixed",l=Nn(e,!0,i,t);let s={scrollLeft:0,scrollTop:0};const a=ln(0);if(r||!r&&!i)if((an(t)!=="body"||zo(o))&&(s=pl(t)),r){const u=Nn(t,!0,i,t);a.x=u.x+t.clientLeft,a.y=u.y+t.clientTop}else o&&(a.x=Vp(o));return{x:l.left+s.scrollLeft-a.x,y:l.top+s.scrollTop-a.y,width:l.width,height:l.height}}function Yc(e,t){return!xt(e)||it(e).position==="fixed"?null:t?t(e):e.offsetParent}function jp(e,t){const n=Ke(e);if(!xt(e))return n;let r=Yc(e,t);for(;r&&lv(r)&&it(r).position==="static";)r=Yc(r,t);return r&&(an(r)==="html"||an(r)==="body"&&it(r).position==="static"&&!au(r))?n:r||sv(e)||n}const wv=async function(e){let{reference:t,floating:n,strategy:r}=e;const o=this.getOffsetParent||jp,i=this.getDimensions;return{reference:yv(t,await o(n),r),floating:{x:0,y:0,...await i(n)}}};function bv(e){return it(e).direction==="rtl"}const gi={convertOffsetParentRelativeRectToViewportRelativeRect:cv,getDocumentElement:Mt,getClippingRect:mv,getOffsetParent:jp,getElementRects:wv,getClientRects:dv,getDimensions:vv,getScale:lr,isElement:Nt,isRTL:bv};function _v(e,t){let n=null,r;const o=Mt(e);function i(){clearTimeout(r),n&&n.disconnect(),n=null}function l(s,a){s===void 0&&(s=!1),a===void 0&&(a=1),i();const{left:u,top:h,width:d,height:f}=e.getBoundingClientRect();if(s||t(),!d||!f)return;const v=Zo(h),y=Zo(o.clientWidth-(u+d)),b=Zo(o.clientHeight-(h+f)),T=Zo(u),c={rootMargin:-v+"px "+-y+"px "+-b+"px "+-T+"px",threshold:Be(0,on(1,a))||1};let m=!0;function _(x){const C=x[0].intersectionRatio;if(C!==a){if(!m)return l();C?l(!1,C):r=setTimeout(()=>{l(!1,1e-7)},100)}m=!1}try{n=new IntersectionObserver(_,{...c,root:o.ownerDocument})}catch{n=new IntersectionObserver(_,c)}n.observe(e)}return l(!0),i}function xv(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:o=!0,ancestorResize:i=!0,elementResize:l=typeof ResizeObserver=="function",layoutShift:s=typeof IntersectionObserver=="function",animationFrame:a=!1}=r,u=cu(e),h=o||i?[...u?_o(u):[],..._o(t)]:[];h.forEach(p=>{o&&p.addEventListener("scroll",n,{passive:!0}),i&&p.addEventListener("resize",n)});const d=u&&s?_v(u,n):null;let f=-1,v=null;l&&(v=new ResizeObserver(p=>{let[c]=p;c&&c.target===u&&v&&(v.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{v&&v.observe(t)})),n()}),u&&!a&&v.observe(u),v.observe(t));let y,b=a?Nn(e):null;a&&T();function T(){const p=Nn(e);b&&(p.x!==b.x||p.y!==b.y||p.width!==b.width||p.height!==b.height)&&n(),b=p,y=requestAnimationFrame(T)}return n(),()=>{h.forEach(p=>{o&&p.removeEventListener("scroll",n),i&&p.removeEventListener("resize",n)}),d&&d(),v&&v.disconnect(),v=null,a&&cancelAnimationFrame(y)}}const kv=(e,t,n)=>{const r=new Map,o={platform:gi,...n},i={...o.platform,_c:r};return ev(e,t,{...o,platform:i})};function Sv(e){return Cv(e)}function Gl(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function Cv(e){for(let t=e;t;t=Gl(t))if(t instanceof Element&&getComputedStyle(t).display==="none")return null;for(let t=Gl(e);t;t=Gl(t)){if(!(t instanceof Element))continue;const n=getComputedStyle(t);if(n.display!=="contents"&&(n.position!=="static"||n.filter!=="none"||t.tagName==="BODY"))return t}return null}function Ev(e){return e!==null&&typeof e=="object"&&"getBoundingClientRect"in e&&("contextElement"in e?e instanceof Element:!0)}var Q=class extends ke{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),n=this.placement.includes("top")||this.placement.includes("bottom");let r=0,o=0,i=0,l=0,s=0,a=0,u=0,h=0;n?e.top<t.top?(r=e.left,o=e.bottom,i=e.right,l=e.bottom,s=t.left,a=t.top,u=t.right,h=t.top):(r=t.left,o=t.bottom,i=t.right,l=t.bottom,s=e.left,a=e.top,u=e.right,h=e.top):e.left<t.left?(r=e.right,o=e.top,i=t.left,l=t.top,s=e.right,a=e.bottom,u=t.left,h=t.bottom):(r=t.right,o=t.top,i=e.left,l=e.top,s=t.right,a=t.bottom,u=e.left,h=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${r}px`),this.style.setProperty("--hover-bridge-top-left-y",`${o}px`),this.style.setProperty("--hover-bridge-top-right-x",`${i}px`),this.style.setProperty("--hover-bridge-top-right-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${s}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${a}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${u}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${h}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||Ev(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){this.anchorEl&&(this.cleanup=xv(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl)return;const e=[ov({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(Wc({apply:({rects:n})=>{const r=this.sync==="width"||this.sync==="both",o=this.sync==="height"||this.sync==="both";this.popup.style.width=r?`${n.reference.width}px`:"",this.popup.style.height=o?`${n.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(nv({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(iv({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(Wc({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:n,availableHeight:r})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${r}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${n}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(tv({element:this.arrowEl,padding:this.arrowPadding}));const t=this.strategy==="absolute"?n=>gi.getOffsetParent(n,Sv):gi.getOffsetParent;kv(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:al(On({},gi),{getOffsetParent:t})}).then(({x:n,y:r,middlewareData:o,placement:i})=>{const l=getComputedStyle(this).direction==="rtl",s={top:"bottom",right:"left",bottom:"top",left:"right"}[i.split("-")[0]];if(this.setAttribute("data-current-placement",i),Object.assign(this.popup.style,{left:`${n}px`,top:`${r}px`}),this.arrow){const a=o.arrow.x,u=o.arrow.y;let h="",d="",f="",v="";if(this.arrowPlacement==="start"){const y=typeof a=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";h=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",d=l?y:"",v=l?"":y}else if(this.arrowPlacement==="end"){const y=typeof a=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";d=l?"":y,v=l?y:"",f=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(v=typeof a=="number"?"calc(50% - var(--arrow-size-diagonal))":"",h=typeof u=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(v=typeof a=="number"?`${a}px`:"",h=typeof u=="number"?`${u}px`:"");Object.assign(this.arrowEl.style,{top:h,right:d,bottom:f,left:v,[s]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return X`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${We({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${We({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?X`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};Q.styles=[lt,K0];g([fe(".popup")],Q.prototype,"popup",2);g([fe(".popup__arrow")],Q.prototype,"arrowEl",2);g([w()],Q.prototype,"anchor",2);g([w({type:Boolean,reflect:!0})],Q.prototype,"active",2);g([w({reflect:!0})],Q.prototype,"placement",2);g([w({reflect:!0})],Q.prototype,"strategy",2);g([w({type:Number})],Q.prototype,"distance",2);g([w({type:Number})],Q.prototype,"skidding",2);g([w({type:Boolean})],Q.prototype,"arrow",2);g([w({attribute:"arrow-placement"})],Q.prototype,"arrowPlacement",2);g([w({attribute:"arrow-padding",type:Number})],Q.prototype,"arrowPadding",2);g([w({type:Boolean})],Q.prototype,"flip",2);g([w({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:e=>e.join(" ")}})],Q.prototype,"flipFallbackPlacements",2);g([w({attribute:"flip-fallback-strategy"})],Q.prototype,"flipFallbackStrategy",2);g([w({type:Object})],Q.prototype,"flipBoundary",2);g([w({attribute:"flip-padding",type:Number})],Q.prototype,"flipPadding",2);g([w({type:Boolean})],Q.prototype,"shift",2);g([w({type:Object})],Q.prototype,"shiftBoundary",2);g([w({attribute:"shift-padding",type:Number})],Q.prototype,"shiftPadding",2);g([w({attribute:"auto-size"})],Q.prototype,"autoSize",2);g([w()],Q.prototype,"sync",2);g([w({type:Object})],Q.prototype,"autoSizeBoundary",2);g([w({attribute:"auto-size-padding",type:Number})],Q.prototype,"autoSizePadding",2);g([w({attribute:"hover-bridge",type:Boolean})],Q.prototype,"hoverBridge",2);var Se=class extends ke{constructor(){super(...arguments),this.localize=new br(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=e=>{this.open&&e.key==="Escape"&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=e=>{var t;if(e.key==="Escape"&&this.open&&!this.closeWatcher){e.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(e.key==="Tab"){if(this.open&&((t=document.activeElement)==null?void 0:t.tagName.toLowerCase())==="sl-menu-item"){e.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var n,r,o;const i=((n=this.containingElement)==null?void 0:n.getRootNode())instanceof ShadowRoot?(o=(r=document.activeElement)==null?void 0:r.shadowRoot)==null?void 0:o.activeElement:document.activeElement;(!this.containingElement||(i==null?void 0:i.closest(this.containingElement.tagName.toLowerCase()))!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=e=>{const t=e.target;!this.stayOpenOnSelect&&t.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const e=this.trigger.assignedElements({flatten:!0})[0];typeof(e==null?void 0:e.focus)=="function"&&e.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(e=>e.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(e){if([" ","Enter"].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}const t=this.getMenu();if(t){const n=t.getAllItems(),r=n[0],o=n[n.length-1];["ArrowDown","ArrowUp","Home","End"].includes(e.key)&&(e.preventDefault(),this.open||(this.show(),await this.updateComplete),n.length>0&&this.updateComplete.then(()=>{(e.key==="ArrowDown"||e.key==="Home")&&(t.setCurrentItem(r),r.focus()),(e.key==="ArrowUp"||e.key==="End")&&(t.setCurrentItem(o),o.focus())}))}}handleTriggerKeyUp(e){e.key===" "&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const t=this.trigger.assignedElements({flatten:!0}).find(r=>Sm(r).start);let n;if(t){switch(t.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":n=t.button;break;default:n=t}n.setAttribute("aria-haspopup","true"),n.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,ji(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ji(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var e;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var e;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),(e=this.closeWatcher)==null||e.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await Zn(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=vn(this,"dropdown.show",{dir:this.localize.dir()});await yn(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await Zn(this);const{keyframes:e,options:t}=vn(this,"dropdown.hide",{dir:this.localize.dir()});await yn(this.popup.popup,e,t),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return X`
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
        sync=${N(this.sync?this.sync:void 0)}
        class=${We({dropdown:!0,"dropdown--open":this.open})}
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
    `}};Se.styles=[lt,W0];Se.dependencies={"sl-popup":Q};g([fe(".dropdown")],Se.prototype,"popup",2);g([fe(".dropdown__trigger")],Se.prototype,"trigger",2);g([fe(".dropdown__panel")],Se.prototype,"panel",2);g([w({type:Boolean,reflect:!0})],Se.prototype,"open",2);g([w({reflect:!0})],Se.prototype,"placement",2);g([w({type:Boolean,reflect:!0})],Se.prototype,"disabled",2);g([w({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],Se.prototype,"stayOpenOnSelect",2);g([w({attribute:!1})],Se.prototype,"containingElement",2);g([w({type:Number})],Se.prototype,"distance",2);g([w({type:Number})],Se.prototype,"skidding",2);g([w({type:Boolean})],Se.prototype,"hoist",2);g([w({reflect:!0})],Se.prototype,"sync",2);g([De("open",{waitUntilFirstUpdate:!0})],Se.prototype,"handleOpenChange",1);Dn("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});Dn("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});var $v=Oe`
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
    -webkit-user-select: none;
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
    background-position:
      0 0,
      0 0,
      -5px -5px,
      5px 5px;
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
    box-shadow:
      inset 0 0 0 2px var(--sl-input-border-color),
      inset 0 0 0 4px var(--sl-color-neutral-0);
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
`;function Xe(e,t,n){const r=o=>Object.is(o,-0)?0:o;return e<t?r(t):e>n?r(n):r(e)}var Av=Oe`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
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
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`,Hp=class extends ke{constructor(){super(...arguments),this.localize=new br(this)}render(){return X`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Hp.styles=[lt,Av];var zv=Oe`
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
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
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

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
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
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button[checked]]) {
    z-index: 2;
  }
`,W=class extends ke{constructor(){super(...arguments),this.formControlController=new dl(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new cl(this,"[default]","prefix","suffix"),this.localize=new br(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:ou}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink(),t=e?Bi`a`:Bi`button`;return fi`
      <${t}
        part="base"
        class=${We({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
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
    `}};W.styles=[lt,zv];W.dependencies={"sl-icon":st,"sl-spinner":Hp};g([fe(".button")],W.prototype,"button",2);g([ze()],W.prototype,"hasFocus",2);g([ze()],W.prototype,"invalid",2);g([w()],W.prototype,"title",2);g([w({reflect:!0})],W.prototype,"variant",2);g([w({reflect:!0})],W.prototype,"size",2);g([w({type:Boolean,reflect:!0})],W.prototype,"caret",2);g([w({type:Boolean,reflect:!0})],W.prototype,"disabled",2);g([w({type:Boolean,reflect:!0})],W.prototype,"loading",2);g([w({type:Boolean,reflect:!0})],W.prototype,"outline",2);g([w({type:Boolean,reflect:!0})],W.prototype,"pill",2);g([w({type:Boolean,reflect:!0})],W.prototype,"circle",2);g([w()],W.prototype,"type",2);g([w()],W.prototype,"name",2);g([w()],W.prototype,"value",2);g([w()],W.prototype,"href",2);g([w()],W.prototype,"target",2);g([w()],W.prototype,"rel",2);g([w()],W.prototype,"download",2);g([w()],W.prototype,"form",2);g([w({attribute:"formaction"})],W.prototype,"formAction",2);g([w({attribute:"formenctype"})],W.prototype,"formEnctype",2);g([w({attribute:"formmethod"})],W.prototype,"formMethod",2);g([w({attribute:"formnovalidate",type:Boolean})],W.prototype,"formNoValidate",2);g([w({attribute:"formtarget"})],W.prototype,"formTarget",2);g([De("disabled",{waitUntilFirstUpdate:!0})],W.prototype,"handleDisabledChange",1);var Pv=Oe`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,Po=class extends ke{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(e){const t=Dr(e.target);t==null||t.toggleAttribute("data-sl-button-group__button--focus",!0)}handleBlur(e){const t=Dr(e.target);t==null||t.toggleAttribute("data-sl-button-group__button--focus",!1)}handleMouseOver(e){const t=Dr(e.target);t==null||t.toggleAttribute("data-sl-button-group__button--hover",!0)}handleMouseOut(e){const t=Dr(e.target);t==null||t.toggleAttribute("data-sl-button-group__button--hover",!1)}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})];e.forEach(t=>{const n=e.indexOf(t),r=Dr(t);r&&(r.toggleAttribute("data-sl-button-group__button",!0),r.toggleAttribute("data-sl-button-group__button--first",n===0),r.toggleAttribute("data-sl-button-group__button--inner",n>0&&n<e.length-1),r.toggleAttribute("data-sl-button-group__button--last",n===e.length-1),r.toggleAttribute("data-sl-button-group__button--radio",r.tagName.toLowerCase()==="sl-radio-button"))})}render(){return X`
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
    `}};Po.styles=[lt,Pv];g([fe("slot")],Po.prototype,"defaultSlot",2);g([ze()],Po.prototype,"disableRole",2);g([w()],Po.prototype,"label",2);function Dr(e){var t;const n="sl-button, sl-radio-button";return(t=e.closest(n))!=null?t:e.querySelector(n)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Up="important",Tv=" !"+Up,Dt=eu(class extends tu{constructor(e){var t;if(super(e),e.type!==Vt.ATTRIBUTE||e.name!=="style"||((t=e.strings)==null?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{const r=e[n];return r==null?t:t+`${n=n.includes("-")?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(e,[t]){const{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const r of this.ft)t[r]==null&&(this.ft.delete(r),r.includes("-")?n.removeProperty(r):n[r]=null);for(const r in t){const o=t[r];if(o!=null){this.ft.add(r);const i=typeof o=="string"&&o.endsWith(Tv);r.includes("-")||i?n.setProperty(r,i?o.slice(0,-11):o,i?Up:""):n[r]=o}}return tt}});function ve(e,t){Lv(e)&&(e="100%");const n=Nv(e);return e=t===360?e:Math.min(t,Math.max(0,parseFloat(e))),n&&(e=parseInt(String(e*t),10)/100),Math.abs(e-t)<1e-6?1:(t===360?e=(e<0?e%t+t:e%t)/parseFloat(String(t)):e=e%t/parseFloat(String(t)),e)}function Jo(e){return Math.min(1,Math.max(0,e))}function Lv(e){return typeof e=="string"&&e.indexOf(".")!==-1&&parseFloat(e)===1}function Nv(e){return typeof e=="string"&&e.indexOf("%")!==-1}function Wp(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function ei(e){return Number(e)<=1?`${Number(e)*100}%`:e}function Sn(e){return e.length===1?"0"+e:String(e)}function Rv(e,t,n){return{r:ve(e,255)*255,g:ve(t,255)*255,b:ve(n,255)*255}}function qc(e,t,n){e=ve(e,255),t=ve(t,255),n=ve(n,255);const r=Math.max(e,t,n),o=Math.min(e,t,n);let i=0,l=0;const s=(r+o)/2;if(r===o)l=0,i=0;else{const a=r-o;switch(l=s>.5?a/(2-r-o):a/(r+o),r){case e:i=(t-n)/a+(t<n?6:0);break;case t:i=(n-e)/a+2;break;case n:i=(e-t)/a+4;break}i/=6}return{h:i,s:l,l:s}}function Xl(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*(6*n):n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Mv(e,t,n){let r,o,i;if(e=ve(e,360),t=ve(t,100),n=ve(n,100),t===0)o=n,i=n,r=n;else{const l=n<.5?n*(1+t):n+t-n*t,s=2*n-l;r=Xl(s,l,e+1/3),o=Xl(s,l,e),i=Xl(s,l,e-1/3)}return{r:r*255,g:o*255,b:i*255}}function Gc(e,t,n){e=ve(e,255),t=ve(t,255),n=ve(n,255);const r=Math.max(e,t,n),o=Math.min(e,t,n);let i=0;const l=r,s=r-o,a=r===0?0:s/r;if(r===o)i=0;else{switch(r){case e:i=(t-n)/s+(t<n?6:0);break;case t:i=(n-e)/s+2;break;case n:i=(e-t)/s+4;break}i/=6}return{h:i,s:a,v:l}}function Ov(e,t,n){e=ve(e,360)*6,t=ve(t,100),n=ve(n,100);const r=Math.floor(e),o=e-r,i=n*(1-t),l=n*(1-o*t),s=n*(1-(1-o)*t),a=r%6,u=[n,l,i,i,s,n][a],h=[s,n,n,l,i,i][a],d=[i,i,s,n,n,l][a];return{r:u*255,g:h*255,b:d*255}}function Xc(e,t,n,r){const o=[Sn(Math.round(e).toString(16)),Sn(Math.round(t).toString(16)),Sn(Math.round(n).toString(16))];return r&&o[0].startsWith(o[0].charAt(1))&&o[1].startsWith(o[1].charAt(1))&&o[2].startsWith(o[2].charAt(1))?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function Dv(e,t,n,r,o){const i=[Sn(Math.round(e).toString(16)),Sn(Math.round(t).toString(16)),Sn(Math.round(n).toString(16)),Sn(Fv(r))];return o&&i[0].startsWith(i[0].charAt(1))&&i[1].startsWith(i[1].charAt(1))&&i[2].startsWith(i[2].charAt(1))&&i[3].startsWith(i[3].charAt(1))?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0):i.join("")}function Fv(e){return Math.round(parseFloat(e)*255).toString(16)}function Zc(e){return Ie(e)/255}function Ie(e){return parseInt(e,16)}function Iv(e){return{r:e>>16,g:(e&65280)>>8,b:e&255}}const ea={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function Vv(e){let t={r:0,g:0,b:0},n=1,r=null,o=null,i=null,l=!1,s=!1;return typeof e=="string"&&(e=Hv(e)),typeof e=="object"&&(kt(e.r)&&kt(e.g)&&kt(e.b)?(t=Rv(e.r,e.g,e.b),l=!0,s=String(e.r).substr(-1)==="%"?"prgb":"rgb"):kt(e.h)&&kt(e.s)&&kt(e.v)?(r=ei(e.s),o=ei(e.v),t=Ov(e.h,r,o),l=!0,s="hsv"):kt(e.h)&&kt(e.s)&&kt(e.l)&&(r=ei(e.s),i=ei(e.l),t=Mv(e.h,r,i),l=!0,s="hsl"),Object.prototype.hasOwnProperty.call(e,"a")&&(n=e.a)),n=Wp(n),{ok:l,format:e.format||s,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:n}}const Bv="[-\\+]?\\d+%?",jv="[-\\+]?\\d*\\.\\d+%?",Kt="(?:"+jv+")|(?:"+Bv+")",Zl="[\\s|\\(]+("+Kt+")[,|\\s]+("+Kt+")[,|\\s]+("+Kt+")\\s*\\)?",Jl="[\\s|\\(]+("+Kt+")[,|\\s]+("+Kt+")[,|\\s]+("+Kt+")[,|\\s]+("+Kt+")\\s*\\)?",ut={CSS_UNIT:new RegExp(Kt),rgb:new RegExp("rgb"+Zl),rgba:new RegExp("rgba"+Jl),hsl:new RegExp("hsl"+Zl),hsla:new RegExp("hsla"+Jl),hsv:new RegExp("hsv"+Zl),hsva:new RegExp("hsva"+Jl),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function Hv(e){if(e=e.trim().toLowerCase(),e.length===0)return!1;let t=!1;if(ea[e])e=ea[e],t=!0;else if(e==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let n=ut.rgb.exec(e);return n?{r:n[1],g:n[2],b:n[3]}:(n=ut.rgba.exec(e),n?{r:n[1],g:n[2],b:n[3],a:n[4]}:(n=ut.hsl.exec(e),n?{h:n[1],s:n[2],l:n[3]}:(n=ut.hsla.exec(e),n?{h:n[1],s:n[2],l:n[3],a:n[4]}:(n=ut.hsv.exec(e),n?{h:n[1],s:n[2],v:n[3]}:(n=ut.hsva.exec(e),n?{h:n[1],s:n[2],v:n[3],a:n[4]}:(n=ut.hex8.exec(e),n?{r:Ie(n[1]),g:Ie(n[2]),b:Ie(n[3]),a:Zc(n[4]),format:t?"name":"hex8"}:(n=ut.hex6.exec(e),n?{r:Ie(n[1]),g:Ie(n[2]),b:Ie(n[3]),format:t?"name":"hex"}:(n=ut.hex4.exec(e),n?{r:Ie(n[1]+n[1]),g:Ie(n[2]+n[2]),b:Ie(n[3]+n[3]),a:Zc(n[4]+n[4]),format:t?"name":"hex8"}:(n=ut.hex3.exec(e),n?{r:Ie(n[1]+n[1]),g:Ie(n[2]+n[2]),b:Ie(n[3]+n[3]),format:t?"name":"hex"}:!1)))))))))}function kt(e){return typeof e=="number"?!Number.isNaN(e):ut.CSS_UNIT.test(e)}class ne{constructor(t="",n={}){if(t instanceof ne)return t;typeof t=="number"&&(t=Iv(t)),this.originalInput=t;const r=Vv(t);this.originalInput=t,this.r=r.r,this.g=r.g,this.b=r.b,this.a=r.a,this.roundA=Math.round(100*this.a)/100,this.format=n.format??r.format,this.gradientType=n.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=r.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){const t=this.toRgb();return(t.r*299+t.g*587+t.b*114)/1e3}getLuminance(){const t=this.toRgb();let n,r,o;const i=t.r/255,l=t.g/255,s=t.b/255;return i<=.03928?n=i/12.92:n=Math.pow((i+.055)/1.055,2.4),l<=.03928?r=l/12.92:r=Math.pow((l+.055)/1.055,2.4),s<=.03928?o=s/12.92:o=Math.pow((s+.055)/1.055,2.4),.2126*n+.7152*r+.0722*o}getAlpha(){return this.a}setAlpha(t){return this.a=Wp(t),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){const{s:t}=this.toHsl();return t===0}toHsv(){const t=Gc(this.r,this.g,this.b);return{h:t.h*360,s:t.s,v:t.v,a:this.a}}toHsvString(){const t=Gc(this.r,this.g,this.b),n=Math.round(t.h*360),r=Math.round(t.s*100),o=Math.round(t.v*100);return this.a===1?`hsv(${n}, ${r}%, ${o}%)`:`hsva(${n}, ${r}%, ${o}%, ${this.roundA})`}toHsl(){const t=qc(this.r,this.g,this.b);return{h:t.h*360,s:t.s,l:t.l,a:this.a}}toHslString(){const t=qc(this.r,this.g,this.b),n=Math.round(t.h*360),r=Math.round(t.s*100),o=Math.round(t.l*100);return this.a===1?`hsl(${n}, ${r}%, ${o}%)`:`hsla(${n}, ${r}%, ${o}%, ${this.roundA})`}toHex(t=!1){return Xc(this.r,this.g,this.b,t)}toHexString(t=!1){return"#"+this.toHex(t)}toHex8(t=!1){return Dv(this.r,this.g,this.b,this.a,t)}toHex8String(t=!1){return"#"+this.toHex8(t)}toHexShortString(t=!1){return this.a===1?this.toHexString(t):this.toHex8String(t)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){const t=Math.round(this.r),n=Math.round(this.g),r=Math.round(this.b);return this.a===1?`rgb(${t}, ${n}, ${r})`:`rgba(${t}, ${n}, ${r}, ${this.roundA})`}toPercentageRgb(){const t=n=>`${Math.round(ve(n,255)*100)}%`;return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}}toPercentageRgbString(){const t=n=>Math.round(ve(n,255)*100);return this.a===1?`rgb(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%)`:`rgba(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%, ${this.roundA})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;const t="#"+Xc(this.r,this.g,this.b,!1);for(const[n,r]of Object.entries(ea))if(t===r)return n;return!1}toString(t){const n=!!t;t=t??this.format;let r=!1;const o=this.a<1&&this.a>=0;return!n&&o&&(t.startsWith("hex")||t==="name")?t==="name"&&this.a===0?this.toName():this.toRgbString():(t==="rgb"&&(r=this.toRgbString()),t==="prgb"&&(r=this.toPercentageRgbString()),(t==="hex"||t==="hex6")&&(r=this.toHexString()),t==="hex3"&&(r=this.toHexString(!0)),t==="hex4"&&(r=this.toHex8String(!0)),t==="hex8"&&(r=this.toHex8String()),t==="name"&&(r=this.toName()),t==="hsl"&&(r=this.toHslString()),t==="hsv"&&(r=this.toHsvString()),r||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new ne(this.toString())}lighten(t=10){const n=this.toHsl();return n.l+=t/100,n.l=Jo(n.l),new ne(n)}brighten(t=10){const n=this.toRgb();return n.r=Math.max(0,Math.min(255,n.r-Math.round(255*-(t/100)))),n.g=Math.max(0,Math.min(255,n.g-Math.round(255*-(t/100)))),n.b=Math.max(0,Math.min(255,n.b-Math.round(255*-(t/100)))),new ne(n)}darken(t=10){const n=this.toHsl();return n.l-=t/100,n.l=Jo(n.l),new ne(n)}tint(t=10){return this.mix("white",t)}shade(t=10){return this.mix("black",t)}desaturate(t=10){const n=this.toHsl();return n.s-=t/100,n.s=Jo(n.s),new ne(n)}saturate(t=10){const n=this.toHsl();return n.s+=t/100,n.s=Jo(n.s),new ne(n)}greyscale(){return this.desaturate(100)}spin(t){const n=this.toHsl(),r=(n.h+t)%360;return n.h=r<0?360+r:r,new ne(n)}mix(t,n=50){const r=this.toRgb(),o=new ne(t).toRgb(),i=n/100,l={r:(o.r-r.r)*i+r.r,g:(o.g-r.g)*i+r.g,b:(o.b-r.b)*i+r.b,a:(o.a-r.a)*i+r.a};return new ne(l)}analogous(t=6,n=30){const r=this.toHsl(),o=360/n,i=[this];for(r.h=(r.h-(o*t>>1)+720)%360;--t;)r.h=(r.h+o)%360,i.push(new ne(r));return i}complement(){const t=this.toHsl();return t.h=(t.h+180)%360,new ne(t)}monochromatic(t=6){const n=this.toHsv(),{h:r}=n,{s:o}=n;let{v:i}=n;const l=[],s=1/t;for(;t--;)l.push(new ne({h:r,s:o,v:i})),i=(i+s)%1;return l}splitcomplement(){const t=this.toHsl(),{h:n}=t;return[this,new ne({h:(n+72)%360,s:t.s,l:t.l}),new ne({h:(n+216)%360,s:t.s,l:t.l})]}onBackground(t){const n=this.toRgb(),r=new ne(t).toRgb(),o=n.a+r.a*(1-n.a);return new ne({r:(n.r*n.a+r.r*r.a*(1-n.a))/o,g:(n.g*n.a+r.g*r.a*(1-n.a))/o,b:(n.b*n.a+r.b*r.a*(1-n.a))/o,a:o})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(t){const n=this.toHsl(),{h:r}=n,o=[this],i=360/t;for(let l=1;l<t;l++)o.push(new ne({h:(r+l*i)%360,s:n.s,l:n.l}));return o}equals(t){return this.toRgbString()===new ne(t).toRgbString()}}var Jc="EyeDropper"in window,V=class extends ke{constructor(){super(),this.formControlController=new dl(this),this.isSafeValue=!1,this.localize=new br(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.handleFocusOut=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.input.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")})}handleFormatToggle(){const e=["hex","rgb","hsl","hsv"],t=(e.indexOf(this.format)+1)%e.length;this.format=e[t],this.setColor(this.value),this.emit("sl-change"),this.emit("sl-input")}handleAlphaDrag(e){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),n=t.querySelector(".color-picker__slider-handle"),{width:r}=t.getBoundingClientRect();let o=this.value,i=this.value;n.focus(),e.preventDefault(),ql(t,{onMove:l=>{this.alpha=Xe(l/r*100,0,100),this.syncValues(),this.value!==i&&(i=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==o&&(o=this.value,this.emit("sl-change"))},initialEvent:e})}handleHueDrag(e){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),n=t.querySelector(".color-picker__slider-handle"),{width:r}=t.getBoundingClientRect();let o=this.value,i=this.value;n.focus(),e.preventDefault(),ql(t,{onMove:l=>{this.hue=Xe(l/r*360,0,360),this.syncValues(),this.value!==i&&(i=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==o&&(o=this.value,this.emit("sl-change"))},initialEvent:e})}handleGridDrag(e){const t=this.shadowRoot.querySelector(".color-picker__grid"),n=t.querySelector(".color-picker__grid-handle"),{width:r,height:o}=t.getBoundingClientRect();let i=this.value,l=this.value;n.focus(),e.preventDefault(),this.isDraggingGridHandle=!0,ql(t,{onMove:(s,a)=>{this.saturation=Xe(s/r*100,0,100),this.brightness=Xe(100-a/o*100,0,100),this.syncValues(),this.value!==l&&(l=this.value,this.emit("sl-input"))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==i&&(i=this.value,this.emit("sl-change"))},initialEvent:e})}handleAlphaKeyDown(e){const t=e.shiftKey?10:1,n=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.alpha=Xe(this.alpha-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.alpha=Xe(this.alpha+t,0,100),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.alpha=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.alpha=100,this.syncValues()),this.value!==n&&(this.emit("sl-change"),this.emit("sl-input"))}handleHueKeyDown(e){const t=e.shiftKey?10:1,n=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.hue=Xe(this.hue-t,0,360),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.hue=Xe(this.hue+t,0,360),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.hue=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.hue=360,this.syncValues()),this.value!==n&&(this.emit("sl-change"),this.emit("sl-input"))}handleGridKeyDown(e){const t=e.shiftKey?10:1,n=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.saturation=Xe(this.saturation-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.saturation=Xe(this.saturation+t,0,100),this.syncValues()),e.key==="ArrowUp"&&(e.preventDefault(),this.brightness=Xe(this.brightness+t,0,100),this.syncValues()),e.key==="ArrowDown"&&(e.preventDefault(),this.brightness=Xe(this.brightness-t,0,100),this.syncValues()),this.value!==n&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputChange(e){const t=e.target,n=this.value;e.stopPropagation(),this.input.value?(this.setColor(t.value),t.value=this.value):this.value="",this.value!==n&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputInput(e){this.formControlController.updateValidity(),e.stopPropagation()}handleInputKeyDown(e){if(e.key==="Enter"){const t=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")),setTimeout(()=>this.input.select())):this.hue=0}}handleInputInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleTouchMove(e){e.preventDefault()}parseColor(e){const t=new ne(e);if(!t.isValid)return null;const n=t.toHsl(),r={h:n.h,s:n.s*100,l:n.l*100,a:n.a},o=t.toRgb(),i=t.toHexString(),l=t.toHex8String(),s=t.toHsv(),a={h:s.h,s:s.s*100,v:s.v*100,a:s.a};return{hsl:{h:r.h,s:r.s,l:r.l,string:this.setLetterCase(`hsl(${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%)`)},hsla:{h:r.h,s:r.s,l:r.l,a:r.a,string:this.setLetterCase(`hsla(${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%, ${r.a.toFixed(2).toString()})`)},hsv:{h:a.h,s:a.s,v:a.v,string:this.setLetterCase(`hsv(${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.v)}%)`)},hsva:{h:a.h,s:a.s,v:a.v,a:a.a,string:this.setLetterCase(`hsva(${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.v)}%, ${a.a.toFixed(2).toString()})`)},rgb:{r:o.r,g:o.g,b:o.b,string:this.setLetterCase(`rgb(${Math.round(o.r)}, ${Math.round(o.g)}, ${Math.round(o.b)})`)},rgba:{r:o.r,g:o.g,b:o.b,a:o.a,string:this.setLetterCase(`rgba(${Math.round(o.r)}, ${Math.round(o.g)}, ${Math.round(o.b)}, ${o.a.toFixed(2).toString()})`)},hex:this.setLetterCase(i),hexa:this.setLetterCase(l)}}setColor(e){const t=this.parseColor(e);return t===null?!1:(this.hue=t.hsva.h,this.saturation=t.hsva.s,this.brightness=t.hsva.v,this.alpha=this.opacity?t.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(e){return typeof e!="string"?"":this.uppercase?e.toUpperCase():e.toLowerCase()}async syncValues(){const e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);e!==null&&(this.format==="hsl"?this.inputValue=this.opacity?e.hsla.string:e.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?e.rgba.string:e.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?e.hsva.string:e.hsv.string:this.inputValue=this.opacity?e.hexa:e.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){if(!Jc)return;new EyeDropper().open().then(t=>{const n=this.value;this.setColor(t.sRGBHex),this.value!==n&&(this.emit("sl-change"),this.emit("sl-input"))}).catch(()=>{})}selectSwatch(e){const t=this.value;this.disabled||(this.setColor(e),this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")))}getHexString(e,t,n,r=100){const o=new ne(`hsva(${e}, ${t}%, ${n}%, ${r/100})`);return o.isValid?o.toHex8String():""}stopNestedEventPropagation(e){e.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(e,t){if(this.isEmpty=!t,t||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){const n=this.parseColor(t);n!==null?(this.inputValue=this.value,this.hue=n.hsva.h,this.saturation=n.hsva.s,this.brightness=n.hsva.v,this.alpha=n.hsva.a*100,this.syncValues()):this.inputValue=e??""}}focus(e){this.inline?this.base.focus(e):this.trigger.focus(e)}blur(){var e;const t=this.inline?this.base:this.trigger;this.hasFocus&&(t.focus({preventScroll:!0}),t.blur()),(e=this.dropdown)!=null&&e.open&&this.dropdown.hide()}getFormattedValue(e="hex"){const t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(t===null)return"";switch(e){case"hex":return t.hex;case"hexa":return t.hexa;case"rgb":return t.rgb.string;case"rgba":return t.rgba.string;case"hsl":return t.hsl.string;case"hsla":return t.hsla.string;case"hsv":return t.hsv.string;case"hsva":return t.hsva.string;default:return""}}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.inline&&!this.validity.valid?(this.dropdown.show(),this.addEventListener("sl-after-show",()=>this.input.reportValidity(),{once:!0}),this.disabled||this.formControlController.emitInvalidEvent(),!1):this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.saturation,t=100-this.brightness,n=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(o=>o.trim()!==""),r=X`
      <div
        part="base"
        class=${We({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled,"color-picker--focused":this.hasFocus})}
        aria-disabled=${this.disabled?"true":"false"}
        aria-labelledby="label"
        tabindex=${this.inline?"0":"-1"}
      >
        ${this.inline?X`
              <sl-visually-hidden id="label">
                <slot name="label">${this.label}</slot>
              </sl-visually-hidden>
            `:null}

        <div
          part="grid"
          class="color-picker__grid"
          style=${Dt({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${We({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${Dt({top:`${t}%`,left:`${e}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
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
                style=${Dt({left:`${this.hue===0?0:100/(360/this.hue)}%`})}
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

            ${this.opacity?X`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${Dt({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="color-picker__slider-handle"
                      style=${Dt({left:`${this.alpha}%`})}
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
            style=${Dt({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
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
            ${this.noFormatToggle?"":X`
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
            ${Jc?X`
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

        ${n.length>0?X`
              <div part="swatches" class="color-picker__swatches">
                ${n.map(o=>{const i=this.parseColor(o);return i?X`
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
                        style=${Dt({backgroundColor:i.hexa})}
                      ></div>
                    </div>
                  `:(console.error(`Unable to parse swatch color: "${o}"`,this),"")})}
              </div>
            `:""}
      </div>
    `;return this.inline?r:X`
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
          class=${We({"color-dropdown__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":this.size==="small","color-dropdown__trigger--medium":this.size==="medium","color-dropdown__trigger--large":this.size==="large","color-dropdown__trigger--empty":this.isEmpty,"color-dropdown__trigger--focused":this.hasFocus,"color-picker__transparent-bg":!0})}
          style=${Dt({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${r}
      </sl-dropdown>
    `}};V.styles=[lt,$v];V.dependencies={"sl-button-group":Po,"sl-button":W,"sl-dropdown":Se,"sl-icon":st,"sl-input":O,"sl-visually-hidden":Np};g([fe('[part~="base"]')],V.prototype,"base",2);g([fe('[part~="input"]')],V.prototype,"input",2);g([fe(".color-dropdown")],V.prototype,"dropdown",2);g([fe('[part~="preview"]')],V.prototype,"previewButton",2);g([fe('[part~="trigger"]')],V.prototype,"trigger",2);g([ze()],V.prototype,"hasFocus",2);g([ze()],V.prototype,"isDraggingGridHandle",2);g([ze()],V.prototype,"isEmpty",2);g([ze()],V.prototype,"inputValue",2);g([ze()],V.prototype,"hue",2);g([ze()],V.prototype,"saturation",2);g([ze()],V.prototype,"brightness",2);g([ze()],V.prototype,"alpha",2);g([w()],V.prototype,"value",2);g([ru()],V.prototype,"defaultValue",2);g([w()],V.prototype,"label",2);g([w()],V.prototype,"format",2);g([w({type:Boolean,reflect:!0})],V.prototype,"inline",2);g([w({reflect:!0})],V.prototype,"size",2);g([w({attribute:"no-format-toggle",type:Boolean})],V.prototype,"noFormatToggle",2);g([w()],V.prototype,"name",2);g([w({type:Boolean,reflect:!0})],V.prototype,"disabled",2);g([w({type:Boolean})],V.prototype,"hoist",2);g([w({type:Boolean})],V.prototype,"opacity",2);g([w({type:Boolean})],V.prototype,"uppercase",2);g([w()],V.prototype,"swatches",2);g([w({reflect:!0})],V.prototype,"form",2);g([w({type:Boolean,reflect:!0})],V.prototype,"required",2);g([De("format",{waitUntilFirstUpdate:!0})],V.prototype,"handleFormatChange",1);g([De("opacity",{waitUntilFirstUpdate:!0})],V.prototype,"handleOpacityChange",1);g([De("value")],V.prototype,"handleValueChange",1);var Uv="sl-color-picker";V.define("sl-color-picker");var Wv=nu({tagName:Uv,elementClass:V,react:ia,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlColorPicker"}),Kv=Wv;function Qv(){const[e,t]=je.useState([[[255,0,0],"","",[255,255,255],[0,0,255]]]),[n,r]=je.useState(0),[o,i]=je.useState([[255,0,0],"","",[255,255,255],[0,0,255]]),[l,s]=je.useState(5),[a,u]=je.useState(5);function h($){var S=$.target.files[0],F=new FileReader;F.onload=()=>{let G=ed(F.result);i(G),s(G.length),u(G.length),x(G)},F.readAsText(S)}function d($){let S=$.target.value;const F=new XMLHttpRequest;F.open("GET","./colormap/"+S+".rgb"),F.responseType="text",F.onload=()=>{let G=ed(F.response);i(G),s(G.length),u(G.length),x(G)},F.send()}function f(){let $=[[255,255,255],...o];i($),x($)}function v($){let S=[...o];S.splice($+1,0,""),S[S.length-1]==""&&(S[S.length-1]=[255,255,255]),i(S),l<S.length&&s(S.length),x(S)}function y($){if(o.length==2)return;let S=[...o];S.splice($,1),S[0]==""&&(S[0]=[255,255,255]),S[S.length-1]==""&&(S[S.length-1]=[255,255,255]),i(S),x(S)}function b($,S){let F=[...o];F.splice(S,1,$.target.getFormattedValue("rgb").substr(4).split(")")[0].split(",").map(G=>parseInt(G))),F[0]==""&&(F[0]=[255,255,255]),F[F.length-1]==""&&(F[F.length-1]=[255,255,255]),i(F)}function T($){if($===0||$===o.length-1)return;let S=[...o];S.splice($,1,""),i(S),x(S)}function p($){if($==0)return;let S=[...o];S[$-1]=S.splice($,1,S[$-1])[0],S[0]==""&&(S[0]=[255,255,255]),S[S.length-1]==""&&(S[S.length-1]=[255,255,255]),i(S),x(S)}function c($){if($===o.length-1)return;let S=[...o];S[$+1]=S.splice($,1,S[$+1])[0],S[0]==""&&(S[0]=[255,255,255]),S[S.length-1]==""&&(S[S.length-1]=[255,255,255]),i(S),x(S)}function m($){const S=$.target.value<o.length?a:$.target.value;u($.target.value),s(S)}function _($){const S=$.target.value<o.length?o.length:$.target.value;u(S),s(S)}function x($){const S=[...e.slice(0,n+1),$];t(S),r(S.length-1)}function C(){let $=[...o];x($)}function E(){if(n==0)return;let $=e[n-1];i($),r(n-1)}function A(){if(n==e.length-1)return;let $=e[n+1];i($),r(n+1)}const j=o.map(($,S)=>L.jsx(Yv,{rgb:$,rank:S+1,setBlankColor:()=>T(S),swapUp:()=>p(S),swapDown:()=>c(S),changeColor:F=>b(F,S),addColorDown:()=>v(S),delColor:()=>y(S),handleSlBlur:C},S)),le=qv(o,l);return L.jsxs(L.Fragment,{children:[L.jsx(V0,{color_out_rgb:le}),L.jsx("button",{title:"Undo",onClick:E,children:"↶"}),L.jsx("button",{title:"Redo",onClick:A,children:"↷"}),L.jsx("br",{}),L.jsx("input",{type:"file",accept:".rgb",onChange:$=>{h($)}}),L.jsx(bm,{changeMap:$=>d($)}),L.jsx("hr",{}),L.jsxs("div",{style:{display:"flex",justifyContent:"space-around"},children:[L.jsxs("div",{className:"selector",children:[L.jsx("label",{children:"n_output colors: "}),L.jsx("input",{type:"number",step:"1",value:a,onChange:$=>m($),onBlur:$=>_($),style:{width:"3em"}}),L.jsx("button",{className:"adjust_btn",onClick:f,title:"add color down",children:"▼"}),L.jsx("br",{}),j]}),L.jsx(F0,{coloroutrgb:le})]})]})}function Yv(e){return L.jsxs(L.Fragment,{children:[L.jsxs("span",{style:{display:"inline-block",width:"3em"},children:[e.rank,". "]}),L.jsx(Kv,{className:"colorpicker",value:e.rgb==""?"":"rgb("+e.rgb[0]+","+e.rgb[1]+","+e.rgb[2]+")",onSlChange:(t,n)=>e.changeColor(t,n),onSlBlur:e.handleSlBlur}),L.jsx("button",{className:"adjust_btn",onClick:t=>e.setBlankColor(t),title:"set color to blank",children:"#"}),L.jsx("button",{className:"adjust_btn",onClick:t=>e.swapUp(t),title:"swap up",children:"↑"}),L.jsx("button",{className:"adjust_btn",onClick:t=>e.swapDown(t),title:"swap down",children:"↓"}),L.jsx("button",{className:"adjust_btn",onClick:t=>e.addColorDown(t),title:"add color down",children:"▼"}),L.jsx("button",{className:"adjust_btn",onClick:t=>e.delColor(t),title:"delete color",children:"X"}),L.jsx("br",{})]})}function qv(e,t){const n=e.length;t=Math.max(t,n);const r=Xv([n-1,t-1]),o=Gv(t-1,n-1)+1,i=(n-1)/r,l=(t-1)/r,s=[],a=[];var u=0;for(let d=0;d<e.length-1;d++)if(e[d+1]){var h=1/l/(d-u+1);for(let f=0;f<l*(d-u+1);f++){const v=e[u][0]+(e[d+1][0]-e[u][0])*h*f,y=e[u][1]+(e[d+1][1]-e[u][1])*h*f,b=e[u][2]+(e[d+1][2]-e[u][2])*h*f;s.push([parseInt(v),parseInt(y),parseInt(b)])}u=d+1}s.push(e[e.length-1]);for(let d=0;d<o;d=d+i)a.push(s[d]);return a}var du=(e,t)=>t?du(t,e%t):e,Gv=(e,t)=>e/du(e,t)*t,Xv=e=>du(Math.max(...e),Math.min(...e));function ed(e){const t=e.split(`
`),n=1e3,r=[];let o=0,i=-1;function l(a){return!isNaN(parseFloat(a))&&isFinite(a)}for(let a=0;a<t.length&&o<n;a++){let u=t[a].trim();u.length===0&&(u="#");const h=u.split(/\s+/);if(h.length>=3){let d=-1,f=-1,v=-1;l(h[0])&&(d=parseFloat(h[0])),l(h[1])&&(f=parseFloat(h[1])),l(h[2])&&(v=parseFloat(h[2]));let y=-1;if(h.length>3&&l(h[3])&&(y=parseFloat(h[3])),d>=0&&f>=0&&v>=0){let b=[d,f,v,y];r.push(b),o++,d>i&&(i=d),f>i&&(i=f),v>i&&(i=v)}}}const s=new Array(o).fill(null).map(()=>[0,0,0,0]);for(let a=0;a<o;a++)s[a]=r[a];if(i<=1)for(let a=0;a<o;a++){s[a][3]=s[a][3]<0?1:s[a][3];for(let u=0;u<3;u++)s[a][u]*=255}else if(i<256)for(let a=0;a<o;a++)s[a][3]=s[a][3]<0?255:s[a][3];else for(let a=0;a<o;a++){s[a][3]=s[a][3]<0?i:s[a][3];for(let u=0;u<3;u++)s[a][u]/=i,s[a][u]*=255}for(let a=0;a<o;a++)for(let u=0;u<3;u++)s[a][u]=Math.round(s[a][u]);return s}es.createRoot(document.getElementById("root")).render(L.jsx(dd.StrictMode,{children:L.jsx(Qv,{})}));
