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

  element = document.querySelector('.help');
  helpWidth = 0;
  private _startX!: number;
  private _startWidth!: number;
  private _resizing = false;

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
   * Make help resizable with drag/drop handle
   */
  @property({ type: Boolean, reflect: true })
  helpResizable = false;

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

  /**
   * Make the content area full width
   */
  @property({ type: Boolean, reflect: true })
  fullWidth = false;

  private hovered = false;
  private hoverTimeout: number | undefined;
  private hoverEntryDuration = 250;
  private hoverExitDuration = 250;

  constructor() {
    super();
    this.resizeEvent();
    this._resize = this._resize.bind(this);
    this._stopResize = this._stopResize.bind(this);
    this._startResizing = this._startResizing.bind(this);
    this._setupEventListeners();
    window.addEventListener('DOMContentLoaded', () => {
      this.setupHelpPanelListeners();
      const storedWidth = localStorage.getItem('helpWidth');
      if (storedWidth) {
        this.helpWidth = parseInt(storedWidth, 10);
        this.updateHelpPanelWidth();
      }
    });
  }

  setupHelpPanelListeners() {
    const helpToggle = document.querySelector('.help-item');
    const helpClose = document.querySelector('.help-close');

    helpToggle?.addEventListener('click', () => {
      this.toggleHelpPanel();
    });

    helpClose?.addEventListener('click', () => {
      this.toggleHelpPanel(false);
    });
  }

  toggleHelpPanel(open?: boolean) {
    this.helpOpen = open !== undefined ? open : !this.helpOpen;
    if (this.helpOpen) {
      const storedWidth = localStorage.getItem('helpWidth');
      this.helpWidth = storedWidth ? parseInt(storedWidth, 10) : 320;
    } else {
      this.helpWidth = 0;
    }
    this.updateHelpPanelWidth();
    this.requestUpdate();
  }

  private _setupEventListeners() {
    window.addEventListener('DOMContentLoaded', () => {
      const helpToggle = document.querySelector('.help-item');
      const helpClose = document.querySelector('.help-close');

      helpToggle?.addEventListener('click', () => {
        this.helpOpen = !this.helpOpen;
        this.helpWidth = this.helpOpen ? 320 : 0;
        this.requestUpdate();
      });

      helpClose?.addEventListener('click', () => {
        this.helpOpen = false;
        this.helpWidth = 0;
        this.requestUpdate();
      });
    });
  }

  private _startResizing(event: MouseEvent) {
    if (!this.helpResizable) return;

    const resizeHandle = this.shadowRoot?.querySelector('.resize-handle');
    if (event.target === resizeHandle) {
      this._startX = event.clientX;
      this._startWidth = this.helpWidth;
      this._resizing = true;
      document.addEventListener('mousemove', this._resize);
      document.addEventListener('mouseup', this._stopResize);
      (event.target as HTMLElement).classList.add('helpResizable');
    }

    resizeHandle?.addEventListener('dblclick', () => {
      if (this.helpWidth > 320 || this.helpWidth !== 320) {
        this.helpWidth = 320;
        localStorage.setItem('helpWidth', '320');
        this.updateHelpPanelWidth();
      }
    });

    this.requestUpdate();
  }

  private _resize(event: MouseEvent) {
    const diff = event.clientX - this._startX;
    const windowWidth = window.innerWidth;
    const mainMinWidth = 600;
    const maxWidthForHelp = Math.max(320, windowWidth - mainMinWidth);
    const newWidth = Math.max(
      320,
      Math.min(maxWidthForHelp, this._startWidth - diff)
    );
    if (this.helpWidth !== newWidth) {
      this.helpWidth = newWidth;
      localStorage.setItem('helpWidth', this.helpWidth.toString());
      this.updateHelpPanelWidth();
    }
    event.preventDefault();
  }

  private _stopResize() {
    document.removeEventListener('mousemove', this._resize);
    document.removeEventListener('mouseup', this._stopResize);
    this._resizing = false;
    const resizeHandle = this.shadowRoot?.querySelector('.resize-handle');
    if (resizeHandle) {
      resizeHandle.classList.remove('helpResizable');
    }

    this.requestUpdate();
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

  private updateHelpPanelWidth() {
    const appShell = this.shadowRoot?.querySelector(
      '.app-shell'
    ) as HTMLElement;
    appShell?.style.setProperty('--cv-help-width', `${this.helpWidth}px`);
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

  private _handleNavMouseOver = () => {
    this.hovered = true;

    // clear timeout if user hovers over nav before it closes
    clearTimeout(this.hoverTimeout);

    if (!this.open && !this.forcedOpen) {
      this.hoverTimeout = setTimeout(() => {
        if (this.hovered) {
          this._toggleOpen();
        }
      }, this.hoverEntryDuration);
    }
  };

  private _handleNavMouseOut = () => {
    this.hovered = false;

    // clear timeout if user leaves nav before it opens
    clearTimeout(this.hoverTimeout);

    if (this.open && !this.forcedOpen) {
      this.hoverTimeout = setTimeout(() => {
        if (!this.hovered) {
          this._toggleOpen();
        }
      }, this.hoverExitDuration);
    }
  };

  private _handleDrawerClosed() {
    this.forcedOpen = false;
    this.hovered = false;
    this.requestUpdate();
  }

  resizeEvent() {
    // TODO should be configurable outside appshell
    const mql = window.matchMedia('(max-width: 767px)');
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
      'cov-help--open': this.helpOpen,
      'cov-help--closed': !this.helpOpen,
      'cov-help--resizing': this._resizing,
      'cov-content--full-width': this.fullWidth,
    };
    const drawerClasses = {
      'mdc-drawer--dismissible': dismissible,
      'mdc-drawer--modal': modal,
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
          <div class="main-wrapper">
            <slot name="user-menu"></slot>
            ${this.renderMain()}
          </div>
        </div>
        <div class="help" @mousedown="${this._startResizing}">
          ${this.helpResizable
            ? html`<div class="resize-handle"></div>`
            : nothing}
          <slot name="help"></slot>
        </div>
      </div>
    `;
  }
}

export default CovalentAppShell;
