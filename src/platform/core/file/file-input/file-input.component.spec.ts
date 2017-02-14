import {
  TestBed,
  inject,
  async,
  ComponentFixture,
} from '@angular/core/testing';
import { Component } from '@angular/core';
import { CovalentFileModule, TdFileInputComponent } from '../file.module';
import { By } from '@angular/platform-browser';

describe('Component: FileInput', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TdFileInputBasicTestComponent,
      ],
      imports: [
        CovalentFileModule.forRoot(),
      ],
    });
    TestBed.compileComponents();
  }));

  it('should render content inside .td-file-input button',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdFileInputBasicTestComponent);
      let component: TdFileInputBasicTestComponent = fixture.debugElement.componentInstance;
      component.multiple = false;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(fixture.debugElement.query(By.css('.td-file-input span'))).toBeTruthy();
      });
  })));

  it('should mimic file selection and then clear it',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdFileInputBasicTestComponent);
      let component: TdFileInputBasicTestComponent = fixture.debugElement.componentInstance;
      component.multiple = false;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.debugElement.query(By.directive(TdFileInputComponent)).componentInstance.files = [{}];
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          fixture.debugElement.query(By.directive(TdFileInputComponent)).componentInstance.clear();
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            expect(fixture.debugElement.query(By.directive(TdFileInputComponent)).componentInstance.files)
            .toBeUndefined();
          });
        });
      });
  })));

  it('should mimic file selection and then clear it by disabling it',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdFileInputBasicTestComponent);
      let component: TdFileInputBasicTestComponent = fixture.debugElement.componentInstance;
      component.multiple = false;
      component.disabled = false;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.debugElement.query(By.directive(TdFileInputComponent)).componentInstance.files = [{}];
        component.disabled = true;
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(fixture.debugElement.query(By.directive(TdFileInputComponent)).componentInstance.files).toBeUndefined();
        });
      });
  })));

  it('should mimic file (select) event',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdFileInputBasicTestComponent);
      let component: TdFileInputBasicTestComponent = fixture.debugElement.componentInstance;
      component.multiple = false;
      fixture.detectChanges();
      expect(component.files).toBeUndefined();
      fixture.whenStable().then(() => {
        fixture.debugElement.query(By.directive(TdFileInputComponent)).componentInstance.handleSelect([{}]);
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(component.files).toBeTruthy();
        });
      });
  })));

});

@Component({
  selector: 'td-file-input-basic-test',
  template: `
  <td-file-input [multiple]="multiple" [disabled]="disabled" (select)="files = $event">
    <span>test</span>
  </td-file-input>
  `,
})
class TdFileInputBasicTestComponent {
  accept: string;
  multiple: boolean;
  disabled: boolean;
  files: File | FileList;
}
