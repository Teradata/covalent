import"./toolbar-b9b7386b.js";import"./button-c60ecbef.js";import"./icon-button-a1355932.js";import"./query-assigned-elements-9f88bee1.js";import"./property-f36ea729.js";import"./mwc-top-app-bar-base-ee02277a.js";import"./tslib.es6-6921e62d.js";import"./base-element-cae00a28.js";import"./utils-529e1a6d.js";import"./query-3e91a3b8.js";import"./class-map-018c3a6a.js";import"./mwc-icon-4afc0ea5.js";import"./ripple-handlers-32cb331f.js";import"./state-2a0073ff.js";import"./style-map-4c420736.js";import"./aria-property-3dc182ec.js";import"./event-options-b5830ec0.js";import"./if-defined-c3862b86.js";const C={title:"Components/Toolbar",args:{title:"Page title",dense:!1,filter:!0,search:!0,add:!0,secondaryAction:!0,action:!0},parameters:{layout:"fullscreen"}},t=({dense:a,title:l,filter:u,search:d,add:m,secondaryAction:b,action:p})=>`
    <cv-toolbar ${a?"dense":""}>
      <span slot="title">${l}</span> 
      ${u?'<cv-icon-button icon="filter_list" slot="actionItems"></cv-icon-button>':""}
      ${d?'<cv-icon-button icon="search" slot="actionItems"></cv-icon-button>':""}
      ${m?'<cv-icon-button icon="add" slot="actionItems"></cv-icon-button>':""}
      ${b?'<cv-button outlined slot="actionItems">BUTTON TEXT</cv-button>':""}
      ${p?'<cv-button outlined slot="actionItems">BUTTON TEXT</cv-button>':""}
    </cv-toolbar>
  `,o=t.bind({});o.args={dense:"true"};var n,c,e;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`({
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
      \${secondaryAction ? '<cv-button outlined slot="actionItems">BUTTON TEXT</cv-button>' : ''}
      \${action ? '<cv-button outlined slot="actionItems">BUTTON TEXT</cv-button>' : ''}
    </cv-toolbar>
  \`;
}`,...(e=(c=t.parameters)==null?void 0:c.docs)==null?void 0:e.source}}};var i,s,r;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`({
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
      \${secondaryAction ? '<cv-button outlined slot="actionItems">BUTTON TEXT</cv-button>' : ''}
      \${action ? '<cv-button outlined slot="actionItems">BUTTON TEXT</cv-button>' : ''}
    </cv-toolbar>
  \`;
}`,...(r=(s=o.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const P=["Toolbar","denseToolbar"];export{t as Toolbar,P as __namedExportsOrder,C as default,o as denseToolbar};
