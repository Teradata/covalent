import {
  TestBed,
  inject,
} from '@angular/core/testing';
import { DocsAppComponent } from '../app/app.component';

TestBed.configureTestingModule({
  providers: [
    DocsAppComponent,
  ],
});

TestBed.compileComponents();

describe('App: ', () => {
  it('should create the app', inject([DocsAppComponent], (app: DocsAppComponent) => {
      expect(app).toBeTruthy();
  }));
});
