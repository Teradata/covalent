import { TabBase } from '@material/mwc-tab/mwc-tab-base';

import { styles } from '@material/mwc-tab/mwc-tab.css';
import { customElement } from 'lit/decorators.js';

declare global {
    interface HTMLElementTagNameMap {
        'td-tab': CovalentTabBase;
    }
}

@customElement('td-tab')
export class CovalentTabBase extends TabBase {

  static override styles = [styles];  
}