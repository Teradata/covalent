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

// Story for dynamic line-clamp testing
export const DynamicLineClamp = {
  render: () => `
    <div id="dynamic-demo" style="display: flex; gap: 20px; flex-direction: column;">
      <cv-radio-icon id="test-card">
        <div slot="text">Short</div>
        <div slot="text">
          This is a description that should get more lines when the title is short. Let's add more text to see how it behaves with the dynamic line clamping. More content here to test the behavior properly
        </div>
      </cv-radio-icon>
      <cv-button id="change-text" label="Toggle Title Length" raised></cv-button>
    </div>
  `,
  play: async ({ canvasElement }) => {
    const root = canvasElement.querySelector('#dynamic-demo');
    const card = canvasElement.querySelector('#test-card');
    if (!root || !card) return;

    root.style.setProperty('--cv-icon-radio-horizontal-alignment', 'start');
    root.style.setProperty('--cv-icon-radio-vertical-alignment', 'start');
    root.style.setProperty('--cv-icon-radio-text-alignment', 'left');
    root.style.setProperty('--cv-icon-radio-height', '120px');

    const button = canvasElement.querySelector('#change-text');
    const titleDiv = card.querySelector('[slot="text"]');

    let isShort = true;
    button?.addEventListener('click', () => {
      if (isShort) {
        titleDiv.textContent =
          'This Is Now A Very Long Title That Spans Two Full Lines';
      } else {
        titleDiv.textContent = 'Short';
      }
      isShort = !isShort;
    });
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
          <cv-typography scale="caption" style="margin-top: 16px;">May struggle with irregular formatting or images.</cv-typography>
          <cv-typography scale="caption" style="margin-top: 16px;">May struggle with irregular formatting or images.</cv-typography>
        </div>
      </cv-radio-icon>
      <cv-radio-icon>
        <div slot="text">Vector-Distance</div> 
        <div slot="text">
          Best for high-dimensional, large-scale datasets where fast nearest-neighbor search is required, large-scale datasets where fast nearest-neighbor search is required
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
