import * as React from 'react';
import { createComponent } from '@lit/react';
import { CovalentCardFooter as CovalentCardFooterWeb } from '@covalent/components';
export const CovalentCardFooter = createComponent({
  tagName: 'cv-card-footer',
  elementClass: CovalentCardFooterWeb,
  react: React,
});
