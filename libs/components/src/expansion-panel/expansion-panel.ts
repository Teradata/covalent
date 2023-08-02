import { LitElement, css, html, unsafeCSS } from 'lit';
import {
  customElement,
  property,
  queryAssignedElements,
} from 'lit/decorators.js';

@customElement('expansion-panel')
export class ExpansionPanel extends LitElement {
  connectedCallback(): void {
    window.addEventListener('cv-expansionPanel-togglePanel', (e) =>
      this._handleToggle(e)
    );
    this.firstUpdated();
  }

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

      // set correct open property
      if (panel.isTopPanel) {
        panel.openTopPanel = panel.open;
      } else if (panel.isBottomPanel) {
        panel.openBottomPanel = panel.open;
      } else {
        panel.openInnerPanel = panel.open;
      }

      items.forEach((item) => {
        // Format the panel above and below the opened panel
        if (item.index == e.detail.index - 1) {
          if (item.index == 0) {
            // if this is the top panel
            item.separateSinglePanel = true;
            console.log(item);
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
  };

  protected override firstUpdated() {
    // All expandable-panel components.
    const items: any[] = Array.from(
      document.querySelectorAll('expansion-panel-item')
    );
    if (items.length > 1) {
      items[0].isTopPanel = true;
      items[items.length - 1].isBottomPanel = true;
    } else {
      items[0].isSinglePanel = true;
    }

    // set index of each panel
    let i = 0;
    items.forEach((item) => {
      item.index = i;
      i++;
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'expansion-panel': ExpansionPanel;
  }
}
