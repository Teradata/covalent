import"./circular-progress-yvfMitWj.js";import"./tslib.es6-X4n3o5C8.js";import"./aria-property-BYXgNswj.js";import"./query-assigned-elements-BJdb4KNY.js";import"./class-map-LmxYoNzI.js";import"./directive-CvdRHFdJ.js";import"./if-defined-dAx6j6jI.js";import"./style-map-CNNK6hz8.js";const L={title:"Components/Circular Progress",argTypes:{progress:{control:{type:"range",max:1,min:0,step:.1}},density:{control:{type:"range",min:-8,max:50}}},args:{density:0},tags:["autodocs"]},m=({density:c=0,indeterminate:g,progress:d})=>{const e=document.createElement("cv-circular-progress");return e.density=c,e.indeterminate=g,e.progress=d,e.ariaLabel="Example progress bar",e},r=m.bind({});r.parameters={chromatic:{disableSnapshot:!0}};r.args={indeterminate:!0};const s=m.bind({});s.args={progress:.5};var t,a,n;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`({
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
}`,...(n=(a=r.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var o,i,p;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`({
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
}`,...(p=(i=s.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const S=["Indeterminate","Determinate"];export{s as Determinate,r as Indeterminate,S as __namedExportsOrder,L as default};
