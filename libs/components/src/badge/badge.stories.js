import './badge';

import '../icon/icon';
import '../list/list-item';
import '../list/list';
import '../typography/typography';

export default {
  title: 'Components/Badge',
  argTypes: {
    size: { options: ['large', 'small'], control: { type: 'select' } },
    verticalAlignment: {
      options: ['top', 'bottom'],
      control: { type: 'select' },
    },
    horizontalAlignment: {
      options: ['right', 'left'],
      control: { type: 'select' },
    },
  },
  args: {
    content: 22,
    max: 99,
    size: 'large',
    verticalAlignment: 'top',
    horizontalAlignment: 'right',
    showZero: true,
    hideBadge: false,
  },
  tags: ['autodocs'],
};

const Template = ({
  content,
  max,
  size,
  showZero,
  hideBadge,
  verticalAlignment,
  horizontalAlignment,
}) => {
  return `<cv-badge${content || content == 0 ? ` content=${content}` : ''}${
    size ? ` size=${size}` : ''
  }${max ? ` max=${max}` : ''}${
    verticalAlignment ? ` verticalAlignment=${verticalAlignment}` : ''
  }${horizontalAlignment ? ` horizontalAlignment=${horizontalAlignment}` : ''}${
    showZero ? ' showZero' : ''
  }${hideBadge ? ' hideBadge' : ''}>
    <cv-icon style="font-size: 36px">chat<cv-icon>
  </cv-badge>`;
};

const ListTemplate = () => {
  return `
  <div style="margin-bottom: 3em;">
    <cv-typography scale="headline5">Basic</cv-typography>
    <cv-badge content='Hello world'></cv-badge>
  </div>
  <cv-typography scale="headline5">Used in a list</cv-typography>
  <cv-list>
    <cv-list-item>
      <span style="padding-right: 2em;">Item 1</span>
      <cv-badge content=22 max=999></cv-badge>
    </cv-list-item>
    <cv-list-item>
      <span style="padding-right: 2em;">Item 2</span>
      <cv-badge content=1000 max=999></cv-badge>
    </cv-list-item>
  </cv-list>`;
};

export const Large = Template.bind({});
Large.args = {
  content: 3,
  max: 99,
};

export const LargeWithLimit = Template.bind({});
LargeWithLimit.args = {
  content: 9999,
  max: 99,
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};

export const Basic = ListTemplate.bind({});
