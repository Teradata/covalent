import { css, html, LitElement, TemplateResult, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import '@material/mwc-ripple';

import { styles as controlStyle } from '@material/mwc-list/mwc-control-list-item.css';
import { styles as listItemStyle } from '@material/mwc-list/mwc-list-item.css';
import covalentStyles from './list-item.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'cv-list-item': CovalentListItem;
  }
}

@customElement('cv-list-item')
export class CovalentListItem extends LitElement {
  @property({ type: Boolean, reflect: true })
  threeline = false;

  @property({ type: Boolean, reflect: true })
  twoline = false;

  @property({ type: Boolean, reflect: true })
  disabled = false;

  @property({ type: Boolean, reflect: true })
  selected = false;

  @property({ type: Boolean, reflect: true })
  activated = false;

  @property({ type: String })
  graphic: 'avatar' | 'icon' | null = null;

  static override styles = [
    css`
      ${unsafeCSS(listItemStyle)}
    `,
    css`
      ${unsafeCSS(controlStyle)}
    `,
    css`
      ${unsafeCSS(covalentStyles)}
    `,
  ];

  render(): TemplateResult {
    const isTwoLine = this.twoline || this.threeline;

    const classes = {
      'mdc-deprecated-list-item--disabled': this.disabled,
      'mdc-deprecated-list-item--selected': this.selected,
      'mdc-deprecated-list-item--activated': this.activated,
      'mdc-deprecated-list-item--two-line': isTwoLine,
      'covalent-list-item--three-line': this.threeline,
    };

    return html`
      <li
        class="mdc-deprecated-list-item ${classMap(classes)}"
        aria-disabled=${this.disabled}
        aria-selected=${this.selected}
        tabindex=${this.selected ? '0' : '-1'}
      >
        <mwc-ripple></mwc-ripple>
        <span class="mdc-deprecated-list-item__graphic">
          <slot name="graphic"></slot>
        </span>
        <span class="mdc-deprecated-list-item__text">
          <span class="mdc-deprecated-list-item__primary-text">
            <slot></slot>
          </span>
          <span class="mdc-deprecated-list-item__secondary-text">
            <slot name="secondary"></slot>
          </span>
          ${this.threeline
            ? html`
                <span class="mdc-deprecated-list-item__secondary-text">
                  <slot name="threeline"></slot>
                </span>
              `
            : ''}
        </span>
        <span class="mdc-deprecated-list-item__meta">
          <slot name="meta"></slot>
        </span>
      </li>
    `;
  }
}

export default CovalentListItem;
