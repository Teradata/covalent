import { css, PropertyValues, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from '@material/mwc-dialog/mwc-dialog.css';
import { CovalentDialog } from '../dialog/dialog';
import baseStyles from './side-sheet.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'cv-side-sheet': CovalentSideSheet;
  }
}

/**
 * Side sheet element.
 *
 * @slot - This element has a slot
 */
@customElement('cv-side-sheet')
export class CovalentSideSheet extends CovalentDialog {
  static override styles = [
    styles,
    css`
      ${unsafeCSS(baseStyles)}
    `,
  ];

  @property({ type: Boolean, reflect: true })
  pushed = false;

  @property({ type: Boolean, reflect: true })
  noPadding = false;

  @property({ type: Number })
  width = 800;

  willUpdate(changedProperties: PropertyValues): void {
    super.willUpdate(changedProperties);
    if (changedProperties.has('width')) {
      if (this.width !== 800) {
        this.style.setProperty('--cv-side-sheet-width', `${this.width}px`);
      } else {
        this.style.removeProperty('--cv-side-sheet-width');
      }
    }
  }

  constructor() {
    super();
    this.hideActions = true;
  }
}
