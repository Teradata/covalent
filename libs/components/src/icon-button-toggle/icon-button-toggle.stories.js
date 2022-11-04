import './icon-button-toggle';
import iconList from '../../../icons/material-codepoints.json';

export default {
  title: 'Components/Icon Button Toggle',
  argTypes: {
    onIcon: {
      control: 'select',
      options: Object.keys(iconList),
      defaultValue: 'alarm_on',
    },
    offIcon: {
      control: 'select',
      options: Object.keys(iconList),
      defaultValue: 'alarm_off',
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
    },
    onClick: { action: 'onClick' },
  },
};

const Template = ({ onIcon, offIcon, onClick }) => {
  return `
    <td-icon-button-toggle 
      onIcon="${onIcon}" 
      offIcon="${offIcon}">
    </td-icon-button-toggle>`;
};

export const Basic = Template.bind({});
