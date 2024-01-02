import * as React from 'react';
import { createComponent } from '@lit/react';
import { CovalentRadioListItem as CovalentRadioListItemWeb } from '@covalent/components';

export const CovalentRadioListItem = createComponent({
  tagName: 'cv-radio-list-item',
  elementClass: CovalentRadioListItemWeb,
  react: React,
});
