import * as React from 'react';
import { createComponent } from '@lit/react';
import { CovalentCard as CovalentCardWeb } from '@covalent/components';

export const CovalentCard = createComponent({
  tagName: 'cv-card',
  elementClass: CovalentCardWeb,
  react: React,
});
