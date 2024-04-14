function Hp(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function Up(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ed={exports:{}},Ui={},td={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yo=Symbol.for("react.element"),Wp=Symbol.for("react.portal"),Kp=Symbol.for("react.fragment"),Qp=Symbol.for("react.strict_mode"),Gp=Symbol.for("react.profiler"),Yp=Symbol.for("react.provider"),qp=Symbol.for("react.context"),Xp=Symbol.for("react.forward_ref"),Zp=Symbol.for("react.suspense"),Jp=Symbol.for("react.memo"),ef=Symbol.for("react.lazy"),du=Symbol.iterator;function tf(e){return e===null||typeof e!="object"?null:(e=du&&e[du]||e["@@iterator"],typeof e=="function"?e:null)}var nd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},rd=Object.assign,od={};function gr(e,t,n){this.props=e,this.context=t,this.refs=od,this.updater=n||nd}gr.prototype.isReactComponent={};gr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};gr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function id(){}id.prototype=gr.prototype;function na(e,t,n){this.props=e,this.context=t,this.refs=od,this.updater=n||nd}var ra=na.prototype=new id;ra.constructor=na;rd(ra,gr.prototype);ra.isPureReactComponent=!0;var hu=Array.isArray,ld=Object.prototype.hasOwnProperty,oa={current:null},sd={key:!0,ref:!0,__self:!0,__source:!0};function ad(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)ld.call(t,r)&&!sd.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var a=Array(s),u=0;u<s;u++)a[u]=arguments[u+2];o.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:yo,type:e,key:i,ref:l,props:o,_owner:oa.current}}function nf(e,t){return{$$typeof:yo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ia(e){return typeof e=="object"&&e!==null&&e.$$typeof===yo}function rf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var pu=/\/+/g;function pl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?rf(""+e.key):t.toString(36)}function Xo(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case yo:case Wp:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+pl(l,0):r,hu(o)?(n="",e!=null&&(n=e.replace(pu,"$&/")+"/"),Xo(o,t,n,"",function(u){return u})):o!=null&&(ia(o)&&(o=nf(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(pu,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",hu(e))for(var s=0;s<e.length;s++){i=e[s];var a=r+pl(i,s);l+=Xo(i,t,n,a,o)}else if(a=tf(e),typeof a=="function")for(e=a.call(e),s=0;!(i=e.next()).done;)i=i.value,a=r+pl(i,s++),l+=Xo(i,t,n,a,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Ao(e,t,n){if(e==null)return e;var r=[],o=0;return Xo(e,r,"","",function(i){return t.call(n,i,o++)}),r}function of(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ce={current:null},Zo={transition:null},lf={ReactCurrentDispatcher:Ce,ReactCurrentBatchConfig:Zo,ReactCurrentOwner:oa};I.Children={map:Ao,forEach:function(e,t,n){Ao(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ao(e,function(){t++}),t},toArray:function(e){return Ao(e,function(t){return t})||[]},only:function(e){if(!ia(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Component=gr;I.Fragment=Kp;I.Profiler=Gp;I.PureComponent=na;I.StrictMode=Qp;I.Suspense=Zp;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lf;I.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=rd({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=oa.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)ld.call(t,a)&&!sd.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var u=0;u<a;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:yo,type:e.type,key:o,ref:i,props:r,_owner:l}};I.createContext=function(e){return e={$$typeof:qp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Yp,_context:e},e.Consumer=e};I.createElement=ad;I.createFactory=function(e){var t=ad.bind(null,e);return t.type=e,t};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:Xp,render:e}};I.isValidElement=ia;I.lazy=function(e){return{$$typeof:ef,_payload:{_status:-1,_result:e},_init:of}};I.memo=function(e,t){return{$$typeof:Jp,type:e,compare:t===void 0?null:t}};I.startTransition=function(e){var t=Zo.transition;Zo.transition={};try{e()}finally{Zo.transition=t}};I.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};I.useCallback=function(e,t){return Ce.current.useCallback(e,t)};I.useContext=function(e){return Ce.current.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e){return Ce.current.useDeferredValue(e)};I.useEffect=function(e,t){return Ce.current.useEffect(e,t)};I.useId=function(){return Ce.current.useId()};I.useImperativeHandle=function(e,t,n){return Ce.current.useImperativeHandle(e,t,n)};I.useInsertionEffect=function(e,t){return Ce.current.useInsertionEffect(e,t)};I.useLayoutEffect=function(e,t){return Ce.current.useLayoutEffect(e,t)};I.useMemo=function(e,t){return Ce.current.useMemo(e,t)};I.useReducer=function(e,t,n){return Ce.current.useReducer(e,t,n)};I.useRef=function(e){return Ce.current.useRef(e)};I.useState=function(e){return Ce.current.useState(e)};I.useSyncExternalStore=function(e,t,n){return Ce.current.useSyncExternalStore(e,t,n)};I.useTransition=function(){return Ce.current.useTransition()};I.version="18.2.0";td.exports=I;var Be=td.exports;const ud=Up(Be),la=Hp({__proto__:null,default:ud},[Be]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sf=Be,af=Symbol.for("react.element"),uf=Symbol.for("react.fragment"),cf=Object.prototype.hasOwnProperty,df=sf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,hf={key:!0,ref:!0,__self:!0,__source:!0};function cd(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)cf.call(t,r)&&!hf.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:af,type:e,key:i,ref:l,props:o,_owner:df.current}}Ui.Fragment=uf;Ui.jsx=cd;Ui.jsxs=cd;ed.exports=Ui;var L=ed.exports,es={},dd={exports:{}},Qe={},hd={exports:{}},pd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(A,M){var D=A.length;A.push(M);e:for(;0<D;){var re=D-1>>>1,ce=A[re];if(0<o(ce,M))A[re]=M,A[D]=ce,D=re;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var M=A[0],D=A.pop();if(D!==M){A[0]=D;e:for(var re=0,ce=A.length,$o=ce>>>1;re<$o;){var cn=2*(re+1)-1,hl=A[cn],dn=cn+1,zo=A[dn];if(0>o(hl,D))dn<ce&&0>o(zo,hl)?(A[re]=zo,A[dn]=D,re=dn):(A[re]=hl,A[cn]=D,re=cn);else if(dn<ce&&0>o(zo,D))A[re]=zo,A[dn]=D,re=dn;else break e}}return M}function o(A,M){var D=A.sortIndex-M.sortIndex;return D!==0?D:A.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var a=[],u=[],h=1,d=null,f=3,v=!1,y=!1,b=!1,T=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(A){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=A)r(u),M.sortIndex=M.expirationTime,t(a,M);else break;M=n(u)}}function _(A){if(b=!1,g(A),!y)if(n(a)!==null)y=!0,Ae(x);else{var M=n(u);M!==null&&De(_,M.startTime-A)}}function x(A,M){y=!1,b&&(b=!1,p(z),z=-1),v=!0;var D=f;try{for(g(M),d=n(a);d!==null&&(!(d.expirationTime>M)||A&&!ie());){var re=d.callback;if(typeof re=="function"){d.callback=null,f=d.priorityLevel;var ce=re(d.expirationTime<=M);M=e.unstable_now(),typeof ce=="function"?d.callback=ce:d===n(a)&&r(a),g(M)}else r(a);d=n(a)}if(d!==null)var $o=!0;else{var cn=n(u);cn!==null&&De(_,cn.startTime-M),$o=!1}return $o}finally{d=null,f=D,v=!1}}var C=!1,E=null,z=-1,j=5,R=-1;function ie(){return!(e.unstable_now()-R<j)}function $(){if(E!==null){var A=e.unstable_now();R=A;var M=!0;try{M=E(!0,A)}finally{M?S():(C=!1,E=null)}}else C=!1}var S;if(typeof c=="function")S=function(){c($)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,q=F.port2;F.port1.onmessage=$,S=function(){q.postMessage(null)}}else S=function(){T($,0)};function Ae(A){E=A,C||(C=!0,S())}function De(A,M){z=T(function(){A(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,Ae(x))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(A){switch(f){case 1:case 2:case 3:var M=3;break;default:M=f}var D=f;f=M;try{return A()}finally{f=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,M){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var D=f;f=A;try{return M()}finally{f=D}},e.unstable_scheduleCallback=function(A,M,D){var re=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?re+D:re):D=re,A){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=D+ce,A={id:h++,callback:M,priorityLevel:A,startTime:D,expirationTime:ce,sortIndex:-1},D>re?(A.sortIndex=D,t(u,A),n(a)===null&&A===n(u)&&(b?(p(z),z=-1):b=!0,De(_,D-re))):(A.sortIndex=ce,t(a,A),y||v||(y=!0,Ae(x))),A},e.unstable_shouldYield=ie,e.unstable_wrapCallback=function(A){var M=f;return function(){var D=f;f=M;try{return A.apply(this,arguments)}finally{f=D}}}})(pd);hd.exports=pd;var pf=hd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fd=Be,Ke=pf;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var gd=new Set,Yr={};function Ln(e,t){ir(e,t),ir(e+"Capture",t)}function ir(e,t){for(Yr[e]=t,e=0;e<t.length;e++)gd.add(t[e])}var zt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ts=Object.prototype.hasOwnProperty,ff=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fu={},gu={};function gf(e){return ts.call(gu,e)?!0:ts.call(fu,e)?!1:ff.test(e)?gu[e]=!0:(fu[e]=!0,!1)}function mf(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function vf(e,t,n,r){if(t===null||typeof t>"u"||mf(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ee(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ve[e]=new Ee(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ve[t]=new Ee(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ve[e]=new Ee(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ve[e]=new Ee(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ve[e]=new Ee(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ve[e]=new Ee(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ve[e]=new Ee(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ve[e]=new Ee(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ve[e]=new Ee(e,5,!1,e.toLowerCase(),null,!1,!1)});var sa=/[\-:]([a-z])/g;function aa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(sa,aa);ve[t]=new Ee(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(sa,aa);ve[t]=new Ee(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(sa,aa);ve[t]=new Ee(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ve[e]=new Ee(e,1,!1,e.toLowerCase(),null,!1,!1)});ve.xlinkHref=new Ee("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ve[e]=new Ee(e,1,!1,e.toLowerCase(),null,!0,!0)});function ua(e,t,n,r){var o=ve.hasOwnProperty(t)?ve[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(vf(t,n,o,r)&&(n=null),r||o===null?gf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Nt=fd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Po=Symbol.for("react.element"),Fn=Symbol.for("react.portal"),In=Symbol.for("react.fragment"),ca=Symbol.for("react.strict_mode"),ns=Symbol.for("react.profiler"),md=Symbol.for("react.provider"),vd=Symbol.for("react.context"),da=Symbol.for("react.forward_ref"),rs=Symbol.for("react.suspense"),os=Symbol.for("react.suspense_list"),ha=Symbol.for("react.memo"),Dt=Symbol.for("react.lazy"),yd=Symbol.for("react.offscreen"),mu=Symbol.iterator;function _r(e){return e===null||typeof e!="object"?null:(e=mu&&e[mu]||e["@@iterator"],typeof e=="function"?e:null)}var te=Object.assign,fl;function Mr(e){if(fl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);fl=t&&t[1]||""}return`
`+fl+e}var gl=!1;function ml(e,t){if(!e||gl)return"";gl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,s=i.length-1;1<=l&&0<=s&&o[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(o[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||o[l]!==i[s]){var a=`
`+o[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=s);break}}}finally{gl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Mr(e):""}function yf(e){switch(e.tag){case 5:return Mr(e.type);case 16:return Mr("Lazy");case 13:return Mr("Suspense");case 19:return Mr("SuspenseList");case 0:case 2:case 15:return e=ml(e.type,!1),e;case 11:return e=ml(e.type.render,!1),e;case 1:return e=ml(e.type,!0),e;default:return""}}function is(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case In:return"Fragment";case Fn:return"Portal";case ns:return"Profiler";case ca:return"StrictMode";case rs:return"Suspense";case os:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case vd:return(e.displayName||"Context")+".Consumer";case md:return(e._context.displayName||"Context")+".Provider";case da:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ha:return t=e.displayName||null,t!==null?t:is(e.type)||"Memo";case Dt:t=e._payload,e=e._init;try{return is(e(t))}catch{}}return null}function wf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return is(t);case 8:return t===ca?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function en(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function wd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function bf(e){var t=wd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function To(e){e._valueTracker||(e._valueTracker=bf(e))}function bd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=wd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function pi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ls(e,t){var n=t.checked;return te({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function vu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=en(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function _d(e,t){t=t.checked,t!=null&&ua(e,"checked",t,!1)}function ss(e,t){_d(e,t);var n=en(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?as(e,t.type,n):t.hasOwnProperty("defaultValue")&&as(e,t.type,en(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function yu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function as(e,t,n){(t!=="number"||pi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Or=Array.isArray;function Zn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+en(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function us(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return te({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function wu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(Or(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:en(n)}}function xd(e,t){var n=en(t.value),r=en(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function bu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function kd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function cs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?kd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Lo,Sd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Lo=Lo||document.createElement("div"),Lo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Lo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function qr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ir={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_f=["Webkit","ms","Moz","O"];Object.keys(Ir).forEach(function(e){_f.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ir[t]=Ir[e]})});function Cd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ir.hasOwnProperty(e)&&Ir[e]?(""+t).trim():t+"px"}function Ed(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Cd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var xf=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ds(e,t){if(t){if(xf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function hs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ps=null;function pa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fs=null,Jn=null,er=null;function _u(e){if(e=_o(e)){if(typeof fs!="function")throw Error(k(280));var t=e.stateNode;t&&(t=Yi(t),fs(e.stateNode,e.type,t))}}function $d(e){Jn?er?er.push(e):er=[e]:Jn=e}function zd(){if(Jn){var e=Jn,t=er;if(er=Jn=null,_u(e),t)for(e=0;e<t.length;e++)_u(t[e])}}function Ad(e,t){return e(t)}function Pd(){}var vl=!1;function Td(e,t,n){if(vl)return e(t,n);vl=!0;try{return Ad(e,t,n)}finally{vl=!1,(Jn!==null||er!==null)&&(Pd(),zd())}}function Xr(e,t){var n=e.stateNode;if(n===null)return null;var r=Yi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var gs=!1;if(zt)try{var xr={};Object.defineProperty(xr,"passive",{get:function(){gs=!0}}),window.addEventListener("test",xr,xr),window.removeEventListener("test",xr,xr)}catch{gs=!1}function kf(e,t,n,r,o,i,l,s,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(h){this.onError(h)}}var Vr=!1,fi=null,gi=!1,ms=null,Sf={onError:function(e){Vr=!0,fi=e}};function Cf(e,t,n,r,o,i,l,s,a){Vr=!1,fi=null,kf.apply(Sf,arguments)}function Ef(e,t,n,r,o,i,l,s,a){if(Cf.apply(this,arguments),Vr){if(Vr){var u=fi;Vr=!1,fi=null}else throw Error(k(198));gi||(gi=!0,ms=u)}}function Nn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ld(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function xu(e){if(Nn(e)!==e)throw Error(k(188))}function $f(e){var t=e.alternate;if(!t){if(t=Nn(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return xu(o),e;if(i===r)return xu(o),t;i=i.sibling}throw Error(k(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function Nd(e){return e=$f(e),e!==null?Rd(e):null}function Rd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Rd(e);if(t!==null)return t;e=e.sibling}return null}var Md=Ke.unstable_scheduleCallback,ku=Ke.unstable_cancelCallback,zf=Ke.unstable_shouldYield,Af=Ke.unstable_requestPaint,oe=Ke.unstable_now,Pf=Ke.unstable_getCurrentPriorityLevel,fa=Ke.unstable_ImmediatePriority,Od=Ke.unstable_UserBlockingPriority,mi=Ke.unstable_NormalPriority,Tf=Ke.unstable_LowPriority,Dd=Ke.unstable_IdlePriority,Wi=null,wt=null;function Lf(e){if(wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(Wi,e,void 0,(e.current.flags&128)===128)}catch{}}var ht=Math.clz32?Math.clz32:Mf,Nf=Math.log,Rf=Math.LN2;function Mf(e){return e>>>=0,e===0?32:31-(Nf(e)/Rf|0)|0}var No=64,Ro=4194304;function Dr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function vi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~o;s!==0?r=Dr(s):(i&=l,i!==0&&(r=Dr(i)))}else l=n&~o,l!==0?r=Dr(l):i!==0&&(r=Dr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ht(t),o=1<<n,r|=e[n],t&=~o;return r}function Of(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Df(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-ht(i),s=1<<l,a=o[l];a===-1?(!(s&n)||s&r)&&(o[l]=Of(s,t)):a<=t&&(e.expiredLanes|=s),i&=~s}}function vs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Fd(){var e=No;return No<<=1,!(No&4194240)&&(No=64),e}function yl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function wo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ht(t),e[t]=n}function Ff(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-ht(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function ga(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ht(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var U=0;function Id(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Vd,ma,Bd,jd,Hd,ys=!1,Mo=[],Kt=null,Qt=null,Gt=null,Zr=new Map,Jr=new Map,Vt=[],If="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Su(e,t){switch(e){case"focusin":case"focusout":Kt=null;break;case"dragenter":case"dragleave":Qt=null;break;case"mouseover":case"mouseout":Gt=null;break;case"pointerover":case"pointerout":Zr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jr.delete(t.pointerId)}}function kr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=_o(t),t!==null&&ma(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Vf(e,t,n,r,o){switch(t){case"focusin":return Kt=kr(Kt,e,t,n,r,o),!0;case"dragenter":return Qt=kr(Qt,e,t,n,r,o),!0;case"mouseover":return Gt=kr(Gt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Zr.set(i,kr(Zr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Jr.set(i,kr(Jr.get(i)||null,e,t,n,r,o)),!0}return!1}function Ud(e){var t=yn(e.target);if(t!==null){var n=Nn(t);if(n!==null){if(t=n.tag,t===13){if(t=Ld(n),t!==null){e.blockedOn=t,Hd(e.priority,function(){Bd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Jo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ws(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ps=r,n.target.dispatchEvent(r),ps=null}else return t=_o(n),t!==null&&ma(t),e.blockedOn=n,!1;t.shift()}return!0}function Cu(e,t,n){Jo(e)&&n.delete(t)}function Bf(){ys=!1,Kt!==null&&Jo(Kt)&&(Kt=null),Qt!==null&&Jo(Qt)&&(Qt=null),Gt!==null&&Jo(Gt)&&(Gt=null),Zr.forEach(Cu),Jr.forEach(Cu)}function Sr(e,t){e.blockedOn===t&&(e.blockedOn=null,ys||(ys=!0,Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority,Bf)))}function eo(e){function t(o){return Sr(o,e)}if(0<Mo.length){Sr(Mo[0],e);for(var n=1;n<Mo.length;n++){var r=Mo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Kt!==null&&Sr(Kt,e),Qt!==null&&Sr(Qt,e),Gt!==null&&Sr(Gt,e),Zr.forEach(t),Jr.forEach(t),n=0;n<Vt.length;n++)r=Vt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Vt.length&&(n=Vt[0],n.blockedOn===null);)Ud(n),n.blockedOn===null&&Vt.shift()}var tr=Nt.ReactCurrentBatchConfig,yi=!0;function jf(e,t,n,r){var o=U,i=tr.transition;tr.transition=null;try{U=1,va(e,t,n,r)}finally{U=o,tr.transition=i}}function Hf(e,t,n,r){var o=U,i=tr.transition;tr.transition=null;try{U=4,va(e,t,n,r)}finally{U=o,tr.transition=i}}function va(e,t,n,r){if(yi){var o=ws(e,t,n,r);if(o===null)zl(e,t,r,wi,n),Su(e,r);else if(Vf(o,e,t,n,r))r.stopPropagation();else if(Su(e,r),t&4&&-1<If.indexOf(e)){for(;o!==null;){var i=_o(o);if(i!==null&&Vd(i),i=ws(e,t,n,r),i===null&&zl(e,t,r,wi,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else zl(e,t,r,null,n)}}var wi=null;function ws(e,t,n,r){if(wi=null,e=pa(r),e=yn(e),e!==null)if(t=Nn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ld(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return wi=e,null}function Wd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Pf()){case fa:return 1;case Od:return 4;case mi:case Tf:return 16;case Dd:return 536870912;default:return 16}default:return 16}}var Ht=null,ya=null,ei=null;function Kd(){if(ei)return ei;var e,t=ya,n=t.length,r,o="value"in Ht?Ht.value:Ht.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return ei=o.slice(e,1<r?1-r:void 0)}function ti(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Oo(){return!0}function Eu(){return!1}function Ge(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Oo:Eu,this.isPropagationStopped=Eu,this}return te(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Oo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Oo)},persist:function(){},isPersistent:Oo}),t}var mr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wa=Ge(mr),bo=te({},mr,{view:0,detail:0}),Uf=Ge(bo),wl,bl,Cr,Ki=te({},bo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ba,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Cr&&(Cr&&e.type==="mousemove"?(wl=e.screenX-Cr.screenX,bl=e.screenY-Cr.screenY):bl=wl=0,Cr=e),wl)},movementY:function(e){return"movementY"in e?e.movementY:bl}}),$u=Ge(Ki),Wf=te({},Ki,{dataTransfer:0}),Kf=Ge(Wf),Qf=te({},bo,{relatedTarget:0}),_l=Ge(Qf),Gf=te({},mr,{animationName:0,elapsedTime:0,pseudoElement:0}),Yf=Ge(Gf),qf=te({},mr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Xf=Ge(qf),Zf=te({},mr,{data:0}),zu=Ge(Zf),Jf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},eg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ng(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=tg[e])?!!t[e]:!1}function ba(){return ng}var rg=te({},bo,{key:function(e){if(e.key){var t=Jf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ti(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?eg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ba,charCode:function(e){return e.type==="keypress"?ti(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ti(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),og=Ge(rg),ig=te({},Ki,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Au=Ge(ig),lg=te({},bo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ba}),sg=Ge(lg),ag=te({},mr,{propertyName:0,elapsedTime:0,pseudoElement:0}),ug=Ge(ag),cg=te({},Ki,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),dg=Ge(cg),hg=[9,13,27,32],_a=zt&&"CompositionEvent"in window,Br=null;zt&&"documentMode"in document&&(Br=document.documentMode);var pg=zt&&"TextEvent"in window&&!Br,Qd=zt&&(!_a||Br&&8<Br&&11>=Br),Pu=String.fromCharCode(32),Tu=!1;function Gd(e,t){switch(e){case"keyup":return hg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vn=!1;function fg(e,t){switch(e){case"compositionend":return Yd(t);case"keypress":return t.which!==32?null:(Tu=!0,Pu);case"textInput":return e=t.data,e===Pu&&Tu?null:e;default:return null}}function gg(e,t){if(Vn)return e==="compositionend"||!_a&&Gd(e,t)?(e=Kd(),ei=ya=Ht=null,Vn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Qd&&t.locale!=="ko"?null:t.data;default:return null}}var mg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!mg[e.type]:t==="textarea"}function qd(e,t,n,r){$d(r),t=bi(t,"onChange"),0<t.length&&(n=new wa("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var jr=null,to=null;function vg(e){sh(e,0)}function Qi(e){var t=Hn(e);if(bd(t))return e}function yg(e,t){if(e==="change")return t}var Xd=!1;if(zt){var xl;if(zt){var kl="oninput"in document;if(!kl){var Nu=document.createElement("div");Nu.setAttribute("oninput","return;"),kl=typeof Nu.oninput=="function"}xl=kl}else xl=!1;Xd=xl&&(!document.documentMode||9<document.documentMode)}function Ru(){jr&&(jr.detachEvent("onpropertychange",Zd),to=jr=null)}function Zd(e){if(e.propertyName==="value"&&Qi(to)){var t=[];qd(t,to,e,pa(e)),Td(vg,t)}}function wg(e,t,n){e==="focusin"?(Ru(),jr=t,to=n,jr.attachEvent("onpropertychange",Zd)):e==="focusout"&&Ru()}function bg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Qi(to)}function _g(e,t){if(e==="click")return Qi(t)}function xg(e,t){if(e==="input"||e==="change")return Qi(t)}function kg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ft=typeof Object.is=="function"?Object.is:kg;function no(e,t){if(ft(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!ts.call(t,o)||!ft(e[o],t[o]))return!1}return!0}function Mu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ou(e,t){var n=Mu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Mu(n)}}function Jd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Jd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function eh(){for(var e=window,t=pi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=pi(e.document)}return t}function xa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Sg(e){var t=eh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Jd(n.ownerDocument.documentElement,n)){if(r!==null&&xa(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Ou(n,i);var l=Ou(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Cg=zt&&"documentMode"in document&&11>=document.documentMode,Bn=null,bs=null,Hr=null,_s=!1;function Du(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_s||Bn==null||Bn!==pi(r)||(r=Bn,"selectionStart"in r&&xa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Hr&&no(Hr,r)||(Hr=r,r=bi(bs,"onSelect"),0<r.length&&(t=new wa("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Bn)))}function Do(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var jn={animationend:Do("Animation","AnimationEnd"),animationiteration:Do("Animation","AnimationIteration"),animationstart:Do("Animation","AnimationStart"),transitionend:Do("Transition","TransitionEnd")},Sl={},th={};zt&&(th=document.createElement("div").style,"AnimationEvent"in window||(delete jn.animationend.animation,delete jn.animationiteration.animation,delete jn.animationstart.animation),"TransitionEvent"in window||delete jn.transitionend.transition);function Gi(e){if(Sl[e])return Sl[e];if(!jn[e])return e;var t=jn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in th)return Sl[e]=t[n];return e}var nh=Gi("animationend"),rh=Gi("animationiteration"),oh=Gi("animationstart"),ih=Gi("transitionend"),lh=new Map,Fu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sn(e,t){lh.set(e,t),Ln(t,[e])}for(var Cl=0;Cl<Fu.length;Cl++){var El=Fu[Cl],Eg=El.toLowerCase(),$g=El[0].toUpperCase()+El.slice(1);sn(Eg,"on"+$g)}sn(nh,"onAnimationEnd");sn(rh,"onAnimationIteration");sn(oh,"onAnimationStart");sn("dblclick","onDoubleClick");sn("focusin","onFocus");sn("focusout","onBlur");sn(ih,"onTransitionEnd");ir("onMouseEnter",["mouseout","mouseover"]);ir("onMouseLeave",["mouseout","mouseover"]);ir("onPointerEnter",["pointerout","pointerover"]);ir("onPointerLeave",["pointerout","pointerover"]);Ln("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ln("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ln("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ln("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ln("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ln("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fr));function Iu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Ef(r,t,void 0,e),e.currentTarget=null}function sh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],a=s.instance,u=s.currentTarget;if(s=s.listener,a!==i&&o.isPropagationStopped())break e;Iu(o,s,u),i=a}else for(l=0;l<r.length;l++){if(s=r[l],a=s.instance,u=s.currentTarget,s=s.listener,a!==i&&o.isPropagationStopped())break e;Iu(o,s,u),i=a}}}if(gi)throw e=ms,gi=!1,ms=null,e}function Q(e,t){var n=t[Es];n===void 0&&(n=t[Es]=new Set);var r=e+"__bubble";n.has(r)||(ah(t,e,2,!1),n.add(r))}function $l(e,t,n){var r=0;t&&(r|=4),ah(n,e,r,t)}var Fo="_reactListening"+Math.random().toString(36).slice(2);function ro(e){if(!e[Fo]){e[Fo]=!0,gd.forEach(function(n){n!=="selectionchange"&&(zg.has(n)||$l(n,!1,e),$l(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Fo]||(t[Fo]=!0,$l("selectionchange",!1,t))}}function ah(e,t,n,r){switch(Wd(t)){case 1:var o=jf;break;case 4:o=Hf;break;default:o=va}n=o.bind(null,t,n,e),o=void 0,!gs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function zl(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;l=l.return}for(;s!==null;){if(l=yn(s),l===null)return;if(a=l.tag,a===5||a===6){r=i=l;continue e}s=s.parentNode}}r=r.return}Td(function(){var u=i,h=pa(n),d=[];e:{var f=lh.get(e);if(f!==void 0){var v=wa,y=e;switch(e){case"keypress":if(ti(n)===0)break e;case"keydown":case"keyup":v=og;break;case"focusin":y="focus",v=_l;break;case"focusout":y="blur",v=_l;break;case"beforeblur":case"afterblur":v=_l;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=$u;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Kf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=sg;break;case nh:case rh:case oh:v=Yf;break;case ih:v=ug;break;case"scroll":v=Uf;break;case"wheel":v=dg;break;case"copy":case"cut":case"paste":v=Xf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Au}var b=(t&4)!==0,T=!b&&e==="scroll",p=b?f!==null?f+"Capture":null:f;b=[];for(var c=u,g;c!==null;){g=c;var _=g.stateNode;if(g.tag===5&&_!==null&&(g=_,p!==null&&(_=Xr(c,p),_!=null&&b.push(oo(c,_,g)))),T)break;c=c.return}0<b.length&&(f=new v(f,y,null,n,h),d.push({event:f,listeners:b}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",f&&n!==ps&&(y=n.relatedTarget||n.fromElement)&&(yn(y)||y[At]))break e;if((v||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=u,y=y?yn(y):null,y!==null&&(T=Nn(y),y!==T||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=u),v!==y)){if(b=$u,_="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(b=Au,_="onPointerLeave",p="onPointerEnter",c="pointer"),T=v==null?f:Hn(v),g=y==null?f:Hn(y),f=new b(_,c+"leave",v,n,h),f.target=T,f.relatedTarget=g,_=null,yn(h)===u&&(b=new b(p,c+"enter",y,n,h),b.target=g,b.relatedTarget=T,_=b),T=_,v&&y)t:{for(b=v,p=y,c=0,g=b;g;g=On(g))c++;for(g=0,_=p;_;_=On(_))g++;for(;0<c-g;)b=On(b),c--;for(;0<g-c;)p=On(p),g--;for(;c--;){if(b===p||p!==null&&b===p.alternate)break t;b=On(b),p=On(p)}b=null}else b=null;v!==null&&Vu(d,f,v,b,!1),y!==null&&T!==null&&Vu(d,T,y,b,!0)}}e:{if(f=u?Hn(u):window,v=f.nodeName&&f.nodeName.toLowerCase(),v==="select"||v==="input"&&f.type==="file")var x=yg;else if(Lu(f))if(Xd)x=xg;else{x=bg;var C=wg}else(v=f.nodeName)&&v.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(x=_g);if(x&&(x=x(e,u))){qd(d,x,n,h);break e}C&&C(e,f,u),e==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&as(f,"number",f.value)}switch(C=u?Hn(u):window,e){case"focusin":(Lu(C)||C.contentEditable==="true")&&(Bn=C,bs=u,Hr=null);break;case"focusout":Hr=bs=Bn=null;break;case"mousedown":_s=!0;break;case"contextmenu":case"mouseup":case"dragend":_s=!1,Du(d,n,h);break;case"selectionchange":if(Cg)break;case"keydown":case"keyup":Du(d,n,h)}var E;if(_a)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Vn?Gd(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(Qd&&n.locale!=="ko"&&(Vn||z!=="onCompositionStart"?z==="onCompositionEnd"&&Vn&&(E=Kd()):(Ht=h,ya="value"in Ht?Ht.value:Ht.textContent,Vn=!0)),C=bi(u,z),0<C.length&&(z=new zu(z,e,null,n,h),d.push({event:z,listeners:C}),E?z.data=E:(E=Yd(n),E!==null&&(z.data=E)))),(E=pg?fg(e,n):gg(e,n))&&(u=bi(u,"onBeforeInput"),0<u.length&&(h=new zu("onBeforeInput","beforeinput",null,n,h),d.push({event:h,listeners:u}),h.data=E))}sh(d,t)})}function oo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function bi(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Xr(e,n),i!=null&&r.unshift(oo(e,i,o)),i=Xr(e,t),i!=null&&r.push(oo(e,i,o))),e=e.return}return r}function On(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Vu(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var s=n,a=s.alternate,u=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&u!==null&&(s=u,o?(a=Xr(n,i),a!=null&&l.unshift(oo(n,a,s))):o||(a=Xr(n,i),a!=null&&l.push(oo(n,a,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Ag=/\r\n?/g,Pg=/\u0000|\uFFFD/g;function Bu(e){return(typeof e=="string"?e:""+e).replace(Ag,`
`).replace(Pg,"")}function Io(e,t,n){if(t=Bu(t),Bu(e)!==t&&n)throw Error(k(425))}function _i(){}var xs=null,ks=null;function Ss(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Cs=typeof setTimeout=="function"?setTimeout:void 0,Tg=typeof clearTimeout=="function"?clearTimeout:void 0,ju=typeof Promise=="function"?Promise:void 0,Lg=typeof queueMicrotask=="function"?queueMicrotask:typeof ju<"u"?function(e){return ju.resolve(null).then(e).catch(Ng)}:Cs;function Ng(e){setTimeout(function(){throw e})}function Al(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),eo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);eo(t)}function Yt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Hu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var vr=Math.random().toString(36).slice(2),yt="__reactFiber$"+vr,io="__reactProps$"+vr,At="__reactContainer$"+vr,Es="__reactEvents$"+vr,Rg="__reactListeners$"+vr,Mg="__reactHandles$"+vr;function yn(e){var t=e[yt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[At]||n[yt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Hu(e);e!==null;){if(n=e[yt])return n;e=Hu(e)}return t}e=n,n=e.parentNode}return null}function _o(e){return e=e[yt]||e[At],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Hn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function Yi(e){return e[io]||null}var $s=[],Un=-1;function an(e){return{current:e}}function G(e){0>Un||(e.current=$s[Un],$s[Un]=null,Un--)}function K(e,t){Un++,$s[Un]=e.current,e.current=t}var tn={},_e=an(tn),Le=an(!1),Cn=tn;function lr(e,t){var n=e.type.contextTypes;if(!n)return tn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ne(e){return e=e.childContextTypes,e!=null}function xi(){G(Le),G(_e)}function Uu(e,t,n){if(_e.current!==tn)throw Error(k(168));K(_e,t),K(Le,n)}function uh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(k(108,wf(e)||"Unknown",o));return te({},n,r)}function ki(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||tn,Cn=_e.current,K(_e,e),K(Le,Le.current),!0}function Wu(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=uh(e,t,Cn),r.__reactInternalMemoizedMergedChildContext=e,G(Le),G(_e),K(_e,e)):G(Le),K(Le,n)}var St=null,qi=!1,Pl=!1;function ch(e){St===null?St=[e]:St.push(e)}function Og(e){qi=!0,ch(e)}function un(){if(!Pl&&St!==null){Pl=!0;var e=0,t=U;try{var n=St;for(U=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}St=null,qi=!1}catch(o){throw St!==null&&(St=St.slice(e+1)),Md(fa,un),o}finally{U=t,Pl=!1}}return null}var Wn=[],Kn=0,Si=null,Ci=0,Xe=[],Ze=0,En=null,Ct=1,Et="";function pn(e,t){Wn[Kn++]=Ci,Wn[Kn++]=Si,Si=e,Ci=t}function dh(e,t,n){Xe[Ze++]=Ct,Xe[Ze++]=Et,Xe[Ze++]=En,En=e;var r=Ct;e=Et;var o=32-ht(r)-1;r&=~(1<<o),n+=1;var i=32-ht(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,Ct=1<<32-ht(t)+o|n<<o|r,Et=i+e}else Ct=1<<i|n<<o|r,Et=e}function ka(e){e.return!==null&&(pn(e,1),dh(e,1,0))}function Sa(e){for(;e===Si;)Si=Wn[--Kn],Wn[Kn]=null,Ci=Wn[--Kn],Wn[Kn]=null;for(;e===En;)En=Xe[--Ze],Xe[Ze]=null,Et=Xe[--Ze],Xe[Ze]=null,Ct=Xe[--Ze],Xe[Ze]=null}var He=null,je=null,Z=!1,dt=null;function hh(e,t){var n=Je(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ku(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,He=e,je=Yt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,He=e,je=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=En!==null?{id:Ct,overflow:Et}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Je(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,He=e,je=null,!0):!1;default:return!1}}function zs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function As(e){if(Z){var t=je;if(t){var n=t;if(!Ku(e,t)){if(zs(e))throw Error(k(418));t=Yt(n.nextSibling);var r=He;t&&Ku(e,t)?hh(r,n):(e.flags=e.flags&-4097|2,Z=!1,He=e)}}else{if(zs(e))throw Error(k(418));e.flags=e.flags&-4097|2,Z=!1,He=e}}}function Qu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;He=e}function Vo(e){if(e!==He)return!1;if(!Z)return Qu(e),Z=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ss(e.type,e.memoizedProps)),t&&(t=je)){if(zs(e))throw ph(),Error(k(418));for(;t;)hh(e,t),t=Yt(t.nextSibling)}if(Qu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){je=Yt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}je=null}}else je=He?Yt(e.stateNode.nextSibling):null;return!0}function ph(){for(var e=je;e;)e=Yt(e.nextSibling)}function sr(){je=He=null,Z=!1}function Ca(e){dt===null?dt=[e]:dt.push(e)}var Dg=Nt.ReactCurrentBatchConfig;function ut(e,t){if(e&&e.defaultProps){t=te({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ei=an(null),$i=null,Qn=null,Ea=null;function $a(){Ea=Qn=$i=null}function za(e){var t=Ei.current;G(Ei),e._currentValue=t}function Ps(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function nr(e,t){$i=e,Ea=Qn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Te=!0),e.firstContext=null)}function nt(e){var t=e._currentValue;if(Ea!==e)if(e={context:e,memoizedValue:t,next:null},Qn===null){if($i===null)throw Error(k(308));Qn=e,$i.dependencies={lanes:0,firstContext:e}}else Qn=Qn.next=e;return t}var wn=null;function Aa(e){wn===null?wn=[e]:wn.push(e)}function fh(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Aa(t)):(n.next=o.next,o.next=n),t.interleaved=n,Pt(e,r)}function Pt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ft=!1;function Pa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function $t(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function qt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,B&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Pt(e,n)}return o=r.interleaved,o===null?(t.next=t,Aa(r)):(t.next=o.next,o.next=t),r.interleaved=t,Pt(e,n)}function ni(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ga(e,n)}}function Gu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function zi(e,t,n,r){var o=e.updateQueue;Ft=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var a=s,u=a.next;a.next=null,l===null?i=u:l.next=u,l=a;var h=e.alternate;h!==null&&(h=h.updateQueue,s=h.lastBaseUpdate,s!==l&&(s===null?h.firstBaseUpdate=u:s.next=u,h.lastBaseUpdate=a))}if(i!==null){var d=o.baseState;l=0,h=u=a=null,s=i;do{var f=s.lane,v=s.eventTime;if((r&f)===f){h!==null&&(h=h.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var y=e,b=s;switch(f=t,v=n,b.tag){case 1:if(y=b.payload,typeof y=="function"){d=y.call(v,d,f);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=b.payload,f=typeof y=="function"?y.call(v,d,f):y,f==null)break e;d=te({},d,f);break e;case 2:Ft=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=o.effects,f===null?o.effects=[s]:f.push(s))}else v={eventTime:v,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},h===null?(u=h=v,a=d):h=h.next=v,l|=f;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;f=s,s=f.next,f.next=null,o.lastBaseUpdate=f,o.shared.pending=null}}while(1);if(h===null&&(a=d),o.baseState=a,o.firstBaseUpdate=u,o.lastBaseUpdate=h,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);zn|=l,e.lanes=l,e.memoizedState=d}}function Yu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(k(191,o));o.call(r)}}}var mh=new fd.Component().refs;function Ts(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:te({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Xi={isMounted:function(e){return(e=e._reactInternals)?Nn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Se(),o=Zt(e),i=$t(r,o);i.payload=t,n!=null&&(i.callback=n),t=qt(e,i,o),t!==null&&(pt(t,e,o,r),ni(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Se(),o=Zt(e),i=$t(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=qt(e,i,o),t!==null&&(pt(t,e,o,r),ni(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Se(),r=Zt(e),o=$t(n,r);o.tag=2,t!=null&&(o.callback=t),t=qt(e,o,r),t!==null&&(pt(t,e,r,n),ni(t,e,r))}};function qu(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!no(n,r)||!no(o,i):!0}function vh(e,t,n){var r=!1,o=tn,i=t.contextType;return typeof i=="object"&&i!==null?i=nt(i):(o=Ne(t)?Cn:_e.current,r=t.contextTypes,i=(r=r!=null)?lr(e,o):tn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Xi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Xu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Xi.enqueueReplaceState(t,t.state,null)}function Ls(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=mh,Pa(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=nt(i):(i=Ne(t)?Cn:_e.current,o.context=lr(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ts(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Xi.enqueueReplaceState(o,o.state,null),zi(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Er(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var s=o.refs;s===mh&&(s=o.refs={}),l===null?delete s[i]:s[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function Bo(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Zu(e){var t=e._init;return t(e._payload)}function yh(e){function t(p,c){if(e){var g=p.deletions;g===null?(p.deletions=[c],p.flags|=16):g.push(c)}}function n(p,c){if(!e)return null;for(;c!==null;)t(p,c),c=c.sibling;return null}function r(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function o(p,c){return p=Jt(p,c),p.index=0,p.sibling=null,p}function i(p,c,g){return p.index=g,e?(g=p.alternate,g!==null?(g=g.index,g<c?(p.flags|=2,c):g):(p.flags|=2,c)):(p.flags|=1048576,c)}function l(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,c,g,_){return c===null||c.tag!==6?(c=Dl(g,p.mode,_),c.return=p,c):(c=o(c,g),c.return=p,c)}function a(p,c,g,_){var x=g.type;return x===In?h(p,c,g.props.children,_,g.key):c!==null&&(c.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Dt&&Zu(x)===c.type)?(_=o(c,g.props),_.ref=Er(p,c,g),_.return=p,_):(_=ai(g.type,g.key,g.props,null,p.mode,_),_.ref=Er(p,c,g),_.return=p,_)}function u(p,c,g,_){return c===null||c.tag!==4||c.stateNode.containerInfo!==g.containerInfo||c.stateNode.implementation!==g.implementation?(c=Fl(g,p.mode,_),c.return=p,c):(c=o(c,g.children||[]),c.return=p,c)}function h(p,c,g,_,x){return c===null||c.tag!==7?(c=Sn(g,p.mode,_,x),c.return=p,c):(c=o(c,g),c.return=p,c)}function d(p,c,g){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Dl(""+c,p.mode,g),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Po:return g=ai(c.type,c.key,c.props,null,p.mode,g),g.ref=Er(p,null,c),g.return=p,g;case Fn:return c=Fl(c,p.mode,g),c.return=p,c;case Dt:var _=c._init;return d(p,_(c._payload),g)}if(Or(c)||_r(c))return c=Sn(c,p.mode,g,null),c.return=p,c;Bo(p,c)}return null}function f(p,c,g,_){var x=c!==null?c.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return x!==null?null:s(p,c,""+g,_);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Po:return g.key===x?a(p,c,g,_):null;case Fn:return g.key===x?u(p,c,g,_):null;case Dt:return x=g._init,f(p,c,x(g._payload),_)}if(Or(g)||_r(g))return x!==null?null:h(p,c,g,_,null);Bo(p,g)}return null}function v(p,c,g,_,x){if(typeof _=="string"&&_!==""||typeof _=="number")return p=p.get(g)||null,s(c,p,""+_,x);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Po:return p=p.get(_.key===null?g:_.key)||null,a(c,p,_,x);case Fn:return p=p.get(_.key===null?g:_.key)||null,u(c,p,_,x);case Dt:var C=_._init;return v(p,c,g,C(_._payload),x)}if(Or(_)||_r(_))return p=p.get(g)||null,h(c,p,_,x,null);Bo(c,_)}return null}function y(p,c,g,_){for(var x=null,C=null,E=c,z=c=0,j=null;E!==null&&z<g.length;z++){E.index>z?(j=E,E=null):j=E.sibling;var R=f(p,E,g[z],_);if(R===null){E===null&&(E=j);break}e&&E&&R.alternate===null&&t(p,E),c=i(R,c,z),C===null?x=R:C.sibling=R,C=R,E=j}if(z===g.length)return n(p,E),Z&&pn(p,z),x;if(E===null){for(;z<g.length;z++)E=d(p,g[z],_),E!==null&&(c=i(E,c,z),C===null?x=E:C.sibling=E,C=E);return Z&&pn(p,z),x}for(E=r(p,E);z<g.length;z++)j=v(E,p,z,g[z],_),j!==null&&(e&&j.alternate!==null&&E.delete(j.key===null?z:j.key),c=i(j,c,z),C===null?x=j:C.sibling=j,C=j);return e&&E.forEach(function(ie){return t(p,ie)}),Z&&pn(p,z),x}function b(p,c,g,_){var x=_r(g);if(typeof x!="function")throw Error(k(150));if(g=x.call(g),g==null)throw Error(k(151));for(var C=x=null,E=c,z=c=0,j=null,R=g.next();E!==null&&!R.done;z++,R=g.next()){E.index>z?(j=E,E=null):j=E.sibling;var ie=f(p,E,R.value,_);if(ie===null){E===null&&(E=j);break}e&&E&&ie.alternate===null&&t(p,E),c=i(ie,c,z),C===null?x=ie:C.sibling=ie,C=ie,E=j}if(R.done)return n(p,E),Z&&pn(p,z),x;if(E===null){for(;!R.done;z++,R=g.next())R=d(p,R.value,_),R!==null&&(c=i(R,c,z),C===null?x=R:C.sibling=R,C=R);return Z&&pn(p,z),x}for(E=r(p,E);!R.done;z++,R=g.next())R=v(E,p,z,R.value,_),R!==null&&(e&&R.alternate!==null&&E.delete(R.key===null?z:R.key),c=i(R,c,z),C===null?x=R:C.sibling=R,C=R);return e&&E.forEach(function($){return t(p,$)}),Z&&pn(p,z),x}function T(p,c,g,_){if(typeof g=="object"&&g!==null&&g.type===In&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Po:e:{for(var x=g.key,C=c;C!==null;){if(C.key===x){if(x=g.type,x===In){if(C.tag===7){n(p,C.sibling),c=o(C,g.props.children),c.return=p,p=c;break e}}else if(C.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Dt&&Zu(x)===C.type){n(p,C.sibling),c=o(C,g.props),c.ref=Er(p,C,g),c.return=p,p=c;break e}n(p,C);break}else t(p,C);C=C.sibling}g.type===In?(c=Sn(g.props.children,p.mode,_,g.key),c.return=p,p=c):(_=ai(g.type,g.key,g.props,null,p.mode,_),_.ref=Er(p,c,g),_.return=p,p=_)}return l(p);case Fn:e:{for(C=g.key;c!==null;){if(c.key===C)if(c.tag===4&&c.stateNode.containerInfo===g.containerInfo&&c.stateNode.implementation===g.implementation){n(p,c.sibling),c=o(c,g.children||[]),c.return=p,p=c;break e}else{n(p,c);break}else t(p,c);c=c.sibling}c=Fl(g,p.mode,_),c.return=p,p=c}return l(p);case Dt:return C=g._init,T(p,c,C(g._payload),_)}if(Or(g))return y(p,c,g,_);if(_r(g))return b(p,c,g,_);Bo(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,c!==null&&c.tag===6?(n(p,c.sibling),c=o(c,g),c.return=p,p=c):(n(p,c),c=Dl(g,p.mode,_),c.return=p,p=c),l(p)):n(p,c)}return T}var ar=yh(!0),wh=yh(!1),xo={},bt=an(xo),lo=an(xo),so=an(xo);function bn(e){if(e===xo)throw Error(k(174));return e}function Ta(e,t){switch(K(so,t),K(lo,e),K(bt,xo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:cs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=cs(t,e)}G(bt),K(bt,t)}function ur(){G(bt),G(lo),G(so)}function bh(e){bn(so.current);var t=bn(bt.current),n=cs(t,e.type);t!==n&&(K(lo,e),K(bt,n))}function La(e){lo.current===e&&(G(bt),G(lo))}var J=an(0);function Ai(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Tl=[];function Na(){for(var e=0;e<Tl.length;e++)Tl[e]._workInProgressVersionPrimary=null;Tl.length=0}var ri=Nt.ReactCurrentDispatcher,Ll=Nt.ReactCurrentBatchConfig,$n=0,ee=null,ae=null,de=null,Pi=!1,Ur=!1,ao=0,Fg=0;function ye(){throw Error(k(321))}function Ra(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ft(e[n],t[n]))return!1;return!0}function Ma(e,t,n,r,o,i){if($n=i,ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ri.current=e===null||e.memoizedState===null?jg:Hg,e=n(r,o),Ur){i=0;do{if(Ur=!1,ao=0,25<=i)throw Error(k(301));i+=1,de=ae=null,t.updateQueue=null,ri.current=Ug,e=n(r,o)}while(Ur)}if(ri.current=Ti,t=ae!==null&&ae.next!==null,$n=0,de=ae=ee=null,Pi=!1,t)throw Error(k(300));return e}function Oa(){var e=ao!==0;return ao=0,e}function vt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return de===null?ee.memoizedState=de=e:de=de.next=e,de}function rt(){if(ae===null){var e=ee.alternate;e=e!==null?e.memoizedState:null}else e=ae.next;var t=de===null?ee.memoizedState:de.next;if(t!==null)de=t,ae=e;else{if(e===null)throw Error(k(310));ae=e,e={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},de===null?ee.memoizedState=de=e:de=de.next=e}return de}function uo(e,t){return typeof t=="function"?t(e):t}function Nl(e){var t=rt(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=ae,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=l=null,a=null,u=i;do{var h=u.lane;if(($n&h)===h)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(s=a=d,l=r):a=a.next=d,ee.lanes|=h,zn|=h}u=u.next}while(u!==null&&u!==i);a===null?l=r:a.next=s,ft(r,t.memoizedState)||(Te=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,ee.lanes|=i,zn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Rl(e){var t=rt(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);ft(i,t.memoizedState)||(Te=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function _h(){}function xh(e,t){var n=ee,r=rt(),o=t(),i=!ft(r.memoizedState,o);if(i&&(r.memoizedState=o,Te=!0),r=r.queue,Da(Ch.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||de!==null&&de.memoizedState.tag&1){if(n.flags|=2048,co(9,Sh.bind(null,n,r,o,t),void 0,null),he===null)throw Error(k(349));$n&30||kh(n,t,o)}return o}function kh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ee.updateQueue,t===null?(t={lastEffect:null,stores:null},ee.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Sh(e,t,n,r){t.value=n,t.getSnapshot=r,Eh(t)&&$h(e)}function Ch(e,t,n){return n(function(){Eh(t)&&$h(e)})}function Eh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ft(e,n)}catch{return!0}}function $h(e){var t=Pt(e,1);t!==null&&pt(t,e,1,-1)}function Ju(e){var t=vt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:uo,lastRenderedState:e},t.queue=e,e=e.dispatch=Bg.bind(null,ee,e),[t.memoizedState,e]}function co(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ee.updateQueue,t===null?(t={lastEffect:null,stores:null},ee.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function zh(){return rt().memoizedState}function oi(e,t,n,r){var o=vt();ee.flags|=e,o.memoizedState=co(1|t,n,void 0,r===void 0?null:r)}function Zi(e,t,n,r){var o=rt();r=r===void 0?null:r;var i=void 0;if(ae!==null){var l=ae.memoizedState;if(i=l.destroy,r!==null&&Ra(r,l.deps)){o.memoizedState=co(t,n,i,r);return}}ee.flags|=e,o.memoizedState=co(1|t,n,i,r)}function ec(e,t){return oi(8390656,8,e,t)}function Da(e,t){return Zi(2048,8,e,t)}function Ah(e,t){return Zi(4,2,e,t)}function Ph(e,t){return Zi(4,4,e,t)}function Th(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Lh(e,t,n){return n=n!=null?n.concat([e]):null,Zi(4,4,Th.bind(null,t,e),n)}function Fa(){}function Nh(e,t){var n=rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ra(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Rh(e,t){var n=rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ra(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Mh(e,t,n){return $n&21?(ft(n,t)||(n=Fd(),ee.lanes|=n,zn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Te=!0),e.memoizedState=n)}function Ig(e,t){var n=U;U=n!==0&&4>n?n:4,e(!0);var r=Ll.transition;Ll.transition={};try{e(!1),t()}finally{U=n,Ll.transition=r}}function Oh(){return rt().memoizedState}function Vg(e,t,n){var r=Zt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Dh(e))Fh(t,n);else if(n=fh(e,t,n,r),n!==null){var o=Se();pt(n,e,r,o),Ih(n,t,r)}}function Bg(e,t,n){var r=Zt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Dh(e))Fh(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,n);if(o.hasEagerState=!0,o.eagerState=s,ft(s,l)){var a=t.interleaved;a===null?(o.next=o,Aa(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=fh(e,t,o,r),n!==null&&(o=Se(),pt(n,e,r,o),Ih(n,t,r))}}function Dh(e){var t=e.alternate;return e===ee||t!==null&&t===ee}function Fh(e,t){Ur=Pi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ih(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ga(e,n)}}var Ti={readContext:nt,useCallback:ye,useContext:ye,useEffect:ye,useImperativeHandle:ye,useInsertionEffect:ye,useLayoutEffect:ye,useMemo:ye,useReducer:ye,useRef:ye,useState:ye,useDebugValue:ye,useDeferredValue:ye,useTransition:ye,useMutableSource:ye,useSyncExternalStore:ye,useId:ye,unstable_isNewReconciler:!1},jg={readContext:nt,useCallback:function(e,t){return vt().memoizedState=[e,t===void 0?null:t],e},useContext:nt,useEffect:ec,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,oi(4194308,4,Th.bind(null,t,e),n)},useLayoutEffect:function(e,t){return oi(4194308,4,e,t)},useInsertionEffect:function(e,t){return oi(4,2,e,t)},useMemo:function(e,t){var n=vt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=vt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Vg.bind(null,ee,e),[r.memoizedState,e]},useRef:function(e){var t=vt();return e={current:e},t.memoizedState=e},useState:Ju,useDebugValue:Fa,useDeferredValue:function(e){return vt().memoizedState=e},useTransition:function(){var e=Ju(!1),t=e[0];return e=Ig.bind(null,e[1]),vt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ee,o=vt();if(Z){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),he===null)throw Error(k(349));$n&30||kh(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,ec(Ch.bind(null,r,i,e),[e]),r.flags|=2048,co(9,Sh.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=vt(),t=he.identifierPrefix;if(Z){var n=Et,r=Ct;n=(r&~(1<<32-ht(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ao++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Fg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Hg={readContext:nt,useCallback:Nh,useContext:nt,useEffect:Da,useImperativeHandle:Lh,useInsertionEffect:Ah,useLayoutEffect:Ph,useMemo:Rh,useReducer:Nl,useRef:zh,useState:function(){return Nl(uo)},useDebugValue:Fa,useDeferredValue:function(e){var t=rt();return Mh(t,ae.memoizedState,e)},useTransition:function(){var e=Nl(uo)[0],t=rt().memoizedState;return[e,t]},useMutableSource:_h,useSyncExternalStore:xh,useId:Oh,unstable_isNewReconciler:!1},Ug={readContext:nt,useCallback:Nh,useContext:nt,useEffect:Da,useImperativeHandle:Lh,useInsertionEffect:Ah,useLayoutEffect:Ph,useMemo:Rh,useReducer:Rl,useRef:zh,useState:function(){return Rl(uo)},useDebugValue:Fa,useDeferredValue:function(e){var t=rt();return ae===null?t.memoizedState=e:Mh(t,ae.memoizedState,e)},useTransition:function(){var e=Rl(uo)[0],t=rt().memoizedState;return[e,t]},useMutableSource:_h,useSyncExternalStore:xh,useId:Oh,unstable_isNewReconciler:!1};function cr(e,t){try{var n="",r=t;do n+=yf(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Ml(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ns(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Wg=typeof WeakMap=="function"?WeakMap:Map;function Vh(e,t,n){n=$t(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ni||(Ni=!0,Hs=r),Ns(e,t)},n}function Bh(e,t,n){n=$t(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Ns(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ns(e,t),typeof r!="function"&&(Xt===null?Xt=new Set([this]):Xt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function tc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Wg;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=im.bind(null,e,t,n),t.then(e,e))}function nc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function rc(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=$t(-1,1),t.tag=2,qt(n,t,1))),n.lanes|=1),e)}var Kg=Nt.ReactCurrentOwner,Te=!1;function ke(e,t,n,r){t.child=e===null?wh(t,null,n,r):ar(t,e.child,n,r)}function oc(e,t,n,r,o){n=n.render;var i=t.ref;return nr(t,o),r=Ma(e,t,n,r,i,o),n=Oa(),e!==null&&!Te?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Tt(e,t,o)):(Z&&n&&ka(t),t.flags|=1,ke(e,t,r,o),t.child)}function ic(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Ka(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,jh(e,t,i,r,o)):(e=ai(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:no,n(l,r)&&e.ref===t.ref)return Tt(e,t,o)}return t.flags|=1,e=Jt(i,r),e.ref=t.ref,e.return=t,t.child=e}function jh(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(no(i,r)&&e.ref===t.ref)if(Te=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Te=!0);else return t.lanes=e.lanes,Tt(e,t,o)}return Rs(e,t,n,r,o)}function Hh(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},K(Yn,Ie),Ie|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,K(Yn,Ie),Ie|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,K(Yn,Ie),Ie|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,K(Yn,Ie),Ie|=r;return ke(e,t,o,n),t.child}function Uh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Rs(e,t,n,r,o){var i=Ne(n)?Cn:_e.current;return i=lr(t,i),nr(t,o),n=Ma(e,t,n,r,i,o),r=Oa(),e!==null&&!Te?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Tt(e,t,o)):(Z&&r&&ka(t),t.flags|=1,ke(e,t,n,o),t.child)}function lc(e,t,n,r,o){if(Ne(n)){var i=!0;ki(t)}else i=!1;if(nr(t,o),t.stateNode===null)ii(e,t),vh(t,n,r),Ls(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var a=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=nt(u):(u=Ne(n)?Cn:_e.current,u=lr(t,u));var h=n.getDerivedStateFromProps,d=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";d||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||a!==u)&&Xu(t,l,r,u),Ft=!1;var f=t.memoizedState;l.state=f,zi(t,r,l,o),a=t.memoizedState,s!==r||f!==a||Le.current||Ft?(typeof h=="function"&&(Ts(t,n,h,r),a=t.memoizedState),(s=Ft||qu(t,n,s,r,f,a,u))?(d||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),l.props=r,l.state=a,l.context=u,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,gh(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:ut(t.type,s),l.props=u,d=t.pendingProps,f=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=nt(a):(a=Ne(n)?Cn:_e.current,a=lr(t,a));var v=n.getDerivedStateFromProps;(h=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==d||f!==a)&&Xu(t,l,r,a),Ft=!1,f=t.memoizedState,l.state=f,zi(t,r,l,o);var y=t.memoizedState;s!==d||f!==y||Le.current||Ft?(typeof v=="function"&&(Ts(t,n,v,r),y=t.memoizedState),(u=Ft||qu(t,n,u,r,f,y,a)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,y,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,y,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),l.props=r,l.state=y,l.context=a,r=u):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Ms(e,t,n,r,i,o)}function Ms(e,t,n,r,o,i){Uh(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&Wu(t,n,!1),Tt(e,t,i);r=t.stateNode,Kg.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=ar(t,e.child,null,i),t.child=ar(t,null,s,i)):ke(e,t,s,i),t.memoizedState=r.state,o&&Wu(t,n,!0),t.child}function Wh(e){var t=e.stateNode;t.pendingContext?Uu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Uu(e,t.context,!1),Ta(e,t.containerInfo)}function sc(e,t,n,r,o){return sr(),Ca(o),t.flags|=256,ke(e,t,n,r),t.child}var Os={dehydrated:null,treeContext:null,retryLane:0};function Ds(e){return{baseLanes:e,cachePool:null,transitions:null}}function Kh(e,t,n){var r=t.pendingProps,o=J.current,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),K(J,o&1),e===null)return As(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=tl(l,r,0,null),e=Sn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ds(n),t.memoizedState=Os,e):Ia(t,l));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return Qg(e,t,l,r,s,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,s=o.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Jt(o,a),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=Jt(s,i):(i=Sn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Ds(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Os,r}return i=e.child,e=i.sibling,r=Jt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ia(e,t){return t=tl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function jo(e,t,n,r){return r!==null&&Ca(r),ar(t,e.child,null,n),e=Ia(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Qg(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=Ml(Error(k(422))),jo(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=tl({mode:"visible",children:r.children},o,0,null),i=Sn(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&ar(t,e.child,null,l),t.child.memoizedState=Ds(l),t.memoizedState=Os,i);if(!(t.mode&1))return jo(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(k(419)),r=Ml(i,r,void 0),jo(e,t,l,r)}if(s=(l&e.childLanes)!==0,Te||s){if(r=he,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Pt(e,o),pt(r,e,o,-1))}return Wa(),r=Ml(Error(k(421))),jo(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=lm.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,je=Yt(o.nextSibling),He=t,Z=!0,dt=null,e!==null&&(Xe[Ze++]=Ct,Xe[Ze++]=Et,Xe[Ze++]=En,Ct=e.id,Et=e.overflow,En=t),t=Ia(t,r.children),t.flags|=4096,t)}function ac(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ps(e.return,t,n)}function Ol(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Qh(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(ke(e,t,r.children,n),r=J.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ac(e,n,t);else if(e.tag===19)ac(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(K(J,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Ai(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Ol(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Ai(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Ol(t,!0,n,null,i);break;case"together":Ol(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ii(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Tt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),zn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=Jt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Jt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Gg(e,t,n){switch(t.tag){case 3:Wh(t),sr();break;case 5:bh(t);break;case 1:Ne(t.type)&&ki(t);break;case 4:Ta(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;K(Ei,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(K(J,J.current&1),t.flags|=128,null):n&t.child.childLanes?Kh(e,t,n):(K(J,J.current&1),e=Tt(e,t,n),e!==null?e.sibling:null);K(J,J.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Qh(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),K(J,J.current),r)break;return null;case 22:case 23:return t.lanes=0,Hh(e,t,n)}return Tt(e,t,n)}var Gh,Fs,Yh,qh;Gh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Fs=function(){};Yh=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,bn(bt.current);var i=null;switch(n){case"input":o=ls(e,o),r=ls(e,r),i=[];break;case"select":o=te({},o,{value:void 0}),r=te({},r,{value:void 0}),i=[];break;case"textarea":o=us(e,o),r=us(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=_i)}ds(n,r);var l;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var s=o[u];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Yr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var a=r[u];if(s=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&a!==s&&(a!=null||s!=null))if(u==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(i||(i=[]),i.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(i=i||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Yr.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&Q("scroll",e),i||s===a||(i=[])):(i=i||[]).push(u,a))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};qh=function(e,t,n,r){n!==r&&(t.flags|=4)};function $r(e,t){if(!Z)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function we(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Yg(e,t,n){var r=t.pendingProps;switch(Sa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return we(t),null;case 1:return Ne(t.type)&&xi(),we(t),null;case 3:return r=t.stateNode,ur(),G(Le),G(_e),Na(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Vo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,dt!==null&&(Ks(dt),dt=null))),Fs(e,t),we(t),null;case 5:La(t);var o=bn(so.current);if(n=t.type,e!==null&&t.stateNode!=null)Yh(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return we(t),null}if(e=bn(bt.current),Vo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[yt]=t,r[io]=i,e=(t.mode&1)!==0,n){case"dialog":Q("cancel",r),Q("close",r);break;case"iframe":case"object":case"embed":Q("load",r);break;case"video":case"audio":for(o=0;o<Fr.length;o++)Q(Fr[o],r);break;case"source":Q("error",r);break;case"img":case"image":case"link":Q("error",r),Q("load",r);break;case"details":Q("toggle",r);break;case"input":vu(r,i),Q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Q("invalid",r);break;case"textarea":wu(r,i),Q("invalid",r)}ds(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Io(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Io(r.textContent,s,e),o=["children",""+s]):Yr.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&Q("scroll",r)}switch(n){case"input":To(r),yu(r,i,!0);break;case"textarea":To(r),bu(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=_i)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=kd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[yt]=t,e[io]=r,Gh(e,t,!1,!1),t.stateNode=e;e:{switch(l=hs(n,r),n){case"dialog":Q("cancel",e),Q("close",e),o=r;break;case"iframe":case"object":case"embed":Q("load",e),o=r;break;case"video":case"audio":for(o=0;o<Fr.length;o++)Q(Fr[o],e);o=r;break;case"source":Q("error",e),o=r;break;case"img":case"image":case"link":Q("error",e),Q("load",e),o=r;break;case"details":Q("toggle",e),o=r;break;case"input":vu(e,r),o=ls(e,r),Q("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=te({},r,{value:void 0}),Q("invalid",e);break;case"textarea":wu(e,r),o=us(e,r),Q("invalid",e);break;default:o=r}ds(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var a=s[i];i==="style"?Ed(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Sd(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&qr(e,a):typeof a=="number"&&qr(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Yr.hasOwnProperty(i)?a!=null&&i==="onScroll"&&Q("scroll",e):a!=null&&ua(e,i,a,l))}switch(n){case"input":To(e),yu(e,r,!1);break;case"textarea":To(e),bu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+en(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Zn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Zn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=_i)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return we(t),null;case 6:if(e&&t.stateNode!=null)qh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=bn(so.current),bn(bt.current),Vo(t)){if(r=t.stateNode,n=t.memoizedProps,r[yt]=t,(i=r.nodeValue!==n)&&(e=He,e!==null))switch(e.tag){case 3:Io(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Io(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[yt]=t,t.stateNode=r}return we(t),null;case 13:if(G(J),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Z&&je!==null&&t.mode&1&&!(t.flags&128))ph(),sr(),t.flags|=98560,i=!1;else if(i=Vo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(k(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(k(317));i[yt]=t}else sr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;we(t),i=!1}else dt!==null&&(Ks(dt),dt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||J.current&1?ue===0&&(ue=3):Wa())),t.updateQueue!==null&&(t.flags|=4),we(t),null);case 4:return ur(),Fs(e,t),e===null&&ro(t.stateNode.containerInfo),we(t),null;case 10:return za(t.type._context),we(t),null;case 17:return Ne(t.type)&&xi(),we(t),null;case 19:if(G(J),i=t.memoizedState,i===null)return we(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)$r(i,!1);else{if(ue!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Ai(e),l!==null){for(t.flags|=128,$r(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return K(J,J.current&1|2),t.child}e=e.sibling}i.tail!==null&&oe()>dr&&(t.flags|=128,r=!0,$r(i,!1),t.lanes=4194304)}else{if(!r)if(e=Ai(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),$r(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!Z)return we(t),null}else 2*oe()-i.renderingStartTime>dr&&n!==1073741824&&(t.flags|=128,r=!0,$r(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=oe(),t.sibling=null,n=J.current,K(J,r?n&1|2:n&1),t):(we(t),null);case 22:case 23:return Ua(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ie&1073741824&&(we(t),t.subtreeFlags&6&&(t.flags|=8192)):we(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function qg(e,t){switch(Sa(t),t.tag){case 1:return Ne(t.type)&&xi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ur(),G(Le),G(_e),Na(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return La(t),null;case 13:if(G(J),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));sr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(J),null;case 4:return ur(),null;case 10:return za(t.type._context),null;case 22:case 23:return Ua(),null;case 24:return null;default:return null}}var Ho=!1,be=!1,Xg=typeof WeakSet=="function"?WeakSet:Set,P=null;function Gn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ne(e,t,r)}else n.current=null}function Is(e,t,n){try{n()}catch(r){ne(e,t,r)}}var uc=!1;function Zg(e,t){if(xs=yi,e=eh(),xa(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,s=-1,a=-1,u=0,h=0,d=e,f=null;t:for(;;){for(var v;d!==n||o!==0&&d.nodeType!==3||(s=l+o),d!==i||r!==0&&d.nodeType!==3||(a=l+r),d.nodeType===3&&(l+=d.nodeValue.length),(v=d.firstChild)!==null;)f=d,d=v;for(;;){if(d===e)break t;if(f===n&&++u===o&&(s=l),f===i&&++h===r&&(a=l),(v=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=v}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(ks={focusedElem:e,selectionRange:n},yi=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var b=y.memoizedProps,T=y.memoizedState,p=t.stateNode,c=p.getSnapshotBeforeUpdate(t.elementType===t.type?b:ut(t.type,b),T);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(_){ne(t,t.return,_)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return y=uc,uc=!1,y}function Wr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Is(t,n,i)}o=o.next}while(o!==r)}}function Ji(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Vs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Xh(e){var t=e.alternate;t!==null&&(e.alternate=null,Xh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[yt],delete t[io],delete t[Es],delete t[Rg],delete t[Mg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Zh(e){return e.tag===5||e.tag===3||e.tag===4}function cc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Zh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Bs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=_i));else if(r!==4&&(e=e.child,e!==null))for(Bs(e,t,n),e=e.sibling;e!==null;)Bs(e,t,n),e=e.sibling}function js(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(js(e,t,n),e=e.sibling;e!==null;)js(e,t,n),e=e.sibling}var fe=null,ct=!1;function Mt(e,t,n){for(n=n.child;n!==null;)Jh(e,t,n),n=n.sibling}function Jh(e,t,n){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(Wi,n)}catch{}switch(n.tag){case 5:be||Gn(n,t);case 6:var r=fe,o=ct;fe=null,Mt(e,t,n),fe=r,ct=o,fe!==null&&(ct?(e=fe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):fe.removeChild(n.stateNode));break;case 18:fe!==null&&(ct?(e=fe,n=n.stateNode,e.nodeType===8?Al(e.parentNode,n):e.nodeType===1&&Al(e,n),eo(e)):Al(fe,n.stateNode));break;case 4:r=fe,o=ct,fe=n.stateNode.containerInfo,ct=!0,Mt(e,t,n),fe=r,ct=o;break;case 0:case 11:case 14:case 15:if(!be&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Is(n,t,l),o=o.next}while(o!==r)}Mt(e,t,n);break;case 1:if(!be&&(Gn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ne(n,t,s)}Mt(e,t,n);break;case 21:Mt(e,t,n);break;case 22:n.mode&1?(be=(r=be)||n.memoizedState!==null,Mt(e,t,n),be=r):Mt(e,t,n);break;default:Mt(e,t,n)}}function dc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Xg),t.forEach(function(r){var o=sm.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function st(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:fe=s.stateNode,ct=!1;break e;case 3:fe=s.stateNode.containerInfo,ct=!0;break e;case 4:fe=s.stateNode.containerInfo,ct=!0;break e}s=s.return}if(fe===null)throw Error(k(160));Jh(i,l,o),fe=null,ct=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(u){ne(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ep(t,e),t=t.sibling}function ep(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(st(t,e),mt(e),r&4){try{Wr(3,e,e.return),Ji(3,e)}catch(b){ne(e,e.return,b)}try{Wr(5,e,e.return)}catch(b){ne(e,e.return,b)}}break;case 1:st(t,e),mt(e),r&512&&n!==null&&Gn(n,n.return);break;case 5:if(st(t,e),mt(e),r&512&&n!==null&&Gn(n,n.return),e.flags&32){var o=e.stateNode;try{qr(o,"")}catch(b){ne(e,e.return,b)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&_d(o,i),hs(s,l);var u=hs(s,i);for(l=0;l<a.length;l+=2){var h=a[l],d=a[l+1];h==="style"?Ed(o,d):h==="dangerouslySetInnerHTML"?Sd(o,d):h==="children"?qr(o,d):ua(o,h,d,u)}switch(s){case"input":ss(o,i);break;case"textarea":xd(o,i);break;case"select":var f=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?Zn(o,!!i.multiple,v,!1):f!==!!i.multiple&&(i.defaultValue!=null?Zn(o,!!i.multiple,i.defaultValue,!0):Zn(o,!!i.multiple,i.multiple?[]:"",!1))}o[io]=i}catch(b){ne(e,e.return,b)}}break;case 6:if(st(t,e),mt(e),r&4){if(e.stateNode===null)throw Error(k(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(b){ne(e,e.return,b)}}break;case 3:if(st(t,e),mt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{eo(t.containerInfo)}catch(b){ne(e,e.return,b)}break;case 4:st(t,e),mt(e);break;case 13:st(t,e),mt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(ja=oe())),r&4&&dc(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(be=(u=be)||h,st(t,e),be=u):st(t,e),mt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!h&&e.mode&1)for(P=e,h=e.child;h!==null;){for(d=P=h;P!==null;){switch(f=P,v=f.child,f.tag){case 0:case 11:case 14:case 15:Wr(4,f,f.return);break;case 1:Gn(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(b){ne(r,n,b)}}break;case 5:Gn(f,f.return);break;case 22:if(f.memoizedState!==null){pc(d);continue}}v!==null?(v.return=f,P=v):pc(d)}h=h.sibling}e:for(h=null,d=e;;){if(d.tag===5){if(h===null){h=d;try{o=d.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=d.stateNode,a=d.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Cd("display",l))}catch(b){ne(e,e.return,b)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(b){ne(e,e.return,b)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:st(t,e),mt(e),r&4&&dc(e);break;case 21:break;default:st(t,e),mt(e)}}function mt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Zh(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(qr(o,""),r.flags&=-33);var i=cc(e);js(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,s=cc(e);Bs(e,s,l);break;default:throw Error(k(161))}}catch(a){ne(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Jg(e,t,n){P=e,tp(e)}function tp(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var o=P,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||Ho;if(!l){var s=o.alternate,a=s!==null&&s.memoizedState!==null||be;s=Ho;var u=be;if(Ho=l,(be=a)&&!u)for(P=o;P!==null;)l=P,a=l.child,l.tag===22&&l.memoizedState!==null?fc(o):a!==null?(a.return=l,P=a):fc(o);for(;i!==null;)P=i,tp(i),i=i.sibling;P=o,Ho=s,be=u}hc(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,P=i):hc(e)}}function hc(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:be||Ji(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!be)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:ut(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Yu(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Yu(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&eo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}be||t.flags&512&&Vs(t)}catch(f){ne(t,t.return,f)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function pc(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function fc(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ji(4,t)}catch(a){ne(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){ne(t,o,a)}}var i=t.return;try{Vs(t)}catch(a){ne(t,i,a)}break;case 5:var l=t.return;try{Vs(t)}catch(a){ne(t,l,a)}}}catch(a){ne(t,t.return,a)}if(t===e){P=null;break}var s=t.sibling;if(s!==null){s.return=t.return,P=s;break}P=t.return}}var em=Math.ceil,Li=Nt.ReactCurrentDispatcher,Va=Nt.ReactCurrentOwner,tt=Nt.ReactCurrentBatchConfig,B=0,he=null,se=null,ge=0,Ie=0,Yn=an(0),ue=0,ho=null,zn=0,el=0,Ba=0,Kr=null,Pe=null,ja=0,dr=1/0,kt=null,Ni=!1,Hs=null,Xt=null,Uo=!1,Ut=null,Ri=0,Qr=0,Us=null,li=-1,si=0;function Se(){return B&6?oe():li!==-1?li:li=oe()}function Zt(e){return e.mode&1?B&2&&ge!==0?ge&-ge:Dg.transition!==null?(si===0&&(si=Fd()),si):(e=U,e!==0||(e=window.event,e=e===void 0?16:Wd(e.type)),e):1}function pt(e,t,n,r){if(50<Qr)throw Qr=0,Us=null,Error(k(185));wo(e,n,r),(!(B&2)||e!==he)&&(e===he&&(!(B&2)&&(el|=n),ue===4&&Bt(e,ge)),Re(e,r),n===1&&B===0&&!(t.mode&1)&&(dr=oe()+500,qi&&un()))}function Re(e,t){var n=e.callbackNode;Df(e,t);var r=vi(e,e===he?ge:0);if(r===0)n!==null&&ku(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ku(n),t===1)e.tag===0?Og(gc.bind(null,e)):ch(gc.bind(null,e)),Lg(function(){!(B&6)&&un()}),n=null;else{switch(Id(r)){case 1:n=fa;break;case 4:n=Od;break;case 16:n=mi;break;case 536870912:n=Dd;break;default:n=mi}n=up(n,np.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function np(e,t){if(li=-1,si=0,B&6)throw Error(k(327));var n=e.callbackNode;if(rr()&&e.callbackNode!==n)return null;var r=vi(e,e===he?ge:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Mi(e,r);else{t=r;var o=B;B|=2;var i=op();(he!==e||ge!==t)&&(kt=null,dr=oe()+500,kn(e,t));do try{rm();break}catch(s){rp(e,s)}while(1);$a(),Li.current=i,B=o,se!==null?t=0:(he=null,ge=0,t=ue)}if(t!==0){if(t===2&&(o=vs(e),o!==0&&(r=o,t=Ws(e,o))),t===1)throw n=ho,kn(e,0),Bt(e,r),Re(e,oe()),n;if(t===6)Bt(e,r);else{if(o=e.current.alternate,!(r&30)&&!tm(o)&&(t=Mi(e,r),t===2&&(i=vs(e),i!==0&&(r=i,t=Ws(e,i))),t===1))throw n=ho,kn(e,0),Bt(e,r),Re(e,oe()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:fn(e,Pe,kt);break;case 3:if(Bt(e,r),(r&130023424)===r&&(t=ja+500-oe(),10<t)){if(vi(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Se(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Cs(fn.bind(null,e,Pe,kt),t);break}fn(e,Pe,kt);break;case 4:if(Bt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-ht(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*em(r/1960))-r,10<r){e.timeoutHandle=Cs(fn.bind(null,e,Pe,kt),r);break}fn(e,Pe,kt);break;case 5:fn(e,Pe,kt);break;default:throw Error(k(329))}}}return Re(e,oe()),e.callbackNode===n?np.bind(null,e):null}function Ws(e,t){var n=Kr;return e.current.memoizedState.isDehydrated&&(kn(e,t).flags|=256),e=Mi(e,t),e!==2&&(t=Pe,Pe=n,t!==null&&Ks(t)),e}function Ks(e){Pe===null?Pe=e:Pe.push.apply(Pe,e)}function tm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!ft(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Bt(e,t){for(t&=~Ba,t&=~el,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ht(t),r=1<<n;e[n]=-1,t&=~r}}function gc(e){if(B&6)throw Error(k(327));rr();var t=vi(e,0);if(!(t&1))return Re(e,oe()),null;var n=Mi(e,t);if(e.tag!==0&&n===2){var r=vs(e);r!==0&&(t=r,n=Ws(e,r))}if(n===1)throw n=ho,kn(e,0),Bt(e,t),Re(e,oe()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,fn(e,Pe,kt),Re(e,oe()),null}function Ha(e,t){var n=B;B|=1;try{return e(t)}finally{B=n,B===0&&(dr=oe()+500,qi&&un())}}function An(e){Ut!==null&&Ut.tag===0&&!(B&6)&&rr();var t=B;B|=1;var n=tt.transition,r=U;try{if(tt.transition=null,U=1,e)return e()}finally{U=r,tt.transition=n,B=t,!(B&6)&&un()}}function Ua(){Ie=Yn.current,G(Yn)}function kn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Tg(n)),se!==null)for(n=se.return;n!==null;){var r=n;switch(Sa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&xi();break;case 3:ur(),G(Le),G(_e),Na();break;case 5:La(r);break;case 4:ur();break;case 13:G(J);break;case 19:G(J);break;case 10:za(r.type._context);break;case 22:case 23:Ua()}n=n.return}if(he=e,se=e=Jt(e.current,null),ge=Ie=t,ue=0,ho=null,Ba=el=zn=0,Pe=Kr=null,wn!==null){for(t=0;t<wn.length;t++)if(n=wn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}wn=null}return e}function rp(e,t){do{var n=se;try{if($a(),ri.current=Ti,Pi){for(var r=ee.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Pi=!1}if($n=0,de=ae=ee=null,Ur=!1,ao=0,Va.current=null,n===null||n.return===null){ue=1,ho=t,se=null;break}e:{var i=e,l=n.return,s=n,a=t;if(t=ge,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,h=s,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var v=nc(l);if(v!==null){v.flags&=-257,rc(v,l,s,i,t),v.mode&1&&tc(i,u,t),t=v,a=u;var y=t.updateQueue;if(y===null){var b=new Set;b.add(a),t.updateQueue=b}else y.add(a);break e}else{if(!(t&1)){tc(i,u,t),Wa();break e}a=Error(k(426))}}else if(Z&&s.mode&1){var T=nc(l);if(T!==null){!(T.flags&65536)&&(T.flags|=256),rc(T,l,s,i,t),Ca(cr(a,s));break e}}i=a=cr(a,s),ue!==4&&(ue=2),Kr===null?Kr=[i]:Kr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var p=Vh(i,a,t);Gu(i,p);break e;case 1:s=a;var c=i.type,g=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Xt===null||!Xt.has(g)))){i.flags|=65536,t&=-t,i.lanes|=t;var _=Bh(i,s,t);Gu(i,_);break e}}i=i.return}while(i!==null)}lp(n)}catch(x){t=x,se===n&&n!==null&&(se=n=n.return);continue}break}while(1)}function op(){var e=Li.current;return Li.current=Ti,e===null?Ti:e}function Wa(){(ue===0||ue===3||ue===2)&&(ue=4),he===null||!(zn&268435455)&&!(el&268435455)||Bt(he,ge)}function Mi(e,t){var n=B;B|=2;var r=op();(he!==e||ge!==t)&&(kt=null,kn(e,t));do try{nm();break}catch(o){rp(e,o)}while(1);if($a(),B=n,Li.current=r,se!==null)throw Error(k(261));return he=null,ge=0,ue}function nm(){for(;se!==null;)ip(se)}function rm(){for(;se!==null&&!zf();)ip(se)}function ip(e){var t=ap(e.alternate,e,Ie);e.memoizedProps=e.pendingProps,t===null?lp(e):se=t,Va.current=null}function lp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=qg(n,t),n!==null){n.flags&=32767,se=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ue=6,se=null;return}}else if(n=Yg(n,t,Ie),n!==null){se=n;return}if(t=t.sibling,t!==null){se=t;return}se=t=e}while(t!==null);ue===0&&(ue=5)}function fn(e,t,n){var r=U,o=tt.transition;try{tt.transition=null,U=1,om(e,t,n,r)}finally{tt.transition=o,U=r}return null}function om(e,t,n,r){do rr();while(Ut!==null);if(B&6)throw Error(k(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Ff(e,i),e===he&&(se=he=null,ge=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Uo||(Uo=!0,up(mi,function(){return rr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=tt.transition,tt.transition=null;var l=U;U=1;var s=B;B|=4,Va.current=null,Zg(e,n),ep(n,e),Sg(ks),yi=!!xs,ks=xs=null,e.current=n,Jg(n),Af(),B=s,U=l,tt.transition=i}else e.current=n;if(Uo&&(Uo=!1,Ut=e,Ri=o),i=e.pendingLanes,i===0&&(Xt=null),Lf(n.stateNode),Re(e,oe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Ni)throw Ni=!1,e=Hs,Hs=null,e;return Ri&1&&e.tag!==0&&rr(),i=e.pendingLanes,i&1?e===Us?Qr++:(Qr=0,Us=e):Qr=0,un(),null}function rr(){if(Ut!==null){var e=Id(Ri),t=tt.transition,n=U;try{if(tt.transition=null,U=16>e?16:e,Ut===null)var r=!1;else{if(e=Ut,Ut=null,Ri=0,B&6)throw Error(k(331));var o=B;for(B|=4,P=e.current;P!==null;){var i=P,l=i.child;if(P.flags&16){var s=i.deletions;if(s!==null){for(var a=0;a<s.length;a++){var u=s[a];for(P=u;P!==null;){var h=P;switch(h.tag){case 0:case 11:case 15:Wr(8,h,i)}var d=h.child;if(d!==null)d.return=h,P=d;else for(;P!==null;){h=P;var f=h.sibling,v=h.return;if(Xh(h),h===u){P=null;break}if(f!==null){f.return=v,P=f;break}P=v}}}var y=i.alternate;if(y!==null){var b=y.child;if(b!==null){y.child=null;do{var T=b.sibling;b.sibling=null,b=T}while(b!==null)}}P=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,P=l;else e:for(;P!==null;){if(i=P,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Wr(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,P=p;break e}P=i.return}}var c=e.current;for(P=c;P!==null;){l=P;var g=l.child;if(l.subtreeFlags&2064&&g!==null)g.return=l,P=g;else e:for(l=c;P!==null;){if(s=P,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Ji(9,s)}}catch(x){ne(s,s.return,x)}if(s===l){P=null;break e}var _=s.sibling;if(_!==null){_.return=s.return,P=_;break e}P=s.return}}if(B=o,un(),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(Wi,e)}catch{}r=!0}return r}finally{U=n,tt.transition=t}}return!1}function mc(e,t,n){t=cr(n,t),t=Vh(e,t,1),e=qt(e,t,1),t=Se(),e!==null&&(wo(e,1,t),Re(e,t))}function ne(e,t,n){if(e.tag===3)mc(e,e,n);else for(;t!==null;){if(t.tag===3){mc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Xt===null||!Xt.has(r))){e=cr(n,e),e=Bh(t,e,1),t=qt(t,e,1),e=Se(),t!==null&&(wo(t,1,e),Re(t,e));break}}t=t.return}}function im(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Se(),e.pingedLanes|=e.suspendedLanes&n,he===e&&(ge&n)===n&&(ue===4||ue===3&&(ge&130023424)===ge&&500>oe()-ja?kn(e,0):Ba|=n),Re(e,t)}function sp(e,t){t===0&&(e.mode&1?(t=Ro,Ro<<=1,!(Ro&130023424)&&(Ro=4194304)):t=1);var n=Se();e=Pt(e,t),e!==null&&(wo(e,t,n),Re(e,n))}function lm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),sp(e,n)}function sm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),sp(e,n)}var ap;ap=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Le.current)Te=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Te=!1,Gg(e,t,n);Te=!!(e.flags&131072)}else Te=!1,Z&&t.flags&1048576&&dh(t,Ci,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ii(e,t),e=t.pendingProps;var o=lr(t,_e.current);nr(t,n),o=Ma(null,t,r,e,o,n);var i=Oa();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ne(r)?(i=!0,ki(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Pa(t),o.updater=Xi,t.stateNode=o,o._reactInternals=t,Ls(t,r,e,n),t=Ms(null,t,r,!0,i,n)):(t.tag=0,Z&&i&&ka(t),ke(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ii(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=um(r),e=ut(r,e),o){case 0:t=Rs(null,t,r,e,n);break e;case 1:t=lc(null,t,r,e,n);break e;case 11:t=oc(null,t,r,e,n);break e;case 14:t=ic(null,t,r,ut(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ut(r,o),Rs(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ut(r,o),lc(e,t,r,o,n);case 3:e:{if(Wh(t),e===null)throw Error(k(387));r=t.pendingProps,i=t.memoizedState,o=i.element,gh(e,t),zi(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=cr(Error(k(423)),t),t=sc(e,t,r,n,o);break e}else if(r!==o){o=cr(Error(k(424)),t),t=sc(e,t,r,n,o);break e}else for(je=Yt(t.stateNode.containerInfo.firstChild),He=t,Z=!0,dt=null,n=wh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(sr(),r===o){t=Tt(e,t,n);break e}ke(e,t,r,n)}t=t.child}return t;case 5:return bh(t),e===null&&As(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Ss(r,o)?l=null:i!==null&&Ss(r,i)&&(t.flags|=32),Uh(e,t),ke(e,t,l,n),t.child;case 6:return e===null&&As(t),null;case 13:return Kh(e,t,n);case 4:return Ta(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ar(t,null,r,n):ke(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ut(r,o),oc(e,t,r,o,n);case 7:return ke(e,t,t.pendingProps,n),t.child;case 8:return ke(e,t,t.pendingProps.children,n),t.child;case 12:return ke(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,K(Ei,r._currentValue),r._currentValue=l,i!==null)if(ft(i.value,l)){if(i.children===o.children&&!Le.current){t=Tt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=$t(-1,n&-n),a.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?a.next=a:(a.next=h.next,h.next=a),u.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Ps(i.return,n,t),s.lanes|=n;break}a=a.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(k(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Ps(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}ke(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,nr(t,n),o=nt(o),r=r(o),t.flags|=1,ke(e,t,r,n),t.child;case 14:return r=t.type,o=ut(r,t.pendingProps),o=ut(r.type,o),ic(e,t,r,o,n);case 15:return jh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ut(r,o),ii(e,t),t.tag=1,Ne(r)?(e=!0,ki(t)):e=!1,nr(t,n),vh(t,r,o),Ls(t,r,o,n),Ms(null,t,r,!0,e,n);case 19:return Qh(e,t,n);case 22:return Hh(e,t,n)}throw Error(k(156,t.tag))};function up(e,t){return Md(e,t)}function am(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Je(e,t,n,r){return new am(e,t,n,r)}function Ka(e){return e=e.prototype,!(!e||!e.isReactComponent)}function um(e){if(typeof e=="function")return Ka(e)?1:0;if(e!=null){if(e=e.$$typeof,e===da)return 11;if(e===ha)return 14}return 2}function Jt(e,t){var n=e.alternate;return n===null?(n=Je(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ai(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")Ka(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case In:return Sn(n.children,o,i,t);case ca:l=8,o|=8;break;case ns:return e=Je(12,n,t,o|2),e.elementType=ns,e.lanes=i,e;case rs:return e=Je(13,n,t,o),e.elementType=rs,e.lanes=i,e;case os:return e=Je(19,n,t,o),e.elementType=os,e.lanes=i,e;case yd:return tl(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case md:l=10;break e;case vd:l=9;break e;case da:l=11;break e;case ha:l=14;break e;case Dt:l=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=Je(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Sn(e,t,n,r){return e=Je(7,e,r,t),e.lanes=n,e}function tl(e,t,n,r){return e=Je(22,e,r,t),e.elementType=yd,e.lanes=n,e.stateNode={isHidden:!1},e}function Dl(e,t,n){return e=Je(6,e,null,t),e.lanes=n,e}function Fl(e,t,n){return t=Je(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function cm(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=yl(0),this.expirationTimes=yl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Qa(e,t,n,r,o,i,l,s,a){return e=new cm(e,t,n,s,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Je(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pa(i),e}function dm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Fn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function cp(e){if(!e)return tn;e=e._reactInternals;e:{if(Nn(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ne(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(Ne(n))return uh(e,n,t)}return t}function dp(e,t,n,r,o,i,l,s,a){return e=Qa(n,r,!0,e,o,i,l,s,a),e.context=cp(null),n=e.current,r=Se(),o=Zt(n),i=$t(r,o),i.callback=t??null,qt(n,i,o),e.current.lanes=o,wo(e,o,r),Re(e,r),e}function nl(e,t,n,r){var o=t.current,i=Se(),l=Zt(o);return n=cp(n),t.context===null?t.context=n:t.pendingContext=n,t=$t(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=qt(o,t,l),e!==null&&(pt(e,o,l,i),ni(e,o,l)),l}function Oi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function vc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ga(e,t){vc(e,t),(e=e.alternate)&&vc(e,t)}function hm(){return null}var hp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ya(e){this._internalRoot=e}rl.prototype.render=Ya.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));nl(e,t,null,null)};rl.prototype.unmount=Ya.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;An(function(){nl(null,e,null,null)}),t[At]=null}};function rl(e){this._internalRoot=e}rl.prototype.unstable_scheduleHydration=function(e){if(e){var t=jd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Vt.length&&t!==0&&t<Vt[n].priority;n++);Vt.splice(n,0,e),n===0&&Ud(e)}};function qa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ol(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function yc(){}function pm(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=Oi(l);i.call(u)}}var l=dp(t,r,e,0,null,!1,!1,"",yc);return e._reactRootContainer=l,e[At]=l.current,ro(e.nodeType===8?e.parentNode:e),An(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var u=Oi(a);s.call(u)}}var a=Qa(e,0,!1,null,null,!1,!1,"",yc);return e._reactRootContainer=a,e[At]=a.current,ro(e.nodeType===8?e.parentNode:e),An(function(){nl(t,a,n,r)}),a}function il(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var s=o;o=function(){var a=Oi(l);s.call(a)}}nl(t,l,e,o)}else l=pm(n,t,e,o,r);return Oi(l)}Vd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Dr(t.pendingLanes);n!==0&&(ga(t,n|1),Re(t,oe()),!(B&6)&&(dr=oe()+500,un()))}break;case 13:An(function(){var r=Pt(e,1);if(r!==null){var o=Se();pt(r,e,1,o)}}),Ga(e,1)}};ma=function(e){if(e.tag===13){var t=Pt(e,134217728);if(t!==null){var n=Se();pt(t,e,134217728,n)}Ga(e,134217728)}};Bd=function(e){if(e.tag===13){var t=Zt(e),n=Pt(e,t);if(n!==null){var r=Se();pt(n,e,t,r)}Ga(e,t)}};jd=function(){return U};Hd=function(e,t){var n=U;try{return U=e,t()}finally{U=n}};fs=function(e,t,n){switch(t){case"input":if(ss(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Yi(r);if(!o)throw Error(k(90));bd(r),ss(r,o)}}}break;case"textarea":xd(e,n);break;case"select":t=n.value,t!=null&&Zn(e,!!n.multiple,t,!1)}};Ad=Ha;Pd=An;var fm={usingClientEntryPoint:!1,Events:[_o,Hn,Yi,$d,zd,Ha]},zr={findFiberByHostInstance:yn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},gm={bundleType:zr.bundleType,version:zr.version,rendererPackageName:zr.rendererPackageName,rendererConfig:zr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Nt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Nd(e),e===null?null:e.stateNode},findFiberByHostInstance:zr.findFiberByHostInstance||hm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wo.isDisabled&&Wo.supportsFiber)try{Wi=Wo.inject(gm),wt=Wo}catch{}}Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fm;Qe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qa(t))throw Error(k(200));return dm(e,t,null,n)};Qe.createRoot=function(e,t){if(!qa(e))throw Error(k(299));var n=!1,r="",o=hp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Qa(e,1,!1,null,null,n,!1,r,o),e[At]=t.current,ro(e.nodeType===8?e.parentNode:e),new Ya(t)};Qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=Nd(t),e=e===null?null:e.stateNode,e};Qe.flushSync=function(e){return An(e)};Qe.hydrate=function(e,t,n){if(!ol(t))throw Error(k(200));return il(null,e,t,!0,n)};Qe.hydrateRoot=function(e,t,n){if(!qa(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=hp;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=dp(t,null,e,1,n??null,o,!1,i,l),e[At]=t.current,ro(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new rl(t)};Qe.render=function(e,t,n){if(!ol(t))throw Error(k(200));return il(null,e,t,!1,n)};Qe.unmountComponentAtNode=function(e){if(!ol(e))throw Error(k(40));return e._reactRootContainer?(An(function(){il(null,null,e,!1,function(){e._reactRootContainer=null,e[At]=null})}),!0):!1};Qe.unstable_batchedUpdates=Ha;Qe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ol(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return il(e,t,n,!1,r)};Qe.version="18.2.0-next-9e3b772b8-20220608";function pp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pp)}catch(e){console.error(e)}}pp(),dd.exports=Qe;var mm=dd.exports,wc=mm;es.createRoot=wc.createRoot,es.hydrateRoot=wc.hydrateRoot;function vm(e){const n=["default","cwy","radar_dbz_cwb","preci_cwb","OceanLakeLandSnow"].map((r,o)=>L.jsx("option",{children:r},o));return L.jsxs(L.Fragment,{children:[L.jsx("label",{children:"Template: "}),L.jsx("select",{title:"colormaps",onChange:r=>e.changeMap(r),style:{maxWidth:"80px"},children:n})]})}function fp(e){return ym(e)}function Il(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function ym(e){for(let t=e;t;t=Il(t))if(t instanceof Element&&getComputedStyle(t).display==="none")return null;for(let t=Il(e);t;t=Il(t)){if(!(t instanceof Element))continue;const n=getComputedStyle(t);if(n.display!=="contents"&&(n.position!=="static"||n.filter!=="none"||t.tagName==="BODY"))return t}return null}function wm(e){const t=e.tagName.toLowerCase();return e.getAttribute("tabindex")==="-1"||e.hasAttribute("disabled")||e.hasAttribute("aria-disabled")&&e.getAttribute("aria-disabled")!=="false"||t==="input"&&e.getAttribute("type")==="radio"&&!e.hasAttribute("checked")||e.offsetParent===null&&fp(e)===null||window.getComputedStyle(e).visibility==="hidden"?!1:(t==="audio"||t==="video")&&e.hasAttribute("controls")||e.hasAttribute("tabindex")||e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"?!0:["button","input","select","textarea","a","audio","video","summary"].includes(t)}function bm(e){var t,n;const r=ui(e),o=(t=r[0])!=null?t:null,i=(n=r[r.length-1])!=null?n:null;return{start:o,end:i}}function ui(e){const t=[];function n(r){if(r instanceof Element){if(r.hasAttribute("inert"))return;!t.includes(r)&&wm(r)&&t.push(r);const o=i=>{var l;return((l=i.getRootNode({composed:!0}))==null?void 0:l.host)!==e};r instanceof HTMLSlotElement&&o(r)&&r.assignedElements({flatten:!0}).forEach(i=>{n(i)}),r.shadowRoot!==null&&r.shadowRoot.mode==="open"&&n(r.shadowRoot)}[...r.children].forEach(o=>n(o))}return n(e),t}function*gp(e=document.activeElement){e!=null&&(yield e,"shadowRoot"in e&&e.shadowRoot&&e.shadowRoot.mode!=="closed"&&(yield*gp(e.shadowRoot.activeElement)))}var Ar=[],_m=class{constructor(e){this.tabDirection="forward",this.handleFocusIn=()=>{this.checkFocus()},this.handleKeyDown=t=>{var n;if(t.key!=="Tab")return;t.shiftKey?this.tabDirection="backward":this.tabDirection="forward",t.preventDefault();const r=ui(this.element),o=r[0];let i=this.startElementAlreadyFocused(o)?0:this.currentFocusIndex;if(i===-1){this.currentFocus=o,this.currentFocus.focus({preventScroll:!0});return}const l=this.tabDirection==="forward"?1:-1;i+l>=r.length?i=0:this.currentFocusIndex+l<0?i=r.length-1:i+=l,this.currentFocus=r[i],(n=this.currentFocus)==null||n.focus({preventScroll:!0}),setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=e}activate(){Ar.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){Ar=Ar.filter(e=>e!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return Ar[Ar.length-1]===this.element}checkFocus(){if(this.isActive()){const e=ui(this.element);if(!this.element.matches(":focus-within")){const t=e[0],n=e[e.length-1],r=this.tabDirection==="forward"?t:n;typeof(r==null?void 0:r.focus)=="function"&&(this.currentFocus=r,r.focus({preventScroll:!0}))}}}get currentFocusIndex(){return ui(this.element).findIndex(e=>e===this.currentFocus)}startElementAlreadyFocused(e){for(const t of gp())if(e===t)return!0;return!1}},Qs=new Set;function xm(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function bc(e){if(Qs.add(e),!document.body.classList.contains("sl-scroll-lock")){const t=xm();document.body.classList.add("sl-scroll-lock"),document.body.style.setProperty("--sl-scroll-lock-size",`${t}px`)}}function _c(e){Qs.delete(e),Qs.size===0&&(document.body.classList.remove("sl-scroll-lock"),document.body.style.removeProperty("--sl-scroll-lock-size"))}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ci=window,Xa=ci.ShadowRoot&&(ci.ShadyCSS===void 0||ci.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Za=Symbol(),xc=new WeakMap;let mp=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==Za)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(Xa&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=xc.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&xc.set(n,t))}return t}toString(){return this.cssText}};const km=e=>new mp(typeof e=="string"?e:e+"",void 0,Za),Me=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((r,o,i)=>r+(l=>{if(l._$cssResult$===!0)return l.cssText;if(typeof l=="number")return l;throw Error("Value passed to 'css' function must be a 'css' function result: "+l+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1],e[0]);return new mp(n,e,Za)},Sm=(e,t)=>{Xa?e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet):t.forEach(n=>{const r=document.createElement("style"),o=ci.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=n.cssText,e.appendChild(r)})},kc=Xa?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return km(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Vl;const Di=window,Sc=Di.trustedTypes,Cm=Sc?Sc.emptyScript:"",Cc=Di.reactiveElementPolyfillSupport,po={toAttribute(e,t){switch(t){case Boolean:e=e?Cm:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},vp=(e,t)=>t!==e&&(t==t||e==e),Bl={attribute:!0,type:String,converter:po,reflect:!1,hasChanged:vp},Gs="finalized";let Dn=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var n;this.finalize(),((n=this.h)!==null&&n!==void 0?n:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((n,r)=>{const o=this._$Ep(r,n);o!==void 0&&(this._$Ev.set(o,r),t.push(o))}),t}static createProperty(t,n=Bl){if(n.state&&(n.attribute=!1),this.finalize(),this.elementProperties.set(t,n),!n.noAccessor&&!this.prototype.hasOwnProperty(t)){const r=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,r,n);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,n,r){return{get(){return this[n]},set(o){const i=this[t];this[n]=o,this.requestUpdate(t,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Bl}static finalize(){if(this.hasOwnProperty(Gs))return!1;this[Gs]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const n=this.properties,r=[...Object.getOwnPropertyNames(n),...Object.getOwnPropertySymbols(n)];for(const o of r)this.createProperty(o,n[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const o of r)n.unshift(kc(o))}else t!==void 0&&n.push(kc(t));return n}static _$Ep(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(n=>n(this))}addController(t){var n,r;((n=this._$ES)!==null&&n!==void 0?n:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)===null||r===void 0||r.call(t))}removeController(t){var n;(n=this._$ES)===null||n===void 0||n.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,n)=>{this.hasOwnProperty(n)&&(this._$Ei.set(n,this[n]),delete this[n])})}createRenderRoot(){var t;const n=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Sm(n,this.constructor.elementStyles),n}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var r;return(r=n.hostConnected)===null||r===void 0?void 0:r.call(n)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(n=>{var r;return(r=n.hostDisconnected)===null||r===void 0?void 0:r.call(n)})}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$EO(t,n,r=Bl){var o;const i=this.constructor._$Ep(t,r);if(i!==void 0&&r.reflect===!0){const l=(((o=r.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?r.converter:po).toAttribute(n,r.type);this._$El=t,l==null?this.removeAttribute(i):this.setAttribute(i,l),this._$El=null}}_$AK(t,n){var r;const o=this.constructor,i=o._$Ev.get(t);if(i!==void 0&&this._$El!==i){const l=o.getPropertyOptions(i),s=typeof l.converter=="function"?{fromAttribute:l.converter}:((r=l.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?l.converter:po;this._$El=i,this[i]=s.fromAttribute(n,l.type),this._$El=null}}requestUpdate(t,n,r){let o=!0;t!==void 0&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||vp)(this[t],n)?(this._$AL.has(t)||this._$AL.set(t,n),r.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,r))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,i)=>this[i]=o),this._$Ei=void 0);let n=!1;const r=this._$AL;try{n=this.shouldUpdate(r),n?(this.willUpdate(r),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var i;return(i=o.hostUpdate)===null||i===void 0?void 0:i.call(o)}),this.update(r)):this._$Ek()}catch(o){throw n=!1,this._$Ek(),o}n&&this._$AE(r)}willUpdate(t){}_$AE(t){var n;(n=this._$ES)===null||n===void 0||n.forEach(r=>{var o;return(o=r.hostUpdated)===null||o===void 0?void 0:o.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((n,r)=>this._$EO(r,this[r],n)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};Dn[Gs]=!0,Dn.elementProperties=new Map,Dn.elementStyles=[],Dn.shadowRootOptions={mode:"open"},Cc==null||Cc({ReactiveElement:Dn}),((Vl=Di.reactiveElementVersions)!==null&&Vl!==void 0?Vl:Di.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var jl;const Fi=window,hr=Fi.trustedTypes,Ec=hr?hr.createPolicy("lit-html",{createHTML:e=>e}):void 0,Ys="$lit$",jt=`lit$${(Math.random()+"").slice(9)}$`,yp="?"+jt,Em=`<${yp}>`,Pn=document,fo=()=>Pn.createComment(""),go=e=>e===null||typeof e!="object"&&typeof e!="function",wp=Array.isArray,$m=e=>wp(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Hl=`[ 	
\f\r]`,Pr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,$c=/-->/g,zc=/>/g,hn=RegExp(`>|${Hl}(?:([^\\s"'>=/]+)(${Hl}*=${Hl}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ac=/'/g,Pc=/"/g,bp=/^(?:script|style|textarea|title)$/i,zm=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),X=zm(1),et=Symbol.for("lit-noChange"),le=Symbol.for("lit-nothing"),Tc=new WeakMap,_n=Pn.createTreeWalker(Pn,129,null,!1);function _p(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ec!==void 0?Ec.createHTML(t):t}const Am=(e,t)=>{const n=e.length-1,r=[];let o,i=t===2?"<svg>":"",l=Pr;for(let s=0;s<n;s++){const a=e[s];let u,h,d=-1,f=0;for(;f<a.length&&(l.lastIndex=f,h=l.exec(a),h!==null);)f=l.lastIndex,l===Pr?h[1]==="!--"?l=$c:h[1]!==void 0?l=zc:h[2]!==void 0?(bp.test(h[2])&&(o=RegExp("</"+h[2],"g")),l=hn):h[3]!==void 0&&(l=hn):l===hn?h[0]===">"?(l=o??Pr,d=-1):h[1]===void 0?d=-2:(d=l.lastIndex-h[2].length,u=h[1],l=h[3]===void 0?hn:h[3]==='"'?Pc:Ac):l===Pc||l===Ac?l=hn:l===$c||l===zc?l=Pr:(l=hn,o=void 0);const v=l===hn&&e[s+1].startsWith("/>")?" ":"";i+=l===Pr?a+Em:d>=0?(r.push(u),a.slice(0,d)+Ys+a.slice(d)+jt+v):a+jt+(d===-2?(r.push(void 0),s):v)}return[_p(e,i+(e[n]||"<?>")+(t===2?"</svg>":"")),r]};class mo{constructor({strings:t,_$litType$:n},r){let o;this.parts=[];let i=0,l=0;const s=t.length-1,a=this.parts,[u,h]=Am(t,n);if(this.el=mo.createElement(u,r),_n.currentNode=this.el.content,n===2){const d=this.el.content,f=d.firstChild;f.remove(),d.append(...f.childNodes)}for(;(o=_n.nextNode())!==null&&a.length<s;){if(o.nodeType===1){if(o.hasAttributes()){const d=[];for(const f of o.getAttributeNames())if(f.endsWith(Ys)||f.startsWith(jt)){const v=h[l++];if(d.push(f),v!==void 0){const y=o.getAttribute(v.toLowerCase()+Ys).split(jt),b=/([.?@])?(.*)/.exec(v);a.push({type:1,index:i,name:b[2],strings:y,ctor:b[1]==="."?Tm:b[1]==="?"?Nm:b[1]==="@"?Rm:ll})}else a.push({type:6,index:i})}for(const f of d)o.removeAttribute(f)}if(bp.test(o.tagName)){const d=o.textContent.split(jt),f=d.length-1;if(f>0){o.textContent=hr?hr.emptyScript:"";for(let v=0;v<f;v++)o.append(d[v],fo()),_n.nextNode(),a.push({type:2,index:++i});o.append(d[f],fo())}}}else if(o.nodeType===8)if(o.data===yp)a.push({type:2,index:i});else{let d=-1;for(;(d=o.data.indexOf(jt,d+1))!==-1;)a.push({type:7,index:i}),d+=jt.length-1}i++}}static createElement(t,n){const r=Pn.createElement("template");return r.innerHTML=t,r}}function pr(e,t,n=e,r){var o,i,l,s;if(t===et)return t;let a=r!==void 0?(o=n._$Co)===null||o===void 0?void 0:o[r]:n._$Cl;const u=go(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==u&&((i=a==null?void 0:a._$AO)===null||i===void 0||i.call(a,!1),u===void 0?a=void 0:(a=new u(e),a._$AT(e,n,r)),r!==void 0?((l=(s=n)._$Co)!==null&&l!==void 0?l:s._$Co=[])[r]=a:n._$Cl=a),a!==void 0&&(t=pr(e,a._$AS(e,t.values),a,r)),t}class Pm{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var n;const{el:{content:r},parts:o}=this._$AD,i=((n=t==null?void 0:t.creationScope)!==null&&n!==void 0?n:Pn).importNode(r,!0);_n.currentNode=i;let l=_n.nextNode(),s=0,a=0,u=o[0];for(;u!==void 0;){if(s===u.index){let h;u.type===2?h=new ko(l,l.nextSibling,this,t):u.type===1?h=new u.ctor(l,u.name,u.strings,this,t):u.type===6&&(h=new Mm(l,this,t)),this._$AV.push(h),u=o[++a]}s!==(u==null?void 0:u.index)&&(l=_n.nextNode(),s++)}return _n.currentNode=Pn,i}v(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}}class ko{constructor(t,n,r,o){var i;this.type=2,this._$AH=le,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=o,this._$Cp=(i=o==null?void 0:o.isConnected)===null||i===void 0||i}get _$AU(){var t,n;return(n=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&n!==void 0?n:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=pr(this,t,n),go(t)?t===le||t==null||t===""?(this._$AH!==le&&this._$AR(),this._$AH=le):t!==this._$AH&&t!==et&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):$m(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==le&&go(this._$AH)?this._$AA.nextSibling.data=t:this.$(Pn.createTextNode(t)),this._$AH=t}g(t){var n;const{values:r,_$litType$:o}=t,i=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=mo.createElement(_p(o.h,o.h[0]),this.options)),o);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===i)this._$AH.v(r);else{const l=new Pm(i,this),s=l.u(this.options);l.v(r),this.$(s),this._$AH=l}}_$AC(t){let n=Tc.get(t.strings);return n===void 0&&Tc.set(t.strings,n=new mo(t)),n}T(t){wp(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,o=0;for(const i of t)o===n.length?n.push(r=new ko(this.k(fo()),this.k(fo()),this,this.options)):r=n[o],r._$AI(i),o++;o<n.length&&(this._$AR(r&&r._$AB.nextSibling,o),n.length=o)}_$AR(t=this._$AA.nextSibling,n){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,n);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var n;this._$AM===void 0&&(this._$Cp=t,(n=this._$AP)===null||n===void 0||n.call(this,t))}}class ll{constructor(t,n,r,o,i){this.type=1,this._$AH=le,this._$AN=void 0,this.element=t,this.name=n,this._$AM=o,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=le}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,n=this,r,o){const i=this.strings;let l=!1;if(i===void 0)t=pr(this,t,n,0),l=!go(t)||t!==this._$AH&&t!==et,l&&(this._$AH=t);else{const s=t;let a,u;for(t=i[0],a=0;a<i.length-1;a++)u=pr(this,s[r+a],n,a),u===et&&(u=this._$AH[a]),l||(l=!go(u)||u!==this._$AH[a]),u===le?t=le:t!==le&&(t+=(u??"")+i[a+1]),this._$AH[a]=u}l&&!o&&this.j(t)}j(t){t===le?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Tm extends ll{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===le?void 0:t}}const Lm=hr?hr.emptyScript:"";class Nm extends ll{constructor(){super(...arguments),this.type=4}j(t){t&&t!==le?this.element.setAttribute(this.name,Lm):this.element.removeAttribute(this.name)}}class Rm extends ll{constructor(t,n,r,o,i){super(t,n,r,o,i),this.type=5}_$AI(t,n=this){var r;if((t=(r=pr(this,t,n,0))!==null&&r!==void 0?r:le)===et)return;const o=this._$AH,i=t===le&&o!==le||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,l=t!==le&&(o===le||i);i&&this.element.removeEventListener(this.name,this,o),l&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var n,r;typeof this._$AH=="function"?this._$AH.call((r=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&r!==void 0?r:this.element,t):this._$AH.handleEvent(t)}}class Mm{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){pr(this,t)}}const Lc=Fi.litHtmlPolyfillSupport;Lc==null||Lc(mo,ko),((jl=Fi.litHtmlVersions)!==null&&jl!==void 0?jl:Fi.litHtmlVersions=[]).push("2.8.0");const Om=(e,t,n)=>{var r,o;const i=(r=n==null?void 0:n.renderBefore)!==null&&r!==void 0?r:t;let l=i._$litPart$;if(l===void 0){const s=(o=n==null?void 0:n.renderBefore)!==null&&o!==void 0?o:null;i._$litPart$=l=new ko(t.insertBefore(fo(),s),s,void 0,n??{})}return l._$AI(e),l};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ul,Wl;let Gr=class extends Dn{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,n;const r=super.createRenderRoot();return(t=(n=this.renderOptions).renderBefore)!==null&&t!==void 0||(n.renderBefore=r.firstChild),r}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Om(n,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return et}};Gr.finalized=!0,Gr._$litElement$=!0,(Ul=globalThis.litElementHydrateSupport)===null||Ul===void 0||Ul.call(globalThis,{LitElement:Gr});const Nc=globalThis.litElementPolyfillSupport;Nc==null||Nc({LitElement:Gr});((Wl=globalThis.litElementVersions)!==null&&Wl!==void 0?Wl:globalThis.litElementVersions=[]).push("3.3.3");var it=Me`
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
`,Dm=Me`
  ${it}

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
`,Fm=Me`
  ${it}

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
`,Im=Me`
  ${it}

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
`,qs="";function Rc(e){qs=e}function Vm(e=""){if(!qs){const t=[...document.getElementsByTagName("script")],n=t.find(r=>r.hasAttribute("data-shoelace"));if(n)Rc(n.getAttribute("data-shoelace"));else{const r=t.find(i=>/shoelace(\.min)?\.js($|\?)/.test(i.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(i.src));let o="";r&&(o=r.getAttribute("src")),Rc(o.split("/").slice(0,-1).join("/"))}}return qs.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}var Bm={name:"default",resolver:e=>Vm(`assets/icons/${e}.svg`)},jm=Bm,Mc={caret:`
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
  `},Hm={name:"system",resolver:e=>e in Mc?`data:image/svg+xml,${encodeURIComponent(Mc[e])}`:""},Um=Hm,Wm=[jm,Um],Xs=[];function Km(e){Xs.push(e)}function Qm(e){Xs=Xs.filter(t=>t!==e)}function Oc(e){return Wm.find(t=>t.name===e)}var xp=Object.defineProperty,Gm=Object.defineProperties,Ym=Object.getOwnPropertyDescriptor,qm=Object.getOwnPropertyDescriptors,Dc=Object.getOwnPropertySymbols,Xm=Object.prototype.hasOwnProperty,Zm=Object.prototype.propertyIsEnumerable,Fc=(e,t,n)=>t in e?xp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Rn=(e,t)=>{for(var n in t||(t={}))Xm.call(t,n)&&Fc(e,n,t[n]);if(Dc)for(var n of Dc(t))Zm.call(t,n)&&Fc(e,n,t[n]);return e},sl=(e,t)=>Gm(e,qm(t)),m=(e,t,n,r)=>{for(var o=r>1?void 0:r?Ym(t,n):t,i=e.length-1,l;i>=0;i--)(l=e[i])&&(o=(r?l(t,n,o):l(o))||o);return r&&o&&xp(t,n,o),o};function Oe(e,t){const n=Rn({waitUntilFirstUpdate:!1},t);return(r,o)=>{const{update:i}=r,l=Array.isArray(e)?e:[e];r.update=function(s){l.forEach(a=>{const u=a;if(s.has(u)){const h=s.get(u),d=this[u];h!==d&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[o](h,d)}}),i.call(this,s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Jm=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(n){n.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(n){n.createProperty(t.key,e)}},e0=(e,t,n)=>{t.constructor.createProperty(n,e)};function w(e){return(t,n)=>n!==void 0?e0(e,t,n):Jm(e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function $e(e){return w({...e,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const t0=({finisher:e,descriptor:t})=>(n,r)=>{var o;if(r===void 0){const i=(o=n.originalKey)!==null&&o!==void 0?o:n.key,l=t!=null?{kind:"method",placement:"prototype",key:i,descriptor:t(n.key)}:{...n,key:i};return e!=null&&(l.finisher=function(s){e(s,i)}),l}{const i=n.constructor;t!==void 0&&Object.defineProperty(n,r,t(r)),e==null||e(i,r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pe(e,t){return t0({descriptor:n=>{const r={get(){var o,i;return(i=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(e))!==null&&i!==void 0?i:null},enumerable:!0,configurable:!0};if(t){const o=typeof n=="symbol"?Symbol():"__"+n;r.get=function(){var i,l;return this[o]===void 0&&(this[o]=(l=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(e))!==null&&l!==void 0?l:null),this[o]}}return r}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Kl;((Kl=window.HTMLSlotElement)===null||Kl===void 0?void 0:Kl.prototype.assignedElements)!=null;var xe=class extends Gr{constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){const n=new CustomEvent(e,Rn({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(n),n}static define(e,t=this,n={}){const r=customElements.get(e);if(!r){customElements.define(e,class extends t{},n);return}let o=" (unknown version)",i=o;"version"in t&&t.version&&(o=" v"+t.version),"version"in r&&r.version&&(i=" v"+r.version),!(o&&i&&o===i)&&console.warn(`Attempted to register <${e}>${o}, but <${e}>${i} has already been registered.`)}};xe.version="2.8.0";xe.dependencies={};m([w()],xe.prototype,"dir",2);m([w()],xe.prototype,"lang",2);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const n0=(e,t)=>t===void 0?(e==null?void 0:e._$litType$)!==void 0:(e==null?void 0:e._$litType$)===t,r0=e=>e.strings===void 0,o0={},i0=(e,t=o0)=>e._$AH=t;var Tr=Symbol(),Ko=Symbol(),Ql,Gl=new Map,lt=class extends xe{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var n;let r;if(t!=null&&t.spriteSheet)return X`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`;try{if(r=await fetch(e,{mode:"cors"}),!r.ok)return r.status===410?Tr:Ko}catch{return Ko}try{const o=document.createElement("div");o.innerHTML=await r.text();const i=o.firstElementChild;if(((n=i==null?void 0:i.tagName)==null?void 0:n.toLowerCase())!=="svg")return Tr;Ql||(Ql=new DOMParser);const s=Ql.parseFromString(i.outerHTML,"text/html").body.querySelector("svg");return s?(s.part.add("svg"),document.adoptNode(s)):Tr}catch{return Tr}}connectedCallback(){super.connectedCallback(),Km(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Qm(this)}getUrl(){const e=Oc(this.library);return this.name&&e?e.resolver(this.name):this.src}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const t=Oc(this.library),n=this.getUrl();if(!n){this.svg=null;return}let r=Gl.get(n);if(r||(r=this.resolveIcon(n,t),Gl.set(n,r)),!this.initialRender)return;const o=await r;if(o===Ko&&Gl.delete(n),n===this.getUrl()){if(n0(o)){this.svg=o;return}switch(o){case Ko:case Tr:this.svg=null,this.emit("sl-error");break;default:this.svg=o.cloneNode(!0),(e=t==null?void 0:t.mutator)==null||e.call(t,this.svg),this.emit("sl-load")}}}render(){return this.svg}};lt.styles=Im;m([$e()],lt.prototype,"svg",2);m([w({reflect:!0})],lt.prototype,"name",2);m([w()],lt.prototype,"src",2);m([w()],lt.prototype,"label",2);m([w({reflect:!0})],lt.prototype,"library",2);m([Oe("label")],lt.prototype,"handleLabelChange",1);m([Oe(["name","src","library"])],lt.prototype,"setIcon",1);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const It={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ja=e=>(...t)=>({_$litDirective$:e,values:t});let eu=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,r){this._$Ct=t,this._$AM=n,this._$Ci=r}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ue=Ja(class extends eu{constructor(e){var t;if(super(e),e.type!==It.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var n,r;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!(!((n=this.nt)===null||n===void 0)&&n.has(i))&&this.it.add(i);return this.render(t)}const o=e.element.classList;this.it.forEach(i=>{i in t||(o.remove(i),this.it.delete(i))});for(const i in t){const l=!!t[i];l===this.it.has(i)||!((r=this.nt)===null||r===void 0)&&r.has(i)||(l?(o.add(i),this.it.add(i)):(o.remove(i),this.it.delete(i)))}return et}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kp=Symbol.for(""),l0=e=>{if((e==null?void 0:e.r)===kp)return e==null?void 0:e._$litStatic$},Ii=(e,...t)=>({_$litStatic$:t.reduce((n,r,o)=>n+(i=>{if(i._$litStatic$!==void 0)return i._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${i}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(r)+e[o+1],e[0]),r:kp}),Ic=new Map,s0=e=>(t,...n)=>{const r=n.length;let o,i;const l=[],s=[];let a,u=0,h=!1;for(;u<r;){for(a=t[u];u<r&&(i=n[u],(o=l0(i))!==void 0);)a+=o+t[++u],h=!0;u!==r&&s.push(i),l.push(a),u++}if(u===r&&l.push(t[r]),h){const d=l.join("$$lit$$");(t=Ic.get(d))===void 0&&(l.raw=l,Ic.set(d,t=l)),n=s}return e(t,...n)},di=s0(X);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=e=>e??le;var Ye=class extends xe{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){const e=!!this.href,t=e?Ii`a`:Ii`button`;return di`
      <${t}
        part="base"
        class=${Ue({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
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
    `}};Ye.styles=Fm;Ye.dependencies={"sl-icon":lt};m([pe(".icon-button")],Ye.prototype,"button",2);m([$e()],Ye.prototype,"hasFocus",2);m([w()],Ye.prototype,"name",2);m([w()],Ye.prototype,"library",2);m([w()],Ye.prototype,"src",2);m([w()],Ye.prototype,"href",2);m([w()],Ye.prototype,"target",2);m([w()],Ye.prototype,"download",2);m([w()],Ye.prototype,"label",2);m([w({type:Boolean,reflect:!0})],Ye.prototype,"disabled",2);var Sp=new Map,a0=new WeakMap;function u0(e){return e??{keyframes:[],options:{duration:0}}}function Vc(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function Mn(e,t){Sp.set(e,u0(t))}function gn(e,t,n){const r=a0.get(e);if(r!=null&&r[t])return Vc(r[t],n.dir);const o=Sp.get(t);return o?Vc(o,n.dir):{keyframes:[],options:{duration:0}}}function Vi(e,t){return new Promise(n=>{function r(o){o.target===e&&(e.removeEventListener(t,r),n())}e.addEventListener(t,r)})}function mn(e,t,n){return new Promise(r=>{if((n==null?void 0:n.duration)===1/0)throw new Error("Promise-based animations must be finite.");const o=e.animate(t,sl(Rn({},n),{duration:c0()?0:n.duration}));o.addEventListener("cancel",r,{once:!0}),o.addEventListener("finish",r,{once:!0})})}function c0(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function qn(e){return Promise.all(e.getAnimations().map(t=>new Promise(n=>{const r=requestAnimationFrame(n);t.addEventListener("cancel",()=>r,{once:!0}),t.addEventListener("finish",()=>r,{once:!0}),t.cancel()})))}const Zs=new Set,d0=new MutationObserver($p),Xn=new Map;let Cp=document.documentElement.dir||"ltr",Ep=document.documentElement.lang||navigator.language,vn;d0.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function h0(...e){e.map(t=>{const n=t.$code.toLowerCase();Xn.has(n)?Xn.set(n,Object.assign(Object.assign({},Xn.get(n)),t)):Xn.set(n,t),vn||(vn=t)}),$p()}function $p(){Cp=document.documentElement.dir||"ltr",Ep=document.documentElement.lang||navigator.language,[...Zs.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}let p0=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){Zs.add(this.host)}hostDisconnected(){Zs.delete(this.host)}dir(){return`${this.host.dir||Cp}`.toLowerCase()}lang(){return`${this.host.lang||Ep}`.toLowerCase()}getTranslationData(t){var n,r;const o=new Intl.Locale(t),i=o==null?void 0:o.language.toLowerCase(),l=(r=(n=o==null?void 0:o.region)===null||n===void 0?void 0:n.toLowerCase())!==null&&r!==void 0?r:"",s=Xn.get(`${i}-${l}`),a=Xn.get(i);return{locale:o,language:i,region:l,primary:s,secondary:a}}exists(t,n){var r;const{primary:o,secondary:i}=this.getTranslationData((r=n.lang)!==null&&r!==void 0?r:this.lang());return n=Object.assign({includeFallback:!1},n),!!(o&&o[t]||i&&i[t]||n.includeFallback&&vn&&vn[t])}term(t,...n){const{primary:r,secondary:o}=this.getTranslationData(this.lang());let i;if(r&&r[t])i=r[t];else if(o&&o[t])i=o[t];else if(vn&&vn[t])i=vn[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof i=="function"?i(...n):i}date(t,n){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),n).format(t)}number(t,n){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),n).format(t)}relativeTime(t,n,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(t,n)}};var yr=class extends p0{},al=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=n=>{const r=n.target;(this.slotNames.includes("[default]")&&!r.name||r.name&&this.slotNames.includes(r.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}},gt=class extends xe{constructor(){super(...arguments),this.hasSlotController=new al(this,"footer"),this.localize=new yr(this),this.modal=new _m(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=e=>{e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),bc(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),_c(this)}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const n=gn(this,"dialog.denyClose",{dir:this.localize.dir()});mn(this.panel,n.keyframes,n.options);return}this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),bc(this);const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([qn(this.dialog),qn(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=gn(this,"dialog.show",{dir:this.localize.dir()}),n=gn(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([mn(this.panel,t.keyframes,t.options),mn(this.overlay,n.keyframes,n.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([qn(this.dialog),qn(this.overlay)]);const e=gn(this,"dialog.hide",{dir:this.localize.dir()}),t=gn(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([mn(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),mn(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,_c(this);const n=this.originalTrigger;typeof(n==null?void 0:n.focus)=="function"&&setTimeout(()=>n.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,Vi(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Vi(this,"sl-after-hide")}render(){return X`
      <div
        part="base"
        class=${Ue({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
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
          <slot part="body" class="dialog__body" tabindex="-1"></slot>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};gt.styles=Dm;gt.dependencies={"sl-icon-button":Ye};m([pe(".dialog")],gt.prototype,"dialog",2);m([pe(".dialog__panel")],gt.prototype,"panel",2);m([pe(".dialog__overlay")],gt.prototype,"overlay",2);m([w({type:Boolean,reflect:!0})],gt.prototype,"open",2);m([w({reflect:!0})],gt.prototype,"label",2);m([w({attribute:"no-header",type:Boolean,reflect:!0})],gt.prototype,"noHeader",2);m([Oe("open",{waitUntilFirstUpdate:!0})],gt.prototype,"handleOpenChange",1);Mn("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});Mn("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});Mn("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});Mn("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});Mn("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const f0=new Set(["children","localName","ref","style","className"]),Bc=new WeakMap,g0=(e,t,n,r,o)=>{const i=o==null?void 0:o[t];i===void 0||n===r?(e[t]=n,n==null&&t in HTMLElement.prototype&&e.removeAttribute(t)):((l,s,a)=>{let u=Bc.get(l);u===void 0&&Bc.set(l,u=new Map);let h=u.get(s);a!==void 0?h===void 0?(u.set(s,h={handleEvent:a}),l.addEventListener(s,h)):h.handleEvent=a:h!==void 0&&(u.delete(s),l.removeEventListener(s,h))})(e,i,n)},tu=({react:e,tagName:t,elementClass:n,events:r,displayName:o})=>{const i=new Set(Object.keys(r??{})),l=e.forwardRef((s,a)=>{const u=e.useRef(null),h=e.useRef(null),d={},f={};for(const[v,y]of Object.entries(s))f0.has(v)?d[v==="className"?"class":v]=y:i.has(v)||v in n.prototype?f[v]=y:d[v]=y;return e.useLayoutEffect(()=>{if(h.current!==null){for(const v in f)g0(h.current,v,s[v],u.current?u.current[v]:void 0,r);u.current=s}}),e.useLayoutEffect(()=>{var v;(v=h.current)===null||v===void 0||v.removeAttribute("defer-hydration")},[]),d.suppressHydrationWarning=!0,e.createElement(t,{...d,ref:v=>{h.current=v,typeof a=="function"?a(v):a!==null&&(a.current=v)}})});return l.displayName=o??n.name,l};var m0="sl-dialog";gt.define("sl-dialog");var v0=tu({tagName:m0,elementClass:gt,react:la,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInitialFocus:"sl-initial-focus",onSlRequestClose:"sl-request-close"},displayName:"SlDialog"}),y0=v0,w0={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};h0(w0);var zp=Me`
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
`,b0=Me`
  ${it}
  ${zp}

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
`,nu=(e="value")=>(t,n)=>{const r=t.constructor,o=r.prototype.attributeChangedCallback;r.prototype.attributeChangedCallback=function(i,l,s){var a;const u=r.getPropertyOptions(e),h=typeof u.attribute=="string"?u.attribute:e;if(i===h){const d=u.converter||po,v=(typeof d=="function"?d:(a=d==null?void 0:d.fromAttribute)!=null?a:po.fromAttribute)(s,u.type);this[e]!==v&&(this[n]=v)}o.call(this,i,l,s)}},Lr=new WeakMap,Nr=new WeakMap,Yl=new WeakSet,Qo=new WeakMap,ul=class{constructor(e,t){this.handleFormData=n=>{const r=this.options.disabled(this.host),o=this.options.name(this.host),i=this.options.value(this.host),l=this.host.tagName.toLowerCase()==="sl-button";!r&&!l&&typeof o=="string"&&o.length>0&&typeof i<"u"&&(Array.isArray(i)?i.forEach(s=>{n.formData.append(o,s.toString())}):n.formData.append(o,i.toString()))},this.handleFormSubmit=n=>{var r;const o=this.options.disabled(this.host),i=this.options.reportValidity;this.form&&!this.form.noValidate&&((r=Lr.get(this.form))==null||r.forEach(l=>{this.setUserInteracted(l,!0)})),this.form&&!this.form.noValidate&&!o&&!i(this.host)&&(n.preventDefault(),n.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Qo.set(this.host,[])},this.handleInteraction=n=>{const r=Qo.get(this.host);r.includes(n.type)||r.push(n.type),r.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const n=this.form.querySelectorAll("*");for(const r of n)if(typeof r.reportValidity=="function"&&!r.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=Rn({form:n=>{if(n.hasAttribute("form")&&n.getAttribute("form")!==""){const r=n.getRootNode(),o=n.getAttribute("form");if(o)return r.getElementById(o)}return n.closest("form")},name:n=>n.name,value:n=>n.value,defaultValue:n=>n.defaultValue,disabled:n=>{var r;return(r=n.disabled)!=null?r:!1},reportValidity:n=>typeof n.reportValidity=="function"?n.reportValidity():!0,setValue:(n,r)=>n.value=r,assumeInteractionOn:["sl-input"]},t)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),Qo.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),Qo.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,Lr.has(this.form)?Lr.get(this.form).add(this.host):Lr.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Nr.has(this.form)||(Nr.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity())):this.form=void 0}detachForm(){var e;this.form&&((e=Lr.get(this.form))==null||e.delete(this.host),this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Nr.has(this.form)&&(this.form.reportValidity=Nr.get(this.form),Nr.delete(this.form))),this.form=void 0}setUserInteracted(e,t){t?Yl.add(e):Yl.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){const n=document.createElement("button");n.type=e,n.style.position="absolute",n.style.width="0",n.style.height="0",n.style.clipPath="inset(50%)",n.style.overflow="hidden",n.style.whiteSpace="nowrap",t&&(n.name=t.name,n.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(r=>{t.hasAttribute(r)&&n.setAttribute(r,t.getAttribute(r))})),this.form.append(n),n.click(),n.remove()}}getForm(){var e;return(e=this.form)!=null?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const t=this.host,n=!!Yl.has(t),r=!!t.required;t.toggleAttribute("data-required",r),t.toggleAttribute("data-optional",!r),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&n),t.toggleAttribute("data-user-valid",e&&n)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||e==null||e.preventDefault()}},ru=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(sl(Rn({},ru),{valid:!1,valueMissing:!0}));Object.freeze(sl(Rn({},ru),{valid:!1,customError:!0}));/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ap=Ja(class extends eu{constructor(e){if(super(e),e.type!==It.PROPERTY&&e.type!==It.ATTRIBUTE&&e.type!==It.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!r0(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===et||t===le)return t;const n=e.element,r=e.name;if(e.type===It.PROPERTY){if(t===n[r])return et}else if(e.type===It.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(r))return et}else if(e.type===It.ATTRIBUTE&&n.getAttribute(r)===t+"")return et;return i0(e),t}});var H=class extends xe{constructor(){super(...arguments),this.formControlController=new ul(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new al(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}setTextareaHeight(){this.resize==="auto"?(this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=void 0}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(e){if(e){typeof e.top=="number"&&(this.input.scrollTop=e.top),typeof e.left=="number"&&(this.input.scrollLeft=e.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(e,t,n="none"){this.input.setSelectionRange(e,t,n)}setRangeText(e,t,n,r){this.input.setRangeText(e,t,n,r),this.value!==this.input.value&&(this.value=this.input.value),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),n=this.label?!0:!!e,r=this.helpText?!0:!!t;return X`
      <div
        part="form-control"
        class=${Ue({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":n,"form-control--has-help-text":r})}
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
            class=${Ue({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${N(this.name)}
              .value=${Ap(this.value)}
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
    `}};H.styles=b0;m([pe(".textarea__control")],H.prototype,"input",2);m([$e()],H.prototype,"hasFocus",2);m([w()],H.prototype,"title",2);m([w()],H.prototype,"name",2);m([w()],H.prototype,"value",2);m([w({reflect:!0})],H.prototype,"size",2);m([w({type:Boolean,reflect:!0})],H.prototype,"filled",2);m([w()],H.prototype,"label",2);m([w({attribute:"help-text"})],H.prototype,"helpText",2);m([w()],H.prototype,"placeholder",2);m([w({type:Number})],H.prototype,"rows",2);m([w()],H.prototype,"resize",2);m([w({type:Boolean,reflect:!0})],H.prototype,"disabled",2);m([w({type:Boolean,reflect:!0})],H.prototype,"readonly",2);m([w({reflect:!0})],H.prototype,"form",2);m([w({type:Boolean,reflect:!0})],H.prototype,"required",2);m([w({type:Number})],H.prototype,"minlength",2);m([w({type:Number})],H.prototype,"maxlength",2);m([w()],H.prototype,"autocapitalize",2);m([w()],H.prototype,"autocorrect",2);m([w()],H.prototype,"autocomplete",2);m([w({type:Boolean})],H.prototype,"autofocus",2);m([w()],H.prototype,"enterkeyhint",2);m([w({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],H.prototype,"spellcheck",2);m([w()],H.prototype,"inputmode",2);m([nu()],H.prototype,"defaultValue",2);m([Oe("disabled",{waitUntilFirstUpdate:!0})],H.prototype,"handleDisabledChange",1);m([Oe("rows",{waitUntilFirstUpdate:!0})],H.prototype,"handleRowsChange",1);m([Oe("value",{waitUntilFirstUpdate:!0})],H.prototype,"handleValueChange",1);var _0="sl-textarea";H.define("sl-textarea");var x0=tu({tagName:_0,elementClass:H,react:la,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlTextarea"}),k0=x0;function S0({coloroutrgb:e}){const[t,n]=Be.useState(!1),r=C0(e);return L.jsxs(L.Fragment,{children:[L.jsx("button",{className:"button-85",onClick:()=>n(!0),children:L.jsx("img",{src:"https://matplotlib.org/stable/_static/logo_dark.svg",width:"100px"})}),L.jsx(y0,{label:"Python code",open:t,onSlAfterHide:()=>n(!1),style:{"--width":"100%",textAlign:"left"},children:L.jsx(k0,{className:"code-area",value:r,rows:15,size:"small",readOnly:!0})})]})}function C0(e){let t="";return t+=`def manual_cmap():
`,t+=`    import numpy as np
`,t+=`    from matplotlib.colors import LinearSegmentedColormap
`,t+=`    colors = [
`,e.map(n=>{t+="        ["+n[0]+","+n[1]+","+n[2]+`],
`}),t+=`    ]
`,t+=`    return LinearSegmentedColormap.from_list("manual_cmap",np.array(colors)/255)
`,t+="# cmap = manual_cmap()",t}const E0=["RGB","Hex"];function $0({coloroutrgb:e}){const[t,n]=Be.useState("RGB");function r(i){n(i.target.value)}let o="";return t==="RGB"&&e.map(i=>{o+=i[0]+"	"+i[1]+"	"+i[2]+`
`}),t==="Hex"&&e.map(i=>{o+=z0(i)+`
`}),L.jsxs("div",{className:"txtarea",children:[L.jsx("div",{children:L.jsx(S0,{coloroutrgb:e})}),L.jsxs("div",{children:[L.jsx("label",{children:"output type: "}),L.jsx("select",{title:"colortype",onChange:i=>r(i),children:E0.map((i,l)=>L.jsx("option",{children:i},l))})]}),L.jsx("textarea",{value:o,rows:e.length+1,cols:25,readOnly:!0,style:{resize:"none"}})]})}function z0(e){let t=(+e[0]).toString(16),n=(+e[1]).toString(16),r=(+e[2]).toString(16);return t.length==1&&(t="0"+t),n.length==1&&(n="0"+n),r.length==1&&(r="0"+r),"#"+t+n+r}function A0(e){const t={position:"sticky",top:0,zIndex:100},n=Be.useRef(null);return Be.useEffect(()=>{const o=n.current.getContext("2d");P0(o,e.color_out_rgb)}),L.jsx("canvas",{ref:n,height:"100",width:"500",style:t})}function P0(e,t){e.clearRect(0,0,500,100),e.beginPath(),e.rect(50,30,400,40),e.stroke();for(let n=0;n<t.length;n++){const r="rgb("+t[n][0]+","+t[n][1]+","+t[n][2]+")",o=50+n*400/t.length;T0(e,r,o,30,400/t.length,40)}}function T0(e,t,n,r,o,i){e.fillStyle=t,e.fillRect(n,r,o,i)}var L0=Me`
  ${it}

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
`,Pp=class extends xe{render(){return X` <slot></slot> `}};Pp.styles=L0;function ql(e,t){function n(o){const i=e.getBoundingClientRect(),l=e.ownerDocument.defaultView,s=i.left+l.pageXOffset,a=i.top+l.pageYOffset,u=o.pageX-s,h=o.pageY-a;t!=null&&t.onMove&&t.onMove(u,h)}function r(){document.removeEventListener("pointermove",n),document.removeEventListener("pointerup",r),t!=null&&t.onStop&&t.onStop()}document.addEventListener("pointermove",n,{passive:!0}),document.addEventListener("pointerup",r),(t==null?void 0:t.initialEvent)instanceof PointerEvent&&n(t.initialEvent)}var N0=Me`
  ${it}
  ${zp}

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
`,O=class extends xe{constructor(){super(...arguments),this.formControlController=new ul(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new al(this,"help-text","label"),this.localize=new yr(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var e;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((e=this.input)==null?void 0:e.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(e){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=e,this.value=this.__dateInput.value}get valueAsNumber(){var e;return this.__numberInput.value=this.value,((e=this.input)==null?void 0:e.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(e){this.__numberInput.valueAsNumber=e,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(e){this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change"),this.input.focus(),e.stopPropagation()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleKeyDown(e){const t=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key==="Enter"&&!t&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,n="none"){this.input.setSelectionRange(e,t,n)}setRangeText(e,t,n,r){this.input.setRangeText(e,t,n,r),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),n=this.label?!0:!!e,r=this.helpText?!0:!!t,o=this.clearable&&!this.disabled&&!this.readonly,i=o&&(typeof this.value=="number"||this.value.length>0);return X`
      <div
        part="form-control"
        class=${Ue({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":n,"form-control--has-help-text":r})}
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
            class=${Ue({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
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
              .value=${Ap(this.value)}
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

            ${o?X`
                  <button
                    part="clear-button"
                    class=${Ue({input__clear:!0,"input__clear--visible":i})}
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
    `}};O.styles=N0;O.dependencies={"sl-icon":lt};m([pe(".input__control")],O.prototype,"input",2);m([$e()],O.prototype,"hasFocus",2);m([w()],O.prototype,"title",2);m([w({reflect:!0})],O.prototype,"type",2);m([w()],O.prototype,"name",2);m([w()],O.prototype,"value",2);m([nu()],O.prototype,"defaultValue",2);m([w({reflect:!0})],O.prototype,"size",2);m([w({type:Boolean,reflect:!0})],O.prototype,"filled",2);m([w({type:Boolean,reflect:!0})],O.prototype,"pill",2);m([w()],O.prototype,"label",2);m([w({attribute:"help-text"})],O.prototype,"helpText",2);m([w({type:Boolean})],O.prototype,"clearable",2);m([w({type:Boolean,reflect:!0})],O.prototype,"disabled",2);m([w()],O.prototype,"placeholder",2);m([w({type:Boolean,reflect:!0})],O.prototype,"readonly",2);m([w({attribute:"password-toggle",type:Boolean})],O.prototype,"passwordToggle",2);m([w({attribute:"password-visible",type:Boolean})],O.prototype,"passwordVisible",2);m([w({attribute:"no-spin-buttons",type:Boolean})],O.prototype,"noSpinButtons",2);m([w({reflect:!0})],O.prototype,"form",2);m([w({type:Boolean,reflect:!0})],O.prototype,"required",2);m([w()],O.prototype,"pattern",2);m([w({type:Number})],O.prototype,"minlength",2);m([w({type:Number})],O.prototype,"maxlength",2);m([w()],O.prototype,"min",2);m([w()],O.prototype,"max",2);m([w()],O.prototype,"step",2);m([w()],O.prototype,"autocapitalize",2);m([w()],O.prototype,"autocorrect",2);m([w()],O.prototype,"autocomplete",2);m([w({type:Boolean})],O.prototype,"autofocus",2);m([w()],O.prototype,"enterkeyhint",2);m([w({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],O.prototype,"spellcheck",2);m([w()],O.prototype,"inputmode",2);m([Oe("disabled",{waitUntilFirstUpdate:!0})],O.prototype,"handleDisabledChange",1);m([Oe("step",{waitUntilFirstUpdate:!0})],O.prototype,"handleStepChange",1);m([Oe("value",{waitUntilFirstUpdate:!0})],O.prototype,"handleValueChange",1);var R0=Me`
  ${it}

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
`,M0=Me`
  ${it}

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
`;const nn=Math.min,Ve=Math.max,Bi=Math.round,Go=Math.floor,rn=e=>({x:e,y:e}),O0={left:"right",right:"left",bottom:"top",top:"bottom"},D0={start:"end",end:"start"};function Js(e,t,n){return Ve(e,nn(t,n))}function wr(e,t){return typeof e=="function"?e(t):e}function on(e){return e.split("-")[0]}function br(e){return e.split("-")[1]}function Tp(e){return e==="x"?"y":"x"}function ou(e){return e==="y"?"height":"width"}function So(e){return["top","bottom"].includes(on(e))?"y":"x"}function iu(e){return Tp(So(e))}function F0(e,t,n){n===void 0&&(n=!1);const r=br(e),o=iu(e),i=ou(o);let l=o==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[i]>t.floating[i]&&(l=ji(l)),[l,ji(l)]}function I0(e){const t=ji(e);return[ea(e),t,ea(t)]}function ea(e){return e.replace(/start|end/g,t=>D0[t])}function V0(e,t,n){const r=["left","right"],o=["right","left"],i=["top","bottom"],l=["bottom","top"];switch(e){case"top":case"bottom":return n?t?o:r:t?r:o;case"left":case"right":return t?i:l;default:return[]}}function B0(e,t,n,r){const o=br(e);let i=V0(on(e),n==="start",r);return o&&(i=i.map(l=>l+"-"+o),t&&(i=i.concat(i.map(ea)))),i}function ji(e){return e.replace(/left|right|bottom|top/g,t=>O0[t])}function j0(e){return{top:0,right:0,bottom:0,left:0,...e}}function Lp(e){return typeof e!="number"?j0(e):{top:e,right:e,bottom:e,left:e}}function Hi(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function jc(e,t,n){let{reference:r,floating:o}=e;const i=So(t),l=iu(t),s=ou(l),a=on(t),u=i==="y",h=r.x+r.width/2-o.width/2,d=r.y+r.height/2-o.height/2,f=r[s]/2-o[s]/2;let v;switch(a){case"top":v={x:h,y:r.y-o.height};break;case"bottom":v={x:h,y:r.y+r.height};break;case"right":v={x:r.x+r.width,y:d};break;case"left":v={x:r.x-o.width,y:d};break;default:v={x:r.x,y:r.y}}switch(br(t)){case"start":v[l]-=f*(n&&u?-1:1);break;case"end":v[l]+=f*(n&&u?-1:1);break}return v}const H0=async(e,t,n)=>{const{placement:r="bottom",strategy:o="absolute",middleware:i=[],platform:l}=n,s=i.filter(Boolean),a=await(l.isRTL==null?void 0:l.isRTL(t));let u=await l.getElementRects({reference:e,floating:t,strategy:o}),{x:h,y:d}=jc(u,r,a),f=r,v={},y=0;for(let b=0;b<s.length;b++){const{name:T,fn:p}=s[b],{x:c,y:g,data:_,reset:x}=await p({x:h,y:d,initialPlacement:r,placement:f,strategy:o,middlewareData:v,rects:u,platform:l,elements:{reference:e,floating:t}});if(h=c??h,d=g??d,v={...v,[T]:{...v[T],..._}},x&&y<=50){y++,typeof x=="object"&&(x.placement&&(f=x.placement),x.rects&&(u=x.rects===!0?await l.getElementRects({reference:e,floating:t,strategy:o}):x.rects),{x:h,y:d}=jc(u,f,a)),b=-1;continue}}return{x:h,y:d,placement:f,strategy:o,middlewareData:v}};async function lu(e,t){var n;t===void 0&&(t={});const{x:r,y:o,platform:i,rects:l,elements:s,strategy:a}=e,{boundary:u="clippingAncestors",rootBoundary:h="viewport",elementContext:d="floating",altBoundary:f=!1,padding:v=0}=wr(t,e),y=Lp(v),T=s[f?d==="floating"?"reference":"floating":d],p=Hi(await i.getClippingRect({element:(n=await(i.isElement==null?void 0:i.isElement(T)))==null||n?T:T.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(s.floating)),boundary:u,rootBoundary:h,strategy:a})),c=d==="floating"?{...l.floating,x:r,y:o}:l.reference,g=await(i.getOffsetParent==null?void 0:i.getOffsetParent(s.floating)),_=await(i.isElement==null?void 0:i.isElement(g))?await(i.getScale==null?void 0:i.getScale(g))||{x:1,y:1}:{x:1,y:1},x=Hi(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({rect:c,offsetParent:g,strategy:a}):c);return{top:(p.top-x.top+y.top)/_.y,bottom:(x.bottom-p.bottom+y.bottom)/_.y,left:(p.left-x.left+y.left)/_.x,right:(x.right-p.right+y.right)/_.x}}const U0=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:r,placement:o,rects:i,platform:l,elements:s,middlewareData:a}=t,{element:u,padding:h=0}=wr(e,t)||{};if(u==null)return{};const d=Lp(h),f={x:n,y:r},v=iu(o),y=ou(v),b=await l.getDimensions(u),T=v==="y",p=T?"top":"left",c=T?"bottom":"right",g=T?"clientHeight":"clientWidth",_=i.reference[y]+i.reference[v]-f[v]-i.floating[y],x=f[v]-i.reference[v],C=await(l.getOffsetParent==null?void 0:l.getOffsetParent(u));let E=C?C[g]:0;(!E||!await(l.isElement==null?void 0:l.isElement(C)))&&(E=s.floating[g]||i.floating[y]);const z=_/2-x/2,j=E/2-b[y]/2-1,R=nn(d[p],j),ie=nn(d[c],j),$=R,S=E-b[y]-ie,F=E/2-b[y]/2+z,q=Js($,F,S),Ae=!a.arrow&&br(o)!=null&&F!=q&&i.reference[y]/2-(F<$?R:ie)-b[y]/2<0,De=Ae?F<$?F-$:F-S:0;return{[v]:f[v]+De,data:{[v]:q,centerOffset:F-q-De,...Ae&&{alignmentOffset:De}},reset:Ae}}}),W0=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:o,middlewareData:i,rects:l,initialPlacement:s,platform:a,elements:u}=t,{mainAxis:h=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:v="bestFit",fallbackAxisSideDirection:y="none",flipAlignment:b=!0,...T}=wr(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};const p=on(o),c=on(s)===s,g=await(a.isRTL==null?void 0:a.isRTL(u.floating)),_=f||(c||!b?[ji(s)]:I0(s));!f&&y!=="none"&&_.push(...B0(s,b,y,g));const x=[s,..._],C=await lu(t,T),E=[];let z=((r=i.flip)==null?void 0:r.overflows)||[];if(h&&E.push(C[p]),d){const $=F0(o,l,g);E.push(C[$[0]],C[$[1]])}if(z=[...z,{placement:o,overflows:E}],!E.every($=>$<=0)){var j,R;const $=(((j=i.flip)==null?void 0:j.index)||0)+1,S=x[$];if(S)return{data:{index:$,overflows:z},reset:{placement:S}};let F=(R=z.filter(q=>q.overflows[0]<=0).sort((q,Ae)=>q.overflows[1]-Ae.overflows[1])[0])==null?void 0:R.placement;if(!F)switch(v){case"bestFit":{var ie;const q=(ie=z.map(Ae=>[Ae.placement,Ae.overflows.filter(De=>De>0).reduce((De,A)=>De+A,0)]).sort((Ae,De)=>Ae[1]-De[1])[0])==null?void 0:ie[0];q&&(F=q);break}case"initialPlacement":F=s;break}if(o!==F)return{reset:{placement:F}}}return{}}}};async function K0(e,t){const{placement:n,platform:r,elements:o}=e,i=await(r.isRTL==null?void 0:r.isRTL(o.floating)),l=on(n),s=br(n),a=So(n)==="y",u=["left","top"].includes(l)?-1:1,h=i&&a?-1:1,d=wr(t,e);let{mainAxis:f,crossAxis:v,alignmentAxis:y}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return s&&typeof y=="number"&&(v=s==="end"?y*-1:y),a?{x:v*h,y:f*u}:{x:f*u,y:v*h}}const Q0=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){const{x:n,y:r}=t,o=await K0(t,e);return{x:n+o.x,y:r+o.y,data:o}}}},G0=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:o}=t,{mainAxis:i=!0,crossAxis:l=!1,limiter:s={fn:T=>{let{x:p,y:c}=T;return{x:p,y:c}}},...a}=wr(e,t),u={x:n,y:r},h=await lu(t,a),d=So(on(o)),f=Tp(d);let v=u[f],y=u[d];if(i){const T=f==="y"?"top":"left",p=f==="y"?"bottom":"right",c=v+h[T],g=v-h[p];v=Js(c,v,g)}if(l){const T=d==="y"?"top":"left",p=d==="y"?"bottom":"right",c=y+h[T],g=y-h[p];y=Js(c,y,g)}const b=s.fn({...t,[f]:v,[d]:y});return{...b,data:{x:b.x-n,y:b.y-r}}}}},Hc=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:n,rects:r,platform:o,elements:i}=t,{apply:l=()=>{},...s}=wr(e,t),a=await lu(t,s),u=on(n),h=br(n),d=So(n)==="y",{width:f,height:v}=r.floating;let y,b;u==="top"||u==="bottom"?(y=u,b=h===(await(o.isRTL==null?void 0:o.isRTL(i.floating))?"start":"end")?"left":"right"):(b=u,y=h==="end"?"top":"bottom");const T=v-a[y],p=f-a[b],c=!t.middlewareData.shift;let g=T,_=p;if(d){const C=f-a.left-a.right;_=h||c?nn(p,C):C}else{const C=v-a.top-a.bottom;g=h||c?nn(T,C):C}if(c&&!h){const C=Ve(a.left,0),E=Ve(a.right,0),z=Ve(a.top,0),j=Ve(a.bottom,0);d?_=f-2*(C!==0||E!==0?C+E:Ve(a.left,a.right)):g=v-2*(z!==0||j!==0?z+j:Ve(a.top,a.bottom))}await l({...t,availableWidth:_,availableHeight:g});const x=await o.getDimensions(i.floating);return f!==x.width||v!==x.height?{reset:{rects:!0}}:{}}}};function ln(e){return Np(e)?(e.nodeName||"").toLowerCase():"#document"}function We(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Rt(e){var t;return(t=(Np(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Np(e){return e instanceof Node||e instanceof We(e).Node}function Lt(e){return e instanceof Element||e instanceof We(e).Element}function _t(e){return e instanceof HTMLElement||e instanceof We(e).HTMLElement}function Uc(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof We(e).ShadowRoot}function Co(e){const{overflow:t,overflowX:n,overflowY:r,display:o}=ot(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(o)}function Y0(e){return["table","td","th"].includes(ln(e))}function su(e){const t=au(),n=ot(e);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(r=>(n.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(n.contain||"").includes(r))}function q0(e){let t=fr(e);for(;_t(t)&&!cl(t);){if(su(t))return t;t=fr(t)}return null}function au(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function cl(e){return["html","body","#document"].includes(ln(e))}function ot(e){return We(e).getComputedStyle(e)}function dl(e){return Lt(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function fr(e){if(ln(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Uc(e)&&e.host||Rt(e);return Uc(t)?t.host:t}function Rp(e){const t=fr(e);return cl(t)?e.ownerDocument?e.ownerDocument.body:e.body:_t(t)&&Co(t)?t:Rp(t)}function vo(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const o=Rp(e),i=o===((r=e.ownerDocument)==null?void 0:r.body),l=We(o);return i?t.concat(l,l.visualViewport||[],Co(o)?o:[],l.frameElement&&n?vo(l.frameElement):[]):t.concat(o,vo(o))}function Mp(e){const t=ot(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const o=_t(e),i=o?e.offsetWidth:n,l=o?e.offsetHeight:r,s=Bi(n)!==i||Bi(r)!==l;return s&&(n=i,r=l),{width:n,height:r,$:s}}function uu(e){return Lt(e)?e:e.contextElement}function or(e){const t=uu(e);if(!_t(t))return rn(1);const n=t.getBoundingClientRect(),{width:r,height:o,$:i}=Mp(t);let l=(i?Bi(n.width):n.width)/r,s=(i?Bi(n.height):n.height)/o;return(!l||!Number.isFinite(l))&&(l=1),(!s||!Number.isFinite(s))&&(s=1),{x:l,y:s}}const X0=rn(0);function Op(e){const t=We(e);return!au()||!t.visualViewport?X0:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Z0(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==We(e)?!1:t}function Tn(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const o=e.getBoundingClientRect(),i=uu(e);let l=rn(1);t&&(r?Lt(r)&&(l=or(r)):l=or(e));const s=Z0(i,n,r)?Op(i):rn(0);let a=(o.left+s.x)/l.x,u=(o.top+s.y)/l.y,h=o.width/l.x,d=o.height/l.y;if(i){const f=We(i),v=r&&Lt(r)?We(r):r;let y=f.frameElement;for(;y&&r&&v!==f;){const b=or(y),T=y.getBoundingClientRect(),p=ot(y),c=T.left+(y.clientLeft+parseFloat(p.paddingLeft))*b.x,g=T.top+(y.clientTop+parseFloat(p.paddingTop))*b.y;a*=b.x,u*=b.y,h*=b.x,d*=b.y,a+=c,u+=g,y=We(y).frameElement}}return Hi({width:h,height:d,x:a,y:u})}function J0(e){let{rect:t,offsetParent:n,strategy:r}=e;const o=_t(n),i=Rt(n);if(n===i)return t;let l={scrollLeft:0,scrollTop:0},s=rn(1);const a=rn(0);if((o||!o&&r!=="fixed")&&((ln(n)!=="body"||Co(i))&&(l=dl(n)),_t(n))){const u=Tn(n);s=or(n),a.x=u.x+n.clientLeft,a.y=u.y+n.clientTop}return{width:t.width*s.x,height:t.height*s.y,x:t.x*s.x-l.scrollLeft*s.x+a.x,y:t.y*s.y-l.scrollTop*s.y+a.y}}function ev(e){return Array.from(e.getClientRects())}function Dp(e){return Tn(Rt(e)).left+dl(e).scrollLeft}function tv(e){const t=Rt(e),n=dl(e),r=e.ownerDocument.body,o=Ve(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),i=Ve(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let l=-n.scrollLeft+Dp(e);const s=-n.scrollTop;return ot(r).direction==="rtl"&&(l+=Ve(t.clientWidth,r.clientWidth)-o),{width:o,height:i,x:l,y:s}}function nv(e,t){const n=We(e),r=Rt(e),o=n.visualViewport;let i=r.clientWidth,l=r.clientHeight,s=0,a=0;if(o){i=o.width,l=o.height;const u=au();(!u||u&&t==="fixed")&&(s=o.offsetLeft,a=o.offsetTop)}return{width:i,height:l,x:s,y:a}}function rv(e,t){const n=Tn(e,!0,t==="fixed"),r=n.top+e.clientTop,o=n.left+e.clientLeft,i=_t(e)?or(e):rn(1),l=e.clientWidth*i.x,s=e.clientHeight*i.y,a=o*i.x,u=r*i.y;return{width:l,height:s,x:a,y:u}}function Wc(e,t,n){let r;if(t==="viewport")r=nv(e,n);else if(t==="document")r=tv(Rt(e));else if(Lt(t))r=rv(t,n);else{const o=Op(e);r={...t,x:t.x-o.x,y:t.y-o.y}}return Hi(r)}function Fp(e,t){const n=fr(e);return n===t||!Lt(n)||cl(n)?!1:ot(n).position==="fixed"||Fp(n,t)}function ov(e,t){const n=t.get(e);if(n)return n;let r=vo(e,[],!1).filter(s=>Lt(s)&&ln(s)!=="body"),o=null;const i=ot(e).position==="fixed";let l=i?fr(e):e;for(;Lt(l)&&!cl(l);){const s=ot(l),a=su(l);!a&&s.position==="fixed"&&(o=null),(i?!a&&!o:!a&&s.position==="static"&&!!o&&["absolute","fixed"].includes(o.position)||Co(l)&&!a&&Fp(e,l))?r=r.filter(h=>h!==l):o=s,l=fr(l)}return t.set(e,r),r}function iv(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e;const l=[...n==="clippingAncestors"?ov(t,this._c):[].concat(n),r],s=l[0],a=l.reduce((u,h)=>{const d=Wc(t,h,o);return u.top=Ve(d.top,u.top),u.right=nn(d.right,u.right),u.bottom=nn(d.bottom,u.bottom),u.left=Ve(d.left,u.left),u},Wc(t,s,o));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function lv(e){return Mp(e)}function sv(e,t,n){const r=_t(t),o=Rt(t),i=n==="fixed",l=Tn(e,!0,i,t);let s={scrollLeft:0,scrollTop:0};const a=rn(0);if(r||!r&&!i)if((ln(t)!=="body"||Co(o))&&(s=dl(t)),r){const u=Tn(t,!0,i,t);a.x=u.x+t.clientLeft,a.y=u.y+t.clientTop}else o&&(a.x=Dp(o));return{x:l.left+s.scrollLeft-a.x,y:l.top+s.scrollTop-a.y,width:l.width,height:l.height}}function Kc(e,t){return!_t(e)||ot(e).position==="fixed"?null:t?t(e):e.offsetParent}function Ip(e,t){const n=We(e);if(!_t(e))return n;let r=Kc(e,t);for(;r&&Y0(r)&&ot(r).position==="static";)r=Kc(r,t);return r&&(ln(r)==="html"||ln(r)==="body"&&ot(r).position==="static"&&!su(r))?n:r||q0(e)||n}const av=async function(e){let{reference:t,floating:n,strategy:r}=e;const o=this.getOffsetParent||Ip,i=this.getDimensions;return{reference:sv(t,await o(n),r),floating:{x:0,y:0,...await i(n)}}};function uv(e){return ot(e).direction==="rtl"}const hi={convertOffsetParentRelativeRectToViewportRelativeRect:J0,getDocumentElement:Rt,getClippingRect:iv,getOffsetParent:Ip,getElementRects:av,getClientRects:ev,getDimensions:lv,getScale:or,isElement:Lt,isRTL:uv};function cv(e,t){let n=null,r;const o=Rt(e);function i(){clearTimeout(r),n&&n.disconnect(),n=null}function l(s,a){s===void 0&&(s=!1),a===void 0&&(a=1),i();const{left:u,top:h,width:d,height:f}=e.getBoundingClientRect();if(s||t(),!d||!f)return;const v=Go(h),y=Go(o.clientWidth-(u+d)),b=Go(o.clientHeight-(h+f)),T=Go(u),c={rootMargin:-v+"px "+-y+"px "+-b+"px "+-T+"px",threshold:Ve(0,nn(1,a))||1};let g=!0;function _(x){const C=x[0].intersectionRatio;if(C!==a){if(!g)return l();C?l(!1,C):r=setTimeout(()=>{l(!1,1e-7)},100)}g=!1}try{n=new IntersectionObserver(_,{...c,root:o.ownerDocument})}catch{n=new IntersectionObserver(_,c)}n.observe(e)}return l(!0),i}function dv(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:o=!0,ancestorResize:i=!0,elementResize:l=typeof ResizeObserver=="function",layoutShift:s=typeof IntersectionObserver=="function",animationFrame:a=!1}=r,u=uu(e),h=o||i?[...u?vo(u):[],...vo(t)]:[];h.forEach(p=>{o&&p.addEventListener("scroll",n,{passive:!0}),i&&p.addEventListener("resize",n)});const d=u&&s?cv(u,n):null;let f=-1,v=null;l&&(v=new ResizeObserver(p=>{let[c]=p;c&&c.target===u&&v&&(v.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{v&&v.observe(t)})),n()}),u&&!a&&v.observe(u),v.observe(t));let y,b=a?Tn(e):null;a&&T();function T(){const p=Tn(e);b&&(p.x!==b.x||p.y!==b.y||p.width!==b.width||p.height!==b.height)&&n(),b=p,y=requestAnimationFrame(T)}return n(),()=>{h.forEach(p=>{o&&p.removeEventListener("scroll",n),i&&p.removeEventListener("resize",n)}),d&&d(),v&&v.disconnect(),v=null,a&&cancelAnimationFrame(y)}}const hv=(e,t,n)=>{const r=new Map,o={platform:hi,...n},i={...o.platform,_c:r};return H0(e,t,{...o,platform:i})};function pv(e){return e!==null&&typeof e=="object"&&"getBoundingClientRect"in e}var Y=class extends xe{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||pv(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');if(this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),!this.anchorEl)throw new Error("Invalid anchor element: no anchor could be found using the anchor slot or the anchor attribute.");this.start()}start(){this.anchorEl&&(this.cleanup=dv(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl)return;const e=[Q0({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(Hc({apply:({rects:n})=>{const r=this.sync==="width"||this.sync==="both",o=this.sync==="height"||this.sync==="both";this.popup.style.width=r?`${n.reference.width}px`:"",this.popup.style.height=o?`${n.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(W0({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(G0({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(Hc({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:n,availableHeight:r})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${r}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${n}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(U0({element:this.arrowEl,padding:this.arrowPadding}));const t=this.strategy==="absolute"?n=>hi.getOffsetParent(n,fp):hi.getOffsetParent;hv(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:sl(Rn({},hi),{getOffsetParent:t})}).then(({x:n,y:r,middlewareData:o,placement:i})=>{const l=getComputedStyle(this).direction==="rtl",s={top:"bottom",right:"left",bottom:"top",left:"right"}[i.split("-")[0]];if(this.setAttribute("data-current-placement",i),Object.assign(this.popup.style,{left:`${n}px`,top:`${r}px`}),this.arrow){const a=o.arrow.x,u=o.arrow.y;let h="",d="",f="",v="";if(this.arrowPlacement==="start"){const y=typeof a=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";h=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",d=l?y:"",v=l?"":y}else if(this.arrowPlacement==="end"){const y=typeof a=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";d=l?"":y,v=l?y:"",f=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(v=typeof a=="number"?"calc(50% - var(--arrow-size-diagonal))":"",h=typeof u=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(v=typeof a=="number"?`${a}px`:"",h=typeof u=="number"?`${u}px`:"");Object.assign(this.arrowEl.style,{top:h,right:d,bottom:f,left:v,[s]:"calc(var(--arrow-size-diagonal) * -1)"})}}),this.emit("sl-reposition")}render(){return X`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <div
        part="popup"
        class=${Ue({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?X`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};Y.styles=M0;m([pe(".popup")],Y.prototype,"popup",2);m([pe(".popup__arrow")],Y.prototype,"arrowEl",2);m([w()],Y.prototype,"anchor",2);m([w({type:Boolean,reflect:!0})],Y.prototype,"active",2);m([w({reflect:!0})],Y.prototype,"placement",2);m([w({reflect:!0})],Y.prototype,"strategy",2);m([w({type:Number})],Y.prototype,"distance",2);m([w({type:Number})],Y.prototype,"skidding",2);m([w({type:Boolean})],Y.prototype,"arrow",2);m([w({attribute:"arrow-placement"})],Y.prototype,"arrowPlacement",2);m([w({attribute:"arrow-padding",type:Number})],Y.prototype,"arrowPadding",2);m([w({type:Boolean})],Y.prototype,"flip",2);m([w({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:e=>e.join(" ")}})],Y.prototype,"flipFallbackPlacements",2);m([w({attribute:"flip-fallback-strategy"})],Y.prototype,"flipFallbackStrategy",2);m([w({type:Object})],Y.prototype,"flipBoundary",2);m([w({attribute:"flip-padding",type:Number})],Y.prototype,"flipPadding",2);m([w({type:Boolean})],Y.prototype,"shift",2);m([w({type:Object})],Y.prototype,"shiftBoundary",2);m([w({attribute:"shift-padding",type:Number})],Y.prototype,"shiftPadding",2);m([w({attribute:"auto-size"})],Y.prototype,"autoSize",2);m([w()],Y.prototype,"sync",2);m([w({type:Object})],Y.prototype,"autoSizeBoundary",2);m([w({attribute:"auto-size-padding",type:Number})],Y.prototype,"autoSizePadding",2);var ze=class extends xe{constructor(){super(...arguments),this.localize=new yr(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.handleKeyDown=e=>{this.open&&e.key==="Escape"&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=e=>{var t;if(e.key==="Escape"&&this.open){e.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(e.key==="Tab"){if(this.open&&((t=document.activeElement)==null?void 0:t.tagName.toLowerCase())==="sl-menu-item"){e.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var n,r,o;const i=((n=this.containingElement)==null?void 0:n.getRootNode())instanceof ShadowRoot?(o=(r=document.activeElement)==null?void 0:r.shadowRoot)==null?void 0:o.activeElement:document.activeElement;(!this.containingElement||(i==null?void 0:i.closest(this.containingElement.tagName.toLowerCase()))!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=e=>{const t=e.target;!this.stayOpenOnSelect&&t.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const e=this.trigger.assignedElements({flatten:!0})[0];typeof(e==null?void 0:e.focus)=="function"&&e.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(e=>e.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(e){if([" ","Enter"].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}const t=this.getMenu();if(t){const n=t.getAllItems(),r=n[0],o=n[n.length-1];["ArrowDown","ArrowUp","Home","End"].includes(e.key)&&(e.preventDefault(),this.open||(this.show(),await this.updateComplete),n.length>0&&this.updateComplete.then(()=>{(e.key==="ArrowDown"||e.key==="Home")&&(t.setCurrentItem(r),r.focus()),(e.key==="ArrowUp"||e.key==="End")&&(t.setCurrentItem(o),o.focus())}))}}handleTriggerKeyUp(e){e.key===" "&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const t=this.trigger.assignedElements({flatten:!0}).find(r=>bm(r).start);let n;if(t){switch(t.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":n=t.button;break;default:n=t}n.setAttribute("aria-haspopup","true"),n.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,Vi(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Vi(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){this.panel.addEventListener("sl-select",this.handlePanelSelect),this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await qn(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=gn(this,"dropdown.show",{dir:this.localize.dir()});await mn(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await qn(this);const{keyframes:e,options:t}=gn(this,"dropdown.hide",{dir:this.localize.dir()});await mn(this.popup.popup,e,t),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return X`
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
        class=${Ue({dropdown:!0,"dropdown--open":this.open})}
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
    `}};ze.styles=R0;ze.dependencies={"sl-popup":Y};m([pe(".dropdown")],ze.prototype,"popup",2);m([pe(".dropdown__trigger")],ze.prototype,"trigger",2);m([pe(".dropdown__panel")],ze.prototype,"panel",2);m([w({type:Boolean,reflect:!0})],ze.prototype,"open",2);m([w({reflect:!0})],ze.prototype,"placement",2);m([w({type:Boolean,reflect:!0})],ze.prototype,"disabled",2);m([w({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],ze.prototype,"stayOpenOnSelect",2);m([w({attribute:!1})],ze.prototype,"containingElement",2);m([w({type:Number})],ze.prototype,"distance",2);m([w({type:Number})],ze.prototype,"skidding",2);m([w({type:Boolean})],ze.prototype,"hoist",2);m([Oe("open",{waitUntilFirstUpdate:!0})],ze.prototype,"handleOpenChange",1);Mn("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});Mn("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});var fv=Me`
  ${it}

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
`;function qe(e,t,n){const r=o=>Object.is(o,-0)?0:o;return e<t?r(t):e>n?r(n):r(e)}var gv=Me`
  ${it}

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
`,Vp=class extends xe{constructor(){super(...arguments),this.localize=new yr(this)}render(){return X`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Vp.styles=gv;var mv=Me`
  ${it}

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
`,W=class extends xe{constructor(){super(...arguments),this.formControlController=new ul(this,{form:e=>{if(e.hasAttribute("form")){const t=e.getRootNode(),n=e.getAttribute("form");return t.getElementById(n)}return e.closest("form")},assumeInteractionOn:["click"]}),this.hasSlotController=new al(this,"[default]","prefix","suffix"),this.localize=new yr(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:ru}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink(),t=e?Ii`a`:Ii`button`;return di`
      <${t}
        part="base"
        class=${Ue({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
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
        ${this.caret?di` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?di`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${t}>
    `}};W.styles=mv;W.dependencies={"sl-icon":lt,"sl-spinner":Vp};m([pe(".button")],W.prototype,"button",2);m([$e()],W.prototype,"hasFocus",2);m([$e()],W.prototype,"invalid",2);m([w()],W.prototype,"title",2);m([w({reflect:!0})],W.prototype,"variant",2);m([w({reflect:!0})],W.prototype,"size",2);m([w({type:Boolean,reflect:!0})],W.prototype,"caret",2);m([w({type:Boolean,reflect:!0})],W.prototype,"disabled",2);m([w({type:Boolean,reflect:!0})],W.prototype,"loading",2);m([w({type:Boolean,reflect:!0})],W.prototype,"outline",2);m([w({type:Boolean,reflect:!0})],W.prototype,"pill",2);m([w({type:Boolean,reflect:!0})],W.prototype,"circle",2);m([w()],W.prototype,"type",2);m([w()],W.prototype,"name",2);m([w()],W.prototype,"value",2);m([w()],W.prototype,"href",2);m([w()],W.prototype,"target",2);m([w()],W.prototype,"rel",2);m([w()],W.prototype,"download",2);m([w()],W.prototype,"form",2);m([w({attribute:"formaction"})],W.prototype,"formAction",2);m([w({attribute:"formenctype"})],W.prototype,"formEnctype",2);m([w({attribute:"formmethod"})],W.prototype,"formMethod",2);m([w({attribute:"formnovalidate",type:Boolean})],W.prototype,"formNoValidate",2);m([w({attribute:"formtarget"})],W.prototype,"formTarget",2);m([Oe("disabled",{waitUntilFirstUpdate:!0})],W.prototype,"handleDisabledChange",1);var vv=Me`
  ${it}

  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,Eo=class extends xe{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(e){const t=Rr(e.target);t==null||t.classList.add("sl-button-group__button--focus")}handleBlur(e){const t=Rr(e.target);t==null||t.classList.remove("sl-button-group__button--focus")}handleMouseOver(e){const t=Rr(e.target);t==null||t.classList.add("sl-button-group__button--hover")}handleMouseOut(e){const t=Rr(e.target);t==null||t.classList.remove("sl-button-group__button--hover")}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})];e.forEach(t=>{const n=e.indexOf(t),r=Rr(t);r&&(r.classList.add("sl-button-group__button"),r.classList.toggle("sl-button-group__button--first",n===0),r.classList.toggle("sl-button-group__button--inner",n>0&&n<e.length-1),r.classList.toggle("sl-button-group__button--last",n===e.length-1),r.classList.toggle("sl-button-group__button--radio",r.tagName.toLowerCase()==="sl-radio-button"))})}render(){return X`
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
    `}};Eo.styles=vv;m([pe("slot")],Eo.prototype,"defaultSlot",2);m([$e()],Eo.prototype,"disableRole",2);m([w()],Eo.prototype,"label",2);function Rr(e){var t;const n="sl-button, sl-radio-button";return(t=e.closest(n))!=null?t:e.querySelector(n)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bp="important",yv=" !"+Bp,Ot=Ja(class extends eu{constructor(e){var t;if(super(e),e.type!==It.ATTRIBUTE||e.name!=="style"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{const r=e[n];return r==null?t:t+`${n=n.includes("-")?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(e,[t]){const{style:n}=e.element;if(this.ht===void 0){this.ht=new Set;for(const r in t)this.ht.add(r);return this.render(t)}this.ht.forEach(r=>{t[r]==null&&(this.ht.delete(r),r.includes("-")?n.removeProperty(r):n[r]="")});for(const r in t){const o=t[r];if(o!=null){this.ht.add(r);const i=typeof o=="string"&&o.endsWith(yv);r.includes("-")||i?n.setProperty(r,i?o.slice(0,-11):o,i?Bp:""):n[r]=o}}return et}});function me(e,t){wv(e)&&(e="100%");var n=bv(e);return e=t===360?e:Math.min(t,Math.max(0,parseFloat(e))),n&&(e=parseInt(String(e*t),10)/100),Math.abs(e-t)<1e-6?1:(t===360?e=(e<0?e%t+t:e%t)/parseFloat(String(t)):e=e%t/parseFloat(String(t)),e)}function Yo(e){return Math.min(1,Math.max(0,e))}function wv(e){return typeof e=="string"&&e.indexOf(".")!==-1&&parseFloat(e)===1}function bv(e){return typeof e=="string"&&e.indexOf("%")!==-1}function jp(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function qo(e){return e<=1?"".concat(Number(e)*100,"%"):e}function xn(e){return e.length===1?"0"+e:String(e)}function _v(e,t,n){return{r:me(e,255)*255,g:me(t,255)*255,b:me(n,255)*255}}function Qc(e,t,n){e=me(e,255),t=me(t,255),n=me(n,255);var r=Math.max(e,t,n),o=Math.min(e,t,n),i=0,l=0,s=(r+o)/2;if(r===o)l=0,i=0;else{var a=r-o;switch(l=s>.5?a/(2-r-o):a/(r+o),r){case e:i=(t-n)/a+(t<n?6:0);break;case t:i=(n-e)/a+2;break;case n:i=(e-t)/a+4;break}i/=6}return{h:i,s:l,l:s}}function Xl(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*(6*n):n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function xv(e,t,n){var r,o,i;if(e=me(e,360),t=me(t,100),n=me(n,100),t===0)o=n,i=n,r=n;else{var l=n<.5?n*(1+t):n+t-n*t,s=2*n-l;r=Xl(s,l,e+1/3),o=Xl(s,l,e),i=Xl(s,l,e-1/3)}return{r:r*255,g:o*255,b:i*255}}function Gc(e,t,n){e=me(e,255),t=me(t,255),n=me(n,255);var r=Math.max(e,t,n),o=Math.min(e,t,n),i=0,l=r,s=r-o,a=r===0?0:s/r;if(r===o)i=0;else{switch(r){case e:i=(t-n)/s+(t<n?6:0);break;case t:i=(n-e)/s+2;break;case n:i=(e-t)/s+4;break}i/=6}return{h:i,s:a,v:l}}function kv(e,t,n){e=me(e,360)*6,t=me(t,100),n=me(n,100);var r=Math.floor(e),o=e-r,i=n*(1-t),l=n*(1-o*t),s=n*(1-(1-o)*t),a=r%6,u=[n,l,i,i,s,n][a],h=[s,n,n,l,i,i][a],d=[i,i,s,n,n,l][a];return{r:u*255,g:h*255,b:d*255}}function Yc(e,t,n,r){var o=[xn(Math.round(e).toString(16)),xn(Math.round(t).toString(16)),xn(Math.round(n).toString(16))];return r&&o[0].startsWith(o[0].charAt(1))&&o[1].startsWith(o[1].charAt(1))&&o[2].startsWith(o[2].charAt(1))?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function Sv(e,t,n,r,o){var i=[xn(Math.round(e).toString(16)),xn(Math.round(t).toString(16)),xn(Math.round(n).toString(16)),xn(Cv(r))];return o&&i[0].startsWith(i[0].charAt(1))&&i[1].startsWith(i[1].charAt(1))&&i[2].startsWith(i[2].charAt(1))&&i[3].startsWith(i[3].charAt(1))?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0):i.join("")}function Cv(e){return Math.round(parseFloat(e)*255).toString(16)}function qc(e){return Fe(e)/255}function Fe(e){return parseInt(e,16)}function Ev(e){return{r:e>>16,g:(e&65280)>>8,b:e&255}}var ta={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function $v(e){var t={r:0,g:0,b:0},n=1,r=null,o=null,i=null,l=!1,s=!1;return typeof e=="string"&&(e=Pv(e)),typeof e=="object"&&(xt(e.r)&&xt(e.g)&&xt(e.b)?(t=_v(e.r,e.g,e.b),l=!0,s=String(e.r).substr(-1)==="%"?"prgb":"rgb"):xt(e.h)&&xt(e.s)&&xt(e.v)?(r=qo(e.s),o=qo(e.v),t=kv(e.h,r,o),l=!0,s="hsv"):xt(e.h)&&xt(e.s)&&xt(e.l)&&(r=qo(e.s),i=qo(e.l),t=xv(e.h,r,i),l=!0,s="hsl"),Object.prototype.hasOwnProperty.call(e,"a")&&(n=e.a)),n=jp(n),{ok:l,format:e.format||s,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:n}}var zv="[-\\+]?\\d+%?",Av="[-\\+]?\\d*\\.\\d+%?",Wt="(?:".concat(Av,")|(?:").concat(zv,")"),Zl="[\\s|\\(]+(".concat(Wt,")[,|\\s]+(").concat(Wt,")[,|\\s]+(").concat(Wt,")\\s*\\)?"),Jl="[\\s|\\(]+(".concat(Wt,")[,|\\s]+(").concat(Wt,")[,|\\s]+(").concat(Wt,")[,|\\s]+(").concat(Wt,")\\s*\\)?"),at={CSS_UNIT:new RegExp(Wt),rgb:new RegExp("rgb"+Zl),rgba:new RegExp("rgba"+Jl),hsl:new RegExp("hsl"+Zl),hsla:new RegExp("hsla"+Jl),hsv:new RegExp("hsv"+Zl),hsva:new RegExp("hsva"+Jl),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function Pv(e){if(e=e.trim().toLowerCase(),e.length===0)return!1;var t=!1;if(ta[e])e=ta[e],t=!0;else if(e==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var n=at.rgb.exec(e);return n?{r:n[1],g:n[2],b:n[3]}:(n=at.rgba.exec(e),n?{r:n[1],g:n[2],b:n[3],a:n[4]}:(n=at.hsl.exec(e),n?{h:n[1],s:n[2],l:n[3]}:(n=at.hsla.exec(e),n?{h:n[1],s:n[2],l:n[3],a:n[4]}:(n=at.hsv.exec(e),n?{h:n[1],s:n[2],v:n[3]}:(n=at.hsva.exec(e),n?{h:n[1],s:n[2],v:n[3],a:n[4]}:(n=at.hex8.exec(e),n?{r:Fe(n[1]),g:Fe(n[2]),b:Fe(n[3]),a:qc(n[4]),format:t?"name":"hex8"}:(n=at.hex6.exec(e),n?{r:Fe(n[1]),g:Fe(n[2]),b:Fe(n[3]),format:t?"name":"hex"}:(n=at.hex4.exec(e),n?{r:Fe(n[1]+n[1]),g:Fe(n[2]+n[2]),b:Fe(n[3]+n[3]),a:qc(n[4]+n[4]),format:t?"name":"hex8"}:(n=at.hex3.exec(e),n?{r:Fe(n[1]+n[1]),g:Fe(n[2]+n[2]),b:Fe(n[3]+n[3]),format:t?"name":"hex"}:!1)))))))))}function xt(e){return!!at.CSS_UNIT.exec(String(e))}var Xc=function(){function e(t,n){t===void 0&&(t=""),n===void 0&&(n={});var r;if(t instanceof e)return t;typeof t=="number"&&(t=Ev(t)),this.originalInput=t;var o=$v(t);this.originalInput=t,this.r=o.r,this.g=o.g,this.b=o.b,this.a=o.a,this.roundA=Math.round(100*this.a)/100,this.format=(r=n.format)!==null&&r!==void 0?r:o.format,this.gradientType=n.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=o.ok}return e.prototype.isDark=function(){return this.getBrightness()<128},e.prototype.isLight=function(){return!this.isDark()},e.prototype.getBrightness=function(){var t=this.toRgb();return(t.r*299+t.g*587+t.b*114)/1e3},e.prototype.getLuminance=function(){var t=this.toRgb(),n,r,o,i=t.r/255,l=t.g/255,s=t.b/255;return i<=.03928?n=i/12.92:n=Math.pow((i+.055)/1.055,2.4),l<=.03928?r=l/12.92:r=Math.pow((l+.055)/1.055,2.4),s<=.03928?o=s/12.92:o=Math.pow((s+.055)/1.055,2.4),.2126*n+.7152*r+.0722*o},e.prototype.getAlpha=function(){return this.a},e.prototype.setAlpha=function(t){return this.a=jp(t),this.roundA=Math.round(100*this.a)/100,this},e.prototype.isMonochrome=function(){var t=this.toHsl().s;return t===0},e.prototype.toHsv=function(){var t=Gc(this.r,this.g,this.b);return{h:t.h*360,s:t.s,v:t.v,a:this.a}},e.prototype.toHsvString=function(){var t=Gc(this.r,this.g,this.b),n=Math.round(t.h*360),r=Math.round(t.s*100),o=Math.round(t.v*100);return this.a===1?"hsv(".concat(n,", ").concat(r,"%, ").concat(o,"%)"):"hsva(".concat(n,", ").concat(r,"%, ").concat(o,"%, ").concat(this.roundA,")")},e.prototype.toHsl=function(){var t=Qc(this.r,this.g,this.b);return{h:t.h*360,s:t.s,l:t.l,a:this.a}},e.prototype.toHslString=function(){var t=Qc(this.r,this.g,this.b),n=Math.round(t.h*360),r=Math.round(t.s*100),o=Math.round(t.l*100);return this.a===1?"hsl(".concat(n,", ").concat(r,"%, ").concat(o,"%)"):"hsla(".concat(n,", ").concat(r,"%, ").concat(o,"%, ").concat(this.roundA,")")},e.prototype.toHex=function(t){return t===void 0&&(t=!1),Yc(this.r,this.g,this.b,t)},e.prototype.toHexString=function(t){return t===void 0&&(t=!1),"#"+this.toHex(t)},e.prototype.toHex8=function(t){return t===void 0&&(t=!1),Sv(this.r,this.g,this.b,this.a,t)},e.prototype.toHex8String=function(t){return t===void 0&&(t=!1),"#"+this.toHex8(t)},e.prototype.toHexShortString=function(t){return t===void 0&&(t=!1),this.a===1?this.toHexString(t):this.toHex8String(t)},e.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},e.prototype.toRgbString=function(){var t=Math.round(this.r),n=Math.round(this.g),r=Math.round(this.b);return this.a===1?"rgb(".concat(t,", ").concat(n,", ").concat(r,")"):"rgba(".concat(t,", ").concat(n,", ").concat(r,", ").concat(this.roundA,")")},e.prototype.toPercentageRgb=function(){var t=function(n){return"".concat(Math.round(me(n,255)*100),"%")};return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}},e.prototype.toPercentageRgbString=function(){var t=function(n){return Math.round(me(n,255)*100)};return this.a===1?"rgb(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%)"):"rgba(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%, ").concat(this.roundA,")")},e.prototype.toName=function(){if(this.a===0)return"transparent";if(this.a<1)return!1;for(var t="#"+Yc(this.r,this.g,this.b,!1),n=0,r=Object.entries(ta);n<r.length;n++){var o=r[n],i=o[0],l=o[1];if(t===l)return i}return!1},e.prototype.toString=function(t){var n=!!t;t=t??this.format;var r=!1,o=this.a<1&&this.a>=0,i=!n&&o&&(t.startsWith("hex")||t==="name");return i?t==="name"&&this.a===0?this.toName():this.toRgbString():(t==="rgb"&&(r=this.toRgbString()),t==="prgb"&&(r=this.toPercentageRgbString()),(t==="hex"||t==="hex6")&&(r=this.toHexString()),t==="hex3"&&(r=this.toHexString(!0)),t==="hex4"&&(r=this.toHex8String(!0)),t==="hex8"&&(r=this.toHex8String()),t==="name"&&(r=this.toName()),t==="hsl"&&(r=this.toHslString()),t==="hsv"&&(r=this.toHsvString()),r||this.toHexString())},e.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},e.prototype.clone=function(){return new e(this.toString())},e.prototype.lighten=function(t){t===void 0&&(t=10);var n=this.toHsl();return n.l+=t/100,n.l=Yo(n.l),new e(n)},e.prototype.brighten=function(t){t===void 0&&(t=10);var n=this.toRgb();return n.r=Math.max(0,Math.min(255,n.r-Math.round(255*-(t/100)))),n.g=Math.max(0,Math.min(255,n.g-Math.round(255*-(t/100)))),n.b=Math.max(0,Math.min(255,n.b-Math.round(255*-(t/100)))),new e(n)},e.prototype.darken=function(t){t===void 0&&(t=10);var n=this.toHsl();return n.l-=t/100,n.l=Yo(n.l),new e(n)},e.prototype.tint=function(t){return t===void 0&&(t=10),this.mix("white",t)},e.prototype.shade=function(t){return t===void 0&&(t=10),this.mix("black",t)},e.prototype.desaturate=function(t){t===void 0&&(t=10);var n=this.toHsl();return n.s-=t/100,n.s=Yo(n.s),new e(n)},e.prototype.saturate=function(t){t===void 0&&(t=10);var n=this.toHsl();return n.s+=t/100,n.s=Yo(n.s),new e(n)},e.prototype.greyscale=function(){return this.desaturate(100)},e.prototype.spin=function(t){var n=this.toHsl(),r=(n.h+t)%360;return n.h=r<0?360+r:r,new e(n)},e.prototype.mix=function(t,n){n===void 0&&(n=50);var r=this.toRgb(),o=new e(t).toRgb(),i=n/100,l={r:(o.r-r.r)*i+r.r,g:(o.g-r.g)*i+r.g,b:(o.b-r.b)*i+r.b,a:(o.a-r.a)*i+r.a};return new e(l)},e.prototype.analogous=function(t,n){t===void 0&&(t=6),n===void 0&&(n=30);var r=this.toHsl(),o=360/n,i=[this];for(r.h=(r.h-(o*t>>1)+720)%360;--t;)r.h=(r.h+o)%360,i.push(new e(r));return i},e.prototype.complement=function(){var t=this.toHsl();return t.h=(t.h+180)%360,new e(t)},e.prototype.monochromatic=function(t){t===void 0&&(t=6);for(var n=this.toHsv(),r=n.h,o=n.s,i=n.v,l=[],s=1/t;t--;)l.push(new e({h:r,s:o,v:i})),i=(i+s)%1;return l},e.prototype.splitcomplement=function(){var t=this.toHsl(),n=t.h;return[this,new e({h:(n+72)%360,s:t.s,l:t.l}),new e({h:(n+216)%360,s:t.s,l:t.l})]},e.prototype.onBackground=function(t){var n=this.toRgb(),r=new e(t).toRgb(),o=n.a+r.a*(1-n.a);return new e({r:(n.r*n.a+r.r*r.a*(1-n.a))/o,g:(n.g*n.a+r.g*r.a*(1-n.a))/o,b:(n.b*n.a+r.b*r.a*(1-n.a))/o,a:o})},e.prototype.triad=function(){return this.polyad(3)},e.prototype.tetrad=function(){return this.polyad(4)},e.prototype.polyad=function(t){for(var n=this.toHsl(),r=n.h,o=[this],i=360/t,l=1;l<t;l++)o.push(new e({h:(r+l*i)%360,s:n.s,l:n.l}));return o},e.prototype.equals=function(t){return this.toRgbString()===new e(t).toRgbString()},e}(),Zc="EyeDropper"in window,V=class extends xe{constructor(){super(),this.formControlController=new ul(this),this.isSafeValue=!1,this.localize=new yr(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.handleFocusOut=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.input.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")})}handleFormatToggle(){const e=["hex","rgb","hsl","hsv"],t=(e.indexOf(this.format)+1)%e.length;this.format=e[t],this.setColor(this.value),this.emit("sl-change"),this.emit("sl-input")}handleAlphaDrag(e){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),n=t.querySelector(".color-picker__slider-handle"),{width:r}=t.getBoundingClientRect();let o=this.value;n.focus(),e.preventDefault(),ql(t,{onMove:i=>{this.alpha=qe(i/r*100,0,100),this.syncValues(),this.value!==o&&(o=this.value,this.emit("sl-change"),this.emit("sl-input"))},initialEvent:e})}handleHueDrag(e){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),n=t.querySelector(".color-picker__slider-handle"),{width:r}=t.getBoundingClientRect();let o=this.value;n.focus(),e.preventDefault(),ql(t,{onMove:i=>{this.hue=qe(i/r*360,0,360),this.syncValues(),this.value!==o&&(o=this.value,this.emit("sl-change"),this.emit("sl-input"))},initialEvent:e})}handleGridDrag(e){const t=this.shadowRoot.querySelector(".color-picker__grid"),n=t.querySelector(".color-picker__grid-handle"),{width:r,height:o}=t.getBoundingClientRect();let i=this.value;n.focus(),e.preventDefault(),this.isDraggingGridHandle=!0,ql(t,{onMove:(l,s)=>{this.saturation=qe(l/r*100,0,100),this.brightness=qe(100-s/o*100,0,100),this.syncValues(),this.value!==i&&(i=this.value,this.emit("sl-change"),this.emit("sl-input"))},onStop:()=>this.isDraggingGridHandle=!1,initialEvent:e})}handleAlphaKeyDown(e){const t=e.shiftKey?10:1,n=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.alpha=qe(this.alpha-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.alpha=qe(this.alpha+t,0,100),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.alpha=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.alpha=100,this.syncValues()),this.value!==n&&(this.emit("sl-change"),this.emit("sl-input"))}handleHueKeyDown(e){const t=e.shiftKey?10:1,n=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.hue=qe(this.hue-t,0,360),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.hue=qe(this.hue+t,0,360),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.hue=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.hue=360,this.syncValues()),this.value!==n&&(this.emit("sl-change"),this.emit("sl-input"))}handleGridKeyDown(e){const t=e.shiftKey?10:1,n=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.saturation=qe(this.saturation-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.saturation=qe(this.saturation+t,0,100),this.syncValues()),e.key==="ArrowUp"&&(e.preventDefault(),this.brightness=qe(this.brightness+t,0,100),this.syncValues()),e.key==="ArrowDown"&&(e.preventDefault(),this.brightness=qe(this.brightness-t,0,100),this.syncValues()),this.value!==n&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputChange(e){const t=e.target,n=this.value;e.stopPropagation(),this.input.value?(this.setColor(t.value),t.value=this.value):this.value="",this.value!==n&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputInput(e){this.formControlController.updateValidity(),e.stopPropagation()}handleInputKeyDown(e){if(e.key==="Enter"){const t=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")),setTimeout(()=>this.input.select())):this.hue=0}}handleInputInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleTouchMove(e){e.preventDefault()}parseColor(e){const t=new Xc(e);if(!t.isValid)return null;const n=t.toHsl(),r={h:n.h,s:n.s*100,l:n.l*100,a:n.a},o=t.toRgb(),i=t.toHexString(),l=t.toHex8String(),s=t.toHsv(),a={h:s.h,s:s.s*100,v:s.v*100,a:s.a};return{hsl:{h:r.h,s:r.s,l:r.l,string:this.setLetterCase(`hsl(${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%)`)},hsla:{h:r.h,s:r.s,l:r.l,a:r.a,string:this.setLetterCase(`hsla(${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%, ${r.a.toFixed(2).toString()})`)},hsv:{h:a.h,s:a.s,v:a.v,string:this.setLetterCase(`hsv(${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.v)}%)`)},hsva:{h:a.h,s:a.s,v:a.v,a:a.a,string:this.setLetterCase(`hsva(${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.v)}%, ${a.a.toFixed(2).toString()})`)},rgb:{r:o.r,g:o.g,b:o.b,string:this.setLetterCase(`rgb(${Math.round(o.r)}, ${Math.round(o.g)}, ${Math.round(o.b)})`)},rgba:{r:o.r,g:o.g,b:o.b,a:o.a,string:this.setLetterCase(`rgba(${Math.round(o.r)}, ${Math.round(o.g)}, ${Math.round(o.b)}, ${o.a.toFixed(2).toString()})`)},hex:this.setLetterCase(i),hexa:this.setLetterCase(l)}}setColor(e){const t=this.parseColor(e);return t===null?!1:(this.hue=t.hsva.h,this.saturation=t.hsva.s,this.brightness=t.hsva.v,this.alpha=this.opacity?t.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(e){return typeof e!="string"?"":this.uppercase?e.toUpperCase():e.toLowerCase()}async syncValues(){const e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);e!==null&&(this.format==="hsl"?this.inputValue=this.opacity?e.hsla.string:e.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?e.rgba.string:e.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?e.hsva.string:e.hsv.string:this.inputValue=this.opacity?e.hexa:e.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){if(!Zc)return;new EyeDropper().open().then(t=>{const n=this.value;this.setColor(t.sRGBHex),this.value!==n&&(this.emit("sl-change"),this.emit("sl-input"))}).catch(()=>{})}selectSwatch(e){const t=this.value;this.disabled||(this.setColor(e),this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")))}getHexString(e,t,n,r=100){const o=new Xc(`hsva(${e}, ${t}, ${n}, ${r/100})`);return o.isValid?o.toHex8String():""}stopNestedEventPropagation(e){e.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(e,t){if(this.isEmpty=!t,t||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){const n=this.parseColor(t);n!==null?(this.inputValue=this.value,this.hue=n.hsva.h,this.saturation=n.hsva.s,this.brightness=n.hsva.v,this.alpha=n.hsva.a*100,this.syncValues()):this.inputValue=e??""}}focus(e){this.inline?this.base.focus(e):this.trigger.focus(e)}blur(){var e;const t=this.inline?this.base:this.trigger;this.hasFocus&&(t.focus({preventScroll:!0}),t.blur()),(e=this.dropdown)!=null&&e.open&&this.dropdown.hide()}getFormattedValue(e="hex"){const t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(t===null)return"";switch(e){case"hex":return t.hex;case"hexa":return t.hexa;case"rgb":return t.rgb.string;case"rgba":return t.rgba.string;case"hsl":return t.hsl.string;case"hsla":return t.hsla.string;case"hsv":return t.hsv.string;case"hsva":return t.hsva.string;default:return""}}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.inline&&!this.validity.valid?(this.dropdown.show(),this.addEventListener("sl-after-show",()=>this.input.reportValidity(),{once:!0}),this.disabled||this.formControlController.emitInvalidEvent(),!1):this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.saturation,t=100-this.brightness,n=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(o=>o.trim()!==""),r=X`
      <div
        part="base"
        class=${Ue({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled,"color-picker--focused":this.hasFocus})}
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
          style=${Ot({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${Ue({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${Ot({top:`${t}%`,left:`${e}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
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
                style=${Ot({left:`${this.hue===0?0:100/(360/this.hue)}%`})}
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
                      style=${Ot({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="color-picker__slider-handle"
                      style=${Ot({left:`${this.alpha}%`})}
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
            style=${Ot({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
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
            ${Zc?X`
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
                        style=${Ot({backgroundColor:i.hexa})}
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
          class=${Ue({"color-dropdown__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":this.size==="small","color-dropdown__trigger--medium":this.size==="medium","color-dropdown__trigger--large":this.size==="large","color-dropdown__trigger--empty":this.isEmpty,"color-dropdown__trigger--focused":this.hasFocus,"color-picker__transparent-bg":!0})}
          style=${Ot({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${r}
      </sl-dropdown>
    `}};V.styles=fv;V.dependencies={"sl-button-group":Eo,"sl-button":W,"sl-dropdown":ze,"sl-icon":lt,"sl-input":O,"sl-visually-hidden":Pp};m([pe('[part~="base"]')],V.prototype,"base",2);m([pe('[part~="input"]')],V.prototype,"input",2);m([pe(".color-dropdown")],V.prototype,"dropdown",2);m([pe('[part~="preview"]')],V.prototype,"previewButton",2);m([pe('[part~="trigger"]')],V.prototype,"trigger",2);m([$e()],V.prototype,"hasFocus",2);m([$e()],V.prototype,"isDraggingGridHandle",2);m([$e()],V.prototype,"isEmpty",2);m([$e()],V.prototype,"inputValue",2);m([$e()],V.prototype,"hue",2);m([$e()],V.prototype,"saturation",2);m([$e()],V.prototype,"brightness",2);m([$e()],V.prototype,"alpha",2);m([w()],V.prototype,"value",2);m([nu()],V.prototype,"defaultValue",2);m([w()],V.prototype,"label",2);m([w()],V.prototype,"format",2);m([w({type:Boolean,reflect:!0})],V.prototype,"inline",2);m([w({reflect:!0})],V.prototype,"size",2);m([w({attribute:"no-format-toggle",type:Boolean})],V.prototype,"noFormatToggle",2);m([w()],V.prototype,"name",2);m([w({type:Boolean,reflect:!0})],V.prototype,"disabled",2);m([w({type:Boolean})],V.prototype,"hoist",2);m([w({type:Boolean})],V.prototype,"opacity",2);m([w({type:Boolean})],V.prototype,"uppercase",2);m([w()],V.prototype,"swatches",2);m([w({reflect:!0})],V.prototype,"form",2);m([w({type:Boolean,reflect:!0})],V.prototype,"required",2);m([Oe("format",{waitUntilFirstUpdate:!0})],V.prototype,"handleFormatChange",1);m([Oe("opacity",{waitUntilFirstUpdate:!0})],V.prototype,"handleOpacityChange",1);m([Oe("value")],V.prototype,"handleValueChange",1);var Tv="sl-color-picker";V.define("sl-color-picker");var Lv=tu({tagName:Tv,elementClass:V,react:la,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlColorPicker"}),Nv=Lv;function Rv(){const[e,t]=Be.useState([[[255,0,0],"","",[255,255,255],[0,0,255]]]),[n,r]=Be.useState(0),[o,i]=Be.useState([[255,0,0],"","",[255,255,255],[0,0,255]]),[l,s]=Be.useState(5),[a,u]=Be.useState(5);function h($){var S=$.target.files[0],F=new FileReader;F.onload=()=>{let q=Jc(F.result);i(q),s(q.length),u(q.length),x(q)},F.readAsText(S)}function d($){let S=$.target.value;const F=new XMLHttpRequest;F.open("GET","./colormap/"+S+".rgb"),F.responseType="text",F.onload=()=>{let q=Jc(F.response);i(q),s(q.length),u(q.length),x(q)},F.send()}function f(){let $=[[255,255,255],...o];i($),x($)}function v($){let S=[...o];S.splice($+1,0,""),S[S.length-1]==""&&(S[S.length-1]=[255,255,255]),i(S),l<S.length&&s(S.length),x(S)}function y($){if(o.length==2)return;let S=[...o];S.splice($,1),S[0]==""&&(S[0]=[255,255,255]),S[S.length-1]==""&&(S[S.length-1]=[255,255,255]),i(S),x(S)}function b($,S){let F=[...o];F.splice(S,1,$.target.getFormattedValue("rgb").substr(4).split(")")[0].split(",").map(q=>parseInt(q))),F[0]==""&&(F[0]=[255,255,255]),F[F.length-1]==""&&(F[F.length-1]=[255,255,255]),i(F)}function T($){if($===0||$===o.length-1)return;let S=[...o];S.splice($,1,""),i(S),x(S)}function p($){if($==0)return;let S=[...o];S[$-1]=S.splice($,1,S[$-1])[0],S[0]==""&&(S[0]=[255,255,255]),S[S.length-1]==""&&(S[S.length-1]=[255,255,255]),i(S),x(S)}function c($){if($===o.length-1)return;let S=[...o];S[$+1]=S.splice($,1,S[$+1])[0],S[0]==""&&(S[0]=[255,255,255]),S[S.length-1]==""&&(S[S.length-1]=[255,255,255]),i(S),x(S)}function g($){const S=$.target.value<o.length?a:$.target.value;u($.target.value),s(S)}function _($){const S=$.target.value<o.length?o.length:$.target.value;u(S),s(S)}function x($){const S=[...e.slice(0,n+1),$];t(S),r(S.length-1)}function C(){let $=[...o];x($)}function E(){if(n==0)return;let $=e[n-1];i($),r(n-1)}function z(){if(n==e.length-1)return;let $=e[n+1];i($),r(n+1)}const j=o.map(($,S)=>L.jsx(Mv,{rgb:$,rank:S+1,setBlankColor:()=>T(S),swapUp:()=>p(S),swapDown:()=>c(S),changeColor:F=>b(F,S),addColorDown:()=>v(S),delColor:()=>y(S),handleSlBlur:C},S)),ie=Ov(o,l);return L.jsxs(L.Fragment,{children:[L.jsx(A0,{color_out_rgb:ie}),L.jsx("button",{title:"Undo",onClick:E,children:"↶"}),L.jsx("button",{title:"Redo",onClick:z,children:"↷"}),L.jsx("br",{}),L.jsx("input",{type:"file",accept:".rgb",onChange:$=>{h($)}}),L.jsx(vm,{changeMap:$=>d($)}),L.jsx("hr",{}),L.jsxs("div",{style:{display:"flex",justifyContent:"space-around"},children:[L.jsxs("div",{className:"selector",children:[L.jsx("label",{children:"n_output colors: "}),L.jsx("input",{type:"number",step:"1",value:a,onChange:$=>g($),onBlur:$=>_($),style:{width:"3em"}}),L.jsx("button",{className:"adjust_btn",onClick:f,title:"add color down",children:"▼"}),L.jsx("br",{}),j]}),L.jsx($0,{coloroutrgb:ie})]})]})}function Mv(e){return L.jsxs(L.Fragment,{children:[L.jsxs("span",{style:{display:"inline-block",width:"3em"},children:[e.rank,". "]}),L.jsx(Nv,{className:"colorpicker",value:e.rgb==""?"":"rgb("+e.rgb[0]+","+e.rgb[1]+","+e.rgb[2]+")",onSlChange:(t,n)=>e.changeColor(t,n),onSlBlur:e.handleSlBlur}),L.jsx("button",{className:"adjust_btn",onClick:t=>e.setBlankColor(t),title:"set color to blank",children:"#"}),L.jsx("button",{className:"adjust_btn",onClick:t=>e.swapUp(t),title:"swap up",children:"↑"}),L.jsx("button",{className:"adjust_btn",onClick:t=>e.swapDown(t),title:"swap down",children:"↓"}),L.jsx("button",{className:"adjust_btn",onClick:t=>e.addColorDown(t),title:"add color down",children:"▼"}),L.jsx("button",{className:"adjust_btn",onClick:t=>e.delColor(t),title:"delete color",children:"X"}),L.jsx("br",{})]})}function Ov(e,t){const n=e.length;t=Math.max(t,n);const r=Fv([n-1,t-1]),o=Dv(t-1,n-1)+1,i=(n-1)/r,l=(t-1)/r,s=[],a=[];var u=0;for(let d=0;d<e.length-1;d++)if(e[d+1]){var h=1/l/(d-u+1);for(let f=0;f<l*(d-u+1);f++){const v=e[u][0]+(e[d+1][0]-e[u][0])*h*f,y=e[u][1]+(e[d+1][1]-e[u][1])*h*f,b=e[u][2]+(e[d+1][2]-e[u][2])*h*f;s.push([parseInt(v),parseInt(y),parseInt(b)])}u=d+1}s.push(e[e.length-1]);for(let d=0;d<o;d=d+i)a.push(s[d]);return a}var cu=(e,t)=>t?cu(t,e%t):e,Dv=(e,t)=>e/cu(e,t)*t,Fv=e=>cu(Math.max(...e),Math.min(...e));function Jc(e){const t=e.split(`
`),n=1e3,r=[];let o=0,i=-1;function l(a){return!isNaN(parseFloat(a))&&isFinite(a)}for(let a=0;a<t.length&&o<n;a++){let u=t[a].trim();u.length===0&&(u="#");const h=u.split(/\s+/);if(h.length>=3){let d=-1,f=-1,v=-1;l(h[0])&&(d=parseFloat(h[0])),l(h[1])&&(f=parseFloat(h[1])),l(h[2])&&(v=parseFloat(h[2]));let y=-1;if(h.length>3&&l(h[3])&&(y=parseFloat(h[3])),d>=0&&f>=0&&v>=0){let b=[d,f,v,y];r.push(b),o++,d>i&&(i=d),f>i&&(i=f),v>i&&(i=v)}}}const s=new Array(o).fill(null).map(()=>[0,0,0,0]);for(let a=0;a<o;a++)s[a]=r[a];if(i<=1)for(let a=0;a<o;a++){s[a][3]=s[a][3]<0?1:s[a][3];for(let u=0;u<3;u++)s[a][u]*=255}else if(i<256)for(let a=0;a<o;a++)s[a][3]=s[a][3]<0?255:s[a][3];else for(let a=0;a<o;a++){s[a][3]=s[a][3]<0?i:s[a][3];for(let u=0;u<3;u++)s[a][u]/=i,s[a][u]*=255}for(let a=0;a<o;a++)for(let u=0;u<3;u++)s[a][u]=Math.round(s[a][u]);return s}es.createRoot(document.getElementById("root")).render(L.jsx(ud.StrictMode,{children:L.jsx(Rv,{})}));
