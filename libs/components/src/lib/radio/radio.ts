import { RadioBase } from '@material/mwc-radio/mwc-radio-base';
import { styles } from '@material/mwc-radio/mwc-radio.css';
import { customElement } from 'lit/decorators.js';

declare global {
    interface HTMLElementTagNameMap {
        'td-radio': CovalentRadioBase;
    }
}

@customElement('td-radio')
export class CovalentRadioBase extends RadioBase {

  static override styles = [styles];  
}