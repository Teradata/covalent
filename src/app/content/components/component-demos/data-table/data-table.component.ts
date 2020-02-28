import { Component, OnInit } from '@angular/core';

import { InternalDocsService } from '../../../../services';
import { ITdDataTableColumn } from '../../../../../platform/core/data-table';
import { TdDialogService } from '../../../../../platform/core/dialogs';

const DECIMAL_FORMAT: (v: any) => any = (v: number) => v.toFixed(2);

@Component({
  selector: 'data-table-hero',
  styleUrls: ['./data-table.component.scss'],
  templateUrl: './data-table.component.html',
  preserveWhitespaces: true,
})
export class DataTableHeroComponent implements OnInit {
  columns: ITdDataTableColumn[] = [
    { name: 'first_name', label: 'First Name', sortable: true, width: 150 },
    { name: 'last_name', label: 'Last Name', filter: true, sortable: false },
    { name: 'email', label: 'Email', sortable: true, width: 250 },
    { name: 'balance', label: 'Balance', numeric: true, format: DECIMAL_FORMAT },
  ];

  data: any[];
  basicData: any[];

  constructor(private _internalDocsService: InternalDocsService, private _dialogService: TdDialogService) {}

  async ngOnInit(): Promise<void> {
    this.data = await this._internalDocsService.queryData().toPromise();
    this.basicData = this.data.slice(0, 10);
  }

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
}
