import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  FormControl,
  ReactiveFormsModule,
  ValidationErrors,
  AbstractControl,
} from '@angular/forms';
import { CovalentTextfieldValueAccessorDirective } from './form-control.directive';

// Import the built output of the web components library
// eslint-disable-next-line @nx/enforce-module-boundaries
import '../../../../../../dist/libs/components';

@Component({
  template: `
    <cv-textfield [formControl]="control"></cv-textfield>
    <cv-checkbox [formControl]="checkboxControl"></cv-checkbox>
    <cv-radio [formControl]="radioControl" value="test"></cv-radio>
  `,
  imports: [ReactiveFormsModule, CovalentTextfieldValueAccessorDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
class TestComponent {
  control = new FormControl('test', {
    validators: [() => ({ required: true })],
  });
  checkboxControl = new FormControl(false);
  radioControl = new FormControl('');

  constructor() {
    this.control.setErrors({
      required: true,
    });
  }
}

describe('CovalentTextfieldValueAccessorDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update textfield value when form control changes', () => {
    const textfield = fixture.nativeElement.querySelector('cv-textfield');
    component.control.setValue('test value');
    fixture.detectChanges();
    expect(textfield.value).toBe('test value');
  });

  it('should update form control when textfield value changes', () => {
    const textfield = fixture.nativeElement.querySelector('cv-textfield');
    textfield.value = 'new value';
    textfield.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.control.value).toBe('new value');
  });

  it('should mark control as touched on blur', () => {
    const textfield = fixture.nativeElement.querySelector('cv-textfield');
    expect(component.control.touched).toBe(false);
    textfield.dispatchEvent(new Event('blur'));
    expect(component.control.touched).toBe(true);
  });

  it('should handle checkbox value changes', () => {
    const checkbox = fixture.nativeElement.querySelector('cv-checkbox');
    checkbox.checked = true;
    checkbox.value = 'true';
    checkbox.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    expect(component.checkboxControl.value).toBe(true);
  });

  it('should handle radio button value changes', () => {
    const radio = fixture.nativeElement.querySelector('cv-radio');
    radio.checked = true;
    radio.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    expect(component.radioControl.value).toBe('test');
  });

  it('should handle disabled state', () => {
    const textfield = fixture.nativeElement.querySelector('cv-textfield');
    component.control.disable();
    fixture.detectChanges();
    expect(textfield.disabled).toBe(true);
  });

  it('should update validity when form control has errors', () => {
    component.control.setValue(null);
    const textfield = fixture.nativeElement.querySelector('cv-textfield');
    textfield.dispatchEvent(new Event('change'));
    textfield.dispatchEvent(new Event('blur'));
    fixture.detectChanges();
  });

  it('should handle async validator changes and update validity', fakeAsync(() => {
    const asyncValidator = (
      control: AbstractControl,
    ): Promise<ValidationErrors | null> => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(control.value === 'invalid' ? { asyncError: true } : null);
        }, 100);
      });
    };

    // Clear existing validators and set only async validator
    component.control.clearValidators();
    component.control.setAsyncValidators([asyncValidator]);
    component.control.setValue('invalid');

    // Use tick() to advance time and complete async validation
    tick(150);
    fixture.detectChanges();

    expect(component.control.errors).toEqual({ asyncError: true });
    expect(component.control.status).toBe('INVALID');
  }));

  it('should update form control value on input event for real-time validation', () => {
    const textfield = fixture.nativeElement.querySelector('cv-textfield');

    // Set initial value
    textfield.value = 'real-time';
    textfield.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(component.control.value).toBe('real-time');

    // Change value again via input event
    textfield.value = 'updated';
    textfield.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(component.control.value).toBe('updated');
  });
});
