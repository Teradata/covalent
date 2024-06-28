import { css, html, LitElement, PropertyValues, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { createRef, Ref, ref } from 'lit/directives/ref.js';

import styles from './code-editor.scss?inline';

// -- Monaco Editor Imports --
import * as monaco from 'monaco-editor';
import baseStyles from 'monaco-editor/min/vs/editor/editor.main.css?inline';

@customElement('cv-code-editor')
export class CovalentCodeEditor extends LitElement {
  /**
   * The container where editor will be created
   */
  private container: Ref<HTMLElement> = createRef();
  /**
   * Editor instance
   */
  editor?: monaco.editor.IStandaloneCodeEditor;
  /**
   * Theme of the editor
   */
  @property() theme?: string;
  /**
   * Language of th editor instance
   */
  @property() language?: string;
  /**
   * Code entered into the editor
   */
  @property() code?: string;
  /**
   * Options that can be ste for the editor
   */
  @property({ type: Object }) options?: monaco.editor.IEditorOptions &
    monaco.editor.IGlobalEditorOptions;

  static styles = [
    css`
      ${unsafeCSS(baseStyles)} ${unsafeCSS(styles)}
    `,
  ];

  private getFile() {
    if (this.children.length > 0) return this.children[0];
    return null;
  }

  private getCode() {
    if (this.code) return this.code;
    const file = this.getFile();
    if (!file) return;
    return file.innerHTML.trim() || '';
  }

  private getLang() {
    if (this.language) return this.language;
    const file = this.getFile();
    if (!file) return;
    const type = file.getAttribute('type');
    return type?.split('/').pop();
  }

  private getTheme() {
    if (this.theme) return this.theme;
    if (this.isDark()) return 'vs-dark';
    return 'my-theme';
  }

  private isDark() {
    return (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    );
  }

  setValue(value: string) {
    this.editor?.setValue(value);
  }

  getValue() {
    const value = this.editor?.getValue();
    return value;
  }

  adjustHeight() {
    if (this.editor && this.container.value) {
      const contentHeight = this.editor.getContentHeight();
      this.container.value.style.height = `${contentHeight}px`;
      this.editor.layout();
    }
  }

  createEditor(container: HTMLElement) {
    monaco.editor.defineTheme('my-theme', {
      base: 'vs',
      inherit: true,
      rules: [],
      colors: {
        'editor.background': '#fdf9fc',
      },
    });
    this.editor = monaco.editor.create(container, {
      ...this.options,
      value: this.getCode(),
      language: this.getLang(),
      theme: this.getTheme(),
      automaticLayout: true,
      scrollBeyondLastLine: false,
    });
  }

  onModelChange() {
    this.editor?.onDidChangeModelContent(() => {
      this.code = this.getValue();
      this.dispatchEvent(
        new CustomEvent('code-change', {
          detail: { code: this.code },
          bubbles: true,
          composed: true,
        })
      );
    });
  }

  firstUpdated() {
    if (this.container.value) {
      this.createEditor(this.container.value);

      this.onModelChange();
      this.editor?.onDidFocusEditorText(() => {
        this.dispatchEvent(
          new CustomEvent('editor-focus', {
            bubbles: true,
            composed: true,
          })
        );
      });

      this.editor?.onDidBlurEditorText(() => {
        this.dispatchEvent(
          new CustomEvent('editor-blur', {
            bubbles: true,
            composed: true,
          })
        );
      });

      this.editor?.onDidContentSizeChange(() => {
        this.adjustHeight();
      });

      this.adjustHeight();

      window
        .matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', this._setTheme);
    }
  }

  updated(changedProperties: PropertyValues) {
    if (changedProperties.has('code') && this.editor) {
      const currentCode = this.editor.getValue();
      if (this.code !== currentCode) {
        this.editor.setValue(this.code || '');
      }
    }
    if (changedProperties.has('language') && this.editor) {
      monaco.editor.setModelLanguage(
        this.editor.getModel() as monaco.editor.ITextModel,
        this.language || ''
      );
    }
  }

  render() {
    return html` <main ${ref(this.container)} class="editor"></main> `;
  }

  private _setTheme = () => {
    monaco.editor.setTheme(this.getTheme());
  };

  override disconnectedCallback(): void {
    this.editor?.dispose();
    window.removeEventListener('change', this._setTheme);
    super.disconnectedCallback();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cv-code-editor': CovalentCodeEditor;
  }
}

export default CovalentCodeEditor;
