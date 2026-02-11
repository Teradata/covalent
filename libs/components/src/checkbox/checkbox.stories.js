import './checkbox';
import '../formfield/formfield';

const checkboxTemplate = ({
  label = 'Bananas',
  disabled,
  checked,
  indeterminate,
  reducedTouchTarget,
  value,
}) => {
  return `<cv-checkbox
                aria-label="${label}"
                ${checked ? `checked` : null}
                ${indeterminate ? `indeterminate` : null}
                ${disabled ? `disabled` : null}
                ${reducedTouchTarget ? `reducedTouchTarget` : null}
                ${value ? `value="${value}"` : null}>
            </cv-checkbox>
            <cv-checkbox
                aria-label="${label}"
                checked
                ${disabled ? `disabled` : null}
                ${reducedTouchTarget ? `reducedTouchTarget` : null}
                ${value ? `value="${value}"` : null}>
            </cv-checkbox>
            <cv-checkbox
                aria-label="${label}"
                indeterminate
                ${disabled ? `disabled` : null}
                ${reducedTouchTarget ? `reducedTouchTarget` : null}
                ${value ? `value="${value}"` : null}>
            </cv-checkbox>`;
};

const labelTemplate = ({ label = 'Bananas', indeterminate }) => {
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
                <cv-checkbox ${
                  indeterminate ? `indeterminate` : null
                }></cv-checkbox>
            </cv-formfield>
            
            <cv-formfield label="${label}">
                <cv-checkbox class="child"></cv-checkbox>
            </cv-formfield>
            
            <cv-formfield label="${label}">
                <cv-checkbox class="child" checked></cv-checkbox>
            </cv-formfield>`;
};
const singleCheckboxTemplate = ({
  label = 'Bananas',
  disabled,
  checked,
  indeterminate,
  reducedTouchTarget,
  value,
}) => {
  return `<cv-checkbox
                aria-label="${label}"
                ${checked ? `checked` : null}
                ${indeterminate ? `indeterminate` : null}
                ${disabled ? `disabled` : null}
                ${reducedTouchTarget ? `reducedTouchTarget` : null}
                ${value ? `value="${value}"` : null}>
            </cv-checkbox>`;
};

export default {
  title: 'Components/Checkbox',
  argTypes: {
    checked: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
    disabled: { control: 'boolean' },
    reducedTouchTarget: { control: 'boolean' },
    value: { control: 'text' },
  },
  tags: ['autodocs'],
  render: checkboxTemplate,
};

export const Checked = {
  args: {
    checked: true,
  },
  render: singleCheckboxTemplate,
};

export const Unchecked = {
  args: {},
  render: singleCheckboxTemplate,
};
export const Basic = {
  args: {},
};

export const Disabled = {
  args: {
    disabled: true,
  },
};

export const WithLabel = {
  render: labelTemplate,
  args: {
    indeterminate: true,
  },
};
