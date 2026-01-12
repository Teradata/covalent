import { Icon } from '@material/mwc-icon/mwc-icon';
import { styles as IconStyles } from '@material/mwc-icon/mwc-icon-host.css';
import { customElement, property } from 'lit/decorators.js';
import { unsafeCSS } from 'lit';
import styles from './icon.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'cv-icon': CovalentIcon;
  }
}

@customElement('cv-icon')
export class CovalentIcon extends Icon {
  @property({ type: Boolean, reflect: true })
  filled = false;

  static override styles = [IconStyles, unsafeCSS(styles)];
}

export default CovalentIcon;
