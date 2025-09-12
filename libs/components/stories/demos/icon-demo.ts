import { LitElement, css, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
// eslint-disable-next-line @nx/enforce-module-boundaries
import COV_ICON_LIST from '../../../icons/icon-list';
import '../../src/icon/icon.js';
import '../../src/typography/typography.js';

@customElement('cv-icon-demo')
export class CovalentIconDemo extends LitElement {
  static override styles = [
    css`
      :host {
        --mdc-icon-font: 'covalent-icons';
      }

      .icon-grid {
        display: flex;
        flex-wrap: wrap; /* Enables wrapping to new rows */
        gap: 24px; /* Space between items */
        justify-content: start; /* Align items to the left */
      }

      .icon-container {
        margin: 20px 5px;
        text-align: center;
        width: 200px;

        cv-icon {
          margin-bottom: 16px;
          font-size: 24px;
        }
      }

      .wrap {
        word-wrap: break-word;
      }
    `,
  ];

  render() {
    return html`<div class="icon-grid">
      ${COV_ICON_LIST.map(
        (icon) =>
          html`<div class="icon-container">
            <cv-icon>${icon}</cv-icon>
            <cv-typography scale="caption">
              <div class="wrap">${icon}</div>
            </cv-typography>
          </div>`,
      )}
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cv-icon-demo': CovalentIconDemo;
  }
}

export default CovalentIconDemo;
