import"./circular-progress-yvfMitWj.js";import"./tslib.es6-X4n3o5C8.js";import"./aria-property-BYXgNswj.js";import"./query-assigned-elements-BJdb4KNY.js";import"./class-map-LmxYoNzI.js";import"./directive-CvdRHFdJ.js";import"./if-defined-dAx6j6jI.js";import"./style-map-CNNK6hz8.js";const g=({density:m=0,indeterminate:p,progress:d,closed:l})=>{const r=document.createElement("cv-circular-progress");return r.density=m,r.indeterminate=p,r.progress=d,r.closed=l,r.ariaLabel="Example progress bar",r},P={title:"Components/Circular Progress",argTypes:{progress:{control:{type:"range",max:1,min:0,step:.1}},density:{control:{type:"range",min:-8,max:50}},closed:{control:{type:"boolean"}}},args:{density:0,closed:!1},tags:["autodocs"],render:g},e={parameters:{chromatic:{disableSnapshot:!0}},args:{indeterminate:!0}},s={args:{progress:.5}};var t,a,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  parameters: {
    // disables Chromatic's snapshotting on a story level
    chromatic: {
      disableSnapshot: true
    }
  },
  args: {
    indeterminate: true
  }
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};var n,i,c;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    progress: 0.5
  }
}`,...(c=(i=s.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const _=["Indeterminate","Determinate"];export{s as Determinate,e as Indeterminate,_ as __namedExportsOrder,P as default};
