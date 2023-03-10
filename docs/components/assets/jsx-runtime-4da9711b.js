var x=Object.defineProperty;var _=(e,r)=>x(e,"name",{value:r,configurable:!0});import{z as l}from"./index-87d24e55.js";var o={},c={get exports(){return o},set exports(e){o=e}},n={};/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y=l,m=60103;n.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var i=Symbol.for;m=i("react.element"),n.Fragment=i("react.fragment")}var v=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j=Object.prototype.hasOwnProperty,d={key:!0,ref:!0,__self:!0,__source:!0};function u(e,r,p){var t,s={},f=null,a=null;p!==void 0&&(f=""+p),r.key!==void 0&&(f=""+r.key),r.ref!==void 0&&(a=r.ref);for(t in r)j.call(r,t)&&!d.hasOwnProperty(t)&&(s[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps,r)s[t]===void 0&&(s[t]=r[t]);return{$$typeof:m,type:e,key:f,ref:a,props:s,_owner:v.current}}_(u,"q");n.jsx=u;n.jsxs=u;(function(e){e.exports=n})(c);const R=o.Fragment,g=o.jsx,F=o.jsxs;export{R as F,F as a,g as j};
//# sourceMappingURL=jsx-runtime-4da9711b.js.map
