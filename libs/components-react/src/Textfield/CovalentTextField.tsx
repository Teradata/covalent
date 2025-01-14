import * as React from 'react';
import { createComponent } from '@lit/react';
import { CovalentTextField as CovalentTextFieldWeb } from '@covalent/components';
export const CovalentTextField = createComponent({
  tagName: 'cv-textfield',
  elementClass: CovalentTextFieldWeb,
  react: React,
});
