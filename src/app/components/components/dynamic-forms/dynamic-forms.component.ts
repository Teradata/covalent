import { Component } from '@angular/core';
import { DynamicElement, IDynamicElementConfig } from '@covalent/dynamic-forms';

@Component({
  selector: 'dynamic-forms-demo',
  styleUrls: [ 'dynamic-forms.component.scss' ],
  templateUrl: 'dynamic-forms.component.html',
})
export class DynamicFormsDemoComponent {

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

  elements: IDynamicElementConfig[] = [{
    name: 'first_name',
    label: 'First Name',
    type: DynamicElement.Text,
    required: true,
  }, {
    name: 'last_name',
    type: DynamicElement.Text,
    required: false,
    default: 'Lucis',
  }, {
    name: 'age',
    type: DynamicElement.Number,
    required: false,
    min: 18,
    max: 70,
  }, {
    name: 'on_it',
    label: 'On It?',
    type: DynamicElement.Boolean,
    default: true,
  }];
}
