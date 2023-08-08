import { css, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { CovalentListItem } from './list-item';
import { styles as controlStyle } from '@material/mwc-list/mwc-control-list-item.css';
import { styles as listItemStyle } from '@material/mwc-list/mwc-list-item.css';
import styles from './list-item.scss?inline';
import navListStyles from './nav-list-item.scss?inline';

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

  constructor() {
    super();
  }
}

export default CovalentNavRailListItem;