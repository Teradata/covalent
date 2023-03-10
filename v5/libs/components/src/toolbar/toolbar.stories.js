import './toolbar';

export default {
  title: 'Components/Toolbar',
  argTypes: {
    dense: {
      control: 'boolean',
      defaultValue: false,
    },
    title: {
      control: 'text',
      defaultValue: 'Page title',
    },
    filter: {
      control: 'boolean',
      defaultValue: true,
    },
    search: {
      control: 'boolean',
      defaultValue: true,
    },
    add: {
      control: 'boolean',
      defaultValue: true,
    },
    secondaryAction: {
      control: 'boolean',
      defaultValue: true,
    },
    action: {
      control: 'boolean',
      defaultValue: true,
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/OZGyytUGDqjqoyvftu1Kid/Toolbars?node-id=49%3A579',
    },
    layout: 'fullscreen',
  },
};

export const Toolbar = ({
  dense,
  title,
  filter,
  search,
  add,
  secondaryAction,
  action,
}) => {
  return `
    <cv-toolbar ${dense ? 'dense' : ''}>
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
          ? '<cv-button outlined slot="actionItems">BUTTON TEXT</cv-button>'
          : ''
      }
      ${
        action
          ? '<cv-button outlined slot="actionItems">BUTTON TEXT</cv-button>'
          : ''
      }
    </cv-toolbar>
  `;
};

export const denseToolbar = Toolbar.bind({});
denseToolbar.args = {
  dense: 'true',
};
