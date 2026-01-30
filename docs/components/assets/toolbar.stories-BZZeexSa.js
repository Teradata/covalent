import"./toolbar-w76mbf6v.js";import"./button-ADBjHWlY.js";import"./icon-button-DIHzEZC4.js";import"./query-assigned-elements-BJdb4KNY.js";import"./mwc-top-app-bar-base-C3czOyFE.js";import"./tslib.es6-C-hQhb2A.js";import"./base-element-C3CkHPn4.js";import"./utils-DQt7ZoY7.js";import"./query-pFbEai1B.js";import"./class-map-LmxYoNzI.js";import"./directive-CvdRHFdJ.js";import"./mwc-icon-BGUO1vKj.js";import"./ripple-handlers-CLC5WHP1.js";import"./state-CGn7W7VL.js";import"./style-map-CNNK6hz8.js";import"./aria-property-BYXgNswj.js";import"./event-options-CZVCfsC0.js";import"./if-defined-dAx6j6jI.js";import"./mwc-icon-button.css-DLV-hkFx.js";const q={title:"Components/Toolbar",args:{title:"Page title",dense:!1,filter:!0,search:!0,add:!0,secondaryAction:!0,action:!0},parameters:{layout:"fullscreen"}},t=({dense:a,title:l,filter:u,search:d,add:m,secondaryAction:b,action:p})=>`
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
