import"./action-ribbon-Btu7LDQO.js";import"./button-_PqhMK-p.js";import"./icon-1XQe7S_h.js";import"./icon-button-BLwa0yFi.js";import"./query-assigned-elements-BJdb4KNY.js";import"./utils-sZhlDiu_.js";import"./observer-D8jHVEI7.js";import"./foundation-D59LkgK_.js";import"./tslib.es6-X4n3o5C8.js";import"./foundation-D9HcNlNd.js";import"./class-map-LmxYoNzI.js";import"./directive-CvdRHFdJ.js";import"./query-pFbEai1B.js";import"./mwc-icon-ClXlKBjv.js";import"./ripple-handlers-_TDZG32v.js";import"./base-element-BG6oFIG9.js";import"./state-CGn7W7VL.js";import"./style-map-CNNK6hz8.js";import"./aria-property-BYXgNswj.js";import"./event-options-CZVCfsC0.js";import"./if-defined-dAx6j6jI.js";import"./mwc-icon-button.css-DLV-hkFx.js";const ve={title:"Components/Action Ribbon",parameters:{layout:"fullscreen"},argTypes:{labelText:{control:"text"},state:{control:"select",options:["active","negative","positive","caution"]},icon:{control:"text"},iconAriaLabel:{control:"text"},centered:{control:"boolean"}},tags:["autodocs"]},t=({labelText:r="No changes",state:e,icon:n,iconAriaLabel:p,centered:H=!1,saveDisabled:J=!1})=>`
    <cv-action-ribbon
      labelText="${r}"
      ${e?`state="${e}"`:""}
      ${n?`icon="${n}"`:""}
      ${p?`iconAriaLabel="${p}"`:""}
      ${H?"centered":""}>
      <cv-button slot="action-items" outlined>Cancel</cv-button>
      <cv-button slot="action-items" ${J?"disabled":""} raised>Save</cv-button>
    </cv-action-ribbon>`,a={name:"Default / inactive",render:t,args:{labelText:"No changes",saveDisabled:!0}},o={render:t,args:{state:"active",labelText:"You have unsaved changes"}},c={render:t,args:{state:"positive",labelText:"(3/3) items selected",icon:"check",iconAriaLabel:"check"}},i={render:t,args:{state:"negative",labelText:"The name field may not contain numbers",icon:"error",iconAriaLabel:"error",saveDisabled:!0}},s={render:t,args:{state:"caution",labelText:"These changes will increase your monthly spending rate",icon:"warning",iconAriaLabel:"warning"}},l={render:t,args:{state:"active",labelText:"Centered action ribbon",centered:!0}},d={render:t,args:{labelText:"Running...",saveDisabled:!0}},b={render:t,args:{state:"disabled",labelText:"Queued",saveDisabled:!0}},u={name:"Bulk selection default / inactive",render:({labelText:r="0 items selected",state:e,centered:n=!1})=>`
      <cv-action-ribbon
        labelText="${r}"
        ${e?`state="${e}"`:""}
        ${n?"centered":""}>
        <cv-icon-button slot="action-items" icon="filter_list"></cv-icon-button>
        <cv-icon-button slot="action-items" icon="search"></cv-icon-button>
        <cv-icon-button slot="action-items" icon="delete"></cv-icon-button>
      </cv-action-ribbon>`,args:{labelText:"0 items selected"}},m={name:"Bulk selection active",render:({labelText:r="1 item selected",state:e,centered:n=!1})=>`
      <cv-action-ribbon
        labelText="${r}"
        ${e?`state="${e}"`:""}
        ${n?"centered":""}>
        <cv-icon-button slot="action-items" icon="delete"></cv-icon-button>
      </cv-action-ribbon>`,args:{state:"active",labelText:"1 item selected"}};var v,g,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Default / inactive',
  render: renderActionRibbon,
  args: {
    labelText: 'No changes',
    saveDisabled: true
  }
}`,...(x=(g=a.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var T,$,h;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: renderActionRibbon,
  args: {
    state: 'active',
    labelText: 'You have unsaved changes'
  }
}`,...(h=($=o.parameters)==null?void 0:$.docs)==null?void 0:h.source}}};var A,f,S;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: renderActionRibbon,
  args: {
    state: 'positive',
    labelText: '(3/3) items selected',
    icon: 'check',
    iconAriaLabel: 'check'
  }
}`,...(S=(f=c.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var R,k,D;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: renderActionRibbon,
  args: {
    state: 'negative',
    labelText: 'The name field may not contain numbers',
    icon: 'error',
    iconAriaLabel: 'error',
    saveDisabled: true
  }
}`,...(D=(k=i.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var L,y,B;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: renderActionRibbon,
  args: {
    state: 'caution',
    labelText: 'These changes will increase your monthly spending rate',
    icon: 'warning',
    iconAriaLabel: 'warning'
  }
}`,...(B=(y=s.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var C,N,w;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: renderActionRibbon,
  args: {
    state: 'active',
    labelText: 'Centered action ribbon',
    centered: true
  }
}`,...(w=(N=l.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var _,P,I;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: renderActionRibbon,
  args: {
    labelText: 'Running...',
    saveDisabled: true
  }
}`,...(I=(P=d.parameters)==null?void 0:P.docs)==null?void 0:I.source}}};var Q,Y,E;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: renderActionRibbon,
  args: {
    state: 'disabled',
    labelText: 'Queued',
    saveDisabled: true
  }
}`,...(E=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:E.source}}};var O,j,q;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Bulk selection default / inactive',
  render: ({
    labelText = '0 items selected',
    state,
    centered = false
  }) => {
    return \`
      <cv-action-ribbon
        labelText="\${labelText}"
        \${state ? \`state="\${state}"\` : ''}
        \${centered ? 'centered' : ''}>
        <cv-icon-button slot="action-items" icon="filter_list"></cv-icon-button>
        <cv-icon-button slot="action-items" icon="search"></cv-icon-button>
        <cv-icon-button slot="action-items" icon="delete"></cv-icon-button>
      </cv-action-ribbon>\`;
  },
  args: {
    labelText: '0 items selected'
  }
}`,...(q=(j=u.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var z,F,G;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Bulk selection active',
  render: ({
    labelText = '1 item selected',
    state,
    centered = false
  }) => {
    return \`
      <cv-action-ribbon
        labelText="\${labelText}"
        \${state ? \`state="\${state}"\` : ''}
        \${centered ? 'centered' : ''}>
        <cv-icon-button slot="action-items" icon="delete"></cv-icon-button>
      </cv-action-ribbon>\`;
  },
  args: {
    state: 'active',
    labelText: '1 item selected'
  }
}`,...(G=(F=m.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};const ge=["Neutral","Active","Positive","Negative","Caution","Centered","Loading","Pending","BulkSelectionInactive","BulkSelectionActive"];export{o as Active,m as BulkSelectionActive,u as BulkSelectionInactive,s as Caution,l as Centered,d as Loading,i as Negative,a as Neutral,b as Pending,c as Positive,ge as __namedExportsOrder,ve as default};
