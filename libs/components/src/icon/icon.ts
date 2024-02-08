import { css, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Icon } from '@material/mwc-icon/mwc-icon';
import { styles as baseStyles } from '@material/mwc-icon/mwc-icon-host.css';
import styles from './icon.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'cv-icon': CovalentIcon;
  }
}

@customElement('cv-icon')
export class CovalentIcon extends Icon {
  static override styles = [
    baseStyles,
    css`
      ${unsafeCSS(styles)}
    `,
  ];

  @property({ type: Boolean, reflect: true })
  covalent = false;
}

export default CovalentIcon;
