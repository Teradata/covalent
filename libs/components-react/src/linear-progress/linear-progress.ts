import * as React from 'react';
import { createComponent } from '@lit/react';
import { CovalentLinearProgress as CovalentLinearProgressWeb } from '@covalent/components';

export const CovalentLinearProgress = createComponent({
  tagName: 'cv-linear-progress',
  elementClass: CovalentLinearProgressWeb,
  react: React,
});
