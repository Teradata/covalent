import { ListBase } from '@material/mwc-list/mwc-list-base';
import { observer } from '@material/mwc-base/observer';
import { styles as listBaseStyles } from '@material/mwc-list/mwc-list.css';
import styles from './list-expansion.scss';
import { html, nothing } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit/directives/class-map.js';
import { CovalentMenuBase } from '../menu/menu';

declare global {
  interface HTMLElementTagNameMap {
    'td-expansion-list': CovalentExpansionList;
  }
}

@customElement('td-expansion-list')
export class CovalentExpansionList extends ListBase {
  static override styles = [styles, listBaseStyles];

  @observer(function (this: CovalentExpansionList, value: boolean) {
    if (value) {
      //this.mdcFoundation.open();
    } else {
      //this.mdcFoundation.close();
    }
  })
  @property({ type: Boolean, reflect: true })
  open = false;

  @property({ type: Boolean, reflect: true })
  navOpen = false;

  @query('td-menu')
  menuEl!: CovalentMenuBase;

  @query('.expansion-header')
  expansionHeader!: HTMLElement;

  constructor() {
    super();
  }

  private _toggleOpen() {
    this.open = !this.open;

    if (!this.navOpen) {
      this.menuEl.anchor = this.expansionHeader;
      this.menuEl.open = !this.menuEl.open;
    }
  }

  override render() {
    return html`
      <div class="expansion-header">
        <slot name="expansionHeader" @click=${this._toggleOpen}></slot>
      </div>
      ${this.navOpen ? this.renderList() : nothing} ${this.renderMenu()}
    `;
  }

  renderList() {
    const role = this.innerRole === null ? undefined : this.innerRole;
    const ariaLabel =
      this.innerAriaLabel === null ? undefined : this.innerAriaLabel;
    const tabindex = this.rootTabbable ? '0' : '-1';
    const classes = {
      'td-expansion-list--open': this.open,
    };
    return html`
      <ul
        tabindex=${tabindex}
        role="${ifDefined(role)}"
        aria-label="${ifDefined(ariaLabel)}"
        class="mdc-deprecated-list ${classMap(classes)}"
        @keydown=${this.onKeydown}
        @focusin=${this.onFocusIn}
        @focusout=${this.onFocusOut}
        @request-selected=${this.onRequestSelected}
        @list-item-rendered=${this.onListItemConnected}
      >
        <slot></slot>
        ${this.renderPlaceholder()}
      </ul>
    `;
  }

  renderMenu() {
    return html`
      <td-menu corner="TOP_END" absolute>
        <slot></slot>
        ${this.renderPlaceholder()}
      </td-menu>
    `;
  }
}
