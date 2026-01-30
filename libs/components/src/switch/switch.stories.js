import './switch';
import '../formfield/formfield';

export default {
  title: 'Components/Switch',
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    checked: {
      control: 'boolean',
    },
    label: { control: 'text' },
    onChange: { action: 'onChange' },
  },
  tags: ['autodocs'],
};

const Template = ({ disabled, label = 'On/Off', checked, onChange }) => {
  const switchInput = document.createElement('cv-switch');
  switchInput.checked = checked;
  switchInput.disabled = disabled;
  switchInput.ariaLabel = label;

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

export const Basic = Template.bind({});
