import './icon-radio-toggle';
import '../icon/icon';

export default {
  title: 'Components/Icon Radio',
  args: {
    iconOnly: false,
  },
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
