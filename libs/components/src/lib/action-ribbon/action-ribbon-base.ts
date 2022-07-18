import { addHasRemoveClass, BaseElement } from '@material/mwc-base/base-element';
import { observer } from '@material/mwc-base/observer';
import { MDCBannerAdapter } from '@material/banner/adapter';
import { CloseReason, events, selectors } from '@material/banner/constants';

//TODO REMOVE ONCE default export is fixed
import MDCBannerFoundation from './foundation';

import { html, TemplateResult } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { property, query } from 'lit/decorators.js';

export class ActionRibbonBase extends BaseElement {
  protected mdcFoundation!: MDCBannerFoundation;
  protected readonly mdcFoundationClass = MDCBannerFoundation;

  @query('.mdc-banner') protected mdcRoot!: HTMLElement;
  @query(selectors.CONTENT) protected mdcContent!: HTMLElement;
  @query(selectors.PRIMARY_ACTION) protected primaryActionEl!: HTMLElement;

  @property({type: Boolean, reflect: true})
  @observer(function(this: ActionRibbonBase, value: boolean) {
    if (this.mdcFoundation) {
      if (value) {
        this.mdcFoundation.open();
      } else {
        this.mdcFoundation.close(this.reason);
        this.reason = CloseReason.UNSPECIFIED;
      }
    }
  })
  open = true;

  @property({type: String}) labelText = '';

  @property({type: String}) icon = '';

  @property({type: Boolean}) centered = true;
   
  /**
   * The state representation active|negative|positive|caution
   */
  @property()
  state?: 'active'|'negative'|'positive'|'caution';
  
  protected reason: CloseReason = CloseReason.UNSPECIFIED;

  protected override render() {
    const classes = {
      'mdc-banner': true,
      'negative': this.state === 'negative',
      'positive': this.state === 'positive',
      'caution': this.state === 'caution',
      'active': this.state === 'active',
      'mdc-banner--centered': this.centered,
    };
    return html`
      <div class="${classMap(classes)}" role="banner">
      <div class="mdc-banner__content"
           role="alertdialog"
           aria-live="assertive">

        <div class="mdc-banner__graphic-text-wrapper">
          ${this.icon ? this.renderIcon() : ''}
          <div class="mdc-banner__text">${this.labelText}</div>
        </div>
        <div class="mdc-banner__actions">
          <slot name="action-items"></slot>
        </div>
      </div>
    </div>`;
  }

  protected renderIcon(): TemplateResult {
    return html`
    <div class="mdc-banner__graphic" role="img" alt="">
      <slot name="icon">
        <td-icon class="mdc-banner__icon">
        ${this.icon}
        </td-icon>
      </slot>
    </div>`;
  }

  protected createAdapter(): MDCBannerAdapter {
    return {
      ...addHasRemoveClass(this.mdcRoot),
      getContentHeight: () => this.mdcContent.offsetHeight,
      setStyleProperty: (property: any, value: string) => this.mdcRoot.style.setProperty(property, value),
      trapFocus: () => this.primaryActionEl?.focus(),
      releaseFocus: () => this.primaryActionEl?.blur(),
      notifyClosed: (reason: CloseReason) => this.dispatchEvent(new CustomEvent(events.CLOSED, {bubbles: true, cancelable: true, detail: {reason: reason}})),
      notifyClosing: (reason: CloseReason) => this.dispatchEvent(new CustomEvent(events.CLOSING, {bubbles: true, cancelable: true, detail: {reason: reason}})),
      notifyOpened: () => this.dispatchEvent(new CustomEvent(events.OPENED, {bubbles: true, cancelable: true})),
      notifyOpening: () => this.dispatchEvent(new CustomEvent(events.OPENING, {bubbles: true, cancelable: true})),
    };
  }

  /** @export */
  show() {
    this.open = true;
  }

  /** @export */
  close(reason = CloseReason.UNSPECIFIED) {
    this.reason = reason;
    this.open = false;
  }

  protected override firstUpdated() {
    super.firstUpdated();
    if (this.open) {
      this.mdcFoundation.open();
    }
  }
}