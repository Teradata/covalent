import {
  TestBed,
  inject,
  ComponentFixture,
  TestComponentBuilder,
} from '@angular/core/testing';

import { MediaDemoComponent } from './media.component';

describe('Component: MediaDemo', () => {
  let builder: TestComponentBuilder;

  TestBed.configureTestingModule({
    providers: [
      MediaDemoComponent,
    ],
  });

  TestBed.compileComponents();

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(MediaDemoComponent)
      .then((fixture: ComponentFixture<any>) => {
        let component: MediaDemoComponent = fixture.componentInstance;
        expect(component).toBeTruthy();
      });
  }));
});
