import { TestBed, inject, waitForAsync, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CovalentFileModule, TdFileInputComponent } from '../';
import { By } from '@angular/platform-browser';

describe('Component: FileInput', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [TdFileInputBasicTestComponent, TdFileInputModelTestComponent],
        imports: [FormsModule, CovalentFileModule],
      });
      TestBed.compileComponents();
    }),
  );

  it(
    'should render content inside .td-file-input button',
    waitForAsync(
      inject([], () => {
        const fixture: ComponentFixture<any> = TestBed.createComponent(TdFileInputBasicTestComponent);
        const component: TdFileInputBasicTestComponent = fixture.debugElement.componentInstance;
        component.multiple = false;
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(fixture.debugElement.query(By.css('.td-file-input span'))).toBeTruthy();
        });
      }),
    ),
  );

  it(
    'should mimic file selection and then clear it',
    waitForAsync(
      inject([], () => {
        const fixture: ComponentFixture<any> = TestBed.createComponent(TdFileInputBasicTestComponent);
        const component: TdFileInputBasicTestComponent = fixture.debugElement.componentInstance;
        component.multiple = false;
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          fixture.debugElement.query(By.directive(TdFileInputComponent)).componentInstance.handleSelect([{}]);
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            fixture.debugElement.query(By.directive(TdFileInputComponent)).componentInstance.clear();
            fixture.detectChanges();
            fixture.whenStable().then(() => {
              expect(
                fixture.debugElement.query(By.directive(TdFileInputComponent)).componentInstance.value,
              ).toBeUndefined();
            });
          });
        });
      }),
    ),
  );

  it(
    'should mimic file selection and then clear it by disabling it',
    waitForAsync(
      inject([], () => {
        const fixture: ComponentFixture<any> = TestBed.createComponent(TdFileInputBasicTestComponent);
        const component: TdFileInputBasicTestComponent = fixture.debugElement.componentInstance;
        component.multiple = false;
        component.disabled = false;
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          fixture.debugElement.query(By.directive(TdFileInputComponent)).componentInstance.handleSelect([{}]);
          component.disabled = true;
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            expect(
              fixture.debugElement.query(By.directive(TdFileInputComponent)).componentInstance.value,
            ).toBeUndefined();
          });
        });
      }),
    ),
  );

  it(
    'should mimic file (select) event',
    waitForAsync(
      inject([], () => {
        const fixture: ComponentFixture<any> = TestBed.createComponent(TdFileInputBasicTestComponent);
        const component: TdFileInputBasicTestComponent = fixture.debugElement.componentInstance;
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
      }),
    ),
  );

  it(
    'should mimic file selection event and check model',
    waitForAsync(
      inject([], () => {
        const fixture: ComponentFixture<any> = TestBed.createComponent(TdFileInputModelTestComponent);
        const component: TdFileInputModelTestComponent = fixture.debugElement.componentInstance;
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
      }),
    ),
  );

  it(
    'should mimic file selection event and check model and then clear it by disabling it',
    waitForAsync(
      inject([], () => {
        const fixture: ComponentFixture<any> = TestBed.createComponent(TdFileInputModelTestComponent);
        const component: TdFileInputModelTestComponent = fixture.debugElement.componentInstance;
        component.multiple = false;
        fixture.detectChanges();
        expect(component.files).toBeUndefined();
        fixture.whenStable().then(() => {
          fixture.debugElement.query(By.directive(TdFileInputComponent)).componentInstance.handleSelect([{}]);
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            expect(component.files).toBeTruthy();
            component.disabled = true;
            fixture.componentRef.changeDetectorRef.detectChanges();
            fixture.detectChanges();
            fixture.whenStable().then(() => {
              expect(component.files).toBeUndefined();
            });
          });
        });
      }),
    ),
  );
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

@Component({
  selector: 'td-file-input-model-test',
  template: `
    <td-file-input [(ngModel)]="files" [multiple]="multiple" [disabled]="disabled">
      <span>test</span>
    </td-file-input>
  `,
})
class TdFileInputModelTestComponent {
  multiple: boolean;
  disabled: boolean;
  files: File | FileList;
}
