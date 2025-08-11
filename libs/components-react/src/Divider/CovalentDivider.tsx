import * as React from 'react';
import { createComponent } from '@lit/react';
import { CovalentDivider as CovalentDividerWeb } from '@covalent/components';
export const CovalentDivider = createComponent({
  tagName: 'cv-divider',
  elementClass: CovalentDividerWeb,
  react: React,
});
