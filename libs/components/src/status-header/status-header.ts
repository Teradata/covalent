import { css, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { StatusHeaderBase } from './status-header-base';
import styles from './status-header.scss?inline';

/**
 * Status header
 *
 * @slot - This element has a slot
 */
@customElement('td-status-header')
export class CovalentStatusHeader extends StatusHeaderBase {
  static override styles = [
    css`
      ${unsafeCSS(styles)}
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'td-status-header': CovalentStatusHeader;
  }
}
