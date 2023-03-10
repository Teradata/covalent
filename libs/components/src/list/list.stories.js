import './list';
import './list-item';
import './check-list-item';
import './radio-list-item';
import '../icon/icon';

export default {
  title: 'Components/List',
};

const BasicTemplate = ({ selected }) => {
  return `
    <cv-list activatable>
        <li><cv-list-item>Item 0</cv-list-item></li>
        <li><cv-list-item ${
          selected ? `selected activated` : null
        }>Item 1</cv-list-item></li>
        <li><cv-list-item>Item 2</cv-list-item></li>
        <li><cv-list-item>Item 3</cv-list-item></li>
    </cv-list>`;
};

const IconTemplate = ({ icon, iconStyle = 'avatar' }) => {
  return `
    <cv-list>
        <li><cv-list-item graphic="${iconStyle}">
            <span>${iconStyle} 0</span>
            <cv-icon slot="graphic">${icon}</cv-icon>
        </cv-list-item></li>
        <li><cv-list-item graphic="${iconStyle}">
            <span>${iconStyle} 2</span>
            <cv-icon slot="graphic">${icon}</cv-icon>
        </cv-list-item></li>
        <li><cv-list-item graphic="${iconStyle}">
            <span>${iconStyle} 3</span>
            <cv-icon slot="graphic">${icon}</cv-icon>
        </cv-list-item></li>
        <li><cv-list-item graphic="${iconStyle}">
            <span>${iconStyle} 4</span>
            <cv-icon slot="graphic">${icon}</cv-icon>
        </cv-list-item></li>
        <li><cv-list-item graphic="${iconStyle}">
            <span>${iconStyle} 5</span>
            <cv-icon slot="graphic">${icon}</cv-icon>
        </cv-list-item></li>
    </cv-list>`;
};

const TwoLineTemplate = ({ icon, style, required, helper }) => {
  return `
    <cv-list>
        <li><cv-list-item twoline>
            <span>Item 0</span>
            <span slot="secondary">Secondary line</span>
        </cv-list-item></li>
        <li><cv-list-item twoline>
            <span>Item 1</span>
            <span slot="secondary">Secondary line</span>
        </cv-list-item></li>
        <li><cv-list-item twoline>
            <span>Item 2</span>
            <span slot="secondary">Secondary line</span>
        </cv-list-item></li>
        <li><cv-list-item twoline>
            <span>Item 3</span>
            <span slot="secondary">Secondary line</span>
        </cv-list-item></li>
    </cv-list>`;
};

const CheckRadioTemplate = ({ listType }) => {
  return `
    <cv-list multi>
        <li><cv-${listType}-list-item selected>Item 0</cv-${listType}-list-item></li>
        <li><cv-${listType}-list-item selected>Item 1</cv-${listType}-list-item></li>
        <li divider role="separator" padded></li>
        <li><cv-${listType}-list-item left selected>Item 2 (left)</cv-${listType}-list-item></li>
        <li><cv-${listType}-list-item left>Item 3 (left)</cv-${listType}-list-item></li>
    </cv-list>`;
};

const SubItemTemplate = ({ selected }) => {
  return `
    <cv-list activatable>
        <li><cv-list-item>Item 0</cv-list-item></li>
        <li><cv-list-item graphic="avatar" ${
          selected ? `selected activated` : null
        } hasChildren>
          Item 1
            <cv-icon slot="graphic">settings</cv-icon>
        </cv-list-item></li>
        <li><cv-list-item childItem> SubItems 0</cv-list-item></li>
        <li><cv-list-item>Item 2</cv-list-item></li>
        <li><cv-list-item>Item 3</cv-list-item></li>
    </cv-list>`;
};

export const Basic = BasicTemplate.bind({});
Basic.args = {
  selected: false,
};

export const WithAvatar = IconTemplate.bind({});
WithAvatar.args = {
  icon: 'folder',
  iconStyle: 'avatar',
};
WithAvatar.argTypes = {
  iconStyle: {
    options: ['avatar', 'icon', 'medium', 'large'],
    control: { type: 'radio' },
  },
};

export const TwoLine = TwoLineTemplate.bind({});

export const ChecksAndRadios = CheckRadioTemplate.bind({});
ChecksAndRadios.argTypes = {
  listType: {
    options: ['check', 'radio'],
    control: { type: 'radio' },
    defaultValue: 'check',
  },
};

export const SubItems = SubItemTemplate.bind({});
