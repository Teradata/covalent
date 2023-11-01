import './top-app-bar';
import './top-app-bar-fixed';
import topAppBarComponent from '../../stories/demos/top-app-bar.component';

export default {
  title: 'Components/Top App Bar',
  argTypes: {
    showContent: {
      options: ['table', 'tableWithSelection', 'loremIpsum'],
      control: { type: 'radio' },
    },
    showActionItems: {
      options: ['buttons', 'icons'],
      control: { type: 'radio' },
    },
  },
  args: {
    centerTitle: false,
    dense: false,
    prominent: false,
    showContent: 'table',
    showActionItems: 'icons',
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
