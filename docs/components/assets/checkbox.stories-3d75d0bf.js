import"./checkbox-3f495f9c.js";import"./formfield-9ab06265.js";import"./query-assigned-elements-9f88bee1.js";import"./mwc-checkbox-base-10de1463.js";import"./tslib.es6-4b90b051.js";import"./ripple-handlers-20d146be.js";import"./base-element-cae00a28.js";import"./utils-529e1a6d.js";import"./property-f36ea729.js";import"./state-2a0073ff.js";import"./query-3e91a3b8.js";import"./class-map-018c3a6a.js";import"./style-map-4c420736.js";import"./aria-property-3dc182ec.js";import"./form-element-d2a726aa.js";import"./event-options-b5830ec0.js";import"./if-defined-c3862b86.js";import"./mwc-checkbox.css-e8d2335f.js";import"./observer-1f401936.js";import"./query-assigned-nodes-be20542b.js";const z={title:"Components/Checkbox",argTypes:{}},v=({label:e="Bananas",disabled:c})=>`<cv-checkbox
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
