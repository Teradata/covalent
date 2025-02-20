import { css, PropertyValues, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { DialogBase } from '@material/mwc-dialog/mwc-dialog-base';
import { styles as baseStyles } from '@material/mwc-dialog/mwc-dialog.css';
import styles from './dialog.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'cv-dialog': CovalentDialog;
  }
}

@customElement('cv-dialog')
export class CovalentDialog extends DialogBase {
  static override styles = [
    baseStyles,
    css`
      ${unsafeCSS(styles)}
    `,
  ];

  protected updated(_changedProperties: PropertyValues): void {
    super.updated(_changedProperties);

    const overlayContainer = document.querySelector('.cdk-overlay-container');

    requestAnimationFrame(() => {
      setTimeout(() => {
        if (overlayContainer) {
          overlayContainer.removeAttribute('inert');
        }
      }, 200);
    });
  }
}

export default CovalentDialog;
