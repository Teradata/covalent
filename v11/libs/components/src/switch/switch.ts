import { css, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { SwitchBase } from '@material/mwc-switch/mwc-switch-base';
import { styles as baseStyles } from '@material/mwc-switch/styles.css';
import styles from './switch.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'cv-switch': CovalentSwitch;
  }
}

@customElement('cv-switch')
export class CovalentSwitch extends SwitchBase {
  static override styles = [baseStyles, css`${unsafeCSS(styles)}`];
}

export default CovalentSwitch;
