import {
  TestBed,
  inject,
  async,
  ComponentFixture,
} from '@angular/core/testing';
import 'hammerjs';
import { Component } from '@angular/core';
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
});

@Component({
  template: `
    <td-dynamic-forms [elements]="elements">
    </td-dynamic-forms>`,
})
class TdDynamicFormsTestComponent {
  elements: ITdDynamicElementConfig[];
}
