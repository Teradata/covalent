import"./action-ribbon-CpAbqEuw.js";import"./button-DOCFp5QQ.js";import"./icon-BYPYUWym.js";import"./query-assigned-elements-BJdb4KNY.js";import"./utils-DQt7ZoY7.js";import"./observer-D8jHVEI7.js";import"./foundation-BmszT0UM.js";import"./tslib.es6-C-hQhb2A.js";import"./foundation-D9HcNlNd.js";import"./class-map-LmxYoNzI.js";import"./directive-CvdRHFdJ.js";import"./query-pFbEai1B.js";import"./mwc-icon-BGUO1vKj.js";import"./ripple-handlers-CLC5WHP1.js";import"./base-element-C3CkHPn4.js";import"./state-CGn7W7VL.js";import"./style-map-CNNK6hz8.js";import"./aria-property-BYXgNswj.js";import"./event-options-CZVCfsC0.js";import"./if-defined-dAx6j6jI.js";const en={title:"Components/Action Ribbon",parameters:{layout:"fullscreen"},argTypes:{label:{control:"text"},icon:{control:"text"}}},n=({label:R="No changes",color:E,icon:s,saveDisabled:O=!1})=>`
    <cv-action-ribbon
      labelText="${R}"
      state="${E}" 
      ${s?`icon="${s}"`:null}
      ${s?`iconAriaLabel="${s}"`:null}>
      <cv-button slot="action-items" outlined>Cancel</cv-button>
      <cv-button slot="action-items" ${O?"disabled":null} raised>Save</cv-button>
    </cv-action-ribbon>`,o=n.bind({});o.args={color:"active",label:"You have unsaved changes"};const e=n.bind({});e.args={color:"positive",label:"(3/3) items selected",icon:"check"};const a=n.bind({});a.args={color:"negative",label:"The name field may not contain numbers",icon:"error",saveDisabled:!0};const t=n.bind({});t.args={color:"caution",label:"These changes will increase your monthly spending rate",icon:"warning"};const c=n.bind({});c.args={color:"loading",label:"These changes will increase your monthly spending rate",icon:"houseboat"};const i=n.bind({});i.args={color:"pending",label:"These changes will increase your monthly spending rate",icon:"houseboat"};const l=n.bind({});l.args={color:"checked",label:"These changes will increase your monthly spending rate",icon:"houseboat"};var r,b,u;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`({
  label = 'No changes',
  color,
  icon,
  saveDisabled = false
}) => {
  return \`
    <cv-action-ribbon
      labelText="\${label}"
      state="\${color}" 
      \${icon ? \`icon="\${icon}"\` : null}
      \${icon ? \`iconAriaLabel="\${icon}"\` : null}>
      <cv-button slot="action-items" outlined>Cancel</cv-button>
      <cv-button slot="action-items" \${saveDisabled ? 'disabled' : null} raised>Save</cv-button>
    </cv-action-ribbon>\`;
}`,...(u=(b=n.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var d,v,m;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`({
  label = 'No changes',
  color,
  icon,
  saveDisabled = false
}) => {
  return \`
    <cv-action-ribbon
      labelText="\${label}"
      state="\${color}" 
      \${icon ? \`icon="\${icon}"\` : null}
      \${icon ? \`iconAriaLabel="\${icon}"\` : null}>
      <cv-button slot="action-items" outlined>Cancel</cv-button>
      <cv-button slot="action-items" \${saveDisabled ? 'disabled' : null} raised>Save</cv-button>
    </cv-action-ribbon>\`;
}`,...(m=(v=o.parameters)==null?void 0:v.docs)==null?void 0:m.source}}};var p,$,g;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`({
  label = 'No changes',
  color,
  icon,
  saveDisabled = false
}) => {
  return \`
    <cv-action-ribbon
      labelText="\${label}"
      state="\${color}" 
      \${icon ? \`icon="\${icon}"\` : null}
      \${icon ? \`iconAriaLabel="\${icon}"\` : null}>
      <cv-button slot="action-items" outlined>Cancel</cv-button>
      <cv-button slot="action-items" \${saveDisabled ? 'disabled' : null} raised>Save</cv-button>
    </cv-action-ribbon>\`;
}`,...(g=($=e.parameters)==null?void 0:$.docs)==null?void 0:g.source}}};var h,D,S;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`({
  label = 'No changes',
  color,
  icon,
  saveDisabled = false
}) => {
  return \`
    <cv-action-ribbon
      labelText="\${label}"
      state="\${color}" 
      \${icon ? \`icon="\${icon}"\` : null}
      \${icon ? \`iconAriaLabel="\${icon}"\` : null}>
      <cv-button slot="action-items" outlined>Cancel</cv-button>
      <cv-button slot="action-items" \${saveDisabled ? 'disabled' : null} raised>Save</cv-button>
    </cv-action-ribbon>\`;
}`,...(S=(D=a.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var T,C,x;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`({
  label = 'No changes',
  color,
  icon,
  saveDisabled = false
}) => {
  return \`
    <cv-action-ribbon
      labelText="\${label}"
      state="\${color}" 
      \${icon ? \`icon="\${icon}"\` : null}
      \${icon ? \`iconAriaLabel="\${icon}"\` : null}>
      <cv-button slot="action-items" outlined>Cancel</cv-button>
      <cv-button slot="action-items" \${saveDisabled ? 'disabled' : null} raised>Save</cv-button>
    </cv-action-ribbon>\`;
}`,...(x=(C=t.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var N,f,A;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`({
  label = 'No changes',
  color,
  icon,
  saveDisabled = false
}) => {
  return \`
    <cv-action-ribbon
      labelText="\${label}"
      state="\${color}" 
      \${icon ? \`icon="\${icon}"\` : null}
      \${icon ? \`iconAriaLabel="\${icon}"\` : null}>
      <cv-button slot="action-items" outlined>Cancel</cv-button>
      <cv-button slot="action-items" \${saveDisabled ? 'disabled' : null} raised>Save</cv-button>
    </cv-action-ribbon>\`;
}`,...(A=(f=c.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};var y,L,w;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`({
  label = 'No changes',
  color,
  icon,
  saveDisabled = false
}) => {
  return \`
    <cv-action-ribbon
      labelText="\${label}"
      state="\${color}" 
      \${icon ? \`icon="\${icon}"\` : null}
      \${icon ? \`iconAriaLabel="\${icon}"\` : null}>
      <cv-button slot="action-items" outlined>Cancel</cv-button>
      <cv-button slot="action-items" \${saveDisabled ? 'disabled' : null} raised>Save</cv-button>
    </cv-action-ribbon>\`;
}`,...(w=(L=i.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};var k,P,_;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`({
  label = 'No changes',
  color,
  icon,
  saveDisabled = false
}) => {
  return \`
    <cv-action-ribbon
      labelText="\${label}"
      state="\${color}" 
      \${icon ? \`icon="\${icon}"\` : null}
      \${icon ? \`iconAriaLabel="\${icon}"\` : null}>
      <cv-button slot="action-items" outlined>Cancel</cv-button>
      <cv-button slot="action-items" \${saveDisabled ? 'disabled' : null} raised>Save</cv-button>
    </cv-action-ribbon>\`;
}`,...(_=(P=l.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};const an=["Neutral","Active","Positive","Negative","Caution","Loading","Pending","Checked"];export{o as Active,t as Caution,l as Checked,c as Loading,a as Negative,n as Neutral,i as Pending,e as Positive,an as __namedExportsOrder,en as default};
