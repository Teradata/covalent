import * as React from 'react';
import { createComponent } from '@lit/react';
import { CovalentNotebookCell as CovalentNotebookCellWeb } from '@covalent/components';
export const CovalentNotebookCell = createComponent({
  tagName: 'cv-notebook-cell',
  elementClass: CovalentNotebookCellWeb,
  react: React,
});
