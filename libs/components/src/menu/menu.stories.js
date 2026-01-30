import './menu';
import '../button/button';
import '../list/list-item';
import '../select/select';

export default {
  title: 'Components/Menu',
  component: 'cv-menu',
  parameters: {
    layout: 'padded',
  },
  args: {
    corner: 'BOTTOM_START',
    defaultFocus: 'NONE',
    fixed: true,
    activatable: true,
  },
  argTypes: {
    corner: {
      options: ['TOP_START', 'TOP_END', 'BOTTOM_START', 'BOTTOM_END'],
      control: {
        type: 'select',
      },
    },
    defaultFocus: {
      options: ['NONE', 'LIST_ROOT', 'FIRST_ITEM', 'LAST_ITEM'],
      control: {
        type: 'select',
      },
    },
    x: {
      control: {
        type: 'number',
      },
    },
    y: {
      control: {
        type: 'number',
      },
    },
    absolute: {
      control: {
        type: 'boolean',
      },
    },
  },
  tags: ['autodocs'],
};

export const Basic = (args) => {
  document.addEventListener('DOMContentLoaded', () => {
    window.basicMenu.anchor = window.basicButton;

    window.basicButton.addEventListener('click', function () {
      window.basicMenu.open = !window.basicMenu.open;
    });
  });

  let menuProps = '';

  for (const [key, value] of Object.entries(args))
    menuProps += `${key}="${value}" `;

  return `
    <cv-button id="basicButton" raised label="Open menu"></cv-button>
    <cv-menu 
      id="basicMenu"
      ${menuProps}
      >
      <cv-list-item>one</cv-list-item>
      <cv-list-item>two</cv-list-item>
      <cv-list-item>three</cv-list-item>
      <cv-list-item disabled><div>four</div></cv-list-item>
      <li divider></li>
      <cv-list-item>aaa</cv-list-item>
      <cv-list-item>bbb</cv-list-item>
    </cv-menu>
  `;
};

export const absolute = Basic.bind({});
absolute.args = {
  absolute: true,
  x: 100,
  y: 100,
};

export const quickOpen = Basic.bind({});
quickOpen.args = {
  quick: true,
};

export const fullwidth = Basic.bind({});
fullwidth.args = {
  fullwidth: true,
};

export const stayOpenOnBodyClick = Basic.bind({});
stayOpenOnBodyClick.args = {
  stayOpenonBodyClick: true,
};

export const corner = Basic.bind({});
corner.args = {
  corner: 'TOP_END',
};

export const defaultFocus = Basic.bind({});
defaultFocus.args = {
  defaultFocus: 'LAST_ITEM',
};
