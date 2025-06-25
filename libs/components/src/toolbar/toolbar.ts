import { css, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { TopAppBarBase } from '@material/mwc-top-app-bar/mwc-top-app-bar-base';
import styles from './toolbar.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'cv-toolbar': CovalentToolbar;
  }
}

@customElement('cv-toolbar')
export class CovalentToolbar extends TopAppBarBase {
  static override styles = [
    css`
      ${unsafeCSS(styles)}
    `,
  ];

  /**
   * position sticky when scrolled
   */
  @property({ type: Boolean, reflect: true })
  sticky = false;

  private stickyOffset = 0;
  private scrollListener?: () => void;

  override connectedCallback() {
    super.connectedCallback();
    if (this.sticky) {
      this.setupStickyBehavior();
    }
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    this.cleanup();
  }

  override updated(changedProperties: Map<string, unknown>) {
    super.updated(changedProperties);
    if (changedProperties.has('sticky')) {
      if (this.sticky) {
        this.setupStickyBehavior();
      } else {
        this.cleanup();
      }
    }
  }

  private setupStickyBehavior() {
    this.cleanup();

    // Wait for next frame to ensure element is rendered
    requestAnimationFrame(() => {
      this.stickyOffset = this.offsetTop;
      this.scrollListener = this.handleScroll.bind(this);
      window.addEventListener('scroll', this.scrollListener);
      this.handleScroll(); // Initial check
    });
  }

  private handleScroll() {
    if (window.pageYOffset > this.stickyOffset) {
      this.classList.add('is-sticky');
    } else {
      this.classList.remove('is-sticky');
    }
  }

  private cleanup() {
    if (this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
      this.scrollListener = undefined;
    }
    this.classList.remove('is-sticky');
  }
}

export default CovalentToolbar;
