import{R as o}from"./index-76fb7be0.js";function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?m(Object(n),!0).forEach(function(r){y(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function O(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function b(e,t){if(e==null)return{};var n=O(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var g=function(t){return typeof t=="function"},s=o.createContext({}),d=function(t){var n=o.useContext(s),r=n;return t&&(r=g(t)?t(n):l(l({},n),t)),r},P="mdxType",j={inlineCode:"code",wrapper:function(t){var n=t.children;return o.createElement(o.Fragment,{},n)}},v=o.forwardRef(function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),u=d(n),f=r,p=u["".concat(i,".").concat(f)]||u[f]||j[f]||a;return n?o.createElement(p,l(l({ref:t},c),{},{components:n})):o.createElement(p,l({ref:t},c))});v.displayName="MDXCreateElement";function x(e,t){var n=arguments,r=t&&t.mdxType;if(typeof e=="string"||r){var a=n.length,i=new Array(a);i[0]=v;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[P]=typeof e=="string"?e:r,i[1]=c;for(var f=2;f<a;f++)i[f]=n[f];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}export{x as c};
