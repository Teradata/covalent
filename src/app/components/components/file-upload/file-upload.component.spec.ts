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
import { FileUploadDemoComponent } from './file-upload.component';

describe('Component: FileUploadDemoTestController', () => {
  let builder: TestComponentBuilder;

  beforeEach(() => {
    addProviders([
      FileUploadDemoComponent,
    ]);
  });

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it(
    'should inject the component',
    inject(
      [FileUploadDemoComponent],
      (component: FileUploadDemoComponent) => {
        expect(component).toBeTruthy();
      }
    )
  );

  it('should create the component', inject([], () => {
    return builder.createAsync(FileUploadDemoTestControllerComponent)
      .then((fixture: ComponentFixture<any>) => {
        let query: DebugElement = fixture.debugElement.query(By.directive(FileUploadDemoComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  directives: [FileUploadDemoComponent],
  selector: 'td-test',
  template: `
    <td-file-upload-demo></td-file-upload-demo>
  `,
})
class FileUploadDemoTestControllerComponent {
}
