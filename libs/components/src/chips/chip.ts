import { css, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ChipBase } from './chip-base';
import styles from './chip.scss?inline';

/**
 * Action ribbon
 *
 * @slot - This element has a slot
 */
@customElement('cv-chip')
export class CovalentChip extends ChipBase {
  static override styles = [
    css`
      ${unsafeCSS(styles)}
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'cv-chip': CovalentChip;
  }
}
