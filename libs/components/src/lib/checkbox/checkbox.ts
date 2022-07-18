import { CheckboxBase } from '@material/mwc-checkbox/mwc-checkbox-base';
import { styles } from '@material/mwc-checkbox/mwc-checkbox.css';
import { customElement } from 'lit/decorators.js';

declare global {
    interface HTMLElementTagNameMap {
        'td-checkbox': CovalentCheckboxBase;
    }
}

@customElement('td-checkbox')
export class CovalentCheckboxBase extends CheckboxBase {

  static override styles = [styles];  
}