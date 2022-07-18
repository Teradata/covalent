import { SliderSingleBase } from '@material/mwc-slider/slider-single-base';
import { styles } from '@material/mwc-slider/mwc-slider.css';
import { customElement } from 'lit/decorators.js';

declare global {
    interface HTMLElementTagNameMap {
        'td-slider': CovalentSliderBase;
    }
}

@customElement('td-slider')
export class CovalentSliderBase extends SliderSingleBase {

  static override styles = [styles];  
}