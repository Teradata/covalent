import * as React from 'react';
import { createComponent } from '@lit/react';
import { CovalentExpansionPanelItem as CovalentExpansionPanelItemWeb } from '@covalent/components';
export const CovalentExpansionPanelItem = createComponent({
  tagName: 'cv-expansion-panel-item',
  elementClass: CovalentExpansionPanelItemWeb,
  react: React,
  events: {
    oncvExpansionPanelTogglePanel: 'cv-expansionPanel-togglePanel',
  },
});
