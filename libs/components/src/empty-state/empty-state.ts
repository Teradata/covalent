import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './empty-state.scss';
import '../icon/icon';

declare global {
  interface HTMLElementTagNameMap {
    'td-empty-state': CovalentEmptyStateBase;
  }
}

@customElement('td-empty-state')
export class CovalentEmptyStateBase extends LitElement {
  static override styles = [styles];

  @property({ type: String }) headline = '';
  @property({ type: String }) subtitle = '';
  @property({ type: String }) icon = '';
  @property({ type: Boolean }) card = false;
  override render() {
    return html`
      <div
        class="content mdc-typography"
        style=${this.card ? 'width: 632px; height: 300px;' : ''}
      >
        ${this.icon
          ? html` <div class="icon-background">
              <td-icon class="covalent-icon">${this.icon}</td-icon>
            </div>`
          : ''}
        ${this.headline
          ? html`<h6 class="mdc-typography--headline6">${this.headline}</h6>`
          : ''}
        ${this.subtitle
          ? html` <p
              key="{line}"
              class="mdc-typography--caption"
              style=${this.headline ? '' : 'margin-top:16px;'}
            >
              ${this.subtitle.split(/\n/).map((line) => {
                return html`${line}<br />`;
              })}
            </p>`
          : ''}
        <div
          class="buttonContainer"
          style=${this.subtitle ? '' : 'margin-top:0;'}
        >
          <slot name="buttons"></slot>
        </div>
      </div>
    `;
  }
}
