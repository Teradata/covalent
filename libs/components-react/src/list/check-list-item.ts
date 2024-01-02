import * as React from 'react';
import { createComponent } from '@lit/react';
import { CovalentCheckListItem as CovalentCheckListItemWeb } from '@covalent/components';

export const CovalentCheckListItem = createComponent({
  tagName: 'cv-check-list-item',
  elementClass: CovalentCheckListItemWeb,
  react: React,
});
