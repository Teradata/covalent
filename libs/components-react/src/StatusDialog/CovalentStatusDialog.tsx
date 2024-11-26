import * as React from 'react';
import { createComponent } from '@lit/react';
import { CovalentStatusDialog as CovalentStatusDialogWeb } from '@covalent/components';
export const CovalentStatusDialog = createComponent({
  tagName: 'cv-status-dialog',
  elementClass: CovalentStatusDialogWeb,
  react: React,
  events: {
    onopening: 'opening',
    onopened: 'opened',
    onclosing: 'closing',
    onclosed: 'closed',
  },
});
