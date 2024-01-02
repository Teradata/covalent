import * as React from 'react';
import { createComponent } from '@lit/react';
import { CovalentButton as CovalentButtonWeb } from '@covalent/components';

export const CovalentButton = createComponent({
  tagName: 'cv-button',
  elementClass: CovalentButtonWeb,
  react: React,
});
