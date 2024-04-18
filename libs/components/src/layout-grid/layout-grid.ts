import { LitElement, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import styleText from '@material/layout-grid/dist/mdc.layout-grid.css?inline';

@customElement('cv-layout-grid')
export class CovalentLayoutGrid extends LitElement {
  static styles = unsafeCSS([styleText]);

  /*  createRenderRoot() {
    return this;
  }
 */
  render() {
    return html`
      <div class="mdc-layout-grid">
        <div class="mdc-layout-grid__inner">
          <slot></slot>
        </div>
      </div>
    `;
  }
}
