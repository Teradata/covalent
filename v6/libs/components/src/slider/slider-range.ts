import { SliderRangeBase } from '@material/mwc-slider/slider-range-base';
import { styles } from '@material/mwc-slider/mwc-slider.css';
import { customElement } from 'lit/decorators.js';

declare global {
  interface HTMLElementTagNameMap {
    'cv-slider-range': CovalentSliderRangeBase;
  }
}

@customElement('cv-slider-range')
export class CovalentSliderRangeBase extends SliderRangeBase {
  static override styles = [styles];
}
