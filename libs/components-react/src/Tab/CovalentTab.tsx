import * as React from 'react';
import { createComponent } from '@lit/react';
import { CovalentTab as CovalentTabWeb } from '@covalent/components';
export const CovalentTab = createComponent({
  tagName: 'cv-tab',
  elementClass: CovalentTabWeb,
  react: React,
  events: {
    oninteracted: 'interacted',
  },
});
