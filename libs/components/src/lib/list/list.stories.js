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
    <td-list activatable>
        <li><td-list-item>Item 0</td-list-item></li>
        <li><td-list-item ${selected ? `selected activated` : null}>Item 1</td-list-item></li>
        <li><td-list-item>Item 2</td-list-item></li>
        <li><td-list-item>Item 3</td-list-item></li>
    </td-list>`;
};

const IconTemplate = ({ icon, iconStyle = 'avatar' }) => {

    return `
    <td-list>
        <li><td-list-item graphic="${iconStyle}">
            <span>${iconStyle} 0</span>
            <td-icon slot="graphic">${icon}</td-icon>
        </td-list-item></li>
        <li><td-list-item graphic="${iconStyle}">
            <span>${iconStyle} 2</span>
            <td-icon slot="graphic">${icon}</td-icon>
        </td-list-item></li>
        <li><td-list-item graphic="${iconStyle}">
            <span>${iconStyle} 3</span>
            <td-icon slot="graphic">${icon}</td-icon>
        </td-list-item></li>
        <li><td-list-item graphic="${iconStyle}">
            <span>${iconStyle} 4</span>
            <td-icon slot="graphic">${icon}</td-icon>
        </td-list-item></li>
        <li><td-list-item graphic="${iconStyle}">
            <span>${iconStyle} 5</span>
            <td-icon slot="graphic">${icon}</td-icon>
        </td-list-item></li>
    </td-list>`;
};

const TwoLineTemplate = ({ icon, style, required, helper }) => {

    return `
    <td-list>
        <li><td-list-item twoline>
            <span>Item 0</span>
            <span slot="secondary">Secondary line</span>
        </td-list-item></li>
        <li><td-list-item twoline>
            <span>Item 1</span>
            <span slot="secondary">Secondary line</span>
        </td-list-item></li>
        <li><td-list-item twoline>
            <span>Item 2</span>
            <span slot="secondary">Secondary line</span>
        </td-list-item></li>
        <li><td-list-item twoline>
            <span>Item 3</span>
            <span slot="secondary">Secondary line</span>
        </td-list-item></li>
    </td-list>`;
};

const CheckRadioTemplate = ({ listType }) => {

    return `
    <td-list multi>
        <li><td-${listType}-list-item selected>Item 0</td-${listType}-list-item></li>
        <li><td-${listType}-list-item selected>Item 1</td-${listType}-list-item></li>
        <li divider role="separator" padded></li>
        <li><td-${listType}-list-item left selected>Item 2 (left)</td-${listType}-list-item></li>
        <li><td-${listType}-list-item left>Item 3 (left)</td-${listType}-list-item></li>
    </td-list>`;
};

const SubItemTemplate = ({ selected }) => {
    return `
    <td-list activatable>
        <li><td-list-item>Item 0</td-list-item></li>
        <li><td-list-item graphic="avatar" ${selected ? `selected activated` : null} hasChildren>
          Item 1
            <td-icon slot="graphic">settings</td-icon>
        </td-list-item></li>
        <li><td-list-item childItem> SubItems 0</td-list-item></li>
        <li><td-list-item>Item 2</td-list-item></li>
        <li><td-list-item>Item 3</td-list-item></li>
    </td-list>`;
};


export const Basic = BasicTemplate.bind({});
Basic.args = {
    selected: false
}

export const WithAvatar = IconTemplate.bind({});
WithAvatar.args = {
    icon: 'folder',
    iconStyle: 'avatar'
}
WithAvatar.argTypes = {
    iconStyle: {
        options: ['avatar', 'icon', 'medium', 'large'],
        control: { type: 'radio' },
    },
}

export const TwoLine = TwoLineTemplate.bind({});

export const ChecksAndRadios = CheckRadioTemplate.bind({});
ChecksAndRadios.argTypes = {
    listType: {
        options: ['check', 'radio'],
        control: { type: 'radio' },
        defaultValue: 'check',
    },
}

export const SubItems = SubItemTemplate.bind({});