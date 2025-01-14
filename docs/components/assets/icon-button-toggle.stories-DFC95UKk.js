import"./icon-button-toggle-Caw8kTTc.js";import{i as t}from"./material-codepoints-OhmxV97X.js";import"./query-assigned-elements-XF8sHqwE.js";import"./tslib.es6-B8g9kRRR.js";import"./mwc-icon-button.css-DWhRmKK6.js";import"./ripple-handlers-QIcOqcqN.js";import"./base-element-CGkZ9Caz.js";import"./utils-DQt7ZoY7.js";import"./state-DigO7a43.js";import"./query-BIWRq3i5.js";import"./class-map-j_UyOF6B.js";import"./directive-CF8sV3Lr.js";import"./style-map-BvUKPc5V.js";import"./aria-property-BYXgNswj.js";import"./event-options-C2Dj4usW.js";import"./if-defined-a0dakvOI.js";const j={title:"Components/Icon Button Toggle",argTypes:{onIcon:{control:"select",options:Object.keys(t)},offIcon:{control:"select",options:Object.keys(t)}},args:{onIcon:"flashlight_on",offIcon:"flashlight_off",disabled:!1,toggledOn:!1}},a=({disabled:c,onIcon:i,offIcon:s,toggledOn:l})=>`
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
