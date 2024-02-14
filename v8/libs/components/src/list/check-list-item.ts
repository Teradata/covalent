import { CheckListItemBase } from '@material/mwc-list/mwc-check-list-item-base';
import { styles as controlStyle } from '@material/mwc-list/mwc-control-list-item.css';
import { styles } from '@material/mwc-list/mwc-list-item.css';
import covalentStyles from './list-item.scss?inline';
import { customElement } from 'lit/decorators.js';
import { css, unsafeCSS } from 'lit';

declare global {
  interface HTMLElementTagNameMap {
    'cv-check-list-item': CovalentCheckListItem;
  }
}

@customElement('cv-check-list-item')
export class CovalentCheckListItem extends CheckListItemBase {
  static override styles = [
    styles,
    controlStyle,
    css`
      ${unsafeCSS(covalentStyles)}
    `,
  ];
}

export default CovalentCheckListItem;
