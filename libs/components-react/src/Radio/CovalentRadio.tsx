import * as React from 'react';
import { createComponent } from '@lit/react';
import { CovalentRadio as CovalentRadioWeb } from '@covalent/components';
export const CovalentRadio = createComponent({
  tagName: 'cv-radio',
  elementClass: CovalentRadioWeb,
  react: React,
  events: {
    onchange: 'change',
  },
});
