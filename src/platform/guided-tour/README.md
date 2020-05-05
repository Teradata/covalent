# Guided Tour

A wrapper around [Shepherd](https://shepherdjs.dev) with extra functionality. Make sure to check out the [official shepherd docs](https://shepherdjs.dev/docs).

## API Summary

#### Methods

+ registerTour(tourName: string, tour: IGuidedTour | string): Promise<void>
  + Create a tour
+ startTour(tour: string): Shepherd.Tour
  + Start a certain tour
+ initializeOnQueryParams(queryParam: string = 'tour'): Observable<ParamMap>
  + Listen to query params to launch a tour

```ts
// for reference
export type TourStep = Shepherd.Step.StepOptions;
export type TourStepButton = Shepherd.Step.StepOptionsButton;

export interface ITourEventOn {
  selector?: string;
  event?: string;
}

export interface ITourEventOnOptions {
  timeBeforeShow?: number;
  interval?: number;
}

export interface ITourAbortOn extends ITourEventOn {}

export interface ITourOptions extends Shepherd.Tour.TourOptions {
  abortOn?: ITourAbortOn[];
}

export interface ITourStepAttachToOptions extends ITourEventOnOptions {
  highlight?: boolean;
  retries?: number;
  skipIfNotFound?: boolean;
  else?: string;
  goBackTo?: string;
}

export interface ITourStepAdvanceOn extends ITourEventOn {}

export interface ITourStepAdvanceOnOptions extends ITourEventOnOptions {
  jumpTo?: string;
  allowGoBack?: boolean;
}

export interface ITourStep extends TourStep {
  attachToOptions?: ITourStepAttachToOptions;
  advanceOnOptions?: ITourStepAdvanceOnOptions;
  advanceOn?: ITourStepAdvanceOn[] | ITourStepAdvanceOn | any;
  abortOn?: ITourAbortOn[];
}

export interface IGuidedTour extends ITourOptions {
  steps: IGuidedTourStep[];
}

export interface IGuidedTourStep extends ITourStep {
  routing?: {
    route: string;
    extras?: NavigationExtras;
  };
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
```
