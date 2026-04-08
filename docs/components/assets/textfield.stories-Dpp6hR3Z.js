import"./textfield-CWvtmzXh.js";import"./query-assigned-elements-BJdb4KNY.js";import"./textfield-CGdfnacv.js";import"./tslib.es6-X4n3o5C8.js";import"./mwc-line-ripple-directive-DW7x_YQk.js";import"./base-element-BG6oFIG9.js";import"./utils-sZhlDiu_.js";import"./query-pFbEai1B.js";import"./class-map-LmxYoNzI.js";import"./directive-CvdRHFdJ.js";import"./form-element-XdRIvKOk.js";import"./observer-D8jHVEI7.js";import"./state-CGn7W7VL.js";import"./event-options-CZVCfsC0.js";import"./if-defined-dAx6j6jI.js";import"./directive-helpers-7tzC9zVi.js";import"./circular-progress-yvfMitWj.js";import"./aria-property-BYXgNswj.js";import"./style-map-CNNK6hz8.js";const oe={title:"Components/Text field",argTypes:{style:{options:["outlined","filled"],control:{type:"radio"}}},args:{style:"outlined",disabled:!1,loading:!1,loaderDensity:-6},tags:["autodocs"]},e=({icon:s,iconTrailing:U,label:W,style:t,disabled:k,required:E,helper:c,loading:O,loaderDensity:u,prefix:$,suffix:f})=>`
        <cv-textfield 
            label="${W??t}"
            ${t}
            ${U&&s?`iconTrailing="${s}"`:s?`icon="${s}"`:null}
            ${c?`helper="${c}"`:null}
            ${k?"disabled":null}
            ${E?"required":null}
            ${O?"loading":null}
            ${u?`loaderDensity="${u}"`:""}
            ${$?`prefix="${$}"`:""}
            ${f?`suffix="${f}"`:""}
            >
        </cv-textfield>`,d=e.bind({}),n=e.bind({});n.args={required:!0};const i=e.bind({});i.args={icon:"houseboat",iconTrailing:!1};const l=e.bind({});l.args={label:"Click to see helper text",helper:"Helper Text"};const r=e.bind({});r.args={label:"Loading state",icon:"person",loading:!0,loaderDensity:-6,iconTrailing:!1};const o=e.bind({});o.args={label:"Price",suffix:"USD"};const a=e.bind({});a.args={label:"",prefix:"$",suffix:"USD"};var p,x,g;d.parameters={...d.parameters,docs:{...(p=d.parameters)==null?void 0:p.docs,source:{originalSource:`({
  icon,
  iconTrailing,
  label,
  style,
  disabled,
  required,
  helper,
  loading,
  loaderDensity,
  prefix,
  suffix
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
            \${prefix ? \`prefix="\${prefix}"\` : ''}
            \${suffix ? \`suffix="\${suffix}"\` : ''}
            >
        </cv-textfield>\`;
}`,...(g=(x=d.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var b,y,m;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`({
  icon,
  iconTrailing,
  label,
  style,
  disabled,
  required,
  helper,
  loading,
  loaderDensity,
  prefix,
  suffix
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
            \${prefix ? \`prefix="\${prefix}"\` : ''}
            \${suffix ? \`suffix="\${suffix}"\` : ''}
            >
        </cv-textfield>\`;
}`,...(m=(y=n.parameters)==null?void 0:y.docs)==null?void 0:m.source}}};var h,D,T;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`({
  icon,
  iconTrailing,
  label,
  style,
  disabled,
  required,
  helper,
  loading,
  loaderDensity,
  prefix,
  suffix
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
            \${prefix ? \`prefix="\${prefix}"\` : ''}
            \${suffix ? \`suffix="\${suffix}"\` : ''}
            >
        </cv-textfield>\`;
}`,...(T=(D=i.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var q,v,S;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`({
  icon,
  iconTrailing,
  label,
  style,
  disabled,
  required,
  helper,
  loading,
  loaderDensity,
  prefix,
  suffix
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
            \${prefix ? \`prefix="\${prefix}"\` : ''}
            \${suffix ? \`suffix="\${suffix}"\` : ''}
            >
        </cv-textfield>\`;
}`,...(S=(v=l.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var H,L,P;r.parameters={...r.parameters,docs:{...(H=r.parameters)==null?void 0:H.docs,source:{originalSource:`({
  icon,
  iconTrailing,
  label,
  style,
  disabled,
  required,
  helper,
  loading,
  loaderDensity,
  prefix,
  suffix
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
            \${prefix ? \`prefix="\${prefix}"\` : ''}
            \${suffix ? \`suffix="\${suffix}"\` : ''}
            >
        </cv-textfield>\`;
}`,...(P=(L=r.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var _,A,B;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`({
  icon,
  iconTrailing,
  label,
  style,
  disabled,
  required,
  helper,
  loading,
  loaderDensity,
  prefix,
  suffix
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
            \${prefix ? \`prefix="\${prefix}"\` : ''}
            \${suffix ? \`suffix="\${suffix}"\` : ''}
            >
        </cv-textfield>\`;
}`,...(B=(A=o.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var C,I,R;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`({
  icon,
  iconTrailing,
  label,
  style,
  disabled,
  required,
  helper,
  loading,
  loaderDensity,
  prefix,
  suffix
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
            \${prefix ? \`prefix="\${prefix}"\` : ''}
            \${suffix ? \`suffix="\${suffix}"\` : ''}
            >
        </cv-textfield>\`;
}`,...(R=(I=a.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};const ae=["Basic","Required","Icon","HelperText","Loading","WithSuffix","PrefixAndSuffix"];export{d as Basic,l as HelperText,i as Icon,r as Loading,a as PrefixAndSuffix,n as Required,o as WithSuffix,ae as __namedExportsOrder,oe as default};
