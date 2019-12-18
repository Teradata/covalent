import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';
import { DataTableDemoBasicComponent } from './data-table-demo-basic/data-table-demo-basic.component';
import { CovalentDataTableModule } from '@covalent/core/data-table';
import { DataTableDemoRoutingModule } from './data-table-demo-routing.module';
import { DataTableDemoComponent } from './data-table-demo.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [DataTableDemoBasicComponent, DataTableDemoComponent],
  imports: [
    DemoModule,
    DataTableDemoRoutingModule,
    /** Covalent Modules */
    CovalentDataTableModule,
    /** Angular Modules */
    CommonModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class DataTableDemosModule {}
