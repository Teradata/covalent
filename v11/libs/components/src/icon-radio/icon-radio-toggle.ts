import { css, html, TemplateResult, unsafeCSS } from 'lit';
import { RadioBase } from '@material/mwc-radio/mwc-radio-base';
import { styles as radioStyle } from '@material/mwc-radio/mwc-radio.css';
import { customElement, property } from 'lit/decorators.js';
import styles from './icon-radio.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'cv-icon-radio-item': CovalentIconRadioToggle;
  }
}

@customElement('cv-radio-icon')
export class CovalentIconRadioToggle extends RadioBase {
  static override styles = [
    radioStyle,
    css`
      ${unsafeCSS(styles)}
    `,
  ];

  @property({ type: Boolean }) iconOnly = false;

  @property({ type: Boolean, reflect: true, attribute: 'text-only' })
  textOnly = false;

  private resizeObserver?: ResizeObserver;

  override connectedCallback(): void {
    super.connectedCallback();
    this.setupResizeObserver();
  }

  override firstUpdated(): void {
    super.firstUpdated();
    // Check if text-only on first render
    const hasIcon = this.querySelector('[slot="icon"]') !== null;
    this.textOnly = !hasIcon;

    if (this.textOnly) {
      requestAnimationFrame(() => this.updateDescriptionLineClamp());
    }
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.resizeObserver?.disconnect();
  }

  private setupResizeObserver(): void {
    this.resizeObserver = new ResizeObserver(() => {
      this.updateDescriptionLineClamp();
    });
  }

  private updateDescriptionLineClamp(): void {
    if (!this.textOnly) return;

    const textSlot = this.shadowRoot?.querySelector(
      'slot[name="text"]',
    ) as HTMLSlotElement;
    if (!textSlot) return;

    const slottedElements = textSlot.assignedElements();
    if (slottedElements.length === 0) return;

    const firstText = slottedElements[0] as HTMLElement;
    const computedStyle = getComputedStyle(firstText);
    const lineHeight = parseFloat(computedStyle.lineHeight);
    const actualHeight = firstText.offsetHeight;

    if (lineHeight > 0 && actualHeight > 0) {
      const usedLines = Math.round(actualHeight / lineHeight);

      // Total lines: 5
      // If first uses 1 line -> second gets 4 lines
      // If first uses 2 lines -> second gets 3 lines
      const totalLines = 5;
      const descriptionLines = totalLines - usedLines;

      this.style.setProperty(
        '--cv-icon-radio-description-lines',
        String(descriptionLines),
      );
    }
  }

  private handleTextSlotChange(): void {
    const textSlot = this.shadowRoot?.querySelector(
      'slot[name="text"]',
    ) as HTMLSlotElement;
    if (!textSlot) return;

    const elements = textSlot.assignedElements();

    if (elements.length > 0 && this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver.observe(elements[0]);
    }

    requestAnimationFrame(() => this.updateDescriptionLineClamp());
  }

  private handleIconSlotChange(e: Event): void {
    const slot = e.target as HTMLSlotElement;
    const hasIcon = slot.assignedElements().length > 0;
    this.textOnly = !hasIcon;

    if (this.textOnly) {
      requestAnimationFrame(() => this.updateDescriptionLineClamp());
    }
  }

  // Override the renderRipple method to minimally introduce the icon & text slots without overwritting the render method
  protected override renderRipple(): TemplateResult | string {
    const iconSlot = html`<slot
      name="icon"
      @slotchange="${this.handleIconSlotChange}"
    ></slot>`;
    const textSlot = this.iconOnly
      ? ''
      : html`<div>
          <slot name="text" @slotchange="${this.handleTextSlotChange}"></slot>
        </div>`;
    const ripple = this.shouldRenderRipple
      ? html`<mwc-ripple
          accent
          .internalUseStateLayerCustomProperties="${this
            .useStateLayerCustomProperties}"
          .disabled="${this.disabled}"
        ></mwc-ripple>`
      : '';

    return html`${iconSlot}${textSlot}${ripple}`;
  }
}

export default CovalentIconRadioToggle;
