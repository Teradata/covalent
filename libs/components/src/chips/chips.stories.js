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
  },
  tags: ['autodocs'],
};

const Template = ({
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

const SelectableTemplate = ({ multiSelectable, label, disabled, state }) => {
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

export const Basic = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
  state: 'secondary',
};

export const Caution = Template.bind({});
Caution.args = {
  state: 'caution',
};

export const Positive = Template.bind({});
Positive.args = {
  state: 'positive',
};

export const Negative = Template.bind({});
Negative.args = {
  state: 'negative',
};

export const Selectable = SelectableTemplate.bind({});
Selectable.args = {
  showIcon: true,
  multiSelectable: false,
};
