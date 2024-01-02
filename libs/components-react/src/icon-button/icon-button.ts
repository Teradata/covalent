import * as React from 'react';
import { createComponent } from '@lit/react';
import { CovalentIconButton as CovalentIconButtonWeb } from '@covalent/components';

export const CovalentIconButton = createComponent({
  tagName: 'cv-icon-button',
  elementClass: CovalentIconButtonWeb,
  react: React,
});
