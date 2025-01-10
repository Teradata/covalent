import * as React from 'react';
import { createComponent } from '@lit/react';
import { CovalentBadge as CovalentBadgeWeb } from '@covalent/components';
export const CovalentBadge = createComponent({
  tagName: 'cv-badge',
  elementClass: CovalentBadgeWeb,
  react: React,
});
