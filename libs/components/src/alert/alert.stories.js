import './alert';

export default {
  title: 'Components/Alert',
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    title: {
      control: 'text',
      defaultValue: 'Alert title',
    },
    description: {
      control: 'text',
      defaultValue: 'Alert description',
    },
    state: {
      options: ['neutral', 'active', 'positive', 'negative', 'caution'],
      control: { type: 'select' },
      defaultValue: 'active',
    },
    actionElement: {
      options: ['button', 'close icon', 'none'],
      control: { type: 'select' },
      defaultValue: 'button',
    },
    onClick: { action: 'onClick' },
  },
};

export const PageLevel = ({
  title,
  description,
  state,
  icon,
  actionElement,
  inline,
}) => {
  switch (state) {
    case 'positive':
      icon = 'check';
      break;
    case 'negative':
      icon = 'error';
      break;
    case 'caution':
      icon = 'warning';
      break;
    case 'active':
    default:
      icon = 'info_outline';
  }

  return `
        <cv-alert
          titleText="${title}"
          descriptionText="${description}"
          state="${state}"
          ${icon ? `icon="${icon}"` : ''}
          ${icon ? `iconAriaLabel="${icon}"` : ''}
          ${inline ? `inline` : ''}>
          ${
            actionElement === 'button'
              ? `<cv-button slot="action-items">Button Text</cv-button>`
              : ''
          }
          ${
            actionElement === 'close icon'
              ? `<cv-icon-button slot="action-items" icon="close"></cv-icon-button>`
              : ''
          }
        </cv-alert>`;
};

export const Inline = PageLevel.bind({});
Inline.args = {
  inline: true,
};
Inline.parameters = {
  layout: 'fullscreen',
};
