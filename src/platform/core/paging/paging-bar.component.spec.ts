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
import { MdInputModule } from '@angular/material';
import { NgModule, DebugElement } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('Component: PagingBar', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        MdInputModule,
        CovalentPagingModule,
      ],
      declarations: [
        TestpageSizeAllTextComponent,
        TestInitialPageComponent,
        TestPageSizesComponent,
        TestFirstLastComponent,
        TestPageLinkCountComponent,
        TestGoToComponent,
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

  it('should jump to a page using an external material input', (done: DoneFn) => {
    let fixture: ComponentFixture<any> = TestBed.createComponent(TestGoToComponent);
    let component: TestGoToComponent = fixture.debugElement.componentInstance;
    let pagingComponent: DebugElement = fixture.debugElement.query(By.directive(TdPagingBarComponent));
    let inputElement: DebugElement = fixture.debugElement.query(By.css('input'));

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(fixture.debugElement.query(By.css('p')).nativeElement.innerHTML).toBe('Go to:');
      expect(fixture.debugElement.query(By.css('input')).nativeElement).toBeTruthy();
      expect(inputElement.nativeElement.value).toBe('1');
      
      inputElement.nativeElement.value = '6';
      const event: KeyboardEvent = new KeyboardEvent('keyup', {
          'key': 'Enter',
      });
      inputElement.nativeElement.dispatchEvent(event);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(pagingComponent.componentInstance.page).toBe(6);
        expect(inputElement.nativeElement.value).toBe('6');
        done();
      });
    });
  });

  it('should not jump to a page if the page doesnt exist', (done: DoneFn) => {
    let fixture: ComponentFixture<any> = TestBed.createComponent(TestGoToComponent);
    let component: TestGoToComponent = fixture.debugElement.componentInstance;
    let pagingComponent: DebugElement = fixture.debugElement.query(By.directive(TdPagingBarComponent));
    let inputElement: DebugElement = fixture.debugElement.query(By.css('input'));

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(fixture.debugElement.query(By.css('input')).nativeElement).toBeTruthy();
      expect(inputElement.nativeElement.value).toBe('1');
      
      inputElement.nativeElement.value = '8';
      const event: KeyboardEvent = new KeyboardEvent('keyup', {
          'key': 'Enter',
      });
      inputElement.nativeElement.dispatchEvent(event);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(pagingComponent.componentInstance.page).toBe(1);
        expect(inputElement.nativeElement.value).toBe('1');
        done();
      });
    });
  });

  it('should floor a value before jumping to a page', (done: DoneFn) => {
    let fixture: ComponentFixture<any> = TestBed.createComponent(TestGoToComponent);
    let component: TestGoToComponent = fixture.debugElement.componentInstance;
    let pagingComponent: DebugElement = fixture.debugElement.query(By.directive(TdPagingBarComponent));
    let inputElement: DebugElement = fixture.debugElement.query(By.css('input'));

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(fixture.debugElement.query(By.css('input')).nativeElement).toBeTruthy();
      expect(inputElement.nativeElement.value).toBe('1');
      
      inputElement.nativeElement.value = '4.556';
      const event: KeyboardEvent = new KeyboardEvent('keyup', {
          'key': 'Enter',
      });
      inputElement.nativeElement.dispatchEvent(event);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(pagingComponent.componentInstance.page).toBe(4);
        expect(inputElement.nativeElement.value).toBe('4');
        done();
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

@Component({
  template: `
    <td-paging-bar #pagingBar [pageSizes]="[50,100,200,500,1000,2000]" [pageSize]="100" [total]="650">
      <p>Go to:</p>
      <md-input-container>
        <input #goToInput
                mdInput
                type="number"
                [min]="1"
                [max]="pagingBar.maxPage"
                [value]="pagingBar.page"
                (blur)="goToInput.value = pagingBar.page"
                (keyup.enter)="pagingBar.navigateToPage(goToInput.value); goToInput.value = pagingBar.page"/>
      </md-input-container>
      
    </td-paging-bar>`,
})
class TestGoToComponent {
}
