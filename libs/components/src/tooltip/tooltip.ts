import {
  addHasRemoveClass,
  BaseElement,
} from '@material/mwc-base/base-element';
import { MDCTooltipAdapter, events } from '@material/tooltip';
import { customElement, property, query } from 'lit/decorators.js';
import { html, PropertyValues } from 'lit';
import { MDCTooltipFoundation } from './tooltip.foundation';
import styles from './tooltip.scss';

declare global {
  interface HTMLElementTagNameMap {
    'td-tooltip': CovalentTooltipBase;
  }
}

@customElement('td-tooltip')
export class CovalentTooltipBase extends BaseElement {
  protected mdcFoundation!: MDCTooltipFoundation;
  protected readonly mdcFoundationClass = MDCTooltipFoundation;
  static override styles = [styles];

  @query('.mdc-tooltip') protected mdcRoot!: HTMLElement;
  @query('.mdc-tooltip__surface') protected mdcSurface!: HTMLElement;

  @property({ type: Object }) anchor?: HTMLElement;
  @property() richTitle?: string;
  @property({ type: Boolean, reflect: true }) rich?: boolean;
  @property({ type: Boolean, reflect: true }) persistent?: HTMLElement;
  @property({ type: Number }) showDelay?: number;
  @property({ type: Number }) hideDelay?: number;

  protected createAdapter(): MDCTooltipAdapter {
    return {
      ...addHasRemoveClass(this.mdcRoot),
      getAttribute: (attr: string) => this.mdcRoot.getAttribute(attr),
      setAttribute: (attr: string, value: string) =>
        this.mdcRoot.setAttribute(attr, value),
      removeAttribute: (attr: string) => this.mdcRoot.removeAttribute(attr),
      getComputedStyleProperty: (propertyName: string) =>
        getComputedStyle(this.mdcRoot, propertyName).cssText,
      setStyleProperty: (propertyName: string, value: string) =>
        this.mdcRoot.style.setProperty(propertyName, value),
      setSurfaceAnimationStyleProperty: (propertyName: string, value: string) =>
        this.mdcSurface.style.setProperty(propertyName, value),
      getViewportWidth: () =>
        Math.max(
          document.documentElement.clientWidth || 0,
          window.innerWidth || 0
        ),
      getViewportHeight: () =>
        Math.max(
          document.documentElement.clientHeight || 0,
          window.innerHeight || 0
        ),
      getTooltipSize: () =>
        Object.assign({
          width: this.mdcRoot.clientWidth,
          height: this.mdcRoot.clientHeight,
        }),
      getAnchorBoundingRect: () => this.anchor?.getBoundingClientRect() ?? null,
      getParentBoundingRect: () =>
        this.renderRoot.getRootNode().parentElement?.getBoundingClientRect() ??
        null,
      getAnchorAttribute: (attr: string) =>
        this.anchor?.getAttribute(attr) ?? null,
      setAnchorAttribute: (attr: string, value: string) =>
        this.anchor?.setAttribute(attr, value),
      isRTL: () => false,
      anchorContainsElement: (element: HTMLElement) =>
        this.anchor?.contains(element) ?? false,
      tooltipContainsElement: (element: HTMLElement) => this.contains(element),
      focusAnchorElement: () => this.anchor?.focus(),
      registerEventHandler: (evtType, handler) =>
        this.mdcRoot?.addEventListener(evtType, handler),
      deregisterEventHandler: (evtType, handler) =>
        this.mdcRoot?.removeEventListener(evtType, handler),
      registerAnchorEventHandler: (evtType, handler) =>
        this.anchor?.addEventListener(evtType, handler),
      deregisterAnchorEventHandler: (evtType, handler) =>
        this.anchor?.removeEventListener(evtType, handler),
      registerDocumentEventHandler: (evtType, handler) =>
        document.addEventListener(evtType, handler),
      deregisterDocumentEventHandler: (evtType, handler) =>
        document.removeEventListener(evtType, handler),
      registerWindowEventHandler: (evtType, handler) =>
        window.addEventListener(evtType, handler),
      deregisterWindowEventHandler: (evtType, handler) =>
        window.removeEventListener(evtType, handler),
      notifyHidden: () => this.dispatchEvent(new Event(events.HIDDEN)),
      getTooltipCaretBoundingRect: () => null,
      setTooltipCaretStyle: () => {
        //
      },
      clearTooltipCaretStyles: () => {
        //
      },
      getActiveElement: () => document.activeElement,
    };
  }

  protected updated(changedProps: PropertyValues): void {
    super.updated(changedProps);
    if (this.showDelay !== undefined && !isNaN(this.showDelay)) {
      this.mdcFoundation.setShowDelay(this.showDelay);
    }

    if (this.hideDelay !== undefined && !isNaN(this.hideDelay)) {
      this.mdcFoundation.setHideDelay(this.hideDelay);
    }
  }

  protected firstUpdated(): void {
    super.firstUpdated();

    this.anchor?.addEventListener('click', () =>
      this.mdcFoundation.handleAnchorClick()
    );
    this.anchor?.addEventListener('mouseenter', () =>
      this.mdcFoundation.handleAnchorMouseEnter()
    );
    this.anchor?.addEventListener('touchstart', () =>
      this.mdcFoundation.handleAnchorTouchstart()
    );

    if (!this.persistent) {
      this.anchor?.addEventListener('mouseleave', () =>
        this.mdcFoundation.handleAnchorMouseLeave()
      );
      this.anchor?.addEventListener('touchend', () =>
        this.mdcFoundation.handleAnchorTouchend()
      );
    }
  }

  disconnectedCallback(): void {
    super.connectedCallback();
    this.anchor?.removeEventListener('click', () =>
      this.mdcFoundation.handleAnchorClick()
    );
    this.anchor?.removeEventListener('mouseenter', () =>
      this.mdcFoundation.handleAnchorMouseEnter()
    );
    this.anchor?.removeEventListener('mouseleave', () =>
      this.mdcFoundation.handleAnchorMouseLeave()
    );
    this.anchor?.removeEventListener('touchstart', () =>
      this.mdcFoundation.handleAnchorTouchstart()
    );
    this.anchor?.removeEventListener('touchend', () =>
      this.mdcFoundation.handleAnchorTouchend()
    );
  }

  override render() {
    return html`
      <div
        class="mdc-tooltip ${this.rich ? 'mdc-tooltip--rich' : ''}"
        role="tooltip"
        aria-hidden="true"
        data-mdc-tooltip-persistent="true"
      >
        <div class="mdc-tooltip__surface mdc-tooltip__surface-animation">
          ${this.rich
            ? html`<div class="mdc-tooltip__title">${this.richTitle}</div>
                <div class="mdc-tooltip__content">
                  <slot></slot>
                </div>
                <div class="mdc-tooltip--rich-actions">
                  <slot name="actionItems"></slot>
                </div>`
            : html`<slot></slot>`}
        </div>
      </div>
    `;
  }
}
