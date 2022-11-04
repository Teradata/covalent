import { withDesign } from 'storybook-addon-designs';
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
  decorators: [withDesign],
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
    <td-toolbar ${dense ? 'dense' : ''}>
      <span slot="title">${title}</span> 
      ${
        filter
          ? '<td-icon-button icon="filter_list" slot="actionItems"></td-icon-button>'
          : ''
      }
      ${
        search
          ? '<td-icon-button icon="search" slot="actionItems"></td-icon-button>'
          : ''
      }
      ${
        add
          ? '<td-icon-button icon="add" slot="actionItems"></td-icon-button>'
          : ''
      }
      ${
        secondaryAction
          ? '<td-button outlined slot="actionItems">BUTTON TEXT</td-button>'
          : ''
      }
      ${
        action
          ? '<td-button outlined slot="actionItems">BUTTON TEXT</td-button>'
          : ''
      }
    </td-toolbar>
  `;
};

export const denseToolbar = Toolbar.bind({});
denseToolbar.args = {
  dense: 'true',
};
