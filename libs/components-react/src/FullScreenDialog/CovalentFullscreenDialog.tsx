import * as React from 'react';
import { createComponent } from '@lit/react';
import { CovalentFullscreenDialog as CovalentFullscreenDialogWeb } from '@covalent/components';
export const CovalentFullscreenDialog = createComponent({
  tagName: 'cv-full-screen-dialog',
  elementClass: CovalentFullscreenDialogWeb,
  react: React,
  events: {
    onopening: 'opening',
    onopened: 'opened',
    onclosing: 'closing',
    onclosed: 'closed',
  },
});
