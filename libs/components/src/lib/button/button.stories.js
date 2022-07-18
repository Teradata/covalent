import { withDesign } from 'storybook-addon-designs'
import './button';

export default {
  title: 'Components/Button',
  argTypes: {
    label: { control: 'text', defaultValue: 'Button' },
    icon:  {
      control: 'text',
      defaultValue: 'houseboat',
    },
    showIcon:  {
      control: 'boolean',
      defaultValue: false,
    },
    trailingIcon:  {
      control: 'boolean',
      defaultValue: false,
    },
    style: {
      control: {
        disable: true
      }
    },
    disabled:  {
      control: 'boolean',
      defaultValue: false,
    },
    dense:  {
      control: 'boolean',
      defaultValue: false,
    },
    onClick: { action: 'onClick'},
    isNegative:  {
      control: 'boolean',
      defaultValue: false,
    },
    isPrimary:  {
      control: 'boolean',
      defaultValue: false,
    },
  },
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/aDX2Rc1OIJ9tWgMcAvKRXv/Section?node-id=22%3A1453',
    },
  }
};

const Template = ({ label, showIcon, trailingIcon, icon, style, disabled, dense, isNegative, isPrimary }) => {

  return `<td-button id="myButton"
                      label="${label}"
                      ${showIcon && trailingIcon ? `trailingIcon` : '' }
                      ${showIcon && icon ? `icon="${icon}"` : '' }
                      ${dense ? 'dense' : '' }
                      ${disabled ? 'disabled' : '' }
                      ${style}
                      class="${isNegative ? `negative` : '' } ${isPrimary ? `primary` : '' }"
         </td-button>`;
};

export const Contained = Template.bind({});
Contained.args = {
  style: 'raised',
};

export const Outlined = Template.bind({});
Outlined.args = {
  style: 'outlined',
};

export const Text = Template.bind({});
Text.args = {
  style: 'text',
};

export const dense = Template.bind({});
dense.args = {
  dense: true,
  style: 'raised',
};
