import { css, html, LitElement, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './status-header-item.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'cv-status-header-item': CovalentStatusHeaderItem;
  }
}

/**
 * Status header item
 *
 * @slot - This element has a slot
 */
@customElement('cv-status-header-item')
export class CovalentStatusHeaderItem extends LitElement {
  static override styles = [
    css`
      ${unsafeCSS(styles)}
    `,
  ];

  @property()
  label!: string;

  render() {
    return html`<span>${this.label}</span> <slot></slot>`;
  }
}

export default CovalentStatusHeaderItem;
