import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ChartThemeSelectorService {

  selectedSubject: BehaviorSubject<string> = new BehaviorSubject<string>(undefined);

  selected$: Observable<string> = this.selectedSubject.asObservable();

  select(theme: string): void {
    this.selectedSubject.next(theme);
  }

}
