import { customElement } from 'lit/decorators.js';
import { TopAppBarBase } from '@material/mwc-top-app-bar/mwc-top-app-bar-base';
import styles from './toolbar.scss';

declare global {
  interface HTMLElementTagNameMap {
    'td-toolbar': CovalentToolbarBase;
  }
}

@customElement('td-toolbar')
export class CovalentToolbarBase extends TopAppBarBase {
  static override styles = [styles];
}
