import { LitElement, css, html, unsafeCSS } from 'lit';
import {
  customElement,
  property,
  queryAssignedElements,
} from 'lit/decorators.js';
import styles from './expansion-panel.scss?inline';

@customElement('expansion-panel')
export class ExpansionPanel extends LitElement {
  static override styles = [
    css`
      ${unsafeCSS(styles)}
    `,
  ];

  connectedCallback(): void {
    window.addEventListener('cv-expansionPanel-togglePanel', (e) =>
      this._handleToggle(e)
    );
    this.firstUpdated();
  }

  @property({ type: Boolean, reflect: true }) noSurface = false;

  render() {
    return html`
      <div class="container">
        <div class="content">
          <slot id="mainSlot"></slot>
        </div>
      </div>
    `;
  }

  private _handleToggle = (e: Event): void => {
    const items: any[] = Array.from(
      document.querySelectorAll('expansion-panel-item')
    );
    let panel = items[e.detail.index];
    let toggledOpen = panel.open;

    // reset panels to default closed styling
    items.forEach((item) => {
      item.resetPanel();
    });

    if (toggledOpen) {
      // reopen the currently selected panel
      panel.open = true;

      items.forEach((item) => {
        // Format the panel above and below the opened panel
        if (item.index == e.detail.index - 1) {
          if (item.index == 0) {
            // if this is the top panel
            item.separateSinglePanel = true;
          } else {
            item.aboveOpenInnerPanel = true;
          }
        } else if (item.index == e.detail.index + 1) {
          if (item.index == items.length - 1) {
            item.separateSinglePanel = true;
          }
          item.belowOpenInnerPanel = true;
        }
      });
    }
    console.log(items);
  };

  protected override firstUpdated() {
    // All expandable-panel components.
    const items: any[] = Array.from(
      document.querySelectorAll('expansion-panel-item')
    );
    if (items.length == 1) {
      items[0].isSinglePanel = true;
    } else {
      // set index and type of each panel
      let i = 0;
      items.forEach((item) => {
        if (i == 0) {
          item.isTopPanel = true;
        } else if (i == items.length - 1) {
          item.isBottomPanel = true;
        } else {
          item.isInnerPanel = true;
        }
        item.index = i;
        i++;
      });
    }
    console.log(items);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'expansion-panel': ExpansionPanel;
  }
}
