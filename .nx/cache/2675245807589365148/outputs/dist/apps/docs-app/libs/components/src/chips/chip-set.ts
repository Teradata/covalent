import { css, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ChipSetBase } from './chip-set-base';
import styles from './chip-set.scss?inline';

/**
 * Action ribbon
 *
 * @slot - This element has a slot
 */
@customElement('cv-chip-set')
export class CovalentChipSet extends ChipSetBase {
  static override styles = [
    css`
      ${unsafeCSS(styles)}
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'cv-chip-set': CovalentChipSet;
  }
}

export default CovalentChipSet;
