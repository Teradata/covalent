import { LitElement, css, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './expansion-panel-item.scss?inline';
import '../icon/icon';

@customElement('expansion-panel-item')
export class ExpansionPanelItem extends LitElement {
  static override styles = [
    css`
      ${unsafeCSS(styles)}
    `,
  ];
  static override shadowRootOptions: ShadowRootInit = {
    mode: 'open',
  };

  @property({ type: Number }) index = 0;
  @property({ type: Boolean, reflect: true, attribute: 'open' }) open = false;
  @property({ type: Boolean, reflect: true, attribute: 'isTopPanel' })
  isTopPanel = false;
  @property({ type: Boolean, reflect: true, attribute: 'isBottomPanel' })
  isBottomPanel = false;
  @property({ type: Boolean, reflect: true, attribute: 'isSinglePanel' })
  isSinglePanel = false;

  @property({ type: Boolean, reflect: true, attribute: 'openTopPanel' })
  openTopPanel = false;
  @property({ type: Boolean, reflect: true, attribute: 'openBottomPanel' })
  openBottomPanel = false;
  @property({ type: Boolean, reflect: true, attribute: 'openInnerPanel' })
  openInnerPanel = false;

  @property({ type: Boolean, reflect: true, attribute: 'belowOpenInnerPanel' })
  belowOpenInnerPanel = false;
  @property({ type: Boolean, reflect: true, attribute: 'aboveOpenInnerPanel' })
  aboveOpenInnerPanel = false;
  // if the panel right below the top panel
  // or right above the bottom panel is opened,
  // the very top or bottom panel becomes a single panel
  @property({ type: Boolean, reflect: true, attribute: 'separateSinglePanel' })
  separateSinglePanel = false;

  @property({ type: String }) title = 'Title';
  @property({ type: String }) contentPreview = 'Content preview';
  @property({ type: String }) content = 'Content';

  render() {
    return html`
      <div class="panel">
        <div class="header" @click=${this._toggleContent}>
          <span class="title">${this.title}</span>
          <span class="contentPreview">${this.contentPreview}</span>

          <cv-icon>person</cv-icon>
        </div>

        <div class="content">
          <span>${this.content}</span>
        </div>
      </div>
    `;
  }

  resetPanel() {
    this.openTopPanel = false;
    this.openBottomPanel = false;
    this.openInnerPanel = false;
    this.belowOpenInnerPanel = false;
    this.aboveOpenInnerPanel = false;
    this.separateSinglePanel = false;
    this.open = false;
  }

  private _toggleContent(e: Event) {
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
    // this.dispatchEvent(event);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'expansion-panel-item': ExpansionPanelItem;
  }
}
