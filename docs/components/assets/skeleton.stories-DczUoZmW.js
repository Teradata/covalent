import"./checkbox-aEMWb9WE.js";import"./formfield-DvbbCOWd.js";import{Basic as y}from"./typography.stories-CxYejLrQ.js";import{l as g}from"./lorem-ipsum.content-ttJlmQjQ.js";import{t as T}from"./table-progress-indicator.content-Ct_3biMo.js";import"./query-assigned-elements-XF8sHqwE.js";import"./mwc-checkbox.css-BVVEzStd.js";import"./tslib.es6-B8g9kRRR.js";import"./ripple-handlers-QIcOqcqN.js";import"./base-element-CGkZ9Caz.js";import"./utils-DQt7ZoY7.js";import"./state-DigO7a43.js";import"./query-BIWRq3i5.js";import"./class-map-j_UyOF6B.js";import"./directive-CF8sV3Lr.js";import"./style-map-BvUKPc5V.js";import"./aria-property-BYXgNswj.js";import"./form-element-D0P3OMbx.js";import"./event-options-C2Dj4usW.js";import"./if-defined-a0dakvOI.js";import"./observer-D8jHVEI7.js";import"./query-assigned-nodes-B6dODpMo.js";import"./typography-C-IGJua5.js";const V={title:"Components/Skeleton"},o="skeleton-text",s="skeleton-effect-fade",t=()=>{const e=document.createElement("div");e.innerHTML=T;const l=e.getElementsByClassName("mdc-data-table__cell");return Array.from(l).forEach(n=>{n.classList.add(o),n.classList.add(s)}),e},c=()=>{const e=document.createElement("div");return e.classList.add(o),e.classList.add(s),e.innerHTML=`${y()}`,e},r=()=>{const e=document.createElement("div");return e.classList.add(o),e.classList.add(s),e.innerHTML=g,e},a=({label:e="Bananas",indeterminate:l})=>{const n=document.createElement("div");n.innerHTML=`
      <style>
          cv-formfield {
              display: block;
          }
          .child {
              margin-left: 20px;
          }
      </style>
      <cv-formfield label="${e}">
          <cv-checkbox ${l?"indeterminate":null}></cv-checkbox>
      </cv-formfield>
      
      <cv-formfield label="${e}">
          <cv-checkbox class="child"></cv-checkbox>
      </cv-formfield>
      
      <cv-formfield label="${e}">
          <cv-checkbox class="child" checked></cv-checkbox>
      </cv-formfield>`;const C=n.getElementsByTagName("cv-formfield");return Array.from(C).forEach(i=>{i.classList.add(o),i.classList.add(s)}),n};var m,d,f;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const container = document.createElement('div');
  container.innerHTML = tableProgressContent;
  const tableCell = container.getElementsByClassName('mdc-data-table__cell');
  Array.from(tableCell).forEach(cell => {
    cell.classList.add(skeletonClsName);
    cell.classList.add(skeletonEffect);
  });
  return container;
}`,...(f=(d=t.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};var p,b,v;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  const container = document.createElement('div');
  container.classList.add(skeletonClsName);
  container.classList.add(skeletonEffect);
  container.innerHTML = \`\${Basic()}\`;
  return container;
}`,...(v=(b=c.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var u,k,h;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const container = document.createElement('div');
  container.classList.add(skeletonClsName);
  container.classList.add(skeletonEffect);
  container.innerHTML = loremIpsumContent;
  return container;
}`,...(h=(k=r.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};var L,E,x;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`({
  label = 'Bananas',
  indeterminate
}) => {
  const container = document.createElement('div');
  container.innerHTML = \`
      <style>
          cv-formfield {
              display: block;
          }
          .child {
              margin-left: 20px;
          }
      </style>
      <cv-formfield label="\${label}">
          <cv-checkbox \${indeterminate ? \`indeterminate\` : null}></cv-checkbox>
      </cv-formfield>
      
      <cv-formfield label="\${label}">
          <cv-checkbox class="child"></cv-checkbox>
      </cv-formfield>
      
      <cv-formfield label="\${label}">
          <cv-checkbox class="child" checked></cv-checkbox>
      </cv-formfield>\`;
  const labels = container.getElementsByTagName('cv-formfield');
  Array.from(labels).forEach(label => {
    label.classList.add(skeletonClsName);
    label.classList.add(skeletonEffect);
  });
  return container;
}`,...(x=(E=a.parameters)==null?void 0:E.docs)==null?void 0:x.source}}};const W=["DataTable","Typography","Content","Checkbox"];export{a as Checkbox,r as Content,t as DataTable,c as Typography,W as __namedExportsOrder,V as default};