import{x as b,i as T,r as L,e as R}from"./query-assigned-elements-DrVEbY-Z.js";import{_ as p}from"./tslib.es6-BHOXe2z4.js";import{T as w,l as z,s as A,a as B}from"./textfield-BRZ3UZ9e.js";import{n as m}from"./property-jaip2ZBL.js";import{i as H}from"./query-BwR-Wesx.js";import{o as I}from"./class-map-BiVinSLa.js";import{l as s}from"./if-defined-BYt77_e6.js";import"./mwc-line-ripple-directive-DEMfzeHY.js";import"./base-element-DsKKxcfh.js";import"./utils-DQt7ZoY7.js";import"./directive-CvdRHFdJ.js";import"./form-element-Y8u1xKHT.js";import"./observer-D8jHVEI7.js";import"./state-BvMmCZpn.js";import"./event-options-DUJCy-Gh.js";import"./directive-helpers-BPxvgPdR.js";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const P={fromAttribute(t){return t===null?!1:t===""?!0:t},toAttribute(t){return typeof t=="boolean"?t?"":null:t}};class o extends w{constructor(){super(...arguments),this.rows=2,this.cols=20,this.charCounter=!1}render(){const r=this.charCounter&&this.maxLength!==-1,n=r&&this.charCounter==="internal",l=r&&!n,e=!!this.helper||!!this.validationMessage||l,a={"mdc-text-field--disabled":this.disabled,"mdc-text-field--no-label":!this.label,"mdc-text-field--filled":!this.outlined,"mdc-text-field--outlined":this.outlined,"mdc-text-field--end-aligned":this.endAligned,"mdc-text-field--with-internal-counter":n};return b`
      <label class="mdc-text-field mdc-text-field--textarea ${I(a)}">
        ${this.renderRipple()}
        ${this.outlined?this.renderOutline():this.renderLabel()}
        ${this.renderInput()}
        ${this.renderCharCounter(n)}
        ${this.renderLineRipple()}
      </label>
      ${this.renderHelperText(e,l)}
    `}renderInput(){const r=this.label?"label":void 0,n=this.minLength===-1?void 0:this.minLength,l=this.maxLength===-1?void 0:this.maxLength,e=this.autocapitalize?this.autocapitalize:void 0;return b`
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
          autocapitalize="${s(e)}"
          @input="${this.handleInputChange}"
          @blur="${this.onInputBlur}">
      </textarea>`}}p([H("textarea")],o.prototype,"formElement",void 0);p([m({type:Number})],o.prototype,"rows",void 0);p([m({type:Number})],o.prototype,"cols",void 0);p([m({converter:P})],o.prototype,"charCounter",void 0);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */const S=T`.mdc-text-field{height:100%}.mdc-text-field__input{resize:none}`;var U=Object.defineProperty,E=Object.getOwnPropertyDescriptor,j=(t,r,n,l)=>{for(var e=l>1?void 0:l?E(r,n):r,a=t.length-1,c;a>=0;a--)(c=t[a])&&(e=(l?c(r,n,e):c(e))||e);return l&&e&&U(r,n,e),e};let h=class extends o{};h.styles=[A,S,T`${L(B)}`];h=j([R("cv-textarea")],h);const re={title:"Components/Text area",argTypes:{style:{options:["outlined","filled"],control:{type:"radio"}}},args:{style:"outlined",disabled:!1}},$=({label:t,style:r,disabled:n,required:l,helper:e})=>`
        <cv-textarea 
            label="${t??r}"
            ${r}
            ${e?`helper="${e}"`:null}
            ${n?"disabled":null}
            ${l?"required":null}>
        </cv-textarea>`,u=$.bind({}),i=$.bind({});i.args={required:!0};const d=$.bind({});d.args={label:"Click to see helper text",helper:"Helper Text"};var x,f,y;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`({
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
}`,...(C=(v=i.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var _,q,O;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`({
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
}`,...(O=(q=d.parameters)==null?void 0:q.docs)==null?void 0:O.source}}};const ne=["Basic","Required","HelperText"];export{u as Basic,d as HelperText,i as Required,ne as __namedExportsOrder,re as default};
