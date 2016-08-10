import {
  TestBed,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/core/testing';

import { BuildTasksComponent } from './build-tasks.component';

describe('Component: BuildTasks', () => {
  let builder: TestComponentBuilder;

  TestBed.configureTestingModule({
    providers: [
      BuildTasksComponent,
    ],
  });

  TestBed.compileComponents();

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(BuildTasksComponent)
      .then((fixture: ComponentFixture<any>) => {
        let component: BuildTasksComponent = fixture.componentInstance;
        expect(component).toBeTruthy();
      });
  }));
});
