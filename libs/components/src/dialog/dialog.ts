import { css, unsafeCSS } from 'lit';
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

  observer!: MutationObserver;

  protected firstUpdated() {
    super.firstUpdated();

    // Callback function to execute when mutations are observed
    const callback: MutationCallback = (
      mutationsList,
      observer: MutationObserver,
    ) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
          // Check if nodes have been added
          mutation.addedNodes.forEach((node) => {
            if (
              node.nodeType === Node.ELEMENT_NODE &&
              node instanceof HTMLElement &&
              node.classList.contains('cdk-overlay-container') &&
              node.hasAttribute('inert')
            ) {
              setTimeout(() => {
                node.removeAttribute('inert');
                observer.disconnect();
              }, 500);
            }
          });
        }
      }
    };

    // Create an observer instance linked to the callback function
    this.observer = new MutationObserver(callback);

    // Start observing the target node for configured mutations
    this.observer.observe(document.body, { childList: true, subtree: true });
  }

  disconnectedCallback() {
    // Disconnect the observer when the component is disconnected
    if (this.observer) {
      this.observer.disconnect();
    }
    super.disconnectedCallback();
  }
}

export default CovalentDialog;
