import { css, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { TabBase } from '@material/mwc-tab/mwc-tab-base';
import { styles as baseStyles } from '@material/mwc-tab/mwc-tab.css';
import styles from './tab.scss?inline'

declare global {
  interface HTMLElementTagNameMap {
    'cv-tab': CovalentTab;
  }
}

@customElement('cv-tab')
export default class CovalentTab extends TabBase {
  static override styles = [baseStyles, css`${unsafeCSS(styles)}`];
}
