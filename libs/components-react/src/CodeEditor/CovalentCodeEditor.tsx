import * as React from 'react';
import { createComponent } from '@lit/react';
import { CovalentCodeEditor as CovalentCodeEditorWeb } from '@covalent/components';
export const CovalentCodeEditor = createComponent({
  tagName: 'cv-code-editor',
  elementClass: CovalentCodeEditorWeb,
  react: React,
  events: {
    oneditorReady: 'editor-ready',
    oneditorFocus: 'editor-focus',
    oneditorBlur: 'editor-blur',
    oncodeChange: 'code-change',
  },
});
