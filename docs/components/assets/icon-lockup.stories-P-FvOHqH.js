import"./icon-lockup-bh8nzeg9.js";import"./circular-progress-yvfMitWj.js";import"./query-assigned-elements-BJdb4KNY.js";import"./state-CGn7W7VL.js";import"./class-map-LmxYoNzI.js";import"./directive-CvdRHFdJ.js";import"./typography-cb1uvqFc.js";import"./icon-1XQe7S_h.js";import"./mwc-icon-ClXlKBjv.js";import"./tslib.es6-X4n3o5C8.js";import"./aria-property-BYXgNswj.js";import"./if-defined-dAx6j6jI.js";import"./style-map-CNNK6hz8.js";const M={title:"Components/Icon lockup",argTypes:{scale:{options:["headline1","headline2","headline3","headline4","headline5","headline6","subtitle1","subtitle2","button","caption","overline","body1","body2"],control:{type:"select"}},state:{options:["primary","positive","negative","caution",null],control:{type:"select"}}},args:{covalentIcon:!1,filledIcon:!1,icon:"houseboat",scale:"body1",state:"null",trailingIcon:!1},tags:["autodocs"]},a=({icon:s,scale:l,trailingIcon:i,state:p,covalentIcon:x,filledIcon:B})=>`<cv-icon-lockup icon="${s}" scale="${l}"${i?" trailingIcon":""}${x?" covalentIcon":""}${B?" filledIcon":""}${p?` state=${p}`:""}>Lorem ipsum dolor sit amet</cv-icon-lockup>`,N=({scale:s,trailingIcon:l,state:i})=>`<cv-icon-lockup scale="${s}"${l?" trailingIcon":""}${i?` state=${i}`:""}>Lorem ipsum dolor sit amet
    <cv-circular-progress indeterminate slot="icon" density="-6"></cv-circular-progress>
  </cv-icon-lockup>`,r=a.bind({}),o=a.bind({});o.args={state:"primary"};const n=a.bind({});n.args={state:"positive",icon:"check"};const e=a.bind({});e.args={state:"negative",icon:"error",filledIcon:!0};const c=a.bind({});c.args={state:"caution",icon:"warning",filledIcon:!0};const t=N.bind({});t.args={state:"primary"};var m,d,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`({
  icon,
  scale,
  trailingIcon,
  state,
  covalentIcon,
  filledIcon
}) => {
  return \`<cv-icon-lockup icon="\${icon}" scale="\${scale}"\${trailingIcon ? ' trailingIcon' : ''}\${covalentIcon ? ' covalentIcon' : ''}\${filledIcon ? ' filledIcon' : ''}\${state ? \` state=\${state}\` : ''}>Lorem ipsum dolor sit amet</cv-icon-lockup>\`;
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var I,$,g;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`({
  icon,
  scale,
  trailingIcon,
  state,
  covalentIcon,
  filledIcon
}) => {
  return \`<cv-icon-lockup icon="\${icon}" scale="\${scale}"\${trailingIcon ? ' trailingIcon' : ''}\${covalentIcon ? ' covalentIcon' : ''}\${filledIcon ? ' filledIcon' : ''}\${state ? \` state=\${state}\` : ''}>Lorem ipsum dolor sit amet</cv-icon-lockup>\`;
}`,...(g=($=o.parameters)==null?void 0:$.docs)==null?void 0:g.source}}};var v,f,k;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`({
  icon,
  scale,
  trailingIcon,
  state,
  covalentIcon,
  filledIcon
}) => {
  return \`<cv-icon-lockup icon="\${icon}" scale="\${scale}"\${trailingIcon ? ' trailingIcon' : ''}\${covalentIcon ? ' covalentIcon' : ''}\${filledIcon ? ' filledIcon' : ''}\${state ? \` state=\${state}\` : ''}>Lorem ipsum dolor sit amet</cv-icon-lockup>\`;
}`,...(k=(f=n.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var b,y,L;e.parameters={...e.parameters,docs:{...(b=e.parameters)==null?void 0:b.docs,source:{originalSource:`({
  icon,
  scale,
  trailingIcon,
  state,
  covalentIcon,
  filledIcon
}) => {
  return \`<cv-icon-lockup icon="\${icon}" scale="\${scale}"\${trailingIcon ? ' trailingIcon' : ''}\${covalentIcon ? ' covalentIcon' : ''}\${filledIcon ? ' filledIcon' : ''}\${state ? \` state=\${state}\` : ''}>Lorem ipsum dolor sit amet</cv-icon-lockup>\`;
}`,...(L=(y=e.parameters)==null?void 0:y.docs)==null?void 0:L.source}}};var h,S,P;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`({
  icon,
  scale,
  trailingIcon,
  state,
  covalentIcon,
  filledIcon
}) => {
  return \`<cv-icon-lockup icon="\${icon}" scale="\${scale}"\${trailingIcon ? ' trailingIcon' : ''}\${covalentIcon ? ' covalentIcon' : ''}\${filledIcon ? ' filledIcon' : ''}\${state ? \` state=\${state}\` : ''}>Lorem ipsum dolor sit amet</cv-icon-lockup>\`;
}`,...(P=(S=c.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};var C,T,_;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`({
  scale,
  trailingIcon,
  state
}) => {
  return \`<cv-icon-lockup scale="\${scale}"\${trailingIcon ? ' trailingIcon' : ''}\${state ? \` state=\${state}\` : ''}>Lorem ipsum dolor sit amet
    <cv-circular-progress indeterminate slot="icon" density="-6"></cv-circular-progress>
  </cv-icon-lockup>\`;
}`,...(_=(T=t.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};const Q=["Basic","Primary","Positive","Negative","Caution","Loading"];export{r as Basic,c as Caution,t as Loading,e as Negative,n as Positive,o as Primary,Q as __namedExportsOrder,M as default};
