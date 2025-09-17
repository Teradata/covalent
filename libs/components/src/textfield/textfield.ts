import { css, html, TemplateResult, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { TextFieldBase } from '@material/mwc-textfield/mwc-textfield-base';
import { styles as baseTextFieldStyles } from '@material/mwc-textfield/mwc-textfield.css';
import '../circular-progress/circular-progress';
import styles from './textfield.scss?inline';

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
