import {
  TestBed,
  inject,
  async,
  ComponentFixture,
} from '@angular/core/testing';
import { Component } from '@angular/core';
import { CovalentFileModule, TdFileUploadComponent } from '../file.module';
import { By } from '@angular/platform-browser';

describe('Component: FileUpload', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TdFileUploadBasicTestComponent,
      ],
      imports: [
        CovalentFileModule.forRoot(),
      ],
    });
    TestBed.compileComponents();
  }));

  it('should render content inside .td-file-input button',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdFileUploadBasicTestComponent);
      let component: TdFileUploadBasicTestComponent = fixture.debugElement.componentInstance;
      component.multiple = false;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(fixture.debugElement.query(By.css('.td-file-input span'))).toBeTruthy();
      });
  })));

  it('should mimic file selection and then clear it',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdFileUploadBasicTestComponent);
      let component: TdFileUploadBasicTestComponent = fixture.debugElement.componentInstance;
      component.multiple = false;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(fixture.debugElement.query(By.css('td-file-input'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.td-file-upload'))).toBeFalsy();
        fixture.debugElement.query(By.directive(TdFileUploadComponent)).componentInstance.handleSelect([{}]);
        fixture.debugElement.query(By.css('td-file-input')).triggerEventHandler('click', new Event('click'));
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(fixture.debugElement.query(By.css('td-file-input'))).toBeFalsy();
          expect(fixture.debugElement.query(By.css('.td-file-upload'))).toBeTruthy();
          fixture.debugElement.query(By.css('.td-file-upload-cancel')).triggerEventHandler('click', new Event('click'));
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            expect(fixture.debugElement.query(By.css('td-file-input'))).toBeTruthy();
            expect(fixture.debugElement.query(By.css('.td-file-upload'))).toBeFalsy();
            expect(fixture.debugElement.query(By.directive(TdFileUploadComponent)).componentInstance.files)
            .toBeUndefined();
          });
        });
      });
  })));

  it('should mimic file selection and then clear it by disabling it',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdFileUploadBasicTestComponent);
      let component: TdFileUploadBasicTestComponent = fixture.debugElement.componentInstance;
      component.multiple = false;
      component.disabled = false;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(fixture.debugElement.query(By.css('td-file-input'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.td-file-upload'))).toBeFalsy();
        fixture.debugElement.query(By.directive(TdFileUploadComponent)).componentInstance.handleSelect([{}]);
        fixture.debugElement.query(By.css('td-file-input')).triggerEventHandler('click', new Event('click'));
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(fixture.debugElement.query(By.css('td-file-input'))).toBeFalsy();
          expect(fixture.debugElement.query(By.css('.td-file-upload'))).toBeTruthy();
          component.disabled = true;
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            expect(fixture.debugElement.query(By.css('td-file-input'))).toBeTruthy();
            expect(fixture.debugElement.query(By.css('.td-file-upload'))).toBeFalsy();
            expect(fixture.debugElement.query(By.directive(TdFileUploadComponent)).componentInstance.files).toBeUndefined();
          });
        });
      });
  })));

  it('should mimic file selection and then upload it',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdFileUploadBasicTestComponent);
      let component: TdFileUploadBasicTestComponent = fixture.debugElement.componentInstance;
      component.multiple = false;
      component.disabled = false;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(fixture.debugElement.query(By.css('td-file-input'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.td-file-upload'))).toBeFalsy();
        fixture.debugElement.query(By.directive(TdFileUploadComponent)).componentInstance.handleSelect([{}]);
        fixture.debugElement.query(By.css('td-file-input')).triggerEventHandler('click', new Event('click'));
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(fixture.debugElement.query(By.css('td-file-input'))).toBeFalsy();
          expect(fixture.debugElement.query(By.css('.td-file-upload'))).toBeTruthy();
          fixture.debugElement.query(By.css('.td-file-upload')).triggerEventHandler('click', new Event('click'));
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            expect(component.files).toBeTruthy();
          });
        });
      });
  })));

  it('should mimic file selection and throw (select) event',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdFileUploadBasicTestComponent);
      let component: TdFileUploadBasicTestComponent = fixture.debugElement.componentInstance;
      component.multiple = false;
      component.disabled = false;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(fixture.debugElement.query(By.css('td-file-input'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.td-file-upload'))).toBeFalsy();
        fixture.debugElement.query(By.directive(TdFileUploadComponent)).componentInstance.handleSelect([{}]);
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(component.selectFiles).toBeTruthy();
        });
      });
  })));

});

@Component({
  selector: 'td-file-upload-basic-test',
  template: `
  <td-file-upload #fileUpload [multiple]="multiple" [disabled]="disabled" (select)="selectFiles = $event" (upload)="files = $event">
    <span>{{ fileUpload.files?.name }}</span>
    <template td-file-input-label>
      <span>Choose a file...</span>
    </template>
  </td-file-upload>
  `,
})
class TdFileUploadBasicTestComponent {
  accept: string;
  multiple: boolean;
  disabled: boolean;
  files: File | FileList;
  selectFiles: File | FileList;
}
