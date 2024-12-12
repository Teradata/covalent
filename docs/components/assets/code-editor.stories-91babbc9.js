import"./code-editor-cdcec08e.js";import"./query-assigned-elements-9f88bee1.js";import"./property-f36ea729.js";import"./async-directive-ee28bedc.js";import"./directive-helpers-67cb89d8.js";import"./directive-12249aa5.js";import"./index-53921170.js";import"./iframe-89cca691.js";import"../sb-preview/runtime.js";const c=`
SELECT * FROM load_to_teradata (
    ON (
    SELECT 'class' AS class_col,
            'variable' AS variable_col,
            'type' AS type_col,
            category,
            cnt,
            'sum' AS sum_col,
            'sumSq',
            'totalCnt'
    FROM aster_nb_modelSC
    )
    tdpid ('sdt12432.labs.teradata.com')
    username ('sample_user')
    password ('sample_user')
    target_table ('td_nb_modelSC')
);
`,v={title:"Components/Code Editor",args:{theme:"cv-light",code:c,language:"sql",disableScroll:!1}},i=({theme:r,language:s,code:l,disableScroll:d})=>`
  <div style="width: 800px; height: 100%">
    <cv-code-editor language="${s}" theme="${r}" code="${l}" ${d?"disableScroll":""}>
    </cv-code-editor>
  </div>
   `,e=i.bind();var t,o,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`({
  theme,
  language,
  code,
  disableScroll
}) => {
  return \`
  <div style="width: 800px; height: 100%">
    <cv-code-editor language="\${language}" theme="\${theme}" code="\${code}" \${disableScroll ? 'disableScroll' : ''}>
    </cv-code-editor>
  </div>
   \`;
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const C=["Basic"];export{e as Basic,C as __namedExportsOrder,v as default};
