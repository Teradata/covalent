import './action-ribbon';
import '../button/button';
import '../icon/icon';
import '../icon-button/icon-button';

export default {
  title: 'Components/Action Ribbon',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    labelText: { control: 'text' },
    state: {
      control: 'select',
      options: ['active', 'negative', 'positive', 'caution'],
    },
    icon: {
      control: 'text',
    },
    iconAriaLabel: {
      control: 'text',
    },
    centered: {
      control: 'boolean',
    },
  },
  tags: ['autodocs'],
};

// Shared render function
const renderActionRibbon = ({
  labelText = 'No changes',
  state,
  icon,
  iconAriaLabel,
  centered = false,
  saveDisabled = false,
}) => {
  return `
    <cv-action-ribbon
      labelText="${labelText}"
      ${state ? `state="${state}"` : ''}
      ${icon ? `icon="${icon}"` : ''}
      ${iconAriaLabel ? `iconAriaLabel="${iconAriaLabel}"` : ''}
      ${centered ? 'centered' : ''}>
      <cv-button slot="action-items" outlined>Cancel</cv-button>
      <cv-button slot="action-items" ${
        saveDisabled ? 'disabled' : ''
      } raised>Save</cv-button>
    </cv-action-ribbon>`;
};

export const Neutral = {
  name: 'Default / inactive',
  render: renderActionRibbon,
  args: {
    labelText: 'No changes',
    saveDisabled: true,
  },
};

export const Active = {
  render: renderActionRibbon,
  args: {
    state: 'active',
    labelText: 'You have unsaved changes',
  },
};

export const Positive = {
  render: renderActionRibbon,
  args: {
    state: 'positive',
    labelText: '(3/3) items selected',
    icon: 'check',
    iconAriaLabel: 'check',
  },
};

export const Negative = {
  render: renderActionRibbon,
  args: {
    state: 'negative',
    labelText: 'The name field may not contain numbers',
    icon: 'error',
    iconAriaLabel: 'error',
    saveDisabled: true,
  },
};

export const Caution = {
  render: renderActionRibbon,
  args: {
    state: 'caution',
    labelText: 'These changes will increase your monthly spending rate',
    icon: 'warning',
    iconAriaLabel: 'warning',
  },
};

export const Centered = {
  render: renderActionRibbon,
  args: {
    state: 'active',
    labelText: 'Centered action ribbon',
    centered: true,
  },
};

export const Loading = {
  render: renderActionRibbon,
  args: {
    labelText: 'Running...',
    saveDisabled: true,
  },
};

export const Pending = {
  render: renderActionRibbon,
  args: {
    state: 'disabled',
    labelText: 'Queued',
    saveDisabled: true,
  },
};

export const BulkSelectionInactive = {
  name: 'Bulk selection default / inactive',
  render: ({ labelText = '0 items selected', state, centered = false }) => {
    return `
      <cv-action-ribbon
        labelText="${labelText}"
        ${state ? `state="${state}"` : ''}
        ${centered ? 'centered' : ''}>
        <cv-icon-button slot="action-items" icon="filter_list"></cv-icon-button>
        <cv-icon-button slot="action-items" icon="search"></cv-icon-button>
        <cv-icon-button slot="action-items" icon="delete"></cv-icon-button>
      </cv-action-ribbon>`;
  },
  args: {
    labelText: '0 items selected',
  },
};

export const BulkSelectionActive = {
  name: 'Bulk selection active',
  render: ({ labelText = '1 item selected', state, centered = false }) => {
    return `
      <cv-action-ribbon
        labelText="${labelText}"
        ${state ? `state="${state}"` : ''}
        ${centered ? 'centered' : ''}>
        <cv-icon-button slot="action-items" icon="delete"></cv-icon-button>
      </cv-action-ribbon>`;
  },
  args: {
    state: 'active',
    labelText: '1 item selected',
  },
};
