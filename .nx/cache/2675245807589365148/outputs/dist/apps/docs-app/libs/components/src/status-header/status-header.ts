import { css, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { StatusHeaderBase } from './status-header-base';
import styles from './status-header.scss?inline';

/**
 * Status header
 *
 * @slot - This element has a slot
 */
@customElement('cv-status-header')
export class CovalentStatusHeader extends StatusHeaderBase {
  static override styles = [
    css`
      ${unsafeCSS(styles)}
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'cv-status-header': CovalentStatusHeader;
  }
}

export default CovalentStatusHeader;
