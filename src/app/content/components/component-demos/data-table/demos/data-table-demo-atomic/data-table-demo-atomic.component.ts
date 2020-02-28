import { Component, OnInit } from '@angular/core';

import { InternalDocsService } from '../../../../../../services';
import { TdDataTableSortingOrder, ITdDataTableSortChangeEvent } from '../../../../../../../platform/core/data-table';

@Component({
  selector: 'data-table-demo-atomic',
  styleUrls: ['./data-table-demo-atomic.component.scss'],
  templateUrl: './data-table-demo-atomic.component.html',
  preserveWhitespaces: true,
})
export class DataTableDemoAtomicComponent implements OnInit {
  data: any[];
  basicData: any[];
  dateSortData: any[];
  atomicData: any[];

  atomicSortBy: string = 'date';
  atomicSortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Descending;

  constructor(private _internalDocsService: InternalDocsService) {}

  async ngOnInit(): Promise<void> {
    this.data = await this._internalDocsService.queryData().toPromise();
    this.basicData = this.data.slice(0, 10);
    this.dateSortData = this.data.slice(0, 5);
    this.dateSortData = this.dateSortData.map((row: any) => {
      const randomDate: Date = new Date(
        new Date(2012, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2012, 0, 1).getTime()),
      );
      row.date = randomDate;
      return row;
    });
    this.atomicData = [].concat(this.dateSortData);
  }

  sortAtomic(sortEvent: ITdDataTableSortChangeEvent): void {
    this.atomicSortOrder =
      this.atomicSortOrder === TdDataTableSortingOrder.Ascending
        ? TdDataTableSortingOrder.Descending
        : TdDataTableSortingOrder.Ascending;
    this.atomicSortBy = sortEvent.name;
    this.filterAtomicData();
  }

  filterAtomicData(): void {
    this.atomicData = Array.from(this.atomicData); // Change the array reference to trigger OnPush
    this.atomicData.sort((a: any, b: any) => {
      let direction: number = 0;
      if (this.atomicSortOrder === TdDataTableSortingOrder.Descending) {
        direction = 1;
      } else if (this.atomicSortOrder === TdDataTableSortingOrder.Ascending) {
        direction = -1;
      }
      if (a[this.atomicSortBy] < b[this.atomicSortBy]) {
        return direction;
      } else if (a[this.atomicSortBy] > b[this.atomicSortBy]) {
        return -direction;
      } else {
        return direction;
      }
    });
  }
}
