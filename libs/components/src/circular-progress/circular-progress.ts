import { CircularProgressBase } from '@material/mwc-circular-progress/mwc-circular-progress-base';
import { styles } from '@material/mwc-circular-progress/mwc-circular-progress.css';
import { customElement } from 'lit/decorators.js';

declare global {
  interface HTMLElementTagNameMap {
    'cv-circular-progress': CovalentCircularProgressBase;
  }
}

@customElement('cv-circular-progress')
export class CovalentCircularProgressBase extends CircularProgressBase {
  static override styles = [styles];
}
