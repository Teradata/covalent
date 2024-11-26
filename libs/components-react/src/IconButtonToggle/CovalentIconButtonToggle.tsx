import * as React from 'react';
import { createComponent } from '@lit/react';
import { CovalentIconButtonToggle as CovalentIconButtonToggleWeb } from '@covalent/components';
export const CovalentIconButtonToggle = createComponent({
  tagName: 'cv-icon-button-toggle',
  elementClass: CovalentIconButtonToggleWeb,
  react: React,
  events: {
    oniconButtonToggleChange: 'icon-button-toggle-change',
  },
});
