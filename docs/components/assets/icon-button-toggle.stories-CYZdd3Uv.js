import"./icon-button-toggle-EZGAqWOU.js";import{i as t}from"./material-codepoints-D7h_Yloo.js";import"./query-assigned-elements-CymsZmtQ.js";import"./property-jaip2ZBL.js";import"./tslib.es6-B8g9kRRR.js";import"./mwc-icon-button.css-Fu8EP9K0.js";import"./ripple-handlers-Gu4a3Vem.js";import"./base-element-CJeya0gi.js";import"./utils-DQt7ZoY7.js";import"./state-C-wh0DpU.js";import"./query-BNmDdGNL.js";import"./class-map-DSF43RfV.js";import"./directive-CF8sV3Lr.js";import"./style-map-DpiegmRE.js";import"./aria-property-BYXgNswj.js";import"./event-options-Dr5E6kGq.js";import"./if-defined-GlF589cx.js";const k={title:"Components/Icon Button Toggle",argTypes:{onIcon:{control:"select",options:Object.keys(t)},offIcon:{control:"select",options:Object.keys(t)}},args:{onIcon:"flashlight_on",offIcon:"flashlight_off",disabled:!1,toggledOn:!1}},p=({disabled:c,onIcon:i,offIcon:s,toggledOn:l})=>`
    <cv-icon-button-toggle onIcon="${i}" offIcon="${s}"${c?" disabled":""}${l?" toggledOn":""}>
    </cv-icon-button-toggle>`,o=p.bind({});var n,e,r;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`({
  disabled,
  onIcon,
  offIcon,
  toggledOn
}) => {
  return \`
    <cv-icon-button-toggle onIcon="\${onIcon}" offIcon="\${offIcon}"\${disabled ? \` disabled\` : \`\`}\${toggledOn ? ' toggledOn' : ''}>
    </cv-icon-button-toggle>\`;
}`,...(r=(e=o.parameters)==null?void 0:e.docs)==null?void 0:r.source}}};const x=["Basic"];export{o as Basic,x as __namedExportsOrder,k as default};
