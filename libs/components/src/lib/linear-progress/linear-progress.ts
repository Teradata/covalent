import { LinearProgressBase } from '@material/mwc-linear-progress/mwc-linear-progress-base';
import { styles } from '@material/mwc-linear-progress/mwc-linear-progress.css';
import { customElement } from 'lit/decorators.js';

declare global {
    interface HTMLElementTagNameMap {
        'td-linear-progress': CovalentLinearProgressBase;
    }
}

@customElement('td-linear-progress')
export class CovalentLinearProgressBase extends LinearProgressBase {

  static override styles = [styles];  
}