import {
  TestBed,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/core/testing';

import { ManageListComponent } from './manage-list.component';

describe('Component: ManageList', () => {
  let builder: TestComponentBuilder;

  TestBed.configureTestingModule({
    providers: [
      ManageListComponent,
    ],
  });

  TestBed.compileComponents();

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(ManageListComponent)
      .then((fixture: ComponentFixture<any>) => {
        let component: ManageListComponent = fixture.componentInstance;
        expect(component).toBeTruthy();
      });
  }));
});
