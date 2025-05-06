import"./toolbar-DP5w47G4.js";import"./button-BW6mrqUX.js";import"./icon-button-DaD1VZRZ.js";import"./query-assigned-elements-XF8sHqwE.js";import"./mwc-top-app-bar-base-DdCAAJYU.js";import"./tslib.es6-CilhkYUw.js";import"./base-element-CGkZ9Caz.js";import"./utils-DQt7ZoY7.js";import"./query-BIWRq3i5.js";import"./class-map-j_UyOF6B.js";import"./directive-CF8sV3Lr.js";import"./mwc-icon-BHr-cy3v.js";import"./ripple-handlers-CwFC0uxg.js";import"./state-DigO7a43.js";import"./style-map-BvUKPc5V.js";import"./aria-property-BYXgNswj.js";import"./event-options-C2Dj4usW.js";import"./if-defined-a0dakvOI.js";import"./mwc-icon-button.css-DWhRmKK6.js";const q={title:"Components/Toolbar",args:{title:"Page title",dense:!1,filter:!0,search:!0,add:!0,secondaryAction:!0,action:!0},parameters:{layout:"fullscreen"}},t=({dense:a,title:l,filter:u,search:d,add:m,secondaryAction:b,action:p})=>`
    <cv-toolbar ${a?"dense":""}>
      <span slot="title">${l}</span> 
      ${u?'<cv-icon-button icon="filter_list" slot="actionItems"></cv-icon-button>':""}
      ${d?'<cv-icon-button icon="search" slot="actionItems"></cv-icon-button>':""}
      ${m?'<cv-icon-button icon="add" slot="actionItems"></cv-icon-button>':""}
      ${b?'<cv-button outlined slot="actionItems">Button text</cv-button>':""}
      ${p?'<cv-button outlined slot="actionItems">Button text</cv-button>':""}
    </cv-toolbar>
  `,o=t.bind({});o.args={dense:"true"};var n,e,c;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`({
  dense,
  title,
  filter,
  search,
  add,
  secondaryAction,
  action
}) => {
  return \`
    <cv-toolbar \${dense ? 'dense' : ''}>
      <span slot="title">\${title}</span> 
      \${filter ? '<cv-icon-button icon="filter_list" slot="actionItems"></cv-icon-button>' : ''}
      \${search ? '<cv-icon-button icon="search" slot="actionItems"></cv-icon-button>' : ''}
      \${add ? '<cv-icon-button icon="add" slot="actionItems"></cv-icon-button>' : ''}
      \${secondaryAction ? '<cv-button outlined slot="actionItems">Button text</cv-button>' : ''}
      \${action ? '<cv-button outlined slot="actionItems">Button text</cv-button>' : ''}
    </cv-toolbar>
  \`;
}`,...(c=(e=t.parameters)==null?void 0:e.docs)==null?void 0:c.source}}};var i,r,s;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`({
  dense,
  title,
  filter,
  search,
  add,
  secondaryAction,
  action
}) => {
  return \`
    <cv-toolbar \${dense ? 'dense' : ''}>
      <span slot="title">\${title}</span> 
      \${filter ? '<cv-icon-button icon="filter_list" slot="actionItems"></cv-icon-button>' : ''}
      \${search ? '<cv-icon-button icon="search" slot="actionItems"></cv-icon-button>' : ''}
      \${add ? '<cv-icon-button icon="add" slot="actionItems"></cv-icon-button>' : ''}
      \${secondaryAction ? '<cv-button outlined slot="actionItems">Button text</cv-button>' : ''}
      \${action ? '<cv-button outlined slot="actionItems">Button text</cv-button>' : ''}
    </cv-toolbar>
  \`;
}`,...(s=(r=o.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const w=["Toolbar","denseToolbar"];export{t as Toolbar,w as __namedExportsOrder,q as default,o as denseToolbar};
