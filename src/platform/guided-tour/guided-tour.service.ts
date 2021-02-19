import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  Router,
  ActivatedRoute,
  ParamMap,
  NavigationExtras,
  NavigationStart,
  Event as NavigationEvent,
} from '@angular/router';
import Shepherd from 'shepherd.js';
import { tap, map, filter } from 'rxjs/operators';
import { Observable, fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { CovalentGuidedTour, ITourStep, ITourOptions, TourStepButton } from './guided.tour';

export interface IGuidedTour extends ITourOptions {
  steps: IGuidedTourStep[];
  finishButtonText?: string;
}

export interface IGuidedTourStep extends ITourStep {
  routing?: {
    route: string;
    extras?: NavigationExtras;
  };
}

/**
 *  Router enabled Shepherd tour
 */
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
  step: any;
  previous: any;
  tour: any;
}

@Injectable()
export class CovalentGuidedTourService extends CovalentGuidedTour {
  private _toursMap: Map<string, IGuidedTour> = new Map<string, IGuidedTour>();
  private _tourStepURLs: Map<string, string> = new Map<string, string>();
  constructor(private _router: Router, private _route: ActivatedRoute, private _httpClient: HttpClient) {
    super();
    _router.events
      .pipe(
        filter((event: NavigationEvent) => event instanceof NavigationStart && event.navigationTrigger === 'popstate'),
      )
      .subscribe((event: NavigationEvent) => {
        if (this.shepherdTour.isActive) {
          this.shepherdTour.cancel();
        }
      });
  }

  tourEvent$(str: TourEvents): Observable<IGuidedTourEvent> {
    return fromEvent(this.shepherdTour, str);
  }

  async registerTour(tourName: string, tour: IGuidedTour | string): Promise<void> {
    const guidedTour: IGuidedTour = typeof tour === 'string' ? await this._loadTour(tour) : tour;
    this._toursMap.set(tourName, guidedTour);
  }

  startTour(tourName: string): Shepherd.Tour {
    const guidedTour: IGuidedTour = this._getTour(tourName);
    this.finish();
    if (guidedTour && guidedTour.steps && guidedTour.steps.length) {
      // remove steps from tour since we need to preprocess them first
      this.newTour(Object.assign({}, guidedTour, { steps: undefined }));
      const tourInstance: Shepherd.Tour = this.shepherdTour.addSteps(
        this._configureRoutesForSteps(this._prepareTour(guidedTour.steps, guidedTour.finishButtonText)),
      );
      // init route transition if step URL is different then the current location.
      this.tourEvent$(TourEvents.show).subscribe((tourEvent: IGuidedTourEvent) => {
        const currentURL: string = this._router.url.split(/[?#]/)[0];
        const {
          step: { id, options },
        } = tourEvent;
        if (this._tourStepURLs.has(id)) {
          const stepRoute: string = this._tourStepURLs.get(id);
          if (stepRoute !== currentURL) {
            this._router.navigate([stepRoute]);
          }
        } else {
          if (options && options.routing) {
            this._tourStepURLs.set(id, options.routing.route);
          } else {
            this._tourStepURLs.set(id, currentURL);
          }
        }
      });
      this.start();
      return tourInstance;
    } else {
      // tslint:disable-next-line:no-console
      console.warn(`Tour ${tourName} does not exist. Please try another tour.`);
    }
  }

  // Finds the right registered tour by using queryParams
  // finishes any other tour and starts the new one.
  initializeOnQueryParams(queryParam: string = 'tour'): Observable<ParamMap> {
    return this._route.queryParamMap.pipe(
      debounceTime(100),
      tap((params: ParamMap) => {
        const tourParam: string = params.get(queryParam);
        if (tourParam) {
          this.startTour(tourParam);
          // get current search parameters
          const searchParams: URLSearchParams = new URLSearchParams(window.location.search);
          // delete tour queryParam
          searchParams.delete(queryParam);
          // build new URL string without it
          let url: string = window.location.protocol + '//' + window.location.host + window.location.pathname;
          if (searchParams.toString()) {
            url += '?' + searchParams.toString();
          }
          // replace state in history without triggering a navigation
          window.history.replaceState({ path: url }, '', url);
        }
      }),
    );
  }

  setNextBtnDisability(stepId: string, isDisabled: boolean): void {
    if (this.shepherdTour.getById(stepId)) {
      const stepOptions: ITourStep = (this.shepherdTour.getById(stepId) as any).options;
      stepOptions.buttons.forEach((button: TourStepButton) => {
        if (button.text === 'chevron_right') {
          button.disabled = isDisabled;
        }
      });
      this.shepherdTour.getById(stepId).updateStepOptions(stepOptions);
    }
  }

  private async _loadTour(tourUrl: string): Promise<any> {
    const request: Observable<object> = this._httpClient.get(tourUrl);
    try {
      return await request
        .pipe(
          map((resultSet: any) => {
            return JSON.parse(JSON.stringify(resultSet));
          }),
        )
        .toPromise();
    } catch {
      return undefined;
    }
  }

  private _getTour(key: string): IGuidedTour {
    return this._toursMap.get(key);
  }

  private _configureRoutesForSteps(routedSteps: IGuidedTourStep[]): IGuidedTourStep[] {
    routedSteps.forEach((step: IGuidedTourStep) => {
      if (step.routing) {
        const route: string = step.routing.route;
        // if there is a beforeShowPromise, then we save it and call it after the navigation
        if (step.beforeShowPromise) {
          const beforeShowPromise: () => Promise<void> = step.beforeShowPromise;
          step.beforeShowPromise = () => {
            return this._router.navigate([route], step.routing.extras).then(() => {
              return beforeShowPromise();
            });
          };
        } else {
          step.beforeShowPromise = () => this._router.navigate([route]);
        }
      }
    });

    return routedSteps;
  }
}
