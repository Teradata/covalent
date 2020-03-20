import { Component, OnInit } from '@angular/core';

import { InternalDocsService } from '../../../../../../services';
import { TdDataTableSortingOrder, ITdDataTableSortChangeEvent } from '../../../../../../../platform/core/data-table';

@Component({
  selector: 'data-table-demo-sort',
  styleUrls: ['./data-table-demo-sort.component.scss'],
  templateUrl: './data-table-demo-sort.component.html',
})
export class DataTableDemoSortComponent implements OnInit {
  data: any[];
  basicData: any[];
  dateSortData: any[];
  atomicData: any[];

  sortBy: string = 'date';
  sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Descending;

  constructor(private _internalDocsService: InternalDocsService) {}

  ngOnInit(): void {
    this.data = this._internalDocsService.getData();
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

  sort(sortEvent: ITdDataTableSortChangeEvent): void {
    this.sortOrder =
      this.sortOrder === TdDataTableSortingOrder.Ascending
        ? TdDataTableSortingOrder.Descending
        : TdDataTableSortingOrder.Ascending;
    this.sortBy = sortEvent.name;
    this.filterData();
  }

  filterData(): void {
    this.atomicData = Array.from(this.atomicData); // Change the array reference to trigger OnPush
    this.atomicData.sort((a: any, b: any) => {
      let direction: number = 0;
      if (this.sortOrder === TdDataTableSortingOrder.Descending) {
        direction = 1;
      } else if (this.sortOrder === TdDataTableSortingOrder.Ascending) {
        direction = -1;
      }
      if (a[this.sortBy] < b[this.sortBy]) {
        return direction;
      } else if (a[this.sortBy] > b[this.sortBy]) {
        return -direction;
      } else {
        return direction;
      }
    });
  }
}
