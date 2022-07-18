import { IconButtonBase } from '@material/mwc-icon-button/mwc-icon-button-base';
import { styles } from '@material/mwc-icon-button/mwc-icon-button.css';
import { customElement } from 'lit/decorators.js';

declare global {
    interface HTMLElementTagNameMap {
        'td-icon-button': CovalentIconButtonBase;
    }
}

@customElement('td-icon-button')
export class CovalentIconButtonBase extends IconButtonBase {

  static override styles = [styles];  
}