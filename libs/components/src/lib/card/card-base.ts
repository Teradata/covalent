import { addHasRemoveClass, BaseElement } from '@material/mwc-base/base-element';
import { CloseReason } from '@material/banner/constants';

import { html, LitElement, TemplateResult } from 'lit';
import { classMap } from 'lit/directives/class-map';
import { property, query } from 'lit/decorators.js';

export class CardBase extends LitElement {
  /**
   * The title of the card
   */
  @property()
  cardTitle = '';

  /**
   * The sub-title of the card
   */
  @property()
  subTitle = '';

  /**
   * Style the card as an outline variant
   */
  @property({type: Boolean}) outlined = false;
   
  override render() {
    const classes = {
      'mdc-card': true,
      'mdc-card--outlined': this.outlined,
    };
    return html`
      <div class="${classMap(classes)}">
        <div class="mdc-card__primary-action">
            <!-- <div class="mdc-card__media mdc-card__media--square">
                <div class="mdc-card__media-content">Title</div>
            </div> -->
            <slot></slot>
            <div class="mdc-card__ripple"></div>
        </div>
        <div class="mdc-card__actions">
            <slot name="card-actions"></slot>
        </div>
      </div>`;
  }
}