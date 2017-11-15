import {
  TestBed,
  inject,
  async,
  ComponentFixture,
} from '@angular/core/testing';
import 'hammerjs';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TdVirtualScrollContainerComponent } from './virtual-scroll-container.component';
import { CovalentVirtualScrollModule } from './virtual-scroll.module';
import { MatListModule } from '@angular/material';
import { NgModule, DebugElement } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('Component: VirtualScrollContainer', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        MatListModule,
        CovalentVirtualScrollModule,
      ],
      declarations: [
        TestBasicVirtualScrollComponent,
      ],
    });
    TestBed.compileComponents();
  }));

  it('should render only what fits the viewport', (done: DoneFn) => {
    let fixture: ComponentFixture<any> = TestBed.createComponent(TestBasicVirtualScrollComponent);
    let component: TestBasicVirtualScrollComponent = fixture.debugElement.componentInstance;
    let virtualScrollComponent: DebugElement = fixture.debugElement.query(By.directive(TdVirtualScrollContainerComponent));
    
    component.height = 200;
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(virtualScrollComponent.componentInstance.fromRow).toBe(0);
        expect(virtualScrollComponent.componentInstance.virtualData.length).toBe(8);
        component.height = 400;
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(virtualScrollComponent.componentInstance.fromRow).toBe(0);
          expect(virtualScrollComponent.componentInstance.virtualData.length).toBe(12);
          component.height = 300;
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            expect(virtualScrollComponent.componentInstance.fromRow).toBe(0);
            expect(virtualScrollComponent.componentInstance.virtualData.length).toBe(10);
            done();
          });
        });
      });
    });
  });

  it('should render rows and scroll to 2th row', (done: DoneFn) => {
    let fixture: ComponentFixture<any> = TestBed.createComponent(TestBasicVirtualScrollComponent);
    let component: TestBasicVirtualScrollComponent = fixture.debugElement.componentInstance;
    let virtualScrollComponent: DebugElement = fixture.debugElement.query(By.directive(TdVirtualScrollContainerComponent));

    component.height = 100;
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(virtualScrollComponent.componentInstance.fromRow).toBe(0);
        expect(virtualScrollComponent.componentInstance.virtualData.length).toBe(6);
        fixture.detectChanges();
        virtualScrollComponent.componentInstance.scrollTo(2);
        expect(virtualScrollComponent.nativeElement.scrollTop).toBe(virtualScrollComponent.componentInstance.rowHeight * 2);
        done();
      });
    });
  });

  it('should render rows, clear them and render them again', (done: DoneFn) => {
    let fixture: ComponentFixture<any> = TestBed.createComponent(TestBasicVirtualScrollComponent);
    let component: TestBasicVirtualScrollComponent = fixture.debugElement.componentInstance;
    let virtualScrollComponent: DebugElement = fixture.debugElement.query(By.directive(TdVirtualScrollContainerComponent));

    component.height = 100;
    let data: any[] = component.data;
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(virtualScrollComponent.componentInstance.fromRow).toBe(0);
        expect(virtualScrollComponent.componentInstance.virtualData.length).toBe(6);
        component.data = [];
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(virtualScrollComponent.componentInstance.fromRow).toBe(0);
          expect(virtualScrollComponent.componentInstance.virtualData.length).toBe(0);
          component.data = data;
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            expect(virtualScrollComponent.componentInstance.fromRow).toBe(0);
            expect(virtualScrollComponent.componentInstance.virtualData.length).toBe(6);
            done();
          });
        });
      });
    });
  });
});

@Component({
  template: `
    <mat-list>
      <td-virtual-scroll-container [style.height.px]="height" [data]="data">
        <ng-template let-row="row" let-last="last" tdVirtualScrollRow>
          <mat-list-item>
            <h4 matLine>{{row}}</h4>
          </mat-list-item>
          <mat-divider *ngIf="!last"></mat-divider>
        </ng-template>
      </td-virtual-scroll-container>
    </mat-list>`,
})
class TestBasicVirtualScrollComponent {
  height: number = 200;
  data: any[] = [
    'Pizza',
    'Burger',
    'Tacos',
    'Sushi',
    'Wings',
    'Salad',
    'Fries',
    'Nuggets',
    'Quesadilla',
    'Steak',
    'Hot Dog',
    'Torta',
    'Rice',
    'Sandwich',
    'Tuna',
    'Milk',
    'Soda',
    'Tea',
  ];
}
