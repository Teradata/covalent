import"./circular-progress-C7BRKGmY.js";import"./tslib.es6-C-hQhb2A.js";import"./aria-property-BYXgNswj.js";import"./query-assigned-elements-TXvH8BPC.js";import"./property-jaip2ZBL.js";import"./class-map-s1sGgw8A.js";import"./directive-CvdRHFdJ.js";import"./if-defined-BRq_wxIY.js";import"./style-map-BRLUR99k.js";const S={title:"Components/Circular Progress",argTypes:{progress:{control:{type:"range",max:1,min:0,step:.1}},density:{control:{type:"range",min:-8,max:50}}},args:{density:0}},m=({density:c=0,indeterminate:g,progress:d})=>{const e=document.createElement("cv-circular-progress");return e.density=c,e.indeterminate=g,e.progress=d,e.ariaLabel="Example progress bar",e},r=m.bind({});r.parameters={chromatic:{disableSnapshot:!0}};r.args={indeterminate:!0};const s=m.bind({});s.args={progress:.5};var t,n,a;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`({
  density = 0,
  indeterminate,
  progress
}) => {
  const progressBar = document.createElement('cv-circular-progress');
  progressBar.density = density;
  progressBar.indeterminate = indeterminate;
  progressBar.progress = progress;
  progressBar.ariaLabel = 'Example progress bar';
  return progressBar;
}`,...(a=(n=r.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};var o,i,p;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`({
  density = 0,
  indeterminate,
  progress
}) => {
  const progressBar = document.createElement('cv-circular-progress');
  progressBar.density = density;
  progressBar.indeterminate = indeterminate;
  progressBar.progress = progress;
  progressBar.ariaLabel = 'Example progress bar';
  return progressBar;
}`,...(p=(i=s.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const _=["Indeterminate","Determinate"];export{s as Determinate,r as Indeterminate,_ as __namedExportsOrder,S as default};
