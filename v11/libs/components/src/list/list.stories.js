import './list';
import './list-item';
import './check-list-item';
import './radio-list-item';
import './nav-list-item';
import '../icon/icon';

export default {
  title: 'Components/List',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

const buildListAttrs = ({
  activatible = true,
  rootTabbable,
  multi,
  wrapFocus,
  noninteractive,
  itemRoles,
  innerAriaLabel,
  innerRole,
}) =>
  [
    activatible ? 'activatable' : '',
    rootTabbable ? 'root-tabbable' : '',
    multi ? 'multi' : '',
    wrapFocus ? 'wrapfocus' : '',
    noninteractive ? 'noninteractive' : '',
    itemRoles ? `item-roles="${itemRoles}"` : '',
    innerAriaLabel ? `inner-aria-label="${innerAriaLabel}"` : '',
    innerRole ? `inner-role="${innerRole}"` : '',
  ]
    .filter(Boolean)
    .join(' ');

const renderBasic = (args) => {
  const { selected, disabled } = args;
  const attrs = buildListAttrs(args);
  return `
  <cv-list ${attrs}>
    <cv-list-item ${disabled ? 'disabled' : ''}>Item 0</cv-list-item>
    <cv-list-item ${selected ? 'selected activated' : ''}>Item 1</cv-list-item>
    <cv-list-item>Item 2</cv-list-item>
    <cv-list-item>Item 3</cv-list-item>
  </cv-list>`;
};

const renderIcon = (args) => {
  const { icon, iconStyle = 'avatar', disabled } = args;
  const attrs = buildListAttrs(args);
  return `
  <cv-list ${attrs}>
    <cv-list-item graphic="${iconStyle}" ${disabled ? 'disabled' : ''}>
      <span>${iconStyle} 0</span>
      <cv-icon slot="graphic">${icon}</cv-icon>
    </cv-list-item>
    <cv-list-item graphic="${iconStyle}">
      <span>${iconStyle} 2</span>
      <cv-icon slot="graphic">${icon}</cv-icon>
    </cv-list-item>
    <cv-list-item graphic="${iconStyle}">
      <span>${iconStyle} 3</span>
      <cv-icon slot="graphic">${icon}</cv-icon>
    </cv-list-item>
    <cv-list-item graphic="${iconStyle}">
      <span>${iconStyle} 4</span>
      <cv-icon slot="graphic">${icon}</cv-icon>
    </cv-list-item>
    <cv-list-item graphic="${iconStyle}">
      <span>${iconStyle} 5</span>
      <cv-icon slot="graphic">${icon}</cv-icon>
    </cv-list-item>
  </cv-list>`;
};

const renderTwoLine = (args) => {
  const { disabled } = args;
  const attrs = buildListAttrs(args);
  return `
  <cv-list ${attrs}>
    <cv-list-item twoline ${disabled ? 'disabled' : ''}>
      <span>Item 0</span>
      <span slot="secondary">Secondary line</span>
    </cv-list-item>
    <cv-list-item twoline>
      <span>Item 1</span>
      <span slot="secondary">Secondary line</span>
    </cv-list-item>
    <cv-list-item twoline>
      <span>Item 2</span>
      <span slot="secondary">Secondary line</span>
    </cv-list-item>
    <cv-list-item twoline>
      <span>Item 3</span>
      <span slot="secondary">Secondary line</span>
    </cv-list-item>
  </cv-list>`;
};

const renderCheckRadio = (args) => {
  const { listType = 'check', disabled } = args;
  const attrs = buildListAttrs(args);
  return `
  <cv-list ${attrs}>
    <cv-${listType}-list-item selected ${disabled ? 'disabled' : ''}>Item 0</cv-${listType}-list-item>
    <cv-${listType}-list-item selected>Item 1</cv-${listType}-list-item>
    <li divider role="separator" padded></li>
    <cv-${listType}-list-item left selected>Item 2 (left)</cv-${listType}-list-item>
    <cv-${listType}-list-item left>Item 3 (left)</cv-${listType}-list-item>
  </cv-list>`;
};

const renderSelectableWithIcon = (args) => {
  const { icon, iconStyle = 'avatar', listType = 'check', disabled } = args;
  const attrs = buildListAttrs(args);
  return `
  <cv-list ${attrs}>
    <cv-${listType}-list-item graphic="${iconStyle}" selected ${disabled ? 'disabled' : ''}>
      <span>Item 0</span>
      <cv-icon slot="graphic">${icon}</cv-icon>
    </cv-${listType}-list-item>
    <cv-${listType}-list-item graphic="${iconStyle}">
      <span>Item 1</span>
      <cv-icon slot="graphic">${icon}</cv-icon>
    </cv-${listType}-list-item>
    <cv-${listType}-list-item graphic="${iconStyle}">
      <span>Item 2</span>
      <cv-icon slot="graphic">${icon}</cv-icon>
    </cv-${listType}-list-item>
    <cv-${listType}-list-item graphic="${iconStyle}">
      <span>Item 3</span>
      <cv-icon slot="graphic">${icon}</cv-icon>
    </cv-${listType}-list-item>
  </cv-list>`;
};

const renderNavigation = (args) => {
  const { hasChildren, icon } = args;
  const attrs = buildListAttrs(args);
  let content = '';

  if (hasChildren) {
    content = [1, 2, 3]
      .map(
        (i) => `
      <cv-nav-list-item hasChildren ${i === 1 ? 'open' : ''} graphic="avatar">
        Navigation item ${i}
        <div slot="graphic">
          <cv-icon>${icon}</cv-icon>
        </div>
        <cv-list slot="expansion-panel" activatible>
          <cv-nav-list-item tabindex="-1" subnav>sub item</cv-nav-list-item>
          <cv-nav-list-item tabindex="-1" subnav>sub item</cv-nav-list-item>
          <cv-nav-list-item tabindex="-1" subnav>sub item</cv-nav-list-item>
        </cv-list>
      </cv-nav-list-item>
     `,
      )
      .join('');
  } else {
    content = `
    <cv-nav-list-item>sub item</cv-nav-list-item>
    <cv-nav-list-item>sub item</cv-nav-list-item>
    <cv-nav-list-item>sub item</cv-nav-list-item>
    <cv-nav-list-item>sub item</cv-nav-list-item>
    `;
  }

  return `
  <cv-list ${attrs}>
    ${content}
  </cv-list>`;
};

export const Main = {
  render: renderBasic,
  args: {
    selected: false,
    disabled: false,
    activatible: true,
    rootTabbable: false,
    multi: false,
    wrapFocus: false,
    noninteractive: false,
    itemRoles: '',
    innerAriaLabel: '',
    innerRole: '',
  },
};

export const CheckList = {
  render: renderSelectableWithIcon,
  args: {
    icon: 'houseboat',
    iconStyle: 'avatar',
    listType: 'check',
    disabled: false,
    activatible: true,
    rootTabbable: false,
    multi: true,
    wrapFocus: false,
    noninteractive: false,
    itemRoles: '',
    innerAriaLabel: '',
    innerRole: '',
  },
};

export const RadioList = {
  render: renderSelectableWithIcon,
  args: {
    icon: 'houseboat',
    iconStyle: 'avatar',
    listType: 'radio',
    disabled: false,
    activatible: true,
    rootTabbable: false,
    multi: false,
    wrapFocus: false,
    noninteractive: false,
    itemRoles: '',
    innerAriaLabel: '',
    innerRole: '',
  },
};

export const NavigationList = {
  render: renderNavigation,
  args: {
    icon: 'houseboat',
    hasChildren: true,
    activatible: true,
    rootTabbable: false,
    multi: false,
    wrapFocus: false,
    noninteractive: false,
    itemRoles: '',
    innerAriaLabel: '',
    innerRole: '',
  },
};

export const SubNavigation = {
  render: renderNavigation,
  args: {
    icon: 'houseboat',
    hasChildren: false,
    activatible: true,
    rootTabbable: false,
    multi: false,
    wrapFocus: false,
    noninteractive: false,
    itemRoles: '',
    innerAriaLabel: '',
    innerRole: '',
    subNav: true,
  },
};

export const WithAvatar = {
  render: renderIcon,
  args: {
    icon: 'folder',
    iconStyle: 'avatar',
    disabled: false,
    activatible: true,
    rootTabbable: false,
    multi: false,
    wrapFocus: false,
    noninteractive: false,
    itemRoles: '',
    innerAriaLabel: '',
    innerRole: '',
  },
  argTypes: {
    iconStyle: {
      options: ['avatar', 'icon', 'medium', 'large'],
      control: { type: 'radio' },
    },
  },
};

export const TwoLine = {
  render: renderTwoLine,
  args: {
    disabled: false,
    activatible: true,
    rootTabbable: false,
    multi: false,
    wrapFocus: false,
    noninteractive: false,
    itemRoles: '',
    innerAriaLabel: '',
    innerRole: '',
  },
};

export const ChecksAndRadios = {
  render: renderCheckRadio,
  args: {
    disabled: false,
    activatible: true,
    rootTabbable: false,
    multi: true,
    wrapFocus: false,
    noninteractive: false,
    itemRoles: '',
    innerAriaLabel: '',
    innerRole: '',
  },
  argTypes: {
    listType: {
      options: ['check', 'radio'],
      control: { type: 'radio' },
    },
  },
};
