import { Component, Input } from '@angular/core';

import { StepState } from '../step.component';

import { TdCollapseAnimation } from '../../common/common.module';

@Component({
  selector: 'td-step-body',
  styleUrls: ['./step-body.component.scss' ],
  templateUrl: './step-body.component.html',
  animations: [
    TdCollapseAnimation(),
  ],
})
export class TdStepBodyComponent {

  /**
   * active?: boolean
   * Sets for active/inactive states on body.
   */
  @Input('active') active: boolean;

  /**
   * state?: StepState or ['none' | 'required' | 'complete']
   * Sets styles for state of body.
   * Defaults to [StepState.None | 'none'].
   */
  @Input('state') state: StepState = StepState.None;

  /**
   * Returns 'true' if [state] equals to [StepState.Complete | 'complete'], else 'false'.
   */
  isComplete(): boolean {
    return this.state === StepState.Complete;
  }
}
