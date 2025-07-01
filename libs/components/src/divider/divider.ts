import { LitElement, html } from 'lit';

/**
 * CovalentDivider
 *
 * A divider component that creates a visual separation between content.
 * Can be used horizontally or vertically with different variants.
 */
class CovalentDivider extends LitElement {
  static properties = {
    direction: { type: String },
    size: { type: String },
    flush: { type: Boolean },
  };

  constructor() {
    super();
    this.direction = 'horizontal';
    this.size = 'full';
    this.flush = false;
  }

  get isVertical() {
    return this.direction === 'vertical';
  }

  getSpacing() {
    const { isVertical, size, flush } = this;

    let spacingX = isVertical ? '8px' : '0';
    let spacingY = isVertical ? '0' : '8px';

    if (flush) {
      if (isVertical) {
        spacingX = '0';
      } else {
        spacingY = '0';
      }
    }

    let spacingLeft = spacingX;
    let spacingRight = spacingX;
    let spacingTop = spacingY;
    let spacingBottom = spacingY;

    if (size === 'inset') {
      if (isVertical) {
        spacingLeft = flush ? '0' : '8px';
        spacingRight = flush ? '0' : '8px';
        spacingTop = '12px';
        spacingBottom = '12px';
      } else {
        spacingLeft = '16px';
        spacingRight = '16px';
      }
    }

    return { spacingLeft, spacingRight, spacingTop, spacingBottom };
  }

  getLineStyles() {
    const { isVertical, size } = this;

    if (isVertical) {
      if (size === 'icon') {
        return `
          top: 50%;
          left: 50%;
          width: 1px;
          height: 24px;
          transform: translateX(-50%) translateY(-50%);
        `;
      } else {
        return `
          top: var(--spacing-top);
          bottom: var(--spacing-bottom);
          left: 50%;
          width: 1px;
          transform: translateX(-50%);
        `;
      }
    } else {
      if (size === 'icon') {
        return `
          top: 50%;
          left: 50%;
          width: 24px;
          height: 1px;
          transform: translateX(-50%) translateY(-50%);
        `;
      } else {
        return `
          top: 50%;
          left: var(--spacing-left);
          right: var(--spacing-right);
          height: 1px;
          transform: translateY(-50%);
        `;
      }
    }
  }

  render() {
    const { spacingLeft, spacingRight, spacingTop, spacingBottom } =
      this.getSpacing();
    const lineStyles = this.getLineStyles();
    const isVertical = this.isVertical;

    return html`
      <style>
        :host {
          --spacing-left: ${spacingLeft};
          --spacing-right: ${spacingRight};
          --spacing-top: ${spacingTop};
          --spacing-bottom: ${spacingBottom};

          display: ${isVertical ? 'inline-block' : 'block'};
          ${isVertical
          ? 'min-height: 100%; max-height: 100vh; width: auto;'
          : 'width: 100%;'}
          padding:
            var(--spacing-top)
            var(--spacing-right)
            var(--spacing-bottom)
            var(--spacing-left);
          margin: 0;
          position: relative;
          box-sizing: border-box;
        }

        :host::before {
          content: '';
          position: absolute;
          background-color: var(--cv-theme-outline-variant, #D1D5E7);
          ${lineStyles}
        }
      </style>
    `;
  }
}

customElements.define('cv-divider', CovalentDivider);

declare global {
  interface HTMLElementTagNameMap {
    'cv-divider': CovalentDivider;
  }
}

export default CovalentDivider;
