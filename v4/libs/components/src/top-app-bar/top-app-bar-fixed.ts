import { customElement } from 'lit/decorators.js';
import { TopAppBarFixedBase } from '@material/mwc-top-app-bar-fixed/mwc-top-app-bar-fixed-base';
import { styles } from '@material/mwc-top-app-bar/mwc-top-app-bar.css.js';
import baseStyles from './top-app-bar.scss';

declare global {
  interface HTMLElementTagNameMap {
    'td-top-app-bar-fixed': CovalentTopAppBaraFixedBase;
  }
}

@customElement('td-top-app-bar-fixed')
export class CovalentTopAppBaraFixedBase extends TopAppBarFixedBase {
  static override styles = [styles, baseStyles];
}
