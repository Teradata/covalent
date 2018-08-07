import {
  Component,
  Input,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ElementRef,
} from '@angular/core';
import { ICanDisable, mixinDisabled, ICanDisableRipple, mixinDisableRipple } from '@covalent/core/common';

export enum StepState {
  None = 'none',
  Required = 'required',
  Complete = 'complete',
}

export class TdStepLink {}

/* tslint:disable-next-line */
export const _TdStepLinkMixinBase = mixinDisableRipple(mixinDisabled(TdStepLink));

@Component({
  selector: 'td-step-link, a[td-step-link]',
  styleUrls: ['./step-link.component.scss'],
  templateUrl: './step-link.component.html',
  inputs: ['disabled', 'disableRipple'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class TdStepLinkComponent extends _TdStepLinkMixinBase implements ICanDisable, ICanDisableRipple {

  /** Whether the step link is active or not. */
  private _isActive: boolean = false;
  private _state: StepState = StepState.None;
  
  constructor(public elementRef: ElementRef,
              private _changeDetectorRef: ChangeDetectorRef) { 
                super();
              }

  /** Whether the step link is active. */
  @Input()
  get active(): boolean { return this._isActive; }
  set active(value: boolean) {
    if (this.disabled) {
      this._isActive = false;
      return;
    }
    else if (value !== this._isActive) {
      this._isActive = value;
    }
  }

  ngAfterViewInit(): void {
    this._changeDetectorRef.markForCheck();
  }

  isComplete(): boolean {
    return this._state === StepState.Complete;
  }

  /**
   * Handles the click event, preventing default navigation if the tab link is disabled.
   */
  _handleClick(event: MouseEvent) {
    if (this.disabled) {
      event.preventDefault();
    }
  }

}
