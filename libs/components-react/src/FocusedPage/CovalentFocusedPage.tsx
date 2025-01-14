import * as React from 'react';
import { createComponent } from '@lit/react';
import { CovalentFocusedPage as CovalentFocusedPageWeb } from '@covalent/components';
export const CovalentFocusedPage = createComponent({
  tagName: 'cv-focused-page',
  elementClass: CovalentFocusedPageWeb,
  react: React,
});
