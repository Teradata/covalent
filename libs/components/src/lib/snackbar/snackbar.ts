import { SnackbarBase } from '@material/mwc-snackbar/mwc-snackbar-base';
import { styles } from '@material/mwc-snackbar/mwc-snackbar.css';
import { customElement } from 'lit/decorators.js';

declare global {
    interface HTMLElementTagNameMap {
        'td-snackbar': CovalentSnackbarBase;
    }
}

@customElement('td-snackbar')
export class CovalentSnackbarBase extends SnackbarBase {

  static override styles = [styles];  
}