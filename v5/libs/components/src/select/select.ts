import { css, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { SelectBase } from '@material/mwc-select/mwc-select-base';
import { styles as baseStyles } from '@material/mwc-select/mwc-select.css';
import styles from './select.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'cv-select': CovalentSelectBase;
  }
}

@customElement('cv-select')
export class CovalentSelectBase extends SelectBase {
  static override styles = [css`${unsafeCSS(styles)}`, baseStyles];
}
