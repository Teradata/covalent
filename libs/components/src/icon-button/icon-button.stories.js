import './icon-button';
import iconList from '../../../icons/material-codepoints.json';

export default {
  title: 'Components/Icon Button',
  argTypes: {
    icon: {
      control: 'select',
      options: Object.keys(iconList),
    },
  },
  args: {
    icon: 'houseboat',
    disabled: false,
  },
  tags: ['autodocs'],
};

const Template = ({ disabled, icon }) => {
  return `
    <cv-icon-button icon="${icon}" ${disabled ? `disabled` : ``}>
    </cv-icon-button>`;
};

export const Basic = Template.bind({});
