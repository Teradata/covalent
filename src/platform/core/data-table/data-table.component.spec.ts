import {
  TestBed,
  inject,
  async,
  ComponentFixture,
} from '@angular/core/testing';
import 'hammerjs';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TdDataTableComponent, ITdDataTableColumn } from './data-table.component';
import { TdDataTableService } from './services/data-table.service';
import { CovalentDataTableModule } from './data-table.module';
import { NgModule, DebugElement } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('Component: TdPagingBarComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        CovalentDataTableModule,
      ],
      declarations: [
        TestNotSearchableColumnComponent,
      ],
      providers: [
        TdDataTableService,
      ],
    });
    TestBed.compileComponents();
  }));

  it('should create the component', (done: DoneFn) => {
    let fixture: ComponentFixture<any> = TestBed.createComponent(TestNotSearchableColumnComponent);
    let component: TestNotSearchableColumnComponent = fixture.debugElement.componentInstance;

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component).toBeTruthy();
      done();
    });
  });

  it('should set notsearchable and not get search hits and set it to false and get search results', (done: DoneFn) => {
      inject([TdDataTableService], (tdDataTableService: TdDataTableService) => {
        let fixture: ComponentFixture<any> = TestBed.createComponent(TestNotSearchableColumnComponent);
        let component: TestNotSearchableColumnComponent = fixture.debugElement.componentInstance;

        fixture.detectChanges();
        fixture.whenStable().then(() => {
            let columns: ITdDataTableColumn[] = fixture.debugElement.query(By.directive(TdDataTableComponent)).componentInstance.columns;
            expect(columns[1].notsearchable).toBe(true);

            let newData: any[] = component.data;
            newData = tdDataTableService.filterData(newData, '1452-2', true, component.columns);
            fixture.detectChanges();
            fixture.whenStable().then(() => {
                expect(newData.length).toBe(1);

                newData = component.data;
                newData = tdDataTableService.filterData(newData, 'Pork', true, component.columns);
                fixture.detectChanges();
                fixture.whenStable().then(() => {
                   expect(newData.length).toBe(0);

                   component.columns = [
                       { name: 'sku', label: 'SKU #', tooltip: 'Stock Keeping Unit' },
                       { name: 'item', label: 'Item name', notsearchable: false },
                       { name: 'price', label: 'Price (US$)', numeric: true },
                   ];
                   fixture.detectChanges();
                   fixture.whenStable().then(() => {
                       newData = component.data;
                       newData = tdDataTableService.filterData(newData, 'Pork', true, component.columns);
                       fixture.detectChanges();
                       fixture.whenStable().then(() => {
                            expect(newData.length).toBe(1);
                            done();
                        });
                    });
                });
            });
        });
    })();
  });
});

@Component({
  template: `
    <td-data-table
        #dataTable
        [data]="filteredData"
        [columns]="columns">
    </td-data-table>`,
})
class TestNotSearchableColumnComponent {
  data: any[] = [
    { sku: '1452-2', item: 'Pork Chops', price: 32.11 },
    { sku: '1421-0', item: 'Prime Rib', price: 41.15 },
  ];
  columns: ITdDataTableColumn[] = [
    { name: 'sku', label: 'SKU #', tooltip: 'Stock Keeping Unit' },
    { name: 'item', label: 'Item name', notsearchable: true },
    { name: 'price', label: 'Price (US$)', numeric: true },
  ];

  filteredData: any[] = this.data;
}

