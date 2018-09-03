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
    this._optionsSubject.next(this._options);
  }

  setArrayOption(option: string, value: any): any {
    let prevValue: any[] = this.getOption(option);
    if (prevValue) {
      let index: number = prevValue.indexOf(value);
      index > -1 ? prevValue[index] = value : prevValue.push(value);
    } else {
      prevValue = [value];
    }
    this.setOption(option, prevValue);
  }

  getOption(option: string): any[] {
    return this._options[option];
  }

  clearOption(option: string): void {
    this.setOption(option, undefined);
  }

  listen(): Observable<any> {
    return this._optionsSubject.asObservable();
  }

}

export function CHART_PROVIDER_FACTORY(
  parent: TdChartOptionsService): TdChartOptionsService {
  return parent || new TdChartOptionsService();
}

export const CHART_PROVIDER: Provider = {
  // If there is already a service available, use that. Otherwise, provide a new one.
  provide: TdChartOptionsService,
  deps: [[new Optional(), new SkipSelf(), TdChartOptionsService]],
  useFactory: CHART_PROVIDER_FACTORY,
};
