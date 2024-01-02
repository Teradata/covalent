import * as React from 'react';
import { createComponent } from '@lit/react';
import { CovalentListItem as CovalentListItemWeb } from '@covalent/components';

export const CovalentListItem = createComponent({
  tagName: 'cv-list-item',
  elementClass: CovalentListItemWeb,
  react: React,
});
