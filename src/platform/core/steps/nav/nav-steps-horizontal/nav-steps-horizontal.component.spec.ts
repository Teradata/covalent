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

describe('Component: Nav Steps Horizontal', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TdNavStepsHorizontalTestComponent,
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
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdNavStepsHorizontalTestComponent);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        let headers: DebugElement[] = fixture.debugElement.queryAll(By.css('td-step-header'));
        expect(headers.length).toBe(5);
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          let separators: DebugElement[] = fixture.debugElement.queryAll(By.css('.td-horizontal-line'));
          expect(separators.length).toBe(4);
        });
      });
    }),
  ));

  it('should hide paginations buttons when steps fit screen',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdNavStepsHorizontalTestComponent);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        document.body.style.width = '900px';
        window.dispatchEvent(new Event('resize'));
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          let pagination: DebugElement[] = fixture.debugElement.queryAll(By.css('.td-step-header-pagination'));
          expect(pagination.length).toBe(2);
          expect(fixture.debugElement.query(By.css('.td-step-header-pagination-controls-enabled'))).toBeFalsy();
        });
      });
    }),
  ));

  it('should resize window and hide pagination buttons if steps dont fit screen',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdNavStepsHorizontalTestComponent);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        document.body.style.width = '150px';
        window.dispatchEvent(new Event('resize'));
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          let pagination: DebugElement[] = fixture.debugElement.queryAll(By.css('.td-step-header-pagination'));
          expect(pagination.length).toBe(2);
          expect(fixture.debugElement.query(By.css('.td-step-header-pagination-controls-enabled'))).toBeTruthy();
          expect(pagination[0].classes['td-step-header-pagination-disabled']).toBeTruthy();
          expect(pagination[1].classes['td-step-header-pagination-disabled']).toBeFalsy();
        });
      });
    }),
  ));
});

@Component({
  selector: 'td-nav-steps-horizontal-test',
  template: `
    <nav td-steps horizontal>
      <a td-step-link [routerLink]="'/'" [state]="'complete'" [sublabel]="'1st step'">My Step A</a>
      <a td-step-link [routerLink]="'/breadcrumbs'" [state]="'complete'" [sublabel]="'2nd step'">My Step B</a>
      <a td-step-link [routerLink]="'/tabselect'" [state]="'complete'" [sublabel]="'3rd step'">My Step C</a>
      <a td-step-link [routerLink]="'/navstepper'" [state]="'required'" [sublabel]="'Almost done'">My Step D</a>
      <a td-step-link [routerLink]="'/breadcrumbs'" [state]="'none'" [sublabel]="'Last and final'">My Step E</a>
    </nav>
  `,
})
class TdNavStepsHorizontalTestComponent {
}
