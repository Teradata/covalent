import {
  TestBed,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/core/testing';

import { DocsComponent } from './docs.component';

describe('Component: Docs', () => {
  let builder: TestComponentBuilder;

  TestBed.configureTestingModule({
    providers: [
      DocsComponent,
    ],
  });

  TestBed.compileComponents();

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(DocsComponent)
      .then((fixture: ComponentFixture<any>) => {
        let component: DocsComponent = fixture.componentInstance;
        expect(component).toBeTruthy();
      });
  }));
});
