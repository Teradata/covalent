import * as React from 'react';
import { createComponent } from '@lit/react';
import { CovalentNavRailListItem as CovalentNavRailListItemWeb } from '@covalent/components';

export const CovalentNavRailListItem = createComponent({
  tagName: 'cv-nav-list-item',
  elementClass: CovalentNavRailListItemWeb,
  react: React,
});
