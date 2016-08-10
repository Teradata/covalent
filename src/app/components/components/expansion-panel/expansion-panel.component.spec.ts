import {
  TestBed,
  inject,
  ComponentFixture,
  TestComponentBuilder,
} from '@angular/core/testing';

import { ExpansionPanelDemoComponent } from './expansion-panel.component';

describe('Component: ExpansionPanelDemo', () => {
  let builder: TestComponentBuilder;

  TestBed.configureTestingModule({
    providers: [
      ExpansionPanelDemoComponent,
    ],
  });

  TestBed.compileComponents();

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(ExpansionPanelDemoComponent)
      .then((fixture: ComponentFixture<any>) => {
        let component: ExpansionPanelDemoComponent = fixture.componentInstance;
        expect(component).toBeTruthy();
      });
  }));
});
