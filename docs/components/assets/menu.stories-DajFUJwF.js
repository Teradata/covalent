import{s as N,M as F}from"./select-BHSwQGpv.js";import{r as A,i as I,e as R}from"./query-assigned-elements-BJdb4KNY.js";import"./button-BEli9AVj.js";import"./list-item-CmxEoEoc.js";import"./if-defined-dAx6j6jI.js";import"./class-map-LmxYoNzI.js";import"./directive-CvdRHFdJ.js";import"./tslib.es6-C-hQhb2A.js";import"./mwc-line-ripple-directive-CtRFQWit.js";import"./base-element-C3CkHPn4.js";import"./utils-DQt7ZoY7.js";import"./query-pFbEai1B.js";import"./observer-D8jHVEI7.js";import"./state-CGn7W7VL.js";import"./style-map-CNNK6hz8.js";import"./mwc-icon-BGUO1vKj.js";import"./form-element-BmZ4g8Y6.js";import"./event-options-CZVCfsC0.js";import"./ripple-handlers-CLC5WHP1.js";import"./aria-property-BYXgNswj.js";import"./query-assigned-nodes-BxERp_Ow.js";const q=":host{--mdc-menu-item-height: calc(48px + var(--cv-density-mode, 0) * var(--cv-density-interval, 4px))}mwc-menu-surface{--mdc-theme-surface: var(--cv-theme-surface-container)}";var z=Object.getOwnPropertyDescriptor,G=(a,n,d,u)=>{for(var m=u>1?void 0:u?z(n,d):n,l=a.length-1,b;l>=0;l--)(b=a[l])&&(m=b(m)||m);return m};let v=class extends F{};v.styles=[N,I`
      ${A(q)}
    `];v=G([R("cv-menu")],v);const de={title:"Components/Menu",component:"cv-menu",parameters:{layout:"padded"},args:{corner:"BOTTOM_START",defaultFocus:"NONE",fixed:!0,activatable:!0},argTypes:{corner:{options:["TOP_START","TOP_END","BOTTOM_START","BOTTOM_END"],control:{type:"select"}},defaultFocus:{options:["NONE","LIST_ROOT","FIRST_ITEM","LAST_ITEM"],control:{type:"select"}},x:{control:{type:"number"}},y:{control:{type:"number"}},absolute:{control:{type:"boolean"}}}},e=a=>{document.addEventListener("DOMContentLoaded",()=>{window.basicMenu.anchor=window.basicButton,window.basicButton.addEventListener("click",function(){window.basicMenu.open=!window.basicMenu.open})});let n="";for(const[d,u]of Object.entries(a))n+=`${d}="${u}" `;return`
    <cv-button id="basicButton" raised label="Open menu"></cv-button>
    <cv-menu 
      id="basicMenu"
      ${n}
      >
      <cv-list-item>one</cv-list-item>
      <cv-list-item>two</cv-list-item>
      <cv-list-item>three</cv-list-item>
      <cv-list-item disabled><div>four</div></cv-list-item>
      <li divider></li>
      <cv-list-item>aaa</cv-list-item>
      <cv-list-item>bbb</cv-list-item>
    </cv-menu>
  `},t=e.bind({});t.args={absolute:!0,x:100,y:100};const i=e.bind({});i.args={quick:!0};const s=e.bind({});s.args={fullwidth:!0};const c=e.bind({});c.args={stayOpenonBodyClick:!0};const o=e.bind({});o.args={corner:"TOP_END"};const r=e.bind({});r.args={defaultFocus:"LAST_ITEM"};var p,w,M;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  document.addEventListener('DOMContentLoaded', () => {
    window.basicMenu.anchor = window.basicButton;
    window.basicButton.addEventListener('click', function () {
      window.basicMenu.open = !window.basicMenu.open;
    });
  });
  let menuProps = '';
  for (const [key, value] of Object.entries(args)) menuProps += \`\${key}="\${value}" \`;
  return \`
    <cv-button id="basicButton" raised label="Open menu"></cv-button>
    <cv-menu 
      id="basicMenu"
      \${menuProps}
      >
      <cv-list-item>one</cv-list-item>
      <cv-list-item>two</cv-list-item>
      <cv-list-item>three</cv-list-item>
      <cv-list-item disabled><div>four</div></cv-list-item>
      <li divider></li>
      <cv-list-item>aaa</cv-list-item>
      <cv-list-item>bbb</cv-list-item>
    </cv-menu>
  \`;
}`,...(M=(w=e.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};var f,O,y;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
  document.addEventListener('DOMContentLoaded', () => {
    window.basicMenu.anchor = window.basicButton;
    window.basicButton.addEventListener('click', function () {
      window.basicMenu.open = !window.basicMenu.open;
    });
  });
  let menuProps = '';
  for (const [key, value] of Object.entries(args)) menuProps += \`\${key}="\${value}" \`;
  return \`
    <cv-button id="basicButton" raised label="Open menu"></cv-button>
    <cv-menu 
      id="basicMenu"
      \${menuProps}
      >
      <cv-list-item>one</cv-list-item>
      <cv-list-item>two</cv-list-item>
      <cv-list-item>three</cv-list-item>
      <cv-list-item disabled><div>four</div></cv-list-item>
      <li divider></li>
      <cv-list-item>aaa</cv-list-item>
      <cv-list-item>bbb</cv-list-item>
    </cv-menu>
  \`;
}`,...(y=(O=t.parameters)==null?void 0:O.docs)==null?void 0:y.source}}};var B,g,k;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`args => {
  document.addEventListener('DOMContentLoaded', () => {
    window.basicMenu.anchor = window.basicButton;
    window.basicButton.addEventListener('click', function () {
      window.basicMenu.open = !window.basicMenu.open;
    });
  });
  let menuProps = '';
  for (const [key, value] of Object.entries(args)) menuProps += \`\${key}="\${value}" \`;
  return \`
    <cv-button id="basicButton" raised label="Open menu"></cv-button>
    <cv-menu 
      id="basicMenu"
      \${menuProps}
      >
      <cv-list-item>one</cv-list-item>
      <cv-list-item>two</cv-list-item>
      <cv-list-item>three</cv-list-item>
      <cv-list-item disabled><div>four</div></cv-list-item>
      <li divider></li>
      <cv-list-item>aaa</cv-list-item>
      <cv-list-item>bbb</cv-list-item>
    </cv-menu>
  \`;
}`,...(k=(g=i.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};var L,P,$;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`args => {
  document.addEventListener('DOMContentLoaded', () => {
    window.basicMenu.anchor = window.basicButton;
    window.basicButton.addEventListener('click', function () {
      window.basicMenu.open = !window.basicMenu.open;
    });
  });
  let menuProps = '';
  for (const [key, value] of Object.entries(args)) menuProps += \`\${key}="\${value}" \`;
  return \`
    <cv-button id="basicButton" raised label="Open menu"></cv-button>
    <cv-menu 
      id="basicMenu"
      \${menuProps}
      >
      <cv-list-item>one</cv-list-item>
      <cv-list-item>two</cv-list-item>
      <cv-list-item>three</cv-list-item>
      <cv-list-item disabled><div>four</div></cv-list-item>
      <li divider></li>
      <cv-list-item>aaa</cv-list-item>
      <cv-list-item>bbb</cv-list-item>
    </cv-menu>
  \`;
}`,...($=(P=s.parameters)==null?void 0:P.docs)==null?void 0:$.source}}};var h,E,T;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  document.addEventListener('DOMContentLoaded', () => {
    window.basicMenu.anchor = window.basicButton;
    window.basicButton.addEventListener('click', function () {
      window.basicMenu.open = !window.basicMenu.open;
    });
  });
  let menuProps = '';
  for (const [key, value] of Object.entries(args)) menuProps += \`\${key}="\${value}" \`;
  return \`
    <cv-button id="basicButton" raised label="Open menu"></cv-button>
    <cv-menu 
      id="basicMenu"
      \${menuProps}
      >
      <cv-list-item>one</cv-list-item>
      <cv-list-item>two</cv-list-item>
      <cv-list-item>three</cv-list-item>
      <cv-list-item disabled><div>four</div></cv-list-item>
      <li divider></li>
      <cv-list-item>aaa</cv-list-item>
      <cv-list-item>bbb</cv-list-item>
    </cv-menu>
  \`;
}`,...(T=(E=c.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var _,C,S;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`args => {
  document.addEventListener('DOMContentLoaded', () => {
    window.basicMenu.anchor = window.basicButton;
    window.basicButton.addEventListener('click', function () {
      window.basicMenu.open = !window.basicMenu.open;
    });
  });
  let menuProps = '';
  for (const [key, value] of Object.entries(args)) menuProps += \`\${key}="\${value}" \`;
  return \`
    <cv-button id="basicButton" raised label="Open menu"></cv-button>
    <cv-menu 
      id="basicMenu"
      \${menuProps}
      >
      <cv-list-item>one</cv-list-item>
      <cv-list-item>two</cv-list-item>
      <cv-list-item>three</cv-list-item>
      <cv-list-item disabled><div>four</div></cv-list-item>
      <li divider></li>
      <cv-list-item>aaa</cv-list-item>
      <cv-list-item>bbb</cv-list-item>
    </cv-menu>
  \`;
}`,...(S=(C=o.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var D,j,x;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`args => {
  document.addEventListener('DOMContentLoaded', () => {
    window.basicMenu.anchor = window.basicButton;
    window.basicButton.addEventListener('click', function () {
      window.basicMenu.open = !window.basicMenu.open;
    });
  });
  let menuProps = '';
  for (const [key, value] of Object.entries(args)) menuProps += \`\${key}="\${value}" \`;
  return \`
    <cv-button id="basicButton" raised label="Open menu"></cv-button>
    <cv-menu 
      id="basicMenu"
      \${menuProps}
      >
      <cv-list-item>one</cv-list-item>
      <cv-list-item>two</cv-list-item>
      <cv-list-item>three</cv-list-item>
      <cv-list-item disabled><div>four</div></cv-list-item>
      <li divider></li>
      <cv-list-item>aaa</cv-list-item>
      <cv-list-item>bbb</cv-list-item>
    </cv-menu>
  \`;
}`,...(x=(j=r.parameters)==null?void 0:j.docs)==null?void 0:x.source}}};const le=["Basic","absolute","quickOpen","fullwidth","stayOpenOnBodyClick","corner","defaultFocus"];export{e as Basic,le as __namedExportsOrder,t as absolute,o as corner,de as default,r as defaultFocus,s as fullwidth,i as quickOpen,c as stayOpenOnBodyClick};
