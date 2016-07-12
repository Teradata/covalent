import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { DocsAppComponent } from '../app/app.component';

beforeEachProviders(() => [DocsAppComponent]);

describe('App: ', () => {
  it('should create the app', inject([DocsAppComponent], (app: DocsAppComponent) => {
      expect(app).toBeTruthy();
  }));
});
