import {
  TestBed,
  inject,
  ComponentFixture,
  TestComponentBuilder,
} from '@angular/core/testing';

import { LogoComponent } from './logo.component';

describe('Component: Logo', () => {
  let builder: TestComponentBuilder;

  TestBed.configureTestingModule({
    providers: [
      LogoComponent,
    ],
  });

  TestBed.compileComponents();

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(LogoComponent)
      .then((fixture: ComponentFixture<any>) => {
        let component: LogoComponent = fixture.componentInstance;
        expect(component).toBeTruthy();
      });
  }));
});
