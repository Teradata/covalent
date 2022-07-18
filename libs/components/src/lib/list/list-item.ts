import { ListItemBase } from '@material/mwc-list/mwc-list-item-base';

import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { styles as controlStyle } from '@material/mwc-list/mwc-control-list-item.css';
import { styles as listItemStyle } from '@material/mwc-list/mwc-list-item.css';
import styles  from './list-item.scss';

declare global {
    interface HTMLElementTagNameMap {
        'td-list-item': CovalentListItemBase;
    }
}

@customElement('td-list-item')
export class CovalentListItemBase extends ListItemBase {

  static override styles = [listItemStyle, controlStyle, styles];

  @property({type: Boolean, reflect: true}) hasChildren = false;

  override render() {
    const text = this.renderText();
    const graphic = this.graphic ? this.renderGraphic() : html``;
    const meta = this.hasMeta ? this.renderMeta() : html``;
    const arrowIcon = this.activated ? 'arrow_drop_down' : 'arrow_right';
    const arrow = this.hasChildren ? html`<td-icon class="expansion-icon" >${arrowIcon}</td-icon>` : html``;

    return html`
      ${this.renderRipple()}
      ${arrow}
      ${graphic}
      ${text}
      ${meta}
      `;
  }
}