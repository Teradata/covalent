import { Component } from '@angular/core';

import { StepState, IStepChangeEvent } from '../../../../platform/core';

@Component({
  moduleId: module.id,
  selector: 'steps-demo',
  styleUrls: [ 'steps.component.css' ],
  templateUrl: 'steps.component.html',
})
export class StepsDemoComponent {

  stepsAttrs: Object[] = [{
    description: `Method to be executed when [onStepChange] event is emitted.
                  Emits an [IStepChangeEvent] implemented object.`,
    name: 'stepChange?',
    type: 'function($event)',
  }, {
    description: 'Defines if there can be one or multiple [TdStepComponent] elements active at the same time.',
    name: 'multiple?',
    type: 'boolean',
  }];

  stepAttrs: Object[] = [{
    description: 'Sets label of [TdStepComponent] header. Defaults to "Step #"',
    name: 'label?',
    type: 'string',
  }, {
    description: 'Sets sublabel of [TdStepComponent] header.',
    name: 'sublabel?',
    type: 'string',
  }, {
    description: 'Toggles [TdStepComponent] between active/deactive.',
    name: 'active?',
    type: 'boolean',
  }, {
    description: 'Disables icon and header, blocks click event and sets [TdStepComponent] to deactive if "true".',
    name: 'disabled?',
    type: 'boolean',
  }, {
    description: 'Sets state of [TdStepComponent] depending on value. Defaults to [StepState.None | "none"]',
    name: 'state?',
    type: 'StepState or ["none" | "required" | "complete"]',
  }, {
    description: 'Event emitted when [TdStepComponent] is activated.',
    name: 'activated?',
    type: 'function()',
  }, {
    description: 'Event emitted when [TdStepComponent] is deactivated.',
    name: 'deactivated?',
    type: 'function()',
  }];

  stepChangeMsg: string = 'No change detected yet.';
  activeDeactiveStep1Msg: string = 'No select/deselect detected yet';
  activeStep1: boolean = false;
  stateStep2: StepState = StepState.Required;
  stateStep3: StepState = StepState.Complete;
  disabled: boolean = false;

  toggleActiveStep1(): void {
    if (!this.disabled) {
      this.activeStep1 = !this.activeStep1;
    }
  }

  toggleRequiredStep2(): void {
    this.stateStep2 = (this.stateStep2 === StepState.Required ? StepState.None : StepState.Required);
  }

  toggleCompleteStep3(): void {
    this.stateStep3 = (this.stateStep3 === StepState.Complete ? StepState.None : StepState.Complete);
  }

  stepChange(event: IStepChangeEvent): void {
    if (event.prevStep === undefined) {
      this.stepChangeMsg = `Started at step: ${event.newStep}`;
    } else {
      this.stepChangeMsg = `Changed from step: ${event.prevStep} to step: ${event.newStep}`;
    }
  }

  toggleDisabled(): void {
    this.disabled = !this.disabled;
  }

  activeStep1Event(): void {
    this.activeDeactiveStep1Msg = 'Active event emitted.';
  }

  deactiveStep1Event(): void {
    this.activeDeactiveStep1Msg = 'Deactive event emitted.';
  }
}
