import './select';
import '../list/list-item';

export default {
  title: 'Components/Select',
  argTypes: {
    style: {
        options: ['outlined', 'filled'],
        control: { type: 'radio' },
        defaultValue: 'outlined',
    },
    required: {
        control: 'boolean',
    },
    onSelect: { action: 'onClick'}
  }
};

const Template = ({ icon, style, required, helper }) => {

    return `
        <td-select
            label="${style}"
            validationMessage="This Field is Required"
            ${style}
            ${icon ? `icon="${icon}"` : null}
            ${helper ? `helper="${helper}"` : null}
            ${required ? `required` : null }>
            <td-list-item selected></td-list-item>
            <td-list-item ${icon ? `graphic="icon"` : null } value="0">Item 0</td-list-item>
            <td-list-item ${icon ? `graphic="icon"` : null } value="1">Item 1</td-list-item>
            <td-list-item ${icon ? `graphic="icon"` : null } value="2">Item 2</td-list-item>
            <td-list-item ${icon ? `graphic="icon"` : null } value="3">Item 3</td-list-item>
        </td-select>`;
};

export const Basic = Template.bind({});

export const Required = Template.bind({});
Required.args = {
    required: true,
};

export const Icon = Template.bind({});
Icon.args = {
    icon: 'event',
};

export const HelperText = Template.bind({});
HelperText.args = {
    helper: 'Helper Text',
};