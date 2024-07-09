import {
  css,
  html,
  LitElement,
  PropertyValues,
  TemplateResult,
  unsafeCSS,
} from 'lit';
import { customElement, property } from 'lit/decorators.js';
import markdownit from 'markdown-it';
import styles from './notebook.scss?inline';
import '../cell/cell';
import '../icon/icon';
import '../icon-button/icon-button';
import '../button/button';
import '../select/select';
import '../list/list-item';

declare global {
  interface HTMLElementTagNameMap {
    'cv-notebook': CovalentNotebook;
  }
}

interface CellData {
  code: string;
  errors?: string[];
  index?: number;
  inputs?: { password: boolean; prompt: string }[];
  language: string;
  outputs?: {
    data: {
      [key: string]: string;
    };
    metadata?: {
      [key: string]: string;
    };
    outputType?: string;
  }[];
  selected?: boolean;
  showEditor?: boolean;
  timesExecuted?: number;
}

interface CellType {
  type: string;
  name: string;
  selected?: boolean;
}

@customElement('cv-notebook')
export class CovalentNotebook extends LitElement {
  /**
   * The cells in a notebook
   */
  @property({ type: Array })
  cells: CellData[] = [];

  /**
   * The cell types in a notebook
   */
  @property({ type: Array })
  cellTypes: CellType[] = [];

  /**
   * The selected cell type for a cell
   */
  @property({ type: String })
  cellType!: string;

  /**
   * Default language for cells in the notebook
   */
  @property({ type: String })
  defaultLanguage!: string;

  private _clipboardCell: CellData | null = null;

  private _draggedCellIndex: number | null = null;

  private _selectedCellIndex: number | null = null;

  static override styles = [
    css`
      ${unsafeCSS(styles)}
    `,
  ];

  // Add a cell to the notebook
  addCell(cellData: CellData) {
    this.cells = [...this.cells, cellData];
    this.requestUpdate();
  }

  // Copy the selected cell
  copyCell() {
    if (this._selectedCellIndex !== null) {
      this._clipboardCell = { ...this.cells[this._selectedCellIndex] };
    }
  }

  // Cut the selected cell
  cutCell() {
    if (this._selectedCellIndex !== null) {
      this._clipboardCell = this.cells[this._selectedCellIndex];
      this.cells.splice(this._selectedCellIndex, 1);
      this._selectedCellIndex = null;
      this.requestUpdate();
    }
  }

  // Delete the selected cell
  deleteCell() {
    if (this._selectedCellIndex !== null) {
      this.cells.splice(this._selectedCellIndex, 1);
      this._selectedCellIndex = null;
      this.requestUpdate();
    }
  }

  // Deselect all the cells
  deselectAllCells() {
    this.cells.forEach((cell) => (cell.selected = false));
  }

  // Dispatch a custom cell event
  dispatchCustomCellEvent(name: string, cell?: CellData) {
    if (!cell && this._selectedCellIndex) {
      cell = this.cells[this._selectedCellIndex];
    }
    if (cell) {
      this.dispatchEvent(
        new CustomEvent(name, {
          bubbles: true,
          cancelable: true,
          detail: { cell, index: this._selectedCellIndex },
        })
      );
    }
  }

  protected firstUpdated(): void {
    if (this.cells.length) {
      this.cells.forEach((cell) => {
        cell.showEditor = this.shouldRenderEditor(cell);
      });
      this.selectCell(0);
      this.requestUpdate();
    }
    this.initializeMonaco();
  }

  // Dispatch an event when the cell type is changed
  handleCellTypeChange(e: CustomEvent) {
    const cellType = this.cellTypes[e.detail.index];
    this.dispatchEvent(
      new CustomEvent('cell-type-changed', {
        bubbles: true,
        cancelable: true,
        detail: { index: this._selectedCellIndex, cellType },
      })
    );
  }

  // Called whenever the code changes in the cell editor
  handleCodeChange(e: CustomEvent, index: number) {
    const cell = this.cells[index];
    cell.code = e.detail.code;
  }

  handleDragStart(e: DragEvent, index: number) {
    this._draggedCellIndex = index;
    this.deselectAllCells();
    if (e.dataTransfer) {
      const target = e.currentTarget as HTMLElement;
      target.classList.add('dragged');
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', index.toString());
    }
  }

  handleDragOver(e: DragEvent) {
    e.preventDefault();
    const target = e.currentTarget as HTMLElement;
    target.classList.add('drag-over');
    if (e.dataTransfer) {
      e.dataTransfer.dropEffect = 'move';
    }
  }

  handleDrop(e: DragEvent, index: number) {
    e.preventDefault();
    this.handleDragLeave(e);
    if (this._draggedCellIndex !== null) {
      const draggedCell = this.cells[this._draggedCellIndex];
      this.cells = [
        ...this.cells.slice(0, this._draggedCellIndex),
        ...this.cells.slice(this._draggedCellIndex + 1),
      ];
      this.cells = [
        ...this.cells.slice(0, index),
        draggedCell,
        ...this.cells.slice(index),
      ];

      // Update cell indices
      this.cells = this.cells.map((cell, idx) => ({ ...cell, index: idx }));

      this._draggedCellIndex = null;
      this.dispatchEvent(
        new CustomEvent('drag-finished', {
          bubbles: true,
          cancelable: true,
          detail: { cells: this.cells },
        })
      );
    }
  }

  handleDragLeave(e: DragEvent) {
    const target = e.currentTarget as HTMLElement;
    target.classList.remove('drag-over');
    target.classList.remove('dragged');
  }

  handleDragEnd() {
    this._draggedCellIndex = null;
    this.removeCSS('drag-over', this.shadowRoot);
    this.removeCSS('dragged', document);
  }

  // Handle enter key event of cell input
  handleInputKeydown(event: KeyboardEvent) {
    const inputElement = this.shadowRoot?.querySelector(
      '#cell-input'
    ) as HTMLInputElement;
    if (event.key === 'Enter' && inputElement) {
      this.dispatchEvent(
        new CustomEvent('input-entered', {
          bubbles: true,
          cancelable: true,
          detail: { value: inputElement.value },
        })
      );
    }
  }

  // Shows the cell editor on clicking output for markdown cells
  handleOutputCLick(index: number) {
    const cell = this.cells[index];
    if (cell.language === 'markdown') {
      cell.showEditor = true;
    }
  }

  initializeMonaco(): void {
    // Define the MonacoEnvironment to specify the worker URL
    window.MonacoEnvironment = {
      getWorker: function (_moduleId, label) {
        switch (label) {
          case 'json':
            return new Worker(
              new URL(
                '../../../../node_modules/monaco-editor/esm/vs/language/json/json.worker',
                import.meta.url
              ),
              { type: 'module' }
            );
          case 'css':
            return new Worker(
              new URL(
                '../../../../node_modules/monaco-editor/esm/vs/language/css/css.worker',
                import.meta.url
              ),
              { type: 'module' }
            );
          case 'html':
            return new Worker(
              new URL(
                '../../../../node_modules/monaco-editor/esm/vs/language/html/html.worker',
                import.meta.url
              ),
              { type: 'module' }
            );
          case 'typescript':
          case 'javascript':
            return new Worker(
              new URL(
                '../../../../node_modules/monaco-editor/esm/vs/language/typescript/ts.worker',
                import.meta.url
              ),
              { type: 'module' }
            );
          default:
            return new Worker(
              new URL(
                '../../../../node_modules/monaco-editor/esm/vs/editor/editor.worker.js',
                import.meta.url
              ),
              { type: 'module' }
            );
        }
      },
    };
  }

  // Paste the copied/cut cell in the desired position
  pasteCell() {
    if (this._clipboardCell !== null) {
      const index =
        this._selectedCellIndex !== null
          ? this._selectedCellIndex + 1
          : this.cells.length;
      this.cells.splice(index, 0, { ...this._clipboardCell });
      this.cells = this.cells.map((cell, idx) => ({ ...cell, index: idx }));
      this._selectedCellIndex = index;
      this.requestUpdate();
    }
  }

  renderCellOutput(cell: CellData): TemplateResult<1> {
    if (cell.outputs?.length) {
      return html`${cell.outputs.map(
        (output) =>
          html`${output.data &&
          Object.keys(output.data).map((key) => {
            const content = document.createElement('div');
            const md = markdownit({ html: true });
            switch (key) {
              case 'text/markdown':
                content.innerHTML = md.render(output.data[key]);
                break;
              case 'text/html':
                content.innerHTML = output.data[key];
                break;
              case 'image/png': {
                const image = document.createElement('img');
                image.style.maxWidth = '100%';
                image.src = `data:image/png;base64, ${output.data[key]}`;
                content.appendChild(image);
                break;
              }
            }
            return content;
          })}`
      )}`;
    }
    return html``;
  }

  protected render() {
    return html`<div class="notebook">
      <section class="notebookHeaderActions">
        <cv-icon-button class="filledIcon" icon="save"></cv-icon-button>
        <cv-icon-button
          icon="content_cut"
          @click="${this.cutCell}"
        ></cv-icon-button>
        <cv-icon-button
          icon="content_copy"
          @click="${this.copyCell}"
        ></cv-icon-button>
        <cv-icon-button
          icon="content_paste"
          @click="${this.pasteCell}"
        ></cv-icon-button>
        <cv-icon-button
          icon="delete"
          @click="${this.deleteCell}"
        ></cv-icon-button>
        <cv-icon-button
          icon="play_arrow"
          @click="${this.runCell}"
        ></cv-icon-button>
        <cv-icon-button
          icon="stop"
          @click="${() => this.dispatchCustomCellEvent('interrupt-cell')}"
        ></cv-icon-button>
        <cv-icon-button
          icon="refresh"
          @click="${() => this.dispatchCustomCellEvent('refresh-cell')}"
        ></cv-icon-button>
        <cv-icon-button
          icon="fast_forward"
          @click="${() => this.dispatchCustomCellEvent('refresh-run-all-cell')}"
        ></cv-icon-button>
        <cv-select
          label="Cell type"
          outlined
          value=${this.cellType}
          @selected="${(eventData: CustomEvent) =>
            this.handleCellTypeChange(eventData)}"
        >
          ${this.cellTypes?.map(
            (cellType) =>
              html`<cv-list-item value="${cellType.type}"
                >${cellType.name}</cv-list-item
              >`
          )}
        </cv-select>
      </section>
      <section class="notebookCells">
        ${this.cells.map(
          (cell, index) =>
            html`<cv-cell
              .code="${cell.code}"
              .index="${index}"
              .language="${cell.language}"
              .showEditor="${cell.showEditor !== false}"
              .timesExecuted="${cell.timesExecuted}"
              id="cell-${index}"
              draggable="true"
              @dragstart="${(e: DragEvent) => this.handleDragStart(e, index)}"
              @dragover="${(e: DragEvent) => this.handleDragOver(e)}"
              @dragleave="${(e: DragEvent) => this.handleDragLeave(e)}"
              @drop="${(e: DragEvent) => this.handleDrop(e, index)}"
              @dragend="${this.handleDragEnd}"
              @click="${() => this.selectCell(index)}"
              @code-change="${(e: CustomEvent) =>
                this.handleCodeChange(e, index)}"
              .selected="${cell.selected}"
            >
              <div
                slot="output"
                @click="${() => this.handleOutputCLick(index)}"
              >
                ${this.renderCellOutput(cell)}
              </div>
              ${cell.inputs?.length &&
              cell.inputs.map(
                (input) => html`
                  <div class="input-container" slot="input">
                    <cv-typography scale="body2">
                      ${input.prompt}:
                    </cv-typography>
                    <input
                      id="cell-input"
                      type="${input.password ? 'password' : 'text'}"
                      @keydown="${this.handleInputKeydown}"
                      placeholder="Press enter"
                    />
                  </div>
                `
              )}
              ${cell.errors?.length &&
              html`<cv-typography class="error" slot="error" scale="body2">
                ${cell.errors && cell.errors.map((error) => html`${error}`)}
              </cv-typography>`}
            </cv-cell>`
        )}
      </section>
      <section class="notebookActions">
        <cv-button
          outlined
          @click=${() =>
            this.addCell({
              code: '',
              language: this.defaultLanguage || 'python',
            })}
        >
          <cv-icon style="font-size: 20px;">add</cv-icon>Code cell
        </cv-button>
        <cv-button
          outlined
          @click=${() => this.addCell({ code: '', language: 'markdown' })}
        >
          <cv-icon style="font-size: 20px;">add</cv-icon>Markdown
        </cv-button>
      </section>
    </div>`;
  }

  removeCSS(className: string, targetElement: Document | ShadowRoot | null) {
    const elements = targetElement?.querySelectorAll(className);
    elements?.forEach((element) => element.classList.remove(className));
  }

  runCell() {
    if (this._selectedCellIndex !== null) {
      const cell = this.cells[this._selectedCellIndex];
      this.dispatchCustomCellEvent('run-cell', cell);
    }
    this.requestUpdate();
  }

  selectCell(index: number) {
    this.deselectAllCells();
    this._selectedCellIndex = index;
    const cell = this.cells[index];
    cell.selected = true;
    this.cellType = cell.language === 'markdown' ? 'markdown' : 'code';
    this.requestUpdate();
  }

  shouldRenderEditor(cell: CellData): boolean {
    return (
      cell.language !== 'markdown' ||
      (cell.language === 'markdown' && !cell.outputs?.length)
    );
  }

  protected updated(_changedProperties: PropertyValues): void {
    if (_changedProperties.has('cells')) {
      this.cells.forEach((cell) => {
        cell.showEditor = this.shouldRenderEditor(cell);
      });
    }
  }
}

export default CovalentNotebook;
