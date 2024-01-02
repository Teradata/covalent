import * as React from 'react';
import { createComponent } from '@lit/react';
import { CovalentIconCheckToggle as CovalentIconCheckToggleWeb } from '@covalent/components';

export const CovalentIconCheckToggle = createComponent({
  tagName: 'cv-icon-check-item',
  elementClass: CovalentIconCheckToggleWeb,
  react: React,
});
