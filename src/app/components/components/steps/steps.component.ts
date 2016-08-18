import { Component } from '@angular/core';

import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MdButton } from '@angular2-material/button';

import { TD_STEPS_DIRECTIVES, StepState, IStepChangeEvent } from '../../../../platform/core';
import { TdHighlightComponent } from '../../../../platform/highlight';

@Component({
  directives: [
    MD_CARD_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MdButton,
    TD_STEPS_DIRECTIVES,
    TdHighlightComponent,
  ],
  moduleId: module.id,
  selector: 'td-steps-demo',
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
  }, {
    description: `Toggle active state of [TdStepComponent]. Retuns "true" if successful, else "false".
                  Can be accessed by referencing element in local variable.`,
    name: 'toggle',
    type: 'function()',
  }, {
    description: `Opens [TdStepComponent]. Retuns "true" if successful, else "false".
                  Can be accessed by referencing element in local variable.`,
    name: 'open',
    type: 'function()',
  }, {
    description: `Closes [TdStepComponent]. Retuns "true" if successful, else "false".
                  Can be accessed by referencing element in local variable.`,
    name: 'close',
    type: 'function()',
  }];

  stepChangeMsg: string = 'No change detected yet.';
  activeDeactiveStep1Msg: string = 'No select/deselect detected yet';
  stateStep2: StepState = StepState.Required;
  stateStep3: StepState = StepState.Complete;
  disabled: boolean = false;

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
