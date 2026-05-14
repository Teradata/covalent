import './textarea';

const TEXTAREA_TYPES = [
  'text',
  'search',
  'tel',
  'url',
  'email',
  'password',
  'date',
  'month',
  'week',
  'time',
  'datetime-local',
  'number',
  'color',
];

const renderBooleanAttribute = (name, value) => (value ? ` ${name}` : '');

const renderStringAttribute = (name, value) =>
  value ? ` ${name}="${value}"` : '';

const renderNumberAttribute = (name, value) =>
  Number.isFinite(value) ? ` ${name}="${value}"` : '';

export default {
  title: 'Components/Text area',
  argTypes: {
    type: {
      options: TEXTAREA_TYPES,
      control: { type: 'select' },
    },
    outlined: { control: { type: 'boolean' } },
    rows: { control: { type: 'number' } },
    cols: { control: { type: 'number' } },
    value: { control: { type: 'text' } },
    label: { control: { type: 'text' } },
    name: { control: { type: 'text' } },
    placeholder: { control: { type: 'text' } },
    helper: { control: { type: 'text' } },
    helperPersistent: { control: { type: 'boolean' } },
    required: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
    icon: { control: { type: 'text' } },
    iconTrailing: { control: { type: 'text' } },
    maxLength: { control: { type: 'number' } },
    charCounter: { control: { type: 'boolean' } },
    validationMessage: { control: { type: 'text' } },
    validityState: { control: false },
    willValidate: { control: false },
    validityTransform: { control: false },
    validateOnInitialRender: { control: { type: 'boolean' } },
  },
  args: {
    outlined: true,
    disabled: false,
    helperPersistent: false,
    required: false,
    charCounter: false,
    validateOnInitialRender: false,
  },
  tags: ['autodocs'],
};

const renderTextarea = ({
  rows,
  cols,
  value,
  type,
  label,
  name,
  placeholder,
  helper,
  helperPersistent,
  outlined,
  required,
  disabled,
  icon,
  iconTrailing,
  maxLength,
  charCounter,
  validationMessage,
  validateOnInitialRender,
}) => {
  return `
        <cv-textarea
            ${renderNumberAttribute('rows', rows)}
            ${renderNumberAttribute('cols', cols)}
            ${renderStringAttribute('value', value)}
            ${renderStringAttribute('type', type)}
            ${renderStringAttribute('label', label ?? (outlined ? 'outlined' : 'filled'))}
            ${renderStringAttribute('name', name)}
            ${renderStringAttribute('placeholder', placeholder)}
            ${renderStringAttribute('helper', helper)}
            ${renderBooleanAttribute('helperPersistent', helperPersistent)}
            ${renderBooleanAttribute('outlined', outlined)}
            ${renderBooleanAttribute('required', required)}
            ${renderBooleanAttribute('disabled', disabled)}
            ${renderStringAttribute('icon', icon)}
            ${renderStringAttribute('iconTrailing', iconTrailing)}
            ${renderNumberAttribute('maxLength', maxLength)}
            ${renderBooleanAttribute('charCounter', charCounter)}
            ${renderStringAttribute('validationMessage', validationMessage)}
            ${renderBooleanAttribute(
              'validateOnInitialRender',
              validateOnInitialRender,
            )}>
        </cv-textarea>`;
};

export const Basic = {
  render: renderTextarea,
};

export const Required = {
  render: renderTextarea,
  args: {
    required: true,
  },
};

export const HelperText = {
  render: renderTextarea,
  args: {
    label: 'Click to see helper text',
    helper: 'Helper Text',
  },
};
