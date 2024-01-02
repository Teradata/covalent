import * as React from 'react';
import { createComponent } from '@lit/react';
import { CovalentTreeList as CovalentTreeListWeb } from '@covalent/components';

export const CovalentTreeList = createComponent({
  tagName: 'cv-tree-list',
  elementClass: CovalentTreeListWeb,
  react: React,
});
