import{l as u,o as d}from"./query-assigned-elements-9f88bee1.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function m(e,r,s){let o,t=e;return typeof e=="object"?(t=e.slot,o=e):o={flatten:r},s?u({slot:t,flatten:r,selector:s}):d({descriptor:c=>({get(){var l,n;const a="slot"+(t?`[name=${t}]`:":not([name])"),i=(l=this.renderRoot)===null||l===void 0?void 0:l.querySelector(a);return(n=i==null?void 0:i.assignedNodes(o))!==null&&n!==void 0?n:[]},enumerable:!0,configurable:!0})})}export{m as o};
