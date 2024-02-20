import { css, html, nothing, unsafeCSS } from 'lit';
import {
  customElement,
  property,
  queryAssignedElements,
} from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { DrawerBase } from '@material/mwc-drawer/mwc-drawer-base';
import styles from './app-shell.scss?inline';

import '../top-app-bar/top-app-bar-fixed';
import '../icon-button/icon-button';
import '../card/card';

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
  drawerOpen = false;

  @property({ type: Boolean, reflect: true })
  helpOpen = false;

  /**
   * Wrap the main area with a contained card surface
   */
  @property({ type: Boolean, reflect: true })
  contained = false;

  /**
   * Force the left navigation visibly open
   */
  @property({ type: Boolean, reflect: true })
  forcedOpen = false;

  private hovered = false;

  constructor() {
    super();

    this.resizeEvent();
  }

  private _toggleOpen(forcedOpen = false) {
    if (this.mdcFoundation.isOpening() || this.mdcFoundation.isClosing()) {
      return;
    }

    this.open = forcedOpen ? forcedOpen : !this.open;

    this.dispatchEvent(
      new Event('CovalentAppShell:toggle', { bubbles: true, composed: true })
    );

    this.requestUpdate();
  }

  private _handleMenuClick() {
    this.mdcRoot.dispatchEvent(
      new Event('transitionend', { bubbles: true, composed: true })
    );
    // Forcefully toggle the open/close state
    this._toggleOpen(!this.forcedOpen);

    this.dispatchEvent(new Event('CovalentAppShell:menuClick'));

    this.forcedOpen = true;
    this.hovered = false;
  }

  private _handleNavMouseOver() {
    if (this.open || this.forcedOpen) {
      return;
    }

    this.hovered = true;
    this._toggleOpen();
  }

  private _handleNavMouseOut() {
    if (!this.open || this.forcedOpen) {
      return;
    }

    this._toggleOpen();
  }

  private _handleDrawerClosed() {
    this.forcedOpen = false;
    this.hovered = false;
    this.requestUpdate();
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
    this.addEventListener('MDCDrawer:closed', this._handleDrawerClosed);
    window.addEventListener('resize', () => this.resizeEvent());
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('MDCDrawer:closed', this._handleDrawerClosed);
    window.removeEventListener('resize', this.resizeEvent);
  }

  protected renderSection() {
    return this.sectionName
      ? html`<div class="current-section">
          <slot name="section-action"></slot>
          <span class="current-section-name">${this.sectionName}</span>
        </div>`
      : nothing;
  }

  protected renderMain() {
    return this.contained
      ? html`<cv-card><slot></slot></cv-card>`
      : html`<slot></slot>`;
  }

  override render() {
    const dismissible = this.type === 'dismissible' || this.type === 'modal';
    const modal = this.type === 'modal';
    const classes = {
      'cov-drawer--forced-open': this.forcedOpen,
      'cov-drawer--open': this.drawerOpen || this.forcedOpen,
      'cov-drawer--hovered': this.hovered,
    };
    const drawerClasses = {
      'mdc-drawer--dismissible': dismissible,
      'mdc-drawer--modal': modal,
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
          @mouseenter="${this._handleNavMouseOver}"
          @mouseleave="${this._handleNavMouseOut}"
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
        </nav>
        ${scrim}
        <slot name="mini-list"></slot>
        <div class="main mdc-drawer-app-content">
          <slot name="user-menu"></slot>
          ${this.renderMain()}
        </div>
        <div class="help ${classMap(helpPanelClasses)}">
          <slot name="help"></slot>
        </div>
      </div>
    `;
  }
}

export default CovalentAppShell;
