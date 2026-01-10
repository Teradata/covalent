import { Icon } from '@material/mwc-icon/mwc-icon';
import { styles } from '@material/mwc-icon/mwc-icon-host.css';
import { css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

declare global {
  interface HTMLElementTagNameMap {
    'cv-icon': CovalentIcon;
  }
}

@customElement('cv-icon')
export class CovalentIcon extends Icon {
  @property({ type: Boolean, reflect: true })
  filled = false;

  static override styles = [
    styles,
    css`
      :host([filled]) {
        font-variation-settings: 'FILL' 1;
      }
    `,
  ];
}

export default CovalentIcon;
