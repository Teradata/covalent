import {
  TestBed,
  inject,
  async,
  ComponentFixture,
} from '@angular/core/testing';
import 'hammerjs';
import { Component } from '@angular/core';
import { Validators, AbstractControl } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { TdDynamicType, TdDynamicElement, ITdDynamicElementConfig,
         TdDynamicElementComponent, TdDynamicFormsComponent, CovalentDynamicFormsModule } from './';

describe('Component: TdDynamicForms', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        CovalentDynamicFormsModule,
      ],
      declarations: [
        TdDynamicFormsTestComponent,
      ],
    });
    TestBed.compileComponents();
  }));

  it('should create the component', async(inject([], () => {

    let fixture: ComponentFixture<any> = TestBed.createComponent(TdDynamicFormsTestComponent);
    let component: TdDynamicFormsTestComponent = fixture.debugElement.componentInstance;

    fixture.detectChanges();
    expect(component).toBeTruthy();

  })));

  it('should render dynamic elements', async(inject([], () => {

    let fixture: ComponentFixture<any> = TestBed.createComponent(TdDynamicFormsTestComponent);
    let component: TdDynamicFormsTestComponent = fixture.debugElement.componentInstance;

    expect(fixture.debugElement.queryAll(By.directive(TdDynamicElementComponent)).length).toBe(0);
    component.elements = [{
      name: 'first_name',
      type: TdDynamicType.Text,
    }, {
      name: 'password',
      type: TdDynamicElement.Password,
    }, {
      name: 'on_it',
      type: TdDynamicType.Boolean,
    }, {
      name: 'age',
      type: TdDynamicType.Number,
    }, {
      name: 'nodes',
      type: TdDynamicElement.Slider,
    }, {
      name: 'description',
      type: TdDynamicElement.Textarea,
    }, {
      name: 'sex',
      type: TdDynamicType.Array,
      selections: ['M', 'F'],
    }];
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(fixture.debugElement.queryAll(By.directive(TdDynamicElementComponent)).length).toBe(7);
    });
  })));

  it('should render dynamic elements and show form invalid because an input is required', async(inject([], () => {

    let fixture: ComponentFixture<any> = TestBed.createComponent(TdDynamicFormsTestComponent);
    let component: TdDynamicFormsTestComponent = fixture.debugElement.componentInstance;

    expect(fixture.debugElement.queryAll(By.directive(TdDynamicElementComponent)).length).toBe(0);
    component.elements = [{
      name: 'first_name',
      type: TdDynamicType.Text,
      required: true,
    }, {
      name: 'on_it',
      type: TdDynamicType.Boolean,
      default: true,
    }];
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(fixture.debugElement.queryAll(By.directive(TdDynamicElementComponent)).length).toBe(2);
      let dynamicFormsComponent: TdDynamicFormsComponent =
          fixture.debugElement.query(By.directive(TdDynamicFormsComponent)).componentInstance;
      expect(dynamicFormsComponent.valid).toBeFalsy();
      /* tslint:disable-next-line */
      expect(JSON.stringify(dynamicFormsComponent.value)).toBe(JSON.stringify({first_name: null, on_it: true}));
    });
  })));

  it('should render dynamic elements and show form invalid because a number is less than min', async(inject([], () => {

    let fixture: ComponentFixture<any> = TestBed.createComponent(TdDynamicFormsTestComponent);
    let component: TdDynamicFormsTestComponent = fixture.debugElement.componentInstance;

    expect(fixture.debugElement.queryAll(By.directive(TdDynamicElementComponent)).length).toBe(0);
    component.elements = [{
      name: 'first_name',
      type: TdDynamicType.Text,
      required: true,
    }, {
      name: 'age',
      type: TdDynamicType.Number,
      min: 18,
      default: 17,
    }];
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(fixture.debugElement.queryAll(By.directive(TdDynamicElementComponent)).length).toBe(2);
      let dynamicFormsComponent: TdDynamicFormsComponent =
          fixture.debugElement.query(By.directive(TdDynamicFormsComponent)).componentInstance;
      expect(dynamicFormsComponent.valid).toBeFalsy();
      /* tslint:disable-next-line */
      expect(JSON.stringify(dynamicFormsComponent.value)).toBe(JSON.stringify({first_name: null, age: 17}));
    });
  })));

  it('should render dynamic elements and show form valid', async(inject([], () => {

    let fixture: ComponentFixture<any> = TestBed.createComponent(TdDynamicFormsTestComponent);
    let component: TdDynamicFormsTestComponent = fixture.debugElement.componentInstance;

    expect(fixture.debugElement.queryAll(By.directive(TdDynamicElementComponent)).length).toBe(0);
    component.elements = [{
      name: 'first_name',
      type: TdDynamicType.Text,
      required: true,
      default: 'name',
    }, {
      name: 'age',
      type: TdDynamicType.Number,
      default: 20,
      min: 18,
      max: 30,
    }];
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(fixture.debugElement.queryAll(By.directive(TdDynamicElementComponent)).length).toBe(2);
      let dynamicFormsComponent: TdDynamicFormsComponent =
          fixture.debugElement.query(By.directive(TdDynamicFormsComponent)).componentInstance;
      expect(dynamicFormsComponent.valid).toBeTruthy();
      /* tslint:disable-next-line */
      expect(JSON.stringify(dynamicFormsComponent.value)).toBe(JSON.stringify({first_name: 'name', age: 20}));
    });
  })));

  it('should render dynamic elements and show form invalid because character length is less than minLength', async(inject([], () => {

    let fixture: ComponentFixture<any> = TestBed.createComponent(TdDynamicFormsTestComponent);
    let component: TdDynamicFormsTestComponent = fixture.debugElement.componentInstance;

    expect(fixture.debugElement.queryAll(By.directive(TdDynamicElementComponent)).length).toBe(0);
    component.elements = [{
      name: 'password',
      type: TdDynamicType.Text,
      minLength: 8,
      default: 'mypwd',
    }];
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(fixture.debugElement.queryAll(By.directive(TdDynamicElementComponent)).length).toBe(1);
      let dynamicFormsComponent: TdDynamicFormsComponent =
        fixture.debugElement.query(By.directive(TdDynamicFormsComponent)).componentInstance;
      expect(dynamicFormsComponent.valid).toBeFalsy();
      /* tslint:disable-next-line */
      expect(JSON.stringify(dynamicFormsComponent.value)).toBe(JSON.stringify({password: 'mypwd'}));
    });
  })));

  it('should render dynamic elements and show form invalid because character length is more than maxLength', async(inject([], () => {

    let fixture: ComponentFixture<any> = TestBed.createComponent(TdDynamicFormsTestComponent);
    let component: TdDynamicFormsTestComponent = fixture.debugElement.componentInstance;

    expect(fixture.debugElement.queryAll(By.directive(TdDynamicElementComponent)).length).toBe(0);
    component.elements = [{
      name: 'password',
      type: TdDynamicType.Text,
      maxLength: 8,
      default: 'myVeryLongString',
    }];
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(fixture.debugElement.queryAll(By.directive(TdDynamicElementComponent)).length).toBe(1);
      let dynamicFormsComponent: TdDynamicFormsComponent =
        fixture.debugElement.query(By.directive(TdDynamicFormsComponent)).componentInstance;
      expect(dynamicFormsComponent.valid).toBeFalsy();
      /* tslint:disable-next-line */
      expect(JSON.stringify(dynamicFormsComponent.value)).toBe(JSON.stringify({password: 'myVeryLongString'}));
    });
  })));

  it('should render dynamic elements and show form valid', async(inject([], () => {

    let fixture: ComponentFixture<any> = TestBed.createComponent(TdDynamicFormsTestComponent);
    let component: TdDynamicFormsTestComponent = fixture.debugElement.componentInstance;

    expect(fixture.debugElement.queryAll(By.directive(TdDynamicElementComponent)).length).toBe(0);
    component.elements = [{
      name: 'password',
      type: TdDynamicType.Text,
      minLength: 8,
      maxLength: 20,
      default: 'mySuperSecretPw',
    }];
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(fixture.debugElement.queryAll(By.directive(TdDynamicElementComponent)).length).toBe(1);
      let dynamicFormsComponent: TdDynamicFormsComponent =
        fixture.debugElement.query(By.directive(TdDynamicFormsComponent)).componentInstance;
      expect(dynamicFormsComponent.valid).toBeTruthy();
      /* tslint:disable-next-line */
      expect(JSON.stringify(dynamicFormsComponent.value)).toBe(JSON.stringify({password: 'mySuperSecretPw'}));
    });
  })));

  it('should render dynamic elements and show form invalid with custom validation', async(inject([], () => {

    let fixture: ComponentFixture<any> = TestBed.createComponent(TdDynamicFormsTestComponent);
    let component: TdDynamicFormsTestComponent = fixture.debugElement.componentInstance;

    expect(fixture.debugElement.queryAll(By.directive(TdDynamicElementComponent)).length).toBe(0);
    component.elements = [{
      name: 'number',
      type: TdDynamicType.Number,
      default: 15,
      validators: [{
        validator: (control: AbstractControl) => {
          let isValid: boolean = control.value > 21 && control.value < 23;
          return !isValid ? {length: true} : undefined;
        },
      }],
    }];
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(fixture.debugElement.queryAll(By.directive(TdDynamicElementComponent)).length).toBe(1);
      let dynamicFormsComponent: TdDynamicFormsComponent =
          fixture.debugElement.query(By.directive(TdDynamicFormsComponent)).componentInstance;
      expect(dynamicFormsComponent.valid).toBeFalsy();
      /* tslint:disable-next-line */
      expect(JSON.stringify(dynamicFormsComponent.value)).toBe(JSON.stringify({number: 15}));
    });
  })));

  it('should render dynamic elements and show form invalid with angular validation', async(inject([], () => {

    let fixture: ComponentFixture<any> = TestBed.createComponent(TdDynamicFormsTestComponent);
    let component: TdDynamicFormsTestComponent = fixture.debugElement.componentInstance;

    expect(fixture.debugElement.queryAll(By.directive(TdDynamicElementComponent)).length).toBe(0);
    component.elements = [{
      name: 'hexColor',
      type: TdDynamicType.Text,
      required: true,
      default: '#ZZZZZZ',
      validators: [{
        validator: Validators.pattern(/^#[A-Fa-f0-9]{6}$/),
      }],
    }];
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(fixture.debugElement.queryAll(By.directive(TdDynamicElementComponent)).length).toBe(1);
      let dynamicFormsComponent: TdDynamicFormsComponent =
          fixture.debugElement.query(By.directive(TdDynamicFormsComponent)).componentInstance;
      expect(dynamicFormsComponent.valid).toBeFalsy();
      /* tslint:disable-next-line */
      expect(JSON.stringify(dynamicFormsComponent.value)).toBe(JSON.stringify({hexColor: '#ZZZZZZ'}));
    });
  })));

  it('should render dynamic elements and show form valid with custom validations', async(inject([], () => {

    let fixture: ComponentFixture<any> = TestBed.createComponent(TdDynamicFormsTestComponent);
    let component: TdDynamicFormsTestComponent = fixture.debugElement.componentInstance;

    expect(fixture.debugElement.queryAll(By.directive(TdDynamicElementComponent)).length).toBe(0);
    component.elements = [{
      name: 'hexColor',
      type: TdDynamicType.Text,
      required: true,
      default: '#F1F1F1',
      validators: [{
        validator: Validators.pattern(/^#[A-Fa-f0-9]{6}$/),
      }],
    }, {
      name: 'number',
      type: TdDynamicType.Number,
      default: 22,
      validators: [{
        validator: (control: AbstractControl) => {
          let isValid: boolean = control.value > 21 && control.value < 23;
          return !isValid ? {length: true} : undefined;
        },
      }],
    }];
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(fixture.debugElement.queryAll(By.directive(TdDynamicElementComponent)).length).toBe(2);
      let dynamicFormsComponent: TdDynamicFormsComponent =
          fixture.debugElement.query(By.directive(TdDynamicFormsComponent)).componentInstance;
      expect(dynamicFormsComponent.valid).toBeTruthy();
      /* tslint:disable-next-line */
      expect(JSON.stringify(dynamicFormsComponent.value)).toBe(JSON.stringify({hexColor: '#F1F1F1', number: 22}));
    });
  })));
});

@Component({
  template: `
    <td-dynamic-forms [elements]="elements">
    </td-dynamic-forms>`,
})
class TdDynamicFormsTestComponent {
  elements: ITdDynamicElementConfig[];
}
