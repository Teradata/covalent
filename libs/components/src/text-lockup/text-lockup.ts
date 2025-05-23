import { css, html, LitElement, nothing, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import styles from './text-lockup.scss?inline';
import '../icon/icon';

declare global {
  interface HTMLElementTagNameMap {
    'cv-text-lockup': CovalentTextLockup;
  }
}

@customElement('cv-text-lockup')
export class CovalentTextLockup extends LitElement {
  static override styles = [
    css`
      ${unsafeCSS(styles)}
    `,
  ];

  @property()
  subText!: string;

  @property()
  icon?: string;

  @property()
  state?: 'active' | 'positive' | 'negative' | 'caution';

  @property()
  scale: 'large' | 'small' = 'small';

  @property({ type: Boolean, reflect: true })
  trailingSubText = false;

  override render() {
    const classes: { [key: string]: boolean } = {
      'subtext--trailing': this.trailingSubText,
    };
    classes[`scale--${this.scale}`] = true;

    if (this.state) {
      classes[`subtext-state--${this.state}`] = true;
    }
    return html`<span class="${classMap(classes)}"
      ><span class="subtext">${this.renderIcon()}${this.subText}</span
      ><slot></slot
    ></span>`;
  }

  renderIcon() {
    return this.icon ? html`<cv-icon>${this.icon}</cv-icon>` : nothing;
  }
}

export default CovalentTextLockup;
