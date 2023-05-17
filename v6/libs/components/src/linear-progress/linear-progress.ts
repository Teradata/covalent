import { css, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { LinearProgressBase } from '@material/mwc-linear-progress/mwc-linear-progress-base';
import { styles as baseStyles } from '@material/mwc-linear-progress/mwc-linear-progress.css';
import styles from './linear-progress.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'cv-linear-progress': CovalentLinearProgressBase;
  }
}

@customElement('cv-linear-progress')
export class CovalentLinearProgressBase extends LinearProgressBase {
  static override styles = [baseStyles, css`${unsafeCSS(styles)}`];
}
