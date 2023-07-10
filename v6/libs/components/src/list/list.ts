import { ListBase } from '@material/mwc-list/mwc-list-base';
import { styles } from '@material/mwc-list/mwc-list.css';
import { customElement } from 'lit/decorators.js';

declare global {
  interface HTMLElementTagNameMap {
    'cv-list': CovalentList;
  }
}

@customElement('cv-list')
export class CovalentList extends ListBase {
  static override styles = [styles];
}

export default CovalentList;
