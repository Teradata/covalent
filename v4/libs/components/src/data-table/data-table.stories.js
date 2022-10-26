// Example Content
import * as tableContent from '../../stories/demos/table.content.html';
import * as tableRowSelectionContent from '../../stories/demos/table-row-selection.content.html';
import * as tablePagination from '../../stories/demos/table-pagination.content.html';
import * as tableProgressIndicator from '../../stories/demos/table-progress-indicator.content.html';
import * as tableColumnSorting from '../../stories/demos/table-column-sorting.content.html';

import '!style-loader!css-loader!sass-loader!./data-table.stories.scss';

export default {
  title: 'Components/Data Table',
  parameters: {
    //    layout: "fullscreen",
  },
};

export const Basic = ({}) => tableContent;
export const RowSelection = ({}) => tableRowSelectionContent;
export const WithPagination = ({}) => tablePagination;
export const WithColumnSorting = ({}) => tableColumnSorting;
export const ProgressIndicator = ({}) => tableProgressIndicator;
