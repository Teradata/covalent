import{l as a,o as d}from"./query-assigned-elements-TXvH8BPC.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function m(e,n,s){let o,t=e;return typeof e=="object"?(t=e.slot,o=e):o={flatten:n},s?a({slot:t,flatten:n,selector:s}):d({descriptor:c=>({get(){var l,r;const i="slot"+(t?`[name=${t}]`:":not([name])"),u=(l=this.renderRoot)===null||l===void 0?void 0:l.querySelector(i);return(r=u==null?void 0:u.assignedNodes(o))!==null&&r!==void 0?r:[]},enumerable:!0,configurable:!0})})}export{m as o};
