import * as React from 'react';
import { createComponent } from '@lit/react';
import { CovalentCodeSnippet as CovalentCodeSnippetWeb } from '@covalent/components';
export const CovalentCodeSnippet = createComponent({
  tagName: 'cv-code-snippet',
  elementClass: CovalentCodeSnippetWeb,
  react: React,
});
