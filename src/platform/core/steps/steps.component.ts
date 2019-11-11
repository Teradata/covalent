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
  Vertical = 'vertical',
  Horizontal = 'horizontal',
}

@Component({
  selector: 'td-steps',
  styleUrls: ['./steps.component.scss'],
  templateUrl: './steps.component.html',
  /* tslint:disable-next-line */
  host: {
    class: 'td-steps',
  },
})
export class TdStepsComponent implements OnDestroy, AfterContentInit {
  private _subcriptions: Subscription[];
  private _mode: StepMode = StepMode.Vertical;
  private _steps: QueryList<TdStepComponent>;

  @ContentChildren(TdStepComponent, { descendants: true })
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
    if (mode === StepMode.Horizontal) {
      this._mode = StepMode.Horizontal;
    } else {
      this._mode = StepMode.Vertical;
    }
  }
  get mode(): StepMode {
    return this._mode;
  }

  /**
   * stepChange?: function
   * Method to be executed when [stepChange] event is emitted.
   * Emits an [IStepChangeEvent] implemented object.
   */
  @Output() stepChange: EventEmitter<IStepChangeEvent> = new EventEmitter<IStepChangeEvent>();

  /**
   * Executed after content is initialized, loops through any [TdStepComponent] children elements,
   * assigns them a number and subscribes as an observer to their [activated] event.
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
    return (
      this._steps.filter((step: TdStepComponent) => {
        return step.active;
      }).length > 0
    );
  }

  /**
   * Wraps previous and new [TdStepComponent] numbers in an object that implements [IStepChangeEvent]
   * and emits [stepChange] event.
   */
  private _onStepSelection(step: TdStepComponent): void {
    if (this.prevStep !== step) {
      const prevStep: TdStepComponent = this.prevStep;
      this.prevStep = step;
      const event: IStepChangeEvent = {
        newStep: step,
        prevStep,
      };
      this._deactivateAllBut(step);
      this.stepChange.emit(event);
    }
  }

  /**
   * Loops through [TdStepComponent] children elements and deactivates them ignoring the one passed as an argument.
   */
  private _deactivateAllBut(activeStep: TdStepComponent): void {
    this._steps
      .filter((step: TdStepComponent) => step !== activeStep)
      .forEach((step: TdStepComponent) => {
        step.active = false;
      });
  }

  private _registerSteps(): void {
    this._subcriptions = [];
    this._steps.toArray().forEach((step: TdStepComponent) => {
      const subscription: Subscription = step.activated.asObservable().subscribe(() => {
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
