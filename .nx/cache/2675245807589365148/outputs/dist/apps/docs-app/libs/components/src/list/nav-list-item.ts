import { css, html, nothing, unsafeCSS } from 'lit';
import {
  customElement,
  property,
  queryAssignedElements,
} from 'lit/decorators.js';
import { CovalentListItem } from './list-item';
import { styles as controlStyle } from '@material/mwc-list/mwc-control-list-item.css';
import { styles as listItemStyle } from '@material/mwc-list/mwc-list-item.css';
import { RequestSelectedDetail } from '@material/mwc-list/mwc-list-item-base';
import styles from './list-item.scss?inline';
import navListStyles from './nav-list-item.scss?inline';
import CovalentList from './list';

declare global {
  interface HTMLElementTagNameMap {
    'cv-nav-list-item': CovalentNavRailListItem;
  }
}

@customElement('cv-nav-list-item')
export class CovalentNavRailListItem extends CovalentListItem {
  static override styles = [
    css`
      ${unsafeCSS(listItemStyle)}
    `,
    css`
      ${unsafeCSS(controlStyle)}
    `,
    css`
      ${unsafeCSS(styles)}
    `,
    css`
      ${unsafeCSS(navListStyles)}
    `,
  ];

  @queryAssignedElements({ slot: 'expansion-panel', flatten: true })
  expansionPanelElements!: CovalentList[];

  @property({ type: Boolean, reflect: true })
  open = false;

  @property({ type: Boolean, reflect: true })
  hasChildren = false;

  activated = false;

  private lastKeySelected = 0;

  private _toggleOpen() {
    this.open = !this.open;
  }

  private _handleKeydown(event: KeyboardEvent) {
    const firstEl = this.expansionPanelElements[0];
    const nextIndex = firstEl ? firstEl?.getFocusedItemIndex() : 0;
    const totalItems = firstEl?.items.length ?? 0;

    if (!this.hasChildren) {
      return;
    }

    // transform to a switch case

    if (event.code === 'Enter') {
      event.preventDefault();
      event.stopImmediatePropagation();
      // Toggle only if target press is header else make sure the top headers is deselected
      if ((event.target as CovalentNavRailListItem).hasChildren) {
        this._toggleOpen();
      } else {
        this._deselectHeader(event);
      }
      return;
    }

    if (!this.open) {
      return;
    }

    // Arrow up from top sub item
    if (
      event.code === 'ArrowUp' &&
      nextIndex === 0 &&
      this.lastKeySelected === 0 &&
      !(event.target as CovalentNavRailListItem).hasChildren
    ) {
      event.preventDefault();
      event.stopImmediatePropagation();
      firstEl.items[0].blur();
      this.focus();
      return;
    }
    // Arrow up from top sub item down
    if (event.code === 'ArrowDown' && nextIndex === -1) {
      event.preventDefault();
      event.stopImmediatePropagation();
      firstEl.focusItemAtIndex(0);
      this.lastKeySelected = 0;
    }
    if (event.code === 'ArrowUp' && nextIndex !== -1) {
      event.preventDefault();
      event.stopImmediatePropagation();
      firstEl.focusItemAtIndex(nextIndex);
      this.lastKeySelected = nextIndex;
    }
    // Allow arrow up/down if within boundry
    if (
      (event.code === 'ArrowDown' || event.code === 'ArrowUp') &&
      nextIndex !== -1 &&
      this.lastKeySelected < totalItems - 1
    ) {
      event.preventDefault();
      event.stopImmediatePropagation();
      firstEl.focusItemAtIndex(nextIndex);
      this.lastKeySelected = nextIndex;
    }
  }

  private _handleRequestSelected(event: Event) {
    const ev = event as CustomEvent<RequestSelectedDetail>;
    if (
      this.hasChildren &&
      ev.detail.selected === false &&
      ev.detail.source === 'property'
    ) {
      this._deselectChildren();
    }
  }

  private _deselectChildren() {
    this.expansionPanelElements.forEach((subnav) => {
      subnav.items.forEach((items) => (items.selected = false));
    });
  }

  private _deselectHeader(event: Event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    this.fireRequestSelected(false, 'interaction');
    this.activated = false;
  }

  renderExpansionItem() {
    const text = this.renderText();
    const graphic = this.graphic ? this.renderGraphic() : nothing;
    const meta = this.hasMeta ? this.renderMeta() : nothing;
    const arrowIcon = this.open ? 'arrow_drop_down' : 'arrow_right';
    const arrow = html`<cv-icon class="expansion-icon">${arrowIcon}</cv-icon>`;

    return html`
      <div
        @mousedown=${this._toggleOpen}
        @touchstart="${this._toggleOpen}"
        @keydown=${this._toggleOpen}
        class="expansion-header"
      >
        ${this.renderRipple()} ${arrow} ${graphic} ${text} ${meta}
      </div>
      <div class="expansion-panel" @click=${this._deselectHeader}>
        <slot name="expansion-panel"></slot>
      </div>
    `;
  }

  override connectedCallback() {
    super.connectedCallback();

    this.addEventListener('keydown', this._handleKeydown);
    this.addEventListener('request-selected', this._handleRequestSelected);
  }

  override disconnectedCallback() {
    super.disconnectedCallback();

    this.removeEventListener('keydown', this._handleKeydown);
    this.addEventListener('request-selected', this._handleRequestSelected);
  }

  override render() {
    return this.hasChildren ? this.renderExpansionItem() : super.render();
  }
}

export default CovalentNavRailListItem;
