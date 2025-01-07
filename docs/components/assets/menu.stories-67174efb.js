import{M as F}from"./select-8c84db7b.js";import{i as N,r as A,e as I}from"./query-assigned-elements-9f88bee1.js";import"./button-47b88b40.js";import"./list-item-500f4587.js";import"./tslib.es6-6921e62d.js";import"./mwc-line-ripple-directive-d0626047.js";import"./base-element-cae00a28.js";import"./utils-529e1a6d.js";import"./property-f36ea729.js";import"./query-3e91a3b8.js";import"./class-map-4e4d6bc9.js";import"./directive-12249aa5.js";import"./observer-1f401936.js";import"./state-2a0073ff.js";import"./style-map-ec903154.js";import"./mwc-icon-4afc0ea5.js";import"./form-element-8fe2c680.js";import"./event-options-b5830ec0.js";import"./if-defined-c3862b86.js";import"./ripple-handlers-4e438af8.js";import"./aria-property-3dc182ec.js";import"./query-assigned-nodes-be20542b.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */const R=N`mwc-list ::slotted([mwc-list-item]:not([twoline])),mwc-list ::slotted([noninteractive]:not([twoline])){height:var(--mdc-menu-item-height, 48px)}`,q=`mwc-menu-surface{--mdc-theme-surface: var(--cv-theme-surface-container)}
`;var z=Object.defineProperty,G=Object.getOwnPropertyDescriptor,H=(l,n,s,i)=>{for(var t=i>1?void 0:i?G(n,s):n,d=l.length-1,v;d>=0;d--)(v=l[d])&&(t=(i?v(n,s,t):v(t))||t);return i&&t&&z(n,s,t),t};let b=class extends F{};b.styles=[R,N`
      ${A(q)}
    `];b=H([I("cv-menu")],b);const ve={title:"Components/Menu",component:"cv-menu",parameters:{layout:"padded"},args:{corner:"BOTTOM_START",defaultFocus:"NONE",fixed:!0,activatable:!0},argTypes:{corner:{options:["TOP_START","TOP_END","BOTTOM_START","BOTTOM_END"],control:{type:"select"}},defaultFocus:{options:["NONE","LIST_ROOT","FIRST_ITEM","LAST_ITEM"],control:{type:"select"}},x:{control:{type:"number"}},y:{control:{type:"number"}},absolute:{control:{type:"boolean"}}}},e=l=>{document.addEventListener("DOMContentLoaded",()=>{window.basicMenu.anchor=window.basicButton,window.basicButton.addEventListener("click",function(){window.basicMenu.open=!window.basicMenu.open})});let n="";for(const[s,i]of Object.entries(l))n+=`${s}="${i}" `;return`
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
}`,...(P=(g=c.parameters)==null?void 0:g.docs)==null?void 0:P.source}}};var L,h,$;r.parameters={...r.parameters,docs:{...(L=r.parameters)==null?void 0:L.docs,source:{originalSource:`args => {
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
}`,...($=(h=r.parameters)==null?void 0:h.docs)==null?void 0:$.source}}};var E,k,T;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`args => {
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
}`,...(T=(k=a.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var _,C,S;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`args => {
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
}`,...(S=(C=u.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var D,j,x;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`args => {
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
}`,...(x=(j=m.parameters)==null?void 0:j.docs)==null?void 0:x.source}}};const be=["Basic","absolute","quickOpen","fullwidth","stayOpenOnBodyClick","corner","defaultFocus"];export{e as Basic,be as __namedExportsOrder,o as absolute,u as corner,ve as default,m as defaultFocus,r as fullwidth,c as quickOpen,a as stayOpenOnBodyClick};