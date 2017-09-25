import { Component, Input } from '@angular/core';

import { ICanDisable, mixinDisabled, ICanDisableRipple, mixinDisableRipple } from '../../common/common.module';

import { StepState } from '../step.component';

export class TdStepHeaderBase {}

/* tslint:disable-next-line */
export const _TdStepHeaderMixinBase = mixinDisableRipple(mixinDisabled(TdStepHeaderBase));

@Component({
  selector: 'td-step-header',
  inputs: ['disabled', 'disableRipple'],
  styleUrls: ['./step-header.component.scss' ],
  templateUrl: './step-header.component.html',
})
export class TdStepHeaderComponent extends _TdStepHeaderMixinBase implements ICanDisable, ICanDisableRipple {

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
