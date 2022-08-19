import { customElement } from 'lit/decorators.js';
import { CardBase } from './card-base';
import styles from './card.scss';

declare global {
  interface HTMLElementTagNameMap {
    'td-card': CovalentCardBase;
  }
}

@customElement('td-card')
export class CovalentCardBase extends CardBase {
  static override styles = [styles];
}
