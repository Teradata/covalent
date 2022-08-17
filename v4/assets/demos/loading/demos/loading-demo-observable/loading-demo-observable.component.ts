import { Component } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'loading-demo-observable',
  styleUrls: ['./loading-demo-observable.component.scss'],
  templateUrl: './loading-demo-observable.component.html',
})
export class LoadingDemoObservableComponent {
  private _subject: BehaviorSubject<any> = new BehaviorSubject<any>({
    name: 'I am here!',
  });
  observable$: Observable<any> = this._subject.asObservable();

  toggle(): void {
    this._subject = new BehaviorSubject<any>(undefined);
    this.observable$ = this._subject.asObservable();
    setTimeout(() => {
      this._subject.next({ name: 'I am here!' });
    }, 1000);
  }
}
