import {
  TestBed,
  inject,
  ComponentFixture,
  TestComponentBuilder,
} from '@angular/core/testing';

import { AngularMaterialComponent } from './angular-material.component';

describe('Component: AngularMaterial', () => {
  let builder: TestComponentBuilder;

  TestBed.configureTestingModule({
    providers: [
      AngularMaterialComponent,
    ],
  });

  TestBed.compileComponents();

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(AngularMaterialComponent)
      .then((fixture: ComponentFixture<any>) => {
        let component: AngularMaterialComponent = fixture.componentInstance;
        expect(component).toBeTruthy();
      });
  }));
});
