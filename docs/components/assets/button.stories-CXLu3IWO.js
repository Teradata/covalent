import"./button-ADBjHWlY.js";import"./query-assigned-elements-BJdb4KNY.js";import"./tslib.es6-C-hQhb2A.js";import"./mwc-icon-BGUO1vKj.js";import"./ripple-handlers-CLC5WHP1.js";import"./base-element-C3CkHPn4.js";import"./utils-DQt7ZoY7.js";import"./state-CGn7W7VL.js";import"./query-pFbEai1B.js";import"./class-map-LmxYoNzI.js";import"./directive-CvdRHFdJ.js";import"./style-map-CNNK6hz8.js";import"./aria-property-BYXgNswj.js";import"./event-options-CZVCfsC0.js";import"./if-defined-dAx6j6jI.js";const cn={title:"Components/Button",args:{label:"Button",icon:"houseboat",showIcon:!1,trailingIcon:!1,disabled:!1,dense:!1},argTypes:{style:{options:["raised","outlined"],control:{type:"select"}},color:{options:["primary","secondary","emphasis","positive","negative","caution"],control:{type:"select"}}}},n=({label:J,showIcon:d,trailingIcon:K,icon:$,style:L,color:b,disabled:M,dense:N})=>`<cv-button id="myButton"
                      label="${J}"
                      ${d&&K?"trailingIcon":""}
                      ${d&&$?`icon="${$}"`:""}
                      ${N?"dense":""}
                      ${M?"disabled":""}
                      ${L}
                      ${b?`color="${b}"`:""}>         
        </cv-button>`,o=n.bind({});o.args={style:"raised"};const e=n.bind({});e.args={style:"outlined"};const s=n.bind({});s.args={style:"text"};const r=n.bind({});r.args={style:"raised",color:"secondary"};const t=n.bind({});t.args={style:"raised",color:"emphasis"};const c=n.bind({});c.args={style:"raised",color:"caution"};const a=n.bind({});a.args={style:"raised",color:"negative"};const i=n.bind({});i.args={style:"raised",color:"positive"};const l=n.bind({});l.args={dense:!0,style:"raised"};var u,m,p;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`({
  label,
  showIcon,
  trailingIcon,
  icon,
  style,
  color,
  disabled,
  dense
}) => {
  return \`<cv-button id="myButton"
                      label="\${label}"
                      \${showIcon && trailingIcon ? \`trailingIcon\` : ''}
                      \${showIcon && icon ? \`icon="\${icon}"\` : ''}
                      \${dense ? 'dense' : ''}
                      \${disabled ? 'disabled' : ''}
                      \${style}
                      \${color ? \`color="\${color}"\` : ''}>         
        </cv-button>\`;
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var I,g,y;e.parameters={...e.parameters,docs:{...(I=e.parameters)==null?void 0:I.docs,source:{originalSource:`({
  label,
  showIcon,
  trailingIcon,
  icon,
  style,
  color,
  disabled,
  dense
}) => {
  return \`<cv-button id="myButton"
                      label="\${label}"
                      \${showIcon && trailingIcon ? \`trailingIcon\` : ''}
                      \${showIcon && icon ? \`icon="\${icon}"\` : ''}
                      \${dense ? 'dense' : ''}
                      \${disabled ? 'disabled' : ''}
                      \${style}
                      \${color ? \`color="\${color}"\` : ''}>         
        </cv-button>\`;
}`,...(y=(g=e.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var h,v,w;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`({
  label,
  showIcon,
  trailingIcon,
  icon,
  style,
  color,
  disabled,
  dense
}) => {
  return \`<cv-button id="myButton"
                      label="\${label}"
                      \${showIcon && trailingIcon ? \`trailingIcon\` : ''}
                      \${showIcon && icon ? \`icon="\${icon}"\` : ''}
                      \${dense ? 'dense' : ''}
                      \${disabled ? 'disabled' : ''}
                      \${style}
                      \${color ? \`color="\${color}"\` : ''}>         
        </cv-button>\`;
}`,...(w=(v=s.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var B,S,f;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`({
  label,
  showIcon,
  trailingIcon,
  icon,
  style,
  color,
  disabled,
  dense
}) => {
  return \`<cv-button id="myButton"
                      label="\${label}"
                      \${showIcon && trailingIcon ? \`trailingIcon\` : ''}
                      \${showIcon && icon ? \`icon="\${icon}"\` : ''}
                      \${dense ? 'dense' : ''}
                      \${disabled ? 'disabled' : ''}
                      \${style}
                      \${color ? \`color="\${color}"\` : ''}>         
        </cv-button>\`;
}`,...(f=(S=r.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var x,T,C;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`({
  label,
  showIcon,
  trailingIcon,
  icon,
  style,
  color,
  disabled,
  dense
}) => {
  return \`<cv-button id="myButton"
                      label="\${label}"
                      \${showIcon && trailingIcon ? \`trailingIcon\` : ''}
                      \${showIcon && icon ? \`icon="\${icon}"\` : ''}
                      \${dense ? 'dense' : ''}
                      \${disabled ? 'disabled' : ''}
                      \${style}
                      \${color ? \`color="\${color}"\` : ''}>         
        </cv-button>\`;
}`,...(C=(T=t.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var O,_,E;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`({
  label,
  showIcon,
  trailingIcon,
  icon,
  style,
  color,
  disabled,
  dense
}) => {
  return \`<cv-button id="myButton"
                      label="\${label}"
                      \${showIcon && trailingIcon ? \`trailingIcon\` : ''}
                      \${showIcon && icon ? \`icon="\${icon}"\` : ''}
                      \${dense ? 'dense' : ''}
                      \${disabled ? 'disabled' : ''}
                      \${style}
                      \${color ? \`color="\${color}"\` : ''}>         
        </cv-button>\`;
}`,...(E=(_=c.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var j,k,q;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`({
  label,
  showIcon,
  trailingIcon,
  icon,
  style,
  color,
  disabled,
  dense
}) => {
  return \`<cv-button id="myButton"
                      label="\${label}"
                      \${showIcon && trailingIcon ? \`trailingIcon\` : ''}
                      \${showIcon && icon ? \`icon="\${icon}"\` : ''}
                      \${dense ? 'dense' : ''}
                      \${disabled ? 'disabled' : ''}
                      \${style}
                      \${color ? \`color="\${color}"\` : ''}>         
        </cv-button>\`;
}`,...(q=(k=a.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var z,A,D;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`({
  label,
  showIcon,
  trailingIcon,
  icon,
  style,
  color,
  disabled,
  dense
}) => {
  return \`<cv-button id="myButton"
                      label="\${label}"
                      \${showIcon && trailingIcon ? \`trailingIcon\` : ''}
                      \${showIcon && icon ? \`icon="\${icon}"\` : ''}
                      \${dense ? 'dense' : ''}
                      \${disabled ? 'disabled' : ''}
                      \${style}
                      \${color ? \`color="\${color}"\` : ''}>         
        </cv-button>\`;
}`,...(D=(A=i.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var F,G,H;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`({
  label,
  showIcon,
  trailingIcon,
  icon,
  style,
  color,
  disabled,
  dense
}) => {
  return \`<cv-button id="myButton"
                      label="\${label}"
                      \${showIcon && trailingIcon ? \`trailingIcon\` : ''}
                      \${showIcon && icon ? \`icon="\${icon}"\` : ''}
                      \${dense ? 'dense' : ''}
                      \${disabled ? 'disabled' : ''}
                      \${style}
                      \${color ? \`color="\${color}"\` : ''}>         
        </cv-button>\`;
}`,...(H=(G=l.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};const an=["Contained","Outlined","Text","secondary","emphasis","caution","negative","positive","dense"];export{o as Contained,e as Outlined,s as Text,an as __namedExportsOrder,c as caution,cn as default,l as dense,t as emphasis,a as negative,i as positive,r as secondary};
