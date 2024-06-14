import { css, html, PropertyValues, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { IconButtonToggle } from '@material/mwc-icon-button-toggle/mwc-icon-button-toggle';
import styles from './icon-button-toggle.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'cv-icon-button-toggle': CovalentIconButtonToggle;
  }
}

@customElement('cv-icon-button-toggle')
export class CovalentIconButtonToggle extends IconButtonToggle {
  /**
   * Angular doesn't allow properties that begin with 'on' to be set due to security reasons.
   * This is an alias for the 'on' property in mwc-icon-button-toggle, which can be used to toggle the button on/off.
   */
  @property({ type: Boolean, reflect: true })
  toggledOn = false;

  static override styles = [
    ...IconButtonToggle.styles,
    css`
      ${unsafeCSS(styles)}
    `,
  ];

  protected update(changedProperties: PropertyValues) {
    if (changedProperties.has('toggledOn') && this.toggledOn !== this.on) {
      this.on = this.toggledOn;
    }
    if (changedProperties.has('on') && this.toggledOn !== this.on) {
      this.toggledOn = this.on;
    }
    super.update(changedProperties);
  }

  protected renderRipple() {
    return this.shouldRenderRipple
      ? html` <mwc-ripple
          .disabled="${this.disabled}"
          .activated="${this.toggledOn}"
          unbounded
        >
        </mwc-ripple>`
      : '';
  }
}

export default CovalentIconButtonToggle;
