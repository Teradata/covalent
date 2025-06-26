import * as React from 'react';
import { createComponent } from '@lit/react';
import { CovalentIconCheckToggle as CovalentIconCheckToggleWeb } from '@covalent/components';
export const CovalentIconCheckToggle = createComponent({
  tagName: 'cv-checkbox-icon',
  elementClass: CovalentIconCheckToggleWeb,
  react: React,
  events: {
    onchange: 'change',
  },
});
