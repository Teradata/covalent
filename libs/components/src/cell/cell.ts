import { css, html, LitElement, PropertyValues, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './cell.scss?inline';
import { classMap } from 'lit/directives/class-map.js';

import '../code-editor/code-editor';
import '../code-snippet/code-snippet';
import '../icon-button/icon-button';
import '../typography/typography';

declare global {
  interface HTMLElementTagNameMap {
    'cv-cell': CovalentCell;
  }
}

enum CvCellEvents {
  RUN_CODE = 'cell-run-code',
}

@customElement('cv-cell')
export class CovalentCell extends LitElement {
  /**
   * The index of the cell in a notebook
   */
  @property({ type: Number })
  index?: number;

  /**
   * Code written in the cell
   */
  @property({ type: String })
  code = '';

  /**
   * Language of the code
   */
  @property({ type: String })
  language = '';

  /**
   * Whether the cell is loading
   */
  @property({ type: Boolean, reflect: true })
  loading = false;

  /**
   * Whether the cell is selected
   */
  @property({ type: Boolean, reflect: true })
  selected = false;

  /**
   * Number of times the cell was exceuted
   */
  @property({ type: Number })
  timesExecuted = 0;

  /**
   * Whether the editor is shown
   */
  @property({ type: Boolean, reflect: true })
  showEditor? = true;

  _editorFocused = false;

  editorOptions = {
    minimap: { enabled: false }, // Disable minimap to save space
    wordWrap: 'on', // Enable word wrap to avoid horizontal scroll
    fontSize: '14px',
    glyphMargin: false,
    folding: false,
    lineNumbers: 'off',
    lineDecorationsWidth: 0,
    lineNumbersMinChars: 0,
    renderLineHighlight: 'none',
    overviewRulerLanes: 0,
    hideCursorInOverviewRuler: true,
    scrollbar: {
      alwaysConsumeMouseWheel: false,
      vertical: 'hidden',
    },
  };

  static override styles = [
    css`
      ${unsafeCSS(styles)}
    `,
  ];

  handleCodeChange(e: CustomEvent) {
    this.code = e.detail.code;
  }

  handleRun() {
    this.dispatchEvent(
      new CustomEvent(CvCellEvents.RUN_CODE, {
        detail: { index: this.index, code: this.code },
        bubbles: true,
        composed: true,
      })
    );
  }

  setEditorFocus(setFocus: boolean) {
    this._editorFocused = setFocus;
    this.requestUpdate();
  }

  protected updated(changedProperties: PropertyValues) {
    if (changedProperties.has('code') || changedProperties.has('language')) {
      const editor = this.shadowRoot?.querySelector('cv-code-editor');
      if (editor) {
        editor.code = this.code;
        editor.language = this.language;
      } else {
        const codeSnippet = this.shadowRoot?.querySelector('cv-code-snippet');
        if (codeSnippet && !this.selected) {
          codeSnippet.highlight();
        }
      }
    }
    super.updated(changedProperties);
  }

  renderEditor() {
    const editor = this.selected
      ? html`<cv-code-editor
          @code-change="${this.handleCodeChange}"
          @editor-focus="${() => this.setEditorFocus(true)}"
          @editor-blur="${() => this.setEditorFocus(false)}"
          .code="${this.code}"
          .language="${this.language}"
          .options="${this.editorOptions}"
        ></cv-code-editor>`
      : html`<cv-code-snippet hideHeader .language="${this.language}"
          >${this.code}</cv-code-snippet
        >`;

    const output = html`<slot name="error"></slot>
      <cv-typography class="output" scale="body1">
        <slot name="output"></slot>
        <slot name="input"></slot>
      </cv-typography>`;

    return html`${this.showEditor ? editor : ''}${(!this.showEditor &&
      this.language === 'markdown') ||
    this.language !== 'markdown'
      ? output
      : ''}`;
  }

  renderExecutionCount() {
    let executionCount = html`&nbsp;`;
    if (this.showEditor) {
      if (this.loading) {
        executionCount = html`<span class="loading">*</span>`;
      } else if (this.timesExecuted) {
        executionCount = html`${this.timesExecuted}`;
      }
    }
    return html`[<span class="executionCount">${executionCount}</span>] :`;
  }

  protected render() {
    const classes = {
      cell: true,
      selected: this.selected,
      focused: this._editorFocused,
    };
    return html`
      <div class="${classMap(classes)}">
        <span class="selectionIndicator"></span>
        <div class="cellCodeWrapper">
          <span class="timesExecuted">${this.renderExecutionCount()}</span>
          <div class="cellOutputWrapper">${this.renderEditor()}</div>
        </div>
      </div>
    `;
  }
}

export default CovalentCell;
