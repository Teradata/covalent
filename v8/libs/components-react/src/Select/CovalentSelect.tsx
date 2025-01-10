import * as React from 'react';
import { createComponent } from '@lit/react';
import { CovalentSelect as CovalentSelectWeb } from '@covalent/components';
export const CovalentSelect = createComponent({
  tagName: 'cv-select',
  elementClass: CovalentSelectWeb,
  react: React,
  events: {
    onopened: 'opened',
    onclosed: 'closed',
    onselected: 'selected',
  },
});
