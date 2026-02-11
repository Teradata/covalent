import { state } from 'lit/decorators.js';
import './chip';
import './chip-set';

export default {
  title: 'Components/Chips',
  args: {
    label: 'Chip',
    icon: 'houseboat',
    showIcon: false,
    trailingIcon: false,
    disabled: false,
    avatar: false,
    state: 'secondary',
    filter: false,
  },
  argTypes: {
    state: {
      control: 'select',
      options: [undefined, 'secondary', 'negative', 'positive', 'caution'],
    },
  },
  tags: ['autodocs'],
};

// Shared render function for basic chip variants
const renderChip = ({
  avatar,
  label,
  disabled,
  icon,
  showIcon,
  state,
  trailingIcon,
}) => {
  return `<cv-chip-set label="test chips">
           <cv-chip
                label="${label}"
                ${showIcon ? `icon="${icon}"` : ''}
                ${showIcon && trailingIcon ? `trailingIcon` : ''}
                ${avatar ? 'avatar' : ''}
                ${state ? `state="${state}"` : ''}
                ${disabled ? 'disabled' : ''} ></cv-chip>
          </cv-chip-set>`;
};

// Shared render function for selectable chips
const renderSelectableChip = ({ multiSelectable, label, disabled, state }) => {
  return `<cv-chip-set 
           label="test chips" 
           selectable
           activeIndex="0"
           ${multiSelectable ? 'multi' : ''}>
            <cv-chip
                  label="${label}"
                  filter
                  ${state ? `state="${state}"` : ''}
                  ${disabled ? 'disabled' : ''} ></cv-chip>
            <cv-chip
                  label="${label} 2"
                  filter
                  ${state ? `state="${state}"` : ''}
                  ${disabled ? 'disabled' : ''} ></cv-chip>
          </cv-chip-set>`;
};

export const Main = {
  render: renderChip,
};
export const Icon = {
  render: renderChip,
  args: {
    label: 'Person',
    showIcon: true,
    icon: 'person',
    state: 'caution',
  },
};

export const Secondary = {
  args: {
    state: 'secondary',
  },
  render: renderChip,
};

export const Caution = {
  args: {
    state: 'caution',
  },
  render: renderChip,
};

export const Positive = {
  args: {
    state: 'positive',
  },
  render: renderChip,
};

export const Negative = {
  args: {
    state: 'negative',
  },
  render: renderChip,
};

export const Selectable = {
  args: {
    showIcon: true,
    multiSelectable: false,
  },
  render: renderSelectableChip,
};
