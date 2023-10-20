import { css, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { AlertBase } from './alert-base';
import styles from './alert.scss?inline';

/**
 * Action ribbon
 *
 * @slot - This element has a slot
 */
@customElement('cv-alert')
export default class CovalentAlert extends AlertBase {
  static override styles = [
    css`
      ${unsafeCSS(styles)}
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'cv-alert': CovalentAlert;
  }
}