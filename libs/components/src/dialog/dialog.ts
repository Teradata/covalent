import { css, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { DialogBase } from '@material/mwc-dialog/mwc-dialog-base';
import { MDCDialogAdapter } from '@material/dialog/adapter.js';
import { styles as baseStyles } from '@material/mwc-dialog/mwc-dialog.css';
import {
  createFocusTrapInstance,
  MDCDialogFocusTrapFactory,
} from '@material/dialog/util';
import { DocumentWithBlockingElements } from 'blocking-elements';
import { createFocusTrap, FocusTrap } from 'focus-trap';

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

  /** Enables/Disables the trap focus functionality that uses blocking-elements library */
  @property({ type: Boolean, reflect: true })
  trapFocus = false;

  protected override createAdapter(): MDCDialogAdapter {
    const baseAdapater = super.createAdapter();

    return {
      ...baseAdapater,
      // Override the trapFocus method to prevent the blocking-elements from assigning inert attribute
      trapFocus: (el) => {
        if (this.trapFocus) {
          baseAdapater.trapFocus(el);
        } else if (el && !this.isConnected) {
          el.focus();
        }
      },
    };
  }
}

export default CovalentDialog;
