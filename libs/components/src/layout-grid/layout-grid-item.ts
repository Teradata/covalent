import { LitElement, css, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './layout-grid-item.scss';

declare global {
  interface HTMLElementTagNameMap {
    'cv-layout-grid-item': CovalentLayoutGridItem;
  }
}

@customElement('cv-layout-grid-item')
export class CovalentLayoutGridItem extends LitElement {
  static override styles = [
    css`
      ${unsafeCSS(styles)}
    `,
  ];

  @property({ type: Number }) span = 4;

  render() {
    return html`
      <div
        class="mdc-layout-grid__cell mdc-layout-grid__cell--span-${this.span}"
      >
        <slot></slot>
      </div>
    `;
  }
}

export default CovalentLayoutGridItem;
