import"./select-DnX2CG2T.js";import"./typography-BHFGcuk9.js";import"./list-item-EZYiye02.js";import"./button-_PqhMK-p.js";import"./divider-B9-DEYML.js";import"./icon-1XQe7S_h.js";import"./icon-lockup-DJXH7FJb.js";import"./query-assigned-elements-BJdb4KNY.js";import"./if-defined-dAx6j6jI.js";import"./class-map-LmxYoNzI.js";import"./directive-CvdRHFdJ.js";import"./tslib.es6-X4n3o5C8.js";import"./mwc-line-ripple-directive-DW7x_YQk.js";import"./base-element-BG6oFIG9.js";import"./utils-sZhlDiu_.js";import"./query-pFbEai1B.js";import"./observer-D8jHVEI7.js";import"./state-CGn7W7VL.js";import"./style-map-CNNK6hz8.js";import"./mwc-icon-ClXlKBjv.js";import"./form-element-XdRIvKOk.js";import"./event-options-CZVCfsC0.js";import"./query-assigned-nodes-BxERp_Ow.js";import"./ripple-handlers-_TDZG32v.js";import"./aria-property-BYXgNswj.js";const ee={title:"Components/Select",argTypes:{outlined:{control:"boolean"},disabled:{control:"boolean"}},args:{outlined:!0,disabled:!1,required:!1,label:"",value:"",validationMessage:"This Field is Required",helper:"",icon:"",naturalMenuWidth:!1,fixedMenuPosition:!1,validateOnInitialRender:!1},tags:["autodocs"]},c=({icon:e,outlined:r,required:d,helper:t,disabled:p,validationMessage:i})=>`
        <cv-select
            label="${r?"outlined":"filled"}"
            ${i?`validationMessage="${i}"`:""}
            ${r?"outlined":""}
            ${e?`icon="${e}"`:null}
            ${t?`helper="${t}"`:null}
            ${d?"required":null}
            ${p?"disabled":null}>
            <cv-list-item selected></cv-list-item>
            <cv-list-item ${e?'graphic="icon"':null} value="1">Item 0</cv-list-item>
            <cv-list-item ${e?'graphic="icon"':null} value="2">Item 1</cv-list-item>
            <cv-list-item ${e?'graphic="icon"':null} value="3">Item 2</cv-list-item>
            <cv-list-item ${e?'graphic="icon"':null} value="4">Item 3</cv-list-item>
        </cv-select>`,R=({icon:e,outlined:r,required:d,helper:t,disabled:p,validationMessage:i,naturalMenuWidth:I})=>`
        <cv-select
            label="${r?"outlined":"filled"}"
            ${i?`validationMessage="${i}"`:""}
            ${I?"naturalMenuWidth":""}
            twoLine
            ${r?"outlined":""}
            ${e?`icon="${e}"`:null}
            ${t?`helper="${t}"`:null}
            ${d?"required":null}
            ${p?"disabled":null}>
            <cv-icon-lockup slot="selected-secondary" icon="check" scale="caption" state="positive">online</cv-icon-lockup>
            <cv-typography scale="subtitle2" style="margin:0px 16px 10px;">Select an Item</cv-typography>
            <cv-divider flush></cv-divider>
            <cv-list-item twoline selected hasMeta ${e?'graphic="icon"':null} value="0">
            Basic user
            <cv-icon slot="graphic">check</cv-icon>
            <span slot="secondary">1 CPU, 2GB RAM</span>
            <cv-button slot="meta" label="start" outlined style="--cv-density-mode:-3; margin-left: 24px"></cv-button>
          </cv-list-item>
          <cv-list-item twoline selected ${e?'graphic="icon"':null} value="1">
            Advanced user
            <span slot="secondary">2 CPU, 4GB RAM</span>
          </cv-list-item>
          <cv-list-item twoline ${e?'graphic="icon"':null} value="2">
            Pro user
            <span slot="secondary">4 CPU, 8GB RAM</span>
          </cv-list-item>
          <cv-divider flush></cv-divider>
          <div>
            <cv-list-item graphic="icon" label="Add New" style="--mdc-theme-text-primary-on-background:var(--mdc-theme-primary);--mdc-theme-text-icon-on-background:var(--mdc-theme-primary);">
              <cv-icon slot="graphic">add</cv-icon>
              Add New
            </cv-list-item>
          </div>
        </cv-select>`,a={render:c},l={render:c,args:{required:!0}},s={render:c,args:{icon:"event"}},n={render:c,args:{helper:"Helper Text"}},o={render:R,args:{icon:"power",required:!0,naturalMenuWidth:!0}};var m,u,v;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: Template
}`,...(v=(u=a.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var g,h,$;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: Template,
  args: {
    required: true
  }
}`,...($=(h=l.parameters)==null?void 0:h.docs)==null?void 0:$.source}}};var b,y,x;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: Template,
  args: {
    icon: 'event'
  }
}`,...(x=(y=s.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var f,M,T;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: Template,
  args: {
    helper: 'Helper Text'
  }
}`,...(T=(M=n.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};var q,w,A;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: Advanced,
  args: {
    icon: 'power',
    required: true,
    naturalMenuWidth: true
  }
}`,...(A=(w=o.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};const re=["Main","Required","Icon","HelperText","twoLine"];export{n as HelperText,s as Icon,a as Main,l as Required,re as __namedExportsOrder,ee as default,o as twoLine};
