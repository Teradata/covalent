import { SliderRangeBase } from '@material/mwc-slider/slider-range-base';
import { styles } from '@material/mwc-slider/mwc-slider.css';
import { customElement } from 'lit/decorators.js';

declare global {
    interface HTMLElementTagNameMap {
        'td-slider-range': CovalentSliderRangeBase;
    }
}

@customElement('td-slider-range')
export class CovalentSliderRangeBase extends SliderRangeBase {

  static override styles = [styles];  
}