import { IconButtonToggleBase } from '@material/mwc-icon-button-toggle/mwc-icon-button-toggle-base';
import { styles } from '@material/mwc-icon-button/mwc-icon-button.css';
import { customElement } from 'lit/decorators.js';

declare global {
  interface HTMLElementTagNameMap {
    'td-icon-button-toggle': CovalentIconButtonToggleBase;
  }
}

@customElement('td-icon-button-toggle')
export class CovalentIconButtonToggleBase extends IconButtonToggleBase {
  static override styles = [styles];
}
