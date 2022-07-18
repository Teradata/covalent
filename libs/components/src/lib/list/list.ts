import { ListBase } from '@material/mwc-list/mwc-list-base';
import { styles } from '@material/mwc-list/mwc-list.css';
import { customElement } from 'lit/decorators.js';

declare global {
    interface HTMLElementTagNameMap {
        'td-list': CovalentListBase;
    }
}

@customElement('td-list')
export class CovalentListBase extends ListBase {

  static override styles = [styles];  
}