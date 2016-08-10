import {
  TestBed,
  inject,
  ComponentFixture,
  TestComponentBuilder,
} from '@angular/core/testing';

import { CardOverComponent } from './card-over.component';

describe('Component: CardOver', () => {
  let builder: TestComponentBuilder;

  TestBed.configureTestingModule({
    providers: [
      CardOverComponent,
    ],
  });

  TestBed.compileComponents();

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(CardOverComponent)
      .then((fixture: ComponentFixture<any>) => {
        let component: CardOverComponent = fixture.componentInstance;
        expect(component).toBeTruthy();
      });
  }));
});
