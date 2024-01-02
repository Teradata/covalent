import * as React from 'react';
import { createComponent } from '@lit/react';
import { CovalentStatusHeader as CovalentStatusHeaderWeb } from '@covalent/components';

export const CovalentStatusHeader = createComponent({
  tagName: 'cv-status-header',
  elementClass: CovalentStatusHeaderWeb,
  react: React,
});
