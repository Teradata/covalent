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
  },
  args: {
    onIcon: 'flashlight_on',
    offIcon: 'flashlight_off',
    disabled: false,
    toggledOn: false,
  },
  tags: ['autodocs'],
};

const Template = ({ disabled, onIcon, offIcon, toggledOn }) => {
  return `
    <cv-icon-button-toggle onIcon="${onIcon}" offIcon="${offIcon}"${
      disabled ? ` disabled` : ``
    }${toggledOn ? ' toggledOn' : ''}>
    </cv-icon-button-toggle>`;
};

export const Basic = Template.bind({});
