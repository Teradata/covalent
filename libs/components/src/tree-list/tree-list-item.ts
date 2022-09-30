import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import styles from './tree-list-item.scss';

declare global {
  interface HTMLElementTagNameMap {
    'td-tree-list-item': CovalentTreeListItem;
  }
}

@customElement('td-tree-list-item')
export class CovalentTreeListItem extends LitElement {
  static override styles = [styles];
  // Check if a list item is open.
  @property({ type: Boolean }) isOpen = false;
  // Optional icon for each list item.
  @property({ type: String }) icon = '';
  // Indicates which nest level a list item is at.
  @property({ type: Number }) indentLevel = 0;
  // How much left padding (px) to add for nested elements.
  @property({ type: Number }) indentMultiple = 16;
  override render() {
    // Class map for showing/hiding an item's content.
    const classes = {
      hidden: !this.isOpen,
      visible: this.isOpen,
    };
    // Class map for animating the arrows.
    const animation = {
      open: this.isOpen,
      close: !this.isOpen,
    };
    const arrowIcon = 'arrow_right';
    const icon = html`<td-icon>${this.icon}</td-icon>`;
    const arrow = html`<td-icon class="${classMap(animation)} arrowIcon"
      >${arrowIcon}</td-icon
    >`;

    // The nest slot should only take td-tree-list-item components. Otherwise use default value and display "No results".
    return html`
      <div
        class="itemContent mdc-ripple-surface"
        @click="${this._handleClick}"
        style="--indent:${this.indentLevel * this.indentMultiple + 8}px"
      >
        <div class="mainContent">
          ${arrow} ${icon}
          <slot name="label"></slot>
        </div>
        <slot name="extraContent"></slot>
      </div>
      <slot name="nest" class="${classMap(classes)}">
        <div
          class="endOfNest"
          style="--indent:${this.indentLevel * this.indentMultiple +
          this.indentMultiple}px"
        >
          No results
        </div>
      </slot>
    `;
  }
  private _handleClick() {
    // Toggles the dropdown for a list item.
    this.isOpen = !this.isOpen;

    // Create and emit the select event; the tree-list component is listening for this.
    const event = new CustomEvent('select', {
      detail: {
        message: `Emitting an event from ${this}`,
      },
      // bubbles and composed are required in order to allow custom event to pass through shadow DOM boundary to td-tree-list.
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }
}
