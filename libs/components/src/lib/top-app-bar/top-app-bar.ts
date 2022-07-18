import { TopAppBarBase } from '@material/mwc-top-app-bar/mwc-top-app-bar-base';
import { styles } from '@material/mwc-top-app-bar/mwc-top-app-bar.css';
import { customElement } from 'lit/decorators.js';

declare global {
    interface HTMLElementTagNameMap {
        'td-top-app-bar': CovalentTopAppBarBase;
    }
}

@customElement('td-top-app-bar')
export class CovalentTopAppBarBase extends TopAppBarBase {

  static override styles = [styles];  
}