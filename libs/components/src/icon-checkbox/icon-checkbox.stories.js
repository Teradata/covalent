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
      <cv-checkbox-icon width=${width} height=${height} ${
    iconOnly ? ' iconOnly' : ''
  }>
        <cv-icon slot="icon">work</cv-icon>
        <div slot="text">Balanced</div>
        <div slot="text">Every week</div>
      </cv-checkbox-icon>
      <cv-checkbox-icon width=${width} height=${height} ${
    iconOnly ? 'iconOnly' : ''
  }>
        <cv-icon slot="icon">work</cv-icon>
        <div slot="text">Balanced</div>
        <div slot="text">Every week</div>
      </cv-checkbox-icon>
    </div>
  `;
};

const GridExample = ({ width, height, iconOnly }) => {
  return `
    <div class="mdc-layout-grid">
      <div class="mdc-layout-grid__inner">
        <cv-checkbox-icon width=${width} height=${height} ${
    iconOnly ? 'iconOnly' : ''
  } class="mdc-layout-grid__cell mdc-layout-grid__cell--span-4">
          <cv-icon slot="icon">storage</cv-icon>
          <div slot="text">Data</div>
        </cv-checkbox-icon>
        <cv-checkbox-icon width=${width} height=${height} ${
    iconOnly ? 'iconOnly' : ''
  } class="mdc-layout-grid__cell mdc-layout-grid__cell--span-4">
          <cv-icon slot="icon">description</cv-icon>
          <div slot="text">Files</div>
        </cv-checkbox-icon>
        <cv-checkbox-icon width=${width} height=${height} ${
    iconOnly ? 'iconOnly' : ''
  } class="mdc-layout-grid__cell mdc-layout-grid__cell--span-4">
          <cv-icon slot="icon">bookmark</cv-icon>
          <div slot="text">Articles</div>
        </cv-checkbox-icon>
        <cv-checkbox-icon width=${width} height=${height} ${
    iconOnly ? 'iconOnly' : ''
  } class="mdc-layout-grid__cell mdc-layout-grid__cell--span-4">
          <cv-icon slot="icon">folder</cv-icon>
          <div slot="text">Projects</div>
        </cv-checkbox-icon>
        <cv-checkbox-icon width=${width} height=${height} ${
    iconOnly ? 'iconOnly' : ''
  } class="mdc-layout-grid__cell mdc-layout-grid__cell--span-4">
          <cv-icon slot="icon">assignment</cv-icon>
          <div slot="text">Notebooks</div>
        </cv-checkbox-icon>
        <cv-checkbox-icon width=${width} height=${height} ${
    iconOnly ? 'iconOnly' : ''
  } class="mdc-layout-grid__cell mdc-layout-grid__cell--span-4">
          <cv-icon slot="icon" class="covalent-icon">script</cv-icon>
          <div slot="text">Scripts</div>
        </cv-checkbox-icon>
      </div>
    </div>
  
  `;
};

export const WithGrid = GridExample.bind({});
WithGrid.args = {
  width: '105',
  height: '100',
};
