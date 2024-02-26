import"./button-a3a71502.js";import"./query-assigned-elements-9f88bee1.js";import"./tslib.es6-6921e62d.js";import"./mwc-icon-4afc0ea5.js";import"./ripple-handlers-32cb331f.js";import"./base-element-cae00a28.js";import"./utils-529e1a6d.js";import"./property-f36ea729.js";import"./state-2a0073ff.js";import"./query-3e91a3b8.js";import"./class-map-018c3a6a.js";import"./style-map-4c420736.js";import"./aria-property-3dc182ec.js";import"./event-options-b5830ec0.js";import"./if-defined-c3862b86.js";const H={title:"Components/Button",args:{label:"Button",icon:"houseboat",showIcon:!1,trailingIcon:!1,disabled:!1,dense:!1,isNegative:!1,isPrimary:!1}},t=({label:v,showIcon:o,trailingIcon:h,icon:a,style:w,disabled:N,dense:P,isNegative:f,isPrimary:B})=>`<cv-button id="myButton"
                      label="${v}"
                      ${o&&h?"trailingIcon":""}
                      ${o&&a?`icon="${a}"`:""}
                      ${P?"dense":""}
                      ${N?"disabled":""}
                      ${w}
                      class="${f?"negative":""} ${B?"primary":""}"
         </cv-button>`,n=t.bind({});n.args={style:"raised"};const e=t.bind({});e.args={style:"outlined"};const i=t.bind({});i.args={style:"text"};const s=t.bind({});s.args={dense:!0,style:"raised"};var r,c,l;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`({
  label,
  showIcon,
  trailingIcon,
  icon,
  style,
  disabled,
  dense,
  isNegative,
  isPrimary
}) => {
  return \`<cv-button id="myButton"
                      label="\${label}"
                      \${showIcon && trailingIcon ? \`trailingIcon\` : ''}
                      \${showIcon && icon ? \`icon="\${icon}"\` : ''}
                      \${dense ? 'dense' : ''}
                      \${disabled ? 'disabled' : ''}
                      \${style}
                      class="\${isNegative ? \`negative\` : ''} \${isPrimary ? \`primary\` : ''}"
         </cv-button>\`;
}`,...(l=(c=n.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,m,$;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`({
  label,
  showIcon,
  trailingIcon,
  icon,
  style,
  disabled,
  dense,
  isNegative,
  isPrimary
}) => {
  return \`<cv-button id="myButton"
                      label="\${label}"
                      \${showIcon && trailingIcon ? \`trailingIcon\` : ''}
                      \${showIcon && icon ? \`icon="\${icon}"\` : ''}
                      \${dense ? 'dense' : ''}
                      \${disabled ? 'disabled' : ''}
                      \${style}
                      class="\${isNegative ? \`negative\` : ''} \${isPrimary ? \`primary\` : ''}"
         </cv-button>\`;
}`,...($=(m=e.parameters)==null?void 0:m.docs)==null?void 0:$.source}}};var b,u,p;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`({
  label,
  showIcon,
  trailingIcon,
  icon,
  style,
  disabled,
  dense,
  isNegative,
  isPrimary
}) => {
  return \`<cv-button id="myButton"
                      label="\${label}"
                      \${showIcon && trailingIcon ? \`trailingIcon\` : ''}
                      \${showIcon && icon ? \`icon="\${icon}"\` : ''}
                      \${dense ? 'dense' : ''}
                      \${disabled ? 'disabled' : ''}
                      \${style}
                      class="\${isNegative ? \`negative\` : ''} \${isPrimary ? \`primary\` : ''}"
         </cv-button>\`;
}`,...(p=(u=i.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var g,y,I;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`({
  label,
  showIcon,
  trailingIcon,
  icon,
  style,
  disabled,
  dense,
  isNegative,
  isPrimary
}) => {
  return \`<cv-button id="myButton"
                      label="\${label}"
                      \${showIcon && trailingIcon ? \`trailingIcon\` : ''}
                      \${showIcon && icon ? \`icon="\${icon}"\` : ''}
                      \${dense ? 'dense' : ''}
                      \${disabled ? 'disabled' : ''}
                      \${style}
                      class="\${isNegative ? \`negative\` : ''} \${isPrimary ? \`primary\` : ''}"
         </cv-button>\`;
}`,...(I=(y=s.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};const J=["Contained","Outlined","Text","dense"];export{n as Contained,e as Outlined,i as Text,J as __namedExportsOrder,H as default,s as dense};
