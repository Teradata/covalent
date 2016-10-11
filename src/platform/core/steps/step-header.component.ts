import { Component, Input } from '@angular/core';

import { StepState } from './step.component';

@Component({
  selector: 'td-step-header',
  styleUrls: [ 'step-header.component.scss' ],
  templateUrl: 'step-header.component.html',
})
export class TdStepHeaderComponent {

  /**
   * Number assigned to [TdStepHeaderComponent].
   */
  @Input('number') number: number;

  /**
   * Label of [TdStepHeaderComponent].
   */
  @Input('label') label: string;

  /**
   * Sublabel of [TdStepHeaderComponent].
   */
  @Input('sublabel') sublabel: string;

  /**
   * active?: boolean
   * Toggles [TdStepHeaderComponent] between active/deactive.
   */
  @Input('active') active: boolean;

  /**
   * disabled?: boolean
   * Disables icon and header, blocks click event and sets [TdStepHeaderComponent] to deactive if 'true'.
   */
  @Input('disabled') disabled: boolean;

  /**
   * state?: StepState or ['none' | 'required' | 'complete']
   * Sets state of [TdStepHeaderComponent] depending on value.
   * Defaults to [StepState.None | 'none'].
   */
  @Input('state') state: StepState = StepState.None;

  /**
   * Returns 'true' if [state] equals to [StepState.Complete | 'complete'], else 'false'.
   */
  isComplete(): boolean {
    return this.state === StepState.Complete;
  };

  /**
   * Returns 'true' if [state] equals to [StepState.Required | 'required'], else 'false'.
   */
  isRequired(): boolean {
    return this.state === StepState.Required;
  };
}
