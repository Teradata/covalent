import { html, LitElement } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { property } from 'lit/decorators.js';

export class StatusHeaderBase extends LitElement {
  @property() state: 'active' | 'positive' | 'caution' | 'error' | 'neutral' =
    'neutral';
  @property({ type: String }) statusText = '';
  @property({ type: String }) statusHelper = '';
  @property({ type: String }) titleText = '';

  protected override render() {
    const classes = {
      active: this.state === 'active',
      caution: this.state === 'caution',
      error: this.state === 'error',
      positive: this.state === 'positive',
    };

    return html`
      <div class="status-header ${classMap(classes)}">
        <div class="status-header-title">
          <div class="status-header-title-text">${this.titleText}</div>
          <slot name="status-header-actions"></slot>
        </div>
        <div class="status-header-status">
          <div class="status-header-icon">
            <slot name="status-header-icon"></slot>
          </div>
          <div class="status-header-text-block">
            <div class="status-header-text">${this.statusText}</div>
            <div class="status-header-helper">${this.statusHelper}</div>
          </div>
          <div class="status-header-slot">
            <slot name="status-header-text"></slot>
          </div>
        </div>
        <slot></slot>
      </div>
    `;
  }
}
