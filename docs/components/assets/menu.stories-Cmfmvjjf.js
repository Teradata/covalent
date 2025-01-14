import{s as x,M as F}from"./select-fNtpb11g.js";import{i as A,r as I,e as R}from"./query-assigned-elements-CymsZmtQ.js";import"./button-BjNciVgh.js";import"./list-item-DtBRjX7b.js";import"./tslib.es6-B8g9kRRR.js";import"./mwc-line-ripple-directive-CEagdrzQ.js";import"./base-element-CJeya0gi.js";import"./utils-DQt7ZoY7.js";import"./property-jaip2ZBL.js";import"./query-BNmDdGNL.js";import"./class-map-DSF43RfV.js";import"./directive-CF8sV3Lr.js";import"./observer-D8jHVEI7.js";import"./state-C-wh0DpU.js";import"./style-map-DpiegmRE.js";import"./mwc-icon-CgxFi2se.js";import"./form-element-7hdcRypm.js";import"./event-options-Dr5E6kGq.js";import"./if-defined-GlF589cx.js";import"./ripple-handlers-Gu4a3Vem.js";import"./aria-property-BYXgNswj.js";import"./query-assigned-nodes-LMAOVAfV.js";const q="mwc-menu-surface{--mdc-theme-surface: var(--cv-theme-surface-container)}";var z=Object.defineProperty,G=Object.getOwnPropertyDescriptor,H=(d,n,s,i)=>{for(var t=i>1?void 0:i?G(n,s):n,l=d.length-1,v;l>=0;l--)(v=d[l])&&(t=(i?v(n,s,t):v(t))||t);return i&&t&&z(n,s,t),t};let b=class extends F{};b.styles=[x,A`
      ${I(q)}
    `];b=H([R("cv-menu")],b);const ve={title:"Components/Menu",component:"cv-menu",parameters:{layout:"padded"},args:{corner:"BOTTOM_START",defaultFocus:"NONE",fixed:!0,activatable:!0},argTypes:{corner:{options:["TOP_START","TOP_END","BOTTOM_START","BOTTOM_END"],control:{type:"select"}},defaultFocus:{options:["NONE","LIST_ROOT","FIRST_ITEM","LAST_ITEM"],control:{type:"select"}},x:{control:{type:"number"}},y:{control:{type:"number"}},absolute:{control:{type:"boolean"}}}},e=d=>{document.addEventListener("DOMContentLoaded",()=>{window.basicMenu.anchor=window.basicButton,window.basicButton.addEventListener("click",function(){window.basicMenu.open=!window.basicMenu.open})});let n="";for(const[s,i]of Object.entries(d))n+=`${s}="${i}" `;return`
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
  `},o=e.bind({});o.args={absolute:!0,x:100,y:100};const c=e.bind({});c.args={quick:!0};const r=e.bind({});r.args={fullwidth:!0};const a=e.bind({});a.args={stayOpenonBodyClick:!0};const u=e.bind({});u.args={corner:"TOP_END"};const m=e.bind({});m.args={defaultFocus:"LAST_ITEM"};var p,w,f;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
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
}`,...(f=(w=e.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var M,O,y;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`args => {
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
}`,...(y=(O=o.parameters)==null?void 0:O.docs)==null?void 0:y.source}}};var B,g,P;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`args => {
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
}`,...(P=(g=c.parameters)==null?void 0:g.docs)==null?void 0:P.source}}};var L,$,E;r.parameters={...r.parameters,docs:{...(L=r.parameters)==null?void 0:L.docs,source:{originalSource:`args => {
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
}`,...(E=($=r.parameters)==null?void 0:$.docs)==null?void 0:E.source}}};var k,T,h;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
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
}`,...(h=(T=a.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};var _,C,S;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`args => {
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
}`,...(S=(C=u.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var D,j,N;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`args => {
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
}`,...(N=(j=m.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};const be=["Basic","absolute","quickOpen","fullwidth","stayOpenOnBodyClick","corner","defaultFocus"];export{e as Basic,be as __namedExportsOrder,o as absolute,u as corner,ve as default,m as defaultFocus,r as fullwidth,c as quickOpen,a as stayOpenOnBodyClick};
