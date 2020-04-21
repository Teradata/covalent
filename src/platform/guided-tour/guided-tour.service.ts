import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap, NavigationExtras } from '@angular/router';

import Shepherd from 'shepherd.js';

import { tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { CovalentGuidedTour, ITourStep, ITourOptions } from './guided.tour';

export interface IGuidedTour extends ITourOptions {
  steps: IGuidedTourStep[];
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

@Injectable()
export class CovalentGuidedTourService extends CovalentGuidedTour {
  private _toursMap: Map<string, IGuidedTour> = new Map<string, IGuidedTour>();

  constructor(private _router: Router, private _route: ActivatedRoute, private _httpClient: HttpClient) {
    super();
  }

  async registerTour(tourName: string, tour: IGuidedTour | string): Promise<void> {
    const guidedTour: IGuidedTour = typeof tour === 'string' ? await this._loadTour(tour) : tour;
    this._toursMap.set(tourName, guidedTour);
  }

  startTour(tour: string): Shepherd.Tour {
    const guidedTour: IGuidedTour = this._getTour(tour);
    this.finish();
    if (guidedTour && guidedTour.steps && guidedTour.steps.length) {
      // remove steps from tour since we need to preprocess them first
      this.newTour(Object.assign({}, guidedTour, { steps: undefined }));
      const tourInstance: Shepherd.Tour = this.shepherdTour.addSteps(
        this._configureRoutesForSteps(this._prepareTour(guidedTour.steps)),
      );
      this.start();
      return tourInstance;
    } else {
      // tslint:disable-next-line:no-console
      console.warn(`Tour ${tour} does not exist. Please try another tour.`);
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
