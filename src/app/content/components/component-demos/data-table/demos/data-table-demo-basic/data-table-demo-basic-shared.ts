import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { CovalentDataTableModule } from '@covalent/core/data-table';
import { DataTableDemoBasicComponent } from './data-table-demo-basic.component';

@NgModule({
  declarations: [DataTableDemoBasicComponent],
  imports: [
    CovalentDataTableModule,
    /** Angular Modules */
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
  ],
  exports: [DataTableDemoBasicComponent],
})
export class DataTableDemoBasicSharedModule {}
