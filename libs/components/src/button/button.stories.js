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
    raised: false,
    unelevated: false,
    outlined: false,
    expandContent: false,
    fullwidth: false,
  },
  argTypes: {
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

const buttonTemplate = ({
  label,
  showIcon,
  trailingIcon,
  icon,
  color,
  disabled,
  dense,
  raised,
  unelevated,
  outlined,
  expandContent,
  fullwidth,
}) => {
  return `<cv-button id="myButton"
                      label="${label}"
                      ${showIcon && trailingIcon ? `trailingIcon` : ''}
                      ${showIcon && icon ? `icon="${icon}"` : ''}
                      ${dense ? 'dense' : ''}
                      ${disabled ? 'disabled' : ''}
                      ${raised ? 'raised' : ''}
                      ${unelevated ? 'unelevated' : ''}
                      ${outlined ? 'outlined' : ''}
                      ${expandContent ? 'expandContent' : ''}
                      ${fullwidth ? 'fullwidth' : ''}
                      ${color ? `color="${color}"` : ''}>         
        </cv-button>`;
};

export const Raised = {
  args: {
    raised: true,
  },
  render: buttonTemplate,
};

export const Outlined = {
  args: {
    outlined: true,
  },
  render: buttonTemplate,
};

export const Text = {
  args: {
    style: 'text',
  },
  render: buttonTemplate,
};

export const secondary = {
  args: {
    raised: true,
    color: 'secondary',
  },
  render: buttonTemplate,
};

export const emphasis = {
  args: {
    raised: true,
    color: 'emphasis',
  },
  render: buttonTemplate,
};

export const caution = {
  args: {
    raised: true,
    color: 'caution',
  },
  render: buttonTemplate,
};

export const negative = {
  args: {
    raised: true,
    color: 'negative',
  },
  render: buttonTemplate,
};

export const positive = {
  args: {
    raised: true,
    color: 'positive',
  },
  render: buttonTemplate,
};

export const dense = {
  args: {
    dense: true,
    raised: true,
  },
  render: buttonTemplate,
};
