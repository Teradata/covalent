import { SelectBase } from '@material/mwc-select/mwc-select-base';
import { styles } from '@material/mwc-select/mwc-select.css';
import { customElement } from 'lit/decorators.js';

declare global {
    interface HTMLElementTagNameMap {
        'td-select': CovalentSelectBase;
    }
}

@customElement('td-select')
export class CovalentSelectBase extends SelectBase {

  static override styles = [styles];  
}