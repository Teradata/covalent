import { Component, Input } from '@angular/core';

import { ICanDisable, mixinDisabled } from '../../common/common.module';

import { StepState } from '../step.component';

export class TdStepHeaderBase {}

/* tslint:disable-next-line */
export const _TdStepHeaderMixinBase = mixinDisabled(TdStepHeaderBase);

@Component({
  selector: 'td-step-header',
  inputs: ['disabled'],
  styleUrls: ['./step-header.component.scss' ],
  templateUrl: './step-header.component.html',
})
export class TdStepHeaderComponent extends _TdStepHeaderMixinBase implements ICanDisable {

  /**
   * Number assigned to [TdStepHeaderComponent].
   */
  @Input('number') number: number;

  /**
   * disableRipple?: string
   * Whether the ripple effect on header is disabled.
   */
  @Input('disableRipple') disableRipple: boolean;

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
