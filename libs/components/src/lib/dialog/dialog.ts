import { DialogBase } from '@material/mwc-dialog/mwc-dialog-base';
import { styles } from '@material/mwc-dialog/mwc-dialog.css';
import { customElement } from 'lit/decorators.js';

declare global {
    interface HTMLElementTagNameMap {
        'td-dialog': CovalentDialogBase;
    }
}

@customElement('td-dialog')
export class CovalentDialogBase extends DialogBase {

  static override styles = [styles];  
}