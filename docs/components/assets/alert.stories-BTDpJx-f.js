import"./alert-DGpmowm9.js";import"./query-assigned-elements-XF8sHqwE.js";import"./utils-DQt7ZoY7.js";import"./observer-D8jHVEI7.js";import"./foundation-BLZCxqUg.js";import"./tslib.es6-CilhkYUw.js";import"./foundation-Cb5KEIaQ.js";import"./class-map-j_UyOF6B.js";import"./directive-CF8sV3Lr.js";import"./state-DigO7a43.js";import"./query-BIWRq3i5.js";import"./icon-D16dCIBT.js";import"./mwc-icon-BHr-cy3v.js";const L={title:"Components/Alert",parameters:{layout:"padded"},argTypes:{state:{options:["neutral","active","positive","negative","caution"],control:{type:"select"}},actionElement:{options:["button","close icon","none"],control:{type:"select"}}},args:{title:"Alert title",description:"Alert description",state:"active",actionElement:"button"}},e=({title:u,description:m,state:i,icon:t,actionElement:o,inline:v})=>{switch(i){case"positive":t="check";break;case"negative":t="error";break;case"caution":t="warning";break;case"active":default:t="info"}return`
        <cv-alert
          titleText="${u}"
          descriptionText="${m}"
          state="${i}"
          ${t?`icon="${t}"`:""}
          ${t?`iconAriaLabel="${t}"`:""}
          ${v?"inline":""}>
          ${o==="button"?'<cv-button slot="action-items">Button text</cv-button>':""}
          ${o==="close icon"?'<cv-icon-button slot="action-items" icon="close"></cv-icon-button>':""}
        </cv-alert>`},n=e.bind({});n.args={inline:!0};n.parameters={layout:"fullscreen"};var c,a,r;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`({
  title,
  description,
  state,
  icon,
  actionElement,
  inline
}) => {
  switch (state) {
    case 'positive':
      icon = 'check';
      break;
    case 'negative':
      icon = 'error';
      break;
    case 'caution':
      icon = 'warning';
      break;
    case 'active':
    default:
      icon = 'info';
  }
  return \`
        <cv-alert
          titleText="\${title}"
          descriptionText="\${description}"
          state="\${state}"
          \${icon ? \`icon="\${icon}"\` : ''}
          \${icon ? \`iconAriaLabel="\${icon}"\` : ''}
          \${inline ? \`inline\` : ''}>
          \${actionElement === 'button' ? \`<cv-button slot="action-items">Button text</cv-button>\` : ''}
          \${actionElement === 'close icon' ? \`<cv-icon-button slot="action-items" icon="close"></cv-icon-button>\` : ''}
        </cv-alert>\`;
}`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};var s,l,p;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`({
  title,
  description,
  state,
  icon,
  actionElement,
  inline
}) => {
  switch (state) {
    case 'positive':
      icon = 'check';
      break;
    case 'negative':
      icon = 'error';
      break;
    case 'caution':
      icon = 'warning';
      break;
    case 'active':
    default:
      icon = 'info';
  }
  return \`
        <cv-alert
          titleText="\${title}"
          descriptionText="\${description}"
          state="\${state}"
          \${icon ? \`icon="\${icon}"\` : ''}
          \${icon ? \`iconAriaLabel="\${icon}"\` : ''}
          \${inline ? \`inline\` : ''}>
          \${actionElement === 'button' ? \`<cv-button slot="action-items">Button text</cv-button>\` : ''}
          \${actionElement === 'close icon' ? \`<cv-icon-button slot="action-items" icon="close"></cv-icon-button>\` : ''}
        </cv-alert>\`;
}`,...(p=(l=n.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const B=["PageLevel","Inline"];export{n as Inline,e as PageLevel,B as __namedExportsOrder,L as default};
