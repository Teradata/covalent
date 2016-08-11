import {
  TestBed,
  inject,
  ComponentFixture,
  TestComponentBuilder,
} from '@angular/core/testing';

import { DocsAppComponent } from './app.component';

describe('Component: App', () => {
  let builder: TestComponentBuilder;

  TestBed.configureTestingModule({
    providers: [
      DocsAppComponent,
    ],
  });

  TestBed.compileComponents();

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(DocsAppComponent)
      .then((fixture: ComponentFixture<any>) => {
        let component: DocsAppComponent = fixture.componentInstance;
        expect(component).toBeTruthy();
        console.log('a');
      });
  }));
});

