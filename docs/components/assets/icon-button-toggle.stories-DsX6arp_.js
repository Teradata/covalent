import"./icon-button-toggle-BqkjWpxD.js";import{i as t}from"./material-codepoints-8gyANQCF.js";import"./query-assigned-elements-TXvH8BPC.js";import"./property-jaip2ZBL.js";import"./tslib.es6-C-hQhb2A.js";import"./mwc-icon-button.css-pAmZnJRH.js";import"./ripple-handlers-Y4T00Vej.js";import"./base-element-CYNOzLiN.js";import"./utils-DQt7ZoY7.js";import"./state-C-wh0DpU.js";import"./query-C-WWPLnw.js";import"./class-map-s1sGgw8A.js";import"./directive-CvdRHFdJ.js";import"./style-map-BRLUR99k.js";import"./aria-property-BYXgNswj.js";import"./event-options-DSmr0rIs.js";import"./if-defined-BRq_wxIY.js";const k={title:"Components/Icon Button Toggle",argTypes:{onIcon:{control:"select",options:Object.keys(t)},offIcon:{control:"select",options:Object.keys(t)}},args:{onIcon:"flashlight_on",offIcon:"flashlight_off",disabled:!1,toggledOn:!1}},p=({disabled:c,onIcon:i,offIcon:s,toggledOn:l})=>`
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
