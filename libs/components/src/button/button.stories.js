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
  },
  argTypes: {
    style: {
      options: ['raised', 'outlined'],
      control: { type: 'select' },
    },
    color: {
      options: [
        'primary',
        'secondary',
        'emphasis',
        'positive',
        'negative',
        'caution',
      ],
      control: { type: 'select' },
    },
  },
  tags: ['autodocs'],
};

const Template = ({
  label,
  showIcon,
  trailingIcon,
  icon,
  style,
  color,
  disabled,
  dense,
}) => {
  return `<cv-button id="myButton"
                      label="${label}"
                      ${showIcon && trailingIcon ? `trailingIcon` : ''}
                      ${showIcon && icon ? `icon="${icon}"` : ''}
                      ${dense ? 'dense' : ''}
                      ${disabled ? 'disabled' : ''}
                      ${style}
                      ${color ? `color="${color}"` : ''}>         
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

export const secondary = Template.bind({});
secondary.args = {
  style: 'raised',
  color: 'secondary',
};

export const emphasis = Template.bind({});
emphasis.args = {
  style: 'raised',
  color: 'emphasis',
};

export const caution = Template.bind({});
caution.args = {
  style: 'raised',
  color: 'caution',
};

export const negative = Template.bind({});
negative.args = {
  style: 'raised',
  color: 'negative',
};

export const positive = Template.bind({});
positive.args = {
  style: 'raised',
  color: 'positive',
};

export const dense = Template.bind({});
dense.args = {
  dense: true,
  style: 'raised',
};
