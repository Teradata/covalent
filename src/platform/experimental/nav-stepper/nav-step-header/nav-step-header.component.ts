import { Component, Input } from '@angular/core';

import { ICanDisable, mixinDisabled, ICanDisableRipple, mixinDisableRipple } from '@covalent/core/common';

import { StepState } from '../nav-step/nav-step.component';

export class TdNavStepHeaderBase {}

/* tslint:disable-next-line */
export const _TdNavStepHeaderMixinBase = mixinDisableRipple(mixinDisabled(TdNavStepHeaderBase));

@Component({
  selector: 'td-nav-step-header',
  inputs: ['disableRipple'],
  styleUrls: ['./nav-step-header.component.scss' ],
  templateUrl: './nav-step-header.component.html',
})
export class TdNavStepHeaderComponent extends _TdNavStepHeaderMixinBase implements ICanDisable, ICanDisableRipple {

  /**
   * Should display the line after the step
   */
  @Input('displayLine') displayLine: boolean;

  /**
   * Number assigned to [TdNavStepHeaderComponent].
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
