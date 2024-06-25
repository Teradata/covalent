import './notebook';
import '../cell/cell';

export default {
  title: 'Components/Notebook',
  args: {
    cells: [
      { code: 'print', language: 'python' },
      {
        code: 'select * from table_name;',
        language: 'sql',
        output: 'heres some output',
      },
      {
        code: `
## Create and Populate Tables
        
Tables are created and populated using SQL`,
        language: 'markdown',
      },
    ],
  },
};

const Template = ({ cells }) => {
  const notebookContainer = document.createElement('div');
  notebookContainer.style.width = '80vw';
  const notebook = document.createElement('cv-notebook');
  notebook.cells = cells;
  notebookContainer.appendChild(notebook);
  return notebookContainer;
};
export const Basic = Template.bind({});
