import"./alert-KUZX4LQJ.js";import"./query-assigned-elements-BJdb4KNY.js";import"./utils-DQt7ZoY7.js";import"./observer-D8jHVEI7.js";import"./foundation-BmszT0UM.js";import"./tslib.es6-C-hQhb2A.js";import"./foundation-D9HcNlNd.js";import"./class-map-LmxYoNzI.js";import"./directive-CvdRHFdJ.js";import"./state-CGn7W7VL.js";import"./query-pFbEai1B.js";import"./icon-BYPYUWym.js";import"./mwc-icon-BGUO1vKj.js";const L={title:"Components/Alert",parameters:{layout:"padded"},argTypes:{state:{options:["neutral","active","positive","negative","caution"],control:{type:"select"}},actionElement:{options:["button","close icon","none"],control:{type:"select"}}},args:{title:"Alert title",description:"Alert description",state:"active",actionElement:"button"}},e=({title:u,description:m,state:i,icon:t,actionElement:o,inline:v})=>{switch(i){case"positive":t="check";break;case"negative":t="error";break;case"caution":t="warning";break;case"active":default:t="info"}return`
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
