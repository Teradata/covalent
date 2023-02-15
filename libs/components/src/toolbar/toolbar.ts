import { css, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { TopAppBarBase } from '@material/mwc-top-app-bar/mwc-top-app-bar-base';
import styles from './toolbar.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'cv-toolbar': CovalentToolbarBase;
  }
}

@customElement('cv-toolbar')
export class CovalentToolbarBase extends TopAppBarBase {
  static override styles = [
    css`
      ${unsafeCSS(styles)}
    `,
  ];
}
