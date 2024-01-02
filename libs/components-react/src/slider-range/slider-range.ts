import * as React from 'react';
import { createComponent } from '@lit/react';
import { CovalentSliderRange as CovalentSliderRangeWeb } from '@covalent/components';

export const CovalentSliderRange = createComponent({
  tagName: 'cv-slider-range',
  elementClass: CovalentSliderRangeWeb,
  react: React,
});
