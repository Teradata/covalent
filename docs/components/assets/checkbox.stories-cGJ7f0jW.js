import"./checkbox-DnqsDmY1.js";import"./formfield-C_bQQyjc.js";import"./query-assigned-elements-XF8sHqwE.js";import"./mwc-checkbox.css-CZQ9hadF.js";import"./tslib.es6-CilhkYUw.js";import"./ripple-handlers-CwFC0uxg.js";import"./base-element-CGkZ9Caz.js";import"./utils-DQt7ZoY7.js";import"./state-DigO7a43.js";import"./query-BIWRq3i5.js";import"./class-map-j_UyOF6B.js";import"./directive-CF8sV3Lr.js";import"./style-map-BvUKPc5V.js";import"./aria-property-BYXgNswj.js";import"./form-element-BmV-oK_I.js";import"./event-options-C2Dj4usW.js";import"./if-defined-a0dakvOI.js";import"./observer-D8jHVEI7.js";import"./query-assigned-nodes-B6dODpMo.js";const w={title:"Components/Checkbox",argTypes:{}},v=({label:e="Bananas",disabled:c})=>`<cv-checkbox
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
}`,...(h=(m=l.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};const z=["Basic","Disabled","WithLabel"];export{n as Basic,a as Disabled,l as WithLabel,z as __namedExportsOrder,w as default};
