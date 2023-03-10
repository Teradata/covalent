import './action-ribbon';
import '../button/button';
import '../icon/icon';

export default {
  title: 'Components/Action Ribbon',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    label: { control: 'text' },
    icon: {
      control: 'text',
    },
    onClick: { action: 'onClick' },
  },
};

export const Neutral = ({ label, color, icon, saveDisabled = false }) => {
  return `
    <cv-action-ribbon
      labelText="${label}"
      state="${color}" 
      ${icon ? `icon="${icon}"` : null}
      ${icon ? `iconAriaLabel="${icon}"` : null}>
      <cv-button slot="action-items" outlined>Cancel</cv-button>
      <cv-button slot="action-items" ${
        saveDisabled ? 'disabled' : null
      } raised>Save</cv-button>
    </cv-action-ribbon>`;
};

export const Active = Neutral.bind({});
Active.args = {
  color: 'active',
  label: 'You have unsaved changes',
};
export const Positive = Neutral.bind({});
Positive.args = {
  color: 'positive',
  label: '(3/3) items selected',
  icon: 'check',
};
export const Negative = Neutral.bind({});
Negative.args = {
  color: 'negative',
  label: 'The name field may not contain numbers',
  icon: 'error',
  saveDisabled: true,
};
export const Caution = Neutral.bind({});
Caution.args = {
  color: 'caution',
  label: 'These changes will increase your monthly spending rate',
  icon: 'warning',
};
