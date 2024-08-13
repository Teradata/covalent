import"./icon-button-toggle-5afc3a79.js";import{i as t}from"./material-codepoints-6ade1b53.js";import"./query-assigned-elements-9f88bee1.js";import"./property-f36ea729.js";import"./tslib.es6-6921e62d.js";import"./ripple-handlers-4e438af8.js";import"./base-element-cae00a28.js";import"./utils-529e1a6d.js";import"./state-2a0073ff.js";import"./query-3e91a3b8.js";import"./class-map-4e4d6bc9.js";import"./directive-12249aa5.js";import"./style-map-ec903154.js";import"./aria-property-3dc182ec.js";import"./event-options-b5830ec0.js";import"./if-defined-c3862b86.js";const j={title:"Components/Icon Button Toggle",argTypes:{onIcon:{control:"select",options:Object.keys(t)},offIcon:{control:"select",options:Object.keys(t)}},args:{onIcon:"flashlight_on",offIcon:"flashlight_off",disabled:!1,toggledOn:!1}},a=({disabled:c,onIcon:i,offIcon:s,toggledOn:l})=>`
    <cv-icon-button-toggle onIcon="${i}" offIcon="${s}"${c?" disabled":""}${l?" toggledOn":""}>
    </cv-icon-button-toggle>`,o=a.bind({});var n,e,r;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`({
  disabled,
  onIcon,
  offIcon,
  toggledOn
}) => {
  return \`
    <cv-icon-button-toggle onIcon="\${onIcon}" offIcon="\${offIcon}"\${disabled ? \` disabled\` : \`\`}\${toggledOn ? ' toggledOn' : ''}>
    </cv-icon-button-toggle>\`;
}`,...(r=(e=o.parameters)==null?void 0:e.docs)==null?void 0:r.source}}};const k=["Basic"];export{o as Basic,k as __namedExportsOrder,j as default};
