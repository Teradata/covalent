import * as React from 'react';
import { createComponent } from '@lit/react';
import { CovalentTreeListItem as CovalentTreeListItemWeb } from '@covalent/components';
export const CovalentTreeListItem = createComponent({
  tagName: 'cv-tree-list-item',
  elementClass: CovalentTreeListItemWeb,
  react: React,
  events: {
    onselect: 'select',
  },
});
