import './notebook';
import '../notebook-cell/notebook-cell';

export default {
  title: 'Components/Notebook',
  args: {
    cells: [
      {
        code: 'print',
        language: 'python',
        outputs: [
          {
            data: {
              'text/html': `<style type="text/css">
	table {border:ridge 5px;}
	table td {border:inset 1px;}
	table tr#HeaderRow {background-color:#f1efef;}</style><table>
	<tbody><tr id="HeaderRow">
		<th>step</th>
		<th>type</th>
		<th>amount</th>
		<th>nameOrig</th>
		<th>oldbalanceOrig</th>
		<th>newbalanceOrig</th>
		<th>nameDest</th>
		<th>oldbalanceDest</th>
		<th>newbalanceDest</th>
		<th>isFraud</th>
		<th>isFlaggedFraud</th>
		<th>txn_id</th>
	</tr>
	<tr>
		<td>2</td>
		<td>PAYMENT</td>
		<td>1156.11</td>
		<td>C549049813</td>
		<td>9044.0</td>
		<td>7887.89</td>
		<td>M1729958231</td>
		<td>0.0</td>
		<td>0.0</td>
		<td>0</td>
		<td>0</td>
		<td>37882</td>
	</tr>
	<tr>
		<td>1</td>
		<td>CASH_IN</td>
		<td>839300.36</td>
		<td>C896134613</td>
		<td>4776368.76</td>
		<td>5615669.12</td>
		<td>C1023714065</td>
		<td>2383291.2</td>
		<td>1412484.09</td>
		<td>0</td>
		<td>0</td>
		<td>26747</td>
	</tr>
	<tr>
		<td>4</td>
		<td>PAYMENT</td>
		<td>736.76</td>
		<td>C1923626523</td>
		<td>1120.0</td>
		<td>383.24</td>
		<td>M910658510</td>
		<td>0.0</td>
		<td>0.0</td>
		<td>0</td>
		<td>0</td>
		<td>38900</td>
	</tr>
	<tr>
		<td>1</td>
		<td>CASH_OUT</td>
		<td>598674.03</td>
		<td>C1272115420</td>
		<td>0.0</td>
		<td>0.0</td>
		<td>C985934102</td>
		<td>1184203.57</td>
		<td>971418.91</td>
		<td>0</td>
		<td>0</td>
		<td>6647</td>
	</tr>
	<tr>
		<td>2</td>
		<td>CASH_IN</td>
		<td>111692.26</td>
		<td>C1475331837</td>
		<td>8014144.64</td>
		<td>8125836.9</td>
		<td>C1432687668</td>
		<td>122624.0</td>
		<td>0.0</td>
		<td>0</td>
		<td>0</td>
		<td>16639</td>
	</tr>
</tbody></table>`,
            },
            metadata: {},
            output_type: 'display_data',
          },
        ],
        errors: ['Could not load data.'],
        timesExecuted: 0,
      },
      {
        code: 'select * from table_name;',
        language: 'sql',
        outputs: [{ data: { 'text/markdown': 'heres some output' } }],
        inputs: [{ prompt: 'enter password', password: true }],
        loading: true,
      },
      {
        code: `
## Create and Populate Tables
        
Tables are created and populated using SQL`,
        language: 'markdown',
        outputs: [
          {
            data: {
              'text/markdown': `
## Create and Populate Tables
        
Tables are created and populated using SQL`,
            },
          },
        ],
      },
    ],
    cellTypes: [
      { type: 'markdown', name: 'Markdown' },
      { type: 'code', name: 'Code' },
    ],
    cellType: 'code',
    labels: {
      run: 'Run cell',
      add: 'Add cell',
      addCodeCell: 'Add code cell',
      addMarkdownCell: 'Add marldown cell',
      cellInputPlaceholder: 'Press enter',
      cellType: 'Cell type',
      cut: 'Cut cell',
      copy: 'Copy cell',
      paste: 'Paste cell',
      delete: 'Delete cell',
    },
  },
};

const Template = ({ cells, cellType, cellTypes, labels }) => {
  const notebookContainer = document.createElement('div');
  notebookContainer.style.width = '60vw';
  notebookContainer.style.height = '50vh';
  const notebook = document.createElement('cv-notebook');
  notebook.cells = cells;
  notebook.cellTypes = cellTypes;
  notebook.cellType = cellType;
  notebook.labels = labels;
  notebookContainer.appendChild(notebook);
  return notebookContainer;
};
export const Basic = Template.bind({});
