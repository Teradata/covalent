import {
  TestBed,
  inject,
  async,
  ComponentFixture,
} from '@angular/core/testing';
import {
  Component,
  DebugElement,
} from '@angular/core';
import {
  FormsModule,
} from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import {
  CovalentTabSelectModule,
} from './public-api';

describe('Component: TabSelect', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TdTabSelectBasicTestComponent,
        TdTabSelectFormsTestComponent,
        TdTabSelectDynamicTestComponent,
      ],
      imports: [
        NoopAnimationsModule,
        FormsModule,
        CovalentTabSelectModule,
      ],
    });
    TestBed.compileComponents();
  }));

  it('should render tab select with all tabs disabled',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdTabSelectBasicTestComponent);
      let component: TdTabSelectBasicTestComponent = fixture.debugElement.componentInstance;
      component.disabled = true;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(fixture.componentInstance.value).toBe(undefined);
        expect(fixture.debugElement.queryAll(By.css('.mat-tab-disabled')).length).toBe(3);
      });
    }),
  ));

  it('should render tab select with all options and click on second option to activate it',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdTabSelectBasicTestComponent);
      let component: TdTabSelectBasicTestComponent = fixture.debugElement.componentInstance;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(fixture.debugElement.queryAll(By.css('.mat-tab-label')).length).toBe(3);
        fixture.debugElement.queryAll(By.css('.mat-tab-label'))[1].nativeElement.click();
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(fixture.debugElement.queryAll(By.css('.mat-tab-label'))[1].nativeElement.className).toContain('mat-tab-label-active');
        });
      });
    }),
  ));

  it('should render tab select with all options with the second option active',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdTabSelectBasicTestComponent);
      let component: TdTabSelectBasicTestComponent = fixture.debugElement.componentInstance;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(fixture.componentInstance.value).toBe(undefined);
        expect(fixture.debugElement.queryAll(By.css('.mat-tab-label')).length).toBe(3);
        fixture.componentInstance.value = 2;
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(fixture.debugElement.queryAll(By.css('.mat-tab-label'))[1].nativeElement.className).toContain('mat-tab-label-active');
        });
      });
    }),
  ));

  it('should render tab select with first option active and then switch to 3rd option (value)',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdTabSelectBasicTestComponent);
      let component: TdTabSelectBasicTestComponent = fixture.debugElement.componentInstance;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(fixture.componentInstance.value).toBe(undefined);
        expect(fixture.debugElement.queryAll(By.css('.mat-tab-label')).length).toBe(3);
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(fixture.debugElement.queryAll(By.css('.mat-tab-label'))[0].nativeElement.className).toContain('mat-tab-label-active');
          fixture.componentInstance.value = 3;
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            expect(fixture.debugElement.queryAll(By.css('.mat-tab-label'))[2].nativeElement.className).toContain('mat-tab-label-active');
          });
        });
      });
    }),
  ));

  it('should render tab select with first option active and then switch to 3rd option (ngModel)',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdTabSelectFormsTestComponent);
      let component: TdTabSelectFormsTestComponent = fixture.debugElement.componentInstance;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(fixture.componentInstance.value).toBe(1);
        expect(fixture.debugElement.queryAll(By.css('.mat-tab-label')).length).toBe(3);
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(fixture.debugElement.queryAll(By.css('.mat-tab-label'))[0].nativeElement.className).toContain('mat-tab-label-active');
          fixture.componentInstance.value = 3;
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            fixture.detectChanges();
            fixture.whenStable().then(() => {
              expect(fixture.debugElement.queryAll(By.css('.mat-tab-label'))[2].nativeElement.className).toContain('mat-tab-label-active');
            });
          });
        });
      });
    }),
  ));

  it('should render dynamic tab options from an ngFor loop',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdTabSelectDynamicTestComponent);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(fixture.componentInstance.value).toBe(undefined);
        expect(fixture.debugElement.queryAll(By.css('.mat-tab-label')).length).toBe(3);
        
        let tabNo: number = 1;
        fixture.debugElement.queryAll(By.css('.mat-tab-label .mat-tab-label-content')).forEach((element: DebugElement) => {
          expect((<HTMLElement>element.nativeElement).innerHTML).toContain('Option ' + tabNo++);
        });
      });
  })));
});

@Component({
  selector: 'td-tab-select-basic-test',
  template: `
  <td-tab-select [(value)]="value" [disabled]="disabled">
    <td-tab-option [value]="1">Option 1</td-tab-option>
    <td-tab-option [value]="2">Option 2</td-tab-option>
    <td-tab-option [value]="3">Option 3</td-tab-option>
  </td-tab-select>
  `,
})
class TdTabSelectBasicTestComponent {
  disabled: boolean = false;
  value: any;
}

@Component({
  selector: 'td-tab-forms-basic-test',
  template: `
  <td-tab-select [(ngModel)]="value">
    <td-tab-option [value]="1">Option 1</td-tab-option>
    <td-tab-option [value]="2">Option 2</td-tab-option>
    <td-tab-option [value]="3">Option 3</td-tab-option>
  </td-tab-select>
  `,
})
class TdTabSelectFormsTestComponent {
  value: any;
}

@Component({
  selector: 'td-tab-select-dynamic-test',
  template: `
  <td-tab-select [(value)]="value">
    <td-tab-option *ngFor="let option of options" [value]="option.value">{{option.label}}</td-tab-option>
  </td-tab-select>
  `,
})
class TdTabSelectDynamicTestComponent {
  options: any[] = [{label: 'Option 1', value: 1}, {label: 'Option 2', value: 2}, {label: 'Option 3', value: 3}];
  value: any;
}
