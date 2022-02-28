import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { getThemes } from '@covalent/echarts/base';

@Injectable({ providedIn: 'root' })
export class ChartThemeSelectorService {
  selected: string = getThemes()[0];

  selectedSubject: BehaviorSubject<string> = new BehaviorSubject<string>(
    this.selected
  );

  selected$: Observable<string> = this.selectedSubject.asObservable();

  select(theme: string): void {
    this.selected = theme;
    this.selectedSubject.next(theme);
  }
}
