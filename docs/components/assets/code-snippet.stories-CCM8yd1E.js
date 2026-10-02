import"./code-snippet-D5xrxgtu.js";import"./dialog--F__cg2q.js";import"./icon-button-CeuGj9q1.js";import"./button-C8Dr7l4U.js";import{D as w,U as C}from"./iframe-DTN11ufB.js";import"./query-assigned-elements-BJdb4KNY.js";import"./query-assigned-nodes-BxERp_Ow.js";import"./class-map-LmxYoNzI.js";import"./directive-CvdRHFdJ.js";import"./tslib.es6-BHOXe2z4.js";import"./inert.esm-CIOG4SQk.js";import"./base-element-C3CkHPn4.js";import"./utils-DQt7ZoY7.js";import"./observer-D8jHVEI7.js";import"./query-pFbEai1B.js";import"./ripple-handlers-CbzjdAP9.js";import"./state-CGn7W7VL.js";import"./style-map-CNNK6hz8.js";import"./aria-property-BYXgNswj.js";import"./event-options-CZVCfsC0.js";import"./if-defined-dAx6j6jI.js";import"./mwc-icon-button.css-DLV-hkFx.js";import"./mwc-icon-BZDiTMPV.js";import"./preload-helper-Dp1pzeXC.js";const{addons:H}=__STORYBOOK_MODULE_PREVIEW_API__,i=H.getChannel(),M=`
SELECT * FROM load_to_teradata (
    ON (
    SELECT "class" AS class_col,
            "variable" AS variable_col,
            "type" AS type_col,
            category,
            cnt,
            "sum" AS sum_col,
            "sumSq",
            "totalCnt"
    FROM aster_nb_modelSC
    )
    tdpid ('sdt12432.labs.teradata.com')
    username ('sample_user')
    password ('sample_user')
    target_table ('td_nb_modelSC')
);
`,N=({content:a,label:f,language:x,hideHeader:y,inline:D,skipTrim:B,maxHeight:L})=>(document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelector("#theme-toggle");i.on(w,O=>{O?s.setAttribute("icon","brightness_high"):s.setAttribute("icon","brightness_4")}),s.addEventListener("click",()=>{i.emit(C)})},{once:!0}),`
    <cv-code-snippet
      label="${f}"
      maxHeight="${L}"
      language="${x}"
      ${y?"hideHeader":""}
      ${D?"inline":""}
      ${B?"skipTrim":""}
    ><cv-icon-button slot="actionItems" id="theme-toggle"
    ></cv-icon-button><cv-icon-button
    slot="actionItems" icon="content_copy"
    ></cv-icon-button>${a}</cv-code-snippet>`),k=a=>`
    <style>
    cv-code-snippet {
        margin:8px -24px -36px;
    }
    cv-code-snippet::part(container) {
        padding-left: 8px;
        padding-right: 8px;
    }
    cv-code-snippet::part(header) {
        padding-left: 24px;
    }
    </style>
    <cv-dialog heading="Lorem ipsum dolor sit amet" open>
        <cv-typography scale="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor consectetur quis velit donec vel integer diam. Nisl pretium egestas ultrices facilisis sed amet et. Odio elementum ut eu magnis at ullamcorper euismod.</cv-typography>
        ${N(a)}
        <cv-button outlined slot="primaryAction">Export</cv-button>
        <cv-button slot="secondaryAction">Close</cv-button>
    </cv-dialog>
    `,se={title:"Components/Code snippet",args:{hideHeader:!1,inline:!1,skipTrim:!1,label:"Explain plan",language:"sql",content:M,maxHeight:0},tags:["autodocs"],render:N},e={args:{language:"sql",content:M}},t={args:{maxHeight:250}},o={args:{hideHeader:!0}},r={args:{content:`  1) First, we lock TABLE_NAME in DB_NAME for

     access, and we lock TABLE_NAME2 in DB_NAME2 for access.

  2) Next, we do an all-AMPs JOIN step in DB_NAME from

     TABLE_NAME by way of an all-rows scan with no
`,language:"plaintext",skipTrim:!0}},n={render:k,args:{inline:!0},parameters:{docs:{inlineStories:!1}}};var c,l,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    language: 'sql',
    content: sqlContent
  }
}`,...(p=(l=e.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,d,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    maxHeight: 250
  }
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var g,_,E;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    hideHeader: true
  }
}`,...(E=(_=o.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var A,b,h;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    content: '  1) First, we lock TABLE_NAME in DB_NAME for\\n\\n     access, and we lock TABLE_NAME2 in DB_NAME2 for access.\\n\\n  2) Next, we do an all-AMPs JOIN step in DB_NAME from\\n\\n     TABLE_NAME by way of an all-rows scan with no\\n',
    language: 'plaintext',
    skipTrim: true
  }
}`,...(h=(b=r.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var S,v,T;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: dialogTemplate,
  args: {
    inline: true
  },
  parameters: {
    docs: {
      inlineStories: false
    }
  }
}`,...(T=(v=n.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};const ie=["Basic","Scrollable","HiddenHeader","SkipTrim","Dialog"];export{e as Basic,n as Dialog,o as HiddenHeader,t as Scrollable,r as SkipTrim,ie as __namedExportsOrder,se as default};
