import { customElement } from 'lit/decorators.js';
import { AlertBase } from './alert-base';
import styles from './alert.scss';

/**
  * Action ribbon
  *
  * @slot - This element has a slot
  */
@customElement('td-alert')
export class CovalentAlert extends AlertBase {
  static override styles = [styles];
}

declare global {
   interface HTMLElementTagNameMap {
    'td-alert': CovalentAlert;
   }
}