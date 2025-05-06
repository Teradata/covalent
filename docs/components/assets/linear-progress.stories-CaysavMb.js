import"./linear-progress-Dn0jNsMO.js";import"./query-assigned-elements-XF8sHqwE.js";import"./tslib.es6-CilhkYUw.js";import"./aria-property-BYXgNswj.js";import"./state-DigO7a43.js";import"./query-BIWRq3i5.js";import"./class-map-j_UyOF6B.js";import"./directive-CF8sV3Lr.js";import"./if-defined-a0dakvOI.js";import"./style-map-BvUKPc5V.js";const _={title:"Components/Linear Progress",parameters:{layout:"padded",chromatic:{disableSnapshot:!0}},argTypes:{progress:{control:{type:"range",max:1,min:0,step:.1}},buffer:{control:{type:"range",max:1,min:0,step:.1}},reverse:{control:"boolean"}}},m=({indeterminate:g,buffer:c,progress:d,reverse:u})=>{const r=document.createElement("cv-linear-progress");return r.indeterminate=g,r.buffer=c,r.progress=d,r.reverse=u,r.ariaLabel="Example progress bar",r},e=m.bind({});e.args={indeterminate:!0};const s=m.bind({});s.args={progress:.5,buffer:.5};var a,n,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`({
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
