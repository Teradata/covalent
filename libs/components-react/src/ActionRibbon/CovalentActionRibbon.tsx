import * as React from 'react';
import { createComponent } from '@lit/react';
import { CovalentActionRibbon as CovalentActionRibbonWeb } from '@covalent/components';
export const CovalentActionRibbon = createComponent({
  tagName: 'cv-action-ribbon',
  elementClass: CovalentActionRibbonWeb,
  react: React,
});
