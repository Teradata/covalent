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

  @property({ type: Boolean })
  helpOpen = false;

  constructor() {
    super();

    this.resizeEvent();
  }

  private _toggleOpen() {
    if (this.mdcFoundation.isOpening() || this.mdcFoundation.isClosing()) {
      return;
    }

    this.open = !this.open;

    [...this.navigationListElements, ...this.userMenuElements].forEach((el) =>
      el.setAttribute('navopen', this.open.toString())
    );

    this.dispatchEvent(
      new Event('CovalentAppShell:toggle', { bubbles: true, composed: true })
    );
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

  override render() {
    const dismissible = this.type === 'dismissible' || this.type === 'modal';
    const modal = this.type === 'modal';
    const classes = {
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
      <div class="app-shell">
        <span class="header"
          ><cv-top-app-bar-fixed centerTitle>
            <cv-icon-button
              class="toggle-drawer"
              @click=${this._toggleOpen}
              slot="navigationIcon"
              icon="menu"
            ></cv-icon-button>
            <span slot="title">${this.appName}</span>
          </cv-top-app-bar-fixed>
        </span>
        <nav class="navigation mdc-drawer ${classMap(classes)}">
          <div class="navigation-toolbar">
            <cv-icon-button
              @click=${this._toggleOpen}
              class="toggle-drawer"
              icon="menu"
            ></cv-icon-button>
            <slot name="logo"></slot>
          </div>
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
