import '../icon/icon';
import '../linear-progress/linear-progress';

// Example Content
import tableContent from '../../stories/demos/table.content.html?raw';
import tableRowSelectionContent from '../../stories/demos/table-row-selection.content.html?raw';
import tablePagination from '../../stories/demos/table-pagination.content.html?raw';
import tableProgressIndicator from '../../stories/demos/table-progress-indicator.content.html?raw';
import tableColumnSorting from '../../stories/demos/table-column-sorting.content.html?raw';

import './data-table.stories.scss';

export default {
  title: 'Components/Data Table',
  parameters: {
    //    layout: "fullscreen",
  },
  tags: ['autodocs'],
};

export const Basic = ({}) => tableContent;
export const RowSelection = ({}) => tableRowSelectionContent;
export const WithPagination = ({}) => tablePagination;
export const WithColumnSorting = ({}) => tableColumnSorting;
export const ProgressIndicator = ({}) => tableProgressIndicator;
