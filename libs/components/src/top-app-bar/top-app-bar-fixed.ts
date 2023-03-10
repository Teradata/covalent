import { css, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { TopAppBarFixedBase } from '@material/mwc-top-app-bar-fixed/mwc-top-app-bar-fixed-base';
import { styles } from '@material/mwc-top-app-bar/mwc-top-app-bar.css';
import baseStyles from './top-app-bar.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'cv-top-app-bar-fixed': CovalentTopAppBaraFixedBase;
  }
}

@customElement('cv-top-app-bar-fixed')
export class CovalentTopAppBaraFixedBase extends TopAppBarFixedBase {
  static override styles = [
    styles,
    css`
      ${unsafeCSS(baseStyles)}
    `,
  ];
}
