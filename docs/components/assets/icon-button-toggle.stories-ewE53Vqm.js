import"./icon-button-toggle-B3z3MppX.js";import{i as t}from"./material-codepoints-D7h_Yloo.js";import"./query-assigned-elements-DrVEbY-Z.js";import"./property-jaip2ZBL.js";import"./tslib.es6-BHOXe2z4.js";import"./mwc-icon-button.css-BN1SKsX6.js";import"./ripple-handlers-DDpyjNEg.js";import"./base-element-DsKKxcfh.js";import"./utils-DQt7ZoY7.js";import"./state-BvMmCZpn.js";import"./query-BwR-Wesx.js";import"./class-map-BiVinSLa.js";import"./directive-CvdRHFdJ.js";import"./style-map-CYkhWXm1.js";import"./aria-property-BYXgNswj.js";import"./event-options-DUJCy-Gh.js";import"./if-defined-BYt77_e6.js";const k={title:"Components/Icon Button Toggle",argTypes:{onIcon:{control:"select",options:Object.keys(t)},offIcon:{control:"select",options:Object.keys(t)}},args:{onIcon:"flashlight_on",offIcon:"flashlight_off",disabled:!1,toggledOn:!1}},p=({disabled:c,onIcon:i,offIcon:s,toggledOn:l})=>`
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
