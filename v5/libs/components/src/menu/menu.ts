import { MenuBase } from '@material/mwc-menu/mwc-menu-base';
import { styles } from '@material/mwc-menu/mwc-menu.css';
import { customElement } from 'lit/decorators.js';

declare global {
  interface HTMLElementTagNameMap {
    'cv-menu': CovalentMenuBase;
  }
}

@customElement('cv-menu')
export class CovalentMenuBase extends MenuBase {
  static override styles = [styles];
}
