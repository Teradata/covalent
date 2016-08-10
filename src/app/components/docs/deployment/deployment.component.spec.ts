import {
  TestBed,
  inject,
  ComponentFixture,
  TestComponentBuilder,
} from '@angular/core/testing';

import { DeploymentComponent } from './deployment.component';

describe('Component: Deployment', () => {
  let builder: TestComponentBuilder;

  TestBed.configureTestingModule({
    providers: [
      DeploymentComponent,
    ],
  });

  TestBed.compileComponents();

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(DeploymentComponent)
      .then((fixture: ComponentFixture<any>) => {
        let component: DeploymentComponent = fixture.componentInstance;
        expect(component).toBeTruthy();
      });
  }));
});
