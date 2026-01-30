import './radio';
import '../formfield/formfield';

export default {
  title: 'Components/Radio',
  argTypes: {},
  tags: ['autodocs'],
};

const Template = ({ disabled }) => {
  return `<cv-radio
                ${disabled ? `disabled` : null}>
            </cv-radio>
            <cv-radio
                checked
                ${disabled ? `disabled` : null}>
            </cv-radio>
            <cv-radio
                indeterminate
                ${disabled ? `disabled` : null}>
            </cv-radio>`;
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
                <cv-radio ${indeterminate ? `indeterminate` : null}></cv-radio>
            </cv-formfield>
            
            <cv-formfield label="${label}">
                <cv-radio class="child"></cv-radio>
            </cv-formfield>
            
            <cv-formfield label="${label}">
                <cv-radio class="child" checked></cv-radio>
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
