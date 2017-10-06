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
import { MatInputModule } from '@angular/material';
import { NgModule, DebugElement } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('Component: PagingBar', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        MatInputModule,
        CovalentPagingModule,
      ],
      declarations: [
        TestInitialPageComponent,
        TestPageSizeComponent,
        TestFirstLastComponent,
        TestPageLinkCountComponent,
        TestGoToComponent,
      ],
    });
    TestBed.compileComponents();
  }));

  it('should set [pageSize] dynamically', (done: DoneFn) => {
    let fixture: ComponentFixture<any> = TestBed.createComponent(TestPageSizeComponent);
    let component: TestPageSizeComponent = fixture.debugElement.componentInstance;
    let pagingComponent: DebugElement = fixture.debugElement.query(By.directive(TdPagingBarComponent));
    
    component.pageSize = 100;
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(pagingComponent.componentInstance.pageSize).toBe(100);
      component.pageSize = 40;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(pagingComponent.componentInstance.pageSize).toBe(40);
        component.pageSize = 56;
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(pagingComponent.componentInstance.pageSize).toBe(56);
          done();
        });
      });
    });
  });

  it('should set [initialPage] and instanciate the paging bar at that page', (done: DoneFn) => {
    let fixture: ComponentFixture<any> = TestBed.createComponent(TestInitialPageComponent);
    let component: TestInitialPageComponent = fixture.debugElement.componentInstance;

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      let page: number = fixture.debugElement.query(By.directive(TdPagingBarComponent)).componentInstance.page;
      expect(page).toBe(3);
      done();
    });
  });

  it('should render first/last buttons and then remove them when setting [firstLast] to false', (done: DoneFn) => {
    let fixture: ComponentFixture<any> = TestBed.createComponent(TestFirstLastComponent);
    let component: TestFirstLastComponent = fixture.debugElement.componentInstance;

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(fixture.debugElement.query(By.css('.td-paging-bar-first-page'))).toBeTruthy();
      expect(fixture.debugElement.query(By.css('.td-paging-bar-last-page'))).toBeTruthy();

      component.firstLast = false;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(fixture.debugElement.query(By.css('.td-paging-bar-first-page'))).toBeFalsy();
        expect(fixture.debugElement.query(By.css('.td-paging-bar-last-page'))).toBeFalsy();
        done();
      });
    });
  });

  it('should set [pageLinkCount] and then see buttons in markup and then change count', (done: DoneFn) => {
    let fixture: ComponentFixture<any> = TestBed.createComponent(TestPageLinkCountComponent);
    let component: TestPageLinkCountComponent = fixture.debugElement.componentInstance;
    component.pageLinkCount = 6;
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(fixture.debugElement.queryAll(By.css('.td-paging-bar-link-page')).length).toBe(6);

      component.pageLinkCount = 4;
      component.pageSize = 50;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(fixture.debugElement.queryAll(By.css('.td-paging-bar-link-page')).length).toBe(4);
        done();
      });
    });
  });

  it('should navigate to page link 5 and then 3', (done: DoneFn) => {
    let fixture: ComponentFixture<any> = TestBed.createComponent(TestPageLinkCountComponent);
    let component: TestPageLinkCountComponent = fixture.debugElement.componentInstance;
    let pagingComponent: DebugElement = fixture.debugElement.query(By.directive(TdPagingBarComponent));
    component.pageLinkCount = 5;
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(pagingComponent.componentInstance.page).toBe(1);
      fixture.debugElement.queryAll(By.css('.td-paging-bar-link-page'))[4].nativeElement.click();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(pagingComponent.componentInstance.page).toBe(5);
        fixture.debugElement.queryAll(By.css('.td-paging-bar-link-page'))[0].nativeElement.click();
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(pagingComponent.componentInstance.page).toBe(3);
          done();
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
    <td-paging-bar [pageSize]="pageSize" [total]="9215">
    </td-paging-bar>`,
})
class TestPageSizeComponent {
  pageSize: number = 37;
}

@Component({
  template: `
    <td-paging-bar [initialPage]="initialPage" [total]="9215"></td-paging-bar>`,
})
class TestInitialPageComponent {
  initialPage: number = 3;
}

@Component({
  template: `
    <td-paging-bar [firstLast]="firstLast" [total]="9333"></td-paging-bar>`,
})
class TestFirstLastComponent {
  firstLast: boolean = true;
}

@Component({
  template: `
    <td-paging-bar [pageLinkCount]="pageLinkCount" [pageSize]="pageSize" [total]="1345"></td-paging-bar>`,
})
class TestPageLinkCountComponent {
  pageLinkCount: number = 7;
  pageSize: number = 100;
}

@Component({
  template: `
    <td-paging-bar #pagingBar [pageSize]="100" [total]="650">
      <p>Go to:</p>
      <mat-form-field>
        <input #goToInput
                matInput
                type="number"
                [min]="1"
                [max]="pagingBar.maxPage"
                [value]="pagingBar.page"
                (blur)="goToInput.value = pagingBar.page"
                (keyup.enter)="pagingBar.navigateToPage(goToInput.value); goToInput.value = pagingBar.page"/>
      </mat-form-field>
      
    </td-paging-bar>`,
})
class TestGoToComponent {
}
