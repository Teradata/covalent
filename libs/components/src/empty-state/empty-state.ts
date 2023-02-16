import { css, unsafeCSS } from 'lit';
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './empty-state.scss?inline';
import '../icon/icon';

declare global {
  interface HTMLElementTagNameMap {
    'cv-empty-state': CovalentEmptyStateBase;
  }
}

@customElement('cv-empty-state')
export class CovalentEmptyStateBase extends LitElement {
  static override styles = [
    css`
      ${unsafeCSS(styles)}
    `,
  ];

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
              <cv-icon class="covalent-icon">${this.icon}</cv-icon>
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
