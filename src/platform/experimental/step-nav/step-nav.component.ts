import {
  Component,
  Input,
  ContentChildren,
  QueryList,
  ChangeDetectionStrategy,
  AfterContentInit,
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

import { TdStepLinkComponent } from './step-link/step-link.component';

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
export class TdStepNavComponent implements AfterContentInit {

  private _activeLinkChanged: boolean;
  private _mode: StepMode = StepMode.Vertical;

  // step links
  @ContentChildren(TdStepLinkComponent) _stepLinks: QueryList<TdStepLinkComponent>;
  
  constructor(private _elementRef: ElementRef, private _changeDetectorRef: ChangeDetectorRef) { }

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
