import"./alert-4cfff5e5.js";import"./query-assigned-elements-9f88bee1.js";import"./utils-529e1a6d.js";import"./observer-1f401936.js";import"./foundation-ebc4a482.js";import"./tslib.es6-6921e62d.js";import"./foundation-402d6c96.js";import"./class-map-4e4d6bc9.js";import"./directive-12249aa5.js";import"./property-f36ea729.js";import"./query-3e91a3b8.js";const A={title:"Components/Alert",parameters:{layout:"padded"},argTypes:{state:{options:["neutral","active","positive","negative","caution"],control:{type:"select"}},actionElement:{options:["button","close icon","none"],control:{type:"select"}}},args:{title:"Alert title",description:"Alert description",state:"active",actionElement:"button"}},e=({title:u,description:m,state:i,icon:t,actionElement:o,inline:v})=>{switch(i){case"positive":t="check";break;case"negative":t="error";break;case"caution":t="warning";break;case"active":default:t="info"}return`
        <cv-alert
          titleText="${u}"
          descriptionText="${m}"
          state="${i}"
          ${t?`icon="${t}"`:""}
          ${t?`iconAriaLabel="${t}"`:""}
          ${v?"inline":""}>
          ${o==="button"?'<cv-button slot="action-items">Button Text</cv-button>':""}
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
          \${actionElement === 'button' ? \`<cv-button slot="action-items">Button Text</cv-button>\` : ''}
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
          \${actionElement === 'button' ? \`<cv-button slot="action-items">Button Text</cv-button>\` : ''}
          \${actionElement === 'close icon' ? \`<cv-icon-button slot="action-items" icon="close"></cv-icon-button>\` : ''}
        </cv-alert>\`;
}`,...(p=(l=n.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const y=["PageLevel","Inline"];export{n as Inline,e as PageLevel,y as __namedExportsOrder,A as default};
