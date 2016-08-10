import {
  TestBed,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/core/testing';

import { StyleGuideComponent } from './style-guide.component';

describe('Component: StyleGuide', () => {
  let builder: TestComponentBuilder;

  TestBed.configureTestingModule({
    providers: [
      StyleGuideComponent,
    ],
  });

  TestBed.compileComponents();

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(StyleGuideComponent)
      .then((fixture: ComponentFixture<any>) => {
        let component: StyleGuideComponent = fixture.componentInstance;
        expect(component).toBeTruthy();
      });
  }));
});
