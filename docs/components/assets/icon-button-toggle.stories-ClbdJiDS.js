import"./icon-button-toggle-b1MeLBq4.js";import{i as t}from"./material-codepoints-8gyANQCF.js";import"./query-assigned-elements-BJdb4KNY.js";import"./tslib.es6-C-hQhb2A.js";import"./mwc-icon-button.css-DLV-hkFx.js";import"./ripple-handlers-CLC5WHP1.js";import"./base-element-C3CkHPn4.js";import"./utils-DQt7ZoY7.js";import"./state-CGn7W7VL.js";import"./query-pFbEai1B.js";import"./class-map-LmxYoNzI.js";import"./directive-CvdRHFdJ.js";import"./style-map-CNNK6hz8.js";import"./aria-property-BYXgNswj.js";import"./event-options-CZVCfsC0.js";import"./if-defined-dAx6j6jI.js";const j={title:"Components/Icon Button Toggle",argTypes:{onIcon:{control:"select",options:Object.keys(t)},offIcon:{control:"select",options:Object.keys(t)}},args:{onIcon:"flashlight_on",offIcon:"flashlight_off",disabled:!1,toggledOn:!1}},a=({disabled:c,onIcon:i,offIcon:s,toggledOn:l})=>`
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
