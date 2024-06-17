import { css, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './fullscreen-takeover.scss?inline';
import CovalentDialog from '../dialog/dialog';

/**
 * Fullscreen Takeover
 *
 * @slot - This element has a slot
 */

@customElement('cv-fullscreen-takeover')
export class CovalentFullscreenTakeover extends CovalentDialog {
  static override styles = [
    css`
      ${unsafeCSS(CovalentDialog.styles)} ${unsafeCSS(styles)}
    `,
  ];

  protected firstUpdated() {
    this.hideActions = true;
    super.firstUpdated();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cv-fullscreen-takeover': CovalentFullscreenTakeover;
  }
}

export default CovalentFullscreenTakeover;
