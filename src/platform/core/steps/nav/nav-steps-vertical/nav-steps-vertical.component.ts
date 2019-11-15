import {
  Component,
  ContentChildren,
  ViewChild,
  QueryList,
  OnDestroy,
  ChangeDetectionStrategy,
  AfterContentInit,
  Renderer2,
  ChangeDetectorRef,
  ElementRef,
} from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { TdNavStepLinkComponent } from '../nav-step-link/nav-step-link.component';

@Component({
  selector: 'nav[td-steps][vertical]',
  styleUrls: ['./nav-steps-vertical.component.scss'],
  templateUrl: './nav-steps-vertical.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  /* tslint:disable-next-line */
  host: {
    class: 'td-steps td-steps-vertical',
  },
})
export class TdNavStepsVerticalComponent implements AfterContentInit, OnDestroy {
  private _separators: HTMLElement[] = [];

  /** Emits when the component is destroyed. */
  private readonly _destroyed: Subject<void> = new Subject<void>();

  // all the sub components, which are the individual steps
  @ContentChildren(TdNavStepLinkComponent, { descendants: true }) _steps: QueryList<TdNavStepLinkComponent>;

  @ViewChild('stepList', { static: true }) _stepList: ElementRef;

  constructor(private _renderer: Renderer2, private _changeDetectorRef: ChangeDetectorRef) {}

  ngAfterContentInit(): void {
    this._steps.changes.pipe(takeUntil(this._destroyed)).subscribe(() => {
      this._configureSteps();
      this._changeDetectorRef.markForCheck();
    });
    this._configureSteps();
    this._changeDetectorRef.markForCheck();
  }

  ngOnDestroy(): void {
    this._destroyed.next();
    this._destroyed.complete();
  }

  /**
   * Set the step line separators and display numbers
   */
  private _configureSteps(): void {
    this._separators.forEach((separator: HTMLElement) => {
      this._renderer.removeChild(this._stepList.nativeElement, separator);
    });
    const stepsArray: TdNavStepLinkComponent[] = this._steps.toArray();
    // set the index number of the step so can display that number in circle
    stepsArray.forEach((step: TdNavStepLinkComponent, index: number) => {
      if (index > 0 && index < stepsArray.length) {
        const separator: any = this._renderer.createElement('div');
        this._renderer.addClass(separator, 'td-vertical-line-wrapper');
        const separatorChild: any = this._renderer.createElement('div');
        this._renderer.addClass(separatorChild, 'td-vertical-line');
        this._renderer.appendChild(separator, separatorChild);
        this._separators.push(separator);
        this._renderer.insertBefore(this._stepList.nativeElement, separator, step.elementRef.nativeElement);
      }
      step.number = index + 1;
    });
  }
}
