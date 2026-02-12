import './icon-button-toggle';
import iconList from '../../../icons/material-codepoints.json';

export default {
  title: 'Components/Icon Button Toggle',
  argTypes: {
    onIcon: {
      control: 'select',
      options: Object.keys(iconList),
    },
    offIcon: {
      control: 'select',
      options: Object.keys(iconList),
    },
    'aria-label': {
      control: 'text',
    },
    ariaLabelOn: {
      control: 'text',
    },
    ariaLabelOff: {
      control: 'text',
    },
  },
  args: {
    onIcon: 'flashlight_on',
    offIcon: 'flashlight_off',
    disabled: false,
    toggledOn: false,
    'aria-label': '',
    ariaLabelOn: '',
    ariaLabelOff: '',
  },
  tags: ['autodocs'],
};

const renderTemplate = (args) => {
  const { disabled, onIcon, offIcon, toggledOn, ariaLabelOn, ariaLabelOff } =
    args;
  const ariaLabel = args['aria-label'];
  return `<cv-icon-button-toggle${disabled ? ' disabled' : ''} onIcon="${onIcon}" offIcon="${offIcon}"${toggledOn ? ' toggledOn' : ''}${ariaLabel ? ` aria-label="${ariaLabel}"` : ''}${ariaLabelOn ? ` ariaLabelOn="${ariaLabelOn}"` : ''}${ariaLabelOff ? ` ariaLabelOff="${ariaLabelOff}"` : ''}></cv-icon-button-toggle>`;
};

export const Main = {
  render: renderTemplate,
  args: {
    onIcon: 'flashlight_on',
    offIcon: 'flashlight_off',
  },
};
