import '../icon/icon';
import '../linear-progress/linear-progress';

// Example Content
import tableContent from '../../stories/demos/table.content.html?raw';
import tableRowSelectionContent from '../../stories/demos/table-row-selection.content.html?raw';
import tablePagination from '../../stories/demos/table-pagination.content.html?raw';
import tableProgressIndicator from '../../stories/demos/table-progress-indicator.content.html?raw';
import tableColumnSorting from '../../stories/demos/table-column-sorting.content.html?raw';

import './data-table.stories.scss';

const dataTableTemplate = ({ content }) => content;

export default {
  title: 'Components/Data Table',
  parameters: {
    //    layout: "fullscreen",
  },
  tags: ['autodocs'],
  render: dataTableTemplate,
};

export const Basic = {
  render: () => tableContent,
};

export const RowSelection = {
  render: () => tableRowSelectionContent,
};

export const WithPagination = {
  render: () => tablePagination,
};

export const WithColumnSorting = {
  render: () => tableColumnSorting,
};

export const ProgressIndicator = {
  render: () => tableProgressIndicator,
};
