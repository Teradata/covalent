import * as React from 'react';
import { createComponent } from '@lit/react';
import { CovalentChip as CovalentChipWeb } from '@covalent/components';
export const CovalentChip = createComponent({
  tagName: 'cv-chip',
  elementClass: CovalentChipWeb,
  react: React,
});
