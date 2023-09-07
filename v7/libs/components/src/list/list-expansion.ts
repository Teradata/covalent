import { css, html, nothing, unsafeCSS } from 'lit';
import {
  customElement,
  property,
  queryAssignedElements,
} from 'lit/decorators.js';
import { styles as listBaseStyles } from '@material/mwc-list/mwc-list.css';
import { CovalentList } from './list';
import styles from './list-expansion.scss?inline';
import CovalentNavRailListItem from './nav-list-item';

declare global {
  interface HTMLElementTagNameMap {
    'cv-expansion-list': CovalentExpansionList;
  }
}

@customElement('cv-expansion-list')
export class CovalentExpansionList extends CovalentList {
  static override styles = [
    css`
      ${unsafeCSS(listBaseStyles)}
    `,
    css`
      ${unsafeCSS(styles)}
    `,
  ];
  static override shadowRootOptions: ShadowRootInit = {
    mode: 'open',
    delegatesFocus: true,
  };

  @property({ type: Boolean, reflect: true })
  open = false;

  @property({ type: Boolean, reflect: true })
  navOpen = false;

  @queryAssignedElements({ slot: 'expansionHeader' })
  expansionHeader!: CovalentNavRailListItem[];

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

  override attributeChangedCallback(name: string, _old: string, value: string) {
    super.attributeChangedCallback(name, _old, value);

    if (name === 'navopen') {
      this.expansionHeader.forEach((el) => {
        if (value === 'true') {
          el.navOpen = !!value;
          el.setAttribute('navopen', value);
        } else {
          el.removeAttribute('navopen');
        }
      });
    }
  }

  override render() {
    return html`
      <slot name="expansionHeader" @click=${this._toggleOpen}></slot>
      ${this.navOpen ? super.render() : nothing}
    `;
  }
}

export default CovalentExpansionList;
