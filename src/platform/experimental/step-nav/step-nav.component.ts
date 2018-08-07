import {
  Component,
  Input,
  ContentChildren,
  QueryList,
  ChangeDetectionStrategy,
  AfterContentInit,
  AfterContentChecked,
  ChangeDetectorRef,
  ElementRef,
} from '@angular/core';

import {
  Subscription,
  Subject,
} from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
} from 'rxjs/operators';

import { mixinColor, mixinDisableRipple, } from '@angular/material/core';

import { TdStepLinkComponent } from './step-link/step-link.component';

export class TdStepNavBase {
  constructor(public _elementRef: ElementRef) {}
}
export const _TDStepNavMixinBase = mixinDisableRipple(mixinColor(TdStepNavBase, 'primary'));

export enum StepMode {
  Vertical = 'vertical',
  Horizontal = 'horizontal',
}

@Component({
  selector: 'td-step-nav',
  styleUrls: ['./step-nav.component.scss'],
  templateUrl: './step-nav.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TdStepNavComponent extends _TDStepNavMixinBase implements AfterContentInit, AfterContentChecked {

  private _activeLinkChanged: boolean;
  private _activeLinkElement: ElementRef | null;
  private _mode: StepMode = StepMode.Vertical;

  /** 
   * Query list of all links of the step nav 
   */
  @ContentChildren(TdStepLinkComponent) _stepLinks: QueryList<TdStepLinkComponent>;

  /**
   * Mode of StepNav
   */
  @Input('mode')
  set mode(mode: StepMode) {
    switch (mode) {
      case StepMode.Horizontal:
        this._mode = StepMode.Horizontal;
        break;
      default:
        this._mode = StepMode.Vertical;
    }
  }
  get mode(): StepMode {
    return this._mode;
  }

  constructor(elementRef: ElementRef, private _changeDetectorRef: ChangeDetectorRef) { 
    super(elementRef);
  }

  /**
   * Horizontal nav stepper mode
   */
  isHorizontal(): boolean {
    return this._mode === StepMode.Horizontal;
  }

  /**
   * Vertical nav stepper mode
   */
  isVertical(): boolean {
    return this._mode === StepMode.Vertical;
  }

  ngAfterContentChecked(): void {
    if (this._activeLinkChanged) {
      const activeStep = this._stepLinks.find(step => step.active);

      this._activeLinkElement = activeStep ? activeStep.elementRef : null;
      this._activeLinkChanged = false;
    }
  }

  ngAfterContentInit(): void {
    this._changeDetectorRef.markForCheck();
  }

  /**
   * The total number of step links
   */
  get count(): number {
    return this._stepLinks ? this._stepLinks.length : 0;
  }


}
