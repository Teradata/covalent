import { css, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { DialogBase } from '@material/mwc-dialog/mwc-dialog-base';
import { styles as baseStyles } from '@material/mwc-dialog/mwc-dialog.css';
import styles from './dialog.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'cv-dialog': CovalentDialog;
  }
}

@customElement('cv-dialog')
export class CovalentDialog extends DialogBase {
  static override styles = [baseStyles, css`${unsafeCSS(styles)}`];
}

export default CovalentDialog;
