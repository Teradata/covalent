import"./checkbox-DIX8KeUK.js";import"./formfield-lphfJpmF.js";import{Basic as x}from"./typography.stories-DwmmQocS.js";import{l as g}from"./lorem-ipsum.content-ttJlmQjQ.js";import{t as T}from"./table-progress-indicator.content-Ct_3biMo.js";const _={title:"Components/Skeleton"},r="skeleton-text",o="skeleton-effect-fade",t=()=>{const e=document.createElement("div");e.innerHTML=T;const l=e.getElementsByClassName("mdc-data-table__cell");return Array.from(l).forEach(n=>{n.classList.add(r),n.classList.add(o)}),e},c=()=>{const e=document.createElement("div");return e.classList.add(r),e.classList.add(o),e.innerHTML=`${x()}`,e},a=()=>{const e=document.createElement("div");return e.classList.add(r),e.classList.add(o),e.innerHTML=g,e},s=({label:e="Bananas",indeterminate:l})=>{const n=document.createElement("div");n.innerHTML=`
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
      </cv-formfield>`;const C=n.getElementsByTagName("cv-formfield");return Array.from(C).forEach(i=>{i.classList.add(r),i.classList.add(o)}),n};var d,m,f;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  const container = document.createElement('div');
  container.innerHTML = tableProgressContent;
  const tableCell = container.getElementsByClassName('mdc-data-table__cell');
  Array.from(tableCell).forEach(cell => {
    cell.classList.add(skeletonClsName);
    cell.classList.add(skeletonEffect);
  });
  return container;
}`,...(f=(m=t.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var b,v,p;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  const container = document.createElement('div');
  container.classList.add(skeletonClsName);
  container.classList.add(skeletonEffect);
  container.innerHTML = \`\${Basic()}\`;
  return container;
}`,...(p=(v=c.parameters)==null?void 0:v.docs)==null?void 0:p.source}}};var u,k,h;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const container = document.createElement('div');
  container.classList.add(skeletonClsName);
  container.classList.add(skeletonEffect);
  container.innerHTML = loremIpsumContent;
  return container;
}`,...(h=(k=a.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};var L,E,y;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`({
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
}`,...(y=(E=s.parameters)==null?void 0:E.docs)==null?void 0:y.source}}};const S=["DataTable","Typography","Content","Checkbox"],A=Object.freeze(Object.defineProperty({__proto__:null,Checkbox:s,Content:a,DataTable:t,Typography:c,__namedExportsOrder:S,default:_},Symbol.toStringTag,{value:"Module"}));export{a as C,t as D,A as S,c as T,s as a};
