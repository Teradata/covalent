import { withDesign } from 'storybook-addon-designs';
import './icon-check-toggle';

export default {
  title: 'Components/Icon Checkbox',
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
      <td-checkbox-icon width=${width} height=${height} ${
    iconOnly ? ' iconOnly' : ''
  }>
        <td-icon slot="icon">work</td-icon>
        <div slot="text">Balanced</div>
        <div slot="text">Every week</div>
      </td-checkbox-icon>
      <td-checkbox-icon width=${width} height=${height} ${
    iconOnly ? 'iconOnly' : ''
  }>
        <td-icon slot="icon">work</td-icon>
        <div slot="text">Balanced</div>
        <div slot="text">Every week</div>
      </td-checkbox-icon>
    </div>
  `;
};

const GridExample = ({ width, height, iconOnly }) => {
  return `
    <div class="mdc-layout-grid">
      <div class="mdc-layout-grid__inner">
        <td-checkbox-icon width=${width} height=${height} ${
    iconOnly ? 'iconOnly' : ''
  } class="mdc-layout-grid__cell mdc-layout-grid__cell--span-4">
          <td-icon slot="icon">storage</td-icon>
          <div slot="text">Data</div>
        </td-checkbox-icon>
        <td-checkbox-icon width=${width} height=${height} ${
    iconOnly ? 'iconOnly' : ''
  } class="mdc-layout-grid__cell mdc-layout-grid__cell--span-4">
          <td-icon slot="icon">description</td-icon>
          <div slot="text">Files</div>
        </td-checkbox-icon>
        <td-checkbox-icon width=${width} height=${height} ${
    iconOnly ? 'iconOnly' : ''
  } class="mdc-layout-grid__cell mdc-layout-grid__cell--span-4">
          <td-icon slot="icon">bookmark</td-icon>
          <div slot="text">Articles</div>
        </td-checkbox-icon>
        <td-checkbox-icon width=${width} height=${height} ${
    iconOnly ? 'iconOnly' : ''
  } class="mdc-layout-grid__cell mdc-layout-grid__cell--span-4">
          <td-icon slot="icon">folder</td-icon>
          <div slot="text">Projects</div>
        </td-checkbox-icon>
        <td-checkbox-icon width=${width} height=${height} ${
    iconOnly ? 'iconOnly' : ''
  } class="mdc-layout-grid__cell mdc-layout-grid__cell--span-4">
          <td-icon slot="icon">assignment</td-icon>
          <div slot="text">Notebooks</div>
        </td-checkbox-icon>
        <td-checkbox-icon width=${width} height=${height} ${
    iconOnly ? 'iconOnly' : ''
  } class="mdc-layout-grid__cell mdc-layout-grid__cell--span-4">
          <td-icon slot="icon" class="covalent-icon">script</td-icon>
          <div slot="text">Scripts</div>
        </td-checkbox-icon>
      </div>
    </div>
  
  `;
};

export const WithGrid = GridExample.bind({});
WithGrid.args = {
  width: '105',
  height: '100',
};
