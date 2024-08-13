import"./linear-progress-1441c23d.js";import"./query-assigned-elements-9f88bee1.js";import"./tslib.es6-6921e62d.js";import"./aria-property-3dc182ec.js";import"./property-f36ea729.js";import"./state-2a0073ff.js";import"./query-3e91a3b8.js";import"./class-map-4e4d6bc9.js";import"./directive-12249aa5.js";import"./if-defined-c3862b86.js";import"./style-map-ec903154.js";const h={title:"Components/Linear Progress",parameters:{layout:"padded",chromatic:{disableSnapshot:!0}},argTypes:{progress:{control:{type:"range",max:1,min:0,step:.1}},buffer:{control:{type:"range",max:1,min:0,step:.1}},reverse:{control:"boolean"}}},m=({indeterminate:g,buffer:c,progress:d,reverse:u})=>{const r=document.createElement("cv-linear-progress");return r.indeterminate=g,r.buffer=c,r.progress=d,r.reverse=u,r.ariaLabel="Example progress bar",r},e=m.bind({});e.args={indeterminate:!0};const s=m.bind({});s.args={progress:.5,buffer:.5};var a,n,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`({
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
}`,...(i=(p=s.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};const D=["Indeterminate","Determinate"];export{s as Determinate,e as Indeterminate,D as __namedExportsOrder,h as default};
