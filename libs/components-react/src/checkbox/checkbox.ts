import * as React from 'react';
import { createComponent } from '@lit/react';
import { CovalentCheckbox as CovalentCheckboxWeb } from '@covalent/components';

export const CovalentCheckbox = createComponent({
  tagName: 'cv-checkbox',
  elementClass: CovalentCheckboxWeb,
  react: React,
});
