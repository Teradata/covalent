import {
  TestBed,
  inject,
  waitForAsync,
  ComponentFixture,
} from '@angular/core/testing';
import { Component, NgModule, DebugElement } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import {
  Validators,
  AbstractControl,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { CovalentDynamicFormsModule } from './dynamic-forms.module';
import { TdDynamicFormsComponent } from './dynamic-forms.component';
import { TdDynamicElementComponent } from './dynamic-element.component';
import {
  ITdDynamicElementConfig,
  TdDynamicElement,
  TdDynamicType,
} from './services/dynamic-forms.service';

describe('Component: TdDynamicForms', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          NoopAnimationsModule,
          MatNativeDateModule,
          CovalentDynamicFormsModule,
          TdDynamicTestModule,
        ],
        declarations: [TdDynamicFormsTestComponent],
      });
      TestBed.compileComponents();
    })
  );

  it(
    'should create the component',
    waitForAsync(
      inject([], () => {
        const fixture: ComponentFixture<any> = TestBed.createComponent(
          TdDynamicFormsTestComponent
        );
        const component: TdDynamicFormsTestComponent =
          fixture.debugElement.componentInstance;

        fixture.detectChanges();
        expect(component).toBeTruthy();
      })
    )
  );

  it(
    'should render dynamic elements',
    waitForAsync(
      inject([], () => {
        const fixture: ComponentFixture<any> = TestBed.createComponent(
          TdDynamicFormsTestComponent
        );
        const component: TdDynamicFormsTestComponent =
          fixture.debugElement.componentInstance;

        expect(
          fixture.debugElement.queryAll(By.directive(TdDynamicElementComponent))
            .length
        ).toBe(0);
        component.elements = [
          {
            name: 'first_name',
            type: TdDynamicType.Text,
          },
          {
            name: 'password',
            type: TdDynamicElement.Password,
          },
          {
            name: 'on_it',
            type: TdDynamicType.Boolean,
          },
          {
            name: 'age',
            type: TdDynamicType.Number,
          },
          {
            name: 'nodes',
            type: TdDynamicElement.Slider,
          },
          {
            name: 'description',
            type: TdDynamicElement.Textarea,
          },
          {
            name: 'sex',
            type: TdDynamicType.Array,
            selections: ['M', 'F'],
          },
          {
            name: 'dob',
            type: TdDynamicElement.Datepicker,
          },
        ];
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(
            fixture.debugElement.queryAll(
              By.directive(TdDynamicElementComponent)
            ).length
          ).toBe(8);
        });
      })
    )
  );

  it(
    'should render dynamic elements and show form invalid because an input is required',
    waitForAsync(
      inject([], () => {
        const fixture: ComponentFixture<any> = TestBed.createComponent(
          TdDynamicFormsTestComponent
        );
        const component: TdDynamicFormsTestComponent =
          fixture.debugElement.componentInstance;

        expect(
          fixture.debugElement.queryAll(By.directive(TdDynamicElementComponent))
            .length
        ).toBe(0);
        component.elements = [
          {
            name: 'first_name',
            type: TdDynamicType.Text,
            required: true,
          },
          {
            name: 'on_it',
            type: TdDynamicType.Boolean,
            default: true,
          },
        ];
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(
            fixture.debugElement.queryAll(
              By.directive(TdDynamicElementComponent)
            ).length
          ).toBe(2);
          const dynamicFormsComponent: TdDynamicFormsComponent =
            fixture.debugElement.query(
              By.directive(TdDynamicFormsComponent)
            ).componentInstance;
          expect(dynamicFormsComponent.valid).toBeFalsy();
          /* tslint:disable-next-line */
          expect(JSON.stringify(dynamicFormsComponent.value)).toBe(
            JSON.stringify({ on_it: true })
          );
        });
      })
    )
  );

  it(
    'should render dynamic elements and show form invalid because a number is less than min',
    waitForAsync(
      inject([], () => {
        const fixture: ComponentFixture<any> = TestBed.createComponent(
          TdDynamicFormsTestComponent
        );
        const component: TdDynamicFormsTestComponent =
          fixture.debugElement.componentInstance;

        expect(
          fixture.debugElement.queryAll(By.directive(TdDynamicElementComponent))
            .length
        ).toBe(0);
        component.elements = [
          {
            name: 'first_name',
            type: TdDynamicType.Text,
            required: true,
          },
          {
            name: 'age',
            type: TdDynamicType.Number,
            min: 18,
            default: 17,
          },
        ];
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(
            fixture.debugElement.queryAll(
              By.directive(TdDynamicElementComponent)
            ).length
          ).toBe(2);
          const dynamicFormsComponent: TdDynamicFormsComponent =
            fixture.debugElement.query(
              By.directive(TdDynamicFormsComponent)
            ).componentInstance;
          expect(dynamicFormsComponent.valid).toBeFalsy();
          /* tslint:disable-next-line */
          expect(JSON.stringify(dynamicFormsComponent.value)).toBe(
            JSON.stringify({ age: 17 })
          );
        });
      })
    )
  );

  it(
    'should render dynamic elements and show form valid',
    waitForAsync(
      inject([], () => {
        const fixture: ComponentFixture<any> = TestBed.createComponent(
          TdDynamicFormsTestComponent
        );
        const component: TdDynamicFormsTestComponent =
          fixture.debugElement.componentInstance;

        expect(
          fixture.debugElement.queryAll(By.directive(TdDynamicElementComponent))
            .length
        ).toBe(0);
        const dob: Date = new Date();
        component.elements = [
          {
            name: 'first_name',
            type: TdDynamicType.Text,
            required: true,
            default: 'name',
          },
          {
            name: 'age',
            type: TdDynamicType.Number,
            default: 20,
            min: 18,
            max: 30,
          },
          {
            name: 'dob',
            type: TdDynamicType.Date,
            default: dob,
            required: true,
          },
        ];
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(
            fixture.debugElement.queryAll(
              By.directive(TdDynamicElementComponent)
            ).length
          ).toBe(3);
          const dynamicFormsComponent: TdDynamicFormsComponent =
            fixture.debugElement.query(
              By.directive(TdDynamicFormsComponent)
            ).componentInstance;
          expect(dynamicFormsComponent.valid).toBeTruthy();
          expect(JSON.stringify(dynamicFormsComponent.value)).toBe(
            JSON.stringify({ first_name: 'name', age: 20, dob })
          );
        });
      })
    )
  );

  it(
    'should render dynamic elements and show form invalid because character length is less than minLength',
    waitForAsync(
      inject([], () => {
        const fixture: ComponentFixture<any> = TestBed.createComponent(
          TdDynamicFormsTestComponent
        );
        const component: TdDynamicFormsTestComponent =
          fixture.debugElement.componentInstance;

        expect(
          fixture.debugElement.queryAll(By.directive(TdDynamicElementComponent))
            .length
        ).toBe(0);
        component.elements = [
          {
            name: 'password',
            type: TdDynamicType.Text,
            minLength: 8,
            default: 'mypwd',
          },
        ];
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(
            fixture.debugElement.queryAll(
              By.directive(TdDynamicElementComponent)
            ).length
          ).toBe(1);
          const dynamicFormsComponent: TdDynamicFormsComponent =
            fixture.debugElement.query(
              By.directive(TdDynamicFormsComponent)
            ).componentInstance;
          expect(dynamicFormsComponent.valid).toBeFalsy();
          // tslint:disable-next-line:no-hardcoded-credentials
          expect(JSON.stringify(dynamicFormsComponent.value)).toBe(
            JSON.stringify({ password: 'mypwd' })
          );
        });
      })
    )
  );

  it(
    'should render dynamic elements and show form invalid because character length is more than maxLength',
    waitForAsync(
      inject([], () => {
        const fixture: ComponentFixture<any> = TestBed.createComponent(
          TdDynamicFormsTestComponent
        );
        const component: TdDynamicFormsTestComponent =
          fixture.debugElement.componentInstance;

        expect(
          fixture.debugElement.queryAll(By.directive(TdDynamicElementComponent))
            .length
        ).toBe(0);
        component.elements = [
          {
            name: 'password',
            type: TdDynamicType.Text,
            maxLength: 8,
            default: 'myVeryLongString',
          },
        ];
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(
            fixture.debugElement.queryAll(
              By.directive(TdDynamicElementComponent)
            ).length
          ).toBe(1);
          const dynamicFormsComponent: TdDynamicFormsComponent =
            fixture.debugElement.query(
              By.directive(TdDynamicFormsComponent)
            ).componentInstance;
          expect(dynamicFormsComponent.valid).toBeFalsy();
          // tslint:disable-next-line:no-hardcoded-credentials
          expect(JSON.stringify(dynamicFormsComponent.value)).toBe(
            JSON.stringify({ password: 'myVeryLongString' })
          );
        });
      })
    )
  );

  it(
    'should render dynamic elements and show form valid',
    waitForAsync(
      inject([], () => {
        const fixture: ComponentFixture<any> = TestBed.createComponent(
          TdDynamicFormsTestComponent
        );
        const component: TdDynamicFormsTestComponent =
          fixture.debugElement.componentInstance;

        expect(
          fixture.debugElement.queryAll(By.directive(TdDynamicElementComponent))
            .length
        ).toBe(0);
        component.elements = [
          {
            name: 'password',
            type: TdDynamicType.Text,
            minLength: 8,
            maxLength: 20,
            default: 'mySuperSecretPw',
          },
        ];
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(
            fixture.debugElement.queryAll(
              By.directive(TdDynamicElementComponent)
            ).length
          ).toBe(1);
          const dynamicFormsComponent: TdDynamicFormsComponent =
            fixture.debugElement.query(
              By.directive(TdDynamicFormsComponent)
            ).componentInstance;
          expect(dynamicFormsComponent.valid).toBeTruthy();
          // tslint:disable-next-line:no-hardcoded-credentials
          expect(JSON.stringify(dynamicFormsComponent.value)).toBe(
            JSON.stringify({ password: 'mySuperSecretPw' })
          );
        });
      })
    )
  );

  it(
    'should render dynamic elements and show form invalid with custom validation',
    waitForAsync(
      inject([], () => {
        const fixture: ComponentFixture<any> = TestBed.createComponent(
          TdDynamicFormsTestComponent
        );
        const component: TdDynamicFormsTestComponent =
          fixture.debugElement.componentInstance;

        expect(
          fixture.debugElement.queryAll(By.directive(TdDynamicElementComponent))
            .length
        ).toBe(0);
        component.elements = [
          {
            name: 'number',
            type: TdDynamicType.Number,
            default: 15,
            validators: [
              {
                validator: (control: AbstractControl) => {
                  const isValid: boolean =
                    control.value > 21 && control.value < 23;
                  return !isValid ? { length: true } : {};
                },
              },
            ],
          },
        ];
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(
            fixture.debugElement.queryAll(
              By.directive(TdDynamicElementComponent)
            ).length
          ).toBe(1);
          const dynamicFormsComponent: TdDynamicFormsComponent =
            fixture.debugElement.query(
              By.directive(TdDynamicFormsComponent)
            ).componentInstance;
          expect(dynamicFormsComponent.valid).toBeFalsy();
          expect(JSON.stringify(dynamicFormsComponent.value)).toBe(
            JSON.stringify({ number: 15 })
          );
        });
      })
    )
  );

  it(
    'should render dynamic elements and show form invalid with Angular validation',
    waitForAsync(
      inject([], () => {
        const fixture: ComponentFixture<any> = TestBed.createComponent(
          TdDynamicFormsTestComponent
        );
        const component: TdDynamicFormsTestComponent =
          fixture.debugElement.componentInstance;

        expect(
          fixture.debugElement.queryAll(By.directive(TdDynamicElementComponent))
            .length
        ).toBe(0);
        component.elements = [
          {
            name: 'hexColor',
            type: TdDynamicType.Text,
            required: true,
            default: '#ZZZZZZ',
            validators: [
              {
                validator: Validators.pattern(/^#[A-Fa-f0-9]{6}$/),
              },
            ],
          },
        ];
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(
            fixture.debugElement.queryAll(
              By.directive(TdDynamicElementComponent)
            ).length
          ).toBe(1);
          const dynamicFormsComponent: TdDynamicFormsComponent =
            fixture.debugElement.query(
              By.directive(TdDynamicFormsComponent)
            ).componentInstance;
          expect(dynamicFormsComponent.valid).toBeFalsy();
          expect(JSON.stringify(dynamicFormsComponent.value)).toBe(
            JSON.stringify({ hexColor: '#ZZZZZZ' })
          );
        });
      })
    )
  );

  it(
    'should render dynamic elements and show form valid with custom validations',
    waitForAsync(
      inject([], () => {
        const fixture: ComponentFixture<any> = TestBed.createComponent(
          TdDynamicFormsTestComponent
        );
        const component: TdDynamicFormsTestComponent =
          fixture.debugElement.componentInstance;

        expect(
          fixture.debugElement.queryAll(By.directive(TdDynamicElementComponent))
            .length
        ).toBe(0);
        component.elements = [
          {
            name: 'hexColor',
            type: TdDynamicType.Text,
            required: true,
            default: '#F1F1F1',
            validators: [
              {
                validator: Validators.pattern(/^#[A-Fa-f0-9]{6}$/),
              },
            ],
          },
          {
            name: 'number',
            type: TdDynamicType.Number,
            default: 22,
            validators: [
              {
                validator: (control: AbstractControl) => {
                  const isValid: boolean =
                    control.value > 21 && control.value < 23;
                  return !isValid ? { length: true } : {};
                },
              },
            ],
          },
        ];
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(
            fixture.debugElement.queryAll(
              By.directive(TdDynamicElementComponent)
            ).length
          ).toBe(2);
          const dynamicFormsComponent: TdDynamicFormsComponent =
            fixture.debugElement.query(
              By.directive(TdDynamicFormsComponent)
            ).componentInstance;
          expect(dynamicFormsComponent.valid).toBeTruthy();
          expect(JSON.stringify(dynamicFormsComponent.value)).toBe(
            JSON.stringify({ hexColor: '#F1F1F1', number: 22 })
          );
        });
      })
    )
  );

  it(
    'should render errors with manual validations',
    waitForAsync(
      inject([], () => {
        const fixture: ComponentFixture<any> = TestBed.createComponent(
          TdDynamicFormsTestComponent
        );
        const component: TdDynamicFormsTestComponent =
          fixture.debugElement.componentInstance;

        component.elements = [
          {
            name: 'customElement',
            label: 'Custom Element',
            type: TdDynamicType.Text,
          },
        ];

        fixture.detectChanges();
        fixture.whenStable().then(() => {
          const dynamicFormsComponent: TdDynamicFormsComponent =
            fixture.debugElement.query(
              By.directive(TdDynamicFormsComponent)
            ).componentInstance;

          fixture.detectChanges();
          fixture.whenStable().then(() => {
            const key = 'customElement';
            dynamicFormsComponent.controls[key].markAsTouched();
            dynamicFormsComponent.controls[key].setErrors({
              customError: 'CUSTOM_ERROR',
            });

            fixture.detectChanges();
            fixture.whenStable().then(() => {
              expect(
                fixture.debugElement.queryAll(By.css('#custom-error')).length
              ).toBe(1);
              expect(
                fixture.debugElement.query(By.css('#custom-error'))
                  .nativeElement.textContent
              ).toBe('CUSTOM_ERROR');
            });
          });
        });
      })
    )
  );

  it(
    'should render dynamic elements with one element disabled',
    waitForAsync(
      inject([], () => {
        const fixture: ComponentFixture<any> = TestBed.createComponent(
          TdDynamicFormsTestComponent
        );
        const component: TdDynamicFormsTestComponent =
          fixture.debugElement.componentInstance;

        expect(
          fixture.debugElement.queryAll(By.directive(TdDynamicElementComponent))
            .length
        ).toBe(0);
        component.elements = [
          {
            name: 'hexColor',
            type: TdDynamicType.Text,
            required: true,
            default: '#F1F1F1',
          },
          {
            name: 'number',
            type: TdDynamicType.Number,
            disabled: true,
            required: true,
          },
        ];
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(
            fixture.debugElement.queryAll(
              By.directive(TdDynamicElementComponent)
            ).length
          ).toBe(2);
          const dynamicFormsComponent: TdDynamicFormsComponent =
            fixture.debugElement.query(
              By.directive(TdDynamicFormsComponent)
            ).componentInstance;
          expect(dynamicFormsComponent.valid).toBeTruthy();
          /* tslint:disable-next-line */
          expect(JSON.stringify(dynamicFormsComponent.value)).toBe(
            JSON.stringify({ hexColor: '#F1F1F1' })
          );
        });
      })
    )
  );

  it(
    'should render disabled file input',
    waitForAsync(
      inject([], () => {
        const fixture: ComponentFixture<any> = TestBed.createComponent(
          TdDynamicFormsTestComponent
        );
        const component: TdDynamicFormsTestComponent =
          fixture.debugElement.componentInstance;

        expect(
          fixture.debugElement.queryAll(By.directive(TdDynamicElementComponent))
            .length
        ).toBe(0);
        component.elements = [
          {
            name: 'file',
            type: TdDynamicElement.FileInput,
            disabled: true,
          },
        ];
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          const button: DebugElement = fixture.debugElement.query(
            By.css('td-file-input button')
          );
          const hiddenFileInput: DebugElement = fixture.debugElement.query(
            By.css('td-file-input .td-file-input-hidden')
          );

          expect(button.attributes['disabled']).not.toBeNull();
          expect(hiddenFileInput.attributes['disabled']).not.toBeNull();
        });
      })
    )
  );

  it(
    'should render dynamic custom element',
    waitForAsync(
      inject([], () => {
        const fixture: ComponentFixture<any> = TestBed.createComponent(
          TdDynamicFormsTestComponent
        );
        const component: TdDynamicFormsTestComponent =
          fixture.debugElement.componentInstance;

        expect(
          fixture.debugElement.queryAll(By.directive(TdDynamicElementComponent))
            .length
        ).toBe(0);
        component.elements = [
          {
            name: 'custom',
            type: TdDynamicTestComponent,
            default: 'value',
            customConfig: {
              specialValue: 'My special value',
            },
          },
        ];
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          const customComponent: TdDynamicTestComponent =
            fixture.debugElement.query(
              By.directive(TdDynamicTestComponent)
            ).componentInstance;
          expect(customComponent).toBeTruthy();
          expect(customComponent.specialValue).toEqual('My special value');
          const dynamicFormsComponent: TdDynamicFormsComponent =
            fixture.debugElement.query(
              By.directive(TdDynamicFormsComponent)
            ).componentInstance;
          expect(dynamicFormsComponent.valid).toBeTruthy();
          expect(JSON.stringify(dynamicFormsComponent.value)).toBe(
            JSON.stringify({ custom: 'value' })
          );
        });
      })
    )
  );

  it(
    `should render the placeholder for input fields`,
    waitForAsync(
      inject([], async () => {
        const fixture: ComponentFixture<any> = TestBed.createComponent(
          TdDynamicFormsTestComponent
        );
        const component: TdDynamicFormsTestComponent =
          fixture.debugElement.componentInstance;

        component.elements = [
          {
            name: 'input',
            type: TdDynamicElement.Input,
            label: 'LABEL',
            placeholder: 'PLACEHOLDER',
          },
        ];
        fixture.detectChanges();

        await fixture.whenStable();
        const inputElement: DebugElement = fixture.debugElement.query(
          By.css('[data-placeholder]')
        );
        inputElement.triggerEventHandler('focus', {});
        fixture.detectChanges();
        await fixture.whenStable();
        const labelElement: DebugElement = fixture.debugElement.query(
          By.css('mat-label')
        );
        expect(inputElement.attributes['placeholder']).toBe('PLACEHOLDER');
        expect(labelElement.nativeElement.textContent).toEqual('LABEL');
      })
    )
  );
});

@Component({
  template: `
    <td-dynamic-forms [elements]="elements">
      <ng-template let-control="control" tdDynamicFormsError="customElement">
        <span id="custom-error" *ngIf="control.hasError('customError')">{{
          control.errors['customError']
        }}</span>
      </ng-template>
    </td-dynamic-forms>
  `,
})
class TdDynamicFormsTestComponent {
  elements!: ITdDynamicElementConfig[];
}

@Component({
  selector: 'td-dynamic-input-test',
  template: ` <input [formControl]="control" /> `,
})
export class TdDynamicTestComponent {
  control!: FormControl;
  specialValue!: string;
}

@NgModule({
  declarations: [TdDynamicTestComponent],
  imports: [ReactiveFormsModule],
  exports: [TdDynamicTestComponent],
})
export class TdDynamicTestModule {}
