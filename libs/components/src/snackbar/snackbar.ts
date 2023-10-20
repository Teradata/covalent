import { css, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { SnackbarBase } from '@material/mwc-snackbar/mwc-snackbar-base';
import { styles as baseStyles } from '@material/mwc-snackbar/mwc-snackbar.css';
import styles from './snackbar.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'cv-snackbar': CovalentSnackbar;
  }
}

@customElement('cv-snackbar')
export default class CovalentSnackbar extends SnackbarBase {
  static override styles = [baseStyles, css`${unsafeCSS(styles)}`];
}