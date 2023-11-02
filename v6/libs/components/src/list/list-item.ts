import { ListItemBase } from '@material/mwc-list/mwc-list-item-base';

import { css, html, nothing, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { styles as controlStyle } from '@material/mwc-list/mwc-control-list-item.css';
import { styles as listItemStyle } from '@material/mwc-list/mwc-list-item.css';
import styles from './list-item.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'cv-list-item': CovalentListItem;
  }
}

@customElement('cv-list-item')
export class CovalentListItem extends ListItemBase {
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
  ];

  @property({ type: Boolean, reflect: true }) hasChildren = false;

  override render() {
    const text = this.renderText();
    const graphic = this.graphic ? this.renderGraphic() : nothing;
    const meta = this.hasMeta ? this.renderMeta() : nothing;
    const arrowIcon = this.activated ? 'arrow_drop_down' : 'arrow_right';
    const arrow = this.hasChildren
      ? html`<cv-icon class="expansion-icon">${arrowIcon}</cv-icon>`
      : nothing;
    const childSlot = this.hasChildren
      ? html`<slot name="child"></slot>`
      : nothing;

    return html` ${this.renderRipple()} ${arrow} ${graphic} ${text} ${meta}
    ${childSlot}`;
  }
}

export default CovalentListItem;
