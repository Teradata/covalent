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

describe('Component: TdPagingBarComponent', () => {

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

        let pageSizeAll: boolean = fixture.debugElement.query(By.directive(TdPagingBarComponent)).componentInstance.pageSizeAll;
        expect(pageSizeAll).toBe(true);
        done();
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
        done();
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
        expect(fixture.debugElement.query(By.css('#firstPageButton'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('#lastPageButton'))).toBeTruthy();
        done();
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
        expect(fixture.debugElement.query(By.css('#pageLinkCount0'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('#pageLinkCount1'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('#pageLinkCount2'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('#pageLinkCount3'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('#pageLinkCount4'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('#pageLinkCount5'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('#pageLinkCount6'))).toBeTruthy();
        done();
      });
    });
  });
});

@Component({
  template: `
    <td-paging-bar pageSizeAllText="SomeOtherText" [pageSizeAll]="true" 
      [pageSizes]="[50,100,200,500,1000,2000]" [total]="9215"></td-paging-bar>`,
})
class TestpageSizeAllTextComponent {
  content: string;
}

@Component({
  template: `
    <td-paging-bar pageSizeAllText="SomeOtherText" [pageSizeAll]="true" 
      [pageSizes]="[37,48]" [total]="9215"></td-paging-bar>`,
})
class TestPageSizesComponent {
  content: string;
}

@Component({
  template: `
    <td-paging-bar pageSizeAllText="SomeOtherText" [pageSizeAll]="true" 
      [initialPage]="3" [pageSizes]="[50,100,200,500,1000,2000]" [total]="9215"></td-paging-bar>`,
})
class TestInitialPageComponent {
  content: string;
}

@Component({
  template: `
    <td-paging-bar pageSizeAllText="All" [pageSizeAll]="true" [pageSizes]="[50,100,200,500,1000,2000]"
      [initialPage]="1" [firstLast]="true" [pageSize]="100" [total]="9333"></td-paging-bar>`,
})
class TestFirstLastComponent {
  content: string;
}

@Component({
  template: `
    <td-paging-bar pageSizeAllText="All" [pageSizeAll]="true" [pageSizes]="[50,100,200,500,1000,2000]" pageLinkCount="7"
      [initialPage]="1" [firstLast]="true" [pageSize]="100" [total]="1345"></td-paging-bar>`,
})
class TestPageLinkCountComponent {
  content: string;
}
