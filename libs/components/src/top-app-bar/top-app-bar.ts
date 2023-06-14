import { css, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { TopAppBarBase } from '@material/mwc-top-app-bar/mwc-top-app-bar-base';
import { styles } from '@material/mwc-top-app-bar/mwc-top-app-bar.css';
import baseStyles from './top-app-bar.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'cv-top-app-bar': CovalentTopAppBar;
  }
}

@customElement('cv-top-app-bar')
export class CovalentTopAppBar extends TopAppBarBase {
  static override styles = [
    styles,
    css`
      ${unsafeCSS(baseStyles)}
    `,
  ];
}

export default CovalentTopAppBar;
