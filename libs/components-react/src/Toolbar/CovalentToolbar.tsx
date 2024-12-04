import * as React from 'react';
import { createComponent } from '@lit/react';
import { CovalentToolbar as CovalentToolbarWeb } from '@covalent/components';
export const CovalentToolbar = createComponent({
  tagName: 'cv-toolbar',
  elementClass: CovalentToolbarWeb,
  react: React,
  events: {
    onnav: 'nav',
  },
});
