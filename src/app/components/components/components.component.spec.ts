import {
  TestBed,
  inject,
  ComponentFixture,
  TestComponentBuilder,
} from '@angular/core/testing';

import { ComponentsComponent } from './components.component';

describe('Component: Components', () => {
  let builder: TestComponentBuilder;

  TestBed.configureTestingModule({
    providers: [
      ComponentsComponent,
    ],
  });

  TestBed.compileComponents();

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(ComponentsComponent)
      .then((fixture: ComponentFixture<any>) => {
        let component: ComponentsComponent = fixture.componentInstance;
        expect(component).toBeTruthy();
      });
  }));
});
