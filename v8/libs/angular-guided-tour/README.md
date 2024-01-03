# Guided Tour

A wrapper around [Shepherd](https://shepherdjs.dev) with extra functionality. Make sure to check out the [official shepherd docs](https://shepherdjs.dev/docs).

## API Summary

#### Methods

- registerTour(tourName: string, tour: IGuidedTour | string): Promise<void>
  - Create a tour
- startTour(tourName: string): Shepherd.Tour
  - Start a certain tour
- initializeOnQueryParams(queryParam: string = 'tour'): Observable<ParamMap>
  - Listen to query params to launch a tour
- tourEvent$(str: TourEvents): Observable<IGuidedTourEvent>
  - Observable of tour events

```ts
// for reference
export type TourStep = Shepherd.Step.StepOptions;
export type TourStepButton = Shepherd.Step.StepOptionsButton;

export enum ITourEvent {
  'click' = 'click',
  'pointerover' = 'pointerover',
  'keyup' = 'keyup',
  'added' = 'added', // added to DOM
  'removed' = 'removed', // removed from DOM
}

export interface ITourEventOn {
  selector?: string; // css selector
  event?: keyof typeof ITourEvent; // click, pointerover, keyup, added, removed
}

export interface ITourEventOnOptions {
  timeBeforeShow?: number; // delay before step is displayed
  interval?: number; // time between searches for element, defaults to 500ms
}

export interface ITourAbortOn extends ITourEventOn {}

export interface ITourOptions extends Shepherd.Tour.TourOptions {
  abortOn?: ITourAbortOn[]; // events to abort on
}

export interface ITourStepAttachToOptions extends ITourEventOnOptions {
  highlight?: boolean;
  retries?: number; // # num of attempts to find element
  skipIfNotFound?: boolean; // if element is not found after n retries, move on to next step
  else?: string; // if element is not found, go to step with this id
  goBackTo?: string; // back button goes back to step with this id
  skipFromStepCount?: boolean; // show/hide the step count, removes step from total count
}

export interface ITourStepAdvanceOn extends ITourEventOn {}

export interface ITourStepAdvanceOnOptions extends ITourEventOnOptions {
  jumpTo?: string; // next button will jump to step with this id
  allowGoBack?: boolean; // allow back within this step
}

export interface ITourStep extends TourStep {
  attachToOptions?: ITourStepAttachToOptions;
  advanceOnOptions?: ITourStepAdvanceOnOptions;
  advanceOn?: ITourStepAdvanceOn[] | ITourStepAdvanceOn | any;
  abortOn?: ITourAbortOn[];
  count?: number;
}

export interface IGuidedTour extends ITourOptions {
  steps: IGuidedTourStep[];
  finishButtonText?: string; // optionally pass in a localized string; default value is 'finish'
  dismissButtonText?: string; // optionally pass in a localized string; default value is 'cancel tour'
}

export interface IGuidedTourStep extends ITourStep {
  routing?: {
    route: string;
    extras?: NavigationExtras;
  };
}

export enum TourEvents {
  complete = 'complete',
  cancel = 'cancel',
  hide = 'hide',
  show = 'show',
  start = 'start',
  active = 'active',
  inactive = 'inactive',
}

export interface IGuidedTourEvent {
  step: any; // current step tour is showing
  previous: any; // previous step of the tour
  tour: any; // tour object
}
```

## Setup

```ts
import { CovalentGuidedTourModule } from '@covalent/guided-tour';
```

## Usage

```ts
import { CovalentGuidedTourService } from '@covalent/guided-tour';

const basicDemoTour: IGuidedTour = {
  useModalOverlay: true,
  steps: [
    {
      title: 'Fuel',
      text: 'Here are the fuel levels',
      attachTo: {
        element: '#basic-demo #fuel',
        on: 'top',
      },
    },
    {
      title: 'Oxygen',
      text: 'Here are the Oxygen levels.',
      attachTo: {
        element: '#basic-demo #oxygen',
        on: 'top',
      },
    },
    {
      title: 'Global status',
      text: 'Here you can see the global status of the vehicle. That is all there is to it!',
      attachTo: {
        element: '#basic-demo #status',
        on: 'top',
      },
    },
  ],
};
this._guidedTourService.registerTour('basicDemoTour', basicDemoTour);
this._guidedTourService.startTour('basicDemoTour');
this._guidedTourService
  .tourEvent$(TourEvents.show)
  .subscribe((event: IGuidedTourEvent) => {
    /* event object contains current step, previous step and tour objects */
  });
```

```html
<div id="basic-demo">
  <button mat-raised-button color="accent" (click)="startTour()">
    Start tour
  </button>
  <meter
    id="fuel"
    min="0"
    max="100"
    low="33"
    high="66"
    optimum="50"
    value="50"
  ></meter>
  <progress id="oxygen" max="100" value="70">70%</progress>
  <marquee id="status">All systems are running smoothly</marquee>
</div>
```

## Running unit tests

Run `nx test angular-guided-tour` to execute the unit tests.
