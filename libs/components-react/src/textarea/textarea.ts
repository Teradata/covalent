import * as React from 'react';
import { createComponent } from '@lit/react';
import { CovalentTextArea as CovalentTextAreaWeb } from '@covalent/components';

export const CovalentTextArea = createComponent({
  tagName: 'cv-textarea',
  elementClass: CovalentTextAreaWeb,
  react: React,
});
