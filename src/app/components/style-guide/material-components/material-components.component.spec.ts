import {
  TestBed,
  inject,
  ComponentFixture,
  TestComponentBuilder } from '@angular/core/testing';

import { MaterialComponentsComponent } from './material-components.component';

describe('Component: MaterialComponents', () => {
  let builder: TestComponentBuilder;

  TestBed.configureTestingModule({
    providers: [
      MaterialComponentsComponent,
    ],
  });

  TestBed.compileComponents();

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(MaterialComponentsComponent)
      .then((fixture: ComponentFixture<any>) => {
        let component: MaterialComponentsComponent = fixture.componentInstance;
        expect(component).toBeTruthy();
      });
  }));
});
