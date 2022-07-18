import { ButtonBase } from '@material/mwc-button/mwc-button-base';
import { styles } from '@material/mwc-button/styles.css';
import { customElement } from 'lit/decorators.js';

declare global {
    interface HTMLElementTagNameMap {
        'td-button': CovalentButtonBase;
    }
}

@customElement('td-button')
export class CovalentButtonBase extends ButtonBase {

  static override styles = [styles];  
}