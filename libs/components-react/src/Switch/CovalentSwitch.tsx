import * as React from 'react';
import { createComponent } from '@lit/react';
import { CovalentSwitch as CovalentSwitchWeb } from '@covalent/components';
export const CovalentSwitch = createComponent({
  tagName: 'cv-switch',
  elementClass: CovalentSwitchWeb,
  react: React,
});
