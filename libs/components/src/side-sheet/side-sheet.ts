import { customElement, property } from 'lit/decorators.js';
import { styles } from '@material/mwc-dialog/mwc-dialog.css';
import { CovalentDialogBase } from '../dialog/dialog';
import baseStyles from './side-sheet.scss';

declare global {
  interface HTMLElementTagNameMap {
    'td-side-sheet': CovalentSideSheet;
  }
}

/**
 * Side sheet element.
 *
 * @slot - This element has a slot
 */
@customElement('td-side-sheet')
export class CovalentSideSheet extends CovalentDialogBase {
  static override styles = [styles, baseStyles];

  @property({ type: Boolean, reflect: true })
  pushed = false;

  @property({ type: Boolean, reflect: true })
  noPadding = false;

  constructor() {
    super();
    this.hideActions = true;
  }
}
