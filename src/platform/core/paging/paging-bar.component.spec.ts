import {
  TestBed,
  inject,
  async,
  ComponentFixture,
} from '@angular/core/testing';
import 'hammerjs';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TdPagingBarComponent } from './paging-bar.component';
import { CovalentPagingModule } from './paging.module';
import { NgModule, DebugElement } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('Component: PagingBar', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        CovalentPagingModule,
      ],
      declarations: [
        TestpageSizeAllTextComponent,
        TestInitialPageComponent,
        TestPageSizesComponent,
        TestFirstLastComponent,
        TestPageLinkCountComponent,
      ],
    });
    TestBed.compileComponents();
  }));

  it('should create the component', (done: DoneFn) => {
    let fixture: ComponentFixture<any> = TestBed.createComponent(TestpageSizeAllTextComponent);
    let component: TestpageSizeAllTextComponent = fixture.debugElement.componentInstance;

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component).toBeTruthy();
      done();
    });
  });

  it('should set pageSizeAllText, pageSizeAll and see it in markup', (done: DoneFn) => {
    let fixture: ComponentFixture<any> = TestBed.createComponent(TestpageSizeAllTextComponent);
    let component: TestpageSizeAllTextComponent = fixture.debugElement.componentInstance;

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        let pageSizeAllText: string = fixture.debugElement.query(By.directive(TdPagingBarComponent)).componentInstance.pageSizeAllText;
        expect(pageSizeAllText).toBe('SomeOtherText');

        component.pageSizeAllText = 'aDifferentText';
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          pageSizeAllText = fixture.debugElement.query(By.directive(TdPagingBarComponent)).componentInstance.pageSizeAllText;
          expect(pageSizeAllText).toBe('aDifferentText');

          let pageSizeAll: boolean = fixture.debugElement.query(By.directive(TdPagingBarComponent)).componentInstance.pageSizeAll;
          expect(pageSizeAll).toBe(true);

          component.pageSizeAll = false;
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            pageSizeAll = fixture.debugElement.query(By.directive(TdPagingBarComponent)).componentInstance.pageSizeAll;
            expect(pageSizeAll).toBe(false);
            done();
          });
        });
      });
    });
  });

  it('should set pageSizes and then component instantiate with that pageSize', (done: DoneFn) => {
    let fixture: ComponentFixture<any> = TestBed.createComponent(TestPageSizesComponent);
    let component: TestPageSizesComponent = fixture.debugElement.componentInstance;

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        let pageSize: number = fixture.debugElement.query(By.directive(TdPagingBarComponent)).componentInstance.pageSize;
        expect(pageSize).toBe(37);

        component.pageSizes = [55, 77];
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          pageSize = fixture.debugElement.query(By.directive(TdPagingBarComponent)).componentInstance.pageSize;
          expect(pageSize).toBe(55);
          done();
        });
      });
    });
  });

  it('should set intialPage and then component instantiate with that page', (done: DoneFn) => {
    let fixture: ComponentFixture<any> = TestBed.createComponent(TestInitialPageComponent);
    let component: TestInitialPageComponent = fixture.debugElement.componentInstance;

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        let page: number = fixture.debugElement.query(By.directive(TdPagingBarComponent)).componentInstance.page;
        expect(page).toBe(3);
        done();
      });
    });
  });

  it('should set firstLast and then see buttons in markup', (done: DoneFn) => {
    let fixture: ComponentFixture<any> = TestBed.createComponent(TestFirstLastComponent);
    let component: TestFirstLastComponent = fixture.debugElement.componentInstance;

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        let id: string = fixture.debugElement.query(By.directive(TdPagingBarComponent)).componentInstance.id;
        expect(fixture.debugElement.query(By.css('#td-paging-bar-' + id + '-first-page'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('#td-paging-bar-' + id + '-last-page'))).toBeTruthy();

        component.firstLast = false;
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          id = fixture.debugElement.query(By.directive(TdPagingBarComponent)).componentInstance.id;
          expect(fixture.debugElement.query(By.css('#td-paging-bar-' + id + '-first-page'))).toBeFalsy();
          expect(fixture.debugElement.query(By.css('#td-paging-bar-' + id + '-last-page'))).toBeFalsy();
          done();
        });
      });
    });
  });

  it('should set pageLinkCount and then see buttons in markup', (done: DoneFn) => {
    let fixture: ComponentFixture<any> = TestBed.createComponent(TestPageLinkCountComponent);
    let component: TestPageLinkCountComponent = fixture.debugElement.componentInstance;

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        let id: string = fixture.debugElement.query(By.directive(TdPagingBarComponent)).componentInstance.id;
        expect(fixture.debugElement.query(By.css('#td-paging-bar-' + id + '-page-link-0'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('#td-paging-bar-' + id + '-page-link-1'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('#td-paging-bar-' + id + '-page-link-2'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('#td-paging-bar-' + id + '-page-link-3'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('#td-paging-bar-' + id + '-page-link-4'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('#td-paging-bar-' + id + '-page-link-5'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('#td-paging-bar-' + id + '-page-link-6'))).toBeTruthy();

        component.pageLinkCount = 4;
        component.pageSize = 50;
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            id = fixture.debugElement.query(By.directive(TdPagingBarComponent)).componentInstance.id;
            expect(fixture.debugElement.query(By.css('#td-paging-bar-' + id + '-page-link-0'))).toBeTruthy();
            expect(fixture.debugElement.query(By.css('#td-paging-bar-' + id + '-page-link-1'))).toBeTruthy();
            expect(fixture.debugElement.query(By.css('#td-paging-bar-' + id + '-page-link-2'))).toBeTruthy();
            expect(fixture.debugElement.query(By.css('#td-paging-bar-' + id + '-page-link-3'))).toBeTruthy();
            expect(fixture.debugElement.query(By.css('#td-paging-bar-' + id + '-page-link-4'))).toBeFalsy();
            expect(fixture.debugElement.query(By.css('#td-paging-bar-' + id + '-page-link-5'))).toBeFalsy();
            expect(fixture.debugElement.query(By.css('#td-paging-bar-' + id + '-page-link-6'))).toBeFalsy();
            done();
          });
        });
      });
    });
  });
});

@Component({
  template: `
    <td-paging-bar [pageSizeAllText]="pageSizeAllText" [pageSizeAll]="pageSizeAll" 
      [pageSizes]="[50,100,200,500,1000,2000]" [total]="9215"></td-paging-bar>`,
})
class TestpageSizeAllTextComponent {
  pageSizeAllText: string = 'SomeOtherText';
  pageSizeAll: boolean = true;
}

@Component({
  template: `
    <td-paging-bar pageSizeAllText="SomeOtherText" [pageSizeAll]="true" 
      [pageSizes]="pageSizes" [total]="9215"></td-paging-bar>`,
})
class TestPageSizesComponent {
  pageSizes: number[] = [37, 48];
}

@Component({
  template: `
    <td-paging-bar pageSizeAllText="SomeOtherText" [pageSizeAll]="true" 
      [initialPage]="initialPage" [pageSizes]="[50,100,200,500,1000,2000]" [total]="9215"></td-paging-bar>`,
})
class TestInitialPageComponent {
  initialPage: number = 3;
}

@Component({
  template: `
    <td-paging-bar pageSizeAllText="All" [pageSizeAll]="true" [pageSizes]="[50,100,200,500,1000,2000]"
      [initialPage]="1" [firstLast]="firstLast" [pageSize]="100" [total]="9333"></td-paging-bar>`,
})
class TestFirstLastComponent {
  firstLast: boolean = true;
}

@Component({
  template: `
    <td-paging-bar pageSizeAllText="All" [pageSizeAll]="true" [pageSizes]="[50,100,200,500,1000,2000]" [pageLinkCount]="pageLinkCount"
      [initialPage]="1" [firstLast]="true" [pageSize]="pageSize" [total]="1345"></td-paging-bar>`,
})
class TestPageLinkCountComponent {
  pageLinkCount: number = 7;
  pageSize: number = 100;
}
