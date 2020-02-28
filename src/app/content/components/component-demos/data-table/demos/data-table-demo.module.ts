import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';
import { DataTableDemoAtomicComponent } from './data-table-demo-atomic/data-table-demo-atomic.component';
import { DataTableDemoBasicComponent } from './data-table-demo-basic/data-table-demo-basic.component';
import { DataTableDemoCustomComponent } from './data-table-demo-custom/data-table-demo-custom.component';
import { DataTableDemoCustomSortComponent } from './data-table-demo-custom-sort/data-table-demo-custom-sort.component';
import { DataTableDemoWithComponentsComponent } from './data-table-demo-with-components/data-table-demo-with-components.component';
import { CovalentDataTableModule } from '@covalent/core/data-table';
import { CovalentPagingModule } from '@covalent/core/paging';
import { CovalentSearchModule } from '@covalent/core/search';
import { DataTableDemoRoutingModule } from './data-table-demo-routing.module';
import { DataTableDemoComponent } from './data-table-demo.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    DataTableDemoComponent,
    DataTableDemoAtomicComponent,
    DataTableDemoBasicComponent,
    DataTableDemoCustomComponent,
    DataTableDemoCustomSortComponent,
    DataTableDemoWithComponentsComponent,
  ],
  imports: [
    DemoModule,
    DataTableDemoRoutingModule,
    /** Covalent Modules */
    CovalentDataTableModule,
    CovalentPagingModule,
    CovalentSearchModule,
    /** Angular Modules */
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatSelectModule,
    MatSlideToggleModule,
  ],
})
export class DataTableDemosModule {}
