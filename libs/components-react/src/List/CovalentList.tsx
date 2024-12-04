import * as React from 'react';
import { createComponent } from '@lit/react';
import { CovalentList as CovalentListWeb } from '@covalent/components';
export const CovalentList = createComponent({
  tagName: 'cv-list',
  elementClass: CovalentListWeb,
  react: React,
  events: {
    onaction: 'action',
    onselected: 'selected',
  },
});
