import { CircularProgressBase } from '@material/mwc-circular-progress/mwc-circular-progress-base';
import { styles } from '@material/mwc-circular-progress/mwc-circular-progress.css';
import { customElement } from 'lit/decorators.js';

declare global {
  interface HTMLElementTagNameMap {
    'cv-circular-progress': CovalentCircularProgress;
  }
}

@customElement('cv-circular-progress')
export class CovalentCircularProgress extends CircularProgressBase {
  static override styles = [styles];
}

export default CovalentCircularProgress;