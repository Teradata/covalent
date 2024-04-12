import './layout-grid';
import './layout-grid-item';

export default {
  title: 'Layout/Layout Grid',
  // Define los argumentos por defecto para tu story
  args: {
    columns: 4,
  },
};

// Esta es la sintaxis correcta
const Template = ({ columns }) => {
  return `
    <cv-layout-grid>
      <cv-layout-grid-item .columns=${columns}>Item 1</cv-layout-grid-item>
      <cv-layout-grid-item .columns=${columns}>Item 2</cv-layout-grid-item>
      <cv-layout-grid-item .columns=${columns}>Item 3</cv-layout-grid-item>
    </cv-layout-grid>
  `;
};

export const Default = Template.bind({
  columns: 4,
});
