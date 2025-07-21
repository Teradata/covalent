import"./code-editor-BA1bhgQk.js";import"./query-assigned-elements-TXvH8BPC.js";import"./property-jaip2ZBL.js";import"./async-directive-BZjgK-vP.js";import"./directive-helpers-DW6YEbpk.js";import"./directive-CvdRHFdJ.js";import"./index-CPkT-W8K.js";import"./iframe-HlqL7uOK.js";const c=`
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
`,h={title:"Components/Code Editor",args:{theme:"cv-light",code:c,language:"sql",disableScroll:!1}},i=({theme:r,language:s,code:l,disableScroll:d})=>`
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
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const v=["Basic"];export{e as Basic,v as __namedExportsOrder,h as default};
