import { css, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ActionRibbonBase } from './action-ribbon-base';
import styles from './action-ribbon.scss?inline';

/**
 * Action ribbon
 *
 * @slot - This element has a slot
 */
@customElement('cv-action-ribbon')
export class CovalentActionRibbon extends ActionRibbonBase {
  static override styles = [
    css`
      ${unsafeCSS(styles)}
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'cv-action-ribbon': CovalentActionRibbon;
  }
}
