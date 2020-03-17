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
  CovalentStepsModule,
} from '../../steps.module';

@Component({
  selector: 'fake',
  template: `<router-outlet></router-outlet><div>fake</div>`,
})
export class FakeComponent {
}

describe('Component: Nav Steps Vertical', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TdNavStepsVerticalTestComponent,
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
        CovalentStepsModule,
      ],
    });
    TestBed.compileComponents();
  }));

  it('should render 5 step headers and 4 separators',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdNavStepsVerticalTestComponent);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        let headers: DebugElement[] = fixture.debugElement.queryAll(By.css('td-step-header'));
        expect(headers.length).toBe(5);
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          let separators: DebugElement[] = fixture.debugElement.queryAll(By.css('.td-vertical-line'));
          expect(separators.length).toBe(4);
        });
      });
    }),
  ));

});

@Component({
  selector: 'td-nav-steps-vertical-test',
  template: `
    <nav td-steps vertical>
      <a td-step-link [routerLink]="'/'" [state]="'complete'" [sublabel]="'1st step'">My Step A</a>
      <a td-step-link [routerLink]="'/breadcrumbs'" [state]="'complete'" [sublabel]="'2nd step'">My Step B</a>
      <a td-step-link [routerLink]="'/tabselect'" [state]="'complete'" [sublabel]="'3rd step'">My Step C</a>
      <a td-step-link [routerLink]="'/navstepper'" [state]="'required'" [sublabel]="'Almost done'">My Step D</a>
      <a td-step-link [routerLink]="'/breadcrumbs'" [state]="'none'" [sublabel]="'Last and final'">My Step E</a>
    </nav>
  `,
})
class TdNavStepsVerticalTestComponent {
}
