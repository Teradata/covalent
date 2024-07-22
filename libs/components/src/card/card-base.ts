import { html, LitElement } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { property } from 'lit/decorators.js';

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
   * Displays the action bar
   */
  @property({ type: Boolean }) actionBar = false;

  /**
   * Displays the ripple affect in primary area
   */
  @property({ type: Boolean }) interactive = false;

  /**
   * Style the card as an outline variant
   */
  @property({ type: Boolean }) outlined = false;

  /**
   * Style the card 100% height
   */
  @property({ type: Boolean }) fullHeight = false;

  override render() {
    const classes = {
      'mdc-card': true,
      'mdc-card--outlined': this.outlined,
      'cv-height-full': this.fullHeight,
    };
    return html` <div class="${classMap(classes)}">
      ${this.cardTitle
        ? html`
            <div class="mdc-card__actions mdc-typography--headline5">
              ${this.cardTitle}
            </div>
          `
        : ''}
      ${this.interactive
        ? html`
            <div class="mdc-card__primary-action">
              <slot></slot>
              <div class="mdc-card__ripple"></div>
            </div>
          `
        : '<slot></slot>'}
      ${this.actionBar
        ? html`
            <div class="mdc-card__actions">
              <slot name="card-actions"></slot>
            </div>
          `
        : ''}
    </div>`;
  }
}
