import"./linear-progress-DDNSfc0f.js";import"./query-assigned-elements-BJdb4KNY.js";import"./tslib.es6-X4n3o5C8.js";import"./aria-property-BYXgNswj.js";import"./state-CGn7W7VL.js";import"./query-pFbEai1B.js";import"./class-map-LmxYoNzI.js";import"./directive-CvdRHFdJ.js";import"./if-defined-dAx6j6jI.js";import"./style-map-CNNK6hz8.js";const _={title:"Components/Linear Progress",parameters:{layout:"padded",chromatic:{disableSnapshot:!0}},argTypes:{progress:{control:{type:"range",max:1,min:0,step:.1}},buffer:{control:{type:"range",max:1,min:0,step:.1}},reverse:{control:"boolean"}},tags:["autodocs"]},m=({indeterminate:g,buffer:c,progress:d,reverse:u})=>{const r=document.createElement("cv-linear-progress");return r.indeterminate=g,r.buffer=c,r.progress=d,r.reverse=u,r.ariaLabel="Example progress bar",r},e=m.bind({});e.args={indeterminate:!0};const s=m.bind({});s.args={progress:.5,buffer:.5};var a,n,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`({
  indeterminate,
  buffer,
  progress,
  reverse
}) => {
  const progressBar = document.createElement('cv-linear-progress');
  progressBar.indeterminate = indeterminate;
  progressBar.buffer = buffer;
  progressBar.progress = progress;
  progressBar.reverse = reverse;
  progressBar.ariaLabel = 'Example progress bar';
  return progressBar;
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var t,p,i;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`({
  indeterminate,
  buffer,
  progress,
  reverse
}) => {
  const progressBar = document.createElement('cv-linear-progress');
  progressBar.indeterminate = indeterminate;
  progressBar.buffer = buffer;
  progressBar.progress = progress;
  progressBar.reverse = reverse;
  progressBar.ariaLabel = 'Example progress bar';
  return progressBar;
}`,...(i=(p=s.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};const h=["Indeterminate","Determinate"];export{s as Determinate,e as Indeterminate,h as __namedExportsOrder,_ as default};
