import { Component, OnInit } from '@angular/core';
import { ITdDataTableColumn } from '@covalent/core/data-table';
import { InternalDocsService } from 'app/services';

@Component({
  selector: 'data-table-demo-column-sort-order',
  templateUrl: './data-table-demo-column-sort-order.component.html',
  styleUrls: ['./data-table-demo-column-sort-order.component.scss'],
})
export class DataTableDemoColumnSortOrderComponent implements OnInit {
  configWidthColumns: ITdDataTableColumn[] = [
    { name: 'first_name', label: 'First name', width: 150, columnSortOrder: 1 },
    { name: 'last_name', label: 'Last name', width: { min: 150, max: 250 } },
    { name: 'email', label: 'Email', width: 250, columnSortOrder: 2 },
    { name: 'img', label: '', width: 100 },
  ];

  data: any[];
  basicData: any[];

  constructor(private _internalDocsService: InternalDocsService) {}

  ngOnInit(): void {
    this.data = this._internalDocsService.getData();
    this.basicData = this.data.slice(0, 10);
  }
}
