import * as React from 'react';
import { createComponent } from '@lit/react';
import { CovalentExpansionPanel as CovalentExpansionPanelWeb } from '@covalent/components';
export const CovalentExpansionPanel = createComponent({
  tagName: 'cv-expansion-panel',
  elementClass: CovalentExpansionPanelWeb,
  react: React,
});
