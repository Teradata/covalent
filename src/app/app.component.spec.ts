import {
  TestBed,
  inject,
  ComponentFixture,
} from '@angular/core/testing';

import { DocsAppComponent } from './app.component';

describe('Component: App', () => {

  TestBed.configureTestingModule({
    providers: [
      DocsAppComponent,
    ],
  });

  TestBed.compileComponents();

  beforeEach(inject([], function(): void {

  }));

  it('should create the component', inject([], () => {
    
  }));
});
