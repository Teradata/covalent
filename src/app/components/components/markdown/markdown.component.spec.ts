import {
  TestBed,
  inject,
  ComponentFixture,
  TestComponentBuilder,
} from '@angular/core/testing';

import { MarkdownDemoComponent } from './markdown.component';

describe('Component: MarkdownDemo', () => {
  let builder: TestComponentBuilder;

  TestBed.configureTestingModule({
    providers: [
      MarkdownDemoComponent,
    ],
  });

  TestBed.compileComponents();

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(MarkdownDemoComponent)
      .then((fixture: ComponentFixture<any>) => {
        let component: MarkdownDemoComponent = fixture.componentInstance;
        expect(component).toBeTruthy();
      });
  }));
});
