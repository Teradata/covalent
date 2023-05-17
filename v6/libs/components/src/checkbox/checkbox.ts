import { css, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { CheckboxBase } from '@material/mwc-checkbox/mwc-checkbox-base';
import { styles as baseStyles } from '@material/mwc-checkbox/mwc-checkbox.css';
import styles from './checkbox.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'cv-checkbox': CovalentCheckboxBase;
  }
}

@customElement('cv-checkbox')
export class CovalentCheckboxBase extends CheckboxBase {
  static override styles = [baseStyles, css`${unsafeCSS(styles)}`];
}
