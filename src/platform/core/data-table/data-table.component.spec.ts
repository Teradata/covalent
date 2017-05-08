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

describe('Component: DataTable', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        CovalentDataTableModule,
      ],
      declarations: [
        TestHiddenColumnComponent,
        TestFilterColumnComponent,
        TdDataTableSelectableTestComponent,
      ],
      providers: [
        TdDataTableService,
      ],
    });
    TestBed.compileComponents();
  }));

  it('should create the component', (done: DoneFn) => {
    let fixture: ComponentFixture<any> = TestBed.createComponent(TestHiddenColumnComponent);
    let component: TestHiddenColumnComponent = fixture.debugElement.componentInstance;

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component).toBeTruthy();
      done();
    });
  });

  it('should set hidden and not get search hits and set it to false and get search results', (done: DoneFn) => {
      inject([TdDataTableService], (tdDataTableService: TdDataTableService) => {
        let fixture: ComponentFixture<any> = TestBed.createComponent(TestHiddenColumnComponent);
        let component: TestHiddenColumnComponent = fixture.debugElement.componentInstance;

        fixture.detectChanges();
        fixture.whenStable().then(() => {
            let columns: ITdDataTableColumn[] = fixture.debugElement.query(By.directive(TdDataTableComponent)).componentInstance.columns;
            expect(columns[1].hidden).toBe(false);

            let newData: any[] = component.data;
            // backwards compatability test
            newData = tdDataTableService.filterData(newData, '1452-2', true);
            fixture.detectChanges();
            fixture.whenStable().then(() => {
                expect(newData.length).toBe(1);

                let nonSearchAbleColumns: string[] = component.columns
                .filter((column: ITdDataTableColumn) => {
                  return column.hidden === true;
                }).map((column: ITdDataTableColumn) => {
                  return column.name;
                });
                newData = component.data;
                newData = tdDataTableService.filterData(newData, 'Pork', true, nonSearchAbleColumns);
                fixture.detectChanges();
                fixture.whenStable().then(() => {
                   expect(newData.length).toBe(1);

                   component.columns = [
                       { name: 'sku', label: 'SKU #', tooltip: 'Stock Keeping Unit' },
                       { name: 'item', label: 'Item name', hidden: true },
                       { name: 'price', label: 'Price (US$)', numeric: true },
                   ];
                   fixture.debugElement.query(By.directive(TdDataTableComponent)).componentInstance.refresh();
                   fixture.detectChanges();
                   fixture.whenStable().then(() => {
                       expect(columns[1].hidden).toBe(false);

                       nonSearchAbleColumns = component.columns
                       .filter((column: ITdDataTableColumn) => {
                        return column.hidden === true;
                       }).map((column: ITdDataTableColumn) => {
                         return column.name;
                       });
                       newData = component.data;
                       newData = tdDataTableService.filterData(newData, 'Pork', true, nonSearchAbleColumns);
                       fixture.detectChanges();
                       fixture.whenStable().then(() => {
                            expect(newData.length).toBe(0);
                            done();
                        });
                    });
                });
            });
        });
    })();
  });

  it('should set filter and not get search hits and set it to false and get search results', (done: DoneFn) => {
    inject([TdDataTableService], (tdDataTableService: TdDataTableService) => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TestFilterColumnComponent);
      let component: TestFilterColumnComponent = fixture.debugElement.componentInstance;

      fixture.detectChanges();
      fixture.whenStable().then(() => {
        let columns: ITdDataTableColumn[] = fixture.debugElement.query(By.directive(TdDataTableComponent)).componentInstance.columns;
        expect(columns[1].filter).toBe(false);

        let newData: any[] = component.data;
        // backwards compatability test
        newData = tdDataTableService.filterData(newData, '1452-2', true);
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(newData.length).toBe(1);

          let nonSearchAbleColumns: string[] = component.columns
          .filter((column: ITdDataTableColumn) => {
            return (typeof column.filter !== undefined && column.filter === false);
          }).map((column: ITdDataTableColumn) => {
            return column.name;
          });
          newData = component.data;
          newData = tdDataTableService.filterData(newData, 'Pork', true, nonSearchAbleColumns);
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            expect(newData.length).toBe(0);

            fixture.detectChanges();
            fixture.whenStable().then(() => {
              newData = component.data;
              newData = tdDataTableService.filterData(newData, 'Pork', true, []);
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

  it('should not set the data input and not fail when selectable and multiple', (done: DoneFn) => {
    inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdDataTableSelectableTestComponent);
      let element: DebugElement = fixture.debugElement;
      let component: TdDataTableSelectableTestComponent = fixture.debugElement.componentInstance;
      
      component.selectable = true;
      component.multiple = true;

      fixture.detectChanges();
      fixture.whenStable().then(() => {
        // if it finishes in means it didnt fail
        done();
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
class TestHiddenColumnComponent {
  data: any[] = [
    { sku: '1452-2', item: 'Pork Chops', price: 32.11 },
    { sku: '1421-0', item: 'Prime Rib', price: 41.15 },
  ];
  columns: ITdDataTableColumn[] = [
    { name: 'sku', label: 'SKU #', tooltip: 'Stock Keeping Unit' },
    { name: 'item', label: 'Item name', hidden: false },
    { name: 'price', label: 'Price (US$)', numeric: true },
  ];

  filteredData: any[] = this.data;
}

@Component({
  template: `
    <td-data-table
        #dataTable
        [data]="filteredData"
        [columns]="columns">
    </td-data-table>`,
})
class TestFilterColumnComponent {
  data: any[] = [
    { sku: '1452-2', item: 'Pork Chops', price: 32.11 },
    { sku: '1421-0', item: 'Prime Rib', price: 41.15 },
  ];
  columns: ITdDataTableColumn[] = [
    { name: 'sku', label: 'SKU #', tooltip: 'Stock Keeping Unit' },
    { name: 'item', label: 'Item name', filter: false },
    { name: 'price', label: 'Price (US$)', numeric: true },
  ];

  filteredData: any[] = this.data;
}

@Component({
  template: `
    <td-data-table
        [data]="data"
        [columns]="columns"
        [selectable]="selectable"
        [multiple]="multiple">
    </td-data-table>`,
})
class TdDataTableSelectableTestComponent {
  data: any;
  columns: any;
  selectable: boolean = false;
  multiple: boolean = false;
}
