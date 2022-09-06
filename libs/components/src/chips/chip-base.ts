import { addHasRemoveClass, BaseElement } from '@material/mwc-base';
import { MDCChipFoundation } from './foundation';
import {
  MDCChipAttributes,
  MDCChipCssClasses,
  MDCChipEvents,
  MDCChipAnimation,
} from '@material/chips/chip/constants';
import { MDCChipAction, MDCChipActionEvents } from '@material/chips/action';
import {
  MDCChipActionFocusBehavior,
  MDCChipActionType,
} from '@material/chips/action/constants';
import { MDCChipAdapter } from '@material/chips/chip/adapter';
import { property, query } from 'lit/decorators.js';
import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';

let tdChipsId = 0;

export class ChipBase extends BaseElement {
  protected mdcFoundation?: MDCChipFoundation;
  protected readonly mdcFoundationClass = MDCChipFoundation;
  protected actions!: Map<MDCChipActionType, MDCChipAction>;
  protected chipId!: number;

  @query('.mdc-evolution-chip') protected mdcRoot!: HTMLElement;

  /**
   * The text label of the chip
   */
  @property()
  label = '';

  /**
   * The icon name to use for primary or leading chip
   */
  @property({ type: String }) icon = '';

  @property({ type: Boolean, reflect: true }) trailingIcon = false;

  @property({ type: Boolean, reflect: true }) avatar = false;

  /**
   * The text label of the chip
   */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /**
   * Set the filter chip varient
   */
  @property({ type: Boolean, reflect: true }) filter = false;

  /**
   * The state representation secondary|negative|positive|caution
   */
  @property()
  state?: 'secondary' | 'negative' | 'positive' | 'caution';

  constructor() {
    super();
    this.chipId = tdChipsId++;
  }

  protected override render() {
    const classes = {
      'mdc-evolution-chip': true,
      'mdc-evolution-chip--disabled': this.disabled,
      'mdc-evolution-chip--with-trailing-action': this.trailingIcon,
      'mdc-evolution-chip--with-primary-graphic':
        !this.trailingIcon && this.icon,
      'mdc-evolution-chip--with-primary-icon': this.icon && !this.filter,
      'mdc-evolution-chip--filter': this.filter,
      'mdc-evolution-chip--selectable': this.filter,
      'mdc-evolution-chip--with-avatar': this.avatar,
      secondary: this.state === 'secondary',
      negative: this.state === 'negative',
      caution: this.state === 'caution',
    };
    return html`
      <span
        class="${classMap(classes)}"
        role="${this.filter ? 'presentation' : 'row'}"
        id="td-chip-${this.chipId}"
      >
        <span
          class="mdc-evolution-chip__cell mdc-evolution-chip__cell--primary"
          role="${this.filter ? 'presentation' : 'gridcell'}"
        >
          <button
            class="mdc-evolution-chip__action mdc-evolution-chip__action--primary"
            role="${this.filter ? 'option' : ''}"
            type="button"
            tabindex="-1"
          >
            <span
              class="mdc-evolution-chip__ripple mdc-evolution-chip__ripple--primary"
            ></span>
            ${(!this.trailingIcon && this.icon) || this.filter
              ? this.renderGraphic()
              : ''}
            <span class="mdc-evolution-chip__text-label">${this.label}</span>
          </button>
        </span>
        ${this.trailingIcon ? this.renderTrailing() : ''}
      </span>
    `;
  }

  protected override firstUpdated() {
    super.firstUpdated();

    this.actions = new Map();
    const actionEls = this.mdcRoot.querySelectorAll(
      '.mdc-evolution-chip__action'
    );
    for (let i = 0; i < actionEls.length; i++) {
      const action = new MDCChipAction(actionEls[i]);
      this.actions.set(action.actionType(), action);
      actionEls[i].addEventListener(
        MDCChipActionEvents.INTERACTION,
        (event) => {
          this.mdcFoundation?.handleActionInteraction(event as any);
        }
      );
      actionEls[i].addEventListener(MDCChipActionEvents.NAVIGATION, (event) => {
        this.mdcFoundation?.handleActionNavigation(event as any);
      });
    }
  }

  protected renderGraphic() {
    const graphicContent = this.filter
      ? this.renderCheckMark()
      : this.renderIcon();
    return html`<span class="mdc-evolution-chip__graphic">
      ${graphicContent}
    </span>`;
  }

  protected renderCheckMark() {
    return html` <span class="mdc-evolution-chip__checkmark">
      <svg class="mdc-evolution-chip__checkmark-svg" viewBox="-2 -3 30 30">
        <path
          class="mdc-evolution-chip__checkmark-path"
          fill="none"
          d="M1.73,12.91 8.1,19.28 22.79,4.59"
        />
      </svg>
    </span>`;
  }

  protected renderIcon(trailing = false) {
    return html` <span
      class="mdc-evolution-chip__icon mdc-evolution-chip__icon--${trailing
        ? 'trailing'
        : 'primary'}"
    >
      ${this.icon}
    </span>`;
  }

  protected renderTrailing() {
    return html` <span
      class="mdc-evolution-chip__cell mdc-evolution-chip__cell--trailing"
      role="gridcell"
    >
      <button
        class="mdc-evolution-chip__action mdc-evolution-chip__action--trailing"
        type="button"
        tabindex="-1"
        data-mdc-deletable="true"
        aria-label="Remove ${this.label}"
      >
        <span
          class="mdc-evolution-chip__ripple mdc-evolution-chip__ripple--trailing"
        ></span>
        ${this.renderIcon(true)}
      </button>
    </span>`;
  }

  protected createAdapter(): MDCChipAdapter {
    return {
      ...addHasRemoveClass(this.mdcRoot),
      emitEvent: <D extends object>(eventName: MDCChipEvents, eventDetail: D) =>
        this.dispatchEvent(
          new CustomEvent(eventName, { bubbles: true, detail: eventDetail })
        ),
      /** Returns the child actions provided by the chip. */
      getActions: () => {
        const actions: MDCChipActionType[] = [];
        for (const [key] of this.actions) {
          actions.push(key);
        }
        return actions;
      },
      /** Returns the value for the given attribute, if it exists. */
      getAttribute: (attrName: MDCChipAttributes) =>
        this.mdcRoot.getAttribute(attrName),
      /** Returns the ID of the root element. */
      getElementID: () => this.mdcRoot.getAttribute('id') ?? '',
      /** Returns the offset width of the root element. */
      getOffsetWidth: () => this.mdcRoot.offsetWidth,
      /** Returns true if the root element has the given class. */
      hasClass: (className: MDCChipCssClasses) =>
        this.mdcRoot.classList.contains(className),
      /** Proxies to the MDCChipAction#isSelectable method. */
      isActionSelectable: (action: MDCChipActionType) =>
        this.actions.get(action)?.isSelectable() ?? true,
      /** Proxies to the MDCChipAction#isSelected method. */
      isActionSelected: (action: MDCChipActionType) =>
        this.actions.get(action)?.isSelected() ?? false,
      /** Proxies to the MDCChipAction#isFocusable method. */
      isActionFocusable: (action: MDCChipActionType) =>
        this.actions.get(action)?.isFocusable() ?? true,
      /** Proxies to the MDCChipAction#isDisabled method. */
      isActionDisabled: (action: MDCChipActionType) =>
        this.actions.get(action)?.isDisabled() ?? false,
      /** Returns true if the text direction is right-to-left. */
      isRTL: () =>
        window.getComputedStyle(this.mdcRoot).getPropertyValue('direction') ===
        'rtl',
      /** Proxies to the MDCChipAction#setDisabled method. */
      setActionDisabled: (action: MDCChipActionType, isDisabled: boolean) =>
        this.actions.get(action)?.setDisabled(isDisabled),
      /** Proxies to the MDCChipAction#setFocus method. */
      setActionFocus: (
        action: MDCChipActionType,
        behavior: MDCChipActionFocusBehavior
      ) => this.actions.get(action)?.setFocus(behavior),
      /** Proxies to the MDCChipAction#setSelected method. */
      setActionSelected: (action: MDCChipActionType, isSelected: boolean) =>
        this.actions.get(action)?.setSelected(isSelected),
      /** Sets the style property to the given value. */
      setStyleProperty: (property: string, value: string) =>
        this.mdcRoot.style.setProperty(property, value),
    };
  }

  getActions() {
    return this.mdcFoundation?.getActions() ?? [];
  }

  getElementID() {
    return this.mdcFoundation?.getElementID() ?? '';
  }

  isActionFocusable(action: MDCChipActionType) {
    return this.mdcFoundation?.isActionFocusable(action) ?? false;
  }

  isActionSelectable(action: MDCChipActionType) {
    return this.mdcFoundation?.isActionSelectable(action) ?? false;
  }

  isActionSelected(action: MDCChipActionType) {
    return this.mdcFoundation?.isActionSelected(action) ?? false;
  }

  setActionFocus(action: MDCChipActionType, focus: MDCChipActionFocusBehavior) {
    return this.mdcFoundation?.setActionFocus(action, focus);
  }

  setActionSelected(actionType: MDCChipActionType, isSelected: boolean) {
    return this.mdcFoundation?.setActionSelected(actionType, isSelected);
  }

  startAnimation(animation: MDCChipAnimation) {
    return this.mdcFoundation?.startAnimation(animation);
  }
}
