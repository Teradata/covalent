import { RadioListItemBase } from '@material/mwc-list/mwc-radio-list-item-base';
import { styles as controlStyle } from '@material/mwc-list/mwc-control-list-item.css';
import { styles } from '@material/mwc-list/mwc-list-item.css';
import { customElement } from 'lit/decorators.js';

declare global {
  interface HTMLElementTagNameMap {
    'cv-radio-list-item': CovalentRadioListItemBase;
  }
}

@customElement('cv-radio-list-item')
export class CovalentRadioListItemBase extends RadioListItemBase {
  static override styles = [styles, controlStyle];
}
