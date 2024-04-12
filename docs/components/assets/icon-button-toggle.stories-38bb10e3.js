import"./icon-button-toggle-478b48f8.js";import{i as n}from"./material-codepoints-6ade1b53.js";import"./query-assigned-elements-9f88bee1.js";import"./tslib.es6-6921e62d.js";import"./ripple-handlers-32cb331f.js";import"./base-element-cae00a28.js";import"./utils-529e1a6d.js";import"./property-f36ea729.js";import"./state-2a0073ff.js";import"./query-3e91a3b8.js";import"./class-map-018c3a6a.js";import"./style-map-4c420736.js";import"./aria-property-3dc182ec.js";import"./event-options-b5830ec0.js";import"./if-defined-c3862b86.js";const O={title:"Components/Icon Button Toggle",argTypes:{onIcon:{control:"select",options:Object.keys(n)},offIcon:{control:"select",options:Object.keys(n)}},args:{onIcon:"flashlight_on",offIcon:"flashlight_off",disabled:!1,on:!1}},p=({disabled:r,onIcon:i,offIcon:s,on:a})=>`
    <cv-icon-button-toggle onIcon="${i}" offIcon="${s}"${r?" disabled":""}${a?" on":""}>
    </cv-icon-button-toggle>`,o=p.bind({});var t,e,c;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`({
  disabled,
  onIcon,
  offIcon,
  on
}) => {
  return \`
    <cv-icon-button-toggle onIcon="\${onIcon}" offIcon="\${offIcon}"\${disabled ? \` disabled\` : \`\`}\${on ? ' on' : ''}>
    </cv-icon-button-toggle>\`;
}`,...(c=(e=o.parameters)==null?void 0:e.docs)==null?void 0:c.source}}};const j=["Basic"];export{o as Basic,j as __namedExportsOrder,O as default};
