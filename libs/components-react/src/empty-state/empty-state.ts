import * as React from 'react';
import { createComponent } from '@lit/react';
import { CovalentEmptyState as CovalentEmptyStateWeb } from '@covalent/components';

export const CovalentEmptyState = createComponent({
  tagName: 'cv-empty-state',
  elementClass: CovalentEmptyStateWeb,
  react: React,
});
