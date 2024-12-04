import * as React from 'react';
import { createComponent } from '@lit/react';
import { CovalentTooltip as CovalentTooltipWeb } from '@covalent/components';
export const CovalentTooltip = createComponent({
  tagName: 'cv-tooltip',
  elementClass: CovalentTooltipWeb,
  react: React,
});
