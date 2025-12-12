import { css, html, LitElement, PropertyValues, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { createRef, Ref, ref } from 'lit/directives/ref.js';

import { cvEditorDarkTheme, cvEditorLightTheme } from './code-editor.theme';
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
  @property({ type: String }) theme?: string;
  /**
   * Language of th editor instance
   */
  @property() language?: string;
  /**
   * Code entered into the editor
   */
  @property() code?: string;
  /**
   * Disable scroll bar and set the editor height based on content
   */
  @property({ type: Boolean, reflect: true }) disableScroll?: boolean = false;
  /**
   * Options that can be set for the editor
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
    return 'cv-light';
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
    // uses covalent light colors
    editor.defineTheme(
      'cv-light',
      cvEditorLightTheme as editor.IStandaloneThemeData,
    );

    // uses covalent dark colors
    editor.defineTheme(
      'cv-dark',
      cvEditorDarkTheme as editor.IStandaloneThemeData,
    );

    this.editor = editor.create(container, {
      ...this.options,
      fontLigatures: '',
      value: this.getCode(),
      language: this.getLang(),
      theme: this.getTheme(),
      automaticLayout: true,
      scrollBeyondLastLine: false,
      useShadowDOM: true,
    });

    // Notify when the editor instance is created/ready
    this.dispatchEvent(
      new CustomEvent('editor-ready', {
        detail: { editor: this.editor },
        bubbles: false,
        composed: true,
      }),
    );
  }

  override disconnectedCallback(): void {
    this.editor?.dispose();
    window.removeEventListener('change', this.setTheme);
    super.disconnectedCallback();
  }

  firstUpdated() {
    if (this.container.value) {
      this.createEditor(this.container.value);

      this.onModelChange();

      // Dispatch event when editor is focused
      this.editor?.onDidFocusEditorText(() => {
        this.dispatchEvent(
          new CustomEvent('editor-focus', {
            bubbles: false,
            composed: true,
          }),
        );
      });

      // Dispatch event when editor is blurred
      this.editor?.onDidBlurEditorText(() => {
        this.dispatchEvent(
          new CustomEvent('editor-blur', {
            bubbles: false,
            composed: true,
          }),
        );
      });

      if (this.disableScroll) {
        // Adjust the height of the editor when content changes, to avoid vertical scroll bar
        this.editor?.onDidContentSizeChange(() => {
          this.adjustHeight();
        });
      }

      this.adjustHeight();

      window
        .matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', this.setTheme);
    }
  }

  getEditorInstance() {
    return this.editor;
  }

  getValue() {
    const value = this.editor?.getValue();
    return value;
  }

  onModelChange() {
    this.editor?.onDidChangeModelContent(() => {
      this.code = this.getValue();
      // Dispatch event when code in the editor is changed
      this.dispatchEvent(
        new CustomEvent('code-change', {
          detail: { code: this.code },
          bubbles: true,
          composed: true,
        }),
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
      // Update monaco editor language when language prop is changed
      editor.setModelLanguage(
        this.editor.getModel() as editor.ITextModel,
        this.language || '',
      );
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cv-code-editor': CovalentCodeEditor;
  }
}

export default CovalentCodeEditor;
