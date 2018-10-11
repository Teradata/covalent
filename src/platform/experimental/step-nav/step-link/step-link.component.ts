import {
  Component,
  Input,
  Directive,
  TemplateRef,
  ViewContainerRef,
  ContentChild,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ElementRef,
} from '@angular/core';
import { TemplatePortalDirective, TemplatePortal } from '@angular/cdk/portal';
import { ICanDisable, mixinDisabled, ICanDisableRipple, mixinDisableRipple } from '@covalent/core/common';
import { Router } from '@angular/router';
import { StepState } from '../../../core/steps';

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

  /**
   * Number assigned to [TdStepHeaderComponent].
   */
  @Input('number') number: number;

  /**
   * Returns 'true' if [state] equals to [StepState.Required | 'required'], else 'false'.
   */
  isRequired(): boolean {
    return this.state === StepState.Required;
  }

  /** Whether the step link is active or not. */
  private _isActive: boolean = false;
  private _state: StepState = StepState.None;

  constructor(public elementRef: ElementRef,
              private _changeDetectorRef: ChangeDetectorRef,
              private _router: Router,) { 
                super();
              }

  /** Whether the step link is active. */
  @Input()
  get active(): boolean { 
    return this._isActive; 
  }

  set active(value: boolean) {
    if (this.disabled) {
      this._isActive = false;
      return;
    }
    else if (value !== this._isActive) {
      this._isActive = value;
    }
  }

  /**
   * label for td-step-link
   * Defaults to 'Step #'
   */
  @Input('label') label: string;

  /**
   * sublabel for td-step-link
   */
  @Input('sublabel') sublabel: string;

  /**
   * routerLink for td-step-link router 
   */
  @Input('routerLink') routerLink: string;

  /** Step link state as Complete, Required, None. */
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

  isComplete(): boolean {
    return this._state === StepState.Complete;
  }

}
