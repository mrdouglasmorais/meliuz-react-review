/*! For license information please see bundle-cd93e64b6a0b44c79677.js.LICENSE.txt */
(()=>{"use strict";var e={418:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function n(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(e){o[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}()?Object.assign:function(e,a){for(var c,i,s=n(e),f=1;f<arguments.length;f++){for(var l in c=Object(arguments[f]))t.call(c,l)&&(s[l]=c[l]);if(r){i=r(c);for(var p=0;p<i.length;p++)o.call(c,i[p])&&(s[i[p]]=c[i[p]])}}return s}},251:(e,r,t)=>{t(418);var o=t(363),n=60103;if("function"==typeof Symbol&&Symbol.for){var a=Symbol.for;n=a("react.element"),a("react.fragment")}var c=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};r.jsx=function(e,r,t){var o,a={},f=null,l=null;for(o in void 0!==t&&(f=""+t),void 0!==r.key&&(f=""+r.key),void 0!==r.ref&&(l=r.ref),r)i.call(r,o)&&!s.hasOwnProperty(o)&&(a[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps)void 0===a[o]&&(a[o]=r[o]);return{$$typeof:n,type:e,key:f,ref:l,props:a,_owner:c.current}}},893:(e,r,t)=>{e.exports=t(251)},363:e=>{e.exports=React}},r={};function t(o){var n=r[o];if(void 0!==n)return n.exports;var a=r[o]={exports:{}};return e[o](a,a.exports,t),a.exports}t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e=t(893);const r=ReactDOM,o=ReactRouterDOM,n=()=>(0,e.jsx)("div",{children:(0,e.jsx)("h1",{children:"Hello!"},void 0)},void 0);t.n(r)().render((0,e.jsx)((()=>(0,e.jsx)(o.BrowserRouter,{children:(0,e.jsx)(o.Switch,{children:(0,e.jsx)(o.Route,{exact:!0,path:"/",component:n},void 0)},void 0)},void 0)),{},void 0),document.getElementById("main"))})()})();