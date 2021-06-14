import { TestBed, inject, ComponentFixture, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Component, DebugElement } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CovalentBreadcrumbsModule } from './';
import { TdBreadcrumbsComponent } from './breadcrumbs.component';

interface IBreadcrumbItem {
  route: string;
  text: string;
}
const sampleBreadcrumb: IBreadcrumbItem = { route: 'test', text: 'test' };

@Component({
  selector: 'fake',
  template: `
    <router-outlet></router-outlet>
    <div>fake</div>
  `,
})
export class FakeComponent {}

describe('Component: Breadcrumbs', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [
          TdBreadcrumbsTestComponent,
          TdBreadcrumbsToolbarTestComponent,
          TdBreadcrumbsSizeIconChangeTestComponent,
          FakeComponent,
        ],
        imports: [
          NoopAnimationsModule,
          MatToolbarModule,
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
    }),
  );

  it(
    'should render 5 Breadcrumbs',
    waitForAsync(
      inject([], () => {
        const fixture: ComponentFixture<any> = TestBed.createComponent(TdBreadcrumbsTestComponent);
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          const breadcrumbs: TdBreadcrumbsComponent = fixture.debugElement.query(
            By.directive(TdBreadcrumbsComponent),
          ).componentInstance;
          expect(breadcrumbs.count).toBe(5);
        });
      }),
    ),
  );

  it(
    'should change the separatorIcon',
    waitForAsync(
      inject([], () => {
        const fixture: ComponentFixture<any> = TestBed.createComponent(TdBreadcrumbsTestComponent);
        const component: TdBreadcrumbsTestComponent = fixture.debugElement.componentInstance;
        component.separatorIcon = 'flight_land';
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(
            fixture.debugElement.queryAll(By.css('.td-breadcrumb'))[1].nativeElement.innerHTML.indexOf('flight_land'),
          ).toBeGreaterThan(-1);
        });
      }),
    ),
  );

  it(
    'should resize window and hide breadcrumbs',
    waitForAsync(
      inject([], () => {
        const fixture: ComponentFixture<any> = TestBed.createComponent(TdBreadcrumbsTestComponent);
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          document.body.style.width = '300px';
          window.dispatchEvent(new Event('resize'));
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            const breadcrumbs: TdBreadcrumbsComponent = fixture.debugElement.query(
              By.directive(TdBreadcrumbsComponent),
            ).componentInstance;
            expect(breadcrumbs.hiddenBreadcrumbs.length).toBe(2);
          });
        });
      }),
    ),
  );

  it(
    'should resize window and hide breadcrumbs with breadcrumb in mat-toolbar with padding',
    waitForAsync(
      inject([], () => {
        const fixture: ComponentFixture<any> = TestBed.createComponent(TdBreadcrumbsToolbarTestComponent);
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          document.body.style.width = '300px';
          window.dispatchEvent(new Event('resize'));
          fixture.detectChanges();
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            const breadcrumbs: TdBreadcrumbsComponent = fixture.debugElement.query(
              By.directive(TdBreadcrumbsComponent),
            ).componentInstance;
            expect(breadcrumbs.hiddenBreadcrumbs.length).toBe(3);
          });
        });
      }),
    ),
  );

  it(
    'should react to change of breadcrumbs size & separator icon',
    waitForAsync(
      inject([], async () => {
        const fixture: ComponentFixture<TdBreadcrumbsSizeIconChangeTestComponent> = TestBed.createComponent(
          TdBreadcrumbsSizeIconChangeTestComponent,
        );

        fixture.detectChanges();
        await fixture.whenStable();
        fixture.detectChanges();
        await fixture.whenStable();

        let breadcrumbs: DebugElement = fixture.debugElement.query(By.directive(TdBreadcrumbsComponent));
        expect(breadcrumbs.children.length).toBe(1);
        expect(breadcrumbs.children[0].query(By.css('mat-icon'))).toBeFalsy();
        const component: TdBreadcrumbsSizeIconChangeTestComponent = fixture.debugElement.componentInstance;
        component.breadcrumbItems = [...component.breadcrumbItems, sampleBreadcrumb];

        fixture.detectChanges();
        await fixture.whenStable();
        fixture.detectChanges();
        await fixture.whenStable();

        breadcrumbs = fixture.debugElement.query(By.directive(TdBreadcrumbsComponent));
        expect(breadcrumbs.children.length).toBe(2);
        expect(breadcrumbs.children[0].query(By.css('mat-icon'))).toBeTruthy();
        expect(breadcrumbs.children[0].query(By.css('mat-icon')).nativeElement.textContent).toContain('chevron_right');
        expect(breadcrumbs.children[1].query(By.css('mat-icon'))).toBeFalsy();
        component.separatorIcon = 'motorcycle';

        fixture.detectChanges();
        await fixture.whenStable();
        fixture.detectChanges();
        await fixture.whenStable();

        breadcrumbs = fixture.debugElement.query(By.directive(TdBreadcrumbsComponent));
        expect(breadcrumbs.children.length).toBe(2);
        expect(breadcrumbs.children[0].query(By.css('mat-icon'))).toBeTruthy();
        expect(breadcrumbs.children[0].query(By.css('mat-icon')).nativeElement.textContent).toContain('motorcycle');
        expect(breadcrumbs.children[1].query(By.css('mat-icon'))).toBeFalsy();

        component.breadcrumbItems = [sampleBreadcrumb];

        fixture.detectChanges();
        await fixture.whenStable();
        fixture.detectChanges();
        await fixture.whenStable();

        expect(breadcrumbs.children.length).toBe(1);
        expect(breadcrumbs.children[0].query(By.css('mat-icon'))).toBeFalsy();
      }),
    ),
  );
});

@Component({
  selector: 'td-breadcrumbs-test',
  template: `
    <div [style.width]="width">
      <td-breadcrumbs #breadcrumbs class="pad-left" separatorIcon="{{ separatorIcon }}">
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

@Component({
  selector: 'td-breadcrumbs-test-toolbar',
  template: `
    <mat-toolbar class="dense-toolbar push-top" color="primary">
      <mat-toolbar-row>
        <td-breadcrumbs #breadcrumbsPadded class="pad-left">
          <a td-breadcrumb routerLink="/">Home</a>
          <a td-breadcrumb routerLink="/layouts">Layouts</a>
          <a td-breadcrumb routerLink="/layouts2">Layouts2</a>
          <a td-breadcrumb routerLink="/layouts3">Layouts3</a>
          <td-breadcrumb class="tc-grey-500">Manage List</td-breadcrumb>
        </td-breadcrumbs>
      </mat-toolbar-row>
    </mat-toolbar>
  `,
})
class TdBreadcrumbsToolbarTestComponent {
  separatorIcon: string = 'motorcycle';
}

@Component({
  selector: 'td-breadcrumbs-size-icon-change-test',
  template: `
    <div>
      <td-breadcrumbs #breadcrumbs [separatorIcon]="separatorIcon">
        <a *ngFor="let breadcrumb of breadcrumbItems" td-breadcrumb [routerLink]="breadcrumb.route">
          {{ breadcrumb.text }}
        </a>
      </td-breadcrumbs>
    </div>
  `,
})
class TdBreadcrumbsSizeIconChangeTestComponent {
  breadcrumbItems: IBreadcrumbItem[] = [sampleBreadcrumb];
  separatorIcon: string = 'chevron_right';
}
