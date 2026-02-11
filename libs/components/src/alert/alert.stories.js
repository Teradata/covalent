import './alert';

export default {
  title: 'Components/Alert',
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    state: {
      options: ['neutral', 'active', 'positive', 'negative', 'caution'],
      control: { type: 'select' },
    },
    actionElement: {
      options: ['button', 'close icon', 'none'],
      control: { type: 'select' },
    },
    inline: {
      control: { type: 'boolean' },
    },
  },
  args: {
    icon: 'info',
    state: 'neutral',
    inline: false,
    titleText: 'Alert title',
    iconAriaLabel: 'aria-label for the icon',
    descriptionText: 'Alert description',
    actionElement: 'button',
  },
  tags: ['autodocs'],
};

// Shared render function
const renderAlert = ({
  icon,
  state,
  inline,
  titleText,
  iconAriaLabel,
  descriptionText,
  actionElement,
}) => {
  return `
        <cv-alert
          ${icon ? `icon="${icon}"` : ''}
          ${state ? `state="${state}"` : ''}
          ${inline ? `inline` : ''}
          ${titleText ? `titleText="${titleText}"` : ''}
          ${iconAriaLabel ? `iconAriaLabel="${iconAriaLabel}"` : ''}
          ${descriptionText ? `descriptionText="${descriptionText}"` : ''}>
          ${
            actionElement === 'button'
              ? `<cv-button slot="action-items">Button text</cv-button>`
              : ''
          }
          ${
            actionElement === 'close icon'
              ? `<cv-icon-button slot="action-items" icon="close"></cv-icon-button>`
              : ''
          }
        </cv-alert>`;
};

export const PageLevel = {
  render: renderAlert,
};

export const Inline = {
  render: renderAlert,
  args: {
    inline: true,
  },
  parameters: {
    layout: 'fullscreen',
  },
};
