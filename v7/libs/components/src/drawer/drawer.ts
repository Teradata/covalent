import { css, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { DrawerBase } from '@material/mwc-drawer/mwc-drawer-base';
import { styles as baseStyles } from '@material/mwc-drawer/mwc-drawer.css';
import styles from './drawer.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'cv-drawer': CovalentDrawer;
  }
}

@customElement('cv-drawer')
export class CovalentDrawer extends DrawerBase {
  static override styles = [baseStyles, css`${unsafeCSS(styles)}`];
}

export default CovalentDrawer
