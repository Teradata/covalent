import { LitElement, css, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import COV_ICON_LIST from './icon-list.js';
import styles from './icon-demo.scss?inline';
import './icon.js';
import '../typography/typography.js';

@customElement('cv-icon-demo')
export class CovalentIconDemo extends LitElement {
  static override styles = [
    css`
      ${unsafeCSS(styles)}
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
