import {
  TestBed,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/core/testing';

import { OverviewComponent } from './overview.component';

describe('Component: Overview', () => {
  let builder: TestComponentBuilder;

  TestBed.configureTestingModule({
    providers: [
      OverviewComponent,
    ],
  });

  TestBed.compileComponents();

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(OverviewComponent)
      .then((fixture: ComponentFixture<any>) => {
        let component: OverviewComponent = fixture.componentInstance;
        expect(component).toBeTruthy();
      });
  }));
});
