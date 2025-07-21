import"./toolbar-Cil4RZN-.js";import"./button-DGgSiZo9.js";import"./icon-button-ue-vQn7Z.js";import"./query-assigned-elements-TXvH8BPC.js";import"./property-jaip2ZBL.js";import"./mwc-top-app-bar-base-mN9IG-IK.js";import"./tslib.es6-C-hQhb2A.js";import"./base-element-CYNOzLiN.js";import"./utils-DQt7ZoY7.js";import"./query-C-WWPLnw.js";import"./class-map-s1sGgw8A.js";import"./directive-CvdRHFdJ.js";import"./mwc-icon-BO_vOlXN.js";import"./ripple-handlers-Y4T00Vej.js";import"./state-C-wh0DpU.js";import"./style-map-BRLUR99k.js";import"./aria-property-BYXgNswj.js";import"./event-options-DSmr0rIs.js";import"./if-defined-BRq_wxIY.js";import"./mwc-icon-button.css-pAmZnJRH.js";const w={title:"Components/Toolbar",args:{title:"Page title",dense:!1,filter:!0,search:!0,add:!0,secondaryAction:!0,action:!0},parameters:{layout:"fullscreen"}},t=({dense:a,title:l,filter:u,search:d,add:m,secondaryAction:b,action:p})=>`
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
}`,...(s=(r=o.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const z=["Toolbar","denseToolbar"];export{t as Toolbar,z as __namedExportsOrder,w as default,o as denseToolbar};
