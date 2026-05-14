import './toolbar';

import '../button/button';
import '../icon-button/icon-button';

export default {
  title: 'Components/Toolbar',
  args: {
    title: 'Page title',
    centerTitle: false,
    dense: false,
    prominent: false,
    scrollTarget: '',
    sticky: false,
    filter: true,
    search: true,
    add: true,
    secondaryAction: true,
    action: true,
  },
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

const toolbarTemplate = ({
  centerTitle,
  dense,
  prominent,
  scrollTarget,
  sticky,
  title,
  filter,
  search,
  add,
  secondaryAction,
  action,
}) => {
  return `
    <cv-toolbar
      ${centerTitle ? 'centerTitle' : ''}
      ${dense ? 'dense' : ''}
      ${prominent ? 'prominent' : ''}
      ${scrollTarget ? `scrollTarget="${scrollTarget}"` : ''}
      ${sticky ? 'sticky' : ''}
    >
      <span slot="title">${title}</span> 
      ${
        filter
          ? '<cv-icon-button icon="filter_list" slot="actionItems"></cv-icon-button>'
          : ''
      }
      ${
        search
          ? '<cv-icon-button icon="search" slot="actionItems"></cv-icon-button>'
          : ''
      }
      ${
        add
          ? '<cv-icon-button icon="add" slot="actionItems"></cv-icon-button>'
          : ''
      }
      ${
        secondaryAction
          ? '<cv-button outlined slot="actionItems">Button text</cv-button>'
          : ''
      }
      ${
        action
          ? '<cv-button outlined slot="actionItems">Button text</cv-button>'
          : ''
      }
    </cv-toolbar>
  `;
};

export const Toolbar = {
  render: toolbarTemplate,
};

export const denseToolbar = {
  args: {
    dense: true,
  },
  render: toolbarTemplate,
};
