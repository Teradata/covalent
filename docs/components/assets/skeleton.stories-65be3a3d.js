import"./checkbox-eb116e3e.js";import"./formfield-b7f46068.js";import{Basic as y}from"./typography.stories-f9a76d52.js";import{l as g}from"./lorem-ipsum.content-89678e1d.js";import{t as T}from"./table-progress-indicator.content-e5032734.js";import"./query-assigned-elements-9f88bee1.js";import"./mwc-checkbox-base-46e201a3.js";import"./tslib.es6-6921e62d.js";import"./ripple-handlers-4e438af8.js";import"./base-element-cae00a28.js";import"./utils-529e1a6d.js";import"./property-f36ea729.js";import"./state-2a0073ff.js";import"./query-3e91a3b8.js";import"./class-map-4e4d6bc9.js";import"./directive-12249aa5.js";import"./style-map-ec903154.js";import"./aria-property-3dc182ec.js";import"./form-element-8fe2c680.js";import"./event-options-b5830ec0.js";import"./if-defined-c3862b86.js";import"./mwc-checkbox.css-e8d2335f.js";import"./observer-1f401936.js";import"./query-assigned-nodes-be20542b.js";import"./typography-9d0b5d22.js";const X={title:"Components/Skeleton"},a="skeleton-text",s="skeleton-effect-fade",t=()=>{const e=document.createElement("div");e.innerHTML=T;const l=e.getElementsByClassName("mdc-data-table__cell");return Array.from(l).forEach(n=>{n.classList.add(a),n.classList.add(s)}),e},c=()=>{const e=document.createElement("div");return e.classList.add(a),e.classList.add(s),e.innerHTML=`${y()}`,e},r=()=>{const e=document.createElement("div");return e.classList.add(a),e.classList.add(s),e.innerHTML=g,e},o=({label:e="Bananas",indeterminate:l})=>{const n=document.createElement("div");n.innerHTML=`
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
      </cv-formfield>`;const C=n.getElementsByTagName("cv-formfield");return Array.from(C).forEach(i=>{i.classList.add(a),i.classList.add(s)}),n};var m,d,f;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
}`,...(v=(b=c.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var k,u,h;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  const container = document.createElement('div');
  container.classList.add(skeletonClsName);
  container.classList.add(skeletonEffect);
  container.innerHTML = loremIpsumContent;
  return container;
}`,...(h=(u=r.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var L,E,x;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`({
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
}`,...(x=(E=o.parameters)==null?void 0:E.docs)==null?void 0:x.source}}};const Y=["DataTable","Typography","Content","Checkbox"];export{o as Checkbox,r as Content,t as DataTable,c as Typography,Y as __namedExportsOrder,X as default};
