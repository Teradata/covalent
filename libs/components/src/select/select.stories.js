import './select';
import '../typography/typography';
import '../list/list-item';
import '../button/button';
import '../divider/divider';
import '../icon/icon';
import '../icon-lockup/icon-lockup';

export default {
  title: 'Components/Select',
  argTypes: {
    style: {
      options: ['outlined', 'filled', 'text'],
      control: { type: 'radio' },
    },
    disabled: {
      control: 'boolean',
    },
  },
  args: {
    style: 'outlined',
    disabled: false,
  },
  tags: ['autodocs'],
};

const Template = ({ icon, style, required, helper, disabled }) => {
  return `
        <cv-select
            label="${style}"
            validationMessage="This Field is Required"
            ${style}
            ${icon ? `icon="${icon}"` : null}
            ${helper ? `helper="${helper}"` : null}
            ${required ? `required` : null}
            ${disabled ? `disabled` : null}>
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

const Advanced = ({ icon, style, required, helper, disabled }) => {
  return `
        <cv-select
            label="${style}"
            validationMessage="This Field is Required"
            naturalMenuWidth
            twoLine
            ${style}
            ${icon ? `icon="${icon}"` : null}
            ${helper ? `helper="${helper}"` : null}
            ${required ? `required` : null}
            ${disabled ? `disabled` : null}>
            <cv-icon-lockup slot="selected-secondary" icon="check" scale="caption" state="positive">online</cv-icon-lockup>
            <cv-typography scale="subtitle2" style="margin:0px 16px 10px;">Select an Item</cv-typography>
            <cv-divider flush></cv-divider>
            <cv-list-item twoline selected hasMeta ${
              icon ? `graphic="icon"` : null
            } value="0">
            Basic user
            <cv-icon slot="graphic">check</cv-icon>
            <span slot="secondary">1 CPU, 2GB RAM</span>
            <cv-button slot="meta" label="start" outlined style="--cv-density-mode:-3; margin-left: 24px"></cv-button>
          </cv-list-item>
          <cv-list-item twoline selected ${
            icon ? `graphic="icon"` : null
          } value="1">
            Advanced user
            <span slot="secondary">2 CPU, 4GB RAM</span>
          </cv-list-item>
          <cv-list-item twoline ${icon ? `graphic="icon"` : null} value="2">
            Pro user
            <span slot="secondary">4 CPU, 8GB RAM</span>
          </cv-list-item>
          <cv-divider flush></cv-divider>
          <div>
            <cv-list-item graphic="icon" label="Add New" style="--mdc-theme-text-primary-on-background:var(--mdc-theme-primary);--mdc-theme-text-icon-on-background:var(--mdc-theme-primary);">
              <cv-icon slot="graphic">add</cv-icon>
              Add New
            </cv-list-item>
          </div>
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

export const twoLine = Advanced.bind({});
twoLine.args = {
  icon: 'power',
  required: true,
};
