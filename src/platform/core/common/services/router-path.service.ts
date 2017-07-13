import { Injectable } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';

import { filter } from 'rxjs/operator/filter';
import { pairwise } from 'rxjs/operator/pairwise';

@Injectable()
export class RouterPathService {
private static _previousRoute: string = '/';
  constructor(private _router: Router) {
    pairwise.call(
      filter.call(this._router.events, (e: any) => e instanceof RoutesRecognized),
    ).subscribe((e: any[]) => {
      RouterPathService._previousRoute = e[0].urlAfterRedirects;
    });
  }

  /*
  * Utility function to get the route the user previously went to
  * good for use in a "back button"
  */
  getPreviousRoute(): string {
    return RouterPathService._previousRoute;
  }
}
