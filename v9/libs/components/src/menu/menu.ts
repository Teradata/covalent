import { MenuBase } from '@material/mwc-menu/mwc-menu-base';
import { styles as baseStyles } from '@material/mwc-menu/mwc-menu.css';
import styles from './menu.scss?inline';
import { customElement } from 'lit/decorators.js';
import { css, unsafeCSS } from 'lit';

declare global {
  interface HTMLElementTagNameMap {
    'cv-menu': CovalentMenu;
  }
}

@customElement('cv-menu')
export class CovalentMenu extends MenuBase {
  static override styles = [
    baseStyles,
    css`
      ${unsafeCSS(styles)}
    `,
  ];
}

export default CovalentMenu;
