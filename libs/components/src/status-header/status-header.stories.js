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
    statusText: {
      control: { type: 'text' },
    },
    statusHelper: {
      control: { type: 'text' },
    },
    titleText: {
      control: { type: 'text' },
    },
    state: {
      options: ['active', 'caution', 'error', 'positive', 'neutral', 'pending'],
      control: { type: 'select' },
    },
  },
  args: {
    state: 'neutral',
    titleText: 'Item details',
    statusText: 'Status',
    statusHelper: 'secondary text',
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

const renderStatusHeader = ({
  state = 'neutral',
  statusText = 'status',
  statusHelper = 'secondary text',
  titleText = 'title',
  icon,
}) => {
  return `
    <cv-status-header state="${state}" statusText="${statusText}" statusHelper="${statusHelper}" titleText="${titleText}">
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

export const Active = {
  render: renderStatusHeader,
  args: {
    state: 'active',
    statusText: 'Running',
    titleText: 'Active item details',
  },
};

export const Caution = {
  render: renderStatusHeader,
  args: {
    state: 'caution',
    icon: 'warning',
    statusText: 'Caution',
    titleText: 'Caution item details',
  },
};

export const Error = {
  render: renderStatusHeader,
  args: {
    state: 'error',
    icon: 'error',
    statusText: 'Error',
    titleText: 'Error item details',
  },
};

export const Positive = {
  render: renderStatusHeader,
  args: {
    state: 'positive',
    icon: 'done',
    statusText: 'Positive',
    titleText: 'Positive item details',
  },
};

export const Paused = {
  render: renderStatusHeader,
  args: {
    icon: 'pause',
    statusText: 'Paused',
    titleText: 'Paused item details',
  },
};

export const Pending = {
  render: renderStatusHeader,
  args: {
    state: 'pending',
    statusText: 'Pending',
    titleText: 'Pending item details',
  },
};
