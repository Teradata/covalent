import {
  TestBed,
  inject,
  ComponentFixture,
  TestComponentBuilder,
} from '@angular/core/testing';

import { IconsComponent } from './icons.component';

describe('Component: Icons', () => {
  let builder: TestComponentBuilder;

  TestBed.configureTestingModule({
    providers: [
      IconsComponent,
    ],
  });

  TestBed.compileComponents();

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(IconsComponent)
      .then((fixture: ComponentFixture<any>) => {
        let component: IconsComponent = fixture.componentInstance;
        expect(component).toBeTruthy();
      });
  }));
});
