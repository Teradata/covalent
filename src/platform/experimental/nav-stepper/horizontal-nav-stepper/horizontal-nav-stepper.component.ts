import { Component, ContentChildren, QueryList, OnInit, OnDestroy, ChangeDetectionStrategy, 
         AfterContentInit, DoCheck, ChangeDetectorRef, ElementRef } from '@angular/core';
import { Subscription, Subject, fromEvent, merge } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { TdNavStepComponent } from '../nav-step/nav-step.component';

@Component({
  selector: 'td-horizontal-nav-stepper',
  styleUrls: ['./horizontal-nav-stepper.component.scss'],
  templateUrl: './horizontal-nav-stepper.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TdHorizontalStepperComponent implements OnInit, DoCheck, AfterContentInit, OnDestroy {

  private _resizeSubscription: Subscription = Subscription.EMPTY;
  private _widthSubject: Subject<number> = new Subject<number>();
  private _resizing: boolean = false;
  private _showLeftArrow: boolean = false;
  private _showRightArrow: boolean = false;
  private _leftHidden: number = 0;
  private _rightHidden: number = 0;

  // all the sub components, which are the individual steps
  @ContentChildren(TdNavStepComponent) _steps: QueryList<TdNavStepComponent>;
  // the list of hidden steps not shown right now (responsive)
  hiddenSteps: TdNavStepComponent[] = new Array();

  constructor(private _elementRef: ElementRef, private _changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this._resizeSubscription = merge(
      fromEvent(window, 'resize').pipe(
        debounceTime(10),
      ),
      this._widthSubject.asObservable().pipe(
        distinctUntilChanged(),
      ),
    ).subscribe(() => {
      if (!this._resizing) {
        this._resizing = true;
        setTimeout(() => {
          this.displayWidthAvailableSteps();
          this._resizing = false;
          this._changeDetectorRef.markForCheck();
        }, 100);
      }
    });
  }

  ngDoCheck(): void {
    if (this._elementRef && this._elementRef.nativeElement) {
      this._widthSubject.next(this.nativeElementWidth);
    }
  }

  ngAfterContentInit(): void {
    this.setStepSettings();
    this._changeDetectorRef.markForCheck();
  }

  ngOnDestroy(): void {
    this._resizeSubscription.unsubscribe();
  }

  /*
  * Current width of the element container
  */
  get nativeElementWidth(): number {
    let element: HTMLElement = (<HTMLElement>this._elementRef.nativeElement);

    // Need to take into account border, margin and padding that might be around all the crumbs
    let style: CSSStyleDeclaration = window.getComputedStyle(element);
    let borderLeft: number = parseInt(style.borderLeft, 10);
    let borderRight: number = parseInt(style.borderRight, 10);
    let marginLeft: number = parseInt(style.marginLeft, 10);
    let marginRight: number = parseInt(style.marginRight, 10);
    let paddingLeft: number = parseInt(style.paddingLeft, 10);
    let paddingRight: number = parseInt(style.paddingRight, 10);

    return element.getBoundingClientRect().width - borderLeft - borderRight - marginLeft - marginRight - paddingLeft - paddingRight;
  }

  /**
   * The total count of individual steps
   */
  get count(): number {
    return this._steps ? this._steps.length : 0;
  }

  /**
   * Should we show the left Arrow
   */
  get showLeftArrow(): boolean {
    return this._showLeftArrow;
  }

  /**
   * Should we show the right Arrow
   */
  get showRightArrow(): boolean {
    return this._showRightArrow;
  }

  public showHiddenLeftStep(): void {
    let stepsArray: TdNavStepComponent[] = this._steps.toArray();
    // show the left one
    stepsArray[this._leftHidden - 1].displayStep = true;
    this.hiddenSteps.splice(this._leftHidden - 1, 1);
    this._leftHidden--;
    // If no more hidden steps then hide left arrow
    if (this._leftHidden === 0) {
      this._showLeftArrow = false;
    }

    // hide the right one
    stepsArray[stepsArray.length - (this._rightHidden + 1)].displayStep = false;
    stepsArray[stepsArray.length - (this._rightHidden + 2)].displayLine = false;
    this.hiddenSteps.push(stepsArray[stepsArray.length - 1]);
    this._rightHidden++;

    this._showRightArrow = true;
  }

  public showHiddenRightStep(): void {
    let stepsArray: TdNavStepComponent[] = this._steps.toArray();
    // show the right one
    stepsArray[stepsArray.length - this._rightHidden].displayStep = true;
    stepsArray[stepsArray.length - (this._rightHidden + 1)].displayLine = true;
    this.hiddenSteps.pop();
    this._rightHidden--;
    // If no more hidden steps then hide right arrow
    if (this._rightHidden === 0) {
      this._showRightArrow = false;
    }

    // hide the left one
    stepsArray[this._leftHidden].displayStep = false;
    this.hiddenSteps.push(stepsArray[this._leftHidden]);
    this._leftHidden++;

    this._showLeftArrow = true;
  }

  /**
   * Set the step line separators and display numbers
   */
  private setStepSettings(): void {
    let stepsArray: TdNavStepComponent[] = this._steps.toArray();
    if (stepsArray.length > 0) {
      // don't show the icon on the last breadcrumb
      stepsArray[stepsArray.length - 1].displayLine = false;
    }
    // set the index number of the step so can display that number in circle
    stepsArray.forEach((step: TdNavStepComponent, index: number) => {
      step.number = index + 1;
    });
  }

  private displayWidthAvailableSteps(): void {
    let curTotStepWidth: number = 0;
    let stepsArray: TdNavStepComponent[] = this._steps.toArray();
    // calculate the current width of the shown steps
    for (let i: number = this.hiddenSteps.length; i < stepsArray.length; i++) {
      curTotStepWidth += stepsArray[i].width;
    }
    // get the active step index
    let activeIndex: number = stepsArray.findIndex((step: TdNavStepComponent) => {
      return step.active === true;
    });
    // hide the first step if window size is smaller than all the step sizes
    if (this.nativeElementWidth < curTotStepWidth) {
      // determine if the active step is in the first or second half of the list
      // and check that all the left ones aren't already hidden (2nd check after && does that)
      // and hide on the opposite side of that
      if ((activeIndex >= stepsArray.length / 2) && (this._leftHidden < activeIndex)) {
        // left
        this._showRightArrow = false;
        this._showLeftArrow = true;
        this._leftHidden++;
        stepsArray[this._leftHidden - 1].displayStep = false;
        this.hiddenSteps.push(stepsArray[this.hiddenSteps.length]);
      // Check to see that all the possible ones on the right aren't already hidden
      } else if (this._rightHidden < stepsArray.length - activeIndex) {
        // right
        this._showRightArrow = true;
        this._showLeftArrow = false;
        this._rightHidden++;
        stepsArray[stepsArray.length - this._rightHidden].displayStep = false;
        this.hiddenSteps.push(stepsArray[stepsArray.length - this._rightHidden]);
      }
      this.displayWidthAvailableSteps();
    } else {
      // loop over all the hidden steps and see if adding them back in will
      // fit in the current window size
      let totalHidden: number = this.hiddenSteps.length - 1;
      for (let i: number = totalHidden; i >= 0; i--) {
        let hiddenStepWidth: number = stepsArray[i].width;
        if ((curTotStepWidth + hiddenStepWidth) < this.nativeElementWidth) {
          // Determine if the active step is in the first or second half of the list
          // and if its right and there are hidden left steps
          // or if it left and there are no right hidden ones and some left hidden (using arrows can cause it to be unbalanced)
          // then show the hidden ones on the left
          if ((activeIndex >= stepsArray.length / 2 && this._leftHidden > 0) || 
              (activeIndex < stepsArray.length / 2 && this._rightHidden === 0 && this._leftHidden > 0)) {
            // left
            stepsArray[this._leftHidden - 1].displayStep = true;
            this.hiddenSteps.shift();
            this._leftHidden--;
            // If no more hidden steps then hide left arrow
            if (this._leftHidden === 0) {
              this._showLeftArrow = false;
            }
          // Check if there are any on the right hidden and show them
          } else if (this._rightHidden > 0) {
            // right
            stepsArray[stepsArray.length - this._rightHidden].displayStep = true;
            this.hiddenSteps.pop();
            this._rightHidden--;
            // If no more hidden steps then hide right arrow
            if (this._rightHidden === 0) {
              this._showRightArrow = false;
            }
          }
          // recalculate the total width based on adding back in a step
          let newTotStepWidth: number = 0;
          for (let j: number = this.hiddenSteps.length; j < stepsArray.length; j++) {
            newTotStepWidth += stepsArray[j].width;
          }
          curTotStepWidth = newTotStepWidth;
        } else if (i === totalHidden) {
          // need to break out of loop here because the first in the hidden
          // list can't fit in current window size
          break;
        }
      }
    }
  }

}
