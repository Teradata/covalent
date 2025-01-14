import"./action-ribbon-DJyJp4Kp.js";import"./button-BjNciVgh.js";import"./icon-CtVGb6a6.js";import"./query-assigned-elements-CymsZmtQ.js";import"./utils-DQt7ZoY7.js";import"./observer-D8jHVEI7.js";import"./foundation-CyC3Z9WI.js";import"./tslib.es6-B8g9kRRR.js";import"./foundation-Cb5KEIaQ.js";import"./class-map-DSF43RfV.js";import"./directive-CF8sV3Lr.js";import"./property-jaip2ZBL.js";import"./query-BNmDdGNL.js";import"./mwc-icon-CgxFi2se.js";import"./ripple-handlers-Gu4a3Vem.js";import"./base-element-CJeya0gi.js";import"./state-C-wh0DpU.js";import"./style-map-DpiegmRE.js";import"./aria-property-BYXgNswj.js";import"./event-options-Dr5E6kGq.js";import"./if-defined-GlF589cx.js";const J={title:"Components/Action Ribbon",parameters:{layout:"fullscreen"},argTypes:{label:{control:"text"},icon:{control:"text"}}},n=({label:x="No changes",color:N,icon:i,saveDisabled:f=!1})=>`
    <cv-action-ribbon
      labelText="${x}"
      state="${N}" 
      ${i?`icon="${i}"`:null}
      ${i?`iconAriaLabel="${i}"`:null}>
      <cv-button slot="action-items" outlined>Cancel</cv-button>
      <cv-button slot="action-items" ${f?"disabled":null} raised>Save</cv-button>
    </cv-action-ribbon>`,o=n.bind({});o.args={color:"active",label:"You have unsaved changes"};const e=n.bind({});e.args={color:"positive",label:"(3/3) items selected",icon:"check"};const t=n.bind({});t.args={color:"negative",label:"The name field may not contain numbers",icon:"error",saveDisabled:!0};const a=n.bind({});a.args={color:"caution",label:"These changes will increase your monthly spending rate",icon:"warning"};var c,l,r;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`({
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
}`,...(r=(l=n.parameters)==null?void 0:l.docs)==null?void 0:r.source}}};var s,b,u;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`({
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
}`,...(u=(b=o.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var v,d,m;e.parameters={...e.parameters,docs:{...(v=e.parameters)==null?void 0:v.docs,source:{originalSource:`({
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
}`,...(m=(d=e.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,$,g;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`({
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
}`,...(g=($=t.parameters)==null?void 0:$.docs)==null?void 0:g.source}}};var h,D,S;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`({
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
}`,...(S=(D=a.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};const K=["Neutral","Active","Positive","Negative","Caution"];export{o as Active,a as Caution,t as Negative,n as Neutral,e as Positive,K as __namedExportsOrder,J as default};
