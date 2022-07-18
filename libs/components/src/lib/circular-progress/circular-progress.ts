import { CircularProgressBase } from '@material/mwc-circular-progress/mwc-circular-progress-base';
import { styles } from '@material/mwc-circular-progress/mwc-circular-progress.css';
import { customElement } from 'lit/decorators.js';

declare global {
    interface HTMLElementTagNameMap {
        'td-circular-progress': CovalentCircularProgressBase;
    }
}

@customElement('td-circular-progress')
export class CovalentCircularProgressBase extends CircularProgressBase {

  static override styles = [styles];  
}