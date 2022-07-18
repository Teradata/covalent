import './checkbox';
import '../formfield/formfield';

export default {
  title: 'Components/Checkbox',
  argTypes: {
    onClick: { action: 'onClick'}
  }
};

const Template = ({ disabled }) => {
    
    return `<td-checkbox
                ${disabled ? `disabled` : null }>
            </td-checkbox>
            <td-checkbox
                checked
                ${disabled ? `disabled` : null }>
            </td-checkbox>
            <td-checkbox
                indeterminate
                ${disabled ? `disabled` : null }>
            </td-checkbox>`;
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
                <td-checkbox ${indeterminate ? `indeterminate` : null }></td-checkbox>
            </td-formfield>
            
            <td-formfield label="${label}">
                <td-checkbox class="child"></td-checkbox>
            </td-formfield>
            
            <td-formfield label="${label}">
                <td-checkbox class="child" checked></td-checkbox>
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