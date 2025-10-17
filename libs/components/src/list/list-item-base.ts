import { ListItemBase } from '@material/mwc-list/mwc-list-item-base';
import { html } from 'lit';
import { property } from 'lit/decorators';
import { classMap } from 'lit/directives/class-map';

export class CovalentListItemBase extends ListItemBase {
  @property({ type: Boolean, reflect: true })
  threeline = false;

  override render() {
    if (this.threeline) {
      this.twoline = true;
    }

    const classes = {
      'mdc-list-item--disabled': this.disabled,
      'mdc-list-item--selected': this.selected,
      'mdc-list-item--activated': this.activated,
    };

    // The standard text block for 1 or 2 lines.
    const text = html`
      <span class="mdc-list-item__text">
        <span class="mdc-list-item__primary-text"><slot></slot></span>
        <span class="mdc-list-item__secondary-text"
          ><slot name="secondary"></slot
        ></span>
      </span>
    `;

    return html`
      <li
        class="mdc-list-item ${classMap(classes)}"
        aria-disabled=${this.disabled}
        aria-selected=${this.selected}
        tabindex=${this.tabindex}
      >
        <span class="mdc-list-item__ripple"></span>
        <span class="mdc-list-item__graphic">
          <slot name="graphic"></slot>
        </span>
        ${text}
        <!-- The third line is now a sibling to the main text block -->
        <slot name="threeline"></slot>
        <span class="mdc-list-item__meta">
          <slot name="meta"></slot>
        </span>
      </li>
    `;
  }
}
