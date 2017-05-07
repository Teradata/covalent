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
        CovalentFileModule,
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

      let eventSpy: jasmine.Spy = spyOn(component, 'selectEvent');

      component.multiple = false;
      component.disabled = false;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(fixture.debugElement.query(By.css('td-file-input'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.td-file-upload'))).toBeFalsy();
        expect(eventSpy.calls.count()).toBe(0);
        fixture.debugElement.query(By.directive(TdFileUploadComponent)).componentInstance.handleSelect([{}]);
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(eventSpy.calls.count()).toBe(1);
        });
      });
  })));

  it('should mimic file selection, upload click and throw (upload) event',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdFileUploadBasicTestComponent);
      let component: TdFileUploadBasicTestComponent = fixture.debugElement.componentInstance;

      let eventSpy: jasmine.Spy = spyOn(component, 'uploadEvent');

      component.multiple = false;
      component.disabled = false;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(fixture.debugElement.query(By.css('td-file-input'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.td-file-upload'))).toBeFalsy();
        expect(eventSpy.calls.count()).toBe(0);
        fixture.debugElement.query(By.directive(TdFileUploadComponent)).componentInstance.handleSelect([{}]);
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(component.selectFiles).toBeTruthy();
          expect(eventSpy.calls.count()).toBe(0);
          fixture.debugElement.query(By.css('.td-file-upload')).triggerEventHandler('click', new Event('click'));
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            expect(eventSpy.calls.count()).toBe(1);
          });
        });
      });
  })));

  it('should mimic file selection, cancel click and throw (cancel) event',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdFileUploadBasicTestComponent);
      let component: TdFileUploadBasicTestComponent = fixture.debugElement.componentInstance;

      let eventSpy: jasmine.Spy = spyOn(component, 'cancelEvent');

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
          expect(eventSpy.calls.count()).toBe(0);
          fixture.debugElement.query(By.css('.td-file-upload-cancel')).triggerEventHandler('click', new Event('click'));
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            expect(eventSpy.calls.count()).toBe(1);
          });
        });
      });
  })));

});

@Component({
  selector: 'td-file-upload-basic-test',
  template: `
  <td-file-upload #fileUpload [multiple]="multiple" [disabled]="disabled" (select)="selectEvent($event)"
                  (upload)="uploadEvent($event)" (cancel)="cancelEvent()">
    <span>{{ fileUpload.files?.name }}</span>
    <ng-template td-file-input-label>
      <span>Choose a file...</span>
    </ng-template>
  </td-file-upload>
  `,
})
class TdFileUploadBasicTestComponent {
  accept: string;
  multiple: boolean;
  disabled: boolean;
  files: File | FileList;
  selectFiles: File | FileList;

  selectEvent(files: File | FileList): void {
    this.selectFiles = files;
  }

  uploadEvent(files: File | FileList): void {
    this.files = files;
  }

  cancelEvent(): void {
    this.selectFiles = undefined;
    this.files = undefined;
  }
}
