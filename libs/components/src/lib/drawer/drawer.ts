import { DrawerBase } from '@material/mwc-drawer/mwc-drawer-base';
import { styles } from '@material/mwc-drawer/mwc-drawer.css';
import { customElement } from 'lit/decorators.js';

declare global {
    interface HTMLElementTagNameMap {
        'td-drawer': CovalentDrawerBase;
    }
}

@customElement('td-drawer')
export class CovalentDrawerBase extends DrawerBase {

  static override styles = [styles];  
}