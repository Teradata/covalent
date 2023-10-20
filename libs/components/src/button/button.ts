import { css, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ButtonBase } from '@material/mwc-button/mwc-button-base';
import { styles as baseStyles } from '@material/mwc-button/styles.css';
import styles from './button.scss?inline';
declare global {
  interface HTMLElementTagNameMap {
    'cv-button': CovalentButton;
  }
}

@customElement('cv-button')
export default class CovalentButton extends ButtonBase {
  static override styles = [baseStyles, css`${unsafeCSS(styles)}`];
}