import './textarea';

export default {
  title: 'Components/Text area',
  argTypes: {
    style: {
      options: ['outlined', 'filled'],
      control: { type: 'radio' },
    },
  },
  args: {
    style: 'outlined',
  },
};

const Template = ({ label, style, required, helper }) => {
  return `
        <cv-textarea 
            label="${label ?? style}"
            ${style}
            ${helper ? `helper="${helper}"` : null}
            ${required ? `required` : null}>
        </cv-textarea>`;
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
