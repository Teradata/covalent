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
import styles from './fullscreen-takeover.scss?inline';
import CovalentDialog from '../dialog/dialog';
import { classMap } from 'lit/directives/class-map.js';

/**
 * Fullscreen Takeover
 *
 * @slot - This element has a slot
 */

@customElement('cv-fullscreen-takeover')
export class CovalentFullscreenTakeover extends LitElement {
  static override styles = [
    css`
      ${unsafeCSS(CovalentDialog.styles)} ${unsafeCSS(styles)}
    `,
  ];

  /**
   * Whether the component is open
   */
  @property({ type: Boolean, reflect: true })
  open = false;

  /**
   * Action to be taken when escape button is clicked.
   * Set it to '' to prevent any action.
   */
  @property({ type: String })
  escapeKeyAction = 'close';

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

  @query('.fullscreen-container')
  container!: HTMLDivElement;

  @query('#help-panel')
  helpPanel!: HTMLElement;

  @query('.resize-handle')
  resizeHandle!: HTMLElement;

  private _isResizing = false;

  private _handleClose(): void {
    this.open = false;
  }

  constructor() {
    super();
    this._resizerMouseMove = this._resizerMouseMove.bind(this);
    this._resizerMouseUp = this._resizerMouseUp.bind(this);
    this._startResizing = this._startResizing.bind(this);
    this.resetHelpPanelWidth = this.resetHelpPanelWidth.bind(this);
  }

  protected firstUpdated(): void {
    const dialog = this.renderRoot.querySelector('cv-dialog')?.shadowRoot;
    const styles = `
      .mdc-dialog--opening .mdc-dialog__container {
        transform: translate(100%, 0);
        transition: transform 150ms cubic-bezier(0.4, 0, 1, 1);
      }

      .mdc-dialog--closing .mdc-dialog__container {
        opacity: 1;
        transform: translate(100%, 0);
        transition: transform 150ms cubic-bezier(0, 0, 0.2, 1);
      }
    `;

    const styleElement = document.createElement('style');
    styleElement.textContent = styles;
    dialog?.appendChild(styleElement);

    this.openHelpPanel();
  }

  openHelpPanel(): void {
    const savedWidth =
      parseInt(localStorage.getItem('fullscreenHelpWidth') || '') || 320;
    this.setHelpPanelWidth(this.helpOpen ? `${savedWidth}px` : '0');
  }

  closeHelpPanel() {
    this.setHelpPanelWidth('0');
    this.helpOpen = false;
  }

  resetHelpPanelWidth() {
    this.setHelpPanelWidth('320px');
    localStorage.setItem('fullscreenHelpWidth', `320`);
  }

  setHelpPanelWidth(width: string) {
    this.container?.style.setProperty(
      '--cv-fullscreen-takoeover-help-width',
      width
    );
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

  private _resizerMouseMove(e: MouseEvent): void {
    if (!this.container || !this.helpPanel || !this._isResizing) return;
    const containerRect = this.container.getBoundingClientRect();
    const newWidth = containerRect.right - e.clientX;

    if (newWidth > 320 && newWidth < containerRect.width - 600) {
      this.setHelpPanelWidth(`${newWidth}px`);
      localStorage.setItem('fullscreenHelpWidth', `${newWidth}`);
    }
  }

  private _resizerMouseUp(): void {
    this._isResizing = false;
    this.helpPanel.classList.remove('resizing');
    this.helpPanel.style.transition = 'width 200ms';
    document.removeEventListener('mouseup', this._resizerMouseUp);
    document.removeEventListener('mousemove', this._resizerMouseMove);
  }

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
    };
    const helpClasses = {
      'help-panel': true,
      'help-resizable': this.helpResizable,
    };
    return html`<cv-dialog
      .open="${this.open}"
      hideActions
      scrumclickAction=""
      escapeKeyAction="${this.escapeKeyAction}"
      defaultAction="${this.escapeKeyAction}"
      @closed="${this._handleClose}"
    >
      <div class="${classMap(classes)}">
        <main class="content">
          <section class="main">
            <slot></slot>
          </section>
        </main>
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
      </div>
    </cv-dialog>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cv-fullscreen-takeover': CovalentFullscreenTakeover;
  }
}

export default CovalentFullscreenTakeover;
