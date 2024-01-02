import * as React from 'react';
import { createComponent } from '@lit/react';
import { CovalentCircularProgress as CovalentCircularProgressWeb } from '@covalent/components';

export const CovalentCircularProgress = createComponent({
  tagName: 'cv-circular-progress',
  elementClass: CovalentCircularProgressWeb,
  react: React,
});
