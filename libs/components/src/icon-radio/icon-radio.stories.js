import './icon-radio-toggle';
import '../icon/icon';

export default {
  title: 'Components/Icon Radio',
  args: {
    iconOnly: false,
    checked: false,
    disabled: false,
    value: '',
    name: '',
  },
  tags: ['autodocs'],
};

export const Template = {
  render: ({ iconOnly, checked, disabled, value, name }) => {
    const attrs = [
      iconOnly ? 'iconOnly' : '',
      checked ? 'checked' : '',
      disabled ? 'disabled' : '',
      value ? `value="${value}"` : '',
      name ? `name="${name}"` : '',
    ]
      .filter(Boolean)
      .join(' ');

    return `
      <cv-radio-icon ${attrs}>
        <cv-icon slot="icon">work</cv-icon>
        <div slot="text">Balanced</div>
        <div slot="text">Every week</div>
      </cv-radio-icon>
      <cv-radio-icon ${attrs}>
        <cv-icon slot="icon">work</cv-icon>
        <div slot="text">Balanced</div>
        <div slot="text">Every week</div>
      </cv-radio-icon>
  `;
  },
};

export const Unchecked = {
  render: Template.render,
  args: {
    checked: false,
  },
};

export const Checked = {
  render: Template.render,
  args: {
    checked: true,
  },
};

export const Disabled = {
  render: Template.render,
  args: {
    checked: false,
    disabled: true,
  },
};

// Story for text only radio icons
export const TextOnly = {
  render: () => `
    <div id="text-radio-demo">
      <cv-radio-icon>
        <div slot="text">Basic</div>
        <div slot="text">
          <cv-typography scale="body2">Best for simple, consistently formatted documents.</cv-typography>
          <cv-typography scale="caption" style="margin-top: 16px;">May split mid-sentence or lose structure in complex formats.</cv-typography>
        </div>
      </cv-radio-icon>
      <cv-radio-icon>
        <div slot="text">SherpaLLM</div>
        <div slot="text">
          <cv-typography scale="body2">Best for structured, formatted, PDF documents.</cv-typography>
          <cv-typography scale="caption" style="margin-top: 16px;">May struggle with irregular formatting or images.</cv-typography>
        </div>
      </cv-radio-icon>
      <cv-radio-icon>
        <div slot="text">Vector-Distance</div>
        <div slot="text">
          <cv-typography scale="body2">Best for high-dimensional, large-scale datasets where fast nearest-neighbor search is required</cv-typography>
        </div>
      </cv-radio-icon>
    </div>
  `,
  play: async ({ canvasElement }) => {
    const root = canvasElement.querySelector('#text-radio-demo');
    if (!root) return;
    root.style.setProperty('--cv-icon-radio-horizontal-alignment', 'start');
    root.style.setProperty('--cv-icon-radio-vertical-alignment', 'start');
    root.style.setProperty('--cv-icon-radio-text-alignment', 'left');
    root.style.setProperty('--cv-icon-radio-height', '120px');
  },
};
