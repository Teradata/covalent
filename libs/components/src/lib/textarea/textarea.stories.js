import './textarea';

export default {
  title: 'Components/Textarea',
  argTypes: {
    style: {
      options: ['outlined', 'filled'],
      control: { type: 'radio' },
      defaultValue: 'outlined',
    },
  }
};

const Template = ({ label, style, required, helper }) => {

    return `
        <td-textarea 
            label="${label ?? style}"
            ${style}
            ${helper ? `helper="${helper}"` : null}
            ${required ? `required` : null }>
        </td-textarea>`;
};

export const Basic = Template.bind({});

export const Required = Template.bind({});
Required.args = {
    required: true,
};

export const HelperText = Template.bind({});
HelperText.args = {
    label: 'Click to see helper text',
    helper: 'Helper Text',
};