import"./alert-TNKN6uBM.js";import"./query-assigned-elements-BJdb4KNY.js";import"./utils-sZhlDiu_.js";import"./observer-D8jHVEI7.js";import"./foundation-D59LkgK_.js";import"./tslib.es6-X4n3o5C8.js";import"./foundation-D9HcNlNd.js";import"./class-map-LmxYoNzI.js";import"./directive-CvdRHFdJ.js";import"./state-CGn7W7VL.js";import"./query-pFbEai1B.js";import"./icon-1XQe7S_h.js";import"./mwc-icon-ClXlKBjv.js";const h={title:"Components/Alert",parameters:{layout:"padded"},argTypes:{state:{options:["neutral","active","positive","negative","caution"],control:{type:"select"}},actionElement:{options:["button","close icon","none"],control:{type:"select"}},inline:{control:{type:"boolean"}}},args:{icon:"info",state:"neutral",inline:!1,titleText:"Alert title",iconAriaLabel:"aria-label for the icon",descriptionText:"Alert description",actionElement:"button"},tags:["autodocs"]},$=({icon:r,state:o,inline:v,titleText:n,iconAriaLabel:i,descriptionText:a,actionElement:s})=>`
        <cv-alert
          ${r?`icon="${r}"`:""}
          ${o?`state="${o}"`:""}
          ${v?"inline":""}
          ${n?`titleText="${n}"`:""}
          ${i?`iconAriaLabel="${i}"`:""}
          ${a?`descriptionText="${a}"`:""}>
          ${s==="button"?'<cv-button slot="action-items">Button text</cv-button>':""}
          ${s==="close icon"?'<cv-icon-button slot="action-items" icon="close"></cv-icon-button>':""}
        </cv-alert>`,e={render:$},t={render:$,args:{inline:!0},parameters:{layout:"fullscreen"}};var c,l,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: renderAlert
}`,...(p=(l=e.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,u,d;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: renderAlert,
  args: {
    inline: true
  },
  parameters: {
    layout: 'fullscreen'
  }
}`,...(d=(u=t.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const B=["PageLevel","Inline"];export{t as Inline,e as PageLevel,B as __namedExportsOrder,h as default};
