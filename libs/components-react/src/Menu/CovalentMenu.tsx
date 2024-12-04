import * as React from 'react';
import { createComponent } from '@lit/react';
import { CovalentMenu as CovalentMenuWeb } from '@covalent/components';
export const CovalentMenu = createComponent({
  tagName: 'cv-menu',
  elementClass: CovalentMenuWeb,
  react: React,
  events: {
    onopened: 'opened',
    onclosing: 'closing',
    onclosed: 'closed',
    onaction: 'action',
    onselected: 'selected',
  },
});
