import { RadioListItemBase } from '@material/mwc-list/mwc-radio-list-item-base';
import { styles as controlStyle } from '@material/mwc-list/mwc-control-list-item.css';
import { styles } from '@material/mwc-list/mwc-list-item.css';
import covalentStyles from './list-item.scss?inline';
import { customElement } from 'lit/decorators.js';
import { css, unsafeCSS } from 'lit';

declare global {
  interface HTMLElementTagNameMap {
    'cv-radio-list-item': CovalentRadioListItem;
  }
}

@customElement('cv-radio-list-item')
export class CovalentRadioListItem extends RadioListItemBase {
  static override styles = [
    styles,
    controlStyle,
    css`
      ${unsafeCSS(covalentStyles)}
    `,
  ];
}

export default CovalentRadioListItem;
