import './select';
import '../list/list-item';

export default {
  title: 'Components/Select',
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

const Template = ({ icon, style, required, helper }) => {
  return `
        <cv-select
            label="${style}"
            validationMessage="This Field is Required"
            ${style}
            ${icon ? `icon="${icon}"` : null}
            ${helper ? `helper="${helper}"` : null}
            ${required ? `required` : null}>
            <cv-list-item selected></cv-list-item>
            <cv-list-item ${
              icon ? `graphic="icon"` : null
            } value="0">Item 0</cv-list-item>
            <cv-list-item ${
              icon ? `graphic="icon"` : null
            } value="1">Item 1</cv-list-item>
            <cv-list-item ${
              icon ? `graphic="icon"` : null
            } value="2">Item 2</cv-list-item>
            <cv-list-item ${
              icon ? `graphic="icon"` : null
            } value="3">Item 3</cv-list-item>
        </cv-select>`;
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
