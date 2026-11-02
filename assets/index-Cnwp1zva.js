function ug(r,o){for(var i=0;i<o.length;i++){const l=o[i];if(typeof l!="string"&&!Array.isArray(l)){for(const u in l)if(u!=="default"&&!(u in r)){const d=Object.getOwnPropertyDescriptor(l,u);d&&Object.defineProperty(r,u,d.get?d:{enumerable:!0,get:()=>l[u]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))l(u);new MutationObserver(u=>{for(const d of u)if(d.type==="childList")for(const h of d.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&l(h)}).observe(document,{childList:!0,subtree:!0});function i(u){const d={};return u.integrity&&(d.integrity=u.integrity),u.referrerPolicy&&(d.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?d.credentials="include":u.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function l(u){if(u.ep)return;u.ep=!0;const d=i(u);fetch(u.href,d)}})();function $p(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Wa={exports:{}},Wo={},Ga={exports:{}},ae={};var Rh;function cg(){if(Rh)return ae;Rh=1;var r=Symbol.for("react.element"),o=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),w=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),b=Symbol.iterator;function T(S){return S===null||typeof S!="object"?null:(S=b&&S[b]||S["@@iterator"],typeof S=="function"?S:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},z=Object.assign,I={};function V(S,N,se){this.props=S,this.context=N,this.refs=I,this.updater=se||A}V.prototype.isReactComponent={},V.prototype.setState=function(S,N){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,N,"setState")},V.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function Q(){}Q.prototype=V.prototype;function te(S,N,se){this.props=S,this.context=N,this.refs=I,this.updater=se||A}var ne=te.prototype=new Q;ne.constructor=te,z(ne,V.prototype),ne.isPureReactComponent=!0;var oe=Array.isArray,we=Object.prototype.hasOwnProperty,ue={current:null},pe={key:!0,ref:!0,__self:!0,__source:!0};function Pe(S,N,se){var ce,ge={},ve=null,$e=null;if(N!=null)for(ce in N.ref!==void 0&&($e=N.ref),N.key!==void 0&&(ve=""+N.key),N)we.call(N,ce)&&!pe.hasOwnProperty(ce)&&(ge[ce]=N[ce]);var _e=arguments.length-2;if(_e===1)ge.children=se;else if(1<_e){for(var Le=Array(_e),At=0;At<_e;At++)Le[At]=arguments[At+2];ge.children=Le}if(S&&S.defaultProps)for(ce in _e=S.defaultProps,_e)ge[ce]===void 0&&(ge[ce]=_e[ce]);return{$$typeof:r,type:S,key:ve,ref:$e,props:ge,_owner:ue.current}}function Be(S,N){return{$$typeof:r,type:S.type,key:N,ref:S.ref,props:S.props,_owner:S._owner}}function Ae(S){return typeof S=="object"&&S!==null&&S.$$typeof===r}function Xe(S){var N={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(se){return N[se]})}var Ne=/\/+/g;function Ce(S,N){return typeof S=="object"&&S!==null&&S.key!=null?Xe(""+S.key):N.toString(36)}function F(S,N,se,ce,ge){var ve=typeof S;(ve==="undefined"||ve==="boolean")&&(S=null);var $e=!1;if(S===null)$e=!0;else switch(ve){case"string":case"number":$e=!0;break;case"object":switch(S.$$typeof){case r:case o:$e=!0}}if($e)return $e=S,ge=ge($e),S=ce===""?"."+Ce($e,0):ce,oe(ge)?(se="",S!=null&&(se=S.replace(Ne,"$&/")+"/"),F(ge,N,se,"",function(At){return At})):ge!=null&&(Ae(ge)&&(ge=Be(ge,se+(!ge.key||$e&&$e.key===ge.key?"":(""+ge.key).replace(Ne,"$&/")+"/")+S)),N.push(ge)),1;if($e=0,ce=ce===""?".":ce+":",oe(S))for(var _e=0;_e<S.length;_e++){ve=S[_e];var Le=ce+Ce(ve,_e);$e+=F(ve,N,se,Le,ge)}else if(Le=T(S),typeof Le=="function")for(S=Le.call(S),_e=0;!(ve=S.next()).done;)ve=ve.value,Le=ce+Ce(ve,_e++),$e+=F(ve,N,se,Le,ge);else if(ve==="object")throw N=String(S),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.");return $e}function B(S,N,se){if(S==null)return S;var ce=[],ge=0;return F(S,ce,"","",function(ve){return N.call(se,ve,ge++)}),ce}function re(S){if(S._status===-1){var N=S._result;N=N(),N.then(function(se){(S._status===0||S._status===-1)&&(S._status=1,S._result=se)},function(se){(S._status===0||S._status===-1)&&(S._status=2,S._result=se)}),S._status===-1&&(S._status=0,S._result=N)}if(S._status===1)return S._result.default;throw S._result}var ee={current:null},D={transition:null},q={ReactCurrentDispatcher:ee,ReactCurrentBatchConfig:D,ReactCurrentOwner:ue};function H(){throw Error("act(...) is not supported in production builds of React.")}return ae.Children={map:B,forEach:function(S,N,se){B(S,function(){N.apply(this,arguments)},se)},count:function(S){var N=0;return B(S,function(){N++}),N},toArray:function(S){return B(S,function(N){return N})||[]},only:function(S){if(!Ae(S))throw Error("React.Children.only expected to receive a single React element child.");return S}},ae.Component=V,ae.Fragment=i,ae.Profiler=u,ae.PureComponent=te,ae.StrictMode=l,ae.Suspense=m,ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,ae.act=H,ae.cloneElement=function(S,N,se){if(S==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+S+".");var ce=z({},S.props),ge=S.key,ve=S.ref,$e=S._owner;if(N!=null){if(N.ref!==void 0&&(ve=N.ref,$e=ue.current),N.key!==void 0&&(ge=""+N.key),S.type&&S.type.defaultProps)var _e=S.type.defaultProps;for(Le in N)we.call(N,Le)&&!pe.hasOwnProperty(Le)&&(ce[Le]=N[Le]===void 0&&_e!==void 0?_e[Le]:N[Le])}var Le=arguments.length-2;if(Le===1)ce.children=se;else if(1<Le){_e=Array(Le);for(var At=0;At<Le;At++)_e[At]=arguments[At+2];ce.children=_e}return{$$typeof:r,type:S.type,key:ge,ref:ve,props:ce,_owner:$e}},ae.createContext=function(S){return S={$$typeof:h,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},S.Provider={$$typeof:d,_context:S},S.Consumer=S},ae.createElement=Pe,ae.createFactory=function(S){var N=Pe.bind(null,S);return N.type=S,N},ae.createRef=function(){return{current:null}},ae.forwardRef=function(S){return{$$typeof:f,render:S}},ae.isValidElement=Ae,ae.lazy=function(S){return{$$typeof:_,_payload:{_status:-1,_result:S},_init:re}},ae.memo=function(S,N){return{$$typeof:w,type:S,compare:N===void 0?null:N}},ae.startTransition=function(S){var N=D.transition;D.transition={};try{S()}finally{D.transition=N}},ae.unstable_act=H,ae.useCallback=function(S,N){return ee.current.useCallback(S,N)},ae.useContext=function(S){return ee.current.useContext(S)},ae.useDebugValue=function(){},ae.useDeferredValue=function(S){return ee.current.useDeferredValue(S)},ae.useEffect=function(S,N){return ee.current.useEffect(S,N)},ae.useId=function(){return ee.current.useId()},ae.useImperativeHandle=function(S,N,se){return ee.current.useImperativeHandle(S,N,se)},ae.useInsertionEffect=function(S,N){return ee.current.useInsertionEffect(S,N)},ae.useLayoutEffect=function(S,N){return ee.current.useLayoutEffect(S,N)},ae.useMemo=function(S,N){return ee.current.useMemo(S,N)},ae.useReducer=function(S,N,se){return ee.current.useReducer(S,N,se)},ae.useRef=function(S){return ee.current.useRef(S)},ae.useState=function(S){return ee.current.useState(S)},ae.useSyncExternalStore=function(S,N,se){return ee.current.useSyncExternalStore(S,N,se)},ae.useTransition=function(){return ee.current.useTransition()},ae.version="18.3.1",ae}var Ph;function vu(){return Ph||(Ph=1,Ga.exports=cg()),Ga.exports}var Nh;function dg(){if(Nh)return Wo;Nh=1;var r=vu(),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,u=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function h(f,m,w){var _,b={},T=null,A=null;w!==void 0&&(T=""+w),m.key!==void 0&&(T=""+m.key),m.ref!==void 0&&(A=m.ref);for(_ in m)l.call(m,_)&&!d.hasOwnProperty(_)&&(b[_]=m[_]);if(f&&f.defaultProps)for(_ in m=f.defaultProps,m)b[_]===void 0&&(b[_]=m[_]);return{$$typeof:o,type:f,key:T,ref:A,props:b,_owner:u.current}}return Wo.Fragment=i,Wo.jsx=h,Wo.jsxs=h,Wo}var Lh;function hg(){return Lh||(Lh=1,Wa.exports=dg()),Wa.exports}var R=hg(),ht=vu();const Ep=$p(ht),pt=ug({__proto__:null,default:Ep},[ht]);var bs={},Ka={exports:{}},Ct={},qa={exports:{}},Qa={};var Mh;function pg(){return Mh||(Mh=1,(function(r){function o(D,q){var H=D.length;D.push(q);e:for(;0<H;){var S=H-1>>>1,N=D[S];if(0<u(N,q))D[S]=q,D[H]=N,H=S;else break e}}function i(D){return D.length===0?null:D[0]}function l(D){if(D.length===0)return null;var q=D[0],H=D.pop();if(H!==q){D[0]=H;e:for(var S=0,N=D.length,se=N>>>1;S<se;){var ce=2*(S+1)-1,ge=D[ce],ve=ce+1,$e=D[ve];if(0>u(ge,H))ve<N&&0>u($e,ge)?(D[S]=$e,D[ve]=H,S=ve):(D[S]=ge,D[ce]=H,S=ce);else if(ve<N&&0>u($e,H))D[S]=$e,D[ve]=H,S=ve;else break e}}return q}function u(D,q){var H=D.sortIndex-q.sortIndex;return H!==0?H:D.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var d=performance;r.unstable_now=function(){return d.now()}}else{var h=Date,f=h.now();r.unstable_now=function(){return h.now()-f}}var m=[],w=[],_=1,b=null,T=3,A=!1,z=!1,I=!1,V=typeof setTimeout=="function"?setTimeout:null,Q=typeof clearTimeout=="function"?clearTimeout:null,te=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ne(D){for(var q=i(w);q!==null;){if(q.callback===null)l(w);else if(q.startTime<=D)l(w),q.sortIndex=q.expirationTime,o(m,q);else break;q=i(w)}}function oe(D){if(I=!1,ne(D),!z)if(i(m)!==null)z=!0,re(we);else{var q=i(w);q!==null&&ee(oe,q.startTime-D)}}function we(D,q){z=!1,I&&(I=!1,Q(Pe),Pe=-1),A=!0;var H=T;try{for(ne(q),b=i(m);b!==null&&(!(b.expirationTime>q)||D&&!Xe());){var S=b.callback;if(typeof S=="function"){b.callback=null,T=b.priorityLevel;var N=S(b.expirationTime<=q);q=r.unstable_now(),typeof N=="function"?b.callback=N:b===i(m)&&l(m),ne(q)}else l(m);b=i(m)}if(b!==null)var se=!0;else{var ce=i(w);ce!==null&&ee(oe,ce.startTime-q),se=!1}return se}finally{b=null,T=H,A=!1}}var ue=!1,pe=null,Pe=-1,Be=5,Ae=-1;function Xe(){return!(r.unstable_now()-Ae<Be)}function Ne(){if(pe!==null){var D=r.unstable_now();Ae=D;var q=!0;try{q=pe(!0,D)}finally{q?Ce():(ue=!1,pe=null)}}else ue=!1}var Ce;if(typeof te=="function")Ce=function(){te(Ne)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,B=F.port2;F.port1.onmessage=Ne,Ce=function(){B.postMessage(null)}}else Ce=function(){V(Ne,0)};function re(D){pe=D,ue||(ue=!0,Ce())}function ee(D,q){Pe=V(function(){D(r.unstable_now())},q)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(D){D.callback=null},r.unstable_continueExecution=function(){z||A||(z=!0,re(we))},r.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Be=0<D?Math.floor(1e3/D):5},r.unstable_getCurrentPriorityLevel=function(){return T},r.unstable_getFirstCallbackNode=function(){return i(m)},r.unstable_next=function(D){switch(T){case 1:case 2:case 3:var q=3;break;default:q=T}var H=T;T=q;try{return D()}finally{T=H}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(D,q){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var H=T;T=D;try{return q()}finally{T=H}},r.unstable_scheduleCallback=function(D,q,H){var S=r.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?S+H:S):H=S,D){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=H+N,D={id:_++,callback:q,priorityLevel:D,startTime:H,expirationTime:N,sortIndex:-1},H>S?(D.sortIndex=H,o(w,D),i(m)===null&&D===i(w)&&(I?(Q(Pe),Pe=-1):I=!0,ee(oe,H-S))):(D.sortIndex=N,o(m,D),z||A||(z=!0,re(we))),D},r.unstable_shouldYield=Xe,r.unstable_wrapCallback=function(D){var q=T;return function(){var H=T;T=q;try{return D.apply(this,arguments)}finally{T=H}}}})(Qa)),Qa}var Oh;function fg(){return Oh||(Oh=1,qa.exports=pg()),qa.exports}var Dh;function mg(){if(Dh)return Ct;Dh=1;var r=vu(),o=fg();function i(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l=new Set,u={};function d(e,t){h(e,t),h(e+"Capture",t)}function h(e,t){for(u[e]=t,e=0;e<t.length;e++)l.add(t[e])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,w=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},b={};function T(e){return m.call(b,e)?!0:m.call(_,e)?!1:w.test(e)?b[e]=!0:(_[e]=!0,!1)}function A(e,t,n,s){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return s?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function z(e,t,n,s){if(t===null||typeof t>"u"||A(e,t,n,s))return!0;if(s)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function I(e,t,n,s,a,c,p){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=s,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=c,this.removeEmptyString=p}var V={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){V[e]=new I(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];V[t]=new I(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){V[e]=new I(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){V[e]=new I(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){V[e]=new I(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){V[e]=new I(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){V[e]=new I(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){V[e]=new I(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){V[e]=new I(e,5,!1,e.toLowerCase(),null,!1,!1)});var Q=/[\-:]([a-z])/g;function te(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Q,te);V[t]=new I(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Q,te);V[t]=new I(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Q,te);V[t]=new I(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){V[e]=new I(e,1,!1,e.toLowerCase(),null,!1,!1)}),V.xlinkHref=new I("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){V[e]=new I(e,1,!1,e.toLowerCase(),null,!0,!0)});function ne(e,t,n,s){var a=V.hasOwnProperty(t)?V[t]:null;(a!==null?a.type!==0:s||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(z(t,n,a,s)&&(n=null),s||a===null?T(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,s=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,s?e.setAttributeNS(s,t,n):e.setAttribute(t,n))))}var oe=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,we=Symbol.for("react.element"),ue=Symbol.for("react.portal"),pe=Symbol.for("react.fragment"),Pe=Symbol.for("react.strict_mode"),Be=Symbol.for("react.profiler"),Ae=Symbol.for("react.provider"),Xe=Symbol.for("react.context"),Ne=Symbol.for("react.forward_ref"),Ce=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),re=Symbol.for("react.lazy"),ee=Symbol.for("react.offscreen"),D=Symbol.iterator;function q(e){return e===null||typeof e!="object"?null:(e=D&&e[D]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,S;function N(e){if(S===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);S=t&&t[1]||""}return`
`+S+e}var se=!1;function ce(e,t){if(!e||se)return"";se=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(E){var s=E}Reflect.construct(e,[],t)}else{try{t.call()}catch(E){s=E}e.call(t.prototype)}else{try{throw Error()}catch(E){s=E}e()}}catch(E){if(E&&s&&typeof E.stack=="string"){for(var a=E.stack.split(`
`),c=s.stack.split(`
`),p=a.length-1,v=c.length-1;1<=p&&0<=v&&a[p]!==c[v];)v--;for(;1<=p&&0<=v;p--,v--)if(a[p]!==c[v]){if(p!==1||v!==1)do if(p--,v--,0>v||a[p]!==c[v]){var y=`
`+a[p].replace(" at new "," at ");return e.displayName&&y.includes("<anonymous>")&&(y=y.replace("<anonymous>",e.displayName)),y}while(1<=p&&0<=v);break}}}finally{se=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?N(e):""}function ge(e){switch(e.tag){case 5:return N(e.type);case 16:return N("Lazy");case 13:return N("Suspense");case 19:return N("SuspenseList");case 0:case 2:case 15:return e=ce(e.type,!1),e;case 11:return e=ce(e.type.render,!1),e;case 1:return e=ce(e.type,!0),e;default:return""}}function ve(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case pe:return"Fragment";case ue:return"Portal";case Be:return"Profiler";case Pe:return"StrictMode";case Ce:return"Suspense";case F:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Xe:return(e.displayName||"Context")+".Consumer";case Ae:return(e._context.displayName||"Context")+".Provider";case Ne:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case B:return t=e.displayName||null,t!==null?t:ve(e.type)||"Memo";case re:t=e._payload,e=e._init;try{return ve(e(t))}catch{}}return null}function $e(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ve(t);case 8:return t===Pe?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function _e(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Le(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function At(e){var t=Le(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),s=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,c=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(p){s=""+p,c.call(this,p)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return s},setValue:function(p){s=""+p},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ui(e){e._valueTracker||(e._valueTracker=At(e))}function Du(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),s="";return e&&(s=Le(e)?e.checked?"true":"false":e.value),e=s,e!==n?(t.setValue(e),!0):!1}function ci(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Zs(e,t){var n=t.checked;return H({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Iu(e,t){var n=t.defaultValue==null?"":t.defaultValue,s=t.checked!=null?t.checked:t.defaultChecked;n=_e(t.value!=null?t.value:n),e._wrapperState={initialChecked:s,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Fu(e,t){t=t.checked,t!=null&&ne(e,"checked",t,!1)}function Js(e,t){Fu(e,t);var n=_e(t.value),s=t.type;if(n!=null)s==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?el(e,t.type,n):t.hasOwnProperty("defaultValue")&&el(e,t.type,_e(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Bu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var s=t.type;if(!(s!=="submit"&&s!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function el(e,t,n){(t!=="number"||ci(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var io=Array.isArray;function yn(e,t,n,s){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&s&&(e[n].defaultSelected=!0)}else{for(n=""+_e(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,s&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function tl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(i(91));return H({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Vu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(i(92));if(io(n)){if(1<n.length)throw Error(i(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:_e(n)}}function ju(e,t){var n=_e(t.value),s=_e(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),s!=null&&(e.defaultValue=""+s)}function Hu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Uu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function rl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Uu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var di,Wu=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,s,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,s,a)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(di=di||document.createElement("div"),di.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=di.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function so(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var lo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pf=["Webkit","ms","Moz","O"];Object.keys(lo).forEach(function(e){pf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),lo[t]=lo[e]})});function Gu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||lo.hasOwnProperty(e)&&lo[e]?(""+t).trim():t+"px"}function Ku(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var s=n.indexOf("--")===0,a=Gu(n,t[n],s);n==="float"&&(n="cssFloat"),s?e.setProperty(n,a):e[n]=a}}var ff=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function nl(e,t){if(t){if(ff[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(i(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(i(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(i(61))}if(t.style!=null&&typeof t.style!="object")throw Error(i(62))}}function ol(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var il=null;function sl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ll=null,bn=null,wn=null;function qu(e){if(e=zo(e)){if(typeof ll!="function")throw Error(i(280));var t=e.stateNode;t&&(t=Li(t),ll(e.stateNode,e.type,t))}}function Qu(e){bn?wn?wn.push(e):wn=[e]:bn=e}function Yu(){if(bn){var e=bn,t=wn;if(wn=bn=null,qu(e),t)for(e=0;e<t.length;e++)qu(t[e])}}function Xu(e,t){return e(t)}function Zu(){}var al=!1;function Ju(e,t,n){if(al)return e(t,n);al=!0;try{return Xu(e,t,n)}finally{al=!1,(bn!==null||wn!==null)&&(Zu(),Yu())}}function ao(e,t){var n=e.stateNode;if(n===null)return null;var s=Li(n);if(s===null)return null;n=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(i(231,t,typeof n));return n}var ul=!1;if(f)try{var uo={};Object.defineProperty(uo,"passive",{get:function(){ul=!0}}),window.addEventListener("test",uo,uo),window.removeEventListener("test",uo,uo)}catch{ul=!1}function mf(e,t,n,s,a,c,p,v,y){var E=Array.prototype.slice.call(arguments,3);try{t.apply(n,E)}catch(L){this.onError(L)}}var co=!1,hi=null,pi=!1,cl=null,gf={onError:function(e){co=!0,hi=e}};function vf(e,t,n,s,a,c,p,v,y){co=!1,hi=null,mf.apply(gf,arguments)}function yf(e,t,n,s,a,c,p,v,y){if(vf.apply(this,arguments),co){if(co){var E=hi;co=!1,hi=null}else throw Error(i(198));pi||(pi=!0,cl=E)}}function Yr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ec(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function tc(e){if(Yr(e)!==e)throw Error(i(188))}function bf(e){var t=e.alternate;if(!t){if(t=Yr(e),t===null)throw Error(i(188));return t!==e?null:e}for(var n=e,s=t;;){var a=n.return;if(a===null)break;var c=a.alternate;if(c===null){if(s=a.return,s!==null){n=s;continue}break}if(a.child===c.child){for(c=a.child;c;){if(c===n)return tc(a),e;if(c===s)return tc(a),t;c=c.sibling}throw Error(i(188))}if(n.return!==s.return)n=a,s=c;else{for(var p=!1,v=a.child;v;){if(v===n){p=!0,n=a,s=c;break}if(v===s){p=!0,s=a,n=c;break}v=v.sibling}if(!p){for(v=c.child;v;){if(v===n){p=!0,n=c,s=a;break}if(v===s){p=!0,s=c,n=a;break}v=v.sibling}if(!p)throw Error(i(189))}}if(n.alternate!==s)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function rc(e){return e=bf(e),e!==null?nc(e):null}function nc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=nc(e);if(t!==null)return t;e=e.sibling}return null}var oc=o.unstable_scheduleCallback,ic=o.unstable_cancelCallback,wf=o.unstable_shouldYield,_f=o.unstable_requestPaint,We=o.unstable_now,xf=o.unstable_getCurrentPriorityLevel,dl=o.unstable_ImmediatePriority,sc=o.unstable_UserBlockingPriority,fi=o.unstable_NormalPriority,kf=o.unstable_LowPriority,lc=o.unstable_IdlePriority,mi=null,nr=null;function Sf(e){if(nr&&typeof nr.onCommitFiberRoot=="function")try{nr.onCommitFiberRoot(mi,e,void 0,(e.current.flags&128)===128)}catch{}}var qt=Math.clz32?Math.clz32:Ef,Cf=Math.log,$f=Math.LN2;function Ef(e){return e>>>=0,e===0?32:31-(Cf(e)/$f|0)|0}var gi=64,vi=4194304;function ho(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function yi(e,t){var n=e.pendingLanes;if(n===0)return 0;var s=0,a=e.suspendedLanes,c=e.pingedLanes,p=n&268435455;if(p!==0){var v=p&~a;v!==0?s=ho(v):(c&=p,c!==0&&(s=ho(c)))}else p=n&~a,p!==0?s=ho(p):c!==0&&(s=ho(c));if(s===0)return 0;if(t!==0&&t!==s&&(t&a)===0&&(a=s&-s,c=t&-t,a>=c||a===16&&(c&4194240)!==0))return t;if((s&4)!==0&&(s|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=s;0<t;)n=31-qt(t),a=1<<n,s|=e[n],t&=~a;return s}function Af(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tf(e,t){for(var n=e.suspendedLanes,s=e.pingedLanes,a=e.expirationTimes,c=e.pendingLanes;0<c;){var p=31-qt(c),v=1<<p,y=a[p];y===-1?((v&n)===0||(v&s)!==0)&&(a[p]=Af(v,t)):y<=t&&(e.expiredLanes|=v),c&=~v}}function hl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ac(){var e=gi;return gi<<=1,(gi&4194240)===0&&(gi=64),e}function pl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function po(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-qt(t),e[t]=n}function zf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-qt(n),c=1<<a;t[a]=0,s[a]=-1,e[a]=-1,n&=~c}}function fl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var s=31-qt(n),a=1<<s;a&t|e[s]&t&&(e[s]|=t),n&=~a}}var xe=0;function uc(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var cc,ml,dc,hc,pc,gl=!1,bi=[],kr=null,Sr=null,Cr=null,fo=new Map,mo=new Map,$r=[],Rf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fc(e,t){switch(e){case"focusin":case"focusout":kr=null;break;case"dragenter":case"dragleave":Sr=null;break;case"mouseover":case"mouseout":Cr=null;break;case"pointerover":case"pointerout":fo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":mo.delete(t.pointerId)}}function go(e,t,n,s,a,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:n,eventSystemFlags:s,nativeEvent:c,targetContainers:[a]},t!==null&&(t=zo(t),t!==null&&ml(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Pf(e,t,n,s,a){switch(t){case"focusin":return kr=go(kr,e,t,n,s,a),!0;case"dragenter":return Sr=go(Sr,e,t,n,s,a),!0;case"mouseover":return Cr=go(Cr,e,t,n,s,a),!0;case"pointerover":var c=a.pointerId;return fo.set(c,go(fo.get(c)||null,e,t,n,s,a)),!0;case"gotpointercapture":return c=a.pointerId,mo.set(c,go(mo.get(c)||null,e,t,n,s,a)),!0}return!1}function mc(e){var t=Xr(e.target);if(t!==null){var n=Yr(t);if(n!==null){if(t=n.tag,t===13){if(t=ec(n),t!==null){e.blockedOn=t,pc(e.priority,function(){dc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=yl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var s=new n.constructor(n.type,n);il=s,n.target.dispatchEvent(s),il=null}else return t=zo(n),t!==null&&ml(t),e.blockedOn=n,!1;t.shift()}return!0}function gc(e,t,n){wi(e)&&n.delete(t)}function Nf(){gl=!1,kr!==null&&wi(kr)&&(kr=null),Sr!==null&&wi(Sr)&&(Sr=null),Cr!==null&&wi(Cr)&&(Cr=null),fo.forEach(gc),mo.forEach(gc)}function vo(e,t){e.blockedOn===t&&(e.blockedOn=null,gl||(gl=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Nf)))}function yo(e){function t(a){return vo(a,e)}if(0<bi.length){vo(bi[0],e);for(var n=1;n<bi.length;n++){var s=bi[n];s.blockedOn===e&&(s.blockedOn=null)}}for(kr!==null&&vo(kr,e),Sr!==null&&vo(Sr,e),Cr!==null&&vo(Cr,e),fo.forEach(t),mo.forEach(t),n=0;n<$r.length;n++)s=$r[n],s.blockedOn===e&&(s.blockedOn=null);for(;0<$r.length&&(n=$r[0],n.blockedOn===null);)mc(n),n.blockedOn===null&&$r.shift()}var _n=oe.ReactCurrentBatchConfig,_i=!0;function Lf(e,t,n,s){var a=xe,c=_n.transition;_n.transition=null;try{xe=1,vl(e,t,n,s)}finally{xe=a,_n.transition=c}}function Mf(e,t,n,s){var a=xe,c=_n.transition;_n.transition=null;try{xe=4,vl(e,t,n,s)}finally{xe=a,_n.transition=c}}function vl(e,t,n,s){if(_i){var a=yl(e,t,n,s);if(a===null)Ml(e,t,s,xi,n),fc(e,s);else if(Pf(a,e,t,n,s))s.stopPropagation();else if(fc(e,s),t&4&&-1<Rf.indexOf(e)){for(;a!==null;){var c=zo(a);if(c!==null&&cc(c),c=yl(e,t,n,s),c===null&&Ml(e,t,s,xi,n),c===a)break;a=c}a!==null&&s.stopPropagation()}else Ml(e,t,s,null,n)}}var xi=null;function yl(e,t,n,s){if(xi=null,e=sl(s),e=Xr(e),e!==null)if(t=Yr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ec(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return xi=e,null}function vc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xf()){case dl:return 1;case sc:return 4;case fi:case kf:return 16;case lc:return 536870912;default:return 16}default:return 16}}var Er=null,bl=null,ki=null;function yc(){if(ki)return ki;var e,t=bl,n=t.length,s,a="value"in Er?Er.value:Er.textContent,c=a.length;for(e=0;e<n&&t[e]===a[e];e++);var p=n-e;for(s=1;s<=p&&t[n-s]===a[c-s];s++);return ki=a.slice(e,1<s?1-s:void 0)}function Si(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ci(){return!0}function bc(){return!1}function Tt(e){function t(n,s,a,c,p){this._reactName=n,this._targetInst=a,this.type=s,this.nativeEvent=c,this.target=p,this.currentTarget=null;for(var v in e)e.hasOwnProperty(v)&&(n=e[v],this[v]=n?n(c):c[v]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Ci:bc,this.isPropagationStopped=bc,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ci)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ci)},persist:function(){},isPersistent:Ci}),t}var xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wl=Tt(xn),bo=H({},xn,{view:0,detail:0}),Of=Tt(bo),_l,xl,wo,$i=H({},bo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==wo&&(wo&&e.type==="mousemove"?(_l=e.screenX-wo.screenX,xl=e.screenY-wo.screenY):xl=_l=0,wo=e),_l)},movementY:function(e){return"movementY"in e?e.movementY:xl}}),wc=Tt($i),Df=H({},$i,{dataTransfer:0}),If=Tt(Df),Ff=H({},bo,{relatedTarget:0}),kl=Tt(Ff),Bf=H({},xn,{animationName:0,elapsedTime:0,pseudoElement:0}),Vf=Tt(Bf),jf=H({},xn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Hf=Tt(jf),Uf=H({},xn,{data:0}),_c=Tt(Uf),Wf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Kf[e])?!!t[e]:!1}function Sl(){return qf}var Qf=H({},bo,{key:function(e){if(e.key){var t=Wf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Si(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Gf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sl,charCode:function(e){return e.type==="keypress"?Si(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Si(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Yf=Tt(Qf),Xf=H({},$i,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xc=Tt(Xf),Zf=H({},bo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sl}),Jf=Tt(Zf),em=H({},xn,{propertyName:0,elapsedTime:0,pseudoElement:0}),tm=Tt(em),rm=H({},$i,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),nm=Tt(rm),om=[9,13,27,32],Cl=f&&"CompositionEvent"in window,_o=null;f&&"documentMode"in document&&(_o=document.documentMode);var im=f&&"TextEvent"in window&&!_o,kc=f&&(!Cl||_o&&8<_o&&11>=_o),Sc=" ",Cc=!1;function $c(e,t){switch(e){case"keyup":return om.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ec(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var kn=!1;function sm(e,t){switch(e){case"compositionend":return Ec(t);case"keypress":return t.which!==32?null:(Cc=!0,Sc);case"textInput":return e=t.data,e===Sc&&Cc?null:e;default:return null}}function lm(e,t){if(kn)return e==="compositionend"||!Cl&&$c(e,t)?(e=yc(),ki=bl=Er=null,kn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return kc&&t.locale!=="ko"?null:t.data;default:return null}}var am={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ac(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!am[e.type]:t==="textarea"}function Tc(e,t,n,s){Qu(s),t=Ri(t,"onChange"),0<t.length&&(n=new wl("onChange","change",null,n,s),e.push({event:n,listeners:t}))}var xo=null,ko=null;function um(e){Kc(e,0)}function Ei(e){var t=An(e);if(Du(t))return e}function cm(e,t){if(e==="change")return t}var zc=!1;if(f){var $l;if(f){var El="oninput"in document;if(!El){var Rc=document.createElement("div");Rc.setAttribute("oninput","return;"),El=typeof Rc.oninput=="function"}$l=El}else $l=!1;zc=$l&&(!document.documentMode||9<document.documentMode)}function Pc(){xo&&(xo.detachEvent("onpropertychange",Nc),ko=xo=null)}function Nc(e){if(e.propertyName==="value"&&Ei(ko)){var t=[];Tc(t,ko,e,sl(e)),Ju(um,t)}}function dm(e,t,n){e==="focusin"?(Pc(),xo=t,ko=n,xo.attachEvent("onpropertychange",Nc)):e==="focusout"&&Pc()}function hm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ei(ko)}function pm(e,t){if(e==="click")return Ei(t)}function fm(e,t){if(e==="input"||e==="change")return Ei(t)}function mm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Qt=typeof Object.is=="function"?Object.is:mm;function So(e,t){if(Qt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),s=Object.keys(t);if(n.length!==s.length)return!1;for(s=0;s<n.length;s++){var a=n[s];if(!m.call(t,a)||!Qt(e[a],t[a]))return!1}return!0}function Lc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Mc(e,t){var n=Lc(e);e=0;for(var s;n;){if(n.nodeType===3){if(s=e+n.textContent.length,e<=t&&s>=t)return{node:n,offset:t-e};e=s}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Lc(n)}}function Oc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Oc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Dc(){for(var e=window,t=ci();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ci(e.document)}return t}function Al(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function gm(e){var t=Dc(),n=e.focusedElem,s=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Oc(n.ownerDocument.documentElement,n)){if(s!==null&&Al(n)){if(t=s.start,e=s.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,c=Math.min(s.start,a);s=s.end===void 0?c:Math.min(s.end,a),!e.extend&&c>s&&(a=s,s=c,c=a),a=Mc(n,c);var p=Mc(n,s);a&&p&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==p.node||e.focusOffset!==p.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),c>s?(e.addRange(t),e.extend(p.node,p.offset)):(t.setEnd(p.node,p.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var vm=f&&"documentMode"in document&&11>=document.documentMode,Sn=null,Tl=null,Co=null,zl=!1;function Ic(e,t,n){var s=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zl||Sn==null||Sn!==ci(s)||(s=Sn,"selectionStart"in s&&Al(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Co&&So(Co,s)||(Co=s,s=Ri(Tl,"onSelect"),0<s.length&&(t=new wl("onSelect","select",null,t,n),e.push({event:t,listeners:s}),t.target=Sn)))}function Ai(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Cn={animationend:Ai("Animation","AnimationEnd"),animationiteration:Ai("Animation","AnimationIteration"),animationstart:Ai("Animation","AnimationStart"),transitionend:Ai("Transition","TransitionEnd")},Rl={},Fc={};f&&(Fc=document.createElement("div").style,"AnimationEvent"in window||(delete Cn.animationend.animation,delete Cn.animationiteration.animation,delete Cn.animationstart.animation),"TransitionEvent"in window||delete Cn.transitionend.transition);function Ti(e){if(Rl[e])return Rl[e];if(!Cn[e])return e;var t=Cn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Fc)return Rl[e]=t[n];return e}var Bc=Ti("animationend"),Vc=Ti("animationiteration"),jc=Ti("animationstart"),Hc=Ti("transitionend"),Uc=new Map,Wc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ar(e,t){Uc.set(e,t),d(t,[e])}for(var Pl=0;Pl<Wc.length;Pl++){var Nl=Wc[Pl],ym=Nl.toLowerCase(),bm=Nl[0].toUpperCase()+Nl.slice(1);Ar(ym,"on"+bm)}Ar(Bc,"onAnimationEnd"),Ar(Vc,"onAnimationIteration"),Ar(jc,"onAnimationStart"),Ar("dblclick","onDoubleClick"),Ar("focusin","onFocus"),Ar("focusout","onBlur"),Ar(Hc,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),d("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),d("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),d("onBeforeInput",["compositionend","keypress","textInput","paste"]),d("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wm=new Set("cancel close invalid load scroll toggle".split(" ").concat($o));function Gc(e,t,n){var s=e.type||"unknown-event";e.currentTarget=n,yf(s,t,void 0,e),e.currentTarget=null}function Kc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var s=e[n],a=s.event;s=s.listeners;e:{var c=void 0;if(t)for(var p=s.length-1;0<=p;p--){var v=s[p],y=v.instance,E=v.currentTarget;if(v=v.listener,y!==c&&a.isPropagationStopped())break e;Gc(a,v,E),c=y}else for(p=0;p<s.length;p++){if(v=s[p],y=v.instance,E=v.currentTarget,v=v.listener,y!==c&&a.isPropagationStopped())break e;Gc(a,v,E),c=y}}}if(pi)throw e=cl,pi=!1,cl=null,e}function Te(e,t){var n=t[Vl];n===void 0&&(n=t[Vl]=new Set);var s=e+"__bubble";n.has(s)||(qc(t,e,2,!1),n.add(s))}function Ll(e,t,n){var s=0;t&&(s|=4),qc(n,e,s,t)}var zi="_reactListening"+Math.random().toString(36).slice(2);function Eo(e){if(!e[zi]){e[zi]=!0,l.forEach(function(n){n!=="selectionchange"&&(wm.has(n)||Ll(n,!1,e),Ll(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[zi]||(t[zi]=!0,Ll("selectionchange",!1,t))}}function qc(e,t,n,s){switch(vc(t)){case 1:var a=Lf;break;case 4:a=Mf;break;default:a=vl}n=a.bind(null,t,n,e),a=void 0,!ul||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),s?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Ml(e,t,n,s,a){var c=s;if((t&1)===0&&(t&2)===0&&s!==null)e:for(;;){if(s===null)return;var p=s.tag;if(p===3||p===4){var v=s.stateNode.containerInfo;if(v===a||v.nodeType===8&&v.parentNode===a)break;if(p===4)for(p=s.return;p!==null;){var y=p.tag;if((y===3||y===4)&&(y=p.stateNode.containerInfo,y===a||y.nodeType===8&&y.parentNode===a))return;p=p.return}for(;v!==null;){if(p=Xr(v),p===null)return;if(y=p.tag,y===5||y===6){s=c=p;continue e}v=v.parentNode}}s=s.return}Ju(function(){var E=c,L=sl(n),M=[];e:{var P=Uc.get(e);if(P!==void 0){var j=wl,W=e;switch(e){case"keypress":if(Si(n)===0)break e;case"keydown":case"keyup":j=Yf;break;case"focusin":W="focus",j=kl;break;case"focusout":W="blur",j=kl;break;case"beforeblur":case"afterblur":j=kl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=wc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=If;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=Jf;break;case Bc:case Vc:case jc:j=Vf;break;case Hc:j=tm;break;case"scroll":j=Of;break;case"wheel":j=nm;break;case"copy":case"cut":case"paste":j=Hf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=xc}var G=(t&4)!==0,Ge=!G&&e==="scroll",C=G?P!==null?P+"Capture":null:P;G=[];for(var x=E,$;x!==null;){$=x;var O=$.stateNode;if($.tag===5&&O!==null&&($=O,C!==null&&(O=ao(x,C),O!=null&&G.push(Ao(x,O,$)))),Ge)break;x=x.return}0<G.length&&(P=new j(P,W,null,n,L),M.push({event:P,listeners:G}))}}if((t&7)===0){e:{if(P=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",P&&n!==il&&(W=n.relatedTarget||n.fromElement)&&(Xr(W)||W[hr]))break e;if((j||P)&&(P=L.window===L?L:(P=L.ownerDocument)?P.defaultView||P.parentWindow:window,j?(W=n.relatedTarget||n.toElement,j=E,W=W?Xr(W):null,W!==null&&(Ge=Yr(W),W!==Ge||W.tag!==5&&W.tag!==6)&&(W=null)):(j=null,W=E),j!==W)){if(G=wc,O="onMouseLeave",C="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(G=xc,O="onPointerLeave",C="onPointerEnter",x="pointer"),Ge=j==null?P:An(j),$=W==null?P:An(W),P=new G(O,x+"leave",j,n,L),P.target=Ge,P.relatedTarget=$,O=null,Xr(L)===E&&(G=new G(C,x+"enter",W,n,L),G.target=$,G.relatedTarget=Ge,O=G),Ge=O,j&&W)t:{for(G=j,C=W,x=0,$=G;$;$=$n($))x++;for($=0,O=C;O;O=$n(O))$++;for(;0<x-$;)G=$n(G),x--;for(;0<$-x;)C=$n(C),$--;for(;x--;){if(G===C||C!==null&&G===C.alternate)break t;G=$n(G),C=$n(C)}G=null}else G=null;j!==null&&Qc(M,P,j,G,!1),W!==null&&Ge!==null&&Qc(M,Ge,W,G,!0)}}e:{if(P=E?An(E):window,j=P.nodeName&&P.nodeName.toLowerCase(),j==="select"||j==="input"&&P.type==="file")var K=cm;else if(Ac(P))if(zc)K=fm;else{K=hm;var Y=dm}else(j=P.nodeName)&&j.toLowerCase()==="input"&&(P.type==="checkbox"||P.type==="radio")&&(K=pm);if(K&&(K=K(e,E))){Tc(M,K,n,L);break e}Y&&Y(e,P,E),e==="focusout"&&(Y=P._wrapperState)&&Y.controlled&&P.type==="number"&&el(P,"number",P.value)}switch(Y=E?An(E):window,e){case"focusin":(Ac(Y)||Y.contentEditable==="true")&&(Sn=Y,Tl=E,Co=null);break;case"focusout":Co=Tl=Sn=null;break;case"mousedown":zl=!0;break;case"contextmenu":case"mouseup":case"dragend":zl=!1,Ic(M,n,L);break;case"selectionchange":if(vm)break;case"keydown":case"keyup":Ic(M,n,L)}var X;if(Cl)e:{switch(e){case"compositionstart":var J="onCompositionStart";break e;case"compositionend":J="onCompositionEnd";break e;case"compositionupdate":J="onCompositionUpdate";break e}J=void 0}else kn?$c(e,n)&&(J="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(J="onCompositionStart");J&&(kc&&n.locale!=="ko"&&(kn||J!=="onCompositionStart"?J==="onCompositionEnd"&&kn&&(X=yc()):(Er=L,bl="value"in Er?Er.value:Er.textContent,kn=!0)),Y=Ri(E,J),0<Y.length&&(J=new _c(J,e,null,n,L),M.push({event:J,listeners:Y}),X?J.data=X:(X=Ec(n),X!==null&&(J.data=X)))),(X=im?sm(e,n):lm(e,n))&&(E=Ri(E,"onBeforeInput"),0<E.length&&(L=new _c("onBeforeInput","beforeinput",null,n,L),M.push({event:L,listeners:E}),L.data=X))}Kc(M,t)})}function Ao(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ri(e,t){for(var n=t+"Capture",s=[];e!==null;){var a=e,c=a.stateNode;a.tag===5&&c!==null&&(a=c,c=ao(e,n),c!=null&&s.unshift(Ao(e,c,a)),c=ao(e,t),c!=null&&s.push(Ao(e,c,a))),e=e.return}return s}function $n(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Qc(e,t,n,s,a){for(var c=t._reactName,p=[];n!==null&&n!==s;){var v=n,y=v.alternate,E=v.stateNode;if(y!==null&&y===s)break;v.tag===5&&E!==null&&(v=E,a?(y=ao(n,c),y!=null&&p.unshift(Ao(n,y,v))):a||(y=ao(n,c),y!=null&&p.push(Ao(n,y,v)))),n=n.return}p.length!==0&&e.push({event:t,listeners:p})}var _m=/\r\n?/g,xm=/\u0000|\uFFFD/g;function Yc(e){return(typeof e=="string"?e:""+e).replace(_m,`
`).replace(xm,"")}function Pi(e,t,n){if(t=Yc(t),Yc(e)!==t&&n)throw Error(i(425))}function Ni(){}var Ol=null,Dl=null;function Il(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Fl=typeof setTimeout=="function"?setTimeout:void 0,km=typeof clearTimeout=="function"?clearTimeout:void 0,Xc=typeof Promise=="function"?Promise:void 0,Sm=typeof queueMicrotask=="function"?queueMicrotask:typeof Xc<"u"?function(e){return Xc.resolve(null).then(e).catch(Cm)}:Fl;function Cm(e){setTimeout(function(){throw e})}function Bl(e,t){var n=t,s=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(s===0){e.removeChild(a),yo(t);return}s--}else n!=="$"&&n!=="$?"&&n!=="$!"||s++;n=a}while(n);yo(t)}function Tr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Zc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var En=Math.random().toString(36).slice(2),or="__reactFiber$"+En,To="__reactProps$"+En,hr="__reactContainer$"+En,Vl="__reactEvents$"+En,$m="__reactListeners$"+En,Em="__reactHandles$"+En;function Xr(e){var t=e[or];if(t)return t;for(var n=e.parentNode;n;){if(t=n[hr]||n[or]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Zc(e);e!==null;){if(n=e[or])return n;e=Zc(e)}return t}e=n,n=e.parentNode}return null}function zo(e){return e=e[or]||e[hr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function An(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(i(33))}function Li(e){return e[To]||null}var jl=[],Tn=-1;function zr(e){return{current:e}}function ze(e){0>Tn||(e.current=jl[Tn],jl[Tn]=null,Tn--)}function Ee(e,t){Tn++,jl[Tn]=e.current,e.current=t}var Rr={},at=zr(Rr),wt=zr(!1),Zr=Rr;function zn(e,t){var n=e.type.contextTypes;if(!n)return Rr;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===t)return s.__reactInternalMemoizedMaskedChildContext;var a={},c;for(c in n)a[c]=t[c];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function _t(e){return e=e.childContextTypes,e!=null}function Mi(){ze(wt),ze(at)}function Jc(e,t,n){if(at.current!==Rr)throw Error(i(168));Ee(at,t),Ee(wt,n)}function ed(e,t,n){var s=e.stateNode;if(t=t.childContextTypes,typeof s.getChildContext!="function")return n;s=s.getChildContext();for(var a in s)if(!(a in t))throw Error(i(108,$e(e)||"Unknown",a));return H({},n,s)}function Oi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Rr,Zr=at.current,Ee(at,e),Ee(wt,wt.current),!0}function td(e,t,n){var s=e.stateNode;if(!s)throw Error(i(169));n?(e=ed(e,t,Zr),s.__reactInternalMemoizedMergedChildContext=e,ze(wt),ze(at),Ee(at,e)):ze(wt),Ee(wt,n)}var pr=null,Di=!1,Hl=!1;function rd(e){pr===null?pr=[e]:pr.push(e)}function Am(e){Di=!0,rd(e)}function Pr(){if(!Hl&&pr!==null){Hl=!0;var e=0,t=xe;try{var n=pr;for(xe=1;e<n.length;e++){var s=n[e];do s=s(!0);while(s!==null)}pr=null,Di=!1}catch(a){throw pr!==null&&(pr=pr.slice(e+1)),oc(dl,Pr),a}finally{xe=t,Hl=!1}}return null}var Rn=[],Pn=0,Ii=null,Fi=0,Dt=[],It=0,Jr=null,fr=1,mr="";function en(e,t){Rn[Pn++]=Fi,Rn[Pn++]=Ii,Ii=e,Fi=t}function nd(e,t,n){Dt[It++]=fr,Dt[It++]=mr,Dt[It++]=Jr,Jr=e;var s=fr;e=mr;var a=32-qt(s)-1;s&=~(1<<a),n+=1;var c=32-qt(t)+a;if(30<c){var p=a-a%5;c=(s&(1<<p)-1).toString(32),s>>=p,a-=p,fr=1<<32-qt(t)+a|n<<a|s,mr=c+e}else fr=1<<c|n<<a|s,mr=e}function Ul(e){e.return!==null&&(en(e,1),nd(e,1,0))}function Wl(e){for(;e===Ii;)Ii=Rn[--Pn],Rn[Pn]=null,Fi=Rn[--Pn],Rn[Pn]=null;for(;e===Jr;)Jr=Dt[--It],Dt[It]=null,mr=Dt[--It],Dt[It]=null,fr=Dt[--It],Dt[It]=null}var zt=null,Rt=null,Me=!1,Yt=null;function od(e,t){var n=jt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function id(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,zt=e,Rt=Tr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,zt=e,Rt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Jr!==null?{id:fr,overflow:mr}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=jt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,zt=e,Rt=null,!0):!1;default:return!1}}function Gl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Kl(e){if(Me){var t=Rt;if(t){var n=t;if(!id(e,t)){if(Gl(e))throw Error(i(418));t=Tr(n.nextSibling);var s=zt;t&&id(e,t)?od(s,n):(e.flags=e.flags&-4097|2,Me=!1,zt=e)}}else{if(Gl(e))throw Error(i(418));e.flags=e.flags&-4097|2,Me=!1,zt=e}}}function sd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;zt=e}function Bi(e){if(e!==zt)return!1;if(!Me)return sd(e),Me=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Il(e.type,e.memoizedProps)),t&&(t=Rt)){if(Gl(e))throw ld(),Error(i(418));for(;t;)od(e,t),t=Tr(t.nextSibling)}if(sd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Rt=Tr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Rt=null}}else Rt=zt?Tr(e.stateNode.nextSibling):null;return!0}function ld(){for(var e=Rt;e;)e=Tr(e.nextSibling)}function Nn(){Rt=zt=null,Me=!1}function ql(e){Yt===null?Yt=[e]:Yt.push(e)}var Tm=oe.ReactCurrentBatchConfig;function Ro(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(i(309));var s=n.stateNode}if(!s)throw Error(i(147,e));var a=s,c=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===c?t.ref:(t=function(p){var v=a.refs;p===null?delete v[c]:v[c]=p},t._stringRef=c,t)}if(typeof e!="string")throw Error(i(284));if(!n._owner)throw Error(i(290,e))}return e}function Vi(e,t){throw e=Object.prototype.toString.call(t),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ad(e){var t=e._init;return t(e._payload)}function ud(e){function t(C,x){if(e){var $=C.deletions;$===null?(C.deletions=[x],C.flags|=16):$.push(x)}}function n(C,x){if(!e)return null;for(;x!==null;)t(C,x),x=x.sibling;return null}function s(C,x){for(C=new Map;x!==null;)x.key!==null?C.set(x.key,x):C.set(x.index,x),x=x.sibling;return C}function a(C,x){return C=Br(C,x),C.index=0,C.sibling=null,C}function c(C,x,$){return C.index=$,e?($=C.alternate,$!==null?($=$.index,$<x?(C.flags|=2,x):$):(C.flags|=2,x)):(C.flags|=1048576,x)}function p(C){return e&&C.alternate===null&&(C.flags|=2),C}function v(C,x,$,O){return x===null||x.tag!==6?(x=Fa($,C.mode,O),x.return=C,x):(x=a(x,$),x.return=C,x)}function y(C,x,$,O){var K=$.type;return K===pe?L(C,x,$.props.children,O,$.key):x!==null&&(x.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===re&&ad(K)===x.type)?(O=a(x,$.props),O.ref=Ro(C,x,$),O.return=C,O):(O=ds($.type,$.key,$.props,null,C.mode,O),O.ref=Ro(C,x,$),O.return=C,O)}function E(C,x,$,O){return x===null||x.tag!==4||x.stateNode.containerInfo!==$.containerInfo||x.stateNode.implementation!==$.implementation?(x=Ba($,C.mode,O),x.return=C,x):(x=a(x,$.children||[]),x.return=C,x)}function L(C,x,$,O,K){return x===null||x.tag!==7?(x=un($,C.mode,O,K),x.return=C,x):(x=a(x,$),x.return=C,x)}function M(C,x,$){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Fa(""+x,C.mode,$),x.return=C,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case we:return $=ds(x.type,x.key,x.props,null,C.mode,$),$.ref=Ro(C,null,x),$.return=C,$;case ue:return x=Ba(x,C.mode,$),x.return=C,x;case re:var O=x._init;return M(C,O(x._payload),$)}if(io(x)||q(x))return x=un(x,C.mode,$,null),x.return=C,x;Vi(C,x)}return null}function P(C,x,$,O){var K=x!==null?x.key:null;if(typeof $=="string"&&$!==""||typeof $=="number")return K!==null?null:v(C,x,""+$,O);if(typeof $=="object"&&$!==null){switch($.$$typeof){case we:return $.key===K?y(C,x,$,O):null;case ue:return $.key===K?E(C,x,$,O):null;case re:return K=$._init,P(C,x,K($._payload),O)}if(io($)||q($))return K!==null?null:L(C,x,$,O,null);Vi(C,$)}return null}function j(C,x,$,O,K){if(typeof O=="string"&&O!==""||typeof O=="number")return C=C.get($)||null,v(x,C,""+O,K);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case we:return C=C.get(O.key===null?$:O.key)||null,y(x,C,O,K);case ue:return C=C.get(O.key===null?$:O.key)||null,E(x,C,O,K);case re:var Y=O._init;return j(C,x,$,Y(O._payload),K)}if(io(O)||q(O))return C=C.get($)||null,L(x,C,O,K,null);Vi(x,O)}return null}function W(C,x,$,O){for(var K=null,Y=null,X=x,J=x=0,et=null;X!==null&&J<$.length;J++){X.index>J?(et=X,X=null):et=X.sibling;var ye=P(C,X,$[J],O);if(ye===null){X===null&&(X=et);break}e&&X&&ye.alternate===null&&t(C,X),x=c(ye,x,J),Y===null?K=ye:Y.sibling=ye,Y=ye,X=et}if(J===$.length)return n(C,X),Me&&en(C,J),K;if(X===null){for(;J<$.length;J++)X=M(C,$[J],O),X!==null&&(x=c(X,x,J),Y===null?K=X:Y.sibling=X,Y=X);return Me&&en(C,J),K}for(X=s(C,X);J<$.length;J++)et=j(X,C,J,$[J],O),et!==null&&(e&&et.alternate!==null&&X.delete(et.key===null?J:et.key),x=c(et,x,J),Y===null?K=et:Y.sibling=et,Y=et);return e&&X.forEach(function(Vr){return t(C,Vr)}),Me&&en(C,J),K}function G(C,x,$,O){var K=q($);if(typeof K!="function")throw Error(i(150));if($=K.call($),$==null)throw Error(i(151));for(var Y=K=null,X=x,J=x=0,et=null,ye=$.next();X!==null&&!ye.done;J++,ye=$.next()){X.index>J?(et=X,X=null):et=X.sibling;var Vr=P(C,X,ye.value,O);if(Vr===null){X===null&&(X=et);break}e&&X&&Vr.alternate===null&&t(C,X),x=c(Vr,x,J),Y===null?K=Vr:Y.sibling=Vr,Y=Vr,X=et}if(ye.done)return n(C,X),Me&&en(C,J),K;if(X===null){for(;!ye.done;J++,ye=$.next())ye=M(C,ye.value,O),ye!==null&&(x=c(ye,x,J),Y===null?K=ye:Y.sibling=ye,Y=ye);return Me&&en(C,J),K}for(X=s(C,X);!ye.done;J++,ye=$.next())ye=j(X,C,J,ye.value,O),ye!==null&&(e&&ye.alternate!==null&&X.delete(ye.key===null?J:ye.key),x=c(ye,x,J),Y===null?K=ye:Y.sibling=ye,Y=ye);return e&&X.forEach(function(ag){return t(C,ag)}),Me&&en(C,J),K}function Ge(C,x,$,O){if(typeof $=="object"&&$!==null&&$.type===pe&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case we:e:{for(var K=$.key,Y=x;Y!==null;){if(Y.key===K){if(K=$.type,K===pe){if(Y.tag===7){n(C,Y.sibling),x=a(Y,$.props.children),x.return=C,C=x;break e}}else if(Y.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===re&&ad(K)===Y.type){n(C,Y.sibling),x=a(Y,$.props),x.ref=Ro(C,Y,$),x.return=C,C=x;break e}n(C,Y);break}else t(C,Y);Y=Y.sibling}$.type===pe?(x=un($.props.children,C.mode,O,$.key),x.return=C,C=x):(O=ds($.type,$.key,$.props,null,C.mode,O),O.ref=Ro(C,x,$),O.return=C,C=O)}return p(C);case ue:e:{for(Y=$.key;x!==null;){if(x.key===Y)if(x.tag===4&&x.stateNode.containerInfo===$.containerInfo&&x.stateNode.implementation===$.implementation){n(C,x.sibling),x=a(x,$.children||[]),x.return=C,C=x;break e}else{n(C,x);break}else t(C,x);x=x.sibling}x=Ba($,C.mode,O),x.return=C,C=x}return p(C);case re:return Y=$._init,Ge(C,x,Y($._payload),O)}if(io($))return W(C,x,$,O);if(q($))return G(C,x,$,O);Vi(C,$)}return typeof $=="string"&&$!==""||typeof $=="number"?($=""+$,x!==null&&x.tag===6?(n(C,x.sibling),x=a(x,$),x.return=C,C=x):(n(C,x),x=Fa($,C.mode,O),x.return=C,C=x),p(C)):n(C,x)}return Ge}var Ln=ud(!0),cd=ud(!1),ji=zr(null),Hi=null,Mn=null,Ql=null;function Yl(){Ql=Mn=Hi=null}function Xl(e){var t=ji.current;ze(ji),e._currentValue=t}function Zl(e,t,n){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===n)break;e=e.return}}function On(e,t){Hi=e,Ql=Mn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(xt=!0),e.firstContext=null)}function Ft(e){var t=e._currentValue;if(Ql!==e)if(e={context:e,memoizedValue:t,next:null},Mn===null){if(Hi===null)throw Error(i(308));Mn=e,Hi.dependencies={lanes:0,firstContext:e}}else Mn=Mn.next=e;return t}var tn=null;function Jl(e){tn===null?tn=[e]:tn.push(e)}function dd(e,t,n,s){var a=t.interleaved;return a===null?(n.next=n,Jl(t)):(n.next=a.next,a.next=n),t.interleaved=n,gr(e,s)}function gr(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Nr=!1;function ea(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function vr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Lr(e,t,n){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(fe&2)!==0){var a=s.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),s.pending=t,gr(e,n)}return a=s.interleaved,a===null?(t.next=t,Jl(s)):(t.next=a.next,a.next=t),s.interleaved=t,gr(e,n)}function Ui(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var s=t.lanes;s&=e.pendingLanes,n|=s,t.lanes=n,fl(e,n)}}function pd(e,t){var n=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,n===s)){var a=null,c=null;if(n=n.firstBaseUpdate,n!==null){do{var p={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};c===null?a=c=p:c=c.next=p,n=n.next}while(n!==null);c===null?a=c=t:c=c.next=t}else a=c=t;n={baseState:s.baseState,firstBaseUpdate:a,lastBaseUpdate:c,shared:s.shared,effects:s.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Wi(e,t,n,s){var a=e.updateQueue;Nr=!1;var c=a.firstBaseUpdate,p=a.lastBaseUpdate,v=a.shared.pending;if(v!==null){a.shared.pending=null;var y=v,E=y.next;y.next=null,p===null?c=E:p.next=E,p=y;var L=e.alternate;L!==null&&(L=L.updateQueue,v=L.lastBaseUpdate,v!==p&&(v===null?L.firstBaseUpdate=E:v.next=E,L.lastBaseUpdate=y))}if(c!==null){var M=a.baseState;p=0,L=E=y=null,v=c;do{var P=v.lane,j=v.eventTime;if((s&P)===P){L!==null&&(L=L.next={eventTime:j,lane:0,tag:v.tag,payload:v.payload,callback:v.callback,next:null});e:{var W=e,G=v;switch(P=t,j=n,G.tag){case 1:if(W=G.payload,typeof W=="function"){M=W.call(j,M,P);break e}M=W;break e;case 3:W.flags=W.flags&-65537|128;case 0:if(W=G.payload,P=typeof W=="function"?W.call(j,M,P):W,P==null)break e;M=H({},M,P);break e;case 2:Nr=!0}}v.callback!==null&&v.lane!==0&&(e.flags|=64,P=a.effects,P===null?a.effects=[v]:P.push(v))}else j={eventTime:j,lane:P,tag:v.tag,payload:v.payload,callback:v.callback,next:null},L===null?(E=L=j,y=M):L=L.next=j,p|=P;if(v=v.next,v===null){if(v=a.shared.pending,v===null)break;P=v,v=P.next,P.next=null,a.lastBaseUpdate=P,a.shared.pending=null}}while(!0);if(L===null&&(y=M),a.baseState=y,a.firstBaseUpdate=E,a.lastBaseUpdate=L,t=a.shared.interleaved,t!==null){a=t;do p|=a.lane,a=a.next;while(a!==t)}else c===null&&(a.shared.lanes=0);on|=p,e.lanes=p,e.memoizedState=M}}function fd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var s=e[t],a=s.callback;if(a!==null){if(s.callback=null,s=n,typeof a!="function")throw Error(i(191,a));a.call(s)}}}var Po={},ir=zr(Po),No=zr(Po),Lo=zr(Po);function rn(e){if(e===Po)throw Error(i(174));return e}function ta(e,t){switch(Ee(Lo,t),Ee(No,e),Ee(ir,Po),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:rl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=rl(t,e)}ze(ir),Ee(ir,t)}function Dn(){ze(ir),ze(No),ze(Lo)}function md(e){rn(Lo.current);var t=rn(ir.current),n=rl(t,e.type);t!==n&&(Ee(No,e),Ee(ir,n))}function ra(e){No.current===e&&(ze(ir),ze(No))}var De=zr(0);function Gi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var na=[];function oa(){for(var e=0;e<na.length;e++)na[e]._workInProgressVersionPrimary=null;na.length=0}var Ki=oe.ReactCurrentDispatcher,ia=oe.ReactCurrentBatchConfig,nn=0,Ie=null,Qe=null,Ze=null,qi=!1,Mo=!1,Oo=0,zm=0;function ut(){throw Error(i(321))}function sa(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Qt(e[n],t[n]))return!1;return!0}function la(e,t,n,s,a,c){if(nn=c,Ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ki.current=e===null||e.memoizedState===null?Lm:Mm,e=n(s,a),Mo){c=0;do{if(Mo=!1,Oo=0,25<=c)throw Error(i(301));c+=1,Ze=Qe=null,t.updateQueue=null,Ki.current=Om,e=n(s,a)}while(Mo)}if(Ki.current=Xi,t=Qe!==null&&Qe.next!==null,nn=0,Ze=Qe=Ie=null,qi=!1,t)throw Error(i(300));return e}function aa(){var e=Oo!==0;return Oo=0,e}function sr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?Ie.memoizedState=Ze=e:Ze=Ze.next=e,Ze}function Bt(){if(Qe===null){var e=Ie.alternate;e=e!==null?e.memoizedState:null}else e=Qe.next;var t=Ze===null?Ie.memoizedState:Ze.next;if(t!==null)Ze=t,Qe=e;else{if(e===null)throw Error(i(310));Qe=e,e={memoizedState:Qe.memoizedState,baseState:Qe.baseState,baseQueue:Qe.baseQueue,queue:Qe.queue,next:null},Ze===null?Ie.memoizedState=Ze=e:Ze=Ze.next=e}return Ze}function Do(e,t){return typeof t=="function"?t(e):t}function ua(e){var t=Bt(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var s=Qe,a=s.baseQueue,c=n.pending;if(c!==null){if(a!==null){var p=a.next;a.next=c.next,c.next=p}s.baseQueue=a=c,n.pending=null}if(a!==null){c=a.next,s=s.baseState;var v=p=null,y=null,E=c;do{var L=E.lane;if((nn&L)===L)y!==null&&(y=y.next={lane:0,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),s=E.hasEagerState?E.eagerState:e(s,E.action);else{var M={lane:L,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null};y===null?(v=y=M,p=s):y=y.next=M,Ie.lanes|=L,on|=L}E=E.next}while(E!==null&&E!==c);y===null?p=s:y.next=v,Qt(s,t.memoizedState)||(xt=!0),t.memoizedState=s,t.baseState=p,t.baseQueue=y,n.lastRenderedState=s}if(e=n.interleaved,e!==null){a=e;do c=a.lane,Ie.lanes|=c,on|=c,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ca(e){var t=Bt(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var s=n.dispatch,a=n.pending,c=t.memoizedState;if(a!==null){n.pending=null;var p=a=a.next;do c=e(c,p.action),p=p.next;while(p!==a);Qt(c,t.memoizedState)||(xt=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),n.lastRenderedState=c}return[c,s]}function gd(){}function vd(e,t){var n=Ie,s=Bt(),a=t(),c=!Qt(s.memoizedState,a);if(c&&(s.memoizedState=a,xt=!0),s=s.queue,da(wd.bind(null,n,s,e),[e]),s.getSnapshot!==t||c||Ze!==null&&Ze.memoizedState.tag&1){if(n.flags|=2048,Io(9,bd.bind(null,n,s,a,t),void 0,null),Je===null)throw Error(i(349));(nn&30)!==0||yd(n,t,a)}return a}function yd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ie.updateQueue,t===null?(t={lastEffect:null,stores:null},Ie.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function bd(e,t,n,s){t.value=n,t.getSnapshot=s,_d(t)&&xd(e)}function wd(e,t,n){return n(function(){_d(t)&&xd(e)})}function _d(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Qt(e,n)}catch{return!0}}function xd(e){var t=gr(e,1);t!==null&&er(t,e,1,-1)}function kd(e){var t=sr();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Do,lastRenderedState:e},t.queue=e,e=e.dispatch=Nm.bind(null,Ie,e),[t.memoizedState,e]}function Io(e,t,n,s){return e={tag:e,create:t,destroy:n,deps:s,next:null},t=Ie.updateQueue,t===null?(t={lastEffect:null,stores:null},Ie.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(s=n.next,n.next=e,e.next=s,t.lastEffect=e)),e}function Sd(){return Bt().memoizedState}function Qi(e,t,n,s){var a=sr();Ie.flags|=e,a.memoizedState=Io(1|t,n,void 0,s===void 0?null:s)}function Yi(e,t,n,s){var a=Bt();s=s===void 0?null:s;var c=void 0;if(Qe!==null){var p=Qe.memoizedState;if(c=p.destroy,s!==null&&sa(s,p.deps)){a.memoizedState=Io(t,n,c,s);return}}Ie.flags|=e,a.memoizedState=Io(1|t,n,c,s)}function Cd(e,t){return Qi(8390656,8,e,t)}function da(e,t){return Yi(2048,8,e,t)}function $d(e,t){return Yi(4,2,e,t)}function Ed(e,t){return Yi(4,4,e,t)}function Ad(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Td(e,t,n){return n=n!=null?n.concat([e]):null,Yi(4,4,Ad.bind(null,t,e),n)}function ha(){}function zd(e,t){var n=Bt();t=t===void 0?null:t;var s=n.memoizedState;return s!==null&&t!==null&&sa(t,s[1])?s[0]:(n.memoizedState=[e,t],e)}function Rd(e,t){var n=Bt();t=t===void 0?null:t;var s=n.memoizedState;return s!==null&&t!==null&&sa(t,s[1])?s[0]:(e=e(),n.memoizedState=[e,t],e)}function Pd(e,t,n){return(nn&21)===0?(e.baseState&&(e.baseState=!1,xt=!0),e.memoizedState=n):(Qt(n,t)||(n=ac(),Ie.lanes|=n,on|=n,e.baseState=!0),t)}function Rm(e,t){var n=xe;xe=n!==0&&4>n?n:4,e(!0);var s=ia.transition;ia.transition={};try{e(!1),t()}finally{xe=n,ia.transition=s}}function Nd(){return Bt().memoizedState}function Pm(e,t,n){var s=Ir(e);if(n={lane:s,action:n,hasEagerState:!1,eagerState:null,next:null},Ld(e))Md(t,n);else if(n=dd(e,t,n,s),n!==null){var a=vt();er(n,e,s,a),Od(n,t,s)}}function Nm(e,t,n){var s=Ir(e),a={lane:s,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ld(e))Md(t,a);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var p=t.lastRenderedState,v=c(p,n);if(a.hasEagerState=!0,a.eagerState=v,Qt(v,p)){var y=t.interleaved;y===null?(a.next=a,Jl(t)):(a.next=y.next,y.next=a),t.interleaved=a;return}}catch{}n=dd(e,t,a,s),n!==null&&(a=vt(),er(n,e,s,a),Od(n,t,s))}}function Ld(e){var t=e.alternate;return e===Ie||t!==null&&t===Ie}function Md(e,t){Mo=qi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Od(e,t,n){if((n&4194240)!==0){var s=t.lanes;s&=e.pendingLanes,n|=s,t.lanes=n,fl(e,n)}}var Xi={readContext:Ft,useCallback:ut,useContext:ut,useEffect:ut,useImperativeHandle:ut,useInsertionEffect:ut,useLayoutEffect:ut,useMemo:ut,useReducer:ut,useRef:ut,useState:ut,useDebugValue:ut,useDeferredValue:ut,useTransition:ut,useMutableSource:ut,useSyncExternalStore:ut,useId:ut,unstable_isNewReconciler:!1},Lm={readContext:Ft,useCallback:function(e,t){return sr().memoizedState=[e,t===void 0?null:t],e},useContext:Ft,useEffect:Cd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Qi(4194308,4,Ad.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Qi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Qi(4,2,e,t)},useMemo:function(e,t){var n=sr();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var s=sr();return t=n!==void 0?n(t):t,s.memoizedState=s.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},s.queue=e,e=e.dispatch=Pm.bind(null,Ie,e),[s.memoizedState,e]},useRef:function(e){var t=sr();return e={current:e},t.memoizedState=e},useState:kd,useDebugValue:ha,useDeferredValue:function(e){return sr().memoizedState=e},useTransition:function(){var e=kd(!1),t=e[0];return e=Rm.bind(null,e[1]),sr().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var s=Ie,a=sr();if(Me){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),Je===null)throw Error(i(349));(nn&30)!==0||yd(s,t,n)}a.memoizedState=n;var c={value:n,getSnapshot:t};return a.queue=c,Cd(wd.bind(null,s,c,e),[e]),s.flags|=2048,Io(9,bd.bind(null,s,c,n,t),void 0,null),n},useId:function(){var e=sr(),t=Je.identifierPrefix;if(Me){var n=mr,s=fr;n=(s&~(1<<32-qt(s)-1)).toString(32)+n,t=":"+t+"R"+n,n=Oo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=zm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Mm={readContext:Ft,useCallback:zd,useContext:Ft,useEffect:da,useImperativeHandle:Td,useInsertionEffect:$d,useLayoutEffect:Ed,useMemo:Rd,useReducer:ua,useRef:Sd,useState:function(){return ua(Do)},useDebugValue:ha,useDeferredValue:function(e){var t=Bt();return Pd(t,Qe.memoizedState,e)},useTransition:function(){var e=ua(Do)[0],t=Bt().memoizedState;return[e,t]},useMutableSource:gd,useSyncExternalStore:vd,useId:Nd,unstable_isNewReconciler:!1},Om={readContext:Ft,useCallback:zd,useContext:Ft,useEffect:da,useImperativeHandle:Td,useInsertionEffect:$d,useLayoutEffect:Ed,useMemo:Rd,useReducer:ca,useRef:Sd,useState:function(){return ca(Do)},useDebugValue:ha,useDeferredValue:function(e){var t=Bt();return Qe===null?t.memoizedState=e:Pd(t,Qe.memoizedState,e)},useTransition:function(){var e=ca(Do)[0],t=Bt().memoizedState;return[e,t]},useMutableSource:gd,useSyncExternalStore:vd,useId:Nd,unstable_isNewReconciler:!1};function Xt(e,t){if(e&&e.defaultProps){t=H({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function pa(e,t,n,s){t=e.memoizedState,n=n(s,t),n=n==null?t:H({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Zi={isMounted:function(e){return(e=e._reactInternals)?Yr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var s=vt(),a=Ir(e),c=vr(s,a);c.payload=t,n!=null&&(c.callback=n),t=Lr(e,c,a),t!==null&&(er(t,e,a,s),Ui(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var s=vt(),a=Ir(e),c=vr(s,a);c.tag=1,c.payload=t,n!=null&&(c.callback=n),t=Lr(e,c,a),t!==null&&(er(t,e,a,s),Ui(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=vt(),s=Ir(e),a=vr(n,s);a.tag=2,t!=null&&(a.callback=t),t=Lr(e,a,s),t!==null&&(er(t,e,s,n),Ui(t,e,s))}};function Dd(e,t,n,s,a,c,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,c,p):t.prototype&&t.prototype.isPureReactComponent?!So(n,s)||!So(a,c):!0}function Id(e,t,n){var s=!1,a=Rr,c=t.contextType;return typeof c=="object"&&c!==null?c=Ft(c):(a=_t(t)?Zr:at.current,s=t.contextTypes,c=(s=s!=null)?zn(e,a):Rr),t=new t(n,c),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Zi,e.stateNode=t,t._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=c),t}function Fd(e,t,n,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,s),t.state!==e&&Zi.enqueueReplaceState(t,t.state,null)}function fa(e,t,n,s){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},ea(e);var c=t.contextType;typeof c=="object"&&c!==null?a.context=Ft(c):(c=_t(t)?Zr:at.current,a.context=zn(e,c)),a.state=e.memoizedState,c=t.getDerivedStateFromProps,typeof c=="function"&&(pa(e,t,c,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&Zi.enqueueReplaceState(a,a.state,null),Wi(e,n,a,s),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function In(e,t){try{var n="",s=t;do n+=ge(s),s=s.return;while(s);var a=n}catch(c){a=`
Error generating stack: `+c.message+`
`+c.stack}return{value:e,source:t,stack:a,digest:null}}function ma(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ga(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Dm=typeof WeakMap=="function"?WeakMap:Map;function Bd(e,t,n){n=vr(-1,n),n.tag=3,n.payload={element:null};var s=t.value;return n.callback=function(){is||(is=!0,Ra=s),ga(e,t)},n}function Vd(e,t,n){n=vr(-1,n),n.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var a=t.value;n.payload=function(){return s(a)},n.callback=function(){ga(e,t)}}var c=e.stateNode;return c!==null&&typeof c.componentDidCatch=="function"&&(n.callback=function(){ga(e,t),typeof s!="function"&&(Or===null?Or=new Set([this]):Or.add(this));var p=t.stack;this.componentDidCatch(t.value,{componentStack:p!==null?p:""})}),n}function jd(e,t,n){var s=e.pingCache;if(s===null){s=e.pingCache=new Dm;var a=new Set;s.set(t,a)}else a=s.get(t),a===void 0&&(a=new Set,s.set(t,a));a.has(n)||(a.add(n),e=Xm.bind(null,e,t,n),t.then(e,e))}function Hd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ud(e,t,n,s,a){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=vr(-1,1),t.tag=2,Lr(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var Im=oe.ReactCurrentOwner,xt=!1;function gt(e,t,n,s){t.child=e===null?cd(t,null,n,s):Ln(t,e.child,n,s)}function Wd(e,t,n,s,a){n=n.render;var c=t.ref;return On(t,a),s=la(e,t,n,s,c,a),n=aa(),e!==null&&!xt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,yr(e,t,a)):(Me&&n&&Ul(t),t.flags|=1,gt(e,t,s,a),t.child)}function Gd(e,t,n,s,a){if(e===null){var c=n.type;return typeof c=="function"&&!Ia(c)&&c.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=c,Kd(e,t,c,s,a)):(e=ds(n.type,null,s,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,(e.lanes&a)===0){var p=c.memoizedProps;if(n=n.compare,n=n!==null?n:So,n(p,s)&&e.ref===t.ref)return yr(e,t,a)}return t.flags|=1,e=Br(c,s),e.ref=t.ref,e.return=t,t.child=e}function Kd(e,t,n,s,a){if(e!==null){var c=e.memoizedProps;if(So(c,s)&&e.ref===t.ref)if(xt=!1,t.pendingProps=s=c,(e.lanes&a)!==0)(e.flags&131072)!==0&&(xt=!0);else return t.lanes=e.lanes,yr(e,t,a)}return va(e,t,n,s,a)}function qd(e,t,n){var s=t.pendingProps,a=s.children,c=e!==null?e.memoizedState:null;if(s.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ee(Bn,Pt),Pt|=n;else{if((n&1073741824)===0)return e=c!==null?c.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ee(Bn,Pt),Pt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=c!==null?c.baseLanes:n,Ee(Bn,Pt),Pt|=s}else c!==null?(s=c.baseLanes|n,t.memoizedState=null):s=n,Ee(Bn,Pt),Pt|=s;return gt(e,t,a,n),t.child}function Qd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function va(e,t,n,s,a){var c=_t(n)?Zr:at.current;return c=zn(t,c),On(t,a),n=la(e,t,n,s,c,a),s=aa(),e!==null&&!xt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,yr(e,t,a)):(Me&&s&&Ul(t),t.flags|=1,gt(e,t,n,a),t.child)}function Yd(e,t,n,s,a){if(_t(n)){var c=!0;Oi(t)}else c=!1;if(On(t,a),t.stateNode===null)es(e,t),Id(t,n,s),fa(t,n,s,a),s=!0;else if(e===null){var p=t.stateNode,v=t.memoizedProps;p.props=v;var y=p.context,E=n.contextType;typeof E=="object"&&E!==null?E=Ft(E):(E=_t(n)?Zr:at.current,E=zn(t,E));var L=n.getDerivedStateFromProps,M=typeof L=="function"||typeof p.getSnapshotBeforeUpdate=="function";M||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(v!==s||y!==E)&&Fd(t,p,s,E),Nr=!1;var P=t.memoizedState;p.state=P,Wi(t,s,p,a),y=t.memoizedState,v!==s||P!==y||wt.current||Nr?(typeof L=="function"&&(pa(t,n,L,s),y=t.memoizedState),(v=Nr||Dd(t,n,v,s,P,y,E))?(M||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(t.flags|=4194308)):(typeof p.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=y),p.props=s,p.state=y,p.context=E,s=v):(typeof p.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{p=t.stateNode,hd(e,t),v=t.memoizedProps,E=t.type===t.elementType?v:Xt(t.type,v),p.props=E,M=t.pendingProps,P=p.context,y=n.contextType,typeof y=="object"&&y!==null?y=Ft(y):(y=_t(n)?Zr:at.current,y=zn(t,y));var j=n.getDerivedStateFromProps;(L=typeof j=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(v!==M||P!==y)&&Fd(t,p,s,y),Nr=!1,P=t.memoizedState,p.state=P,Wi(t,s,p,a);var W=t.memoizedState;v!==M||P!==W||wt.current||Nr?(typeof j=="function"&&(pa(t,n,j,s),W=t.memoizedState),(E=Nr||Dd(t,n,E,s,P,W,y)||!1)?(L||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(s,W,y),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(s,W,y)),typeof p.componentDidUpdate=="function"&&(t.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof p.componentDidUpdate!="function"||v===e.memoizedProps&&P===e.memoizedState||(t.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&P===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=W),p.props=s,p.state=W,p.context=y,s=E):(typeof p.componentDidUpdate!="function"||v===e.memoizedProps&&P===e.memoizedState||(t.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&P===e.memoizedState||(t.flags|=1024),s=!1)}return ya(e,t,n,s,c,a)}function ya(e,t,n,s,a,c){Qd(e,t);var p=(t.flags&128)!==0;if(!s&&!p)return a&&td(t,n,!1),yr(e,t,c);s=t.stateNode,Im.current=t;var v=p&&typeof n.getDerivedStateFromError!="function"?null:s.render();return t.flags|=1,e!==null&&p?(t.child=Ln(t,e.child,null,c),t.child=Ln(t,null,v,c)):gt(e,t,v,c),t.memoizedState=s.state,a&&td(t,n,!0),t.child}function Xd(e){var t=e.stateNode;t.pendingContext?Jc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Jc(e,t.context,!1),ta(e,t.containerInfo)}function Zd(e,t,n,s,a){return Nn(),ql(a),t.flags|=256,gt(e,t,n,s),t.child}var ba={dehydrated:null,treeContext:null,retryLane:0};function wa(e){return{baseLanes:e,cachePool:null,transitions:null}}function Jd(e,t,n){var s=t.pendingProps,a=De.current,c=!1,p=(t.flags&128)!==0,v;if((v=p)||(v=e!==null&&e.memoizedState===null?!1:(a&2)!==0),v?(c=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),Ee(De,a&1),e===null)return Kl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(p=s.children,e=s.fallback,c?(s=t.mode,c=t.child,p={mode:"hidden",children:p},(s&1)===0&&c!==null?(c.childLanes=0,c.pendingProps=p):c=hs(p,s,0,null),e=un(e,s,n,null),c.return=t,e.return=t,c.sibling=e,t.child=c,t.child.memoizedState=wa(n),t.memoizedState=ba,e):_a(t,p));if(a=e.memoizedState,a!==null&&(v=a.dehydrated,v!==null))return Fm(e,t,p,s,v,a,n);if(c){c=s.fallback,p=t.mode,a=e.child,v=a.sibling;var y={mode:"hidden",children:s.children};return(p&1)===0&&t.child!==a?(s=t.child,s.childLanes=0,s.pendingProps=y,t.deletions=null):(s=Br(a,y),s.subtreeFlags=a.subtreeFlags&14680064),v!==null?c=Br(v,c):(c=un(c,p,n,null),c.flags|=2),c.return=t,s.return=t,s.sibling=c,t.child=s,s=c,c=t.child,p=e.child.memoizedState,p=p===null?wa(n):{baseLanes:p.baseLanes|n,cachePool:null,transitions:p.transitions},c.memoizedState=p,c.childLanes=e.childLanes&~n,t.memoizedState=ba,s}return c=e.child,e=c.sibling,s=Br(c,{mode:"visible",children:s.children}),(t.mode&1)===0&&(s.lanes=n),s.return=t,s.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=s,t.memoizedState=null,s}function _a(e,t){return t=hs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ji(e,t,n,s){return s!==null&&ql(s),Ln(t,e.child,null,n),e=_a(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Fm(e,t,n,s,a,c,p){if(n)return t.flags&256?(t.flags&=-257,s=ma(Error(i(422))),Ji(e,t,p,s)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(c=s.fallback,a=t.mode,s=hs({mode:"visible",children:s.children},a,0,null),c=un(c,a,p,null),c.flags|=2,s.return=t,c.return=t,s.sibling=c,t.child=s,(t.mode&1)!==0&&Ln(t,e.child,null,p),t.child.memoizedState=wa(p),t.memoizedState=ba,c);if((t.mode&1)===0)return Ji(e,t,p,null);if(a.data==="$!"){if(s=a.nextSibling&&a.nextSibling.dataset,s)var v=s.dgst;return s=v,c=Error(i(419)),s=ma(c,s,void 0),Ji(e,t,p,s)}if(v=(p&e.childLanes)!==0,xt||v){if(s=Je,s!==null){switch(p&-p){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(s.suspendedLanes|p))!==0?0:a,a!==0&&a!==c.retryLane&&(c.retryLane=a,gr(e,a),er(s,e,a,-1))}return Da(),s=ma(Error(i(421))),Ji(e,t,p,s)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=Zm.bind(null,e),a._reactRetry=t,null):(e=c.treeContext,Rt=Tr(a.nextSibling),zt=t,Me=!0,Yt=null,e!==null&&(Dt[It++]=fr,Dt[It++]=mr,Dt[It++]=Jr,fr=e.id,mr=e.overflow,Jr=t),t=_a(t,s.children),t.flags|=4096,t)}function eh(e,t,n){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),Zl(e.return,t,n)}function xa(e,t,n,s,a){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:n,tailMode:a}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=s,c.tail=n,c.tailMode=a)}function th(e,t,n){var s=t.pendingProps,a=s.revealOrder,c=s.tail;if(gt(e,t,s.children,n),s=De.current,(s&2)!==0)s=s&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&eh(e,n,t);else if(e.tag===19)eh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(Ee(De,s),(t.mode&1)===0)t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&Gi(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),xa(t,!1,a,n,c);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Gi(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}xa(t,!0,n,null,c);break;case"together":xa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function es(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function yr(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),on|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=Br(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Br(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Bm(e,t,n){switch(t.tag){case 3:Xd(t),Nn();break;case 5:md(t);break;case 1:_t(t.type)&&Oi(t);break;case 4:ta(t,t.stateNode.containerInfo);break;case 10:var s=t.type._context,a=t.memoizedProps.value;Ee(ji,s._currentValue),s._currentValue=a;break;case 13:if(s=t.memoizedState,s!==null)return s.dehydrated!==null?(Ee(De,De.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Jd(e,t,n):(Ee(De,De.current&1),e=yr(e,t,n),e!==null?e.sibling:null);Ee(De,De.current&1);break;case 19:if(s=(n&t.childLanes)!==0,(e.flags&128)!==0){if(s)return th(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Ee(De,De.current),s)break;return null;case 22:case 23:return t.lanes=0,qd(e,t,n)}return yr(e,t,n)}var rh,ka,nh,oh;rh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},ka=function(){},nh=function(e,t,n,s){var a=e.memoizedProps;if(a!==s){e=t.stateNode,rn(ir.current);var c=null;switch(n){case"input":a=Zs(e,a),s=Zs(e,s),c=[];break;case"select":a=H({},a,{value:void 0}),s=H({},s,{value:void 0}),c=[];break;case"textarea":a=tl(e,a),s=tl(e,s),c=[];break;default:typeof a.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=Ni)}nl(n,s);var p;n=null;for(E in a)if(!s.hasOwnProperty(E)&&a.hasOwnProperty(E)&&a[E]!=null)if(E==="style"){var v=a[E];for(p in v)v.hasOwnProperty(p)&&(n||(n={}),n[p]="")}else E!=="dangerouslySetInnerHTML"&&E!=="children"&&E!=="suppressContentEditableWarning"&&E!=="suppressHydrationWarning"&&E!=="autoFocus"&&(u.hasOwnProperty(E)?c||(c=[]):(c=c||[]).push(E,null));for(E in s){var y=s[E];if(v=a?.[E],s.hasOwnProperty(E)&&y!==v&&(y!=null||v!=null))if(E==="style")if(v){for(p in v)!v.hasOwnProperty(p)||y&&y.hasOwnProperty(p)||(n||(n={}),n[p]="");for(p in y)y.hasOwnProperty(p)&&v[p]!==y[p]&&(n||(n={}),n[p]=y[p])}else n||(c||(c=[]),c.push(E,n)),n=y;else E==="dangerouslySetInnerHTML"?(y=y?y.__html:void 0,v=v?v.__html:void 0,y!=null&&v!==y&&(c=c||[]).push(E,y)):E==="children"?typeof y!="string"&&typeof y!="number"||(c=c||[]).push(E,""+y):E!=="suppressContentEditableWarning"&&E!=="suppressHydrationWarning"&&(u.hasOwnProperty(E)?(y!=null&&E==="onScroll"&&Te("scroll",e),c||v===y||(c=[])):(c=c||[]).push(E,y))}n&&(c=c||[]).push("style",n);var E=c;(t.updateQueue=E)&&(t.flags|=4)}},oh=function(e,t,n,s){n!==s&&(t.flags|=4)};function Fo(e,t){if(!Me)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function ct(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,s=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,s|=a.subtreeFlags&14680064,s|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,s|=a.subtreeFlags,s|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=s,e.childLanes=n,t}function Vm(e,t,n){var s=t.pendingProps;switch(Wl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ct(t),null;case 1:return _t(t.type)&&Mi(),ct(t),null;case 3:return s=t.stateNode,Dn(),ze(wt),ze(at),oa(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(Bi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Yt!==null&&(La(Yt),Yt=null))),ka(e,t),ct(t),null;case 5:ra(t);var a=rn(Lo.current);if(n=t.type,e!==null&&t.stateNode!=null)nh(e,t,n,s,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!s){if(t.stateNode===null)throw Error(i(166));return ct(t),null}if(e=rn(ir.current),Bi(t)){s=t.stateNode,n=t.type;var c=t.memoizedProps;switch(s[or]=t,s[To]=c,e=(t.mode&1)!==0,n){case"dialog":Te("cancel",s),Te("close",s);break;case"iframe":case"object":case"embed":Te("load",s);break;case"video":case"audio":for(a=0;a<$o.length;a++)Te($o[a],s);break;case"source":Te("error",s);break;case"img":case"image":case"link":Te("error",s),Te("load",s);break;case"details":Te("toggle",s);break;case"input":Iu(s,c),Te("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!c.multiple},Te("invalid",s);break;case"textarea":Vu(s,c),Te("invalid",s)}nl(n,c),a=null;for(var p in c)if(c.hasOwnProperty(p)){var v=c[p];p==="children"?typeof v=="string"?s.textContent!==v&&(c.suppressHydrationWarning!==!0&&Pi(s.textContent,v,e),a=["children",v]):typeof v=="number"&&s.textContent!==""+v&&(c.suppressHydrationWarning!==!0&&Pi(s.textContent,v,e),a=["children",""+v]):u.hasOwnProperty(p)&&v!=null&&p==="onScroll"&&Te("scroll",s)}switch(n){case"input":ui(s),Bu(s,c,!0);break;case"textarea":ui(s),Hu(s);break;case"select":case"option":break;default:typeof c.onClick=="function"&&(s.onclick=Ni)}s=a,t.updateQueue=s,s!==null&&(t.flags|=4)}else{p=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Uu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=p.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=p.createElement(n,{is:s.is}):(e=p.createElement(n),n==="select"&&(p=e,s.multiple?p.multiple=!0:s.size&&(p.size=s.size))):e=p.createElementNS(e,n),e[or]=t,e[To]=s,rh(e,t,!1,!1),t.stateNode=e;e:{switch(p=ol(n,s),n){case"dialog":Te("cancel",e),Te("close",e),a=s;break;case"iframe":case"object":case"embed":Te("load",e),a=s;break;case"video":case"audio":for(a=0;a<$o.length;a++)Te($o[a],e);a=s;break;case"source":Te("error",e),a=s;break;case"img":case"image":case"link":Te("error",e),Te("load",e),a=s;break;case"details":Te("toggle",e),a=s;break;case"input":Iu(e,s),a=Zs(e,s),Te("invalid",e);break;case"option":a=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},a=H({},s,{value:void 0}),Te("invalid",e);break;case"textarea":Vu(e,s),a=tl(e,s),Te("invalid",e);break;default:a=s}nl(n,a),v=a;for(c in v)if(v.hasOwnProperty(c)){var y=v[c];c==="style"?Ku(e,y):c==="dangerouslySetInnerHTML"?(y=y?y.__html:void 0,y!=null&&Wu(e,y)):c==="children"?typeof y=="string"?(n!=="textarea"||y!=="")&&so(e,y):typeof y=="number"&&so(e,""+y):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(u.hasOwnProperty(c)?y!=null&&c==="onScroll"&&Te("scroll",e):y!=null&&ne(e,c,y,p))}switch(n){case"input":ui(e),Bu(e,s,!1);break;case"textarea":ui(e),Hu(e);break;case"option":s.value!=null&&e.setAttribute("value",""+_e(s.value));break;case"select":e.multiple=!!s.multiple,c=s.value,c!=null?yn(e,!!s.multiple,c,!1):s.defaultValue!=null&&yn(e,!!s.multiple,s.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Ni)}switch(n){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ct(t),null;case 6:if(e&&t.stateNode!=null)oh(e,t,e.memoizedProps,s);else{if(typeof s!="string"&&t.stateNode===null)throw Error(i(166));if(n=rn(Lo.current),rn(ir.current),Bi(t)){if(s=t.stateNode,n=t.memoizedProps,s[or]=t,(c=s.nodeValue!==n)&&(e=zt,e!==null))switch(e.tag){case 3:Pi(s.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Pi(s.nodeValue,n,(e.mode&1)!==0)}c&&(t.flags|=4)}else s=(n.nodeType===9?n:n.ownerDocument).createTextNode(s),s[or]=t,t.stateNode=s}return ct(t),null;case 13:if(ze(De),s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Me&&Rt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)ld(),Nn(),t.flags|=98560,c=!1;else if(c=Bi(t),s!==null&&s.dehydrated!==null){if(e===null){if(!c)throw Error(i(318));if(c=t.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(i(317));c[or]=t}else Nn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ct(t),c=!1}else Yt!==null&&(La(Yt),Yt=null),c=!0;if(!c)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(De.current&1)!==0?Ye===0&&(Ye=3):Da())),t.updateQueue!==null&&(t.flags|=4),ct(t),null);case 4:return Dn(),ka(e,t),e===null&&Eo(t.stateNode.containerInfo),ct(t),null;case 10:return Xl(t.type._context),ct(t),null;case 17:return _t(t.type)&&Mi(),ct(t),null;case 19:if(ze(De),c=t.memoizedState,c===null)return ct(t),null;if(s=(t.flags&128)!==0,p=c.rendering,p===null)if(s)Fo(c,!1);else{if(Ye!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(p=Gi(e),p!==null){for(t.flags|=128,Fo(c,!1),s=p.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),t.subtreeFlags=0,s=n,n=t.child;n!==null;)c=n,e=s,c.flags&=14680066,p=c.alternate,p===null?(c.childLanes=0,c.lanes=e,c.child=null,c.subtreeFlags=0,c.memoizedProps=null,c.memoizedState=null,c.updateQueue=null,c.dependencies=null,c.stateNode=null):(c.childLanes=p.childLanes,c.lanes=p.lanes,c.child=p.child,c.subtreeFlags=0,c.deletions=null,c.memoizedProps=p.memoizedProps,c.memoizedState=p.memoizedState,c.updateQueue=p.updateQueue,c.type=p.type,e=p.dependencies,c.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ee(De,De.current&1|2),t.child}e=e.sibling}c.tail!==null&&We()>Vn&&(t.flags|=128,s=!0,Fo(c,!1),t.lanes=4194304)}else{if(!s)if(e=Gi(p),e!==null){if(t.flags|=128,s=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Fo(c,!0),c.tail===null&&c.tailMode==="hidden"&&!p.alternate&&!Me)return ct(t),null}else 2*We()-c.renderingStartTime>Vn&&n!==1073741824&&(t.flags|=128,s=!0,Fo(c,!1),t.lanes=4194304);c.isBackwards?(p.sibling=t.child,t.child=p):(n=c.last,n!==null?n.sibling=p:t.child=p,c.last=p)}return c.tail!==null?(t=c.tail,c.rendering=t,c.tail=t.sibling,c.renderingStartTime=We(),t.sibling=null,n=De.current,Ee(De,s?n&1|2:n&1),t):(ct(t),null);case 22:case 23:return Oa(),s=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(t.flags|=8192),s&&(t.mode&1)!==0?(Pt&1073741824)!==0&&(ct(t),t.subtreeFlags&6&&(t.flags|=8192)):ct(t),null;case 24:return null;case 25:return null}throw Error(i(156,t.tag))}function jm(e,t){switch(Wl(t),t.tag){case 1:return _t(t.type)&&Mi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Dn(),ze(wt),ze(at),oa(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return ra(t),null;case 13:if(ze(De),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Nn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ze(De),null;case 4:return Dn(),null;case 10:return Xl(t.type._context),null;case 22:case 23:return Oa(),null;case 24:return null;default:return null}}var ts=!1,dt=!1,Hm=typeof WeakSet=="function"?WeakSet:Set,U=null;function Fn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(s){Ve(e,t,s)}else n.current=null}function Sa(e,t,n){try{n()}catch(s){Ve(e,t,s)}}var ih=!1;function Um(e,t){if(Ol=_i,e=Dc(),Al(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var s=n.getSelection&&n.getSelection();if(s&&s.rangeCount!==0){n=s.anchorNode;var a=s.anchorOffset,c=s.focusNode;s=s.focusOffset;try{n.nodeType,c.nodeType}catch{n=null;break e}var p=0,v=-1,y=-1,E=0,L=0,M=e,P=null;t:for(;;){for(var j;M!==n||a!==0&&M.nodeType!==3||(v=p+a),M!==c||s!==0&&M.nodeType!==3||(y=p+s),M.nodeType===3&&(p+=M.nodeValue.length),(j=M.firstChild)!==null;)P=M,M=j;for(;;){if(M===e)break t;if(P===n&&++E===a&&(v=p),P===c&&++L===s&&(y=p),(j=M.nextSibling)!==null)break;M=P,P=M.parentNode}M=j}n=v===-1||y===-1?null:{start:v,end:y}}else n=null}n=n||{start:0,end:0}}else n=null;for(Dl={focusedElem:e,selectionRange:n},_i=!1,U=t;U!==null;)if(t=U,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,U=e;else for(;U!==null;){t=U;try{var W=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(W!==null){var G=W.memoizedProps,Ge=W.memoizedState,C=t.stateNode,x=C.getSnapshotBeforeUpdate(t.elementType===t.type?G:Xt(t.type,G),Ge);C.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var $=t.stateNode.containerInfo;$.nodeType===1?$.textContent="":$.nodeType===9&&$.documentElement&&$.removeChild($.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(O){Ve(t,t.return,O)}if(e=t.sibling,e!==null){e.return=t.return,U=e;break}U=t.return}return W=ih,ih=!1,W}function Bo(e,t,n){var s=t.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&e)===e){var c=a.destroy;a.destroy=void 0,c!==void 0&&Sa(t,n,c)}a=a.next}while(a!==s)}}function rs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var s=n.create;n.destroy=s()}n=n.next}while(n!==t)}}function Ca(e){var t=e.ref;if(t!==null){var n=e.stateNode;e.tag,e=n,typeof t=="function"?t(e):t.current=e}}function sh(e){var t=e.alternate;t!==null&&(e.alternate=null,sh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[or],delete t[To],delete t[Vl],delete t[$m],delete t[Em])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function lh(e){return e.tag===5||e.tag===3||e.tag===4}function ah(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||lh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $a(e,t,n){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ni));else if(s!==4&&(e=e.child,e!==null))for($a(e,t,n),e=e.sibling;e!==null;)$a(e,t,n),e=e.sibling}function Ea(e,t,n){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(Ea(e,t,n),e=e.sibling;e!==null;)Ea(e,t,n),e=e.sibling}var it=null,Zt=!1;function Mr(e,t,n){for(n=n.child;n!==null;)uh(e,t,n),n=n.sibling}function uh(e,t,n){if(nr&&typeof nr.onCommitFiberUnmount=="function")try{nr.onCommitFiberUnmount(mi,n)}catch{}switch(n.tag){case 5:dt||Fn(n,t);case 6:var s=it,a=Zt;it=null,Mr(e,t,n),it=s,Zt=a,it!==null&&(Zt?(e=it,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):it.removeChild(n.stateNode));break;case 18:it!==null&&(Zt?(e=it,n=n.stateNode,e.nodeType===8?Bl(e.parentNode,n):e.nodeType===1&&Bl(e,n),yo(e)):Bl(it,n.stateNode));break;case 4:s=it,a=Zt,it=n.stateNode.containerInfo,Zt=!0,Mr(e,t,n),it=s,Zt=a;break;case 0:case 11:case 14:case 15:if(!dt&&(s=n.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){a=s=s.next;do{var c=a,p=c.destroy;c=c.tag,p!==void 0&&((c&2)!==0||(c&4)!==0)&&Sa(n,t,p),a=a.next}while(a!==s)}Mr(e,t,n);break;case 1:if(!dt&&(Fn(n,t),s=n.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=n.memoizedProps,s.state=n.memoizedState,s.componentWillUnmount()}catch(v){Ve(n,t,v)}Mr(e,t,n);break;case 21:Mr(e,t,n);break;case 22:n.mode&1?(dt=(s=dt)||n.memoizedState!==null,Mr(e,t,n),dt=s):Mr(e,t,n);break;default:Mr(e,t,n)}}function ch(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Hm),t.forEach(function(s){var a=Jm.bind(null,e,s);n.has(s)||(n.add(s),s.then(a,a))})}}function Jt(e,t){var n=t.deletions;if(n!==null)for(var s=0;s<n.length;s++){var a=n[s];try{var c=e,p=t,v=p;e:for(;v!==null;){switch(v.tag){case 5:it=v.stateNode,Zt=!1;break e;case 3:it=v.stateNode.containerInfo,Zt=!0;break e;case 4:it=v.stateNode.containerInfo,Zt=!0;break e}v=v.return}if(it===null)throw Error(i(160));uh(c,p,a),it=null,Zt=!1;var y=a.alternate;y!==null&&(y.return=null),a.return=null}catch(E){Ve(a,t,E)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)dh(t,e),t=t.sibling}function dh(e,t){var n=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Jt(t,e),lr(e),s&4){try{Bo(3,e,e.return),rs(3,e)}catch(G){Ve(e,e.return,G)}try{Bo(5,e,e.return)}catch(G){Ve(e,e.return,G)}}break;case 1:Jt(t,e),lr(e),s&512&&n!==null&&Fn(n,n.return);break;case 5:if(Jt(t,e),lr(e),s&512&&n!==null&&Fn(n,n.return),e.flags&32){var a=e.stateNode;try{so(a,"")}catch(G){Ve(e,e.return,G)}}if(s&4&&(a=e.stateNode,a!=null)){var c=e.memoizedProps,p=n!==null?n.memoizedProps:c,v=e.type,y=e.updateQueue;if(e.updateQueue=null,y!==null)try{v==="input"&&c.type==="radio"&&c.name!=null&&Fu(a,c),ol(v,p);var E=ol(v,c);for(p=0;p<y.length;p+=2){var L=y[p],M=y[p+1];L==="style"?Ku(a,M):L==="dangerouslySetInnerHTML"?Wu(a,M):L==="children"?so(a,M):ne(a,L,M,E)}switch(v){case"input":Js(a,c);break;case"textarea":ju(a,c);break;case"select":var P=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!c.multiple;var j=c.value;j!=null?yn(a,!!c.multiple,j,!1):P!==!!c.multiple&&(c.defaultValue!=null?yn(a,!!c.multiple,c.defaultValue,!0):yn(a,!!c.multiple,c.multiple?[]:"",!1))}a[To]=c}catch(G){Ve(e,e.return,G)}}break;case 6:if(Jt(t,e),lr(e),s&4){if(e.stateNode===null)throw Error(i(162));a=e.stateNode,c=e.memoizedProps;try{a.nodeValue=c}catch(G){Ve(e,e.return,G)}}break;case 3:if(Jt(t,e),lr(e),s&4&&n!==null&&n.memoizedState.isDehydrated)try{yo(t.containerInfo)}catch(G){Ve(e,e.return,G)}break;case 4:Jt(t,e),lr(e);break;case 13:Jt(t,e),lr(e),a=e.child,a.flags&8192&&(c=a.memoizedState!==null,a.stateNode.isHidden=c,!c||a.alternate!==null&&a.alternate.memoizedState!==null||(za=We())),s&4&&ch(e);break;case 22:if(L=n!==null&&n.memoizedState!==null,e.mode&1?(dt=(E=dt)||L,Jt(t,e),dt=E):Jt(t,e),lr(e),s&8192){if(E=e.memoizedState!==null,(e.stateNode.isHidden=E)&&!L&&(e.mode&1)!==0)for(U=e,L=e.child;L!==null;){for(M=U=L;U!==null;){switch(P=U,j=P.child,P.tag){case 0:case 11:case 14:case 15:Bo(4,P,P.return);break;case 1:Fn(P,P.return);var W=P.stateNode;if(typeof W.componentWillUnmount=="function"){s=P,n=P.return;try{t=s,W.props=t.memoizedProps,W.state=t.memoizedState,W.componentWillUnmount()}catch(G){Ve(s,n,G)}}break;case 5:Fn(P,P.return);break;case 22:if(P.memoizedState!==null){fh(M);continue}}j!==null?(j.return=P,U=j):fh(M)}L=L.sibling}e:for(L=null,M=e;;){if(M.tag===5){if(L===null){L=M;try{a=M.stateNode,E?(c=a.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none"):(v=M.stateNode,y=M.memoizedProps.style,p=y!=null&&y.hasOwnProperty("display")?y.display:null,v.style.display=Gu("display",p))}catch(G){Ve(e,e.return,G)}}}else if(M.tag===6){if(L===null)try{M.stateNode.nodeValue=E?"":M.memoizedProps}catch(G){Ve(e,e.return,G)}}else if((M.tag!==22&&M.tag!==23||M.memoizedState===null||M===e)&&M.child!==null){M.child.return=M,M=M.child;continue}if(M===e)break e;for(;M.sibling===null;){if(M.return===null||M.return===e)break e;L===M&&(L=null),M=M.return}L===M&&(L=null),M.sibling.return=M.return,M=M.sibling}}break;case 19:Jt(t,e),lr(e),s&4&&ch(e);break;case 21:break;default:Jt(t,e),lr(e)}}function lr(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(lh(n)){var s=n;break e}n=n.return}throw Error(i(160))}switch(s.tag){case 5:var a=s.stateNode;s.flags&32&&(so(a,""),s.flags&=-33);var c=ah(e);Ea(e,c,a);break;case 3:case 4:var p=s.stateNode.containerInfo,v=ah(e);$a(e,v,p);break;default:throw Error(i(161))}}catch(y){Ve(e,e.return,y)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Wm(e,t,n){U=e,hh(e)}function hh(e,t,n){for(var s=(e.mode&1)!==0;U!==null;){var a=U,c=a.child;if(a.tag===22&&s){var p=a.memoizedState!==null||ts;if(!p){var v=a.alternate,y=v!==null&&v.memoizedState!==null||dt;v=ts;var E=dt;if(ts=p,(dt=y)&&!E)for(U=a;U!==null;)p=U,y=p.child,p.tag===22&&p.memoizedState!==null?mh(a):y!==null?(y.return=p,U=y):mh(a);for(;c!==null;)U=c,hh(c),c=c.sibling;U=a,ts=v,dt=E}ph(e)}else(a.subtreeFlags&8772)!==0&&c!==null?(c.return=a,U=c):ph(e)}}function ph(e){for(;U!==null;){var t=U;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:dt||rs(5,t);break;case 1:var s=t.stateNode;if(t.flags&4&&!dt)if(n===null)s.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:Xt(t.type,n.memoizedProps);s.componentDidUpdate(a,n.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var c=t.updateQueue;c!==null&&fd(t,c,s);break;case 3:var p=t.updateQueue;if(p!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}fd(t,p,n)}break;case 5:var v=t.stateNode;if(n===null&&t.flags&4){n=v;var y=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":y.autoFocus&&n.focus();break;case"img":y.src&&(n.src=y.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var E=t.alternate;if(E!==null){var L=E.memoizedState;if(L!==null){var M=L.dehydrated;M!==null&&yo(M)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}dt||t.flags&512&&Ca(t)}catch(P){Ve(t,t.return,P)}}if(t===e){U=null;break}if(n=t.sibling,n!==null){n.return=t.return,U=n;break}U=t.return}}function fh(e){for(;U!==null;){var t=U;if(t===e){U=null;break}var n=t.sibling;if(n!==null){n.return=t.return,U=n;break}U=t.return}}function mh(e){for(;U!==null;){var t=U;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rs(4,t)}catch(y){Ve(t,n,y)}break;case 1:var s=t.stateNode;if(typeof s.componentDidMount=="function"){var a=t.return;try{s.componentDidMount()}catch(y){Ve(t,a,y)}}var c=t.return;try{Ca(t)}catch(y){Ve(t,c,y)}break;case 5:var p=t.return;try{Ca(t)}catch(y){Ve(t,p,y)}}}catch(y){Ve(t,t.return,y)}if(t===e){U=null;break}var v=t.sibling;if(v!==null){v.return=t.return,U=v;break}U=t.return}}var Gm=Math.ceil,ns=oe.ReactCurrentDispatcher,Aa=oe.ReactCurrentOwner,Vt=oe.ReactCurrentBatchConfig,fe=0,Je=null,Ke=null,st=0,Pt=0,Bn=zr(0),Ye=0,Vo=null,on=0,os=0,Ta=0,jo=null,kt=null,za=0,Vn=1/0,br=null,is=!1,Ra=null,Or=null,ss=!1,Dr=null,ls=0,Ho=0,Pa=null,as=-1,us=0;function vt(){return(fe&6)!==0?We():as!==-1?as:as=We()}function Ir(e){return(e.mode&1)===0?1:(fe&2)!==0&&st!==0?st&-st:Tm.transition!==null?(us===0&&(us=ac()),us):(e=xe,e!==0||(e=window.event,e=e===void 0?16:vc(e.type)),e)}function er(e,t,n,s){if(50<Ho)throw Ho=0,Pa=null,Error(i(185));po(e,n,s),((fe&2)===0||e!==Je)&&(e===Je&&((fe&2)===0&&(os|=n),Ye===4&&Fr(e,st)),St(e,s),n===1&&fe===0&&(t.mode&1)===0&&(Vn=We()+500,Di&&Pr()))}function St(e,t){var n=e.callbackNode;Tf(e,t);var s=yi(e,e===Je?st:0);if(s===0)n!==null&&ic(n),e.callbackNode=null,e.callbackPriority=0;else if(t=s&-s,e.callbackPriority!==t){if(n!=null&&ic(n),t===1)e.tag===0?Am(vh.bind(null,e)):rd(vh.bind(null,e)),Sm(function(){(fe&6)===0&&Pr()}),n=null;else{switch(uc(s)){case 1:n=dl;break;case 4:n=sc;break;case 16:n=fi;break;case 536870912:n=lc;break;default:n=fi}n=Ch(n,gh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function gh(e,t){if(as=-1,us=0,(fe&6)!==0)throw Error(i(327));var n=e.callbackNode;if(jn()&&e.callbackNode!==n)return null;var s=yi(e,e===Je?st:0);if(s===0)return null;if((s&30)!==0||(s&e.expiredLanes)!==0||t)t=cs(e,s);else{t=s;var a=fe;fe|=2;var c=bh();(Je!==e||st!==t)&&(br=null,Vn=We()+500,ln(e,t));do try{Qm();break}catch(v){yh(e,v)}while(!0);Yl(),ns.current=c,fe=a,Ke!==null?t=0:(Je=null,st=0,t=Ye)}if(t!==0){if(t===2&&(a=hl(e),a!==0&&(s=a,t=Na(e,a))),t===1)throw n=Vo,ln(e,0),Fr(e,s),St(e,We()),n;if(t===6)Fr(e,s);else{if(a=e.current.alternate,(s&30)===0&&!Km(a)&&(t=cs(e,s),t===2&&(c=hl(e),c!==0&&(s=c,t=Na(e,c))),t===1))throw n=Vo,ln(e,0),Fr(e,s),St(e,We()),n;switch(e.finishedWork=a,e.finishedLanes=s,t){case 0:case 1:throw Error(i(345));case 2:an(e,kt,br);break;case 3:if(Fr(e,s),(s&130023424)===s&&(t=za+500-We(),10<t)){if(yi(e,0)!==0)break;if(a=e.suspendedLanes,(a&s)!==s){vt(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Fl(an.bind(null,e,kt,br),t);break}an(e,kt,br);break;case 4:if(Fr(e,s),(s&4194240)===s)break;for(t=e.eventTimes,a=-1;0<s;){var p=31-qt(s);c=1<<p,p=t[p],p>a&&(a=p),s&=~c}if(s=a,s=We()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*Gm(s/1960))-s,10<s){e.timeoutHandle=Fl(an.bind(null,e,kt,br),s);break}an(e,kt,br);break;case 5:an(e,kt,br);break;default:throw Error(i(329))}}}return St(e,We()),e.callbackNode===n?gh.bind(null,e):null}function Na(e,t){var n=jo;return e.current.memoizedState.isDehydrated&&(ln(e,t).flags|=256),e=cs(e,t),e!==2&&(t=kt,kt=n,t!==null&&La(t)),e}function La(e){kt===null?kt=e:kt.push.apply(kt,e)}function Km(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var s=0;s<n.length;s++){var a=n[s],c=a.getSnapshot;a=a.value;try{if(!Qt(c(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Fr(e,t){for(t&=~Ta,t&=~os,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-qt(t),s=1<<n;e[n]=-1,t&=~s}}function vh(e){if((fe&6)!==0)throw Error(i(327));jn();var t=yi(e,0);if((t&1)===0)return St(e,We()),null;var n=cs(e,t);if(e.tag!==0&&n===2){var s=hl(e);s!==0&&(t=s,n=Na(e,s))}if(n===1)throw n=Vo,ln(e,0),Fr(e,t),St(e,We()),n;if(n===6)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,an(e,kt,br),St(e,We()),null}function Ma(e,t){var n=fe;fe|=1;try{return e(t)}finally{fe=n,fe===0&&(Vn=We()+500,Di&&Pr())}}function sn(e){Dr!==null&&Dr.tag===0&&(fe&6)===0&&jn();var t=fe;fe|=1;var n=Vt.transition,s=xe;try{if(Vt.transition=null,xe=1,e)return e()}finally{xe=s,Vt.transition=n,fe=t,(fe&6)===0&&Pr()}}function Oa(){Pt=Bn.current,ze(Bn)}function ln(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,km(n)),Ke!==null)for(n=Ke.return;n!==null;){var s=n;switch(Wl(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&Mi();break;case 3:Dn(),ze(wt),ze(at),oa();break;case 5:ra(s);break;case 4:Dn();break;case 13:ze(De);break;case 19:ze(De);break;case 10:Xl(s.type._context);break;case 22:case 23:Oa()}n=n.return}if(Je=e,Ke=e=Br(e.current,null),st=Pt=t,Ye=0,Vo=null,Ta=os=on=0,kt=jo=null,tn!==null){for(t=0;t<tn.length;t++)if(n=tn[t],s=n.interleaved,s!==null){n.interleaved=null;var a=s.next,c=n.pending;if(c!==null){var p=c.next;c.next=a,s.next=p}n.pending=s}tn=null}return e}function yh(e,t){do{var n=Ke;try{if(Yl(),Ki.current=Xi,qi){for(var s=Ie.memoizedState;s!==null;){var a=s.queue;a!==null&&(a.pending=null),s=s.next}qi=!1}if(nn=0,Ze=Qe=Ie=null,Mo=!1,Oo=0,Aa.current=null,n===null||n.return===null){Ye=1,Vo=t,Ke=null;break}e:{var c=e,p=n.return,v=n,y=t;if(t=st,v.flags|=32768,y!==null&&typeof y=="object"&&typeof y.then=="function"){var E=y,L=v,M=L.tag;if((L.mode&1)===0&&(M===0||M===11||M===15)){var P=L.alternate;P?(L.updateQueue=P.updateQueue,L.memoizedState=P.memoizedState,L.lanes=P.lanes):(L.updateQueue=null,L.memoizedState=null)}var j=Hd(p);if(j!==null){j.flags&=-257,Ud(j,p,v,c,t),j.mode&1&&jd(c,E,t),t=j,y=E;var W=t.updateQueue;if(W===null){var G=new Set;G.add(y),t.updateQueue=G}else W.add(y);break e}else{if((t&1)===0){jd(c,E,t),Da();break e}y=Error(i(426))}}else if(Me&&v.mode&1){var Ge=Hd(p);if(Ge!==null){(Ge.flags&65536)===0&&(Ge.flags|=256),Ud(Ge,p,v,c,t),ql(In(y,v));break e}}c=y=In(y,v),Ye!==4&&(Ye=2),jo===null?jo=[c]:jo.push(c),c=p;do{switch(c.tag){case 3:c.flags|=65536,t&=-t,c.lanes|=t;var C=Bd(c,y,t);pd(c,C);break e;case 1:v=y;var x=c.type,$=c.stateNode;if((c.flags&128)===0&&(typeof x.getDerivedStateFromError=="function"||$!==null&&typeof $.componentDidCatch=="function"&&(Or===null||!Or.has($)))){c.flags|=65536,t&=-t,c.lanes|=t;var O=Vd(c,v,t);pd(c,O);break e}}c=c.return}while(c!==null)}_h(n)}catch(K){t=K,Ke===n&&n!==null&&(Ke=n=n.return);continue}break}while(!0)}function bh(){var e=ns.current;return ns.current=Xi,e===null?Xi:e}function Da(){(Ye===0||Ye===3||Ye===2)&&(Ye=4),Je===null||(on&268435455)===0&&(os&268435455)===0||Fr(Je,st)}function cs(e,t){var n=fe;fe|=2;var s=bh();(Je!==e||st!==t)&&(br=null,ln(e,t));do try{qm();break}catch(a){yh(e,a)}while(!0);if(Yl(),fe=n,ns.current=s,Ke!==null)throw Error(i(261));return Je=null,st=0,Ye}function qm(){for(;Ke!==null;)wh(Ke)}function Qm(){for(;Ke!==null&&!wf();)wh(Ke)}function wh(e){var t=Sh(e.alternate,e,Pt);e.memoizedProps=e.pendingProps,t===null?_h(e):Ke=t,Aa.current=null}function _h(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Vm(n,t,Pt),n!==null){Ke=n;return}}else{if(n=jm(n,t),n!==null){n.flags&=32767,Ke=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ye=6,Ke=null;return}}if(t=t.sibling,t!==null){Ke=t;return}Ke=t=e}while(t!==null);Ye===0&&(Ye=5)}function an(e,t,n){var s=xe,a=Vt.transition;try{Vt.transition=null,xe=1,Ym(e,t,n,s)}finally{Vt.transition=a,xe=s}return null}function Ym(e,t,n,s){do jn();while(Dr!==null);if((fe&6)!==0)throw Error(i(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var c=n.lanes|n.childLanes;if(zf(e,c),e===Je&&(Ke=Je=null,st=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||ss||(ss=!0,Ch(fi,function(){return jn(),null})),c=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||c){c=Vt.transition,Vt.transition=null;var p=xe;xe=1;var v=fe;fe|=4,Aa.current=null,Um(e,n),dh(n,e),gm(Dl),_i=!!Ol,Dl=Ol=null,e.current=n,Wm(n),_f(),fe=v,xe=p,Vt.transition=c}else e.current=n;if(ss&&(ss=!1,Dr=e,ls=a),c=e.pendingLanes,c===0&&(Or=null),Sf(n.stateNode),St(e,We()),t!==null)for(s=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],s(a.value,{componentStack:a.stack,digest:a.digest});if(is)throw is=!1,e=Ra,Ra=null,e;return(ls&1)!==0&&e.tag!==0&&jn(),c=e.pendingLanes,(c&1)!==0?e===Pa?Ho++:(Ho=0,Pa=e):Ho=0,Pr(),null}function jn(){if(Dr!==null){var e=uc(ls),t=Vt.transition,n=xe;try{if(Vt.transition=null,xe=16>e?16:e,Dr===null)var s=!1;else{if(e=Dr,Dr=null,ls=0,(fe&6)!==0)throw Error(i(331));var a=fe;for(fe|=4,U=e.current;U!==null;){var c=U,p=c.child;if((U.flags&16)!==0){var v=c.deletions;if(v!==null){for(var y=0;y<v.length;y++){var E=v[y];for(U=E;U!==null;){var L=U;switch(L.tag){case 0:case 11:case 15:Bo(8,L,c)}var M=L.child;if(M!==null)M.return=L,U=M;else for(;U!==null;){L=U;var P=L.sibling,j=L.return;if(sh(L),L===E){U=null;break}if(P!==null){P.return=j,U=P;break}U=j}}}var W=c.alternate;if(W!==null){var G=W.child;if(G!==null){W.child=null;do{var Ge=G.sibling;G.sibling=null,G=Ge}while(G!==null)}}U=c}}if((c.subtreeFlags&2064)!==0&&p!==null)p.return=c,U=p;else e:for(;U!==null;){if(c=U,(c.flags&2048)!==0)switch(c.tag){case 0:case 11:case 15:Bo(9,c,c.return)}var C=c.sibling;if(C!==null){C.return=c.return,U=C;break e}U=c.return}}var x=e.current;for(U=x;U!==null;){p=U;var $=p.child;if((p.subtreeFlags&2064)!==0&&$!==null)$.return=p,U=$;else e:for(p=x;U!==null;){if(v=U,(v.flags&2048)!==0)try{switch(v.tag){case 0:case 11:case 15:rs(9,v)}}catch(K){Ve(v,v.return,K)}if(v===p){U=null;break e}var O=v.sibling;if(O!==null){O.return=v.return,U=O;break e}U=v.return}}if(fe=a,Pr(),nr&&typeof nr.onPostCommitFiberRoot=="function")try{nr.onPostCommitFiberRoot(mi,e)}catch{}s=!0}return s}finally{xe=n,Vt.transition=t}}return!1}function xh(e,t,n){t=In(n,t),t=Bd(e,t,1),e=Lr(e,t,1),t=vt(),e!==null&&(po(e,1,t),St(e,t))}function Ve(e,t,n){if(e.tag===3)xh(e,e,n);else for(;t!==null;){if(t.tag===3){xh(t,e,n);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Or===null||!Or.has(s))){e=In(n,e),e=Vd(t,e,1),t=Lr(t,e,1),e=vt(),t!==null&&(po(t,1,e),St(t,e));break}}t=t.return}}function Xm(e,t,n){var s=e.pingCache;s!==null&&s.delete(t),t=vt(),e.pingedLanes|=e.suspendedLanes&n,Je===e&&(st&n)===n&&(Ye===4||Ye===3&&(st&130023424)===st&&500>We()-za?ln(e,0):Ta|=n),St(e,t)}function kh(e,t){t===0&&((e.mode&1)===0?t=1:(t=vi,vi<<=1,(vi&130023424)===0&&(vi=4194304)));var n=vt();e=gr(e,t),e!==null&&(po(e,t,n),St(e,n))}function Zm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),kh(e,n)}function Jm(e,t){var n=0;switch(e.tag){case 13:var s=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(i(314))}s!==null&&s.delete(t),kh(e,n)}var Sh;Sh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||wt.current)xt=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return xt=!1,Bm(e,t,n);xt=(e.flags&131072)!==0}else xt=!1,Me&&(t.flags&1048576)!==0&&nd(t,Fi,t.index);switch(t.lanes=0,t.tag){case 2:var s=t.type;es(e,t),e=t.pendingProps;var a=zn(t,at.current);On(t,n),a=la(null,t,s,e,a,n);var c=aa();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,_t(s)?(c=!0,Oi(t)):c=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,ea(t),a.updater=Zi,t.stateNode=a,a._reactInternals=t,fa(t,s,e,n),t=ya(null,t,s,!0,c,n)):(t.tag=0,Me&&c&&Ul(t),gt(null,t,a,n),t=t.child),t;case 16:s=t.elementType;e:{switch(es(e,t),e=t.pendingProps,a=s._init,s=a(s._payload),t.type=s,a=t.tag=tg(s),e=Xt(s,e),a){case 0:t=va(null,t,s,e,n);break e;case 1:t=Yd(null,t,s,e,n);break e;case 11:t=Wd(null,t,s,e,n);break e;case 14:t=Gd(null,t,s,Xt(s.type,e),n);break e}throw Error(i(306,s,""))}return t;case 0:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:Xt(s,a),va(e,t,s,a,n);case 1:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:Xt(s,a),Yd(e,t,s,a,n);case 3:e:{if(Xd(t),e===null)throw Error(i(387));s=t.pendingProps,c=t.memoizedState,a=c.element,hd(e,t),Wi(t,s,null,n);var p=t.memoizedState;if(s=p.element,c.isDehydrated)if(c={element:s,isDehydrated:!1,cache:p.cache,pendingSuspenseBoundaries:p.pendingSuspenseBoundaries,transitions:p.transitions},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){a=In(Error(i(423)),t),t=Zd(e,t,s,n,a);break e}else if(s!==a){a=In(Error(i(424)),t),t=Zd(e,t,s,n,a);break e}else for(Rt=Tr(t.stateNode.containerInfo.firstChild),zt=t,Me=!0,Yt=null,n=cd(t,null,s,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Nn(),s===a){t=yr(e,t,n);break e}gt(e,t,s,n)}t=t.child}return t;case 5:return md(t),e===null&&Kl(t),s=t.type,a=t.pendingProps,c=e!==null?e.memoizedProps:null,p=a.children,Il(s,a)?p=null:c!==null&&Il(s,c)&&(t.flags|=32),Qd(e,t),gt(e,t,p,n),t.child;case 6:return e===null&&Kl(t),null;case 13:return Jd(e,t,n);case 4:return ta(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=Ln(t,null,s,n):gt(e,t,s,n),t.child;case 11:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:Xt(s,a),Wd(e,t,s,a,n);case 7:return gt(e,t,t.pendingProps,n),t.child;case 8:return gt(e,t,t.pendingProps.children,n),t.child;case 12:return gt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(s=t.type._context,a=t.pendingProps,c=t.memoizedProps,p=a.value,Ee(ji,s._currentValue),s._currentValue=p,c!==null)if(Qt(c.value,p)){if(c.children===a.children&&!wt.current){t=yr(e,t,n);break e}}else for(c=t.child,c!==null&&(c.return=t);c!==null;){var v=c.dependencies;if(v!==null){p=c.child;for(var y=v.firstContext;y!==null;){if(y.context===s){if(c.tag===1){y=vr(-1,n&-n),y.tag=2;var E=c.updateQueue;if(E!==null){E=E.shared;var L=E.pending;L===null?y.next=y:(y.next=L.next,L.next=y),E.pending=y}}c.lanes|=n,y=c.alternate,y!==null&&(y.lanes|=n),Zl(c.return,n,t),v.lanes|=n;break}y=y.next}}else if(c.tag===10)p=c.type===t.type?null:c.child;else if(c.tag===18){if(p=c.return,p===null)throw Error(i(341));p.lanes|=n,v=p.alternate,v!==null&&(v.lanes|=n),Zl(p,n,t),p=c.sibling}else p=c.child;if(p!==null)p.return=c;else for(p=c;p!==null;){if(p===t){p=null;break}if(c=p.sibling,c!==null){c.return=p.return,p=c;break}p=p.return}c=p}gt(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,s=t.pendingProps.children,On(t,n),a=Ft(a),s=s(a),t.flags|=1,gt(e,t,s,n),t.child;case 14:return s=t.type,a=Xt(s,t.pendingProps),a=Xt(s.type,a),Gd(e,t,s,a,n);case 15:return Kd(e,t,t.type,t.pendingProps,n);case 17:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:Xt(s,a),es(e,t),t.tag=1,_t(s)?(e=!0,Oi(t)):e=!1,On(t,n),Id(t,s,a),fa(t,s,a,n),ya(null,t,s,!0,e,n);case 19:return th(e,t,n);case 22:return qd(e,t,n)}throw Error(i(156,t.tag))};function Ch(e,t){return oc(e,t)}function eg(e,t,n,s){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jt(e,t,n,s){return new eg(e,t,n,s)}function Ia(e){return e=e.prototype,!(!e||!e.isReactComponent)}function tg(e){if(typeof e=="function")return Ia(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ne)return 11;if(e===B)return 14}return 2}function Br(e,t){var n=e.alternate;return n===null?(n=jt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ds(e,t,n,s,a,c){var p=2;if(s=e,typeof e=="function")Ia(e)&&(p=1);else if(typeof e=="string")p=5;else e:switch(e){case pe:return un(n.children,a,c,t);case Pe:p=8,a|=8;break;case Be:return e=jt(12,n,t,a|2),e.elementType=Be,e.lanes=c,e;case Ce:return e=jt(13,n,t,a),e.elementType=Ce,e.lanes=c,e;case F:return e=jt(19,n,t,a),e.elementType=F,e.lanes=c,e;case ee:return hs(n,a,c,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ae:p=10;break e;case Xe:p=9;break e;case Ne:p=11;break e;case B:p=14;break e;case re:p=16,s=null;break e}throw Error(i(130,e==null?e:typeof e,""))}return t=jt(p,n,t,a),t.elementType=e,t.type=s,t.lanes=c,t}function un(e,t,n,s){return e=jt(7,e,s,t),e.lanes=n,e}function hs(e,t,n,s){return e=jt(22,e,s,t),e.elementType=ee,e.lanes=n,e.stateNode={isHidden:!1},e}function Fa(e,t,n){return e=jt(6,e,null,t),e.lanes=n,e}function Ba(e,t,n){return t=jt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function rg(e,t,n,s,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pl(0),this.expirationTimes=pl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pl(0),this.identifierPrefix=s,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Va(e,t,n,s,a,c,p,v,y){return e=new rg(e,t,n,v,y),t===1?(t=1,c===!0&&(t|=8)):t=0,c=jt(3,null,null,t),e.current=c,c.stateNode=e,c.memoizedState={element:s,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ea(c),e}function ng(e,t,n){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ue,key:s==null?null:""+s,children:e,containerInfo:t,implementation:n}}function $h(e){if(!e)return Rr;e=e._reactInternals;e:{if(Yr(e)!==e||e.tag!==1)throw Error(i(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(_t(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(i(171))}if(e.tag===1){var n=e.type;if(_t(n))return ed(e,n,t)}return t}function Eh(e,t,n,s,a,c,p,v,y){return e=Va(n,s,!0,e,a,c,p,v,y),e.context=$h(null),n=e.current,s=vt(),a=Ir(n),c=vr(s,a),c.callback=t??null,Lr(n,c,a),e.current.lanes=a,po(e,a,s),St(e,s),e}function ps(e,t,n,s){var a=t.current,c=vt(),p=Ir(a);return n=$h(n),t.context===null?t.context=n:t.pendingContext=n,t=vr(c,p),t.payload={element:e},s=s===void 0?null:s,s!==null&&(t.callback=s),e=Lr(a,t,p),e!==null&&(er(e,a,p,c),Ui(e,a,p)),p}function fs(e){return e=e.current,e.child?(e.child.tag===5,e.child.stateNode):null}function Ah(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ja(e,t){Ah(e,t),(e=e.alternate)&&Ah(e,t)}function og(){return null}var Th=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ha(e){this._internalRoot=e}ms.prototype.render=Ha.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));ps(e,t,null,null)},ms.prototype.unmount=Ha.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;sn(function(){ps(null,e,null,null)}),t[hr]=null}};function ms(e){this._internalRoot=e}ms.prototype.unstable_scheduleHydration=function(e){if(e){var t=hc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<$r.length&&t!==0&&t<$r[n].priority;n++);$r.splice(n,0,e),n===0&&mc(e)}};function Ua(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function gs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function zh(){}function ig(e,t,n,s,a){if(a){if(typeof s=="function"){var c=s;s=function(){var E=fs(p);c.call(E)}}var p=Eh(t,s,e,0,null,!1,!1,"",zh);return e._reactRootContainer=p,e[hr]=p.current,Eo(e.nodeType===8?e.parentNode:e),sn(),p}for(;a=e.lastChild;)e.removeChild(a);if(typeof s=="function"){var v=s;s=function(){var E=fs(y);v.call(E)}}var y=Va(e,0,!1,null,null,!1,!1,"",zh);return e._reactRootContainer=y,e[hr]=y.current,Eo(e.nodeType===8?e.parentNode:e),sn(function(){ps(t,y,n,s)}),y}function vs(e,t,n,s,a){var c=n._reactRootContainer;if(c){var p=c;if(typeof a=="function"){var v=a;a=function(){var y=fs(p);v.call(y)}}ps(t,p,e,a)}else p=ig(n,t,e,a,s);return fs(p)}cc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ho(t.pendingLanes);n!==0&&(fl(t,n|1),St(t,We()),(fe&6)===0&&(Vn=We()+500,Pr()))}break;case 13:sn(function(){var s=gr(e,1);if(s!==null){var a=vt();er(s,e,1,a)}}),ja(e,1)}},ml=function(e){if(e.tag===13){var t=gr(e,134217728);if(t!==null){var n=vt();er(t,e,134217728,n)}ja(e,134217728)}},dc=function(e){if(e.tag===13){var t=Ir(e),n=gr(e,t);if(n!==null){var s=vt();er(n,e,t,s)}ja(e,t)}},hc=function(){return xe},pc=function(e,t){var n=xe;try{return xe=e,t()}finally{xe=n}},ll=function(e,t,n){switch(t){case"input":if(Js(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var s=n[t];if(s!==e&&s.form===e.form){var a=Li(s);if(!a)throw Error(i(90));Du(s),Js(s,a)}}}break;case"textarea":ju(e,n);break;case"select":t=n.value,t!=null&&yn(e,!!n.multiple,t,!1)}},Xu=Ma,Zu=sn;var sg={usingClientEntryPoint:!1,Events:[zo,An,Li,Qu,Yu,Ma]},Uo={findFiberByHostInstance:Xr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},lg={bundleType:Uo.bundleType,version:Uo.version,rendererPackageName:Uo.rendererPackageName,rendererConfig:Uo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:oe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=rc(e),e===null?null:e.stateNode},findFiberByHostInstance:Uo.findFiberByHostInstance||og,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ys=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ys.isDisabled&&ys.supportsFiber)try{mi=ys.inject(lg),nr=ys}catch{}}return Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sg,Ct.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ua(t))throw Error(i(200));return ng(e,t,null,n)},Ct.createRoot=function(e,t){if(!Ua(e))throw Error(i(299));var n=!1,s="",a=Th;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Va(e,1,!1,null,null,n,!1,s,a),e[hr]=t.current,Eo(e.nodeType===8?e.parentNode:e),new Ha(t)},Ct.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=rc(t),e=e===null?null:e.stateNode,e},Ct.flushSync=function(e){return sn(e)},Ct.hydrate=function(e,t,n){if(!gs(t))throw Error(i(200));return vs(null,e,t,!0,n)},Ct.hydrateRoot=function(e,t,n){if(!Ua(e))throw Error(i(405));var s=n!=null&&n.hydratedSources||null,a=!1,c="",p=Th;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(c=n.identifierPrefix),n.onRecoverableError!==void 0&&(p=n.onRecoverableError)),t=Eh(t,null,e,1,n??null,a,!1,c,p),e[hr]=t.current,Eo(e),s)for(e=0;e<s.length;e++)n=s[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new ms(t)},Ct.render=function(e,t,n){if(!gs(t))throw Error(i(200));return vs(null,e,t,!1,n)},Ct.unmountComponentAtNode=function(e){if(!gs(e))throw Error(i(40));return e._reactRootContainer?(sn(function(){vs(null,null,e,!1,function(){e._reactRootContainer=null,e[hr]=null})}),!0):!1},Ct.unstable_batchedUpdates=Ma,Ct.unstable_renderSubtreeIntoContainer=function(e,t,n,s){if(!gs(n))throw Error(i(200));if(e==null||e._reactInternals===void 0)throw Error(i(38));return vs(e,t,n,!1,s)},Ct.version="18.3.1-next-f1338f8080-20240426",Ct}var Ih;function gg(){if(Ih)return Ka.exports;Ih=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(o){console.error(o)}}return r(),Ka.exports=mg(),Ka.exports}var Fh;function vg(){if(Fh)return bs;Fh=1;var r=gg();return bs.createRoot=r.createRoot,bs.hydrateRoot=r.hydrateRoot,bs}var yg=vg();const bg=$p(yg);const $s=globalThis,yu=$s.ShadowRoot&&($s.ShadyCSS===void 0||$s.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,bu=Symbol(),Bh=new WeakMap;let Ap=class{constructor(o,i,l){if(this._$cssResult$=!0,l!==bu)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=o,this.t=i}get styleSheet(){let o=this.o;const i=this.t;if(yu&&o===void 0){const l=i!==void 0&&i.length===1;l&&(o=Bh.get(i)),o===void 0&&((this.o=o=new CSSStyleSheet).replaceSync(this.cssText),l&&Bh.set(i,o))}return o}toString(){return this.cssText}};const wg=r=>new Ap(typeof r=="string"?r:r+"",void 0,bu),Fe=(r,...o)=>{const i=r.length===1?r[0]:o.reduce((l,u,d)=>l+(h=>{if(h._$cssResult$===!0)return h.cssText;if(typeof h=="number")return h;throw Error("Value passed to 'css' function must be a 'css' function result: "+h+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(u)+r[d+1],r[0]);return new Ap(i,r,bu)},_g=(r,o)=>{if(yu)r.adoptedStyleSheets=o.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(const i of o){const l=document.createElement("style"),u=$s.litNonce;u!==void 0&&l.setAttribute("nonce",u),l.textContent=i.cssText,r.appendChild(l)}},Vh=yu?r=>r:r=>r instanceof CSSStyleSheet?(o=>{let i="";for(const l of o.cssRules)i+=l.cssText;return wg(i)})(r):r;const{is:xg,defineProperty:kg,getOwnPropertyDescriptor:Sg,getOwnPropertyNames:Cg,getOwnPropertySymbols:$g,getPrototypeOf:Eg}=Object,Fs=globalThis,jh=Fs.trustedTypes,Ag=jh?jh.emptyScript:"",Tg=Fs.reactiveElementPolyfillSupport,Zo=(r,o)=>r,qn={toAttribute(r,o){switch(o){case Boolean:r=r?Ag:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,o){let i=r;switch(o){case Boolean:i=r!==null;break;case Number:i=r===null?null:Number(r);break;case Object:case Array:try{i=JSON.parse(r)}catch{i=null}}return i}},wu=(r,o)=>!xg(r,o),Hh={attribute:!0,type:String,converter:qn,reflect:!1,useDefault:!1,hasChanged:wu};Symbol.metadata??=Symbol("metadata"),Fs.litPropertyMetadata??=new WeakMap;let Hn=class extends HTMLElement{static addInitializer(o){this._$Ei(),(this.l??=[]).push(o)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(o,i=Hh){if(i.state&&(i.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(o)&&((i=Object.create(i)).wrapped=!0),this.elementProperties.set(o,i),!i.noAccessor){const l=Symbol(),u=this.getPropertyDescriptor(o,l,i);u!==void 0&&kg(this.prototype,o,u)}}static getPropertyDescriptor(o,i,l){const{get:u,set:d}=Sg(this.prototype,o)??{get(){return this[i]},set(h){this[i]=h}};return{get:u,set(h){const f=u?.call(this);d?.call(this,h),this.requestUpdate(o,f,l)},configurable:!0,enumerable:!0}}static getPropertyOptions(o){return this.elementProperties.get(o)??Hh}static _$Ei(){if(this.hasOwnProperty(Zo("elementProperties")))return;const o=Eg(this);o.finalize(),o.l!==void 0&&(this.l=[...o.l]),this.elementProperties=new Map(o.elementProperties)}static finalize(){if(this.hasOwnProperty(Zo("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Zo("properties"))){const i=this.properties,l=[...Cg(i),...$g(i)];for(const u of l)this.createProperty(u,i[u])}const o=this[Symbol.metadata];if(o!==null){const i=litPropertyMetadata.get(o);if(i!==void 0)for(const[l,u]of i)this.elementProperties.set(l,u)}this._$Eh=new Map;for(const[i,l]of this.elementProperties){const u=this._$Eu(i,l);u!==void 0&&this._$Eh.set(u,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(o){const i=[];if(Array.isArray(o)){const l=new Set(o.flat(1/0).reverse());for(const u of l)i.unshift(Vh(u))}else o!==void 0&&i.push(Vh(o));return i}static _$Eu(o,i){const l=i.attribute;return l===!1?void 0:typeof l=="string"?l:typeof o=="string"?o.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(o=>this.enableUpdating=o),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(o=>o(this))}addController(o){(this._$EO??=new Set).add(o),this.renderRoot!==void 0&&this.isConnected&&o.hostConnected?.()}removeController(o){this._$EO?.delete(o)}_$E_(){const o=new Map,i=this.constructor.elementProperties;for(const l of i.keys())this.hasOwnProperty(l)&&(o.set(l,this[l]),delete this[l]);o.size>0&&(this._$Ep=o)}createRenderRoot(){const o=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return _g(o,this.constructor.elementStyles),o}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(o=>o.hostConnected?.())}enableUpdating(o){}disconnectedCallback(){this._$EO?.forEach(o=>o.hostDisconnected?.())}attributeChangedCallback(o,i,l){this._$AK(o,l)}_$ET(o,i){const l=this.constructor.elementProperties.get(o),u=this.constructor._$Eu(o,l);if(u!==void 0&&l.reflect===!0){const d=(l.converter?.toAttribute!==void 0?l.converter:qn).toAttribute(i,l.type);this._$Em=o,d==null?this.removeAttribute(u):this.setAttribute(u,d),this._$Em=null}}_$AK(o,i){const l=this.constructor,u=l._$Eh.get(o);if(u!==void 0&&this._$Em!==u){const d=l.getPropertyOptions(u),h=typeof d.converter=="function"?{fromAttribute:d.converter}:d.converter?.fromAttribute!==void 0?d.converter:qn;this._$Em=u;const f=h.fromAttribute(i,d.type);this[u]=f??this._$Ej?.get(u)??f,this._$Em=null}}requestUpdate(o,i,l,u=!1,d){if(o!==void 0){const h=this.constructor;if(u===!1&&(d=this[o]),l??=h.getPropertyOptions(o),!((l.hasChanged??wu)(d,i)||l.useDefault&&l.reflect&&d===this._$Ej?.get(o)&&!this.hasAttribute(h._$Eu(o,l))))return;this.C(o,i,l)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(o,i,{useDefault:l,reflect:u,wrapped:d},h){l&&!(this._$Ej??=new Map).has(o)&&(this._$Ej.set(o,h??i??this[o]),d!==!0||h!==void 0)||(this._$AL.has(o)||(this.hasUpdated||l||(i=void 0),this._$AL.set(o,i)),u===!0&&this._$Em!==o&&(this._$Eq??=new Set).add(o))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(i){Promise.reject(i)}const o=this.scheduleUpdate();return o!=null&&await o,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[u,d]of this._$Ep)this[u]=d;this._$Ep=void 0}const l=this.constructor.elementProperties;if(l.size>0)for(const[u,d]of l){const{wrapped:h}=d,f=this[u];h!==!0||this._$AL.has(u)||f===void 0||this.C(u,void 0,d,f)}}let o=!1;const i=this._$AL;try{o=this.shouldUpdate(i),o?(this.willUpdate(i),this._$EO?.forEach(l=>l.hostUpdate?.()),this.update(i)):this._$EM()}catch(l){throw o=!1,this._$EM(),l}o&&this._$AE(i)}willUpdate(o){}_$AE(o){this._$EO?.forEach(i=>i.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(o)),this.updated(o)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(o){return!0}update(o){this._$Eq&&=this._$Eq.forEach(i=>this._$ET(i,this[i])),this._$EM()}updated(o){}firstUpdated(o){}};Hn.elementStyles=[],Hn.shadowRootOptions={mode:"open"},Hn[Zo("elementProperties")]=new Map,Hn[Zo("finalized")]=new Map,Tg?.({ReactiveElement:Hn}),(Fs.reactiveElementVersions??=[]).push("2.1.2");const _u=globalThis,Uh=r=>r,Ts=_u.trustedTypes,Wh=Ts?Ts.createPolicy("lit-html",{createHTML:r=>r}):void 0,Tp="$lit$",Hr=`lit$${Math.random().toFixed(9).slice(2)}$`,zp="?"+Hr,zg=`<${zp}>`,gn=document,ti=()=>gn.createComment(""),ri=r=>r===null||typeof r!="object"&&typeof r!="function",xu=Array.isArray,Rg=r=>xu(r)||typeof r?.[Symbol.iterator]=="function",Ya=`[ 	
\f\r]`,Go=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Gh=/-->/g,Kh=/>/g,cn=RegExp(`>|${Ya}(?:([^\\s"'>=/]+)(${Ya}*=${Ya}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),qh=/'/g,Qh=/"/g,Rp=/^(?:script|style|textarea|title)$/i,Pg=r=>(o,...i)=>({_$litType$:r,strings:o,values:i}),le=Pg(1),Wt=Symbol.for("lit-noChange"),He=Symbol.for("lit-nothing"),Yh=new WeakMap,fn=gn.createTreeWalker(gn,129);function Pp(r,o){if(!xu(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Wh!==void 0?Wh.createHTML(o):o}const Ng=(r,o)=>{const i=r.length-1,l=[];let u,d=o===2?"<svg>":o===3?"<math>":"",h=Go;for(let f=0;f<i;f++){const m=r[f];let w,_,b=-1,T=0;for(;T<m.length&&(h.lastIndex=T,_=h.exec(m),_!==null);)T=h.lastIndex,h===Go?_[1]==="!--"?h=Gh:_[1]!==void 0?h=Kh:_[2]!==void 0?(Rp.test(_[2])&&(u=RegExp("</"+_[2],"g")),h=cn):_[3]!==void 0&&(h=cn):h===cn?_[0]===">"?(h=u??Go,b=-1):_[1]===void 0?b=-2:(b=h.lastIndex-_[2].length,w=_[1],h=_[3]===void 0?cn:_[3]==='"'?Qh:qh):h===Qh||h===qh?h=cn:h===Gh||h===Kh?h=Go:(h=cn,u=void 0);const A=h===cn&&r[f+1].startsWith("/>")?" ":"";d+=h===Go?m+zg:b>=0?(l.push(w),m.slice(0,b)+Tp+m.slice(b)+Hr+A):m+Hr+(b===-2?f:A)}return[Pp(r,d+(r[i]||"<?>")+(o===2?"</svg>":o===3?"</math>":"")),l]};class ni{constructor({strings:o,_$litType$:i},l){let u;this.parts=[];let d=0,h=0;const f=o.length-1,m=this.parts,[w,_]=Ng(o,i);if(this.el=ni.createElement(w,l),fn.currentNode=this.el.content,i===2||i===3){const b=this.el.content.firstChild;b.replaceWith(...b.childNodes)}for(;(u=fn.nextNode())!==null&&m.length<f;){if(u.nodeType===1){if(u.hasAttributes())for(const b of u.getAttributeNames())if(b.endsWith(Tp)){const T=_[h++],A=u.getAttribute(b).split(Hr),z=/([.?@])?(.*)/.exec(T);m.push({type:1,index:d,name:z[2],strings:A,ctor:z[1]==="."?Mg:z[1]==="?"?Og:z[1]==="@"?Dg:Bs}),u.removeAttribute(b)}else b.startsWith(Hr)&&(m.push({type:6,index:d}),u.removeAttribute(b));if(Rp.test(u.tagName)){const b=u.textContent.split(Hr),T=b.length-1;if(T>0){u.textContent=Ts?Ts.emptyScript:"";for(let A=0;A<T;A++)u.append(b[A],ti()),fn.nextNode(),m.push({type:2,index:++d});u.append(b[T],ti())}}}else if(u.nodeType===8)if(u.data===zp)m.push({type:2,index:d});else{let b=-1;for(;(b=u.data.indexOf(Hr,b+1))!==-1;)m.push({type:7,index:d}),b+=Hr.length-1}d++}}static createElement(o,i){const l=gn.createElement("template");return l.innerHTML=o,l}}function Qn(r,o,i=r,l){if(o===Wt)return o;let u=l!==void 0?i._$Co?.[l]:i._$Cl;const d=ri(o)?void 0:o._$litDirective$;return u?.constructor!==d&&(u?._$AO?.(!1),d===void 0?u=void 0:(u=new d(r),u._$AT(r,i,l)),l!==void 0?(i._$Co??=[])[l]=u:i._$Cl=u),u!==void 0&&(o=Qn(r,u._$AS(r,o.values),u,l)),o}class Lg{constructor(o,i){this._$AV=[],this._$AN=void 0,this._$AD=o,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(o){const{el:{content:i},parts:l}=this._$AD,u=(o?.creationScope??gn).importNode(i,!0);fn.currentNode=u;let d=fn.nextNode(),h=0,f=0,m=l[0];for(;m!==void 0;){if(h===m.index){let w;m.type===2?w=new ii(d,d.nextSibling,this,o):m.type===1?w=new m.ctor(d,m.name,m.strings,this,o):m.type===6&&(w=new Ig(d,this,o)),this._$AV.push(w),m=l[++f]}h!==m?.index&&(d=fn.nextNode(),h++)}return fn.currentNode=gn,u}p(o){let i=0;for(const l of this._$AV)l!==void 0&&(l.strings!==void 0?(l._$AI(o,l,i),i+=l.strings.length-2):l._$AI(o[i])),i++}}class ii{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(o,i,l,u){this.type=2,this._$AH=He,this._$AN=void 0,this._$AA=o,this._$AB=i,this._$AM=l,this.options=u,this._$Cv=u?.isConnected??!0}get parentNode(){let o=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&o?.nodeType===11&&(o=i.parentNode),o}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(o,i=this){o=Qn(this,o,i),ri(o)?o===He||o==null||o===""?(this._$AH!==He&&this._$AR(),this._$AH=He):o!==this._$AH&&o!==Wt&&this._(o):o._$litType$!==void 0?this.$(o):o.nodeType!==void 0?this.T(o):Rg(o)?this.k(o):this._(o)}O(o){return this._$AA.parentNode.insertBefore(o,this._$AB)}T(o){this._$AH!==o&&(this._$AR(),this._$AH=this.O(o))}_(o){this._$AH!==He&&ri(this._$AH)?this._$AA.nextSibling.data=o:this.T(gn.createTextNode(o)),this._$AH=o}$(o){const{values:i,_$litType$:l}=o,u=typeof l=="number"?this._$AC(o):(l.el===void 0&&(l.el=ni.createElement(Pp(l.h,l.h[0]),this.options)),l);if(this._$AH?._$AD===u)this._$AH.p(i);else{const d=new Lg(u,this),h=d.u(this.options);d.p(i),this.T(h),this._$AH=d}}_$AC(o){let i=Yh.get(o.strings);return i===void 0&&Yh.set(o.strings,i=new ni(o)),i}k(o){xu(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let l,u=0;for(const d of o)u===i.length?i.push(l=new ii(this.O(ti()),this.O(ti()),this,this.options)):l=i[u],l._$AI(d),u++;u<i.length&&(this._$AR(l&&l._$AB.nextSibling,u),i.length=u)}_$AR(o=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);o!==this._$AB;){const l=Uh(o).nextSibling;Uh(o).remove(),o=l}}setConnected(o){this._$AM===void 0&&(this._$Cv=o,this._$AP?.(o))}}class Bs{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(o,i,l,u,d){this.type=1,this._$AH=He,this._$AN=void 0,this.element=o,this.name=i,this._$AM=u,this.options=d,l.length>2||l[0]!==""||l[1]!==""?(this._$AH=Array(l.length-1).fill(new String),this.strings=l):this._$AH=He}_$AI(o,i=this,l,u){const d=this.strings;let h=!1;if(d===void 0)o=Qn(this,o,i,0),h=!ri(o)||o!==this._$AH&&o!==Wt,h&&(this._$AH=o);else{const f=o;let m,w;for(o=d[0],m=0;m<d.length-1;m++)w=Qn(this,f[l+m],i,m),w===Wt&&(w=this._$AH[m]),h||=!ri(w)||w!==this._$AH[m],w===He?o=He:o!==He&&(o+=(w??"")+d[m+1]),this._$AH[m]=w}h&&!u&&this.j(o)}j(o){o===He?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,o??"")}}class Mg extends Bs{constructor(){super(...arguments),this.type=3}j(o){this.element[this.name]=o===He?void 0:o}}class Og extends Bs{constructor(){super(...arguments),this.type=4}j(o){this.element.toggleAttribute(this.name,!!o&&o!==He)}}class Dg extends Bs{constructor(o,i,l,u,d){super(o,i,l,u,d),this.type=5}_$AI(o,i=this){if((o=Qn(this,o,i,0)??He)===Wt)return;const l=this._$AH,u=o===He&&l!==He||o.capture!==l.capture||o.once!==l.once||o.passive!==l.passive,d=o!==He&&(l===He||u);u&&this.element.removeEventListener(this.name,this,l),d&&this.element.addEventListener(this.name,this,o),this._$AH=o}handleEvent(o){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,o):this._$AH.handleEvent(o)}}class Ig{constructor(o,i,l){this.element=o,this.type=6,this._$AN=void 0,this._$AM=i,this.options=l}get _$AU(){return this._$AM._$AU}_$AI(o){Qn(this,o)}}const Fg=_u.litHtmlPolyfillSupport;Fg?.(ni,ii),(_u.litHtmlVersions??=[]).push("3.3.2");const Bg=(r,o,i)=>{const l=i?.renderBefore??o;let u=l._$litPart$;if(u===void 0){const d=i?.renderBefore??null;l._$litPart$=u=new ii(o.insertBefore(ti(),d),d,void 0,i??{})}return u._$AI(r),u};const ku=globalThis;let Gn=class extends Hn{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const o=super.createRenderRoot();return this.renderOptions.renderBefore??=o.firstChild,o}update(o){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(o),this._$Do=Bg(i,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Wt}};Gn._$litElement$=!0,Gn.finalized=!0,ku.litElementHydrateSupport?.({LitElement:Gn});const Vg=ku.litElementPolyfillSupport;Vg?.({LitElement:Gn});(ku.litElementVersions??=[]).push("4.2.2");var jg=Fe`
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
`;const uu=new Set,Wn=new Map;let hn,Su="ltr",Cu="en";const Np=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(Np){const r=new MutationObserver(Mp);Su=document.documentElement.dir||"ltr",Cu=document.documentElement.lang||navigator.language,r.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function Lp(...r){r.map(o=>{const i=o.$code.toLowerCase();Wn.has(i)?Wn.set(i,Object.assign(Object.assign({},Wn.get(i)),o)):Wn.set(i,o),hn||(hn=o)}),Mp()}function Mp(){Np&&(Su=document.documentElement.dir||"ltr",Cu=document.documentElement.lang||navigator.language),[...uu.keys()].map(r=>{typeof r.requestUpdate=="function"&&r.requestUpdate()})}let Op=class{constructor(o){this.host=o,this.host.addController(this)}hostConnected(){uu.add(this.host)}hostDisconnected(){uu.delete(this.host)}dir(){return`${this.host.dir||Su}`.toLowerCase()}lang(){return`${this.host.lang||Cu}`.toLowerCase()}getTranslationData(o){var i,l;const u=new Intl.Locale(o.replace(/_/g,"-")),d=u?.language.toLowerCase(),h=(l=(i=u?.region)===null||i===void 0?void 0:i.toLowerCase())!==null&&l!==void 0?l:"",f=Wn.get(`${d}-${h}`),m=Wn.get(d);return{locale:u,language:d,region:h,primary:f,secondary:m}}exists(o,i){var l;const{primary:u,secondary:d}=this.getTranslationData((l=i.lang)!==null&&l!==void 0?l:this.lang());return i=Object.assign({includeFallback:!1},i),!!(u&&u[o]||d&&d[o]||i.includeFallback&&hn&&hn[o])}term(o,...i){const{primary:l,secondary:u}=this.getTranslationData(this.lang());let d;if(l&&l[o])d=l[o];else if(u&&u[o])d=u[o];else if(hn&&hn[o])d=hn[o];else return console.error(`No translation found for: ${String(o)}`),String(o);return typeof d=="function"?d(...i):d}date(o,i){return o=new Date(o),new Intl.DateTimeFormat(this.lang(),i).format(o)}number(o,i){return o=Number(o),isNaN(o)?"":new Intl.NumberFormat(this.lang(),i).format(o)}relativeTime(o,i,l){return new Intl.RelativeTimeFormat(this.lang(),l).format(o,i)}};var Dp={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(r,o)=>`Go to slide ${r} of ${o}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:r=>r===0?"No options selected":r===1?"1 option selected":`${r} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:r=>`Slide ${r}`,toggleColorFormat:"Toggle color format"};Lp(Dp);var Hg=Dp,cr=class extends Op{};Lp(Hg);var qe=Fe`
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
`,Ip=Object.defineProperty,Ug=Object.defineProperties,Wg=Object.getOwnPropertyDescriptor,Gg=Object.getOwnPropertyDescriptors,Xh=Object.getOwnPropertySymbols,Kg=Object.prototype.hasOwnProperty,qg=Object.prototype.propertyIsEnumerable,Xa=(r,o)=>(o=Symbol[r])?o:Symbol.for("Symbol."+r),$u=r=>{throw TypeError(r)},Zh=(r,o,i)=>o in r?Ip(r,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[o]=i,Qr=(r,o)=>{for(var i in o||(o={}))Kg.call(o,i)&&Zh(r,i,o[i]);if(Xh)for(var i of Xh(o))qg.call(o,i)&&Zh(r,i,o[i]);return r},Vs=(r,o)=>Ug(r,Gg(o)),g=(r,o,i,l)=>{for(var u=l>1?void 0:l?Wg(o,i):o,d=r.length-1,h;d>=0;d--)(h=r[d])&&(u=(l?h(o,i,u):h(u))||u);return l&&u&&Ip(o,i,u),u},Fp=(r,o,i)=>o.has(r)||$u("Cannot "+i),Qg=(r,o,i)=>(Fp(r,o,"read from private field"),o.get(r)),Yg=(r,o,i)=>o.has(r)?$u("Cannot add the same private member more than once"):o instanceof WeakSet?o.add(r):o.set(r,i),Xg=(r,o,i,l)=>(Fp(r,o,"write to private field"),o.set(r,i),i),Zg=function(r,o){this[0]=r,this[1]=o},Jg=r=>{var o=r[Xa("asyncIterator")],i=!1,l,u={};return o==null?(o=r[Xa("iterator")](),l=d=>u[d]=h=>o[d](h)):(o=o.call(r),l=d=>u[d]=h=>{if(i){if(i=!1,d==="throw")throw h;return h}return i=!0,{done:!1,value:new Zg(new Promise(f=>{var m=o[d](h);m instanceof Object||$u("Object expected"),f(m)}),1)}}),u[Xa("iterator")]=()=>u,l("next"),"throw"in o?l("throw"):u.throw=d=>{throw d},"return"in o&&l("return"),u};const ev={attribute:!0,type:String,converter:qn,reflect:!1,hasChanged:wu},tv=(r=ev,o,i)=>{const{kind:l,metadata:u}=i;let d=globalThis.litPropertyMetadata.get(u);if(d===void 0&&globalThis.litPropertyMetadata.set(u,d=new Map),l==="setter"&&((r=Object.create(r)).wrapped=!0),d.set(i.name,r),l==="accessor"){const{name:h}=i;return{set(f){const m=o.get.call(this);o.set.call(this,f),this.requestUpdate(h,m,r,!0,f)},init(f){return f!==void 0&&this.C(h,void 0,r,f),f}}}if(l==="setter"){const{name:h}=i;return function(f){const m=this[h];o.call(this,f),this.requestUpdate(h,m,r,!0,f)}}throw Error("Unsupported decorator location: "+l)};function k(r){return(o,i)=>typeof i=="object"?tv(r,o,i):((l,u,d)=>{const h=u.hasOwnProperty(d);return u.constructor.createProperty(d,l),h?Object.getOwnPropertyDescriptor(u,d):void 0})(r,o,i)}function Re(r){return k({...r,state:!0,attribute:!1})}function Bp(r){return(o,i)=>{const l=typeof o=="function"?o:o[i];Object.assign(l,r)}}const rv=(r,o,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&typeof o!="object"&&Object.defineProperty(r,o,i),i);function he(r,o){return(i,l,u)=>{const d=h=>h.renderRoot?.querySelector(r)??null;return rv(i,l,{get(){return d(this)}})}}var Es,Oe=class extends Gn{constructor(){super(),Yg(this,Es,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([o,i])=>{this.constructor.define(o,i)})}emit(o,i){const l=new CustomEvent(o,Qr({bubbles:!0,cancelable:!1,composed:!0,detail:{}},i));return this.dispatchEvent(l),l}static define(o,i=this,l={}){const u=customElements.get(o);if(!u){try{customElements.define(o,i,l)}catch{customElements.define(o,class extends i{},l)}return}let d=" (unknown version)",h=d;"version"in i&&i.version&&(d=" v"+i.version),"version"in u&&u.version&&(h=" v"+u.version),!(d&&h&&d===h)&&console.warn(`Attempted to register <${o}>${d}, but <${o}>${h} has already been registered.`)}attributeChangedCallback(o,i,l){Qg(this,Es)||(this.constructor.elementProperties.forEach((u,d)=>{u.reflect&&this[d]!=null&&this.initialReflectedProperties.set(d,this[d])}),Xg(this,Es,!0)),super.attributeChangedCallback(o,i,l)}willUpdate(o){super.willUpdate(o),this.initialReflectedProperties.forEach((i,l)=>{o.has(l)&&this[l]==null&&(this[l]=i)})}};Es=new WeakMap;Oe.version="2.20.1";Oe.dependencies={};g([k()],Oe.prototype,"dir",2);g([k()],Oe.prototype,"lang",2);var Eu=class extends Oe{constructor(){super(...arguments),this.localize=new cr(this)}render(){return le`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Eu.styles=[qe,jg];var Ko=new WeakMap,qo=new WeakMap,Qo=new WeakMap,Za=new WeakSet,ws=new WeakMap,si=class{constructor(r,o){this.handleFormData=i=>{const l=this.options.disabled(this.host),u=this.options.name(this.host),d=this.options.value(this.host),h=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!l&&!h&&typeof u=="string"&&u.length>0&&typeof d<"u"&&(Array.isArray(d)?d.forEach(f=>{i.formData.append(u,f.toString())}):i.formData.append(u,d.toString()))},this.handleFormSubmit=i=>{var l;const u=this.options.disabled(this.host),d=this.options.reportValidity;this.form&&!this.form.noValidate&&((l=Ko.get(this.form))==null||l.forEach(h=>{this.setUserInteracted(h,!0)})),this.form&&!this.form.noValidate&&!u&&!d(this.host)&&(i.preventDefault(),i.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),ws.set(this.host,[])},this.handleInteraction=i=>{const l=ws.get(this.host);l.includes(i.type)||l.push(i.type),l.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const i=this.form.querySelectorAll("*");for(const l of i)if(typeof l.checkValidity=="function"&&!l.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const i=this.form.querySelectorAll("*");for(const l of i)if(typeof l.reportValidity=="function"&&!l.reportValidity())return!1}return!0},(this.host=r).addController(this),this.options=Qr({form:i=>{const l=i.form;if(l){const d=i.getRootNode().querySelector(`#${l}`);if(d)return d}return i.closest("form")},name:i=>i.name,value:i=>i.value,defaultValue:i=>i.defaultValue,disabled:i=>{var l;return(l=i.disabled)!=null?l:!1},reportValidity:i=>typeof i.reportValidity=="function"?i.reportValidity():!0,checkValidity:i=>typeof i.checkValidity=="function"?i.checkValidity():!0,setValue:(i,l)=>i.value=l,assumeInteractionOn:["sl-input"]},o)}hostConnected(){const r=this.options.form(this.host);r&&this.attachForm(r),ws.set(this.host,[]),this.options.assumeInteractionOn.forEach(o=>{this.host.addEventListener(o,this.handleInteraction)})}hostDisconnected(){this.detachForm(),ws.delete(this.host),this.options.assumeInteractionOn.forEach(r=>{this.host.removeEventListener(r,this.handleInteraction)})}hostUpdated(){const r=this.options.form(this.host);r||this.detachForm(),r&&this.form!==r&&(this.detachForm(),this.attachForm(r)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(r){r?(this.form=r,Ko.has(this.form)?Ko.get(this.form).add(this.host):Ko.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),qo.has(this.form)||(qo.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),Qo.has(this.form)||(Qo.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const r=Ko.get(this.form);r&&(r.delete(this.host),r.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),qo.has(this.form)&&(this.form.reportValidity=qo.get(this.form),qo.delete(this.form)),Qo.has(this.form)&&(this.form.checkValidity=Qo.get(this.form),Qo.delete(this.form)),this.form=void 0))}setUserInteracted(r,o){o?Za.add(r):Za.delete(r),r.requestUpdate()}doAction(r,o){if(this.form){const i=document.createElement("button");i.type=r,i.style.position="absolute",i.style.width="0",i.style.height="0",i.style.clipPath="inset(50%)",i.style.overflow="hidden",i.style.whiteSpace="nowrap",o&&(i.name=o.name,i.value=o.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(l=>{o.hasAttribute(l)&&i.setAttribute(l,o.getAttribute(l))})),this.form.append(i),i.click(),i.remove()}}getForm(){var r;return(r=this.form)!=null?r:null}reset(r){this.doAction("reset",r)}submit(r){this.doAction("submit",r)}setValidity(r){const o=this.host,i=!!Za.has(o),l=!!o.required;o.toggleAttribute("data-required",l),o.toggleAttribute("data-optional",!l),o.toggleAttribute("data-invalid",!r),o.toggleAttribute("data-valid",r),o.toggleAttribute("data-user-invalid",!r&&i),o.toggleAttribute("data-user-valid",r&&i)}updateValidity(){const r=this.host;this.setValidity(r.validity.valid)}emitInvalidEvent(r){const o=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});r||o.preventDefault(),this.host.dispatchEvent(o)||r?.preventDefault()}},js=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),nv=Object.freeze(Vs(Qr({},js),{valid:!1,valueMissing:!0})),ov=Object.freeze(Vs(Qr({},js),{valid:!1,customError:!0})),Vp=Fe`
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
`,Zn=class{constructor(r,...o){this.slotNames=[],this.handleSlotChange=i=>{const l=i.target;(this.slotNames.includes("[default]")&&!l.name||l.name&&this.slotNames.includes(l.name))&&this.host.requestUpdate()},(this.host=r).addController(this),this.slotNames=o}hasDefaultSlot(){return[...this.host.childNodes].some(r=>{if(r.nodeType===r.TEXT_NODE&&r.textContent.trim()!=="")return!0;if(r.nodeType===r.ELEMENT_NODE){const o=r;if(o.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!o.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(r){return this.host.querySelector(`:scope > [slot="${r}"]`)!==null}test(r){return r==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(r)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function iv(r){if(!r)return"";const o=r.assignedNodes({flatten:!0});let i="";return[...o].forEach(l=>{l.nodeType===Node.TEXT_NODE&&(i+=l.textContent)}),i}var cu="";function zs(r){cu=r}function sv(r=""){if(!cu){const o=[...document.getElementsByTagName("script")],i=o.find(l=>l.hasAttribute("data-shoelace"));if(i)zs(i.getAttribute("data-shoelace"));else{const l=o.find(d=>/shoelace(\.min)?\.js($|\?)/.test(d.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(d.src));let u="";l&&(u=l.getAttribute("src")),zs(u.split("/").slice(0,-1).join("/"))}}return cu.replace(/\/$/,"")+(r?`/${r.replace(/^\//,"")}`:"")}var lv={name:"default",resolver:r=>sv(`assets/icons/${r}.svg`)},av=lv,Jh={caret:`
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
  `},uv={name:"system",resolver:r=>r in Jh?`data:image/svg+xml,${encodeURIComponent(Jh[r])}`:""},cv=uv,dv=[av,cv],du=[];function hv(r){du.push(r)}function pv(r){du=du.filter(o=>o!==r)}function ep(r){return dv.find(o=>o.name===r)}var fv=Fe`
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
`;function ke(r,o){const i=Qr({waitUntilFirstUpdate:!1},o);return(l,u)=>{const{update:d}=l,h=Array.isArray(r)?r:[r];l.update=function(f){h.forEach(m=>{const w=m;if(f.has(w)){const _=f.get(w),b=this[w];_!==b&&(!i.waitUntilFirstUpdate||this.hasUpdated)&&this[u](_,b)}}),d.call(this,f)}}}const mv=(r,o)=>r?._$litType$!==void 0,jp=r=>r.strings===void 0,gv={},vv=(r,o=gv)=>r._$AH=o;var Yo=Symbol(),_s=Symbol(),Ja,eu=new Map,yt=class extends Oe{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(r,o){var i;let l;if(o?.spriteSheet)return this.svg=le`<svg part="svg">
        <use part="use" href="${r}"></use>
      </svg>`,this.svg;try{if(l=await fetch(r,{mode:"cors"}),!l.ok)return l.status===410?Yo:_s}catch{return _s}try{const u=document.createElement("div");u.innerHTML=await l.text();const d=u.firstElementChild;if(((i=d?.tagName)==null?void 0:i.toLowerCase())!=="svg")return Yo;Ja||(Ja=new DOMParser);const f=Ja.parseFromString(d.outerHTML,"text/html").body.querySelector("svg");return f?(f.part.add("svg"),document.adoptNode(f)):Yo}catch{return Yo}}connectedCallback(){super.connectedCallback(),hv(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),pv(this)}getIconSource(){const r=ep(this.library);return this.name&&r?{url:r.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var r;const{url:o,fromLibrary:i}=this.getIconSource(),l=i?ep(this.library):void 0;if(!o){this.svg=null;return}let u=eu.get(o);if(u||(u=this.resolveIcon(o,l),eu.set(o,u)),!this.initialRender)return;const d=await u;if(d===_s&&eu.delete(o),o===this.getIconSource().url){if(mv(d)){if(this.svg=d,l){await this.updateComplete;const h=this.shadowRoot.querySelector("[part='svg']");typeof l.mutator=="function"&&h&&l.mutator(h)}return}switch(d){case _s:case Yo:this.svg=null,this.emit("sl-error");break;default:this.svg=d.cloneNode(!0),(r=l?.mutator)==null||r.call(l,this.svg),this.emit("sl-load")}}}render(){return this.svg}};yt.styles=[qe,fv];g([Re()],yt.prototype,"svg",2);g([k({reflect:!0})],yt.prototype,"name",2);g([k()],yt.prototype,"src",2);g([k()],yt.prototype,"label",2);g([k({reflect:!0})],yt.prototype,"library",2);g([ke("label")],yt.prototype,"handleLabelChange",1);g([ke(["name","src","library"])],yt.prototype,"setIcon",1);const wr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},Hs=r=>(...o)=>({_$litDirective$:r,values:o});let Us=class{constructor(o){}get _$AU(){return this._$AM._$AU}_$AT(o,i,l){this._$Ct=o,this._$AM=i,this._$Ci=l}_$AS(o,i){return this.update(o,i)}update(o,i){return this.render(...i)}};const Ue=Hs(class extends Us{constructor(r){if(super(r),r.type!==wr.ATTRIBUTE||r.name!=="class"||r.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(o=>r[o]).join(" ")+" "}update(r,[o]){if(this.st===void 0){this.st=new Set,r.strings!==void 0&&(this.nt=new Set(r.strings.join(" ").split(/\s/).filter(l=>l!=="")));for(const l in o)o[l]&&!this.nt?.has(l)&&this.st.add(l);return this.render(o)}const i=r.element.classList;for(const l of this.st)l in o||(i.remove(l),this.st.delete(l));for(const l in o){const u=!!o[l];u===this.st.has(l)||this.nt?.has(l)||(u?(i.add(l),this.st.add(l)):(i.remove(l),this.st.delete(l)))}return Wt}});const Hp=Symbol.for(""),yv=r=>{if(r?.r===Hp)return r?._$litStatic$},Rs=(r,...o)=>({_$litStatic$:o.reduce((i,l,u)=>i+(d=>{if(d._$litStatic$!==void 0)return d._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${d}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(l)+r[u+1],r[0]),r:Hp}),tp=new Map,bv=r=>(o,...i)=>{const l=i.length;let u,d;const h=[],f=[];let m,w=0,_=!1;for(;w<l;){for(m=o[w];w<l&&(d=i[w],(u=yv(d))!==void 0);)m+=u+o[++w],_=!0;w!==l&&f.push(d),h.push(m),w++}if(w===l&&h.push(o[l]),_){const b=h.join("$$lit$$");(o=tp.get(b))===void 0&&(h.raw=h,tp.set(b,o=h)),i=f}return r(o,...i)},Jo=bv(le);const Z=r=>r??He;var be=class extends Oe{constructor(){super(...arguments),this.formControlController=new si(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new Zn(this,"[default]","prefix","suffix"),this.localize=new cr(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:js}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(r){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(r)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(r){this.button.focus(r)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(r){this.isButton()&&(this.button.setCustomValidity(r),this.formControlController.updateValidity())}render(){const r=this.isLink(),o=r?Rs`a`:Rs`button`;return Jo`
      <${o}
        part="base"
        class=${Ue({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
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
        ${this.caret?Jo` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?Jo`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${o}>
    `}};be.styles=[qe,Vp];be.dependencies={"sl-icon":yt,"sl-spinner":Eu};g([he(".button")],be.prototype,"button",2);g([Re()],be.prototype,"hasFocus",2);g([Re()],be.prototype,"invalid",2);g([k()],be.prototype,"title",2);g([k({reflect:!0})],be.prototype,"variant",2);g([k({reflect:!0})],be.prototype,"size",2);g([k({type:Boolean,reflect:!0})],be.prototype,"caret",2);g([k({type:Boolean,reflect:!0})],be.prototype,"disabled",2);g([k({type:Boolean,reflect:!0})],be.prototype,"loading",2);g([k({type:Boolean,reflect:!0})],be.prototype,"outline",2);g([k({type:Boolean,reflect:!0})],be.prototype,"pill",2);g([k({type:Boolean,reflect:!0})],be.prototype,"circle",2);g([k()],be.prototype,"type",2);g([k()],be.prototype,"name",2);g([k()],be.prototype,"value",2);g([k()],be.prototype,"href",2);g([k()],be.prototype,"target",2);g([k()],be.prototype,"rel",2);g([k()],be.prototype,"download",2);g([k()],be.prototype,"form",2);g([k({attribute:"formaction"})],be.prototype,"formAction",2);g([k({attribute:"formenctype"})],be.prototype,"formEnctype",2);g([k({attribute:"formmethod"})],be.prototype,"formMethod",2);g([k({attribute:"formnovalidate",type:Boolean})],be.prototype,"formNoValidate",2);g([k({attribute:"formtarget"})],be.prototype,"formTarget",2);g([ke("disabled",{waitUntilFirstUpdate:!0})],be.prototype,"handleDisabledChange",1);const wv=new Set(["children","localName","ref","style","className"]),rp=new WeakMap,np=(r,o,i,l,u)=>{const d=u?.[o];d===void 0?(r[o]=i,i==null&&o in HTMLElement.prototype&&r.removeAttribute(o)):i!==l&&((h,f,m)=>{let w=rp.get(h);w===void 0&&rp.set(h,w=new Map);let _=w.get(f);m!==void 0?_===void 0?(w.set(f,_={handleEvent:m}),h.addEventListener(f,_)):_.handleEvent=m:_!==void 0&&(w.delete(f),h.removeEventListener(f,_))})(r,d,i)},ft=({react:r,tagName:o,elementClass:i,events:l,displayName:u})=>{const d=new Set(Object.keys(l??{})),h=r.forwardRef(((f,m)=>{const w=r.useRef(new Map),_=r.useRef(null),b={},T={};for(const[A,z]of Object.entries(f))wv.has(A)?b[A==="className"?"class":A]=z:d.has(A)||A in i.prototype?T[A]=z:b[A]=z;return r.useLayoutEffect((()=>{if(_.current===null)return;const A=new Map;for(const z in T)np(_.current,z,f[z],w.current.get(z),l),w.current.delete(z),A.set(z,f[z]);for(const[z,I]of w.current)np(_.current,z,void 0,I,l);w.current=A})),r.useLayoutEffect((()=>{_.current?.removeAttribute("defer-hydration")}),[]),b.suppressHydrationWarning=!0,r.createElement(o,{...b,ref:r.useCallback((A=>{_.current=A,typeof m=="function"?m(A):m!==null&&(m.current=A)}),[m])})}));return h.displayName=u??i.name,h};var _v="sl-button";be.define("sl-button");var xv=ft({tagName:_v,elementClass:be,react:pt,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus",onSlInvalid:"sl-invalid"},displayName:"SlButton"}),Au=xv,kv="sl-icon";yt.define("sl-icon");var Sv=ft({tagName:kv,elementClass:yt,react:pt,events:{onSlLoad:"sl-load",onSlError:"sl-error"},displayName:"SlIcon"}),Up=Sv;const Un=40,dn=8,Wp=Un+dn+8;function Cv({colorOutRgb:r,colormap:o}){const i=ht.useRef(null),[l,u]=ht.useState(0);return ht.useEffect(()=>{const d=i.current,h=new ResizeObserver(([f])=>{u(f.contentRect.width)});return h.observe(d),()=>h.disconnect()},[]),ht.useEffect(()=>{if(!l)return;const d=i.current,h=window.devicePixelRatio||1;d.width=Math.round(l*h),d.height=Math.round(Wp*h);const f=d.getContext("2d");f.scale(h,h),$v(f,l,r,o)},[l,r,o]),R.jsx("div",{className:"preview",children:R.jsx("canvas",{ref:i,role:"img","aria-label":"colormap preview"})})}function $v(r,o,i,l){r.clearRect(0,0,o,Wp);const u=o/i.length;i.forEach((d,h)=>{r.fillStyle=`rgb(${d[0]},${d[1]},${d[2]})`,r.fillRect(h*u,0,u+1,Un)}),r.strokeStyle="rgba(0,0,0,0.25)",r.strokeRect(.5,.5,o-1,Un-1),!(!l||l.length<2)&&(r.fillStyle="#52525b",l.forEach((d,h)=>{if(d==="")return;const f=Math.min(Math.max(h/(l.length-1)*o,dn/2),o-dn/2);r.beginPath(),r.moveTo(f,Un+2),r.lineTo(f-dn/2,Un+2+dn),r.lineTo(f+dn/2,Un+2+dn),r.closePath(),r.fill()}))}var Ev=Fe`
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
`,mt=class extends Oe{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(r){this.disabled&&(r.preventDefault(),r.stopPropagation())}click(){this.button.click()}focus(r){this.button.focus(r)}blur(){this.button.blur()}render(){const r=!!this.href,o=r?Rs`a`:Rs`button`;return Jo`
      <${o}
        part="base"
        class=${Ue({"icon-button":!0,"icon-button--disabled":!r&&this.disabled,"icon-button--focused":this.hasFocus})}
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
    `}};mt.styles=[qe,Ev];mt.dependencies={"sl-icon":yt};g([he(".icon-button")],mt.prototype,"button",2);g([Re()],mt.prototype,"hasFocus",2);g([k()],mt.prototype,"name",2);g([k()],mt.prototype,"library",2);g([k()],mt.prototype,"src",2);g([k()],mt.prototype,"href",2);g([k()],mt.prototype,"target",2);g([k()],mt.prototype,"download",2);g([k()],mt.prototype,"label",2);g([k({type:Boolean,reflect:!0})],mt.prototype,"disabled",2);var Av="sl-icon-button";mt.define("sl-icon-button");var Tv=ft({tagName:Av,elementClass:mt,react:pt,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus"},displayName:"SlIconButton"}),Ur=Tv,zv=Fe`
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
`,Rv=Fe`
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
`;const Gr=Math.min,Mt=Math.max,Ps=Math.round,xs=Math.floor,ar=r=>({x:r,y:r}),Pv={left:"right",right:"left",bottom:"top",top:"bottom"},Nv={start:"end",end:"start"};function hu(r,o,i){return Mt(r,Gr(o,i))}function Jn(r,o){return typeof r=="function"?r(o):r}function Kr(r){return r.split("-")[0]}function eo(r){return r.split("-")[1]}function Gp(r){return r==="x"?"y":"x"}function Tu(r){return r==="y"?"height":"width"}const Lv=new Set(["top","bottom"]);function xr(r){return Lv.has(Kr(r))?"y":"x"}function zu(r){return Gp(xr(r))}function Mv(r,o,i){i===void 0&&(i=!1);const l=eo(r),u=zu(r),d=Tu(u);let h=u==="x"?l===(i?"end":"start")?"right":"left":l==="start"?"bottom":"top";return o.reference[d]>o.floating[d]&&(h=Ns(h)),[h,Ns(h)]}function Ov(r){const o=Ns(r);return[pu(r),o,pu(o)]}function pu(r){return r.replace(/start|end/g,o=>Nv[o])}const op=["left","right"],ip=["right","left"],Dv=["top","bottom"],Iv=["bottom","top"];function Fv(r,o,i){switch(r){case"top":case"bottom":return i?o?ip:op:o?op:ip;case"left":case"right":return o?Dv:Iv;default:return[]}}function Bv(r,o,i,l){const u=eo(r);let d=Fv(Kr(r),i==="start",l);return u&&(d=d.map(h=>h+"-"+u),o&&(d=d.concat(d.map(pu)))),d}function Ns(r){return r.replace(/left|right|bottom|top/g,o=>Pv[o])}function Vv(r){return{top:0,right:0,bottom:0,left:0,...r}}function Kp(r){return typeof r!="number"?Vv(r):{top:r,right:r,bottom:r,left:r}}function Ls(r){const{x:o,y:i,width:l,height:u}=r;return{width:l,height:u,top:i,left:o,right:o+l,bottom:i+u,x:o,y:i}}function sp(r,o,i){let{reference:l,floating:u}=r;const d=xr(o),h=zu(o),f=Tu(h),m=Kr(o),w=d==="y",_=l.x+l.width/2-u.width/2,b=l.y+l.height/2-u.height/2,T=l[f]/2-u[f]/2;let A;switch(m){case"top":A={x:_,y:l.y-u.height};break;case"bottom":A={x:_,y:l.y+l.height};break;case"right":A={x:l.x+l.width,y:b};break;case"left":A={x:l.x-u.width,y:b};break;default:A={x:l.x,y:l.y}}switch(eo(o)){case"start":A[h]-=T*(i&&w?-1:1);break;case"end":A[h]+=T*(i&&w?-1:1);break}return A}async function jv(r,o){var i;o===void 0&&(o={});const{x:l,y:u,platform:d,rects:h,elements:f,strategy:m}=r,{boundary:w="clippingAncestors",rootBoundary:_="viewport",elementContext:b="floating",altBoundary:T=!1,padding:A=0}=Jn(o,r),z=Kp(A),V=f[T?b==="floating"?"reference":"floating":b],Q=Ls(await d.getClippingRect({element:(i=await(d.isElement==null?void 0:d.isElement(V)))==null||i?V:V.contextElement||await(d.getDocumentElement==null?void 0:d.getDocumentElement(f.floating)),boundary:w,rootBoundary:_,strategy:m})),te=b==="floating"?{x:l,y:u,width:h.floating.width,height:h.floating.height}:h.reference,ne=await(d.getOffsetParent==null?void 0:d.getOffsetParent(f.floating)),oe=await(d.isElement==null?void 0:d.isElement(ne))?await(d.getScale==null?void 0:d.getScale(ne))||{x:1,y:1}:{x:1,y:1},we=Ls(d.convertOffsetParentRelativeRectToViewportRelativeRect?await d.convertOffsetParentRelativeRectToViewportRelativeRect({elements:f,rect:te,offsetParent:ne,strategy:m}):te);return{top:(Q.top-we.top+z.top)/oe.y,bottom:(we.bottom-Q.bottom+z.bottom)/oe.y,left:(Q.left-we.left+z.left)/oe.x,right:(we.right-Q.right+z.right)/oe.x}}const Hv=async(r,o,i)=>{const{placement:l="bottom",strategy:u="absolute",middleware:d=[],platform:h}=i,f=d.filter(Boolean),m=await(h.isRTL==null?void 0:h.isRTL(o));let w=await h.getElementRects({reference:r,floating:o,strategy:u}),{x:_,y:b}=sp(w,l,m),T=l,A={},z=0;for(let V=0;V<f.length;V++){var I;const{name:Q,fn:te}=f[V],{x:ne,y:oe,data:we,reset:ue}=await te({x:_,y:b,initialPlacement:l,placement:T,strategy:u,middlewareData:A,rects:w,platform:{...h,detectOverflow:(I=h.detectOverflow)!=null?I:jv},elements:{reference:r,floating:o}});_=ne??_,b=oe??b,A={...A,[Q]:{...A[Q],...we}},ue&&z<=50&&(z++,typeof ue=="object"&&(ue.placement&&(T=ue.placement),ue.rects&&(w=ue.rects===!0?await h.getElementRects({reference:r,floating:o,strategy:u}):ue.rects),{x:_,y:b}=sp(w,T,m)),V=-1)}return{x:_,y:b,placement:T,strategy:u,middlewareData:A}},Uv=r=>({name:"arrow",options:r,async fn(o){const{x:i,y:l,placement:u,rects:d,platform:h,elements:f,middlewareData:m}=o,{element:w,padding:_=0}=Jn(r,o)||{};if(w==null)return{};const b=Kp(_),T={x:i,y:l},A=zu(u),z=Tu(A),I=await h.getDimensions(w),V=A==="y",Q=V?"top":"left",te=V?"bottom":"right",ne=V?"clientHeight":"clientWidth",oe=d.reference[z]+d.reference[A]-T[A]-d.floating[z],we=T[A]-d.reference[A],ue=await(h.getOffsetParent==null?void 0:h.getOffsetParent(w));let pe=ue?ue[ne]:0;(!pe||!await(h.isElement==null?void 0:h.isElement(ue)))&&(pe=f.floating[ne]||d.floating[z]);const Pe=oe/2-we/2,Be=pe/2-I[z]/2-1,Ae=Gr(b[Q],Be),Xe=Gr(b[te],Be),Ne=Ae,Ce=pe-I[z]-Xe,F=pe/2-I[z]/2+Pe,B=hu(Ne,F,Ce),re=!m.arrow&&eo(u)!=null&&F!==B&&d.reference[z]/2-(F<Ne?Ae:Xe)-I[z]/2<0,ee=re?F<Ne?F-Ne:F-Ce:0;return{[A]:T[A]+ee,data:{[A]:B,centerOffset:F-B-ee,...re&&{alignmentOffset:ee}},reset:re}}}),Wv=function(r){return r===void 0&&(r={}),{name:"flip",options:r,async fn(o){var i,l;const{placement:u,middlewareData:d,rects:h,initialPlacement:f,platform:m,elements:w}=o,{mainAxis:_=!0,crossAxis:b=!0,fallbackPlacements:T,fallbackStrategy:A="bestFit",fallbackAxisSideDirection:z="none",flipAlignment:I=!0,...V}=Jn(r,o);if((i=d.arrow)!=null&&i.alignmentOffset)return{};const Q=Kr(u),te=xr(f),ne=Kr(f)===f,oe=await(m.isRTL==null?void 0:m.isRTL(w.floating)),we=T||(ne||!I?[Ns(f)]:Ov(f)),ue=z!=="none";!T&&ue&&we.push(...Bv(f,I,z,oe));const pe=[f,...we],Pe=await m.detectOverflow(o,V),Be=[];let Ae=((l=d.flip)==null?void 0:l.overflows)||[];if(_&&Be.push(Pe[Q]),b){const F=Mv(u,h,oe);Be.push(Pe[F[0]],Pe[F[1]])}if(Ae=[...Ae,{placement:u,overflows:Be}],!Be.every(F=>F<=0)){var Xe,Ne;const F=(((Xe=d.flip)==null?void 0:Xe.index)||0)+1,B=pe[F];if(B&&(!(b==="alignment"?te!==xr(B):!1)||Ae.every(D=>xr(D.placement)===te?D.overflows[0]>0:!0)))return{data:{index:F,overflows:Ae},reset:{placement:B}};let re=(Ne=Ae.filter(ee=>ee.overflows[0]<=0).sort((ee,D)=>ee.overflows[1]-D.overflows[1])[0])==null?void 0:Ne.placement;if(!re)switch(A){case"bestFit":{var Ce;const ee=(Ce=Ae.filter(D=>{if(ue){const q=xr(D.placement);return q===te||q==="y"}return!0}).map(D=>[D.placement,D.overflows.filter(q=>q>0).reduce((q,H)=>q+H,0)]).sort((D,q)=>D[1]-q[1])[0])==null?void 0:Ce[0];ee&&(re=ee);break}case"initialPlacement":re=f;break}if(u!==re)return{reset:{placement:re}}}return{}}}},Gv=new Set(["left","top"]);async function Kv(r,o){const{placement:i,platform:l,elements:u}=r,d=await(l.isRTL==null?void 0:l.isRTL(u.floating)),h=Kr(i),f=eo(i),m=xr(i)==="y",w=Gv.has(h)?-1:1,_=d&&m?-1:1,b=Jn(o,r);let{mainAxis:T,crossAxis:A,alignmentAxis:z}=typeof b=="number"?{mainAxis:b,crossAxis:0,alignmentAxis:null}:{mainAxis:b.mainAxis||0,crossAxis:b.crossAxis||0,alignmentAxis:b.alignmentAxis};return f&&typeof z=="number"&&(A=f==="end"?z*-1:z),m?{x:A*_,y:T*w}:{x:T*w,y:A*_}}const qv=function(r){return r===void 0&&(r=0),{name:"offset",options:r,async fn(o){var i,l;const{x:u,y:d,placement:h,middlewareData:f}=o,m=await Kv(o,r);return h===((i=f.offset)==null?void 0:i.placement)&&(l=f.arrow)!=null&&l.alignmentOffset?{}:{x:u+m.x,y:d+m.y,data:{...m,placement:h}}}}},Qv=function(r){return r===void 0&&(r={}),{name:"shift",options:r,async fn(o){const{x:i,y:l,placement:u,platform:d}=o,{mainAxis:h=!0,crossAxis:f=!1,limiter:m={fn:Q=>{let{x:te,y:ne}=Q;return{x:te,y:ne}}},...w}=Jn(r,o),_={x:i,y:l},b=await d.detectOverflow(o,w),T=xr(Kr(u)),A=Gp(T);let z=_[A],I=_[T];if(h){const Q=A==="y"?"top":"left",te=A==="y"?"bottom":"right",ne=z+b[Q],oe=z-b[te];z=hu(ne,z,oe)}if(f){const Q=T==="y"?"top":"left",te=T==="y"?"bottom":"right",ne=I+b[Q],oe=I-b[te];I=hu(ne,I,oe)}const V=m.fn({...o,[A]:z,[T]:I});return{...V,data:{x:V.x-i,y:V.y-l,enabled:{[A]:h,[T]:f}}}}}},Yv=function(r){return r===void 0&&(r={}),{name:"size",options:r,async fn(o){var i,l;const{placement:u,rects:d,platform:h,elements:f}=o,{apply:m=()=>{},...w}=Jn(r,o),_=await h.detectOverflow(o,w),b=Kr(u),T=eo(u),A=xr(u)==="y",{width:z,height:I}=d.floating;let V,Q;b==="top"||b==="bottom"?(V=b,Q=T===(await(h.isRTL==null?void 0:h.isRTL(f.floating))?"start":"end")?"left":"right"):(Q=b,V=T==="end"?"top":"bottom");const te=I-_.top-_.bottom,ne=z-_.left-_.right,oe=Gr(I-_[V],te),we=Gr(z-_[Q],ne),ue=!o.middlewareData.shift;let pe=oe,Pe=we;if((i=o.middlewareData.shift)!=null&&i.enabled.x&&(Pe=ne),(l=o.middlewareData.shift)!=null&&l.enabled.y&&(pe=te),ue&&!T){const Ae=Mt(_.left,0),Xe=Mt(_.right,0),Ne=Mt(_.top,0),Ce=Mt(_.bottom,0);A?Pe=z-2*(Ae!==0||Xe!==0?Ae+Xe:Mt(_.left,_.right)):pe=I-2*(Ne!==0||Ce!==0?Ne+Ce:Mt(_.top,_.bottom))}await m({...o,availableWidth:Pe,availableHeight:pe});const Be=await h.getDimensions(f.floating);return z!==Be.width||I!==Be.height?{reset:{rects:!0}}:{}}}};function Ws(){return typeof window<"u"}function to(r){return qp(r)?(r.nodeName||"").toLowerCase():"#document"}function Ot(r){var o;return(r==null||(o=r.ownerDocument)==null?void 0:o.defaultView)||window}function dr(r){var o;return(o=(qp(r)?r.ownerDocument:r.document)||window.document)==null?void 0:o.documentElement}function qp(r){return Ws()?r instanceof Node||r instanceof Ot(r).Node:!1}function tr(r){return Ws()?r instanceof Element||r instanceof Ot(r).Element:!1}function ur(r){return Ws()?r instanceof HTMLElement||r instanceof Ot(r).HTMLElement:!1}function lp(r){return!Ws()||typeof ShadowRoot>"u"?!1:r instanceof ShadowRoot||r instanceof Ot(r).ShadowRoot}const Xv=new Set(["inline","contents"]);function li(r){const{overflow:o,overflowX:i,overflowY:l,display:u}=rr(r);return/auto|scroll|overlay|hidden|clip/.test(o+l+i)&&!Xv.has(u)}const Zv=new Set(["table","td","th"]);function Jv(r){return Zv.has(to(r))}const e0=[":popover-open",":modal"];function Gs(r){return e0.some(o=>{try{return r.matches(o)}catch{return!1}})}const t0=["transform","translate","scale","rotate","perspective"],r0=["transform","translate","scale","rotate","perspective","filter"],n0=["paint","layout","strict","content"];function Ks(r){const o=Ru(),i=tr(r)?rr(r):r;return t0.some(l=>i[l]?i[l]!=="none":!1)||(i.containerType?i.containerType!=="normal":!1)||!o&&(i.backdropFilter?i.backdropFilter!=="none":!1)||!o&&(i.filter?i.filter!=="none":!1)||r0.some(l=>(i.willChange||"").includes(l))||n0.some(l=>(i.contain||"").includes(l))}function o0(r){let o=qr(r);for(;ur(o)&&!Yn(o);){if(Ks(o))return o;if(Gs(o))return null;o=qr(o)}return null}function Ru(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const i0=new Set(["html","body","#document"]);function Yn(r){return i0.has(to(r))}function rr(r){return Ot(r).getComputedStyle(r)}function qs(r){return tr(r)?{scrollLeft:r.scrollLeft,scrollTop:r.scrollTop}:{scrollLeft:r.scrollX,scrollTop:r.scrollY}}function qr(r){if(to(r)==="html")return r;const o=r.assignedSlot||r.parentNode||lp(r)&&r.host||dr(r);return lp(o)?o.host:o}function Qp(r){const o=qr(r);return Yn(o)?r.ownerDocument?r.ownerDocument.body:r.body:ur(o)&&li(o)?o:Qp(o)}function oi(r,o,i){var l;o===void 0&&(o=[]),i===void 0&&(i=!0);const u=Qp(r),d=u===((l=r.ownerDocument)==null?void 0:l.body),h=Ot(u);if(d){const f=fu(h);return o.concat(h,h.visualViewport||[],li(u)?u:[],f&&i?oi(f):[])}return o.concat(u,oi(u,[],i))}function fu(r){return r.parent&&Object.getPrototypeOf(r.parent)?r.frameElement:null}function Yp(r){const o=rr(r);let i=parseFloat(o.width)||0,l=parseFloat(o.height)||0;const u=ur(r),d=u?r.offsetWidth:i,h=u?r.offsetHeight:l,f=Ps(i)!==d||Ps(l)!==h;return f&&(i=d,l=h),{width:i,height:l,$:f}}function Pu(r){return tr(r)?r:r.contextElement}function Kn(r){const o=Pu(r);if(!ur(o))return ar(1);const i=o.getBoundingClientRect(),{width:l,height:u,$:d}=Yp(o);let h=(d?Ps(i.width):i.width)/l,f=(d?Ps(i.height):i.height)/u;return(!h||!Number.isFinite(h))&&(h=1),(!f||!Number.isFinite(f))&&(f=1),{x:h,y:f}}const s0=ar(0);function Xp(r){const o=Ot(r);return!Ru()||!o.visualViewport?s0:{x:o.visualViewport.offsetLeft,y:o.visualViewport.offsetTop}}function l0(r,o,i){return o===void 0&&(o=!1),!i||o&&i!==Ot(r)?!1:o}function vn(r,o,i,l){o===void 0&&(o=!1),i===void 0&&(i=!1);const u=r.getBoundingClientRect(),d=Pu(r);let h=ar(1);o&&(l?tr(l)&&(h=Kn(l)):h=Kn(r));const f=l0(d,i,l)?Xp(d):ar(0);let m=(u.left+f.x)/h.x,w=(u.top+f.y)/h.y,_=u.width/h.x,b=u.height/h.y;if(d){const T=Ot(d),A=l&&tr(l)?Ot(l):l;let z=T,I=fu(z);for(;I&&l&&A!==z;){const V=Kn(I),Q=I.getBoundingClientRect(),te=rr(I),ne=Q.left+(I.clientLeft+parseFloat(te.paddingLeft))*V.x,oe=Q.top+(I.clientTop+parseFloat(te.paddingTop))*V.y;m*=V.x,w*=V.y,_*=V.x,b*=V.y,m+=ne,w+=oe,z=Ot(I),I=fu(z)}}return Ls({width:_,height:b,x:m,y:w})}function Qs(r,o){const i=qs(r).scrollLeft;return o?o.left+i:vn(dr(r)).left+i}function Zp(r,o){const i=r.getBoundingClientRect(),l=i.left+o.scrollLeft-Qs(r,i),u=i.top+o.scrollTop;return{x:l,y:u}}function a0(r){let{elements:o,rect:i,offsetParent:l,strategy:u}=r;const d=u==="fixed",h=dr(l),f=o?Gs(o.floating):!1;if(l===h||f&&d)return i;let m={scrollLeft:0,scrollTop:0},w=ar(1);const _=ar(0),b=ur(l);if((b||!b&&!d)&&((to(l)!=="body"||li(h))&&(m=qs(l)),ur(l))){const A=vn(l);w=Kn(l),_.x=A.x+l.clientLeft,_.y=A.y+l.clientTop}const T=h&&!b&&!d?Zp(h,m):ar(0);return{width:i.width*w.x,height:i.height*w.y,x:i.x*w.x-m.scrollLeft*w.x+_.x+T.x,y:i.y*w.y-m.scrollTop*w.y+_.y+T.y}}function u0(r){return Array.from(r.getClientRects())}function c0(r){const o=dr(r),i=qs(r),l=r.ownerDocument.body,u=Mt(o.scrollWidth,o.clientWidth,l.scrollWidth,l.clientWidth),d=Mt(o.scrollHeight,o.clientHeight,l.scrollHeight,l.clientHeight);let h=-i.scrollLeft+Qs(r);const f=-i.scrollTop;return rr(l).direction==="rtl"&&(h+=Mt(o.clientWidth,l.clientWidth)-u),{width:u,height:d,x:h,y:f}}const ap=25;function d0(r,o){const i=Ot(r),l=dr(r),u=i.visualViewport;let d=l.clientWidth,h=l.clientHeight,f=0,m=0;if(u){d=u.width,h=u.height;const _=Ru();(!_||_&&o==="fixed")&&(f=u.offsetLeft,m=u.offsetTop)}const w=Qs(l);if(w<=0){const _=l.ownerDocument,b=_.body,T=getComputedStyle(b),A=_.compatMode==="CSS1Compat"&&parseFloat(T.marginLeft)+parseFloat(T.marginRight)||0,z=Math.abs(l.clientWidth-b.clientWidth-A);z<=ap&&(d-=z)}else w<=ap&&(d+=w);return{width:d,height:h,x:f,y:m}}const h0=new Set(["absolute","fixed"]);function p0(r,o){const i=vn(r,!0,o==="fixed"),l=i.top+r.clientTop,u=i.left+r.clientLeft,d=ur(r)?Kn(r):ar(1),h=r.clientWidth*d.x,f=r.clientHeight*d.y,m=u*d.x,w=l*d.y;return{width:h,height:f,x:m,y:w}}function up(r,o,i){let l;if(o==="viewport")l=d0(r,i);else if(o==="document")l=c0(dr(r));else if(tr(o))l=p0(o,i);else{const u=Xp(r);l={x:o.x-u.x,y:o.y-u.y,width:o.width,height:o.height}}return Ls(l)}function Jp(r,o){const i=qr(r);return i===o||!tr(i)||Yn(i)?!1:rr(i).position==="fixed"||Jp(i,o)}function f0(r,o){const i=o.get(r);if(i)return i;let l=oi(r,[],!1).filter(f=>tr(f)&&to(f)!=="body"),u=null;const d=rr(r).position==="fixed";let h=d?qr(r):r;for(;tr(h)&&!Yn(h);){const f=rr(h),m=Ks(h);!m&&f.position==="fixed"&&(u=null),(d?!m&&!u:!m&&f.position==="static"&&!!u&&h0.has(u.position)||li(h)&&!m&&Jp(r,h))?l=l.filter(_=>_!==h):u=f,h=qr(h)}return o.set(r,l),l}function m0(r){let{element:o,boundary:i,rootBoundary:l,strategy:u}=r;const h=[...i==="clippingAncestors"?Gs(o)?[]:f0(o,this._c):[].concat(i),l],f=h[0],m=h.reduce((w,_)=>{const b=up(o,_,u);return w.top=Mt(b.top,w.top),w.right=Gr(b.right,w.right),w.bottom=Gr(b.bottom,w.bottom),w.left=Mt(b.left,w.left),w},up(o,f,u));return{width:m.right-m.left,height:m.bottom-m.top,x:m.left,y:m.top}}function g0(r){const{width:o,height:i}=Yp(r);return{width:o,height:i}}function v0(r,o,i){const l=ur(o),u=dr(o),d=i==="fixed",h=vn(r,!0,d,o);let f={scrollLeft:0,scrollTop:0};const m=ar(0);function w(){m.x=Qs(u)}if(l||!l&&!d)if((to(o)!=="body"||li(u))&&(f=qs(o)),l){const A=vn(o,!0,d,o);m.x=A.x+o.clientLeft,m.y=A.y+o.clientTop}else u&&w();d&&!l&&u&&w();const _=u&&!l&&!d?Zp(u,f):ar(0),b=h.left+f.scrollLeft-m.x-_.x,T=h.top+f.scrollTop-m.y-_.y;return{x:b,y:T,width:h.width,height:h.height}}function tu(r){return rr(r).position==="static"}function cp(r,o){if(!ur(r)||rr(r).position==="fixed")return null;if(o)return o(r);let i=r.offsetParent;return dr(r)===i&&(i=i.ownerDocument.body),i}function ef(r,o){const i=Ot(r);if(Gs(r))return i;if(!ur(r)){let u=qr(r);for(;u&&!Yn(u);){if(tr(u)&&!tu(u))return u;u=qr(u)}return i}let l=cp(r,o);for(;l&&Jv(l)&&tu(l);)l=cp(l,o);return l&&Yn(l)&&tu(l)&&!Ks(l)?i:l||o0(r)||i}const y0=async function(r){const o=this.getOffsetParent||ef,i=this.getDimensions,l=await i(r.floating);return{reference:v0(r.reference,await o(r.floating),r.strategy),floating:{x:0,y:0,width:l.width,height:l.height}}};function b0(r){return rr(r).direction==="rtl"}const As={convertOffsetParentRelativeRectToViewportRelativeRect:a0,getDocumentElement:dr,getClippingRect:m0,getOffsetParent:ef,getElementRects:y0,getClientRects:u0,getDimensions:g0,getScale:Kn,isElement:tr,isRTL:b0};function tf(r,o){return r.x===o.x&&r.y===o.y&&r.width===o.width&&r.height===o.height}function w0(r,o){let i=null,l;const u=dr(r);function d(){var f;clearTimeout(l),(f=i)==null||f.disconnect(),i=null}function h(f,m){f===void 0&&(f=!1),m===void 0&&(m=1),d();const w=r.getBoundingClientRect(),{left:_,top:b,width:T,height:A}=w;if(f||o(),!T||!A)return;const z=xs(b),I=xs(u.clientWidth-(_+T)),V=xs(u.clientHeight-(b+A)),Q=xs(_),ne={rootMargin:-z+"px "+-I+"px "+-V+"px "+-Q+"px",threshold:Mt(0,Gr(1,m))||1};let oe=!0;function we(ue){const pe=ue[0].intersectionRatio;if(pe!==m){if(!oe)return h();pe?h(!1,pe):l=setTimeout(()=>{h(!1,1e-7)},1e3)}pe===1&&!tf(w,r.getBoundingClientRect())&&h(),oe=!1}try{i=new IntersectionObserver(we,{...ne,root:u.ownerDocument})}catch{i=new IntersectionObserver(we,ne)}i.observe(r)}return h(!0),d}function _0(r,o,i,l){l===void 0&&(l={});const{ancestorScroll:u=!0,ancestorResize:d=!0,elementResize:h=typeof ResizeObserver=="function",layoutShift:f=typeof IntersectionObserver=="function",animationFrame:m=!1}=l,w=Pu(r),_=u||d?[...w?oi(w):[],...oi(o)]:[];_.forEach(Q=>{u&&Q.addEventListener("scroll",i,{passive:!0}),d&&Q.addEventListener("resize",i)});const b=w&&f?w0(w,i):null;let T=-1,A=null;h&&(A=new ResizeObserver(Q=>{let[te]=Q;te&&te.target===w&&A&&(A.unobserve(o),cancelAnimationFrame(T),T=requestAnimationFrame(()=>{var ne;(ne=A)==null||ne.observe(o)})),i()}),w&&!m&&A.observe(w),A.observe(o));let z,I=m?vn(r):null;m&&V();function V(){const Q=vn(r);I&&!tf(I,Q)&&i(),I=Q,z=requestAnimationFrame(V)}return i(),()=>{var Q;_.forEach(te=>{u&&te.removeEventListener("scroll",i),d&&te.removeEventListener("resize",i)}),b?.(),(Q=A)==null||Q.disconnect(),A=null,m&&cancelAnimationFrame(z)}}const x0=qv,k0=Qv,S0=Wv,dp=Yv,C0=Uv,$0=(r,o,i)=>{const l=new Map,u={platform:As,...i},d={...u.platform,_c:l};return Hv(r,o,{...u,platform:d})};function E0(r){return A0(r)}function ru(r){return r.assignedSlot?r.assignedSlot:r.parentNode instanceof ShadowRoot?r.parentNode.host:r.parentNode}function A0(r){for(let o=r;o;o=ru(o))if(o instanceof Element&&getComputedStyle(o).display==="none")return null;for(let o=ru(r);o;o=ru(o)){if(!(o instanceof Element))continue;const i=getComputedStyle(o);if(i.display!=="contents"&&(i.position!=="static"||Ks(i)||o.tagName==="BODY"))return o}return null}function T0(r){return r!==null&&typeof r=="object"&&"getBoundingClientRect"in r&&("contextElement"in r?r.contextElement instanceof Element:!0)}var Se=class extends Oe{constructor(){super(...arguments),this.localize=new cr(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const r=this.anchorEl.getBoundingClientRect(),o=this.popup.getBoundingClientRect(),i=this.placement.includes("top")||this.placement.includes("bottom");let l=0,u=0,d=0,h=0,f=0,m=0,w=0,_=0;i?r.top<o.top?(l=r.left,u=r.bottom,d=r.right,h=r.bottom,f=o.left,m=o.top,w=o.right,_=o.top):(l=o.left,u=o.bottom,d=o.right,h=o.bottom,f=r.left,m=r.top,w=r.right,_=r.top):r.left<o.left?(l=r.right,u=r.top,d=o.left,h=o.top,f=r.right,m=r.bottom,w=o.left,_=o.bottom):(l=o.right,u=o.top,d=r.left,h=r.top,f=o.right,m=o.bottom,w=r.left,_=r.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${l}px`),this.style.setProperty("--hover-bridge-top-left-y",`${u}px`),this.style.setProperty("--hover-bridge-top-right-x",`${d}px`),this.style.setProperty("--hover-bridge-top-right-y",`${h}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${f}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${m}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${w}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${_}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(r){super.updated(r),r.has("active")&&(this.active?this.start():this.stop()),r.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const r=this.getRootNode();this.anchorEl=r.getElementById(this.anchor)}else this.anchor instanceof Element||T0(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){!this.anchorEl||!this.active||(this.cleanup=_0(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(r=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>r())):r()})}reposition(){if(!this.active||!this.anchorEl)return;const r=[x0({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?r.push(dp({apply:({rects:i})=>{const l=this.sync==="width"||this.sync==="both",u=this.sync==="height"||this.sync==="both";this.popup.style.width=l?`${i.reference.width}px`:"",this.popup.style.height=u?`${i.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&r.push(S0({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&r.push(k0({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?r.push(dp({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:i,availableHeight:l})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${l}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${i}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&r.push(C0({element:this.arrowEl,padding:this.arrowPadding}));const o=this.strategy==="absolute"?i=>As.getOffsetParent(i,E0):As.getOffsetParent;$0(this.anchorEl,this.popup,{placement:this.placement,middleware:r,strategy:this.strategy,platform:Vs(Qr({},As),{getOffsetParent:o})}).then(({x:i,y:l,middlewareData:u,placement:d})=>{const h=this.localize.dir()==="rtl",f={top:"bottom",right:"left",bottom:"top",left:"right"}[d.split("-")[0]];if(this.setAttribute("data-current-placement",d),Object.assign(this.popup.style,{left:`${i}px`,top:`${l}px`}),this.arrow){const m=u.arrow.x,w=u.arrow.y;let _="",b="",T="",A="";if(this.arrowPlacement==="start"){const z=typeof m=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";_=typeof w=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",b=h?z:"",A=h?"":z}else if(this.arrowPlacement==="end"){const z=typeof m=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";b=h?"":z,A=h?z:"",T=typeof w=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(A=typeof m=="number"?"calc(50% - var(--arrow-size-diagonal))":"",_=typeof w=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(A=typeof m=="number"?`${m}px`:"",_=typeof w=="number"?`${w}px`:"");Object.assign(this.arrowEl.style,{top:_,right:b,bottom:T,left:A,[f]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return le`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${Ue({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${Ue({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?le`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};Se.styles=[qe,Rv];g([he(".popup")],Se.prototype,"popup",2);g([he(".popup__arrow")],Se.prototype,"arrowEl",2);g([k()],Se.prototype,"anchor",2);g([k({type:Boolean,reflect:!0})],Se.prototype,"active",2);g([k({reflect:!0})],Se.prototype,"placement",2);g([k({reflect:!0})],Se.prototype,"strategy",2);g([k({type:Number})],Se.prototype,"distance",2);g([k({type:Number})],Se.prototype,"skidding",2);g([k({type:Boolean})],Se.prototype,"arrow",2);g([k({attribute:"arrow-placement"})],Se.prototype,"arrowPlacement",2);g([k({attribute:"arrow-padding",type:Number})],Se.prototype,"arrowPadding",2);g([k({type:Boolean})],Se.prototype,"flip",2);g([k({attribute:"flip-fallback-placements",converter:{fromAttribute:r=>r.split(" ").map(o=>o.trim()).filter(o=>o!==""),toAttribute:r=>r.join(" ")}})],Se.prototype,"flipFallbackPlacements",2);g([k({attribute:"flip-fallback-strategy"})],Se.prototype,"flipFallbackStrategy",2);g([k({type:Object})],Se.prototype,"flipBoundary",2);g([k({attribute:"flip-padding",type:Number})],Se.prototype,"flipPadding",2);g([k({type:Boolean})],Se.prototype,"shift",2);g([k({type:Object})],Se.prototype,"shiftBoundary",2);g([k({attribute:"shift-padding",type:Number})],Se.prototype,"shiftPadding",2);g([k({attribute:"auto-size"})],Se.prototype,"autoSize",2);g([k()],Se.prototype,"sync",2);g([k({type:Object})],Se.prototype,"autoSizeBoundary",2);g([k({attribute:"auto-size-padding",type:Number})],Se.prototype,"autoSizePadding",2);g([k({attribute:"hover-bridge",type:Boolean})],Se.prototype,"hoverBridge",2);var rf=new Map,z0=new WeakMap;function R0(r){return r??{keyframes:[],options:{duration:0}}}function hp(r,o){return o.toLowerCase()==="rtl"?{keyframes:r.rtlKeyframes||r.keyframes,options:r.options}:r}function ro(r,o){rf.set(r,R0(o))}function Xn(r,o,i){const l=z0.get(r);if(l?.[o])return hp(l[o],i.dir);const u=rf.get(o);return u?hp(u,i.dir):{keyframes:[],options:{duration:0}}}function Ms(r,o){return new Promise(i=>{function l(u){u.target===r&&(r.removeEventListener(o,l),i())}r.addEventListener(o,l)})}function Os(r,o,i){return new Promise(l=>{if(i?.duration===1/0)throw new Error("Promise-based animations must be finite.");const u=r.animate(o,Vs(Qr({},i),{duration:P0()?0:i.duration}));u.addEventListener("cancel",l,{once:!0}),u.addEventListener("finish",l,{once:!0})})}function pp(r){return r=r.toString().toLowerCase(),r.indexOf("ms")>-1?parseFloat(r):r.indexOf("s")>-1?parseFloat(r)*1e3:parseFloat(r)}function P0(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Ds(r){return Promise.all(r.getAnimations().map(o=>new Promise(i=>{o.cancel(),requestAnimationFrame(i)})))}var tt=class extends Oe{constructor(){super(),this.localize=new cr(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=r=>{r.key==="Escape"&&(r.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const r=pp(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),r)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const r=pp(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),r)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var r;super.disconnectedCallback(),(r=this.closeWatcher)==null||r.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(r){return this.trigger.split(" ").includes(r)}async handleOpenChange(){var r,o;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?((r=this.closeWatcher)==null||r.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await Ds(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:i,options:l}=Xn(this,"tooltip.show",{dir:this.localize.dir()});await Os(this.popup.popup,i,l),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),(o=this.closeWatcher)==null||o.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await Ds(this.body);const{keyframes:i,options:l}=Xn(this,"tooltip.hide",{dir:this.localize.dir()});await Os(this.popup.popup,i,l),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,Ms(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Ms(this,"sl-after-hide")}render(){return le`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${Ue({tooltip:!0,"tooltip--open":this.open})}
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
    `}};tt.styles=[qe,zv];tt.dependencies={"sl-popup":Se};g([he("slot:not([name])")],tt.prototype,"defaultSlot",2);g([he(".tooltip__body")],tt.prototype,"body",2);g([he("sl-popup")],tt.prototype,"popup",2);g([k()],tt.prototype,"content",2);g([k()],tt.prototype,"placement",2);g([k({type:Boolean,reflect:!0})],tt.prototype,"disabled",2);g([k({type:Number})],tt.prototype,"distance",2);g([k({type:Boolean,reflect:!0})],tt.prototype,"open",2);g([k({type:Number})],tt.prototype,"skidding",2);g([k()],tt.prototype,"trigger",2);g([k({type:Boolean})],tt.prototype,"hoist",2);g([ke("open",{waitUntilFirstUpdate:!0})],tt.prototype,"handleOpenChange",1);g([ke(["content","distance","hoist","placement","skidding"])],tt.prototype,"handleOptionsChange",1);g([ke("disabled")],tt.prototype,"handleDisabledChange",1);ro("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});ro("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});var N0="sl-tooltip";tt.define("sl-tooltip");var L0=ft({tagName:N0,elementClass:tt,react:pt,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"},displayName:"SlTooltip"}),_r=L0;function M0({onUndo:r,onRedo:o,canUndo:i,canRedo:l}){return R.jsxs("div",{className:"history-controls",children:[R.jsx(_r,{content:"Undo (Ctrl+Z)",children:R.jsx(Ur,{name:"arrow-counterclockwise",label:"Undo",onClick:r,disabled:!i})}),R.jsx(_r,{content:"Redo (Ctrl+Y)",children:R.jsx(Ur,{name:"arrow-clockwise",label:"Redo",onClick:o,disabled:!l})})]})}var O0=Fe`
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
`;function*nf(r=document.activeElement){r!=null&&(yield r,"shadowRoot"in r&&r.shadowRoot&&r.shadowRoot.mode!=="closed"&&(yield*Jg(nf(r.shadowRoot.activeElement))))}function D0(){return[...nf()].pop()}var fp=new WeakMap;function of(r){let o=fp.get(r);return o||(o=window.getComputedStyle(r,null),fp.set(r,o)),o}function I0(r){if(typeof r.checkVisibility=="function")return r.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const o=of(r);return o.visibility!=="hidden"&&o.display!=="none"}function F0(r){const o=of(r),{overflowY:i,overflowX:l}=o;return i==="scroll"||l==="scroll"?!0:i!=="auto"||l!=="auto"?!1:r.scrollHeight>r.clientHeight&&i==="auto"||r.scrollWidth>r.clientWidth&&l==="auto"}function B0(r){const o=r.tagName.toLowerCase(),i=Number(r.getAttribute("tabindex"));if(r.hasAttribute("tabindex")&&(isNaN(i)||i<=-1)||r.hasAttribute("disabled")||r.closest("[inert]"))return!1;if(o==="input"&&r.getAttribute("type")==="radio"){const d=r.getRootNode(),h=`input[type='radio'][name="${r.getAttribute("name")}"]`,f=d.querySelector(`${h}:checked`);return f?f===r:d.querySelector(h)===r}return I0(r)?(o==="audio"||o==="video")&&r.hasAttribute("controls")||r.hasAttribute("tabindex")||r.hasAttribute("contenteditable")&&r.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(o)?!0:F0(r):!1}function V0(r){var o,i;const l=H0(r),u=(o=l[0])!=null?o:null,d=(i=l[l.length-1])!=null?i:null;return{start:u,end:d}}function j0(r,o){var i;return((i=r.getRootNode({composed:!0}))==null?void 0:i.host)!==o}function H0(r){const o=new WeakMap,i=[];function l(u){if(u instanceof Element){if(u.hasAttribute("inert")||u.closest("[inert]")||o.has(u))return;o.set(u,!0),!i.includes(u)&&B0(u)&&i.push(u),u instanceof HTMLSlotElement&&j0(u,r)&&u.assignedElements({flatten:!0}).forEach(d=>{l(d)}),u.shadowRoot!==null&&u.shadowRoot.mode==="open"&&l(u.shadowRoot)}for(const d of u.children)l(d)}return l(r),i.sort((u,d)=>{const h=Number(u.getAttribute("tabindex"))||0;return(Number(d.getAttribute("tabindex"))||0)-h})}var rt=class extends Oe{constructor(){super(...arguments),this.localize=new cr(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=r=>{this.open&&r.key==="Escape"&&(r.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=r=>{var o;if(r.key==="Escape"&&this.open&&!this.closeWatcher){r.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(r.key==="Tab"){if(this.open&&((o=document.activeElement)==null?void 0:o.tagName.toLowerCase())==="sl-menu-item"){r.preventDefault(),this.hide(),this.focusOnTrigger();return}const i=(l,u)=>{if(!l)return null;const d=l.closest(u);if(d)return d;const h=l.getRootNode();return h instanceof ShadowRoot?i(h.host,u):null};setTimeout(()=>{var l;const u=((l=this.containingElement)==null?void 0:l.getRootNode())instanceof ShadowRoot?D0():document.activeElement;(!this.containingElement||i(u,this.containingElement.tagName.toLowerCase())!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=r=>{const o=r.composedPath();this.containingElement&&!o.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=r=>{const o=r.target;!this.stayOpenOnSelect&&o.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const r=this.trigger.assignedElements({flatten:!0})[0];typeof r?.focus=="function"&&r.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(r=>r.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(r){if([" ","Enter"].includes(r.key)){r.preventDefault(),this.handleTriggerClick();return}const o=this.getMenu();if(o){const i=o.getAllItems(),l=i[0],u=i[i.length-1];["ArrowDown","ArrowUp","Home","End"].includes(r.key)&&(r.preventDefault(),this.open||(this.show(),await this.updateComplete),i.length>0&&this.updateComplete.then(()=>{(r.key==="ArrowDown"||r.key==="Home")&&(o.setCurrentItem(l),l.focus()),(r.key==="ArrowUp"||r.key==="End")&&(o.setCurrentItem(u),u.focus())}))}}handleTriggerKeyUp(r){r.key===" "&&r.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const o=this.trigger.assignedElements({flatten:!0}).find(l=>V0(l).start);let i;if(o){switch(o.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":i=o.button;break;default:i=o}i.setAttribute("aria-haspopup","true"),i.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,Ms(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Ms(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var r;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?((r=this.closeWatcher)==null||r.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var r;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),(r=this.closeWatcher)==null||r.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await Ds(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:r,options:o}=Xn(this,"dropdown.show",{dir:this.localize.dir()});await Os(this.popup.popup,r,o),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await Ds(this);const{keyframes:r,options:o}=Xn(this,"dropdown.hide",{dir:this.localize.dir()});await Os(this.popup.popup,r,o),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return le`
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
    `}};rt.styles=[qe,O0];rt.dependencies={"sl-popup":Se};g([he(".dropdown")],rt.prototype,"popup",2);g([he(".dropdown__trigger")],rt.prototype,"trigger",2);g([he(".dropdown__panel")],rt.prototype,"panel",2);g([k({type:Boolean,reflect:!0})],rt.prototype,"open",2);g([k({reflect:!0})],rt.prototype,"placement",2);g([k({type:Boolean,reflect:!0})],rt.prototype,"disabled",2);g([k({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],rt.prototype,"stayOpenOnSelect",2);g([k({attribute:!1})],rt.prototype,"containingElement",2);g([k({type:Number})],rt.prototype,"distance",2);g([k({type:Number})],rt.prototype,"skidding",2);g([k({type:Boolean})],rt.prototype,"hoist",2);g([k({reflect:!0})],rt.prototype,"sync",2);g([ke("open",{waitUntilFirstUpdate:!0})],rt.prototype,"handleOpenChange",1);ro("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});ro("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});var U0="sl-dropdown";rt.define("sl-dropdown");var W0=ft({tagName:U0,elementClass:rt,react:pt,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"},displayName:"SlDropdown"}),G0=W0,K0=Fe`
  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`,Ys=class extends Oe{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(r){const o=["menuitem","menuitemcheckbox"],i=r.composedPath(),l=i.find(f=>{var m;return o.includes(((m=f?.getAttribute)==null?void 0:m.call(f,"role"))||"")});if(!l||i.find(f=>{var m;return((m=f?.getAttribute)==null?void 0:m.call(f,"role"))==="menu"})!==this)return;const h=l;h.type==="checkbox"&&(h.checked=!h.checked),this.emit("sl-select",{detail:{item:h}})}handleKeyDown(r){if(r.key==="Enter"||r.key===" "){const o=this.getCurrentItem();r.preventDefault(),r.stopPropagation(),o?.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(r.key)){const o=this.getAllItems(),i=this.getCurrentItem();let l=i?o.indexOf(i):0;o.length>0&&(r.preventDefault(),r.stopPropagation(),r.key==="ArrowDown"?l++:r.key==="ArrowUp"?l--:r.key==="Home"?l=0:r.key==="End"&&(l=o.length-1),l<0&&(l=o.length-1),l>o.length-1&&(l=0),this.setCurrentItem(o[l]),o[l].focus())}}handleMouseDown(r){const o=r.target;this.isMenuItem(o)&&this.setCurrentItem(o)}handleSlotChange(){const r=this.getAllItems();r.length>0&&this.setCurrentItem(r[0])}isMenuItem(r){var o;return r.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((o=r.getAttribute("role"))!=null?o:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(r=>!(r.inert||!this.isMenuItem(r)))}getCurrentItem(){return this.getAllItems().find(r=>r.getAttribute("tabindex")==="0")}setCurrentItem(r){this.getAllItems().forEach(i=>{i.setAttribute("tabindex",i===r?"0":"-1")})}render(){return le`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};Ys.styles=[qe,K0];g([he("slot")],Ys.prototype,"defaultSlot",2);var q0="sl-menu";Ys.define("sl-menu");var Q0=ft({tagName:q0,elementClass:Ys,react:pt,events:{onSlSelect:"sl-select"},displayName:"SlMenu"}),Y0=Q0,X0=Fe`
  :host {
    --submenu-offset: -2px;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item.menu-item--loading {
    outline: none;
    cursor: wait;
  }

  .menu-item.menu-item--loading *:not(sl-spinner) {
    opacity: 0.5;
  }

  .menu-item--loading sl-spinner {
    --indicator-color: currentColor;
    --track-width: 1px;
    position: absolute;
    font-size: 0.75em;
    top: calc(50% - 0.5em);
    left: 0.65rem;
    opacity: 1;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
      var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
      var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation and z-index to submenus */
  sl-popup::part(popup) {
    box-shadow: var(--sl-shadow-large);
    z-index: var(--sl-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl sl-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }

  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;const ei=(r,o)=>{const i=r._$AN;if(i===void 0)return!1;for(const l of i)l._$AO?.(o,!1),ei(l,o);return!0},Is=r=>{let o,i;do{if((o=r._$AM)===void 0)break;i=o._$AN,i.delete(r),r=o}while(i?.size===0)},sf=r=>{for(let o;o=r._$AM;r=o){let i=o._$AN;if(i===void 0)o._$AN=i=new Set;else if(i.has(r))break;i.add(r),ey(o)}};function Z0(r){this._$AN!==void 0?(Is(this),this._$AM=r,sf(this)):this._$AM=r}function J0(r,o=!1,i=0){const l=this._$AH,u=this._$AN;if(u!==void 0&&u.size!==0)if(o)if(Array.isArray(l))for(let d=i;d<l.length;d++)ei(l[d],!1),Is(l[d]);else l!=null&&(ei(l,!1),Is(l));else ei(this,r)}const ey=r=>{r.type==wr.CHILD&&(r._$AP??=J0,r._$AQ??=Z0)};class ty extends Us{constructor(){super(...arguments),this._$AN=void 0}_$AT(o,i,l){super._$AT(o,i,l),sf(this),this.isConnected=o._$AU}_$AO(o,i=!0){o!==this.isConnected&&(this.isConnected=o,o?this.reconnected?.():this.disconnected?.()),i&&(ei(this,o),Is(this))}setValue(o){if(jp(this._$Ct))this._$Ct._$AI(o,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=o,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}const ry=()=>new ny;class ny{}const nu=new WeakMap,oy=Hs(class extends ty{render(r){return He}update(r,[o]){const i=o!==this.G;return i&&this.G!==void 0&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=o,this.ht=r.options?.host,this.rt(this.ct=r.element)),He}rt(r){if(this.isConnected||(r=void 0),typeof this.G=="function"){const o=this.ht??globalThis;let i=nu.get(o);i===void 0&&(i=new WeakMap,nu.set(o,i)),i.get(this.G)!==void 0&&this.G.call(this.ht,void 0),i.set(this.G,r),r!==void 0&&this.G.call(this.ht,r)}else this.G.value=r}get lt(){return typeof this.G=="function"?nu.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var iy=class{constructor(r,o){this.popupRef=ry(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=i=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${i.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${i.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=i=>{switch(i.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":i.target!==this.host&&(i.preventDefault(),i.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(i);break}},this.handleClick=i=>{var l;i.target===this.host?(i.preventDefault(),i.stopPropagation()):i.target instanceof Element&&(i.target.tagName==="sl-menu-item"||(l=i.target.role)!=null&&l.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=i=>{i.relatedTarget&&i.relatedTarget instanceof Element&&this.host.contains(i.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=i=>{i.stopPropagation()},this.handlePopupReposition=()=>{const i=this.host.renderRoot.querySelector("slot[name='submenu']"),l=i?.assignedElements({flatten:!0}).filter(w=>w.localName==="sl-menu")[0],u=getComputedStyle(this.host).direction==="rtl";if(!l)return;const{left:d,top:h,width:f,height:m}=l.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${u?d+f:d}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${h}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${u?d+f:d}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${h+m}px`)},(this.host=r).addController(this),this.hasSlotController=o}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(r){const o=this.host.renderRoot.querySelector("slot[name='submenu']");if(!o){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let i=null;for(const l of o.assignedElements())if(i=l.querySelectorAll("sl-menu-item, [role^='menuitem']"),i.length!==0)break;if(!(!i||i.length===0)){i[0].setAttribute("tabindex","0");for(let l=1;l!==i.length;++l)i[l].setAttribute("tabindex","-1");this.popupRef.value&&(r.preventDefault(),r.stopPropagation(),this.popupRef.value.active?i[0]instanceof HTMLElement&&i[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{i[0]instanceof HTMLElement&&i[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(r){this.popupRef.value&&this.popupRef.value.active!==r&&(this.popupRef.value.active=r,this.host.requestUpdate())}enableSubmenu(r=!0){r?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var r;if(!((r=this.host.parentElement)!=null&&r.computedStyleMap))return;const o=this.host.parentElement.computedStyleMap(),l=["padding-top","border-top-width","margin-top"].reduce((u,d)=>{var h;const f=(h=o.get(d))!=null?h:new CSSUnitValue(0,"px"),w=(f instanceof CSSUnitValue?f:new CSSUnitValue(0,"px")).to("px");return u-w.value},0);this.skidding=l}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){const r=getComputedStyle(this.host).direction==="rtl";return this.isConnected?le`
      <sl-popup
        ${oy(this.popupRef)}
        placement=${r?"left-start":"right-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
        auto-size="vertical"
        auto-size-padding="10"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `:le` <slot name="submenu" hidden></slot> `}},$t=class extends Oe{constructor(){super(...arguments),this.localize=new cr(this),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new Zn(this,"submenu"),this.submenuController=new iy(this,this.hasSlotController),this.handleHostClick=r=>{this.disabled&&(r.preventDefault(),r.stopImmediatePropagation())},this.handleMouseOver=r=>{this.focus(),r.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const r=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=r;return}r!==this.cachedTextLabel&&(this.cachedTextLabel=r,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return iv(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const r=this.localize.dir()==="rtl",o=this.submenuController.isExpanded();return le`
      <div
        id="anchor"
        part="base"
        class=${Ue({"menu-item":!0,"menu-item--rtl":r,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":o})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!o}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${r?"chevron-left":"chevron-right"} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading?le` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `:""}
      </div>
    `}};$t.styles=[qe,X0];$t.dependencies={"sl-icon":yt,"sl-popup":Se,"sl-spinner":Eu};g([he("slot:not([name])")],$t.prototype,"defaultSlot",2);g([he(".menu-item")],$t.prototype,"menuItem",2);g([k()],$t.prototype,"type",2);g([k({type:Boolean,reflect:!0})],$t.prototype,"checked",2);g([k()],$t.prototype,"value",2);g([k({type:Boolean,reflect:!0})],$t.prototype,"loading",2);g([k({type:Boolean,reflect:!0})],$t.prototype,"disabled",2);g([ke("checked")],$t.prototype,"handleCheckedChange",1);g([ke("disabled")],$t.prototype,"handleDisabledChange",1);g([ke("type")],$t.prototype,"handleTypeChange",1);var sy="sl-menu-item";$t.define("sl-menu-item");var ly=ft({tagName:sy,elementClass:$t,react:pt,events:{},displayName:"SlMenuItem"}),ay=ly;const uy=["default","cwy","radar_dbz_cwb","preci_cwb","OceanLakeLandSnow"];function cy({changeMap:r}){return R.jsxs(G0,{children:[R.jsx(Au,{slot:"trigger",caret:!0,children:"Load template"}),R.jsx(Y0,{onSlSelect:o=>r(o.detail.item.value),children:uy.map(o=>R.jsx(ay,{value:o,children:o},o))})]})}function dy({onFileImport:r,onMapChange:o}){const i=ht.useRef(null),l=u=>{u.target.files.length&&(r(u),u.target.value="")};return R.jsxs(R.Fragment,{children:[R.jsx(cy,{changeMap:o}),R.jsx(_r,{content:"Text file with one color per line: R G B (0–255)",children:R.jsxs(Au,{onClick:()=>i.current.click(),children:[R.jsx(Up,{slot:"prefix",name:"upload"}),"Import .rgb"]})}),R.jsx("input",{ref:i,className:"visually-hidden",type:"file",accept:".rgb",tabIndex:-1,onChange:l})]})}var hy=Fe`
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
`,Nu=(r="value")=>(o,i)=>{const l=o.constructor,u=l.prototype.attributeChangedCallback;l.prototype.attributeChangedCallback=function(d,h,f){var m;const w=l.getPropertyOptions(r),_=typeof w.attribute=="string"?w.attribute:r;if(d===_){const b=w.converter||qn,A=(typeof b=="function"?b:(m=b?.fromAttribute)!=null?m:qn.fromAttribute)(f,w.type);this[r]!==A&&(this[i]=A)}u.call(this,d,h,f)}},Lu=Fe`
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
`;const lf=Hs(class extends Us{constructor(r){if(super(r),r.type!==wr.PROPERTY&&r.type!==wr.ATTRIBUTE&&r.type!==wr.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!jp(r))throw Error("`live` bindings can only contain a single expression")}render(r){return r}update(r,[o]){if(o===Wt||o===He)return o;const i=r.element,l=r.name;if(r.type===wr.PROPERTY){if(o===i[l])return Wt}else if(r.type===wr.BOOLEAN_ATTRIBUTE){if(!!o===i.hasAttribute(l))return Wt}else if(r.type===wr.ATTRIBUTE&&i.getAttribute(l)===o+"")return Wt;return vv(r),o}});var ie=class extends Oe{constructor(){super(...arguments),this.formControlController=new si(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Zn(this,"help-text","label"),this.localize=new cr(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var r;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((r=this.input)==null?void 0:r.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(r){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=r,this.value=this.__dateInput.value}get valueAsNumber(){var r;return this.__numberInput.value=this.value,((r=this.input)==null?void 0:r.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(r){this.__numberInput.valueAsNumber=r,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(r){r.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(r){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(r)}handleKeyDown(r){const o=r.metaKey||r.ctrlKey||r.shiftKey||r.altKey;r.key==="Enter"&&!o&&setTimeout(()=>{!r.defaultPrevented&&!r.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(r){this.input.focus(r)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(r,o,i="none"){this.input.setSelectionRange(r,o,i)}setRangeText(r,o,i,l="preserve"){const u=o??this.input.selectionStart,d=i??this.input.selectionEnd;this.input.setRangeText(r,u,d,l),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(r){this.input.setCustomValidity(r),this.formControlController.updateValidity()}render(){const r=this.hasSlotController.test("label"),o=this.hasSlotController.test("help-text"),i=this.label?!0:!!r,l=this.helpText?!0:!!o,d=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return le`
      <div
        part="form-control"
        class=${Ue({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":i,"form-control--has-help-text":l})}
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
              .value=${lf(this.value)}
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

            ${d?le`
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
            ${this.passwordToggle&&!this.disabled?le`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?le`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:le`
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
          aria-hidden=${l?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};ie.styles=[qe,Lu,hy];ie.dependencies={"sl-icon":yt};g([he(".input__control")],ie.prototype,"input",2);g([Re()],ie.prototype,"hasFocus",2);g([k()],ie.prototype,"title",2);g([k({reflect:!0})],ie.prototype,"type",2);g([k()],ie.prototype,"name",2);g([k()],ie.prototype,"value",2);g([Nu()],ie.prototype,"defaultValue",2);g([k({reflect:!0})],ie.prototype,"size",2);g([k({type:Boolean,reflect:!0})],ie.prototype,"filled",2);g([k({type:Boolean,reflect:!0})],ie.prototype,"pill",2);g([k()],ie.prototype,"label",2);g([k({attribute:"help-text"})],ie.prototype,"helpText",2);g([k({type:Boolean})],ie.prototype,"clearable",2);g([k({type:Boolean,reflect:!0})],ie.prototype,"disabled",2);g([k()],ie.prototype,"placeholder",2);g([k({type:Boolean,reflect:!0})],ie.prototype,"readonly",2);g([k({attribute:"password-toggle",type:Boolean})],ie.prototype,"passwordToggle",2);g([k({attribute:"password-visible",type:Boolean})],ie.prototype,"passwordVisible",2);g([k({attribute:"no-spin-buttons",type:Boolean})],ie.prototype,"noSpinButtons",2);g([k({reflect:!0})],ie.prototype,"form",2);g([k({type:Boolean,reflect:!0})],ie.prototype,"required",2);g([k()],ie.prototype,"pattern",2);g([k({type:Number})],ie.prototype,"minlength",2);g([k({type:Number})],ie.prototype,"maxlength",2);g([k()],ie.prototype,"min",2);g([k()],ie.prototype,"max",2);g([k()],ie.prototype,"step",2);g([k()],ie.prototype,"autocapitalize",2);g([k()],ie.prototype,"autocorrect",2);g([k()],ie.prototype,"autocomplete",2);g([k({type:Boolean})],ie.prototype,"autofocus",2);g([k()],ie.prototype,"enterkeyhint",2);g([k({type:Boolean,converter:{fromAttribute:r=>!(!r||r==="false"),toAttribute:r=>r?"true":"false"}})],ie.prototype,"spellcheck",2);g([k()],ie.prototype,"inputmode",2);g([ke("disabled",{waitUntilFirstUpdate:!0})],ie.prototype,"handleDisabledChange",1);g([ke("step",{waitUntilFirstUpdate:!0})],ie.prototype,"handleStepChange",1);g([ke("value",{waitUntilFirstUpdate:!0})],ie.prototype,"handleValueChange",1);var py="sl-input";ie.define("sl-input");var fy=ft({tagName:py,elementClass:ie,react:pt,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlClear:"sl-clear",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlInput"}),my=fy;function gy({numColors:r,minColors:o,onNumColorsChange:i,onNumColorsBlur:l,onReset:u}){const d=Number(r)<o;return R.jsxs("div",{className:"count-control",children:[R.jsx("label",{htmlFor:"num-colors-input",children:"Output colors"}),R.jsx(my,{id:"num-colors-input",type:"number",min:o,step:1,value:String(r),onSlInput:i,onSlBlur:l,children:R.jsx(_r,{slot:"suffix",content:"Reset to number of control points",children:R.jsx(Ur,{name:"arrow-repeat",label:"Reset",onClick:u})})}),R.jsx("span",{className:d?"hint hint-warning":"hint",children:d?`Must be at least ${o}`:`min ${o}`})]})}var vy=Fe`
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
`,af=class extends Oe{render(){return le` <slot></slot> `}};af.styles=[qe,vy];function ou(r,o){function i(u){const d=r.getBoundingClientRect(),h=r.ownerDocument.defaultView,f=d.left+h.scrollX,m=d.top+h.scrollY,w=u.pageX-f,_=u.pageY-m;o?.onMove&&o.onMove(w,_)}function l(){document.removeEventListener("pointermove",i),document.removeEventListener("pointerup",l),o?.onStop&&o.onStop()}document.addEventListener("pointermove",i,{passive:!0}),document.addEventListener("pointerup",l),o?.initialEvent instanceof PointerEvent&&i(o.initialEvent)}var yy=Fe`
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
`;function Ht(r,o,i){const l=u=>Object.is(u,-0)?0:u;return r<o?l(o):r>i?l(i):l(r)}var by=Fe`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,no=class extends Oe{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(r){const o=Xo(r.target);o?.toggleAttribute("data-sl-button-group__button--focus",!0)}handleBlur(r){const o=Xo(r.target);o?.toggleAttribute("data-sl-button-group__button--focus",!1)}handleMouseOver(r){const o=Xo(r.target);o?.toggleAttribute("data-sl-button-group__button--hover",!0)}handleMouseOut(r){const o=Xo(r.target);o?.toggleAttribute("data-sl-button-group__button--hover",!1)}handleSlotChange(){const r=[...this.defaultSlot.assignedElements({flatten:!0})];r.forEach(o=>{const i=r.indexOf(o),l=Xo(o);l&&(l.toggleAttribute("data-sl-button-group__button",!0),l.toggleAttribute("data-sl-button-group__button--first",i===0),l.toggleAttribute("data-sl-button-group__button--inner",i>0&&i<r.length-1),l.toggleAttribute("data-sl-button-group__button--last",i===r.length-1),l.toggleAttribute("data-sl-button-group__button--radio",l.tagName.toLowerCase()==="sl-radio-button"))})}render(){return le`
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
    `}};no.styles=[qe,by];g([he("slot")],no.prototype,"defaultSlot",2);g([Re()],no.prototype,"disableRole",2);g([k()],no.prototype,"label",2);function Xo(r){var o;const i="sl-button, sl-radio-button";return(o=r.closest(i))!=null?o:r.querySelector(i)}const uf="important",wy=" !"+uf,jr=Hs(class extends Us{constructor(r){if(super(r),r.type!==wr.ATTRIBUTE||r.name!=="style"||r.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(r){return Object.keys(r).reduce((o,i)=>{const l=r[i];return l==null?o:o+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${l};`},"")}update(r,[o]){const{style:i}=r.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(o)),this.render(o);for(const l of this.ft)o[l]==null&&(this.ft.delete(l),l.includes("-")?i.removeProperty(l):i[l]=null);for(const l in o){const u=o[l];if(u!=null){this.ft.add(l);const d=typeof u=="string"&&u.endsWith(wy);l.includes("-")||d?i.setProperty(l,d?u.slice(0,-11):u,d?uf:""):i[l]=u}}return Wt}});function lt(r,o){_y(r)&&(r="100%");const i=xy(r);return r=o===360?r:Math.min(o,Math.max(0,parseFloat(r))),i&&(r=parseInt(String(r*o),10)/100),Math.abs(r-o)<1e-6?1:(o===360?r=(r<0?r%o+o:r%o)/parseFloat(String(o)):r=r%o/parseFloat(String(o)),r)}function ks(r){return Math.min(1,Math.max(0,r))}function _y(r){return typeof r=="string"&&r.indexOf(".")!==-1&&parseFloat(r)===1}function xy(r){return typeof r=="string"&&r.indexOf("%")!==-1}function cf(r){return r=parseFloat(r),(isNaN(r)||r<0||r>1)&&(r=1),r}function Ss(r){return Number(r)<=1?`${Number(r)*100}%`:r}function mn(r){return r.length===1?"0"+r:String(r)}function ky(r,o,i){return{r:lt(r,255)*255,g:lt(o,255)*255,b:lt(i,255)*255}}function mp(r,o,i){r=lt(r,255),o=lt(o,255),i=lt(i,255);const l=Math.max(r,o,i),u=Math.min(r,o,i);let d=0,h=0;const f=(l+u)/2;if(l===u)h=0,d=0;else{const m=l-u;switch(h=f>.5?m/(2-l-u):m/(l+u),l){case r:d=(o-i)/m+(o<i?6:0);break;case o:d=(i-r)/m+2;break;case i:d=(r-o)/m+4;break}d/=6}return{h:d,s:h,l:f}}function iu(r,o,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(o-r)*(6*i):i<1/2?o:i<2/3?r+(o-r)*(2/3-i)*6:r}function Sy(r,o,i){let l,u,d;if(r=lt(r,360),o=lt(o,100),i=lt(i,100),o===0)u=i,d=i,l=i;else{const h=i<.5?i*(1+o):i+o-i*o,f=2*i-h;l=iu(f,h,r+1/3),u=iu(f,h,r),d=iu(f,h,r-1/3)}return{r:l*255,g:u*255,b:d*255}}function gp(r,o,i){r=lt(r,255),o=lt(o,255),i=lt(i,255);const l=Math.max(r,o,i),u=Math.min(r,o,i);let d=0;const h=l,f=l-u,m=l===0?0:f/l;if(l===u)d=0;else{switch(l){case r:d=(o-i)/f+(o<i?6:0);break;case o:d=(i-r)/f+2;break;case i:d=(r-o)/f+4;break}d/=6}return{h:d,s:m,v:h}}function Cy(r,o,i){r=lt(r,360)*6,o=lt(o,100),i=lt(i,100);const l=Math.floor(r),u=r-l,d=i*(1-o),h=i*(1-u*o),f=i*(1-(1-u)*o),m=l%6,w=[i,h,d,d,f,i][m],_=[f,i,i,h,d,d][m],b=[d,d,f,i,i,h][m];return{r:w*255,g:_*255,b:b*255}}function vp(r,o,i,l){const u=[mn(Math.round(r).toString(16)),mn(Math.round(o).toString(16)),mn(Math.round(i).toString(16))];return l&&u[0].startsWith(u[0].charAt(1))&&u[1].startsWith(u[1].charAt(1))&&u[2].startsWith(u[2].charAt(1))?u[0].charAt(0)+u[1].charAt(0)+u[2].charAt(0):u.join("")}function $y(r,o,i,l,u){const d=[mn(Math.round(r).toString(16)),mn(Math.round(o).toString(16)),mn(Math.round(i).toString(16)),mn(Ay(l))];return u&&d[0].startsWith(d[0].charAt(1))&&d[1].startsWith(d[1].charAt(1))&&d[2].startsWith(d[2].charAt(1))&&d[3].startsWith(d[3].charAt(1))?d[0].charAt(0)+d[1].charAt(0)+d[2].charAt(0)+d[3].charAt(0):d.join("")}function Ey(r,o,i,l){const u=r/100,d=o/100,h=i/100,f=l/100,m=255*(1-u)*(1-f),w=255*(1-d)*(1-f),_=255*(1-h)*(1-f);return{r:m,g:w,b:_}}function yp(r,o,i){let l=1-r/255,u=1-o/255,d=1-i/255,h=Math.min(l,u,d);return h===1?(l=0,u=0,d=0):(l=(l-h)/(1-h)*100,u=(u-h)/(1-h)*100,d=(d-h)/(1-h)*100),h*=100,{c:Math.round(l),m:Math.round(u),y:Math.round(d),k:Math.round(h)}}function Ay(r){return Math.round(parseFloat(r)*255).toString(16)}function bp(r){return Lt(r)/255}function Lt(r){return parseInt(r,16)}function Ty(r){return{r:r>>16,g:(r&65280)>>8,b:r&255}}const mu={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function zy(r){let o={r:0,g:0,b:0},i=1,l=null,u=null,d=null,h=!1,f=!1;return typeof r=="string"&&(r=Ny(r)),typeof r=="object"&&(Nt(r.r)&&Nt(r.g)&&Nt(r.b)?(o=ky(r.r,r.g,r.b),h=!0,f=String(r.r).substr(-1)==="%"?"prgb":"rgb"):Nt(r.h)&&Nt(r.s)&&Nt(r.v)?(l=Ss(r.s),u=Ss(r.v),o=Cy(r.h,l,u),h=!0,f="hsv"):Nt(r.h)&&Nt(r.s)&&Nt(r.l)?(l=Ss(r.s),d=Ss(r.l),o=Sy(r.h,l,d),h=!0,f="hsl"):Nt(r.c)&&Nt(r.m)&&Nt(r.y)&&Nt(r.k)&&(o=Ey(r.c,r.m,r.y,r.k),h=!0,f="cmyk"),Object.prototype.hasOwnProperty.call(r,"a")&&(i=r.a)),i=cf(i),{ok:h,format:r.format||f,r:Math.min(255,Math.max(o.r,0)),g:Math.min(255,Math.max(o.g,0)),b:Math.min(255,Math.max(o.b,0)),a:i}}const Ry="[-\\+]?\\d+%?",Py="[-\\+]?\\d*\\.\\d+%?",Wr="(?:"+Py+")|(?:"+Ry+")",su="[\\s|\\(]+("+Wr+")[,|\\s]+("+Wr+")[,|\\s]+("+Wr+")\\s*\\)?",Cs="[\\s|\\(]+("+Wr+")[,|\\s]+("+Wr+")[,|\\s]+("+Wr+")[,|\\s]+("+Wr+")\\s*\\)?",Ut={CSS_UNIT:new RegExp(Wr),rgb:new RegExp("rgb"+su),rgba:new RegExp("rgba"+Cs),hsl:new RegExp("hsl"+su),hsla:new RegExp("hsla"+Cs),hsv:new RegExp("hsv"+su),hsva:new RegExp("hsva"+Cs),cmyk:new RegExp("cmyk"+Cs),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function Ny(r){if(r=r.trim().toLowerCase(),r.length===0)return!1;let o=!1;if(mu[r])r=mu[r],o=!0;else if(r==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let i=Ut.rgb.exec(r);return i?{r:i[1],g:i[2],b:i[3]}:(i=Ut.rgba.exec(r),i?{r:i[1],g:i[2],b:i[3],a:i[4]}:(i=Ut.hsl.exec(r),i?{h:i[1],s:i[2],l:i[3]}:(i=Ut.hsla.exec(r),i?{h:i[1],s:i[2],l:i[3],a:i[4]}:(i=Ut.hsv.exec(r),i?{h:i[1],s:i[2],v:i[3]}:(i=Ut.hsva.exec(r),i?{h:i[1],s:i[2],v:i[3],a:i[4]}:(i=Ut.cmyk.exec(r),i?{c:i[1],m:i[2],y:i[3],k:i[4]}:(i=Ut.hex8.exec(r),i?{r:Lt(i[1]),g:Lt(i[2]),b:Lt(i[3]),a:bp(i[4]),format:o?"name":"hex8"}:(i=Ut.hex6.exec(r),i?{r:Lt(i[1]),g:Lt(i[2]),b:Lt(i[3]),format:o?"name":"hex"}:(i=Ut.hex4.exec(r),i?{r:Lt(i[1]+i[1]),g:Lt(i[2]+i[2]),b:Lt(i[3]+i[3]),a:bp(i[4]+i[4]),format:o?"name":"hex8"}:(i=Ut.hex3.exec(r),i?{r:Lt(i[1]+i[1]),g:Lt(i[2]+i[2]),b:Lt(i[3]+i[3]),format:o?"name":"hex"}:!1))))))))))}function Nt(r){return typeof r=="number"?!Number.isNaN(r):Ut.CSS_UNIT.test(r)}class je{constructor(o="",i={}){if(o instanceof je)return o;typeof o=="number"&&(o=Ty(o)),this.originalInput=o;const l=zy(o);this.originalInput=o,this.r=l.r,this.g=l.g,this.b=l.b,this.a=l.a,this.roundA=Math.round(100*this.a)/100,this.format=i.format??l.format,this.gradientType=i.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=l.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){const o=this.toRgb();return(o.r*299+o.g*587+o.b*114)/1e3}getLuminance(){const o=this.toRgb();let i,l,u;const d=o.r/255,h=o.g/255,f=o.b/255;return d<=.03928?i=d/12.92:i=Math.pow((d+.055)/1.055,2.4),h<=.03928?l=h/12.92:l=Math.pow((h+.055)/1.055,2.4),f<=.03928?u=f/12.92:u=Math.pow((f+.055)/1.055,2.4),.2126*i+.7152*l+.0722*u}getAlpha(){return this.a}setAlpha(o){return this.a=cf(o),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){const{s:o}=this.toHsl();return o===0}toHsv(){const o=gp(this.r,this.g,this.b);return{h:o.h*360,s:o.s,v:o.v,a:this.a}}toHsvString(){const o=gp(this.r,this.g,this.b),i=Math.round(o.h*360),l=Math.round(o.s*100),u=Math.round(o.v*100);return this.a===1?`hsv(${i}, ${l}%, ${u}%)`:`hsva(${i}, ${l}%, ${u}%, ${this.roundA})`}toHsl(){const o=mp(this.r,this.g,this.b);return{h:o.h*360,s:o.s,l:o.l,a:this.a}}toHslString(){const o=mp(this.r,this.g,this.b),i=Math.round(o.h*360),l=Math.round(o.s*100),u=Math.round(o.l*100);return this.a===1?`hsl(${i}, ${l}%, ${u}%)`:`hsla(${i}, ${l}%, ${u}%, ${this.roundA})`}toHex(o=!1){return vp(this.r,this.g,this.b,o)}toHexString(o=!1){return"#"+this.toHex(o)}toHex8(o=!1){return $y(this.r,this.g,this.b,this.a,o)}toHex8String(o=!1){return"#"+this.toHex8(o)}toHexShortString(o=!1){return this.a===1?this.toHexString(o):this.toHex8String(o)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){const o=Math.round(this.r),i=Math.round(this.g),l=Math.round(this.b);return this.a===1?`rgb(${o}, ${i}, ${l})`:`rgba(${o}, ${i}, ${l}, ${this.roundA})`}toPercentageRgb(){const o=i=>`${Math.round(lt(i,255)*100)}%`;return{r:o(this.r),g:o(this.g),b:o(this.b),a:this.a}}toPercentageRgbString(){const o=i=>Math.round(lt(i,255)*100);return this.a===1?`rgb(${o(this.r)}%, ${o(this.g)}%, ${o(this.b)}%)`:`rgba(${o(this.r)}%, ${o(this.g)}%, ${o(this.b)}%, ${this.roundA})`}toCmyk(){return{...yp(this.r,this.g,this.b)}}toCmykString(){const{c:o,m:i,y:l,k:u}=yp(this.r,this.g,this.b);return`cmyk(${o}, ${i}, ${l}, ${u})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;const o="#"+vp(this.r,this.g,this.b,!1);for(const[i,l]of Object.entries(mu))if(o===l)return i;return!1}toString(o){const i=!!o;o=o??this.format;let l=!1;const u=this.a<1&&this.a>=0;return!i&&u&&(o.startsWith("hex")||o==="name")?o==="name"&&this.a===0?this.toName():this.toRgbString():(o==="rgb"&&(l=this.toRgbString()),o==="prgb"&&(l=this.toPercentageRgbString()),(o==="hex"||o==="hex6")&&(l=this.toHexString()),o==="hex3"&&(l=this.toHexString(!0)),o==="hex4"&&(l=this.toHex8String(!0)),o==="hex8"&&(l=this.toHex8String()),o==="name"&&(l=this.toName()),o==="hsl"&&(l=this.toHslString()),o==="hsv"&&(l=this.toHsvString()),o==="cmyk"&&(l=this.toCmykString()),l||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new je(this.toString())}lighten(o=10){const i=this.toHsl();return i.l+=o/100,i.l=ks(i.l),new je(i)}brighten(o=10){const i=this.toRgb();return i.r=Math.max(0,Math.min(255,i.r-Math.round(255*-(o/100)))),i.g=Math.max(0,Math.min(255,i.g-Math.round(255*-(o/100)))),i.b=Math.max(0,Math.min(255,i.b-Math.round(255*-(o/100)))),new je(i)}darken(o=10){const i=this.toHsl();return i.l-=o/100,i.l=ks(i.l),new je(i)}tint(o=10){return this.mix("white",o)}shade(o=10){return this.mix("black",o)}desaturate(o=10){const i=this.toHsl();return i.s-=o/100,i.s=ks(i.s),new je(i)}saturate(o=10){const i=this.toHsl();return i.s+=o/100,i.s=ks(i.s),new je(i)}greyscale(){return this.desaturate(100)}spin(o){const i=this.toHsl(),l=(i.h+o)%360;return i.h=l<0?360+l:l,new je(i)}mix(o,i=50){const l=this.toRgb(),u=new je(o).toRgb(),d=i/100,h={r:(u.r-l.r)*d+l.r,g:(u.g-l.g)*d+l.g,b:(u.b-l.b)*d+l.b,a:(u.a-l.a)*d+l.a};return new je(h)}analogous(o=6,i=30){const l=this.toHsl(),u=360/i,d=[this];for(l.h=(l.h-(u*o>>1)+720)%360;--o;)l.h=(l.h+u)%360,d.push(new je(l));return d}complement(){const o=this.toHsl();return o.h=(o.h+180)%360,new je(o)}monochromatic(o=6){const i=this.toHsv(),{h:l}=i,{s:u}=i;let{v:d}=i;const h=[],f=1/o;for(;o--;)h.push(new je({h:l,s:u,v:d})),d=(d+f)%1;return h}splitcomplement(){const o=this.toHsl(),{h:i}=o;return[this,new je({h:(i+72)%360,s:o.s,l:o.l}),new je({h:(i+216)%360,s:o.s,l:o.l})]}onBackground(o){const i=this.toRgb(),l=new je(o).toRgb(),u=i.a+l.a*(1-i.a);return new je({r:(i.r*i.a+l.r*l.a*(1-i.a))/u,g:(i.g*i.a+l.g*l.a*(1-i.a))/u,b:(i.b*i.a+l.b*l.a*(1-i.a))/u,a:u})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(o){const i=this.toHsl(),{h:l}=i,u=[this],d=360/o;for(let h=1;h<o;h++)u.push(new je({h:(l+h*d)%360,s:i.s,l:i.l}));return u}equals(o){const i=new je(o);return this.format==="cmyk"||i.format==="cmyk"?this.toCmykString()===i.toCmykString():this.toRgbString()===i.toRgbString()}}var wp="EyeDropper"in window,de=class extends Oe{constructor(){super(),this.formControlController=new si(this),this.isSafeValue=!1,this.localize=new cr(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.handleFocusOut=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.input.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")})}handleFormatToggle(){const r=["hex","rgb","hsl","hsv"],o=(r.indexOf(this.format)+1)%r.length;this.format=r[o],this.setColor(this.value),this.emit("sl-change"),this.emit("sl-input")}handleAlphaDrag(r){const o=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),i=o.querySelector(".color-picker__slider-handle"),{width:l}=o.getBoundingClientRect();let u=this.value,d=this.value;i.focus(),r.preventDefault(),ou(o,{onMove:h=>{this.alpha=Ht(h/l*100,0,100),this.syncValues(),this.value!==d&&(d=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==u&&(u=this.value,this.emit("sl-change"))},initialEvent:r})}handleHueDrag(r){const o=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),i=o.querySelector(".color-picker__slider-handle"),{width:l}=o.getBoundingClientRect();let u=this.value,d=this.value;i.focus(),r.preventDefault(),ou(o,{onMove:h=>{this.hue=Ht(h/l*360,0,360),this.syncValues(),this.value!==d&&(d=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==u&&(u=this.value,this.emit("sl-change"))},initialEvent:r})}handleGridDrag(r){const o=this.shadowRoot.querySelector(".color-picker__grid"),i=o.querySelector(".color-picker__grid-handle"),{width:l,height:u}=o.getBoundingClientRect();let d=this.value,h=this.value;i.focus(),r.preventDefault(),this.isDraggingGridHandle=!0,ou(o,{onMove:(f,m)=>{this.saturation=Ht(f/l*100,0,100),this.brightness=Ht(100-m/u*100,0,100),this.syncValues(),this.value!==h&&(h=this.value,this.emit("sl-input"))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==d&&(d=this.value,this.emit("sl-change"))},initialEvent:r})}handleAlphaKeyDown(r){const o=r.shiftKey?10:1,i=this.value;r.key==="ArrowLeft"&&(r.preventDefault(),this.alpha=Ht(this.alpha-o,0,100),this.syncValues()),r.key==="ArrowRight"&&(r.preventDefault(),this.alpha=Ht(this.alpha+o,0,100),this.syncValues()),r.key==="Home"&&(r.preventDefault(),this.alpha=0,this.syncValues()),r.key==="End"&&(r.preventDefault(),this.alpha=100,this.syncValues()),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleHueKeyDown(r){const o=r.shiftKey?10:1,i=this.value;r.key==="ArrowLeft"&&(r.preventDefault(),this.hue=Ht(this.hue-o,0,360),this.syncValues()),r.key==="ArrowRight"&&(r.preventDefault(),this.hue=Ht(this.hue+o,0,360),this.syncValues()),r.key==="Home"&&(r.preventDefault(),this.hue=0,this.syncValues()),r.key==="End"&&(r.preventDefault(),this.hue=360,this.syncValues()),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleGridKeyDown(r){const o=r.shiftKey?10:1,i=this.value;r.key==="ArrowLeft"&&(r.preventDefault(),this.saturation=Ht(this.saturation-o,0,100),this.syncValues()),r.key==="ArrowRight"&&(r.preventDefault(),this.saturation=Ht(this.saturation+o,0,100),this.syncValues()),r.key==="ArrowUp"&&(r.preventDefault(),this.brightness=Ht(this.brightness+o,0,100),this.syncValues()),r.key==="ArrowDown"&&(r.preventDefault(),this.brightness=Ht(this.brightness-o,0,100),this.syncValues()),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputChange(r){const o=r.target,i=this.value;r.stopPropagation(),this.input.value?(this.setColor(o.value),o.value=this.value):this.value="",this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputInput(r){this.formControlController.updateValidity(),r.stopPropagation()}handleInputKeyDown(r){if(r.key==="Enter"){const o=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==o&&(this.emit("sl-change"),this.emit("sl-input")),setTimeout(()=>this.input.select())):this.hue=0}}handleInputInvalid(r){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(r)}handleTouchMove(r){r.preventDefault()}parseColor(r){const o=new je(r);if(!o.isValid)return null;const i=o.toHsl(),l={h:i.h,s:i.s*100,l:i.l*100,a:i.a},u=o.toRgb(),d=o.toHexString(),h=o.toHex8String(),f=o.toHsv(),m={h:f.h,s:f.s*100,v:f.v*100,a:f.a};return{hsl:{h:l.h,s:l.s,l:l.l,string:this.setLetterCase(`hsl(${Math.round(l.h)}, ${Math.round(l.s)}%, ${Math.round(l.l)}%)`)},hsla:{h:l.h,s:l.s,l:l.l,a:l.a,string:this.setLetterCase(`hsla(${Math.round(l.h)}, ${Math.round(l.s)}%, ${Math.round(l.l)}%, ${l.a.toFixed(2).toString()})`)},hsv:{h:m.h,s:m.s,v:m.v,string:this.setLetterCase(`hsv(${Math.round(m.h)}, ${Math.round(m.s)}%, ${Math.round(m.v)}%)`)},hsva:{h:m.h,s:m.s,v:m.v,a:m.a,string:this.setLetterCase(`hsva(${Math.round(m.h)}, ${Math.round(m.s)}%, ${Math.round(m.v)}%, ${m.a.toFixed(2).toString()})`)},rgb:{r:u.r,g:u.g,b:u.b,string:this.setLetterCase(`rgb(${Math.round(u.r)}, ${Math.round(u.g)}, ${Math.round(u.b)})`)},rgba:{r:u.r,g:u.g,b:u.b,a:u.a,string:this.setLetterCase(`rgba(${Math.round(u.r)}, ${Math.round(u.g)}, ${Math.round(u.b)}, ${u.a.toFixed(2).toString()})`)},hex:this.setLetterCase(d),hexa:this.setLetterCase(h)}}setColor(r){const o=this.parseColor(r);return o===null?!1:(this.hue=o.hsva.h,this.saturation=o.hsva.s,this.brightness=o.hsva.v,this.alpha=this.opacity?o.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(r){return typeof r!="string"?"":this.uppercase?r.toUpperCase():r.toLowerCase()}async syncValues(){const r=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);r!==null&&(this.format==="hsl"?this.inputValue=this.opacity?r.hsla.string:r.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?r.rgba.string:r.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?r.hsva.string:r.hsv.string:this.inputValue=this.opacity?r.hexa:r.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){if(!wp)return;new EyeDropper().open().then(o=>{const i=this.value;this.setColor(o.sRGBHex),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}).catch(()=>{})}selectSwatch(r){const o=this.value;this.disabled||(this.setColor(r),this.value!==o&&(this.emit("sl-change"),this.emit("sl-input")))}getHexString(r,o,i,l=100){const u=new je(`hsva(${r}, ${o}%, ${i}%, ${l/100})`);return u.isValid?u.toHex8String():""}stopNestedEventPropagation(r){r.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(r,o){if(this.isEmpty=!o,o||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){const i=this.parseColor(o);i!==null?(this.inputValue=this.value,this.hue=i.hsva.h,this.saturation=i.hsva.s,this.brightness=i.hsva.v,this.alpha=i.hsva.a*100,this.syncValues()):this.inputValue=r??""}}focus(r){this.inline?this.base.focus(r):this.trigger.focus(r)}blur(){var r;const o=this.inline?this.base:this.trigger;this.hasFocus&&(o.focus({preventScroll:!0}),o.blur()),(r=this.dropdown)!=null&&r.open&&this.dropdown.hide()}getFormattedValue(r="hex"){const o=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(o===null)return"";switch(r){case"hex":return o.hex;case"hexa":return o.hexa;case"rgb":return o.rgb.string;case"rgba":return o.rgba.string;case"hsl":return o.hsl.string;case"hsla":return o.hsla.string;case"hsv":return o.hsv.string;case"hsva":return o.hsva.string;default:return""}}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.inline&&!this.validity.valid?(this.dropdown.show(),this.addEventListener("sl-after-show",()=>this.input.reportValidity(),{once:!0}),this.disabled||this.formControlController.emitInvalidEvent(),!1):this.input.reportValidity()}setCustomValidity(r){this.input.setCustomValidity(r),this.formControlController.updateValidity()}render(){const r=this.saturation,o=100-this.brightness,i=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(u=>u.trim()!==""),l=le`
      <div
        part="base"
        class=${Ue({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled,"color-picker--focused":this.hasFocus})}
        aria-disabled=${this.disabled?"true":"false"}
        aria-labelledby="label"
        tabindex=${this.inline?"0":"-1"}
      >
        ${this.inline?le`
              <sl-visually-hidden id="label">
                <slot name="label">${this.label}</slot>
              </sl-visually-hidden>
            `:null}

        <div
          part="grid"
          class="color-picker__grid"
          style=${jr({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${Ue({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${jr({top:`${o}%`,left:`${r}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
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
                style=${jr({left:`${this.hue===0?0:100/(360/this.hue)}%`})}
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

            ${this.opacity?le`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${jr({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="color-picker__slider-handle"
                      style=${jr({left:`${this.alpha}%`})}
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
            style=${jr({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
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
            ${this.noFormatToggle?"":le`
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
            ${wp?le`
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

        ${i.length>0?le`
              <div part="swatches" class="color-picker__swatches">
                ${i.map(u=>{const d=this.parseColor(u);return d?le`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${Z(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${u}
                      @click=${()=>this.selectSwatch(u)}
                      @keydown=${h=>!this.disabled&&h.key==="Enter"&&this.setColor(d.hexa)}
                    >
                      <div
                        class="color-picker__swatch-color"
                        style=${jr({backgroundColor:d.hexa})}
                      ></div>
                    </div>
                  `:(console.error(`Unable to parse swatch color: "${u}"`,this),"")})}
              </div>
            `:""}
      </div>
    `;return this.inline?l:le`
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
          class=${Ue({"color-dropdown__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":this.size==="small","color-dropdown__trigger--medium":this.size==="medium","color-dropdown__trigger--large":this.size==="large","color-dropdown__trigger--empty":this.isEmpty,"color-dropdown__trigger--focused":this.hasFocus,"color-picker__transparent-bg":!0})}
          style=${jr({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${l}
      </sl-dropdown>
    `}};de.styles=[qe,yy];de.dependencies={"sl-button-group":no,"sl-button":be,"sl-dropdown":rt,"sl-icon":yt,"sl-input":ie,"sl-visually-hidden":af};g([he('[part~="base"]')],de.prototype,"base",2);g([he('[part~="input"]')],de.prototype,"input",2);g([he(".color-dropdown")],de.prototype,"dropdown",2);g([he('[part~="preview"]')],de.prototype,"previewButton",2);g([he('[part~="trigger"]')],de.prototype,"trigger",2);g([Re()],de.prototype,"hasFocus",2);g([Re()],de.prototype,"isDraggingGridHandle",2);g([Re()],de.prototype,"isEmpty",2);g([Re()],de.prototype,"inputValue",2);g([Re()],de.prototype,"hue",2);g([Re()],de.prototype,"saturation",2);g([Re()],de.prototype,"brightness",2);g([Re()],de.prototype,"alpha",2);g([k()],de.prototype,"value",2);g([Nu()],de.prototype,"defaultValue",2);g([k()],de.prototype,"label",2);g([k()],de.prototype,"format",2);g([k({type:Boolean,reflect:!0})],de.prototype,"inline",2);g([k({reflect:!0})],de.prototype,"size",2);g([k({attribute:"no-format-toggle",type:Boolean})],de.prototype,"noFormatToggle",2);g([k()],de.prototype,"name",2);g([k({type:Boolean,reflect:!0})],de.prototype,"disabled",2);g([k({type:Boolean})],de.prototype,"hoist",2);g([k({type:Boolean})],de.prototype,"opacity",2);g([k({type:Boolean})],de.prototype,"uppercase",2);g([k()],de.prototype,"swatches",2);g([k({reflect:!0})],de.prototype,"form",2);g([k({type:Boolean,reflect:!0})],de.prototype,"required",2);g([Bp({passive:!1})],de.prototype,"handleTouchMove",1);g([ke("format",{waitUntilFirstUpdate:!0})],de.prototype,"handleFormatChange",1);g([ke("opacity",{waitUntilFirstUpdate:!0})],de.prototype,"handleOpacityChange",1);g([ke("value")],de.prototype,"handleValueChange",1);var Ly="sl-color-picker";de.define("sl-color-picker");var My=ft({tagName:Ly,elementClass:de,react:pt,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlColorPicker"}),Oy=My;function Dy({rgb:r,rank:o,colorId:i,numColors:l,onSetBlankColor:u,onSwapUp:d,onSwapDown:h,onColorChange:f,onAddColorDown:m,onDeleteColor:w,onBlur:_}){const b=i===0,T=i===l-1,A=r==="",z=A?"":`rgb(${r[0]},${r[1]},${r[2]})`;return R.jsxs("div",{className:A?"color-row is-blank":"color-row",children:[R.jsxs("span",{className:"rank",children:[o,"."]}),R.jsx(Oy,{size:"small",label:`color ${o}`,value:z,onSlInput:I=>f(I,i),onSlBlur:_}),R.jsx("span",{className:"auto-tag",children:A?"auto":""}),R.jsx(_r,{content:"Clear (interpolate automatically)",children:R.jsx(Ur,{name:"eraser",label:"Clear color",onClick:()=>u(i),disabled:A||b||T})}),R.jsx(_r,{content:"Move up",children:R.jsx(Ur,{name:"arrow-up",label:"Move up",onClick:()=>d(i),disabled:b})}),R.jsx(_r,{content:"Move down",children:R.jsx(Ur,{name:"arrow-down",label:"Move down",onClick:()=>h(i),disabled:T})}),R.jsx(_r,{content:"Insert color below",children:R.jsx(Ur,{name:"plus-lg",label:"Insert color below",onClick:()=>m(i)})}),R.jsx(_r,{content:"Delete",children:R.jsx(Ur,{name:"trash",label:"Delete color",onClick:()=>w(i),disabled:l<=2})})]})}function Iy({colormap:r,onSetBlankColor:o,onSwapUp:i,onSwapDown:l,onColorChange:u,onAddColorDown:d,onDeleteColor:h,onColorPickerBlur:f}){return R.jsx(R.Fragment,{children:r.map((m,w)=>R.jsx(Dy,{rgb:m,rank:w+1,colorId:w,numColors:r.length,onSetBlankColor:o,onSwapUp:i,onSwapDown:l,onColorChange:u,onAddColorDown:d,onDeleteColor:h,onBlur:f},w))})}var Fy=Fe`
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
`,me=class extends Oe{constructor(){super(...arguments),this.formControlController=new si(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Zn(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){var r;super.disconnectedCallback(),this.input&&((r=this.resizeObserver)==null||r.unobserve(this.input))}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(r){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(r)}setTextareaHeight(){this.resize==="auto"?(this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=""}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(r){this.input.focus(r)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(r){if(r){typeof r.top=="number"&&(this.input.scrollTop=r.top),typeof r.left=="number"&&(this.input.scrollLeft=r.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(r,o,i="none"){this.input.setSelectionRange(r,o,i)}setRangeText(r,o,i,l="preserve"){const u=o??this.input.selectionStart,d=i??this.input.selectionEnd;this.input.setRangeText(r,u,d,l),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(r){this.input.setCustomValidity(r),this.formControlController.updateValidity()}render(){const r=this.hasSlotController.test("label"),o=this.hasSlotController.test("help-text"),i=this.label?!0:!!r,l=this.helpText?!0:!!o;return le`
      <div
        part="form-control"
        class=${Ue({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":i,"form-control--has-help-text":l})}
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
            class=${Ue({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${Z(this.name)}
              .value=${lf(this.value)}
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
          aria-hidden=${l?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};me.styles=[qe,Lu,Fy];g([he(".textarea__control")],me.prototype,"input",2);g([he(".textarea__size-adjuster")],me.prototype,"sizeAdjuster",2);g([Re()],me.prototype,"hasFocus",2);g([k()],me.prototype,"title",2);g([k()],me.prototype,"name",2);g([k()],me.prototype,"value",2);g([k({reflect:!0})],me.prototype,"size",2);g([k({type:Boolean,reflect:!0})],me.prototype,"filled",2);g([k()],me.prototype,"label",2);g([k({attribute:"help-text"})],me.prototype,"helpText",2);g([k()],me.prototype,"placeholder",2);g([k({type:Number})],me.prototype,"rows",2);g([k()],me.prototype,"resize",2);g([k({type:Boolean,reflect:!0})],me.prototype,"disabled",2);g([k({type:Boolean,reflect:!0})],me.prototype,"readonly",2);g([k({reflect:!0})],me.prototype,"form",2);g([k({type:Boolean,reflect:!0})],me.prototype,"required",2);g([k({type:Number})],me.prototype,"minlength",2);g([k({type:Number})],me.prototype,"maxlength",2);g([k()],me.prototype,"autocapitalize",2);g([k()],me.prototype,"autocorrect",2);g([k()],me.prototype,"autocomplete",2);g([k({type:Boolean})],me.prototype,"autofocus",2);g([k()],me.prototype,"enterkeyhint",2);g([k({type:Boolean,converter:{fromAttribute:r=>!(!r||r==="false"),toAttribute:r=>r?"true":"false"}})],me.prototype,"spellcheck",2);g([k()],me.prototype,"inputmode",2);g([Nu()],me.prototype,"defaultValue",2);g([ke("disabled",{waitUntilFirstUpdate:!0})],me.prototype,"handleDisabledChange",1);g([ke("rows",{waitUntilFirstUpdate:!0})],me.prototype,"handleRowsChange",1);g([ke("value",{waitUntilFirstUpdate:!0})],me.prototype,"handleValueChange",1);var By="sl-textarea";me.define("sl-textarea");var Vy=ft({tagName:By,elementClass:me,react:pt,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlTextarea"}),Mu=Vy,df=Object.defineProperty,_p=Object.getOwnPropertySymbols,jy=Object.prototype.hasOwnProperty,Hy=Object.prototype.propertyIsEnumerable,xp=(r,o,i)=>o in r?df(r,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[o]=i,Uy=(r,o)=>{for(var i in o||(o={}))jy.call(o,i)&&xp(r,i,o[i]);if(_p)for(var i of _p(o))Hy.call(o,i)&&xp(r,i,o[i]);return r},Et=(r,o,i,l)=>{for(var u=void 0,d=r.length-1,h;d>=0;d--)(h=r[d])&&(u=h(o,i,u)||u);return u&&df(o,i,u),u},ai=class extends Gn{constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([r,o])=>{this.constructor.define(r,o)})}emit(r,o){const i=new CustomEvent(r,Uy({bubbles:!0,cancelable:!1,composed:!0,detail:{}},o));return this.dispatchEvent(i),i}static define(r,o=this,i={}){const l=customElements.get(r);if(!l){customElements.define(r,class extends o{},i);return}let u=" (unknown version)",d=u;"version"in o&&o.version&&(u=" v"+o.version),"version"in l&&l.version&&(d=" v"+l.version),!(u&&d&&u===d)&&console.warn(`Attempted to register <${r}>${u}, but <${r}>${d} has already been registered.`)}};ai.version="2.8.0";ai.dependencies={};Et([k()],ai.prototype,"dir");Et([k()],ai.prototype,"lang");var Wy=Fe`
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
`;zs("https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.1/cdn/");var bt=class extends ai{constructor(){super(...arguments),this.localize=new Op(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.hoist=!1,this.hasFocus=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}click(){this.button.click()}focus(r){this.button.focus(r)}blur(){this.button.blur()}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let r=this.value;if(this.from){const o=this.getRootNode(),i=this.from.includes("."),l=this.from.includes("[")&&this.from.includes("]");let u=this.from,d="";i?[u,d]=this.from.trim().split("."):l&&([u,d]=this.from.trim().replace(/\]$/,"").split("["));const h="getElementById"in o?o.getElementById(u):null;h?l?r=h.getAttribute(d)||"":i?r=h[d]||"":r=h.textContent||"":(this.showStatus("error"),this.emit("sl-error"))}if(!r)this.showStatus("error"),this.emit("sl-error");else try{await navigator.clipboard.writeText(r),this.showStatus("success"),this.emit("sl-copy",{detail:{value:r}})}catch{this.showStatus("error"),this.emit("sl-error")}}async showStatus(r){const o=r==="success"?this.successIcon:this.errorIcon,i=Xn(this,"copy.in",{dir:"ltr"}),l=Xn(this,"copy.out",{dir:"ltr"});await this.copyIcon.animate(l.keyframes,l.options).finished,this.copyIcon.hidden=!0,this.status=r,o.hidden=!1,await o.animate(i.keyframes,i.options).finished,setTimeout(async()=>{await o.animate(l.keyframes,l.options).finished,o.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await this.copyIcon.animate(i.keyframes,i.options).finished,this.isCopying=!1},this.feedbackDuration)}render(){return le`
        <button
        class=${Ue({"copy-button":!0,"copy-button--success":this.status==="success","copy-button--error":this.status==="error","copy-button__button":!0,"icon-button--focused":this.hasFocus})}
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
      `}};bt.styles=Wy;Et([he(".copy-button")],bt.prototype,"button");Et([Re()],bt.prototype,"hasFocus");Et([he('slot[name="copy-icon"]')],bt.prototype,"copyIcon");Et([he('slot[name="success-icon"]')],bt.prototype,"successIcon");Et([he('slot[name="error-icon"]')],bt.prototype,"errorIcon");Et([Re()],bt.prototype,"isCopying");Et([Re()],bt.prototype,"status");Et([k()],bt.prototype,"value");Et([k()],bt.prototype,"from");Et([k({type:Boolean,reflect:!0})],bt.prototype,"disabled");Et([k({attribute:"feedback-duration",type:Number})],bt.prototype,"feedbackDuration");Et([k({type:Boolean})],bt.prototype,"hoist");ro("copy.in",{keyframes:[{scale:".25",opacity:".25"},{scale:"1",opacity:"1"}],options:{duration:100}});ro("copy.out",{keyframes:[{scale:"1",opacity:"1"},{scale:".25",opacity:"0"}],options:{duration:100}});var Gy="sl-copy-button-adjust";bt.define("sl-copy-button-adjust");var Ky=ft({tagName:Gy,elementClass:bt,react:pt,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus",onSlCopy:"sl-copy",onSlError:"sl-error"},displayName:"SlCopyButtonAdjust"}),hf=Ky;zs("https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.1/cdn/");function qy({colorOutRgb:r}){const o=Qy(r);return R.jsxs(R.Fragment,{children:[R.jsxs("div",{className:"code-header",children:[R.jsxs("span",{className:"hint",children:["Matplotlib ",R.jsx("code",{children:"LinearSegmentedColormap"})]}),R.jsx(hf,{value:o})]}),R.jsx(Mu,{className:"code-area",value:o,rows:15,readOnly:!0})]})}function Qy(r){let o="";return o+=`def manual_cmap():
`,o+=`    import numpy as np
`,o+=`    from matplotlib.colors import LinearSegmentedColormap
`,o+=`    colors = [
`,r.map(i=>{o+="        ["+i[0]+","+i[1]+","+i[2]+`],
`}),o+=`    ]
`,o+=`    return LinearSegmentedColormap.from_list("manual_cmap",np.array(colors)/255)
`,o+="# cmap = manual_cmap()",o}var Yy=Fe`
  :host {
    display: block;
  }

  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .form-control__label {
    padding: 0;
  }

  .radio-group--required .radio-group__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`,nt=class extends Oe{constructor(){super(...arguments),this.formControlController=new si(this),this.hasSlotController=new Zn(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){const r=this.required&&!this.value;return this.customValidityMessage!==""?ov:r?nv:js}get validationMessage(){const r=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:r?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(r){const o=r.target.closest("sl-radio, sl-radio-button"),i=this.getAllRadios(),l=this.value;!o||o.disabled||(this.value=o.value,i.forEach(u=>u.checked=u===o),this.value!==l&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(r){var o;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(r.key))return;const i=this.getAllRadios().filter(f=>!f.disabled),l=(o=i.find(f=>f.checked))!=null?o:i[0],u=r.key===" "?0:["ArrowUp","ArrowLeft"].includes(r.key)?-1:1,d=this.value;let h=i.indexOf(l)+u;h<0&&(h=i.length-1),h>i.length-1&&(h=0),this.getAllRadios().forEach(f=>{f.checked=!1,this.hasButtonGroup||f.setAttribute("tabindex","-1")}),this.value=i[h].value,i[h].checked=!0,this.hasButtonGroup?i[h].shadowRoot.querySelector("button").focus():(i[h].setAttribute("tabindex","0"),i[h].focus()),this.value!==d&&(this.emit("sl-change"),this.emit("sl-input")),r.preventDefault()}handleLabelClick(){this.focus()}handleInvalid(r){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(r)}async syncRadioElements(){var r,o;const i=this.getAllRadios();if(await Promise.all(i.map(async l=>{await l.updateComplete,l.checked=l.value===this.value,l.size=this.size})),this.hasButtonGroup=i.some(l=>l.tagName.toLowerCase()==="sl-radio-button"),i.length>0&&!i.some(l=>l.checked))if(this.hasButtonGroup){const l=(r=i[0].shadowRoot)==null?void 0:r.querySelector("button");l&&l.setAttribute("tabindex","0")}else i[0].setAttribute("tabindex","0");if(this.hasButtonGroup){const l=(o=this.shadowRoot)==null?void 0:o.querySelector("sl-button-group");l&&(l.disableRole=!0)}}syncRadios(){if(customElements.get("sl-radio")&&customElements.get("sl-radio-button")){this.syncRadioElements();return}customElements.get("sl-radio")?this.syncRadioElements():customElements.whenDefined("sl-radio").then(()=>this.syncRadios()),customElements.get("sl-radio-button")?this.syncRadioElements():customElements.whenDefined("sl-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(o=>o.checked=o.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const r=this.required&&!this.value,o=this.customValidityMessage!=="";return r||o?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){const r=this.validity.valid;return this.errorMessage=this.customValidityMessage||r?"":this.validationInput.validationMessage,this.formControlController.setValidity(r),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),r||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),r}setCustomValidity(r=""){this.customValidityMessage=r,this.errorMessage=r,this.validationInput.setCustomValidity(r),this.formControlController.updateValidity()}focus(r){const o=this.getAllRadios(),i=o.find(d=>d.checked),l=o.find(d=>!d.disabled),u=i||l;u&&u.focus(r)}render(){const r=this.hasSlotController.test("label"),o=this.hasSlotController.test("help-text"),i=this.label?!0:!!r,l=this.helpText?!0:!!o,u=le`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return le`
      <fieldset
        part="form-control"
        class=${Ue({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--radio-group":!0,"form-control--has-label":i,"form-control--has-help-text":l})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${i?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div class="visually-hidden">
            <div id="error-message" aria-live="assertive">${this.errorMessage}</div>
            <label class="radio-group__validation">
              <input
                type="text"
                class="radio-group__validation-input"
                ?required=${this.required}
                tabindex="-1"
                hidden
                @invalid=${this.handleInvalid}
              />
            </label>
          </div>

          ${this.hasButtonGroup?le`
                <sl-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${u}
                </sl-button-group>
              `:u}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${l?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `}};nt.styles=[qe,Lu,Yy];nt.dependencies={"sl-button-group":no};g([he("slot:not([name])")],nt.prototype,"defaultSlot",2);g([he(".radio-group__validation-input")],nt.prototype,"validationInput",2);g([Re()],nt.prototype,"hasButtonGroup",2);g([Re()],nt.prototype,"errorMessage",2);g([Re()],nt.prototype,"defaultValue",2);g([k()],nt.prototype,"label",2);g([k({attribute:"help-text"})],nt.prototype,"helpText",2);g([k()],nt.prototype,"name",2);g([k({reflect:!0})],nt.prototype,"value",2);g([k({reflect:!0})],nt.prototype,"size",2);g([k({reflect:!0})],nt.prototype,"form",2);g([k({type:Boolean,reflect:!0})],nt.prototype,"required",2);g([ke("size",{waitUntilFirstUpdate:!0})],nt.prototype,"handleSizeChange",1);g([ke("value")],nt.prototype,"handleValueChange",1);var Xy="sl-radio-group";nt.define("sl-radio-group");var Zy=ft({tagName:Xy,elementClass:nt,react:pt,events:{onSlChange:"sl-change",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlRadioGroup"}),gu=Zy,Jy=Fe`
  ${Vp}

  .button__prefix,
  .button__suffix,
  .button__label {
    display: inline-flex;
    position: relative;
    align-items: center;
  }

  /* We use a hidden input so constraint validation errors work, since they don't appear to show when used with buttons.
    We can't actually hide it, though, otherwise the messages will be suppressed by the browser. */
  .hidden-input {
    all: unset;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: dotted 1px red;
    opacity: 0;
    z-index: -1;
  }
`,Gt=class extends Oe{constructor(){super(...arguments),this.hasSlotController=new Zn(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(r){if(this.disabled){r.preventDefault(),r.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(r){this.input.focus(r)}blur(){this.input.blur()}render(){return Jo`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?" button--checked":""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${Ue({button:!0,"button--default":!0,"button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${Z(this.value)}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}};Gt.styles=[qe,Jy];g([he(".button")],Gt.prototype,"input",2);g([he(".hidden-input")],Gt.prototype,"hiddenInput",2);g([Re()],Gt.prototype,"hasFocus",2);g([k({type:Boolean,reflect:!0})],Gt.prototype,"checked",2);g([k()],Gt.prototype,"value",2);g([k({type:Boolean,reflect:!0})],Gt.prototype,"disabled",2);g([k({reflect:!0})],Gt.prototype,"size",2);g([k({type:Boolean,reflect:!0})],Gt.prototype,"pill",2);g([ke("disabled",{waitUntilFirstUpdate:!0})],Gt.prototype,"handleDisabledChange",1);var eb="sl-radio-button";Gt.define("sl-radio-button");var tb=ft({tagName:eb,elementClass:Gt,react:pt,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus"},displayName:"SlRadioButton"}),pn=tb;const rb={comma:",",tab:"	",space:" "};function nb({colorOutRgb:r}){const[o,i]=ht.useState("RGB"),[l,u]=ht.useState("comma"),d=rb[l],h=r.map(f=>o==="Hex"?ob(f):f.join(d)).join(`
`)+`
`;return R.jsxs(R.Fragment,{children:[R.jsxs("div",{className:"code-header",children:[R.jsxs("div",{className:"format-row",children:[R.jsxs(gu,{size:"small",label:"Type",value:o,onSlChange:f=>i(f.target.value),children:[R.jsx(pn,{value:"RGB",children:"RGB"}),R.jsx(pn,{value:"Hex",children:"Hex"})]}),o==="RGB"&&R.jsxs(gu,{size:"small",label:"Separator",value:l,onSlChange:f=>u(f.target.value),children:[R.jsx(pn,{value:"comma",children:","}),R.jsx(pn,{value:"tab",children:"tab"}),R.jsx(pn,{value:"space",children:"space"})]})]}),R.jsx(hf,{value:h})]}),R.jsx(Mu,{className:"code-area",value:h,rows:Math.min(r.length+1,20),readOnly:!0})]})}function ob(r){return"#"+r.map(o=>(+o).toString(16).padStart(2,"0")).join("")}var ib=Fe`
  :host {
    --indicator-color: var(--sl-color-primary-600);
    --track-color: var(--sl-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group__indicator {
    position: absolute;
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
  }

  .tab-group--has-scroll-controls .tab-group__scroll-button--start--hidden,
  .tab-group--has-scroll-controls .tab-group__scroll-button--end--hidden {
    visibility: hidden;
  }

  .tab-group__body {
    display: block;
    overflow: auto;
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    left: auto;
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    left: 0;
    right: auto;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--track-width) var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * var(--track-width));
    border-top: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--track-width) var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }
`,sb=Fe`
  :host {
    display: contents;
  }
`,Xs=class extends Oe{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(r=>{this.emit("sl-resize",{detail:{entries:r}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const r=this.shadowRoot.querySelector("slot");if(r!==null){const o=r.assignedElements({flatten:!0});this.observedElements.forEach(i=>this.resizeObserver.unobserve(i)),this.observedElements=[],o.forEach(i=>{this.resizeObserver.observe(i),this.observedElements.push(i)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return le` <slot @slotchange=${this.handleSlotChange}></slot> `}};Xs.styles=[qe,sb];g([k({type:Boolean,reflect:!0})],Xs.prototype,"disabled",2);g([ke("disabled",{waitUntilFirstUpdate:!0})],Xs.prototype,"handleDisabledChange",1);function lb(r,o){return{top:Math.round(r.getBoundingClientRect().top-o.getBoundingClientRect().top),left:Math.round(r.getBoundingClientRect().left-o.getBoundingClientRect().left)}}function kp(r,o,i="vertical",l="smooth"){const u=lb(r,o),d=u.top+o.scrollTop,h=u.left+o.scrollLeft,f=o.scrollLeft,m=o.scrollLeft+o.offsetWidth,w=o.scrollTop,_=o.scrollTop+o.offsetHeight;(i==="horizontal"||i==="both")&&(h<f?o.scrollTo({left:h,behavior:l}):h+r.clientWidth>m&&o.scrollTo({left:h-o.offsetWidth+r.clientWidth,behavior:l})),(i==="vertical"||i==="both")&&(d<w?o.scrollTo({top:d,behavior:l}):d+r.clientHeight>_&&o.scrollTo({top:d-o.offsetHeight+r.clientHeight,behavior:l}))}var ot=class extends Oe{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new cr(this),this.hasScrollControls=!1,this.shouldHideScrollStartButton=!1,this.shouldHideScrollEndButton=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1,this.fixedScrollControls=!1,this.scrollOffset=1}connectedCallback(){const r=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(o=>{const i=o.filter(({target:l})=>{if(l===this)return!0;if(l.closest("sl-tab-group")!==this)return!1;const u=l.tagName.toLowerCase();return u==="sl-tab"||u==="sl-tab-panel"});if(i.length!==0){if(i.some(l=>!["aria-labelledby","aria-controls"].includes(l.attributeName))&&setTimeout(()=>this.setAriaLabels()),i.some(l=>l.attributeName==="disabled"))this.syncTabsAndPanels();else if(i.some(l=>l.attributeName==="active")){const u=i.filter(d=>d.attributeName==="active"&&d.target.tagName.toLowerCase()==="sl-tab").map(d=>d.target).find(d=>d.active);u&&this.setActiveTab(u)}}}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,attributeFilter:["active","disabled","name","panel"],childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),r.then(()=>{new IntersectionObserver((i,l)=>{var u;i[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((u=this.getActiveTab())!=null?u:this.tabs[0],{emitEvents:!1}),l.unobserve(i[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){var r,o;super.disconnectedCallback(),(r=this.mutationObserver)==null||r.disconnect(),this.nav&&((o=this.resizeObserver)==null||o.unobserve(this.nav))}getAllTabs(){return this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()}getAllPanels(){return[...this.body.assignedElements()].filter(r=>r.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(r=>r.active)}handleClick(r){const i=r.target.closest("sl-tab");i?.closest("sl-tab-group")===this&&i!==null&&this.setActiveTab(i,{scrollBehavior:"smooth"})}handleKeyDown(r){const i=r.target.closest("sl-tab");if(i?.closest("sl-tab-group")===this&&(["Enter"," "].includes(r.key)&&i!==null&&(this.setActiveTab(i,{scrollBehavior:"smooth"}),r.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(r.key))){const u=this.tabs.find(f=>f.matches(":focus")),d=this.localize.dir()==="rtl";let h=null;if(u?.tagName.toLowerCase()==="sl-tab"){if(r.key==="Home")h=this.focusableTabs[0];else if(r.key==="End")h=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&r.key===(d?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&r.key==="ArrowUp"){const f=this.tabs.findIndex(m=>m===u);h=this.findNextFocusableTab(f,"backward")}else if(["top","bottom"].includes(this.placement)&&r.key===(d?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&r.key==="ArrowDown"){const f=this.tabs.findIndex(m=>m===u);h=this.findNextFocusableTab(f,"forward")}if(!h)return;h.tabIndex=0,h.focus({preventScroll:!0}),this.activation==="auto"?this.setActiveTab(h,{scrollBehavior:"smooth"}):this.tabs.forEach(f=>{f.tabIndex=f===h?0:-1}),["top","bottom"].includes(this.placement)&&kp(h,this.nav,"horizontal"),r.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(r,o){if(o=Qr({emitEvents:!0,scrollBehavior:"auto"},o),r!==this.activeTab&&!r.disabled){const i=this.activeTab;this.activeTab=r,this.tabs.forEach(l=>{l.active=l===this.activeTab,l.tabIndex=l===this.activeTab?0:-1}),this.panels.forEach(l=>{var u;return l.active=l.name===((u=this.activeTab)==null?void 0:u.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&kp(this.activeTab,this.nav,"horizontal",o.scrollBehavior),o.emitEvents&&(i&&this.emit("sl-tab-hide",{detail:{name:i.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(r=>{const o=this.panels.find(i=>i.name===r.panel);o&&(r.setAttribute("aria-controls",o.getAttribute("id")),o.setAttribute("aria-labelledby",r.getAttribute("id")))})}repositionIndicator(){const r=this.getActiveTab();if(!r)return;const o=r.clientWidth,i=r.clientHeight,l=this.localize.dir()==="rtl",u=this.getAllTabs(),h=u.slice(0,u.indexOf(r)).reduce((f,m)=>({left:f.left+m.clientWidth,top:f.top+m.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${o}px`,this.indicator.style.height="auto",this.indicator.style.translate=l?`${-1*h.left}px`:`${h.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${i}px`,this.indicator.style.translate=`0 ${h.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(r=>!r.disabled),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}findNextFocusableTab(r,o){let i=null;const l=o==="forward"?1:-1;let u=r+l;for(;r<this.tabs.length;){if(i=this.tabs[u]||null,i===null){o==="forward"?i=this.focusableTabs[0]:i=this.focusableTabs[this.focusableTabs.length-1];break}if(!i.disabled)break;u+=l}return i}updateScrollButtons(){this.hasScrollControls&&!this.fixedScrollControls&&(this.shouldHideScrollStartButton=this.scrollFromStart()<=this.scrollOffset,this.shouldHideScrollEndButton=this.isScrolledToEnd())}isScrolledToEnd(){return this.scrollFromStart()+this.nav.clientWidth>=this.nav.scrollWidth-this.scrollOffset}scrollFromStart(){return this.localize.dir()==="rtl"?-this.nav.scrollLeft:this.nav.scrollLeft}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1,this.updateScrollButtons()}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(r){const o=this.tabs.find(i=>i.panel===r);o&&this.setActiveTab(o,{scrollBehavior:"smooth"})}render(){const r=this.localize.dir()==="rtl";return le`
      <div
        part="base"
        class=${Ue({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?le`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class=${Ue({"tab-group__scroll-button":!0,"tab-group__scroll-button--start":!0,"tab-group__scroll-button--start--hidden":this.shouldHideScrollStartButton})}
                  name=${r?"chevron-right":"chevron-left"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              `:""}

          <div class="tab-group__nav" @scrollend=${this.updateScrollButtons}>
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <sl-resize-observer @sl-resize=${this.syncIndicator}>
                <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
              </sl-resize-observer>
            </div>
          </div>

          ${this.hasScrollControls?le`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class=${Ue({"tab-group__scroll-button":!0,"tab-group__scroll-button--end":!0,"tab-group__scroll-button--end--hidden":this.shouldHideScrollEndButton})}
                  name=${r?"chevron-left":"chevron-right"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              `:""}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};ot.styles=[qe,ib];ot.dependencies={"sl-icon-button":mt,"sl-resize-observer":Xs};g([he(".tab-group")],ot.prototype,"tabGroup",2);g([he(".tab-group__body")],ot.prototype,"body",2);g([he(".tab-group__nav")],ot.prototype,"nav",2);g([he(".tab-group__indicator")],ot.prototype,"indicator",2);g([Re()],ot.prototype,"hasScrollControls",2);g([Re()],ot.prototype,"shouldHideScrollStartButton",2);g([Re()],ot.prototype,"shouldHideScrollEndButton",2);g([k()],ot.prototype,"placement",2);g([k()],ot.prototype,"activation",2);g([k({attribute:"no-scroll-controls",type:Boolean})],ot.prototype,"noScrollControls",2);g([k({attribute:"fixed-scroll-controls",type:Boolean})],ot.prototype,"fixedScrollControls",2);g([Bp({passive:!0})],ot.prototype,"updateScrollButtons",1);g([ke("noScrollControls",{waitUntilFirstUpdate:!0})],ot.prototype,"updateScrollControls",1);g([ke("placement",{waitUntilFirstUpdate:!0})],ot.prototype,"syncIndicator",1);var ab="sl-tab-group";ot.define("sl-tab-group");var ub=ft({tagName:ab,elementClass:ot,react:pt,events:{onSlTabShow:"sl-tab-show",onSlTabHide:"sl-tab-hide"},displayName:"SlTabGroup"}),cb=ub,db=(r,o)=>{let i=0;return function(...l){window.clearTimeout(i),i=window.setTimeout(()=>{r.call(this,...l)},o)}},Sp=(r,o,i)=>{const l=r[o];r[o]=function(...u){l.call(this,...u),i.call(this,l,...u)}};(()=>{if(typeof window>"u")return;if(!("onscrollend"in window)){const o=new Set,i=new WeakMap,l=d=>{for(const h of d.changedTouches)o.add(h.identifier)},u=d=>{for(const h of d.changedTouches)o.delete(h.identifier)};document.addEventListener("touchstart",l,!0),document.addEventListener("touchend",u,!0),document.addEventListener("touchcancel",u,!0),Sp(EventTarget.prototype,"addEventListener",function(d,h){if(h!=="scrollend")return;const f=db(()=>{o.size?f():this.dispatchEvent(new Event("scrollend"))},100);d.call(this,"scroll",f,{passive:!0}),i.set(this,f)}),Sp(EventTarget.prototype,"removeEventListener",function(d,h){if(h!=="scrollend")return;const f=i.get(this);f&&d.call(this,"scroll",f,{passive:!0})})}})();var hb=Fe`
  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition:
      var(--transition-speed) box-shadow,
      var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  :host(:focus) {
    outline: transparent;
  }

  :host(:focus-visible) {
    color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: calc(-1 * var(--sl-focus-ring-width) - var(--sl-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-small);
    margin-inline-start: var(--sl-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`,pb=0,Kt=class extends Oe{constructor(){super(...arguments),this.localize=new cr(this),this.attrId=++pb,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(r){r.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id.length>0?this.id:this.componentId,le`
      <div
        part="base"
        class=${Ue({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
      >
        <slot></slot>
        ${this.closable?le`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </div>
    `}};Kt.styles=[qe,hb];Kt.dependencies={"sl-icon-button":mt};g([he(".tab")],Kt.prototype,"tab",2);g([k({reflect:!0})],Kt.prototype,"panel",2);g([k({type:Boolean,reflect:!0})],Kt.prototype,"active",2);g([k({type:Boolean,reflect:!0})],Kt.prototype,"closable",2);g([k({type:Boolean,reflect:!0})],Kt.prototype,"disabled",2);g([k({type:Number,reflect:!0})],Kt.prototype,"tabIndex",2);g([ke("active")],Kt.prototype,"handleActiveChange",1);g([ke("disabled")],Kt.prototype,"handleDisabledChange",1);var fb="sl-tab";Kt.define("sl-tab");var mb=ft({tagName:fb,elementClass:Kt,react:pt,events:{onSlClose:"sl-close"},displayName:"SlTab"}),lu=mb,gb=Fe`
  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`,vb=0,oo=class extends Oe{constructor(){super(...arguments),this.attrId=++vb,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return le`
      <slot
        part="base"
        class=${Ue({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};oo.styles=[qe,gb];g([k({reflect:!0})],oo.prototype,"name",2);g([k({type:Boolean,reflect:!0})],oo.prototype,"active",2);g([ke("active")],oo.prototype,"handleActiveChange",1);var yb="sl-tab-panel";oo.define("sl-tab-panel");var bb=ft({tagName:yb,elementClass:oo,react:pt,events:{},displayName:"SlTabPanel"}),au=bb;function Cp(r){const o=r.split(`
`),i=1e3,l=[];let u=0,d=-1;function h(m){return!isNaN(parseFloat(m))&&isFinite(m)}for(let m=0;m<o.length&&u<i;m++){let w=o[m].trim();w.length===0&&(w="#");const _=w.split(/\s+/);if(_.length>=3){let b=-1,T=-1,A=-1;h(_[0])&&(b=parseFloat(_[0])),h(_[1])&&(T=parseFloat(_[1])),h(_[2])&&(A=parseFloat(_[2]));let z=-1;if(_.length>3&&h(_[3])&&(z=parseFloat(_[3])),b>=0&&T>=0&&A>=0){const I=[b,T,A,z];l.push(I),u++,b>d&&(d=b),T>d&&(d=T),A>d&&(d=A)}}}const f=new Array(u).fill(null).map(()=>[0,0,0,0]);for(let m=0;m<u;m++)f[m]=l[m];if(d<=1)for(let m=0;m<u;m++){f[m][3]=f[m][3]<0?1:f[m][3];for(let w=0;w<3;w++)f[m][w]*=255}else if(d<256)for(let m=0;m<u;m++)f[m][3]=f[m][3]<0?255:f[m][3];else for(let m=0;m<u;m++){f[m][3]=f[m][3]<0?d:f[m][3];for(let w=0;w<3;w++)f[m][w]/=d,f[m][w]*=255}for(let m=0;m<u;m++)for(let w=0;w<3;w++)f[m][w]=Math.round(f[m][w]);return f}function wb(r){const o=/^#?([A-Fa-f0-9]{6})$/i.exec(r);return o?[parseInt(o[1].slice(0,2),16),parseInt(o[1].slice(2,4),16),parseInt(o[1].slice(4,6),16)]:null}function _b(r){if(!Array.isArray(r)||r.length<3)return"";const o=Math.max(0,Math.min(255,Math.round(r[0]))),i=Math.max(0,Math.min(255,Math.round(r[1]))),l=Math.max(0,Math.min(255,Math.round(r[2]))),u=d=>d.toString(16).padStart(2,"0");return`#${u(o)}${u(i)}${u(l)}`}function xb(r,o="rgb"){return Array.isArray(r)?r.map(i=>{if(i===""||!Array.isArray(i)||i.length<3)return"";if(o==="hex")return _b(i);const l=Number(i[0]),u=Number(i[1]),d=Number(i[2]);return[l,u,d].some(h=>Number.isNaN(h))?"":`${l} ${u} ${d}`}).join(`
`):""}function kb(r,o="rgb"){if(o.toLowerCase()==="hex"){const b=String(r).split(`
`),T=[];for(const A of b){const z=A.trim();if(z===""){T.push("");continue}const I=wb(z);I&&T.push([I[0],I[1],I[2],255])}return T}const i=r.split(`
`),l=1e3,u=[];let d=0,h=-1;function f(b){return!isNaN(parseFloat(b))&&isFinite(b)}let m=0,w=i.length-1;for(let b=0;b<i.length;b++)if(i[b].trim()!=""){m=b;break}for(let b=i.length-1;b>=0;b--)if(i[b].trim()!=""){w=b;break}for(let b=m;b<w+1&&d<l;b++){const A=i[b].trim().split(/\s+/);let z=-1,I=-1,V=-1;if(A.length>=3){f(A[0])&&(z=parseFloat(A[0])),f(A[1])&&(I=parseFloat(A[1])),f(A[2])&&(V=parseFloat(A[2]));let Q=-1;if(A.length>3&&f(A[3])&&(Q=parseFloat(A[3])),z>=0&&I>=0&&V>=0){const te=[z,I,V,Q];u.push(te),d++,z>h&&(h=z),I>h&&(h=I),V>h&&(h=V)}}else b!=i.length-1&&(u.push(""),d++)}const _=new Array(d).fill("");for(let b=0;b<d;b++)u[b]!=""&&(_[b]=u[b]);if(h<=1){for(let b=0;b<d;b++)if(_[b]!=""){_[b][3]=_[b][3]<0?1:_[b][3];for(let T=0;T<3;T++)_[b][T]*=255}}else if(h<256)for(let b=0;b<d;b++)_[b]!=""&&(_[b][3]=_[b][3]<0?255:_[b][3]);else for(let b=0;b<d;b++)if(_[b]!=""){_[b][3]=_[b][3]<0?h:_[b][3];for(let T=0;T<3;T++)_[b][T]/=h,_[b][T]*=255}for(let b=0;b<d;b++)if(_[b]!="")for(let T=0;T<3;T++)_[b][T]=Math.round(_[b][T]);return _}function Sb({colorInRgb:r,colorOutRgb:o,setColormap:i,addHistory:l}){const[u,d]=ht.useState("rgb"),h=xb(r,u);function f(m){const w=kb(m.target.value,u);i(w),l(w)}return R.jsxs(cb,{children:[R.jsx(lu,{slot:"nav",panel:"edit",children:"Edit as text"}),R.jsx(lu,{slot:"nav",panel:"array",children:"Color array"}),R.jsx(lu,{slot:"nav",panel:"python",children:"Python"}),R.jsxs(au,{name:"edit",children:[R.jsx("div",{className:"format-row",children:R.jsxs(gu,{size:"small",label:"Format",value:u,onSlChange:m=>d(m.target.value),children:[R.jsx(pn,{value:"rgb",children:"R G B"}),R.jsx(pn,{value:"hex",children:"#RRGGBB"})]})}),R.jsx(Mu,{className:"code-area",value:h,rows:Math.min(r.length+1,20),helpText:"One control point per line; empty lines are interpolated. Changes apply when the box loses focus.",onSlChange:f})]}),R.jsx(au,{name:"array",children:R.jsx(nb,{colorOutRgb:o})}),R.jsx(au,{name:"python",children:R.jsx(qy,{colorOutRgb:o})})]})}function Cb({colorInRgb:r,colorOutRgb:o,onColorUpdate:i,onAddToHistory:l}){return R.jsx(Sb,{colorInRgb:r,colorOutRgb:o,setColormap:i,addHistory:l})}function $b(r){const[o,i]=ht.useState([r]),[l,u]=ht.useState(0),d=_=>{const b=[...o.slice(0,l+1),_];i(b),u(b.length-1)},h=()=>{if(l===0)return;const _=o[l-1];return u(l-1),_},f=()=>{if(l===o.length-1)return;const _=o[l+1];return u(l+1),_},m=l>0,w=l<o.length-1;return{history:o,currentState:l,addToHistory:d,undo:h,redo:f,canUndo:m,canRedo:w}}const Ou=(r,o)=>o?Ou(o,r%o):r,Eb=(r,o)=>r/Ou(r,o)*o,Ab=r=>Ou(Math.max(...r),Math.min(...r));function Tb(r,o){const i=r.length;o=Math.max(o,i);const l=Ab([i-1,o-1]),u=Eb(o-1,i-1)+1,d=(i-1)/l,h=(o-1)/l,f=[],m=[];let w=0;for(let _=0;_<r.length-1;_++){if(!r[_+1])continue;const b=1/h/(_-w+1);for(let T=0;T<h*(_-w+1);T++){const A=r[w][0]+(r[_+1][0]-r[w][0])*b*T,z=r[w][1]+(r[_+1][1]-r[w][1])*b*T,I=r[w][2]+(r[_+1][2]-r[w][2])*b*T;f.push([parseInt(A),parseInt(z),parseInt(I)])}w=_+1}f.push(r[r.length-1]);for(let _=0;_<u;_=_+d)m.push(f[_]);return m}function zb(){const r=[[255,0,0],"","",[255,255,255],[0,0,255]],[o,i]=ht.useState(r),[l,u]=ht.useState(5),[d,h]=ht.useState(5),{addToHistory:f,undo:m,redo:w,canUndo:_,canRedo:b}=$b(r),T=F=>{const B=F.target.files[0],re=new FileReader;re.onload=()=>{const ee=Cp(re.result);i(ee),u(ee.length),h(ee.length),f(ee)},re.readAsText(B)},A=F=>{const B=new XMLHttpRequest;B.open("GET","./colormap/"+F+".rgb"),B.responseType="text",B.onload=()=>{const re=Cp(B.response);i(re),u(re.length),h(re.length),f(re)},B.send()},z=F=>(F[0]===""&&(F[0]=[255,255,255]),F[F.length-1]===""&&(F[F.length-1]=[255,255,255]),F),I=()=>{const F=[[255,255,255],...o];i(F),f(F)},V=F=>{const B=[...o];B.splice(F+1,0,""),z(B),i(B),l<B.length&&u(B.length),f(B)},Q=F=>{if(o.length===2)return;const B=[...o];B.splice(F,1),z(B),i(B),f(B)},te=(F,B)=>{const re=[...o],ee=F.target.getFormattedValue("rgb").substr(4).split(")")[0].split(",").map(D=>parseInt(D));re.splice(B,1,ee),z(re),i(re)},ne=F=>{if(F===0||F===o.length-1)return;const B=[...o];B.splice(F,1,""),i(B),f(B)},oe=F=>{if(F===0)return;const B=[...o];B[F-1]=B.splice(F,1,B[F-1])[0],z(B),i(B),f(B)},we=F=>{if(F===o.length-1)return;const B=[...o];B[F+1]=B.splice(F,1,B[F+1])[0],z(B),i(B),f(B)},ue=F=>{const B=Number(F.target.value);h(F.target.value),B>=o.length&&u(B)},pe=()=>{h(o.length),u(o.length)},Pe=F=>{const B=Number(F.target.value),re=B<o.length?o.length:B;h(re),u(re)},Be=()=>{const F=m();F&&i(F)},Ae=()=>{const F=w();F&&i(F)};ht.useEffect(()=>{const F=B=>{if(!(B.ctrlKey||B.metaKey))return;const re=B.composedPath()[0];if(re&&["INPUT","TEXTAREA"].includes(re.tagName))return;const ee=B.key.toLowerCase();ee==="z"&&!B.shiftKey?(B.preventDefault(),Be()):(ee==="y"||ee==="z"&&B.shiftKey)&&(B.preventDefault(),Ae())};return window.addEventListener("keydown",F),()=>window.removeEventListener("keydown",F)});const Xe=()=>{const F=[...o];f(F)},Ne=o,Ce=Tb(Ne,l);return R.jsxs(R.Fragment,{children:[R.jsxs("header",{className:"app-header",children:[R.jsxs("div",{children:[R.jsx("h1",{children:"Colormap Generator"}),R.jsx("p",{children:"Pick a few control points, leave the rest blank to interpolate, then export."})]}),R.jsx(M0,{onUndo:Be,onRedo:Ae,canUndo:_,canRedo:b})]}),R.jsx(Cv,{colorOutRgb:Ce,colormap:o}),R.jsxs("div",{className:"toolbar",children:[R.jsx(dy,{onFileImport:T,onMapChange:A}),R.jsx(gy,{numColors:d,minColors:o.length,onNumColorsChange:ue,onNumColorsBlur:Pe,onReset:pe})]}),R.jsxs("div",{className:"main-grid",children:[R.jsxs("section",{className:"panel",children:[R.jsxs("div",{className:"panel-header",children:[R.jsxs("h2",{children:["Control points (",o.length,")"]}),R.jsxs(Au,{size:"small",onClick:I,children:[R.jsx(Up,{slot:"prefix",name:"plus-lg"}),"Add at top"]})]}),R.jsx(Iy,{colormap:o,onSetBlankColor:ne,onSwapUp:oe,onSwapDown:we,onColorChange:te,onAddColorDown:V,onDeleteColor:Q,onColorPickerBlur:Xe})]}),R.jsxs("section",{className:"panel",children:[R.jsxs("h2",{children:["Output (",Ce.length," colors)"]}),R.jsx(Cb,{colorInRgb:Ne,colorOutRgb:Ce,onColorUpdate:i,onAddToHistory:f})]})]}),R.jsxs("footer",{className:"app-footer",children:[R.jsxs("p",{children:["More colormaps: ",R.jsx("a",{href:"https://www.ncl.ucar.edu/Document/Graphics/color_table_gallery.shtml",target:"_blank",rel:"noreferrer",children:"NCL Graphics: Color Table Gallery"})]}),R.jsxs("p",{children:["Source on ",R.jsx("a",{href:"https://github.com/HappyXiaoAnAn/colormap_generator",target:"_blank",rel:"noreferrer",children:"GitHub"})]})]})]})}function Rb(){return R.jsx(zb,{})}bg.createRoot(document.getElementById("root")).render(R.jsx(Ep.StrictMode,{children:R.jsx(Rb,{})}));
