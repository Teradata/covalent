import { DrawerBase } from '@material/mwc-drawer/mwc-drawer-base';
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import styles from './app-shell.scss';

import '@material/mwc-icon-button';
import '@material/mwc-top-app-bar-fixed';


declare global {
  interface HTMLElementTagNameMap {
   'td-app-shell': CovalentAppShell;
  }
}


 /**
  * App Shell element.
  *
  * @slot - This element has a slot
  */
 @customElement('td-app-shell')
 export class CovalentAppShell extends DrawerBase {
   
  static override styles = [styles];
  
   /**
    * The name of the application to show in the small app bar
    */
    @property()
    appName = '';


   constructor() {
    super();
    
    this.resizeEvent();
  }

  private _toggleOpen() {
    this.open = !this.open;
  }

  resizeEvent () {
    // TODO should be configurable outside appshell
    const mql = window.matchMedia('(max-width: 800px)');
    if (mql.matches && this.type !== 'modal') {
      this.type = 'modal';
    } else if (!mql.matches && this.type !== 'dismissible') {
      this.type = 'dismissible';
    }
    this.requestUpdate();
   };

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

    return html`
      <div class="app-shell">
        <span class="header" ><td-top-app-bar-fixed centerTitle>
          <td-icon-button class="toggle-drawer" @click=${this._toggleOpen} slot="navigationIcon" icon="menu"></td-icon-button>
          <span slot="title">${this.appName}</span>
        </td-top-app-bar-fixed>
        </span>
        <nav class="navigation mdc-drawer ${classMap(classes)}">
          <div class="navigation-toolbar">
            <td-icon-button @click=${this._toggleOpen} class="toggle-drawer" icon="menu"></td-icon-button>
            <slot name="logo"></slot>
          </div>
          <slot name="navigation"></slot>
          <div style="display:flex; flex:1;"></div>
          <div divider></div>
          <slot name="user-menu"></slot>
        </nav>
        ${ modal ? html`<div class="mdc-drawer-scrim" @click="${this._handleScrimClick}"></div>` : ''}
        <slot name="mini-list"></slot>
        <div class="main mdc-drawer-app-content"><slot></slot></div>
        <slot name="help"></slot>
      </div>
    `;
   }
 }