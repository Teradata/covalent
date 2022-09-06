import { withDesign } from 'storybook-addon-designs';
import './icon-radio-toggle';

export default {
  title: 'Components/Icon Radio',
  argTypes: {
    width: {
      control: 'text',
      defaultValue: '200',
      description: 'Can take either a number or fill',
    },
    height: {
      control: 'text',
      defaultValue: '160',
    },
    iconOnly: {
      control: 'boolean',
      defaultValue: false,
    },
  },
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/xrXnnUqmcOWk5YfmY6zcqg/Tabs?node-id=1484%3A37281',
    },
  },
};

export const Template = ({ width, height, iconOnly }) => {
  return `
    <div style="width:600px; display:flex; border:solid 1px var(--mdc-theme-border); padding: 16px 0px; justify-content: center; gap:16px;">
      <td-radio-icon width=${width} height=${height} ${
    iconOnly ? 'iconOnly' : ''
  }>
        <td-icon slot="icon">work</td-icon>
        <div slot="text">Balanced</div>
        <div slot="text">Every week</div>
      </td-radio-icon>
      <td-radio-icon width=${width} height=${height} ${
    iconOnly ? 'iconOnly' : ''
  }>
        <td-icon slot="icon">work</td-icon>
        <div slot="text">Balanced</div>
        <div slot="text">Every week</div>
      </td-radio-icon>
    </div>
  `;
};
