import { TabBarBase } from '@material/mwc-tab-bar/mwc-tab-bar-base';
import { styles } from '@material/mwc-tab-bar/mwc-tab-bar.css';
import { customElement } from 'lit/decorators.js';

declare global {
  interface HTMLElementTagNameMap {
    'cv-tab-bar': CovalentTabBar;
  }
}

@customElement('cv-tab-bar')
export default class CovalentTabBar extends TabBarBase {
  static override styles = [styles];
}
