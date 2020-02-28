import { Component, OnInit } from '@angular/core';

import { InternalDocsService } from '../../../../../../services';
import { ITdDataTableColumn } from '../../../../../../../platform/core/data-table';

@Component({
  selector: 'data-table-demo-basic',
  styleUrls: ['./data-table-demo-basic.component.scss'],
  templateUrl: './data-table-demo-basic.component.html',
  preserveWhitespaces: true,
})
export class DataTableDemoBasicComponent implements OnInit {
  configWidthColumns: ITdDataTableColumn[] = [
    { name: 'first_name', label: 'First name', width: 150 },
    { name: 'last_name', label: 'Last name', width: { min: 150, max: 250 } },
    { name: 'email', label: 'Email', width: 250 },
    { name: 'img', label: '', width: 100 },
  ];

  data: any[];
  basicData: any[];

  constructor(private _internalDocsService: InternalDocsService) {}

  async ngOnInit(): Promise<void> {
    this.data = await this._internalDocsService.queryData().toPromise();
    this.basicData = this.data.slice(0, 10);
  }
}
