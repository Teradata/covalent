import {
  css,
  html,
  LitElement,
  PropertyValues,
  render,
  TemplateResult,
  unsafeCSS,
} from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { customElement, property } from 'lit/decorators.js';
import markdownit from 'markdown-it';
import styles from './notebook.scss?inline';
import '../alert/alert';
import '../button/button';
import '../notebook-cell/notebook-cell';
import '../code-snippet/code-snippet';
import '../icon/icon';
import '../icon-button/icon-button';
import '../list/list-item';
import '../select/select';

declare global {
  interface HTMLElementTagNameMap {
    'cv-notebook': CovalentNotebook;
  }
}

interface CellData {
  cell_type: string;
  code: string;
  errors?: string[];
  execution_count?: number | null;
  index?: number;
  inputs?: { password: boolean; prompt: string }[];
  language: string;
  loading?: boolean;
  metadata: {
    tags?: string[];
    trusted?: boolean;
  };
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
  source: string;
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

  constructor() {
    super();
    this._handleKeydown = this._handleKeydown.bind(this);
  }

  // Add a cell to the notebook
  addCell(cellType: string) {
    const cellData = this.createNewCell(cellType);
    this._clipboardCell = { ...cellData };
    this.pasteCell();
    this._clipboardCell = null;
  }

  connectedCallback(): void {
    super.connectedCallback();
    document.addEventListener('keydown', this._handleKeydown);
  }

  // Copy the selected cell
  copyCell() {
    if (this._selectedCellIndex !== null) {
      this._clipboardCell = { ...this.cells[this._selectedCellIndex] };
    }
  }

  // Create a new cell object
  createNewCell(cellType: string): CellData {
    const language =
      cellType === 'markdown' ? cellType : this.defaultLanguage || 'python';
    return {
      cell_type: cellType,
      code: '',
      execution_count: null,
      language: language,
      metadata: {
        tags: [],
        trusted: false,
      },
      outputs: [],
      source: '',
    };
  }

  // Cut the selected cell
  cutCell() {
    if (this._selectedCellIndex !== null) {
      this._clipboardCell = this.cells[this._selectedCellIndex];
      this.deleteCell();
    }
  }

  // Delete the selected cell
  deleteCell() {
    if (this._selectedCellIndex !== null) {
      this.cells = this.cells.filter(
        (_, index) => index !== this._selectedCellIndex
      );
      const selectedCellIndex = Math.min(
        this._selectedCellIndex + 1,
        this.cells.length - 1
      );
      // Select and scroll to the next cell
      this.scrollToSelectedCell(selectedCellIndex);
      this.dispatchUpdatedCells();
    }
  }

  // Deselect all the cells
  deselectAllCells() {
    this.cells.forEach((cell) => (cell.selected = false));
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    document.removeEventListener('keydown', this._handleKeydown);
  }

  // Dispatch a custom cell action event
  // It handles actions like: run-cell, interrupt-cell, refresh-cell etc
  dispatchCustomCellEvent(name: string, cell?: CellData) {
    if (!cell && this._selectedCellIndex) {
      cell = this.cells[this._selectedCellIndex];
    }
    if (cell) {
      this.dispatchEvent(
        new CustomEvent('cell-action', {
          bubbles: true,
          cancelable: true,
          detail: { cell, index: this._selectedCellIndex, action: name },
        })
      );
    }
  }

  dispatchUpdatedCells(): void {
    this.dispatchEvent(
      new CustomEvent('cells-updated', {
        bubbles: true,
        cancelable: true,
        detail: { cells: this.cells },
      })
    );
  }

  protected firstUpdated(): void {
    if (this.cells.length) {
      this.cells.forEach((cell) => {
        cell.showEditor = this.shouldRenderEditor(cell);
      });
      this.selectCell(0);
      this.requestUpdate();
    }
  }

  getDragImage(cellIndex: number): HTMLElement {
    const cell = this.cells[cellIndex];

    // This is the drag image seen when a cell is being dragged
    const template = html`
      <div class="dragImage" style="width: 80%;">
        <cv-notebook-cell
          .code="${cell.code}"
          .language="${cell.language}"
          .timesExecuted="${cell.timesExecuted || 0}"
          .loading="${cell.loading}"
          .selected="false"
          .showEditor="false"
        ></cv-notebook-cell>
      </div>
    `;
    const container = document.createElement('div');
    render(template, container);

    return container;
  }

  scrollToSelectedCell(selectedCellIndex: number) {
    this.selectCell(selectedCellIndex);
    const selectedCellElement = this.shadowRoot?.querySelector(
      `#cell-${this._selectedCellIndex}`
    ) as HTMLElement;
    const container = this.shadowRoot?.querySelector(
      '#notebook-cells'
    ) as HTMLElement;

    /* Check the current position of the selected cell within the container
    and scroll to it's position */
    if (selectedCellElement && container) {
      const containerRect = container.getBoundingClientRect();
      const cellRect = selectedCellElement.getBoundingClientRect();

      const isAbove = cellRect.top < containerRect.top;
      const isBelow = cellRect.bottom > containerRect.bottom;

      // Scroll to the top of the cell
      if (isAbove) {
        container.scrollTop =
          selectedCellElement.offsetTop - container.offsetTop;
      } else if (isBelow) {
        // Scroll to the bottom of the cell
        container.scrollTop =
          selectedCellElement.offsetTop -
          container.offsetTop -
          container.clientHeight +
          selectedCellElement.clientHeight;
      }
    }
  }

  // Dispatch an event when the cell type is changed
  handleCellTypeChange(e: CustomEvent) {
    const cellType = this.cellTypes[e.detail.index];
    if (this._selectedCellIndex !== null) {
      this.dispatchEvent(
        new CustomEvent('cell-type-changed', {
          bubbles: true,
          cancelable: true,
          detail: { index: this._selectedCellIndex, cellType },
        })
      );
    }
  }

  // Called whenever the code changes in the cell editor
  handleCodeChange(e: CustomEvent, index: number) {
    const cell = this.cells[index];
    cell.code = e.detail.code;
    this.dispatchCustomCellEvent('edit-cell', cell);
  }

  handleDragStart(e: DragEvent, index: number) {
    this._draggedCellIndex = index;
    this.deselectAllCells();
    if (e.dataTransfer) {
      const target = e.currentTarget as HTMLElement;
      target.classList.add('dragged');
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', index.toString());

      // Get a custom drag image
      const dragImageContainer = this.getDragImage(index);
      const dragImage = dragImageContainer.firstElementChild as HTMLElement;
      dragImage.style.position = 'absolute';
      dragImage.style.top = '-1000px'; // Move off-screen
      document.body.appendChild(dragImage);
      e.dataTransfer.setDragImage(dragImage, 0, 0);

      // Clean up drag image after drag starts
      setTimeout(() => {
        document.body.removeChild(dragImage);
      }, 0);
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
      draggedCell.selected = true;
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
      // Dispatch an event with updated cells
      this.dispatchUpdatedCells();
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
    event.stopImmediatePropagation();
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
      inputElement.blur();
    }
  }

  // Handle keyboard actions within the notebook
  private _handleKeydown(event: KeyboardEvent) {
    let selectedCellIndex = this.cells?.findIndex((cell) => cell.selected);
    switch (event.key) {
      case 'ArrowUp':
        // Navigate to the cell above the current cell
        selectedCellIndex = Math.max(selectedCellIndex - 1, 0);
        this.scrollToSelectedCell(selectedCellIndex);
        break;
      case 'ArrowDown':
        // Navigate to the cell below the current cell
        selectedCellIndex = Math.min(
          selectedCellIndex + 1,
          this.cells.length - 1
        );
        this.scrollToSelectedCell(selectedCellIndex);
        break;
      case 'Enter':
        // Pressing Shift + Enter key should run the cell
        if (event.shiftKey) {
          this.runCell();
        } else {
          // Pressing the Enter key should add focus to the code editor
          const selectedCellElement = this.shadowRoot?.querySelector(
            `#cell-${selectedCellIndex}`
          );
          const codeEditor =
            selectedCellElement?.shadowRoot?.querySelector('cv-code-editor');
          codeEditor?.editor?.focus();
        }
        break;
    }
  }

  // Shows the cell editor on clicking output for markdown cells
  handleOutputCLick(index: number) {
    const cell = this.cells[index];
    if (cell.language === 'markdown') {
      cell.showEditor = true;
      this.cells = this.cells.map((cell) => cell);
      this.dispatchUpdatedCells();
    }
  }

  // Paste the copied/cut cell in the desired position
  pasteCell() {
    if (this._clipboardCell !== null) {
      const index =
        this._selectedCellIndex !== null
          ? this._selectedCellIndex + 1
          : this.cells.length;
      this._clipboardCell.selected = true;
      this.cells.splice(index, 0, { ...this._clipboardCell });
      this.cells = this.cells.map((cell, idx) => ({ ...cell, index: idx }));
      this.selectCell(index);
      this.dispatchUpdatedCells();
    }
  }

  renderCellOutput(cell: CellData): TemplateResult<1> {
    if (cell.outputs?.length) {
      return html`${cell.outputs.map(
        (output) =>
          html`${output.data &&
          Object.keys(output.data).map((key) => {
            const md = markdownit({ html: true });
            switch (key) {
              case 'text/markdown':
                // converts markdown to html
                return html`<div class="output-container" tabindex="0">
                  ${unsafeHTML(md.render(output.data[key]))}
                </div>`;
              case 'text/html':
                return html`<div class="output-container" tabindex="0">
                  ${unsafeHTML(output.data[key])}
                </div>`;
              case 'image/png':
              case 'image/jpg': {
                return html`<div class="output-container" tabindex="0">
                  <img
                    class="output-image"
                    draggable="false"
                    src=${`data:image/${
                      key.includes('jpg') ? 'jpg' : 'png'
                    };base64, ${output.data[key]}`}
                  />
                </div>`;
              }
              default:
                return html``;
            }
          })}`
      )}`;
    }
    return html``;
  }

  protected render() {
    return html`<div class="notebook">
      <section class="notebookHeaderActions">
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
          @click="${() => this.dispatchCustomCellEvent('interrupt-kernel')}"
        ></cv-icon-button>
        <cv-icon-button
          icon="refresh"
          @click="${() => this.dispatchCustomCellEvent('refresh')}"
        ></cv-icon-button>
        <cv-icon-button
          icon="fast_forward"
          @click="${() => this.dispatchCustomCellEvent('refresh-run-all')}"
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
      <section class="notebookCells" id="notebook-cells">
        ${this.cells.map(
          (cell, index) =>
            html`<cv-notebook-cell
              .code="${cell.code}"
              .index="${index}"
              .language="${cell.language}"
              .showEditor="${cell.showEditor !== false}"
              .timesExecuted="${cell.timesExecuted}"
              .loading="${cell.loading}"
              id="cell-${index}"
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
                @dblclick="${() => this.handleOutputCLick(index)}"
              >
                ${this.renderCellOutput(cell)}
              </div>
              ${cell.inputs?.length &&
              cell.inputs.map(
                (input) => html`
                  <div class="input-container" slot="input">
                    <cv-typography scale="body2">
                      ${input.prompt}
                    </cv-typography>
                    <input
                      id="cell-input"
                      type="${input.password ? 'password' : 'text'}"
                      @keydown="${this.handleInputKeydown}"
                      placeholder="Press enter"
                      autofocus
                    />
                  </div>
                `
              )}
              ${cell.errors?.length &&
              html`<div slot="error">
                ${cell.errors &&
                cell.errors.map(
                  (error) => html`<cv-alert
                    titleText="Error!"
                    descriptionText="${error}"
                    state="negative"
                    icon="error"
                    iconAriaLabel="error"
                  >
                  </cv-alert>`
                )}
              </div>`}
            </cv-notebook-cell>`
        )}
      </section>
      <section class="notebookActions">
        <cv-button outlined @click=${() => this.addCell('code')}>
          <cv-icon style="font-size: 20px;">add</cv-icon>Code cell
        </cv-button>
        <cv-button outlined @click=${() => this.addCell('markdown')}>
          <cv-icon style="font-size: 20px;">add</cv-icon>Markdown
        </cv-button>
      </section>
    </div>`;
  }

  // Remove a css class from a target element
  removeCSS(className: string, targetElement: Document | ShadowRoot | null) {
    const elements = targetElement?.querySelectorAll(className);
    elements?.forEach((element) => element.classList.remove(className));
  }

  runCell() {
    if (this._selectedCellIndex !== null) {
      const cell = this.cells[this._selectedCellIndex];
      this.dispatchCustomCellEvent('run-cell', cell);

      // Select the next cell after running the current cell
      if (this._selectedCellIndex + 1 < this.cells.length) {
        this.scrollToSelectedCell(this._selectedCellIndex + 1);
      }
    }
    this.requestUpdate();
  }

  selectCell(index: number) {
    if (index !== this._selectedCellIndex) {
      this.deselectAllCells();
      this._selectedCellIndex = index;
      const cell = this.cells[index];
      cell.selected = true;
      this.cellType = cell.language === 'markdown' ? 'markdown' : 'code';
      this.requestUpdate();
    }
  }

  // Whether a code editor should be shown in the cell
  shouldRenderEditor(cell: CellData): boolean {
    return (
      cell.language !== 'markdown' ||
      (cell.language === 'markdown' && !cell.outputs?.length)
    );
  }

  protected updated(_changedProperties: PropertyValues): void {
    if (_changedProperties.has('cells')) {
      this.cells.forEach((cell, index) => {
        // If user input is requested in a cell, scroll to it's position
        if (cell.inputs?.length) {
          this.scrollToSelectedCell(index);
        }
      });
    }
    super.updated(_changedProperties);
  }
}

export default CovalentNotebook;
