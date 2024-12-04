import * as React from 'react';
import { createComponent } from '@lit/react';
import { CovalentTopAppBar as CovalentTopAppBarWeb } from '@covalent/components';
export const CovalentTopAppBar = createComponent({
  tagName: 'cv-top-app-bar',
  elementClass: CovalentTopAppBarWeb,
  react: React,
  events: {
    onnav: 'nav',
  },
});
