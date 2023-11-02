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
};

const Template = ({ disabled, icon, onClick }) => {
  return `
    <cv-icon-button id="myIconButton"
      ${icon ? `icon="${icon}"` : null}
      ${disabled ? `disabled` : null}>
    </cv-icon-button>`;
};

export const Basic = Template.bind({});
