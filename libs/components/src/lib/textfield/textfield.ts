import { customElement } from 'lit/decorators.js';
import { TextFieldBase } from '@material/mwc-textfield/mwc-textfield-base';
import { styles as baseTextFieldStyles } from '@material/mwc-textfield/mwc-textfield.css';
import styles from './textfield.scss';

declare global {
    interface HTMLElementTagNameMap {
        'td-textfield': CovalentTextFieldBase;
    }
}

@customElement('td-textfield')
export class CovalentTextFieldBase extends TextFieldBase {

  static override styles = [baseTextFieldStyles, styles];  
}