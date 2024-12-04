import * as React from 'react';
import { createComponent } from '@lit/react';
import { CovalentFormfield as CovalentFormfieldWeb } from '@covalent/components';
export const CovalentFormfield = createComponent({
  tagName: 'cv-formfield',
  elementClass: CovalentFormfieldWeb,
  react: React,
});
