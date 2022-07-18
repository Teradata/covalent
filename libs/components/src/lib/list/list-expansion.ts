import { ListBase } from '@material/mwc-list/mwc-list-base';
import { observer } from '@material/mwc-base/observer';
import { styles as listBaseStyles } from '@material/mwc-list/mwc-list.css';
import styles from './list-expansion.scss';
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit/directives/class-map.js';


declare global {
    interface HTMLElementTagNameMap {
        'td-expansion-list': CovalentExpansionList;
    }
}

@customElement('td-expansion-list')
export class CovalentExpansionList extends ListBase {

  static override styles = [styles, listBaseStyles];

  @observer(function(this: CovalentExpansionList, value: boolean) {
    if (value) {
      //this.mdcFoundation.open();
    } else {
      //this.mdcFoundation.close();
    }
  })
  @property({type: Boolean, reflect: true})
  open = false;
  
  constructor() {
    super();
  }

  private _toggleOpen() {

    this.open = !this.open;
  }
  

  override render() {
    const role = this.innerRole === null ? undefined : this.innerRole;
    const ariaLabel =
        this.innerAriaLabel === null ? undefined : this.innerAriaLabel;
    const tabindex = this.rootTabbable ? '0' : '-1';
    const classes = {
      'td-expansion-list--open': this.open,
    };

    return html`
      <!-- @ts-ignore -->
      <slot name="expansionHeader" @click=${this._toggleOpen}></slot>
      <ul
          tabindex=${tabindex}
          role="${ifDefined(role)}"
          aria-label="${ifDefined(ariaLabel)}"
          class="mdc-deprecated-list ${classMap(classes)}"
          @keydown=${this.onKeydown}
          @focusin=${this.onFocusIn}
          @focusout=${this.onFocusOut}
          @request-selected=${this.onRequestSelected}
          @list-item-rendered=${this.onListItemConnected}>
        <slot></slot>
        ${this.renderPlaceholder()}
      </ul>
    `;
  }
}