import"./code-editor-C1TsaIF4.js";import"./query-assigned-elements-BJdb4KNY.js";import"./async-directive-0v26byF-.js";import"./directive-helpers-7tzC9zVi.js";import"./directive-CvdRHFdJ.js";import"./index-BrLBe1JS.js";import"./iframe-70f2BeM_.js";const c=`
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
`,b={title:"Components/Code Editor",args:{theme:"cv-light",code:c,language:"sql",disableScroll:!1}},i=({theme:r,language:s,code:l,disableScroll:d})=>`
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
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const h=["Basic"];export{e as Basic,h as __namedExportsOrder,b as default};
