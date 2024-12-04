import * as React from 'react';
import { createComponent } from '@lit/react';
import { CovalentTextLockup as CovalentTextLockupWeb } from '@covalent/components';
export const CovalentTextLockup = createComponent({
  tagName: 'cv-text-lockup',
  elementClass: CovalentTextLockupWeb,
  react: React,
});
