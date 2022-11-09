export default {
  title: 'Components/Status Header',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    title: {
      control: 'text',
      defaultValue: 'Item details',
    },
    state: {
      options: ['active', 'caution', 'error', 'positive', 'neutral'],
      control: { type: 'select' },
      defaultValue: 'neutral',
    },
    status: {
      control: 'text',
      defaultValue: 'Status',
    },
    icon: {
      control: 'text',
      defaultValue: 'Status',
    },
  },
};

const renderIcon = (state, icon) => {
  if (state === 'active') {
    return `<td-circular-progress slot="status-header-icon" indeterminate density="-2"></td-circular-progress>`;
  } else if (state === 'pending') {
    return `<td-icon slot="status-header-icon" class="covalent-icon">loader_dots</td-icon>`;
  } else {
    return `<td-icon slot="status-header-icon">${icon}</td-icon>`;
  }
};

const HeaderWithTabs = ({ state = 'neutral', status, title, icon }) => {
  return `
    <td-status-header state="${state}" statusText="${status}" statusHelper="Status" titleText="${title}">
      ${renderIcon(state, icon)}

      <td-icon-button slot="status-header-actions" icon="close" dialogAction="close" ></td-icon-button>

      <td-status-header-item slot="status-header-text" label="Start time">
        09/30/21 4:38:50 PM
      </td-status-header-item>
      <td-status-header-item slot="status-header-text" label="Last heartbeat">
        09/30/21 4:38:51 PM
      </td-status-header-item>
      <td-status-header-item slot="status-header-text" label="Platform">
        linux-x64
      </td-status-header-item>
      <td-status-header-item slot="status-header-text" label="Softvare version">
        02.18.00.01-1
      </td-status-header-item>
      <td-status-header-item slot="status-header-text" label="Primary Cluster">
        Yes
      </td-status-header-item>
      <td-status-header-item slot="status-header-text" label="Primary Cluster manager">
        cs3094-04.labs.teradata.com
      </td-status-header-item>
      <td-tab-bar activeIndex="0">
        <td-tab label="Tab one">
        </td-tab>
        <td-tab label="Tab two">
        </td-tab>
        <td-tab label="Tab three">
        </td-tab>
      </td-tab-bar>
    </td-status-header>`;
};

export const Active = HeaderWithTabs.bind({});
Active.args = {
  state: 'active',
  status: 'Running',
  title: 'Active item details',
};
export const Caution = HeaderWithTabs.bind({});
Caution.args = {
  state: 'caution',
  icon: 'warning',
  status: 'Caution',
  title: 'Caution item details',
};
export const Error = HeaderWithTabs.bind({});
Error.args = {
  state: 'error',
  icon: 'error',
  status: 'Error',
  title: 'Error item details',
};
export const Positive = HeaderWithTabs.bind({});
Positive.args = {
  state: 'positive',
  icon: 'done',
  status: 'Positive',
  title: 'Positive item details',
};
export const Paused = HeaderWithTabs.bind({});
Paused.args = {
  icon: 'pause',
  status: 'Paused',
  title: 'Paused item details',
};
export const Pending = HeaderWithTabs.bind({});
Pending.args = {
  state: 'pending',
  status: 'Pending',
  title: 'Pending item details',
};
