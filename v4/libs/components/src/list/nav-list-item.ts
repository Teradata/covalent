import { customElement, property } from 'lit/decorators.js';
import { CovalentListItemBase } from './list-item';
import { styles as controlStyle } from '@material/mwc-list/mwc-control-list-item.css';
import { styles as listItemStyle } from '@material/mwc-list/mwc-list-item.css';
import styles from './list-item.scss';
import navListStyles from './nav-list-item.scss';

declare global {
  interface HTMLElementTagNameMap {
    'td-nav-list-item': CovalentNavRailListItem;
  }
}

@customElement('td-nav-list-item')
export class CovalentNavRailListItem extends CovalentListItemBase {
  static override styles = [listItemStyle, controlStyle, styles, navListStyles];

  @property({ type: Boolean, reflect: true })
  navOpen = false;

  constructor() {
    super();
  }
}
