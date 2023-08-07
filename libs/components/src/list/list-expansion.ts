import { css, html, nothing, unsafeCSS } from 'lit';
import {
  customElement,
  property,
  queryAssignedElements,
} from 'lit/decorators.js';
import styles from './list-expansion.scss?inline';
import CovalentNavRailListItem from './nav-list-item';

declare global {
  interface HTMLElementTagNameMap {
    'cv-expansion-list': CovalentExpansionList;
  }
}

@customElement('cv-expansion-list')
export class CovalentExpansionList extends CovalentNavRailListItem {
  static override styles = [
    css`
      ${unsafeCSS(styles)},
    `,
    ...super.styles,
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
    const text = this.renderText();
    const graphic = this.graphic ? this.renderGraphic() : nothing;
    const meta = this.hasMeta ? this.renderMeta() : nothing;
    const arrowIcon = this.open ? 'arrow_drop_down' : 'arrow_right';
    const arrow = this.navOpen
      ? html`<cv-icon class="expansion-icon">${arrowIcon}</cv-icon>`
      : nothing;
    const childSlot = html`<slot name="child"></slot>`;

    return html`
      <div @click=${this._toggleOpen} class="expansion-header">
        ${this.renderRipple()} ${arrow} ${graphic} ${text} ${meta} ${childSlot}
      </div>
      ${this.navOpen
        ? html`<div class="expansion-panel">
            <slot name="expansion-panel"></slot>
          </div>`
        : nothing}
    `;
  }
}

export default CovalentExpansionList;
