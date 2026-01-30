import './icon-radio-toggle';
import '../icon/icon';

export default {
  title: 'Components/Icon Radio',
  args: {
    iconOnly: false,
  },
  tags: ['autodocs'],
};

export const Template = ({ iconOnly }) => {
  return `
      <cv-radio-icon ${iconOnly ? 'iconOnly' : ''}>
        <cv-icon slot="icon">work</cv-icon>
        <div slot="text">Balanced</div>
        <div slot="text">Every week</div>
      </cv-radio-icon>
      <cv-radio-icon ${iconOnly ? 'iconOnly' : ''}>
        <cv-icon slot="icon">work</cv-icon>
        <div slot="text">Balanced</div>
        <div slot="text">Every week</div>
      </cv-radio-icon>
  `;
};

// Story for text only radio icons
export const TextOnly = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const textRadioContainer = document.getElementById('text-radio-demo');
    textRadioContainer.style.setProperty(
      '--cv-icon-radio-horizontal-alignment',
      'start',
    );
    textRadioContainer.style.setProperty(
      '--cv-icon-radio-vertical-alignment',
      'start',
    );
    textRadioContainer.style.setProperty(
      '--cv-icon-radio-text-alignment',
      'left',
    );
    textRadioContainer.style.setProperty('--cv-icon-radio-height', '120px');
  });
  return `
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
  `;
};
