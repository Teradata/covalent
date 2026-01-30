import './checkbox';
import '../formfield/formfield';

export default {
  title: 'Components/Checkbox',
  argTypes: {},
  tags: ['autodocs'],
};

const Template = ({ label = 'Bananas', disabled }) => {
  return `<cv-checkbox
                aria-label="${label}"
                ${disabled ? `disabled` : null}>
            </cv-checkbox>
            <cv-checkbox
                aria-label="${label}"
                checked
                ${disabled ? `disabled` : null}>
            </cv-checkbox>
            <cv-checkbox
                aria-label="${label}"
                indeterminate
                ${disabled ? `disabled` : null}>
            </cv-checkbox>`;
};

const LabelTemplate = ({ label = 'Bananas', indeterminate }) => {
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

export const Basic = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const WithLabel = LabelTemplate.bind({});
WithLabel.args = {
  indeterminate: true,
};
