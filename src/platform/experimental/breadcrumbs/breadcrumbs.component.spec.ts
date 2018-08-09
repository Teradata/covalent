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
  CovalentBreadcrumbsModule,
} from './public-api';
import {
  TdBreadcrumbsComponent,
} from './breadcrumbs.component';

@Component({
  selector: 'fake',
  template: `<router-outlet></router-outlet><div>fake</div>`,
})
export class FakeComponent {
}

describe('Component: Breadcrumbs', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TdBreadcrumbsTestComponent,
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
        CovalentBreadcrumbsModule,
      ],
    });
    TestBed.compileComponents();
  }));

  it('should render 5 Breadcrumbs',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdBreadcrumbsTestComponent);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        let breadcrumbs: TdBreadcrumbsComponent = fixture.debugElement.query(By.directive(TdBreadcrumbsComponent)).componentInstance;
        expect(breadcrumbs.count).toBe(5);
      });
    }),
  ));

  it('should change the separatorIcon',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdBreadcrumbsTestComponent);
      let component: TdBreadcrumbsTestComponent = fixture.debugElement.componentInstance;
      component.separatorIcon = 'flight_land';
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(fixture.debugElement.queryAll(By.css('.td-breadcrumb'))[1].nativeElement.innerHTML.indexOf('flight_land')).toBeGreaterThan(-1);
      });
    }),
  ));

  it('should resize window and hide breadcrumbs',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdBreadcrumbsTestComponent);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.debugElement.query(By.directive(TdBreadcrumbsComponent)).nativeElement.parentElement.style.width = '300px';
        window.dispatchEvent(new Event('resize'));
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          let breadcrumbs: TdBreadcrumbsComponent = fixture.debugElement.query(By.directive(TdBreadcrumbsComponent)).componentInstance;
          expect(breadcrumbs.hiddenBreadcrumbs.length).toBe(2);
        });
      });
    }),
  ));
});

@Component({
  selector: 'td-breadcrumbs-test',
  template: `
  <div style="width: {{width}}">
    <td-breadcrumbs #breadcrumbs class="pad-left" separatorIcon="{{separatorIcon}}">
      <a td-breadcrumb [routerLink]="'/'">Home</a>
      <a td-breadcrumb [routerLink]="'/layouts'">Layouts</a>
      <a td-breadcrumb [routerLink]="'/layouts2'">Layouts2</a>
      <a td-breadcrumb [routerLink]="'/layouts3'">Layouts3</a>
      <td-breadcrumb class="tc-grey-500">Manage List</td-breadcrumb>
    </td-breadcrumbs>
  </div>
  `,
})
class TdBreadcrumbsTestComponent {
  separatorIcon: string = 'motorcycle';
}
