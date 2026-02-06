import"./code-snippet-RZ9P8E9h.js";import"./dialog-Dv0VeR0n.js";import"./icon-button-BLwa0yFi.js";import"./button-_PqhMK-p.js";import{D as $,U as O}from"./iframe-Ft33L4f_.js";import"./query-assigned-elements-BJdb4KNY.js";import"./query-assigned-nodes-BxERp_Ow.js";import"./class-map-LmxYoNzI.js";import"./directive-CvdRHFdJ.js";import"./tslib.es6-X4n3o5C8.js";import"./inert.esm-CIOG4SQk.js";import"./base-element-BG6oFIG9.js";import"./utils-sZhlDiu_.js";import"./observer-D8jHVEI7.js";import"./query-pFbEai1B.js";import"./ripple-handlers-_TDZG32v.js";import"./state-CGn7W7VL.js";import"./style-map-CNNK6hz8.js";import"./aria-property-BYXgNswj.js";import"./event-options-CZVCfsC0.js";import"./if-defined-dAx6j6jI.js";import"./mwc-icon-button.css-DLV-hkFx.js";import"./mwc-icon-ClXlKBjv.js";import"./preload-helper-Dp1pzeXC.js";const{addons:S}=__STORYBOOK_MODULE_PREVIEW_API__,r=S.getChannel(),A=`
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
`,ne={title:"Components/Code snippet",args:{hideHeader:!1,inline:!1,label:"Example.sql",language:"sql",content:A,maxHeight:0},tags:["autodocs"]},i=({inline:a,content:D,hideHeader:T,label:M,language:x,maxHeight:y})=>(document.addEventListener("DOMContentLoaded",()=>{const c=document.querySelector("#theme-toggle");r.on($,H=>{H?c.setAttribute("icon","brightness_high"):c.setAttribute("icon","brightness_4")}),c.addEventListener("click",()=>{r.emit(O)})},{once:!0}),`
    <cv-code-snippet
        label="${M}"
        maxHeight="${y}"
        language="${x}"
        ${T?"hideHeader":""}
        ${a?"inline":""}>
    <cv-icon-button slot="actionItems" id="theme-toggle"></cv-icon-button>
    <cv-icon-button slot="actionItems" icon="content_copy"></cv-icon-button>
    ${D}
    </cv-code-snippet>`),n=i.bind();n.args={language:"sql",content:A};const t=i.bind();t.args={maxHeight:250};const o=i.bind();o.args={hideHeader:!0};const L=(...a)=>`
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
        ${i(...a)}
        <cv-button outlined slot="primaryAction">Export</cv-button>
        <cv-button slot="secondaryAction">Close</cv-button>
    </cv-dialog>
    `,e=L.bind();e.args={inline:!0};e.parameters={docs:{inlineStories:!1}};var s,l,d;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`({
  inline,
  content,
  hideHeader,
  label,
  language,
  maxHeight
}) => {
  document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('#theme-toggle');

    // listen to DARK_MODE event
    channel.on(DARK_MODE_EVENT_NAME, darkMode => {
      if (darkMode) {
        themeToggle.setAttribute('icon', 'brightness_high');
      } else {
        themeToggle.setAttribute('icon', 'brightness_4');
      }
    });
    themeToggle.addEventListener('click', () => {
      channel.emit(UPDATE_DARK_MODE_EVENT_NAME);
    });
  }, {
    once: true
  });
  return \`
    <cv-code-snippet
        label="\${label}"
        maxHeight="\${maxHeight}"
        language="\${language}"
        \${hideHeader ? 'hideHeader' : ''}
        \${inline ? 'inline' : ''}>
    <cv-icon-button slot="actionItems" id="theme-toggle"></cv-icon-button>
    <cv-icon-button slot="actionItems" icon="content_copy"></cv-icon-button>
    \${content}
    </cv-code-snippet>\`;
}`,...(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var m,g,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`({
  inline,
  content,
  hideHeader,
  label,
  language,
  maxHeight
}) => {
  document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('#theme-toggle');

    // listen to DARK_MODE event
    channel.on(DARK_MODE_EVENT_NAME, darkMode => {
      if (darkMode) {
        themeToggle.setAttribute('icon', 'brightness_high');
      } else {
        themeToggle.setAttribute('icon', 'brightness_4');
      }
    });
    themeToggle.addEventListener('click', () => {
      channel.emit(UPDATE_DARK_MODE_EVENT_NAME);
    });
  }, {
    once: true
  });
  return \`
    <cv-code-snippet
        label="\${label}"
        maxHeight="\${maxHeight}"
        language="\${language}"
        \${hideHeader ? 'hideHeader' : ''}
        \${inline ? 'inline' : ''}>
    <cv-icon-button slot="actionItems" id="theme-toggle"></cv-icon-button>
    <cv-icon-button slot="actionItems" icon="content_copy"></cv-icon-button>
    \${content}
    </cv-code-snippet>\`;
}`,...(p=(g=t.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var u,h,_;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`({
  inline,
  content,
  hideHeader,
  label,
  language,
  maxHeight
}) => {
  document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('#theme-toggle');

    // listen to DARK_MODE event
    channel.on(DARK_MODE_EVENT_NAME, darkMode => {
      if (darkMode) {
        themeToggle.setAttribute('icon', 'brightness_high');
      } else {
        themeToggle.setAttribute('icon', 'brightness_4');
      }
    });
    themeToggle.addEventListener('click', () => {
      channel.emit(UPDATE_DARK_MODE_EVENT_NAME);
    });
  }, {
    once: true
  });
  return \`
    <cv-code-snippet
        label="\${label}"
        maxHeight="\${maxHeight}"
        language="\${language}"
        \${hideHeader ? 'hideHeader' : ''}
        \${inline ? 'inline' : ''}>
    <cv-icon-button slot="actionItems" id="theme-toggle"></cv-icon-button>
    <cv-icon-button slot="actionItems" icon="content_copy"></cv-icon-button>
    \${content}
    </cv-code-snippet>\`;
}`,...(_=(h=o.parameters)==null?void 0:h.docs)==null?void 0:_.source}}};var b,v,E;e.parameters={...e.parameters,docs:{...(b=e.parameters)==null?void 0:b.docs,source:{originalSource:`(...args) => {
  return \`
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
        \${Template(...args)}
        <cv-button outlined slot="primaryAction">Export</cv-button>
        <cv-button slot="secondaryAction">Close</cv-button>
    </cv-dialog>
    \`;
}`,...(E=(v=e.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};const te=["Basic","Scrollable","HiddenHeader","Dialog"];export{n as Basic,e as Dialog,o as HiddenHeader,t as Scrollable,te as __namedExportsOrder,ne as default};
