import { Component, Input, Output } from '@angular/core';
import { OnDestroy, AfterContentInit } from '@angular/core';
import { EventEmitter, ContentChildren, QueryList } from '@angular/core';
import { Subscription } from 'rxjs';

import { TdStepComponent } from './step.component';

export interface IStepChangeEvent {
  newStep: TdStepComponent;
  prevStep: TdStepComponent;
}

export enum StepMode {
  Vertical = <any>'vertical',
  Horizontal = <any>'horizontal',
}

@Component({
  selector: 'td-steps',
  styleUrls: ['./steps.component.scss' ],
  templateUrl: './steps.component.html',
})
export class TdStepsComponent implements OnDestroy, AfterContentInit {

  private _subcriptions: Subscription[];
  private _mode: StepMode = StepMode.Vertical;
  private _steps: QueryList<TdStepComponent>;

  @ContentChildren(TdStepComponent)
  set stepsContent(steps: QueryList<TdStepComponent>) {
    if (steps) {
      this._steps = steps;
      this._registerSteps();
    }
  }

  get steps(): TdStepComponent[] {
    return this._steps.toArray();
  }
  prevStep: TdStepComponent;

  /**
   * mode?: StepMode or ["vertical" | "horizontal"]
   * Defines if the mode of the [TdStepsComponent].  Defaults to [StepMode.Vertical | "vertical"]
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
   * stepChange?: function
   * Method to be executed when [onStepChange] event is emitted.
   * Emits an [IStepChangeEvent] implemented object.
   */
  @Output('stepChange') onStepChange: EventEmitter<IStepChangeEvent> = new EventEmitter<IStepChangeEvent>();

  /**
   * Executed after content is initialized, loops through any [TdStepComponent] children elements,
   * assigns them a number and subscribes as an observer to their [onActivated] event.
   */
  ngAfterContentInit(): void {
    this._registerSteps();
  }

  /**
   * Unsubscribes from [TdStepComponent] children elements when component is destroyed.
   */
  ngOnDestroy(): void {
    this._deregisterSteps();
  }

  /**
   * Returns 'true' if [mode] equals to [StepMode.Horizontal | 'horizontal'], else 'false'.
   */
  isHorizontal(): boolean {
    return this._mode === StepMode.Horizontal;
  }

  /**
   * Returns 'true' if [mode] equals to [StepMode.Vertical | 'vertical'], else 'false'.
   */
  isVertical(): boolean {
    return this._mode === StepMode.Vertical;
  }

  areStepsActive(): boolean {
    return this._steps.filter((step: TdStepComponent) => {
      return step.active;
    }).length > 0;
  }

  /**
   * Wraps previous and new [TdStepComponent] numbers in an object that implements [IStepChangeEvent]
   * and emits [onStepChange] event.
   */
  private _onStepSelection(step: TdStepComponent): void {
    if (this.prevStep !== step) {
      let prevStep: TdStepComponent = this.prevStep;
      this.prevStep = step;
      let event: IStepChangeEvent = {
        newStep: step,
        prevStep: prevStep,
      };
      this._deactivateAllBut(step);
      this.onStepChange.emit(event);
    }
  }

  /**
   * Loops through [TdStepComponent] children elements and deactivates them ignoring the one passed as an argument.
   */
  private _deactivateAllBut(activeStep: TdStepComponent): void {
    this._steps.filter((step: TdStepComponent) => step !== activeStep)
    .forEach((step: TdStepComponent) => {
      step.active = false;
    });
  }

  private _registerSteps(): void {
    this._subcriptions = [];
    this._steps.toArray().forEach((step: TdStepComponent) => {
      let subscription: Subscription = step.onActivated.asObservable().subscribe(() => {
        this._onStepSelection(step);
      });
      this._subcriptions.push(subscription);
    });
  }

  private _deregisterSteps(): void {
    if (this._subcriptions) {
      this._subcriptions.forEach((subs: Subscription) => {
        subs.unsubscribe();
      });
      this._subcriptions = undefined;
    }
  }
}
