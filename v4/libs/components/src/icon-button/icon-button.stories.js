import './icon-button';
import iconList from '../../../icons/material-codepoints.json';

export default {
  title: 'Components/Icon Button',
  argTypes: {
    icon: {
      control: 'select',
      options: Object.keys(iconList),
      defaultValue: 'houseboat',
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
    },
    onClick: { action: 'onClick' },
  },
};

const Template = ({ disabled, icon, onClick }) => {
  return `
    <td-icon-button id="myIconButton"
      ${icon ? `icon="${icon}"` : null}
      ${disabled ? `disabled` : null}>
    </td-icon-button>`;
};

export const Basic = Template.bind({});
