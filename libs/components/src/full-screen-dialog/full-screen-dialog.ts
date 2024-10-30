import { css, html, LitElement, TemplateResult, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './full-screen-dialog.scss?inline';
import CovalentDialog from '../dialog/dialog';
import '../focused-page/focused-page';

/**
 * Full-screen Dialog
 *
 * @slot - This element has a slot
 */

@customElement('cv-full-screen-dialog')
export class CovalentFullscreenDialog extends LitElement {
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

  private _handleClose(): void {
    this.open = false;
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

    // Adding styles for the ease effect when component is opened
    const styleElement = document.createElement('style');
    styleElement.textContent = styles;
    dialog?.appendChild(styleElement);
  }

  protected render(): TemplateResult<1> {
    return html`<cv-dialog
      .open="${this.open}"
      hideActions
      scrumclickAction=""
      escapeKeyAction="${this.escapeKeyAction}"
      defaultAction="${this.escapeKeyAction}"
      @closed="${this._handleClose}"
    >
      <cv-focused-page
        .helpOpen="${this.helpOpen}"
        .helpResizable="${this.helpResizable}"
        .hideTopBorder="${true}"
      >
        <slot></slot>
        <slot name="help" slot="help"> </slot>
      </cv-focused-page>
    </cv-dialog>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cv-full-screen-dialog': CovalentFullscreenDialog;
  }
}

export default CovalentFullscreenDialog;
