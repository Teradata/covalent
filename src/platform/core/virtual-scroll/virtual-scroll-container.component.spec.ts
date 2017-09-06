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
import { MdListModule } from '@angular/material';
import { NgModule, DebugElement } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('Component: VirtualScrollContainer', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        MdListModule,
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
});

@Component({
  template: `
    <md-list>
      <td-virtual-scroll-container [style.height.px]="height" [data]="data">
        <ng-template let-row="row" let-last="last" tdVirtualScrollRow>
          <md-list-item>
            <h4 md-line>{{row}}</h4>
          </md-list-item>
          <md-divider *ngIf="!last"></md-divider>
        </ng-template>
      </td-virtual-scroll-container>
    </md-list>`,
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
