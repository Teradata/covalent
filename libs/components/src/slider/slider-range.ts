import { SliderRangeBase } from '@material/mwc-slider/slider-range-base';
import { styles } from '@material/mwc-slider/mwc-slider.css';
import { customElement } from 'lit/decorators.js';

declare global {
  interface HTMLElementTagNameMap {
    'cv-slider-range': CovalentSliderRange;
  }
}

@customElement('cv-slider-range')
export default class CovalentSliderRange extends SliderRangeBase {
  static override styles = [styles];
}
