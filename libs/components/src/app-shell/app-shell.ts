import { css, html, nothing, unsafeCSS } from 'lit';
import {
  customElement,
  property,
  queryAssignedElements,
} from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { DrawerBase } from '@material/mwc-drawer/mwc-drawer-base';
import styles from './app-shell.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'cv-app-shell': CovalentAppShell;
  }
}

/**
 * App Shell element.
 *
 * @slot - This element has a slot
 */
@customElement('cv-app-shell')
export class CovalentAppShell extends DrawerBase {
  static override styles = [
    css`
      ${unsafeCSS(styles)}
    `,
  ];

  @queryAssignedElements({ slot: 'navigation' })
  navigationListElements!: HTMLElement[];

  @queryAssignedElements({ slot: 'user-menu' })
  userMenuElements!: HTMLElement[];

  /**
   * The name of the application to show in the small app bar
   */
  @property()
  appName = '';

  /**
   * The name of the section shown above the navigation
   */
  @property()
  sectionName = '';

  @property({ type: Boolean, reflect: true })
  miniListOpen = false;

  @property({ type: Boolean, reflect: true })
  helpOpen = false;

  private forcedOpen = false;
  private hovered = false;

  private navHoverTimeout?: number;

  constructor() {
    super();

    this.resizeEvent();
  }

  private _toggleOpen(forcedOpen = false) {
    if (this.mdcFoundation.isOpening() || this.mdcFoundation.isClosing()) {
      return;
    }

    this.open = forcedOpen === true ? forcedOpen : !this.open;

    [...this.navigationListElements, ...this.userMenuElements].forEach((el) =>
      el.setAttribute('navopen', this.open.toString())
    );

    this.dispatchEvent(
      new Event('CovalentAppShell:toggle', { bubbles: true, composed: true })
    );

    this.requestUpdate();
  }

  private _handleMenuClick() {
    this.forcedOpen = !this.forcedOpen;
    this._toggleOpen(this.forcedOpen);

    this.forcedOpen = this.open;
    this.hovered = false;
  }

  private _handleNavMouseOver() {
    clearTimeout(this.navHoverTimeout);

    if (this.open || this.forcedOpen) {
      return;
    }

    this.navHoverTimeout = setTimeout(() => {
      this.hovered = true;
      this._toggleOpen();
    }, 200);
  }

  private _handleNavMouseOut() {
    clearTimeout(this.navHoverTimeout);

    if (!this.open || this.forcedOpen) {
      return;
    }

    this.navHoverTimeout = setTimeout(() => {
      this.hovered = false;
      this._toggleOpen();
    }, 350);
  }

  resizeEvent() {
    // TODO should be configurable outside appshell
    const mql = window.matchMedia('(max-width: 800px)');
    if (mql.matches && this.type !== 'modal') {
      this.type = 'modal';
    } else if (!mql.matches && this.type !== 'dismissible') {
      this.type = 'dismissible';
    }
    this.requestUpdate();
  }

  override connectedCallback() {
    super.connectedCallback();
    window.addEventListener('resize', () => this.resizeEvent());
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('resize', this.resizeEvent);
  }

  protected renderSection() {
    return this.sectionName
      ? html`<div class="current-section">
          <cv-icon-button icon="arrow_back"></cv-icon-button>
          <span>${this.sectionName}</span>
        </div>`
      : nothing;
  }

  override render() {
    const dismissible = this.type === 'dismissible' || this.type === 'modal';
    const modal = this.type === 'modal';
    const classes = {
      'cov-drawer--forcedOpen': this.forcedOpen,
      'cov-appshell--minilist': this.miniListOpen,
    };
    const drawerClasses = {
      'mdc-drawer--dismissible': dismissible,
      'mdc-drawer--modal': modal,
      'cov-drawer--hovered': this.hovered,
    };
    const helpPanelClasses = {
      'help--closed': !this.helpOpen,
    };

    const scrim = modal
      ? html`<div
          class="mdc-drawer-scrim"
          @click="${this._handleScrimClick}"
        ></div>`
      : nothing;

    return html`
      <div class="app-shell ${classMap(classes)}">
        <span class="header"
          ><cv-top-app-bar-fixed centerTitle>
            <cv-icon-button
              class="toggle-drawer"
              @click=${this._handleMenuClick}
              slot="navigationIcon"
              icon="menu"
            ></cv-icon-button>
            <span slot="title">${this.appName}</span>
          </cv-top-app-bar-fixed>
        </span>
        <nav
          class="navigation mdc-drawer ${classMap(drawerClasses)}"
          @mouseover="${this._handleNavMouseOver}"
          @mouseout="${this._handleNavMouseOut}"
        >
          <div class="navigation-toolbar">
            <cv-icon-button
              @click="${this._handleMenuClick}"
              class="toggle-drawer"
              icon="menu"
            ></cv-icon-button>
            <slot name="logo"></slot>
          </div>
          ${this.renderSection()}
          <slot name="navigation"></slot>
          <div style="display:flex; flex:1;"></div>
          <div divider></div>
          <slot name="user-menu"></slot>
        </nav>
        ${scrim}
        <slot name="mini-list"></slot>
        <div class="main mdc-drawer-app-content"><slot></slot></div>
        <div class="help ${classMap(helpPanelClasses)}">
          <slot name="help"></slot>
        </div>
      </div>
    `;
  }
}

export default CovalentAppShell;
