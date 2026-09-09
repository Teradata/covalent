import './top-app-bar';
import './top-app-bar-fixed';
import topAppBarComponent from '../../stories/demos/top-app-bar.component';
import '../data-table/data-table.stories.scss';

export default {
  title: 'Components/Top App Bar',
  render: topAppBarComponent,
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
    scrollTarget: '',
    showContent: 'table',
    showActionItems: 'icons',
  },
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export const Basic = {};

export const BasicWithButtons = {
  args: {
    showActionItems: 'buttons',
  },
};

export const Fixed = {
  parameters: {
    fixed: true,
  },
};
