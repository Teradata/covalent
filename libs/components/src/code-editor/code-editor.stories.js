import './code-editor';

const sqlContent = `
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
`;

export default {
  title: 'Components/Code Editor',
  args: {
    theme: 'cv-light',
    code: sqlContent,
    language: 'sql',
    disableScroll: false,
  },
  tags: ['autodocs'],
};

const Template = ({ theme, language, code, disableScroll }) => {
  return `
  <div style="width: 800px; height: 100%">
    <cv-code-editor language="${language}" theme="${theme}" code="${code}" ${
      disableScroll ? 'disableScroll' : ''
    }>
    </cv-code-editor>
  </div>
   `;
};

export const Basic = Template.bind();
