import { css, html, TemplateResult, unsafeCSS } from 'lit';
import { RadioBase } from '@material/mwc-radio/mwc-radio-base';
import { styles as radioStyle } from '@material/mwc-radio/mwc-radio.css';
import { customElement, property } from 'lit/decorators.js';
import styles from './icon-radio.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'cv-icon-radio-item': CovalentIconRadioToggle;
  }
}

@customElement('cv-radio-icon')
export class CovalentIconRadioToggle extends RadioBase {
  static override styles = [
    radioStyle,
    css`
      ${unsafeCSS(styles)}
    `,
  ];

  @property({ type: Boolean }) iconOnly = false;

  // Override the renderRipple method to minimally introduce the icon & text slots without overwritting the render method
  protected override renderRipple(): TemplateResult | string {
    const iconSlot = html`<slot name="icon"></slot>`;
    const textSlot = this.iconOnly
      ? ''
      : html`<div><slot name="text"></slot></div>`;
    const ripple = this.shouldRenderRipple
      ? html`<mwc-ripple
          accent
          .internalUseStateLayerCustomProperties="${this
            .useStateLayerCustomProperties}"
          .disabled="${this.disabled}"
        ></mwc-ripple>`
      : '';

    return html`${iconSlot}${textSlot}${ripple}`;
  }
}

export default CovalentIconRadioToggle;
