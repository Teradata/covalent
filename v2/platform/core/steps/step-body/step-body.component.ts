import { Component, Input, ViewChild, ElementRef } from '@angular/core';

import { StepState } from '../step.component';

import { tdCollapseAnimation } from '@covalent/core/common';

@Component({
  selector: 'td-step-body',
  styleUrls: ['./step-body.component.scss' ],
  templateUrl: './step-body.component.html',
  animations: [
    tdCollapseAnimation,
  ],
})
export class TdStepBodyComponent {

  @ViewChild('contentRef', { read: ElementRef }) contentRef: ElementRef;

  get hasContent(): boolean {
    return this.contentRef &&
          (this.contentRef.nativeElement.children.length > 0 || !!this.contentRef.nativeElement.textContent.trim());
  }

  @ViewChild('actionsRef', { read: ElementRef }) actionsRef: ElementRef;

  get hasActions(): boolean {
    return this.actionsRef &&
          (this.actionsRef.nativeElement.children.length > 0 || !!this.actionsRef.nativeElement.textContent.trim());
  }

  @ViewChild('summaryRef', { read: ElementRef }) summaryRef: ElementRef;

  get hasSummary(): boolean {
    return this.summaryRef &&
          (this.summaryRef.nativeElement.children.length > 0 || !!this.summaryRef.nativeElement.textContent.trim());
  }

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
