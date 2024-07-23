import { css, html, LitElement, PropertyValues, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { createRef, Ref, ref } from 'lit/directives/ref.js';

import styles from './code-editor.scss?inline';

// -- Monaco Editor Imports --
import { editor } from 'monaco-editor/esm/vs/editor/editor.api.js';
import baseStyles from 'monaco-editor/min/vs/editor/editor.main.css?inline';

// Register all language contributions
import 'monaco-editor/esm/vs/basic-languages/html/html.contribution';
import 'monaco-editor/esm/vs/basic-languages/css/css.contribution';
import 'monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution';
import 'monaco-editor/esm/vs/basic-languages/typescript/typescript.contribution';
import 'monaco-editor/esm/vs/basic-languages/python/python.contribution';
import 'monaco-editor/esm/vs/basic-languages/sql/sql.contribution';
import 'monaco-editor/esm/vs/basic-languages/markdown/markdown.contribution';
import 'monaco-editor/esm/vs/basic-languages/r/r.contribution';

@customElement('cv-code-editor')
export class CovalentCodeEditor extends LitElement {
  /**
   * The container where editor will be created
   */
  private container: Ref<HTMLElement> = createRef();
  /**
   * Editor instance
   */
  editor?: editor.IStandaloneCodeEditor;
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
  @property({ type: Object }) options?: editor.IEditorOptions &
    editor.IGlobalEditorOptions;

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

  private setTheme = () => {
    editor.setTheme(this.getTheme());
  };

  adjustHeight() {
    if (this.editor && this.container.value) {
      const contentHeight = this.editor.getContentHeight();
      this.container.value.style.height = `${contentHeight}px`;
      this.editor.layout();
    }
  }

  createEditor(container: HTMLElement) {
    editor.defineTheme('my-theme', {
      base: 'vs',
      inherit: true,
      rules: [],
      colors: {
        'editor.background': '#f6f3f6ff',
      },
    });

    this.editor = editor.create(container, {
      ...this.options,
      fontLigatures: '',
      value: this.getCode(),
      language: this.getLang(),
      theme: this.getTheme(),
      automaticLayout: true,
      scrollBeyondLastLine: false,
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
        .addEventListener('change', this.setTheme);
    }
  }

  getValue() {
    const value = this.editor?.getValue();
    return value;
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

  render() {
    return html` <main ${ref(this.container)} class="editor"></main> `;
  }

  setValue(value: string) {
    this.editor?.setValue(value);
  }

  updated(changedProperties: PropertyValues) {
    if (changedProperties.has('code') && this.editor) {
      const currentCode = this.editor.getValue();
      if (this.code !== currentCode) {
        this.editor.setValue(this.code || '');
      }
    }
    if (changedProperties.has('language') && this.editor) {
      editor.setModelLanguage(
        this.editor.getModel() as editor.ITextModel,
        this.language || ''
      );
    }
  }

  override disconnectedCallback(): void {
    this.editor?.dispose();
    window.removeEventListener('change', this.setTheme);
    super.disconnectedCallback();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cv-code-editor': CovalentCodeEditor;
  }
}

export default CovalentCodeEditor;
