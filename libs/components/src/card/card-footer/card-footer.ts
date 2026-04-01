import { css, html, LitElement, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './card-footer.scss?inline';

/**
 * Card footer
 *
 * @slot leading - Leading action items area
 * @slot trailing - Trailing content area (flexible)
 */
@customElement('cv-card-footer')
export class CovalentCardFooter extends LitElement {
  static override styles = [
    css`
      ${unsafeCSS(styles)}
    `,
  ];

  /**
   * Adds a divider line above the footer
   */
  @property({ type: Boolean }) divider = false;

  override render() {
    return html`
      ${this.divider ? html`<div class="cv-card-footer__divider"></div>` : ''}
      <div class="cv-card-footer">
        <div class="cv-card-footer__leading">
          <slot name="leading"></slot>
        </div>
        <div class="cv-card-footer__trailing">
          <slot name="trailing"></slot>
        </div>
      </div>
    `;
  }
}

export default CovalentCardFooter;
