import { html, nothing } from 'lit';
import {
  customElement,
  property,
  queryAssignedElements,
} from 'lit/decorators.js';
import { styles as listBaseStyles } from '@material/mwc-list/mwc-list.css';
import { CovalentListBase } from './list';
import styles from './list-expansion.scss';
import { CovalentListItemBase } from './list-item';

declare global {
  interface HTMLElementTagNameMap {
    'td-expansion-list': CovalentExpansionList;
  }
}

@customElement('td-expansion-list')
export class CovalentExpansionList extends CovalentListBase {
  static override styles = [listBaseStyles, styles];
  static override shadowRootOptions: ShadowRootInit = {
    mode: 'open',
    delegatesFocus: true,
  };

  @property({ type: Boolean, reflect: true })
  open = false;

  @property({ type: Boolean, reflect: true })
  navOpen = false;

  @queryAssignedElements({ slot: 'expansionHeader' })
  expansionHeader!: CovalentListItemBase[];

  constructor() {
    super();
  }

  private _toggleOpen() {
    this.open = !this.open;

    this.expansionHeader.forEach((el) => {
      el.activated = this.open;
      el.selected = this.open;
    });
  }

  override render() {
    return html`
      <slot name="expansionHeader" @click=${this._toggleOpen}></slot>
      ${this.navOpen ? super.render() : nothing}
    `;
  }
}
