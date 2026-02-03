import"./checkbox-BVrYe-J0.js";import"./formfield-CL_8-0nE.js";import"./query-assigned-elements-BJdb4KNY.js";import"./mwc-checkbox.css-4EIEciRr.js";import"./tslib.es6-X4n3o5C8.js";import"./ripple-handlers-_TDZG32v.js";import"./base-element-BG6oFIG9.js";import"./utils-sZhlDiu_.js";import"./state-CGn7W7VL.js";import"./query-pFbEai1B.js";import"./class-map-LmxYoNzI.js";import"./directive-CvdRHFdJ.js";import"./style-map-CNNK6hz8.js";import"./aria-property-BYXgNswj.js";import"./form-element-XdRIvKOk.js";import"./event-options-CZVCfsC0.js";import"./if-defined-dAx6j6jI.js";import"./observer-D8jHVEI7.js";import"./query-assigned-nodes-BxERp_Ow.js";const w={title:"Components/Checkbox",argTypes:{},tags:["autodocs"]},v=({label:e="Bananas",disabled:c})=>`<cv-checkbox
                aria-label="${e}"
                ${c?"disabled":null}>
            </cv-checkbox>
            <cv-checkbox
                aria-label="${e}"
                checked
                ${c?"disabled":null}>
            </cv-checkbox>
            <cv-checkbox
                aria-label="${e}"
                indeterminate
                ${c?"disabled":null}>
            </cv-checkbox>`,p=({label:e="Bananas",indeterminate:c})=>`
            <style>
                cv-formfield {
                    display: block;
                }
                .child {
                    margin-left: 20px;
                }
            </style>
            <cv-formfield label="${e}">
                <cv-checkbox ${c?"indeterminate":null}></cv-checkbox>
            </cv-formfield>
            
            <cv-formfield label="${e}">
                <cv-checkbox class="child"></cv-checkbox>
            </cv-formfield>
            
            <cv-formfield label="${e}">
                <cv-checkbox class="child" checked></cv-checkbox>
            </cv-formfield>`,n=v.bind({}),a=v.bind({});a.args={disabled:!0};const l=p.bind({});l.args={indeterminate:!0};var r,o,i;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`({
  label = 'Bananas',
  disabled
}) => {
  return \`<cv-checkbox
                aria-label="\${label}"
                \${disabled ? \`disabled\` : null}>
            </cv-checkbox>
            <cv-checkbox
                aria-label="\${label}"
                checked
                \${disabled ? \`disabled\` : null}>
            </cv-checkbox>
            <cv-checkbox
                aria-label="\${label}"
                indeterminate
                \${disabled ? \`disabled\` : null}>
            </cv-checkbox>\`;
}`,...(i=(o=n.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var d,s,b;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`({
  label = 'Bananas',
  disabled
}) => {
  return \`<cv-checkbox
                aria-label="\${label}"
                \${disabled ? \`disabled\` : null}>
            </cv-checkbox>
            <cv-checkbox
                aria-label="\${label}"
                checked
                \${disabled ? \`disabled\` : null}>
            </cv-checkbox>
            <cv-checkbox
                aria-label="\${label}"
                indeterminate
                \${disabled ? \`disabled\` : null}>
            </cv-checkbox>\`;
}`,...(b=(s=a.parameters)==null?void 0:s.docs)==null?void 0:b.source}}};var t,m,h;l.parameters={...l.parameters,docs:{...(t=l.parameters)==null?void 0:t.docs,source:{originalSource:`({
  label = 'Bananas',
  indeterminate
}) => {
  return \`
            <style>
                cv-formfield {
                    display: block;
                }
                .child {
                    margin-left: 20px;
                }
            </style>
            <cv-formfield label="\${label}">
                <cv-checkbox \${indeterminate ? \`indeterminate\` : null}></cv-checkbox>
            </cv-formfield>
            
            <cv-formfield label="\${label}">
                <cv-checkbox class="child"></cv-checkbox>
            </cv-formfield>
            
            <cv-formfield label="\${label}">
                <cv-checkbox class="child" checked></cv-checkbox>
            </cv-formfield>\`;
}`,...(h=(m=l.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};const z=["Basic","Disabled","WithLabel"];export{n as Basic,a as Disabled,l as WithLabel,z as __namedExportsOrder,w as default};
