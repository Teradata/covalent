import './textfield';

const TEXTFIELD_TYPES = [
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
  title: 'Components/Text field',
  argTypes: {
    type: {
      options: TEXTFIELD_TYPES,
      control: { type: 'select' },
    },
    outlined: { control: { type: 'boolean' } },
    value: { control: { type: 'text' } },
    label: { control: { type: 'text' } },
    name: { control: { type: 'text' } },
    placeholder: { control: { type: 'text' } },
    helper: { control: { type: 'text' } },
    helperPersistent: { control: { type: 'boolean' } },
    required: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
    dense: { control: { type: 'boolean' } },
    prefix: { control: { type: 'text' } },
    suffix: { control: { type: 'text' } },
    pattern: { control: { type: 'text' } },
    min: { control: { type: 'text' } },
    max: { control: { type: 'text' } },
    size: { control: { type: 'number' } },
    step: { control: { type: 'number' } },
    icon: { control: { type: 'text' } },
    iconTrailing: { control: { type: 'text' } },
    maxLength: { control: { type: 'number' } },
    charCounter: { control: { type: 'boolean' } },
    validity: { control: false },
    autoValidate: { control: { type: 'boolean' } },
    validationMessage: { control: { type: 'text' } },
    willValidate: { control: false },
    validityTransform: { control: false },
    validateOnInitialRender: { control: { type: 'boolean' } },
    loading: { control: { type: 'boolean' } },
    loaderDensity: { control: { type: 'number' } },
  },
  args: {
    outlined: true,
    disabled: false,
    helperPersistent: false,
    required: false,
    dense: false,
    charCounter: false,
    autoValidate: false,
    validateOnInitialRender: false,
    loading: false,
    loaderDensity: -6,
  },
  tags: ['autodocs'],
};

const renderTextfield = ({
  value,
  type,
  icon,
  iconTrailing,
  label,
  name,
  placeholder,
  helperPersistent,
  outlined,
  disabled,
  required,
  helper,
  dense,
  loading,
  loaderDensity,
  prefix,
  suffix,
  pattern,
  min,
  max,
  size,
  step,
  maxLength,
  charCounter,
  autoValidate,
  validationMessage,
  validateOnInitialRender,
}) => {
  return `
        <cv-textfield 
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
            ${renderBooleanAttribute('dense', dense)}
            ${renderStringAttribute('prefix', prefix)}
            ${renderStringAttribute('suffix', suffix)}
            ${renderStringAttribute('pattern', pattern)}
            ${renderStringAttribute('min', min)}
            ${renderStringAttribute('max', max)}
            ${renderNumberAttribute('size', size)}
            ${renderNumberAttribute('step', step)}
            ${renderStringAttribute('icon', icon)}
            ${renderStringAttribute('iconTrailing', iconTrailing)}
            ${renderNumberAttribute('maxLength', maxLength)}
            ${renderBooleanAttribute('charCounter', charCounter)}
            ${renderBooleanAttribute('autoValidate', autoValidate)}
            ${renderStringAttribute('validationMessage', validationMessage)}
            ${renderBooleanAttribute(
              'validateOnInitialRender',
              validateOnInitialRender,
            )}
            ${renderBooleanAttribute('loading', loading)}
            ${renderNumberAttribute('loaderDensity', loaderDensity)}
            >
        </cv-textfield>`;
};

export const Basic = {
  render: renderTextfield,
};

export const Required = {
  render: renderTextfield,
  args: {
    required: true,
  },
};

export const Icon = {
  render: renderTextfield,
  args: {
    icon: 'houseboat',
  },
};

export const TrailingIcon = {
  render: renderTextfield,
  args: {
    iconTrailing: 'houseboat',
  },
};

export const HelperText = {
  render: renderTextfield,
  args: {
    label: 'Click to see helper text',
    helper: 'Helper Text',
  },
};

export const Loading = {
  render: renderTextfield,
  args: {
    label: 'Loading state',
    icon: 'person',
    loading: true,
    loaderDensity: -6,
  },
};

export const WithSuffix = {
  render: renderTextfield,
  args: {
    label: 'Price',
    suffix: 'USD',
  },
};

export const PrefixAndSuffix = {
  render: renderTextfield,
  args: {
    label: '',
    prefix: '$',
    suffix: 'USD',
  },
};
