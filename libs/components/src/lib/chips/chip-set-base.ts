import { MDCChipSetAdapter } from '@material/chips/chip-set/adapter';
import { MDCChipSetAttributes, MDCChipSetEvents } from '@material/chips/chip-set/constants';
import { MDCChipEvents } from '@material/chips/chip/constants';
import { MDCChipActionType, MDCChipActionFocusBehavior } from '@material/chips/action/constants';
import { MDCChipAnimation } from '@material/chips/chip/constants';
import { ChipAnimationEvent, ChipInteractionEvent, ChipNavigationEvent } from '@material/chips/chip-set/types';
import { MDCChipSetFoundation } from '@material/chips/chip-set/foundation';
import { announce } from '@material/dom/announce';
import { property, query } from 'lit/decorators.js';
import { html, LitElement, PropertyValues } from 'lit';
import { CovalentChip } from './chip';

export class ChipSetBase extends LitElement {
    protected mdcFoundation!: MDCChipSetFoundation;

    @query('.mdc-evolution-chip-set') protected mdcRoot!: HTMLElement;

    /**
     * Set if the chips are selectable/actionable 
     */
    @property({type: Boolean, reflect: true}) selectable = false;

    /**
     * Set the chips are mulit-selectable
     */
    @property({type: Boolean, reflect: true}) multi = false;

    /**
    * The arial label for the the chip set
    */
    @property()
    label = '';

    @property({type: Number}) activeIndex = 0;

    protected _previousActiveIndex = -1;

    protected chips: CovalentChip[] = [];

    override render () {
        return html`<span class="mdc-evolution-chip-set" 
                          role="${ this.selectable || this.multi ? 'listbox' :  'grid' }" 
                          aria-label="${this.label}" 
                          aria-multiselectable="${ this.multi }">
                      <span class="mdc-evolution-chip-set__chips" role="presentation">
                        <slot></slot>
                      </span>
                    </span>`;
    }

    protected override async updated(changedProps: PropertyValues) {
      super.updated(changedProps);
      await this.updateComplete;
      if (this.activeIndex != this._previousActiveIndex) {
        this.mdcFoundation.setChipSelected(this.activeIndex, MDCChipActionType.PRIMARY, true);
      }
    }

    protected override firstUpdated(changedProps: PropertyValues) {
      super.firstUpdated(changedProps)
      const slot = this.shadowRoot?.querySelector('slot');
      const chipEls = slot?.assignedElements().filter((node) => node instanceof CovalentChip) ?? [];

      for (let i = 0; i < chipEls.length; i++) {
        const chip = (chipEls[i] as CovalentChip);
        this.chips.push(chip)
      }

      if (this.mdcFoundation !== undefined) {
        this.mdcFoundation.destroy();
      }
      this.mdcFoundation = new MDCChipSetFoundation(this.createAdapter());
      this.mdcFoundation.init();
    }

    override connectedCallback(): void {
      super.connectedCallback();
      this.addEventListener(MDCChipEvents.ANIMATION, this._handleChipAnimation);
      this.addEventListener(MDCChipEvents.INTERACTION, this._handleChipInteraction);
      this.addEventListener(MDCChipEvents.NAVIGATION, this._handleChipNavigation);
    }

    override disconnectedCallback(): void {
      super.disconnectedCallback();
      this.removeEventListener(MDCChipEvents.ANIMATION, this._handleChipAnimation);
      this.removeEventListener(MDCChipEvents.INTERACTION, this._handleChipInteraction);
      this.removeEventListener(MDCChipEvents.NAVIGATION, this._handleChipNavigation);
    }

    protected createAdapter(): MDCChipSetAdapter {
        return {
          /** Announces the message via an aria-live region */
          announceMessage: announce,
          /** Emits the given event with the given detail. */
          emitEvent: <D extends object>(eventName: MDCChipSetEvents, eventDetail: D) => this.dispatchEvent(new CustomEvent(eventName, { bubbles: true, detail: eventDetail})),
          /** Returns the value for the given attribute, if it exists. */
          getAttribute: (attrName: MDCChipSetAttributes) => this.mdcRoot.getAttribute(attrName),
          /** Returns the actions provided by the child chip at the given index. */
          getChipActionsAtIndex:(index: number) => this.chips[index].getActions(),
          /** Returns the number of child chips. */
          getChipCount: () => this.chips.length,
          /** Returns the ID of the chip at the given index. */
          getChipIdAtIndex: (index: number) => this.chips[index].getElementID(),
          /** Returns the index of the child chip with the matching ID. */
          getChipIndexById: (chipID: string) => this.chips.findIndex((chip) => chip.getElementID() === chipID),
          /** Proxies to the MDCChip#isActionFocusable method. */
          isChipFocusableAtIndex: (index: number, actionType: MDCChipActionType) => this.chips[index].isActionFocusable(actionType),
          /** Proxies to the MDCChip#isActionSelectable method. */
          isChipSelectableAtIndex: (index: number, actionType: MDCChipActionType) => this.chips[index].isActionSelectable(actionType),
          /** Proxies to the MDCChip#isActionSelected method. */
          isChipSelectedAtIndex: (index: number, actionType: MDCChipActionType) => this.chips[index].isActionSelected(actionType),
          /** Removes the chip at the given index. */
          removeChipAtIndex: (index: number) => this.chips[index].remove(),
          /** Proxies to the MDCChip#setActionFocus method. */
          setChipFocusAtIndex: (index: number, action: MDCChipActionType, focus: MDCChipActionFocusBehavior) => this.chips[index].setActionFocus(action, focus),
          /** Proxies to the MDCChip#setActionSelected method. */
          setChipSelectedAtIndex: (index: number, actionType: MDCChipActionType, isSelected: boolean) => this.chips[index].setActionSelected(actionType, isSelected),
          /** Starts the chip animation at the given index. */
          startChipAnimationAtIndex: (index: number, animation: MDCChipAnimation) => this.chips[index].startAnimation(animation),
        }
    }

    private _handleChipAnimation(event: Event): void {
      this.mdcFoundation.handleChipAnimation(event as ChipAnimationEvent)
    }

    private _handleChipInteraction(event: Event): void {
      this.mdcFoundation.handleChipInteraction(event as ChipInteractionEvent)
    }

    private _handleChipNavigation(event: Event): void {
      this.mdcFoundation.handleChipNavigation(event as ChipNavigationEvent);
    }
}