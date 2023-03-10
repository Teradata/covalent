import '@material/mwc-top-app-bar';
import '@material/mwc-top-app-bar-fixed';
import '@material/mwc-button';
import '@material/mwc-icon-button';

// Example Content
import loremIpsumContent from './lorem-ipsum.content.html?raw';
import tableContent from './table.content.html?raw';
import tableRowSelectionContent from './table-row-selection.content.html?raw';

const iconButtons = `
        <cv-icon-button icon="filter_list" slot="actionItems"></cv-icon-button>
        <cv-icon-button icon="search" slot="actionItems"></cv-icon-button>
        <cv-icon-button icon="add" slot="actionItems"></cv-icon-button>`;

const buttons = `<cv-button label="Buttons" slot="actionItems" ></cv-button>
    <cv-button outlined label="Buttons" slot="actionItems" ></cv-button>`;

export default (
  {
    title = 'App Bar Title',
    centerTitle,
    dense,
    prominent,
    showContent,
    showActionItems,
  } = {},
  { parameters } = {}
) => {
  const AppBarComponentElem = parameters?.fixed
    ? 'cv-top-app-bar-fixed'
    : 'cv-top-app-bar';
  const actionItems = showActionItems === 'buttons' ? buttons : iconButtons;
  let content = loremIpsumContent;

  switch (showContent) {
    case 'table':
      content = `<div style="flex-grow: inherit;>${tableContent}</div>`;
      break;
    case 'tableWithSelection':
      content = `<div style="flex-grow: inherit;>${tableRowSelectionContent}</div>`;
      break;
    case 'loremIpsum':
    default:
      content = loremIpsumContent;
  }

  return `
      <${AppBarComponentElem}
          ${centerTitle ? 'centerTitle' : null}
          ${dense ? 'dense' : null}
          ${prominent ? 'prominent' : null}>
        <cv-icon-button slot="navigationIcon" icon="menu_open"></cv-icon-button>
        <div slot="title">${title}</div>
        ${actionItems}
       </${AppBarComponentElem}>
       ${content}
       `;
};
