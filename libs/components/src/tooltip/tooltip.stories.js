import './tooltip';
import '../icon/icon';

export default {
  title: 'Components/Tooltip',
  argTypes: {
    showDelayInMs: {
      control: 'number',
      label: 'show delay in milliseconds',
    },
    hideDelayInMs: {
      control: 'number',
      label: 'hide delay in milliseconds',
    },
  },
  args: {
    content: "I'm a tooltip!",
  },
  tags: ['autodocs'],
};

const Template = ({
  richTitle,
  isRich,
  isPersistent,
  content,
  showDelayInMs,
  hideDelayInMs,
}) => {
  document.addEventListener('DOMContentLoaded', () => {
    window.tooltip.anchor = window.button;
  });
  return `
    <cv-icon
      style="font-size: 36px;"
      aria-expanded="true"
      aria-haspopup="dialog"
      id="button">
      help
    </cv-icon>
    <cv-tooltip
      id="tooltip"
      ${richTitle ? `richTitle="${richTitle}"` : ''}
      ${showDelayInMs >= 0 ? `showDelay="${showDelayInMs}"` : ''}
      ${hideDelayInMs >= 0 ? `hideDelay="${hideDelayInMs}"` : ''}
      ${isRich ? 'rich' : ''}
      ${isPersistent ? 'persistent' : ''}>
      ${content}
    </cv-tooltip>
  `;
};

export const Basic = Template.bind({});

export const Rich = Template.bind({});
Rich.args = {
  isRich: true,
  isPersistent: true,
  richTitle: 'This is the rich title!',
  content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
      pretium vitae est et dapibus. Aenean sit amet felis eu lorem fermentum
      aliquam sit amet sit amet eros.
      <a class="mdc-tooltip__content-link" href="http://teradata.com" target="_blank">Learn more</a>.
      <cv-button slot="actionItems" label="Action"></button>
  `,
};

export const NoDelay = Template.bind({});
NoDelay.args = {
  showDelayInMs: 0,
  hideDelayInMs: 0,
};
