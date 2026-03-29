function qm(r,o){for(var i=0;i<o.length;i++){const s=o[i];if(typeof s!="string"&&!Array.isArray(s)){for(const c in s)if(c!=="default"&&!(c in r)){const d=Object.getOwnPropertyDescriptor(s,c);d&&Object.defineProperty(r,c,d.get?d:{enumerable:!0,get:()=>s[c]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const f of d.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerPolicy&&(d.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?d.credentials="include":c.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(c){if(c.ep)return;c.ep=!0;const d=i(c);fetch(c.href,d)}})();function pf(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Ta={exports:{}},Io={},Ra={exports:{}},se={};var yh;function Qm(){if(yh)return se;yh=1;var r=Symbol.for("react.element"),o=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),k=Symbol.iterator;function A(x){return x===null||typeof x!="object"?null:(x=k&&x[k]||x["@@iterator"],typeof x=="function"?x:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P=Object.assign,I={};function V(x,R,ie){this.props=x,this.context=R,this.refs=I,this.updater=ie||z}V.prototype.isReactComponent={},V.prototype.setState=function(x,R){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,R,"setState")},V.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function X(){}X.prototype=V.prototype;function te(x,R,ie){this.props=x,this.context=R,this.refs=I,this.updater=ie||z}var ne=te.prototype=new X;ne.constructor=te,P(ne,V.prototype),ne.isPureReactComponent=!0;var re=Array.isArray,ye=Object.prototype.hasOwnProperty,ae={current:null},de={key:!0,ref:!0,__self:!0,__source:!0};function Ae(x,R,ie){var ue,pe={},me=null,xe=null;if(R!=null)for(ue in R.ref!==void 0&&(xe=R.ref),R.key!==void 0&&(me=""+R.key),R)ye.call(R,ue)&&!de.hasOwnProperty(ue)&&(pe[ue]=R[ue]);var be=arguments.length-2;if(be===1)pe.children=ie;else if(1<be){for(var Re=Array(be),wt=0;wt<be;wt++)Re[wt]=arguments[wt+2];pe.children=Re}if(x&&x.defaultProps)for(ue in be=x.defaultProps,be)pe[ue]===void 0&&(pe[ue]=be[ue]);return{$$typeof:r,type:x,key:me,ref:xe,props:pe,_owner:ae.current}}function Fe(x,R){return{$$typeof:r,type:x.type,key:R,ref:x.ref,props:x.props,_owner:x._owner}}function Pe(x){return typeof x=="object"&&x!==null&&x.$$typeof===r}function We(x){var R={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(ie){return R[ie]})}var Te=/\/+/g;function Ee(x,R){return typeof x=="object"&&x!==null&&x.key!=null?We(""+x.key):R.toString(36)}function F(x,R,ie,ue,pe){var me=typeof x;(me==="undefined"||me==="boolean")&&(x=null);var xe=!1;if(x===null)xe=!0;else switch(me){case"string":case"number":xe=!0;break;case"object":switch(x.$$typeof){case r:case o:xe=!0}}if(xe)return xe=x,pe=pe(xe),x=ue===""?"."+Ee(xe,0):ue,re(pe)?(ie="",x!=null&&(ie=x.replace(Te,"$&/")+"/"),F(pe,R,ie,"",function(wt){return wt})):pe!=null&&(Pe(pe)&&(pe=Fe(pe,ie+(!pe.key||xe&&xe.key===pe.key?"":(""+pe.key).replace(Te,"$&/")+"/")+x)),R.push(pe)),1;if(xe=0,ue=ue===""?".":ue+":",re(x))for(var be=0;be<x.length;be++){me=x[be];var Re=ue+Ee(me,be);xe+=F(me,R,ie,Re,pe)}else if(Re=A(x),typeof Re=="function")for(x=Re.call(x),be=0;!(me=x.next()).done;)me=me.value,Re=ue+Ee(me,be++),xe+=F(me,R,ie,Re,pe);else if(me==="object")throw R=String(x),Error("Objects are not valid as a React child (found: "+(R==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":R)+"). If you meant to render a collection of children, use an array instead.");return xe}function q(x,R,ie){if(x==null)return x;var ue=[],pe=0;return F(x,ue,"","",function(me){return R.call(ie,me,pe++)}),ue}function le(x){if(x._status===-1){var R=x._result;R=R(),R.then(function(ie){(x._status===0||x._status===-1)&&(x._status=1,x._result=ie)},function(ie){(x._status===0||x._status===-1)&&(x._status=2,x._result=ie)}),x._status===-1&&(x._status=0,x._result=R)}if(x._status===1)return x._result.default;throw x._result}var ee={current:null},D={transition:null},Q={ReactCurrentDispatcher:ee,ReactCurrentBatchConfig:D,ReactCurrentOwner:ae};function B(){throw Error("act(...) is not supported in production builds of React.")}return se.Children={map:q,forEach:function(x,R,ie){q(x,function(){R.apply(this,arguments)},ie)},count:function(x){var R=0;return q(x,function(){R++}),R},toArray:function(x){return q(x,function(R){return R})||[]},only:function(x){if(!Pe(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},se.Component=V,se.Fragment=i,se.Profiler=c,se.PureComponent=te,se.StrictMode=s,se.Suspense=m,se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q,se.act=B,se.cloneElement=function(x,R,ie){if(x==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+x+".");var ue=P({},x.props),pe=x.key,me=x.ref,xe=x._owner;if(R!=null){if(R.ref!==void 0&&(me=R.ref,xe=ae.current),R.key!==void 0&&(pe=""+R.key),x.type&&x.type.defaultProps)var be=x.type.defaultProps;for(Re in R)ye.call(R,Re)&&!de.hasOwnProperty(Re)&&(ue[Re]=R[Re]===void 0&&be!==void 0?be[Re]:R[Re])}var Re=arguments.length-2;if(Re===1)ue.children=ie;else if(1<Re){be=Array(Re);for(var wt=0;wt<Re;wt++)be[wt]=arguments[wt+2];ue.children=be}return{$$typeof:r,type:x.type,key:pe,ref:me,props:ue,_owner:xe}},se.createContext=function(x){return x={$$typeof:f,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},x.Provider={$$typeof:d,_context:x},x.Consumer=x},se.createElement=Ae,se.createFactory=function(x){var R=Ae.bind(null,x);return R.type=x,R},se.createRef=function(){return{current:null}},se.forwardRef=function(x){return{$$typeof:p,render:x}},se.isValidElement=Pe,se.lazy=function(x){return{$$typeof:v,_payload:{_status:-1,_result:x},_init:le}},se.memo=function(x,R){return{$$typeof:b,type:x,compare:R===void 0?null:R}},se.startTransition=function(x){var R=D.transition;D.transition={};try{x()}finally{D.transition=R}},se.unstable_act=B,se.useCallback=function(x,R){return ee.current.useCallback(x,R)},se.useContext=function(x){return ee.current.useContext(x)},se.useDebugValue=function(){},se.useDeferredValue=function(x){return ee.current.useDeferredValue(x)},se.useEffect=function(x,R){return ee.current.useEffect(x,R)},se.useId=function(){return ee.current.useId()},se.useImperativeHandle=function(x,R,ie){return ee.current.useImperativeHandle(x,R,ie)},se.useInsertionEffect=function(x,R){return ee.current.useInsertionEffect(x,R)},se.useLayoutEffect=function(x,R){return ee.current.useLayoutEffect(x,R)},se.useMemo=function(x,R){return ee.current.useMemo(x,R)},se.useReducer=function(x,R,ie){return ee.current.useReducer(x,R,ie)},se.useRef=function(x){return ee.current.useRef(x)},se.useState=function(x){return ee.current.useState(x)},se.useSyncExternalStore=function(x,R,ie){return ee.current.useSyncExternalStore(x,R,ie)},se.useTransition=function(){return ee.current.useTransition()},se.version="18.3.1",se}var bh;function nu(){return bh||(bh=1,Ra.exports=Qm()),Ra.exports}var wh;function Ym(){if(wh)return Io;wh=1;var r=nu(),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function f(p,m,b){var v,k={},A=null,z=null;b!==void 0&&(A=""+b),m.key!==void 0&&(A=""+m.key),m.ref!==void 0&&(z=m.ref);for(v in m)s.call(m,v)&&!d.hasOwnProperty(v)&&(k[v]=m[v]);if(p&&p.defaultProps)for(v in m=p.defaultProps,m)k[v]===void 0&&(k[v]=m[v]);return{$$typeof:o,type:p,key:A,ref:z,props:k,_owner:c.current}}return Io.Fragment=i,Io.jsx=f,Io.jsxs=f,Io}var _h;function Gm(){return _h||(_h=1,Ta.exports=Ym()),Ta.exports}var M=Gm(),zt=nu();const mf=pf(zt),qn=qm({__proto__:null,default:mf},[zt]);var dl={},La={exports:{}},vt={},Na={exports:{}},Oa={};var xh;function Xm(){return xh||(xh=1,(function(r){function o(D,Q){var B=D.length;D.push(Q);e:for(;0<B;){var x=B-1>>>1,R=D[x];if(0<c(R,Q))D[x]=Q,D[B]=R,B=x;else break e}}function i(D){return D.length===0?null:D[0]}function s(D){if(D.length===0)return null;var Q=D[0],B=D.pop();if(B!==Q){D[0]=B;e:for(var x=0,R=D.length,ie=R>>>1;x<ie;){var ue=2*(x+1)-1,pe=D[ue],me=ue+1,xe=D[me];if(0>c(pe,B))me<R&&0>c(xe,pe)?(D[x]=xe,D[me]=B,x=me):(D[x]=pe,D[ue]=B,x=ue);else if(me<R&&0>c(xe,B))D[x]=xe,D[me]=B,x=me;else break e}}return Q}function c(D,Q){var B=D.sortIndex-Q.sortIndex;return B!==0?B:D.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var d=performance;r.unstable_now=function(){return d.now()}}else{var f=Date,p=f.now();r.unstable_now=function(){return f.now()-p}}var m=[],b=[],v=1,k=null,A=3,z=!1,P=!1,I=!1,V=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,te=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ne(D){for(var Q=i(b);Q!==null;){if(Q.callback===null)s(b);else if(Q.startTime<=D)s(b),Q.sortIndex=Q.expirationTime,o(m,Q);else break;Q=i(b)}}function re(D){if(I=!1,ne(D),!P)if(i(m)!==null)P=!0,le(ye);else{var Q=i(b);Q!==null&&ee(re,Q.startTime-D)}}function ye(D,Q){P=!1,I&&(I=!1,X(Ae),Ae=-1),z=!0;var B=A;try{for(ne(Q),k=i(m);k!==null&&(!(k.expirationTime>Q)||D&&!We());){var x=k.callback;if(typeof x=="function"){k.callback=null,A=k.priorityLevel;var R=x(k.expirationTime<=Q);Q=r.unstable_now(),typeof R=="function"?k.callback=R:k===i(m)&&s(m),ne(Q)}else s(m);k=i(m)}if(k!==null)var ie=!0;else{var ue=i(b);ue!==null&&ee(re,ue.startTime-Q),ie=!1}return ie}finally{k=null,A=B,z=!1}}var ae=!1,de=null,Ae=-1,Fe=5,Pe=-1;function We(){return!(r.unstable_now()-Pe<Fe)}function Te(){if(de!==null){var D=r.unstable_now();Pe=D;var Q=!0;try{Q=de(!0,D)}finally{Q?Ee():(ae=!1,de=null)}}else ae=!1}var Ee;if(typeof te=="function")Ee=function(){te(Te)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,q=F.port2;F.port1.onmessage=Te,Ee=function(){q.postMessage(null)}}else Ee=function(){V(Te,0)};function le(D){de=D,ae||(ae=!0,Ee())}function ee(D,Q){Ae=V(function(){D(r.unstable_now())},Q)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(D){D.callback=null},r.unstable_continueExecution=function(){P||z||(P=!0,le(ye))},r.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Fe=0<D?Math.floor(1e3/D):5},r.unstable_getCurrentPriorityLevel=function(){return A},r.unstable_getFirstCallbackNode=function(){return i(m)},r.unstable_next=function(D){switch(A){case 1:case 2:case 3:var Q=3;break;default:Q=A}var B=A;A=Q;try{return D()}finally{A=B}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(D,Q){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var B=A;A=D;try{return Q()}finally{A=B}},r.unstable_scheduleCallback=function(D,Q,B){var x=r.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?x+B:x):B=x,D){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=B+R,D={id:v++,callback:Q,priorityLevel:D,startTime:B,expirationTime:R,sortIndex:-1},B>x?(D.sortIndex=B,o(b,D),i(m)===null&&D===i(b)&&(I?(X(Ae),Ae=-1):I=!0,ee(re,B-x))):(D.sortIndex=R,o(m,D),P||z||(P=!0,le(ye))),D},r.unstable_shouldYield=We,r.unstable_wrapCallback=function(D){var Q=A;return function(){var B=A;A=Q;try{return D.apply(this,arguments)}finally{A=B}}}})(Oa)),Oa}var kh;function Zm(){return kh||(kh=1,Na.exports=Xm()),Na.exports}var Sh;function Jm(){if(Sh)return vt;Sh=1;var r=nu(),o=Zm();function i(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,c={};function d(e,t){f(e,t),f(e+"Capture",t)}function f(e,t){for(c[e]=t,e=0;e<t.length;e++)s.add(t[e])}var p=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,b=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},k={};function A(e){return m.call(k,e)?!0:m.call(v,e)?!1:b.test(e)?k[e]=!0:(v[e]=!0,!1)}function z(e,t,n,l){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return l?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function P(e,t,n,l){if(t===null||typeof t>"u"||z(e,t,n,l))return!0;if(l)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function I(e,t,n,l,a,u,h){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=l,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=u,this.removeEmptyString=h}var V={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){V[e]=new I(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];V[t]=new I(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){V[e]=new I(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){V[e]=new I(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){V[e]=new I(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){V[e]=new I(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){V[e]=new I(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){V[e]=new I(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){V[e]=new I(e,5,!1,e.toLowerCase(),null,!1,!1)});var X=/[\-:]([a-z])/g;function te(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(X,te);V[t]=new I(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(X,te);V[t]=new I(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(X,te);V[t]=new I(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){V[e]=new I(e,1,!1,e.toLowerCase(),null,!1,!1)}),V.xlinkHref=new I("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){V[e]=new I(e,1,!1,e.toLowerCase(),null,!0,!0)});function ne(e,t,n,l){var a=V.hasOwnProperty(t)?V[t]:null;(a!==null?a.type!==0:l||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(P(t,n,a,l)&&(n=null),l||a===null?A(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,l=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,l?e.setAttributeNS(l,t,n):e.setAttribute(t,n))))}var re=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ye=Symbol.for("react.element"),ae=Symbol.for("react.portal"),de=Symbol.for("react.fragment"),Ae=Symbol.for("react.strict_mode"),Fe=Symbol.for("react.profiler"),Pe=Symbol.for("react.provider"),We=Symbol.for("react.context"),Te=Symbol.for("react.forward_ref"),Ee=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),q=Symbol.for("react.memo"),le=Symbol.for("react.lazy"),ee=Symbol.for("react.offscreen"),D=Symbol.iterator;function Q(e){return e===null||typeof e!="object"?null:(e=D&&e[D]||e["@@iterator"],typeof e=="function"?e:null)}var B=Object.assign,x;function R(e){if(x===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);x=t&&t[1]||""}return`
`+x+e}var ie=!1;function ue(e,t){if(!e||ie)return"";ie=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch($){var l=$}Reflect.construct(e,[],t)}else{try{t.call()}catch($){l=$}e.call(t.prototype)}else{try{throw Error()}catch($){l=$}e()}}catch($){if($&&l&&typeof $.stack=="string"){for(var a=$.stack.split(`
`),u=l.stack.split(`
`),h=a.length-1,g=u.length-1;1<=h&&0<=g&&a[h]!==u[g];)g--;for(;1<=h&&0<=g;h--,g--)if(a[h]!==u[g]){if(h!==1||g!==1)do if(h--,g--,0>g||a[h]!==u[g]){var y=`
`+a[h].replace(" at new "," at ");return e.displayName&&y.includes("<anonymous>")&&(y=y.replace("<anonymous>",e.displayName)),y}while(1<=h&&0<=g);break}}}finally{ie=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?R(e):""}function pe(e){switch(e.tag){case 5:return R(e.type);case 16:return R("Lazy");case 13:return R("Suspense");case 19:return R("SuspenseList");case 0:case 2:case 15:return e=ue(e.type,!1),e;case 11:return e=ue(e.type.render,!1),e;case 1:return e=ue(e.type,!0),e;default:return""}}function me(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case de:return"Fragment";case ae:return"Portal";case Fe:return"Profiler";case Ae:return"StrictMode";case Ee:return"Suspense";case F:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case We:return(e.displayName||"Context")+".Consumer";case Pe:return(e._context.displayName||"Context")+".Provider";case Te:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case q:return t=e.displayName||null,t!==null?t:me(e.type)||"Memo";case le:t=e._payload,e=e._init;try{return me(e(t))}catch{}}return null}function xe(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return me(t);case 8:return t===Ae?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function be(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Re(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function wt(e){var t=Re(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),l=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,u=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(h){l=""+h,u.call(this,h)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return l},setValue:function(h){l=""+h},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ti(e){e._valueTracker||(e._valueTracker=wt(e))}function Su(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),l="";return e&&(l=Re(e)?e.checked?"true":"false":e.value),e=l,e!==n?(t.setValue(e),!0):!1}function ni(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Fl(e,t){var n=t.checked;return B({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Cu(e,t){var n=t.defaultValue==null?"":t.defaultValue,l=t.checked!=null?t.checked:t.defaultChecked;n=be(t.value!=null?t.value:n),e._wrapperState={initialChecked:l,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Eu(e,t){t=t.checked,t!=null&&ne(e,"checked",t,!1)}function Il(e,t){Eu(e,t);var n=be(t.value),l=t.type;if(n!=null)l==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(l==="submit"||l==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?jl(e,t.type,n):t.hasOwnProperty("defaultValue")&&jl(e,t.type,be(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function $u(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var l=t.type;if(!(l!=="submit"&&l!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function jl(e,t,n){(t!=="number"||ni(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Jr=Array.isArray;function vr(e,t,n,l){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&l&&(e[n].defaultSelected=!0)}else{for(n=""+be(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,l&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Vl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(i(91));return B({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function zu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(i(92));if(Jr(n)){if(1<n.length)throw Error(i(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:be(n)}}function Au(e,t){var n=be(t.value),l=be(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),l!=null&&(e.defaultValue=""+l)}function Pu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Tu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Tu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ri,Ru=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,l,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,l,a)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ri=ri||document.createElement("div"),ri.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ri.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function eo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var to={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xf=["Webkit","ms","Moz","O"];Object.keys(to).forEach(function(e){Xf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),to[t]=to[e]})});function Lu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||to.hasOwnProperty(e)&&to[e]?(""+t).trim():t+"px"}function Nu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var l=n.indexOf("--")===0,a=Lu(n,t[n],l);n==="float"&&(n="cssFloat"),l?e.setProperty(n,a):e[n]=a}}var Zf=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Hl(e,t){if(t){if(Zf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(i(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(i(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(i(61))}if(t.style!=null&&typeof t.style!="object")throw Error(i(62))}}function Ul(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wl=null;function Kl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ql=null,yr=null,br=null;function Ou(e){if(e=So(e)){if(typeof ql!="function")throw Error(i(280));var t=e.stateNode;t&&(t=Ei(t),ql(e.stateNode,e.type,t))}}function Mu(e){yr?br?br.push(e):br=[e]:yr=e}function Du(){if(yr){var e=yr,t=br;if(br=yr=null,Ou(e),t)for(e=0;e<t.length;e++)Ou(t[e])}}function Fu(e,t){return e(t)}function Iu(){}var Ql=!1;function ju(e,t,n){if(Ql)return e(t,n);Ql=!0;try{return Fu(e,t,n)}finally{Ql=!1,(yr!==null||br!==null)&&(Iu(),Du())}}function no(e,t){var n=e.stateNode;if(n===null)return null;var l=Ei(n);if(l===null)return null;n=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(i(231,t,typeof n));return n}var Yl=!1;if(p)try{var ro={};Object.defineProperty(ro,"passive",{get:function(){Yl=!0}}),window.addEventListener("test",ro,ro),window.removeEventListener("test",ro,ro)}catch{Yl=!1}function Jf(e,t,n,l,a,u,h,g,y){var $=Array.prototype.slice.call(arguments,3);try{t.apply(n,$)}catch(L){this.onError(L)}}var oo=!1,oi=null,ii=!1,Gl=null,ep={onError:function(e){oo=!0,oi=e}};function tp(e,t,n,l,a,u,h,g,y){oo=!1,oi=null,Jf.apply(ep,arguments)}function np(e,t,n,l,a,u,h,g,y){if(tp.apply(this,arguments),oo){if(oo){var $=oi;oo=!1,oi=null}else throw Error(i(198));ii||(ii=!0,Gl=$)}}function Gn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Vu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Bu(e){if(Gn(e)!==e)throw Error(i(188))}function rp(e){var t=e.alternate;if(!t){if(t=Gn(e),t===null)throw Error(i(188));return t!==e?null:e}for(var n=e,l=t;;){var a=n.return;if(a===null)break;var u=a.alternate;if(u===null){if(l=a.return,l!==null){n=l;continue}break}if(a.child===u.child){for(u=a.child;u;){if(u===n)return Bu(a),e;if(u===l)return Bu(a),t;u=u.sibling}throw Error(i(188))}if(n.return!==l.return)n=a,l=u;else{for(var h=!1,g=a.child;g;){if(g===n){h=!0,n=a,l=u;break}if(g===l){h=!0,l=a,n=u;break}g=g.sibling}if(!h){for(g=u.child;g;){if(g===n){h=!0,n=u,l=a;break}if(g===l){h=!0,l=u,n=a;break}g=g.sibling}if(!h)throw Error(i(189))}}if(n.alternate!==l)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function Hu(e){return e=rp(e),e!==null?Uu(e):null}function Uu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Uu(e);if(t!==null)return t;e=e.sibling}return null}var Wu=o.unstable_scheduleCallback,Ku=o.unstable_cancelCallback,op=o.unstable_shouldYield,ip=o.unstable_requestPaint,Ie=o.unstable_now,lp=o.unstable_getCurrentPriorityLevel,Xl=o.unstable_ImmediatePriority,qu=o.unstable_UserBlockingPriority,li=o.unstable_NormalPriority,sp=o.unstable_LowPriority,Qu=o.unstable_IdlePriority,si=null,en=null;function ap(e){if(en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(si,e,void 0,(e.current.flags&128)===128)}catch{}}var Vt=Math.clz32?Math.clz32:dp,up=Math.log,cp=Math.LN2;function dp(e){return e>>>=0,e===0?32:31-(up(e)/cp|0)|0}var ai=64,ui=4194304;function io(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ci(e,t){var n=e.pendingLanes;if(n===0)return 0;var l=0,a=e.suspendedLanes,u=e.pingedLanes,h=n&268435455;if(h!==0){var g=h&~a;g!==0?l=io(g):(u&=h,u!==0&&(l=io(u)))}else h=n&~a,h!==0?l=io(h):u!==0&&(l=io(u));if(l===0)return 0;if(t!==0&&t!==l&&(t&a)===0&&(a=l&-l,u=t&-t,a>=u||a===16&&(u&4194240)!==0))return t;if((l&4)!==0&&(l|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=l;0<t;)n=31-Vt(t),a=1<<n,l|=e[n],t&=~a;return l}function hp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fp(e,t){for(var n=e.suspendedLanes,l=e.pingedLanes,a=e.expirationTimes,u=e.pendingLanes;0<u;){var h=31-Vt(u),g=1<<h,y=a[h];y===-1?((g&n)===0||(g&l)!==0)&&(a[h]=hp(g,t)):y<=t&&(e.expiredLanes|=g),u&=~g}}function Zl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Yu(){var e=ai;return ai<<=1,(ai&4194240)===0&&(ai=64),e}function Jl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function lo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Vt(t),e[t]=n}function pp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var l=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-Vt(n),u=1<<a;t[a]=0,l[a]=-1,e[a]=-1,n&=~u}}function es(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var l=31-Vt(n),a=1<<l;a&t|e[l]&t&&(e[l]|=t),n&=~a}}var we=0;function Gu(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Xu,ts,Zu,Ju,ec,ns=!1,di=[],wn=null,_n=null,xn=null,so=new Map,ao=new Map,kn=[],mp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tc(e,t){switch(e){case"focusin":case"focusout":wn=null;break;case"dragenter":case"dragleave":_n=null;break;case"mouseover":case"mouseout":xn=null;break;case"pointerover":case"pointerout":so.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ao.delete(t.pointerId)}}function uo(e,t,n,l,a,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:n,eventSystemFlags:l,nativeEvent:u,targetContainers:[a]},t!==null&&(t=So(t),t!==null&&ts(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function gp(e,t,n,l,a){switch(t){case"focusin":return wn=uo(wn,e,t,n,l,a),!0;case"dragenter":return _n=uo(_n,e,t,n,l,a),!0;case"mouseover":return xn=uo(xn,e,t,n,l,a),!0;case"pointerover":var u=a.pointerId;return so.set(u,uo(so.get(u)||null,e,t,n,l,a)),!0;case"gotpointercapture":return u=a.pointerId,ao.set(u,uo(ao.get(u)||null,e,t,n,l,a)),!0}return!1}function nc(e){var t=Xn(e.target);if(t!==null){var n=Gn(t);if(n!==null){if(t=n.tag,t===13){if(t=Vu(n),t!==null){e.blockedOn=t,ec(e.priority,function(){Zu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function hi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=os(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var l=new n.constructor(n.type,n);Wl=l,n.target.dispatchEvent(l),Wl=null}else return t=So(n),t!==null&&ts(t),e.blockedOn=n,!1;t.shift()}return!0}function rc(e,t,n){hi(e)&&n.delete(t)}function vp(){ns=!1,wn!==null&&hi(wn)&&(wn=null),_n!==null&&hi(_n)&&(_n=null),xn!==null&&hi(xn)&&(xn=null),so.forEach(rc),ao.forEach(rc)}function co(e,t){e.blockedOn===t&&(e.blockedOn=null,ns||(ns=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,vp)))}function ho(e){function t(a){return co(a,e)}if(0<di.length){co(di[0],e);for(var n=1;n<di.length;n++){var l=di[n];l.blockedOn===e&&(l.blockedOn=null)}}for(wn!==null&&co(wn,e),_n!==null&&co(_n,e),xn!==null&&co(xn,e),so.forEach(t),ao.forEach(t),n=0;n<kn.length;n++)l=kn[n],l.blockedOn===e&&(l.blockedOn=null);for(;0<kn.length&&(n=kn[0],n.blockedOn===null);)nc(n),n.blockedOn===null&&kn.shift()}var wr=re.ReactCurrentBatchConfig,fi=!0;function yp(e,t,n,l){var a=we,u=wr.transition;wr.transition=null;try{we=1,rs(e,t,n,l)}finally{we=a,wr.transition=u}}function bp(e,t,n,l){var a=we,u=wr.transition;wr.transition=null;try{we=4,rs(e,t,n,l)}finally{we=a,wr.transition=u}}function rs(e,t,n,l){if(fi){var a=os(e,t,n,l);if(a===null)_s(e,t,l,pi,n),tc(e,l);else if(gp(a,e,t,n,l))l.stopPropagation();else if(tc(e,l),t&4&&-1<mp.indexOf(e)){for(;a!==null;){var u=So(a);if(u!==null&&Xu(u),u=os(e,t,n,l),u===null&&_s(e,t,l,pi,n),u===a)break;a=u}a!==null&&l.stopPropagation()}else _s(e,t,l,null,n)}}var pi=null;function os(e,t,n,l){if(pi=null,e=Kl(l),e=Xn(e),e!==null)if(t=Gn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Vu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return pi=e,null}function oc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(lp()){case Xl:return 1;case qu:return 4;case li:case sp:return 16;case Qu:return 536870912;default:return 16}default:return 16}}var Sn=null,is=null,mi=null;function ic(){if(mi)return mi;var e,t=is,n=t.length,l,a="value"in Sn?Sn.value:Sn.textContent,u=a.length;for(e=0;e<n&&t[e]===a[e];e++);var h=n-e;for(l=1;l<=h&&t[n-l]===a[u-l];l++);return mi=a.slice(e,1<l?1-l:void 0)}function gi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function vi(){return!0}function lc(){return!1}function _t(e){function t(n,l,a,u,h){this._reactName=n,this._targetInst=a,this.type=l,this.nativeEvent=u,this.target=h,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(n=e[g],this[g]=n?n(u):u[g]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?vi:lc,this.isPropagationStopped=lc,this}return B(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=vi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=vi)},persist:function(){},isPersistent:vi}),t}var _r={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ls=_t(_r),fo=B({},_r,{view:0,detail:0}),wp=_t(fo),ss,as,po,yi=B({},fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==po&&(po&&e.type==="mousemove"?(ss=e.screenX-po.screenX,as=e.screenY-po.screenY):as=ss=0,po=e),ss)},movementY:function(e){return"movementY"in e?e.movementY:as}}),sc=_t(yi),_p=B({},yi,{dataTransfer:0}),xp=_t(_p),kp=B({},fo,{relatedTarget:0}),us=_t(kp),Sp=B({},_r,{animationName:0,elapsedTime:0,pseudoElement:0}),Cp=_t(Sp),Ep=B({},_r,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),$p=_t(Ep),zp=B({},_r,{data:0}),ac=_t(zp),Ap={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Pp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Tp[e])?!!t[e]:!1}function cs(){return Rp}var Lp=B({},fo,{key:function(e){if(e.key){var t=Ap[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=gi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Pp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cs,charCode:function(e){return e.type==="keypress"?gi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?gi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Np=_t(Lp),Op=B({},yi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),uc=_t(Op),Mp=B({},fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cs}),Dp=_t(Mp),Fp=B({},_r,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ip=_t(Fp),jp=B({},yi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Vp=_t(jp),Bp=[9,13,27,32],ds=p&&"CompositionEvent"in window,mo=null;p&&"documentMode"in document&&(mo=document.documentMode);var Hp=p&&"TextEvent"in window&&!mo,cc=p&&(!ds||mo&&8<mo&&11>=mo),dc=" ",hc=!1;function fc(e,t){switch(e){case"keyup":return Bp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var xr=!1;function Up(e,t){switch(e){case"compositionend":return pc(t);case"keypress":return t.which!==32?null:(hc=!0,dc);case"textInput":return e=t.data,e===dc&&hc?null:e;default:return null}}function Wp(e,t){if(xr)return e==="compositionend"||!ds&&fc(e,t)?(e=ic(),mi=is=Sn=null,xr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return cc&&t.locale!=="ko"?null:t.data;default:return null}}var Kp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Kp[e.type]:t==="textarea"}function gc(e,t,n,l){Mu(l),t=ki(t,"onChange"),0<t.length&&(n=new ls("onChange","change",null,n,l),e.push({event:n,listeners:t}))}var go=null,vo=null;function qp(e){Nc(e,0)}function bi(e){var t=$r(e);if(Su(t))return e}function Qp(e,t){if(e==="change")return t}var vc=!1;if(p){var hs;if(p){var fs="oninput"in document;if(!fs){var yc=document.createElement("div");yc.setAttribute("oninput","return;"),fs=typeof yc.oninput=="function"}hs=fs}else hs=!1;vc=hs&&(!document.documentMode||9<document.documentMode)}function bc(){go&&(go.detachEvent("onpropertychange",wc),vo=go=null)}function wc(e){if(e.propertyName==="value"&&bi(vo)){var t=[];gc(t,vo,e,Kl(e)),ju(qp,t)}}function Yp(e,t,n){e==="focusin"?(bc(),go=t,vo=n,go.attachEvent("onpropertychange",wc)):e==="focusout"&&bc()}function Gp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return bi(vo)}function Xp(e,t){if(e==="click")return bi(t)}function Zp(e,t){if(e==="input"||e==="change")return bi(t)}function Jp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Bt=typeof Object.is=="function"?Object.is:Jp;function yo(e,t){if(Bt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),l=Object.keys(t);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var a=n[l];if(!m.call(t,a)||!Bt(e[a],t[a]))return!1}return!0}function _c(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xc(e,t){var n=_c(e);e=0;for(var l;n;){if(n.nodeType===3){if(l=e+n.textContent.length,e<=t&&l>=t)return{node:n,offset:t-e};e=l}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=_c(n)}}function kc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?kc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Sc(){for(var e=window,t=ni();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ni(e.document)}return t}function ps(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function em(e){var t=Sc(),n=e.focusedElem,l=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&kc(n.ownerDocument.documentElement,n)){if(l!==null&&ps(n)){if(t=l.start,e=l.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,u=Math.min(l.start,a);l=l.end===void 0?u:Math.min(l.end,a),!e.extend&&u>l&&(a=l,l=u,u=a),a=xc(n,u);var h=xc(n,l);a&&h&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==h.node||e.focusOffset!==h.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),u>l?(e.addRange(t),e.extend(h.node,h.offset)):(t.setEnd(h.node,h.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var tm=p&&"documentMode"in document&&11>=document.documentMode,kr=null,ms=null,bo=null,gs=!1;function Cc(e,t,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;gs||kr==null||kr!==ni(l)||(l=kr,"selectionStart"in l&&ps(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),bo&&yo(bo,l)||(bo=l,l=ki(ms,"onSelect"),0<l.length&&(t=new ls("onSelect","select",null,t,n),e.push({event:t,listeners:l}),t.target=kr)))}function wi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Sr={animationend:wi("Animation","AnimationEnd"),animationiteration:wi("Animation","AnimationIteration"),animationstart:wi("Animation","AnimationStart"),transitionend:wi("Transition","TransitionEnd")},vs={},Ec={};p&&(Ec=document.createElement("div").style,"AnimationEvent"in window||(delete Sr.animationend.animation,delete Sr.animationiteration.animation,delete Sr.animationstart.animation),"TransitionEvent"in window||delete Sr.transitionend.transition);function _i(e){if(vs[e])return vs[e];if(!Sr[e])return e;var t=Sr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ec)return vs[e]=t[n];return e}var $c=_i("animationend"),zc=_i("animationiteration"),Ac=_i("animationstart"),Pc=_i("transitionend"),Tc=new Map,Rc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Cn(e,t){Tc.set(e,t),d(t,[e])}for(var ys=0;ys<Rc.length;ys++){var bs=Rc[ys],nm=bs.toLowerCase(),rm=bs[0].toUpperCase()+bs.slice(1);Cn(nm,"on"+rm)}Cn($c,"onAnimationEnd"),Cn(zc,"onAnimationIteration"),Cn(Ac,"onAnimationStart"),Cn("dblclick","onDoubleClick"),Cn("focusin","onFocus"),Cn("focusout","onBlur"),Cn(Pc,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),d("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),d("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),d("onBeforeInput",["compositionend","keypress","textInput","paste"]),d("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),om=new Set("cancel close invalid load scroll toggle".split(" ").concat(wo));function Lc(e,t,n){var l=e.type||"unknown-event";e.currentTarget=n,np(l,t,void 0,e),e.currentTarget=null}function Nc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var l=e[n],a=l.event;l=l.listeners;e:{var u=void 0;if(t)for(var h=l.length-1;0<=h;h--){var g=l[h],y=g.instance,$=g.currentTarget;if(g=g.listener,y!==u&&a.isPropagationStopped())break e;Lc(a,g,$),u=y}else for(h=0;h<l.length;h++){if(g=l[h],y=g.instance,$=g.currentTarget,g=g.listener,y!==u&&a.isPropagationStopped())break e;Lc(a,g,$),u=y}}}if(ii)throw e=Gl,ii=!1,Gl=null,e}function $e(e,t){var n=t[$s];n===void 0&&(n=t[$s]=new Set);var l=e+"__bubble";n.has(l)||(Oc(t,e,2,!1),n.add(l))}function ws(e,t,n){var l=0;t&&(l|=4),Oc(n,e,l,t)}var xi="_reactListening"+Math.random().toString(36).slice(2);function _o(e){if(!e[xi]){e[xi]=!0,s.forEach(function(n){n!=="selectionchange"&&(om.has(n)||ws(n,!1,e),ws(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xi]||(t[xi]=!0,ws("selectionchange",!1,t))}}function Oc(e,t,n,l){switch(oc(t)){case 1:var a=yp;break;case 4:a=bp;break;default:a=rs}n=a.bind(null,t,n,e),a=void 0,!Yl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),l?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function _s(e,t,n,l,a){var u=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var h=l.tag;if(h===3||h===4){var g=l.stateNode.containerInfo;if(g===a||g.nodeType===8&&g.parentNode===a)break;if(h===4)for(h=l.return;h!==null;){var y=h.tag;if((y===3||y===4)&&(y=h.stateNode.containerInfo,y===a||y.nodeType===8&&y.parentNode===a))return;h=h.return}for(;g!==null;){if(h=Xn(g),h===null)return;if(y=h.tag,y===5||y===6){l=u=h;continue e}g=g.parentNode}}l=l.return}ju(function(){var $=u,L=Kl(n),N=[];e:{var T=Tc.get(e);if(T!==void 0){var j=ls,U=e;switch(e){case"keypress":if(gi(n)===0)break e;case"keydown":case"keyup":j=Np;break;case"focusin":U="focus",j=us;break;case"focusout":U="blur",j=us;break;case"beforeblur":case"afterblur":j=us;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=sc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=xp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=Dp;break;case $c:case zc:case Ac:j=Cp;break;case Pc:j=Ip;break;case"scroll":j=wp;break;case"wheel":j=Vp;break;case"copy":case"cut":case"paste":j=$p;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=uc}var W=(t&4)!==0,je=!W&&e==="scroll",S=W?T!==null?T+"Capture":null:T;W=[];for(var _=$,C;_!==null;){C=_;var O=C.stateNode;if(C.tag===5&&O!==null&&(C=O,S!==null&&(O=no(_,S),O!=null&&W.push(xo(_,O,C)))),je)break;_=_.return}0<W.length&&(T=new j(T,U,null,n,L),N.push({event:T,listeners:W}))}}if((t&7)===0){e:{if(T=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",T&&n!==Wl&&(U=n.relatedTarget||n.fromElement)&&(Xn(U)||U[un]))break e;if((j||T)&&(T=L.window===L?L:(T=L.ownerDocument)?T.defaultView||T.parentWindow:window,j?(U=n.relatedTarget||n.toElement,j=$,U=U?Xn(U):null,U!==null&&(je=Gn(U),U!==je||U.tag!==5&&U.tag!==6)&&(U=null)):(j=null,U=$),j!==U)){if(W=sc,O="onMouseLeave",S="onMouseEnter",_="mouse",(e==="pointerout"||e==="pointerover")&&(W=uc,O="onPointerLeave",S="onPointerEnter",_="pointer"),je=j==null?T:$r(j),C=U==null?T:$r(U),T=new W(O,_+"leave",j,n,L),T.target=je,T.relatedTarget=C,O=null,Xn(L)===$&&(W=new W(S,_+"enter",U,n,L),W.target=C,W.relatedTarget=je,O=W),je=O,j&&U)t:{for(W=j,S=U,_=0,C=W;C;C=Cr(C))_++;for(C=0,O=S;O;O=Cr(O))C++;for(;0<_-C;)W=Cr(W),_--;for(;0<C-_;)S=Cr(S),C--;for(;_--;){if(W===S||S!==null&&W===S.alternate)break t;W=Cr(W),S=Cr(S)}W=null}else W=null;j!==null&&Mc(N,T,j,W,!1),U!==null&&je!==null&&Mc(N,je,U,W,!0)}}e:{if(T=$?$r($):window,j=T.nodeName&&T.nodeName.toLowerCase(),j==="select"||j==="input"&&T.type==="file")var K=Qp;else if(mc(T))if(vc)K=Zp;else{K=Gp;var Y=Yp}else(j=T.nodeName)&&j.toLowerCase()==="input"&&(T.type==="checkbox"||T.type==="radio")&&(K=Xp);if(K&&(K=K(e,$))){gc(N,K,n,L);break e}Y&&Y(e,T,$),e==="focusout"&&(Y=T._wrapperState)&&Y.controlled&&T.type==="number"&&jl(T,"number",T.value)}switch(Y=$?$r($):window,e){case"focusin":(mc(Y)||Y.contentEditable==="true")&&(kr=Y,ms=$,bo=null);break;case"focusout":bo=ms=kr=null;break;case"mousedown":gs=!0;break;case"contextmenu":case"mouseup":case"dragend":gs=!1,Cc(N,n,L);break;case"selectionchange":if(tm)break;case"keydown":case"keyup":Cc(N,n,L)}var G;if(ds)e:{switch(e){case"compositionstart":var J="onCompositionStart";break e;case"compositionend":J="onCompositionEnd";break e;case"compositionupdate":J="onCompositionUpdate";break e}J=void 0}else xr?fc(e,n)&&(J="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(J="onCompositionStart");J&&(cc&&n.locale!=="ko"&&(xr||J!=="onCompositionStart"?J==="onCompositionEnd"&&xr&&(G=ic()):(Sn=L,is="value"in Sn?Sn.value:Sn.textContent,xr=!0)),Y=ki($,J),0<Y.length&&(J=new ac(J,e,null,n,L),N.push({event:J,listeners:Y}),G?J.data=G:(G=pc(n),G!==null&&(J.data=G)))),(G=Hp?Up(e,n):Wp(e,n))&&($=ki($,"onBeforeInput"),0<$.length&&(L=new ac("onBeforeInput","beforeinput",null,n,L),N.push({event:L,listeners:$}),L.data=G))}Nc(N,t)})}function xo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ki(e,t){for(var n=t+"Capture",l=[];e!==null;){var a=e,u=a.stateNode;a.tag===5&&u!==null&&(a=u,u=no(e,n),u!=null&&l.unshift(xo(e,u,a)),u=no(e,t),u!=null&&l.push(xo(e,u,a))),e=e.return}return l}function Cr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Mc(e,t,n,l,a){for(var u=t._reactName,h=[];n!==null&&n!==l;){var g=n,y=g.alternate,$=g.stateNode;if(y!==null&&y===l)break;g.tag===5&&$!==null&&(g=$,a?(y=no(n,u),y!=null&&h.unshift(xo(n,y,g))):a||(y=no(n,u),y!=null&&h.push(xo(n,y,g)))),n=n.return}h.length!==0&&e.push({event:t,listeners:h})}var im=/\r\n?/g,lm=/\u0000|\uFFFD/g;function Dc(e){return(typeof e=="string"?e:""+e).replace(im,`
`).replace(lm,"")}function Si(e,t,n){if(t=Dc(t),Dc(e)!==t&&n)throw Error(i(425))}function Ci(){}var xs=null,ks=null;function Ss(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Cs=typeof setTimeout=="function"?setTimeout:void 0,sm=typeof clearTimeout=="function"?clearTimeout:void 0,Fc=typeof Promise=="function"?Promise:void 0,am=typeof queueMicrotask=="function"?queueMicrotask:typeof Fc<"u"?function(e){return Fc.resolve(null).then(e).catch(um)}:Cs;function um(e){setTimeout(function(){throw e})}function Es(e,t){var n=t,l=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(l===0){e.removeChild(a),ho(t);return}l--}else n!=="$"&&n!=="$?"&&n!=="$!"||l++;n=a}while(n);ho(t)}function En(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ic(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Er=Math.random().toString(36).slice(2),tn="__reactFiber$"+Er,ko="__reactProps$"+Er,un="__reactContainer$"+Er,$s="__reactEvents$"+Er,cm="__reactListeners$"+Er,dm="__reactHandles$"+Er;function Xn(e){var t=e[tn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[un]||n[tn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ic(e);e!==null;){if(n=e[tn])return n;e=Ic(e)}return t}e=n,n=e.parentNode}return null}function So(e){return e=e[tn]||e[un],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function $r(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(i(33))}function Ei(e){return e[ko]||null}var zs=[],zr=-1;function $n(e){return{current:e}}function ze(e){0>zr||(e.current=zs[zr],zs[zr]=null,zr--)}function ke(e,t){zr++,zs[zr]=e.current,e.current=t}var zn={},nt=$n(zn),ht=$n(!1),Zn=zn;function Ar(e,t){var n=e.type.contextTypes;if(!n)return zn;var l=e.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===t)return l.__reactInternalMemoizedMaskedChildContext;var a={},u;for(u in n)a[u]=t[u];return l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function ft(e){return e=e.childContextTypes,e!=null}function $i(){ze(ht),ze(nt)}function jc(e,t,n){if(nt.current!==zn)throw Error(i(168));ke(nt,t),ke(ht,n)}function Vc(e,t,n){var l=e.stateNode;if(t=t.childContextTypes,typeof l.getChildContext!="function")return n;l=l.getChildContext();for(var a in l)if(!(a in t))throw Error(i(108,xe(e)||"Unknown",a));return B({},n,l)}function zi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||zn,Zn=nt.current,ke(nt,e),ke(ht,ht.current),!0}function Bc(e,t,n){var l=e.stateNode;if(!l)throw Error(i(169));n?(e=Vc(e,t,Zn),l.__reactInternalMemoizedMergedChildContext=e,ze(ht),ze(nt),ke(nt,e)):ze(ht),ke(ht,n)}var cn=null,Ai=!1,As=!1;function Hc(e){cn===null?cn=[e]:cn.push(e)}function hm(e){Ai=!0,Hc(e)}function An(){if(!As&&cn!==null){As=!0;var e=0,t=we;try{var n=cn;for(we=1;e<n.length;e++){var l=n[e];do l=l(!0);while(l!==null)}cn=null,Ai=!1}catch(a){throw cn!==null&&(cn=cn.slice(e+1)),Wu(Xl,An),a}finally{we=t,As=!1}}return null}var Pr=[],Tr=0,Pi=null,Ti=0,Rt=[],Lt=0,Jn=null,dn=1,hn="";function er(e,t){Pr[Tr++]=Ti,Pr[Tr++]=Pi,Pi=e,Ti=t}function Uc(e,t,n){Rt[Lt++]=dn,Rt[Lt++]=hn,Rt[Lt++]=Jn,Jn=e;var l=dn;e=hn;var a=32-Vt(l)-1;l&=~(1<<a),n+=1;var u=32-Vt(t)+a;if(30<u){var h=a-a%5;u=(l&(1<<h)-1).toString(32),l>>=h,a-=h,dn=1<<32-Vt(t)+a|n<<a|l,hn=u+e}else dn=1<<u|n<<a|l,hn=e}function Ps(e){e.return!==null&&(er(e,1),Uc(e,1,0))}function Ts(e){for(;e===Pi;)Pi=Pr[--Tr],Pr[Tr]=null,Ti=Pr[--Tr],Pr[Tr]=null;for(;e===Jn;)Jn=Rt[--Lt],Rt[Lt]=null,hn=Rt[--Lt],Rt[Lt]=null,dn=Rt[--Lt],Rt[Lt]=null}var xt=null,kt=null,Le=!1,Ht=null;function Wc(e,t){var n=Dt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Kc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,xt=e,kt=En(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,xt=e,kt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Jn!==null?{id:dn,overflow:hn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Dt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,xt=e,kt=null,!0):!1;default:return!1}}function Rs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ls(e){if(Le){var t=kt;if(t){var n=t;if(!Kc(e,t)){if(Rs(e))throw Error(i(418));t=En(n.nextSibling);var l=xt;t&&Kc(e,t)?Wc(l,n):(e.flags=e.flags&-4097|2,Le=!1,xt=e)}}else{if(Rs(e))throw Error(i(418));e.flags=e.flags&-4097|2,Le=!1,xt=e}}}function qc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;xt=e}function Ri(e){if(e!==xt)return!1;if(!Le)return qc(e),Le=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ss(e.type,e.memoizedProps)),t&&(t=kt)){if(Rs(e))throw Qc(),Error(i(418));for(;t;)Wc(e,t),t=En(t.nextSibling)}if(qc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){kt=En(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}kt=null}}else kt=xt?En(e.stateNode.nextSibling):null;return!0}function Qc(){for(var e=kt;e;)e=En(e.nextSibling)}function Rr(){kt=xt=null,Le=!1}function Ns(e){Ht===null?Ht=[e]:Ht.push(e)}var fm=re.ReactCurrentBatchConfig;function Co(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(i(309));var l=n.stateNode}if(!l)throw Error(i(147,e));var a=l,u=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===u?t.ref:(t=function(h){var g=a.refs;h===null?delete g[u]:g[u]=h},t._stringRef=u,t)}if(typeof e!="string")throw Error(i(284));if(!n._owner)throw Error(i(290,e))}return e}function Li(e,t){throw e=Object.prototype.toString.call(t),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Yc(e){var t=e._init;return t(e._payload)}function Gc(e){function t(S,_){if(e){var C=S.deletions;C===null?(S.deletions=[_],S.flags|=16):C.push(_)}}function n(S,_){if(!e)return null;for(;_!==null;)t(S,_),_=_.sibling;return null}function l(S,_){for(S=new Map;_!==null;)_.key!==null?S.set(_.key,_):S.set(_.index,_),_=_.sibling;return S}function a(S,_){return S=Dn(S,_),S.index=0,S.sibling=null,S}function u(S,_,C){return S.index=C,e?(C=S.alternate,C!==null?(C=C.index,C<_?(S.flags|=2,_):C):(S.flags|=2,_)):(S.flags|=1048576,_)}function h(S){return e&&S.alternate===null&&(S.flags|=2),S}function g(S,_,C,O){return _===null||_.tag!==6?(_=Ca(C,S.mode,O),_.return=S,_):(_=a(_,C),_.return=S,_)}function y(S,_,C,O){var K=C.type;return K===de?L(S,_,C.props.children,O,C.key):_!==null&&(_.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===le&&Yc(K)===_.type)?(O=a(_,C.props),O.ref=Co(S,_,C),O.return=S,O):(O=rl(C.type,C.key,C.props,null,S.mode,O),O.ref=Co(S,_,C),O.return=S,O)}function $(S,_,C,O){return _===null||_.tag!==4||_.stateNode.containerInfo!==C.containerInfo||_.stateNode.implementation!==C.implementation?(_=Ea(C,S.mode,O),_.return=S,_):(_=a(_,C.children||[]),_.return=S,_)}function L(S,_,C,O,K){return _===null||_.tag!==7?(_=ar(C,S.mode,O,K),_.return=S,_):(_=a(_,C),_.return=S,_)}function N(S,_,C){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Ca(""+_,S.mode,C),_.return=S,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ye:return C=rl(_.type,_.key,_.props,null,S.mode,C),C.ref=Co(S,null,_),C.return=S,C;case ae:return _=Ea(_,S.mode,C),_.return=S,_;case le:var O=_._init;return N(S,O(_._payload),C)}if(Jr(_)||Q(_))return _=ar(_,S.mode,C,null),_.return=S,_;Li(S,_)}return null}function T(S,_,C,O){var K=_!==null?_.key:null;if(typeof C=="string"&&C!==""||typeof C=="number")return K!==null?null:g(S,_,""+C,O);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case ye:return C.key===K?y(S,_,C,O):null;case ae:return C.key===K?$(S,_,C,O):null;case le:return K=C._init,T(S,_,K(C._payload),O)}if(Jr(C)||Q(C))return K!==null?null:L(S,_,C,O,null);Li(S,C)}return null}function j(S,_,C,O,K){if(typeof O=="string"&&O!==""||typeof O=="number")return S=S.get(C)||null,g(_,S,""+O,K);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case ye:return S=S.get(O.key===null?C:O.key)||null,y(_,S,O,K);case ae:return S=S.get(O.key===null?C:O.key)||null,$(_,S,O,K);case le:var Y=O._init;return j(S,_,C,Y(O._payload),K)}if(Jr(O)||Q(O))return S=S.get(C)||null,L(_,S,O,K,null);Li(_,O)}return null}function U(S,_,C,O){for(var K=null,Y=null,G=_,J=_=0,Qe=null;G!==null&&J<C.length;J++){G.index>J?(Qe=G,G=null):Qe=G.sibling;var ge=T(S,G,C[J],O);if(ge===null){G===null&&(G=Qe);break}e&&G&&ge.alternate===null&&t(S,G),_=u(ge,_,J),Y===null?K=ge:Y.sibling=ge,Y=ge,G=Qe}if(J===C.length)return n(S,G),Le&&er(S,J),K;if(G===null){for(;J<C.length;J++)G=N(S,C[J],O),G!==null&&(_=u(G,_,J),Y===null?K=G:Y.sibling=G,Y=G);return Le&&er(S,J),K}for(G=l(S,G);J<C.length;J++)Qe=j(G,S,J,C[J],O),Qe!==null&&(e&&Qe.alternate!==null&&G.delete(Qe.key===null?J:Qe.key),_=u(Qe,_,J),Y===null?K=Qe:Y.sibling=Qe,Y=Qe);return e&&G.forEach(function(Fn){return t(S,Fn)}),Le&&er(S,J),K}function W(S,_,C,O){var K=Q(C);if(typeof K!="function")throw Error(i(150));if(C=K.call(C),C==null)throw Error(i(151));for(var Y=K=null,G=_,J=_=0,Qe=null,ge=C.next();G!==null&&!ge.done;J++,ge=C.next()){G.index>J?(Qe=G,G=null):Qe=G.sibling;var Fn=T(S,G,ge.value,O);if(Fn===null){G===null&&(G=Qe);break}e&&G&&Fn.alternate===null&&t(S,G),_=u(Fn,_,J),Y===null?K=Fn:Y.sibling=Fn,Y=Fn,G=Qe}if(ge.done)return n(S,G),Le&&er(S,J),K;if(G===null){for(;!ge.done;J++,ge=C.next())ge=N(S,ge.value,O),ge!==null&&(_=u(ge,_,J),Y===null?K=ge:Y.sibling=ge,Y=ge);return Le&&er(S,J),K}for(G=l(S,G);!ge.done;J++,ge=C.next())ge=j(G,S,J,ge.value,O),ge!==null&&(e&&ge.alternate!==null&&G.delete(ge.key===null?J:ge.key),_=u(ge,_,J),Y===null?K=ge:Y.sibling=ge,Y=ge);return e&&G.forEach(function(Km){return t(S,Km)}),Le&&er(S,J),K}function je(S,_,C,O){if(typeof C=="object"&&C!==null&&C.type===de&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case ye:e:{for(var K=C.key,Y=_;Y!==null;){if(Y.key===K){if(K=C.type,K===de){if(Y.tag===7){n(S,Y.sibling),_=a(Y,C.props.children),_.return=S,S=_;break e}}else if(Y.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===le&&Yc(K)===Y.type){n(S,Y.sibling),_=a(Y,C.props),_.ref=Co(S,Y,C),_.return=S,S=_;break e}n(S,Y);break}else t(S,Y);Y=Y.sibling}C.type===de?(_=ar(C.props.children,S.mode,O,C.key),_.return=S,S=_):(O=rl(C.type,C.key,C.props,null,S.mode,O),O.ref=Co(S,_,C),O.return=S,S=O)}return h(S);case ae:e:{for(Y=C.key;_!==null;){if(_.key===Y)if(_.tag===4&&_.stateNode.containerInfo===C.containerInfo&&_.stateNode.implementation===C.implementation){n(S,_.sibling),_=a(_,C.children||[]),_.return=S,S=_;break e}else{n(S,_);break}else t(S,_);_=_.sibling}_=Ea(C,S.mode,O),_.return=S,S=_}return h(S);case le:return Y=C._init,je(S,_,Y(C._payload),O)}if(Jr(C))return U(S,_,C,O);if(Q(C))return W(S,_,C,O);Li(S,C)}return typeof C=="string"&&C!==""||typeof C=="number"?(C=""+C,_!==null&&_.tag===6?(n(S,_.sibling),_=a(_,C),_.return=S,S=_):(n(S,_),_=Ca(C,S.mode,O),_.return=S,S=_),h(S)):n(S,_)}return je}var Lr=Gc(!0),Xc=Gc(!1),Ni=$n(null),Oi=null,Nr=null,Os=null;function Ms(){Os=Nr=Oi=null}function Ds(e){var t=Ni.current;ze(Ni),e._currentValue=t}function Fs(e,t,n){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===n)break;e=e.return}}function Or(e,t){Oi=e,Os=Nr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(pt=!0),e.firstContext=null)}function Nt(e){var t=e._currentValue;if(Os!==e)if(e={context:e,memoizedValue:t,next:null},Nr===null){if(Oi===null)throw Error(i(308));Nr=e,Oi.dependencies={lanes:0,firstContext:e}}else Nr=Nr.next=e;return t}var tr=null;function Is(e){tr===null?tr=[e]:tr.push(e)}function Zc(e,t,n,l){var a=t.interleaved;return a===null?(n.next=n,Is(t)):(n.next=a.next,a.next=n),t.interleaved=n,fn(e,l)}function fn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Pn=!1;function js(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Jc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function pn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Tn(e,t,n){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(he&2)!==0){var a=l.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),l.pending=t,fn(e,n)}return a=l.interleaved,a===null?(t.next=t,Is(l)):(t.next=a.next,a.next=t),l.interleaved=t,fn(e,n)}function Mi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,es(e,n)}}function ed(e,t){var n=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var a=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var h={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};u===null?a=u=h:u=u.next=h,n=n.next}while(n!==null);u===null?a=u=t:u=u.next=t}else a=u=t;n={baseState:l.baseState,firstBaseUpdate:a,lastBaseUpdate:u,shared:l.shared,effects:l.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Di(e,t,n,l){var a=e.updateQueue;Pn=!1;var u=a.firstBaseUpdate,h=a.lastBaseUpdate,g=a.shared.pending;if(g!==null){a.shared.pending=null;var y=g,$=y.next;y.next=null,h===null?u=$:h.next=$,h=y;var L=e.alternate;L!==null&&(L=L.updateQueue,g=L.lastBaseUpdate,g!==h&&(g===null?L.firstBaseUpdate=$:g.next=$,L.lastBaseUpdate=y))}if(u!==null){var N=a.baseState;h=0,L=$=y=null,g=u;do{var T=g.lane,j=g.eventTime;if((l&T)===T){L!==null&&(L=L.next={eventTime:j,lane:0,tag:g.tag,payload:g.payload,callback:g.callback,next:null});e:{var U=e,W=g;switch(T=t,j=n,W.tag){case 1:if(U=W.payload,typeof U=="function"){N=U.call(j,N,T);break e}N=U;break e;case 3:U.flags=U.flags&-65537|128;case 0:if(U=W.payload,T=typeof U=="function"?U.call(j,N,T):U,T==null)break e;N=B({},N,T);break e;case 2:Pn=!0}}g.callback!==null&&g.lane!==0&&(e.flags|=64,T=a.effects,T===null?a.effects=[g]:T.push(g))}else j={eventTime:j,lane:T,tag:g.tag,payload:g.payload,callback:g.callback,next:null},L===null?($=L=j,y=N):L=L.next=j,h|=T;if(g=g.next,g===null){if(g=a.shared.pending,g===null)break;T=g,g=T.next,T.next=null,a.lastBaseUpdate=T,a.shared.pending=null}}while(!0);if(L===null&&(y=N),a.baseState=y,a.firstBaseUpdate=$,a.lastBaseUpdate=L,t=a.shared.interleaved,t!==null){a=t;do h|=a.lane,a=a.next;while(a!==t)}else u===null&&(a.shared.lanes=0);or|=h,e.lanes=h,e.memoizedState=N}}function td(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var l=e[t],a=l.callback;if(a!==null){if(l.callback=null,l=n,typeof a!="function")throw Error(i(191,a));a.call(l)}}}var Eo={},nn=$n(Eo),$o=$n(Eo),zo=$n(Eo);function nr(e){if(e===Eo)throw Error(i(174));return e}function Vs(e,t){switch(ke(zo,t),ke($o,e),ke(nn,Eo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Bl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Bl(t,e)}ze(nn),ke(nn,t)}function Mr(){ze(nn),ze($o),ze(zo)}function nd(e){nr(zo.current);var t=nr(nn.current),n=Bl(t,e.type);t!==n&&(ke($o,e),ke(nn,n))}function Bs(e){$o.current===e&&(ze(nn),ze($o))}var Ne=$n(0);function Fi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Hs=[];function Us(){for(var e=0;e<Hs.length;e++)Hs[e]._workInProgressVersionPrimary=null;Hs.length=0}var Ii=re.ReactCurrentDispatcher,Ws=re.ReactCurrentBatchConfig,rr=0,Oe=null,He=null,Ke=null,ji=!1,Ao=!1,Po=0,pm=0;function rt(){throw Error(i(321))}function Ks(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Bt(e[n],t[n]))return!1;return!0}function qs(e,t,n,l,a,u){if(rr=u,Oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ii.current=e===null||e.memoizedState===null?ym:bm,e=n(l,a),Ao){u=0;do{if(Ao=!1,Po=0,25<=u)throw Error(i(301));u+=1,Ke=He=null,t.updateQueue=null,Ii.current=wm,e=n(l,a)}while(Ao)}if(Ii.current=Hi,t=He!==null&&He.next!==null,rr=0,Ke=He=Oe=null,ji=!1,t)throw Error(i(300));return e}function Qs(){var e=Po!==0;return Po=0,e}function rn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?Oe.memoizedState=Ke=e:Ke=Ke.next=e,Ke}function Ot(){if(He===null){var e=Oe.alternate;e=e!==null?e.memoizedState:null}else e=He.next;var t=Ke===null?Oe.memoizedState:Ke.next;if(t!==null)Ke=t,He=e;else{if(e===null)throw Error(i(310));He=e,e={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},Ke===null?Oe.memoizedState=Ke=e:Ke=Ke.next=e}return Ke}function To(e,t){return typeof t=="function"?t(e):t}function Ys(e){var t=Ot(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var l=He,a=l.baseQueue,u=n.pending;if(u!==null){if(a!==null){var h=a.next;a.next=u.next,u.next=h}l.baseQueue=a=u,n.pending=null}if(a!==null){u=a.next,l=l.baseState;var g=h=null,y=null,$=u;do{var L=$.lane;if((rr&L)===L)y!==null&&(y=y.next={lane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),l=$.hasEagerState?$.eagerState:e(l,$.action);else{var N={lane:L,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null};y===null?(g=y=N,h=l):y=y.next=N,Oe.lanes|=L,or|=L}$=$.next}while($!==null&&$!==u);y===null?h=l:y.next=g,Bt(l,t.memoizedState)||(pt=!0),t.memoizedState=l,t.baseState=h,t.baseQueue=y,n.lastRenderedState=l}if(e=n.interleaved,e!==null){a=e;do u=a.lane,Oe.lanes|=u,or|=u,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Gs(e){var t=Ot(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var l=n.dispatch,a=n.pending,u=t.memoizedState;if(a!==null){n.pending=null;var h=a=a.next;do u=e(u,h.action),h=h.next;while(h!==a);Bt(u,t.memoizedState)||(pt=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),n.lastRenderedState=u}return[u,l]}function rd(){}function od(e,t){var n=Oe,l=Ot(),a=t(),u=!Bt(l.memoizedState,a);if(u&&(l.memoizedState=a,pt=!0),l=l.queue,Xs(sd.bind(null,n,l,e),[e]),l.getSnapshot!==t||u||Ke!==null&&Ke.memoizedState.tag&1){if(n.flags|=2048,Ro(9,ld.bind(null,n,l,a,t),void 0,null),qe===null)throw Error(i(349));(rr&30)!==0||id(n,t,a)}return a}function id(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Oe.updateQueue,t===null?(t={lastEffect:null,stores:null},Oe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ld(e,t,n,l){t.value=n,t.getSnapshot=l,ad(t)&&ud(e)}function sd(e,t,n){return n(function(){ad(t)&&ud(e)})}function ad(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Bt(e,n)}catch{return!0}}function ud(e){var t=fn(e,1);t!==null&&qt(t,e,1,-1)}function cd(e){var t=rn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:To,lastRenderedState:e},t.queue=e,e=e.dispatch=vm.bind(null,Oe,e),[t.memoizedState,e]}function Ro(e,t,n,l){return e={tag:e,create:t,destroy:n,deps:l,next:null},t=Oe.updateQueue,t===null?(t={lastEffect:null,stores:null},Oe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(l=n.next,n.next=e,e.next=l,t.lastEffect=e)),e}function dd(){return Ot().memoizedState}function Vi(e,t,n,l){var a=rn();Oe.flags|=e,a.memoizedState=Ro(1|t,n,void 0,l===void 0?null:l)}function Bi(e,t,n,l){var a=Ot();l=l===void 0?null:l;var u=void 0;if(He!==null){var h=He.memoizedState;if(u=h.destroy,l!==null&&Ks(l,h.deps)){a.memoizedState=Ro(t,n,u,l);return}}Oe.flags|=e,a.memoizedState=Ro(1|t,n,u,l)}function hd(e,t){return Vi(8390656,8,e,t)}function Xs(e,t){return Bi(2048,8,e,t)}function fd(e,t){return Bi(4,2,e,t)}function pd(e,t){return Bi(4,4,e,t)}function md(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function gd(e,t,n){return n=n!=null?n.concat([e]):null,Bi(4,4,md.bind(null,t,e),n)}function Zs(){}function vd(e,t){var n=Ot();t=t===void 0?null:t;var l=n.memoizedState;return l!==null&&t!==null&&Ks(t,l[1])?l[0]:(n.memoizedState=[e,t],e)}function yd(e,t){var n=Ot();t=t===void 0?null:t;var l=n.memoizedState;return l!==null&&t!==null&&Ks(t,l[1])?l[0]:(e=e(),n.memoizedState=[e,t],e)}function bd(e,t,n){return(rr&21)===0?(e.baseState&&(e.baseState=!1,pt=!0),e.memoizedState=n):(Bt(n,t)||(n=Yu(),Oe.lanes|=n,or|=n,e.baseState=!0),t)}function mm(e,t){var n=we;we=n!==0&&4>n?n:4,e(!0);var l=Ws.transition;Ws.transition={};try{e(!1),t()}finally{we=n,Ws.transition=l}}function wd(){return Ot().memoizedState}function gm(e,t,n){var l=On(e);if(n={lane:l,action:n,hasEagerState:!1,eagerState:null,next:null},_d(e))xd(t,n);else if(n=Zc(e,t,n,l),n!==null){var a=ut();qt(n,e,l,a),kd(n,t,l)}}function vm(e,t,n){var l=On(e),a={lane:l,action:n,hasEagerState:!1,eagerState:null,next:null};if(_d(e))xd(t,a);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var h=t.lastRenderedState,g=u(h,n);if(a.hasEagerState=!0,a.eagerState=g,Bt(g,h)){var y=t.interleaved;y===null?(a.next=a,Is(t)):(a.next=y.next,y.next=a),t.interleaved=a;return}}catch{}n=Zc(e,t,a,l),n!==null&&(a=ut(),qt(n,e,l,a),kd(n,t,l))}}function _d(e){var t=e.alternate;return e===Oe||t!==null&&t===Oe}function xd(e,t){Ao=ji=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function kd(e,t,n){if((n&4194240)!==0){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,es(e,n)}}var Hi={readContext:Nt,useCallback:rt,useContext:rt,useEffect:rt,useImperativeHandle:rt,useInsertionEffect:rt,useLayoutEffect:rt,useMemo:rt,useReducer:rt,useRef:rt,useState:rt,useDebugValue:rt,useDeferredValue:rt,useTransition:rt,useMutableSource:rt,useSyncExternalStore:rt,useId:rt,unstable_isNewReconciler:!1},ym={readContext:Nt,useCallback:function(e,t){return rn().memoizedState=[e,t===void 0?null:t],e},useContext:Nt,useEffect:hd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Vi(4194308,4,md.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Vi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Vi(4,2,e,t)},useMemo:function(e,t){var n=rn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var l=rn();return t=n!==void 0?n(t):t,l.memoizedState=l.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},l.queue=e,e=e.dispatch=gm.bind(null,Oe,e),[l.memoizedState,e]},useRef:function(e){var t=rn();return e={current:e},t.memoizedState=e},useState:cd,useDebugValue:Zs,useDeferredValue:function(e){return rn().memoizedState=e},useTransition:function(){var e=cd(!1),t=e[0];return e=mm.bind(null,e[1]),rn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var l=Oe,a=rn();if(Le){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),qe===null)throw Error(i(349));(rr&30)!==0||id(l,t,n)}a.memoizedState=n;var u={value:n,getSnapshot:t};return a.queue=u,hd(sd.bind(null,l,u,e),[e]),l.flags|=2048,Ro(9,ld.bind(null,l,u,n,t),void 0,null),n},useId:function(){var e=rn(),t=qe.identifierPrefix;if(Le){var n=hn,l=dn;n=(l&~(1<<32-Vt(l)-1)).toString(32)+n,t=":"+t+"R"+n,n=Po++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=pm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},bm={readContext:Nt,useCallback:vd,useContext:Nt,useEffect:Xs,useImperativeHandle:gd,useInsertionEffect:fd,useLayoutEffect:pd,useMemo:yd,useReducer:Ys,useRef:dd,useState:function(){return Ys(To)},useDebugValue:Zs,useDeferredValue:function(e){var t=Ot();return bd(t,He.memoizedState,e)},useTransition:function(){var e=Ys(To)[0],t=Ot().memoizedState;return[e,t]},useMutableSource:rd,useSyncExternalStore:od,useId:wd,unstable_isNewReconciler:!1},wm={readContext:Nt,useCallback:vd,useContext:Nt,useEffect:Xs,useImperativeHandle:gd,useInsertionEffect:fd,useLayoutEffect:pd,useMemo:yd,useReducer:Gs,useRef:dd,useState:function(){return Gs(To)},useDebugValue:Zs,useDeferredValue:function(e){var t=Ot();return He===null?t.memoizedState=e:bd(t,He.memoizedState,e)},useTransition:function(){var e=Gs(To)[0],t=Ot().memoizedState;return[e,t]},useMutableSource:rd,useSyncExternalStore:od,useId:wd,unstable_isNewReconciler:!1};function Ut(e,t){if(e&&e.defaultProps){t=B({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Js(e,t,n,l){t=e.memoizedState,n=n(l,t),n=n==null?t:B({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ui={isMounted:function(e){return(e=e._reactInternals)?Gn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var l=ut(),a=On(e),u=pn(l,a);u.payload=t,n!=null&&(u.callback=n),t=Tn(e,u,a),t!==null&&(qt(t,e,a,l),Mi(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var l=ut(),a=On(e),u=pn(l,a);u.tag=1,u.payload=t,n!=null&&(u.callback=n),t=Tn(e,u,a),t!==null&&(qt(t,e,a,l),Mi(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ut(),l=On(e),a=pn(n,l);a.tag=2,t!=null&&(a.callback=t),t=Tn(e,a,l),t!==null&&(qt(t,e,l,n),Mi(t,e,l))}};function Sd(e,t,n,l,a,u,h){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,u,h):t.prototype&&t.prototype.isPureReactComponent?!yo(n,l)||!yo(a,u):!0}function Cd(e,t,n){var l=!1,a=zn,u=t.contextType;return typeof u=="object"&&u!==null?u=Nt(u):(a=ft(t)?Zn:nt.current,l=t.contextTypes,u=(l=l!=null)?Ar(e,a):zn),t=new t(n,u),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ui,e.stateNode=t,t._reactInternals=e,l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=u),t}function Ed(e,t,n,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,l),t.state!==e&&Ui.enqueueReplaceState(t,t.state,null)}function ea(e,t,n,l){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},js(e);var u=t.contextType;typeof u=="object"&&u!==null?a.context=Nt(u):(u=ft(t)?Zn:nt.current,a.context=Ar(e,u)),a.state=e.memoizedState,u=t.getDerivedStateFromProps,typeof u=="function"&&(Js(e,t,u,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&Ui.enqueueReplaceState(a,a.state,null),Di(e,n,a,l),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Dr(e,t){try{var n="",l=t;do n+=pe(l),l=l.return;while(l);var a=n}catch(u){a=`
Error generating stack: `+u.message+`
`+u.stack}return{value:e,source:t,stack:a,digest:null}}function ta(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function na(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var _m=typeof WeakMap=="function"?WeakMap:Map;function $d(e,t,n){n=pn(-1,n),n.tag=3,n.payload={element:null};var l=t.value;return n.callback=function(){Xi||(Xi=!0,va=l),na(e,t)},n}function zd(e,t,n){n=pn(-1,n),n.tag=3;var l=e.type.getDerivedStateFromError;if(typeof l=="function"){var a=t.value;n.payload=function(){return l(a)},n.callback=function(){na(e,t)}}var u=e.stateNode;return u!==null&&typeof u.componentDidCatch=="function"&&(n.callback=function(){na(e,t),typeof l!="function"&&(Ln===null?Ln=new Set([this]):Ln.add(this));var h=t.stack;this.componentDidCatch(t.value,{componentStack:h!==null?h:""})}),n}function Ad(e,t,n){var l=e.pingCache;if(l===null){l=e.pingCache=new _m;var a=new Set;l.set(t,a)}else a=l.get(t),a===void 0&&(a=new Set,l.set(t,a));a.has(n)||(a.add(n),e=Om.bind(null,e,t,n),t.then(e,e))}function Pd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Td(e,t,n,l,a){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=pn(-1,1),t.tag=2,Tn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var xm=re.ReactCurrentOwner,pt=!1;function at(e,t,n,l){t.child=e===null?Xc(t,null,n,l):Lr(t,e.child,n,l)}function Rd(e,t,n,l,a){n=n.render;var u=t.ref;return Or(t,a),l=qs(e,t,n,l,u,a),n=Qs(),e!==null&&!pt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,mn(e,t,a)):(Le&&n&&Ps(t),t.flags|=1,at(e,t,l,a),t.child)}function Ld(e,t,n,l,a){if(e===null){var u=n.type;return typeof u=="function"&&!Sa(u)&&u.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=u,Nd(e,t,u,l,a)):(e=rl(n.type,null,l,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,(e.lanes&a)===0){var h=u.memoizedProps;if(n=n.compare,n=n!==null?n:yo,n(h,l)&&e.ref===t.ref)return mn(e,t,a)}return t.flags|=1,e=Dn(u,l),e.ref=t.ref,e.return=t,t.child=e}function Nd(e,t,n,l,a){if(e!==null){var u=e.memoizedProps;if(yo(u,l)&&e.ref===t.ref)if(pt=!1,t.pendingProps=l=u,(e.lanes&a)!==0)(e.flags&131072)!==0&&(pt=!0);else return t.lanes=e.lanes,mn(e,t,a)}return ra(e,t,n,l,a)}function Od(e,t,n){var l=t.pendingProps,a=l.children,u=e!==null?e.memoizedState:null;if(l.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ke(Ir,St),St|=n;else{if((n&1073741824)===0)return e=u!==null?u.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ke(Ir,St),St|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=u!==null?u.baseLanes:n,ke(Ir,St),St|=l}else u!==null?(l=u.baseLanes|n,t.memoizedState=null):l=n,ke(Ir,St),St|=l;return at(e,t,a,n),t.child}function Md(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ra(e,t,n,l,a){var u=ft(n)?Zn:nt.current;return u=Ar(t,u),Or(t,a),n=qs(e,t,n,l,u,a),l=Qs(),e!==null&&!pt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,mn(e,t,a)):(Le&&l&&Ps(t),t.flags|=1,at(e,t,n,a),t.child)}function Dd(e,t,n,l,a){if(ft(n)){var u=!0;zi(t)}else u=!1;if(Or(t,a),t.stateNode===null)Ki(e,t),Cd(t,n,l),ea(t,n,l,a),l=!0;else if(e===null){var h=t.stateNode,g=t.memoizedProps;h.props=g;var y=h.context,$=n.contextType;typeof $=="object"&&$!==null?$=Nt($):($=ft(n)?Zn:nt.current,$=Ar(t,$));var L=n.getDerivedStateFromProps,N=typeof L=="function"||typeof h.getSnapshotBeforeUpdate=="function";N||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(g!==l||y!==$)&&Ed(t,h,l,$),Pn=!1;var T=t.memoizedState;h.state=T,Di(t,l,h,a),y=t.memoizedState,g!==l||T!==y||ht.current||Pn?(typeof L=="function"&&(Js(t,n,L,l),y=t.memoizedState),(g=Pn||Sd(t,n,g,l,T,y,$))?(N||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(t.flags|=4194308)):(typeof h.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=y),h.props=l,h.state=y,h.context=$,l=g):(typeof h.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{h=t.stateNode,Jc(e,t),g=t.memoizedProps,$=t.type===t.elementType?g:Ut(t.type,g),h.props=$,N=t.pendingProps,T=h.context,y=n.contextType,typeof y=="object"&&y!==null?y=Nt(y):(y=ft(n)?Zn:nt.current,y=Ar(t,y));var j=n.getDerivedStateFromProps;(L=typeof j=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(g!==N||T!==y)&&Ed(t,h,l,y),Pn=!1,T=t.memoizedState,h.state=T,Di(t,l,h,a);var U=t.memoizedState;g!==N||T!==U||ht.current||Pn?(typeof j=="function"&&(Js(t,n,j,l),U=t.memoizedState),($=Pn||Sd(t,n,$,l,T,U,y)||!1)?(L||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(l,U,y),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(l,U,y)),typeof h.componentDidUpdate=="function"&&(t.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof h.componentDidUpdate!="function"||g===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=U),h.props=l,h.state=U,h.context=y,l=$):(typeof h.componentDidUpdate!="function"||g===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),l=!1)}return oa(e,t,n,l,u,a)}function oa(e,t,n,l,a,u){Md(e,t);var h=(t.flags&128)!==0;if(!l&&!h)return a&&Bc(t,n,!1),mn(e,t,u);l=t.stateNode,xm.current=t;var g=h&&typeof n.getDerivedStateFromError!="function"?null:l.render();return t.flags|=1,e!==null&&h?(t.child=Lr(t,e.child,null,u),t.child=Lr(t,null,g,u)):at(e,t,g,u),t.memoizedState=l.state,a&&Bc(t,n,!0),t.child}function Fd(e){var t=e.stateNode;t.pendingContext?jc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&jc(e,t.context,!1),Vs(e,t.containerInfo)}function Id(e,t,n,l,a){return Rr(),Ns(a),t.flags|=256,at(e,t,n,l),t.child}var ia={dehydrated:null,treeContext:null,retryLane:0};function la(e){return{baseLanes:e,cachePool:null,transitions:null}}function jd(e,t,n){var l=t.pendingProps,a=Ne.current,u=!1,h=(t.flags&128)!==0,g;if((g=h)||(g=e!==null&&e.memoizedState===null?!1:(a&2)!==0),g?(u=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),ke(Ne,a&1),e===null)return Ls(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(h=l.children,e=l.fallback,u?(l=t.mode,u=t.child,h={mode:"hidden",children:h},(l&1)===0&&u!==null?(u.childLanes=0,u.pendingProps=h):u=ol(h,l,0,null),e=ar(e,l,n,null),u.return=t,e.return=t,u.sibling=e,t.child=u,t.child.memoizedState=la(n),t.memoizedState=ia,e):sa(t,h));if(a=e.memoizedState,a!==null&&(g=a.dehydrated,g!==null))return km(e,t,h,l,g,a,n);if(u){u=l.fallback,h=t.mode,a=e.child,g=a.sibling;var y={mode:"hidden",children:l.children};return(h&1)===0&&t.child!==a?(l=t.child,l.childLanes=0,l.pendingProps=y,t.deletions=null):(l=Dn(a,y),l.subtreeFlags=a.subtreeFlags&14680064),g!==null?u=Dn(g,u):(u=ar(u,h,n,null),u.flags|=2),u.return=t,l.return=t,l.sibling=u,t.child=l,l=u,u=t.child,h=e.child.memoizedState,h=h===null?la(n):{baseLanes:h.baseLanes|n,cachePool:null,transitions:h.transitions},u.memoizedState=h,u.childLanes=e.childLanes&~n,t.memoizedState=ia,l}return u=e.child,e=u.sibling,l=Dn(u,{mode:"visible",children:l.children}),(t.mode&1)===0&&(l.lanes=n),l.return=t,l.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=l,t.memoizedState=null,l}function sa(e,t){return t=ol({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Wi(e,t,n,l){return l!==null&&Ns(l),Lr(t,e.child,null,n),e=sa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function km(e,t,n,l,a,u,h){if(n)return t.flags&256?(t.flags&=-257,l=ta(Error(i(422))),Wi(e,t,h,l)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(u=l.fallback,a=t.mode,l=ol({mode:"visible",children:l.children},a,0,null),u=ar(u,a,h,null),u.flags|=2,l.return=t,u.return=t,l.sibling=u,t.child=l,(t.mode&1)!==0&&Lr(t,e.child,null,h),t.child.memoizedState=la(h),t.memoizedState=ia,u);if((t.mode&1)===0)return Wi(e,t,h,null);if(a.data==="$!"){if(l=a.nextSibling&&a.nextSibling.dataset,l)var g=l.dgst;return l=g,u=Error(i(419)),l=ta(u,l,void 0),Wi(e,t,h,l)}if(g=(h&e.childLanes)!==0,pt||g){if(l=qe,l!==null){switch(h&-h){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(l.suspendedLanes|h))!==0?0:a,a!==0&&a!==u.retryLane&&(u.retryLane=a,fn(e,a),qt(l,e,a,-1))}return ka(),l=ta(Error(i(421))),Wi(e,t,h,l)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=Mm.bind(null,e),a._reactRetry=t,null):(e=u.treeContext,kt=En(a.nextSibling),xt=t,Le=!0,Ht=null,e!==null&&(Rt[Lt++]=dn,Rt[Lt++]=hn,Rt[Lt++]=Jn,dn=e.id,hn=e.overflow,Jn=t),t=sa(t,l.children),t.flags|=4096,t)}function Vd(e,t,n){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Fs(e.return,t,n)}function aa(e,t,n,l,a){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:a}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=l,u.tail=n,u.tailMode=a)}function Bd(e,t,n){var l=t.pendingProps,a=l.revealOrder,u=l.tail;if(at(e,t,l.children,n),l=Ne.current,(l&2)!==0)l=l&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Vd(e,n,t);else if(e.tag===19)Vd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}if(ke(Ne,l),(t.mode&1)===0)t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&Fi(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),aa(t,!1,a,n,u);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Fi(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}aa(t,!0,n,null,u);break;case"together":aa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ki(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function mn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),or|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=Dn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Dn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Sm(e,t,n){switch(t.tag){case 3:Fd(t),Rr();break;case 5:nd(t);break;case 1:ft(t.type)&&zi(t);break;case 4:Vs(t,t.stateNode.containerInfo);break;case 10:var l=t.type._context,a=t.memoizedProps.value;ke(Ni,l._currentValue),l._currentValue=a;break;case 13:if(l=t.memoizedState,l!==null)return l.dehydrated!==null?(ke(Ne,Ne.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?jd(e,t,n):(ke(Ne,Ne.current&1),e=mn(e,t,n),e!==null?e.sibling:null);ke(Ne,Ne.current&1);break;case 19:if(l=(n&t.childLanes)!==0,(e.flags&128)!==0){if(l)return Bd(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),ke(Ne,Ne.current),l)break;return null;case 22:case 23:return t.lanes=0,Od(e,t,n)}return mn(e,t,n)}var Hd,ua,Ud,Wd;Hd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},ua=function(){},Ud=function(e,t,n,l){var a=e.memoizedProps;if(a!==l){e=t.stateNode,nr(nn.current);var u=null;switch(n){case"input":a=Fl(e,a),l=Fl(e,l),u=[];break;case"select":a=B({},a,{value:void 0}),l=B({},l,{value:void 0}),u=[];break;case"textarea":a=Vl(e,a),l=Vl(e,l),u=[];break;default:typeof a.onClick!="function"&&typeof l.onClick=="function"&&(e.onclick=Ci)}Hl(n,l);var h;n=null;for($ in a)if(!l.hasOwnProperty($)&&a.hasOwnProperty($)&&a[$]!=null)if($==="style"){var g=a[$];for(h in g)g.hasOwnProperty(h)&&(n||(n={}),n[h]="")}else $!=="dangerouslySetInnerHTML"&&$!=="children"&&$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&$!=="autoFocus"&&(c.hasOwnProperty($)?u||(u=[]):(u=u||[]).push($,null));for($ in l){var y=l[$];if(g=a?.[$],l.hasOwnProperty($)&&y!==g&&(y!=null||g!=null))if($==="style")if(g){for(h in g)!g.hasOwnProperty(h)||y&&y.hasOwnProperty(h)||(n||(n={}),n[h]="");for(h in y)y.hasOwnProperty(h)&&g[h]!==y[h]&&(n||(n={}),n[h]=y[h])}else n||(u||(u=[]),u.push($,n)),n=y;else $==="dangerouslySetInnerHTML"?(y=y?y.__html:void 0,g=g?g.__html:void 0,y!=null&&g!==y&&(u=u||[]).push($,y)):$==="children"?typeof y!="string"&&typeof y!="number"||(u=u||[]).push($,""+y):$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&(c.hasOwnProperty($)?(y!=null&&$==="onScroll"&&$e("scroll",e),u||g===y||(u=[])):(u=u||[]).push($,y))}n&&(u=u||[]).push("style",n);var $=u;(t.updateQueue=$)&&(t.flags|=4)}},Wd=function(e,t,n,l){n!==l&&(t.flags|=4)};function Lo(e,t){if(!Le)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function ot(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,l=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,l|=a.subtreeFlags&14680064,l|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,l|=a.subtreeFlags,l|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=l,e.childLanes=n,t}function Cm(e,t,n){var l=t.pendingProps;switch(Ts(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ot(t),null;case 1:return ft(t.type)&&$i(),ot(t),null;case 3:return l=t.stateNode,Mr(),ze(ht),ze(nt),Us(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(Ri(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ht!==null&&(wa(Ht),Ht=null))),ua(e,t),ot(t),null;case 5:Bs(t);var a=nr(zo.current);if(n=t.type,e!==null&&t.stateNode!=null)Ud(e,t,n,l,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!l){if(t.stateNode===null)throw Error(i(166));return ot(t),null}if(e=nr(nn.current),Ri(t)){l=t.stateNode,n=t.type;var u=t.memoizedProps;switch(l[tn]=t,l[ko]=u,e=(t.mode&1)!==0,n){case"dialog":$e("cancel",l),$e("close",l);break;case"iframe":case"object":case"embed":$e("load",l);break;case"video":case"audio":for(a=0;a<wo.length;a++)$e(wo[a],l);break;case"source":$e("error",l);break;case"img":case"image":case"link":$e("error",l),$e("load",l);break;case"details":$e("toggle",l);break;case"input":Cu(l,u),$e("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!u.multiple},$e("invalid",l);break;case"textarea":zu(l,u),$e("invalid",l)}Hl(n,u),a=null;for(var h in u)if(u.hasOwnProperty(h)){var g=u[h];h==="children"?typeof g=="string"?l.textContent!==g&&(u.suppressHydrationWarning!==!0&&Si(l.textContent,g,e),a=["children",g]):typeof g=="number"&&l.textContent!==""+g&&(u.suppressHydrationWarning!==!0&&Si(l.textContent,g,e),a=["children",""+g]):c.hasOwnProperty(h)&&g!=null&&h==="onScroll"&&$e("scroll",l)}switch(n){case"input":ti(l),$u(l,u,!0);break;case"textarea":ti(l),Pu(l);break;case"select":case"option":break;default:typeof u.onClick=="function"&&(l.onclick=Ci)}l=a,t.updateQueue=l,l!==null&&(t.flags|=4)}else{h=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Tu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof l.is=="string"?e=h.createElement(n,{is:l.is}):(e=h.createElement(n),n==="select"&&(h=e,l.multiple?h.multiple=!0:l.size&&(h.size=l.size))):e=h.createElementNS(e,n),e[tn]=t,e[ko]=l,Hd(e,t,!1,!1),t.stateNode=e;e:{switch(h=Ul(n,l),n){case"dialog":$e("cancel",e),$e("close",e),a=l;break;case"iframe":case"object":case"embed":$e("load",e),a=l;break;case"video":case"audio":for(a=0;a<wo.length;a++)$e(wo[a],e);a=l;break;case"source":$e("error",e),a=l;break;case"img":case"image":case"link":$e("error",e),$e("load",e),a=l;break;case"details":$e("toggle",e),a=l;break;case"input":Cu(e,l),a=Fl(e,l),$e("invalid",e);break;case"option":a=l;break;case"select":e._wrapperState={wasMultiple:!!l.multiple},a=B({},l,{value:void 0}),$e("invalid",e);break;case"textarea":zu(e,l),a=Vl(e,l),$e("invalid",e);break;default:a=l}Hl(n,a),g=a;for(u in g)if(g.hasOwnProperty(u)){var y=g[u];u==="style"?Nu(e,y):u==="dangerouslySetInnerHTML"?(y=y?y.__html:void 0,y!=null&&Ru(e,y)):u==="children"?typeof y=="string"?(n!=="textarea"||y!=="")&&eo(e,y):typeof y=="number"&&eo(e,""+y):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(c.hasOwnProperty(u)?y!=null&&u==="onScroll"&&$e("scroll",e):y!=null&&ne(e,u,y,h))}switch(n){case"input":ti(e),$u(e,l,!1);break;case"textarea":ti(e),Pu(e);break;case"option":l.value!=null&&e.setAttribute("value",""+be(l.value));break;case"select":e.multiple=!!l.multiple,u=l.value,u!=null?vr(e,!!l.multiple,u,!1):l.defaultValue!=null&&vr(e,!!l.multiple,l.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Ci)}switch(n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ot(t),null;case 6:if(e&&t.stateNode!=null)Wd(e,t,e.memoizedProps,l);else{if(typeof l!="string"&&t.stateNode===null)throw Error(i(166));if(n=nr(zo.current),nr(nn.current),Ri(t)){if(l=t.stateNode,n=t.memoizedProps,l[tn]=t,(u=l.nodeValue!==n)&&(e=xt,e!==null))switch(e.tag){case 3:Si(l.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Si(l.nodeValue,n,(e.mode&1)!==0)}u&&(t.flags|=4)}else l=(n.nodeType===9?n:n.ownerDocument).createTextNode(l),l[tn]=t,t.stateNode=l}return ot(t),null;case 13:if(ze(Ne),l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Le&&kt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Qc(),Rr(),t.flags|=98560,u=!1;else if(u=Ri(t),l!==null&&l.dehydrated!==null){if(e===null){if(!u)throw Error(i(318));if(u=t.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(i(317));u[tn]=t}else Rr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ot(t),u=!1}else Ht!==null&&(wa(Ht),Ht=null),u=!0;if(!u)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(l=l!==null,l!==(e!==null&&e.memoizedState!==null)&&l&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Ne.current&1)!==0?Ue===0&&(Ue=3):ka())),t.updateQueue!==null&&(t.flags|=4),ot(t),null);case 4:return Mr(),ua(e,t),e===null&&_o(t.stateNode.containerInfo),ot(t),null;case 10:return Ds(t.type._context),ot(t),null;case 17:return ft(t.type)&&$i(),ot(t),null;case 19:if(ze(Ne),u=t.memoizedState,u===null)return ot(t),null;if(l=(t.flags&128)!==0,h=u.rendering,h===null)if(l)Lo(u,!1);else{if(Ue!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(h=Fi(e),h!==null){for(t.flags|=128,Lo(u,!1),l=h.updateQueue,l!==null&&(t.updateQueue=l,t.flags|=4),t.subtreeFlags=0,l=n,n=t.child;n!==null;)u=n,e=l,u.flags&=14680066,h=u.alternate,h===null?(u.childLanes=0,u.lanes=e,u.child=null,u.subtreeFlags=0,u.memoizedProps=null,u.memoizedState=null,u.updateQueue=null,u.dependencies=null,u.stateNode=null):(u.childLanes=h.childLanes,u.lanes=h.lanes,u.child=h.child,u.subtreeFlags=0,u.deletions=null,u.memoizedProps=h.memoizedProps,u.memoizedState=h.memoizedState,u.updateQueue=h.updateQueue,u.type=h.type,e=h.dependencies,u.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ke(Ne,Ne.current&1|2),t.child}e=e.sibling}u.tail!==null&&Ie()>jr&&(t.flags|=128,l=!0,Lo(u,!1),t.lanes=4194304)}else{if(!l)if(e=Fi(h),e!==null){if(t.flags|=128,l=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Lo(u,!0),u.tail===null&&u.tailMode==="hidden"&&!h.alternate&&!Le)return ot(t),null}else 2*Ie()-u.renderingStartTime>jr&&n!==1073741824&&(t.flags|=128,l=!0,Lo(u,!1),t.lanes=4194304);u.isBackwards?(h.sibling=t.child,t.child=h):(n=u.last,n!==null?n.sibling=h:t.child=h,u.last=h)}return u.tail!==null?(t=u.tail,u.rendering=t,u.tail=t.sibling,u.renderingStartTime=Ie(),t.sibling=null,n=Ne.current,ke(Ne,l?n&1|2:n&1),t):(ot(t),null);case 22:case 23:return xa(),l=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==l&&(t.flags|=8192),l&&(t.mode&1)!==0?(St&1073741824)!==0&&(ot(t),t.subtreeFlags&6&&(t.flags|=8192)):ot(t),null;case 24:return null;case 25:return null}throw Error(i(156,t.tag))}function Em(e,t){switch(Ts(t),t.tag){case 1:return ft(t.type)&&$i(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Mr(),ze(ht),ze(nt),Us(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Bs(t),null;case 13:if(ze(Ne),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Rr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ze(Ne),null;case 4:return Mr(),null;case 10:return Ds(t.type._context),null;case 22:case 23:return xa(),null;case 24:return null;default:return null}}var qi=!1,it=!1,$m=typeof WeakSet=="function"?WeakSet:Set,H=null;function Fr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(l){Me(e,t,l)}else n.current=null}function ca(e,t,n){try{n()}catch(l){Me(e,t,l)}}var Kd=!1;function zm(e,t){if(xs=fi,e=Sc(),ps(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var a=l.anchorOffset,u=l.focusNode;l=l.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break e}var h=0,g=-1,y=-1,$=0,L=0,N=e,T=null;t:for(;;){for(var j;N!==n||a!==0&&N.nodeType!==3||(g=h+a),N!==u||l!==0&&N.nodeType!==3||(y=h+l),N.nodeType===3&&(h+=N.nodeValue.length),(j=N.firstChild)!==null;)T=N,N=j;for(;;){if(N===e)break t;if(T===n&&++$===a&&(g=h),T===u&&++L===l&&(y=h),(j=N.nextSibling)!==null)break;N=T,T=N.parentNode}N=j}n=g===-1||y===-1?null:{start:g,end:y}}else n=null}n=n||{start:0,end:0}}else n=null;for(ks={focusedElem:e,selectionRange:n},fi=!1,H=t;H!==null;)if(t=H,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,H=e;else for(;H!==null;){t=H;try{var U=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(U!==null){var W=U.memoizedProps,je=U.memoizedState,S=t.stateNode,_=S.getSnapshotBeforeUpdate(t.elementType===t.type?W:Ut(t.type,W),je);S.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var C=t.stateNode.containerInfo;C.nodeType===1?C.textContent="":C.nodeType===9&&C.documentElement&&C.removeChild(C.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(O){Me(t,t.return,O)}if(e=t.sibling,e!==null){e.return=t.return,H=e;break}H=t.return}return U=Kd,Kd=!1,U}function No(e,t,n){var l=t.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var a=l=l.next;do{if((a.tag&e)===e){var u=a.destroy;a.destroy=void 0,u!==void 0&&ca(t,n,u)}a=a.next}while(a!==l)}}function Qi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var l=n.create;n.destroy=l()}n=n.next}while(n!==t)}}function da(e){var t=e.ref;if(t!==null){var n=e.stateNode;e.tag,e=n,typeof t=="function"?t(e):t.current=e}}function qd(e){var t=e.alternate;t!==null&&(e.alternate=null,qd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[tn],delete t[ko],delete t[$s],delete t[cm],delete t[dm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Qd(e){return e.tag===5||e.tag===3||e.tag===4}function Yd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Qd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ha(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ci));else if(l!==4&&(e=e.child,e!==null))for(ha(e,t,n),e=e.sibling;e!==null;)ha(e,t,n),e=e.sibling}function fa(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(l!==4&&(e=e.child,e!==null))for(fa(e,t,n),e=e.sibling;e!==null;)fa(e,t,n),e=e.sibling}var Xe=null,Wt=!1;function Rn(e,t,n){for(n=n.child;n!==null;)Gd(e,t,n),n=n.sibling}function Gd(e,t,n){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(si,n)}catch{}switch(n.tag){case 5:it||Fr(n,t);case 6:var l=Xe,a=Wt;Xe=null,Rn(e,t,n),Xe=l,Wt=a,Xe!==null&&(Wt?(e=Xe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Xe.removeChild(n.stateNode));break;case 18:Xe!==null&&(Wt?(e=Xe,n=n.stateNode,e.nodeType===8?Es(e.parentNode,n):e.nodeType===1&&Es(e,n),ho(e)):Es(Xe,n.stateNode));break;case 4:l=Xe,a=Wt,Xe=n.stateNode.containerInfo,Wt=!0,Rn(e,t,n),Xe=l,Wt=a;break;case 0:case 11:case 14:case 15:if(!it&&(l=n.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){a=l=l.next;do{var u=a,h=u.destroy;u=u.tag,h!==void 0&&((u&2)!==0||(u&4)!==0)&&ca(n,t,h),a=a.next}while(a!==l)}Rn(e,t,n);break;case 1:if(!it&&(Fr(n,t),l=n.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=n.memoizedProps,l.state=n.memoizedState,l.componentWillUnmount()}catch(g){Me(n,t,g)}Rn(e,t,n);break;case 21:Rn(e,t,n);break;case 22:n.mode&1?(it=(l=it)||n.memoizedState!==null,Rn(e,t,n),it=l):Rn(e,t,n);break;default:Rn(e,t,n)}}function Xd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new $m),t.forEach(function(l){var a=Dm.bind(null,e,l);n.has(l)||(n.add(l),l.then(a,a))})}}function Kt(e,t){var n=t.deletions;if(n!==null)for(var l=0;l<n.length;l++){var a=n[l];try{var u=e,h=t,g=h;e:for(;g!==null;){switch(g.tag){case 5:Xe=g.stateNode,Wt=!1;break e;case 3:Xe=g.stateNode.containerInfo,Wt=!0;break e;case 4:Xe=g.stateNode.containerInfo,Wt=!0;break e}g=g.return}if(Xe===null)throw Error(i(160));Gd(u,h,a),Xe=null,Wt=!1;var y=a.alternate;y!==null&&(y.return=null),a.return=null}catch($){Me(a,t,$)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Zd(t,e),t=t.sibling}function Zd(e,t){var n=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Kt(t,e),on(e),l&4){try{No(3,e,e.return),Qi(3,e)}catch(W){Me(e,e.return,W)}try{No(5,e,e.return)}catch(W){Me(e,e.return,W)}}break;case 1:Kt(t,e),on(e),l&512&&n!==null&&Fr(n,n.return);break;case 5:if(Kt(t,e),on(e),l&512&&n!==null&&Fr(n,n.return),e.flags&32){var a=e.stateNode;try{eo(a,"")}catch(W){Me(e,e.return,W)}}if(l&4&&(a=e.stateNode,a!=null)){var u=e.memoizedProps,h=n!==null?n.memoizedProps:u,g=e.type,y=e.updateQueue;if(e.updateQueue=null,y!==null)try{g==="input"&&u.type==="radio"&&u.name!=null&&Eu(a,u),Ul(g,h);var $=Ul(g,u);for(h=0;h<y.length;h+=2){var L=y[h],N=y[h+1];L==="style"?Nu(a,N):L==="dangerouslySetInnerHTML"?Ru(a,N):L==="children"?eo(a,N):ne(a,L,N,$)}switch(g){case"input":Il(a,u);break;case"textarea":Au(a,u);break;case"select":var T=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!u.multiple;var j=u.value;j!=null?vr(a,!!u.multiple,j,!1):T!==!!u.multiple&&(u.defaultValue!=null?vr(a,!!u.multiple,u.defaultValue,!0):vr(a,!!u.multiple,u.multiple?[]:"",!1))}a[ko]=u}catch(W){Me(e,e.return,W)}}break;case 6:if(Kt(t,e),on(e),l&4){if(e.stateNode===null)throw Error(i(162));a=e.stateNode,u=e.memoizedProps;try{a.nodeValue=u}catch(W){Me(e,e.return,W)}}break;case 3:if(Kt(t,e),on(e),l&4&&n!==null&&n.memoizedState.isDehydrated)try{ho(t.containerInfo)}catch(W){Me(e,e.return,W)}break;case 4:Kt(t,e),on(e);break;case 13:Kt(t,e),on(e),a=e.child,a.flags&8192&&(u=a.memoizedState!==null,a.stateNode.isHidden=u,!u||a.alternate!==null&&a.alternate.memoizedState!==null||(ga=Ie())),l&4&&Xd(e);break;case 22:if(L=n!==null&&n.memoizedState!==null,e.mode&1?(it=($=it)||L,Kt(t,e),it=$):Kt(t,e),on(e),l&8192){if($=e.memoizedState!==null,(e.stateNode.isHidden=$)&&!L&&(e.mode&1)!==0)for(H=e,L=e.child;L!==null;){for(N=H=L;H!==null;){switch(T=H,j=T.child,T.tag){case 0:case 11:case 14:case 15:No(4,T,T.return);break;case 1:Fr(T,T.return);var U=T.stateNode;if(typeof U.componentWillUnmount=="function"){l=T,n=T.return;try{t=l,U.props=t.memoizedProps,U.state=t.memoizedState,U.componentWillUnmount()}catch(W){Me(l,n,W)}}break;case 5:Fr(T,T.return);break;case 22:if(T.memoizedState!==null){th(N);continue}}j!==null?(j.return=T,H=j):th(N)}L=L.sibling}e:for(L=null,N=e;;){if(N.tag===5){if(L===null){L=N;try{a=N.stateNode,$?(u=a.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none"):(g=N.stateNode,y=N.memoizedProps.style,h=y!=null&&y.hasOwnProperty("display")?y.display:null,g.style.display=Lu("display",h))}catch(W){Me(e,e.return,W)}}}else if(N.tag===6){if(L===null)try{N.stateNode.nodeValue=$?"":N.memoizedProps}catch(W){Me(e,e.return,W)}}else if((N.tag!==22&&N.tag!==23||N.memoizedState===null||N===e)&&N.child!==null){N.child.return=N,N=N.child;continue}if(N===e)break e;for(;N.sibling===null;){if(N.return===null||N.return===e)break e;L===N&&(L=null),N=N.return}L===N&&(L=null),N.sibling.return=N.return,N=N.sibling}}break;case 19:Kt(t,e),on(e),l&4&&Xd(e);break;case 21:break;default:Kt(t,e),on(e)}}function on(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Qd(n)){var l=n;break e}n=n.return}throw Error(i(160))}switch(l.tag){case 5:var a=l.stateNode;l.flags&32&&(eo(a,""),l.flags&=-33);var u=Yd(e);fa(e,u,a);break;case 3:case 4:var h=l.stateNode.containerInfo,g=Yd(e);ha(e,g,h);break;default:throw Error(i(161))}}catch(y){Me(e,e.return,y)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Am(e,t,n){H=e,Jd(e)}function Jd(e,t,n){for(var l=(e.mode&1)!==0;H!==null;){var a=H,u=a.child;if(a.tag===22&&l){var h=a.memoizedState!==null||qi;if(!h){var g=a.alternate,y=g!==null&&g.memoizedState!==null||it;g=qi;var $=it;if(qi=h,(it=y)&&!$)for(H=a;H!==null;)h=H,y=h.child,h.tag===22&&h.memoizedState!==null?nh(a):y!==null?(y.return=h,H=y):nh(a);for(;u!==null;)H=u,Jd(u),u=u.sibling;H=a,qi=g,it=$}eh(e)}else(a.subtreeFlags&8772)!==0&&u!==null?(u.return=a,H=u):eh(e)}}function eh(e){for(;H!==null;){var t=H;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:it||Qi(5,t);break;case 1:var l=t.stateNode;if(t.flags&4&&!it)if(n===null)l.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:Ut(t.type,n.memoizedProps);l.componentDidUpdate(a,n.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var u=t.updateQueue;u!==null&&td(t,u,l);break;case 3:var h=t.updateQueue;if(h!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}td(t,h,n)}break;case 5:var g=t.stateNode;if(n===null&&t.flags&4){n=g;var y=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":y.autoFocus&&n.focus();break;case"img":y.src&&(n.src=y.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var $=t.alternate;if($!==null){var L=$.memoizedState;if(L!==null){var N=L.dehydrated;N!==null&&ho(N)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}it||t.flags&512&&da(t)}catch(T){Me(t,t.return,T)}}if(t===e){H=null;break}if(n=t.sibling,n!==null){n.return=t.return,H=n;break}H=t.return}}function th(e){for(;H!==null;){var t=H;if(t===e){H=null;break}var n=t.sibling;if(n!==null){n.return=t.return,H=n;break}H=t.return}}function nh(e){for(;H!==null;){var t=H;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Qi(4,t)}catch(y){Me(t,n,y)}break;case 1:var l=t.stateNode;if(typeof l.componentDidMount=="function"){var a=t.return;try{l.componentDidMount()}catch(y){Me(t,a,y)}}var u=t.return;try{da(t)}catch(y){Me(t,u,y)}break;case 5:var h=t.return;try{da(t)}catch(y){Me(t,h,y)}}}catch(y){Me(t,t.return,y)}if(t===e){H=null;break}var g=t.sibling;if(g!==null){g.return=t.return,H=g;break}H=t.return}}var Pm=Math.ceil,Yi=re.ReactCurrentDispatcher,pa=re.ReactCurrentOwner,Mt=re.ReactCurrentBatchConfig,he=0,qe=null,Ve=null,Ze=0,St=0,Ir=$n(0),Ue=0,Oo=null,or=0,Gi=0,ma=0,Mo=null,mt=null,ga=0,jr=1/0,gn=null,Xi=!1,va=null,Ln=null,Zi=!1,Nn=null,Ji=0,Do=0,ya=null,el=-1,tl=0;function ut(){return(he&6)!==0?Ie():el!==-1?el:el=Ie()}function On(e){return(e.mode&1)===0?1:(he&2)!==0&&Ze!==0?Ze&-Ze:fm.transition!==null?(tl===0&&(tl=Yu()),tl):(e=we,e!==0||(e=window.event,e=e===void 0?16:oc(e.type)),e)}function qt(e,t,n,l){if(50<Do)throw Do=0,ya=null,Error(i(185));lo(e,n,l),((he&2)===0||e!==qe)&&(e===qe&&((he&2)===0&&(Gi|=n),Ue===4&&Mn(e,Ze)),gt(e,l),n===1&&he===0&&(t.mode&1)===0&&(jr=Ie()+500,Ai&&An()))}function gt(e,t){var n=e.callbackNode;fp(e,t);var l=ci(e,e===qe?Ze:0);if(l===0)n!==null&&Ku(n),e.callbackNode=null,e.callbackPriority=0;else if(t=l&-l,e.callbackPriority!==t){if(n!=null&&Ku(n),t===1)e.tag===0?hm(oh.bind(null,e)):Hc(oh.bind(null,e)),am(function(){(he&6)===0&&An()}),n=null;else{switch(Gu(l)){case 1:n=Xl;break;case 4:n=qu;break;case 16:n=li;break;case 536870912:n=Qu;break;default:n=li}n=hh(n,rh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function rh(e,t){if(el=-1,tl=0,(he&6)!==0)throw Error(i(327));var n=e.callbackNode;if(Vr()&&e.callbackNode!==n)return null;var l=ci(e,e===qe?Ze:0);if(l===0)return null;if((l&30)!==0||(l&e.expiredLanes)!==0||t)t=nl(e,l);else{t=l;var a=he;he|=2;var u=lh();(qe!==e||Ze!==t)&&(gn=null,jr=Ie()+500,lr(e,t));do try{Lm();break}catch(g){ih(e,g)}while(!0);Ms(),Yi.current=u,he=a,Ve!==null?t=0:(qe=null,Ze=0,t=Ue)}if(t!==0){if(t===2&&(a=Zl(e),a!==0&&(l=a,t=ba(e,a))),t===1)throw n=Oo,lr(e,0),Mn(e,l),gt(e,Ie()),n;if(t===6)Mn(e,l);else{if(a=e.current.alternate,(l&30)===0&&!Tm(a)&&(t=nl(e,l),t===2&&(u=Zl(e),u!==0&&(l=u,t=ba(e,u))),t===1))throw n=Oo,lr(e,0),Mn(e,l),gt(e,Ie()),n;switch(e.finishedWork=a,e.finishedLanes=l,t){case 0:case 1:throw Error(i(345));case 2:sr(e,mt,gn);break;case 3:if(Mn(e,l),(l&130023424)===l&&(t=ga+500-Ie(),10<t)){if(ci(e,0)!==0)break;if(a=e.suspendedLanes,(a&l)!==l){ut(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Cs(sr.bind(null,e,mt,gn),t);break}sr(e,mt,gn);break;case 4:if(Mn(e,l),(l&4194240)===l)break;for(t=e.eventTimes,a=-1;0<l;){var h=31-Vt(l);u=1<<h,h=t[h],h>a&&(a=h),l&=~u}if(l=a,l=Ie()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*Pm(l/1960))-l,10<l){e.timeoutHandle=Cs(sr.bind(null,e,mt,gn),l);break}sr(e,mt,gn);break;case 5:sr(e,mt,gn);break;default:throw Error(i(329))}}}return gt(e,Ie()),e.callbackNode===n?rh.bind(null,e):null}function ba(e,t){var n=Mo;return e.current.memoizedState.isDehydrated&&(lr(e,t).flags|=256),e=nl(e,t),e!==2&&(t=mt,mt=n,t!==null&&wa(t)),e}function wa(e){mt===null?mt=e:mt.push.apply(mt,e)}function Tm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var l=0;l<n.length;l++){var a=n[l],u=a.getSnapshot;a=a.value;try{if(!Bt(u(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Mn(e,t){for(t&=~ma,t&=~Gi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Vt(t),l=1<<n;e[n]=-1,t&=~l}}function oh(e){if((he&6)!==0)throw Error(i(327));Vr();var t=ci(e,0);if((t&1)===0)return gt(e,Ie()),null;var n=nl(e,t);if(e.tag!==0&&n===2){var l=Zl(e);l!==0&&(t=l,n=ba(e,l))}if(n===1)throw n=Oo,lr(e,0),Mn(e,t),gt(e,Ie()),n;if(n===6)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,sr(e,mt,gn),gt(e,Ie()),null}function _a(e,t){var n=he;he|=1;try{return e(t)}finally{he=n,he===0&&(jr=Ie()+500,Ai&&An())}}function ir(e){Nn!==null&&Nn.tag===0&&(he&6)===0&&Vr();var t=he;he|=1;var n=Mt.transition,l=we;try{if(Mt.transition=null,we=1,e)return e()}finally{we=l,Mt.transition=n,he=t,(he&6)===0&&An()}}function xa(){St=Ir.current,ze(Ir)}function lr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,sm(n)),Ve!==null)for(n=Ve.return;n!==null;){var l=n;switch(Ts(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&$i();break;case 3:Mr(),ze(ht),ze(nt),Us();break;case 5:Bs(l);break;case 4:Mr();break;case 13:ze(Ne);break;case 19:ze(Ne);break;case 10:Ds(l.type._context);break;case 22:case 23:xa()}n=n.return}if(qe=e,Ve=e=Dn(e.current,null),Ze=St=t,Ue=0,Oo=null,ma=Gi=or=0,mt=Mo=null,tr!==null){for(t=0;t<tr.length;t++)if(n=tr[t],l=n.interleaved,l!==null){n.interleaved=null;var a=l.next,u=n.pending;if(u!==null){var h=u.next;u.next=a,l.next=h}n.pending=l}tr=null}return e}function ih(e,t){do{var n=Ve;try{if(Ms(),Ii.current=Hi,ji){for(var l=Oe.memoizedState;l!==null;){var a=l.queue;a!==null&&(a.pending=null),l=l.next}ji=!1}if(rr=0,Ke=He=Oe=null,Ao=!1,Po=0,pa.current=null,n===null||n.return===null){Ue=1,Oo=t,Ve=null;break}e:{var u=e,h=n.return,g=n,y=t;if(t=Ze,g.flags|=32768,y!==null&&typeof y=="object"&&typeof y.then=="function"){var $=y,L=g,N=L.tag;if((L.mode&1)===0&&(N===0||N===11||N===15)){var T=L.alternate;T?(L.updateQueue=T.updateQueue,L.memoizedState=T.memoizedState,L.lanes=T.lanes):(L.updateQueue=null,L.memoizedState=null)}var j=Pd(h);if(j!==null){j.flags&=-257,Td(j,h,g,u,t),j.mode&1&&Ad(u,$,t),t=j,y=$;var U=t.updateQueue;if(U===null){var W=new Set;W.add(y),t.updateQueue=W}else U.add(y);break e}else{if((t&1)===0){Ad(u,$,t),ka();break e}y=Error(i(426))}}else if(Le&&g.mode&1){var je=Pd(h);if(je!==null){(je.flags&65536)===0&&(je.flags|=256),Td(je,h,g,u,t),Ns(Dr(y,g));break e}}u=y=Dr(y,g),Ue!==4&&(Ue=2),Mo===null?Mo=[u]:Mo.push(u),u=h;do{switch(u.tag){case 3:u.flags|=65536,t&=-t,u.lanes|=t;var S=$d(u,y,t);ed(u,S);break e;case 1:g=y;var _=u.type,C=u.stateNode;if((u.flags&128)===0&&(typeof _.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(Ln===null||!Ln.has(C)))){u.flags|=65536,t&=-t,u.lanes|=t;var O=zd(u,g,t);ed(u,O);break e}}u=u.return}while(u!==null)}ah(n)}catch(K){t=K,Ve===n&&n!==null&&(Ve=n=n.return);continue}break}while(!0)}function lh(){var e=Yi.current;return Yi.current=Hi,e===null?Hi:e}function ka(){(Ue===0||Ue===3||Ue===2)&&(Ue=4),qe===null||(or&268435455)===0&&(Gi&268435455)===0||Mn(qe,Ze)}function nl(e,t){var n=he;he|=2;var l=lh();(qe!==e||Ze!==t)&&(gn=null,lr(e,t));do try{Rm();break}catch(a){ih(e,a)}while(!0);if(Ms(),he=n,Yi.current=l,Ve!==null)throw Error(i(261));return qe=null,Ze=0,Ue}function Rm(){for(;Ve!==null;)sh(Ve)}function Lm(){for(;Ve!==null&&!op();)sh(Ve)}function sh(e){var t=dh(e.alternate,e,St);e.memoizedProps=e.pendingProps,t===null?ah(e):Ve=t,pa.current=null}function ah(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Cm(n,t,St),n!==null){Ve=n;return}}else{if(n=Em(n,t),n!==null){n.flags&=32767,Ve=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ue=6,Ve=null;return}}if(t=t.sibling,t!==null){Ve=t;return}Ve=t=e}while(t!==null);Ue===0&&(Ue=5)}function sr(e,t,n){var l=we,a=Mt.transition;try{Mt.transition=null,we=1,Nm(e,t,n,l)}finally{Mt.transition=a,we=l}return null}function Nm(e,t,n,l){do Vr();while(Nn!==null);if((he&6)!==0)throw Error(i(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var u=n.lanes|n.childLanes;if(pp(e,u),e===qe&&(Ve=qe=null,Ze=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Zi||(Zi=!0,hh(li,function(){return Vr(),null})),u=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||u){u=Mt.transition,Mt.transition=null;var h=we;we=1;var g=he;he|=4,pa.current=null,zm(e,n),Zd(n,e),em(ks),fi=!!xs,ks=xs=null,e.current=n,Am(n),ip(),he=g,we=h,Mt.transition=u}else e.current=n;if(Zi&&(Zi=!1,Nn=e,Ji=a),u=e.pendingLanes,u===0&&(Ln=null),ap(n.stateNode),gt(e,Ie()),t!==null)for(l=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],l(a.value,{componentStack:a.stack,digest:a.digest});if(Xi)throw Xi=!1,e=va,va=null,e;return(Ji&1)!==0&&e.tag!==0&&Vr(),u=e.pendingLanes,(u&1)!==0?e===ya?Do++:(Do=0,ya=e):Do=0,An(),null}function Vr(){if(Nn!==null){var e=Gu(Ji),t=Mt.transition,n=we;try{if(Mt.transition=null,we=16>e?16:e,Nn===null)var l=!1;else{if(e=Nn,Nn=null,Ji=0,(he&6)!==0)throw Error(i(331));var a=he;for(he|=4,H=e.current;H!==null;){var u=H,h=u.child;if((H.flags&16)!==0){var g=u.deletions;if(g!==null){for(var y=0;y<g.length;y++){var $=g[y];for(H=$;H!==null;){var L=H;switch(L.tag){case 0:case 11:case 15:No(8,L,u)}var N=L.child;if(N!==null)N.return=L,H=N;else for(;H!==null;){L=H;var T=L.sibling,j=L.return;if(qd(L),L===$){H=null;break}if(T!==null){T.return=j,H=T;break}H=j}}}var U=u.alternate;if(U!==null){var W=U.child;if(W!==null){U.child=null;do{var je=W.sibling;W.sibling=null,W=je}while(W!==null)}}H=u}}if((u.subtreeFlags&2064)!==0&&h!==null)h.return=u,H=h;else e:for(;H!==null;){if(u=H,(u.flags&2048)!==0)switch(u.tag){case 0:case 11:case 15:No(9,u,u.return)}var S=u.sibling;if(S!==null){S.return=u.return,H=S;break e}H=u.return}}var _=e.current;for(H=_;H!==null;){h=H;var C=h.child;if((h.subtreeFlags&2064)!==0&&C!==null)C.return=h,H=C;else e:for(h=_;H!==null;){if(g=H,(g.flags&2048)!==0)try{switch(g.tag){case 0:case 11:case 15:Qi(9,g)}}catch(K){Me(g,g.return,K)}if(g===h){H=null;break e}var O=g.sibling;if(O!==null){O.return=g.return,H=O;break e}H=g.return}}if(he=a,An(),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot(si,e)}catch{}l=!0}return l}finally{we=n,Mt.transition=t}}return!1}function uh(e,t,n){t=Dr(n,t),t=$d(e,t,1),e=Tn(e,t,1),t=ut(),e!==null&&(lo(e,1,t),gt(e,t))}function Me(e,t,n){if(e.tag===3)uh(e,e,n);else for(;t!==null;){if(t.tag===3){uh(t,e,n);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ln===null||!Ln.has(l))){e=Dr(n,e),e=zd(t,e,1),t=Tn(t,e,1),e=ut(),t!==null&&(lo(t,1,e),gt(t,e));break}}t=t.return}}function Om(e,t,n){var l=e.pingCache;l!==null&&l.delete(t),t=ut(),e.pingedLanes|=e.suspendedLanes&n,qe===e&&(Ze&n)===n&&(Ue===4||Ue===3&&(Ze&130023424)===Ze&&500>Ie()-ga?lr(e,0):ma|=n),gt(e,t)}function ch(e,t){t===0&&((e.mode&1)===0?t=1:(t=ui,ui<<=1,(ui&130023424)===0&&(ui=4194304)));var n=ut();e=fn(e,t),e!==null&&(lo(e,t,n),gt(e,n))}function Mm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ch(e,n)}function Dm(e,t){var n=0;switch(e.tag){case 13:var l=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:l=e.stateNode;break;default:throw Error(i(314))}l!==null&&l.delete(t),ch(e,n)}var dh;dh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ht.current)pt=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return pt=!1,Sm(e,t,n);pt=(e.flags&131072)!==0}else pt=!1,Le&&(t.flags&1048576)!==0&&Uc(t,Ti,t.index);switch(t.lanes=0,t.tag){case 2:var l=t.type;Ki(e,t),e=t.pendingProps;var a=Ar(t,nt.current);Or(t,n),a=qs(null,t,l,e,a,n);var u=Qs();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ft(l)?(u=!0,zi(t)):u=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,js(t),a.updater=Ui,t.stateNode=a,a._reactInternals=t,ea(t,l,e,n),t=oa(null,t,l,!0,u,n)):(t.tag=0,Le&&u&&Ps(t),at(null,t,a,n),t=t.child),t;case 16:l=t.elementType;e:{switch(Ki(e,t),e=t.pendingProps,a=l._init,l=a(l._payload),t.type=l,a=t.tag=Im(l),e=Ut(l,e),a){case 0:t=ra(null,t,l,e,n);break e;case 1:t=Dd(null,t,l,e,n);break e;case 11:t=Rd(null,t,l,e,n);break e;case 14:t=Ld(null,t,l,Ut(l.type,e),n);break e}throw Error(i(306,l,""))}return t;case 0:return l=t.type,a=t.pendingProps,a=t.elementType===l?a:Ut(l,a),ra(e,t,l,a,n);case 1:return l=t.type,a=t.pendingProps,a=t.elementType===l?a:Ut(l,a),Dd(e,t,l,a,n);case 3:e:{if(Fd(t),e===null)throw Error(i(387));l=t.pendingProps,u=t.memoizedState,a=u.element,Jc(e,t),Di(t,l,null,n);var h=t.memoizedState;if(l=h.element,u.isDehydrated)if(u={element:l,isDehydrated:!1,cache:h.cache,pendingSuspenseBoundaries:h.pendingSuspenseBoundaries,transitions:h.transitions},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){a=Dr(Error(i(423)),t),t=Id(e,t,l,n,a);break e}else if(l!==a){a=Dr(Error(i(424)),t),t=Id(e,t,l,n,a);break e}else for(kt=En(t.stateNode.containerInfo.firstChild),xt=t,Le=!0,Ht=null,n=Xc(t,null,l,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Rr(),l===a){t=mn(e,t,n);break e}at(e,t,l,n)}t=t.child}return t;case 5:return nd(t),e===null&&Ls(t),l=t.type,a=t.pendingProps,u=e!==null?e.memoizedProps:null,h=a.children,Ss(l,a)?h=null:u!==null&&Ss(l,u)&&(t.flags|=32),Md(e,t),at(e,t,h,n),t.child;case 6:return e===null&&Ls(t),null;case 13:return jd(e,t,n);case 4:return Vs(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Lr(t,null,l,n):at(e,t,l,n),t.child;case 11:return l=t.type,a=t.pendingProps,a=t.elementType===l?a:Ut(l,a),Rd(e,t,l,a,n);case 7:return at(e,t,t.pendingProps,n),t.child;case 8:return at(e,t,t.pendingProps.children,n),t.child;case 12:return at(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(l=t.type._context,a=t.pendingProps,u=t.memoizedProps,h=a.value,ke(Ni,l._currentValue),l._currentValue=h,u!==null)if(Bt(u.value,h)){if(u.children===a.children&&!ht.current){t=mn(e,t,n);break e}}else for(u=t.child,u!==null&&(u.return=t);u!==null;){var g=u.dependencies;if(g!==null){h=u.child;for(var y=g.firstContext;y!==null;){if(y.context===l){if(u.tag===1){y=pn(-1,n&-n),y.tag=2;var $=u.updateQueue;if($!==null){$=$.shared;var L=$.pending;L===null?y.next=y:(y.next=L.next,L.next=y),$.pending=y}}u.lanes|=n,y=u.alternate,y!==null&&(y.lanes|=n),Fs(u.return,n,t),g.lanes|=n;break}y=y.next}}else if(u.tag===10)h=u.type===t.type?null:u.child;else if(u.tag===18){if(h=u.return,h===null)throw Error(i(341));h.lanes|=n,g=h.alternate,g!==null&&(g.lanes|=n),Fs(h,n,t),h=u.sibling}else h=u.child;if(h!==null)h.return=u;else for(h=u;h!==null;){if(h===t){h=null;break}if(u=h.sibling,u!==null){u.return=h.return,h=u;break}h=h.return}u=h}at(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,l=t.pendingProps.children,Or(t,n),a=Nt(a),l=l(a),t.flags|=1,at(e,t,l,n),t.child;case 14:return l=t.type,a=Ut(l,t.pendingProps),a=Ut(l.type,a),Ld(e,t,l,a,n);case 15:return Nd(e,t,t.type,t.pendingProps,n);case 17:return l=t.type,a=t.pendingProps,a=t.elementType===l?a:Ut(l,a),Ki(e,t),t.tag=1,ft(l)?(e=!0,zi(t)):e=!1,Or(t,n),Cd(t,l,a),ea(t,l,a,n),oa(null,t,l,!0,e,n);case 19:return Bd(e,t,n);case 22:return Od(e,t,n)}throw Error(i(156,t.tag))};function hh(e,t){return Wu(e,t)}function Fm(e,t,n,l){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dt(e,t,n,l){return new Fm(e,t,n,l)}function Sa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Im(e){if(typeof e=="function")return Sa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Te)return 11;if(e===q)return 14}return 2}function Dn(e,t){var n=e.alternate;return n===null?(n=Dt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function rl(e,t,n,l,a,u){var h=2;if(l=e,typeof e=="function")Sa(e)&&(h=1);else if(typeof e=="string")h=5;else e:switch(e){case de:return ar(n.children,a,u,t);case Ae:h=8,a|=8;break;case Fe:return e=Dt(12,n,t,a|2),e.elementType=Fe,e.lanes=u,e;case Ee:return e=Dt(13,n,t,a),e.elementType=Ee,e.lanes=u,e;case F:return e=Dt(19,n,t,a),e.elementType=F,e.lanes=u,e;case ee:return ol(n,a,u,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Pe:h=10;break e;case We:h=9;break e;case Te:h=11;break e;case q:h=14;break e;case le:h=16,l=null;break e}throw Error(i(130,e==null?e:typeof e,""))}return t=Dt(h,n,t,a),t.elementType=e,t.type=l,t.lanes=u,t}function ar(e,t,n,l){return e=Dt(7,e,l,t),e.lanes=n,e}function ol(e,t,n,l){return e=Dt(22,e,l,t),e.elementType=ee,e.lanes=n,e.stateNode={isHidden:!1},e}function Ca(e,t,n){return e=Dt(6,e,null,t),e.lanes=n,e}function Ea(e,t,n){return t=Dt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function jm(e,t,n,l,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jl(0),this.expirationTimes=Jl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jl(0),this.identifierPrefix=l,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function $a(e,t,n,l,a,u,h,g,y){return e=new jm(e,t,n,g,y),t===1?(t=1,u===!0&&(t|=8)):t=0,u=Dt(3,null,null,t),e.current=u,u.stateNode=e,u.memoizedState={element:l,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},js(u),e}function Vm(e,t,n){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ae,key:l==null?null:""+l,children:e,containerInfo:t,implementation:n}}function fh(e){if(!e)return zn;e=e._reactInternals;e:{if(Gn(e)!==e||e.tag!==1)throw Error(i(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ft(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(i(171))}if(e.tag===1){var n=e.type;if(ft(n))return Vc(e,n,t)}return t}function ph(e,t,n,l,a,u,h,g,y){return e=$a(n,l,!0,e,a,u,h,g,y),e.context=fh(null),n=e.current,l=ut(),a=On(n),u=pn(l,a),u.callback=t??null,Tn(n,u,a),e.current.lanes=a,lo(e,a,l),gt(e,l),e}function il(e,t,n,l){var a=t.current,u=ut(),h=On(a);return n=fh(n),t.context===null?t.context=n:t.pendingContext=n,t=pn(u,h),t.payload={element:e},l=l===void 0?null:l,l!==null&&(t.callback=l),e=Tn(a,t,h),e!==null&&(qt(e,a,h,u),Mi(e,a,h)),h}function ll(e){return e=e.current,e.child?(e.child.tag===5,e.child.stateNode):null}function mh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function za(e,t){mh(e,t),(e=e.alternate)&&mh(e,t)}function Bm(){return null}var gh=typeof reportError=="function"?reportError:function(e){console.error(e)};function Aa(e){this._internalRoot=e}sl.prototype.render=Aa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));il(e,t,null,null)},sl.prototype.unmount=Aa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ir(function(){il(null,e,null,null)}),t[un]=null}};function sl(e){this._internalRoot=e}sl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ju();e={blockedOn:null,target:e,priority:t};for(var n=0;n<kn.length&&t!==0&&t<kn[n].priority;n++);kn.splice(n,0,e),n===0&&nc(e)}};function Pa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function al(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function vh(){}function Hm(e,t,n,l,a){if(a){if(typeof l=="function"){var u=l;l=function(){var $=ll(h);u.call($)}}var h=ph(t,l,e,0,null,!1,!1,"",vh);return e._reactRootContainer=h,e[un]=h.current,_o(e.nodeType===8?e.parentNode:e),ir(),h}for(;a=e.lastChild;)e.removeChild(a);if(typeof l=="function"){var g=l;l=function(){var $=ll(y);g.call($)}}var y=$a(e,0,!1,null,null,!1,!1,"",vh);return e._reactRootContainer=y,e[un]=y.current,_o(e.nodeType===8?e.parentNode:e),ir(function(){il(t,y,n,l)}),y}function ul(e,t,n,l,a){var u=n._reactRootContainer;if(u){var h=u;if(typeof a=="function"){var g=a;a=function(){var y=ll(h);g.call(y)}}il(t,h,e,a)}else h=Hm(n,t,e,a,l);return ll(h)}Xu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=io(t.pendingLanes);n!==0&&(es(t,n|1),gt(t,Ie()),(he&6)===0&&(jr=Ie()+500,An()))}break;case 13:ir(function(){var l=fn(e,1);if(l!==null){var a=ut();qt(l,e,1,a)}}),za(e,1)}},ts=function(e){if(e.tag===13){var t=fn(e,134217728);if(t!==null){var n=ut();qt(t,e,134217728,n)}za(e,134217728)}},Zu=function(e){if(e.tag===13){var t=On(e),n=fn(e,t);if(n!==null){var l=ut();qt(n,e,t,l)}za(e,t)}},Ju=function(){return we},ec=function(e,t){var n=we;try{return we=e,t()}finally{we=n}},ql=function(e,t,n){switch(t){case"input":if(Il(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var l=n[t];if(l!==e&&l.form===e.form){var a=Ei(l);if(!a)throw Error(i(90));Su(l),Il(l,a)}}}break;case"textarea":Au(e,n);break;case"select":t=n.value,t!=null&&vr(e,!!n.multiple,t,!1)}},Fu=_a,Iu=ir;var Um={usingClientEntryPoint:!1,Events:[So,$r,Ei,Mu,Du,_a]},Fo={findFiberByHostInstance:Xn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Wm={bundleType:Fo.bundleType,version:Fo.version,rendererPackageName:Fo.rendererPackageName,rendererConfig:Fo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:re.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Hu(e),e===null?null:e.stateNode},findFiberByHostInstance:Fo.findFiberByHostInstance||Bm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cl.isDisabled&&cl.supportsFiber)try{si=cl.inject(Wm),en=cl}catch{}}return vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Um,vt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pa(t))throw Error(i(200));return Vm(e,t,null,n)},vt.createRoot=function(e,t){if(!Pa(e))throw Error(i(299));var n=!1,l="",a=gh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=$a(e,1,!1,null,null,n,!1,l,a),e[un]=t.current,_o(e.nodeType===8?e.parentNode:e),new Aa(t)},vt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=Hu(t),e=e===null?null:e.stateNode,e},vt.flushSync=function(e){return ir(e)},vt.hydrate=function(e,t,n){if(!al(t))throw Error(i(200));return ul(null,e,t,!0,n)},vt.hydrateRoot=function(e,t,n){if(!Pa(e))throw Error(i(405));var l=n!=null&&n.hydratedSources||null,a=!1,u="",h=gh;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(u=n.identifierPrefix),n.onRecoverableError!==void 0&&(h=n.onRecoverableError)),t=ph(t,null,e,1,n??null,a,!1,u,h),e[un]=t.current,_o(e),l)for(e=0;e<l.length;e++)n=l[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new sl(t)},vt.render=function(e,t,n){if(!al(t))throw Error(i(200));return ul(null,e,t,!1,n)},vt.unmountComponentAtNode=function(e){if(!al(e))throw Error(i(40));return e._reactRootContainer?(ir(function(){ul(null,null,e,!1,function(){e._reactRootContainer=null,e[un]=null})}),!0):!1},vt.unstable_batchedUpdates=_a,vt.unstable_renderSubtreeIntoContainer=function(e,t,n,l){if(!al(n))throw Error(i(200));if(e==null||e._reactInternals===void 0)throw Error(i(38));return ul(e,t,n,!1,l)},vt.version="18.3.1-next-f1338f8080-20240426",vt}var Ch;function eg(){if(Ch)return La.exports;Ch=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(o){console.error(o)}}return r(),La.exports=Jm(),La.exports}var Eh;function tg(){if(Eh)return dl;Eh=1;var r=eg();return dl.createRoot=r.createRoot,dl.hydrateRoot=r.hydrateRoot,dl}var ng=tg();const rg=pf(ng);function og(r){const o={position:"sticky",top:0,zIndex:100},i=zt.useRef(null);return zt.useEffect(()=>{const c=i.current.getContext("2d");ig(c,r.colorOutRgb)}),M.jsx("canvas",{ref:i,height:"100",width:"500",style:o})}function ig(r,o){r.clearRect(0,0,500,100),r.beginPath(),r.rect(50,30,400,40),r.stroke();for(let i=0;i<o.length;i++){const s="rgb("+o[i][0]+","+o[i][1]+","+o[i][2]+")",c=50+i*400/o.length;lg(r,s,c,30,400/o.length,40)}}function lg(r,o,i,s,c,d){r.fillStyle=o,r.fillRect(i,s,c,d)}const yl=globalThis,ru=yl.ShadowRoot&&(yl.ShadyCSS===void 0||yl.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ou=Symbol(),$h=new WeakMap;let gf=class{constructor(o,i,s){if(this._$cssResult$=!0,s!==ou)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=o,this.t=i}get styleSheet(){let o=this.o;const i=this.t;if(ru&&o===void 0){const s=i!==void 0&&i.length===1;s&&(o=$h.get(i)),o===void 0&&((this.o=o=new CSSStyleSheet).replaceSync(this.cssText),s&&$h.set(i,o))}return o}toString(){return this.cssText}};const sg=r=>new gf(typeof r=="string"?r:r+"",void 0,ou),lt=(r,...o)=>{const i=r.length===1?r[0]:o.reduce((s,c,d)=>s+(f=>{if(f._$cssResult$===!0)return f.cssText;if(typeof f=="number")return f;throw Error("Value passed to 'css' function must be a 'css' function result: "+f+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(c)+r[d+1],r[0]);return new gf(i,r,ou)},ag=(r,o)=>{if(ru)r.adoptedStyleSheets=o.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(const i of o){const s=document.createElement("style"),c=yl.litNonce;c!==void 0&&s.setAttribute("nonce",c),s.textContent=i.cssText,r.appendChild(s)}},zh=ru?r=>r:r=>r instanceof CSSStyleSheet?(o=>{let i="";for(const s of o.cssRules)i+=s.cssText;return sg(i)})(r):r;const{is:ug,defineProperty:cg,getOwnPropertyDescriptor:dg,getOwnPropertyNames:hg,getOwnPropertySymbols:fg,getPrototypeOf:pg}=Object,zl=globalThis,Ah=zl.trustedTypes,mg=Ah?Ah.emptyScript:"",gg=zl.reactiveElementPolyfillSupport,qo=(r,o)=>r,Kr={toAttribute(r,o){switch(o){case Boolean:r=r?mg:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,o){let i=r;switch(o){case Boolean:i=r!==null;break;case Number:i=r===null?null:Number(r);break;case Object:case Array:try{i=JSON.parse(r)}catch{i=null}}return i}},iu=(r,o)=>!ug(r,o),Ph={attribute:!0,type:String,converter:Kr,reflect:!1,useDefault:!1,hasChanged:iu};Symbol.metadata??=Symbol("metadata"),zl.litPropertyMetadata??=new WeakMap;let Br=class extends HTMLElement{static addInitializer(o){this._$Ei(),(this.l??=[]).push(o)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(o,i=Ph){if(i.state&&(i.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(o)&&((i=Object.create(i)).wrapped=!0),this.elementProperties.set(o,i),!i.noAccessor){const s=Symbol(),c=this.getPropertyDescriptor(o,s,i);c!==void 0&&cg(this.prototype,o,c)}}static getPropertyDescriptor(o,i,s){const{get:c,set:d}=dg(this.prototype,o)??{get(){return this[i]},set(f){this[i]=f}};return{get:c,set(f){const p=c?.call(this);d?.call(this,f),this.requestUpdate(o,p,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(o){return this.elementProperties.get(o)??Ph}static _$Ei(){if(this.hasOwnProperty(qo("elementProperties")))return;const o=pg(this);o.finalize(),o.l!==void 0&&(this.l=[...o.l]),this.elementProperties=new Map(o.elementProperties)}static finalize(){if(this.hasOwnProperty(qo("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(qo("properties"))){const i=this.properties,s=[...hg(i),...fg(i)];for(const c of s)this.createProperty(c,i[c])}const o=this[Symbol.metadata];if(o!==null){const i=litPropertyMetadata.get(o);if(i!==void 0)for(const[s,c]of i)this.elementProperties.set(s,c)}this._$Eh=new Map;for(const[i,s]of this.elementProperties){const c=this._$Eu(i,s);c!==void 0&&this._$Eh.set(c,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(o){const i=[];if(Array.isArray(o)){const s=new Set(o.flat(1/0).reverse());for(const c of s)i.unshift(zh(c))}else o!==void 0&&i.push(zh(o));return i}static _$Eu(o,i){const s=i.attribute;return s===!1?void 0:typeof s=="string"?s:typeof o=="string"?o.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(o=>this.enableUpdating=o),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(o=>o(this))}addController(o){(this._$EO??=new Set).add(o),this.renderRoot!==void 0&&this.isConnected&&o.hostConnected?.()}removeController(o){this._$EO?.delete(o)}_$E_(){const o=new Map,i=this.constructor.elementProperties;for(const s of i.keys())this.hasOwnProperty(s)&&(o.set(s,this[s]),delete this[s]);o.size>0&&(this._$Ep=o)}createRenderRoot(){const o=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ag(o,this.constructor.elementStyles),o}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(o=>o.hostConnected?.())}enableUpdating(o){}disconnectedCallback(){this._$EO?.forEach(o=>o.hostDisconnected?.())}attributeChangedCallback(o,i,s){this._$AK(o,s)}_$ET(o,i){const s=this.constructor.elementProperties.get(o),c=this.constructor._$Eu(o,s);if(c!==void 0&&s.reflect===!0){const d=(s.converter?.toAttribute!==void 0?s.converter:Kr).toAttribute(i,s.type);this._$Em=o,d==null?this.removeAttribute(c):this.setAttribute(c,d),this._$Em=null}}_$AK(o,i){const s=this.constructor,c=s._$Eh.get(o);if(c!==void 0&&this._$Em!==c){const d=s.getPropertyOptions(c),f=typeof d.converter=="function"?{fromAttribute:d.converter}:d.converter?.fromAttribute!==void 0?d.converter:Kr;this._$Em=c;const p=f.fromAttribute(i,d.type);this[c]=p??this._$Ej?.get(c)??p,this._$Em=null}}requestUpdate(o,i,s,c=!1,d){if(o!==void 0){const f=this.constructor;if(c===!1&&(d=this[o]),s??=f.getPropertyOptions(o),!((s.hasChanged??iu)(d,i)||s.useDefault&&s.reflect&&d===this._$Ej?.get(o)&&!this.hasAttribute(f._$Eu(o,s))))return;this.C(o,i,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(o,i,{useDefault:s,reflect:c,wrapped:d},f){s&&!(this._$Ej??=new Map).has(o)&&(this._$Ej.set(o,f??i??this[o]),d!==!0||f!==void 0)||(this._$AL.has(o)||(this.hasUpdated||s||(i=void 0),this._$AL.set(o,i)),c===!0&&this._$Em!==o&&(this._$Eq??=new Set).add(o))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(i){Promise.reject(i)}const o=this.scheduleUpdate();return o!=null&&await o,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[c,d]of this._$Ep)this[c]=d;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[c,d]of s){const{wrapped:f}=d,p=this[c];f!==!0||this._$AL.has(c)||p===void 0||this.C(c,void 0,d,p)}}let o=!1;const i=this._$AL;try{o=this.shouldUpdate(i),o?(this.willUpdate(i),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(i)):this._$EM()}catch(s){throw o=!1,this._$EM(),s}o&&this._$AE(i)}willUpdate(o){}_$AE(o){this._$EO?.forEach(i=>i.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(o)),this.updated(o)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(o){return!0}update(o){this._$Eq&&=this._$Eq.forEach(i=>this._$ET(i,this[i])),this._$EM()}updated(o){}firstUpdated(o){}};Br.elementStyles=[],Br.shadowRootOptions={mode:"open"},Br[qo("elementProperties")]=new Map,Br[qo("finalized")]=new Map,gg?.({ReactiveElement:Br}),(zl.reactiveElementVersions??=[]).push("2.1.2");const lu=globalThis,Th=r=>r,xl=lu.trustedTypes,Rh=xl?xl.createPolicy("lit-html",{createHTML:r=>r}):void 0,vf="$lit$",Vn=`lit$${Math.random().toFixed(9).slice(2)}$`,yf="?"+Vn,vg=`<${yf}>`,fr=document,Qo=()=>fr.createComment(""),Yo=r=>r===null||typeof r!="object"&&typeof r!="function",su=Array.isArray,yg=r=>su(r)||typeof r?.[Symbol.iterator]=="function",Ma=`[ 	
\f\r]`,jo=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Lh=/-->/g,Nh=/>/g,ur=RegExp(`>|${Ma}(?:([^\\s"'>=/]+)(${Ma}*=${Ma}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Oh=/'/g,Mh=/"/g,bf=/^(?:script|style|textarea|title)$/i,bg=r=>(o,...i)=>({_$litType$:r,strings:o,values:i}),Se=bg(1),jt=Symbol.for("lit-noChange"),Be=Symbol.for("lit-nothing"),Dh=new WeakMap,dr=fr.createTreeWalker(fr,129);function wf(r,o){if(!su(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Rh!==void 0?Rh.createHTML(o):o}const wg=(r,o)=>{const i=r.length-1,s=[];let c,d=o===2?"<svg>":o===3?"<math>":"",f=jo;for(let p=0;p<i;p++){const m=r[p];let b,v,k=-1,A=0;for(;A<m.length&&(f.lastIndex=A,v=f.exec(m),v!==null);)A=f.lastIndex,f===jo?v[1]==="!--"?f=Lh:v[1]!==void 0?f=Nh:v[2]!==void 0?(bf.test(v[2])&&(c=RegExp("</"+v[2],"g")),f=ur):v[3]!==void 0&&(f=ur):f===ur?v[0]===">"?(f=c??jo,k=-1):v[1]===void 0?k=-2:(k=f.lastIndex-v[2].length,b=v[1],f=v[3]===void 0?ur:v[3]==='"'?Mh:Oh):f===Mh||f===Oh?f=ur:f===Lh||f===Nh?f=jo:(f=ur,c=void 0);const z=f===ur&&r[p+1].startsWith("/>")?" ":"";d+=f===jo?m+vg:k>=0?(s.push(b),m.slice(0,k)+vf+m.slice(k)+Vn+z):m+Vn+(k===-2?p:z)}return[wf(r,d+(r[i]||"<?>")+(o===2?"</svg>":o===3?"</math>":"")),s]};class Go{constructor({strings:o,_$litType$:i},s){let c;this.parts=[];let d=0,f=0;const p=o.length-1,m=this.parts,[b,v]=wg(o,i);if(this.el=Go.createElement(b,s),dr.currentNode=this.el.content,i===2||i===3){const k=this.el.content.firstChild;k.replaceWith(...k.childNodes)}for(;(c=dr.nextNode())!==null&&m.length<p;){if(c.nodeType===1){if(c.hasAttributes())for(const k of c.getAttributeNames())if(k.endsWith(vf)){const A=v[f++],z=c.getAttribute(k).split(Vn),P=/([.?@])?(.*)/.exec(A);m.push({type:1,index:d,name:P[2],strings:z,ctor:P[1]==="."?xg:P[1]==="?"?kg:P[1]==="@"?Sg:Al}),c.removeAttribute(k)}else k.startsWith(Vn)&&(m.push({type:6,index:d}),c.removeAttribute(k));if(bf.test(c.tagName)){const k=c.textContent.split(Vn),A=k.length-1;if(A>0){c.textContent=xl?xl.emptyScript:"";for(let z=0;z<A;z++)c.append(k[z],Qo()),dr.nextNode(),m.push({type:2,index:++d});c.append(k[A],Qo())}}}else if(c.nodeType===8)if(c.data===yf)m.push({type:2,index:d});else{let k=-1;for(;(k=c.data.indexOf(Vn,k+1))!==-1;)m.push({type:7,index:d}),k+=Vn.length-1}d++}}static createElement(o,i){const s=fr.createElement("template");return s.innerHTML=o,s}}function qr(r,o,i=r,s){if(o===jt)return o;let c=s!==void 0?i._$Co?.[s]:i._$Cl;const d=Yo(o)?void 0:o._$litDirective$;return c?.constructor!==d&&(c?._$AO?.(!1),d===void 0?c=void 0:(c=new d(r),c._$AT(r,i,s)),s!==void 0?(i._$Co??=[])[s]=c:i._$Cl=c),c!==void 0&&(o=qr(r,c._$AS(r,o.values),c,s)),o}class _g{constructor(o,i){this._$AV=[],this._$AN=void 0,this._$AD=o,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(o){const{el:{content:i},parts:s}=this._$AD,c=(o?.creationScope??fr).importNode(i,!0);dr.currentNode=c;let d=dr.nextNode(),f=0,p=0,m=s[0];for(;m!==void 0;){if(f===m.index){let b;m.type===2?b=new Zo(d,d.nextSibling,this,o):m.type===1?b=new m.ctor(d,m.name,m.strings,this,o):m.type===6&&(b=new Cg(d,this,o)),this._$AV.push(b),m=s[++p]}f!==m?.index&&(d=dr.nextNode(),f++)}return dr.currentNode=fr,c}p(o){let i=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(o,s,i),i+=s.strings.length-2):s._$AI(o[i])),i++}}class Zo{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(o,i,s,c){this.type=2,this._$AH=Be,this._$AN=void 0,this._$AA=o,this._$AB=i,this._$AM=s,this.options=c,this._$Cv=c?.isConnected??!0}get parentNode(){let o=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&o?.nodeType===11&&(o=i.parentNode),o}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(o,i=this){o=qr(this,o,i),Yo(o)?o===Be||o==null||o===""?(this._$AH!==Be&&this._$AR(),this._$AH=Be):o!==this._$AH&&o!==jt&&this._(o):o._$litType$!==void 0?this.$(o):o.nodeType!==void 0?this.T(o):yg(o)?this.k(o):this._(o)}O(o){return this._$AA.parentNode.insertBefore(o,this._$AB)}T(o){this._$AH!==o&&(this._$AR(),this._$AH=this.O(o))}_(o){this._$AH!==Be&&Yo(this._$AH)?this._$AA.nextSibling.data=o:this.T(fr.createTextNode(o)),this._$AH=o}$(o){const{values:i,_$litType$:s}=o,c=typeof s=="number"?this._$AC(o):(s.el===void 0&&(s.el=Go.createElement(wf(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===c)this._$AH.p(i);else{const d=new _g(c,this),f=d.u(this.options);d.p(i),this.T(f),this._$AH=d}}_$AC(o){let i=Dh.get(o.strings);return i===void 0&&Dh.set(o.strings,i=new Go(o)),i}k(o){su(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,c=0;for(const d of o)c===i.length?i.push(s=new Zo(this.O(Qo()),this.O(Qo()),this,this.options)):s=i[c],s._$AI(d),c++;c<i.length&&(this._$AR(s&&s._$AB.nextSibling,c),i.length=c)}_$AR(o=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);o!==this._$AB;){const s=Th(o).nextSibling;Th(o).remove(),o=s}}setConnected(o){this._$AM===void 0&&(this._$Cv=o,this._$AP?.(o))}}class Al{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(o,i,s,c,d){this.type=1,this._$AH=Be,this._$AN=void 0,this.element=o,this.name=i,this._$AM=c,this.options=d,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=Be}_$AI(o,i=this,s,c){const d=this.strings;let f=!1;if(d===void 0)o=qr(this,o,i,0),f=!Yo(o)||o!==this._$AH&&o!==jt,f&&(this._$AH=o);else{const p=o;let m,b;for(o=d[0],m=0;m<d.length-1;m++)b=qr(this,p[s+m],i,m),b===jt&&(b=this._$AH[m]),f||=!Yo(b)||b!==this._$AH[m],b===Be?o=Be:o!==Be&&(o+=(b??"")+d[m+1]),this._$AH[m]=b}f&&!c&&this.j(o)}j(o){o===Be?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,o??"")}}class xg extends Al{constructor(){super(...arguments),this.type=3}j(o){this.element[this.name]=o===Be?void 0:o}}class kg extends Al{constructor(){super(...arguments),this.type=4}j(o){this.element.toggleAttribute(this.name,!!o&&o!==Be)}}class Sg extends Al{constructor(o,i,s,c,d){super(o,i,s,c,d),this.type=5}_$AI(o,i=this){if((o=qr(this,o,i,0)??Be)===jt)return;const s=this._$AH,c=o===Be&&s!==Be||o.capture!==s.capture||o.once!==s.once||o.passive!==s.passive,d=o!==Be&&(s===Be||c);c&&this.element.removeEventListener(this.name,this,s),d&&this.element.addEventListener(this.name,this,o),this._$AH=o}handleEvent(o){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,o):this._$AH.handleEvent(o)}}class Cg{constructor(o,i,s){this.element=o,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(o){qr(this,o)}}const Eg=lu.litHtmlPolyfillSupport;Eg?.(Go,Zo),(lu.litHtmlVersions??=[]).push("3.3.2");const $g=(r,o,i)=>{const s=i?.renderBefore??o;let c=s._$litPart$;if(c===void 0){const d=i?.renderBefore??null;s._$litPart$=c=new Zo(o.insertBefore(Qo(),d),d,void 0,i??{})}return c._$AI(r),c};const au=globalThis;let Ur=class extends Br{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const o=super.createRenderRoot();return this.renderOptions.renderBefore??=o.firstChild,o}update(o){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(o),this._$Do=$g(i,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return jt}};Ur._$litElement$=!0,Ur.finalized=!0,au.litElementHydrateSupport?.({LitElement:Ur});const zg=au.litElementPolyfillSupport;zg?.({LitElement:Ur});(au.litElementVersions??=[]).push("4.2.2");var Ag=lt`
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
`;const Ka=new Set,Hr=new Map;let cr,uu="ltr",cu="en";const _f=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(_f){const r=new MutationObserver(kf);uu=document.documentElement.dir||"ltr",cu=document.documentElement.lang||navigator.language,r.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function xf(...r){r.map(o=>{const i=o.$code.toLowerCase();Hr.has(i)?Hr.set(i,Object.assign(Object.assign({},Hr.get(i)),o)):Hr.set(i,o),cr||(cr=o)}),kf()}function kf(){_f&&(uu=document.documentElement.dir||"ltr",cu=document.documentElement.lang||navigator.language),[...Ka.keys()].map(r=>{typeof r.requestUpdate=="function"&&r.requestUpdate()})}let Sf=class{constructor(o){this.host=o,this.host.addController(this)}hostConnected(){Ka.add(this.host)}hostDisconnected(){Ka.delete(this.host)}dir(){return`${this.host.dir||uu}`.toLowerCase()}lang(){return`${this.host.lang||cu}`.toLowerCase()}getTranslationData(o){var i,s;const c=new Intl.Locale(o.replace(/_/g,"-")),d=c?.language.toLowerCase(),f=(s=(i=c?.region)===null||i===void 0?void 0:i.toLowerCase())!==null&&s!==void 0?s:"",p=Hr.get(`${d}-${f}`),m=Hr.get(d);return{locale:c,language:d,region:f,primary:p,secondary:m}}exists(o,i){var s;const{primary:c,secondary:d}=this.getTranslationData((s=i.lang)!==null&&s!==void 0?s:this.lang());return i=Object.assign({includeFallback:!1},i),!!(c&&c[o]||d&&d[o]||i.includeFallback&&cr&&cr[o])}term(o,...i){const{primary:s,secondary:c}=this.getTranslationData(this.lang());let d;if(s&&s[o])d=s[o];else if(c&&c[o])d=c[o];else if(cr&&cr[o])d=cr[o];else return console.error(`No translation found for: ${String(o)}`),String(o);return typeof d=="function"?d(...i):d}date(o,i){return o=new Date(o),new Intl.DateTimeFormat(this.lang(),i).format(o)}number(o,i){return o=Number(o),isNaN(o)?"":new Intl.NumberFormat(this.lang(),i).format(o)}relativeTime(o,i,s){return new Intl.RelativeTimeFormat(this.lang(),s).format(o,i)}};var Cf={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(r,o)=>`Go to slide ${r} of ${o}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:r=>r===0?"No options selected":r===1?"1 option selected":`${r} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:r=>`Slide ${r}`,toggleColorFormat:"Toggle color format"};xf(Cf);var Pg=Cf,Qn=class extends Sf{};xf(Pg);var Pt=lt`
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
`,Ef=Object.defineProperty,Tg=Object.defineProperties,Rg=Object.getOwnPropertyDescriptor,Lg=Object.getOwnPropertyDescriptors,Fh=Object.getOwnPropertySymbols,Ng=Object.prototype.hasOwnProperty,Og=Object.prototype.propertyIsEnumerable,Da=(r,o)=>(o=Symbol[r])?o:Symbol.for("Symbol."+r),du=r=>{throw TypeError(r)},Ih=(r,o,i)=>o in r?Ef(r,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[o]=i,mr=(r,o)=>{for(var i in o||(o={}))Ng.call(o,i)&&Ih(r,i,o[i]);if(Fh)for(var i of Fh(o))Og.call(o,i)&&Ih(r,i,o[i]);return r},Pl=(r,o)=>Tg(r,Lg(o)),w=(r,o,i,s)=>{for(var c=s>1?void 0:s?Rg(o,i):o,d=r.length-1,f;d>=0;d--)(f=r[d])&&(c=(s?f(o,i,c):f(c))||c);return s&&c&&Ef(o,i,c),c},$f=(r,o,i)=>o.has(r)||du("Cannot "+i),Mg=(r,o,i)=>($f(r,o,"read from private field"),o.get(r)),Dg=(r,o,i)=>o.has(r)?du("Cannot add the same private member more than once"):o instanceof WeakSet?o.add(r):o.set(r,i),Fg=(r,o,i,s)=>($f(r,o,"write to private field"),o.set(r,i),i),Ig=function(r,o){this[0]=r,this[1]=o},jg=r=>{var o=r[Da("asyncIterator")],i=!1,s,c={};return o==null?(o=r[Da("iterator")](),s=d=>c[d]=f=>o[d](f)):(o=o.call(r),s=d=>c[d]=f=>{if(i){if(i=!1,d==="throw")throw f;return f}return i=!0,{done:!1,value:new Ig(new Promise(p=>{var m=o[d](f);m instanceof Object||du("Object expected"),p(m)}),1)}}),c[Da("iterator")]=()=>c,s("next"),"throw"in o?s("throw"):c.throw=d=>{throw d},"return"in o&&s("return"),c};const Vg={attribute:!0,type:String,converter:Kr,reflect:!1,hasChanged:iu},Bg=(r=Vg,o,i)=>{const{kind:s,metadata:c}=i;let d=globalThis.litPropertyMetadata.get(c);if(d===void 0&&globalThis.litPropertyMetadata.set(c,d=new Map),s==="setter"&&((r=Object.create(r)).wrapped=!0),d.set(i.name,r),s==="accessor"){const{name:f}=i;return{set(p){const m=o.get.call(this);o.set.call(this,p),this.requestUpdate(f,m,r,!0,p)},init(p){return p!==void 0&&this.C(f,void 0,r,p),p}}}if(s==="setter"){const{name:f}=i;return function(p){const m=this[f];o.call(this,p),this.requestUpdate(f,m,r,!0,p)}}throw Error("Unsupported decorator location: "+s)};function E(r){return(o,i)=>typeof i=="object"?Bg(r,o,i):((s,c,d)=>{const f=c.hasOwnProperty(d);return c.constructor.createProperty(d,s),f?Object.getOwnPropertyDescriptor(c,d):void 0})(r,o,i)}function Ye(r){return E({...r,state:!0,attribute:!1})}function Hg(r){return(o,i)=>{const s=typeof o=="function"?o:o[i];Object.assign(s,r)}}const Ug=(r,o,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&typeof o!="object"&&Object.defineProperty(r,o,i),i);function Ce(r,o){return(i,s,c)=>{const d=f=>f.renderRoot?.querySelector(r)??null;return Ug(i,s,{get(){return d(this)}})}}var bl,et=class extends Ur{constructor(){super(),Dg(this,bl,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([o,i])=>{this.constructor.define(o,i)})}emit(o,i){const s=new CustomEvent(o,mr({bubbles:!0,cancelable:!1,composed:!0,detail:{}},i));return this.dispatchEvent(s),s}static define(o,i=this,s={}){const c=customElements.get(o);if(!c){try{customElements.define(o,i,s)}catch{customElements.define(o,class extends i{},s)}return}let d=" (unknown version)",f=d;"version"in i&&i.version&&(d=" v"+i.version),"version"in c&&c.version&&(f=" v"+c.version),!(d&&f&&d===f)&&console.warn(`Attempted to register <${o}>${d}, but <${o}>${f} has already been registered.`)}attributeChangedCallback(o,i,s){Mg(this,bl)||(this.constructor.elementProperties.forEach((c,d)=>{c.reflect&&this[d]!=null&&this.initialReflectedProperties.set(d,this[d])}),Fg(this,bl,!0)),super.attributeChangedCallback(o,i,s)}willUpdate(o){super.willUpdate(o),this.initialReflectedProperties.forEach((i,s)=>{o.has(s)&&this[s]==null&&(this[s]=i)})}};bl=new WeakMap;et.version="2.20.1";et.dependencies={};w([E()],et.prototype,"dir",2);w([E()],et.prototype,"lang",2);var zf=class extends et{constructor(){super(...arguments),this.localize=new Qn(this)}render(){return Se`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};zf.styles=[Pt,Ag];var Vo=new WeakMap,Bo=new WeakMap,Ho=new WeakMap,Fa=new WeakSet,hl=new WeakMap,Tl=class{constructor(r,o){this.handleFormData=i=>{const s=this.options.disabled(this.host),c=this.options.name(this.host),d=this.options.value(this.host),f=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!s&&!f&&typeof c=="string"&&c.length>0&&typeof d<"u"&&(Array.isArray(d)?d.forEach(p=>{i.formData.append(c,p.toString())}):i.formData.append(c,d.toString()))},this.handleFormSubmit=i=>{var s;const c=this.options.disabled(this.host),d=this.options.reportValidity;this.form&&!this.form.noValidate&&((s=Vo.get(this.form))==null||s.forEach(f=>{this.setUserInteracted(f,!0)})),this.form&&!this.form.noValidate&&!c&&!d(this.host)&&(i.preventDefault(),i.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),hl.set(this.host,[])},this.handleInteraction=i=>{const s=hl.get(this.host);s.includes(i.type)||s.push(i.type),s.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const i=this.form.querySelectorAll("*");for(const s of i)if(typeof s.checkValidity=="function"&&!s.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const i=this.form.querySelectorAll("*");for(const s of i)if(typeof s.reportValidity=="function"&&!s.reportValidity())return!1}return!0},(this.host=r).addController(this),this.options=mr({form:i=>{const s=i.form;if(s){const d=i.getRootNode().querySelector(`#${s}`);if(d)return d}return i.closest("form")},name:i=>i.name,value:i=>i.value,defaultValue:i=>i.defaultValue,disabled:i=>{var s;return(s=i.disabled)!=null?s:!1},reportValidity:i=>typeof i.reportValidity=="function"?i.reportValidity():!0,checkValidity:i=>typeof i.checkValidity=="function"?i.checkValidity():!0,setValue:(i,s)=>i.value=s,assumeInteractionOn:["sl-input"]},o)}hostConnected(){const r=this.options.form(this.host);r&&this.attachForm(r),hl.set(this.host,[]),this.options.assumeInteractionOn.forEach(o=>{this.host.addEventListener(o,this.handleInteraction)})}hostDisconnected(){this.detachForm(),hl.delete(this.host),this.options.assumeInteractionOn.forEach(r=>{this.host.removeEventListener(r,this.handleInteraction)})}hostUpdated(){const r=this.options.form(this.host);r||this.detachForm(),r&&this.form!==r&&(this.detachForm(),this.attachForm(r)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(r){r?(this.form=r,Vo.has(this.form)?Vo.get(this.form).add(this.host):Vo.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Bo.has(this.form)||(Bo.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),Ho.has(this.form)||(Ho.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const r=Vo.get(this.form);r&&(r.delete(this.host),r.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Bo.has(this.form)&&(this.form.reportValidity=Bo.get(this.form),Bo.delete(this.form)),Ho.has(this.form)&&(this.form.checkValidity=Ho.get(this.form),Ho.delete(this.form)),this.form=void 0))}setUserInteracted(r,o){o?Fa.add(r):Fa.delete(r),r.requestUpdate()}doAction(r,o){if(this.form){const i=document.createElement("button");i.type=r,i.style.position="absolute",i.style.width="0",i.style.height="0",i.style.clipPath="inset(50%)",i.style.overflow="hidden",i.style.whiteSpace="nowrap",o&&(i.name=o.name,i.value=o.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(s=>{o.hasAttribute(s)&&i.setAttribute(s,o.getAttribute(s))})),this.form.append(i),i.click(),i.remove()}}getForm(){var r;return(r=this.form)!=null?r:null}reset(r){this.doAction("reset",r)}submit(r){this.doAction("submit",r)}setValidity(r){const o=this.host,i=!!Fa.has(o),s=!!o.required;o.toggleAttribute("data-required",s),o.toggleAttribute("data-optional",!s),o.toggleAttribute("data-invalid",!r),o.toggleAttribute("data-valid",r),o.toggleAttribute("data-user-invalid",!r&&i),o.toggleAttribute("data-user-valid",r&&i)}updateValidity(){const r=this.host;this.setValidity(r.validity.valid)}emitInvalidEvent(r){const o=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});r||o.preventDefault(),this.host.dispatchEvent(o)||r?.preventDefault()}},hu=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(Pl(mr({},hu),{valid:!1,valueMissing:!0}));Object.freeze(Pl(mr({},hu),{valid:!1,customError:!0}));var Wg=lt`
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
    border-color: var(--sl-input-border-color);
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
    border-color: var(--sl-input-border-color);
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
`,Rl=class{constructor(r,...o){this.slotNames=[],this.handleSlotChange=i=>{const s=i.target;(this.slotNames.includes("[default]")&&!s.name||s.name&&this.slotNames.includes(s.name))&&this.host.requestUpdate()},(this.host=r).addController(this),this.slotNames=o}hasDefaultSlot(){return[...this.host.childNodes].some(r=>{if(r.nodeType===r.TEXT_NODE&&r.textContent.trim()!=="")return!0;if(r.nodeType===r.ELEMENT_NODE){const o=r;if(o.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!o.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(r){return this.host.querySelector(`:scope > [slot="${r}"]`)!==null}test(r){return r==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(r)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}},qa="";function kl(r){qa=r}function Kg(r=""){if(!qa){const o=[...document.getElementsByTagName("script")],i=o.find(s=>s.hasAttribute("data-shoelace"));if(i)kl(i.getAttribute("data-shoelace"));else{const s=o.find(d=>/shoelace(\.min)?\.js($|\?)/.test(d.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(d.src));let c="";s&&(c=s.getAttribute("src")),kl(c.split("/").slice(0,-1).join("/"))}}return qa.replace(/\/$/,"")+(r?`/${r.replace(/^\//,"")}`:"")}var qg={name:"default",resolver:r=>Kg(`assets/icons/${r}.svg`)},Qg=qg,jh={caret:`
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
  `},Yg={name:"system",resolver:r=>r in jh?`data:image/svg+xml,${encodeURIComponent(jh[r])}`:""},Gg=Yg,Xg=[Qg,Gg],Qa=[];function Zg(r){Qa.push(r)}function Jg(r){Qa=Qa.filter(o=>o!==r)}function Vh(r){return Xg.find(o=>o.name===r)}var ev=lt`
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
`;function tt(r,o){const i=mr({waitUntilFirstUpdate:!1},o);return(s,c)=>{const{update:d}=s,f=Array.isArray(r)?r:[r];s.update=function(p){f.forEach(m=>{const b=m;if(p.has(b)){const v=p.get(b),k=this[b];v!==k&&(!i.waitUntilFirstUpdate||this.hasUpdated)&&this[c](v,k)}}),d.call(this,p)}}}const tv=(r,o)=>r?._$litType$!==void 0,nv=r=>r.strings===void 0,rv={},ov=(r,o=rv)=>r._$AH=o;var Uo=Symbol(),fl=Symbol(),Ia,ja=new Map,yt=class extends et{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(r,o){var i;let s;if(o?.spriteSheet)return this.svg=Se`<svg part="svg">
        <use part="use" href="${r}"></use>
      </svg>`,this.svg;try{if(s=await fetch(r,{mode:"cors"}),!s.ok)return s.status===410?Uo:fl}catch{return fl}try{const c=document.createElement("div");c.innerHTML=await s.text();const d=c.firstElementChild;if(((i=d?.tagName)==null?void 0:i.toLowerCase())!=="svg")return Uo;Ia||(Ia=new DOMParser);const p=Ia.parseFromString(d.outerHTML,"text/html").body.querySelector("svg");return p?(p.part.add("svg"),document.adoptNode(p)):Uo}catch{return Uo}}connectedCallback(){super.connectedCallback(),Zg(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Jg(this)}getIconSource(){const r=Vh(this.library);return this.name&&r?{url:r.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var r;const{url:o,fromLibrary:i}=this.getIconSource(),s=i?Vh(this.library):void 0;if(!o){this.svg=null;return}let c=ja.get(o);if(c||(c=this.resolveIcon(o,s),ja.set(o,c)),!this.initialRender)return;const d=await c;if(d===fl&&ja.delete(o),o===this.getIconSource().url){if(tv(d)){if(this.svg=d,s){await this.updateComplete;const f=this.shadowRoot.querySelector("[part='svg']");typeof s.mutator=="function"&&f&&s.mutator(f)}return}switch(d){case fl:case Uo:this.svg=null,this.emit("sl-error");break;default:this.svg=d.cloneNode(!0),(r=s?.mutator)==null||r.call(s,this.svg),this.emit("sl-load")}}}render(){return this.svg}};yt.styles=[Pt,ev];w([Ye()],yt.prototype,"svg",2);w([E({reflect:!0})],yt.prototype,"name",2);w([E()],yt.prototype,"src",2);w([E()],yt.prototype,"label",2);w([E({reflect:!0})],yt.prototype,"library",2);w([tt("label")],yt.prototype,"handleLabelChange",1);w([tt(["name","src","library"])],yt.prototype,"setIcon",1);const jn={ATTRIBUTE:1,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},fu=r=>(...o)=>({_$litDirective$:r,values:o});let pu=class{constructor(o){}get _$AU(){return this._$AM._$AU}_$AT(o,i,s){this._$Ct=o,this._$AM=i,this._$Ci=s}_$AS(o,i){return this.update(o,i)}update(o,i){return this.render(...i)}};const ct=fu(class extends pu{constructor(r){if(super(r),r.type!==jn.ATTRIBUTE||r.name!=="class"||r.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(o=>r[o]).join(" ")+" "}update(r,[o]){if(this.st===void 0){this.st=new Set,r.strings!==void 0&&(this.nt=new Set(r.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in o)o[s]&&!this.nt?.has(s)&&this.st.add(s);return this.render(o)}const i=r.element.classList;for(const s of this.st)s in o||(i.remove(s),this.st.delete(s));for(const s in o){const c=!!o[s];c===this.st.has(s)||this.nt?.has(s)||(c?(i.add(s),this.st.add(s)):(i.remove(s),this.st.delete(s)))}return jt}});const Af=Symbol.for(""),iv=r=>{if(r?.r===Af)return r?._$litStatic$},Sl=(r,...o)=>({_$litStatic$:o.reduce((i,s,c)=>i+(d=>{if(d._$litStatic$!==void 0)return d._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${d}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(s)+r[c+1],r[0]),r:Af}),Bh=new Map,lv=r=>(o,...i)=>{const s=i.length;let c,d;const f=[],p=[];let m,b=0,v=!1;for(;b<s;){for(m=o[b];b<s&&(d=i[b],(c=iv(d))!==void 0);)m+=c+o[++b],v=!0;b!==s&&p.push(d),f.push(m),b++}if(b===s&&f.push(o[s]),v){const k=f.join("$$lit$$");(o=Bh.get(k))===void 0&&(f.raw=f,Bh.set(k,o=f)),i=p}return r(o,...i)},wl=lv(Se);const Z=r=>r??Be;var ve=class extends et{constructor(){super(...arguments),this.formControlController=new Tl(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new Rl(this,"[default]","prefix","suffix"),this.localize=new Qn(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:hu}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(r){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(r)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(r){this.button.focus(r)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(r){this.isButton()&&(this.button.setCustomValidity(r),this.formControlController.updateValidity())}render(){const r=this.isLink(),o=r?Sl`a`:Sl`button`;return wl`
      <${o}
        part="base"
        class=${ct({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${Z(r?void 0:this.disabled)}
        type=${Z(r?void 0:this.type)}
        title=${this.title}
        name=${Z(r?void 0:this.name)}
        value=${Z(r?void 0:this.value)}
        href=${Z(r&&!this.disabled?this.href:void 0)}
        target=${Z(r?this.target:void 0)}
        download=${Z(r?this.download:void 0)}
        rel=${Z(r?this.rel:void 0)}
        role=${Z(r?void 0:"button")}
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
        ${this.caret?wl` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?wl`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${o}>
    `}};ve.styles=[Pt,Wg];ve.dependencies={"sl-icon":yt,"sl-spinner":zf};w([Ce(".button")],ve.prototype,"button",2);w([Ye()],ve.prototype,"hasFocus",2);w([Ye()],ve.prototype,"invalid",2);w([E()],ve.prototype,"title",2);w([E({reflect:!0})],ve.prototype,"variant",2);w([E({reflect:!0})],ve.prototype,"size",2);w([E({type:Boolean,reflect:!0})],ve.prototype,"caret",2);w([E({type:Boolean,reflect:!0})],ve.prototype,"disabled",2);w([E({type:Boolean,reflect:!0})],ve.prototype,"loading",2);w([E({type:Boolean,reflect:!0})],ve.prototype,"outline",2);w([E({type:Boolean,reflect:!0})],ve.prototype,"pill",2);w([E({type:Boolean,reflect:!0})],ve.prototype,"circle",2);w([E()],ve.prototype,"type",2);w([E()],ve.prototype,"name",2);w([E()],ve.prototype,"value",2);w([E()],ve.prototype,"href",2);w([E()],ve.prototype,"target",2);w([E()],ve.prototype,"rel",2);w([E()],ve.prototype,"download",2);w([E()],ve.prototype,"form",2);w([E({attribute:"formaction"})],ve.prototype,"formAction",2);w([E({attribute:"formenctype"})],ve.prototype,"formEnctype",2);w([E({attribute:"formmethod"})],ve.prototype,"formMethod",2);w([E({attribute:"formnovalidate",type:Boolean})],ve.prototype,"formNoValidate",2);w([E({attribute:"formtarget"})],ve.prototype,"formTarget",2);w([tt("disabled",{waitUntilFirstUpdate:!0})],ve.prototype,"handleDisabledChange",1);const sv=new Set(["children","localName","ref","style","className"]),Hh=new WeakMap,Uh=(r,o,i,s,c)=>{const d=c?.[o];d===void 0?(r[o]=i,i==null&&o in HTMLElement.prototype&&r.removeAttribute(o)):i!==s&&((f,p,m)=>{let b=Hh.get(f);b===void 0&&Hh.set(f,b=new Map);let v=b.get(p);m!==void 0?v===void 0?(b.set(p,v={handleEvent:m}),f.addEventListener(p,v)):v.handleEvent=m:v!==void 0&&(b.delete(p),f.removeEventListener(p,v))})(r,d,i)},Yn=({react:r,tagName:o,elementClass:i,events:s,displayName:c})=>{const d=new Set(Object.keys(s??{})),f=r.forwardRef(((p,m)=>{const b=r.useRef(new Map),v=r.useRef(null),k={},A={};for(const[z,P]of Object.entries(p))sv.has(z)?k[z==="className"?"class":z]=P:d.has(z)||z in i.prototype?A[z]=P:k[z]=P;return r.useLayoutEffect((()=>{if(v.current===null)return;const z=new Map;for(const P in A)Uh(v.current,P,p[P],b.current.get(P),s),b.current.delete(P),z.set(P,p[P]);for(const[P,I]of b.current)Uh(v.current,P,void 0,I,s);b.current=z})),r.useLayoutEffect((()=>{v.current?.removeAttribute("defer-hydration")}),[]),k.suppressHydrationWarning=!0,r.createElement(o,{...k,ref:r.useCallback((z=>{v.current=z,typeof m=="function"?m(z):m!==null&&(m.current=z)}),[m])})}));return f.displayName=c??i.name,f};var av="sl-button";ve.define("sl-button");var uv=Yn({tagName:av,elementClass:ve,react:qn,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus",onSlInvalid:"sl-invalid"},displayName:"SlButton"}),Qt=uv,cv=lt`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,gr=class extends et{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(r){const o=Wo(r.target);o?.toggleAttribute("data-sl-button-group__button--focus",!0)}handleBlur(r){const o=Wo(r.target);o?.toggleAttribute("data-sl-button-group__button--focus",!1)}handleMouseOver(r){const o=Wo(r.target);o?.toggleAttribute("data-sl-button-group__button--hover",!0)}handleMouseOut(r){const o=Wo(r.target);o?.toggleAttribute("data-sl-button-group__button--hover",!1)}handleSlotChange(){const r=[...this.defaultSlot.assignedElements({flatten:!0})];r.forEach(o=>{const i=r.indexOf(o),s=Wo(o);s&&(s.toggleAttribute("data-sl-button-group__button",!0),s.toggleAttribute("data-sl-button-group__button--first",i===0),s.toggleAttribute("data-sl-button-group__button--inner",i>0&&i<r.length-1),s.toggleAttribute("data-sl-button-group__button--last",i===r.length-1),s.toggleAttribute("data-sl-button-group__button--radio",s.tagName.toLowerCase()==="sl-radio-button"))})}render(){return Se`
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
    `}};gr.styles=[Pt,cv];w([Ce("slot")],gr.prototype,"defaultSlot",2);w([Ye()],gr.prototype,"disableRole",2);w([E()],gr.prototype,"label",2);function Wo(r){var o;const i="sl-button, sl-radio-button";return(o=r.closest(i))!=null?o:r.querySelector(i)}var dv="sl-button-group";gr.define("sl-button-group");var hv=Yn({tagName:dv,elementClass:gr,react:qn,events:{},displayName:"SlButtonGroup"}),mu=hv,fv=lt`
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
`,pv=lt`
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
`;const Un=Math.min,$t=Math.max,Cl=Math.round,pl=Math.floor,ln=r=>({x:r,y:r}),mv={left:"right",right:"left",bottom:"top",top:"bottom"},gv={start:"end",end:"start"};function Ya(r,o,i){return $t(r,Un(o,i))}function Gr(r,o){return typeof r=="function"?r(o):r}function Wn(r){return r.split("-")[0]}function Xr(r){return r.split("-")[1]}function Pf(r){return r==="x"?"y":"x"}function gu(r){return r==="y"?"height":"width"}const vv=new Set(["top","bottom"]);function bn(r){return vv.has(Wn(r))?"y":"x"}function vu(r){return Pf(bn(r))}function yv(r,o,i){i===void 0&&(i=!1);const s=Xr(r),c=vu(r),d=gu(c);let f=c==="x"?s===(i?"end":"start")?"right":"left":s==="start"?"bottom":"top";return o.reference[d]>o.floating[d]&&(f=El(f)),[f,El(f)]}function bv(r){const o=El(r);return[Ga(r),o,Ga(o)]}function Ga(r){return r.replace(/start|end/g,o=>gv[o])}const Wh=["left","right"],Kh=["right","left"],wv=["top","bottom"],_v=["bottom","top"];function xv(r,o,i){switch(r){case"top":case"bottom":return i?o?Kh:Wh:o?Wh:Kh;case"left":case"right":return o?wv:_v;default:return[]}}function kv(r,o,i,s){const c=Xr(r);let d=xv(Wn(r),i==="start",s);return c&&(d=d.map(f=>f+"-"+c),o&&(d=d.concat(d.map(Ga)))),d}function El(r){return r.replace(/left|right|bottom|top/g,o=>mv[o])}function Sv(r){return{top:0,right:0,bottom:0,left:0,...r}}function Tf(r){return typeof r!="number"?Sv(r):{top:r,right:r,bottom:r,left:r}}function $l(r){const{x:o,y:i,width:s,height:c}=r;return{width:s,height:c,top:i,left:o,right:o+s,bottom:i+c,x:o,y:i}}function qh(r,o,i){let{reference:s,floating:c}=r;const d=bn(o),f=vu(o),p=gu(f),m=Wn(o),b=d==="y",v=s.x+s.width/2-c.width/2,k=s.y+s.height/2-c.height/2,A=s[p]/2-c[p]/2;let z;switch(m){case"top":z={x:v,y:s.y-c.height};break;case"bottom":z={x:v,y:s.y+s.height};break;case"right":z={x:s.x+s.width,y:k};break;case"left":z={x:s.x-c.width,y:k};break;default:z={x:s.x,y:s.y}}switch(Xr(o)){case"start":z[f]-=A*(i&&b?-1:1);break;case"end":z[f]+=A*(i&&b?-1:1);break}return z}async function Cv(r,o){var i;o===void 0&&(o={});const{x:s,y:c,platform:d,rects:f,elements:p,strategy:m}=r,{boundary:b="clippingAncestors",rootBoundary:v="viewport",elementContext:k="floating",altBoundary:A=!1,padding:z=0}=Gr(o,r),P=Tf(z),V=p[A?k==="floating"?"reference":"floating":k],X=$l(await d.getClippingRect({element:(i=await(d.isElement==null?void 0:d.isElement(V)))==null||i?V:V.contextElement||await(d.getDocumentElement==null?void 0:d.getDocumentElement(p.floating)),boundary:b,rootBoundary:v,strategy:m})),te=k==="floating"?{x:s,y:c,width:f.floating.width,height:f.floating.height}:f.reference,ne=await(d.getOffsetParent==null?void 0:d.getOffsetParent(p.floating)),re=await(d.isElement==null?void 0:d.isElement(ne))?await(d.getScale==null?void 0:d.getScale(ne))||{x:1,y:1}:{x:1,y:1},ye=$l(d.convertOffsetParentRelativeRectToViewportRelativeRect?await d.convertOffsetParentRelativeRectToViewportRelativeRect({elements:p,rect:te,offsetParent:ne,strategy:m}):te);return{top:(X.top-ye.top+P.top)/re.y,bottom:(ye.bottom-X.bottom+P.bottom)/re.y,left:(X.left-ye.left+P.left)/re.x,right:(ye.right-X.right+P.right)/re.x}}const Ev=async(r,o,i)=>{const{placement:s="bottom",strategy:c="absolute",middleware:d=[],platform:f}=i,p=d.filter(Boolean),m=await(f.isRTL==null?void 0:f.isRTL(o));let b=await f.getElementRects({reference:r,floating:o,strategy:c}),{x:v,y:k}=qh(b,s,m),A=s,z={},P=0;for(let V=0;V<p.length;V++){var I;const{name:X,fn:te}=p[V],{x:ne,y:re,data:ye,reset:ae}=await te({x:v,y:k,initialPlacement:s,placement:A,strategy:c,middlewareData:z,rects:b,platform:{...f,detectOverflow:(I=f.detectOverflow)!=null?I:Cv},elements:{reference:r,floating:o}});v=ne??v,k=re??k,z={...z,[X]:{...z[X],...ye}},ae&&P<=50&&(P++,typeof ae=="object"&&(ae.placement&&(A=ae.placement),ae.rects&&(b=ae.rects===!0?await f.getElementRects({reference:r,floating:o,strategy:c}):ae.rects),{x:v,y:k}=qh(b,A,m)),V=-1)}return{x:v,y:k,placement:A,strategy:c,middlewareData:z}},$v=r=>({name:"arrow",options:r,async fn(o){const{x:i,y:s,placement:c,rects:d,platform:f,elements:p,middlewareData:m}=o,{element:b,padding:v=0}=Gr(r,o)||{};if(b==null)return{};const k=Tf(v),A={x:i,y:s},z=vu(c),P=gu(z),I=await f.getDimensions(b),V=z==="y",X=V?"top":"left",te=V?"bottom":"right",ne=V?"clientHeight":"clientWidth",re=d.reference[P]+d.reference[z]-A[z]-d.floating[P],ye=A[z]-d.reference[z],ae=await(f.getOffsetParent==null?void 0:f.getOffsetParent(b));let de=ae?ae[ne]:0;(!de||!await(f.isElement==null?void 0:f.isElement(ae)))&&(de=p.floating[ne]||d.floating[P]);const Ae=re/2-ye/2,Fe=de/2-I[P]/2-1,Pe=Un(k[X],Fe),We=Un(k[te],Fe),Te=Pe,Ee=de-I[P]-We,F=de/2-I[P]/2+Ae,q=Ya(Te,F,Ee),le=!m.arrow&&Xr(c)!=null&&F!==q&&d.reference[P]/2-(F<Te?Pe:We)-I[P]/2<0,ee=le?F<Te?F-Te:F-Ee:0;return{[z]:A[z]+ee,data:{[z]:q,centerOffset:F-q-ee,...le&&{alignmentOffset:ee}},reset:le}}}),zv=function(r){return r===void 0&&(r={}),{name:"flip",options:r,async fn(o){var i,s;const{placement:c,middlewareData:d,rects:f,initialPlacement:p,platform:m,elements:b}=o,{mainAxis:v=!0,crossAxis:k=!0,fallbackPlacements:A,fallbackStrategy:z="bestFit",fallbackAxisSideDirection:P="none",flipAlignment:I=!0,...V}=Gr(r,o);if((i=d.arrow)!=null&&i.alignmentOffset)return{};const X=Wn(c),te=bn(p),ne=Wn(p)===p,re=await(m.isRTL==null?void 0:m.isRTL(b.floating)),ye=A||(ne||!I?[El(p)]:bv(p)),ae=P!=="none";!A&&ae&&ye.push(...kv(p,I,P,re));const de=[p,...ye],Ae=await m.detectOverflow(o,V),Fe=[];let Pe=((s=d.flip)==null?void 0:s.overflows)||[];if(v&&Fe.push(Ae[X]),k){const F=yv(c,f,re);Fe.push(Ae[F[0]],Ae[F[1]])}if(Pe=[...Pe,{placement:c,overflows:Fe}],!Fe.every(F=>F<=0)){var We,Te;const F=(((We=d.flip)==null?void 0:We.index)||0)+1,q=de[F];if(q&&(!(k==="alignment"?te!==bn(q):!1)||Pe.every(D=>bn(D.placement)===te?D.overflows[0]>0:!0)))return{data:{index:F,overflows:Pe},reset:{placement:q}};let le=(Te=Pe.filter(ee=>ee.overflows[0]<=0).sort((ee,D)=>ee.overflows[1]-D.overflows[1])[0])==null?void 0:Te.placement;if(!le)switch(z){case"bestFit":{var Ee;const ee=(Ee=Pe.filter(D=>{if(ae){const Q=bn(D.placement);return Q===te||Q==="y"}return!0}).map(D=>[D.placement,D.overflows.filter(Q=>Q>0).reduce((Q,B)=>Q+B,0)]).sort((D,Q)=>D[1]-Q[1])[0])==null?void 0:Ee[0];ee&&(le=ee);break}case"initialPlacement":le=p;break}if(c!==le)return{reset:{placement:le}}}return{}}}},Av=new Set(["left","top"]);async function Pv(r,o){const{placement:i,platform:s,elements:c}=r,d=await(s.isRTL==null?void 0:s.isRTL(c.floating)),f=Wn(i),p=Xr(i),m=bn(i)==="y",b=Av.has(f)?-1:1,v=d&&m?-1:1,k=Gr(o,r);let{mainAxis:A,crossAxis:z,alignmentAxis:P}=typeof k=="number"?{mainAxis:k,crossAxis:0,alignmentAxis:null}:{mainAxis:k.mainAxis||0,crossAxis:k.crossAxis||0,alignmentAxis:k.alignmentAxis};return p&&typeof P=="number"&&(z=p==="end"?P*-1:P),m?{x:z*v,y:A*b}:{x:A*b,y:z*v}}const Tv=function(r){return r===void 0&&(r=0),{name:"offset",options:r,async fn(o){var i,s;const{x:c,y:d,placement:f,middlewareData:p}=o,m=await Pv(o,r);return f===((i=p.offset)==null?void 0:i.placement)&&(s=p.arrow)!=null&&s.alignmentOffset?{}:{x:c+m.x,y:d+m.y,data:{...m,placement:f}}}}},Rv=function(r){return r===void 0&&(r={}),{name:"shift",options:r,async fn(o){const{x:i,y:s,placement:c,platform:d}=o,{mainAxis:f=!0,crossAxis:p=!1,limiter:m={fn:X=>{let{x:te,y:ne}=X;return{x:te,y:ne}}},...b}=Gr(r,o),v={x:i,y:s},k=await d.detectOverflow(o,b),A=bn(Wn(c)),z=Pf(A);let P=v[z],I=v[A];if(f){const X=z==="y"?"top":"left",te=z==="y"?"bottom":"right",ne=P+k[X],re=P-k[te];P=Ya(ne,P,re)}if(p){const X=A==="y"?"top":"left",te=A==="y"?"bottom":"right",ne=I+k[X],re=I-k[te];I=Ya(ne,I,re)}const V=m.fn({...o,[z]:P,[A]:I});return{...V,data:{x:V.x-i,y:V.y-s,enabled:{[z]:f,[A]:p}}}}}},Lv=function(r){return r===void 0&&(r={}),{name:"size",options:r,async fn(o){var i,s;const{placement:c,rects:d,platform:f,elements:p}=o,{apply:m=()=>{},...b}=Gr(r,o),v=await f.detectOverflow(o,b),k=Wn(c),A=Xr(c),z=bn(c)==="y",{width:P,height:I}=d.floating;let V,X;k==="top"||k==="bottom"?(V=k,X=A===(await(f.isRTL==null?void 0:f.isRTL(p.floating))?"start":"end")?"left":"right"):(X=k,V=A==="end"?"top":"bottom");const te=I-v.top-v.bottom,ne=P-v.left-v.right,re=Un(I-v[V],te),ye=Un(P-v[X],ne),ae=!o.middlewareData.shift;let de=re,Ae=ye;if((i=o.middlewareData.shift)!=null&&i.enabled.x&&(Ae=ne),(s=o.middlewareData.shift)!=null&&s.enabled.y&&(de=te),ae&&!A){const Pe=$t(v.left,0),We=$t(v.right,0),Te=$t(v.top,0),Ee=$t(v.bottom,0);z?Ae=P-2*(Pe!==0||We!==0?Pe+We:$t(v.left,v.right)):de=I-2*(Te!==0||Ee!==0?Te+Ee:$t(v.top,v.bottom))}await m({...o,availableWidth:Ae,availableHeight:de});const Fe=await f.getDimensions(p.floating);return P!==Fe.width||I!==Fe.height?{reset:{rects:!0}}:{}}}};function Ll(){return typeof window<"u"}function Zr(r){return Rf(r)?(r.nodeName||"").toLowerCase():"#document"}function At(r){var o;return(r==null||(o=r.ownerDocument)==null?void 0:o.defaultView)||window}function an(r){var o;return(o=(Rf(r)?r.ownerDocument:r.document)||window.document)==null?void 0:o.documentElement}function Rf(r){return Ll()?r instanceof Node||r instanceof At(r).Node:!1}function Gt(r){return Ll()?r instanceof Element||r instanceof At(r).Element:!1}function sn(r){return Ll()?r instanceof HTMLElement||r instanceof At(r).HTMLElement:!1}function Qh(r){return!Ll()||typeof ShadowRoot>"u"?!1:r instanceof ShadowRoot||r instanceof At(r).ShadowRoot}const Nv=new Set(["inline","contents"]);function Jo(r){const{overflow:o,overflowX:i,overflowY:s,display:c}=Xt(r);return/auto|scroll|overlay|hidden|clip/.test(o+s+i)&&!Nv.has(c)}const Ov=new Set(["table","td","th"]);function Mv(r){return Ov.has(Zr(r))}const Dv=[":popover-open",":modal"];function Nl(r){return Dv.some(o=>{try{return r.matches(o)}catch{return!1}})}const Fv=["transform","translate","scale","rotate","perspective"],Iv=["transform","translate","scale","rotate","perspective","filter"],jv=["paint","layout","strict","content"];function Ol(r){const o=yu(),i=Gt(r)?Xt(r):r;return Fv.some(s=>i[s]?i[s]!=="none":!1)||(i.containerType?i.containerType!=="normal":!1)||!o&&(i.backdropFilter?i.backdropFilter!=="none":!1)||!o&&(i.filter?i.filter!=="none":!1)||Iv.some(s=>(i.willChange||"").includes(s))||jv.some(s=>(i.contain||"").includes(s))}function Vv(r){let o=Kn(r);for(;sn(o)&&!Qr(o);){if(Ol(o))return o;if(Nl(o))return null;o=Kn(o)}return null}function yu(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const Bv=new Set(["html","body","#document"]);function Qr(r){return Bv.has(Zr(r))}function Xt(r){return At(r).getComputedStyle(r)}function Ml(r){return Gt(r)?{scrollLeft:r.scrollLeft,scrollTop:r.scrollTop}:{scrollLeft:r.scrollX,scrollTop:r.scrollY}}function Kn(r){if(Zr(r)==="html")return r;const o=r.assignedSlot||r.parentNode||Qh(r)&&r.host||an(r);return Qh(o)?o.host:o}function Lf(r){const o=Kn(r);return Qr(o)?r.ownerDocument?r.ownerDocument.body:r.body:sn(o)&&Jo(o)?o:Lf(o)}function Xo(r,o,i){var s;o===void 0&&(o=[]),i===void 0&&(i=!0);const c=Lf(r),d=c===((s=r.ownerDocument)==null?void 0:s.body),f=At(c);if(d){const p=Xa(f);return o.concat(f,f.visualViewport||[],Jo(c)?c:[],p&&i?Xo(p):[])}return o.concat(c,Xo(c,[],i))}function Xa(r){return r.parent&&Object.getPrototypeOf(r.parent)?r.frameElement:null}function Nf(r){const o=Xt(r);let i=parseFloat(o.width)||0,s=parseFloat(o.height)||0;const c=sn(r),d=c?r.offsetWidth:i,f=c?r.offsetHeight:s,p=Cl(i)!==d||Cl(s)!==f;return p&&(i=d,s=f),{width:i,height:s,$:p}}function bu(r){return Gt(r)?r:r.contextElement}function Wr(r){const o=bu(r);if(!sn(o))return ln(1);const i=o.getBoundingClientRect(),{width:s,height:c,$:d}=Nf(o);let f=(d?Cl(i.width):i.width)/s,p=(d?Cl(i.height):i.height)/c;return(!f||!Number.isFinite(f))&&(f=1),(!p||!Number.isFinite(p))&&(p=1),{x:f,y:p}}const Hv=ln(0);function Of(r){const o=At(r);return!yu()||!o.visualViewport?Hv:{x:o.visualViewport.offsetLeft,y:o.visualViewport.offsetTop}}function Uv(r,o,i){return o===void 0&&(o=!1),!i||o&&i!==At(r)?!1:o}function pr(r,o,i,s){o===void 0&&(o=!1),i===void 0&&(i=!1);const c=r.getBoundingClientRect(),d=bu(r);let f=ln(1);o&&(s?Gt(s)&&(f=Wr(s)):f=Wr(r));const p=Uv(d,i,s)?Of(d):ln(0);let m=(c.left+p.x)/f.x,b=(c.top+p.y)/f.y,v=c.width/f.x,k=c.height/f.y;if(d){const A=At(d),z=s&&Gt(s)?At(s):s;let P=A,I=Xa(P);for(;I&&s&&z!==P;){const V=Wr(I),X=I.getBoundingClientRect(),te=Xt(I),ne=X.left+(I.clientLeft+parseFloat(te.paddingLeft))*V.x,re=X.top+(I.clientTop+parseFloat(te.paddingTop))*V.y;m*=V.x,b*=V.y,v*=V.x,k*=V.y,m+=ne,b+=re,P=At(I),I=Xa(P)}}return $l({width:v,height:k,x:m,y:b})}function Dl(r,o){const i=Ml(r).scrollLeft;return o?o.left+i:pr(an(r)).left+i}function Mf(r,o){const i=r.getBoundingClientRect(),s=i.left+o.scrollLeft-Dl(r,i),c=i.top+o.scrollTop;return{x:s,y:c}}function Wv(r){let{elements:o,rect:i,offsetParent:s,strategy:c}=r;const d=c==="fixed",f=an(s),p=o?Nl(o.floating):!1;if(s===f||p&&d)return i;let m={scrollLeft:0,scrollTop:0},b=ln(1);const v=ln(0),k=sn(s);if((k||!k&&!d)&&((Zr(s)!=="body"||Jo(f))&&(m=Ml(s)),sn(s))){const z=pr(s);b=Wr(s),v.x=z.x+s.clientLeft,v.y=z.y+s.clientTop}const A=f&&!k&&!d?Mf(f,m):ln(0);return{width:i.width*b.x,height:i.height*b.y,x:i.x*b.x-m.scrollLeft*b.x+v.x+A.x,y:i.y*b.y-m.scrollTop*b.y+v.y+A.y}}function Kv(r){return Array.from(r.getClientRects())}function qv(r){const o=an(r),i=Ml(r),s=r.ownerDocument.body,c=$t(o.scrollWidth,o.clientWidth,s.scrollWidth,s.clientWidth),d=$t(o.scrollHeight,o.clientHeight,s.scrollHeight,s.clientHeight);let f=-i.scrollLeft+Dl(r);const p=-i.scrollTop;return Xt(s).direction==="rtl"&&(f+=$t(o.clientWidth,s.clientWidth)-c),{width:c,height:d,x:f,y:p}}const Yh=25;function Qv(r,o){const i=At(r),s=an(r),c=i.visualViewport;let d=s.clientWidth,f=s.clientHeight,p=0,m=0;if(c){d=c.width,f=c.height;const v=yu();(!v||v&&o==="fixed")&&(p=c.offsetLeft,m=c.offsetTop)}const b=Dl(s);if(b<=0){const v=s.ownerDocument,k=v.body,A=getComputedStyle(k),z=v.compatMode==="CSS1Compat"&&parseFloat(A.marginLeft)+parseFloat(A.marginRight)||0,P=Math.abs(s.clientWidth-k.clientWidth-z);P<=Yh&&(d-=P)}else b<=Yh&&(d+=b);return{width:d,height:f,x:p,y:m}}const Yv=new Set(["absolute","fixed"]);function Gv(r,o){const i=pr(r,!0,o==="fixed"),s=i.top+r.clientTop,c=i.left+r.clientLeft,d=sn(r)?Wr(r):ln(1),f=r.clientWidth*d.x,p=r.clientHeight*d.y,m=c*d.x,b=s*d.y;return{width:f,height:p,x:m,y:b}}function Gh(r,o,i){let s;if(o==="viewport")s=Qv(r,i);else if(o==="document")s=qv(an(r));else if(Gt(o))s=Gv(o,i);else{const c=Of(r);s={x:o.x-c.x,y:o.y-c.y,width:o.width,height:o.height}}return $l(s)}function Df(r,o){const i=Kn(r);return i===o||!Gt(i)||Qr(i)?!1:Xt(i).position==="fixed"||Df(i,o)}function Xv(r,o){const i=o.get(r);if(i)return i;let s=Xo(r,[],!1).filter(p=>Gt(p)&&Zr(p)!=="body"),c=null;const d=Xt(r).position==="fixed";let f=d?Kn(r):r;for(;Gt(f)&&!Qr(f);){const p=Xt(f),m=Ol(f);!m&&p.position==="fixed"&&(c=null),(d?!m&&!c:!m&&p.position==="static"&&!!c&&Yv.has(c.position)||Jo(f)&&!m&&Df(r,f))?s=s.filter(v=>v!==f):c=p,f=Kn(f)}return o.set(r,s),s}function Zv(r){let{element:o,boundary:i,rootBoundary:s,strategy:c}=r;const f=[...i==="clippingAncestors"?Nl(o)?[]:Xv(o,this._c):[].concat(i),s],p=f[0],m=f.reduce((b,v)=>{const k=Gh(o,v,c);return b.top=$t(k.top,b.top),b.right=Un(k.right,b.right),b.bottom=Un(k.bottom,b.bottom),b.left=$t(k.left,b.left),b},Gh(o,p,c));return{width:m.right-m.left,height:m.bottom-m.top,x:m.left,y:m.top}}function Jv(r){const{width:o,height:i}=Nf(r);return{width:o,height:i}}function e0(r,o,i){const s=sn(o),c=an(o),d=i==="fixed",f=pr(r,!0,d,o);let p={scrollLeft:0,scrollTop:0};const m=ln(0);function b(){m.x=Dl(c)}if(s||!s&&!d)if((Zr(o)!=="body"||Jo(c))&&(p=Ml(o)),s){const z=pr(o,!0,d,o);m.x=z.x+o.clientLeft,m.y=z.y+o.clientTop}else c&&b();d&&!s&&c&&b();const v=c&&!s&&!d?Mf(c,p):ln(0),k=f.left+p.scrollLeft-m.x-v.x,A=f.top+p.scrollTop-m.y-v.y;return{x:k,y:A,width:f.width,height:f.height}}function Va(r){return Xt(r).position==="static"}function Xh(r,o){if(!sn(r)||Xt(r).position==="fixed")return null;if(o)return o(r);let i=r.offsetParent;return an(r)===i&&(i=i.ownerDocument.body),i}function Ff(r,o){const i=At(r);if(Nl(r))return i;if(!sn(r)){let c=Kn(r);for(;c&&!Qr(c);){if(Gt(c)&&!Va(c))return c;c=Kn(c)}return i}let s=Xh(r,o);for(;s&&Mv(s)&&Va(s);)s=Xh(s,o);return s&&Qr(s)&&Va(s)&&!Ol(s)?i:s||Vv(r)||i}const t0=async function(r){const o=this.getOffsetParent||Ff,i=this.getDimensions,s=await i(r.floating);return{reference:e0(r.reference,await o(r.floating),r.strategy),floating:{x:0,y:0,width:s.width,height:s.height}}};function n0(r){return Xt(r).direction==="rtl"}const _l={convertOffsetParentRelativeRectToViewportRelativeRect:Wv,getDocumentElement:an,getClippingRect:Zv,getOffsetParent:Ff,getElementRects:t0,getClientRects:Kv,getDimensions:Jv,getScale:Wr,isElement:Gt,isRTL:n0};function If(r,o){return r.x===o.x&&r.y===o.y&&r.width===o.width&&r.height===o.height}function r0(r,o){let i=null,s;const c=an(r);function d(){var p;clearTimeout(s),(p=i)==null||p.disconnect(),i=null}function f(p,m){p===void 0&&(p=!1),m===void 0&&(m=1),d();const b=r.getBoundingClientRect(),{left:v,top:k,width:A,height:z}=b;if(p||o(),!A||!z)return;const P=pl(k),I=pl(c.clientWidth-(v+A)),V=pl(c.clientHeight-(k+z)),X=pl(v),ne={rootMargin:-P+"px "+-I+"px "+-V+"px "+-X+"px",threshold:$t(0,Un(1,m))||1};let re=!0;function ye(ae){const de=ae[0].intersectionRatio;if(de!==m){if(!re)return f();de?f(!1,de):s=setTimeout(()=>{f(!1,1e-7)},1e3)}de===1&&!If(b,r.getBoundingClientRect())&&f(),re=!1}try{i=new IntersectionObserver(ye,{...ne,root:c.ownerDocument})}catch{i=new IntersectionObserver(ye,ne)}i.observe(r)}return f(!0),d}function o0(r,o,i,s){s===void 0&&(s={});const{ancestorScroll:c=!0,ancestorResize:d=!0,elementResize:f=typeof ResizeObserver=="function",layoutShift:p=typeof IntersectionObserver=="function",animationFrame:m=!1}=s,b=bu(r),v=c||d?[...b?Xo(b):[],...Xo(o)]:[];v.forEach(X=>{c&&X.addEventListener("scroll",i,{passive:!0}),d&&X.addEventListener("resize",i)});const k=b&&p?r0(b,i):null;let A=-1,z=null;f&&(z=new ResizeObserver(X=>{let[te]=X;te&&te.target===b&&z&&(z.unobserve(o),cancelAnimationFrame(A),A=requestAnimationFrame(()=>{var ne;(ne=z)==null||ne.observe(o)})),i()}),b&&!m&&z.observe(b),z.observe(o));let P,I=m?pr(r):null;m&&V();function V(){const X=pr(r);I&&!If(I,X)&&i(),I=X,P=requestAnimationFrame(V)}return i(),()=>{var X;v.forEach(te=>{c&&te.removeEventListener("scroll",i),d&&te.removeEventListener("resize",i)}),k?.(),(X=z)==null||X.disconnect(),z=null,m&&cancelAnimationFrame(P)}}const i0=Tv,l0=Rv,s0=zv,Zh=Lv,a0=$v,u0=(r,o,i)=>{const s=new Map,c={platform:_l,...i},d={...c.platform,_c:s};return Ev(r,o,{...c,platform:d})};function c0(r){return d0(r)}function Ba(r){return r.assignedSlot?r.assignedSlot:r.parentNode instanceof ShadowRoot?r.parentNode.host:r.parentNode}function d0(r){for(let o=r;o;o=Ba(o))if(o instanceof Element&&getComputedStyle(o).display==="none")return null;for(let o=Ba(r);o;o=Ba(o)){if(!(o instanceof Element))continue;const i=getComputedStyle(o);if(i.display!=="contents"&&(i.position!=="static"||Ol(i)||o.tagName==="BODY"))return o}return null}function h0(r){return r!==null&&typeof r=="object"&&"getBoundingClientRect"in r&&("contextElement"in r?r.contextElement instanceof Element:!0)}var _e=class extends et{constructor(){super(...arguments),this.localize=new Qn(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const r=this.anchorEl.getBoundingClientRect(),o=this.popup.getBoundingClientRect(),i=this.placement.includes("top")||this.placement.includes("bottom");let s=0,c=0,d=0,f=0,p=0,m=0,b=0,v=0;i?r.top<o.top?(s=r.left,c=r.bottom,d=r.right,f=r.bottom,p=o.left,m=o.top,b=o.right,v=o.top):(s=o.left,c=o.bottom,d=o.right,f=o.bottom,p=r.left,m=r.top,b=r.right,v=r.top):r.left<o.left?(s=r.right,c=r.top,d=o.left,f=o.top,p=r.right,m=r.bottom,b=o.left,v=o.bottom):(s=o.right,c=o.top,d=r.left,f=r.top,p=o.right,m=o.bottom,b=r.left,v=r.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${s}px`),this.style.setProperty("--hover-bridge-top-left-y",`${c}px`),this.style.setProperty("--hover-bridge-top-right-x",`${d}px`),this.style.setProperty("--hover-bridge-top-right-y",`${f}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${p}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${m}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${b}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${v}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(r){super.updated(r),r.has("active")&&(this.active?this.start():this.stop()),r.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const r=this.getRootNode();this.anchorEl=r.getElementById(this.anchor)}else this.anchor instanceof Element||h0(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){!this.anchorEl||!this.active||(this.cleanup=o0(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(r=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>r())):r()})}reposition(){if(!this.active||!this.anchorEl)return;const r=[i0({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?r.push(Zh({apply:({rects:i})=>{const s=this.sync==="width"||this.sync==="both",c=this.sync==="height"||this.sync==="both";this.popup.style.width=s?`${i.reference.width}px`:"",this.popup.style.height=c?`${i.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&r.push(s0({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&r.push(l0({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?r.push(Zh({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:i,availableHeight:s})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${s}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${i}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&r.push(a0({element:this.arrowEl,padding:this.arrowPadding}));const o=this.strategy==="absolute"?i=>_l.getOffsetParent(i,c0):_l.getOffsetParent;u0(this.anchorEl,this.popup,{placement:this.placement,middleware:r,strategy:this.strategy,platform:Pl(mr({},_l),{getOffsetParent:o})}).then(({x:i,y:s,middlewareData:c,placement:d})=>{const f=this.localize.dir()==="rtl",p={top:"bottom",right:"left",bottom:"top",left:"right"}[d.split("-")[0]];if(this.setAttribute("data-current-placement",d),Object.assign(this.popup.style,{left:`${i}px`,top:`${s}px`}),this.arrow){const m=c.arrow.x,b=c.arrow.y;let v="",k="",A="",z="";if(this.arrowPlacement==="start"){const P=typeof m=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";v=typeof b=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",k=f?P:"",z=f?"":P}else if(this.arrowPlacement==="end"){const P=typeof m=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";k=f?"":P,z=f?P:"",A=typeof b=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(z=typeof m=="number"?"calc(50% - var(--arrow-size-diagonal))":"",v=typeof b=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(z=typeof m=="number"?`${m}px`:"",v=typeof b=="number"?`${b}px`:"");Object.assign(this.arrowEl.style,{top:v,right:k,bottom:A,left:z,[p]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return Se`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${ct({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${ct({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?Se`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};_e.styles=[Pt,pv];w([Ce(".popup")],_e.prototype,"popup",2);w([Ce(".popup__arrow")],_e.prototype,"arrowEl",2);w([E()],_e.prototype,"anchor",2);w([E({type:Boolean,reflect:!0})],_e.prototype,"active",2);w([E({reflect:!0})],_e.prototype,"placement",2);w([E({reflect:!0})],_e.prototype,"strategy",2);w([E({type:Number})],_e.prototype,"distance",2);w([E({type:Number})],_e.prototype,"skidding",2);w([E({type:Boolean})],_e.prototype,"arrow",2);w([E({attribute:"arrow-placement"})],_e.prototype,"arrowPlacement",2);w([E({attribute:"arrow-padding",type:Number})],_e.prototype,"arrowPadding",2);w([E({type:Boolean})],_e.prototype,"flip",2);w([E({attribute:"flip-fallback-placements",converter:{fromAttribute:r=>r.split(" ").map(o=>o.trim()).filter(o=>o!==""),toAttribute:r=>r.join(" ")}})],_e.prototype,"flipFallbackPlacements",2);w([E({attribute:"flip-fallback-strategy"})],_e.prototype,"flipFallbackStrategy",2);w([E({type:Object})],_e.prototype,"flipBoundary",2);w([E({attribute:"flip-padding",type:Number})],_e.prototype,"flipPadding",2);w([E({type:Boolean})],_e.prototype,"shift",2);w([E({type:Object})],_e.prototype,"shiftBoundary",2);w([E({attribute:"shift-padding",type:Number})],_e.prototype,"shiftPadding",2);w([E({attribute:"auto-size"})],_e.prototype,"autoSize",2);w([E()],_e.prototype,"sync",2);w([E({type:Object})],_e.prototype,"autoSizeBoundary",2);w([E({attribute:"auto-size-padding",type:Number})],_e.prototype,"autoSizePadding",2);w([E({attribute:"hover-bridge",type:Boolean})],_e.prototype,"hoverBridge",2);var jf=new Map,f0=new WeakMap;function p0(r){return r??{keyframes:[],options:{duration:0}}}function Jh(r,o){return o.toLowerCase()==="rtl"?{keyframes:r.rtlKeyframes||r.keyframes,options:r.options}:r}function Zt(r,o){jf.set(r,p0(o))}function Yt(r,o,i){const s=f0.get(r);if(s?.[o])return Jh(s[o],i.dir);const c=jf.get(o);return c?Jh(c,i.dir):{keyframes:[],options:{duration:0}}}function Yr(r,o){return new Promise(i=>{function s(c){c.target===r&&(r.removeEventListener(o,s),i())}r.addEventListener(o,s)})}function vn(r,o,i){return new Promise(s=>{if(i?.duration===1/0)throw new Error("Promise-based animations must be finite.");const c=r.animate(o,Pl(mr({},i),{duration:m0()?0:i.duration}));c.addEventListener("cancel",s,{once:!0}),c.addEventListener("finish",s,{once:!0})})}function ef(r){return r=r.toString().toLowerCase(),r.indexOf("ms")>-1?parseFloat(r):r.indexOf("s")>-1?parseFloat(r)*1e3:parseFloat(r)}function m0(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Bn(r){return Promise.all(r.getAnimations().map(o=>new Promise(i=>{o.cancel(),requestAnimationFrame(i)})))}var Ge=class extends et{constructor(){super(),this.localize=new Qn(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=r=>{r.key==="Escape"&&(r.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const r=ef(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),r)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const r=ef(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),r)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var r;super.disconnectedCallback(),(r=this.closeWatcher)==null||r.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(r){return this.trigger.split(" ").includes(r)}async handleOpenChange(){var r,o;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?((r=this.closeWatcher)==null||r.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await Bn(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:i,options:s}=Yt(this,"tooltip.show",{dir:this.localize.dir()});await vn(this.popup.popup,i,s),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),(o=this.closeWatcher)==null||o.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await Bn(this.body);const{keyframes:i,options:s}=Yt(this,"tooltip.hide",{dir:this.localize.dir()});await vn(this.popup.popup,i,s),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,Yr(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Yr(this,"sl-after-hide")}render(){return Se`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${ct({tooltip:!0,"tooltip--open":this.open})}
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
    `}};Ge.styles=[Pt,fv];Ge.dependencies={"sl-popup":_e};w([Ce("slot:not([name])")],Ge.prototype,"defaultSlot",2);w([Ce(".tooltip__body")],Ge.prototype,"body",2);w([Ce("sl-popup")],Ge.prototype,"popup",2);w([E()],Ge.prototype,"content",2);w([E()],Ge.prototype,"placement",2);w([E({type:Boolean,reflect:!0})],Ge.prototype,"disabled",2);w([E({type:Number})],Ge.prototype,"distance",2);w([E({type:Boolean,reflect:!0})],Ge.prototype,"open",2);w([E({type:Number})],Ge.prototype,"skidding",2);w([E()],Ge.prototype,"trigger",2);w([E({type:Boolean})],Ge.prototype,"hoist",2);w([tt("open",{waitUntilFirstUpdate:!0})],Ge.prototype,"handleOpenChange",1);w([tt(["content","distance","hoist","placement","skidding"])],Ge.prototype,"handleOptionsChange",1);w([tt("disabled")],Ge.prototype,"handleDisabledChange",1);Zt("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});Zt("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});var g0="sl-tooltip";Ge.define("sl-tooltip");var v0=Yn({tagName:g0,elementClass:Ge,react:qn,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"},displayName:"SlTooltip"}),yn=v0;function y0({onUndo:r,onRedo:o,canUndo:i,canRedo:s}){return M.jsxs(mu,{children:[M.jsx(yn,{content:"Undo",children:M.jsx(Qt,{size:"small",onClick:r,disabled:!i,children:"↶"})}),M.jsx(yn,{content:"Redo",children:M.jsx(Qt,{size:"small",onClick:o,disabled:!s,children:"↷"})})]})}function b0(r){const i=["default","cwy","radar_dbz_cwb","preci_cwb","OceanLakeLandSnow"].map((s,c)=>M.jsx("option",{children:s},c));return M.jsxs(M.Fragment,{children:[M.jsx("label",{children:"Template: "}),M.jsx("select",{title:"colormaps",onChange:s=>r.changeMap(s),style:{maxWidth:"80px"},children:i})]})}function w0({onFileImport:r,onMapChange:o}){return M.jsxs(M.Fragment,{children:[M.jsx("input",{type:"file",accept:".rgb",onChange:r}),M.jsx(b0,{changeMap:o})]})}var _0="sl-icon";yt.define("sl-icon");var x0=Yn({tagName:_0,elementClass:yt,react:qn,events:{onSlLoad:"sl-load",onSlError:"sl-error"},displayName:"SlIcon"}),Za=x0;function k0({numColors:r,onNumColorsChange:o,onNumColorsBlur:i,onReset:s,onAddColor:c}){return M.jsxs("div",{className:"selector",children:[M.jsx("label",{children:"n_colors: "}),M.jsx("input",{type:"number",step:"1",value:r,onChange:o,onBlur:i,style:{width:"3em"}}),M.jsxs(mu,{children:[M.jsx(yn,{content:"reset",children:M.jsx(Qt,{size:"small",onClick:s,title:"reset",children:M.jsx(Za,{name:"arrow-repeat"})})}),M.jsx(yn,{content:"add color",children:M.jsx(Qt,{size:"small",onClick:c,title:"add color",children:M.jsx(Za,{name:"plus-square-fill"})})})]})]})}var S0=lt`
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
`,Vf=class extends et{render(){return Se` <slot></slot> `}};Vf.styles=[Pt,S0];var C0=lt`
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
`,wu=(r="value")=>(o,i)=>{const s=o.constructor,c=s.prototype.attributeChangedCallback;s.prototype.attributeChangedCallback=function(d,f,p){var m;const b=s.getPropertyOptions(r),v=typeof b.attribute=="string"?b.attribute:r;if(d===v){const k=b.converter||Kr,z=(typeof k=="function"?k:(m=k?.fromAttribute)!=null?m:Kr.fromAttribute)(p,b.type);this[r]!==z&&(this[i]=z)}c.call(this,d,f,p)}},Bf=lt`
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
`;const Hf=fu(class extends pu{constructor(r){if(super(r),r.type!==jn.PROPERTY&&r.type!==jn.ATTRIBUTE&&r.type!==jn.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!nv(r))throw Error("`live` bindings can only contain a single expression")}render(r){return r}update(r,[o]){if(o===jt||o===Be)return o;const i=r.element,s=r.name;if(r.type===jn.PROPERTY){if(o===i[s])return jt}else if(r.type===jn.BOOLEAN_ATTRIBUTE){if(!!o===i.hasAttribute(s))return jt}else if(r.type===jn.ATTRIBUTE&&i.getAttribute(s)===o+"")return jt;return ov(r),o}});var oe=class extends et{constructor(){super(...arguments),this.formControlController=new Tl(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Rl(this,"help-text","label"),this.localize=new Qn(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var r;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((r=this.input)==null?void 0:r.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(r){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=r,this.value=this.__dateInput.value}get valueAsNumber(){var r;return this.__numberInput.value=this.value,((r=this.input)==null?void 0:r.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(r){this.__numberInput.valueAsNumber=r,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(r){r.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(r){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(r)}handleKeyDown(r){const o=r.metaKey||r.ctrlKey||r.shiftKey||r.altKey;r.key==="Enter"&&!o&&setTimeout(()=>{!r.defaultPrevented&&!r.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(r){this.input.focus(r)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(r,o,i="none"){this.input.setSelectionRange(r,o,i)}setRangeText(r,o,i,s="preserve"){const c=o??this.input.selectionStart,d=i??this.input.selectionEnd;this.input.setRangeText(r,c,d,s),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(r){this.input.setCustomValidity(r),this.formControlController.updateValidity()}render(){const r=this.hasSlotController.test("label"),o=this.hasSlotController.test("help-text"),i=this.label?!0:!!r,s=this.helpText?!0:!!o,d=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return Se`
      <div
        part="form-control"
        class=${ct({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":i,"form-control--has-help-text":s})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${ct({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
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
              name=${Z(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${Z(this.placeholder)}
              minlength=${Z(this.minlength)}
              maxlength=${Z(this.maxlength)}
              min=${Z(this.min)}
              max=${Z(this.max)}
              step=${Z(this.step)}
              .value=${Hf(this.value)}
              autocapitalize=${Z(this.autocapitalize)}
              autocomplete=${Z(this.autocomplete)}
              autocorrect=${Z(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${Z(this.pattern)}
              enterkeyhint=${Z(this.enterkeyhint)}
              inputmode=${Z(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${d?Se`
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
            ${this.passwordToggle&&!this.disabled?Se`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?Se`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:Se`
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
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};oe.styles=[Pt,Bf,C0];oe.dependencies={"sl-icon":yt};w([Ce(".input__control")],oe.prototype,"input",2);w([Ye()],oe.prototype,"hasFocus",2);w([E()],oe.prototype,"title",2);w([E({reflect:!0})],oe.prototype,"type",2);w([E()],oe.prototype,"name",2);w([E()],oe.prototype,"value",2);w([wu()],oe.prototype,"defaultValue",2);w([E({reflect:!0})],oe.prototype,"size",2);w([E({type:Boolean,reflect:!0})],oe.prototype,"filled",2);w([E({type:Boolean,reflect:!0})],oe.prototype,"pill",2);w([E()],oe.prototype,"label",2);w([E({attribute:"help-text"})],oe.prototype,"helpText",2);w([E({type:Boolean})],oe.prototype,"clearable",2);w([E({type:Boolean,reflect:!0})],oe.prototype,"disabled",2);w([E()],oe.prototype,"placeholder",2);w([E({type:Boolean,reflect:!0})],oe.prototype,"readonly",2);w([E({attribute:"password-toggle",type:Boolean})],oe.prototype,"passwordToggle",2);w([E({attribute:"password-visible",type:Boolean})],oe.prototype,"passwordVisible",2);w([E({attribute:"no-spin-buttons",type:Boolean})],oe.prototype,"noSpinButtons",2);w([E({reflect:!0})],oe.prototype,"form",2);w([E({type:Boolean,reflect:!0})],oe.prototype,"required",2);w([E()],oe.prototype,"pattern",2);w([E({type:Number})],oe.prototype,"minlength",2);w([E({type:Number})],oe.prototype,"maxlength",2);w([E()],oe.prototype,"min",2);w([E()],oe.prototype,"max",2);w([E()],oe.prototype,"step",2);w([E()],oe.prototype,"autocapitalize",2);w([E()],oe.prototype,"autocorrect",2);w([E()],oe.prototype,"autocomplete",2);w([E({type:Boolean})],oe.prototype,"autofocus",2);w([E()],oe.prototype,"enterkeyhint",2);w([E({type:Boolean,converter:{fromAttribute:r=>!(!r||r==="false"),toAttribute:r=>r?"true":"false"}})],oe.prototype,"spellcheck",2);w([E()],oe.prototype,"inputmode",2);w([tt("disabled",{waitUntilFirstUpdate:!0})],oe.prototype,"handleDisabledChange",1);w([tt("step",{waitUntilFirstUpdate:!0})],oe.prototype,"handleStepChange",1);w([tt("value",{waitUntilFirstUpdate:!0})],oe.prototype,"handleValueChange",1);function Ha(r,o){function i(c){const d=r.getBoundingClientRect(),f=r.ownerDocument.defaultView,p=d.left+f.scrollX,m=d.top+f.scrollY,b=c.pageX-p,v=c.pageY-m;o?.onMove&&o.onMove(b,v)}function s(){document.removeEventListener("pointermove",i),document.removeEventListener("pointerup",s),o?.onStop&&o.onStop()}document.addEventListener("pointermove",i,{passive:!0}),document.addEventListener("pointerup",s),o?.initialEvent instanceof PointerEvent&&i(o.initialEvent)}var E0=lt`
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
`;function*_u(r=document.activeElement){r!=null&&(yield r,"shadowRoot"in r&&r.shadowRoot&&r.shadowRoot.mode!=="closed"&&(yield*jg(_u(r.shadowRoot.activeElement))))}function Uf(){return[..._u()].pop()}var tf=new WeakMap;function Wf(r){let o=tf.get(r);return o||(o=window.getComputedStyle(r,null),tf.set(r,o)),o}function $0(r){if(typeof r.checkVisibility=="function")return r.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const o=Wf(r);return o.visibility!=="hidden"&&o.display!=="none"}function z0(r){const o=Wf(r),{overflowY:i,overflowX:s}=o;return i==="scroll"||s==="scroll"?!0:i!=="auto"||s!=="auto"?!1:r.scrollHeight>r.clientHeight&&i==="auto"||r.scrollWidth>r.clientWidth&&s==="auto"}function A0(r){const o=r.tagName.toLowerCase(),i=Number(r.getAttribute("tabindex"));if(r.hasAttribute("tabindex")&&(isNaN(i)||i<=-1)||r.hasAttribute("disabled")||r.closest("[inert]"))return!1;if(o==="input"&&r.getAttribute("type")==="radio"){const d=r.getRootNode(),f=`input[type='radio'][name="${r.getAttribute("name")}"]`,p=d.querySelector(`${f}:checked`);return p?p===r:d.querySelector(f)===r}return $0(r)?(o==="audio"||o==="video")&&r.hasAttribute("controls")||r.hasAttribute("tabindex")||r.hasAttribute("contenteditable")&&r.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(o)?!0:z0(r):!1}function P0(r){var o,i;const s=Ja(r),c=(o=s[0])!=null?o:null,d=(i=s[s.length-1])!=null?i:null;return{start:c,end:d}}function T0(r,o){var i;return((i=r.getRootNode({composed:!0}))==null?void 0:i.host)!==o}function Ja(r){const o=new WeakMap,i=[];function s(c){if(c instanceof Element){if(c.hasAttribute("inert")||c.closest("[inert]")||o.has(c))return;o.set(c,!0),!i.includes(c)&&A0(c)&&i.push(c),c instanceof HTMLSlotElement&&T0(c,r)&&c.assignedElements({flatten:!0}).forEach(d=>{s(d)}),c.shadowRoot!==null&&c.shadowRoot.mode==="open"&&s(c.shadowRoot)}for(const d of c.children)s(d)}return s(r),i.sort((c,d)=>{const f=Number(c.getAttribute("tabindex"))||0;return(Number(d.getAttribute("tabindex"))||0)-f})}var st=class extends et{constructor(){super(...arguments),this.localize=new Qn(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=r=>{this.open&&r.key==="Escape"&&(r.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=r=>{var o;if(r.key==="Escape"&&this.open&&!this.closeWatcher){r.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(r.key==="Tab"){if(this.open&&((o=document.activeElement)==null?void 0:o.tagName.toLowerCase())==="sl-menu-item"){r.preventDefault(),this.hide(),this.focusOnTrigger();return}const i=(s,c)=>{if(!s)return null;const d=s.closest(c);if(d)return d;const f=s.getRootNode();return f instanceof ShadowRoot?i(f.host,c):null};setTimeout(()=>{var s;const c=((s=this.containingElement)==null?void 0:s.getRootNode())instanceof ShadowRoot?Uf():document.activeElement;(!this.containingElement||i(c,this.containingElement.tagName.toLowerCase())!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=r=>{const o=r.composedPath();this.containingElement&&!o.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=r=>{const o=r.target;!this.stayOpenOnSelect&&o.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const r=this.trigger.assignedElements({flatten:!0})[0];typeof r?.focus=="function"&&r.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(r=>r.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(r){if([" ","Enter"].includes(r.key)){r.preventDefault(),this.handleTriggerClick();return}const o=this.getMenu();if(o){const i=o.getAllItems(),s=i[0],c=i[i.length-1];["ArrowDown","ArrowUp","Home","End"].includes(r.key)&&(r.preventDefault(),this.open||(this.show(),await this.updateComplete),i.length>0&&this.updateComplete.then(()=>{(r.key==="ArrowDown"||r.key==="Home")&&(o.setCurrentItem(s),s.focus()),(r.key==="ArrowUp"||r.key==="End")&&(o.setCurrentItem(c),c.focus())}))}}handleTriggerKeyUp(r){r.key===" "&&r.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const o=this.trigger.assignedElements({flatten:!0}).find(s=>P0(s).start);let i;if(o){switch(o.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":i=o.button;break;default:i=o}i.setAttribute("aria-haspopup","true"),i.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,Yr(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Yr(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var r;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?((r=this.closeWatcher)==null||r.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var r;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),(r=this.closeWatcher)==null||r.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await Bn(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:r,options:o}=Yt(this,"dropdown.show",{dir:this.localize.dir()});await vn(this.popup.popup,r,o),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await Bn(this);const{keyframes:r,options:o}=Yt(this,"dropdown.hide",{dir:this.localize.dir()});await vn(this.popup.popup,r,o),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return Se`
      <sl-popup
        part="base"
        exportparts="popup:base__popup"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        sync=${Z(this.sync?this.sync:void 0)}
        class=${ct({dropdown:!0,"dropdown--open":this.open})}
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
    `}};st.styles=[Pt,E0];st.dependencies={"sl-popup":_e};w([Ce(".dropdown")],st.prototype,"popup",2);w([Ce(".dropdown__trigger")],st.prototype,"trigger",2);w([Ce(".dropdown__panel")],st.prototype,"panel",2);w([E({type:Boolean,reflect:!0})],st.prototype,"open",2);w([E({reflect:!0})],st.prototype,"placement",2);w([E({type:Boolean,reflect:!0})],st.prototype,"disabled",2);w([E({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],st.prototype,"stayOpenOnSelect",2);w([E({attribute:!1})],st.prototype,"containingElement",2);w([E({type:Number})],st.prototype,"distance",2);w([E({type:Number})],st.prototype,"skidding",2);w([E({type:Boolean})],st.prototype,"hoist",2);w([E({reflect:!0})],st.prototype,"sync",2);w([tt("open",{waitUntilFirstUpdate:!0})],st.prototype,"handleOpenChange",1);Zt("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});Zt("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});var R0=lt`
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
`;function Ft(r,o,i){const s=c=>Object.is(c,-0)?0:c;return r<o?s(o):r>i?s(i):s(r)}const Kf="important",L0=" !"+Kf,In=fu(class extends pu{constructor(r){if(super(r),r.type!==jn.ATTRIBUTE||r.name!=="style"||r.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(r){return Object.keys(r).reduce((o,i)=>{const s=r[i];return s==null?o:o+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`},"")}update(r,[o]){const{style:i}=r.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(o)),this.render(o);for(const s of this.ft)o[s]==null&&(this.ft.delete(s),s.includes("-")?i.removeProperty(s):i[s]=null);for(const s in o){const c=o[s];if(c!=null){this.ft.add(s);const d=typeof c=="string"&&c.endsWith(L0);s.includes("-")||d?i.setProperty(s,d?c.slice(0,-11):c,d?Kf:""):i[s]=c}}return jt}});function Je(r,o){N0(r)&&(r="100%");const i=O0(r);return r=o===360?r:Math.min(o,Math.max(0,parseFloat(r))),i&&(r=parseInt(String(r*o),10)/100),Math.abs(r-o)<1e-6?1:(o===360?r=(r<0?r%o+o:r%o)/parseFloat(String(o)):r=r%o/parseFloat(String(o)),r)}function ml(r){return Math.min(1,Math.max(0,r))}function N0(r){return typeof r=="string"&&r.indexOf(".")!==-1&&parseFloat(r)===1}function O0(r){return typeof r=="string"&&r.indexOf("%")!==-1}function qf(r){return r=parseFloat(r),(isNaN(r)||r<0||r>1)&&(r=1),r}function gl(r){return Number(r)<=1?`${Number(r)*100}%`:r}function hr(r){return r.length===1?"0"+r:String(r)}function M0(r,o,i){return{r:Je(r,255)*255,g:Je(o,255)*255,b:Je(i,255)*255}}function nf(r,o,i){r=Je(r,255),o=Je(o,255),i=Je(i,255);const s=Math.max(r,o,i),c=Math.min(r,o,i);let d=0,f=0;const p=(s+c)/2;if(s===c)f=0,d=0;else{const m=s-c;switch(f=p>.5?m/(2-s-c):m/(s+c),s){case r:d=(o-i)/m+(o<i?6:0);break;case o:d=(i-r)/m+2;break;case i:d=(r-o)/m+4;break}d/=6}return{h:d,s:f,l:p}}function Ua(r,o,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(o-r)*(6*i):i<1/2?o:i<2/3?r+(o-r)*(2/3-i)*6:r}function D0(r,o,i){let s,c,d;if(r=Je(r,360),o=Je(o,100),i=Je(i,100),o===0)c=i,d=i,s=i;else{const f=i<.5?i*(1+o):i+o-i*o,p=2*i-f;s=Ua(p,f,r+1/3),c=Ua(p,f,r),d=Ua(p,f,r-1/3)}return{r:s*255,g:c*255,b:d*255}}function rf(r,o,i){r=Je(r,255),o=Je(o,255),i=Je(i,255);const s=Math.max(r,o,i),c=Math.min(r,o,i);let d=0;const f=s,p=s-c,m=s===0?0:p/s;if(s===c)d=0;else{switch(s){case r:d=(o-i)/p+(o<i?6:0);break;case o:d=(i-r)/p+2;break;case i:d=(r-o)/p+4;break}d/=6}return{h:d,s:m,v:f}}function F0(r,o,i){r=Je(r,360)*6,o=Je(o,100),i=Je(i,100);const s=Math.floor(r),c=r-s,d=i*(1-o),f=i*(1-c*o),p=i*(1-(1-c)*o),m=s%6,b=[i,f,d,d,p,i][m],v=[p,i,i,f,d,d][m],k=[d,d,p,i,i,f][m];return{r:b*255,g:v*255,b:k*255}}function of(r,o,i,s){const c=[hr(Math.round(r).toString(16)),hr(Math.round(o).toString(16)),hr(Math.round(i).toString(16))];return s&&c[0].startsWith(c[0].charAt(1))&&c[1].startsWith(c[1].charAt(1))&&c[2].startsWith(c[2].charAt(1))?c[0].charAt(0)+c[1].charAt(0)+c[2].charAt(0):c.join("")}function I0(r,o,i,s,c){const d=[hr(Math.round(r).toString(16)),hr(Math.round(o).toString(16)),hr(Math.round(i).toString(16)),hr(V0(s))];return c&&d[0].startsWith(d[0].charAt(1))&&d[1].startsWith(d[1].charAt(1))&&d[2].startsWith(d[2].charAt(1))&&d[3].startsWith(d[3].charAt(1))?d[0].charAt(0)+d[1].charAt(0)+d[2].charAt(0)+d[3].charAt(0):d.join("")}function j0(r,o,i,s){const c=r/100,d=o/100,f=i/100,p=s/100,m=255*(1-c)*(1-p),b=255*(1-d)*(1-p),v=255*(1-f)*(1-p);return{r:m,g:b,b:v}}function lf(r,o,i){let s=1-r/255,c=1-o/255,d=1-i/255,f=Math.min(s,c,d);return f===1?(s=0,c=0,d=0):(s=(s-f)/(1-f)*100,c=(c-f)/(1-f)*100,d=(d-f)/(1-f)*100),f*=100,{c:Math.round(s),m:Math.round(c),y:Math.round(d),k:Math.round(f)}}function V0(r){return Math.round(parseFloat(r)*255).toString(16)}function sf(r){return Et(r)/255}function Et(r){return parseInt(r,16)}function B0(r){return{r:r>>16,g:(r&65280)>>8,b:r&255}}const eu={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function H0(r){let o={r:0,g:0,b:0},i=1,s=null,c=null,d=null,f=!1,p=!1;return typeof r=="string"&&(r=K0(r)),typeof r=="object"&&(Ct(r.r)&&Ct(r.g)&&Ct(r.b)?(o=M0(r.r,r.g,r.b),f=!0,p=String(r.r).substr(-1)==="%"?"prgb":"rgb"):Ct(r.h)&&Ct(r.s)&&Ct(r.v)?(s=gl(r.s),c=gl(r.v),o=F0(r.h,s,c),f=!0,p="hsv"):Ct(r.h)&&Ct(r.s)&&Ct(r.l)?(s=gl(r.s),d=gl(r.l),o=D0(r.h,s,d),f=!0,p="hsl"):Ct(r.c)&&Ct(r.m)&&Ct(r.y)&&Ct(r.k)&&(o=j0(r.c,r.m,r.y,r.k),f=!0,p="cmyk"),Object.prototype.hasOwnProperty.call(r,"a")&&(i=r.a)),i=qf(i),{ok:f,format:r.format||p,r:Math.min(255,Math.max(o.r,0)),g:Math.min(255,Math.max(o.g,0)),b:Math.min(255,Math.max(o.b,0)),a:i}}const U0="[-\\+]?\\d+%?",W0="[-\\+]?\\d*\\.\\d+%?",Hn="(?:"+W0+")|(?:"+U0+")",Wa="[\\s|\\(]+("+Hn+")[,|\\s]+("+Hn+")[,|\\s]+("+Hn+")\\s*\\)?",vl="[\\s|\\(]+("+Hn+")[,|\\s]+("+Hn+")[,|\\s]+("+Hn+")[,|\\s]+("+Hn+")\\s*\\)?",It={CSS_UNIT:new RegExp(Hn),rgb:new RegExp("rgb"+Wa),rgba:new RegExp("rgba"+vl),hsl:new RegExp("hsl"+Wa),hsla:new RegExp("hsla"+vl),hsv:new RegExp("hsv"+Wa),hsva:new RegExp("hsva"+vl),cmyk:new RegExp("cmyk"+vl),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function K0(r){if(r=r.trim().toLowerCase(),r.length===0)return!1;let o=!1;if(eu[r])r=eu[r],o=!0;else if(r==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let i=It.rgb.exec(r);return i?{r:i[1],g:i[2],b:i[3]}:(i=It.rgba.exec(r),i?{r:i[1],g:i[2],b:i[3],a:i[4]}:(i=It.hsl.exec(r),i?{h:i[1],s:i[2],l:i[3]}:(i=It.hsla.exec(r),i?{h:i[1],s:i[2],l:i[3],a:i[4]}:(i=It.hsv.exec(r),i?{h:i[1],s:i[2],v:i[3]}:(i=It.hsva.exec(r),i?{h:i[1],s:i[2],v:i[3],a:i[4]}:(i=It.cmyk.exec(r),i?{c:i[1],m:i[2],y:i[3],k:i[4]}:(i=It.hex8.exec(r),i?{r:Et(i[1]),g:Et(i[2]),b:Et(i[3]),a:sf(i[4]),format:o?"name":"hex8"}:(i=It.hex6.exec(r),i?{r:Et(i[1]),g:Et(i[2]),b:Et(i[3]),format:o?"name":"hex"}:(i=It.hex4.exec(r),i?{r:Et(i[1]+i[1]),g:Et(i[2]+i[2]),b:Et(i[3]+i[3]),a:sf(i[4]+i[4]),format:o?"name":"hex8"}:(i=It.hex3.exec(r),i?{r:Et(i[1]+i[1]),g:Et(i[2]+i[2]),b:Et(i[3]+i[3]),format:o?"name":"hex"}:!1))))))))))}function Ct(r){return typeof r=="number"?!Number.isNaN(r):It.CSS_UNIT.test(r)}class De{constructor(o="",i={}){if(o instanceof De)return o;typeof o=="number"&&(o=B0(o)),this.originalInput=o;const s=H0(o);this.originalInput=o,this.r=s.r,this.g=s.g,this.b=s.b,this.a=s.a,this.roundA=Math.round(100*this.a)/100,this.format=i.format??s.format,this.gradientType=i.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=s.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){const o=this.toRgb();return(o.r*299+o.g*587+o.b*114)/1e3}getLuminance(){const o=this.toRgb();let i,s,c;const d=o.r/255,f=o.g/255,p=o.b/255;return d<=.03928?i=d/12.92:i=Math.pow((d+.055)/1.055,2.4),f<=.03928?s=f/12.92:s=Math.pow((f+.055)/1.055,2.4),p<=.03928?c=p/12.92:c=Math.pow((p+.055)/1.055,2.4),.2126*i+.7152*s+.0722*c}getAlpha(){return this.a}setAlpha(o){return this.a=qf(o),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){const{s:o}=this.toHsl();return o===0}toHsv(){const o=rf(this.r,this.g,this.b);return{h:o.h*360,s:o.s,v:o.v,a:this.a}}toHsvString(){const o=rf(this.r,this.g,this.b),i=Math.round(o.h*360),s=Math.round(o.s*100),c=Math.round(o.v*100);return this.a===1?`hsv(${i}, ${s}%, ${c}%)`:`hsva(${i}, ${s}%, ${c}%, ${this.roundA})`}toHsl(){const o=nf(this.r,this.g,this.b);return{h:o.h*360,s:o.s,l:o.l,a:this.a}}toHslString(){const o=nf(this.r,this.g,this.b),i=Math.round(o.h*360),s=Math.round(o.s*100),c=Math.round(o.l*100);return this.a===1?`hsl(${i}, ${s}%, ${c}%)`:`hsla(${i}, ${s}%, ${c}%, ${this.roundA})`}toHex(o=!1){return of(this.r,this.g,this.b,o)}toHexString(o=!1){return"#"+this.toHex(o)}toHex8(o=!1){return I0(this.r,this.g,this.b,this.a,o)}toHex8String(o=!1){return"#"+this.toHex8(o)}toHexShortString(o=!1){return this.a===1?this.toHexString(o):this.toHex8String(o)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){const o=Math.round(this.r),i=Math.round(this.g),s=Math.round(this.b);return this.a===1?`rgb(${o}, ${i}, ${s})`:`rgba(${o}, ${i}, ${s}, ${this.roundA})`}toPercentageRgb(){const o=i=>`${Math.round(Je(i,255)*100)}%`;return{r:o(this.r),g:o(this.g),b:o(this.b),a:this.a}}toPercentageRgbString(){const o=i=>Math.round(Je(i,255)*100);return this.a===1?`rgb(${o(this.r)}%, ${o(this.g)}%, ${o(this.b)}%)`:`rgba(${o(this.r)}%, ${o(this.g)}%, ${o(this.b)}%, ${this.roundA})`}toCmyk(){return{...lf(this.r,this.g,this.b)}}toCmykString(){const{c:o,m:i,y:s,k:c}=lf(this.r,this.g,this.b);return`cmyk(${o}, ${i}, ${s}, ${c})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;const o="#"+of(this.r,this.g,this.b,!1);for(const[i,s]of Object.entries(eu))if(o===s)return i;return!1}toString(o){const i=!!o;o=o??this.format;let s=!1;const c=this.a<1&&this.a>=0;return!i&&c&&(o.startsWith("hex")||o==="name")?o==="name"&&this.a===0?this.toName():this.toRgbString():(o==="rgb"&&(s=this.toRgbString()),o==="prgb"&&(s=this.toPercentageRgbString()),(o==="hex"||o==="hex6")&&(s=this.toHexString()),o==="hex3"&&(s=this.toHexString(!0)),o==="hex4"&&(s=this.toHex8String(!0)),o==="hex8"&&(s=this.toHex8String()),o==="name"&&(s=this.toName()),o==="hsl"&&(s=this.toHslString()),o==="hsv"&&(s=this.toHsvString()),o==="cmyk"&&(s=this.toCmykString()),s||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new De(this.toString())}lighten(o=10){const i=this.toHsl();return i.l+=o/100,i.l=ml(i.l),new De(i)}brighten(o=10){const i=this.toRgb();return i.r=Math.max(0,Math.min(255,i.r-Math.round(255*-(o/100)))),i.g=Math.max(0,Math.min(255,i.g-Math.round(255*-(o/100)))),i.b=Math.max(0,Math.min(255,i.b-Math.round(255*-(o/100)))),new De(i)}darken(o=10){const i=this.toHsl();return i.l-=o/100,i.l=ml(i.l),new De(i)}tint(o=10){return this.mix("white",o)}shade(o=10){return this.mix("black",o)}desaturate(o=10){const i=this.toHsl();return i.s-=o/100,i.s=ml(i.s),new De(i)}saturate(o=10){const i=this.toHsl();return i.s+=o/100,i.s=ml(i.s),new De(i)}greyscale(){return this.desaturate(100)}spin(o){const i=this.toHsl(),s=(i.h+o)%360;return i.h=s<0?360+s:s,new De(i)}mix(o,i=50){const s=this.toRgb(),c=new De(o).toRgb(),d=i/100,f={r:(c.r-s.r)*d+s.r,g:(c.g-s.g)*d+s.g,b:(c.b-s.b)*d+s.b,a:(c.a-s.a)*d+s.a};return new De(f)}analogous(o=6,i=30){const s=this.toHsl(),c=360/i,d=[this];for(s.h=(s.h-(c*o>>1)+720)%360;--o;)s.h=(s.h+c)%360,d.push(new De(s));return d}complement(){const o=this.toHsl();return o.h=(o.h+180)%360,new De(o)}monochromatic(o=6){const i=this.toHsv(),{h:s}=i,{s:c}=i;let{v:d}=i;const f=[],p=1/o;for(;o--;)f.push(new De({h:s,s:c,v:d})),d=(d+p)%1;return f}splitcomplement(){const o=this.toHsl(),{h:i}=o;return[this,new De({h:(i+72)%360,s:o.s,l:o.l}),new De({h:(i+216)%360,s:o.s,l:o.l})]}onBackground(o){const i=this.toRgb(),s=new De(o).toRgb(),c=i.a+s.a*(1-i.a);return new De({r:(i.r*i.a+s.r*s.a*(1-i.a))/c,g:(i.g*i.a+s.g*s.a*(1-i.a))/c,b:(i.b*i.a+s.b*s.a*(1-i.a))/c,a:c})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(o){const i=this.toHsl(),{h:s}=i,c=[this],d=360/o;for(let f=1;f<o;f++)c.push(new De({h:(s+f*d)%360,s:i.s,l:i.l}));return c}equals(o){const i=new De(o);return this.format==="cmyk"||i.format==="cmyk"?this.toCmykString()===i.toCmykString():this.toRgbString()===i.toRgbString()}}var af="EyeDropper"in window,ce=class extends et{constructor(){super(),this.formControlController=new Tl(this),this.isSafeValue=!1,this.localize=new Qn(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.handleFocusOut=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.input.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")})}handleFormatToggle(){const r=["hex","rgb","hsl","hsv"],o=(r.indexOf(this.format)+1)%r.length;this.format=r[o],this.setColor(this.value),this.emit("sl-change"),this.emit("sl-input")}handleAlphaDrag(r){const o=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),i=o.querySelector(".color-picker__slider-handle"),{width:s}=o.getBoundingClientRect();let c=this.value,d=this.value;i.focus(),r.preventDefault(),Ha(o,{onMove:f=>{this.alpha=Ft(f/s*100,0,100),this.syncValues(),this.value!==d&&(d=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==c&&(c=this.value,this.emit("sl-change"))},initialEvent:r})}handleHueDrag(r){const o=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),i=o.querySelector(".color-picker__slider-handle"),{width:s}=o.getBoundingClientRect();let c=this.value,d=this.value;i.focus(),r.preventDefault(),Ha(o,{onMove:f=>{this.hue=Ft(f/s*360,0,360),this.syncValues(),this.value!==d&&(d=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==c&&(c=this.value,this.emit("sl-change"))},initialEvent:r})}handleGridDrag(r){const o=this.shadowRoot.querySelector(".color-picker__grid"),i=o.querySelector(".color-picker__grid-handle"),{width:s,height:c}=o.getBoundingClientRect();let d=this.value,f=this.value;i.focus(),r.preventDefault(),this.isDraggingGridHandle=!0,Ha(o,{onMove:(p,m)=>{this.saturation=Ft(p/s*100,0,100),this.brightness=Ft(100-m/c*100,0,100),this.syncValues(),this.value!==f&&(f=this.value,this.emit("sl-input"))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==d&&(d=this.value,this.emit("sl-change"))},initialEvent:r})}handleAlphaKeyDown(r){const o=r.shiftKey?10:1,i=this.value;r.key==="ArrowLeft"&&(r.preventDefault(),this.alpha=Ft(this.alpha-o,0,100),this.syncValues()),r.key==="ArrowRight"&&(r.preventDefault(),this.alpha=Ft(this.alpha+o,0,100),this.syncValues()),r.key==="Home"&&(r.preventDefault(),this.alpha=0,this.syncValues()),r.key==="End"&&(r.preventDefault(),this.alpha=100,this.syncValues()),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleHueKeyDown(r){const o=r.shiftKey?10:1,i=this.value;r.key==="ArrowLeft"&&(r.preventDefault(),this.hue=Ft(this.hue-o,0,360),this.syncValues()),r.key==="ArrowRight"&&(r.preventDefault(),this.hue=Ft(this.hue+o,0,360),this.syncValues()),r.key==="Home"&&(r.preventDefault(),this.hue=0,this.syncValues()),r.key==="End"&&(r.preventDefault(),this.hue=360,this.syncValues()),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleGridKeyDown(r){const o=r.shiftKey?10:1,i=this.value;r.key==="ArrowLeft"&&(r.preventDefault(),this.saturation=Ft(this.saturation-o,0,100),this.syncValues()),r.key==="ArrowRight"&&(r.preventDefault(),this.saturation=Ft(this.saturation+o,0,100),this.syncValues()),r.key==="ArrowUp"&&(r.preventDefault(),this.brightness=Ft(this.brightness+o,0,100),this.syncValues()),r.key==="ArrowDown"&&(r.preventDefault(),this.brightness=Ft(this.brightness-o,0,100),this.syncValues()),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputChange(r){const o=r.target,i=this.value;r.stopPropagation(),this.input.value?(this.setColor(o.value),o.value=this.value):this.value="",this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputInput(r){this.formControlController.updateValidity(),r.stopPropagation()}handleInputKeyDown(r){if(r.key==="Enter"){const o=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==o&&(this.emit("sl-change"),this.emit("sl-input")),setTimeout(()=>this.input.select())):this.hue=0}}handleInputInvalid(r){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(r)}handleTouchMove(r){r.preventDefault()}parseColor(r){const o=new De(r);if(!o.isValid)return null;const i=o.toHsl(),s={h:i.h,s:i.s*100,l:i.l*100,a:i.a},c=o.toRgb(),d=o.toHexString(),f=o.toHex8String(),p=o.toHsv(),m={h:p.h,s:p.s*100,v:p.v*100,a:p.a};return{hsl:{h:s.h,s:s.s,l:s.l,string:this.setLetterCase(`hsl(${Math.round(s.h)}, ${Math.round(s.s)}%, ${Math.round(s.l)}%)`)},hsla:{h:s.h,s:s.s,l:s.l,a:s.a,string:this.setLetterCase(`hsla(${Math.round(s.h)}, ${Math.round(s.s)}%, ${Math.round(s.l)}%, ${s.a.toFixed(2).toString()})`)},hsv:{h:m.h,s:m.s,v:m.v,string:this.setLetterCase(`hsv(${Math.round(m.h)}, ${Math.round(m.s)}%, ${Math.round(m.v)}%)`)},hsva:{h:m.h,s:m.s,v:m.v,a:m.a,string:this.setLetterCase(`hsva(${Math.round(m.h)}, ${Math.round(m.s)}%, ${Math.round(m.v)}%, ${m.a.toFixed(2).toString()})`)},rgb:{r:c.r,g:c.g,b:c.b,string:this.setLetterCase(`rgb(${Math.round(c.r)}, ${Math.round(c.g)}, ${Math.round(c.b)})`)},rgba:{r:c.r,g:c.g,b:c.b,a:c.a,string:this.setLetterCase(`rgba(${Math.round(c.r)}, ${Math.round(c.g)}, ${Math.round(c.b)}, ${c.a.toFixed(2).toString()})`)},hex:this.setLetterCase(d),hexa:this.setLetterCase(f)}}setColor(r){const o=this.parseColor(r);return o===null?!1:(this.hue=o.hsva.h,this.saturation=o.hsva.s,this.brightness=o.hsva.v,this.alpha=this.opacity?o.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(r){return typeof r!="string"?"":this.uppercase?r.toUpperCase():r.toLowerCase()}async syncValues(){const r=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);r!==null&&(this.format==="hsl"?this.inputValue=this.opacity?r.hsla.string:r.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?r.rgba.string:r.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?r.hsva.string:r.hsv.string:this.inputValue=this.opacity?r.hexa:r.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){if(!af)return;new EyeDropper().open().then(o=>{const i=this.value;this.setColor(o.sRGBHex),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}).catch(()=>{})}selectSwatch(r){const o=this.value;this.disabled||(this.setColor(r),this.value!==o&&(this.emit("sl-change"),this.emit("sl-input")))}getHexString(r,o,i,s=100){const c=new De(`hsva(${r}, ${o}%, ${i}%, ${s/100})`);return c.isValid?c.toHex8String():""}stopNestedEventPropagation(r){r.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(r,o){if(this.isEmpty=!o,o||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){const i=this.parseColor(o);i!==null?(this.inputValue=this.value,this.hue=i.hsva.h,this.saturation=i.hsva.s,this.brightness=i.hsva.v,this.alpha=i.hsva.a*100,this.syncValues()):this.inputValue=r??""}}focus(r){this.inline?this.base.focus(r):this.trigger.focus(r)}blur(){var r;const o=this.inline?this.base:this.trigger;this.hasFocus&&(o.focus({preventScroll:!0}),o.blur()),(r=this.dropdown)!=null&&r.open&&this.dropdown.hide()}getFormattedValue(r="hex"){const o=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(o===null)return"";switch(r){case"hex":return o.hex;case"hexa":return o.hexa;case"rgb":return o.rgb.string;case"rgba":return o.rgba.string;case"hsl":return o.hsl.string;case"hsla":return o.hsla.string;case"hsv":return o.hsv.string;case"hsva":return o.hsva.string;default:return""}}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.inline&&!this.validity.valid?(this.dropdown.show(),this.addEventListener("sl-after-show",()=>this.input.reportValidity(),{once:!0}),this.disabled||this.formControlController.emitInvalidEvent(),!1):this.input.reportValidity()}setCustomValidity(r){this.input.setCustomValidity(r),this.formControlController.updateValidity()}render(){const r=this.saturation,o=100-this.brightness,i=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(c=>c.trim()!==""),s=Se`
      <div
        part="base"
        class=${ct({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled,"color-picker--focused":this.hasFocus})}
        aria-disabled=${this.disabled?"true":"false"}
        aria-labelledby="label"
        tabindex=${this.inline?"0":"-1"}
      >
        ${this.inline?Se`
              <sl-visually-hidden id="label">
                <slot name="label">${this.label}</slot>
              </sl-visually-hidden>
            `:null}

        <div
          part="grid"
          class="color-picker__grid"
          style=${In({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${ct({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${In({top:`${o}%`,left:`${r}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${Z(this.disabled?void 0:"0")}
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
                style=${In({left:`${this.hue===0?0:100/(360/this.hue)}%`})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${Z(this.disabled?void 0:"0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?Se`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${In({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="color-picker__slider-handle"
                      style=${In({left:`${this.alpha}%`})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${Z(this.disabled?void 0:"0")}
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
            style=${In({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
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
            ${this.noFormatToggle?"":Se`
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
            ${af?Se`
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

        ${i.length>0?Se`
              <div part="swatches" class="color-picker__swatches">
                ${i.map(c=>{const d=this.parseColor(c);return d?Se`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${Z(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${c}
                      @click=${()=>this.selectSwatch(c)}
                      @keydown=${f=>!this.disabled&&f.key==="Enter"&&this.setColor(d.hexa)}
                    >
                      <div
                        class="color-picker__swatch-color"
                        style=${In({backgroundColor:d.hexa})}
                      ></div>
                    </div>
                  `:(console.error(`Unable to parse swatch color: "${c}"`,this),"")})}
              </div>
            `:""}
      </div>
    `;return this.inline?s:Se`
      <sl-dropdown
        class="color-dropdown"
        aria-disabled=${this.disabled?"true":"false"}
        .containingElement=${this}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        @sl-after-hide=${this.handleAfterHide}
      >
        <button
          part="trigger"
          slot="trigger"
          class=${ct({"color-dropdown__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":this.size==="small","color-dropdown__trigger--medium":this.size==="medium","color-dropdown__trigger--large":this.size==="large","color-dropdown__trigger--empty":this.isEmpty,"color-dropdown__trigger--focused":this.hasFocus,"color-picker__transparent-bg":!0})}
          style=${In({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${s}
      </sl-dropdown>
    `}};ce.styles=[Pt,R0];ce.dependencies={"sl-button-group":gr,"sl-button":ve,"sl-dropdown":st,"sl-icon":yt,"sl-input":oe,"sl-visually-hidden":Vf};w([Ce('[part~="base"]')],ce.prototype,"base",2);w([Ce('[part~="input"]')],ce.prototype,"input",2);w([Ce(".color-dropdown")],ce.prototype,"dropdown",2);w([Ce('[part~="preview"]')],ce.prototype,"previewButton",2);w([Ce('[part~="trigger"]')],ce.prototype,"trigger",2);w([Ye()],ce.prototype,"hasFocus",2);w([Ye()],ce.prototype,"isDraggingGridHandle",2);w([Ye()],ce.prototype,"isEmpty",2);w([Ye()],ce.prototype,"inputValue",2);w([Ye()],ce.prototype,"hue",2);w([Ye()],ce.prototype,"saturation",2);w([Ye()],ce.prototype,"brightness",2);w([Ye()],ce.prototype,"alpha",2);w([E()],ce.prototype,"value",2);w([wu()],ce.prototype,"defaultValue",2);w([E()],ce.prototype,"label",2);w([E()],ce.prototype,"format",2);w([E({type:Boolean,reflect:!0})],ce.prototype,"inline",2);w([E({reflect:!0})],ce.prototype,"size",2);w([E({attribute:"no-format-toggle",type:Boolean})],ce.prototype,"noFormatToggle",2);w([E()],ce.prototype,"name",2);w([E({type:Boolean,reflect:!0})],ce.prototype,"disabled",2);w([E({type:Boolean})],ce.prototype,"hoist",2);w([E({type:Boolean})],ce.prototype,"opacity",2);w([E({type:Boolean})],ce.prototype,"uppercase",2);w([E()],ce.prototype,"swatches",2);w([E({reflect:!0})],ce.prototype,"form",2);w([E({type:Boolean,reflect:!0})],ce.prototype,"required",2);w([Hg({passive:!1})],ce.prototype,"handleTouchMove",1);w([tt("format",{waitUntilFirstUpdate:!0})],ce.prototype,"handleFormatChange",1);w([tt("opacity",{waitUntilFirstUpdate:!0})],ce.prototype,"handleOpacityChange",1);w([tt("value")],ce.prototype,"handleValueChange",1);var q0="sl-color-picker";ce.define("sl-color-picker");var Q0=Yn({tagName:q0,elementClass:ce,react:qn,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlColorPicker"}),Y0=Q0;function G0({rgb:r,rank:o,colorId:i,numColors:s,onSetBlankColor:c,onSwapUp:d,onSwapDown:f,onColorChange:p,onAddColorDown:m,onDeleteColor:b,onBlur:v}){const k=i===0,A=i===s-1,z=r===""?"":`rgb(${r[0]},${r[1]},${r[2]})`;return M.jsxs("div",{style:{flex:"0 0 auto",display:"flex",alignItems:"center",padding:"1px"},children:[M.jsxs("span",{style:{display:"inline-block",width:"2em"},children:[o,"."]}),M.jsx(Y0,{size:"small",value:z,onSlInput:P=>p(P,i),onSlBlur:v}),M.jsxs(mu,{children:[M.jsx(yn,{content:"set color to blank",children:M.jsx(Qt,{size:"small",onClick:()=>c(i),disabled:k||A,children:"#"})}),M.jsx(yn,{content:"swap up",children:M.jsx(Qt,{size:"small",onClick:()=>d(i),disabled:k,children:"▲"})}),M.jsx(yn,{content:"swap down",children:M.jsx(Qt,{size:"small",onClick:()=>f(i),disabled:A,children:"▼"})}),M.jsx(yn,{content:"add color down",children:M.jsx(Qt,{size:"small",onClick:()=>m(i),children:M.jsx(Za,{name:"plus-square-fill"})})}),M.jsx(yn,{content:"delete color",children:M.jsx(Qt,{size:"small",onClick:()=>b(i),children:"X"})})]}),M.jsx("br",{})]})}function X0({colormap:r,onSetBlankColor:o,onSwapUp:i,onSwapDown:s,onColorChange:c,onAddColorDown:d,onDeleteColor:f,onColorPickerBlur:p}){return M.jsx(M.Fragment,{children:r.map((m,b)=>M.jsx(G0,{rgb:m,rank:b+1,colorId:b,numColors:r.length,onSetBlankColor:o,onSwapUp:i,onSwapDown:s,onColorChange:c,onAddColorDown:d,onDeleteColor:f,onBlur:p},b))})}var Ko=[],Z0=class{constructor(r){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=o=>{var i;if(o.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const s=Uf();if(this.previousFocus=s,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;o.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const c=Ja(this.element);let d=c.findIndex(p=>p===s);this.previousFocus=this.currentFocus;const f=this.tabDirection==="forward"?1:-1;for(;;){d+f>=c.length?d=0:d+f<0?d=c.length-1:d+=f,this.previousFocus=this.currentFocus;const p=c[d];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||p&&this.possiblyHasTabbableChildren(p))return;o.preventDefault(),this.currentFocus=p,(i=this.currentFocus)==null||i.focus({preventScroll:!1});const m=[..._u()];if(m.includes(this.currentFocus)||!m.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=r,this.elementsWithTabbableControls=["iframe"]}activate(){Ko.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){Ko=Ko.filter(r=>r!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return Ko[Ko.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const r=Ja(this.element);if(!this.element.matches(":focus-within")){const o=r[0],i=r[r.length-1],s=this.tabDirection==="forward"?o:i;typeof s?.focus=="function"&&(this.currentFocus=s,s.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(r){return this.elementsWithTabbableControls.includes(r.tagName.toLowerCase())||r.hasAttribute("controls")}},tu=new Set;function J0(){const r=document.documentElement.clientWidth;return Math.abs(window.innerWidth-r)}function ey(){const r=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(r)||!r?0:r}function uf(r){if(tu.add(r),!document.documentElement.classList.contains("sl-scroll-lock")){const o=J0()+ey();let i=getComputedStyle(document.documentElement).scrollbarGutter;(!i||i==="auto")&&(i="stable"),o<2&&(i=""),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",i),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${o}px`)}}function cf(r){tu.delete(r),tu.size===0&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}var ty=lt`
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
`,ny=r=>{var o;const{activeElement:i}=document;i&&r.contains(i)&&((o=document.activeElement)==null||o.blur())},ry=lt`
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
`,Tt=class extends et{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(r){this.disabled&&(r.preventDefault(),r.stopPropagation())}click(){this.button.click()}focus(r){this.button.focus(r)}blur(){this.button.blur()}render(){const r=!!this.href,o=r?Sl`a`:Sl`button`;return wl`
      <${o}
        part="base"
        class=${ct({"icon-button":!0,"icon-button--disabled":!r&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${Z(r?void 0:this.disabled)}
        type=${Z(r?void 0:"button")}
        href=${Z(r?this.href:void 0)}
        target=${Z(r?this.target:void 0)}
        download=${Z(r?this.download:void 0)}
        rel=${Z(r&&this.target?"noreferrer noopener":void 0)}
        role=${Z(r?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${Z(this.name)}
          library=${Z(this.library)}
          src=${Z(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${o}>
    `}};Tt.styles=[Pt,ry];Tt.dependencies={"sl-icon":yt};w([Ce(".icon-button")],Tt.prototype,"button",2);w([Ye()],Tt.prototype,"hasFocus",2);w([E()],Tt.prototype,"name",2);w([E()],Tt.prototype,"library",2);w([E()],Tt.prototype,"src",2);w([E()],Tt.prototype,"href",2);w([E()],Tt.prototype,"target",2);w([E()],Tt.prototype,"download",2);w([E()],Tt.prototype,"label",2);w([E({type:Boolean,reflect:!0})],Tt.prototype,"disabled",2);var Jt=class extends et{constructor(){super(...arguments),this.hasSlotController=new Rl(this,"footer"),this.localize=new Qn(this),this.modal=new Z0(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=r=>{r.key==="Escape"&&this.modal.isActive()&&this.open&&(r.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),uf(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),cf(this),this.removeOpenListeners()}requestClose(r){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:r}}).defaultPrevented){const i=Yt(this,"dialog.denyClose",{dir:this.localize.dir()});vn(this.panel,i.keyframes,i.options);return}this.hide()}addOpenListeners(){var r;"CloseWatcher"in window?((r=this.closeWatcher)==null||r.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var r;(r=this.closeWatcher)==null||r.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),uf(this);const r=this.querySelector("[autofocus]");r&&r.removeAttribute("autofocus"),await Promise.all([Bn(this.dialog),Bn(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(r?r.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),r&&r.setAttribute("autofocus","")});const o=Yt(this,"dialog.show",{dir:this.localize.dir()}),i=Yt(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([vn(this.panel,o.keyframes,o.options),vn(this.overlay,i.keyframes,i.options)]),this.emit("sl-after-show")}else{ny(this),this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([Bn(this.dialog),Bn(this.overlay)]);const r=Yt(this,"dialog.hide",{dir:this.localize.dir()}),o=Yt(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([vn(this.overlay,o.keyframes,o.options).then(()=>{this.overlay.hidden=!0}),vn(this.panel,r.keyframes,r.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,cf(this);const i=this.originalTrigger;typeof i?.focus=="function"&&setTimeout(()=>i.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,Yr(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Yr(this,"sl-after-hide")}render(){return Se`
      <div
        part="base"
        class=${ct({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${Z(this.noHeader?this.label:void 0)}
          aria-labelledby=${Z(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":Se`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
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
    `}};Jt.styles=[Pt,ty];Jt.dependencies={"sl-icon-button":Tt};w([Ce(".dialog")],Jt.prototype,"dialog",2);w([Ce(".dialog__panel")],Jt.prototype,"panel",2);w([Ce(".dialog__overlay")],Jt.prototype,"overlay",2);w([E({type:Boolean,reflect:!0})],Jt.prototype,"open",2);w([E({reflect:!0})],Jt.prototype,"label",2);w([E({attribute:"no-header",type:Boolean,reflect:!0})],Jt.prototype,"noHeader",2);w([tt("open",{waitUntilFirstUpdate:!0})],Jt.prototype,"handleOpenChange",1);Zt("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});Zt("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});Zt("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});Zt("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});Zt("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var oy="sl-dialog";Jt.define("sl-dialog");var iy=Yn({tagName:oy,elementClass:Jt,react:qn,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInitialFocus:"sl-initial-focus",onSlRequestClose:"sl-request-close"},displayName:"SlDialog"}),Qf=iy,ly=lt`
  :host {
    display: block;
  }

  .textarea {
    display: grid;
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

  .textarea__control,
  .textarea__size-adjuster {
    grid-area: 1 / 1 / 2 / 2;
  }

  .textarea__size-adjuster {
    visibility: hidden;
    pointer-events: none;
    opacity: 0;
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
`,fe=class extends et{constructor(){super(...arguments),this.formControlController=new Tl(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Rl(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){var r;super.disconnectedCallback(),this.input&&((r=this.resizeObserver)==null||r.unobserve(this.input))}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(r){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(r)}setTextareaHeight(){this.resize==="auto"?(this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=""}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(r){this.input.focus(r)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(r){if(r){typeof r.top=="number"&&(this.input.scrollTop=r.top),typeof r.left=="number"&&(this.input.scrollLeft=r.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(r,o,i="none"){this.input.setSelectionRange(r,o,i)}setRangeText(r,o,i,s="preserve"){const c=o??this.input.selectionStart,d=i??this.input.selectionEnd;this.input.setRangeText(r,c,d,s),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(r){this.input.setCustomValidity(r),this.formControlController.updateValidity()}render(){const r=this.hasSlotController.test("label"),o=this.hasSlotController.test("help-text"),i=this.label?!0:!!r,s=this.helpText?!0:!!o;return Se`
      <div
        part="form-control"
        class=${ct({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":i,"form-control--has-help-text":s})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${ct({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${Z(this.name)}
              .value=${Hf(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${Z(this.placeholder)}
              rows=${Z(this.rows)}
              minlength=${Z(this.minlength)}
              maxlength=${Z(this.maxlength)}
              autocapitalize=${Z(this.autocapitalize)}
              autocorrect=${Z(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${Z(this.spellcheck)}
              enterkeyhint=${Z(this.enterkeyhint)}
              inputmode=${Z(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
            <!-- This "adjuster" exists to prevent layout shifting. https://github.com/shoelace-style/shoelace/issues/2180 -->
            <div part="textarea-adjuster" class="textarea__size-adjuster" ?hidden=${this.resize!=="auto"}></div>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};fe.styles=[Pt,Bf,ly];w([Ce(".textarea__control")],fe.prototype,"input",2);w([Ce(".textarea__size-adjuster")],fe.prototype,"sizeAdjuster",2);w([Ye()],fe.prototype,"hasFocus",2);w([E()],fe.prototype,"title",2);w([E()],fe.prototype,"name",2);w([E()],fe.prototype,"value",2);w([E({reflect:!0})],fe.prototype,"size",2);w([E({type:Boolean,reflect:!0})],fe.prototype,"filled",2);w([E()],fe.prototype,"label",2);w([E({attribute:"help-text"})],fe.prototype,"helpText",2);w([E()],fe.prototype,"placeholder",2);w([E({type:Number})],fe.prototype,"rows",2);w([E()],fe.prototype,"resize",2);w([E({type:Boolean,reflect:!0})],fe.prototype,"disabled",2);w([E({type:Boolean,reflect:!0})],fe.prototype,"readonly",2);w([E({reflect:!0})],fe.prototype,"form",2);w([E({type:Boolean,reflect:!0})],fe.prototype,"required",2);w([E({type:Number})],fe.prototype,"minlength",2);w([E({type:Number})],fe.prototype,"maxlength",2);w([E()],fe.prototype,"autocapitalize",2);w([E()],fe.prototype,"autocorrect",2);w([E()],fe.prototype,"autocomplete",2);w([E({type:Boolean})],fe.prototype,"autofocus",2);w([E()],fe.prototype,"enterkeyhint",2);w([E({type:Boolean,converter:{fromAttribute:r=>!(!r||r==="false"),toAttribute:r=>r?"true":"false"}})],fe.prototype,"spellcheck",2);w([E()],fe.prototype,"inputmode",2);w([wu()],fe.prototype,"defaultValue",2);w([tt("disabled",{waitUntilFirstUpdate:!0})],fe.prototype,"handleDisabledChange",1);w([tt("rows",{waitUntilFirstUpdate:!0})],fe.prototype,"handleRowsChange",1);w([tt("value",{waitUntilFirstUpdate:!0})],fe.prototype,"handleValueChange",1);var sy="sl-textarea";fe.define("sl-textarea");var ay=Yn({tagName:sy,elementClass:fe,react:qn,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlTextarea"}),xu=ay,Yf=Object.defineProperty,df=Object.getOwnPropertySymbols,uy=Object.prototype.hasOwnProperty,cy=Object.prototype.propertyIsEnumerable,hf=(r,o,i)=>o in r?Yf(r,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[o]=i,dy=(r,o)=>{for(var i in o||(o={}))uy.call(o,i)&&hf(r,i,o[i]);if(df)for(var i of df(o))cy.call(o,i)&&hf(r,i,o[i]);return r},bt=(r,o,i,s)=>{for(var c=void 0,d=r.length-1,f;d>=0;d--)(f=r[d])&&(c=f(o,i,c)||c);return c&&Yf(o,i,c),c},ei=class extends Ur{constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([r,o])=>{this.constructor.define(r,o)})}emit(r,o){const i=new CustomEvent(r,dy({bubbles:!0,cancelable:!1,composed:!0,detail:{}},o));return this.dispatchEvent(i),i}static define(r,o=this,i={}){const s=customElements.get(r);if(!s){customElements.define(r,class extends o{},i);return}let c=" (unknown version)",d=c;"version"in o&&o.version&&(c=" v"+o.version),"version"in s&&s.version&&(d=" v"+s.version),!(c&&d&&c===d)&&console.warn(`Attempted to register <${r}>${c}, but <${r}>${d} has already been registered.`)}};ei.version="2.8.0";ei.dependencies={};bt([E()],ei.prototype,"dir");bt([E()],ei.prototype,"lang");var hy=lt`
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
`;kl("https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.14.0/cdn/");var dt=class extends ei{constructor(){super(...arguments),this.localize=new Sf(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.hoist=!1,this.hasFocus=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}click(){this.button.click()}focus(r){this.button.focus(r)}blur(){this.button.blur()}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let r=this.value;if(this.from){const o=this.getRootNode(),i=this.from.includes("."),s=this.from.includes("[")&&this.from.includes("]");let c=this.from,d="";i?[c,d]=this.from.trim().split("."):s&&([c,d]=this.from.trim().replace(/\]$/,"").split("["));const f="getElementById"in o?o.getElementById(c):null;f?s?r=f.getAttribute(d)||"":i?r=f[d]||"":r=f.textContent||"":(this.showStatus("error"),this.emit("sl-error"))}if(!r)this.showStatus("error"),this.emit("sl-error");else try{await navigator.clipboard.writeText(r),this.showStatus("success"),this.emit("sl-copy",{detail:{value:r}})}catch{this.showStatus("error"),this.emit("sl-error")}}async showStatus(r){const o=r==="success"?this.successIcon:this.errorIcon,i=Yt(this,"copy.in",{dir:"ltr"}),s=Yt(this,"copy.out",{dir:"ltr"});await this.copyIcon.animate(s.keyframes,s.options).finished,this.copyIcon.hidden=!0,this.status=r,o.hidden=!1,await o.animate(i.keyframes,i.options).finished,setTimeout(async()=>{await o.animate(s.keyframes,s.options).finished,o.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await this.copyIcon.animate(i.keyframes,i.options).finished,this.isCopying=!1},this.feedbackDuration)}render(){return Se`
        <button
        class=${ct({"copy-button":!0,"copy-button--success":this.status==="success","copy-button--error":this.status==="error","copy-button__button":!0,"icon-button--focused":this.hasFocus})}
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
      `}};dt.styles=hy;bt([Ce(".copy-button")],dt.prototype,"button");bt([Ye()],dt.prototype,"hasFocus");bt([Ce('slot[name="copy-icon"]')],dt.prototype,"copyIcon");bt([Ce('slot[name="success-icon"]')],dt.prototype,"successIcon");bt([Ce('slot[name="error-icon"]')],dt.prototype,"errorIcon");bt([Ye()],dt.prototype,"isCopying");bt([Ye()],dt.prototype,"status");bt([E()],dt.prototype,"value");bt([E()],dt.prototype,"from");bt([E({type:Boolean,reflect:!0})],dt.prototype,"disabled");bt([E({attribute:"feedback-duration",type:Number})],dt.prototype,"feedbackDuration");bt([E({type:Boolean})],dt.prototype,"hoist");Zt("copy.in",{keyframes:[{scale:".25",opacity:".25"},{scale:"1",opacity:"1"}],options:{duration:100}});Zt("copy.out",{keyframes:[{scale:"1",opacity:"1"},{scale:".25",opacity:"0"}],options:{duration:100}});var fy="sl-copy-button-adjust";dt.define("sl-copy-button-adjust");var py=Yn({tagName:fy,elementClass:dt,react:qn,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus",onSlCopy:"sl-copy",onSlError:"sl-error"},displayName:"SlCopyButtonAdjust"}),Gf=py;kl("https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.14.0/cdn/");function my({colorOutRgb:r}){const[o,i]=zt.useState(!1),s=gy(r);return M.jsxs(M.Fragment,{children:[M.jsx(Qt,{size:"small",onClick:()=>i(!0),children:"Python code"}),M.jsxs(Qf,{label:"Python code",open:o,onSlAfterHide:()=>i(!1),style:{"--width":"100%",textAlign:"left"},children:[M.jsx(Gf,{slot:"header-actions",style:{flex:"0 0 auto",display:"flex",alignItems:"center",fontSize:"var(--sl-font-size-medium)"},value:s}),M.jsx(xu,{className:"code-area",value:s,rows:15,size:"small",readOnly:!0})]})]})}function gy(r){let o="";return o+=`def manual_cmap():
`,o+=`    import numpy as np
`,o+=`    from matplotlib.colors import LinearSegmentedColormap
`,o+=`    colors = [
`,r.map(i=>{o+="        ["+i[0]+","+i[1]+","+i[2]+`],
`}),o+=`    ]
`,o+=`    return LinearSegmentedColormap.from_list("manual_cmap",np.array(colors)/255)
`,o+="# cmap = manual_cmap()",o}const vy=["RGB","Hex"];function yy({colorOutRgb:r}){const[o,i]=zt.useState(!1),[s,c]=zt.useState("RGB"),[d,f]=zt.useState(",");function p(v){c(v.target.value)}let m="";return s==="RGB"&&r.map(v=>{m+=v[0]+d+v[1]+d+v[2]+`
`}),s==="Hex"&&r.map(v=>{m+=by(v)+`
`}),M.jsxs(M.Fragment,{children:[M.jsx(Qt,{size:"small",onClick:()=>i(!0),children:"Color Array"}),M.jsxs(Qf,{label:"Color Array",open:o,onSlAfterHide:()=>i(!1),style:{"--width":"100%",textAlign:"left"},children:[M.jsx(Gf,{slot:"header-actions",value:m,style:{flex:"0 0 auto",display:"flex",alignItems:"center",fontSize:"var(--sl-font-size-medium)"}}),M.jsxs("div",{children:[M.jsx("label",{children:"output type: "}),M.jsx("select",{title:"colortype",onChange:v=>p(v),children:vy.map((v,k)=>M.jsx("option",{children:v},k))}),M.jsx("label",{children:"separator: "}),M.jsxs("select",{title:"separator",onChange:v=>f(v.target.value),children:[M.jsx("option",{value:",",children:","}),M.jsx("option",{value:"	",children:"tab"}),M.jsx("option",{value:" ",children:"space"})]})]}),M.jsx("div",{style:{position:"relative"},children:M.jsx(xu,{className:"code-area",value:m,rows:r.length+1,cols:25,readOnly:!0})})]})]})}function by(r){let o=(+r[0]).toString(16),i=(+r[1]).toString(16),s=(+r[2]).toString(16);return o.length==1&&(o="0"+o),i.length==1&&(i="0"+i),s.length==1&&(s="0"+s),"#"+o+i+s}function ff(r){const o=r.split(`
`),i=1e3,s=[];let c=0,d=-1;function f(m){return!isNaN(parseFloat(m))&&isFinite(m)}for(let m=0;m<o.length&&c<i;m++){let b=o[m].trim();b.length===0&&(b="#");const v=b.split(/\s+/);if(v.length>=3){let k=-1,A=-1,z=-1;f(v[0])&&(k=parseFloat(v[0])),f(v[1])&&(A=parseFloat(v[1])),f(v[2])&&(z=parseFloat(v[2]));let P=-1;if(v.length>3&&f(v[3])&&(P=parseFloat(v[3])),k>=0&&A>=0&&z>=0){const I=[k,A,z,P];s.push(I),c++,k>d&&(d=k),A>d&&(d=A),z>d&&(d=z)}}}const p=new Array(c).fill(null).map(()=>[0,0,0,0]);for(let m=0;m<c;m++)p[m]=s[m];if(d<=1)for(let m=0;m<c;m++){p[m][3]=p[m][3]<0?1:p[m][3];for(let b=0;b<3;b++)p[m][b]*=255}else if(d<256)for(let m=0;m<c;m++)p[m][3]=p[m][3]<0?255:p[m][3];else for(let m=0;m<c;m++){p[m][3]=p[m][3]<0?d:p[m][3];for(let b=0;b<3;b++)p[m][b]/=d,p[m][b]*=255}for(let m=0;m<c;m++)for(let b=0;b<3;b++)p[m][b]=Math.round(p[m][b]);return p}function wy(r){const o=r.split(`
`),i=1e3,s=[];let c=0,d=-1;function f(v){return!isNaN(parseFloat(v))&&isFinite(v)}let p=0,m=o.length-1;for(let v=0;v<o.length;v++)if(o[v].trim()!=""){p=v;break}for(let v=o.length-1;v>=0;v--)if(o[v].trim()!=""){m=v;break}for(let v=p;v<m+1&&c<i;v++){const A=o[v].trim().split(/\s+/);let z=-1,P=-1,I=-1;if(A.length>=3){f(A[0])&&(z=parseFloat(A[0])),f(A[1])&&(P=parseFloat(A[1])),f(A[2])&&(I=parseFloat(A[2]));let V=-1;if(A.length>3&&f(A[3])&&(V=parseFloat(A[3])),z>=0&&P>=0&&I>=0){const X=[z,P,I,V];s.push(X),c++,z>d&&(d=z),P>d&&(d=P),I>d&&(d=I)}}else v!=o.length-1&&(s.push(""),c++)}const b=new Array(c).fill("");for(let v=0;v<c;v++)s[v]!=""&&(b[v]=s[v]);if(d<=1){for(let v=0;v<c;v++)if(b[v]!=""){b[v][3]=b[v][3]<0?1:b[v][3];for(let k=0;k<3;k++)b[v][k]*=255}}else if(d<256)for(let v=0;v<c;v++)b[v]!=""&&(b[v][3]=b[v][3]<0?255:b[v][3]);else for(let v=0;v<c;v++)if(b[v]!=""){b[v][3]=b[v][3]<0?d:b[v][3];for(let k=0;k<3;k++)b[v][k]/=d,b[v][k]*=255}for(let v=0;v<c;v++)if(b[v]!="")for(let k=0;k<3;k++)b[v][k]=Math.round(b[v][k]);return b}function _y({colorInRgb:r,colorOutRgb:o,setColormap:i,addHistory:s}){let c="";r.map(f=>{c+=f==""?`
`:f[0]+" "+f[1]+" "+f[2]+`
`});function d(f){const p=wy(f.target.value);i(p),s(p)}return M.jsxs("div",{className:"txtarea",children:[M.jsxs("div",{children:[M.jsx(my,{colorOutRgb:o}),M.jsx(yy,{colorOutRgb:o})]}),M.jsx(xu,{value:c,rows:r.length+1,onSlChange:f=>d(f)})]})}function xy({colorInRgb:r,colorOutRgb:o,onColorUpdate:i,onAddToHistory:s}){return M.jsx(_y,{colorInRgb:r,colorOutRgb:o,setColormap:i,addHistory:s})}function ky(r){const[o,i]=zt.useState([r]),[s,c]=zt.useState(0),d=v=>{const k=[...o.slice(0,s+1),v];i(k),c(k.length-1)},f=()=>{if(s===0)return;const v=o[s-1];return c(s-1),v},p=()=>{if(s===o.length-1)return;const v=o[s+1];return c(s+1),v},m=s>0,b=s<o.length-1;return{history:o,currentState:s,addToHistory:d,undo:f,redo:p,canUndo:m,canRedo:b}}const ku=(r,o)=>o?ku(o,r%o):r,Sy=(r,o)=>r/ku(r,o)*o,Cy=r=>ku(Math.max(...r),Math.min(...r));function Ey(r,o){const i=r.length;o=Math.max(o,i);const s=Cy([i-1,o-1]),c=Sy(o-1,i-1)+1,d=(i-1)/s,f=(o-1)/s,p=[],m=[];let b=0;for(let v=0;v<r.length-1;v++){if(!r[v+1])continue;const k=1/f/(v-b+1);for(let A=0;A<f*(v-b+1);A++){const z=r[b][0]+(r[v+1][0]-r[b][0])*k*A,P=r[b][1]+(r[v+1][1]-r[b][1])*k*A,I=r[b][2]+(r[v+1][2]-r[b][2])*k*A;p.push([parseInt(z),parseInt(P),parseInt(I)])}b=v+1}p.push(r[r.length-1]);for(let v=0;v<c;v=v+d)m.push(p[v]);return m}function $y(){const r=[[255,0,0],"","",[255,255,255],[0,0,255]],[o,i]=zt.useState(r),[s,c]=zt.useState(5),[d,f]=zt.useState(5),{addToHistory:p,undo:m,redo:b,canUndo:v,canRedo:k}=ky(r),A=F=>{const q=F.target.files[0],le=new FileReader;le.onload=()=>{const ee=ff(le.result);i(ee),c(ee.length),f(ee.length),p(ee)},le.readAsText(q)},z=F=>{const q=F.target.value,le=new XMLHttpRequest;le.open("GET","./colormap/"+q+".rgb"),le.responseType="text",le.onload=()=>{const ee=ff(le.response);i(ee),c(ee.length),f(ee.length),p(ee)},le.send()},P=F=>(F[0]===""&&(F[0]=[255,255,255]),F[F.length-1]===""&&(F[F.length-1]=[255,255,255]),F),I=()=>{const F=[[255,255,255],...o];i(F),p(F)},V=F=>{const q=[...o];q.splice(F+1,0,""),P(q),i(q),s<q.length&&c(q.length),p(q)},X=F=>{if(o.length===2)return;const q=[...o];q.splice(F,1),P(q),i(q),p(q)},te=(F,q)=>{const le=[...o],ee=F.target.getFormattedValue("rgb").substr(4).split(")")[0].split(",").map(D=>parseInt(D));le.splice(q,1,ee),P(le),i(le)},ne=F=>{if(F===0||F===o.length-1)return;const q=[...o];q.splice(F,1,""),i(q),p(q)},re=F=>{if(F===0)return;const q=[...o];q[F-1]=q.splice(F,1,q[F-1])[0],P(q),i(q),p(q)},ye=F=>{if(F===o.length-1)return;const q=[...o];q[F+1]=q.splice(F,1,q[F+1])[0],P(q),i(q),p(q)},ae=F=>{const q=F.target.value<o.length?d:F.target.value;f(F.target.value),c(q)},de=()=>{f(o.length),c(o.length)},Ae=F=>{const q=F.target.value<o.length?o.length:F.target.value;f(q),c(q)},Fe=()=>{const F=m();F&&i(F)},Pe=()=>{const F=b();F&&i(F)},We=()=>{const F=[...o];p(F)},Te=o,Ee=Ey(Te,s);return M.jsxs(M.Fragment,{children:[M.jsx(og,{colorOutRgb:Ee}),M.jsx(y0,{onUndo:Fe,onRedo:Pe,canUndo:v,canRedo:k}),M.jsx("br",{}),M.jsx(w0,{onFileImport:A,onMapChange:z}),M.jsx("hr",{}),M.jsxs("div",{style:{display:"flex",justifyContent:"space-around"},children:[M.jsxs("div",{className:"selector",children:[M.jsx(k0,{numColors:d,onNumColorsChange:ae,onNumColorsBlur:Ae,onReset:de,onAddColor:I}),M.jsx(X0,{colormap:o,onSetBlankColor:ne,onSwapUp:re,onSwapDown:ye,onColorChange:te,onAddColorDown:V,onDeleteColor:X,onColorPickerBlur:We})]}),M.jsx(xy,{colorInRgb:Te,colorOutRgb:Ee,onColorUpdate:i,onAddToHistory:p})]})]})}function zy(){return M.jsx($y,{})}rg.createRoot(document.getElementById("root")).render(M.jsx(mf.StrictMode,{children:M.jsx(zy,{})}));
