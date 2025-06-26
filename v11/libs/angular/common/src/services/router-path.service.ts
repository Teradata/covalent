import { Injectable, inject } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';

import { filter, pairwise } from 'rxjs/operators';

@Injectable()
export class RouterPathService {
  private _router = inject(Router);

  private static _previousRoute = '/';
  constructor() {
    this._router.events
      .pipe(
        filter((e: any) => e instanceof RoutesRecognized),
        pairwise(),
      )
      .subscribe((e: any[]) => {
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
