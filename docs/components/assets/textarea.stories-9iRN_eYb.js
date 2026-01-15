import{n as h,x as b,i as O,r as L,e as R}from"./query-assigned-elements-BJdb4KNY.js";import{_ as p}from"./tslib.es6-C-hQhb2A.js";import{T as w,l as z,s as A,a as B}from"./textfield-pUZBZozX.js";import{i as H}from"./query-pFbEai1B.js";import{o as I}from"./class-map-LmxYoNzI.js";import{l as s}from"./if-defined-dAx6j6jI.js";import"./mwc-line-ripple-directive-CtRFQWit.js";import"./base-element-C3CkHPn4.js";import"./utils-DQt7ZoY7.js";import"./directive-CvdRHFdJ.js";import"./form-element-BmZ4g8Y6.js";import"./observer-D8jHVEI7.js";import"./state-CGn7W7VL.js";import"./event-options-CZVCfsC0.js";import"./directive-helpers-7tzC9zVi.js";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const S={fromAttribute(e){return e===null?!1:e===""?!0:e},toAttribute(e){return typeof e=="boolean"?e?"":null:e}};class o extends w{constructor(){super(...arguments),this.rows=2,this.cols=20,this.charCounter=!1}render(){const r=this.charCounter&&this.maxLength!==-1,n=r&&this.charCounter==="internal",l=r&&!n,t=!!this.helper||!!this.validationMessage||l,a={"mdc-text-field--disabled":this.disabled,"mdc-text-field--no-label":!this.label,"mdc-text-field--filled":!this.outlined,"mdc-text-field--outlined":this.outlined,"mdc-text-field--end-aligned":this.endAligned,"mdc-text-field--with-internal-counter":n};return b`
      <label class="mdc-text-field mdc-text-field--textarea ${I(a)}">
        ${this.renderRipple()}
        ${this.outlined?this.renderOutline():this.renderLabel()}
        ${this.renderInput()}
        ${this.renderCharCounter(n)}
        ${this.renderLineRipple()}
      </label>
      ${this.renderHelperText(t,l)}
    `}renderInput(){const r=this.label?"label":void 0,n=this.minLength===-1?void 0:this.minLength,l=this.maxLength===-1?void 0:this.maxLength,t=this.autocapitalize?this.autocapitalize:void 0;return b`
      <textarea
          aria-labelledby=${s(r)}
          class="mdc-text-field__input"
          .value="${z(this.value)}"
          rows="${this.rows}"
          cols="${this.cols}"
          ?disabled="${this.disabled}"
          placeholder="${this.placeholder}"
          ?required="${this.required}"
          ?readonly="${this.readOnly}"
          minlength="${s(n)}"
          maxlength="${s(l)}"
          name="${s(this.name===""?void 0:this.name)}"
          inputmode="${s(this.inputMode)}"
          autocapitalize="${s(t)}"
          @input="${this.handleInputChange}"
          @blur="${this.onInputBlur}">
      </textarea>`}}p([H("textarea")],o.prototype,"formElement",void 0);p([h({type:Number})],o.prototype,"rows",void 0);p([h({type:Number})],o.prototype,"cols",void 0);p([h({converter:S})],o.prototype,"charCounter",void 0);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */const U=O`.mdc-text-field{height:100%}.mdc-text-field__input{resize:none}`;var E=Object.getOwnPropertyDescriptor,D=(e,r,n,l)=>{for(var t=l>1?void 0:l?E(r,n):r,a=e.length-1,$;a>=0;a--)($=e[a])&&(t=$(t)||t);return t};let c=class extends o{};c.styles=[A,U,O`${L(B)}`];c=D([R("cv-textarea")],c);const ee={title:"Components/Text area",argTypes:{style:{options:["outlined","filled"],control:{type:"radio"}}},args:{style:"outlined",disabled:!1}},m=({label:e,style:r,disabled:n,required:l,helper:t})=>`
        <cv-textarea 
            label="${e??r}"
            ${r}
            ${t?`helper="${t}"`:null}
            ${n?"disabled":null}
            ${l?"required":null}>
        </cv-textarea>`,u=m.bind({}),i=m.bind({});i.args={required:!0};const d=m.bind({});d.args={label:"Click to see helper text",helper:"Helper Text"};var x,f,y;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`({
  label,
  style,
  disabled,
  required,
  helper
}) => {
  return \`
        <cv-textarea 
            label="\${label ?? style}"
            \${style}
            \${helper ? \`helper="\${helper}"\` : null}
            \${disabled ? \`disabled\` : null}
            \${required ? \`required\` : null}>
        </cv-textarea>\`;
}`,...(y=(f=u.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var g,v,C;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`({
  label,
  style,
  disabled,
  required,
  helper
}) => {
  return \`
        <cv-textarea 
            label="\${label ?? style}"
            \${style}
            \${helper ? \`helper="\${helper}"\` : null}
            \${disabled ? \`disabled\` : null}
            \${required ? \`required\` : null}>
        </cv-textarea>\`;
}`,...(C=(v=i.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var q,_,T;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`({
  label,
  style,
  disabled,
  required,
  helper
}) => {
  return \`
        <cv-textarea 
            label="\${label ?? style}"
            \${style}
            \${helper ? \`helper="\${helper}"\` : null}
            \${disabled ? \`disabled\` : null}
            \${required ? \`required\` : null}>
        </cv-textarea>\`;
}`,...(T=(_=d.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};const te=["Basic","Required","HelperText"];export{u as Basic,d as HelperText,i as Required,te as __namedExportsOrder,ee as default};
