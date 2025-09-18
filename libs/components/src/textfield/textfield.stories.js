import './textfield';

export default {
  title: 'Components/Text field',
  argTypes: {
    style: {
      options: ['outlined', 'filled'],
      control: { type: 'radio' },
    },
  },
  args: {
    style: 'outlined',
    disabled: false,
    loading: false,
    loaderDensity: -6,
  },
};

const Template = ({
  icon,
  iconTrailing,
  label,
  style,
  disabled,
  required,
  helper,
  loading,
  loaderDensity,
}) => {
  return `
        <cv-textfield 
            label="${label ?? style}"
            ${style}
            ${
              iconTrailing && icon
                ? `iconTrailing="${icon}"`
                : icon
                  ? `icon="${icon}"`
                  : null
            }
            ${helper ? `helper="${helper}"` : null}
            ${disabled ? `disabled` : null}
            ${required ? `required` : null}
            ${loading ? 'loading' : null}
            ${loaderDensity ? `loaderDensity="${loaderDensity}"` : ''}
            >
        </cv-textfield>`;
};

export const Basic = Template.bind({});

export const Required = Template.bind({});
Required.args = {
  required: true,
};

export const Icon = Template.bind({});
Icon.args = {
  icon: 'houseboat',
  iconTrailing: false,
};

export const HelperText = Template.bind({});
HelperText.args = {
  label: 'Click to see helper text',
  helper: 'Helper Text',
};

export const Loading = Template.bind({});
Loading.args = {
  label: 'Loading state',
  icon: 'person',
  loading: true,
  loaderDensity: -6,
  iconTrailing: false,
};
