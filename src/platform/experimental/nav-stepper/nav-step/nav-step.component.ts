import { Component, ElementRef, HostBinding, AfterViewInit, OnInit, Renderer2,
         ChangeDetectionStrategy, ChangeDetectorRef, Input } from '@angular/core';
import { Router } from '@angular/router';

export enum StepState {
  None = 'none',
  Required = 'required',
  Complete = 'complete',
}

@Component({
  selector: 'td-nav-step, a[td-nav-step]',
  styleUrls: ['./nav-step.component.scss'],
  templateUrl: './nav-step.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TdNavStepComponent implements AfterViewInit, OnInit {

  private _displayStep: boolean = true;
  private _displayLine: boolean = true;
  private _width: number = 0;
  private _active: boolean = false;

  // Number to display in step header
  number: number;

  /**
   * routerLink?: string
   * routerLink to navigate to
   * Defaults to empty
   */
  @Input('routerLink') routerLink: string;

  /**
   * state?: StepState
   * state of step
   * Defaults to none
   */
  @Input('state') state: StepState = StepState.None;

  /**
   * sublabel?: string
   * Sublabel to display in step header
   * Defaults to empty
   */
  @Input('sublabel') sublabel: string;

  constructor(private _elementRef: ElementRef,
    private router: Router,
    private _renderer: Renderer2,
    private _changeDetectorRef: ChangeDetectorRef) {
    this._renderer.addClass(this._elementRef.nativeElement, 'mat-button');
  }

  isRequired(): boolean {
    return true;
  }

  isComplete(): boolean {
    return true;
  }

  get displayStep(): boolean {
    return this._displayStep;
  }

  /**
   * Whether to display the step or not
   */
  set displayStep(shouldDisplay: boolean) {
    this._displayStep = shouldDisplay;
    this._changeDetectorRef.markForCheck();
  }

  get displayLine(): boolean {
    return this._displayLine;
  }

  /**
   * Whether to display the step or not
   */
  set displayLine(shouldDisplay: boolean) {
    this._displayLine = shouldDisplay;
    this._changeDetectorRef.markForCheck();
  }

  /**
   * Whether step is active
   */
  get active(): boolean {
    return this._active;
  }

  /**
   * Width of the DOM element of the step
   */
  get width(): number {
    return this._width;
  }

  /**
   * Gets the display style of the crumb
   */
  @HostBinding('style.display')
  get displayBinding(): string {
    // Set the display to none on the component, just in case the end user is hiding
    // and showing them instead of the component doing itself for reasons like responsive
    return this._displayStep ? undefined : 'none';
  }

  ngAfterViewInit(): void {
    // set the width from the actual rendered DOM element
    Promise.resolve().then(() => {
      this._width = (<HTMLElement>this._elementRef.nativeElement).getBoundingClientRect().width;
      this._changeDetectorRef.markForCheck();
    });
  }

  ngOnInit(): void {
    // Set this step to active if the step route and active route are the same
    if (this.router.url === this.routerLink) {
      this._active = true;
    }
  }

}
