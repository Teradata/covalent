import * as React from 'react';
import { createComponent } from '@lit/react';
import { CovalentStatusHeaderItem as CovalentStatusHeaderItemWeb } from '@covalent/components';

export const CovalentStatusHeaderItem = createComponent({
  tagName: 'cv-status-header-item',
  elementClass: CovalentStatusHeaderItemWeb,
  react: React,
});
