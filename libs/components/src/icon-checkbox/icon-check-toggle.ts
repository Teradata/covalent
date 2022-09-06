import { CheckboxBase } from '@material/mwc-checkbox/mwc-checkbox-base';
import { styles as checkboxStyle } from '@material/mwc-checkbox/mwc-checkbox.css';
import styles from './icon-checkbox.scss';
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';

declare global {
  interface HTMLElementTagNameMap {
    'td-icon-check-item': CovalentIconCheckToggleBase;
  }
}

@customElement('td-checkbox-icon')
export class CovalentIconCheckToggleBase extends CheckboxBase {
  static override styles = [styles, checkboxStyle];
  @property() width: number | string = '200';
  @property() height: number | string = '160';
  @property({ type: Boolean }) iconOnly = false;
  override render() {
    const classes = {
      checked: this.checked,
      cornerFill: this.checked,
    };
    const checkmark = {
      showCheck: this.checked,
    };
    const styles = {
      '--width': this.width == 'fill' ? '100%' : `${this.width}px`,
      '--height': `${this.height}px`,
    };
    return html`
        <div class="${classMap(classes)} container" style="${styleMap(
      styles
    )}" @click="${this._handleClick}">
            <input type="checkbox" class="mdc-checkbox__native-control"></input>
            <div class="mdc-toggle__background">
                <svg class="mdc-toggle__checkmark ${classMap(
                  checkmark
                )}" viewBox="0 0 24 24">
                    <path class="mdc-toggle__checkmark-path ${classMap(
                      checkmark
                    )}" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path>
                </svg>
            </div>
            <slot name="icon"></slot>
            ${this.iconOnly ? '' : html`<div><slot name="text"></slot></div>`}
        </div>
    `;
  }
  private _handleClick() {
    this.checked = !this.checked;
  }
}
