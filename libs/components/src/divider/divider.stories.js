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

const basicTemplate = ({ direction, size, flush }) => {
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

const iconTemplate = ({ direction = 'horizontal', size, flush }) => {
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

export const Basic = {
  render: basicTemplate,
  args: {},
};

export const Inset = {
  render: basicTemplate,
  args: {
    size: 'inset',
  },
};

export const Flush = {
  render: basicTemplate,
  args: {
    flush: true,
  },
};

export const Icon = {
  render: iconTemplate,
  args: {
    direction: 'horizontal',
    size: 'icon',
  },
};

export const IconFlush = {
  render: iconTemplate,
  args: {
    direction: 'horizontal',
    size: 'icon',
    flush: true,
  },
};

export const Vertical = {
  render: iconTemplate,
  args: {
    direction: 'vertical',
    size: 'icon',
    flush: false,
  },
};

export const VerticalFlush = {
  render: iconTemplate,
  args: {
    direction: 'vertical',
    size: 'icon',
    flush: true,
  },
};
