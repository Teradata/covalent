import { css, html, LitElement, PropertyValues, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import styles from './notebook-cell.scss?inline';
import { classMap } from 'lit/directives/class-map.js';
import {
  KeyCode,
  KeyMod,
  editor,
} from 'monaco-editor/esm/vs/editor/editor.api.js';

import '../code-editor/code-editor';
import '../code-snippet/code-snippet';
import '../icon-button/icon-button';
import '../typography/typography';

declare global {
  interface HTMLElementTagNameMap {
    'cv-notebook-cell': CovalentNotebookCell;
  }
}

enum CvCellEvents {
  RUN_CODE = 'cell-run-code',
}

/**
 * Notebook cell
 *
 * @slot - This element has a slot
 */
@customElement('cv-notebook-cell')
export class CovalentNotebookCell extends LitElement {
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
  hideEditor = false;

  /**
   * Whether the execution count is shown
   */
  @property({ type: Boolean, reflect: true })
  hideCount = false;

  /**
   * Whether the execution count is shown
   */
  @property({ type: String })
  editorTheme = '';

  private _editor!: editor.IStandaloneCodeEditor;

  private _editorFocused = false;

  @state()
  private _isMenuOpen = false;

  private _menuMaxHeight = 'auto';

  private _menuPosition = { top: 0, left: 0 };

  editorOptions = {
    minimap: { enabled: false }, // Disable minimap to save space
    wordWrap: 'on', // Enable word wrap to avoid horizontal scroll
    fontSize: '14px',
    glyphMargin: false,
    folding: false,
    lineHeight: 20,
    lineNumbers: 'off',
    lineDecorationsWidth: 0,
    lineNumbersMinChars: 0,
    renderIndentGuides: false,
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

  constructor() {
    super();
    this.closeContextMenu = this.closeContextMenu.bind(this);
    this.showContextMenu = this.showContextMenu.bind(this);
  }

  closeContextMenu(): void {
    this._isMenuOpen = false;
  }

  connectedCallback(): void {
    super.connectedCallback();
    document.addEventListener('click', this.closeContextMenu);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    document.removeEventListener('click', this.closeContextMenu);
  }

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

  setEditorInstance(e: CustomEvent) {
    this._editor = e.detail.editor;
    this._editor.addCommand(KeyMod.Shift | KeyCode.Enter, () => {
      // Prevent the default shift enter action (inserts line below) and do nothing
    });
  }

  showContextMenu(e: MouseEvent) {
    e.preventDefault();
    const cells = document.querySelectorAll('cv-notebook-cell');
    cells?.forEach((cell) => {
      cell.closeContextMenu();
    });

    const menu = this.shadowRoot?.querySelector(
      '.contextMenu'
    ) as HTMLDivElement;
    const menuHeight = menu?.offsetHeight;

    // Determine if there is enough space below the click position
    const viewportHeight = window.innerHeight;
    const spaceBelow = viewportHeight - e.clientY;
    const spaceAbove = e.clientY;

    // Determine if there is enough space below, otherwise open upwards
    if (spaceBelow >= menuHeight) {
      // Enough space below, open normally
      this._menuPosition = { top: e.clientY, left: e.clientX };
      this._menuMaxHeight = `${spaceBelow}px`;
    } else if (spaceAbove >= menuHeight) {
      // Enough space above, open upwards fully
      this._menuPosition = { top: e.clientY - menuHeight, left: e.clientX };
      this._menuMaxHeight = `${menuHeight}px`;
    } else {
      // Not enough space either way, open upwards with adjusted height
      this._menuPosition = { top: e.clientY - spaceAbove, left: e.clientX };
      this._menuMaxHeight = `${spaceAbove}px`;
    }
    this._isMenuOpen = true;
  }

  protected updated(changedProperties: PropertyValues) {
    const editor = this.shadowRoot?.querySelector('cv-code-editor');
    if (changedProperties.has('code') || changedProperties.has('language')) {
      // Update the editor instance's code and language properties
      if (editor) {
        editor.code = this.code;
        editor.language = this.language;
      } else {
        // Update the code in code-snippet component
        const codeSnippet = this.shadowRoot?.querySelector('cv-code-snippet');
        if (codeSnippet && !this.selected) {
          codeSnippet.highlight();
        }
      }
    }
    super.updated(changedProperties);
  }

  getEditorBgColor(): string {
    const editorContainer = this.shadowRoot?.querySelector('.editorContainer');
    if (!editorContainer) {
      return '';
    }
    const styles = window.getComputedStyle(editorContainer);
    return styles.getPropertyValue('background-color');
  }

  renderEditor() {
    // Show editor when the cell is selected and show code snippet otherwise
    const editor = this.selected
      ? html`<cv-code-editor
          @code-change="${this.handleCodeChange}"
          @editor-ready="${this.setEditorInstance}"
          @editor-focus="${() => this.setEditorFocus(true)}"
          @editor-blur="${() => this.setEditorFocus(false)}"
          .code="${this.code}"
          .language="${this.language}"
          .options="${this.editorOptions}"
          .theme="${this.editorTheme}"
        ></cv-code-editor>`
      : html`<cv-code-snippet hideHeader .language="${this.language}"
          >${this.code}</cv-code-snippet
        >`;
    return html`${this.hideEditor
      ? ''
      : html`<div class="editorContainer">${editor}</div>`}`;
  }

  renderOutput() {
    const output = html` <div class="errors"><slot name="error"></slot></div>
      <div class="output">
        <slot name="output"></slot>
        <slot name="input"></slot>
      </div>`;
    return html`${output}`;
  }

  renderExecutionCount() {
    if (this.hideCount) {
      return html`&nbsp;`;
    }
    const loadingClass = {
      status: true,
      loading: this.loading,
    };
    return html`[<span class="${classMap(loadingClass)}"
        >${this.loading ? '*' : this.timesExecuted || ' '}</span
      >] :`;
  }

  protected render() {
    const classes = {
      cell: true,
      selected: this.selected,
      focused: this._editorFocused,
    };
    return html`
      <div
        class="${classMap(classes)}"
        draggable="true"
        @contextmenu=${this.showContextMenu}
      >
        <div class="selectionIndicatorWrapper" draggable="false">
          <div class="selectionIndicator"></div>
        </div>

        <div class="timesExecutedWrapper" draggable="false">
          <div class="timesExecuted">
            <cv-icon>drag_indicator</cv-icon>
            <div class="executionCount">${this.renderExecutionCount()}</div>
          </div>
        </div>

        <div class="cellOutputWrapper" draggable="false">
          ${this.renderEditor()} ${this.renderOutput()}
        </div>
      </div>
      <div
        class="contextMenu ${this._isMenuOpen ? 'open' : ''}"
        style="left: ${this._menuPosition.left}px; top: ${this._menuPosition
          .top}px; max-height: ${this._menuMaxHeight}"
      >
        <slot name="context-menu"></slot>
      </div>
    `;
  }
}

export default CovalentNotebookCell;
