import { customElement } from 'lit/decorators.js';
import { ChipBase } from './chip-base';
import styles from './chip.scss';

/**
  * Action ribbon
  *
  * @slot - This element has a slot
  */
@customElement('td-chip')
export class CovalentChip extends ChipBase {
  static override styles = [styles];
}

declare global {
   interface HTMLElementTagNameMap {
    'td-chip': CovalentChip;
   }
}