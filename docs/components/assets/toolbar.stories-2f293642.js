import"./toolbar-02d53760.js";import"./query-assigned-elements-9f88bee1.js";import"./mwc-top-app-bar-base-b0b432c1.js";import"./tslib.es6-4b90b051.js";import"./property-f36ea729.js";import"./base-element-cae00a28.js";import"./utils-529e1a6d.js";import"./query-3e91a3b8.js";import"./class-map-018c3a6a.js";const B={title:"Components/Toolbar",args:{title:"Page title",dense:!1,filter:!0,search:!0,add:!0,secondaryAction:!0,action:!0},parameters:{layout:"fullscreen"}},t=({dense:a,title:l,filter:u,search:d,add:b,secondaryAction:v,action:m})=>`
    <cv-toolbar ${a?"dense":""}>
      <span slot="title">${l}</span> 
      ${u?'<cv-icon-button icon="filter_list" slot="actionItems"></cv-icon-button>':""}
      ${d?'<cv-icon-button icon="search" slot="actionItems"></cv-icon-button>':""}
      ${b?'<cv-icon-button icon="add" slot="actionItems"></cv-icon-button>':""}
      ${v?'<cv-button outlined slot="actionItems">BUTTON TEXT</cv-button>':""}
      ${m?'<cv-button outlined slot="actionItems">BUTTON TEXT</cv-button>':""}
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
}`,...(e=(c=t.parameters)==null?void 0:c.docs)==null?void 0:e.source}}};var s,i,r;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`({
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
}`,...(r=(i=o.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const N=["Toolbar","denseToolbar"];export{t as Toolbar,N as __namedExportsOrder,B as default,o as denseToolbar};
//# sourceMappingURL=toolbar.stories-2f293642.js.map
