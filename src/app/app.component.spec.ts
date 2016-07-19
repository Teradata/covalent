import {
  addProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { DocsAppComponent } from '../app/app.component';

beforeEach(() => {
  addProviders([
    DocsAppComponent,
  ]);
});

describe('App: ', () => {
  it('should create the app', inject([DocsAppComponent], (app: DocsAppComponent) => {
      expect(app).toBeTruthy();
  }));
});
