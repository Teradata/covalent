import topAppBarComponent from '../../stories/demos/top-app-bar.component';

export default {
  title: 'Components/Top App Bar',
  argTypes: {
    title: { control: 'text' },
    centerTitle: {
      control: 'boolean',
      defaultValue: false,
    },
    dense: {
      control: 'boolean',
      defaultValue: false,
    },
    prominent: {
      control: 'boolean',
      defaultValue: false,
    },
    showContent: {
      options: ['table', 'tableWithSelection', 'loremIpsum'],
      control: { type: 'radio' },
      defaultValue: 'table',
    },
    showActionItems: {
      options: ['buttons', 'icons'],
      control: { type: 'radio' },
      defaultValue: 'icons',
    },
    navClick: { action: 'clicked' },
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export const Basic = topAppBarComponent.bind({});
Basic.args = {};

export const BasicWithButtons = topAppBarComponent.bind({});
BasicWithButtons.args = {
  showActionItems: 'buttons',
};

export const Fixed = topAppBarComponent.bind({});
Fixed.parameters = {
  fixed: true,
};
