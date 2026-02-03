/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const u=t=>t.nodeType===Node.ELEMENT_NODE;function v(t){return{addClass:e=>{t.classList.add(e)},removeClass:e=>{t.classList.remove(e)},hasClass:e=>t.classList.contains(e)}}let c=!1;const a=()=>{},r={get passive(){return c=!0,!1}};document.addEventListener("x",a,r);document.removeEventListener("x",a);const E=c,l=(t=window.document)=>{let e=t.activeElement;const s=[];if(!e)return s;for(;e&&(s.push(e),e.shadowRoot);)e=e.shadowRoot.activeElement;return s},m=t=>{const e=l();if(!e.length)return!1;const s=e[e.length-1],d=new Event("check-if-focused",{bubbles:!0,composed:!0});let n=[];const o=i=>{n=i.composedPath()};return document.body.addEventListener("check-if-focused",o),s.dispatchEvent(d),document.body.removeEventListener("check-if-focused",o),n.indexOf(t)!==-1};export{v as a,m as b,l as d,u as i,E as s};
