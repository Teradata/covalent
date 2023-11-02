import { SliderSingleBase } from '@material/mwc-slider/slider-single-base';
import { styles } from '@material/mwc-slider/mwc-slider.css';
import { customElement } from 'lit/decorators.js';

declare global {
  interface HTMLElementTagNameMap {
    'cv-slider': CovalentSliderBase;
  }
}

@customElement('cv-slider')
export class CovalentSliderBase extends SliderSingleBase {
  static override styles = [styles];
}
