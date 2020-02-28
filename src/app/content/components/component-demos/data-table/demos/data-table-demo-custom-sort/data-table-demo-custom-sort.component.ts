import { Component, OnInit } from '@angular/core';

import { InternalDocsService } from '../../../../../../services';
import {
  ITdDataTableColumn,
  TdDataTableSortingOrder,
  ITdDataTableSortChangeEvent,
} from '../../../../../../../platform/core/data-table';

@Component({
  selector: 'data-table-demo-custom-sort',
  styleUrls: ['./data-table-demo-custom-sort.component.scss'],
  templateUrl: './data-table-demo-custom-sort.component.html',
  preserveWhitespaces: true,
})
export class DataTableDemoCustomSortComponent implements OnInit {
  dateColumns: ITdDataTableColumn[] = [
    { name: 'date', label: 'Date', sortable: true, width: 430 },
    { name: 'first_name', label: 'First Name', sortable: false, width: 170 },
    { name: 'last_name', label: 'Last Name', filter: true, sortable: false },
  ];
  data: any[];
  dateSortData: any[];
  sortBy: string = 'date';
  sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Descending;
  dateSortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Descending;

  constructor(private _internalDocsService: InternalDocsService) {}

  async ngOnInit(): Promise<void> {
    this.data = await this._internalDocsService.queryData().toPromise();
    this.dateSortData = this.data.slice(0, 5);
    this.dateSortData = this.dateSortData.map((row: any) => {
      const randomDate: Date = new Date(
        new Date(2012, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2012, 0, 1).getTime()),
      );
      row.date = randomDate;
      return row;
    });
  }

  sort(sortEvent: ITdDataTableSortChangeEvent): void {
    this.sortBy = sortEvent.name;
    this.sortOrder = sortEvent.order;
  }

  sortDates(sortEvent: ITdDataTableSortChangeEvent): void {
    this.dateSortOrder = sortEvent.order;
    this.filterDateData();
  }

  filterDateData(): void {
    this.dateSortData = Array.from(this.dateSortData); // Change the array reference to trigger OnPush
    this.dateSortData.sort((a: any, b: any) => {
      let direction: number = 0;
      if (this.dateSortOrder === TdDataTableSortingOrder.Descending) {
        direction = 1;
      } else if (this.dateSortOrder === TdDataTableSortingOrder.Ascending) {
        direction = -1;
      }
      if (a.date < b.date) {
        return direction;
      } else if (a.date > b.date) {
        return -direction;
      } else {
        return direction;
      }
    });
  }
}
