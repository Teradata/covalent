import {
  TestBed,
  inject,
  ComponentFixture,
  TestComponentBuilder,
} from '@angular/core/testing';

import { DocsOverviewComponent } from './overview.component';

describe('Component: DocsOverview', () => {
  let builder: TestComponentBuilder;

  TestBed.configureTestingModule({
    providers: [
      DocsOverviewComponent,
    ],
  });

  TestBed.compileComponents();

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(DocsOverviewComponent)
      .then((fixture: ComponentFixture<any>) => {
        let component: DocsOverviewComponent = fixture.componentInstance;
        expect(component).toBeTruthy();
      });
  }));
});
