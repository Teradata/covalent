// Example Content
import * as tableContent from "../../../../components/stories/demos/table.content.html";
import * as tableRowSelectionContent from "../../../../components/stories/demos/table-row-selection.content.html";
import * as tablePagination from "../../../../components/stories/demos/table-pagination.content.html";
import * as tableProgressIndicator from "../../../../components/stories/demos/table-progress-indicator.content.html";
import * as tableColumnSorting from "../../../../components/stories/demos/table-column-sorting.content.html";

export default {
  title: 'Components/Data Table',
  parameters: {
//    layout: "fullscreen",
  }
};

export const Basic = ({}) => tableContent;
export const RowSelection = ({}) => tableRowSelectionContent;
export const WithPagination = ({}) => tablePagination;
export const WithColumnSorting = ({}) => tableColumnSorting;
export const ProgressIndicator = ({}) => tableProgressIndicator;

