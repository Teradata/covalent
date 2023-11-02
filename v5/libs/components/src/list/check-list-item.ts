import { CheckListItemBase } from '@material/mwc-list/mwc-check-list-item-base';
import { styles as controlStyle } from '@material/mwc-list/mwc-control-list-item.css';
import { styles } from '@material/mwc-list/mwc-list-item.css';
import { customElement } from 'lit/decorators.js';

declare global {
  interface HTMLElementTagNameMap {
    'cv-check-list-item': CovalentCheckListItemBase;
  }
}

@customElement('cv-check-list-item')
export class CovalentCheckListItemBase extends CheckListItemBase {
  static override styles = [styles, controlStyle];
}
