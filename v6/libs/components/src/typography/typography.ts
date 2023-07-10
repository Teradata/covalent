import { css, html, LitElement, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './typography.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'cv-typography': CovalentTypography;
  }
}

@customElement('cv-typography')
export class CovalentTypography extends LitElement {
  static override styles = [
    css`
      ${unsafeCSS(styles)}
    `,
  ];

  @property()
  scale = 'body1';

  override render() {
    return html`<slot class="mdc-typography--${this.scale}"></slot>`;
  }
}

export default CovalentTypography;
