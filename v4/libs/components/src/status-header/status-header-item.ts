import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './status-header-item.scss';

declare global {
  interface HTMLElementTagNameMap {
    'td-status-header-item': CovalentStatusHeaderItem;
  }
}

/**
 * Status header item
 *
 * @slot - This element has a slot
 */
@customElement('td-status-header-item')
export class CovalentStatusHeaderItem extends LitElement {
  static override styles = [styles];

  @property()
  label!: string;

  render() {
    return html`<span>${this.label}</span> <slot></slot>`;
  }
}
