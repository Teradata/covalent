import { ListItemBase } from '@material/mwc-list/mwc-list-item-base';

import { css, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';

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
}

export default CovalentListItem;
