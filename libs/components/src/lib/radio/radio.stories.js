import './radio';
import '../formfield/formfield';

export default {
  title: 'Components/Radio',
  argTypes: {
    onClick: { action: 'onClick'}
  }
};

const Template = ({ disabled }) => {
    
    return `<td-radio
                ${disabled ? `disabled` : null }>
            </td-radio>
            <td-radio
                checked
                ${disabled ? `disabled` : null }>
            </td-radio>
            <td-radio
                indeterminate
                ${disabled ? `disabled` : null }>
            </td-radio>`;
};

const LabelTemplate = ({ label = 'Bananas', indeterminate }) => {
    
    return `
            <style>
                td-formfield {
                    display: block;
                }
                .child {
                    margin-left: 20px;
                }
            </style>
            <td-formfield label="${label}">
                <td-radio ${indeterminate ? `indeterminate` : null }></td-radio>
            </td-formfield>
            
            <td-formfield label="${label}">
                <td-radio class="child"></td-radio>
            </td-formfield>
            
            <td-formfield label="${label}">
                <td-radio class="child" checked></td-radio>
            </td-formfield>`;
};

export const Basic = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
}

export const WithLabel = LabelTemplate.bind({});
WithLabel.args = {
    indeterminate: true
};