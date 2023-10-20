import { SliderSingleBase } from '@material/mwc-slider/slider-single-base';
import { styles } from '@material/mwc-slider/mwc-slider.css';
import { customElement } from 'lit/decorators.js';

declare global {
  interface HTMLElementTagNameMap {
    'cv-slider': CovalentSlider;
  }
}

@customElement('cv-slider')
export default class CovalentSlider extends SliderSingleBase {
  static override styles = [styles];
}