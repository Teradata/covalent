import { css, html, TemplateResult, unsafeCSS } from 'lit';
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

  protected override renderRipple(): TemplateResult | string {
    return this.shouldRenderRipple
      ? html`<mwc-ripple
          unbounded
          accent
          .internalUseStateLayerCustomProperties="${true}"
          .disabled="${this.disabled}"
        ></mwc-ripple>`
      : '';
  }
}

export default CovalentRadio;
