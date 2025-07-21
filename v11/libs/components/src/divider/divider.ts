import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './divider.component.scss?inline';

/**
 * CovalentDivider
 *
 * A divider component that creates a visual separation between content.
 * Can be used horizontally or vertically with different variants.
 */
@customElement('cv-divider')
export class CovalentDivider extends LitElement {
  static properties = {
    direction: { type: String },
    size: { type: String },
    flush: { type: Boolean },
  };

  static override styles = [
    css`
      ${unsafeCSS(styles)}
    `,
  ];

  direction!: string;
  size!: string;
  flush!: boolean;

  constructor() {
    super();
    this.direction = 'horizontal';
    this.size = 'full';
    this.flush = false;
  }

  render() {
    return html`
      <div
        class="cv-divider ${this.direction} ${this.size} ${this.flush
          ? 'flush'
          : ''}"
      ></div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cv-divider': CovalentDivider;
  }
}

export default CovalentDivider;
