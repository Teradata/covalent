import {
  addHasRemoveClass,
  BaseElement,
} from '@material/mwc-base/base-element';
import { observer } from '@material/mwc-base/observer';
import { MDCBannerAdapter } from '@material/banner/adapter';
import { Action, CloseReason, events } from '@material/banner/constants';

//TODO REMOVE ONCE default export is fixed
import MDCBannerFoundation from '../action-ribbon/foundation';

import { html, TemplateResult } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { property, query } from 'lit/decorators.js';

export class AlertBase extends BaseElement {
  protected mdcFoundation!: MDCBannerFoundation;
  protected readonly mdcFoundationClass = MDCBannerFoundation;

  @query('.mdc-banner') protected mdcRoot!: HTMLElement;
  @query('.mdc-banner__content') protected mdcContent!: HTMLElement;

  @property({ type: Boolean, reflect: true })
  @observer(function (this: AlertBase, value: boolean) {
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

  @property({ type: String }) titleText = '';

  @property({ type: String }) descriptionText = '';

  @property({ type: String }) icon = '';

  @property({ type: Boolean }) inline = false;
  /**
   * The state representation active|negative|positive|caution
   */
  @property()
  state = '';

  protected reason: CloseReason = CloseReason.UNSPECIFIED;

  protected override render() {
    const classes = {
      'mdc-banner': true,
      'td-banner--inline': this.inline,
      negative: this.state === 'negative',
      positive: this.state === 'positive',
      caution: this.state === 'caution',
      active: this.state === 'active',
    };
    return html` <div class="${classMap(classes)}" role="banner">
      <div class="mdc-banner__content" role="alertdialog" aria-live="assertive">
        <div class="mdc-banner__graphic-text-wrapper">
          ${this.icon ? this.renderIcon() : ''}
          <div class="mdc-banner__text">
            <span class="mdc-typography--body2">${this.titleText}</span>
            <div class="mdc-typography--body1">${this.descriptionText}</div>
          </div>
        </div>
        <div class="mdc-banner__actions">
          <slot name="action-items"></slot>
        </div>
      </div>
    </div>`;
  }

  /** @soyTemplate */
  protected renderIcon(): TemplateResult {
    return html` <div class="mdc-banner__graphic" role="img" alt="">
      <slot name="icon">
        <td-icon class="mdc-banner__icon"> ${this.icon} </td-icon>
      </slot>
    </div>`;
  }

  protected createAdapter(): MDCBannerAdapter {
    return {
      ...addHasRemoveClass(this.mdcRoot),
      getContentHeight: () => {
        return this.mdcContent.offsetHeight;
      },
      setStyleProperty: (property: any, value: string) => {
        this.mdcRoot.style.setProperty(property, value);
      },
      trapFocus: () => {
        /* */
      },
      releaseFocus: () => {
        /* */
      },
      notifyActionClicked: (action: Action) =>
        this.dispatchEvent(
          new CustomEvent(events.ACTION_CLICKED, {
            bubbles: true,
            cancelable: true,
            detail: { reason: action },
          })
        ),
      notifyClosed: () => {
        /* */
      },
      notifyClosing: () => {
        this.open = false;
      },
      notifyOpened: () => {
        /* */
      },
      notifyOpening: () => {
        this.open = true;
      },
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
