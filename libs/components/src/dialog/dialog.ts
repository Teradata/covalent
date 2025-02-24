import { css, PropertyValues, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { DialogBase } from '@material/mwc-dialog/mwc-dialog-base';
import { styles as baseStyles } from '@material/mwc-dialog/mwc-dialog.css';
import { observer } from '@material/mwc-base/observer.js';

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

  protected updated(_changedProperties: PropertyValues): void {
    super.updated(_changedProperties);

    const overlayContainer = document.querySelector('#storybook-root');
    requestAnimationFrame(() => {
      setTimeout(() => {
        if (overlayContainer) {
          overlayContainer.removeAttribute('inert');
        }
      }, 500);
    });
  }

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
            if (node.nodeType === Node.ELEMENT_NODE) {
              console.log('Element added to DOM:', node);
              // check if node has class cdk-overlay-container and remove the attribute inert if present
              if (
                node instanceof HTMLElement &&
                node.classList.contains('cdk-overlay-container') &&
                node.hasAttribute('inert')
              ) {
                node.removeAttribute('inert');

                console.log('removed inert');
              }
            }
          });
        }
      }
    };

    // Create an observer instance linked to the callback function
    this.observer = new MutationObserver(callback);

    // Start observing the target node for configured mutations
    const config = { childList: true, subtree: true };
    this.observer.observe(document.body, config);
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
