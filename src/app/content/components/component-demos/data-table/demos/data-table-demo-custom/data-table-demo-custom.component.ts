import { Component, OnInit } from '@angular/core';

import { InternalDocsService } from '../../../../../../services';
import { ITdDataTableColumn } from '../../../../../../../platform/core/data-table';
import { TdDialogService } from '../../../../../../../platform/core/dialogs';

const DECIMAL_FORMAT: (v: any) => any = (v: number) => v.toFixed(2);

@Component({
  selector: 'data-table-demo-custom',
  styleUrls: ['./data-table-demo-custom.component.scss'],
  templateUrl: './data-table-demo-custom.component.html',
})
export class DataTableDemoCustomComponent implements OnInit {
  columns: ITdDataTableColumn[] = [
    { name: 'first_name', label: 'First Name', sortable: true, width: 150 },
    { name: 'last_name', label: 'Last Name', filter: true, sortable: false },
    { name: 'email', label: 'Email', sortable: true, width: 250 },
    { name: 'balance', label: 'Balance', numeric: true, format: DECIMAL_FORMAT },
  ];

  data: any[];
  basicData: any[];
  constructor(private _internalDocsService: InternalDocsService, private _dialogService: TdDialogService) {}

  openPrompt(row: any, name: string): void {
    this._dialogService
      .openPrompt({
        message: 'Enter comment?',
        value: row[name],
      })
      .afterClosed()
      .subscribe((value: any) => {
        if (value !== undefined) {
          row[name] = value;
        }
      });
  }

  ngOnInit(): void {
    this.data = this._internalDocsService.getData();
    this.basicData = this.data.slice(0, 10);
  }
}
