import { customElement } from 'lit/decorators.js';
import { AppDetailBase } from './app-detail-base';
import styles from './app-detail.scss';

declare global {
    interface HTMLElementTagNameMap {
        'td-app-detail': CovalentAppDetailBase;
    }
}

@customElement('td-app-detail')
export class CovalentAppDetailBase extends AppDetailBase {

  static override styles = [styles];  
}