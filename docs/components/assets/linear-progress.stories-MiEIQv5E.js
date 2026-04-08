import"./linear-progress-DDNSfc0f.js";import"./query-assigned-elements-BJdb4KNY.js";import"./tslib.es6-X4n3o5C8.js";import"./aria-property-BYXgNswj.js";import"./state-CGn7W7VL.js";import"./query-pFbEai1B.js";import"./class-map-LmxYoNzI.js";import"./directive-CvdRHFdJ.js";import"./if-defined-dAx6j6jI.js";import"./style-map-CNNK6hz8.js";const I={title:"Components/Linear Progress",parameters:{layout:"padded",chromatic:{disableSnapshot:!0}},argTypes:{indeterminate:{control:{type:"boolean"}},progress:{control:{type:"range",max:1,min:0,step:.1}},buffer:{control:{type:"range",max:1,min:0,step:.1}},reverse:{control:"boolean"},closed:{control:{type:"boolean"}}},tags:["autodocs"]},i=l=>{const{indeterminate:c,buffer:d,progress:f,reverse:g,closed:u}=l,e=document.createElement("cv-linear-progress");return e.indeterminate=c,e.buffer=d,e.progress=f,e.reverse=g,e.closed=u,e.ariaLabel="Example progress bar",e},r={render:i,args:{indeterminate:!0,reverse:!1,closed:!1}},s={render:i,args:{progress:.5,buffer:.5,indeterminate:!1,reverse:!1,closed:!1}};var t,a,o;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: Template,
  args: {
    indeterminate: true,
    reverse: false,
    closed: false
  }
}`,...(o=(a=r.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};var n,m,p;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: Template,
  args: {
    progress: 0.5,
    buffer: 0.5,
    indeterminate: false,
    reverse: false,
    closed: false
  }
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const L=["Indeterminate","Determinate"];export{s as Determinate,r as Indeterminate,L as __namedExportsOrder,I as default};
