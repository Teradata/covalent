import { SliderSingleBase } from '@material/mwc-slider/slider-single-base';
import { styles as baseStyles } from '@material/mwc-slider/mwc-slider.css';
import { customElement } from 'lit/decorators.js';
import styles from './slider.scss?inline';
import { css, unsafeCSS } from 'lit';

declare global {
  interface HTMLElementTagNameMap {
    'cv-slider': CovalentSlider;
  }
}

@customElement('cv-slider')
export class CovalentSlider extends SliderSingleBase {
  static override styles = [
    baseStyles,
    css`
      ${unsafeCSS(styles)}
    `,
  ];
}

export default CovalentSlider;
