import './radio';
import '../formfield/formfield';

export default {
  title: 'Components/Radio',
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    global: { control: 'boolean' },
    reducedTouchTarget: { control: 'boolean' },
    name: { control: 'text' },
    value: { control: 'text' },
  },
  args: {
    checked: false,
    disabled: false,
    global: false,
    reducedTouchTarget: false,
    name: '',
    value: '',
  },
  tags: ['autodocs'],
};

const Template = (args) => {
  const { disabled, checked, global, reducedTouchTarget, name, value } =
    args || {};
  const common = [
    disabled ? 'disabled' : '',
    global ? 'global' : '',
    reducedTouchTarget ? 'reducedTouchTarget' : '',
    name ? `name="${name}"` : '',
    value ? `value="${value}"` : '',
  ]
    .filter(Boolean)
    .join(' ');

  return `<cv-radio ${common}>
                        </cv-radio>
                        <cv-radio ${common} ${checked ? 'checked' : ''}>
                        </cv-radio>
                        <cv-radio ${common} indeterminate>
                        </cv-radio>`;
};

const LabelTemplate = (args) => {
  const {
    label = 'Bananas',
    indeterminate,
    disabled,
    global,
    reducedTouchTarget,
    name,
    value,
  } = args || {};
  const common = [
    disabled ? 'disabled' : '',
    global ? 'global' : '',
    reducedTouchTarget ? 'reducedTouchTarget' : '',
    name ? `name="${name}"` : '',
    value ? `value="${value}"` : '',
  ]
    .filter(Boolean)
    .join(' ');

  return `
            <style>
                cv-formfield {
                    display: block;
                }
                .child {
                    margin-left: 20px;
                }
            </style>
            <cv-formfield label="${label}">
                <cv-radio ${common} ${indeterminate ? 'indeterminate' : ''}></cv-radio>
            </cv-formfield>
            
            <cv-formfield label="${label}">
                <cv-radio class="child" ${common}></cv-radio>
            </cv-formfield>
            
            <cv-formfield label="${label}">
                <cv-radio class="child" ${common} checked></cv-radio>
            </cv-formfield>`;
};

export const Unchecked = {
  render: Template,
  args: {},
};

export const Checked = {
  render: Template,
  args: {
    checked: true,
    global: false,
    name: 'checkedRadio',
  },
};

export const Disabled = {
  render: Template,
  args: {
    disabled: true,
  },
};

export const WithLabel = {
  render: LabelTemplate,
  args: {
    indeterminate: true,
  },
};
