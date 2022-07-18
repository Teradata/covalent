import { TextAreaBase } from '@material/mwc-textarea/mwc-textarea-base';
import { styles } from '@material/mwc-textarea/mwc-textarea.css';
import { styles as textfieldStyles } from '@material/mwc-textfield/mwc-textfield.css.js';
import { customElement } from 'lit/decorators.js';

declare global {
    interface HTMLElementTagNameMap {
        'td-textarea': CovalentTextAreaBase;
    }
}

@customElement('td-textarea')
export class CovalentTextAreaBase extends TextAreaBase {

  static override styles = [textfieldStyles, styles];  
}