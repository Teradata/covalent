import { css, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { IconButtonToggle } from '@material/mwc-icon-button-toggle/mwc-icon-button-toggle';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
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

  protected override handleClick(): void {
    this.toggledOn = !this.toggledOn;
    this.dispatchEvent(
      new CustomEvent('icon-button-toggle-change', {
        detail: { isOn: this.toggledOn },
        bubbles: true,
      })
    );
  }

  protected override renderRipple() {
    return this.shouldRenderRipple
      ? html` <mwc-ripple
          .disabled="${this.disabled}"
          .activated="${this.toggledOn}"
          unbounded
        >
        </mwc-ripple>`
      : '';
  }

  protected override render() {
    /** @classMap */
    const classes = {
      'mdc-icon-button--on': this.toggledOn,
    };
    const hasToggledAriaLabel =
      this.ariaLabelOn !== undefined && this.ariaLabelOff !== undefined;
    const ariaPressedValue = hasToggledAriaLabel ? undefined : this.toggledOn;
    const ariaLabelValue = hasToggledAriaLabel
      ? this.toggledOn
        ? this.ariaLabelOn
        : this.ariaLabelOff
      : this.ariaLabel;
    return html`<button
      class="mdc-icon-button mdc-icon-button--display-flex ${classMap(classes)}"
      aria-pressed="${ifDefined(ariaPressedValue)}"
      aria-label="${ifDefined(ariaLabelValue)}"
      @click="${this.handleClick}"
      ?disabled="${this.disabled}"
      @focus="${this.handleRippleFocus}"
      @blur="${this.handleRippleBlur}"
      @mousedown="${this.handleRippleMouseDown}"
      @mouseenter="${this.handleRippleMouseEnter}"
      @mouseleave="${this.handleRippleMouseLeave}"
      @touchstart="${this.handleRippleTouchStart}"
      @touchend="${this.handleRippleDeactivate}"
      @touchcancel="${this.handleRippleDeactivate}"
    >
      ${this.renderRipple()}
      <span class="mdc-icon-button__icon"
        ><slot name="offIcon"
          ><i class="material-icons">${this.offIcon}</i></slot
        ></span
      >
      <span class="mdc-icon-button__icon mdc-icon-button__icon--on"
        ><slot name="onIcon"
          ><i class="material-icons">${this.onIcon}</i></slot
        ></span
      >
    </button>`;
  }
}

export default CovalentIconButtonToggle;
