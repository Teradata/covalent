import './status-header';
import './status-header-item';
import '../icon/icon';
import '../circular-progress/circular-progress';

export default {
  title: 'Components/Status Header',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    state: {
      options: ['active', 'caution', 'error', 'positive', 'neutral'],
      control: { type: 'select' },
    },
  },
  args: {
    state: 'neutral',
    title: 'Item details',
    status: 'Status',
    icon: 'Status',
  },
  tags: ['autodocs'],
};

const renderIcon = (state, icon) => {
  if (state === 'active') {
    return `<cv-circular-progress slot="status-header-icon" indeterminate density="-2"></cv-circular-progress>`;
  } else if (state === 'pending') {
    return `<cv-icon slot="status-header-icon" class="covalent-icon">loader_dots</cv-icon>`;
  } else {
    return `<cv-icon slot="status-header-icon">${icon}</cv-icon>`;
  }
};

const HeaderWithTabs = ({
  state = 'neutral',
  status = 'status',
  title = 'title',
  icon,
}) => {
  return `
    <cv-status-header state="${state}" statusText="${status}" statusHelper="secondary text" titleText="${title}">
      ${renderIcon(state, icon)}

      <cv-icon-button slot="status-header-actions" icon="close" dialogAction="close" ></cv-icon-button>

      <cv-status-header-item slot="status-header-text" label="Start time">
        09/30/21 4:38:50 PM
      </cv-status-header-item>
      <cv-status-header-item slot="status-header-text" label="Last heartbeat">
        09/30/21 4:38:51 PM
      </cv-status-header-item>
      <cv-status-header-item slot="status-header-text" label="Platform">
        linux-x64
      </cv-status-header-item>
      <cv-status-header-item slot="status-header-text" label="Softvare version">
        02.18.00.01-1
      </cv-status-header-item>
      <cv-status-header-item slot="status-header-text" label="Primary Cluster">
        Yes
      </cv-status-header-item>
      <cv-status-header-item slot="status-header-text" label="Primary Cluster manager">
        cs3094-04.labs.teradata.com
      </cv-status-header-item>
      <cv-tab-bar activeIndex="0">
        <cv-tab label="Tab one">
        </cv-tab>
        <cv-tab label="Tab two">
        </cv-tab>
        <cv-tab label="Tab three">
        </cv-tab>
      </cv-tab-bar>
    </cv-status-header>`;
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
