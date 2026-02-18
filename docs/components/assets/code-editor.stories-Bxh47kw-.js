import"./query-assigned-elements-BJdb4KNY.js";import"./code-editor-BZqCWrG9.js";import"./async-directive-0v26byF-.js";import"./directive-helpers-7tzC9zVi.js";import"./directive-CvdRHFdJ.js";import"./iframe-DoGOUDFW.js";import"./preload-helper-Dp1pzeXC.js";const d=`
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
`,i=({theme:a,language:r,code:c,disableScroll:l})=>`
  <div style="width: 800px; height: 100%">
    <cv-code-editor language="${r}" theme="${a}" code="${c}" ${l?"disableScroll":""}>
    </cv-code-editor>
  </div>
   `,v={title:"Components/Code Editor",argTypes:{theme:{options:["cv-light","cv-dark","vs","vs-dark"],control:{type:"select"}}},args:{theme:"cv-light",code:d,language:"sql",disableScroll:!1},render:i,tags:["autodocs"]},e={};var t,o,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:"{}",...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const b=["Basic"];export{e as Basic,b as __namedExportsOrder,v as default};
