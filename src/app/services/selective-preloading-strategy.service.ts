import 'rxjs/add/observable/of';
import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SelectivePreloadingStrategyService implements PreloadingStrategy {

  preload(route: Route, load: () => Observable<any>): Observable<any> {

    // Configured on lazyload module route
    if (route.data && route.data.preload) {
      return load();
    } else {
      /* tslint:disable-next-line */
      return Observable.of(null);
    }
  }
}
