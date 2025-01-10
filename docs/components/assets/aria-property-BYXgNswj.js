/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function c(e,t,r){const n=e.constructor;if(!r){const s=`__${t}`;if(r=n.getPropertyDescriptor(t,s),!r)throw new Error("@ariaProperty must be used after a @property decorator")}const o=r;let i="";if(!o.set)throw new Error(`@ariaProperty requires a setter for ${t}`);if(e.dispatchWizEvent)return r;const u={configurable:!0,enumerable:!0,set(s){if(i===""){const a=n.getPropertyOptions(t);i=typeof a.attribute=="string"?a.attribute:t}this.hasAttribute(i)&&this.removeAttribute(i),o.set.call(this,s)}};return o.get&&(u.get=function(){return o.get.call(this)}),u}function p(e,t,r){if(t!==void 0)return c(e,t,r);throw new Error("@ariaProperty only supports TypeScript Decorators")}export{p as a};
