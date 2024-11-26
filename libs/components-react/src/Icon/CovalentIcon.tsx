import * as React from 'react';
import { createComponent } from '@lit/react';
import { CovalentIcon as CovalentIconWeb } from '@covalent/components';
export const CovalentIcon = createComponent({
  tagName: 'cv-icon',
  elementClass: CovalentIconWeb,
  react: React,
});
