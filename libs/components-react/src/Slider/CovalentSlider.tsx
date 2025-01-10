import * as React from 'react';
import { createComponent } from '@lit/react';
import { CovalentSlider as CovalentSliderWeb } from '@covalent/components';
export const CovalentSlider = createComponent({
  tagName: 'cv-slider',
  elementClass: CovalentSliderWeb,
  react: React,
  events: {
    oninput: 'input',
    onchange: 'change',
  },
});
