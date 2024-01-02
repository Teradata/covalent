import * as React from 'react';
import { createComponent } from '@lit/react';
import { CovalentSideSheet as CovalentSideSheetWeb } from '@covalent/components';

export const CovalentSideSheet = createComponent({
  tagName: 'cv-side-sheet',
  elementClass: CovalentSideSheetWeb,
  react: React,
  events: {
    opening: 'opening',
    opened: 'opened',
    closing: 'closing',
    closed: 'closed',
  },
});
