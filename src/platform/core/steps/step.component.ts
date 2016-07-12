import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { MdIcon } from '@angular2-material/icon';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';

import { TdToggleDirective } from '../directives/toggle/toggle.directive';

export enum StepState {
  None = <any>'none',
  Required = <any>'required',
  Complete = <any>'complete'
}

@Component({
  directives: [ MdIcon, MD_LIST_DIRECTIVES, TdToggleDirective ],
  moduleId: module.id,
  selector: 'td-step',
  styleUrls: [ 'step.component.css' ],
  templateUrl: 'step.component.html',
})
export class TdStepComponent {

  private _number: number;
  private _active: boolean = false;
  private _state: StepState = StepState.None;
  private _disabled: boolean = false;

  /**
   * Number assigned by [TdStepsComponent] parent element.
   */
  set number(num: number) {
    if (this._number > 0) {
      return;
    }
    this._number = num;
  }
  get number(): number {
    return this._number;
  }

  /**
   * label?: string
   * Sets label of [TdStepComponent] header.
   * Defaults to 'Step #'
   */
  @Input('label') label: string;

  /**
   * sublabel?: string
   * Sets sublabel of [TdStepComponent] header.
   */
  @Input('sublabel') sublabel: string;

  /**
   * active?: boolean
   * Toggles [TdStepComponent] between active/deactive.
   */
  @Input('active')
  set active(active: boolean) {
    this._setActive(active);
  };
  get active(): boolean {
    return this._active;
  };

  /**
   * disabled?: boolean
   * Disables icon and header, blocks click event and sets [TdStepComponent] to deactive if 'true'.
   */
  @Input('disabled')
  set disabled(disabled: boolean) {
    if (disabled && this._active) {
      this._active = false;
      this._onDeactivated();
    }
    this._disabled = disabled;
  };
  get disabled(): boolean {
    return this._disabled;
  };

  /**
   * state?: StepState or ['none' | 'required' | 'complete']
   * Sets state of [TdStepComponent] depending on value.
   * Defaults to [StepState.None | 'none'].
   */
  @Input('state')
  set state(state: any) {
    switch (state) {
      case StepState.Complete:
        this._state = StepState.Complete;
        break;
      case StepState.Required:
        this._state = StepState.Required;
        break;
      default:
        this._state = StepState.None;
        break;
    }
  };

  /**
   * activated?: function
   * Event emitted when [TdStepComponent] is activated.
   */
  @Output('activated') onActivated: EventEmitter<void> = new EventEmitter<void>();

  /**
   * deactivated?: function
   * Event emitted when [TdStepComponent] is deactivated.
   */
  @Output('deactivated') onDeactivated: EventEmitter<void> = new EventEmitter<void>();

  /**
   * Method executed when [TdStepComponent] is clicked.
   */
  clickEvent(): void {
    this._setActive(!this._active);
  };

  /**
   * Returns 'true' if [state] equals to [StepState.Complete | 'complete'], else 'false'.
   */
  isComplete(): boolean {
    return this._state === StepState.Complete;
  };

  /**
   * Returns 'true' if [state] equals to [StepState.Required | 'required'], else 'false'.
   */
  isRequired(): boolean {
    return this._state === StepState.Required;
  };

  /**
   * Method to change active state internally and emit the [onActivated] event if 'true' or [onDeactivated] 
   * event if 'false'. (Blocked if [disabled] is 'true')
   */
  private _setActive(newActive: boolean): void {
    if (this._disabled) {
      return;
    }
    if (this._active !== newActive) {
      this._active = newActive;
      if (newActive) {
        this._onActivated();
      } else {
        this._onDeactivated();
      }
    }
  };

  private _onActivated(): void {
    this.onActivated.emit(undefined);
  };

  private _onDeactivated(): void {
    this.onDeactivated.emit(undefined);
  };
}
