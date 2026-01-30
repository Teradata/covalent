import './divider';
import './divider.scss';

import '../card/card';
import '../list/list';
import '../list/list-item';
import '../typography/typography';
import '../icon-button/icon-button';
import { TmplAstBlockNode } from '@angular/compiler';

export default {
  title: 'Components/Divider',
  argTypes: {
    direction: {
      options: ['horizontal', 'vertical'],
      control: { type: 'select' },
    },
    size: {
      options: ['full', 'inset', 'icon'],
      control: { type: 'select' },
    },
    flush: {
      control: { type: 'boolean' },
    },
  },
  args: {
    direction: 'horizontal',
    size: 'full',
    flush: false,
  },
  tags: ['autodocs'],
};

const BasicTemplate = ({ direction, size, flush }) => {
  return `
    <cv-card>
      <cv-list>
        <cv-list-item>Lorem ipsum dolor sit amet, consectetur</cv-list-item>
        <cv-list-item>Lorem ipsum dolor sit amet, consectetur</cv-list-item>
        <cv-divider
          direction="${direction}"
          size="${size}"
          ${flush ? 'flush' : ''}>
        </cv-divider>
        <cv-list-item>Lorem ipsum dolor sit amet, consectetur</cv-list-item>
        <cv-list-item>Lorem ipsum dolor sit amet, consectetur</cv-list-item>
      </cv-list>      
    </cv-card>
  `;
};

const IconTemplate = ({ direction = 'horizontal', size, flush }) => {
  return `
    <style>
      cv-icon-button {
        display: block;
      }
      ${direction == 'vertical' ? '#storybook-root, #story--components-divider--vertical-inner, #story--components-divider--vertical-flush-inner { display: flex }' : ''}
    </style>   
    <cv-icon-button icon="person" aria-label="Add item"></cv-icon-button>
    <cv-icon-button icon="houseboat" aria-label="Add item"></cv-icon-button>
    <cv-divider
      direction="${direction}"      
      size="${size}"
      ${flush ? 'flush' : ''}>
    </cv-divider>
    <cv-icon-button icon="shield" aria-label="Add item"></cv-icon-button>
    <cv-icon-button icon="settings" aria-label="Add item"></cv-icon-button>
  `;
};

export const Basic = BasicTemplate.bind({});

export const Inset = BasicTemplate.bind({});
Inset.args = {
  size: 'inset',
};

export const Flush = BasicTemplate.bind({});
Flush.args = {
  flush: true,
};

export const Icon = IconTemplate.bind({});
Icon.args = {
  direction: 'horizontal',
  size: 'icon',
};

export const IconFlush = IconTemplate.bind({});
IconFlush.args = {
  direction: 'horizontal',
  size: 'icon',
  flush: true,
};

export const Vertical = IconTemplate.bind({});
Vertical.args = {
  direction: 'vertical',
  size: 'icon',
  flush: false,
};

export const VerticalFlush = IconTemplate.bind({});
VerticalFlush.args = {
  direction: 'vertical',
  size: 'icon',
  flush: true,
};
