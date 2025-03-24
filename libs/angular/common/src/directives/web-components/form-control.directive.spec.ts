import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CovalentTextfieldValueAccessorDirective } from './form-control.directive';

// Import the built output of the web components library
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
    textfield.dispatchEvent(new Event('change'));
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
});
