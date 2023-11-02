import './button';

export default {
  title: 'Components/Button',
  args: {
    label: 'Button',
    icon: 'houseboat',
    showIcon: false,
    trailingIcon: false,
    disabled: false,
    dense: false,
    isNegative: false,
    isPrimary: false,
  },
};

const Template = ({
  label,
  showIcon,
  trailingIcon,
  icon,
  style,
  disabled,
  dense,
  isNegative,
  isPrimary,
}) => {
  return `<cv-button id="myButton"
                      label="${label}"
                      ${showIcon && trailingIcon ? `trailingIcon` : ''}
                      ${showIcon && icon ? `icon="${icon}"` : ''}
                      ${dense ? 'dense' : ''}
                      ${disabled ? 'disabled' : ''}
                      ${style}
                      class="${isNegative ? `negative` : ''} ${
    isPrimary ? `primary` : ''
  }"
         </cv-button>`;
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
