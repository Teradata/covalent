import { Component, ChangeDetectionStrategy, ChangeDetectorRef, Input, ElementRef } from '@angular/core';

import { coerceBooleanProperty } from '@angular/cdk/coercion';

import { ICanDisable, ICanDisableRipple } from '@covalent/core/common';
import { _TdStepMixinBase, StepState } from '../../step.component';

@Component({
  selector: '[td-step-link],[tdStepLink]',
  styleUrls: ['./nav-step-link.component.scss'],
  templateUrl: './nav-step-link.component.html',
  inputs: ['disabled', 'disableRipple'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  /* tslint:disable-next-line */
  host: {
    '[class.td-step-link]': 'true',
    '[attr.tabindex]': 'disabled ? -1 : (tabIndex || 0)',
    '[attr.disabled]': 'disabled || null',
    '[class.mat-disabled]': 'disabled || null',
    '(click)': '_handleClick($event)',
  },
})
export class TdNavStepLinkComponent extends _TdStepMixinBase implements ICanDisable, ICanDisableRipple {

  private _active: boolean = false;
  private _state: StepState = StepState.None;

  // Number to display in step header
  number: number;

  /**
   * state?: StepState or ['none' | 'required' | 'complete']
   * Sets state of component depending on value.
   * Defaults to [StepState.None | 'none'].
   */
  @Input('state')
  set state(state: StepState) {
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
  }
  get state(): StepState {
    return this._state;
  }

  /**
   * label?: string
   * Label to display in step header
   * Defaults to empty
   */
  @Input('label') label: string;

  /**
   * sublabel?: string
   * Sublabel to display in step header
   * Defaults to empty
   */
  @Input('sublabel') sublabel: string;

  /**
   * active?: boolean
   * Toggles component between active/deactive.
   */
  @Input('active')
  set active(active: boolean) {
    this._active = coerceBooleanProperty(active);
    this._changeDetectorRef.markForCheck();
  }
  get active(): boolean {
    return this._active;
  }

  /**
   * tabIndex?: number
   * tabIndex for component
   */
  @Input('tabIndex') tabIndex: number;

  constructor(private _changeDetectorRef: ChangeDetectorRef,
              public elementRef: ElementRef) {
    super();
  }

  _handleClick(click: Event): void {
    if (this.disabled) {
      click.preventDefault();
      click.stopImmediatePropagation();
    }
  }

}
