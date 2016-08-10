import {
  TestBed,
  inject,
  ComponentFixture,
  TestComponentBuilder,
} from '@angular/core/testing';

import { LoadingDemoComponent } from './loading.component';

describe('Component: LoadingDemo', () => {
  let builder: TestComponentBuilder;

  TestBed.configureTestingModule({
    providers: [
      LoadingDemoComponent,
    ],
  });

  TestBed.compileComponents();

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(LoadingDemoComponent)
      .then((fixture: ComponentFixture<any>) => {
        let component: LoadingDemoComponent = fixture.componentInstance;
        expect(component).toBeTruthy();
      });
  }));
});
