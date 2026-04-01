import * as React from 'react';
import { createComponent } from '@lit/react';
import { CovalentCardHeader as CovalentCardHeaderWeb } from '@covalent/components';
export const CovalentCardHeader = createComponent({
  tagName: 'cv-card-header',
  elementClass: CovalentCardHeaderWeb,
  react: React,
});
