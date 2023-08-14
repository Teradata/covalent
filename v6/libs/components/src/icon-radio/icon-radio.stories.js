import './icon-radio-toggle';

export default {
  title: 'Components/Icon Radio',
  argTypes: {
    iconOnly: {
      control: 'boolean',
      defaultValue: false,
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/xrXnnUqmcOWk5YfmY6zcqg/Tabs?node-id=1484%3A37281',
    },
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
