import { InjectionToken } from '@angular/core';

export type TdTimeFormats = {
  parse: {
    timeInput: any,
  },
  display: {
    timeInput: any,
    monthYearLabel: any,
    dateA11yLabel: any,
    monthYearA11yLabel: any,
  },
};

export const TD_TIME_FORMATS: any = new InjectionToken<TdTimeFormats>('td-time-formats');
