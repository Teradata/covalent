import * as React from 'react';
import { createComponent } from '@lit/react';
import { CovalentAlert as CovalentAlertWeb } from '@covalent/components';
export const CovalentAlert = createComponent({
  tagName: 'cv-alert',
  elementClass: CovalentAlertWeb,
  react: React,
});
