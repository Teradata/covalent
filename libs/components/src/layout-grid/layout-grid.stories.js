import './layout-grid';
import './layout-grid-item';

export default {
  title: 'Layout/Layout Grid',
};

const Template = ({ columns }) => `
  <cv-layout-grid>
    <cv-layout-grid-item columns="${columns}">Item 1</cv-layout-grid-item>
    <cv-layout-grid-item columns="${columns}">Item 2</cv-layout-grid-item>
    <cv-layout-grid-item columns="${columns}">Item 3</cv-layout-grid-item>
  </cv-layout-grid>
`;

export const Default = Template.bind({});
Default.args = {
  columns: 4,
};
