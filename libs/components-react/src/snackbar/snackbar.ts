import * as React from 'react';
import { createComponent } from '@lit/react';
import { CovalentSnackbar as CovalentSnackbarWeb } from '@covalent/components';

export const CovalentSnackbar = createComponent({
  tagName: 'cv-snackbar',
  elementClass: CovalentSnackbarWeb,
  react: React,
});
