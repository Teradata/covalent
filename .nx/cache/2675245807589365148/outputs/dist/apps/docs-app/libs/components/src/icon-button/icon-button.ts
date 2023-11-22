import { css, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IconButtonBase } from '@material/mwc-icon-button/mwc-icon-button-base';
import { styles as baseStyles } from '@material/mwc-icon-button/mwc-icon-button.css';
import styles from './icon-button.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'cv-icon-button': CovalentIconButton;
  }
}

@customElement('cv-icon-button')
export class CovalentIconButton extends IconButtonBase {
  static override styles = [
    baseStyles,
    css`
      ${unsafeCSS(styles)}
    `,
  ];
}

export default CovalentIconButton;
