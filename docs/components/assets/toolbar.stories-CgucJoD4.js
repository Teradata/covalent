import"./toolbar-BD1Q5Z1V.js";import"./button-DL8Q-BuB.js";import"./icon-button-C19p1m3Z.js";import"./query-assigned-elements-DrVEbY-Z.js";import"./property-jaip2ZBL.js";import"./mwc-top-app-bar-base-SWMY4Cuu.js";import"./tslib.es6-BHOXe2z4.js";import"./base-element-DsKKxcfh.js";import"./utils-DQt7ZoY7.js";import"./query-BwR-Wesx.js";import"./class-map-BiVinSLa.js";import"./directive-CvdRHFdJ.js";import"./mwc-icon-BqP9gbHN.js";import"./ripple-handlers-DDpyjNEg.js";import"./state-BvMmCZpn.js";import"./style-map-CYkhWXm1.js";import"./aria-property-BYXgNswj.js";import"./event-options-DUJCy-Gh.js";import"./if-defined-BYt77_e6.js";import"./mwc-icon-button.css-BN1SKsX6.js";const w={title:"Components/Toolbar",args:{title:"Page title",dense:!1,filter:!0,search:!0,add:!0,secondaryAction:!0,action:!0},parameters:{layout:"fullscreen"}},t=({dense:a,title:l,filter:u,search:d,add:m,secondaryAction:b,action:p})=>`
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
