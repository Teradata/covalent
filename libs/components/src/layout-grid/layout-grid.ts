import { LitElement, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './layout-grid.scss';

declare global {
  interface HTMLElementTagNameMap {
    'cv-layout-grid': CovalentLayoutGrid;
  }
}

@customElement('cv-layout-grid')
export class CovalentLayoutGrid extends LitElement {
  static styles = unsafeCSS(styles);

  render() {
    return html`<div class="mdc-layout-grid">
      <div class="mdc-layout-grid__inner">
        <slot></slot>
      </div>
    </div>`;
  }
}

export default CovalentLayoutGrid;
