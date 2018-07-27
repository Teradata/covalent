import {
  Component,
  Input,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';

export enum StepState {
  None = 'none',
  Required = 'required',
  Complete = 'complete',
}

@Component({
  selector: 'td-step-link, a[td-step-link]',
  styleUrls: ['./step-link.component.scss'],
  templateUrl: './step-link.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TdStepLinkComponent implements AfterViewInit {

  private _displayLink: boolean = true;

  /** Whether the step link is active or not. */
  private _isActive: boolean = false;
  private _state: StepState = StepState.None;

  get displayLink(): boolean {
    return this._displayLink;
  }

  /**
   * Whether to display the link or not
   */
  set displayLink(shouldDisplay: boolean) {
    this._displayLink = shouldDisplay;
    this._changeDetectorRef.markForCheck();
  }

  constructor(private _changeDetectorRef: ChangeDetectorRef) { }

  /** Whether the step link is active. */
  @Input()
  get active(): boolean { return this._isActive; }
  set active(value: boolean) {
    if (value !== this._isActive) {
      this._isActive = value;
    }
  }

  ngAfterViewInit(): void {
    this._changeDetectorRef.markForCheck();
  }

  /**
   * Stop click propagation when clicking on step link
   */
  _handleIconClick(event: Event): void {
    event.stopPropagation();
    event.preventDefault();
  }

}
