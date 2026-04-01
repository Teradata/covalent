import { css, html, LitElement, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './card-header.scss?inline';

/**
 * Card header
 *
 * @slot context - Context content area (flexible)
 * @slot actions - Action items area
 */
@customElement('cv-card-header')
export class CovalentCardHeader extends LitElement {
  static override styles = [
    css`
      ${unsafeCSS(styles)}
    `,
  ];

  /**
   * Adds a divider line below the header
   */
  @property({ type: Boolean }) divider = false;

  override render() {
    return html`
      <div class="cv-card-header">
        <div class="cv-card-header__context">
          <slot name="leading"></slot>
        </div>
        <div class="cv-card-header__actions">
          <slot name="trailing"></slot>
        </div>
      </div>
      ${this.divider ? html`<div class="cv-card-header__divider"></div>` : ''}
    `;
  }
}

export default CovalentCardHeader;
