import * as React from 'react';
import { createComponent } from '@lit/react';
import { CovalentAppShell as CovalentAppShellWeb } from '@covalent/components';

export const CovalentAppShell = createComponent({
  tagName: 'cv-app-shell',
  elementClass: CovalentAppShellWeb,
  react: React,
});
