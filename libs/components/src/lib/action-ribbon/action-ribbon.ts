import { customElement } from 'lit/decorators.js';
import { ActionRibbonBase } from './action-ribbon-base';
import styles from './action-ribbon.scss';

/**
  * Action ribbon
  *
  * @slot - This element has a slot
  */
@customElement('td-action-ribbon')
export class CovalentActionRibbon extends ActionRibbonBase {
  static override styles = [styles];
}

declare global {
   interface HTMLElementTagNameMap {
    'td-action-ribbon': CovalentActionRibbon;
   }
}