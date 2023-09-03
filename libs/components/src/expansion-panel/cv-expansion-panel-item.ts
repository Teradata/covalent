import { LitElement, css, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './cv-expansion-panel-item.scss?inline';
import '../icon/icon';
import '../action-ribbon/action-ribbon';

@customElement('cv-expansion-panel-item')
export class CovalentExpansionPanelItem extends LitElement {
  static override styles = [
    css`
      ${unsafeCSS(styles)}
    `,
  ];

  @property({ type: Number }) index = 0;

  @property({ type: Boolean, reflect: true, attribute: 'open' }) open = false;
  @property({ type: Boolean, reflect: true, attribute: 'isTopPanel' })
  isTopPanel = false;
  @property({ type: Boolean, reflect: true, attribute: 'isInnerPanel' })
  isInnerPanel = false;
  @property({ type: Boolean, reflect: true, attribute: 'isBottomPanel' })
  isBottomPanel = false;
  @property({ type: Boolean, reflect: true, attribute: 'isSinglePanel' })
  isSinglePanel = false;

  @property({ type: Boolean, reflect: true, attribute: 'belowOpenInnerPanel' })
  belowOpenInnerPanel = false;
  @property({ type: Boolean, reflect: true, attribute: 'aboveOpenInnerPanel' })
  aboveOpenInnerPanel = false;
  // if the panel right below the top panel or right above the bottom panel is opened,
  // the very top or bottom panel becomes a single panel
  @property({ type: Boolean, reflect: true, attribute: 'separateSinglePanel' })
  separateSinglePanel = false;

  @property({ type: String }) title = 'Title';
  @property({ type: String }) contentPreview = '';
  @property({ type: Boolean, reflect: true }) showFooter = false;
  @property({ type: Boolean, reflect: true }) noSurface = false;

  render() {
    return html`
      <div class="panel">
        <div class="header" @click=${this._toggleContent}>
          <span class="title">${this.title}</span>
          <span class="contentPreview">${this.contentPreview}</span>

          <cv-icon class="closedIcon">expand_more</cv-icon>
          <cv-icon class="openedIcon">expand_less</cv-icon>
        </div>

        <div class="dropdown">
          <div class="content">
            <slot name="content"></slot>
            ${this.showFooter
              ? html`
                  <div class="footer">
                    <slot name="footer"></slot>
                  </div>
                `
              : ''}
          </div>
        </div>
      </div>
    `;
  }

  resetPanel() {
    this.belowOpenInnerPanel = false;
    this.aboveOpenInnerPanel = false;
    this.separateSinglePanel = false;
    this.open = false;
  }

  private _toggleContent() {
    this.open = !this.open;

    let event = new CustomEvent('cv-expansionPanel-togglePanel', {
      detail: {
        message: `Panel opened: ${this}`,
        bubbles: true,
        composed: true,
        open: this.open,
        index: this.index,
      },
    });
    window.dispatchEvent(event);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cv-expansion-panel-item': CovalentExpansionPanelItem;
  }
}
