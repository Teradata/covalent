import {
  TestBed,
  inject,
  ComponentFixture,
  TestComponentBuilder,
} from '@angular/core/testing';

import { HighlightDemoComponent } from './highlight.component';

describe('Component: HighlightDemo', () => {
  let builder: TestComponentBuilder;

  TestBed.configureTestingModule({
    providers: [
      HighlightDemoComponent,
    ],
  });

  TestBed.compileComponents();

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(HighlightDemoComponent)
      .then((fixture: ComponentFixture<any>) => {
        let component: HighlightDemoComponent = fixture.componentInstance;
        expect(component).toBeTruthy();
      });
  }));
});
