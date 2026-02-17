import"./code-snippet-Dx66EwP7.js";import"./dialog-Dv0VeR0n.js";import"./icon-button-BLwa0yFi.js";import"./button-_PqhMK-p.js";import{D as T,U as f}from"./iframe-CTJ2dUpX.js";import"./query-assigned-elements-BJdb4KNY.js";import"./query-assigned-nodes-BxERp_Ow.js";import"./class-map-LmxYoNzI.js";import"./directive-CvdRHFdJ.js";import"./tslib.es6-X4n3o5C8.js";import"./inert.esm-CIOG4SQk.js";import"./base-element-BG6oFIG9.js";import"./utils-sZhlDiu_.js";import"./observer-D8jHVEI7.js";import"./query-pFbEai1B.js";import"./ripple-handlers-_TDZG32v.js";import"./state-CGn7W7VL.js";import"./style-map-CNNK6hz8.js";import"./aria-property-BYXgNswj.js";import"./event-options-CZVCfsC0.js";import"./if-defined-dAx6j6jI.js";import"./mwc-icon-button.css-DLV-hkFx.js";import"./mwc-icon-ClXlKBjv.js";import"./preload-helper-Dp1pzeXC.js";const{addons:D}=__STORYBOOK_MODULE_PREVIEW_API__,n=D.getChannel(),E=`
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
`,S=({inline:a,content:x,hideHeader:y,label:A,language:C,maxHeight:H})=>(document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelector("#theme-toggle");n.on(T,O=>{O?s.setAttribute("icon","brightness_high"):s.setAttribute("icon","brightness_4")}),s.addEventListener("click",()=>{n.emit(f)})},{once:!0}),`
    <cv-code-snippet
        label="${A}"
        maxHeight="${H}"
        language="${C}"
        ${y?"hideHeader":""}
        ${a?"inline":""}>
    <cv-icon-button slot="actionItems" id="theme-toggle"></cv-icon-button>
    <cv-icon-button slot="actionItems" icon="content_copy"></cv-icon-button>
    ${x}
    </cv-code-snippet>`),q=a=>`
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
        ${S(a)}
        <cv-button outlined slot="primaryAction">Export</cv-button>
        <cv-button slot="secondaryAction">Close</cv-button>
    </cv-dialog>
    `,te={title:"Components/Code snippet",args:{hideHeader:!1,inline:!1,label:"Example.sql",language:"sql",content:E,maxHeight:0},tags:["autodocs"],render:S},e={args:{language:"sql",content:E}},t={args:{maxHeight:250}},o={args:{hideHeader:!0}},r={render:q,args:{inline:!0},parameters:{docs:{inlineStories:!1}}};var i,c,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    language: 'sql',
    content: sqlContent
  }
}`,...(p=(c=e.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var l,d,m;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    maxHeight: 250
  }
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,g,_;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    hideHeader: true
  }
}`,...(_=(g=o.parameters)==null?void 0:g.docs)==null?void 0:_.source}}};var b,v,h;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: dialogTemplate,
  args: {
    inline: true
  },
  parameters: {
    docs: {
      inlineStories: false
    }
  }
}`,...(h=(v=r.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const oe=["Basic","Scrollable","HiddenHeader","Dialog"];export{e as Basic,r as Dialog,o as HiddenHeader,t as Scrollable,oe as __namedExportsOrder,te as default};
