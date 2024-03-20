import"./action-ribbon-95462f78.js";import"./button-c60ecbef.js";import"./icon-33ce3398.js";import"./query-assigned-elements-9f88bee1.js";import"./utils-529e1a6d.js";import"./observer-1f401936.js";import"./foundation-ebc4a482.js";import"./tslib.es6-6921e62d.js";import"./foundation-402d6c96.js";import"./class-map-018c3a6a.js";import"./property-f36ea729.js";import"./query-3e91a3b8.js";import"./mwc-icon-4afc0ea5.js";import"./ripple-handlers-32cb331f.js";import"./base-element-cae00a28.js";import"./state-2a0073ff.js";import"./style-map-4c420736.js";import"./aria-property-3dc182ec.js";import"./event-options-b5830ec0.js";import"./if-defined-c3862b86.js";const I={title:"Components/Action Ribbon",parameters:{layout:"fullscreen"},argTypes:{label:{control:"text"},icon:{control:"text"}}},n=({label:x="No changes",color:N,icon:i,saveDisabled:f=!1})=>`
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
}`,...(S=(D=a.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};const J=["Neutral","Active","Positive","Negative","Caution"];export{o as Active,a as Caution,t as Negative,n as Neutral,e as Positive,J as __namedExportsOrder,I as default};
