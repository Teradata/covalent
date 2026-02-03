import './icon-check-toggle';
import '../icon/icon';

export default {
  title: 'Components/Icon Checkbox',
  args: {
    width: 200,
    height: 160,
    iconOnly: false,
  },
  tags: ['autodocs'],
};

export const Template = ({ width, height, iconOnly }) => {
  return `
  <cv-checkbox-icon  ${iconOnly ? ' iconOnly' : ''}>
        <cv-icon slot="icon">work</cv-icon>
        <div slot="text">Balanced</div>
        <div slot="text">Every week</div>
      </cv-checkbox-icon>
      <cv-checkbox-icon  ${iconOnly ? 'iconOnly' : ''}>
        <cv-icon slot="icon">work</cv-icon>
        <div slot="text">Balanced</div>
        <div slot="text">Every week</div>
      </cv-checkbox-icon>
  `;
};

const GridExample = ({ iconOnly }) => {
  return `
  <div class="mdc-layout-grid">
  <div class="mdc-layout-grid__inner">
    <cv-checkbox-icon ${
      iconOnly ? 'iconOnly' : ''
    } class="mdc-layout-grid__cell">
          <cv-icon slot="icon">storage</cv-icon>
          <div slot="text">Data</div>
        </cv-checkbox-icon>
        <cv-checkbox-icon ${
          iconOnly ? 'iconOnly' : ''
        } class="mdc-layout-grid__cell">
          <cv-icon slot="icon">description</cv-icon>
          <div slot="text">Files</div>
        </cv-checkbox-icon>
        <cv-checkbox-icon ${
          iconOnly ? 'iconOnly' : ''
        } class="mdc-layout-grid__cell">
          <cv-icon slot="icon">bookmark</cv-icon>
          <div slot="text">Articles</div>
        </cv-checkbox-icon>
        <cv-checkbox-icon ${
          iconOnly ? 'iconOnly' : ''
        } class="mdc-layout-grid__cell">
          <cv-icon slot="icon">folder</cv-icon>
          <div slot="text">Projects</div>
        </cv-checkbox-icon>
        <cv-checkbox-icon ${
          iconOnly ? 'iconOnly' : ''
        } class="mdc-layout-grid__cell">
          <cv-icon slot="icon">assignment</cv-icon>
          <div slot="text">Notebooks</div>
        </cv-checkbox-icon>
        <cv-checkbox-icon ${
          iconOnly ? 'iconOnly' : ''
        } class="mdc-layout-grid__cell">
          <cv-icon slot="icon" >receipt_long</cv-icon>
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
