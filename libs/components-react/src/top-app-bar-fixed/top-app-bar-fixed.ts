import * as React from 'react';
import { createComponent } from '@lit/react';
import { CovalentTopAppBarFixed as CovalentTopAppBarFixedWeb } from '@covalent/components';

export const CovalentTopAppBarFixed = createComponent({
  tagName: 'cv-top-app-bar-fixed',
  elementClass: CovalentTopAppBarFixedWeb,
  react: React,
});
