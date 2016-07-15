import {
  beforeEach,
  addProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TdFileUploadComponent } from './file-upload.component';

describe('Component: TdFileUpload', () => {
  let builder: TestComponentBuilder;

  beforeEach(() => {
    addProviders([
      TdFileUploadComponent,
    ]);
  });

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it('should inject the component', inject([TdFileUploadComponent], (component: TdFileUploadComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(TdFileUploadTestControllerComponent)
      .then((fixture: ComponentFixture<any>) => {
        let query: DebugElement = fixture.debugElement.query(By.directive(TdFileUploadComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  directives: [TdFileUploadComponent],
  selector: 'td-test',
  template: `
    <td-file-upload></td-file-upload>
  `,
})
class TdFileUploadTestControllerComponent {
}
