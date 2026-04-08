import"./checkbox-BVrYe-J0.js";import"./formfield-CL_8-0nE.js";import"./query-assigned-elements-BJdb4KNY.js";import"./mwc-checkbox.css-4EIEciRr.js";import"./tslib.es6-X4n3o5C8.js";import"./ripple-handlers-_TDZG32v.js";import"./base-element-BG6oFIG9.js";import"./utils-sZhlDiu_.js";import"./state-CGn7W7VL.js";import"./query-pFbEai1B.js";import"./class-map-LmxYoNzI.js";import"./directive-CvdRHFdJ.js";import"./style-map-CNNK6hz8.js";import"./aria-property-BYXgNswj.js";import"./form-element-XdRIvKOk.js";import"./event-options-CZVCfsC0.js";import"./if-defined-dAx6j6jI.js";import"./observer-D8jHVEI7.js";import"./query-assigned-nodes-BxERp_Ow.js";const _=({label:e="Bananas",disabled:c,checked:i,indeterminate:d,reducedTouchTarget:o,value:r})=>`<cv-checkbox
                aria-label="${e}"
                ${i?"checked":null}
                ${d?"indeterminate":null}
                ${c?"disabled":null}
                ${o?"reducedTouchTarget":null}
                ${r?`value="${r}"`:null}>
            </cv-checkbox>
            <cv-checkbox
                aria-label="${e}"
                checked
                ${c?"disabled":null}
                ${o?"reducedTouchTarget":null}
                ${r?`value="${r}"`:null}>
            </cv-checkbox>
            <cv-checkbox
                aria-label="${e}"
                indeterminate
                ${c?"disabled":null}
                ${o?"reducedTouchTarget":null}
                ${r?`value="${r}"`:null}>
            </cv-checkbox>`,D=({label:e="Bananas",indeterminate:c})=>`
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
            </cv-formfield>`,y=({label:e="Bananas",disabled:c,checked:i,indeterminate:d,reducedTouchTarget:o,value:r})=>`<cv-checkbox
                aria-label="${e}"
                ${i?"checked":null}
                ${d?"indeterminate":null}
                ${c?"disabled":null}
                ${o?"reducedTouchTarget":null}
                ${r?`value="${r}"`:null}>
            </cv-checkbox>`,Q={title:"Components/Checkbox",argTypes:{checked:{control:"boolean"},indeterminate:{control:"boolean"},disabled:{control:"boolean"},reducedTouchTarget:{control:"boolean"},value:{control:"text"}},tags:["autodocs"],render:_},a={args:{checked:!0},render:y},t={args:{},render:y},n={args:{}},s={args:{disabled:!0}},l={render:D,args:{indeterminate:!0}};var m,p,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    checked: true
  },
  render: singleCheckboxTemplate
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var b,h,k;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {},
  render: singleCheckboxTemplate
}`,...(k=(h=t.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var $,g,x;n.parameters={...n.parameters,docs:{...($=n.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {}
}`,...(x=(g=n.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var v,f,T;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(T=(f=s.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var C,B,S;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: labelTemplate,
  args: {
    indeterminate: true
  }
}`,...(S=(B=l.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};const R=["Checked","Unchecked","Basic","Disabled","WithLabel"];export{n as Basic,a as Checked,s as Disabled,t as Unchecked,l as WithLabel,R as __namedExportsOrder,Q as default};
