import"./checkbox-D_mqCN1H.js";import"./formfield-mu2RD6k7.js";import"./query-assigned-elements-CymsZmtQ.js";import"./mwc-checkbox.css-DI1GRVrn.js";import"./tslib.es6-B8g9kRRR.js";import"./ripple-handlers-Gu4a3Vem.js";import"./base-element-CJeya0gi.js";import"./utils-DQt7ZoY7.js";import"./property-jaip2ZBL.js";import"./state-C-wh0DpU.js";import"./query-BNmDdGNL.js";import"./class-map-DSF43RfV.js";import"./directive-CF8sV3Lr.js";import"./style-map-DpiegmRE.js";import"./aria-property-BYXgNswj.js";import"./form-element-7hdcRypm.js";import"./event-options-Dr5E6kGq.js";import"./if-defined-GlF589cx.js";import"./observer-D8jHVEI7.js";import"./query-assigned-nodes-LMAOVAfV.js";const z={title:"Components/Checkbox",argTypes:{}},v=({label:e="Bananas",disabled:c})=>`<cv-checkbox
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
            </cv-formfield>`,n=v.bind({}),a=v.bind({});a.args={disabled:!0};const l=p.bind({});l.args={indeterminate:!0};var r,i,o;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`({
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
}`,...(o=(i=n.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var d,b,s;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`({
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
}`,...(s=(b=a.parameters)==null?void 0:b.docs)==null?void 0:s.source}}};var t,m,h;l.parameters={...l.parameters,docs:{...(t=l.parameters)==null?void 0:t.docs,source:{originalSource:`({
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
}`,...(h=(m=l.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};const A=["Basic","Disabled","WithLabel"];export{n as Basic,a as Disabled,l as WithLabel,A as __namedExportsOrder,z as default};
