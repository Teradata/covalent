import { Component, Input, Output } from '@angular/core';
import { OnDestroy, AfterContentInit } from '@angular/core';
import { EventEmitter, ContentChildren, QueryList } from '@angular/core';
import { Subscription } from 'rxjs';

import { TdStepComponent } from './step.component';

export interface IStepChangeEvent {
  newStep: number;
  prevStep: number;
}

export enum StepMode {
  Vertical = <any>'vertical',
  Horizontal = <any>'horizontal'
}

@Component({
  moduleId: module.id,
  selector: 'td-steps',
  styleUrls: [ 'steps.component.css' ],
  templateUrl: 'steps.component.html',
})
export class TdStepsComponent implements OnDestroy, AfterContentInit {

  private _prevStep: number = 0;
  private _subcriptions: Subscription[] = [];
  private _multiple: boolean = false;
  private _mode: StepMode = StepMode.Vertical;
  @ContentChildren(TdStepComponent) private _steps: QueryList<TdStepComponent>;

  get steps(): TdStepComponent[] {
    return this._steps.toArray();
  }

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
    this._changeMode();
  }
  get mode(): StepMode {
    return this._mode;
  }

  /**
   * multiple?: boolean
   * Defines if there can be one or multiple [TdStepComponent] elements active at the same time.
   */
  @Input('multiple')
  set multiple(multiple: any) {
    this._multiple = multiple !== '' ? (multiple === 'true' || multiple === true) : true;
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
    let stepCount: number = 0;
    this._steps.toArray().forEach((step: TdStepComponent) => {
      step.number = ++stepCount;
      step.mode = this._mode;
      let subscription: Subscription = step.onActivated.asObservable().subscribe(() => {
        this._onStepSelection(step.number);
      });
      this._subcriptions.push(subscription);
    });
  }

  /**
   * Unsubscribes from [TdStepComponent] children elements when component is destroyed.
   */
  ngOnDestroy(): void {
    this._subcriptions.forEach((subs: Subscription) => {
      subs.unsubscribe();
    });
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

  /**
   * Changes the mode on [TdStepComponent] children so their layout its rearranged.
   */
  private _changeMode(): void {
    if (this._steps) {
      this._steps.toArray().forEach((step: TdStepComponent) => {
        step.mode = this._mode;
      });
    }
  }

  /**
   * Wraps previous and new [TdStepComponent] numbers in an object that implements [IStepChangeEvent] 
   * and emits [onStepChange] event.
   */
  private _onStepSelection(stepNumber: number): void {
    if (this._prevStep !== stepNumber) {
      let prevStep: number = this._prevStep > 0 ? this._prevStep : undefined;
      this._prevStep = stepNumber;
      let event: IStepChangeEvent = {
        newStep: stepNumber,
        prevStep: prevStep,
      };
      if (!this._multiple) {
        this._deactivateAllBut(stepNumber);
      }
      this.onStepChange.emit(event);
    }
  }

  /**
   * Loops through [TdStepComponent] children elements and deactivates them ignoring the one passed as an argument.
   */
  private _deactivateAllBut(activeStep: number): void {
    this._steps.filter((step: TdStepComponent) => step.number !== activeStep)
    .forEach((step: TdStepComponent) => {
      step.active = false;
    });
  }
}
