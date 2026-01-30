import './list';
import './list-item';
import './check-list-item';
import './radio-list-item';
import '../icon/icon';

export default {
  title: 'Components/List',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

const BasicTemplate = ({ selected, disabled }) => {
  return `
    <cv-list activatable>
        <cv-list-item ${disabled ? `disabled` : null}>Item 0</cv-list-item>
        <cv-list-item ${
          selected ? `selected activated` : null
        }>Item 1</cv-list-item>
        <cv-list-item>Item 2</cv-list-item>
        <cv-list-item>Item 3</cv-list-item>
    </cv-list>`;
};

const IconTemplate = ({ icon, iconStyle = 'avatar', disabled }) => {
  return `
    <cv-list>
        <cv-list-item graphic="${iconStyle}" ${disabled ? `disabled` : null}>
            <span>${iconStyle} 0</span>
            <cv-icon slot="graphic">${icon}</cv-icon>
        </cv-list-item>
        <cv-list-item graphic="${iconStyle}">
            <span>${iconStyle} 2</span>
            <cv-icon slot="graphic">${icon}</cv-icon>
        </cv-list-item>
        <cv-list-item graphic="${iconStyle}">
            <span>${iconStyle} 3</span>
            <cv-icon slot="graphic">${icon}</cv-icon>
        </cv-list-item>
        <cv-list-item graphic="${iconStyle}">
            <span>${iconStyle} 4</span>
            <cv-icon slot="graphic">${icon}</cv-icon>
        </cv-list-item>
        <cv-list-item graphic="${iconStyle}">
            <span>${iconStyle} 5</span>
            <cv-icon slot="graphic">${icon}</cv-icon>
        </cv-list-item>
    </cv-list>`;
};

const TwoLineTemplate = ({ icon, style, required, helper, disabled }) => {
  return `
    <cv-list>
        <cv-list-item twoline ${disabled ? `disabled` : null}>
            <span>Item 0</span>
            <span slot="secondary">Secondary line</span>
        </cv-list-item>
        <cv-list-item twoline>
            <span>Item 1</span>
            <span slot="secondary">Secondary line</span>
        </cv-list-item>
        <cv-list-item twoline>
            <span>Item 2</span>
            <span slot="secondary">Secondary line</span>
        </cv-list-item>
        <cv-list-item twoline>
            <span>Item 3</span>
            <span slot="secondary">Secondary line</span>
        </cv-list-item>
    </cv-list>`;
};

const CheckRadioTemplate = ({ listType = 'check', disabled }) => {
  return `
    <cv-list multi>
        <cv-${listType}-list-item selected ${
          disabled ? `disabled` : null
        }>Item 0</cv-${listType}-list-item>
        <cv-${listType}-list-item selected>Item 1</cv-${listType}-list-item>
        <li divider role="separator" padded></li>
        <cv-${listType}-list-item left selected>Item 2 (left)</cv-${listType}-list-item>
        <cv-${listType}-list-item left>Item 3 (left)</cv-${listType}-list-item>
    </cv-list>`;
};

export const Basic = BasicTemplate.bind({});
Basic.args = {
  selected: false,
  disabled: false,
};

export const WithAvatar = IconTemplate.bind({});
WithAvatar.args = {
  icon: 'folder',
  iconStyle: 'avatar',
  disabled: false,
};
WithAvatar.argTypes = {
  iconStyle: {
    options: ['avatar', 'icon', 'medium', 'large'],
    control: { type: 'radio' },
  },
};

export const TwoLine = TwoLineTemplate.bind({});
TwoLine.args = {
  disabled: false,
};

export const ChecksAndRadios = CheckRadioTemplate.bind({});
ChecksAndRadios.args = {
  disabled: false,
};
ChecksAndRadios.argTypes = {
  listType: {
    options: ['check', 'radio'],
    control: { type: 'radio' },
  },
};
