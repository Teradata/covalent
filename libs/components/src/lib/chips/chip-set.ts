import { customElement } from 'lit/decorators.js';
import { ChipSetBase } from './chip-set-base';
import styles from './chip-set.scss';

/**
  * Action ribbon
  *
  * @slot - This element has a slot
  */
@customElement('td-chip-set')
export class CovalentChipSet extends ChipSetBase {
  static override styles = [styles];
}

declare global {
   interface HTMLElementTagNameMap {
    'td-chip-set': CovalentChipSet;
   }
}