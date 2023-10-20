import { css, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { SelectBase } from '@material/mwc-select/mwc-select-base';
import { styles as baseStyles } from '@material/mwc-select/mwc-select.css';
import styles from './select.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'cv-select': CovalentSelect;
  }
}

@customElement('cv-select')
export default class CovalentSelect extends SelectBase {
  static override styles = [css`${unsafeCSS(styles)}`, baseStyles];
}