import {
  TestBed,
  inject,
  async,
  ComponentFixture,
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {
  Component,
  DebugElement,
} from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import {
  CovalentNavStepperModule,
} from '../public-api';
import {
  TdHorizontalStepperComponent,
} from './horizontal-nav-stepper.component';

@Component({
  selector: 'fake',
  template: `<router-outlet></router-outlet><div>fake</div>`,
})
export class FakeComponent {
}

describe('Component: Horizontal Nav Stepper', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TdHorizontalStepperTestComponent,
        FakeComponent,
      ],
      imports: [
        NoopAnimationsModule,
        RouterTestingModule.withRoutes([
          { path: '', component: FakeComponent },
          { path: 'layouts', component: FakeComponent },
          { path: 'layouts2', component: FakeComponent },
          { path: 'layouts3', component: FakeComponent },
        ]),
        CovalentNavStepperModule,
      ],
    });
    TestBed.compileComponents();
  }));

  it('should render 5 Steps',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdHorizontalStepperTestComponent);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        let steps: TdHorizontalStepperComponent = fixture.debugElement.query(By.directive(TdHorizontalStepperComponent)).componentInstance;
        expect(steps.count).toBe(5);
      });
    }),
  ));

  it('should resize window and hide steps',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdHorizontalStepperTestComponent);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        document.body.style.width = '150px';
        window.dispatchEvent(new Event('resize'));
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          let steps: TdHorizontalStepperComponent = fixture.debugElement.query(By.directive(TdHorizontalStepperComponent)).componentInstance;
          expect(steps.hiddenSteps.length).toBe(3);
        });
      });
    }),
  ));
});

@Component({
  selector: 'td-breadcrumbs-test',
  template: `
    <td-horizontal-nav-stepper #horizontalNavStepper>
      <a td-nav-step [routerLink]="'/'" [state]="'complete'" [sublabel]="'1st step'">My Step A</a>
      <a td-nav-step [routerLink]="'/breadcrumbs'" [state]="'complete'" [sublabel]="'2nd step'">My Step B</a>
      <a td-nav-step [routerLink]="'/tabselect'" [state]="'complete'" [sublabel]="'3rd step'">My Step C</a>
      <a td-nav-step [routerLink]="'/navstepper'" [state]="'required'" [sublabel]="'Almost done'">My Step D</a>
      <a td-nav-step [routerLink]="'/breadcrumbs'" [state]="'none'" [sublabel]="'Last and final'">My Step E</a>
    </td-horizontal-nav-stepper>
  `,
})
class TdHorizontalStepperTestComponent {
}
