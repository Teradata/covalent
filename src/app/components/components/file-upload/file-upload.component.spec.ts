import {
  TestBed,
  inject,
  ComponentFixture,
  TestComponentBuilder,
} from '@angular/core/testing';

import { FileUploadDemoComponent } from './highlight.component';

describe('Component: FileUploadDemo', () => {
  let builder: TestComponentBuilder;

  TestBed.configureTestingModule({
    providers: [
      FileUploadDemoComponent,
    ],
  });

  TestBed.compileComponents();

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(FileUploadDemoComponent)
      .then((fixture: ComponentFixture<any>) => {
        let component: FileUploadDemoComponent = fixture.componentInstance;
        expect(component).toBeTruthy();
      });
  }));
});
