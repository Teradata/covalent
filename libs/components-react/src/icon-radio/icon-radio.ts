import * as React from 'react';
import { createComponent } from '@lit/react';
import { CovalentIconRadioToggle as CovalentIconRadioToggleWeb } from '@covalent/components';

export const CovalentIconRadioToggle = createComponent({
  tagName: 'cv-icon-radio-item',
  elementClass: CovalentIconRadioToggleWeb,
  react: React,
});
