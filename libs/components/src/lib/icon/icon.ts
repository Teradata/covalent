import { Icon } from '@material/mwc-icon/mwc-icon';
import { styles } from '@material/mwc-icon/mwc-icon-host.css';
import { customElement } from 'lit/decorators.js';

declare global {
    interface HTMLElementTagNameMap {
        'td-icon': CovalentIcon;
    }
}

@customElement('td-icon')
export class CovalentIcon extends Icon {

  static override styles = [styles];  
}