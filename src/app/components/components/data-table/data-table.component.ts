import { Component } from '@angular/core';

@Component({
  selector: 'data-table-demo',
  styleUrls: ['data-table.component.scss'],
  templateUrl: 'data-table.component.html',
})
export class DataTableDemoComponent {
  columns: any[] = [
    { name: 'name',  label: 'Name' },
    { name: 'phone', label: 'Phone' },
    { name: 'ext',   label: 'Ext.' },
  ];

  data: any[] = [
    { name: 'Felipe Coury', phone: '555-555-5532' },
    { name: 'Carlos Taborda', phone: '555-555-4042', ext: '1022' },
    { name: 'Anderson Crabtree', phone: '555-555-4042' },
    { name: 'Peter Cetera', phone: '555-555-4042', ext: '1024' },
    { name: 'Jack Nicholson', phone: '555-555-4042' },
    { name: 'Rachel Black', phone: '555-555-4042' },
    { name: 'Jessica Brown', phone: '555-555-4042' },
    { name: 'Michael Simpson', phone: '555-555-4042' },
    { name: 'Anthony Bourdain', phone: '555-555-4042' },
    { name: 'Kyle Doyle', phone: '555-555-4042', ext: '1033' },
    { name: 'Monica Johanson', phone: '555-555-4042' },
    { name: 'Pamela Ryan', phone: '555-555-4042' },
    { name: 'Rita Lee', phone: '555-555-4042' },
  ];

  sortBy: string = 'name';

  rowSelection: boolean = false;
  multiple: boolean = true;

  toggleRowSelection(): void {
    this.rowSelection = !this.rowSelection;
  }

  toggleRowSelectionMultiple(): void {
    this.multiple = !this.multiple;
  }

  toggleSortBy(): void {
    const columns = this.columns.map((c: any) => c.name);
    const idx = columns.indexOf(this.sortBy);
    if (idx < columns.length - 1) {
      this.sortBy = columns[idx + 1];
    } else {
      this.sortBy = columns[0];
    }
  }

  sortChanged(event): void {
    if (this.sortBy !== event.column.name) {
      this.sortBy = event.column.name;
    }
  }
}
