import { css, html, TemplateResult, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { TextFieldBase } from '@material/mwc-textfield/mwc-textfield-base';
import { styles as baseTextFieldStyles } from '@material/mwc-textfield/mwc-textfield.css';
import '../circular-progress/circular-progress';
import styles from './textfield.scss?inline';
import { classMap } from 'lit/directives/class-map.js';

declare global {
  interface HTMLElementTagNameMap {
    'cv-textfield': CovalentTextField;
  }
}

@customElement('cv-textfield')
export class CovalentTextField extends TextFieldBase {
  static override styles = [
    baseTextFieldStyles,
    css`
      ${unsafeCSS(styles)}
    `,
  ];

  /**
   * Displays a loading spinner within the text input field.
   */
  @property({ type: Boolean, reflect: true })
  loading = false;

  /**
   * Displays a loading spinner within the text input field.
   */
  @property({ type: Number })
  loaderDensity = -6;

  override outlined = true;

  /**
   * This method is identical to the base implementation,
   * with the only difference being the addition of a class to handle the loading state.
   */
  override render() {
    const shouldRenderCharCounter = this.charCounter && this.maxLength !== -1;
    const shouldRenderHelperText =
      !!this.helper || !!this.validationMessage || shouldRenderCharCounter;
    /** @classMap */
    const classes = {
      'mdc-text-field--disabled': this.disabled,
      'mdc-text-field--no-label': !this.label,
      'mdc-text-field--filled': !this.outlined,
      'mdc-text-field--outlined': this.outlined,
      'mdc-text-field--with-leading-icon': this.icon,
      'mdc-text-field--with-trailing-icon': this.iconTrailing,
      'mdc-text-field--end-aligned': this.endAligned,
      'cv-text-field--loading': this.loading,
    };
    return html`
      <label class="mdc-text-field ${classMap(classes)}">
        ${this.renderRipple()}
        ${this.outlined ? this.renderOutline() : this.renderLabel()}
        ${this.renderLeadingIcon()} ${this.renderPrefix()}
        ${this.renderInput(shouldRenderHelperText)} ${this.renderSuffix()}
        ${this.renderTrailingIcon()} ${this.renderLineRipple()}
      </label>
      ${this.renderHelperText(shouldRenderHelperText, shouldRenderCharCounter)}
    `;
  }

  protected override renderTrailingIcon(): TemplateResult | string {
    if (this.loading) {
      return html`<cv-circular-progress
        class="text-field-loading"
        indeterminate
        progress="0"
        density="${this.loaderDensity}"
      >
      </cv-circular-progress>`;
    }
    return this.iconTrailing ? this.renderIcon(this.iconTrailing, true) : '';
  }
}

export default CovalentTextField;
