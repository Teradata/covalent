import { css, html, TemplateResult, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './full-screen-dialog.scss?inline';
import sideSheetStyles from '../side-sheet/side-sheet.scss?inline';
import CovalentDialog from '../dialog/dialog';
import '../focused-page/focused-page';

/**
 * Full-screen Dialog
 *
 * @slot - This element has a slot
 */

@customElement('cv-full-screen-dialog')
export class CovalentFullscreenDialog extends CovalentDialog {
  static override styles = [
    css`
      ${unsafeCSS(CovalentDialog.styles)} ${unsafeCSS(
        sideSheetStyles
      )} ${unsafeCSS(styles)}
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
   * Since the default, action slots of mdc-dialog have been replaced with the focused page component,
   * override this method to return focused page as the initial focus element
   */
  protected override getInitialFocusEl(): HTMLElement | null {
    const initFocusSelector = `[${this.initialFocusAttribute}]`;

    // only search light DOM. This typically handles all the cases
    const lightDomQs = this.querySelector(initFocusSelector);

    if (lightDomQs) {
      return lightDomQs as HTMLElement;
    }

    const focusedPage = this.renderRoot.querySelector('cv-focused-page');
    return focusedPage;
  }

  protected override render(): TemplateResult<1> {
    return html` <div
      class="mdc-dialog"
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="title"
      aria-describedby="content"
    >
      <div class="mdc-dialog__container">
        <div class="mdc-dialog__surface">
          <div id="content" class="mdc-dialog__content">
            <cv-focused-page
              .helpOpen="${this.helpOpen}"
              .helpResizable="${this.helpResizable}"
              .hideTopBorder="${true}"
            >
              <slot></slot>
              <slot name="help" slot="help"> </slot>
            </cv-focused-page>
          </div>
        </div>
      </div>
      <div class="mdc-dialog__scrim"></div>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cv-full-screen-dialog': CovalentFullscreenDialog;
  }
}

export default CovalentFullscreenDialog;
