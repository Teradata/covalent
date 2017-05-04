import { Component, Input } from '@angular/core';

import { StepState } from '../step.component';

@Component({
  selector: 'td-step-header',
  styleUrls: ['./step-header.component.scss' ],
  templateUrl: './step-header.component.html',
})
export class TdStepHeaderComponent {

  /**
   * Number assigned to [TdStepHeaderComponent].
   */
  @Input('number') number: number;

  /**
   * active?: boolean
   * Sets for active/inactive states on header.
   */
  @Input('active') active: boolean;

  /**
   * disabled?: boolean
   * Sets styles for disabled state on icon and header.
   */
  @Input('disabled') disabled: boolean;

  /**
   * state?: StepState or ['none' | 'required' | 'complete']
   * Sets styles for state of header.
   * Defaults to [StepState.None | 'none'].
   */
  @Input('state') state: StepState = StepState.None;

  /**
   * Returns 'true' if [state] equals to [StepState.Complete | 'complete'], else 'false'.
   */
  isComplete(): boolean {
    return this.state === StepState.Complete;
  }

  /**
   * Returns 'true' if [state] equals to [StepState.Required | 'required'], else 'false'.
   */
  isRequired(): boolean {
    return this.state === StepState.Required;
  }
}
