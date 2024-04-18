import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styleText from '@material/layout-grid/dist/mdc.layout-grid.css?inline';

@customElement('cv-layout-grid-item')
export class CovalentLayoutGridItem extends LitElement {
  static styles = unsafeCSS([styleText]);

  @property({ type: Number }) columns = 4;

  /* createRenderRoot() {
      return this;
    } */

  protected render() {
    return html`
      <div
        class="mdc-layout-grid__cell mdc-layout-grid__cell--span--${this
          .columns}"
      >
        <slot></slot>
      </div>
    `;
  }
}
