import * as React from 'react';
import { createComponent } from '@lit/react';
import { CovalentDialog as CovalentDialogWeb } from '@covalent/components';
export const CovalentDialog = createComponent({
  tagName: 'cv-dialog',
  elementClass: CovalentDialogWeb,
  react: React,
  events: {
    onopening: 'opening',
    onopened: 'opened',
    onclosing: 'closing',
    onclosed: 'closed',
  },
});
