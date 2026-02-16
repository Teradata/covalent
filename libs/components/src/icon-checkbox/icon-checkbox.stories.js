import './icon-check-toggle';
import '../icon/icon';

export default {
  title: 'Components/Icon Checkbox',
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'True when the icon checkbox is checked',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the icon checkbox and renders in muted colors.',
    },
    iconOnly: {
      control: 'boolean',
      description: 'Displays the icon without any text in the icon checkbox',
    },
    value: {
      control: 'text',
      description:
        'The value that will be included if the checkbox is submitted in a form.',
    },
    width: {
      control: 'number',
      description: 'Sets the width of the icon checkbox',
    },
    height: {
      control: 'number',
      description: 'Sets the height of the icon checkbox',
    },
  },
  args: {
    width: 200,
    height: 160,
    iconOnly: false,
    checked: false,
    disabled: false,
    value: '',
  },
  tags: ['autodocs'],
};

const TemplateRender = (args) => {
  const { width, height, iconOnly, checked, disabled, value } = args;
  return `
      <cv-checkbox-icon
        ${iconOnly ? 'iconOnly' : ''}
        ${checked ? 'checked' : ''}
        ${disabled ? 'disabled' : ''}
        ${value ? `value="${value}"` : ''}
        style="width:${width}px; height:${height}px"
      >
        <cv-icon slot="icon">work</cv-icon>
        <div slot="text">Balanced</div>
        <div slot="text">Every week</div>
      </cv-checkbox-icon>
      <cv-checkbox-icon  
        ${iconOnly ? 'iconOnly' : ''} 
        ${checked ? 'checked' : ''} 
        ${disabled ? 'disabled' : ''} 
        ${value ? `value="${value}"` : ''}
        style="width:${width}px; height:${height}px"
      >
        <cv-icon slot="icon">work</cv-icon>
        <div slot="text">Balanced</div>
        <div slot="text">Every week</div>
      </cv-checkbox-icon>
  `;
};

export const Template = {
  render: TemplateRender,
};

export const Unchecked = {
  render: TemplateRender,
  args: {
    width: 200,
    height: 160,
    checked: false,
    disabled: false,
    iconOnly: false,
    indeterminate: false,
    reducedTouchTarget: false,
  },
};

export const Checked = {
  render: TemplateRender,
  args: {
    width: 200,
    height: 160,
    checked: true,
    disabled: false,
    iconOnly: false,
    indeterminate: false,
    reducedTouchTarget: false,
  },
};

export const Disabled = {
  render: TemplateRender,
  args: {
    width: 200,
    height: 160,
    checked: false,
    disabled: true,
    iconOnly: false,
    indeterminate: false,
    reducedTouchTarget: false,
  },
};

const GridExample = (args) => {
  const { width, height, iconOnly, checked, disabled, value } = args;

  const commonProps = `
  ${iconOnly ? 'iconOnly' : ''}
  ${checked ? 'checked' : ''}
  ${disabled ? 'disabled' : ''}
  ${value ? `value="${value}"` : ''}
  style="width:${width}px; height:${height}px"
  `;

  return `
    <div class="mdc-layout-grid">
      <div class="mdc-layout-grid__inner">
        <cv-checkbox-icon ${commonProps} class="mdc-layout-grid__cell">
          <cv-icon slot="icon">storage</cv-icon>
          <div slot="text">Data</div>
        </cv-checkbox-icon>
        <cv-checkbox-icon ${commonProps} class="mdc-layout-grid__cell">
          <cv-icon slot="icon">description</cv-icon>
          <div slot="text">Files</div>
        </cv-checkbox-icon>
        <cv-checkbox-icon ${commonProps} class="mdc-layout-grid__cell">
          <cv-icon slot="icon">bookmark</cv-icon>
          <div slot="text">Articles</div>
        </cv-checkbox-icon>
        <cv-checkbox-icon ${commonProps} class="mdc-layout-grid__cell">
          <cv-icon slot="icon">folder</cv-icon>
          <div slot="text">Projects</div>
        </cv-checkbox-icon>
        <cv-checkbox-icon ${commonProps} class="mdc-layout-grid__cell">
          <cv-icon slot="icon">assignment</cv-icon>
          <div slot="text">Notebooks</div>
        </cv-checkbox-icon>
        <cv-checkbox-icon ${commonProps} class="mdc-layout-grid__cell">
          <cv-icon slot="icon" >receipt_long</cv-icon>
          <div slot="text">Scripts</div>
        </cv-checkbox-icon>
      </div>
    </div>
  `;
};

export const WithGrid = {
  render: GridExample,
  args: {
    width: 105,
    height: 100,
  },
};
