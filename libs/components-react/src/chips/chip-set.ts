import * as React from 'react';
import { createComponent } from '@lit/react';
import { CovalentChipSet as CovalentChipSetWeb } from '@covalent/components';

export const CovalentChipSet = createComponent({
  tagName: 'cv-chip-set',
  elementClass: CovalentChipSetWeb,
  react: React,
});
