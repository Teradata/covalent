import"./code-editor-Bdx6H_7D.js";import"./query-assigned-elements-XF8sHqwE.js";import"./async-directive-C13IN93l.js";import"./directive-helpers-BPGTDVDR.js";import"./directive-CF8sV3Lr.js";import"./index-CcivOJRT.js";import"./iframe-B7Op5TGh.js";import"../sb-preview/runtime.js";const c=`
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
