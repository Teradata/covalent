import { TabBarBase } from '@material/mwc-tab-bar/mwc-tab-bar-base';
import { styles } from '@material/mwc-tab-bar/mwc-tab-bar.css';
import { customElement } from 'lit/decorators.js';

declare global {
    interface HTMLElementTagNameMap {
        'td-tab-bar': CovalentTabBarBase;
    }
}

@customElement('td-tab-bar')
export class CovalentTabBarBase extends TabBarBase {

  static override styles = [styles];  
}