import {
  TestBed,
  inject,
  async,
  ComponentFixture,
} from '@angular/core/testing';
import 'hammerjs';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TdDataTableColumnComponent } from './data-table-column/data-table-column.component';
import { TdDataTableRowComponent } from './data-table-row/data-table-row.component';
import { TdDataTableComponent, ITdDataTableColumn } from './data-table.component';
import { TdDataTableService } from './services/data-table.service';
import { CovalentDataTableModule } from './data-table.module';
import { NgModule, DebugElement } from '@angular/core';
import { MatCheckbox, MatPseudoCheckbox } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('Component: DataTable', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        FormsModule,
        CovalentDataTableModule,
      ],
      declarations: [
        TdDataTableBasicTestComponent,
        TdDataTableSelectableTestComponent,
        TdDataTableRowClickTestComponent,
        TdDataTableSelectableRowClickTestComponent,
        TdDataTableModelTestComponent,
        TdDataTableCompareWithTestComponent,
      ],
      providers: [
        TdDataTableService,
      ],
    });
    TestBed.compileComponents();
  }));

  it('should set hidden and not get search hits and set it to false and get search results', (done: DoneFn) => {
    inject([TdDataTableService], (tdDataTableService: TdDataTableService) => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdDataTableBasicTestComponent);
      let component: TdDataTableBasicTestComponent = fixture.debugElement.componentInstance;
      
      component.columns[1].hidden = false;
      // backwards compatability test
      expect(tdDataTableService.filterData(component.data, '1452-2', true).length).toBe(1);

      fixture.detectChanges();
      fixture.whenStable().then(() => {
        // check if there are no hidden columns
        expect(fixture.debugElement.queryAll(By.directive(TdDataTableColumnComponent))
          .filter((col: DebugElement) => {
            return (<any>(<HTMLElement>col.nativeElement).attributes).hidden;
          }).length).toBe(0);
        
        // check how many rows would return that contain Pork if no hidden columns
        expect(tdDataTableService.filterData(component.data, 'Pork', true, component.columns
          .filter((column: ITdDataTableColumn) => {
            return column.hidden === true;
          }).map((column: ITdDataTableColumn) => {
            return column.name;
          })).length).toBe(1);

        component.columns[1].hidden = true;
        fixture.debugElement.query(By.directive(TdDataTableComponent)).componentInstance.refresh();
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          // check if there are hidden columns
          expect(fixture.debugElement.queryAll(By.directive(TdDataTableColumnComponent))
            .filter((col: DebugElement) => {
              return (<any>(<HTMLElement>col.nativeElement).attributes).hidden;
            }).length).toBe(1);

          // check how many rows would return that contain Pork if the column is hidden
          expect(tdDataTableService.filterData(component.data, 'Pork', true, component.columns
            .filter((column: ITdDataTableColumn) => {
              return column.hidden === true;
            }).map((column: ITdDataTableColumn) => {
              return column.name;
            })).length).toBe(0);
          done();
        });
      });
    })();
  });

  it('should set filter and not get search hits and set it to false and get search results', (done: DoneFn) => {
    inject([TdDataTableService], (tdDataTableService: TdDataTableService) => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdDataTableBasicTestComponent);
      let component: TdDataTableBasicTestComponent = fixture.debugElement.componentInstance;

      component.columns[1].filter = false;

      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(component.columns[1].filter).toBe(false);

        // backwards compatability test
        expect(tdDataTableService.filterData(component.data, '1452-2', true).length).toBe(1);

        // check how many rows would return that contain Pork if the second column has filter = false
        expect(tdDataTableService.filterData(component.data, 'Pork', true, component.columns
          .filter((column: ITdDataTableColumn) => {
            return (typeof column.filter !== undefined && column.filter === false);
          }).map((column: ITdDataTableColumn) => {
            return column.name;
          })).length).toBe(0);

        // set the second column as filtered
        component.columns[1].filter = true;
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          // check how many rows would return that contain Pork if the seconds column has filter = true
          expect(tdDataTableService.filterData(component.data, 'Pork', true, component.columns
            .filter((column: ITdDataTableColumn) => {
              return (typeof column.filter !== undefined && column.filter === false);
            }).map((column: ITdDataTableColumn) => {
              return column.name;
            })).length).toBe(1);
          done();
        });
      });
    })();
  });

  describe('selectable and multiple', () => {
 
    it('should not set the data input and not fail', (done: DoneFn) => {
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

    it('should select one and be in indeterminate state, select all and then unselect all',
      (done: DoneFn) => { inject([], () => {
        let fixture: ComponentFixture<any> = TestBed.createComponent(TdDataTableSelectableTestComponent);
        let element: DebugElement = fixture.debugElement;
        let component: TdDataTableSelectableTestComponent = fixture.debugElement.componentInstance;
        
        component.selectable = true;
        component.multiple = true;
        component.columns = [
          { name: 'sku', label: 'SKU #' },
          { name: 'item', label: 'Item name' },
          { name: 'price', label: 'Price (US$)', numeric: true },
        ];

        component.data = [{ sku: '1452-2', item: 'Pork Chops', price: 32.11 },
                          { sku: '1421-0', item: 'Prime Rib', price: 41.15 },
                          { sku: '1452-1', item: 'Sirlone', price: 22.11 },
                          { sku: '1421-3', item: 'T-Bone', price: 51.15 }];

        fixture.detectChanges();
        fixture.whenStable().then(() => {
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            let dataTableComponent: TdDataTableComponent = fixture.debugElement.query(By.directive(TdDataTableComponent)).componentInstance;
            // check how many rows were rendered
            expect(fixture.debugElement.queryAll(By.directive(TdDataTableRowComponent)).length).toBe(4);
            // check to see checkboxes states
            expect(dataTableComponent.indeterminate).toBeFalsy();
            expect(dataTableComponent.allSelected).toBeFalsy();
            // select a row with a click event
            fixture.debugElement.queryAll(By.directive(MatPseudoCheckbox))[2].triggerEventHandler('click', new Event('click'));
            fixture.detectChanges();
            fixture.whenStable().then(() => {
              // check to see if its in indeterminate state
              expect(dataTableComponent.indeterminate).toBeTruthy();
              expect(dataTableComponent.allSelected).toBeFalsy();
              // select the rest of the rows by clicking in selectAll
              fixture.debugElement.query(By.directive(MatCheckbox)).triggerEventHandler('click', new Event('click'));
              fixture.detectChanges();
              fixture.whenStable().then(() => {
                // check to see if its in indeterminate state and allSelected
                expect(dataTableComponent.indeterminate).toBeTruthy();
                expect(dataTableComponent.allSelected).toBeTruthy();
                // unselect all rows by clicking in unselect all
                fixture.debugElement.query(By.directive(MatCheckbox)).triggerEventHandler('click', new Event('click'));
                fixture.detectChanges();
                fixture.whenStable().then(() => {
                  // check to see if its not in indeterminate state and not allSelected
                  expect(dataTableComponent.indeterminate).toBeFalsy();
                  expect(dataTableComponent.allSelected).toBeFalsy();
                  done();
                });
              });
            });
          });
        });
      })();
    });

    it('should be interminate when atleast one row is selected and allSelected when all rows are selected',
      (done: DoneFn) => { inject([], () => {
        let fixture: ComponentFixture<any> = TestBed.createComponent(TdDataTableSelectableTestComponent);
        let element: DebugElement = fixture.debugElement;
        let component: TdDataTableSelectableTestComponent = fixture.debugElement.componentInstance;
        
        component.selectable = true;
        component.multiple = true;
        component.columns = [
          { name: 'sku', label: 'SKU #' },
          { name: 'item', label: 'Item name' },
          { name: 'price', label: 'Price (US$)', numeric: true },
        ];

        component.data = [{ sku: '1452-2', item: 'Pork Chops', price: 32.11 },
                          { sku: '1421-0', item: 'Prime Rib', price: 41.15 },
                          { sku: '1452-1', item: 'Sirlone', price: 22.11 },
                          { sku: '1421-3', item: 'T-Bone', price: 51.15 }];
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            let dataTableComponent: TdDataTableComponent = fixture.debugElement.query(By.directive(TdDataTableComponent)).componentInstance;
            // check how many rows were rendered
            expect(fixture.debugElement.queryAll(By.directive(TdDataTableRowComponent)).length).toBe(4);
            // check to see checkboxes states
            expect(dataTableComponent.indeterminate).toBeFalsy();
            expect(dataTableComponent.allSelected).toBeFalsy();
            // select a row with a click event
            fixture.debugElement.queryAll(By.directive(MatPseudoCheckbox))[2].triggerEventHandler('click', new Event('click'));
            fixture.detectChanges();
            fixture.whenStable().then(() => {
              // check to see if its in indeterminate state
              expect(dataTableComponent.indeterminate).toBeTruthy();
              expect(dataTableComponent.allSelected).toBeFalsy();
              // select the rest of the rows
              fixture.debugElement.queryAll(By.directive(MatPseudoCheckbox))[0].triggerEventHandler('click', new Event('click'));
              fixture.debugElement.queryAll(By.directive(MatPseudoCheckbox))[1].triggerEventHandler('click', new Event('click'));
              fixture.debugElement.queryAll(By.directive(MatPseudoCheckbox))[3].triggerEventHandler('click', new Event('click'));
              fixture.detectChanges();
              fixture.whenStable().then(() => {
                // check to see if its in indeterminate state and allSelected
                expect(dataTableComponent.indeterminate).toBeTruthy();
                expect(dataTableComponent.allSelected).toBeTruthy();
                // unselect one of the rows
                fixture.debugElement.queryAll(By.directive(MatPseudoCheckbox))[2].triggerEventHandler('click', new Event('click'));
                fixture.detectChanges();
                fixture.whenStable().then(() => {
                  // check to see if its in indeterminate state and not allSelected
                  expect(dataTableComponent.indeterminate).toBeTruthy();
                  expect(dataTableComponent.allSelected).toBeFalsy();
                  done();
                });
              });
            });
          });
        });
      })();
    });

    it('should shift click and select a range of rows',
      (done: DoneFn) => { inject([], () => {
        let fixture: ComponentFixture<any> = TestBed.createComponent(TdDataTableSelectableTestComponent);
        let element: DebugElement = fixture.debugElement;
        let component: TdDataTableSelectableTestComponent = fixture.debugElement.componentInstance;
        
        component.selectable = true;
        component.multiple = true;
        component.columns = [
          { name: 'sku', label: 'SKU #' },
          { name: 'item', label: 'Item name' },
          { name: 'price', label: 'Price (US$)', numeric: true },
        ];

        component.data = [{ sku: '1452-2', item: 'Pork Chops', price: 32.11 },
                          { sku: '1421-0', item: 'Prime Rib', price: 41.15 },
                          { sku: '1452-1', item: 'Sirlone', price: 22.11 },
                          { sku: '1421-3', item: 'T-Bone', price: 51.15 }];

        fixture.detectChanges();
        fixture.whenStable().then(() => {
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            let dataTableComponent: TdDataTableComponent = fixture.debugElement.query(By.directive(TdDataTableComponent)).componentInstance;
            // check how many rows were rendered
            expect(fixture.debugElement.queryAll(By.directive(TdDataTableRowComponent)).length).toBe(4);
            // check to see checkboxes states
            expect(dataTableComponent.indeterminate).toBeFalsy();
            expect(dataTableComponent.allSelected).toBeFalsy();

            fixture.detectChanges();
            fixture.whenStable().then(() => {
              // select the first and last row with shift key also selected and should then select all checkboxes
              let clickEvent: MouseEvent = document.createEvent('MouseEvents');          
              // the 12th parameter below 'true' sets the shift key to be clicked at the same time as as the mouse click
              clickEvent.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, document.body.parentNode);
              fixture.debugElement.queryAll(By.directive(MatPseudoCheckbox))[0].nativeElement.dispatchEvent(clickEvent);
              let shiftClickEvent: MouseEvent = document.createEvent('MouseEvents'); 
              shiftClickEvent.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, true, false, 0, document.body.parentNode);
              fixture.debugElement.queryAll(By.directive(MatPseudoCheckbox))[3].nativeElement.dispatchEvent(shiftClickEvent);
              fixture.detectChanges();
              fixture.whenStable().then(() => {
                // check to see if allSelected is true
                expect(dataTableComponent.allSelected).toBeTruthy();
                done();
              });
            });
          });
        });
      })();
    });

    it('should click on a row and see the rowClick Event',
      async(inject([], () => {
        let fixture: ComponentFixture<any> = TestBed.createComponent(TdDataTableRowClickTestComponent);
        let component: TdDataTableRowClickTestComponent = fixture.debugElement.componentInstance;

        let eventSpy: jasmine.Spy = spyOn(component, 'clickEvent');

        fixture.detectChanges();
        fixture.whenStable().then(() => {
          fixture.debugElement.queryAll(By.directive(TdDataTableRowComponent))[1].nativeElement.click();
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            expect(eventSpy.calls.count()).toBe(0);

            component.clickable = true;
            fixture.detectChanges();
            fixture.whenStable().then(() => {
              fixture.debugElement.queryAll(By.directive(TdDataTableRowComponent))[1].nativeElement.click();
              fixture.detectChanges();
              fixture.whenStable().then(() => {
                expect(eventSpy.calls.count()).toBe(1);
              });
            });
          });
        });
    })));

    it('should click on a row and see the rowClick event only when clicking on row',
      async(inject([], () => {
        let fixture: ComponentFixture<any> = TestBed.createComponent(TdDataTableSelectableRowClickTestComponent);
        let component: TdDataTableSelectableRowClickTestComponent = fixture.debugElement.componentInstance;

        component.clickable = true;
        component.selectable = true;

        let clickEventSpy: jasmine.Spy = spyOn(component, 'clickEvent');
        let selectEventSpy: jasmine.Spy = spyOn(component, 'selectEvent');

        fixture.detectChanges();
        fixture.whenStable().then(() => {
          fixture.debugElement.queryAll(By.directive(TdDataTableRowComponent))[1].nativeElement.click();
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            expect(clickEventSpy.calls.count()).toBe(1);
            expect(selectEventSpy.calls.count()).toBe(0);

            fixture.detectChanges();
            fixture.whenStable().then(() => {
              fixture.debugElement.queryAll(By.directive(MatPseudoCheckbox))[0].nativeElement.click();
              fixture.detectChanges();
              fixture.whenStable().then(() => {
                expect(clickEventSpy.calls.count()).toBe(1);
                expect(selectEventSpy.calls.count()).toBe(1);
              });
            });
          });
        });
    })));

    it('should load table and have first row checked by reference',
      async(inject([], () => {
        let fixture: ComponentFixture<any> = TestBed.createComponent(TdDataTableModelTestComponent);
        let component: TdDataTableModelTestComponent = fixture.debugElement.componentInstance;

        component.selectedRows = [component.data[0]];

        fixture.detectChanges();
        fixture.whenStable().then(() => {
          fixture.detectChanges();
          expect(fixture.debugElement.queryAll(By.directive(MatPseudoCheckbox))[0].componentInstance.state).toBe('checked');
          expect(fixture.debugElement.queryAll(By.directive(MatPseudoCheckbox))[1].componentInstance.state).toBe('unchecked');
        });
    })));

    it('should load table and have no rows checked by reference',
      async(inject([], () => {
        let fixture: ComponentFixture<any> = TestBed.createComponent(TdDataTableModelTestComponent);
        let component: TdDataTableModelTestComponent = fixture.debugElement.componentInstance;

        component.selectedRows = [{ sku: '1452-2', item: 'Pork Chops', price: 32.11 }];

        fixture.detectChanges();
        fixture.whenStable().then(() => {
          fixture.detectChanges();
          expect(fixture.debugElement.queryAll(By.directive(MatPseudoCheckbox))[0].componentInstance.state).toBe('unchecked');
          expect(fixture.debugElement.queryAll(By.directive(MatPseudoCheckbox))[1].componentInstance.state).toBe('unchecked');
        });
    })));

    it('should load table and have first row checked using [compareWith]',
      async(inject([], () => {
        let fixture: ComponentFixture<any> = TestBed.createComponent(TdDataTableCompareWithTestComponent);
        let component: TdDataTableCompareWithTestComponent = fixture.debugElement.componentInstance;

        component.selectedRows = [{ sku: '1452-2', item: 'Pork Chops', price: 32.11 }];

        fixture.detectChanges();
        fixture.whenStable().then(() => {
          fixture.detectChanges();
          expect(fixture.debugElement.queryAll(By.directive(MatPseudoCheckbox))[0].componentInstance.state).toBe('checked');
          expect(fixture.debugElement.queryAll(By.directive(MatPseudoCheckbox))[1].componentInstance.state).toBe('unchecked');
        });
    })));
  });
});

@Component({
  template: `
    <td-data-table
        [data]="data"
        [columns]="columns">
    </td-data-table>`,
})
class TdDataTableBasicTestComponent {
  data: any[] = [
    { sku: '1452-2', item: 'Pork Chops', price: 32.11 },
    { sku: '1421-0', item: 'Prime Rib', price: 41.15 },
  ];
  columns: ITdDataTableColumn[] = [
    { name: 'sku', label: 'SKU #' },
    { name: 'item', label: 'Item name' },
    { name: 'price', label: 'Price (US$)', numeric: true },
  ];
}

@Component({
  template: `
    <td-data-table
        [data]="data"
        [columns]="columns"
        [selectable]="selectable"
        [multiple]="multiple"
        [style.height.px]="200">
    </td-data-table>`,
})
class TdDataTableSelectableTestComponent {
  data: any;
  columns: any;
  selectable: boolean = false;
  multiple: boolean = false;
}

@Component({
  template: `
    <td-data-table
        [data]="data"
        [columns]="columns"
        [clickable]="clickable"
        (rowClick)="clickEvent()">
    </td-data-table>`,
})
class TdDataTableRowClickTestComponent {
  data: any[] = [
    { sku: '1452-2', item: 'Pork Chops', price: 32.11 },
    { sku: '1421-0', item: 'Prime Rib', price: 41.15 },
  ];
  columns: ITdDataTableColumn[] = [
    { name: 'sku', label: 'SKU #' },
    { name: 'item', label: 'Item name' },
    { name: 'price', label: 'Price (US$)', numeric: true },
  ];
  clickable: boolean = false;
  clickEvent(): void {
    /* noop */
  }
}

@Component({
  template: `
    <td-data-table
        [data]="data"
        [columns]="columns"
        [selectable]="selectable"
        [clickable]="clickable"
        (rowClick)="clickEvent()"
        (rowSelect)="selectEvent()">
    </td-data-table>`,
})
class TdDataTableSelectableRowClickTestComponent {
  data: any[] = [
    { sku: '1452-2', item: 'Pork Chops', price: 32.11 },
    { sku: '1421-0', item: 'Prime Rib', price: 41.15 },
  ];
  columns: ITdDataTableColumn[] = [
    { name: 'sku', label: 'SKU #' },
    { name: 'item', label: 'Item name' },
    { name: 'price', label: 'Price (US$)', numeric: true },
  ];
  selectable: boolean = false;
  clickable: boolean = false;
  clickEvent(): void {
    /* noop */
  }
  selectEvent(): void {
    /* noop */
  }
}

@Component({
  template: `
    <td-data-table
        [data]="data"
        [columns]="columns"
        [selectable]="true"
        [(ngModel)]="selectedRows">
    </td-data-table>`,
})
class TdDataTableModelTestComponent {
  data: any[] = [
    { sku: '1452-2', item: 'Pork Chops', price: 32.11 },
    { sku: '1421-0', item: 'Prime Rib', price: 41.15 },
  ];
  columns: ITdDataTableColumn[] = [
    { name: 'sku', label: 'SKU #' },
    { name: 'item', label: 'Item name' },
    { name: 'price', label: 'Price (US$)', numeric: true },
  ];
  selectedRows: any[];
}

@Component({
  template: `
    <td-data-table
        [data]="data"
        [columns]="columns"
        [selectable]="true"
        [(ngModel)]="selectedRows"
        [compareWith]="compareWith">
    </td-data-table>`,
})
class TdDataTableCompareWithTestComponent {
  data: any[] = [
    { sku: '1452-2', item: 'Pork Chops', price: 32.11 },
    { sku: '1421-0', item: 'Prime Rib', price: 41.15 },
  ];
  columns: ITdDataTableColumn[] = [
    { name: 'sku', label: 'SKU #' },
    { name: 'item', label: 'Item name' },
    { name: 'price', label: 'Price (US$)', numeric: true },
  ];
  selectedRows: any[];
  compareWith: (row: any, model: any) => boolean = (row: any, model: any) => {
    return row.sku === model.sku;
  }
}
