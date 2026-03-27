import './switch';
import '../formfield/formfield';

const renderSwitch = ({
  disabled,
  label = 'On/Off',
  selected,
  name,
  value,
  onChange,
}) => {
  const switchInput = document.createElement('cv-switch');
  switchInput.selected = selected;
  switchInput.disabled = disabled;
  switchInput.ariaLabel = label;

  if (name !== undefined) {
    switchInput.name = name;
  }

  if (value !== undefined) {
    switchInput.value = value;
  }

  switchInput.addEventListener('change', onChange);

  if (label) {
    const formfield = document.createElement('cv-formfield');
    formfield.label = label;
    formfield.appendChild(switchInput);

    return formfield;
  }

  return `
    <cv-formfield label="${label}" aria-label="${label}">
      <cv-switch></cv-switch>
    </cv-formfield>
  `;
};

export default {
  title: 'Components/Switch',
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    selected: {
      control: 'boolean',
    },
    name: { control: 'text' },
    value: { control: 'text' },
    label: { control: 'text' },
    onChange: { action: 'onChange' },
  },
  args: {
    disabled: false,
    selected: false,
    name: '',
    value: '',
    label: 'On/Off',
  },
  render: renderSwitch,
  tags: ['autodocs'],
};

export const Basic = {};
