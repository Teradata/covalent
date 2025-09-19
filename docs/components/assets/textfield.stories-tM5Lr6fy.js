import"./textfield-DWCz7fQT.js";import"./query-assigned-elements-BJdb4KNY.js";import"./textfield-P3MrB3yL.js";import"./tslib.es6-C-hQhb2A.js";import"./mwc-line-ripple-directive-CtRFQWit.js";import"./base-element-C3CkHPn4.js";import"./utils-DQt7ZoY7.js";import"./query-pFbEai1B.js";import"./class-map-LmxYoNzI.js";import"./directive-CvdRHFdJ.js";import"./form-element-BmZ4g8Y6.js";import"./observer-D8jHVEI7.js";import"./state-CGn7W7VL.js";import"./event-options-CZVCfsC0.js";import"./if-defined-dAx6j6jI.js";import"./directive-helpers-7tzC9zVi.js";import"./circular-progress-LWZPy8Lw.js";import"./aria-property-BYXgNswj.js";import"./style-map-CNNK6hz8.js";const V={title:"Components/Text field",argTypes:{style:{options:["outlined","filled"],control:{type:"radio"}}},args:{style:"outlined",disabled:!1,loading:!1,loaderDensity:-6}},r=({icon:o,iconTrailing:S,label:H,style:t,disabled:L,required:_,helper:d,loading:B,loaderDensity:s})=>`
        <cv-textfield 
            label="${H??t}"
            ${t}
            ${S&&o?`iconTrailing="${o}"`:o?`icon="${o}"`:null}
            ${d?`helper="${d}"`:null}
            ${L?"disabled":null}
            ${_?"required":null}
            ${B?"loading":null}
            ${s?`loaderDensity="${s}"`:""}
            >
        </cv-textfield>`,a=r.bind({}),e=r.bind({});e.args={required:!0};const n=r.bind({});n.args={icon:"houseboat",iconTrailing:!1};const l=r.bind({});l.args={label:"Click to see helper text",helper:"Helper Text"};const i=r.bind({});i.args={label:"Loading state",icon:"person",loading:!0,loaderDensity:-6,iconTrailing:!1};var c,u,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`({
  icon,
  iconTrailing,
  label,
  style,
  disabled,
  required,
  helper,
  loading,
  loaderDensity
}) => {
  return \`
        <cv-textfield 
            label="\${label ?? style}"
            \${style}
            \${iconTrailing && icon ? \`iconTrailing="\${icon}"\` : icon ? \`icon="\${icon}"\` : null}
            \${helper ? \`helper="\${helper}"\` : null}
            \${disabled ? \`disabled\` : null}
            \${required ? \`required\` : null}
            \${loading ? 'loading' : null}
            \${loaderDensity ? \`loaderDensity="\${loaderDensity}"\` : ''}
            >
        </cv-textfield>\`;
}`,...(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var $,g,m;e.parameters={...e.parameters,docs:{...($=e.parameters)==null?void 0:$.docs,source:{originalSource:`({
  icon,
  iconTrailing,
  label,
  style,
  disabled,
  required,
  helper,
  loading,
  loaderDensity
}) => {
  return \`
        <cv-textfield 
            label="\${label ?? style}"
            \${style}
            \${iconTrailing && icon ? \`iconTrailing="\${icon}"\` : icon ? \`icon="\${icon}"\` : null}
            \${helper ? \`helper="\${helper}"\` : null}
            \${disabled ? \`disabled\` : null}
            \${required ? \`required\` : null}
            \${loading ? 'loading' : null}
            \${loaderDensity ? \`loaderDensity="\${loaderDensity}"\` : ''}
            >
        </cv-textfield>\`;
}`,...(m=(g=e.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var b,y,T;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`({
  icon,
  iconTrailing,
  label,
  style,
  disabled,
  required,
  helper,
  loading,
  loaderDensity
}) => {
  return \`
        <cv-textfield 
            label="\${label ?? style}"
            \${style}
            \${iconTrailing && icon ? \`iconTrailing="\${icon}"\` : icon ? \`icon="\${icon}"\` : null}
            \${helper ? \`helper="\${helper}"\` : null}
            \${disabled ? \`disabled\` : null}
            \${required ? \`required\` : null}
            \${loading ? 'loading' : null}
            \${loaderDensity ? \`loaderDensity="\${loaderDensity}"\` : ''}
            >
        </cv-textfield>\`;
}`,...(T=(y=n.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var h,D,f;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`({
  icon,
  iconTrailing,
  label,
  style,
  disabled,
  required,
  helper,
  loading,
  loaderDensity
}) => {
  return \`
        <cv-textfield 
            label="\${label ?? style}"
            \${style}
            \${iconTrailing && icon ? \`iconTrailing="\${icon}"\` : icon ? \`icon="\${icon}"\` : null}
            \${helper ? \`helper="\${helper}"\` : null}
            \${disabled ? \`disabled\` : null}
            \${required ? \`required\` : null}
            \${loading ? 'loading' : null}
            \${loaderDensity ? \`loaderDensity="\${loaderDensity}"\` : ''}
            >
        </cv-textfield>\`;
}`,...(f=(D=l.parameters)==null?void 0:D.docs)==null?void 0:f.source}}};var x,q,v;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`({
  icon,
  iconTrailing,
  label,
  style,
  disabled,
  required,
  helper,
  loading,
  loaderDensity
}) => {
  return \`
        <cv-textfield 
            label="\${label ?? style}"
            \${style}
            \${iconTrailing && icon ? \`iconTrailing="\${icon}"\` : icon ? \`icon="\${icon}"\` : null}
            \${helper ? \`helper="\${helper}"\` : null}
            \${disabled ? \`disabled\` : null}
            \${required ? \`required\` : null}
            \${loading ? 'loading' : null}
            \${loaderDensity ? \`loaderDensity="\${loaderDensity}"\` : ''}
            >
        </cv-textfield>\`;
}`,...(v=(q=i.parameters)==null?void 0:q.docs)==null?void 0:v.source}}};const W=["Basic","Required","Icon","HelperText","Loading"];export{a as Basic,l as HelperText,n as Icon,i as Loading,e as Required,W as __namedExportsOrder,V as default};
