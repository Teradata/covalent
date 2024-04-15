import './layout-grid';
import './layout-grid-item';

export default {
  title: 'Layout/Layout Grid',
};

const Template = ({ span }) => `
  <cv-layout-grid>
    <cv-layout-grid-item span=${span}>Item 1</cv-layout-grid-item>
    <cv-layout-grid-item span=${span}>Item 2</cv-layout-grid-item>
    <cv-layout-grid-item span=${span}>Item 3</cv-layout-grid-item>
  </cv-layout-grid>
`;

export const Default = Template.bind({});
Default.args = {
  span: 4,
};
