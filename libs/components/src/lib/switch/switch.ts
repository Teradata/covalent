import { SwitchBase } from '@material/mwc-switch/mwc-switch-base';
import { styles } from '@material/mwc-switch/styles.css';
import { customElement } from 'lit/decorators.js';

declare global {
    interface HTMLElementTagNameMap {
        'td-switch': CovalentSwitchBase;
    }
}

@customElement('td-switch')
export class CovalentSwitchBase extends SwitchBase {

  static override styles = [styles];  
}