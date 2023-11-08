import"./circular-progress-33ef1f71.js";import"./tslib.es6-4b90b051.js";import"./aria-property-3dc182ec.js";import"./query-assigned-elements-9f88bee1.js";import"./property-f36ea729.js";import"./class-map-018c3a6a.js";import"./if-defined-c3862b86.js";import"./style-map-4c420736.js";const L={title:"Components/Circular Progress",argTypes:{progress:{control:{type:"range",max:1,min:0,step:.1}},density:{control:{type:"range",min:-8,max:50}}},args:{density:0}},m=({density:c=0,indeterminate:g,progress:d})=>{const e=document.createElement("cv-circular-progress");return e.density=c,e.indeterminate=g,e.progress=d,e.ariaLabel="Example progress bar",e},r=m.bind({});r.parameters={chromatic:{disableSnapshot:!0}};r.args={indeterminate:!0};const s=m.bind({});s.args={progress:.5};var t,n,a;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`({
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
}`,...(p=(i=s.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const S=["Indeterminate","Determinate"];export{s as Determinate,r as Indeterminate,S as __namedExportsOrder,L as default};
//# sourceMappingURL=circular-progress.stories-1199f475.js.map
