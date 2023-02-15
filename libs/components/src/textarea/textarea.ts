import { css, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { TextAreaBase } from '@material/mwc-textarea/mwc-textarea-base';
import { styles as baseTextAreaStyles } from '@material/mwc-textarea/mwc-textarea.css';
import { styles as textfieldStyles } from '@material/mwc-textfield/mwc-textfield.css.js';
import styles from '../textfield/textfield.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'cv-textarea': CovalentTextAreaBase;
  }
}

@customElement('cv-textarea')
export class CovalentTextAreaBase extends TextAreaBase {
  static override styles = [textfieldStyles, baseTextAreaStyles, css`${unsafeCSS(styles)}`];
}
