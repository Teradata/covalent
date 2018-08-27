import {
  Injectable,
  Provider,
  Optional,
  SkipSelf,
} from '@angular/core';

import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class TdChartOptionsService {

  private _options: any = {};
  private _optionsSubject: Subject<any> = new BehaviorSubject<any>(this._options);

  setOption(option: string, value: any): void {
    let options: any = {};
    options[option] = value;
    Object.assign(this._options, options);
    this._optionsSubject.next(options);
  }

  clearOption(option: string): void {
    this.setOption(option, undefined);
  }

  listen(): Observable<any> {
    return this._optionsSubject.asObservable();
  }

}

export function BASE_CHART_PROVIDER_FACTORY(
  parent: TdChartOptionsService): TdChartOptionsService {
  return parent || new TdChartOptionsService();
}

export const BASE_CHART_PROVIDER: Provider = {
  // If there is already a service available, use that. Otherwise, provide a new one.
  provide: TdChartOptionsService,
  deps: [[new Optional(), new SkipSelf(), TdChartOptionsService]],
  useFactory: BASE_CHART_PROVIDER_FACTORY,
};
