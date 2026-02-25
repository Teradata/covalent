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
    open: false,
    anchor: '',
    corner: 'BOTTOM_START',
    menuCorner: '',
    x: 0,
    y: 0,
    defaultFocus: 'NONE',
    innerAriaLabel: '',
    innerRole: 'menu',
    quick: false,
    absolute: false,
    fixed: true,
    forceGroupSelection: false,
    fullwidth: false,
    stayOpenOnBodyClick: false,
    wrapFocus: false,
    multi: false,
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

const Template = (args) => {
  document.addEventListener('DOMContentLoaded', () => {
    window.basicMenu.anchor = window.basicButton;

    window.basicButton.addEventListener('click', function () {
      window.basicMenu.open = !window.basicMenu.open;
    });
  });

  const { disabledItem, ...menuArgs } = args;
  let menuProps = '';

  for (const [key, value] of Object.entries(menuArgs)) {
    if (typeof value === 'boolean') {
      if (value) {
        menuProps += `${key} `;
      }
    } else {
      menuProps += `${key}="${value}" `;
    }
  }

  const disabledItemProp = disabledItem ? 'disabled' : '';

  return `
    <cv-button id="basicButton" raised label="Open menu"></cv-button>
    <cv-menu 
      id="basicMenu"
      ${menuProps}
      >
      <cv-list-item>one</cv-list-item>
      <cv-list-item>two</cv-list-item>
      <cv-list-item>three</cv-list-item>
      <cv-list-item ${disabledItemProp}><div>four</div></cv-list-item>
    </cv-menu>
  `;
};

// Specialized renders for knapsack demo variants

const UseIconsRender = (args) => {
  const { disabledItem, ...menuArgs } = args;
  let menuProps = '';
  for (const [key, value] of Object.entries(menuArgs)) {
    if (typeof value === 'boolean') {
      if (value) menuProps += `${key} `;
    } else {
      menuProps += `${key}="${value}" `;
    }
  }
  const slotHtml = `
    <cv-list-item graphic="icon">Create<cv-icon slot="graphic">add</cv-icon></cv-list-item>
    <cv-list-item graphic="icon">Upload<cv-icon slot="graphic">upload</cv-icon></cv-list-item>
    <cv-list-item graphic="icon">Save<cv-icon slot="graphic">save</cv-icon></cv-list-item>
    <cv-list-item graphic="icon">Download<cv-icon slot="graphic">download</cv-icon></cv-list-item>
    <cv-list-item graphic="icon">Delete<cv-icon slot="graphic">delete</cv-icon></cv-list-item>
  `;

  return `
    <cv-button id="basicButton" raised label="Open menu"></cv-button>
    <cv-menu id="basicMenu" ${menuProps}>
      ${slotHtml}
    </cv-menu>
  `;
};

const CustomizationRender = (args) => {
  const { disabledItem, ...menuArgs } = args;
  let menuProps = '';
  for (const [key, value] of Object.entries(menuArgs)) {
    if (typeof value === 'boolean') {
      if (value) menuProps += `${key} `;
    } else {
      menuProps += `${key}="${value}" `;
    }
  }
  const slotHtml = `
    <cv-list-item graphic="avatar" twoline>
      John Doe
      <div slot="secondary">john.doe@teradata.com</div>
      <div slot="graphic">
        <cv-icon>person</cv-icon>
      </div>
    </cv-list-item>

    <cv-list-item graphic="icon">
      Switch to dark mode
      <div slot="graphic">
        <cv-icon>brightness_4</cv-icon>
      </div>
    </cv-list-item>

    <cv-list-item graphic="icon">
      Sign out
    </cv-list-item>
  `;

  return `
    <cv-button id="basicButton" raised label="Open menu"></cv-button>
    <cv-menu id="basicMenu" ${menuProps}>
      ${slotHtml}
    </cv-menu>
  `;
};

export const Main = {
  render: Template,
  args: {
    open: false,
    multi: false,
    activatable: false,
  },
};

export const UseIcons = {
  render: UseIconsRender,
  args: {
    open: true,
  },
};

export const DisabledItems = {
  render: Template,
  args: {
    open: true,
    disabledItem: true,
  },
  argTypes: {
    disabledItem: {
      control: {
        type: 'boolean',
      },
    },
  },
};

export const MultiSelect = {
  render: Template,
  args: {
    open: true,
    multi: true,
  },
};

export const Customization = {
  render: CustomizationRender,
  args: {
    open: true,
  },
};

export const absolute = {
  render: Template,
  args: {
    absolute: true,
    x: 100,
    y: 100,
  },
};

export const quickOpen = {
  render: Template,
  args: {
    quick: true,
  },
};

export const fullwidth = {
  render: Template,
  args: {
    fullwidth: true,
  },
};

export const stayOpenOnBodyClick = {
  render: Template,
  args: {
    stayOpenOnBodyClick: true,
  },
};

export const corner = {
  render: Template,
  args: {
    corner: 'TOP_END',
  },
};

export const defaultFocus = {
  render: Template,
  args: {
    defaultFocus: 'LAST_ITEM',
  },
};
