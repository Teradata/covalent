import { css, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { DialogBase } from '@material/mwc-dialog/mwc-dialog-base';
import { styles as baseStyles } from '@material/mwc-dialog/mwc-dialog.css';
import { DocumentWithBlockingElements } from 'blocking-elements';
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

  observer!: MutationObserver;

  protected updated(changedProperties: Map<string, any>) {
    super.updated(changedProperties);
    if (changedProperties.has('open') && this.open) {
      setTimeout(() => {
        (document as DocumentWithBlockingElements).$blockingElements.pop();
      }, 250);
    }
  }
}

export default CovalentDialog;
