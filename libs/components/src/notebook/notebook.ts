import { css, html, LitElement, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import markdownit from 'markdown-it';
import styles from './notebook.scss?inline';
import '../cell/cell';
import '../icon/icon';
import '../icon-button/icon-button';
import '../button/button';

declare global {
  interface HTMLElementTagNameMap {
    'cv-notebook': CovalentNotebook;
  }
}

interface CellData {
  code: string;
  language: string;
  output?: HTMLElement | string;
  selected?: boolean;
  index?: number;
  showEditor?: boolean;
}

@customElement('cv-notebook')
export class CovalentNotebook extends LitElement {
  /**
   * The cells in a notebook
   */
  @property({ type: Object })
  cells: CellData[] = [];

  private _draggedCellIndex: number | null = null;

  private _selectedCellIndex: number | null = null;

  private _clipboardCell: CellData | null = null;

  static override styles = [
    css`
      ${unsafeCSS(styles)}
    `,
  ];

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
      this.requestUpdate();
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

  removeCSS(className: string, targetElement: Document | ShadowRoot | null) {
    const elements = targetElement?.querySelectorAll(className);
    elements?.forEach((element) => element.classList.remove(className));
  }

  addCell(cellData: CellData) {
    this.cells = [...this.cells, cellData];
    this.requestUpdate();
  }

  deleteCell() {
    if (this._selectedCellIndex !== null) {
      this.cells.splice(this._selectedCellIndex, 1);
      this._selectedCellIndex = null;
      this.requestUpdate();
    }
  }

  deselectAllCells() {
    this.cells.forEach((cell) => (cell.selected = false));
  }

  selectCell(index: number) {
    this.deselectAllCells();
    this._selectedCellIndex = index;
    const cell = this.cells[index];
    cell.selected = true;
    this.requestUpdate();
  }

  runCell() {
    if (this._selectedCellIndex !== null) {
      const cell = this.cells[this._selectedCellIndex];
      this.convertMarkdowntoHTML(cell);
      this.requestUpdate();
    }
  }

  convertMarkdowntoHTML(cell: CellData) {
    if (cell.language === 'markdown' && cell.code) {
      const md = markdownit();
      cell.output = md.render(cell.code);
      cell.showEditor = false;
    }
  }

  handleCodeChange(e: CustomEvent, index: number) {
    const cell = this.cells[index];
    cell.code = e.detail.code;
  }

  handleOutputCLick(index: number) {
    const cell = this.cells[index];
    cell.showEditor = true;
  }

  cutCell() {
    if (this._selectedCellIndex !== null) {
      this._clipboardCell = this.cells[this._selectedCellIndex];
      this.cells.splice(this._selectedCellIndex, 1);
      this._selectedCellIndex = null;
      this.requestUpdate();
    }
  }

  copyCell() {
    if (this._selectedCellIndex !== null) {
      this._clipboardCell = { ...this.cells[this._selectedCellIndex] };
    }
  }

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

  protected firstUpdated(): void {
    this.cells.forEach((cell) => this.convertMarkdowntoHTML(cell));
    this.requestUpdate();
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
        <cv-icon-button icon="stop"></cv-icon-button>
        <cv-icon-button icon="refresh"></cv-icon-button>
        <cv-icon-button icon="fast_forward"></cv-icon-button>
      </section>
      <section class="notebookCells">
        ${this.cells.map(
          (cell, index) =>
            html`<cv-cell
              .code="${cell.code}"
              .index="${index}"
              .language="${cell.language}"
              .showEditor="${cell.showEditor !== false}"
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
                .innerHTML="${cell.output || ''}"
                @click="${() => this.handleOutputCLick(index)}"
              ></div>
            </cv-cell>`
        )}
      </section>
      <section class="notebookActions">
        <cv-button
          outlined
          @click=${() => this.addCell({ code: '', language: 'sql' })}
        >
          <cv-icon style="font-size: 20px;">add</cv-icon>SQL cell
        </cv-button>
        <cv-button
          outlined
          @click=${() => this.addCell({ code: '', language: 'python' })}
        >
          <cv-icon style="font-size: 20px;">add</cv-icon>Python cell
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
}

export default CovalentNotebook;
