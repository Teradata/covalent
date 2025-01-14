import{l as f,o as i}from"./query-assigned-elements-CymsZmtQ.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function m(e,r,u){let n,t=e;return typeof e=="object"?(t=e.slot,n=e):n={flatten:r},u?f({slot:t,flatten:r,selector:u}):i({descriptor:a=>({get(){var o,l;const s="slot"+(t?`[name=${t}]`:":not([name])"),d=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(s);return(l=d==null?void 0:d.assignedNodes(n))!==null&&l!==void 0?l:[]},enumerable:!0,configurable:!0})})}export{m as o};
