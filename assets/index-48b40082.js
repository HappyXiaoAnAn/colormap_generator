function af(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function uf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var fd={exports:{}},nl={},gd={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var To=Symbol.for("react.element"),cf=Symbol.for("react.portal"),df=Symbol.for("react.fragment"),hf=Symbol.for("react.strict_mode"),pf=Symbol.for("react.profiler"),ff=Symbol.for("react.provider"),gf=Symbol.for("react.context"),mf=Symbol.for("react.forward_ref"),vf=Symbol.for("react.suspense"),yf=Symbol.for("react.memo"),bf=Symbol.for("react.lazy"),_u=Symbol.iterator;function wf(e){return e===null||typeof e!="object"?null:(e=_u&&e[_u]||e["@@iterator"],typeof e=="function"?e:null)}var md={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},vd=Object.assign,yd={};function zr(e,t,n){this.props=e,this.context=t,this.refs=yd,this.updater=n||md}zr.prototype.isReactComponent={};zr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};zr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function bd(){}bd.prototype=zr.prototype;function ha(e,t,n){this.props=e,this.context=t,this.refs=yd,this.updater=n||md}var pa=ha.prototype=new bd;pa.constructor=ha;vd(pa,zr.prototype);pa.isPureReactComponent=!0;var xu=Array.isArray,wd=Object.prototype.hasOwnProperty,fa={current:null},_d={key:!0,ref:!0,__self:!0,__source:!0};function xd(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)wd.call(t,r)&&!_d.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:To,type:e,key:i,ref:l,props:o,_owner:fa.current}}function _f(e,t){return{$$typeof:To,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ga(e){return typeof e=="object"&&e!==null&&e.$$typeof===To}function xf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ku=/\/+/g;function Cl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?xf(""+e.key):t.toString(36)}function di(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case To:case cf:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+Cl(l,0):r,xu(o)?(n="",e!=null&&(n=e.replace(ku,"$&/")+"/"),di(o,t,n,"",function(u){return u})):o!=null&&(ga(o)&&(o=_f(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(ku,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",xu(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+Cl(i,a);l+=di(i,t,n,s,o)}else if(s=wf(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+Cl(i,a++),l+=di(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Bo(e,t,n){if(e==null)return e;var r=[],o=0;return di(e,r,"","",function(i){return t.call(n,i,o++)}),r}function kf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ne={current:null},hi={transition:null},Sf={ReactCurrentDispatcher:Ne,ReactCurrentBatchConfig:hi,ReactCurrentOwner:fa};F.Children={map:Bo,forEach:function(e,t,n){Bo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Bo(e,function(){t++}),t},toArray:function(e){return Bo(e,function(t){return t})||[]},only:function(e){if(!ga(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=zr;F.Fragment=df;F.Profiler=pf;F.PureComponent=ha;F.StrictMode=hf;F.Suspense=vf;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sf;F.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=vd({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=fa.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)wd.call(t,s)&&!_d.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:To,type:e.type,key:o,ref:i,props:r,_owner:l}};F.createContext=function(e){return e={$$typeof:gf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ff,_context:e},e.Consumer=e};F.createElement=xd;F.createFactory=function(e){var t=xd.bind(null,e);return t.type=e,t};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:mf,render:e}};F.isValidElement=ga;F.lazy=function(e){return{$$typeof:bf,_payload:{_status:-1,_result:e},_init:kf}};F.memo=function(e,t){return{$$typeof:yf,type:e,compare:t===void 0?null:t}};F.startTransition=function(e){var t=hi.transition;hi.transition={};try{e()}finally{hi.transition=t}};F.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};F.useCallback=function(e,t){return Ne.current.useCallback(e,t)};F.useContext=function(e){return Ne.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return Ne.current.useDeferredValue(e)};F.useEffect=function(e,t){return Ne.current.useEffect(e,t)};F.useId=function(){return Ne.current.useId()};F.useImperativeHandle=function(e,t,n){return Ne.current.useImperativeHandle(e,t,n)};F.useInsertionEffect=function(e,t){return Ne.current.useInsertionEffect(e,t)};F.useLayoutEffect=function(e,t){return Ne.current.useLayoutEffect(e,t)};F.useMemo=function(e,t){return Ne.current.useMemo(e,t)};F.useReducer=function(e,t,n){return Ne.current.useReducer(e,t,n)};F.useRef=function(e){return Ne.current.useRef(e)};F.useState=function(e){return Ne.current.useState(e)};F.useSyncExternalStore=function(e,t,n){return Ne.current.useSyncExternalStore(e,t,n)};F.useTransition=function(){return Ne.current.useTransition()};F.version="18.2.0";gd.exports=F;var De=gd.exports;const kd=uf(De),yn=af({__proto__:null,default:kd},[De]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cf=De,$f=Symbol.for("react.element"),Ef=Symbol.for("react.fragment"),zf=Object.prototype.hasOwnProperty,Af=Cf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Pf={key:!0,ref:!0,__self:!0,__source:!0};function Sd(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)zf.call(t,r)&&!Pf.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:$f,type:e,key:i,ref:l,props:o,_owner:Af.current}}nl.Fragment=Ef;nl.jsx=Sd;nl.jsxs=Sd;fd.exports=nl;var E=fd.exports,us={},Cd={exports:{}},Je={},$d={exports:{}},Ed={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(A,O){var D=A.length;A.push(O);e:for(;0<D;){var le=D-1>>>1,pe=A[le];if(0<o(pe,O))A[le]=O,A[D]=pe,D=le;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var O=A[0],D=A.pop();if(D!==O){A[0]=D;e:for(var le=0,pe=A.length,jo=pe>>>1;le<jo;){var kn=2*(le+1)-1,Sl=A[kn],Sn=kn+1,Vo=A[Sn];if(0>o(Sl,D))Sn<pe&&0>o(Vo,Sl)?(A[le]=Vo,A[Sn]=D,le=Sn):(A[le]=Sl,A[kn]=D,le=kn);else if(Sn<pe&&0>o(Vo,D))A[le]=Vo,A[Sn]=D,le=Sn;else break e}}return O}function o(A,O){var D=A.sortIndex-O.sortIndex;return D!==0?D:A.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],u=[],h=1,d=null,g=3,v=!1,b=!1,w=!1,L=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(A){for(var O=n(u);O!==null;){if(O.callback===null)r(u);else if(O.startTime<=A)r(u),O.sortIndex=O.expirationTime,t(s,O);else break;O=n(u)}}function _(A){if(w=!1,m(A),!b)if(n(s)!==null)b=!0,Q(k);else{var O=n(u);O!==null&&Ue(_,O.startTime-A)}}function k(A,O){b=!1,w&&(w=!1,p(z),z=-1),v=!0;var D=g;try{for(m(O),d=n(s);d!==null&&(!(d.expirationTime>O)||A&&!he());){var le=d.callback;if(typeof le=="function"){d.callback=null,g=d.priorityLevel;var pe=le(d.expirationTime<=O);O=e.unstable_now(),typeof pe=="function"?d.callback=pe:d===n(s)&&r(s),m(O)}else r(s);d=n(s)}if(d!==null)var jo=!0;else{var kn=n(u);kn!==null&&Ue(_,kn.startTime-O),jo=!1}return jo}finally{d=null,g=D,v=!1}}var S=!1,$=null,z=-1,B=5,R=-1;function he(){return!(e.unstable_now()-R<B)}function ie(){if($!==null){var A=e.unstable_now();R=A;var O=!0;try{O=$(!0,A)}finally{O?T():(S=!1,$=null)}}else S=!1}var T;if(typeof c=="function")T=function(){c(ie)};else if(typeof MessageChannel<"u"){var C=new MessageChannel,j=C.port2;C.port1.onmessage=ie,T=function(){j.postMessage(null)}}else T=function(){L(ie,0)};function Q(A){$=A,S||(S=!0,T())}function Ue(A,O){z=L(function(){A(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){b||v||(b=!0,Q(k))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(A){switch(g){case 1:case 2:case 3:var O=3;break;default:O=g}var D=g;g=O;try{return A()}finally{g=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,O){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var D=g;g=A;try{return O()}finally{g=D}},e.unstable_scheduleCallback=function(A,O,D){var le=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?le+D:le):D=le,A){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=D+pe,A={id:h++,callback:O,priorityLevel:A,startTime:D,expirationTime:pe,sortIndex:-1},D>le?(A.sortIndex=D,t(u,A),n(s)===null&&A===n(u)&&(w?(p(z),z=-1):w=!0,Ue(_,D-le))):(A.sortIndex=pe,t(s,A),b||v||(b=!0,Q(k))),A},e.unstable_shouldYield=he,e.unstable_wrapCallback=function(A){var O=g;return function(){var D=g;g=O;try{return A.apply(this,arguments)}finally{g=D}}}})(Ed);$d.exports=Ed;var Tf=$d.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zd=De,Ze=Tf;function x(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ad=new Set,uo={};function Hn(e,t){vr(e,t),vr(e+"Capture",t)}function vr(e,t){for(uo[e]=t,e=0;e<t.length;e++)Ad.add(t[e])}var Dt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cs=Object.prototype.hasOwnProperty,Lf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Su={},Cu={};function Nf(e){return cs.call(Cu,e)?!0:cs.call(Su,e)?!1:Lf.test(e)?Cu[e]=!0:(Su[e]=!0,!1)}function Rf(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Of(e,t,n,r){if(t===null||typeof t>"u"||Rf(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Re(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var _e={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){_e[e]=new Re(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];_e[t]=new Re(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){_e[e]=new Re(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){_e[e]=new Re(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){_e[e]=new Re(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){_e[e]=new Re(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){_e[e]=new Re(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){_e[e]=new Re(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){_e[e]=new Re(e,5,!1,e.toLowerCase(),null,!1,!1)});var ma=/[\-:]([a-z])/g;function va(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ma,va);_e[t]=new Re(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ma,va);_e[t]=new Re(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ma,va);_e[t]=new Re(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){_e[e]=new Re(e,1,!1,e.toLowerCase(),null,!1,!1)});_e.xlinkHref=new Re("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){_e[e]=new Re(e,1,!1,e.toLowerCase(),null,!0,!0)});function ya(e,t,n,r){var o=_e.hasOwnProperty(t)?_e[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Of(t,n,o,r)&&(n=null),r||o===null?Nf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Bt=zd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ho=Symbol.for("react.element"),Gn=Symbol.for("react.portal"),Xn=Symbol.for("react.fragment"),ba=Symbol.for("react.strict_mode"),ds=Symbol.for("react.profiler"),Pd=Symbol.for("react.provider"),Td=Symbol.for("react.context"),wa=Symbol.for("react.forward_ref"),hs=Symbol.for("react.suspense"),ps=Symbol.for("react.suspense_list"),_a=Symbol.for("react.memo"),Kt=Symbol.for("react.lazy"),Ld=Symbol.for("react.offscreen"),$u=Symbol.iterator;function Nr(e){return e===null||typeof e!="object"?null:(e=$u&&e[$u]||e["@@iterator"],typeof e=="function"?e:null)}var ne=Object.assign,$l;function Yr(e){if($l===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);$l=t&&t[1]||""}return`
`+$l+e}var El=!1;function zl(e,t){if(!e||El)return"";El=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var s=`
`+o[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{El=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Yr(e):""}function Mf(e){switch(e.tag){case 5:return Yr(e.type);case 16:return Yr("Lazy");case 13:return Yr("Suspense");case 19:return Yr("SuspenseList");case 0:case 2:case 15:return e=zl(e.type,!1),e;case 11:return e=zl(e.type.render,!1),e;case 1:return e=zl(e.type,!0),e;default:return""}}function fs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Xn:return"Fragment";case Gn:return"Portal";case ds:return"Profiler";case ba:return"StrictMode";case hs:return"Suspense";case ps:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Td:return(e.displayName||"Context")+".Consumer";case Pd:return(e._context.displayName||"Context")+".Provider";case wa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case _a:return t=e.displayName||null,t!==null?t:fs(e.type)||"Memo";case Kt:t=e._payload,e=e._init;try{return fs(e(t))}catch{}}return null}function Df(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fs(t);case 8:return t===ba?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function hn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Nd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ff(e){var t=Nd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Uo(e){e._valueTracker||(e._valueTracker=Ff(e))}function Rd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Nd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function $i(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function gs(e,t){var n=t.checked;return ne({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Eu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=hn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Od(e,t){t=t.checked,t!=null&&ya(e,"checked",t,!1)}function ms(e,t){Od(e,t);var n=hn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?vs(e,t.type,n):t.hasOwnProperty("defaultValue")&&vs(e,t.type,hn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function zu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function vs(e,t,n){(t!=="number"||$i(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var qr=Array.isArray;function ur(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+hn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ys(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(x(91));return ne({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Au(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(x(92));if(qr(n)){if(1<n.length)throw Error(x(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:hn(n)}}function Md(e,t){var n=hn(t.value),r=hn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Pu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Dd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function bs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Dd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Wo,Fd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Wo=Wo||document.createElement("div"),Wo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Wo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function co(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Zr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},If=["Webkit","ms","Moz","O"];Object.keys(Zr).forEach(function(e){If.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Zr[t]=Zr[e]})});function Id(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Zr.hasOwnProperty(e)&&Zr[e]?(""+t).trim():t+"px"}function jd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Id(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var jf=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ws(e,t){if(t){if(jf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(x(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(x(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(x(61))}if(t.style!=null&&typeof t.style!="object")throw Error(x(62))}}function _s(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xs=null;function xa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ks=null,cr=null,dr=null;function Tu(e){if(e=Ro(e)){if(typeof ks!="function")throw Error(x(280));var t=e.stateNode;t&&(t=sl(t),ks(e.stateNode,e.type,t))}}function Vd(e){cr?dr?dr.push(e):dr=[e]:cr=e}function Bd(){if(cr){var e=cr,t=dr;if(dr=cr=null,Tu(e),t)for(e=0;e<t.length;e++)Tu(t[e])}}function Hd(e,t){return e(t)}function Ud(){}var Al=!1;function Wd(e,t,n){if(Al)return e(t,n);Al=!0;try{return Hd(e,t,n)}finally{Al=!1,(cr!==null||dr!==null)&&(Ud(),Bd())}}function ho(e,t){var n=e.stateNode;if(n===null)return null;var r=sl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(x(231,t,typeof n));return n}var Ss=!1;if(Dt)try{var Rr={};Object.defineProperty(Rr,"passive",{get:function(){Ss=!0}}),window.addEventListener("test",Rr,Rr),window.removeEventListener("test",Rr,Rr)}catch{Ss=!1}function Vf(e,t,n,r,o,i,l,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(h){this.onError(h)}}var Jr=!1,Ei=null,zi=!1,Cs=null,Bf={onError:function(e){Jr=!0,Ei=e}};function Hf(e,t,n,r,o,i,l,a,s){Jr=!1,Ei=null,Vf.apply(Bf,arguments)}function Uf(e,t,n,r,o,i,l,a,s){if(Hf.apply(this,arguments),Jr){if(Jr){var u=Ei;Jr=!1,Ei=null}else throw Error(x(198));zi||(zi=!0,Cs=u)}}function Un(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Kd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Lu(e){if(Un(e)!==e)throw Error(x(188))}function Wf(e){var t=e.alternate;if(!t){if(t=Un(e),t===null)throw Error(x(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Lu(o),e;if(i===r)return Lu(o),t;i=i.sibling}throw Error(x(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?e:t}function Qd(e){return e=Wf(e),e!==null?Yd(e):null}function Yd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Yd(e);if(t!==null)return t;e=e.sibling}return null}var qd=Ze.unstable_scheduleCallback,Nu=Ze.unstable_cancelCallback,Kf=Ze.unstable_shouldYield,Qf=Ze.unstable_requestPaint,se=Ze.unstable_now,Yf=Ze.unstable_getCurrentPriorityLevel,ka=Ze.unstable_ImmediatePriority,Gd=Ze.unstable_UserBlockingPriority,Ai=Ze.unstable_NormalPriority,qf=Ze.unstable_LowPriority,Xd=Ze.unstable_IdlePriority,rl=null,$t=null;function Gf(e){if($t&&typeof $t.onCommitFiberRoot=="function")try{$t.onCommitFiberRoot(rl,e,void 0,(e.current.flags&128)===128)}catch{}}var yt=Math.clz32?Math.clz32:Jf,Xf=Math.log,Zf=Math.LN2;function Jf(e){return e>>>=0,e===0?32:31-(Xf(e)/Zf|0)|0}var Ko=64,Qo=4194304;function Gr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Pi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~o;a!==0?r=Gr(a):(i&=l,i!==0&&(r=Gr(i)))}else l=n&~o,l!==0?r=Gr(l):i!==0&&(r=Gr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-yt(t),o=1<<n,r|=e[n],t&=~o;return r}function eg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tg(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-yt(i),a=1<<l,s=o[l];s===-1?(!(a&n)||a&r)&&(o[l]=eg(a,t)):s<=t&&(e.expiredLanes|=a),i&=~a}}function $s(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Zd(){var e=Ko;return Ko<<=1,!(Ko&4194240)&&(Ko=64),e}function Pl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Lo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-yt(t),e[t]=n}function ng(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-yt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Sa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-yt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var W=0;function Jd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var eh,Ca,th,nh,rh,Es=!1,Yo=[],nn=null,rn=null,on=null,po=new Map,fo=new Map,qt=[],rg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ru(e,t){switch(e){case"focusin":case"focusout":nn=null;break;case"dragenter":case"dragleave":rn=null;break;case"mouseover":case"mouseout":on=null;break;case"pointerover":case"pointerout":po.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":fo.delete(t.pointerId)}}function Or(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Ro(t),t!==null&&Ca(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function og(e,t,n,r,o){switch(t){case"focusin":return nn=Or(nn,e,t,n,r,o),!0;case"dragenter":return rn=Or(rn,e,t,n,r,o),!0;case"mouseover":return on=Or(on,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return po.set(i,Or(po.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,fo.set(i,Or(fo.get(i)||null,e,t,n,r,o)),!0}return!1}function oh(e){var t=An(e.target);if(t!==null){var n=Un(t);if(n!==null){if(t=n.tag,t===13){if(t=Kd(n),t!==null){e.blockedOn=t,rh(e.priority,function(){th(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function pi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=zs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);xs=r,n.target.dispatchEvent(r),xs=null}else return t=Ro(n),t!==null&&Ca(t),e.blockedOn=n,!1;t.shift()}return!0}function Ou(e,t,n){pi(e)&&n.delete(t)}function ig(){Es=!1,nn!==null&&pi(nn)&&(nn=null),rn!==null&&pi(rn)&&(rn=null),on!==null&&pi(on)&&(on=null),po.forEach(Ou),fo.forEach(Ou)}function Mr(e,t){e.blockedOn===t&&(e.blockedOn=null,Es||(Es=!0,Ze.unstable_scheduleCallback(Ze.unstable_NormalPriority,ig)))}function go(e){function t(o){return Mr(o,e)}if(0<Yo.length){Mr(Yo[0],e);for(var n=1;n<Yo.length;n++){var r=Yo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(nn!==null&&Mr(nn,e),rn!==null&&Mr(rn,e),on!==null&&Mr(on,e),po.forEach(t),fo.forEach(t),n=0;n<qt.length;n++)r=qt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<qt.length&&(n=qt[0],n.blockedOn===null);)oh(n),n.blockedOn===null&&qt.shift()}var hr=Bt.ReactCurrentBatchConfig,Ti=!0;function lg(e,t,n,r){var o=W,i=hr.transition;hr.transition=null;try{W=1,$a(e,t,n,r)}finally{W=o,hr.transition=i}}function sg(e,t,n,r){var o=W,i=hr.transition;hr.transition=null;try{W=4,$a(e,t,n,r)}finally{W=o,hr.transition=i}}function $a(e,t,n,r){if(Ti){var o=zs(e,t,n,r);if(o===null)jl(e,t,r,Li,n),Ru(e,r);else if(og(o,e,t,n,r))r.stopPropagation();else if(Ru(e,r),t&4&&-1<rg.indexOf(e)){for(;o!==null;){var i=Ro(o);if(i!==null&&eh(i),i=zs(e,t,n,r),i===null&&jl(e,t,r,Li,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else jl(e,t,r,null,n)}}var Li=null;function zs(e,t,n,r){if(Li=null,e=xa(r),e=An(e),e!==null)if(t=Un(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Kd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Li=e,null}function ih(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Yf()){case ka:return 1;case Gd:return 4;case Ai:case qf:return 16;case Xd:return 536870912;default:return 16}default:return 16}}var Zt=null,Ea=null,fi=null;function lh(){if(fi)return fi;var e,t=Ea,n=t.length,r,o="value"in Zt?Zt.value:Zt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return fi=o.slice(e,1<r?1-r:void 0)}function gi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function qo(){return!0}function Mu(){return!1}function et(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?qo:Mu,this.isPropagationStopped=Mu,this}return ne(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qo)},persist:function(){},isPersistent:qo}),t}var Ar={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},za=et(Ar),No=ne({},Ar,{view:0,detail:0}),ag=et(No),Tl,Ll,Dr,ol=ne({},No,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Aa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Dr&&(Dr&&e.type==="mousemove"?(Tl=e.screenX-Dr.screenX,Ll=e.screenY-Dr.screenY):Ll=Tl=0,Dr=e),Tl)},movementY:function(e){return"movementY"in e?e.movementY:Ll}}),Du=et(ol),ug=ne({},ol,{dataTransfer:0}),cg=et(ug),dg=ne({},No,{relatedTarget:0}),Nl=et(dg),hg=ne({},Ar,{animationName:0,elapsedTime:0,pseudoElement:0}),pg=et(hg),fg=ne({},Ar,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gg=et(fg),mg=ne({},Ar,{data:0}),Fu=et(mg),vg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=bg[e])?!!t[e]:!1}function Aa(){return wg}var _g=ne({},No,{key:function(e){if(e.key){var t=vg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=gi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Aa,charCode:function(e){return e.type==="keypress"?gi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?gi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xg=et(_g),kg=ne({},ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Iu=et(kg),Sg=ne({},No,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Aa}),Cg=et(Sg),$g=ne({},Ar,{propertyName:0,elapsedTime:0,pseudoElement:0}),Eg=et($g),zg=ne({},ol,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ag=et(zg),Pg=[9,13,27,32],Pa=Dt&&"CompositionEvent"in window,eo=null;Dt&&"documentMode"in document&&(eo=document.documentMode);var Tg=Dt&&"TextEvent"in window&&!eo,sh=Dt&&(!Pa||eo&&8<eo&&11>=eo),ju=String.fromCharCode(32),Vu=!1;function ah(e,t){switch(e){case"keyup":return Pg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function uh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zn=!1;function Lg(e,t){switch(e){case"compositionend":return uh(t);case"keypress":return t.which!==32?null:(Vu=!0,ju);case"textInput":return e=t.data,e===ju&&Vu?null:e;default:return null}}function Ng(e,t){if(Zn)return e==="compositionend"||!Pa&&ah(e,t)?(e=lh(),fi=Ea=Zt=null,Zn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return sh&&t.locale!=="ko"?null:t.data;default:return null}}var Rg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Rg[e.type]:t==="textarea"}function ch(e,t,n,r){Vd(r),t=Ni(t,"onChange"),0<t.length&&(n=new za("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var to=null,mo=null;function Og(e){_h(e,0)}function il(e){var t=tr(e);if(Rd(t))return e}function Mg(e,t){if(e==="change")return t}var dh=!1;if(Dt){var Rl;if(Dt){var Ol="oninput"in document;if(!Ol){var Hu=document.createElement("div");Hu.setAttribute("oninput","return;"),Ol=typeof Hu.oninput=="function"}Rl=Ol}else Rl=!1;dh=Rl&&(!document.documentMode||9<document.documentMode)}function Uu(){to&&(to.detachEvent("onpropertychange",hh),mo=to=null)}function hh(e){if(e.propertyName==="value"&&il(mo)){var t=[];ch(t,mo,e,xa(e)),Wd(Og,t)}}function Dg(e,t,n){e==="focusin"?(Uu(),to=t,mo=n,to.attachEvent("onpropertychange",hh)):e==="focusout"&&Uu()}function Fg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return il(mo)}function Ig(e,t){if(e==="click")return il(t)}function jg(e,t){if(e==="input"||e==="change")return il(t)}function Vg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var wt=typeof Object.is=="function"?Object.is:Vg;function vo(e,t){if(wt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!cs.call(t,o)||!wt(e[o],t[o]))return!1}return!0}function Wu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ku(e,t){var n=Wu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Wu(n)}}function ph(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ph(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function fh(){for(var e=window,t=$i();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=$i(e.document)}return t}function Ta(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Bg(e){var t=fh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ph(n.ownerDocument.documentElement,n)){if(r!==null&&Ta(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Ku(n,i);var l=Ku(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Hg=Dt&&"documentMode"in document&&11>=document.documentMode,Jn=null,As=null,no=null,Ps=!1;function Qu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ps||Jn==null||Jn!==$i(r)||(r=Jn,"selectionStart"in r&&Ta(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),no&&vo(no,r)||(no=r,r=Ni(As,"onSelect"),0<r.length&&(t=new za("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Jn)))}function Go(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var er={animationend:Go("Animation","AnimationEnd"),animationiteration:Go("Animation","AnimationIteration"),animationstart:Go("Animation","AnimationStart"),transitionend:Go("Transition","TransitionEnd")},Ml={},gh={};Dt&&(gh=document.createElement("div").style,"AnimationEvent"in window||(delete er.animationend.animation,delete er.animationiteration.animation,delete er.animationstart.animation),"TransitionEvent"in window||delete er.transitionend.transition);function ll(e){if(Ml[e])return Ml[e];if(!er[e])return e;var t=er[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in gh)return Ml[e]=t[n];return e}var mh=ll("animationend"),vh=ll("animationiteration"),yh=ll("animationstart"),bh=ll("transitionend"),wh=new Map,Yu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function bn(e,t){wh.set(e,t),Hn(t,[e])}for(var Dl=0;Dl<Yu.length;Dl++){var Fl=Yu[Dl],Ug=Fl.toLowerCase(),Wg=Fl[0].toUpperCase()+Fl.slice(1);bn(Ug,"on"+Wg)}bn(mh,"onAnimationEnd");bn(vh,"onAnimationIteration");bn(yh,"onAnimationStart");bn("dblclick","onDoubleClick");bn("focusin","onFocus");bn("focusout","onBlur");bn(bh,"onTransitionEnd");vr("onMouseEnter",["mouseout","mouseover"]);vr("onMouseLeave",["mouseout","mouseover"]);vr("onPointerEnter",["pointerout","pointerover"]);vr("onPointerLeave",["pointerout","pointerover"]);Hn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Hn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Hn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Hn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Hn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Hn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xr));function qu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Uf(r,t,void 0,e),e.currentTarget=null}function _h(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==i&&o.isPropagationStopped())break e;qu(o,a,u),i=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,u=a.currentTarget,a=a.listener,s!==i&&o.isPropagationStopped())break e;qu(o,a,u),i=s}}}if(zi)throw e=Cs,zi=!1,Cs=null,e}function G(e,t){var n=t[Os];n===void 0&&(n=t[Os]=new Set);var r=e+"__bubble";n.has(r)||(xh(t,e,2,!1),n.add(r))}function Il(e,t,n){var r=0;t&&(r|=4),xh(n,e,r,t)}var Xo="_reactListening"+Math.random().toString(36).slice(2);function yo(e){if(!e[Xo]){e[Xo]=!0,Ad.forEach(function(n){n!=="selectionchange"&&(Kg.has(n)||Il(n,!1,e),Il(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Xo]||(t[Xo]=!0,Il("selectionchange",!1,t))}}function xh(e,t,n,r){switch(ih(t)){case 1:var o=lg;break;case 4:o=sg;break;default:o=$a}n=o.bind(null,t,n,e),o=void 0,!Ss||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function jl(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;l=l.return}for(;a!==null;){if(l=An(a),l===null)return;if(s=l.tag,s===5||s===6){r=i=l;continue e}a=a.parentNode}}r=r.return}Wd(function(){var u=i,h=xa(n),d=[];e:{var g=wh.get(e);if(g!==void 0){var v=za,b=e;switch(e){case"keypress":if(gi(n)===0)break e;case"keydown":case"keyup":v=xg;break;case"focusin":b="focus",v=Nl;break;case"focusout":b="blur",v=Nl;break;case"beforeblur":case"afterblur":v=Nl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Du;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=cg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Cg;break;case mh:case vh:case yh:v=pg;break;case bh:v=Eg;break;case"scroll":v=ag;break;case"wheel":v=Ag;break;case"copy":case"cut":case"paste":v=gg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Iu}var w=(t&4)!==0,L=!w&&e==="scroll",p=w?g!==null?g+"Capture":null:g;w=[];for(var c=u,m;c!==null;){m=c;var _=m.stateNode;if(m.tag===5&&_!==null&&(m=_,p!==null&&(_=ho(c,p),_!=null&&w.push(bo(c,_,m)))),L)break;c=c.return}0<w.length&&(g=new v(g,b,null,n,h),d.push({event:g,listeners:w}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",g&&n!==xs&&(b=n.relatedTarget||n.fromElement)&&(An(b)||b[Ft]))break e;if((v||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,v?(b=n.relatedTarget||n.toElement,v=u,b=b?An(b):null,b!==null&&(L=Un(b),b!==L||b.tag!==5&&b.tag!==6)&&(b=null)):(v=null,b=u),v!==b)){if(w=Du,_="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(w=Iu,_="onPointerLeave",p="onPointerEnter",c="pointer"),L=v==null?g:tr(v),m=b==null?g:tr(b),g=new w(_,c+"leave",v,n,h),g.target=L,g.relatedTarget=m,_=null,An(h)===u&&(w=new w(p,c+"enter",b,n,h),w.target=m,w.relatedTarget=L,_=w),L=_,v&&b)t:{for(w=v,p=b,c=0,m=w;m;m=Yn(m))c++;for(m=0,_=p;_;_=Yn(_))m++;for(;0<c-m;)w=Yn(w),c--;for(;0<m-c;)p=Yn(p),m--;for(;c--;){if(w===p||p!==null&&w===p.alternate)break t;w=Yn(w),p=Yn(p)}w=null}else w=null;v!==null&&Gu(d,g,v,w,!1),b!==null&&L!==null&&Gu(d,L,b,w,!0)}}e:{if(g=u?tr(u):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var k=Mg;else if(Bu(g))if(dh)k=jg;else{k=Fg;var S=Dg}else(v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(k=Ig);if(k&&(k=k(e,u))){ch(d,k,n,h);break e}S&&S(e,g,u),e==="focusout"&&(S=g._wrapperState)&&S.controlled&&g.type==="number"&&vs(g,"number",g.value)}switch(S=u?tr(u):window,e){case"focusin":(Bu(S)||S.contentEditable==="true")&&(Jn=S,As=u,no=null);break;case"focusout":no=As=Jn=null;break;case"mousedown":Ps=!0;break;case"contextmenu":case"mouseup":case"dragend":Ps=!1,Qu(d,n,h);break;case"selectionchange":if(Hg)break;case"keydown":case"keyup":Qu(d,n,h)}var $;if(Pa)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Zn?ah(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(sh&&n.locale!=="ko"&&(Zn||z!=="onCompositionStart"?z==="onCompositionEnd"&&Zn&&($=lh()):(Zt=h,Ea="value"in Zt?Zt.value:Zt.textContent,Zn=!0)),S=Ni(u,z),0<S.length&&(z=new Fu(z,e,null,n,h),d.push({event:z,listeners:S}),$?z.data=$:($=uh(n),$!==null&&(z.data=$)))),($=Tg?Lg(e,n):Ng(e,n))&&(u=Ni(u,"onBeforeInput"),0<u.length&&(h=new Fu("onBeforeInput","beforeinput",null,n,h),d.push({event:h,listeners:u}),h.data=$))}_h(d,t)})}function bo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ni(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=ho(e,n),i!=null&&r.unshift(bo(e,i,o)),i=ho(e,t),i!=null&&r.push(bo(e,i,o))),e=e.return}return r}function Yn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Gu(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,o?(s=ho(n,i),s!=null&&l.unshift(bo(n,s,a))):o||(s=ho(n,i),s!=null&&l.push(bo(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Qg=/\r\n?/g,Yg=/\u0000|\uFFFD/g;function Xu(e){return(typeof e=="string"?e:""+e).replace(Qg,`
`).replace(Yg,"")}function Zo(e,t,n){if(t=Xu(t),Xu(e)!==t&&n)throw Error(x(425))}function Ri(){}var Ts=null,Ls=null;function Ns(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Rs=typeof setTimeout=="function"?setTimeout:void 0,qg=typeof clearTimeout=="function"?clearTimeout:void 0,Zu=typeof Promise=="function"?Promise:void 0,Gg=typeof queueMicrotask=="function"?queueMicrotask:typeof Zu<"u"?function(e){return Zu.resolve(null).then(e).catch(Xg)}:Rs;function Xg(e){setTimeout(function(){throw e})}function Vl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),go(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);go(t)}function ln(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ju(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Pr=Math.random().toString(36).slice(2),Ct="__reactFiber$"+Pr,wo="__reactProps$"+Pr,Ft="__reactContainer$"+Pr,Os="__reactEvents$"+Pr,Zg="__reactListeners$"+Pr,Jg="__reactHandles$"+Pr;function An(e){var t=e[Ct];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ft]||n[Ct]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ju(e);e!==null;){if(n=e[Ct])return n;e=Ju(e)}return t}e=n,n=e.parentNode}return null}function Ro(e){return e=e[Ct]||e[Ft],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function tr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(x(33))}function sl(e){return e[wo]||null}var Ms=[],nr=-1;function wn(e){return{current:e}}function X(e){0>nr||(e.current=Ms[nr],Ms[nr]=null,nr--)}function q(e,t){nr++,Ms[nr]=e.current,e.current=t}var pn={},Ee=wn(pn),Ie=wn(!1),Mn=pn;function yr(e,t){var n=e.type.contextTypes;if(!n)return pn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function je(e){return e=e.childContextTypes,e!=null}function Oi(){X(Ie),X(Ee)}function ec(e,t,n){if(Ee.current!==pn)throw Error(x(168));q(Ee,t),q(Ie,n)}function kh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(x(108,Df(e)||"Unknown",o));return ne({},n,r)}function Mi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||pn,Mn=Ee.current,q(Ee,e),q(Ie,Ie.current),!0}function tc(e,t,n){var r=e.stateNode;if(!r)throw Error(x(169));n?(e=kh(e,t,Mn),r.__reactInternalMemoizedMergedChildContext=e,X(Ie),X(Ee),q(Ee,e)):X(Ie),q(Ie,n)}var Pt=null,al=!1,Bl=!1;function Sh(e){Pt===null?Pt=[e]:Pt.push(e)}function em(e){al=!0,Sh(e)}function _n(){if(!Bl&&Pt!==null){Bl=!0;var e=0,t=W;try{var n=Pt;for(W=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Pt=null,al=!1}catch(o){throw Pt!==null&&(Pt=Pt.slice(e+1)),qd(ka,_n),o}finally{W=t,Bl=!1}}return null}var rr=[],or=0,Di=null,Fi=0,it=[],lt=0,Dn=null,Rt=1,Ot="";function $n(e,t){rr[or++]=Fi,rr[or++]=Di,Di=e,Fi=t}function Ch(e,t,n){it[lt++]=Rt,it[lt++]=Ot,it[lt++]=Dn,Dn=e;var r=Rt;e=Ot;var o=32-yt(r)-1;r&=~(1<<o),n+=1;var i=32-yt(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,Rt=1<<32-yt(t)+o|n<<o|r,Ot=i+e}else Rt=1<<i|n<<o|r,Ot=e}function La(e){e.return!==null&&($n(e,1),Ch(e,1,0))}function Na(e){for(;e===Di;)Di=rr[--or],rr[or]=null,Fi=rr[--or],rr[or]=null;for(;e===Dn;)Dn=it[--lt],it[lt]=null,Ot=it[--lt],it[lt]=null,Rt=it[--lt],it[lt]=null}var Ge=null,qe=null,J=!1,mt=null;function $h(e,t){var n=st(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function nc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ge=e,qe=ln(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ge=e,qe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Dn!==null?{id:Rt,overflow:Ot}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=st(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ge=e,qe=null,!0):!1;default:return!1}}function Ds(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Fs(e){if(J){var t=qe;if(t){var n=t;if(!nc(e,t)){if(Ds(e))throw Error(x(418));t=ln(n.nextSibling);var r=Ge;t&&nc(e,t)?$h(r,n):(e.flags=e.flags&-4097|2,J=!1,Ge=e)}}else{if(Ds(e))throw Error(x(418));e.flags=e.flags&-4097|2,J=!1,Ge=e}}}function rc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ge=e}function Jo(e){if(e!==Ge)return!1;if(!J)return rc(e),J=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ns(e.type,e.memoizedProps)),t&&(t=qe)){if(Ds(e))throw Eh(),Error(x(418));for(;t;)$h(e,t),t=ln(t.nextSibling)}if(rc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(x(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){qe=ln(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}qe=null}}else qe=Ge?ln(e.stateNode.nextSibling):null;return!0}function Eh(){for(var e=qe;e;)e=ln(e.nextSibling)}function br(){qe=Ge=null,J=!1}function Ra(e){mt===null?mt=[e]:mt.push(e)}var tm=Bt.ReactCurrentBatchConfig;function ft(e,t){if(e&&e.defaultProps){t=ne({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ii=wn(null),ji=null,ir=null,Oa=null;function Ma(){Oa=ir=ji=null}function Da(e){var t=Ii.current;X(Ii),e._currentValue=t}function Is(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function pr(e,t){ji=e,Oa=ir=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Fe=!0),e.firstContext=null)}function ct(e){var t=e._currentValue;if(Oa!==e)if(e={context:e,memoizedValue:t,next:null},ir===null){if(ji===null)throw Error(x(308));ir=e,ji.dependencies={lanes:0,firstContext:e}}else ir=ir.next=e;return t}var Pn=null;function Fa(e){Pn===null?Pn=[e]:Pn.push(e)}function zh(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Fa(t)):(n.next=o.next,o.next=n),t.interleaved=n,It(e,r)}function It(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Qt=!1;function Ia(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ah(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Mt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function sn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,V&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,It(e,n)}return o=r.interleaved,o===null?(t.next=t,Fa(r)):(t.next=o.next,o.next=t),r.interleaved=t,It(e,n)}function mi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Sa(e,n)}}function oc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Vi(e,t,n,r){var o=e.updateQueue;Qt=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,u=s.next;s.next=null,l===null?i=u:l.next=u,l=s;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==l&&(a===null?h.firstBaseUpdate=u:a.next=u,h.lastBaseUpdate=s))}if(i!==null){var d=o.baseState;l=0,h=u=s=null,a=i;do{var g=a.lane,v=a.eventTime;if((r&g)===g){h!==null&&(h=h.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var b=e,w=a;switch(g=t,v=n,w.tag){case 1:if(b=w.payload,typeof b=="function"){d=b.call(v,d,g);break e}d=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=w.payload,g=typeof b=="function"?b.call(v,d,g):b,g==null)break e;d=ne({},d,g);break e;case 2:Qt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[a]:g.push(a))}else v={eventTime:v,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(u=h=v,s=d):h=h.next=v,l|=g;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;g=a,a=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(1);if(h===null&&(s=d),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=h,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);In|=l,e.lanes=l,e.memoizedState=d}}function ic(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(x(191,o));o.call(r)}}}var Ph=new zd.Component().refs;function js(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ne({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ul={isMounted:function(e){return(e=e._reactInternals)?Un(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Te(),o=un(e),i=Mt(r,o);i.payload=t,n!=null&&(i.callback=n),t=sn(e,i,o),t!==null&&(bt(t,e,o,r),mi(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Te(),o=un(e),i=Mt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=sn(e,i,o),t!==null&&(bt(t,e,o,r),mi(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Te(),r=un(e),o=Mt(n,r);o.tag=2,t!=null&&(o.callback=t),t=sn(e,o,r),t!==null&&(bt(t,e,r,n),mi(t,e,r))}};function lc(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!vo(n,r)||!vo(o,i):!0}function Th(e,t,n){var r=!1,o=pn,i=t.contextType;return typeof i=="object"&&i!==null?i=ct(i):(o=je(t)?Mn:Ee.current,r=t.contextTypes,i=(r=r!=null)?yr(e,o):pn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ul,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function sc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ul.enqueueReplaceState(t,t.state,null)}function Vs(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=Ph,Ia(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=ct(i):(i=je(t)?Mn:Ee.current,o.context=yr(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(js(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&ul.enqueueReplaceState(o,o.state,null),Vi(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Fr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=o.refs;a===Ph&&(a=o.refs={}),l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,e))}return e}function ei(e,t){throw e=Object.prototype.toString.call(t),Error(x(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ac(e){var t=e._init;return t(e._payload)}function Lh(e){function t(p,c){if(e){var m=p.deletions;m===null?(p.deletions=[c],p.flags|=16):m.push(c)}}function n(p,c){if(!e)return null;for(;c!==null;)t(p,c),c=c.sibling;return null}function r(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function o(p,c){return p=cn(p,c),p.index=0,p.sibling=null,p}function i(p,c,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<c?(p.flags|=2,c):m):(p.flags|=2,c)):(p.flags|=1048576,c)}function l(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,c,m,_){return c===null||c.tag!==6?(c=ql(m,p.mode,_),c.return=p,c):(c=o(c,m),c.return=p,c)}function s(p,c,m,_){var k=m.type;return k===Xn?h(p,c,m.props.children,_,m.key):c!==null&&(c.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Kt&&ac(k)===c.type)?(_=o(c,m.props),_.ref=Fr(p,c,m),_.return=p,_):(_=xi(m.type,m.key,m.props,null,p.mode,_),_.ref=Fr(p,c,m),_.return=p,_)}function u(p,c,m,_){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=Gl(m,p.mode,_),c.return=p,c):(c=o(c,m.children||[]),c.return=p,c)}function h(p,c,m,_,k){return c===null||c.tag!==7?(c=On(m,p.mode,_,k),c.return=p,c):(c=o(c,m),c.return=p,c)}function d(p,c,m){if(typeof c=="string"&&c!==""||typeof c=="number")return c=ql(""+c,p.mode,m),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Ho:return m=xi(c.type,c.key,c.props,null,p.mode,m),m.ref=Fr(p,null,c),m.return=p,m;case Gn:return c=Gl(c,p.mode,m),c.return=p,c;case Kt:var _=c._init;return d(p,_(c._payload),m)}if(qr(c)||Nr(c))return c=On(c,p.mode,m,null),c.return=p,c;ei(p,c)}return null}function g(p,c,m,_){var k=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return k!==null?null:a(p,c,""+m,_);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ho:return m.key===k?s(p,c,m,_):null;case Gn:return m.key===k?u(p,c,m,_):null;case Kt:return k=m._init,g(p,c,k(m._payload),_)}if(qr(m)||Nr(m))return k!==null?null:h(p,c,m,_,null);ei(p,m)}return null}function v(p,c,m,_,k){if(typeof _=="string"&&_!==""||typeof _=="number")return p=p.get(m)||null,a(c,p,""+_,k);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ho:return p=p.get(_.key===null?m:_.key)||null,s(c,p,_,k);case Gn:return p=p.get(_.key===null?m:_.key)||null,u(c,p,_,k);case Kt:var S=_._init;return v(p,c,m,S(_._payload),k)}if(qr(_)||Nr(_))return p=p.get(m)||null,h(c,p,_,k,null);ei(c,_)}return null}function b(p,c,m,_){for(var k=null,S=null,$=c,z=c=0,B=null;$!==null&&z<m.length;z++){$.index>z?(B=$,$=null):B=$.sibling;var R=g(p,$,m[z],_);if(R===null){$===null&&($=B);break}e&&$&&R.alternate===null&&t(p,$),c=i(R,c,z),S===null?k=R:S.sibling=R,S=R,$=B}if(z===m.length)return n(p,$),J&&$n(p,z),k;if($===null){for(;z<m.length;z++)$=d(p,m[z],_),$!==null&&(c=i($,c,z),S===null?k=$:S.sibling=$,S=$);return J&&$n(p,z),k}for($=r(p,$);z<m.length;z++)B=v($,p,z,m[z],_),B!==null&&(e&&B.alternate!==null&&$.delete(B.key===null?z:B.key),c=i(B,c,z),S===null?k=B:S.sibling=B,S=B);return e&&$.forEach(function(he){return t(p,he)}),J&&$n(p,z),k}function w(p,c,m,_){var k=Nr(m);if(typeof k!="function")throw Error(x(150));if(m=k.call(m),m==null)throw Error(x(151));for(var S=k=null,$=c,z=c=0,B=null,R=m.next();$!==null&&!R.done;z++,R=m.next()){$.index>z?(B=$,$=null):B=$.sibling;var he=g(p,$,R.value,_);if(he===null){$===null&&($=B);break}e&&$&&he.alternate===null&&t(p,$),c=i(he,c,z),S===null?k=he:S.sibling=he,S=he,$=B}if(R.done)return n(p,$),J&&$n(p,z),k;if($===null){for(;!R.done;z++,R=m.next())R=d(p,R.value,_),R!==null&&(c=i(R,c,z),S===null?k=R:S.sibling=R,S=R);return J&&$n(p,z),k}for($=r(p,$);!R.done;z++,R=m.next())R=v($,p,z,R.value,_),R!==null&&(e&&R.alternate!==null&&$.delete(R.key===null?z:R.key),c=i(R,c,z),S===null?k=R:S.sibling=R,S=R);return e&&$.forEach(function(ie){return t(p,ie)}),J&&$n(p,z),k}function L(p,c,m,_){if(typeof m=="object"&&m!==null&&m.type===Xn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Ho:e:{for(var k=m.key,S=c;S!==null;){if(S.key===k){if(k=m.type,k===Xn){if(S.tag===7){n(p,S.sibling),c=o(S,m.props.children),c.return=p,p=c;break e}}else if(S.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Kt&&ac(k)===S.type){n(p,S.sibling),c=o(S,m.props),c.ref=Fr(p,S,m),c.return=p,p=c;break e}n(p,S);break}else t(p,S);S=S.sibling}m.type===Xn?(c=On(m.props.children,p.mode,_,m.key),c.return=p,p=c):(_=xi(m.type,m.key,m.props,null,p.mode,_),_.ref=Fr(p,c,m),_.return=p,p=_)}return l(p);case Gn:e:{for(S=m.key;c!==null;){if(c.key===S)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){n(p,c.sibling),c=o(c,m.children||[]),c.return=p,p=c;break e}else{n(p,c);break}else t(p,c);c=c.sibling}c=Gl(m,p.mode,_),c.return=p,p=c}return l(p);case Kt:return S=m._init,L(p,c,S(m._payload),_)}if(qr(m))return b(p,c,m,_);if(Nr(m))return w(p,c,m,_);ei(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,c!==null&&c.tag===6?(n(p,c.sibling),c=o(c,m),c.return=p,p=c):(n(p,c),c=ql(m,p.mode,_),c.return=p,p=c),l(p)):n(p,c)}return L}var wr=Lh(!0),Nh=Lh(!1),Oo={},Et=wn(Oo),_o=wn(Oo),xo=wn(Oo);function Tn(e){if(e===Oo)throw Error(x(174));return e}function ja(e,t){switch(q(xo,t),q(_o,e),q(Et,Oo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:bs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=bs(t,e)}X(Et),q(Et,t)}function _r(){X(Et),X(_o),X(xo)}function Rh(e){Tn(xo.current);var t=Tn(Et.current),n=bs(t,e.type);t!==n&&(q(_o,e),q(Et,n))}function Va(e){_o.current===e&&(X(Et),X(_o))}var ee=wn(0);function Bi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Hl=[];function Ba(){for(var e=0;e<Hl.length;e++)Hl[e]._workInProgressVersionPrimary=null;Hl.length=0}var vi=Bt.ReactCurrentDispatcher,Ul=Bt.ReactCurrentBatchConfig,Fn=0,te=null,ce=null,fe=null,Hi=!1,ro=!1,ko=0,nm=0;function Se(){throw Error(x(321))}function Ha(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!wt(e[n],t[n]))return!1;return!0}function Ua(e,t,n,r,o,i){if(Fn=i,te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,vi.current=e===null||e.memoizedState===null?lm:sm,e=n(r,o),ro){i=0;do{if(ro=!1,ko=0,25<=i)throw Error(x(301));i+=1,fe=ce=null,t.updateQueue=null,vi.current=am,e=n(r,o)}while(ro)}if(vi.current=Ui,t=ce!==null&&ce.next!==null,Fn=0,fe=ce=te=null,Hi=!1,t)throw Error(x(300));return e}function Wa(){var e=ko!==0;return ko=0,e}function St(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fe===null?te.memoizedState=fe=e:fe=fe.next=e,fe}function dt(){if(ce===null){var e=te.alternate;e=e!==null?e.memoizedState:null}else e=ce.next;var t=fe===null?te.memoizedState:fe.next;if(t!==null)fe=t,ce=e;else{if(e===null)throw Error(x(310));ce=e,e={memoizedState:ce.memoizedState,baseState:ce.baseState,baseQueue:ce.baseQueue,queue:ce.queue,next:null},fe===null?te.memoizedState=fe=e:fe=fe.next=e}return fe}function So(e,t){return typeof t=="function"?t(e):t}function Wl(e){var t=dt(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=ce,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,s=null,u=i;do{var h=u.lane;if((Fn&h)===h)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=d,l=r):s=s.next=d,te.lanes|=h,In|=h}u=u.next}while(u!==null&&u!==i);s===null?l=r:s.next=a,wt(r,t.memoizedState)||(Fe=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,te.lanes|=i,In|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Kl(e){var t=dt(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);wt(i,t.memoizedState)||(Fe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Oh(){}function Mh(e,t){var n=te,r=dt(),o=t(),i=!wt(r.memoizedState,o);if(i&&(r.memoizedState=o,Fe=!0),r=r.queue,Ka(Ih.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||fe!==null&&fe.memoizedState.tag&1){if(n.flags|=2048,Co(9,Fh.bind(null,n,r,o,t),void 0,null),ge===null)throw Error(x(349));Fn&30||Dh(n,t,o)}return o}function Dh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=te.updateQueue,t===null?(t={lastEffect:null,stores:null},te.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Fh(e,t,n,r){t.value=n,t.getSnapshot=r,jh(t)&&Vh(e)}function Ih(e,t,n){return n(function(){jh(t)&&Vh(e)})}function jh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!wt(e,n)}catch{return!0}}function Vh(e){var t=It(e,1);t!==null&&bt(t,e,1,-1)}function uc(e){var t=St();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:So,lastRenderedState:e},t.queue=e,e=e.dispatch=im.bind(null,te,e),[t.memoizedState,e]}function Co(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=te.updateQueue,t===null?(t={lastEffect:null,stores:null},te.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Bh(){return dt().memoizedState}function yi(e,t,n,r){var o=St();te.flags|=e,o.memoizedState=Co(1|t,n,void 0,r===void 0?null:r)}function cl(e,t,n,r){var o=dt();r=r===void 0?null:r;var i=void 0;if(ce!==null){var l=ce.memoizedState;if(i=l.destroy,r!==null&&Ha(r,l.deps)){o.memoizedState=Co(t,n,i,r);return}}te.flags|=e,o.memoizedState=Co(1|t,n,i,r)}function cc(e,t){return yi(8390656,8,e,t)}function Ka(e,t){return cl(2048,8,e,t)}function Hh(e,t){return cl(4,2,e,t)}function Uh(e,t){return cl(4,4,e,t)}function Wh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Kh(e,t,n){return n=n!=null?n.concat([e]):null,cl(4,4,Wh.bind(null,t,e),n)}function Qa(){}function Qh(e,t){var n=dt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ha(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Yh(e,t){var n=dt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ha(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function qh(e,t,n){return Fn&21?(wt(n,t)||(n=Zd(),te.lanes|=n,In|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Fe=!0),e.memoizedState=n)}function rm(e,t){var n=W;W=n!==0&&4>n?n:4,e(!0);var r=Ul.transition;Ul.transition={};try{e(!1),t()}finally{W=n,Ul.transition=r}}function Gh(){return dt().memoizedState}function om(e,t,n){var r=un(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Xh(e))Zh(t,n);else if(n=zh(e,t,n,r),n!==null){var o=Te();bt(n,e,r,o),Jh(n,t,r)}}function im(e,t,n){var r=un(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Xh(e))Zh(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(o.hasEagerState=!0,o.eagerState=a,wt(a,l)){var s=t.interleaved;s===null?(o.next=o,Fa(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=zh(e,t,o,r),n!==null&&(o=Te(),bt(n,e,r,o),Jh(n,t,r))}}function Xh(e){var t=e.alternate;return e===te||t!==null&&t===te}function Zh(e,t){ro=Hi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Jh(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Sa(e,n)}}var Ui={readContext:ct,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useInsertionEffect:Se,useLayoutEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useMutableSource:Se,useSyncExternalStore:Se,useId:Se,unstable_isNewReconciler:!1},lm={readContext:ct,useCallback:function(e,t){return St().memoizedState=[e,t===void 0?null:t],e},useContext:ct,useEffect:cc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,yi(4194308,4,Wh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return yi(4194308,4,e,t)},useInsertionEffect:function(e,t){return yi(4,2,e,t)},useMemo:function(e,t){var n=St();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=St();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=om.bind(null,te,e),[r.memoizedState,e]},useRef:function(e){var t=St();return e={current:e},t.memoizedState=e},useState:uc,useDebugValue:Qa,useDeferredValue:function(e){return St().memoizedState=e},useTransition:function(){var e=uc(!1),t=e[0];return e=rm.bind(null,e[1]),St().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=te,o=St();if(J){if(n===void 0)throw Error(x(407));n=n()}else{if(n=t(),ge===null)throw Error(x(349));Fn&30||Dh(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,cc(Ih.bind(null,r,i,e),[e]),r.flags|=2048,Co(9,Fh.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=St(),t=ge.identifierPrefix;if(J){var n=Ot,r=Rt;n=(r&~(1<<32-yt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ko++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=nm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},sm={readContext:ct,useCallback:Qh,useContext:ct,useEffect:Ka,useImperativeHandle:Kh,useInsertionEffect:Hh,useLayoutEffect:Uh,useMemo:Yh,useReducer:Wl,useRef:Bh,useState:function(){return Wl(So)},useDebugValue:Qa,useDeferredValue:function(e){var t=dt();return qh(t,ce.memoizedState,e)},useTransition:function(){var e=Wl(So)[0],t=dt().memoizedState;return[e,t]},useMutableSource:Oh,useSyncExternalStore:Mh,useId:Gh,unstable_isNewReconciler:!1},am={readContext:ct,useCallback:Qh,useContext:ct,useEffect:Ka,useImperativeHandle:Kh,useInsertionEffect:Hh,useLayoutEffect:Uh,useMemo:Yh,useReducer:Kl,useRef:Bh,useState:function(){return Kl(So)},useDebugValue:Qa,useDeferredValue:function(e){var t=dt();return ce===null?t.memoizedState=e:qh(t,ce.memoizedState,e)},useTransition:function(){var e=Kl(So)[0],t=dt().memoizedState;return[e,t]},useMutableSource:Oh,useSyncExternalStore:Mh,useId:Gh,unstable_isNewReconciler:!1};function xr(e,t){try{var n="",r=t;do n+=Mf(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Ql(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Bs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var um=typeof WeakMap=="function"?WeakMap:Map;function ep(e,t,n){n=Mt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ki||(Ki=!0,Zs=r),Bs(e,t)},n}function tp(e,t,n){n=Mt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Bs(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Bs(e,t),typeof r!="function"&&(an===null?an=new Set([this]):an.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function dc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new um;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=km.bind(null,e,t,n),t.then(e,e))}function hc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function pc(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Mt(-1,1),t.tag=2,sn(n,t,1))),n.lanes|=1),e)}var cm=Bt.ReactCurrentOwner,Fe=!1;function Pe(e,t,n,r){t.child=e===null?Nh(t,null,n,r):wr(t,e.child,n,r)}function fc(e,t,n,r,o){n=n.render;var i=t.ref;return pr(t,o),r=Ua(e,t,n,r,i,o),n=Wa(),e!==null&&!Fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,jt(e,t,o)):(J&&n&&La(t),t.flags|=1,Pe(e,t,r,o),t.child)}function gc(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!tu(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,np(e,t,i,r,o)):(e=xi(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:vo,n(l,r)&&e.ref===t.ref)return jt(e,t,o)}return t.flags|=1,e=cn(i,r),e.ref=t.ref,e.return=t,t.child=e}function np(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(vo(i,r)&&e.ref===t.ref)if(Fe=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Fe=!0);else return t.lanes=e.lanes,jt(e,t,o)}return Hs(e,t,n,r,o)}function rp(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},q(sr,Qe),Qe|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,q(sr,Qe),Qe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,q(sr,Qe),Qe|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,q(sr,Qe),Qe|=r;return Pe(e,t,o,n),t.child}function op(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Hs(e,t,n,r,o){var i=je(n)?Mn:Ee.current;return i=yr(t,i),pr(t,o),n=Ua(e,t,n,r,i,o),r=Wa(),e!==null&&!Fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,jt(e,t,o)):(J&&r&&La(t),t.flags|=1,Pe(e,t,n,o),t.child)}function mc(e,t,n,r,o){if(je(n)){var i=!0;Mi(t)}else i=!1;if(pr(t,o),t.stateNode===null)bi(e,t),Th(t,n,r),Vs(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=ct(u):(u=je(n)?Mn:Ee.current,u=yr(t,u));var h=n.getDerivedStateFromProps,d=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";d||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==u)&&sc(t,l,r,u),Qt=!1;var g=t.memoizedState;l.state=g,Vi(t,r,l,o),s=t.memoizedState,a!==r||g!==s||Ie.current||Qt?(typeof h=="function"&&(js(t,n,h,r),s=t.memoizedState),(a=Qt||lc(t,n,a,r,g,s,u))?(d||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Ah(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:ft(t.type,a),l.props=u,d=t.pendingProps,g=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=ct(s):(s=je(n)?Mn:Ee.current,s=yr(t,s));var v=n.getDerivedStateFromProps;(h=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==d||g!==s)&&sc(t,l,r,s),Qt=!1,g=t.memoizedState,l.state=g,Vi(t,r,l,o);var b=t.memoizedState;a!==d||g!==b||Ie.current||Qt?(typeof v=="function"&&(js(t,n,v,r),b=t.memoizedState),(u=Qt||lc(t,n,u,r,g,b,s)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,b,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,b,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=b),l.props=r,l.state=b,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Us(e,t,n,r,i,o)}function Us(e,t,n,r,o,i){op(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&tc(t,n,!1),jt(e,t,i);r=t.stateNode,cm.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=wr(t,e.child,null,i),t.child=wr(t,null,a,i)):Pe(e,t,a,i),t.memoizedState=r.state,o&&tc(t,n,!0),t.child}function ip(e){var t=e.stateNode;t.pendingContext?ec(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ec(e,t.context,!1),ja(e,t.containerInfo)}function vc(e,t,n,r,o){return br(),Ra(o),t.flags|=256,Pe(e,t,n,r),t.child}var Ws={dehydrated:null,treeContext:null,retryLane:0};function Ks(e){return{baseLanes:e,cachePool:null,transitions:null}}function lp(e,t,n){var r=t.pendingProps,o=ee.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),q(ee,o&1),e===null)return Fs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=pl(l,r,0,null),e=On(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ks(n),t.memoizedState=Ws,e):Ya(t,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return dm(e,t,l,r,a,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=cn(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=cn(a,i):(i=On(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Ks(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Ws,r}return i=e.child,e=i.sibling,r=cn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ya(e,t){return t=pl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ti(e,t,n,r){return r!==null&&Ra(r),wr(t,e.child,null,n),e=Ya(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function dm(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=Ql(Error(x(422))),ti(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=pl({mode:"visible",children:r.children},o,0,null),i=On(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&wr(t,e.child,null,l),t.child.memoizedState=Ks(l),t.memoizedState=Ws,i);if(!(t.mode&1))return ti(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(x(419)),r=Ql(i,r,void 0),ti(e,t,l,r)}if(a=(l&e.childLanes)!==0,Fe||a){if(r=ge,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,It(e,o),bt(r,e,o,-1))}return eu(),r=Ql(Error(x(421))),ti(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Sm.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,qe=ln(o.nextSibling),Ge=t,J=!0,mt=null,e!==null&&(it[lt++]=Rt,it[lt++]=Ot,it[lt++]=Dn,Rt=e.id,Ot=e.overflow,Dn=t),t=Ya(t,r.children),t.flags|=4096,t)}function yc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Is(e.return,t,n)}function Yl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function sp(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Pe(e,t,r.children,n),r=ee.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&yc(e,n,t);else if(e.tag===19)yc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(q(ee,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Bi(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Yl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Bi(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Yl(t,!0,n,null,i);break;case"together":Yl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function bi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function jt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),In|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(x(153));if(t.child!==null){for(e=t.child,n=cn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=cn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function hm(e,t,n){switch(t.tag){case 3:ip(t),br();break;case 5:Rh(t);break;case 1:je(t.type)&&Mi(t);break;case 4:ja(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;q(Ii,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(q(ee,ee.current&1),t.flags|=128,null):n&t.child.childLanes?lp(e,t,n):(q(ee,ee.current&1),e=jt(e,t,n),e!==null?e.sibling:null);q(ee,ee.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return sp(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),q(ee,ee.current),r)break;return null;case 22:case 23:return t.lanes=0,rp(e,t,n)}return jt(e,t,n)}var ap,Qs,up,cp;ap=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Qs=function(){};up=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Tn(Et.current);var i=null;switch(n){case"input":o=gs(e,o),r=gs(e,r),i=[];break;case"select":o=ne({},o,{value:void 0}),r=ne({},r,{value:void 0}),i=[];break;case"textarea":o=ys(e,o),r=ys(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ri)}ws(n,r);var l;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(uo.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(a=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(i||(i=[]),i.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(uo.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&G("scroll",e),i||a===s||(i=[])):(i=i||[]).push(u,s))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};cp=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ir(e,t){if(!J)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function pm(e,t,n){var r=t.pendingProps;switch(Na(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ce(t),null;case 1:return je(t.type)&&Oi(),Ce(t),null;case 3:return r=t.stateNode,_r(),X(Ie),X(Ee),Ba(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Jo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,mt!==null&&(ta(mt),mt=null))),Qs(e,t),Ce(t),null;case 5:Va(t);var o=Tn(xo.current);if(n=t.type,e!==null&&t.stateNode!=null)up(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(x(166));return Ce(t),null}if(e=Tn(Et.current),Jo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Ct]=t,r[wo]=i,e=(t.mode&1)!==0,n){case"dialog":G("cancel",r),G("close",r);break;case"iframe":case"object":case"embed":G("load",r);break;case"video":case"audio":for(o=0;o<Xr.length;o++)G(Xr[o],r);break;case"source":G("error",r);break;case"img":case"image":case"link":G("error",r),G("load",r);break;case"details":G("toggle",r);break;case"input":Eu(r,i),G("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},G("invalid",r);break;case"textarea":Au(r,i),G("invalid",r)}ws(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Zo(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Zo(r.textContent,a,e),o=["children",""+a]):uo.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&G("scroll",r)}switch(n){case"input":Uo(r),zu(r,i,!0);break;case"textarea":Uo(r),Pu(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ri)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Dd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Ct]=t,e[wo]=r,ap(e,t,!1,!1),t.stateNode=e;e:{switch(l=_s(n,r),n){case"dialog":G("cancel",e),G("close",e),o=r;break;case"iframe":case"object":case"embed":G("load",e),o=r;break;case"video":case"audio":for(o=0;o<Xr.length;o++)G(Xr[o],e);o=r;break;case"source":G("error",e),o=r;break;case"img":case"image":case"link":G("error",e),G("load",e),o=r;break;case"details":G("toggle",e),o=r;break;case"input":Eu(e,r),o=gs(e,r),G("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ne({},r,{value:void 0}),G("invalid",e);break;case"textarea":Au(e,r),o=ys(e,r),G("invalid",e);break;default:o=r}ws(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?jd(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Fd(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&co(e,s):typeof s=="number"&&co(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(uo.hasOwnProperty(i)?s!=null&&i==="onScroll"&&G("scroll",e):s!=null&&ya(e,i,s,l))}switch(n){case"input":Uo(e),zu(e,r,!1);break;case"textarea":Uo(e),Pu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+hn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?ur(e,!!r.multiple,i,!1):r.defaultValue!=null&&ur(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Ri)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ce(t),null;case 6:if(e&&t.stateNode!=null)cp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(x(166));if(n=Tn(xo.current),Tn(Et.current),Jo(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ct]=t,(i=r.nodeValue!==n)&&(e=Ge,e!==null))switch(e.tag){case 3:Zo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Zo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ct]=t,t.stateNode=r}return Ce(t),null;case 13:if(X(ee),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(J&&qe!==null&&t.mode&1&&!(t.flags&128))Eh(),br(),t.flags|=98560,i=!1;else if(i=Jo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(x(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(x(317));i[Ct]=t}else br(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ce(t),i=!1}else mt!==null&&(ta(mt),mt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ee.current&1?de===0&&(de=3):eu())),t.updateQueue!==null&&(t.flags|=4),Ce(t),null);case 4:return _r(),Qs(e,t),e===null&&yo(t.stateNode.containerInfo),Ce(t),null;case 10:return Da(t.type._context),Ce(t),null;case 17:return je(t.type)&&Oi(),Ce(t),null;case 19:if(X(ee),i=t.memoizedState,i===null)return Ce(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)Ir(i,!1);else{if(de!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Bi(e),l!==null){for(t.flags|=128,Ir(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return q(ee,ee.current&1|2),t.child}e=e.sibling}i.tail!==null&&se()>kr&&(t.flags|=128,r=!0,Ir(i,!1),t.lanes=4194304)}else{if(!r)if(e=Bi(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ir(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!J)return Ce(t),null}else 2*se()-i.renderingStartTime>kr&&n!==1073741824&&(t.flags|=128,r=!0,Ir(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=se(),t.sibling=null,n=ee.current,q(ee,r?n&1|2:n&1),t):(Ce(t),null);case 22:case 23:return Ja(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Qe&1073741824&&(Ce(t),t.subtreeFlags&6&&(t.flags|=8192)):Ce(t),null;case 24:return null;case 25:return null}throw Error(x(156,t.tag))}function fm(e,t){switch(Na(t),t.tag){case 1:return je(t.type)&&Oi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return _r(),X(Ie),X(Ee),Ba(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Va(t),null;case 13:if(X(ee),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(x(340));br()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return X(ee),null;case 4:return _r(),null;case 10:return Da(t.type._context),null;case 22:case 23:return Ja(),null;case 24:return null;default:return null}}var ni=!1,$e=!1,gm=typeof WeakSet=="function"?WeakSet:Set,P=null;function lr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){oe(e,t,r)}else n.current=null}function Ys(e,t,n){try{n()}catch(r){oe(e,t,r)}}var bc=!1;function mm(e,t){if(Ts=Ti,e=fh(),Ta(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,u=0,h=0,d=e,g=null;t:for(;;){for(var v;d!==n||o!==0&&d.nodeType!==3||(a=l+o),d!==i||r!==0&&d.nodeType!==3||(s=l+r),d.nodeType===3&&(l+=d.nodeValue.length),(v=d.firstChild)!==null;)g=d,d=v;for(;;){if(d===e)break t;if(g===n&&++u===o&&(a=l),g===i&&++h===r&&(s=l),(v=d.nextSibling)!==null)break;d=g,g=d.parentNode}d=v}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ls={focusedElem:e,selectionRange:n},Ti=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var b=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var w=b.memoizedProps,L=b.memoizedState,p=t.stateNode,c=p.getSnapshotBeforeUpdate(t.elementType===t.type?w:ft(t.type,w),L);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(_){oe(t,t.return,_)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return b=bc,bc=!1,b}function oo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Ys(t,n,i)}o=o.next}while(o!==r)}}function dl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function qs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function dp(e){var t=e.alternate;t!==null&&(e.alternate=null,dp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ct],delete t[wo],delete t[Os],delete t[Zg],delete t[Jg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function hp(e){return e.tag===5||e.tag===3||e.tag===4}function wc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||hp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Gs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ri));else if(r!==4&&(e=e.child,e!==null))for(Gs(e,t,n),e=e.sibling;e!==null;)Gs(e,t,n),e=e.sibling}function Xs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Xs(e,t,n),e=e.sibling;e!==null;)Xs(e,t,n),e=e.sibling}var ye=null,gt=!1;function Ut(e,t,n){for(n=n.child;n!==null;)pp(e,t,n),n=n.sibling}function pp(e,t,n){if($t&&typeof $t.onCommitFiberUnmount=="function")try{$t.onCommitFiberUnmount(rl,n)}catch{}switch(n.tag){case 5:$e||lr(n,t);case 6:var r=ye,o=gt;ye=null,Ut(e,t,n),ye=r,gt=o,ye!==null&&(gt?(e=ye,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ye.removeChild(n.stateNode));break;case 18:ye!==null&&(gt?(e=ye,n=n.stateNode,e.nodeType===8?Vl(e.parentNode,n):e.nodeType===1&&Vl(e,n),go(e)):Vl(ye,n.stateNode));break;case 4:r=ye,o=gt,ye=n.stateNode.containerInfo,gt=!0,Ut(e,t,n),ye=r,gt=o;break;case 0:case 11:case 14:case 15:if(!$e&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Ys(n,t,l),o=o.next}while(o!==r)}Ut(e,t,n);break;case 1:if(!$e&&(lr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){oe(n,t,a)}Ut(e,t,n);break;case 21:Ut(e,t,n);break;case 22:n.mode&1?($e=(r=$e)||n.memoizedState!==null,Ut(e,t,n),$e=r):Ut(e,t,n);break;default:Ut(e,t,n)}}function _c(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new gm),t.forEach(function(r){var o=Cm.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function pt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:ye=a.stateNode,gt=!1;break e;case 3:ye=a.stateNode.containerInfo,gt=!0;break e;case 4:ye=a.stateNode.containerInfo,gt=!0;break e}a=a.return}if(ye===null)throw Error(x(160));pp(i,l,o),ye=null,gt=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){oe(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)fp(t,e),t=t.sibling}function fp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(pt(t,e),kt(e),r&4){try{oo(3,e,e.return),dl(3,e)}catch(w){oe(e,e.return,w)}try{oo(5,e,e.return)}catch(w){oe(e,e.return,w)}}break;case 1:pt(t,e),kt(e),r&512&&n!==null&&lr(n,n.return);break;case 5:if(pt(t,e),kt(e),r&512&&n!==null&&lr(n,n.return),e.flags&32){var o=e.stateNode;try{co(o,"")}catch(w){oe(e,e.return,w)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Od(o,i),_s(a,l);var u=_s(a,i);for(l=0;l<s.length;l+=2){var h=s[l],d=s[l+1];h==="style"?jd(o,d):h==="dangerouslySetInnerHTML"?Fd(o,d):h==="children"?co(o,d):ya(o,h,d,u)}switch(a){case"input":ms(o,i);break;case"textarea":Md(o,i);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?ur(o,!!i.multiple,v,!1):g!==!!i.multiple&&(i.defaultValue!=null?ur(o,!!i.multiple,i.defaultValue,!0):ur(o,!!i.multiple,i.multiple?[]:"",!1))}o[wo]=i}catch(w){oe(e,e.return,w)}}break;case 6:if(pt(t,e),kt(e),r&4){if(e.stateNode===null)throw Error(x(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(w){oe(e,e.return,w)}}break;case 3:if(pt(t,e),kt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{go(t.containerInfo)}catch(w){oe(e,e.return,w)}break;case 4:pt(t,e),kt(e);break;case 13:pt(t,e),kt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Xa=se())),r&4&&_c(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?($e=(u=$e)||h,pt(t,e),$e=u):pt(t,e),kt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!h&&e.mode&1)for(P=e,h=e.child;h!==null;){for(d=P=h;P!==null;){switch(g=P,v=g.child,g.tag){case 0:case 11:case 14:case 15:oo(4,g,g.return);break;case 1:lr(g,g.return);var b=g.stateNode;if(typeof b.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(w){oe(r,n,w)}}break;case 5:lr(g,g.return);break;case 22:if(g.memoizedState!==null){kc(d);continue}}v!==null?(v.return=g,P=v):kc(d)}h=h.sibling}e:for(h=null,d=e;;){if(d.tag===5){if(h===null){h=d;try{o=d.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=d.stateNode,s=d.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Id("display",l))}catch(w){oe(e,e.return,w)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(w){oe(e,e.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:pt(t,e),kt(e),r&4&&_c(e);break;case 21:break;default:pt(t,e),kt(e)}}function kt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(hp(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(co(o,""),r.flags&=-33);var i=wc(e);Xs(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=wc(e);Gs(e,a,l);break;default:throw Error(x(161))}}catch(s){oe(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function vm(e,t,n){P=e,gp(e)}function gp(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var o=P,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||ni;if(!l){var a=o.alternate,s=a!==null&&a.memoizedState!==null||$e;a=ni;var u=$e;if(ni=l,($e=s)&&!u)for(P=o;P!==null;)l=P,s=l.child,l.tag===22&&l.memoizedState!==null?Sc(o):s!==null?(s.return=l,P=s):Sc(o);for(;i!==null;)P=i,gp(i),i=i.sibling;P=o,ni=a,$e=u}xc(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,P=i):xc(e)}}function xc(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:$e||dl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!$e)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:ft(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&ic(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ic(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&go(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}$e||t.flags&512&&qs(t)}catch(g){oe(t,t.return,g)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function kc(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function Sc(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{dl(4,t)}catch(s){oe(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){oe(t,o,s)}}var i=t.return;try{qs(t)}catch(s){oe(t,i,s)}break;case 5:var l=t.return;try{qs(t)}catch(s){oe(t,l,s)}}}catch(s){oe(t,t.return,s)}if(t===e){P=null;break}var a=t.sibling;if(a!==null){a.return=t.return,P=a;break}P=t.return}}var ym=Math.ceil,Wi=Bt.ReactCurrentDispatcher,qa=Bt.ReactCurrentOwner,ut=Bt.ReactCurrentBatchConfig,V=0,ge=null,ue=null,be=0,Qe=0,sr=wn(0),de=0,$o=null,In=0,hl=0,Ga=0,io=null,Me=null,Xa=0,kr=1/0,At=null,Ki=!1,Zs=null,an=null,ri=!1,Jt=null,Qi=0,lo=0,Js=null,wi=-1,_i=0;function Te(){return V&6?se():wi!==-1?wi:wi=se()}function un(e){return e.mode&1?V&2&&be!==0?be&-be:tm.transition!==null?(_i===0&&(_i=Zd()),_i):(e=W,e!==0||(e=window.event,e=e===void 0?16:ih(e.type)),e):1}function bt(e,t,n,r){if(50<lo)throw lo=0,Js=null,Error(x(185));Lo(e,n,r),(!(V&2)||e!==ge)&&(e===ge&&(!(V&2)&&(hl|=n),de===4&&Gt(e,be)),Ve(e,r),n===1&&V===0&&!(t.mode&1)&&(kr=se()+500,al&&_n()))}function Ve(e,t){var n=e.callbackNode;tg(e,t);var r=Pi(e,e===ge?be:0);if(r===0)n!==null&&Nu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Nu(n),t===1)e.tag===0?em(Cc.bind(null,e)):Sh(Cc.bind(null,e)),Gg(function(){!(V&6)&&_n()}),n=null;else{switch(Jd(r)){case 1:n=ka;break;case 4:n=Gd;break;case 16:n=Ai;break;case 536870912:n=Xd;break;default:n=Ai}n=kp(n,mp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function mp(e,t){if(wi=-1,_i=0,V&6)throw Error(x(327));var n=e.callbackNode;if(fr()&&e.callbackNode!==n)return null;var r=Pi(e,e===ge?be:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Yi(e,r);else{t=r;var o=V;V|=2;var i=yp();(ge!==e||be!==t)&&(At=null,kr=se()+500,Rn(e,t));do try{_m();break}catch(a){vp(e,a)}while(1);Ma(),Wi.current=i,V=o,ue!==null?t=0:(ge=null,be=0,t=de)}if(t!==0){if(t===2&&(o=$s(e),o!==0&&(r=o,t=ea(e,o))),t===1)throw n=$o,Rn(e,0),Gt(e,r),Ve(e,se()),n;if(t===6)Gt(e,r);else{if(o=e.current.alternate,!(r&30)&&!bm(o)&&(t=Yi(e,r),t===2&&(i=$s(e),i!==0&&(r=i,t=ea(e,i))),t===1))throw n=$o,Rn(e,0),Gt(e,r),Ve(e,se()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(x(345));case 2:En(e,Me,At);break;case 3:if(Gt(e,r),(r&130023424)===r&&(t=Xa+500-se(),10<t)){if(Pi(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Te(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Rs(En.bind(null,e,Me,At),t);break}En(e,Me,At);break;case 4:if(Gt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-yt(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ym(r/1960))-r,10<r){e.timeoutHandle=Rs(En.bind(null,e,Me,At),r);break}En(e,Me,At);break;case 5:En(e,Me,At);break;default:throw Error(x(329))}}}return Ve(e,se()),e.callbackNode===n?mp.bind(null,e):null}function ea(e,t){var n=io;return e.current.memoizedState.isDehydrated&&(Rn(e,t).flags|=256),e=Yi(e,t),e!==2&&(t=Me,Me=n,t!==null&&ta(t)),e}function ta(e){Me===null?Me=e:Me.push.apply(Me,e)}function bm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!wt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Gt(e,t){for(t&=~Ga,t&=~hl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-yt(t),r=1<<n;e[n]=-1,t&=~r}}function Cc(e){if(V&6)throw Error(x(327));fr();var t=Pi(e,0);if(!(t&1))return Ve(e,se()),null;var n=Yi(e,t);if(e.tag!==0&&n===2){var r=$s(e);r!==0&&(t=r,n=ea(e,r))}if(n===1)throw n=$o,Rn(e,0),Gt(e,t),Ve(e,se()),n;if(n===6)throw Error(x(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,En(e,Me,At),Ve(e,se()),null}function Za(e,t){var n=V;V|=1;try{return e(t)}finally{V=n,V===0&&(kr=se()+500,al&&_n())}}function jn(e){Jt!==null&&Jt.tag===0&&!(V&6)&&fr();var t=V;V|=1;var n=ut.transition,r=W;try{if(ut.transition=null,W=1,e)return e()}finally{W=r,ut.transition=n,V=t,!(V&6)&&_n()}}function Ja(){Qe=sr.current,X(sr)}function Rn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,qg(n)),ue!==null)for(n=ue.return;n!==null;){var r=n;switch(Na(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Oi();break;case 3:_r(),X(Ie),X(Ee),Ba();break;case 5:Va(r);break;case 4:_r();break;case 13:X(ee);break;case 19:X(ee);break;case 10:Da(r.type._context);break;case 22:case 23:Ja()}n=n.return}if(ge=e,ue=e=cn(e.current,null),be=Qe=t,de=0,$o=null,Ga=hl=In=0,Me=io=null,Pn!==null){for(t=0;t<Pn.length;t++)if(n=Pn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}Pn=null}return e}function vp(e,t){do{var n=ue;try{if(Ma(),vi.current=Ui,Hi){for(var r=te.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Hi=!1}if(Fn=0,fe=ce=te=null,ro=!1,ko=0,qa.current=null,n===null||n.return===null){de=1,$o=t,ue=null;break}e:{var i=e,l=n.return,a=n,s=t;if(t=be,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,h=a,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var v=hc(l);if(v!==null){v.flags&=-257,pc(v,l,a,i,t),v.mode&1&&dc(i,u,t),t=v,s=u;var b=t.updateQueue;if(b===null){var w=new Set;w.add(s),t.updateQueue=w}else b.add(s);break e}else{if(!(t&1)){dc(i,u,t),eu();break e}s=Error(x(426))}}else if(J&&a.mode&1){var L=hc(l);if(L!==null){!(L.flags&65536)&&(L.flags|=256),pc(L,l,a,i,t),Ra(xr(s,a));break e}}i=s=xr(s,a),de!==4&&(de=2),io===null?io=[i]:io.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var p=ep(i,s,t);oc(i,p);break e;case 1:a=s;var c=i.type,m=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(an===null||!an.has(m)))){i.flags|=65536,t&=-t,i.lanes|=t;var _=tp(i,a,t);oc(i,_);break e}}i=i.return}while(i!==null)}wp(n)}catch(k){t=k,ue===n&&n!==null&&(ue=n=n.return);continue}break}while(1)}function yp(){var e=Wi.current;return Wi.current=Ui,e===null?Ui:e}function eu(){(de===0||de===3||de===2)&&(de=4),ge===null||!(In&268435455)&&!(hl&268435455)||Gt(ge,be)}function Yi(e,t){var n=V;V|=2;var r=yp();(ge!==e||be!==t)&&(At=null,Rn(e,t));do try{wm();break}catch(o){vp(e,o)}while(1);if(Ma(),V=n,Wi.current=r,ue!==null)throw Error(x(261));return ge=null,be=0,de}function wm(){for(;ue!==null;)bp(ue)}function _m(){for(;ue!==null&&!Kf();)bp(ue)}function bp(e){var t=xp(e.alternate,e,Qe);e.memoizedProps=e.pendingProps,t===null?wp(e):ue=t,qa.current=null}function wp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=fm(n,t),n!==null){n.flags&=32767,ue=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{de=6,ue=null;return}}else if(n=pm(n,t,Qe),n!==null){ue=n;return}if(t=t.sibling,t!==null){ue=t;return}ue=t=e}while(t!==null);de===0&&(de=5)}function En(e,t,n){var r=W,o=ut.transition;try{ut.transition=null,W=1,xm(e,t,n,r)}finally{ut.transition=o,W=r}return null}function xm(e,t,n,r){do fr();while(Jt!==null);if(V&6)throw Error(x(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(x(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(ng(e,i),e===ge&&(ue=ge=null,be=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ri||(ri=!0,kp(Ai,function(){return fr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=ut.transition,ut.transition=null;var l=W;W=1;var a=V;V|=4,qa.current=null,mm(e,n),fp(n,e),Bg(Ls),Ti=!!Ts,Ls=Ts=null,e.current=n,vm(n),Qf(),V=a,W=l,ut.transition=i}else e.current=n;if(ri&&(ri=!1,Jt=e,Qi=o),i=e.pendingLanes,i===0&&(an=null),Gf(n.stateNode),Ve(e,se()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Ki)throw Ki=!1,e=Zs,Zs=null,e;return Qi&1&&e.tag!==0&&fr(),i=e.pendingLanes,i&1?e===Js?lo++:(lo=0,Js=e):lo=0,_n(),null}function fr(){if(Jt!==null){var e=Jd(Qi),t=ut.transition,n=W;try{if(ut.transition=null,W=16>e?16:e,Jt===null)var r=!1;else{if(e=Jt,Jt=null,Qi=0,V&6)throw Error(x(331));var o=V;for(V|=4,P=e.current;P!==null;){var i=P,l=i.child;if(P.flags&16){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(P=u;P!==null;){var h=P;switch(h.tag){case 0:case 11:case 15:oo(8,h,i)}var d=h.child;if(d!==null)d.return=h,P=d;else for(;P!==null;){h=P;var g=h.sibling,v=h.return;if(dp(h),h===u){P=null;break}if(g!==null){g.return=v,P=g;break}P=v}}}var b=i.alternate;if(b!==null){var w=b.child;if(w!==null){b.child=null;do{var L=w.sibling;w.sibling=null,w=L}while(w!==null)}}P=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,P=l;else e:for(;P!==null;){if(i=P,i.flags&2048)switch(i.tag){case 0:case 11:case 15:oo(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,P=p;break e}P=i.return}}var c=e.current;for(P=c;P!==null;){l=P;var m=l.child;if(l.subtreeFlags&2064&&m!==null)m.return=l,P=m;else e:for(l=c;P!==null;){if(a=P,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:dl(9,a)}}catch(k){oe(a,a.return,k)}if(a===l){P=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,P=_;break e}P=a.return}}if(V=o,_n(),$t&&typeof $t.onPostCommitFiberRoot=="function")try{$t.onPostCommitFiberRoot(rl,e)}catch{}r=!0}return r}finally{W=n,ut.transition=t}}return!1}function $c(e,t,n){t=xr(n,t),t=ep(e,t,1),e=sn(e,t,1),t=Te(),e!==null&&(Lo(e,1,t),Ve(e,t))}function oe(e,t,n){if(e.tag===3)$c(e,e,n);else for(;t!==null;){if(t.tag===3){$c(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(an===null||!an.has(r))){e=xr(n,e),e=tp(t,e,1),t=sn(t,e,1),e=Te(),t!==null&&(Lo(t,1,e),Ve(t,e));break}}t=t.return}}function km(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Te(),e.pingedLanes|=e.suspendedLanes&n,ge===e&&(be&n)===n&&(de===4||de===3&&(be&130023424)===be&&500>se()-Xa?Rn(e,0):Ga|=n),Ve(e,t)}function _p(e,t){t===0&&(e.mode&1?(t=Qo,Qo<<=1,!(Qo&130023424)&&(Qo=4194304)):t=1);var n=Te();e=It(e,t),e!==null&&(Lo(e,t,n),Ve(e,n))}function Sm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),_p(e,n)}function Cm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(t),_p(e,n)}var xp;xp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ie.current)Fe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Fe=!1,hm(e,t,n);Fe=!!(e.flags&131072)}else Fe=!1,J&&t.flags&1048576&&Ch(t,Fi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;bi(e,t),e=t.pendingProps;var o=yr(t,Ee.current);pr(t,n),o=Ua(null,t,r,e,o,n);var i=Wa();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,je(r)?(i=!0,Mi(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ia(t),o.updater=ul,t.stateNode=o,o._reactInternals=t,Vs(t,r,e,n),t=Us(null,t,r,!0,i,n)):(t.tag=0,J&&i&&La(t),Pe(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(bi(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Em(r),e=ft(r,e),o){case 0:t=Hs(null,t,r,e,n);break e;case 1:t=mc(null,t,r,e,n);break e;case 11:t=fc(null,t,r,e,n);break e;case 14:t=gc(null,t,r,ft(r.type,e),n);break e}throw Error(x(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ft(r,o),Hs(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ft(r,o),mc(e,t,r,o,n);case 3:e:{if(ip(t),e===null)throw Error(x(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Ah(e,t),Vi(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=xr(Error(x(423)),t),t=vc(e,t,r,n,o);break e}else if(r!==o){o=xr(Error(x(424)),t),t=vc(e,t,r,n,o);break e}else for(qe=ln(t.stateNode.containerInfo.firstChild),Ge=t,J=!0,mt=null,n=Nh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(br(),r===o){t=jt(e,t,n);break e}Pe(e,t,r,n)}t=t.child}return t;case 5:return Rh(t),e===null&&Fs(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Ns(r,o)?l=null:i!==null&&Ns(r,i)&&(t.flags|=32),op(e,t),Pe(e,t,l,n),t.child;case 6:return e===null&&Fs(t),null;case 13:return lp(e,t,n);case 4:return ja(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=wr(t,null,r,n):Pe(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ft(r,o),fc(e,t,r,o,n);case 7:return Pe(e,t,t.pendingProps,n),t.child;case 8:return Pe(e,t,t.pendingProps.children,n),t.child;case 12:return Pe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,q(Ii,r._currentValue),r._currentValue=l,i!==null)if(wt(i.value,l)){if(i.children===o.children&&!Ie.current){t=jt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=Mt(-1,n&-n),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?s.next=s:(s.next=h.next,h.next=s),u.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Is(i.return,n,t),a.lanes|=n;break}s=s.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(x(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Is(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Pe(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,pr(t,n),o=ct(o),r=r(o),t.flags|=1,Pe(e,t,r,n),t.child;case 14:return r=t.type,o=ft(r,t.pendingProps),o=ft(r.type,o),gc(e,t,r,o,n);case 15:return np(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ft(r,o),bi(e,t),t.tag=1,je(r)?(e=!0,Mi(t)):e=!1,pr(t,n),Th(t,r,o),Vs(t,r,o,n),Us(null,t,r,!0,e,n);case 19:return sp(e,t,n);case 22:return rp(e,t,n)}throw Error(x(156,t.tag))};function kp(e,t){return qd(e,t)}function $m(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function st(e,t,n,r){return new $m(e,t,n,r)}function tu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Em(e){if(typeof e=="function")return tu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===wa)return 11;if(e===_a)return 14}return 2}function cn(e,t){var n=e.alternate;return n===null?(n=st(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function xi(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")tu(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Xn:return On(n.children,o,i,t);case ba:l=8,o|=8;break;case ds:return e=st(12,n,t,o|2),e.elementType=ds,e.lanes=i,e;case hs:return e=st(13,n,t,o),e.elementType=hs,e.lanes=i,e;case ps:return e=st(19,n,t,o),e.elementType=ps,e.lanes=i,e;case Ld:return pl(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Pd:l=10;break e;case Td:l=9;break e;case wa:l=11;break e;case _a:l=14;break e;case Kt:l=16,r=null;break e}throw Error(x(130,e==null?e:typeof e,""))}return t=st(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function On(e,t,n,r){return e=st(7,e,r,t),e.lanes=n,e}function pl(e,t,n,r){return e=st(22,e,r,t),e.elementType=Ld,e.lanes=n,e.stateNode={isHidden:!1},e}function ql(e,t,n){return e=st(6,e,null,t),e.lanes=n,e}function Gl(e,t,n){return t=st(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function zm(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pl(0),this.expirationTimes=Pl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function nu(e,t,n,r,o,i,l,a,s){return e=new zm(e,t,n,a,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=st(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ia(i),e}function Am(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Gn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Sp(e){if(!e)return pn;e=e._reactInternals;e:{if(Un(e)!==e||e.tag!==1)throw Error(x(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(je(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(x(171))}if(e.tag===1){var n=e.type;if(je(n))return kh(e,n,t)}return t}function Cp(e,t,n,r,o,i,l,a,s){return e=nu(n,r,!0,e,o,i,l,a,s),e.context=Sp(null),n=e.current,r=Te(),o=un(n),i=Mt(r,o),i.callback=t??null,sn(n,i,o),e.current.lanes=o,Lo(e,o,r),Ve(e,r),e}function fl(e,t,n,r){var o=t.current,i=Te(),l=un(o);return n=Sp(n),t.context===null?t.context=n:t.pendingContext=n,t=Mt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=sn(o,t,l),e!==null&&(bt(e,o,l,i),mi(e,o,l)),l}function qi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ec(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ru(e,t){Ec(e,t),(e=e.alternate)&&Ec(e,t)}function Pm(){return null}var $p=typeof reportError=="function"?reportError:function(e){console.error(e)};function ou(e){this._internalRoot=e}gl.prototype.render=ou.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(x(409));fl(e,t,null,null)};gl.prototype.unmount=ou.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;jn(function(){fl(null,e,null,null)}),t[Ft]=null}};function gl(e){this._internalRoot=e}gl.prototype.unstable_scheduleHydration=function(e){if(e){var t=nh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<qt.length&&t!==0&&t<qt[n].priority;n++);qt.splice(n,0,e),n===0&&oh(e)}};function iu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ml(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function zc(){}function Tm(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=qi(l);i.call(u)}}var l=Cp(t,r,e,0,null,!1,!1,"",zc);return e._reactRootContainer=l,e[Ft]=l.current,yo(e.nodeType===8?e.parentNode:e),jn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var u=qi(s);a.call(u)}}var s=nu(e,0,!1,null,null,!1,!1,"",zc);return e._reactRootContainer=s,e[Ft]=s.current,yo(e.nodeType===8?e.parentNode:e),jn(function(){fl(t,s,n,r)}),s}function vl(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var s=qi(l);a.call(s)}}fl(t,l,e,o)}else l=Tm(n,t,e,o,r);return qi(l)}eh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Gr(t.pendingLanes);n!==0&&(Sa(t,n|1),Ve(t,se()),!(V&6)&&(kr=se()+500,_n()))}break;case 13:jn(function(){var r=It(e,1);if(r!==null){var o=Te();bt(r,e,1,o)}}),ru(e,1)}};Ca=function(e){if(e.tag===13){var t=It(e,134217728);if(t!==null){var n=Te();bt(t,e,134217728,n)}ru(e,134217728)}};th=function(e){if(e.tag===13){var t=un(e),n=It(e,t);if(n!==null){var r=Te();bt(n,e,t,r)}ru(e,t)}};nh=function(){return W};rh=function(e,t){var n=W;try{return W=e,t()}finally{W=n}};ks=function(e,t,n){switch(t){case"input":if(ms(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=sl(r);if(!o)throw Error(x(90));Rd(r),ms(r,o)}}}break;case"textarea":Md(e,n);break;case"select":t=n.value,t!=null&&ur(e,!!n.multiple,t,!1)}};Hd=Za;Ud=jn;var Lm={usingClientEntryPoint:!1,Events:[Ro,tr,sl,Vd,Bd,Za]},jr={findFiberByHostInstance:An,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Nm={bundleType:jr.bundleType,version:jr.version,rendererPackageName:jr.rendererPackageName,rendererConfig:jr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Bt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Qd(e),e===null?null:e.stateNode},findFiberByHostInstance:jr.findFiberByHostInstance||Pm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var oi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!oi.isDisabled&&oi.supportsFiber)try{rl=oi.inject(Nm),$t=oi}catch{}}Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lm;Je.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!iu(t))throw Error(x(200));return Am(e,t,null,n)};Je.createRoot=function(e,t){if(!iu(e))throw Error(x(299));var n=!1,r="",o=$p;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=nu(e,1,!1,null,null,n,!1,r,o),e[Ft]=t.current,yo(e.nodeType===8?e.parentNode:e),new ou(t)};Je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(x(188)):(e=Object.keys(e).join(","),Error(x(268,e)));return e=Qd(t),e=e===null?null:e.stateNode,e};Je.flushSync=function(e){return jn(e)};Je.hydrate=function(e,t,n){if(!ml(t))throw Error(x(200));return vl(null,e,t,!0,n)};Je.hydrateRoot=function(e,t,n){if(!iu(e))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=$p;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Cp(t,null,e,1,n??null,o,!1,i,l),e[Ft]=t.current,yo(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new gl(t)};Je.render=function(e,t,n){if(!ml(t))throw Error(x(200));return vl(null,e,t,!1,n)};Je.unmountComponentAtNode=function(e){if(!ml(e))throw Error(x(40));return e._reactRootContainer?(jn(function(){vl(null,null,e,!1,function(){e._reactRootContainer=null,e[Ft]=null})}),!0):!1};Je.unstable_batchedUpdates=Za;Je.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ml(n))throw Error(x(200));if(e==null||e._reactInternals===void 0)throw Error(x(38));return vl(e,t,n,!1,r)};Je.version="18.2.0-next-9e3b772b8-20220608";function Ep(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ep)}catch(e){console.error(e)}}Ep(),Cd.exports=Je;var Rm=Cd.exports,Ac=Rm;us.createRoot=Ac.createRoot,us.hydrateRoot=Ac.hydrateRoot;function Om(e){const n=["default","cwy","radar_dbz_cwb","preci_cwb","OceanLakeLandSnow"].map((r,o)=>E.jsx("option",{children:r},o));return E.jsxs(E.Fragment,{children:[E.jsx("label",{children:"Template: "}),E.jsx("select",{title:"colormaps",onChange:r=>e.changeMap(r),style:{maxWidth:"80px"},children:n})]})}var Pc=new WeakMap;function zp(e){let t=Pc.get(e);return t||(t=window.getComputedStyle(e,null),Pc.set(e,t)),t}function Mm(e){if(typeof e.checkVisibility=="function")return e.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const t=zp(e);return t.visibility!=="hidden"&&t.display!=="none"}function Dm(e){const t=zp(e),{overflowY:n,overflowX:r}=t;return n==="scroll"||r==="scroll"?!0:n!=="auto"||r!=="auto"?!1:e.scrollHeight>e.clientHeight&&n==="auto"||e.scrollWidth>e.clientWidth&&r==="auto"}function Fm(e){const t=e.tagName.toLowerCase(),n=Number(e.getAttribute("tabindex"));return e.hasAttribute("tabindex")&&(isNaN(n)||n<=-1)||e.hasAttribute("disabled")||e.closest("[inert]")||t==="input"&&e.getAttribute("type")==="radio"&&!e.hasAttribute("checked")||!Mm(e)?!1:(t==="audio"||t==="video")&&e.hasAttribute("controls")||e.hasAttribute("tabindex")||e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(t)?!0:Dm(e)}function Im(e){var t,n;const r=na(e),o=(t=r[0])!=null?t:null,i=(n=r[r.length-1])!=null?n:null;return{start:o,end:i}}function jm(e,t){var n;return((n=e.getRootNode({composed:!0}))==null?void 0:n.host)!==t}function na(e){const t=new WeakMap,n=[];function r(o){if(o instanceof Element){if(o.hasAttribute("inert")||o.closest("[inert]")||t.has(o))return;t.set(o,!0),!n.includes(o)&&Fm(o)&&n.push(o),o instanceof HTMLSlotElement&&jm(o,e)&&o.assignedElements({flatten:!0}).forEach(i=>{r(i)}),o.shadowRoot!==null&&o.shadowRoot.mode==="open"&&r(o.shadowRoot)}for(const i of o.children)r(i)}return r(e),n.sort((o,i)=>{const l=Number(o.getAttribute("tabindex"))||0;return(Number(i.getAttribute("tabindex"))||0)-l})}var Ap=Object.defineProperty,Vm=Object.defineProperties,Bm=Object.getOwnPropertyDescriptor,Hm=Object.getOwnPropertyDescriptors,Tc=Object.getOwnPropertySymbols,Um=Object.prototype.hasOwnProperty,Wm=Object.prototype.propertyIsEnumerable,Xl=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),Lc=(e,t,n)=>t in e?Ap(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Wn=(e,t)=>{for(var n in t||(t={}))Um.call(t,n)&&Lc(e,n,t[n]);if(Tc)for(var n of Tc(t))Wm.call(t,n)&&Lc(e,n,t[n]);return e},yl=(e,t)=>Vm(e,Hm(t)),f=(e,t,n,r)=>{for(var o=r>1?void 0:r?Bm(t,n):t,i=e.length-1,l;i>=0;i--)(l=e[i])&&(o=(r?l(t,n,o):l(o))||o);return r&&o&&Ap(t,n,o),o},Km=function(e,t){this[0]=e,this[1]=t},Qm=e=>{var t=e[Xl("asyncIterator")],n=!1,r,o={};return t==null?(t=e[Xl("iterator")](),r=i=>o[i]=l=>t[i](l)):(t=t.call(e),r=i=>o[i]=l=>{if(n){if(n=!1,i==="throw")throw l;return l}return n=!0,{done:!1,value:new Km(new Promise(a=>{var s=t[i](l);if(!(s instanceof Object))throw TypeError("Object expected");a(s)}),1)}}),o[Xl("iterator")]=()=>o,r("next"),"throw"in t?r("throw"):o.throw=i=>{throw i},"return"in t&&r("return"),o};function*lu(e=document.activeElement){e!=null&&(yield e,"shadowRoot"in e&&e.shadowRoot&&e.shadowRoot.mode!=="closed"&&(yield*Qm(lu(e.shadowRoot.activeElement))))}function Ym(){return[...lu()].pop()}var Vr=[],qm=class{constructor(e){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=t=>{var n;if(t.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const r=Ym();if(this.previousFocus=r,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;t.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const o=na(this.element);let i=o.findIndex(a=>a===r);this.previousFocus=this.currentFocus;const l=this.tabDirection==="forward"?1:-1;for(;;){i+l>=o.length?i=0:i+l<0?i=o.length-1:i+=l,this.previousFocus=this.currentFocus;const a=o[i];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||a&&this.possiblyHasTabbableChildren(a))return;t.preventDefault(),this.currentFocus=a,(n=this.currentFocus)==null||n.focus({preventScroll:!1});const s=[...lu()];if(s.includes(this.currentFocus)||!s.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=e,this.elementsWithTabbableControls=["iframe"]}activate(){Vr.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){Vr=Vr.filter(e=>e!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return Vr[Vr.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const e=na(this.element);if(!this.element.matches(":focus-within")){const t=e[0],n=e[e.length-1],r=this.tabDirection==="forward"?t:n;typeof(r==null?void 0:r.focus)=="function"&&(this.currentFocus=r,r.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(e){return this.elementsWithTabbableControls.includes(e.tagName.toLowerCase())||e.hasAttribute("controls")}},ra=new Set;function Gm(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function Xm(){const e=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(e)||!e?0:e}function Nc(e){if(ra.add(e),!document.documentElement.classList.contains("sl-scroll-lock")){const t=Gm()+Xm();let n=getComputedStyle(document.documentElement).scrollbarGutter;(!n||n==="auto")&&(n="stable"),t<=0&&(n="revert"),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",n),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${t}px`)}}function Rc(e){ra.delete(e),ra.size===0&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ki=globalThis,su=ki.ShadowRoot&&(ki.ShadyCSS===void 0||ki.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,au=Symbol(),Oc=new WeakMap;let Pp=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==au)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(su&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=Oc.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&Oc.set(n,t))}return t}toString(){return this.cssText}};const Zm=e=>new Pp(typeof e=="string"?e:e+"",void 0,au),ze=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((r,o,i)=>r+(l=>{if(l._$cssResult$===!0)return l.cssText;if(typeof l=="number")return l;throw Error("Value passed to 'css' function must be a 'css' function result: "+l+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1],e[0]);return new Pp(n,e,au)},Jm=(e,t)=>{if(su)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const r=document.createElement("style"),o=ki.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=n.cssText,e.appendChild(r)}},Mc=su?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return Zm(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:e0,defineProperty:t0,getOwnPropertyDescriptor:n0,getOwnPropertyNames:r0,getOwnPropertySymbols:o0,getPrototypeOf:i0}=Object,dn=globalThis,Dc=dn.trustedTypes,l0=Dc?Dc.emptyScript:"",Zl=dn.reactiveElementPolyfillSupport,so=(e,t)=>e,Sr={toAttribute(e,t){switch(t){case Boolean:e=e?l0:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},uu=(e,t)=>!e0(e,t),Fc={attribute:!0,type:String,converter:Sr,reflect:!1,hasChanged:uu};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),dn.litPropertyMetadata??(dn.litPropertyMetadata=new WeakMap);class qn extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=Fc){if(n.state&&(n.attribute=!1),this._$Ei(),this.elementProperties.set(t,n),!n.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(t,r,n);o!==void 0&&t0(this.prototype,t,o)}}static getPropertyDescriptor(t,n,r){const{get:o,set:i}=n0(this.prototype,t)??{get(){return this[n]},set(l){this[n]=l}};return{get(){return o==null?void 0:o.call(this)},set(l){const a=o==null?void 0:o.call(this);i.call(this,l),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Fc}static _$Ei(){if(this.hasOwnProperty(so("elementProperties")))return;const t=i0(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(so("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(so("properties"))){const n=this.properties,r=[...r0(n),...o0(n)];for(const o of r)this.createProperty(o,n[o])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[r,o]of n)this.elementProperties.set(r,o)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const o=this._$Eu(n,r);o!==void 0&&this._$Eh.set(o,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const o of r)n.unshift(Mc(o))}else t!==void 0&&n.push(Mc(t));return n}static _$Eu(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(n=>n(this))}addController(t){var n;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)==null||n.call(t))}removeController(t){var n;(n=this._$EO)==null||n.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Jm(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(n=>{var r;return(r=n.hostConnected)==null?void 0:r.call(n)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(n=>{var r;return(r=n.hostDisconnected)==null?void 0:r.call(n)})}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$EC(t,n){var i;const r=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,r);if(o!==void 0&&r.reflect===!0){const l=(((i=r.converter)==null?void 0:i.toAttribute)!==void 0?r.converter:Sr).toAttribute(n,r.type);this._$Em=t,l==null?this.removeAttribute(o):this.setAttribute(o,l),this._$Em=null}}_$AK(t,n){var i;const r=this.constructor,o=r._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const l=r.getPropertyOptions(o),a=typeof l.converter=="function"?{fromAttribute:l.converter}:((i=l.converter)==null?void 0:i.fromAttribute)!==void 0?l.converter:Sr;this._$Em=o,this[o]=a.fromAttribute(n,l.type),this._$Em=null}}requestUpdate(t,n,r){if(t!==void 0){if(r??(r=this.constructor.getPropertyOptions(t)),!(r.hasChanged??uu)(this[t],n))return;this.P(t,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,n,r){this._$AL.has(t)||this._$AL.set(t,n),r.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,l]of this._$Ep)this[i]=l;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[i,l]of o)l.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],l)}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(r=this._$EO)==null||r.forEach(o=>{var i;return(i=o.hostUpdate)==null?void 0:i.call(o)}),this.update(n)):this._$EU()}catch(o){throw t=!1,this._$EU(),o}t&&this._$AE(n)}willUpdate(t){}_$AE(t){var n;(n=this._$EO)==null||n.forEach(r=>{var o;return(o=r.hostUpdated)==null?void 0:o.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(n=>this._$EC(n,this[n]))),this._$EU()}updated(t){}firstUpdated(t){}}qn.elementStyles=[],qn.shadowRootOptions={mode:"open"},qn[so("elementProperties")]=new Map,qn[so("finalized")]=new Map,Zl==null||Zl({ReactiveElement:qn}),(dn.reactiveElementVersions??(dn.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ao=globalThis,Gi=ao.trustedTypes,Ic=Gi?Gi.createPolicy("lit-html",{createHTML:e=>e}):void 0,Tp="$lit$",Xt=`lit$${Math.random().toFixed(9).slice(2)}$`,Lp="?"+Xt,s0=`<${Lp}>`,Vn=document,Eo=()=>Vn.createComment(""),zo=e=>e===null||typeof e!="object"&&typeof e!="function",Np=Array.isArray,a0=e=>Np(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Jl=`[ 	
\f\r]`,Br=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,jc=/-->/g,Vc=/>/g,Cn=RegExp(`>|${Jl}(?:([^\\s"'>=/]+)(${Jl}*=${Jl}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Bc=/'/g,Hc=/"/g,Rp=/^(?:script|style|textarea|title)$/i,u0=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),Y=u0(1),at=Symbol.for("lit-noChange"),ae=Symbol.for("lit-nothing"),Uc=new WeakMap,Ln=Vn.createTreeWalker(Vn,129);function Op(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ic!==void 0?Ic.createHTML(t):t}const c0=(e,t)=>{const n=e.length-1,r=[];let o,i=t===2?"<svg>":"",l=Br;for(let a=0;a<n;a++){const s=e[a];let u,h,d=-1,g=0;for(;g<s.length&&(l.lastIndex=g,h=l.exec(s),h!==null);)g=l.lastIndex,l===Br?h[1]==="!--"?l=jc:h[1]!==void 0?l=Vc:h[2]!==void 0?(Rp.test(h[2])&&(o=RegExp("</"+h[2],"g")),l=Cn):h[3]!==void 0&&(l=Cn):l===Cn?h[0]===">"?(l=o??Br,d=-1):h[1]===void 0?d=-2:(d=l.lastIndex-h[2].length,u=h[1],l=h[3]===void 0?Cn:h[3]==='"'?Hc:Bc):l===Hc||l===Bc?l=Cn:l===jc||l===Vc?l=Br:(l=Cn,o=void 0);const v=l===Cn&&e[a+1].startsWith("/>")?" ":"";i+=l===Br?s+s0:d>=0?(r.push(u),s.slice(0,d)+Tp+s.slice(d)+Xt+v):s+Xt+(d===-2?a:v)}return[Op(e,i+(e[n]||"<?>")+(t===2?"</svg>":"")),r]};class Ao{constructor({strings:t,_$litType$:n},r){let o;this.parts=[];let i=0,l=0;const a=t.length-1,s=this.parts,[u,h]=c0(t,n);if(this.el=Ao.createElement(u,r),Ln.currentNode=this.el.content,n===2){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(o=Ln.nextNode())!==null&&s.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(const d of o.getAttributeNames())if(d.endsWith(Tp)){const g=h[l++],v=o.getAttribute(d).split(Xt),b=/([.?@])?(.*)/.exec(g);s.push({type:1,index:i,name:b[2],strings:v,ctor:b[1]==="."?h0:b[1]==="?"?p0:b[1]==="@"?f0:bl}),o.removeAttribute(d)}else d.startsWith(Xt)&&(s.push({type:6,index:i}),o.removeAttribute(d));if(Rp.test(o.tagName)){const d=o.textContent.split(Xt),g=d.length-1;if(g>0){o.textContent=Gi?Gi.emptyScript:"";for(let v=0;v<g;v++)o.append(d[v],Eo()),Ln.nextNode(),s.push({type:2,index:++i});o.append(d[g],Eo())}}}else if(o.nodeType===8)if(o.data===Lp)s.push({type:2,index:i});else{let d=-1;for(;(d=o.data.indexOf(Xt,d+1))!==-1;)s.push({type:7,index:i}),d+=Xt.length-1}i++}}static createElement(t,n){const r=Vn.createElement("template");return r.innerHTML=t,r}}function Cr(e,t,n=e,r){var l,a;if(t===at)return t;let o=r!==void 0?(l=n._$Co)==null?void 0:l[r]:n._$Cl;const i=zo(t)?void 0:t._$litDirective$;return(o==null?void 0:o.constructor)!==i&&((a=o==null?void 0:o._$AO)==null||a.call(o,!1),i===void 0?o=void 0:(o=new i(e),o._$AT(e,n,r)),r!==void 0?(n._$Co??(n._$Co=[]))[r]=o:n._$Cl=o),o!==void 0&&(t=Cr(e,o._$AS(e,t.values),o,r)),t}class d0{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:r}=this._$AD,o=((t==null?void 0:t.creationScope)??Vn).importNode(n,!0);Ln.currentNode=o;let i=Ln.nextNode(),l=0,a=0,s=r[0];for(;s!==void 0;){if(l===s.index){let u;s.type===2?u=new Mo(i,i.nextSibling,this,t):s.type===1?u=new s.ctor(i,s.name,s.strings,this,t):s.type===6&&(u=new g0(i,this,t)),this._$AV.push(u),s=r[++a]}l!==(s==null?void 0:s.index)&&(i=Ln.nextNode(),l++)}return Ln.currentNode=Vn,o}p(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}}class Mo{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,n,r,o){this.type=2,this._$AH=ae,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=Cr(this,t,n),zo(t)?t===ae||t==null||t===""?(this._$AH!==ae&&this._$AR(),this._$AH=ae):t!==this._$AH&&t!==at&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):a0(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==ae&&zo(this._$AH)?this._$AA.nextSibling.data=t:this.T(Vn.createTextNode(t)),this._$AH=t}$(t){var i;const{values:n,_$litType$:r}=t,o=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=Ao.createElement(Op(r.h,r.h[0]),this.options)),r);if(((i=this._$AH)==null?void 0:i._$AD)===o)this._$AH.p(n);else{const l=new d0(o,this),a=l.u(this.options);l.p(n),this.T(a),this._$AH=l}}_$AC(t){let n=Uc.get(t.strings);return n===void 0&&Uc.set(t.strings,n=new Ao(t)),n}k(t){Np(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,o=0;for(const i of t)o===n.length?n.push(r=new Mo(this.S(Eo()),this.S(Eo()),this,this.options)):r=n[o],r._$AI(i),o++;o<n.length&&(this._$AR(r&&r._$AB.nextSibling,o),n.length=o)}_$AR(t=this._$AA.nextSibling,n){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,n);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var n;this._$AM===void 0&&(this._$Cv=t,(n=this._$AP)==null||n.call(this,t))}}class bl{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,r,o,i){this.type=1,this._$AH=ae,this._$AN=void 0,this.element=t,this.name=n,this._$AM=o,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=ae}_$AI(t,n=this,r,o){const i=this.strings;let l=!1;if(i===void 0)t=Cr(this,t,n,0),l=!zo(t)||t!==this._$AH&&t!==at,l&&(this._$AH=t);else{const a=t;let s,u;for(t=i[0],s=0;s<i.length-1;s++)u=Cr(this,a[r+s],n,s),u===at&&(u=this._$AH[s]),l||(l=!zo(u)||u!==this._$AH[s]),u===ae?t=ae:t!==ae&&(t+=(u??"")+i[s+1]),this._$AH[s]=u}l&&!o&&this.j(t)}j(t){t===ae?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class h0 extends bl{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===ae?void 0:t}}class p0 extends bl{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==ae)}}class f0 extends bl{constructor(t,n,r,o,i){super(t,n,r,o,i),this.type=5}_$AI(t,n=this){if((t=Cr(this,t,n,0)??ae)===at)return;const r=this._$AH,o=t===ae&&r!==ae||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,i=t!==ae&&(r===ae||o);o&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,t):this._$AH.handleEvent(t)}}class g0{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Cr(this,t)}}const es=ao.litHtmlPolyfillSupport;es==null||es(Ao,Mo),(ao.litHtmlVersions??(ao.litHtmlVersions=[])).push("3.1.4");const m0=(e,t,n)=>{const r=(n==null?void 0:n.renderBefore)??t;let o=r._$litPart$;if(o===void 0){const i=(n==null?void 0:n.renderBefore)??null;r._$litPart$=o=new Mo(t.insertBefore(Eo(),i),i,void 0,n??{})}return o._$AI(e),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let gr=class extends qn{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var n;const t=super.createRenderRoot();return(n=this.renderOptions).renderBefore??(n.renderBefore=t.firstChild),t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=m0(n,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return at}};var pd;gr._$litElement$=!0,gr.finalized=!0,(pd=globalThis.litElementHydrateSupport)==null||pd.call(globalThis,{LitElement:gr});const ts=globalThis.litElementPolyfillSupport;ts==null||ts({LitElement:gr});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.6");var v0=ze`
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
`,y0=ze`
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
`,b0=ze`
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
`,oa="";function Xi(e){oa=e}function w0(e=""){if(!oa){const t=[...document.getElementsByTagName("script")],n=t.find(r=>r.hasAttribute("data-shoelace"));if(n)Xi(n.getAttribute("data-shoelace"));else{const r=t.find(i=>/shoelace(\.min)?\.js($|\?)/.test(i.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(i.src));let o="";r&&(o=r.getAttribute("src")),Xi(o.split("/").slice(0,-1).join("/"))}}return oa.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}var _0={name:"default",resolver:e=>w0(`assets/icons/${e}.svg`)},x0=_0,Wc={caret:`
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
  `},k0={name:"system",resolver:e=>e in Wc?`data:image/svg+xml,${encodeURIComponent(Wc[e])}`:""},S0=k0,C0=[x0,S0],ia=[];function $0(e){ia.push(e)}function E0(e){ia=ia.filter(t=>t!==e)}function Kc(e){return C0.find(t=>t.name===e)}function xe(e,t){const n=Wn({waitUntilFirstUpdate:!1},t);return(r,o)=>{const{update:i}=r,l=Array.isArray(e)?e:[e];r.update=function(a){l.forEach(s=>{const u=s;if(a.has(u)){const h=a.get(u),d=this[u];h!==d&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[o](h,d)}}),i.call(this,a)}}}var tt=ze`
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
 */const z0={attribute:!0,type:String,converter:Sr,reflect:!1,hasChanged:uu},A0=(e=z0,t,n)=>{const{kind:r,metadata:o}=n;let i=globalThis.litPropertyMetadata.get(o);if(i===void 0&&globalThis.litPropertyMetadata.set(o,i=new Map),i.set(n.name,e),r==="accessor"){const{name:l}=n;return{set(a){const s=t.get.call(this);t.set.call(this,a),this.requestUpdate(l,s,e)},init(a){return a!==void 0&&this.P(l,void 0,e),a}}}if(r==="setter"){const{name:l}=n;return function(a){const s=this[l];t.call(this,a),this.requestUpdate(l,s,e)}}throw Error("Unsupported decorator location: "+r)};function y(e){return(t,n)=>typeof n=="object"?A0(e,t,n):((r,o,i)=>{const l=o.hasOwnProperty(i);return o.constructor.createProperty(i,l?{...r,wrapped:!0}:r),l?Object.getOwnPropertyDescriptor(o,i):void 0})(e,t,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function me(e){return y({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function P0(e){return(t,n)=>{const r=typeof t=="function"?t:t[n];Object.assign(r,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qc=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,n),n);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Z(e,t){return(n,r,o)=>{const i=l=>{var a;return((a=l.renderRoot)==null?void 0:a.querySelector(e))??null};if(t){const{get:l,set:a}=typeof r=="object"?n:o??(()=>{const s=Symbol();return{get(){return this[s]},set(u){this[s]=u}}})();return Qc(n,r,{get(){let s=l.call(this);return s===void 0&&(s=i(this),(s!==null||this.hasUpdated)&&a.call(this,s)),s}})}return Qc(n,r,{get(){return i(this)}})}}var ke=class extends gr{constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([t,n])=>{this.constructor.define(t,n)})}emit(t,n){const r=new CustomEvent(t,Wn({bubbles:!0,cancelable:!1,composed:!0,detail:{}},n));return this.dispatchEvent(r),r}static define(t,n=this,r={}){const o=customElements.get(t);if(!o){customElements.define(t,class extends n{},r);return}let i=" (unknown version)",l=i;"version"in n&&n.version&&(i=" v"+n.version),"version"in o&&o.version&&(l=" v"+o.version),!(i&&l&&i===l)&&console.warn(`Attempted to register <${t}>${i}, but <${t}>${l} has already been registered.`)}};ke.version="2.15.1";ke.dependencies={};f([y()],ke.prototype,"dir",2);f([y()],ke.prototype,"lang",2);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const T0=(e,t)=>t===void 0?(e==null?void 0:e._$litType$)!==void 0:(e==null?void 0:e._$litType$)===t,L0=e=>e.strings===void 0,N0={},R0=(e,t=N0)=>e._$AH=t;var Hr=Symbol(),ii=Symbol(),ns,rs=new Map,Be=class extends ke{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var n;let r;if(t!=null&&t.spriteSheet){this.svg=Y`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;const o=this.shadowRoot.querySelector("[part='svg']");return typeof t.mutator=="function"&&t.mutator(o),this.svg}try{if(r=await fetch(e,{mode:"cors"}),!r.ok)return r.status===410?Hr:ii}catch{return ii}try{const o=document.createElement("div");o.innerHTML=await r.text();const i=o.firstElementChild;if(((n=i==null?void 0:i.tagName)==null?void 0:n.toLowerCase())!=="svg")return Hr;ns||(ns=new DOMParser);const a=ns.parseFromString(i.outerHTML,"text/html").body.querySelector("svg");return a?(a.part.add("svg"),document.adoptNode(a)):Hr}catch{return Hr}}connectedCallback(){super.connectedCallback(),$0(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),E0(this)}getIconSource(){const e=Kc(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const{url:t,fromLibrary:n}=this.getIconSource(),r=n?Kc(this.library):void 0;if(!t){this.svg=null;return}let o=rs.get(t);if(o||(o=this.resolveIcon(t,r),rs.set(t,o)),!this.initialRender)return;const i=await o;if(i===ii&&rs.delete(t),t===this.getIconSource().url){if(T0(i)){this.svg=i;return}switch(i){case ii:case Hr:this.svg=null,this.emit("sl-error");break;default:this.svg=i.cloneNode(!0),(e=r==null?void 0:r.mutator)==null||e.call(r,this.svg),this.emit("sl-load")}}}render(){return this.svg}};Be.styles=[tt,b0];f([me()],Be.prototype,"svg",2);f([y({reflect:!0})],Be.prototype,"name",2);f([y()],Be.prototype,"src",2);f([y()],Be.prototype,"label",2);f([y({reflect:!0})],Be.prototype,"library",2);f([xe("label")],Be.prototype,"handleLabelChange",1);f([xe(["name","src","library"])],Be.prototype,"setIcon",1);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},cu=e=>(...t)=>({_$litDirective$:e,values:t});let du=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,r){this._$Ct=t,this._$AM=n,this._$Ci=r}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Le=cu(class extends du{constructor(e){var t;if(super(e),e.type!==Yt.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,o;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!((r=this.nt)!=null&&r.has(i))&&this.st.add(i);return this.render(t)}const n=e.element.classList;for(const i of this.st)i in t||(n.remove(i),this.st.delete(i));for(const i in t){const l=!!t[i];l===this.st.has(i)||(o=this.nt)!=null&&o.has(i)||(l?(n.add(i),this.st.add(i)):(n.remove(i),this.st.delete(i)))}return at}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mp=Symbol.for(""),O0=e=>{if((e==null?void 0:e.r)===Mp)return e==null?void 0:e._$litStatic$},Zi=(e,...t)=>({_$litStatic$:t.reduce((n,r,o)=>n+(i=>{if(i._$litStatic$!==void 0)return i._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${i}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(r)+e[o+1],e[0]),r:Mp}),Yc=new Map,M0=e=>(t,...n)=>{const r=n.length;let o,i;const l=[],a=[];let s,u=0,h=!1;for(;u<r;){for(s=t[u];u<r&&(i=n[u],(o=O0(i))!==void 0);)s+=o+t[++u],h=!0;u!==r&&a.push(i),l.push(s),u++}if(u===r&&l.push(t[r]),h){const d=l.join("$$lit$$");(t=Yc.get(d))===void 0&&(l.raw=l,Yc.set(d,t=l)),n=a}return e(t,...n)},Si=M0(Y);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=e=>e??ae;var nt=class extends ke{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){const e=!!this.href,t=e?Zi`a`:Zi`button`;return Si`
      <${t}
        part="base"
        class=${Le({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
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
    `}};nt.styles=[tt,y0];nt.dependencies={"sl-icon":Be};f([Z(".icon-button")],nt.prototype,"button",2);f([me()],nt.prototype,"hasFocus",2);f([y()],nt.prototype,"name",2);f([y()],nt.prototype,"library",2);f([y()],nt.prototype,"src",2);f([y()],nt.prototype,"href",2);f([y()],nt.prototype,"target",2);f([y()],nt.prototype,"download",2);f([y()],nt.prototype,"label",2);f([y({type:Boolean,reflect:!0})],nt.prototype,"disabled",2);var Dp=new Map,D0=new WeakMap;function F0(e){return e??{keyframes:[],options:{duration:0}}}function qc(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function _t(e,t){Dp.set(e,F0(t))}function vt(e,t,n){const r=D0.get(e);if(r!=null&&r[t])return qc(r[t],n.dir);const o=Dp.get(t);return o?qc(o,n.dir):{keyframes:[],options:{duration:0}}}function $r(e,t){return new Promise(n=>{function r(o){o.target===e&&(e.removeEventListener(t,r),n())}e.addEventListener(t,r)})}function Tt(e,t,n){return new Promise(r=>{if((n==null?void 0:n.duration)===1/0)throw new Error("Promise-based animations must be finite.");const o=e.animate(t,yl(Wn({},n),{duration:I0()?0:n.duration}));o.addEventListener("cancel",r,{once:!0}),o.addEventListener("finish",r,{once:!0})})}function Gc(e){return e=e.toString().toLowerCase(),e.indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?parseFloat(e)*1e3:parseFloat(e)}function I0(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function en(e){return Promise.all(e.getAnimations().map(t=>new Promise(n=>{t.cancel(),requestAnimationFrame(n)})))}const la=new Set,j0=new MutationObserver(Vp),ar=new Map;let Fp=document.documentElement.dir||"ltr",Ip=document.documentElement.lang||navigator.language,zn;j0.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function jp(...e){e.map(t=>{const n=t.$code.toLowerCase();ar.has(n)?ar.set(n,Object.assign(Object.assign({},ar.get(n)),t)):ar.set(n,t),zn||(zn=t)}),Vp()}function Vp(){Fp=document.documentElement.dir||"ltr",Ip=document.documentElement.lang||navigator.language,[...la.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}let Bp=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){la.add(this.host)}hostDisconnected(){la.delete(this.host)}dir(){return`${this.host.dir||Fp}`.toLowerCase()}lang(){return`${this.host.lang||Ip}`.toLowerCase()}getTranslationData(t){var n,r;const o=new Intl.Locale(t.replace(/_/g,"-")),i=o==null?void 0:o.language.toLowerCase(),l=(r=(n=o==null?void 0:o.region)===null||n===void 0?void 0:n.toLowerCase())!==null&&r!==void 0?r:"",a=ar.get(`${i}-${l}`),s=ar.get(i);return{locale:o,language:i,region:l,primary:a,secondary:s}}exists(t,n){var r;const{primary:o,secondary:i}=this.getTranslationData((r=n.lang)!==null&&r!==void 0?r:this.lang());return n=Object.assign({includeFallback:!1},n),!!(o&&o[t]||i&&i[t]||n.includeFallback&&zn&&zn[t])}term(t,...n){const{primary:r,secondary:o}=this.getTranslationData(this.lang());let i;if(r&&r[t])i=r[t];else if(o&&o[t])i=o[t];else if(zn&&zn[t])i=zn[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof i=="function"?i(...n):i}date(t,n){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),n).format(t)}number(t,n){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),n).format(t)}relativeTime(t,n,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(t,n)}};var Hp={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};jp(Hp);var V0=Hp,Kn=class extends Bp{};jp(V0);var wl=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=n=>{const r=n.target;(this.slotNames.includes("[default]")&&!r.name||r.name&&this.slotNames.includes(r.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}},xt=class extends ke{constructor(){super(...arguments),this.hasSlotController=new wl(this,"footer"),this.localize=new Kn(this),this.modal=new qm(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=e=>{e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),Nc(this))}disconnectedCallback(){var e;super.disconnectedCallback(),this.modal.deactivate(),Rc(this),(e=this.closeWatcher)==null||e.destroy()}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const n=vt(this,"dialog.denyClose",{dir:this.localize.dir()});Tt(this.panel,n.keyframes,n.options);return}this.hide()}addOpenListeners(){var e;"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var e;(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),Nc(this);const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([en(this.dialog),en(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=vt(this,"dialog.show",{dir:this.localize.dir()}),n=vt(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([Tt(this.panel,t.keyframes,t.options),Tt(this.overlay,n.keyframes,n.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([en(this.dialog),en(this.overlay)]);const e=vt(this,"dialog.hide",{dir:this.localize.dir()}),t=vt(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([Tt(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),Tt(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,Rc(this);const n=this.originalTrigger;typeof(n==null?void 0:n.focus)=="function"&&setTimeout(()=>n.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,$r(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,$r(this,"sl-after-hide")}render(){return Y`
      <div
        part="base"
        class=${Le({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
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
          ${this.noHeader?"":Y`
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
    `}};xt.styles=[tt,v0];xt.dependencies={"sl-icon-button":nt};f([Z(".dialog")],xt.prototype,"dialog",2);f([Z(".dialog__panel")],xt.prototype,"panel",2);f([Z(".dialog__overlay")],xt.prototype,"overlay",2);f([y({type:Boolean,reflect:!0})],xt.prototype,"open",2);f([y({reflect:!0})],xt.prototype,"label",2);f([y({attribute:"no-header",type:Boolean,reflect:!0})],xt.prototype,"noHeader",2);f([xe("open",{waitUntilFirstUpdate:!0})],xt.prototype,"handleOpenChange",1);_t("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});_t("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});_t("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});_t("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});_t("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B0=new Set(["children","localName","ref","style","className"]),Xc=new WeakMap,Zc=(e,t,n,r,o)=>{const i=o==null?void 0:o[t];i===void 0?(e[t]=n,n==null&&t in HTMLElement.prototype&&e.removeAttribute(t)):n!==r&&((l,a,s)=>{let u=Xc.get(l);u===void 0&&Xc.set(l,u=new Map);let h=u.get(a);s!==void 0?h===void 0?(u.set(a,h={handleEvent:s}),l.addEventListener(a,h)):h.handleEvent=s:h!==void 0&&(u.delete(a),l.removeEventListener(a,h))})(e,i,n)},xn=({react:e,tagName:t,elementClass:n,events:r,displayName:o})=>{const i=new Set(Object.keys(r??{})),l=e.forwardRef((a,s)=>{const u=e.useRef(new Map),h=e.useRef(null),d={},g={};for(const[v,b]of Object.entries(a))B0.has(v)?d[v==="className"?"class":v]=b:i.has(v)||v in n.prototype?g[v]=b:d[v]=b;return e.useLayoutEffect(()=>{if(h.current===null)return;const v=new Map;for(const b in g)Zc(h.current,b,a[b],u.current.get(b),r),u.current.delete(b),v.set(b,a[b]);for(const[b,w]of u.current)Zc(h.current,b,void 0,w,r);u.current=v}),e.useLayoutEffect(()=>{var v;(v=h.current)==null||v.removeAttribute("defer-hydration")},[]),d.suppressHydrationWarning=!0,e.createElement(t,{...d,ref:e.useCallback(v=>{h.current=v,typeof s=="function"?s(v):s!==null&&(s.current=v)},[s])})});return l.displayName=o??n.name,l};var H0="sl-dialog";xt.define("sl-dialog");var U0=xn({tagName:H0,elementClass:xt,react:yn,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInitialFocus:"sl-initial-focus",onSlRequestClose:"sl-request-close"},displayName:"SlDialog"}),W0=U0,K0=ze`
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
`,hu=(e="value")=>(t,n)=>{const r=t.constructor,o=r.prototype.attributeChangedCallback;r.prototype.attributeChangedCallback=function(i,l,a){var s;const u=r.getPropertyOptions(e),h=typeof u.attribute=="string"?u.attribute:e;if(i===h){const d=u.converter||Sr,v=(typeof d=="function"?d:(s=d==null?void 0:d.fromAttribute)!=null?s:Sr.fromAttribute)(a,u.type);this[e]!==v&&(this[n]=v)}o.call(this,i,l,a)}},Up=ze`
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
`,Ur=new WeakMap,Wr=new WeakMap,Kr=new WeakMap,os=new WeakSet,li=new WeakMap,_l=class{constructor(e,t){this.handleFormData=n=>{const r=this.options.disabled(this.host),o=this.options.name(this.host),i=this.options.value(this.host),l=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!r&&!l&&typeof o=="string"&&o.length>0&&typeof i<"u"&&(Array.isArray(i)?i.forEach(a=>{n.formData.append(o,a.toString())}):n.formData.append(o,i.toString()))},this.handleFormSubmit=n=>{var r;const o=this.options.disabled(this.host),i=this.options.reportValidity;this.form&&!this.form.noValidate&&((r=Ur.get(this.form))==null||r.forEach(l=>{this.setUserInteracted(l,!0)})),this.form&&!this.form.noValidate&&!o&&!i(this.host)&&(n.preventDefault(),n.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),li.set(this.host,[])},this.handleInteraction=n=>{const r=li.get(this.host);r.includes(n.type)||r.push(n.type),r.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const n=this.form.querySelectorAll("*");for(const r of n)if(typeof r.checkValidity=="function"&&!r.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const n=this.form.querySelectorAll("*");for(const r of n)if(typeof r.reportValidity=="function"&&!r.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=Wn({form:n=>{const r=n.form;if(r){const i=n.getRootNode().querySelector(`#${r}`);if(i)return i}return n.closest("form")},name:n=>n.name,value:n=>n.value,defaultValue:n=>n.defaultValue,disabled:n=>{var r;return(r=n.disabled)!=null?r:!1},reportValidity:n=>typeof n.reportValidity=="function"?n.reportValidity():!0,checkValidity:n=>typeof n.checkValidity=="function"?n.checkValidity():!0,setValue:(n,r)=>n.value=r,assumeInteractionOn:["sl-input"]},t)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),li.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),li.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,Ur.has(this.form)?Ur.get(this.form).add(this.host):Ur.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Wr.has(this.form)||(Wr.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),Kr.has(this.form)||(Kr.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const e=Ur.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Wr.has(this.form)&&(this.form.reportValidity=Wr.get(this.form),Wr.delete(this.form)),Kr.has(this.form)&&(this.form.checkValidity=Kr.get(this.form),Kr.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?os.add(e):os.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){const n=document.createElement("button");n.type=e,n.style.position="absolute",n.style.width="0",n.style.height="0",n.style.clipPath="inset(50%)",n.style.overflow="hidden",n.style.whiteSpace="nowrap",t&&(n.name=t.name,n.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(r=>{t.hasAttribute(r)&&n.setAttribute(r,t.getAttribute(r))})),this.form.append(n),n.click(),n.remove()}}getForm(){var e;return(e=this.form)!=null?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const t=this.host,n=!!os.has(t),r=!!t.required;t.toggleAttribute("data-required",r),t.toggleAttribute("data-optional",!r),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&n),t.toggleAttribute("data-user-valid",e&&n)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||e==null||e.preventDefault()}},pu=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(yl(Wn({},pu),{valid:!1,valueMissing:!0}));Object.freeze(yl(Wn({},pu),{valid:!1,customError:!0}));/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wp=cu(class extends du{constructor(e){if(super(e),e.type!==Yt.PROPERTY&&e.type!==Yt.ATTRIBUTE&&e.type!==Yt.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!L0(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===at||t===ae)return t;const n=e.element,r=e.name;if(e.type===Yt.PROPERTY){if(t===n[r])return at}else if(e.type===Yt.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(r))return at}else if(e.type===Yt.ATTRIBUTE&&n.getAttribute(r)===t+"")return at;return R0(e),t}});var H=class extends ke{constructor(){super(...arguments),this.formControlController=new _l(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new wl(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){super.disconnectedCallback(),this.input&&this.resizeObserver.unobserve(this.input)}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}setTextareaHeight(){this.resize==="auto"?(this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=void 0}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(e){if(e){typeof e.top=="number"&&(this.input.scrollTop=e.top),typeof e.left=="number"&&(this.input.scrollLeft=e.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(e,t,n="none"){this.input.setSelectionRange(e,t,n)}setRangeText(e,t,n,r="preserve"){const o=t??this.input.selectionStart,i=n??this.input.selectionEnd;this.input.setRangeText(e,o,i,r),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),n=this.label?!0:!!e,r=this.helpText?!0:!!t;return Y`
      <div
        part="form-control"
        class=${Le({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":n,"form-control--has-help-text":r})}
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
            class=${Le({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${N(this.name)}
              .value=${Wp(this.value)}
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
    `}};H.styles=[tt,Up,K0];f([Z(".textarea__control")],H.prototype,"input",2);f([me()],H.prototype,"hasFocus",2);f([y()],H.prototype,"title",2);f([y()],H.prototype,"name",2);f([y()],H.prototype,"value",2);f([y({reflect:!0})],H.prototype,"size",2);f([y({type:Boolean,reflect:!0})],H.prototype,"filled",2);f([y()],H.prototype,"label",2);f([y({attribute:"help-text"})],H.prototype,"helpText",2);f([y()],H.prototype,"placeholder",2);f([y({type:Number})],H.prototype,"rows",2);f([y()],H.prototype,"resize",2);f([y({type:Boolean,reflect:!0})],H.prototype,"disabled",2);f([y({type:Boolean,reflect:!0})],H.prototype,"readonly",2);f([y({reflect:!0})],H.prototype,"form",2);f([y({type:Boolean,reflect:!0})],H.prototype,"required",2);f([y({type:Number})],H.prototype,"minlength",2);f([y({type:Number})],H.prototype,"maxlength",2);f([y()],H.prototype,"autocapitalize",2);f([y()],H.prototype,"autocorrect",2);f([y()],H.prototype,"autocomplete",2);f([y({type:Boolean})],H.prototype,"autofocus",2);f([y()],H.prototype,"enterkeyhint",2);f([y({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],H.prototype,"spellcheck",2);f([y()],H.prototype,"inputmode",2);f([hu()],H.prototype,"defaultValue",2);f([xe("disabled",{waitUntilFirstUpdate:!0})],H.prototype,"handleDisabledChange",1);f([xe("rows",{waitUntilFirstUpdate:!0})],H.prototype,"handleRowsChange",1);f([xe("value",{waitUntilFirstUpdate:!0})],H.prototype,"handleValueChange",1);var Q0="sl-textarea";H.define("sl-textarea");var Y0=xn({tagName:Q0,elementClass:H,react:yn,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlTextarea"}),q0=Y0,Kp=Object.defineProperty,G0=Object.getOwnPropertyDescriptor,Jc=Object.getOwnPropertySymbols,X0=Object.prototype.hasOwnProperty,Z0=Object.prototype.propertyIsEnumerable,ed=(e,t,n)=>t in e?Kp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,J0=(e,t)=>{for(var n in t||(t={}))X0.call(t,n)&&ed(e,n,t[n]);if(Jc)for(var n of Jc(t))Z0.call(t,n)&&ed(e,n,t[n]);return e},He=(e,t,n,r)=>{for(var o=r>1?void 0:r?G0(t,n):t,i=e.length-1,l;i>=0;i--)(l=e[i])&&(o=(r?l(t,n,o):l(o))||o);return r&&o&&Kp(t,n,o),o},Do=class extends gr{constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){const n=new CustomEvent(e,J0({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(n),n}static define(e,t=this,n={}){const r=customElements.get(e);if(!r){customElements.define(e,class extends t{},n);return}let o=" (unknown version)",i=o;"version"in t&&t.version&&(o=" v"+t.version),"version"in r&&r.version&&(i=" v"+r.version),!(o&&i&&o===i)&&console.warn(`Attempted to register <${e}>${o}, but <${e}>${i} has already been registered.`)}};Do.version="2.8.0";Do.dependencies={};He([y()],Do.prototype,"dir",2);He([y()],Do.prototype,"lang",2);var ev=ze`
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
`,tv="sl-icon";Be.define("sl-icon");var nv=xn({tagName:tv,elementClass:Be,react:yn,events:{onSlLoad:"sl-load",onSlError:"sl-error"},displayName:"SlIcon"}),sa=nv;Xi("https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.14.0/cdn/");var Oe=class extends Do{constructor(){super(...arguments),this.localize=new Bp(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.hoist=!1,this.hasFocus=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let e=this.value;if(this.from){const t=this.getRootNode(),n=this.from.includes("."),r=this.from.includes("[")&&this.from.includes("]");let o=this.from,i="";n?[o,i]=this.from.trim().split("."):r&&([o,i]=this.from.trim().replace(/\]$/,"").split("["));const l="getElementById"in t?t.getElementById(o):null;l?r?e=l.getAttribute(i)||"":n?e=l[i]||"":e=l.textContent||"":(this.showStatus("error"),this.emit("sl-error"))}if(!e)this.showStatus("error"),this.emit("sl-error");else try{await navigator.clipboard.writeText(e),this.showStatus("success"),this.emit("sl-copy",{detail:{value:e}})}catch{this.showStatus("error"),this.emit("sl-error")}}async showStatus(e){const t=e==="success"?this.successIcon:this.errorIcon,n=vt(this,"copy.in",{dir:"ltr"}),r=vt(this,"copy.out",{dir:"ltr"});await this.copyIcon.animate(r.keyframes,r.options).finished,this.copyIcon.hidden=!0,this.status=e,t.hidden=!1,await t.animate(n.keyframes,n.options).finished,setTimeout(async()=>{await t.animate(r.keyframes,r.options).finished,t.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await this.copyIcon.animate(n.keyframes,n.options).finished,this.isCopying=!1},this.feedbackDuration)}render(){return Y`
        <button
        class=${Le({"copy-button":!0,"copy-button--success":this.status==="success","copy-button--error":this.status==="error","copy-button__button":!0,"icon-button--focused":this.hasFocus})}
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
      `}};Oe.styles=ev;He([Z(".copy-button")],Oe.prototype,"button",2);He([me()],Oe.prototype,"hasFocus",2);He([Z('slot[name="copy-icon"]')],Oe.prototype,"copyIcon",2);He([Z('slot[name="success-icon"]')],Oe.prototype,"successIcon",2);He([Z('slot[name="error-icon"]')],Oe.prototype,"errorIcon",2);He([me()],Oe.prototype,"isCopying",2);He([me()],Oe.prototype,"status",2);He([y()],Oe.prototype,"value",2);He([y()],Oe.prototype,"from",2);He([y({type:Boolean,reflect:!0})],Oe.prototype,"disabled",2);He([y({attribute:"feedback-duration",type:Number})],Oe.prototype,"feedbackDuration",2);He([y({type:Boolean})],Oe.prototype,"hoist",2);_t("copy.in",{keyframes:[{scale:".25",opacity:".25"},{scale:"1",opacity:"1"}],options:{duration:100}});_t("copy.out",{keyframes:[{scale:"1",opacity:"1"},{scale:".25",opacity:"0"}],options:{duration:100}});var rv="sl-copy-button-adjust";Oe.define("sl-copy-button-adjust");var ov=xn({tagName:rv,elementClass:Oe,react:yn,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus",onSlCopy:"sl-copy",onSlError:"sl-error"},displayName:"SlCopyButtonAdjust"}),Qp=ov;Xi("https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.14.0/cdn/");function iv({coloroutrgb:e}){const[t,n]=De.useState(!1),r=lv(e);return E.jsxs(E.Fragment,{children:[E.jsx("button",{className:"button-85",onClick:()=>n(!0),children:E.jsx("img",{src:"https://matplotlib.org/stable/_static/logo_dark.svg",width:"100px"})}),E.jsxs(W0,{label:"Python code",open:t,onSlAfterHide:()=>n(!1),style:{"--width":"100%",textAlign:"left"},children:[E.jsx(Qp,{slot:"header-actions",style:{flex:"0 0 auto",display:"flex",alignItems:"center",fontSize:"var(--sl-font-size-medium)"},value:r}),E.jsx(q0,{className:"code-area",value:r,rows:15,size:"small",readOnly:!0})]})]})}function lv(e){let t="";return t+=`def manual_cmap():
`,t+=`    import numpy as np
`,t+=`    from matplotlib.colors import LinearSegmentedColormap
`,t+=`    colors = [
`,e.map(n=>{t+="        ["+n[0]+","+n[1]+","+n[2]+`],
`}),t+=`    ]
`,t+=`    return LinearSegmentedColormap.from_list("manual_cmap",np.array(colors)/255)
`,t+="# cmap = manual_cmap()",t}const sv=["RGB","Hex"];function av({coloroutrgb:e}){const[t,n]=De.useState("RGB"),[r,o]=De.useState(",");function i(s){n(s.target.value)}let l="";t==="RGB"&&e.map(s=>{l+=s[0]+r+s[1]+r+s[2]+`
`}),t==="Hex"&&e.map(s=>{l+=uv(s)+`
`});const a="	";return E.jsxs("div",{className:"txtarea",children:[E.jsx("div",{children:E.jsx(iv,{coloroutrgb:e})}),E.jsxs("div",{children:[E.jsx("label",{children:"output type: "}),E.jsx("select",{title:"colortype",onChange:s=>i(s),children:sv.map((s,u)=>E.jsx("option",{children:s},u))}),E.jsx("br",{}),E.jsx("label",{children:"separator: "}),E.jsxs("select",{title:"separator",onChange:s=>o(s.target.value),children:[E.jsx("option",{value:",",children:","}),E.jsx("option",{value:a,children:"tab"}),E.jsx("option",{value:" ",children:"space"})]})]}),E.jsxs("div",{style:{position:"relative"},children:[E.jsx(Qp,{value:l,style:{position:"absolute",right:"0"}}),E.jsx("textarea",{value:l,rows:e.length+1,cols:25,readOnly:!0,style:{resize:"none"}})]})]})}function uv(e){let t=(+e[0]).toString(16),n=(+e[1]).toString(16),r=(+e[2]).toString(16);return t.length==1&&(t="0"+t),n.length==1&&(n="0"+n),r.length==1&&(r="0"+r),"#"+t+n+r}function cv(e){const t={position:"sticky",top:0,zIndex:100},n=De.useRef(null);return De.useEffect(()=>{const o=n.current.getContext("2d");dv(o,e.color_out_rgb)}),E.jsx("canvas",{ref:n,height:"100",width:"500",style:t})}function dv(e,t){e.clearRect(0,0,500,100),e.beginPath(),e.rect(50,30,400,40),e.stroke();for(let n=0;n<t.length;n++){const r="rgb("+t[n][0]+","+t[n][1]+","+t[n][2]+")",o=50+n*400/t.length;hv(e,r,o,30,400/t.length,40)}}function hv(e,t,n,r,o,i){e.fillStyle=t,e.fillRect(n,r,o,i)}var pv=ze`
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
`,Yp=class extends ke{render(){return Y` <slot></slot> `}};Yp.styles=[tt,pv];var fv=ze`
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
`,M=class extends ke{constructor(){super(...arguments),this.formControlController=new _l(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new wl(this,"help-text","label"),this.localize=new Kn(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var e;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((e=this.input)==null?void 0:e.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(e){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=e,this.value=this.__dateInput.value}get valueAsNumber(){var e;return this.__numberInput.value=this.value,((e=this.input)==null?void 0:e.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(e){this.__numberInput.valueAsNumber=e,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(e){e.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleKeyDown(e){const t=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key==="Enter"&&!t&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,n="none"){this.input.setSelectionRange(e,t,n)}setRangeText(e,t,n,r="preserve"){const o=t??this.input.selectionStart,i=n??this.input.selectionEnd;this.input.setRangeText(e,o,i,r),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),n=this.label?!0:!!e,r=this.helpText?!0:!!t,i=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return Y`
      <div
        part="form-control"
        class=${Le({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":n,"form-control--has-help-text":r})}
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
            class=${Le({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
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
              .value=${Wp(this.value)}
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

            ${i?Y`
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
            ${this.passwordToggle&&!this.disabled?Y`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?Y`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:Y`
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
    `}};M.styles=[tt,Up,fv];M.dependencies={"sl-icon":Be};f([Z(".input__control")],M.prototype,"input",2);f([me()],M.prototype,"hasFocus",2);f([y()],M.prototype,"title",2);f([y({reflect:!0})],M.prototype,"type",2);f([y()],M.prototype,"name",2);f([y()],M.prototype,"value",2);f([hu()],M.prototype,"defaultValue",2);f([y({reflect:!0})],M.prototype,"size",2);f([y({type:Boolean,reflect:!0})],M.prototype,"filled",2);f([y({type:Boolean,reflect:!0})],M.prototype,"pill",2);f([y()],M.prototype,"label",2);f([y({attribute:"help-text"})],M.prototype,"helpText",2);f([y({type:Boolean})],M.prototype,"clearable",2);f([y({type:Boolean,reflect:!0})],M.prototype,"disabled",2);f([y()],M.prototype,"placeholder",2);f([y({type:Boolean,reflect:!0})],M.prototype,"readonly",2);f([y({attribute:"password-toggle",type:Boolean})],M.prototype,"passwordToggle",2);f([y({attribute:"password-visible",type:Boolean})],M.prototype,"passwordVisible",2);f([y({attribute:"no-spin-buttons",type:Boolean})],M.prototype,"noSpinButtons",2);f([y({reflect:!0})],M.prototype,"form",2);f([y({type:Boolean,reflect:!0})],M.prototype,"required",2);f([y()],M.prototype,"pattern",2);f([y({type:Number})],M.prototype,"minlength",2);f([y({type:Number})],M.prototype,"maxlength",2);f([y()],M.prototype,"min",2);f([y()],M.prototype,"max",2);f([y()],M.prototype,"step",2);f([y()],M.prototype,"autocapitalize",2);f([y()],M.prototype,"autocorrect",2);f([y()],M.prototype,"autocomplete",2);f([y({type:Boolean})],M.prototype,"autofocus",2);f([y()],M.prototype,"enterkeyhint",2);f([y({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],M.prototype,"spellcheck",2);f([y()],M.prototype,"inputmode",2);f([xe("disabled",{waitUntilFirstUpdate:!0})],M.prototype,"handleDisabledChange",1);f([xe("step",{waitUntilFirstUpdate:!0})],M.prototype,"handleStepChange",1);f([xe("value",{waitUntilFirstUpdate:!0})],M.prototype,"handleValueChange",1);function is(e,t){function n(o){const i=e.getBoundingClientRect(),l=e.ownerDocument.defaultView,a=i.left+l.scrollX,s=i.top+l.scrollY,u=o.pageX-a,h=o.pageY-s;t!=null&&t.onMove&&t.onMove(u,h)}function r(){document.removeEventListener("pointermove",n),document.removeEventListener("pointerup",r),t!=null&&t.onStop&&t.onStop()}document.addEventListener("pointermove",n,{passive:!0}),document.addEventListener("pointerup",r),(t==null?void 0:t.initialEvent)instanceof PointerEvent&&n(t.initialEvent)}var gv=ze`
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
`,mv=ze`
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
`;const fn=Math.min,Ye=Math.max,Ji=Math.round,si=Math.floor,gn=e=>({x:e,y:e}),vv={left:"right",right:"left",bottom:"top",top:"bottom"},yv={start:"end",end:"start"};function aa(e,t,n){return Ye(e,fn(t,n))}function Tr(e,t){return typeof e=="function"?e(t):e}function mn(e){return e.split("-")[0]}function Lr(e){return e.split("-")[1]}function qp(e){return e==="x"?"y":"x"}function fu(e){return e==="y"?"height":"width"}function Fo(e){return["top","bottom"].includes(mn(e))?"y":"x"}function gu(e){return qp(Fo(e))}function bv(e,t,n){n===void 0&&(n=!1);const r=Lr(e),o=gu(e),i=fu(o);let l=o==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[i]>t.floating[i]&&(l=el(l)),[l,el(l)]}function wv(e){const t=el(e);return[ua(e),t,ua(t)]}function ua(e){return e.replace(/start|end/g,t=>yv[t])}function _v(e,t,n){const r=["left","right"],o=["right","left"],i=["top","bottom"],l=["bottom","top"];switch(e){case"top":case"bottom":return n?t?o:r:t?r:o;case"left":case"right":return t?i:l;default:return[]}}function xv(e,t,n,r){const o=Lr(e);let i=_v(mn(e),n==="start",r);return o&&(i=i.map(l=>l+"-"+o),t&&(i=i.concat(i.map(ua)))),i}function el(e){return e.replace(/left|right|bottom|top/g,t=>vv[t])}function kv(e){return{top:0,right:0,bottom:0,left:0,...e}}function Gp(e){return typeof e!="number"?kv(e):{top:e,right:e,bottom:e,left:e}}function tl(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function td(e,t,n){let{reference:r,floating:o}=e;const i=Fo(t),l=gu(t),a=fu(l),s=mn(t),u=i==="y",h=r.x+r.width/2-o.width/2,d=r.y+r.height/2-o.height/2,g=r[a]/2-o[a]/2;let v;switch(s){case"top":v={x:h,y:r.y-o.height};break;case"bottom":v={x:h,y:r.y+r.height};break;case"right":v={x:r.x+r.width,y:d};break;case"left":v={x:r.x-o.width,y:d};break;default:v={x:r.x,y:r.y}}switch(Lr(t)){case"start":v[l]-=g*(n&&u?-1:1);break;case"end":v[l]+=g*(n&&u?-1:1);break}return v}const Sv=async(e,t,n)=>{const{placement:r="bottom",strategy:o="absolute",middleware:i=[],platform:l}=n,a=i.filter(Boolean),s=await(l.isRTL==null?void 0:l.isRTL(t));let u=await l.getElementRects({reference:e,floating:t,strategy:o}),{x:h,y:d}=td(u,r,s),g=r,v={},b=0;for(let w=0;w<a.length;w++){const{name:L,fn:p}=a[w],{x:c,y:m,data:_,reset:k}=await p({x:h,y:d,initialPlacement:r,placement:g,strategy:o,middlewareData:v,rects:u,platform:l,elements:{reference:e,floating:t}});if(h=c??h,d=m??d,v={...v,[L]:{...v[L],..._}},k&&b<=50){b++,typeof k=="object"&&(k.placement&&(g=k.placement),k.rects&&(u=k.rects===!0?await l.getElementRects({reference:e,floating:t,strategy:o}):k.rects),{x:h,y:d}=td(u,g,s)),w=-1;continue}}return{x:h,y:d,placement:g,strategy:o,middlewareData:v}};async function mu(e,t){var n;t===void 0&&(t={});const{x:r,y:o,platform:i,rects:l,elements:a,strategy:s}=e,{boundary:u="clippingAncestors",rootBoundary:h="viewport",elementContext:d="floating",altBoundary:g=!1,padding:v=0}=Tr(t,e),b=Gp(v),L=a[g?d==="floating"?"reference":"floating":d],p=tl(await i.getClippingRect({element:(n=await(i.isElement==null?void 0:i.isElement(L)))==null||n?L:L.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(a.floating)),boundary:u,rootBoundary:h,strategy:s})),c=d==="floating"?{...l.floating,x:r,y:o}:l.reference,m=await(i.getOffsetParent==null?void 0:i.getOffsetParent(a.floating)),_=await(i.isElement==null?void 0:i.isElement(m))?await(i.getScale==null?void 0:i.getScale(m))||{x:1,y:1}:{x:1,y:1},k=tl(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({rect:c,offsetParent:m,strategy:s}):c);return{top:(p.top-k.top+b.top)/_.y,bottom:(k.bottom-p.bottom+b.bottom)/_.y,left:(p.left-k.left+b.left)/_.x,right:(k.right-p.right+b.right)/_.x}}const Cv=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:r,placement:o,rects:i,platform:l,elements:a,middlewareData:s}=t,{element:u,padding:h=0}=Tr(e,t)||{};if(u==null)return{};const d=Gp(h),g={x:n,y:r},v=gu(o),b=fu(v),w=await l.getDimensions(u),L=v==="y",p=L?"top":"left",c=L?"bottom":"right",m=L?"clientHeight":"clientWidth",_=i.reference[b]+i.reference[v]-g[v]-i.floating[b],k=g[v]-i.reference[v],S=await(l.getOffsetParent==null?void 0:l.getOffsetParent(u));let $=S?S[m]:0;(!$||!await(l.isElement==null?void 0:l.isElement(S)))&&($=a.floating[m]||i.floating[b]);const z=_/2-k/2,B=$/2-w[b]/2-1,R=fn(d[p],B),he=fn(d[c],B),ie=R,T=$-w[b]-he,C=$/2-w[b]/2+z,j=aa(ie,C,T),Q=!s.arrow&&Lr(o)!=null&&C!=j&&i.reference[b]/2-(C<ie?R:he)-w[b]/2<0,Ue=Q?C<ie?C-ie:C-T:0;return{[v]:g[v]+Ue,data:{[v]:j,centerOffset:C-j-Ue,...Q&&{alignmentOffset:Ue}},reset:Q}}}),$v=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:o,middlewareData:i,rects:l,initialPlacement:a,platform:s,elements:u}=t,{mainAxis:h=!0,crossAxis:d=!0,fallbackPlacements:g,fallbackStrategy:v="bestFit",fallbackAxisSideDirection:b="none",flipAlignment:w=!0,...L}=Tr(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};const p=mn(o),c=mn(a)===a,m=await(s.isRTL==null?void 0:s.isRTL(u.floating)),_=g||(c||!w?[el(a)]:wv(a));!g&&b!=="none"&&_.push(...xv(a,w,b,m));const k=[a,..._],S=await mu(t,L),$=[];let z=((r=i.flip)==null?void 0:r.overflows)||[];if(h&&$.push(S[p]),d){const ie=bv(o,l,m);$.push(S[ie[0]],S[ie[1]])}if(z=[...z,{placement:o,overflows:$}],!$.every(ie=>ie<=0)){var B,R;const ie=(((B=i.flip)==null?void 0:B.index)||0)+1,T=k[ie];if(T)return{data:{index:ie,overflows:z},reset:{placement:T}};let C=(R=z.filter(j=>j.overflows[0]<=0).sort((j,Q)=>j.overflows[1]-Q.overflows[1])[0])==null?void 0:R.placement;if(!C)switch(v){case"bestFit":{var he;const j=(he=z.map(Q=>[Q.placement,Q.overflows.filter(Ue=>Ue>0).reduce((Ue,A)=>Ue+A,0)]).sort((Q,Ue)=>Q[1]-Ue[1])[0])==null?void 0:he[0];j&&(C=j);break}case"initialPlacement":C=a;break}if(o!==C)return{reset:{placement:C}}}return{}}}};async function Ev(e,t){const{placement:n,platform:r,elements:o}=e,i=await(r.isRTL==null?void 0:r.isRTL(o.floating)),l=mn(n),a=Lr(n),s=Fo(n)==="y",u=["left","top"].includes(l)?-1:1,h=i&&s?-1:1,d=Tr(t,e);let{mainAxis:g,crossAxis:v,alignmentAxis:b}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return a&&typeof b=="number"&&(v=a==="end"?b*-1:b),s?{x:v*h,y:g*u}:{x:g*u,y:v*h}}const zv=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){const{x:n,y:r}=t,o=await Ev(t,e);return{x:n+o.x,y:r+o.y,data:o}}}},Av=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:o}=t,{mainAxis:i=!0,crossAxis:l=!1,limiter:a={fn:L=>{let{x:p,y:c}=L;return{x:p,y:c}}},...s}=Tr(e,t),u={x:n,y:r},h=await mu(t,s),d=Fo(mn(o)),g=qp(d);let v=u[g],b=u[d];if(i){const L=g==="y"?"top":"left",p=g==="y"?"bottom":"right",c=v+h[L],m=v-h[p];v=aa(c,v,m)}if(l){const L=d==="y"?"top":"left",p=d==="y"?"bottom":"right",c=b+h[L],m=b-h[p];b=aa(c,b,m)}const w=a.fn({...t,[g]:v,[d]:b});return{...w,data:{x:w.x-n,y:w.y-r}}}}},nd=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:n,rects:r,platform:o,elements:i}=t,{apply:l=()=>{},...a}=Tr(e,t),s=await mu(t,a),u=mn(n),h=Lr(n),d=Fo(n)==="y",{width:g,height:v}=r.floating;let b,w;u==="top"||u==="bottom"?(b=u,w=h===(await(o.isRTL==null?void 0:o.isRTL(i.floating))?"start":"end")?"left":"right"):(w=u,b=h==="end"?"top":"bottom");const L=v-s[b],p=g-s[w],c=!t.middlewareData.shift;let m=L,_=p;if(d){const S=g-s.left-s.right;_=h||c?fn(p,S):S}else{const S=v-s.top-s.bottom;m=h||c?fn(L,S):S}if(c&&!h){const S=Ye(s.left,0),$=Ye(s.right,0),z=Ye(s.top,0),B=Ye(s.bottom,0);d?_=g-2*(S!==0||$!==0?S+$:Ye(s.left,s.right)):m=v-2*(z!==0||B!==0?z+B:Ye(s.top,s.bottom))}await l({...t,availableWidth:_,availableHeight:m});const k=await o.getDimensions(i.floating);return g!==k.width||v!==k.height?{reset:{rects:!0}}:{}}}};function vn(e){return Xp(e)?(e.nodeName||"").toLowerCase():"#document"}function Xe(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Ht(e){var t;return(t=(Xp(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Xp(e){return e instanceof Node||e instanceof Xe(e).Node}function Vt(e){return e instanceof Element||e instanceof Xe(e).Element}function zt(e){return e instanceof HTMLElement||e instanceof Xe(e).HTMLElement}function rd(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Xe(e).ShadowRoot}function Io(e){const{overflow:t,overflowX:n,overflowY:r,display:o}=ht(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(o)}function Pv(e){return["table","td","th"].includes(vn(e))}function vu(e){const t=yu(),n=ht(e);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(r=>(n.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(n.contain||"").includes(r))}function Tv(e){let t=Er(e);for(;zt(t)&&!xl(t);){if(vu(t))return t;t=Er(t)}return null}function yu(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function xl(e){return["html","body","#document"].includes(vn(e))}function ht(e){return Xe(e).getComputedStyle(e)}function kl(e){return Vt(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function Er(e){if(vn(e)==="html")return e;const t=e.assignedSlot||e.parentNode||rd(e)&&e.host||Ht(e);return rd(t)?t.host:t}function Zp(e){const t=Er(e);return xl(t)?e.ownerDocument?e.ownerDocument.body:e.body:zt(t)&&Io(t)?t:Zp(t)}function Po(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const o=Zp(e),i=o===((r=e.ownerDocument)==null?void 0:r.body),l=Xe(o);return i?t.concat(l,l.visualViewport||[],Io(o)?o:[],l.frameElement&&n?Po(l.frameElement):[]):t.concat(o,Po(o))}function Jp(e){const t=ht(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const o=zt(e),i=o?e.offsetWidth:n,l=o?e.offsetHeight:r,a=Ji(n)!==i||Ji(r)!==l;return a&&(n=i,r=l),{width:n,height:r,$:a}}function bu(e){return Vt(e)?e:e.contextElement}function mr(e){const t=bu(e);if(!zt(t))return gn(1);const n=t.getBoundingClientRect(),{width:r,height:o,$:i}=Jp(t);let l=(i?Ji(n.width):n.width)/r,a=(i?Ji(n.height):n.height)/o;return(!l||!Number.isFinite(l))&&(l=1),(!a||!Number.isFinite(a))&&(a=1),{x:l,y:a}}const Lv=gn(0);function ef(e){const t=Xe(e);return!yu()||!t.visualViewport?Lv:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Nv(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==Xe(e)?!1:t}function Bn(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const o=e.getBoundingClientRect(),i=bu(e);let l=gn(1);t&&(r?Vt(r)&&(l=mr(r)):l=mr(e));const a=Nv(i,n,r)?ef(i):gn(0);let s=(o.left+a.x)/l.x,u=(o.top+a.y)/l.y,h=o.width/l.x,d=o.height/l.y;if(i){const g=Xe(i),v=r&&Vt(r)?Xe(r):r;let b=g.frameElement;for(;b&&r&&v!==g;){const w=mr(b),L=b.getBoundingClientRect(),p=ht(b),c=L.left+(b.clientLeft+parseFloat(p.paddingLeft))*w.x,m=L.top+(b.clientTop+parseFloat(p.paddingTop))*w.y;s*=w.x,u*=w.y,h*=w.x,d*=w.y,s+=c,u+=m,b=Xe(b).frameElement}}return tl({width:h,height:d,x:s,y:u})}function Rv(e){let{rect:t,offsetParent:n,strategy:r}=e;const o=zt(n),i=Ht(n);if(n===i)return t;let l={scrollLeft:0,scrollTop:0},a=gn(1);const s=gn(0);if((o||!o&&r!=="fixed")&&((vn(n)!=="body"||Io(i))&&(l=kl(n)),zt(n))){const u=Bn(n);a=mr(n),s.x=u.x+n.clientLeft,s.y=u.y+n.clientTop}return{width:t.width*a.x,height:t.height*a.y,x:t.x*a.x-l.scrollLeft*a.x+s.x,y:t.y*a.y-l.scrollTop*a.y+s.y}}function Ov(e){return Array.from(e.getClientRects())}function tf(e){return Bn(Ht(e)).left+kl(e).scrollLeft}function Mv(e){const t=Ht(e),n=kl(e),r=e.ownerDocument.body,o=Ye(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),i=Ye(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let l=-n.scrollLeft+tf(e);const a=-n.scrollTop;return ht(r).direction==="rtl"&&(l+=Ye(t.clientWidth,r.clientWidth)-o),{width:o,height:i,x:l,y:a}}function Dv(e,t){const n=Xe(e),r=Ht(e),o=n.visualViewport;let i=r.clientWidth,l=r.clientHeight,a=0,s=0;if(o){i=o.width,l=o.height;const u=yu();(!u||u&&t==="fixed")&&(a=o.offsetLeft,s=o.offsetTop)}return{width:i,height:l,x:a,y:s}}function Fv(e,t){const n=Bn(e,!0,t==="fixed"),r=n.top+e.clientTop,o=n.left+e.clientLeft,i=zt(e)?mr(e):gn(1),l=e.clientWidth*i.x,a=e.clientHeight*i.y,s=o*i.x,u=r*i.y;return{width:l,height:a,x:s,y:u}}function od(e,t,n){let r;if(t==="viewport")r=Dv(e,n);else if(t==="document")r=Mv(Ht(e));else if(Vt(t))r=Fv(t,n);else{const o=ef(e);r={...t,x:t.x-o.x,y:t.y-o.y}}return tl(r)}function nf(e,t){const n=Er(e);return n===t||!Vt(n)||xl(n)?!1:ht(n).position==="fixed"||nf(n,t)}function Iv(e,t){const n=t.get(e);if(n)return n;let r=Po(e,[],!1).filter(a=>Vt(a)&&vn(a)!=="body"),o=null;const i=ht(e).position==="fixed";let l=i?Er(e):e;for(;Vt(l)&&!xl(l);){const a=ht(l),s=vu(l);!s&&a.position==="fixed"&&(o=null),(i?!s&&!o:!s&&a.position==="static"&&!!o&&["absolute","fixed"].includes(o.position)||Io(l)&&!s&&nf(e,l))?r=r.filter(h=>h!==l):o=a,l=Er(l)}return t.set(e,r),r}function jv(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e;const l=[...n==="clippingAncestors"?Iv(t,this._c):[].concat(n),r],a=l[0],s=l.reduce((u,h)=>{const d=od(t,h,o);return u.top=Ye(d.top,u.top),u.right=fn(d.right,u.right),u.bottom=fn(d.bottom,u.bottom),u.left=Ye(d.left,u.left),u},od(t,a,o));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}}function Vv(e){return Jp(e)}function Bv(e,t,n){const r=zt(t),o=Ht(t),i=n==="fixed",l=Bn(e,!0,i,t);let a={scrollLeft:0,scrollTop:0};const s=gn(0);if(r||!r&&!i)if((vn(t)!=="body"||Io(o))&&(a=kl(t)),r){const u=Bn(t,!0,i,t);s.x=u.x+t.clientLeft,s.y=u.y+t.clientTop}else o&&(s.x=tf(o));return{x:l.left+a.scrollLeft-s.x,y:l.top+a.scrollTop-s.y,width:l.width,height:l.height}}function id(e,t){return!zt(e)||ht(e).position==="fixed"?null:t?t(e):e.offsetParent}function rf(e,t){const n=Xe(e);if(!zt(e))return n;let r=id(e,t);for(;r&&Pv(r)&&ht(r).position==="static";)r=id(r,t);return r&&(vn(r)==="html"||vn(r)==="body"&&ht(r).position==="static"&&!vu(r))?n:r||Tv(e)||n}const Hv=async function(e){let{reference:t,floating:n,strategy:r}=e;const o=this.getOffsetParent||rf,i=this.getDimensions;return{reference:Bv(t,await o(n),r),floating:{x:0,y:0,...await i(n)}}};function Uv(e){return ht(e).direction==="rtl"}const Ci={convertOffsetParentRelativeRectToViewportRelativeRect:Rv,getDocumentElement:Ht,getClippingRect:jv,getOffsetParent:rf,getElementRects:Hv,getClientRects:Ov,getDimensions:Vv,getScale:mr,isElement:Vt,isRTL:Uv};function Wv(e,t){let n=null,r;const o=Ht(e);function i(){clearTimeout(r),n&&n.disconnect(),n=null}function l(a,s){a===void 0&&(a=!1),s===void 0&&(s=1),i();const{left:u,top:h,width:d,height:g}=e.getBoundingClientRect();if(a||t(),!d||!g)return;const v=si(h),b=si(o.clientWidth-(u+d)),w=si(o.clientHeight-(h+g)),L=si(u),c={rootMargin:-v+"px "+-b+"px "+-w+"px "+-L+"px",threshold:Ye(0,fn(1,s))||1};let m=!0;function _(k){const S=k[0].intersectionRatio;if(S!==s){if(!m)return l();S?l(!1,S):r=setTimeout(()=>{l(!1,1e-7)},100)}m=!1}try{n=new IntersectionObserver(_,{...c,root:o.ownerDocument})}catch{n=new IntersectionObserver(_,c)}n.observe(e)}return l(!0),i}function Kv(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:o=!0,ancestorResize:i=!0,elementResize:l=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:s=!1}=r,u=bu(e),h=o||i?[...u?Po(u):[],...Po(t)]:[];h.forEach(p=>{o&&p.addEventListener("scroll",n,{passive:!0}),i&&p.addEventListener("resize",n)});const d=u&&a?Wv(u,n):null;let g=-1,v=null;l&&(v=new ResizeObserver(p=>{let[c]=p;c&&c.target===u&&v&&(v.unobserve(t),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{v&&v.observe(t)})),n()}),u&&!s&&v.observe(u),v.observe(t));let b,w=s?Bn(e):null;s&&L();function L(){const p=Bn(e);w&&(p.x!==w.x||p.y!==w.y||p.width!==w.width||p.height!==w.height)&&n(),w=p,b=requestAnimationFrame(L)}return n(),()=>{h.forEach(p=>{o&&p.removeEventListener("scroll",n),i&&p.removeEventListener("resize",n)}),d&&d(),v&&v.disconnect(),v=null,s&&cancelAnimationFrame(b)}}const Qv=(e,t,n)=>{const r=new Map,o={platform:Ci,...n},i={...o.platform,_c:r};return Sv(e,t,{...o,platform:i})};function Yv(e){return qv(e)}function ls(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function qv(e){for(let t=e;t;t=ls(t))if(t instanceof Element&&getComputedStyle(t).display==="none")return null;for(let t=ls(e);t;t=ls(t)){if(!(t instanceof Element))continue;const n=getComputedStyle(t);if(n.display!=="contents"&&(n.position!=="static"||n.filter!=="none"||t.tagName==="BODY"))return t}return null}function Gv(e){return e!==null&&typeof e=="object"&&"getBoundingClientRect"in e&&("contextElement"in e?e instanceof Element:!0)}var K=class extends ke{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),n=this.placement.includes("top")||this.placement.includes("bottom");let r=0,o=0,i=0,l=0,a=0,s=0,u=0,h=0;n?e.top<t.top?(r=e.left,o=e.bottom,i=e.right,l=e.bottom,a=t.left,s=t.top,u=t.right,h=t.top):(r=t.left,o=t.bottom,i=t.right,l=t.bottom,a=e.left,s=e.top,u=e.right,h=e.top):e.left<t.left?(r=e.right,o=e.top,i=t.left,l=t.top,a=e.right,s=e.bottom,u=t.left,h=t.bottom):(r=t.right,o=t.top,i=e.left,l=e.top,a=t.right,s=t.bottom,u=e.left,h=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${r}px`),this.style.setProperty("--hover-bridge-top-left-y",`${o}px`),this.style.setProperty("--hover-bridge-top-right-x",`${i}px`),this.style.setProperty("--hover-bridge-top-right-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${s}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${u}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${h}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||Gv(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){this.anchorEl&&(this.cleanup=Kv(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl)return;const e=[zv({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(nd({apply:({rects:n})=>{const r=this.sync==="width"||this.sync==="both",o=this.sync==="height"||this.sync==="both";this.popup.style.width=r?`${n.reference.width}px`:"",this.popup.style.height=o?`${n.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push($v({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(Av({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(nd({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:n,availableHeight:r})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${r}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${n}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(Cv({element:this.arrowEl,padding:this.arrowPadding}));const t=this.strategy==="absolute"?n=>Ci.getOffsetParent(n,Yv):Ci.getOffsetParent;Qv(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:yl(Wn({},Ci),{getOffsetParent:t})}).then(({x:n,y:r,middlewareData:o,placement:i})=>{const l=getComputedStyle(this).direction==="rtl",a={top:"bottom",right:"left",bottom:"top",left:"right"}[i.split("-")[0]];if(this.setAttribute("data-current-placement",i),Object.assign(this.popup.style,{left:`${n}px`,top:`${r}px`}),this.arrow){const s=o.arrow.x,u=o.arrow.y;let h="",d="",g="",v="";if(this.arrowPlacement==="start"){const b=typeof s=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";h=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",d=l?b:"",v=l?"":b}else if(this.arrowPlacement==="end"){const b=typeof s=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";d=l?"":b,v=l?b:"",g=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(v=typeof s=="number"?"calc(50% - var(--arrow-size-diagonal))":"",h=typeof u=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(v=typeof s=="number"?`${s}px`:"",h=typeof u=="number"?`${u}px`:"");Object.assign(this.arrowEl.style,{top:h,right:d,bottom:g,left:v,[a]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return Y`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${Le({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${Le({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?Y`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};K.styles=[tt,mv];f([Z(".popup")],K.prototype,"popup",2);f([Z(".popup__arrow")],K.prototype,"arrowEl",2);f([y()],K.prototype,"anchor",2);f([y({type:Boolean,reflect:!0})],K.prototype,"active",2);f([y({reflect:!0})],K.prototype,"placement",2);f([y({reflect:!0})],K.prototype,"strategy",2);f([y({type:Number})],K.prototype,"distance",2);f([y({type:Number})],K.prototype,"skidding",2);f([y({type:Boolean})],K.prototype,"arrow",2);f([y({attribute:"arrow-placement"})],K.prototype,"arrowPlacement",2);f([y({attribute:"arrow-padding",type:Number})],K.prototype,"arrowPadding",2);f([y({type:Boolean})],K.prototype,"flip",2);f([y({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:e=>e.join(" ")}})],K.prototype,"flipFallbackPlacements",2);f([y({attribute:"flip-fallback-strategy"})],K.prototype,"flipFallbackStrategy",2);f([y({type:Object})],K.prototype,"flipBoundary",2);f([y({attribute:"flip-padding",type:Number})],K.prototype,"flipPadding",2);f([y({type:Boolean})],K.prototype,"shift",2);f([y({type:Object})],K.prototype,"shiftBoundary",2);f([y({attribute:"shift-padding",type:Number})],K.prototype,"shiftPadding",2);f([y({attribute:"auto-size"})],K.prototype,"autoSize",2);f([y()],K.prototype,"sync",2);f([y({type:Object})],K.prototype,"autoSizeBoundary",2);f([y({attribute:"auto-size-padding",type:Number})],K.prototype,"autoSizePadding",2);f([y({attribute:"hover-bridge",type:Boolean})],K.prototype,"hoverBridge",2);var Ae=class extends ke{constructor(){super(...arguments),this.localize=new Kn(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=e=>{this.open&&e.key==="Escape"&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=e=>{var t;if(e.key==="Escape"&&this.open&&!this.closeWatcher){e.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(e.key==="Tab"){if(this.open&&((t=document.activeElement)==null?void 0:t.tagName.toLowerCase())==="sl-menu-item"){e.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var n,r,o;const i=((n=this.containingElement)==null?void 0:n.getRootNode())instanceof ShadowRoot?(o=(r=document.activeElement)==null?void 0:r.shadowRoot)==null?void 0:o.activeElement:document.activeElement;(!this.containingElement||(i==null?void 0:i.closest(this.containingElement.tagName.toLowerCase()))!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=e=>{const t=e.target;!this.stayOpenOnSelect&&t.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const e=this.trigger.assignedElements({flatten:!0})[0];typeof(e==null?void 0:e.focus)=="function"&&e.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(e=>e.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(e){if([" ","Enter"].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}const t=this.getMenu();if(t){const n=t.getAllItems(),r=n[0],o=n[n.length-1];["ArrowDown","ArrowUp","Home","End"].includes(e.key)&&(e.preventDefault(),this.open||(this.show(),await this.updateComplete),n.length>0&&this.updateComplete.then(()=>{(e.key==="ArrowDown"||e.key==="Home")&&(t.setCurrentItem(r),r.focus()),(e.key==="ArrowUp"||e.key==="End")&&(t.setCurrentItem(o),o.focus())}))}}handleTriggerKeyUp(e){e.key===" "&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const t=this.trigger.assignedElements({flatten:!0}).find(r=>Im(r).start);let n;if(t){switch(t.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":n=t.button;break;default:n=t}n.setAttribute("aria-haspopup","true"),n.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,$r(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,$r(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var e;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var e;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),(e=this.closeWatcher)==null||e.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await en(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=vt(this,"dropdown.show",{dir:this.localize.dir()});await Tt(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await en(this);const{keyframes:e,options:t}=vt(this,"dropdown.hide",{dir:this.localize.dir()});await Tt(this.popup.popup,e,t),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return Y`
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
        class=${Le({dropdown:!0,"dropdown--open":this.open})}
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
    `}};Ae.styles=[tt,gv];Ae.dependencies={"sl-popup":K};f([Z(".dropdown")],Ae.prototype,"popup",2);f([Z(".dropdown__trigger")],Ae.prototype,"trigger",2);f([Z(".dropdown__panel")],Ae.prototype,"panel",2);f([y({type:Boolean,reflect:!0})],Ae.prototype,"open",2);f([y({reflect:!0})],Ae.prototype,"placement",2);f([y({type:Boolean,reflect:!0})],Ae.prototype,"disabled",2);f([y({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],Ae.prototype,"stayOpenOnSelect",2);f([y({attribute:!1})],Ae.prototype,"containingElement",2);f([y({type:Number})],Ae.prototype,"distance",2);f([y({type:Number})],Ae.prototype,"skidding",2);f([y({type:Boolean})],Ae.prototype,"hoist",2);f([y({reflect:!0})],Ae.prototype,"sync",2);f([xe("open",{waitUntilFirstUpdate:!0})],Ae.prototype,"handleOpenChange",1);_t("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});_t("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});var Xv=ze`
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
`;function rt(e,t,n){const r=o=>Object.is(o,-0)?0:o;return e<t?r(t):e>n?r(n):r(e)}var Zv=ze`
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
`,of=class extends ke{constructor(){super(...arguments),this.localize=new Kn(this)}render(){return Y`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};of.styles=[tt,Zv];var Jv=ze`
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
  :host([data-sl-button-group__button][checked]) {
    z-index: 2;
  }
`,U=class extends ke{constructor(){super(...arguments),this.formControlController=new _l(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new wl(this,"[default]","prefix","suffix"),this.localize=new Kn(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:pu}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink(),t=e?Zi`a`:Zi`button`;return Si`
      <${t}
        part="base"
        class=${Le({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
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
        ${this.caret?Si` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?Si`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${t}>
    `}};U.styles=[tt,Jv];U.dependencies={"sl-icon":Be,"sl-spinner":of};f([Z(".button")],U.prototype,"button",2);f([me()],U.prototype,"hasFocus",2);f([me()],U.prototype,"invalid",2);f([y()],U.prototype,"title",2);f([y({reflect:!0})],U.prototype,"variant",2);f([y({reflect:!0})],U.prototype,"size",2);f([y({type:Boolean,reflect:!0})],U.prototype,"caret",2);f([y({type:Boolean,reflect:!0})],U.prototype,"disabled",2);f([y({type:Boolean,reflect:!0})],U.prototype,"loading",2);f([y({type:Boolean,reflect:!0})],U.prototype,"outline",2);f([y({type:Boolean,reflect:!0})],U.prototype,"pill",2);f([y({type:Boolean,reflect:!0})],U.prototype,"circle",2);f([y()],U.prototype,"type",2);f([y()],U.prototype,"name",2);f([y()],U.prototype,"value",2);f([y()],U.prototype,"href",2);f([y()],U.prototype,"target",2);f([y()],U.prototype,"rel",2);f([y()],U.prototype,"download",2);f([y()],U.prototype,"form",2);f([y({attribute:"formaction"})],U.prototype,"formAction",2);f([y({attribute:"formenctype"})],U.prototype,"formEnctype",2);f([y({attribute:"formmethod"})],U.prototype,"formMethod",2);f([y({attribute:"formnovalidate",type:Boolean})],U.prototype,"formNoValidate",2);f([y({attribute:"formtarget"})],U.prototype,"formTarget",2);f([xe("disabled",{waitUntilFirstUpdate:!0})],U.prototype,"handleDisabledChange",1);var ey=ze`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,Qn=class extends ke{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(e){const t=Qr(e.target);t==null||t.toggleAttribute("data-sl-button-group__button--focus",!0)}handleBlur(e){const t=Qr(e.target);t==null||t.toggleAttribute("data-sl-button-group__button--focus",!1)}handleMouseOver(e){const t=Qr(e.target);t==null||t.toggleAttribute("data-sl-button-group__button--hover",!0)}handleMouseOut(e){const t=Qr(e.target);t==null||t.toggleAttribute("data-sl-button-group__button--hover",!1)}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})];e.forEach(t=>{const n=e.indexOf(t),r=Qr(t);r&&(r.toggleAttribute("data-sl-button-group__button",!0),r.toggleAttribute("data-sl-button-group__button--first",n===0),r.toggleAttribute("data-sl-button-group__button--inner",n>0&&n<e.length-1),r.toggleAttribute("data-sl-button-group__button--last",n===e.length-1),r.toggleAttribute("data-sl-button-group__button--radio",r.tagName.toLowerCase()==="sl-radio-button"))})}render(){return Y`
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
    `}};Qn.styles=[tt,ey];f([Z("slot")],Qn.prototype,"defaultSlot",2);f([me()],Qn.prototype,"disableRole",2);f([y()],Qn.prototype,"label",2);function Qr(e){var t;const n="sl-button, sl-radio-button";return(t=e.closest(n))!=null?t:e.querySelector(n)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lf="important",ty=" !"+lf,Wt=cu(class extends du{constructor(e){var t;if(super(e),e.type!==Yt.ATTRIBUTE||e.name!=="style"||((t=e.strings)==null?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{const r=e[n];return r==null?t:t+`${n=n.includes("-")?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(e,[t]){const{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const r of this.ft)t[r]==null&&(this.ft.delete(r),r.includes("-")?n.removeProperty(r):n[r]=null);for(const r in t){const o=t[r];if(o!=null){this.ft.add(r);const i=typeof o=="string"&&o.endsWith(ty);r.includes("-")||i?n.setProperty(r,i?o.slice(0,-11):o,i?lf:""):n[r]=o}}return at}});function we(e,t){ny(e)&&(e="100%");const n=ry(e);return e=t===360?e:Math.min(t,Math.max(0,parseFloat(e))),n&&(e=parseInt(String(e*t),10)/100),Math.abs(e-t)<1e-6?1:(t===360?e=(e<0?e%t+t:e%t)/parseFloat(String(t)):e=e%t/parseFloat(String(t)),e)}function ai(e){return Math.min(1,Math.max(0,e))}function ny(e){return typeof e=="string"&&e.indexOf(".")!==-1&&parseFloat(e)===1}function ry(e){return typeof e=="string"&&e.indexOf("%")!==-1}function sf(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function ui(e){return Number(e)<=1?`${Number(e)*100}%`:e}function Nn(e){return e.length===1?"0"+e:String(e)}function oy(e,t,n){return{r:we(e,255)*255,g:we(t,255)*255,b:we(n,255)*255}}function ld(e,t,n){e=we(e,255),t=we(t,255),n=we(n,255);const r=Math.max(e,t,n),o=Math.min(e,t,n);let i=0,l=0;const a=(r+o)/2;if(r===o)l=0,i=0;else{const s=r-o;switch(l=a>.5?s/(2-r-o):s/(r+o),r){case e:i=(t-n)/s+(t<n?6:0);break;case t:i=(n-e)/s+2;break;case n:i=(e-t)/s+4;break}i/=6}return{h:i,s:l,l:a}}function ss(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*(6*n):n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function iy(e,t,n){let r,o,i;if(e=we(e,360),t=we(t,100),n=we(n,100),t===0)o=n,i=n,r=n;else{const l=n<.5?n*(1+t):n+t-n*t,a=2*n-l;r=ss(a,l,e+1/3),o=ss(a,l,e),i=ss(a,l,e-1/3)}return{r:r*255,g:o*255,b:i*255}}function sd(e,t,n){e=we(e,255),t=we(t,255),n=we(n,255);const r=Math.max(e,t,n),o=Math.min(e,t,n);let i=0;const l=r,a=r-o,s=r===0?0:a/r;if(r===o)i=0;else{switch(r){case e:i=(t-n)/a+(t<n?6:0);break;case t:i=(n-e)/a+2;break;case n:i=(e-t)/a+4;break}i/=6}return{h:i,s,v:l}}function ly(e,t,n){e=we(e,360)*6,t=we(t,100),n=we(n,100);const r=Math.floor(e),o=e-r,i=n*(1-t),l=n*(1-o*t),a=n*(1-(1-o)*t),s=r%6,u=[n,l,i,i,a,n][s],h=[a,n,n,l,i,i][s],d=[i,i,a,n,n,l][s];return{r:u*255,g:h*255,b:d*255}}function ad(e,t,n,r){const o=[Nn(Math.round(e).toString(16)),Nn(Math.round(t).toString(16)),Nn(Math.round(n).toString(16))];return r&&o[0].startsWith(o[0].charAt(1))&&o[1].startsWith(o[1].charAt(1))&&o[2].startsWith(o[2].charAt(1))?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function sy(e,t,n,r,o){const i=[Nn(Math.round(e).toString(16)),Nn(Math.round(t).toString(16)),Nn(Math.round(n).toString(16)),Nn(uy(r))];return o&&i[0].startsWith(i[0].charAt(1))&&i[1].startsWith(i[1].charAt(1))&&i[2].startsWith(i[2].charAt(1))&&i[3].startsWith(i[3].charAt(1))?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0):i.join("")}function ay(e,t,n,r){const o=e/100,i=t/100,l=n/100,a=r/100,s=255*(1-o)*(1-a),u=255*(1-i)*(1-a),h=255*(1-l)*(1-a);return{r:s,g:u,b:h}}function ud(e,t,n){let r=1-e/255,o=1-t/255,i=1-n/255,l=Math.min(r,o,i);return l===1?(r=0,o=0,i=0):(r=(r-l)/(1-l)*100,o=(o-l)/(1-l)*100,i=(i-l)/(1-l)*100),l*=100,{c:Math.round(r),m:Math.round(o),y:Math.round(i),k:Math.round(l)}}function uy(e){return Math.round(parseFloat(e)*255).toString(16)}function cd(e){return Ke(e)/255}function Ke(e){return parseInt(e,16)}function cy(e){return{r:e>>16,g:(e&65280)>>8,b:e&255}}const ca={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function dy(e){let t={r:0,g:0,b:0},n=1,r=null,o=null,i=null,l=!1,a=!1;return typeof e=="string"&&(e=fy(e)),typeof e=="object"&&(We(e.r)&&We(e.g)&&We(e.b)?(t=oy(e.r,e.g,e.b),l=!0,a=String(e.r).substr(-1)==="%"?"prgb":"rgb"):We(e.h)&&We(e.s)&&We(e.v)?(r=ui(e.s),o=ui(e.v),t=ly(e.h,r,o),l=!0,a="hsv"):We(e.h)&&We(e.s)&&We(e.l)?(r=ui(e.s),i=ui(e.l),t=iy(e.h,r,i),l=!0,a="hsl"):We(e.c)&&We(e.m)&&We(e.y)&&We(e.k)&&(t=ay(e.c,e.m,e.y,e.k),l=!0,a="cmyk"),Object.prototype.hasOwnProperty.call(e,"a")&&(n=e.a)),n=sf(n),{ok:l,format:e.format||a,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:n}}const hy="[-\\+]?\\d+%?",py="[-\\+]?\\d*\\.\\d+%?",tn="(?:"+py+")|(?:"+hy+")",as="[\\s|\\(]+("+tn+")[,|\\s]+("+tn+")[,|\\s]+("+tn+")\\s*\\)?",ci="[\\s|\\(]+("+tn+")[,|\\s]+("+tn+")[,|\\s]+("+tn+")[,|\\s]+("+tn+")\\s*\\)?",ot={CSS_UNIT:new RegExp(tn),rgb:new RegExp("rgb"+as),rgba:new RegExp("rgba"+ci),hsl:new RegExp("hsl"+as),hsla:new RegExp("hsla"+ci),hsv:new RegExp("hsv"+as),hsva:new RegExp("hsva"+ci),cmyk:new RegExp("cmyk"+ci),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function fy(e){if(e=e.trim().toLowerCase(),e.length===0)return!1;let t=!1;if(ca[e])e=ca[e],t=!0;else if(e==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let n=ot.rgb.exec(e);return n?{r:n[1],g:n[2],b:n[3]}:(n=ot.rgba.exec(e),n?{r:n[1],g:n[2],b:n[3],a:n[4]}:(n=ot.hsl.exec(e),n?{h:n[1],s:n[2],l:n[3]}:(n=ot.hsla.exec(e),n?{h:n[1],s:n[2],l:n[3],a:n[4]}:(n=ot.hsv.exec(e),n?{h:n[1],s:n[2],v:n[3]}:(n=ot.hsva.exec(e),n?{h:n[1],s:n[2],v:n[3],a:n[4]}:(n=ot.cmyk.exec(e),n?{c:n[1],m:n[2],y:n[3],k:n[4]}:(n=ot.hex8.exec(e),n?{r:Ke(n[1]),g:Ke(n[2]),b:Ke(n[3]),a:cd(n[4]),format:t?"name":"hex8"}:(n=ot.hex6.exec(e),n?{r:Ke(n[1]),g:Ke(n[2]),b:Ke(n[3]),format:t?"name":"hex"}:(n=ot.hex4.exec(e),n?{r:Ke(n[1]+n[1]),g:Ke(n[2]+n[2]),b:Ke(n[3]+n[3]),a:cd(n[4]+n[4]),format:t?"name":"hex8"}:(n=ot.hex3.exec(e),n?{r:Ke(n[1]+n[1]),g:Ke(n[2]+n[2]),b:Ke(n[3]+n[3]),format:t?"name":"hex"}:!1))))))))))}function We(e){return typeof e=="number"?!Number.isNaN(e):ot.CSS_UNIT.test(e)}class re{constructor(t="",n={}){if(t instanceof re)return t;typeof t=="number"&&(t=cy(t)),this.originalInput=t;const r=dy(t);this.originalInput=t,this.r=r.r,this.g=r.g,this.b=r.b,this.a=r.a,this.roundA=Math.round(100*this.a)/100,this.format=n.format??r.format,this.gradientType=n.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=r.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){const t=this.toRgb();return(t.r*299+t.g*587+t.b*114)/1e3}getLuminance(){const t=this.toRgb();let n,r,o;const i=t.r/255,l=t.g/255,a=t.b/255;return i<=.03928?n=i/12.92:n=Math.pow((i+.055)/1.055,2.4),l<=.03928?r=l/12.92:r=Math.pow((l+.055)/1.055,2.4),a<=.03928?o=a/12.92:o=Math.pow((a+.055)/1.055,2.4),.2126*n+.7152*r+.0722*o}getAlpha(){return this.a}setAlpha(t){return this.a=sf(t),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){const{s:t}=this.toHsl();return t===0}toHsv(){const t=sd(this.r,this.g,this.b);return{h:t.h*360,s:t.s,v:t.v,a:this.a}}toHsvString(){const t=sd(this.r,this.g,this.b),n=Math.round(t.h*360),r=Math.round(t.s*100),o=Math.round(t.v*100);return this.a===1?`hsv(${n}, ${r}%, ${o}%)`:`hsva(${n}, ${r}%, ${o}%, ${this.roundA})`}toHsl(){const t=ld(this.r,this.g,this.b);return{h:t.h*360,s:t.s,l:t.l,a:this.a}}toHslString(){const t=ld(this.r,this.g,this.b),n=Math.round(t.h*360),r=Math.round(t.s*100),o=Math.round(t.l*100);return this.a===1?`hsl(${n}, ${r}%, ${o}%)`:`hsla(${n}, ${r}%, ${o}%, ${this.roundA})`}toHex(t=!1){return ad(this.r,this.g,this.b,t)}toHexString(t=!1){return"#"+this.toHex(t)}toHex8(t=!1){return sy(this.r,this.g,this.b,this.a,t)}toHex8String(t=!1){return"#"+this.toHex8(t)}toHexShortString(t=!1){return this.a===1?this.toHexString(t):this.toHex8String(t)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){const t=Math.round(this.r),n=Math.round(this.g),r=Math.round(this.b);return this.a===1?`rgb(${t}, ${n}, ${r})`:`rgba(${t}, ${n}, ${r}, ${this.roundA})`}toPercentageRgb(){const t=n=>`${Math.round(we(n,255)*100)}%`;return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}}toPercentageRgbString(){const t=n=>Math.round(we(n,255)*100);return this.a===1?`rgb(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%)`:`rgba(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%, ${this.roundA})`}toCmyk(){return{...ud(this.r,this.g,this.b)}}toCmykString(){const{c:t,m:n,y:r,k:o}=ud(this.r,this.g,this.b);return`cmyk(${t}, ${n}, ${r}, ${o})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;const t="#"+ad(this.r,this.g,this.b,!1);for(const[n,r]of Object.entries(ca))if(t===r)return n;return!1}toString(t){const n=!!t;t=t??this.format;let r=!1;const o=this.a<1&&this.a>=0;return!n&&o&&(t.startsWith("hex")||t==="name")?t==="name"&&this.a===0?this.toName():this.toRgbString():(t==="rgb"&&(r=this.toRgbString()),t==="prgb"&&(r=this.toPercentageRgbString()),(t==="hex"||t==="hex6")&&(r=this.toHexString()),t==="hex3"&&(r=this.toHexString(!0)),t==="hex4"&&(r=this.toHex8String(!0)),t==="hex8"&&(r=this.toHex8String()),t==="name"&&(r=this.toName()),t==="hsl"&&(r=this.toHslString()),t==="hsv"&&(r=this.toHsvString()),t==="cmyk"&&(r=this.toCmykString()),r||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new re(this.toString())}lighten(t=10){const n=this.toHsl();return n.l+=t/100,n.l=ai(n.l),new re(n)}brighten(t=10){const n=this.toRgb();return n.r=Math.max(0,Math.min(255,n.r-Math.round(255*-(t/100)))),n.g=Math.max(0,Math.min(255,n.g-Math.round(255*-(t/100)))),n.b=Math.max(0,Math.min(255,n.b-Math.round(255*-(t/100)))),new re(n)}darken(t=10){const n=this.toHsl();return n.l-=t/100,n.l=ai(n.l),new re(n)}tint(t=10){return this.mix("white",t)}shade(t=10){return this.mix("black",t)}desaturate(t=10){const n=this.toHsl();return n.s-=t/100,n.s=ai(n.s),new re(n)}saturate(t=10){const n=this.toHsl();return n.s+=t/100,n.s=ai(n.s),new re(n)}greyscale(){return this.desaturate(100)}spin(t){const n=this.toHsl(),r=(n.h+t)%360;return n.h=r<0?360+r:r,new re(n)}mix(t,n=50){const r=this.toRgb(),o=new re(t).toRgb(),i=n/100,l={r:(o.r-r.r)*i+r.r,g:(o.g-r.g)*i+r.g,b:(o.b-r.b)*i+r.b,a:(o.a-r.a)*i+r.a};return new re(l)}analogous(t=6,n=30){const r=this.toHsl(),o=360/n,i=[this];for(r.h=(r.h-(o*t>>1)+720)%360;--t;)r.h=(r.h+o)%360,i.push(new re(r));return i}complement(){const t=this.toHsl();return t.h=(t.h+180)%360,new re(t)}monochromatic(t=6){const n=this.toHsv(),{h:r}=n,{s:o}=n;let{v:i}=n;const l=[],a=1/t;for(;t--;)l.push(new re({h:r,s:o,v:i})),i=(i+a)%1;return l}splitcomplement(){const t=this.toHsl(),{h:n}=t;return[this,new re({h:(n+72)%360,s:t.s,l:t.l}),new re({h:(n+216)%360,s:t.s,l:t.l})]}onBackground(t){const n=this.toRgb(),r=new re(t).toRgb(),o=n.a+r.a*(1-n.a);return new re({r:(n.r*n.a+r.r*r.a*(1-n.a))/o,g:(n.g*n.a+r.g*r.a*(1-n.a))/o,b:(n.b*n.a+r.b*r.a*(1-n.a))/o,a:o})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(t){const n=this.toHsl(),{h:r}=n,o=[this],i=360/t;for(let l=1;l<t;l++)o.push(new re({h:(r+l*i)%360,s:n.s,l:n.l}));return o}equals(t){const n=new re(t);return this.format==="cmyk"||n.format==="cmyk"?this.toCmykString()===n.toCmykString():this.toRgbString()===n.toRgbString()}}var dd="EyeDropper"in window,I=class extends ke{constructor(){super(),this.formControlController=new _l(this),this.isSafeValue=!1,this.localize=new Kn(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.handleFocusOut=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.input.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")})}handleFormatToggle(){const e=["hex","rgb","hsl","hsv"],t=(e.indexOf(this.format)+1)%e.length;this.format=e[t],this.setColor(this.value),this.emit("sl-change"),this.emit("sl-input")}handleAlphaDrag(e){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),n=t.querySelector(".color-picker__slider-handle"),{width:r}=t.getBoundingClientRect();let o=this.value,i=this.value;n.focus(),e.preventDefault(),is(t,{onMove:l=>{this.alpha=rt(l/r*100,0,100),this.syncValues(),this.value!==i&&(i=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==o&&(o=this.value,this.emit("sl-change"))},initialEvent:e})}handleHueDrag(e){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),n=t.querySelector(".color-picker__slider-handle"),{width:r}=t.getBoundingClientRect();let o=this.value,i=this.value;n.focus(),e.preventDefault(),is(t,{onMove:l=>{this.hue=rt(l/r*360,0,360),this.syncValues(),this.value!==i&&(i=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==o&&(o=this.value,this.emit("sl-change"))},initialEvent:e})}handleGridDrag(e){const t=this.shadowRoot.querySelector(".color-picker__grid"),n=t.querySelector(".color-picker__grid-handle"),{width:r,height:o}=t.getBoundingClientRect();let i=this.value,l=this.value;n.focus(),e.preventDefault(),this.isDraggingGridHandle=!0,is(t,{onMove:(a,s)=>{this.saturation=rt(a/r*100,0,100),this.brightness=rt(100-s/o*100,0,100),this.syncValues(),this.value!==l&&(l=this.value,this.emit("sl-input"))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==i&&(i=this.value,this.emit("sl-change"))},initialEvent:e})}handleAlphaKeyDown(e){const t=e.shiftKey?10:1,n=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.alpha=rt(this.alpha-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.alpha=rt(this.alpha+t,0,100),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.alpha=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.alpha=100,this.syncValues()),this.value!==n&&(this.emit("sl-change"),this.emit("sl-input"))}handleHueKeyDown(e){const t=e.shiftKey?10:1,n=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.hue=rt(this.hue-t,0,360),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.hue=rt(this.hue+t,0,360),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.hue=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.hue=360,this.syncValues()),this.value!==n&&(this.emit("sl-change"),this.emit("sl-input"))}handleGridKeyDown(e){const t=e.shiftKey?10:1,n=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.saturation=rt(this.saturation-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.saturation=rt(this.saturation+t,0,100),this.syncValues()),e.key==="ArrowUp"&&(e.preventDefault(),this.brightness=rt(this.brightness+t,0,100),this.syncValues()),e.key==="ArrowDown"&&(e.preventDefault(),this.brightness=rt(this.brightness-t,0,100),this.syncValues()),this.value!==n&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputChange(e){const t=e.target,n=this.value;e.stopPropagation(),this.input.value?(this.setColor(t.value),t.value=this.value):this.value="",this.value!==n&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputInput(e){this.formControlController.updateValidity(),e.stopPropagation()}handleInputKeyDown(e){if(e.key==="Enter"){const t=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")),setTimeout(()=>this.input.select())):this.hue=0}}handleInputInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleTouchMove(e){e.preventDefault()}parseColor(e){const t=new re(e);if(!t.isValid)return null;const n=t.toHsl(),r={h:n.h,s:n.s*100,l:n.l*100,a:n.a},o=t.toRgb(),i=t.toHexString(),l=t.toHex8String(),a=t.toHsv(),s={h:a.h,s:a.s*100,v:a.v*100,a:a.a};return{hsl:{h:r.h,s:r.s,l:r.l,string:this.setLetterCase(`hsl(${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%)`)},hsla:{h:r.h,s:r.s,l:r.l,a:r.a,string:this.setLetterCase(`hsla(${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%, ${r.a.toFixed(2).toString()})`)},hsv:{h:s.h,s:s.s,v:s.v,string:this.setLetterCase(`hsv(${Math.round(s.h)}, ${Math.round(s.s)}%, ${Math.round(s.v)}%)`)},hsva:{h:s.h,s:s.s,v:s.v,a:s.a,string:this.setLetterCase(`hsva(${Math.round(s.h)}, ${Math.round(s.s)}%, ${Math.round(s.v)}%, ${s.a.toFixed(2).toString()})`)},rgb:{r:o.r,g:o.g,b:o.b,string:this.setLetterCase(`rgb(${Math.round(o.r)}, ${Math.round(o.g)}, ${Math.round(o.b)})`)},rgba:{r:o.r,g:o.g,b:o.b,a:o.a,string:this.setLetterCase(`rgba(${Math.round(o.r)}, ${Math.round(o.g)}, ${Math.round(o.b)}, ${o.a.toFixed(2).toString()})`)},hex:this.setLetterCase(i),hexa:this.setLetterCase(l)}}setColor(e){const t=this.parseColor(e);return t===null?!1:(this.hue=t.hsva.h,this.saturation=t.hsva.s,this.brightness=t.hsva.v,this.alpha=this.opacity?t.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(e){return typeof e!="string"?"":this.uppercase?e.toUpperCase():e.toLowerCase()}async syncValues(){const e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);e!==null&&(this.format==="hsl"?this.inputValue=this.opacity?e.hsla.string:e.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?e.rgba.string:e.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?e.hsva.string:e.hsv.string:this.inputValue=this.opacity?e.hexa:e.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){if(!dd)return;new EyeDropper().open().then(t=>{const n=this.value;this.setColor(t.sRGBHex),this.value!==n&&(this.emit("sl-change"),this.emit("sl-input"))}).catch(()=>{})}selectSwatch(e){const t=this.value;this.disabled||(this.setColor(e),this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")))}getHexString(e,t,n,r=100){const o=new re(`hsva(${e}, ${t}%, ${n}%, ${r/100})`);return o.isValid?o.toHex8String():""}stopNestedEventPropagation(e){e.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(e,t){if(this.isEmpty=!t,t||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){const n=this.parseColor(t);n!==null?(this.inputValue=this.value,this.hue=n.hsva.h,this.saturation=n.hsva.s,this.brightness=n.hsva.v,this.alpha=n.hsva.a*100,this.syncValues()):this.inputValue=e??""}}focus(e){this.inline?this.base.focus(e):this.trigger.focus(e)}blur(){var e;const t=this.inline?this.base:this.trigger;this.hasFocus&&(t.focus({preventScroll:!0}),t.blur()),(e=this.dropdown)!=null&&e.open&&this.dropdown.hide()}getFormattedValue(e="hex"){const t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(t===null)return"";switch(e){case"hex":return t.hex;case"hexa":return t.hexa;case"rgb":return t.rgb.string;case"rgba":return t.rgba.string;case"hsl":return t.hsl.string;case"hsla":return t.hsla.string;case"hsv":return t.hsv.string;case"hsva":return t.hsva.string;default:return""}}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.inline&&!this.validity.valid?(this.dropdown.show(),this.addEventListener("sl-after-show",()=>this.input.reportValidity(),{once:!0}),this.disabled||this.formControlController.emitInvalidEvent(),!1):this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.saturation,t=100-this.brightness,n=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(o=>o.trim()!==""),r=Y`
      <div
        part="base"
        class=${Le({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled,"color-picker--focused":this.hasFocus})}
        aria-disabled=${this.disabled?"true":"false"}
        aria-labelledby="label"
        tabindex=${this.inline?"0":"-1"}
      >
        ${this.inline?Y`
              <sl-visually-hidden id="label">
                <slot name="label">${this.label}</slot>
              </sl-visually-hidden>
            `:null}

        <div
          part="grid"
          class="color-picker__grid"
          style=${Wt({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${Le({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${Wt({top:`${t}%`,left:`${e}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
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
                style=${Wt({left:`${this.hue===0?0:100/(360/this.hue)}%`})}
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

            ${this.opacity?Y`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${Wt({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="color-picker__slider-handle"
                      style=${Wt({left:`${this.alpha}%`})}
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
            style=${Wt({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
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
            ${this.noFormatToggle?"":Y`
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
            ${dd?Y`
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

        ${n.length>0?Y`
              <div part="swatches" class="color-picker__swatches">
                ${n.map(o=>{const i=this.parseColor(o);return i?Y`
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
                        style=${Wt({backgroundColor:i.hexa})}
                      ></div>
                    </div>
                  `:(console.error(`Unable to parse swatch color: "${o}"`,this),"")})}
              </div>
            `:""}
      </div>
    `;return this.inline?r:Y`
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
          class=${Le({"color-dropdown__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":this.size==="small","color-dropdown__trigger--medium":this.size==="medium","color-dropdown__trigger--large":this.size==="large","color-dropdown__trigger--empty":this.isEmpty,"color-dropdown__trigger--focused":this.hasFocus,"color-picker__transparent-bg":!0})}
          style=${Wt({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${r}
      </sl-dropdown>
    `}};I.styles=[tt,Xv];I.dependencies={"sl-button-group":Qn,"sl-button":U,"sl-dropdown":Ae,"sl-icon":Be,"sl-input":M,"sl-visually-hidden":Yp};f([Z('[part~="base"]')],I.prototype,"base",2);f([Z('[part~="input"]')],I.prototype,"input",2);f([Z(".color-dropdown")],I.prototype,"dropdown",2);f([Z('[part~="preview"]')],I.prototype,"previewButton",2);f([Z('[part~="trigger"]')],I.prototype,"trigger",2);f([me()],I.prototype,"hasFocus",2);f([me()],I.prototype,"isDraggingGridHandle",2);f([me()],I.prototype,"isEmpty",2);f([me()],I.prototype,"inputValue",2);f([me()],I.prototype,"hue",2);f([me()],I.prototype,"saturation",2);f([me()],I.prototype,"brightness",2);f([me()],I.prototype,"alpha",2);f([y()],I.prototype,"value",2);f([hu()],I.prototype,"defaultValue",2);f([y()],I.prototype,"label",2);f([y()],I.prototype,"format",2);f([y({type:Boolean,reflect:!0})],I.prototype,"inline",2);f([y({reflect:!0})],I.prototype,"size",2);f([y({attribute:"no-format-toggle",type:Boolean})],I.prototype,"noFormatToggle",2);f([y()],I.prototype,"name",2);f([y({type:Boolean,reflect:!0})],I.prototype,"disabled",2);f([y({type:Boolean})],I.prototype,"hoist",2);f([y({type:Boolean})],I.prototype,"opacity",2);f([y({type:Boolean})],I.prototype,"uppercase",2);f([y()],I.prototype,"swatches",2);f([y({reflect:!0})],I.prototype,"form",2);f([y({type:Boolean,reflect:!0})],I.prototype,"required",2);f([P0({passive:!1})],I.prototype,"handleTouchMove",1);f([xe("format",{waitUntilFirstUpdate:!0})],I.prototype,"handleFormatChange",1);f([xe("opacity",{waitUntilFirstUpdate:!0})],I.prototype,"handleOpacityChange",1);f([xe("value")],I.prototype,"handleValueChange",1);var gy="sl-color-picker";I.define("sl-color-picker");var my=xn({tagName:gy,elementClass:I,react:yn,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlColorPicker"}),vy=my,yy="sl-button";U.define("sl-button");var by=xn({tagName:yy,elementClass:U,react:yn,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus",onSlInvalid:"sl-invalid"},displayName:"SlButton"}),Lt=by,wy="sl-button-group";Qn.define("sl-button-group");var _y=xn({tagName:wy,elementClass:Qn,react:yn,events:{},displayName:"SlButtonGroup"}),da=_y,xy=ze`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,ve=class extends ke{constructor(){super(),this.localize=new Kn(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{e.key==="Escape"&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const e=Gc(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const e=Gc(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var e;(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){var e,t;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await en(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:n,options:r}=vt(this,"tooltip.show",{dir:this.localize.dir()});await Tt(this.popup.popup,n,r),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await en(this.body);const{keyframes:n,options:r}=vt(this,"tooltip.hide",{dir:this.localize.dir()});await Tt(this.popup.popup,n,r),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,$r(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,$r(this,"sl-after-hide")}render(){return Y`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${Le({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};ve.styles=[tt,xy];ve.dependencies={"sl-popup":K};f([Z("slot:not([name])")],ve.prototype,"defaultSlot",2);f([Z(".tooltip__body")],ve.prototype,"body",2);f([Z("sl-popup")],ve.prototype,"popup",2);f([y()],ve.prototype,"content",2);f([y()],ve.prototype,"placement",2);f([y({type:Boolean,reflect:!0})],ve.prototype,"disabled",2);f([y({type:Number})],ve.prototype,"distance",2);f([y({type:Boolean,reflect:!0})],ve.prototype,"open",2);f([y({type:Number})],ve.prototype,"skidding",2);f([y()],ve.prototype,"trigger",2);f([y({type:Boolean})],ve.prototype,"hoist",2);f([xe("open",{waitUntilFirstUpdate:!0})],ve.prototype,"handleOpenChange",1);f([xe(["content","distance","hoist","placement","skidding"])],ve.prototype,"handleOptionsChange",1);f([xe("disabled")],ve.prototype,"handleDisabledChange",1);_t("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});_t("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});var ky="sl-tooltip";ve.define("sl-tooltip");var Sy=xn({tagName:ky,elementClass:ve,react:yn,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"},displayName:"SlTooltip"}),Nt=Sy;function Cy(){const[e,t]=De.useState([[[255,0,0],"","",[255,255,255],[0,0,255]]]),[n,r]=De.useState(0),[o,i]=De.useState([[255,0,0],"","",[255,255,255],[0,0,255]]),[l,a]=De.useState(5),[s,u]=De.useState(5);function h(T){var C=T.target.files[0],j=new FileReader;j.onload=()=>{let Q=hd(j.result);i(Q),a(Q.length),u(Q.length),S(Q)},j.readAsText(C)}function d(T){let C=T.target.value;const j=new XMLHttpRequest;j.open("GET","./colormap/"+C+".rgb"),j.responseType="text",j.onload=()=>{let Q=hd(j.response);i(Q),a(Q.length),u(Q.length),S(Q)},j.send()}function g(){let T=[[255,255,255],...o];i(T),S(T)}function v(T){let C=[...o];C.splice(T+1,0,""),C[C.length-1]==""&&(C[C.length-1]=[255,255,255]),i(C),l<C.length&&a(C.length),S(C)}function b(T){if(o.length==2)return;let C=[...o];C.splice(T,1),C[0]==""&&(C[0]=[255,255,255]),C[C.length-1]==""&&(C[C.length-1]=[255,255,255]),i(C),S(C)}function w(T,C){let j=[...o];j.splice(C,1,T.target.getFormattedValue("rgb").substr(4).split(")")[0].split(",").map(Q=>parseInt(Q))),j[0]==""&&(j[0]=[255,255,255]),j[j.length-1]==""&&(j[j.length-1]=[255,255,255]),i(j)}function L(T){if(T===0||T===o.length-1)return;let C=[...o];C.splice(T,1,""),i(C),S(C)}function p(T){if(T==0)return;let C=[...o];C[T-1]=C.splice(T,1,C[T-1])[0],C[0]==""&&(C[0]=[255,255,255]),C[C.length-1]==""&&(C[C.length-1]=[255,255,255]),i(C),S(C)}function c(T){if(T===o.length-1)return;let C=[...o];C[T+1]=C.splice(T,1,C[T+1])[0],C[0]==""&&(C[0]=[255,255,255]),C[C.length-1]==""&&(C[C.length-1]=[255,255,255]),i(C),S(C)}function m(T){const C=T.target.value<o.length?s:T.target.value;u(T.target.value),a(C)}function _(T){u(o.length),a(o.length)}function k(T){const C=T.target.value<o.length?o.length:T.target.value;u(C),a(C)}function S(T){const C=[...e.slice(0,n+1),T];t(C),r(C.length-1)}function $(){let T=[...o];S(T)}function z(){if(n==0)return;let T=e[n-1];i(T),r(n-1)}function B(){if(n==e.length-1)return;let T=e[n+1];i(T),r(n+1)}const R=o.map((T,C)=>E.jsx($y,{rgb:T,rank:C+1,setBlankColor:()=>L(C),swapUp:()=>p(C),swapDown:()=>c(C),changeColor:j=>w(j,C),addColorDown:()=>v(C),delColor:()=>b(C),handleSlBlur:$,colorid:C,ncolor:o.length},C)),ie=Ey(o,l);return E.jsxs(E.Fragment,{children:[E.jsx(cv,{color_out_rgb:ie}),E.jsxs(da,{children:[E.jsx(Nt,{content:"Undo",children:E.jsx(Lt,{size:"small",onClick:z,disabled:n==0,children:"↶"})}),E.jsx(Nt,{content:"Redo",children:E.jsx(Lt,{size:"small",onClick:B,disabled:n==e.length-1,children:"↷"})})]}),E.jsx("br",{}),E.jsx("input",{type:"file",accept:".rgb",onChange:T=>{h(T)}}),E.jsx(Om,{changeMap:T=>d(T)}),E.jsx("hr",{}),E.jsxs("div",{style:{display:"flex",justifyContent:"space-around"},children:[E.jsxs("div",{className:"selector",children:[E.jsx("label",{children:"n_colors: "}),E.jsx("input",{type:"number",step:"1",value:s,onChange:T=>m(T),onBlur:T=>k(T),style:{width:"3em"}}),E.jsxs(da,{children:[E.jsx(Nt,{content:"reset",children:E.jsx(Lt,{size:"small",onClick:_,title:"reset",children:E.jsx(sa,{name:"arrow-repeat"})})}),E.jsx(Nt,{content:"add color down",children:E.jsx(Lt,{size:"small",onClick:g,title:"add color down",children:E.jsx(sa,{name:"plus-square-fill"})})})]}),R]}),E.jsx(av,{coloroutrgb:ie})]})]})}function $y(e){return E.jsxs("div",{style:{flex:"0 0 auto",display:"flex",alignItems:"center",padding:"1px"},children:[E.jsxs("span",{style:{display:"inline-block",width:"2em"},children:[e.rank,"."]}),E.jsx(vy,{size:"small",value:e.rgb==""?"":"rgb("+e.rgb[0]+","+e.rgb[1]+","+e.rgb[2]+")",onSlInput:(t,n)=>e.changeColor(t,n),onSlBlur:e.handleSlBlur}),E.jsxs(da,{children:[E.jsx(Nt,{content:"set color to blank",children:E.jsx(Lt,{size:"small",onClick:t=>e.setBlankColor(t),disabled:e.colorid==0||e.colorid==e.ncolor-1,children:"#"})}),E.jsx(Nt,{content:"swap up",children:E.jsx(Lt,{size:"small",onClick:t=>e.swapUp(t),disabled:e.colorid==0,children:"▲"})}),E.jsx(Nt,{content:"swap down",children:E.jsx(Lt,{size:"small",onClick:t=>e.swapDown(t),disabled:e.colorid==e.ncolor-1,children:"▼"})}),E.jsx(Nt,{content:"add color down",children:E.jsx(Lt,{size:"small",onClick:t=>e.addColorDown(t),children:E.jsx(sa,{name:"plus-square-fill"})})}),E.jsx(Nt,{content:"delete color",children:E.jsx(Lt,{size:"small",onClick:t=>e.delColor(t),children:"X"})})]}),E.jsx("br",{})]})}function Ey(e,t){const n=e.length;t=Math.max(t,n);const r=Ay([n-1,t-1]),o=zy(t-1,n-1)+1,i=(n-1)/r,l=(t-1)/r,a=[],s=[];var u=0;for(let d=0;d<e.length-1;d++)if(e[d+1]){var h=1/l/(d-u+1);for(let g=0;g<l*(d-u+1);g++){const v=e[u][0]+(e[d+1][0]-e[u][0])*h*g,b=e[u][1]+(e[d+1][1]-e[u][1])*h*g,w=e[u][2]+(e[d+1][2]-e[u][2])*h*g;a.push([parseInt(v),parseInt(b),parseInt(w)])}u=d+1}a.push(e[e.length-1]);for(let d=0;d<o;d=d+i)s.push(a[d]);return s}var wu=(e,t)=>t?wu(t,e%t):e,zy=(e,t)=>e/wu(e,t)*t,Ay=e=>wu(Math.max(...e),Math.min(...e));function hd(e){const t=e.split(`
`),n=1e3,r=[];let o=0,i=-1;function l(s){return!isNaN(parseFloat(s))&&isFinite(s)}for(let s=0;s<t.length&&o<n;s++){let u=t[s].trim();u.length===0&&(u="#");const h=u.split(/\s+/);if(h.length>=3){let d=-1,g=-1,v=-1;l(h[0])&&(d=parseFloat(h[0])),l(h[1])&&(g=parseFloat(h[1])),l(h[2])&&(v=parseFloat(h[2]));let b=-1;if(h.length>3&&l(h[3])&&(b=parseFloat(h[3])),d>=0&&g>=0&&v>=0){let w=[d,g,v,b];r.push(w),o++,d>i&&(i=d),g>i&&(i=g),v>i&&(i=v)}}}const a=new Array(o).fill(null).map(()=>[0,0,0,0]);for(let s=0;s<o;s++)a[s]=r[s];if(i<=1)for(let s=0;s<o;s++){a[s][3]=a[s][3]<0?1:a[s][3];for(let u=0;u<3;u++)a[s][u]*=255}else if(i<256)for(let s=0;s<o;s++)a[s][3]=a[s][3]<0?255:a[s][3];else for(let s=0;s<o;s++){a[s][3]=a[s][3]<0?i:a[s][3];for(let u=0;u<3;u++)a[s][u]/=i,a[s][u]*=255}for(let s=0;s<o;s++)for(let u=0;u<3;u++)a[s][u]=Math.round(a[s][u]);return a}us.createRoot(document.getElementById("root")).render(E.jsx(kd.StrictMode,{children:E.jsx(Cy,{})}));
