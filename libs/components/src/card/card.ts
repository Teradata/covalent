import { css, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { CardBase } from './card-base';
import styles from './card.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'td-card': CovalentCardBase;
  }
}

@customElement('td-card')
export class CovalentCardBase extends CardBase {
  static override styles = [
    css`
      ${unsafeCSS(styles)}
    `,
  ];
}
