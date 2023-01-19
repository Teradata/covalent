import { css, unsafeCSS } from 'lit';
import { FormfieldBase } from '@material/mwc-formfield/mwc-formfield-base';
import { styles as baseStyles } from '@material/mwc-formfield/mwc-formfield.css';
import styles from './formfield.scss?inline';

import { customElement } from 'lit/decorators.js';

declare global {
  interface HTMLElementTagNameMap {
    'td-formfield': CovalentFormfieldBase;
  }
}

@customElement('td-formfield')
export class CovalentFormfieldBase extends FormfieldBase {
  static override styles = [
    css`
      ${unsafeCSS(styles)}
    `,
    baseStyles,
  ];
}
