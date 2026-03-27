import './tooltip';
import '../icon/icon';

function renderTooltip({
  richTitle,
  rich,
  persistent,
  content,
  showDelay,
  hidedelay,
}) {
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
      ${showDelay >= 0 ? `showDelay="${showDelay}"` : ''}
      ${hidedelay >= 0 ? `hideDelay="${hidedelay}"` : ''}
      ${rich ? 'rich' : ''}
      ${persistent ? 'persistent' : ''}>
      ${content}
    </cv-tooltip>
  `;
}

export default {
  title: 'Components/Tooltip',
  argTypes: {
    rich: {
      control: 'boolean',
    },
    persistent: {
      control: 'boolean',
    },
    richTitle: {
      control: 'text',
    },
    showDelay: {
      control: 'number',
      label: 'show delay in milliseconds',
    },
    hidedelay: {
      control: 'number',
      label: 'hide delay in milliseconds',
    },
  },
  args: {
    content: "I'm a tooltip!",
  },
  tags: ['autodocs'],
  render: renderTooltip,
};

export const Basic = {
  args: {},
};

export const Rich = {
  args: {
    rich: true,
    persistent: true,
    richTitle: 'This is the rich title!',
    content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
      pretium vitae est et dapibus. Aenean sit amet felis eu lorem fermentum
      aliquam sit amet sit amet eros.
      <a class="mdc-tooltip__content-link" href="http://teradata.com" target="_blank">Learn more</a>.
      <cv-button slot="actionItems" label="Action"></button>
  `,
  },
};

export const NoDelay = {
  args: {
    showDelay: 0,
    hidedelay: 0,
  },
};
