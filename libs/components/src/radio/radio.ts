import { css, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { RadioBase } from '@material/mwc-radio/mwc-radio-base';
import { styles as baseStyles } from '@material/mwc-radio/mwc-radio.css';
import styles from './radio.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'cv-radio': CovalentRadio;
  }
}

@customElement('cv-radio')
export class CovalentRadio extends RadioBase {
  static override styles = [
    baseStyles,
    css`
      ${unsafeCSS(styles)}
    `,
  ];

  protected override useStateLayerCustomProperties = true;
}

export default CovalentRadio;
