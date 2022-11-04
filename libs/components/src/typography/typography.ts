import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './typography.scss';

declare global {
  interface HTMLElementTagNameMap {
    'td-typography': CovalentTypography;
  }
}

@customElement('td-typography')
export class CovalentTypography extends LitElement {
  static override styles = [styles];

  @property()
  scale = 'body1';

  override render() {
    return html`<slot class="mdc-typography--${this.scale}"></slot>`;
  }
}
