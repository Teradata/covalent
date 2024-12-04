import * as React from 'react';
import { createComponent } from '@lit/react';
import { CovalentDrawer as CovalentDrawerWeb } from '@covalent/components';
export const CovalentDrawer = createComponent({
  tagName: 'cv-drawer',
  elementClass: CovalentDrawerWeb,
  react: React,
  events: {
    onopened: 'opened',
    onclosed: 'closed',
  },
});
