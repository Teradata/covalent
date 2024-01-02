import * as React from 'react';
import { createComponent } from '@lit/react';
import { CovalentTabBar as CovalentTabBarWeb } from '@covalent/components';

export const CovalentTabBar = createComponent({
  tagName: 'cv-tab-bar',
  elementClass: CovalentTabBarWeb,
  react: React,
});
