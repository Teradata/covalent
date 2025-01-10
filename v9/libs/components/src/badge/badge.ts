import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import styles from './badge.scss?inline';

export type BadgeSize = 'small' | 'large';
export type BadgeAlignmentVertical = 'top' | 'bottom';
export type BadgeAlignmentHorizonatal = 'left' | 'right';

/**
 * Badge
 *
 * @slot - This element has a slot
 */

@customElement('cv-badge')
export class CovalentBadge extends LitElement {
  static override styles = [
    css`
      ${unsafeCSS(styles)}
    `,
  ];

  /**
   * The content to be displayed in the badge
   */
  @property()
  content?: number | string;

  /**
   * Caps the value of badge content
   */
  @property()
  max?: number = 100;

  /**
   * Sets the size of the badge
   * 'small' represents a dot to notify that something has changed without providing content
   */
  @property()
  size?: BadgeSize = 'large';

  /**
   * Controls the visibility of the badge
   */
  @property({ type: Boolean, reflect: true })
  hideBadge? = false;

  /**
   * Aligns the badge vertically in the wrapped element
   */
  @property()
  verticalAlignment?: BadgeAlignmentVertical = 'top';

  /**
   * Aligns the badge horizontally in the wrapped element
   */
  @property()
  horizontalAlignment?: BadgeAlignmentHorizonatal = 'right';

  /**
   * Shows the badge when count is zero
   */
  @property({ type: Boolean, reflect: true })
  showZero?: boolean;

  firstUpdated(): void {
    const slot = this.renderRoot.querySelector('slot');

    if (slot) {
      const assignedNodes = slot.assignedNodes({
        flatten: true,
      }) as Element[];

      // Filter out non-element nodes
      const elements = assignedNodes.filter(
        (node) => node.nodeType === Node.ELEMENT_NODE
      );

      if (!elements.length) {
        const badge = this.renderRoot.querySelector('#badge-content');
        badge?.classList?.add('isolated');
      }
    }
  }

  getContent(): number | string {
    let content = this.content;
    const numericContent = Number(content);
    if (this.showZero && content == 0) {
      content = content.toString();
    } else if (!isNaN(numericContent) && this.max) {
      content = numericContent > this.max ? `${this.max}+` : numericContent;
    }
    return content || '';
  }

  override render() {
    const classes: { [key: string]: boolean } = {
      'cv-badge': true,
      small: this.size === 'small',
      hidden: !!this.hideBadge || (!this.showZero && this.content == 0),
    };
    classes[`${this.verticalAlignment}-${this.horizontalAlignment}`] = true;
    return html`
      <div class="cv-badge-container">
        <slot class="wrapped-content"></slot>
        <span id="badge-content" class="${classMap(classes)}">
          ${this.size !== 'small' ? this.getContent() : ''}
        </span>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cv-badge': CovalentBadge;
  }
}

export default CovalentBadge;
