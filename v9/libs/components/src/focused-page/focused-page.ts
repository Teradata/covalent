import {
  css,
  html,
  LitElement,
  nothing,
  PropertyValues,
  TemplateResult,
  unsafeCSS,
} from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import styles from './focused-page.scss?inline';
import { classMap } from 'lit/directives/class-map.js';

/**
 * Focused page
 *
 * @slot - This element has a slot
 */

@customElement('cv-focused-page')
export class CovalentFocusedPage extends LitElement {
  static override styles = [
    css`
      ${unsafeCSS(styles)}
    `,
  ];

  /**
   * Whether the help section is open or not
   */
  @property({ type: Boolean, reflect: true })
  helpOpen = false;

  /**
   * Whether the help section is resizable
   */
  @property({ type: Boolean, reflect: true })
  helpResizable = false;

  /**
   * Whether the top border is hidden
   */
  @property({ type: Boolean, reflect: true })
  hideTopBorder = false;

  /**
   * DOM element of the container div
   */
  @query('.fullscreen-container')
  container!: HTMLDivElement;

  /**
   * DOM element of the help panel
   */
  @query('#help-panel')
  helpPanel!: HTMLElement;

  /**
   * DOM element of the resize handler
   */
  @query('.resize-handle')
  resizeHandle!: HTMLElement;

  /**
   * Whether the help section is being resized
   */
  private _isResizing = false;

  constructor() {
    super();
    this._resizerMouseMove = this._resizerMouseMove.bind(this);
    this._resizerMouseUp = this._resizerMouseUp.bind(this);
    this._startResizing = this._startResizing.bind(this);
    this.resetHelpPanelWidth = this.resetHelpPanelWidth.bind(this);
  }

  protected firstUpdated(): void {
    this.openHelpPanel();
  }

  openHelpPanel(): void {
    // Set width of the help panel
    const savedWidth =
      parseInt(localStorage.getItem('focusedPageHelpWidth') || '') || 320;
    this.setHelpPanelWidth(this.helpOpen ? `${savedWidth}px` : '0');
  }

  closeHelpPanel() {
    this.setHelpPanelWidth('0');
    this.helpOpen = false;
  }

  resetHelpPanelWidth() {
    this.setHelpPanelWidth('320px');
    localStorage.setItem('focusedPageHelpWidth', `320`);
  }

  setHelpPanelWidth(width: string) {
    this.container?.style.setProperty('--cv-focused-page-help-width', width);
  }

  protected updated(_changedProperties: PropertyValues): void {
    super.updated(_changedProperties);
    if (_changedProperties.has('helpOpen')) {
      if (this.helpOpen) {
        this.openHelpPanel();
      } else {
        this.closeHelpPanel();
      }
    }
  }

  // Called when the resize handler is dragged to resize the help panel
  private _resizerMouseMove(e: MouseEvent): void {
    if (!this.container || !this.helpPanel || !this._isResizing) return;
    const viewportWidth = window.innerWidth;

    const containerRect = this.container.getBoundingClientRect();
    let newWidth;

    if (viewportWidth < 960) {
      // Calculate new width based on absolute positioning
      const helpPanelRect = this.helpPanel.getBoundingClientRect();
      newWidth = helpPanelRect.right - e.clientX;
    } else {
      // Calculate new width based on normal positioning
      newWidth = containerRect.right - e.clientX;
    }

    if (
      viewportWidth < 960 &&
      newWidth > 320 &&
      newWidth < viewportWidth - 40
    ) {
      this.setHelpPanelWidth(`${newWidth}px`);
      localStorage.setItem('focusedPageHelpWidth', `${newWidth}`);
    } else if (newWidth > 320 && newWidth < containerRect.width - 600) {
      this.setHelpPanelWidth(`${newWidth}px`);
      localStorage.setItem('focusedPageHelpWidth', `${newWidth}`);
    }
  }

  // Called when dragging is finished (i.e. mouse up event on resize handler)
  private _resizerMouseUp(): void {
    this._isResizing = false;
    this.helpPanel.classList.remove('resizing');
    this.helpPanel.style.transition = 'width 200ms';
    document.removeEventListener('mouseup', this._resizerMouseUp);
    document.removeEventListener('mousemove', this._resizerMouseMove);
  }

  // Called when dragging starts (i.e. mouse down event on resize handler)
  private _startResizing(e: MouseEvent): void {
    if (e.target !== this.resizeHandle) return;
    this._isResizing = true;
    this.helpPanel.classList.add('resizing');
    this.helpPanel.style.transition = 'none';
    document.addEventListener('mouseup', this._resizerMouseUp);
    document.addEventListener('mousemove', this._resizerMouseMove);
  }

  protected render(): TemplateResult<1> {
    const classes = {
      'fullscreen-container': true,
      'help-open': this.helpOpen,
      'hide-border': this.hideTopBorder,
    };
    const helpClasses = {
      'help-panel': true,
      'help-resizable': this.helpResizable,
    };
    return html`<div class="${classMap(classes)}">
      <div class="content">
        <section class="main">
          <slot></slot>
        </section>
      </div>
      <aside
        class="${classMap(helpClasses)}"
        id="help-panel"
        @mousedown="${(e: MouseEvent) => this._startResizing(e)}"
      >
        ${this.helpResizable
          ? html`<div
              class="resize-handle"
              @dblclick="${() => this.helpOpen && this.resetHelpPanelWidth()}"
            ></div>`
          : nothing}
        <div class="help"><slot name="help"></slot></div>
      </aside>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cv-focused-page': CovalentFocusedPage;
  }
}

export default CovalentFocusedPage;
