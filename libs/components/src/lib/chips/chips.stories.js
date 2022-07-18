import { withDesign } from 'storybook-addon-designs'
import './chip';
import './chip-set';

export default {
  title: 'Components/Chips',
  argTypes: {
    label: { control: 'text', defaultValue: 'Chip' },
    icon:  {
      control: 'text',
      defaultValue: 'houseboat',
    },
    showIcon:  {
      control: 'boolean',
      defaultValue: false,
    },
    trailingIcon:  {
      control: 'boolean',
      defaultValue: false,
    },
    disabled:  {
      control: 'boolean',
      defaultValue: false,
    },
    avatar:  {
      control: 'boolean',
      defaultValue: false,
    }
  },
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/aDX2Rc1OIJ9tWgMcAvKRXv/Section?node-id=22%3A1453',
    },
  }
};

const Template = ({ avatar, label, disabled, icon, showIcon, state, trailingIcon }) => {

  return `<td-chip-set label="test chips">
           <td-chip
                label="${ label }"
                ${showIcon ? `icon="${icon}"` : '' }
                ${showIcon && trailingIcon ? `trailingIcon` : '' }
                ${avatar ? 'avatar' : '' }
                ${state ? `state="${state}"` : '' }
                ${disabled ? 'disabled' : '' } ></td-chip>
          </td-chip-set>`;
};

const SelectableTemplate = ({ multiSelectable, label, disabled, state }) => {

  return `<td-chip-set 
           label="test chips" 
           selectable
           activeIndex="0"
           ${multiSelectable ? 'multi' : '' }>
            <td-chip
                  label="${ label }"
                  filter
                  ${state ? `state="${state}"` : '' }
                  ${disabled ? 'disabled' : '' } ></td-chip>
            <td-chip
                  label="${ label } 2"
                  filter
                  ${state ? `state="${state}"` : '' }
                  ${disabled ? 'disabled' : '' } ></td-chip>
          </td-chip-set>`;
};

export const Basic = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
  state: 'secondary'
};

export const Caution = Template.bind({});
Caution.args = {
  state: 'caution'
};

export const Negative = Template.bind({});
Negative.args = {
  state: 'negative'
};

export const Selectable = SelectableTemplate.bind({});
Selectable.args = {
  showIcon: true,
  multiSelectable: false
}