import * as React from 'react';
import { createComponent } from '@lit/react';
import { CovalentTypography as CovalentTypographyWeb } from '@covalent/components';

export const CovalentTypography = createComponent({
  tagName: 'cv-typography',
  elementClass: CovalentTypographyWeb,
  react: React,
});
